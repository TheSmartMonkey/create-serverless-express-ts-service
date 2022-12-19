import { Routes } from '../../routes';
import { handlerPath } from './../../libs/utils/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  memorySize: 256,
  events: [
    {
      http: {
        method: 'get',
        path: Routes.Hello,
      },
    },
  ],
};
