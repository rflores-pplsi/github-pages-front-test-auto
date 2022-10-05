
# pull playwright official base image
FROM  mcr.microsoft.com/playwright:v1.25.0-jammy as build-env
# set working directory
WORKDIR /src
# add code
COPY . /src/ /src/
COPY package.json /src/
COPY playwright.config.ts /src/
# add dependencies
RUN npx playwright install 
RUN npm install
# add webdrivres

# listing port
EXPOSE 80

FROM build-env

# Move over published code
WORKDIR /src
COPY --from=build-env /src/ .

