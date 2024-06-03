# Use the official Node.js image as the base image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3003

# Define the command to run the application
CMD ["npm", "start"]