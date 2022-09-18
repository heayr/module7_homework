console.log('Hi, module_7 started');

// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект
//  и выводит в консоль все ключи и значения только собственных свойств.
//   Данная функция не должна возвращать значение.

function getKey() {
    const testObj = {
        city: 'Moscow',
        programme: 'Web Dev'
    };

    for (let key in testObj) {
        console.log(key);
    }
}

getKey();


// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем
// проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.


function checkProperty(str, obj) {
    return (str in obj);
}


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

// =============================================================================================================
// Задание 4.

// Реализуйте следующее консольное приложение подобно примеру,
// который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов.
// Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
//  Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и,
//  желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

// конструктор >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function Online(name) {
//     this._name = name,
//         this._pluggedIn = 'pluggedIn',
//         this._unPlugged = 'unPlugged'
// }

// Online.prototype.getWatts = function (watts) {
//     console.log(`Потребляемая мощность ${watts} ватт`);
// }

// 1-й прибор -----------------------------------------------

// function Computer(name) {
//     this._name = name,
//         this.pluggedIn = this._pluggedIn
// }

// Computer.prototype = new Online('homePC');

// Computer.prototype.getWatts = function (watts) {
//     console.log(`Потребляемая мощность компьютера ${watts} ватт`);
// }

// const windowsPc = new Computer('homePC');
// windowsPc.getWatts(600);
// console.log(windowsPc);

// Конец 1-го прибора----------------------------------------------------

// 2-й прибор -----------------------------------------------


// function Lamp(name) {
//     this._name = name,
//         this.unPlugged = this._unPlugged
// }

// Lamp.prototype = new Online('lamp');

// Lamp.prototype.getWatts = function (watts) {
//     console.log(`Потребляемая мощность лампы ${watts} ватт`);
// }

// const floorLamp = new Lamp('Floor Lamp');
// floorLamp.getWatts(0);
// console.log(floorLamp);


// Конец 2-го прибора----------------------------------------------------

/*
Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/

class Online {
    constructor(name, watts) {
        this.name = name;
        this.watts = watts;

    }
    getWatts(watts) {
        if (typeof watts === 'number') {
            console.log(`Потребляемая мощность ${watts} ватт`);
        } else {
            console.log('Not a number');
        }
    }

    offline(watts) {
        console.log(`Девайс не включен, потребляет ${watts} ватт`);
    }


}

class Device extends Online {
    constructor(name, pluggedIn) {
        super(pluggedIn, name);
        this.name = 'HomePc';
        this.pluggedIn = pluggedIn;

    }

    getWatts() {
        if (this.pluggedIn) {
            return super.getWatts(this.watts);
        } else {
            return super.offline(this.watts);
        }
    }
}

class Device2 extends Online {
    constructor(name, pluggedIn) {
        super(pluggedIn, name);
        this.name = 'HomeLamp';
        this.pluggedIn = pluggedIn;

    }

    getWatts() {
        if (this.pluggedIn) {
            return super.getWatts(this.watts);
        } else {
            return super.offline(this.watts);
        }
    }
}

const device_1 = new Device(999, true);
device_1.getWatts(this.watts);
console.log(device_1);

const device_2 = new Device2(0, false);
device_2.getWatts(this.watts);
console.log(device_2);