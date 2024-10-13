# Stage 1: Build the Next.js app
FROM node:20-alpine3.20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for build (including devDependencies)
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build-time environment variables (for use during build process)
ARG CONTENTFUL_SPACE
ARG CONTENTFUL_ENVIRONMENT
ARG CONTENTFUL_ACCESS_TOKEN
ARG NEXT_REVALIDATION_TOKEN

# Build the Next.js app
RUN npm run build

# Stage 2: Run the production-ready app
FROM node:20-alpine3.20

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Set NODE_ENV to production to avoid installing devDependencies
ENV NODE_ENV=production

# Install only production dependencies
RUN npm install --production --legacy-peer-deps

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]