import type { Diagnosis, NonSensitivePatients, Patients } from '../types/types.ts';
import data from '../data/diagnoses.ts';
import dataPatients from '../data/patients.ts';
import { v1 as uuid } from 'uuid';

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

const addPatient = (patientData: Omit<Patients, 'id'>): Patients => {
  const id = uuid();

  const newPatient = {
    ...patientData,
    id,
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getDiagnoses,
  getPatients,
  addPatient,
};
