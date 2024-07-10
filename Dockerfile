FROM node:20-alpine

WORKDIR /home/shberrypi

COPY package.json .

#RUN yarn
# or
RUN npm install

COPY . .

EXPOSE 3000

#CMD [ "yarn", "start" ]
# or
CMD [ "npm", "start" ]