const app = require('./app');

const port = 7001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
