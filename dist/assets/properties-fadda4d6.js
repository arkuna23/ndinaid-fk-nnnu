const l = {
    name: "properties",
    token: function(n, i) {
        var o = n.sol() || i.afterSection, e = n.eol();
        if (i.afterSection = !1, o && (i.nextMultiline ? (i.inMultiline = !0, i.nextMultiline = !1) : i.position = "def"), 
        e && !i.nextMultiline && (i.inMultiline = !1, i.position = "def"), o) for (;n.eatSpace(); );
        var t = n.next();
        return !o || t !== "#" && t !== "!" && t !== ";" ? o && t === "[" ? (i.afterSection = !0, 
        n.skipTo("]"), n.eat("]"), "header") : t === "=" || t === ":" ? (i.position = "quote", 
        null) : (t === "\\" && i.position === "quote" && n.eol() && (i.nextMultiline = !0), 
        i.position) : (i.position = "comment", n.skipToEnd(), "comment");
    },
    startState: function() {
        return {
            position: "def",
            nextMultiline: !1,
            inMultiline: !1,
            afterSection: !1
        };
    }
};

export {
    l as properties
};