/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const name = takeAChance('Chris');
name.then(message => {
  console.log(message);
}).catch(message => {
  console.error(message.message);
});
