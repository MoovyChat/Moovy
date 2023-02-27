#!/bin/bash

echo App name?
read APPNAME

echo Postgres name?
read DATABASE

echo Redis name?
read REDIS


ssh root@137.184.201.17 "dokku apps:create api && dokku plugin:install https://github.com/dokku/dokku-postgres.git && dokku plugin:install https://github.com/dokku/dokku-redis.git redis && dokku postgres:create $DATABASE && dokku redis:create $REDIS && dokku postgres:link $DATABASE $APPNAME && dokku redis:link $REDIS $APPNAME && docker container list"


