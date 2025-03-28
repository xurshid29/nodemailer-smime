"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.plugin = exports.encrypt = exports.decrypt = exports.DEFAULT_CIPHER = void 0;
const binding_1 = require("./binding");
Object.defineProperty(exports, "DEFAULT_CIPHER", { enumerable: true, get: function () { return binding_1.DEFAULT_CIPHER; } });
Object.defineProperty(exports, "decrypt", { enumerable: true, get: function () { return binding_1.decrypt; } });
Object.defineProperty(exports, "encrypt", { enumerable: true, get: function () { return binding_1.encrypt; } });
const plugin_1 = require("./plugin");
Object.defineProperty(exports, "plugin", { enumerable: true, get: function () { return plugin_1.plugin; } });
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return plugin_1.plugin; } });
