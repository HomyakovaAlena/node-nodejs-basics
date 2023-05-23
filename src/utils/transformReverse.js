import { Transform } from "stream";

export const transformReverse = new Transform({
  transform(chunk, enc, cb) {
    const chunkStringified = chunk.toString().trim();
    const reversedChunk = chunkStringified.split("").reverse().join("");
    cb(null, reversedChunk + "\n");
  },
});
