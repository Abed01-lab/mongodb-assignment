import express, { Application, Request, Response, request } from 'express';
import mongodbRouter from './routes/twitter.routes';

const app: Application = express();

app.use("/mongodb", mongodbRouter)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

