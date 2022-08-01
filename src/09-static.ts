// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.abs(-1));

export class MyMath {
    static readonly PI: number = 3.14159;

    static abs(x: number): number {
        return x < 0 ? -x : x;
    }

    static max(...values: number[]): number {
        // let max = values[0];
        // for (let i = 1; i < values.length; i++) {
        //     if (values[i] > max)
        //         max = values[i];
        // }
        // return max;
        return values.reduce((max, current) => max > current ? max : current);
    }

    static min(...values: number[]): number {
        return values.reduce((min, current) => min < current ? min : current);
    }
}

// MyMath.PI = 1;
console.log(MyMath.PI);
console.log(MyMath.abs(-7));
console.log(MyMath.max(1, 2, 3, 4, 5));
console.log(MyMath.min(1, 2, 3, 4, 5));