var d = function(e) {
    for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r) t[n[r]] = !0;
    return t;
}("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"), m = {
    null: !0
}, s = /[+\-*&%=<>!?|\/]/;

function k(e, t) {
    var n, r = e.next();
    if (r == "#" && t.startOfLine) return e.skipToEnd(), "meta";
    if (r == '"' || r == "'") return t.tokenize = (n = r, function(f, p) {
        for (var i, a = !1, l = !1; (i = f.next()) != null; ) {
            if (i == n && !a) {
                l = !0;
                break;
            }
            a = !a && i == "\\";
        }
        return !l && a || (p.tokenize = null), "string";
    }), t.tokenize(e, t);
    if (r == "(" && e.eat("*")) return t.tokenize = u, u(e, t);
    if (r == "{") return t.tokenize = c, c(e, t);
    if (/[\[\]\(\),;\:\.]/.test(r)) return null;
    if (/\d/.test(r)) return e.eatWhile(/[\w\.]/), "number";
    if (r == "/" && e.eat("/")) return e.skipToEnd(), "comment";
    if (s.test(r)) return e.eatWhile(s), "operator";
    e.eatWhile(/[\w\$_]/);
    var o = e.current();
    return d.propertyIsEnumerable(o) ? "keyword" : m.propertyIsEnumerable(o) ? "atom" : "variable";
}

function u(e, t) {
    for (var n, r = !1; n = e.next(); ) {
        if (n == ")" && r) {
            t.tokenize = null;
            break;
        }
        r = n == "*";
    }
    return "comment";
}

function c(e, t) {
    for (var n; n = e.next(); ) if (n == "}") {
        t.tokenize = null;
        break;
    }
    return "comment";
}

const b = {
    name: "pascal",
    startState: function() {
        return {
            tokenize: null
        };
    },
    token: function(e, t) {
        if (e.eatSpace()) return null;
        var n = (t.tokenize || k)(e, t);
        return n;
    },
    languageData: {
        indentOnInput: /^\s*[{}]$/,
        commentTokens: {
            block: {
                open: "(*",
                close: "*)"
            }
        }
    }
};

export {
    b as pascal
};