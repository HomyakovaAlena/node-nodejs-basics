import { pipeline } from "stream/promises";
import { transformReverse } from "../utils/transformReverse.js";

const transform = async () => {
  const readable = process.stdin;
  const writable = process.stdout;
  try {
    pipeline(readable, transformReverse, writable);
  } catch (err) {
    console.error(`Error message: ${err}`);
  }
};

await transform();
