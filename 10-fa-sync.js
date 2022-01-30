const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

// Replace and write 
writeFileSync(
    './content/result-sync.txt',
     `Here is the result : ${first}, ${second}`
    )
// Append and write by flag: 'a'
writeFileSync(
    './content/result-sync-append.txt',
     `Here is the result : ${first}, ${second}`,
     { flag: 'a'}
    )