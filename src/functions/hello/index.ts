import { Routes } from '../../routes';
import { getHttpRoute } from './../../libs/adapter/api-gateway';
import { handlerPath } from './../../libs/utils/handler-resolver';
import { Platforms } from './../../models/adapter.model';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  memorySize: 256,
  events: [
    {
      http: {
        method: 'get',
        path: getHttpRoute(Platforms.AWS, Routes.HELLO),
      },
    },
  ],
};
