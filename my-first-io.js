var fs = require("fs");
var filename = process.argv[2];
var FILE = fs.readFileSync(filename);
var strFile = FILE.toString();
var splt = strFile.split("\n");
console.log(splt.length - 1);
