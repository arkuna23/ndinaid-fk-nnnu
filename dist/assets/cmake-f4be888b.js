var t = /({)?[a-zA-Z0-9_]+(})?/;

function c(a, i) {
    for (var n, r, e = !1; !a.eol() && (n = a.next()) != i.pending; ) {
        if (n === "$" && r != "\\" && i.pending == '"') {
            e = !0;
            break;
        }
        r = n;
    }
    return e && a.backUp(1), n == i.pending ? i.continueString = !1 : i.continueString = !0, 
    "string";
}

const o = {
    name: "cmake",
    startState: function() {
        var a = {
            inDefinition: !1,
            inInclude: !1,
            continueString: !1,
            pending: !1
        };
        return a;
    },
    token: function(a, i) {
        return a.eatSpace() ? null : function(n, r) {
            var e = n.next();
            return e === "$" ? n.match(t) ? "variableName.special" : "variable" : r.continueString ? (n.backUp(1), 
            c(n, r)) : n.match(/(\s+)?\w+\(/) || n.match(/(\s+)?\w+\ \(/) ? (n.backUp(1), 
            "def") : e == "#" ? (n.skipToEnd(), "comment") : e == "'" || e == '"' ? (r.pending = e, 
            c(n, r)) : e == "(" || e == ")" ? "bracket" : e.match(/[0-9]/) ? "number" : (n.eatWhile(/[\w-]/), 
            null);
        }(a, i);
    }
};

export {
    o as cmake
};