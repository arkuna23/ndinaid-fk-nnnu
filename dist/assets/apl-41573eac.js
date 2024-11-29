var o = {
    "+": [ "conjugate", "add" ],
    "−": [ "negate", "subtract" ],
    "×": [ "signOf", "multiply" ],
    "÷": [ "reciprocal", "divide" ],
    "⌈": [ "ceiling", "greaterOf" ],
    "⌊": [ "floor", "lesserOf" ],
    "∣": [ "absolute", "residue" ],
    "⍳": [ "indexGenerate", "indexOf" ],
    "?": [ "roll", "deal" ],
    "⋆": [ "exponentiate", "toThePowerOf" ],
    "⍟": [ "naturalLog", "logToTheBase" ],
    "○": [ "piTimes", "circularFuncs" ],
    "!": [ "factorial", "binomial" ],
    "⌹": [ "matrixInverse", "matrixDivide" ],
    "<": [ null, "lessThan" ],
    "≤": [ null, "lessThanOrEqual" ],
    "=": [ null, "equals" ],
    ">": [ null, "greaterThan" ],
    "≥": [ null, "greaterThanOrEqual" ],
    "≠": [ null, "notEqual" ],
    "≡": [ "depth", "match" ],
    "≢": [ null, "notMatch" ],
    "∈": [ "enlist", "membership" ],
    "⍷": [ null, "find" ],
    "∪": [ "unique", "union" ],
    "∩": [ null, "intersection" ],
    "∼": [ "not", "without" ],
    "∨": [ null, "or" ],
    "∧": [ null, "and" ],
    "⍱": [ null, "nor" ],
    "⍲": [ null, "nand" ],
    "⍴": [ "shapeOf", "reshape" ],
    ",": [ "ravel", "catenate" ],
    "⍪": [ null, "firstAxisCatenate" ],
    "⌽": [ "reverse", "rotate" ],
    "⊖": [ "axis1Reverse", "axis1Rotate" ],
    "⍉": [ "transpose", null ],
    "↑": [ "first", "take" ],
    "↓": [ null, "drop" ],
    "⊂": [ "enclose", "partitionWithAxis" ],
    "⊃": [ "diclose", "pick" ],
    "⌷": [ null, "index" ],
    "⍋": [ "gradeUp", null ],
    "⍒": [ "gradeDown", null ],
    "⊤": [ "encode", null ],
    "⊥": [ "decode", null ],
    "⍕": [ "format", "formatByExample" ],
    "⍎": [ "execute", null ],
    "⊣": [ "stop", "left" ],
    "⊢": [ "pass", "right" ]
}, s = /[\.\/⌿⍀¨⍣]/, i = /⍬/, u = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/, c = /←/, p = /[⍝#].*$/;

const d = {
    name: "apl",
    startState: function() {
        return {
            prev: !1,
            func: !1,
            op: !1,
            string: !1,
            escape: !1
        };
    },
    token: function(t, n) {
        var e, a, l;
        return t.eatSpace() ? null : (e = t.next()) === '"' || e === "'" ? (t.eatWhile((a = e, 
        l = !1, function(r) {
            return l = r, r !== a || l === "\\";
        })), t.next(), n.prev = !0, "string") : /[\[{\(]/.test(e) ? (n.prev = !1, 
        null) : /[\]}\)]/.test(e) ? (n.prev = !0, null) : i.test(e) ? (n.prev = !1, 
        "atom") : /[¯\d]/.test(e) ? (n.func ? (n.func = !1, n.prev = !1) : n.prev = !0, 
        t.eatWhile(/[\w\.]/), "number") : s.test(e) || c.test(e) ? "operator" : u.test(e) ? (n.func = !0, 
        n.prev = !1, o[e] ? "variableName.function.standard" : "variableName.function") : p.test(e) ? (t.skipToEnd(), 
        "comment") : e === "∘" && t.peek() === "." ? (t.next(), "variableName.function") : (t.eatWhile(/[\w\$_]/), 
        n.prev = !0, "keyword");
    }
};

export {
    d as apl
};