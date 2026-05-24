FROM node:22

WORKDIR /app

# Copy package files from root
COPY package*.json ./

# Copy entire project structure
COPY app ./app
COPY components ./components
COPY components.json ./
COPY lib ./lib
COPY public ./public
COPY next.config.ts ./
COPY tsconfig.json ./
COPY next-env.d.ts ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./

# Install dependencies
RUN npm install

EXPOSE 3000
EXPOSE 8080

CMD ["npm", "run", "dev"]
