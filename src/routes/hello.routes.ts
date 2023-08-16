import { logger } from '@libs/utils/logger';
import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  logger.info({ req });
  res.json({ requestBody: req.body });
});

router.get('/:message', async (req: Request, res: Response) => {
  logger.info({ req });
  res.send('Hello message !');
});

export default router;
