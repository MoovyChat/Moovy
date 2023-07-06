# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock into the directory
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Bundle app source
COPY . .

# Build the TypeScript app
RUN yarn run tsc

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run the app
CMD [ "node", "dist/server.js" ]
