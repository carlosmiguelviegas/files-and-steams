const express = require('express');
const fs = require('fs');
const cors = require('cors');
const parser = require('csv-parser');

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

/* fs.writeFile('./test.txt', 'just a test\nanother line', (err) => {
  err ? console.log(err) : console.log('Content successfully written.');
});

fs.readFile('./test.txt', 'utf-8', (err, content) => {
  err ? console.log(err) : console.log(content);
});

const readStream = fs.createReadStream('./test.txt', 'utf-8');
const writeStream = fs.createWriteStream('./test2.txt');

readStream.pipe(writeStream); */

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.file);
  fs.createReadStream(req.file.path).pipe(parser()).on('data', content => console.log(content));
});

app.listen(PORT, () => console.log('server connected and listening to requests...'));
