export class Options {
    auth?: {
        username: string;
        password: string;
    };
    configuration?: any
    headers: {
        Authorization?: string
        "X-Source": string;
        "X-Login"?: string;
    };
}