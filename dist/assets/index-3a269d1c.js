var na = Object.defineProperty;

var ra = (M, O, N) => O in M ? na(M, O, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: N
}) : M[O] = N;

var H = (M, O, N) => (ra(M, typeof O != "symbol" ? O + "" : O, N), N), Gn = (M, O, N) => {
    if (!O.has(M)) throw TypeError("Cannot " + N);
};

var u = (M, O, N) => (Gn(M, O, "read from private field"), N ? N.call(M) : O.get(M)), T = (M, O, N) => {
    if (O.has(M)) throw TypeError("Cannot add the same private member more than once");
    O instanceof WeakSet ? O.add(M) : O.set(M, N);
}, E = (M, O, N, qt) => (Gn(M, O, "write to private field"), qt ? qt.call(M, N) : O.set(M, N), 
N);

var on = (M, O, N, qt) => ({
    set _(ge) {
        E(M, O, ge, N);
    },
    get _() {
        return u(M, O, qt);
    }
}), A = (M, O, N) => (Gn(M, O, "access private method"), N);

import {
    cL as C,
    a3 as Ei,
    d as Fi,
    aV as ia,
    k as re,
    b0 as ct,
    F as oa,
    cM as St,
    b9 as Rt,
    e as Zt,
    cN as Si,
    cO as zi,
    cP as sa,
    cQ as aa,
    f as mt,
    cR as la,
    cS as ca,
    w as et,
    aH as Ti,
    cT as Ii,
    n as sn,
    r as an,
    cU as Xn,
    bv as ln,
    cJ as ua,
    U as Li,
    __tla as ha
} from "./index-6c08ea4c.js";

