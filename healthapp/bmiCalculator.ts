export const calculateBMI = (weight: number, height: number): string => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  console.log(bmi);
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
};

export interface BMIValues {
  weight: number;
  height: number;
}

export const parseArguments = (args: string[]): BMIValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      weight: Number(args[2]),
      height: Number(args[3]),
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

try {
  const { weight, height } = parseArguments(process.argv);
  console.log(calculateBMI(weight, height));
} catch (error: unknown) {
  console.error('Error:', (error as Error).message);
}
