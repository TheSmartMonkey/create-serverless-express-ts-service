import { getCurrentFolderName } from '@libs/utils/handler-resolver';
import { Routes } from 'src/routes';

const SERVICE_NAME = 'serverlessAPI';

export const getDescription = (folderPath: string) => {
  const currentFolder = getCurrentFolderName(folderPath);
  return {
    summary: currentFolder,
    description: currentFolder,
    operationId: currentFolder,
  };
};

export const getServiceTag = (): string => {
  return SERVICE_NAME;
};

export const generatePathParameterConfig = (route: Routes): object[] => {
  const pathParameterConfig = [];
  const pathParameters = getPathParameters(route);
  for (const pathParameter of pathParameters) {
    pathParameterConfig.push({
      name: pathParameter,
      in: 'path',
      required: true,
      description: pathParameter,
      schema: {
        type: 'string',
      },
    });
  }
  return pathParameterConfig
};

const getPathParameters = (route: Routes): string[] => {
  const parameters = route.match(/\{(.*?)\}/g);
  return parameters?.map((parameter) => parameter.replace(/{/g, '').replace(/}/g, '')) ?? [];
};
