/// <reference path="./src/test.d.ts" />
/// <reference types="node" />
export class C {
    protected get p(): number;
    protected set p(value: number);
    public get q(): string;
    private set r(value: boolean);
}
// hi, this should still be there
export namespace N {
    abstract class D {
        /**
         * @readonly
         * @memberof BlobLeaseClient
         * @type {number}
         */
        get p(): number;
        /** preserve this too */
        set p(value: number);
        get q();
        abstract set r(value: boolean);
    }
}
/** is this a single-line comment? */
import { C as CD } from "./src/test";
/*preserve it */
import { C as CD2, C as CD3 } from "./src/test";
/*this too */
import { C as CD4, C as CD5 } from "./src/test";
/*preserve it */
export { CD2, CD3 };
/*this too */
export { CD4, CD5 };
/*preserve it */
export { C as CD6, C as CD7 } from "./src/test";
/*this too */
export { C as CD8, C as CD9 } from "./src/test";
import * as rex_1 from "./src/test";
//another comment
export { rex_1 as rex };
export interface E {
    a: number;
    b: number;
}
/// is this a single-line comment?
export type F = Omit<E, 'a'>;
export class G {
    private "G.#private";
}
export class H extends G {
    private "H.#private";
}
export interface I extends Omit<E, 'a'> {
    version: number;
}
declare function guardIsString(val: any): val is string;
/** side-effects! */
declare function assertIsString(val: any, msg?: string): asserts val is string;
declare function assert(val: any, msg?: string): asserts val;
type J = [
    /*foo*/ string,
    /*bar*/ number,
    /*arr*/ ...boolean[]
];
import * as default_1 from "./src/test";
export { default_1 as default };
export declare type Asserts<T> = (val: unknown) => asserts val is T;
export declare const foo: {
    bar: {
        baz: <T>(val: unknown) => asserts val is T;
    };
};
export type IR = IteratorResult<number, string>;
