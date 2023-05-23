import * as fs from "node:fs/promises";

const remove = async () => {
  try {
    await fs.unlink("./src/fs/files/fileToRemove.txt");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
