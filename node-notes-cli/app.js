const read = require('./read.js');
const add = require('./add.js');
const update = require('./update.js');
const remove = require('./remove.js');

switch (process.argv[2]) {
  case 'read':
    read();
    break;
  case 'create':
    add();
    break;
  case 'update':
    update();
    break;
  case 'delete':
    remove();
    break;
}
