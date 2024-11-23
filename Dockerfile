# Use a Node.js base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (e.g., React default is 3000)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
