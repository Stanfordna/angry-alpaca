version='0.1.0'
name='angry-alpaca'
docker_hub_url=''
build_args="\
  --build-arg VERSION=$version \
  --build-arg CREATE=$(date +%Y-%m-%dT%H:%M:%SZ) \
  "

echo "Building Image: $docker_hub_url$name:$version"
docker build $docker_hub_url$name:$version

if ask "Publish image to Docker Hub?"
then
    docker exec -it $name bash
fi
