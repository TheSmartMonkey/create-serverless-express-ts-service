import { getHttpRoute } from '../../libs/adapter/api-gateway';
import { ERoutes } from '../../routes';
import { handlerPath } from './../../libs/utils/handler-resolver';
import { EPlatforms } from './../../models/adapter.model';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  memorySize: 256,
  events: [
    {
      http: {
        method: 'get',
        path: getHttpRoute(ERoutes.Hello, EPlatforms.AWS),
      },
    },
  ],
};
