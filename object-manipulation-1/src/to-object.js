/* eslint-disable no-unused-vars */
function toObject(keyValuePair) {
  const obj = {};
  const prop = keyValuePair[0];
  const val = keyValuePair[1];
  obj[prop] = val;
  return obj;
}
