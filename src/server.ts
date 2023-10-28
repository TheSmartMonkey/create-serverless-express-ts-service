import { BASE_URL } from '@libs/helpers/constants';
import { logger } from '@libs/helpers/logger';
import { errorHandlerMiddleware } from '@libs/middlewares/error.middleware';
import { sendJsonMiddleware } from '@libs/middlewares/send-json.middleware';
import dotenv from 'dotenv';
import express from 'express';
import serverless from 'serverless-http';
import helloRoutes from './api/hello/routes';

// Initialize configuration
dotenv.config();
const app = express();
app.use(express.json());

// Global routes
app.use(`${BASE_URL}/hello`, helloRoutes);

// Middlewares
app.use(errorHandlerMiddleware);
app.use(sendJsonMiddleware);

// Launch
if (process.env.LOCAL === 'true') {
  const port = process.env.SERVER_PORT ?? 3001;
  app.listen(port, () => logger.info(`App listening at http://localhost:${port}${BASE_URL}`));
}
module.exports.handler = serverless(app);
