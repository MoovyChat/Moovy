```
docker login (kishore189/Chandra189)
docker build -t kishore189/moovychat:nest-5 .
docker push kishore189/moovychat:nest-5

```

```
ssh root@137.184.201.17 (Get the IPv4 from the digital ocean)
docker pull kishore189/moovychat:nest-5
docker tag kishore189/moovychat:nest-5 dokku/nest:0.0.5
dokku deploy nest 0.0.5
```

```
docker ps -a
docker stop <container-id>
docker rm <container-id>
```
