import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import hello from './functions/hello';

// Initialize configuration
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (_req: Request, res: Response) => res.send('Hello !'));
app.get('/hello/:message', (_req: Request, res: Response) => res.send(hello));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
