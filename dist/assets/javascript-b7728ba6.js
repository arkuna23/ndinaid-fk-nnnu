import {
    conf as r,
    language as t,
    __tla as a
} from "./typescript-ba149458.js";

import {
    __tla as i
} from "./index-1344e56b.js";

import {
    __tla as o
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let e, s, l = Promise.all([ (() => {
    try {
        return a;
    } catch {}
})(), (() => {
    try {
        return i;
    } catch {}
})(), (() => {
    try {
        return o;
    } catch {}
})() ]).then(async () => {
    e = r, s = {
        defaultToken: "invalid",
        tokenPostfix: ".js",
        keywords: [ "break", "case", "catch", "class", "continue", "const", "constructor", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "from", "function", "get", "if", "import", "in", "instanceof", "let", "new", "null", "return", "set", "static", "super", "switch", "symbol", "this", "throw", "true", "try", "typeof", "undefined", "var", "void", "while", "with", "yield", "async", "await", "of" ],
        typeKeywords: [],
        operators: t.operators,
        symbols: t.symbols,
        escapes: t.escapes,
        digits: t.digits,
        octaldigits: t.octaldigits,
        binarydigits: t.binarydigits,
        hexdigits: t.hexdigits,
        regexpctl: t.regexpctl,
        regexpesc: t.regexpesc,
        tokenizer: t.tokenizer
    };
});

export {
    l as __tla,
    e as conf,
    s as language
};