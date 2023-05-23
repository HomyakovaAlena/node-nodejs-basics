import * as fs from "node:fs/promises";

export const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath);
    return data;
  } catch (error) {
    return false;
  }
};
