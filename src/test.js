
const fs = require('fs');

const readWords = () => {
  const loc = '../words.txt'
  const contents = fs.readFileSync(loc, 'utf8');
  const wordsArr = contents.split('\n');
  const min = Math.ceil(10);
  const max = Math.floor(wordsArr.length);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return wordsArr[randomNum];
  //return contents.split('\n');
};

const randomWord = readWords();

console.log(randomWord);


//console.log(readWords());
//const randomWords = readWords;

