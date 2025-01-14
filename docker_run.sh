version='0.1.0'
name='angry-alpaca'
volume_opts='-v /ssh:/home/stanf/.ssh'

echo "Running Container: $name "
docker run --rm \
    --name $name \
    $volume_opts \
    $name:$version

if ask "Shell into container?"
then
    docker exec -it $name bash
fi
