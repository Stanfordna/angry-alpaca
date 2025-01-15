#!/bin/bash
# using "version" here to mean "tag"
version='0.1.0'
name='angry-alpaca'
docker_hub_url='docker.io/angryalpaca'
build_args="\
    --build-arg VERSION=$version \
    --build-arg CREATE=$(date +%Y-%m-%dT%H:%M:%SZ) \
    "
if ask "Build image $name:$version?"
then
    echo "Building Image: $name:$version"
    docker build $name:$version
fi

if ask "Publish image to $name:$version Docker Hub?"
then
    if [ -z "`docker images -q $name`" ]
    then
        echo "$name not found in local images. Try building first."
    else
        echo "Re-tagging $name:$version as $docker_hub_url/$name:$version and pushing to Docker Hub."
        docker tag $name:$version $docker_hub_url/$name:$version
        docker push $docker_hub_url/$name:$version
        echo "Uploaded Images:"
        echo "- $docker_hub_url/$name:$version"
        docker push $docker_hub_url/$name:latest
        echo "- $docker_hub_url/$name:latest"
    fi
fi
