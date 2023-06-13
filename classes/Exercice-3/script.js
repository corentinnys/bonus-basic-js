/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal
    {
        static greeting = "Miam";
        constructor(name) {
            super();
            this.name = name;
        }
    }

    class Dog extends Animal
    {
        static greeting = "wouf";
        constructor(name) {
            super();
            this.name = name;
        }
    }

    // your code here
    document.querySelector('#run').onclick = function () {
        let cartouche = new Dog('cartouche')  ;
        let peluche = new Cat('peluche')  ;

        console.log(cartouche.sayHello());
        console.log(peluche.sayHello());




    }
})();