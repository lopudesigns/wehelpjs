FROM node:4
ADD ./package.json /wehelpjs/package.json
WORKDIR /wehelpjs
RUN npm install
ADD . /wehelpjs
RUN npm test
