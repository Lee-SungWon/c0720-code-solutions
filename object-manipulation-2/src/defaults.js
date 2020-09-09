// /* eslint-disable no-unused-vars */

/*
Assigns properties of source object to the target object for all properties that are not defined on target.
*/

// const defaults = (target, source) => {
//   const targetProp = [];
//   const sourceProp = [];

//   for (const property in target) {
//     targetProp.push(property);
//   }

//   for (const property in source) {
//     sourceProp.push(property);
//   }

//   let counter = 0;
//   for (let i = 0; i < sourceProp.length; i++) {
//     for (let j = 0; j < targetProp.length; j++) {
//       if (sourceProp[i] !== targetProp[j]) {
//         counter++;
//       }
//     }
//     if (counter === targetProp.length) {
//       target[sourceProp[i]] = source[sourceProp[i]];
//     }
//     counter = 0;
//   }
//   return target;
// };

const defaults = (target, source) => {
  for (const property in source) {
    if (target[property] === undefined) {
      target[property] = source[property];
    }
  }
  return target;
};
