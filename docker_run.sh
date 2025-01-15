#!/bin/bash
# using "version" here to mean "tag"
version='0.1.0'
name='angry-alpaca'
docker_hub_url='docker.io/angryalpaca'
volume_opts='-v /ssh:/home/stanf/.ssh'

if [ -z "`docker images -q $name`" ] && ask "No local container $name found. Pull image $docker_hub_url/$name:$version?"
then
    docker pull $docker_hub_url/$name:$version $name:$version
    echo "Pulled $docker_hub_url/$name:$version as $name:$version"
fi

if ! [ -z "`docker images -q $name`" ]
    then
    echo "Running Container: $name "
    docker run --rm \
        --name $name \
        $volume_opts \
        $name:$version
    
    if ask "Shell into container?"
    then
        docker exec -it $name bash
    fi
fi
