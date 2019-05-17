FROM node
WORKDIR /reactapp
COPY . .
RUN npm install
ENTRYPOINT ["/usr/local/bin/npm", "start"]

