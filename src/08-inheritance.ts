export abstract class Animal {
    constructor(
        public id: string | number,
        protected _name: string,
        private _age: number = 1,
    ) {
        // console.info(this.getInfo());
    }

    set name(value: string) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set age(value: number) {
        this._age = value;
    }

    get age() {
        return this._age;
    }

    move() {
        console.log(`${this._name} moves`);
    }

    protected getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

// const cat = new Animal(1, 'Cat');
// cat.move();
// console.log(cat.getInfo()); // Error: protected method

export class Dog extends Animal {
    constructor(id: string | number, name: string, age: number) {
        super(id, name, age);
        console.info(this.getInfo());
    }

    woof(times: number = 1) {
        for (let i = 0; i < times; i++)
            console.log(`${this.name} woofs`);
    }

    move() {
        console.log(`${this._name} runs`);
    }
}

const dog = new Dog('2', 'Dog', 5);
dog.move();
dog.woof();
console.log(dog);