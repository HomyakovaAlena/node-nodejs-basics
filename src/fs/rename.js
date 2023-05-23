import * as fs from "node:fs/promises";
import { isFileExists } from "../utils/isFileExists.js";

const rename = async () => {
  try {
    const isSameFileExists = await isFileExists(
      "./src/fs/files/properFilename.md"
    );
    if (isSameFileExists) {
      throw new Error("FS operation failed");
    }
    await fs.rename(
      "./src/fs/files/wrongFilename.txt",
      "./src/fs/files/properFilename.md"
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
