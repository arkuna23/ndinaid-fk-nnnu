function ir(x) {
    var F, L, kr = x.statementIndent, or = x.jsonld, vr = x.json || or, v = x.typescript, M = x.wordCharacters || /[\w$\xa1-\uffff]/, yr = function() {
        function r(k) {
            return {
                type: k,
                style: "keyword"
            };
        }
        var e = r("keyword a"), a = r("keyword b"), i = r("keyword c"), u = r("keyword d"), o = r("operator"), l = {
            type: "atom",
            style: "atom"
        };
        return {
            if: r("if"),
            while: e,
            with: e,
            else: a,
            do: a,
            try: a,
            finally: a,
            return: u,
            break: u,
            continue: u,
            new: r("new"),
            delete: i,
            void: i,
            throw: i,
            debugger: r("debugger"),
            var: r("var"),
            const: r("var"),
            let: r("var"),
            function: r("function"),
            catch: r("catch"),
            for: r("for"),
            switch: r("switch"),
            case: r("case"),
            default: r("default"),
            in: o,
            typeof: o,
            instanceof: o,
            true: l,
            false: l,
            null: l,
            undefined: l,
            NaN: l,
            Infinity: l,
            this: r("this"),
            class: r("class"),
            super: r("atom"),
            yield: i,
            export: r("export"),
            import: r("import"),
            extends: i,
            await: i
        };
    }(), wr = /[+\-*&%=<>!?|~^@]/, Nr = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
    function w(r, e, a) {
        return F = r, L = a, e;
    }
    function _(r, e) {
        var a, i = r.next();
        if (i == '"' || i == "'") return e.tokenize = (a = i, function(l, k) {
            var m, V = !1;
            if (or && l.peek() == "@" && l.match(Nr)) return k.tokenize = _, w("jsonld-keyword", "meta");
            for (;(m = l.next()) != null && (m != a || V); ) V = !V && m == "\\";
            return V || (k.tokenize = _), w("string", "string");
        }), e.tokenize(r, e);
        if (i == "." && r.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return w("number", "number");
        if (i == "." && r.match("..")) return w("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(i)) return w(i);
        if (i == "=" && r.eat(">")) return w("=>", "operator");
        if (i == "0" && r.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return w("number", "number");
        if (/\d/.test(i)) return r.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), 
        w("number", "number");
        if (i == "/") return r.eat("*") ? (e.tokenize = Q, Q(r, e)) : r.eat("/") ? (r.skipToEnd(), 
        w("comment", "comment")) : function(l, k, m) {
            return k.tokenize == _ && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(k.lastType) || k.lastType == "quasi" && /\{\s*$/.test(l.string.slice(0, l.pos - (m || 0)));
        }(r, e, 1) ? (function(l) {
            for (var k, m = !1, V = !1; (k = l.next()) != null; ) {
                if (!m) {
                    if (k == "/" && !V) return;
                    k == "[" ? V = !0 : V && k == "]" && (V = !1);
                }
                m = !m && k == "\\";
            }
        }(r), r.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), w("regexp", "string.special")) : (r.eat("="), 
        w("operator", "operator", r.current()));
        if (i == "`") return e.tokenize = U, U(r, e);
        if (i == "#" && r.peek() == "!") return r.skipToEnd(), w("meta", "meta");
        if (i == "#" && r.eatWhile(M)) return w("variable", "property");
        if (i == "<" && r.match("!--") || i == "-" && r.match("->") && !/\S/.test(r.string.slice(0, r.start))) return r.skipToEnd(), 
        w("comment", "comment");
        if (wr.test(i)) return i == ">" && e.lexical && e.lexical.type == ">" || (r.eat("=") ? i != "!" && i != "=" || r.eat("=") : /[<>*+\-|&?]/.test(i) && (r.eat(i), 
        i == ">" && r.eat(i))), i == "?" && r.eat(".") ? w(".") : w("operator", "operator", r.current());
        if (M.test(i)) {
            r.eatWhile(M);
            var u = r.current();
            if (e.lastType != ".") {
                if (yr.propertyIsEnumerable(u)) {
                    var o = yr[u];
                    return w(o.type, o.style, u);
                }
                if (u == "async" && r.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)) return w("async", "keyword", u);
            }
            return w("variable", "variable", u);
        }
    }
    function Q(r, e) {
        for (var a, i = !1; a = r.next(); ) {
            if (a == "/" && i) {
                e.tokenize = _;
                break;
            }
            i = a == "*";
        }
        return w("comment", "comment");
    }
    function U(r, e) {
        for (var a, i = !1; (a = r.next()) != null; ) {
            if (!i && (a == "`" || a == "$" && r.eat("{"))) {
                e.tokenize = _;
                break;
            }
            i = !i && a == "\\";
        }
        return w("quasi", "string.special", r.current());
    }
    var Pr = "([{}])";
    function ur(r, e) {
        e.fatArrowAt && (e.fatArrowAt = null);
        var a = r.string.indexOf("=>", r.start);
        if (!(a < 0)) {
            if (v) {
                var i = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(r.string.slice(r.start, a));
                i && (a = i.index);
            }
            for (var u = 0, o = !1, l = a - 1; l >= 0; --l) {
                var k = r.string.charAt(l), m = Pr.indexOf(k);
                if (m >= 0 && m < 3) {
                    if (!u) {
                        ++l;
                        break;
                    }
                    if (--u == 0) {
                        k == "(" && (o = !0);
                        break;
                    }
                } else if (m >= 3 && m < 6) ++u; else if (M.test(k)) o = !0; else if (/["'\/`]/.test(k)) for (;;--l) {
                    if (l == 0) return;
                    if (r.string.charAt(l - 1) == k && r.string.charAt(l - 2) != "\\") {
                        l--;
                        break;
                    }
                } else if (o && !u) {
                    ++l;
                    break;
                }
            }
            o && !u && (e.fatArrowAt = l);
        }
    }
    var Cr = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0
    };
    function br(r, e, a, i, u, o) {
        this.indented = r, this.column = e, this.type = a, this.prev = u, this.info = o, 
        i != null && (this.align = i);
    }
    function Wr(r, e) {
        for (var a = r.localVars; a; a = a.next) if (a.name == e) return !0;
        for (var i = r.context; i; i = i.prev) for (a = i.vars; a; a = a.next) if (a.name == e) return !0;
    }
    var n = {
        state: null,
        column: null,
        marked: null,
        cc: null
    };
    function c() {
        for (var r = arguments.length - 1; r >= 0; r--) n.cc.push(arguments[r]);
    }
    function t() {
        return c.apply(null, arguments), !0;
    }
    function sr(r, e) {
        for (var a = e; a; a = a.next) if (a.name == r) return !0;
        return !1;
    }
    function N(r) {
        var e = n.state;
        if (n.marked = "def", e.context) {
            if (e.lexical.info == "var" && e.context && e.context.block) {
                var a = hr(r, e.context);
                if (a != null) return void (e.context = a);
            } else if (!sr(r, e.localVars)) return void (e.localVars = new H(r, e.localVars));
        }
        x.globalVars && !sr(r, e.globalVars) && (e.globalVars = new H(r, e.globalVars));
    }
    function hr(r, e) {
        if (e) {
            if (e.block) {
                var a = hr(r, e.prev);
                return a ? a == e.prev ? e : new G(a, e.vars, !0) : null;
            }
            return sr(r, e.vars) ? e : new G(e.prev, new H(r, e.vars), !1);
        }
        return null;
    }
    function R(r) {
        return r == "public" || r == "private" || r == "protected" || r == "abstract" || r == "readonly";
    }
    function G(r, e, a) {
        this.prev = r, this.vars = e, this.block = a;
    }
    function H(r, e) {
        this.name = r, this.next = e;
    }
    var Br = new H("this", new H("arguments", null));
    function q() {
        n.state.context = new G(n.state.context, n.state.localVars, !1), n.state.localVars = Br;
    }
    function X() {
        n.state.context = new G(n.state.context, n.state.localVars, !0), n.state.localVars = null;
    }
    function A() {
        n.state.localVars = n.state.context.vars, n.state.context = n.state.context.prev;
    }
    function f(r, e) {
        var a = function() {
            var i = n.state, u = i.indented;
            if (i.lexical.type == "stat") u = i.lexical.indented; else for (var o = i.lexical; o && o.type == ")" && o.align; o = o.prev) u = o.indented;
            i.lexical = new br(u, n.stream.column(), r, null, i.lexical, e);
        };
        return a.lex = !0, a;
    }
    function s() {
        var r = n.state;
        r.lexical.prev && (r.lexical.type == ")" && (r.indented = r.lexical.indented), 
        r.lexical = r.lexical.prev);
    }
    function d(r) {
        return function e(a) {
            return a == r ? t() : r == ";" || a == "}" || a == ")" || a == "]" ? c() : t(e);
        };
    }
    function b(r, e) {
        return r == "var" ? t(f("vardef", e), mr, d(";"), s) : r == "keyword a" ? t(f("form"), cr, b, s) : r == "keyword b" ? t(f("form"), b, s) : r == "keyword d" ? n.stream.match(/^\s*$/, !1) ? t() : t(f("stat"), P, d(";"), s) : r == "debugger" ? t(d(";")) : r == "{" ? t(f("}"), X, rr, s, A) : r == ";" ? t() : r == "if" ? (n.state.lexical.info == "else" && n.state.cc[n.state.cc.length - 1] == s && n.state.cc.pop()(), 
        t(f("form"), cr, b, s, jr)) : r == "function" ? t(O) : r == "for" ? t(f("form"), X, Tr, b, A, s) : r == "class" || v && e == "interface" ? (n.marked = "keyword", 
        t(f("form", r == "class" ? r : e), Or, s)) : r == "variable" ? v && e == "declare" ? (n.marked = "keyword", 
        t(b)) : v && (e == "module" || e == "enum" || e == "type") && n.stream.match(/^\s*\w/, !1) ? (n.marked = "keyword", 
        e == "enum" ? t(Er) : e == "type" ? t($r, d("operator"), p, d(";")) : t(f("form"), z, d("{"), f("}"), rr, s, s)) : v && e == "namespace" ? (n.marked = "keyword", 
        t(f("form"), y, b, s)) : v && e == "abstract" ? (n.marked = "keyword", t(b)) : t(f("stat"), Hr) : r == "switch" ? t(f("form"), cr, d("{"), f("}", "switch"), X, rr, s, s, A) : r == "case" ? t(y, d(":")) : r == "default" ? t(d(":")) : r == "catch" ? t(f("form"), q, Dr, b, s, A) : r == "export" ? t(f("stat"), ne, s) : r == "import" ? t(f("stat"), ae, s) : r == "async" ? t(b) : e == "@" ? t(y, b) : c(f("stat"), y, d(";"), s);
    }
    function Dr(r) {
        if (r == "(") return t(S, d(")"));
    }
    function y(r, e) {
        return xr(r, e, !1);
    }
    function g(r, e) {
        return xr(r, e, !0);
    }
    function cr(r) {
        return r != "(" ? c() : t(f(")"), P, d(")"), s);
    }
    function xr(r, e, a) {
        if (n.state.fatArrowAt == n.stream.start) {
            var i = a ? Vr : gr;
            if (r == "(") return t(q, f(")"), h(S, ")"), s, d("=>"), i, A);
            if (r == "variable") return c(q, z, d("=>"), i, A);
        }
        var u = a ? C : E;
        return Cr.hasOwnProperty(r) ? t(u) : r == "function" ? t(O, u) : r == "class" || v && e == "interface" ? (n.marked = "keyword", 
        t(f("form"), te, s)) : r == "keyword c" || r == "async" ? t(a ? g : y) : r == "(" ? t(f(")"), P, d(")"), s, u) : r == "operator" || r == "spread" ? t(a ? g : y) : r == "[" ? t(f("]"), oe, s, u) : r == "{" ? J(Z, "}", null, u) : r == "quasi" ? c(Y, u) : r == "new" ? t(function(o) {
            return function(l) {
                return l == "." ? t(o ? Gr : Ur) : l == "variable" && v ? t(Xr, o ? C : E) : c(o ? g : y);
            };
        }(a)) : t();
    }
    function P(r) {
        return r.match(/[;\}\)\],]/) ? c() : c(y);
    }
    function E(r, e) {
        return r == "," ? t(P) : C(r, e, !1);
    }
    function C(r, e, a) {
        var i = a == 0 ? E : C, u = a == 0 ? y : g;
        return r == "=>" ? t(q, a ? Vr : gr, A) : r == "operator" ? /\+\+|--/.test(e) || v && e == "!" ? t(i) : v && e == "<" && n.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? t(f(">"), h(p, ">"), s, i) : e == "?" ? t(y, d(":"), u) : t(u) : r == "quasi" ? c(Y, i) : r != ";" ? r == "(" ? J(g, ")", "call", i) : r == "." ? t(Jr, i) : r == "[" ? t(f("]"), P, d("]"), s, i) : v && e == "as" ? (n.marked = "keyword", 
        t(p, i)) : r == "regexp" ? (n.state.lastType = n.marked = "operator", n.stream.backUp(n.stream.pos - n.stream.start - 1), 
        t(u)) : void 0 : void 0;
    }
    function Y(r, e) {
        return r != "quasi" ? c() : e.slice(e.length - 2) != "${" ? t(Y) : t(P, Fr);
    }
    function Fr(r) {
        if (r == "}") return n.marked = "string.special", n.state.tokenize = U, 
        t(Y);
    }
    function gr(r) {
        return ur(n.stream, n.state), c(r == "{" ? b : y);
    }
    function Vr(r) {
        return ur(n.stream, n.state), c(r == "{" ? b : g);
    }
    function Ur(r, e) {
        if (e == "target") return n.marked = "keyword", t(E);
    }
    function Gr(r, e) {
        if (e == "target") return n.marked = "keyword", t(C);
    }
    function Hr(r) {
        return r == ":" ? t(s, b) : c(E, d(";"), s);
    }
    function Jr(r) {
        if (r == "variable") return n.marked = "property", t();
    }
    function Z(r, e) {
        return r == "async" ? (n.marked = "property", t(Z)) : r == "variable" || n.style == "keyword" ? (n.marked = "property", 
        e == "get" || e == "set" ? t(Kr) : (v && n.state.fatArrowAt == n.stream.start && (a = n.stream.match(/^\s*:\s*/, !1)) && (n.state.fatArrowAt = n.stream.pos + a[0].length), 
        t(I))) : r == "number" || r == "string" ? (n.marked = or ? "property" : n.style + " property", 
        t(I)) : r == "jsonld-keyword" ? t(I) : v && R(e) ? (n.marked = "keyword", 
        t(Z)) : r == "[" ? t(y, W, d("]"), I) : r == "spread" ? t(g, I) : e == "*" ? (n.marked = "keyword", 
        t(Z)) : r == ":" ? c(I) : void 0;
        var a;
    }
    function Kr(r) {
        return r != "variable" ? c(I) : (n.marked = "property", t(O));
    }
    function I(r) {
        return r == ":" ? t(g) : r == "(" ? c(O) : void 0;
    }
    function h(r, e, a) {
        function i(u, o) {
            if (a ? a.indexOf(u) > -1 : u == ",") {
                var l = n.state.lexical;
                return l.info == "call" && (l.pos = (l.pos || 0) + 1), t(function(k, m) {
                    return k == e || m == e ? c() : c(r);
                }, i);
            }
            return u == e || o == e ? t() : a && a.indexOf(";") > -1 ? c(r) : t(d(e));
        }
        return function(u, o) {
            return u == e || o == e ? t() : c(r, i);
        };
    }
    function J(r, e, a) {
        for (var i = 3; i < arguments.length; i++) n.cc.push(arguments[i]);
        return t(f(e, a), h(r, e), s);
    }
    function rr(r) {
        return r == "}" ? t() : c(b, rr);
    }
    function W(r, e) {
        if (v) {
            if (r == ":") return t(p);
            if (e == "?") return t(W);
        }
    }
    function Lr(r, e) {
        if (v && (r == ":" || e == "in")) return t(p);
    }
    function Ar(r) {
        if (v && r == ":") return n.stream.match(/^\s*\w+\s+is\b/, !1) ? t(y, Mr, p) : t(p);
    }
    function Mr(r, e) {
        if (e == "is") return n.marked = "keyword", t();
    }
    function p(r, e) {
        return e == "keyof" || e == "typeof" || e == "infer" || e == "readonly" ? (n.marked = "keyword", 
        t(e == "typeof" ? g : p)) : r == "variable" || e == "void" ? (n.marked = "type", 
        t(j)) : e == "|" || e == "&" ? t(p) : r == "string" || r == "number" || r == "atom" ? t(j) : r == "[" ? t(f("]"), h(p, "]", ","), s, j) : r == "{" ? t(f("}"), fr, s, j) : r == "(" ? t(h(dr, ")"), Qr, j) : r == "<" ? t(h(p, ">"), p) : r == "quasi" ? c(lr, j) : void 0;
    }
    function Qr(r) {
        if (r == "=>") return t(p);
    }
    function fr(r) {
        return r.match(/[\}\)\]]/) ? t() : r == "," || r == ";" ? t(fr) : c(K, fr);
    }
    function K(r, e) {
        return r == "variable" || n.style == "keyword" ? (n.marked = "property", 
        t(K)) : e == "?" || r == "number" || r == "string" ? t(K) : r == ":" ? t(p) : r == "[" ? t(d("variable"), Lr, d("]"), K) : r == "(" ? c(D, K) : r.match(/[;\}\)\],]/) ? void 0 : t();
    }
    function lr(r, e) {
        return r != "quasi" ? c() : e.slice(e.length - 2) != "${" ? t(lr) : t(p, Rr);
    }
    function Rr(r) {
        if (r == "}") return n.marked = "string.special", n.state.tokenize = U, 
        t(lr);
    }
    function dr(r, e) {
        return r == "variable" && n.stream.match(/^\s*[?:]/, !1) || e == "?" ? t(dr) : r == ":" ? t(p) : r == "spread" ? t(dr) : c(p);
    }
    function j(r, e) {
        return e == "<" ? t(f(">"), h(p, ">"), s, j) : e == "|" || r == "." || e == "&" ? t(p) : r == "[" ? t(p, d("]"), j) : e == "extends" || e == "implements" ? (n.marked = "keyword", 
        t(p)) : e == "?" ? t(p, d(":"), p) : void 0;
    }
    function Xr(r, e) {
        if (e == "<") return t(f(">"), h(p, ">"), s, j);
    }
    function er() {
        return c(p, Yr);
    }
    function Yr(r, e) {
        if (e == "=") return t(p);
    }
    function mr(r, e) {
        return e == "enum" ? (n.marked = "keyword", t(Er)) : c(z, W, $, re);
    }
    function z(r, e) {
        return v && R(e) ? (n.marked = "keyword", t(z)) : r == "variable" ? (N(e), 
        t()) : r == "spread" ? t(z) : r == "[" ? J(Zr, "]") : r == "{" ? J(zr, "}") : void 0;
    }
    function zr(r, e) {
        return r != "variable" || n.stream.match(/^\s*:/, !1) ? (r == "variable" && (n.marked = "property"), 
        r == "spread" ? t(z) : r == "}" ? c() : r == "[" ? t(y, d("]"), d(":"), zr) : t(d(":"), z, $)) : (N(e), 
        t($));
    }
    function Zr() {
        return c(z, $);
    }
    function $(r, e) {
        if (e == "=") return t(g);
    }
    function re(r) {
        if (r == ",") return t(mr);
    }
    function jr(r, e) {
        if (r == "keyword b" && e == "else") return t(f("form", "else"), b, s);
    }
    function Tr(r, e) {
        return e == "await" ? t(Tr) : r == "(" ? t(f(")"), ee, s) : void 0;
    }
    function ee(r) {
        return r == "var" ? t(mr, B) : r == "variable" ? t(B) : c(B);
    }
    function B(r, e) {
        return r == ")" ? t() : r == ";" ? t(B) : e == "in" || e == "of" ? (n.marked = "keyword", 
        t(y, B)) : c(y, B);
    }
    function O(r, e) {
        return e == "*" ? (n.marked = "keyword", t(O)) : r == "variable" ? (N(e), 
        t(O)) : r == "(" ? t(q, f(")"), h(S, ")"), s, Ar, b, A) : v && e == "<" ? t(f(">"), h(er, ">"), s, O) : void 0;
    }
    function D(r, e) {
        return e == "*" ? (n.marked = "keyword", t(D)) : r == "variable" ? (N(e), 
        t(D)) : r == "(" ? t(q, f(")"), h(S, ")"), s, Ar, A) : v && e == "<" ? t(f(">"), h(er, ">"), s, D) : void 0;
    }
    function $r(r, e) {
        return r == "keyword" || r == "variable" ? (n.marked = "type", t($r)) : e == "<" ? t(f(">"), h(er, ">"), s) : void 0;
    }
    function S(r, e) {
        return e == "@" && t(y, S), r == "spread" ? t(S) : v && R(e) ? (n.marked = "keyword", 
        t(S)) : v && r == "this" ? t(W, $) : c(z, W, $);
    }
    function te(r, e) {
        return r == "variable" ? Or(r, e) : tr(r, e);
    }
    function Or(r, e) {
        if (r == "variable") return N(e), t(tr);
    }
    function tr(r, e) {
        return e == "<" ? t(f(">"), h(er, ">"), s, tr) : e == "extends" || e == "implements" || v && r == "," ? (e == "implements" && (n.marked = "keyword"), 
        t(v ? p : y, tr)) : r == "{" ? t(f("}"), T, s) : void 0;
    }
    function T(r, e) {
        return r == "async" || r == "variable" && (e == "static" || e == "get" || e == "set" || v && R(e)) && n.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1) ? (n.marked = "keyword", 
        t(T)) : r == "variable" || n.style == "keyword" ? (n.marked = "property", 
        t(nr, T)) : r == "number" || r == "string" ? t(nr, T) : r == "[" ? t(y, W, d("]"), nr, T) : e == "*" ? (n.marked = "keyword", 
        t(T)) : v && r == "(" ? c(D, T) : r == ";" || r == "," ? t(T) : r == "}" ? t() : e == "@" ? t(y, T) : void 0;
    }
    function nr(r, e) {
        if (e == "!" || e == "?") return t(nr);
        if (r == ":") return t(p, $);
        if (e == "=") return t(g);
        var a = n.state.lexical.prev;
        return c(a && a.info == "interface" ? D : O);
    }
    function ne(r, e) {
        return e == "*" ? (n.marked = "keyword", t(pr, d(";"))) : e == "default" ? (n.marked = "keyword", 
        t(y, d(";"))) : r == "{" ? t(h(_r, "}"), pr, d(";")) : c(b);
    }
    function _r(r, e) {
        return e == "as" ? (n.marked = "keyword", t(d("variable"))) : r == "variable" ? c(g, _r) : void 0;
    }
    function ae(r) {
        return r == "string" ? t() : r == "(" ? c(y) : r == "." ? c(E) : c(ar, qr, pr);
    }
    function ar(r, e) {
        return r == "{" ? J(ar, "}") : (r == "variable" && N(e), e == "*" && (n.marked = "keyword"), 
        t(ie));
    }
    function qr(r) {
        if (r == ",") return t(ar, qr);
    }
    function ie(r, e) {
        if (e == "as") return n.marked = "keyword", t(ar);
    }
    function pr(r, e) {
        if (e == "from") return n.marked = "keyword", t(y);
    }
    function oe(r) {
        return r == "]" ? t() : c(h(g, "]"));
    }
    function Er() {
        return c(f("form"), z, d("{"), f("}"), h(ue, "}"), s, s);
    }
    function ue() {
        return c(z, $);
    }
    return q.lex = X.lex = !0, A.lex = !0, s.lex = !0, {
        name: x.name,
        startState: function(r) {
            var e = {
                tokenize: _,
                lastType: "sof",
                cc: [],
                lexical: new br(-r, 0, "block", !1),
                localVars: x.localVars,
                context: x.localVars && new G(null, null, !1),
                indented: 0
            };
            return x.globalVars && typeof x.globalVars == "object" && (e.globalVars = x.globalVars), 
            e;
        },
        token: function(r, e) {
            if (r.sol() && (e.lexical.hasOwnProperty("align") || (e.lexical.align = !1), 
            e.indented = r.indentation(), ur(r, e)), e.tokenize != Q && r.eatSpace()) return null;
            var a = e.tokenize(r, e);
            return F == "comment" ? a : (e.lastType = F != "operator" || L != "++" && L != "--" ? F : "incdec", 
            function(i, u, o, l, k) {
                var m = i.cc;
                for (n.state = i, n.stream = k, n.marked = null, n.cc = m, n.style = u, 
                i.lexical.hasOwnProperty("align") || (i.lexical.align = !0); ;) if ((m.length ? m.pop() : vr ? y : b)(o, l)) {
                    for (;m.length && m[m.length - 1].lex; ) m.pop()();
                    return n.marked ? n.marked : o == "variable" && Wr(i, l) ? "variableName.local" : u;
                }
            }(e, a, F, L, r));
        },
        indent: function(r, e, a) {
            if (r.tokenize == Q || r.tokenize == U) return null;
            if (r.tokenize != _) return 0;
            var i, u = e && e.charAt(0), o = r.lexical;
            if (!/^\s*else\b/.test(e)) for (var l = r.cc.length - 1; l >= 0; --l) {
                var k = r.cc[l];
                if (k == s) o = o.prev; else if (k != jr && k != A) break;
            }
            for (;(o.type == "stat" || o.type == "form") && (u == "}" || (i = r.cc[r.cc.length - 1]) && (i == E || i == C) && !/^[,\.=+\-*:?[\(]/.test(e)); ) o = o.prev;
            kr && o.type == ")" && o.prev.type == "stat" && (o = o.prev);
            var m = o.type, V = u == m;
            return m == "vardef" ? o.indented + (r.lastType == "operator" || r.lastType == "," ? o.info.length + 1 : 0) : m == "form" && u == "{" ? o.indented : m == "form" ? o.indented + a.unit : m == "stat" ? o.indented + (function(Ir, Sr) {
                return Ir.lastType == "operator" || Ir.lastType == "," || wr.test(Sr.charAt(0)) || /[,.]/.test(Sr.charAt(0));
            }(r, e) ? kr || a.unit : 0) : o.info != "switch" || V || x.doubleIndentSwitch == 0 ? o.align ? o.column + (V ? 0 : 1) : o.indented + (V ? 0 : a.unit) : o.indented + (/^(?:case|default)\b/.test(e) ? a.unit : 2 * a.unit);
        },
        languageData: {
            indentOnInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            commentTokens: vr ? void 0 : {
                line: "//",
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            closeBrackets: {
                brackets: [ "(", "[", "{", "'", '"', "`" ]
            },
            wordChars: "$"
        }
    };
}

const se = ir({
    name: "javascript"
}), ce = ir({
    name: "json",
    json: !0
}), fe = ir({
    name: "json",
    jsonld: !0
}), le = ir({
    name: "typescript",
    typescript: !0
});

export {
    se as javascript,
    ce as json,
    fe as jsonld,
    le as typescript
};