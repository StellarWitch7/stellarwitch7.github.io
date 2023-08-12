import { Worker } from 'worker_threads';

const tick = new Worker('./worker.js', {
  workerData: {
    path: './workers/tick.ts'
  }
});

let input: string = '';
let searchDelay: number = 1000;
let ticksSinceLastChange: number = 0;

function updateInput(elem: HTMLInputElement) {
  input = elem.value;
  ticksSinceLastChange = 0;
}

function search() {
  console.log(`Searching: "${ input }"`);
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