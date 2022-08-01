export class MyDate {
    day: number;
    month: number;
    year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

}

const myDate = new MyDate(1, 1, 2020);
console.log(myDate);