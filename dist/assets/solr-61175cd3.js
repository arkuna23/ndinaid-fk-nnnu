var c = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/, l = /[\|\!\+\-\*\?\~\^\&]/, f = /^(OR|AND|NOT|TO)$/;

function z(e) {
    return function(t, r) {
        for (var o = e; (e = t.peek()) && e.match(c) != null; ) o += t.next();
        return r.tokenize = u, f.test(o) ? "operator" : function(n) {
            return parseFloat(n).toString() === n;
        }(o) ? "number" : t.peek() == ":" ? "propertyName" : "string";
    };
}

function u(e, t) {
    var r, o, n = e.next();
    return n == '"' ? t.tokenize = (o = n, function(a, k) {
        for (var s, i = !1; (s = a.next()) != null && (s != o || i); ) i = !i && s == "\\";
        return i || (k.tokenize = u), "string";
    }) : l.test(n) ? t.tokenize = (r = n, function(a, k) {
        return r == "|" ? a.eat(/\|/) : r == "&" && a.eat(/\&/), k.tokenize = u, 
        "operator";
    }) : c.test(n) && (t.tokenize = z(n)), t.tokenize != u ? t.tokenize(e, t) : null;
}

const p = {
    name: "solr",
    startState: function() {
        return {
            tokenize: u
        };
    },
    token: function(e, t) {
        return e.eatSpace() ? null : t.tokenize(e, t);
    }
};

export {
    p as solr
};