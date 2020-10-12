class Rabbit {}
let rabbit = new Rabbit();
// alert(rabbit instanceof Rabbit);


let arr = [1, 2, 3];
// alert(arr instanceof Array);
// alert(arr instanceof Object);


class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}

let obj = { canEat: true };
alert(obj instanceof Animal);