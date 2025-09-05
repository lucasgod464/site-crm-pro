# Use Node.js 20 alpine for smaller image size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm ci

# Copy source code
COPY . .

# Build only the client (frontend)
RUN npx vite build

# Expose port 5001
EXPOSE 5001

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5001

# Start the application using tsx directly (no esbuild bundling for server)
CMD ["npx", "tsx", "server/index.ts"]