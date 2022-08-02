import { Dog } from './08-inheritance';

function getValue<T>(value: T): T {
    return value;
}

const str = getValue<string>('Hola');
const num = getValue<number>(1);
const bool = getValue<boolean>(true);
const obj = getValue<object>({});
const arr = getValue<Array<number>>([1, 2, 3]);
const func = getValue<Function>(() => { });

console.log(str.toUpperCase());

const firulais = new Dog(1, 'Firulais', 2);

const dog = getValue<Dog>(firulais);

console.log(dog.name);