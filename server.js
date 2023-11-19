const path = require("path");
const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "Files", "new.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "Files", "Quality.txt"),
      "Quality describes Brand"
    );
    console.log("File Written");
    await fsPromises.appendFile(
      path.join(__dirname, "Files", "Quality.txt"),
      "\n\nBrand deserves Kingdom"
    );
    console.log("File Appended");
    await fsPromises.rename(
      path.join(__dirname, "Files", "Quality.txt"),
      path.join(__dirname, "Files", "RenamedFile.txt")
    );
    console.log("File renewed");
    await fsPromises.unlink(path.join(__dirname, "Files", "RenamedFile.txt"));
    console.log("File Deleted Sucessfully");
  } catch (err) {
    console.error(err);
  }
};
fileOps();

process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception spotted : ${err}`);
  process.exit(1);
});
