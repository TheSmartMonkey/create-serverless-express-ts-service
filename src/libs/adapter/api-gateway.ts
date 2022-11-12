import { ERoutes } from './../../routes';
import { EPlatforms } from './../../models/adapter.model';

export const getHttpRoute = (route: ERoutes, platform: EPlatforms) => {
  const routeFormat = {
    [EPlatforms.EXPRESS]: route.replaceAll('{', ':').replaceAll('}', ''),
    [EPlatforms.AWS]: route,
  };
  return routeFormat[platform];
};
