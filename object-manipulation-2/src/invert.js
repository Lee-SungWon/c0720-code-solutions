/* eslint-disable no-unused-vars */

/* Creates an object composed of the inverted keys and values of source.
invert({ age: NaN, occupation: 'programmer', language: 'JavaScript' })
// -> { NaN: 'age', programmer: 'occupation', JavaScript: 'language' }
invert({ accountId: 'axbxcx', amount: 1000, type: 'withdrawal' })
// -> { axbxcx: 'accountId', '1000': 'amount', withdrawal: 'type' }
invert({ name: 'ada', type: 'cat', breed: 'bengal', age: 1.5 })
// -> { ada: 'name', cat: 'type', bengal: 'breed', '1.5': 'age' }
invert({})
// -> {}
*/

const invert = source => {
  const obj = source;

  const sourceProp = [];

  const sourceValue = [];

  const newObj = {};

  for (const property in obj) {
    sourceProp.push(property);
  }

  for (let i = 0; i < sourceProp.length; i++) {
    sourceValue.push(obj[sourceProp[i]]);
  }

  // combine two arrays into an object;
  for (let i = 0; i < sourceProp.length; i++) {
    newObj[sourceValue[i]] = sourceProp[i];
  }

  return newObj;
};
