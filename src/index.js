const fs = require('fs');

fs.writeFile('./test.txt', 'just a test\nanother line', (err) => {
  err ? console.log(err) : console.log('Content successfully written.');
});

fs.readFile('./test.txt', 'utf-8', (err, content) => {
  err ? console.log(err) : console.log(content);
});

const readStream = fs.createReadStream('./test.txt', 'utf-8');
const writeStream = fs.createWriteStream('./test2.txt');

readStream.pipe(writeStream);
