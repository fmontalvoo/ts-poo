export class MyDate {
    day: number;
    month: number;
    year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    add(value: number, type: 'dd' | 'MM' | 'yyyy') {
        if (type === 'dd')
            this.day += value;
        else if (type === 'MM')
            this.month += value;
        else if (type === 'yyyy')
            this.year += value;
    }

    printFormat(format: string): string {
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
console.log(myDate.printFormat('MM/dd/yyyy'));
console.log(myDate.printFormat('yyyy/MM/dd'));
myDate.add(9, 'dd');
myDate.add(10, 'MM');
myDate.add(3, 'yyyy');
console.log(myDate.printFormat('dd/MM/yyyy'));