const fs = require('fs');
const express = require('express');

const app = express();
app.use(express());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours: tours, // OR tours only according to es6
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  //   const newId = tours[tours.length - 1].id + 1;
  //   const newTours = Object.assign({ id: newId }, req.body);

  //   tours.push(newTours);
  //   fs.writeFile(
  //     `${__dirname}/dev-data/data/tours-simple.json`,
  //     JSON.stringify(tours),
  //     (err) => {
  //       res.status(201).json({
  //         status: 'success',
  //         data: {
  //           tours: newTours,
  //         },
  //       });
  //     }
  //   );
  res.send('Done');
});

const port = 7001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

/* app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server-side', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post....................');
}); */
