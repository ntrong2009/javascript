class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber => subscriber !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');

const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

const headingObserver = new Observable();
headingObserver.subscribe(updateP1);
headingObserver.subscribe(updateP2);
headingObserver.subscribe(updateP3);

console.log('%c%s', 'color: #ff0000', 'observer aray', headingObserver);

input.addEventListener('keyup', e => {
    headingObserver.notify(e.target.value);
});