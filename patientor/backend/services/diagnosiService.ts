import type { Diagnosis } from '../types/types.ts';
import data from '../data/diagnoses.ts';

const diagnosis: Diagnosis[] = data;

const getDiagnoses = (): Diagnosis[] => {
  return diagnosis;
};

export default {
  getDiagnoses,
};
