"use strict";
let input;
function updateInput(elem) {
    console.log('Searching?');
    input = elem.value;
    if (!input.endsWith('%')) {
        console.log('Searching!');
        input = '';
    }
}
