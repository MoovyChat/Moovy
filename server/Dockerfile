# Use an official Node runtime as the parent image
FROM node:18

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and yarn.lock into the root directory of the app
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --production --no-lockfile

# Copy the rest of the application code into the app directory
COPY . .

# Add Chrome installation commands
RUN apt-get update && \
    apt-get install -y wget gnupg ca-certificates && \
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

# Copy .env.production to .env
COPY .env.production .env

# Compile TypeScript to JavaScript
RUN yarn build

# Set environment variables
ENV NODE_ENV production

# Make the container listen on port 8080
EXPOSE 8080

# Define the command to run the app
CMD [ "node", "dist/index.js" ]

# Switch to the node user
USER node
