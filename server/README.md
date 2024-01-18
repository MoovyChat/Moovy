# MoovyChat Server

The MoovyChat server is an essential component of the MoovyChat application, handling HTTP connections via Apollo Server and WebSocket connections.

GraphQL requests are processed through the server at: `https://server.moovychat.com/graphql`.

## Quick Debug and Deploy

Here are some quick commands for Docker container management:

```
docker ps -a # Check running processes/containers
docker stop <container-id> # Stop a container
docker rm <container-id> # Remove a container
```

It's crucial to stop any previous server processes to ensure the new deployment functions correctly.

### Quick Deploy

Ensure you update the versions accordingly for each deployment.

Example for deploying version 0.2.6:

```
docker login # Login to Docker Hub
docker build -t <docker-username>/moovychat:0.2.6 .
docker push <docker-username>/moovychat:0.2.6

ssh root@<host> # SSH into your server
docker pull <docker-username>/moovychat:0.2.6
docker tag <docker-username>/moovychat:0.2.6 dokku/api:0.2.6
dokku deploy api 0.2.6
```

## Accessing POSTGRES within Dokku

- To view logs: `dokku postgres:logs <db-name> -t`
- To connect to the database: `dokku postgres:connect <db-name>`

## Database Maintenance Commands

- Truncate all tables:

```
DO $$ DECLARE
    table_name text;
BEGIN
    FOR table_name IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'TRUNCATE TABLE "' || table_name || '" CASCADE;';
    END LOOP;
END $$;

```

- Truncate and reset identity of all tables:

```
DO $$ DECLARE
    table_name text;
BEGIN
    FOR table_name IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'TRUNCATE TABLE "' || table_name || '" RESTART IDENTITY CASCADE;';
    END LOOP;
END $$;

```

- Drop all tables:

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

- List all tables: `SELECT tablename FROM pg_tables WHERE schemaname = 'public';`

- Ensure initial platform and admin values are inserted as required.

## Table of contents

- Installation
- Usage

```
To generate migrations:
npx typeorm -d dist/dataSource.js migration:generate  src/migrations
```

## Installation

Install the required dependencies as listed in your project's `package.json`.

## Deployment Configuration

The MoovyChat server is deployed to a Dokku droplet on a VPS.

## Creating the Droplet

- Create a new droplet in your VPS provider.
- Follow the instructions from your VPS provider to generate and use an SSH key.
- Once the droplet is ready, you can manage it through the remote console.

## DockerFile Configuration

Below is a sample Dockerfile:

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

## Pre-requisites in VPS

Before using Docker, set up the environment:

- SSH into the server.
- Initialize the app and install necessary plugins.
- Create and link databases.

## Server and Domain Configuration

Configure the domain with your DNS provider to point to your server with an 'A' record. Monitor the propagation status using DNS checker tools.

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

## Encrypting the Server

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

## Final URL

### https://server.moovychat.com
