import * as fs from "node:fs/promises";

const copy = async () => {
  try {
    await fs.cp("./src/fs/files/", "./src/fs/files_copy/", {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

copy();
