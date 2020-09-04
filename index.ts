import express from 'express';
import { calculateBMI } from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello full stack!')
})

app.get('/bmi', (req, res) => {
  try {
    console.log('q weight', req.query.weight)
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);

    console.log('height', height)
    console.log('weight', weight)

    if (!isNaN(weight) && weight !== 0 && !isNaN(height) && height !== 0) {
      const bmiResult = calculateBMI(height, weight);
      res.json({ weight, height, bmi: bmiResult })
    } else {
      throw new Error('malformatted parameters')
    }

  } catch (error) {
    res.status(400).send({ error: error.message })
  }

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

})

const PORT = 3003;

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})