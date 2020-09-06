import express from 'express';
import { calculateBMI } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello full stack!');
});

app.get('/bmi', (req, res) => {
  try {
    console.log('q weight', req.query.weight);
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    console.log('height', height);
    console.log('weight', weight);

    if (!isNaN(weight) && weight !== 0 && !isNaN(height) && height !== 0) {
      const bmiResult = calculateBMI(height, weight);
      res.json({ weight, height, bmi: bmiResult });
    } else {
      throw new Error('malformatted parameters');
    }
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    res.status(400).send({ error: error.message });
  }

  app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call

    try {
      console.log('req.body', req.body);
      const excersices = req.body.daily_exercises;
      const target = req.body.target;
      const data = [target].concat(excersices).map(String);

      console.log('data', data);
      const exercisesResult = calculateExercises(data);
      res.status(201).json(exercisesResult);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

  // if (!isNaN(weight) && !isNaN(height)) {
  // } else {
  //   throw new Error ('')
  // }
  // const weight = Number(req.query.weight);
  // const height = Number(req.query.height);

  // console.log('height', height)
  // console.log('weight', weight)

  // if (!isNaN(weight) && !isNaN(height)) {
  //   const bmiResult = calculateBMI(height, weight);
  //   return res.json({ weight, height, bmi: bmiResult })
  // } else {
  //   throw new Error ('')
  // }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
