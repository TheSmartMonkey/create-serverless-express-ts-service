import merge from 'lodash';

// Functions
import hello from '@functions/hello/openapi';

// Schemas
import HelloSchema from '@schemas/hello.schema';

export default merge({
  openapi: '3.0.0',
  info: {
    title: 'ProjectAPI',
    description: 'API to create and manage projects on the platform',
    version: '0.1.0',
  },
  servers: [
    {
      url: `https://XXXXXXXXX.execute-api.${process.env.AWS_REGION ?? 'eu-west-3'}.amazonaws.com/${process.env.AWS_STAGE}`,
      description: 'API access through API Gateway direct domain',
    },
  ],
  components: {
    schemas: {
      Hello: HelloSchema,
    },
  },
}).merge(hello);
