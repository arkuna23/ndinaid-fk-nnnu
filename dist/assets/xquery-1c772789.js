var v = function() {
    function e(m) {
        return {
            type: m,
            style: "keyword"
        };
    }
    for (var t = e("operator"), n = {
        type: "atom",
        style: "atom"
    }, a = {
        type: "axis_specifier",
        style: "qualifier"
    }, i = {
        ",": {
            type: "punctuation",
            style: null
        }
    }, c = [ "after", "all", "allowing", "ancestor", "ancestor-or-self", "any", "array", "as", "ascending", "at", "attribute", "base-uri", "before", "boundary-space", "by", "case", "cast", "castable", "catch", "child", "collation", "comment", "construction", "contains", "content", "context", "copy", "copy-namespaces", "count", "decimal-format", "declare", "default", "delete", "descendant", "descendant-or-self", "descending", "diacritics", "different", "distance", "document", "document-node", "element", "else", "empty", "empty-sequence", "encoding", "end", "entire", "every", "exactly", "except", "external", "first", "following", "following-sibling", "for", "from", "ftand", "ftnot", "ft-option", "ftor", "function", "fuzzy", "greatest", "group", "if", "import", "in", "inherit", "insensitive", "insert", "instance", "intersect", "into", "invoke", "is", "item", "language", "last", "lax", "least", "let", "levels", "lowercase", "map", "modify", "module", "most", "namespace", "next", "no", "node", "nodes", "no-inherit", "no-preserve", "not", "occurs", "of", "only", "option", "order", "ordered", "ordering", "paragraph", "paragraphs", "parent", "phrase", "preceding", "preceding-sibling", "preserve", "previous", "processing-instruction", "relationship", "rename", "replace", "return", "revalidation", "same", "satisfies", "schema", "schema-attribute", "schema-element", "score", "self", "sensitive", "sentence", "sentences", "sequence", "skip", "sliding", "some", "stable", "start", "stemming", "stop", "strict", "strip", "switch", "text", "then", "thesaurus", "times", "to", "transform", "treat", "try", "tumbling", "type", "typeswitch", "union", "unordered", "update", "updating", "uppercase", "using", "validate", "value", "variable", "version", "weight", "when", "where", "wildcards", "window", "with", "without", "word", "words", "xquery" ], r = 0, u = c.length; r < u; r++) i[c[r]] = e(c[r]);
    var l = [ "xs:anyAtomicType", "xs:anySimpleType", "xs:anyType", "xs:anyURI", "xs:base64Binary", "xs:boolean", "xs:byte", "xs:date", "xs:dateTime", "xs:dateTimeStamp", "xs:dayTimeDuration", "xs:decimal", "xs:double", "xs:duration", "xs:ENTITIES", "xs:ENTITY", "xs:float", "xs:gDay", "xs:gMonth", "xs:gMonthDay", "xs:gYear", "xs:gYearMonth", "xs:hexBinary", "xs:ID", "xs:IDREF", "xs:IDREFS", "xs:int", "xs:integer", "xs:item", "xs:java", "xs:language", "xs:long", "xs:Name", "xs:NCName", "xs:negativeInteger", "xs:NMTOKEN", "xs:NMTOKENS", "xs:nonNegativeInteger", "xs:nonPositiveInteger", "xs:normalizedString", "xs:NOTATION", "xs:numeric", "xs:positiveInteger", "xs:precisionDecimal", "xs:QName", "xs:short", "xs:string", "xs:time", "xs:token", "xs:unsignedByte", "xs:unsignedInt", "xs:unsignedLong", "xs:unsignedShort", "xs:untyped", "xs:untypedAtomic", "xs:yearMonthDuration" ];
    for (r = 0, u = l.length; r < u; r++) i[l[r]] = n;
    var y = [ "eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-" ];
    for (r = 0, u = y.length; r < u; r++) i[y[r]] = t;
    var g = [ "self::", "attribute::", "child::", "descendant::", "descendant-or-self::", "parent::", "ancestor::", "ancestor-or-self::", "following::", "preceding::", "following-sibling::", "preceding-sibling::" ];
    for (r = 0, u = g.length; r < u; r++) i[g[r]] = a;
    return i;
}();

function d(e, t, n) {
    return t.tokenize = n, n(e, t);
}

