import HelloSchema from '@schemas/hello.schema';
import { FromSchema } from 'json-schema-to-ts';

export type HelloDto = FromSchema<typeof HelloSchema>;
