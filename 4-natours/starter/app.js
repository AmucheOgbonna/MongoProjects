const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./route/tourRoutes');
const userRouter = require('./route/userRoutes');

const app = express();

/////// 1]  MIDDLEWARE

app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from the other-side');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//////// 2] ROUTE HANDLERS

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

///// 3] MOUNTING THE ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
///// 4] SERVER

module.exports = app;
