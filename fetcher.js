const request = require('request');
const fs = require('fs');



request(`${process.argv[2]}`, (error, response, body) => {
  fs.appendFile(process.argv[3], body, error1 => {
    if (error1) {
      console.log(error1);
    }
    var size = fs.statSync(process.argv[3]).size;
    console.log(`Downloaded and saved ${size} bytes to ${process.argv[3]}`);
  });
});