function f(t) {
    for (var e = {}, n = t.split(" "), r = 0; r < n.length; ++r) e[n[r]] = !0;
    return e;
}

var i, g = f("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"), b = f("catch class def do else enum finally for if interface switch trait try while"), w = f("return break continue"), z = f("null true false this");

function m(t, e) {
    var n = t.next();
    if (n == '"' || n == "'") return h(n, t, e);
    if (/[\[\]{}\(\),;\:\.]/.test(n)) return i = n, null;
    if (/\d/.test(n)) return t.eatWhile(/[\w\.]/), t.eat(/eE/) && (t.eat(/\+\-/), 
    t.eatWhile(/\d/)), "number";
    if (n == "/") {
        if (t.eat("*")) return e.tokenize.push(y), y(t, e);
        if (t.eat("/")) return t.skipToEnd(), "comment";
        if (k(e.lastToken, !1)) return h(n, t, e);
    }
    if (n == "-" && t.eat(">")) return i = "->", null;
    if (/[+\-*&%=<>!?|\/~]/.test(n)) return t.eatWhile(/[+\-*&%=<>|~]/), "operator";
    if (t.eatWhile(/[\w\$_]/), n == "@") return t.eatWhile(/[\w\$_\.]/), "meta";
    if (e.lastToken == ".") return "property";
    if (t.eat(":")) return i = "proplabel", "property";
    var r = t.current();
    return z.propertyIsEnumerable(r) ? "atom" : g.propertyIsEnumerable(r) ? (b.propertyIsEnumerable(r) ? i = "newstatement" : w.propertyIsEnumerable(r) && (i = "standalone"), 
    "keyword") : "variable";
}

function h(t, e, n) {
    var r = !1;
    if (t != "/" && e.eat(t)) {
        if (!e.eat(t)) return "string";
        r = !0;
    }
    function a(o, p) {
        for (var s, u = !1, d = !r; (s = o.next()) != null; ) {
            if (s == t && !u) {
                if (!r) break;
                if (o.match(t + t)) {
                    d = !0;
                    break;
                }
            }
            if (t == '"' && s == "$" && !u) {
                if (o.eat("{")) return p.tokenize.push(x()), "string";
                if (o.match(/^\w/, !1)) return p.tokenize.push(T), "string";
            }
            u = !u && s == "\\";
        }
        return d && p.tokenize.pop(), "string";
    }
    return n.tokenize.push(a), a(e, n);
}

function x() {
    var t = 1;
    function e(n, r) {
        if (n.peek() == "}") {
            if (--t == 0) return r.tokenize.pop(), r.tokenize[r.tokenize.length - 1](n, r);
        } else n.peek() == "{" && t++;
        return m(n, r);
    }
    return e.isBase = !0, e;
}

function T(t, e) {
    var n = t.match(/^(\.|[\w\$_]+)/);
    return n ? n[0] == "." ? null : "variable" : (e.tokenize.pop(), e.tokenize[e.tokenize.length - 1](t, e));
}

function y(t, e) {
    for (var n, r = !1; n = t.next(); ) {
        if (n == "/" && r) {
            e.tokenize.pop();
            break;
        }
        r = n == "*";
    }
    return "comment";
}

function k(t, e) {
    return !t || t == "operator" || t == "->" || /[\.\[\{\(,;:]/.test(t) || t == "newstatement" || t == "keyword" || t == "proplabel" || t == "standalone" && !e;
}

function v(t, e, n, r, a) {
    this.indented = t, this.column = e, this.type = n, this.align = r, this.prev = a;
}

function c(t, e, n) {
    return t.context = new v(t.indented, e, n, null, t.context);
}

function l(t) {
    var e = t.context.type;
    return e != ")" && e != "]" && e != "}" || (t.indented = t.context.indented), 
    t.context = t.context.prev;
}

m.isBase = !0;

const E = {
    name: "groovy",
    startState: function(t) {
        return {
            tokenize: [ m ],
            context: new v(-t, 0, "top", !1),
            indented: 0,
            startOfLine: !0,
            lastToken: null
        };
    },
    token: function(t, e) {
        var n = e.context;
        if (t.sol() && (n.align == null && (n.align = !1), e.indented = t.indentation(), 
        e.startOfLine = !0, n.type != "statement" || k(e.lastToken, !0) || (l(e), 
        n = e.context)), t.eatSpace()) return null;
        i = null;
        var r = e.tokenize[e.tokenize.length - 1](t, e);
        if (r == "comment") return r;
        if (n.align == null && (n.align = !0), i != ";" && i != ":" || n.type != "statement") if (i == "->" && n.type == "statement" && n.prev.type == "}") l(e), 
        e.context.align = !1; else if (i == "{") c(e, t.column(), "}"); else if (i == "[") c(e, t.column(), "]"); else if (i == "(") c(e, t.column(), ")"); else if (i == "}") {
            for (;n.type == "statement"; ) n = l(e);
            for (n.type == "}" && (n = l(e)); n.type == "statement"; ) n = l(e);
        } else i == n.type ? l(e) : (n.type == "}" || n.type == "top" || n.type == "statement" && i == "newstatement") && c(e, t.column(), "statement"); else l(e);
        return e.startOfLine = !1, e.lastToken = i || r, r;
    },
    indent: function(t, e, n) {
        if (!t.tokenize[t.tokenize.length - 1].isBase) return null;
        var r = e && e.charAt(0), a = t.context;
        a.type != "statement" || k(t.lastToken, !0) || (a = a.prev);
        var o = r == a.type;
        return a.type == "statement" ? a.indented + (r == "{" ? 0 : n.unit) : a.align ? a.column + (o ? 0 : 1) : a.indented + (o ? 0 : n.unit);
    },
    languageData: {
        indentOnInput: /^\s*[{}]$/,
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        },
        closeBrackets: {
            brackets: [ "(", "[", "{", "'", '"', "'''", '"""' ]
        }
    }
};

export {
    E as groovy
};