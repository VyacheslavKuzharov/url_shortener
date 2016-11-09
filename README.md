## ABOUT  URL SHORTENER

A URL shortener is an online application that converts a regular URL (the web address that starts with http or https)
into its condensed format.

## SYSTEM INFRASTRUCTURE AND ARCHITECTURE

Using AngularJS, NodeJS, Express and MongoDB.

### Basic NodeJS plugins currently in use:

* app-root-dir (Simple module to infer the root directory of the currently running node application)
* body-parser (Node.js body parsing middleware)
* express (Fast, unopinionated, minimalist web framework for Node.js)
* mongoose (Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment)
* pug (A clean, whitespace-sensitive template language for writing HTML)

### Basic AngularJS plugins currently in use:

* angular-ui-bootstrap (UI Bootstrap - AngularJS directives specific to Bootstrap)
* angular-ui-router (State-based routing for AngularJS)

* Bootstrap (The most popular front-end framework for developing responsive, mobile first projects on the web)

## USER DIALOGS AND CONTROL FLOW

The user only has to copy the full URL of a website and paste it into the URL shortening tool to come up with an abbreviated
version that is around 8 to 10 characters long.
At a high level the URL shortener works by taking a long URL and applying a hashing algorithm to spit out a shorter version of the URL
and stores them in a database for later lookup.

## DATABASE MODEL

MongoDB is a free and open-source cross-platform document-oriented database program.
Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.
In Url Shortener we use MongoDB for store original and short url pair.

## API(version 1)

**Example Request check api status (method GET)**

~~~~
https://url-shortene.herokuapp.com/api/v1/status
~~~~

**Response**

```
{
    "status": "ok",
    "time": "2016-11-09T14:12:25.162Z",
    "version": "v1"
}
```

**Example Request create short url (method POST)**

~~~~
https://url-shortene.herokuapp.com/api/v1/shorten
request body {long_url: "http://www.example.com/blabla/blabla"}
~~~~

**Response**

```
{
    "code": 200,
    "status": "success",
    "data": {
        "long":"https://www.example.com/blabla/blabla",
        "short":"http://localhost:3000/Tb2YenWU"
    }
}
```

**Error**

```
{
    "status": "error",
    "message":"Failed to load page, status code: 404"
}
```
***

