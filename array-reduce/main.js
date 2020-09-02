/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(sum));

const product = (accumulator, currentValue) => accumulator * currentValue;

console.log(numbers.reduce(product));

// const balance = (accumulator, currentValue) => {
//   if (currentValue.type === 'deposit') {
//     return accumulator += currentValue.amount;
//   } else {
//     return accumulator -= currentValue.amount;
//   }
// };

// console.log(account.reduce(balance, 0));

// const composite = (accumulator, currentValue) => {
//   for (const property in currentValue) {
//     return Object.assign(accumulator, property);
//   }
// };

// console.log(traits.reduce(composite, {}));

// Object.assign
// const composite = (accumulator, currentValue) => {å
//   return Object.assign(accumulator, currentValue);
// };

// {color, type, name, level, trainer}
