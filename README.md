# Web-app for college
# [Demo](http://epcet.herokuapp.com/)

## Installing dependencies

To install dependencies
> ### npm install

## Connecting to database

Create a **.env** file in the root directory and add the following line
> DB_URI = \<your-database-connection-string\>

## Jwt authentication

Add the following line to **.env** file
> ACCESS_TOKEN_SECRET = \<random-string\>

## Running server locally

Place the build folder created in the frontend directory in the root directory of backend.
Change **app.listen(process.env.PORT)** to **app.listen(3000)** in server.js file to run server on localhost:3000

To start
> ### npm start
or
> ### node server
