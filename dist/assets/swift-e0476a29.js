function u(t) {
    for (var n = {}, e = 0; e < t.length; e++) n[t[e]] = !0;
    return n;
}

var s = u([ "_", "var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "open", "public", "internal", "fileprivate", "private", "deinit", "init", "new", "override", "self", "subscript", "super", "convenience", "dynamic", "final", "indirect", "lazy", "required", "static", "unowned", "unowned(safe)", "unowned(unsafe)", "weak", "as", "is", "break", "case", "continue", "default", "else", "fallthrough", "for", "guard", "if", "in", "repeat", "switch", "where", "while", "defer", "return", "inout", "mutating", "nonmutating", "isolated", "nonisolated", "catch", "do", "rethrows", "throw", "throws", "async", "await", "try", "didSet", "get", "set", "willSet", "assignment", "associativity", "infix", "left", "none", "operator", "postfix", "precedence", "precedencegroup", "prefix", "right", "Any", "AnyObject", "Type", "dynamicType", "Self", "Protocol", "__COLUMN__", "__FILE__", "__FUNCTION__", "__LINE__" ]), l = u([ "var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "for" ]), p = u([ "true", "false", "nil", "self", "super", "_" ]), d = u([ "Array", "Bool", "Character", "Dictionary", "Double", "Float", "Int", "Int8", "Int16", "Int32", "Int64", "Never", "Optional", "Set", "String", "UInt8", "UInt16", "UInt32", "UInt64", "Void" ]), h = "+-/*%=|&<>~^?!", m = ":;,.(){}[]", v = /^\-?0b[01][01_]*/, _ = /^\-?0o[0-7][0-7_]*/, k = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/, x = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/, y = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/, g = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/, w = /^\#[A-Za-z]+/, z = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;

function f(t, n, e) {
    if (t.sol() && (n.indented = t.indentation()), t.eatSpace()) return null;
    var r, i = t.peek();
    if (i == "/") {
        if (t.match("//")) return t.skipToEnd(), "comment";
        if (t.match("/*")) return n.tokenize.push(c), c(t, n);
    }
    if (t.match(w)) return "builtin";
    if (t.match(z)) return "attribute";
    if (t.match(v) || t.match(_) || t.match(k) || t.match(x)) return "number";
    if (t.match(g)) return "property";
    if (h.indexOf(i) > -1) return t.next(), "operator";
    if (m.indexOf(i) > -1) return t.next(), t.match(".."), "punctuation";
    if (r = t.match(/("""|"|')/)) {
        var a = A.bind(null, r[0]);
        return n.tokenize.push(a), a(t, n);
    }
    if (t.match(y)) {
        var o = t.current();
        return d.hasOwnProperty(o) ? "type" : p.hasOwnProperty(o) ? "atom" : s.hasOwnProperty(o) ? (l.hasOwnProperty(o) && (n.prev = "define"), 
        "keyword") : e == "define" ? "def" : "variable";
    }
    return t.next(), null;
}

function b() {
    var t = 0;
    return function(n, e, r) {
        var i = f(n, e, r);
        if (i == "punctuation") {
            if (n.current() == "(") ++t; else if (n.current() == ")") {
                if (t == 0) return n.backUp(1), e.tokenize.pop(), e.tokenize[e.tokenize.length - 1](n, e);
                --t;
            }
        }
        return i;
    };
}

function A(t, n, e) {
    for (var r, i = t.length == 1, a = !1; r = n.peek(); ) if (a) {
        if (n.next(), r == "(") return e.tokenize.push(b()), "string";
        a = !1;
    } else {
        if (n.match(t)) return e.tokenize.pop(), "string";
        n.next(), a = r == "\\";
    }
    return i && e.tokenize.pop(), "string";
}

function c(t, n) {
    for (var e; e = t.next(); ) if (e === "/" && t.eat("*")) n.tokenize.push(c); else if (e === "*" && t.eat("/")) {
        n.tokenize.pop();
        break;
    }
    return "comment";
}

function I(t, n, e) {
    this.prev = t, this.align = n, this.indented = e;
}

function O(t, n) {
    var e = n.match(/^\s*($|\/[\/\*]|[)}\]])/, !1) ? null : n.column() + 1;
    t.context = new I(t.context, e, t.indented);
}

function $(t) {
    t.context && (t.indented = t.context.indented, t.context = t.context.prev);
}

const F = {
    name: "swift",
    startState: function() {
        return {
            prev: null,
            context: null,
            indented: 0,
            tokenize: []
        };
    },
    token: function(t, n) {
        var e = n.prev;
        n.prev = null;
        var r = (n.tokenize[n.tokenize.length - 1] || f)(t, n, e);
        if (r && r != "comment" ? n.prev || (n.prev = r) : n.prev = e, r == "punctuation") {
            var i = /[\(\[\{]|([\]\)\}])/.exec(t.current());
            i && (i[1] ? $ : O)(n, t);
        }
        return r;
    },
    indent: function(t, n, e) {
        var r = t.context;
        if (!r) return 0;
        var i = /^[\]\}\)]/.test(n);
        return r.align != null ? r.align - (i ? 1 : 0) : r.indented + (i ? 0 : e.unit);
    },
    languageData: {
        indentOnInput: /^\s*[\)\}\]]$/,
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        },
        closeBrackets: {
            brackets: [ "(", "[", "{", "'", '"', "`" ]
        }
    }
};

export {
    F as swift
};