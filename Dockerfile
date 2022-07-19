# pull official base image
FROM node:16.16.0 as build-env
# set working directory
WORKDIR /app
COPY . ./
# add app
RUN npm ci --ignore-scripts
FROM node:16.16.0
# Move over published app
WORKDIR /app
COPY --from=build-env /app .
# start app
WORKDIR /app
CMD ["npm", "start"]