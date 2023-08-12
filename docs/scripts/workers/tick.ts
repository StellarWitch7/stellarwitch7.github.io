import { parentPort, workerData } from 'worker_threads';

while (true) {
  (parentPort as unknown as MessagePort).postMessage('tick');
}