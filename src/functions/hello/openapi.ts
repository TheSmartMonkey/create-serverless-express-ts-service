import { generatePathParameterConfig, getDescription, getServiceTag } from '@libs/adapter/openapi';
import { getCurrentFolderPath, getCurrentFolderName } from '@libs/utils/handler-resolver';
import { Routes } from 'src/routes';

import index from './index';

const folderPath = getCurrentFolderPath(__dirname);
const folderName = getCurrentFolderName(folderPath);
const route: Routes = index.events[0].http.path as Routes;

export default {
  paths: {
    [route]: {
      get: {
        ...getDescription(folderPath),
        tags: [getServiceTag()],
        parameters: [...generatePathParameterConfig(route)],
        responses: {
          '200': {
            description: folderName,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: folderName,
                  properties: {
                    message: { type: 'string' },
                    data: { type: 'string' },
                  },
                  required: ['data'],
                },
              },
            },
          },
        },
      },
    },
  },
} as const;
