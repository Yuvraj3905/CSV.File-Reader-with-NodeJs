const fs = require("fs");
const { parse } = require("csv-parse");


fs.createReadStream("./medicine.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (column) {
    console.log(column);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });