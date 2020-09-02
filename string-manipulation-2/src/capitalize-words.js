/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  const arr = string.split(' ');

  const newArr = [];

  arr.forEach(
    function capitalize(word) {
      let newWord = '';
      newWord = word[0].toUpperCase();
      for (let i = 1; i < word.length; i++) {
        newWord += word[i].toLowerCase();
      }
      newArr.push(newWord);
    }
  );

  let newStr = '';

  for (let i = 0; i < newArr.length; i++) {
    if (newStr === '') {
      newStr += newArr[i];
    } else {
      newStr += ` ${newArr[i]}`;
    }
  }

  return newStr;
}
