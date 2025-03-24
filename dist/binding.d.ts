/// <reference types="node" />
export declare const DEFAULT_CIPHER = "des3";
export declare const encrypt: <TInput extends string | Buffer>(message: TInput, publicKey: TInput, cipher?: string, headers?: {
    [key: string]: string;
} | undefined) => string | Buffer;
export declare const decrypt: <TInput extends string | Buffer>(message: TInput, keyPair: TInput) => string | Buffer;
