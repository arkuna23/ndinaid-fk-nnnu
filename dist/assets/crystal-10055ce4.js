function l(t, e) {
    return new RegExp((e ? "" : "^") + "(?:" + t.join("|") + ")" + (e ? "$" : "\\b"));
}

function o(t, e, n) {
    return n.tokenize.push(t), t(e, n);
}

var F = /^(?:[-+/%|&^]|\*\*?|[<>]{2})/, _ = /^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/, I = /^(?:\[\][?=]?)/, A = /^(?:\.(?:\.{2})?|->|[?:])/, h = /^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/, k = /^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/, E = l([ "abstract", "alias", "as", "asm", "begin", "break", "case", "class", "def", "do", "else", "elsif", "end", "ensure", "enum", "extend", "for", "fun", "if", "include", "instance_sizeof", "lib", "macro", "module", "next", "of", "out", "pointerof", "private", "protected", "rescue", "return", "require", "select", "sizeof", "struct", "super", "then", "type", "typeof", "uninitialized", "union", "unless", "until", "when", "while", "with", "yield", "__DIR__", "__END_LINE__", "__FILE__", "__LINE__" ]), T = l([ "true", "false", "nil", "self" ]), Z = l([ "def", "fun", "macro", "class", "module", "struct", "lib", "enum", "union", "do", "for" ]), N = l([ "if", "unless", "case", "while", "until", "begin", "then" ]), w = [ "end", "else", "elsif", "rescue", "ensure" ], O = l(w), y = [ "\\)", "\\}", "\\]" ], D = new RegExp("^(?:" + y.join("|") + ")$"), v = {
    def: S,
    fun: S,
    macro: function(t, e) {
        if (t.eatSpace()) return null;
        var n;
        if (n = t.match(h)) {
            if (n == "def") return "keyword";
            t.eat(/[?!]/);
        }
        return e.tokenize.pop(), "def";
    },
    class: f,
    module: f,
    struct: f,
    lib: f,
    enum: f,
    union: f
}, z = {
    "[": "]",
    "{": "}",
    "(": ")",
    "<": ">"
};

