/* eslint-disable no-console */
const arr = [
  {
    isbn: '123',
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain'
  },
  {
    isbn: '456',
    title: 'Treasure Island',
    author: 'Robert Stevenson'
  },
  {
    isbn: '789',
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  }
];

const arrStr = JSON.stringify(arr);
console.log(arrStr);
console.log(typeof arrStr);

const arrStrParse = JSON.parse(arrStr);
console.log(arrStrParse);
console.log(typeof arrStrParse);
