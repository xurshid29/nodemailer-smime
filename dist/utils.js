"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toStringOrBuffer = exports.fromStringOrBuffer = void 0;
const fromStringOrBuffer = (input) => (Buffer.isBuffer(input) ? input : Buffer.from(input));
exports.fromStringOrBuffer = fromStringOrBuffer;
const toStringOrBuffer = (input, output) => (Buffer.isBuffer(input) ? output : output.toString());
exports.toStringOrBuffer = toStringOrBuffer;
