const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const STATUS_USER_ERROR = 422;

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

/* Returns a list of dictionary words from the words.txt file. */
const readWords = () => {
  const loc = 'words.txt'
  const contents = fs.readFileSync(loc, 'utf8');
  const wordsArr = contents.split('\n');
  const min = Math.ceil(10);
  const max = Math.floor(wordsArr.length);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return wordsArr[randomNum];
  //return contents.split('\n');
};

// TODO: your code to handle requests
server.get('/guess', (req,res) =>{
  res.send(`hey... start to guess this ${readWords()}`);
});

server.listen(3000);
