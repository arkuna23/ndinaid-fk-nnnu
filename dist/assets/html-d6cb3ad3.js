import {
    m as x,
    __tla as k
} from "./index-1344e56b.js";

import {
    __tla as g
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let m, l, w = Promise.all([ (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})() ]).then(async () => {
    var o, a, p = Object.defineProperty, c = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyNames, b = Object.prototype.hasOwnProperty, s = (i, e, y, d) => {
        if (e && typeof e == "object" || typeof e == "function") for (let t of u(e)) b.call(i, t) || t === y || p(i, t, {
            get: () => e[t],
            enumerable: !(d = c(e, t)) || d.enumerable
        });
        return i;
    }, n = {};
    s(n, o = x, "default"), a && s(a, o, "default");
    let r;
    r = [ "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr" ], 
    m = {
        wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
        comments: {
            blockComment: [ "\x3c!--", "--\x3e" ]
        },
        brackets: [ [ "\x3c!--", "--\x3e" ], [ "<", ">" ], [ "{", "}" ], [ "(", ")" ] ],
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
            close: '"'
        }, {
            open: "'",
            close: "'"
        } ],
        surroundingPairs: [ {
            open: '"',
            close: '"'
        }, {
            open: "'",
            close: "'"
        }, {
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: "<",
            close: ">"
        } ],
        onEnterRules: [ {
            beforeText: new RegExp(`<(?!(?:${r.join("|")}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {
                indentAction: n.languages.IndentAction.IndentOutdent
            }
        }, {
            beforeText: new RegExp(`<(?!(?:${r.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: n.languages.IndentAction.Indent
            }
        } ],
        folding: {
            markers: {
                start: new RegExp("^\\s*\x3c!--\\s*#region\\b.*--\x3e"),
                end: new RegExp("^\\s*\x3c!--\\s*#endregion\\b.*--\x3e")
            }
        }
    }, l = {
        defaultToken: "",
        tokenPostfix: ".html",
        ignoreCase: !0,
        tokenizer: {
            root: [ [ /<!DOCTYPE/, "metatag", "@doctype" ], [ /<!--/, "comment", "@comment" ], [ /(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/, [ "delimiter", "tag", "", "delimiter" ] ], [ /(<)(script)/, [ "delimiter", {
                token: "tag",
                next: "@script"
            } ] ], [ /(<)(style)/, [ "delimiter", {
                token: "tag",
                next: "@style"
            } ] ], [ /(<)((?:[\w\-]+:)?[\w\-]+)/, [ "delimiter", {
                token: "tag",
                next: "@otherTag"
            } ] ], [ /(<\/)((?:[\w\-]+:)?[\w\-]+)/, [ "delimiter", {
                token: "tag",
                next: "@otherTag"
            } ] ], [ /</, "delimiter" ], [ /[^<]+/ ] ],
            doctype: [ [ /[^>]+/, "metatag.content" ], [ />/, "metatag", "@pop" ] ],
            comment: [ [ /-->/, "comment", "@pop" ], [ /[^-]+/, "comment.content" ], [ /./, "comment.content" ] ],
            otherTag: [ [ /\/?>/, "delimiter", "@pop" ], [ /"([^"]*)"/, "attribute.value" ], [ /'([^']*)'/, "attribute.value" ], [ /[\w\-]+/, "attribute.name" ], [ /=/, "delimiter" ], [ /[ \t\r\n]+/ ] ],
            script: [ [ /type/, "attribute.name", "@scriptAfterType" ], [ /"([^"]*)"/, "attribute.value" ], [ /'([^']*)'/, "attribute.value" ], [ /[\w\-]+/, "attribute.name" ], [ /=/, "delimiter" ], [ />/, {
                token: "delimiter",
                next: "@scriptEmbedded",
                nextEmbedded: "text/javascript"
            } ], [ /[ \t\r\n]+/ ], [ /(<\/)(script\s*)(>)/, [ "delimiter", "tag", {
                token: "delimiter",
                next: "@pop"
            } ] ] ],
            scriptAfterType: [ [ /=/, "delimiter", "@scriptAfterTypeEquals" ], [ />/, {
                token: "delimiter",
                next: "@scriptEmbedded",
                nextEmbedded: "text/javascript"
            } ], [ /[ \t\r\n]+/ ], [ /<\/script\s*>/, {
                token: "@rematch",
                next: "@pop"
            } ] ],
            scriptAfterTypeEquals: [ [ /"module"/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.text/javascript"
            } ], [ /'module'/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.text/javascript"
            } ], [ /"([^"]*)"/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.$1"
            } ], [ /'([^']*)'/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.$1"
            } ], [ />/, {
                token: "delimiter",
                next: "@scriptEmbedded",
                nextEmbedded: "text/javascript"
            } ], [ /[ \t\r\n]+/ ], [ /<\/script\s*>/, {
                token: "@rematch",
                next: "@pop"
            } ] ],
            scriptWithCustomType: [ [ />/, {
                token: "delimiter",
                next: "@scriptEmbedded.$S2",
                nextEmbedded: "$S2"
            } ], [ /"([^"]*)"/, "attribute.value" ], [ /'([^']*)'/, "attribute.value" ], [ /[\w\-]+/, "attribute.name" ], [ /=/, "delimiter" ], [ /[ \t\r\n]+/ ], [ /<\/script\s*>/, {
                token: "@rematch",
                next: "@pop"
            } ] ],
            scriptEmbedded: [ [ /<\/script/, {
                token: "@rematch",
                next: "@pop",
                nextEmbedded: "@pop"
            } ], [ /[^<]+/, "" ] ],
            style: [ [ /type/, "attribute.name", "@styleAfterType" ], [ /"([^"]*)"/, "attribute.value" ], [ /'([^']*)'/, "attribute.value" ], [ /[\w\-]+/, "attribute.name" ], [ /=/, "delimiter" ], [ />/, {
                token: "delimiter",
                next: "@styleEmbedded",
                nextEmbedded: "text/css"
            } ], [ /[ \t\r\n]+/ ], [ /(<\/)(style\s*)(>)/, [ "delimiter", "tag", {
                token: "delimiter",
                next: "@pop"
            } ] ] ],
            styleAfterType: [ [ /=/, "delimiter", "@styleAfterTypeEquals" ], [ />/, {
                token: "delimiter",
                next: "@styleEmbedded",
                nextEmbedded: "text/css"
            } ], [ /[ \t\r\n]+/ ], [ /<\/style\s*>/, {
                token: "@rematch",
                next: "@pop"
            } ] ],
            styleAfterTypeEquals: [ [ /"([^"]*)"/, {
                token: "attribute.value",
                switchTo: "@styleWithCustomType.$1"
            } ], [ /'([^']*)'/, {
                token: "attribute.value",
                switchTo: "@styleWithCustomType.$1"
            } ], [ />/, {
                token: "delimiter",
                next: "@styleEmbedded",
                nextEmbedded: "text/css"
            } ], [ /[ \t\r\n]+/ ], [ /<\/style\s*>/, {
                token: "@rematch",
                next: "@pop"
            } ] ],
            styleWithCustomType: [ [ />/, {
                token: "delimiter",
                next: "@styleEmbedded.$S2",
                nextEmbedded: "$S2"
            } ], [ /"([^"]*)"/, "attribute.value" ], [ /'([^']*)'/, "attribute.value" ], [ /[\w\-]+/, "attribute.name" ], [ /=/, "delimiter" ], [ /[ \t\r\n]+/ ], [ /<\/style\s*>/, {
                token: "@rematch",
                next: "@pop"
            } ] ],
            styleEmbedded: [ [ /<\/style/, {
                token: "@rematch",
                next: "@pop",
                nextEmbedded: "@pop"
            } ], [ /[^<]+/, "" ] ]
        }
    };
});

export {
    w as __tla,
    m as conf,
    l as language
};