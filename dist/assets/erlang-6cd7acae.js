var Z = [ "-type", "-spec", "-export_type", "-opaque" ], q = [ "after", "begin", "catch", "case", "cond", "end", "fun", "if", "let", "of", "query", "receive", "try", "when" ], T = /[\->,;]/, D = [ "->", ";", "," ], N = [ "and", "andalso", "band", "bnot", "bor", "bsl", "bsr", "bxor", "div", "not", "or", "orelse", "rem", "xor" ], O = /[\+\-\*\/<>=\|:!]/, $ = [ "=", "+", "-", "*", "/", ">", ">=", "<", "=<", "=:=", "==", "=/=", "/=", "||", "<-", "!" ], j = /[<\(\[\{]/, k = [ "<<", "(", "[", "{" ], B = /[>\)\]\}]/, x = [ "}", "]", ")", ">>" ], C = [ "is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_record", "is_reference", "is_tuple", "atom", "binary", "bitstring", "boolean", "function", "integer", "list", "number", "pid", "port", "record", "reference", "tuple" ], F = [ "abs", "adler32", "adler32_combine", "alive", "apply", "atom_to_binary", "atom_to_list", "binary_to_atom", "binary_to_existing_atom", "binary_to_list", "binary_to_term", "bit_size", "bitstring_to_list", "byte_size", "check_process_code", "contact_binary", "crc32", "crc32_combine", "date", "decode_packet", "delete_module", "disconnect_node", "element", "erase", "exit", "float", "float_to_list", "garbage_collect", "get", "get_keys", "group_leader", "halt", "hd", "integer_to_list", "internal_bif", "iolist_size", "iolist_to_binary", "is_alive", "is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_process_alive", "is_record", "is_reference", "is_tuple", "length", "link", "list_to_atom", "list_to_binary", "list_to_bitstring", "list_to_existing_atom", "list_to_float", "list_to_integer", "list_to_pid", "list_to_tuple", "load_module", "make_ref", "module_loaded", "monitor_node", "node", "node_link", "node_unlink", "nodes", "notalive", "now", "open_port", "pid_to_list", "port_close", "port_command", "port_connect", "port_control", "pre_loaded", "process_flag", "process_info", "processes", "purge_module", "put", "register", "registered", "round", "self", "setelement", "size", "spawn", "spawn_link", "spawn_monitor", "spawn_opt", "split_binary", "statistics", "term_to_binary", "time", "throw", "tl", "trunc", "tuple_size", "tuple_to_list", "unlink", "unregister", "whereis" ], d = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/, G = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;

function S(t, e, i) {
    if (t.current().length == 1 && e.test(t.current())) {
        for (t.backUp(1); e.test(t.peek()); ) if (t.next(), u(t.current(), i)) return !0;
        t.backUp(t.current().length - 1);
    }
    return !1;
}

function W(t, e, i) {
    if (t.current().length == 1 && e.test(t.current())) {
        for (;e.test(t.peek()); ) t.next();
        for (;0 < t.current().length; ) {
            if (u(t.current(), i)) return !0;
            t.backUp(1);
        }
        t.next();
    }
    return !1;
}

function z(t) {
    return A(t, '"', "\\");
}

function U(t) {
    return A(t, "'", "\\");
}

function A(t, e, i) {
    for (;!t.eol(); ) {
        var n = t.next();
        if (n == e) return !0;
        n == i && t.next();
    }
    return !1;
}

function u(t, e) {
    return -1 < e.indexOf(t);
}

