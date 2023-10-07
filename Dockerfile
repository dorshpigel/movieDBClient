
FROM node:14


WORKDIR /moviedb


RUN echo "REACT_APP_MOVIE_DB_TOKEN=" > .env


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 3000


CMD ["npm", "start"]
