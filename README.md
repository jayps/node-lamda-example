# NodeJS Lambda Example

This example is for the accompanying blog post [here](https://jpmeyer.dev/blog/nodejs-lambda-github).

## What is this?

This is a simple ExpressJS API with a single endpoint that accepts a name as a query parameter and returns a greeting
for the provided name.  
The API is designed to be run in a serverless environment. The specific example used here is AWS Lambda.

## Getting Started

To use this project, you need to have NodeJS set up on your development machine.

### Installing Packages

```bash
npm install
npm i -g serverless
```

### Running the application locally

```bash
npm start
```

### Deploying the application

Check out [this post](https://jpmeyer.dev/blog/nodejs-lambda-github) for more information on how to deploy this
application AWS Lambda. I also give a guide for automating the deployment with Github Actions.