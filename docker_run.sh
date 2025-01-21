#!/bin/bash
# using "version" here to mean "tag"
version='0.1.0'
name='angry-alpaca'
docker_hub_url='docker.io/angryalpaca'
volume_opts="-v $PWD"'/.ssl:/home/stanf/.ssl'

if ask "Generate new ssl certs with certbot?"
then
    if [ ! -d .ssl ]
    then
        mkdir .ssl
    fi
    cd .ssl
    echo "Running > certbot certonly --standalone"
    certbot certonly --standalone
    cd ..
fi

if [ -z "`docker images -q $name`" ] && ask "No local container $name found. Pull image $docker_hub_url/$name:$version?"
then
    docker pull $docker_hub_url/$name:$version $name:$version
    echo "Pulled $docker_hub_url/$name:$version as $name:$version"
fi

if ! [ -z "`docker images -q $name`" ]
    then
    echo "Running Container: $name:$version in detached mode with restart policy unless-stopped."
    docker run -d --restart unless-stopped \
        --name $name \
        $volume_opts \
        $name:$version
    
    if ask "Shell into container?"
    then
        docker exec -it $name bash
    fi
fi
