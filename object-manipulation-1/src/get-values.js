/* eslint-disable no-unused-vars */

function getValues(object) {
  const objectProp = Object.keys(object);
  const output = [];
  for (let i = 0; i < objectProp.length; i++) {
    const prop = objectProp[i];
    output.push(object[prop]);
  }
  return output;
}

/*
function getValues(object) {
  const objectProp = Object.keys(object);
  const output = [];
  for (let i = 0; i < objectProp.length; i++) {
    output.push(object.objectProp[i]); // why doesn't this work?
  }
  return output;
}
*/
