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