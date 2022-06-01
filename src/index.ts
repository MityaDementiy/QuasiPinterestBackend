import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 8001;

app.get('/', (req: Request, res: Response) => {
  res.send('This is Express server with TypeScript');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
