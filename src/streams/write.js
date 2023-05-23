import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const write = async () => {
  const readable = process.stdin;
  const writable = createWriteStream("./src/streams/files/fileToWrite.txt");
  try {
    await pipeline(readable, writable);
  } catch (err) {
    console.error(`Error message: ${err}`);
  }
};

await write();
