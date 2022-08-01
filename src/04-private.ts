export class MyDate {
    private day: number;
    private month: number;
    private year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public add(value: number, type: 'dd' | 'MM' | 'yyyy') {
        if (type === 'dd')
            this.day += value;
        else if (type === 'MM')
            this.month += value;
        else if (type === 'yyyy')
            this.year += value;
    }

    private addPadding(value: number): string {
        return value <= 9 ? `0${value}` : value.toString();
    }

    public printFormat(format: string): string {
        return format
            .replace('dd', this.addPadding(this.day))
            .replace('MM', this.addPadding(this.month))
            .replace('yyyy', this.year.toString());
    }

}

const myDate = new MyDate(1, 1, 2021);
console.log(myDate.printFormat('dd/MM/yyyy'));
myDate.add(9, 'dd');
myDate.add(10, 'MM');
myDate.add(3, 'yyyy');
console.log(myDate.printFormat('dd/MM/yyyy'));
// myDate.day = 10; // Error: Property 'day' is private and only accessible within class 'MyDate'
// myDate.month = 10; // Error: Property 'month' is private and only accessible within class 'MyDate'
// myDate.year = 2022; // Error: Property 'year' is private and only accessible within class 'MyDate'
// console.log(myDate.printFormat('dd/MM/yyyy'));