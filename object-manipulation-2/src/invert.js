/* eslint-disable no-unused-vars */
const invert = source => {
  const obj = source;

  const sourceProp = [];

  const sourceValue = [];

  const newObj = {};

  for (const property in obj) {
    sourceProp.push(property);
  }

  // get values in an array;
  for (let i = 0; i < sourceProp.length; i++) {
    sourceValue.push(obj[sourceProp[i]]);
  }

  // combine two arrays into an object;
  for (let i = 0; i < sourceProp.length; i++) {
    newObj[sourceValue[i]] = sourceProp[i];
  }

  return newObj;
};
