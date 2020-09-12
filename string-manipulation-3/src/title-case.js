/* eslint-disable no-unused-vars */
function titleCase(title) {
  const minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const arr = title.split(' ');
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newWord = '';

    if (!minor.includes(arr[i]) || arr[i - 1].includes(':')) {
      newWord += arr[i][0].toUpperCase();
    } else {
      newWord += arr[i][0];
    }
    for (let j = 1; j < arr[i].length; j++) {
      newWord += arr[i][j];
    }
    newArr.push(newWord);
  }

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].includes('-')) {
      const index = newArr[j].indexOf('-');
      const wordArr = newArr[j].split('');
      wordArr[index + 1] = wordArr[index + 1].toUpperCase();
      const word = wordArr.join('');
      newArr[j] = word;
    }
  }

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].toLowerCase().includes('javascript')) {
      let word;
      if (newArr[j].includes(':')) {
        word = 'JavaScript:';
      } else {
        word = 'JavaScript';
      }
      newArr[j] = word;

    }
  }

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].toLowerCase().includes('api')) {
      let word;
      if (newArr[j].includes(':')) {
        word = 'API:';
      } else {
        word = 'API';
      }
      newArr[j] = word;

    }
  }

  return newArr.join(' ');
}
