import {
    e as wt,
    o as X,
    c as z,
    z as Ot,
    x as xt,
    a as j,
    R as Pt,
    S as Ft,
    v as Tt,
    t as K,
    d as jt,
    A as ht,
    G as ft,
    k as et,
    B as at,
    aO as ee,
    r as Dt,
    b8 as Mr,
    D as ut,
    U as Xt,
    H as Nr,
    w as fe,
    f as ge,
    g as ve,
    l as re,
    F as zt,
    y as $t,
    ai as ie,
    bH as Br,
    aJ as Ur,
    C as Gr,
    I as Yt,
    n as pe,
    aT as jr,
    __tla as Kr
} from "./index-6c08ea4c.js";

import {
    g as Vr,
    __tla as Hr
} from "./file-e038b35d.js";

import {
    _ as Wr
} from "./_plugin-vue_export-helper-1b428a4d.js";

let me, Yr = Promise.all([ (() => {
    try {
        return Kr;
    } catch {}
})(), (() => {
    try {
        return Hr;
    } catch {}
})() ]).then(async () => {
    var ye = Object.defineProperty, Ee = Object.defineProperties, Te = Object.getOwnPropertyDescriptors, ne = Object.getOwnPropertySymbols, Se = Object.prototype.hasOwnProperty, be = Object.prototype.propertyIsEnumerable, ae = (F, C, v) => C in F ? ye(F, C, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: v
    }) : F[C] = v, Qt = (F, C) => {
        for (var v in C || (C = {})) Se.call(C, v) && ae(F, v, C[v]);
        if (ne) for (var v of ne(C)) be.call(C, v) && ae(F, v, C[v]);
        return F;
    }, Zt = (F, C) => Ee(F, Te(C));
    function se(F, C, v, k) {
        var S, L = !1, D = 0;
        function I() {
            S && clearTimeout(S);
        }
        function A() {
            for (var d = arguments.length, T = new Array(d), p = 0; p < d; p++) T[p] = arguments[p];
            var y = this, b = Date.now() - D;
            function E() {
                D = Date.now(), v.apply(y, T);
            }
            L || (k && !S && E(), I(), k === void 0 && b > F ? E() : C !== !0 && (S = setTimeout(k ? function() {
                S = void 0;
            } : E, k === void 0 ? F - b : F)));
        }
        return typeof C != "boolean" && (k = v, v = C, C = void 0), A.cancel = function() {
            I(), L = !0;
        }, A;
    }
    function oe(F, C, v) {
        return v === void 0 ? se(F, C, !1) : se(F, v, C !== !1);
    }
    var le = {
        exports: {}
    };
    typeof window < "u" && (le.exports = function(F) {
        var C = {};
        function v(k) {
            if (C[k]) return C[k].exports;
            var S = C[k] = {
                i: k,
                l: !1,
                exports: {}
            };
            return F[k].call(S.exports, S, S.exports, v), S.l = !0, S.exports;
        }
        return v.m = F, v.c = C, v.d = function(k, S, L) {
            v.o(k, S) || Object.defineProperty(k, S, {
                enumerable: !0,
                get: L
            });
        }, v.r = function(k) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(k, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(k, "__esModule", {
                value: !0
            });
        }, v.t = function(k, S) {
            if (1 & S && (k = v(k)), 8 & S || 4 & S && typeof k == "object" && k && k.__esModule) return k;
            var L = Object.create(null);
            if (v.r(L), Object.defineProperty(L, "default", {
                enumerable: !0,
                value: k
            }), 2 & S && typeof k != "string") for (var D in k) v.d(L, D, function(I) {
                return k[I];
            }.bind(null, D));
            return L;
        }, v.n = function(k) {
            var S = k && k.__esModule ? function() {
                return k.default;
            } : function() {
                return k;
            };
            return v.d(S, "a", S), S;
        }, v.o = function(k, S) {
            return Object.prototype.hasOwnProperty.call(k, S);
        }, v.p = "/dist/", v(v.s = "./src/hls.ts");
    }({
        "./node_modules/eventemitter3/index.js": function(F, C, v) {
            var k = Object.prototype.hasOwnProperty, S = "~";
            function L() {}
            function D(T, p, y) {
                this.fn = T, this.context = p, this.once = y || !1;
            }
            function I(T, p, y, b, E) {
                if (typeof y != "function") throw new TypeError("The listener must be a function");
                var r = new D(y, b || T, E), t = S ? S + p : p;
                return T._events[t] ? T._events[t].fn ? T._events[t] = [ T._events[t], r ] : T._events[t].push(r) : (T._events[t] = r, 
                T._eventsCount++), T;
            }
            function A(T, p) {
                --T._eventsCount == 0 ? T._events = new L() : delete T._events[p];
            }
            function d() {
                this._events = new L(), this._eventsCount = 0;
            }
            Object.create && (L.prototype = Object.create(null), new L().__proto__ || (S = !1)), 
            d.prototype.eventNames = function() {
                var T, p, y = [];
                if (this._eventsCount === 0) return y;
                for (p in T = this._events) k.call(T, p) && y.push(S ? p.slice(1) : p);
                return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(T)) : y;
            }, d.prototype.listeners = function(T) {
                var p = S ? S + T : T, y = this._events[p];
                if (!y) return [];
                if (y.fn) return [ y.fn ];
                for (var b = 0, E = y.length, r = new Array(E); b < E; b++) r[b] = y[b].fn;
                return r;
            }, d.prototype.listenerCount = function(T) {
                var p = S ? S + T : T, y = this._events[p];
                return y ? y.fn ? 1 : y.length : 0;
            }, d.prototype.emit = function(T, p, y, b, E, r) {
                var t = S ? S + T : T;
                if (!this._events[t]) return !1;
                var l, o, h = this._events[t], i = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(T, h.fn, void 0, !0), 
                    i) {
                      case 1:
                        return h.fn.call(h.context), !0;

                      case 2:
                        return h.fn.call(h.context, p), !0;

                      case 3:
                        return h.fn.call(h.context, p, y), !0;

                      case 4:
                        return h.fn.call(h.context, p, y, b), !0;

                      case 5:
                        return h.fn.call(h.context, p, y, b, E), !0;

                      case 6:
                        return h.fn.call(h.context, p, y, b, E, r), !0;
                    }
                    for (o = 1, l = new Array(i - 1); o < i; o++) l[o - 1] = arguments[o];
                    h.fn.apply(h.context, l);
                } else {
                    var a, f = h.length;
                    for (o = 0; o < f; o++) switch (h[o].once && this.removeListener(T, h[o].fn, void 0, !0), 
                    i) {
                      case 1:
                        h[o].fn.call(h[o].context);
                        break;

                      case 2:
                        h[o].fn.call(h[o].context, p);
                        break;

                      case 3:
                        h[o].fn.call(h[o].context, p, y);
                        break;

                      case 4:
                        h[o].fn.call(h[o].context, p, y, b);
                        break;

                      default:
                        if (!l) for (a = 1, l = new Array(i - 1); a < i; a++) l[a - 1] = arguments[a];
                        h[o].fn.apply(h[o].context, l);
                    }
                }
                return !0;
            }, d.prototype.on = function(T, p, y) {
                return I(this, T, p, y, !1);
            }, d.prototype.once = function(T, p, y) {
                return I(this, T, p, y, !0);
            }, d.prototype.removeListener = function(T, p, y, b) {
                var E = S ? S + T : T;
                if (!this._events[E]) return this;
                if (!p) return A(this, E), this;
                var r = this._events[E];
                if (r.fn) r.fn !== p || b && !r.once || y && r.context !== y || A(this, E); else {
                    for (var t = 0, l = [], o = r.length; t < o; t++) (r[t].fn !== p || b && !r[t].once || y && r[t].context !== y) && l.push(r[t]);
                    l.length ? this._events[E] = l.length === 1 ? l[0] : l : A(this, E);
                }
                return this;
            }, d.prototype.removeAllListeners = function(T) {
                var p;
                return T ? (p = S ? S + T : T, this._events[p] && A(this, p)) : (this._events = new L(), 
                this._eventsCount = 0), this;
            }, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, 
            d.prefixed = S, d.EventEmitter = d, F.exports = d;
        },
        "./node_modules/url-toolkit/src/url-toolkit.js": function(F, C, v) {
            var k, S, L, D, I;
            k = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, 
            S = /^([^\/?#]*)([^]*)$/, L = /(?:\/|^)\.(?=\/)/g, D = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, 
            I = {
                buildAbsoluteURL: function(A, d, T) {
                    if (T = T || {}, A = A.trim(), !(d = d.trim())) {
                        if (!T.alwaysNormalize) return A;
                        var p = I.parseURL(A);
                        if (!p) throw new Error("Error trying to parse base URL.");
                        return p.path = I.normalizePath(p.path), I.buildURLFromParts(p);
                    }
                    var y = I.parseURL(d);
                    if (!y) throw new Error("Error trying to parse relative URL.");
                    if (y.scheme) return T.alwaysNormalize ? (y.path = I.normalizePath(y.path), 
                    I.buildURLFromParts(y)) : d;
                    var b = I.parseURL(A);
                    if (!b) throw new Error("Error trying to parse base URL.");
                    if (!b.netLoc && b.path && b.path[0] !== "/") {
                        var E = S.exec(b.path);
                        b.netLoc = E[1], b.path = E[2];
                    }
                    b.netLoc && !b.path && (b.path = "/");
                    var r = {
                        scheme: b.scheme,
                        netLoc: y.netLoc,
                        path: null,
                        params: y.params,
                        query: y.query,
                        fragment: y.fragment
                    };
                    if (!y.netLoc && (r.netLoc = b.netLoc, y.path[0] !== "/")) if (y.path) {
                        var t = b.path, l = t.substring(0, t.lastIndexOf("/") + 1) + y.path;
                        r.path = I.normalizePath(l);
                    } else r.path = b.path, y.params || (r.params = b.params, y.query || (r.query = b.query));
                    return r.path === null && (r.path = T.alwaysNormalize ? I.normalizePath(y.path) : y.path), 
                    I.buildURLFromParts(r);
                },
                parseURL: function(A) {
                    var d = k.exec(A);
                    return d ? {
                        scheme: d[1] || "",
                        netLoc: d[2] || "",
                        path: d[3] || "",
                        params: d[4] || "",
                        query: d[5] || "",
                        fragment: d[6] || ""
                    } : null;
                },
                normalizePath: function(A) {
                    for (A = A.split("").reverse().join("").replace(L, ""); A.length !== (A = A.replace(D, "")).length; );
                    return A.split("").reverse().join("");
                },
                buildURLFromParts: function(A) {
                    return A.scheme + A.netLoc + A.path + A.params + A.query + A.fragment;
                }
            }, F.exports = I;
        },
        "./node_modules/webworkify-webpack/index.js": function(F, C, v) {
            function k(A) {
                var d = {};
                function T(y) {
                    if (d[y]) return d[y].exports;
                    var b = d[y] = {
                        i: y,
                        l: !1,
                        exports: {}
                    };
                    return A[y].call(b.exports, b, b.exports, T), b.l = !0, b.exports;
                }
                T.m = A, T.c = d, T.i = function(y) {
                    return y;
                }, T.d = function(y, b, E) {
                    T.o(y, b) || Object.defineProperty(y, b, {
                        configurable: !1,
                        enumerable: !0,
                        get: E
                    });
                }, T.r = function(y) {
                    Object.defineProperty(y, "__esModule", {
                        value: !0
                    });
                }, T.n = function(y) {
                    var b = y && y.__esModule ? function() {
                        return y.default;
                    } : function() {
                        return y;
                    };
                    return T.d(b, "a", b), b;
                }, T.o = function(y, b) {
                    return Object.prototype.hasOwnProperty.call(y, b);
                }, T.p = "/", T.oe = function(y) {
                    throw y;
                };
                var p = T(T.s = ENTRY_MODULE);
                return p.default || p;
            }
            var S = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";
            function L(A) {
                return (A + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
            }
            function D(A, d, T) {
                var p = {};
                p[T] = [];
                var y = d.toString(), b = y.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!b) return p;
                for (var E, r = b[1], t = new RegExp("(\\\\n|\\W)" + L(r) + S, "g"); E = t.exec(y); ) E[3] !== "dll-reference" && p[T].push(E[3]);
                for (t = new RegExp("\\(" + L(r) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)' + S, "g"); E = t.exec(y); ) A[E[2]] || (p[T].push(E[1]), 
                A[E[2]] = v(E[1]).m), p[E[2]] = p[E[2]] || [], p[E[2]].push(E[4]);
                for (var l, o = Object.keys(p), h = 0; h < o.length; h++) for (var i = 0; i < p[o[h]].length; i++) l = p[o[h]][i], 
                isNaN(1 * l) || (p[o[h]][i] = 1 * p[o[h]][i]);
                return p;
            }
            function I(A) {
                return Object.keys(A).reduce(function(d, T) {
                    return d || A[T].length > 0;
                }, !1);
            }
            F.exports = function(A, d) {
                d = d || {};
                var T = {
                    main: v.m
                }, p = d.all ? {
                    main: Object.keys(T.main)
                } : function(t, l) {
                    for (var o = {
                        main: [ l ]
                    }, h = {
                        main: []
                    }, i = {
                        main: {}
                    }; I(o); ) for (var a = Object.keys(o), f = 0; f < a.length; f++) {
                        var g = a[f], n = o[g].pop();
                        if (i[g] = i[g] || {}, !i[g][n] && t[g][n]) {
                            i[g][n] = !0, h[g] = h[g] || [], h[g].push(n);
                            for (var c = D(t, t[g][n], g), u = Object.keys(c), s = 0; s < u.length; s++) o[u[s]] = o[u[s]] || [], 
                            o[u[s]] = o[u[s]].concat(c[u[s]]);
                        }
                    }
                    return h;
                }(T, A), y = "";
                Object.keys(p).filter(function(t) {
                    return t !== "main";
                }).forEach(function(t) {
                    for (var l = 0; p[t][l]; ) l++;
                    p[t].push(l), T[t][l] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", 
                    y = y + "var " + t + " = (" + k.toString().replace("ENTRY_MODULE", JSON.stringify(l)) + ")({" + p[t].map(function(o) {
                        return JSON.stringify(o) + ": " + T[t][o].toString();
                    }).join(",") + `});
`;
                }), y = y + "new ((" + k.toString().replace("ENTRY_MODULE", JSON.stringify(A)) + ")({" + p.main.map(function(t) {
                    return JSON.stringify(t) + ": " + T.main[t].toString();
                }).join(",") + "}))(self);";
                var b = new window.Blob([ y ], {
                    type: "text/javascript"
                });
                if (d.bare) return b;
                var E = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(b), r = new window.Worker(E);
                return r.objectURL = E, r;
            };
        },
        "./src/config.ts": function(F, C, v) {
            v.r(C), v.d(C, "hlsDefaultConfig", function() {
                return f;
            }), v.d(C, "mergeConfig", function() {
                return g;
            }), v.d(C, "enableStreamingMode", function() {
                return n;
            });
            var k = v("./src/controller/abr-controller.ts"), S = v("./src/controller/audio-stream-controller.ts"), L = v("./src/controller/audio-track-controller.ts"), D = v("./src/controller/subtitle-stream-controller.ts"), I = v("./src/controller/subtitle-track-controller.ts"), A = v("./src/controller/buffer-controller.ts"), d = v("./src/controller/timeline-controller.ts"), T = v("./src/controller/cap-level-controller.ts"), p = v("./src/controller/fps-controller.ts"), y = v("./src/controller/eme-controller.ts"), b = v("./src/utils/xhr-loader.ts"), E = v("./src/utils/fetch-loader.ts"), r = v("./src/utils/cues.ts"), t = v("./src/utils/mediakeys-helper.ts"), l = v("./src/utils/logger.ts");
            function o() {
                return (o = Object.assign || function(c) {
                    for (var u = 1; u < arguments.length; u++) {
                        var s = arguments[u];
                        for (var e in s) Object.prototype.hasOwnProperty.call(s, e) && (c[e] = s[e]);
                    }
                    return c;
                }).apply(this, arguments);
            }
            function h(c, u) {
                var s = Object.keys(c);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(c);
                    u && (e = e.filter(function(m) {
                        return Object.getOwnPropertyDescriptor(c, m).enumerable;
                    })), s.push.apply(s, e);
                }
                return s;
            }
            function i(c) {
                for (var u = 1; u < arguments.length; u++) {
                    var s = arguments[u] != null ? arguments[u] : {};
                    u % 2 ? h(Object(s), !0).forEach(function(e) {
                        a(c, e, s[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(s)) : h(Object(s)).forEach(function(e) {
                        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(s, e));
                    });
                }
                return c;
            }
            function a(c, u, s) {
                return u in c ? Object.defineProperty(c, u, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : c[u] = s, c;
            }
            var f = i(i({
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: void 0,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                backBufferLength: 1 / 0,
                maxBufferSize: 6e7,
                maxBufferHole: .1,
                highBufferWatchdogPeriod: 2,
                nudgeOffset: .1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: .25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: 1 / 0,
                liveSyncDuration: void 0,
                liveMaxLatencyDuration: void 0,
                maxLiveSyncPlaybackRate: 1,
                liveDurationInfinity: !1,
                liveBackBufferLength: null,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                enableSoftwareAES: !0,
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                startLevel: void 0,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: .2,
                appendErrorMaxRetry: 3,
                loader: b.default,
                fLoader: void 0,
                pLoader: void 0,
                xhrSetup: void 0,
                licenseXhrSetup: void 0,
                licenseResponseCallback: void 0,
                abrController: k.default,
                bufferController: A.default,
                capLevelController: T.default,
                fpsController: p.default,
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: .95,
                abrBandWidthUpFactor: .7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                emeEnabled: !1,
                widevineLicenseUrl: void 0,
                drmSystemOptions: {},
                requestMediaKeySystemAccessFunc: t.requestMediaKeySystemAccess,
                testBandwidth: !0,
                progressive: !1,
                lowLatencyMode: !0
            }, {
                cueHandler: r.default,
                enableCEA708Captions: !0,
                enableWebVTT: !0,
                enableIMSC1: !0,
                captionsTextTrack1Label: "English",
                captionsTextTrack1LanguageCode: "en",
                captionsTextTrack2Label: "Spanish",
                captionsTextTrack2LanguageCode: "es",
                captionsTextTrack3Label: "Unknown CC",
                captionsTextTrack3LanguageCode: "",
                captionsTextTrack4Label: "Unknown CC",
                captionsTextTrack4LanguageCode: "",
                renderTextTracksNatively: !0
            }), {}, {
                subtitleStreamController: D.SubtitleStreamController,
                subtitleTrackController: I.default,
                timelineController: d.TimelineController,
                audioStreamController: S.default,
                audioTrackController: L.default,
                emeController: y.default
            });
            function g(c, u) {
                if ((u.liveSyncDurationCount || u.liveMaxLatencyDurationCount) && (u.liveSyncDuration || u.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                if (u.liveMaxLatencyDurationCount !== void 0 && (u.liveSyncDurationCount === void 0 || u.liveMaxLatencyDurationCount <= u.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                if (u.liveMaxLatencyDuration !== void 0 && (u.liveSyncDuration === void 0 || u.liveMaxLatencyDuration <= u.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                return o({}, c, u);
            }
            function n(c) {
                var u = c.loader;
                u !== E.default && u !== b.default ? (l.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), 
                c.progressive = !1) : Object(E.fetchSupported)() && (c.loader = E.default, 
                c.progressive = !0, c.enableSoftwareAES = !0, l.logger.log("[config]: Progressive streaming enabled, using FetchLoader"));
            }
        },
        "./src/controller/abr-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/polyfills/number.ts"), S = v("./src/utils/ewma-bandwidth-estimator.ts"), L = v("./src/events.ts"), D = v("./src/utils/buffer-helper.ts"), I = v("./src/errors.ts"), A = v("./src/types/loader.ts"), d = v("./src/utils/logger.ts"), T = function() {
                function p(E) {
                    this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, 
                    this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), 
                    this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, 
                    this.bwEstimator = void 0, this.hls = E;
                    var r = E.config;
                    this.bwEstimator = new S.default(r.abrEwmaSlowVoD, r.abrEwmaFastVoD, r.abrEwmaDefaultEstimate), 
                    this.registerListeners();
                }
                var y, b = p.prototype;
                return b.registerListeners = function() {
                    var E = this.hls;
                    E.on(L.Events.FRAG_LOADING, this.onFragLoading, this), E.on(L.Events.FRAG_LOADED, this.onFragLoaded, this), 
                    E.on(L.Events.FRAG_BUFFERED, this.onFragBuffered, this), E.on(L.Events.LEVEL_LOADED, this.onLevelLoaded, this), 
                    E.on(L.Events.ERROR, this.onError, this);
                }, b.unregisterListeners = function() {
                    var E = this.hls;
                    E.off(L.Events.FRAG_LOADING, this.onFragLoading, this), E.off(L.Events.FRAG_LOADED, this.onFragLoaded, this), 
                    E.off(L.Events.FRAG_BUFFERED, this.onFragBuffered, this), E.off(L.Events.LEVEL_LOADED, this.onLevelLoaded, this), 
                    E.off(L.Events.ERROR, this.onError, this);
                }, b.destroy = function() {
                    this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, 
                    this.fragCurrent = this.partCurrent = null;
                }, b.onFragLoading = function(E, r) {
                    var t, l = r.frag;
                    l.type === A.PlaylistLevelType.MAIN && (this.timer || (this.fragCurrent = l, 
                    this.partCurrent = (t = r.part) != null ? t : null, this.timer = self.setInterval(this.onCheck, 100)));
                }, b.onLevelLoaded = function(E, r) {
                    var t = this.hls.config;
                    r.details.live ? this.bwEstimator.update(t.abrEwmaSlowLive, t.abrEwmaFastLive) : this.bwEstimator.update(t.abrEwmaSlowVoD, t.abrEwmaFastVoD);
                }, b._abandonRulesCheck = function() {
                    var E = this.fragCurrent, r = this.partCurrent, t = this.hls, l = t.autoLevelEnabled, o = t.config, h = t.media;
                    if (E && h) {
                        var i = r ? r.stats : E.stats, a = r ? r.duration : E.duration;
                        if (i.aborted) return d.logger.warn("frag loader destroy or aborted, disarm abandonRules"), 
                        this.clearTimer(), void (this._nextAutoLevel = -1);
                        if (l && !h.paused && h.playbackRate && h.readyState) {
                            var f = performance.now() - i.loading.start, g = Math.abs(h.playbackRate);
                            if (!(f <= 500 * a / g)) {
                                var n = t.levels, c = t.minAutoLevel, u = n[E.level], s = i.total || Math.max(i.loaded, Math.round(a * u.maxBitrate / 8)), e = Math.max(1, i.bwEstimate ? i.bwEstimate / 8 : 1e3 * i.loaded / f), m = (s - i.loaded) / e, _ = h.currentTime, R = (D.BufferHelper.bufferInfo(h, _, o.maxBufferHole).end - _) / g;
                                if (!(R >= 2 * a / g || m <= R)) {
                                    var O, x = Number.POSITIVE_INFINITY;
                                    for (O = E.level - 1; O > c && !((x = a * n[O].maxBitrate / (6.4 * e)) < R); O--);
                                    if (!(x >= m)) {
                                        var w = this.bwEstimator.getEstimate();
                                        d.logger.warn("Fragment " + E.sn + (r ? " part " + r.index : "") + " of level " + E.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + O + `
      Current BW estimate: ` + (Object(k.isFiniteNumber)(w) ? (w / 1024).toFixed(3) : "Unknown") + ` Kb/s
      Estimated load time for current fragment: ` + m.toFixed(3) + ` s
      Estimated load time for the next fragment: ` + x.toFixed(3) + ` s
      Time to underbuffer: ` + R.toFixed(3) + " s"), t.nextLoadLevel = O, this.bwEstimator.sample(f, i.loaded), 
                                        this.clearTimer(), E.loader && (this.fragCurrent = this.partCurrent = null, 
                                        E.loader.abort()), t.trigger(L.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
                                            frag: E,
                                            part: r,
                                            stats: i
                                        });
                                    }
                                }
                            }
                        }
                    }
                }, b.onFragLoaded = function(E, r) {
                    var t = r.frag, l = r.part;
                    if (t.type === A.PlaylistLevelType.MAIN && Object(k.isFiniteNumber)(t.sn)) {
                        var o = l ? l.stats : t.stats, h = l ? l.duration : t.duration;
                        if (this.clearTimer(), this.lastLoadedFragLevel = t.level, 
                        this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var i = this.hls.levels[t.level], a = (i.loaded ? i.loaded.bytes : 0) + o.loaded, f = (i.loaded ? i.loaded.duration : 0) + h;
                            i.loaded = {
                                bytes: a,
                                duration: f
                            }, i.realBitrate = Math.round(8 * a / f);
                        }
                        if (t.bitrateTest) {
                            var g = {
                                stats: o,
                                frag: t,
                                part: l,
                                id: t.type
                            };
                            this.onFragBuffered(L.Events.FRAG_BUFFERED, g), t.bitrateTest = !1;
                        }
                    }
                }, b.onFragBuffered = function(E, r) {
                    var t = r.frag, l = r.part, o = l ? l.stats : t.stats;
                    if (!o.aborted && t.type === A.PlaylistLevelType.MAIN && t.sn !== "initSegment") {
                        var h = o.parsing.end - o.loading.start;
                        this.bwEstimator.sample(h, o.loaded), o.bwEstimate = this.bwEstimator.getEstimate(), 
                        t.bitrateTest ? this.bitrateTestDelay = h / 1e3 : this.bitrateTestDelay = 0;
                    }
                }, b.onError = function(E, r) {
                    switch (r.details) {
                      case I.ErrorDetails.FRAG_LOAD_ERROR:
                      case I.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        this.clearTimer();
                    }
                }, b.clearTimer = function() {
                    self.clearInterval(this.timer), this.timer = void 0;
                }, b.getNextABRAutoLevel = function() {
                    var E = this.fragCurrent, r = this.partCurrent, t = this.hls, l = t.maxAutoLevel, o = t.config, h = t.minAutoLevel, i = t.media, a = r ? r.duration : E ? E.duration : 0, f = i ? i.currentTime : 0, g = i && i.playbackRate !== 0 ? Math.abs(i.playbackRate) : 1, n = this.bwEstimator ? this.bwEstimator.getEstimate() : o.abrEwmaDefaultEstimate, c = (D.BufferHelper.bufferInfo(i, f, o.maxBufferHole).end - f) / g, u = this.findBestLevel(n, h, l, c, o.abrBandWidthFactor, o.abrBandWidthUpFactor);
                    if (u >= 0) return u;
                    d.logger.trace((c ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                    var s = a ? Math.min(a, o.maxStarvationDelay) : o.maxStarvationDelay, e = o.abrBandWidthFactor, m = o.abrBandWidthUpFactor;
                    if (!c) {
                        var _ = this.bitrateTestDelay;
                        _ && (s = (a ? Math.min(a, o.maxLoadingDelay) : o.maxLoadingDelay) - _, 
                        d.logger.trace("bitrate test took " + Math.round(1e3 * _) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * s) + " ms"), 
                        e = m = 1);
                    }
                    return u = this.findBestLevel(n, h, l, c + s, e, m), Math.max(u, 0);
                }, b.findBestLevel = function(E, r, t, l, o, h) {
                    for (var i, a = this.fragCurrent, f = this.partCurrent, g = this.lastLoadedFragLevel, n = this.hls.levels, c = n[g], u = !(c == null || (i = c.details) === null || i === void 0 || !i.live), s = c == null ? void 0 : c.codecSet, e = f ? f.duration : a ? a.duration : 0, m = t; m >= r; m--) {
                        var _ = n[m];
                        if (_ && (!s || _.codecSet === s)) {
                            var R, O = _.details, x = (f ? O == null ? void 0 : O.partTarget : O == null ? void 0 : O.averagetargetduration) || e;
                            R = m <= g ? o * E : h * E;
                            var w = n[m].maxBitrate, P = w * x / R;
                            if (d.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + m + "/" + Math.round(R) + "/" + w + "/" + x + "/" + l + "/" + P), 
                            R > w && (!P || u && !this.bitrateTestDelay || P < l)) return m;
                        }
                    }
                    return -1;
                }, (y = [ {
                    key: "nextAutoLevel",
                    get: function() {
                        var E = this._nextAutoLevel, r = this.bwEstimator;
                        if (!(E === -1 || r && r.canEstimate())) return E;
                        var t = this.getNextABRAutoLevel();
                        return E !== -1 && (t = Math.min(E, t)), t;
                    },
                    set: function(E) {
                        this._nextAutoLevel = E;
                    }
                } ]) && function(E, r) {
                    for (var t = 0; t < r.length; t++) {
                        var l = r[t];
                        l.enumerable = l.enumerable || !1, l.configurable = !0, 
                        "value" in l && (l.writable = !0), Object.defineProperty(E, l.key, l);
                    }
                }(p.prototype, y), p;
            }();
            C.default = T;
        },
        "./src/controller/audio-stream-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/polyfills/number.ts"), S = v("./src/controller/base-stream-controller.ts"), L = v("./src/events.ts"), D = v("./src/utils/buffer-helper.ts"), I = v("./src/controller/fragment-tracker.ts"), A = v("./src/types/level.ts"), d = v("./src/types/loader.ts"), T = v("./src/loader/fragment.ts"), p = v("./src/demux/chunk-cache.ts"), y = v("./src/demux/transmuxer-interface.ts"), b = v("./src/types/transmuxer.ts"), E = v("./src/controller/fragment-finders.ts"), r = v("./src/utils/discontinuities.ts"), t = v("./src/errors.ts"), l = v("./src/utils/logger.ts");
            function o() {
                return (o = Object.assign || function(a) {
                    for (var f = 1; f < arguments.length; f++) {
                        var g = arguments[f];
                        for (var n in g) Object.prototype.hasOwnProperty.call(g, n) && (a[n] = g[n]);
                    }
                    return a;
                }).apply(this, arguments);
            }
            function h(a, f) {
                return (h = Object.setPrototypeOf || function(g, n) {
                    return g.__proto__ = n, g;
                })(a, f);
            }
            var i = function(a) {
                var f, g;
                function n(u, s) {
                    var e;
                    return (e = a.call(this, u, s, "[audio-stream-controller]") || this).videoBuffer = null, 
                    e.videoTrackCC = -1, e.waitingVideoCC = -1, e.audioSwitch = !1, 
                    e.trackId = -1, e.waitingData = null, e.mainDetails = null, 
                    e.bufferFlushed = !1, e._registerListeners(), e;
                }
                g = a, (f = n).prototype = Object.create(g.prototype), f.prototype.constructor = f, 
                h(f, g);
                var c = n.prototype;
                return c.onHandlerDestroying = function() {
                    this._unregisterListeners(), this.mainDetails = null;
                }, c._registerListeners = function() {
                    var u = this.hls;
                    u.on(L.Events.MEDIA_ATTACHED, this.onMediaAttached, this), u.on(L.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    u.on(L.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    u.on(L.Events.LEVEL_LOADED, this.onLevelLoaded, this), u.on(L.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), 
                    u.on(L.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), 
                    u.on(L.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), 
                    u.on(L.Events.ERROR, this.onError, this), u.on(L.Events.BUFFER_RESET, this.onBufferReset, this), 
                    u.on(L.Events.BUFFER_CREATED, this.onBufferCreated, this), u.on(L.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), 
                    u.on(L.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), u.on(L.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }, c._unregisterListeners = function() {
                    var u = this.hls;
                    u.off(L.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    u.off(L.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    u.off(L.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    u.off(L.Events.LEVEL_LOADED, this.onLevelLoaded, this), u.off(L.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), 
                    u.off(L.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), 
                    u.off(L.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), 
                    u.off(L.Events.ERROR, this.onError, this), u.off(L.Events.BUFFER_RESET, this.onBufferReset, this), 
                    u.off(L.Events.BUFFER_CREATED, this.onBufferCreated, this), 
                    u.off(L.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), 
                    u.off(L.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), u.off(L.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }, c.onInitPtsFound = function(u, s) {
                    var e = s.frag, m = s.id, _ = s.initPTS;
                    if (m === "main") {
                        var R = e.cc;
                        this.initPTS[e.cc] = _, this.log("InitPTS for cc: " + R + " found from main: " + _), 
                        this.videoTrackCC = R, this.state === S.State.WAITING_INIT_PTS && this.tick();
                    }
                }, c.startLoad = function(u) {
                    if (!this.levels) return this.startPosition = u, void (this.state = S.State.STOPPED);
                    var s = this.lastCurrentTime;
                    this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, 
                    s > 0 && u === -1 ? (this.log("Override startPosition with lastCurrentTime @" + s.toFixed(3)), 
                    this.state = S.State.IDLE) : (this.loadedmetadata = !1, this.state = S.State.WAITING_TRACK), 
                    this.nextLoadPosition = this.startPosition = this.lastCurrentTime = u, 
                    this.tick();
                }, c.doTick = function() {
                    switch (this.state) {
                      case S.State.IDLE:
                        this.doTickIdle();
                        break;

                      case S.State.WAITING_TRACK:
                        var u, s = this.levels, e = this.trackId, m = s == null || (u = s[e]) === null || u === void 0 ? void 0 : u.details;
                        if (m) {
                            if (this.waitForCdnTuneIn(m)) break;
                            this.state = S.State.WAITING_INIT_PTS;
                        }
                        break;

                      case S.State.FRAG_LOADING_WAITING_RETRY:
                        var _, R = performance.now(), O = this.retryDate;
                        (!O || R >= O || (_ = this.media) !== null && _ !== void 0 && _.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), 
                        this.state = S.State.IDLE);
                        break;

                      case S.State.WAITING_INIT_PTS:
                        var x = this.waitingData;
                        if (x) {
                            var w = x.frag, P = x.part, N = x.cache, M = x.complete;
                            if (this.initPTS[w.cc] !== void 0) {
                                this.waitingData = null, this.waitingVideoCC = -1, 
                                this.state = S.State.FRAG_LOADING;
                                var B = {
                                    frag: w,
                                    part: P,
                                    payload: N.flush(),
                                    networkDetails: null
                                };
                                this._handleFragmentLoadProgress(B), M && a.prototype._handleFragmentLoadComplete.call(this, B);
                            } else if (this.videoTrackCC !== this.waitingVideoCC) l.logger.log("Waiting fragment cc (" + w.cc + ") cancelled because video is at cc " + this.videoTrackCC), 
                            this.clearWaitingFragment(); else {
                                var U = this.getLoadPosition(), G = D.BufferHelper.bufferInfo(this.mediaBuffer, U, this.config.maxBufferHole);
                                Object(E.fragmentWithinToleranceTest)(G.end, this.config.maxFragLookUpTolerance, w) < 0 && (l.logger.log("Waiting fragment cc (" + w.cc + ") @ " + w.start + " cancelled because another fragment at " + G.end + " is needed"), 
                                this.clearWaitingFragment());
                            }
                        } else this.state = S.State.IDLE;
                    }
                    this.onTickEnd();
                }, c.clearWaitingFragment = function() {
                    var u = this.waitingData;
                    u && (this.fragmentTracker.removeFragment(u.frag), this.waitingData = null, 
                    this.waitingVideoCC = -1, this.state = S.State.IDLE);
                }, c.onTickEnd = function() {
                    var u = this.media;
                    if (u && u.readyState) {
                        var s = (this.mediaBuffer ? this.mediaBuffer : u).buffered;
                        !this.loadedmetadata && s.length && (this.loadedmetadata = !0), 
                        this.lastCurrentTime = u.currentTime;
                    }
                }, c.doTickIdle = function() {
                    var u, s, e = this.hls, m = this.levels, _ = this.media, R = this.trackId, O = e.config;
                    if (m && m[R] && (_ || !this.startFragRequested && O.startFragPrefetch)) {
                        var x = m[R].details;
                        if (!x || x.live && this.levelLastLoaded !== R || this.waitForCdnTuneIn(x)) this.state = S.State.WAITING_TRACK; else {
                            this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, T.ElementaryStreamTypes.AUDIO, d.PlaylistLevelType.AUDIO));
                            var w = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, d.PlaylistLevelType.AUDIO);
                            if (w !== null) {
                                var P = w.len, N = this.getMaxBufferLength(), M = this.audioSwitch;
                                if (!(P >= N) || M) {
                                    if (!M && this._streamEnded(w, x)) return e.trigger(L.Events.BUFFER_EOS, {
                                        type: "audio"
                                    }), void (this.state = S.State.ENDED);
                                    var B = x.fragments[0].start, U = w.end;
                                    if (M) {
                                        var G = this.getLoadPosition();
                                        U = G, x.PTSKnown && G < B && (w.end > B || w.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), 
                                        _.currentTime = B + .05);
                                    }
                                    var V = this.getNextFragment(U, x);
                                    V ? ((u = V.decryptdata) === null || u === void 0 ? void 0 : u.keyFormat) !== "identity" || (s = V.decryptdata) !== null && s !== void 0 && s.key ? this.loadFragment(V, x, U) : this.loadKey(V, x) : this.bufferFlushed = !0;
                                }
                            }
                        }
                    }
                }, c.getMaxBufferLength = function() {
                    var u = a.prototype.getMaxBufferLength.call(this), s = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, d.PlaylistLevelType.MAIN);
                    return s === null ? u : Math.max(u, s.len);
                }, c.onMediaDetaching = function() {
                    this.videoBuffer = null, a.prototype.onMediaDetaching.call(this);
                }, c.onAudioTracksUpdated = function(u, s) {
                    var e = s.audioTracks;
                    this.resetTransmuxer(), this.levels = e.map(function(m) {
                        return new A.Level(m);
                    });
                }, c.onAudioTrackSwitching = function(u, s) {
                    var e = !!s.url;
                    this.trackId = s.id;
                    var m = this.fragCurrent;
                    m != null && m.loader && m.loader.abort(), this.fragCurrent = null, 
                    this.clearWaitingFragment(), e ? this.setInterval(100) : this.resetTransmuxer(), 
                    e ? (this.audioSwitch = !0, this.state = S.State.IDLE) : this.state = S.State.STOPPED, 
                    this.tick();
                }, c.onManifestLoading = function() {
                    this.mainDetails = null, this.fragmentTracker.removeAllFragments(), 
                    this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1;
                }, c.onLevelLoaded = function(u, s) {
                    this.mainDetails = s.details;
                }, c.onAudioTrackLoaded = function(u, s) {
                    var e, m = this.levels, _ = s.details, R = s.id;
                    if (m) {
                        this.log("Track " + R + " loaded [" + _.startSN + "," + _.endSN + "],duration:" + _.totalduration);
                        var O = m[R], x = 0;
                        if (_.live || (e = O.details) !== null && e !== void 0 && e.live) {
                            var w = this.mainDetails;
                            if (_.fragments[0] || (_.deltaUpdateFailed = !0), _.deltaUpdateFailed || !w) return;
                            !O.details && _.hasProgramDateTime && w.hasProgramDateTime ? (Object(r.alignPDT)(_, w), 
                            x = _.fragments[0].start) : x = this.alignPlaylists(_, O.details);
                        }
                        O.details = _, this.levelLastLoaded = R, this.startFragRequested || !this.mainDetails && _.live || this.setStartPosition(O.details, x), 
                        this.state !== S.State.WAITING_TRACK || this.waitForCdnTuneIn(_) || (this.state = S.State.IDLE), 
                        this.tick();
                    } else this.warn("Audio tracks were reset while loading level " + R);
                }, c._handleFragmentLoadProgress = function(u) {
                    var s, e = u.frag, m = u.part, _ = u.payload, R = this.config, O = this.trackId, x = this.levels;
                    if (x) {
                        var w = x[O], P = w.details, N = R.defaultAudioCodec || w.audioCodec || "mp4a.40.2", M = this.transmuxer;
                        M || (M = this.transmuxer = new y.default(this.hls, d.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                        var B = this.initPTS[e.cc], U = (s = e.initSegment) === null || s === void 0 ? void 0 : s.data;
                        if (B !== void 0) {
                            var G = m ? m.index : -1, V = G !== -1, H = new b.ChunkMetadata(e.level, e.sn, e.stats.chunkCount, _.byteLength, G, V);
                            M.push(_, U, N, "", e, m, P.totalduration, !1, H, B);
                        } else l.logger.log("Unknown video PTS for cc " + e.cc + ", waiting for video PTS before demuxing audio frag " + e.sn + " of [" + P.startSN + " ," + P.endSN + "],track " + O), 
                        (this.waitingData = this.waitingData || {
                            frag: e,
                            part: m,
                            cache: new p.default(),
                            complete: !1
                        }).cache.push(new Uint8Array(_)), this.waitingVideoCC = this.videoTrackCC, 
                        this.state = S.State.WAITING_INIT_PTS;
                    } else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + e.sn + " of level " + e.level + " will not be buffered");
                }, c._handleFragmentLoadComplete = function(u) {
                    this.waitingData ? this.waitingData.complete = !0 : a.prototype._handleFragmentLoadComplete.call(this, u);
                }, c.onBufferReset = function() {
                    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1;
                }, c.onBufferCreated = function(u, s) {
                    var e = s.tracks.audio;
                    e && (this.mediaBuffer = e.buffer), s.tracks.video && (this.videoBuffer = s.tracks.video.buffer);
                }, c.onFragBuffered = function(u, s) {
                    var e = s.frag, m = s.part;
                    e.type === d.PlaylistLevelType.AUDIO && (this.fragContextChanged(e) ? this.warn("Fragment " + e.sn + (m ? " p: " + m.index : "") + " of level " + e.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : (e.sn !== "initSegment" && (this.fragPrevious = e, 
                    this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(L.Events.AUDIO_TRACK_SWITCHED, {
                        id: this.trackId
                    }))), this.fragBufferedComplete(e, m)));
                }, c.onError = function(u, s) {
                    switch (s.details) {
                      case t.ErrorDetails.FRAG_LOAD_ERROR:
                      case t.ErrorDetails.FRAG_LOAD_TIMEOUT:
                      case t.ErrorDetails.KEY_LOAD_ERROR:
                      case t.ErrorDetails.KEY_LOAD_TIMEOUT:
                        this.onFragmentOrKeyLoadError(d.PlaylistLevelType.AUDIO, s);
                        break;

                      case t.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                      case t.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                        this.state !== S.State.ERROR && this.state !== S.State.STOPPED && (this.state = s.fatal ? S.State.ERROR : S.State.IDLE, 
                        this.warn(s.details + " while loading frag, switching to " + this.state + " state"));
                        break;

                      case t.ErrorDetails.BUFFER_FULL_ERROR:
                        if (s.parent === "audio" && (this.state === S.State.PARSING || this.state === S.State.PARSED)) {
                            var e = !0, m = this.getFwdBufferInfo(this.mediaBuffer, d.PlaylistLevelType.AUDIO);
                            m && m.len > .5 && (e = !this.reduceMaxBufferLength(m.len)), 
                            e && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), 
                            this.fragCurrent = null, a.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), 
                            this.resetLoadingState();
                        }
                    }
                }, c.onBufferFlushed = function(u, s) {
                    s.type === T.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0);
                }, c._handleTransmuxComplete = function(u) {
                    var s, e = "audio", m = this.hls, _ = u.remuxResult, R = u.chunkMeta, O = this.getCurrentContext(R);
                    if (!O) return this.warn("The loading context changed while buffering fragment " + R.sn + " of level " + R.level + ". This chunk will not be buffered."), 
                    void this.resetLiveStartWhenNotLoaded(R.level);
                    var x = O.frag, w = O.part, P = _.audio, N = _.text, M = _.id3, B = _.initSegment;
                    if (!this.fragContextChanged(x)) {
                        if (this.state = S.State.PARSING, this.audioSwitch && P && this.completeAudioSwitch(), 
                        B != null && B.tracks && (this._bufferInitSegment(B.tracks, x, R), 
                        m.trigger(L.Events.FRAG_PARSING_INIT_SEGMENT, {
                            frag: x,
                            id: e,
                            tracks: B.tracks
                        })), P) {
                            var U = P.startPTS, G = P.endPTS, V = P.startDTS, H = P.endDTS;
                            w && (w.elementaryStreams[T.ElementaryStreamTypes.AUDIO] = {
                                startPTS: U,
                                endPTS: G,
                                startDTS: V,
                                endDTS: H
                            }), x.setElementaryStreamInfo(T.ElementaryStreamTypes.AUDIO, U, G, V, H), 
                            this.bufferFragmentData(P, x, w, R);
                        }
                        if (M != null && (s = M.samples) !== null && s !== void 0 && s.length) {
                            var W = o({
                                frag: x,
                                id: e
                            }, M);
                            m.trigger(L.Events.FRAG_PARSING_METADATA, W);
                        }
                        if (N) {
                            var Y = o({
                                frag: x,
                                id: e
                            }, N);
                            m.trigger(L.Events.FRAG_PARSING_USERDATA, Y);
                        }
                    }
                }, c._bufferInitSegment = function(u, s, e) {
                    if (this.state === S.State.PARSING) {
                        u.video && delete u.video;
                        var m = u.audio;
                        if (m) {
                            m.levelCodec = m.codec, m.id = "audio", this.log("Init audio buffer, container:" + m.container + ", codecs[parsed]=[" + m.codec + "]"), 
                            this.hls.trigger(L.Events.BUFFER_CODECS, u);
                            var _ = m.initSegment;
                            if (_ != null && _.byteLength) {
                                var R = {
                                    type: "audio",
                                    frag: s,
                                    part: null,
                                    chunkMeta: e,
                                    parent: s.type,
                                    data: _
                                };
                                this.hls.trigger(L.Events.BUFFER_APPENDING, R);
                            }
                            this.tick();
                        }
                    }
                }, c.loadFragment = function(u, s, e) {
                    var m = this.fragmentTracker.getState(u);
                    this.fragCurrent = u, (this.audioSwitch || m === I.FragmentState.NOT_LOADED || m === I.FragmentState.PARTIAL) && (u.sn === "initSegment" ? this._loadInitSegment(u) : s.live && !Object(k.isFiniteNumber)(this.initPTS[u.cc]) ? (this.log("Waiting for video PTS in continuity counter " + u.cc + " of live stream before loading audio fragment " + u.sn + " of level " + this.trackId), 
                    this.state = S.State.WAITING_INIT_PTS) : (this.startFragRequested = !0, 
                    a.prototype.loadFragment.call(this, u, s, e)));
                }, c.completeAudioSwitch = function() {
                    var u = this.hls, s = this.media, e = this.trackId;
                    s && (this.log("Switching audio track : flushing all audio"), 
                    a.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), 
                    this.audioSwitch = !1, u.trigger(L.Events.AUDIO_TRACK_SWITCHED, {
                        id: e
                    });
                }, n;
            }(S.default);
            C.default = i;
        },
        "./src/controller/audio-track-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/events.ts"), S = v("./src/errors.ts"), L = v("./src/controller/base-playlist-controller.ts"), D = v("./src/types/loader.ts");
            function I(d, T) {
                return (I = Object.setPrototypeOf || function(p, y) {
                    return p.__proto__ = y, p;
                })(d, T);
            }
            var A = function(d) {
                var T, p;
                function y(r) {
                    var t;
                    return (t = d.call(this, r, "[audio-track-controller]") || this).tracks = [], 
                    t.groupId = null, t.tracksInGroup = [], t.trackId = -1, t.trackName = "", 
                    t.selectDefaultTrack = !0, t.registerListeners(), t;
                }
                p = d, (T = y).prototype = Object.create(p.prototype), T.prototype.constructor = T, 
                I(T, p);
                var b, E = y.prototype;
                return E.registerListeners = function() {
                    var r = this.hls;
                    r.on(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    r.on(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    r.on(k.Events.LEVEL_LOADING, this.onLevelLoading, this), r.on(k.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), 
                    r.on(k.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), 
                    r.on(k.Events.ERROR, this.onError, this);
                }, E.unregisterListeners = function() {
                    var r = this.hls;
                    r.off(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    r.off(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    r.off(k.Events.LEVEL_LOADING, this.onLevelLoading, this), r.off(k.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), 
                    r.off(k.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), 
                    r.off(k.Events.ERROR, this.onError, this);
                }, E.destroy = function() {
                    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, 
                    d.prototype.destroy.call(this);
                }, E.onManifestLoading = function() {
                    this.tracks = [], this.groupId = null, this.tracksInGroup = [], 
                    this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0;
                }, E.onManifestParsed = function(r, t) {
                    this.tracks = t.audioTracks || [];
                }, E.onAudioTrackLoaded = function(r, t) {
                    var l = t.id, o = t.details, h = this.tracksInGroup[l];
                    if (h) {
                        var i = h.details;
                        h.details = t.details, this.log("audioTrack " + l + " loaded [" + o.startSN + "-" + o.endSN + "]"), 
                        l === this.trackId && (this.retryCount = 0, this.playlistLoaded(l, t, i));
                    } else this.warn("Invalid audio track id " + l);
                }, E.onLevelLoading = function(r, t) {
                    this.switchLevel(t.level);
                }, E.onLevelSwitching = function(r, t) {
                    this.switchLevel(t.level);
                }, E.switchLevel = function(r) {
                    var t = this.hls.levels[r];
                    if (t != null && t.audioGroupIds) {
                        var l = t.audioGroupIds[t.urlId];
                        if (this.groupId !== l) {
                            this.groupId = l;
                            var o = this.tracks.filter(function(i) {
                                return !l || i.groupId === l;
                            });
                            this.selectDefaultTrack && !o.some(function(i) {
                                return i.default;
                            }) && (this.selectDefaultTrack = !1), this.tracksInGroup = o;
                            var h = {
                                audioTracks: o
                            };
                            this.log("Updating audio tracks, " + o.length + ' track(s) found in "' + l + '" group-id'), 
                            this.hls.trigger(k.Events.AUDIO_TRACKS_UPDATED, h), 
                            this.selectInitialTrack();
                        }
                    }
                }, E.onError = function(r, t) {
                    d.prototype.onError.call(this, r, t), !t.fatal && t.context && t.context.type === D.PlaylistContextType.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.retryLoadingOrFail(t);
                }, E.setAudioTrack = function(r) {
                    var t = this.tracksInGroup;
                    if (r < 0 || r >= t.length) this.warn("Invalid id passed to audio-track controller"); else {
                        this.clearTimer();
                        var l = t[this.trackId];
                        this.log("Now switching to audio-track index " + r);
                        var o = t[r], h = o.id, i = o.groupId, a = i === void 0 ? "" : i, f = o.name, g = o.type, n = o.url;
                        if (this.trackId = r, this.trackName = f, this.selectDefaultTrack = !1, 
                        this.hls.trigger(k.Events.AUDIO_TRACK_SWITCHING, {
                            id: h,
                            groupId: a,
                            name: f,
                            type: g,
                            url: n
                        }), !o.details || o.details.live) {
                            var c = this.switchParams(o.url, l == null ? void 0 : l.details);
                            this.loadPlaylist(c);
                        }
                    }
                }, E.selectInitialTrack = function() {
                    this.tracksInGroup;
                    var r = this.trackName, t = this.findTrackId(r) || this.findTrackId();
                    t !== -1 ? this.setAudioTrack(t) : (this.warn("No track found for running audio group-ID: " + this.groupId), 
                    this.hls.trigger(k.Events.ERROR, {
                        type: S.ErrorTypes.MEDIA_ERROR,
                        details: S.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                        fatal: !0
                    }));
                }, E.findTrackId = function(r) {
                    for (var t = this.tracksInGroup, l = 0; l < t.length; l++) {
                        var o = t[l];
                        if ((!this.selectDefaultTrack || o.default) && (!r || r === o.name)) return o.id;
                    }
                    return -1;
                }, E.loadPlaylist = function(r) {
                    var t = this.tracksInGroup[this.trackId];
                    if (this.shouldLoadTrack(t)) {
                        var l = t.id, o = t.groupId, h = t.url;
                        if (r) try {
                            h = r.addDirectives(h);
                        } catch (i) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + i);
                        }
                        this.log("loading audio-track playlist for id: " + l), this.clearTimer(), 
                        this.hls.trigger(k.Events.AUDIO_TRACK_LOADING, {
                            url: h,
                            id: l,
                            groupId: o,
                            deliveryDirectives: r || null
                        });
                    }
                }, (b = [ {
                    key: "audioTracks",
                    get: function() {
                        return this.tracksInGroup;
                    }
                }, {
                    key: "audioTrack",
                    get: function() {
                        return this.trackId;
                    },
                    set: function(r) {
                        this.selectDefaultTrack = !1, this.setAudioTrack(r);
                    }
                } ]) && function(r, t) {
                    for (var l = 0; l < t.length; l++) {
                        var o = t[l];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, 
                        "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
                    }
                }(y.prototype, b), y;
            }(L.default);
            C.default = A;
        },
        "./src/controller/base-playlist-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return A;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/types/level.ts"), L = v("./src/controller/level-helper.ts"), D = v("./src/utils/logger.ts"), I = v("./src/errors.ts"), A = function() {
                function d(p, y) {
                    this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, 
                    this.log = void 0, this.warn = void 0, this.log = D.logger.log.bind(D.logger, y + ":"), 
                    this.warn = D.logger.warn.bind(D.logger, y + ":"), this.hls = p;
                }
                var T = d.prototype;
                return T.destroy = function() {
                    this.clearTimer(), this.hls = this.log = this.warn = null;
                }, T.onError = function(p, y) {
                    y.fatal && y.type === I.ErrorTypes.NETWORK_ERROR && this.clearTimer();
                }, T.clearTimer = function() {
                    clearTimeout(this.timer), this.timer = -1;
                }, T.startLoad = function() {
                    this.canLoad = !0, this.retryCount = 0, this.loadPlaylist();
                }, T.stopLoad = function() {
                    this.canLoad = !1, this.clearTimer();
                }, T.switchParams = function(p, y) {
                    var b = y == null ? void 0 : y.renditionReports;
                    if (b) for (var E = 0; E < b.length; E++) {
                        var r = b[E], t = "" + r.URI;
                        if (t === p.substr(-t.length)) {
                            var l = parseInt(r["LAST-MSN"]), o = parseInt(r["LAST-PART"]);
                            if (y && this.hls.config.lowLatencyMode) {
                                var h = Math.min(y.age - y.partTarget, y.targetduration);
                                o !== void 0 && h > y.partTarget && (o += 1);
                            }
                            if (Object(k.isFiniteNumber)(l)) return new S.HlsUrlParameters(l, Object(k.isFiniteNumber)(o) ? o : void 0, S.HlsSkip.No);
                        }
                    }
                }, T.loadPlaylist = function(p) {}, T.shouldLoadTrack = function(p) {
                    return this.canLoad && p && !!p.url && (!p.details || p.details.live);
                }, T.playlistLoaded = function(p, y, b) {
                    var E = this, r = y.details, t = y.stats, l = t.loading.end ? Math.max(0, self.performance.now() - t.loading.end) : 0;
                    if (r.advancedDateTime = Date.now() - l, r.live || b != null && b.live) {
                        if (r.reloaded(b), b && this.log("live playlist " + p + " " + (r.advanced ? "REFRESHED " + r.lastPartSn + "-" + r.lastPartIndex : "MISSED")), 
                        b && r.fragments.length > 0 && Object(L.mergeDetails)(b, r), 
                        !this.canLoad || !r.live) return;
                        var o, h = void 0, i = void 0;
                        if (r.canBlockReload && r.endSN && r.advanced) {
                            var a = this.hls.config.lowLatencyMode, f = r.lastPartSn, g = r.endSN, n = r.lastPartIndex, c = f === g;
                            n !== -1 ? (h = c ? g + 1 : f, i = c ? a ? 0 : n : n + 1) : h = g + 1;
                            var u = r.age, s = u + r.ageHeader, e = Math.min(s - r.partTarget, 1.5 * r.targetduration);
                            if (e > 0) {
                                if (b && e > b.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + b.tuneInGoal + " to: " + e + " with playlist age: " + r.age), 
                                e = 0; else {
                                    var m = Math.floor(e / r.targetduration);
                                    h += m, i !== void 0 && (i += Math.round(e % r.targetduration / r.partTarget)), 
                                    this.log("CDN Tune-in age: " + r.ageHeader + "s last advanced " + u.toFixed(2) + "s goal: " + e + " skip sn " + m + " to part " + i);
                                }
                                r.tuneInGoal = e;
                            }
                            if (o = this.getDeliveryDirectives(r, y.deliveryDirectives, h, i), 
                            a || !c) return void this.loadPlaylist(o);
                        } else o = this.getDeliveryDirectives(r, y.deliveryDirectives, h, i);
                        var _ = Object(L.computeReloadInterval)(r, t);
                        h !== void 0 && r.canBlockReload && (_ -= r.partTarget || 1), 
                        this.log("reload live playlist " + p + " in " + Math.round(_) + " ms"), 
                        this.timer = self.setTimeout(function() {
                            return E.loadPlaylist(o);
                        }, _);
                    } else this.clearTimer();
                }, T.getDeliveryDirectives = function(p, y, b, E) {
                    var r = Object(S.getSkipValue)(p, b);
                    return y != null && y.skip && p.deltaUpdateFailed && (b = y.msn, 
                    E = y.part, r = S.HlsSkip.No), new S.HlsUrlParameters(b, E, r);
                }, T.retryLoadingOrFail = function(p) {
                    var y, b = this, E = this.hls.config, r = this.retryCount < E.levelLoadingMaxRetry;
                    if (r) if (this.retryCount++, p.details.indexOf("LoadTimeOut") > -1 && (y = p.context) !== null && y !== void 0 && y.deliveryDirectives) this.warn("retry playlist loading #" + this.retryCount + ' after "' + p.details + '"'), 
                    this.loadPlaylist(); else {
                        var t = Math.min(Math.pow(2, this.retryCount) * E.levelLoadingRetryDelay, E.levelLoadingMaxRetryTimeout);
                        this.timer = self.setTimeout(function() {
                            return b.loadPlaylist();
                        }, t), this.warn("retry playlist loading #" + this.retryCount + " in " + t + ' ms after "' + p.details + '"');
                    } else this.warn('cannot recover from error "' + p.details + '"'), 
                    this.clearTimer(), p.fatal = !0;
                    return r;
                }, d;
            }();
        },
        "./src/controller/base-stream-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "State", function() {
                return i;
            }), v.d(C, "default", function() {
                return a;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/task-loop.ts"), L = v("./src/controller/fragment-tracker.ts"), D = v("./src/utils/buffer-helper.ts"), I = v("./src/utils/logger.ts"), A = v("./src/events.ts"), d = v("./src/errors.ts"), T = v("./src/types/transmuxer.ts"), p = v("./src/utils/mp4-tools.ts"), y = v("./src/utils/discontinuities.ts"), b = v("./src/controller/fragment-finders.ts"), E = v("./src/controller/level-helper.ts"), r = v("./src/loader/fragment-loader.ts"), t = v("./src/crypt/decrypter.ts"), l = v("./src/utils/time-ranges.ts"), o = v("./src/types/loader.ts");
            function h(f, g) {
                return (h = Object.setPrototypeOf || function(n, c) {
                    return n.__proto__ = c, n;
                })(f, g);
            }
            var i = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_TRACK: "WAITING_TRACK",
                PARSING: "PARSING",
                PARSED: "PARSED",
                BACKTRACKING: "BACKTRACKING",
                ENDED: "ENDED",
                ERROR: "ERROR",
                WAITING_INIT_PTS: "WAITING_INIT_PTS",
                WAITING_LEVEL: "WAITING_LEVEL"
            }, a = function(f) {
                var g, n;
                function c(e, m, _) {
                    var R;
                    return (R = f.call(this) || this).hls = void 0, R.fragPrevious = null, 
                    R.fragCurrent = null, R.fragmentTracker = void 0, R.transmuxer = null, 
                    R._state = i.STOPPED, R.media = void 0, R.mediaBuffer = void 0, 
                    R.config = void 0, R.bitrateTest = !1, R.lastCurrentTime = 0, 
                    R.nextLoadPosition = 0, R.startPosition = 0, R.loadedmetadata = !1, 
                    R.fragLoadError = 0, R.retryDate = 0, R.levels = null, R.fragmentLoader = void 0, 
                    R.levelLastLoaded = null, R.startFragRequested = !1, R.decrypter = void 0, 
                    R.initPTS = [], R.onvseeking = null, R.onvended = null, R.logPrefix = "", 
                    R.log = void 0, R.warn = void 0, R.logPrefix = _, R.log = I.logger.log.bind(I.logger, _ + ":"), 
                    R.warn = I.logger.warn.bind(I.logger, _ + ":"), R.hls = e, R.fragmentLoader = new r.default(e.config), 
                    R.fragmentTracker = m, R.config = e.config, R.decrypter = new t.default(e, e.config), 
                    e.on(A.Events.KEY_LOADED, R.onKeyLoaded, function(O) {
                        if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return O;
                    }(R)), R;
                }
                n = f, (g = c).prototype = Object.create(n.prototype), g.prototype.constructor = g, 
                h(g, n);
                var u, s = c.prototype;
                return s.doTick = function() {
                    this.onTickEnd();
                }, s.onTickEnd = function() {}, s.startLoad = function(e) {}, s.stopLoad = function() {
                    this.fragmentLoader.abort();
                    var e = this.fragCurrent;
                    e && this.fragmentTracker.removeFragment(e), this.resetTransmuxer(), 
                    this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), 
                    this.clearNextTick(), this.state = i.STOPPED;
                }, s._streamEnded = function(e, m) {
                    var _ = this.fragCurrent, R = this.fragmentTracker;
                    if (!m.live && _ && _.sn === m.endSN && !e.nextStart) {
                        var O = R.getState(_);
                        return O === L.FragmentState.PARTIAL || O === L.FragmentState.OK;
                    }
                    return !1;
                }, s.onMediaAttached = function(e, m) {
                    var _ = this.media = this.mediaBuffer = m.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), 
                    _.addEventListener("seeking", this.onvseeking), _.addEventListener("ended", this.onvended);
                    var R = this.config;
                    this.levels && R.autoStartLoad && this.state === i.STOPPED && this.startLoad(R.startPosition);
                }, s.onMediaDetaching = function() {
                    var e = this.media;
                    e != null && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), 
                    this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), 
                    e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), 
                    this.media = this.mediaBuffer = null, this.loadedmetadata = !1, 
                    this.fragmentTracker.removeAllFragments(), this.stopLoad();
                }, s.onMediaSeeking = function() {
                    var e = this.config, m = this.fragCurrent, _ = this.media, R = this.mediaBuffer, O = this.state, x = _ ? _.currentTime : 0, w = D.BufferHelper.bufferInfo(R || _, x, e.maxBufferHole);
                    if (this.log("media seeking to " + (Object(k.isFiniteNumber)(x) ? x.toFixed(3) : x) + ", state: " + O), 
                    O === i.ENDED) this.resetLoadingState(); else if (m && !w.len) {
                        var P = e.maxFragLookUpTolerance, N = m.start - P, M = x > m.start + m.duration + P;
                        (x < N || M) && (M && m.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), 
                        m.loader.abort()), this.resetLoadingState());
                    }
                    _ && (this.lastCurrentTime = x), this.loadedmetadata || w.len || (this.nextLoadPosition = this.startPosition = x), 
                    this.tickImmediate();
                }, s.onMediaEnded = function() {
                    this.startPosition = this.lastCurrentTime = 0;
                }, s.onKeyLoaded = function(e, m) {
                    if (this.state === i.KEY_LOADING && m.frag === this.fragCurrent && this.levels) {
                        this.state = i.IDLE;
                        var _ = this.levels[m.frag.level].details;
                        _ && this.loadFragment(m.frag, _, m.frag.start);
                    }
                }, s.onHandlerDestroying = function() {
                    this.stopLoad(), f.prototype.onHandlerDestroying.call(this);
                }, s.onHandlerDestroyed = function() {
                    this.state = i.STOPPED, this.hls.off(A.Events.KEY_LOADED, this.onKeyLoaded, this), 
                    this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), 
                    this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, 
                    f.prototype.onHandlerDestroyed.call(this);
                }, s.loadKey = function(e, m) {
                    this.log("Loading key for " + e.sn + " of [" + m.startSN + "-" + m.endSN + "], " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + e.level), 
                    this.state = i.KEY_LOADING, this.fragCurrent = e, this.hls.trigger(A.Events.KEY_LOADING, {
                        frag: e
                    });
                }, s.loadFragment = function(e, m, _) {
                    this._loadFragForPlayback(e, m, _);
                }, s._loadFragForPlayback = function(e, m, _) {
                    var R = this;
                    this._doFragLoad(e, m, _, function(O) {
                        if (R.fragContextChanged(e)) return R.warn("Fragment " + e.sn + (O.part ? " p: " + O.part.index : "") + " of level " + e.level + " was dropped during download."), 
                        void R.fragmentTracker.removeFragment(e);
                        e.stats.chunkCount++, R._handleFragmentLoadProgress(O);
                    }).then(function(O) {
                        if (O) {
                            R.fragLoadError = 0;
                            var x = R.state;
                            if (!R.fragContextChanged(e)) return "payload" in O && (R.log("Loaded fragment " + e.sn + " of level " + e.level), 
                            R.hls.trigger(A.Events.FRAG_LOADED, O), R.state === i.BACKTRACKING) ? (R.fragmentTracker.backtrack(e, O), 
                            void R.resetFragmentLoading(e)) : void R._handleFragmentLoadComplete(O);
                            (x === i.FRAG_LOADING || x === i.BACKTRACKING || !R.fragCurrent && x === i.PARSING) && (R.fragmentTracker.removeFragment(e), 
                            R.state = i.IDLE);
                        }
                    }).catch(function(O) {
                        R.warn(O), R.resetFragmentLoading(e);
                    });
                }, s.flushMainBuffer = function(e, m, _) {
                    if (_ === void 0 && (_ = null), e - m) {
                        var R = {
                            startOffset: e,
                            endOffset: m,
                            type: _
                        };
                        this.fragLoadError = 0, this.hls.trigger(A.Events.BUFFER_FLUSHING, R);
                    }
                }, s._loadInitSegment = function(e) {
                    var m = this;
                    this._doFragLoad(e).then(function(_) {
                        if (!_ || m.fragContextChanged(e) || !m.levels) throw new Error("init load aborted");
                        return _;
                    }).then(function(_) {
                        var R = m.hls, O = _.payload, x = e.decryptdata;
                        if (O && O.byteLength > 0 && x && x.key && x.iv && x.method === "AES-128") {
                            var w = self.performance.now();
                            return m.decrypter.webCryptoDecrypt(new Uint8Array(O), x.key.buffer, x.iv.buffer).then(function(P) {
                                var N = self.performance.now();
                                return R.trigger(A.Events.FRAG_DECRYPTED, {
                                    frag: e,
                                    payload: P,
                                    stats: {
                                        tstart: w,
                                        tdecrypt: N
                                    }
                                }), _.payload = P, _;
                            });
                        }
                        return _;
                    }).then(function(_) {
                        var R = m.fragCurrent, O = m.hls, x = m.levels;
                        if (!x) throw new Error("init load aborted, missing levels");
                        x[e.level].details;
                        var w = e.stats;
                        m.state = i.IDLE, m.fragLoadError = 0, e.data = new Uint8Array(_.payload), 
                        w.parsing.start = w.buffering.start = self.performance.now(), 
                        w.parsing.end = w.buffering.end = self.performance.now(), 
                        _.frag === R && O.trigger(A.Events.FRAG_BUFFERED, {
                            stats: w,
                            frag: R,
                            part: null,
                            id: e.type
                        }), m.tick();
                    }).catch(function(_) {
                        m.warn(_), m.resetFragmentLoading(e);
                    });
                }, s.fragContextChanged = function(e) {
                    var m = this.fragCurrent;
                    return !e || !m || e.level !== m.level || e.sn !== m.sn || e.urlId !== m.urlId;
                }, s.fragBufferedComplete = function(e, m) {
                    var _ = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this.log("Buffered " + e.type + " sn: " + e.sn + (m ? " part: " + m.index : "") + " of " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + e.level + " " + l.default.toString(D.BufferHelper.getBuffered(_))), 
                    this.state = i.IDLE, this.tick();
                }, s._handleFragmentLoadComplete = function(e) {
                    var m = this.transmuxer;
                    if (m) {
                        var _ = e.frag, R = e.part, O = e.partsLoaded, x = !O || O.length === 0 || O.some(function(P) {
                            return !P;
                        }), w = new T.ChunkMetadata(_.level, _.sn, _.stats.chunkCount + 1, 0, R ? R.index : -1, !x);
                        m.flush(w);
                    }
                }, s._handleFragmentLoadProgress = function(e) {}, s._doFragLoad = function(e, m, _, R) {
                    var O = this;
                    if (_ === void 0 && (_ = null), !this.levels) throw new Error("frag load aborted, missing levels");
                    if (_ = Math.max(e.start, _ || 0), this.config.lowLatencyMode && m) {
                        var x = m.partList;
                        if (x && R) {
                            _ > e.end && m.fragmentHint && (e = m.fragmentHint);
                            var w = this.getNextPart(x, e, _);
                            if (w > -1) {
                                var P = x[w];
                                return this.log("Loading part sn: " + e.sn + " p: " + P.index + " cc: " + e.cc + " of playlist [" + m.startSN + "-" + m.endSN + "] parts [0-" + w + "-" + (x.length - 1) + "] " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + e.level + ", target: " + parseFloat(_.toFixed(3))), 
                                this.nextLoadPosition = P.start + P.duration, this.state = i.FRAG_LOADING, 
                                this.hls.trigger(A.Events.FRAG_LOADING, {
                                    frag: e,
                                    part: x[w],
                                    targetBufferTime: _
                                }), this.doFragPartsLoad(e, x, w, R).catch(function(N) {
                                    return O.handleFragLoadError(N);
                                });
                            }
                            if (!e.url || this.loadedEndOfParts(x, _)) return Promise.resolve(null);
                        }
                    }
                    return this.log("Loading fragment " + e.sn + " cc: " + e.cc + " " + (m ? "of [" + m.startSN + "-" + m.endSN + "] " : "") + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + e.level + ", target: " + parseFloat(_.toFixed(3))), 
                    Object(k.isFiniteNumber)(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), 
                    this.state = i.FRAG_LOADING, this.hls.trigger(A.Events.FRAG_LOADING, {
                        frag: e,
                        targetBufferTime: _
                    }), this.fragmentLoader.load(e, R).catch(function(N) {
                        return O.handleFragLoadError(N);
                    });
                }, s.doFragPartsLoad = function(e, m, _, R) {
                    var O = this;
                    return new Promise(function(x, w) {
                        var P = [];
                        (function N(M) {
                            var B = m[M];
                            O.fragmentLoader.loadPart(e, B, R).then(function(U) {
                                P[B.index] = U;
                                var G = U.part;
                                O.hls.trigger(A.Events.FRAG_LOADED, U);
                                var V = m[M + 1];
                                if (!V || V.fragment !== e) return x({
                                    frag: e,
                                    part: G,
                                    partsLoaded: P
                                });
                                N(M + 1);
                            }).catch(w);
                        })(_);
                    });
                }, s.handleFragLoadError = function(e) {
                    var m = e.data;
                    return m && m.details === d.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(m.frag, m.part) : this.hls.trigger(A.Events.ERROR, m), 
                    null;
                }, s._handleTransmuxerFlush = function(e) {
                    var m = this.getCurrentContext(e);
                    if (m && this.state === i.PARSING) {
                        var _ = m.frag, R = m.part, O = m.level, x = self.performance.now();
                        _.stats.parsing.end = x, R && (R.stats.parsing.end = x), 
                        this.updateLevelTiming(_, R, O, e.partial);
                    } else this.fragCurrent || (this.state = i.IDLE);
                }, s.getCurrentContext = function(e) {
                    var m = this.levels, _ = e.level, R = e.sn, O = e.part;
                    if (!m || !m[_]) return this.warn("Levels object was unset while buffering fragment " + R + " of level " + _ + ". The current chunk will not be buffered."), 
                    null;
                    var x = m[_], w = O > -1 ? Object(E.getPartWith)(x, R, O) : null, P = w ? w.fragment : Object(E.getFragmentWithSN)(x, R, this.fragCurrent);
                    return P ? {
                        frag: P,
                        part: w,
                        level: x
                    } : null;
                }, s.bufferFragmentData = function(e, m, _, R) {
                    if (e && this.state === i.PARSING) {
                        var O = e.data1, x = e.data2, w = O;
                        if (O && x && (w = Object(p.appendUint8Array)(O, x)), w && w.length) {
                            var P = {
                                type: e.type,
                                frag: m,
                                part: _,
                                chunkMeta: R,
                                parent: m.type,
                                data: w
                            };
                            this.hls.trigger(A.Events.BUFFER_APPENDING, P), e.dropped && e.independent && !_ && this.flushBufferGap(m);
                        }
                    }
                }, s.flushBufferGap = function(e) {
                    var m = this.media;
                    if (m) if (D.BufferHelper.isBuffered(m, m.currentTime)) {
                        var _ = m.currentTime, R = D.BufferHelper.bufferInfo(m, _, 0), O = e.duration, x = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * O), w = Math.max(Math.min(e.start - x, R.end - x), _ + x);
                        e.start - w > x && this.flushMainBuffer(w, e.start);
                    } else this.flushMainBuffer(0, e.start);
                }, s.getFwdBufferInfo = function(e, m) {
                    var _ = this.config, R = this.getLoadPosition();
                    if (!Object(k.isFiniteNumber)(R)) return null;
                    var O = D.BufferHelper.bufferInfo(e, R, _.maxBufferHole);
                    if (O.len === 0 && O.nextStart !== void 0) {
                        var x = this.fragmentTracker.getBufferedFrag(R, m);
                        if (x && O.nextStart < x.end) return D.BufferHelper.bufferInfo(e, R, Math.max(O.nextStart, _.maxBufferHole));
                    }
                    return O;
                }, s.getMaxBufferLength = function(e) {
                    var m, _ = this.config;
                    return m = e ? Math.max(8 * _.maxBufferSize / e, _.maxBufferLength) : _.maxBufferLength, 
                    Math.min(m, _.maxMaxBufferLength);
                }, s.reduceMaxBufferLength = function(e) {
                    var m = this.config, _ = e || m.maxBufferLength;
                    return m.maxMaxBufferLength >= _ && (m.maxMaxBufferLength /= 2, 
                    this.warn("Reduce max buffer length to " + m.maxMaxBufferLength + "s"), 
                    !0);
                }, s.getNextFragment = function(e, m) {
                    var _, R, O = m.fragments, x = O.length;
                    if (!x) return null;
                    var w, P = this.config, N = O[0].start;
                    if (m.live) {
                        var M = P.initialLiveManifestSize;
                        if (x < M) return this.warn("Not enough fragments to start playback (have: " + x + ", need: " + M + ")"), 
                        null;
                        m.PTSKnown || this.startFragRequested || this.startPosition !== -1 || (w = this.getInitialLiveFragment(m, O), 
                        this.startPosition = w ? this.hls.liveSyncPosition || w.start : e);
                    } else e <= N && (w = O[0]);
                    if (!w) {
                        var B = P.lowLatencyMode ? m.partEnd : m.fragmentEnd;
                        w = this.getFragmentAtPosition(e, B, m);
                    }
                    return (_ = w) === null || _ === void 0 || !_.initSegment || (R = w) !== null && R !== void 0 && R.initSegment.data || this.bitrateTest || (w = w.initSegment), 
                    w;
                }, s.getNextPart = function(e, m, _) {
                    for (var R = -1, O = !1, x = !0, w = 0, P = e.length; w < P; w++) {
                        var N = e[w];
                        if (x = x && !N.independent, R > -1 && _ < N.start) break;
                        var M = N.loaded;
                        !M && (O || N.independent || x) && N.fragment === m && (R = w), 
                        O = M;
                    }
                    return R;
                }, s.loadedEndOfParts = function(e, m) {
                    var _ = e[e.length - 1];
                    return _ && m > _.start && _.loaded;
                }, s.getInitialLiveFragment = function(e, m) {
                    var _ = this.fragPrevious, R = null;
                    if (_) {
                        if (e.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + _.programDateTime), 
                        R = Object(b.findFragmentByPDT)(m, _.endProgramDateTime, this.config.maxFragLookUpTolerance)), 
                        !R) {
                            var O = _.sn + 1;
                            if (O >= e.startSN && O <= e.endSN) {
                                var x = m[O - e.startSN];
                                _.cc === x.cc && (R = x, this.log("Live playlist, switching playlist, load frag with next SN: " + R.sn));
                            }
                            R || (R = Object(b.findFragWithCC)(m, _.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + R.sn);
                        }
                    } else {
                        var w = this.hls.liveSyncPosition;
                        w !== null && (R = this.getFragmentAtPosition(w, this.bitrateTest ? e.fragmentEnd : e.edge, e));
                    }
                    return R;
                }, s.getFragmentAtPosition = function(e, m, _) {
                    var R, O = this.config, x = this.fragPrevious, w = _.fragments, P = _.endSN, N = _.fragmentHint, M = O.maxFragLookUpTolerance, B = !!(O.lowLatencyMode && _.partList && N);
                    if (B && N && !this.bitrateTest && (w = w.concat(N), P = N.sn), 
                    e < m) {
                        var U = e > m - M ? 0 : M;
                        R = Object(b.findFragmentByPTS)(x, w, e, U);
                    } else R = w[w.length - 1];
                    if (R) {
                        var G = R.sn - _.startSN, V = x && R.level === x.level, H = w[G + 1];
                        if (this.fragmentTracker.getState(R) === L.FragmentState.BACKTRACKED) {
                            R = null;
                            for (var W = G; w[W] && this.fragmentTracker.getState(w[W]) === L.FragmentState.BACKTRACKED; ) R = x ? w[W--] : w[--W];
                            R || (R = H);
                        } else x && R.sn === x.sn && !B && V && (R.sn < P && this.fragmentTracker.getState(H) !== L.FragmentState.OK ? (this.log("SN " + R.sn + " just loaded, load next one: " + H.sn), 
                        R = H) : R = null);
                    }
                    return R;
                }, s.synchronizeToLiveEdge = function(e) {
                    var m = this.config, _ = this.media;
                    if (_) {
                        var R = this.hls.liveSyncPosition, O = _.currentTime, x = e.fragments[0].start, w = e.edge, P = O >= x - m.maxFragLookUpTolerance && O <= w;
                        if (R !== null && _.duration > R && (O < R || !P)) {
                            var N = m.liveMaxLatencyDuration !== void 0 ? m.liveMaxLatencyDuration : m.liveMaxLatencyDurationCount * e.targetduration;
                            (!P && _.readyState < 4 || O < w - N) && (this.loadedmetadata || (this.nextLoadPosition = R), 
                            _.readyState && (this.warn("Playback: " + O.toFixed(3) + " is located too far from the end of live sliding playlist: " + w + ", reset currentTime to : " + R.toFixed(3)), 
                            _.currentTime = R));
                        }
                    }
                }, s.alignPlaylists = function(e, m) {
                    var _ = this.levels, R = this.levelLastLoaded, O = this.fragPrevious, x = R !== null ? _[R] : null, w = e.fragments.length;
                    if (!w) return this.warn("No fragments in live playlist"), 0;
                    var P = e.fragments[0].start, N = !m, M = e.alignedSliding && Object(k.isFiniteNumber)(P);
                    if (N || !M && !P) {
                        Object(y.alignStream)(O, x, e);
                        var B = e.fragments[0].start;
                        return this.log("Live playlist sliding: " + B.toFixed(2) + " start-sn: " + (m ? m.startSN : "na") + "->" + e.startSN + " prev-sn: " + (O ? O.sn : "na") + " fragments: " + w), 
                        B;
                    }
                    return P;
                }, s.waitForCdnTuneIn = function(e) {
                    return e.live && e.canBlockReload && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget);
                }, s.setStartPosition = function(e, m) {
                    var _ = this.startPosition;
                    if (_ < m && (_ = -1), _ === -1 || this.lastCurrentTime === -1) {
                        var R = e.startTimeOffset;
                        Object(k.isFiniteNumber)(R) ? (_ = m + R, R < 0 && (_ += e.totalduration), 
                        _ = Math.min(Math.max(m, _), m + e.totalduration), this.log("Start time offset " + R + " found in playlist, adjust startPosition to " + _), 
                        this.startPosition = _) : e.live ? _ = this.hls.liveSyncPosition || m : this.startPosition = _ = 0, 
                        this.lastCurrentTime = _;
                    }
                    this.nextLoadPosition = _;
                }, s.getLoadPosition = function() {
                    var e = this.media, m = 0;
                    return this.loadedmetadata && e ? m = e.currentTime : this.nextLoadPosition && (m = this.nextLoadPosition), 
                    m;
                }, s.handleFragLoadAborted = function(e, m) {
                    this.transmuxer && e.sn !== "initSegment" && e.stats.aborted && (this.warn("Fragment " + e.sn + (m ? " part" + m.index : "") + " of level " + e.level + " was aborted"), 
                    this.resetFragmentLoading(e));
                }, s.resetFragmentLoading = function(e) {
                    this.fragCurrent && this.fragContextChanged(e) || (this.state = i.IDLE);
                }, s.onFragmentOrKeyLoadError = function(e, m) {
                    if (!m.fatal) {
                        var _ = m.frag;
                        if (_ && _.type === e) {
                            this.fragCurrent;
                            var R = this.config;
                            if (this.fragLoadError + 1 <= R.fragLoadingMaxRetry) {
                                if (this.resetLiveStartWhenNotLoaded(_.level)) return;
                                var O = Math.min(Math.pow(2, this.fragLoadError) * R.fragLoadingRetryDelay, R.fragLoadingMaxRetryTimeout);
                                this.warn("Fragment " + _.sn + " of " + e + " " + _.level + " failed to load, retrying in " + O + "ms"), 
                                this.retryDate = self.performance.now() + O, this.fragLoadError++, 
                                this.state = i.FRAG_LOADING_WAITING_RETRY;
                            } else m.levelRetry ? (e === o.PlaylistLevelType.AUDIO && (this.fragCurrent = null), 
                            this.fragLoadError = 0, this.state = i.IDLE) : (I.logger.error(m.details + " reaches max retry, redispatch as fatal ..."), 
                            m.fatal = !0, this.hls.stopLoad(), this.state = i.ERROR);
                        }
                    }
                }, s.afterBufferFlushed = function(e, m, _) {
                    if (e) {
                        var R = D.BufferHelper.getBuffered(e);
                        this.fragmentTracker.detectEvictedFragments(m, R, _), this.state === i.ENDED && this.resetLoadingState();
                    }
                }, s.resetLoadingState = function() {
                    this.fragCurrent = null, this.fragPrevious = null, this.state = i.IDLE;
                }, s.resetLiveStartWhenNotLoaded = function(e) {
                    if (!this.loadedmetadata) {
                        this.startFragRequested = !1;
                        var m = this.levels ? this.levels[e].details : null;
                        if (m != null && m.live) return this.startPosition = -1, 
                        this.setStartPosition(m, 0), this.resetLoadingState(), !0;
                        this.nextLoadPosition = this.startPosition;
                    }
                    return !1;
                }, s.updateLevelTiming = function(e, m, _, R) {
                    var O = this, x = _.details;
                    Object.keys(e.elementaryStreams).reduce(function(w, P) {
                        var N = e.elementaryStreams[P];
                        if (N) {
                            var M = N.endPTS - N.startPTS;
                            if (M <= 0) return O.warn("Could not parse fragment " + e.sn + " " + P + " duration reliably (" + M + ") resetting transmuxer to fallback to playlist timing"), 
                            O.resetTransmuxer(), w || !1;
                            var B = R ? 0 : Object(E.updateFragPTSDTS)(x, e, N.startPTS, N.endPTS, N.startDTS, N.endDTS);
                            return O.hls.trigger(A.Events.LEVEL_PTS_UPDATED, {
                                details: x,
                                level: _,
                                drift: B,
                                type: P,
                                frag: e,
                                start: N.startPTS,
                                end: N.endPTS
                            }), !0;
                        }
                        return w;
                    }, !1) ? (this.state = i.PARSED, this.hls.trigger(A.Events.FRAG_PARSED, {
                        frag: e,
                        part: m
                    })) : this.resetLoadingState();
                }, s.resetTransmuxer = function() {
                    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
                }, (u = [ {
                    key: "state",
                    get: function() {
                        return this._state;
                    },
                    set: function(e) {
                        var m = this._state;
                        m !== e && (this._state = e, this.log(m + "->" + e));
                    }
                } ]) && function(e, m) {
                    for (var _ = 0; _ < m.length; _++) {
                        var R = m[_];
                        R.enumerable = R.enumerable || !1, R.configurable = !0, 
                        "value" in R && (R.writable = !0), Object.defineProperty(e, R.key, R);
                    }
                }(c.prototype, u), c;
            }(S.default);
        },
        "./src/controller/buffer-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return b;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/events.ts"), L = v("./src/utils/logger.ts"), D = v("./src/errors.ts"), I = v("./src/utils/buffer-helper.ts"), A = v("./src/utils/mediasource-helper.ts"), d = v("./src/loader/fragment.ts"), T = v("./src/controller/buffer-operation-queue.ts"), p = Object(A.getMediaSource)(), y = /([ha]vc.)(?:\.[^.,]+)+/, b = function() {
                function E(t) {
                    var l = this;
                    this.details = null, this._objectUrl = null, this.operationQueue = void 0, 
                    this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, 
                    this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, 
                    this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, 
                    this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
                        var o = l.hls, h = l.media, i = l.mediaSource;
                        L.logger.log("[buffer-controller]: Media source opened"), 
                        h && (l.updateMediaElementDuration(), o.trigger(S.Events.MEDIA_ATTACHED, {
                            media: h
                        })), i && i.removeEventListener("sourceopen", l._onMediaSourceOpen), 
                        l.checkPendingTracks();
                    }, this._onMediaSourceClose = function() {
                        L.logger.log("[buffer-controller]: Media source closed");
                    }, this._onMediaSourceEnded = function() {
                        L.logger.log("[buffer-controller]: Media source ended");
                    }, this.hls = t, this._initSourceBuffer(), this.registerListeners();
                }
                var r = E.prototype;
                return r.hasSourceTypes = function() {
                    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
                }, r.destroy = function() {
                    this.unregisterListeners(), this.details = null;
                }, r.registerListeners = function() {
                    var t = this.hls;
                    t.on(S.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), 
                    t.on(S.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    t.on(S.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    t.on(S.Events.BUFFER_RESET, this.onBufferReset, this), t.on(S.Events.BUFFER_APPENDING, this.onBufferAppending, this), 
                    t.on(S.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.on(S.Events.BUFFER_EOS, this.onBufferEos, this), 
                    t.on(S.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), 
                    t.on(S.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(S.Events.FRAG_PARSED, this.onFragParsed, this), 
                    t.on(S.Events.FRAG_CHANGED, this.onFragChanged, this);
                }, r.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(S.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), 
                    t.off(S.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    t.off(S.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    t.off(S.Events.BUFFER_RESET, this.onBufferReset, this), t.off(S.Events.BUFFER_APPENDING, this.onBufferAppending, this), 
                    t.off(S.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.off(S.Events.BUFFER_EOS, this.onBufferEos, this), 
                    t.off(S.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), 
                    t.off(S.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(S.Events.FRAG_PARSED, this.onFragParsed, this), 
                    t.off(S.Events.FRAG_CHANGED, this.onFragChanged, this);
                }, r._initSourceBuffer = function() {
                    this.sourceBuffer = {}, this.operationQueue = new T.default(this.sourceBuffer), 
                    this.listeners = {
                        audio: [],
                        video: [],
                        audiovideo: []
                    };
                }, r.onManifestParsed = function(t, l) {
                    var o = 2;
                    (l.audio && !l.video || !l.altAudio) && (o = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = o, 
                    this.details = null, L.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
                }, r.onMediaAttaching = function(t, l) {
                    var o = this.media = l.media;
                    if (o && p) {
                        var h = this.mediaSource = new p();
                        h.addEventListener("sourceopen", this._onMediaSourceOpen), 
                        h.addEventListener("sourceended", this._onMediaSourceEnded), 
                        h.addEventListener("sourceclose", this._onMediaSourceClose), 
                        o.src = self.URL.createObjectURL(h), this._objectUrl = o.src;
                    }
                }, r.onMediaDetaching = function() {
                    var t = this.media, l = this.mediaSource, o = this._objectUrl;
                    if (l) {
                        if (L.logger.log("[buffer-controller]: media source detaching"), 
                        l.readyState === "open") try {
                            l.endOfStream();
                        } catch (h) {
                            L.logger.warn("[buffer-controller]: onMediaDetaching: " + h.message + " while calling endOfStream");
                        }
                        this.onBufferReset(), l.removeEventListener("sourceopen", this._onMediaSourceOpen), 
                        l.removeEventListener("sourceended", this._onMediaSourceEnded), 
                        l.removeEventListener("sourceclose", this._onMediaSourceClose), 
                        t && (o && self.URL.revokeObjectURL(o), t.src === o ? (t.removeAttribute("src"), 
                        t.load()) : L.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), 
                        this.mediaSource = null, this.media = null, this._objectUrl = null, 
                        this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, 
                        this.pendingTracks = {}, this.tracks = {};
                    }
                    this.hls.trigger(S.Events.MEDIA_DETACHED, void 0);
                }, r.onBufferReset = function() {
                    var t = this;
                    this.getSourceBufferTypes().forEach(function(l) {
                        var o = t.sourceBuffer[l];
                        try {
                            o && (t.removeBufferListeners(l), t.mediaSource && t.mediaSource.removeSourceBuffer(o), 
                            t.sourceBuffer[l] = void 0);
                        } catch (h) {
                            L.logger.warn("[buffer-controller]: Failed to reset the " + l + " buffer", h);
                        }
                    }), this._initSourceBuffer();
                }, r.onBufferCodecs = function(t, l) {
                    var o = this, h = this.getSourceBufferTypes().length;
                    Object.keys(l).forEach(function(i) {
                        if (h) {
                            var a = o.tracks[i];
                            if (a && typeof a.buffer.changeType == "function") {
                                var f = l[i], g = f.codec, n = f.levelCodec, c = f.container;
                                if ((a.levelCodec || a.codec).replace(y, "$1") !== (n || g).replace(y, "$1")) {
                                    var u = c + ";codecs=" + (n || g);
                                    o.appendChangeType(i, u);
                                }
                            }
                        } else o.pendingTracks[i] = l[i];
                    }), h || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), 
                    this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks());
                }, r.appendChangeType = function(t, l) {
                    var o = this, h = this.operationQueue, i = {
                        execute: function() {
                            var a = o.sourceBuffer[t];
                            a && (L.logger.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + l), 
                            a.changeType(l)), h.shiftAndExecuteNext(t);
                        },
                        onStart: function() {},
                        onComplete: function() {},
                        onError: function(a) {
                            L.logger.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", a);
                        }
                    };
                    h.append(i, t);
                }, r.onBufferAppending = function(t, l) {
                    var o = this, h = this.hls, i = this.operationQueue, a = this.tracks, f = l.data, g = l.type, n = l.frag, c = l.part, u = l.chunkMeta, s = u.buffering[g], e = self.performance.now();
                    s.start = e;
                    var m = n.stats.buffering, _ = c ? c.stats.buffering : null;
                    m.start === 0 && (m.start = e), _ && _.start === 0 && (_.start = e);
                    var R = a.audio, O = g === "audio" && u.id === 1 && (R == null ? void 0 : R.container) === "audio/mpeg", x = {
                        execute: function() {
                            if (s.executeStart = self.performance.now(), O) {
                                var w = o.sourceBuffer[g];
                                if (w) {
                                    var P = n.start - w.timestampOffset;
                                    Math.abs(P) >= .1 && (L.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + n.start + " (delta: " + P + ") sn: " + n.sn + ")"), 
                                    w.timestampOffset = n.start);
                                }
                            }
                            o.appendExecutor(f, g);
                        },
                        onStart: function() {},
                        onComplete: function() {
                            var w = self.performance.now();
                            s.executeEnd = s.end = w, m.first === 0 && (m.first = w), 
                            _ && _.first === 0 && (_.first = w);
                            var P = o.sourceBuffer, N = {};
                            for (var M in P) N[M] = I.BufferHelper.getBuffered(P[M]);
                            o.appendError = 0, o.hls.trigger(S.Events.BUFFER_APPENDED, {
                                type: g,
                                frag: n,
                                part: c,
                                chunkMeta: u,
                                parent: n.type,
                                timeRanges: N
                            });
                        },
                        onError: function(w) {
                            L.logger.error("[buffer-controller]: Error encountered while trying to append to the " + g + " SourceBuffer", w);
                            var P = {
                                type: D.ErrorTypes.MEDIA_ERROR,
                                parent: n.type,
                                details: D.ErrorDetails.BUFFER_APPEND_ERROR,
                                err: w,
                                fatal: !1
                            };
                            w.code === DOMException.QUOTA_EXCEEDED_ERR ? P.details = D.ErrorDetails.BUFFER_FULL_ERROR : (o.appendError++, 
                            P.details = D.ErrorDetails.BUFFER_APPEND_ERROR, o.appendError > h.config.appendErrorMaxRetry && (L.logger.error("[buffer-controller]: Failed " + h.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), 
                            P.fatal = !0)), h.trigger(S.Events.ERROR, P);
                        }
                    };
                    i.append(x, g);
                }, r.onBufferFlushing = function(t, l) {
                    var o = this, h = this.operationQueue, i = function(a) {
                        return {
                            execute: o.removeExecutor.bind(o, a, l.startOffset, l.endOffset),
                            onStart: function() {},
                            onComplete: function() {
                                o.hls.trigger(S.Events.BUFFER_FLUSHED, {
                                    type: a
                                });
                            },
                            onError: function(f) {
                                L.logger.warn("[buffer-controller]: Failed to remove from " + a + " SourceBuffer", f);
                            }
                        };
                    };
                    l.type ? h.append(i(l.type), l.type) : this.getSourceBufferTypes().forEach(function(a) {
                        h.append(i(a), a);
                    });
                }, r.onFragParsed = function(t, l) {
                    var o = this, h = l.frag, i = l.part, a = [], f = i ? i.elementaryStreams : h.elementaryStreams;
                    f[d.ElementaryStreamTypes.AUDIOVIDEO] ? a.push("audiovideo") : (f[d.ElementaryStreamTypes.AUDIO] && a.push("audio"), 
                    f[d.ElementaryStreamTypes.VIDEO] && a.push("video")), a.length === 0 && L.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + h.type + " level: " + h.level + " sn: " + h.sn), 
                    this.blockBuffers(function() {
                        var g = self.performance.now();
                        h.stats.buffering.end = g, i && (i.stats.buffering.end = g);
                        var n = i ? i.stats : h.stats;
                        o.hls.trigger(S.Events.FRAG_BUFFERED, {
                            frag: h,
                            part: i,
                            stats: n,
                            id: h.type
                        });
                    }, a);
                }, r.onFragChanged = function(t, l) {
                    this.flushBackBuffer();
                }, r.onBufferEos = function(t, l) {
                    var o = this;
                    this.getSourceBufferTypes().reduce(function(h, i) {
                        var a = o.sourceBuffer[i];
                        return l.type && l.type !== i || a && !a.ended && (a.ended = !0, 
                        L.logger.log("[buffer-controller]: " + i + " sourceBuffer now EOS")), 
                        h && !(a && !a.ended);
                    }, !0) && this.blockBuffers(function() {
                        var h = o.mediaSource;
                        h && h.readyState === "open" && h.endOfStream();
                    });
                }, r.onLevelUpdated = function(t, l) {
                    var o = l.details;
                    o.fragments.length && (this.details = o, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
                }, r.flushBackBuffer = function() {
                    var t = this.hls, l = this.details, o = this.media, h = this.sourceBuffer;
                    if (o && l !== null) {
                        var i = this.getSourceBufferTypes();
                        if (i.length) {
                            var a = l.live && t.config.liveBackBufferLength !== null ? t.config.liveBackBufferLength : t.config.backBufferLength;
                            if (Object(k.isFiniteNumber)(a) && !(a < 0)) {
                                var f = o.currentTime, g = l.levelTargetDuration, n = Math.max(a, g), c = Math.floor(f / g) * g - n;
                                i.forEach(function(u) {
                                    var s = h[u];
                                    if (s) {
                                        var e = I.BufferHelper.getBuffered(s);
                                        e.length > 0 && c > e.start(0) && (t.trigger(S.Events.BACK_BUFFER_REACHED, {
                                            bufferEnd: c
                                        }), l.live && t.trigger(S.Events.LIVE_BACK_BUFFER_REACHED, {
                                            bufferEnd: c
                                        }), t.trigger(S.Events.BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: c,
                                            type: u
                                        }));
                                    }
                                });
                            }
                        }
                    }
                }, r.updateMediaElementDuration = function() {
                    if (this.details && this.media && this.mediaSource && this.mediaSource.readyState === "open") {
                        var t = this.details, l = this.hls, o = this.media, h = this.mediaSource, i = t.fragments[0].start + t.totalduration, a = o.duration, f = Object(k.isFiniteNumber)(h.duration) ? h.duration : 0;
                        t.live && l.config.liveDurationInfinity ? (L.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), 
                        h.duration = 1 / 0, this.updateSeekableRange(t)) : (i > f && i > a || !Object(k.isFiniteNumber)(a)) && (L.logger.log("[buffer-controller]: Updating Media Source duration to " + i.toFixed(3)), 
                        h.duration = i);
                    }
                }, r.updateSeekableRange = function(t) {
                    var l = this.mediaSource, o = t.fragments;
                    if (o.length && t.live && l != null && l.setLiveSeekableRange) {
                        var h = Math.max(0, o[0].start), i = Math.max(h, h + t.totalduration);
                        l.setLiveSeekableRange(h, i);
                    }
                }, r.checkPendingTracks = function() {
                    var t = this.bufferCodecEventsExpected, l = this.operationQueue, o = this.pendingTracks, h = Object.keys(o).length;
                    if (h && !t || h === 2) {
                        this.createSourceBuffers(o), this.pendingTracks = {};
                        var i = this.getSourceBufferTypes();
                        if (i.length === 0) return void this.hls.trigger(S.Events.ERROR, {
                            type: D.ErrorTypes.MEDIA_ERROR,
                            details: D.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            reason: "could not create source buffer for media codec(s)"
                        });
                        i.forEach(function(a) {
                            l.executeNext(a);
                        });
                    }
                }, r.createSourceBuffers = function(t) {
                    var l = this.sourceBuffer, o = this.mediaSource;
                    if (!o) throw Error("createSourceBuffers called when mediaSource was null");
                    var h = 0;
                    for (var i in t) if (!l[i]) {
                        var a = t[i];
                        if (!a) throw Error("source buffer exists for track " + i + ", however track does not");
                        var f = a.levelCodec || a.codec, g = a.container + ";codecs=" + f;
                        L.logger.log("[buffer-controller]: creating sourceBuffer(" + g + ")");
                        try {
                            var n = l[i] = o.addSourceBuffer(g), c = i;
                            this.addBufferListener(c, "updatestart", this._onSBUpdateStart), 
                            this.addBufferListener(c, "updateend", this._onSBUpdateEnd), 
                            this.addBufferListener(c, "error", this._onSBUpdateError), 
                            this.tracks[i] = {
                                buffer: n,
                                codec: f,
                                container: a.container,
                                levelCodec: a.levelCodec,
                                id: a.id
                            }, h++;
                        } catch (u) {
                            L.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + u.message), 
                            this.hls.trigger(S.Events.ERROR, {
                                type: D.ErrorTypes.MEDIA_ERROR,
                                details: D.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                fatal: !1,
                                error: u,
                                mimeType: g
                            });
                        }
                    }
                    h && this.hls.trigger(S.Events.BUFFER_CREATED, {
                        tracks: this.tracks
                    });
                }, r._onSBUpdateStart = function(t) {
                    this.operationQueue.current(t).onStart();
                }, r._onSBUpdateEnd = function(t) {
                    var l = this.operationQueue;
                    l.current(t).onComplete(), l.shiftAndExecuteNext(t);
                }, r._onSBUpdateError = function(t, l) {
                    L.logger.error("[buffer-controller]: " + t + " SourceBuffer error", l), 
                    this.hls.trigger(S.Events.ERROR, {
                        type: D.ErrorTypes.MEDIA_ERROR,
                        details: D.ErrorDetails.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    });
                    var o = this.operationQueue.current(t);
                    o && o.onError(l);
                }, r.removeExecutor = function(t, l, o) {
                    var h = this.media, i = this.mediaSource, a = this.operationQueue, f = this.sourceBuffer[t];
                    if (!h || !i || !f) return L.logger.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), 
                    void a.shiftAndExecuteNext(t);
                    var g = Object(k.isFiniteNumber)(h.duration) ? h.duration : 1 / 0, n = Object(k.isFiniteNumber)(i.duration) ? i.duration : 1 / 0, c = Math.max(0, l), u = Math.min(o, g, n);
                    u > c ? (L.logger.log("[buffer-controller]: Removing [" + c + "," + u + "] from the " + t + " SourceBuffer"), 
                    f.remove(c, u)) : a.shiftAndExecuteNext(t);
                }, r.appendExecutor = function(t, l) {
                    var o = this.operationQueue, h = this.sourceBuffer[l];
                    if (!h) return L.logger.warn("[buffer-controller]: Attempting to append to the " + l + " SourceBuffer, but it does not exist"), 
                    void o.shiftAndExecuteNext(l);
                    h.ended = !1, h.appendBuffer(t);
                }, r.blockBuffers = function(t, l) {
                    var o = this;
                    if (l === void 0 && (l = this.getSourceBufferTypes()), !l.length) return L.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), 
                    void Promise.resolve(t);
                    var h = this.operationQueue, i = l.map(function(a) {
                        return h.appendBlocker(a);
                    });
                    Promise.all(i).then(function() {
                        t(), l.forEach(function(a) {
                            var f = o.sourceBuffer[a];
                            f && f.updating || h.shiftAndExecuteNext(a);
                        });
                    });
                }, r.getSourceBufferTypes = function() {
                    return Object.keys(this.sourceBuffer);
                }, r.addBufferListener = function(t, l, o) {
                    var h = this.sourceBuffer[t];
                    if (h) {
                        var i = o.bind(this, t);
                        this.listeners[t].push({
                            event: l,
                            listener: i
                        }), h.addEventListener(l, i);
                    }
                }, r.removeBufferListeners = function(t) {
                    var l = this.sourceBuffer[t];
                    l && this.listeners[t].forEach(function(o) {
                        l.removeEventListener(o.event, o.listener);
                    });
                }, E;
            }();
        },
        "./src/controller/buffer-operation-queue.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return S;
            });
            var k = v("./src/utils/logger.ts"), S = function() {
                function L(I) {
                    this.buffers = void 0, this.queues = {
                        video: [],
                        audio: [],
                        audiovideo: []
                    }, this.buffers = I;
                }
                var D = L.prototype;
                return D.append = function(I, A) {
                    var d = this.queues[A];
                    d.push(I), d.length === 1 && this.buffers[A] && this.executeNext(A);
                }, D.insertAbort = function(I, A) {
                    this.queues[A].unshift(I), this.executeNext(A);
                }, D.appendBlocker = function(I) {
                    var A, d = new Promise(function(p) {
                        A = p;
                    }), T = {
                        execute: A,
                        onStart: function() {},
                        onComplete: function() {},
                        onError: function() {}
                    };
                    return this.append(T, I), d;
                }, D.executeNext = function(I) {
                    var A = this.buffers, d = this.queues, T = A[I], p = d[I];
                    if (p.length) {
                        var y = p[0];
                        try {
                            y.execute();
                        } catch (b) {
                            k.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), 
                            y.onError(b), T && T.updating || (p.shift(), this.executeNext(I));
                        }
                    }
                }, D.shiftAndExecuteNext = function(I) {
                    this.queues[I].shift(), this.executeNext(I);
                }, D.current = function(I) {
                    return this.queues[I][0];
                }, L;
            }();
        },
        "./src/controller/cap-level-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/events.ts");
            function S(D, I) {
                for (var A = 0; A < I.length; A++) {
                    var d = I[A];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
                    Object.defineProperty(D, d.key, d);
                }
            }
            var L = function() {
                function D(p) {
                    this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, 
                    this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, 
                    this.streamController = void 0, this.clientRect = void 0, this.hls = p, 
                    this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, 
                    this.media = null, this.restrictedLevels = [], this.timer = void 0, 
                    this.clientRect = null, this.registerListeners();
                }
                var I, A, d, T = D.prototype;
                return T.setStreamController = function(p) {
                    this.streamController = p;
                }, T.destroy = function() {
                    this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), 
                    this.media = null, this.clientRect = null, this.hls = this.streamController = null;
                }, T.registerListeners = function() {
                    var p = this.hls;
                    p.on(k.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), 
                    p.on(k.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), 
                    p.on(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    p.on(k.Events.BUFFER_CODECS, this.onBufferCodecs, this), p.on(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
                }, T.unregisterListener = function() {
                    var p = this.hls;
                    p.off(k.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), 
                    p.off(k.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), 
                    p.off(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    p.off(k.Events.BUFFER_CODECS, this.onBufferCodecs, this), p.off(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
                }, T.onFpsDropLevelCapping = function(p, y) {
                    D.isLevelAllowed(y.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(y.droppedLevel);
                }, T.onMediaAttaching = function(p, y) {
                    this.media = y.media instanceof HTMLVideoElement ? y.media : null;
                }, T.onManifestParsed = function(p, y) {
                    var b = this.hls;
                    this.restrictedLevels = [], this.firstLevel = y.firstLevel, 
                    b.config.capLevelToPlayerSize && y.video && this.startCapping();
                }, T.onBufferCodecs = function(p, y) {
                    this.hls.config.capLevelToPlayerSize && y.video && this.startCapping();
                }, T.onMediaDetaching = function() {
                    this.stopCapping();
                }, T.detectPlayerSize = function() {
                    if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                        var p = this.hls.levels;
                        if (p.length) {
                            var y = this.hls;
                            y.autoLevelCapping = this.getMaxLevel(p.length - 1), 
                            y.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), 
                            this.autoLevelCapping = y.autoLevelCapping;
                        }
                    }
                }, T.getMaxLevel = function(p) {
                    var y = this, b = this.hls.levels;
                    if (!b.length) return -1;
                    var E = b.filter(function(r, t) {
                        return D.isLevelAllowed(t, y.restrictedLevels) && t <= p;
                    });
                    return this.clientRect = null, D.getMaxLevelByMediaSize(E, this.mediaWidth, this.mediaHeight);
                }, T.startCapping = function() {
                    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, 
                    this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), 
                    this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), 
                    this.detectPlayerSize());
                }, T.stopCapping = function() {
                    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, 
                    this.timer && (self.clearInterval(this.timer), this.timer = void 0);
                }, T.getDimensions = function() {
                    if (this.clientRect) return this.clientRect;
                    var p = this.media, y = {
                        width: 0,
                        height: 0
                    };
                    if (p) {
                        var b = p.getBoundingClientRect();
                        y.width = b.width, y.height = b.height, y.width || y.height || (y.width = b.right - b.left || p.width || 0, 
                        y.height = b.bottom - b.top || p.height || 0);
                    }
                    return this.clientRect = y, y;
                }, D.isLevelAllowed = function(p, y) {
                    return y === void 0 && (y = []), y.indexOf(p) === -1;
                }, D.getMaxLevelByMediaSize = function(p, y, b) {
                    if (!p || !p.length) return -1;
                    for (var E, r, t = p.length - 1, l = 0; l < p.length; l += 1) {
                        var o = p[l];
                        if ((o.width >= y || o.height >= b) && (E = o, !(r = p[l + 1]) || E.width !== r.width || E.height !== r.height)) {
                            t = l;
                            break;
                        }
                    }
                    return t;
                }, I = D, d = [ {
                    key: "contentScaleFactor",
                    get: function() {
                        var p = 1;
                        try {
                            p = self.devicePixelRatio;
                        } catch {}
                        return p;
                    }
                } ], (A = [ {
                    key: "mediaWidth",
                    get: function() {
                        return this.getDimensions().width * D.contentScaleFactor;
                    }
                }, {
                    key: "mediaHeight",
                    get: function() {
                        return this.getDimensions().height * D.contentScaleFactor;
                    }
                } ]) && S(I.prototype, A), d && S(I, d), D;
            }();
            C.default = L;
        },
        "./src/controller/eme-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/events.ts"), S = v("./src/errors.ts"), L = v("./src/utils/logger.ts"), D = v("./src/utils/mediakeys-helper.ts"), I = function() {
                function A(p) {
                    this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, 
                    this._licenseResponseCallback = void 0, this._emeEnabled = void 0, 
                    this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, 
                    this._config = void 0, this._mediaKeysList = [], this._media = null, 
                    this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, 
                    this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), 
                    this.hls = p, this._config = p.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, 
                    this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, 
                    this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, 
                    this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners();
                }
                var d, T = A.prototype;
                return T.destroy = function() {
                    this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, 
                    this._requestMediaKeySystemAccess = null;
                }, T._registerListeners = function() {
                    this.hls.on(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    this.hls.on(k.Events.MEDIA_DETACHED, this.onMediaDetached, this), 
                    this.hls.on(k.Events.MANIFEST_PARSED, this.onManifestParsed, this);
                }, T._unregisterListeners = function() {
                    this.hls.off(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    this.hls.off(k.Events.MEDIA_DETACHED, this.onMediaDetached, this), 
                    this.hls.off(k.Events.MANIFEST_PARSED, this.onManifestParsed, this);
                }, T.getLicenseServerUrl = function(p) {
                    switch (p) {
                      case D.KeySystems.WIDEVINE:
                        if (!this._widevineLicenseUrl) break;
                        return this._widevineLicenseUrl;
                    }
                    throw new Error('no license server URL configured for key-system "' + p + '"');
                }, T._attemptKeySystemAccess = function(p, y, b) {
                    var E = this, r = function(l, o, h, i) {
                        if (l === D.KeySystems.WIDEVINE) return function(a, f, g) {
                            var n = {
                                audioCapabilities: [],
                                videoCapabilities: []
                            };
                            return a.forEach(function(c) {
                                n.audioCapabilities.push({
                                    contentType: 'audio/mp4; codecs="' + c + '"',
                                    robustness: g.audioRobustness || ""
                                });
                            }), f.forEach(function(c) {
                                n.videoCapabilities.push({
                                    contentType: 'video/mp4; codecs="' + c + '"',
                                    robustness: g.videoRobustness || ""
                                });
                            }), [ n ];
                        }(o, h, i);
                        throw new Error("Unknown key-system: " + l);
                    }(p, y, b, this._drmSystemOptions);
                    L.logger.log("Requesting encrypted media key-system access");
                    var t = this.requestMediaKeySystemAccess(p, r);
                    this.mediaKeysPromise = t.then(function(l) {
                        return E._onMediaKeySystemAccessObtained(p, l);
                    }), t.catch(function(l) {
                        L.logger.error('Failed to obtain key-system "' + p + '" access:', l);
                    });
                }, T._onMediaKeySystemAccessObtained = function(p, y) {
                    var b = this;
                    L.logger.log('Access for key-system "' + p + '" obtained');
                    var E = {
                        mediaKeysSessionInitialized: !1,
                        mediaKeySystemAccess: y,
                        mediaKeySystemDomain: p
                    };
                    this._mediaKeysList.push(E);
                    var r = Promise.resolve().then(function() {
                        return y.createMediaKeys();
                    }).then(function(t) {
                        return E.mediaKeys = t, L.logger.log('Media-keys created for key-system "' + p + '"'), 
                        b._onMediaKeysCreated(), t;
                    });
                    return r.catch(function(t) {
                        L.logger.error("Failed to create media-keys:", t);
                    }), r;
                }, T._onMediaKeysCreated = function() {
                    var p = this;
                    this._mediaKeysList.forEach(function(y) {
                        y.mediaKeysSession || (y.mediaKeysSession = y.mediaKeys.createSession(), 
                        p._onNewMediaKeySession(y.mediaKeysSession));
                    });
                }, T._onNewMediaKeySession = function(p) {
                    var y = this;
                    L.logger.log("New key-system session " + p.sessionId), p.addEventListener("message", function(b) {
                        y._onKeySessionMessage(p, b.message);
                    }, !1);
                }, T._onKeySessionMessage = function(p, y) {
                    L.logger.log("Got EME message event, creating license request"), 
                    this._requestLicense(y, function(b) {
                        L.logger.log("Received license data (length: " + (b && b.byteLength) + "), updating key-session"), 
                        p.update(b);
                    });
                }, T.onMediaEncrypted = function(p) {
                    var y = this;
                    if (L.logger.log('Media is encrypted using "' + p.initDataType + '" init data type'), 
                    !this.mediaKeysPromise) return L.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), 
                    void this.hls.trigger(k.Events.ERROR, {
                        type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: S.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                        fatal: !0
                    });
                    var b = function(E) {
                        y._media && (y._attemptSetMediaKeys(E), y._generateRequestWithPreferredKeySession(p.initDataType, p.initData));
                    };
                    this.mediaKeysPromise.then(b).catch(b);
                }, T._attemptSetMediaKeys = function(p) {
                    if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
                    if (!this._hasSetMediaKeys) {
                        var y = this._mediaKeysList[0];
                        if (!y || !y.mediaKeys) return L.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), 
                        void this.hls.trigger(k.Events.ERROR, {
                            type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: S.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                            fatal: !0
                        });
                        L.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(y.mediaKeys), 
                        this._hasSetMediaKeys = !0;
                    }
                }, T._generateRequestWithPreferredKeySession = function(p, y) {
                    var b = this, E = this._mediaKeysList[0];
                    if (!E) return L.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), 
                    void this.hls.trigger(k.Events.ERROR, {
                        type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: S.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                    if (E.mediaKeysSessionInitialized) L.logger.warn("Key-Session already initialized but requested again"); else {
                        var r = E.mediaKeysSession;
                        if (!r) return L.logger.error("Fatal: Media is encrypted but no key-session existing"), 
                        void this.hls.trigger(k.Events.ERROR, {
                            type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: S.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !0
                        });
                        if (!y) return L.logger.warn("Fatal: initData required for generating a key session is null"), 
                        void this.hls.trigger(k.Events.ERROR, {
                            type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: S.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                            fatal: !0
                        });
                        L.logger.log('Generating key-session request for "' + p + '" init data type'), 
                        E.mediaKeysSessionInitialized = !0, r.generateRequest(p, y).then(function() {
                            L.logger.debug("Key-session generation succeeded");
                        }).catch(function(t) {
                            L.logger.error("Error generating key-session request:", t), 
                            b.hls.trigger(k.Events.ERROR, {
                                type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: S.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                fatal: !1
                            });
                        });
                    }
                }, T._createLicenseXhr = function(p, y, b) {
                    var E = new XMLHttpRequest();
                    E.responseType = "arraybuffer", E.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, E, p, y, b);
                    var r = this._licenseXhrSetup;
                    if (r) try {
                        r.call(this.hls, E, p), r = void 0;
                    } catch (t) {
                        L.logger.error(t);
                    }
                    try {
                        E.readyState || E.open("POST", p, !0), r && r.call(this.hls, E, p);
                    } catch (t) {
                        throw new Error("issue setting up KeySystem license XHR " + t);
                    }
                    return E;
                }, T._onLicenseRequestReadyStageChange = function(p, y, b, E) {
                    if (p.readyState === 4) if (p.status === 200) {
                        this._requestLicenseFailureCount = 0, L.logger.log("License request succeeded");
                        var r = p.response, t = this._licenseResponseCallback;
                        if (t) try {
                            r = t.call(this.hls, p, y);
                        } catch (o) {
                            L.logger.error(o);
                        }
                        E(r);
                    } else {
                        if (L.logger.error("License Request XHR failed (" + y + "). Status: " + p.status + " (" + p.statusText + ")"), 
                        this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(k.Events.ERROR, {
                            type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: S.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0
                        });
                        var l = 3 - this._requestLicenseFailureCount + 1;
                        L.logger.warn("Retrying license request, " + l + " attempts left"), 
                        this._requestLicense(b, E);
                    }
                }, T._generateLicenseRequestChallenge = function(p, y) {
                    if (p.mediaKeySystemDomain === D.KeySystems.WIDEVINE) return y;
                    throw new Error("unsupported key-system: " + p.mediaKeySystemDomain);
                }, T._requestLicense = function(p, y) {
                    L.logger.log("Requesting content license for key-system");
                    var b = this._mediaKeysList[0];
                    if (!b) return L.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), 
                    void this.hls.trigger(k.Events.ERROR, {
                        type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: S.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                    try {
                        var E = this.getLicenseServerUrl(b.mediaKeySystemDomain), r = this._createLicenseXhr(E, p, y);
                        L.logger.log("Sending license request to URL: " + E);
                        var t = this._generateLicenseRequestChallenge(b, p);
                        r.send(t);
                    } catch (l) {
                        L.logger.error("Failure requesting DRM license: " + l), 
                        this.hls.trigger(k.Events.ERROR, {
                            type: S.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: S.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0
                        });
                    }
                }, T.onMediaAttached = function(p, y) {
                    if (this._emeEnabled) {
                        var b = y.media;
                        this._media = b, b.addEventListener("encrypted", this._onMediaEncrypted);
                    }
                }, T.onMediaDetached = function() {
                    var p = this._media, y = this._mediaKeysList;
                    p && (p.removeEventListener("encrypted", this._onMediaEncrypted), 
                    this._media = null, this._mediaKeysList = [], Promise.all(y.map(function(b) {
                        if (b.mediaKeysSession) return b.mediaKeysSession.close().catch(function() {});
                    })).then(function() {
                        return p.setMediaKeys(null);
                    }).catch(function() {}));
                }, T.onManifestParsed = function(p, y) {
                    if (this._emeEnabled) {
                        var b = y.levels.map(function(r) {
                            return r.audioCodec;
                        }).filter(function(r) {
                            return !!r;
                        }), E = y.levels.map(function(r) {
                            return r.videoCodec;
                        }).filter(function(r) {
                            return !!r;
                        });
                        this._attemptKeySystemAccess(D.KeySystems.WIDEVINE, b, E);
                    }
                }, (d = [ {
                    key: "requestMediaKeySystemAccess",
                    get: function() {
                        if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                        return this._requestMediaKeySystemAccess;
                    }
                } ]) && function(p, y) {
                    for (var b = 0; b < y.length; b++) {
                        var E = y[b];
                        E.enumerable = E.enumerable || !1, E.configurable = !0, 
                        "value" in E && (E.writable = !0), Object.defineProperty(p, E.key, E);
                    }
                }(A.prototype, d), A;
            }();
            C.default = I;
        },
        "./src/controller/fps-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/events.ts"), S = v("./src/utils/logger.ts"), L = function() {
                function D(A) {
                    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, 
                    this.timer = void 0, this.media = null, this.lastTime = void 0, 
                    this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, 
                    this.hls = A, this.registerListeners();
                }
                var I = D.prototype;
                return I.setStreamController = function(A) {
                    this.streamController = A;
                }, I.registerListeners = function() {
                    this.hls.on(k.Events.MEDIA_ATTACHING, this.onMediaAttaching, this);
                }, I.unregisterListeners = function() {
                    this.hls.off(k.Events.MEDIA_ATTACHING, this.onMediaAttaching);
                }, I.destroy = function() {
                    this.timer && clearInterval(this.timer), this.unregisterListeners(), 
                    this.isVideoPlaybackQualityAvailable = !1, this.media = null;
                }, I.onMediaAttaching = function(A, d) {
                    var T = this.hls.config;
                    if (T.capLevelOnFPSDrop) {
                        var p = d.media instanceof self.HTMLVideoElement ? d.media : null;
                        this.media = p, p && typeof p.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), 
                        self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), T.fpsDroppedMonitoringPeriod);
                    }
                }, I.checkFPS = function(A, d, T) {
                    var p = performance.now();
                    if (d) {
                        if (this.lastTime) {
                            var y = p - this.lastTime, b = T - this.lastDroppedFrames, E = d - this.lastDecodedFrames, r = 1e3 * b / y, t = this.hls;
                            if (t.trigger(k.Events.FPS_DROP, {
                                currentDropped: b,
                                currentDecoded: E,
                                totalDroppedFrames: T
                            }), r > 0 && b > t.config.fpsDroppedMonitoringThreshold * E) {
                                var l = t.currentLevel;
                                S.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + l), 
                                l > 0 && (t.autoLevelCapping === -1 || t.autoLevelCapping >= l) && (l -= 1, 
                                t.trigger(k.Events.FPS_DROP_LEVEL_CAPPING, {
                                    level: l,
                                    droppedLevel: t.currentLevel
                                }), t.autoLevelCapping = l, this.streamController.nextLevelSwitch());
                            }
                        }
                        this.lastTime = p, this.lastDroppedFrames = T, this.lastDecodedFrames = d;
                    }
                }, I.checkFPSInterval = function() {
                    var A = this.media;
                    if (A) if (this.isVideoPlaybackQualityAvailable) {
                        var d = A.getVideoPlaybackQuality();
                        this.checkFPS(A, d.totalVideoFrames, d.droppedVideoFrames);
                    } else this.checkFPS(A, A.webkitDecodedFrameCount, A.webkitDroppedFrameCount);
                }, D;
            }();
            C.default = L;
        },
        "./src/controller/fragment-finders.ts": function(F, C, v) {
            v.r(C), v.d(C, "findFragmentByPDT", function() {
                return L;
            }), v.d(C, "findFragmentByPTS", function() {
                return D;
            }), v.d(C, "fragmentWithinToleranceTest", function() {
                return I;
            }), v.d(C, "pdtWithinToleranceTest", function() {
                return A;
            }), v.d(C, "findFragWithCC", function() {
                return d;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/utils/binary-search.ts");
            function L(T, p, y) {
                if (p === null || !Array.isArray(T) || !T.length || !Object(k.isFiniteNumber)(p) || p < (T[0].programDateTime || 0) || p >= (T[T.length - 1].endProgramDateTime || 0)) return null;
                y = y || 0;
                for (var b = 0; b < T.length; ++b) {
                    var E = T[b];
                    if (A(p, y, E)) return E;
                }
                return null;
            }
            function D(T, p, y, b) {
                y === void 0 && (y = 0), b === void 0 && (b = 0);
                var E = null;
                return T ? E = p[T.sn - p[0].sn + 1] || null : y === 0 && p[0].start === 0 && (E = p[0]), 
                E && I(y, b, E) === 0 ? E : S.default.search(p, I.bind(null, y, b)) || E;
            }
            function I(T, p, y) {
                T === void 0 && (T = 0), p === void 0 && (p = 0);
                var b = Math.min(p, y.duration + (y.deltaPTS ? y.deltaPTS : 0));
                return y.start + y.duration - b <= T ? 1 : y.start - b > T && y.start ? -1 : 0;
            }
            function A(T, p, y) {
                var b = 1e3 * Math.min(p, y.duration + (y.deltaPTS ? y.deltaPTS : 0));
                return (y.endProgramDateTime || 0) - b > T;
            }
            function d(T, p) {
                return S.default.search(T, function(y) {
                    return y.cc < p ? 1 : y.cc > p ? -1 : 0;
                });
            }
        },
        "./src/controller/fragment-tracker.ts": function(F, C, v) {
            v.r(C), v.d(C, "FragmentState", function() {
                return k;
            }), v.d(C, "FragmentTracker", function() {
                return I;
            });
            var k, S, L = v("./src/events.ts"), D = v("./src/types/loader.ts");
            (S = k || (k = {})).NOT_LOADED = "NOT_LOADED", S.BACKTRACKED = "BACKTRACKED", 
            S.APPENDING = "APPENDING", S.PARTIAL = "PARTIAL", S.OK = "OK";
            var I = function() {
                function T(y) {
                    this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), 
                    this.timeRanges = Object.create(null), this.bufferPadding = .2, 
                    this.hls = void 0, this.hls = y, this._registerListeners();
                }
                var p = T.prototype;
                return p._registerListeners = function() {
                    var y = this.hls;
                    y.on(L.Events.BUFFER_APPENDED, this.onBufferAppended, this), 
                    y.on(L.Events.FRAG_BUFFERED, this.onFragBuffered, this), y.on(L.Events.FRAG_LOADED, this.onFragLoaded, this);
                }, p._unregisterListeners = function() {
                    var y = this.hls;
                    y.off(L.Events.BUFFER_APPENDED, this.onBufferAppended, this), 
                    y.off(L.Events.FRAG_BUFFERED, this.onFragBuffered, this), y.off(L.Events.FRAG_LOADED, this.onFragLoaded, this);
                }, p.destroy = function() {
                    this._unregisterListeners(), this.fragments = this.timeRanges = null;
                }, p.getAppendedFrag = function(y, b) {
                    if (b === D.PlaylistLevelType.MAIN) {
                        var E = this.activeFragment, r = this.activeParts;
                        if (!E) return null;
                        if (r) for (var t = r.length; t--; ) {
                            var l = r[t], o = l ? l.end : E.appendedPTS;
                            if (l.start <= y && o !== void 0 && y <= o) return t > 9 && (this.activeParts = r.slice(t - 9)), 
                            l;
                        } else if (E.start <= y && E.appendedPTS !== void 0 && y <= E.appendedPTS) return E;
                    }
                    return this.getBufferedFrag(y, b);
                }, p.getBufferedFrag = function(y, b) {
                    for (var E = this.fragments, r = Object.keys(E), t = r.length; t--; ) {
                        var l = E[r[t]];
                        if ((l == null ? void 0 : l.body.type) === b && l.buffered) {
                            var o = l.body;
                            if (o.start <= y && y <= o.end) return o;
                        }
                    }
                    return null;
                }, p.detectEvictedFragments = function(y, b, E) {
                    var r = this;
                    Object.keys(this.fragments).forEach(function(t) {
                        var l = r.fragments[t];
                        if (l) if (l.buffered) {
                            var o = l.range[y];
                            o && o.time.some(function(h) {
                                var i = !r.isTimeBuffered(h.startPTS, h.endPTS, b);
                                return i && r.removeFragment(l.body), i;
                            });
                        } else l.body.type === E && r.removeFragment(l.body);
                    });
                }, p.detectPartialFragments = function(y) {
                    var b = this, E = this.timeRanges, r = y.frag, t = y.part;
                    if (E && r.sn !== "initSegment") {
                        var l = d(r), o = this.fragments[l];
                        o && (Object.keys(E).forEach(function(h) {
                            var i = r.elementaryStreams[h];
                            if (i) {
                                var a = E[h], f = t !== null || i.partial === !0;
                                o.range[h] = b.getBufferedTimes(r, t, f, a);
                            }
                        }), o.backtrack = o.loaded = null, Object.keys(o.range).length ? o.buffered = !0 : this.removeFragment(o.body));
                    }
                }, p.fragBuffered = function(y) {
                    var b = d(y), E = this.fragments[b];
                    E && (E.backtrack = E.loaded = null, E.buffered = !0);
                }, p.getBufferedTimes = function(y, b, E, r) {
                    for (var t = {
                        time: [],
                        partial: E
                    }, l = b ? b.start : y.start, o = b ? b.end : y.end, h = y.minEndPTS || o, i = y.maxStartPTS || l, a = 0; a < r.length; a++) {
                        var f = r.start(a) - this.bufferPadding, g = r.end(a) + this.bufferPadding;
                        if (i >= f && h <= g) {
                            t.time.push({
                                startPTS: Math.max(l, r.start(a)),
                                endPTS: Math.min(o, r.end(a))
                            });
                            break;
                        }
                        if (l < g && o > f) t.partial = !0, t.time.push({
                            startPTS: Math.max(l, r.start(a)),
                            endPTS: Math.min(o, r.end(a))
                        }); else if (o <= f) break;
                    }
                    return t;
                }, p.getPartialFragment = function(y) {
                    var b, E, r, t = null, l = 0, o = this.bufferPadding, h = this.fragments;
                    return Object.keys(h).forEach(function(i) {
                        var a = h[i];
                        a && A(a) && (E = a.body.start - o, r = a.body.end + o, 
                        y >= E && y <= r && (b = Math.min(y - E, r - y), l <= b && (t = a.body, 
                        l = b)));
                    }), t;
                }, p.getState = function(y) {
                    var b = d(y), E = this.fragments[b];
                    return E ? E.buffered ? A(E) ? k.PARTIAL : k.OK : E.backtrack ? k.BACKTRACKED : k.APPENDING : k.NOT_LOADED;
                }, p.backtrack = function(y, b) {
                    var E = d(y), r = this.fragments[E];
                    if (!r || r.backtrack) return null;
                    var t = r.backtrack = b || r.loaded;
                    return r.loaded = null, t;
                }, p.getBacktrackData = function(y) {
                    var b = d(y), E = this.fragments[b];
                    if (E) {
                        var r, t = E.backtrack;
                        if (t != null && (r = t.payload) !== null && r !== void 0 && r.byteLength) return t;
                        this.removeFragment(y);
                    }
                    return null;
                }, p.isTimeBuffered = function(y, b, E) {
                    for (var r, t, l = 0; l < E.length; l++) {
                        if (r = E.start(l) - this.bufferPadding, t = E.end(l) + this.bufferPadding, 
                        y >= r && b <= t) return !0;
                        if (b <= r) return !1;
                    }
                    return !1;
                }, p.onFragLoaded = function(y, b) {
                    var E = b.frag, r = b.part;
                    if (E.sn !== "initSegment" && !E.bitrateTest && !r) {
                        var t = d(E);
                        this.fragments[t] = {
                            body: E,
                            loaded: b,
                            backtrack: null,
                            buffered: !1,
                            range: Object.create(null)
                        };
                    }
                }, p.onBufferAppended = function(y, b) {
                    var E = this, r = b.frag, t = b.part, l = b.timeRanges;
                    if (r.type === D.PlaylistLevelType.MAIN) if (this.activeFragment = r, 
                    t) {
                        var o = this.activeParts;
                        o || (this.activeParts = o = []), o.push(t);
                    } else this.activeParts = null;
                    this.timeRanges = l, Object.keys(l).forEach(function(h) {
                        var i = l[h];
                        if (E.detectEvictedFragments(h, i), !t) for (var a = 0; a < i.length; a++) r.appendedPTS = Math.max(i.end(a), r.appendedPTS || 0);
                    });
                }, p.onFragBuffered = function(y, b) {
                    this.detectPartialFragments(b);
                }, p.hasFragment = function(y) {
                    var b = d(y);
                    return !!this.fragments[b];
                }, p.removeFragmentsInRange = function(y, b, E) {
                    var r = this;
                    Object.keys(this.fragments).forEach(function(t) {
                        var l = r.fragments[t];
                        if (l && l.buffered) {
                            var o = l.body;
                            o.type === E && o.start < b && o.end > y && r.removeFragment(o);
                        }
                    });
                }, p.removeFragment = function(y) {
                    var b = d(y);
                    y.stats.loaded = 0, y.clearElementaryStreamInfo(), delete this.fragments[b];
                }, p.removeAllFragments = function() {
                    this.fragments = Object.create(null), this.activeFragment = null, 
                    this.activeParts = null;
                }, T;
            }();
            function A(T) {
                var p, y;
                return T.buffered && (((p = T.range.video) === null || p === void 0 ? void 0 : p.partial) || ((y = T.range.audio) === null || y === void 0 ? void 0 : y.partial));
            }
            function d(T) {
                return T.type + "_" + T.level + "_" + T.urlId + "_" + T.sn;
            }
        },
        "./src/controller/gap-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "STALL_MINIMUM_DURATION_MS", function() {
                return I;
            }), v.d(C, "MAX_START_GAP_JUMP", function() {
                return A;
            }), v.d(C, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
                return d;
            }), v.d(C, "SKIP_BUFFER_RANGE_START", function() {
                return T;
            }), v.d(C, "default", function() {
                return p;
            });
            var k = v("./src/utils/buffer-helper.ts"), S = v("./src/errors.ts"), L = v("./src/events.ts"), D = v("./src/utils/logger.ts"), I = 250, A = 2, d = .1, T = .05, p = function() {
                function y(E, r, t, l) {
                    this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, 
                    this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, 
                    this.stalled = null, this.moved = !1, this.seeking = !1, this.config = E, 
                    this.media = r, this.fragmentTracker = t, this.hls = l;
                }
                var b = y.prototype;
                return b.destroy = function() {
                    this.hls = this.fragmentTracker = this.media = null;
                }, b.poll = function(E) {
                    var r = this.config, t = this.media, l = this.stalled, o = t.currentTime, h = t.seeking, i = this.seeking && !h, a = !this.seeking && h;
                    if (this.seeking = h, o === E) {
                        if ((a || i) && (this.stalled = null), !t.paused && !t.ended && t.playbackRate !== 0 && k.BufferHelper.getBuffered(t).length) {
                            var f = k.BufferHelper.bufferInfo(t, o, 0), g = f.len > 0, n = f.nextStart || 0;
                            if (g || n) {
                                if (h) {
                                    var c = f.len > A, u = !n || n - o > A && !this.fragmentTracker.getPartialFragment(o);
                                    if (c || u) return;
                                    this.moved = !1;
                                }
                                if (!this.moved && this.stalled !== null) {
                                    var s, e = Math.max(n, f.start || 0) - o, m = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, _ = !(m == null || (s = m.details) === null || s === void 0) && s.live ? 2 * m.details.targetduration : A;
                                    if (e > 0 && e <= _) return void this._trySkipBufferHole(null);
                                }
                                var R = self.performance.now();
                                if (l !== null) {
                                    var O = R - l;
                                    !h && O >= I && this._reportStall(f.len);
                                    var x = k.BufferHelper.bufferInfo(t, o, r.maxBufferHole);
                                    this._tryFixBufferStall(x, O);
                                } else this.stalled = R;
                            }
                        }
                    } else if (this.moved = !0, l !== null) {
                        if (this.stallReported) {
                            var w = self.performance.now() - l;
                            D.logger.warn("playback not stuck anymore @" + o + ", after " + Math.round(w) + "ms"), 
                            this.stallReported = !1;
                        }
                        this.stalled = null, this.nudgeRetry = 0;
                    }
                }, b._tryFixBufferStall = function(E, r) {
                    var t = this.config, l = this.fragmentTracker, o = this.media.currentTime, h = l.getPartialFragment(o);
                    h && this._trySkipBufferHole(h) || E.len > t.maxBufferHole && r > 1e3 * t.highBufferWatchdogPeriod && (D.logger.warn("Trying to nudge playhead over buffer-hole"), 
                    this.stalled = null, this._tryNudgeBuffer());
                }, b._reportStall = function(E) {
                    var r = this.hls, t = this.media;
                    this.stallReported || (this.stallReported = !0, D.logger.warn("Playback stalling at @" + t.currentTime + " due to low buffer (buffer=" + E + ")"), 
                    r.trigger(L.Events.ERROR, {
                        type: S.ErrorTypes.MEDIA_ERROR,
                        details: S.ErrorDetails.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        buffer: E
                    }));
                }, b._trySkipBufferHole = function(E) {
                    for (var r = this.config, t = this.hls, l = this.media, o = l.currentTime, h = 0, i = k.BufferHelper.getBuffered(l), a = 0; a < i.length; a++) {
                        var f = i.start(a);
                        if (o + r.maxBufferHole >= h && o < f) {
                            var g = Math.max(f + T, l.currentTime + d);
                            return D.logger.warn("skipping hole, adjusting currentTime from " + o + " to " + g), 
                            this.moved = !0, this.stalled = null, l.currentTime = g, 
                            E && t.trigger(L.Events.ERROR, {
                                type: S.ErrorTypes.MEDIA_ERROR,
                                details: S.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                fatal: !1,
                                reason: "fragment loaded with buffer holes, seeking from " + o + " to " + g,
                                frag: E
                            }), g;
                        }
                        h = i.end(a);
                    }
                    return 0;
                }, b._tryNudgeBuffer = function() {
                    var E = this.config, r = this.hls, t = this.media, l = t.currentTime, o = (this.nudgeRetry || 0) + 1;
                    if (this.nudgeRetry = o, o < E.nudgeMaxRetry) {
                        var h = l + o * E.nudgeOffset;
                        D.logger.warn("Nudging 'currentTime' from " + l + " to " + h), 
                        t.currentTime = h, r.trigger(L.Events.ERROR, {
                            type: S.ErrorTypes.MEDIA_ERROR,
                            details: S.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                            fatal: !1
                        });
                    } else D.logger.error("Playhead still not moving while enough data buffered @" + l + " after " + E.nudgeMaxRetry + " nudges"), 
                    r.trigger(L.Events.ERROR, {
                        type: S.ErrorTypes.MEDIA_ERROR,
                        details: S.ErrorDetails.BUFFER_STALLED_ERROR,
                        fatal: !0
                    });
                }, y;
            }();
        },
        "./src/controller/id3-track-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/events.ts"), S = v("./src/utils/texttrack-utils.ts"), L = v("./src/demux/id3.ts"), D = function() {
                function I(d) {
                    this.hls = void 0, this.id3Track = null, this.media = null, 
                    this.hls = d, this._registerListeners();
                }
                var A = I.prototype;
                return A.destroy = function() {
                    this._unregisterListeners();
                }, A._registerListeners = function() {
                    var d = this.hls;
                    d.on(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), d.on(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    d.on(k.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), 
                    d.on(k.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                }, A._unregisterListeners = function() {
                    var d = this.hls;
                    d.off(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    d.off(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    d.off(k.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), 
                    d.off(k.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                }, A.onMediaAttached = function(d, T) {
                    this.media = T.media;
                }, A.onMediaDetaching = function() {
                    this.id3Track && (Object(S.clearCurrentCues)(this.id3Track), 
                    this.id3Track = null, this.media = null);
                }, A.getID3Track = function(d) {
                    if (this.media) {
                        for (var T = 0; T < d.length; T++) {
                            var p = d[T];
                            if (p.kind === "metadata" && p.label === "id3") return Object(S.sendAddTrackEvent)(p, this.media), 
                            p;
                        }
                        return this.media.addTextTrack("metadata", "id3");
                    }
                }, A.onFragParsingMetadata = function(d, T) {
                    if (this.media) {
                        var p = T.frag, y = T.samples;
                        this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), 
                        this.id3Track.mode = "hidden");
                        for (var b = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, E = 0; E < y.length; E++) {
                            var r = L.getID3Frames(y[E].data);
                            if (r) {
                                var t = y[E].pts, l = E < y.length - 1 ? y[E + 1].pts : p.end;
                                l - t <= 0 && (l = t + .25);
                                for (var o = 0; o < r.length; o++) {
                                    var h = r[o];
                                    if (!L.isTimeStampFrame(h)) {
                                        var i = new b(t, l, "");
                                        i.value = h, this.id3Track.addCue(i);
                                    }
                                }
                            }
                        }
                    }
                }, A.onBufferFlushing = function(d, T) {
                    var p = T.startOffset, y = T.endOffset, b = T.type;
                    if (!b || b === "audio") {
                        var E = this.id3Track;
                        E && Object(S.removeCuesInRange)(E, p, y);
                    }
                }, I;
            }();
            C.default = D;
        },
        "./src/controller/latency-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return D;
            });
            var k = v("./src/errors.ts"), S = v("./src/events.ts"), L = v("./src/utils/logger.ts"), D = function() {
                function I(T) {
                    var p = this;
                    this.hls = void 0, this.config = void 0, this.media = null, 
                    this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, 
                    this._latency = null, this.timeupdateHandler = function() {
                        return p.timeupdate();
                    }, this.hls = T, this.config = T.config, this.registerListeners();
                }
                var A, d = I.prototype;
                return d.destroy = function() {
                    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, 
                    this.hls = this.timeupdateHandler = null;
                }, d.registerListeners = function() {
                    this.hls.on(S.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    this.hls.on(S.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    this.hls.on(S.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    this.hls.on(S.Events.LEVEL_UPDATED, this.onLevelUpdated, this), 
                    this.hls.on(S.Events.ERROR, this.onError, this);
                }, d.unregisterListeners = function() {
                    this.hls.off(S.Events.MEDIA_ATTACHED, this.onMediaAttached), 
                    this.hls.off(S.Events.MEDIA_DETACHING, this.onMediaDetaching), 
                    this.hls.off(S.Events.MANIFEST_LOADING, this.onManifestLoading), 
                    this.hls.off(S.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(S.Events.ERROR, this.onError);
                }, d.onMediaAttached = function(T, p) {
                    this.media = p.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
                }, d.onMediaDetaching = function() {
                    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), 
                    this.media = null);
                }, d.onManifestLoading = function() {
                    this.levelDetails = null, this._latency = null, this.stallCount = 0;
                }, d.onLevelUpdated = function(T, p) {
                    var y = p.details;
                    this.levelDetails = y, y.advanced && this.timeupdate(), !y.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
                }, d.onError = function(T, p) {
                    p.details === k.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, 
                    L.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
                }, d.timeupdate = function() {
                    var T = this.media, p = this.levelDetails;
                    if (T && p) {
                        this.currentTime = T.currentTime;
                        var y = this.computeLatency();
                        if (y !== null) {
                            this._latency = y;
                            var b = this.config, E = b.lowLatencyMode, r = b.maxLiveSyncPlaybackRate;
                            if (E && r !== 1) {
                                var t = this.targetLatency;
                                if (t !== null) {
                                    var l = y - t, o = l < Math.min(this.maxLatency, t + p.targetduration);
                                    if (p.live && o && l > .05 && this.forwardBufferLength > 1) {
                                        var h = Math.min(2, Math.max(1, r)), i = Math.round(2 / (1 + Math.exp(-.75 * l - this.edgeStalled)) * 20) / 20;
                                        T.playbackRate = Math.min(h, Math.max(1, i));
                                    } else T.playbackRate !== 1 && T.playbackRate !== 0 && (T.playbackRate = 1);
                                }
                            }
                        }
                    }
                }, d.estimateLiveEdge = function() {
                    var T = this.levelDetails;
                    return T === null ? null : T.edge + T.age;
                }, d.computeLatency = function() {
                    var T = this.estimateLiveEdge();
                    return T === null ? null : T - this.currentTime;
                }, (A = [ {
                    key: "latency",
                    get: function() {
                        return this._latency || 0;
                    }
                }, {
                    key: "maxLatency",
                    get: function() {
                        var T = this.config, p = this.levelDetails;
                        return T.liveMaxLatencyDuration !== void 0 ? T.liveMaxLatencyDuration : p ? T.liveMaxLatencyDurationCount * p.targetduration : 0;
                    }
                }, {
                    key: "targetLatency",
                    get: function() {
                        var T = this.levelDetails;
                        if (T === null) return null;
                        var p = T.holdBack, y = T.partHoldBack, b = T.targetduration, E = this.config, r = E.liveSyncDuration, t = E.liveSyncDurationCount, l = E.lowLatencyMode, o = this.hls.userConfig, h = l && y || p;
                        (o.liveSyncDuration || o.liveSyncDurationCount || h === 0) && (h = r !== void 0 ? r : t * b);
                        var i = b;
                        return h + Math.min(1 * this.stallCount, i);
                    }
                }, {
                    key: "liveSyncPosition",
                    get: function() {
                        var T = this.estimateLiveEdge(), p = this.targetLatency, y = this.levelDetails;
                        if (T === null || p === null || y === null) return null;
                        var b = y.edge, E = T - p - this.edgeStalled, r = b - y.totalduration, t = b - (this.config.lowLatencyMode && y.partTarget || y.targetduration);
                        return Math.min(Math.max(r, E), t);
                    }
                }, {
                    key: "drift",
                    get: function() {
                        var T = this.levelDetails;
                        return T === null ? 1 : T.drift;
                    }
                }, {
                    key: "edgeStalled",
                    get: function() {
                        var T = this.levelDetails;
                        if (T === null) return 0;
                        var p = 3 * (this.config.lowLatencyMode && T.partTarget || T.targetduration);
                        return Math.max(T.age - p, 0);
                    }
                }, {
                    key: "forwardBufferLength",
                    get: function() {
                        var T = this.media, p = this.levelDetails;
                        if (!T || !p) return 0;
                        var y = T.buffered.length;
                        return y ? T.buffered.end(y - 1) : p.edge - this.currentTime;
                    }
                } ]) && function(T, p) {
                    for (var y = 0; y < p.length; y++) {
                        var b = p[y];
                        b.enumerable = b.enumerable || !1, b.configurable = !0, 
                        "value" in b && (b.writable = !0), Object.defineProperty(T, b.key, b);
                    }
                }(I.prototype, A), I;
            }();
        },
        "./src/controller/level-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return b;
            });
            var k = v("./src/types/level.ts"), S = v("./src/events.ts"), L = v("./src/errors.ts"), D = v("./src/utils/codecs.ts"), I = v("./src/controller/level-helper.ts"), A = v("./src/controller/base-playlist-controller.ts"), d = v("./src/types/loader.ts");
            function T() {
                return (T = Object.assign || function(E) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (E[l] = t[l]);
                    }
                    return E;
                }).apply(this, arguments);
            }
            function p(E, r) {
                return (p = Object.setPrototypeOf || function(t, l) {
                    return t.__proto__ = l, t;
                })(E, r);
            }
            var y = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), b = function(E) {
                var r, t;
                function l(i) {
                    var a;
                    return (a = E.call(this, i, "[level-controller]") || this)._levels = [], 
                    a._firstLevel = -1, a._startLevel = void 0, a.currentLevelIndex = -1, 
                    a.manualLevelIndex = -1, a.onParsedComplete = void 0, a._registerListeners(), 
                    a;
                }
                t = E, (r = l).prototype = Object.create(t.prototype), r.prototype.constructor = r, 
                p(r, t);
                var o, h = l.prototype;
                return h._registerListeners = function() {
                    var i = this.hls;
                    i.on(S.Events.MANIFEST_LOADED, this.onManifestLoaded, this), 
                    i.on(S.Events.LEVEL_LOADED, this.onLevelLoaded, this), i.on(S.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), 
                    i.on(S.Events.FRAG_LOADED, this.onFragLoaded, this), i.on(S.Events.ERROR, this.onError, this);
                }, h._unregisterListeners = function() {
                    var i = this.hls;
                    i.off(S.Events.MANIFEST_LOADED, this.onManifestLoaded, this), 
                    i.off(S.Events.LEVEL_LOADED, this.onLevelLoaded, this), i.off(S.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), 
                    i.off(S.Events.FRAG_LOADED, this.onFragLoaded, this), i.off(S.Events.ERROR, this.onError, this);
                }, h.destroy = function() {
                    this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, 
                    E.prototype.destroy.call(this);
                }, h.startLoad = function() {
                    this._levels.forEach(function(i) {
                        i.loadError = 0;
                    }), E.prototype.startLoad.call(this);
                }, h.onManifestLoaded = function(i, a) {
                    var f, g, n = [], c = [], u = [], s = {}, e = !1, m = !1, _ = !1;
                    if (a.levels.forEach(function(w) {
                        var P = w.attrs;
                        e = e || !(!w.width || !w.height), m = m || !!w.videoCodec, 
                        _ = _ || !!w.audioCodec, y && w.audioCodec && w.audioCodec.indexOf("mp4a.40.34") !== -1 && (w.audioCodec = void 0);
                        var N = w.bitrate + "-" + w.attrs.RESOLUTION + "-" + w.attrs.CODECS;
                        (g = s[N]) ? g.url.push(w.url) : (g = new k.Level(w), s[N] = g, 
                        n.push(g)), P && (P.AUDIO && Object(I.addGroupId)(g, "audio", P.AUDIO), 
                        P.SUBTITLES && Object(I.addGroupId)(g, "text", P.SUBTITLES));
                    }), (e || m) && _ && (n = n.filter(function(w) {
                        var P = w.videoCodec, N = w.width, M = w.height;
                        return !!P || !(!N || !M);
                    })), n = n.filter(function(w) {
                        var P = w.audioCodec, N = w.videoCodec;
                        return (!P || Object(D.isCodecSupportedInMp4)(P, "audio")) && (!N || Object(D.isCodecSupportedInMp4)(N, "video"));
                    }), a.audioTracks && (c = a.audioTracks.filter(function(w) {
                        return !w.audioCodec || Object(D.isCodecSupportedInMp4)(w.audioCodec, "audio");
                    }), Object(I.assignTrackIdsByGroup)(c)), a.subtitles && (u = a.subtitles, 
                    Object(I.assignTrackIdsByGroup)(u)), n.length > 0) {
                        f = n[0].bitrate, n.sort(function(w, P) {
                            return w.bitrate - P.bitrate;
                        }), this._levels = n;
                        for (var R = 0; R < n.length; R++) if (n[R].bitrate === f) {
                            this._firstLevel = R, this.log("manifest loaded, " + n.length + " level(s) found, first bitrate: " + f);
                            break;
                        }
                        var O = _ && !m, x = {
                            levels: n,
                            audioTracks: c,
                            subtitleTracks: u,
                            firstLevel: this._firstLevel,
                            stats: a.stats,
                            audio: _,
                            video: m,
                            altAudio: !O && c.some(function(w) {
                                return !!w.url;
                            })
                        };
                        this.hls.trigger(S.Events.MANIFEST_PARSED, x), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
                    } else this.hls.trigger(S.Events.ERROR, {
                        type: L.ErrorTypes.MEDIA_ERROR,
                        details: L.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: a.url,
                        reason: "no level with compatible codecs found in manifest"
                    });
                }, h.onError = function(i, a) {
                    if (E.prototype.onError.call(this, i, a), !a.fatal) {
                        var f = a.context, g = this._levels[this.currentLevelIndex];
                        if (f && (f.type === d.PlaylistContextType.AUDIO_TRACK && g.audioGroupIds && f.groupId === g.audioGroupIds[g.urlId] || f.type === d.PlaylistContextType.SUBTITLE_TRACK && g.textGroupIds && f.groupId === g.textGroupIds[g.urlId])) this.redundantFailover(this.currentLevelIndex); else {
                            var n, c = !1, u = !0;
                            switch (a.details) {
                              case L.ErrorDetails.FRAG_LOAD_ERROR:
                              case L.ErrorDetails.FRAG_LOAD_TIMEOUT:
                              case L.ErrorDetails.KEY_LOAD_ERROR:
                              case L.ErrorDetails.KEY_LOAD_TIMEOUT:
                                if (a.frag) {
                                    var s = this._levels[a.frag.level];
                                    s ? (s.fragmentError++, s.fragmentError > this.hls.config.fragLoadingMaxRetry && (n = a.frag.level)) : n = a.frag.level;
                                }
                                break;

                              case L.ErrorDetails.LEVEL_LOAD_ERROR:
                              case L.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                f && (f.deliveryDirectives && (u = !1), n = f.level), 
                                c = !0;
                                break;

                              case L.ErrorDetails.REMUX_ALLOC_ERROR:
                                n = a.level, c = !0;
                            }
                            n !== void 0 && this.recoverLevel(a, n, c, u);
                        }
                    }
                }, h.recoverLevel = function(i, a, f, g) {
                    var n = i.details, c = this._levels[a];
                    if (c.loadError++, f) {
                        if (!this.retryLoadingOrFail(i)) return void (this.currentLevelIndex = -1);
                        i.levelRetry = !0;
                    }
                    if (g) {
                        var u = c.url.length;
                        if (u > 1 && c.loadError < u) i.levelRetry = !0, this.redundantFailover(a); else if (this.manualLevelIndex === -1) {
                            var s = a === 0 ? this._levels.length - 1 : a - 1;
                            this.currentLevelIndex !== s && this._levels[s].loadError === 0 && (this.warn(n + ": switch to " + s), 
                            i.levelRetry = !0, this.hls.nextAutoLevel = s);
                        }
                    }
                }, h.redundantFailover = function(i) {
                    var a = this._levels[i], f = a.url.length;
                    if (f > 1) {
                        var g = (a.urlId + 1) % f;
                        this.warn("Switching to redundant URL-id " + g), this._levels.forEach(function(n) {
                            n.urlId = g;
                        }), this.level = i;
                    }
                }, h.onFragLoaded = function(i, a) {
                    var f = a.frag;
                    if (f !== void 0 && f.type === d.PlaylistLevelType.MAIN) {
                        var g = this._levels[f.level];
                        g !== void 0 && (g.fragmentError = 0, g.loadError = 0);
                    }
                }, h.onLevelLoaded = function(i, a) {
                    var f, g, n = a.level, c = a.details, u = this._levels[n];
                    if (!u) return this.warn("Invalid level index " + n), void ((g = a.deliveryDirectives) !== null && g !== void 0 && g.skip && (c.deltaUpdateFailed = !0));
                    n === this.currentLevelIndex ? (u.fragmentError === 0 && (u.loadError = 0, 
                    this.retryCount = 0), this.playlistLoaded(n, a, u.details)) : (f = a.deliveryDirectives) !== null && f !== void 0 && f.skip && (c.deltaUpdateFailed = !0);
                }, h.onAudioTrackSwitched = function(i, a) {
                    var f = this.hls.levels[this.currentLevelIndex];
                    if (f && f.audioGroupIds) {
                        for (var g = -1, n = this.hls.audioTracks[a.id].groupId, c = 0; c < f.audioGroupIds.length; c++) if (f.audioGroupIds[c] === n) {
                            g = c;
                            break;
                        }
                        g !== f.urlId && (f.urlId = g, this.startLoad());
                    }
                }, h.loadPlaylist = function(i) {
                    var a = this.currentLevelIndex, f = this._levels[a];
                    if (this.canLoad && f && f.url.length > 0) {
                        var g = f.urlId, n = f.url[g];
                        if (i) try {
                            n = i.addDirectives(n);
                        } catch (c) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + c);
                        }
                        this.log("Attempt loading level index " + a + (i ? " at sn " + i.msn + " part " + i.part : "") + " with URL-id " + g + " " + n), 
                        this.clearTimer(), this.hls.trigger(S.Events.LEVEL_LOADING, {
                            url: n,
                            level: a,
                            id: g,
                            deliveryDirectives: i || null
                        });
                    }
                }, h.removeLevel = function(i, a) {
                    var f = function(n, c) {
                        return c !== a;
                    }, g = this._levels.filter(function(n, c) {
                        return c !== i || n.url.length > 1 && a !== void 0 && (n.url = n.url.filter(f), 
                        n.audioGroupIds && (n.audioGroupIds = n.audioGroupIds.filter(f)), 
                        n.textGroupIds && (n.textGroupIds = n.textGroupIds.filter(f)), 
                        n.urlId = 0, !0);
                    }).map(function(n, c) {
                        var u = n.details;
                        return u != null && u.fragments && u.fragments.forEach(function(s) {
                            s.level = c;
                        }), n;
                    });
                    this._levels = g, this.hls.trigger(S.Events.LEVELS_UPDATED, {
                        levels: g
                    });
                }, (o = [ {
                    key: "levels",
                    get: function() {
                        return this._levels.length === 0 ? null : this._levels;
                    }
                }, {
                    key: "level",
                    get: function() {
                        return this.currentLevelIndex;
                    },
                    set: function(i) {
                        var a, f = this._levels;
                        if (f.length !== 0 && (this.currentLevelIndex !== i || (a = f[i]) === null || a === void 0 || !a.details)) {
                            if (i < 0 || i >= f.length) {
                                var g = i < 0;
                                if (this.hls.trigger(S.Events.ERROR, {
                                    type: L.ErrorTypes.OTHER_ERROR,
                                    details: L.ErrorDetails.LEVEL_SWITCH_ERROR,
                                    level: i,
                                    fatal: g,
                                    reason: "invalid level idx"
                                }), g) return;
                                i = Math.min(i, f.length - 1);
                            }
                            this.clearTimer();
                            var n = this.currentLevelIndex, c = f[n], u = f[i];
                            this.log("switching to level " + i + " from " + n), 
                            this.currentLevelIndex = i;
                            var s = T({}, u, {
                                level: i,
                                maxBitrate: u.maxBitrate,
                                uri: u.uri,
                                urlId: u.urlId
                            });
                            delete s._urlId, this.hls.trigger(S.Events.LEVEL_SWITCHING, s);
                            var e = u.details;
                            if (!e || e.live) {
                                var m = this.switchParams(u.uri, c == null ? void 0 : c.details);
                                this.loadPlaylist(m);
                            }
                        }
                    }
                }, {
                    key: "manualLevel",
                    get: function() {
                        return this.manualLevelIndex;
                    },
                    set: function(i) {
                        this.manualLevelIndex = i, this._startLevel === void 0 && (this._startLevel = i), 
                        i !== -1 && (this.level = i);
                    }
                }, {
                    key: "firstLevel",
                    get: function() {
                        return this._firstLevel;
                    },
                    set: function(i) {
                        this._firstLevel = i;
                    }
                }, {
                    key: "startLevel",
                    get: function() {
                        if (this._startLevel === void 0) {
                            var i = this.hls.config.startLevel;
                            return i !== void 0 ? i : this._firstLevel;
                        }
                        return this._startLevel;
                    },
                    set: function(i) {
                        this._startLevel = i;
                    }
                }, {
                    key: "nextLoadLevel",
                    get: function() {
                        return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
                    },
                    set: function(i) {
                        this.level = i, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = i);
                    }
                } ]) && function(i, a) {
                    for (var f = 0; f < a.length; f++) {
                        var g = a[f];
                        g.enumerable = g.enumerable || !1, g.configurable = !0, 
                        "value" in g && (g.writable = !0), Object.defineProperty(i, g.key, g);
                    }
                }(l.prototype, o), l;
            }(A.default);
        },
        "./src/controller/level-helper.ts": function(F, C, v) {
            v.r(C), v.d(C, "addGroupId", function() {
                return L;
            }), v.d(C, "assignTrackIdsByGroup", function() {
                return D;
            }), v.d(C, "updatePTS", function() {
                return I;
            }), v.d(C, "updateFragPTSDTS", function() {
                return d;
            }), v.d(C, "mergeDetails", function() {
                return T;
            }), v.d(C, "mapPartIntersection", function() {
                return p;
            }), v.d(C, "mapFragmentIntersection", function() {
                return y;
            }), v.d(C, "adjustSliding", function() {
                return b;
            }), v.d(C, "addSliding", function() {
                return E;
            }), v.d(C, "computeReloadInterval", function() {
                return r;
            }), v.d(C, "getFragmentWithSN", function() {
                return t;
            }), v.d(C, "getPartWith", function() {
                return l;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/utils/logger.ts");
            function L(o, h, i) {
                switch (h) {
                  case "audio":
                    o.audioGroupIds || (o.audioGroupIds = []), o.audioGroupIds.push(i);
                    break;

                  case "text":
                    o.textGroupIds || (o.textGroupIds = []), o.textGroupIds.push(i);
                }
            }
            function D(o) {
                var h = {};
                o.forEach(function(i) {
                    var a = i.groupId || "";
                    i.id = h[a] = h[a] || 0, h[a]++;
                });
            }
            function I(o, h, i) {
                A(o[h], o[i]);
            }
            function A(o, h) {
                var i = h.startPTS;
                if (Object(k.isFiniteNumber)(i)) {
                    var a, f = 0;
                    h.sn > o.sn ? (f = i - o.start, a = o) : (f = o.start - i, a = h), 
                    a.duration !== f && (a.duration = f);
                } else h.sn > o.sn ? o.cc === h.cc && o.minEndPTS ? h.start = o.start + (o.minEndPTS - o.start) : h.start = o.start + o.duration : h.start = Math.max(o.start - h.duration, 0);
            }
            function d(o, h, i, a, f, g) {
                a - i <= 0 && (S.logger.warn("Fragment should have a positive duration", h), 
                a = i + h.duration, g = f + h.duration);
                var n = i, c = a, u = h.startPTS, s = h.endPTS;
                if (Object(k.isFiniteNumber)(u)) {
                    var e = Math.abs(u - i);
                    Object(k.isFiniteNumber)(h.deltaPTS) ? h.deltaPTS = Math.max(e, h.deltaPTS) : h.deltaPTS = e, 
                    n = Math.max(i, u), i = Math.min(i, u), f = Math.min(f, h.startDTS), 
                    c = Math.min(a, s), a = Math.max(a, s), g = Math.max(g, h.endDTS);
                }
                h.duration = a - i;
                var m = i - h.start;
                h.appendedPTS = a, h.start = h.startPTS = i, h.maxStartPTS = n, 
                h.startDTS = f, h.endPTS = a, h.minEndPTS = c, h.endDTS = g;
                var _, R = h.sn;
                if (!o || R < o.startSN || R > o.endSN) return 0;
                var O = R - o.startSN, x = o.fragments;
                for (x[O] = h, _ = O; _ > 0; _--) A(x[_], x[_ - 1]);
                for (_ = O; _ < x.length - 1; _++) A(x[_], x[_ + 1]);
                return o.fragmentHint && A(x[x.length - 1], o.fragmentHint), o.PTSKnown = o.alignedSliding = !0, 
                m;
            }
            function T(o, h) {
                for (var i = null, a = o.fragments, f = a.length - 1; f >= 0; f--) {
                    var g = a[f].initSegment;
                    if (g) {
                        i = g;
                        break;
                    }
                }
                o.fragmentHint && delete o.fragmentHint.endPTS;
                var n, c = 0;
                if (y(o, h, function(R, O) {
                    var x;
                    R.relurl && (c = R.cc - O.cc), Object(k.isFiniteNumber)(R.startPTS) && Object(k.isFiniteNumber)(R.endPTS) && (O.start = O.startPTS = R.startPTS, 
                    O.startDTS = R.startDTS, O.appendedPTS = R.appendedPTS, O.maxStartPTS = R.maxStartPTS, 
                    O.endPTS = R.endPTS, O.endDTS = R.endDTS, O.minEndPTS = R.minEndPTS, 
                    O.duration = R.endPTS - R.startPTS, O.duration && (n = O), h.PTSKnown = h.alignedSliding = !0), 
                    O.elementaryStreams = R.elementaryStreams, O.loader = R.loader, 
                    O.stats = R.stats, O.urlId = R.urlId, R.initSegment ? (O.initSegment = R.initSegment, 
                    i = R.initSegment) : O.initSegment && O.initSegment.relurl != ((x = i) === null || x === void 0 ? void 0 : x.relurl) || (O.initSegment = i);
                }), h.skippedSegments && (h.deltaUpdateFailed = h.fragments.some(function(R) {
                    return !R;
                }), h.deltaUpdateFailed)) {
                    S.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                    for (var u = h.skippedSegments; u--; ) h.fragments.shift();
                    h.startSN = h.fragments[0].sn, h.startCC = h.fragments[0].cc;
                }
                var s = h.fragments;
                if (c) {
                    S.logger.warn("discontinuity sliding from playlist, take drift into account");
                    for (var e = 0; e < s.length; e++) s[e].cc += c;
                }
                h.skippedSegments && (h.startCC = h.fragments[0].cc), p(o.partList, h.partList, function(R, O) {
                    O.elementaryStreams = R.elementaryStreams, O.stats = R.stats;
                }), n ? d(h, n, n.startPTS, n.endPTS, n.startDTS, n.endDTS) : b(o, h), 
                s.length && (h.totalduration = h.edge - s[0].start), h.driftStartTime = o.driftStartTime, 
                h.driftStart = o.driftStart;
                var m = h.advancedDateTime;
                if (h.advanced && m) {
                    var _ = h.edge;
                    h.driftStart || (h.driftStartTime = m, h.driftStart = _), h.driftEndTime = m, 
                    h.driftEnd = _;
                } else h.driftEndTime = o.driftEndTime, h.driftEnd = o.driftEnd, 
                h.advancedDateTime = o.advancedDateTime;
            }
            function p(o, h, i) {
                if (o && h) for (var a = 0, f = 0, g = o.length; f <= g; f++) {
                    var n = o[f], c = h[f + a];
                    n && c && n.index === c.index && n.fragment.sn === c.fragment.sn ? i(n, c) : a--;
                }
            }
            function y(o, h, i) {
                for (var a = h.skippedSegments, f = Math.max(o.startSN, h.startSN) - h.startSN, g = (o.fragmentHint ? 1 : 0) + (a ? h.endSN : Math.min(o.endSN, h.endSN)) - h.startSN, n = h.startSN - o.startSN, c = h.fragmentHint ? h.fragments.concat(h.fragmentHint) : h.fragments, u = o.fragmentHint ? o.fragments.concat(o.fragmentHint) : o.fragments, s = f; s <= g; s++) {
                    var e = u[n + s], m = c[s];
                    a && !m && s < a && (m = h.fragments[s] = e), e && m && i(e, m);
                }
            }
            function b(o, h) {
                var i = h.startSN + h.skippedSegments - o.startSN, a = o.fragments;
                i < 0 || i >= a.length || E(h, a[i].start);
            }
            function E(o, h) {
                if (h) {
                    for (var i = o.fragments, a = o.skippedSegments; a < i.length; a++) i[a].start += h;
                    o.fragmentHint && (o.fragmentHint.start += h);
                }
            }
            function r(o, h) {
                var i, a = 1e3 * o.levelTargetDuration, f = a / 2, g = o.age, n = g > 0 && g < 3 * a, c = h.loading.end - h.loading.start, u = o.availabilityDelay;
                if (o.updated === !1) if (n) {
                    var s = 333 * o.misses;
                    i = Math.max(Math.min(f, 2 * c), s), o.availabilityDelay = (o.availabilityDelay || 0) + i;
                } else i = f; else n ? (u = Math.min(u || a / 2, g), o.availabilityDelay = u, 
                i = u + a - g) : i = a - c;
                return Math.round(i);
            }
            function t(o, h, i) {
                if (!o || !o.details) return null;
                var a = o.details, f = a.fragments[h - a.startSN];
                return f || ((f = a.fragmentHint) && f.sn === h ? f : h < a.startSN && i && i.sn === h ? i : null);
            }
            function l(o, h, i) {
                if (!o || !o.details) return null;
                var a = o.details.partList;
                if (a) for (var f = a.length; f--; ) {
                    var g = a[f];
                    if (g.index === i && g.fragment.sn === h) return g;
                }
                return null;
            }
        },
        "./src/controller/stream-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return l;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/controller/base-stream-controller.ts"), L = v("./src/is-supported.ts"), D = v("./src/events.ts"), I = v("./src/utils/buffer-helper.ts"), A = v("./src/controller/fragment-tracker.ts"), d = v("./src/types/loader.ts"), T = v("./src/loader/fragment.ts"), p = v("./src/demux/transmuxer-interface.ts"), y = v("./src/types/transmuxer.ts"), b = v("./src/controller/gap-controller.ts"), E = v("./src/errors.ts"), r = v("./src/utils/logger.ts");
            function t(o, h) {
                return (t = Object.setPrototypeOf || function(i, a) {
                    return i.__proto__ = a, i;
                })(o, h);
            }
            var l = function(o) {
                var h, i;
                function a(n, c) {
                    var u;
                    return (u = o.call(this, n, c, "[stream-controller]") || this).audioCodecSwap = !1, 
                    u.gapController = null, u.level = -1, u._forceStartLoad = !1, 
                    u.altAudio = !1, u.audioOnly = !1, u.fragPlaying = null, u.onvplaying = null, 
                    u.onvseeked = null, u.fragLastKbps = 0, u.stalled = !1, u.couldBacktrack = !1, 
                    u.audioCodecSwitch = !1, u.videoBuffer = null, u._registerListeners(), 
                    u;
                }
                i = o, (h = a).prototype = Object.create(i.prototype), h.prototype.constructor = h, 
                t(h, i);
                var f, g = a.prototype;
                return g._registerListeners = function() {
                    var n = this.hls;
                    n.on(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), n.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    n.on(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    n.on(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    n.on(D.Events.LEVEL_LOADING, this.onLevelLoading, this), n.on(D.Events.LEVEL_LOADED, this.onLevelLoaded, this), 
                    n.on(D.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), 
                    n.on(D.Events.ERROR, this.onError, this), n.on(D.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), 
                    n.on(D.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), 
                    n.on(D.Events.BUFFER_CREATED, this.onBufferCreated, this), n.on(D.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), 
                    n.on(D.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), n.on(D.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }, g._unregisterListeners = function() {
                    var n = this.hls;
                    n.off(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    n.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    n.off(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    n.off(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    n.off(D.Events.LEVEL_LOADED, this.onLevelLoaded, this), n.off(D.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), 
                    n.off(D.Events.ERROR, this.onError, this), n.off(D.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), 
                    n.off(D.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), 
                    n.off(D.Events.BUFFER_CREATED, this.onBufferCreated, this), 
                    n.off(D.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), 
                    n.off(D.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), 
                    n.off(D.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }, g.onHandlerDestroying = function() {
                    this._unregisterListeners(), this.onMediaDetaching();
                }, g.startLoad = function(n) {
                    if (this.levels) {
                        var c = this.lastCurrentTime, u = this.hls;
                        if (this.stopLoad(), this.setInterval(100), this.level = -1, 
                        this.fragLoadError = 0, !this.startFragRequested) {
                            var s = u.startLevel;
                            s === -1 && (u.config.testBandwidth ? (s = 0, this.bitrateTest = !0) : s = u.nextAutoLevel), 
                            this.level = u.nextLoadLevel = s, this.loadedmetadata = !1;
                        }
                        c > 0 && n === -1 && (this.log("Override startPosition with lastCurrentTime @" + c.toFixed(3)), 
                        n = c), this.state = S.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = n, 
                        this.tick();
                    } else this._forceStartLoad = !0, this.state = S.State.STOPPED;
                }, g.stopLoad = function() {
                    this._forceStartLoad = !1, o.prototype.stopLoad.call(this);
                }, g.doTick = function() {
                    switch (this.state) {
                      case S.State.IDLE:
                        this.doTickIdle();
                        break;

                      case S.State.WAITING_LEVEL:
                        var n, c = this.levels, u = this.level, s = c == null || (n = c[u]) === null || n === void 0 ? void 0 : n.details;
                        if (s && (!s.live || this.levelLastLoaded === this.level)) {
                            if (this.waitForCdnTuneIn(s)) break;
                            this.state = S.State.IDLE;
                            break;
                        }
                        break;

                      case S.State.FRAG_LOADING_WAITING_RETRY:
                        var e, m = self.performance.now(), _ = this.retryDate;
                        (!_ || m >= _ || (e = this.media) !== null && e !== void 0 && e.seeking) && (this.log("retryDate reached, switch back to IDLE state"), 
                        this.state = S.State.IDLE);
                    }
                    this.onTickEnd();
                }, g.onTickEnd = function() {
                    o.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
                }, g.doTickIdle = function() {
                    var n, c, u = this.hls, s = this.levelLastLoaded, e = this.levels, m = this.media, _ = u.config, R = u.nextLoadLevel;
                    if (s !== null && (m || !this.startFragRequested && _.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && e && e[R]) {
                        var O = e[R];
                        this.level = u.nextLoadLevel = R;
                        var x = O.details;
                        if (!x || this.state === S.State.WAITING_LEVEL || x.live && this.levelLastLoaded !== R) this.state = S.State.WAITING_LEVEL; else {
                            var w = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : m, d.PlaylistLevelType.MAIN);
                            if (w !== null && !(w.len >= this.getMaxBufferLength(O.maxBitrate))) {
                                if (this._streamEnded(w, x)) {
                                    var P = {};
                                    return this.altAudio && (P.type = "video"), 
                                    this.hls.trigger(D.Events.BUFFER_EOS, P), void (this.state = S.State.ENDED);
                                }
                                var N = w.end, M = this.getNextFragment(N, x);
                                if (this.couldBacktrack && !this.fragPrevious && M && M.sn !== "initSegment") {
                                    var B = M.sn - x.startSN;
                                    B > 1 && (M = x.fragments[B - 1], this.fragmentTracker.removeFragment(M));
                                }
                                if (M && this.fragmentTracker.getState(M) === A.FragmentState.OK && this.nextLoadPosition > N) {
                                    var U = this.audioOnly && !this.altAudio ? T.ElementaryStreamTypes.AUDIO : T.ElementaryStreamTypes.VIDEO;
                                    this.afterBufferFlushed(m, U, d.PlaylistLevelType.MAIN), 
                                    M = this.getNextFragment(this.nextLoadPosition, x);
                                }
                                M && (!M.initSegment || M.initSegment.data || this.bitrateTest || (M = M.initSegment), 
                                ((n = M.decryptdata) === null || n === void 0 ? void 0 : n.keyFormat) !== "identity" || (c = M.decryptdata) !== null && c !== void 0 && c.key ? this.loadFragment(M, x, N) : this.loadKey(M, x));
                            }
                        }
                    }
                }, g.loadFragment = function(n, c, u) {
                    var s, e = this.fragmentTracker.getState(n);
                    if (this.fragCurrent = n, e === A.FragmentState.BACKTRACKED) {
                        var m = this.fragmentTracker.getBacktrackData(n);
                        if (m) return this._handleFragmentLoadProgress(m), void this._handleFragmentLoadComplete(m);
                        e = A.FragmentState.NOT_LOADED;
                    }
                    e === A.FragmentState.NOT_LOADED || e === A.FragmentState.PARTIAL ? n.sn === "initSegment" ? this._loadInitSegment(n) : this.bitrateTest ? (n.bitrateTest = !0, 
                    this.log("Fragment " + n.sn + " of level " + n.level + " is being downloaded to test bitrate and will not be buffered"), 
                    this._loadBitrateTestFrag(n)) : (this.startFragRequested = !0, 
                    o.prototype.loadFragment.call(this, n, c, u)) : e === A.FragmentState.APPENDING ? this.reduceMaxBufferLength(n.duration) && this.fragmentTracker.removeFragment(n) : ((s = this.media) === null || s === void 0 ? void 0 : s.buffered.length) === 0 && this.fragmentTracker.removeAllFragments();
                }, g.getAppendedFrag = function(n) {
                    var c = this.fragmentTracker.getAppendedFrag(n, d.PlaylistLevelType.MAIN);
                    return c && "fragment" in c ? c.fragment : c;
                }, g.getBufferedFrag = function(n) {
                    return this.fragmentTracker.getBufferedFrag(n, d.PlaylistLevelType.MAIN);
                }, g.followingBufferedFrag = function(n) {
                    return n ? this.getBufferedFrag(n.end + .5) : null;
                }, g.immediateLevelSwitch = function() {
                    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                }, g.nextLevelSwitch = function() {
                    var n = this.levels, c = this.media;
                    if (c != null && c.readyState) {
                        var u, s = this.getAppendedFrag(c.currentTime);
                        if (s && s.start > 1 && this.flushMainBuffer(0, s.start - 1), 
                        !c.paused && n) {
                            var e = n[this.hls.nextLoadLevel], m = this.fragLastKbps;
                            u = m && this.fragCurrent ? this.fragCurrent.duration * e.maxBitrate / (1e3 * m) + 1 : 0;
                        } else u = 0;
                        var _ = this.getBufferedFrag(c.currentTime + u);
                        if (_) {
                            var R = this.followingBufferedFrag(_);
                            if (R) {
                                this.abortCurrentFrag();
                                var O = R.maxStartPTS ? R.maxStartPTS : R.start, x = R.duration, w = Math.max(_.end, O + Math.min(Math.max(x - this.config.maxFragLookUpTolerance, .5 * x), .75 * x));
                                this.flushMainBuffer(w, Number.POSITIVE_INFINITY);
                            }
                        }
                    }
                }, g.abortCurrentFrag = function() {
                    var n = this.fragCurrent;
                    this.fragCurrent = null, n != null && n.loader && n.loader.abort(), 
                    this.state === S.State.KEY_LOADING && (this.state = S.State.IDLE), 
                    this.nextLoadPosition = this.getLoadPosition();
                }, g.flushMainBuffer = function(n, c) {
                    o.prototype.flushMainBuffer.call(this, n, c, this.altAudio ? "video" : null);
                }, g.onMediaAttached = function(n, c) {
                    o.prototype.onMediaAttached.call(this, n, c);
                    var u = c.media;
                    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), 
                    u.addEventListener("playing", this.onvplaying), u.addEventListener("seeked", this.onvseeked), 
                    this.gapController = new b.default(this.config, u, this.fragmentTracker, this.hls);
                }, g.onMediaDetaching = function() {
                    var n = this.media;
                    n && (n.removeEventListener("playing", this.onvplaying), n.removeEventListener("seeked", this.onvseeked), 
                    this.onvplaying = this.onvseeked = null, this.videoBuffer = null), 
                    this.fragPlaying = null, this.gapController && (this.gapController.destroy(), 
                    this.gapController = null), o.prototype.onMediaDetaching.call(this);
                }, g.onMediaPlaying = function() {
                    this.tick();
                }, g.onMediaSeeked = function() {
                    var n = this.media, c = n ? n.currentTime : null;
                    Object(k.isFiniteNumber)(c) && this.log("Media seeked to " + c.toFixed(3)), 
                    this.tick();
                }, g.onManifestLoading = function() {
                    this.log("Trigger BUFFER_RESET"), this.hls.trigger(D.Events.BUFFER_RESET, void 0), 
                    this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = !1, 
                    this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null;
                }, g.onManifestParsed = function(n, c) {
                    var u, s = !1, e = !1;
                    c.levels.forEach(function(m) {
                        (u = m.audioCodec) && (u.indexOf("mp4a.40.2") !== -1 && (s = !0), 
                        u.indexOf("mp4a.40.5") !== -1 && (e = !0));
                    }), this.audioCodecSwitch = s && e && !Object(L.changeTypeSupported)(), 
                    this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), 
                    this.levels = c.levels, this.startFragRequested = !1;
                }, g.onLevelLoading = function(n, c) {
                    var u = this.levels;
                    if (u && this.state === S.State.IDLE) {
                        var s = u[c.level];
                        (!s.details || s.details.live && this.levelLastLoaded !== c.level || this.waitForCdnTuneIn(s.details)) && (this.state = S.State.WAITING_LEVEL);
                    }
                }, g.onLevelLoaded = function(n, c) {
                    var u, s = this.levels, e = c.level, m = c.details, _ = m.totalduration;
                    if (s) {
                        this.log("Level " + e + " loaded [" + m.startSN + "," + m.endSN + "], cc [" + m.startCC + ", " + m.endCC + "] duration:" + _);
                        var R = this.fragCurrent;
                        !R || this.state !== S.State.FRAG_LOADING && this.state !== S.State.FRAG_LOADING_WAITING_RETRY || R.level !== c.level && R.loader && (this.state = S.State.IDLE, 
                        R.loader.abort());
                        var O = s[e], x = 0;
                        if (m.live || (u = O.details) !== null && u !== void 0 && u.live) {
                            if (m.fragments[0] || (m.deltaUpdateFailed = !0), m.deltaUpdateFailed) return;
                            x = this.alignPlaylists(m, O.details);
                        }
                        if (O.details = m, this.levelLastLoaded = e, this.hls.trigger(D.Events.LEVEL_UPDATED, {
                            details: m,
                            level: e
                        }), this.state === S.State.WAITING_LEVEL) {
                            if (this.waitForCdnTuneIn(m)) return;
                            this.state = S.State.IDLE;
                        }
                        this.startFragRequested ? m.live && this.synchronizeToLiveEdge(m) : this.setStartPosition(m, x), 
                        this.tick();
                    } else this.warn("Levels were reset while loading level " + e);
                }, g._handleFragmentLoadProgress = function(n) {
                    var c, u = n.frag, s = n.part, e = n.payload, m = this.levels;
                    if (m) {
                        var _ = m[u.level], R = _.details;
                        if (R) {
                            var O = _.videoCodec, x = R.PTSKnown || !R.live, w = (c = u.initSegment) === null || c === void 0 ? void 0 : c.data, P = this._getAudioCodec(_), N = this.transmuxer = this.transmuxer || new p.default(this.hls, d.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), M = s ? s.index : -1, B = M !== -1, U = new y.ChunkMetadata(u.level, u.sn, u.stats.chunkCount, e.byteLength, M, B), G = this.initPTS[u.cc];
                            N.push(e, w, P, O, u, s, R.totalduration, x, U, G);
                        } else this.warn("Dropping fragment " + u.sn + " of level " + u.level + " after level details were reset");
                    } else this.warn("Levels were reset while fragment load was in progress. Fragment " + u.sn + " of level " + u.level + " will not be buffered");
                }, g.onAudioTrackSwitching = function(n, c) {
                    var u = this.altAudio, s = !!c.url, e = c.id;
                    if (!s) {
                        if (this.mediaBuffer !== this.media) {
                            this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), 
                            this.mediaBuffer = this.media;
                            var m = this.fragCurrent;
                            m != null && m.loader && (this.log("Switching to main audio track, cancel main fragment load"), 
                            m.loader.abort()), this.resetTransmuxer(), this.resetLoadingState();
                        } else this.audioOnly && this.resetTransmuxer();
                        var _ = this.hls;
                        u && _.trigger(D.Events.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: "audio"
                        }), _.trigger(D.Events.AUDIO_TRACK_SWITCHED, {
                            id: e
                        });
                    }
                }, g.onAudioTrackSwitched = function(n, c) {
                    var u = c.id, s = !!this.hls.audioTracks[u].url;
                    if (s) {
                        var e = this.videoBuffer;
                        e && this.mediaBuffer !== e && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), 
                        this.mediaBuffer = e);
                    }
                    this.altAudio = s, this.tick();
                }, g.onBufferCreated = function(n, c) {
                    var u, s, e = c.tracks, m = !1;
                    for (var _ in e) {
                        var R = e[_];
                        if (R.id === "main") {
                            if (s = _, u = R, _ === "video") {
                                var O = e[_];
                                O && (this.videoBuffer = O.buffer);
                            }
                        } else m = !0;
                    }
                    m && u ? (this.log("Alternate track found, use " + s + ".buffered to schedule main fragment loading"), 
                    this.mediaBuffer = u.buffer) : this.mediaBuffer = this.media;
                }, g.onFragBuffered = function(n, c) {
                    var u = c.frag, s = c.part;
                    if (!u || u.type === d.PlaylistLevelType.MAIN) {
                        if (this.fragContextChanged(u)) return this.warn("Fragment " + u.sn + (s ? " p: " + s.index : "") + " of level " + u.level + " finished buffering, but was aborted. state: " + this.state), 
                        void (this.state === S.State.PARSED && (this.state = S.State.IDLE));
                        var e = s ? s.stats : u.stats;
                        this.fragLastKbps = Math.round(8 * e.total / (e.buffering.end - e.loading.first)), 
                        u.sn !== "initSegment" && (this.fragPrevious = u), this.fragBufferedComplete(u, s);
                    }
                }, g.onError = function(n, c) {
                    switch (c.details) {
                      case E.ErrorDetails.FRAG_LOAD_ERROR:
                      case E.ErrorDetails.FRAG_LOAD_TIMEOUT:
                      case E.ErrorDetails.KEY_LOAD_ERROR:
                      case E.ErrorDetails.KEY_LOAD_TIMEOUT:
                        this.onFragmentOrKeyLoadError(d.PlaylistLevelType.MAIN, c);
                        break;

                      case E.ErrorDetails.LEVEL_LOAD_ERROR:
                      case E.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                        this.state !== S.State.ERROR && (c.fatal ? (this.warn("" + c.details), 
                        this.state = S.State.ERROR) : c.levelRetry || this.state !== S.State.WAITING_LEVEL || (this.state = S.State.IDLE));
                        break;

                      case E.ErrorDetails.BUFFER_FULL_ERROR:
                        if (c.parent === "main" && (this.state === S.State.PARSING || this.state === S.State.PARSED)) {
                            var u = !0, s = this.getFwdBufferInfo(this.media, d.PlaylistLevelType.MAIN);
                            s && s.len > .5 && (u = !this.reduceMaxBufferLength(s.len)), 
                            u && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), 
                            this.immediateLevelSwitch()), this.resetLoadingState();
                        }
                    }
                }, g.checkBuffer = function() {
                    var n = this.media, c = this.gapController;
                    if (n && c && n.readyState) {
                        var u = I.BufferHelper.getBuffered(n);
                        !this.loadedmetadata && u.length ? (this.loadedmetadata = !0, 
                        this.seekToStartPos()) : c.poll(this.lastCurrentTime), this.lastCurrentTime = n.currentTime;
                    }
                }, g.onFragLoadEmergencyAborted = function() {
                    this.state = S.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, 
                    this.nextLoadPosition = this.startPosition), this.tickImmediate();
                }, g.onBufferFlushed = function(n, c) {
                    var u = c.type;
                    if (u !== T.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
                        var s = (u === T.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                        this.afterBufferFlushed(s, u, d.PlaylistLevelType.MAIN);
                    }
                }, g.onLevelsUpdated = function(n, c) {
                    this.levels = c.levels;
                }, g.swapAudioCodec = function() {
                    this.audioCodecSwap = !this.audioCodecSwap;
                }, g.seekToStartPos = function() {
                    var n = this.media, c = n.currentTime, u = this.startPosition;
                    if (u >= 0 && c < u) {
                        if (n.seeking) return void r.logger.log("could not seek to " + u + ", already seeking at " + c);
                        var s = I.BufferHelper.getBuffered(n), e = (s.length ? s.start(0) : 0) - u;
                        e > 0 && e < this.config.maxBufferHole && (r.logger.log("adjusting start position by " + e + " to match buffer start"), 
                        u += e, this.startPosition = u), this.log("seek to target start position " + u + " from current time " + c), 
                        n.currentTime = u;
                    }
                }, g._getAudioCodec = function(n) {
                    var c = this.config.defaultAudioCodec || n.audioCodec;
                    return this.audioCodecSwap && c && (this.log("Swapping audio codec"), 
                    c = c.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5"), 
                    c;
                }, g._loadBitrateTestFrag = function(n) {
                    var c = this;
                    this._doFragLoad(n).then(function(u) {
                        var s = c.hls;
                        if (u && !s.nextLoadLevel && !c.fragContextChanged(n)) {
                            c.fragLoadError = 0, c.state = S.State.IDLE, c.startFragRequested = !1, 
                            c.bitrateTest = !1;
                            var e = n.stats;
                            e.parsing.start = e.parsing.end = e.buffering.start = e.buffering.end = self.performance.now(), 
                            s.trigger(D.Events.FRAG_LOADED, u);
                        }
                    });
                }, g._handleTransmuxComplete = function(n) {
                    var c, u = "main", s = this.hls, e = n.remuxResult, m = n.chunkMeta, _ = this.getCurrentContext(m);
                    if (!_) return this.warn("The loading context changed while buffering fragment " + m.sn + " of level " + m.level + ". This chunk will not be buffered."), 
                    void this.resetLiveStartWhenNotLoaded(m.level);
                    var R = _.frag, O = _.part, x = _.level, w = e.video, P = e.text, N = e.id3, M = e.initSegment, B = this.altAudio ? void 0 : e.audio;
                    if (!this.fragContextChanged(R)) {
                        if (this.state = S.State.PARSING, M) {
                            M.tracks && (this._bufferInitSegment(x, M.tracks, R, m), 
                            s.trigger(D.Events.FRAG_PARSING_INIT_SEGMENT, {
                                frag: R,
                                id: u,
                                tracks: M.tracks
                            }));
                            var U = M.initPTS, G = M.timescale;
                            Object(k.isFiniteNumber)(U) && (this.initPTS[R.cc] = U, 
                            s.trigger(D.Events.INIT_PTS_FOUND, {
                                frag: R,
                                id: u,
                                initPTS: U,
                                timescale: G
                            }));
                        }
                        if (w && e.independent !== !1) {
                            if (x.details) {
                                var V = w.startPTS, H = w.endPTS, W = w.startDTS, Y = w.endDTS;
                                if (O) O.elementaryStreams[w.type] = {
                                    startPTS: V,
                                    endPTS: H,
                                    startDTS: W,
                                    endDTS: Y
                                }; else if (w.firstKeyFrame && w.independent && (this.couldBacktrack = !0), 
                                w.dropped && w.independent) {
                                    if (this.getLoadPosition() + this.config.maxBufferHole < V) return void this.backtrack(R);
                                    R.setElementaryStreamInfo(w.type, R.start, H, R.start, Y, !0);
                                }
                                R.setElementaryStreamInfo(w.type, V, H, W, Y), this.bufferFragmentData(w, R, O, m);
                            }
                        } else if (e.independent === !1) return void this.backtrack(R);
                        if (B) {
                            var q = B.startPTS, Q = B.endPTS, J = B.startDTS, rt = B.endDTS;
                            O && (O.elementaryStreams[T.ElementaryStreamTypes.AUDIO] = {
                                startPTS: q,
                                endPTS: Q,
                                startDTS: J,
                                endDTS: rt
                            }), R.setElementaryStreamInfo(T.ElementaryStreamTypes.AUDIO, q, Q, J, rt), 
                            this.bufferFragmentData(B, R, O, m);
                        }
                        if (N != null && (c = N.samples) !== null && c !== void 0 && c.length) {
                            var Z = {
                                frag: R,
                                id: u,
                                samples: N.samples
                            };
                            s.trigger(D.Events.FRAG_PARSING_METADATA, Z);
                        }
                        if (P) {
                            var st = {
                                frag: R,
                                id: u,
                                samples: P.samples
                            };
                            s.trigger(D.Events.FRAG_PARSING_USERDATA, st);
                        }
                    }
                }, g._bufferInitSegment = function(n, c, u, s) {
                    var e = this;
                    if (this.state === S.State.PARSING) {
                        this.audioOnly = !!c.audio && !c.video, this.altAudio && !this.audioOnly && delete c.audio;
                        var m = c.audio, _ = c.video, R = c.audiovideo;
                        if (m) {
                            var O = n.audioCodec, x = navigator.userAgent.toLowerCase();
                            this.audioCodecSwitch && (O && (O = O.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5"), 
                            m.metadata.channelCount !== 1 && x.indexOf("firefox") === -1 && (O = "mp4a.40.5")), 
                            x.indexOf("android") !== -1 && m.container !== "audio/mpeg" && (O = "mp4a.40.2", 
                            this.log("Android: force audio codec to " + O)), n.audioCodec && n.audioCodec !== O && this.log('Swapping manifest audio codec "' + n.audioCodec + '" for "' + O + '"'), 
                            m.levelCodec = O, m.id = "main", this.log("Init audio buffer, container:" + m.container + ", codecs[selected/level/parsed]=[" + (O || "") + "/" + (n.audioCodec || "") + "/" + m.codec + "]");
                        }
                        _ && (_.levelCodec = n.videoCodec, _.id = "main", this.log("Init video buffer, container:" + _.container + ", codecs[level/parsed]=[" + (n.videoCodec || "") + "/" + _.codec + "]")), 
                        R && this.log("Init audiovideo buffer, container:" + R.container + ", codecs[level/parsed]=[" + (n.attrs.CODECS || "") + "/" + R.codec + "]"), 
                        this.hls.trigger(D.Events.BUFFER_CODECS, c), Object.keys(c).forEach(function(w) {
                            var P = c[w].initSegment;
                            P != null && P.byteLength && e.hls.trigger(D.Events.BUFFER_APPENDING, {
                                type: w,
                                data: P,
                                frag: u,
                                part: null,
                                chunkMeta: s,
                                parent: u.type
                            });
                        }), this.tick();
                    }
                }, g.backtrack = function(n) {
                    this.couldBacktrack = !0, this.resetTransmuxer(), this.flushBufferGap(n);
                    var c = this.fragmentTracker.backtrack(n);
                    this.fragPrevious = null, this.nextLoadPosition = n.start, c ? this.resetFragmentLoading(n) : this.state = S.State.BACKTRACKING;
                }, g.checkFragmentChanged = function() {
                    var n = this.media, c = null;
                    if (n && n.readyState > 1 && n.seeking === !1) {
                        var u = n.currentTime;
                        if (I.BufferHelper.isBuffered(n, u) ? c = this.getAppendedFrag(u) : I.BufferHelper.isBuffered(n, u + .1) && (c = this.getAppendedFrag(u + .1)), 
                        c) {
                            var s = this.fragPlaying, e = c.level;
                            s && c.sn === s.sn && s.level === e && c.urlId === s.urlId || (this.hls.trigger(D.Events.FRAG_CHANGED, {
                                frag: c
                            }), s && s.level === e || this.hls.trigger(D.Events.LEVEL_SWITCHED, {
                                level: e
                            }), this.fragPlaying = c);
                        }
                    }
                }, (f = [ {
                    key: "nextLevel",
                    get: function() {
                        var n = this.nextBufferedFrag;
                        return n ? n.level : -1;
                    }
                }, {
                    key: "currentLevel",
                    get: function() {
                        var n = this.media;
                        if (n) {
                            var c = this.getAppendedFrag(n.currentTime);
                            if (c) return c.level;
                        }
                        return -1;
                    }
                }, {
                    key: "nextBufferedFrag",
                    get: function() {
                        var n = this.media;
                        if (n) {
                            var c = this.getAppendedFrag(n.currentTime);
                            return this.followingBufferedFrag(c);
                        }
                        return null;
                    }
                }, {
                    key: "forceStartLoad",
                    get: function() {
                        return this._forceStartLoad;
                    }
                } ]) && function(n, c) {
                    for (var u = 0; u < c.length; u++) {
                        var s = c[u];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, 
                        "value" in s && (s.writable = !0), Object.defineProperty(n, s.key, s);
                    }
                }(a.prototype, f), a;
            }(S.default);
        },
        "./src/controller/subtitle-stream-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "SubtitleStreamController", function() {
                return E;
            });
            var k = v("./src/events.ts"), S = v("./src/utils/logger.ts"), L = v("./src/utils/buffer-helper.ts"), D = v("./src/controller/fragment-finders.ts"), I = v("./src/utils/discontinuities.ts"), A = v("./src/controller/level-helper.ts"), d = v("./src/controller/fragment-tracker.ts"), T = v("./src/controller/base-stream-controller.ts"), p = v("./src/types/loader.ts"), y = v("./src/types/level.ts");
            function b(r, t) {
                return (b = Object.setPrototypeOf || function(l, o) {
                    return l.__proto__ = o, l;
                })(r, t);
            }
            var E = function(r) {
                var t, l;
                function o(a, f) {
                    var g;
                    return (g = r.call(this, a, f, "[subtitle-stream-controller]") || this).levels = [], 
                    g.currentTrackId = -1, g.tracksBuffered = [], g.mainDetails = null, 
                    g._registerListeners(), g;
                }
                l = r, (t = o).prototype = Object.create(l.prototype), t.prototype.constructor = t, 
                b(t, l);
                var h, i = o.prototype;
                return i.onHandlerDestroying = function() {
                    this._unregisterListeners(), this.mainDetails = null;
                }, i._registerListeners = function() {
                    var a = this.hls;
                    a.on(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), a.on(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    a.on(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    a.on(k.Events.LEVEL_LOADED, this.onLevelLoaded, this), a.on(k.Events.ERROR, this.onError, this), 
                    a.on(k.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), 
                    a.on(k.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), 
                    a.on(k.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), 
                    a.on(k.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), 
                    a.on(k.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                }, i._unregisterListeners = function() {
                    var a = this.hls;
                    a.off(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    a.off(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    a.off(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    a.off(k.Events.LEVEL_LOADED, this.onLevelLoaded, this), a.off(k.Events.ERROR, this.onError, this), 
                    a.off(k.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), 
                    a.off(k.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), 
                    a.off(k.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), 
                    a.off(k.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), 
                    a.off(k.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                }, i.startLoad = function() {
                    this.stopLoad(), this.state = T.State.IDLE, this.setInterval(500), 
                    this.tick();
                }, i.onManifestLoading = function() {
                    this.mainDetails = null, this.fragmentTracker.removeAllFragments();
                }, i.onLevelLoaded = function(a, f) {
                    this.mainDetails = f.details;
                }, i.onSubtitleFragProcessed = function(a, f) {
                    var g = f.frag, n = f.success;
                    if (this.fragPrevious = g, this.state = T.State.IDLE, n) {
                        var c = this.tracksBuffered[this.currentTrackId];
                        if (c) {
                            for (var u, s = g.start, e = 0; e < c.length; e++) if (s >= c[e].start && s <= c[e].end) {
                                u = c[e];
                                break;
                            }
                            var m = g.start + g.duration;
                            u ? u.end = m : (u = {
                                start: s,
                                end: m
                            }, c.push(u)), this.fragmentTracker.fragBuffered(g);
                        }
                    }
                }, i.onBufferFlushing = function(a, f) {
                    var g = f.startOffset, n = f.endOffset;
                    if (g === 0 && n !== Number.POSITIVE_INFINITY) {
                        var c = this.currentTrackId, u = this.levels;
                        if (!u.length || !u[c] || !u[c].details) return;
                        var s = n - u[c].details.targetduration;
                        if (s <= 0) return;
                        f.endOffsetSubtitles = Math.max(0, s), this.tracksBuffered.forEach(function(e) {
                            for (var m = 0; m < e.length; ) if (e[m].end <= s) e.shift(); else {
                                if (!(e[m].start < s)) break;
                                e[m].start = s, m++;
                            }
                        }), this.fragmentTracker.removeFragmentsInRange(g, s, p.PlaylistLevelType.SUBTITLE);
                    }
                }, i.onError = function(a, f) {
                    var g, n = f.frag;
                    n && n.type === p.PlaylistLevelType.SUBTITLE && ((g = this.fragCurrent) !== null && g !== void 0 && g.loader && this.fragCurrent.loader.abort(), 
                    this.state = T.State.IDLE);
                }, i.onSubtitleTracksUpdated = function(a, f) {
                    var g = this, n = f.subtitleTracks;
                    this.tracksBuffered = [], this.levels = n.map(function(c) {
                        return new y.Level(c);
                    }), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, 
                    this.levels.forEach(function(c) {
                        g.tracksBuffered[c.id] = [];
                    }), this.mediaBuffer = null;
                }, i.onSubtitleTrackSwitch = function(a, f) {
                    if (this.currentTrackId = f.id, this.levels.length && this.currentTrackId !== -1) {
                        var g = this.levels[this.currentTrackId];
                        g != null && g.details ? (this.mediaBuffer = this.mediaBufferTimeRanges, 
                        this.setInterval(500)) : this.mediaBuffer = null;
                    } else this.clearInterval();
                }, i.onSubtitleTrackLoaded = function(a, f) {
                    var g, n = f.details, c = f.id, u = this.currentTrackId, s = this.levels;
                    if (s.length) {
                        var e = s[u];
                        if (!(c >= s.length || c !== u) && e) {
                            if (this.mediaBuffer = this.mediaBufferTimeRanges, n.live || (g = e.details) !== null && g !== void 0 && g.live) {
                                var m = this.mainDetails;
                                if (n.deltaUpdateFailed || !m) return;
                                var _ = m.fragments[0];
                                e.details ? this.alignPlaylists(n, e.details) === 0 && _ && Object(A.addSliding)(n, _.start) : n.hasProgramDateTime && m.hasProgramDateTime ? Object(I.alignPDT)(n, m) : _ && Object(A.addSliding)(n, _.start);
                            }
                            e.details = n, this.levelLastLoaded = c, this.tick(), 
                            n.live && !this.fragCurrent && this.media && this.state === T.State.IDLE && (Object(D.findFragmentByPTS)(null, n.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), 
                            e.details = void 0));
                        }
                    }
                }, i._handleFragmentLoadComplete = function(a) {
                    var f = a.frag, g = a.payload, n = f.decryptdata, c = this.hls;
                    if (!this.fragContextChanged(f) && g && g.byteLength > 0 && n && n.key && n.iv && n.method === "AES-128") {
                        var u = performance.now();
                        this.decrypter.webCryptoDecrypt(new Uint8Array(g), n.key.buffer, n.iv.buffer).then(function(s) {
                            var e = performance.now();
                            c.trigger(k.Events.FRAG_DECRYPTED, {
                                frag: f,
                                payload: s,
                                stats: {
                                    tstart: u,
                                    tdecrypt: e
                                }
                            });
                        });
                    }
                }, i.doTick = function() {
                    if (this.media) {
                        if (this.state === T.State.IDLE) {
                            var a, f = this.currentTrackId, g = this.levels;
                            if (!g.length || !g[f] || !g[f].details) return;
                            var n = g[f].details, c = n.targetduration, u = this.config, s = this.media, e = L.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, s.currentTime - c, u.maxBufferHole), m = e.end;
                            if (e.len > this.getMaxBufferLength() + c) return;
                            var _, R = n.fragments, O = R.length, x = n.edge, w = this.fragPrevious;
                            if (m < x) {
                                var P = u.maxFragLookUpTolerance;
                                w && n.hasProgramDateTime && (_ = Object(D.findFragmentByPDT)(R, w.endProgramDateTime, P)), 
                                _ || !(_ = Object(D.findFragmentByPTS)(w, R, m, P)) && w && w.start < R[0].start && (_ = R[0]);
                            } else _ = R[O - 1];
                            (a = _) !== null && a !== void 0 && a.encrypted ? (S.logger.log("Loading key for " + _.sn), 
                            this.state = T.State.KEY_LOADING, this.hls.trigger(k.Events.KEY_LOADING, {
                                frag: _
                            })) : _ && this.fragmentTracker.getState(_) === d.FragmentState.NOT_LOADED && this.loadFragment(_, n, m);
                        }
                    } else this.state = T.State.IDLE;
                }, i.loadFragment = function(a, f, g) {
                    this.fragCurrent = a, r.prototype.loadFragment.call(this, a, f, g);
                }, (h = [ {
                    key: "mediaBufferTimeRanges",
                    get: function() {
                        return this.tracksBuffered[this.currentTrackId] || [];
                    }
                } ]) && function(a, f) {
                    for (var g = 0; g < f.length; g++) {
                        var n = f[g];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 
                        "value" in n && (n.writable = !0), Object.defineProperty(a, n.key, n);
                    }
                }(o.prototype, h), o;
            }(T.default);
        },
        "./src/controller/subtitle-track-controller.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/events.ts"), S = v("./src/utils/texttrack-utils.ts"), L = v("./src/controller/base-playlist-controller.ts"), D = v("./src/types/loader.ts");
            function I(T, p) {
                return (I = Object.setPrototypeOf || function(y, b) {
                    return y.__proto__ = b, y;
                })(T, p);
            }
            var A = function(T) {
                var p, y;
                function b(t) {
                    var l;
                    return (l = T.call(this, t, "[subtitle-track-controller]") || this).media = null, 
                    l.tracks = [], l.groupId = null, l.tracksInGroup = [], l.trackId = -1, 
                    l.selectDefaultTrack = !0, l.queuedDefaultTrack = -1, l.trackChangeListener = function() {
                        return l.onTextTracksChanged();
                    }, l.asyncPollTrackChange = function() {
                        return l.pollTrackChange(0);
                    }, l.useTextTrackPolling = !1, l.subtitlePollingInterval = -1, 
                    l.subtitleDisplay = !0, l.registerListeners(), l;
                }
                y = T, (p = b).prototype = Object.create(y.prototype), p.prototype.constructor = p, 
                I(p, y);
                var E, r = b.prototype;
                return r.destroy = function() {
                    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, 
                    this.trackChangeListener = this.asyncPollTrackChange = null, 
                    T.prototype.destroy.call(this);
                }, r.registerListeners = function() {
                    var t = this.hls;
                    t.on(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    t.on(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    t.on(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    t.on(k.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(k.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), 
                    t.on(k.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), 
                    t.on(k.Events.ERROR, this.onError, this);
                }, r.unregisterListeners = function() {
                    var t = this.hls;
                    t.off(k.Events.MEDIA_ATTACHED, this.onMediaAttached, this), 
                    t.off(k.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    t.off(k.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    t.off(k.Events.MANIFEST_PARSED, this.onManifestParsed, this), 
                    t.off(k.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(k.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), 
                    t.off(k.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), 
                    t.off(k.Events.ERROR, this.onError, this);
                }, r.onMediaAttached = function(t, l) {
                    this.media = l.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, 
                    this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), 
                    this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
                }, r.pollTrackChange = function(t) {
                    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t);
                }, r.onMediaDetaching = function() {
                    this.media && (self.clearInterval(this.subtitlePollingInterval), 
                    this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), 
                    this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), 
                    d(this.media.textTracks).forEach(function(t) {
                        Object(S.clearCurrentCues)(t);
                    }), this.subtitleTrack = -1, this.media = null);
                }, r.onManifestLoading = function() {
                    this.tracks = [], this.groupId = null, this.tracksInGroup = [], 
                    this.trackId = -1, this.selectDefaultTrack = !0;
                }, r.onManifestParsed = function(t, l) {
                    this.tracks = l.subtitleTracks;
                }, r.onSubtitleTrackLoaded = function(t, l) {
                    var o = l.id, h = l.details, i = this.trackId, a = this.tracksInGroup[i];
                    if (a) {
                        var f = a.details;
                        a.details = l.details, this.log("subtitle track " + o + " loaded [" + h.startSN + "-" + h.endSN + "]"), 
                        o === this.trackId && (this.retryCount = 0, this.playlistLoaded(o, l, f));
                    } else this.warn("Invalid subtitle track id " + o);
                }, r.onLevelLoading = function(t, l) {
                    this.switchLevel(l.level);
                }, r.onLevelSwitching = function(t, l) {
                    this.switchLevel(l.level);
                }, r.switchLevel = function(t) {
                    var l = this.hls.levels[t];
                    if (l != null && l.textGroupIds) {
                        var o = l.textGroupIds[l.urlId];
                        if (this.groupId !== o) {
                            var h = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0, i = this.tracks.filter(function(g) {
                                return !o || g.groupId === o;
                            });
                            this.tracksInGroup = i;
                            var a = this.findTrackId(h == null ? void 0 : h.name) || this.findTrackId();
                            this.groupId = o;
                            var f = {
                                subtitleTracks: i
                            };
                            this.log("Updating subtitle tracks, " + i.length + ' track(s) found in "' + o + '" group-id'), 
                            this.hls.trigger(k.Events.SUBTITLE_TRACKS_UPDATED, f), 
                            a !== -1 && this.setSubtitleTrack(a, h);
                        }
                    }
                }, r.findTrackId = function(t) {
                    for (var l = this.tracksInGroup, o = 0; o < l.length; o++) {
                        var h = l[o];
                        if ((!this.selectDefaultTrack || h.default) && (!t || t === h.name)) return h.id;
                    }
                    return -1;
                }, r.onError = function(t, l) {
                    T.prototype.onError.call(this, t, l), !l.fatal && l.context && l.context.type === D.PlaylistContextType.SUBTITLE_TRACK && l.context.id === this.trackId && l.context.groupId === this.groupId && this.retryLoadingOrFail(l);
                }, r.loadPlaylist = function(t) {
                    var l = this.tracksInGroup[this.trackId];
                    if (this.shouldLoadTrack(l)) {
                        var o = l.id, h = l.groupId, i = l.url;
                        if (t) try {
                            i = t.addDirectives(i);
                        } catch (a) {
                            this.warn("Could not construct new URL with HLS Delivery Directives: " + a);
                        }
                        this.log("Loading subtitle playlist for id " + o), this.hls.trigger(k.Events.SUBTITLE_TRACK_LOADING, {
                            url: i,
                            id: o,
                            groupId: h,
                            deliveryDirectives: t || null
                        });
                    }
                }, r.toggleTrackModes = function(t) {
                    var l = this, o = this.media, h = this.subtitleDisplay, i = this.trackId;
                    if (o) {
                        var a = d(o.textTracks), f = a.filter(function(c) {
                            return c.groupId === l.groupId;
                        });
                        if (t === -1) [].slice.call(a).forEach(function(c) {
                            c.mode = "disabled";
                        }); else {
                            var g = f[i];
                            g && (g.mode = "disabled");
                        }
                        var n = f[t];
                        n && (n.mode = h ? "showing" : "hidden");
                    }
                }, r.setSubtitleTrack = function(t, l) {
                    var o, h = this.tracksInGroup;
                    if (this.media) {
                        if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (t === -1 || (o = h[t]) !== null && o !== void 0 && o.details) || t < -1 || t >= h.length)) {
                            this.clearTimer();
                            var i = h[t];
                            if (this.log("Switching to subtitle track " + t), this.trackId = t, 
                            i) {
                                var a = i.id, f = i.groupId, g = f === void 0 ? "" : f, n = i.name, c = i.type, u = i.url;
                                this.hls.trigger(k.Events.SUBTITLE_TRACK_SWITCH, {
                                    id: a,
                                    groupId: g,
                                    name: n,
                                    type: c,
                                    url: u
                                });
                                var s = this.switchParams(i.url, l == null ? void 0 : l.details);
                                this.loadPlaylist(s);
                            } else this.hls.trigger(k.Events.SUBTITLE_TRACK_SWITCH, {
                                id: t
                            });
                        }
                    } else this.queuedDefaultTrack = t;
                }, r.onTextTracksChanged = function() {
                    if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), 
                    this.media && this.hls.config.renderTextTracksNatively) {
                        for (var t = -1, l = d(this.media.textTracks), o = 0; o < l.length; o++) if (l[o].mode === "hidden") t = o; else if (l[o].mode === "showing") {
                            t = o;
                            break;
                        }
                        this.subtitleTrack !== t && (this.subtitleTrack = t);
                    }
                }, (E = [ {
                    key: "subtitleTracks",
                    get: function() {
                        return this.tracksInGroup;
                    }
                }, {
                    key: "subtitleTrack",
                    get: function() {
                        return this.trackId;
                    },
                    set: function(t) {
                        this.selectDefaultTrack = !1;
                        var l = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                        this.setSubtitleTrack(t, l);
                    }
                } ]) && function(t, l) {
                    for (var o = 0; o < l.length; o++) {
                        var h = l[o];
                        h.enumerable = h.enumerable || !1, h.configurable = !0, 
                        "value" in h && (h.writable = !0), Object.defineProperty(t, h.key, h);
                    }
                }(b.prototype, E), b;
            }(L.default);
            function d(T) {
                for (var p = [], y = 0; y < T.length; y++) {
                    var b = T[y];
                    b.kind === "subtitles" && b.label && p.push(T[y]);
                }
                return p;
            }
            C.default = A;
        },
        "./src/controller/timeline-controller.ts": function(F, C, v) {
            v.r(C), v.d(C, "TimelineController", function() {
                return y;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/events.ts"), L = v("./src/utils/cea-608-parser.ts"), D = v("./src/utils/output-filter.ts"), I = v("./src/utils/webvtt-parser.ts"), A = v("./src/utils/texttrack-utils.ts"), d = v("./src/utils/imsc1-ttml-parser.ts"), T = v("./src/types/loader.ts"), p = v("./src/utils/logger.ts"), y = function() {
                function E(t) {
                    if (this.hls = void 0, this.media = null, this.config = void 0, 
                    this.enabled = !0, this.Cues = void 0, this.textTracks = [], 
                    this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], 
                    this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, 
                    this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, 
                    this.prevCC = -1, this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0,
                        0: {
                            start: 0,
                            prevCC: -1,
                            new: !1
                        }
                    }, this.captionsProperties = void 0, this.hls = t, this.config = t.config, 
                    this.Cues = t.config.cueHandler, this.captionsProperties = {
                        textTrack1: {
                            label: this.config.captionsTextTrack1Label,
                            languageCode: this.config.captionsTextTrack1LanguageCode
                        },
                        textTrack2: {
                            label: this.config.captionsTextTrack2Label,
                            languageCode: this.config.captionsTextTrack2LanguageCode
                        },
                        textTrack3: {
                            label: this.config.captionsTextTrack3Label,
                            languageCode: this.config.captionsTextTrack3LanguageCode
                        },
                        textTrack4: {
                            label: this.config.captionsTextTrack4Label,
                            languageCode: this.config.captionsTextTrack4LanguageCode
                        }
                    }, this.config.enableCEA708Captions) {
                        var l = new D.default(this, "textTrack1"), o = new D.default(this, "textTrack2"), h = new D.default(this, "textTrack3"), i = new D.default(this, "textTrack4");
                        this.cea608Parser1 = new L.default(1, l, o), this.cea608Parser2 = new L.default(3, h, i);
                    }
                    t.on(S.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), 
                    t.on(S.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    t.on(S.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    t.on(S.Events.MANIFEST_LOADED, this.onManifestLoaded, this), 
                    t.on(S.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), 
                    t.on(S.Events.FRAG_LOADING, this.onFragLoading, this), t.on(S.Events.FRAG_LOADED, this.onFragLoaded, this), 
                    t.on(S.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), 
                    t.on(S.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(S.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), 
                    t.on(S.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), 
                    t.on(S.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                }
                var r = E.prototype;
                return r.destroy = function() {
                    var t = this.hls;
                    t.off(S.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), 
                    t.off(S.Events.MEDIA_DETACHING, this.onMediaDetaching, this), 
                    t.off(S.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    t.off(S.Events.MANIFEST_LOADED, this.onManifestLoaded, this), 
                    t.off(S.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), 
                    t.off(S.Events.FRAG_LOADING, this.onFragLoading, this), t.off(S.Events.FRAG_LOADED, this.onFragLoaded, this), 
                    t.off(S.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), 
                    t.off(S.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), 
                    t.off(S.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(S.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), 
                    t.off(S.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), 
                    this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
                }, r.addCues = function(t, l, o, h, i) {
                    for (var a, f, g, n, c = !1, u = i.length; u--; ) {
                        var s = i[u], e = (a = s[0], f = s[1], g = l, n = o, Math.min(f, n) - Math.max(a, g));
                        if (e >= 0 && (s[0] = Math.min(s[0], l), s[1] = Math.max(s[1], o), 
                        c = !0, e / (o - l) > .5)) return;
                    }
                    if (c || i.push([ l, o ]), this.config.renderTextTracksNatively) {
                        var m = this.captionsTracks[t];
                        this.Cues.newCue(m, l, o, h);
                    } else {
                        var _ = this.Cues.newCue(null, l, o, h);
                        this.hls.trigger(S.Events.CUES_PARSED, {
                            type: "captions",
                            cues: _,
                            track: t
                        });
                    }
                }, r.onInitPtsFound = function(t, l) {
                    var o = this, h = l.frag, i = l.id, a = l.initPTS, f = l.timescale, g = this.unparsedVttFrags;
                    i === "main" && (this.initPTS[h.cc] = a, this.timescale[h.cc] = f), 
                    g.length && (this.unparsedVttFrags = [], g.forEach(function(n) {
                        o.onFragLoaded(S.Events.FRAG_LOADED, n);
                    }));
                }, r.getExistingTrack = function(t) {
                    var l = this.media;
                    if (l) for (var o = 0; o < l.textTracks.length; o++) {
                        var h = l.textTracks[o];
                        if (h[t]) return h;
                    }
                    return null;
                }, r.createCaptionsTrack = function(t) {
                    this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t);
                }, r.createNativeTrack = function(t) {
                    if (!this.captionsTracks[t]) {
                        var l = this.captionsProperties, o = this.captionsTracks, h = this.media, i = l[t], a = i.label, f = i.languageCode, g = this.getExistingTrack(t);
                        if (g) o[t] = g, Object(A.clearCurrentCues)(o[t]), Object(A.sendAddTrackEvent)(o[t], h); else {
                            var n = this.createTextTrack("captions", a, f);
                            n && (n[t] = !0, o[t] = n);
                        }
                    }
                }, r.createNonNativeTrack = function(t) {
                    if (!this.nonNativeCaptionsTracks[t]) {
                        var l = this.captionsProperties[t];
                        if (l) {
                            var o = {
                                _id: t,
                                label: l.label,
                                kind: "captions",
                                default: !!l.media && !!l.media.default,
                                closedCaptions: l.media
                            };
                            this.nonNativeCaptionsTracks[t] = o, this.hls.trigger(S.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                tracks: [ o ]
                            });
                        }
                    }
                }, r.createTextTrack = function(t, l, o) {
                    var h = this.media;
                    if (h) return h.addTextTrack(t, l, o);
                }, r.onMediaAttaching = function(t, l) {
                    this.media = l.media, this._cleanTracks();
                }, r.onMediaDetaching = function() {
                    var t = this.captionsTracks;
                    Object.keys(t).forEach(function(l) {
                        Object(A.clearCurrentCues)(t[l]), delete t[l];
                    }), this.nonNativeCaptionsTracks = {};
                }, r.onManifestLoading = function() {
                    this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0,
                        0: {
                            start: 0,
                            prevCC: -1,
                            new: !1
                        }
                    }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, 
                    this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], 
                    this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), 
                    this.cea608Parser2.reset());
                }, r._cleanTracks = function() {
                    var t = this.media;
                    if (t) {
                        var l = t.textTracks;
                        if (l) for (var o = 0; o < l.length; o++) Object(A.clearCurrentCues)(l[o]);
                    }
                }, r.onSubtitleTracksUpdated = function(t, l) {
                    var o = this;
                    this.textTracks = [];
                    var h = l.subtitleTracks || [], i = h.some(function(n) {
                        return n.textCodec === d.IMSC1_CODEC;
                    });
                    if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
                        var a = this.tracks && h && this.tracks.length === h.length;
                        if (this.tracks = h || [], this.config.renderTextTracksNatively) {
                            var f = this.media ? this.media.textTracks : [];
                            this.tracks.forEach(function(n, c) {
                                var u;
                                if (c < f.length) {
                                    for (var s = null, e = 0; e < f.length; e++) if (b(f[e], n)) {
                                        s = f[e];
                                        break;
                                    }
                                    s && (u = s);
                                }
                                u ? Object(A.clearCurrentCues)(u) : (u = o.createTextTrack("subtitles", n.name, n.lang)) && (u.mode = "disabled"), 
                                u && (u.groupId = n.groupId, o.textTracks.push(u));
                            });
                        } else if (!a && this.tracks && this.tracks.length) {
                            var g = this.tracks.map(function(n) {
                                return {
                                    label: n.name,
                                    kind: n.type.toLowerCase(),
                                    default: n.default,
                                    subtitleTrack: n
                                };
                            });
                            this.hls.trigger(S.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                tracks: g
                            });
                        }
                    }
                }, r.onManifestLoaded = function(t, l) {
                    var o = this;
                    this.config.enableCEA708Captions && l.captions && l.captions.forEach(function(h) {
                        var i = /(?:CC|SERVICE)([1-4])/.exec(h.instreamId);
                        if (i) {
                            var a = "textTrack" + i[1], f = o.captionsProperties[a];
                            f && (f.label = h.name, h.lang && (f.languageCode = h.lang), 
                            f.media = h);
                        }
                    });
                }, r.onFragLoading = function(t, l) {
                    var o = this.cea608Parser1, h = this.cea608Parser2, i = this.lastSn;
                    if (this.enabled && o && h && l.frag.type === T.PlaylistLevelType.MAIN) {
                        var a = l.frag.sn;
                        a !== i + 1 && (o.reset(), h.reset()), this.lastSn = a;
                    }
                }, r.onFragLoaded = function(t, l) {
                    var o = l.frag, h = l.payload, i = this.initPTS, a = this.unparsedVttFrags;
                    if (o.type === T.PlaylistLevelType.SUBTITLE) if (h.byteLength) {
                        if (!Object(k.isFiniteNumber)(i[o.cc])) return a.push(l), 
                        void (i.length && this.hls.trigger(S.Events.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: o,
                            error: new Error("Missing initial subtitle PTS")
                        }));
                        var f = o.decryptdata;
                        if (f == null || f.key == null || f.method !== "AES-128") {
                            var g = this.tracks[o.level], n = this.vttCCs;
                            n[o.cc] || (n[o.cc] = {
                                start: o.start,
                                prevCC: this.prevCC,
                                new: !0
                            }, this.prevCC = o.cc), g && g.textCodec === d.IMSC1_CODEC ? this._parseIMSC1(o, h) : this._parseVTTs(o, h, n);
                        }
                    } else this.hls.trigger(S.Events.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: o,
                        error: new Error("Empty subtitle payload")
                    });
                }, r._parseIMSC1 = function(t, l) {
                    var o = this, h = this.hls;
                    Object(d.parseIMSC1)(l, this.initPTS[t.cc], this.timescale[t.cc], function(i) {
                        o._appendCues(i, t.level), h.trigger(S.Events.SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: t
                        });
                    }, function(i) {
                        p.logger.log("Failed to parse IMSC1: " + i), h.trigger(S.Events.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: t,
                            error: i
                        });
                    });
                }, r._parseVTTs = function(t, l, o) {
                    var h = this, i = this.hls;
                    Object(I.parseWebVTT)(l, this.initPTS[t.cc], this.timescale[t.cc], o, t.cc, t.start, function(a) {
                        h._appendCues(a, t.level), i.trigger(S.Events.SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: t
                        });
                    }, function(a) {
                        h._fallbackToIMSC1(t, l), p.logger.log("Failed to parse VTT cue: " + a), 
                        i.trigger(S.Events.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: t,
                            error: a
                        });
                    });
                }, r._fallbackToIMSC1 = function(t, l) {
                    var o = this, h = this.tracks[t.level];
                    h.textCodec || Object(d.parseIMSC1)(l, this.initPTS[t.cc], this.timescale[t.cc], function() {
                        h.textCodec = d.IMSC1_CODEC, o._parseIMSC1(t, l);
                    }, function() {
                        h.textCodec = "wvtt";
                    });
                }, r._appendCues = function(t, l) {
                    var o = this.hls;
                    if (this.config.renderTextTracksNatively) {
                        var h = this.textTracks[l];
                        if (h.mode === "disabled") return;
                        t.forEach(function(a) {
                            return Object(A.addCueToTrack)(h, a);
                        });
                    } else {
                        var i = this.tracks[l].default ? "default" : "subtitles" + l;
                        o.trigger(S.Events.CUES_PARSED, {
                            type: "subtitles",
                            cues: t,
                            track: i
                        });
                    }
                }, r.onFragDecrypted = function(t, l) {
                    var o = l.frag;
                    if (o.type === T.PlaylistLevelType.SUBTITLE) {
                        if (!Object(k.isFiniteNumber)(this.initPTS[o.cc])) return void this.unparsedVttFrags.push(l);
                        this.onFragLoaded(S.Events.FRAG_LOADED, l);
                    }
                }, r.onSubtitleTracksCleared = function() {
                    this.tracks = [], this.captionsTracks = {};
                }, r.onFragParsingUserdata = function(t, l) {
                    var o = this.cea608Parser1, h = this.cea608Parser2;
                    if (this.enabled && o && h) for (var i = 0; i < l.samples.length; i++) {
                        var a = l.samples[i].bytes;
                        if (a) {
                            var f = this.extractCea608Data(a);
                            o.addData(l.samples[i].pts, f[0]), h.addData(l.samples[i].pts, f[1]);
                        }
                    }
                }, r.onBufferFlushing = function(t, l) {
                    var o = l.startOffset, h = l.endOffset, i = l.endOffsetSubtitles, a = l.type, f = this.media;
                    if (f && !(f.currentTime < h)) {
                        if (!a || a === "video") {
                            var g = this.captionsTracks;
                            Object.keys(g).forEach(function(c) {
                                return Object(A.removeCuesInRange)(g[c], o, h);
                            });
                        }
                        if (this.config.renderTextTracksNatively && o === 0 && i !== void 0) {
                            var n = this.textTracks;
                            Object.keys(n).forEach(function(c) {
                                return Object(A.removeCuesInRange)(n[c], o, i);
                            });
                        }
                    }
                }, r.extractCea608Data = function(t) {
                    for (var l = 31 & t[0], o = 2, h = [ [], [] ], i = 0; i < l; i++) {
                        var a = t[o++], f = 127 & t[o++], g = 127 & t[o++], n = 3 & a;
                        f === 0 && g === 0 || 4 & a && (n !== 0 && n !== 1 || (h[n].push(f), 
                        h[n].push(g)));
                    }
                    return h;
                }, E;
            }();
            function b(E, r) {
                return E && E.label === r.name && !(E.textTrack1 || E.textTrack2);
            }
        },
        "./src/crypt/aes-crypto.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return k;
            });
            var k = function() {
                function S(L, D) {
                    this.subtle = void 0, this.aesIV = void 0, this.subtle = L, 
                    this.aesIV = D;
                }
                return S.prototype.decrypt = function(L, D) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, D, L);
                }, S;
            }();
        },
        "./src/crypt/aes-decryptor.ts": function(F, C, v) {
            v.r(C), v.d(C, "removePadding", function() {
                return S;
            }), v.d(C, "default", function() {
                return L;
            });
            var k = v("./src/utils/typed-array.ts");
            function S(D) {
                var I = D.byteLength, A = I && new DataView(D.buffer).getUint8(I - 1);
                return A ? Object(k.sliceUint8)(D, 0, I - A) : D;
            }
            var L = function() {
                function D() {
                    this.rcon = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], this.subMix = [ new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256) ], 
                    this.invSubMix = [ new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256) ], 
                    this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), 
                    this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, 
                    this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
                }
                var I = D.prototype;
                return I.uint8ArrayToUint32Array_ = function(A) {
                    for (var d = new DataView(A), T = new Uint32Array(4), p = 0; p < 4; p++) T[p] = d.getUint32(4 * p);
                    return T;
                }, I.initTable = function() {
                    var A = this.sBox, d = this.invSBox, T = this.subMix, p = T[0], y = T[1], b = T[2], E = T[3], r = this.invSubMix, t = r[0], l = r[1], o = r[2], h = r[3], i = new Uint32Array(256), a = 0, f = 0, g = 0;
                    for (g = 0; g < 256; g++) i[g] = g < 128 ? g << 1 : g << 1 ^ 283;
                    for (g = 0; g < 256; g++) {
                        var n = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
                        n = n >>> 8 ^ 255 & n ^ 99, A[a] = n, d[n] = a;
                        var c = i[a], u = i[c], s = i[u], e = 257 * i[n] ^ 16843008 * n;
                        p[a] = e << 24 | e >>> 8, y[a] = e << 16 | e >>> 16, b[a] = e << 8 | e >>> 24, 
                        E[a] = e, e = 16843009 * s ^ 65537 * u ^ 257 * c ^ 16843008 * a, 
                        t[n] = e << 24 | e >>> 8, l[n] = e << 16 | e >>> 16, o[n] = e << 8 | e >>> 24, 
                        h[n] = e, a ? (a = c ^ i[i[i[s ^ c]]], f ^= i[i[f]]) : a = f = 1;
                    }
                }, I.expandKey = function(A) {
                    for (var d = this.uint8ArrayToUint32Array_(A), T = !0, p = 0; p < d.length && T; ) T = d[p] === this.key[p], 
                    p++;
                    if (!T) {
                        this.key = d;
                        var y = this.keySize = d.length;
                        if (y !== 4 && y !== 6 && y !== 8) throw new Error("Invalid aes key size=" + y);
                        var b, E, r, t, l = this.ksRows = 4 * (y + 6 + 1), o = this.keySchedule = new Uint32Array(l), h = this.invKeySchedule = new Uint32Array(l), i = this.sBox, a = this.rcon, f = this.invSubMix, g = f[0], n = f[1], c = f[2], u = f[3];
                        for (b = 0; b < l; b++) b < y ? r = o[b] = d[b] : (t = r, 
                        b % y == 0 ? (t = i[(t = t << 8 | t >>> 24) >>> 24] << 24 | i[t >>> 16 & 255] << 16 | i[t >>> 8 & 255] << 8 | i[255 & t], 
                        t ^= a[b / y | 0] << 24) : y > 6 && b % y == 4 && (t = i[t >>> 24] << 24 | i[t >>> 16 & 255] << 16 | i[t >>> 8 & 255] << 8 | i[255 & t]), 
                        o[b] = r = (o[b - y] ^ t) >>> 0);
                        for (E = 0; E < l; E++) b = l - E, t = 3 & E ? o[b] : o[b - 4], 
                        h[E] = E < 4 || b <= 4 ? t : g[i[t >>> 24]] ^ n[i[t >>> 16 & 255]] ^ c[i[t >>> 8 & 255]] ^ u[i[255 & t]], 
                        h[E] = h[E] >>> 0;
                    }
                }, I.networkToHostOrderSwap = function(A) {
                    return A << 24 | (65280 & A) << 8 | (16711680 & A) >> 8 | A >>> 24;
                }, I.decrypt = function(A, d, T) {
                    for (var p, y, b, E, r, t, l, o, h, i, a, f, g, n, c = this.keySize + 6, u = this.invKeySchedule, s = this.invSBox, e = this.invSubMix, m = e[0], _ = e[1], R = e[2], O = e[3], x = this.uint8ArrayToUint32Array_(T), w = x[0], P = x[1], N = x[2], M = x[3], B = new Int32Array(A), U = new Int32Array(B.length), G = this.networkToHostOrderSwap; d < B.length; ) {
                        for (h = G(B[d]), i = G(B[d + 1]), a = G(B[d + 2]), f = G(B[d + 3]), 
                        r = h ^ u[0], t = f ^ u[1], l = a ^ u[2], o = i ^ u[3], 
                        g = 4, n = 1; n < c; n++) p = m[r >>> 24] ^ _[t >> 16 & 255] ^ R[l >> 8 & 255] ^ O[255 & o] ^ u[g], 
                        y = m[t >>> 24] ^ _[l >> 16 & 255] ^ R[o >> 8 & 255] ^ O[255 & r] ^ u[g + 1], 
                        b = m[l >>> 24] ^ _[o >> 16 & 255] ^ R[r >> 8 & 255] ^ O[255 & t] ^ u[g + 2], 
                        E = m[o >>> 24] ^ _[r >> 16 & 255] ^ R[t >> 8 & 255] ^ O[255 & l] ^ u[g + 3], 
                        r = p, t = y, l = b, o = E, g += 4;
                        p = s[r >>> 24] << 24 ^ s[t >> 16 & 255] << 16 ^ s[l >> 8 & 255] << 8 ^ s[255 & o] ^ u[g], 
                        y = s[t >>> 24] << 24 ^ s[l >> 16 & 255] << 16 ^ s[o >> 8 & 255] << 8 ^ s[255 & r] ^ u[g + 1], 
                        b = s[l >>> 24] << 24 ^ s[o >> 16 & 255] << 16 ^ s[r >> 8 & 255] << 8 ^ s[255 & t] ^ u[g + 2], 
                        E = s[o >>> 24] << 24 ^ s[r >> 16 & 255] << 16 ^ s[t >> 8 & 255] << 8 ^ s[255 & l] ^ u[g + 3], 
                        U[d] = G(p ^ w), U[d + 1] = G(E ^ P), U[d + 2] = G(b ^ N), 
                        U[d + 3] = G(y ^ M), w = h, P = i, N = a, M = f, d += 4;
                    }
                    return U.buffer;
                }, D;
            }();
        },
        "./src/crypt/decrypter.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return d;
            });
            var k = v("./src/crypt/aes-crypto.ts"), S = v("./src/crypt/fast-aes-key.ts"), L = v("./src/crypt/aes-decryptor.ts"), D = v("./src/utils/logger.ts"), I = v("./src/utils/mp4-tools.ts"), A = v("./src/utils/typed-array.ts"), d = function() {
                function T(y, b, E) {
                    var r = (E === void 0 ? {} : E).removePKCS7Padding, t = r === void 0 || r;
                    if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, 
                    this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, 
                    this.key = null, this.fastAesKey = null, this.remainderData = null, 
                    this.currentIV = null, this.currentResult = null, this.observer = y, 
                    this.config = b, this.removePKCS7Padding = t, t) try {
                        var l = self.crypto;
                        l && (this.subtle = l.subtle || l.webkitSubtle);
                    } catch {}
                    this.subtle === null && (this.config.enableSoftwareAES = !0);
                }
                var p = T.prototype;
                return p.destroy = function() {
                    this.observer = null;
                }, p.isSync = function() {
                    return this.config.enableSoftwareAES;
                }, p.flush = function() {
                    var y = this.currentResult;
                    if (y) {
                        var b = new Uint8Array(y);
                        return this.reset(), this.removePKCS7Padding ? Object(L.removePadding)(b) : b;
                    }
                    this.reset();
                }, p.reset = function() {
                    this.currentResult = null, this.currentIV = null, this.remainderData = null, 
                    this.softwareDecrypter && (this.softwareDecrypter = null);
                }, p.decrypt = function(y, b, E, r) {
                    if (this.config.enableSoftwareAES) {
                        this.softwareDecrypt(new Uint8Array(y), b, E);
                        var t = this.flush();
                        t && r(t.buffer);
                    } else this.webCryptoDecrypt(new Uint8Array(y), b, E).then(r);
                }, p.softwareDecrypt = function(y, b, E) {
                    var r = this.currentIV, t = this.currentResult, l = this.remainderData;
                    this.logOnce("JS AES decrypt"), l && (y = Object(I.appendUint8Array)(l, y), 
                    this.remainderData = null);
                    var o = this.getValidChunk(y);
                    if (!o.length) return null;
                    r && (E = r);
                    var h = this.softwareDecrypter;
                    h || (h = this.softwareDecrypter = new L.default()), h.expandKey(b);
                    var i = t;
                    return this.currentResult = h.decrypt(o.buffer, 0, E), this.currentIV = Object(A.sliceUint8)(o, -16).buffer, 
                    i || null;
                }, p.webCryptoDecrypt = function(y, b, E) {
                    var r = this, t = this.subtle;
                    return this.key === b && this.fastAesKey || (this.key = b, this.fastAesKey = new S.default(t, b)), 
                    this.fastAesKey.expandKey().then(function(l) {
                        return t ? new k.default(t, E).decrypt(y.buffer, l) : Promise.reject(new Error("web crypto not initialized"));
                    }).catch(function(l) {
                        return r.onWebCryptoError(l, y, b, E);
                    });
                }, p.onWebCryptoError = function(y, b, E, r) {
                    return D.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", y), 
                    this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(b, E, r);
                }, p.getValidChunk = function(y) {
                    var b = y, E = y.length - y.length % 16;
                    return E !== y.length && (b = Object(A.sliceUint8)(y, 0, E), 
                    this.remainderData = Object(A.sliceUint8)(y, E)), b;
                }, p.logOnce = function(y) {
                    this.logEnabled && (D.logger.log("[decrypter.ts]: " + y), this.logEnabled = !1);
                }, T;
            }();
        },
        "./src/crypt/fast-aes-key.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return k;
            });
            var k = function() {
                function S(L, D) {
                    this.subtle = void 0, this.key = void 0, this.subtle = L, this.key = D;
                }
                return S.prototype.expandKey = function() {
                    return this.subtle.importKey("raw", this.key, {
                        name: "AES-CBC"
                    }, !1, [ "encrypt", "decrypt" ]);
                }, S;
            }();
        },
        "./src/demux/aacdemuxer.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/demux/base-audio-demuxer.ts"), S = v("./src/demux/adts.ts"), L = v("./src/utils/logger.ts"), D = v("./src/demux/id3.ts");
            function I(d, T) {
                return (I = Object.setPrototypeOf || function(p, y) {
                    return p.__proto__ = y, p;
                })(d, T);
            }
            var A = function(d) {
                var T, p;
                function y(E, r) {
                    var t;
                    return (t = d.call(this) || this).observer = void 0, t.config = void 0, 
                    t.observer = E, t.config = r, t;
                }
                p = d, (T = y).prototype = Object.create(p.prototype), T.prototype.constructor = T, 
                I(T, p);
                var b = y.prototype;
                return b.resetInitSegment = function(E, r, t) {
                    d.prototype.resetInitSegment.call(this, E, r, t), this._audioTrack = {
                        container: "audio/adts",
                        type: "audio",
                        id: 0,
                        pid: -1,
                        sequenceNumber: 0,
                        isAAC: !0,
                        samples: [],
                        manifestCodec: E,
                        duration: t,
                        inputTimeScale: 9e4,
                        dropped: 0
                    };
                }, y.probe = function(E) {
                    if (!E) return !1;
                    for (var r = (D.getID3Data(E, 0) || []).length, t = E.length; r < t; r++) if (S.probe(E, r)) return L.logger.log("ADTS sync word found !"), 
                    !0;
                    return !1;
                }, b.canParse = function(E, r) {
                    return S.canParse(E, r);
                }, b.appendFrame = function(E, r, t) {
                    S.initTrackConfig(E, this.observer, r, t, E.manifestCodec);
                    var l = S.appendFrame(E, r, t, this.initPTS, this.frameIndex);
                    if (l && l.missing === 0) return l;
                }, y;
            }(k.default);
            A.minProbeByteLength = 9, C.default = A;
        },
        "./src/demux/adts.ts": function(F, C, v) {
            v.r(C), v.d(C, "getAudioConfig", function() {
                return D;
            }), v.d(C, "isHeaderPattern", function() {
                return I;
            }), v.d(C, "getHeaderLength", function() {
                return A;
            }), v.d(C, "getFullFrameLength", function() {
                return d;
            }), v.d(C, "canGetFrameLength", function() {
                return T;
            }), v.d(C, "isHeader", function() {
                return p;
            }), v.d(C, "canParse", function() {
                return y;
            }), v.d(C, "probe", function() {
                return b;
            }), v.d(C, "initTrackConfig", function() {
                return E;
            }), v.d(C, "getFrameDuration", function() {
                return r;
            }), v.d(C, "parseFrameHeader", function() {
                return t;
            }), v.d(C, "appendFrame", function() {
                return l;
            });
            var k = v("./src/utils/logger.ts"), S = v("./src/errors.ts"), L = v("./src/events.ts");
            function D(o, h, i, a) {
                var f, g, n, c, u = navigator.userAgent.toLowerCase(), s = a, e = [ 96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350 ];
                f = 1 + ((192 & h[i + 2]) >>> 6);
                var m = (60 & h[i + 2]) >>> 2;
                if (!(m > e.length - 1)) return n = (1 & h[i + 2]) << 2, n |= (192 & h[i + 3]) >>> 6, 
                k.logger.log("manifest codec:" + a + ", ADTS type:" + f + ", samplingIndex:" + m), 
                /firefox/i.test(u) ? m >= 6 ? (f = 5, c = new Array(4), g = m - 3) : (f = 2, 
                c = new Array(2), g = m) : u.indexOf("android") !== -1 ? (f = 2, 
                c = new Array(2), g = m) : (f = 5, c = new Array(4), a && (a.indexOf("mp4a.40.29") !== -1 || a.indexOf("mp4a.40.5") !== -1) || !a && m >= 6 ? g = m - 3 : ((a && a.indexOf("mp4a.40.2") !== -1 && (m >= 6 && n === 1 || /vivaldi/i.test(u)) || !a && n === 1) && (f = 2, 
                c = new Array(2)), g = m)), c[0] = f << 3, c[0] |= (14 & m) >> 1, 
                c[1] |= (1 & m) << 7, c[1] |= n << 3, f === 5 && (c[1] |= (14 & g) >> 1, 
                c[2] = (1 & g) << 7, c[2] |= 8, c[3] = 0), {
                    config: c,
                    samplerate: e[m],
                    channelCount: n,
                    codec: "mp4a.40." + f,
                    manifestCodec: s
                };
                o.trigger(L.Events.ERROR, {
                    type: S.ErrorTypes.MEDIA_ERROR,
                    details: S.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !0,
                    reason: "invalid ADTS sampling index:" + m
                });
            }
            function I(o, h) {
                return o[h] === 255 && (246 & o[h + 1]) == 240;
            }
            function A(o, h) {
                return 1 & o[h + 1] ? 7 : 9;
            }
            function d(o, h) {
                return (3 & o[h + 3]) << 11 | o[h + 4] << 3 | (224 & o[h + 5]) >>> 5;
            }
            function T(o, h) {
                return h + 5 < o.length;
            }
            function p(o, h) {
                return h + 1 < o.length && I(o, h);
            }
            function y(o, h) {
                return T(o, h) && I(o, h) && d(o, h) <= o.length - h;
            }
            function b(o, h) {
                if (p(o, h)) {
                    var i = A(o, h);
                    if (h + i >= o.length) return !1;
                    var a = d(o, h);
                    if (a <= i) return !1;
                    var f = h + a;
                    return f === o.length || p(o, f);
                }
                return !1;
            }
            function E(o, h, i, a, f) {
                if (!o.samplerate) {
                    var g = D(h, i, a, f);
                    if (!g) return;
                    o.config = g.config, o.samplerate = g.samplerate, o.channelCount = g.channelCount, 
                    o.codec = g.codec, o.manifestCodec = g.manifestCodec, k.logger.log("parsed codec:" + o.codec + ", rate:" + g.samplerate + ", channels:" + g.channelCount);
                }
            }
            function r(o) {
                return 9216e4 / o;
            }
            function t(o, h, i, a, f) {
                var g = A(o, h), n = d(o, h);
                if ((n -= g) > 0) return {
                    headerLength: g,
                    frameLength: n,
                    stamp: i + a * f
                };
            }
            function l(o, h, i, a, f) {
                var g = t(h, i, a, f, r(o.samplerate));
                if (g) {
                    var n, c = g.frameLength, u = g.headerLength, s = g.stamp, e = u + c, m = Math.max(0, i + e - h.length);
                    m ? (n = new Uint8Array(e - u)).set(h.subarray(i + u, h.length), 0) : n = h.subarray(i + u, i + e);
                    var _ = {
                        unit: n,
                        pts: s
                    };
                    return m || o.samples.push(_), {
                        sample: _,
                        length: e,
                        missing: m
                    };
                }
            }
        },
        "./src/demux/base-audio-demuxer.ts": function(F, C, v) {
            v.r(C), v.d(C, "initPTSFn", function() {
                return d;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/demux/id3.ts"), L = v("./src/demux/dummy-demuxed-track.ts"), D = v("./src/utils/mp4-tools.ts"), I = v("./src/utils/typed-array.ts"), A = function() {
                function T() {
                    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, 
                    this.cachedData = null, this.initPTS = null;
                }
                var p = T.prototype;
                return p.resetInitSegment = function(y, b, E) {
                    this._id3Track = {
                        type: "id3",
                        id: 0,
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0
                    };
                }, p.resetTimeStamp = function() {}, p.resetContiguity = function() {}, 
                p.canParse = function(y, b) {
                    return !1;
                }, p.appendFrame = function(y, b, E) {}, p.demux = function(y, b) {
                    this.cachedData && (y = Object(D.appendUint8Array)(this.cachedData, y), 
                    this.cachedData = null);
                    var E, r, t = S.getID3Data(y, 0), l = t ? t.length : 0, o = this._audioTrack, h = this._id3Track, i = t ? S.getTimeStamp(t) : void 0, a = y.length;
                    for (this.frameIndex !== 0 && this.initPTS !== null || (this.initPTS = d(i, b)), 
                    t && t.length > 0 && h.samples.push({
                        pts: this.initPTS,
                        dts: this.initPTS,
                        data: t
                    }), r = this.initPTS; l < a; ) {
                        if (this.canParse(y, l)) {
                            var f = this.appendFrame(o, y, l);
                            f ? (this.frameIndex++, r = f.sample.pts, E = l += f.length) : l = a;
                        } else S.canParse(y, l) ? (t = S.getID3Data(y, l), h.samples.push({
                            pts: r,
                            dts: r,
                            data: t
                        }), E = l += t.length) : l++;
                        if (l === a && E !== a) {
                            var g = Object(I.sliceUint8)(y, E);
                            this.cachedData ? this.cachedData = Object(D.appendUint8Array)(this.cachedData, g) : this.cachedData = g;
                        }
                    }
                    return {
                        audioTrack: o,
                        avcTrack: Object(L.dummyTrack)(),
                        id3Track: h,
                        textTrack: Object(L.dummyTrack)()
                    };
                }, p.demuxSampleAes = function(y, b, E) {
                    return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
                }, p.flush = function(y) {
                    var b = this.cachedData;
                    return b && (this.cachedData = null, this.demux(b, 0)), this.frameIndex = 0, 
                    {
                        audioTrack: this._audioTrack,
                        avcTrack: Object(L.dummyTrack)(),
                        id3Track: this._id3Track,
                        textTrack: Object(L.dummyTrack)()
                    };
                }, p.destroy = function() {}, T;
            }(), d = function(T, p) {
                return Object(k.isFiniteNumber)(T) ? 90 * T : 9e4 * p;
            };
            C.default = A;
        },
        "./src/demux/chunk-cache.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return k;
            });
            var k = function() {
                function S() {
                    this.chunks = [], this.dataLength = 0;
                }
                var L = S.prototype;
                return L.push = function(D) {
                    this.chunks.push(D), this.dataLength += D.length;
                }, L.flush = function() {
                    var D, I = this.chunks, A = this.dataLength;
                    return I.length ? (D = I.length === 1 ? I[0] : function(d, T) {
                        for (var p = new Uint8Array(T), y = 0, b = 0; b < d.length; b++) {
                            var E = d[b];
                            p.set(E, y), y += E.length;
                        }
                        return p;
                    }(I, A), this.reset(), D) : new Uint8Array(0);
                }, L.reset = function() {
                    this.chunks.length = 0, this.dataLength = 0;
                }, S;
            }();
        },
        "./src/demux/dummy-demuxed-track.ts": function(F, C, v) {
            function k() {
                return {
                    type: "",
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0
                };
            }
            v.r(C), v.d(C, "dummyTrack", function() {
                return k;
            });
        },
        "./src/demux/exp-golomb.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/utils/logger.ts"), S = function() {
                function L(I) {
                    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, 
                    this.bitsAvailable = void 0, this.data = I, this.bytesAvailable = I.byteLength, 
                    this.word = 0, this.bitsAvailable = 0;
                }
                var D = L.prototype;
                return D.loadWord = function() {
                    var I = this.data, A = this.bytesAvailable, d = I.byteLength - A, T = new Uint8Array(4), p = Math.min(4, A);
                    if (p === 0) throw new Error("no bytes available");
                    T.set(I.subarray(d, d + p)), this.word = new DataView(T.buffer).getUint32(0), 
                    this.bitsAvailable = 8 * p, this.bytesAvailable -= p;
                }, D.skipBits = function(I) {
                    var A;
                    this.bitsAvailable > I ? (this.word <<= I, this.bitsAvailable -= I) : (I -= this.bitsAvailable, 
                    I -= (A = I >> 3) >> 3, this.bytesAvailable -= A, this.loadWord(), 
                    this.word <<= I, this.bitsAvailable -= I);
                }, D.readBits = function(I) {
                    var A = Math.min(this.bitsAvailable, I), d = this.word >>> 32 - A;
                    return I > 32 && k.logger.error("Cannot read more than 32 bits at a time"), 
                    this.bitsAvailable -= A, this.bitsAvailable > 0 ? this.word <<= A : this.bytesAvailable > 0 && this.loadWord(), 
                    (A = I - A) > 0 && this.bitsAvailable ? d << A | this.readBits(A) : d;
                }, D.skipLZ = function() {
                    var I;
                    for (I = 0; I < this.bitsAvailable; ++I) if (this.word & 2147483648 >>> I) return this.word <<= I, 
                    this.bitsAvailable -= I, I;
                    return this.loadWord(), I + this.skipLZ();
                }, D.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ());
                }, D.skipEG = function() {
                    this.skipBits(1 + this.skipLZ());
                }, D.readUEG = function() {
                    var I = this.skipLZ();
                    return this.readBits(I + 1) - 1;
                }, D.readEG = function() {
                    var I = this.readUEG();
                    return 1 & I ? 1 + I >>> 1 : -1 * (I >>> 1);
                }, D.readBoolean = function() {
                    return this.readBits(1) === 1;
                }, D.readUByte = function() {
                    return this.readBits(8);
                }, D.readUShort = function() {
                    return this.readBits(16);
                }, D.readUInt = function() {
                    return this.readBits(32);
                }, D.skipScalingList = function(I) {
                    for (var A = 8, d = 8, T = 0; T < I; T++) d !== 0 && (d = (A + this.readEG() + 256) % 256), 
                    A = d === 0 ? A : d;
                }, D.readSPS = function() {
                    var I, A, d, T = 0, p = 0, y = 0, b = 0, E = this.readUByte.bind(this), r = this.readBits.bind(this), t = this.readUEG.bind(this), l = this.readBoolean.bind(this), o = this.skipBits.bind(this), h = this.skipEG.bind(this), i = this.skipUEG.bind(this), a = this.skipScalingList.bind(this);
                    E();
                    var f = E();
                    if (r(5), o(3), E(), i(), f === 100 || f === 110 || f === 122 || f === 244 || f === 44 || f === 83 || f === 86 || f === 118 || f === 128) {
                        var g = t();
                        if (g === 3 && o(1), i(), i(), o(1), l()) for (A = g !== 3 ? 8 : 12, 
                        d = 0; d < A; d++) l() && a(d < 6 ? 16 : 64);
                    }
                    i();
                    var n = t();
                    if (n === 0) t(); else if (n === 1) for (o(1), h(), h(), I = t(), 
                    d = 0; d < I; d++) h();
                    i(), o(1);
                    var c = t(), u = t(), s = r(1);
                    s === 0 && o(1), o(1), l() && (T = t(), p = t(), y = t(), b = t());
                    var e = [ 1, 1 ];
                    if (l() && l()) switch (E()) {
                      case 1:
                        e = [ 1, 1 ];
                        break;

                      case 2:
                        e = [ 12, 11 ];
                        break;

                      case 3:
                        e = [ 10, 11 ];
                        break;

                      case 4:
                        e = [ 16, 11 ];
                        break;

                      case 5:
                        e = [ 40, 33 ];
                        break;

                      case 6:
                        e = [ 24, 11 ];
                        break;

                      case 7:
                        e = [ 20, 11 ];
                        break;

                      case 8:
                        e = [ 32, 11 ];
                        break;

                      case 9:
                        e = [ 80, 33 ];
                        break;

                      case 10:
                        e = [ 18, 11 ];
                        break;

                      case 11:
                        e = [ 15, 11 ];
                        break;

                      case 12:
                        e = [ 64, 33 ];
                        break;

                      case 13:
                        e = [ 160, 99 ];
                        break;

                      case 14:
                        e = [ 4, 3 ];
                        break;

                      case 15:
                        e = [ 3, 2 ];
                        break;

                      case 16:
                        e = [ 2, 1 ];
                        break;

                      case 255:
                        e = [ E() << 8 | E(), E() << 8 | E() ];
                    }
                    return {
                        width: Math.ceil(16 * (c + 1) - 2 * T - 2 * p),
                        height: (2 - s) * (u + 1) * 16 - (s ? 2 : 4) * (y + b),
                        pixelRatio: e
                    };
                }, D.readSliceType = function() {
                    return this.readUByte(), this.readUEG(), this.readUEG();
                }, L;
            }();
            C.default = S;
        },
        "./src/demux/id3.ts": function(F, C, v) {
            v.r(C), v.d(C, "isHeader", function() {
                return S;
            }), v.d(C, "isFooter", function() {
                return L;
            }), v.d(C, "getID3Data", function() {
                return D;
            }), v.d(C, "canParse", function() {
                return A;
            }), v.d(C, "getTimeStamp", function() {
                return d;
            }), v.d(C, "isTimeStampFrame", function() {
                return T;
            }), v.d(C, "getID3Frames", function() {
                return y;
            }), v.d(C, "decodeFrame", function() {
                return b;
            }), v.d(C, "utf8ArrayToStr", function() {
                return o;
            }), v.d(C, "testables", function() {
                return h;
            });
            var k, S = function(i, a) {
                return a + 10 <= i.length && i[a] === 73 && i[a + 1] === 68 && i[a + 2] === 51 && i[a + 3] < 255 && i[a + 4] < 255 && i[a + 6] < 128 && i[a + 7] < 128 && i[a + 8] < 128 && i[a + 9] < 128;
            }, L = function(i, a) {
                return a + 10 <= i.length && i[a] === 51 && i[a + 1] === 68 && i[a + 2] === 73 && i[a + 3] < 255 && i[a + 4] < 255 && i[a + 6] < 128 && i[a + 7] < 128 && i[a + 8] < 128 && i[a + 9] < 128;
            }, D = function(i, a) {
                for (var f = a, g = 0; S(i, a); ) g += 10, g += I(i, a + 6), L(i, a + 10) && (g += 10), 
                a += g;
                if (g > 0) return i.subarray(f, f + g);
            }, I = function(i, a) {
                var f = 0;
                return f = (127 & i[a]) << 21, f |= (127 & i[a + 1]) << 14, (f |= (127 & i[a + 2]) << 7) | 127 & i[a + 3];
            }, A = function(i, a) {
                return S(i, a) && I(i, a + 6) + 10 <= i.length - a;
            }, d = function(i) {
                for (var a = y(i), f = 0; f < a.length; f++) {
                    var g = a[f];
                    if (T(g)) return l(g);
                }
            }, T = function(i) {
                return i && i.key === "PRIV" && i.info === "com.apple.streaming.transportStreamTimestamp";
            }, p = function(i) {
                var a = String.fromCharCode(i[0], i[1], i[2], i[3]), f = I(i, 4);
                return {
                    type: a,
                    size: f,
                    data: i.subarray(10, 10 + f)
                };
            }, y = function(i) {
                for (var a = 0, f = []; S(i, a); ) {
                    for (var g = I(i, a + 6), n = (a += 10) + g; a + 8 < n; ) {
                        var c = p(i.subarray(a)), u = b(c);
                        u && f.push(u), a += c.size + 10;
                    }
                    L(i, a) && (a += 10);
                }
                return f;
            }, b = function(i) {
                return i.type === "PRIV" ? E(i) : i.type[0] === "W" ? t(i) : r(i);
            }, E = function(i) {
                if (!(i.size < 2)) {
                    var a = o(i.data, !0), f = new Uint8Array(i.data.subarray(a.length + 1));
                    return {
                        key: i.type,
                        info: a,
                        data: f.buffer
                    };
                }
            }, r = function(i) {
                if (!(i.size < 2)) {
                    if (i.type === "TXXX") {
                        var a = 1, f = o(i.data.subarray(a), !0);
                        a += f.length + 1;
                        var g = o(i.data.subarray(a));
                        return {
                            key: i.type,
                            info: f,
                            data: g
                        };
                    }
                    var n = o(i.data.subarray(1));
                    return {
                        key: i.type,
                        data: n
                    };
                }
            }, t = function(i) {
                if (i.type === "WXXX") {
                    if (i.size < 2) return;
                    var a = 1, f = o(i.data.subarray(a), !0);
                    a += f.length + 1;
                    var g = o(i.data.subarray(a));
                    return {
                        key: i.type,
                        info: f,
                        data: g
                    };
                }
                var n = o(i.data);
                return {
                    key: i.type,
                    data: n
                };
            }, l = function(i) {
                if (i.data.byteLength === 8) {
                    var a = new Uint8Array(i.data), f = 1 & a[3], g = (a[4] << 23) + (a[5] << 15) + (a[6] << 7) + a[7];
                    return g /= 45, f && (g += 47721858.84), Math.round(g);
                }
            }, o = function(i, a) {
                a === void 0 && (a = !1);
                var f = (k || self.TextDecoder === void 0 || (k = new self.TextDecoder("utf-8")), 
                k);
                if (f) {
                    var g = f.decode(i);
                    if (a) {
                        var n = g.indexOf("\0");
                        return n !== -1 ? g.substring(0, n) : g;
                    }
                    return g.replace(/\0/g, "");
                }
                for (var c, u, s, e = i.length, m = "", _ = 0; _ < e; ) {
                    if ((c = i[_++]) === 0 && a) return m;
                    if (c !== 0 && c !== 3) switch (c >> 4) {
                      case 0:
                      case 1:
                      case 2:
                      case 3:
                      case 4:
                      case 5:
                      case 6:
                      case 7:
                        m += String.fromCharCode(c);
                        break;

                      case 12:
                      case 13:
                        u = i[_++], m += String.fromCharCode((31 & c) << 6 | 63 & u);
                        break;

                      case 14:
                        u = i[_++], s = i[_++], m += String.fromCharCode((15 & c) << 12 | (63 & u) << 6 | 63 & s);
                    }
                }
                return m;
            }, h = {
                decodeTextFrame: r
            };
        },
        "./src/demux/mp3demuxer.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/demux/base-audio-demuxer.ts"), S = v("./src/demux/id3.ts"), L = v("./src/utils/logger.ts"), D = v("./src/demux/mpegaudio.ts");
            function I(d, T) {
                return (I = Object.setPrototypeOf || function(p, y) {
                    return p.__proto__ = y, p;
                })(d, T);
            }
            var A = function(d) {
                var T, p;
                function y() {
                    return d.apply(this, arguments) || this;
                }
                p = d, (T = y).prototype = Object.create(p.prototype), T.prototype.constructor = T, 
                I(T, p);
                var b = y.prototype;
                return b.resetInitSegment = function(E, r, t) {
                    d.prototype.resetInitSegment.call(this, E, r, t), this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: 0,
                        pid: -1,
                        sequenceNumber: 0,
                        isAAC: !1,
                        samples: [],
                        manifestCodec: E,
                        duration: t,
                        inputTimeScale: 9e4,
                        dropped: 0
                    };
                }, y.probe = function(E) {
                    if (!E) return !1;
                    for (var r = (S.getID3Data(E, 0) || []).length, t = E.length; r < t; r++) if (D.probe(E, r)) return L.logger.log("MPEG Audio sync word found !"), 
                    !0;
                    return !1;
                }, b.canParse = function(E, r) {
                    return D.canParse(E, r);
                }, b.appendFrame = function(E, r, t) {
                    if (this.initPTS !== null) return D.appendFrame(E, r, t, this.initPTS, this.frameIndex);
                }, y;
            }(k.default);
            A.minProbeByteLength = 4, C.default = A;
        },
        "./src/demux/mp4demuxer.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/utils/mp4-tools.ts"), S = v("./src/demux/dummy-demuxed-track.ts"), L = function() {
                function D(A, d) {
                    this.remainderData = null, this.config = void 0, this.config = d;
                }
                var I = D.prototype;
                return I.resetTimeStamp = function() {}, I.resetInitSegment = function() {}, 
                I.resetContiguity = function() {}, D.probe = function(A) {
                    return Object(k.findBox)({
                        data: A,
                        start: 0,
                        end: Math.min(A.length, 16384)
                    }, [ "moof" ]).length > 0;
                }, I.demux = function(A) {
                    var d = A, T = Object(S.dummyTrack)();
                    if (this.config.progressive) {
                        this.remainderData && (d = Object(k.appendUint8Array)(this.remainderData, A));
                        var p = Object(k.segmentValidRange)(d);
                        this.remainderData = p.remainder, T.samples = p.valid || new Uint8Array();
                    } else T.samples = d;
                    return {
                        audioTrack: Object(S.dummyTrack)(),
                        avcTrack: T,
                        id3Track: Object(S.dummyTrack)(),
                        textTrack: Object(S.dummyTrack)()
                    };
                }, I.flush = function() {
                    var A = Object(S.dummyTrack)();
                    return A.samples = this.remainderData || new Uint8Array(), this.remainderData = null, 
                    {
                        audioTrack: Object(S.dummyTrack)(),
                        avcTrack: A,
                        id3Track: Object(S.dummyTrack)(),
                        textTrack: Object(S.dummyTrack)()
                    };
                }, I.demuxSampleAes = function(A, d, T) {
                    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
                }, I.destroy = function() {}, D;
            }();
            L.minProbeByteLength = 1024, C.default = L;
        },
        "./src/demux/mpegaudio.ts": function(F, C, v) {
            v.r(C), v.d(C, "appendFrame", function() {
                return A;
            }), v.d(C, "parseHeader", function() {
                return d;
            }), v.d(C, "isHeaderPattern", function() {
                return T;
            }), v.d(C, "isHeader", function() {
                return p;
            }), v.d(C, "canParse", function() {
                return y;
            }), v.d(C, "probe", function() {
                return b;
            });
            var k = null, S = [ 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160 ], L = [ 44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3 ], D = [ [ 0, 72, 144, 12 ], [ 0, 0, 0, 0 ], [ 0, 72, 144, 12 ], [ 0, 144, 144, 12 ] ], I = [ 0, 1, 1, 4 ];
            function A(E, r, t, l, o) {
                if (!(t + 24 > r.length)) {
                    var h = d(r, t);
                    if (h && t + h.frameLength <= r.length) {
                        var i = l + o * (9e4 * h.samplesPerFrame / h.sampleRate), a = {
                            unit: r.subarray(t, t + h.frameLength),
                            pts: i,
                            dts: i
                        };
                        return E.config = [], E.channelCount = h.channelCount, E.samplerate = h.sampleRate, 
                        E.samples.push(a), {
                            sample: a,
                            length: h.frameLength,
                            missing: 0
                        };
                    }
                }
            }
            function d(E, r) {
                var t = E[r + 1] >> 3 & 3, l = E[r + 1] >> 1 & 3, o = E[r + 2] >> 4 & 15, h = E[r + 2] >> 2 & 3;
                if (t !== 1 && o !== 0 && o !== 15 && h !== 3) {
                    var i = E[r + 2] >> 1 & 1, a = E[r + 3] >> 6, f = 1e3 * S[14 * (t === 3 ? 3 - l : l === 3 ? 3 : 4) + o - 1], g = L[3 * (t === 3 ? 0 : t === 2 ? 1 : 2) + h], n = a === 3 ? 1 : 2, c = D[t][l], u = I[l], s = 8 * c * u, e = Math.floor(c * f / g + i) * u;
                    if (k === null) {
                        var m = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                        k = m ? parseInt(m[1]) : 0;
                    }
                    return k && k <= 87 && l === 2 && f >= 224e3 && a === 0 && (E[r + 3] = 128 | E[r + 3]), 
                    {
                        sampleRate: g,
                        channelCount: n,
                        frameLength: e,
                        samplesPerFrame: s
                    };
                }
            }
            function T(E, r) {
                return !(E[r] !== 255 || 224 & ~E[r + 1] || !(6 & E[r + 1]));
            }
            function p(E, r) {
                return r + 1 < E.length && T(E, r);
            }
            function y(E, r) {
                return T(E, r) && 4 <= E.length - r;
            }
            function b(E, r) {
                if (r + 1 < E.length && T(E, r)) {
                    var t = d(E, r), l = 4;
                    t != null && t.frameLength && (l = t.frameLength);
                    var o = r + l;
                    return o === E.length || p(E, o);
                }
                return !1;
            }
        },
        "./src/demux/sample-aes.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/crypt/decrypter.ts"), S = v("./src/demux/tsdemuxer.ts"), L = function() {
                function D(A, d, T) {
                    this.keyData = void 0, this.decrypter = void 0, this.keyData = T, 
                    this.decrypter = new k.default(A, d, {
                        removePKCS7Padding: !1
                    });
                }
                var I = D.prototype;
                return I.decryptBuffer = function(A, d) {
                    this.decrypter.decrypt(A, this.keyData.key.buffer, this.keyData.iv.buffer, d);
                }, I.decryptAacSample = function(A, d, T, p) {
                    var y = A[d].unit, b = y.subarray(16, y.length - y.length % 16), E = b.buffer.slice(b.byteOffset, b.byteOffset + b.length), r = this;
                    this.decryptBuffer(E, function(t) {
                        var l = new Uint8Array(t);
                        y.set(l, 16), p || r.decryptAacSamples(A, d + 1, T);
                    });
                }, I.decryptAacSamples = function(A, d, T) {
                    for (;;d++) {
                        if (d >= A.length) return void T();
                        if (!(A[d].unit.length < 32)) {
                            var p = this.decrypter.isSync();
                            if (this.decryptAacSample(A, d, T, p), !p) return;
                        }
                    }
                }, I.getAvcEncryptedData = function(A) {
                    for (var d = 16 * Math.floor((A.length - 48) / 160) + 16, T = new Int8Array(d), p = 0, y = 32; y <= A.length - 16; y += 160, 
                    p += 16) T.set(A.subarray(y, y + 16), p);
                    return T;
                }, I.getAvcDecryptedUnit = function(A, d) {
                    for (var T = new Uint8Array(d), p = 0, y = 32; y <= A.length - 16; y += 160, 
                    p += 16) A.set(T.subarray(p, p + 16), y);
                    return A;
                }, I.decryptAvcSample = function(A, d, T, p, y, b) {
                    var E = Object(S.discardEPB)(y.data), r = this.getAvcEncryptedData(E), t = this;
                    this.decryptBuffer(r.buffer, function(l) {
                        y.data = t.getAvcDecryptedUnit(E, l), b || t.decryptAvcSamples(A, d, T + 1, p);
                    });
                }, I.decryptAvcSamples = function(A, d, T, p) {
                    if (A instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
                    for (;;d++, T = 0) {
                        if (d >= A.length) return void p();
                        for (var y = A[d].units; !(T >= y.length); T++) {
                            var b = y[T];
                            if (!(b.data.length <= 48 || b.type !== 1 && b.type !== 5)) {
                                var E = this.decrypter.isSync();
                                if (this.decryptAvcSample(A, d, T, p, b, E), !E) return;
                            }
                        }
                    }
                }, D;
            }();
            C.default = L;
        },
        "./src/demux/transmuxer-interface.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return p;
            });
            var k = v("./node_modules/webworkify-webpack/index.js"), S = v("./src/events.ts"), L = v("./src/demux/transmuxer.ts"), D = v("./src/utils/logger.ts"), I = v("./src/errors.ts"), A = v("./src/utils/mediasource-helper.ts"), d = v("./node_modules/eventemitter3/index.js"), T = Object(A.getMediaSource)() || {
                isTypeSupported: function() {
                    return !1;
                }
            }, p = function() {
                function y(E, r, t, l) {
                    var o = this;
                    this.hls = void 0, this.id = void 0, this.observer = void 0, 
                    this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, 
                    this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, 
                    this.hls = E, this.id = r, this.onTransmuxComplete = t, this.onFlush = l;
                    var h = E.config, i = function(n, c) {
                        (c = c || {}).frag = o.frag, c.id = o.id, E.trigger(n, c);
                    };
                    this.observer = new d.EventEmitter(), this.observer.on(S.Events.FRAG_DECRYPTED, i), 
                    this.observer.on(S.Events.ERROR, i);
                    var a = {
                        mp4: T.isTypeSupported("video/mp4"),
                        mpeg: T.isTypeSupported("audio/mpeg"),
                        mp3: T.isTypeSupported('audio/mp4; codecs="mp3"')
                    }, f = navigator.vendor;
                    if (h.enableWorker && typeof Worker < "u") {
                        var g;
                        D.logger.log("demuxing in webworker");
                        try {
                            g = this.worker = k("./src/demux/transmuxer-worker.ts"), 
                            this.onwmsg = this.onWorkerMessage.bind(this), g.addEventListener("message", this.onwmsg), 
                            g.onerror = function(n) {
                                E.trigger(S.Events.ERROR, {
                                    type: I.ErrorTypes.OTHER_ERROR,
                                    details: I.ErrorDetails.INTERNAL_EXCEPTION,
                                    fatal: !0,
                                    event: "demuxerWorker",
                                    error: new Error(n.message + "  (" + n.filename + ":" + n.lineno + ")")
                                });
                            }, g.postMessage({
                                cmd: "init",
                                typeSupported: a,
                                vendor: f,
                                id: r,
                                config: JSON.stringify(h)
                            });
                        } catch (n) {
                            D.logger.warn("Error in worker:", n), D.logger.error("Error while initializing DemuxerWorker, fallback to inline"), 
                            g && self.URL.revokeObjectURL(g.objectURL), this.transmuxer = new L.default(this.observer, a, h, f, r), 
                            this.worker = null;
                        }
                    } else this.transmuxer = new L.default(this.observer, a, h, f, r);
                }
                var b = y.prototype;
                return b.destroy = function() {
                    var E = this.worker;
                    if (E) E.removeEventListener("message", this.onwmsg), E.terminate(), 
                    this.worker = null; else {
                        var r = this.transmuxer;
                        r && (r.destroy(), this.transmuxer = null);
                    }
                    var t = this.observer;
                    t && t.removeAllListeners(), this.observer = null;
                }, b.push = function(E, r, t, l, o, h, i, a, f, g) {
                    var n = this;
                    f.transmuxing.start = self.performance.now();
                    var c = this.transmuxer, u = this.worker, s = h ? h.start : o.start, e = o.decryptdata, m = this.frag, _ = !(m && o.cc === m.cc), R = !(m && f.level === m.level), O = m ? f.sn - m.sn : -1, x = this.part ? f.part - this.part.index : 1, w = !R && (O === 1 || O === 0 && x === 1), P = self.performance.now();
                    (R || O || o.stats.parsing.start === 0) && (o.stats.parsing.start = P), 
                    !h || !x && w || (h.stats.parsing.start = P);
                    var N = new L.TransmuxState(_, w, a, R, s);
                    if (!w || _) {
                        D.logger.log("[transmuxer-interface, " + o.type + "]: Starting new transmux session for sn: " + f.sn + " p: " + f.part + " level: " + f.level + " id: " + f.id + `
        discontinuity: ` + _ + `
        trackSwitch: ` + R + `
        contiguous: ` + w + `
        accurateTimeOffset: ` + a + `
        timeOffset: ` + s);
                        var M = new L.TransmuxConfig(t, l, r, i, g);
                        this.configureTransmuxer(M);
                    }
                    if (this.frag = o, this.part = h, u) u.postMessage({
                        cmd: "demux",
                        data: E,
                        decryptdata: e,
                        chunkMeta: f,
                        state: N
                    }, E instanceof ArrayBuffer ? [ E ] : []); else if (c) {
                        var B = c.push(E, e, f, N);
                        Object(L.isPromise)(B) ? B.then(function(U) {
                            n.handleTransmuxComplete(U);
                        }) : this.handleTransmuxComplete(B);
                    }
                }, b.flush = function(E) {
                    var r = this;
                    E.transmuxing.start = self.performance.now();
                    var t = this.transmuxer, l = this.worker;
                    if (l) l.postMessage({
                        cmd: "flush",
                        chunkMeta: E
                    }); else if (t) {
                        var o = t.flush(E);
                        Object(L.isPromise)(o) ? o.then(function(h) {
                            r.handleFlushResult(h, E);
                        }) : this.handleFlushResult(o, E);
                    }
                }, b.handleFlushResult = function(E, r) {
                    var t = this;
                    E.forEach(function(l) {
                        t.handleTransmuxComplete(l);
                    }), this.onFlush(r);
                }, b.onWorkerMessage = function(E) {
                    var r = E.data, t = this.hls;
                    switch (r.event) {
                      case "init":
                        self.URL.revokeObjectURL(this.worker.objectURL);
                        break;

                      case "transmuxComplete":
                        this.handleTransmuxComplete(r.data);
                        break;

                      case "flush":
                        this.onFlush(r.data);
                        break;

                      default:
                        r.data = r.data || {}, r.data.frag = this.frag, r.data.id = this.id, 
                        t.trigger(r.event, r.data);
                    }
                }, b.configureTransmuxer = function(E) {
                    var r = this.worker, t = this.transmuxer;
                    r ? r.postMessage({
                        cmd: "configure",
                        config: E
                    }) : t && t.configure(E);
                }, b.handleTransmuxComplete = function(E) {
                    E.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(E);
                }, y;
            }();
        },
        "./src/demux/transmuxer-worker.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return I;
            });
            var k = v("./src/demux/transmuxer.ts"), S = v("./src/events.ts"), L = v("./src/utils/logger.ts"), D = v("./node_modules/eventemitter3/index.js");
            function I(p) {
                var y = new D.EventEmitter(), b = function(E, r) {
                    p.postMessage({
                        event: E,
                        data: r
                    });
                };
                y.on(S.Events.FRAG_DECRYPTED, b), y.on(S.Events.ERROR, b), p.addEventListener("message", function(E) {
                    var r = E.data;
                    switch (r.cmd) {
                      case "init":
                        var t = JSON.parse(r.config);
                        p.transmuxer = new k.default(y, r.typeSupported, t, r.vendor, r.id), 
                        Object(L.enableLogs)(t.debug), b("init", null);
                        break;

                      case "configure":
                        p.transmuxer.configure(r.config);
                        break;

                      case "demux":
                        var l = p.transmuxer.push(r.data, r.decryptdata, r.chunkMeta, r.state);
                        Object(k.isPromise)(l) ? l.then(function(i) {
                            A(p, i);
                        }) : A(p, l);
                        break;

                      case "flush":
                        var o = r.chunkMeta, h = p.transmuxer.flush(o);
                        Object(k.isPromise)(h) ? h.then(function(i) {
                            T(p, i, o);
                        }) : T(p, h, o);
                    }
                });
            }
            function A(p, y) {
                if ((b = y.remuxResult).audio || b.video || b.text || b.id3 || b.initSegment) {
                    var b, E = [], r = y.remuxResult, t = r.audio, l = r.video;
                    t && d(E, t), l && d(E, l), p.postMessage({
                        event: "transmuxComplete",
                        data: y
                    }, E);
                }
            }
            function d(p, y) {
                y.data1 && p.push(y.data1.buffer), y.data2 && p.push(y.data2.buffer);
            }
            function T(p, y, b) {
                y.forEach(function(E) {
                    A(p, E);
                }), p.postMessage({
                    event: "flush",
                    data: b
                });
            }
        },
        "./src/demux/transmuxer.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return o;
            }), v.d(C, "isPromise", function() {
                return i;
            }), v.d(C, "TransmuxConfig", function() {
                return a;
            }), v.d(C, "TransmuxState", function() {
                return f;
            });
            var k, S = v("./src/events.ts"), L = v("./src/errors.ts"), D = v("./src/crypt/decrypter.ts"), I = v("./src/demux/aacdemuxer.ts"), A = v("./src/demux/mp4demuxer.ts"), d = v("./src/demux/tsdemuxer.ts"), T = v("./src/demux/mp3demuxer.ts"), p = v("./src/remux/mp4-remuxer.ts"), y = v("./src/remux/passthrough-remuxer.ts"), b = v("./src/demux/chunk-cache.ts"), E = v("./src/utils/mp4-tools.ts"), r = v("./src/utils/logger.ts");
            try {
                k = self.performance.now.bind(self.performance);
            } catch {
                r.logger.debug("Unable to use Performance API on this environment"), 
                k = self.Date.now;
            }
            var t = [ {
                demux: d.default,
                remux: p.default
            }, {
                demux: A.default,
                remux: y.default
            }, {
                demux: I.default,
                remux: p.default
            }, {
                demux: T.default,
                remux: p.default
            } ], l = 1024;
            t.forEach(function(g) {
                var n = g.demux;
                l = Math.max(l, n.minProbeByteLength);
            });
            var o = function() {
                function g(c, u, s, e, m) {
                    this.observer = void 0, this.typeSupported = void 0, this.config = void 0, 
                    this.vendor = void 0, this.id = void 0, this.demuxer = void 0, 
                    this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, 
                    this.decryptionPromise = null, this.transmuxConfig = void 0, 
                    this.currentTransmuxState = void 0, this.cache = new b.default(), 
                    this.observer = c, this.typeSupported = u, this.config = s, 
                    this.vendor = e, this.id = m;
                }
                var n = g.prototype;
                return n.configure = function(c) {
                    this.transmuxConfig = c, this.decrypter && this.decrypter.reset();
                }, n.push = function(c, u, s, e) {
                    var m = this, _ = s.transmuxing;
                    _.executeStart = k();
                    var R = new Uint8Array(c), O = this.cache, x = this.config, w = this.currentTransmuxState, P = this.transmuxConfig;
                    e && (this.currentTransmuxState = e);
                    var N = function(nt, it) {
                        var dt = null;
                        return nt.byteLength > 0 && it != null && it.key != null && it.iv !== null && it.method != null && (dt = it), 
                        dt;
                    }(R, u);
                    if (N && N.method === "AES-128") {
                        var M = this.getDecrypter();
                        if (!x.enableSoftwareAES) return this.decryptionPromise = M.webCryptoDecrypt(R, N.key.buffer, N.iv.buffer).then(function(nt) {
                            var it = m.push(nt, null, s);
                            return m.decryptionPromise = null, it;
                        }), this.decryptionPromise;
                        var B = M.softwareDecrypt(R, N.key.buffer, N.iv.buffer);
                        if (!B) return _.executeEnd = k(), h(s);
                        R = new Uint8Array(B);
                    }
                    var U = e || w, G = U.contiguous, V = U.discontinuity, H = U.trackSwitch, W = U.accurateTimeOffset, Y = U.timeOffset, q = P.audioCodec, Q = P.videoCodec, J = P.defaultInitPts, rt = P.duration, Z = P.initSegmentData;
                    if ((V || H) && this.resetInitSegment(Z, q, Q, rt), V && this.resetInitialTimestamp(J), 
                    G || this.resetContiguity(), this.needsProbing(R, V, H)) {
                        if (O.dataLength) {
                            var st = O.flush();
                            R = Object(E.appendUint8Array)(st, R);
                        }
                        this.configureTransmuxer(R, P);
                    }
                    var $ = this.transmux(R, N, Y, W, s), tt = this.currentTransmuxState;
                    return tt.contiguous = !0, tt.discontinuity = !1, tt.trackSwitch = !1, 
                    _.executeEnd = k(), $;
                }, n.flush = function(c) {
                    var u = this, s = c.transmuxing;
                    s.executeStart = k();
                    var e = this.decrypter, m = this.cache, _ = this.currentTransmuxState, R = this.decryptionPromise;
                    if (R) return R.then(function() {
                        return u.flush(c);
                    });
                    var O = [], x = _.timeOffset;
                    if (e) {
                        var w = e.flush();
                        w && O.push(this.push(w, null, c));
                    }
                    var P = m.dataLength;
                    m.reset();
                    var N = this.demuxer, M = this.remuxer;
                    if (!N || !M) return P >= l && this.observer.emit(S.Events.ERROR, S.Events.ERROR, {
                        type: L.ErrorTypes.MEDIA_ERROR,
                        details: L.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "no demux matching with content found"
                    }), s.executeEnd = k(), [ h(c) ];
                    var B = N.flush(x);
                    return i(B) ? B.then(function(U) {
                        return u.flushRemux(O, U, c), O;
                    }) : (this.flushRemux(O, B, c), O);
                }, n.flushRemux = function(c, u, s) {
                    var e = u.audioTrack, m = u.avcTrack, _ = u.id3Track, R = u.textTrack, O = this.currentTransmuxState, x = O.accurateTimeOffset, w = O.timeOffset;
                    r.logger.log("[transmuxer.ts]: Flushed fragment " + s.sn + (s.part > -1 ? " p: " + s.part : "") + " of level " + s.level);
                    var P = this.remuxer.remux(e, m, _, R, w, x, !0, this.id);
                    c.push({
                        remuxResult: P,
                        chunkMeta: s
                    }), s.transmuxing.executeEnd = k();
                }, n.resetInitialTimestamp = function(c) {
                    var u = this.demuxer, s = this.remuxer;
                    u && s && (u.resetTimeStamp(c), s.resetTimeStamp(c));
                }, n.resetContiguity = function() {
                    var c = this.demuxer, u = this.remuxer;
                    c && u && (c.resetContiguity(), u.resetNextTimestamp());
                }, n.resetInitSegment = function(c, u, s, e) {
                    var m = this.demuxer, _ = this.remuxer;
                    m && _ && (m.resetInitSegment(u, s, e), _.resetInitSegment(c, u, s));
                }, n.destroy = function() {
                    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), 
                    this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
                }, n.transmux = function(c, u, s, e, m) {
                    return u && u.method === "SAMPLE-AES" ? this.transmuxSampleAes(c, u, s, e, m) : this.transmuxUnencrypted(c, s, e, m);
                }, n.transmuxUnencrypted = function(c, u, s, e) {
                    var m = this.demuxer.demux(c, u, !1, !this.config.progressive), _ = m.audioTrack, R = m.avcTrack, O = m.id3Track, x = m.textTrack;
                    return {
                        remuxResult: this.remuxer.remux(_, R, O, x, u, s, !1, this.id),
                        chunkMeta: e
                    };
                }, n.transmuxSampleAes = function(c, u, s, e, m) {
                    var _ = this;
                    return this.demuxer.demuxSampleAes(c, u, s).then(function(R) {
                        return {
                            remuxResult: _.remuxer.remux(R.audioTrack, R.avcTrack, R.id3Track, R.textTrack, s, e, !1, _.id),
                            chunkMeta: m
                        };
                    });
                }, n.configureTransmuxer = function(c, u) {
                    for (var s, e = this.config, m = this.observer, _ = this.typeSupported, R = this.vendor, O = u.audioCodec, x = u.defaultInitPts, w = u.duration, P = u.initSegmentData, N = u.videoCodec, M = 0, B = t.length; M < B; M++) if (t[M].demux.probe(c)) {
                        s = t[M];
                        break;
                    }
                    s || (r.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), 
                    s = {
                        demux: A.default,
                        remux: y.default
                    });
                    var U = this.demuxer, G = this.remuxer, V = s.remux, H = s.demux;
                    G && G instanceof V || (this.remuxer = new V(m, e, _, R)), U && U instanceof H || (this.demuxer = new H(m, e, _), 
                    this.probe = H.probe), this.resetInitSegment(P, O, N, w), this.resetInitialTimestamp(x);
                }, n.needsProbing = function(c, u, s) {
                    return !this.demuxer || !this.remuxer || u || s;
                }, n.getDecrypter = function() {
                    var c = this.decrypter;
                    return c || (c = this.decrypter = new D.default(this.observer, this.config)), 
                    c;
                }, g;
            }(), h = function(g) {
                return {
                    remuxResult: {},
                    chunkMeta: g
                };
            };
            function i(g) {
                return "then" in g && g.then instanceof Function;
            }
            var a = function(g, n, c, u, s) {
                this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, 
                this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = g, 
                this.videoCodec = n, this.initSegmentData = c, this.duration = u, 
                this.defaultInitPts = s;
            }, f = function(g, n, c, u, s) {
                this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, 
                this.trackSwitch = void 0, this.timeOffset = void 0, this.discontinuity = g, 
                this.contiguous = n, this.accurateTimeOffset = c, this.trackSwitch = u, 
                this.timeOffset = s;
            };
        },
        "./src/demux/tsdemuxer.ts": function(F, C, v) {
            v.r(C), v.d(C, "discardEPB", function() {
                return i;
            });
            var k = v("./src/demux/adts.ts"), S = v("./src/demux/mpegaudio.ts"), L = v("./src/demux/exp-golomb.ts"), D = v("./src/demux/id3.ts"), I = v("./src/demux/sample-aes.ts"), A = v("./src/events.ts"), d = v("./src/utils/mp4-tools.ts"), T = v("./src/utils/logger.ts"), p = v("./src/errors.ts"), y = {
                video: 1,
                audio: 2,
                id3: 3,
                text: 4
            }, b = function() {
                function a(g, n, c) {
                    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, 
                    this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, 
                    this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, 
                    this._initPTS = null, this._initDTS = null, this._pmtId = -1, 
                    this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, 
                    this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, 
                    this.remainderData = null, this.observer = g, this.config = n, 
                    this.typeSupported = c;
                }
                a.probe = function(g) {
                    var n = a.syncOffset(g);
                    return !(n < 0 || (n && T.logger.warn("MPEG2-TS detected but first sync word found @ offset " + n + ", junk ahead ?"), 
                    0));
                }, a.syncOffset = function(g) {
                    for (var n = Math.min(1e3, g.length - 564), c = 0; c < n; ) {
                        if (g[c] === 71 && g[c + 188] === 71 && g[c + 376] === 71) return c;
                        c++;
                    }
                    return -1;
                }, a.createTrack = function(g, n) {
                    return {
                        container: g === "video" || g === "audio" ? "video/mp2t" : void 0,
                        type: g,
                        id: y[g],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: 0,
                        duration: g === "audio" ? n : void 0
                    };
                };
                var f = a.prototype;
                return f.resetInitSegment = function(g, n, c) {
                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = a.createTrack("video", c), 
                    this._audioTrack = a.createTrack("audio", c), this._id3Track = a.createTrack("id3", c), 
                    this._txtTrack = a.createTrack("text", c), this._audioTrack.isAAC = !0, 
                    this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, 
                    this.audioCodec = g, this.videoCodec = n, this._duration = c;
                }, f.resetTimeStamp = function() {}, f.resetContiguity = function() {
                    var g = this._audioTrack, n = this._avcTrack, c = this._id3Track;
                    g && (g.pesData = null), n && (n.pesData = null), c && (c.pesData = null), 
                    this.aacOverFlow = null, this.aacLastPTS = null;
                }, f.demux = function(g, n, c, u) {
                    var s;
                    c === void 0 && (c = !1), u === void 0 && (u = !1), c || (this.sampleAes = null);
                    var e = this._avcTrack, m = this._audioTrack, _ = this._id3Track, R = e.pid, O = e.pesData, x = m.pid, w = _.pid, P = m.pesData, N = _.pesData, M = !1, B = this.pmtParsed, U = this._pmtId, G = g.length;
                    if (this.remainderData && (G = (g = Object(d.appendUint8Array)(this.remainderData, g)).length, 
                    this.remainderData = null), G < 188 && !u) return this.remainderData = g, 
                    {
                        audioTrack: m,
                        avcTrack: e,
                        id3Track: _,
                        textTrack: this._txtTrack
                    };
                    var V = Math.max(0, a.syncOffset(g));
                    (G -= (G + V) % 188) < g.byteLength && !u && (this.remainderData = new Uint8Array(g.buffer, G, g.buffer.byteLength - G));
                    for (var H = V; H < G; H += 188) if (g[H] === 71) {
                        var W = !!(64 & g[H + 1]), Y = ((31 & g[H + 1]) << 8) + g[H + 2], q = void 0;
                        if ((48 & g[H + 3]) >> 4 > 1) {
                            if ((q = H + 5 + g[H + 4]) === H + 188) continue;
                        } else q = H + 4;
                        switch (Y) {
                          case R:
                            W && (O && (s = l(O)) && this.parseAVCPES(s, !1), O = {
                                data: [],
                                size: 0
                            }), O && (O.data.push(g.subarray(q, H + 188)), O.size += H + 188 - q);
                            break;

                          case x:
                            W && (P && (s = l(P)) && (m.isAAC ? this.parseAACPES(s) : this.parseMPEGPES(s)), 
                            P = {
                                data: [],
                                size: 0
                            }), P && (P.data.push(g.subarray(q, H + 188)), P.size += H + 188 - q);
                            break;

                          case w:
                            W && (N && (s = l(N)) && this.parseID3PES(s), N = {
                                data: [],
                                size: 0
                            }), N && (N.data.push(g.subarray(q, H + 188)), N.size += H + 188 - q);
                            break;

                          case 0:
                            W && (q += g[q] + 1), U = this._pmtId = r(g, q);
                            break;

                          case U:
                            W && (q += g[q] + 1);
                            var Q = t(g, q, this.typeSupported.mpeg === !0 || this.typeSupported.mp3 === !0, c);
                            (R = Q.avc) > 0 && (e.pid = R), (x = Q.audio) > 0 && (m.pid = x, 
                            m.isAAC = Q.isAAC), (w = Q.id3) > 0 && (_.pid = w), 
                            M && !B && (T.logger.log("reparse from beginning"), 
                            M = !1, H = V - 188), B = this.pmtParsed = !0;
                            break;

                          case 17:
                          case 8191:
                            break;

                          default:
                            M = !0;
                        }
                    } else this.observer.emit(A.Events.ERROR, A.Events.ERROR, {
                        type: p.ErrorTypes.MEDIA_ERROR,
                        details: p.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !1,
                        reason: "TS packet did not start with 0x47"
                    });
                    e.pesData = O, m.pesData = P, _.pesData = N;
                    var J = {
                        audioTrack: m,
                        avcTrack: e,
                        id3Track: _,
                        textTrack: this._txtTrack
                    };
                    return u && this.extractRemainingSamples(J), J;
                }, f.flush = function() {
                    var g, n = this.remainderData;
                    return this.remainderData = null, g = n ? this.demux(n, -1, !1, !0) : {
                        audioTrack: this._audioTrack,
                        avcTrack: this._avcTrack,
                        textTrack: this._txtTrack,
                        id3Track: this._id3Track
                    }, this.extractRemainingSamples(g), this.sampleAes ? this.decrypt(g, this.sampleAes) : g;
                }, f.extractRemainingSamples = function(g) {
                    var n, c = g.audioTrack, u = g.avcTrack, s = g.id3Track, e = u.pesData, m = c.pesData, _ = s.pesData;
                    e && (n = l(e)) ? (this.parseAVCPES(n, !0), u.pesData = null) : u.pesData = e, 
                    m && (n = l(m)) ? (c.isAAC ? this.parseAACPES(n) : this.parseMPEGPES(n), 
                    c.pesData = null) : (m != null && m.size && T.logger.log("last AAC PES packet truncated,might overlap between fragments"), 
                    c.pesData = m), _ && (n = l(_)) ? (this.parseID3PES(n), s.pesData = null) : s.pesData = _;
                }, f.demuxSampleAes = function(g, n, c) {
                    var u = this.demux(g, c, !0, !this.config.progressive), s = this.sampleAes = new I.default(this.observer, this.config, n);
                    return this.decrypt(u, s);
                }, f.decrypt = function(g, n) {
                    return new Promise(function(c) {
                        var u = g.audioTrack, s = g.avcTrack;
                        u.samples && u.isAAC ? n.decryptAacSamples(u.samples, 0, function() {
                            s.samples ? n.decryptAvcSamples(s.samples, 0, 0, function() {
                                c(g);
                            }) : c(g);
                        }) : s.samples && n.decryptAvcSamples(s.samples, 0, 0, function() {
                            c(g);
                        });
                    });
                }, f.destroy = function() {
                    this._initPTS = this._initDTS = null, this._duration = 0;
                }, f.parseAVCPES = function(g, n) {
                    var c, u = this, s = this._avcTrack, e = this.parseAVCNALu(g.data), m = this.avcSample, _ = !1;
                    g.data = null, m && e.length && !s.audFound && (o(m, s), m = this.avcSample = E(!1, g.pts, g.dts, "")), 
                    e.forEach(function(R) {
                        switch (R.type) {
                          case 1:
                            c = !0, m || (m = u.avcSample = E(!0, g.pts, g.dts, "")), 
                            m.frame = !0;
                            var O = R.data;
                            if (_ && O.length > 4) {
                                var x = new L.default(O).readSliceType();
                                x !== 2 && x !== 4 && x !== 7 && x !== 9 || (m.key = !0);
                            }
                            break;

                          case 5:
                            c = !0, m || (m = u.avcSample = E(!0, g.pts, g.dts, "")), 
                            m.key = !0, m.frame = !0;
                            break;

                          case 6:
                            c = !0;
                            var w = new L.default(i(R.data));
                            w.readUByte();
                            for (var P = 0, N = 0, M = !1, B = 0; !M && w.bytesAvailable > 1; ) {
                                P = 0;
                                do {
                                    P += B = w.readUByte();
                                } while (B === 255);
                                N = 0;
                                do {
                                    N += B = w.readUByte();
                                } while (B === 255);
                                if (P === 4 && w.bytesAvailable !== 0) {
                                    if (M = !0, w.readUByte() === 181 && w.readUShort() === 49 && w.readUInt() === 1195456820 && w.readUByte() === 3) {
                                        for (var U = w.readUByte(), G = 31 & U, V = [ U, w.readUByte() ], H = 0; H < G; H++) V.push(w.readUByte()), 
                                        V.push(w.readUByte()), V.push(w.readUByte());
                                        h(u._txtTrack.samples, {
                                            type: 3,
                                            pts: g.pts,
                                            bytes: V
                                        });
                                    }
                                } else if (P === 5 && w.bytesAvailable !== 0) {
                                    if (M = !0, N > 16) {
                                        for (var W = [], Y = 0; Y < 16; Y++) W.push(w.readUByte().toString(16)), 
                                        Y !== 3 && Y !== 5 && Y !== 7 && Y !== 9 || W.push("-");
                                        for (var q = N - 16, Q = new Uint8Array(q), J = 0; J < q; J++) Q[J] = w.readUByte();
                                        h(u._txtTrack.samples, {
                                            pts: g.pts,
                                            payloadType: P,
                                            uuid: W.join(""),
                                            userData: Object(D.utf8ArrayToStr)(Q),
                                            userDataBytes: Q
                                        });
                                    }
                                } else if (N < w.bytesAvailable) for (var rt = 0; rt < N; rt++) w.readUByte();
                            }
                            break;

                          case 7:
                            if (c = !0, _ = !0, !s.sps) {
                                var Z = new L.default(R.data).readSPS();
                                s.width = Z.width, s.height = Z.height, s.pixelRatio = Z.pixelRatio, 
                                s.sps = [ R.data ], s.duration = u._duration;
                                for (var st = R.data.subarray(1, 4), $ = "avc1.", tt = 0; tt < 3; tt++) {
                                    var nt = st[tt].toString(16);
                                    nt.length < 2 && (nt = "0" + nt), $ += nt;
                                }
                                s.codec = $;
                            }
                            break;

                          case 8:
                            c = !0, s.pps || (s.pps = [ R.data ]);
                            break;

                          case 9:
                            c = !1, s.audFound = !0, m && o(m, s), m = u.avcSample = E(!1, g.pts, g.dts, "");
                            break;

                          case 12:
                            c = !1;
                            break;

                          default:
                            c = !1, m && (m.debug += "unknown NAL " + R.type + " ");
                        }
                        m && c && m.units.push(R);
                    }), n && m && (o(m, s), this.avcSample = null);
                }, f.getLastNalUnit = function() {
                    var g, n, c = this.avcSample;
                    if (!c || c.units.length === 0) {
                        var u = this._avcTrack.samples;
                        c = u[u.length - 1];
                    }
                    if ((g = c) !== null && g !== void 0 && g.units) {
                        var s = c.units;
                        n = s[s.length - 1];
                    }
                    return n;
                }, f.parseAVCNALu = function(g) {
                    var n, c, u = g.byteLength, s = this._avcTrack, e = s.naluState || 0, m = e, _ = [], R = 0, O = -1, x = 0;
                    for (e === -1 && (O = 0, x = 31 & g[0], e = 0, R = 1); R < u; ) if (n = g[R++], 
                    e) if (e !== 1) if (n) if (n === 1) {
                        if (O >= 0) {
                            var w = {
                                data: g.subarray(O, R - e - 1),
                                type: x
                            };
                            _.push(w);
                        } else {
                            var P = this.getLastNalUnit();
                            if (P && (m && R <= 4 - m && P.state && (P.data = P.data.subarray(0, P.data.byteLength - m)), 
                            (c = R - e - 1) > 0)) {
                                var N = new Uint8Array(P.data.byteLength + c);
                                N.set(P.data, 0), N.set(g.subarray(0, c), P.data.byteLength), 
                                P.data = N;
                            }
                        }
                        R < u ? (O = R, x = 31 & g[R], e = 0) : e = -1;
                    } else e = 0; else e = 3; else e = n ? 0 : 2; else e = n ? 0 : 1;
                    if (O >= 0 && e >= 0) {
                        var M = {
                            data: g.subarray(O, u),
                            type: x,
                            state: e
                        };
                        _.push(M);
                    }
                    if (_.length === 0) {
                        var B = this.getLastNalUnit();
                        if (B) {
                            var U = new Uint8Array(B.data.byteLength + g.byteLength);
                            U.set(B.data, 0), U.set(g, B.data.byteLength), B.data = U;
                        }
                    }
                    return s.naluState = e, _;
                }, f.parseAACPES = function(g) {
                    var n, c, u, s, e, m = 0, _ = this._audioTrack, R = this.aacOverFlow, O = g.data;
                    if (R) {
                        this.aacOverFlow = null;
                        var x = R.sample.unit.byteLength, w = Math.min(R.missing, x), P = x - w;
                        R.sample.unit.set(O.subarray(0, w), P), _.samples.push(R.sample), 
                        m = R.missing;
                    }
                    for (n = m, c = O.length; n < c - 1 && !k.isHeader(O, n); n++);
                    if (n === m || (n < c - 1 ? (u = "AAC PES did not start with ADTS header,offset:" + n, 
                    s = !1) : (u = "no ADTS header found in AAC PES", s = !0), T.logger.warn("parsing error:" + u), 
                    this.observer.emit(A.Events.ERROR, A.Events.ERROR, {
                        type: p.ErrorTypes.MEDIA_ERROR,
                        details: p.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: s,
                        reason: u
                    }), !s)) {
                        if (k.initTrackConfig(_, this.observer, O, n, this.audioCodec), 
                        g.pts !== void 0) e = g.pts; else {
                            if (!R) return void T.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
                            var N = k.getFrameDuration(_.samplerate);
                            e = R.sample.pts + N;
                        }
                        for (var M = 0; n < c; ) {
                            if (k.isHeader(O, n)) {
                                if (n + 5 < c) {
                                    var B = k.appendFrame(_, O, n, e, M);
                                    if (B) {
                                        if (!B.missing) {
                                            n += B.length, M++;
                                            continue;
                                        }
                                        this.aacOverFlow = B;
                                    }
                                }
                                break;
                            }
                            n++;
                        }
                    }
                }, f.parseMPEGPES = function(g) {
                    var n = g.data, c = n.length, u = 0, s = 0, e = g.pts;
                    if (e !== void 0) for (;s < c; ) if (S.isHeader(n, s)) {
                        var m = S.appendFrame(this._audioTrack, n, s, e, u);
                        if (!m) break;
                        s += m.length, u++;
                    } else s++; else T.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
                }, f.parseID3PES = function(g) {
                    g.pts !== void 0 ? this._id3Track.samples.push(g) : T.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
                }, a;
            }();
            function E(a, f, g, n) {
                return {
                    key: a,
                    frame: !1,
                    pts: f,
                    dts: g,
                    units: [],
                    debug: n,
                    length: 0
                };
            }
            function r(a, f) {
                return (31 & a[f + 10]) << 8 | a[f + 11];
            }
            function t(a, f, g, n) {
                var c = {
                    audio: -1,
                    avc: -1,
                    id3: -1,
                    isAAC: !0
                }, u = f + 3 + ((15 & a[f + 1]) << 8 | a[f + 2]) - 4;
                for (f += 12 + ((15 & a[f + 10]) << 8 | a[f + 11]); f < u; ) {
                    var s = (31 & a[f + 1]) << 8 | a[f + 2];
                    switch (a[f]) {
                      case 207:
                        if (!n) {
                            T.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                            break;
                        }

                      case 15:
                        c.audio === -1 && (c.audio = s);
                        break;

                      case 21:
                        c.id3 === -1 && (c.id3 = s);
                        break;

                      case 219:
                        if (!n) {
                            T.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                            break;
                        }

                      case 27:
                        c.avc === -1 && (c.avc = s);
                        break;

                      case 3:
                      case 4:
                        g ? c.audio === -1 && (c.audio = s, c.isAAC = !1) : T.logger.log("MPEG audio found, not supported in this browser");
                        break;

                      case 36:
                        T.logger.warn("Unsupported HEVC stream type found");
                    }
                    f += 5 + ((15 & a[f + 3]) << 8 | a[f + 4]);
                }
                return c;
            }
            function l(a) {
                var f, g, n, c, u, s = 0, e = a.data;
                if (!a || a.size === 0) return null;
                for (;e[0].length < 19 && e.length > 1; ) {
                    var m = new Uint8Array(e[0].length + e[1].length);
                    m.set(e[0]), m.set(e[1], e[0].length), e[0] = m, e.splice(1, 1);
                }
                if (((f = e[0])[0] << 16) + (f[1] << 8) + f[2] === 1) {
                    if ((g = (f[4] << 8) + f[5]) && g > a.size - 6) return null;
                    var _ = f[7];
                    192 & _ && (c = 536870912 * (14 & f[9]) + 4194304 * (255 & f[10]) + 16384 * (254 & f[11]) + 128 * (255 & f[12]) + (254 & f[13]) / 2, 
                    64 & _ ? c - (u = 536870912 * (14 & f[14]) + 4194304 * (255 & f[15]) + 16384 * (254 & f[16]) + 128 * (255 & f[17]) + (254 & f[18]) / 2) > 54e5 && (T.logger.warn(Math.round((c - u) / 9e4) + "s delta between PTS and DTS, align them"), 
                    c = u) : u = c);
                    var R = (n = f[8]) + 9;
                    if (a.size <= R) return null;
                    a.size -= R;
                    for (var O = new Uint8Array(a.size), x = 0, w = e.length; x < w; x++) {
                        var P = (f = e[x]).byteLength;
                        if (R) {
                            if (R > P) {
                                R -= P;
                                continue;
                            }
                            f = f.subarray(R), P -= R, R = 0;
                        }
                        O.set(f, s), s += P;
                    }
                    return g && (g -= n + 3), {
                        data: O,
                        pts: c,
                        dts: u,
                        len: g
                    };
                }
                return null;
            }
            function o(a, f) {
                if (a.units.length && a.frame) {
                    if (a.pts === void 0) {
                        var g = f.samples, n = g.length;
                        if (!n) return void f.dropped++;
                        var c = g[n - 1];
                        a.pts = c.pts, a.dts = c.dts;
                    }
                    f.samples.push(a);
                }
                a.debug.length && T.logger.log(a.pts + "/" + a.dts + ":" + a.debug);
            }
            function h(a, f) {
                var g = a.length;
                if (g > 0) {
                    if (f.pts >= a[g - 1].pts) a.push(f); else for (var n = g - 1; n >= 0; n--) if (f.pts < a[n].pts) {
                        a.splice(n, 0, f);
                        break;
                    }
                } else a.push(f);
            }
            function i(a) {
                for (var f = a.byteLength, g = [], n = 1; n < f - 2; ) a[n] === 0 && a[n + 1] === 0 && a[n + 2] === 3 ? (g.push(n + 2), 
                n += 2) : n++;
                if (g.length === 0) return a;
                var c = f - g.length, u = new Uint8Array(c), s = 0;
                for (n = 0; n < c; s++, n++) s === g[0] && (s++, g.shift()), u[n] = a[s];
                return u;
            }
            b.minProbeByteLength = 188, C.default = b;
        },
        "./src/errors.ts": function(F, C, v) {
            var k, S, L, D;
            v.r(C), v.d(C, "ErrorTypes", function() {
                return k;
            }), v.d(C, "ErrorDetails", function() {
                return L;
            }), (S = k || (k = {})).NETWORK_ERROR = "networkError", S.MEDIA_ERROR = "mediaError", 
            S.KEY_SYSTEM_ERROR = "keySystemError", S.MUX_ERROR = "muxError", S.OTHER_ERROR = "otherError", 
            (D = L || (L = {})).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", D.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", 
            D.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", D.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", 
            D.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", D.MANIFEST_LOAD_ERROR = "manifestLoadError", 
            D.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", D.MANIFEST_PARSING_ERROR = "manifestParsingError", 
            D.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", 
            D.LEVEL_EMPTY_ERROR = "levelEmptyError", D.LEVEL_LOAD_ERROR = "levelLoadError", 
            D.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", D.LEVEL_SWITCH_ERROR = "levelSwitchError", 
            D.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", D.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", 
            D.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", D.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", 
            D.FRAG_LOAD_ERROR = "fragLoadError", D.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", 
            D.FRAG_DECRYPT_ERROR = "fragDecryptError", D.FRAG_PARSING_ERROR = "fragParsingError", 
            D.REMUX_ALLOC_ERROR = "remuxAllocError", D.KEY_LOAD_ERROR = "keyLoadError", 
            D.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", D.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", 
            D.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", 
            D.BUFFER_APPEND_ERROR = "bufferAppendError", D.BUFFER_APPENDING_ERROR = "bufferAppendingError", 
            D.BUFFER_STALLED_ERROR = "bufferStalledError", D.BUFFER_FULL_ERROR = "bufferFullError", 
            D.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", D.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", 
            D.INTERNAL_EXCEPTION = "internalException", D.INTERNAL_ABORTED = "aborted", 
            D.UNKNOWN = "unknown";
        },
        "./src/events.ts": function(F, C, v) {
            var k, S;
            v.r(C), v.d(C, "Events", function() {
                return k;
            }), (S = k || (k = {})).MEDIA_ATTACHING = "hlsMediaAttaching", S.MEDIA_ATTACHED = "hlsMediaAttached", 
            S.MEDIA_DETACHING = "hlsMediaDetaching", S.MEDIA_DETACHED = "hlsMediaDetached", 
            S.BUFFER_RESET = "hlsBufferReset", S.BUFFER_CODECS = "hlsBufferCodecs", 
            S.BUFFER_CREATED = "hlsBufferCreated", S.BUFFER_APPENDING = "hlsBufferAppending", 
            S.BUFFER_APPENDED = "hlsBufferAppended", S.BUFFER_EOS = "hlsBufferEos", 
            S.BUFFER_FLUSHING = "hlsBufferFlushing", S.BUFFER_FLUSHED = "hlsBufferFlushed", 
            S.MANIFEST_LOADING = "hlsManifestLoading", S.MANIFEST_LOADED = "hlsManifestLoaded", 
            S.MANIFEST_PARSED = "hlsManifestParsed", S.LEVEL_SWITCHING = "hlsLevelSwitching", 
            S.LEVEL_SWITCHED = "hlsLevelSwitched", S.LEVEL_LOADING = "hlsLevelLoading", 
            S.LEVEL_LOADED = "hlsLevelLoaded", S.LEVEL_UPDATED = "hlsLevelUpdated", 
            S.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", S.LEVELS_UPDATED = "hlsLevelsUpdated", 
            S.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", S.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", 
            S.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", S.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", 
            S.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", S.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", 
            S.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", S.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", 
            S.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", S.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", 
            S.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", S.CUES_PARSED = "hlsCuesParsed", 
            S.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", S.INIT_PTS_FOUND = "hlsInitPtsFound", 
            S.FRAG_LOADING = "hlsFragLoading", S.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", 
            S.FRAG_LOADED = "hlsFragLoaded", S.FRAG_DECRYPTED = "hlsFragDecrypted", 
            S.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", S.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", 
            S.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", S.FRAG_PARSED = "hlsFragParsed", 
            S.FRAG_BUFFERED = "hlsFragBuffered", S.FRAG_CHANGED = "hlsFragChanged", 
            S.FPS_DROP = "hlsFpsDrop", S.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", 
            S.ERROR = "hlsError", S.DESTROYING = "hlsDestroying", S.KEY_LOADING = "hlsKeyLoading", 
            S.KEY_LOADED = "hlsKeyLoaded", S.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", 
            S.BACK_BUFFER_REACHED = "hlsBackBufferReached";
        },
        "./src/hls.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return o;
            });
            var k = v("./node_modules/url-toolkit/src/url-toolkit.js"), S = v("./src/loader/playlist-loader.ts"), L = v("./src/loader/key-loader.ts"), D = v("./src/controller/id3-track-controller.ts"), I = v("./src/controller/latency-controller.ts"), A = v("./src/controller/level-controller.ts"), d = v("./src/controller/fragment-tracker.ts"), T = v("./src/controller/stream-controller.ts"), p = v("./src/is-supported.ts"), y = v("./src/utils/logger.ts"), b = v("./src/config.ts"), E = v("./node_modules/eventemitter3/index.js"), r = v("./src/events.ts"), t = v("./src/errors.ts");
            function l(h, i) {
                for (var a = 0; a < i.length; a++) {
                    var f = i[a];
                    f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), 
                    Object.defineProperty(h, f.key, f);
                }
            }
            var o = function() {
                function h(n) {
                    n === void 0 && (n = {}), this.config = void 0, this.userConfig = void 0, 
                    this.coreComponents = void 0, this.networkControllers = void 0, 
                    this._emitter = new E.EventEmitter(), this._autoLevelCapping = void 0, 
                    this.abrController = void 0, this.bufferController = void 0, 
                    this.capLevelController = void 0, this.latencyController = void 0, 
                    this.levelController = void 0, this.streamController = void 0, 
                    this.audioTrackController = void 0, this.subtitleTrackController = void 0, 
                    this.emeController = void 0, this._media = null, this.url = null;
                    var c = this.config = Object(b.mergeConfig)(h.DefaultConfig, n);
                    this.userConfig = n, Object(y.enableLogs)(c.debug), this._autoLevelCapping = -1, 
                    c.progressive && Object(b.enableStreamingMode)(c);
                    var u = c.abrController, s = c.bufferController, e = c.capLevelController, m = c.fpsController, _ = this.abrController = new u(this), R = this.bufferController = new s(this), O = this.capLevelController = new e(this), x = new m(this), w = new S.default(this), P = new L.default(this), N = new D.default(this), M = this.levelController = new A.default(this), B = new d.FragmentTracker(this), U = this.streamController = new T.default(this, B);
                    O.setStreamController(U), x.setStreamController(U);
                    var G = [ M, U ];
                    this.networkControllers = G;
                    var V = [ w, P, _, R, O, x, N, B ];
                    this.audioTrackController = this.createController(c.audioTrackController, null, G), 
                    this.createController(c.audioStreamController, B, G), this.subtitleTrackController = this.createController(c.subtitleTrackController, null, G), 
                    this.createController(c.subtitleStreamController, B, G), this.createController(c.timelineController, null, V), 
                    this.emeController = this.createController(c.emeController, null, V), 
                    this.latencyController = this.createController(I.default, null, V), 
                    this.coreComponents = V;
                }
                h.isSupported = function() {
                    return Object(p.isSupported)();
                };
                var i, a, f, g = h.prototype;
                return g.createController = function(n, c, u) {
                    if (n) {
                        var s = c ? new n(this, c) : new n(this);
                        return u && u.push(s), s;
                    }
                    return null;
                }, g.on = function(n, c, u) {
                    u === void 0 && (u = this), this._emitter.on(n, c, u);
                }, g.once = function(n, c, u) {
                    u === void 0 && (u = this), this._emitter.once(n, c, u);
                }, g.removeAllListeners = function(n) {
                    this._emitter.removeAllListeners(n);
                }, g.off = function(n, c, u, s) {
                    u === void 0 && (u = this), this._emitter.off(n, c, u, s);
                }, g.listeners = function(n) {
                    return this._emitter.listeners(n);
                }, g.emit = function(n, c, u) {
                    return this._emitter.emit(n, c, u);
                }, g.trigger = function(n, c) {
                    if (this.config.debug) return this.emit(n, n, c);
                    try {
                        return this.emit(n, n, c);
                    } catch (u) {
                        y.logger.error("An internal error happened while handling event " + n + '. Error message: "' + u.message + '". Here is a stacktrace:', u), 
                        this.trigger(r.Events.ERROR, {
                            type: t.ErrorTypes.OTHER_ERROR,
                            details: t.ErrorDetails.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: n,
                            error: u
                        });
                    }
                    return !1;
                }, g.listenerCount = function(n) {
                    return this._emitter.listenerCount(n);
                }, g.destroy = function() {
                    y.logger.log("destroy"), this.trigger(r.Events.DESTROYING, void 0), 
                    this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, 
                    this.url = null, this.networkControllers.forEach(function(n) {
                        return n.destroy();
                    }), this.networkControllers.length = 0, this.coreComponents.forEach(function(n) {
                        return n.destroy();
                    }), this.coreComponents.length = 0;
                }, g.attachMedia = function(n) {
                    y.logger.log("attachMedia"), this._media = n, this.trigger(r.Events.MEDIA_ATTACHING, {
                        media: n
                    });
                }, g.detachMedia = function() {
                    y.logger.log("detachMedia"), this.trigger(r.Events.MEDIA_DETACHING, void 0), 
                    this._media = null;
                }, g.loadSource = function(n) {
                    this.stopLoad();
                    var c = this.media, u = this.url, s = this.url = k.buildAbsoluteURL(self.location.href, n, {
                        alwaysNormalize: !0
                    });
                    y.logger.log("loadSource:" + s), c && u && u !== s && this.bufferController.hasSourceTypes() && (this.detachMedia(), 
                    this.attachMedia(c)), this.trigger(r.Events.MANIFEST_LOADING, {
                        url: n
                    });
                }, g.startLoad = function(n) {
                    n === void 0 && (n = -1), y.logger.log("startLoad(" + n + ")"), 
                    this.networkControllers.forEach(function(c) {
                        c.startLoad(n);
                    });
                }, g.stopLoad = function() {
                    y.logger.log("stopLoad"), this.networkControllers.forEach(function(n) {
                        n.stopLoad();
                    });
                }, g.swapAudioCodec = function() {
                    y.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
                }, g.recoverMediaError = function() {
                    y.logger.log("recoverMediaError");
                    var n = this._media;
                    this.detachMedia(), n && this.attachMedia(n);
                }, g.removeLevel = function(n, c) {
                    c === void 0 && (c = 0), this.levelController.removeLevel(n, c);
                }, i = h, f = [ {
                    key: "version",
                    get: function() {
                        return "1.0.10";
                    }
                }, {
                    key: "Events",
                    get: function() {
                        return r.Events;
                    }
                }, {
                    key: "ErrorTypes",
                    get: function() {
                        return t.ErrorTypes;
                    }
                }, {
                    key: "ErrorDetails",
                    get: function() {
                        return t.ErrorDetails;
                    }
                }, {
                    key: "DefaultConfig",
                    get: function() {
                        return h.defaultConfig ? h.defaultConfig : b.hlsDefaultConfig;
                    },
                    set: function(n) {
                        h.defaultConfig = n;
                    }
                } ], (a = [ {
                    key: "levels",
                    get: function() {
                        return this.levelController.levels || [];
                    }
                }, {
                    key: "currentLevel",
                    get: function() {
                        return this.streamController.currentLevel;
                    },
                    set: function(n) {
                        y.logger.log("set currentLevel:" + n), this.loadLevel = n, 
                        this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
                    }
                }, {
                    key: "nextLevel",
                    get: function() {
                        return this.streamController.nextLevel;
                    },
                    set: function(n) {
                        y.logger.log("set nextLevel:" + n), this.levelController.manualLevel = n, 
                        this.streamController.nextLevelSwitch();
                    }
                }, {
                    key: "loadLevel",
                    get: function() {
                        return this.levelController.level;
                    },
                    set: function(n) {
                        y.logger.log("set loadLevel:" + n), this.levelController.manualLevel = n;
                    }
                }, {
                    key: "nextLoadLevel",
                    get: function() {
                        return this.levelController.nextLoadLevel;
                    },
                    set: function(n) {
                        this.levelController.nextLoadLevel = n;
                    }
                }, {
                    key: "firstLevel",
                    get: function() {
                        return Math.max(this.levelController.firstLevel, this.minAutoLevel);
                    },
                    set: function(n) {
                        y.logger.log("set firstLevel:" + n), this.levelController.firstLevel = n;
                    }
                }, {
                    key: "startLevel",
                    get: function() {
                        return this.levelController.startLevel;
                    },
                    set: function(n) {
                        y.logger.log("set startLevel:" + n), n !== -1 && (n = Math.max(n, this.minAutoLevel)), 
                        this.levelController.startLevel = n;
                    }
                }, {
                    key: "capLevelToPlayerSize",
                    get: function() {
                        return this.config.capLevelToPlayerSize;
                    },
                    set: function(n) {
                        var c = !!n;
                        c !== this.config.capLevelToPlayerSize && (c ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), 
                        this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), 
                        this.config.capLevelToPlayerSize = c);
                    }
                }, {
                    key: "autoLevelCapping",
                    get: function() {
                        return this._autoLevelCapping;
                    },
                    set: function(n) {
                        this._autoLevelCapping !== n && (y.logger.log("set autoLevelCapping:" + n), 
                        this._autoLevelCapping = n);
                    }
                }, {
                    key: "bandwidthEstimate",
                    get: function() {
                        var n = this.abrController.bwEstimator;
                        return n ? n.getEstimate() : NaN;
                    }
                }, {
                    key: "autoLevelEnabled",
                    get: function() {
                        return this.levelController.manualLevel === -1;
                    }
                }, {
                    key: "manualLevel",
                    get: function() {
                        return this.levelController.manualLevel;
                    }
                }, {
                    key: "minAutoLevel",
                    get: function() {
                        var n = this.levels, c = this.config.minAutoBitrate;
                        if (!n) return 0;
                        for (var u = n.length, s = 0; s < u; s++) if (n[s].maxBitrate > c) return s;
                        return 0;
                    }
                }, {
                    key: "maxAutoLevel",
                    get: function() {
                        var n = this.levels, c = this.autoLevelCapping;
                        return c === -1 && n && n.length ? n.length - 1 : c;
                    }
                }, {
                    key: "nextAutoLevel",
                    get: function() {
                        return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
                    },
                    set: function(n) {
                        this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, n);
                    }
                }, {
                    key: "audioTracks",
                    get: function() {
                        var n = this.audioTrackController;
                        return n ? n.audioTracks : [];
                    }
                }, {
                    key: "audioTrack",
                    get: function() {
                        var n = this.audioTrackController;
                        return n ? n.audioTrack : -1;
                    },
                    set: function(n) {
                        var c = this.audioTrackController;
                        c && (c.audioTrack = n);
                    }
                }, {
                    key: "subtitleTracks",
                    get: function() {
                        var n = this.subtitleTrackController;
                        return n ? n.subtitleTracks : [];
                    }
                }, {
                    key: "subtitleTrack",
                    get: function() {
                        var n = this.subtitleTrackController;
                        return n ? n.subtitleTrack : -1;
                    },
                    set: function(n) {
                        var c = this.subtitleTrackController;
                        c && (c.subtitleTrack = n);
                    }
                }, {
                    key: "media",
                    get: function() {
                        return this._media;
                    }
                }, {
                    key: "subtitleDisplay",
                    get: function() {
                        var n = this.subtitleTrackController;
                        return !!n && n.subtitleDisplay;
                    },
                    set: function(n) {
                        var c = this.subtitleTrackController;
                        c && (c.subtitleDisplay = n);
                    }
                }, {
                    key: "lowLatencyMode",
                    get: function() {
                        return this.config.lowLatencyMode;
                    },
                    set: function(n) {
                        this.config.lowLatencyMode = n;
                    }
                }, {
                    key: "liveSyncPosition",
                    get: function() {
                        return this.latencyController.liveSyncPosition;
                    }
                }, {
                    key: "latency",
                    get: function() {
                        return this.latencyController.latency;
                    }
                }, {
                    key: "maxLatency",
                    get: function() {
                        return this.latencyController.maxLatency;
                    }
                }, {
                    key: "targetLatency",
                    get: function() {
                        return this.latencyController.targetLatency;
                    }
                }, {
                    key: "drift",
                    get: function() {
                        return this.latencyController.drift;
                    }
                }, {
                    key: "forceStartLoad",
                    get: function() {
                        return this.streamController.forceStartLoad;
                    }
                } ]) && l(i.prototype, a), f && l(i, f), h;
            }();
            o.defaultConfig = void 0;
        },
        "./src/is-supported.ts": function(F, C, v) {
            v.r(C), v.d(C, "isSupported", function() {
                return L;
            }), v.d(C, "changeTypeSupported", function() {
                return D;
            });
            var k = v("./src/utils/mediasource-helper.ts");
            function S() {
                return self.SourceBuffer || self.WebKitSourceBuffer;
            }
            function L() {
                var I = Object(k.getMediaSource)();
                if (!I) return !1;
                var A = S(), d = I && typeof I.isTypeSupported == "function" && I.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), T = !A || A.prototype && typeof A.prototype.appendBuffer == "function" && typeof A.prototype.remove == "function";
                return !!d && !!T;
            }
            function D() {
                var I, A = S();
                return typeof (A == null || (I = A.prototype) === null || I === void 0 ? void 0 : I.changeType) == "function";
            }
        },
        "./src/loader/fragment-loader.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return T;
            }), v.d(C, "LoadError", function() {
                return y;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/errors.ts");
            function L(b) {
                var E = typeof Map == "function" ? new Map() : void 0;
                return (L = function(r) {
                    if (r === null || (t = r, Function.toString.call(t).indexOf("[native code]") === -1)) return r;
                    var t;
                    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
                    if (E !== void 0) {
                        if (E.has(r)) return E.get(r);
                        E.set(r, l);
                    }
                    function l() {
                        return D(r, arguments, A(this).constructor);
                    }
                    return l.prototype = Object.create(r.prototype, {
                        constructor: {
                            value: l,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), I(l, r);
                })(b);
            }
            function D(b, E, r) {
                return (D = function() {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if (typeof Proxy == "function") return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                        !0;
                    } catch {
                        return !1;
                    }
                }() ? Reflect.construct : function(t, l, o) {
                    var h = [ null ];
                    h.push.apply(h, l);
                    var i = new (Function.bind.apply(t, h))();
                    return o && I(i, o.prototype), i;
                }).apply(null, arguments);
            }
            function I(b, E) {
                return (I = Object.setPrototypeOf || function(r, t) {
                    return r.__proto__ = t, r;
                })(b, E);
            }
            function A(b) {
                return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(E) {
                    return E.__proto__ || Object.getPrototypeOf(E);
                })(b);
            }
            var d = Math.pow(2, 17), T = function() {
                function b(r) {
                    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, 
                    this.config = r;
                }
                var E = b.prototype;
                return E.destroy = function() {
                    this.loader && (this.loader.destroy(), this.loader = null);
                }, E.abort = function() {
                    this.loader && this.loader.abort();
                }, E.load = function(r, t) {
                    var l = this, o = r.url;
                    if (!o) return Promise.reject(new y({
                        type: S.ErrorTypes.NETWORK_ERROR,
                        details: S.ErrorDetails.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: r,
                        networkDetails: null
                    }, "Fragment does not have a " + (o ? "part list" : "url")));
                    this.abort();
                    var h = this.config, i = h.fLoader, a = h.loader;
                    return new Promise(function(f, g) {
                        l.loader && l.loader.destroy();
                        var n = l.loader = r.loader = i ? new i(h) : new a(h), c = p(r), u = {
                            timeout: h.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: h.fragLoadingMaxRetryTimeout,
                            highWaterMark: d
                        };
                        r.stats = n.stats, n.load(c, u, {
                            onSuccess: function(s, e, m, _) {
                                l.resetLoader(r, n), f({
                                    frag: r,
                                    part: null,
                                    payload: s.data,
                                    networkDetails: _
                                });
                            },
                            onError: function(s, e, m) {
                                l.resetLoader(r, n), g(new y({
                                    type: S.ErrorTypes.NETWORK_ERROR,
                                    details: S.ErrorDetails.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: r,
                                    response: s,
                                    networkDetails: m
                                }));
                            },
                            onAbort: function(s, e, m) {
                                l.resetLoader(r, n), g(new y({
                                    type: S.ErrorTypes.NETWORK_ERROR,
                                    details: S.ErrorDetails.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: r,
                                    networkDetails: m
                                }));
                            },
                            onTimeout: function(s, e, m) {
                                l.resetLoader(r, n), g(new y({
                                    type: S.ErrorTypes.NETWORK_ERROR,
                                    details: S.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: r,
                                    networkDetails: m
                                }));
                            },
                            onProgress: function(s, e, m, _) {
                                t && t({
                                    frag: r,
                                    part: null,
                                    payload: m,
                                    networkDetails: _
                                });
                            }
                        });
                    });
                }, E.loadPart = function(r, t, l) {
                    var o = this;
                    this.abort();
                    var h = this.config, i = h.fLoader, a = h.loader;
                    return new Promise(function(f, g) {
                        o.loader && o.loader.destroy();
                        var n = o.loader = r.loader = i ? new i(h) : new a(h), c = p(r, t), u = {
                            timeout: h.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: h.fragLoadingMaxRetryTimeout,
                            highWaterMark: d
                        };
                        t.stats = n.stats, n.load(c, u, {
                            onSuccess: function(s, e, m, _) {
                                o.resetLoader(r, n), o.updateStatsFromPart(r, t);
                                var R = {
                                    frag: r,
                                    part: t,
                                    payload: s.data,
                                    networkDetails: _
                                };
                                l(R), f(R);
                            },
                            onError: function(s, e, m) {
                                o.resetLoader(r, n), g(new y({
                                    type: S.ErrorTypes.NETWORK_ERROR,
                                    details: S.ErrorDetails.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: r,
                                    part: t,
                                    response: s,
                                    networkDetails: m
                                }));
                            },
                            onAbort: function(s, e, m) {
                                r.stats.aborted = t.stats.aborted, o.resetLoader(r, n), 
                                g(new y({
                                    type: S.ErrorTypes.NETWORK_ERROR,
                                    details: S.ErrorDetails.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: r,
                                    part: t,
                                    networkDetails: m
                                }));
                            },
                            onTimeout: function(s, e, m) {
                                o.resetLoader(r, n), g(new y({
                                    type: S.ErrorTypes.NETWORK_ERROR,
                                    details: S.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: r,
                                    part: t,
                                    networkDetails: m
                                }));
                            }
                        });
                    });
                }, E.updateStatsFromPart = function(r, t) {
                    var l = r.stats, o = t.stats, h = o.total;
                    if (l.loaded += o.loaded, h) {
                        var i = Math.round(r.duration / t.duration), a = Math.min(Math.round(l.loaded / h), i), f = (i - a) * Math.round(l.loaded / a);
                        l.total = l.loaded + f;
                    } else l.total = Math.max(l.loaded, l.total);
                    var g = l.loading, n = o.loading;
                    g.start ? g.first += n.first - n.start : (g.start = n.start, 
                    g.first = n.first), g.end = n.end;
                }, E.resetLoader = function(r, t) {
                    r.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), 
                    this.loader = null), t.destroy();
                }, b;
            }();
            function p(b, E) {
                E === void 0 && (E = null);
                var r = E || b, t = {
                    frag: b,
                    part: E,
                    responseType: "arraybuffer",
                    url: r.url,
                    rangeStart: 0,
                    rangeEnd: 0
                }, l = r.byteRangeStartOffset, o = r.byteRangeEndOffset;
                return Object(k.isFiniteNumber)(l) && Object(k.isFiniteNumber)(o) && (t.rangeStart = l, 
                t.rangeEnd = o), t;
            }
            var y = function(b) {
                var E, r;
                function t(l) {
                    for (var o, h = arguments.length, i = new Array(h > 1 ? h - 1 : 0), a = 1; a < h; a++) i[a - 1] = arguments[a];
                    return (o = b.call.apply(b, [ this ].concat(i)) || this).data = void 0, 
                    o.data = l, o;
                }
                return r = b, (E = t).prototype = Object.create(r.prototype), E.prototype.constructor = E, 
                I(E, r), t;
            }(L(Error));
        },
        "./src/loader/fragment.ts": function(F, C, v) {
            v.r(C), v.d(C, "ElementaryStreamTypes", function() {
                return k;
            }), v.d(C, "BaseSegment", function() {
                return E;
            }), v.d(C, "Fragment", function() {
                return r;
            }), v.d(C, "Part", function() {
                return t;
            });
            var k, S, L = v("./src/polyfills/number.ts"), D = v("./node_modules/url-toolkit/src/url-toolkit.js"), I = v("./src/utils/logger.ts"), A = v("./src/loader/level-key.ts"), d = v("./src/loader/load-stats.ts");
            function T(l, o) {
                l.prototype = Object.create(o.prototype), l.prototype.constructor = l, 
                p(l, o);
            }
            function p(l, o) {
                return (p = Object.setPrototypeOf || function(h, i) {
                    return h.__proto__ = i, h;
                })(l, o);
            }
            function y(l, o) {
                for (var h = 0; h < o.length; h++) {
                    var i = o[h];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    Object.defineProperty(l, i.key, i);
                }
            }
            function b(l, o, h) {
                return o && y(l.prototype, o), h && y(l, h), l;
            }
            (S = k || (k = {})).AUDIO = "audio", S.VIDEO = "video", S.AUDIOVIDEO = "audiovideo";
            var E = function() {
                function l(o) {
                    var h;
                    this._byteRange = null, this._url = null, this.baseurl = void 0, 
                    this.relurl = void 0, this.elementaryStreams = ((h = {})[k.AUDIO] = null, 
                    h[k.VIDEO] = null, h[k.AUDIOVIDEO] = null, h), this.baseurl = o;
                }
                return l.prototype.setByteRange = function(o, h) {
                    var i = o.split("@", 2), a = [];
                    i.length === 1 ? a[0] = h ? h.byteRangeEndOffset : 0 : a[0] = parseInt(i[1]), 
                    a[1] = parseInt(i[0]) + a[0], this._byteRange = a;
                }, b(l, [ {
                    key: "byteRange",
                    get: function() {
                        return this._byteRange ? this._byteRange : [];
                    }
                }, {
                    key: "byteRangeStartOffset",
                    get: function() {
                        return this.byteRange[0];
                    }
                }, {
                    key: "byteRangeEndOffset",
                    get: function() {
                        return this.byteRange[1];
                    }
                }, {
                    key: "url",
                    get: function() {
                        return !this._url && this.baseurl && this.relurl && (this._url = Object(D.buildAbsoluteURL)(this.baseurl, this.relurl, {
                            alwaysNormalize: !0
                        })), this._url || "";
                    },
                    set: function(o) {
                        this._url = o;
                    }
                } ]), l;
            }(), r = function(l) {
                function o(i, a) {
                    var f;
                    return (f = l.call(this, a) || this)._decryptdata = null, f.rawProgramDateTime = null, 
                    f.programDateTime = null, f.tagList = [], f.duration = 0, f.sn = 0, 
                    f.levelkey = void 0, f.type = void 0, f.loader = null, f.level = -1, 
                    f.cc = 0, f.startPTS = void 0, f.endPTS = void 0, f.appendedPTS = void 0, 
                    f.startDTS = void 0, f.endDTS = void 0, f.start = 0, f.deltaPTS = void 0, 
                    f.maxStartPTS = void 0, f.minEndPTS = void 0, f.stats = new d.LoadStats(), 
                    f.urlId = 0, f.data = void 0, f.bitrateTest = !1, f.title = null, 
                    f.initSegment = null, f.type = i, f;
                }
                T(o, l);
                var h = o.prototype;
                return h.createInitializationVector = function(i) {
                    for (var a = new Uint8Array(16), f = 12; f < 16; f++) a[f] = i >> 8 * (15 - f) & 255;
                    return a;
                }, h.setDecryptDataFromLevelKey = function(i, a) {
                    var f = i;
                    return (i == null ? void 0 : i.method) === "AES-128" && i.uri && !i.iv && ((f = A.LevelKey.fromURI(i.uri)).method = i.method, 
                    f.iv = this.createInitializationVector(a), f.keyFormat = "identity"), 
                    f;
                }, h.setElementaryStreamInfo = function(i, a, f, g, n, c) {
                    c === void 0 && (c = !1);
                    var u = this.elementaryStreams, s = u[i];
                    s ? (s.startPTS = Math.min(s.startPTS, a), s.endPTS = Math.max(s.endPTS, f), 
                    s.startDTS = Math.min(s.startDTS, g), s.endDTS = Math.max(s.endDTS, n)) : u[i] = {
                        startPTS: a,
                        endPTS: f,
                        startDTS: g,
                        endDTS: n,
                        partial: c
                    };
                }, h.clearElementaryStreamInfo = function() {
                    var i = this.elementaryStreams;
                    i[k.AUDIO] = null, i[k.VIDEO] = null, i[k.AUDIOVIDEO] = null;
                }, b(o, [ {
                    key: "decryptdata",
                    get: function() {
                        if (!this.levelkey && !this._decryptdata) return null;
                        if (!this._decryptdata && this.levelkey) {
                            var i = this.sn;
                            typeof i != "number" && (this.levelkey && this.levelkey.method === "AES-128" && !this.levelkey.iv && I.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), 
                            i = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, i);
                        }
                        return this._decryptdata;
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.start + this.duration;
                    }
                }, {
                    key: "endProgramDateTime",
                    get: function() {
                        if (this.programDateTime === null || !Object(L.isFiniteNumber)(this.programDateTime)) return null;
                        var i = Object(L.isFiniteNumber)(this.duration) ? this.duration : 0;
                        return this.programDateTime + 1e3 * i;
                    }
                }, {
                    key: "encrypted",
                    get: function() {
                        var i;
                        return !((i = this.decryptdata) === null || i === void 0 || !i.keyFormat || !this.decryptdata.uri);
                    }
                } ]), o;
            }(E), t = function(l) {
                function o(h, i, a, f, g) {
                    var n;
                    (n = l.call(this, a) || this).fragOffset = 0, n.duration = 0, 
                    n.gap = !1, n.independent = !1, n.relurl = void 0, n.fragment = void 0, 
                    n.index = void 0, n.stats = new d.LoadStats(), n.duration = h.decimalFloatingPoint("DURATION"), 
                    n.gap = h.bool("GAP"), n.independent = h.bool("INDEPENDENT"), 
                    n.relurl = h.enumeratedString("URI"), n.fragment = i, n.index = f;
                    var c = h.enumeratedString("BYTERANGE");
                    return c && n.setByteRange(c, g), g && (n.fragOffset = g.fragOffset + g.duration), 
                    n;
                }
                return T(o, l), b(o, [ {
                    key: "start",
                    get: function() {
                        return this.fragment.start + this.fragOffset;
                    }
                }, {
                    key: "end",
                    get: function() {
                        return this.start + this.duration;
                    }
                }, {
                    key: "loaded",
                    get: function() {
                        var h = this.elementaryStreams;
                        return !!(h.audio || h.video || h.audiovideo);
                    }
                } ]), o;
            }(E);
        },
        "./src/loader/key-loader.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return D;
            });
            var k = v("./src/events.ts"), S = v("./src/errors.ts"), L = v("./src/utils/logger.ts"), D = function() {
                function I(d) {
                    this.hls = void 0, this.loaders = {}, this.decryptkey = null, 
                    this.decrypturl = null, this.hls = d, this._registerListeners();
                }
                var A = I.prototype;
                return A._registerListeners = function() {
                    this.hls.on(k.Events.KEY_LOADING, this.onKeyLoading, this);
                }, A._unregisterListeners = function() {
                    this.hls.off(k.Events.KEY_LOADING, this.onKeyLoading);
                }, A.destroy = function() {
                    for (var d in this._unregisterListeners(), this.loaders) {
                        var T = this.loaders[d];
                        T && T.destroy();
                    }
                    this.loaders = {};
                }, A.onKeyLoading = function(d, T) {
                    var p = T.frag, y = p.type, b = this.loaders[y];
                    if (p.decryptdata) {
                        var E = p.decryptdata.uri;
                        if (E !== this.decrypturl || this.decryptkey === null) {
                            var r = this.hls.config;
                            if (b && (L.logger.warn("abort previous key loader for type:" + y), 
                            b.abort()), !E) return void L.logger.warn("key uri is falsy");
                            var t = r.loader, l = p.loader = this.loaders[y] = new t(r);
                            this.decrypturl = E, this.decryptkey = null;
                            var o = {
                                url: E,
                                frag: p,
                                responseType: "arraybuffer"
                            }, h = {
                                timeout: r.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: r.fragLoadingRetryDelay,
                                maxRetryDelay: r.fragLoadingMaxRetryTimeout,
                                highWaterMark: 0
                            }, i = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this)
                            };
                            l.load(o, h, i);
                        } else this.decryptkey && (p.decryptdata.key = this.decryptkey, 
                        this.hls.trigger(k.Events.KEY_LOADED, {
                            frag: p
                        }));
                    } else L.logger.warn("Missing decryption data on fragment in onKeyLoading");
                }, A.loadsuccess = function(d, T, p) {
                    var y = p.frag;
                    y.decryptdata ? (this.decryptkey = y.decryptdata.key = new Uint8Array(d.data), 
                    y.loader = null, delete this.loaders[y.type], this.hls.trigger(k.Events.KEY_LOADED, {
                        frag: y
                    })) : L.logger.error("after key load, decryptdata unset");
                }, A.loaderror = function(d, T) {
                    var p = T.frag, y = p.loader;
                    y && y.abort(), delete this.loaders[p.type], this.hls.trigger(k.Events.ERROR, {
                        type: S.ErrorTypes.NETWORK_ERROR,
                        details: S.ErrorDetails.KEY_LOAD_ERROR,
                        fatal: !1,
                        frag: p,
                        response: d
                    });
                }, A.loadtimeout = function(d, T) {
                    var p = T.frag, y = p.loader;
                    y && y.abort(), delete this.loaders[p.type], this.hls.trigger(k.Events.ERROR, {
                        type: S.ErrorTypes.NETWORK_ERROR,
                        details: S.ErrorDetails.KEY_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: p
                    });
                }, I;
            }();
        },
        "./src/loader/level-details.ts": function(F, C, v) {
            v.r(C), v.d(C, "LevelDetails", function() {
                return S;
            });
            var k = v("./src/polyfills/number.ts"), S = function() {
                function L(I) {
                    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, 
                    this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, 
                    this.partList = null, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, 
                    this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, 
                    this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, 
                    this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, 
                    this.totalduration = 0, this.type = null, this.url = void 0, 
                    this.m3u8 = "", this.version = null, this.canBlockReload = !1, 
                    this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, 
                    this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, 
                    this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, 
                    this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, 
                    this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, 
                    this.driftEnd = 0, this.fragments = [], this.url = I;
                }
                var D;
                return L.prototype.reloaded = function(I) {
                    if (!I) return this.advanced = !0, void (this.updated = !0);
                    var A = this.lastPartSn - I.lastPartSn, d = this.lastPartIndex - I.lastPartIndex;
                    this.updated = this.endSN !== I.endSN || !!d || !!A, this.advanced = this.endSN > I.endSN || A > 0 || A === 0 && d > 0, 
                    this.updated || this.advanced ? this.misses = Math.floor(.6 * I.misses) : this.misses = I.misses + 1, 
                    this.availabilityDelay = I.availabilityDelay;
                }, (D = [ {
                    key: "hasProgramDateTime",
                    get: function() {
                        return !!this.fragments.length && Object(k.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime);
                    }
                }, {
                    key: "levelTargetDuration",
                    get: function() {
                        return this.averagetargetduration || this.targetduration || 10;
                    }
                }, {
                    key: "drift",
                    get: function() {
                        var I = this.driftEndTime - this.driftStartTime;
                        return I > 0 ? 1e3 * (this.driftEnd - this.driftStart) / I : 1;
                    }
                }, {
                    key: "edge",
                    get: function() {
                        return this.partEnd || this.fragmentEnd;
                    }
                }, {
                    key: "partEnd",
                    get: function() {
                        var I;
                        return (I = this.partList) !== null && I !== void 0 && I.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
                    }
                }, {
                    key: "fragmentEnd",
                    get: function() {
                        var I;
                        return (I = this.fragments) !== null && I !== void 0 && I.length ? this.fragments[this.fragments.length - 1].end : 0;
                    }
                }, {
                    key: "age",
                    get: function() {
                        return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
                    }
                }, {
                    key: "lastPartIndex",
                    get: function() {
                        var I;
                        return (I = this.partList) !== null && I !== void 0 && I.length ? this.partList[this.partList.length - 1].index : -1;
                    }
                }, {
                    key: "lastPartSn",
                    get: function() {
                        var I;
                        return (I = this.partList) !== null && I !== void 0 && I.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
                    }
                } ]) && function(I, A) {
                    for (var d = 0; d < A.length; d++) {
                        var T = A[d];
                        T.enumerable = T.enumerable || !1, T.configurable = !0, 
                        "value" in T && (T.writable = !0), Object.defineProperty(I, T.key, T);
                    }
                }(L.prototype, D), L;
            }();
        },
        "./src/loader/level-key.ts": function(F, C, v) {
            v.r(C), v.d(C, "LevelKey", function() {
                return S;
            });
            var k = v("./node_modules/url-toolkit/src/url-toolkit.js"), S = function() {
                function L(I, A) {
                    this._uri = null, this.method = null, this.keyFormat = null, 
                    this.keyFormatVersions = null, this.keyID = null, this.key = null, 
                    this.iv = null, this._uri = A ? Object(k.buildAbsoluteURL)(I, A, {
                        alwaysNormalize: !0
                    }) : I;
                }
                var D;
                return L.fromURL = function(I, A) {
                    return new L(I, A);
                }, L.fromURI = function(I) {
                    return new L(I);
                }, (D = [ {
                    key: "uri",
                    get: function() {
                        return this._uri;
                    }
                } ]) && function(I, A) {
                    for (var d = 0; d < A.length; d++) {
                        var T = A[d];
                        T.enumerable = T.enumerable || !1, T.configurable = !0, 
                        "value" in T && (T.writable = !0), Object.defineProperty(I, T.key, T);
                    }
                }(L.prototype, D), L;
            }();
        },
        "./src/loader/load-stats.ts": function(F, C, v) {
            v.r(C), v.d(C, "LoadStats", function() {
                return k;
            });
            var k = function() {
                this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, 
                this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                    start: 0,
                    first: 0,
                    end: 0
                }, this.parsing = {
                    start: 0,
                    end: 0
                }, this.buffering = {
                    start: 0,
                    first: 0,
                    end: 0
                };
            };
        },
        "./src/loader/m3u8-parser.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return t;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./node_modules/url-toolkit/src/url-toolkit.js"), L = v("./src/loader/fragment.ts"), D = v("./src/loader/level-details.ts"), I = v("./src/loader/level-key.ts"), A = v("./src/utils/attr-list.ts"), d = v("./src/utils/logger.ts"), T = v("./src/utils/codecs.ts"), p = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g, y = /#EXT-X-MEDIA:(.*)/g, b = new RegExp([ /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source ].join("|"), "g"), E = new RegExp([ /#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source ].join("|")), r = /\.(mp4|m4s|m4v|m4a)$/i, t = function() {
                function i() {}
                return i.findGroup = function(a, f) {
                    for (var g = 0; g < a.length; g++) {
                        var n = a[g];
                        if (n.id === f) return n;
                    }
                }, i.convertAVC1ToAVCOTI = function(a) {
                    var f = a.split(".");
                    if (f.length > 2) {
                        var g = f.shift() + ".";
                        return (g += parseInt(f.shift()).toString(16)) + ("000" + parseInt(f.shift()).toString(16)).substr(-4);
                    }
                    return a;
                }, i.resolve = function(a, f) {
                    return S.buildAbsoluteURL(f, a, {
                        alwaysNormalize: !0
                    });
                }, i.parseMasterPlaylist = function(a, f) {
                    var g, n = [], c = {}, u = !1;
                    for (p.lastIndex = 0; (g = p.exec(a)) != null; ) if (g[1]) {
                        var s = new A.AttrList(g[1]), e = {
                            attrs: s,
                            bitrate: s.decimalInteger("AVERAGE-BANDWIDTH") || s.decimalInteger("BANDWIDTH"),
                            name: s.NAME,
                            url: i.resolve(g[2], f)
                        }, m = s.decimalResolution("RESOLUTION");
                        m && (e.width = m.width, e.height = m.height), l((s.CODECS || "").split(/[ ,]+/).filter(function(R) {
                            return R;
                        }), e), e.videoCodec && e.videoCodec.indexOf("avc1") !== -1 && (e.videoCodec = i.convertAVC1ToAVCOTI(e.videoCodec)), 
                        n.push(e);
                    } else if (g[3]) {
                        var _ = new A.AttrList(g[3]);
                        _["DATA-ID"] && (u = !0, c[_["DATA-ID"]] = _);
                    }
                    return {
                        levels: n,
                        sessionData: u ? c : null
                    };
                }, i.parseMasterPlaylistMedia = function(a, f, g, n) {
                    var c;
                    n === void 0 && (n = []);
                    var u = [], s = 0;
                    for (y.lastIndex = 0; (c = y.exec(a)) !== null; ) {
                        var e = new A.AttrList(c[1]);
                        if (e.TYPE === g) {
                            var m = {
                                attrs: e,
                                bitrate: 0,
                                id: s++,
                                groupId: e["GROUP-ID"],
                                instreamId: e["INSTREAM-ID"],
                                name: e.NAME || e.LANGUAGE || "",
                                type: g,
                                default: e.bool("DEFAULT"),
                                autoselect: e.bool("AUTOSELECT"),
                                forced: e.bool("FORCED"),
                                lang: e.LANGUAGE,
                                url: e.URI ? i.resolve(e.URI, f) : ""
                            };
                            if (n.length) {
                                var _ = i.findGroup(n, m.groupId) || n[0];
                                o(m, _, "audioCodec"), o(m, _, "textCodec");
                            }
                            u.push(m);
                        }
                    }
                    return u;
                }, i.parseLevelPlaylist = function(a, f, g, n, c) {
                    var u, s, e, m = new D.LevelDetails(f), _ = m.fragments, R = null, O = 0, x = 0, w = 0, P = 0, N = null, M = new L.Fragment(n, f), B = -1, U = !1;
                    for (b.lastIndex = 0, m.m3u8 = a; (u = b.exec(a)) !== null; ) {
                        U && (U = !1, (M = new L.Fragment(n, f)).start = w, M.sn = O, 
                        M.cc = P, M.level = g, R && (M.initSegment = R, M.rawProgramDateTime = R.rawProgramDateTime));
                        var G = u[1];
                        if (G) {
                            M.duration = parseFloat(G);
                            var V = (" " + u[2]).slice(1);
                            M.title = V || null, M.tagList.push(V ? [ "INF", G, V ] : [ "INF", G ]);
                        } else if (u[3]) Object(k.isFiniteNumber)(M.duration) && (M.start = w, 
                        e && (M.levelkey = e), M.sn = O, M.level = g, M.cc = P, 
                        M.urlId = c, _.push(M), M.relurl = (" " + u[3]).slice(1), 
                        h(M, N), N = M, w += M.duration, O++, x = 0, U = !0); else if (u[4]) {
                            var H = (" " + u[4]).slice(1);
                            N ? M.setByteRange(H, N) : M.setByteRange(H);
                        } else if (u[5]) M.rawProgramDateTime = (" " + u[5]).slice(1), 
                        M.tagList.push([ "PROGRAM-DATE-TIME", M.rawProgramDateTime ]), 
                        B === -1 && (B = _.length); else {
                            if (!(u = u[0].match(E))) {
                                d.logger.warn("No matches on slow regex match for level playlist!");
                                continue;
                            }
                            for (s = 1; s < u.length && u[s] === void 0; s++);
                            var W = (" " + u[s]).slice(1), Y = (" " + u[s + 1]).slice(1), q = u[s + 2] ? (" " + u[s + 2]).slice(1) : "";
                            switch (W) {
                              case "PLAYLIST-TYPE":
                                m.type = Y.toUpperCase();
                                break;

                              case "MEDIA-SEQUENCE":
                                O = m.startSN = parseInt(Y);
                                break;

                              case "SKIP":
                                var Q = new A.AttrList(Y), J = Q.decimalInteger("SKIPPED-SEGMENTS");
                                if (Object(k.isFiniteNumber)(J)) {
                                    m.skippedSegments = J;
                                    for (var rt = J; rt--; ) _.unshift(null);
                                    O += J;
                                }
                                var Z = Q.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                Z && (m.recentlyRemovedDateranges = Z.split("\t"));
                                break;

                              case "TARGETDURATION":
                                m.targetduration = parseFloat(Y);
                                break;

                              case "VERSION":
                                m.version = parseInt(Y);
                                break;

                              case "EXTM3U":
                                break;

                              case "ENDLIST":
                                m.live = !1;
                                break;

                              case "#":
                                (Y || q) && M.tagList.push(q ? [ Y, q ] : [ Y ]);
                                break;

                              case "DIS":
                                P++;

                              case "GAP":
                                M.tagList.push([ W ]);
                                break;

                              case "BITRATE":
                                M.tagList.push([ W, Y ]);
                                break;

                              case "DISCONTINUITY-SEQ":
                                P = parseInt(Y);
                                break;

                              case "KEY":
                                var st, $ = new A.AttrList(Y), tt = $.enumeratedString("METHOD"), nt = $.URI, it = $.hexadecimalInteger("IV"), dt = $.enumeratedString("KEYFORMATVERSIONS"), pt = $.enumeratedString("KEYID"), gt = (st = $.enumeratedString("KEYFORMAT")) != null ? st : "identity";
                                if ([ "com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine" ].indexOf(gt) > -1) {
                                    d.logger.warn("Keyformat " + gt + " is not supported from the manifest");
                                    continue;
                                }
                                if (gt !== "identity") continue;
                                tt && (e = I.LevelKey.fromURL(f, nt), nt && [ "AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC" ].indexOf(tt) >= 0 && (e.method = tt, 
                                e.keyFormat = gt, pt && (e.keyID = pt), dt && (e.keyFormatVersions = dt), 
                                e.iv = it));
                                break;

                              case "START":
                                var mt = new A.AttrList(Y).decimalFloatingPoint("TIME-OFFSET");
                                Object(k.isFiniteNumber)(mt) && (m.startTimeOffset = mt);
                                break;

                              case "MAP":
                                var lt = new A.AttrList(Y);
                                M.relurl = lt.URI, lt.BYTERANGE && M.setByteRange(lt.BYTERANGE), 
                                M.level = g, M.sn = "initSegment", e && (M.levelkey = e), 
                                M.initSegment = null, R = M, U = !0;
                                break;

                              case "SERVER-CONTROL":
                                var ot = new A.AttrList(Y);
                                m.canBlockReload = ot.bool("CAN-BLOCK-RELOAD"), 
                                m.canSkipUntil = ot.optionalFloat("CAN-SKIP-UNTIL", 0), 
                                m.canSkipDateRanges = m.canSkipUntil > 0 && ot.bool("CAN-SKIP-DATERANGES"), 
                                m.partHoldBack = ot.optionalFloat("PART-HOLD-BACK", 0), 
                                m.holdBack = ot.optionalFloat("HOLD-BACK", 0);
                                break;

                              case "PART-INF":
                                var Nt = new A.AttrList(Y);
                                m.partTarget = Nt.decimalFloatingPoint("PART-TARGET");
                                break;

                              case "PART":
                                var yt = m.partList;
                                yt || (yt = m.partList = []);
                                var Lt = x > 0 ? yt[yt.length - 1] : void 0, Bt = x++, Rt = new L.Part(new A.AttrList(Y), M, f, Bt, Lt);
                                yt.push(Rt), M.duration += Rt.duration;
                                break;

                              case "PRELOAD-HINT":
                                var St = new A.AttrList(Y);
                                m.preloadHint = St;
                                break;

                              case "RENDITION-REPORT":
                                var Ht = new A.AttrList(Y);
                                m.renditionReports = m.renditionReports || [], m.renditionReports.push(Ht);
                                break;

                              default:
                                d.logger.warn("line parsed but not handled: " + u);
                            }
                        }
                    }
                    N && !N.relurl ? (_.pop(), w -= N.duration, m.partList && (m.fragmentHint = N)) : m.partList && (h(M, N), 
                    M.cc = P, m.fragmentHint = M);
                    var Ut = _.length, bt = _[0], Wt = _[Ut - 1];
                    if ((w += m.skippedSegments * m.targetduration) > 0 && Ut && Wt) {
                        m.averagetargetduration = w / Ut;
                        var Gt = Wt.sn;
                        m.endSN = Gt !== "initSegment" ? Gt : 0, bt && (m.startCC = bt.cc, 
                        bt.initSegment || m.fragments.every(function(_t) {
                            return _t.relurl && (At = _t.relurl, r.test((It = (Et = S.parseURL(At)) === null || Et === void 0 ? void 0 : Et.path) != null ? It : ""));
                            var At, It, Et;
                        }) && (d.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), 
                        (M = new L.Fragment(n, f)).relurl = Wt.relurl, M.level = g, 
                        M.sn = "initSegment", bt.initSegment = M, m.needSidxRanges = !0));
                    } else m.endSN = 0, m.startCC = 0;
                    return m.fragmentHint && (w += m.fragmentHint.duration), m.totalduration = w, 
                    m.endCC = P, B > 0 && function(_t, At) {
                        for (var It = _t[At], Et = At; Et--; ) {
                            var Ct = _t[Et];
                            if (!Ct) return;
                            Ct.programDateTime = It.programDateTime - 1e3 * Ct.duration, 
                            It = Ct;
                        }
                    }(_, B), m;
                }, i;
            }();
            function l(i, a) {
                [ "video", "audio", "text" ].forEach(function(f) {
                    var g = i.filter(function(c) {
                        return Object(T.isCodecType)(c, f);
                    });
                    if (g.length) {
                        var n = g.filter(function(c) {
                            return c.lastIndexOf("avc1", 0) === 0 || c.lastIndexOf("mp4a", 0) === 0;
                        });
                        a[f + "Codec"] = n.length > 0 ? n[0] : g[0], i = i.filter(function(c) {
                            return g.indexOf(c) === -1;
                        });
                    }
                }), a.unknownCodecs = i;
            }
            function o(i, a, f) {
                var g = a[f];
                g && (i[f] = g);
            }
            function h(i, a) {
                i.rawProgramDateTime ? i.programDateTime = Date.parse(i.rawProgramDateTime) : a != null && a.programDateTime && (i.programDateTime = a.endProgramDateTime), 
                Object(k.isFiniteNumber)(i.programDateTime) || (i.programDateTime = null, 
                i.rawProgramDateTime = null);
            }
        },
        "./src/loader/playlist-loader.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/polyfills/number.ts"), S = v("./src/events.ts"), L = v("./src/errors.ts"), D = v("./src/utils/logger.ts"), I = v("./src/utils/mp4-tools.ts"), A = v("./src/loader/m3u8-parser.ts"), d = v("./src/types/loader.ts"), T = v("./src/utils/attr-list.ts");
            function p(b, E) {
                var r = b.url;
                return r !== void 0 && r.indexOf("data:") !== 0 || (r = E.url), 
                r;
            }
            var y = function() {
                function b(r) {
                    this.hls = void 0, this.loaders = Object.create(null), this.hls = r, 
                    this.registerListeners();
                }
                var E = b.prototype;
                return E.registerListeners = function() {
                    var r = this.hls;
                    r.on(S.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    r.on(S.Events.LEVEL_LOADING, this.onLevelLoading, this), r.on(S.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), 
                    r.on(S.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
                }, E.unregisterListeners = function() {
                    var r = this.hls;
                    r.off(S.Events.MANIFEST_LOADING, this.onManifestLoading, this), 
                    r.off(S.Events.LEVEL_LOADING, this.onLevelLoading, this), r.off(S.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), 
                    r.off(S.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
                }, E.createInternalLoader = function(r) {
                    var t = this.hls.config, l = t.pLoader, o = t.loader, h = new (l || o)(t);
                    return r.loader = h, this.loaders[r.type] = h, h;
                }, E.getInternalLoader = function(r) {
                    return this.loaders[r.type];
                }, E.resetInternalLoader = function(r) {
                    this.loaders[r] && delete this.loaders[r];
                }, E.destroyInternalLoaders = function() {
                    for (var r in this.loaders) {
                        var t = this.loaders[r];
                        t && t.destroy(), this.resetInternalLoader(r);
                    }
                }, E.destroy = function() {
                    this.unregisterListeners(), this.destroyInternalLoaders();
                }, E.onManifestLoading = function(r, t) {
                    var l = t.url;
                    this.load({
                        id: null,
                        groupId: null,
                        level: 0,
                        responseType: "text",
                        type: d.PlaylistContextType.MANIFEST,
                        url: l,
                        deliveryDirectives: null
                    });
                }, E.onLevelLoading = function(r, t) {
                    var l = t.id, o = t.level, h = t.url, i = t.deliveryDirectives;
                    this.load({
                        id: l,
                        groupId: null,
                        level: o,
                        responseType: "text",
                        type: d.PlaylistContextType.LEVEL,
                        url: h,
                        deliveryDirectives: i
                    });
                }, E.onAudioTrackLoading = function(r, t) {
                    var l = t.id, o = t.groupId, h = t.url, i = t.deliveryDirectives;
                    this.load({
                        id: l,
                        groupId: o,
                        level: null,
                        responseType: "text",
                        type: d.PlaylistContextType.AUDIO_TRACK,
                        url: h,
                        deliveryDirectives: i
                    });
                }, E.onSubtitleTrackLoading = function(r, t) {
                    var l = t.id, o = t.groupId, h = t.url, i = t.deliveryDirectives;
                    this.load({
                        id: l,
                        groupId: o,
                        level: null,
                        responseType: "text",
                        type: d.PlaylistContextType.SUBTITLE_TRACK,
                        url: h,
                        deliveryDirectives: i
                    });
                }, E.load = function(r) {
                    var t, l, o, h, i, a, f = this.hls.config, g = this.getInternalLoader(r);
                    if (g) {
                        var n = g.context;
                        if (n && n.url === r.url) return void D.logger.trace("[playlist-loader]: playlist request ongoing");
                        D.logger.log("[playlist-loader]: aborting previous loader for type: " + r.type), 
                        g.abort();
                    }
                    switch (r.type) {
                      case d.PlaylistContextType.MANIFEST:
                        l = f.manifestLoadingMaxRetry, o = f.manifestLoadingTimeOut, 
                        h = f.manifestLoadingRetryDelay, i = f.manifestLoadingMaxRetryTimeout;
                        break;

                      case d.PlaylistContextType.LEVEL:
                      case d.PlaylistContextType.AUDIO_TRACK:
                      case d.PlaylistContextType.SUBTITLE_TRACK:
                        l = 0, o = f.levelLoadingTimeOut;
                        break;

                      default:
                        l = f.levelLoadingMaxRetry, o = f.levelLoadingTimeOut, h = f.levelLoadingRetryDelay, 
                        i = f.levelLoadingMaxRetryTimeout;
                    }
                    if (g = this.createInternalLoader(r), (t = r.deliveryDirectives) !== null && t !== void 0 && t.part && (r.type === d.PlaylistContextType.LEVEL && r.level !== null ? a = this.hls.levels[r.level].details : r.type === d.PlaylistContextType.AUDIO_TRACK && r.id !== null ? a = this.hls.audioTracks[r.id].details : r.type === d.PlaylistContextType.SUBTITLE_TRACK && r.id !== null && (a = this.hls.subtitleTracks[r.id].details), 
                    a)) {
                        var c = a.partTarget, u = a.targetduration;
                        c && u && (o = Math.min(1e3 * Math.max(3 * c, .8 * u), o));
                    }
                    var s = {
                        timeout: o,
                        maxRetry: l,
                        retryDelay: h,
                        maxRetryDelay: i,
                        highWaterMark: 0
                    }, e = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this)
                    };
                    g.load(r, s, e);
                }, E.loadsuccess = function(r, t, l, o) {
                    if (o === void 0 && (o = null), l.isSidxRequest) return this.handleSidxRequest(r, l), 
                    void this.handlePlaylistLoaded(r, t, l, o);
                    this.resetInternalLoader(l.type);
                    var h = r.data;
                    h.indexOf("#EXTM3U") === 0 ? (t.parsing.start = performance.now(), 
                    h.indexOf("#EXTINF:") > 0 || h.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(r, t, l, o) : this.handleMasterPlaylist(r, t, l, o)) : this.handleManifestParsingError(r, l, "no EXTM3U delimiter", o);
                }, E.loaderror = function(r, t, l) {
                    l === void 0 && (l = null), this.handleNetworkError(t, l, !1, r);
                }, E.loadtimeout = function(r, t, l) {
                    l === void 0 && (l = null), this.handleNetworkError(t, l, !0);
                }, E.handleMasterPlaylist = function(r, t, l, o) {
                    var h = this.hls, i = r.data, a = p(r, l), f = A.default.parseMasterPlaylist(i, a), g = f.levels, n = f.sessionData;
                    if (g.length) {
                        var c = g.map(function(_) {
                            return {
                                id: _.attrs.AUDIO,
                                audioCodec: _.audioCodec
                            };
                        }), u = g.map(function(_) {
                            return {
                                id: _.attrs.SUBTITLES,
                                textCodec: _.textCodec
                            };
                        }), s = A.default.parseMasterPlaylistMedia(i, a, "AUDIO", c), e = A.default.parseMasterPlaylistMedia(i, a, "SUBTITLES", u), m = A.default.parseMasterPlaylistMedia(i, a, "CLOSED-CAPTIONS");
                        s.length && (s.some(function(_) {
                            return !_.url;
                        }) || !g[0].audioCodec || g[0].attrs.AUDIO || (D.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), 
                        s.unshift({
                            type: "main",
                            name: "main",
                            default: !1,
                            autoselect: !1,
                            forced: !1,
                            id: -1,
                            attrs: new T.AttrList({}),
                            bitrate: 0,
                            url: ""
                        }))), h.trigger(S.Events.MANIFEST_LOADED, {
                            levels: g,
                            audioTracks: s,
                            subtitles: e,
                            captions: m,
                            url: a,
                            stats: t,
                            networkDetails: o,
                            sessionData: n
                        });
                    } else this.handleManifestParsingError(r, l, "no level found in manifest", o);
                }, E.handleTrackOrLevelPlaylist = function(r, t, l, o) {
                    var h = this.hls, i = l.id, a = l.level, f = l.type, g = p(r, l), n = Object(k.isFiniteNumber)(i) ? i : 0, c = Object(k.isFiniteNumber)(a) ? a : n, u = function(R) {
                        switch (R.type) {
                          case d.PlaylistContextType.AUDIO_TRACK:
                            return d.PlaylistLevelType.AUDIO;

                          case d.PlaylistContextType.SUBTITLE_TRACK:
                            return d.PlaylistLevelType.SUBTITLE;

                          default:
                            return d.PlaylistLevelType.MAIN;
                        }
                    }(l), s = A.default.parseLevelPlaylist(r.data, g, c, u, n);
                    if (s.fragments.length) {
                        if (f === d.PlaylistContextType.MANIFEST) {
                            var e = {
                                attrs: new T.AttrList({}),
                                bitrate: 0,
                                details: s,
                                name: "",
                                url: g
                            };
                            h.trigger(S.Events.MANIFEST_LOADED, {
                                levels: [ e ],
                                audioTracks: [],
                                url: g,
                                stats: t,
                                networkDetails: o,
                                sessionData: null
                            });
                        }
                        if (t.parsing.end = performance.now(), s.needSidxRanges) {
                            var m, _ = (m = s.fragments[0].initSegment) === null || m === void 0 ? void 0 : m.url;
                            this.load({
                                url: _,
                                isSidxRequest: !0,
                                type: f,
                                level: a,
                                levelDetails: s,
                                id: i,
                                groupId: null,
                                rangeStart: 0,
                                rangeEnd: 2048,
                                responseType: "arraybuffer",
                                deliveryDirectives: null
                            });
                        } else l.levelDetails = s, this.handlePlaylistLoaded(r, t, l, o);
                    } else h.trigger(S.Events.ERROR, {
                        type: L.ErrorTypes.NETWORK_ERROR,
                        details: L.ErrorDetails.LEVEL_EMPTY_ERROR,
                        fatal: !1,
                        url: g,
                        reason: "no fragments found in level",
                        level: typeof l.level == "number" ? l.level : void 0
                    });
                }, E.handleSidxRequest = function(r, t) {
                    var l = Object(I.parseSegmentIndex)(new Uint8Array(r.data));
                    if (l) {
                        var o = l.references, h = t.levelDetails;
                        o.forEach(function(i, a) {
                            var f = i.info, g = h.fragments[a];
                            g.byteRange.length === 0 && g.setByteRange(String(1 + f.end - f.start) + "@" + String(f.start)), 
                            g.initSegment && g.initSegment.setByteRange(String(l.moovEndOffset) + "@0");
                        });
                    }
                }, E.handleManifestParsingError = function(r, t, l, o) {
                    this.hls.trigger(S.Events.ERROR, {
                        type: L.ErrorTypes.NETWORK_ERROR,
                        details: L.ErrorDetails.MANIFEST_PARSING_ERROR,
                        fatal: t.type === d.PlaylistContextType.MANIFEST,
                        url: r.url,
                        reason: l,
                        response: r,
                        context: t,
                        networkDetails: o
                    });
                }, E.handleNetworkError = function(r, t, l, o) {
                    l === void 0 && (l = !1), D.logger.warn("[playlist-loader]: A network " + (l ? "timeout" : "error") + " occurred while loading " + r.type + " level: " + r.level + " id: " + r.id + ' group-id: "' + r.groupId + '"');
                    var h = L.ErrorDetails.UNKNOWN, i = !1, a = this.getInternalLoader(r);
                    switch (r.type) {
                      case d.PlaylistContextType.MANIFEST:
                        h = l ? L.ErrorDetails.MANIFEST_LOAD_TIMEOUT : L.ErrorDetails.MANIFEST_LOAD_ERROR, 
                        i = !0;
                        break;

                      case d.PlaylistContextType.LEVEL:
                        h = l ? L.ErrorDetails.LEVEL_LOAD_TIMEOUT : L.ErrorDetails.LEVEL_LOAD_ERROR, 
                        i = !1;
                        break;

                      case d.PlaylistContextType.AUDIO_TRACK:
                        h = l ? L.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : L.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, 
                        i = !1;
                        break;

                      case d.PlaylistContextType.SUBTITLE_TRACK:
                        h = l ? L.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : L.ErrorDetails.SUBTITLE_LOAD_ERROR, 
                        i = !1;
                    }
                    a && this.resetInternalLoader(r.type);
                    var f = {
                        type: L.ErrorTypes.NETWORK_ERROR,
                        details: h,
                        fatal: i,
                        url: r.url,
                        loader: a,
                        context: r,
                        networkDetails: t
                    };
                    o && (f.response = o), this.hls.trigger(S.Events.ERROR, f);
                }, E.handlePlaylistLoaded = function(r, t, l, o) {
                    var h = l.type, i = l.level, a = l.id, f = l.groupId, g = l.loader, n = l.levelDetails, c = l.deliveryDirectives;
                    if (n != null && n.targetduration) {
                        if (g) switch (n.live && (g.getCacheAge && (n.ageHeader = g.getCacheAge() || 0), 
                        g.getCacheAge && !isNaN(n.ageHeader) || (n.ageHeader = 0)), 
                        h) {
                          case d.PlaylistContextType.MANIFEST:
                          case d.PlaylistContextType.LEVEL:
                            this.hls.trigger(S.Events.LEVEL_LOADED, {
                                details: n,
                                level: i || 0,
                                id: a || 0,
                                stats: t,
                                networkDetails: o,
                                deliveryDirectives: c
                            });
                            break;

                          case d.PlaylistContextType.AUDIO_TRACK:
                            this.hls.trigger(S.Events.AUDIO_TRACK_LOADED, {
                                details: n,
                                id: a || 0,
                                groupId: f || "",
                                stats: t,
                                networkDetails: o,
                                deliveryDirectives: c
                            });
                            break;

                          case d.PlaylistContextType.SUBTITLE_TRACK:
                            this.hls.trigger(S.Events.SUBTITLE_TRACK_LOADED, {
                                details: n,
                                id: a || 0,
                                groupId: f || "",
                                stats: t,
                                networkDetails: o,
                                deliveryDirectives: c
                            });
                        }
                    } else this.handleManifestParsingError(r, l, "invalid target duration", o);
                }, b;
            }();
            C.default = y;
        },
        "./src/polyfills/number.ts": function(F, C, v) {
            v.r(C), v.d(C, "isFiniteNumber", function() {
                return k;
            }), v.d(C, "MAX_SAFE_INTEGER", function() {
                return S;
            });
            var k = Number.isFinite || function(L) {
                return typeof L == "number" && isFinite(L);
            }, S = Number.MAX_SAFE_INTEGER || 9007199254740991;
        },
        "./src/remux/aac-helper.ts": function(F, C, v) {
            v.r(C);
            var k = function() {
                function S() {}
                return S.getSilentFrame = function(L, D) {
                    if (L === "mp4a.40.2") {
                        if (D === 1) return new Uint8Array([ 0, 200, 0, 128, 35, 128 ]);
                        if (D === 2) return new Uint8Array([ 33, 0, 73, 144, 2, 25, 0, 35, 128 ]);
                        if (D === 3) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142 ]);
                        if (D === 4) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56 ]);
                        if (D === 5) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56 ]);
                        if (D === 6) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224 ]);
                    } else {
                        if (D === 1) return new Uint8Array([ 1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94 ]);
                        if (D === 2) return new Uint8Array([ 1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94 ]);
                        if (D === 3) return new Uint8Array([ 1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94 ]);
                    }
                }, S;
            }();
            C.default = k;
        },
        "./src/remux/mp4-generator.ts": function(F, C, v) {
            v.r(C);
            var k = Math.pow(2, 32) - 1, S = function() {
                function L() {}
                return L.init = function() {
                    var D;
                    for (D in L.types = {
                        avc1: [],
                        avcC: [],
                        btrt: [],
                        dinf: [],
                        dref: [],
                        esds: [],
                        ftyp: [],
                        hdlr: [],
                        mdat: [],
                        mdhd: [],
                        mdia: [],
                        mfhd: [],
                        minf: [],
                        moof: [],
                        moov: [],
                        mp4a: [],
                        ".mp3": [],
                        mvex: [],
                        mvhd: [],
                        pasp: [],
                        sdtp: [],
                        stbl: [],
                        stco: [],
                        stsc: [],
                        stsd: [],
                        stsz: [],
                        stts: [],
                        tfdt: [],
                        tfhd: [],
                        traf: [],
                        trak: [],
                        trun: [],
                        trex: [],
                        tkhd: [],
                        vmhd: [],
                        smhd: []
                    }, L.types) L.types.hasOwnProperty(D) && (L.types[D] = [ D.charCodeAt(0), D.charCodeAt(1), D.charCodeAt(2), D.charCodeAt(3) ]);
                    var I = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0 ]), A = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0 ]);
                    L.HDLR_TYPES = {
                        video: I,
                        audio: A
                    };
                    var d = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1 ]), T = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0 ]);
                    L.STTS = L.STSC = L.STCO = T, L.STSZ = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]), 
                    L.VMHD = new Uint8Array([ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ]), 
                    L.SMHD = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0 ]), L.STSD = new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1 ]);
                    var p = new Uint8Array([ 105, 115, 111, 109 ]), y = new Uint8Array([ 97, 118, 99, 49 ]), b = new Uint8Array([ 0, 0, 0, 1 ]);
                    L.FTYP = L.box(L.types.ftyp, p, b, p, y), L.DINF = L.box(L.types.dinf, L.box(L.types.dref, d));
                }, L.box = function(D) {
                    for (var I = 8, A = arguments.length, d = new Array(A > 1 ? A - 1 : 0), T = 1; T < A; T++) d[T - 1] = arguments[T];
                    for (var p = d.length, y = p; p--; ) I += d[p].byteLength;
                    var b = new Uint8Array(I);
                    for (b[0] = I >> 24 & 255, b[1] = I >> 16 & 255, b[2] = I >> 8 & 255, 
                    b[3] = 255 & I, b.set(D, 4), p = 0, I = 8; p < y; p++) b.set(d[p], I), 
                    I += d[p].byteLength;
                    return b;
                }, L.hdlr = function(D) {
                    return L.box(L.types.hdlr, L.HDLR_TYPES[D]);
                }, L.mdat = function(D) {
                    return L.box(L.types.mdat, D);
                }, L.mdhd = function(D, I) {
                    I *= D;
                    var A = Math.floor(I / (k + 1)), d = Math.floor(I % (k + 1));
                    return L.box(L.types.mdhd, new Uint8Array([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, D >> 24 & 255, D >> 16 & 255, D >> 8 & 255, 255 & D, A >> 24, A >> 16 & 255, A >> 8 & 255, 255 & A, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, 85, 196, 0, 0 ]));
                }, L.mdia = function(D) {
                    return L.box(L.types.mdia, L.mdhd(D.timescale, D.duration), L.hdlr(D.type), L.minf(D));
                }, L.mfhd = function(D) {
                    return L.box(L.types.mfhd, new Uint8Array([ 0, 0, 0, 0, D >> 24, D >> 16 & 255, D >> 8 & 255, 255 & D ]));
                }, L.minf = function(D) {
                    return D.type === "audio" ? L.box(L.types.minf, L.box(L.types.smhd, L.SMHD), L.DINF, L.stbl(D)) : L.box(L.types.minf, L.box(L.types.vmhd, L.VMHD), L.DINF, L.stbl(D));
                }, L.moof = function(D, I, A) {
                    return L.box(L.types.moof, L.mfhd(D), L.traf(A, I));
                }, L.moov = function(D) {
                    for (var I = D.length, A = []; I--; ) A[I] = L.trak(D[I]);
                    return L.box.apply(null, [ L.types.moov, L.mvhd(D[0].timescale, D[0].duration) ].concat(A).concat(L.mvex(D)));
                }, L.mvex = function(D) {
                    for (var I = D.length, A = []; I--; ) A[I] = L.trex(D[I]);
                    return L.box.apply(null, [ L.types.mvex ].concat(A));
                }, L.mvhd = function(D, I) {
                    I *= D;
                    var A = Math.floor(I / (k + 1)), d = Math.floor(I % (k + 1)), T = new Uint8Array([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, D >> 24 & 255, D >> 16 & 255, D >> 8 & 255, 255 & D, A >> 24, A >> 16 & 255, A >> 8 & 255, 255 & A, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255 ]);
                    return L.box(L.types.mvhd, T);
                }, L.sdtp = function(D) {
                    var I, A, d = D.samples || [], T = new Uint8Array(4 + d.length);
                    for (I = 0; I < d.length; I++) A = d[I].flags, T[I + 4] = A.dependsOn << 4 | A.isDependedOn << 2 | A.hasRedundancy;
                    return L.box(L.types.sdtp, T);
                }, L.stbl = function(D) {
                    return L.box(L.types.stbl, L.stsd(D), L.box(L.types.stts, L.STTS), L.box(L.types.stsc, L.STSC), L.box(L.types.stsz, L.STSZ), L.box(L.types.stco, L.STCO));
                }, L.avc1 = function(D) {
                    var I, A, d, T = [], p = [];
                    for (I = 0; I < D.sps.length; I++) d = (A = D.sps[I]).byteLength, 
                    T.push(d >>> 8 & 255), T.push(255 & d), T = T.concat(Array.prototype.slice.call(A));
                    for (I = 0; I < D.pps.length; I++) d = (A = D.pps[I]).byteLength, 
                    p.push(d >>> 8 & 255), p.push(255 & d), p = p.concat(Array.prototype.slice.call(A));
                    var y = L.box(L.types.avcC, new Uint8Array([ 1, T[3], T[4], T[5], 255, 224 | D.sps.length ].concat(T).concat([ D.pps.length ]).concat(p))), b = D.width, E = D.height, r = D.pixelRatio[0], t = D.pixelRatio[1];
                    return L.box(L.types.avc1, new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, b >> 8 & 255, 255 & b, E >> 8 & 255, 255 & E, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17 ]), y, L.box(L.types.btrt, new Uint8Array([ 0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192 ])), L.box(L.types.pasp, new Uint8Array([ r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t ])));
                }, L.esds = function(D) {
                    var I = D.config.length;
                    return new Uint8Array([ 0, 0, 0, 0, 3, 23 + I, 0, 1, 0, 4, 15 + I, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5 ].concat([ I ]).concat(D.config).concat([ 6, 1, 2 ]));
                }, L.mp4a = function(D) {
                    var I = D.samplerate;
                    return L.box(L.types.mp4a, new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, D.channelCount, 0, 16, 0, 0, 0, 0, I >> 8 & 255, 255 & I, 0, 0 ]), L.box(L.types.esds, L.esds(D)));
                }, L.mp3 = function(D) {
                    var I = D.samplerate;
                    return L.box(L.types[".mp3"], new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, D.channelCount, 0, 16, 0, 0, 0, 0, I >> 8 & 255, 255 & I, 0, 0 ]));
                }, L.stsd = function(D) {
                    return D.type === "audio" ? D.isAAC || D.codec !== "mp3" ? L.box(L.types.stsd, L.STSD, L.mp4a(D)) : L.box(L.types.stsd, L.STSD, L.mp3(D)) : L.box(L.types.stsd, L.STSD, L.avc1(D));
                }, L.tkhd = function(D) {
                    var I = D.id, A = D.duration * D.timescale, d = D.width, T = D.height, p = Math.floor(A / (k + 1)), y = Math.floor(A % (k + 1));
                    return L.box(L.types.tkhd, new Uint8Array([ 1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, I >> 24 & 255, I >> 16 & 255, I >> 8 & 255, 255 & I, 0, 0, 0, 0, p >> 24, p >> 16 & 255, p >> 8 & 255, 255 & p, y >> 24, y >> 16 & 255, y >> 8 & 255, 255 & y, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, d >> 8 & 255, 255 & d, 0, 0, T >> 8 & 255, 255 & T, 0, 0 ]));
                }, L.traf = function(D, I) {
                    var A = L.sdtp(D), d = D.id, T = Math.floor(I / (k + 1)), p = Math.floor(I % (k + 1));
                    return L.box(L.types.traf, L.box(L.types.tfhd, new Uint8Array([ 0, 0, 0, 0, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d ])), L.box(L.types.tfdt, new Uint8Array([ 1, 0, 0, 0, T >> 24, T >> 16 & 255, T >> 8 & 255, 255 & T, p >> 24, p >> 16 & 255, p >> 8 & 255, 255 & p ])), L.trun(D, A.length + 16 + 20 + 8 + 16 + 8 + 8), A);
                }, L.trak = function(D) {
                    return D.duration = D.duration || 4294967295, L.box(L.types.trak, L.tkhd(D), L.mdia(D));
                }, L.trex = function(D) {
                    var I = D.id;
                    return L.box(L.types.trex, new Uint8Array([ 0, 0, 0, 0, I >> 24, I >> 16 & 255, I >> 8 & 255, 255 & I, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ]));
                }, L.trun = function(D, I) {
                    var A, d, T, p, y, b, E = D.samples || [], r = E.length, t = 12 + 16 * r, l = new Uint8Array(t);
                    for (I += 8 + t, l.set([ 0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, I >>> 24 & 255, I >>> 16 & 255, I >>> 8 & 255, 255 & I ], 0), 
                    A = 0; A < r; A++) T = (d = E[A]).duration, p = d.size, y = d.flags, 
                    b = d.cts, l.set([ T >>> 24 & 255, T >>> 16 & 255, T >>> 8 & 255, 255 & T, p >>> 24 & 255, p >>> 16 & 255, p >>> 8 & 255, 255 & p, y.isLeading << 2 | y.dependsOn, y.isDependedOn << 6 | y.hasRedundancy << 4 | y.paddingValue << 1 | y.isNonSync, 61440 & y.degradPrio, 15 & y.degradPrio, b >>> 24 & 255, b >>> 16 & 255, b >>> 8 & 255, 255 & b ], 12 + 16 * A);
                    return L.box(L.types.trun, l);
                }, L.initSegment = function(D) {
                    L.types || L.init();
                    var I = L.moov(D), A = new Uint8Array(L.FTYP.byteLength + I.byteLength);
                    return A.set(L.FTYP), A.set(I, L.FTYP.byteLength), A;
                }, L;
            }();
            S.types = void 0, S.HDLR_TYPES = void 0, S.STTS = void 0, S.STSC = void 0, 
            S.STCO = void 0, S.STSZ = void 0, S.VMHD = void 0, S.SMHD = void 0, 
            S.STSD = void 0, S.FTYP = void 0, S.DINF = void 0, C.default = S;
        },
        "./src/remux/mp4-remuxer.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return r;
            }), v.d(C, "normalizePts", function() {
                return t;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/remux/aac-helper.ts"), L = v("./src/remux/mp4-generator.ts"), D = v("./src/events.ts"), I = v("./src/errors.ts"), A = v("./src/utils/logger.ts"), d = v("./src/types/loader.ts"), T = v("./src/utils/timescale-conversion.ts");
            function p() {
                return (p = Object.assign || function(h) {
                    for (var i = 1; i < arguments.length; i++) {
                        var a = arguments[i];
                        for (var f in a) Object.prototype.hasOwnProperty.call(a, f) && (h[f] = a[f]);
                    }
                    return h;
                }).apply(this, arguments);
            }
            var y = null, b = null, E = !1, r = function() {
                function h(a, f, g, n) {
                    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, 
                    this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, 
                    this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = !1, 
                    this.isVideoContiguous = !1, this.observer = a, this.config = f, 
                    this.typeSupported = g, this.ISGenerated = !1, y === null) {
                        var c = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                        y = c ? parseInt(c[1]) : 0;
                    }
                    if (b === null) {
                        var u = navigator.userAgent.match(/Safari\/(\d+)/i);
                        b = u ? parseInt(u[1]) : 0;
                    }
                    E = !!y && y < 75 || !!b && b < 600;
                }
                var i = h.prototype;
                return i.destroy = function() {}, i.resetTimeStamp = function(a) {
                    A.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = a;
                }, i.resetNextTimestamp = function() {
                    A.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, 
                    this.isAudioContiguous = !1;
                }, i.resetInitSegment = function() {
                    A.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1;
                }, i.getVideoStartPts = function(a) {
                    var f = !1, g = a.reduce(function(n, c) {
                        var u = c.pts - n;
                        return u < -4294967296 ? (f = !0, t(n, c.pts)) : u > 0 ? n : c.pts;
                    }, a[0].pts);
                    return f && A.logger.debug("PTS rollover detected"), g;
                }, i.remux = function(a, f, g, n, c, u, s, e) {
                    var m, _, R, O, x, w, P = c, N = c, M = a.pid > -1, B = f.pid > -1, U = f.samples.length, G = a.samples.length > 0, V = U > 1;
                    if ((!M || G) && (!B || V) || this.ISGenerated || s) {
                        this.ISGenerated || (R = this.generateIS(a, f, c));
                        var H = this.isVideoContiguous, W = -1;
                        if (V && (W = function(rt) {
                            for (var Z = 0; Z < rt.length; Z++) if (rt[Z].key) return Z;
                            return -1;
                        }(f.samples), !H && this.config.forceKeyFrameOnDiscontinuity)) if (w = !0, 
                        W > 0) {
                            A.logger.warn("[mp4-remuxer]: Dropped " + W + " out of " + U + " video samples due to a missing keyframe");
                            var Y = this.getVideoStartPts(f.samples);
                            f.samples = f.samples.slice(W), f.dropped += W, N += (f.samples[0].pts - Y) / (f.timescale || 9e4);
                        } else W === -1 && (A.logger.warn("[mp4-remuxer]: No keyframe found out of " + U + " video samples"), 
                        w = !1);
                        if (this.ISGenerated) {
                            if (G && V) {
                                var q = this.getVideoStartPts(f.samples), Q = (t(a.samples[0].pts, q) - q) / f.inputTimeScale;
                                P += Math.max(0, Q), N += Math.max(0, -Q);
                            }
                            if (G) {
                                if (a.samplerate || (A.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), 
                                R = this.generateIS(a, f, c)), _ = this.remuxAudio(a, P, this.isAudioContiguous, u, B || V || e === d.PlaylistLevelType.AUDIO ? N : void 0), 
                                V) {
                                    var J = _ ? _.endPTS - _.startPTS : 0;
                                    f.inputTimeScale || (A.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), 
                                    R = this.generateIS(a, f, c)), m = this.remuxVideo(f, N, H, J);
                                }
                            } else V && (m = this.remuxVideo(f, N, H, 0));
                            m && (m.firstKeyFrame = W, m.independent = W !== -1);
                        }
                    }
                    return this.ISGenerated && (g.samples.length && (x = this.remuxID3(g, c)), 
                    n.samples.length && (O = this.remuxText(n, c))), {
                        audio: _,
                        video: m,
                        initSegment: R,
                        independent: w,
                        text: O,
                        id3: x
                    };
                }, i.generateIS = function(a, f, g) {
                    var n, c, u, s = a.samples, e = f.samples, m = this.typeSupported, _ = {}, R = !Object(k.isFiniteNumber)(this._initPTS), O = "audio/mp4";
                    if (R && (n = c = 1 / 0), a.config && s.length && (a.timescale = a.samplerate, 
                    a.isAAC || (m.mpeg ? (O = "audio/mpeg", a.codec = "") : m.mp3 && (a.codec = "mp3")), 
                    _.audio = {
                        id: "audio",
                        container: O,
                        codec: a.codec,
                        initSegment: !a.isAAC && m.mpeg ? new Uint8Array(0) : L.default.initSegment([ a ]),
                        metadata: {
                            channelCount: a.channelCount
                        }
                    }, R && (u = a.inputTimeScale, n = c = s[0].pts - Math.round(u * g))), 
                    f.sps && f.pps && e.length && (f.timescale = f.inputTimeScale, 
                    _.video = {
                        id: "main",
                        container: "video/mp4",
                        codec: f.codec,
                        initSegment: L.default.initSegment([ f ]),
                        metadata: {
                            width: f.width,
                            height: f.height
                        }
                    }, R)) {
                        u = f.inputTimeScale;
                        var x = this.getVideoStartPts(e), w = Math.round(u * g);
                        c = Math.min(c, t(e[0].dts, x) - w), n = Math.min(n, x - w);
                    }
                    if (Object.keys(_).length) return this.ISGenerated = !0, R && (this._initPTS = n, 
                    this._initDTS = c), {
                        tracks: _,
                        initPTS: n,
                        timescale: u
                    };
                }, i.remuxVideo = function(a, f, g, n) {
                    var c, u, s, e = a.inputTimeScale, m = a.samples, _ = [], R = m.length, O = this._initPTS, x = this.nextAvcDts, w = 8, P = Number.POSITIVE_INFINITY, N = Number.NEGATIVE_INFINITY, M = 0, B = !1;
                    g && x !== null || (x = f * e - (m[0].pts - t(m[0].dts, m[0].pts)));
                    for (var U = 0; U < R; U++) {
                        var G = m[U];
                        G.pts = t(G.pts - O, x), G.dts = t(G.dts - O, x), G.dts > G.pts && (M = Math.max(Math.min(M, G.pts - G.dts), -18e3)), 
                        G.dts < m[U > 0 ? U - 1 : U].dts && (B = !0);
                    }
                    B && m.sort(function(Et, Ct) {
                        var Pr = Et.dts - Ct.dts, Fr = Et.pts - Ct.pts;
                        return Pr || Fr;
                    }), u = m[0].dts, s = m[m.length - 1].dts;
                    var V = Math.round((s - u) / (R - 1));
                    if (M < 0) {
                        if (M < -2 * V) {
                            A.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(T.toMsFromMpegTsClock)(-V, !0) + " ms");
                            for (var H = M, W = 0; W < R; W++) m[W].dts = H = Math.max(H, m[W].pts - V), 
                            m[W].pts = Math.max(H, m[W].pts);
                        } else {
                            A.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(T.toMsFromMpegTsClock)(M, !0) + " ms to overcome this issue");
                            for (var Y = 0; Y < R; Y++) m[Y].dts = m[Y].dts + M;
                        }
                        u = m[0].dts;
                    }
                    if (g) {
                        var q = u - x, Q = q > V;
                        if (Q || q < -1) {
                            Q ? A.logger.warn("AVC: " + Object(T.toMsFromMpegTsClock)(q, !0) + " ms (" + q + "dts) hole between fragments detected, filling it") : A.logger.warn("AVC: " + Object(T.toMsFromMpegTsClock)(-q, !0) + " ms (" + q + "dts) overlapping between fragments detected"), 
                            u = x;
                            var J = m[0].pts - q;
                            m[0].dts = u, m[0].pts = J, A.logger.log("Video: First PTS/DTS adjusted: " + Object(T.toMsFromMpegTsClock)(J, !0) + "/" + Object(T.toMsFromMpegTsClock)(u, !0) + ", delta: " + Object(T.toMsFromMpegTsClock)(q, !0) + " ms");
                        }
                    }
                    E && (u = Math.max(0, u));
                    for (var rt = 0, Z = 0, st = 0; st < R; st++) {
                        for (var $ = m[st], tt = $.units, nt = tt.length, it = 0, dt = 0; dt < nt; dt++) it += tt[dt].data.length;
                        Z += it, rt += nt, $.length = it, $.dts = Math.max($.dts, u), 
                        $.pts = Math.max($.pts, $.dts, 0), P = Math.min($.pts, P), 
                        N = Math.max($.pts, N);
                    }
                    s = m[R - 1].dts;
                    var pt, gt = Z + 4 * rt + 8;
                    try {
                        pt = new Uint8Array(gt);
                    } catch {
                        return void this.observer.emit(D.Events.ERROR, D.Events.ERROR, {
                            type: I.ErrorTypes.MUX_ERROR,
                            details: I.ErrorDetails.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            bytes: gt,
                            reason: "fail allocating video mdat " + gt
                        });
                    }
                    var mt = new DataView(pt.buffer);
                    mt.setUint32(0, gt), pt.set(L.default.types.mdat, 4);
                    for (var lt = 0; lt < R; lt++) {
                        for (var ot = m[lt], Nt = ot.units, yt = 0, Lt = 0, Bt = Nt.length; Lt < Bt; Lt++) {
                            var Rt = Nt[Lt], St = Rt.data, Ht = Rt.data.byteLength;
                            mt.setUint32(w, Ht), w += 4, pt.set(St, w), w += Ht, 
                            yt += 4 + Ht;
                        }
                        if (lt < R - 1) c = m[lt + 1].dts - ot.dts; else {
                            var Ut = this.config, bt = ot.dts - m[lt > 0 ? lt - 1 : lt].dts;
                            if (Ut.stretchShortVideoTrack && this.nextAudioPts !== null) {
                                var Wt = Math.floor(Ut.maxBufferHole * e), Gt = (n ? P + n * e : this.nextAudioPts) - ot.pts;
                                Gt > Wt ? ((c = Gt - bt) < 0 && (c = bt), A.logger.log("[mp4-remuxer]: It is approximately " + Gt / 90 + " ms to the next segment; using duration " + c / 90 + " ms for the last video frame.")) : c = bt;
                            } else c = bt;
                        }
                        var _t = Math.round(ot.pts - ot.dts);
                        _.push(new l(ot.key, c, yt, _t));
                    }
                    if (_.length && y && y < 70) {
                        var At = _[0].flags;
                        At.dependsOn = 2, At.isNonSync = 0;
                    }
                    this.nextAvcDts = x = s + c, this.isVideoContiguous = !0;
                    var It = {
                        data1: L.default.moof(a.sequenceNumber++, u, p({}, a, {
                            samples: _
                        })),
                        data2: pt,
                        startPTS: P / e,
                        endPTS: (N + c) / e,
                        startDTS: u / e,
                        endDTS: x / e,
                        type: "video",
                        hasAudio: !1,
                        hasVideo: !0,
                        nb: _.length,
                        dropped: a.dropped
                    };
                    return a.samples = [], a.dropped = 0, It;
                }, i.remuxAudio = function(a, f, g, n, c) {
                    var u = a.inputTimeScale, s = u / (a.samplerate ? a.samplerate : u), e = a.isAAC ? 1024 : 1152, m = e * s, _ = this._initPTS, R = !a.isAAC && this.typeSupported.mpeg, O = [], x = a.samples, w = R ? 0 : 8, P = this.nextAudioPts || -1, N = f * u;
                    if (this.isAudioContiguous = g = g || x.length && P > 0 && (n && Math.abs(N - P) < 9e3 || Math.abs(t(x[0].pts - _, N) - P) < 20 * m), 
                    x.forEach(function(St) {
                        St.pts = t(St.pts - _, N);
                    }), !g || P < 0) {
                        if (!(x = x.filter(function(St) {
                            return St.pts >= 0;
                        })).length) return;
                        P = c === 0 ? 0 : n ? Math.max(0, N) : x[0].pts;
                    }
                    if (a.isAAC) for (var M = c !== void 0, B = this.config.maxAudioFramesDrift, U = 0, G = P; U < x.length; U++) {
                        var V = x[U], H = V.pts, W = H - G, Y = Math.abs(1e3 * W / u);
                        if (W <= -B * m && M) U === 0 && (A.logger.warn("Audio frame @ " + (H / u).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * W / u) + " ms."), 
                        this.nextAudioPts = P = G = H); else if (W >= B * m && Y < 1e4 && M) {
                            var q = Math.round(W / m);
                            (G = H - q * m) < 0 && (q--, G += m), U === 0 && (this.nextAudioPts = P = G), 
                            A.logger.warn("[mp4-remuxer]: Injecting " + q + " audio frame @ " + (G / u).toFixed(3) + "s due to " + Math.round(1e3 * W / u) + " ms gap.");
                            for (var Q = 0; Q < q; Q++) {
                                var J = Math.max(G, 0), rt = S.default.getSilentFrame(a.manifestCodec || a.codec, a.channelCount);
                                rt || (A.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), 
                                rt = V.unit.subarray()), x.splice(U, 0, {
                                    unit: rt,
                                    pts: J
                                }), G += m, U++;
                            }
                        }
                        V.pts = G, G += m;
                    }
                    for (var Z, st = null, $ = null, tt = 0, nt = x.length; nt--; ) tt += x[nt].unit.byteLength;
                    for (var it = 0, dt = x.length; it < dt; it++) {
                        var pt = x[it], gt = pt.unit, mt = pt.pts;
                        if ($ !== null) O[it - 1].duration = Math.round((mt - $) / s); else {
                            if (g && a.isAAC && (mt = P), st = mt, !(tt > 0)) return;
                            tt += w;
                            try {
                                Z = new Uint8Array(tt);
                            } catch {
                                return void this.observer.emit(D.Events.ERROR, D.Events.ERROR, {
                                    type: I.ErrorTypes.MUX_ERROR,
                                    details: I.ErrorDetails.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    bytes: tt,
                                    reason: "fail allocating audio mdat " + tt
                                });
                            }
                            R || (new DataView(Z.buffer).setUint32(0, tt), Z.set(L.default.types.mdat, 4));
                        }
                        Z.set(gt, w);
                        var lt = gt.byteLength;
                        w += lt, O.push(new l(!0, e, lt, 0)), $ = mt;
                    }
                    var ot = O.length;
                    if (ot) {
                        var Nt = O[O.length - 1];
                        this.nextAudioPts = P = $ + s * Nt.duration;
                        var yt = R ? new Uint8Array(0) : L.default.moof(a.sequenceNumber++, st / s, p({}, a, {
                            samples: O
                        }));
                        a.samples = [];
                        var Lt = st / u, Bt = P / u, Rt = {
                            data1: yt,
                            data2: Z,
                            startPTS: Lt,
                            endPTS: Bt,
                            startDTS: Lt,
                            endDTS: Bt,
                            type: "audio",
                            hasAudio: !0,
                            hasVideo: !1,
                            nb: ot
                        };
                        return this.isAudioContiguous = !0, Rt;
                    }
                }, i.remuxEmptyAudio = function(a, f, g, n) {
                    var c = a.inputTimeScale, u = c / (a.samplerate ? a.samplerate : c), s = this.nextAudioPts, e = (s !== null ? s : n.startDTS * c) + this._initDTS, m = n.endDTS * c + this._initDTS, _ = 1024 * u, R = Math.ceil((m - e) / _), O = S.default.getSilentFrame(a.manifestCodec || a.codec, a.channelCount);
                    if (A.logger.warn("[mp4-remuxer]: remux empty Audio"), O) {
                        for (var x = [], w = 0; w < R; w++) {
                            var P = e + w * _;
                            x.push({
                                unit: O,
                                pts: P,
                                dts: P
                            });
                        }
                        return a.samples = x, this.remuxAudio(a, f, g, !1);
                    }
                    A.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
                }, i.remuxID3 = function(a, f) {
                    var g = a.samples.length;
                    if (g) {
                        for (var n = a.inputTimeScale, c = this._initPTS, u = this._initDTS, s = 0; s < g; s++) {
                            var e = a.samples[s];
                            e.pts = t(e.pts - c, f * n) / n, e.dts = t(e.dts - u, f * n) / n;
                        }
                        var m = a.samples;
                        return a.samples = [], {
                            samples: m
                        };
                    }
                }, i.remuxText = function(a, f) {
                    var g = a.samples.length;
                    if (g) {
                        for (var n = a.inputTimeScale, c = this._initPTS, u = 0; u < g; u++) {
                            var s = a.samples[u];
                            s.pts = t(s.pts - c, f * n) / n;
                        }
                        a.samples.sort(function(m, _) {
                            return m.pts - _.pts;
                        });
                        var e = a.samples;
                        return a.samples = [], {
                            samples: e
                        };
                    }
                }, h;
            }();
            function t(h, i) {
                var a;
                if (i === null) return h;
                for (a = i < h ? -8589934592 : 8589934592; Math.abs(h - i) > 4294967296; ) h += a;
                return h;
            }
            var l = function(h, i, a, f) {
                this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, 
                this.duration = i, this.size = a, this.cts = f, this.flags = new o(h);
            }, o = function(h) {
                this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, 
                this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = h ? 2 : 1, 
                this.isNonSync = h ? 0 : 1;
            };
        },
        "./src/remux/passthrough-remuxer.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/polyfills/number.ts"), S = v("./src/utils/mp4-tools.ts"), L = v("./src/loader/fragment.ts"), D = v("./src/utils/logger.ts"), I = function() {
                function T() {
                    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, 
                    this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, 
                    this.lastEndDTS = null;
                }
                var p = T.prototype;
                return p.destroy = function() {}, p.resetTimeStamp = function(y) {
                    this.initPTS = y, this.lastEndDTS = null;
                }, p.resetNextTimestamp = function() {
                    this.lastEndDTS = null;
                }, p.resetInitSegment = function(y, b, E) {
                    this.audioCodec = b, this.videoCodec = E, this.generateInitSegment(y), 
                    this.emitInitSegment = !0;
                }, p.generateInitSegment = function(y) {
                    var b = this.audioCodec, E = this.videoCodec;
                    if (!y || !y.byteLength) return this.initTracks = void 0, void (this.initData = void 0);
                    var r = this.initData = Object(S.parseInitSegment)(y);
                    b || (b = d(r.audio, L.ElementaryStreamTypes.AUDIO)), E || (E = d(r.video, L.ElementaryStreamTypes.VIDEO));
                    var t = {};
                    r.audio && r.video ? t.audiovideo = {
                        container: "video/mp4",
                        codec: b + "," + E,
                        initSegment: y,
                        id: "main"
                    } : r.audio ? t.audio = {
                        container: "audio/mp4",
                        codec: b,
                        initSegment: y,
                        id: "audio"
                    } : r.video ? t.video = {
                        container: "video/mp4",
                        codec: E,
                        initSegment: y,
                        id: "main"
                    } : D.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), 
                    this.initTracks = t;
                }, p.remux = function(y, b, E, r, t) {
                    var l = this.initPTS, o = this.lastEndDTS, h = {
                        audio: void 0,
                        video: void 0,
                        text: r,
                        id3: E,
                        initSegment: void 0
                    };
                    Object(k.isFiniteNumber)(o) || (o = this.lastEndDTS = t || 0);
                    var i = b.samples;
                    if (!i || !i.length) return h;
                    var a = {
                        initPTS: void 0,
                        timescale: 1
                    }, f = this.initData;
                    if (f && f.length || (this.generateInitSegment(i), f = this.initData), 
                    !f || !f.length) return D.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), 
                    h;
                    this.emitInitSegment && (a.tracks = this.initTracks, this.emitInitSegment = !1), 
                    Object(k.isFiniteNumber)(l) || (this.initPTS = a.initPTS = l = A(f, i, o));
                    var g = Object(S.getDuration)(i, f), n = o, c = g + n;
                    Object(S.offsetStartDTS)(f, i, l), g > 0 ? this.lastEndDTS = c : (D.logger.warn("Duration parsed from mp4 should be greater than zero"), 
                    this.resetNextTimestamp());
                    var u = !!f.audio, s = !!f.video, e = "";
                    u && (e += "audio"), s && (e += "video");
                    var m = {
                        data1: i,
                        startPTS: n,
                        startDTS: n,
                        endPTS: c,
                        endDTS: c,
                        type: e,
                        hasAudio: u,
                        hasVideo: s,
                        nb: 1,
                        dropped: 0
                    };
                    return h.audio = m.type === "audio" ? m : void 0, h.video = m.type !== "audio" ? m : void 0, 
                    h.text = r, h.id3 = E, h.initSegment = a, h;
                }, T;
            }(), A = function(T, p, y) {
                return Object(S.getStartDTS)(T, p) - y;
            };
            function d(T, p) {
                var y = T == null ? void 0 : T.codec;
                return y && y.length > 4 ? y : y === "hvc1" ? "hvc1.1.c.L120.90" : y === "av01" ? "av01.0.04M.08" : y === "avc1" || p === L.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5";
            }
            C.default = I;
        },
        "./src/task-loop.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return k;
            });
            var k = function() {
                function S() {
                    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, 
                    this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
                }
                var L = S.prototype;
                return L.destroy = function() {
                    this.onHandlerDestroying(), this.onHandlerDestroyed();
                }, L.onHandlerDestroying = function() {
                    this.clearNextTick(), this.clearInterval();
                }, L.onHandlerDestroyed = function() {}, L.hasInterval = function() {
                    return !!this._tickInterval;
                }, L.hasNextTick = function() {
                    return !!this._tickTimer;
                }, L.setInterval = function(D) {
                    return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, D), 
                    !0);
                }, L.clearInterval = function() {
                    return !!this._tickInterval && (self.clearInterval(this._tickInterval), 
                    this._tickInterval = null, !0);
                }, L.clearNextTick = function() {
                    return !!this._tickTimer && (self.clearTimeout(this._tickTimer), 
                    this._tickTimer = null, !0);
                }, L.tick = function() {
                    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), 
                    this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
                }, L.tickImmediate = function() {
                    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
                }, L.doTick = function() {}, S;
            }();
        },
        "./src/types/level.ts": function(F, C, v) {
            var k, S;
            function L(A, d) {
                var T = A.canSkipUntil, p = A.canSkipDateRanges, y = A.endSN;
                return T && (d !== void 0 ? d - y : 0) < T ? p ? k.v2 : k.Yes : k.No;
            }
            v.r(C), v.d(C, "HlsSkip", function() {
                return k;
            }), v.d(C, "getSkipValue", function() {
                return L;
            }), v.d(C, "HlsUrlParameters", function() {
                return D;
            }), v.d(C, "Level", function() {
                return I;
            }), (S = k || (k = {})).No = "", S.Yes = "YES", S.v2 = "v2";
            var D = function() {
                function A(d, T, p) {
                    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = d, 
                    this.part = T, this.skip = p;
                }
                return A.prototype.addDirectives = function(d) {
                    var T = new self.URL(d);
                    return this.msn !== void 0 && T.searchParams.set("_HLS_msn", this.msn.toString()), 
                    this.part !== void 0 && T.searchParams.set("_HLS_part", this.part.toString()), 
                    this.skip && T.searchParams.set("_HLS_skip", this.skip), T.toString();
                }, A;
            }(), I = function() {
                function A(T) {
                    this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, 
                    this.codecSet = void 0, this.height = void 0, this.id = void 0, 
                    this.name = void 0, this.videoCodec = void 0, this.width = void 0, 
                    this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, 
                    this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, 
                    this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, 
                    this._urlId = 0, this.url = [ T.url ], this.attrs = T.attrs, 
                    this.bitrate = T.bitrate, T.details && (this.details = T.details), 
                    this.id = T.id || 0, this.name = T.name, this.width = T.width || 0, 
                    this.height = T.height || 0, this.audioCodec = T.audioCodec, 
                    this.videoCodec = T.videoCodec, this.unknownCodecs = T.unknownCodecs, 
                    this.codecSet = [ T.videoCodec, T.audioCodec ].filter(function(p) {
                        return p;
                    }).join(",").replace(/\.[^.,]+/g, "");
                }
                var d;
                return (d = [ {
                    key: "maxBitrate",
                    get: function() {
                        return Math.max(this.realBitrate, this.bitrate);
                    }
                }, {
                    key: "uri",
                    get: function() {
                        return this.url[this._urlId] || "";
                    }
                }, {
                    key: "urlId",
                    get: function() {
                        return this._urlId;
                    },
                    set: function(T) {
                        var p = T % this.url.length;
                        this._urlId !== p && (this.details = void 0, this._urlId = p);
                    }
                } ]) && function(T, p) {
                    for (var y = 0; y < p.length; y++) {
                        var b = p[y];
                        b.enumerable = b.enumerable || !1, b.configurable = !0, 
                        "value" in b && (b.writable = !0), Object.defineProperty(T, b.key, b);
                    }
                }(A.prototype, d), A;
            }();
        },
        "./src/types/loader.ts": function(F, C, v) {
            var k, S, L, D;
            v.r(C), v.d(C, "PlaylistContextType", function() {
                return k;
            }), v.d(C, "PlaylistLevelType", function() {
                return L;
            }), (S = k || (k = {})).MANIFEST = "manifest", S.LEVEL = "level", S.AUDIO_TRACK = "audioTrack", 
            S.SUBTITLE_TRACK = "subtitleTrack", (D = L || (L = {})).MAIN = "main", 
            D.AUDIO = "audio", D.SUBTITLE = "subtitle";
        },
        "./src/types/transmuxer.ts": function(F, C, v) {
            v.r(C), v.d(C, "ChunkMetadata", function() {
                return k;
            });
            var k = function(S, L, D, I, A, d) {
                I === void 0 && (I = 0), A === void 0 && (A = -1), d === void 0 && (d = !1), 
                this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, 
                this.size = void 0, this.partial = void 0, this.transmuxing = {
                    start: 0,
                    executeStart: 0,
                    executeEnd: 0,
                    end: 0
                }, this.buffering = {
                    audio: {
                        start: 0,
                        executeStart: 0,
                        executeEnd: 0,
                        end: 0
                    },
                    video: {
                        start: 0,
                        executeStart: 0,
                        executeEnd: 0,
                        end: 0
                    },
                    audiovideo: {
                        start: 0,
                        executeStart: 0,
                        executeEnd: 0,
                        end: 0
                    }
                }, this.level = S, this.sn = L, this.id = D, this.size = I, this.part = A, 
                this.partial = d;
            };
        },
        "./src/utils/attr-list.ts": function(F, C, v) {
            v.r(C), v.d(C, "AttrList", function() {
                return L;
            });
            var k = /^(\d+)x(\d+)$/, S = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, L = function() {
                function D(A) {
                    for (var d in typeof A == "string" && (A = D.parseAttrList(A)), 
                    A) A.hasOwnProperty(d) && (this[d] = A[d]);
                }
                var I = D.prototype;
                return I.decimalInteger = function(A) {
                    var d = parseInt(this[A], 10);
                    return d > Number.MAX_SAFE_INTEGER ? 1 / 0 : d;
                }, I.hexadecimalInteger = function(A) {
                    if (this[A]) {
                        var d = (this[A] || "0x").slice(2);
                        d = (1 & d.length ? "0" : "") + d;
                        for (var T = new Uint8Array(d.length / 2), p = 0; p < d.length / 2; p++) T[p] = parseInt(d.slice(2 * p, 2 * p + 2), 16);
                        return T;
                    }
                    return null;
                }, I.hexadecimalIntegerAsNumber = function(A) {
                    var d = parseInt(this[A], 16);
                    return d > Number.MAX_SAFE_INTEGER ? 1 / 0 : d;
                }, I.decimalFloatingPoint = function(A) {
                    return parseFloat(this[A]);
                }, I.optionalFloat = function(A, d) {
                    var T = this[A];
                    return T ? parseFloat(T) : d;
                }, I.enumeratedString = function(A) {
                    return this[A];
                }, I.bool = function(A) {
                    return this[A] === "YES";
                }, I.decimalResolution = function(A) {
                    var d = k.exec(this[A]);
                    if (d !== null) return {
                        width: parseInt(d[1], 10),
                        height: parseInt(d[2], 10)
                    };
                }, D.parseAttrList = function(A) {
                    var d, T = {};
                    for (S.lastIndex = 0; (d = S.exec(A)) !== null; ) {
                        var p = d[2];
                        p.indexOf('"') === 0 && p.lastIndexOf('"') === p.length - 1 && (p = p.slice(1, -1)), 
                        T[d[1]] = p;
                    }
                    return T;
                }, D;
            }();
        },
        "./src/utils/binary-search.ts": function(F, C, v) {
            v.r(C), C.default = {
                search: function(k, S) {
                    for (var L = 0, D = k.length - 1, I = null, A = null; L <= D; ) {
                        var d = S(A = k[I = (L + D) / 2 | 0]);
                        if (d > 0) L = I + 1; else {
                            if (!(d < 0)) return A;
                            D = I - 1;
                        }
                    }
                    return null;
                }
            };
        },
        "./src/utils/buffer-helper.ts": function(F, C, v) {
            v.r(C), v.d(C, "BufferHelper", function() {
                return L;
            });
            var k = v("./src/utils/logger.ts"), S = {
                length: 0,
                start: function() {
                    return 0;
                },
                end: function() {
                    return 0;
                }
            }, L = function() {
                function D() {}
                return D.isBuffered = function(I, A) {
                    try {
                        if (I) {
                            for (var d = D.getBuffered(I), T = 0; T < d.length; T++) if (A >= d.start(T) && A <= d.end(T)) return !0;
                        }
                    } catch {}
                    return !1;
                }, D.bufferInfo = function(I, A, d) {
                    try {
                        if (I) {
                            var T, p = D.getBuffered(I), y = [];
                            for (T = 0; T < p.length; T++) y.push({
                                start: p.start(T),
                                end: p.end(T)
                            });
                            return this.bufferedInfo(y, A, d);
                        }
                    } catch {}
                    return {
                        len: 0,
                        start: A,
                        end: A,
                        nextStart: void 0
                    };
                }, D.bufferedInfo = function(I, A, d) {
                    A = Math.max(0, A), I.sort(function(a, f) {
                        return a.start - f.start || f.end - a.end;
                    });
                    var T = [];
                    if (d) for (var p = 0; p < I.length; p++) {
                        var y = T.length;
                        if (y) {
                            var b = T[y - 1].end;
                            I[p].start - b < d ? I[p].end > b && (T[y - 1].end = I[p].end) : T.push(I[p]);
                        } else T.push(I[p]);
                    } else T = I;
                    for (var E, r = 0, t = A, l = A, o = 0; o < T.length; o++) {
                        var h = T[o].start, i = T[o].end;
                        if (A + d >= h && A < i) t = h, r = (l = i) - A; else if (A + d < h) {
                            E = h;
                            break;
                        }
                    }
                    return {
                        len: r,
                        start: t || 0,
                        end: l || 0,
                        nextStart: E
                    };
                }, D.getBuffered = function(I) {
                    try {
                        return I.buffered;
                    } catch (A) {
                        return k.logger.log("failed to get media.buffered", A), 
                        S;
                    }
                }, D;
            }();
        },
        "./src/utils/cea-608-parser.ts": function(F, C, v) {
            v.r(C), v.d(C, "Row", function() {
                return h;
            }), v.d(C, "CaptionScreen", function() {
                return i;
            });
            var k, S, L = v("./src/utils/logger.ts"), D = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }, I = function(c) {
                var u = c;
                return D.hasOwnProperty(c) && (u = D[c]), String.fromCharCode(u);
            }, A = 15, d = 100, T = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            }, p = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            }, y = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            }, b = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            }, E = [ "white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent" ];
            (S = k || (k = {}))[S.ERROR = 0] = "ERROR", S[S.TEXT = 1] = "TEXT", 
            S[S.WARNING = 2] = "WARNING", S[S.INFO = 2] = "INFO", S[S.DEBUG = 3] = "DEBUG", 
            S[S.DATA = 3] = "DATA";
            var r = function() {
                function c() {
                    this.time = null, this.verboseLevel = k.ERROR;
                }
                return c.prototype.log = function(u, s) {
                    this.verboseLevel >= u && L.logger.log(this.time + " [" + u + "] " + s);
                }, c;
            }(), t = function(c) {
                for (var u = [], s = 0; s < c.length; s++) u.push(c[s].toString(16));
                return u;
            }, l = function() {
                function c(s, e, m, _, R) {
                    this.foreground = void 0, this.underline = void 0, this.italics = void 0, 
                    this.background = void 0, this.flash = void 0, this.foreground = s || "white", 
                    this.underline = e || !1, this.italics = m || !1, this.background = _ || "black", 
                    this.flash = R || !1;
                }
                var u = c.prototype;
                return u.reset = function() {
                    this.foreground = "white", this.underline = !1, this.italics = !1, 
                    this.background = "black", this.flash = !1;
                }, u.setStyles = function(s) {
                    for (var e = [ "foreground", "underline", "italics", "background", "flash" ], m = 0; m < e.length; m++) {
                        var _ = e[m];
                        s.hasOwnProperty(_) && (this[_] = s[_]);
                    }
                }, u.isDefault = function() {
                    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
                }, u.equals = function(s) {
                    return this.foreground === s.foreground && this.underline === s.underline && this.italics === s.italics && this.background === s.background && this.flash === s.flash;
                }, u.copy = function(s) {
                    this.foreground = s.foreground, this.underline = s.underline, 
                    this.italics = s.italics, this.background = s.background, this.flash = s.flash;
                }, u.toString = function() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
                }, c;
            }(), o = function() {
                function c(s, e, m, _, R, O) {
                    this.uchar = void 0, this.penState = void 0, this.uchar = s || " ", 
                    this.penState = new l(e, m, _, R, O);
                }
                var u = c.prototype;
                return u.reset = function() {
                    this.uchar = " ", this.penState.reset();
                }, u.setChar = function(s, e) {
                    this.uchar = s, this.penState.copy(e);
                }, u.setPenState = function(s) {
                    this.penState.copy(s);
                }, u.equals = function(s) {
                    return this.uchar === s.uchar && this.penState.equals(s.penState);
                }, u.copy = function(s) {
                    this.uchar = s.uchar, this.penState.copy(s.penState);
                }, u.isEmpty = function() {
                    return this.uchar === " " && this.penState.isDefault();
                }, c;
            }(), h = function() {
                function c(s) {
                    this.chars = void 0, this.pos = void 0, this.currPenState = void 0, 
                    this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                    for (var e = 0; e < d; e++) this.chars.push(new o());
                    this.logger = s, this.pos = 0, this.currPenState = new l();
                }
                var u = c.prototype;
                return u.equals = function(s) {
                    for (var e = !0, m = 0; m < d; m++) if (!this.chars[m].equals(s.chars[m])) {
                        e = !1;
                        break;
                    }
                    return e;
                }, u.copy = function(s) {
                    for (var e = 0; e < d; e++) this.chars[e].copy(s.chars[e]);
                }, u.isEmpty = function() {
                    for (var s = !0, e = 0; e < d; e++) if (!this.chars[e].isEmpty()) {
                        s = !1;
                        break;
                    }
                    return s;
                }, u.setCursor = function(s) {
                    this.pos !== s && (this.pos = s), this.pos < 0 ? (this.logger.log(k.DEBUG, "Negative cursor position " + this.pos), 
                    this.pos = 0) : this.pos > d && (this.logger.log(k.DEBUG, "Too large cursor position " + this.pos), 
                    this.pos = d);
                }, u.moveCursor = function(s) {
                    var e = this.pos + s;
                    if (s > 1) for (var m = this.pos + 1; m < e + 1; m++) this.chars[m].setPenState(this.currPenState);
                    this.setCursor(e);
                }, u.backSpace = function() {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
                }, u.insertChar = function(s) {
                    s >= 144 && this.backSpace();
                    var e = I(s);
                    this.pos >= d ? this.logger.log(k.ERROR, "Cannot insert " + s.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), 
                    this.moveCursor(1));
                }, u.clearFromPos = function(s) {
                    var e;
                    for (e = s; e < d; e++) this.chars[e].reset();
                }, u.clear = function() {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
                }, u.clearToEndOfRow = function() {
                    this.clearFromPos(this.pos);
                }, u.getTextString = function() {
                    for (var s = [], e = !0, m = 0; m < d; m++) {
                        var _ = this.chars[m].uchar;
                        _ !== " " && (e = !1), s.push(_);
                    }
                    return e ? "" : s.join("");
                }, u.setPenStyles = function(s) {
                    this.currPenState.setStyles(s), this.chars[this.pos].setPenState(this.currPenState);
                }, c;
            }(), i = function() {
                function c(s) {
                    this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, 
                    this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                    for (var e = 0; e < A; e++) this.rows.push(new h(s));
                    this.logger = s, this.currRow = 14, this.nrRollUpRows = null, 
                    this.lastOutputScreen = null, this.reset();
                }
                var u = c.prototype;
                return u.reset = function() {
                    for (var s = 0; s < A; s++) this.rows[s].clear();
                    this.currRow = 14;
                }, u.equals = function(s) {
                    for (var e = !0, m = 0; m < A; m++) if (!this.rows[m].equals(s.rows[m])) {
                        e = !1;
                        break;
                    }
                    return e;
                }, u.copy = function(s) {
                    for (var e = 0; e < A; e++) this.rows[e].copy(s.rows[e]);
                }, u.isEmpty = function() {
                    for (var s = !0, e = 0; e < A; e++) if (!this.rows[e].isEmpty()) {
                        s = !1;
                        break;
                    }
                    return s;
                }, u.backSpace = function() {
                    this.rows[this.currRow].backSpace();
                }, u.clearToEndOfRow = function() {
                    this.rows[this.currRow].clearToEndOfRow();
                }, u.insertChar = function(s) {
                    this.rows[this.currRow].insertChar(s);
                }, u.setPen = function(s) {
                    this.rows[this.currRow].setPenStyles(s);
                }, u.moveCursor = function(s) {
                    this.rows[this.currRow].moveCursor(s);
                }, u.setCursor = function(s) {
                    this.logger.log(k.INFO, "setCursor: " + s), this.rows[this.currRow].setCursor(s);
                }, u.setPAC = function(s) {
                    this.logger.log(k.INFO, "pacData = " + JSON.stringify(s));
                    var e = s.row - 1;
                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), 
                    this.nrRollUpRows && this.currRow !== e) {
                        for (var m = 0; m < A; m++) this.rows[m].clear();
                        var _ = this.currRow + 1 - this.nrRollUpRows, R = this.lastOutputScreen;
                        if (R) {
                            var O = R.rows[_].cueStartTime, x = this.logger.time;
                            if (O && x !== null && O < x) for (var w = 0; w < this.nrRollUpRows; w++) this.rows[e - this.nrRollUpRows + w + 1].copy(R.rows[_ + w]);
                        }
                    }
                    this.currRow = e;
                    var P = this.rows[this.currRow];
                    if (s.indent !== null) {
                        var N = s.indent, M = Math.max(N - 1, 0);
                        P.setCursor(s.indent), s.color = P.chars[M].penState.foreground;
                    }
                    var B = {
                        foreground: s.color,
                        underline: s.underline,
                        italics: s.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(B);
                }, u.setBkgData = function(s) {
                    this.logger.log(k.INFO, "bkgData = " + JSON.stringify(s)), this.backSpace(), 
                    this.setPen(s), this.insertChar(32);
                }, u.setRollUpRows = function(s) {
                    this.nrRollUpRows = s;
                }, u.rollUp = function() {
                    if (this.nrRollUpRows !== null) {
                        this.logger.log(k.TEXT, this.getDisplayText());
                        var s = this.currRow + 1 - this.nrRollUpRows, e = this.rows.splice(s, 1)[0];
                        e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(k.INFO, "Rolling up");
                    } else this.logger.log(k.DEBUG, "roll_up but nrRollUpRows not set yet");
                }, u.getDisplayText = function(s) {
                    s = s || !1;
                    for (var e = [], m = "", _ = -1, R = 0; R < A; R++) {
                        var O = this.rows[R].getTextString();
                        O && (_ = R + 1, s ? e.push("Row " + _ + ": '" + O + "'") : e.push(O.trim()));
                    }
                    return e.length > 0 && (m = s ? "[" + e.join(" | ") + "]" : e.join(`
`)), m;
                }, u.getTextAndFormat = function() {
                    return this.rows;
                }, c;
            }(), a = function() {
                function c(s, e, m) {
                    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, 
                    this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, 
                    this.lastOutputScreen = void 0, this.currRollUpRow = void 0, 
                    this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, 
                    this.chNr = s, this.outputFilter = e, this.mode = null, this.verbose = 0, 
                    this.displayedMemory = new i(m), this.nonDisplayedMemory = new i(m), 
                    this.lastOutputScreen = new i(m), this.currRollUpRow = this.displayedMemory.rows[14], 
                    this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, 
                    this.logger = m;
                }
                var u = c.prototype;
                return u.reset = function() {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), 
                    this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], 
                    this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
                }, u.getHandler = function() {
                    return this.outputFilter;
                }, u.setHandler = function(s) {
                    this.outputFilter = s;
                }, u.setPAC = function(s) {
                    this.writeScreen.setPAC(s);
                }, u.setBkgData = function(s) {
                    this.writeScreen.setBkgData(s);
                }, u.setMode = function(s) {
                    s !== this.mode && (this.mode = s, this.logger.log(k.INFO, "MODE=" + s), 
                    this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, 
                    this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, 
                    this.nonDisplayedMemory.nrRollUpRows = null), this.mode = s);
                }, u.insertChars = function(s) {
                    for (var e = 0; e < s.length; e++) this.writeScreen.insertChar(s[e]);
                    var m = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    this.logger.log(k.INFO, m + ": " + this.writeScreen.getDisplayText(!0)), 
                    this.mode !== "MODE_PAINT-ON" && this.mode !== "MODE_ROLL-UP" || (this.logger.log(k.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), 
                    this.outputDataUpdate());
                }, u.ccRCL = function() {
                    this.logger.log(k.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
                }, u.ccBS = function() {
                    this.logger.log(k.INFO, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), 
                    this.writeScreen === this.displayedMemory && this.outputDataUpdate());
                }, u.ccAOF = function() {}, u.ccAON = function() {}, u.ccDER = function() {
                    this.logger.log(k.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), 
                    this.outputDataUpdate();
                }, u.ccRU = function(s) {
                    this.logger.log(k.INFO, "RU(" + s + ") - Roll Up"), this.writeScreen = this.displayedMemory, 
                    this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(s);
                }, u.ccFON = function() {
                    this.logger.log(k.INFO, "FON - Flash On"), this.writeScreen.setPen({
                        flash: !0
                    });
                }, u.ccRDC = function() {
                    this.logger.log(k.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
                }, u.ccTR = function() {
                    this.logger.log(k.INFO, "TR"), this.setMode("MODE_TEXT");
                }, u.ccRTD = function() {
                    this.logger.log(k.INFO, "RTD"), this.setMode("MODE_TEXT");
                }, u.ccEDM = function() {
                    this.logger.log(k.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), 
                    this.outputDataUpdate(!0);
                }, u.ccCR = function() {
                    this.logger.log(k.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), 
                    this.outputDataUpdate(!0);
                }, u.ccENM = function() {
                    this.logger.log(k.INFO, "ENM - Erase Non-displayed Memory"), 
                    this.nonDisplayedMemory.reset();
                }, u.ccEOC = function() {
                    if (this.logger.log(k.INFO, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
                        var s = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = s, 
                        this.writeScreen = this.nonDisplayedMemory, this.logger.log(k.TEXT, "DISP: " + this.displayedMemory.getDisplayText());
                    }
                    this.outputDataUpdate(!0);
                }, u.ccTO = function(s) {
                    this.logger.log(k.INFO, "TO(" + s + ") - Tab Offset"), this.writeScreen.moveCursor(s);
                }, u.ccMIDROW = function(s) {
                    var e = {
                        flash: !1
                    };
                    if (e.underline = s % 2 == 1, e.italics = s >= 46, e.italics) e.foreground = "white"; else {
                        var m = Math.floor(s / 2) - 16;
                        e.foreground = [ "white", "green", "blue", "cyan", "red", "yellow", "magenta" ][m];
                    }
                    this.logger.log(k.INFO, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e);
                }, u.outputDataUpdate = function(s) {
                    s === void 0 && (s = !1);
                    var e = this.logger.time;
                    e !== null && this.outputFilter && (this.cueStartTime !== null || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), 
                    s && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), 
                    this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, 
                    this.lastOutputScreen.copy(this.displayedMemory));
                }, u.cueSplitAtTime = function(s) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, s, this.displayedMemory), 
                    this.cueStartTime = s));
                }, c;
            }(), f = function() {
                function c(s, e, m) {
                    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, 
                    this.logger = void 0;
                    var _ = new r();
                    this.channels = [ null, new a(s, e, _), new a(s + 1, m, _) ], 
                    this.cmdHistory = {
                        a: null,
                        b: null
                    }, this.logger = _;
                }
                var u = c.prototype;
                return u.getHandler = function(s) {
                    return this.channels[s].getHandler();
                }, u.setHandler = function(s, e) {
                    this.channels[s].setHandler(e);
                }, u.addData = function(s, e) {
                    var m, _, R, O = !1;
                    this.logger.time = s;
                    for (var x = 0; x < e.length; x += 2) if (_ = 127 & e[x], R = 127 & e[x + 1], 
                    _ !== 0 || R !== 0) {
                        if (this.logger.log(k.DATA, "[" + t([ e[x], e[x + 1] ]) + "] -> (" + t([ _, R ]) + ")"), 
                        (m = this.parseCmd(_, R)) || (m = this.parseMidrow(_, R)), 
                        m || (m = this.parsePAC(_, R)), m || (m = this.parseBackgroundAttributes(_, R)), 
                        !m && (O = this.parseChars(_, R))) {
                            var w = this.currentChannel;
                            w && w > 0 ? this.channels[w].insertChars(O) : this.logger.log(k.WARNING, "No channel found yet. TEXT-MODE?");
                        }
                        m || O || this.logger.log(k.WARNING, "Couldn't parse cleaned data " + t([ _, R ]) + " orig: " + t([ e[x], e[x + 1] ]));
                    }
                }, u.parseCmd = function(s, e) {
                    var m = this.cmdHistory;
                    if (!((s === 20 || s === 28 || s === 21 || s === 29) && e >= 32 && e <= 47 || (s === 23 || s === 31) && e >= 33 && e <= 35)) return !1;
                    if (n(s, e, m)) return g(null, null, m), this.logger.log(k.DEBUG, "Repeated command (" + t([ s, e ]) + ") is dropped"), 
                    !0;
                    var _ = s === 20 || s === 21 || s === 23 ? 1 : 2, R = this.channels[_];
                    return s === 20 || s === 21 || s === 28 || s === 29 ? e === 32 ? R.ccRCL() : e === 33 ? R.ccBS() : e === 34 ? R.ccAOF() : e === 35 ? R.ccAON() : e === 36 ? R.ccDER() : e === 37 ? R.ccRU(2) : e === 38 ? R.ccRU(3) : e === 39 ? R.ccRU(4) : e === 40 ? R.ccFON() : e === 41 ? R.ccRDC() : e === 42 ? R.ccTR() : e === 43 ? R.ccRTD() : e === 44 ? R.ccEDM() : e === 45 ? R.ccCR() : e === 46 ? R.ccENM() : e === 47 && R.ccEOC() : R.ccTO(e - 32), 
                    g(s, e, m), this.currentChannel = _, !0;
                }, u.parseMidrow = function(s, e) {
                    var m = 0;
                    if ((s === 17 || s === 25) && e >= 32 && e <= 47) {
                        if ((m = s === 17 ? 1 : 2) !== this.currentChannel) return this.logger.log(k.ERROR, "Mismatch channel in midrow parsing"), 
                        !1;
                        var _ = this.channels[m];
                        return !!_ && (_.ccMIDROW(e), this.logger.log(k.DEBUG, "MIDROW (" + t([ s, e ]) + ")"), 
                        !0);
                    }
                    return !1;
                }, u.parsePAC = function(s, e) {
                    var m, _ = this.cmdHistory;
                    if (!((s >= 17 && s <= 23 || s >= 25 && s <= 31) && e >= 64 && e <= 127 || (s === 16 || s === 24) && e >= 64 && e <= 95)) return !1;
                    if (n(s, e, _)) return g(null, null, _), !0;
                    var R = s <= 23 ? 1 : 2;
                    m = e >= 64 && e <= 95 ? R === 1 ? T[s] : y[s] : R === 1 ? p[s] : b[s];
                    var O = this.channels[R];
                    return !!O && (O.setPAC(this.interpretPAC(m, e)), g(s, e, _), 
                    this.currentChannel = R, !0);
                }, u.interpretPAC = function(s, e) {
                    var m, _ = {
                        color: null,
                        italics: !1,
                        indent: null,
                        underline: !1,
                        row: s
                    };
                    return m = e > 95 ? e - 96 : e - 64, _.underline = !(1 & ~m), 
                    m <= 13 ? _.color = [ "white", "green", "blue", "cyan", "red", "yellow", "magenta", "white" ][Math.floor(m / 2)] : m <= 15 ? (_.italics = !0, 
                    _.color = "white") : _.indent = 4 * Math.floor((m - 16) / 2), 
                    _;
                }, u.parseChars = function(s, e) {
                    var m, _, R = null, O = null;
                    if (s >= 25 ? (m = 2, O = s - 8) : (m = 1, O = s), O >= 17 && O <= 19 ? (_ = O === 17 ? e + 80 : O === 18 ? e + 112 : e + 144, 
                    this.logger.log(k.INFO, "Special char '" + I(_) + "' in channel " + m), 
                    R = [ _ ]) : s >= 32 && s <= 127 && (R = e === 0 ? [ s ] : [ s, e ]), 
                    R) {
                        var x = t(R);
                        this.logger.log(k.DEBUG, "Char codes =  " + x.join(",")), 
                        g(s, e, this.cmdHistory);
                    }
                    return R;
                }, u.parseBackgroundAttributes = function(s, e) {
                    var m;
                    if (!((s === 16 || s === 24) && e >= 32 && e <= 47 || (s === 23 || s === 31) && e >= 45 && e <= 47)) return !1;
                    var _ = {};
                    s === 16 || s === 24 ? (m = Math.floor((e - 32) / 2), _.background = E[m], 
                    e % 2 == 1 && (_.background = _.background + "_semi")) : e === 45 ? _.background = "transparent" : (_.foreground = "black", 
                    e === 47 && (_.underline = !0));
                    var R = s <= 23 ? 1 : 2;
                    return this.channels[R].setBkgData(_), g(s, e, this.cmdHistory), 
                    !0;
                }, u.reset = function() {
                    for (var s = 0; s < Object.keys(this.channels).length; s++) {
                        var e = this.channels[s];
                        e && e.reset();
                    }
                    this.cmdHistory = {
                        a: null,
                        b: null
                    };
                }, u.cueSplitAtTime = function(s) {
                    for (var e = 0; e < this.channels.length; e++) {
                        var m = this.channels[e];
                        m && m.cueSplitAtTime(s);
                    }
                }, c;
            }();
            function g(c, u, s) {
                s.a = c, s.b = u;
            }
            function n(c, u, s) {
                return s.a === c && s.b === u;
            }
            C.default = f;
        },
        "./src/utils/codecs.ts": function(F, C, v) {
            v.r(C), v.d(C, "isCodecType", function() {
                return S;
            }), v.d(C, "isCodecSupportedInMp4", function() {
                return L;
            });
            var k = {
                audio: {
                    a3ds: !0,
                    "ac-3": !0,
                    "ac-4": !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    "dts+": !0,
                    "dts-": !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    "ec-3": !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    "raw ": !0,
                    Opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0
                },
                video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    av01: !0,
                    drac: !0,
                    dvav: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    "vc-1": !0,
                    vp08: !0,
                    vp09: !0
                },
                text: {
                    stpp: !0,
                    wvtt: !0
                }
            };
            function S(D, I) {
                var A = k[I];
                return !!A && A[D.slice(0, 4)] === !0;
            }
            function L(D, I) {
                return MediaSource.isTypeSupported((I || "video") + '/mp4;codecs="' + D + '"');
            }
        },
        "./src/utils/cues.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/utils/vttparser.ts"), S = v("./src/utils/webvtt-parser.ts"), L = v("./src/utils/texttrack-utils.ts"), D = /\s/, I = {
                newCue: function(A, d, T, p) {
                    for (var y, b, E, r, t, l = [], o = self.VTTCue || self.TextTrackCue, h = 0; h < p.rows.length; h++) if (E = !0, 
                    r = 0, t = "", !(y = p.rows[h]).isEmpty()) {
                        for (var i = 0; i < y.chars.length; i++) D.test(y.chars[i].uchar) && E ? r++ : (t += y.chars[i].uchar, 
                        E = !1);
                        y.cueStartTime = d, d === T && (T += 1e-4), r >= 16 ? r-- : r++;
                        var a = Object(k.fixLineBreaks)(t.trim()), f = Object(S.generateCueId)(d, T, a);
                        A && A.cues && A.cues.getCueById(f) || ((b = new o(d, T, a)).id = f, 
                        b.line = h + 1, b.align = "left", b.position = 10 + Math.min(80, 10 * Math.floor(8 * r / 32)), 
                        l.push(b));
                    }
                    return A && l.length && (l.sort(function(g, n) {
                        return g.line === "auto" || n.line === "auto" ? 0 : g.line > 8 && n.line > 8 ? n.line - g.line : g.line - n.line;
                    }), l.forEach(function(g) {
                        return Object(L.addCueToTrack)(A, g);
                    })), l;
                }
            };
            C.default = I;
        },
        "./src/utils/discontinuities.ts": function(F, C, v) {
            v.r(C), v.d(C, "findFirstFragWithCC", function() {
                return D;
            }), v.d(C, "shouldAlignOnDiscontinuities", function() {
                return I;
            }), v.d(C, "findDiscontinuousReferenceFrag", function() {
                return A;
            }), v.d(C, "adjustSlidingStart", function() {
                return T;
            }), v.d(C, "alignStream", function() {
                return p;
            }), v.d(C, "alignPDT", function() {
                return y;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/utils/logger.ts"), L = v("./src/controller/level-helper.ts");
            function D(b, E) {
                for (var r = null, t = 0, l = b.length; t < l; t++) {
                    var o = b[t];
                    if (o && o.cc === E) {
                        r = o;
                        break;
                    }
                }
                return r;
            }
            function I(b, E, r) {
                return !(!E.details || !(r.endCC > r.startCC || b && b.cc < r.startCC));
            }
            function A(b, E) {
                var r = b.fragments, t = E.fragments;
                if (t.length && r.length) {
                    var l = D(r, t[0].cc);
                    if (l && (!l || l.startPTS)) return l;
                    S.logger.log("No frag in previous level to align on");
                } else S.logger.log("No fragments to align");
            }
            function d(b, E) {
                if (b) {
                    var r = b.start + E;
                    b.start = b.startPTS = r, b.endPTS = r + b.duration;
                }
            }
            function T(b, E) {
                for (var r = E.fragments, t = 0, l = r.length; t < l; t++) d(r[t], b);
                E.fragmentHint && d(E.fragmentHint, b), E.alignedSliding = !0;
            }
            function p(b, E, r) {
                E && (function(t, l, o) {
                    if (I(t, o, l)) {
                        var h = A(o.details, l);
                        h && Object(k.isFiniteNumber)(h.start) && (S.logger.log("Adjusting PTS using last level due to CC increase within current level " + l.url), 
                        T(h.start, l));
                    }
                }(b, r, E), !r.alignedSliding && E.details && y(r, E.details), r.alignedSliding || !E.details || r.skippedSegments || Object(L.adjustSliding)(E.details, r));
            }
            function y(b, E) {
                if (E.fragments.length && b.hasProgramDateTime && E.hasProgramDateTime) {
                    var r = E.fragments[0].programDateTime, t = b.fragments[0].programDateTime, l = (t - r) / 1e3 + E.fragments[0].start;
                    l && Object(k.isFiniteNumber)(l) && (S.logger.log("Adjusting PTS using programDateTime delta " + (t - r) + "ms, sliding:" + l.toFixed(3) + " " + b.url + " "), 
                    T(l, b));
                }
            }
        },
        "./src/utils/ewma-bandwidth-estimator.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/utils/ewma.ts"), S = function() {
                function L(I, A, d) {
                    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, 
                    this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = d, 
                    this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new k.default(I), 
                    this.fast_ = new k.default(A);
                }
                var D = L.prototype;
                return D.update = function(I, A) {
                    var d = this.slow_, T = this.fast_;
                    this.slow_.halfLife !== I && (this.slow_ = new k.default(I, d.getEstimate(), d.getTotalWeight())), 
                    this.fast_.halfLife !== A && (this.fast_ = new k.default(A, T.getEstimate(), T.getTotalWeight()));
                }, D.sample = function(I, A) {
                    var d = (I = Math.max(I, this.minDelayMs_)) / 1e3, T = 8 * A / d;
                    this.fast_.sample(d, T), this.slow_.sample(d, T);
                }, D.canEstimate = function() {
                    var I = this.fast_;
                    return I && I.getTotalWeight() >= this.minWeight_;
                }, D.getEstimate = function() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
                }, D.destroy = function() {}, L;
            }();
            C.default = S;
        },
        "./src/utils/ewma.ts": function(F, C, v) {
            v.r(C);
            var k = function() {
                function S(D, I, A) {
                    I === void 0 && (I = 0), A === void 0 && (A = 0), this.halfLife = void 0, 
                    this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, 
                    this.halfLife = D, this.alpha_ = D ? Math.exp(Math.log(.5) / D) : 0, 
                    this.estimate_ = I, this.totalWeight_ = A;
                }
                var L = S.prototype;
                return L.sample = function(D, I) {
                    var A = Math.pow(this.alpha_, D);
                    this.estimate_ = I * (1 - A) + A * this.estimate_, this.totalWeight_ += D;
                }, L.getTotalWeight = function() {
                    return this.totalWeight_;
                }, L.getEstimate = function() {
                    if (this.alpha_) {
                        var D = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        if (D) return this.estimate_ / D;
                    }
                    return this.estimate_;
                }, S;
            }();
            C.default = k;
        },
        "./src/utils/fetch-loader.ts": function(F, C, v) {
            v.r(C), v.d(C, "fetchSupported", function() {
                return T;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/loader/load-stats.ts"), L = v("./src/demux/chunk-cache.ts");
            function D(E) {
                var r = typeof Map == "function" ? new Map() : void 0;
                return (D = function(t) {
                    if (t === null || (l = t, Function.toString.call(l).indexOf("[native code]") === -1)) return t;
                    var l;
                    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
                    if (r !== void 0) {
                        if (r.has(t)) return r.get(t);
                        r.set(t, o);
                    }
                    function o() {
                        return I(t, arguments, d(this).constructor);
                    }
                    return o.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: o,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), A(o, t);
                })(E);
            }
            function I(E, r, t) {
                return (I = function() {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if (typeof Proxy == "function") return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                        !0;
                    } catch {
                        return !1;
                    }
                }() ? Reflect.construct : function(l, o, h) {
                    var i = [ null ];
                    i.push.apply(i, o);
                    var a = new (Function.bind.apply(l, i))();
                    return h && A(a, h.prototype), a;
                }).apply(null, arguments);
            }
            function A(E, r) {
                return (A = Object.setPrototypeOf || function(t, l) {
                    return t.__proto__ = l, t;
                })(E, r);
            }
            function d(E) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
                    return r.__proto__ || Object.getPrototypeOf(r);
                })(E);
            }
            function T() {
                if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                    return new self.ReadableStream({}), !0;
                } catch {}
                return !1;
            }
            var p = function() {
                function E(t) {
                    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, 
                    this.response = void 0, this.controller = void 0, this.context = void 0, 
                    this.config = null, this.callbacks = null, this.stats = void 0, 
                    this.loader = null, this.fetchSetup = t.fetchSetup || y, this.controller = new self.AbortController(), 
                    this.stats = new S.LoadStats();
                }
                var r = E.prototype;
                return r.destroy = function() {
                    this.loader = this.callbacks = null, this.abortInternal();
                }, r.abortInternal = function() {
                    var t = this.response;
                    t && t.ok || (this.stats.aborted = !0, this.controller.abort());
                }, r.abort = function() {
                    var t;
                    this.abortInternal(), (t = this.callbacks) !== null && t !== void 0 && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
                }, r.load = function(t, l, o) {
                    var h = this, i = this.stats;
                    if (i.loading.start) throw new Error("Loader can only be used once.");
                    i.loading.start = self.performance.now();
                    var a = function(c, u) {
                        var s = {
                            method: "GET",
                            mode: "cors",
                            credentials: "same-origin",
                            signal: u
                        };
                        return c.rangeEnd && (s.headers = new self.Headers({
                            Range: "bytes=" + c.rangeStart + "-" + String(c.rangeEnd - 1)
                        })), s;
                    }(t, this.controller.signal), f = o.onProgress, g = t.responseType === "arraybuffer", n = g ? "byteLength" : "length";
                    this.context = t, this.config = l, this.callbacks = o, this.request = this.fetchSetup(t, a), 
                    self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(function() {
                        h.abortInternal(), o.onTimeout(i, t, h.response);
                    }, l.timeout), self.fetch(this.request).then(function(c) {
                        if (h.response = h.loader = c, !c.ok) {
                            var u = c.status, s = c.statusText;
                            throw new b(s || "fetch, bad network response", u, c);
                        }
                        return i.loading.first = Math.max(self.performance.now(), i.loading.start), 
                        i.total = parseInt(c.headers.get("Content-Length") || "0"), 
                        f && Object(k.isFiniteNumber)(l.highWaterMark) ? h.loadProgressively(c, i, t, l.highWaterMark, f) : g ? c.arrayBuffer() : c.text();
                    }).then(function(c) {
                        var u = h.response;
                        self.clearTimeout(h.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first), 
                        i.loaded = i.total = c[n];
                        var s = {
                            url: u.url,
                            data: c
                        };
                        f && !Object(k.isFiniteNumber)(l.highWaterMark) && f(i, t, c, u), 
                        o.onSuccess(s, i, t, u);
                    }).catch(function(c) {
                        if (self.clearTimeout(h.requestTimeout), !i.aborted) {
                            var u = c.code || 0;
                            o.onError({
                                code: u,
                                text: c.message
                            }, t, c.details);
                        }
                    });
                }, r.getCacheAge = function() {
                    var t = null;
                    if (this.response) {
                        var l = this.response.headers.get("age");
                        t = l ? parseFloat(l) : null;
                    }
                    return t;
                }, r.loadProgressively = function(t, l, o, h, i) {
                    h === void 0 && (h = 0);
                    var a = new L.default(), f = t.body.getReader();
                    return function g() {
                        return f.read().then(function(n) {
                            if (n.done) return a.dataLength && i(l, o, a.flush(), t), 
                            Promise.resolve(new ArrayBuffer(0));
                            var c = n.value, u = c.length;
                            return l.loaded += u, u < h || a.dataLength ? (a.push(c), 
                            a.dataLength >= h && i(l, o, a.flush(), t)) : i(l, o, c, t), 
                            g();
                        }).catch(function() {
                            return Promise.reject();
                        });
                    }();
                }, E;
            }();
            function y(E, r) {
                return new self.Request(E.url, r);
            }
            var b = function(E) {
                var r, t;
                function l(o, h, i) {
                    var a;
                    return (a = E.call(this, o) || this).code = void 0, a.details = void 0, 
                    a.code = h, a.details = i, a;
                }
                return t = E, (r = l).prototype = Object.create(t.prototype), r.prototype.constructor = r, 
                A(r, t), l;
            }(D(Error));
            C.default = p;
        },
        "./src/utils/imsc1-ttml-parser.ts": function(F, C, v) {
            v.r(C), v.d(C, "IMSC1_CODEC", function() {
                return T;
            }), v.d(C, "parseIMSC1", function() {
                return E;
            });
            var k = v("./src/utils/mp4-tools.ts"), S = v("./src/utils/vttparser.ts"), L = v("./src/utils/vttcue.ts"), D = v("./src/demux/id3.ts"), I = v("./src/utils/timescale-conversion.ts"), A = v("./src/utils/webvtt-parser.ts");
            function d() {
                return (d = Object.assign || function(a) {
                    for (var f = 1; f < arguments.length; f++) {
                        var g = arguments[f];
                        for (var n in g) Object.prototype.hasOwnProperty.call(g, n) && (a[n] = g[n]);
                    }
                    return a;
                }).apply(this, arguments);
            }
            var T = "stpp.ttml.im1t", p = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, y = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, b = {
                left: "start",
                center: "center",
                right: "end",
                start: "start",
                end: "end"
            };
            function E(a, f, g, n, c) {
                var u = Object(k.findBox)(new Uint8Array(a), [ "mdat" ]);
                if (u.length !== 0) {
                    var s = u[0], e = Object(D.utf8ArrayToStr)(new Uint8Array(a, s.start, s.end - s.start)), m = Object(I.toTimescaleFromScale)(f, 1, g);
                    try {
                        n(function(_, R) {
                            var O = new DOMParser().parseFromString(_, "text/xml").getElementsByTagName("tt")[0];
                            if (!O) throw new Error("Invalid ttml");
                            var x = {
                                frameRate: 30,
                                subFrameRate: 1,
                                frameRateMultiplier: 0,
                                tickRate: 0
                            }, w = Object.keys(x).reduce(function(U, G) {
                                return U[G] = O.getAttribute("ttp:" + G) || x[G], 
                                U;
                            }, {}), P = O.getAttribute("xml:space") !== "preserve", N = t(r(O, "styling", "style")), M = t(r(O, "layout", "region")), B = r(O, "body", "[begin]");
                            return [].map.call(B, function(U) {
                                var G = l(U, P);
                                if (!G || !U.hasAttribute("begin")) return null;
                                var V = i(U.getAttribute("begin"), w), H = i(U.getAttribute("dur"), w), W = i(U.getAttribute("end"), w);
                                if (V === null) throw h(U);
                                if (W === null) {
                                    if (H === null) throw h(U);
                                    W = V + H;
                                }
                                var Y = new L.default(V - R, W - R, G);
                                Y.id = Object(A.generateCueId)(Y.startTime, Y.endTime, Y.text);
                                var q = M[U.getAttribute("region")], Q = N[U.getAttribute("style")];
                                Y.position = 10, Y.size = 80;
                                var J = function(st, $) {
                                    var tt = "http://www.w3.org/ns/ttml#styling";
                                    return [ "displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily" ].reduce(function(nt, it) {
                                        var dt = o($, tt, it) || o(st, tt, it);
                                        return dt && (nt[it] = dt), nt;
                                    }, {});
                                }(q, Q), rt = J.textAlign;
                                if (rt) {
                                    var Z = b[rt];
                                    Z && (Y.lineAlign = Z), Y.align = rt;
                                }
                                return d(Y, J), Y;
                            }).filter(function(U) {
                                return U !== null;
                            });
                        }(e, m));
                    } catch (_) {
                        c(_);
                    }
                } else c(new Error("Could not parse IMSC1 mdat"));
            }
            function r(a, f, g) {
                var n = a.getElementsByTagName(f)[0];
                return n ? [].slice.call(n.querySelectorAll(g)) : [];
            }
            function t(a) {
                return a.reduce(function(f, g) {
                    var n = g.getAttribute("xml:id");
                    return n && (f[n] = g), f;
                }, {});
            }
            function l(a, f) {
                return [].slice.call(a.childNodes).reduce(function(g, n, c) {
                    var u;
                    return n.nodeName === "br" && c ? g + `
` : (u = n.childNodes) !== null && u !== void 0 && u.length ? l(n, f) : f ? g + n.textContent.trim().replace(/\s+/g, " ") : g + n.textContent;
                }, "");
            }
            function o(a, f, g) {
                return a.hasAttributeNS(f, g) ? a.getAttributeNS(f, g) : null;
            }
            function h(a) {
                return new Error("Could not parse ttml timestamp " + a);
            }
            function i(a, f) {
                if (!a) return null;
                var g = Object(S.parseTimeStamp)(a);
                return g === null && (p.test(a) ? g = function(n, c) {
                    var u = p.exec(n), s = (0 | u[4]) + (0 | u[5]) / c.subFrameRate;
                    return 3600 * (0 | u[1]) + 60 * (0 | u[2]) + (0 | u[3]) + s / c.frameRate;
                }(a, f) : y.test(a) && (g = function(n, c) {
                    var u = y.exec(n), s = Number(u[1]);
                    switch (u[2]) {
                      case "h":
                        return 3600 * s;

                      case "m":
                        return 60 * s;

                      case "ms":
                        return 1e3 * s;

                      case "f":
                        return s / c.frameRate;

                      case "t":
                        return s / c.tickRate;
                    }
                    return s;
                }(a, f))), g;
            }
        },
        "./src/utils/logger.ts": function(F, C, v) {
            v.r(C), v.d(C, "enableLogs", function() {
                return I;
            }), v.d(C, "logger", function() {
                return A;
            });
            var k = function() {}, S = {
                trace: k,
                debug: k,
                log: k,
                warn: k,
                info: k,
                error: k
            }, L = S;
            function D(d) {
                var T = self.console[d];
                return T ? T.bind(self.console, "[" + d + "] >") : k;
            }
            function I(d) {
                if (self.console && d === !0 || typeof d == "object") {
                    (function(T) {
                        for (var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), b = 1; b < p; b++) y[b - 1] = arguments[b];
                        y.forEach(function(E) {
                            L[E] = T[E] ? T[E].bind(T) : D(E);
                        });
                    })(d, "debug", "log", "info", "warn", "error");
                    try {
                        L.log();
                    } catch {
                        L = S;
                    }
                } else L = S;
            }
            var A = S;
        },
        "./src/utils/mediakeys-helper.ts": function(F, C, v) {
            var k, S;
            v.r(C), v.d(C, "KeySystems", function() {
                return k;
            }), v.d(C, "requestMediaKeySystemAccess", function() {
                return L;
            }), (S = k || (k = {})).WIDEVINE = "com.widevine.alpha", S.PLAYREADY = "com.microsoft.playready";
            var L = typeof self < "u" && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
        },
        "./src/utils/mediasource-helper.ts": function(F, C, v) {
            function k() {
                return self.MediaSource || self.WebKitMediaSource;
            }
            v.r(C), v.d(C, "getMediaSource", function() {
                return k;
            });
        },
        "./src/utils/mp4-tools.ts": function(F, C, v) {
            v.r(C), v.d(C, "bin2str", function() {
                return I;
            }), v.d(C, "readUint16", function() {
                return A;
            }), v.d(C, "readUint32", function() {
                return d;
            }), v.d(C, "writeUint32", function() {
                return T;
            }), v.d(C, "findBox", function() {
                return p;
            }), v.d(C, "parseSegmentIndex", function() {
                return y;
            }), v.d(C, "parseInitSegment", function() {
                return b;
            }), v.d(C, "getStartDTS", function() {
                return E;
            }), v.d(C, "getDuration", function() {
                return r;
            }), v.d(C, "computeRawDurationFromSamples", function() {
                return t;
            }), v.d(C, "offsetStartDTS", function() {
                return l;
            }), v.d(C, "segmentValidRange", function() {
                return o;
            }), v.d(C, "appendUint8Array", function() {
                return h;
            });
            var k = v("./src/utils/typed-array.ts"), S = v("./src/loader/fragment.ts"), L = Math.pow(2, 32) - 1, D = [].push;
            function I(i) {
                return String.fromCharCode.apply(null, i);
            }
            function A(i, a) {
                "data" in i && (a += i.start, i = i.data);
                var f = i[a] << 8 | i[a + 1];
                return f < 0 ? 65536 + f : f;
            }
            function d(i, a) {
                "data" in i && (a += i.start, i = i.data);
                var f = i[a] << 24 | i[a + 1] << 16 | i[a + 2] << 8 | i[a + 3];
                return f < 0 ? 4294967296 + f : f;
            }
            function T(i, a, f) {
                "data" in i && (a += i.start, i = i.data), i[a] = f >> 24, i[a + 1] = f >> 16 & 255, 
                i[a + 2] = f >> 8 & 255, i[a + 3] = 255 & f;
            }
            function p(i, a) {
                var f, g, n, c = [];
                if (!a.length) return c;
                "data" in i ? (f = i.data, g = i.start, n = i.end) : (g = 0, n = (f = i).byteLength);
                for (var u = g; u < n; ) {
                    var s = d(f, u), e = s > 1 ? u + s : n;
                    if (I(f.subarray(u + 4, u + 8)) === a[0]) if (a.length === 1) c.push({
                        data: f,
                        start: u + 8,
                        end: e
                    }); else {
                        var m = p({
                            data: f,
                            start: u + 8,
                            end: e
                        }, a.slice(1));
                        m.length && D.apply(c, m);
                    }
                    u = e;
                }
                return c;
            }
            function y(i) {
                var a = p(i, [ "moov" ])[0], f = a ? a.end : null, g = p(i, [ "sidx" ]);
                if (!g || !g[0]) return null;
                var n = [], c = g[0], u = c.data[0], s = u === 0 ? 8 : 16, e = d(c, s);
                s += 4, s += u === 0 ? 8 : 16, s += 2;
                var m = c.end + 0, _ = A(c, s);
                s += 2;
                for (var R = 0; R < _; R++) {
                    var O = s, x = d(c, O), w = 2147483647 & x;
                    if ((2147483648 & x) >>> 31 == 1) return null;
                    var P = d(c, O += 4);
                    O += 4, n.push({
                        referenceSize: w,
                        subsegmentDuration: P,
                        info: {
                            duration: P / e,
                            start: m,
                            end: m + w - 1
                        }
                    }), m += w, s = O += 4;
                }
                return {
                    earliestPresentationTime: 0,
                    timescale: e,
                    version: u,
                    referencesCount: _,
                    references: n,
                    moovEndOffset: f
                };
            }
            function b(i) {
                for (var a = [], f = p(i, [ "moov", "trak" ]), g = 0; g < f.length; g++) {
                    var n = f[g], c = p(n, [ "tkhd" ])[0];
                    if (c) {
                        var u = c.data[c.start], s = u === 0 ? 12 : 20, e = d(c, s), m = p(n, [ "mdia", "mdhd" ])[0];
                        if (m) {
                            var _ = d(m, s = (u = m.data[m.start]) === 0 ? 12 : 20), R = p(n, [ "mdia", "hdlr" ])[0];
                            if (R) {
                                var O = I(R.data.subarray(R.start + 8, R.start + 12)), x = {
                                    soun: S.ElementaryStreamTypes.AUDIO,
                                    vide: S.ElementaryStreamTypes.VIDEO
                                }[O];
                                if (x) {
                                    var w = p(n, [ "mdia", "minf", "stbl", "stsd" ])[0], P = void 0;
                                    w && (P = I(w.data.subarray(w.start + 12, w.start + 16))), 
                                    a[e] = {
                                        timescale: _,
                                        type: x
                                    }, a[x] = {
                                        timescale: _,
                                        id: e,
                                        codec: P
                                    };
                                }
                            }
                        }
                    }
                }
                return p(i, [ "moov", "mvex", "trex" ]).forEach(function(N) {
                    var M = d(N, 4), B = a[M];
                    B && (B.default = {
                        duration: d(N, 12),
                        flags: d(N, 20)
                    });
                }), a;
            }
            function E(i, a) {
                return p(a, [ "moof", "traf" ]).reduce(function(f, g) {
                    var n = p(g, [ "tfdt" ])[0], c = n.data[n.start], u = p(g, [ "tfhd" ]).reduce(function(s, e) {
                        var m = d(e, 4), _ = i[m];
                        if (_) {
                            var R = d(n, 4);
                            c === 1 && (R *= Math.pow(2, 32), R += d(n, 8));
                            var O = R / (_.timescale || 9e4);
                            if (isFinite(O) && (s === null || O < s)) return O;
                        }
                        return s;
                    }, null);
                    return u !== null && isFinite(u) && (f === null || u < f) ? u : f;
                }, null) || 0;
            }
            function r(i, a) {
                for (var f = 0, g = 0, n = 0, c = p(i, [ "moof", "traf" ]), u = 0; u < c.length; u++) {
                    var s = c[u], e = p(s, [ "tfhd" ])[0], m = a[d(e, 4)];
                    if (m) {
                        var _ = m.default, R = d(e, 0) | (_ == null ? void 0 : _.flags), O = _ == null ? void 0 : _.duration;
                        8 & R && (O = d(e, 2 & R ? 12 : 8));
                        for (var x = m.timescale || 9e4, w = p(s, [ "trun" ]), P = 0; P < w.length; P++) f = O ? O * d(w[P], 4) : t(w[P]), 
                        m.type === S.ElementaryStreamTypes.VIDEO ? g += f / x : m.type === S.ElementaryStreamTypes.AUDIO && (n += f / x);
                    }
                }
                if (g === 0 && n === 0) {
                    var N = y(i);
                    if (N != null && N.references) return N.references.reduce(function(M, B) {
                        return M + B.info.duration || 0;
                    }, 0);
                }
                return g || n;
            }
            function t(i) {
                var a = d(i, 0), f = 8;
                1 & a && (f += 4), 4 & a && (f += 4);
                for (var g = 0, n = d(i, 4), c = 0; c < n; c++) 256 & a && (g += d(i, f), 
                f += 4), 512 & a && (f += 4), 1024 & a && (f += 4), 2048 & a && (f += 4);
                return g;
            }
            function l(i, a, f) {
                p(a, [ "moof", "traf" ]).forEach(function(g) {
                    p(g, [ "tfhd" ]).forEach(function(n) {
                        var c = d(n, 4), u = i[c];
                        if (u) {
                            var s = u.timescale || 9e4;
                            p(g, [ "tfdt" ]).forEach(function(e) {
                                var m = e.data[e.start], _ = d(e, 4);
                                if (m === 0) T(e, 4, _ - f * s); else {
                                    _ *= Math.pow(2, 32), _ += d(e, 8), _ -= f * s, 
                                    _ = Math.max(_, 0);
                                    var R = Math.floor(_ / (L + 1)), O = Math.floor(_ % (L + 1));
                                    T(e, 4, R), T(e, 8, O);
                                }
                            });
                        }
                    });
                });
            }
            function o(i) {
                var a = {
                    valid: null,
                    remainder: null
                }, f = p(i, [ "moof" ]);
                if (!f) return a;
                if (f.length < 2) return a.remainder = i, a;
                var g = f[f.length - 1];
                return a.valid = Object(k.sliceUint8)(i, 0, g.start - 8), a.remainder = Object(k.sliceUint8)(i, g.start - 8), 
                a;
            }
            function h(i, a) {
                var f = new Uint8Array(i.length + a.length);
                return f.set(i), f.set(a, i.length), f;
            }
        },
        "./src/utils/output-filter.ts": function(F, C, v) {
            v.r(C), v.d(C, "default", function() {
                return k;
            });
            var k = function() {
                function S(D, I) {
                    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, 
                    this.startTime = null, this.endTime = null, this.screen = null, 
                    this.timelineController = D, this.trackName = I;
                }
                var L = S.prototype;
                return L.dispatchCue = function() {
                    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), 
                    this.startTime = null);
                }, L.newCue = function(D, I, A) {
                    (this.startTime === null || this.startTime > D) && (this.startTime = D), 
                    this.endTime = I, this.screen = A, this.timelineController.createCaptionsTrack(this.trackName);
                }, L.reset = function() {
                    this.cueRanges = [];
                }, S;
            }();
        },
        "./src/utils/texttrack-utils.ts": function(F, C, v) {
            v.r(C), v.d(C, "sendAddTrackEvent", function() {
                return S;
            }), v.d(C, "addCueToTrack", function() {
                return L;
            }), v.d(C, "clearCurrentCues", function() {
                return D;
            }), v.d(C, "removeCuesInRange", function() {
                return I;
            }), v.d(C, "getCuesInRange", function() {
                return A;
            });
            var k = v("./src/utils/logger.ts");
            function S(d, T) {
                var p;
                try {
                    p = new Event("addtrack");
                } catch {
                    (p = document.createEvent("Event")).initEvent("addtrack", !1, !1);
                }
                p.track = d, T.dispatchEvent(p);
            }
            function L(d, T) {
                var p = d.mode;
                if (p === "disabled" && (d.mode = "hidden"), d.cues && !d.cues.getCueById(T.id)) try {
                    if (d.addCue(T), !d.cues.getCueById(T.id)) throw new Error("addCue is failed for: " + T);
                } catch (b) {
                    k.logger.debug("[texttrack-utils]: " + b);
                    var y = new self.TextTrackCue(T.startTime, T.endTime, T.text);
                    y.id = T.id, d.addCue(y);
                }
                p === "disabled" && (d.mode = p);
            }
            function D(d) {
                var T = d.mode;
                if (T === "disabled" && (d.mode = "hidden"), d.cues) for (var p = d.cues.length; p--; ) d.removeCue(d.cues[p]);
                T === "disabled" && (d.mode = T);
            }
            function I(d, T, p) {
                var y = d.mode;
                if (y === "disabled" && (d.mode = "hidden"), d.cues && d.cues.length > 0) for (var b = A(d.cues, T, p), E = 0; E < b.length; E++) d.removeCue(b[E]);
                y === "disabled" && (d.mode = y);
            }
            function A(d, T, p) {
                var y = [], b = function(l, o) {
                    if (o < l[0].startTime) return 0;
                    var h = l.length - 1;
                    if (o > l[h].endTime) return -1;
                    for (var i = 0, a = h; i <= a; ) {
                        var f = Math.floor((a + i) / 2);
                        if (o < l[f].startTime) a = f - 1; else {
                            if (!(o > l[f].startTime && i < h)) return f;
                            i = f + 1;
                        }
                    }
                    return l[i].startTime - o < o - l[a].startTime ? i : a;
                }(d, T);
                if (b > -1) for (var E = b, r = d.length; E < r; E++) {
                    var t = d[E];
                    if (t.startTime >= T && t.endTime <= p) y.push(t); else if (t.startTime > p) return y;
                }
                return y;
            }
        },
        "./src/utils/time-ranges.ts": function(F, C, v) {
            v.r(C), C.default = {
                toString: function(k) {
                    for (var S = "", L = k.length, D = 0; D < L; D++) S += "[" + k.start(D).toFixed(3) + "," + k.end(D).toFixed(3) + "]";
                    return S;
                }
            };
        },
        "./src/utils/timescale-conversion.ts": function(F, C, v) {
            function k(I, A, d, T) {
                d === void 0 && (d = 1), T === void 0 && (T = !1);
                var p = I * A * d;
                return T ? Math.round(p) : p;
            }
            function S(I, A, d, T) {
                return d === void 0 && (d = 1), T === void 0 && (T = !1), k(I, A, 1 / d, T);
            }
            function L(I, A) {
                return A === void 0 && (A = !1), k(I, 1e3, 1 / 9e4, A);
            }
            function D(I, A) {
                return A === void 0 && (A = 1), k(I, 9e4, 1 / A);
            }
            v.r(C), v.d(C, "toTimescaleFromBase", function() {
                return k;
            }), v.d(C, "toTimescaleFromScale", function() {
                return S;
            }), v.d(C, "toMsFromMpegTsClock", function() {
                return L;
            }), v.d(C, "toMpegTsClockFromTimescale", function() {
                return D;
            });
        },
        "./src/utils/typed-array.ts": function(F, C, v) {
            function k(S, L, D) {
                return Uint8Array.prototype.slice ? S.slice(L, D) : new Uint8Array(Array.prototype.slice.call(S, L, D));
            }
            v.r(C), v.d(C, "sliceUint8", function() {
                return k;
            });
        },
        "./src/utils/vttcue.ts": function(F, C, v) {
            v.r(C), C.default = function() {
                if (typeof self < "u" && self.VTTCue) return self.VTTCue;
                var k = [ "", "lr", "rl" ], S = [ "start", "middle", "end", "left", "right" ];
                function L(d, T) {
                    if (typeof T != "string" || !Array.isArray(d)) return !1;
                    var p = T.toLowerCase();
                    return !!~d.indexOf(p) && p;
                }
                function D(d) {
                    return L(S, d);
                }
                function I(d) {
                    for (var T = arguments.length, p = new Array(T > 1 ? T - 1 : 0), y = 1; y < T; y++) p[y - 1] = arguments[y];
                    for (var b = 1; b < arguments.length; b++) {
                        var E = arguments[b];
                        for (var r in E) d[r] = E[r];
                    }
                    return d;
                }
                function A(d, T, p) {
                    var y = this, b = {
                        enumerable: !0
                    };
                    y.hasBeenReset = !1;
                    var E = "", r = !1, t = d, l = T, o = p, h = null, i = "", a = !0, f = "auto", g = "start", n = 50, c = "middle", u = 50, s = "middle";
                    Object.defineProperty(y, "id", I({}, b, {
                        get: function() {
                            return E;
                        },
                        set: function(e) {
                            E = "" + e;
                        }
                    })), Object.defineProperty(y, "pauseOnExit", I({}, b, {
                        get: function() {
                            return r;
                        },
                        set: function(e) {
                            r = !!e;
                        }
                    })), Object.defineProperty(y, "startTime", I({}, b, {
                        get: function() {
                            return t;
                        },
                        set: function(e) {
                            if (typeof e != "number") throw new TypeError("Start time must be set to a number.");
                            t = e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "endTime", I({}, b, {
                        get: function() {
                            return l;
                        },
                        set: function(e) {
                            if (typeof e != "number") throw new TypeError("End time must be set to a number.");
                            l = e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "text", I({}, b, {
                        get: function() {
                            return o;
                        },
                        set: function(e) {
                            o = "" + e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "region", I({}, b, {
                        get: function() {
                            return h;
                        },
                        set: function(e) {
                            h = e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "vertical", I({}, b, {
                        get: function() {
                            return i;
                        },
                        set: function(e) {
                            var m = function(_) {
                                return L(k, _);
                            }(e);
                            if (m === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                            i = m, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "snapToLines", I({}, b, {
                        get: function() {
                            return a;
                        },
                        set: function(e) {
                            a = !!e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "line", I({}, b, {
                        get: function() {
                            return f;
                        },
                        set: function(e) {
                            if (typeof e != "number" && e !== "auto") throw new SyntaxError("An invalid number or illegal string was specified.");
                            f = e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "lineAlign", I({}, b, {
                        get: function() {
                            return g;
                        },
                        set: function(e) {
                            var m = D(e);
                            if (!m) throw new SyntaxError("An invalid or illegal string was specified.");
                            g = m, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "position", I({}, b, {
                        get: function() {
                            return n;
                        },
                        set: function(e) {
                            if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                            n = e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "positionAlign", I({}, b, {
                        get: function() {
                            return c;
                        },
                        set: function(e) {
                            var m = D(e);
                            if (!m) throw new SyntaxError("An invalid or illegal string was specified.");
                            c = m, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "size", I({}, b, {
                        get: function() {
                            return u;
                        },
                        set: function(e) {
                            if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                            u = e, this.hasBeenReset = !0;
                        }
                    })), Object.defineProperty(y, "align", I({}, b, {
                        get: function() {
                            return s;
                        },
                        set: function(e) {
                            var m = D(e);
                            if (!m) throw new SyntaxError("An invalid or illegal string was specified.");
                            s = m, this.hasBeenReset = !0;
                        }
                    })), y.displayState = void 0;
                }
                return A.prototype.getCueAsHTML = function() {
                    return self.WebVTT.convertCueToDOMTree(self, this.text);
                }, A;
            }();
        },
        "./src/utils/vttparser.ts": function(F, C, v) {
            v.r(C), v.d(C, "parseTimeStamp", function() {
                return L;
            }), v.d(C, "fixLineBreaks", function() {
                return p;
            }), v.d(C, "VTTParser", function() {
                return y;
            });
            var k = v("./src/utils/vttcue.ts"), S = function() {
                function b() {}
                return b.prototype.decode = function(E, r) {
                    if (!E) return "";
                    if (typeof E != "string") throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(E));
                }, b;
            }();
            function L(b) {
                function E(t, l, o, h) {
                    return 3600 * (0 | t) + 60 * (0 | l) + (0 | o) + parseFloat(h || 0);
                }
                var r = b.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
                return r ? parseFloat(r[2]) > 59 ? E(r[2], r[3], 0, r[4]) : E(r[1], r[2], r[3], r[4]) : null;
            }
            var D = function() {
                function b() {
                    this.values = Object.create(null);
                }
                var E = b.prototype;
                return E.set = function(r, t) {
                    this.get(r) || t === "" || (this.values[r] = t);
                }, E.get = function(r, t, l) {
                    return l ? this.has(r) ? this.values[r] : t[l] : this.has(r) ? this.values[r] : t;
                }, E.has = function(r) {
                    return r in this.values;
                }, E.alt = function(r, t, l) {
                    for (var o = 0; o < l.length; ++o) if (t === l[o]) {
                        this.set(r, t);
                        break;
                    }
                }, E.integer = function(r, t) {
                    /^-?\d+$/.test(t) && this.set(r, parseInt(t, 10));
                }, E.percent = function(r, t) {
                    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
                        var l = parseFloat(t);
                        if (l >= 0 && l <= 100) return this.set(r, l), !0;
                    }
                    return !1;
                }, b;
            }();
            function I(b, E, r, t) {
                var l = t ? b.split(t) : [ b ];
                for (var o in l) if (typeof l[o] == "string") {
                    var h = l[o].split(r);
                    h.length === 2 && E(h[0], h[1]);
                }
            }
            var A = new k.default(0, 0, ""), d = A.align === "middle" ? "middle" : "center";
            function T(b, E, r) {
                var t = b;
                function l() {
                    var h = L(b);
                    if (h === null) throw new Error("Malformed timestamp: " + t);
                    return b = b.replace(/^[^\sa-zA-Z-]+/, ""), h;
                }
                function o() {
                    b = b.replace(/^\s+/, "");
                }
                if (o(), E.startTime = l(), o(), b.substr(0, 3) !== "--\x3e") throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + t);
                b = b.substr(3), o(), E.endTime = l(), o(), function(h, i) {
                    var a = new D();
                    I(h, function(n, c) {
                        var u;
                        switch (n) {
                          case "region":
                            for (var s = r.length - 1; s >= 0; s--) if (r[s].id === c) {
                                a.set(n, r[s].region);
                                break;
                            }
                            break;

                          case "vertical":
                            a.alt(n, c, [ "rl", "lr" ]);
                            break;

                          case "line":
                            u = c.split(","), a.integer(n, u[0]), a.percent(n, u[0]) && a.set("snapToLines", !1), 
                            a.alt(n, u[0], [ "auto" ]), u.length === 2 && a.alt("lineAlign", u[1], [ "start", d, "end" ]);
                            break;

                          case "position":
                            u = c.split(","), a.percent(n, u[0]), u.length === 2 && a.alt("positionAlign", u[1], [ "start", d, "end", "line-left", "line-right", "auto" ]);
                            break;

                          case "size":
                            a.percent(n, c);
                            break;

                          case "align":
                            a.alt(n, c, [ "start", d, "end", "left", "right" ]);
                        }
                    }, /:/, /\s/), i.region = a.get("region", null), i.vertical = a.get("vertical", "");
                    var f = a.get("line", "auto");
                    f === "auto" && A.line === -1 && (f = -1), i.line = f, i.lineAlign = a.get("lineAlign", "start"), 
                    i.snapToLines = a.get("snapToLines", !0), i.size = a.get("size", 100), 
                    i.align = a.get("align", d);
                    var g = a.get("position", "auto");
                    g === "auto" && A.position === 50 && (g = i.align === "start" || i.align === "left" ? 0 : i.align === "end" || i.align === "right" ? 100 : 50), 
                    i.position = g;
                }(b, E);
            }
            function p(b) {
                return b.replace(/<br(?: \/)?>/gi, `
`);
            }
            var y = function() {
                function b() {
                    this.state = "INITIAL", this.buffer = "", this.decoder = new S(), 
                    this.regionList = [], this.cue = null, this.oncue = void 0, 
                    this.onparsingerror = void 0, this.onflush = void 0;
                }
                var E = b.prototype;
                return E.parse = function(r) {
                    var t = this;
                    function l() {
                        var f = t.buffer, g = 0;
                        for (f = p(f); g < f.length && f[g] !== "\r" && f[g] !== `
`; ) ++g;
                        var n = f.substr(0, g);
                        return f[g] === "\r" && ++g, f[g] === `
` && ++g, t.buffer = f.substr(g), n;
                    }
                    r && (t.buffer += t.decoder.decode(r, {
                        stream: !0
                    }));
                    try {
                        var o = "";
                        if (t.state === "INITIAL") {
                            if (!/\r\n|\n/.test(t.buffer)) return this;
                            var h = (o = l()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (!h || !h[0]) throw new Error("Malformed WebVTT signature.");
                            t.state = "HEADER";
                        }
                        for (var i = !1; t.buffer; ) {
                            if (!/\r\n|\n/.test(t.buffer)) return this;
                            switch (i ? i = !1 : o = l(), t.state) {
                              case "HEADER":
                                /:/.test(o) ? I(o, function(f, g) {}, /:/) : o || (t.state = "ID");
                                continue;

                              case "NOTE":
                                o || (t.state = "ID");
                                continue;

                              case "ID":
                                if (/^NOTE($|[ \t])/.test(o)) {
                                    t.state = "NOTE";
                                    break;
                                }
                                if (!o) continue;
                                if (t.cue = new k.default(0, 0, ""), t.state = "CUE", 
                                o.indexOf("--\x3e") === -1) {
                                    t.cue.id = o;
                                    continue;
                                }

                              case "CUE":
                                if (!t.cue) {
                                    t.state = "BADCUE";
                                    continue;
                                }
                                try {
                                    T(o, t.cue, t.regionList);
                                } catch {
                                    t.cue = null, t.state = "BADCUE";
                                    continue;
                                }
                                t.state = "CUETEXT";
                                continue;

                              case "CUETEXT":
                                var a = o.indexOf("--\x3e") !== -1;
                                if (!o || a && (i = !0)) {
                                    t.oncue && t.cue && t.oncue(t.cue), t.cue = null, 
                                    t.state = "ID";
                                    continue;
                                }
                                if (t.cue === null) continue;
                                t.cue.text && (t.cue.text += `
`), t.cue.text += o;
                                continue;

                              case "BADCUE":
                                o || (t.state = "ID");
                            }
                        }
                    } catch {
                        t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), 
                        t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
                    }
                    return this;
                }, E.flush = function() {
                    var r = this;
                    try {
                        if ((r.cue || r.state === "HEADER") && (r.buffer += `

`, r.parse()), r.state === "INITIAL" || r.state === "BADWEBVTT") throw new Error("Malformed WebVTT signature.");
                    } catch (t) {
                        r.onparsingerror && r.onparsingerror(t);
                    }
                    return r.onflush && r.onflush(), this;
                }, b;
            }();
        },
        "./src/utils/webvtt-parser.ts": function(F, C, v) {
            v.r(C), v.d(C, "generateCueId", function() {
                return p;
            }), v.d(C, "parseWebVTT", function() {
                return y;
            });
            var k = v("./src/polyfills/number.ts"), S = v("./src/utils/vttparser.ts"), L = v("./src/demux/id3.ts"), D = v("./src/utils/timescale-conversion.ts"), I = v("./src/remux/mp4-remuxer.ts"), A = /\r\n|\n\r|\n|\r/g, d = function(b, E, r) {
                return r === void 0 && (r = 0), b.substr(r, E.length) === E;
            }, T = function(b) {
                for (var E = 5381, r = b.length; r; ) E = 33 * E ^ b.charCodeAt(--r);
                return (E >>> 0).toString();
            };
            function p(b, E, r) {
                return T(b.toString()) + T(E.toString()) + T(r);
            }
            function y(b, E, r, t, l, o, h, i) {
                var a, f = new S.VTTParser(), g = Object(L.utf8ArrayToStr)(new Uint8Array(b)).trim().replace(A, `
`).split(`
`), n = [], c = Object(D.toMpegTsClockFromTimescale)(E, r), u = "00:00.000", s = 0, e = 0, m = !0, _ = !1;
                f.oncue = function(R) {
                    var O = t[l], x = t.ccOffset, w = (s - c) / 9e4;
                    if (O != null && O.new && (e !== void 0 ? x = t.ccOffset = O.start : function(B, U, G) {
                        var V = B[U], H = B[V.prevCC];
                        if (!H || !H.new && V.new) return B.ccOffset = B.presentationOffset = V.start, 
                        void (V.new = !1);
                        for (;(W = H) !== null && W !== void 0 && W.new; ) {
                            var W;
                            B.ccOffset += V.start - H.start, V.new = !1, H = B[(V = H).prevCC];
                        }
                        B.presentationOffset = G;
                    }(t, l, w)), w && (x = w - t.presentationOffset), _) {
                        var P = R.endTime - R.startTime, N = Object(I.normalizePts)(9e4 * (R.startTime + x - e), 9e4 * o) / 9e4;
                        R.startTime = N, R.endTime = N + P;
                    }
                    var M = R.text.trim();
                    R.text = decodeURIComponent(encodeURIComponent(M)), R.id || (R.id = p(R.startTime, R.endTime, M)), 
                    R.endTime > 0 && n.push(R);
                }, f.onparsingerror = function(R) {
                    a = R;
                }, f.onflush = function() {
                    a ? i(a) : h(n);
                }, g.forEach(function(R) {
                    if (m) {
                        if (d(R, "X-TIMESTAMP-MAP=")) {
                            m = !1, _ = !0, R.substr(16).split(",").forEach(function(O) {
                                d(O, "LOCAL:") ? u = O.substr(6) : d(O, "MPEGTS:") && (s = parseInt(O.substr(7)));
                            });
                            try {
                                e = function(O) {
                                    var x = parseInt(O.substr(-3)), w = parseInt(O.substr(-6, 2)), P = parseInt(O.substr(-9, 2)), N = O.length > 9 ? parseInt(O.substr(0, O.indexOf(":"))) : 0;
                                    if (!(Object(k.isFiniteNumber)(x) && Object(k.isFiniteNumber)(w) && Object(k.isFiniteNumber)(P) && Object(k.isFiniteNumber)(N))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + O);
                                    return x += 1e3 * w, (x += 6e4 * P) + 36e5 * N;
                                }(u) / 1e3;
                            } catch (O) {
                                _ = !1, a = O;
                            }
                            return;
                        }
                        R === "" && (m = !1);
                    }
                    f.parse(R + `
`);
                }), f.flush();
            }
        },
        "./src/utils/xhr-loader.ts": function(F, C, v) {
            v.r(C);
            var k = v("./src/utils/logger.ts"), S = v("./src/loader/load-stats.ts"), L = /^age:\s*[\d.]+\s*$/m, D = function() {
                function I(d) {
                    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, 
                    this.retryDelay = void 0, this.config = null, this.callbacks = null, 
                    this.context = void 0, this.loader = null, this.stats = void 0, 
                    this.xhrSetup = d ? d.xhrSetup : null, this.stats = new S.LoadStats(), 
                    this.retryDelay = 0;
                }
                var A = I.prototype;
                return A.destroy = function() {
                    this.callbacks = null, this.abortInternal(), this.loader = null, 
                    this.config = null;
                }, A.abortInternal = function() {
                    var d = this.loader;
                    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), 
                    d && (d.onreadystatechange = null, d.onprogress = null, d.readyState !== 4 && (this.stats.aborted = !0, 
                    d.abort()));
                }, A.abort = function() {
                    var d;
                    this.abortInternal(), (d = this.callbacks) !== null && d !== void 0 && d.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
                }, A.load = function(d, T, p) {
                    if (this.stats.loading.start) throw new Error("Loader can only be used once.");
                    this.stats.loading.start = self.performance.now(), this.context = d, 
                    this.config = T, this.callbacks = p, this.retryDelay = T.retryDelay, 
                    this.loadInternal();
                }, A.loadInternal = function() {
                    var d = this.config, T = this.context;
                    if (d) {
                        var p = this.loader = new self.XMLHttpRequest(), y = this.stats;
                        y.loading.first = 0, y.loaded = 0;
                        var b = this.xhrSetup;
                        try {
                            if (b) try {
                                b(p, T.url);
                            } catch {
                                p.open("GET", T.url, !0), b(p, T.url);
                            }
                            p.readyState || p.open("GET", T.url, !0);
                        } catch (E) {
                            return void this.callbacks.onError({
                                code: p.status,
                                text: E.message
                            }, T, p);
                        }
                        T.rangeEnd && p.setRequestHeader("Range", "bytes=" + T.rangeStart + "-" + (T.rangeEnd - 1)), 
                        p.onreadystatechange = this.readystatechange.bind(this), 
                        p.onprogress = this.loadprogress.bind(this), p.responseType = T.responseType, 
                        self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), d.timeout), 
                        p.send();
                    }
                }, A.readystatechange = function() {
                    var d = this.context, T = this.loader, p = this.stats;
                    if (d && T) {
                        var y = T.readyState, b = this.config;
                        if (!p.aborted && y >= 2) if (self.clearTimeout(this.requestTimeout), 
                        p.loading.first === 0 && (p.loading.first = Math.max(self.performance.now(), p.loading.start)), 
                        y === 4) {
                            T.onreadystatechange = null, T.onprogress = null;
                            var E = T.status;
                            if (E >= 200 && E < 300) {
                                var r, t;
                                if (p.loading.end = Math.max(self.performance.now(), p.loading.first), 
                                t = d.responseType === "arraybuffer" ? (r = T.response).byteLength : (r = T.responseText).length, 
                                p.loaded = p.total = t, !this.callbacks) return;
                                var l = this.callbacks.onProgress;
                                if (l && l(p, d, r, T), !this.callbacks) return;
                                var o = {
                                    url: T.responseURL,
                                    data: r
                                };
                                this.callbacks.onSuccess(o, p, d, T);
                            } else p.retry >= b.maxRetry || E >= 400 && E < 499 ? (k.logger.error(E + " while loading " + d.url), 
                            this.callbacks.onError({
                                code: E,
                                text: T.statusText
                            }, d, T)) : (k.logger.warn(E + " while loading " + d.url + ", retrying in " + this.retryDelay + "..."), 
                            this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), 
                            this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), 
                            this.retryDelay = Math.min(2 * this.retryDelay, b.maxRetryDelay), 
                            p.retry++);
                        } else self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), b.timeout);
                    }
                }, A.loadtimeout = function() {
                    k.logger.warn("timeout while loading " + this.context.url);
                    var d = this.callbacks;
                    d && (this.abortInternal(), d.onTimeout(this.stats, this.context, this.loader));
                }, A.loadprogress = function(d) {
                    var T = this.stats;
                    T.loaded = d.loaded, d.lengthComputable && (T.total = d.total);
                }, A.getCacheAge = function() {
                    var d = null;
                    if (this.loader && L.test(this.loader.getAllResponseHeaders())) {
                        var T = this.loader.getResponseHeader("age");
                        d = T ? parseFloat(T) : null;
                    }
                    return d;
                }, I;
            }();
            C.default = D;
        }
    }).default);
    var Jt = function(F) {
        return F && F.__esModule && Object.prototype.hasOwnProperty.call(F, "default") ? F.default : F;
    }(le.exports);
    const vt = Object.assign({
        name: "d-icon"
    }, {
        props: {
            icon: String,
            size: [ Number, String ]
        },
        setup: function(F) {
            const C = F, v = wt(() => ({
                fontSize: /^\d+$/.test(C.size) ? C.size + "px" : C.size
            }));
            return (k, S) => (X(), z("i", {
                class: Ot([ "d-icon iconfont", F.icon ]),
                style: xt(j(v))
            }, null, 6));
        }
    });
    vt.__scopeId = "data-v-0c690e66", Pt("data-v-4cb76d59");
    const Le = {
        class: "d-player-top"
    }, Ae = {
        class: "top-title"
    }, De = {
        class: "top-title"
    };
    Ft();
    const ke = {
        props: {
            title: {
                default: ""
            }
        },
        setup(F) {
            Date.prototype.format = function(k) {
                let S = {
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds()
                };
                for (var L in S) new RegExp("(" + L + ")").test(k) && (k = k.replace(RegExp.$1, RegExp.$1.length == 1 ? S[L] : ("00" + S[L]).substr(("" + S[L]).length)));
                return k;
            };
            let C = Dt("00:00:00");
            C.value = new Date().format("hh:mm:ss");
            let v = null;
            return v = setInterval(() => {
                C.value = new Date().format("hh:mm:ss");
            }, 1e3), ve(() => {
                clearInterval(v);
            }), (k, S) => (X(), z("div", Le, [ K("p", Ae, at(F.title || ""), 1), K("p", De, at(j(C)), 1) ]));
        },
        __scopeId: "data-v-4cb76d59"
    };
    Pt("data-v-ac2469ec");
    const Re = {
        class: "d-status"
    }, _e = {
        class: "d-flex-center"
    }, Ie = {
        class: "d-flex-center"
    }, Ce = Tt("5X速播放中 ");
    Ft();
    var ue = jt({
        props: [ "state" ],
        setup: F => (C, v) => ht((X(), z("div", Re, [ ht(K("li", _e, [ et(vt, {
            size: "18",
            class: "d-status-icon",
            icon: "icon-volume-" + (F.state.volume == 0 ? "mute" : F.state.volume > .5 ? "up" : "down")
        }, null, 8, [ "icon" ]), Tt(" " + at(~~(100 * F.state.volume)) + "% ", 1) ], 512), [ [ ft, F.state.handleType == "volume" ] ]), ht(K("li", Ie, [ et(vt, {
            size: "12",
            icon: "icon-play"
        }), et(vt, {
            size: "12",
            icon: "icon-play",
            style: {
                "margin-right": "5px"
            }
        }), Ce ], 512), [ [ ft, F.state.handleType == "playbackRate" || F.state.isMultiplesPlay ] ]) ], 512)), [ [ ft, F.state.handleType || F.state.isMultiplesPlay ] ])
    });
    ue.__scopeId = "data-v-ac2469ec", Pt("data-v-385f7870");
    const we = [ "checked", "true-value", "false-value" ], Oe = K("span", {
        class: "d-switch_action"
    }, null, -1);
    Ft();
    var qt = jt({
        props: {
            modelValue: {
                type: [ Number, String, Boolean ]
            },
            width: {
                type: String,
                default: "40px"
            },
            trueValue: {
                type: [ Number, String, Boolean ],
                default: !0
            },
            falseValue: {
                type: [ Number, String, Boolean ],
                default: !0
            },
            activeColor: {
                type: [ String ],
                default: "#409EFF"
            }
        },
        emits: [ "update:modelValue", "change" ],
        setup(F, {
            emit: C
        }) {
            const v = F;
            ee(D => ({
                "014e5dc0": F.width,
                e4e32852: F.activeColor
            }));
            const k = Dt(null), S = wt(() => v.modelValue === v.trueValue), L = () => {
                pe(() => {
                    const D = k.value.checked;
                    C("update:modelValue", D), C("change", D);
                });
            };
            return (D, I) => (X(), z("div", {
                class: Ot([ "d-switch", {
                    "is-checked": j(S)
                } ])
            }, [ K("input", {
                class: "d-switch__input",
                ref: k,
                type: "checkbox",
                checked: j(S),
                onChange: L,
                "true-value": F.trueValue,
                "false-value": F.falseValue
            }, null, 40, we), Oe ], 2));
        }
    });
    qt.__scopeId = "data-v-385f7870", Pt("data-v-b2384226");
    const xe = {
        key: 0
    }, Pe = K("i", {
        class: "rotating iconfont icon-loading f50"
    }, null, -1), Fe = [ K("i", {
        class: "rotating iconfont icon-loading f50"
    }, null, -1), K("p", null, "正在缓冲...", -1) ], Me = [ K("i", {
        class: "iconfont icon-replay f24 mr5"
    }, null, -1), Tt("重新播放 ") ], Ne = [ K("i", {
        class: "iconfont icon-replay f24 mr5"
    }, null, -1), Tt("请求错误 ") ];
    Ft();
    var de = jt({
        props: {
            loadType: String,
            text: {
                type: String,
                default: ""
            }
        },
        setup(F) {
            const C = F, {
                proxy: v
            } = Mr(), k = [ "loadstart", "waiting", "ended", "error", "stalled" ], S = () => {
                v.$parent.play();
            }, L = wt(() => {
                let D = "background: rgba(0, 0, 0, .1);z-index:1";
                return C.loadType == "loadstart" && (D = "background: rgba(0, 0, 0, 1);;z-index:3"), 
                D;
            });
            return (D, I) => ht((X(), z("div", {
                class: "d-loading",
                style: xt(j(L))
            }, [ K("div", null, [ F.loadType == "loadstart" ? (X(), z("span", xe, [ Pe, K("p", null, at(F.text), 1) ])) : ut("", !0), ht(K("span", null, Fe, 512), [ [ ft, F.loadType == "waiting" ] ]), ht(K("span", null, [ K("p", {
                onClick: S,
                class: "d-flex-x d-pointer"
            }, Me) ], 512), [ [ ft, F.loadType == "ended" ] ]), ht(K("span", null, [ K("p", {
                onClick: S,
                class: "d-flex-x d-pointer"
            }, Ne) ], 512), [ [ ft, F.loadType == "error" || F.loadType == "stalled" ] ]) ]) ], 4)), [ [ ft, k.includes(F.loadType) ] ]);
        }
    });
    de.__scopeId = "data-v-b2384226";
    const kt = function(F, C, v, k = !1) {
        F && C && v && F.addEventListener(C, v, k);
    }, ct = function(F, C, v, k = !1) {
        F && C && v && F.removeEventListener(C, v, k);
    };
    Pt("data-v-5a794390");
    const Be = [ "onMousedown" ];
    Ft();
    var Mt = jt(Zt(Qt({}, {
        name: "DSlider"
    }), {
        props: {
            modelValue: {
                required: !0,
                type: Number,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            vertical: {
                type: Boolean,
                default: !1
            },
            hover: {
                type: Boolean,
                default: !0
            },
            hoverText: {
                type: String,
                default: ""
            },
            preload: {
                type: Number,
                default: 0
            },
            size: {
                type: String,
                default: "10px"
            }
        },
        emits: [ "update:modelValue", "change", "onMousemove" ],
        setup: function(F, {
            emit: C
        }) {
            const v = F;
            ee(t => ({
                "5242b67b": F.size
            }));
            const k = Dt(null), S = Dt(null), L = Xt({
                dragging: !1,
                hoverPosition: 0,
                hoverTipsLeft: "50%"
            }), D = wt(() => {
                let t = v.modelValue < 0 ? 0 : v.modelValue > 1 ? 1 : v.modelValue;
                return v.vertical ? `height:${100 * t}%` : `width:${100 * t}%`;
            }), I = wt(() => {
                let t = v.preload < 0 ? 0 : v.preload > 1 ? 1 : v.preload;
                return v.vertical ? `height:${100 * t}%` : `width:${100 * t}%`;
            }), A = wt(() => {
                let t = L.hoverPosition < 0 ? 0 : L.hoverPosition > 1 ? 1 : L.hoverPosition;
                return v.vertical ? `bottom:${100 * t}%` : `left:${100 * t}%`;
            }), d = t => {
                t.preventDefault();
            }, T = t => {
                v.disabled || (t.preventDefault(), L.dragging = !0, y(t), kt(window, "mousemove", E), 
                kt(window, "touchmove", E), kt(window, "mouseup", r), kt(window, "touchend", r));
            }, p = t => {
                if (!v.hover) return;
                let l = b(t);
                if (C("onMousemove", t, l), L.hoverPosition = l, v.vertical) return;
                let o = k.value, h = S.value.clientWidth / 2, i = t.clientX - o.getBoundingClientRect().left;
                i < h ? L.hoverTipsLeft = h - i + "px" : o.clientWidth - i < h ? L.hoverTipsLeft = o.clientWidth - i - h + "px" : L.hoverTipsLeft = "50%";
            }, y = t => {
                let l = b(t);
                C("update:modelValue", l), C("change", t, l);
            }, b = t => {
                let l = k.value, o = 0;
                if (v.vertical) {
                    let h = l.clientHeight;
                    o = (l.getBoundingClientRect().bottom - t.clientY) / h;
                } else o = (t.clientX - l.getBoundingClientRect().left) / l.clientWidth;
                return o < 0 ? 0 : o > 1 ? 1 : o;
            }, E = t => {
                y(t);
            }, r = t => {
                L.dragging && (ct(window, "mousemove", E), ct(window, "touchmove", E), 
                ct(window, "mouseup", r), ct(window, "touchend", r), ct(window, "contextmenu", r), 
                setTimeout(() => {
                    L.dragging = !1;
                }, 0));
            };
            return (t, l) => (X(), z("div", {
                ref: k,
                class: Ot([ "d-slider", {
                    "is-vertical": v.vertical
                } ]),
                onMousedown: Nr(T, [ "stop" ]),
                onContextmenu: d
            }, [ K("div", {
                class: "d-slider__runway",
                onMousemove: p
            }, [ ht(K("div", {
                class: "d-slider__cursor",
                style: xt(j(A))
            }, [ ht(K("div", {
                class: "d-slider__tips",
                ref: S,
                style: xt({
                    left: j(L).hoverTipsLeft
                })
            }, at(v.hoverText), 5), [ [ ft, v.hoverText ] ]) ], 4), [ [ ft, v.hover ] ]), K("div", {
                class: "d-slider__preload",
                style: xt(j(I))
            }, null, 4), K("div", {
                class: "d-slider__bar",
                style: xt(j(D))
            }, null, 4) ], 32) ], 42, Be));
        }
    }));
    Mt.__scopeId = "data-v-5a794390", Pt("data-v-570fa0d1");
    const Ue = {
        key: 0,
        class: "d-player-dialog"
    }, Ge = {
        class: "d-player-dialog-body"
    }, je = {
        class: "d-player-dialog-title"
    }, Ke = {
        class: "d-player-hotkey-panel"
    }, Ve = {
        class: "d-player-filter-panel"
    }, He = {
        class: "d-player-filter-panel-item"
    }, We = K("span", null, "饱和度", -1), Ye = {
        class: "d-player-filter-panel-item"
    }, qe = K("span", null, "亮度", -1), Xe = {
        class: "d-player-filter-panel-item"
    }, ze = K("span", null, "对比度", -1), $e = {
        key: 0,
        class: "d-player-contextmenu"
    }, Qe = [ "dplayerKeyCode" ], Ze = K("input", {
        class: "d-player-copyText"
    }, null, -1);
    Ft();
    var ce = jt({
        setup(F) {
            const C = Xt({
                show: !1,
                dialogType: "",
                dialogTitle: "",
                version: "1.3.1-beta.6",
                mouseX: 0,
                mouseY: 0
            }), v = [ {
                label: "视频色彩调整",
                key: "filter"
            }, {
                label: "快捷键说明",
                key: "hotkey"
            }, {
                label: "复制视频网址",
                key: "copy"
            }, {
                label: "版本：1.3.1-beta.6",
                key: "version"
            } ], k = [ {
                key: "Space",
                label: "播放/暂停"
            }, {
                key: "→",
                label: "单次快进10s，长按5倍速播放"
            }, {
                key: "←",
                label: "快退5s"
            }, {
                key: "↑",
                label: "音量增加10%"
            }, {
                key: "↓",
                label: "音量增加降低10%"
            }, {
                key: "Esc",
                label: "退出全屏/退出网页全屏"
            }, {
                key: "F",
                label: "全屏/退出全屏"
            } ], S = Xt({
                saturate: .392,
                brightness: .392,
                contrast: .392
            }), L = wt(() => ({
                left: C.mouseX + "px",
                top: C.mouseY + "px"
            }));
            fe(S, T => {
                let p = document.querySelector("#dPlayerVideo"), y = (2.55 * T.saturate).toFixed(2), b = (2.55 * T.brightness).toFixed(2), E = (2.55 * T.contrast).toFixed(2);
                p.style.filter = `saturate(${y}) brightness(${b}) contrast(${E})`;
            });
            const D = () => {
                S.saturate = .392, S.brightness = .392, S.contrast = .392;
            }, I = T => {
                T.key == "Escape" && d(0);
            }, A = T => {
                T.preventDefault(), kt(window, "keydown", I), kt(window, "click", d);
                let p = document.querySelector("#refPlayerWrap"), y = p.clientWidth;
                p.clientHeight, C.mouseX = T.clientX - p.getBoundingClientRect().left, 
                y - C.mouseX < 130 && (C.mouseX = C.mouseX + (y - C.mouseX - 130)), 
                C.mouseY = T.clientY - p.getBoundingClientRect().top, C.show = !0;
            }, d = T => {
                let p = T.path[0].tagName == "LI", y = T.path[0].attributes.dplayerKeyCode && T.path[0].attributes.dplayerKeyCode.value, b = v.map(E => E.key);
                if (p && b.includes(y)) if (C.dialogTitle = T.path[0].innerText, 
                C.dialogType = y, y == "copy") {
                    let E = document.querySelector(".d-player-copyText");
                    E.value = window.location.href, E.select(), document.execCommand("copy"), 
                    C.dialogType = "";
                } else y == "version" && (C.dialogType = "");
                C.show = !1, ct(window, "keydown", I), ct(window, "click", d);
            };
            return ge(() => {
                let T = document.querySelector("#refPlayerWrap");
                ct(window, "keydown", I), ct(window, "click", d), ct(T, "contextmenu", A), 
                kt(T, "contextmenu", A);
            }), ve(() => {
                let T = document.querySelector("#refPlayerWrap");
                ct(window, "keydown", I), ct(window, "click", d), ct(T, "contextmenu", A);
            }), (T, p) => (X(), z("div", null, [ et(ie, {
                name: "d-fade-in"
            }, {
                default: re(() => [ j(C).dialogType ? (X(), z("div", Ue, [ K("div", Ge, [ K("h5", je, [ Tt(at(j(C).dialogTitle) + " ", 1), K("i", {
                    onClick: p[0] || (p[0] = y => j(C).dialogType = !1),
                    class: "icon icon-close"
                }, "X") ]), ht(K("ul", Ke, [ (X(), z(zt, null, $t(k, y => K("li", {
                    class: "d-player-hotkey-panel-item",
                    key: y.key
                }, [ K("span", null, at(y.key), 1), K("span", null, at(y.label), 1) ])), 64)) ], 512), [ [ ft, j(C).dialogType == "hotkey" ] ]), ht(K("ul", Ve, [ K("li", He, [ We, et(Mt, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: j(S).saturate,
                    "onUpdate:modelValue": p[1] || (p[1] = y => j(S).saturate = y)
                }, null, 8, [ "modelValue" ]), K("span", null, at(Math.round(255 * j(S).saturate)), 1) ]), K("li", Ye, [ qe, et(Mt, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: j(S).brightness,
                    "onUpdate:modelValue": p[2] || (p[2] = y => j(S).brightness = y)
                }, null, 8, [ "modelValue" ]), K("span", null, at(Math.round(255 * j(S).brightness)), 1) ]), K("li", Xe, [ ze, et(Mt, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: j(S).contrast,
                    "onUpdate:modelValue": p[3] || (p[3] = y => j(S).contrast = y)
                }, null, 8, [ "modelValue" ]), K("span", null, at(Math.round(255 * j(S).contrast)), 1) ]), K("span", {
                    onClick: D,
                    title: "重置",
                    "aria-label": "重置",
                    class: "d-player-filter-reset"
                }, "重置") ], 512), [ [ ft, j(C).dialogType == "filter" ] ]) ]) ])) : ut("", !0) ]),
                _: 1
            }), j(C).show ? (X(), z("div", $e, [ K("ul", {
                class: "d-player-contextmenu-body",
                style: xt(j(L))
            }, [ (X(), z(zt, null, $t(v, y => K("li", {
                dplayerKeyCode: y.key,
                key: y.key
            }, at(y.label), 9, Qe)), 64)) ], 4), Ze ])) : ut("", !0) ]));
        }
    });
    ce.__scopeId = "data-v-570fa0d1";
    const te = F => {
        let C = ~~(F / 3600), v = ~~(F % 3600 / 60), k = ~~(F % 60);
        return C = C < 10 ? "0" + C : C, v = v < 10 ? "0" + v : v, k = k < 10 ? "0" + k : k, 
        `${C}:${v}:${k}`;
    }, Kt = "ontouchstart" in window, he = [ "loadstart", "play", "pause", "playing", "seeking", "seeked", "waiting", "durationchange", "progress", "canplay", "timeupdate", "ended", "error", "stalled" ], Je = {
        width: {
            type: String,
            default: "800px"
        },
        height: {
            type: String,
            default: "450px"
        },
        color: {
            type: String,
            default: "#409eff"
        },
        src: {
            required: !0,
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "video/mp4"
        },
        poster: {
            type: String,
            default: ""
        },
        webFullScreen: {
            type: Boolean,
            default: !1
        },
        speed: {
            type: Boolean,
            default: !0
        },
        currentTime: {
            type: Number,
            default: 0
        },
        playsinline: {
            type: Boolean,
            default: !1
        },
        muted: {
            type: Boolean,
            default: !1
        },
        speedRate: {
            type: Array,
            default: () => [ "2.0", "1.5", "1.25", "1.0", "0.75", "0.5" ]
        },
        autoPlay: {
            type: Boolean,
            default: !1
        },
        loop: {
            type: Boolean,
            default: !1
        },
        mirror: {
            type: Boolean,
            default: !1
        },
        ligthOff: {
            type: Boolean,
            default: !1
        },
        volume: {
            type: [ String, Number ],
            default: .3
        },
        control: {
            type: Boolean,
            default: !0
        },
        controlBtns: {
            type: Array,
            default: [ "audioTrack", "quality", "speedRate", "volume", "setting", "pip", "pageFullScreen", "fullScreen" ]
        },
        preload: {
            type: String,
            default: "auto"
        }
    };
    Pt("data-v-01791e9e");
    const tr = {
        class: "d-player-video",
        id: "dPlayerVideo"
    }, er = [ "controls", "webkit-playsinline", "playsinline", "volume", "muted", "loop", "preload", "src", "poster" ], rr = {
        class: "d-player-lightoff"
    }, ir = {
        key: 1,
        class: "d-player-state"
    }, nr = {
        class: "d-play-btn"
    }, ar = [ "onKeyup", "onKeydown" ], sr = {
        class: "d-control-progress"
    }, or = {
        class: "d-tool-bar"
    }, lr = {
        key: 0,
        class: "d-tool-item d-tool-time audioTrack-btn"
    }, ur = K("span", {
        style: {
            margin: "0 3px"
        }
    }, "/", -1), dr = {
        class: "total-time"
    }, cr = {
        class: "d-tool-bar"
    }, hr = {
        key: 0,
        class: "d-tool-item quality-btn"
    }, fr = {
        class: "d-tool-item-main"
    }, gr = {
        class: "speed-main",
        style: {
            "text-align": "center"
        }
    }, vr = [ "onClick" ], pr = {
        key: 1,
        class: "d-tool-item speedRate-btn"
    }, mr = {
        class: "d-tool-item-main"
    }, yr = {
        class: "speed-main"
    }, Er = [ "onClick" ], Tr = {
        key: 2,
        class: "d-tool-item volume-btn"
    }, Sr = {
        class: "d-tool-item-main volume-box",
        style: {
            width: "52px"
        }
    }, br = {
        class: "volume-text-size"
    }, Lr = {
        key: 3,
        class: "d-tool-item setting-btn"
    }, Ar = {
        class: "d-tool-item-main"
    }, Dr = {
        class: "speed-main"
    }, kr = Tt(" 镜像画面 "), Rr = Tt(" 循环播放 "), _r = Tt(" 关灯模式 "), Ir = K("div", {
        class: "d-tool-item-main"
    }, "画中画", -1), Cr = K("div", {
        class: "d-tool-item-main"
    }, "网页全屏", -1), wr = K("div", {
        class: "d-tool-item-main"
    }, "全屏", -1);
    Ft();
    var Vt = jt(Zt(Qt({}, {
        name: "vue3VideoPlay",
        inheritAttrs: !1
    }), {
        props: Je,
        emits: [ ...he, "mirrorChange", "loopChange", "lightOffChange" ],
        setup: function(F, {
            expose: C,
            emit: v
        }) {
            const k = F;
            ee(x => ({
                "51d4439c": j(b),
                "77e758a6": x.width,
                b8a1afc0: x.height
            }));
            const S = new Jt({
                fragLoadingTimeOut: 2e3
            }), L = Dt(null), D = Dt(null), I = Dt(null), A = Dt(null), d = Xt(Zt(Qt({
                dVideo: null
            }, k), {
                muted: k.muted,
                playBtnState: k.autoPlay ? "pause" : "play",
                loadStateType: "loadstart",
                fullScreen: !1,
                handleType: "",
                currentTime: "00:00:00",
                preloadBar: 0,
                totalTime: "00:00:00",
                isVideoHovering: !0,
                speedActive: "1.0",
                playProgress: 0,
                isMultiplesPlay: !1,
                longPressTimeout: null,
                progressCursorTime: "00:00:00",
                qualityLevels: [],
                currentLevel: 0
            })), T = (...x) => w => x.reverse().reduce((P, N) => N(P), w), p = he.reduce((x, w) => {
                var P;
                return x[`on${P = w, P.charAt(0).toUpperCase() + P.slice(1)}`] = N => {
                    d.loadStateType = w, v(w, N);
                }, x;
            }, {});
            p.onCanplay = T(p.onCanplay, () => {
                d.playBtnState != "play" && d.dVideo.play(), d.autoPlay && (d.dVideo.play(), 
                d.playBtnState = "pause");
            }), p.onEnded = T(p.onEnded, () => {
                d.playBtnState = "replay";
            }), p.onDurationchange = x => {
                v("durationchange", x), k.currentTime != 0 && (d.dVideo.currentTime = k.currentTime), 
                p.onTimeupdate(x);
            }, p.onProgress = x => {
                v("progress", x);
                let w = x.target.duration, P = x.target.buffered, N = x.target.buffered.length && x.target.buffered.end(P - 1);
                d.preloadBar = N / w;
            }, p.onTimeupdate = x => {
                v("timeupdate", x);
                let w = x.duration || x.target.duration || 0, P = x.currentTime || x.target.currentTime;
                d.playProgress = P / w, d.currentTime = te(P), d.totalTime = te(w);
            }, p.onError = T(p.onError, () => {
                d.playBtnState = "replay";
            });
            let y = Br();
            for (let x in y) p[x] = y[x];
            const b = (E = d.color, `${parseInt("0x" + E.slice(1, 3))},${parseInt("0x" + E.slice(3, 5))},${parseInt("0x" + E.slice(5, 7))}`);
            var E;
            const r = oe(500, () => {
                d.handleType = "";
            }), t = x => {
                x.preventDefault(), x.code == "ArrowUp" ? d.volume = d.volume + .1 > 1 ? 1 : d.volume + .1 : d.volume = d.volume - .1 < 0 ? 0 : d.volume - .1, 
                d.muted = !1, d.handleType = "volume", r();
            }, l = x => {
                k.speed && (d.dVideo.currentTime = d.dVideo.currentTime < 10 ? .1 : d.dVideo.currentTime - 10, 
                p.onTimeupdate(d.dVideo), i());
            }, o = x => {
                x.preventDefault();
                let w = x.type;
                if (x.key == "ArrowRight") {
                    if (i(), w == "keyup") {
                        if (clearTimeout(d.longPressTimeout), !k.speed && !d.longPressTimeout) return;
                        d.isMultiplesPlay ? (d.dVideo.playbackRate = d.speedActive, 
                        d.isMultiplesPlay = !1) : (d.dVideo.currentTime = d.dVideo.currentTime + 10, 
                        p.onTimeupdate(d.dVideo));
                    } else if (w == "keydown") {
                        if (!k.speed) return;
                        d.isMultiplesPlay && clearTimeout(d.longPressTimeout), d.longPressTimeout = setTimeout(() => {
                            d.isMultiplesPlay = !0, d.dVideo.playbackRate = 5, d.handleType = "playbackRate", 
                            r();
                        }, 500);
                    }
                }
            }, h = () => {
                Kt || A.value.focus();
            }, i = () => {
                d.loadStateType = "play", d.dVideo.play().catch(() => {
                    setTimeout(() => {
                        d.playBtnState = "replay", d.loadStateType = "error";
                    }, 500);
                }), d.playBtnState = "pause";
            }, a = () => {
                d.dVideo.pause(), d.playBtnState = "play";
            }, f = x => {
                x && x.preventDefault(), d.playBtnState == "play" || d.playBtnState == "replay" ? i() : d.playBtnState == "pause" && a();
            }, g = () => {
                d.muted = !d.muted, d.volume == 0 && (d.volume = .05);
            }, n = (x, w) => {
                let P = d.dVideo.duration || d.dVideo.target.duration;
                d.dVideo.currentTime = P * w, d.playBtnState == "play" && (d.dVideo.play(), 
                d.playBtnState = "pause");
            }, c = (x, w) => {
                d.progressCursorTime = te(d.dVideo.duration * w);
            }, u = oe(2500, () => {
                d.isVideoHovering = !1;
            }), s = x => {
                d.isVideoHovering = !0, u();
            }, e = x => {
                v("mirrorChange", x, d.dVideo);
            }, m = x => {
                v("loopChange", x, d.dVideo);
            }, _ = x => {
                v("lightOffChange", x, d.dVideo);
            }, R = () => {
                var x;
                x = d.dVideo, document.pictureInPictureElement ? document.exitPictureInPicture().catch(w => {}) : x.requestPictureInPicture().catch(w => {});
            }, O = () => {
                d.fullScreen = (x => {
                    let w = document, P = w.webkitIsFullScreen || w.fullscreen;
                    return P ? (document.exitFullscreen || w.webkitExitFullScreen).call(w) : (x.requestFullscreen || x.webkitRequestFullScreen).call(x), 
                    !P;
                })(L.value);
            };
            return fe(() => k.src, () => {
                pe(() => {
                    d.dVideo.canPlayType(k.type) || d.dVideo.canPlayType("application/vnd.apple.mpegurl") ? d.muted = k.autoPlay : Jt.isSupported() && (S.detachMedia(), 
                    S.attachMedia(d.dVideo), S.on(Jt.Events.MEDIA_ATTACHED, () => {
                        S.loadSource(k.src), S.on("hlsManifestParsed", (x, w) => {
                            d.currentLevel = w.level, d.qualityLevels = w.levels || [];
                        });
                    }), S.on("hlsLevelSwitching", (x, w) => {}), S.on("hlsLevelSwitched", (x, w) => {
                        d.currentLevel = w.level;
                    }));
                });
            }, {
                immediate: !0
            }), ge(() => {
                d.dVideo = D, h();
            }), C({
                play: i,
                pause: a,
                togglePlay: f
            }), (x, w) => (X(), z("div", {
                ref: L,
                id: "refPlayerWrap",
                class: Ot([ "d-player-wrap", {
                    "web-full-screen": j(d).webFullScreen,
                    "is-lightoff": j(d).lightOff,
                    "d-player-wrap-hover": j(d).playBtnState == "play" || j(d).isVideoHovering
                } ]),
                onMousemove: s
            }, [ K("div", tr, [ K("video", Ur({
                ref: D,
                class: [ "d-player-video-main", {
                    "video-mirror": j(d).mirror
                } ],
                id: "dPlayerVideoMain",
                controls: !(!j(Kt) || !j(d).speed),
                "webkit-playsinline": k.playsinline,
                playsinline: k.playsinline
            }, j(p), {
                volume: j(d).volume,
                muted: j(d).muted,
                loop: j(d).loop,
                preload: x.preload,
                width: "100%",
                height: "100%",
                src: k.src,
                poster: k.poster
            }), "您的浏览器不支持Video标签。", 16, er) ]), et(ie, {
                name: "d-fade-in"
            }, {
                default: re(() => [ ht(K("div", rr, null, 512), [ [ ft, j(d).lightOff ] ]) ]),
                _: 1
            }), j(d).fullScreen ? (X(), Gr(ke, {
                key: 0,
                title: k.title
            }, null, 8, [ "title" ])) : ut("", !0), j(Kt) ? ut("", !0) : (X(), z("div", ir, [ et(ie, {
                name: "d-scale-out"
            }, {
                default: re(() => [ ht(K("div", nr, [ et(vt, {
                    icon: "icon-play",
                    size: 40
                }) ], 512), [ [ ft, j(d).playBtnState == "play" ] ]) ]),
                _: 1
            }), et(ue, {
                state: j(d)
            }, null, 8, [ "state" ]) ])), j(Kt) ? ut("", !0) : (X(), z("input", {
                key: 2,
                type: "input",
                readonly: "readonly",
                ref: A,
                onDblclick: O,
                onKeyup: [ Yt(O, [ "f" ]), w[0] || (w[0] = Yt(P => j(d).webFullScreen = !1, [ "esc" ])), o ],
                onClick: f,
                onKeydown: [ Yt(f, [ "space" ]), Yt(l, [ "arrow-left" ]), Yt(t, [ "arrow-up", "arrow-down" ]), o ],
                class: "d-player-input",
                maxlength: "0"
            }, null, 40, ar)), et(de, {
                loadType: j(d).loadStateType
            }, null, 8, [ "loadType" ]), et(ce), !j(Kt) && j(d).control ? (X(), 
            z("div", {
                key: 3,
                class: "d-player-control",
                ref: I
            }, [ K("div", sr, [ et(Mt, {
                class: "d-progress-bar",
                onOnMousemove: c,
                onChange: n,
                disabled: !j(d).speed,
                hoverText: j(d).progressCursorTime,
                modelValue: j(d).playProgress,
                "onUpdate:modelValue": w[1] || (w[1] = P => j(d).playProgress = P),
                preload: j(d).preloadBar
            }, null, 8, [ "disabled", "hoverText", "modelValue", "preload" ]) ]), K("div", {
                class: "d-control-tool",
                onClick: h
            }, [ K("div", or, [ K("div", {
                class: "d-tool-item",
                onClick: f
            }, [ et(vt, {
                size: "24",
                icon: `icon-${j(d).playBtnState}`
            }, null, 8, [ "icon" ]) ]), k.controlBtns.includes("audioTrack") ? (X(), 
            z("div", lr, [ K("span", null, at(j(d).currentTime), 1), ur, K("span", dr, at(j(d).totalTime), 1) ])) : ut("", !0) ]), K("div", cr, [ j(d).qualityLevels.length && k.controlBtns.includes("quality") ? (X(), 
            z("div", hr, [ Tt(at(j(d).qualityLevels.length && (j(d).qualityLevels[j(d).currentLevel] || {}).height) + "P ", 1), K("div", fr, [ K("ul", gr, [ (X(!0), 
            z(zt, null, $t(j(d).qualityLevels, (P, N) => (X(), z("li", {
                class: Ot({
                    "speed-active": j(d).currentLevel == N
                }),
                onClick: M => ((B, U) => {
                    S.currentLevel = U, d.currentLevel = U;
                })(0, N),
                key: P
            }, at(P.height) + "P", 11, vr))), 128)) ]) ]) ])) : ut("", !0), k.controlBtns.includes("speedRate") ? (X(), 
            z("div", pr, [ Tt(at(j(d).speedActive == "1.0" ? "倍速" : j(d).speedActive + "x") + " ", 1), K("div", mr, [ K("ul", yr, [ (X(!0), 
            z(zt, null, $t(j(d).speedRate, P => (X(), z("li", {
                class: Ot({
                    "speed-active": j(d).speedActive == P
                }),
                onClick: N => (M => {
                    d.speedActive = M, d.dVideo.playbackRate = M;
                })(P),
                key: P
            }, at(P) + "x", 11, Er))), 128)) ]) ]) ])) : ut("", !0), k.controlBtns.includes("volume") ? (X(), 
            z("div", Tr, [ K("div", Sr, [ K("div", {
                class: Ot([ "volume-main", {
                    "is-muted": j(d).muted
                } ])
            }, [ K("span", br, at(j(d).muted ? 0 : ~~(100 * j(d).volume)) + "%", 1), et(Mt, {
                onChange: w[2] || (w[2] = P => j(d).muted = !1),
                hover: !1,
                size: "5px",
                vertical: !0,
                modelValue: j(d).volume,
                "onUpdate:modelValue": w[3] || (w[3] = P => j(d).volume = P)
            }, null, 8, [ "modelValue" ]) ], 2) ]), K("span", {
                onClick: g,
                style: {
                    display: "flex"
                }
            }, [ et(vt, {
                size: "20",
                icon: "icon-volume-" + (j(d).volume == 0 || j(d).muted ? "mute" : j(d).volume > .5 ? "up" : "down")
            }, null, 8, [ "icon" ]) ]) ])) : ut("", !0), k.controlBtns.includes("setting") ? (X(), 
            z("div", Lr, [ et(vt, {
                size: "20",
                class: "rotateHover",
                icon: "icon-settings"
            }), K("div", Ar, [ K("ul", Dr, [ K("li", null, [ kr, et(qt, {
                onChange: e,
                modelValue: j(d).mirror,
                "onUpdate:modelValue": w[4] || (w[4] = P => j(d).mirror = P)
            }, null, 8, [ "modelValue" ]) ]), K("li", null, [ Rr, et(qt, {
                onChange: m,
                modelValue: j(d).loop,
                "onUpdate:modelValue": w[5] || (w[5] = P => j(d).loop = P)
            }, null, 8, [ "modelValue" ]) ]), K("li", null, [ _r, et(qt, {
                onChange: _,
                modelValue: j(d).lightOff,
                "onUpdate:modelValue": w[6] || (w[6] = P => j(d).lightOff = P)
            }, null, 8, [ "modelValue" ]) ]) ]) ]) ])) : ut("", !0), k.controlBtns.includes("pip") ? (X(), 
            z("div", {
                key: 4,
                class: "d-tool-item pip-btn",
                onClick: R
            }, [ et(vt, {
                size: "20",
                icon: "icon-pip"
            }), Ir ])) : ut("", !0), k.controlBtns.includes("pageFullScreen") ? (X(), 
            z("div", {
                key: 5,
                class: "d-tool-item pip-btn",
                onClick: w[7] || (w[7] = P => j(d).webFullScreen = !j(d).webFullScreen)
            }, [ et(vt, {
                size: "20",
                icon: "icon-web-screen"
            }), Cr ])) : ut("", !0), k.controlBtns.includes("fullScreen") ? (X(), 
            z("div", {
                key: 6,
                class: "d-tool-item fullScreen-btn",
                onClick: O
            }, [ wr, et(vt, {
                size: "20",
                icon: "icon-screen"
            }) ])) : ut("", !0) ]) ]) ], 512)) : ut("", !0) ], 34));
        }
    }));
    Vt.__scopeId = "data-v-01791e9e", Vt.install = function(F) {
        F.component(Vt.name, Vt);
    };
    const Or = {
        name: "Vue3VideoPlayer",
        components: {
            vue3videoPlay2: Vt
        },
        props: {
            resourceURL: {
                type: String,
                required: !1,
                default: ""
            },
            dataId: {
                type: String,
                required: !0,
                default: ""
            },
            resourceName: {
                type: String,
                required: !1,
                default: ""
            },
            miniPlayer: {
                type: Boolean,
                default: () => !1
            },
            autoPlay: {
                type: Boolean,
                default: () => !1
            },
            control: {
                type: Boolean,
                default: () => !0
            },
            width: {
                type: String,
                default: "1000px"
            },
            height: {
                type: String,
                default: "550px"
            },
            stopPlay: {
                type: Boolean,
                default: () => !1
            },
            currentTime: {
                type: Number,
                default: () => 0
            },
            controlBtns: {
                type: Array,
                default: () => [ "audioTrack", "quality", "speedRate", "setting", "volume", "pip", "pageFullScreen", "fullScreen" ]
            },
            loop: {
                type: Boolean,
                default: () => !1
            },
            muted: {
                type: Boolean,
                default: () => !1
            }
        },
        data: () => ({
            options: {
                src: "",
                type: ""
            },
            player: void 0,
            playTimer: void 0,
            apiTimer: void 0,
            playTime: 0,
            isLoading: !1,
            waitingFlag: !1,
            videoCurrentTime: 0,
            myLoop: !1,
            initFlag: !0
        }),
        async mounted() {
            const F = await Vr(this.dataId), C = F.match(/^[^\\#\\?]+/)[0];
            let v = C.lastIndexOf(".") || "", k = C.substring(v + 1);
            this.options.type = k === "m3u8" ? "m3u8" : "video/mp4", this.options.src = F, 
            this.$nextTick(() => {
                this.player = document.getElementById("dPlayerVideoMain");
            });
        },
        beforeUnmount() {
            document.pictureInPictureElement && document.exitPictureInPicture().catch(F => {}), 
            this.$refs.videoRef.pause(), this.clearPlayTimer(), this.clearApiTimer();
        },
        methods: {
            handlePlay() {
                this.videoCurrentTime = this.player.currentTime, this.initFlag && (this.player.currentTime = this.currentTime, 
                this.initFlag = !1), this.stopPlay ? this.$nextTick(() => {
                    this.$refs.videoRef.pause(), this.$nextTick(() => {
                        document.getElementsByClassName("d-play-btn")[0].className = "d-play-btn";
                    });
                }) : this.$nextTick(() => {
                    this.clearPlayTimer(), this.clearApiTimer(), this.playTimer = window.setInterval(this.playTimeChange, 250), 
                    this.apiTimer = window.setInterval(this.apiTimeChange, 3e4);
                }), this.$emit("handlePlay");
            },
            handlePause() {
                this.$nextTick(() => {
                    this.clearPlayTimer(), this.clearApiTimer();
                }), this.$emit("handlePause");
            },
            handleEnded() {
                this.$nextTick(() => {
                    this.clearPlayTimer(), this.clearApiTimer(), this.myLoop && this.$refs.videoRef.play();
                }), this.$emit("handleEnded");
            },
            playerTimeUpdate() {
                this.initFlag || (this.videoCurrentTime = this.player.currentTime, 
                this.waitingFlag && (this.$nextTick(() => {
                    this.clearPlayTimer(), this.clearApiTimer(), this.playTimer = window.setInterval(this.playTimeChange, 250), 
                    this.apiTimer = window.setInterval(this.apiTimeChange, 3e4);
                }), this.waitingFlag = !1), this.$emit("playerTimeUpdate"));
            },
            handleWaiting() {
                this.videoCurrentTime = this.player.currentTime, this.$nextTick(() => {
                    this.clearPlayTimer(), this.clearApiTimer(), this.waitingFlag = !0, 
                    this.isLoading = !1;
                }), this.$emit("handleWaiting");
            },
            handleCanplay() {
                this.isLoading = !0, this.$emit("handleCanplay");
            },
            playTimeChange() {
                this.isLoading && this.videoCurrentTime != this.player.currentTime && (this.playTime += .25, 
                this.$emit("playtimeChange", this.playTime));
            },
            clearPlayTimer() {
                window.clearInterval(this.playTimer), this.playTimer = void 0;
            },
            apiTimeChange() {
                this.videoCurrentTime != this.player.currentTime && this.$emit("apiTimeChange");
            },
            clearApiTimer() {
                window.clearInterval(this.apiTimer), this.apiTimer = void 0;
            },
            handleLoopChange(F) {
                this.myLoop = F, this.$nextTick(() => {
                    this.player.loop = !1;
                });
            },
            handleDurationchange(F) {
                this.$emit("durationchange", F.target.duration);
            },
            handleDragEndVal() {
                this.$emit("handleDragEndVal");
            }
        }
    }, xr = {
        className: "videocontent"
    };
    me = Wr(Or, [ [ "render", function(F, C, v, k, S, L) {
        const D = jr("vue3videoPlay2");
        return X(), z("div", xr, [ K("p", null, at(v.resourceName), 1), et(D, {
            ref: "videoRef",
            width: v.width,
            height: v.height,
            src: S.options.src,
            type: S.options.type,
            preload: "auto",
            "auto-play": v.autoPlay,
            controlBtns: v.controlBtns,
            control: v.control,
            loop: v.loop,
            volume: .5,
            muted: v.muted,
            onLoopChange: L.handleLoopChange,
            onCanplay: L.handleCanplay,
            onEnded: L.handleEnded,
            onPause: L.handlePause,
            onPlay: L.handlePlay,
            onTimeupdate: L.playerTimeUpdate,
            onWaiting: L.handleWaiting,
            onDurationchange: L.handleDurationchange,
            onDragEndVal: L.handleDragEndVal
        }, null, 8, [ "width", "height", "src", "type", "auto-play", "controlBtns", "control", "loop", "muted", "onLoopChange", "onCanplay", "onEnded", "onPause", "onPlay", "onTimeupdate", "onWaiting", "onDurationchange", "onDragEndVal" ]) ]);
    } ], [ "__scopeId", "data-v-15066769" ] ]);
});

export {
    me as V,
    Yr as __tla
};