// import { Worker } from 'worker_threads';

// const tick = new Worker('./worker.js', {
//   workerData: {
//     path: './workers/tick.ts'
//   }
// });

let searchbar: HTMLInputElement = (document.getElementById('searchbar') as HTMLInputElement);
let input: string = searchbar.value;
let searchDelay: number = 1000;
let ticksSinceLastChange: number = 0;

function inputChanged() {
  console.log('Input changed!');
  input = searchbar.value;
  ticksSinceLastChange = 0;
}

searchbar.addEventListener('oninput', inputChanged);

// function updateInput(elem: HTMLInputElement) {
//   input = elem.value;
//   ticksSinceLastChange = 0;
// }

// function search() {
//   console.log(`Searching: "${ input }"`);
// }

// tick.on('message', (result) => {
//   if (result == 'tick') {
//     if (ticksSinceLastChange != -1) {
//       ticksSinceLastChange = ticksSinceLastChange + 1;
//     }
    
//     if (ticksSinceLastChange >= searchDelay) {
//       ticksSinceLastChange = -1;
//       search();
//     }
//   }
// });