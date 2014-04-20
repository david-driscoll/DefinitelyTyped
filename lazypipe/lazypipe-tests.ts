/// <reference path="../node/node.d.ts" />
/// <reference path="lazypipe.d.ts" />
var lazypipe : ILazyPipe;

lazypipe()();
lazypipe().pipe(() => {})
lazypipe().pipe(() => {}, 1, 2, 3, 4)

var stream: WritableStream;
lazypipe().pipe(stream)
lazypipe().pipe(stream, 1, 2, 3, 4)

