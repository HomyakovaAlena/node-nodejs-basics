import * as fs from "node:fs/promises";

const create = async () => {
  try {
    const data = "I am fresh and young";
    await fs.writeFile("./src/fs/files/fresh.txt", data, { flag: "wx" });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
