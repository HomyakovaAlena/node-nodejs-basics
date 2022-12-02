import { readFile } from "../utils/readFile.js";
const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  try {
    const fileToHash = await readFile(
      "./src/hash/files/fileToCalculateHashFor.txt"
    );
    const hash = createHash("sha256");
    hash.update(fileToHash);
    console.log(hash.digest("hex"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await calculateHash();
