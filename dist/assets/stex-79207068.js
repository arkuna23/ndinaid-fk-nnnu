function b(p) {
    function h(t, e) {
        t.cmdState.push(e);
    }
    function d(t) {
        return t.cmdState.length > 0 ? t.cmdState[t.cmdState.length - 1] : null;
    }
    function a(t, e, n) {
        return function() {
            this.name = t, this.bracketNo = 0, this.style = e, this.styles = n, 
            this.argument = null, this.styleIdentifier = function() {
                return this.styles[this.bracketNo - 1] || null;
            }, this.openBracket = function() {
                return this.bracketNo++, "bracket";
            }, this.closeBracket = function() {};
        };
    }
    var r = {};
    function o(t, e) {
        t.f = e;
    }
    function f(t, e) {
        var n;
        if (t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)) {
            var i = t.current().slice(1);
            return h(e, n = new (n = r.hasOwnProperty(i) ? r[i] : r.DEFAULT)()), 
            o(e, g), n.style;
        }
        if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/\\]/)) return "tag";
        if (t.match("\\[")) return o(e, function(m, u) {
            return s(m, u, "\\]");
        }), "keyword";
        if (t.match("\\(")) return o(e, function(m, u) {
            return s(m, u, "\\)");
        }), "keyword";
        if (t.match("$$")) return o(e, function(m, u) {
            return s(m, u, "$$");
        }), "keyword";
        if (t.match("$")) return o(e, function(m, u) {
            return s(m, u, "$");
        }), "keyword";
        var c = t.next();
        return c == "%" ? (t.skipToEnd(), "comment") : c == "}" || c == "]" ? (n = d(e)) ? (n.closeBracket(c), 
        o(e, g), "bracket") : "error" : c == "{" || c == "[" ? (h(e, n = new (n = r.DEFAULT)()), 
        "bracket") : /\d/.test(c) ? (t.eatWhile(/[\w.%]/), "atom") : (t.eatWhile(/[\w\-_]/), 
        n = function(m) {
            for (var u = m.cmdState, l = u.length - 1; l >= 0; l--) {
                var k = u[l];
                if (k.name != "DEFAULT") return k;
            }
            return {
                styleIdentifier: function() {
                    return null;
                }
            };
        }(e), n.name == "begin" && (n.argument = t.current()), n.styleIdentifier());
    }
    function s(t, e, n) {
        if (t.eatSpace()) return null;
        if (n && t.match(n)) return o(e, f), "keyword";
        if (t.match(/^\\[a-zA-Z@]+/)) return "tag";
        if (t.match(/^[a-zA-Z]+/)) return "variableName.special";
        if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/]/) || t.match(/^[\^_&]/)) return "tag";
        if (t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) return null;
        if (t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/)) return "number";
        var i = t.next();
        return i == "{" || i == "}" || i == "[" || i == "]" || i == "(" || i == ")" ? "bracket" : i == "%" ? (t.skipToEnd(), 
        "comment") : "error";
    }
    function g(t, e) {
        var n = t.peek();
        return n == "{" || n == "[" ? (d(e).openBracket(n), t.eat(n), o(e, f), "bracket") : /[ \t\r]/.test(n) ? (t.eat(n), 
        null) : (o(e, f), function(i) {
            var c = i.cmdState.pop();
            c && c.closeBracket();
        }(e), f(t, e));
    }
    return r.importmodule = a("importmodule", "tag", [ "string", "builtin" ]), r.documentclass = a("documentclass", "tag", [ "", "atom" ]), 
    r.usepackage = a("usepackage", "tag", [ "atom" ]), r.begin = a("begin", "tag", [ "atom" ]), 
    r.end = a("end", "tag", [ "atom" ]), r.label = a("label", "tag", [ "atom" ]), 
    r.ref = a("ref", "tag", [ "atom" ]), r.eqref = a("eqref", "tag", [ "atom" ]), 
    r.cite = a("cite", "tag", [ "atom" ]), r.bibitem = a("bibitem", "tag", [ "atom" ]), 
    r.Bibitem = a("Bibitem", "tag", [ "atom" ]), r.RBibitem = a("RBibitem", "tag", [ "atom" ]), 
    r.DEFAULT = function() {
        this.name = "DEFAULT", this.style = "tag", this.styleIdentifier = this.openBracket = this.closeBracket = function() {};
    }, {
        name: "stex",
        startState: function() {
            return {
                cmdState: [],
                f: p ? function(t, e) {
                    return s(t, e);
                } : f
            };
        },
        copyState: function(t) {
            return {
                cmdState: t.cmdState.slice(),
                f: t.f
            };
        },
        token: function(t, e) {
            return e.f(t, e);
        },
        blankLine: function(t) {
            t.f = f, t.cmdState.length = 0;
        },
        languageData: {
            commentTokens: {
                line: "%"
            }
        }
    };
}

const y = b(!1), S = b(!0);

export {
    y as stex,
    S as stexMath
};