import { PatientsWithoutId, Gender } from '../types/types.ts';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (str: unknown, fieldName: string): string => {
  if (!str || !isString(str)) {
    throw new Error(`Incorrect or missing ${fieldName}`);
  }
  return str;
};

const isGender = (param: string): param is Gender => {
  return (Object.values(Gender) as string[]).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

export const parseObject = (obj: unknown): PatientsWithoutId => {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Incorrect or missing object');
  }

  if (
    'name' in obj &&
    'dateOfBirth' in obj &&
    'ssn' in obj &&
    'gender' in obj &&
    'occupation' in obj
  ) {
    const newPatient: PatientsWithoutId = {
      name: parseString(obj.name, 'name'),
      dateOfBirth: parseString(obj.dateOfBirth, 'dateOfBirth'),
      ssn: parseString(obj.ssn, 'ssn'),
      gender: parseGender(obj.gender),
      occupation: parseString(obj.occupation, 'occupation'),
    };
    return newPatient;
  } else {
    throw new Error('Missing or invalid fields in object');
  }
};
