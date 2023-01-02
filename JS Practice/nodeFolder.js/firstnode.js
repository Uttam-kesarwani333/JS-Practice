const fs = require('fs');
// fs.writeFileSync("sample.txt","Hello I am UTTAM");

const data = readFileSync("sample.txt");
const str_data= data.toString();
console.log(str_data);
// console.log("UTTAM");

