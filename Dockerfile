# Description: Dockerfile for the nodejs application
FROM node:18
# Create app directory
WORKDIR /user/src/app
# Copy package.json and package-lock.json
COPY package*.json yarn.lock ./
# Install app dependencies
RUN yarn install
# Bundle app source
COPY . .
# Expose the port
EXPOSE 8000
# Start the application
CMD ["yarn", "start"]