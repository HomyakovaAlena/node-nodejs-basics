import * as fs from "node:fs/promises";

const read = async () => {
  try {
    const data = await fs.readFile("./src/fs/files/fileToRead.txt");
    console.log(data.toString());
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
