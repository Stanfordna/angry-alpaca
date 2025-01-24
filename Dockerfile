# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

################################################################################
# Use bookworm image for base image for all stages. It's pretty small.
################################################################################
FROM node:lts-bookworm-slim AS base
USER root
RUN useradd --create-home --shell /bin/bash angry-alpaca
# Set working directory for all build stages.
WORKDIR /home/angry-alpaca

################################################################################
# Create a stage for installing production dependecies.
################################################################################
FROM base AS dependencies
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid copying them.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

################################################################################
# Create a stage for building the production release in the ./build/ directory.
################################################################################
FROM dependencies AS build
COPY --chown=angry-alpaca:angry-alpaca public public
# Copy node_modules from build phase since it is .dockerignore'd from the host
COPY --chown=angry-alpaca:angry-alpaca --from=dependencies /home/angry-alpaca/node_modules node_modules
# Copy the source files not ignored by .dockerignore into the image.
# hopefully docker build will generally be cached up to this point.
COPY --chown=angry-alpaca:angry-alpaca src src
RUN  --mount=type=bind,source=package.json,target=package.json npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# whick only relies on the optimized production build in ./build directory.
################################################################################
FROM base AS production
ENV NODE_ENV=production
COPY --chown=angry-alpaca:angry-alpaca --from=build /home/angry-alpaca/build build
# Copy package.json so that package manager commands can be used.
COPY package.json .
# Expose the port that the application listens on.
# Container will still need to be run with option --publish 42069:42069
# Run the application as non-root angry-alpaca user
USER angry-alpaca
EXPOSE 42069
ENV ALPACA_PORT=42069
ENTRYPOINT ["npm", "run", "start-prod"]
