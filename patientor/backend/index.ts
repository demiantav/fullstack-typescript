import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosis.ts';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.use(express.json());

app.get('/api/ping', (_req, res) => {
  console.log('pinged');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosisRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
