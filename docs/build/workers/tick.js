"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
while (true) {
    worker_threads_1.parentPort.postMessage('tick');
}
