# create-serverless-express-ts-service

Template of a simple serverless typescript api service with express

## Installation

```bash
npx degit https://github.com/TheSmartMonkey/create-serverless-express-ts-service serverless-ts-service
```

**Changes to be done**

1. package.json config name

1. serverless.ts service name

1. Change the region in `serverless.ts` provider/region (current region: Paris)

## Getting started

1. Install serverless framework : [serverless framework Get Started](https://www.serverless.com/framework/docs/getting-started)

1. Setup your aws credentials : [aws config](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

Create a cloud formation stack on aws : `npm run deploy`

Remove a cloud formation stack on aws : `npm run undeploy`

## Create a new route

1. Add your route in src/routes.ts

1. Create a new folder in src/api from the hello template

1. You can create your routes in src/api/<YOU_RESOURCE>/routes.ts
