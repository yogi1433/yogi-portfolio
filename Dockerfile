# Stage 1: Build the app
FROM node:16 AS build-stage

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine AS production-stage

# Copy the build output from the build-stage to Nginx's html directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 8143
EXPOSE 8143

# Run Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
