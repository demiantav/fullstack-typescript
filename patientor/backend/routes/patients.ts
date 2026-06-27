import express, { type Response } from 'express';
import service from '../services/diagnosiService.ts';

const router = express.Router();

router.get('/', (_req, res: Response) => {
  res.send(service.getPatients());
});

export default router;
