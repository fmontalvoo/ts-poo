export class MyDate {

    constructor(
        private _day: number = 10,
        private month: number = 11,
        private year: number = 2012
    ) {
    }

    get day(): number {
        return this._day;
    }

    get isLeapYear(): boolean {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }

    public add(value: number, type: 'dd' | 'MM' | 'yyyy') {
        if (type === 'dd')
            this._day += value;
        else if (type === 'MM')
            this.month += value;
        else if (type === 'yyyy')
            this.year += value;
    }

    private addPadding(value: number): string {
        return value <= 9 ? `0${value}` : value.toString();
    }

    public printFormat(format: string = 'dd/MM/yyyy'): string {
        return format
            .replace('dd', this.addPadding(this._day))
            .replace('MM', this.addPadding(this.month))
            .replace('yyyy', this.year.toString());
    }

}

const myDate = new MyDate(1, 1, 2020);
console.log(myDate.printFormat('dd/MM/yyyy'));
console.log(myDate.day);
console.log('Año bisiesto: ' + myDate.isLeapYear);
