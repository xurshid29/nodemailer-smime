/// <reference types="node" />
export declare const fromStringOrBuffer: <TInput extends string | Buffer>(input: TInput) => Buffer;
export declare const toStringOrBuffer: <TInput extends string | Buffer>(input: TInput, output: Buffer) => string | Buffer;