function o(t, e, i) {
    switch (function(n, c) {
        c.type != "comment" && c.type != "whitespace" && (n.tokenStack = function(r, a) {
            var s = r.length - 1;
            return 0 < s && r[s].type === "record" && a.type === "dot" ? r.pop() : (0 < s && r[s].type === "group" && r.pop(), 
            r.push(a)), r;
        }(n.tokenStack, c), n.tokenStack = function(r) {
            if (!r.length) return r;
            var a = r.length - 1;
            if (r[a].type === "dot") return [];
            if (a > 1 && r[a].type === "fun" && r[a - 1].token === "fun") return r.slice(0, a - 1);
            switch (r[a].token) {
              case "}":
                return l(r, {
                    g: [ "{" ]
                });

              case "]":
                return l(r, {
                    i: [ "[" ]
                });

              case ")":
                return l(r, {
                    i: [ "(" ]
                });

              case ">>":
                return l(r, {
                    i: [ "<<" ]
                });

              case "end":
                return l(r, {
                    i: [ "begin", "case", "fun", "if", "receive", "try" ]
                });

              case ",":
                return l(r, {
                    e: [ "begin", "try", "when", "->", ",", "(", "[", "{", "<<" ]
                });

              case "->":
                return l(r, {
                    r: [ "when" ],
                    m: [ "try", "if", "case", "receive" ]
                });

              case ";":
                return l(r, {
                    E: [ "case", "fun", "if", "receive", "try", "when" ]
                });

              case "catch":
                return l(r, {
                    e: [ "try" ]
                });

              case "of":
                return l(r, {
                    e: [ "case" ]
                });

              case "after":
                return l(r, {
                    e: [ "receive", "try" ]
                });

              default:
                return r;
            }
        }(n.tokenStack));
    }(t, function(n, c) {
        return E(c.current(), c.column(), c.indentation(), n);
    }(i, e)), i) {
      case "atom":
      case "boolean":
        return "atom";

      case "attribute":
        return "attribute";

      case "builtin":
        return "builtin";

      case "close_paren":
      case "colon":
      case "dot":
      case "open_paren":
      case "separator":
      default:
        return null;

      case "comment":
        return "comment";

      case "error":
        return "error";

      case "fun":
        return "meta";

      case "function":
        return "tag";

      case "guard":
        return "property";

      case "keyword":
        return "keyword";

      case "macro":
        return "macroName";

      case "number":
        return "number";

      case "operator":
        return "operator";

      case "record":
        return "bracket";

      case "string":
        return "string";

      case "type":
        return "def";

      case "variable":
        return "variable";
    }
}

function E(t, e, i, n) {
    return {
        token: t,
        column: e,
        indent: i,
        type: n
    };
}

function H(t) {
    return E(t, 0, 0, t);
}

function m(t, e) {
    var i = t.tokenStack.length, n = e || 1;
    return !(i < n) && t.tokenStack[i - n];
}

function l(t, e) {
    for (var i in e) for (var n = t.length - 1, c = e[i], r = n - 1; -1 < r; r--) if (u(t[r].token, c)) {
        var a = t.slice(0, r);
        switch (i) {
          case "m":
            return a.concat(t[r]).concat(t[n]);

          case "r":
            return a.concat(t[n]);

          case "i":
            return a;

          case "g":
            return a.concat(H("group"));

          case "E":
          case "e":
            return a.concat(t[r]);
        }
    }
    return i == "E" ? [] : t;
}

function y(t, e) {
    var i = t.tokenStack, n = b(i, "token", e);
    return !!p(i[n]) && i[n];
}

function b(t, e, i) {
    for (var n = t.length - 1; -1 < n; n--) if (u(t[n][e], i)) return n;
    return !1;
}

function p(t) {
    return t !== !1 && t != null;
}

