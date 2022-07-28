
# pull playwright official base image
FROM  mcr.microsoft.com/playwright:v1.16.2-focal as build-env
# set working directory
WORKDIR /src
# add code
COPY . /src/ /src/
COPY package.json /src/
COPY playwright.config.ts /src/
# add dependencies
RUN npm install
# add webdrivres
RUN npx playwright install
# listing port
EXPOSE 80

From mcr.microsoft.com/playwright:v1.16.2-focal
FROM   build-env
# Move over published code
WORKDIR /src
COPY --from=build-env /src/ .
CMD [ "npx", "playwright", "test","src/tests/qa-maintenance-list", "--reporter=html" ]
