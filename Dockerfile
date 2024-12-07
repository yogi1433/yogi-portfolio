# Stage 1: Build React application
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application and build it
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.23

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built React app to the Nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

