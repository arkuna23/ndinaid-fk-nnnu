var u = 0, b = 1, W = 2, l = 3, g = 4, s = 5, k = 6, _ = 7, o = 8, d = 9, m = 10, c = 11, y = 12;

function n(i, e) {
    var a, r = i.location;
    a = r == u && e == "<" ? b : r == u && e == "_" ? W : r == l && e == "<" ? g : r == s && e == "<" ? k : r == s && e == "_" ? _ : r == s && e == '"' ? o : r == b && e == ">" || r == W && e == " " ? l : r == g && e == ">" ? s : r == k && e == ">" || r == _ && e == " " || r == o && e == '"' || r == d && e == " " || r == m && e == ">" ? c : r == o && e == "@" ? d : r == o && e == "^" ? m : e != " " || r != u && r != l && r != s && r != c ? r == c && e == "." ? u : y : r, 
    i.location = a;
}

const S = {
    name: "ntriples",
    startState: function() {
        return {
            location: u,
            uris: [],
            anchors: [],
            bnodes: [],
            langs: [],
            types: []
        };
    },
    token: function(i, e) {
        var a = i.next();
        if (a == "<") {
            n(e, a);
            var r = "";
            return i.eatWhile(function(t) {
                return t != "#" && t != ">" && (r += t, !0);
            }), e.uris.push(r), i.match("#", !1) || (i.next(), n(e, ">")), "variable";
        }
        if (a == "#") {
            var f = "";
            return i.eatWhile(function(t) {
                return t != ">" && t != " " && (f += t, !0);
            }), e.anchors.push(f), "url";
        }
        if (a == ">") return n(e, ">"), "variable";
        if (a == "_") {
            n(e, a);
            var h = "";
            return i.eatWhile(function(t) {
                return t != " " && (h += t, !0);
            }), e.bnodes.push(h), i.next(), n(e, " "), "builtin";
        }
        if (a == '"') return n(e, a), i.eatWhile(function(t) {
            return t != '"';
        }), i.next(), i.peek() != "@" && i.peek() != "^" && n(e, '"'), "string";
        if (a == "@") {
            n(e, "@");
            var p = "";
            return i.eatWhile(function(t) {
                return t != " " && (p += t, !0);
            }), e.langs.push(p), i.next(), n(e, " "), "string.special";
        }
        if (a == "^") {
            i.next(), n(e, "^");
            var x = "";
            return i.eatWhile(function(t) {
                return t != ">" && (x += t, !0);
            }), e.types.push(x), i.next(), n(e, ">"), "variable";
        }
        a == " " && n(e, a), a == "." && n(e, a);
    }
};

export {
    S as ntriples
};