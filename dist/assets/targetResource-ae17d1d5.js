import {
    a1 as ut,
    a3 as K,
    d as ct,
    a0 as pt,
    a4 as ft,
    T as ht,
    r as U,
    e as dt,
    w as tt,
    f as gt,
    a5 as mt,
    g as bt,
    o as $,
    c as rt,
    t as _t,
    a as V,
    D as Z,
    C as et,
    a6 as nt,
    __tla as vt
} from "./index-6c08ea4c.js";

import {
    a as it,
    __tla as kt
} from "./file-e038b35d.js";

import {
    V as Dt,
    __tla as yt
} from "./video-1d0dc730.js";

import {
    H as xt,
    __tla as Ct
} from "./index-234b0463.js";

import {
    p as wt,
    __tla as At
} from "./project-file-a2b4fd07.js";

import {
    _ as Et
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ot, St = Promise.all([ (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return Ct;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})() ]).then(async () => {
    var st = {
        exports: {}
    };
    typeof self < "u";
    const G = K(st.exports = function(y) {
        return function(D) {
            var d = {};
            function o(t) {
                if (d[t]) return d[t].exports;
                var e = d[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return D[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
            }
            return o.m = D, o.c = d, o.d = function(t, e, r) {
                o.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                });
            }, o.r = function(t) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
            }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e || 4 & e && typeof t == "object" && t && t.__esModule) return t;
                var r = Object.create(null);
                if (o.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && typeof t != "string") for (var n in t) o.d(r, n, function(i) {
                    return t[i];
                }.bind(null, n));
                return r;
            }, o.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default;
                } : function() {
                    return t;
                };
                return o.d(e, "a", e), e;
            }, o.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }, o.p = "", o(o.s = 9);
        }([ function(D, d) {
            D.exports = y;
        }, , function(D, d, o) {
            o.d(d, "f", function() {
                return e;
            }), o.d(d, "a", function() {
                return n;
            }), o.d(d, "c", function() {
                return i;
            }), o.d(d, "d", function() {
                return s;
            }), o.d(d, "e", function() {
                return a;
            }), o.d(d, "b", function() {
                return l;
            });
            var t = Object.prototype.toString, e = function(u) {
                return t.call(u) === "[object Object]";
            };
            function r(u, c) {
                return Object.keys(c).forEach(function(f) {
                    u[f] = c[f];
                }), u;
            }
            function n(u) {
                for (var c = {}, f = 0; f < u.length; f++) u[f] && r(c, u[f]);
                return c;
            }
            function i(u, c) {
                c.keys().forEach(function(f) {
                    u[f] = c(f);
                });
            }
            var s = typeof window < "u";
            function a(u) {
                return /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(u);
            }
            function l(u) {
                var c, f, p = u.selected, h = u.InsertGetter, g = u.selectedGetter, m = g === void 0 ? function(_) {
                    return _;
                } : g, k = u.ignoreEmptyLine, v = k === void 0 || k;
                return p ? (f = m(p), c = h(p, 1), p.indexOf(`
`) !== -1 && (f = c = p.split(`
`).map(function(_, b) {
                    return v && !_ ? "" : h(_, b + 1).replace(m(null), "");
                }).join(`
`))) : (c = h(null, 1), f = m(p)), {
                    insertContent: c,
                    newSelected: f
                };
            }
        }, function(D, d, o) {
            o.d(d, "c", function() {
                return t;
            }), o.d(d, "b", function() {
                return e;
            }), o.d(d, "a", function() {
                return r;
            });
            var t = "data-v-md-line", e = "data-v-md-heading", r = "data-v-md-anchor";
        }, , function(D, d, o) {
            function t(r) {
                var n = 0;
                return r === window ? n = r.pageYOffset : r && (n = r.scrollTop), 
                n;
            }
            function e(r, n) {
                r === window ? window.scrollTo(window.pageYOffset, n) : r && (r.scrollTop = n);
            }
            o.d(d, "a", function() {
                return t;
            }), o.d(d, "b", function() {
                return e;
            });
        }, function(D, d, o) {
            function t() {
                return t = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = arguments[r];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                }, t.apply(this, arguments);
            }
            o.d(d, "a", function() {
                return t;
            });
        }, function(D, d, o) {
            var t = o(6), e = o(11), r = o.n(e), n = {
                svg: [],
                altGlyph: [],
                altGlyphDef: [],
                altGlyphItem: [],
                animate: [],
                animateColor: [],
                animateMotion: [],
                animateTransform: [],
                circle: [],
                clipPath: [],
                "color-profile": [],
                cursor: [],
                "definition-src": [],
                defs: [],
                desc: [],
                ellipse: [],
                feBlend: [],
                feColorMatrix: [],
                feComponentTransfer: [],
                feComposite: [],
                feConvolveMatrix: [],
                feDiffuseLighting: [],
                feDisplacementMap: [],
                feDistantLight: [],
                feFlood: [],
                feFuncA: [],
                feFuncB: [],
                feFuncG: [],
                feFuncR: [],
                feGaussianBlur: [],
                feImage: [],
                feMerge: [],
                feMergeNode: [],
                feMorphology: [],
                feOffset: [],
                fePointLight: [],
                feSpecularLighting: [],
                feSpotLight: [],
                feTile: [],
                feTurbulence: [],
                filter: [],
                font: [],
                foreignObject: [],
                g: [],
                glyph: [],
                glyphRef: [],
                hkern: [],
                image: [],
                line: [],
                linearGradient: [],
                marker: [],
                mask: [],
                metadata: [],
                "missing-glyph": [],
                mpath: [],
                path: [],
                pattern: [],
                polygon: [],
                polyline: [],
                radialGradient: [],
                rect: [],
                set: [],
                stop: [],
                style: [],
                switch: [],
                symbol: [],
                text: [],
                textPath: [],
                title: [],
                tref: [],
                tspan: [],
                use: [],
                view: [],
                vkern: []
            }, i = [ "width", "height", "x", "y", "rx", "ry", "cx", "cy", "r", "viewbox", "points", "fill", "stroke", "stroke-width", "opacity", "transform", "d", "text-anchor", "font-family", "font-size", "font-weight", "filter", "href", "xlink:href" ], s = {
                math: [],
                annotation: [],
                semantics: [],
                mtext: [],
                mn: [],
                mo: [],
                mi: [],
                mspace: [],
                mover: [],
                munder: [],
                munderover: [],
                msup: [],
                msub: [],
                msubsup: [],
                mfrac: [],
                mroot: [],
                msqrt: [],
                mtable: [],
                mtr: [],
                mtd: [],
                mlabeledtr: [],
                mrow: [],
                menclose: [],
                mstyle: [],
                mpadded: [],
                mphantom: [],
                mglyph: []
            }, a = [ "mathcolor", "mathbackground", "mathsize", "mathvariant", "mathfamily", "mathweight", "mathstyle", "mathdisplay" ], l = [ "style", "align", "class", "id" ], u = [ "data-" ], c = {
                whiteList: Object(t.a)({}, r.a.getDefaultWhiteList(), {
                    input: [ "type" ],
                    ol: [ "reversed", "start", "type" ],
                    button: [ "type" ],
                    summary: []
                }, n, s),
                onIgnoreTagAttr: function(p, h, g) {
                    if (n[p] && i.includes(h) || s[p] && a.includes(h) || l.some(function(m) {
                        return m === h;
                    }) || u.some(function(m) {
                        return h.startsWith(m);
                    })) return h + '="' + r.a.escapeAttrValue(g) + '"';
                }
            }, f = new r.a.FilterXSS(c);
            f.extend = function(p) {
                var h = f.options;
                Object.keys(p).forEach(function(g) {
                    if (g === "whiteList") Object.keys(p.whiteList).forEach(function(k) {
                        var v = p.whiteList[k], _ = h.whiteList;
                        _[k] ? _[k] = [].concat(_[k], v) : _[k] = v;
                    }); else if (g === "onIgnoreTagAttr") {
                        var m = h[g];
                        h[g] = function() {
                            for (var k, v = arguments.length, _ = new Array(v), b = 0; b < v; b++) _[b] = arguments[b];
                            var S = m.call.apply(m, [ this ].concat(_)), w = (k = p[g]).call.apply(k, [ this ].concat(_));
                            return S || w;
                        };
                    } else h[g] = p[g];
                });
            }, d.a = f;
        }, function(D, d, o) {
            o.d(d, "b", function() {
                return e;
            }), o.d(d, "a", function() {
                return r;
            });
            var t = o(5);
            function e(n) {
                var i = n.currentScrollTop, s = n.scrollToTop, a = n.scrollFn, l = n.percent, u = l === void 0 ? 10 : l, c = n.onScrollEnd, f = s > i ? "down" : "up", p = u / 100 * (s - i);
                window.requestAnimationFrame(function h() {
                    i += p, f === "down" && i >= s || f === "up" && i <= s ? (a(s), 
                    window.cancelAnimationFrame(void 0), c && window.requestAnimationFrame(c)) : (a(i), 
                    window.requestAnimationFrame(h));
                });
            }
            function r(n) {
                var i = n.scrollTarget, s = n.scrollToTop, a = n.percent, l = a === void 0 ? 10 : a, u = n.onScrollEnd;
                e({
                    currentScrollTop: Object(t.a)(i),
                    scrollToTop: s,
                    scrollFn: function(c) {
                        return Object(t.b)(i, c);
                    },
                    percent: l,
                    onScrollEnd: u
                });
            }
        }, function(D, d, o) {
            o.r(d);
            var t = o(0), e = o(7), r = o(13), n = function() {
                function u() {
                    this.lang = new r.a();
                }
                var c = u.prototype;
                return c.defaultMarkdownLoader = function(f) {
                    return f;
                }, c.use = function(f, p) {
                    return typeof f == "function" ? f(this, p) : f.install(this, p), 
                    this;
                }, c.theme = function(f) {
                    this.themeConfig = f;
                }, c.extendMarkdown = function(f) {
                    this.themeConfig && f(this.themeConfig.markdownParser);
                }, c.parse = function(f) {
                    var p, h = this.themeConfig.markdownParser, g = (h == null || (p = h.render) == null ? void 0 : p.bind(h)) || this.defaultMarkdownLoader;
                    return typeof g != "function" || this.defaultMarkdownLoader, 
                    g(f);
                }, u;
            }(), i = {
                name: "v-md-preview",
                mixins: [ o(16).a ],
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    theme: Object,
                    beforeChange: Function
                },
                emits: [ "change" ],
                data: function() {
                    return {
                        html: ""
                    };
                },
                watch: {
                    text: function() {
                        this.handleTextChange();
                    },
                    langConfig: function() {
                        this.handleTextChange();
                    }
                },
                computed: {
                    vMdParser: function() {
                        return this.$options.vMdParser;
                    },
                    previewClass: function() {
                        return this.vMdParser.themeConfig.previewClass;
                    },
                    langConfig: function() {
                        return this.vMdParser.lang.config;
                    }
                },
                created: function() {
                    this.handleTextChange();
                },
                methods: {
                    handleTextChange: function() {
                        var u = this, c = function(f) {
                            u.html = e.a.process(u.$options.vMdParser.parse(f)), 
                            u.$emit("change", f, u.html);
                        };
                        this.beforeChange ? this.beforeChange(this.text, c) : c(this.text);
                    }
                }
            }, s = new n();
            s.lang.config = Object(t.reactive)(s.lang.config), i.vMdParser = new n();
            var a = i;
            a.render = function(u, c, f, p, h, g) {
                return Object(t.openBlock)(), Object(t.createBlock)("div", {
                    class: "v-md-editor-preview",
                    style: {
                        tabSize: u.tabSize,
                        "-moz-tab-size": u.tabSize,
                        "-o-tab-size": u.tabSize
                    },
                    onClick: c[1] || (c[1] = function() {
                        return u.handlePreviewClick.apply(u, arguments);
                    })
                }, [ Object(t.createVNode)("div", {
                    class: [ u.previewClass ],
                    innerHTML: u.html
                }, null, 10, [ "innerHTML" ]) ], 4);
            };
            var l = a;
            o(18), l.version = "2.3.18", l.install = function(u) {
                u.component(l.name, l);
            }, l.xss = e.a, l.use = function(u, c) {
                return typeof u == "function" ? u(l, c) : u.install(l, c), l;
            }, d.default = l;
        }, , function(D, d, o) {
            var t = o(19), e = o(22), r = o(26);
            function n(s, a) {
                return new r(a).process(s);
            }
            for (var i in (d = D.exports = n).filterXSS = n, d.FilterXSS = r, t) d[i] = t[i];
            for (var i in e) d[i] = e[i];
            typeof window < "u" && (window.filterXSS = D.exports), typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = D.exports);
        }, , function(D, d, o) {
            o.d(d, "a", function() {
                return n;
            });
            var t = o(2), e = Object.prototype.hasOwnProperty;
            function r(i, s) {
                return Object.keys(s).forEach(function(a) {
                    (function(l, u, c) {
                        var f = u[c];
                        f != null && (e.call(l, c) && Object(t.f)(f) ? l[c] = r(Object(l[c]), u[c]) : l[c] = f);
                    })(i, s, a);
                }), i;
            }
            var n = function() {
                function i(a) {
                    a === void 0 && (a = {}), this.config = {
                        lang: "zh-CN",
                        langConfig: {
                            "zh-CN": {}
                        }
                    }, this.options = a;
                }
                var s = i.prototype;
                return s.use = function(a, l) {
                    var u;
                    this.config.lang = a, this.add(((u = {})[a] = l, u)), this.options.afterUse && this.options.afterUse(a, l);
                }, s.add = function(a) {
                    a === void 0 && (a = {}), r(this.config.langConfig, a);
                }, i;
            }();
        }, function(D, d, o) {
            var t = o(20), e = o(24);
            for (var r in (d = D.exports = function(n, i) {
                return new e(i).process(n);
            }).FilterCSS = e, t) d[r] = t[r];
            typeof window < "u" && (window.filterCSS = D.exports);
        }, function(D, d) {
            D.exports = {
                indexOf: function(o, t) {
                    var e, r;
                    if (Array.prototype.indexOf) return o.indexOf(t);
                    for (e = 0, r = o.length; e < r; e++) if (o[e] === t) return e;
                    return -1;
                },
                forEach: function(o, t, e) {
                    var r, n;
                    if (Array.prototype.forEach) return o.forEach(t, e);
                    for (r = 0, n = o.length; r < n; r++) t.call(e, o[r], r, o);
                },
                trim: function(o) {
                    return String.prototype.trim ? o.trim() : o.replace(/(^\s*)|(\s*$)/g, "");
                },
                spaceIndex: function(o) {
                    var t = /\s|\n|\t/.exec(o);
                    return t ? t.index : -1;
                }
            };
        }, function(D, d, o) {
            var t = o(5), e = o(8), r = o(3);
            d.a = {
                props: {
                    tabSize: {
                        type: Number,
                        default: 2
                    },
                    scrollContainer: {
                        type: Function,
                        default: function() {
                            return window;
                        }
                    },
                    top: {
                        type: Number,
                        default: 0
                    }
                },
                emits: [ "image-click" ],
                methods: {
                    handlePreviewClick: function(n) {
                        var i = n.target;
                        if (i.tagName !== "IMG") {
                            var s = i.getAttribute(r.a), a = this.$el.querySelector("[" + r.b + '="' + s + '"]');
                            a && this.scrollToTarget({
                                target: a
                            });
                        } else {
                            if (!i.getAttribute("src")) return;
                            var l = Array.from(this.$el.querySelectorAll("img")), u = l.map(function(f) {
                                return f.getAttribute("src");
                            }).filter(function(f) {
                                return f;
                            }), c = l.indexOf(i);
                            this.$emit("image-click", u, c);
                        }
                    },
                    getOffsetTop: function(n, i) {
                        var s = n.getBoundingClientRect();
                        return i === window || i === document.documentElement ? s.top : s.top - i.getBoundingClientRect().top;
                    },
                    scrollToTarget: function(n) {
                        var i = n.target, s = n.scrollContainer, a = s === void 0 ? this.scrollContainer() : s, l = n.top, u = l === void 0 ? this.top : l, c = n.onScrollEnd, f = this.getOffsetTop(i, a), p = Object(t.a)(a) + f - u;
                        Object(e.a)({
                            scrollTarget: a,
                            scrollToTop: p,
                            onScrollEnd: c
                        });
                    },
                    scrollToLine: function(n) {
                        var i = n.lineIndex, s = n.onScrollEnd;
                        if (i) {
                            var a = this.$el.querySelector("[" + r.c + '="' + i + '"]');
                            a && this.scrollToTarget({
                                target: a,
                                onScrollEnd: s
                            });
                        }
                    }
                }
            };
        }, , function(D, d, o) {}, function(D, d, o) {
            var t = o(14).FilterCSS, e = o(14).getDefaultWhiteList, r = o(15);
            function n() {
                return {
                    a: [ "target", "href", "title" ],
                    abbr: [ "title" ],
                    address: [],
                    area: [ "shape", "coords", "href", "alt" ],
                    article: [],
                    aside: [],
                    audio: [ "autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src" ],
                    b: [],
                    bdi: [ "dir" ],
                    bdo: [ "dir" ],
                    big: [],
                    blockquote: [ "cite" ],
                    br: [],
                    caption: [],
                    center: [],
                    cite: [],
                    code: [],
                    col: [ "align", "valign", "span", "width" ],
                    colgroup: [ "align", "valign", "span", "width" ],
                    dd: [],
                    del: [ "datetime" ],
                    details: [ "open" ],
                    div: [],
                    dl: [],
                    dt: [],
                    em: [],
                    figcaption: [],
                    figure: [],
                    font: [ "color", "size", "face" ],
                    footer: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    header: [],
                    hr: [],
                    i: [],
                    img: [ "src", "alt", "title", "width", "height" ],
                    ins: [ "datetime" ],
                    li: [],
                    mark: [],
                    nav: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    section: [],
                    small: [],
                    span: [],
                    sub: [],
                    summary: [],
                    sup: [],
                    strong: [],
                    strike: [],
                    table: [ "width", "border", "align", "valign" ],
                    tbody: [ "align", "valign" ],
                    td: [ "width", "rowspan", "colspan", "align", "valign" ],
                    tfoot: [ "align", "valign" ],
                    th: [ "width", "rowspan", "colspan", "align", "valign" ],
                    thead: [ "align", "valign" ],
                    tr: [ "rowspan", "align", "valign" ],
                    tt: [],
                    u: [],
                    ul: [],
                    video: [ "autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width" ]
                };
            }
            var i = new t();
            function s(C) {
                return C.replace(a, "&lt;").replace(l, "&gt;");
            }
            var a = /</g, l = />/g, u = /"/g, c = /&quot;/g, f = /&#([a-zA-Z0-9]*);?/gim, p = /&colon;?/gim, h = /&newline;?/gim, g = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi, m = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, k = /u\s*r\s*l\s*\(.*/gi;
            function v(C) {
                return C.replace(u, "&quot;");
            }
            function _(C) {
                return C.replace(c, '"');
            }
            function b(C) {
                return C.replace(f, function(T, q) {
                    return q[0] === "x" || q[0] === "X" ? String.fromCharCode(parseInt(q.substr(1), 16)) : String.fromCharCode(parseInt(q, 10));
                });
            }
            function S(C) {
                return C.replace(p, ":").replace(h, " ");
            }
            function w(C) {
                for (var T = "", q = 0, F = C.length; q < F; q++) T += C.charCodeAt(q) < 32 ? " " : C.charAt(q);
                return r.trim(T);
            }
            function E(C) {
                return C = w(C = S(C = b(C = _(C))));
            }
            function x(C) {
                return C = s(C = v(C));
            }
            var A = /<!--[\s\S]*?-->/g;
            d.whiteList = {
                a: [ "target", "href", "title" ],
                abbr: [ "title" ],
                address: [],
                area: [ "shape", "coords", "href", "alt" ],
                article: [],
                aside: [],
                audio: [ "autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src" ],
                b: [],
                bdi: [ "dir" ],
                bdo: [ "dir" ],
                big: [],
                blockquote: [ "cite" ],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: [ "align", "valign", "span", "width" ],
                colgroup: [ "align", "valign", "span", "width" ],
                dd: [],
                del: [ "datetime" ],
                details: [ "open" ],
                div: [],
                dl: [],
                dt: [],
                em: [],
                figcaption: [],
                figure: [],
                font: [ "color", "size", "face" ],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: [ "src", "alt", "title", "width", "height" ],
                ins: [ "datetime" ],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                summary: [],
                sup: [],
                strong: [],
                strike: [],
                table: [ "width", "border", "align", "valign" ],
                tbody: [ "align", "valign" ],
                td: [ "width", "rowspan", "colspan", "align", "valign" ],
                tfoot: [ "align", "valign" ],
                th: [ "width", "rowspan", "colspan", "align", "valign" ],
                thead: [ "align", "valign" ],
                tr: [ "rowspan", "align", "valign" ],
                tt: [],
                u: [],
                ul: [],
                video: [ "autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width" ]
            }, d.getDefaultWhiteList = n, d.onTag = function(C, T, q) {}, d.onIgnoreTag = function(C, T, q) {}, 
            d.onTagAttr = function(C, T, q) {}, d.onIgnoreTagAttr = function(C, T, q) {}, 
            d.safeAttrValue = function(C, T, q, F) {
                if (q = E(q), T === "href" || T === "src") {
                    if ((q = r.trim(q)) === "#") return "#";
                    if (q.substr(0, 7) !== "http://" && q.substr(0, 8) !== "https://" && q.substr(0, 7) !== "mailto:" && q.substr(0, 4) !== "tel:" && q.substr(0, 11) !== "data:image/" && q.substr(0, 6) !== "ftp://" && q.substr(0, 2) !== "./" && q.substr(0, 3) !== "../" && q[0] !== "#" && q[0] !== "/") return "";
                } else if (T === "background") {
                    if (g.lastIndex = 0, g.test(q)) return "";
                } else if (T === "style") {
                    if (m.lastIndex = 0, m.test(q) || (k.lastIndex = 0, k.test(q) && (g.lastIndex = 0, 
                    g.test(q)))) return "";
                    F !== !1 && (q = (F = F || i).process(q));
                }
                return q = x(q);
            }, d.escapeHtml = s, d.escapeQuote = v, d.unescapeQuote = _, d.escapeHtmlEntities = b, 
            d.escapeDangerHtml5Entities = S, d.clearNonPrintableCharacter = w, d.friendlyAttrValue = E, 
            d.escapeAttrValue = x, d.onIgnoreTagStripAll = function() {
                return "";
            }, d.StripTagBody = function(C, T) {
                typeof T != "function" && (T = function() {});
                var q = !Array.isArray(C), F = [], L = !1;
                return {
                    onIgnoreTag: function(M, z, I) {
                        if (function(B) {
                            return !!q || r.indexOf(C, B) !== -1;
                        }(M)) {
                            if (I.isClosing) {
                                var O = "[/removed]", j = I.position + 10;
                                return F.push([ L !== !1 ? L : I.position, j ]), 
                                L = !1, O;
                            }
                            return L || (L = I.position), "[removed]";
                        }
                        return T(M, z, I);
                    },
                    remove: function(M) {
                        var z = "", I = 0;
                        return r.forEach(F, function(O) {
                            z += M.slice(I, O[0]), I = O[1];
                        }), z += M.slice(I);
                    }
                };
            }, d.stripCommentTag = function(C) {
                return C.replace(A, "");
            }, d.stripBlankChar = function(C) {
                var T = C.split("");
                return (T = T.filter(function(q) {
                    var F = q.charCodeAt(0);
                    return !(F === 127 || F <= 31 && F !== 10 && F !== 13);
                })).join("");
            }, d.cssFilter = i, d.getDefaultCSSWhiteList = e;
        }, function(D, d) {
            function o() {
                var e = {
                    "align-content": !1,
                    "align-items": !1,
                    "align-self": !1,
                    "alignment-adjust": !1,
                    "alignment-baseline": !1,
                    all: !1,
                    "anchor-point": !1,
                    animation: !1,
                    "animation-delay": !1,
                    "animation-direction": !1,
                    "animation-duration": !1,
                    "animation-fill-mode": !1,
                    "animation-iteration-count": !1,
                    "animation-name": !1,
                    "animation-play-state": !1,
                    "animation-timing-function": !1,
                    azimuth: !1,
                    "backface-visibility": !1,
                    background: !0,
                    "background-attachment": !0,
                    "background-clip": !0,
                    "background-color": !0,
                    "background-image": !0,
                    "background-origin": !0,
                    "background-position": !0,
                    "background-repeat": !0,
                    "background-size": !0,
                    "baseline-shift": !1,
                    binding: !1,
                    bleed: !1,
                    "bookmark-label": !1,
                    "bookmark-level": !1,
                    "bookmark-state": !1,
                    border: !0,
                    "border-bottom": !0,
                    "border-bottom-color": !0,
                    "border-bottom-left-radius": !0,
                    "border-bottom-right-radius": !0,
                    "border-bottom-style": !0,
                    "border-bottom-width": !0,
                    "border-collapse": !0,
                    "border-color": !0,
                    "border-image": !0,
                    "border-image-outset": !0,
                    "border-image-repeat": !0,
                    "border-image-slice": !0,
                    "border-image-source": !0,
                    "border-image-width": !0,
                    "border-left": !0,
                    "border-left-color": !0,
                    "border-left-style": !0,
                    "border-left-width": !0,
                    "border-radius": !0,
                    "border-right": !0,
                    "border-right-color": !0,
                    "border-right-style": !0,
                    "border-right-width": !0,
                    "border-spacing": !0,
                    "border-style": !0,
                    "border-top": !0,
                    "border-top-color": !0,
                    "border-top-left-radius": !0,
                    "border-top-right-radius": !0,
                    "border-top-style": !0,
                    "border-top-width": !0,
                    "border-width": !0,
                    bottom: !1,
                    "box-decoration-break": !0,
                    "box-shadow": !0,
                    "box-sizing": !0,
                    "box-snap": !0,
                    "box-suppress": !0,
                    "break-after": !0,
                    "break-before": !0,
                    "break-inside": !0,
                    "caption-side": !1,
                    chains: !1,
                    clear: !0,
                    clip: !1,
                    "clip-path": !1,
                    "clip-rule": !1,
                    color: !0,
                    "color-interpolation-filters": !0,
                    "column-count": !1,
                    "column-fill": !1,
                    "column-gap": !1,
                    "column-rule": !1,
                    "column-rule-color": !1,
                    "column-rule-style": !1,
                    "column-rule-width": !1,
                    "column-span": !1,
                    "column-width": !1,
                    columns: !1,
                    contain: !1,
                    content: !1,
                    "counter-increment": !1,
                    "counter-reset": !1,
                    "counter-set": !1,
                    crop: !1,
                    cue: !1,
                    "cue-after": !1,
                    "cue-before": !1,
                    cursor: !1,
                    direction: !1,
                    display: !0,
                    "display-inside": !0,
                    "display-list": !0,
                    "display-outside": !0,
                    "dominant-baseline": !1,
                    elevation: !1,
                    "empty-cells": !1,
                    filter: !1,
                    flex: !1,
                    "flex-basis": !1,
                    "flex-direction": !1,
                    "flex-flow": !1,
                    "flex-grow": !1,
                    "flex-shrink": !1,
                    "flex-wrap": !1,
                    float: !1,
                    "float-offset": !1,
                    "flood-color": !1,
                    "flood-opacity": !1,
                    "flow-from": !1,
                    "flow-into": !1,
                    font: !0,
                    "font-family": !0,
                    "font-feature-settings": !0,
                    "font-kerning": !0,
                    "font-language-override": !0,
                    "font-size": !0,
                    "font-size-adjust": !0,
                    "font-stretch": !0,
                    "font-style": !0,
                    "font-synthesis": !0,
                    "font-variant": !0,
                    "font-variant-alternates": !0,
                    "font-variant-caps": !0,
                    "font-variant-east-asian": !0,
                    "font-variant-ligatures": !0,
                    "font-variant-numeric": !0,
                    "font-variant-position": !0,
                    "font-weight": !0,
                    grid: !1,
                    "grid-area": !1,
                    "grid-auto-columns": !1,
                    "grid-auto-flow": !1,
                    "grid-auto-rows": !1,
                    "grid-column": !1,
                    "grid-column-end": !1,
                    "grid-column-start": !1,
                    "grid-row": !1,
                    "grid-row-end": !1,
                    "grid-row-start": !1,
                    "grid-template": !1,
                    "grid-template-areas": !1,
                    "grid-template-columns": !1,
                    "grid-template-rows": !1,
                    "hanging-punctuation": !1,
                    height: !0,
                    hyphens: !1,
                    icon: !1,
                    "image-orientation": !1,
                    "image-resolution": !1,
                    "ime-mode": !1,
                    "initial-letters": !1,
                    "inline-box-align": !1,
                    "justify-content": !1,
                    "justify-items": !1,
                    "justify-self": !1,
                    left: !1,
                    "letter-spacing": !0,
                    "lighting-color": !0,
                    "line-box-contain": !1,
                    "line-break": !1,
                    "line-grid": !1,
                    "line-height": !1,
                    "line-snap": !1,
                    "line-stacking": !1,
                    "line-stacking-ruby": !1,
                    "line-stacking-shift": !1,
                    "line-stacking-strategy": !1,
                    "list-style": !0,
                    "list-style-image": !0,
                    "list-style-position": !0,
                    "list-style-type": !0,
                    margin: !0,
                    "margin-bottom": !0,
                    "margin-left": !0,
                    "margin-right": !0,
                    "margin-top": !0,
                    "marker-offset": !1,
                    "marker-side": !1,
                    marks: !1,
                    mask: !1,
                    "mask-box": !1,
                    "mask-box-outset": !1,
                    "mask-box-repeat": !1,
                    "mask-box-slice": !1,
                    "mask-box-source": !1,
                    "mask-box-width": !1,
                    "mask-clip": !1,
                    "mask-image": !1,
                    "mask-origin": !1,
                    "mask-position": !1,
                    "mask-repeat": !1,
                    "mask-size": !1,
                    "mask-source-type": !1,
                    "mask-type": !1,
                    "max-height": !0,
                    "max-lines": !1,
                    "max-width": !0,
                    "min-height": !0,
                    "min-width": !0,
                    "move-to": !1,
                    "nav-down": !1,
                    "nav-index": !1,
                    "nav-left": !1,
                    "nav-right": !1,
                    "nav-up": !1,
                    "object-fit": !1,
                    "object-position": !1,
                    opacity: !1,
                    order: !1,
                    orphans: !1,
                    outline: !1,
                    "outline-color": !1,
                    "outline-offset": !1,
                    "outline-style": !1,
                    "outline-width": !1,
                    overflow: !1,
                    "overflow-wrap": !1,
                    "overflow-x": !1,
                    "overflow-y": !1,
                    padding: !0,
                    "padding-bottom": !0,
                    "padding-left": !0,
                    "padding-right": !0,
                    "padding-top": !0,
                    page: !1,
                    "page-break-after": !1,
                    "page-break-before": !1,
                    "page-break-inside": !1,
                    "page-policy": !1,
                    pause: !1,
                    "pause-after": !1,
                    "pause-before": !1,
                    perspective: !1,
                    "perspective-origin": !1,
                    pitch: !1,
                    "pitch-range": !1,
                    "play-during": !1,
                    position: !1,
                    "presentation-level": !1,
                    quotes: !1,
                    "region-fragment": !1,
                    resize: !1,
                    rest: !1,
                    "rest-after": !1,
                    "rest-before": !1,
                    richness: !1,
                    right: !1,
                    rotation: !1,
                    "rotation-point": !1,
                    "ruby-align": !1,
                    "ruby-merge": !1,
                    "ruby-position": !1,
                    "shape-image-threshold": !1,
                    "shape-outside": !1,
                    "shape-margin": !1,
                    size: !1,
                    speak: !1,
                    "speak-as": !1,
                    "speak-header": !1,
                    "speak-numeral": !1,
                    "speak-punctuation": !1,
                    "speech-rate": !1,
                    stress: !1,
                    "string-set": !1,
                    "tab-size": !1,
                    "table-layout": !1,
                    "text-align": !0,
                    "text-align-last": !0,
                    "text-combine-upright": !0,
                    "text-decoration": !0,
                    "text-decoration-color": !0,
                    "text-decoration-line": !0,
                    "text-decoration-skip": !0,
                    "text-decoration-style": !0,
                    "text-emphasis": !0,
                    "text-emphasis-color": !0,
                    "text-emphasis-position": !0,
                    "text-emphasis-style": !0,
                    "text-height": !0,
                    "text-indent": !0,
                    "text-justify": !0,
                    "text-orientation": !0,
                    "text-overflow": !0,
                    "text-shadow": !0,
                    "text-space-collapse": !0,
                    "text-transform": !0,
                    "text-underline-position": !0,
                    "text-wrap": !0,
                    top: !1,
                    transform: !1,
                    "transform-origin": !1,
                    "transform-style": !1,
                    transition: !1,
                    "transition-delay": !1,
                    "transition-duration": !1,
                    "transition-property": !1,
                    "transition-timing-function": !1,
                    "unicode-bidi": !1,
                    "vertical-align": !1,
                    visibility: !1,
                    "voice-balance": !1,
                    "voice-duration": !1,
                    "voice-family": !1,
                    "voice-pitch": !1,
                    "voice-range": !1,
                    "voice-rate": !1,
                    "voice-stress": !1,
                    "voice-volume": !1,
                    volume: !1,
                    "white-space": !1,
                    widows: !1,
                    width: !0,
                    "will-change": !1,
                    "word-break": !0,
                    "word-spacing": !0,
                    "word-wrap": !0,
                    "wrap-flow": !1,
                    "wrap-through": !1,
                    "writing-mode": !1,
                    "z-index": !1
                };
                return e;
            }
            var t = /javascript\s*\:/gim;
            d.whiteList = o(), d.getDefaultWhiteList = o, d.onAttr = function(e, r, n) {}, 
            d.onIgnoreAttr = function(e, r, n) {}, d.safeAttrValue = function(e, r) {
                return t.test(r) ? "" : r;
            };
        }, function(D, d) {
            D.exports = {
                indexOf: function(o, t) {
                    var e, r;
                    if (Array.prototype.indexOf) return o.indexOf(t);
                    for (e = 0, r = o.length; e < r; e++) if (o[e] === t) return e;
                    return -1;
                },
                forEach: function(o, t, e) {
                    var r, n;
                    if (Array.prototype.forEach) return o.forEach(t, e);
                    for (r = 0, n = o.length; r < n; r++) t.call(e, o[r], r, o);
                },
                trim: function(o) {
                    return String.prototype.trim ? o.trim() : o.replace(/(^\s*)|(\s*$)/g, "");
                },
                trimRight: function(o) {
                    return String.prototype.trimRight ? o.trimRight() : o.replace(/(\s*$)/g, "");
                }
            };
        }, function(D, d, o) {
            var t = o(15);
            function e(l) {
                var u = t.spaceIndex(l);
                if (u === -1) var c = l.slice(1, -1); else c = l.slice(1, u + 1);
                return (c = t.trim(c).toLowerCase()).slice(0, 1) === "/" && (c = c.slice(1)), 
                c.slice(-1) === "/" && (c = c.slice(0, -1)), c;
            }
            function r(l) {
                return l.slice(0, 2) === "</";
            }
            var n = /[^a-zA-Z0-9_:\.\-]/gim;
            function i(l, u) {
                for (;u < l.length; u++) {
                    var c = l[u];
                    if (c !== " ") return c === "=" ? u : -1;
                }
            }
            function s(l, u) {
                for (;u > 0; u--) {
                    var c = l[u];
                    if (c !== " ") return c === "=" ? u : -1;
                }
            }
            function a(l) {
                return function(u) {
                    return u[0] === '"' && u[u.length - 1] === '"' || u[0] === "'" && u[u.length - 1] === "'";
                }(l) ? l.substr(1, l.length - 2) : l;
            }
            d.parseTag = function(l, u, c) {
                var f = "", p = 0, h = !1, g = !1, m = 0, k = l.length, v = "", _ = "";
                t: for (m = 0; m < k; m++) {
                    var b = l.charAt(m);
                    if (h === !1) {
                        if (b === "<") {
                            h = m;
                            continue;
                        }
                    } else if (g === !1) {
                        if (b === "<") {
                            f += c(l.slice(p, m)), h = m, p = m;
                            continue;
                        }
                        if (b === ">") {
                            f += c(l.slice(p, h)), v = e(_ = l.slice(h, m + 1)), 
                            f += u(h, f.length, v, _, r(_)), p = m + 1, h = !1;
                            continue;
                        }
                        if (b === '"' || b === "'") for (var S = 1, w = l.charAt(m - S); w.trim() === "" || w === "="; ) {
                            if (w === "=") {
                                g = b;
                                continue t;
                            }
                            w = l.charAt(m - ++S);
                        }
                    } else if (b === g) {
                        g = !1;
                        continue;
                    }
                }
                return p < l.length && (f += c(l.substr(p))), f;
            }, d.parseAttr = function(l, u) {
                var c = 0, f = [], p = !1, h = l.length;
                function g(_, b) {
                    if (!((_ = (_ = t.trim(_)).replace(n, "").toLowerCase()).length < 1)) {
                        var S = u(_, b || "");
                        S && f.push(S);
                    }
                }
                for (var m = 0; m < h; m++) {
                    var k, v = l.charAt(m);
                    if (p !== !1 || v !== "=") if (p === !1 || m !== c || v !== '"' && v !== "'" || l.charAt(m - 1) !== "=") {
                        if (/\s|\n|\t/.test(v)) {
                            if (l = l.replace(/\s|\n|\t/g, " "), p === !1) {
                                if ((k = i(l, m)) === -1) {
                                    g(t.trim(l.slice(c, m))), p = !1, c = m + 1;
                                    continue;
                                }
                                m = k - 1;
                                continue;
                            }
                            if ((k = s(l, m - 1)) === -1) {
                                g(p, a(t.trim(l.slice(c, m)))), p = !1, c = m + 1;
                                continue;
                            }
                        }
                    } else {
                        if ((k = l.indexOf(v, m + 1)) === -1) break;
                        g(p, t.trim(l.slice(c + 1, k))), p = !1, c = (m = k) + 1;
                    } else p = l.slice(c, m), c = m + 1;
                }
                return c < l.length && (p === !1 ? g(l.slice(c)) : g(p, a(t.trim(l.slice(c))))), 
                t.trim(f.join(" "));
            };
        }, , function(D, d, o) {
            var t = o(20), e = o(25);
            function r(i) {
                return i == null;
            }
            function n(i) {
                (i = function(s) {
                    var a = {};
                    for (var l in s) a[l] = s[l];
                    return a;
                }(i || {})).whiteList = i.whiteList || t.whiteList, i.onAttr = i.onAttr || t.onAttr, 
                i.onIgnoreAttr = i.onIgnoreAttr || t.onIgnoreAttr, i.safeAttrValue = i.safeAttrValue || t.safeAttrValue, 
                this.options = i;
            }
            o(21), n.prototype.process = function(i) {
                if (!(i = (i = i || "").toString())) return "";
                var s = this.options, a = s.whiteList, l = s.onAttr, u = s.onIgnoreAttr, c = s.safeAttrValue;
                return e(i, function(f, p, h, g, m) {
                    var k = a[h], v = !1;
                    if (k === !0 ? v = k : typeof k == "function" ? v = k(g) : k instanceof RegExp && (v = k.test(g)), 
                    v !== !0 && (v = !1), g = c(h, g)) {
                        var _, b = {
                            position: p,
                            sourcePosition: f,
                            source: m,
                            isWhite: v
                        };
                        return v ? r(_ = l(h, g, b)) ? h + ":" + g : _ : r(_ = u(h, g, b)) ? void 0 : _;
                    }
                });
            }, D.exports = n;
        }, function(D, d, o) {
            var t = o(21);
            D.exports = function(e, r) {
                (e = t.trimRight(e))[e.length - 1] !== ";" && (e += ";");
                var n = e.length, i = !1, s = 0, a = 0, l = "";
                function u() {
                    if (!i) {
                        var p = t.trim(e.slice(s, a)), h = p.indexOf(":");
                        if (h !== -1) {
                            var g = t.trim(p.slice(0, h)), m = t.trim(p.slice(h + 1));
                            if (g) {
                                var k = r(s, l.length, g, m, p);
                                k && (l += k + "; ");
                            }
                        }
                    }
                    s = a + 1;
                }
                for (;a < n; a++) {
                    var c = e[a];
                    if (c === "/" && e[a + 1] === "*") {
                        var f = e.indexOf("*/", a + 2);
                        if (f === -1) break;
                        s = (a = f + 1) + 1, i = !1;
                    } else c === "(" ? i = !0 : c === ")" ? i = !1 : c === ";" ? i || u() : c === `
` && u();
                }
                return t.trim(l);
            };
        }, function(D, d, o) {
            var t = o(14).FilterCSS, e = o(19), r = o(22), n = r.parseTag, i = r.parseAttr, s = o(15);
            function a(u) {
                return u == null;
            }
            function l(u) {
                (u = function(c) {
                    var f = {};
                    for (var p in c) f[p] = c[p];
                    return f;
                }(u || {})).stripIgnoreTag && (u.onIgnoreTag, u.onIgnoreTag = e.onIgnoreTagStripAll), 
                u.whiteList = u.whiteList || e.whiteList, u.onTag = u.onTag || e.onTag, 
                u.onTagAttr = u.onTagAttr || e.onTagAttr, u.onIgnoreTag = u.onIgnoreTag || e.onIgnoreTag, 
                u.onIgnoreTagAttr = u.onIgnoreTagAttr || e.onIgnoreTagAttr, u.safeAttrValue = u.safeAttrValue || e.safeAttrValue, 
                u.escapeHtml = u.escapeHtml || e.escapeHtml, this.options = u, u.css === !1 ? this.cssFilter = !1 : (u.css = u.css || {}, 
                this.cssFilter = new t(u.css));
            }
            l.prototype.process = function(u) {
                if (!(u = (u = u || "").toString())) return "";
                var c = this.options, f = c.whiteList, p = c.onTag, h = c.onIgnoreTag, g = c.onTagAttr, m = c.onIgnoreTagAttr, k = c.safeAttrValue, v = c.escapeHtml, _ = this.cssFilter;
                c.stripBlankChar && (u = e.stripBlankChar(u)), c.allowCommentTag || (u = e.stripCommentTag(u));
                var b = !1;
                c.stripIgnoreTagBody && (b = e.StripTagBody(c.stripIgnoreTagBody, h), 
                h = b.onIgnoreTag);
                var S = n(u, function(w, E, x, A, C) {
                    var T, q = {
                        sourcePosition: w,
                        position: E,
                        isClosing: C,
                        isWhite: f.hasOwnProperty(x)
                    };
                    if (!a(T = p(x, A, q))) return T;
                    if (q.isWhite) {
                        if (q.isClosing) return "</" + x + ">";
                        var F = function(z) {
                            var I = s.spaceIndex(z);
                            if (I === -1) return {
                                html: "",
                                closing: z[z.length - 2] === "/"
                            };
                            var O = (z = s.trim(z.slice(I + 1, -1)))[z.length - 1] === "/";
                            return O && (z = s.trim(z.slice(0, -1))), {
                                html: z,
                                closing: O
                            };
                        }(A), L = f[x], M = i(F.html, function(z, I) {
                            var O, j = s.indexOf(L, z) !== -1;
                            return a(O = g(x, z, I, j)) ? j ? (I = k(x, z, I, _)) ? z + '="' + I + '"' : z : a(O = m(x, z, I, j)) ? void 0 : O : O;
                        });
                        return A = "<" + x, M && (A += " " + M), F.closing && (A += " /"), 
                        A += ">";
                    }
                    return a(T = h(x, A, q)) ? v(A) : T;
                }, v);
                return b && (S = b.remove(S)), S;
            }, D.exports = l;
        } ]).default;
    }(ut));
    var at = {
        exports: {}
    };
    typeof self < "u";
    let W, J, Y, Q;
    W = K(at.exports = function(y) {
        var D = {};
        function d(o) {
            if (D[o]) return D[o].exports;
            var t = D[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return y[o].call(t.exports, t, t.exports, d), t.l = !0, t.exports;
        }
        return d.m = y, d.c = D, d.d = function(o, t, e) {
            d.o(o, t) || Object.defineProperty(o, t, {
                enumerable: !0,
                get: e
            });
        }, d.r = function(o) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(o, "__esModule", {
                value: !0
            });
        }, d.t = function(o, t) {
            if (1 & t && (o = d(o)), 8 & t || 4 & t && typeof o == "object" && o && o.__esModule) return o;
            var e = Object.create(null);
            if (d.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: o
            }), 2 & t && typeof o != "string") for (var r in o) d.d(e, r, function(n) {
                return o[n];
            }.bind(null, r));
            return e;
        }, d.n = function(o) {
            var t = o && o.__esModule ? function() {
                return o.default;
            } : function() {
                return o;
            };
            return d.d(t, "a", t), t;
        }, d.o = function(o, t) {
            return Object.prototype.hasOwnProperty.call(o, t);
        }, d.p = "", d(d.s = 82);
    }([ function(y, D, d) {
        var o = Object.prototype.hasOwnProperty;
        function t(g, m) {
            return o.call(g, m);
        }
        function e(g) {
            return !(g >= 55296 && g <= 57343 || g >= 64976 && g <= 65007 || !(65535 & ~g) || (65535 & g) == 65534 || g >= 0 && g <= 8 || g === 11 || g >= 14 && g <= 31 || g >= 127 && g <= 159 || g > 1114111);
        }
        function r(g) {
            if (g > 65535) {
                var m = 55296 + ((g -= 65536) >> 10), k = 56320 + (1023 & g);
                return String.fromCharCode(m, k);
            }
            return String.fromCharCode(g);
        }
        var n = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, i = new RegExp(n.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"), s = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, a = d(7), l = /[&<>"]/, u = /[&<>"]/g, c = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        function f(g) {
            return c[g];
        }
        var p = /[.?*+^$[\]\\(){}|-]/g, h = d(3);
        D.lib = {}, D.lib.mdurl = d(8), D.lib.ucmicro = d(26), D.assign = function(g) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(m) {
                if (m) {
                    if (typeof m != "object") throw new TypeError(m + "must be object");
                    Object.keys(m).forEach(function(k) {
                        g[k] = m[k];
                    });
                }
            }), g;
        }, D.isString = function(g) {
            return function(m) {
                return Object.prototype.toString.call(m);
            }(g) === "[object String]";
        }, D.has = t, D.unescapeMd = function(g) {
            return g.indexOf("\\") < 0 ? g : g.replace(n, "$1");
        }, D.unescapeAll = function(g) {
            return g.indexOf("\\") < 0 && g.indexOf("&") < 0 ? g : g.replace(i, function(m, k, v) {
                return k || function(_, b) {
                    var S = 0;
                    return t(a, b) ? a[b] : b.charCodeAt(0) === 35 && s.test(b) && e(S = b[1].toLowerCase() === "x" ? parseInt(b.slice(2), 16) : parseInt(b.slice(1), 10)) ? r(S) : _;
                }(m, v);
            });
        }, D.isValidEntityCode = e, D.fromCodePoint = r, D.escapeHtml = function(g) {
            return l.test(g) ? g.replace(u, f) : g;
        }, D.arrayReplaceAt = function(g, m, k) {
            return [].concat(g.slice(0, m), k, g.slice(m + 1));
        }, D.isSpace = function(g) {
            switch (g) {
              case 9:
              case 32:
                return !0;
            }
            return !1;
        }, D.isWhiteSpace = function(g) {
            if (g >= 8192 && g <= 8202) return !0;
            switch (g) {
              case 9:
              case 10:
              case 11:
              case 12:
              case 13:
              case 32:
              case 160:
              case 5760:
              case 8239:
              case 8287:
              case 12288:
                return !0;
            }
            return !1;
        }, D.isMdAsciiPunct = function(g) {
            switch (g) {
              case 33:
              case 34:
              case 35:
              case 36:
              case 37:
              case 38:
              case 39:
              case 40:
              case 41:
              case 42:
              case 43:
              case 44:
              case 45:
              case 46:
              case 47:
              case 58:
              case 59:
              case 60:
              case 61:
              case 62:
              case 63:
              case 64:
              case 91:
              case 92:
              case 93:
              case 94:
              case 95:
              case 96:
              case 123:
              case 124:
              case 125:
              case 126:
                return !0;

              default:
                return !1;
            }
        }, D.isPunctChar = function(g) {
            return h.test(g);
        }, D.escapeRE = function(g) {
            return g.replace(p, "\\$&");
        }, D.normalizeReference = function(g) {
            return g = g.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (g = g.replace(/ẞ/g, "ß")), 
            g.toLowerCase().toUpperCase();
        };
    }, function(y, D, d) {
        function o() {
            return (o = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
            }).apply(this, arguments);
        }
        d.d(D, "a", function() {
            return o;
        });
    }, function(y, D, d) {
        d.d(D, "a", function() {
            return r;
        });
        var o = d(16), t = d.n(o), e = d(0);
        function r(n) {
            var i = n.codeHighlightExtensionMap, s = i === void 0 ? {} : i, a = n.hasLang, l = a === void 0 ? function() {
                return !0;
            } : a, u = n.highlight, c = u === void 0 ? function(p) {
                return p;
            } : u, f = n.codeBlockClass;
            return function(p, h) {
                var g = Object(e.escapeHtml)(p);
                return (h = s[h] || h) && l(h) && (g = c(p, h)), '<pre class="' + function(m) {
                    return f ? f(m) : "language-" + m;
                }(h) + '"><code>' + g + "</code></pre>";
            };
        }
        D.b = function() {
            var n = new t.a();
            return n.set({
                html: !0,
                breaks: !0,
                linkify: !1,
                typographer: !0
            }), n;
        };
    }, function(y, D) {
        y.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }, function(y, D, d) {
        function o() {
            this.__rules__ = [], this.__cache__ = null;
        }
        o.prototype.__find__ = function(t) {
            for (var e = 0; e < this.__rules__.length; e++) if (this.__rules__[e].name === t) return e;
            return -1;
        }, o.prototype.__compile__ = function() {
            var t = this, e = [ "" ];
            t.__rules__.forEach(function(r) {
                r.enabled && r.alt.forEach(function(n) {
                    e.indexOf(n) < 0 && e.push(n);
                });
            }), t.__cache__ = {}, e.forEach(function(r) {
                t.__cache__[r] = [], t.__rules__.forEach(function(n) {
                    n.enabled && (r && n.alt.indexOf(r) < 0 || t.__cache__[r].push(n.fn));
                });
            });
        }, o.prototype.at = function(t, e, r) {
            var n = this.__find__(t), i = r || {};
            if (n === -1) throw new Error("Parser rule not found: " + t);
            this.__rules__[n].fn = e, this.__rules__[n].alt = i.alt || [], this.__cache__ = null;
        }, o.prototype.before = function(t, e, r, n) {
            var i = this.__find__(t), s = n || {};
            if (i === -1) throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(i, 0, {
                name: e,
                enabled: !0,
                fn: r,
                alt: s.alt || []
            }), this.__cache__ = null;
        }, o.prototype.after = function(t, e, r, n) {
            var i = this.__find__(t), s = n || {};
            if (i === -1) throw new Error("Parser rule not found: " + t);
            this.__rules__.splice(i + 1, 0, {
                name: e,
                enabled: !0,
                fn: r,
                alt: s.alt || []
            }), this.__cache__ = null;
        }, o.prototype.push = function(t, e, r) {
            var n = r || {};
            this.__rules__.push({
                name: t,
                enabled: !0,
                fn: e,
                alt: n.alt || []
            }), this.__cache__ = null;
        }, o.prototype.enable = function(t, e) {
            Array.isArray(t) || (t = [ t ]);
            var r = [];
            return t.forEach(function(n) {
                var i = this.__find__(n);
                if (i < 0) {
                    if (e) return;
                    throw new Error("Rules manager: invalid rule name " + n);
                }
                this.__rules__[i].enabled = !0, r.push(n);
            }, this), this.__cache__ = null, r;
        }, o.prototype.enableOnly = function(t, e) {
            Array.isArray(t) || (t = [ t ]), this.__rules__.forEach(function(r) {
                r.enabled = !1;
            }), this.enable(t, e);
        }, o.prototype.disable = function(t, e) {
            Array.isArray(t) || (t = [ t ]);
            var r = [];
            return t.forEach(function(n) {
                var i = this.__find__(n);
                if (i < 0) {
                    if (e) return;
                    throw new Error("Rules manager: invalid rule name " + n);
                }
                this.__rules__[i].enabled = !1, r.push(n);
            }, this), this.__cache__ = null, r;
        }, o.prototype.getRules = function(t) {
            return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
        }, y.exports = o;
    }, function(y, D, d) {
        function o(t, e, r) {
            this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = r, 
            this.level = 0, this.children = null, this.content = "", this.markup = "", 
            this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
        }
        o.prototype.attrIndex = function(t) {
            var e, r, n;
            if (!this.attrs) return -1;
            for (r = 0, n = (e = this.attrs).length; r < n; r++) if (e[r][0] === t) return r;
            return -1;
        }, o.prototype.attrPush = function(t) {
            this.attrs ? this.attrs.push(t) : this.attrs = [ t ];
        }, o.prototype.attrSet = function(t, e) {
            var r = this.attrIndex(t), n = [ t, e ];
            r < 0 ? this.attrPush(n) : this.attrs[r] = n;
        }, o.prototype.attrGet = function(t) {
            var e = this.attrIndex(t), r = null;
            return e >= 0 && (r = this.attrs[e][1]), r;
        }, o.prototype.attrJoin = function(t, e) {
            var r = this.attrIndex(t);
            r < 0 ? this.attrPush([ t, e ]) : this.attrs[r][1] = this.attrs[r][1] + " " + e;
        }, y.exports = o;
    }, function(y, D, d) {
        const o = /[\u0000-\u001f]/g, t = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g, e = /[\u0300-\u036F]/g;
        y.exports = function(r) {
            return r.normalize("NFKD").replace(e, "").replace(o, "").replace(t, "-").replace(/\-{2,}/g, "-").replace(/^\-+|\-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
        };
    }, function(y, D, d) {
        y.exports = d(21);
    }, function(y, D, d) {
        y.exports.encode = d(22), y.exports.decode = d(23), y.exports.format = d(24), 
        y.exports.parse = d(25);
    }, function(y, D) {
        y.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }, function(y, D) {
        y.exports = /[\0-\x1F\x7F-\x9F]/;
    }, function(y, D) {
        y.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    }, function(y, D, d) {
        var o = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, t = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", e = new RegExp("^(?:" + o + "|" + t + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), r = new RegExp("^(?:" + o + "|" + t + ")");
        y.exports.HTML_TAG_RE = e, y.exports.HTML_OPEN_CLOSE_TAG_RE = r;
    }, function(y, D, d) {
        function o(t, e) {
            var r, n, i, s, a, l = [], u = e.length;
            for (r = 0; r < u; r++) (i = e[r]).marker === 126 && i.end !== -1 && (s = e[i.end], 
            (a = t.tokens[i.token]).type = "s_open", a.tag = "s", a.nesting = 1, 
            a.markup = "~~", a.content = "", (a = t.tokens[s.token]).type = "s_close", 
            a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", t.tokens[s.token - 1].type === "text" && t.tokens[s.token - 1].content === "~" && l.push(s.token - 1));
            for (;l.length; ) {
                for (n = (r = l.pop()) + 1; n < t.tokens.length && t.tokens[n].type === "s_close"; ) n++;
                r !== --n && (a = t.tokens[n], t.tokens[n] = t.tokens[r], t.tokens[r] = a);
            }
        }
        y.exports.tokenize = function(t, e) {
            var r, n, i, s, a = t.pos, l = t.src.charCodeAt(a);
            if (e || l !== 126 || (i = (n = t.scanDelims(t.pos, !0)).length, s = String.fromCharCode(l), 
            i < 2)) return !1;
            for (i % 2 && (t.push("text", "", 0).content = s, i--), r = 0; r < i; r += 2) t.push("text", "", 0).content = s + s, 
            t.delimiters.push({
                marker: l,
                length: 0,
                token: t.tokens.length - 1,
                end: -1,
                open: n.can_open,
                close: n.can_close
            });
            return t.pos += n.length, !0;
        }, y.exports.postProcess = function(t) {
            var e, r = t.tokens_meta, n = t.tokens_meta.length;
            for (o(t, t.delimiters), e = 0; e < n; e++) r[e] && r[e].delimiters && o(t, r[e].delimiters);
        };
    }, function(y, D, d) {
        function o(t, e) {
            var r, n, i, s, a, l;
            for (r = e.length - 1; r >= 0; r--) (n = e[r]).marker !== 95 && n.marker !== 42 || n.end !== -1 && (i = e[n.end], 
            l = r > 0 && e[r - 1].end === n.end + 1 && e[r - 1].marker === n.marker && e[r - 1].token === n.token - 1 && e[n.end + 1].token === i.token + 1, 
            a = String.fromCharCode(n.marker), (s = t.tokens[n.token]).type = l ? "strong_open" : "em_open", 
            s.tag = l ? "strong" : "em", s.nesting = 1, s.markup = l ? a + a : a, 
            s.content = "", (s = t.tokens[i.token]).type = l ? "strong_close" : "em_close", 
            s.tag = l ? "strong" : "em", s.nesting = -1, s.markup = l ? a + a : a, 
            s.content = "", l && (t.tokens[e[r - 1].token].content = "", t.tokens[e[n.end + 1].token].content = "", 
            r--));
        }
        y.exports.tokenize = function(t, e) {
            var r, n, i = t.pos, s = t.src.charCodeAt(i);
            if (e || s !== 95 && s !== 42) return !1;
            for (n = t.scanDelims(t.pos, s === 42), r = 0; r < n.length; r++) t.push("text", "", 0).content = String.fromCharCode(s), 
            t.delimiters.push({
                marker: s,
                length: n.length,
                token: t.tokens.length - 1,
                end: -1,
                open: n.can_open,
                close: n.can_close
            });
            return t.pos += n.length, !0;
        }, y.exports.postProcess = function(t) {
            var e, r = t.tokens_meta, n = t.tokens_meta.length;
            for (o(t, t.delimiters), e = 0; e < n; e++) r[e] && r[e].delimiters && o(t, r[e].delimiters);
        };
    }, function(y, D, d) {
        const o = d(18), t = {
            leftDelimiter: "{",
            rightDelimiter: "}",
            allowedAttributes: []
        };
        function e(s, a, l) {
            let u = {
                match: !1,
                j: null
            }, c = (f = s, (p = l.shift !== void 0 ? a + l.shift : l.position) >= 0 ? f[p] : f[f.length + p]);
            var f, p;
            if (c === void 0) return u;
            for (let h in l) if (h !== "shift" && h !== "position") {
                if (c[h] === void 0) return u;
                if (h === "children" && r(l.children)) {
                    if (c.children.length === 0) return u;
                    let g, m = l.children, k = c.children;
                    if (m.every(v => v.position !== void 0)) {
                        if (g = m.every(v => e(k, v.position, v).match), g) {
                            let v = i(m).position;
                            u.j = v >= 0 ? v : k.length + v;
                        }
                    } else for (let v = 0; v < k.length; v++) if (g = m.every(_ => e(k, v, _).match), 
                    g) {
                        u.j = v;
                        break;
                    }
                    if (g === !1) return u;
                } else switch (typeof l[h]) {
                  case "boolean":
                  case "number":
                  case "string":
                    if (c[h] !== l[h]) return u;
                    break;

                  case "function":
                    if (!l[h](c[h])) return u;
                    break;

                  case "object":
                    if (n(l[h])) {
                        if (l[h].every(g => g(c[h])) === !1) return u;
                        break;
                    }

                  default:
                    throw new Error(`Unknown type of pattern test (key: ${h}). Test should be of type boolean, number, string, function or array of functions.`);
                }
            }
            return u.match = !0, u;
        }
        function r(s) {
            return Array.isArray(s) && s.length && s.every(a => typeof a == "object");
        }
        function n(s) {
            return Array.isArray(s) && s.length && s.every(a => typeof a == "function");
        }
        function i(s) {
            return s.slice(-1)[0] || {};
        }
        y.exports = function(s, a) {
            let l = Object.assign({}, t);
            l = Object.assign(l, a);
            const u = o(l);
            s.core.ruler.before("linkify", "curly_attributes", function(c) {
                let f = c.tokens;
                for (let p = 0; p < f.length; p++) for (let h = 0; h < u.length; h++) {
                    let g = u[h], m = null;
                    g.tests.every(k => {
                        let v = e(f, p, k);
                        return v.j !== null && (m = v.j), v.match;
                    }) && (g.transform(f, p, m), g.name !== "inline attributes" && g.name !== "inline nesting 0" || h--);
                }
            });
        };
    }, function(y, D, d) {
        y.exports = d(20);
    }, function(y, D, d) {
        d.r(D), d.d(D, "default", function() {
            return p;
        });
        var o = d(1), t = d(15), e = d.n(t), r = function(h, g) {
            var m = (g === void 0 ? {} : g).lineMarkup, k = m === void 0 ? "data-line" : m, v = function(w, E, x, A, C) {
                return C.renderToken(w, E, x);
            };
            function _(w) {
                return function(E, x, A, C, T) {
                    var q = E[x];
                    return q.attrPush([ k, q.map[0] + 1 ]), w(E, x, A, C, T);
                };
            }
            function b(w) {
                return function(E, x, A, C, T) {
                    var q = w(E, x, A, C, T), F = E[x].map[0] + 1;
                    return "<div " + k + '="' + F + '">' + q + "</div>";
                };
            }
            var S = {
                table_open: _,
                blockquote_open: _,
                bullet_list_open: _,
                ordered_list_open: _,
                reference_open: _,
                heading_open: _,
                lheading_open: _,
                paragraph_open: _,
                hr: _,
                html_block: b,
                code_block: b,
                fence: b
            };
            Object.keys(S).forEach(function(w) {
                var E = h.renderer.rules[w] || v;
                h.renderer.rules[w] = S[w](E);
            });
        }, n = function(h, g) {
            g === void 0 && (g = {});
            var m = g.getMarks;
            m && h.core.ruler.push("anchor", function(k) {
                var v = {}, _ = k.tokens;
                _.filter(function(b) {
                    return b.type === "heading_open";
                }).forEach(function(b) {
                    var S = _[_.indexOf(b) + 1].content, w = Number(b.tag.substr(1));
                    v[S] = S in v ? Number(v[S]) + 1 : "";
                    var E = m(S, w, v[S]);
                    E && E.forEach(function(x) {
                        var A = x.attr, C = x.value;
                        b.attrPush([ A, C ]);
                    });
                });
            });
        }, i = {
            includeLevel: [ 2, 3 ],
            containerClass: "table-of-contents",
            listClass: "table-of-content-list",
            listItemClass: "table-of-content-list-item",
            markerPattern: /^\[\[toc\]\]/im,
            listType: "ul",
            getAnchorAttrs: function() {
                return [];
            },
            format: void 0,
            forceFullToc: !1,
            containerHeaderHtml: void 0,
            containerFooterHtml: void 0,
            transformLink: void 0
        }, s = function(h, g) {
            var m, k = Object(o.a)({}, i, g), v = k.markerPattern;
            function _(b, S, w) {
                for (var E, x, A = [], C = "", T = S.length, q = b; q < T; ) {
                    var F = S[q], L = S[q - 1], M = F.tag && parseInt(F.tag.substr(1, 1));
                    if (F.type === "heading_close" && k.includeLevel.indexOf(M) != -1 && L.type === "inline") {
                        if (E) {
                            if (M > E) {
                                C += (x = _(q, S, w))[1], q = x[0];
                                continue;
                            }
                            if (M < E) return C += "</li>", A.push(C), [ q, "<" + k.listType + ' class="' + k.listClass + '">' + A.join("") + "</" + k.listType + ">" ];
                            M == E && (C += "</li>", A.push(C));
                        } else E = M;
                        var z = L.children.reduce(function(B, R) {
                            return B + R.content;
                        }, ""), I = L.content, O = w[I] = I in w ? Number(w[I]) + 1 : "", j = k.getAnchorAttrs(I, M, O);
                        C = '<li class="' + k.listItemClass + `">
      <a ` + j.map(function(B) {
                            return B.attr + '="' + B.value + '"';
                        }).join(" ") + ">", C += z, C += "</a>", q++;
                    } else q++;
                }
                return C += C === "" ? "" : "</li>", A.push(C), [ q, "<" + k.listType + ' class="' + k.listClass + '">' + A.join("") + "</" + k.listType + ">" ];
            }
            h.renderer.rules.toc_open = function(b, S) {
                var w = '<div class="' + k.containerClass + '">';
                return k.containerHeaderHtml && (w += k.containerHeaderHtml), w;
            }, h.renderer.rules.toc_close = function(b, S) {
                var w = "";
                return k.containerFooterHtml && (w = k.containerFooterHtml), w + "</div>";
            }, h.renderer.rules.toc_body = function(b, S) {
                var w = {};
                if (k.forceFullToc) {
                    for (var E = "", x = 0, A = m && m.tokens && m.tokens.length; x < A; ) {
                        var C = _(x, m.tokens, w);
                        x = C[0], E += C[1];
                    }
                    return E;
                }
                return _(0, m.tokens, w)[1];
            }, h.core.ruler.push("grab_state", function(b) {
                m = b;
            }), h.inline.ruler.after("emphasis", "toc", function(b, S) {
                var w;
                if (b.src.charCodeAt(b.pos) !== 91 || S || (w = (w = v.exec(b.src.substr(b.pos))) ? w.filter(function(x) {
                    return x;
                }) : []).length < 1) return !1;
                b.push("toc_open", "toc", 1).markup = "[[toc]]", b.push("toc_body", "", 0), 
                b.push("toc_close", "toc", -1);
                var E = b.src.indexOf(`
`, b.pos);
                return b.pos = E !== -1 ? E : b.pos + b.posMax + 1, !0;
            });
        }, a = function(h, g) {
            g === void 0 && (g = {});
            var m = g.getWrapperClass, k = m === void 0 ? function(w) {
                return "language-" + w;
            } : m, v = function(w) {
                return function() {
                    for (var E = arguments.length, x = new Array(E), A = 0; A < E; A++) x[A] = arguments[A];
                    var C = x[0][x[1]], T = w.apply(void 0, x);
                    return '\x3c!--beforebegin--\x3e<div class="' + k(C.info.trim()) + ' extra-class" extra-attr>\x3c!--afterbegin--\x3e' + T + "\x3c!--beforeend--\x3e</div>\x3c!--afterend--\x3e";
                };
            }, _ = h.renderer.rules, b = _.fence, S = _.code_block;
            h.renderer.rules.fence = v(b), h.renderer.rules.code_block = v(S);
        }, l = function(h, g) {
            var m = g.externalAttrs, k = g.openLinkIcon, v = g.openLinkIconClass, _ = !1;
            h.renderer.rules.link_open = function(b, S, w, E, x) {
                var A = b[S], C = A.attrIndex("href");
                if (C >= 0) {
                    var T = A.attrs[C][1];
                    /^https?:/.test(T) && (Object.keys(m).forEach(function(q) {
                        A.attrSet(q, m[q]);
                    }), /_blank/i.test(m.target) && (_ = !0));
                }
                return x.renderToken(b, S, w);
            }, h.renderer.rules.link_close = function(b, S, w, E, x) {
                return _ && (_ = !1, k) ? v ? '<i class="' + v + '"></i>' + x.renderToken(b, S, w) : '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>' + x.renderToken(b, S, w) : x.renderToken(b, S, w);
            };
        }, u = d(6), c = d.n(u), f = d(2);
        function p(h) {
            var g = h === void 0 ? {} : h, m = g.toc, k = g.link, v = g.attrs, _ = Object(f.b)();
            return _.use(l, Object(o.a)({
                externalAttrs: {
                    target: "_blank"
                }
            }, k)).use(a, {
                getWrapperClass: function(b) {
                    return "v-md-pre-wrapper v-md-pre-wrapper-" + b;
                }
            }).use(e.a, Object(o.a)({
                leftDelimiter: "{{{",
                rightDelimiter: "}}}"
            }, v, {
                allowedAttributes: [ "width", "height" ].concat(v == null ? void 0 : v.allowedAttributes)
            })).use(n, {
                getMarks: function(b, S, w) {
                    return [ {
                        attr: "data-v-md-heading",
                        value: c()(b) + (w ? "-" + w : "")
                    } ];
                }
            }).use(s, Object(o.a)({
                listClass: "v-md-toc",
                listItemClass: "v-md-toc-item",
                getAnchorAttrs: function(b, S, w) {
                    return [ {
                        attr: "data-v-md-anchor",
                        value: c()(b) + (w ? "-" + w : "")
                    } ];
                }
            }, m)).use(r, {
                lineMarkup: "data-v-md-line"
            }), {
                previewClass: "markdown-body",
                extend: function(b) {
                    b(_);
                },
                markdownParser: _
            };
        }
    }, function(y, D, d) {
        const o = d(19);
        function t(e) {
            return e.slice(-1)[0];
        }
        y.exports = e => {
            const r = new RegExp("^ {0,3}[-*_]{3,} ?" + o.escapeRegExp(e.leftDelimiter) + "[^" + o.escapeRegExp(e.rightDelimiter) + "]");
            return [ {
                name: "fenced code blocks",
                tests: [ {
                    shift: 0,
                    block: !0,
                    info: o.hasDelimiters("end", e)
                } ],
                transform: (n, i) => {
                    let s = n[i], a = s.info.lastIndexOf(e.leftDelimiter), l = o.getAttrs(s.info, a, e);
                    o.addAttrs(l, s), s.info = o.removeDelimiter(s.info, e);
                }
            }, {
                name: "inline nesting 0",
                tests: [ {
                    shift: 0,
                    type: "inline",
                    children: [ {
                        shift: -1,
                        type: n => n === "image" || n === "code_inline"
                    }, {
                        shift: 0,
                        type: "text",
                        content: o.hasDelimiters("start", e)
                    } ]
                } ],
                transform: (n, i, s) => {
                    let a = n[i].children[s], l = a.content.indexOf(e.rightDelimiter), u = n[i].children[s - 1], c = o.getAttrs(a.content, 0, e);
                    o.addAttrs(c, u), a.content.length === l + e.rightDelimiter.length ? n[i].children.splice(s, 1) : a.content = a.content.slice(l + e.rightDelimiter.length);
                }
            }, {
                name: "tables",
                tests: [ {
                    shift: 0,
                    type: "table_close"
                }, {
                    shift: 1,
                    type: "paragraph_open"
                }, {
                    shift: 2,
                    type: "inline",
                    content: o.hasDelimiters("only", e)
                } ],
                transform: (n, i) => {
                    let s = n[i + 2], a = o.getMatchingOpeningToken(n, i), l = o.getAttrs(s.content, 0, e);
                    o.addAttrs(l, a), n.splice(i + 1, 3);
                }
            }, {
                name: "inline attributes",
                tests: [ {
                    shift: 0,
                    type: "inline",
                    children: [ {
                        shift: -1,
                        nesting: -1
                    }, {
                        shift: 0,
                        type: "text",
                        content: o.hasDelimiters("start", e)
                    } ]
                } ],
                transform: (n, i, s) => {
                    let a = n[i].children[s], l = a.content, u = o.getAttrs(l, 0, e), c = o.getMatchingOpeningToken(n[i].children, s - 1);
                    o.addAttrs(u, c), a.content = l.slice(l.indexOf(e.rightDelimiter) + e.rightDelimiter.length);
                }
            }, {
                name: "list softbreak",
                tests: [ {
                    shift: -2,
                    type: "list_item_open"
                }, {
                    shift: 0,
                    type: "inline",
                    children: [ {
                        position: -2,
                        type: "softbreak"
                    }, {
                        position: -1,
                        type: "text",
                        content: o.hasDelimiters("only", e)
                    } ]
                } ],
                transform: (n, i, s) => {
                    let a = n[i].children[s].content, l = o.getAttrs(a, 0, e), u = i - 2;
                    for (;n[u - 1] && n[u - 1].type !== "ordered_list_open" && n[u - 1].type !== "bullet_list_open"; ) u--;
                    o.addAttrs(l, n[u - 1]), n[i].children = n[i].children.slice(0, -2);
                }
            }, {
                name: "list double softbreak",
                tests: [ {
                    shift: 0,
                    type: n => n === "bullet_list_close" || n === "ordered_list_close"
                }, {
                    shift: 1,
                    type: "paragraph_open"
                }, {
                    shift: 2,
                    type: "inline",
                    content: o.hasDelimiters("only", e),
                    children: n => n.length === 1
                }, {
                    shift: 3,
                    type: "paragraph_close"
                } ],
                transform: (n, i) => {
                    let s = n[i + 2].content, a = o.getAttrs(s, 0, e), l = o.getMatchingOpeningToken(n, i);
                    o.addAttrs(a, l), n.splice(i + 1, 3);
                }
            }, {
                name: "list item end",
                tests: [ {
                    shift: -2,
                    type: "list_item_open"
                }, {
                    shift: 0,
                    type: "inline",
                    children: [ {
                        position: -1,
                        type: "text",
                        content: o.hasDelimiters("end", e)
                    } ]
                } ],
                transform: (n, i, s) => {
                    let a = n[i].children[s], l = a.content, u = o.getAttrs(l, l.lastIndexOf(e.leftDelimiter), e);
                    o.addAttrs(u, n[i - 2]);
                    let c = l.slice(0, l.lastIndexOf(e.leftDelimiter));
                    a.content = t(c) !== " " ? c : c.slice(0, -1);
                }
            }, {
                name: `
{.a} softbreak then curly in start`,
                tests: [ {
                    shift: 0,
                    type: "inline",
                    children: [ {
                        position: -2,
                        type: "softbreak"
                    }, {
                        position: -1,
                        type: "text",
                        content: o.hasDelimiters("only", e)
                    } ]
                } ],
                transform: (n, i, s) => {
                    let a = n[i].children[s], l = o.getAttrs(a.content, 0, e), u = i + 1;
                    for (;n[u + 1] && n[u + 1].nesting === -1; ) u++;
                    let c = o.getMatchingOpeningToken(n, u);
                    o.addAttrs(l, c), n[i].children = n[i].children.slice(0, -2);
                }
            }, {
                name: "horizontal rule",
                tests: [ {
                    shift: 0,
                    type: "paragraph_open"
                }, {
                    shift: 1,
                    type: "inline",
                    children: n => n.length === 1,
                    content: n => n.match(r) !== null
                }, {
                    shift: 2,
                    type: "paragraph_close"
                } ],
                transform: (n, i) => {
                    let s = n[i];
                    s.type = "hr", s.tag = "hr", s.nesting = 0;
                    let a = n[i + 1].content, l = a.lastIndexOf(e.leftDelimiter);
                    s.attrs = o.getAttrs(a, l, e), s.markup = a, n.splice(i + 1, 2);
                }
            }, {
                name: "end of block",
                tests: [ {
                    shift: 0,
                    type: "inline",
                    children: [ {
                        position: -1,
                        content: o.hasDelimiters("end", e),
                        type: n => n !== "code_inline"
                    } ]
                } ],
                transform: (n, i, s) => {
                    let a = n[i].children[s], l = a.content, u = o.getAttrs(l, l.lastIndexOf(e.leftDelimiter), e), c = i + 1;
                    for (;n[c + 1] && n[c + 1].nesting === -1; ) c++;
                    let f = o.getMatchingOpeningToken(n, c);
                    o.addAttrs(u, f);
                    let p = l.slice(0, l.lastIndexOf(e.leftDelimiter));
                    a.content = t(p) !== " " ? p : p.slice(0, -1);
                }
            } ];
        };
    }, function(y, D, d) {
        function o(i) {
            return i.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        D.getAttrs = function(i, s, a) {
            const l = /[^\t\n\f />"'=]/, u = [];
            let c = "", f = "", p = !0, h = !1;
            for (let g = s + a.leftDelimiter.length; g < i.length; g++) {
                if (i.slice(g, g + a.rightDelimiter.length) === a.rightDelimiter) {
                    c !== "" && u.push([ c, f ]);
                    break;
                }
                let m = i.charAt(g);
                if (m === "=" && p) p = !1; else if (m !== "." || c !== "") if (m !== "#" || c !== "") if (m !== '"' || f !== "") if (m === '"' && h) h = !1; else if (m !== " " || h) p && m.search(l) === -1 || (p ? c += m : f += m); else {
                    if (c === "") continue;
                    u.push([ c, f ]), c = "", f = "", p = !0;
                } else h = !0; else c = "id", p = !1; else i.charAt(g + 1) === "." ? (c = "css-module", 
                g += 1) : c = "class", p = !1;
            }
            if (a.allowedAttributes && a.allowedAttributes.length) {
                let g = a.allowedAttributes;
                return u.filter(function(m) {
                    let k = m[0];
                    return g.some(function(v) {
                        return k === v || v instanceof RegExp && v.test(k);
                    });
                });
            }
            return u;
        }, D.addAttrs = function(i, s) {
            for (let a = 0, l = i.length; a < l; ++a) {
                let u = i[a][0];
                u === "class" ? s.attrJoin("class", i[a][1]) : u === "css-module" ? s.attrJoin("css-module", i[a][1]) : s.attrPush(i[a]);
            }
            return s;
        }, D.hasDelimiters = function(i, s) {
            if (!i) throw new Error('Parameter `where` not passed. Should be "start", "middle", "end" or "only".');
            return function(a) {
                let l, u, c, f, p = s.leftDelimiter.length + 1 + s.rightDelimiter.length;
                if (!a || typeof a != "string" || a.length < p) return !1;
                let h = p - s.rightDelimiter.length;
                switch (i) {
                  case "start":
                    c = a.slice(0, s.leftDelimiter.length), l = c === s.leftDelimiter ? 0 : -1, 
                    u = l === -1 ? -1 : a.indexOf(s.rightDelimiter, h), f = a.charAt(u + s.rightDelimiter.length), 
                    f && s.rightDelimiter.indexOf(f) !== -1 && (u = -1);
                    break;

                  case "end":
                    l = a.lastIndexOf(s.leftDelimiter), u = l === -1 ? -1 : a.indexOf(s.rightDelimiter, l + h), 
                    u = u === a.length - s.rightDelimiter.length ? u : -1;
                    break;

                  case "only":
                    c = a.slice(0, s.leftDelimiter.length), l = c === s.leftDelimiter ? 0 : -1, 
                    c = a.slice(a.length - s.rightDelimiter.length), u = c === s.rightDelimiter ? a.length - s.rightDelimiter.length : -1;
                }
                return l !== -1 && u !== -1 && function(g) {
                    let m = g.charAt(s.leftDelimiter.length) === ".", k = g.charAt(s.leftDelimiter.length) === "#";
                    return m || k ? g.length >= p + 1 : g.length >= p;
                }(a.substring(l, u + s.rightDelimiter.length));
            };
        }, D.removeDelimiter = function(i, s) {
            const a = o(s.leftDelimiter), l = o(s.rightDelimiter);
            let u = new RegExp("[ \\n]?" + a + "[^" + a + l + "]+" + l + "$"), c = i.search(u);
            return c !== -1 ? i.slice(0, c) : i;
        }, D.escapeRegExp = o, D.getMatchingOpeningToken = function(i, s) {
            if (i[s].type === "softbreak") return !1;
            if (i[s].nesting === 0) return i[s];
            let a = i[s].level, l = i[s].type.replace("_close", "_open");
            for (;s >= 0; --s) if (i[s].type === l && i[s].level === a) return i[s];
        };
        let t = /[&<>"]/, e = /[&<>"]/g, r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        function n(i) {
            return r[i];
        }
        D.escapeHtml = function(i) {
            return t.test(i) ? i.replace(e, n) : i;
        };
    }, function(y, D, d) {
        var o = d(0), t = d(28), e = d(32), r = d(33), n = d(41), i = d(55), s = d(68), a = d(8), l = d(70), u = {
            default: d(73),
            zero: d(74),
            commonmark: d(75)
        }, c = /^(vbscript|javascript|file|data):/, f = /^data:image\/(gif|png|jpeg|webp);/;
        function p(v) {
            var _ = v.trim().toLowerCase();
            return !c.test(_) || !!f.test(_);
        }
        var h = [ "http:", "https:", "mailto:" ];
        function g(v) {
            var _ = a.parse(v, !0);
            if (_.hostname && (!_.protocol || h.indexOf(_.protocol) >= 0)) try {
                _.hostname = l.toASCII(_.hostname);
            } catch {}
            return a.encode(a.format(_));
        }
        function m(v) {
            var _ = a.parse(v, !0);
            if (_.hostname && (!_.protocol || h.indexOf(_.protocol) >= 0)) try {
                _.hostname = l.toUnicode(_.hostname);
            } catch {}
            return a.decode(a.format(_), a.decode.defaultChars + "%");
        }
        function k(v, _) {
            if (!(this instanceof k)) return new k(v, _);
            _ || o.isString(v) || (_ = v || {}, v = "default"), this.inline = new i(), 
            this.block = new n(), this.core = new r(), this.renderer = new e(), 
            this.linkify = new s(), this.validateLink = p, this.normalizeLink = g, 
            this.normalizeLinkText = m, this.utils = o, this.helpers = o.assign({}, t), 
            this.options = {}, this.configure(v), _ && this.set(_);
        }
        k.prototype.set = function(v) {
            return o.assign(this.options, v), this;
        }, k.prototype.configure = function(v) {
            var _, b = this;
            if (o.isString(v) && !(v = u[_ = v])) throw new Error('Wrong `markdown-it` preset "' + _ + '", check name');
            if (!v) throw new Error("Wrong `markdown-it` preset, can't be empty");
            return v.options && b.set(v.options), v.components && Object.keys(v.components).forEach(function(S) {
                v.components[S].rules && b[S].ruler.enableOnly(v.components[S].rules), 
                v.components[S].rules2 && b[S].ruler2.enableOnly(v.components[S].rules2);
            }), this;
        }, k.prototype.enable = function(v, _) {
            var b = [];
            Array.isArray(v) || (v = [ v ]), [ "core", "block", "inline" ].forEach(function(w) {
                b = b.concat(this[w].ruler.enable(v, !0));
            }, this), b = b.concat(this.inline.ruler2.enable(v, !0));
            var S = v.filter(function(w) {
                return b.indexOf(w) < 0;
            });
            if (S.length && !_) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + S);
            return this;
        }, k.prototype.disable = function(v, _) {
            var b = [];
            Array.isArray(v) || (v = [ v ]), [ "core", "block", "inline" ].forEach(function(w) {
                b = b.concat(this[w].ruler.disable(v, !0));
            }, this), b = b.concat(this.inline.ruler2.disable(v, !0));
            var S = v.filter(function(w) {
                return b.indexOf(w) < 0;
            });
            if (S.length && !_) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + S);
            return this;
        }, k.prototype.use = function(v) {
            var _ = [ this ].concat(Array.prototype.slice.call(arguments, 1));
            return v.apply(v, _), this;
        }, k.prototype.parse = function(v, _) {
            if (typeof v != "string") throw new Error("Input data should be a String");
            var b = new this.core.State(v, this, _);
            return this.core.process(b), b.tokens;
        }, k.prototype.render = function(v, _) {
            return _ = _ || {}, this.renderer.render(this.parse(v, _), this.options, _);
        }, k.prototype.parseInline = function(v, _) {
            var b = new this.core.State(v, this, _);
            return b.inlineMode = !0, this.core.process(b), b.tokens;
        }, k.prototype.renderInline = function(v, _) {
            return _ = _ || {}, this.renderer.render(this.parseInline(v, _), this.options, _);
        }, y.exports = k;
    }, function(y) {
        y.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');
    }, function(y, D, d) {
        var o = {};
        function t(e, r, n) {
            var i, s, a, l, u, c = "";
            for (typeof r != "string" && (n = r, r = t.defaultChars), n === void 0 && (n = !0), 
            u = function(f) {
                var p, h, g = o[f];
                if (g) return g;
                for (g = o[f] = [], p = 0; p < 128; p++) h = String.fromCharCode(p), 
                /^[0-9a-z]$/i.test(h) ? g.push(h) : g.push("%" + ("0" + p.toString(16).toUpperCase()).slice(-2));
                for (p = 0; p < f.length; p++) g[f.charCodeAt(p)] = f[p];
                return g;
            }(r), i = 0, s = e.length; i < s; i++) if (a = e.charCodeAt(i), n && a === 37 && i + 2 < s && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) c += e.slice(i, i + 3), 
            i += 2; else if (a < 128) c += u[a]; else if (a >= 55296 && a <= 57343) {
                if (a >= 55296 && a <= 56319 && i + 1 < s && (l = e.charCodeAt(i + 1)) >= 56320 && l <= 57343) {
                    c += encodeURIComponent(e[i] + e[i + 1]), i++;
                    continue;
                }
                c += "%EF%BF%BD";
            } else c += encodeURIComponent(e[i]);
            return c;
        }
        t.defaultChars = ";/?:@&=+$,-_.!~*'()#", t.componentChars = "-_.!~*'()", 
        y.exports = t;
    }, function(y, D, d) {
        var o = {};
        function t(e, r) {
            var n;
            return typeof r != "string" && (r = t.defaultChars), n = function(i) {
                var s, a, l = o[i];
                if (l) return l;
                for (l = o[i] = [], s = 0; s < 128; s++) a = String.fromCharCode(s), 
                l.push(a);
                for (s = 0; s < i.length; s++) l[a = i.charCodeAt(s)] = "%" + ("0" + a.toString(16).toUpperCase()).slice(-2);
                return l;
            }(r), e.replace(/(%[a-f0-9]{2})+/gi, function(i) {
                var s, a, l, u, c, f, p, h = "";
                for (s = 0, a = i.length; s < a; s += 3) (l = parseInt(i.slice(s + 1, s + 3), 16)) < 128 ? h += n[l] : (224 & l) == 192 && s + 3 < a && (192 & (u = parseInt(i.slice(s + 4, s + 6), 16))) == 128 ? (h += (p = l << 6 & 1984 | 63 & u) < 128 ? "��" : String.fromCharCode(p), 
                s += 3) : (240 & l) == 224 && s + 6 < a && (u = parseInt(i.slice(s + 4, s + 6), 16), 
                c = parseInt(i.slice(s + 7, s + 9), 16), (192 & u) == 128 && (192 & c) == 128) ? (h += (p = l << 12 & 61440 | u << 6 & 4032 | 63 & c) < 2048 || p >= 55296 && p <= 57343 ? "���" : String.fromCharCode(p), 
                s += 6) : (248 & l) == 240 && s + 9 < a && (u = parseInt(i.slice(s + 4, s + 6), 16), 
                c = parseInt(i.slice(s + 7, s + 9), 16), f = parseInt(i.slice(s + 10, s + 12), 16), 
                (192 & u) == 128 && (192 & c) == 128 && (192 & f) == 128) ? ((p = l << 18 & 1835008 | u << 12 & 258048 | c << 6 & 4032 | 63 & f) < 65536 || p > 1114111 ? h += "����" : (p -= 65536, 
                h += String.fromCharCode(55296 + (p >> 10), 56320 + (1023 & p))), 
                s += 9) : h += "�";
                return h;
            });
        }
        t.defaultChars = ";/?:@&=+$,#", t.componentChars = "", y.exports = t;
    }, function(y, D, d) {
        y.exports = function(o) {
            var t = "";
            return t += o.protocol || "", t += o.slashes ? "//" : "", t += o.auth ? o.auth + "@" : "", 
            o.hostname && o.hostname.indexOf(":") !== -1 ? t += "[" + o.hostname + "]" : t += o.hostname || "", 
            t += o.port ? ":" + o.port : "", t += o.pathname || "", (t += o.search || "") + (o.hash || "");
        };
    }, function(y, D, d) {
        function o() {
            this.protocol = null, this.slashes = null, this.auth = null, this.port = null, 
            this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
        }
        var t = /^([a-z0-9.+-]+:)/i, e = /:[0-9]*$/, r = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, n = [ "{", "}", "|", "\\", "^", "`" ].concat([ "<", ">", '"', "`", " ", "\r", `
`, "\t" ]), i = [ "'" ].concat(n), s = [ "%", "/", "?", ";", "#" ].concat(i), a = [ "/", "?", "#" ], l = /^[+a-z0-9A-Z_-]{0,63}$/, u = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, c = {
            javascript: !0,
            "javascript:": !0
        }, f = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };
        o.prototype.parse = function(p, h) {
            var g, m, k, v, _, b = p;
            if (b = b.trim(), !h && p.split("#").length === 1) {
                var S = r.exec(b);
                if (S) return this.pathname = S[1], S[2] && (this.search = S[2]), 
                this;
            }
            var w = t.exec(b);
            if (w && (k = (w = w[0]).toLowerCase(), this.protocol = w, b = b.substr(w.length)), 
            (h || w || b.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(_ = b.substr(0, 2) === "//") || w && c[w] || (b = b.substr(2), 
            this.slashes = !0)), !c[w] && (_ || w && !f[w])) {
                var E, x, A = -1;
                for (g = 0; g < a.length; g++) (v = b.indexOf(a[g])) !== -1 && (A === -1 || v < A) && (A = v);
                for ((x = A === -1 ? b.lastIndexOf("@") : b.lastIndexOf("@", A)) !== -1 && (E = b.slice(0, x), 
                b = b.slice(x + 1), this.auth = E), A = -1, g = 0; g < s.length; g++) (v = b.indexOf(s[g])) !== -1 && (A === -1 || v < A) && (A = v);
                A === -1 && (A = b.length), b[A - 1] === ":" && A--;
                var C = b.slice(0, A);
                b = b.slice(A), this.parseHost(C), this.hostname = this.hostname || "";
                var T = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
                if (!T) {
                    var q = this.hostname.split(/\./);
                    for (g = 0, m = q.length; g < m; g++) {
                        var F = q[g];
                        if (F && !F.match(l)) {
                            for (var L = "", M = 0, z = F.length; M < z; M++) F.charCodeAt(M) > 127 ? L += "x" : L += F[M];
                            if (!L.match(l)) {
                                var I = q.slice(0, g), O = q.slice(g + 1), j = F.match(u);
                                j && (I.push(j[1]), O.unshift(j[2])), O.length && (b = O.join(".") + b), 
                                this.hostname = I.join(".");
                                break;
                            }
                        }
                    }
                }
                this.hostname.length > 255 && (this.hostname = ""), T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
            }
            var B = b.indexOf("#");
            B !== -1 && (this.hash = b.substr(B), b = b.slice(0, B));
            var R = b.indexOf("?");
            return R !== -1 && (this.search = b.substr(R), b = b.slice(0, R)), b && (this.pathname = b), 
            f[k] && this.hostname && !this.pathname && (this.pathname = ""), this;
        }, o.prototype.parseHost = function(p) {
            var h = e.exec(p);
            h && ((h = h[0]) !== ":" && (this.port = h.substr(1)), p = p.substr(0, p.length - h.length)), 
            p && (this.hostname = p);
        }, y.exports = function(p, h) {
            if (p && p instanceof o) return p;
            var g = new o();
            return g.parse(p, h), g;
        };
    }, function(y, D, d) {
        D.Any = d(9), D.Cc = d(10), D.Cf = d(27), D.P = d(3), D.Z = d(11);
    }, function(y, D) {
        y.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    }, function(y, D, d) {
        D.parseLinkLabel = d(29), D.parseLinkDestination = d(30), D.parseLinkTitle = d(31);
    }, function(y, D, d) {
        y.exports = function(o, t, e) {
            var r, n, i, s, a = -1, l = o.posMax, u = o.pos;
            for (o.pos = t + 1, r = 1; o.pos < l; ) {
                if ((i = o.src.charCodeAt(o.pos)) === 93 && --r == 0) {
                    n = !0;
                    break;
                }
                if (s = o.pos, o.md.inline.skipToken(o), i === 91) {
                    if (s === o.pos - 1) r++; else if (e) return o.pos = u, -1;
                }
            }
            return n && (a = o.pos), o.pos = u, a;
        };
    }, function(y, D, d) {
        var o = d(0).unescapeAll;
        y.exports = function(t, e, r) {
            var n, i, s = e, a = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (t.charCodeAt(e) === 60) {
                for (e++; e < r; ) {
                    if ((n = t.charCodeAt(e)) === 10 || n === 60) return a;
                    if (n === 62) return a.pos = e + 1, a.str = o(t.slice(s + 1, e)), 
                    a.ok = !0, a;
                    n === 92 && e + 1 < r ? e += 2 : e++;
                }
                return a;
            }
            for (i = 0; e < r && (n = t.charCodeAt(e)) !== 32 && !(n < 32 || n === 127); ) if (n === 92 && e + 1 < r) {
                if (t.charCodeAt(e + 1) === 32) break;
                e += 2;
            } else {
                if (n === 40 && ++i > 32) return a;
                if (n === 41) {
                    if (i === 0) break;
                    i--;
                }
                e++;
            }
            return s === e || i !== 0 || (a.str = o(t.slice(s, e)), a.lines = 0, 
            a.pos = e, a.ok = !0), a;
        };
    }, function(y, D, d) {
        var o = d(0).unescapeAll;
        y.exports = function(t, e, r) {
            var n, i, s = 0, a = e, l = {
                ok: !1,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (e >= r || (i = t.charCodeAt(e)) !== 34 && i !== 39 && i !== 40) return l;
            for (e++, i === 40 && (i = 41); e < r; ) {
                if ((n = t.charCodeAt(e)) === i) return l.pos = e + 1, l.lines = s, 
                l.str = o(t.slice(a + 1, e)), l.ok = !0, l;
                if (n === 40 && i === 41) return l;
                n === 10 ? s++ : n === 92 && e + 1 < r && (e++, t.charCodeAt(e) === 10 && s++), 
                e++;
            }
            return l;
        };
    }, function(y, D, d) {
        var o = d(0).assign, t = d(0).unescapeAll, e = d(0).escapeHtml, r = {};
        function n() {
            this.rules = o({}, r);
        }
        r.code_inline = function(i, s, a, l, u) {
            var c = i[s];
            return "<code" + u.renderAttrs(c) + ">" + e(i[s].content) + "</code>";
        }, r.code_block = function(i, s, a, l, u) {
            var c = i[s];
            return "<pre" + u.renderAttrs(c) + "><code>" + e(i[s].content) + `</code></pre>
`;
        }, r.fence = function(i, s, a, l, u) {
            var c, f, p, h, g, m = i[s], k = m.info ? t(m.info).trim() : "", v = "", _ = "";
            return k && (v = (p = k.split(/(\s+)/g))[0], _ = p.slice(2).join("")), 
            (c = a.highlight && a.highlight(m.content, v, _) || e(m.content)).indexOf("<pre") === 0 ? c + `
` : k ? (f = m.attrIndex("class"), h = m.attrs ? m.attrs.slice() : [], f < 0 ? h.push([ "class", a.langPrefix + v ]) : (h[f] = h[f].slice(), 
            h[f][1] += " " + a.langPrefix + v), g = {
                attrs: h
            }, "<pre><code" + u.renderAttrs(g) + ">" + c + `</code></pre>
`) : "<pre><code" + u.renderAttrs(m) + ">" + c + `</code></pre>
`;
        }, r.image = function(i, s, a, l, u) {
            var c = i[s];
            return c.attrs[c.attrIndex("alt")][1] = u.renderInlineAsText(c.children, a, l), 
            u.renderToken(i, s, a);
        }, r.hardbreak = function(i, s, a) {
            return a.xhtmlOut ? `<br />
` : `<br>
`;
        }, r.softbreak = function(i, s, a) {
            return a.breaks ? a.xhtmlOut ? `<br />
` : `<br>
` : `
`;
        }, r.text = function(i, s) {
            return e(i[s].content);
        }, r.html_block = function(i, s) {
            return i[s].content;
        }, r.html_inline = function(i, s) {
            return i[s].content;
        }, n.prototype.renderAttrs = function(i) {
            var s, a, l;
            if (!i.attrs) return "";
            for (l = "", s = 0, a = i.attrs.length; s < a; s++) l += " " + e(i.attrs[s][0]) + '="' + e(i.attrs[s][1]) + '"';
            return l;
        }, n.prototype.renderToken = function(i, s, a) {
            var l, u = "", c = !1, f = i[s];
            return f.hidden ? "" : (f.block && f.nesting !== -1 && s && i[s - 1].hidden && (u += `
`), u += (f.nesting === -1 ? "</" : "<") + f.tag, u += this.renderAttrs(f), f.nesting === 0 && a.xhtmlOut && (u += " /"), 
            f.block && (c = !0, f.nesting === 1 && s + 1 < i.length && ((l = i[s + 1]).type === "inline" || l.hidden || l.nesting === -1 && l.tag === f.tag) && (c = !1)), 
            u += c ? `>
` : ">");
        }, n.prototype.renderInline = function(i, s, a) {
            for (var l, u = "", c = this.rules, f = 0, p = i.length; f < p; f++) c[l = i[f].type] !== void 0 ? u += c[l](i, f, s, a, this) : u += this.renderToken(i, f, s);
            return u;
        }, n.prototype.renderInlineAsText = function(i, s, a) {
            for (var l = "", u = 0, c = i.length; u < c; u++) i[u].type === "text" ? l += i[u].content : i[u].type === "image" ? l += this.renderInlineAsText(i[u].children, s, a) : i[u].type === "softbreak" && (l += `
`);
            return l;
        }, n.prototype.render = function(i, s, a) {
            var l, u, c, f = "", p = this.rules;
            for (l = 0, u = i.length; l < u; l++) (c = i[l].type) === "inline" ? f += this.renderInline(i[l].children, s, a) : p[c] !== void 0 ? f += p[i[l].type](i, l, s, a, this) : f += this.renderToken(i, l, s, a);
            return f;
        }, y.exports = n;
    }, function(y, D, d) {
        var o = d(4), t = [ [ "normalize", d(34) ], [ "block", d(35) ], [ "inline", d(36) ], [ "linkify", d(37) ], [ "replacements", d(38) ], [ "smartquotes", d(39) ] ];
        function e() {
            this.ruler = new o();
            for (var r = 0; r < t.length; r++) this.ruler.push(t[r][0], t[r][1]);
        }
        e.prototype.process = function(r) {
            var n, i, s;
            for (n = 0, i = (s = this.ruler.getRules("")).length; n < i; n++) s[n](r);
        }, e.prototype.State = d(40), y.exports = e;
    }, function(y, D, d) {
        var o = /\r\n?|\n/g, t = /\0/g;
        y.exports = function(e) {
            var r;
            r = (r = e.src.replace(o, `
`)).replace(t, "�"), e.src = r;
        };
    }, function(y, D, d) {
        y.exports = function(o) {
            var t;
            o.inlineMode ? ((t = new o.Token("inline", "", 0)).content = o.src, 
            t.map = [ 0, 1 ], t.children = [], o.tokens.push(t)) : o.md.block.parse(o.src, o.md, o.env, o.tokens);
        };
    }, function(y, D, d) {
        y.exports = function(o) {
            var t, e, r, n = o.tokens;
            for (e = 0, r = n.length; e < r; e++) (t = n[e]).type === "inline" && o.md.inline.parse(t.content, o.md, o.env, t.children);
        };
    }, function(y, D, d) {
        var o = d(0).arrayReplaceAt;
        function t(e) {
            return /^<\/a\s*>/i.test(e);
        }
        y.exports = function(e) {
            var r, n, i, s, a, l, u, c, f, p, h, g, m, k, v, _, b, S, w = e.tokens;
            if (e.md.options.linkify) {
                for (n = 0, i = w.length; n < i; n++) if (w[n].type === "inline" && e.md.linkify.pretest(w[n].content)) for (m = 0, 
                r = (s = w[n].children).length - 1; r >= 0; r--) if ((l = s[r]).type !== "link_close") {
                    if (l.type === "html_inline" && (S = l.content, /^<a[>\s]/i.test(S) && m > 0 && m--, 
                    t(l.content) && m++), !(m > 0) && l.type === "text" && e.md.linkify.test(l.content)) {
                        for (f = l.content, b = e.md.linkify.match(f), u = [], g = l.level, 
                        h = 0, c = 0; c < b.length; c++) k = b[c].url, v = e.md.normalizeLink(k), 
                        e.md.validateLink(v) && (_ = b[c].text, _ = b[c].schema ? b[c].schema !== "mailto:" || /^mailto:/i.test(_) ? e.md.normalizeLinkText(_) : e.md.normalizeLinkText("mailto:" + _).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + _).replace(/^http:\/\//, ""), 
                        (p = b[c].index) > h && ((a = new e.Token("text", "", 0)).content = f.slice(h, p), 
                        a.level = g, u.push(a)), (a = new e.Token("link_open", "a", 1)).attrs = [ [ "href", v ] ], 
                        a.level = g++, a.markup = "linkify", a.info = "auto", u.push(a), 
                        (a = new e.Token("text", "", 0)).content = _, a.level = g, 
                        u.push(a), (a = new e.Token("link_close", "a", -1)).level = --g, 
                        a.markup = "linkify", a.info = "auto", u.push(a), h = b[c].lastIndex);
                        h < f.length && ((a = new e.Token("text", "", 0)).content = f.slice(h), 
                        a.level = g, u.push(a)), w[n].children = s = o(s, r, u);
                    }
                } else for (r--; s[r].level !== l.level && s[r].type !== "link_open"; ) r--;
            }
        };
    }, function(y, D, d) {
        var o = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, t = /\((c|tm|r|p)\)/i, e = /\((c|tm|r|p)\)/gi, r = {
            c: "©",
            r: "®",
            p: "§",
            tm: "™"
        };
        function n(a, l) {
            return r[l.toLowerCase()];
        }
        function i(a) {
            var l, u, c = 0;
            for (l = a.length - 1; l >= 0; l--) (u = a[l]).type !== "text" || c || (u.content = u.content.replace(e, n)), 
            u.type === "link_open" && u.info === "auto" && c--, u.type === "link_close" && u.info === "auto" && c++;
        }
        function s(a) {
            var l, u, c = 0;
            for (l = a.length - 1; l >= 0; l--) (u = a[l]).type !== "text" || c || o.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), 
            u.type === "link_open" && u.info === "auto" && c--, u.type === "link_close" && u.info === "auto" && c++;
        }
        y.exports = function(a) {
            var l;
            if (a.md.options.typographer) for (l = a.tokens.length - 1; l >= 0; l--) a.tokens[l].type === "inline" && (t.test(a.tokens[l].content) && i(a.tokens[l].children), 
            o.test(a.tokens[l].content) && s(a.tokens[l].children));
        };
    }, function(y, D, d) {
        var o = d(0).isWhiteSpace, t = d(0).isPunctChar, e = d(0).isMdAsciiPunct, r = /['"]/, n = /['"]/g;
        function i(a, l, u) {
            return a.substr(0, l) + u + a.substr(l + 1);
        }
        function s(a, l) {
            var u, c, f, p, h, g, m, k, v, _, b, S, w, E, x, A, C, T, q, F, L;
            for (q = [], u = 0; u < a.length; u++) {
                for (c = a[u], m = a[u].level, C = q.length - 1; C >= 0 && !(q[C].level <= m); C--);
                if (q.length = C + 1, c.type === "text") {
                    h = 0, g = (f = c.content).length;
                    t: for (;h < g && (n.lastIndex = h, p = n.exec(f)); ) {
                        if (x = A = !0, h = p.index + 1, T = p[0] === "'", v = 32, 
                        p.index - 1 >= 0) v = f.charCodeAt(p.index - 1); else for (C = u - 1; C >= 0 && a[C].type !== "softbreak" && a[C].type !== "hardbreak"; C--) if (a[C].content) {
                            v = a[C].content.charCodeAt(a[C].content.length - 1);
                            break;
                        }
                        if (_ = 32, h < g) _ = f.charCodeAt(h); else for (C = u + 1; C < a.length && a[C].type !== "softbreak" && a[C].type !== "hardbreak"; C++) if (a[C].content) {
                            _ = a[C].content.charCodeAt(0);
                            break;
                        }
                        if (b = e(v) || t(String.fromCharCode(v)), S = e(_) || t(String.fromCharCode(_)), 
                        w = o(v), (E = o(_)) ? x = !1 : S && (w || b || (x = !1)), 
                        w ? A = !1 : b && (E || S || (A = !1)), _ === 34 && p[0] === '"' && v >= 48 && v <= 57 && (A = x = !1), 
                        x && A && (x = b, A = S), x || A) {
                            if (A) {
                                for (C = q.length - 1; C >= 0 && (k = q[C], !(q[C].level < m)); C--) if (k.single === T && q[C].level === m) {
                                    k = q[C], T ? (F = l.md.options.quotes[2], L = l.md.options.quotes[3]) : (F = l.md.options.quotes[0], 
                                    L = l.md.options.quotes[1]), c.content = i(c.content, p.index, L), 
                                    a[k.token].content = i(a[k.token].content, k.pos, F), 
                                    h += L.length - 1, k.token === u && (h += F.length - 1), 
                                    g = (f = c.content).length, q.length = C;
                                    continue t;
                                }
                            }
                            x ? q.push({
                                token: u,
                                pos: p.index,
                                single: T,
                                level: m
                            }) : A && T && (c.content = i(c.content, p.index, "’"));
                        } else T && (c.content = i(c.content, p.index, "’"));
                    }
                }
            }
        }
        y.exports = function(a) {
            var l;
            if (a.md.options.typographer) for (l = a.tokens.length - 1; l >= 0; l--) a.tokens[l].type === "inline" && r.test(a.tokens[l].content) && s(a.tokens[l].children, a);
        };
    }, function(y, D, d) {
        var o = d(5);
        function t(e, r, n) {
            this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, 
            this.md = r;
        }
        t.prototype.Token = o, y.exports = t;
    }, function(y, D, d) {
        var o = d(4), t = [ [ "table", d(42), [ "paragraph", "reference" ] ], [ "code", d(43) ], [ "fence", d(44), [ "paragraph", "reference", "blockquote", "list" ] ], [ "blockquote", d(45), [ "paragraph", "reference", "blockquote", "list" ] ], [ "hr", d(46), [ "paragraph", "reference", "blockquote", "list" ] ], [ "list", d(47), [ "paragraph", "reference", "blockquote" ] ], [ "reference", d(48) ], [ "html_block", d(49), [ "paragraph", "reference", "blockquote" ] ], [ "heading", d(51), [ "paragraph", "reference", "blockquote" ] ], [ "lheading", d(52) ], [ "paragraph", d(53) ] ];
        function e() {
            this.ruler = new o();
            for (var r = 0; r < t.length; r++) this.ruler.push(t[r][0], t[r][1], {
                alt: (t[r][2] || []).slice()
            });
        }
        e.prototype.tokenize = function(r, n, i) {
            for (var s, a = this.ruler.getRules(""), l = a.length, u = n, c = !1, f = r.md.options.maxNesting; u < i && (r.line = u = r.skipEmptyLines(u), 
            !(u >= i)) && !(r.sCount[u] < r.blkIndent); ) {
                if (r.level >= f) {
                    r.line = i;
                    break;
                }
                for (s = 0; s < l && !a[s](r, u, i, !1); s++);
                r.tight = !c, r.isEmpty(r.line - 1) && (c = !0), (u = r.line) < i && r.isEmpty(u) && (c = !0, 
                u++, r.line = u);
            }
        }, e.prototype.parse = function(r, n, i, s) {
            var a;
            r && (a = new this.State(r, n, i, s), this.tokenize(a, a.line, a.lineMax));
        }, e.prototype.State = d(54), y.exports = e;
    }, function(y, D, d) {
        var o = d(0).isSpace;
        function t(r, n) {
            var i = r.bMarks[n] + r.tShift[n], s = r.eMarks[n];
            return r.src.substr(i, s - i);
        }
        function e(r) {
            var n, i = [], s = 0, a = r.length, l = !1, u = 0, c = "";
            for (n = r.charCodeAt(s); s < a; ) n === 124 && (l ? (c += r.substring(u, s - 1), 
            u = s) : (i.push(c + r.substring(u, s)), c = "", u = s + 1)), l = n === 92, 
            s++, n = r.charCodeAt(s);
            return i.push(c + r.substring(u)), i;
        }
        y.exports = function(r, n, i, s) {
            var a, l, u, c, f, p, h, g, m, k, v, _, b, S, w, E, x, A;
            if (n + 2 > i || (p = n + 1, r.sCount[p] < r.blkIndent) || r.sCount[p] - r.blkIndent >= 4 || (u = r.bMarks[p] + r.tShift[p]) >= r.eMarks[p] || (x = r.src.charCodeAt(u++)) !== 124 && x !== 45 && x !== 58 || u >= r.eMarks[p] || (A = r.src.charCodeAt(u++)) !== 124 && A !== 45 && A !== 58 && !o(A) || x === 45 && o(A)) return !1;
            for (;u < r.eMarks[p]; ) {
                if ((a = r.src.charCodeAt(u)) !== 124 && a !== 45 && a !== 58 && !o(a)) return !1;
                u++;
            }
            for (h = (l = t(r, n + 1)).split("|"), k = [], c = 0; c < h.length; c++) {
                if (!(v = h[c].trim())) {
                    if (c === 0 || c === h.length - 1) continue;
                    return !1;
                }
                if (!/^:?-+:?$/.test(v)) return !1;
                v.charCodeAt(v.length - 1) === 58 ? k.push(v.charCodeAt(0) === 58 ? "center" : "right") : v.charCodeAt(0) === 58 ? k.push("left") : k.push("");
            }
            if ((l = t(r, n).trim()).indexOf("|") === -1 || r.sCount[n] - r.blkIndent >= 4 || ((h = e(l)).length && h[0] === "" && h.shift(), 
            h.length && h[h.length - 1] === "" && h.pop(), (g = h.length) === 0 || g !== k.length)) return !1;
            if (s) return !0;
            for (S = r.parentType, r.parentType = "table", E = r.md.block.ruler.getRules("blockquote"), 
            (m = r.push("table_open", "table", 1)).map = _ = [ n, 0 ], (m = r.push("thead_open", "thead", 1)).map = [ n, n + 1 ], 
            (m = r.push("tr_open", "tr", 1)).map = [ n, n + 1 ], c = 0; c < h.length; c++) m = r.push("th_open", "th", 1), 
            k[c] && (m.attrs = [ [ "style", "text-align:" + k[c] ] ]), (m = r.push("inline", "", 0)).content = h[c].trim(), 
            m.children = [], m = r.push("th_close", "th", -1);
            for (m = r.push("tr_close", "tr", -1), m = r.push("thead_close", "thead", -1), 
            p = n + 2; p < i && !(r.sCount[p] < r.blkIndent); p++) {
                for (w = !1, c = 0, f = E.length; c < f; c++) if (E[c](r, p, i, !0)) {
                    w = !0;
                    break;
                }
                if (w || !(l = t(r, p).trim()) || r.sCount[p] - r.blkIndent >= 4) break;
                for ((h = e(l)).length && h[0] === "" && h.shift(), h.length && h[h.length - 1] === "" && h.pop(), 
                p === n + 2 && ((m = r.push("tbody_open", "tbody", 1)).map = b = [ n + 2, 0 ]), 
                (m = r.push("tr_open", "tr", 1)).map = [ p, p + 1 ], c = 0; c < g; c++) m = r.push("td_open", "td", 1), 
                k[c] && (m.attrs = [ [ "style", "text-align:" + k[c] ] ]), (m = r.push("inline", "", 0)).content = h[c] ? h[c].trim() : "", 
                m.children = [], m = r.push("td_close", "td", -1);
                m = r.push("tr_close", "tr", -1);
            }
            return b && (m = r.push("tbody_close", "tbody", -1), b[1] = p), m = r.push("table_close", "table", -1), 
            _[1] = p, r.parentType = S, r.line = p, !0;
        };
    }, function(y, D, d) {
        y.exports = function(o, t, e) {
            var r, n, i;
            if (o.sCount[t] - o.blkIndent < 4) return !1;
            for (n = r = t + 1; r < e; ) if (o.isEmpty(r)) r++; else {
                if (!(o.sCount[r] - o.blkIndent >= 4)) break;
                n = ++r;
            }
            return o.line = n, (i = o.push("code_block", "code", 0)).content = o.getLines(t, n, 4 + o.blkIndent, !1) + `
`, i.map = [ t, o.line ], !0;
        };
    }, function(y, D, d) {
        y.exports = function(o, t, e, r) {
            var n, i, s, a, l, u, c, f = !1, p = o.bMarks[t] + o.tShift[t], h = o.eMarks[t];
            if (o.sCount[t] - o.blkIndent >= 4 || p + 3 > h || (n = o.src.charCodeAt(p)) !== 126 && n !== 96 || (l = p, 
            (i = (p = o.skipChars(p, n)) - l) < 3) || (c = o.src.slice(l, p), s = o.src.slice(p, h), 
            n === 96 && s.indexOf(String.fromCharCode(n)) >= 0)) return !1;
            if (r) return !0;
            for (a = t; !(++a >= e || (p = l = o.bMarks[a] + o.tShift[a]) < (h = o.eMarks[a]) && o.sCount[a] < o.blkIndent); ) if (o.src.charCodeAt(p) === n && !(o.sCount[a] - o.blkIndent >= 4 || (p = o.skipChars(p, n)) - l < i || (p = o.skipSpaces(p)) < h)) {
                f = !0;
                break;
            }
            return i = o.sCount[t], o.line = a + (f ? 1 : 0), (u = o.push("fence", "code", 0)).info = s, 
            u.content = o.getLines(t + 1, a, i, !0), u.markup = c, u.map = [ t, o.line ], 
            !0;
        };
    }, function(y, D, d) {
        var o = d(0).isSpace;
        y.exports = function(t, e, r, n) {
            var i, s, a, l, u, c, f, p, h, g, m, k, v, _, b, S, w, E, x, A, C = t.lineMax, T = t.bMarks[e] + t.tShift[e], q = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(T++) !== 62) return !1;
            if (n) return !0;
            for (l = h = t.sCount[e] + 1, t.src.charCodeAt(T) === 32 ? (T++, l++, 
            h++, i = !1, S = !0) : t.src.charCodeAt(T) === 9 ? (S = !0, (t.bsCount[e] + h) % 4 == 3 ? (T++, 
            l++, h++, i = !1) : i = !0) : S = !1, g = [ t.bMarks[e] ], t.bMarks[e] = T; T < q && (s = t.src.charCodeAt(T), 
            o(s)); ) s === 9 ? h += 4 - (h + t.bsCount[e] + (i ? 1 : 0)) % 4 : h++, 
            T++;
            for (m = [ t.bsCount[e] ], t.bsCount[e] = t.sCount[e] + 1 + (S ? 1 : 0), 
            c = T >= q, _ = [ t.sCount[e] ], t.sCount[e] = h - l, b = [ t.tShift[e] ], 
            t.tShift[e] = T - t.bMarks[e], E = t.md.block.ruler.getRules("blockquote"), 
            v = t.parentType, t.parentType = "blockquote", p = e + 1; p < r && (A = t.sCount[p] < t.blkIndent, 
            !((T = t.bMarks[p] + t.tShift[p]) >= (q = t.eMarks[p]))); p++) if (t.src.charCodeAt(T++) !== 62 || A) {
                if (c) break;
                for (w = !1, a = 0, u = E.length; a < u; a++) if (E[a](t, p, r, !0)) {
                    w = !0;
                    break;
                }
                if (w) {
                    t.lineMax = p, t.blkIndent !== 0 && (g.push(t.bMarks[p]), m.push(t.bsCount[p]), 
                    b.push(t.tShift[p]), _.push(t.sCount[p]), t.sCount[p] -= t.blkIndent);
                    break;
                }
                g.push(t.bMarks[p]), m.push(t.bsCount[p]), b.push(t.tShift[p]), 
                _.push(t.sCount[p]), t.sCount[p] = -1;
            } else {
                for (l = h = t.sCount[p] + 1, t.src.charCodeAt(T) === 32 ? (T++, 
                l++, h++, i = !1, S = !0) : t.src.charCodeAt(T) === 9 ? (S = !0, 
                (t.bsCount[p] + h) % 4 == 3 ? (T++, l++, h++, i = !1) : i = !0) : S = !1, 
                g.push(t.bMarks[p]), t.bMarks[p] = T; T < q && (s = t.src.charCodeAt(T), 
                o(s)); ) s === 9 ? h += 4 - (h + t.bsCount[p] + (i ? 1 : 0)) % 4 : h++, 
                T++;
                c = T >= q, m.push(t.bsCount[p]), t.bsCount[p] = t.sCount[p] + 1 + (S ? 1 : 0), 
                _.push(t.sCount[p]), t.sCount[p] = h - l, b.push(t.tShift[p]), t.tShift[p] = T - t.bMarks[p];
            }
            for (k = t.blkIndent, t.blkIndent = 0, (x = t.push("blockquote_open", "blockquote", 1)).markup = ">", 
            x.map = f = [ e, 0 ], t.md.block.tokenize(t, e, p), (x = t.push("blockquote_close", "blockquote", -1)).markup = ">", 
            t.lineMax = C, t.parentType = v, f[1] = t.line, a = 0; a < b.length; a++) t.bMarks[a + e] = g[a], 
            t.tShift[a + e] = b[a], t.sCount[a + e] = _[a], t.bsCount[a + e] = m[a];
            return t.blkIndent = k, !0;
        };
    }, function(y, D, d) {
        var o = d(0).isSpace;
        y.exports = function(t, e, r, n) {
            var i, s, a, l, u = t.bMarks[e] + t.tShift[e], c = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4 || (i = t.src.charCodeAt(u++)) !== 42 && i !== 45 && i !== 95) return !1;
            for (s = 1; u < c; ) {
                if ((a = t.src.charCodeAt(u++)) !== i && !o(a)) return !1;
                a === i && s++;
            }
            return !(s < 3 || (n || (t.line = e + 1, (l = t.push("hr", "hr", 0)).map = [ e, t.line ], 
            l.markup = Array(s + 1).join(String.fromCharCode(i))), 0));
        };
    }, function(y, D, d) {
        var o = d(0).isSpace;
        function t(r, n) {
            var i, s, a, l;
            return s = r.bMarks[n] + r.tShift[n], a = r.eMarks[n], (i = r.src.charCodeAt(s++)) !== 42 && i !== 45 && i !== 43 || s < a && (l = r.src.charCodeAt(s), 
            !o(l)) ? -1 : s;
        }
        function e(r, n) {
            var i, s = r.bMarks[n] + r.tShift[n], a = s, l = r.eMarks[n];
            if (a + 1 >= l || (i = r.src.charCodeAt(a++)) < 48 || i > 57) return -1;
            for (;;) {
                if (a >= l) return -1;
                if (!((i = r.src.charCodeAt(a++)) >= 48 && i <= 57)) {
                    if (i === 41 || i === 46) break;
                    return -1;
                }
                if (a - s >= 10) return -1;
            }
            return a < l && (i = r.src.charCodeAt(a), !o(i)) ? -1 : a;
        }
        y.exports = function(r, n, i, s) {
            var a, l, u, c, f, p, h, g, m, k, v, _, b, S, w, E, x, A, C, T, q, F, L, M, z, I, O, j, B = !1, R = !0;
            if (r.sCount[n] - r.blkIndent >= 4 || r.listIndent >= 0 && r.sCount[n] - r.listIndent >= 4 && r.sCount[n] < r.blkIndent) return !1;
            if (s && r.parentType === "paragraph" && r.sCount[n] >= r.blkIndent && (B = !0), 
            (L = e(r, n)) >= 0) {
                if (h = !0, z = r.bMarks[n] + r.tShift[n], b = Number(r.src.slice(z, L - 1)), 
                B && b !== 1) return !1;
            } else {
                if (!((L = t(r, n)) >= 0)) return !1;
                h = !1;
            }
            if (B && r.skipSpaces(L) >= r.eMarks[n]) return !1;
            if (_ = r.src.charCodeAt(L - 1), s) return !0;
            for (v = r.tokens.length, h ? (j = r.push("ordered_list_open", "ol", 1), 
            b !== 1 && (j.attrs = [ [ "start", b ] ])) : j = r.push("bullet_list_open", "ul", 1), 
            j.map = k = [ n, 0 ], j.markup = String.fromCharCode(_), w = n, M = !1, 
            O = r.md.block.ruler.getRules("list"), A = r.parentType, r.parentType = "list"; w < i; ) {
                for (F = L, S = r.eMarks[w], p = E = r.sCount[w] + L - (r.bMarks[n] + r.tShift[n]); F < S; ) {
                    if ((a = r.src.charCodeAt(F)) === 9) E += 4 - (E + r.bsCount[w]) % 4; else {
                        if (a !== 32) break;
                        E++;
                    }
                    F++;
                }
                if ((f = (l = F) >= S ? 1 : E - p) > 4 && (f = 1), c = p + f, (j = r.push("list_item_open", "li", 1)).markup = String.fromCharCode(_), 
                j.map = g = [ n, 0 ], h && (j.info = r.src.slice(z, L - 1)), q = r.tight, 
                T = r.tShift[n], C = r.sCount[n], x = r.listIndent, r.listIndent = r.blkIndent, 
                r.blkIndent = c, r.tight = !0, r.tShift[n] = l - r.bMarks[n], r.sCount[n] = E, 
                l >= S && r.isEmpty(n + 1) ? r.line = Math.min(r.line + 2, i) : r.md.block.tokenize(r, n, i, !0), 
                r.tight && !M || (R = !1), M = r.line - n > 1 && r.isEmpty(r.line - 1), 
                r.blkIndent = r.listIndent, r.listIndent = x, r.tShift[n] = T, r.sCount[n] = C, 
                r.tight = q, (j = r.push("list_item_close", "li", -1)).markup = String.fromCharCode(_), 
                w = n = r.line, g[1] = w, l = r.bMarks[n], w >= i || r.sCount[w] < r.blkIndent || r.sCount[n] - r.blkIndent >= 4) break;
                for (I = !1, u = 0, m = O.length; u < m; u++) if (O[u](r, w, i, !0)) {
                    I = !0;
                    break;
                }
                if (I) break;
                if (h) {
                    if ((L = e(r, w)) < 0) break;
                    z = r.bMarks[w] + r.tShift[w];
                } else if ((L = t(r, w)) < 0) break;
                if (_ !== r.src.charCodeAt(L - 1)) break;
            }
            return (j = h ? r.push("ordered_list_close", "ol", -1) : r.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(_), 
            k[1] = w, r.line = w, r.parentType = A, R && function(P, N) {
                var H, X, lt = P.level + 2;
                for (H = N + 2, X = P.tokens.length - 2; H < X; H++) P.tokens[H].level === lt && P.tokens[H].type === "paragraph_open" && (P.tokens[H + 2].hidden = !0, 
                P.tokens[H].hidden = !0, H += 2);
            }(r, v), !0;
        };
    }, function(y, D, d) {
        var o = d(0).normalizeReference, t = d(0).isSpace;
        y.exports = function(e, r, n, i) {
            var s, a, l, u, c, f, p, h, g, m, k, v, _, b, S, w, E = 0, x = e.bMarks[r] + e.tShift[r], A = e.eMarks[r], C = r + 1;
            if (e.sCount[r] - e.blkIndent >= 4 || e.src.charCodeAt(x) !== 91) return !1;
            for (;++x < A; ) if (e.src.charCodeAt(x) === 93 && e.src.charCodeAt(x - 1) !== 92) {
                if (x + 1 === A || e.src.charCodeAt(x + 1) !== 58) return !1;
                break;
            }
            for (u = e.lineMax, S = e.md.block.ruler.getRules("reference"), m = e.parentType, 
            e.parentType = "reference"; C < u && !e.isEmpty(C); C++) if (!(e.sCount[C] - e.blkIndent > 3 || e.sCount[C] < 0)) {
                for (b = !1, f = 0, p = S.length; f < p; f++) if (S[f](e, C, u, !0)) {
                    b = !0;
                    break;
                }
                if (b) break;
            }
            for (A = (_ = e.getLines(r, C, e.blkIndent, !1).trim()).length, x = 1; x < A; x++) {
                if ((s = _.charCodeAt(x)) === 91) return !1;
                if (s === 93) {
                    g = x;
                    break;
                }
                (s === 10 || s === 92 && ++x < A && _.charCodeAt(x) === 10) && E++;
            }
            if (g < 0 || _.charCodeAt(g + 1) !== 58) return !1;
            for (x = g + 2; x < A; x++) if ((s = _.charCodeAt(x)) === 10) E++; else if (!t(s)) break;
            if (!(k = e.md.helpers.parseLinkDestination(_, x, A)).ok || (c = e.md.normalizeLink(k.str), 
            !e.md.validateLink(c))) return !1;
            for (a = x = k.pos, l = E += k.lines, v = x; x < A; x++) if ((s = _.charCodeAt(x)) === 10) E++; else if (!t(s)) break;
            for (k = e.md.helpers.parseLinkTitle(_, x, A), x < A && v !== x && k.ok ? (w = k.str, 
            x = k.pos, E += k.lines) : (w = "", x = a, E = l); x < A && (s = _.charCodeAt(x), 
            t(s)); ) x++;
            if (x < A && _.charCodeAt(x) !== 10 && w) for (w = "", x = a, E = l; x < A && (s = _.charCodeAt(x), 
            t(s)); ) x++;
            return !(x < A && _.charCodeAt(x) !== 10 || !(h = o(_.slice(1, g))) || (i || (e.env.references === void 0 && (e.env.references = {}), 
            e.env.references[h] === void 0 && (e.env.references[h] = {
                title: w,
                href: c
            }), e.parentType = m, e.line = r + E + 1), 0));
        };
    }, function(y, D, d) {
        var o = d(50), t = d(12).HTML_OPEN_CLOSE_TAG_RE, e = [ [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0 ], [ /^<!--/, /-->/, !0 ], [ /^<\?/, /\?>/, !0 ], [ /^<![A-Z]/, />/, !0 ], [ /^<!\[CDATA\[/, /\]\]>/, !0 ], [ new RegExp("^</?(" + o.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0 ], [ new RegExp(t.source + "\\s*$"), /^$/, !1 ] ];
        y.exports = function(r, n, i, s) {
            var a, l, u, c, f = r.bMarks[n] + r.tShift[n], p = r.eMarks[n];
            if (r.sCount[n] - r.blkIndent >= 4 || !r.md.options.html || r.src.charCodeAt(f) !== 60) return !1;
            for (c = r.src.slice(f, p), a = 0; a < e.length && !e[a][0].test(c); a++);
            if (a === e.length) return !1;
            if (s) return e[a][2];
            if (l = n + 1, !e[a][1].test(c)) {
                for (;l < i && !(r.sCount[l] < r.blkIndent); l++) if (f = r.bMarks[l] + r.tShift[l], 
                p = r.eMarks[l], c = r.src.slice(f, p), e[a][1].test(c)) {
                    c.length !== 0 && l++;
                    break;
                }
            }
            return r.line = l, (u = r.push("html_block", "", 0)).map = [ n, l ], 
            u.content = r.getLines(n, l, r.blkIndent, !0), !0;
        };
    }, function(y, D, d) {
        y.exports = [ "address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul" ];
    }, function(y, D, d) {
        var o = d(0).isSpace;
        y.exports = function(t, e, r, n) {
            var i, s, a, l, u = t.bMarks[e] + t.tShift[e], c = t.eMarks[e];
            if (t.sCount[e] - t.blkIndent >= 4 || (i = t.src.charCodeAt(u)) !== 35 || u >= c) return !1;
            for (s = 1, i = t.src.charCodeAt(++u); i === 35 && u < c && s <= 6; ) s++, 
            i = t.src.charCodeAt(++u);
            return !(s > 6 || u < c && !o(i) || (n || (c = t.skipSpacesBack(c, u), 
            (a = t.skipCharsBack(c, 35, u)) > u && o(t.src.charCodeAt(a - 1)) && (c = a), 
            t.line = e + 1, (l = t.push("heading_open", "h" + String(s), 1)).markup = "########".slice(0, s), 
            l.map = [ e, t.line ], (l = t.push("inline", "", 0)).content = t.src.slice(u, c).trim(), 
            l.map = [ e, t.line ], l.children = [], (l = t.push("heading_close", "h" + String(s), -1)).markup = "########".slice(0, s)), 
            0));
        };
    }, function(y, D, d) {
        y.exports = function(o, t, e) {
            var r, n, i, s, a, l, u, c, f, p, h = t + 1, g = o.md.block.ruler.getRules("paragraph");
            if (o.sCount[t] - o.blkIndent >= 4) return !1;
            for (p = o.parentType, o.parentType = "paragraph"; h < e && !o.isEmpty(h); h++) if (!(o.sCount[h] - o.blkIndent > 3)) {
                if (o.sCount[h] >= o.blkIndent && (l = o.bMarks[h] + o.tShift[h]) < (u = o.eMarks[h]) && ((f = o.src.charCodeAt(l)) === 45 || f === 61) && (l = o.skipChars(l, f), 
                (l = o.skipSpaces(l)) >= u)) {
                    c = f === 61 ? 1 : 2;
                    break;
                }
                if (!(o.sCount[h] < 0)) {
                    for (n = !1, i = 0, s = g.length; i < s; i++) if (g[i](o, h, e, !0)) {
                        n = !0;
                        break;
                    }
                    if (n) break;
                }
            }
            return !!c && (r = o.getLines(t, h, o.blkIndent, !1).trim(), o.line = h + 1, 
            (a = o.push("heading_open", "h" + String(c), 1)).markup = String.fromCharCode(f), 
            a.map = [ t, o.line ], (a = o.push("inline", "", 0)).content = r, a.map = [ t, o.line - 1 ], 
            a.children = [], (a = o.push("heading_close", "h" + String(c), -1)).markup = String.fromCharCode(f), 
            o.parentType = p, !0);
        };
    }, function(y, D, d) {
        y.exports = function(o, t) {
            var e, r, n, i, s, a, l = t + 1, u = o.md.block.ruler.getRules("paragraph"), c = o.lineMax;
            for (a = o.parentType, o.parentType = "paragraph"; l < c && !o.isEmpty(l); l++) if (!(o.sCount[l] - o.blkIndent > 3 || o.sCount[l] < 0)) {
                for (r = !1, n = 0, i = u.length; n < i; n++) if (u[n](o, l, c, !0)) {
                    r = !0;
                    break;
                }
                if (r) break;
            }
            return e = o.getLines(t, l, o.blkIndent, !1).trim(), o.line = l, (s = o.push("paragraph_open", "p", 1)).map = [ t, o.line ], 
            (s = o.push("inline", "", 0)).content = e, s.map = [ t, o.line ], s.children = [], 
            s = o.push("paragraph_close", "p", -1), o.parentType = a, !0;
        };
    }, function(y, D, d) {
        var o = d(5), t = d(0).isSpace;
        function e(r, n, i, s) {
            var a, l, u, c, f, p, h, g;
            for (this.src = r, this.md = n, this.env = i, this.tokens = s, this.bMarks = [], 
            this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], 
            this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, 
            this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", 
            this.level = 0, this.result = "", g = !1, u = c = p = h = 0, f = (l = this.src).length; c < f; c++) {
                if (a = l.charCodeAt(c), !g) {
                    if (t(a)) {
                        p++, a === 9 ? h += 4 - h % 4 : h++;
                        continue;
                    }
                    g = !0;
                }
                a !== 10 && c !== f - 1 || (a !== 10 && c++, this.bMarks.push(u), 
                this.eMarks.push(c), this.tShift.push(p), this.sCount.push(h), this.bsCount.push(0), 
                g = !1, p = 0, h = 0, u = c + 1);
            }
            this.bMarks.push(l.length), this.eMarks.push(l.length), this.tShift.push(0), 
            this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
        }
        e.prototype.push = function(r, n, i) {
            var s = new o(r, n, i);
            return s.block = !0, i < 0 && this.level--, s.level = this.level, i > 0 && this.level++, 
            this.tokens.push(s), s;
        }, e.prototype.isEmpty = function(r) {
            return this.bMarks[r] + this.tShift[r] >= this.eMarks[r];
        }, e.prototype.skipEmptyLines = function(r) {
            for (var n = this.lineMax; r < n && !(this.bMarks[r] + this.tShift[r] < this.eMarks[r]); r++);
            return r;
        }, e.prototype.skipSpaces = function(r) {
            for (var n, i = this.src.length; r < i && (n = this.src.charCodeAt(r), 
            t(n)); r++);
            return r;
        }, e.prototype.skipSpacesBack = function(r, n) {
            if (r <= n) return r;
            for (;r > n; ) if (!t(this.src.charCodeAt(--r))) return r + 1;
            return r;
        }, e.prototype.skipChars = function(r, n) {
            for (var i = this.src.length; r < i && this.src.charCodeAt(r) === n; r++);
            return r;
        }, e.prototype.skipCharsBack = function(r, n, i) {
            if (r <= i) return r;
            for (;r > i; ) if (n !== this.src.charCodeAt(--r)) return r + 1;
            return r;
        }, e.prototype.getLines = function(r, n, i, s) {
            var a, l, u, c, f, p, h, g = r;
            if (r >= n) return "";
            for (p = new Array(n - r), a = 0; g < n; g++, a++) {
                for (l = 0, h = c = this.bMarks[g], f = g + 1 < n || s ? this.eMarks[g] + 1 : this.eMarks[g]; c < f && l < i; ) {
                    if (u = this.src.charCodeAt(c), t(u)) u === 9 ? l += 4 - (l + this.bsCount[g]) % 4 : l++; else {
                        if (!(c - h < this.tShift[g])) break;
                        l++;
                    }
                    c++;
                }
                p[a] = l > i ? new Array(l - i + 1).join(" ") + this.src.slice(c, f) : this.src.slice(c, f);
            }
            return p.join("");
        }, e.prototype.Token = o, y.exports = e;
    }, function(y, D, d) {
        var o = d(4), t = [ [ "text", d(56) ], [ "newline", d(57) ], [ "escape", d(58) ], [ "backticks", d(59) ], [ "strikethrough", d(13).tokenize ], [ "emphasis", d(14).tokenize ], [ "link", d(60) ], [ "image", d(61) ], [ "autolink", d(62) ], [ "html_inline", d(63) ], [ "entity", d(64) ] ], e = [ [ "balance_pairs", d(65) ], [ "strikethrough", d(13).postProcess ], [ "emphasis", d(14).postProcess ], [ "text_collapse", d(66) ] ];
        function r() {
            var n;
            for (this.ruler = new o(), n = 0; n < t.length; n++) this.ruler.push(t[n][0], t[n][1]);
            for (this.ruler2 = new o(), n = 0; n < e.length; n++) this.ruler2.push(e[n][0], e[n][1]);
        }
        r.prototype.skipToken = function(n) {
            var i, s, a = n.pos, l = this.ruler.getRules(""), u = l.length, c = n.md.options.maxNesting, f = n.cache;
            if (f[a] === void 0) {
                if (n.level < c) for (s = 0; s < u && (n.level++, i = l[s](n, !0), 
                n.level--, !i); s++); else n.pos = n.posMax;
                i || n.pos++, f[a] = n.pos;
            } else n.pos = f[a];
        }, r.prototype.tokenize = function(n) {
            for (var i, s, a = this.ruler.getRules(""), l = a.length, u = n.posMax, c = n.md.options.maxNesting; n.pos < u; ) {
                if (n.level < c) for (s = 0; s < l && !(i = a[s](n, !1)); s++);
                if (i) {
                    if (n.pos >= u) break;
                } else n.pending += n.src[n.pos++];
            }
            n.pending && n.pushPending();
        }, r.prototype.parse = function(n, i, s, a) {
            var l, u, c, f = new this.State(n, i, s, a);
            for (this.tokenize(f), c = (u = this.ruler2.getRules("")).length, l = 0; l < c; l++) u[l](f);
        }, r.prototype.State = d(67), y.exports = r;
    }, function(y, D, d) {
        function o(t) {
            switch (t) {
              case 10:
              case 33:
              case 35:
              case 36:
              case 37:
              case 38:
              case 42:
              case 43:
              case 45:
              case 58:
              case 60:
              case 61:
              case 62:
              case 64:
              case 91:
              case 92:
              case 93:
              case 94:
              case 95:
              case 96:
              case 123:
              case 125:
              case 126:
                return !0;

              default:
                return !1;
            }
        }
        y.exports = function(t, e) {
            for (var r = t.pos; r < t.posMax && !o(t.src.charCodeAt(r)); ) r++;
            return r !== t.pos && (e || (t.pending += t.src.slice(t.pos, r)), t.pos = r, 
            !0);
        };
    }, function(y, D, d) {
        var o = d(0).isSpace;
        y.exports = function(t, e) {
            var r, n, i, s = t.pos;
            if (t.src.charCodeAt(s) !== 10) return !1;
            if (r = t.pending.length - 1, n = t.posMax, !e) if (r >= 0 && t.pending.charCodeAt(r) === 32) if (r >= 1 && t.pending.charCodeAt(r - 1) === 32) {
                for (i = r - 1; i >= 1 && t.pending.charCodeAt(i - 1) === 32; ) i--;
                t.pending = t.pending.slice(0, i), t.push("hardbreak", "br", 0);
            } else t.pending = t.pending.slice(0, -1), t.push("softbreak", "br", 0); else t.push("softbreak", "br", 0);
            for (s++; s < n && o(t.src.charCodeAt(s)); ) s++;
            return t.pos = s, !0;
        };
    }, function(y, D, d) {
        for (var o = d(0).isSpace, t = [], e = 0; e < 256; e++) t.push(0);
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
            t[r.charCodeAt(0)] = 1;
        }), y.exports = function(r, n) {
            var i, s = r.pos, a = r.posMax;
            if (r.src.charCodeAt(s) !== 92) return !1;
            if (++s < a) {
                if ((i = r.src.charCodeAt(s)) < 256 && t[i] !== 0) return n || (r.pending += r.src[s]), 
                r.pos += 2, !0;
                if (i === 10) {
                    for (n || r.push("hardbreak", "br", 0), s++; s < a && (i = r.src.charCodeAt(s), 
                    o(i)); ) s++;
                    return r.pos = s, !0;
                }
            }
            return n || (r.pending += "\\"), r.pos++, !0;
        };
    }, function(y, D, d) {
        y.exports = function(o, t) {
            var e, r, n, i, s, a, l, u, c = o.pos;
            if (o.src.charCodeAt(c) !== 96) return !1;
            for (e = c, c++, r = o.posMax; c < r && o.src.charCodeAt(c) === 96; ) c++;
            if (l = (n = o.src.slice(e, c)).length, o.backticksScanned && (o.backticks[l] || 0) <= e) return t || (o.pending += n), 
            o.pos += l, !0;
            for (s = a = c; (s = o.src.indexOf("`", a)) !== -1; ) {
                for (a = s + 1; a < r && o.src.charCodeAt(a) === 96; ) a++;
                if ((u = a - s) === l) return t || ((i = o.push("code_inline", "code", 0)).markup = n, 
                i.content = o.src.slice(c, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), 
                o.pos = a, !0;
                o.backticks[u] = s;
            }
            return o.backticksScanned = !0, t || (o.pending += n), o.pos += l, !0;
        };
    }, function(y, D, d) {
        var o = d(0).normalizeReference, t = d(0).isSpace;
        y.exports = function(e, r) {
            var n, i, s, a, l, u, c, f, p = "", h = "", g = e.pos, m = e.posMax, k = e.pos, v = !0;
            if (e.src.charCodeAt(e.pos) !== 91 || (l = e.pos + 1, (a = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0)) return !1;
            if ((u = a + 1) < m && e.src.charCodeAt(u) === 40) {
                for (v = !1, u++; u < m && (i = e.src.charCodeAt(u), t(i) || i === 10); u++);
                if (u >= m) return !1;
                if (k = u, (c = e.md.helpers.parseLinkDestination(e.src, u, e.posMax)).ok) {
                    for (p = e.md.normalizeLink(c.str), e.md.validateLink(p) ? u = c.pos : p = "", 
                    k = u; u < m && (i = e.src.charCodeAt(u), t(i) || i === 10); u++);
                    if (c = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < m && k !== u && c.ok) for (h = c.str, 
                    u = c.pos; u < m && (i = e.src.charCodeAt(u), t(i) || i === 10); u++);
                }
                (u >= m || e.src.charCodeAt(u) !== 41) && (v = !0), u++;
            }
            if (v) {
                if (e.env.references === void 0) return !1;
                if (u < m && e.src.charCodeAt(u) === 91 ? (k = u + 1, (u = e.md.helpers.parseLinkLabel(e, u)) >= 0 ? s = e.src.slice(k, u++) : u = a + 1) : u = a + 1, 
                s || (s = e.src.slice(l, a)), !(f = e.env.references[o(s)])) return e.pos = g, 
                !1;
                p = f.href, h = f.title;
            }
            return r || (e.pos = l, e.posMax = a, e.push("link_open", "a", 1).attrs = n = [ [ "href", p ] ], 
            h && n.push([ "title", h ]), e.md.inline.tokenize(e), e.push("link_close", "a", -1)), 
            e.pos = u, e.posMax = m, !0;
        };
    }, function(y, D, d) {
        var o = d(0).normalizeReference, t = d(0).isSpace;
        y.exports = function(e, r) {
            var n, i, s, a, l, u, c, f, p, h, g, m, k, v = "", _ = e.pos, b = e.posMax;
            if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (u = e.pos + 2, 
            (l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0)) return !1;
            if ((c = l + 1) < b && e.src.charCodeAt(c) === 40) {
                for (c++; c < b && (i = e.src.charCodeAt(c), t(i) || i === 10); c++);
                if (c >= b) return !1;
                for (k = c, (p = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)).ok && (v = e.md.normalizeLink(p.str), 
                e.md.validateLink(v) ? c = p.pos : v = ""), k = c; c < b && (i = e.src.charCodeAt(c), 
                t(i) || i === 10); c++);
                if (p = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < b && k !== c && p.ok) for (h = p.str, 
                c = p.pos; c < b && (i = e.src.charCodeAt(c), t(i) || i === 10); c++); else h = "";
                if (c >= b || e.src.charCodeAt(c) !== 41) return e.pos = _, !1;
                c++;
            } else {
                if (e.env.references === void 0) return !1;
                if (c < b && e.src.charCodeAt(c) === 91 ? (k = c + 1, (c = e.md.helpers.parseLinkLabel(e, c)) >= 0 ? a = e.src.slice(k, c++) : c = l + 1) : c = l + 1, 
                a || (a = e.src.slice(u, l)), !(f = e.env.references[o(a)])) return e.pos = _, 
                !1;
                v = f.href, h = f.title;
            }
            return r || (s = e.src.slice(u, l), e.md.inline.parse(s, e.md, e.env, m = []), 
            (g = e.push("image", "img", 0)).attrs = n = [ [ "src", v ], [ "alt", "" ] ], 
            g.children = m, g.content = s, h && n.push([ "title", h ])), e.pos = c, 
            e.posMax = b, !0;
        };
    }, function(y, D, d) {
        var o = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
        y.exports = function(e, r) {
            var n, i, s, a, l, u, c = e.pos;
            if (e.src.charCodeAt(c) !== 60) return !1;
            for (l = e.pos, u = e.posMax; ;) {
                if (++c >= u || (a = e.src.charCodeAt(c)) === 60) return !1;
                if (a === 62) break;
            }
            return n = e.src.slice(l + 1, c), t.test(n) ? (i = e.md.normalizeLink(n), 
            !!e.md.validateLink(i) && (r || ((s = e.push("link_open", "a", 1)).attrs = [ [ "href", i ] ], 
            s.markup = "autolink", s.info = "auto", (s = e.push("text", "", 0)).content = e.md.normalizeLinkText(n), 
            (s = e.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), 
            e.pos += n.length + 2, !0)) : !!o.test(n) && (i = e.md.normalizeLink("mailto:" + n), 
            !!e.md.validateLink(i) && (r || ((s = e.push("link_open", "a", 1)).attrs = [ [ "href", i ] ], 
            s.markup = "autolink", s.info = "auto", (s = e.push("text", "", 0)).content = e.md.normalizeLinkText(n), 
            (s = e.push("link_close", "a", -1)).markup = "autolink", s.info = "auto"), 
            e.pos += n.length + 2, !0));
        };
    }, function(y, D, d) {
        var o = d(12).HTML_TAG_RE;
        y.exports = function(t, e) {
            var r, n, i, s = t.pos;
            return !(!t.md.options.html || (i = t.posMax, t.src.charCodeAt(s) !== 60 || s + 2 >= i || (r = t.src.charCodeAt(s + 1)) !== 33 && r !== 63 && r !== 47 && !function(a) {
                var l = 32 | a;
                return l >= 97 && l <= 122;
            }(r) || !(n = t.src.slice(s).match(o)) || (e || (t.push("html_inline", "", 0).content = t.src.slice(s, s + n[0].length)), 
            t.pos += n[0].length, 0)));
        };
    }, function(y, D, d) {
        var o = d(7), t = d(0).has, e = d(0).isValidEntityCode, r = d(0).fromCodePoint, n = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, i = /^&([a-z][a-z0-9]{1,31});/i;
        y.exports = function(s, a) {
            var l, u, c = s.pos, f = s.posMax;
            if (s.src.charCodeAt(c) !== 38) return !1;
            if (c + 1 < f) {
                if (s.src.charCodeAt(c + 1) === 35) {
                    if (u = s.src.slice(c).match(n)) return a || (l = u[1][0].toLowerCase() === "x" ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), 
                    s.pending += e(l) ? r(l) : r(65533)), s.pos += u[0].length, 
                    !0;
                } else if ((u = s.src.slice(c).match(i)) && t(o, u[1])) return a || (s.pending += o[u[1]]), 
                s.pos += u[0].length, !0;
            }
            return a || (s.pending += "&"), s.pos++, !0;
        };
    }, function(y, D, d) {
        function o(t, e) {
            var r, n, i, s, a, l, u, c, f = {}, p = e.length;
            if (p) {
                var h = 0, g = -2, m = [];
                for (r = 0; r < p; r++) if (i = e[r], m.push(0), e[h].marker === i.marker && g === i.token - 1 || (h = r), 
                g = i.token, i.length = i.length || 0, i.close) {
                    for (f.hasOwnProperty(i.marker) || (f[i.marker] = [ -1, -1, -1, -1, -1, -1 ]), 
                    a = f[i.marker][(i.open ? 3 : 0) + i.length % 3], l = n = h - m[h] - 1; n > a; n -= m[n] + 1) if ((s = e[n]).marker === i.marker && s.open && s.end < 0 && (u = !1, 
                    (s.close || i.open) && (s.length + i.length) % 3 == 0 && (s.length % 3 == 0 && i.length % 3 == 0 || (u = !0)), 
                    !u)) {
                        c = n > 0 && !e[n - 1].open ? m[n - 1] + 1 : 0, m[r] = r - n + c, 
                        m[n] = c, i.open = !1, s.end = r, s.close = !1, l = -1, 
                        g = -2;
                        break;
                    }
                    l !== -1 && (f[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = l);
                }
            }
        }
        y.exports = function(t) {
            var e, r = t.tokens_meta, n = t.tokens_meta.length;
            for (o(0, t.delimiters), e = 0; e < n; e++) r[e] && r[e].delimiters && o(0, r[e].delimiters);
        };
    }, function(y, D, d) {
        y.exports = function(o) {
            var t, e, r = 0, n = o.tokens, i = o.tokens.length;
            for (t = e = 0; t < i; t++) n[t].nesting < 0 && r--, n[t].level = r, 
            n[t].nesting > 0 && r++, n[t].type === "text" && t + 1 < i && n[t + 1].type === "text" ? n[t + 1].content = n[t].content + n[t + 1].content : (t !== e && (n[e] = n[t]), 
            e++);
            t !== e && (n.length = e);
        };
    }, function(y, D, d) {
        var o = d(5), t = d(0).isWhiteSpace, e = d(0).isPunctChar, r = d(0).isMdAsciiPunct;
        function n(i, s, a, l) {
            this.src = i, this.env = a, this.md = s, this.tokens = l, this.tokens_meta = Array(l.length), 
            this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", 
            this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], 
            this.backticks = {}, this.backticksScanned = !1;
        }
        n.prototype.pushPending = function() {
            var i = new o("text", "", 0);
            return i.content = this.pending, i.level = this.pendingLevel, this.tokens.push(i), 
            this.pending = "", i;
        }, n.prototype.push = function(i, s, a) {
            this.pending && this.pushPending();
            var l = new o(i, s, a), u = null;
            return a < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), 
            l.level = this.level, a > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), 
            this.delimiters = [], u = {
                delimiters: this.delimiters
            }), this.pendingLevel = this.level, this.tokens.push(l), this.tokens_meta.push(u), 
            l;
        }, n.prototype.scanDelims = function(i, s) {
            var a, l, u, c, f, p, h, g, m, k = i, v = !0, _ = !0, b = this.posMax, S = this.src.charCodeAt(i);
            for (a = i > 0 ? this.src.charCodeAt(i - 1) : 32; k < b && this.src.charCodeAt(k) === S; ) k++;
            return u = k - i, l = k < b ? this.src.charCodeAt(k) : 32, h = r(a) || e(String.fromCharCode(a)), 
            m = r(l) || e(String.fromCharCode(l)), p = t(a), (g = t(l)) ? v = !1 : m && (p || h || (v = !1)), 
            p ? _ = !1 : h && (g || m || (_ = !1)), s ? (c = v, f = _) : (c = v && (!_ || h), 
            f = _ && (!v || m)), {
                can_open: c,
                can_close: f,
                length: u
            };
        }, n.prototype.Token = o, y.exports = n;
    }, function(y, D, d) {
        function o(f) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(p) {
                p && Object.keys(p).forEach(function(h) {
                    f[h] = p[h];
                });
            }), f;
        }
        function t(f) {
            return Object.prototype.toString.call(f);
        }
        function e(f) {
            return t(f) === "[object Function]";
        }
        function r(f) {
            return f.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        var n = {
            fuzzyLink: !0,
            fuzzyEmail: !0,
            fuzzyIP: !1
        }, i = {
            "http:": {
                validate: function(f, p, h) {
                    var g = f.slice(p);
                    return h.re.http || (h.re.http = new RegExp("^\\/\\/" + h.re.src_auth + h.re.src_host_port_strict + h.re.src_path, "i")), 
                    h.re.http.test(g) ? g.match(h.re.http)[0].length : 0;
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(f, p, h) {
                    var g = f.slice(p);
                    return h.re.no_http || (h.re.no_http = new RegExp("^" + h.re.src_auth + "(?:localhost|(?:(?:" + h.re.src_domain + ")\\.)+" + h.re.src_domain_root + ")" + h.re.src_port + h.re.src_host_terminator + h.re.src_path, "i")), 
                    h.re.no_http.test(g) ? p >= 3 && f[p - 3] === ":" || p >= 3 && f[p - 3] === "/" ? 0 : g.match(h.re.no_http)[0].length : 0;
                }
            },
            "mailto:": {
                validate: function(f, p, h) {
                    var g = f.slice(p);
                    return h.re.mailto || (h.re.mailto = new RegExp("^" + h.re.src_email_name + "@" + h.re.src_host_strict, "i")), 
                    h.re.mailto.test(g) ? g.match(h.re.mailto)[0].length : 0;
                }
            }
        }, s = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
        function a(f) {
            var p = f.re = d(69)(f.__opts__), h = f.__tlds__.slice();
            function g(_) {
                return _.replace("%TLDS%", p.src_tlds);
            }
            f.onCompile(), f.__tlds_replaced__ || h.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), 
            h.push(p.src_xn), p.src_tlds = h.join("|"), p.email_fuzzy = RegExp(g(p.tpl_email_fuzzy), "i"), 
            p.link_fuzzy = RegExp(g(p.tpl_link_fuzzy), "i"), p.link_no_ip_fuzzy = RegExp(g(p.tpl_link_no_ip_fuzzy), "i"), 
            p.host_fuzzy_test = RegExp(g(p.tpl_host_fuzzy_test), "i");
            var m = [];
            function k(_, b) {
                throw new Error('(LinkifyIt) Invalid schema "' + _ + '": ' + b);
            }
            f.__compiled__ = {}, Object.keys(f.__schemas__).forEach(function(_) {
                var b = f.__schemas__[_];
                if (b !== null) {
                    var S = {
                        validate: null,
                        link: null
                    };
                    if (f.__compiled__[_] = S, t(b) === "[object Object]") return function(w) {
                        return t(w) === "[object RegExp]";
                    }(b.validate) ? S.validate = function(w) {
                        return function(E, x) {
                            var A = E.slice(x);
                            return w.test(A) ? A.match(w)[0].length : 0;
                        };
                    }(b.validate) : e(b.validate) ? S.validate = b.validate : k(_, b), 
                    void (e(b.normalize) ? S.normalize = b.normalize : b.normalize ? k(_, b) : S.normalize = function(w, E) {
                        E.normalize(w);
                    });
                    (function(w) {
                        return t(w) === "[object String]";
                    })(b) ? m.push(_) : k(_, b);
                }
            }), m.forEach(function(_) {
                f.__compiled__[f.__schemas__[_]] && (f.__compiled__[_].validate = f.__compiled__[f.__schemas__[_]].validate, 
                f.__compiled__[_].normalize = f.__compiled__[f.__schemas__[_]].normalize);
            }), f.__compiled__[""] = {
                validate: null,
                normalize: function(_, b) {
                    b.normalize(_);
                }
            };
            var v = Object.keys(f.__compiled__).filter(function(_) {
                return _.length > 0 && f.__compiled__[_];
            }).map(r).join("|");
            f.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + p.src_ZPCc + "))(" + v + ")", "i"), 
            f.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + p.src_ZPCc + "))(" + v + ")", "ig"), 
            f.re.pretest = RegExp("(" + f.re.schema_test.source + ")|(" + f.re.host_fuzzy_test.source + ")|@", "i"), 
            function(_) {
                _.__index__ = -1, _.__text_cache__ = "";
            }(f);
        }
        function l(f, p) {
            var h = f.__index__, g = f.__last_index__, m = f.__text_cache__.slice(h, g);
            this.schema = f.__schema__.toLowerCase(), this.index = h + p, this.lastIndex = g + p, 
            this.raw = m, this.text = m, this.url = m;
        }
        function u(f, p) {
            var h = new l(f, p);
            return f.__compiled__[h.schema].normalize(h, f), h;
        }
        function c(f, p) {
            if (!(this instanceof c)) return new c(f, p);
            var h;
            p || (h = f, Object.keys(h || {}).reduce(function(g, m) {
                return g || n.hasOwnProperty(m);
            }, !1) && (p = f, f = {})), this.__opts__ = o({}, n, p), this.__index__ = -1, 
            this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", 
            this.__schemas__ = o({}, i, f), this.__compiled__ = {}, this.__tlds__ = s, 
            this.__tlds_replaced__ = !1, this.re = {}, a(this);
        }
        c.prototype.add = function(f, p) {
            return this.__schemas__[f] = p, a(this), this;
        }, c.prototype.set = function(f) {
            return this.__opts__ = o(this.__opts__, f), this;
        }, c.prototype.test = function(f) {
            if (this.__text_cache__ = f, this.__index__ = -1, !f.length) return !1;
            var p, h, g, m, k, v, _, b;
            if (this.re.schema_test.test(f)) {
                for ((_ = this.re.schema_search).lastIndex = 0; (p = _.exec(f)) !== null; ) if (m = this.testSchemaAt(f, p[2], _.lastIndex)) {
                    this.__schema__ = p[2], this.__index__ = p.index + p[1].length, 
                    this.__last_index__ = p.index + p[0].length + m;
                    break;
                }
            }
            return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (b = f.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || b < this.__index__) && (h = f.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (k = h.index + h[1].length, 
            (this.__index__ < 0 || k < this.__index__) && (this.__schema__ = "", 
            this.__index__ = k, this.__last_index__ = h.index + h[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && f.indexOf("@") >= 0 && (g = f.match(this.re.email_fuzzy)) !== null && (k = g.index + g[1].length, 
            v = g.index + g[0].length, (this.__index__ < 0 || k < this.__index__ || k === this.__index__ && v > this.__last_index__) && (this.__schema__ = "mailto:", 
            this.__index__ = k, this.__last_index__ = v)), this.__index__ >= 0;
        }, c.prototype.pretest = function(f) {
            return this.re.pretest.test(f);
        }, c.prototype.testSchemaAt = function(f, p, h) {
            return this.__compiled__[p.toLowerCase()] ? this.__compiled__[p.toLowerCase()].validate(f, h, this) : 0;
        }, c.prototype.match = function(f) {
            var p = 0, h = [];
            this.__index__ >= 0 && this.__text_cache__ === f && (h.push(u(this, p)), 
            p = this.__last_index__);
            for (var g = p ? f.slice(p) : f; this.test(g); ) h.push(u(this, p)), 
            g = g.slice(this.__last_index__), p += this.__last_index__;
            return h.length ? h : null;
        }, c.prototype.tlds = function(f, p) {
            return f = Array.isArray(f) ? f : [ f ], p ? (this.__tlds__ = this.__tlds__.concat(f).sort().filter(function(h, g, m) {
                return h !== m[g - 1];
            }).reverse(), a(this), this) : (this.__tlds__ = f.slice(), this.__tlds_replaced__ = !0, 
            a(this), this);
        }, c.prototype.normalize = function(f) {
            f.schema || (f.url = "http://" + f.url), f.schema !== "mailto:" || /^mailto:/i.test(f.url) || (f.url = "mailto:" + f.url);
        }, c.prototype.onCompile = function() {}, y.exports = c;
    }, function(y, D, d) {
        y.exports = function(o) {
            var t = {};
            return t.src_Any = d(9).source, t.src_Cc = d(10).source, t.src_Z = d(11).source, 
            t.src_P = d(3).source, t.src_ZPCc = [ t.src_Z, t.src_P, t.src_Cc ].join("|"), 
            t.src_ZCc = [ t.src_Z, t.src_Cc ].join("|"), t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", 
            t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", 
            t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", 
            t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", 
            t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + `|[><\uFF5C]|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]).|" + (o && o["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!+(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", 
            t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', 
            t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", 
            t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", 
            t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", 
            t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", 
            t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", 
            t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, 
            t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, 
            t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, 
            t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, 
            t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", 
            t.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", 
            t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", 
            t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", 
            t;
        };
    }, function(y, D, d) {
        (function(o, t) {
            var e;
            (function(r) {
                D && D.nodeType, o && o.nodeType;
                var n = typeof t == "object" && t;
                n.global !== n && n.window !== n && n.self;
                var i, s = 2147483647, a = /^xn--/, l = /[^\x20-\x7E]/, u = /[\x2E\u3002\uFF0E\uFF61]/g, c = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, f = Math.floor, p = String.fromCharCode;
                function h(E) {
                    throw new RangeError(c[E]);
                }
                function g(E, x) {
                    for (var A = E.length, C = []; A--; ) C[A] = x(E[A]);
                    return C;
                }
                function m(E, x) {
                    var A = E.split("@"), C = "";
                    return A.length > 1 && (C = A[0] + "@", E = A[1]), C + g((E = E.replace(u, ".")).split("."), x).join(".");
                }
                function k(E) {
                    for (var x, A, C = [], T = 0, q = E.length; T < q; ) (x = E.charCodeAt(T++)) >= 55296 && x <= 56319 && T < q ? (64512 & (A = E.charCodeAt(T++))) == 56320 ? C.push(((1023 & x) << 10) + (1023 & A) + 65536) : (C.push(x), 
                    T--) : C.push(x);
                    return C;
                }
                function v(E) {
                    return g(E, function(x) {
                        var A = "";
                        return x > 65535 && (A += p((x -= 65536) >>> 10 & 1023 | 55296), 
                        x = 56320 | 1023 & x), A + p(x);
                    }).join("");
                }
                function _(E, x) {
                    return E + 22 + 75 * (E < 26) - ((x != 0) << 5);
                }
                function b(E, x, A) {
                    var C = 0;
                    for (E = A ? f(E / 700) : E >> 1, E += f(E / x); E > 455; C += 36) E = f(E / 35);
                    return f(C + 36 * E / (E + 38));
                }
                function S(E) {
                    var x, A, C, T, q, F, L, M, z, I, O, j = [], B = E.length, R = 0, P = 128, N = 72;
                    for ((A = E.lastIndexOf("-")) < 0 && (A = 0), C = 0; C < A; ++C) E.charCodeAt(C) >= 128 && h("not-basic"), 
                    j.push(E.charCodeAt(C));
                    for (T = A > 0 ? A + 1 : 0; T < B; ) {
                        for (q = R, F = 1, L = 36; T >= B && h("invalid-input"), 
                        ((M = (O = E.charCodeAt(T++)) - 48 < 10 ? O - 22 : O - 65 < 26 ? O - 65 : O - 97 < 26 ? O - 97 : 36) >= 36 || M > f((s - R) / F)) && h("overflow"), 
                        R += M * F, !(M < (z = L <= N ? 1 : L >= N + 26 ? 26 : L - N)); L += 36) F > f(s / (I = 36 - z)) && h("overflow"), 
                        F *= I;
                        N = b(R - q, x = j.length + 1, q == 0), f(R / x) > s - P && h("overflow"), 
                        P += f(R / x), R %= x, j.splice(R++, 0, P);
                    }
                    return v(j);
                }
                function w(E) {
                    var x, A, C, T, q, F, L, M, z, I, O, j, B, R, P, N = [];
                    for (j = (E = k(E)).length, x = 128, A = 0, q = 72, F = 0; F < j; ++F) (O = E[F]) < 128 && N.push(p(O));
                    for (C = T = N.length, T && N.push("-"); C < j; ) {
                        for (L = s, F = 0; F < j; ++F) (O = E[F]) >= x && O < L && (L = O);
                        for (L - x > f((s - A) / (B = C + 1)) && h("overflow"), 
                        A += (L - x) * B, x = L, F = 0; F < j; ++F) if ((O = E[F]) < x && ++A > s && h("overflow"), 
                        O == x) {
                            for (M = A, z = 36; !(M < (I = z <= q ? 1 : z >= q + 26 ? 26 : z - q)); z += 36) P = M - I, 
                            R = 36 - I, N.push(p(_(I + P % R, 0))), M = f(P / R);
                            N.push(p(_(M, 0))), q = b(A, B, C == T), A = 0, ++C;
                        }
                        ++A, ++x;
                    }
                    return N.join("");
                }
                i = {
                    version: "1.4.1",
                    ucs2: {
                        decode: k,
                        encode: v
                    },
                    decode: S,
                    encode: w,
                    toASCII: function(E) {
                        return m(E, function(x) {
                            return l.test(x) ? "xn--" + w(x) : x;
                        });
                    },
                    toUnicode: function(E) {
                        return m(E, function(x) {
                            return a.test(x) ? S(x.slice(4).toLowerCase()) : x;
                        });
                    }
                }, (e = function() {
                    return i;
                }.call(D, d, D, o)) === void 0 || (o.exports = e);
            })();
        }).call(this, d(71)(y), d(72));
    }, function(y, D) {
        y.exports = function(d) {
            return d.webpackPolyfill || (d.deprecate = function() {}, d.paths = [], 
            d.children || (d.children = []), Object.defineProperty(d, "loaded", {
                enumerable: !0,
                get: function() {
                    return d.l;
                }
            }), Object.defineProperty(d, "id", {
                enumerable: !0,
                get: function() {
                    return d.i;
                }
            }), d.webpackPolyfill = 1), d;
        };
    }, function(y, D) {
        var d;
        d = function() {
            return this;
        }();
        try {
            d = d || new Function("return this")();
        } catch {
            typeof window == "object" && (d = window);
        }
        y.exports = d;
    }, function(y, D, d) {
        y.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 100
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        };
    }, function(y, D, d) {
        y.exports = {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: [ "normalize", "block", "inline" ]
                },
                block: {
                    rules: [ "paragraph" ]
                },
                inline: {
                    rules: [ "text" ],
                    rules2: [ "balance_pairs", "text_collapse" ]
                }
            }
        };
    }, function(y, D, d) {
        y.exports = {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: [ "normalize", "block", "inline" ]
                },
                block: {
                    rules: [ "blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph" ]
                },
                inline: {
                    rules: [ "autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text" ],
                    rules2: [ "balance_pairs", "emphasis", "text_collapse" ]
                }
            }
        };
    }, function(y, D, d) {
        d.r(D), d.d(D, "default", function() {
            return e;
        });
        var o = d(17), t = d(2);
        function e(r) {
            var n = r === void 0 ? {} : r, i = n.Hljs, s = n.baseConfig, a = n.codeBlockClass, l = n.codeHighlightExtensionMap, u = l === void 0 ? {} : l, c = Object(o.default)(s);
            return c.extend(function(f) {
                f.set({
                    highlight: Object(t.a)({
                        codeHighlightExtensionMap: u,
                        hasLang: function(p) {
                            return i.getLanguage(p);
                        },
                        codeBlockClass: a,
                        highlight: function(p, h) {
                            return i.highlight(p, {
                                language: h
                            }).value;
                        }
                    })
                });
            }), {
                previewClass: "markdown-body",
                extend: function(f) {
                    c.extend(function() {
                        f.apply(void 0, arguments);
                    });
                },
                markdownParser: c.markdownParser
            };
        }
    }, , function(y, D, d) {
        d.r(D);
        var o = d(76);
        D.default = function(t, e) {
            e === void 0 && (e = {});
            var r = e, n = r.extend, i = r.config, s = r.codeHighlightExtensionMap, a = function(l) {
                var u = Object(o.default)({
                    Hljs: l.Hljs,
                    baseConfig: l.baseConfig,
                    codeBlockClass: l.codeBlockClass || function(c) {
                        return "v-md-hljs-" + c;
                    },
                    codeHighlightExtensionMap: l.codeHighlightExtensionMap || {}
                });
                return {
                    previewClass: "github-markdown-body",
                    extend: function(c) {
                        u.extend(c);
                    },
                    markdownParser: u.markdownParser
                };
            }({
                Hljs: r.Hljs,
                baseConfig: i,
                codeHighlightExtensionMap: s
            });
            n && a.extend(n), t.theme(a);
        };
    }, , function(y, D, d) {}, , function(y, D, d) {
        d.r(D);
        var o = d(78);
        d(80), d(83), D.default = {
            install: function(t, e) {
                t.vMdParser.use(o.default, e);
            }
        };
    }, function(y, D, d) {} ]).default), J = {
        class: "resource-preview"
    }, Y = {
        key: 0,
        style: {
            height: "calc(100VH - 8px)",
            width: "calc(100VW - 8px)"
        }
    }, Q = [ "src" ], ot = Et(ct({
        __name: "targetResource",
        props: {
            resData: {
                type: Object,
                default: () => {}
            }
        },
        setup(y) {
            G.use(W, {
                Hljs: xt
            });
            const D = y, {
                resData: d
            } = pt(D), {
                width: o,
                height: t
            } = ft(), e = ht(), r = U(""), n = U(""), i = dt(() => d.value && d.value.resType ? d.value : e.query), s = p => {
                try {
                    const h = document.getElementById("refPlayerWrap");
                    h && (h.style[p] = o + "px");
                } catch {}
            };
            tt(o, () => s("width")), tt(t, () => s("height"));
            const a = U(!0), l = U(), u = () => {
                if (document.visibilityState === "hidden") {
                    let p = a.value ? e.query.startTime : l.value;
                    f(p);
                } else document.visibilityState === "visible" && (a.value = !1, 
                l.value = nt(new Date()).valueOf());
            }, c = () => {
                a.value ? f(e.query.startTime) : f(l.value);
            }, f = p => {
                wt({
                    projectId: e.query.projectId,
                    fileId: i.value.id,
                    startTime: p,
                    endTime: nt(new Date()).valueOf(),
                    valid: !0
                });
            };
            return gt(async () => {
                try {
                    switch (i.value.resType) {
                      case "3":
                        const p = it(i.value.eid);
                        r.value = `/previewDoc/web/viewer.html?file=${encodeURIComponent(p)}#page=1`;
                        break;

                      case "7":
                        i.value.eid && (r.value = it(i.value.eid), await mt.get(r.value, {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        }).then(h => {
                            n.value = h.data;
                        }));
                        break;

                      case "1":
                        document.body.style.overflow = "hidden";
                    }
                    i.value.startTime && (document.addEventListener("visibilitychange", u), 
                    window.addEventListener("beforeunload", c));
                } catch {}
            }), bt(() => {
                document.removeEventListener("visibilitychange", u), window.removeEventListener("beforeunload", c);
            }), (p, h) => ($(), rt("div", J, [ i.value.resType === "3" ? ($(), rt("div", Y, [ _t("iframe", {
                title: "预览文档",
                src: V(r),
                width: "100%",
                height: "100%"
            }, null, 8, Q) ])) : Z("", !0), i.value.resType === "7" ? ($(), et(V(G), {
                key: 1,
                text: V(n),
                style: {
                    overflow: "auto"
                }
            }, null, 8, [ "text" ])) : Z("", !0), i.value.resType === "1" ? ($(), 
            et(Dt, {
                key: 2,
                width: V(o) + "px",
                height: V(t) + "px",
                "resource-u-r-l": V(r),
                "data-id": i.value.eid,
                style: {
                    overflow: "hidden"
                }
            }, null, 8, [ "width", "height", "resource-u-r-l", "data-id" ])) : Z("", !0) ]));
        }
    }), [ [ "__scopeId", "data-v-17d366b7" ] ]);
});

export {
    St as __tla,
    ot as default
};