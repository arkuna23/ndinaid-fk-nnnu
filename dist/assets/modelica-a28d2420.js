function o(n) {
    for (var e = {}, t = n.split(" "), r = 0; r < t.length; ++r) e[t[r]] = !0;
    return e;
}

var a = o("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"), l = o("abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh"), u = o("Real Boolean Integer String"), c = [].concat(Object.keys(a), Object.keys(l), Object.keys(u)), k = /[;=\(:\),{}.*<>+\-\/^\[\]]/, p = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/, i = /[0-9]/, s = /[_a-zA-Z]/;

function f(n, e) {
    return n.skipToEnd(), e.tokenize = null, "comment";
}

function m(n, e) {
    for (var t, r = !1; t = n.next(); ) {
        if (r && t == "/") {
            e.tokenize = null;
            break;
        }
        r = t == "*";
    }
    return "comment";
}

function d(n, e) {
    for (var t, r = !1; (t = n.next()) != null; ) {
        if (t == '"' && !r) {
            e.tokenize = null, e.sol = !1;
            break;
        }
        r = !r && t == "\\";
    }
    return "string";
}

function z(n, e) {
    for (n.eatWhile(i); n.eat(i) || n.eat(s); );
    var t = n.current();
    return !e.sol || t != "package" && t != "model" && t != "when" && t != "connector" ? e.sol && t == "end" && e.level > 0 && e.level-- : e.level++, 
    e.tokenize = null, e.sol = !1, a.propertyIsEnumerable(t) ? "keyword" : l.propertyIsEnumerable(t) ? "builtin" : u.propertyIsEnumerable(t) ? "atom" : "variable";
}

function b(n, e) {
    for (;n.eat(/[^']/); );
    return e.tokenize = null, e.sol = !1, n.eat("'") ? "variable" : "error";
}

function h(n, e) {
    return n.eatWhile(i), n.eat(".") && n.eatWhile(i), (n.eat("e") || n.eat("E")) && (n.eat("-") || n.eat("+"), 
    n.eatWhile(i)), e.tokenize = null, e.sol = !1, "number";
}

const g = {
    name: "modelica",
    startState: function() {
        return {
            tokenize: null,
            level: 0,
            sol: !0
        };
    },
    token: function(n, e) {
        if (e.tokenize != null) return e.tokenize(n, e);
        if (n.sol() && (e.sol = !0), n.eatSpace()) return e.tokenize = null, null;
        var t = n.next();
        if (t == "/" && n.eat("/")) e.tokenize = f; else if (t == "/" && n.eat("*")) e.tokenize = m; else {
            if (p.test(t + n.peek())) return n.next(), e.tokenize = null, "operator";
            if (k.test(t)) return e.tokenize = null, "operator";
            if (s.test(t)) e.tokenize = z; else if (t == "'" && n.peek() && n.peek() != "'") e.tokenize = b; else if (t == '"') e.tokenize = d; else {
                if (!i.test(t)) return e.tokenize = null, "error";
                e.tokenize = h;
            }
        }
        return e.tokenize(n, e);
    },
    indent: function(n, e, t) {
        if (n.tokenize != null) return null;
        var r = n.level;
        return /(algorithm)/.test(e) && r--, /(equation)/.test(e) && r--, /(initial algorithm)/.test(e) && r--, 
        /(initial equation)/.test(e) && r--, /(end)/.test(e) && r--, r > 0 ? t.unit * r : 0;
    },
    languageData: {
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        },
        autocomplete: c
    }
};

export {
    g as modelica
};