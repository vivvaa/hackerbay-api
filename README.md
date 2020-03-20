# HackerBay API

An API server built with Node to demonstrate jwt login, json patching and thumbnail generation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Inside the project directory, run

```
npm install

```
to install required dependencies.

### Credentials
This application requires a secret to work well, on your project directory:
* Create an env file
* Copy and paste the contents of .env.example file to the .env file you just created : 

*N/B: Replace secret with any text of your choice*

### Running the project
To start the API server run

```
npm start
```
You can then start making requests via postman.

### Running the tests

To test the application on your local machine, run

```
npm test
```

A code coverage report will be seen on your console.

## API Endpoints

### Login
You can a new user login by sending a POST request to https://localhost:6000/login
Request body should contain email and password; the API will return a token for the user which will be used for future requests to the server.
<br>*Note: Any email/password combination is accepted*
<br>*Note:  (this API regards email as the user's username)*

### Register
You can register as a new user by sending a POST request to https://localhost:6000/register
Request body should contain firstname, lastname, email and password; the API will return the user which will be used a success message if the registrtion was successful.

### JSON Patch
This endpoint accepts two parameters (document and patch) which are JSON objects.
Send a PATCH request to https://localhost:6000/json_patch?token=validToken and the API will return a valid patched JSON object.
<br>*Note: Replace validToken with the token gotten from the login for authentication*

### Thumbnail Generation
This endpoint accepts an image url, generates a 50x50 thumbnail image and returns it to the user.
Send a GET request to https://localhost:6000/thumb_nail?img=ImageUrl&token=validToken
<br>*Note:  Replace imgUrl with the url of the image and validToken with the token gotten from the login for authentication*

The thumbnail generated will be downloaded to the downloads folder of the project directory

## Built With
* [jwt](https://www.npmjs.com/package/mysql2) - Token generation and verification.
* [image-thumbnail](https://www.npmjs.com/package/image-thumbnail) - Fast thumbnail generation in Node.
* [mocha](http://mochajs.org) - For automated tests.
* [should](https://www.npmjs.com/package/should) - Expressive assertion library.
* [supertest](https://www.npmjs.com/package/supertest) - High level HTTP tests.
