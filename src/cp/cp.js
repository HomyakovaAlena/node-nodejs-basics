import { fork } from "node:child_process";

const spawnChildProcess = async (...args) => {
  const argums = [...process.argv.slice(2), ...args]; //if we take into account args from command line also, not only args of the function
  const child = fork("./src/cp/files/script.js", argums);
};

spawnChildProcess();
