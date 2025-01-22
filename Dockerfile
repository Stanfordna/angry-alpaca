# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

################################################################################
# Use node image for base image for all stages.
FROM node:lts-bookworm-slim AS base
USER root
RUN useradd --create-home --shell /bin/bash angry-alpaca
# Set working directory for all build stages.
WORKDIR /home/angry-alpaca

################################################################################
# Create a stage for installing production dependecies.
FROM base AS deps
USER angry-alpaca
# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

################################################################################
# Create a stage for building the application.
FROM deps AS build
USER angry-alpaca

# Download additional development dependencies before building, as some projects require
# "devDependencies" to be installed to build. If you don't need this, remove this step.

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Added this install to possibly use serve -s build in future 
# instead of npm start
# RUN npm install -g serve

# Copy the rest of the source files into the image.
COPY --chown=angry-alpaca:angry-alpaca . .

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base AS final
USER angry-alpaca

# Use production node environment by default.
ENV NODE_ENV=production

# Run the application as a non-root user. Commented this out.
# USER node

# Copy package.json so that package manager commands can be used.
COPY package.json .

# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
COPY --chown=angry-alpaca:angry-alpaca --from=build /home/angry-alpaca/node_modules ./node_modules
COPY --chown=angry-alpaca:angry-alpaca --from=build /home/angry-alpaca/. /home/angry-alpaca/

# TODO: move build into build phase and only pull over build directory
RUN npm run build

# ENV HTTPS=true
# ENV SSL_CRT_FILE=/home/angry-alpaca/ssl/angry-alpaca.crt.pem
# ENV SSL_KEY_FILE=/home/angry-alpaca/ssl/angry-alpaca.key.pem

# Expose the port that the application listens on.
EXPOSE 42069

# Run the application.
# CMD npm run start
ENTRYPOINT ["npm", "run", "start-prod"]
# --ssl-cert                          Optional path to an SSL/TLS certificate to serve with HTTPS
# Supported formats: PEM (default) and PKCS12 (PFX)
# --ssl-key                           Optional path to the SSL/TLS certificate's private key
# Applicable only for PEM certificates