let Te, Jn, Ie, Bi, Qn, Le, Kn, Oi, L, $i, Mi, Ri, qi, Pi, Ni, ji, Hi, Ui, Wi, Zi, Yn, st, tr, cn, un, Vi, Gi, Xi, er, Ji, da = Promise.all([ (() => {
    try {
        return ha;
    } catch {}
})() ]).then(async () => {
    var wi, he, yt, ht, kt, vt, de, G, Ct, V, q, S, it, dt, nt, Q, At, K, wt, Et, pt, Ft, Wt, ot, we, nr, Yt, Mt, Ee, ft, nn, Qi, te, pe, Fe, Lt, Vt, Bt, Gt, Se, rr, ta, fe, hn, me, dn, $, P, ze, ir, ee, Be;
    var M = Object.defineProperty, O = (t, e, n) => (((r, i, o) => {
        i in r ? M(r, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : r[i] = o;
    })(t, typeof e != "symbol" ? e + "" : e, n), n);
    let N, qt, ge, pn, fn, mn, be, Oe, or, sr;
    L = new class {
        constructor() {
            O(this, "pools", {});
        }
        remove(t, e, n) {
            const r = this.pools[t] && this.pools[t][e];
            r && (this.pools[t][e] = r.filter(i => i !== n));
        }
        clear(t) {
            this.pools[t] = {};
        }
        on(t, e) {
            return this.pools[t] || (this.pools[t] = {}), this.pools[t][e.name] || (this.pools[t][e.name] = []), 
            this.pools[t][e.name].push(e.callback), this.pools[t][e.name].includes(e.callback);
        }
        emit(t, e, ...n) {
            this.pools[t] || (this.pools[t] = {});
            const r = this.pools[t][e];
            r && r.forEach(i => {
                try {
                    i(...n);
                } catch {}
            });
        }
    }(), un = "onSave", cn = "changeCatalogVisible", tr = "changeFullscreen", N = "pageFullscreenChanged", 
    qt = "fullscreenChanged", ge = "previewChanged", pn = "previewOnlyChanged", 
    fn = "htmlPreviewChanged", mn = "catalogVisibleChanged", be = "buildFinished", 
    Jn = "errorCatcher", Le = "replace", Kn = "uploadImage", Bi = "openModals", 
    Gi = "ctrlZ", Vi = "ctrlShiftZ", Te = "catalogChanged", Qn = "pushCatalog", 
    Oe = "rerender", er = "eventListener", Ui = (t, e) => {
        const n = r => {
            const i = t.parentElement || document.body, o = i.offsetWidth, a = i.offsetHeight, {
                clientWidth: l,
                clientHeight: s
            } = document.documentElement, c = r.offsetX, d = r.offsetY, p = h => {
                let g = h.x + document.body.scrollLeft - document.body.clientLeft - c, x = h.y + document.body.scrollTop - document.body.clientTop - d;
                g = g < 1 ? 1 : g < l - o - 1 ? g : l - o - 1, x = x < 1 ? 1 : x < s - a - 1 ? x : s - a - 1, 
                e ? e(g, x) : (i.style.left = `${g}px`, i.style.top = `${x}px`);
            };
            document.addEventListener("mousemove", p);
            const f = () => {
                document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", f);
            };
            document.addEventListener("mouseup", f);
        };
        return t.addEventListener("mousedown", n), () => {
            t.removeEventListener("mousedown", n);
        };
    }, st = (t, e, n = "") => {
        var r;
        const i = document.getElementById(e.id);
        if (i) n !== "" && (Reflect.get(window, n) ? (r = e.onload) == null || r.call(i, new Event("load")) : e.onload && i.addEventListener("load", e.onload)); else {
            const o = {
                ...e
            };
            o.onload = null;
            const a = or(t, o);
            e.onload && a.addEventListener("load", e.onload), document.head.appendChild(a);
        }
    }, or = (t, e) => {
        const n = document.createElement(t);
        return Object.keys(e).forEach(r => {
            e[r] !== void 0 && (n[r] = e[r]);
        }), n;
    }, Ji = (t, e = "image.png") => {
        const n = t.split(","), r = n[0].match(/:(.*?);/);
        if (r) {
            const i = r[1], o = atob(n[1]);
            let a = o.length;
            const l = new Uint8Array(a);
            for (;a--; ) l[a] = o.charCodeAt(a);
            return new File([ l ], e, {
                type: i
            });
        }
        return null;
    }, Oi = (t, e) => {
        if (!t || !e) return 0;
        const n = t == null ? void 0 : t.getBoundingClientRect();
        if (e === document.documentElement) return n.top - e.clientTop;
        const r = e == null ? void 0 : e.getBoundingClientRect();
        return n.top - r.top;
    }, sr = (() => {
        let t = 0;
        return e => e + ++t;
    })(), Pi = (() => {
        let t = 0;
        return () => ++t;
    })();
    var Xt = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
    }, $e = function(t) {
        return t.tagName === "IMG";
    }, Me = function(t) {
        return t && t.nodeType === 1;
    }, ar = function(t) {
        return (t.currentSrc || t.src).substr(-4).toLowerCase() === ".svg";
    }, lr = function(t) {
        try {
            return Array.isArray(t) ? t.filter($e) : function(e) {
                return NodeList.prototype.isPrototypeOf(e);
            }(t) ? [].slice.call(t).filter($e) : Me(t) ? [ t ].filter($e) : typeof t == "string" ? [].slice.call(document.querySelectorAll(t)).filter($e) : [];
        } catch {
            throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
        }
    }, ie = function(t, e) {
        var n = Xt({
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, e);
        if (typeof window.CustomEvent == "function") return new CustomEvent(t, n);
        var r = document.createEvent("CustomEvent");
        return r.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), r;
    };
    (function(t, e) {
        e === void 0 && (e = {});
        var n = e.insertAt;
        if (t && typeof document < "u") {
            var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
            i.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), 
            i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
        }
    })(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");
    const Ki = function t(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = window.Promise || function(_) {
            function m() {}
            _(m, m);
        }, i = function() {
            for (var _ = arguments.length, m = Array(_), b = 0; b < _; b++) m[b] = arguments[b];
            var y = m.reduce(function(D, k) {
                return [].concat(D, lr(k));
            }, []);
            return y.filter(function(D) {
                return s.indexOf(D) === -1;
            }).forEach(function(D) {
                s.push(D), D.classList.add("medium-zoom-image");
            }), c.forEach(function(D) {
                var k = D.type, w = D.listener, F = D.options;
                y.forEach(function(v) {
                    v.addEventListener(k, w, F);
                });
            }), x;
        }, o = function() {
            var _ = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).target, m = function() {
                var b = {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }, y = void 0, D = void 0;
                if (f.container) if (f.container instanceof Object) y = (b = Xt({}, b, f.container)).width - b.left - b.right - 2 * f.margin, 
                D = b.height - b.top - b.bottom - 2 * f.margin; else {
                    var k = (Me(f.container) ? f.container : document.querySelector(f.container)).getBoundingClientRect(), w = k.width, F = k.height, v = k.left, z = k.top;
                    b = Xt({}, b, {
                        width: w,
                        height: F,
                        left: v,
                        top: z
                    });
                }
                y = y || b.width - 2 * f.margin, D = D || b.height - 2 * f.margin;
                var I = h.zoomedHd || h.original, U = ar(I) ? y : I.naturalWidth || y, _t = ar(I) ? D : I.naturalHeight || D, B = I.getBoundingClientRect(), rt = B.top, Z = B.left, xt = B.width, lt = B.height, W = Math.min(Math.max(xt, U), y) / xt, Y = Math.min(Math.max(lt, _t), D) / lt, tt = Math.min(W, Y), Ot = "scale(" + tt + ") translate3d(" + ((y - xt) / 2 - Z + f.margin + b.left) / tt + "px, " + ((D - lt) / 2 - rt + f.margin + b.top) / tt + "px, 0)";
                h.zoomed.style.transform = Ot, h.zoomedHd && (h.zoomedHd.style.transform = Ot);
            };
            return new r(function(b) {
                if (_ && s.indexOf(_) === -1) b(x); else if (h.zoomed) b(x); else {
                    if (_) h.original = _; else {
                        if (!(s.length > 0)) return void b(x);
                        var y = s;
                        h.original = y[0];
                    }
                    if (h.original.dispatchEvent(ie("medium-zoom:open", {
                        detail: {
                            zoom: x
                        }
                    })), p = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, 
                    d = !0, h.zoomed = function(F) {
                        var v = F.getBoundingClientRect(), z = v.top, I = v.left, U = v.width, _t = v.height, B = F.cloneNode(), rt = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, Z = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                        return B.removeAttribute("id"), B.style.position = "absolute", 
                        B.style.top = z + rt + "px", B.style.left = I + Z + "px", 
                        B.style.width = U + "px", B.style.height = _t + "px", B.style.transform = "", 
                        B;
                    }(h.original), document.body.appendChild(g), f.template) {
                        var D = Me(f.template) ? f.template : document.querySelector(f.template);
                        h.template = document.createElement("div"), h.template.appendChild(D.content.cloneNode(!0)), 
                        document.body.appendChild(h.template);
                    }
                    if (h.original.parentElement && h.original.parentElement.tagName === "PICTURE" && h.original.currentSrc && (h.zoomed.src = h.original.currentSrc), 
                    document.body.appendChild(h.zoomed), window.requestAnimationFrame(function() {
                        document.body.classList.add("medium-zoom--opened");
                    }), h.original.classList.add("medium-zoom-image--hidden"), h.zoomed.classList.add("medium-zoom-image--opened"), 
                    h.zoomed.addEventListener("click", a), h.zoomed.addEventListener("transitionend", function F() {
                        d = !1, h.zoomed.removeEventListener("transitionend", F), 
                        h.original.dispatchEvent(ie("medium-zoom:opened", {
                            detail: {
                                zoom: x
                            }
                        })), b(x);
                    }), h.original.getAttribute("data-zoom-src")) {
                        h.zoomedHd = h.zoomed.cloneNode(), h.zoomedHd.removeAttribute("srcset"), 
                        h.zoomedHd.removeAttribute("sizes"), h.zoomedHd.removeAttribute("loading"), 
                        h.zoomedHd.src = h.zoomed.getAttribute("data-zoom-src"), 
                        h.zoomedHd.onerror = function() {
                            clearInterval(k), h.zoomedHd = null, m();
                        };
                        var k = setInterval(function() {
                            h.zoomedHd.complete && (clearInterval(k), h.zoomedHd.classList.add("medium-zoom-image--opened"), 
                            h.zoomedHd.addEventListener("click", a), document.body.appendChild(h.zoomedHd), 
                            m());
                        }, 10);
                    } else if (h.original.hasAttribute("srcset")) {
                        h.zoomedHd = h.zoomed.cloneNode(), h.zoomedHd.removeAttribute("sizes"), 
                        h.zoomedHd.removeAttribute("loading");
                        var w = h.zoomedHd.addEventListener("load", function() {
                            h.zoomedHd.removeEventListener("load", w), h.zoomedHd.classList.add("medium-zoom-image--opened"), 
                            h.zoomedHd.addEventListener("click", a), document.body.appendChild(h.zoomedHd), 
                            m();
                        });
                    } else m();
                }
            });
        }, a = function() {
            return new r(function(_) {
                !d && h.original ? (d = !0, document.body.classList.remove("medium-zoom--opened"), 
                h.zoomed.style.transform = "", h.zoomedHd && (h.zoomedHd.style.transform = ""), 
                h.template && (h.template.style.transition = "opacity 150ms", h.template.style.opacity = 0), 
                h.original.dispatchEvent(ie("medium-zoom:close", {
                    detail: {
                        zoom: x
                    }
                })), h.zoomed.addEventListener("transitionend", function m() {
                    h.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(h.zoomed), 
                    h.zoomedHd && document.body.removeChild(h.zoomedHd), document.body.removeChild(g), 
                    h.zoomed.classList.remove("medium-zoom-image--opened"), h.template && document.body.removeChild(h.template), 
                    d = !1, h.zoomed.removeEventListener("transitionend", m), h.original.dispatchEvent(ie("medium-zoom:closed", {
                        detail: {
                            zoom: x
                        }
                    })), h.original = null, h.zoomed = null, h.zoomedHd = null, 
                    h.template = null, _(x);
                })) : _(x);
            });
        }, l = function() {
            var _ = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).target;
            return h.original ? a() : o({
                target: _
            });
        }, s = [], c = [], d = !1, p = 0, f = n, h = {
            original: null,
            zoomed: null,
            zoomedHd: null,
            template: null
        };
        Object.prototype.toString.call(e) === "[object Object]" ? f = e : (e || typeof e == "string") && i(e);
        var g = function(_) {
            var m = document.createElement("div");
            return m.classList.add("medium-zoom-overlay"), m.style.background = _, 
            m;
        }((f = Xt({
            margin: 0,
            background: "#fff",
            scrollOffset: 40,
            container: null,
            template: null
        }, f)).background);
        document.addEventListener("click", function(_) {
            var m = _.target;
            m !== g ? s.indexOf(m) !== -1 && l({
                target: m
            }) : a();
        }), document.addEventListener("keyup", function(_) {
            var m = _.key || _.keyCode;
            m !== "Escape" && m !== "Esc" && m !== 27 || a();
        }), document.addEventListener("scroll", function() {
            if (!d && h.original) {
                var _ = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                Math.abs(p - _) > f.scrollOffset && setTimeout(a, 150);
            }
        }), window.addEventListener("resize", a);
        var x = {
            open: o,
            close: a,
            toggle: l,
            update: function() {
                var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = _;
                if (_.background && (g.style.background = _.background), _.container && _.container instanceof Object && (m.container = Xt({}, f.container, _.container)), 
                _.template) {
                    var b = Me(_.template) ? _.template : document.querySelector(_.template);
                    m.template = b;
                }
                return f = Xt({}, f, m), s.forEach(function(y) {
                    y.dispatchEvent(ie("medium-zoom:update", {
                        detail: {
                            zoom: x
                        }
                    }));
                }), x;
            },
            clone: function() {
                return t(Xt({}, f, arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}));
            },
            attach: i,
            detach: function() {
                for (var _ = arguments.length, m = Array(_), b = 0; b < _; b++) m[b] = arguments[b];
                h.zoomed && a();
                var y = m.length > 0 ? m.reduce(function(D, k) {
                    return [].concat(D, lr(k));
                }, []) : s;
                return y.forEach(function(D) {
                    D.classList.remove("medium-zoom-image"), D.dispatchEvent(ie("medium-zoom:detach", {
                        detail: {
                            zoom: x
                        }
                    }));
                }), s = s.filter(function(D) {
                    return y.indexOf(D) === -1;
                }), x;
            },
            on: function(_, m) {
                var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return s.forEach(function(y) {
                    y.addEventListener("medium-zoom:" + _, m, b);
                }), c.push({
                    type: "medium-zoom:" + _,
                    listener: m,
                    options: b
                }), x;
            },
            off: function(_, m) {
                var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return s.forEach(function(y) {
                    y.removeEventListener("medium-zoom:" + _, m, b);
                }), c = c.filter(function(y) {
                    return !(y.type === "medium-zoom:" + _ && y.listener.toString() === m.toString());
                }), x;
            },
            getOptions: function() {
                return f;
            },
            getImages: function() {
                return s;
            },
            getZoomedImage: function() {
                return h.original;
            }
        };
        return x;
    };
    var Yi = function() {
        var t = document.getSelection();
        if (!t.rangeCount) return function() {};
        for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++) n.push(t.getRangeAt(r));
        switch (e.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            e.blur();
            break;

          default:
            e = null;
        }
        return t.removeAllRanges(), function() {
            t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(i) {
                t.addRange(i);
            }), e && e.focus();
        };
    }, cr = {
        "text/plain": "Text",
        "text/html": "Url",
        default: "Text"
    }, to = function(t, e) {
        var n, r, i, o, a, l = !1;
        e || (e = {}), e.debug;
        try {
            if (r = Yi(), i = document.createRange(), o = document.getSelection(), 
            (a = document.createElement("span")).textContent = t, a.ariaHidden = "true", 
            a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, 
            a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", 
            a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", 
            a.addEventListener("copy", function(s) {
                if (s.stopPropagation(), e.format) if (s.preventDefault(), s.clipboardData === void 0) {
                    window.clipboardData.clearData();
                    var c = cr[e.format] || cr.default;
                    window.clipboardData.setData(c, t);
                } else s.clipboardData.clearData(), s.clipboardData.setData(e.format, t);
                e.onCopy && (s.preventDefault(), e.onCopy(s.clipboardData));
            }), document.body.appendChild(a), i.selectNodeContents(a), o.addRange(i), 
            !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            l = !0;
        } catch {
            try {
                window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), 
                l = !0;
            } catch {
                n = function(d) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return d.replace(/#{\s*key\s*}/g, p);
                }("message" in e ? e.message : "Copy to clipboard: #{key}, Enter"), 
                window.prompt(n, t);
            }
        } finally {
            o && (typeof o.removeRange == "function" ? o.removeRange(i) : o.removeAllRanges()), 
            a && document.body.removeChild(a), r();
        }
        return l;
    };
    const eo = Ei(to), ur = {};
    function oe(t, e) {
        typeof e != "string" && (e = oe.defaultChars);
        const n = function(r) {
            let i = ur[r];
            if (i) return i;
            i = ur[r] = [];
            for (let o = 0; o < 128; o++) {
                const a = String.fromCharCode(o);
                i.push(a);
            }
            for (let o = 0; o < r.length; o++) {
                const a = r.charCodeAt(o);
                i[a] = "%" + ("0" + a.toString(16).toUpperCase()).slice(-2);
            }
            return i;
        }(e);
        return t.replace(/(%[a-f0-9]{2})+/gi, function(r) {
            let i = "";
            for (let o = 0, a = r.length; o < a; o += 3) {
                const l = parseInt(r.slice(o + 1, o + 3), 16);
                if (l < 128) i += n[l]; else {
                    if ((224 & l) == 192 && o + 3 < a) {
                        const s = parseInt(r.slice(o + 4, o + 6), 16);
                        if ((192 & s) == 128) {
                            const c = l << 6 & 1984 | 63 & s;
                            i += c < 128 ? "��" : String.fromCharCode(c), o += 3;
                            continue;
                        }
                    }
                    if ((240 & l) == 224 && o + 6 < a) {
                        const s = parseInt(r.slice(o + 4, o + 6), 16), c = parseInt(r.slice(o + 7, o + 9), 16);
                        if ((192 & s) == 128 && (192 & c) == 128) {
                            const d = l << 12 & 61440 | s << 6 & 4032 | 63 & c;
                            i += d < 2048 || d >= 55296 && d <= 57343 ? "���" : String.fromCharCode(d), 
                            o += 6;
                            continue;
                        }
                    }
                    if ((248 & l) == 240 && o + 9 < a) {
                        const s = parseInt(r.slice(o + 4, o + 6), 16), c = parseInt(r.slice(o + 7, o + 9), 16), d = parseInt(r.slice(o + 10, o + 12), 16);
                        if ((192 & s) == 128 && (192 & c) == 128 && (192 & d) == 128) {
                            let p = l << 18 & 1835008 | s << 12 & 258048 | c << 6 & 4032 | 63 & d;
                            p < 65536 || p > 1114111 ? i += "����" : (p -= 65536, 
                            i += String.fromCharCode(55296 + (p >> 10), 56320 + (1023 & p))), 
                            o += 9;
                            continue;
                        }
                    }
                    i += "�";
                }
            }
            return i;
        });
    }
    oe.defaultChars = ";/?:@&=+$,#", oe.componentChars = "";
    const hr = {};
    function _e(t, e, n) {
        typeof e != "string" && (n = e, e = _e.defaultChars), n === void 0 && (n = !0);
        const r = function(o) {
            let a = hr[o];
            if (a) return a;
            a = hr[o] = [];
            for (let l = 0; l < 128; l++) {
                const s = String.fromCharCode(l);
                /^[0-9a-z]$/i.test(s) ? a.push(s) : a.push("%" + ("0" + l.toString(16).toUpperCase()).slice(-2));
            }
            for (let l = 0; l < o.length; l++) a[o.charCodeAt(l)] = o[l];
            return a;
        }(e);
        let i = "";
        for (let o = 0, a = t.length; o < a; o++) {
            const l = t.charCodeAt(o);
            if (n && l === 37 && o + 2 < a && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3))) i += t.slice(o, o + 3), 
            o += 2; else if (l < 128) i += r[l]; else if (l >= 55296 && l <= 57343) {
                if (l >= 55296 && l <= 56319 && o + 1 < a) {
                    const s = t.charCodeAt(o + 1);
                    if (s >= 56320 && s <= 57343) {
                        i += encodeURIComponent(t[o] + t[o + 1]), o++;
                        continue;
                    }
                }
                i += "%EF%BF%BD";
            } else i += encodeURIComponent(t[o]);
        }
        return i;
    }
    function gn(t) {
        let e = "";
        return e += t.protocol || "", e += t.slashes ? "//" : "", e += t.auth ? t.auth + "@" : "", 
        t.hostname && t.hostname.indexOf(":") !== -1 ? e += "[" + t.hostname + "]" : e += t.hostname || "", 
        e += t.port ? ":" + t.port : "", e += t.pathname || "", e += t.search || "", 
        e += t.hash || "", e;
    }
    function Re() {
        this.protocol = null, this.slashes = null, this.auth = null, this.port = null, 
        this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
    }
    _e.defaultChars = ";/?:@&=+$,-_.!~*'()#", _e.componentChars = "-_.!~*'()";
    const no = /^([a-z0-9.+-]+:)/i, ro = /:[0-9]*$/, io = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, oo = [ "{", "}", "|", "\\", "^", "`" ].concat([ "<", ">", '"', "`", " ", "\r", `
`, "\t" ]), so = [ "'" ].concat(oo), dr = [ "%", "/", "?", ";", "#" ].concat(so), pr = [ "/", "?", "#" ], fr = /^[+a-z0-9A-Z_-]{0,63}$/, ao = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, mr = {
        javascript: !0,
        "javascript:": !0
    }, gr = {
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
    function bn(t, e) {
        if (t && t instanceof Re) return t;
        const n = new Re();
        return n.parse(t, e), n;
    }
    Re.prototype.parse = function(t, e) {
        let n, r, i, o = t;
        if (o = o.trim(), !e && t.split("#").length === 1) {
            const c = io.exec(o);
            if (c) return this.pathname = c[1], c[2] && (this.search = c[2]), this;
        }
        let a = no.exec(o);
        if (a && (a = a[0], n = a.toLowerCase(), this.protocol = a, o = o.substr(a.length)), 
        (e || a || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = o.substr(0, 2) === "//", 
        !i || a && mr[a] || (o = o.substr(2), this.slashes = !0)), !mr[a] && (i || a && !gr[a])) {
            let c, d, p = -1;
            for (let g = 0; g < pr.length; g++) r = o.indexOf(pr[g]), r !== -1 && (p === -1 || r < p) && (p = r);
            d = p === -1 ? o.lastIndexOf("@") : o.lastIndexOf("@", p), d !== -1 && (c = o.slice(0, d), 
            o = o.slice(d + 1), this.auth = c), p = -1;
            for (let g = 0; g < dr.length; g++) r = o.indexOf(dr[g]), r !== -1 && (p === -1 || r < p) && (p = r);
            p === -1 && (p = o.length), o[p - 1] === ":" && p--;
            const f = o.slice(0, p);
            o = o.slice(p), this.parseHost(f), this.hostname = this.hostname || "";
            const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
            if (!h) {
                const g = this.hostname.split(/\./);
                for (let x = 0, _ = g.length; x < _; x++) {
                    const m = g[x];
                    if (m && !m.match(fr)) {
                        let b = "";
                        for (let y = 0, D = m.length; y < D; y++) m.charCodeAt(y) > 127 ? b += "x" : b += m[y];
                        if (!b.match(fr)) {
                            const y = g.slice(0, x), D = g.slice(x + 1), k = m.match(ao);
                            k && (y.push(k[1]), D.unshift(k[2])), D.length && (o = D.join(".") + o), 
                            this.hostname = y.join(".");
                            break;
                        }
                    }
                }
            }
            this.hostname.length > 255 && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
        }
        const l = o.indexOf("#");
        l !== -1 && (this.hash = o.substr(l), o = o.slice(0, l));
        const s = o.indexOf("?");
        return s !== -1 && (this.search = o.substr(s), o = o.slice(0, s)), o && (this.pathname = o), 
        gr[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
    }, Re.prototype.parseHost = function(t) {
        let e = ro.exec(t);
        e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), 
        t && (this.hostname = t);
    };
    const lo = Object.defineProperty({
        __proto__: null,
        decode: oe,
        encode: _e,
        format: gn,
        parse: bn
    }, Symbol.toStringTag, {
        value: "Module"
    }), br = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, _r = /[\0-\x1F\x7F-\x9F]/, _n = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, xr = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Dr = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, co = Object.defineProperty({
        __proto__: null,
        Any: br,
        Cc: _r,
        Cf: /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
        P: _n,
        S: xr,
        Z: Dr
    }, Symbol.toStringTag, {
        value: "Module"
    }), uo = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(t => t.charCodeAt(0))), ho = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(t => t.charCodeAt(0)));
    var xn;
    const po = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), fo = (xn = String.fromCodePoint) !== null && xn !== void 0 ? xn : function(t) {
        let e = "";
        return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), 
        t = 56320 | 1023 & t), e += String.fromCharCode(t), e;
    };
    var X;
    (function(t) {
        t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", 
        t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", 
        t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", 
        t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z";
    })(X || (X = {}));
    var Pt, J, Nt;
    function Dn(t) {
        return t >= X.ZERO && t <= X.NINE;
    }
    function mo(t) {
        return t >= X.UPPER_A && t <= X.UPPER_F || t >= X.LOWER_A && t <= X.LOWER_F;
    }
    function go(t) {
        return t === X.EQUALS || function(e) {
            return e >= X.UPPER_A && e <= X.UPPER_Z || e >= X.LOWER_A && e <= X.LOWER_Z || Dn(e);
        }(t);
    }
    (function(t) {
        t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", 
        t[t.JUMP_TABLE = 127] = "JUMP_TABLE";
    })(Pt || (Pt = {})), function(t) {
        t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", 
        t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", 
        t[t.NamedEntity = 4] = "NamedEntity";
    }(J || (J = {})), function(t) {
        t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute";
    }(Nt || (Nt = {}));
    class bo {
        constructor(e, n, r) {
            this.decodeTree = e, this.emitCodePoint = n, this.errors = r, this.state = J.EntityStart, 
            this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, 
            this.decodeMode = Nt.Strict;
        }
        startEntity(e) {
            this.decodeMode = e, this.state = J.EntityStart, this.result = 0, this.treeIndex = 0, 
            this.excess = 1, this.consumed = 1;
        }
        write(e, n) {
            switch (this.state) {
              case J.EntityStart:
                return e.charCodeAt(n) === X.NUM ? (this.state = J.NumericStart, 
                this.consumed += 1, this.stateNumericStart(e, n + 1)) : (this.state = J.NamedEntity, 
                this.stateNamedEntity(e, n));

              case J.NumericStart:
                return this.stateNumericStart(e, n);

              case J.NumericDecimal:
                return this.stateNumericDecimal(e, n);

              case J.NumericHex:
                return this.stateNumericHex(e, n);

              case J.NamedEntity:
                return this.stateNamedEntity(e, n);
            }
        }
        stateNumericStart(e, n) {
            return n >= e.length ? -1 : (32 | e.charCodeAt(n)) === X.LOWER_X ? (this.state = J.NumericHex, 
            this.consumed += 1, this.stateNumericHex(e, n + 1)) : (this.state = J.NumericDecimal, 
            this.stateNumericDecimal(e, n));
        }
        addToNumericResult(e, n, r, i) {
            if (n !== r) {
                const o = r - n;
                this.result = this.result * Math.pow(i, o) + parseInt(e.substr(n, o), i), 
                this.consumed += o;
            }
        }
        stateNumericHex(e, n) {
            const r = n;
            for (;n < e.length; ) {
                const i = e.charCodeAt(n);
                if (!Dn(i) && !mo(i)) return this.addToNumericResult(e, r, n, 16), 
                this.emitNumericEntity(i, 3);
                n += 1;
            }
            return this.addToNumericResult(e, r, n, 16), -1;
        }
        stateNumericDecimal(e, n) {
            const r = n;
            for (;n < e.length; ) {
                const i = e.charCodeAt(n);
                if (!Dn(i)) return this.addToNumericResult(e, r, n, 10), this.emitNumericEntity(i, 2);
                n += 1;
            }
            return this.addToNumericResult(e, r, n, 10), -1;
        }
        emitNumericEntity(e, n) {
            var r;
            if (this.consumed <= n) return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;
            if (e === X.SEMI) this.consumed += 1; else if (this.decodeMode === Nt.Strict) return 0;
            return this.emitCodePoint(function(i) {
                var o;
                return i >= 55296 && i <= 57343 || i > 1114111 ? 65533 : (o = po.get(i)) !== null && o !== void 0 ? o : i;
            }(this.result), this.consumed), this.errors && (e !== X.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
            this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(e, n) {
            const {
                decodeTree: r
            } = this;
            let i = r[this.treeIndex], o = (i & Pt.VALUE_LENGTH) >> 14;
            for (;n < e.length; n++, this.excess++) {
                const a = e.charCodeAt(n);
                if (this.treeIndex = _o(r, i, this.treeIndex + Math.max(1, o), a), 
                this.treeIndex < 0) return this.result === 0 || this.decodeMode === Nt.Attribute && (o === 0 || go(a)) ? 0 : this.emitNotTerminatedNamedEntity();
                if (i = r[this.treeIndex], o = (i & Pt.VALUE_LENGTH) >> 14, o !== 0) {
                    if (a === X.SEMI) return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
                    this.decodeMode !== Nt.Strict && (this.result = this.treeIndex, 
                    this.consumed += this.excess, this.excess = 0);
                }
            }
            return -1;
        }
        emitNotTerminatedNamedEntity() {
            var e;
            const {
                result: n,
                decodeTree: r
            } = this, i = (r[n] & Pt.VALUE_LENGTH) >> 14;
            return this.emitNamedEntityData(n, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), 
            this.consumed;
        }
        emitNamedEntityData(e, n, r) {
            const {
                decodeTree: i
            } = this;
            return this.emitCodePoint(n === 1 ? i[e] & ~Pt.VALUE_LENGTH : i[e + 1], r), 
            n === 3 && this.emitCodePoint(i[e + 2], r), r;
        }
        end() {
            var e;
            switch (this.state) {
              case J.NamedEntity:
                return this.result === 0 || this.decodeMode === Nt.Attribute && this.result !== this.treeIndex ? 0 : this.emitNotTerminatedNamedEntity();

              case J.NumericDecimal:
                return this.emitNumericEntity(0, 2);

              case J.NumericHex:
                return this.emitNumericEntity(0, 3);

              case J.NumericStart:
                return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 
                0;

              case J.EntityStart:
                return 0;
            }
        }
    }
    function yr(t) {
        let e = "";
        const n = new bo(t, r => e += fo(r));
        return function(r, i) {
            let o = 0, a = 0;
            for (;(a = r.indexOf("&", a)) >= 0; ) {
                e += r.slice(o, a), n.startEntity(i);
                const s = n.write(r, a + 1);
                if (s < 0) {
                    o = a + n.end();
                    break;
                }
                o = a + s, a = s === 0 ? o + 1 : o;
            }
            const l = e + r.slice(o);
            return e = "", l;
        };
    }
    function _o(t, e, n, r) {
        const i = (e & Pt.BRANCH_LENGTH) >> 7, o = e & Pt.JUMP_TABLE;
        if (i === 0) return o !== 0 && r === o ? n : -1;
        if (o) {
            const s = r - o;
            return s < 0 || s >= i ? -1 : t[n + s] - 1;
        }
        let a = n, l = a + i - 1;
        for (;a <= l; ) {
            const s = a + l >>> 1, c = t[s];
            if (c < r) a = s + 1; else {
                if (!(c > r)) return t[s + i];
                l = s - 1;
            }
        }
        return -1;
    }
    const xo = yr(uo);
    function kr(t, e = Nt.Legacy) {
        return xo(t, e);
    }
    function yn(t) {
        return function(e) {
            return Object.prototype.toString.call(e);
        }(t) === "[object String]";
    }
    yr(ho);
    const Do = Object.prototype.hasOwnProperty;
    function qe(t) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
            if (e) {
                if (typeof e != "object") throw new TypeError(e + "must be object");
                Object.keys(e).forEach(function(n) {
                    t[n] = e[n];
                });
            }
        }), t;
    }
    function vr(t, e, n) {
        return [].concat(t.slice(0, e), n, t.slice(e + 1));
    }
    function kn(t) {
        return !(t >= 55296 && t <= 57343) && !(t >= 64976 && t <= 65007) && !!(65535 & ~t && (65535 & t) != 65534) && !(t >= 0 && t <= 8) && t !== 11 && !(t >= 14 && t <= 31) && !(t >= 127 && t <= 159) && !(t > 1114111);
    }
    function Pe(t) {
        if (t > 65535) {
            const e = 55296 + ((t -= 65536) >> 10), n = 56320 + (1023 & t);
            return String.fromCharCode(e, n);
        }
        return String.fromCharCode(t);
    }
    const Cr = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, yo = new RegExp(Cr.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"), ko = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
    function se(t) {
        return t.indexOf("\\") < 0 && t.indexOf("&") < 0 ? t : t.replace(yo, function(e, n, r) {
            return n || function(i, o) {
                if (o.charCodeAt(0) === 35 && ko.test(o)) {
                    const l = o[1].toLowerCase() === "x" ? parseInt(o.slice(2), 16) : parseInt(o.slice(1), 10);
                    return kn(l) ? Pe(l) : i;
                }
                const a = kr(i);
                return a !== i ? a : i;
            }(e, r);
        });
    }
    const vo = /[&<>"]/, Co = /[&<>"]/g, Ao = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    };
    function wo(t) {
        return Ao[t];
    }
    function Jt(t) {
        return vo.test(t) ? t.replace(Co, wo) : t;
    }
    const Eo = /[.?*+^$[\]\\(){}|-]/g;
    function R(t) {
        switch (t) {
          case 9:
          case 32:
            return !0;
        }
        return !1;
    }
    function xe(t) {
        if (t >= 8192 && t <= 8202) return !0;
        switch (t) {
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
    }
    function De(t) {
        return _n.test(t) || xr.test(t);
    }
    function ye(t) {
        switch (t) {
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
    }
    function Ne(t) {
        return t = t.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (t = t.replace(/ẞ/g, "ß")), 
        t.toLowerCase().toUpperCase();
    }
    const Fo = {
        mdurl: lo,
        ucmicro: co
    }, So = Object.defineProperty({
        __proto__: null,
        arrayReplaceAt: vr,
        assign: qe,
        escapeHtml: Jt,
        escapeRE: function(t) {
            return t.replace(Eo, "\\$&");
        },
        fromCodePoint: Pe,
        has: function(t, e) {
            return Do.call(t, e);
        },
        isMdAsciiPunct: ye,
        isPunctChar: De,
        isSpace: R,
        isString: yn,
        isValidEntityCode: kn,
        isWhiteSpace: xe,
        lib: Fo,
        normalizeReference: Ne,
        unescapeAll: se,
        unescapeMd: function(t) {
            return t.indexOf("\\") < 0 ? t : t.replace(Cr, "$1");
        }
    }, Symbol.toStringTag, {
        value: "Module"
    }), zo = Object.defineProperty({
        __proto__: null,
        parseLinkDestination: function(t, e, n) {
            let r, i = e;
            const o = {
                ok: !1,
                pos: 0,
                str: ""
            };
            if (t.charCodeAt(i) === 60) {
                for (i++; i < n; ) {
                    if (r = t.charCodeAt(i), r === 10 || r === 60) return o;
                    if (r === 62) return o.pos = i + 1, o.str = se(t.slice(e + 1, i)), 
                    o.ok = !0, o;
                    r === 92 && i + 1 < n ? i += 2 : i++;
                }
                return o;
            }
            let a = 0;
            for (;i < n && (r = t.charCodeAt(i), r !== 32) && !(r < 32 || r === 127); ) if (r === 92 && i + 1 < n) {
                if (t.charCodeAt(i + 1) === 32) break;
                i += 2;
            } else {
                if (r === 40 && (a++, a > 32)) return o;
                if (r === 41) {
                    if (a === 0) break;
                    a--;
                }
                i++;
            }
            return e === i || a !== 0 || (o.str = se(t.slice(e, i)), o.pos = i, 
            o.ok = !0), o;
        },
        parseLinkLabel: function(t, e, n) {
            let r, i, o, a;
            const l = t.posMax, s = t.pos;
            for (t.pos = e + 1, r = 1; t.pos < l; ) {
                if (o = t.src.charCodeAt(t.pos), o === 93 && (r--, r === 0)) {
                    i = !0;
                    break;
                }
                if (a = t.pos, t.md.inline.skipToken(t), o === 91) {
                    if (a === t.pos - 1) r++; else if (n) return t.pos = s, -1;
                }
            }
            let c = -1;
            return i && (c = t.pos), t.pos = s, c;
        },
        parseLinkTitle: function(t, e, n, r) {
            let i, o = e;
            const a = {
                ok: !1,
                can_continue: !1,
                pos: 0,
                str: "",
                marker: 0
            };
            if (r) a.str = r.str, a.marker = r.marker; else {
                if (o >= n) return a;
                let l = t.charCodeAt(o);
                if (l !== 34 && l !== 39 && l !== 40) return a;
                e++, o++, l === 40 && (l = 41), a.marker = l;
            }
            for (;o < n; ) {
                if (i = t.charCodeAt(o), i === a.marker) return a.pos = o + 1, a.str += se(t.slice(e, o)), 
                a.ok = !0, a;
                if (i === 40 && a.marker === 41) return a;
                i === 92 && o + 1 < n && o++, o++;
            }
            return a.can_continue = !0, a.str += se(t.slice(e, o)), a;
        }
    }, Symbol.toStringTag, {
        value: "Module"
    }), zt = {};
    function ae() {
        this.rules = qe({}, zt);
    }
    function at() {
        this.__rules__ = [], this.__cache__ = null;
    }
    function Dt(t, e, n) {
        this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, 
        this.level = 0, this.children = null, this.content = "", this.markup = "", 
        this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
    }
    function Ar(t, e, n) {
        this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e;
    }
    zt.code_inline = function(t, e, n, r, i) {
        const o = t[e];
        return "<code" + i.renderAttrs(o) + ">" + Jt(o.content) + "</code>";
    }, zt.code_block = function(t, e, n, r, i) {
        const o = t[e];
        return "<pre" + i.renderAttrs(o) + "><code>" + Jt(t[e].content) + `</code></pre>
`;
    }, zt.fence = function(t, e, n, r, i) {
        const o = t[e], a = o.info ? se(o.info).trim() : "";
        let l, s = "", c = "";
        if (a) {
            const d = a.split(/(\s+)/g);
            s = d[0], c = d.slice(2).join("");
        }
        if (l = n.highlight && n.highlight(o.content, s, c) || Jt(o.content), l.indexOf("<pre") === 0) return l + `
`;
        if (a) {
            const d = o.attrIndex("class"), p = o.attrs ? o.attrs.slice() : [];
            d < 0 ? p.push([ "class", n.langPrefix + s ]) : (p[d] = p[d].slice(), 
            p[d][1] += " " + n.langPrefix + s);
            const f = {
                attrs: p
            };
            return `<pre><code${i.renderAttrs(f)}>${l}</code></pre>
`;
        }
        return `<pre><code${i.renderAttrs(o)}>${l}</code></pre>
`;
    }, zt.image = function(t, e, n, r, i) {
        const o = t[e];
        return o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, n, r), 
        i.renderToken(t, e, n);
    }, zt.hardbreak = function(t, e, n) {
        return n.xhtmlOut ? `<br />
` : `<br>
`;
    }, zt.softbreak = function(t, e, n) {
        return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
    }, zt.text = function(t, e) {
        return Jt(t[e].content);
    }, zt.html_block = function(t, e) {
        return t[e].content;
    }, zt.html_inline = function(t, e) {
        return t[e].content;
    }, ae.prototype.renderAttrs = function(t) {
        let e, n, r;
        if (!t.attrs) return "";
        for (r = "", e = 0, n = t.attrs.length; e < n; e++) r += " " + Jt(t.attrs[e][0]) + '="' + Jt(t.attrs[e][1]) + '"';
        return r;
    }, ae.prototype.renderToken = function(t, e, n) {
        const r = t[e];
        let i = "";
        if (r.hidden) return "";
        r.block && r.nesting !== -1 && e && t[e - 1].hidden && (i += `
`), i += (r.nesting === -1 ? "</" : "<") + r.tag, i += this.renderAttrs(r), r.nesting === 0 && n.xhtmlOut && (i += " /");
        let o = !1;
        if (r.block && (o = !0, r.nesting === 1 && e + 1 < t.length)) {
            const a = t[e + 1];
            (a.type === "inline" || a.hidden || a.nesting === -1 && a.tag === r.tag) && (o = !1);
        }
        return i += o ? `>
` : ">", i;
    }, ae.prototype.renderInline = function(t, e, n) {
        let r = "";
        const i = this.rules;
        for (let o = 0, a = t.length; o < a; o++) {
            const l = t[o].type;
            i[l] !== void 0 ? r += i[l](t, o, e, n, this) : r += this.renderToken(t, o, e);
        }
        return r;
    }, ae.prototype.renderInlineAsText = function(t, e, n) {
        let r = "";
        for (let i = 0, o = t.length; i < o; i++) switch (t[i].type) {
          case "text":
          case "html_inline":
          case "html_block":
            r += t[i].content;
            break;

          case "image":
            r += this.renderInlineAsText(t[i].children, e, n);
            break;

          case "softbreak":
          case "hardbreak":
            r += `
`;
        }
        return r;
    }, ae.prototype.render = function(t, e, n) {
        let r = "";
        const i = this.rules;
        for (let o = 0, a = t.length; o < a; o++) {
            const l = t[o].type;
            l === "inline" ? r += this.renderInline(t[o].children, e, n) : i[l] !== void 0 ? r += i[l](t, o, e, n, this) : r += this.renderToken(t, o, e, n);
        }
        return r;
    }, at.prototype.__find__ = function(t) {
        for (let e = 0; e < this.__rules__.length; e++) if (this.__rules__[e].name === t) return e;
        return -1;
    }, at.prototype.__compile__ = function() {
        const t = this, e = [ "" ];
        t.__rules__.forEach(function(n) {
            n.enabled && n.alt.forEach(function(r) {
                e.indexOf(r) < 0 && e.push(r);
            });
        }), t.__cache__ = {}, e.forEach(function(n) {
            t.__cache__[n] = [], t.__rules__.forEach(function(r) {
                r.enabled && (n && r.alt.indexOf(n) < 0 || t.__cache__[n].push(r.fn));
            });
        });
    }, at.prototype.at = function(t, e, n) {
        const r = this.__find__(t), i = n || {};
        if (r === -1) throw new Error("Parser rule not found: " + t);
        this.__rules__[r].fn = e, this.__rules__[r].alt = i.alt || [], this.__cache__ = null;
    }, at.prototype.before = function(t, e, n, r) {
        const i = this.__find__(t), o = r || {};
        if (i === -1) throw new Error("Parser rule not found: " + t);
        this.__rules__.splice(i, 0, {
            name: e,
            enabled: !0,
            fn: n,
            alt: o.alt || []
        }), this.__cache__ = null;
    }, at.prototype.after = function(t, e, n, r) {
        const i = this.__find__(t), o = r || {};
        if (i === -1) throw new Error("Parser rule not found: " + t);
        this.__rules__.splice(i + 1, 0, {
            name: e,
            enabled: !0,
            fn: n,
            alt: o.alt || []
        }), this.__cache__ = null;
    }, at.prototype.push = function(t, e, n) {
        const r = n || {};
        this.__rules__.push({
            name: t,
            enabled: !0,
            fn: e,
            alt: r.alt || []
        }), this.__cache__ = null;
    }, at.prototype.enable = function(t, e) {
        Array.isArray(t) || (t = [ t ]);
        const n = [];
        return t.forEach(function(r) {
            const i = this.__find__(r);
            if (i < 0) {
                if (e) return;
                throw new Error("Rules manager: invalid rule name " + r);
            }
            this.__rules__[i].enabled = !0, n.push(r);
        }, this), this.__cache__ = null, n;
    }, at.prototype.enableOnly = function(t, e) {
        Array.isArray(t) || (t = [ t ]), this.__rules__.forEach(function(n) {
            n.enabled = !1;
        }), this.enable(t, e);
    }, at.prototype.disable = function(t, e) {
        Array.isArray(t) || (t = [ t ]);
        const n = [];
        return t.forEach(function(r) {
            const i = this.__find__(r);
            if (i < 0) {
                if (e) return;
                throw new Error("Rules manager: invalid rule name " + r);
            }
            this.__rules__[i].enabled = !1, n.push(r);
        }, this), this.__cache__ = null, n;
    }, at.prototype.getRules = function(t) {
        return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
    }, Dt.prototype.attrIndex = function(t) {
        if (!this.attrs) return -1;
        const e = this.attrs;
        for (let n = 0, r = e.length; n < r; n++) if (e[n][0] === t) return n;
        return -1;
    }, Dt.prototype.attrPush = function(t) {
        this.attrs ? this.attrs.push(t) : this.attrs = [ t ];
    }, Dt.prototype.attrSet = function(t, e) {
        const n = this.attrIndex(t), r = [ t, e ];
        n < 0 ? this.attrPush(r) : this.attrs[n] = r;
    }, Dt.prototype.attrGet = function(t) {
        const e = this.attrIndex(t);
        let n = null;
        return e >= 0 && (n = this.attrs[e][1]), n;
    }, Dt.prototype.attrJoin = function(t, e) {
        const n = this.attrIndex(t);
        n < 0 ? this.attrPush([ t, e ]) : this.attrs[n][1] = this.attrs[n][1] + " " + e;
    }, Ar.prototype.Token = Dt;
    const To = /\r\n?|\n/g, Io = /\0/g;
    function Lo(t) {
        return /^<\/a\s*>/i.test(t);
    }
    const wr = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Bo = /\((c|tm|r)\)/i, Oo = /\((c|tm|r)\)/gi, $o = {
        c: "©",
        r: "®",
        tm: "™"
    };
    function Mo(t, e) {
        return $o[e.toLowerCase()];
    }
    function Ro(t) {
        let e = 0;
        for (let n = t.length - 1; n >= 0; n--) {
            const r = t[n];
            r.type !== "text" || e || (r.content = r.content.replace(Oo, Mo)), r.type === "link_open" && r.info === "auto" && e--, 
            r.type === "link_close" && r.info === "auto" && e++;
        }
    }
    function qo(t) {
        let e = 0;
        for (let n = t.length - 1; n >= 0; n--) {
            const r = t[n];
            r.type !== "text" || e || wr.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), 
            r.type === "link_open" && r.info === "auto" && e--, r.type === "link_close" && r.info === "auto" && e++;
        }
    }
    const Po = /['"]/, Er = /['"]/g, Fr = "’";
    function je(t, e, n) {
        return t.slice(0, e) + n + t.slice(e + 1);
    }
    function No(t, e) {
        let n;
        const r = [];
        for (let i = 0; i < t.length; i++) {
            const o = t[i], a = t[i].level;
            for (n = r.length - 1; n >= 0 && !(r[n].level <= a); n--);
            if (r.length = n + 1, o.type !== "text") continue;
            let l = o.content, s = 0, c = l.length;
            t: for (;s < c; ) {
                Er.lastIndex = s;
                const d = Er.exec(l);
                if (!d) break;
                let p = !0, f = !0;
                s = d.index + 1;
                const h = d[0] === "'";
                let g = 32;
                if (d.index - 1 >= 0) g = l.charCodeAt(d.index - 1); else for (n = i - 1; n >= 0 && t[n].type !== "softbreak" && t[n].type !== "hardbreak"; n--) if (t[n].content) {
                    g = t[n].content.charCodeAt(t[n].content.length - 1);
                    break;
                }
                let x = 32;
                if (s < c) x = l.charCodeAt(s); else for (n = i + 1; n < t.length && t[n].type !== "softbreak" && t[n].type !== "hardbreak"; n++) if (t[n].content) {
                    x = t[n].content.charCodeAt(0);
                    break;
                }
                const _ = ye(g) || De(String.fromCharCode(g)), m = ye(x) || De(String.fromCharCode(x)), b = xe(g), y = xe(x);
                if (y ? p = !1 : m && (b || _ || (p = !1)), b ? f = !1 : _ && (y || m || (f = !1)), 
                x === 34 && d[0] === '"' && g >= 48 && g <= 57 && (f = p = !1), 
                p && f && (p = _, f = m), p || f) {
                    if (f) for (n = r.length - 1; n >= 0; n--) {
                        let D = r[n];
                        if (r[n].level < a) break;
                        if (D.single === h && r[n].level === a) {
                            let k, w;
                            D = r[n], h ? (k = e.md.options.quotes[2], w = e.md.options.quotes[3]) : (k = e.md.options.quotes[0], 
                            w = e.md.options.quotes[1]), o.content = je(o.content, d.index, w), 
                            t[D.token].content = je(t[D.token].content, D.pos, k), 
                            s += w.length - 1, D.token === i && (s += k.length - 1), 
                            l = o.content, c = l.length, r.length = n;
                            continue t;
                        }
                    }
                    p ? r.push({
                        token: i,
                        pos: d.index,
                        single: h,
                        level: a
                    }) : f && h && (o.content = je(o.content, d.index, Fr));
                } else h && (o.content = je(o.content, d.index, Fr));
            }
        }
    }
    const vn = [ [ "normalize", function(t) {
        let e;
        e = t.src.replace(To, `
`), e = e.replace(Io, "�"), t.src = e;
    } ], [ "block", function(t) {
        let e;
        t.inlineMode ? (e = new t.Token("inline", "", 0), e.content = t.src, e.map = [ 0, 1 ], 
        e.children = [], t.tokens.push(e)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
    } ], [ "inline", function(t) {
        const e = t.tokens;
        for (let n = 0, r = e.length; n < r; n++) {
            const i = e[n];
            i.type === "inline" && t.md.inline.parse(i.content, t.md, t.env, i.children);
        }
    } ], [ "linkify", function(t) {
        const e = t.tokens;
        var n;
        if (t.md.options.linkify) for (let r = 0, i = e.length; r < i; r++) {
            if (e[r].type !== "inline" || !t.md.linkify.pretest(e[r].content)) continue;
            let o = e[r].children, a = 0;
            for (let l = o.length - 1; l >= 0; l--) {
                const s = o[l];
                if (s.type !== "link_close") {
                    if (s.type === "html_inline" && (n = s.content, /^<a[>\s]/i.test(n) && a > 0 && a--, 
                    Lo(s.content) && a++), !(a > 0) && s.type === "text" && t.md.linkify.test(s.content)) {
                        const c = s.content;
                        let d = t.md.linkify.match(c);
                        const p = [];
                        let f = s.level, h = 0;
                        d.length > 0 && d[0].index === 0 && l > 0 && o[l - 1].type === "text_special" && (d = d.slice(1));
                        for (let g = 0; g < d.length; g++) {
                            const x = d[g].url, _ = t.md.normalizeLink(x);
                            if (!t.md.validateLink(_)) continue;
                            let m = d[g].text;
                            m = d[g].schema ? d[g].schema !== "mailto:" || /^mailto:/i.test(m) ? t.md.normalizeLinkText(m) : t.md.normalizeLinkText("mailto:" + m).replace(/^mailto:/, "") : t.md.normalizeLinkText("http://" + m).replace(/^http:\/\//, "");
                            const b = d[g].index;
                            if (b > h) {
                                const w = new t.Token("text", "", 0);
                                w.content = c.slice(h, b), w.level = f, p.push(w);
                            }
                            const y = new t.Token("link_open", "a", 1);
                            y.attrs = [ [ "href", _ ] ], y.level = f++, y.markup = "linkify", 
                            y.info = "auto", p.push(y);
                            const D = new t.Token("text", "", 0);
                            D.content = m, D.level = f, p.push(D);
                            const k = new t.Token("link_close", "a", -1);
                            k.level = --f, k.markup = "linkify", k.info = "auto", 
                            p.push(k), h = d[g].lastIndex;
                        }
                        if (h < c.length) {
                            const g = new t.Token("text", "", 0);
                            g.content = c.slice(h), g.level = f, p.push(g);
                        }
                        e[r].children = o = vr(o, l, p);
                    }
                } else for (l--; o[l].level !== s.level && o[l].type !== "link_open"; ) l--;
            }
        }
    } ], [ "replacements", function(t) {
        let e;
        if (t.md.options.typographer) for (e = t.tokens.length - 1; e >= 0; e--) t.tokens[e].type === "inline" && (Bo.test(t.tokens[e].content) && Ro(t.tokens[e].children), 
        wr.test(t.tokens[e].content) && qo(t.tokens[e].children));
    } ], [ "smartquotes", function(t) {
        if (t.md.options.typographer) for (let e = t.tokens.length - 1; e >= 0; e--) t.tokens[e].type === "inline" && Po.test(t.tokens[e].content) && No(t.tokens[e].children, t);
    } ], [ "text_join", function(t) {
        let e, n;
        const r = t.tokens, i = r.length;
        for (let o = 0; o < i; o++) {
            if (r[o].type !== "inline") continue;
            const a = r[o].children, l = a.length;
            for (e = 0; e < l; e++) a[e].type === "text_special" && (a[e].type = "text");
            for (e = n = 0; e < l; e++) a[e].type === "text" && e + 1 < l && a[e + 1].type === "text" ? a[e + 1].content = a[e].content + a[e + 1].content : (e !== n && (a[n] = a[e]), 
            n++);
            e !== n && (a.length = n);
        }
    } ] ];
    function Cn() {
        this.ruler = new at();
        for (let t = 0; t < vn.length; t++) this.ruler.push(vn[t][0], vn[t][1]);
    }
    function Tt(t, e, n, r) {
        this.src = t, this.md = e, this.env = n, this.tokens = r, this.bMarks = [], 
        this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], 
        this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, 
        this.listIndent = -1, this.parentType = "root", this.level = 0;
        const i = this.src;
        for (let o = 0, a = 0, l = 0, s = 0, c = i.length, d = !1; a < c; a++) {
            const p = i.charCodeAt(a);
            if (!d) {
                if (R(p)) {
                    l++, p === 9 ? s += 4 - s % 4 : s++;
                    continue;
                }
                d = !0;
            }
            p !== 10 && a !== c - 1 || (p !== 10 && a++, this.bMarks.push(o), this.eMarks.push(a), 
            this.tShift.push(l), this.sCount.push(s), this.bsCount.push(0), d = !1, 
            l = 0, s = 0, o = a + 1);
        }
        this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), 
        this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
    }
    Cn.prototype.process = function(t) {
        const e = this.ruler.getRules("");
        for (let n = 0, r = e.length; n < r; n++) e[n](t);
    }, Cn.prototype.State = Ar, Tt.prototype.push = function(t, e, n) {
        const r = new Dt(t, e, n);
        return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, 
        this.tokens.push(r), r;
    }, Tt.prototype.isEmpty = function(t) {
        return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
    }, Tt.prototype.skipEmptyLines = function(t) {
        for (let e = this.lineMax; t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++);
        return t;
    }, Tt.prototype.skipSpaces = function(t) {
        for (let e = this.src.length; t < e && R(this.src.charCodeAt(t)); t++);
        return t;
    }, Tt.prototype.skipSpacesBack = function(t, e) {
        if (t <= e) return t;
        for (;t > e; ) if (!R(this.src.charCodeAt(--t))) return t + 1;
        return t;
    }, Tt.prototype.skipChars = function(t, e) {
        for (let n = this.src.length; t < n && this.src.charCodeAt(t) === e; t++);
        return t;
    }, Tt.prototype.skipCharsBack = function(t, e, n) {
        if (t <= n) return t;
        for (;t > n; ) if (e !== this.src.charCodeAt(--t)) return t + 1;
        return t;
    }, Tt.prototype.getLines = function(t, e, n, r) {
        if (t >= e) return "";
        const i = new Array(e - t);
        for (let o = 0, a = t; a < e; a++, o++) {
            let l = 0;
            const s = this.bMarks[a];
            let c, d = s;
            for (c = a + 1 < e || r ? this.eMarks[a] + 1 : this.eMarks[a]; d < c && l < n; ) {
                const p = this.src.charCodeAt(d);
                if (R(p)) p === 9 ? l += 4 - (l + this.bsCount[a]) % 4 : l++; else {
                    if (!(d - s < this.tShift[a])) break;
                    l++;
                }
                d++;
            }
            i[o] = l > n ? new Array(l - n + 1).join(" ") + this.src.slice(d, c) : this.src.slice(d, c);
        }
        return i.join("");
    }, Tt.prototype.Token = Dt;
    function An(t, e) {
        const n = t.bMarks[e] + t.tShift[e], r = t.eMarks[e];
        return t.src.slice(n, r);
    }
    function Sr(t) {
        const e = [], n = t.length;
        let r = 0, i = t.charCodeAt(r), o = !1, a = 0, l = "";
        for (;r < n; ) i === 124 && (o ? (l += t.substring(a, r - 1), a = r) : (e.push(l + t.substring(a, r)), 
        l = "", a = r + 1)), o = i === 92, r++, i = t.charCodeAt(r);
        return e.push(l + t.substring(a)), e;
    }
    function zr(t, e) {
        const n = t.eMarks[e];
        let r = t.bMarks[e] + t.tShift[e];
        const i = t.src.charCodeAt(r++);
        return i !== 42 && i !== 45 && i !== 43 || r < n && !R(t.src.charCodeAt(r)) ? -1 : r;
    }
    function Tr(t, e) {
        const n = t.bMarks[e] + t.tShift[e], r = t.eMarks[e];
        let i = n;
        if (i + 1 >= r) return -1;
        let o = t.src.charCodeAt(i++);
        if (o < 48 || o > 57) return -1;
        for (;;) {
            if (i >= r) return -1;
            if (o = t.src.charCodeAt(i++), !(o >= 48 && o <= 57)) {
                if (o === 41 || o === 46) break;
                return -1;
            }
            if (i - n >= 10) return -1;
        }
        return i < r && (o = t.src.charCodeAt(i), !R(o)) ? -1 : i;
    }
    const Ir = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, Lr = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", jo = new RegExp("^(?:" + Ir + "|" + Lr + "|\x3c!---?>|\x3c!--(?:[^-]|-[^-]|--[^>])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), Ho = new RegExp("^(?:" + Ir + "|" + Lr + ")"), le = [ [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0 ], [ /^<!--/, /-->/, !0 ], [ /^<\?/, /\?>/, !0 ], [ /^<![A-Z]/, />/, !0 ], [ /^<!\[CDATA\[/, /\]\]>/, !0 ], [ new RegExp("^</?(" + [ "address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul" ].join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0 ], [ new RegExp(Ho.source + "\\s*$"), /^$/, !1 ] ], He = [ [ "table", function(t, e, n, r) {
        if (e + 2 > n) return !1;
        let i = e + 1;
        if (t.sCount[i] < t.blkIndent || t.sCount[i] - t.blkIndent >= 4) return !1;
        let o = t.bMarks[i] + t.tShift[i];
        if (o >= t.eMarks[i]) return !1;
        const a = t.src.charCodeAt(o++);
        if (a !== 124 && a !== 45 && a !== 58 || o >= t.eMarks[i]) return !1;
        const l = t.src.charCodeAt(o++);
        if (l !== 124 && l !== 45 && l !== 58 && !R(l) || a === 45 && R(l)) return !1;
        for (;o < t.eMarks[i]; ) {
            const m = t.src.charCodeAt(o);
            if (m !== 124 && m !== 45 && m !== 58 && !R(m)) return !1;
            o++;
        }
        let s = An(t, e + 1), c = s.split("|");
        const d = [];
        for (let m = 0; m < c.length; m++) {
            const b = c[m].trim();
            if (!b) {
                if (m === 0 || m === c.length - 1) continue;
                return !1;
            }
            if (!/^:?-+:?$/.test(b)) return !1;
            b.charCodeAt(b.length - 1) === 58 ? d.push(b.charCodeAt(0) === 58 ? "center" : "right") : b.charCodeAt(0) === 58 ? d.push("left") : d.push("");
        }
        if (s = An(t, e).trim(), s.indexOf("|") === -1 || t.sCount[e] - t.blkIndent >= 4) return !1;
        c = Sr(s), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
        const p = c.length;
        if (p === 0 || p !== d.length) return !1;
        if (r) return !0;
        const f = t.parentType;
        t.parentType = "table";
        const h = t.md.block.ruler.getRules("blockquote"), g = [ e, 0 ];
        t.push("table_open", "table", 1).map = g, t.push("thead_open", "thead", 1).map = [ e, e + 1 ], 
        t.push("tr_open", "tr", 1).map = [ e, e + 1 ];
        for (let m = 0; m < c.length; m++) {
            const b = t.push("th_open", "th", 1);
            d[m] && (b.attrs = [ [ "style", "text-align:" + d[m] ] ]);
            const y = t.push("inline", "", 0);
            y.content = c[m].trim(), y.children = [], t.push("th_close", "th", -1);
        }
        let x;
        t.push("tr_close", "tr", -1), t.push("thead_close", "thead", -1);
        let _ = 0;
        for (i = e + 2; i < n && !(t.sCount[i] < t.blkIndent); i++) {
            let m = !1;
            for (let b = 0, y = h.length; b < y; b++) if (h[b](t, i, n, !0)) {
                m = !0;
                break;
            }
            if (m || (s = An(t, i).trim(), !s) || t.sCount[i] - t.blkIndent >= 4 || (c = Sr(s), 
            c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), 
            _ += p - c.length, _ > 65536)) break;
            i === e + 2 && (t.push("tbody_open", "tbody", 1).map = x = [ e + 2, 0 ]), 
            t.push("tr_open", "tr", 1).map = [ i, i + 1 ];
            for (let b = 0; b < p; b++) {
                const y = t.push("td_open", "td", 1);
                d[b] && (y.attrs = [ [ "style", "text-align:" + d[b] ] ]);
                const D = t.push("inline", "", 0);
                D.content = c[b] ? c[b].trim() : "", D.children = [], t.push("td_close", "td", -1);
            }
            t.push("tr_close", "tr", -1);
        }
        return x && (t.push("tbody_close", "tbody", -1), x[1] = i), t.push("table_close", "table", -1), 
        g[1] = i, t.parentType = f, t.line = i, !0;
    }, [ "paragraph", "reference" ] ], [ "code", function(t, e, n) {
        if (t.sCount[e] - t.blkIndent < 4) return !1;
        let r = e + 1, i = r;
        for (;r < n; ) if (t.isEmpty(r)) r++; else {
            if (!(t.sCount[r] - t.blkIndent >= 4)) break;
            r++, i = r;
        }
        t.line = i;
        const o = t.push("code_block", "code", 0);
        return o.content = t.getLines(e, i, 4 + t.blkIndent, !1) + `
`, o.map = [ e, t.line ], !0;
    } ], [ "fence", function(t, e, n, r) {
        let i = t.bMarks[e] + t.tShift[e], o = t.eMarks[e];
        if (t.sCount[e] - t.blkIndent >= 4 || i + 3 > o) return !1;
        const a = t.src.charCodeAt(i);
        if (a !== 126 && a !== 96) return !1;
        let l = i;
        i = t.skipChars(i, a);
        let s = i - l;
        if (s < 3) return !1;
        const c = t.src.slice(l, i), d = t.src.slice(i, o);
        if (a === 96 && d.indexOf(String.fromCharCode(a)) >= 0) return !1;
        if (r) return !0;
        let p = e, f = !1;
        for (;p++, !(p >= n) && (i = l = t.bMarks[p] + t.tShift[p], o = t.eMarks[p], 
        !(i < o && t.sCount[p] < t.blkIndent)); ) if (t.src.charCodeAt(i) === a && !(t.sCount[p] - t.blkIndent >= 4 || (i = t.skipChars(i, a), 
        i - l < s || (i = t.skipSpaces(i), i < o)))) {
            f = !0;
            break;
        }
        s = t.sCount[e], t.line = p + (f ? 1 : 0);
        const h = t.push("fence", "code", 0);
        return h.info = d, h.content = t.getLines(e + 1, p, s, !0), h.markup = c, 
        h.map = [ e, t.line ], !0;
    }, [ "paragraph", "reference", "blockquote", "list" ] ], [ "blockquote", function(t, e, n, r) {
        let i = t.bMarks[e] + t.tShift[e], o = t.eMarks[e];
        const a = t.lineMax;
        if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(i) !== 62) return !1;
        if (r) return !0;
        const l = [], s = [], c = [], d = [], p = t.md.block.ruler.getRules("blockquote"), f = t.parentType;
        t.parentType = "blockquote";
        let h, g = !1;
        for (h = e; h < n; h++) {
            const b = t.sCount[h] < t.blkIndent;
            if (i = t.bMarks[h] + t.tShift[h], o = t.eMarks[h], i >= o) break;
            if (t.src.charCodeAt(i++) === 62 && !b) {
                let D, k, w = t.sCount[h] + 1;
                t.src.charCodeAt(i) === 32 ? (i++, w++, k = !1, D = !0) : t.src.charCodeAt(i) === 9 ? (D = !0, 
                (t.bsCount[h] + w) % 4 == 3 ? (i++, w++, k = !1) : k = !0) : D = !1;
                let F = w;
                for (l.push(t.bMarks[h]), t.bMarks[h] = i; i < o; ) {
                    const v = t.src.charCodeAt(i);
                    if (!R(v)) break;
                    v === 9 ? F += 4 - (F + t.bsCount[h] + (k ? 1 : 0)) % 4 : F++, 
                    i++;
                }
                g = i >= o, s.push(t.bsCount[h]), t.bsCount[h] = t.sCount[h] + 1 + (D ? 1 : 0), 
                c.push(t.sCount[h]), t.sCount[h] = F - w, d.push(t.tShift[h]), t.tShift[h] = i - t.bMarks[h];
                continue;
            }
            if (g) break;
            let y = !1;
            for (let D = 0, k = p.length; D < k; D++) if (p[D](t, h, n, !0)) {
                y = !0;
                break;
            }
            if (y) {
                t.lineMax = h, t.blkIndent !== 0 && (l.push(t.bMarks[h]), s.push(t.bsCount[h]), 
                d.push(t.tShift[h]), c.push(t.sCount[h]), t.sCount[h] -= t.blkIndent);
                break;
            }
            l.push(t.bMarks[h]), s.push(t.bsCount[h]), d.push(t.tShift[h]), c.push(t.sCount[h]), 
            t.sCount[h] = -1;
        }
        const x = t.blkIndent;
        t.blkIndent = 0;
        const _ = t.push("blockquote_open", "blockquote", 1);
        _.markup = ">";
        const m = [ e, 0 ];
        _.map = m, t.md.block.tokenize(t, e, h), t.push("blockquote_close", "blockquote", -1).markup = ">", 
        t.lineMax = a, t.parentType = f, m[1] = t.line;
        for (let b = 0; b < d.length; b++) t.bMarks[b + e] = l[b], t.tShift[b + e] = d[b], 
        t.sCount[b + e] = c[b], t.bsCount[b + e] = s[b];
        return t.blkIndent = x, !0;
    }, [ "paragraph", "reference", "blockquote", "list" ] ], [ "hr", function(t, e, n, r) {
        const i = t.eMarks[e];
        if (t.sCount[e] - t.blkIndent >= 4) return !1;
        let o = t.bMarks[e] + t.tShift[e];
        const a = t.src.charCodeAt(o++);
        if (a !== 42 && a !== 45 && a !== 95) return !1;
        let l = 1;
        for (;o < i; ) {
            const c = t.src.charCodeAt(o++);
            if (c !== a && !R(c)) return !1;
            c === a && l++;
        }
        if (l < 3) return !1;
        if (r) return !0;
        t.line = e + 1;
        const s = t.push("hr", "hr", 0);
        return s.map = [ e, t.line ], s.markup = Array(l + 1).join(String.fromCharCode(a)), 
        !0;
    }, [ "paragraph", "reference", "blockquote", "list" ] ], [ "list", function(t, e, n, r) {
        let i, o, a, l, s = e, c = !0;
        if (t.sCount[s] - t.blkIndent >= 4 || t.listIndent >= 0 && t.sCount[s] - t.listIndent >= 4 && t.sCount[s] < t.blkIndent) return !1;
        let d, p, f, h = !1;
        if (r && t.parentType === "paragraph" && t.sCount[s] >= t.blkIndent && (h = !0), 
        (f = Tr(t, s)) >= 0) {
            if (d = !0, a = t.bMarks[s] + t.tShift[s], p = Number(t.src.slice(a, f - 1)), 
            h && p !== 1) return !1;
        } else {
            if (!((f = zr(t, s)) >= 0)) return !1;
            d = !1;
        }
        if (h && t.skipSpaces(f) >= t.eMarks[s]) return !1;
        if (r) return !0;
        const g = t.src.charCodeAt(f - 1), x = t.tokens.length;
        d ? (l = t.push("ordered_list_open", "ol", 1), p !== 1 && (l.attrs = [ [ "start", p ] ])) : l = t.push("bullet_list_open", "ul", 1);
        const _ = [ s, 0 ];
        l.map = _, l.markup = String.fromCharCode(g);
        let m = !1;
        const b = t.md.block.ruler.getRules("list"), y = t.parentType;
        for (t.parentType = "list"; s < n; ) {
            o = f, i = t.eMarks[s];
            const D = t.sCount[s] + f - (t.bMarks[s] + t.tShift[s]);
            let k = D;
            for (;o < i; ) {
                const Z = t.src.charCodeAt(o);
                if (Z === 9) k += 4 - (k + t.bsCount[s]) % 4; else {
                    if (Z !== 32) break;
                    k++;
                }
                o++;
            }
            const w = o;
            let F;
            F = w >= i ? 1 : k - D, F > 4 && (F = 1);
            const v = D + F;
            l = t.push("list_item_open", "li", 1), l.markup = String.fromCharCode(g);
            const z = [ s, 0 ];
            l.map = z, d && (l.info = t.src.slice(a, f - 1));
            const I = t.tight, U = t.tShift[s], _t = t.sCount[s], B = t.listIndent;
            if (t.listIndent = t.blkIndent, t.blkIndent = v, t.tight = !0, t.tShift[s] = w - t.bMarks[s], 
            t.sCount[s] = k, w >= i && t.isEmpty(s + 1) ? t.line = Math.min(t.line + 2, n) : t.md.block.tokenize(t, s, n, !0), 
            t.tight && !m || (c = !1), m = t.line - s > 1 && t.isEmpty(t.line - 1), 
            t.blkIndent = t.listIndent, t.listIndent = B, t.tShift[s] = U, t.sCount[s] = _t, 
            t.tight = I, l = t.push("list_item_close", "li", -1), l.markup = String.fromCharCode(g), 
            s = t.line, z[1] = s, s >= n || t.sCount[s] < t.blkIndent || t.sCount[s] - t.blkIndent >= 4) break;
            let rt = !1;
            for (let Z = 0, xt = b.length; Z < xt; Z++) if (b[Z](t, s, n, !0)) {
                rt = !0;
                break;
            }
            if (rt) break;
            if (d) {
                if (f = Tr(t, s), f < 0) break;
                a = t.bMarks[s] + t.tShift[s];
            } else if (f = zr(t, s), f < 0) break;
            if (g !== t.src.charCodeAt(f - 1)) break;
        }
        return l = d ? t.push("ordered_list_close", "ol", -1) : t.push("bullet_list_close", "ul", -1), 
        l.markup = String.fromCharCode(g), _[1] = s, t.line = s, t.parentType = y, 
        c && function(D, k) {
            const w = D.level + 2;
            for (let F = k + 2, v = D.tokens.length - 2; F < v; F++) D.tokens[F].level === w && D.tokens[F].type === "paragraph_open" && (D.tokens[F + 2].hidden = !0, 
            D.tokens[F].hidden = !0, F += 2);
        }(t, x), !0;
    }, [ "paragraph", "reference", "blockquote" ] ], [ "reference", function(t, e, n, r) {
        let i = t.bMarks[e] + t.tShift[e], o = t.eMarks[e], a = e + 1;
        if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(i) !== 91) return !1;
        function l(b) {
            const y = t.lineMax;
            if (b >= y || t.isEmpty(b)) return null;
            let D = !1;
            if (t.sCount[b] - t.blkIndent > 3 && (D = !0), t.sCount[b] < 0 && (D = !0), 
            !D) {
                const F = t.md.block.ruler.getRules("reference"), v = t.parentType;
                t.parentType = "reference";
                let z = !1;
                for (let I = 0, U = F.length; I < U; I++) if (F[I](t, b, y, !0)) {
                    z = !0;
                    break;
                }
                if (t.parentType = v, z) return null;
            }
            const k = t.bMarks[b] + t.tShift[b], w = t.eMarks[b];
            return t.src.slice(k, w + 1);
        }
        let s = t.src.slice(i, o + 1);
        o = s.length;
        let c = -1;
        for (i = 1; i < o; i++) {
            const b = s.charCodeAt(i);
            if (b === 91) return !1;
            if (b === 93) {
                c = i;
                break;
            }
            if (b === 10) {
                const y = l(a);
                y !== null && (s += y, o = s.length, a++);
            } else if (b === 92 && (i++, i < o && s.charCodeAt(i) === 10)) {
                const y = l(a);
                y !== null && (s += y, o = s.length, a++);
            }
        }
        if (c < 0 || s.charCodeAt(c + 1) !== 58) return !1;
        for (i = c + 2; i < o; i++) {
            const b = s.charCodeAt(i);
            if (b === 10) {
                const y = l(a);
                y !== null && (s += y, o = s.length, a++);
            } else if (!R(b)) break;
        }
        const d = t.md.helpers.parseLinkDestination(s, i, o);
        if (!d.ok) return !1;
        const p = t.md.normalizeLink(d.str);
        if (!t.md.validateLink(p)) return !1;
        i = d.pos;
        const f = i, h = a, g = i;
        for (;i < o; i++) {
            const b = s.charCodeAt(i);
            if (b === 10) {
                const y = l(a);
                y !== null && (s += y, o = s.length, a++);
            } else if (!R(b)) break;
        }
        let x, _ = t.md.helpers.parseLinkTitle(s, i, o);
        for (;_.can_continue; ) {
            const b = l(a);
            if (b === null) break;
            s += b, i = o, o = s.length, a++, _ = t.md.helpers.parseLinkTitle(s, i, o, _);
        }
        for (i < o && g !== i && _.ok ? (x = _.str, i = _.pos) : (x = "", i = f, 
        a = h); i < o && R(s.charCodeAt(i)); ) i++;
        if (i < o && s.charCodeAt(i) !== 10 && x) for (x = "", i = f, a = h; i < o && R(s.charCodeAt(i)); ) i++;
        if (i < o && s.charCodeAt(i) !== 10) return !1;
        const m = Ne(s.slice(1, c));
        return !!m && (r || (t.env.references === void 0 && (t.env.references = {}), 
        t.env.references[m] === void 0 && (t.env.references[m] = {
            title: x,
            href: p
        }), t.line = a), !0);
    } ], [ "html_block", function(t, e, n, r) {
        let i = t.bMarks[e] + t.tShift[e], o = t.eMarks[e];
        if (t.sCount[e] - t.blkIndent >= 4 || !t.md.options.html || t.src.charCodeAt(i) !== 60) return !1;
        let a = t.src.slice(i, o), l = 0;
        for (;l < le.length && !le[l][0].test(a); l++);
        if (l === le.length) return !1;
        if (r) return le[l][2];
        let s = e + 1;
        if (!le[l][1].test(a)) {
            for (;s < n && !(t.sCount[s] < t.blkIndent); s++) if (i = t.bMarks[s] + t.tShift[s], 
            o = t.eMarks[s], a = t.src.slice(i, o), le[l][1].test(a)) {
                a.length !== 0 && s++;
                break;
            }
        }
        t.line = s;
        const c = t.push("html_block", "", 0);
        return c.map = [ e, s ], c.content = t.getLines(e, s, t.blkIndent, !0), 
        !0;
    }, [ "paragraph", "reference", "blockquote" ] ], [ "heading", function(t, e, n, r) {
        let i = t.bMarks[e] + t.tShift[e], o = t.eMarks[e];
        if (t.sCount[e] - t.blkIndent >= 4) return !1;
        let a = t.src.charCodeAt(i);
        if (a !== 35 || i >= o) return !1;
        let l = 1;
        for (a = t.src.charCodeAt(++i); a === 35 && i < o && l <= 6; ) l++, a = t.src.charCodeAt(++i);
        if (l > 6 || i < o && !R(a)) return !1;
        if (r) return !0;
        o = t.skipSpacesBack(o, i);
        const s = t.skipCharsBack(o, 35, i);
        s > i && R(t.src.charCodeAt(s - 1)) && (o = s), t.line = e + 1;
        const c = t.push("heading_open", "h" + String(l), 1);
        c.markup = "########".slice(0, l), c.map = [ e, t.line ];
        const d = t.push("inline", "", 0);
        return d.content = t.src.slice(i, o).trim(), d.map = [ e, t.line ], d.children = [], 
        t.push("heading_close", "h" + String(l), -1).markup = "########".slice(0, l), 
        !0;
    }, [ "paragraph", "reference", "blockquote" ] ], [ "lheading", function(t, e, n) {
        const r = t.md.block.ruler.getRules("paragraph");
        if (t.sCount[e] - t.blkIndent >= 4) return !1;
        const i = t.parentType;
        t.parentType = "paragraph";
        let o, a = 0, l = e + 1;
        for (;l < n && !t.isEmpty(l); l++) {
            if (t.sCount[l] - t.blkIndent > 3) continue;
            if (t.sCount[l] >= t.blkIndent) {
                let f = t.bMarks[l] + t.tShift[l];
                const h = t.eMarks[l];
                if (f < h && (o = t.src.charCodeAt(f), (o === 45 || o === 61) && (f = t.skipChars(f, o), 
                f = t.skipSpaces(f), f >= h))) {
                    a = o === 61 ? 1 : 2;
                    break;
                }
            }
            if (t.sCount[l] < 0) continue;
            let p = !1;
            for (let f = 0, h = r.length; f < h; f++) if (r[f](t, l, n, !0)) {
                p = !0;
                break;
            }
            if (p) break;
        }
        if (!a) return !1;
        const s = t.getLines(e, l, t.blkIndent, !1).trim();
        t.line = l + 1;
        const c = t.push("heading_open", "h" + String(a), 1);
        c.markup = String.fromCharCode(o), c.map = [ e, t.line ];
        const d = t.push("inline", "", 0);
        return d.content = s, d.map = [ e, t.line - 1 ], d.children = [], t.push("heading_close", "h" + String(a), -1).markup = String.fromCharCode(o), 
        t.parentType = i, !0;
    } ], [ "paragraph", function(t, e, n) {
        const r = t.md.block.ruler.getRules("paragraph"), i = t.parentType;
        let o = e + 1;
        for (t.parentType = "paragraph"; o < n && !t.isEmpty(o); o++) {
            if (t.sCount[o] - t.blkIndent > 3 || t.sCount[o] < 0) continue;
            let s = !1;
            for (let c = 0, d = r.length; c < d; c++) if (r[c](t, o, n, !0)) {
                s = !0;
                break;
            }
            if (s) break;
        }
        const a = t.getLines(e, o, t.blkIndent, !1).trim();
        t.line = o, t.push("paragraph_open", "p", 1).map = [ e, t.line ];
        const l = t.push("inline", "", 0);
        return l.content = a, l.map = [ e, t.line ], l.children = [], t.push("paragraph_close", "p", -1), 
        t.parentType = i, !0;
    } ] ];
    function Ue() {
        this.ruler = new at();
        for (let t = 0; t < He.length; t++) this.ruler.push(He[t][0], He[t][1], {
            alt: (He[t][2] || []).slice()
        });
    }
    function ke(t, e, n, r) {
        this.src = t, this.env = n, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), 
        this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", 
        this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], 
        this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
    }
    function Uo(t) {
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
    Ue.prototype.tokenize = function(t, e, n) {
        const r = this.ruler.getRules(""), i = r.length, o = t.md.options.maxNesting;
        let a = e, l = !1;
        for (;a < n && (t.line = a = t.skipEmptyLines(a), !(a >= n)) && !(t.sCount[a] < t.blkIndent); ) {
            if (t.level >= o) {
                t.line = n;
                break;
            }
            const s = t.line;
            let c = !1;
            for (let d = 0; d < i; d++) if (c = r[d](t, a, n, !1), c) {
                if (s >= t.line) throw new Error("block rule didn't increment state.line");
                break;
            }
            if (!c) throw new Error("none of the block rules matched");
            t.tight = !l, t.isEmpty(t.line - 1) && (l = !0), a = t.line, a < n && t.isEmpty(a) && (l = !0, 
            a++, t.line = a);
        }
    }, Ue.prototype.parse = function(t, e, n, r) {
        if (!t) return;
        const i = new this.State(t, e, n, r);
        this.tokenize(i, i.line, i.lineMax);
    }, Ue.prototype.State = Tt, ke.prototype.pushPending = function() {
        const t = new Dt("text", "", 0);
        return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), 
        this.pending = "", t;
    }, ke.prototype.push = function(t, e, n) {
        this.pending && this.pushPending();
        const r = new Dt(t, e, n);
        let i = null;
        return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), 
        r.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), 
        this.delimiters = [], i = {
            delimiters: this.delimiters
        }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(i), 
        r;
    }, ke.prototype.scanDelims = function(t, e) {
        const n = this.posMax, r = this.src.charCodeAt(t), i = t > 0 ? this.src.charCodeAt(t - 1) : 32;
        let o = t;
        for (;o < n && this.src.charCodeAt(o) === r; ) o++;
        const a = o - t, l = o < n ? this.src.charCodeAt(o) : 32, s = ye(i) || De(String.fromCharCode(i)), c = ye(l) || De(String.fromCharCode(l)), d = xe(i), p = xe(l), f = !p && (!c || d || s), h = !d && (!s || p || c);
        return {
            can_open: f && (e || !h || s),
            can_close: h && (e || !f || c),
            length: a
        };
    }, ke.prototype.Token = Dt;
    const Wo = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i, wn = [];
    for (let t = 0; t < 256; t++) wn.push(0);
    function Br(t, e) {
        let n;
        const r = [], i = e.length;
        for (let o = 0; o < i; o++) {
            const a = e[o];
            if (a.marker !== 126 || a.end === -1) continue;
            const l = e[a.end];
            n = t.tokens[a.token], n.type = "s_open", n.tag = "s", n.nesting = 1, 
            n.markup = "~~", n.content = "", n = t.tokens[l.token], n.type = "s_close", 
            n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", t.tokens[l.token - 1].type === "text" && t.tokens[l.token - 1].content === "~" && r.push(l.token - 1);
        }
        for (;r.length; ) {
            const o = r.pop();
            let a = o + 1;
            for (;a < t.tokens.length && t.tokens[a].type === "s_close"; ) a++;
            a--, o !== a && (n = t.tokens[a], t.tokens[a] = t.tokens[o], t.tokens[o] = n);
        }
    }
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
        wn[t.charCodeAt(0)] = 1;
    });
    const Or = {
        tokenize: function(t, e) {
            const n = t.pos, r = t.src.charCodeAt(n);
            if (e || r !== 126) return !1;
            const i = t.scanDelims(t.pos, !0);
            let o = i.length;
            const a = String.fromCharCode(r);
            if (o < 2) return !1;
            let l;
            o % 2 && (l = t.push("text", "", 0), l.content = a, o--);
            for (let s = 0; s < o; s += 2) l = t.push("text", "", 0), l.content = a + a, 
            t.delimiters.push({
                marker: r,
                length: 0,
                token: t.tokens.length - 1,
                end: -1,
                open: i.can_open,
                close: i.can_close
            });
            return t.pos += i.length, !0;
        },
        postProcess: function(t) {
            const e = t.tokens_meta, n = t.tokens_meta.length;
            Br(t, t.delimiters);
            for (let r = 0; r < n; r++) e[r] && e[r].delimiters && Br(t, e[r].delimiters);
        }
    };
    function $r(t, e) {
        for (let n = e.length - 1; n >= 0; n--) {
            const r = e[n];
            if (r.marker !== 95 && r.marker !== 42 || r.end === -1) continue;
            const i = e[r.end], o = n > 0 && e[n - 1].end === r.end + 1 && e[n - 1].marker === r.marker && e[n - 1].token === r.token - 1 && e[r.end + 1].token === i.token + 1, a = String.fromCharCode(r.marker), l = t.tokens[r.token];
            l.type = o ? "strong_open" : "em_open", l.tag = o ? "strong" : "em", 
            l.nesting = 1, l.markup = o ? a + a : a, l.content = "";
            const s = t.tokens[i.token];
            s.type = o ? "strong_close" : "em_close", s.tag = o ? "strong" : "em", 
            s.nesting = -1, s.markup = o ? a + a : a, s.content = "", o && (t.tokens[e[n - 1].token].content = "", 
            t.tokens[e[r.end + 1].token].content = "", n--);
        }
    }
    const Mr = {
        tokenize: function(t, e) {
            const n = t.pos, r = t.src.charCodeAt(n);
            if (e || r !== 95 && r !== 42) return !1;
            const i = t.scanDelims(t.pos, r === 42);
            for (let o = 0; o < i.length; o++) t.push("text", "", 0).content = String.fromCharCode(r), 
            t.delimiters.push({
                marker: r,
                length: i.length,
                token: t.tokens.length - 1,
                end: -1,
                open: i.can_open,
                close: i.can_close
            });
            return t.pos += i.length, !0;
        },
        postProcess: function(t) {
            const e = t.tokens_meta, n = t.tokens_meta.length;
            $r(t, t.delimiters);
            for (let r = 0; r < n; r++) e[r] && e[r].delimiters && $r(t, e[r].delimiters);
        }
    }, Zo = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Vo = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/, Go = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Xo = /^&([a-z][a-z0-9]{1,31});/i;
    function Rr(t) {
        const e = {}, n = t.length;
        if (!n) return;
        let r = 0, i = -2;
        const o = [];
        for (let a = 0; a < n; a++) {
            const l = t[a];
            if (o.push(0), t[r].marker === l.marker && i === l.token - 1 || (r = a), 
            i = l.token, l.length = l.length || 0, !l.close) continue;
            e.hasOwnProperty(l.marker) || (e[l.marker] = [ -1, -1, -1, -1, -1, -1 ]);
            const s = e[l.marker][(l.open ? 3 : 0) + l.length % 3];
            let c = r - o[r] - 1, d = c;
            for (;c > s; c -= o[c] + 1) {
                const p = t[c];
                if (p.marker === l.marker && p.open && p.end < 0) {
                    let f = !1;
                    if ((p.close || l.open) && (p.length + l.length) % 3 == 0 && (p.length % 3 == 0 && l.length % 3 == 0 || (f = !0)), 
                    !f) {
                        const h = c > 0 && !t[c - 1].open ? o[c - 1] + 1 : 0;
                        o[a] = a - c + h, o[c] = h, l.open = !1, p.end = a, p.close = !1, 
                        d = -1, i = -2;
                        break;
                    }
                }
            }
            d !== -1 && (e[l.marker][(l.open ? 3 : 0) + (l.length || 0) % 3] = d);
        }
    }
    const En = [ [ "text", function(t, e) {
        let n = t.pos;
        for (;n < t.posMax && !Uo(t.src.charCodeAt(n)); ) n++;
        return n !== t.pos && (e || (t.pending += t.src.slice(t.pos, n)), t.pos = n, 
        !0);
    } ], [ "linkify", function(t, e) {
        if (!t.md.options.linkify || t.linkLevel > 0) return !1;
        const n = t.pos;
        if (n + 3 > t.posMax || t.src.charCodeAt(n) !== 58 || t.src.charCodeAt(n + 1) !== 47 || t.src.charCodeAt(n + 2) !== 47) return !1;
        const r = t.pending.match(Wo);
        if (!r) return !1;
        const i = r[1], o = t.md.linkify.matchAtStart(t.src.slice(n - i.length));
        if (!o) return !1;
        let a = o.url;
        if (a.length <= i.length) return !1;
        a = a.replace(/\*+$/, "");
        const l = t.md.normalizeLink(a);
        if (!t.md.validateLink(l)) return !1;
        if (!e) {
            t.pending = t.pending.slice(0, -i.length);
            const s = t.push("link_open", "a", 1);
            s.attrs = [ [ "href", l ] ], s.markup = "linkify", s.info = "auto", 
            t.push("text", "", 0).content = t.md.normalizeLinkText(a);
            const c = t.push("link_close", "a", -1);
            c.markup = "linkify", c.info = "auto";
        }
        return t.pos += a.length - i.length, !0;
    } ], [ "newline", function(t, e) {
        let n = t.pos;
        if (t.src.charCodeAt(n) !== 10) return !1;
        const r = t.pending.length - 1, i = t.posMax;
        if (!e) if (r >= 0 && t.pending.charCodeAt(r) === 32) if (r >= 1 && t.pending.charCodeAt(r - 1) === 32) {
            let o = r - 1;
            for (;o >= 1 && t.pending.charCodeAt(o - 1) === 32; ) o--;
            t.pending = t.pending.slice(0, o), t.push("hardbreak", "br", 0);
        } else t.pending = t.pending.slice(0, -1), t.push("softbreak", "br", 0); else t.push("softbreak", "br", 0);
        for (n++; n < i && R(t.src.charCodeAt(n)); ) n++;
        return t.pos = n, !0;
    } ], [ "escape", function(t, e) {
        let n = t.pos;
        const r = t.posMax;
        if (t.src.charCodeAt(n) !== 92 || (n++, n >= r)) return !1;
        let i = t.src.charCodeAt(n);
        if (i === 10) {
            for (e || t.push("hardbreak", "br", 0), n++; n < r && (i = t.src.charCodeAt(n), 
            R(i)); ) n++;
            return t.pos = n, !0;
        }
        let o = t.src[n];
        if (i >= 55296 && i <= 56319 && n + 1 < r) {
            const l = t.src.charCodeAt(n + 1);
            l >= 56320 && l <= 57343 && (o += t.src[n + 1], n++);
        }
        const a = "\\" + o;
        if (!e) {
            const l = t.push("text_special", "", 0);
            i < 256 && wn[i] !== 0 ? l.content = o : l.content = a, l.markup = a, 
            l.info = "escape";
        }
        return t.pos = n + 1, !0;
    } ], [ "backticks", function(t, e) {
        let n = t.pos;
        if (t.src.charCodeAt(n) !== 96) return !1;
        const r = n;
        n++;
        const i = t.posMax;
        for (;n < i && t.src.charCodeAt(n) === 96; ) n++;
        const o = t.src.slice(r, n), a = o.length;
        if (t.backticksScanned && (t.backticks[a] || 0) <= r) return e || (t.pending += o), 
        t.pos += a, !0;
        let l, s = n;
        for (;(l = t.src.indexOf("`", s)) !== -1; ) {
            for (s = l + 1; s < i && t.src.charCodeAt(s) === 96; ) s++;
            const c = s - l;
            if (c === a) {
                if (!e) {
                    const d = t.push("code_inline", "code", 0);
                    d.markup = o, d.content = t.src.slice(n, l).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
                }
                return t.pos = s, !0;
            }
            t.backticks[c] = l;
        }
        return t.backticksScanned = !0, e || (t.pending += o), t.pos += a, !0;
    } ], [ "strikethrough", Or.tokenize ], [ "emphasis", Mr.tokenize ], [ "link", function(t, e) {
        let n, r, i, o, a = "", l = "", s = t.pos, c = !0;
        if (t.src.charCodeAt(t.pos) !== 91) return !1;
        const d = t.pos, p = t.posMax, f = t.pos + 1, h = t.md.helpers.parseLinkLabel(t, t.pos, !0);
        if (h < 0) return !1;
        let g = h + 1;
        if (g < p && t.src.charCodeAt(g) === 40) {
            for (c = !1, g++; g < p && (n = t.src.charCodeAt(g), R(n) || n === 10); g++);
            if (g >= p) return !1;
            if (s = g, i = t.md.helpers.parseLinkDestination(t.src, g, t.posMax), 
            i.ok) {
                for (a = t.md.normalizeLink(i.str), t.md.validateLink(a) ? g = i.pos : a = "", 
                s = g; g < p && (n = t.src.charCodeAt(g), R(n) || n === 10); g++);
                if (i = t.md.helpers.parseLinkTitle(t.src, g, t.posMax), g < p && s !== g && i.ok) for (l = i.str, 
                g = i.pos; g < p && (n = t.src.charCodeAt(g), R(n) || n === 10); g++);
            }
            (g >= p || t.src.charCodeAt(g) !== 41) && (c = !0), g++;
        }
        if (c) {
            if (t.env.references === void 0) return !1;
            if (g < p && t.src.charCodeAt(g) === 91 ? (s = g + 1, g = t.md.helpers.parseLinkLabel(t, g), 
            g >= 0 ? r = t.src.slice(s, g++) : g = h + 1) : g = h + 1, r || (r = t.src.slice(f, h)), 
            o = t.env.references[Ne(r)], !o) return t.pos = d, !1;
            a = o.href, l = o.title;
        }
        if (!e) {
            t.pos = f, t.posMax = h;
            const x = [ [ "href", a ] ];
            t.push("link_open", "a", 1).attrs = x, l && x.push([ "title", l ]), 
            t.linkLevel++, t.md.inline.tokenize(t), t.linkLevel--, t.push("link_close", "a", -1);
        }
        return t.pos = g, t.posMax = p, !0;
    } ], [ "image", function(t, e) {
        let n, r, i, o, a, l, s, c, d = "";
        const p = t.pos, f = t.posMax;
        if (t.src.charCodeAt(t.pos) !== 33 || t.src.charCodeAt(t.pos + 1) !== 91) return !1;
        const h = t.pos + 2, g = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1);
        if (g < 0) return !1;
        if (o = g + 1, o < f && t.src.charCodeAt(o) === 40) {
            for (o++; o < f && (n = t.src.charCodeAt(o), R(n) || n === 10); o++);
            if (o >= f) return !1;
            for (c = o, l = t.md.helpers.parseLinkDestination(t.src, o, t.posMax), 
            l.ok && (d = t.md.normalizeLink(l.str), t.md.validateLink(d) ? o = l.pos : d = ""), 
            c = o; o < f && (n = t.src.charCodeAt(o), R(n) || n === 10); o++);
            if (l = t.md.helpers.parseLinkTitle(t.src, o, t.posMax), o < f && c !== o && l.ok) for (s = l.str, 
            o = l.pos; o < f && (n = t.src.charCodeAt(o), R(n) || n === 10); o++); else s = "";
            if (o >= f || t.src.charCodeAt(o) !== 41) return t.pos = p, !1;
            o++;
        } else {
            if (t.env.references === void 0) return !1;
            if (o < f && t.src.charCodeAt(o) === 91 ? (c = o + 1, o = t.md.helpers.parseLinkLabel(t, o), 
            o >= 0 ? i = t.src.slice(c, o++) : o = g + 1) : o = g + 1, i || (i = t.src.slice(h, g)), 
            a = t.env.references[Ne(i)], !a) return t.pos = p, !1;
            d = a.href, s = a.title;
        }
        if (!e) {
            r = t.src.slice(h, g);
            const x = [];
            t.md.inline.parse(r, t.md, t.env, x);
            const _ = t.push("image", "img", 0), m = [ [ "src", d ], [ "alt", "" ] ];
            _.attrs = m, _.children = x, _.content = r, s && m.push([ "title", s ]);
        }
        return t.pos = o, t.posMax = f, !0;
    } ], [ "autolink", function(t, e) {
        let n = t.pos;
        if (t.src.charCodeAt(n) !== 60) return !1;
        const r = t.pos, i = t.posMax;
        for (;;) {
            if (++n >= i) return !1;
            const a = t.src.charCodeAt(n);
            if (a === 60) return !1;
            if (a === 62) break;
        }
        const o = t.src.slice(r + 1, n);
        if (Vo.test(o)) {
            const a = t.md.normalizeLink(o);
            if (!t.md.validateLink(a)) return !1;
            if (!e) {
                const l = t.push("link_open", "a", 1);
                l.attrs = [ [ "href", a ] ], l.markup = "autolink", l.info = "auto", 
                t.push("text", "", 0).content = t.md.normalizeLinkText(o);
                const s = t.push("link_close", "a", -1);
                s.markup = "autolink", s.info = "auto";
            }
            return t.pos += o.length + 2, !0;
        }
        if (Zo.test(o)) {
            const a = t.md.normalizeLink("mailto:" + o);
            if (!t.md.validateLink(a)) return !1;
            if (!e) {
                const l = t.push("link_open", "a", 1);
                l.attrs = [ [ "href", a ] ], l.markup = "autolink", l.info = "auto", 
                t.push("text", "", 0).content = t.md.normalizeLinkText(o);
                const s = t.push("link_close", "a", -1);
                s.markup = "autolink", s.info = "auto";
            }
            return t.pos += o.length + 2, !0;
        }
        return !1;
    } ], [ "html_inline", function(t, e) {
        if (!t.md.options.html) return !1;
        const n = t.posMax, r = t.pos;
        if (t.src.charCodeAt(r) !== 60 || r + 2 >= n) return !1;
        const i = t.src.charCodeAt(r + 1);
        if (i !== 33 && i !== 63 && i !== 47 && !function(l) {
            const s = 32 | l;
            return s >= 97 && s <= 122;
        }(i)) return !1;
        const o = t.src.slice(r).match(jo);
        if (!o) return !1;
        if (!e) {
            const l = t.push("html_inline", "", 0);
            l.content = o[0], a = l.content, /^<a[>\s]/i.test(a) && t.linkLevel++, 
            function(s) {
                return /^<\/a\s*>/i.test(s);
            }(l.content) && t.linkLevel--;
        }
        var a;
        return t.pos += o[0].length, !0;
    } ], [ "entity", function(t, e) {
        const n = t.pos, r = t.posMax;
        if (t.src.charCodeAt(n) !== 38 || n + 1 >= r) return !1;
        if (t.src.charCodeAt(n + 1) === 35) {
            const i = t.src.slice(n).match(Go);
            if (i) {
                if (!e) {
                    const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), a = t.push("text_special", "", 0);
                    a.content = kn(o) ? Pe(o) : Pe(65533), a.markup = i[0], a.info = "entity";
                }
                return t.pos += i[0].length, !0;
            }
        } else {
            const i = t.src.slice(n).match(Xo);
            if (i) {
                const o = kr(i[0]);
                if (o !== i[0]) {
                    if (!e) {
                        const a = t.push("text_special", "", 0);
                        a.content = o, a.markup = i[0], a.info = "entity";
                    }
                    return t.pos += i[0].length, !0;
                }
            }
        }
        return !1;
    } ] ], Fn = [ [ "balance_pairs", function(t) {
        const e = t.tokens_meta, n = t.tokens_meta.length;
        Rr(t.delimiters);
        for (let r = 0; r < n; r++) e[r] && e[r].delimiters && Rr(e[r].delimiters);
    } ], [ "strikethrough", Or.postProcess ], [ "emphasis", Mr.postProcess ], [ "fragments_join", function(t) {
        let e, n, r = 0;
        const i = t.tokens, o = t.tokens.length;
        for (e = n = 0; e < o; e++) i[e].nesting < 0 && r--, i[e].level = r, i[e].nesting > 0 && r++, 
        i[e].type === "text" && e + 1 < o && i[e + 1].type === "text" ? i[e + 1].content = i[e].content + i[e + 1].content : (e !== n && (i[n] = i[e]), 
        n++);
        e !== n && (i.length = n);
    } ] ];
    function ve() {
        this.ruler = new at();
        for (let t = 0; t < En.length; t++) this.ruler.push(En[t][0], En[t][1]);
        this.ruler2 = new at();
        for (let t = 0; t < Fn.length; t++) this.ruler2.push(Fn[t][0], Fn[t][1]);
    }
    function Sn(t) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
            e && Object.keys(e).forEach(function(n) {
                t[n] = e[n];
            });
        }), t;
    }
    function We(t) {
        return Object.prototype.toString.call(t);
    }
    function qr(t) {
        return We(t) === "[object Function]";
    }
    function Jo(t) {
        return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    ve.prototype.skipToken = function(t) {
        const e = t.pos, n = this.ruler.getRules(""), r = n.length, i = t.md.options.maxNesting, o = t.cache;
        if (o[e] !== void 0) return void (t.pos = o[e]);
        let a = !1;
        if (t.level < i) {
            for (let l = 0; l < r; l++) if (t.level++, a = n[l](t, !0), t.level--, 
            a) {
                if (e >= t.pos) throw new Error("inline rule didn't increment state.pos");
                break;
            }
        } else t.pos = t.posMax;
        a || t.pos++, o[e] = t.pos;
    }, ve.prototype.tokenize = function(t) {
        const e = this.ruler.getRules(""), n = e.length, r = t.posMax, i = t.md.options.maxNesting;
        for (;t.pos < r; ) {
            const o = t.pos;
            let a = !1;
            if (t.level < i) {
                for (let l = 0; l < n; l++) if (a = e[l](t, !1), a) {
                    if (o >= t.pos) throw new Error("inline rule didn't increment state.pos");
                    break;
                }
            }
            if (a) {
                if (t.pos >= r) break;
            } else t.pending += t.src[t.pos++];
        }
        t.pending && t.pushPending();
    }, ve.prototype.parse = function(t, e, n, r) {
        const i = new this.State(t, e, n, r);
        this.tokenize(i);
        const o = this.ruler2.getRules(""), a = o.length;
        for (let l = 0; l < a; l++) o[l](i);
    }, ve.prototype.State = ke;
    const Pr = {
        fuzzyLink: !0,
        fuzzyEmail: !0,
        fuzzyIP: !1
    }, Qo = {
        "http:": {
            validate: function(t, e, n) {
                const r = t.slice(e);
                return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), 
                n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
            }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
            validate: function(t, e, n) {
                const r = t.slice(e);
                return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), 
                n.re.no_http.test(r) ? e >= 3 && t[e - 3] === ":" || e >= 3 && t[e - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0;
            }
        },
        "mailto:": {
            validate: function(t, e, n) {
                const r = t.slice(e);
                return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), 
                n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
            }
        }
    }, Ko = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Yo = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
    function Ze(t) {
        const e = t.re = function(l) {
            const s = {};
            l = l || {}, s.src_Any = br.source, s.src_Cc = _r.source, s.src_Z = Dr.source, 
            s.src_P = _n.source, s.src_ZPCc = [ s.src_Z, s.src_P, s.src_Cc ].join("|"), 
            s.src_ZCc = [ s.src_Z, s.src_Cc ].join("|");
            const c = "[><｜]";
            return s.src_pseudo_letter = "(?:(?![><｜]|" + s.src_ZPCc + ")" + s.src_Any + ")", 
            s.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", 
            s.src_auth = "(?:(?:(?!" + s.src_ZCc + "|[@/\\[\\]()]).)+@)?", s.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", 
            s.src_host_terminator = "(?=$|[><｜]|" + s.src_ZPCc + ")(?!" + (l["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + s.src_ZPCc + "))", 
            s.src_path = "(?:[/?#](?:(?!" + s.src_ZCc + "|" + c + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + s.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + s.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + s.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + s.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + s.src_ZCc + "|[']).)+\\'|\\'(?=" + s.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + s.src_ZCc + "|[.]|$)|" + (l["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + s.src_ZCc + "|$)|;(?!" + s.src_ZCc + "|$)|\\!+(?!" + s.src_ZCc + "|[!]|$)|\\?(?!" + s.src_ZCc + "|[?]|$))+|\\/)?", 
            s.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', 
            s.src_xn = "xn--[a-z0-9\\-]{1,59}", s.src_domain_root = "(?:" + s.src_xn + "|" + s.src_pseudo_letter + "{1,63})", 
            s.src_domain = "(?:" + s.src_xn + "|(?:" + s.src_pseudo_letter + ")|(?:" + s.src_pseudo_letter + "(?:-|" + s.src_pseudo_letter + "){0,61}" + s.src_pseudo_letter + "))", 
            s.src_host = "(?:(?:(?:(?:" + s.src_domain + ")\\.)*" + s.src_domain + "))", 
            s.tpl_host_fuzzy = "(?:" + s.src_ip4 + "|(?:(?:(?:" + s.src_domain + ")\\.)+(?:%TLDS%)))", 
            s.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + s.src_domain + ")\\.)+(?:%TLDS%))", 
            s.src_host_strict = s.src_host + s.src_host_terminator, s.tpl_host_fuzzy_strict = s.tpl_host_fuzzy + s.src_host_terminator, 
            s.src_host_port_strict = s.src_host + s.src_port + s.src_host_terminator, 
            s.tpl_host_port_fuzzy_strict = s.tpl_host_fuzzy + s.src_port + s.src_host_terminator, 
            s.tpl_host_port_no_ip_fuzzy_strict = s.tpl_host_no_ip_fuzzy + s.src_port + s.src_host_terminator, 
            s.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + s.src_ZPCc + "|>|$))", 
            s.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + s.src_ZCc + ")(" + s.src_email_name + "@" + s.tpl_host_fuzzy_strict + ")", 
            s.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + s.src_ZPCc + "))((?![$+<=>^`|｜])" + s.tpl_host_port_fuzzy_strict + s.src_path + ")", 
            s.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + s.src_ZPCc + "))((?![$+<=>^`|｜])" + s.tpl_host_port_no_ip_fuzzy_strict + s.src_path + ")", 
            s;
        }(t.__opts__), n = t.__tlds__.slice();
        function r(l) {
            return l.replace("%TLDS%", e.src_tlds);
        }
        t.onCompile(), t.__tlds_replaced__ || n.push(Ko), n.push(e.src_xn), e.src_tlds = n.join("|"), 
        e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), 
        e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
        const i = [];
        function o(l, s) {
            throw new Error('(LinkifyIt) Invalid schema "' + l + '": ' + s);
        }
        t.__compiled__ = {}, Object.keys(t.__schemas__).forEach(function(l) {
            const s = t.__schemas__[l];
            if (s === null) return;
            const c = {
                validate: null,
                link: null
            };
            if (t.__compiled__[l] = c, We(s) === "[object Object]") return function(d) {
                return We(d) === "[object RegExp]";
            }(s.validate) ? c.validate = function(d) {
                return function(p, f) {
                    const h = p.slice(f);
                    return d.test(h) ? h.match(d)[0].length : 0;
                };
            }(s.validate) : qr(s.validate) ? c.validate = s.validate : o(l, s), 
            void (qr(s.normalize) ? c.normalize = s.normalize : s.normalize ? o(l, s) : c.normalize = function(d, p) {
                p.normalize(d);
            });
            (function(d) {
                return We(d) === "[object String]";
            })(s) ? i.push(l) : o(l, s);
        }), i.forEach(function(l) {
            t.__compiled__[t.__schemas__[l]] && (t.__compiled__[l].validate = t.__compiled__[t.__schemas__[l]].validate, 
            t.__compiled__[l].normalize = t.__compiled__[t.__schemas__[l]].normalize);
        }), t.__compiled__[""] = {
            validate: null,
            normalize: function(l, s) {
                s.normalize(l);
            }
        };
        const a = Object.keys(t.__compiled__).filter(function(l) {
            return l.length > 0 && t.__compiled__[l];
        }).map(Jo).join("|");
        t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + a + ")", "i"), 
        t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + a + ")", "ig"), 
        t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i"), t.re.pretest = RegExp("(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i"), 
        function(l) {
            l.__index__ = -1, l.__text_cache__ = "";
        }(t);
    }
    function ts(t, e) {
        const n = t.__index__, r = t.__last_index__, i = t.__text_cache__.slice(n, r);
        this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, 
        this.raw = i, this.text = i, this.url = i;
    }
    function zn(t, e) {
        const n = new ts(t, e);
        return t.__compiled__[n.schema].normalize(n, t), n;
    }
    function ut(t, e) {
        if (!(this instanceof ut)) return new ut(t, e);
        var n;
        e || (n = t, Object.keys(n || {}).reduce(function(r, i) {
            return r || Pr.hasOwnProperty(i);
        }, !1) && (e = t, t = {})), this.__opts__ = Sn({}, Pr, e), this.__index__ = -1, 
        this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", 
        this.__schemas__ = Sn({}, Qo, t), this.__compiled__ = {}, this.__tlds__ = Yo, 
        this.__tlds_replaced__ = !1, this.re = {}, Ze(this);
    }
    ut.prototype.add = function(t, e) {
        return this.__schemas__[t] = e, Ze(this), this;
    }, ut.prototype.set = function(t) {
        return this.__opts__ = Sn(this.__opts__, t), this;
    }, ut.prototype.test = function(t) {
        if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return !1;
        let e, n, r, i, o, a, l, s, c;
        if (this.re.schema_test.test(t)) {
            for (l = this.re.schema_search, l.lastIndex = 0; (e = l.exec(t)) !== null; ) if (i = this.testSchemaAt(t, e[2], l.lastIndex), 
            i) {
                this.__schema__ = e[2], this.__index__ = e.index + e[1].length, 
                this.__last_index__ = e.index + e[0].length + i;
                break;
            }
        }
        return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (s = t.search(this.re.host_fuzzy_test), 
        s >= 0 && (this.__index__ < 0 || s < this.__index__) && (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = n.index + n[1].length, 
        (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, 
        this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (c = t.indexOf("@"), 
        c >= 0 && (r = t.match(this.re.email_fuzzy)) !== null && (o = r.index + r[1].length, 
        a = r.index + r[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", 
        this.__index__ = o, this.__last_index__ = a))), this.__index__ >= 0;
    }, ut.prototype.pretest = function(t) {
        return this.re.pretest.test(t);
    }, ut.prototype.testSchemaAt = function(t, e, n) {
        return this.__compiled__[e.toLowerCase()] ? this.__compiled__[e.toLowerCase()].validate(t, n, this) : 0;
    }, ut.prototype.match = function(t) {
        const e = [];
        let n = 0;
        this.__index__ >= 0 && this.__text_cache__ === t && (e.push(zn(this, n)), 
        n = this.__last_index__);
        let r = n ? t.slice(n) : t;
        for (;this.test(r); ) e.push(zn(this, n)), r = r.slice(this.__last_index__), 
        n += this.__last_index__;
        return e.length ? e : null;
    }, ut.prototype.matchAtStart = function(t) {
        if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
        const e = this.re.schema_at_start.exec(t);
        if (!e) return null;
        const n = this.testSchemaAt(t, e[2], e[0].length);
        return n ? (this.__schema__ = e[2], this.__index__ = e.index + e[1].length, 
        this.__last_index__ = e.index + e[0].length + n, zn(this, 0)) : null;
    }, ut.prototype.tlds = function(t, e) {
        return t = Array.isArray(t) ? t : [ t ], e ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, i) {
            return n !== i[r - 1];
        }).reverse(), Ze(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, 
        Ze(this), this);
    }, ut.prototype.normalize = function(t) {
        t.schema || (t.url = "http://" + t.url), t.schema !== "mailto:" || /^mailto:/i.test(t.url) || (t.url = "mailto:" + t.url);
    }, ut.prototype.onCompile = function() {};
    const ce = 2147483647, $t = 36, es = /^xn--/, ns = /[^\0-\x7F]/, rs = /[\x2E\u3002\uFF0E\uFF61]/g, is = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }, It = Math.floor, Tn = String.fromCharCode;
    function jt(t) {
        throw new RangeError(is[t]);
    }
    function Nr(t, e) {
        const n = t.split("@");
        let r = "";
        n.length > 1 && (r = n[0] + "@", t = n[1]);
        const i = function(o, a) {
            const l = [];
            let s = o.length;
            for (;s--; ) l[s] = a(o[s]);
            return l;
        }((t = t.replace(rs, ".")).split("."), e).join(".");
        return r + i;
    }
    function jr(t) {
        const e = [];
        let n = 0;
        const r = t.length;
        for (;n < r; ) {
            const i = t.charCodeAt(n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                const o = t.charCodeAt(n++);
                (64512 & o) == 56320 ? e.push(((1023 & i) << 10) + (1023 & o) + 65536) : (e.push(i), 
                n--);
            } else e.push(i);
        }
        return e;
    }
    const Hr = function(t, e) {
        return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
    }, Ur = function(t, e, n) {
        let r = 0;
        for (t = n ? It(t / 700) : t >> 1, t += It(t / e); t > 455; r += $t) t = It(t / 35);
        return It(r + 36 * t / (t + 38));
    }, Wr = function(t) {
        const e = [], n = t.length;
        let r = 0, i = 128, o = 72, a = t.lastIndexOf("-");
        a < 0 && (a = 0);
        for (let s = 0; s < a; ++s) t.charCodeAt(s) >= 128 && jt("not-basic"), e.push(t.charCodeAt(s));
        for (let s = a > 0 ? a + 1 : 0; s < n; ) {
            const c = r;
            for (let p = 1, f = $t; ;f += $t) {
                s >= n && jt("invalid-input");
                const h = (l = t.charCodeAt(s++)) >= 48 && l < 58 ? l - 48 + 26 : l >= 65 && l < 91 ? l - 65 : l >= 97 && l < 123 ? l - 97 : $t;
                h >= $t && jt("invalid-input"), h > It((ce - r) / p) && jt("overflow"), 
                r += h * p;
                const g = f <= o ? 1 : f >= o + 26 ? 26 : f - o;
                if (h < g) break;
                const x = $t - g;
                p > It(ce / x) && jt("overflow"), p *= x;
            }
            const d = e.length + 1;
            o = Ur(r - c, d, c == 0), It(r / d) > ce - i && jt("overflow"), i += It(r / d), 
            r %= d, e.splice(r++, 0, i);
        }
        var l;
        return String.fromCodePoint(...e);
    }, Zr = function(t) {
        const e = [], n = (t = jr(t)).length;
        let r = 128, i = 0, o = 72;
        for (const s of t) s < 128 && e.push(Tn(s));
        const a = e.length;
        let l = a;
        for (a && e.push("-"); l < n; ) {
            let s = ce;
            for (const d of t) d >= r && d < s && (s = d);
            const c = l + 1;
            s - r > It((ce - i) / c) && jt("overflow"), i += (s - r) * c, r = s;
            for (const d of t) if (d < r && ++i > ce && jt("overflow"), d === r) {
                let p = i;
                for (let f = $t; ;f += $t) {
                    const h = f <= o ? 1 : f >= o + 26 ? 26 : f - o;
                    if (p < h) break;
                    const g = p - h, x = $t - h;
                    e.push(Tn(Hr(h + g % x, 0))), p = It(g / x);
                }
                e.push(Tn(Hr(p, 0))), o = Ur(i, c, l === a), i = 0, ++l;
            }
            ++i, ++r;
        }
        return e.join("");
    }, Vr = {
        version: "2.3.1",
        ucs2: {
            decode: jr,
            encode: t => String.fromCodePoint(...t)
        },
        decode: Wr,
        encode: Zr,
        toASCII: function(t) {
            return Nr(t, function(e) {
                return ns.test(e) ? "xn--" + Zr(e) : e;
            });
        },
        toUnicode: function(t) {
            return Nr(t, function(e) {
                return es.test(e) ? Wr(e.slice(4).toLowerCase()) : e;
            });
        }
    }, os = {
        default: {
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
        },
        zero: {
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
                    rules: [ "normalize", "block", "inline", "text_join" ]
                },
                block: {
                    rules: [ "paragraph" ]
                },
                inline: {
                    rules: [ "text" ],
                    rules2: [ "balance_pairs", "fragments_join" ]
                }
            }
        },
        commonmark: {
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
                    rules: [ "normalize", "block", "inline", "text_join" ]
                },
                block: {
                    rules: [ "blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph" ]
                },
                inline: {
                    rules: [ "autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text" ],
                    rules2: [ "balance_pairs", "emphasis", "fragments_join" ]
                }
            }
        }
    }, ss = /^(vbscript|javascript|file|data):/, as = /^data:image\/(gif|png|jpeg|webp);/;
    function ls(t) {
        const e = t.trim().toLowerCase();
        return !ss.test(e) || as.test(e);
    }
    const Gr = [ "http:", "https:", "mailto:" ];
    function cs(t) {
        const e = bn(t, !0);
        if (e.hostname && (!e.protocol || Gr.indexOf(e.protocol) >= 0)) try {
            e.hostname = Vr.toASCII(e.hostname);
        } catch {}
        return _e(gn(e));
    }
    function us(t) {
        const e = bn(t, !0);
        if (e.hostname && (!e.protocol || Gr.indexOf(e.protocol) >= 0)) try {
            e.hostname = Vr.toUnicode(e.hostname);
        } catch {}
        return oe(gn(e), oe.defaultChars + "%");
    }
    function gt(t, e) {
        if (!(this instanceof gt)) return new gt(t, e);
        e || yn(t) || (e = t || {}, t = "default"), this.inline = new ve(), this.block = new Ue(), 
        this.core = new Cn(), this.renderer = new ae(), this.linkify = new ut(), 
        this.validateLink = ls, this.normalizeLink = cs, this.normalizeLinkText = us, 
        this.utils = So, this.helpers = qe({}, zo), this.options = {}, this.configure(t), 
        e && this.set(e);
    }
    gt.prototype.set = function(t) {
        return qe(this.options, t), this;
    }, gt.prototype.configure = function(t) {
        const e = this;
        if (yn(t)) {
            const n = t;
            if (!(t = os[n])) throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
        }
        if (!t) throw new Error("Wrong `markdown-it` preset, can't be empty");
        return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(n) {
            t.components[n].rules && e[n].ruler.enableOnly(t.components[n].rules), 
            t.components[n].rules2 && e[n].ruler2.enableOnly(t.components[n].rules2);
        }), this;
    }, gt.prototype.enable = function(t, e) {
        let n = [];
        Array.isArray(t) || (t = [ t ]), [ "core", "block", "inline" ].forEach(function(i) {
            n = n.concat(this[i].ruler.enable(t, !0));
        }, this), n = n.concat(this.inline.ruler2.enable(t, !0));
        const r = t.filter(function(i) {
            return n.indexOf(i) < 0;
        });
        if (r.length && !e) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
        return this;
    }, gt.prototype.disable = function(t, e) {
        let n = [];
        Array.isArray(t) || (t = [ t ]), [ "core", "block", "inline" ].forEach(function(i) {
            n = n.concat(this[i].ruler.disable(t, !0));
        }, this), n = n.concat(this.inline.ruler2.disable(t, !0));
        const r = t.filter(function(i) {
            return n.indexOf(i) < 0;
        });
        if (r.length && !e) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
        return this;
    }, gt.prototype.use = function(t) {
        const e = [ this ].concat(Array.prototype.slice.call(arguments, 1));
        return t.apply(t, e), this;
    }, gt.prototype.parse = function(t, e) {
        if (typeof t != "string") throw new Error("Input data should be a String");
        const n = new this.core.State(t, this, e);
        return this.core.process(n), n.tokens;
    }, gt.prototype.render = function(t, e) {
        return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
    }, gt.prototype.parseInline = function(t, e) {
        const n = new this.core.State(t, this, e);
        return n.inlineMode = !0, this.core.process(n), n.tokens;
    }, gt.prototype.renderInline = function(t, e) {
        return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
    };
    const Xr = new Set([ !0, !1, "alt", "title" ]);
    function Jr(t, e) {
        return (Array.isArray(t) ? t : []).filter(([ n ]) => n !== e);
    }
    function Qr(t, e) {
        t && t.attrs && (t.attrs = Jr(t.attrs, e));
    }
    function hs(t, e) {
        if (!Xr.has(t)) throw new TypeError(`figcaption must be one of: ${[ ...Xr ]}.`);
        if (t === "alt") return e.content;
        const n = e.attrs.find(([ r ]) => r === "title");
        return Array.isArray(n) && n[1] ? (Qr(e, "title"), n[1]) : void 0;
    }
    function ds(t, e) {
        e = e || {}, t.core.ruler.before("linkify", "image_figures", function(n) {
            let r = 1;
            for (let i = 1, o = n.tokens.length; i < o - 1; ++i) {
                const a = n.tokens[i];
                if (a.type !== "inline" || !a.children || a.children.length !== 1 && a.children.length !== 3 || a.children.length === 1 && a.children[0].type !== "image") continue;
                if (a.children.length === 3) {
                    const [ c, d, p ] = a.children;
                    if (c.type !== "link_open" || d.type !== "image" || p.type !== "link_close") continue;
                }
                if (i !== 0 && n.tokens[i - 1].type !== "paragraph_open" || i !== o - 1 && n.tokens[i + 1].type !== "paragraph_close") continue;
                const l = n.tokens[i - 1];
                let s;
                if (l.type = "figure_open", l.tag = "figure", n.tokens[i + 1].type = "figure_close", 
                n.tokens[i + 1].tag = "figure", e.dataType && n.tokens[i - 1].attrPush([ "data-type", "image" ]), 
                e.link && a.children.length === 1) {
                    [ s ] = a.children;
                    const c = new n.Token("link_open", "a", 1);
                    c.attrPush([ "href", s.attrGet("src") ]), a.children.unshift(c), 
                    a.children.push(new n.Token("link_close", "a", -1));
                }
                if (s = a.children.length === 1 ? a.children[0] : a.children[1], 
                e.figcaption) {
                    const c = hs(e.figcaption, s);
                    if (c) {
                        const [ d ] = t.parseInline(c, n.env);
                        a.children.push(new n.Token("figcaption_open", "figcaption", 1)), 
                        a.children.push(...d.children), a.children.push(new n.Token("figcaption_close", "figcaption", -1)), 
                        s.attrs && (s.attrs = Jr(s.attrs, "title"));
                    }
                }
                if (e.copyAttrs && s.attrs) {
                    const c = e.copyAttrs === !0 ? "" : e.copyAttrs;
                    l.attrs = s.attrs.filter(([ d ]) => d.match(c)).map(d => Array.from(d));
                }
                if (e.tabindex && (n.tokens[i - 1].attrPush([ "tabindex", r ]), 
                r++), e.lazy && (s.attrs.some(([ c ]) => c === "loading") || s.attrs.push([ "loading", "lazy" ])), 
                e.async && (s.attrs.some(([ c ]) => c === "decoding") || s.attrs.push([ "decoding", "async" ])), 
                e.classes && typeof e.classes == "string") {
                    let c = !1;
                    for (let d = 0, p = s.attrs.length; d < p && !c; d++) {
                        const f = s.attrs[d];
                        f[0] === "class" && (f[1] = `${f[1]} ${e.classes}`, c = !0);
                    }
                    c || s.attrs.push([ "class", e.classes ]);
                }
                if (e.removeSrc) {
                    const c = s.attrs.find(([ d ]) => d === "src");
                    s.attrs.push([ "data-src", c[1] ]), Qr(s, "src");
                }
            }
        });
    }
    var In = !0, Kr = !1, Yr = !1, ps = function(t, e) {
        e && (In = !e.enabled, Kr = !!e.label, Yr = !!e.labelAfter), t.core.ruler.after("inline", "github-task-lists", function(n) {
            for (var r = n.tokens, i = 2; i < r.length; i++) ms(r, i) && (gs(r[i], n.Token), 
            ti(r[i - 2], "class", "task-list-item" + (In ? "" : " enabled")), ti(r[fs(r, i - 2)], "class", "contains-task-list"));
        });
    };
    function ti(t, e, n) {
        var r = t.attrIndex(e), i = [ e, n ];
        r < 0 ? t.attrPush(i) : t.attrs[r] = i;
    }
    function fs(t, e) {
        for (var n = t[e].level - 1, r = e - 1; r >= 0; r--) if (t[r].level === n) return r;
        return -1;
    }
    function ms(t, e) {
        return t[e].type === "inline" && function(n) {
            return n.type === "paragraph_open";
        }(t[e - 1]) && function(n) {
            return n.type === "list_item_open";
        }(t[e - 2]) && function(n) {
            return n.content.indexOf("[ ] ") === 0 || n.content.indexOf("[x] ") === 0 || n.content.indexOf("[X] ") === 0;
        }(t[e]);
    }
    function gs(t, e) {
        if (t.children.unshift(function(r, i) {
            var o = new i("html_inline", "", 0), a = In ? ' disabled="" ' : "";
            return r.content.indexOf("[ ] ") === 0 ? o.content = '<input class="task-list-item-checkbox"' + a + 'type="checkbox">' : r.content.indexOf("[x] ") !== 0 && r.content.indexOf("[X] ") !== 0 || (o.content = '<input class="task-list-item-checkbox" checked=""' + a + 'type="checkbox">'), 
            o;
        }(t, e)), t.children[1].content = t.children[1].content.slice(3), t.content = t.content.slice(3), 
        Kr) if (Yr) {
            t.children.pop();
            var n = "task-item-" + Math.ceil(1e7 * Math.random() - 1e3);
            t.children[0].content = t.children[0].content.slice(0, -1) + ' id="' + n + '">', 
            t.children.push(function(r, i, o) {
                var a = new o("html_inline", "", 0);
                return a.content = '<label class="task-list-item-label" for="' + i + '">' + r + "</label>", 
                a.attrs = [ {
                    for: i
                } ], a;
            }(t.content, n, e));
        } else t.children.unshift(function(r) {
            var i = new r("html_inline", "", 0);
            return i.content = "<label>", i;
        }(e)), t.children.push(function(r) {
            var i = new r("html_inline", "", 0);
            return i.content = "</label>", i;
        }(e));
    }
    const bs = Ei(ps), ue = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, ei = new Set(), Ln = typeof process == "object" && process ? process : {}, ni = (t, e, n, r) => {
        typeof Ln.emitWarning == "function" && Ln.emitWarning(t, e, n, r);
    };
    let Ve = globalThis.AbortController, ri = globalThis.AbortSignal;
    if (Ve === void 0) {
        ri = class {
            constructor() {
                H(this, "onabort");
                H(this, "_onabort", []);
                H(this, "reason");
                H(this, "aborted", !1);
            }
            addEventListener(n, r) {
                this._onabort.push(r);
            }
        }, Ve = class {
            constructor() {
                H(this, "signal", new ri());
                e();
            }
            abort(n) {
                var r, i;
                if (!this.signal.aborted) {
                    this.signal.reason = n, this.signal.aborted = !0;
                    for (const o of this.signal._onabort) o(n);
                    (i = (r = this.signal).onabort) == null || i.call(r, n);
                }
            }
        };
        let t = ((wi = Ln.env) == null ? void 0 : wi.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
        const e = () => {
            t && (t = !1, ni("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e));
        };
    }
    const Ht = t => t && t === Math.floor(t) && t > 0 && isFinite(t), ii = t => Ht(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? Ge : null : null;
    class Ge extends Array {
        constructor(e) {
            super(e), this.fill(0);
        }
    }
    const Kt = class Kt {
        constructor(e, n) {
            H(this, "heap");
            H(this, "length");
            if (!u(Kt, he)) throw new TypeError("instantiate Stack using Stack.create(n)");
            this.heap = new n(e), this.length = 0;
        }
        static create(e) {
            const n = ii(e);
            if (!n) return [];
            E(Kt, he, !0);
            const r = new Kt(e, n);
            return E(Kt, he, !1), r;
        }
        push(e) {
            this.heap[this.length++] = e;
        }
        pop() {
            return this.heap[--this.length];
        }
    };
    he = new WeakMap(), T(Kt, he, !1);
    let Bn = Kt;
    const Zn = class Zn {
        constructor(e) {
            T(this, we);
            T(this, nn);
            T(this, Lt);
            T(this, Bt);
            T(this, Se);
            T(this, fe);
            T(this, me);
            T(this, $);
            T(this, ze);
            T(this, ee);
            T(this, yt, void 0);
            T(this, ht, void 0);
            T(this, kt, void 0);
            T(this, vt, void 0);
            T(this, de, void 0);
            H(this, "ttl");
            H(this, "ttlResolution");
            H(this, "ttlAutopurge");
            H(this, "updateAgeOnGet");
            H(this, "updateAgeOnHas");
            H(this, "allowStale");
            H(this, "noDisposeOnSet");
            H(this, "noUpdateTTL");
            H(this, "maxEntrySize");
            H(this, "sizeCalculation");
            H(this, "noDeleteOnFetchRejection");
            H(this, "noDeleteOnStaleGet");
            H(this, "allowStaleOnFetchAbort");
            H(this, "allowStaleOnFetchRejection");
            H(this, "ignoreFetchAbort");
            T(this, G, void 0);
            T(this, Ct, void 0);
            T(this, V, void 0);
            T(this, q, void 0);
            T(this, S, void 0);
            T(this, it, void 0);
            T(this, dt, void 0);
            T(this, nt, void 0);
            T(this, Q, void 0);
            T(this, At, void 0);
            T(this, K, void 0);
            T(this, wt, void 0);
            T(this, Et, void 0);
            T(this, pt, void 0);
            T(this, Ft, void 0);
            T(this, Wt, void 0);
            T(this, ot, void 0);
            T(this, Yt, () => {});
            T(this, Mt, () => {});
            T(this, Ee, () => {});
            T(this, ft, () => !1);
            T(this, te, e => {});
            T(this, pe, (e, n, r) => {});
            T(this, Fe, (e, n, r, i) => {
                if (r || i) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
                return 0;
            });
            H(this, ta, "LRUCache");
            const {
                max: n = 0,
                ttl: r,
                ttlResolution: i = 1,
                ttlAutopurge: o,
                updateAgeOnGet: a,
                updateAgeOnHas: l,
                allowStale: s,
                dispose: c,
                disposeAfter: d,
                noDisposeOnSet: p,
                noUpdateTTL: f,
                maxSize: h = 0,
                maxEntrySize: g = 0,
                sizeCalculation: x,
                fetchMethod: _,
                noDeleteOnFetchRejection: m,
                noDeleteOnStaleGet: b,
                allowStaleOnFetchRejection: y,
                allowStaleOnFetchAbort: D,
                ignoreFetchAbort: k
            } = e;
            if (n !== 0 && !Ht(n)) throw new TypeError("max option must be a nonnegative integer");
            const w = n ? ii(n) : Array;
            if (!w) throw new Error("invalid max value: " + n);
            if (E(this, yt, n), E(this, ht, h), this.maxEntrySize = g || u(this, ht), 
            this.sizeCalculation = x, this.sizeCalculation) {
                if (!u(this, ht) && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
            }
            if (_ !== void 0 && typeof _ != "function") throw new TypeError("fetchMethod must be a function if specified");
            if (E(this, de, _), E(this, Wt, !!_), E(this, V, new Map()), E(this, q, new Array(n).fill(void 0)), 
            E(this, S, new Array(n).fill(void 0)), E(this, it, new w(n)), E(this, dt, new w(n)), 
            E(this, nt, 0), E(this, Q, 0), E(this, At, Bn.create(n)), E(this, G, 0), 
            E(this, Ct, 0), typeof c == "function" && E(this, kt, c), typeof d == "function" ? (E(this, vt, d), 
            E(this, K, [])) : (E(this, vt, void 0), E(this, K, void 0)), E(this, Ft, !!u(this, kt)), 
            E(this, ot, !!u(this, vt)), this.noDisposeOnSet = !!p, this.noUpdateTTL = !!f, 
            this.noDeleteOnFetchRejection = !!m, this.allowStaleOnFetchRejection = !!y, 
            this.allowStaleOnFetchAbort = !!D, this.ignoreFetchAbort = !!k, this.maxEntrySize !== 0) {
                if (u(this, ht) !== 0 && !Ht(u(this, ht))) throw new TypeError("maxSize must be a positive integer if specified");
                if (!Ht(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
                A(this, nn, Qi).call(this);
            }
            if (this.allowStale = !!s, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!a, 
            this.updateAgeOnHas = !!l, this.ttlResolution = Ht(i) || i === 0 ? i : 1, 
            this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
                if (!Ht(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
                A(this, we, nr).call(this);
            }
            if (u(this, yt) === 0 && this.ttl === 0 && u(this, ht) === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
            if (!this.ttlAutopurge && !u(this, yt) && !u(this, ht)) {
                const F = "LRU_CACHE_UNBOUNDED";
                (v => !ei.has(v))(F) && (ei.add(F), ni("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", F, Zn));
            }
        }
        static unsafeExposeInternals(e) {
            return {
                starts: u(e, Et),
                ttls: u(e, pt),
                sizes: u(e, wt),
                keyMap: u(e, V),
                keyList: u(e, q),
                valList: u(e, S),
                next: u(e, it),
                prev: u(e, dt),
                get head() {
                    return u(e, nt);
                },
                get tail() {
                    return u(e, Q);
                },
                free: u(e, At),
                isBackgroundFetch: n => {
                    var r;
                    return A(r = e, $, P).call(r, n);
                },
                backgroundFetch: (n, r, i, o) => {
                    var a;
                    return A(a = e, me, dn).call(a, n, r, i, o);
                },
                moveToTail: n => {
                    var r;
                    return A(r = e, ee, Be).call(r, n);
                },
                indexes: n => {
                    var r;
                    return A(r = e, Lt, Vt).call(r, n);
                },
                rindexes: n => {
                    var r;
                    return A(r = e, Bt, Gt).call(r, n);
                },
                isStale: n => {
                    var r;
                    return u(r = e, ft).call(r, n);
                }
            };
        }
        get max() {
            return u(this, yt);
        }
        get maxSize() {
            return u(this, ht);
        }
        get calculatedSize() {
            return u(this, Ct);
        }
        get size() {
            return u(this, G);
        }
        get fetchMethod() {
            return u(this, de);
        }
        get dispose() {
            return u(this, kt);
        }
        get disposeAfter() {
            return u(this, vt);
        }
        getRemainingTTL(e) {
            return u(this, V).has(e) ? 1 / 0 : 0;
        }
        *entries() {
            for (const e of A(this, Lt, Vt).call(this)) u(this, S)[e] === void 0 || u(this, q)[e] === void 0 || A(this, $, P).call(this, u(this, S)[e]) || (yield [ u(this, q)[e], u(this, S)[e] ]);
        }
        *rentries() {
            for (const e of A(this, Bt, Gt).call(this)) u(this, S)[e] === void 0 || u(this, q)[e] === void 0 || A(this, $, P).call(this, u(this, S)[e]) || (yield [ u(this, q)[e], u(this, S)[e] ]);
        }
        *keys() {
            for (const e of A(this, Lt, Vt).call(this)) {
                const n = u(this, q)[e];
                n === void 0 || A(this, $, P).call(this, u(this, S)[e]) || (yield n);
            }
        }
        *rkeys() {
            for (const e of A(this, Bt, Gt).call(this)) {
                const n = u(this, q)[e];
                n === void 0 || A(this, $, P).call(this, u(this, S)[e]) || (yield n);
            }
        }
        *values() {
            for (const e of A(this, Lt, Vt).call(this)) u(this, S)[e] === void 0 || A(this, $, P).call(this, u(this, S)[e]) || (yield u(this, S)[e]);
        }
        *rvalues() {
            for (const e of A(this, Bt, Gt).call(this)) u(this, S)[e] === void 0 || A(this, $, P).call(this, u(this, S)[e]) || (yield u(this, S)[e]);
        }
        [Symbol.iterator]() {
            return this.entries();
        }
        find(e, n = {}) {
            for (const r of A(this, Lt, Vt).call(this)) {
                const i = u(this, S)[r], o = A(this, $, P).call(this, i) ? i.__staleWhileFetching : i;
                if (o !== void 0 && e(o, u(this, q)[r], this)) return this.get(u(this, q)[r], n);
            }
        }
        forEach(e, n = this) {
            for (const r of A(this, Lt, Vt).call(this)) {
                const i = u(this, S)[r], o = A(this, $, P).call(this, i) ? i.__staleWhileFetching : i;
                o !== void 0 && e.call(n, o, u(this, q)[r], this);
            }
        }
        rforEach(e, n = this) {
            for (const r of A(this, Bt, Gt).call(this)) {
                const i = u(this, S)[r], o = A(this, $, P).call(this, i) ? i.__staleWhileFetching : i;
                o !== void 0 && e.call(n, o, u(this, q)[r], this);
            }
        }
        purgeStale() {
            let e = !1;
            for (const n of A(this, Bt, Gt).call(this, {
                allowStale: !0
            })) u(this, ft).call(this, n) && (this.delete(u(this, q)[n]), e = !0);
            return e;
        }
        info(e) {
            const n = u(this, V).get(e);
            if (n === void 0) return;
            const r = u(this, S)[n], i = A(this, $, P).call(this, r) ? r.__staleWhileFetching : r;
            if (i === void 0) return;
            const o = {
                value: i
            };
            if (u(this, pt) && u(this, Et)) {
                const a = u(this, pt)[n], l = u(this, Et)[n];
                if (a && l) {
                    const s = a - (ue.now() - l);
                    o.ttl = s, o.start = Date.now();
                }
            }
            return u(this, wt) && (o.size = u(this, wt)[n]), o;
        }
        dump() {
            const e = [];
            for (const n of A(this, Lt, Vt).call(this, {
                allowStale: !0
            })) {
                const r = u(this, q)[n], i = u(this, S)[n], o = A(this, $, P).call(this, i) ? i.__staleWhileFetching : i;
                if (o === void 0 || r === void 0) continue;
                const a = {
                    value: o
                };
                if (u(this, pt) && u(this, Et)) {
                    a.ttl = u(this, pt)[n];
                    const l = ue.now() - u(this, Et)[n];
                    a.start = Math.floor(Date.now() - l);
                }
                u(this, wt) && (a.size = u(this, wt)[n]), e.unshift([ r, a ]);
            }
            return e;
        }
        load(e) {
            this.clear();
            for (const [ n, r ] of e) {
                if (r.start) {
                    const i = Date.now() - r.start;
                    r.start = ue.now() - i;
                }
                this.set(n, r.value, r);
            }
        }
        set(e, n, r = {}) {
            var f, h, g, x, _;
            if (n === void 0) return this.delete(e), this;
            const {
                ttl: i = this.ttl,
                start: o,
                noDisposeOnSet: a = this.noDisposeOnSet,
                sizeCalculation: l = this.sizeCalculation,
                status: s
            } = r;
            let {
                noUpdateTTL: c = this.noUpdateTTL
            } = r;
            const d = u(this, Fe).call(this, e, n, r.size || 0, l);
            if (this.maxEntrySize && d > this.maxEntrySize) return s && (s.set = "miss", 
            s.maxEntrySizeExceeded = !0), this.delete(e), this;
            let p = u(this, G) === 0 ? void 0 : u(this, V).get(e);
            if (p === void 0) p = u(this, G) === 0 ? u(this, Q) : u(this, At).length !== 0 ? u(this, At).pop() : u(this, G) === u(this, yt) ? A(this, fe, hn).call(this, !1) : u(this, G), 
            u(this, q)[p] = e, u(this, S)[p] = n, u(this, V).set(e, p), u(this, it)[u(this, Q)] = p, 
            u(this, dt)[p] = u(this, Q), E(this, Q, p), on(this, G)._++, u(this, pe).call(this, p, d, s), 
            s && (s.set = "add"), c = !1; else {
                A(this, ee, Be).call(this, p);
                const m = u(this, S)[p];
                if (n !== m) {
                    if (u(this, Wt) && A(this, $, P).call(this, m)) {
                        m.__abortController.abort(new Error("replaced"));
                        const {
                            __staleWhileFetching: b
                        } = m;
                        b === void 0 || a || (u(this, Ft) && ((f = u(this, kt)) == null || f.call(this, b, e, "set")), 
                        u(this, ot) && ((h = u(this, K)) == null || h.push([ b, e, "set" ])));
                    } else a || (u(this, Ft) && ((g = u(this, kt)) == null || g.call(this, m, e, "set")), 
                    u(this, ot) && ((x = u(this, K)) == null || x.push([ m, e, "set" ])));
                    if (u(this, te).call(this, p), u(this, pe).call(this, p, d, s), 
                    u(this, S)[p] = n, s) {
                        s.set = "replace";
                        const b = m && A(this, $, P).call(this, m) ? m.__staleWhileFetching : m;
                        b !== void 0 && (s.oldValue = b);
                    }
                } else s && (s.set = "update");
            }
            if (i === 0 || u(this, pt) || A(this, we, nr).call(this), u(this, pt) && (c || u(this, Ee).call(this, p, i, o), 
            s && u(this, Mt).call(this, s, p)), !a && u(this, ot) && u(this, K)) {
                const m = u(this, K);
                let b;
                for (;b = m == null ? void 0 : m.shift(); ) (_ = u(this, vt)) == null || _.call(this, ...b);
            }
            return this;
        }
        pop() {
            var e;
            try {
                for (;u(this, G); ) {
                    const n = u(this, S)[u(this, nt)];
                    if (A(this, fe, hn).call(this, !0), A(this, $, P).call(this, n)) {
                        if (n.__staleWhileFetching) return n.__staleWhileFetching;
                    } else if (n !== void 0) return n;
                }
            } finally {
                if (u(this, ot) && u(this, K)) {
                    const n = u(this, K);
                    let r;
                    for (;r = n == null ? void 0 : n.shift(); ) (e = u(this, vt)) == null || e.call(this, ...r);
                }
            }
        }
        has(e, n = {}) {
            const {
                updateAgeOnHas: r = this.updateAgeOnHas,
                status: i
            } = n, o = u(this, V).get(e);
            if (o !== void 0) {
                const a = u(this, S)[o];
                if (A(this, $, P).call(this, a) && a.__staleWhileFetching === void 0) return !1;
                if (!u(this, ft).call(this, o)) return r && u(this, Yt).call(this, o), 
                i && (i.has = "hit", u(this, Mt).call(this, i, o)), !0;
                i && (i.has = "stale", u(this, Mt).call(this, i, o));
            } else i && (i.has = "miss");
            return !1;
        }
        peek(e, n = {}) {
            const {
                allowStale: r = this.allowStale
            } = n, i = u(this, V).get(e);
            if (i === void 0 || !r && u(this, ft).call(this, i)) return;
            const o = u(this, S)[i];
            return A(this, $, P).call(this, o) ? o.__staleWhileFetching : o;
        }
        async fetch(e, n = {}) {
            const {
                allowStale: r = this.allowStale,
                updateAgeOnGet: i = this.updateAgeOnGet,
                noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
                ttl: a = this.ttl,
                noDisposeOnSet: l = this.noDisposeOnSet,
                size: s = 0,
                sizeCalculation: c = this.sizeCalculation,
                noUpdateTTL: d = this.noUpdateTTL,
                noDeleteOnFetchRejection: p = this.noDeleteOnFetchRejection,
                allowStaleOnFetchRejection: f = this.allowStaleOnFetchRejection,
                ignoreFetchAbort: h = this.ignoreFetchAbort,
                allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort,
                context: x,
                forceRefresh: _ = !1,
                status: m,
                signal: b
            } = n;
            if (!u(this, Wt)) return m && (m.fetch = "get"), this.get(e, {
                allowStale: r,
                updateAgeOnGet: i,
                noDeleteOnStaleGet: o,
                status: m
            });
            const y = {
                allowStale: r,
                updateAgeOnGet: i,
                noDeleteOnStaleGet: o,
                ttl: a,
                noDisposeOnSet: l,
                size: s,
                sizeCalculation: c,
                noUpdateTTL: d,
                noDeleteOnFetchRejection: p,
                allowStaleOnFetchRejection: f,
                allowStaleOnFetchAbort: g,
                ignoreFetchAbort: h,
                status: m,
                signal: b
            };
            let D = u(this, V).get(e);
            if (D === void 0) {
                m && (m.fetch = "miss");
                const k = A(this, me, dn).call(this, e, D, y, x);
                return k.__returned = k;
            }
            {
                const k = u(this, S)[D];
                if (A(this, $, P).call(this, k)) {
                    const z = r && k.__staleWhileFetching !== void 0;
                    return m && (m.fetch = "inflight", z && (m.returnedStale = !0)), 
                    z ? k.__staleWhileFetching : k.__returned = k;
                }
                const w = u(this, ft).call(this, D);
                if (!_ && !w) return m && (m.fetch = "hit"), A(this, ee, Be).call(this, D), 
                i && u(this, Yt).call(this, D), m && u(this, Mt).call(this, m, D), 
                k;
                const F = A(this, me, dn).call(this, e, D, y, x), v = F.__staleWhileFetching !== void 0 && r;
                return m && (m.fetch = w ? "stale" : "refresh", v && w && (m.returnedStale = !0)), 
                v ? F.__staleWhileFetching : F.__returned = F;
            }
        }
        get(e, n = {}) {
            const {
                allowStale: r = this.allowStale,
                updateAgeOnGet: i = this.updateAgeOnGet,
                noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
                status: a
            } = n, l = u(this, V).get(e);
            if (l !== void 0) {
                const s = u(this, S)[l], c = A(this, $, P).call(this, s);
                return a && u(this, Mt).call(this, a, l), u(this, ft).call(this, l) ? (a && (a.get = "stale"), 
                c ? (a && r && s.__staleWhileFetching !== void 0 && (a.returnedStale = !0), 
                r ? s.__staleWhileFetching : void 0) : (o || this.delete(e), a && r && (a.returnedStale = !0), 
                r ? s : void 0)) : (a && (a.get = "hit"), c ? s.__staleWhileFetching : (A(this, ee, Be).call(this, l), 
                i && u(this, Yt).call(this, l), s));
            }
            a && (a.get = "miss");
        }
        delete(e) {
            var r, i, o, a;
            let n = !1;
            if (u(this, G) !== 0) {
                const l = u(this, V).get(e);
                if (l !== void 0) if (n = !0, u(this, G) === 1) this.clear(); else {
                    u(this, te).call(this, l);
                    const s = u(this, S)[l];
                    if (A(this, $, P).call(this, s) ? s.__abortController.abort(new Error("deleted")) : (u(this, Ft) || u(this, ot)) && (u(this, Ft) && ((r = u(this, kt)) == null || r.call(this, s, e, "delete")), 
                    u(this, ot) && ((i = u(this, K)) == null || i.push([ s, e, "delete" ]))), 
                    u(this, V).delete(e), u(this, q)[l] = void 0, u(this, S)[l] = void 0, 
                    l === u(this, Q)) E(this, Q, u(this, dt)[l]); else if (l === u(this, nt)) E(this, nt, u(this, it)[l]); else {
                        const c = u(this, dt)[l];
                        u(this, it)[c] = u(this, it)[l];
                        const d = u(this, it)[l];
                        u(this, dt)[d] = u(this, dt)[l];
                    }
                    on(this, G)._--, u(this, At).push(l);
                }
            }
            if (u(this, ot) && ((o = u(this, K)) != null && o.length)) {
                const l = u(this, K);
                let s;
                for (;s = l == null ? void 0 : l.shift(); ) (a = u(this, vt)) == null || a.call(this, ...s);
            }
            return n;
        }
        clear() {
            var e, n, r;
            for (const i of A(this, Bt, Gt).call(this, {
                allowStale: !0
            })) {
                const o = u(this, S)[i];
                if (A(this, $, P).call(this, o)) o.__abortController.abort(new Error("deleted")); else {
                    const a = u(this, q)[i];
                    u(this, Ft) && ((e = u(this, kt)) == null || e.call(this, o, a, "delete")), 
                    u(this, ot) && ((n = u(this, K)) == null || n.push([ o, a, "delete" ]));
                }
            }
            if (u(this, V).clear(), u(this, S).fill(void 0), u(this, q).fill(void 0), 
            u(this, pt) && u(this, Et) && (u(this, pt).fill(0), u(this, Et).fill(0)), 
            u(this, wt) && u(this, wt).fill(0), E(this, nt, 0), E(this, Q, 0), u(this, At).length = 0, 
            E(this, Ct, 0), E(this, G, 0), u(this, ot) && u(this, K)) {
                const i = u(this, K);
                let o;
                for (;o = i == null ? void 0 : i.shift(); ) (r = u(this, vt)) == null || r.call(this, ...o);
            }
        }
    };
    ta = Symbol.toStringTag, yt = new WeakMap(), ht = new WeakMap(), kt = new WeakMap(), 
    vt = new WeakMap(), de = new WeakMap(), G = new WeakMap(), Ct = new WeakMap(), 
    V = new WeakMap(), q = new WeakMap(), S = new WeakMap(), it = new WeakMap(), 
    dt = new WeakMap(), nt = new WeakMap(), Q = new WeakMap(), At = new WeakMap(), 
    K = new WeakMap(), wt = new WeakMap(), Et = new WeakMap(), pt = new WeakMap(), 
    Ft = new WeakMap(), Wt = new WeakMap(), ot = new WeakMap(), we = new WeakSet(), 
    nr = function() {
        const e = new Ge(u(this, yt)), n = new Ge(u(this, yt));
        E(this, pt, e), E(this, Et, n), E(this, Ee, (o, a, l = ue.now()) => {
            if (n[o] = a !== 0 ? l : 0, e[o] = a, a !== 0 && this.ttlAutopurge) {
                const s = setTimeout(() => {
                    u(this, ft).call(this, o) && this.delete(u(this, q)[o]);
                }, a + 1);
                s.unref && s.unref();
            }
        }), E(this, Yt, o => {
            n[o] = e[o] !== 0 ? ue.now() : 0;
        }), E(this, Mt, (o, a) => {
            if (e[a]) {
                const l = e[a], s = n[a];
                if (!l || !s) return;
                o.ttl = l, o.start = s, o.now = r || i();
                const c = o.now - s;
                o.remainingTTL = l - c;
            }
        });
        let r = 0;
        const i = () => {
            const o = ue.now();
            if (this.ttlResolution > 0) {
                r = o;
                const a = setTimeout(() => r = 0, this.ttlResolution);
                a.unref && a.unref();
            }
            return o;
        };
        this.getRemainingTTL = o => {
            const a = u(this, V).get(o);
            if (a === void 0) return 0;
            const l = e[a], s = n[a];
            return !l || !s ? 1 / 0 : l - ((r || i()) - s);
        }, E(this, ft, o => {
            const a = n[o], l = e[o];
            return !!l && !!a && (r || i()) - a > l;
        });
    }, Yt = new WeakMap(), Mt = new WeakMap(), Ee = new WeakMap(), ft = new WeakMap(), 
    nn = new WeakSet(), Qi = function() {
        const e = new Ge(u(this, yt));
        E(this, Ct, 0), E(this, wt, e), E(this, te, n => {
            E(this, Ct, u(this, Ct) - e[n]), e[n] = 0;
        }), E(this, Fe, (n, r, i, o) => {
            if (A(this, $, P).call(this, r)) return 0;
            if (!Ht(i)) {
                if (!o) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                if (typeof o != "function") throw new TypeError("sizeCalculation must be a function");
                if (i = o(r, n), !Ht(i)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            }
            return i;
        }), E(this, pe, (n, r, i) => {
            if (e[n] = r, u(this, ht)) {
                const o = u(this, ht) - e[n];
                for (;u(this, Ct) > o; ) A(this, fe, hn).call(this, !0);
            }
            E(this, Ct, u(this, Ct) + e[n]), i && (i.entrySize = r, i.totalCalculatedSize = u(this, Ct));
        });
    }, te = new WeakMap(), pe = new WeakMap(), Fe = new WeakMap(), Lt = new WeakSet(), 
    Vt = function*({
        allowStale: e = this.allowStale
    } = {}) {
        if (u(this, G)) for (let n = u(this, Q); A(this, Se, rr).call(this, n) && (!e && u(this, ft).call(this, n) || (yield n), 
        n !== u(this, nt)); ) n = u(this, dt)[n];
    }, Bt = new WeakSet(), Gt = function*({
        allowStale: e = this.allowStale
    } = {}) {
        if (u(this, G)) for (let n = u(this, nt); A(this, Se, rr).call(this, n) && (!e && u(this, ft).call(this, n) || (yield n), 
        n !== u(this, Q)); ) n = u(this, it)[n];
    }, Se = new WeakSet(), rr = function(e) {
        return e !== void 0 && u(this, V).get(u(this, q)[e]) === e;
    }, fe = new WeakSet(), hn = function(e) {
        var o, a;
        const n = u(this, nt), r = u(this, q)[n], i = u(this, S)[n];
        return u(this, Wt) && A(this, $, P).call(this, i) ? i.__abortController.abort(new Error("evicted")) : (u(this, Ft) || u(this, ot)) && (u(this, Ft) && ((o = u(this, kt)) == null || o.call(this, i, r, "evict")), 
        u(this, ot) && ((a = u(this, K)) == null || a.push([ i, r, "evict" ]))), 
        u(this, te).call(this, n), e && (u(this, q)[n] = void 0, u(this, S)[n] = void 0, 
        u(this, At).push(n)), u(this, G) === 1 ? (E(this, nt, E(this, Q, 0)), u(this, At).length = 0) : E(this, nt, u(this, it)[n]), 
        u(this, V).delete(r), on(this, G)._--, n;
    }, me = new WeakSet(), dn = function(e, n, r, i) {
        const o = n === void 0 ? void 0 : u(this, S)[n];
        if (A(this, $, P).call(this, o)) return o;
        const a = new Ve(), {
            signal: l
        } = r;
        l == null || l.addEventListener("abort", () => a.abort(l.reason), {
            signal: a.signal
        });
        const s = {
            signal: a.signal,
            options: r,
            context: i
        }, c = (h, g = !1) => {
            const {
                aborted: x
            } = a.signal, _ = r.ignoreFetchAbort && h !== void 0;
            if (r.status && (x && !g ? (r.status.fetchAborted = !0, r.status.fetchError = a.signal.reason, 
            _ && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), 
            x && !_ && !g) return d(a.signal.reason);
            const m = p;
            return u(this, S)[n] === p && (h === void 0 ? m.__staleWhileFetching ? u(this, S)[n] = m.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), 
            this.set(e, h, s.options))), h;
        }, d = h => {
            const {
                aborted: g
            } = a.signal, x = g && r.allowStaleOnFetchAbort, _ = x || r.allowStaleOnFetchRejection, m = _ || r.noDeleteOnFetchRejection, b = p;
            if (u(this, S)[n] === p && (!m || b.__staleWhileFetching === void 0 ? this.delete(e) : x || (u(this, S)[n] = b.__staleWhileFetching)), 
            _) return r.status && b.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), 
            b.__staleWhileFetching;
            if (b.__returned === b) throw h;
        };
        r.status && (r.status.fetchDispatched = !0);
        const p = new Promise((h, g) => {
            var _;
            const x = (_ = u(this, de)) == null ? void 0 : _.call(this, e, o, s);
            x && x instanceof Promise && x.then(m => h(m === void 0 ? void 0 : m), g), 
            a.signal.addEventListener("abort", () => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (h(void 0), r.allowStaleOnFetchAbort && (h = m => c(m, !0)));
            });
        }).then(c, h => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = h), 
        d(h))), f = Object.assign(p, {
            __abortController: a,
            __staleWhileFetching: o,
            __returned: void 0
        });
        return n === void 0 ? (this.set(e, f, {
            ...s.options,
            status: void 0
        }), n = u(this, V).get(e)) : u(this, S)[n] = f, f;
    }, $ = new WeakSet(), P = function(e) {
        if (!u(this, Wt)) return !1;
        const n = e;
        return !!n && n instanceof Promise && n.hasOwnProperty("__staleWhileFetching") && n.__abortController instanceof Ve;
    }, ze = new WeakSet(), ir = function(e, n) {
        u(this, dt)[n] = e, u(this, it)[e] = n;
    }, ee = new WeakSet(), Be = function(e) {
        e !== u(this, Q) && (e === u(this, nt) ? E(this, nt, u(this, it)[e]) : A(this, ze, ir).call(this, u(this, dt)[e], u(this, it)[e]), 
        A(this, ze, ir).call(this, u(this, Q), e), E(this, Q, e));
    };
    let On = Zn;
    function _s(t, e) {
        for (var n = 0; n < e.length; n++) {
            const r = e[n];
            if (typeof r != "string" && !Array.isArray(r)) {
                for (const i in r) if (i !== "default" && !(i in t)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(t, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    });
                }
            }
        }
        return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }));
    }
    const xs = t => {
        const e = ct("highlight"), n = ln(St.editorExtensions.highlight.instance);
        return mt(() => {
            t.noHighlight || n.value || (st("link", {
                ...e.value.css,
                rel: "stylesheet",
                id: `${C}-hlCss`
            }), st("script", {
                ...e.value.js,
                id: `${C}-hljs`,
                onload() {
                    n.value = window.hljs;
                }
            }, "hljs"));
        }), et(() => e.value.css, () => {
            t.noHighlight || ((r, i) => {
                const o = document.getElementById(i.id);
                o == null || o.remove(), st(r, i);
            })("link", {
                ...e.value.css,
                rel: "stylesheet",
                id: `${C}-hlCss`
            });
        }), n;
    }, Ds = (t, e) => {
        const n = t.renderer.rules.fence.bind(t.renderer.rules);
        t.renderer.rules.fence = (r, i, o, a, l) => {
            const s = r[i], c = s.content.trim();
            if (s.info === "mermaid") {
                let d;
                return r[i].map && r[i].level === 0 && (d = r[i].map[0], r[i].attrSet("data-line", String(d))), 
                `<div class="${C}-mermaid" ${d !== void 0 ? "data-line=" + d : ""} data-mermaid-theme=${e.themeRef.value}>${c}</div>`;
            }
            return n(r, i, o, a, l);
        };
    }, Xe = (t, e) => {
        const n = t.attrs ? t.attrs.slice() : [];
        return e.forEach(r => {
            const i = t.attrIndex(r[0]);
            i < 0 ? n.push(r) : (n[i] = n[i].slice(), n[i][1] += ` ${r[1]}`);
        }), n;
    }, oi = (t, e) => {
        let n = !0, r = !0;
        const i = t.posMax, o = e > 0 ? t.src.charCodeAt(e - 1) : -1, a = e + 1 <= i ? t.src.charCodeAt(e + 1) : -1;
        return (o === 32 || o === 9 || a >= 48 && a <= 57) && (r = !1), a !== 32 && a !== 9 || (n = !1), 
        {
            can_open: n,
            can_close: r
        };
    }, ys = (t, e) => {
        let n, r, i, o;
        if (t.src[t.pos] !== "$") return !1;
        if (i = oi(t, t.pos), !i.can_open) return e || (t.pending += "$"), t.pos += 1, 
        !0;
        const a = t.pos + 1;
        for (n = a; (n = t.src.indexOf("$", n)) !== -1; ) {
            for (o = n - 1; t.src[o] === "\\"; ) o -= 1;
            if ((n - o) % 2 == 1) break;
            n += 1;
        }
        return n === -1 ? (e || (t.pending += "$"), t.pos = a, !0) : n - a == 0 ? (e || (t.pending += "$$"), 
        t.pos = a + 1, !0) : (i = oi(t, n), i.can_close ? (e || (r = t.push("math_inline", "math", 0), 
        r.markup = "$", r.content = t.src.slice(a, n)), t.pos = n + 1, !0) : (e || (t.pending += "$"), 
        t.pos = a, !0));
    }, ks = (t, e, n, r) => {
        let i, o, a, l, s = !1, c = t.bMarks[e] + t.tShift[e], d = t.eMarks[e];
        if (c + 2 > d || t.src.slice(c, c + 2) !== "$$") return !1;
        if (c += 2, i = t.src.slice(c, d), r) return !0;
        for (i.trim().slice(-2) === "$$" && (i = i.trim().slice(0, -2), s = !0), 
        a = e; !s && (a++, !(a >= n)) && (c = t.bMarks[a] + t.tShift[a], d = t.eMarks[a], 
        !(c < d && t.tShift[a] < t.blkIndent)); ) t.src.slice(c, d).trim().slice(-2) === "$$" && (l = t.src.slice(0, d).lastIndexOf("$$"), 
        o = t.src.slice(c, l), s = !0);
        t.line = a + 1;
        const p = t.push("math_block", "math", 0);
        return p.block = !0, p.content = (i && i.trim() ? i + `
` : "") + t.getLines(e + 1, a, t.tShift[e], !0) + (o && o.trim() ? o : ""), p.map = [ e, t.line ], 
        p.markup = "$$", !0;
    }, vs = (t, {
        katexRef: e
    }) => {
        t.inline.ruler.after("escape", "math_inline", ys), t.block.ruler.after("blockquote", "math_block", ks, {
            alt: [ "paragraph", "reference", "blockquote", "list" ]
        }), t.renderer.rules.math_inline = (n, r, i, o, a) => {
            const l = n[r], s = {
                attrs: Xe(l, [ [ "class", `${C}-katex-inline` ] ])
            };
            if (e.value) {
                const c = e.value.renderToString(l.content, {
                    throwOnError: !1
                });
                return `<span ${a.renderAttrs(s)} data-processed>${c}</span>`;
            }
            return `<span ${a.renderAttrs(s)}>${l.content}</span>`;
        }, t.renderer.rules.math_block = (n, r, i, o, a) => {
            const l = n[r], s = {
                attrs: Xe(l, [ [ "class", `${C}-katex-block` ] ])
            };
            if (e.value) {
                const c = e.value.renderToString(l.content, {
                    throwOnError: !1,
                    displayMode: !0
                });
                return `<p ${a.renderAttrs(s)} data-processed>${c}</p>`;
            }
            return `<p ${a.renderAttrs(s)}>${l.content}</p>`;
        };
    }, Cs = (t, e) => {
        const n = (e = e || {}).marker || "!", r = n.charCodeAt(0), i = n.length;
        let o = "", a = "";
        const l = (s, c, d, p, f) => {
            const h = s[c];
            return h.type === "admonition_open" ? s[c].attrPush([ "class", `${C}-admonition ${C}-admonition-${h.info}` ]) : h.type === "admonition_title_open" && s[c].attrPush([ "class", `${C}-admonition-title` ]), 
            f.renderToken(s, c, d);
        };
        t.block.ruler.before("code", "admonition", (s, c, d, p) => {
            let f, h, g, x = !1, _ = s.bMarks[c] + s.tShift[c], m = s.eMarks[c];
            if (r !== s.src.charCodeAt(_)) return !1;
            for (f = _ + 1; f <= m && n[(f - _) % i] === s.src[f]; f++);
            const b = Math.floor((f - _) / i);
            if (b !== 3) return !1;
            f -= (f - _) % i;
            const y = s.src.slice(_, f);
            if ((w => {
                const F = w.trim().split(" ", 2);
                a = "", o = F[0], F.length > 1 && (a = w.substring(o.length + 2));
            })(s.src.slice(f, m)), p) return !0;
            for (h = c; h++, !(h >= d) && (_ = s.bMarks[h] + s.tShift[h], m = s.eMarks[h], 
            !(_ < m && s.sCount[h] < s.blkIndent)); ) if (r === s.src.charCodeAt(_) && !(s.sCount[h] - s.blkIndent >= 4)) {
                for (f = _ + 1; f <= m && n[(f - _) % i] === s.src[f]; f++);
                if (!(Math.floor((f - _) / i) < b || (f -= (f - _) % i, f = s.skipSpaces(f), 
                f < m))) {
                    x = !0;
                    break;
                }
            }
            const D = s.parentType, k = s.lineMax;
            return s.parentType = "root", s.lineMax = h, g = s.push("admonition_open", "div", 1), 
            g.markup = y, g.block = !0, g.info = o, g.map = [ c, h ], a && (g = s.push("admonition_title_open", "p", 1), 
            g.markup = y + " " + o, g.map = [ c, h ], g = s.push("inline", "", 0), 
            g.content = a, g.map = [ c, s.line - 1 ], g.children = [], g = s.push("admonition_title_close", "p", -1), 
            g.markup = y + " " + o), s.md.block.tokenize(s, c + 1, h), g = s.push("admonition_close", "div", -1), 
            g.markup = s.src.slice(_, f), g.block = !0, s.parentType = D, s.lineMax = k, 
            s.line = h + (x ? 1 : 0), !0;
        }, {
            alt: [ "paragraph", "reference", "blockquote", "list" ]
        }), t.renderer.rules.admonition_open = l, t.renderer.rules.admonition_title_open = l, 
        t.renderer.rules.admonition_title_close = l, t.renderer.rules.admonition_close = l;
    }, As = (t, e) => {
        t.renderer.rules.heading_open = (n, r) => {
            var i;
            const o = n[r], a = ((i = n[r + 1].children) == null ? void 0 : i.reduce((s, c) => s + ([ "text", "code_inline" ].includes(c.type) && c.content || ""), "")) || "", l = o.markup.length;
            return e.headsRef.value.push({
                text: a,
                level: l
            }), o.map && o.level === 0 && o.attrSet("id", e.mdHeadingId(a, l, e.headsRef.value.length)), 
            t.renderer.renderToken(n, r, e);
        }, t.renderer.rules.heading_close = (n, r, i, o, a) => a.renderToken(n, r, i);
    }, ws = (t, e) => {
        if (typeof e[t] == "string") return e[t];
        const n = `<i class="${C}-iconfont ${C}-icon-${t}"></i>`;
        return St.iconfontType === "svg" ? `<svg class="${C}-icon" aria-hidden="true"><use xlink:href="#${C}-icon-${t}"></use></svg>` : n;
    }, Es = (t, e) => {
        const n = t.renderer.rules.fence, r = t.utils.unescapeAll, i = /\[(\w*)(?::([\w ]*))?\]/, o = /::(open|close)/, a = p => p.info ? r(p.info).trim() : "", l = p => {
            const f = a(p), [ h = null, g = "" ] = (i.exec(f) || []).slice(1);
            return [ h, g ];
        }, s = p => {
            const f = a(p);
            return f ? f.split(/(\s+)/g)[0] : "";
        }, c = p => {
            const f = p.info.match(o) || [];
            return {
                open: f[1] === "open" || f[1] !== "close" && e.codeFoldable && p.content.trim().split(`
`).length < e.autoFoldThreshold,
                tagContainer: f[1] || e.codeFoldable ? "details" : "div",
                tagHeader: f[1] || e.codeFoldable ? "summary" : "div"
            };
        }, d = (p, f, h, g, x) => {
            var _;
            if (p[f].hidden) return "";
            const m = (_ = e.usedLanguageTextRef.value) == null ? void 0 : _.copyCode.text, b = e.customIconRef.value.copy || m, y = !!e.customIconRef.value.copy, D = `<span class="${C}-collapse-tips">${ws("collapse-tips", e.customIconRef.value)}</span>`, [ k ] = l(p[f]);
            if (k === null) {
                const {
                    open: W,
                    tagContainer: Y,
                    tagHeader: tt
                } = c(p[f]), Ot = [ [ "class", `${C}-code` ] ];
                W && Ot.push([ "open", "" ]);
                const ne = {
                    attrs: Xe(p[f], Ot)
                };
                p[f].info = p[f].info.replace(o, "");
                const Vn = n(p, f, h, g, x);
                return `<${Y} ${x.renderAttrs(ne)}>
        <${tt} class="${C}-code-head">
          <div class="${C}-code-flag"><span></span><span></span><span></span></div>
          <div class="${C}-code-action">
            <span class="${C}-code-lang">${p[f].info.trim()}</span>
            <span class="${C}-copy-button" data-tips="${m}"${y ? " data-is-icon=true" : ""}">${b}</span>
            ${Y === "details" ? D : ""}
          </div>
        </${tt}>${Vn}</${Y}>`;
            }
            let w, F, v, z, I = "", U = "", _t = "";
            const {
                open: B,
                tagContainer: rt,
                tagHeader: Z
            } = c(p[f]), xt = [ [ "class", `${C}-code` ] ];
            B && xt.push([ "open", "" ]);
            const lt = {
                attrs: Xe(p[f], xt)
            };
            for (let W = f; W < p.length && (w = p[W], [ F, v ] = l(w), F === k); W++) {
                w.info = w.info.replace(i, "").replace(o, ""), w.hidden = !0;
                const Y = `${C}-codetab-${e.editorId}-${f}-${W - f}`;
                z = W - f > 0 ? "" : "checked", I += `<li>
          <input type="radio" name="${C}-codetab-label-${e.editorId}-${f}" class="${Y}" ${z}>
          <label onclick="document.querySelectorAll('.${Y}').forEach(e => e.click())">${v || s(w)}</label>
        </li>`, U += `<input type="radio" name="${C}-codetab-pre-${e.editorId}-${f}" class="${Y}" ${z}>
      ${n(p, W, h, g, x)}`, _t += `<input type="radio" name="${C}-codetab-lang-${e.editorId}-${f}" class="${Y}" ${z}>
      <span class=${C}-code-lang>${s(w)}</span>`;
            }
            return `<${rt} ${x.renderAttrs(lt)}>
    <${Z} class="${C}-code-head">
      <div class="${C}-code-flag">
        <ul class="${C}-codetab-label">${I}</ul>
      </div>
      <div class="${C}-code-action">
        <span class="${C}-codetab-lang">${_t}</span>
        <span class="${C}-copy-button" data-tips="${m}"${y ? " data-is-icon=true" : ""}">${b}</span>
        ${rt === "details" ? D : ""}
      </div>
    </${Z}>${U}</${rt}>`;
        };
        t.renderer.rules.fence = d, t.renderer.rules.code_block = d;
    };
    function Fs(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    var $n = {
        exports: {}
    }, j = {}, Mn = {
        exports: {}
    }, Qt = {};
    function si() {
        var t = {
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
        return t;
    }
    var Ss = /javascript\s*\:/gim;
    Qt.whiteList = si(), Qt.getDefaultWhiteList = si, Qt.onAttr = function(t, e, n) {}, 
    Qt.onIgnoreAttr = function(t, e, n) {}, Qt.safeAttrValue = function(t, e) {
        return Ss.test(e) ? "" : e;
    };
    var zs = {
        indexOf: function(t, e) {
            var n, r;
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1;
        },
        forEach: function(t, e, n) {
            var r, i;
            if (Array.prototype.forEach) return t.forEach(e, n);
            for (r = 0, i = t.length; r < i; r++) e.call(n, t[r], r, t);
        },
        trim: function(t) {
            return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
        },
        trimRight: function(t) {
            return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "");
        }
    }, Ce = zs, Ts = function(t, e) {
        (t = Ce.trimRight(t))[t.length - 1] !== ";" && (t += ";");
        var n = t.length, r = !1, i = 0, o = 0, a = "";
        function l() {
            if (!r) {
                var d = Ce.trim(t.slice(i, o)), p = d.indexOf(":");
                if (p !== -1) {
                    var f = Ce.trim(d.slice(0, p)), h = Ce.trim(d.slice(p + 1));
                    if (f) {
                        var g = e(i, a.length, f, h, d);
                        g && (a += g + "; ");
                    }
                }
            }
            i = o + 1;
        }
        for (;o < n; o++) {
            var s = t[o];
            if (s === "/" && t[o + 1] === "*") {
                var c = t.indexOf("*/", o + 2);
                if (c === -1) break;
                i = (o = c + 1) + 1, r = !1;
            } else s === "(" ? r = !0 : s === ")" ? r = !1 : s === ";" ? r || l() : s === `
` && l();
        }
        return Ce.trim(a);
    }, Je = Qt, Is = Ts;
    function ai(t) {
        return t == null;
    }
    function li(t) {
        t = function(e) {
            var n = {};
            for (var r in e) n[r] = e[r];
            return n;
        }(t || {}), t.whiteList = t.whiteList || Je.whiteList, t.onAttr = t.onAttr || Je.onAttr, 
        t.onIgnoreAttr = t.onIgnoreAttr || Je.onIgnoreAttr, t.safeAttrValue = t.safeAttrValue || Je.safeAttrValue, 
        this.options = t;
    }
    li.prototype.process = function(t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this.options, n = e.whiteList, r = e.onAttr, i = e.onIgnoreAttr, o = e.safeAttrValue;
        return Is(t, function(a, l, s, c, d) {
            var p = n[s], f = !1;
            if (p === !0 ? f = p : typeof p == "function" ? f = p(c) : p instanceof RegExp && (f = p.test(c)), 
            f !== !0 && (f = !1), c = o(s, c)) {
                var h, g = {
                    position: l,
                    sourcePosition: a,
                    source: d,
                    isWhite: f
                };
                return f ? ai(h = r(s, c, g)) ? s + ":" + c : h : ai(h = i(s, c, g)) ? void 0 : h;
            }
        });
    };
    var Ls = li;
    (function(t, e) {
        var n = Qt, r = Ls;
        for (var i in (e = t.exports = function(o, a) {
            return new r(a).process(o);
        }).FilterCSS = r, n) e[i] = n[i];
        typeof window < "u" && (window.filterCSS = t.exports);
    })(Mn, Mn.exports);
    var Rn = Mn.exports, qn = {
        indexOf: function(t, e) {
            var n, r;
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1;
        },
        forEach: function(t, e, n) {
            var r, i;
            if (Array.prototype.forEach) return t.forEach(e, n);
            for (r = 0, i = t.length; r < i; r++) e.call(n, t[r], r, t);
        },
        trim: function(t) {
            return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
        },
        spaceIndex: function(t) {
            var e = /\s|\n|\t/.exec(t);
            return e ? e.index : -1;
        }
    }, Bs = Rn.FilterCSS, Os = Rn.getDefaultWhiteList, Qe = qn;
    function $s() {
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
            img: [ "src", "alt", "title", "width", "height", "loading" ],
            ins: [ "datetime" ],
            kbd: [],
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
    var ci = new Bs();
    function ui(t) {
        return t.replace(Ms, "&lt;").replace(Rs, "&gt;");
    }
    var Ms = /</g, Rs = />/g, qs = /"/g, Ps = /&quot;/g, Ns = /&#([a-zA-Z0-9]*);?/gim, js = /&colon;?/gim, Hs = /&newline;?/gim, Ke = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, hi = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, di = /u\s*r\s*l\s*\(.*/gi;
    function pi(t) {
        return t.replace(qs, "&quot;");
    }
    function fi(t) {
        return t.replace(Ps, '"');
    }
    function mi(t) {
        return t.replace(Ns, function(e, n) {
            return n[0] === "x" || n[0] === "X" ? String.fromCharCode(parseInt(n.substr(1), 16)) : String.fromCharCode(parseInt(n, 10));
        });
    }
    function gi(t) {
        return t.replace(js, ":").replace(Hs, " ");
    }
    function bi(t) {
        for (var e = "", n = 0, r = t.length; n < r; n++) e += t.charCodeAt(n) < 32 ? " " : t.charAt(n);
        return Qe.trim(e);
    }
    function _i(t) {
        return t = bi(t = gi(t = mi(t = fi(t))));
    }
    function xi(t) {
        return t = ui(t = pi(t));
    }
    j.whiteList = {
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
        img: [ "src", "alt", "title", "width", "height", "loading" ],
        ins: [ "datetime" ],
        kbd: [],
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
    }, j.getDefaultWhiteList = $s, j.onTag = function(t, e, n) {}, j.onIgnoreTag = function(t, e, n) {}, 
    j.onTagAttr = function(t, e, n) {}, j.onIgnoreTagAttr = function(t, e, n) {}, 
    j.safeAttrValue = function(t, e, n, r) {
        if (n = _i(n), e === "href" || e === "src") {
            if ((n = Qe.trim(n)) === "#") return "#";
            if (n.substr(0, 7) !== "http://" && n.substr(0, 8) !== "https://" && n.substr(0, 7) !== "mailto:" && n.substr(0, 4) !== "tel:" && n.substr(0, 11) !== "data:image/" && n.substr(0, 6) !== "ftp://" && n.substr(0, 2) !== "./" && n.substr(0, 3) !== "../" && n[0] !== "#" && n[0] !== "/") return "";
        } else if (e === "background") {
            if (Ke.lastIndex = 0, Ke.test(n)) return "";
        } else if (e === "style") {
            if (hi.lastIndex = 0, hi.test(n) || (di.lastIndex = 0, di.test(n) && (Ke.lastIndex = 0, 
            Ke.test(n)))) return "";
            r !== !1 && (n = (r = r || ci).process(n));
        }
        return n = xi(n);
    }, j.escapeHtml = ui, j.escapeQuote = pi, j.unescapeQuote = fi, j.escapeHtmlEntities = mi, 
    j.escapeDangerHtml5Entities = gi, j.clearNonPrintableCharacter = bi, j.friendlyAttrValue = _i, 
    j.escapeAttrValue = xi, j.onIgnoreTagStripAll = function() {
        return "";
    }, j.StripTagBody = function(t, e) {
        typeof e != "function" && (e = function() {});
        var n = !Array.isArray(t), r = [], i = !1;
        return {
            onIgnoreTag: function(o, a, l) {
                if (function(d) {
                    return !!n || Qe.indexOf(t, d) !== -1;
                }(o)) {
                    if (l.isClosing) {
                        var s = "[/removed]", c = l.position + 10;
                        return r.push([ i !== !1 ? i : l.position, c ]), i = !1, 
                        s;
                    }
                    return i || (i = l.position), "[removed]";
                }
                return e(o, a, l);
            },
            remove: function(o) {
                var a = "", l = 0;
                return Qe.forEach(r, function(s) {
                    a += o.slice(l, s[0]), l = s[1];
                }), a += o.slice(l);
            }
        };
    }, j.stripCommentTag = function(t) {
        for (var e = "", n = 0; n < t.length; ) {
            var r = t.indexOf("\x3c!--", n);
            if (r === -1) {
                e += t.slice(n);
                break;
            }
            e += t.slice(n, r);
            var i = t.indexOf("--\x3e", r);
            if (i === -1) break;
            n = i + 3;
        }
        return e;
    }, j.stripBlankChar = function(t) {
        var e = t.split("");
        return (e = e.filter(function(n) {
            var r = n.charCodeAt(0);
            return r !== 127 && (!(r <= 31) || r === 10 || r === 13);
        })).join("");
    }, j.attributeWrapSign = '"', j.cssFilter = ci, j.getDefaultCSSWhiteList = Os;
    var Ye = {}, Ut = qn;
    function Us(t) {
        var e, n = Ut.spaceIndex(t);
        return e = n === -1 ? t.slice(1, -1) : t.slice(1, n + 1), (e = Ut.trim(e).toLowerCase()).slice(0, 1) === "/" && (e = e.slice(1)), 
        e.slice(-1) === "/" && (e = e.slice(0, -1)), e;
    }
    function Ws(t) {
        return t.slice(0, 2) === "</";
    }
    var Zs = /[^a-zA-Z0-9\\_:.-]/gim;
    function Vs(t, e) {
        for (;e < t.length; e++) {
            var n = t[e];
            if (n !== " ") return n === "=" ? e : -1;
        }
    }
    function Gs(t, e) {
        for (;e < t.length; e++) {
            var n = t[e];
            if (n !== " ") return n === "'" || n === '"' ? e : -1;
        }
    }
    function Xs(t, e) {
        for (;e > 0; e--) {
            var n = t[e];
            if (n !== " ") return n === "=" ? e : -1;
        }
    }
    function Di(t) {
        return function(e) {
            return e[0] === '"' && e[e.length - 1] === '"' || e[0] === "'" && e[e.length - 1] === "'";
        }(t) ? t.substr(1, t.length - 2) : t;
    }
    Ye.parseTag = function(t, e, n) {
        var r = "", i = 0, o = !1, a = !1, l = 0, s = t.length, c = "", d = "";
        t: for (l = 0; l < s; l++) {
            var p = t.charAt(l);
            if (o === !1) {
                if (p === "<") {
                    o = l;
                    continue;
                }
            } else if (a === !1) {
                if (p === "<") {
                    r += n(t.slice(i, l)), o = l, i = l;
                    continue;
                }
                if (p === ">" || l === s - 1) {
                    r += n(t.slice(i, o)), c = Us(d = t.slice(o, l + 1)), r += e(o, r.length, c, d, Ws(d)), 
                    i = l + 1, o = !1;
                    continue;
                }
                if (p === '"' || p === "'") for (var f = 1, h = t.charAt(l - f); h.trim() === "" || h === "="; ) {
                    if (h === "=") {
                        a = p;
                        continue t;
                    }
                    h = t.charAt(l - ++f);
                }
            } else if (p === a) {
                a = !1;
                continue;
            }
        }
        return i < s && (r += n(t.substr(i))), r;
    }, Ye.parseAttr = function(t, e) {
        var n = 0, r = 0, i = [], o = !1, a = t.length;
        function l(p, f) {
            if (!((p = (p = Ut.trim(p)).replace(Zs, "").toLowerCase()).length < 1)) {
                var h = e(p, f || "");
                h && i.push(h);
            }
        }
        for (var s = 0; s < a; s++) {
            var c, d = t.charAt(s);
            if (o !== !1 || d !== "=") if (o === !1 || s !== r) {
                if (/\s|\n|\t/.test(d)) {
                    if (t = t.replace(/\s|\n|\t/g, " "), o === !1) {
                        if ((c = Vs(t, s)) === -1) {
                            l(Ut.trim(t.slice(n, s))), o = !1, n = s + 1;
                            continue;
                        }
                        s = c - 1;
                        continue;
                    }
                    if ((c = Xs(t, s - 1)) === -1) {
                        l(o, Di(Ut.trim(t.slice(n, s)))), o = !1, n = s + 1;
                        continue;
                    }
                }
            } else {
                if ((c = t.indexOf(d, s + 1)) === -1) break;
                l(o, Ut.trim(t.slice(r + 1, c))), o = !1, n = (s = c) + 1;
            } else o = t.slice(n, s), n = s + 1, r = t.charAt(n) === '"' || t.charAt(n) === "'" ? n : Gs(t, s + 1);
        }
        return n < t.length && (o === !1 ? l(t.slice(n)) : l(o, Di(Ut.trim(t.slice(n))))), 
        Ut.trim(i.join(" "));
    };
    var Js = Rn.FilterCSS, bt = j, yi = Ye, Qs = yi.parseTag, Ks = yi.parseAttr, tn = qn;
    function en(t) {
        return t == null;
    }
    function ki(t) {
        t = function(e) {
            var n = {};
            for (var r in e) n[r] = e[r];
            return n;
        }(t || {}), t.stripIgnoreTag && (t.onIgnoreTag, t.onIgnoreTag = bt.onIgnoreTagStripAll), 
        t.whiteList || t.allowList ? t.whiteList = function(e) {
            var n = {};
            for (var r in e) Array.isArray(e[r]) ? n[r.toLowerCase()] = e[r].map(function(i) {
                return i.toLowerCase();
            }) : n[r.toLowerCase()] = e[r];
            return n;
        }(t.whiteList || t.allowList) : t.whiteList = bt.whiteList, this.attributeWrapSign = t.singleQuotedAttributeValue === !0 ? "'" : bt.attributeWrapSign, 
        t.onTag = t.onTag || bt.onTag, t.onTagAttr = t.onTagAttr || bt.onTagAttr, 
        t.onIgnoreTag = t.onIgnoreTag || bt.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || bt.onIgnoreTagAttr, 
        t.safeAttrValue = t.safeAttrValue || bt.safeAttrValue, t.escapeHtml = t.escapeHtml || bt.escapeHtml, 
        this.options = t, t.css === !1 ? this.cssFilter = !1 : (t.css = t.css || {}, 
        this.cssFilter = new Js(t.css));
    }
    ki.prototype.process = function(t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this, n = e.options, r = n.whiteList, i = n.onTag, o = n.onIgnoreTag, a = n.onTagAttr, l = n.onIgnoreTagAttr, s = n.safeAttrValue, c = n.escapeHtml, d = e.attributeWrapSign, p = e.cssFilter;
        n.stripBlankChar && (t = bt.stripBlankChar(t)), n.allowCommentTag || (t = bt.stripCommentTag(t));
        var f = !1;
        n.stripIgnoreTagBody && (f = bt.StripTagBody(n.stripIgnoreTagBody, o), o = f.onIgnoreTag);
        var h = Qs(t, function(g, x, _, m, b) {
            var y = {
                sourcePosition: g,
                position: x,
                isClosing: b,
                isWhite: Object.prototype.hasOwnProperty.call(r, _)
            }, D = i(_, m, y);
            if (!en(D)) return D;
            if (y.isWhite) {
                if (y.isClosing) return "</" + _ + ">";
                var k = function(v) {
                    var z = tn.spaceIndex(v);
                    if (z === -1) return {
                        html: "",
                        closing: v[v.length - 2] === "/"
                    };
                    var I = (v = tn.trim(v.slice(z + 1, -1)))[v.length - 1] === "/";
                    return I && (v = tn.trim(v.slice(0, -1))), {
                        html: v,
                        closing: I
                    };
                }(m), w = r[_], F = Ks(k.html, function(v, z) {
                    var I = tn.indexOf(w, v) !== -1, U = a(_, v, z, I);
                    return en(U) ? I ? (z = s(_, v, z, p)) ? v + "=" + d + z + d : v : en(U = l(_, v, z, I)) ? void 0 : U : U;
                });
                return m = "<" + _, F && (m += " " + F), k.closing && (m += " /"), 
                m += ">";
            }
            return en(D = o(_, m, y)) ? c(m) : D;
        }, c);
        return f && (h = f.remove(h)), h;
    };
    var Ys = ki;
    (function(t, e) {
        var n = j, r = Ye, i = Ys;
        function o(a, l) {
            return new i(l).process(a);
        }
        (e = t.exports = o).filterXSS = o, e.FilterXSS = i, function() {
            for (var a in n) e[a] = n[a];
            for (var l in r) e[l] = r[l];
        }(), typeof window < "u" && (window.filterXSS = t.exports), typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = t.exports);
    })($n, $n.exports);
    var Ae = $n.exports;
    let vi, Pn, Ci, Ai, Nn, jn, Hn, Un, Wn;
    vi = _s({
        __proto__: null,
        default: Fs(Ae)
    }, [ Ae ]), Pn = {
        img: [ "class" ],
        input: [ "class", "disabled", "type", "checked" ],
        iframe: [ "class", "width", "height", "src", "title", "border", "frameborder", "framespacing", "allow", "allowfullscreen" ]
    }, Ci = (t, e) => {
        const {
            extendedWhiteList: n = {},
            xss: r = {}
        } = e;
        let i;
        if (typeof r == "function") i = new Ae.FilterXSS(r(vi)); else {
            const o = Ae.getDefaultWhiteList();
            [ ...Object.keys(n), ...Object.keys(Pn) ].forEach(a => {
                const l = o[a] || [], s = Pn[a] || [], c = n[a] || [];
                o[a] = [ ...new Set([ ...l, ...s, ...c ]) ];
            }), i = new Ae.FilterXSS({
                whiteList: o,
                ...r
            });
        }
        t.core.ruler.after("linkify", "xss", o => {
            for (let a = 0; a < o.tokens.length; a++) {
                const l = o.tokens[a];
                switch (l.type) {
                  case "html_block":
                    l.content = i.process(l.content);
                    break;

                  case "inline":
                    (l.children || []).forEach(s => {
                        s.type === "html_inline" && (s.content = i.process(s.content));
                    });
                    break;
                }
            }
        });
    }, Ai = (t, e) => {
        const {
            editorConfig: n,
            markdownItConfig: r,
            markdownItPlugins: i
        } = St, o = ct("editorId"), a = ct("language"), l = ct("usedLanguageText"), s = ct("showCodeRowNumber"), c = ct("theme"), d = ct("customIcon"), p = an([]), f = xs(t), h = (v => {
            const z = ln(St.editorExtensions.katex.instance);
            return mt(() => {
                if (v.noKatex || z.value) return;
                const {
                    editorExtensions: I
                } = St;
                st("script", {
                    src: I.katex.js,
                    id: `${C}-katex`,
                    onload() {
                        z.value = window.katex;
                    }
                }, "katex"), st("link", {
                    rel: "stylesheet",
                    href: I.katex.css,
                    id: `${C}-katexCss`
                });
            }), z;
        })(t), {
            reRenderRef: g,
            replaceMermaid: x
        } = (v => {
            const z = ct("theme"), {
                editorExtensions: I,
                editorExtensionsAttrs: U,
                mermaidConfig: _t
            } = St, B = ln(I.mermaid.instance), rt = ln(-1), Z = new On({
                max: 1e3,
                ttl: 6e5
            }), xt = () => {
                const lt = B.value;
                !v.noMermaid && lt && (lt.initialize(_t({
                    startOnLoad: !1,
                    theme: z.value === "dark" ? "dark" : "default"
                })), rt.value = rt.value + 1);
            };
            return et(() => z.value, () => {
                Z.clear(), xt();
            }), mt(() => {
                var lt, W;
                if (v.noMermaid || B.value) return;
                const Y = I.mermaid.js;
                /\.mjs/.test(Y) ? (st("link", {
                    ...(lt = U.mermaid) == null ? void 0 : lt.js,
                    rel: "modulepreload",
                    href: Y,
                    id: `${C}-mermaid-m`
                }), ua(() => import(Y).then(async tt => (await tt.__tla, tt)), [], import.meta.url).then(tt => {
                    B.value = tt.default, xt();
                })) : st("script", {
                    ...(W = U.mermaid) == null ? void 0 : W.js,
                    src: Y,
                    id: `${C}-mermaid`,
                    onload() {
                        B.value = window.mermaid, xt();
                    }
                }, "mermaid");
            }), {
                mermaidRef: B,
                reRenderRef: rt,
                replaceMermaid: () => {
                    sn(() => {
                        if (!v.noMermaid && B.value) {
                            const lt = document.querySelectorAll(`div.${C}-mermaid`), W = document.createElement("div");
                            W.style.width = document.body.offsetWidth + "px", W.style.height = document.body.offsetHeight + "px", 
                            W.style.position = "fixed", W.style.zIndex = "-10000", 
                            W.style.top = "-10000";
                            let Y = lt.length;
                            Y > 0 && document.body.appendChild(W), lt.forEach(async tt => {
                                let Ot = Z.get(tt.innerText);
                                if (!Ot) {
                                    const Vn = Xn(), ea = B.value.renderAsync || B.value.render;
                                    let rn = "";
                                    try {
                                        rn = await ea(Vn, tt.innerText, W);
                                    } catch {}
                                    Ot = await v.sanitizeMermaid(typeof rn == "string" ? rn : rn.svg), 
                                    Z.set(tt.innerText, Ot);
                                }
                                const ne = document.createElement("p");
                                ne.className = `${C}-mermaid`, ne.setAttribute("data-processed", ""), 
                                ne.innerHTML = Ot, tt.dataset.line !== void 0 && (ne.dataset.line = tt.dataset.line), 
                                tt.replaceWith(ne), --Y == 0 && W.remove();
                            });
                        }
                    });
                }
            };
        })(t), _ = gt({
            html: !0,
            breaks: !0,
            linkify: !0
        });
        r(_, {
            editorId: o
        });
        const m = [ {
            type: "image",
            plugin: ds,
            options: {
                figcaption: !0,
                classes: "md-zoom"
            }
        }, {
            type: "admonition",
            plugin: Cs,
            options: {}
        }, {
            type: "taskList",
            plugin: bs,
            options: {}
        }, {
            type: "heading",
            plugin: As,
            options: {
                mdHeadingId: t.mdHeadingId,
                headsRef: p
            }
        }, {
            type: "code",
            plugin: Es,
            options: {
                editorId: o,
                usedLanguageTextRef: l,
                codeFoldable: t.codeFoldable,
                autoFoldThreshold: t.autoFoldThreshold,
                customIconRef: d
            }
        }, {
            type: "xss",
            plugin: Ci,
            options: {}
        } ];
        t.noKatex || m.push({
            type: "katex",
            plugin: vs,
            options: {
                katexRef: h
            }
        }), t.noMermaid || m.push({
            type: "mermaid",
            plugin: Ds,
            options: {
                themeRef: c
            }
        }), i(m, {
            editorId: o
        }).forEach(v => {
            _.use(v.plugin, v.options);
        });
        const b = _.options.highlight;
        _.set({
            highlight: (v, z, I) => {
                if (b) {
                    const B = b(v, z, I);
                    if (B) return B;
                }
                let U;
                !t.noHighlight && f.value ? U = f.value.getLanguage(z) ? f.value.highlight(v, {
                    language: z,
                    ignoreIllegals: !0
                }).value : f.value.highlightAuto(v).value : U = _.utils.escapeHtml(v);
                const _t = s ? (B => {
                    if (!B) return B;
                    const rt = B.split(`
`), Z = [ '<span rn-wrapper aria-hidden="true">' ];
                    return rt.forEach(() => {
                        Z.push("<span></span>");
                    }), Z.push("</span>"), `<span class="${C}-code-block">${B}</span>${Z.join("")}`;
                })(U.replace(/^\n+|\n+$/g, "")) : `<span class="${C}-code-block">${U.replace(/^\n+|\n+$/g, "")}</span>`;
                return `<pre><code class="language-${z}" language=${z}>${_t}</code></pre>`;
            }
        }), (v => {
            v.core.ruler.push("init-line-number", z => (z.tokens.forEach(I => {
                I.map && (I.attrs || (I.attrs = []), I.attrs.push([ "data-line", I.map[0].toString() ]));
            }), !0));
        })(_);
        const y = an(`_article-key_${Xn()}`), D = an(t.sanitize(_.render(t.modelValue))), k = () => {
            L.emit(o, be, D.value), t.onHtmlChanged(D.value), t.onGetCatalog(p.value), 
            L.emit(o, Te, p.value), x();
        };
        mt(k);
        const w = () => {
            p.value = [], D.value = t.sanitize(_.render(t.modelValue)), k();
        }, F = Zt(() => (t.noKatex || h.value) && (t.noHighlight || f.value));
        return et([ Ti(t, "modelValue"), F, g, a ], Ii(w, e ? 0 : n.renderDelay)), 
        et(() => t.setting.preview, () => {
            t.setting.preview && sn(() => {
                L.emit(o, Te, p.value);
            });
        }), mt(() => {
            L.on(o, {
                name: Qn,
                callback() {
                    L.emit(o, Te, p.value);
                }
            }), L.on(o, {
                name: Oe,
                callback: () => {
                    y.value = `_article-key_${Xn()}`, w();
                }
            });
        }), {
            html: D,
            key: y
        };
    }, Nn = {
        modelValue: {
            type: String,
            default: ""
        },
        setting: {
            type: Object,
            default: () => ({
                preview: !0
            })
        },
        onHtmlChanged: {
            type: Function,
            default: () => {}
        },
        onGetCatalog: {
            type: Function,
            default: () => {}
        },
        mdHeadingId: {
            type: Function,
            default: () => ""
        },
        noMermaid: {
            type: Boolean,
            default: !1
        },
        sanitize: {
            type: Function,
            default: t => t
        },
        noKatex: {
            type: Boolean,
            default: !1
        },
        formatCopiedText: {
            type: Function,
            default: t => t
        },
        noHighlight: {
            type: Boolean,
            default: !1
        },
        previewOnly: {
            type: Boolean,
            default: !1
        },
        noImgZoomIn: {
            type: Boolean
        },
        sanitizeMermaid: {
            type: Function
        },
        codeFoldable: {
            type: Boolean
        },
        autoFoldThreshold: {
            type: Number
        }
    }, Zi = {
        ...Nn,
        updateModelValue: {
            type: Function,
            default: () => {}
        },
        onChange: {
            type: Function,
            default: () => {}
        },
        placeholder: {
            type: String,
            default: ""
        },
        scrollAuto: {
            type: Boolean
        },
        autofocus: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        maxlength: {
            type: Number
        },
        autoDetectCode: {
            type: Boolean
        },
        onBlur: {
            type: Function,
            default: () => {}
        },
        onFocus: {
            type: Function,
            default: () => {}
        },
        noPrettier: {
            type: Boolean
        },
        completions: {
            type: Array
        },
        catalogVisible: {
            type: Boolean
        },
        theme: {
            type: String,
            default: "light"
        },
        onInput: {
            type: Function
        },
        onDrop: {
            type: Function,
            default: () => {}
        },
        inputBoxWitdh: {
            type: String
        },
        onInputBoxWitdhChange: {
            type: Function
        },
        transformImgUrl: {
            type: Function,
            default: t => t
        }
    }, Yn = Fi({
        name: "ContentPreview",
        props: Nn,
        setup(t) {
            const e = ct("editorId"), n = ct("previewTheme"), r = ct("showCodeRowNumber"), {
                html: i,
                key: o
            } = Ai(t, t.previewOnly);
            return ((a, l, s) => {
                const c = ct("editorId"), d = ct("usedLanguageText"), p = () => {
                    document.querySelectorAll(`#${c} .${C}-preview .${C}-code`).forEach(h => {
                        let g = -1;
                        const x = h.querySelector(`.${C}-copy-button`);
                        x && (x.onclick = _ => {
                            _.preventDefault(), clearTimeout(g);
                            const m = (h.querySelector("input:checked + pre code") || h.querySelector("pre code")).textContent, b = eo(a.formatCopiedText(m)), {
                                text: y,
                                successTips: D,
                                failTips: k
                            } = d.value.copyCode, w = b ? D : k;
                            x.dataset.isIcon ? x.dataset.tips = w : x.innerHTML = w, 
                            g = window.setTimeout(() => {
                                x.dataset.isIcon ? x.dataset.tips = y : x.innerHTML = y;
                            }, 1500);
                        });
                    });
                }, f = h => {
                    h && sn(p);
                };
                et([ l, s ], () => {
                    sn(p);
                }), et(() => a.setting.preview, f), et(() => a.setting.htmlPreview, f), 
                et(() => d.value, p), mt(p);
            })(t, i, o), ((a, l) => {
                const s = ct("editorId"), {
                    noImgZoomIn: c
                } = a, d = Ii(() => {
                    const p = document.querySelectorAll(`#${s}-preview img:not(.not-zoom)`);
                    p.length !== 0 && Ki(p, {
                        background: "#00000073"
                    });
                });
                mt(() => {
                    d();
                }), et([ l, Ti(a.setting, "preview") ], () => {
                    !c && a.setting.preview && d();
                });
            })(t, i), () => re(oa, null, [ t.setting.preview && re("div", {
                id: `${e}-preview-wrapper`,
                class: `${C}-preview-wrapper`,
                key: "content-preview-wrapper"
            }, [ re("div", {
                key: o.value,
                id: `${e}-preview`,
                class: [ `${C}-preview`, `${n == null ? void 0 : n.value}-theme`, r && `${C}-scrn` ],
                innerHTML: i.value
            }, null) ]), !t.previewOnly && t.setting.htmlPreview && re("div", {
                id: `${e}-html-wrapper`,
                class: `${C}-preview-wrapper`,
                key: "html-preview-wrapper"
            }, [ re("div", {
                class: `${C}-html`
            }, [ i.value ]) ]) ]);
        }
    }), Xi = (t, e) => {
        const {
            editorId: n
        } = t, r = Li({
            buildFinished: !1,
            html: ""
        });
        et(() => t.modelValue, () => {
            r.buildFinished = !1;
        }), mt(() => {
            L.on(n, {
                name: be,
                callback(i) {
                    r.buildFinished = !0, r.html = i;
                }
            }), L.on(n, {
                name: un,
                callback() {
                    const i = new Promise(o => {
                        if (r.buildFinished) o(r.html); else {
                            const a = l => {
                                o(l), L.remove(n, be, a);
                            };
                            L.on(n, {
                                name: be,
                                callback: a
                            });
                        }
                    });
                    t.onSave ? t.onSave(t.modelValue, i) : e.emit("onSave", t.modelValue, i);
                }
            });
        });
    }, jn = t => {
        const {
            editorId: e
        } = t, n = St.editorExtensions.highlight, r = St.editorExtensionsAttrs.highlight;
        Rt("editorId", e), Rt("theme", Zt(() => t.theme)), Rt("language", Zt(() => t.language)), 
        Rt("highlight", Zt(() => {
            const {
                js: o
            } = n, a = {
                ...Si,
                ...n.css
            }, {
                js: l,
                css: s = {}
            } = r || {}, c = t.codeStyleReverse && t.codeStyleReverseList.includes(t.previewTheme) ? "dark" : t.theme;
            return {
                js: {
                    src: o,
                    ...l
                },
                css: {
                    href: a[t.codeTheme] ? a[t.codeTheme][c] : Si.atom[c],
                    ...a[t.codeTheme] && s[t.codeTheme] ? s[t.codeTheme][c] : s.atom ? s.atom[c] : {}
                }
            };
        })), Rt("showCodeRowNumber", t.showCodeRowNumber);
        const i = Zt(() => {
            const o = {
                ...zi,
                ...St.editorConfig.languageUserDefined
            };
            return sa(aa(zi["en-US"]), o[t.language] || {});
        });
        Rt("usedLanguageText", i), Rt("previewTheme", Zt(() => t.previewTheme)), 
        Rt("customIcon", Zt(() => t.customIcon));
    }, Mi = t => {
        jn(t), Rt("tabWidth", t.tabWidth);
    }, Hn = t => {
        mt(() => {
            const {
                editorExtensions: e,
                editorExtensionsAttrs: n,
                iconfontType: r
            } = St;
            t.noIconfont || (r === "svg" ? st("script", {
                ...n.iconfont,
                src: e.iconfont,
                id: `${C}-icon`
            }) : st("link", {
                ...n.iconfontClass,
                rel: "stylesheet",
                href: e.iconfontClass,
                id: `${C}-icon-class`
            }));
        });
    }, qi = t => {
        const {
            noPrettier: e,
            noUploadImg: n
        } = t, {
            editorExtensions: r,
            editorExtensionsAttrs: i
        } = St, o = e || r.prettier.prettierInstance, a = e || r.prettier.parserMarkdownInstance, l = n || r.cropper.instance;
        mt(() => {
            if (!l) {
                const {
                    js: s = {},
                    css: c = {}
                } = i.cropper || {};
                st("link", {
                    ...c,
                    rel: "stylesheet",
                    href: r.cropper.css,
                    id: `${C}-cropperCss`
                }), st("script", {
                    ...s,
                    src: r.cropper.js,
                    id: `${C}-cropper`
                });
            }
            if (!o) {
                const {
                    standaloneJs: s = {}
                } = i.prettier || {};
                st("script", {
                    ...s,
                    src: r.prettier.standaloneJs,
                    id: `${C}-prettier`
                });
            }
            if (!a) {
                const {
                    parserMarkdownJs: s = {}
                } = i.prettier || {};
                st("script", {
                    ...s,
                    src: r.prettier.parserMarkdownJs,
                    id: `${C}-prettierMD`
                });
            }
        }), Hn(t);
    }, Ni = (t, e) => {
        const {
            editorId: n
        } = t;
        mt(() => {
            L.on(n, {
                name: Jn,
                callback: r => {
                    t.onError instanceof Function ? t.onError(r) : e.emit("onError", r);
                }
            });
        });
    }, ji = (t, e) => {
        const {
            editorId: n
        } = t, r = Li({
            pageFullscreen: t.pageFullscreen,
            fullscreen: !1,
            preview: t.preview,
            htmlPreview: !t.preview && t.htmlPreview,
            previewOnly: !1
        });
        let i = "";
        const o = () => {
            r.pageFullscreen || r.fullscreen ? document.body.style.overflow = "hidden" : document.body.style.overflow = i;
        };
        return et(() => [ r.pageFullscreen, r.fullscreen ], o), mt(() => {
            L.on(n, {
                name: Kn,
                callback(a, l) {
                    const s = c => {
                        L.emit(n, Le, "image", {
                            desc: "",
                            urls: c
                        }), l && l();
                    };
                    t.onUploadImg ? t.onUploadImg(a, s) : e.emit("onUploadImg", a, s);
                }
            }), i = document.body.style.overflow, o();
        }), [ r, (a, l) => {
            r[a] = l === void 0 ? !r[a] : l, a === "preview" ? (r.htmlPreview = !1, 
            r.previewOnly = !1) : a === "htmlPreview" ? (r.preview = !1, r.previewOnly = !1) : a !== "previewOnly" || r.preview || r.htmlPreview || (r.preview = !0);
        } ];
    }, Hi = t => {
        const {
            editorId: e
        } = t, n = an(!1);
        return mt(() => {
            L.on(e, {
                name: cn,
                callback: r => {
                    n.value = r === void 0 ? !n.value : r;
                }
            });
        }), Zt(() => !t.toolbarsExclude.includes("catalog") && t.toolbars.includes("catalog") && n.value);
    }, Wi = (t, e, n, r, i, o) => {
        const {
            editorId: a
        } = t;
        et(() => r.pageFullscreen, s => {
            L.emit(a, N, s);
        }), et(() => r.fullscreen, s => {
            L.emit(a, qt, s);
        }), et(() => r.preview, s => {
            L.emit(a, ge, s);
        }), et(() => r.previewOnly, s => {
            L.emit(a, pn, s);
        }), et(() => r.htmlPreview, s => {
            L.emit(a, fn, s);
        }), et(n, s => {
            L.emit(a, mn, s);
        });
        const l = {
            on(s, c) {
                switch (s) {
                  case "pageFullscreen":
                    L.on(a, {
                        name: N,
                        callback(d) {
                            c(d);
                        }
                    });
                    break;

                  case "fullscreen":
                    L.on(a, {
                        name: qt,
                        callback(d) {
                            c(d);
                        }
                    });
                    break;

                  case "preview":
                    L.on(a, {
                        name: ge,
                        callback(d) {
                            c(d);
                        }
                    });
                    break;

                  case "previewOnly":
                    L.on(a, {
                        name: pn,
                        callback(d) {
                            c(d);
                        }
                    });
                    break;

                  case "htmlPreview":
                    L.on(a, {
                        name: fn,
                        callback(d) {
                            c(d);
                        }
                    });
                    break;

                  case "catalog":
                    L.on(a, {
                        name: mn,
                        callback(d) {
                            c(d);
                        }
                    });
                }
            },
            togglePageFullscreen(s) {
                i("pageFullscreen", s);
            },
            toggleFullscreen(s) {
                L.emit(a, tr, s);
            },
            togglePreview(s) {
                i("preview", s);
            },
            togglePreviewOnly(s) {
                i("previewOnly", s);
            },
            toggleHtmlPreview(s) {
                i("htmlPreview", s);
            },
            toggleCatalog(s) {
                L.emit(a, cn, s);
            },
            triggerSave() {
                L.emit(a, un);
            },
            insert(s) {
                L.emit(a, Le, "universal", {
                    generate: s
                });
            },
            focus(s) {
                var c;
                (c = o.value) == null || c.focus(s);
            },
            rerender() {
                L.emit(a, Oe);
            },
            getSelectedText() {
                var s;
                return (s = o.value) == null ? void 0 : s.getSelectedText();
            },
            resetHistory() {
                var s;
                (s = o.value) == null || s.resetHistory();
            },
            domEventHandlers(s) {
                L.emit(a, er, s);
            },
            execCommand(s) {
                L.emit(a, Le, s);
            }
        };
        e.expose(l);
    }, Un = {
        modelValue: {
            type: String,
            default: ""
        },
        theme: {
            type: String,
            default: "light"
        },
        class: {
            type: String,
            default: ""
        },
        language: {
            type: String,
            default: "zh-CN"
        },
        onHtmlChanged: {
            type: Function
        },
        onGetCatalog: {
            type: Function
        },
        editorId: {
            type: String,
            default: () => sr("md-editor-v3_")
        },
        showCodeRowNumber: {
            type: Boolean,
            default: !0
        },
        previewTheme: {
            type: String,
            default: "default"
        },
        style: {
            type: Object,
            default: () => ({})
        },
        mdHeadingId: {
            type: Function,
            default: t => t
        },
        sanitize: {
            type: Function,
            default: t => t
        },
        noMermaid: {
            type: Boolean,
            default: !1
        },
        noKatex: {
            type: Boolean,
            default: !1
        },
        codeTheme: {
            type: String,
            default: "atom"
        },
        noIconfont: {
            type: Boolean
        },
        formatCopiedText: {
            type: Function,
            default: t => t
        },
        codeStyleReverse: {
            type: Boolean,
            default: !0
        },
        codeStyleReverseList: {
            type: Array,
            default: [ "default", "mk-cute" ]
        },
        noHighlight: {
            type: Boolean,
            default: !1
        },
        noImgZoomIn: {
            type: Boolean,
            default: !1
        },
        customIcon: {
            type: Object,
            default: {}
        },
        sanitizeMermaid: {
            type: Function,
            default: t => Promise.resolve(t)
        },
        codeFoldable: {
            type: Boolean,
            default: !0
        },
        autoFoldThreshold: {
            type: Number,
            default: 30
        }
    }, Ri = {
        ...Un,
        onChange: {
            type: Function
        },
        onSave: {
            type: Function
        },
        onUploadImg: {
            type: Function
        },
        pageFullscreen: {
            type: Boolean,
            default: !1
        },
        preview: {
            type: Boolean,
            default: !0
        },
        htmlPreview: {
            type: Boolean,
            default: !1
        },
        toolbars: {
            type: Array,
            default: la
        },
        toolbarsExclude: {
            type: Array,
            default: []
        },
        noPrettier: {
            type: Boolean,
            default: !1
        },
        tabWidth: {
            type: Number,
            default: 2
        },
        tableShape: {
            type: Array
        },
        placeholder: {
            type: String,
            default: ""
        },
        defToolbars: {
            type: [ String, Object ]
        },
        onError: {
            type: Function
        },
        footers: {
            type: Array,
            default: ca
        },
        scrollAuto: {
            type: Boolean,
            default: !0
        },
        defFooters: {
            type: [ String, Object ]
        },
        noUploadImg: {
            type: Boolean
        },
        autoFocus: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        readOnly: {
            type: Boolean
        },
        maxLength: {
            type: Number
        },
        autoDetectCode: {
            type: Boolean
        },
        onBlur: {
            type: Function
        },
        onFocus: {
            type: Function
        },
        completions: {
            type: Array
        },
        showToolbarName: {
            type: Boolean,
            default: !1
        },
        onInput: {
            type: Function
        },
        onDrop: {
            type: Function
        },
        inputBoxWitdh: {
            type: String,
            default: "50%"
        },
        onInputBoxWitdhChange: {
            type: Function
        },
        transformImgUrl: {
            type: Function,
            default: t => t
        }
    }, Wn = [ "onHtmlChanged", "onGetCatalog" ], $i = [ ...Wn, "onChange", "onSave", "onUploadImg", "onError", "update:modelValue", "onBlur", "onFocus", "onInput", "onDrop", "onInputBoxWitdhChange" ], 
    Ie = Fi({
        name: "MdPreview",
        props: Un,
        emits: Wn,
        setup(t, e) {
            const {
                editorId: n,
                noKatex: r,
                noMermaid: i,
                noHighlight: o
            } = t;
            return jn(t), Hn(t), ((a, l) => {
                const {
                    editorId: s
                } = a, c = {
                    rerender() {
                        L.emit(s, Oe);
                    }
                };
                l.expose(c);
            })(t, e), ia(() => {
                L.clear(n);
            }), () => re("div", {
                id: n,
                class: [ C, t.class, t.theme === "dark" && `${C}-dark`, `${C}-previewOnly` ],
                style: t.style
            }, [ re(Yn, {
                modelValue: t.modelValue,
                onHtmlChanged: a => {
                    t.onHtmlChanged ? t.onHtmlChanged(a) : e.emit("onHtmlChanged", a);
                },
                onGetCatalog: a => {
                    t.onGetCatalog ? t.onGetCatalog(a) : e.emit("onGetCatalog", a);
                },
                mdHeadingId: t.mdHeadingId,
                noMermaid: i,
                sanitize: t.sanitize,
                noKatex: r,
                formatCopiedText: t.formatCopiedText,
                noHighlight: o,
                noImgZoomIn: t.noImgZoomIn,
                previewOnly: !0,
                sanitizeMermaid: t.sanitizeMermaid,
                codeFoldable: t.codeFoldable,
                autoFoldThreshold: t.autoFoldThreshold
            }, null) ]);
        }
    }), Ie.install = t => (t.component(Ie.name, Ie), t);
});

export {
    Te as C,
    Jn as E,
    Ie as M,
    Bi as O,
    Qn as P,
    Le as R,
    Kn as U,
    da as __tla,
    Oi as a,
    L as b,
    $i as c,
    Mi as d,
    Ri as e,
    qi as f,
    Pi as g,
    Ni as h,
    ji as i,
    Hi as j,
    Ui as k,
    Wi as l,
    Zi as m,
    Yn as n,
    st as o,
    tr as p,
    cn as q,
    un as r,
    Vi as s,
    Gi as t,
    Xi as u,
    er as v,
    Ji as w
};