var l = {};

function c(t, e) {
    for (var n = 0; n < e.length; n++) l[e[n]] = t;
}

var k = [ "true", "false" ], h = [ "if", "then", "do", "else", "elif", "while", "until", "for", "in", "esac", "fi", "fin", "fil", "done", "exit", "set", "unset", "export", "function" ], p = [ "ab", "awk", "bash", "beep", "cat", "cc", "cd", "chown", "chmod", "chroot", "clear", "cp", "curl", "cut", "diff", "echo", "find", "gawk", "gcc", "get", "git", "grep", "hg", "kill", "killall", "ln", "ls", "make", "mkdir", "openssl", "mv", "nc", "nl", "node", "npm", "ping", "ps", "restart", "rm", "rmdir", "sed", "service", "sh", "shopt", "shred", "source", "sort", "sleep", "ssh", "start", "stop", "su", "sudo", "svn", "tee", "telnet", "top", "touch", "vi", "vim", "wall", "wc", "wget", "who", "write", "yes", "zsh" ];

function g(t, e) {
    if (t.eatSpace()) return null;
    var n, i = t.sol(), r = t.next();
    if (r === "\\") return t.next(), null;
    if (r === "'" || r === '"' || r === "`") return e.tokens.unshift(u(r, r === "`" ? "quote" : "string")), 
    a(t, e);
    if (r === "#") return i && t.eat("!") ? (t.skipToEnd(), "meta") : (t.skipToEnd(), 
    "comment");
    if (r === "$") return e.tokens.unshift(d), a(t, e);
    if (r === "+" || r === "=") return "operator";
    if (r === "-") return t.eat("-"), t.eatWhile(/\w/), "attribute";
    if (r == "<") {
        if (t.match("<<")) return "operator";
        var s = t.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);
        if (s) return e.tokens.unshift((n = s[1] || s[2], function(f, m) {
            return f.sol() && f.string == n && m.tokens.shift(), f.skipToEnd(), 
            "string.special";
        })), "string.special";
    }
    if (/\d/.test(r) && (t.eatWhile(/\d/), t.eol() || !/\w/.test(t.peek()))) return "number";
    t.eatWhile(/[\w-]/);
    var o = t.current();
    return t.peek() === "=" && /\w+/.test(o) ? "def" : l.hasOwnProperty(o) ? l[o] : null;
}

function u(t, e) {
    var n = t == "(" ? ")" : t == "{" ? "}" : t;
    return function(i, r) {
        for (var s, o = !1; (s = i.next()) != null; ) {
            if (s === n && !o) {
                r.tokens.shift();
                break;
            }
            if (s === "$" && !o && t !== "'" && i.peek() != n) {
                o = !0, i.backUp(1), r.tokens.unshift(d);
                break;
            }
            if (!o && t !== n && s === t) return r.tokens.unshift(u(t, e)), a(i, r);
            if (!o && /['"]/.test(s) && !/['"]/.test(t)) {
                r.tokens.unshift(w(s, "string")), i.backUp(1);
                break;
            }
            o = !o && s === "\\";
        }
        return e;
    };
}

function w(t, e) {
    return function(n, i) {
        return i.tokens[0] = u(t, e), n.next(), a(n, i);
    };
}

c("atom", k), c("keyword", h), c("builtin", p);

var d = function(t, e) {
    e.tokens.length > 1 && t.eat("$");
    var n = t.next();
    return /['"({]/.test(n) ? (e.tokens[0] = u(n, n == "(" ? "quote" : n == "{" ? "def" : "string"), 
    a(t, e)) : (/\d/.test(n) || t.eatWhile(/\w/), e.tokens.shift(), "def");
};

function a(t, e) {
    return (e.tokens[0] || g)(t, e);
}

const v = {
    name: "shell",
    startState: function() {
        return {
            tokens: []
        };
    },
    token: function(t, e) {
        return a(t, e);
    },
    languageData: {
        autocomplete: k.concat(h, p),
        closeBrackets: {
            brackets: [ "(", "[", "{", "'", '"', "`" ]
        },
        commentTokens: {
            line: "#"
        }
    }
};

export {
    v as shell
};