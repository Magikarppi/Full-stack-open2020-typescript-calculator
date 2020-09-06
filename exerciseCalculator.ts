interface CalcValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number | undefined;
  ratingDescription: string | undefined;
  target: number;
  average: number;
}

export const calculateExercises = (args: Array<string>): CalcValues => {
  console.log('args.length', args.length);
  console.log('args.[2}', args[2]);
  if (args.length < 4) throw new Error('not enough arguments');

  const argsNumbers = args.slice(3).map((arg) => Number(arg));
  console.log('argsNumbers', argsNumbers);
  console.log('argsNumbers.length', argsNumbers.length);

  const target = Number(args[2]);
  const periodLength = argsNumbers.length;
  const trainingDays = argsNumbers.filter((v) => v !== 0).length;
  const success = trainingDays >= target;
  const average =
    argsNumbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / periodLength;

  const rating = () => {
    const deduction = trainingDays - target;
    console.log('deduction', deduction);

    if (deduction < 0) {
      return 1;
    } else if (deduction === 0) {
      return 2;
    } else if (deduction > 0) {
      return 3;
    }

    return;
  };

  const ratingDescription = () => {
    const r = rating();
    if (r === 1) {
      return 'Do better next time.';
    } else if (r === 2) {
      return 'You met your goal, good job!';
    } else if (r === 3) {
      return 'You exceeded your goal, excellent!';
    }

    return;
  };

  const result = {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating(),
    ratingDescription: ratingDescription(),
    target: target,
    average: average,
  };
  return result;
};
