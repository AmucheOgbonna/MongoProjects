const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I couldn't read the file, senorita");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((reslove, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("I can't write to this file Monsieur");
      reslove('Success');
    });
  });
};

/* readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro(`${__dirname}/dog-img.txt`, res.body.message);
  })
  .then(() => {
    console.log('Random dog image logged');
  })
  .catch((err) => {
    console.log(err);
  });
 */
