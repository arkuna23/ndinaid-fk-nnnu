import {
    m as g,
    __tla as k
} from "./index-1344e56b.js";

import {
    __tla as b
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let m, c, x = Promise.all([ (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return b;
    } catch {}
})() ]).then(async () => {
    var o, i, d = Object.defineProperty, s = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyNames, p = Object.prototype.hasOwnProperty, r = (a, e, f, l) => {
        if (e && typeof e == "object" || typeof e == "function") for (let t of u(e)) p.call(a, t) || t === f || d(a, t, {
            get: () => e[t],
            enumerable: !(l = s(e, t)) || l.enumerable
        });
        return a;
    }, n = {};
    r(n, o = g, "default"), i && r(i, o, "default"), m = {
        comments: {
            blockComment: [ "\x3c!--", "--\x3e" ]
        },
        brackets: [ [ "<", ">" ] ],
        autoClosingPairs: [ {
            open: "<",
            close: ">"
        }, {
            open: "'",
            close: "'"
        }, {
            open: '"',
            close: '"'
        } ],
        surroundingPairs: [ {
            open: "<",
            close: ">"
        }, {
            open: "'",
            close: "'"
        }, {
            open: '"',
            close: '"'
        } ],
        onEnterRules: [ {
            beforeText: new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {
                indentAction: n.languages.IndentAction.IndentOutdent
            }
        }, {
            beforeText: new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            action: {
                indentAction: n.languages.IndentAction.Indent
            }
        } ]
    }, c = {
        defaultToken: "",
        tokenPostfix: ".xml",
        ignoreCase: !0,
        qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
        tokenizer: {
            root: [ [ /[^<&]+/, "" ], {
                include: "@whitespace"
            }, [ /(<)(@qualifiedName)/, [ {
                token: "delimiter"
            }, {
                token: "tag",
                next: "@tag"
            } ] ], [ /(<\/)(@qualifiedName)(\s*)(>)/, [ {
                token: "delimiter"
            }, {
                token: "tag"
            }, "", {
                token: "delimiter"
            } ] ], [ /(<\?)(@qualifiedName)/, [ {
                token: "delimiter"
            }, {
                token: "metatag",
                next: "@tag"
            } ] ], [ /(<\!)(@qualifiedName)/, [ {
                token: "delimiter"
            }, {
                token: "metatag",
                next: "@tag"
            } ] ], [ /<\!\[CDATA\[/, {
                token: "delimiter.cdata",
                next: "@cdata"
            } ], [ /&\w+;/, "string.escape" ] ],
            cdata: [ [ /[^\]]+/, "" ], [ /\]\]>/, {
                token: "delimiter.cdata",
                next: "@pop"
            } ], [ /\]/, "" ] ],
            tag: [ [ /[ \t\r\n]+/, "" ], [ /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/, [ "attribute.name", "", "attribute.value" ] ], [ /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/, [ "attribute.name", "", "attribute.value" ] ], [ /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/, [ "attribute.name", "", "attribute.value" ] ], [ /@qualifiedName/, "attribute.name" ], [ /\?>/, {
                token: "delimiter",
                next: "@pop"
            } ], [ /(\/)(>)/, [ {
                token: "tag"
            }, {
                token: "delimiter",
                next: "@pop"
            } ] ], [ />/, {
                token: "delimiter",
                next: "@pop"
            } ] ],
            whitespace: [ [ /[ \t\r\n]+/, "" ], [ /<!--/, {
                token: "comment",
                next: "@comment"
            } ] ],
            comment: [ [ /[^<\-]+/, "comment.content" ], [ /-->/, {
                token: "comment",
                next: "@pop"
            } ], [ /<!--/, "comment.content.invalid" ], [ /[<\-]/, "comment.content" ] ]
        }
    };
});

export {
    x as __tla,
    m as conf,
    c as language
};