function b(t, e) {
    if (t.eatSpace()) return null;
    if (e.lastToken != "\\" && t.match("{%", !1)) return o(s("%", "%"), t, e);
    if (e.lastToken != "\\" && t.match("{{", !1)) return o(s("{", "}"), t, e);
    if (t.peek() == "#") return t.skipToEnd(), "comment";
    var n;
    if (t.match(h)) return t.eat(/[?!]/), n = t.current(), t.eat(":") ? "atom" : e.lastToken == "." ? "property" : E.test(n) ? (Z.test(n) ? n == "fun" && e.blocks.indexOf("lib") >= 0 || n == "def" && e.lastToken == "abstract" || (e.blocks.push(n), 
    e.currentIndent += 1) : e.lastStyle != "operator" && e.lastStyle || !N.test(n) ? n == "end" && (e.blocks.pop(), 
    e.currentIndent -= 1) : (e.blocks.push(n), e.currentIndent += 1), v.hasOwnProperty(n) && e.tokenize.push(v[n]), 
    "keyword") : T.test(n) ? "atom" : "variable";
    if (t.eat("@")) return t.peek() == "[" ? o(m("[", "]", "meta"), t, e) : (t.eat("@"), 
    t.match(h) || t.match(k), "propertyName");
    if (t.match(k)) return "tag";
    if (t.eat(":")) return t.eat('"') ? o(g('"', "atom", !1), t, e) : t.match(h) || t.match(k) || t.match(F) || t.match(_) || t.match(I) ? "atom" : (t.eat(":"), 
    "operator");
    if (t.eat('"')) return o(g('"', "string", !0), t, e);
    if (t.peek() == "%") {
        var r, a = "string", u = !0;
        if (t.match("%r")) a = "string.special", r = t.next(); else if (t.match("%w")) u = !1, 
        r = t.next(); else if (t.match("%q")) u = !1, r = t.next(); else if (r = t.match(/^%([^\w\s=])/)) r = r[1]; else {
            if (t.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/)) return "meta";
            if (t.eat("%")) return "operator";
        }
        return z.hasOwnProperty(r) && (r = z[r]), o(g(r, a, u), t, e);
    }
    return (n = t.match(/^<<-('?)([A-Z]\w*)\1/)) ? o(function(c, x) {
        return function(i, p) {
            if (i.sol() && (i.eatSpace(), i.match(c))) return p.tokenize.pop(), 
            "string";
            for (var d = !1; i.peek(); ) if (d) i.next(), d = !1; else {
                if (i.match("{%", !1)) return p.tokenize.push(s("%", "%")), "string";
                if (i.match("{{", !1)) return p.tokenize.push(s("{", "}")), "string";
                if (x && i.match("#{", !1)) return p.tokenize.push(m("#{", "}", "meta")), 
                "string";
                d = i.next() == "\\" && x;
            }
            return "string";
        };
    }(n[2], !n[1]), t, e) : t.eat("'") ? (t.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/), 
    t.eat("'"), "atom") : t.eat("0") ? (t.eat("x") ? t.match(/^[0-9a-fA-F_]+/) : t.eat("o") ? t.match(/^[0-7_]+/) : t.eat("b") && t.match(/^[01_]+/), 
    "number") : t.eat(/^\d/) ? (t.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/), 
    "number") : t.match(F) ? (t.eat("="), "operator") : t.match(_) || t.match(A) ? "operator" : (n = t.match(/[({[]/, !1)) ? o(m(n = n[0], z[n], null), t, e) : t.eat("\\") ? (t.next(), 
    "meta") : (t.next(), null);
}

function m(t, e, n, r) {
    return function(a, u) {
        if (!r && a.match(t)) return u.tokenize[u.tokenize.length - 1] = m(t, e, n, !0), 
        u.currentIndent += 1, n;
        var c = b(a, u);
        return a.current() === e && (u.tokenize.pop(), u.currentIndent -= 1, c = n), 
        c;
    };
}

function s(t, e, n) {
    return function(r, a) {
        return !n && r.match("{" + t) ? (a.currentIndent += 1, a.tokenize[a.tokenize.length - 1] = s(t, e, !0), 
        "meta") : r.match(e + "}") ? (a.currentIndent -= 1, a.tokenize.pop(), "meta") : b(r, a);
    };
}

function S(t, e) {
    return t.eatSpace() ? null : (t.match(h) ? t.eat(/[!?]/) : t.match(F) || t.match(_) || t.match(I), 
    e.tokenize.pop(), "def");
}

function f(t, e) {
    return t.eatSpace() ? null : (t.match(k), e.tokenize.pop(), "def");
}

function g(t, e, n) {
    return function(r, a) {
        for (var u = !1; r.peek(); ) if (u) r.next(), u = !1; else {
            if (r.match("{%", !1)) return a.tokenize.push(s("%", "%")), e;
            if (r.match("{{", !1)) return a.tokenize.push(s("{", "}")), e;
            if (n && r.match("#{", !1)) return a.tokenize.push(m("#{", "}", "meta")), 
            e;
            var c = r.next();
            if (c == t) return a.tokenize.pop(), e;
            u = n && c == "\\";
        }
        return e;
    };
}

const L = {
    name: "crystal",
    startState: function() {
        return {
            tokenize: [ b ],
            currentIndent: 0,
            lastToken: null,
            lastStyle: null,
            blocks: []
        };
    },
    token: function(t, e) {
        var n = e.tokenize[e.tokenize.length - 1](t, e), r = t.current();
        return n && n != "comment" && (e.lastToken = r, e.lastStyle = n), n;
    },
    indent: function(t, e, n) {
        return e = e.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g, ""), O.test(e) || D.test(e) ? n.unit * (t.currentIndent - 1) : n.unit * t.currentIndent;
    },
    languageData: {
        indentOnInput: l(y.concat(w), !0),
        commentTokens: {
            line: "#"
        }
    }
};

export {
    L as crystal
};