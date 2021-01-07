var fs = require("fs");
var filename = process.argv[2];

fs.readFile(filename, function (err, contents) {
  console.log(contents.toString("utf8").split("\n").length - 1);
});
