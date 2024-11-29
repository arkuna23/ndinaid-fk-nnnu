import {
    a3 as z,
    __tla as D
} from "./index-6c08ea4c.js";

let R, Y = Promise.all([ (() => {
    try {
        return D;
    } catch {}
})() ]).then(async () => {
    var j, M = {
        exports: {}
    };
    j = function() {
        return function() {
            var P = {
                686: function(s, e, t) {
                    t.d(e, {
                        default: function() {
                            return H;
                        }
                    });
                    var c = t(279), f = t.n(c), u = t(370), l = t.n(u), v = t(817), d = t.n(v);
                    function g(o) {
                        try {
                            return document.execCommand(o);
                        } catch {
                            return !1;
                        }
                    }
                    var y = function(o) {
                        var r = d()(o);
                        return g("cut"), r;
                    }, E = function(o, r) {
                        var i = function(m) {
                            var h = document.documentElement.getAttribute("dir") === "rtl", n = document.createElement("textarea");
                            n.style.fontSize = "12pt", n.style.border = "0", n.style.padding = "0", 
                            n.style.margin = "0", n.style.position = "absolute", 
                            n.style[h ? "right" : "left"] = "-9999px";
                            var a = window.pageYOffset || document.documentElement.scrollTop;
                            return n.style.top = "".concat(a, "px"), n.setAttribute("readonly", ""), 
                            n.value = m, n;
                        }(o);
                        r.container.appendChild(i);
                        var p = d()(i);
                        return g("copy"), i.remove(), p;
                    }, _ = function(o) {
                        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                            container: document.body
                        }, i = "";
                        return typeof o == "string" ? i = E(o, r) : o instanceof HTMLInputElement && ![ "text", "search", "url", "tel", "password" ].includes(o == null ? void 0 : o.type) ? i = E(o.value, r) : (i = d()(o), 
                        g("copy")), i;
                    };
                    function O(o) {
                        return O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
                            return typeof r;
                        } : function(r) {
                            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
                        }, O(o);
                    }
                    var N = function() {
                        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.action, i = r === void 0 ? "copy" : r, p = o.container, m = o.target, h = o.text;
                        if (i !== "copy" && i !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        if (m !== void 0) {
                            if (!m || O(m) !== "object" || m.nodeType !== 1) throw new Error('Invalid "target" value, use a valid Element');
                            if (i === "copy" && m.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if (i === "cut" && (m.hasAttribute("readonly") || m.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                        }
                        return h ? _(h, {
                            container: p
                        }) : m ? i === "cut" ? y(m) : _(m, {
                            container: p
                        }) : void 0;
                    };
                    function x(o) {
                        return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
                            return typeof r;
                        } : function(r) {
                            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
                        }, x(o);
                    }
                    function C(o, r) {
                        for (var i = 0; i < r.length; i++) {
                            var p = r[i];
                            p.enumerable = p.enumerable || !1, p.configurable = !0, 
                            "value" in p && (p.writable = !0), Object.defineProperty(o, p.key, p);
                        }
                    }
                    function k(o, r) {
                        return k = Object.setPrototypeOf || function(i, p) {
                            return i.__proto__ = p, i;
                        }, k(o, r);
                    }
                    function I(o) {
                        var r = function() {
                            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                            if (typeof Proxy == "function") return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                                !0;
                            } catch {
                                return !1;
                            }
                        }();
                        return function() {
                            var i, p, m, h = T(o);
                            if (r) {
                                var n = T(this).constructor;
                                i = Reflect.construct(h, arguments, n);
                            } else i = h.apply(this, arguments);
                            return p = this, !(m = i) || x(m) !== "object" && typeof m != "function" ? function(a) {
                                if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return a;
                            }(p) : m;
                        };
                    }
                    function T(o) {
                        return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
                            return r.__proto__ || Object.getPrototypeOf(r);
                        }, T(o);
                    }
                    function L(o, r) {
                        var i = "data-clipboard-".concat(o);
                        if (r.hasAttribute(i)) return r.getAttribute(i);
                    }
                    var q = function(o) {
                        (function(n, a) {
                            if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
                            n.prototype = Object.create(a && a.prototype, {
                                constructor: {
                                    value: n,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), a && k(n, a);
                        })(h, o);
                        var r, i, p, m = I(h);
                        function h(n, a) {
                            var b;
                            return function(w, F) {
                                if (!(w instanceof F)) throw new TypeError("Cannot call a class as a function");
                            }(this, h), (b = m.call(this)).resolveOptions(a), b.listenClick(n), 
                            b;
                        }
                        return r = h, i = [ {
                            key: "resolveOptions",
                            value: function() {
                                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                this.action = typeof n.action == "function" ? n.action : this.defaultAction, 
                                this.target = typeof n.target == "function" ? n.target : this.defaultTarget, 
                                this.text = typeof n.text == "function" ? n.text : this.defaultText, 
                                this.container = x(n.container) === "object" ? n.container : document.body;
                            }
                        }, {
                            key: "listenClick",
                            value: function(n) {
                                var a = this;
                                this.listener = l()(n, "click", function(b) {
                                    return a.onClick(b);
                                });
                            }
                        }, {
                            key: "onClick",
                            value: function(n) {
                                var a = n.delegateTarget || n.currentTarget, b = this.action(a) || "copy", w = N({
                                    action: b,
                                    container: this.container,
                                    target: this.target(a),
                                    text: this.text(a)
                                });
                                this.emit(w ? "success" : "error", {
                                    action: b,
                                    text: w,
                                    trigger: a,
                                    clearSelection: function() {
                                        a && a.focus(), window.getSelection().removeAllRanges();
                                    }
                                });
                            }
                        }, {
                            key: "defaultAction",
                            value: function(n) {
                                return L("action", n);
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(n) {
                                var a = L("target", n);
                                if (a) return document.querySelector(a);
                            }
                        }, {
                            key: "defaultText",
                            value: function(n) {
                                return L("text", n);
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy();
                            }
                        } ], p = [ {
                            key: "copy",
                            value: function(n) {
                                var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                    container: document.body
                                };
                                return _(n, a);
                            }
                        }, {
                            key: "cut",
                            value: function(n) {
                                return y(n);
                            }
                        }, {
                            key: "isSupported",
                            value: function() {
                                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [ "copy", "cut" ], a = typeof n == "string" ? [ n ] : n, b = !!document.queryCommandSupported;
                                return a.forEach(function(w) {
                                    b = b && !!document.queryCommandSupported(w);
                                }), b;
                            }
                        } ], i && C(r.prototype, i), p && C(r, p), h;
                    }(f()), H = q;
                },
                828: function(s) {
                    if (typeof Element < "u" && !Element.prototype.matches) {
                        var e = Element.prototype;
                        e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
                    }
                    s.exports = function(t, c) {
                        for (;t && t.nodeType !== 9; ) {
                            if (typeof t.matches == "function" && t.matches(c)) return t;
                            t = t.parentNode;
                        }
                    };
                },
                438: function(s, e, t) {
                    var c = t(828);
                    function f(l, v, d, g, y) {
                        var E = u.apply(this, arguments);
                        return l.addEventListener(d, E, y), {
                            destroy: function() {
                                l.removeEventListener(d, E, y);
                            }
                        };
                    }
                    function u(l, v, d, g) {
                        return function(y) {
                            y.delegateTarget = c(y.target, v), y.delegateTarget && g.call(l, y);
                        };
                    }
                    s.exports = function(l, v, d, g, y) {
                        return typeof l.addEventListener == "function" ? f.apply(null, arguments) : typeof d == "function" ? f.bind(null, document).apply(null, arguments) : (typeof l == "string" && (l = document.querySelectorAll(l)), 
                        Array.prototype.map.call(l, function(E) {
                            return f(E, v, d, g, y);
                        }));
                    };
                },
                879: function(s, e) {
                    e.node = function(t) {
                        return t !== void 0 && t instanceof HTMLElement && t.nodeType === 1;
                    }, e.nodeList = function(t) {
                        var c = Object.prototype.toString.call(t);
                        return t !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length" in t && (t.length === 0 || e.node(t[0]));
                    }, e.string = function(t) {
                        return typeof t == "string" || t instanceof String;
                    }, e.fn = function(t) {
                        return Object.prototype.toString.call(t) === "[object Function]";
                    };
                },
                370: function(s, e, t) {
                    var c = t(879), f = t(438);
                    s.exports = function(u, l, v) {
                        if (!u && !l && !v) throw new Error("Missing required arguments");
                        if (!c.string(l)) throw new TypeError("Second argument must be a String");
                        if (!c.fn(v)) throw new TypeError("Third argument must be a Function");
                        if (c.node(u)) return function(d, g, y) {
                            return d.addEventListener(g, y), {
                                destroy: function() {
                                    d.removeEventListener(g, y);
                                }
                            };
                        }(u, l, v);
                        if (c.nodeList(u)) return function(d, g, y) {
                            return Array.prototype.forEach.call(d, function(E) {
                                E.addEventListener(g, y);
                            }), {
                                destroy: function() {
                                    Array.prototype.forEach.call(d, function(E) {
                                        E.removeEventListener(g, y);
                                    });
                                }
                            };
                        }(u, l, v);
                        if (c.string(u)) return function(d, g, y) {
                            return f(document.body, d, g, y);
                        }(u, l, v);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                    };
                },
                817: function(s) {
                    s.exports = function(e) {
                        var t;
                        if (e.nodeName === "SELECT") e.focus(), t = e.value; else if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
                            var c = e.hasAttribute("readonly");
                            c || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), 
                            c || e.removeAttribute("readonly"), t = e.value;
                        } else {
                            e.hasAttribute("contenteditable") && e.focus();
                            var f = window.getSelection(), u = document.createRange();
                            u.selectNodeContents(e), f.removeAllRanges(), f.addRange(u), 
                            t = f.toString();
                        }
                        return t;
                    };
                },
                279: function(s) {
                    function e() {}
                    e.prototype = {
                        on: function(t, c, f) {
                            var u = this.e || (this.e = {});
                            return (u[t] || (u[t] = [])).push({
                                fn: c,
                                ctx: f
                            }), this;
                        },
                        once: function(t, c, f) {
                            var u = this;
                            function l() {
                                u.off(t, l), c.apply(f, arguments);
                            }
                            return l._ = c, this.on(t, l, f);
                        },
                        emit: function(t) {
                            for (var c = [].slice.call(arguments, 1), f = ((this.e || (this.e = {}))[t] || []).slice(), u = 0, l = f.length; u < l; u++) f[u].fn.apply(f[u].ctx, c);
                            return this;
                        },
                        off: function(t, c) {
                            var f = this.e || (this.e = {}), u = f[t], l = [];
                            if (u && c) for (var v = 0, d = u.length; v < d; v++) u[v].fn !== c && u[v].fn._ !== c && l.push(u[v]);
                            return l.length ? f[t] = l : delete f[t], this;
                        }
                    }, s.exports = e, s.exports.TinyEmitter = e;
                }
            }, A = {};
            function S(s) {
                if (A[s]) return A[s].exports;
                var e = A[s] = {
                    exports: {}
                };
                return P[s](e, e.exports, S), e.exports;
            }
            return S.n = function(s) {
                var e = s && s.__esModule ? function() {
                    return s.default;
                } : function() {
                    return s;
                };
                return S.d(e, {
                    a: e
                }), e;
            }, S.d = function(s, e) {
                for (var t in e) S.o(e, t) && !S.o(s, t) && Object.defineProperty(s, t, {
                    enumerable: !0,
                    get: e[t]
                });
            }, S.o = function(s, e) {
                return Object.prototype.hasOwnProperty.call(s, e);
            }, S(686);
        }().default;
    }, R = z(M.exports = j());
});

export {
    R as C,
    Y as __tla
};