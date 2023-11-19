const fs = require("fs");

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
} else {
  console.log("Already exists");
}

process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception Occured :  ${err}`);
  process.exit(1);
});
