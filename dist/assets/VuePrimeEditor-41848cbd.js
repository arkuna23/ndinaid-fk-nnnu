import {
    d as ue,
    i as P,
    a2 as Y,
    a0 as ce,
    e as de,
    o as ee,
    c as te,
    t as T,
    B as he,
    D as ge,
    k as fe,
    a as ne,
    x as pe,
    __tla as me
} from "./index-6c08ea4c.js";

let ae, ye = Promise.all([ (() => {
    try {
        return me;
    } catch {}
})() ]).then(async () => {
    function K() {
        return K = Object.assign || function(e) {
            for (var u = 1; u < arguments.length; u++) {
                var c = arguments[u];
                for (var f in c) Object.prototype.hasOwnProperty.call(c, f) && (e[f] = c[f]);
            }
            return e;
        }, K.apply(this, arguments);
    }
    var ie = typeof window < "u" && navigator && /Win/i.test(navigator.platform), M = typeof window < "u" && navigator && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), re = ue({
        props: {
            lineNumbers: {
                type: Boolean,
                default: !1
            },
            autoStyleLineNumbers: {
                type: Boolean,
                default: !0
            },
            readonly: {
                type: Boolean,
                default: !1
            },
            modelValue: {
                type: String,
                default: ""
            },
            highlight: {
                type: Function,
                required: !0
            },
            tabSize: {
                type: Number,
                default: 2
            },
            insertSpaces: {
                type: Boolean,
                default: !0
            },
            ignoreTabKey: {
                type: Boolean,
                default: !1
            },
            placeholder: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {
                capture: !0,
                history: {
                    stack: [],
                    offset: -1
                },
                lineNumbersHeight: "20px",
                codeData: ""
            };
        },
        watch: {
            modelValue: {
                immediate: !0,
                handler: function(e) {
                    this.codeData = e || "";
                }
            },
            content: {
                immediate: !0,
                handler: function() {
                    var e = this;
                    this.lineNumbers && this.$nextTick(function() {
                        e.setLineNumbersHeight();
                    });
                }
            },
            lineNumbers: function() {
                var e = this;
                this.$nextTick(function() {
                    e.styleLineNumbers(), e.setLineNumbersHeight();
                });
            }
        },
        computed: {
            isEmpty: function() {
                return this.codeData.length === 0;
            },
            content: function() {
                return this.highlight(this.codeData) + "<br />";
            },
            lineNumbersCount: function() {
                return this.codeData.split(/\r\n|\n/).length;
            }
        },
        mounted: function() {
            this._recordCurrentState(), this.styleLineNumbers();
        },
        methods: {
            setLineNumbersHeight: function() {
                this.lineNumbersHeight = getComputedStyle(this.$refs.pre).height;
            },
            styleLineNumbers: function() {
                if (this.lineNumbers && this.autoStyleLineNumbers) {
                    var e = this.$refs.pre, u = this.$el.querySelector(".prism-editor__line-numbers"), c = window.getComputedStyle(e);
                    this.$nextTick(function() {
                        var f = "border-top-left-radius", y = "border-bottom-left-radius";
                        u && (u.style[f] = c[f], u.style[y] = c[y], e.style[f] = "0", 
                        e.style[y] = "0", [ "background-color", "margin-top", "padding-top", "font-family", "font-size", "line-height" ].forEach(function(d) {
                            u.style[d] = c[d];
                        }), u.style["margin-bottom"] = "-" + c["padding-top"]);
                    });
                }
            },
            _recordCurrentState: function() {
                var e = this.$refs.textarea;
                if (e) {
                    var u = e.value, c = e.selectionStart, f = e.selectionEnd;
                    this._recordChange({
                        value: u,
                        selectionStart: c,
                        selectionEnd: f
                    });
                }
            },
            _getLines: function(e, u) {
                return e.substring(0, u).split(`
`);
            },
            _applyEdits: function(e) {
                var u = this.$refs.textarea, c = this.history.stack[this.history.offset];
                c && u && (this.history.stack[this.history.offset] = K({}, c, {
                    selectionStart: u.selectionStart,
                    selectionEnd: u.selectionEnd
                })), this._recordChange(e), this._updateInput(e);
            },
            _recordChange: function(e, u) {
                u === void 0 && (u = !1);
                var c = this.history, f = c.stack, y = c.offset;
                if (f.length && y > -1) {
                    this.history.stack = f.slice(0, y + 1);
                    var d = this.history.stack.length;
                    if (d > 100) {
                        var a = d - 100;
                        this.history.stack = f.slice(a, d), this.history.offset = Math.max(this.history.offset - a, 0);
                    }
                }
                var g = Date.now();
                if (u) {
                    var p = this.history.stack[this.history.offset];
                    if (p && g - p.timestamp < 3e3) {
                        var k, F, A = /[^a-z0-9]([a-z0-9]+)$/i, E = (k = this._getLines(p.value, p.selectionStart).pop()) === null || k === void 0 ? void 0 : k.match(A), w = (F = this._getLines(e.value, e.selectionStart).pop()) === null || F === void 0 ? void 0 : F.match(A);
                        if (E && w && w[1].startsWith(E[1])) return void (this.history.stack[this.history.offset] = K({}, e, {
                            timestamp: g
                        }));
                    }
                }
                this.history.stack.push(K({}, e, {
                    timestamp: g
                })), this.history.offset++;
            },
            _updateInput: function(e) {
                var u = this.$refs.textarea;
                u && (u.value = e.value, u.selectionStart = e.selectionStart, u.selectionEnd = e.selectionEnd, 
                this.$emit("update:modelValue", e.value));
            },
            handleChange: function(e) {
                var u = e.target, c = u.value, f = u.selectionStart, y = u.selectionEnd;
                this._recordChange({
                    value: c,
                    selectionStart: f,
                    selectionEnd: y
                }, !0), this.$emit("update:modelValue", c);
            },
            _undoEdit: function() {
                var e = this.history, u = e.stack, c = e.offset, f = u[c - 1];
                f && (this._updateInput(f), this.history.offset = Math.max(c - 1, 0));
            },
            _redoEdit: function() {
                var e = this.history, u = e.stack, c = e.offset, f = u[c + 1];
                f && (this._updateInput(f), this.history.offset = Math.min(c + 1, u.length - 1));
            },
            handleKeyDown: function(e) {
                var u = this.tabSize, c = this.insertSpaces, f = this.ignoreTabKey;
                if (this.$emit("keydown", e), !e.defaultPrevented) {
                    e.keyCode === 27 && (e.target.blur(), this.$emit("blur", e));
                    var y = e.target, d = y.value, a = y.selectionStart, g = y.selectionEnd, p = (c ? " " : "\t").repeat(u);
                    if (e.keyCode === 9 && !f && this.capture) if (e.preventDefault(), 
                    e.shiftKey) {
                        var k = this._getLines(d, a), F = k.length - 1, A = this._getLines(d, g).length - 1, E = d.split(`
`).map(function(x, S) {
                            return S >= F && S <= A && x.startsWith(p) ? x.substring(p.length) : x;
                        }).join(`
`);
                        if (d !== E) {
                            var w = k[F];
                            this._applyEdits({
                                value: E,
                                selectionStart: w.startsWith(p) ? a - p.length : a,
                                selectionEnd: g - (d.length - E.length)
                            });
                        }
                    } else if (a !== g) {
                        var L = this._getLines(d, a), N = L.length - 1, n = this._getLines(d, g).length - 1, t = L[N];
                        this._applyEdits({
                            value: d.split(`
`).map(function(x, S) {
                                return S >= N && S <= n ? p + x : x;
                            }).join(`
`),
                            selectionStart: /\S/.test(t) ? a + p.length : a,
                            selectionEnd: g + p.length * (n - N + 1)
                        });
                    } else {
                        var r = a + p.length;
                        this._applyEdits({
                            value: d.substring(0, a) + p + d.substring(g),
                            selectionStart: r,
                            selectionEnd: r
                        });
                    } else if (e.keyCode === 8) {
                        var i = a !== g;
                        if (d.substring(0, a).endsWith(p) && !i) {
                            e.preventDefault();
                            var s = a - p.length;
                            this._applyEdits({
                                value: d.substring(0, a - p.length) + d.substring(g),
                                selectionStart: s,
                                selectionEnd: s
                            });
                        }
                    } else if (e.keyCode === 13) {
                        if (a === g) {
                            var l = this._getLines(d, a).pop(), o = l == null ? void 0 : l.match(/^\s+/);
                            if (o && o[0]) {
                                e.preventDefault();
                                var h = `
` + o[0], v = a + h.length;
                                this._applyEdits({
                                    value: d.substring(0, a) + h + d.substring(g),
                                    selectionStart: v,
                                    selectionEnd: v
                                });
                            }
                        }
                    } else if (e.keyCode === 57 || e.keyCode === 219 || e.keyCode === 222 || e.keyCode === 192) {
                        var m;
                        e.keyCode === 57 && e.shiftKey ? m = [ "(", ")" ] : e.keyCode === 219 ? m = e.shiftKey ? [ "{", "}" ] : [ "[", "]" ] : e.keyCode === 222 ? m = e.shiftKey ? [ '"', '"' ] : [ "'", "'" ] : e.keyCode !== 192 || e.shiftKey || (m = [ "`", "`" ]), 
                        a !== g && m && (e.preventDefault(), this._applyEdits({
                            value: d.substring(0, a) + m[0] + d.substring(a, g) + m[1] + d.substring(g),
                            selectionStart: a,
                            selectionEnd: g + 2
                        }));
                    } else !(M ? e.metaKey && e.keyCode === 90 : e.ctrlKey && e.keyCode === 90) || e.shiftKey || e.altKey ? (M ? e.metaKey && e.keyCode === 90 && e.shiftKey : ie ? e.ctrlKey && e.keyCode === 89 : e.ctrlKey && e.keyCode === 90 && e.shiftKey) && !e.altKey ? (e.preventDefault(), 
                    this._redoEdit()) : e.keyCode !== 77 || !e.ctrlKey || M && !e.shiftKey || (e.preventDefault(), 
                    this.capture = !this.capture) : (e.preventDefault(), this._undoEdit());
                }
            }
        },
        render: function() {
            var e = this, u = P("div", {
                class: "prism-editor__line-width-calc",
                style: "height: 0px; visibility: hidden; pointer-events: none;"
            }, "999"), c = P("div", {
                class: "prism-editor__line-numbers",
                style: {
                    "min-height": this.lineNumbersHeight
                },
                "aria-hidden": "true"
            }, [ u, Array.from(Array(this.lineNumbersCount).keys()).map(function(a, g) {
                return P("div", {
                    class: "prism-editor__line-number token comment"
                }, "" + ++g);
            }) ]), f = P("textarea", {
                ref: "textarea",
                onInput: this.handleChange,
                onKeydown: this.handleKeyDown,
                onClick: function(a) {
                    e.$emit("click", a);
                },
                onKeyup: function(a) {
                    e.$emit("keyup", a);
                },
                onFocus: function(a) {
                    e.$emit("focus", a);
                },
                onBlur: function(a) {
                    e.$emit("blur", a);
                },
                class: {
                    "prism-editor__textarea": !0,
                    "prism-editor__textarea--empty": this.isEmpty
                },
                spellCheck: "false",
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                "data-gramm": "false",
                placeholder: this.placeholder,
                "data-testid": "textarea",
                readonly: this.readonly,
                value: this.codeData
            }), y = P("pre", {
                ref: "pre",
                class: "prism-editor__editor",
                "data-testid": "preview",
                innerHTML: this.content
            }), d = P("div", {
                class: "prism-editor__container"
            }, [ f, y ]);
            return P("div", {
                class: "prism-editor-wrapper"
            }, [ this.lineNumbers && c, d ]);
        }
    }), Z = {
        exports: {}
    };
    (function(e) {
        var u = function(c) {
            var f = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, y = 0, d = {}, a = {
                manual: c.Prism && c.Prism.manual,
                disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function n(t) {
                        return t instanceof g ? new g(t.type, n(t.content), t.alias) : Array.isArray(t) ? t.map(n) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
                    },
                    type: function(n) {
                        return Object.prototype.toString.call(n).slice(8, -1);
                    },
                    objId: function(n) {
                        return n.__id || Object.defineProperty(n, "__id", {
                            value: ++y
                        }), n.__id;
                    },
                    clone: function n(t, r) {
                        var i, s;
                        switch (r = r || {}, a.util.type(t)) {
                          case "Object":
                            if (s = a.util.objId(t), r[s]) return r[s];
                            for (var l in i = {}, r[s] = i, t) t.hasOwnProperty(l) && (i[l] = n(t[l], r));
                            return i;

                          case "Array":
                            return s = a.util.objId(t), r[s] ? r[s] : (i = [], r[s] = i, 
                            t.forEach(function(o, h) {
                                i[h] = n(o, r);
                            }), i);

                          default:
                            return t;
                        }
                    },
                    getLanguage: function(n) {
                        for (;n; ) {
                            var t = f.exec(n.className);
                            if (t) return t[1].toLowerCase();
                            n = n.parentElement;
                        }
                        return "none";
                    },
                    setLanguage: function(n, t) {
                        n.className = n.className.replace(RegExp(f, "gi"), ""), 
                        n.classList.add("language-" + t);
                    },
                    currentScript: function() {
                        if (typeof document > "u") return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error();
                        } catch (i) {
                            var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) || [])[1];
                            if (n) {
                                var t = document.getElementsByTagName("script");
                                for (var r in t) if (t[r].src == n) return t[r];
                            }
                            return null;
                        }
                    },
                    isActive: function(n, t, r) {
                        for (var i = "no-" + t; n; ) {
                            var s = n.classList;
                            if (s.contains(t)) return !0;
                            if (s.contains(i)) return !1;
                            n = n.parentElement;
                        }
                        return !!r;
                    }
                },
                languages: {
                    plain: d,
                    plaintext: d,
                    text: d,
                    txt: d,
                    extend: function(n, t) {
                        var r = a.util.clone(a.languages[n]);
                        for (var i in t) r[i] = t[i];
                        return r;
                    },
                    insertBefore: function(n, t, r, i) {
                        var s = (i = i || a.languages)[n], l = {};
                        for (var o in s) if (s.hasOwnProperty(o)) {
                            if (o == t) for (var h in r) r.hasOwnProperty(h) && (l[h] = r[h]);
                            r.hasOwnProperty(o) || (l[o] = s[o]);
                        }
                        var v = i[n];
                        return i[n] = l, a.languages.DFS(a.languages, function(m, x) {
                            x === v && m != n && (this[m] = l);
                        }), l;
                    },
                    DFS: function n(t, r, i, s) {
                        s = s || {};
                        var l = a.util.objId;
                        for (var o in t) if (t.hasOwnProperty(o)) {
                            r.call(t, o, t[o], i || o);
                            var h = t[o], v = a.util.type(h);
                            v !== "Object" || s[l(h)] ? v !== "Array" || s[l(h)] || (s[l(h)] = !0, 
                            n(h, r, o, s)) : (s[l(h)] = !0, n(h, r, null, s));
                        }
                    }
                },
                plugins: {},
                highlightAll: function(n, t) {
                    a.highlightAllUnder(document, n, t);
                },
                highlightAllUnder: function(n, t, r) {
                    var i = {
                        callback: r,
                        container: n,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", i), i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)), 
                    a.hooks.run("before-all-elements-highlight", i);
                    for (var s, l = 0; s = i.elements[l++]; ) a.highlightElement(s, t === !0, i.callback);
                },
                highlightElement: function(n, t, r) {
                    var i = a.util.getLanguage(n), s = a.languages[i];
                    a.util.setLanguage(n, i);
                    var l = n.parentElement;
                    l && l.nodeName.toLowerCase() === "pre" && a.util.setLanguage(l, i);
                    var o = {
                        element: n,
                        language: i,
                        grammar: s,
                        code: n.textContent
                    };
                    function h(m) {
                        o.highlightedCode = m, a.hooks.run("before-insert", o), 
                        o.element.innerHTML = o.highlightedCode, a.hooks.run("after-highlight", o), 
                        a.hooks.run("complete", o), r && r.call(o.element);
                    }
                    if (a.hooks.run("before-sanity-check", o), (l = o.element.parentElement) && l.nodeName.toLowerCase() === "pre" && !l.hasAttribute("tabindex") && l.setAttribute("tabindex", "0"), 
                    !o.code) return a.hooks.run("complete", o), void (r && r.call(o.element));
                    if (a.hooks.run("before-highlight", o), o.grammar) if (t && c.Worker) {
                        var v = new Worker(a.filename);
                        v.onmessage = function(m) {
                            h(m.data);
                        }, v.postMessage(JSON.stringify({
                            language: o.language,
                            code: o.code,
                            immediateClose: !0
                        }));
                    } else h(a.highlight(o.code, o.grammar, o.language)); else h(a.util.encode(o.code));
                },
                highlight: function(n, t, r) {
                    var i = {
                        code: n,
                        grammar: t,
                        language: r
                    };
                    if (a.hooks.run("before-tokenize", i), !i.grammar) throw new Error('The language "' + i.language + '" has no grammar.');
                    return i.tokens = a.tokenize(i.code, i.grammar), a.hooks.run("after-tokenize", i), 
                    g.stringify(a.util.encode(i.tokens), i.language);
                },
                tokenize: function(n, t) {
                    var r = t.rest;
                    if (r) {
                        for (var i in r) t[i] = r[i];
                        delete t.rest;
                    }
                    var s = new F();
                    return A(s, s.head, n), k(n, s, t, s.head, 0), function(l) {
                        for (var o = [], h = l.head.next; h !== l.tail; ) o.push(h.value), 
                        h = h.next;
                        return o;
                    }(s);
                },
                hooks: {
                    all: {},
                    add: function(n, t) {
                        var r = a.hooks.all;
                        r[n] = r[n] || [], r[n].push(t);
                    },
                    run: function(n, t) {
                        var r = a.hooks.all[n];
                        if (r && r.length) for (var i, s = 0; i = r[s++]; ) i(t);
                    }
                },
                Token: g
            };
            function g(n, t, r, i) {
                this.type = n, this.content = t, this.alias = r, this.length = 0 | (i || "").length;
            }
            function p(n, t, r, i) {
                n.lastIndex = t;
                var s = n.exec(r);
                if (s && i && s[1]) {
                    var l = s[1].length;
                    s.index += l, s[0] = s[0].slice(l);
                }
                return s;
            }
            function k(n, t, r, i, s, l) {
                for (var o in r) if (r.hasOwnProperty(o) && r[o]) {
                    var h = r[o];
                    h = Array.isArray(h) ? h : [ h ];
                    for (var v = 0; v < h.length; ++v) {
                        if (l && l.cause == o + "," + v) return;
                        var m = h[v], x = m.inside, S = !!m.lookbehind, J = !!m.greedy, se = m.alias;
                        if (J && !m.pattern.global) {
                            var oe = m.pattern.toString().match(/[imsuy]*$/)[0];
                            m.pattern = RegExp(m.pattern.source, oe + "g");
                        }
                        for (var X = m.pattern || m, b = i.next, _ = s; b !== t.tail && !(l && _ >= l.reach); _ += b.value.length, 
                        b = b.next) {
                            var j = b.value;
                            if (t.length > n.length) return;
                            if (!(j instanceof g)) {
                                var $, z = 1;
                                if (J) {
                                    if (!($ = p(X, _, n, S)) || $.index >= n.length) break;
                                    var D = $.index, le = $.index + $[0].length, C = _;
                                    for (C += b.value.length; D >= C; ) C += (b = b.next).value.length;
                                    if (_ = C -= b.value.length, b.value instanceof g) continue;
                                    for (var O = b; O !== t.tail && (C < le || typeof O.value == "string"); O = O.next) z++, 
                                    C += O.value.length;
                                    z--, j = n.slice(_, C), $.index -= _;
                                } else if (!($ = p(X, 0, j, S))) continue;
                                D = $.index;
                                var B = $[0], V = j.slice(0, D), Q = j.slice(D + B.length), W = _ + j.length;
                                l && W > l.reach && (l.reach = W);
                                var I = b.prev;
                                if (V && (I = A(t, I, V), _ += V.length), E(t, I, z), 
                                b = A(t, I, new g(o, x ? a.tokenize(B, x) : B, se, B)), 
                                Q && A(t, b, Q), z > 1) {
                                    var H = {
                                        cause: o + "," + v,
                                        reach: W
                                    };
                                    k(n, t, r, b.prev, _, H), l && H.reach > l.reach && (l.reach = H.reach);
                                }
                            }
                        }
                    }
                }
            }
            function F() {
                var n = {
                    value: null,
                    prev: null,
                    next: null
                }, t = {
                    value: null,
                    prev: n,
                    next: null
                };
                n.next = t, this.head = n, this.tail = t, this.length = 0;
            }
            function A(n, t, r) {
                var i = t.next, s = {
                    value: r,
                    prev: t,
                    next: i
                };
                return t.next = s, i.prev = s, n.length++, s;
            }
            function E(n, t, r) {
                for (var i = t.next, s = 0; s < r && i !== n.tail; s++) i = i.next;
                t.next = i, i.prev = t, n.length -= s;
            }
            if (c.Prism = a, g.stringify = function n(t, r) {
                if (typeof t == "string") return t;
                if (Array.isArray(t)) {
                    var i = "";
                    return t.forEach(function(v) {
                        i += n(v, r);
                    }), i;
                }
                var s = {
                    type: t.type,
                    content: n(t.content, r),
                    tag: "span",
                    classes: [ "token", t.type ],
                    attributes: {},
                    language: r
                }, l = t.alias;
                l && (Array.isArray(l) ? Array.prototype.push.apply(s.classes, l) : s.classes.push(l)), 
                a.hooks.run("wrap", s);
                var o = "";
                for (var h in s.attributes) o += " " + h + '="' + (s.attributes[h] || "").replace(/"/g, "&quot;") + '"';
                return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + o + ">" + s.content + "</" + s.tag + ">";
            }, !c.document) return c.addEventListener && (a.disableWorkerMessageHandler || c.addEventListener("message", function(n) {
                var t = JSON.parse(n.data), r = t.language, i = t.code, s = t.immediateClose;
                c.postMessage(a.highlight(i, a.languages[r], r)), s && c.close();
            }, !1)), a;
            var w = a.util.currentScript();
            function L() {
                a.manual || a.highlightAll();
            }
            if (w && (a.filename = w.src, w.hasAttribute("data-manual") && (a.manual = !0)), 
            !a.manual) {
                var N = document.readyState;
                N === "loading" || N === "interactive" && w && w.defer ? document.addEventListener("DOMContentLoaded", L) : window.requestAnimationFrame ? window.requestAnimationFrame(L) : window.setTimeout(L, 16);
            }
            return a;
        }(typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {});
        e.exports && (e.exports = u), Y !== void 0 && (Y.Prism = u);
    })(Z);
    var q = Z.exports;
    Prism.languages.clike = {
        comment: [ {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        } ],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [ Prism.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0
        } ],
        keyword: [ {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        } ],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
            pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
            lookbehind: !0
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, 
    Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Prism.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [ {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        } ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: !0,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        },
        "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        }
    }), Prism.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), 
    Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), 
    Prism.languages.js = Prism.languages.javascript;
    let R, U, G;
    R = {
        key: 0,
        style: {
            display: "flex",
            "justify-content": "space-between",
            border: "1px solid #ddd",
            height: "50px",
            background: "#fafafa",
            "border-radius": "4px 4px 0 0",
            "border-bottom": "none",
            padding: "0 8px"
        }
    }, U = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, G = T("div", {
        style: {
            height: "15px"
        }
    }, null, -1), ae = {
        __name: "VuePrimeEditor",
        props: {
            modelValue: {
                required: !0,
                type: String
            },
            readOnly: {
                type: Boolean,
                default: () => !0
            },
            fileName: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:modelValue" ],
        setup(e, {
            emit: u
        }) {
            const c = e, {
                modelValue: f,
                readOnly: y
            } = ce(c), d = u, a = de({
                set(p) {
                    d("update:modelValue", p);
                },
                get: () => f.value
            }), g = p => q.highlight(p, q.languages.js);
            return (p, k) => (ee(), te("div", null, [ e.fileName ? (ee(), te("div", R, [ T("div", U, [ T("span", null, he(e.fileName), 1) ]) ])) : ge("", !0), fe(ne(re), {
                class: "my-editor",
                modelValue: a.value,
                "onUpdate:modelValue": k[0] || (k[0] = F => a.value = F),
                highlight: g,
                readonly: ne(y),
                "line-numbers": "",
                style: pe({
                    borderRadius: e.fileName ? "0 0 5px 5px" : "5px"
                })
            }, null, 8, [ "modelValue", "readonly", "style" ]), G ]));
        }
    };
});

export {
    ye as __tla,
    ae as default
};