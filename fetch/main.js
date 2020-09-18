/* eslint-disable no-console */
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
