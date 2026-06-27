import type { Diagnosis, NonSensitivePatients } from '../types/types.ts';
import data from '../data/diagnoses.ts';
import dataPatients from '../data/patients.ts';

const diagnosis: Diagnosis[] = data;
const patients: NonSensitivePatients[] = dataPatients;

const getDiagnoses = (): Diagnosis[] => {
  return diagnosis;
};

const getPatients = (): NonSensitivePatients[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getDiagnoses,
  getPatients,
};
