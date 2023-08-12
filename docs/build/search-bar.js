"use strict";
// import { Worker } from 'worker_threads';
// const tick = new Worker('./worker.js', {
//   workerData: {
//     path: './workers/tick.ts'
//   }
// });
let searchbar = document.getElementById('searchbar');
let input;
let searchDelay = 1000;
let ticksSinceLastChange = 0;
function inputChanged() {
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
