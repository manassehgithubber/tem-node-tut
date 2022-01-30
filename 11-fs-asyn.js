// // method -1
// const fs = require('fs');

// fs.readFile('./content/first.txt', 'utf8', (err, data)=>{
//     console.log(data)
// })

// method-2
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, data)=>{
    console.log(data);
})