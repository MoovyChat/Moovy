#!/bin/bash

ssh root@137.184.201.17 "dokku letsencrypt:set api email chatmoovy@gmail.com &&dokku letsencrypt:enable api "
