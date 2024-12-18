import {
    m as f,
    __tla as b
} from "./index-1344e56b.js";

import {
    __tla as u
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let l, c, y = Promise.all([ (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    var r, s, p = Object.defineProperty, d = Object.getOwnPropertyDescriptor, g = Object.getOwnPropertyNames, _ = Object.prototype.hasOwnProperty, o = (n, e, m, a) => {
        if (e && typeof e == "object" || typeof e == "function") for (let t of g(e)) _.call(n, t) || t === m || p(n, t, {
            get: () => e[t],
            enumerable: !(a = d(e, t)) || a.enumerable
        });
        return n;
    }, i = {};
    o(i, r = f, "default"), s && o(s, r, "default"), l = {
        comments: {
            lineComment: "#",
            blockComment: [ "'''", "'''" ]
        },
        brackets: [ [ "{", "}" ], [ "[", "]" ], [ "(", ")" ] ],
        autoClosingPairs: [ {
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: '"',
            close: '"',
            notIn: [ "string" ]
        }, {
            open: "'",
            close: "'",
            notIn: [ "string", "comment" ]
        } ],
        surroundingPairs: [ {
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: '"',
            close: '"'
        }, {
            open: "'",
            close: "'"
        } ],
        onEnterRules: [ {
            beforeText: new RegExp("^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async|match|case).*?:\\s*$"),
            action: {
                indentAction: i.languages.IndentAction.Indent
            }
        } ],
        folding: {
            offSide: !0,
            markers: {
                start: new RegExp("^\\s*#region\\b"),
                end: new RegExp("^\\s*#endregion\\b")
            }
        }
    }, c = {
        defaultToken: "",
        tokenPostfix: ".python",
        keywords: [ "False", "None", "True", "_", "and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "exec", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal", "not", "or", "pass", "print", "raise", "return", "try", "type", "while", "with", "yield", "int", "float", "long", "complex", "hex", "abs", "all", "any", "apply", "basestring", "bin", "bool", "buffer", "bytearray", "callable", "chr", "classmethod", "cmp", "coerce", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "execfile", "file", "filter", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "id", "input", "intern", "isinstance", "issubclass", "iter", "len", "locals", "list", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "reversed", "range", "raw_input", "reduce", "reload", "repr", "reversed", "round", "self", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "unichr", "unicode", "vars", "xrange", "zip", "__dict__", "__methods__", "__members__", "__class__", "__bases__", "__name__", "__mro__", "__subclasses__", "__init__", "__import__" ],
        brackets: [ {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        }, {
            open: "[",
            close: "]",
            token: "delimiter.bracket"
        }, {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        } ],
        tokenizer: {
            root: [ {
                include: "@whitespace"
            }, {
                include: "@numbers"
            }, {
                include: "@strings"
            }, [ /[,:;]/, "delimiter" ], [ /[{}\[\]()]/, "@brackets" ], [ /@[a-zA-Z_]\w*/, "tag" ], [ /[a-zA-Z_]\w*/, {
                cases: {
                    "@keywords": "keyword",
                    "@default": "identifier"
                }
            } ] ],
            whitespace: [ [ /\s+/, "white" ], [ /(^#.*$)/, "comment" ], [ /'''/, "string", "@endDocString" ], [ /"""/, "string", "@endDblDocString" ] ],
            endDocString: [ [ /[^']+/, "string" ], [ /\\'/, "string" ], [ /'''/, "string", "@popall" ], [ /'/, "string" ] ],
            endDblDocString: [ [ /[^"]+/, "string" ], [ /\\"/, "string" ], [ /"""/, "string", "@popall" ], [ /"/, "string" ] ],
            numbers: [ [ /-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, "number.hex" ], [ /-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, "number" ] ],
            strings: [ [ /'$/, "string.escape", "@popall" ], [ /'/, "string.escape", "@stringBody" ], [ /"$/, "string.escape", "@popall" ], [ /"/, "string.escape", "@dblStringBody" ] ],
            stringBody: [ [ /[^\\']+$/, "string", "@popall" ], [ /[^\\']+/, "string" ], [ /\\./, "string" ], [ /'/, "string.escape", "@popall" ], [ /\\$/, "string" ] ],
            dblStringBody: [ [ /[^\\"]+$/, "string", "@popall" ], [ /[^\\"]+/, "string" ], [ /\\./, "string" ], [ /"/, "string.escape", "@popall" ], [ /\\$/, "string" ] ]
        }
    };
});

export {
    y as __tla,
    l as conf,
    c as language
};