const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHander = require('./controllers/errorController');

const tourRouter = require('./route/tourRoutes');
const userRouter = require('./route/userRoutes');

const app = express();

/////// 1]  MIDDLEWARE
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`)); //STATIC_FILES

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

app.all('*', (req, res, next) => {
  /* const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.statusCode = 404;
  err.status = 'Failed'; */
  // next(err);
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

app.use(globalErrorHander);
module.exports = app;
