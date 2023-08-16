import { logger } from '@libs/utils/logger';
import { BASE_URL } from '@libs/adapter/express';
import dotenv from 'dotenv';
import express from 'express';
import expressListRoutes from 'express-list-routes';
import serverless from 'serverless-http';
import helloRoutes from './routes/hello.routes';

// Initialize configuration
dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

app.get(BASE_URL, (_req, res) => res.json(expressListRoutes(app)));

// Global routes
app.use(`${BASE_URL}/hello`, helloRoutes);

// Launch
if (process.env.LOCAL === 'true') {
  const port = process.env.SERVER_PORT ?? 3001;
  app.listen(port, () => logger.info(`App listening at http://localhost:${port}${BASE_URL}`));
}
module.exports.handler = serverless(app);
