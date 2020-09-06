export const calculateBMI = (height: number, weight: number): string => {
  const bmi = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
  console.log('bmi:', bmi);

  if (bmi < 18.5) {
    return `Body mass of ${bmi} is a sign of being underweight`;
  } else if (bmi > 18.5 && bmi < 25) {
    return `Body mass of ${bmi} is a sign of being normalweight`;
  } else {
    return `Body mass of ${bmi} is a sign of being overweight`;
  }
};
