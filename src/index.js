const fs = require('fs');

fs.writeFile('./test.txt', 'just a test', (err) => {
  err ? console.log(err) : console.log('Content successfully written.');
});
