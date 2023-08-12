"use strict";
let input;
function updateInput(elem) {
    input = elem.value;
    console.log('Searching?');
    if (input.endsWith('?')) {
        console.log('Searching!');
        input = '';
    }
}
