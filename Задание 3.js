// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

const noPrototype = Object.create(null);
console.log(noPrototype.prototype);

function checkEmpty() {
    if (noPrototype.prototype === undefined) {
        console.log('nothingness');
    }
}
checkEmpty();