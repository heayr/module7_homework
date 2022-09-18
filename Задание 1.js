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
