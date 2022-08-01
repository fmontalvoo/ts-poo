export class MyService {
    private static instance: MyService;

    private constructor(private version: string) { }

    static getInstance(version: string): MyService {
        if (!MyService.instance)
            MyService.instance = new MyService(version);
        return MyService.instance;
    }

    getVersion() {
        return this.version;
    }
}

const ms_1 = MyService.getInstance('v1.0.0');
console.log(ms_1.getVersion());
const ms_2 = MyService.getInstance('v2.0.0');
console.log(ms_2.getVersion());

console.log(ms_1 === ms_2);