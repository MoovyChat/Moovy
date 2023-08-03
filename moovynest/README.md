```
docker login (kishore189/Chandra189)
docker build -t kishore189/moovychat:nest-7 .
docker push kishore189/moovychat:nest-7

```

```
ssh root@137.184.201.17 (Get the IPv4 from the digital ocean) (PWD:moovychat)
docker pull kishore189/moovychat:nest-7
docker tag kishore189/moovychat:nest-7 dokku/nest:0.0.7
dokku deploy nest 0.0.7
```

```
docker ps -a
docker stop <container-id>
docker rm <container-id>
```
