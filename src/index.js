const express = require('express');
const fs = require('fs');
const cors = require('cors');
const parser = require('csv-parser');
const multer = require('multer');

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ dest: 'files' });

/* fs.writeFile('./test.txt', 'just a test\nanother line', (err) => {
  err ? console.log(err) : console.log('Content successfully written.');
});

fs.readFile('./test.txt', 'utf-8', (err, content) => {
  err ? console.log(err) : console.log(content);
});

const readStream = fs.createReadStream('./test.txt', 'utf-8');
const writeStream = fs.createWriteStream('./test2.txt');

readStream.pipe(writeStream); */

app.post('/', upload.single('file'), (req, res) => {

  const { path } = req['file']; 
  const rows = [];
  
  fs.createReadStream(path)
  .pipe(parser())
  .on('data', chunck => rows.push(chunck))
  .on('end', () => {
    fs.unlink(path, (err) => console.log(err));
    res.status(200).json({ message: `File processed with success. It were processed ${rows.length} records.` })
  });
});

app.listen(PORT, () => console.log('server connected and listening to requests...'));