function s(e, t) {
    var n = e.next(), a = !1, i = function(m) {
        return m.current() === '"' ? m.match(/^[^\"]+\"\:/, !1) : m.current() === "'" && m.match(/^[^\"]+\'\:/, !1);
    }(e);
    if (n == "<") {
        if (e.match("!--", !0)) return d(e, t, S);
        if (e.match("![CDATA", !1)) return t.tokenize = D, "tag";
        if (e.match("?", !1)) return d(e, t, E);
        var c = e.eat("/");
        e.eatSpace();
        for (var r, u = ""; r = e.eat(/[^\s\u00a0=<>\"\'\/?]/); ) u += r;
        return d(e, t, function(m, T) {
            return function(h, f) {
                return h.eatSpace(), T && h.eat(">") ? (o(f), f.tokenize = s, "tag") : (h.eat("/") || p(f, {
                    type: "tag",
                    name: m,
                    tokenize: s
                }), h.eat(">") ? (f.tokenize = s, "tag") : (f.tokenize = w, "tag"));
            };
        }(u, c));
    }
    if (n == "{") return p(t, {
        type: "codeblock"
    }), null;
    if (n == "}") return o(t), null;
    if (z(t)) return n == ">" ? "tag" : n == "/" && e.eat(">") ? (o(t), "tag") : "variable";
    if (/\d/.test(n)) return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/), "atom";
    if (n === "(" && e.eat(":")) return p(t, {
        type: "comment"
    }), d(e, t, I);
    if (i || n !== '"' && n !== "'") {
        if (n === "$") return d(e, t, N);
        if (n === ":" && e.eat("=")) return "keyword";
        if (n === "(") return p(t, {
            type: "paren"
        }), null;
        if (n === ")") return o(t), null;
        if (n === "[") return p(t, {
            type: "bracket"
        }), null;
        if (n === "]") return o(t), null;
        var l = v.propertyIsEnumerable(n) && v[n];
        if (i && n === '"') for (;e.next() !== '"'; );
        if (i && n === "'") for (;e.next() !== "'"; );
        l || e.eatWhile(/[\w\$_-]/);
        var y = e.eat(":");
        !e.eat(":") && y && e.eatWhile(/[\w\$_-]/), e.match(/^[ \t]*\(/, !1) && (a = !0);
        var g = e.current();
        return l = v.propertyIsEnumerable(g) && v[g], a && !l && (l = {
            type: "function_call",
            style: "def"
        }), function(m) {
            return k(m, "xmlconstructor");
        }(t) ? (o(t), "variable") : (g != "element" && g != "attribute" && l.type != "axis_specifier" || p(t, {
            type: "xmlconstructor"
        }), l ? l.style : "variable");
    }
    return d(e, t, b(n));
}

function I(e, t) {
    for (var n, a = !1, i = !1, c = 0; n = e.next(); ) {
        if (n == ")" && a) {
            if (!(c > 0)) {
                o(t);
                break;
            }
            c--;
        } else n == ":" && i && c++;
        a = n == ":", i = n == "(";
    }
    return "comment";
}

function b(e, t) {
    return function(n, a) {
        var i;
        if (function(c) {
            return k(c, "string");
        }(a) && n.current() == e) return o(a), t && (a.tokenize = t), "string";
        if (p(a, {
            type: "string",
            name: e,
            tokenize: b(e, t)
        }), n.match("{", !1) && x(a)) return a.tokenize = s, "string";
        for (;i = n.next(); ) {
            if (i == e) {
                o(a), t && (a.tokenize = t);
                break;
            }
            if (n.match("{", !1) && x(a)) return a.tokenize = s, "string";
        }
        return "string";
    };
}

function N(e, t) {
    var n = /[\w\$_-]/;
    if (e.eat('"')) {
        for (;e.next() !== '"'; );
        e.eat(":");
    } else e.eatWhile(n), e.match(":=", !1) || e.eat(":");
    return e.eatWhile(n), t.tokenize = s, "variable";
}

function w(e, t) {
    var n = e.next();
    return n == "/" && e.eat(">") ? (x(t) && o(t), z(t) && o(t), "tag") : n == ">" ? (x(t) && o(t), 
    "tag") : n == "=" ? null : n == '"' || n == "'" ? d(e, t, b(n, w)) : (x(t) || p(t, {
        type: "attribute",
        tokenize: w
    }), e.eat(/[a-zA-Z_:]/), e.eatWhile(/[-a-zA-Z0-9_:.]/), e.eatSpace(), (e.match(">", !1) || e.match("/", !1)) && (o(t), 
    t.tokenize = s), "attribute");
}

function S(e, t) {
    for (var n; n = e.next(); ) if (n == "-" && e.match("->", !0)) return t.tokenize = s, 
    "comment";
}

function D(e, t) {
    for (var n; n = e.next(); ) if (n == "]" && e.match("]", !0)) return t.tokenize = s, 
    "comment";
}

function E(e, t) {
    for (var n; n = e.next(); ) if (n == "?" && e.match(">", !0)) return t.tokenize = s, 
    "processingInstruction";
}

function z(e) {
    return k(e, "tag");
}

function x(e) {
    return k(e, "attribute");
}

function k(e, t) {
    return e.stack.length && e.stack[e.stack.length - 1].type == t;
}

function p(e, t) {
    e.stack.push(t);
}

function o(e) {
    e.stack.pop();
    var t = e.stack.length && e.stack[e.stack.length - 1].tokenize;
    e.tokenize = t || s;
}

const _ = {
    name: "xquery",
    startState: function() {
        return {
            tokenize: s,
            cc: [],
            stack: []
        };
    },
    token: function(e, t) {
        return e.eatSpace() ? null : t.tokenize(e, t);
    },
    languageData: {
        commentTokens: {
            block: {
                open: "(:",
                close: ":)"
            }
        }
    }
};

export {
    _ as xQuery
};