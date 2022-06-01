import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8001;

app.get('/', (req, res) => {
  res.send('This is Express server with TypeScript');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
