import { Worker } from "node:worker_threads";
import os from "node:os";

const THREAD_COUNT = os.cpus().length;

const createWorker = (number) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/wt/worker.js", {
      workerData: { number },
    });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
};

const performCalculations = async () => {
  const workerPromises = [];
  for (let i = 0; i < THREAD_COUNT; i++) {
    const number = 10 + i;
    workerPromises.push(createWorker(number));
  }
  const thread_results = await Promise.allSettled(workerPromises);
  console.log(
    thread_results.map((result) => {
      return result.status === "fulfilled"
        ? { status: "resolved", data: result.value }
        : { status: "error", data: null };
    })
  );
};

await performCalculations();
