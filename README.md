![](https://travis-ci.org/lucaslago/aws-lambda-proxy-response.svg?branch=master)
AWS Lambda Proxy Integration Response
=========

A small library that wraps object literal building for AWS lambda proxy integration. You can read more about this form of integration [here](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html).


## Installation

  `npm install -S lambda-proxy-integration-response`

## Usage

 ```javascript
  const response = require('lambda-proxy-integration-response');

  exports.handler = (event, context, callback) => {
    
    const okResponse = response.createResponse({body: { data: [] }, statusCode: 200});
    // {statusCode: 200, body: '{"data": []}'}

    callback(null, okResponse);

  };
  ```
  
   ```javascript
  // New async handler synthax
  const response = require('lambda-proxy-integration-response');

  exports.handler = async event => response.ok();
  ```
  

## Shorthand methods for common HTTP statuses
  - `response.ok = response.createResponse({statusCode: 200, ...})`
  - `response.created = response.createResponse({statusCode: 201, ...})`
  - `response.deleted = response.createResponse({statusCode: 204, ...})`
  - `response.badRequest = response.createResponse({statusCode: 400, ...})`
  - `response.unauthorized = response.createResponse({statusCode: 401, ...})`
  - `response.forbidden = response.createResponse({statusCode: 403, ...})`
  - `response.notFound = response.createResponse({statusCode: 404, ...})`
  - `response.serverError = response.createResponse({statusCode: 500, ...})`


## Default parameters

Default values for every response. It gets overriden if new values are provided during the function call.

```javascript
const defaultParameters = {
  body: { message: 'Hello World' },
  headers: {'Content-Type': 'application/json' }
};

const response = require('lambda-proxy-integration-response').withDefaults(defaultParameters);

response.ok();
// { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: '{"message": "Hello World}'}

response.ok({ body: { message: 'Hey', headers: {} } });
// { statusCode: 200, headers: { }, body: '{"message": "Hey}'}
```

## Tests

  `npm test`
