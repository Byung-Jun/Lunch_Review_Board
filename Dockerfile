FROM node:lts-alpine

# build app for production with minification
RUN npm run dev

EXPOSE 80
CMD [ "http-server", "dist" ]

