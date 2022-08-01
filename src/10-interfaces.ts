interface Driver {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    connect(): boolean;
    disconnect(): boolean;
}

export class PostgreDriver implements Driver {
    constructor(
        public host: string,
        public port: number,
        public database: string,
        public username: string,
        public password: string
    ) {
    }

    connect(): boolean {
        return true;
    }

    disconnect(): boolean {
        return true;
    }
}

export class OracleDriver implements Driver {
    constructor(
        public host: string,
        public port: number,
        public database: string,
        public username: string,
        public password: string
    ) {
    }

    connect(): boolean {
        return true;
    }

    disconnect(): boolean {
        return true;
    }
}