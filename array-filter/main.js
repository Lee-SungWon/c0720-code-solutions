/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = number => number % 2 === 0;
console.log(numbers.filter(evenNumbers));

const overFive = number => number > 5;
console.log(numbers.filter(overFive));

const startWithE = name => name[0] === 'E';
console.log(names.filter(startWithE));

const haveD = name => {
  if (name.toLowerCase().includes('d')) {
    return name;
  }
};

console.log(names.filter(haveD));
