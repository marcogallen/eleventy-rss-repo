require("dotenv").config();
const fs = require("node:fs");

const env = process.env.ELEVENTY_ENV;

const d = new Date();

if (env == "dev") {
  d.setDate(d.getDate() - 60);
}

console.log(new Date(d));

const time = new Date(d).getTime();

try {
  fs.writeFileSync("./src/_data/lastAccessed.js", `module.exports=${time}`);
} catch (error) {
  console.log(error);
}
