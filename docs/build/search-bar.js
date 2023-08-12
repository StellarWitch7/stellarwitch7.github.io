"use strict";
let searchbar = document.getElementById('searchbar');
let input = searchbar.value;
let searchDelay = 1000;
let ticksSinceLastChange = 0;
let ChangedEvent = new Event('change');
class EventDelay {
    constructor(input, delay = 1000) {
        var self = this;
        this.hasChange = false;
        this.delay = delay;
        if (input) {
            this.input = input;
            this.input.addEventListener('input', () => self.onUserInput());
        }
        this.timer = setInterval(() => self.onTimer(), self.delay);
    }
    onTimer() {
        if (this.hasChange) {
            this.hasChange = false;
            this.input.dispatchEvent(ChangedEvent);
        }
    }
    onUserInput() {
        this.hasChange = true;
        clearInterval(this.timer);
        var self = this;
        this.timer = setInterval(() => self.onTimer(), self.delay);
    }
    static attachTo(input) {
        var controller = new EventDelay(input, 700);
        input['data-EventDelayInstance'] = controller;
    }
}
function search() {
    console.log(`Searching For: "${input}"`);
}
searchbar.addEventListener('change', search);
EventDelay.attachTo(searchbar);
searchbar.addEventListener('input', () => {
    input = searchbar.value;
});
