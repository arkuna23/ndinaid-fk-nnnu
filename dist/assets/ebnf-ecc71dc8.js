var m = 0, h = 1, a = 0, c = 1, r = 2;

const s = {
    name: "ebnf",
    startState: function() {
        return {
            stringType: null,
            commentType: null,
            braced: 0,
            lhs: !0,
            localState: null,
            stack: [],
            inDefinition: !1
        };
    },
    token: function(e, t) {
        if (e) {
            switch (t.stack.length === 0 && (e.peek() == '"' || e.peek() == "'" ? (t.stringType = e.peek(), 
            e.next(), t.stack.unshift(c)) : e.match("/*") ? (t.stack.unshift(a), 
            t.commentType = m) : e.match("(*") && (t.stack.unshift(a), t.commentType = h)), 
            t.stack[0]) {
              case c:
                for (;t.stack[0] === c && !e.eol(); ) e.peek() === t.stringType ? (e.next(), 
                t.stack.shift()) : e.peek() === "\\" ? (e.next(), e.next()) : e.match(/^.[^\\\"\']*/);
                return t.lhs ? "property" : "string";

              case a:
                for (;t.stack[0] === a && !e.eol(); ) t.commentType === m && e.match("*/") || t.commentType === h && e.match("*)") ? (t.stack.shift(), 
                t.commentType = null) : e.match(/^.[^\*]*/);
                return "comment";

              case r:
                for (;t.stack[0] === r && !e.eol(); ) e.match(/^[^\]\\]+/) || e.match(".") || t.stack.shift();
                return "operator";
            }
            var i = e.peek();
            switch (i) {
              case "[":
                return e.next(), t.stack.unshift(r), "bracket";

              case ":":
              case "|":
              case ";":
                return e.next(), "operator";

              case "%":
                if (e.match("%%")) return "header";
                if (e.match(/[%][A-Za-z]+/)) return "keyword";
                if (e.match(/[%][}]/)) return "bracket";
                break;

              case "/":
                if (e.match(/[\/][A-Za-z]+/)) return "keyword";

              case "\\":
                if (e.match(/[\][a-z]+/)) return "string.special";

              case ".":
                if (e.match(".")) return "atom";

              case "*":
              case "-":
              case "+":
              case "^":
                if (e.match(i)) return "atom";

              case "$":
                if (e.match("$$")) return "builtin";
                if (e.match(/[$][0-9]+/)) return "variableName.special";

              case "<":
                if (e.match(/<<[a-zA-Z_]+>>/)) return "builtin";
            }
            return e.match("//") ? (e.skipToEnd(), "comment") : e.match("return") ? "operator" : e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/) ? e.match(/(?=[\(.])/) ? "variable" : e.match(/(?=[\s\n]*[:=])/) ? "def" : "variableName.special" : [ "[", "]", "(", ")" ].indexOf(e.peek()) != -1 ? (e.next(), 
            "bracket") : (e.eatSpace() || e.next(), null);
        }
    }
};

export {
    s as ebnf
};