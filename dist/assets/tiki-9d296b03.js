function c(n, t, e) {
    return function(r, o) {
        for (;!r.eol(); ) {
            if (r.match(t)) {
                o.tokenize = u;
                break;
            }
            r.next();
        }
        return e && (o.tokenize = e), n;
    };
}

function b(n) {
    return function(t, e) {
        for (;!t.eol(); ) t.next();
        return e.tokenize = u, n;
    };
}

function u(n, t) {
    function e(f) {
        return t.tokenize = f, f(n, t);
    }
    var r = n.sol(), o = n.next();
    switch (o) {
      case "{":
        return n.eat("/"), n.eatSpace(), n.eatWhile(/[^\s\u00a0=\"\'\/?(}]/), t.tokenize = m, 
        "tag";

      case "_":
        if (n.eat("_")) return e(c("strong", "__", u));
        break;

      case "'":
        if (n.eat("'")) return e(c("em", "''", u));
        break;

      case "(":
        if (n.eat("(")) return e(c("link", "))", u));
        break;

      case "[":
        return e(c("url", "]", u));

      case "|":
        if (n.eat("|")) return e(c("comment", "||"));
        break;

      case "-":
        if (n.eat("=")) return e(c("header string", "=-", u));
        if (n.eat("-")) return e(c("error tw-deleted", "--", u));
        break;

      case "=":
        if (n.match("==")) return e(c("tw-underline", "===", u));
        break;

      case ":":
        if (n.eat(":")) return e(c("comment", "::"));
        break;

      case "^":
        return e(c("tw-box", "^"));

      case "~":
        if (n.match("np~")) return e(c("meta", "~/np~"));
    }
    if (r) switch (o) {
      case "!":
        return n.match("!!!!!") || n.match("!!!!") || n.match("!!!") || n.match("!!"), 
        e(b("header string"));

      case "*":
      case "#":
      case "+":
        return e(b("tw-listitem bracket"));
    }
    return null;
}

var g, k, i, s;

function m(n, t) {
    var e, r = n.next(), o = n.peek();
    return r == "}" ? (t.tokenize = u, "tag") : r == "(" || r == ")" ? "bracket" : r == "=" ? (k = "equals", 
    o == ">" && (n.next(), o = n.peek()), /[\'\"]/.test(o) || (t.tokenize = function(f, d) {
        for (;!f.eol(); ) {
            var x = f.next(), w = f.peek();
            if (x == " " || x == "," || /[ )}]/.test(w)) {
                d.tokenize = m;
                break;
            }
        }
        return "string";
    }), "operator") : /[\'\"]/.test(r) ? (t.tokenize = (e = r, function(f, d) {
        for (;!f.eol(); ) if (f.next() == e) {
            d.tokenize = m;
            break;
        }
        return "string";
    }), t.tokenize(n, t)) : (n.eatWhile(/[^\s\u00a0=\"\'\/?]/), "keyword");
}

function l() {
    for (var n = arguments.length - 1; n >= 0; n--) i.cc.push(arguments[n]);
}

function a() {
    return l.apply(null, arguments), !0;
}

function h(n, t) {
    var e = i.context && i.context.noIndent;
    i.context = {
        prev: i.context,
        pluginName: n,
        indent: i.indented,
        startOfLine: t,
        noIndent: e
    };
}

function v() {
    i.context && (i.context = i.context.prev);
}

function L(n) {
    if (n == "openPlugin") return i.pluginName = g, a(p, (e = i.startOfLine, function(r) {
        return r == "selfclosePlugin" || r == "endPlugin" || r == "endPlugin" && h(i.pluginName, e), 
        a();
    }));
    if (n == "closePlugin") {
        var t = !1;
        return i.context ? (t = i.context.pluginName != g, v()) : t = !0, t && (s = "error"), 
        a(function(r) {
            return function(o) {
                return r && (s = "error"), o == "endPlugin" ? a() : l();
            };
        }(t));
    }
    return n == "string" && (i.context && i.context.name == "!cdata" || h("!cdata"), 
    i.tokenize == u && v()), a();
    var e;
}

function p(n) {
    return n == "keyword" ? (s = "attribute", a(p)) : n == "equals" ? a(O, p) : l();
}

function O(n) {
    return n == "keyword" ? (s = "string", a()) : n == "string" ? a(z) : l();
}

function z(n) {
    return n == "string" ? a(z) : l();
}

const P = {
    name: "tiki",
    startState: function() {
        return {
            tokenize: u,
            cc: [],
            indented: 0,
            startOfLine: !0,
            pluginName: null,
            context: null
        };
    },
    token: function(n, t) {
        if (n.sol() && (t.startOfLine = !0, t.indented = n.indentation()), n.eatSpace()) return null;
        s = k = g = null;
        var e = t.tokenize(n, t);
        if ((e || k) && e != "comment") for (i = t; !(t.cc.pop() || L)(k || e); );
        return t.startOfLine = !1, s || e;
    },
    indent: function(n, t, e) {
        var r = n.context;
        if (r && r.noIndent) return 0;
        for (r && /^{\//.test(t) && (r = r.prev); r && !r.startOfLine; ) r = r.prev;
        return r ? r.indent + e.unit : 0;
    }
};

export {
    P as tiki
};