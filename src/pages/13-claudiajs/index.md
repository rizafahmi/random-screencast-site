---
path: '/13-claudiajs'
title: 'Serverless With NodeJS and ClaudiaJS'
description: ''
draft: false

---

# Serverless With NodeJS and ClaudiaJS


5 November 2017
<iframe width="840" height="590" src="https://www.youtube.com/embed/dlnabvD1y_Q" frameborder="0" allowfullscreen></iframe>

## Intro

[ClaudiaJS](https://claudiajs.com/) adalah _library_ JavaScript dan NodeJS untuk memudahkan kita dalam proses _deployment_ ke [ AWS Lambda ](https://aws.amazon.com/lambda/details/) dan [ API Gateway ](https://aws.amazon.com/api-gateway/). Dengan Claudia, kita dapat menggunakan Lambda microservices dengan mudah dan lebih mudah di _maintain_.

## Walkthrough

### Setup Credentials

```sh
$ vim ~/.aws/credentials
```

### Install Claudia

```sh
$ npm install -g claudia
```

### Write our service

```sh
$ mkdir claudia-icecream-shop
$ cd claudia-icecream-shop
$ npm init
$ npm install aws-sdk claudia-api-builder
$ vim index.js
```

```javascript
const ApiBuilder = require('claudia-api-builder')
const AWS = require('aws-sdk')
const api = new ApiBuilder()
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const TABLENAME = 'icecreams'

api.post('/icecreams',
  request => {
    const params = {
      TableName: TABLENAME,
      Item: {
        icecreamid: request.body.id,
        name: request.body.name
      }
    }
    return dynamoDb.put(params).promise()
  },
  { success: 201 }
)

api.get('/icecreams', request => {
  return dynamoDb
    .scan({ TableName: TABLENAME })
    .promise()
    .then(response => response.Items)
})

module.exports = api
```

### Setup DynamoDB

```sh
$ aws dynamodb create-table --table-name icecreams --attribute-definition AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region ap-southeast-1 --query TableDescription.TableArn --output text
```

```sh
$ mkdir policy
$ vim policy/dynamodb-policy.json
```

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "dynamodb:DeleteItem",
        "dynamodb:GetItem",
        "dynamodb:PutItem",
        "dynamodb:Scan"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```

### Deploy

```sh
$ claudia create --region ap-southeast-1 --api-module index --policies policy
```

### Testing

```text
$ curl -H "Content-Type: application/json" -X POST -d ‘{"id":"123","name":"chocolate"}' 
$ curl https://y667r05jii.execute-api.ap-southeast-1.amazonaws.com/latest/icecreams
```

### Update

```text
$ npm install uuid
```


```javascript
const ApiBuilder = require('claudia-api-builder')
const AWS = require('aws-sdk')
const api = new ApiBuilder()
const dynamoDb = new AWS.DynamoDB.DocumentClient()
::const uuid = require('uuid/v4')::

const TABLENAME = 'icecreams'

api.post(
  '/icecreams',
  request => {
    const params = {
      TableName: TABLENAME,
      ::Item: {::
        ::icecreamid: uuid(),::
        ::name: request.body.name::
      ::}::
    }
    return dynamoDb.put(params).promise()
  },
  { success: 201 }
)

api.get('/icecreams', request => {
  return dynamoDb
    .scan({ TableName: TABLENAME })
    .promise()
    .then(response => response.Items)
})

module.exports = api
```

```text
$ claudia update
```


## References

* [Slide](https://www.slideshare.net/rizafahmi/aws-lambda-with-claudiajs)
* [GitHub Repo](https://github.com/rizafahmi/claudia-ice-cream)
