import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const read = async () => {
  const readable = createReadStream("./src/streams/files/fileToRead.txt");
  const writable = process.stdout;
  try {
    await pipeline(readable, writable);
  } catch (err) {
    console.error(`Error message: ${err}`);
  }
};

await read();
