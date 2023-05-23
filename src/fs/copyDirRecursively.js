import * as fs from "node:fs/promises";
import path from "path";

const copyDirRecursively = async (src, dest) => {
  const source = src || "./src/fs/files/";
  const destination = dest || "./src/fs/files_copy/";

  try {
    const entries = await fs.readdir(source, {
      withFileTypes: true,
    });
    await fs.mkdir(destination, { recursive: false });

    for (const entry of entries) {
      let srcPath = path.join(source, entry.name);
      let destPath = path.join(destination, entry.name);

      entry.isDirectory()
        ? await copyDirRecursively(srcPath, destPath)
        : await fs.copyFile(srcPath, destPath);
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

copyDirRecursively();
