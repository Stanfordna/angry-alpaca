#!/bin/bash
# using "version" here to mean "tag"
version='0.1.0'
name='angry-alpaca'
docker_hub_url='docker.io/angryalpaca'
build_args="\
  --build-arg VERSION=$version \
  --build-arg CREATE=$(date +%Y-%m-%dT%H:%M:%SZ) \
  "

echo "Building Image: $docker_hub_url/$name:$version"
docker build $docker_hub_url/$name:$version

if ask "Publish image to Docker Hub?"
then
    docker push $docker_hub_url/$name:$version
    echo "Uploaded Images:"
    echo "- $docker_hub_url/$name:$version"
    docker push $docker_hub_url/$name:latest
    echo "- $docker_hub_url/$name:latest"
fi
