import { Platforms } from './../../models/adapter.model';
import { Routes } from './../../routes';

export const getHttpRoute = (route: Routes, platform: Platforms) => {
  const routeFormat = {
    [Platforms.EXPRESS]: route,
    [Platforms.AWS]: route,
  };
  return routeFormat[platform];
};
