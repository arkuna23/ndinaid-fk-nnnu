function o(t) {
    l(t, "start");
    var r = {}, n = t.languageData || {}, p = !1;
    for (var i in t) if (i != n && t.hasOwnProperty(i)) for (var d = r[i] = [], a = t[i], e = 0; e < a.length; e++) {
        var u = a[e];
        d.push(new g(u, t)), (u.indent || u.dedent) && (p = !0);
    }
    return {
        name: n.name,
        startState: function() {
            return {
                state: "start",
                pending: null,
                indent: p ? [] : null
            };
        },
        copyState: function(s) {
            var f = {
                state: s.state,
                pending: s.pending,
                indent: s.indent && s.indent.slice(0)
            };
            return s.stack && (f.stack = s.stack.slice(0)), f;
        },
        token: h(r),
        indent: c(r, n),
        languageData: n
    };
}

function l(t, r) {
    if (!t.hasOwnProperty(r)) throw new Error("Undefined state " + r + " in simple mode");
}

function g(t, r) {
    (t.next || t.push) && l(r, t.next || t.push), this.regex = function(n, p) {
        if (!n) return /(?:)/;
        var i = "";
        return n instanceof RegExp ? (n.ignoreCase && (i = "i"), n = n.source) : n = String(n), 
        new RegExp((p === !1 ? "" : "^") + "(?:" + n + ")", i);
    }(t.regex), this.token = function(n) {
        if (!n) return null;
        if (n.apply) return n;
        if (typeof n == "string") return n.replace(/\./g, " ");
        for (var p = [], i = 0; i < n.length; i++) p.push(n[i] && n[i].replace(/\./g, " "));
        return p;
    }(t.token), this.data = t;
}

function h(t) {
    return function(r, n) {
        if (n.pending) {
            var p = n.pending.shift();
            return n.pending.length == 0 && (n.pending = null), r.pos += p.text.length, 
            p.token;
        }
        for (var i = t[n.state], d = 0; d < i.length; d++) {
            var a = i[d], e = (!a.data.sol || r.sol()) && r.match(a.regex);
            if (e) {
                a.data.next ? n.state = a.data.next : a.data.push ? ((n.stack || (n.stack = [])).push(n.state), 
                n.state = a.data.push) : a.data.pop && n.stack && n.stack.length && (n.state = n.stack.pop()), 
                a.data.indent && n.indent.push(r.indentation() + r.indentUnit), 
                a.data.dedent && n.indent.pop();
                var u = a.token;
                if (u && u.apply && (u = u(e)), e.length > 2 && a.token && typeof a.token != "string") {
                    n.pending = [];
                    for (var s = 2; s < e.length; s++) e[s] && n.pending.push({
                        text: e[s],
                        token: a.token[s - 1]
                    });
                    return r.backUp(e[0].length - (e[1] ? e[1].length : 0)), u[0];
                }
                return u && u.join ? u[0] : u;
            }
        }
        return r.next(), null;
    };
}

function c(t, r) {
    return function(n, p) {
        if (n.indent == null || r.dontIndentStates && r.doneIndentState.indexOf(n.state) > -1) return null;
        var i = n.indent.length - 1, d = t[n.state];
        n: for (;;) {
            for (var a = 0; a < d.length; a++) {
                var e = d[a];
                if (e.data.dedent && e.data.dedentIfLineStart !== !1) {
                    var u = e.regex.exec(p);
                    if (u && u[0]) {
                        i--, (e.next || e.push) && (d = t[e.next || e.push]), p = p.slice(u[0].length);
                        continue n;
                    }
                }
            }
            break;
        }
        return i < 0 ? 0 : n.indent[i];
    };
}

export {
    o as s
};