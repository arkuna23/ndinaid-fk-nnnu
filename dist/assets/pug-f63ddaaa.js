import {
    javascript as s
} from "./javascript-5698d30a.js";

var o = {
    "{": "}",
    "(": ")",
    "[": "]"
};

function h(i) {
    if (typeof i != "object") return i;
    let e = {};
    for (let r in i) {
        let t = i[r];
        e[r] = t instanceof Array ? t.slice() : t;
    }
    return e;
}

class u {
    constructor(e) {
        this.indentUnit = e, this.javaScriptLine = !1, this.javaScriptLineExcludesColon = !1, 
        this.javaScriptArguments = !1, this.javaScriptArgumentsDepth = 0, this.isInterpolating = !1, 
        this.interpolationNesting = 0, this.jsState = s.startState(e), this.restOfLine = "", 
        this.isIncludeFiltered = !1, this.isEach = !1, this.lastTag = "", this.isAttrs = !1, 
        this.attrsNest = [], this.inAttributeName = !0, this.attributeIsType = !1, 
        this.attrValue = "", this.indentOf = 1 / 0, this.indentToken = "";
    }
    copy() {
        var e = new u(this.indentUnit);
        return e.javaScriptLine = this.javaScriptLine, e.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon, 
        e.javaScriptArguments = this.javaScriptArguments, e.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth, 
        e.isInterpolating = this.isInterpolating, e.interpolationNesting = this.interpolationNesting, 
        e.jsState = (s.copyState || h)(this.jsState), e.restOfLine = this.restOfLine, 
        e.isIncludeFiltered = this.isIncludeFiltered, e.isEach = this.isEach, e.lastTag = this.lastTag, 
        e.isAttrs = this.isAttrs, e.attrsNest = this.attrsNest.slice(), e.inAttributeName = this.inAttributeName, 
        e.attributeIsType = this.attributeIsType, e.attrValue = this.attrValue, 
        e.indentOf = this.indentOf, e.indentToken = this.indentToken, e;
    }
}

function f(i, e) {
    if (i.match("#{")) return e.isInterpolating = !0, e.interpolationNesting = 0, 
    "punctuation";
}

function p(i, e) {
    if (i.match(/^:([\w\-]+)/)) return c(i, e), "atom";
}

function l(i, e) {
    if (e.isAttrs) {
        if (o[i.peek()] && e.attrsNest.push(o[i.peek()]), e.attrsNest[e.attrsNest.length - 1] === i.peek()) e.attrsNest.pop(); else if (i.eat(")")) return e.isAttrs = !1, 
        "punctuation";
        if (e.inAttributeName && i.match(/^[^=,\)!]+/)) return i.peek() !== "=" && i.peek() !== "!" || (e.inAttributeName = !1, 
        e.jsState = s.startState(2), e.lastTag === "script" && i.current().trim().toLowerCase() === "type" ? e.attributeIsType = !0 : e.attributeIsType = !1), 
        "attribute";
        var r = s.token(i, e.jsState);
        if (e.attrsNest.length === 0 && (r === "string" || r === "variable" || r === "keyword")) try {
            return Function("", "var x " + e.attrValue.replace(/,\s*$/, "").replace(/^!/, "")), 
            e.inAttributeName = !0, e.attrValue = "", i.backUp(i.current().length), 
            l(i, e);
        } catch {}
        return e.attrValue += i.current(), r || !0;
    }
}

function c(i, e) {
    e.indentOf = i.indentation(), e.indentToken = "string";
}

