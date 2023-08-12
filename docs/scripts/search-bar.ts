let searchbar: HTMLInputElement = (document.getElementById('searchbar') as HTMLInputElement);
let input: string = searchbar.value;
let searchDelay: number = 1000;
let ticksSinceLastChange: number = 0;

let ChangedEvent: Event = new Event('change');

class EventDelay{
  input: HTMLInputElement | undefined;
  hasChange: boolean;
  delay: number | undefined;
  timer: NodeJS.Timer;
  
  constructor(input: HTMLInputElement, delay: number = 1000) {
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

      (this.input as HTMLInputElement).dispatchEvent(ChangedEvent);
    }
  }
  
  onUserInput() {
    this.hasChange = true;
    clearInterval(this.timer);
    var self = this;
    this.timer = setInterval(() => self.onTimer(), self.delay); 
  }
  
  static attachTo(input: HTMLInputElement) {
    var controller = new EventDelay(input, 700);
    (input as any)['data-EventDelayInstance'] = controller;
  }
}

function search() {
  console.log(`Searching For: "${ input }"`);
}

searchbar.addEventListener('change', search);
EventDelay.attachTo(searchbar);