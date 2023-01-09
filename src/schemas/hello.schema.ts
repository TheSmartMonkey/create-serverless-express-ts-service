import { getCurrentFileName, getCurrentFolderPath } from '@libs/utils/handler-resolver';

const filePath = getCurrentFolderPath(__filename);

export default {
  type: 'object',
  title: getCurrentFileName(filePath),
  additionalProperties: false,
  properties: {
    message: { type: 'string', title: 'message' },
  },
  required: ['message'],
} as const;