const I = {
    name: "erlang",
    startState: () => ({
        tokenStack: [],
        in_string: !1,
        in_atom: !1
    }),
    token: function(t, e) {
        if (e.in_string) return e.in_string = !z(t), o(e, t, "string");
        if (e.in_atom) return e.in_atom = !U(t), o(e, t, "atom");
        if (t.eatSpace()) return o(e, t, "whitespace");
        if (!m(e) && t.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) return u(t.current(), Z) ? o(e, t, "type") : o(e, t, "attribute");
        var i = t.next();
        if (i == "%") return t.skipToEnd(), o(e, t, "comment");
        if (i == ":") return o(e, t, "colon");
        if (i == "?") return t.eatSpace(), t.eatWhile(d), o(e, t, "macro");
        if (i == "#") return t.eatSpace(), t.eatWhile(d), o(e, t, "record");
        if (i == "$") return t.next() != "\\" || t.match(G) ? o(e, t, "number") : o(e, t, "error");
        if (i == ".") return o(e, t, "dot");
        if (i == "'") {
            if (!(e.in_atom = !U(t))) {
                if (t.match(/\s*\/\s*[0-9]/, !1)) return t.match(/\s*\/\s*[0-9]/, !0), 
                o(e, t, "fun");
                if (t.match(/\s*\(/, !1) || t.match(/\s*:/, !1)) return o(e, t, "function");
            }
            return o(e, t, "atom");
        }
        if (i == '"') return e.in_string = !z(t), o(e, t, "string");
        if (/[A-Z_Ø-ÞÀ-Ö]/.test(i)) return t.eatWhile(d), o(e, t, "variable");
        if (/[a-z_ß-öø-ÿ]/.test(i)) {
            if (t.eatWhile(d), t.match(/\s*\/\s*[0-9]/, !1)) return t.match(/\s*\/\s*[0-9]/, !0), 
            o(e, t, "fun");
            var n = t.current();
            return u(n, q) ? o(e, t, "keyword") : u(n, N) ? o(e, t, "operator") : t.match(/\s*\(/, !1) ? !u(n, F) || m(e).token == ":" && m(e, 2).token != "erlang" ? u(n, C) ? o(e, t, "guard") : o(e, t, "function") : o(e, t, "builtin") : function(r) {
                var a = r.match(/^\s*([^\s%])/, !1);
                return a ? a[1] : "";
            }(t) == ":" ? o(e, t, n == "erlang" ? "builtin" : "function") : u(n, [ "true", "false" ]) ? o(e, t, "boolean") : o(e, t, "atom");
        }
        var c = /[0-9]/;
        return c.test(i) ? (t.eatWhile(c), t.eat("#") ? t.eatWhile(/[0-9a-zA-Z]/) || t.backUp(1) : t.eat(".") && (t.eatWhile(c) ? t.eat(/[eE]/) && (t.eat(/[-+]/) ? t.eatWhile(c) || t.backUp(2) : t.eatWhile(c) || t.backUp(1)) : t.backUp(1)), 
        o(e, t, "number")) : S(t, j, k) ? o(e, t, "open_paren") : S(t, B, x) ? o(e, t, "close_paren") : W(t, T, D) ? o(e, t, "separator") : W(t, O, $) ? o(e, t, "operator") : o(e, t, null);
    },
    indent: function(t, e, i) {
        var n, c, r = p(c = e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/)) && c.index === 0 ? c[0] : "", a = m(t, 1), s = m(t, 2);
        return t.in_string || t.in_atom ? null : s ? a.token == "when" ? a.column + i.unit : r === "when" && s.type === "function" ? s.indent + i.unit : r === "(" && a.token === "fun" ? a.column + 3 : r === "catch" && (n = y(t, [ "try" ])) ? n.column : u(r, [ "end", "after", "of" ]) ? (n = y(t, [ "begin", "case", "fun", "if", "receive", "try" ])) ? n.column : null : u(r, x) ? (n = y(t, k)) ? n.column : null : u(a.token, [ ",", "|", "||" ]) || u(r, [ ",", "|", "||" ]) ? (n = function(g) {
            var _ = g.tokenStack.slice(0, -1), f = b(_, "type", [ "open_paren" ]);
            return !!p(_[f]) && _[f];
        }(t)) ? n.column + n.token.length : i.unit : a.token == "->" ? u(s.token, [ "receive", "case", "if", "try" ]) ? s.column + i.unit + i.unit : s.column + i.unit : u(a.token, k) ? a.column + a.token.length : (n = function(g) {
            var _ = g.tokenStack, f = b(_, "type", [ "open_paren", "separator", "keyword" ]), v = b(_, "type", [ "operator" ]);
            return p(f) && p(v) && f < v ? _[f + 1] : !!p(f) && _[f];
        }(t), p(n) ? n.column + i.unit : 0) : 0;
    },
    languageData: {
        commentTokens: {
            line: "%"
        }
    }
};

export {
    I as erlang
};