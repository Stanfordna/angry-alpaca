#!/bin/bash
# using "version" here to mean "tag"
version='0.1.0'
name='angry-alpaca'
docker_hub_url='docker.io/angryalpaca'
volume_opts="-v $ANGRY_ALPACA_HOME/ssl:/home/angry-alpaca/ssl"

if ask "Generate new ssl certs with certbot?"
then
    echo "Running > $ANGRY_ALPACA_HOME/scripts/certbot_run.sh"
    $ANGRY_ALPACA_HOME/scripts/certbot_run.sh || exit
    # TODO: move certs to appropriate path in project
fi

[ -z "`docker images -q $name`" ] && echo "No local container $name found." || echo "Local container $name already exists."

if ask "Pull image $docker_hub_url/$name:$version?"
then
    docker pull $docker_hub_url/$name:$version
    docker tag $docker_hub_url/$name:$version $name:$version
    echo "Pulled $docker_hub_url/$name:$version and re-tagged as $name:$version"
fi

if ! [ -z "`docker images -q $name`" ]
    then
    echo "Running Container: $name:$version in detached mode with restart policy unless-stopped."
    docker run -d --restart unless-stopped \
        --name $name \
        --publish 42069:42069 \
        $volume_opts \
        $name:$version
    
    if ask "Shell into container?"
    then
        docker exec -it $name bash
    fi
fi
