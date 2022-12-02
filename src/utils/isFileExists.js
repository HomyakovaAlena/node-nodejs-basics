import * as fs from "node:fs/promises";

export const isFileExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
};
