function o(e, r, t) {
    return r(t), t(e, r);
}

var p = /[a-z_]/, g = /[A-Z]/, l = /\d/, F = /[0-9A-Fa-f]/, v = /[0-7]/, c = /[a-z_A-Z0-9'\xa1-\uffff]/, u = /[-!#$%&*+.\/<=>?@\\^|~:]/, w = /[(),;[\]`{}]/, d = /[ \t\v\f]/;

function a(e, r) {
    if (e.eatWhile(d)) return null;
    var t = e.next();
    if (w.test(t)) {
        if (t == "{" && e.eat("-")) {
            var n = "comment";
            return e.eat("#") && (n = "meta"), o(e, r, m(n, 1));
        }
        return null;
    }
    if (t == "'") return e.eat("\\"), e.next(), e.eat("'") ? "string" : "error";
    if (t == '"') return o(e, r, h);
    if (g.test(t)) return e.eatWhile(c), e.eat(".") ? "qualifier" : "type";
    if (p.test(t)) return e.eatWhile(c), "variable";
    if (l.test(t)) {
        if (t == "0") {
            if (e.eat(/[xX]/)) return e.eatWhile(F), "integer";
            if (e.eat(/[oO]/)) return e.eatWhile(v), "number";
        }
        return e.eatWhile(l), n = "number", e.match(/^\.\d+/) && (n = "number"), 
        e.eat(/[eE]/) && (n = "number", e.eat(/[-+]/), e.eatWhile(l)), n;
    }
    return t == "." && e.eat(".") ? "keyword" : u.test(t) ? t == "-" && e.eat(/-/) && (e.eatWhile(/-/), 
    !e.eat(u)) ? (e.skipToEnd(), "comment") : (e.eatWhile(u), "variable") : "error";
}

function m(e, r) {
    return r == 0 ? a : function(t, n) {
        for (var i = r; !t.eol(); ) {
            var s = t.next();
            if (s == "{" && t.eat("-")) ++i; else if (s == "-" && t.eat("}") && --i == 0) return n(a), 
            e;
        }
        return n(m(e, i)), e;
    };
}

function h(e, r) {
    for (;!e.eol(); ) {
        var t = e.next();
        if (t == '"') return r(a), "string";
        if (t == "\\") {
            if (e.eol() || e.eat(d)) return r(x), "string";
            e.eat("&") || e.next();
        }
    }
    return r(a), "error";
}

function x(e, r) {
    return e.eat("\\") ? o(e, r, h) : (e.next(), r(a), "error");
}

var f = function() {
    var e = {};
    function r(t) {
        return function() {
            for (var n = 0; n < arguments.length; n++) e[arguments[n]] = t;
        };
    }
    return r("keyword")("case", "class", "data", "default", "deriving", "do", "else", "foreign", "if", "import", "in", "infix", "infixl", "infixr", "instance", "let", "module", "newtype", "of", "then", "type", "where", "_"), 
    r("keyword")("..", ":", "::", "=", "\\", "<-", "->", "@", "~", "=>"), r("builtin")("!!", "$!", "$", "&&", "+", "++", "-", ".", "/", "/=", "<", "<*", "<=", "<$>", "<*>", "=<<", "==", ">", ">=", ">>", ">>=", "^", "^^", "||", "*", "*>", "**"), 
    r("builtin")("Applicative", "Bool", "Bounded", "Char", "Double", "EQ", "Either", "Enum", "Eq", "False", "FilePath", "Float", "Floating", "Fractional", "Functor", "GT", "IO", "IOError", "Int", "Integer", "Integral", "Just", "LT", "Left", "Maybe", "Monad", "Nothing", "Num", "Ord", "Ordering", "Rational", "Read", "ReadS", "Real", "RealFloat", "RealFrac", "Right", "Show", "ShowS", "String", "True"), 
    r("builtin")("abs", "acos", "acosh", "all", "and", "any", "appendFile", "asTypeOf", "asin", "asinh", "atan", "atan2", "atanh", "break", "catch", "ceiling", "compare", "concat", "concatMap", "const", "cos", "cosh", "curry", "cycle", "decodeFloat", "div", "divMod", "drop", "dropWhile", "either", "elem", "encodeFloat", "enumFrom", "enumFromThen", "enumFromThenTo", "enumFromTo", "error", "even", "exp", "exponent", "fail", "filter", "flip", "floatDigits", "floatRadix", "floatRange", "floor", "fmap", "foldl", "foldl1", "foldr", "foldr1", "fromEnum", "fromInteger", "fromIntegral", "fromRational", "fst", "gcd", "getChar", "getContents", "getLine", "head", "id", "init", "interact", "ioError", "isDenormalized", "isIEEE", "isInfinite", "isNaN", "isNegativeZero", "iterate", "last", "lcm", "length", "lex", "lines", "log", "logBase", "lookup", "map", "mapM", "mapM_", "max", "maxBound", "maximum", "maybe", "min", "minBound", "minimum", "mod", "negate", "not", "notElem", "null", "odd", "or", "otherwise", "pi", "pred", "print", "product", "properFraction", "pure", "putChar", "putStr", "putStrLn", "quot", "quotRem", "read", "readFile", "readIO", "readList", "readLn", "readParen", "reads", "readsPrec", "realToFrac", "recip", "rem", "repeat", "replicate", "return", "reverse", "round", "scaleFloat", "scanl", "scanl1", "scanr", "scanr1", "seq", "sequence", "sequence_", "show", "showChar", "showList", "showParen", "showString", "shows", "showsPrec", "significand", "signum", "sin", "sinh", "snd", "span", "splitAt", "sqrt", "subtract", "succ", "sum", "tail", "take", "takeWhile", "tan", "tanh", "toEnum", "toInteger", "toRational", "truncate", "uncurry", "undefined", "unlines", "until", "unwords", "unzip", "unzip3", "userError", "words", "writeFile", "zip", "zip3", "zipWith", "zipWith3"), 
    e;
}();

const b = {
    name: "haskell",
    startState: function() {
        return {
            f: a
        };
    },
    copyState: function(e) {
        return {
            f: e.f
        };
    },
    token: function(e, r) {
        var t = r.f(e, function(i) {
            r.f = i;
        }), n = e.current();
        return f.hasOwnProperty(n) ? f[n] : t;
    },
    languageData: {
        commentTokens: {
            line: "--",
            block: {
                open: "{-",
                close: "-}"
            }
        }
    }
};

export {
    b as haskell
};