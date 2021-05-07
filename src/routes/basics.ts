import express from 'express';

//creates a new router object
const routes = express.Router();

routes.get('/fruit-of-the-day', (req, res) => {
  const fruit = "Cherry";
  res.render('basics-fruit', { 
    fruit
  });
});

routes.get('/math', (req, res) => {
  const word = req.query.word;
  const num = Number(req.query.num);
  const double = num * 2;
  res.render('basics-math', {
    word, num, double
  });
});

export default routes;