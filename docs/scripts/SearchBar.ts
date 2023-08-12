let input: string;

function updateInput(elem: HTMLInputElement) {
    console.log('Searching?');
    input = elem.value;

    if (!input.endsWith('%')) {
        console.log('Searching!');
        input = '';
    }
}