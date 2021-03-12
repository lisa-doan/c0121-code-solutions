const fs = require('fs');

const filesNum = process.argv.length;
let index = 2;

const readFile = () => {
  fs.readFile(process.argv[index], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    index++;
    if(index < filesNum) readFile();
  });
};

readFile();
