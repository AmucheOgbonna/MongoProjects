const http = require('http');
const fs = require('fs');
const url = require('url');
const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');
//////SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const dataObj = JSON.parse(data);

const slug = dataObj.map((element) =>
  slugify(element.productName, { lower: true })
);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // OVERVIEW
  if (pathname === '/overview' || pathname === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const fillCardTemplate = dataObj
      .map((element) => replaceTemplate(tempCard, element))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARD%}', fillCardTemplate);
    res.end(output);

    // PRODUCT
  } else if (pathname === '/product') {
    const product = dataObj[query.id];
    /* if(product){
            const productSlug = slugify(product.productName, {lower:true})
            console.log(productSlug);
            return productSlug
        } */
    const output = replaceTemplate(tempProduct, product);
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(output);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  }

  // NOT FOUND
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('Page not found');
  }
});

server.listen(5003, '127.0.0.1', () => {
  console.log('::::: listening to port 5000...');
});
