#!/bin/sh

# this script is called by GitHub Actions to auto-deploy an update

# build image
printf "\n\nBuilding image\n==============\n"
docker rmi -f ucf-fe
docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
docker build -t ucf-fe .
sleep 3 # sleep for 3 seconds to make sure image is done completely

# deploy stack
printf "\n\nDeploying stack\n===============\n"
docker stack rm ucf-fe
docker stack deploy -c docker-compose.traefik.yml ucf-fe
