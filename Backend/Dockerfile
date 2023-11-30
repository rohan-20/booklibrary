FROM node:18-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 27017
ENV NODE_ENV=production
CMD ["npm", "run", "dev"]
