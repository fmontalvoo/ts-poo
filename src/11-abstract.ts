import { Animal, Dog } from './08-inheritance';

// const cat = new Animal(1, 'Lucas'); // Error: Abstract class
// cat.move();
// console.log(cat);

const dog = new Dog(2, 'Chester', 2);
dog.move();
dog.woof();
console.log(dog);