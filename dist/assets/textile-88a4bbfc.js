var u = {
    addition: "inserted",
    attributes: "propertyName",
    bold: "strong",
    cite: "keyword",
    code: "monospace",
    definitionList: "list",
    deletion: "deleted",
    div: "punctuation",
    em: "emphasis",
    footnote: "variable",
    footCite: "qualifier",
    header: "heading",
    html: "comment",
    image: "atom",
    italic: "emphasis",
    link: "link",
    linkDefinition: "link",
    list1: "list",
    list2: "list.special",
    list3: "list",
    notextile: "string.special",
    pre: "operator",
    p: "content",
    quote: "bracket",
    span: "quote",
    specialChar: "character",
    strong: "strong",
    sub: "content.special",
    sup: "content.special",
    table: "variableName.special",
    tableHeading: "operator"
};

function d(t, e, n) {
    if (n === "_") return t.eat("_") ? s(t, e, "italic", /__/, 2) : s(t, e, "em", /_/, 1);
    if (n === "*") return t.eat("*") ? s(t, e, "bold", /\*\*/, 2) : s(t, e, "strong", /\*/, 1);
    if (n === "[") return t.match(/\d+\]/) && (e.footCite = !0), o(e);
    if (n === "(" && t.match(/^(r|tm|c)\)/)) return u.specialChar;
    if (n === "<" && t.match(/(\w+)[^>]+>[^<]+<\/\1>/)) return u.html;
    if (n === "?" && t.eat("?")) return s(t, e, "cite", /\?\?/, 2);
    if (n === "=" && t.eat("=")) return s(t, e, "notextile", /==/, 2);
    if (n === "-" && !t.eat("-")) return s(t, e, "deletion", /-/, 1);
    if (n === "+") return s(t, e, "addition", /\+/, 1);
    if (n === "~") return s(t, e, "sub", /~/, 1);
    if (n === "^") return s(t, e, "sup", /\^/, 1);
    if (n === "%") return s(t, e, "span", /%/, 1);
    if (n === "@") return s(t, e, "code", /@/, 1);
    if (n === "!") {
        var l = s(t, e, "image", /(?:\([^\)]+\))?!/, 1);
        return t.match(/^:\S+/), l;
    }
    return o(e);
}

function s(t, e, n, l, m) {
    var c = t.pos > m ? t.string.charAt(t.pos - m - 1) : null, p = t.peek();
    if (e[n]) {
        if ((!p || /\W/.test(p)) && c && /\S/.test(c)) {
            var f = o(e);
            return e[n] = !1, f;
        }
    } else (!c || /\W/.test(c)) && p && /\S/.test(p) && t.match(new RegExp("^.*\\S" + l.source + "(?:\\W|$)"), !1) && (e[n] = !0, 
    e.mode = r.attributes);
    return o(e);
}

function o(t) {
    var e = h(t);
    if (e) return e;
    var n = [];
    return t.layoutType && n.push(u[t.layoutType]), n = n.concat(function(l) {
        for (var m = [], c = 1; c < arguments.length; ++c) l[arguments[c]] && m.push(u[arguments[c]]);
        return m;
    }(t, "addition", "bold", "cite", "code", "deletion", "em", "footCite", "image", "italic", "link", "span", "strong", "sub", "sup", "table", "tableHeading")), 
    t.layoutType === "header" && n.push(u.header + "-" + t.header), n.length ? n.join(" ") : null;
}

function h(t) {
    var e = t.layoutType;
    switch (e) {
      case "notextile":
      case "code":
      case "pre":
        return u[e];

      default:
        return t.notextile ? u.notextile + (e ? " " + u[e] : "") : null;
    }
}

