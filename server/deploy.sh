#!/bin/bash

echo What should the version be?
read VERSION

docker build -t kishore189/moovychat:$VERSION .
docker push kishore189/moovychat:$VERSION
ssh root@137.184.201.17 "docker pull kishore189/moovychat:$VERSION && docker tag kishore189/moovychat:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"

# docker rmi $(docker images -q)

