FROM node:22
WORKDIR /
COPY package*.json ./
RUN npm install --only=production
COPY server.js .
COPY dist ./dist
EXPOSE 3000
CMD ["npm", "start"]