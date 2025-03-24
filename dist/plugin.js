"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const binding_1 = require("./binding");
const utils_1 = require("./utils");
const HEADERS = Object.freeze([
    "from",
    "to",
    "cc",
    "bcc",
    "replyTo",
    "inReplyTo",
    "subject",
    "sender",
    "date",
    "messageId",
]);
/**
 * Creates an object composed of the picked input properties.
 */
const pick = (input, props) => Object.fromEntries(props.map((p) => [p, input[p]]));
const plugin = ({ recipient, cipher }) => {
    if (!recipient)
        throw new Error("Missing recipient from options");
    return (mail, callback) => __awaiter(void 0, void 0, void 0, function* () {
        let err = null;
        try {
            const message = yield mail.message.build();
            const headers = Object.fromEntries(Object.entries(Object.assign(Object.assign({}, pick(mail.data, HEADERS)), mail.data.headers))
                // Filter invalid values
                .filter(([, value]) => value !== null && value !== void 0 ? value : false)
                .map(([key, value]) => [
                // Take care of capital kebab case
                key
                    .replace(/[a-z]/, (match) => match.toUpperCase())
                    .replace(/([a-z])([A-Z])/g, (match, a, b) => `${a}-${b}`),
                // Concat arrays to comma-separated strings
                Array.prototype.concat.call([], value).join(", "),
            ])
                // Remove empty strings
                .filter(([, value]) => value.length > 0));
            const encrypted = (0, binding_1.encrypt)(message, (0, utils_1.fromStringOrBuffer)(recipient), cipher, headers);
            mail.message.setRaw(encrypted);
        }
        catch (e) {
            err = e;
        }
        callback(err);
    });
};
exports.plugin = plugin;
