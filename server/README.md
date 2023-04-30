# MoovyChat Server

The server is hosted on "server.moovychat.com", it is built upon Apollo Server for HTTP connections and "ws" for websocket connections.

The requests are sent to `graphql` server https://server.moovychat.com/graphql.

## Quick Debug and Deploy

- To check the running process/containers `docker ps -a`
- To stop the previous copy of container `docker stop <container-id>`
- To remove the previous container `docker rm <container-id>`
- It is important to stop the previous process of the server for the pushed server to work properly.

### Quick Deploy (Update versions every time)

Current deployed version: 0.0.6
Next version: 0.0.7

```
docker login (kishore189/Chandra189)
docker build -t kishore189/moovychat:0.0.7 .
docker push kishore189/moovychat:0.0.7

ssh root@137.184.201.17 (password: moovychat)
docker pull kishore189/moovychat:0.0.7
docker tag kishore189/moovychat:0.0.7 dokku/api:0.0.7
dokku deploy api 0.0.7
```

## Access POSTGRES inside dokku

- Check logs `dokku postgres:logs qchat -t`
- Connect to the database `dokku postgres:connect qchat`
- Delete all values from the all tables in database.

```
DO $$ DECLARE
    table_name text;
BEGIN
    FOR table_name IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'TRUNCATE TABLE "' || table_name || '" CASCADE;';
    END LOOP;
END $$;

```

- Delete all values including the primary generated index values

```
DO $$ DECLARE
    table_name text;
BEGIN
    FOR table_name IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'TRUNCATE TABLE "' || table_name || '" RESTART IDENTITY CASCADE;';
    END LOOP;
END $$;

```
- Delete all the tables in the database
```
DO $$ 
DECLARE
   tbl_name text;
BEGIN
   FOR tbl_name IN (SELECT table_name FROM information_schema.tables WHERE table_schema = 'public')
   LOOP
      EXECUTE 'DROP TABLE IF EXISTS public.' || tbl_name || ' CASCADE';
   END LOOP;
END $$;

```

- List all tables `SELECT tablename FROM pg_tables WHERE schemaname = 'public';`

- Make sure to insert initial platform and admin values. Refer help.md.

## Table of contents

- Installation
- Usage

```
To generate migrations:
npx typeorm -d dist/dataSource.js migration:generate  src/migrations
```

## Installation

Install the following dependencies and devDependencies.

### Dependencies

- "apollo-server": "^3.10.2",
- "apollo-server-express": "^3.10.2",
- "axios": "^1.2.2",
- "cheerio": "^1.0.0-rc.12",
- "connect-redis": "^6.1.3",
- "cors": "^2.8.5",
- "dotenv-safe": "^8.2.0",
- "express": "^4.18.1",
- "express-session": "^1.17.3",
- "gen-env-types": "^1.3.4",
- "graphql": "^15.3.0",
- "graphql-postgres-subscriptions": "^1.0.5",
- "graphql-redis-subscriptions": "^2.5.0",
- "graphql-subscriptions": "^2.0.0",
- "graphql-tools": "^8.3.6",
- "graphql-ws": "^5.11.1",
- "ioredis": "^5.2.3",
- "jsdom": "^21.0.0",
- "lodash": "^4.17.21",
- "node-fetch": "^3.3.0",
- "pg": "^8.8.0",
- "reflect-metadata": "^0.1.13",
- "stripe": "^11.6.0",
- "tsc": "^2.0.4",
- "type-graphql": "^1.1.1",
- "typeorm": "^0.3.9",
- "ws": "^8.8.1"

### DevDependencies

- "@types/express": "^4.17.14",
- "@types/ioredis": "^4.28.10",
- "@types/node": "^18.7.18",
- "nodemon": "^2.0.19",
- "ts-node": "^10.9.1",
- "typescript": "^4.8.3"

# Deployment configuration

We are deploying the server to the `Dokku` droplet inside the vps named `Digital Ocean`.

Here are the steps to deploy the server

### Creating the Droplet.

- Create a droplet inside the `Digital Ocean`.
- Create a SSH key, follow the instruction provided by the vps.
- Once generated, open the remote console, and use the following instructions.

### Create a DockerFile on the Local Machine with the below configuration.

```
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

# Bundle app source
COPY . .

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

COPY .env.production .env

RUN yarn build

ENV NODE_ENV production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
USER node
```

### Pre-requisites inside the vps before using the docker.

- SSH to the server. `ssh root@<IPv4_Address_of_the_droplet>`
- Create an app inside dokku `create app:create <$APP_NAME>`
- Install the plugins for postgres and redis.

```
dokku plugin:install https://github.com/dokku/dokku-postgres.git
dokku plugin:install https://github.com/dokku/dokku-redis.git redis
```

- Create database and redis server.

```
dokku postgres:create $DATABASE
dokku redis:create $REDIS
```

- Link the plugins to the app.

```
dokku postgres:link $DATABASE $APP_NAME
dokku redis:link $REDIS $APP_NAME
```

- To view the list of the containers, run `docker container list`

To make life easier, we have `docker_init.sh` and `docker_link.sh`

### Initiate the server and push the docker file to the docker hub.

- We will run the docker file and push the generated docker image to the docker hub(hub.docker.com).
- Build the docker image

```

docker login
docker build -t kishore189/moovychat:$VERSION .
docker push kishore189/moovychat:$VERSION

```

- Pull the docker image from the server.

```

ssh root@137.184.201.17 (Get the IPv4 from the digital ocean)
docker pull kishore189/moovychat:$VERSION
docker tag kishore189/moovychat:$VERSION dokku/api:$VERSION

```

- Deploy the image

```

dokku deploy $APP_NAME $VERSION

```

### Domain Configuration.

- We already have a domain purchased under the `NameCheap` server.
- Open the domain and create an `A` record under the `Advanced DNS`.
- We have an 'A' record under the name `server` with the IPv4 address of the droplet.
  ![NameCheap Screenshot](https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/Screen%20Shot%202023-02-28%20at%2011.40.35%20AM.png?alt=media&token=7c5bd286-d42b-4e81-985e-0f643588ebc8)
- Once we have created an A-record, it will take time (few seconds) to propagate all over the world.
- We can check the status on `https://www.whatsmydns.net/`.
- On dokku, adjust the domains of the app and global as per our `A` records.

```
# list custom domains for app
dokku domains:report $APP_NAME

# remove a custom domain from app
dokku domains:remove $APP_NAME <PREVIOUS_DEFAULT_DOMAINS>

# set all custom domains for app
dokku domains:set $APP_NAME server.moovychat.com

# Remove global domain names
dokku domains:remove-global <PREVIOUS_DEFAULT_DOMAINS>

# Add global domain names
dokku domains:add-global moovychat.com
```

Once we are set with the registration of IPv4, now we need to encrypt of our server with[dokku-letsencrypt](https://github.com/dokku/dokku-letsencrypt).

- Install the plugin on server.

```
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
```

- Configure the email.

```
dokku letsencrypt:set api email chatmoovy@gmail.com
```

- Enable the encryption for the app inside the server using the below command.

```
dokku letsencrypt:enable $APP_NAME
```

### https://server.moovychat.com
