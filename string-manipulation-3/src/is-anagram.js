
const isAnagram = (firstString, secondString) => {
  const firstStringNs = firstString.split(' ').join('');
  let fsPlaceholder = firstString.split(' ').join('');
  let ssPlaceholder = secondString.split(' ').join('');

  for (let i = 0; i < firstStringNs.length; i++) {
    fsPlaceholder = fsPlaceholder.replace(firstString[i], '');
    ssPlaceholder = ssPlaceholder.replace(firstString[i], '');
  }

  if (fsPlaceholder === ssPlaceholder) {
    return true;
  } return false;
};
