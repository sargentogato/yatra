# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

#install dependencies
RUN npm install
# Copy app source code
COPY . .

# Expose the port
ENV HOST=0.0.0.0
EXPOSE 5000

# Command to serve the app
CMD ["npm", "run", "dev"]

