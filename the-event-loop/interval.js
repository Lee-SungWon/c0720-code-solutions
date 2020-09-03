/* eslint-disable no-console */
let count = 3;

const blastOff = setInterval(counter, 1000);

function counter() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(blastOff);
  }
}
