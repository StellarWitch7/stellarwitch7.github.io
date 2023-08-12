"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const tick = new worker_threads_1.Worker('./worker.js', {
    workerData: {
        path: './workers/tick.ts'
    }
});
let input = '';
let searchDelay = 1000;
let ticksSinceLastChange = 0;
function updateInput(elem) {
    setTimeout(() => {
        input = elem.value;
        ticksSinceLastChange = 0;
    });
}
function search() {
    console.log(`Searching: "${input}"`);
}
tick.on('message', (result) => {
    if (result == 'tick') {
        if (ticksSinceLastChange != -1) {
            ticksSinceLastChange = ticksSinceLastChange + 1;
        }
        if (ticksSinceLastChange >= searchDelay) {
            ticksSinceLastChange = -1;
            search();
        }
    }
});
