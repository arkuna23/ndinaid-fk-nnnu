var l = function(e) {
    for (var n = {}, r = e.split(" "), o = 0; o < r.length; ++o) n[r[o]] = !0;
    return n;
}("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"), t = "(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)", i = new RegExp("(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)"), s = new RegExp(t), p = new RegExp(t + "?_" + t), m = new RegExp(t + "\\s*\\(");

function c(e, n) {
    var r;
    if ((r = e.next()) === '"') return n.tokenize = f, n.tokenize(e, n);
    if (r === "/") {
        if (e.eat("*")) return n.tokenize = k, n.tokenize(e, n);
        if (e.eat("/")) return e.skipToEnd(), "comment";
    }
    e.backUp(1);
    var o = e.match(/^(\w+)\s*\(/, !1);
    o !== null && l.hasOwnProperty(o[1]) && n.scopes.push("bodied");
    var a = u(n);
    if (a === "bodied" && r === "[" && n.scopes.pop(), r !== "[" && r !== "{" && r !== "(" || n.scopes.push(r), 
    ((a = u(n)) === "[" && r === "]" || a === "{" && r === "}" || a === "(" && r === ")") && n.scopes.pop(), 
    r === ";") for (;a === "bodied"; ) n.scopes.pop(), a = u(n);
    return e.match(/\d+ *#/, !0, !1) ? "qualifier" : e.match(i, !0, !1) ? "number" : e.match(p, !0, !1) ? "variableName.special" : e.match(/(?:\[|\]|{|}|\(|\))/, !0, !1) ? "bracket" : e.match(m, !0, !1) ? (e.backUp(1), 
    "variableName.function") : e.match(s, !0, !1) ? "variable" : e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/, !0, !1) ? "operator" : "error";
}

function f(e, n) {
    for (var r, o = !1, a = !1; (r = e.next()) != null; ) {
        if (r === '"' && !a) {
            o = !0;
            break;
        }
        a = !a && r === "\\";
    }
    return o && !a && (n.tokenize = c), "string";
}

function k(e, n) {
    for (var r, o; (o = e.next()) != null; ) {
        if (r === "*" && o === "/") {
            n.tokenize = c;
            break;
        }
        r = o;
    }
    return "comment";
}

function u(e) {
    var n = null;
    return e.scopes.length > 0 && (n = e.scopes[e.scopes.length - 1]), n;
}

const h = {
    name: "yacas",
    startState: function() {
        return {
            tokenize: c,
            scopes: []
        };
    },
    token: function(e, n) {
        return e.eatSpace() ? null : n.tokenize(e, n);
    },
    indent: function(e, n, r) {
        if (e.tokenize !== c && e.tokenize !== null) return null;
        var o = 0;
        return n !== "]" && n !== "];" && n !== "}" && n !== "};" && n !== ");" || (o = -1), 
        (e.scopes.length + o) * r.unit;
    },
    languageData: {
        electricInput: /[{}\[\]()\;]/,
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        }
    }
};

export {
    h as yacas
};