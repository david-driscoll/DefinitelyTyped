/// <reference path="../node/node.d.ts" />
declare module Gulp {
    interface ILazyPipeR {
        (): any;
        pipe(fn: Function, ...args: any[]): ILazyPipeR;
        pipe(stream: WritableStream, ...args: any[]): ILazyPipeR;
    }
}

interface ILazyPipe {
    (): Gulp.ILazyPipeR;
}

declare var __ILazyPipe: ILazyPipe;
declare module "lazypipe" {
    export = __ILazyPipe;
}