const m = {
    startState: function(i) {
        return new u(i);
    },
    copyState: function(i) {
        return i.copy();
    },
    token: function(i, e) {
        var r = function(t, n) {
            if (t.sol() && (n.restOfLine = ""), n.restOfLine) {
                t.skipToEnd();
                var a = n.restOfLine;
                return n.restOfLine = "", a;
            }
        }(i, e) || function(t, n) {
            if (n.isInterpolating) {
                if (t.peek() === "}") {
                    if (n.interpolationNesting--, n.interpolationNesting < 0) return t.next(), 
                    n.isInterpolating = !1, "punctuation";
                } else t.peek() === "{" && n.interpolationNesting++;
                return s.token(t, n.jsState) || !0;
            }
        }(i, e) || function(t, n) {
            if (n.isIncludeFiltered) {
                var a = p(t, n);
                return n.isIncludeFiltered = !1, n.restOfLine = "string", a;
            }
        }(i, e) || function(t, n) {
            if (n.isEach) {
                if (t.match(/^ in\b/)) return n.javaScriptLine = !0, n.isEach = !1, 
                "keyword";
                if (t.sol() || t.eol()) n.isEach = !1; else if (t.next()) {
                    for (;!t.match(/^ in\b/, !1) && t.next(); );
                    return "variable";
                }
            }
        }(i, e) || l(i, e) || function(t, n) {
            if (t.sol() && (n.javaScriptLine = !1, n.javaScriptLineExcludesColon = !1), 
            n.javaScriptLine) {
                if (n.javaScriptLineExcludesColon && t.peek() === ":") return n.javaScriptLine = !1, 
                void (n.javaScriptLineExcludesColon = !1);
                var a = s.token(t, n.jsState);
                return t.eol() && (n.javaScriptLine = !1), a || !0;
            }
        }(i, e) || function(t, n) {
            if (n.javaScriptArguments) return n.javaScriptArgumentsDepth === 0 && t.peek() !== "(" ? void (n.javaScriptArguments = !1) : (t.peek() === "(" ? n.javaScriptArgumentsDepth++ : t.peek() === ")" && n.javaScriptArgumentsDepth--, 
            n.javaScriptArgumentsDepth === 0 ? void (n.javaScriptArguments = !1) : s.token(t, n.jsState) || !0);
        }(i, e) || function(t, n) {
            if (n.mixinCallAfter) return n.mixinCallAfter = !1, t.match(/^\( *[-\w]+ *=/, !1) || (n.javaScriptArguments = !0, 
            n.javaScriptArgumentsDepth = 0), !0;
        }(i, e) || function(t) {
            if (t.match(/^yield\b/)) return "keyword";
        }(i) || function(t) {
            if (t.match(/^(?:doctype) *([^\n]+)?/)) return "meta";
        }(i) || f(i, e) || function(t, n) {
            if (t.match(/^case\b/)) return n.javaScriptLine = !0, "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^when\b/)) return n.javaScriptLine = !0, n.javaScriptLineExcludesColon = !0, 
            "keyword";
        }(i, e) || function(t) {
            if (t.match(/^default\b/)) return "keyword";
        }(i) || function(t, n) {
            if (t.match(/^extends?\b/)) return n.restOfLine = "string", "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^append\b/)) return n.restOfLine = "variable", "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^prepend\b/)) return n.restOfLine = "variable", "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^block\b *(?:(prepend|append)\b)?/)) return n.restOfLine = "variable", 
            "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^include\b/)) return n.restOfLine = "string", "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^include:([a-zA-Z0-9\-]+)/, !1) && t.match("include")) return n.isIncludeFiltered = !0, 
            "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^mixin\b/)) return n.javaScriptLine = !0, "keyword";
        }(i, e) || function(t, n) {
            return t.match(/^\+([-\w]+)/) ? (t.match(/^\( *[-\w]+ *=/, !1) || (n.javaScriptArguments = !0, 
            n.javaScriptArgumentsDepth = 0), "variable") : t.match("+#{", !1) ? (t.next(), 
            n.mixinCallAfter = !0, f(t, n)) : void 0;
        }(i, e) || function(t, n) {
            if (t.match(/^(if|unless|else if|else)\b/)) return n.javaScriptLine = !0, 
            "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^(- *)?(each|for)\b/)) return n.isEach = !0, "keyword";
        }(i, e) || function(t, n) {
            if (t.match(/^while\b/)) return n.javaScriptLine = !0, "keyword";
        }(i, e) || function(t, n) {
            var a;
            if (a = t.match(/^(\w(?:[-:\w]*\w)?)\/?/)) return n.lastTag = a[1].toLowerCase(), 
            "tag";
        }(i, e) || p(i, e) || function(t, n) {
            if (t.match(/^(!?=|-)/)) return n.javaScriptLine = !0, "punctuation";
        }(i, e) || function(t) {
            if (t.match(/^#([\w-]+)/)) return "builtin";
        }(i) || function(t) {
            if (t.match(/^\.([\w-]+)/)) return "className";
        }(i) || function(t, n) {
            if (t.peek() == "(") return t.next(), n.isAttrs = !0, n.attrsNest = [], 
            n.inAttributeName = !0, n.attrValue = "", n.attributeIsType = !1, "punctuation";
        }(i, e) || function(t, n) {
            if (t.match(/^&attributes\b/)) return n.javaScriptArguments = !0, n.javaScriptArgumentsDepth = 0, 
            "keyword";
        }(i, e) || function(t) {
            if (t.sol() && t.eatSpace()) return "indent";
        }(i) || function(t, n) {
            return t.match(/^(?:\| ?| )([^\n]+)/) ? "string" : t.match(/^(<[^\n]*)/, !1) ? (c(t, n), 
            t.skipToEnd(), n.indentToken) : void 0;
        }(i, e) || function(t, n) {
            if (t.match(/^ *\/\/(-)?([^\n]*)/)) return n.indentOf = t.indentation(), 
            n.indentToken = "comment", "comment";
        }(i, e) || function(t) {
            if (t.match(/^: */)) return "colon";
        }(i) || function(t, n) {
            if (t.eat(".")) return c(t, n), "dot";
        }(i, e) || function(t) {
            return t.next(), null;
        }(i);
        return r === !0 ? null : r;
    }
};

export {
    m as pug
};