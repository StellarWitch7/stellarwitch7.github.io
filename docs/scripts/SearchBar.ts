let input: string;

function updateInput(elem: HTMLInputElement) {
    input = elem.value;
    console.log(`Searching: "${ input }"`);
}