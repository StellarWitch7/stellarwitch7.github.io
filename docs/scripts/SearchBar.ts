let input: string;

function updateInput(elem: HTMLInputElement) {
    input = elem.value;

    if (input.endsWith('?')) {
        input = '';
    }
}