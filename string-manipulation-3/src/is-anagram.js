/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  const firstStringNoSpace = firstString.split(' ').join('');
  const secondStringNoSpace = secondString.split(' ').join('');

  let counter = 0;
  let counter2 = 0;

  for (let i = 0; i < firstStringNoSpace.length; i++) {
    if (secondStringNoSpace.includes(firstStringNoSpace[i])) {
      counter++;
    }
  }

  for (let i = 0; i < secondStringNoSpace.length; i++) {
    if (firstStringNoSpace.includes(secondStringNoSpace[i])) {
      counter2++;
    }
  }

  if (counter === firstStringNoSpace.length && counter2 === secondStringNoSpace.length && firstStringNoSpace.length === secondStringNoSpace.length) {
    return true;
  } return false;
}
