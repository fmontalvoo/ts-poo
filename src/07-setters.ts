export class MyDate {

    constructor(
        private _day: number = 10,
        private _month: number = 11,
        private _year: number = 2012
    ) {
    }

    set day(day: number) {
        this._day = day;
    }

    get day(): number {
        return this._day;
    }

    set month(month: number) {
        if (month > 0 && month <= 12)
            this._month = month;
        else
            throw new Error('Invalid month');
    }

    get month(): number {
        return this._month;
    }

    set year(year: number) {
        this._year = year;
    }

    get year(): number {
        return this._year;
    }

    get isLeapYear(): boolean {
        if (this._year % 400 === 0) return true;
        if (this._year % 100 === 0) return false;
        return this._year % 4 === 0;
    }

    public add(value: number, type: 'dd' | 'MM' | 'yyyy') {
        if (type === 'dd')
            this._day += value;
        else if (type === 'MM')
            this._month += value;
        else if (type === 'yyyy')
            this._year += value;
    }

    private addPadding(value: number): string {
        return value <= 9 ? `0${value}` : value.toString();
    }

    public printFormat(format: string = 'dd/MM/yyyy'): string {
        return format
            .replace('dd', this.addPadding(this._day))
            .replace('MM', this.addPadding(this._month))
            .replace('yyyy', this._year.toString());
    }

}

const myDate = new MyDate(1, 1, 2020);
console.log(myDate.printFormat('dd/MM/yyyy'));
console.log('Año bisiesto: ' + myDate.isLeapYear);
myDate.day = 2;
myDate.month = 2;
myDate.year = 2022;
console.log(myDate.printFormat('dd/MM/yyyy'));
console.log('Año bisiesto: ' + myDate.isLeapYear);