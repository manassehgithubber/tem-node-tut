// npm - global command, comes with node. When u install node, npm is automatically installed
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName> - to install a package (external module)

// global dependancy - use it in any project
// npm install -g <packageName>
// sudo install npm -g <packageName> (mac)

/// Before installing packages, package.json should be created...
// package.json -manifest file (stores important info about project/package)
// package.json is vital when sharing the project with other developers

// There are 3 ways of creating package.json;
// 1. manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

// node_modules folder should not be pushed to remote repository. 

const _ = require('lodash');

const items =[1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)











