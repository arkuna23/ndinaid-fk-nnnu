function e(t, r) {
    return t.skipToEnd(), r.cur = u, "error";
}

function i(t, r) {
    return t.match(/^HTTP\/\d\.\d/) ? (r.cur = a, "keyword") : t.match(/^[A-Z]+/) && /[ \t]/.test(t.peek()) ? (r.cur = s, 
    "keyword") : e(t, r);
}

function a(t, r) {
    var n = t.match(/^\d+/);
    if (!n) return e(t, r);
    r.cur = d;
    var c = Number(n[0]);
    return c >= 100 && c < 400 ? "atom" : "error";
}

function d(t, r) {
    return t.skipToEnd(), r.cur = u, null;
}

function s(t, r) {
    return t.eatWhile(/\S/), r.cur = f, "string.special";
}

function f(t, r) {
    return t.match(/^HTTP\/\d\.\d$/) ? (r.cur = u, "keyword") : e(t, r);
}

function u(t) {
    return t.sol() && !t.eat(/[ \t]/) ? t.match(/^.*?:/) ? "atom" : (t.skipToEnd(), 
    "error") : (t.skipToEnd(), "string");
}

function o(t) {
    return t.skipToEnd(), null;
}

const k = {
    name: "http",
    token: function(t, r) {
        var n = r.cur;
        return n != u && n != o && t.eatSpace() ? null : n(t, r);
    },
    blankLine: function(t) {
        t.cur = o;
    },
    startState: function() {
        return {
            cur: i
        };
    }
};

export {
    k as http
};