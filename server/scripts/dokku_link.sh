#!/bin/bash

echo App name?
read APPNAME

echo Postgres name?
read DATABASE

echo Redis name?
read REDIS


ssh root@137.184.201.17 "dokku postgres:link $DATABASE $APPNAME && dokku redis:link $REDIS $APPNAME && docker container list"


