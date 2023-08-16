import { main as helloHandler } from '@functions/hello/handler';
import { logger } from '@libs/utils/logger';
import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', (request: Request, response: Response) => {
  logger.info({ request });
  response.json({ requestBody: request.body });
});

router.get('/:message', async (request: Request, response: Response) => {
  const data = await helloHandler(request);
  response.json(data);
});

export default router;
