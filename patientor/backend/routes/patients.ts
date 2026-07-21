/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express, { type Response } from 'express';
import service from '../services/diagnosiService.ts';
import { parseObject } from '../utils/utils.ts';

const router = express.Router();

router.get('/', (_req, res: Response) => {
  res.send(service.getPatients());
});

router.post('/', (req, res) => {
  try {
    const newPatient = service.addPatient(parseObject(req.body));
    res.json(newPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
