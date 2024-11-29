import {
    m as b,
    __tla as g
} from "./index-1344e56b.js";

import {
    __tla as h
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let c, a, u = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return h;
    } catch {}
})() ]).then(async () => {
    var i, s, p = Object.defineProperty, l = Object.getOwnPropertyDescriptor, k = Object.getOwnPropertyNames, m = Object.prototype.hasOwnProperty, r = (o, t, x, d) => {
        if (t && typeof t == "object" || typeof t == "function") for (let n of k(t)) m.call(o, n) || n === x || p(o, n, {
            get: () => t[n],
            enumerable: !(d = l(t, n)) || d.enumerable
        });
        return o;
    }, e = {};
    r(e, i = b, "default"), s && r(s, i, "default"), c = {
        comments: {
            blockComment: [ "{/*", "*/}" ]
        },
        brackets: [ [ "{", "}" ] ],
        autoClosingPairs: [ {
            open: '"',
            close: '"'
        }, {
            open: "'",
            close: "'"
        }, {
            open: "“",
            close: "”"
        }, {
            open: "‘",
            close: "’"
        }, {
            open: "`",
            close: "`"
        }, {
            open: "{",
            close: "}"
        }, {
            open: "(",
            close: ")"
        }, {
            open: "_",
            close: "_"
        }, {
            open: "**",
            close: "**"
        }, {
            open: "<",
            close: ">"
        } ],
        onEnterRules: [ {
            beforeText: /^\s*- .+/,
            action: {
                indentAction: e.languages.IndentAction.None,
                appendText: "- "
            }
        }, {
            beforeText: /^\s*\+ .+/,
            action: {
                indentAction: e.languages.IndentAction.None,
                appendText: "+ "
            }
        }, {
            beforeText: /^\s*\* .+/,
            action: {
                indentAction: e.languages.IndentAction.None,
                appendText: "* "
            }
        }, {
            beforeText: /^> /,
            action: {
                indentAction: e.languages.IndentAction.None,
                appendText: "> "
            }
        }, {
            beforeText: /<\w+/,
            action: {
                indentAction: e.languages.IndentAction.Indent
            }
        }, {
            beforeText: /\s+>\s*$/,
            action: {
                indentAction: e.languages.IndentAction.Indent
            }
        }, {
            beforeText: /<\/\w+>/,
            action: {
                indentAction: e.languages.IndentAction.Outdent
            }
        }, ...Array.from({
            length: 100
        }, (o, t) => ({
            beforeText: new RegExp(`^${t}\\. .+`),
            action: {
                indentAction: e.languages.IndentAction.None,
                appendText: `${t + 1}. `
            }
        })) ]
    }, a = {
        defaultToken: "",
        tokenPostfix: ".mdx",
        control: /[!#()*+.[\\\]_`{}\-]/,
        escapes: /\\@control/,
        tokenizer: {
            root: [ [ /^---$/, {
                token: "meta.content",
                next: "@frontmatter",
                nextEmbedded: "yaml"
            } ], [ /^\s*import/, {
                token: "keyword",
                next: "@import",
                nextEmbedded: "js"
            } ], [ /^\s*export/, {
                token: "keyword",
                next: "@export",
                nextEmbedded: "js"
            } ], [ /<\w+/, {
                token: "type.identifier",
                next: "@jsx"
            } ], [ /<\/?\w+>/, "type.identifier" ], [ /^(\s*)(>*\s*)(#{1,6}\s)/, [ {
                token: "white"
            }, {
                token: "comment"
            }, {
                token: "keyword",
                next: "@header"
            } ] ], [ /^(\s*)(>*\s*)([*+-])(\s+)/, [ "white", "comment", "keyword", "white" ] ], [ /^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/, [ "white", "comment", "number", "white" ] ], [ /^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/, [ "white", "comment", "number", "white" ] ], [ /^(\s*)(>*\s*)(-{3,}|\*{3,}|_{3,})$/, [ "white", "comment", "keyword" ] ], [ /`{3,}(\s.*)?$/, {
                token: "string",
                next: "@codeblock_backtick"
            } ], [ /~{3,}(\s.*)?$/, {
                token: "string",
                next: "@codeblock_tilde"
            } ], [ /`{3,}(\S+).*$/, {
                token: "string",
                next: "@codeblock_highlight_backtick",
                nextEmbedded: "$1"
            } ], [ /~{3,}(\S+).*$/, {
                token: "string",
                next: "@codeblock_highlight_tilde",
                nextEmbedded: "$1"
            } ], [ /^(\s*)(-{4,})$/, [ "white", "comment" ] ], [ /^(\s*)(>+)/, [ "white", "comment" ] ], {
                include: "content"
            } ],
            content: [ [ /(\[)(.+)(]\()(.+)(\s+".*")(\))/, [ "", "string.link", "", "type.identifier", "string.link", "" ] ], [ /(\[)(.+)(]\()(.+)(\))/, [ "", "type.identifier", "", "string.link", "" ] ], [ /(\[)(.+)(]\[)(.+)(])/, [ "", "type.identifier", "", "type.identifier", "" ] ], [ /(\[)(.+)(]:\s+)(\S*)/, [ "", "type.identifier", "", "string.link" ] ], [ /(\[)(.+)(])/, [ "", "type.identifier", "" ] ], [ /`.*`/, "variable.source" ], [ /_/, {
                token: "emphasis",
                next: "@emphasis_underscore"
            } ], [ /\*(?!\*)/, {
                token: "emphasis",
                next: "@emphasis_asterisk"
            } ], [ /\*\*/, {
                token: "strong",
                next: "@strong"
            } ], [ /{/, {
                token: "delimiter.bracket",
                next: "@expression",
                nextEmbedded: "js"
            } ] ],
            import: [ [ /'\s*(;|$)/, {
                token: "string",
                next: "@pop",
                nextEmbedded: "@pop"
            } ] ],
            expression: [ [ /{/, {
                token: "delimiter.bracket",
                next: "@expression"
            } ], [ /}/, {
                token: "delimiter.bracket",
                next: "@pop",
                nextEmbedded: "@pop"
            } ] ],
            export: [ [ /^\s*$/, {
                token: "delimiter.bracket",
                next: "@pop",
                nextEmbedded: "@pop"
            } ] ],
            jsx: [ [ /\s+/, "" ], [ /(\w+)(=)("(?:[^"\\]|\\.)*")/, [ "attribute.name", "operator", "string" ] ], [ /(\w+)(=)('(?:[^'\\]|\\.)*')/, [ "attribute.name", "operator", "string" ] ], [ /(\w+(?=\s|>|={|$))/, [ "attribute.name" ] ], [ /={/, {
                token: "delimiter.bracket",
                next: "@expression",
                nextEmbedded: "js"
            } ], [ />/, {
                token: "type.identifier",
                next: "@pop"
            } ] ],
            header: [ [ /.$/, {
                token: "keyword",
                next: "@pop"
            } ], {
                include: "content"
            }, [ /./, {
                token: "keyword"
            } ] ],
            strong: [ [ /\*\*/, {
                token: "strong",
                next: "@pop"
            } ], {
                include: "content"
            }, [ /./, {
                token: "strong"
            } ] ],
            emphasis_underscore: [ [ /_/, {
                token: "emphasis",
                next: "@pop"
            } ], {
                include: "content"
            }, [ /./, {
                token: "emphasis"
            } ] ],
            emphasis_asterisk: [ [ /\*(?!\*)/, {
                token: "emphasis",
                next: "@pop"
            } ], {
                include: "content"
            }, [ /./, {
                token: "emphasis"
            } ] ],
            frontmatter: [ [ /^---$/, {
                token: "meta.content",
                nextEmbedded: "@pop",
                next: "@pop"
            } ] ],
            codeblock_highlight_backtick: [ [ /\s*`{3,}\s*$/, {
                token: "string",
                next: "@pop",
                nextEmbedded: "@pop"
            } ], [ /.*$/, "variable.source" ] ],
            codeblock_highlight_tilde: [ [ /\s*~{3,}\s*$/, {
                token: "string",
                next: "@pop",
                nextEmbedded: "@pop"
            } ], [ /.*$/, "variable.source" ] ],
            codeblock_backtick: [ [ /\s*`{3,}\s*$/, {
                token: "string",
                next: "@pop"
            } ], [ /.*$/, "variable.source" ] ],
            codeblock_tilde: [ [ /\s*~{3,}\s*$/, {
                token: "string",
                next: "@pop"
            } ], [ /.*$/, "variable.source" ] ]
        }
    };
});

export {
    u as __tla,
    c as conf,
    a as language
};