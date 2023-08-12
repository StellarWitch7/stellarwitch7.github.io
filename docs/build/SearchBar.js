"use strict";
let input;
function updateInput(elem) {
    input = elem.value;
    if (input.endsWith('?')) {
        input = '';
    }
}
