const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.join(__dirname, "Files", "bigFile.txt"), {
  encoding: "utf-8",
});
const ws = fs.createWriteStream(
  path.join(__dirname, "Files", "newBigFile.txt")
);

// rs.on("data", (datachunk) => {
//   ws.write(datachunk);
// });
rs.pipe(ws);