var i = {
    cache: {},
    single: {
        bc: "bc",
        bq: "bq",
        definitionList: /- .*?:=+/,
        definitionListEnd: /.*=:\s*$/,
        div: "div",
        drawTable: /\|.*\|/,
        foot: /fn\d+/,
        header: /h[1-6]/,
        html: /\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,
        link: /[^"]+":\S/,
        linkDefinition: /\[[^\s\]]+\]\S+/,
        list: /(?:#+|\*+)/,
        notextile: "notextile",
        para: "p",
        pre: "pre",
        table: "table",
        tableCellAttributes: /[\/\\]\d+/,
        tableHeading: /\|_\./,
        tableText: /[^"_\*\[\(\?\+~\^%@|-]+/,
        text: /[^!"_=\*\[\(<\?\+~\^%@-]+/
    },
    attributes: {
        align: /(?:<>|<|>|=)/,
        selector: /\([^\(][^\)]+\)/,
        lang: /\[[^\[\]]+\]/,
        pad: /(?:\(+|\)+){1,2}/,
        css: /\{[^\}]+\}/
    },
    createRe: function(t) {
        switch (t) {
          case "drawTable":
            return i.makeRe("^", i.single.drawTable, "$");

          case "html":
            return i.makeRe("^", i.single.html, "(?:", i.single.html, ")*", "$");

          case "linkDefinition":
            return i.makeRe("^", i.single.linkDefinition, "$");

          case "listLayout":
            return i.makeRe("^", i.single.list, a("allAttributes"), "*\\s+");

          case "tableCellAttributes":
            return i.makeRe("^", i.choiceRe(i.single.tableCellAttributes, a("allAttributes")), "+\\.");

          case "type":
            return i.makeRe("^", a("allTypes"));

          case "typeLayout":
            return i.makeRe("^", a("allTypes"), a("allAttributes"), "*\\.\\.?", "(\\s+|$)");

          case "attributes":
            return i.makeRe("^", a("allAttributes"), "+");

          case "allTypes":
            return i.choiceRe(i.single.div, i.single.foot, i.single.header, i.single.bc, i.single.bq, i.single.notextile, i.single.pre, i.single.table, i.single.para);

          case "allAttributes":
            return i.choiceRe(i.attributes.selector, i.attributes.css, i.attributes.lang, i.attributes.align, i.attributes.pad);

          default:
            return i.makeRe("^", i.single[t]);
        }
    },
    makeRe: function() {
        for (var t = "", e = 0; e < arguments.length; ++e) {
            var n = arguments[e];
            t += typeof n == "string" ? n : n.source;
        }
        return new RegExp(t);
    },
    choiceRe: function() {
        for (var t = [ arguments[0] ], e = 1; e < arguments.length; ++e) t[2 * e - 1] = "|", 
        t[2 * e] = arguments[e];
        return t.unshift("(?:"), t.push(")"), i.makeRe.apply(null, t);
    }
};

function a(t) {
    return i.cache[t] || (i.cache[t] = i.createRe(t));
}

var r = {
    newLayout: function(t, e) {
        return t.match(a("typeLayout"), !1) ? (e.spanningLayout = !1, (e.mode = r.blockType)(t, e)) : (h(e) || (t.match(a("listLayout"), !1) ? n = r.list : t.match(a("drawTable"), !1) ? n = r.table : t.match(a("linkDefinition"), !1) ? n = r.linkDefinition : t.match(a("definitionList")) ? n = r.definitionList : t.match(a("html"), !1) && (n = r.html)), 
        (e.mode = n || r.text)(t, e));
        var n;
    },
    blockType: function(t, e) {
        var n, l;
        return e.layoutType = null, (n = t.match(a("type"))) ? ((n = (l = n[0]).match(a("header"))) ? (e.layoutType = "header", 
        e.header = parseInt(n[0][1])) : l.match(a("bq")) ? e.layoutType = "quote" : l.match(a("bc")) ? e.layoutType = "code" : l.match(a("foot")) ? e.layoutType = "footnote" : l.match(a("notextile")) ? e.layoutType = "notextile" : l.match(a("pre")) ? e.layoutType = "pre" : l.match(a("div")) ? e.layoutType = "div" : l.match(a("table")) && (e.layoutType = "table"), 
        e.mode = r.attributes, o(e)) : (e.mode = r.text)(t, e);
    },
    text: function(t, e) {
        if (t.match(a("text"))) return o(e);
        var n = t.next();
        return n === '"' ? (e.mode = r.link)(t, e) : d(t, e, n);
    },
    attributes: function(t, e) {
        return e.mode = r.layoutLength, t.match(a("attributes")) ? u.attributes : o(e);
    },
    layoutLength: function(t, e) {
        return t.eat(".") && t.eat(".") && (e.spanningLayout = !0), e.mode = r.text, 
        o(e);
    },
    list: function(t, e) {
        var n = t.match(a("list"));
        e.listDepth = n[0].length;
        var l = (e.listDepth - 1) % 3;
        return e.layoutType = l ? l === 1 ? "list2" : "list3" : "list1", e.mode = r.attributes, 
        o(e);
    },
    link: function(t, e) {
        return e.mode = r.text, t.match(a("link")) ? (t.match(/\S+/), u.link) : o(e);
    },
    linkDefinition: function(t) {
        return t.skipToEnd(), u.linkDefinition;
    },
    definitionList: function(t, e) {
        return t.match(a("definitionList")), e.layoutType = "definitionList", t.match(/\s*$/) ? e.spanningLayout = !0 : e.mode = r.attributes, 
        o(e);
    },
    html: function(t) {
        return t.skipToEnd(), u.html;
    },
    table: function(t, e) {
        return e.layoutType = "table", (e.mode = r.tableCell)(t, e);
    },
    tableCell: function(t, e) {
        return t.match(a("tableHeading")) ? e.tableHeading = !0 : t.eat("|"), e.mode = r.tableCellAttributes, 
        o(e);
    },
    tableCellAttributes: function(t, e) {
        return e.mode = r.tableText, t.match(a("tableCellAttributes")) ? u.attributes : o(e);
    },
    tableText: function(t, e) {
        return t.match(a("tableText")) ? o(e) : t.peek() === "|" ? (e.mode = r.tableCell, 
        o(e)) : d(t, e, t.next());
    }
};

const b = {
    name: "textile",
    startState: function() {
        return {
            mode: r.newLayout
        };
    },
    token: function(t, e) {
        return t.sol() && function(n, l) {
            l.mode = r.newLayout, l.tableHeading = !1, l.layoutType === "definitionList" && l.spanningLayout && n.match(a("definitionListEnd"), !1) && (l.spanningLayout = !1);
        }(t, e), e.mode(t, e);
    },
    blankLine: function(t) {
        var e = t.spanningLayout, n = t.layoutType;
        for (var l in t) t.hasOwnProperty(l) && delete t[l];
        t.mode = r.newLayout, e && (t.layoutType = n, t.spanningLayout = !0);
    }
};

export {
    b as textile
};