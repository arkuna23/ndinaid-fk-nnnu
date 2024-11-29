import {
    a as Wt,
    b as At,
    c as It,
    e as Bt
} from "./index-0d885c8d.js";

import {
    bd as Et,
    bv as Xt,
    f as Yt,
    aH as Ht,
    Z as qt,
    j as Nt,
    a_ as jt,
    b4 as $t,
    av as Gt,
    aq as kt,
    ae as Ut,
    l as Vt,
    w as Zt
} from "./install-67fb146c.js";

import {
    i as Jt,
    a as Kt
} from "./install-0c30d2d2.js";

import {
    d as Qt,
    az as Ot,
    ag as te,
    e as vt,
    a as j,
    r as Ft,
    bC as Dt,
    w as ee,
    bD as ae,
    f as ne,
    aV as oe,
    bE as re,
    o as ie,
    c as se,
    z as le,
    x as de,
    aj as fe,
    __tla as he
} from "./index-6c08ea4c.js";

let Pt, ue = Promise.all([ (() => {
    try {
        return he;
    } catch {}
})() ]).then(async () => {
    Et([ Xt, Jt ]), Et(Kt), Wt({
        type: "series.wordCloud",
        visualStyleAccessPath: "textStyle",
        visualStyleMapper: function(n) {
            return {
                fill: n.get("color")
            };
        },
        visualDrawType: "fill",
        optionUpdated: function() {
            var n = this.option;
            n.gridSize = Math.max(Math.floor(n.gridSize), 4);
        },
        getInitialData: function(n, l) {
            var o = Yt(n.data, {
                coordDimensions: [ "value" ]
            }), t = new Ht(o, this);
            return t.initData(n.data), t;
        },
        defaultOption: {
            maskImage: null,
            shape: "circle",
            keepAspect: !1,
            left: "center",
            top: "center",
            width: "70%",
            height: "80%",
            sizeRange: [ 12, 60 ],
            rotationRange: [ -90, 90 ],
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBound: !1,
            shrinkToFit: !1,
            textStyle: {
                fontWeight: "normal"
            }
        }
    }), At({
        type: "wordCloud",
        render: function(n, l, o) {
            var t = this.group;
            t.removeAll();
            var b = n.getData(), u = n.get("gridSize");
            n.layoutInstance.ondraw = function(F, g, i, y) {
                var w = b.getItemModel(i), z = w.getModel("textStyle"), C = new qt({
                    style: It(z),
                    scaleX: 1 / y.info.mu,
                    scaleY: 1 / y.info.mu,
                    x: (y.gx + y.info.gw / 2) * u,
                    y: (y.gy + y.info.gh / 2) * u,
                    rotation: y.rot
                });
                C.setStyle({
                    x: y.info.fillTextOffsetX,
                    y: y.info.fillTextOffsetY + .5 * g,
                    text: F,
                    verticalAlign: "middle",
                    fill: b.getItemVisual(i, "style").fill,
                    fontSize: g
                }), t.add(C), b.setItemGraphicEl(i, C), C.ensureState("emphasis").style = It(w.getModel([ "emphasis", "textStyle" ]), {
                    state: "emphasis"
                }), C.ensureState("blur").style = It(w.getModel([ "blur", "textStyle" ]), {
                    state: "blur"
                }), Nt(C, w.get([ "emphasis", "focus" ]), w.get([ "emphasis", "blurScope" ])), 
                C.stateTransition = {
                    duration: n.get("animation") ? n.get([ "stateAnimation", "duration" ]) : 0,
                    easing: n.get([ "stateAnimation", "easing" ])
                }, C.__highDownDispatcher = !0;
            }, this._model = n;
        },
        remove: function() {
            this.group.removeAll(), this._model.layoutInstance.dispose();
        },
        dispose: function() {
            this._model.layoutInstance.dispose();
        }
    }), window.setImmediate || (window.setImmediate = window.msSetImmediate || window.webkitSetImmediate || window.mozSetImmediate || window.oSetImmediate || function() {
        if (!window.postMessage || !window.addEventListener) return null;
        var n = [ void 0 ], l = "zero-timeout-message";
        return window.addEventListener("message", function(o) {
            if (typeof o.data == "string" && o.data.substr(0, 20) === l) {
                o.stopImmediatePropagation();
                var t = parseInt(o.data.substr(20), 36);
                n[t] && (n[t](), n[t] = void 0);
            }
        }, !0), window.clearImmediate = function(o) {
            n[o] && (n[o] = void 0);
        }, function(o) {
            var t = n.length;
            return n.push(o), window.postMessage(l + t.toString(36), "*"), t;
        };
    }() || function(n) {
        window.setTimeout(n, 0);
    }), window.clearImmediate || (window.clearImmediate = window.msClearImmediate || window.webkitClearImmediate || window.mozClearImmediate || window.oClearImmediate || function(n) {
        window.clearTimeout(n);
    });
    var pt = function() {
        var n = document.createElement("canvas");
        if (!n || !n.getContext) return !1;
        var l = n.getContext("2d");
        return !!l && !!l.getImageData && !!l.fillText && !!Array.prototype.some && !!Array.prototype.push;
    }(), yt = function() {
        if (pt) {
            for (var n, l, o = document.createElement("canvas").getContext("2d"), t = 20; t; ) {
                if (o.font = t.toString(10) + "px sans-serif", o.measureText("Ｗ").width === n && o.measureText("m").width === l) return t + 1;
                n = o.measureText("Ｗ").width, l = o.measureText("m").width, t--;
            }
            return 0;
        }
    }(), Rt = function(n) {
        for (var l, o, t = n.length; t; ) l = Math.floor(Math.random() * t), o = n[--t], 
        n[t] = n[l], n[l] = o;
        return n;
    }, rt = {}, gt = function(n, l) {
        if (pt) {
            var o = Math.floor(Math.random() * Date.now());
            Array.isArray(n) || (n = [ n ]), n.forEach(function(e, a) {
                if (typeof e == "string") {
                    if (n[a] = document.getElementById(e), !n[a]) throw new Error("The element id specified is not found.");
                } else if (!e.tagName && !e.appendChild) throw new Error("You must pass valid HTML elements, or ID of the element.");
            });
            var t = {
                list: [],
                fontFamily: '"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',
                fontWeight: "normal",
                color: "random-dark",
                minSize: 0,
                weightFactor: 1,
                clearCanvas: !0,
                backgroundColor: "#fff",
                gridSize: 8,
                drawOutOfBound: !1,
                shrinkToFit: !1,
                origin: null,
                drawMask: !1,
                maskColor: "rgba(255,0,0,0.3)",
                maskGapWidth: .3,
                layoutAnimation: !0,
                wait: 0,
                abortThreshold: 0,
                abort: function() {},
                minRotation: -Math.PI / 2,
                maxRotation: Math.PI / 2,
                rotationStep: .1,
                shuffle: !0,
                rotateRatio: .1,
                shape: "circle",
                ellipticity: .65,
                classes: null,
                hover: null,
                click: null
            };
            if (l) for (var b in l) b in t && (t[b] = l[b]);
            if (typeof t.weightFactor != "function") {
                var u = t.weightFactor;
                t.weightFactor = function(e) {
                    return e * u;
                };
            }
            if (typeof t.shape != "function") switch (t.shape) {
              case "circle":
              default:
                t.shape = "circle";
                break;

              case "cardioid":
                t.shape = function(e) {
                    return 1 - Math.sin(e);
                };
                break;

              case "diamond":
                t.shape = function(e) {
                    var a = e % (2 * Math.PI / 4);
                    return 1 / (Math.cos(a) + Math.sin(a));
                };
                break;

              case "square":
                t.shape = function(e) {
                    return Math.min(1 / Math.abs(Math.cos(e)), 1 / Math.abs(Math.sin(e)));
                };
                break;

              case "triangle-forward":
                t.shape = function(e) {
                    var a = e % (2 * Math.PI / 3);
                    return 1 / (Math.cos(a) + Math.sqrt(3) * Math.sin(a));
                };
                break;

              case "triangle":
              case "triangle-upright":
                t.shape = function(e) {
                    var a = (e + 3 * Math.PI / 2) % (2 * Math.PI / 3);
                    return 1 / (Math.cos(a) + Math.sqrt(3) * Math.sin(a));
                };
                break;

              case "pentagon":
                t.shape = function(e) {
                    var a = (e + .955) % (2 * Math.PI / 5);
                    return 1 / (Math.cos(a) + .726543 * Math.sin(a));
                };
                break;

              case "star":
                t.shape = function(e) {
                    var a = (e + .955) % (2 * Math.PI / 10);
                    return (e + .955) % (2 * Math.PI / 5) - 2 * Math.PI / 10 >= 0 ? 1 / (Math.cos(2 * Math.PI / 10 - a) + 3.07768 * Math.sin(2 * Math.PI / 10 - a)) : 1 / (Math.cos(a) + 3.07768 * Math.sin(a));
                };
            }
            t.gridSize = Math.max(Math.floor(t.gridSize), 4);
            var F, g, i, y, w, z, C, _, r = t.gridSize, N = r - t.maskGapWidth, c = Math.abs(t.maxRotation - t.minRotation), v = Math.min(t.maxRotation, t.minRotation), x = t.rotationStep;
            switch (t.color) {
              case "random-dark":
                C = function() {
                    return Ct(10, 50);
                };
                break;

              case "random-light":
                C = function() {
                    return Ct(50, 90);
                };
                break;

              default:
                typeof t.color == "function" && (C = t.color);
            }
            typeof t.fontWeight == "function" && (_ = t.fontWeight);
            var T = null;
            typeof t.classes == "function" && (T = t.classes);
            var it, st = !1, m = [], mt = function(e) {
                var a, s, f = e.currentTarget, h = f.getBoundingClientRect();
                e.touches ? (a = e.touches[0].clientX, s = e.touches[0].clientY) : (a = e.clientX, 
                s = e.clientY);
                var $ = a - h.left, B = s - h.top, G = Math.floor($ * (f.width / h.width || 1) / r), k = Math.floor(B * (f.height / h.height || 1) / r);
                return m[G] ? m[G][k] : null;
            }, ut = function(e) {
                var a = mt(e);
                it !== a && (it = a, a ? t.hover(a.item, a.dimension, e) : t.hover(void 0, void 0, e));
            }, xt = function(e) {
                var a = mt(e);
                a && (t.click(a.item, a.dimension, e), e.preventDefault());
            }, Mt = [], Lt = function(e) {
                if (Mt[e]) return Mt[e];
                var a = 8 * e, s = a, f = [];
                for (e === 0 && f.push([ y[0], y[1], 0 ]); s--; ) {
                    var h = 1;
                    t.shape !== "circle" && (h = t.shape(s / a * 2 * Math.PI)), 
                    f.push([ y[0] + e * h * Math.cos(-s / a * 2 * Math.PI), y[1] + e * h * Math.sin(-s / a * 2 * Math.PI) * t.ellipticity, s / a * 2 * Math.PI ]);
                }
                return Mt[e] = f, f;
            }, bt = function() {
                return t.abortThreshold > 0 && new Date().getTime() - z > t.abortThreshold;
            }, zt = function(e, a, s, f, h) {
                e >= g || a >= i || e < 0 || a < 0 || (F[e][a] = !1, s && n[0].getContext("2d").fillRect(e * r, a * r, N, N), 
                st && (m[e][a] = {
                    item: h,
                    dimension: f
                }));
            }, _t = function e(a, s) {
                if (s > 20) return null;
                var f, h, $;
                Array.isArray(a) ? (f = a[0], h = a[1]) : (f = a.word, h = a.weight, 
                $ = a.attributes);
                var B = t.rotateRatio === 0 || Math.random() > t.rotateRatio ? 0 : c === 0 ? v : v + Math.round(Math.random() * c / x) * x, G = function(d) {
                    if (Array.isArray(d)) {
                        var S = d.slice();
                        return S.splice(0, 2), S;
                    }
                    return [];
                }(a), k = function(d, S, O, V) {
                    var E = t.weightFactor(S);
                    if (E <= t.minSize) return !1;
                    var p, M = 1;
                    E < yt && (M = function() {
                        for (var St = 2; St * E < yt; ) St += 2;
                        return St;
                    }()), p = _ ? _(d, S, E, V) : t.fontWeight;
                    var R = document.createElement("canvas"), I = R.getContext("2d", {
                        willReadFrequently: !0
                    });
                    I.font = p + " " + (E * M).toString(10) + "px " + t.fontFamily;
                    var W = I.measureText(d).width / M, D = Math.max(E * M, I.measureText("m").width, I.measureText("Ｗ").width) / M, X = W + 2 * D, Y = 3 * D, A = Math.ceil(X / r), Z = Math.ceil(Y / r);
                    X = A * r, Y = Z * r;
                    var U = -W / 2, L = .4 * -D, J = Math.ceil((X * Math.abs(Math.sin(O)) + Y * Math.abs(Math.cos(O))) / r), P = Math.ceil((X * Math.abs(Math.cos(O)) + Y * Math.abs(Math.sin(O))) / r), H = P * r, K = J * r;
                    R.setAttribute("width", H), R.setAttribute("height", K), I.scale(1 / M, 1 / M), 
                    I.translate(H * M / 2, K * M / 2), I.rotate(-O), I.font = p + " " + (E * M).toString(10) + "px " + t.fontFamily, 
                    I.fillStyle = "#000", I.textBaseline = "middle", I.fillText(d, U * M, (L + .5 * E) * M);
                    var nt = I.getImageData(0, 0, H, K).data;
                    if (bt()) return !1;
                    for (var q, ft, ht, Tt = [], ot = P, Q = [ J / 2, P / 2, J / 2, P / 2 ]; ot--; ) for (q = J; q--; ) {
                        ht = r;
                        t: for (;ht--; ) for (ft = r; ft--; ) if (nt[4 * ((q * r + ht) * H + (ot * r + ft)) + 3]) {
                            Tt.push([ ot, q ]), ot < Q[3] && (Q[3] = ot), ot > Q[1] && (Q[1] = ot), 
                            q < Q[0] && (Q[0] = q), q > Q[2] && (Q[2] = q);
                            break t;
                        }
                    }
                    return {
                        mu: M,
                        occupied: Tt,
                        bounds: Q,
                        gw: P,
                        gh: J,
                        fillTextOffsetX: U,
                        fillTextOffsetY: L,
                        fillTextWidth: W,
                        fillTextHeight: D,
                        fontSize: E
                    };
                }(f, h, B, G);
                if (!k || bt()) return !1;
                if (!t.drawOutOfBound && !t.shrinkToFit) {
                    var tt = k.bounds;
                    if (tt[1] - tt[3] + 1 > g || tt[2] - tt[0] + 1 > i) return !1;
                }
                for (var lt = w + 1, wt = function(d) {
                    var S = Math.floor(d[0] - k.gw / 2), O = Math.floor(d[1] - k.gh / 2);
                    return k.gw, k.gh, !!function(V, E, p, M, R) {
                        for (var I = R.length; I--; ) {
                            var W = V + R[I][0], D = E + R[I][1];
                            if (W >= g || D >= i || W < 0 || D < 0) {
                                if (!t.drawOutOfBound) return !1;
                            } else if (!F[W][D]) return !1;
                        }
                        return !0;
                    }(S, O, 0, 0, k.occupied) && (function(V, E, p, M, R, I, W, D, X, Y) {
                        var A, Z, U, L = p.fontSize;
                        A = C ? C(M, R, L, I, W, Y) : t.color, Z = _ ? _(M, R, L, Y) : t.fontWeight, 
                        U = T ? T(M, R, L, Y) : t.classes, n.forEach(function(J) {
                            if (J.getContext) {
                                var P = J.getContext("2d"), H = p.mu;
                                P.save(), P.scale(1 / H, 1 / H), P.font = Z + " " + (L * H).toString(10) + "px " + t.fontFamily, 
                                P.fillStyle = A, P.translate((V + p.gw / 2) * r * H, (E + p.gh / 2) * r * H), 
                                D !== 0 && P.rotate(-D), P.textBaseline = "middle", 
                                P.fillText(M, p.fillTextOffsetX * H, (p.fillTextOffsetY + .5 * L) * H), 
                                P.restore();
                            } else {
                                var K = document.createElement("span"), nt = "";
                                nt = "rotate(" + -D / Math.PI * 180 + "deg) ", p.mu !== 1 && (nt += "translateX(-" + p.fillTextWidth / 4 + "px) scale(" + 1 / p.mu + ")");
                                var q = {
                                    position: "absolute",
                                    display: "block",
                                    font: Z + " " + L * p.mu + "px " + t.fontFamily,
                                    left: (V + p.gw / 2) * r + p.fillTextOffsetX + "px",
                                    top: (E + p.gh / 2) * r + p.fillTextOffsetY + "px",
                                    width: p.fillTextWidth + "px",
                                    height: p.fillTextHeight + "px",
                                    lineHeight: L + "px",
                                    whiteSpace: "nowrap",
                                    transform: nt,
                                    webkitTransform: nt,
                                    msTransform: nt,
                                    transformOrigin: "50% 40%",
                                    webkitTransformOrigin: "50% 40%",
                                    msTransformOrigin: "50% 40%"
                                };
                                for (var ft in A && (q.color = A), K.textContent = M, 
                                q) K.style[ft] = q[ft];
                                if (X) for (var ht in X) K.setAttribute(ht, X[ht]);
                                U && (K.className += U), J.appendChild(K);
                            }
                        });
                    }(S, O, k, f, h, w - lt, d[2], B, $, G), function(V, E, p, M, R, I) {
                        var W, D, X = R.occupied, Y = t.drawMask;
                        if (Y && ((W = n[0].getContext("2d")).save(), W.fillStyle = t.maskColor), 
                        st) {
                            var A = R.bounds;
                            D = {
                                x: (V + A[3]) * r,
                                y: (E + A[0]) * r,
                                w: (A[1] - A[3] + 1) * r,
                                h: (A[2] - A[0] + 1) * r
                            };
                        }
                        for (var Z = X.length; Z--; ) {
                            var U = V + X[Z][0], L = E + X[Z][1];
                            U >= g || L >= i || U < 0 || L < 0 || zt(U, L, Y, D, I);
                        }
                        Y && W.restore();
                    }(S, O, 0, 0, k, a), {
                        gx: S,
                        gy: O,
                        rot: B,
                        info: k
                    });
                }; lt--; ) {
                    var et = Lt(w - lt);
                    t.shuffle && (et = [].concat(et), Rt(et));
                    for (var at = 0; at < et.length; at++) {
                        var dt = wt(et[at]);
                        if (dt) return dt;
                    }
                }
                return t.shrinkToFit ? (Array.isArray(a) ? a[1] = 3 * a[1] / 4 : a.weight = 3 * a.weight / 4, 
                e(a, s + 1)) : null;
            }, ct = function(e, a, s) {
                if (a) return !n.some(function(f) {
                    var h = new CustomEvent(e, {
                        detail: s || {}
                    });
                    return !f.dispatchEvent(h);
                }, this);
                n.forEach(function(f) {
                    var h = new CustomEvent(e, {
                        detail: s || {}
                    });
                    f.dispatchEvent(h);
                }, this);
            };
            (function() {
                var e = n[0];
                if (e.getContext) g = Math.ceil(e.width / r), i = Math.ceil(e.height / r); else {
                    var a = e.getBoundingClientRect();
                    g = Math.ceil(a.width / r), i = Math.ceil(a.height / r);
                }
                if (ct("wordcloudstart", !0)) {
                    var s, f, h, $, B;
                    if (y = t.origin ? [ t.origin[0] / r, t.origin[1] / r ] : [ g / 2, i / 2 ], 
                    w = Math.floor(Math.sqrt(g * g + i * i)), F = [], !e.getContext || t.clearCanvas) for (n.forEach(function(d) {
                        if (d.getContext) {
                            var S = d.getContext("2d");
                            S.fillStyle = t.backgroundColor, S.clearRect(0, 0, g * (r + 1), i * (r + 1)), 
                            S.fillRect(0, 0, g * (r + 1), i * (r + 1));
                        } else d.textContent = "", d.style.backgroundColor = t.backgroundColor, 
                        d.style.position = "relative";
                    }), s = g; s--; ) for (F[s] = [], f = i; f--; ) F[s][f] = !0; else {
                        var G = document.createElement("canvas").getContext("2d");
                        G.fillStyle = t.backgroundColor, G.fillRect(0, 0, 1, 1);
                        var k, tt, lt = G.getImageData(0, 0, 1, 1).data, wt = e.getContext("2d").getImageData(0, 0, g * r, i * r).data;
                        for (s = g; s--; ) for (F[s] = [], f = i; f--; ) {
                            tt = r;
                            t: for (;tt--; ) for (k = r; k--; ) for (h = 4; h--; ) if (wt[4 * ((f * r + tt) * g * r + (s * r + k)) + h] !== lt[h]) {
                                F[s][f] = !1;
                                break t;
                            }
                            F[s][f] !== !1 && (F[s][f] = !0);
                        }
                        wt = G = lt = void 0;
                    }
                    if (t.hover || t.click) {
                        for (st = !0, s = g + 1; s--; ) m[s] = [];
                        t.hover && e.addEventListener("mousemove", ut), t.click && (e.addEventListener("click", xt), 
                        e.addEventListener("touchstart", xt), e.addEventListener("touchend", function(d) {
                            d.preventDefault();
                        }), e.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)"), 
                        e.addEventListener("wordcloudstart", function d() {
                            e.removeEventListener("wordcloudstart", d), e.removeEventListener("mousemove", ut), 
                            e.removeEventListener("click", xt), it = void 0;
                        });
                    }
                    h = 0;
                    var et = !0;
                    t.layoutAnimation ? t.wait !== 0 ? ($ = window.setTimeout, B = window.clearTimeout) : ($ = window.setImmediate, 
                    B = window.clearImmediate) : ($ = function(d) {
                        d();
                    }, B = function() {
                        et = !1;
                    });
                    var at = function(d, S) {
                        n.forEach(function(O) {
                            O.removeEventListener(d, S);
                        }, this);
                    }, dt = function d() {
                        at("wordcloudstart", d), B(rt[o]);
                    };
                    (function(d, S) {
                        n.forEach(function(O) {
                            O.addEventListener(d, S);
                        }, this);
                    })("wordcloudstart", dt), rt[o] = (t.layoutAnimation ? $ : setTimeout)(function d() {
                        if (et) {
                            if (h >= t.list.length) return B(rt[o]), ct("wordcloudstop", !1), 
                            at("wordcloudstart", dt), void delete rt[o];
                            z = new Date().getTime();
                            var S = _t(t.list[h], 0), O = !ct("wordclouddrawn", !0, {
                                item: t.list[h],
                                drawn: S
                            });
                            if (bt() || O) return B(rt[o]), t.abort(), ct("wordcloudabort", !1), 
                            ct("wordcloudstop", !1), void at("wordcloudstart", dt);
                            h++, rt[o] = $(d, t.wait);
                        }
                    }, t.wait);
                }
            })();
        }
        function Ct(e, a) {
            return "hsl(" + (360 * Math.random()).toFixed() + "," + (30 * Math.random() + 70).toFixed() + "%," + (Math.random() * (a - e) + e).toFixed() + "%)";
        }
    };
    if (gt.isSupported = pt, gt.minFontSize = yt, !gt.isSupported) throw new Error("Sorry your browser not support wordCloud");
    jt(function(n, l) {
        n.eachSeriesByType("wordCloud", function(o) {
            var t = Vt(o.getBoxLayoutParams(), {
                width: l.getWidth(),
                height: l.getHeight()
            }), b = o.get("keepAspect"), u = o.get("maskImage"), F = u ? u.width / u.height : 1;
            b && function(c, v) {
                var x = c.width, T = c.height;
                x > T * v ? (c.x += (x - T * v) / 2, c.width = T * v) : (c.y += (T - x / v) / 2, 
                c.height = x / v);
            }(t, F);
            var g = o.getData(), i = document.createElement("canvas");
            i.width = t.width, i.height = t.height;
            var y = i.getContext("2d");
            if (u) try {
                y.drawImage(u, 0, 0, i.width, i.height), function(c) {
                    for (var v = c.getContext("2d"), x = v.getImageData(0, 0, c.width, c.height), T = v.createImageData(x), it = 0, st = 0, m = 0; m < x.data.length; m += 4) x.data[m + 3] > 128 && (it += ut = x.data[m] + x.data[m + 1] + x.data[m + 2], 
                    ++st);
                    var mt = it / st;
                    for (m = 0; m < x.data.length; m += 4) {
                        var ut = x.data[m] + x.data[m + 1] + x.data[m + 2];
                        x.data[m + 3] < 128 || ut > mt ? (T.data[m] = 0, T.data[m + 1] = 0, 
                        T.data[m + 2] = 0, T.data[m + 3] = 0) : (T.data[m] = 255, 
                        T.data[m + 1] = 255, T.data[m + 2] = 255, T.data[m + 3] = 255);
                    }
                    v.putImageData(T, 0, 0);
                }(i);
            } catch {}
            var w = o.get("sizeRange"), z = o.get("rotationRange"), C = g.getDataExtent("value"), _ = Math.PI / 180, r = o.get("gridSize");
            function N(c) {
                var v = c.detail.item;
                c.detail.drawn && o.layoutInstance.ondraw && (c.detail.drawn.gx += t.x / r, 
                c.detail.drawn.gy += t.y / r, o.layoutInstance.ondraw(v[0], v[1], v[2], c.detail.drawn));
            }
            gt(i, {
                list: g.mapArray("value", function(c, v) {
                    var x = g.getItemModel(v);
                    return [ g.getName(v), x.get("textStyle.fontSize", !0) || Zt(c, C, w), v ];
                }).sort(function(c, v) {
                    return v[1] - c[1];
                }),
                fontFamily: o.get("textStyle.fontFamily") || o.get("emphasis.textStyle.fontFamily") || n.get("textStyle.fontFamily"),
                fontWeight: o.get("textStyle.fontWeight") || o.get("emphasis.textStyle.fontWeight") || n.get("textStyle.fontWeight"),
                gridSize: r,
                ellipticity: t.height / t.width,
                minRotation: z[0] * _,
                maxRotation: z[1] * _,
                clearCanvas: !u,
                rotateRatio: 1,
                rotationStep: o.get("rotationStep") * _,
                drawOutOfBound: o.get("drawOutOfBound"),
                shrinkToFit: o.get("shrinkToFit"),
                layoutAnimation: o.get("layoutAnimation"),
                shuffle: !1,
                shape: o.get("shape")
            }), i.addEventListener("wordclouddrawn", N), o.layoutInstance && o.layoutInstance.dispose(), 
            o.layoutInstance = {
                ondraw: null,
                dispose: function() {
                    i.removeEventListener("wordclouddrawn", N), i.addEventListener("wordclouddrawn", function(c) {
                        c.preventDefault();
                    });
                }
            };
        });
    }), $t(function(n) {
        var l = (n || {}).series;
        !Gt(l) && (l = l ? [ l ] : []);
        var o = [ "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY" ];
        function t(b) {
            b && kt(o, function(u) {
                b.hasOwnProperty(u) && (b["text" + Ut(u)] = b[u]);
            });
        }
        kt(l, function(b) {
            if (b && b.type === "wordCloud") {
                var u = b.textStyle || {};
                t(u.normal), t(u.emphasis);
            }
        });
    }), Pt = Qt({
        name: "EChart",
        __name: "Echart",
        props: {
            options: {
                type: Object,
                required: !0
            },
            width: Ot.oneOfType([ Number, String ]).def(""),
            height: Ot.oneOfType([ Number, String ]).def("500px")
        },
        setup(n) {
            const {
                getPrefixCls: l,
                variables: o
            } = fe(), t = l("echart"), b = te(), u = n, F = vt(() => b.getIsDark), g = vt(() => !!j(F) || "auto"), i = vt(() => Object.assign(u.options, {
                darkMode: j(g)
            })), y = Ft();
            let w = null;
            const z = Ft(), C = vt(() => ({
                width: Dt(u.width) ? u.width : `${u.width}px`,
                height: Dt(u.height) ? u.height : `${u.height}px`
            }));
            ee(() => i.value, N => {
                w && (w == null || w.setOption(N));
            }, {
                deep: !0
            });
            const _ = ae(() => {
                w && w.resize();
            }, 100), r = async N => {
                N.propertyName === "width" && _();
            };
            return ne(() => {
                j(y) && u.options && (w = Bt.init(j(y)), w == null || w.setOption(j(i))), 
                window.addEventListener("resize", _), z.value = document.getElementsByClassName(`${o.namespace}-layout-content`)[0], 
                j(z) && j(z).addEventListener("transitionend", r);
            }), oe(() => {
                window.removeEventListener("resize", _), j(z) && j(z).removeEventListener("transitionend", r);
            }), re(() => {
                w && w.resize();
            }), (N, c) => (ie(), se("div", {
                ref_key: "elRef",
                ref: y,
                class: le([ N.$attrs.class, j(t) ]),
                style: de(j(C))
            }, null, 6));
        }
    });
});

export {
    Pt as _,
    ue as __tla
};