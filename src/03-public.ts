export class MyDate {
    public day: number;
    public month: number;
    public year: number;

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

    public printFormat(format: string): string {
        const dd = this.day <= 9 ? `0${this.day}` : this.day;
        const mm = this.month <= 9 ? `0${this.month}` : this.month;
        return format
            .replace('dd', dd.toString())
            .replace('MM', mm.toString())
            .replace('yyyy', this.year.toString());
    }

}

const myDate = new MyDate(1, 1, 2021);
console.log(myDate.printFormat('dd/MM/yyyy'));
myDate.add(9, 'dd');
myDate.add(10, 'MM');
myDate.add(3, 'yyyy');
console.log(myDate.printFormat('dd/MM/yyyy'));
myDate.day = 10;
myDate.month = 10;
myDate.year = 2022;
console.log(myDate.printFormat('dd/MM/yyyy'));