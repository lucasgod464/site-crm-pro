# Use Node.js 20 alpine for smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Keep vite as production dependency since it's imported by the server
RUN npm ci --omit=dev --omit=optional && \
    npm install vite express && \
    npm cache clean --force

# Expose port 5001
EXPOSE 5001

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5001

# Start the application
CMD ["npm", "start"]