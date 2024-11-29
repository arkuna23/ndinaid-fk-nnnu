import {
    a2 as sa,
    b8 as la,
    r as I,
    p as ia,
    a0 as ua,
    U as ca,
    f as da,
    n as Ie,
    g as pa,
    o as V,
    c as G,
    t as r,
    k as m,
    l as g,
    a as u,
    v as Q,
    B as de,
    F as je,
    y as Ge,
    C as Xt,
    D as Te,
    ai as fa,
    m as Oe,
    dW as va,
    aZ as ha,
    bp as ma,
    bq as ya,
    O as _a,
    P as ga,
    ab as Ca,
    ac as ba,
    cK as wa,
    Q as Aa,
    _ as Sa,
    J as Ta,
    aU as Ea,
    R as xa,
    S as qa,
    em as Na,
    __tla as Ia
} from "./index-6c08ea4c.js";

import {
    E as Oa,
    __tla as Da
} from "./el-drawer-fca4d971.js";

import {
    _ as ka,
    __tla as Ra
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    M as ea,
    __tla as Ua
} from "./myQuestionBank-a9dcc9db.js";

import {
    h as Va,
    a as Qa,
    b as Fa
} from "./keyboardDisable-3c8e0d58.js";

import {
    D as Pe,
    d as ta,
    __tla as Pa
} from "./dict-c5825220.js";

import Ha, {
    __tla as za
} from "./batchEntry-8004f6eb.js";

import {
    m as Ma,
    __tla as Ba
} from "./file-e038b35d.js";

import {
    _ as La
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import {
    __tla as ja
} from "./questionPreview-3c0f3206.js";

import {
    __tla as Ga
} from "./type1-bb9ab50e.js";

import {
    __tla as Ka
} from "./type2-f7593207.js";

import {
    __tla as Ja
} from "./type3-f0157d42.js";

import {
    __tla as Za
} from "./type4-e194cfc5.js";

import {
    __tla as Wa
} from "./type5-5cfc2694.js";

import {
    __tla as $a
} from "./type6-f24b6333.js";

import {
    __tla as Ya
} from "./type7-6a71ebde.js";

import {
    __tla as Xa
} from "./video-1d0dc730.js";

import {
    __tla as en
} from "./type20-1bb6de92.js";

import {
    __tla as tn
} from "./type30-1635403c.js";

import {
    __tla as an
} from "./intelligentEntry-adfd5635.js";

let aa, nn = Promise.all([ (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Za;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})(), (() => {
    try {
        return $a;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Xa;
    } catch {}
})(), (() => {
    try {
        return en;
    } catch {}
})(), (() => {
    try {
        return tn;
    } catch {}
})(), (() => {
    try {
        return an;
    } catch {}
})() ]).then(async () => {
    var Ke, Je, He = {
        exports: {}
    };
    Ke = He, Je = He.exports, function(C) {
        var K = C.setTimeout, ne = C.clearTimeout, q = C.XMLHttpRequest, pe = C.XDomainRequest, Ee = C.ActiveXObject, oe = C.EventSource, J = C.document, h = C.Promise, fe = C.fetch, $ = C.Response, F = C.TextDecoder, Ce = C.TextEncoder, re = C.AbortController;
        if (typeof window > "u" || J === void 0 || "readyState" in J || J.body != null || (J.readyState = "loading", 
        window.addEventListener("load", function(t) {
            J.readyState = "complete";
        }, !1)), q == null && Ee != null && (q = function() {
            return new Ee("Microsoft.XMLHTTP");
        }), Object.create == null && (Object.create = function(t) {
            function o() {}
            return o.prototype = t, new o();
        }), Date.now || (Date.now = function() {
            return new Date().getTime();
        }), re == null) {
            var xe = fe;
            fe = function(t, o) {
                var n = o.signal;
                return xe(t, {
                    headers: o.headers,
                    credentials: o.credentials,
                    cache: o.cache
                }).then(function(a) {
                    var e = a.body.getReader();
                    return n._reader = e, n._aborted && n._reader.cancel(), {
                        status: a.status,
                        statusText: a.statusText,
                        headers: a.headers,
                        body: {
                            getReader: function() {
                                return e;
                            }
                        }
                    };
                });
            }, re = function() {
                this.signal = {
                    _reader: null,
                    _aborted: !1
                }, this.abort = function() {
                    this.signal._reader != null && this.signal._reader.cancel(), 
                    this.signal._aborted = !0;
                };
            };
        }
        function Y() {
            this.bitsNeeded = 0, this.codePoint = 0;
        }
        Y.prototype.decode = function(t) {
            function o(f, i, c) {
                if (c === 1) return f >= 128 >> i && f << i <= 2047;
                if (c === 2) return f >= 2048 >> i && f << i <= 55295 || f >= 57344 >> i && f << i <= 65535;
                if (c === 3) return f >= 65536 >> i && f << i <= 1114111;
                throw new Error();
            }
            function n(f, i) {
                if (f === 6) return i >> 6 > 15 ? 3 : i > 31 ? 2 : 1;
                if (f === 12) return i > 15 ? 3 : 2;
                if (f === 18) return 3;
                throw new Error();
            }
            for (var a = 65533, e = "", l = this.bitsNeeded, d = this.codePoint, v = 0; v < t.length; v += 1) {
                var p = t[v];
                l !== 0 && (p < 128 || p > 191 || !o(d << 6 | 63 & p, l - 6, n(l, d))) && (l = 0, 
                d = a, e += String.fromCharCode(d)), l === 0 ? (p >= 0 && p <= 127 ? (l = 0, 
                d = p) : p >= 192 && p <= 223 ? (l = 6, d = 31 & p) : p >= 224 && p <= 239 ? (l = 12, 
                d = 15 & p) : p >= 240 && p <= 247 ? (l = 18, d = 7 & p) : (l = 0, 
                d = a), l === 0 || o(d, l, n(l, d)) || (l = 0, d = a)) : (l -= 6, 
                d = d << 6 | 63 & p), l === 0 && (d <= 65535 ? e += String.fromCharCode(d) : (e += String.fromCharCode(55296 + (d - 65535 - 1 >> 10)), 
                e += String.fromCharCode(56320 + (d - 65535 - 1 & 1023))));
            }
            return this.bitsNeeded = l, this.codePoint = d, e;
        }, F != null && Ce != null && function() {
            try {
                return new F().decode(new Ce().encode("test"), {
                    stream: !0
                }) === "test";
            } catch {}
            return !1;
        }() || (F = Y);
        var S = function() {};
        function T(t) {
            this.withCredentials = !1, this.readyState = 0, this.status = 0, this.statusText = "", 
            this.responseText = "", this.onprogress = S, this.onload = S, this.onerror = S, 
            this.onreadystatechange = S, this._contentType = "", this._xhr = t, 
            this._sendTimeout = 0, this._abort = S;
        }
        function se(t) {
            return t.replace(/[A-Z]/g, function(o) {
                return String.fromCharCode(o.charCodeAt(0) + 32);
            });
        }
        function le(t) {
            for (var o = Object.create(null), n = t.split(`\r
`), a = 0; a < n.length; a += 1) {
                var e = n[a].split(": "), l = e.shift(), d = e.join(": ");
                o[se(l)] = d;
            }
            this._map = o;
        }
        function X() {}
        function P(t) {
            this._headers = t;
        }
        function De() {}
        function ve() {
            this._listeners = Object.create(null);
        }
        function ke(t) {
            K(function() {
                throw t;
            }, 0);
        }
        function ie(t) {
            this.type = t, this.target = void 0;
        }
        function Re(t, o) {
            ie.call(this, t), this.data = o.data, this.lastEventId = o.lastEventId;
        }
        function qe(t, o) {
            ie.call(this, t), this.status = o.status, this.statusText = o.statusText, 
            this.headers = o.headers;
        }
        function be(t, o) {
            ie.call(this, t), this.error = o.error;
        }
        T.prototype.open = function(t, o) {
            this._abort(!0);
            var n = this, a = this._xhr, e = 1, l = 0;
            this._abort = function(i) {
                n._sendTimeout !== 0 && (ne(n._sendTimeout), n._sendTimeout = 0), 
                e !== 1 && e !== 2 && e !== 3 || (e = 4, a.onload = S, a.onerror = S, 
                a.onabort = S, a.onprogress = S, a.onreadystatechange = S, a.abort(), 
                l !== 0 && (ne(l), l = 0), i || (n.readyState = 4, n.onabort(null), 
                n.onreadystatechange())), e = 0;
            };
            var d = function() {
                if (e === 1) {
                    var i = 0, c = "", w = void 0;
                    if ("contentType" in a) i = 200, c = "OK", w = a.contentType; else try {
                        i = a.status, c = a.statusText, w = a.getResponseHeader("Content-Type");
                    } catch {
                        i = 0, c = "", w = void 0;
                    }
                    i !== 0 && (e = 2, n.readyState = 2, n.status = i, n.statusText = c, 
                    n._contentType = w, n.onreadystatechange());
                }
            }, v = function() {
                if (d(), e === 2 || e === 3) {
                    e = 3;
                    var i = "";
                    try {
                        i = a.responseText;
                    } catch {}
                    n.readyState = 3, n.responseText = i, n.onprogress();
                }
            }, p = function(i, c) {
                if (c != null && c.preventDefault != null || (c = {
                    preventDefault: S
                }), v(), e === 1 || e === 2 || e === 3) {
                    if (e = 4, l !== 0 && (ne(l), l = 0), n.readyState = 4, i === "load") n.onload(c); else if (i === "error") n.onerror(c); else {
                        if (i !== "abort") throw new TypeError();
                        n.onabort(c);
                    }
                    n.onreadystatechange();
                }
            }, f = function() {
                l = K(function() {
                    f();
                }, 500), a.readyState === 3 && v();
            };
            "onload" in a && (a.onload = function(i) {
                p("load", i);
            }), "onerror" in a && (a.onerror = function(i) {
                p("error", i);
            }), "onabort" in a && (a.onabort = function(i) {
                p("abort", i);
            }), "onprogress" in a && (a.onprogress = v), "onreadystatechange" in a && (a.onreadystatechange = function(i) {
                (function(c) {
                    a != null && (a.readyState === 4 ? "onload" in a && "onerror" in a && "onabort" in a || p(a.responseText === "" ? "error" : "load", c) : a.readyState === 3 ? "onprogress" in a || v() : a.readyState === 2 && d());
                })(i);
            }), !("contentType" in a) && "ontimeout" in q.prototype || (o += (o.indexOf("?") === -1 ? "?" : "&") + "padding=true"), 
            a.open(t, o, !0), "readyState" in a && (l = K(function() {
                f();
            }, 0));
        }, T.prototype.abort = function() {
            this._abort(!1);
        }, T.prototype.getResponseHeader = function(t) {
            return this._contentType;
        }, T.prototype.setRequestHeader = function(t, o) {
            var n = this._xhr;
            "setRequestHeader" in n && n.setRequestHeader(t, o);
        }, T.prototype.getAllResponseHeaders = function() {
            return this._xhr.getAllResponseHeaders != null && this._xhr.getAllResponseHeaders() || "";
        }, T.prototype.send = function() {
            if ("ontimeout" in q.prototype && ("sendAsBinary" in q.prototype || "mozAnon" in q.prototype) || J == null || J.readyState == null || J.readyState === "complete") {
                var t = this._xhr;
                "withCredentials" in t && (t.withCredentials = this.withCredentials);
                try {
                    t.send(void 0);
                } catch (n) {
                    throw n;
                }
            } else {
                var o = this;
                o._sendTimeout = K(function() {
                    o._sendTimeout = 0, o.send();
                }, 4);
            }
        }, le.prototype.get = function(t) {
            return this._map[se(t)];
        }, q != null && q.HEADERS_RECEIVED == null && (q.HEADERS_RECEIVED = 2), 
        X.prototype.open = function(t, o, n, a, e, l, d) {
            t.open("GET", e);
            var v = 0;
            for (var p in t.onprogress = function() {
                var f = t.responseText.slice(v);
                v += f.length, n(f);
            }, t.onerror = function(f) {
                f.preventDefault(), a(new Error("NetworkError"));
            }, t.onload = function() {
                a(null);
            }, t.onabort = function() {
                a(null);
            }, t.onreadystatechange = function() {
                if (t.readyState === q.HEADERS_RECEIVED) {
                    var f = t.status, i = t.statusText, c = t.getResponseHeader("Content-Type"), w = t.getAllResponseHeaders();
                    o(f, i, c, new le(w));
                }
            }, t.withCredentials = l, d) Object.prototype.hasOwnProperty.call(d, p) && t.setRequestHeader(p, d[p]);
            return t.send(), t;
        }, P.prototype.get = function(t) {
            return this._headers.get(t);
        }, De.prototype.open = function(t, o, n, a, e, l, d) {
            var v = null, p = new re(), f = p.signal, i = new F();
            return fe(e, {
                headers: d,
                credentials: l ? "include" : "same-origin",
                signal: f,
                cache: "no-store"
            }).then(function(c) {
                return v = c.body.getReader(), o(c.status, c.statusText, c.headers.get("Content-Type"), new P(c.headers)), 
                new h(function(w, Ve) {
                    var ee = function() {
                        v.read().then(function(ye) {
                            if (ye.done) w(void 0); else {
                                var Me = i.decode(ye.value, {
                                    stream: !0
                                });
                                n(Me), ee();
                            }
                        }).catch(function(ye) {
                            Ve(ye);
                        });
                    };
                    ee();
                });
            }).catch(function(c) {
                return c.name === "AbortError" ? void 0 : c;
            }).then(function(c) {
                a(c);
            }), {
                abort: function() {
                    v != null && v.cancel(), p.abort();
                }
            };
        }, ve.prototype.dispatchEvent = function(t) {
            t.target = this;
            var o = this._listeners[t.type];
            if (o != null) for (var n = o.length, a = 0; a < n; a += 1) {
                var e = o[a];
                try {
                    typeof e.handleEvent == "function" ? e.handleEvent(t) : e.call(this, t);
                } catch (l) {
                    ke(l);
                }
            }
        }, ve.prototype.addEventListener = function(t, o) {
            t = String(t);
            var n = this._listeners, a = n[t];
            a == null && (a = [], n[t] = a);
            for (var e = !1, l = 0; l < a.length; l += 1) a[l] === o && (e = !0);
            e || a.push(o);
        }, ve.prototype.removeEventListener = function(t, o) {
            t = String(t);
            var n = this._listeners, a = n[t];
            if (a != null) {
                for (var e = [], l = 0; l < a.length; l += 1) a[l] !== o && e.push(a[l]);
                e.length === 0 ? delete n[t] : n[t] = e;
            }
        }, Re.prototype = Object.create(ie.prototype), qe.prototype = Object.create(ie.prototype), 
        be.prototype = Object.create(ie.prototype);
        var he = -1, Z = 0, ue = 1, me = 2, _ = -1, W = 0, O = 1, s = 2, R = 3, D = /^text\/event\-stream(;.*)?$/i, E = function(t, o) {
            var n = t == null ? o : parseInt(t, 10);
            return n != n && (n = o), H(n);
        }, H = function(t) {
            return Math.min(Math.max(t, 1e3), 18e6);
        }, z = function(t, o, n) {
            try {
                typeof o == "function" && o.call(t, n);
            } catch (a) {
                ke(a);
            }
        };
        function N(t, o) {
            ve.call(this), o = o || {}, this.onopen = void 0, this.onmessage = void 0, 
            this.onerror = void 0, this.url = void 0, this.readyState = void 0, 
            this.withCredentials = void 0, this.headers = void 0, this._close = void 0, 
            function(n, a, e) {
                a = String(a);
                var l = !!e.withCredentials, d = e.lastEventIdQueryParameterName || "lastEventId", v = H(1e3), p = E(e.heartbeatTimeout, 45e3), f = "", i = v, c = !1, w = 0, Ve = e.headers || {}, ee = e.Transport, ye = ze && ee == null ? void 0 : new T(ee != null ? new ee() : q != null && "withCredentials" in q.prototype || pe == null ? new q() : new pe()), Me = ee != null && typeof ee != "string" ? new ee() : ye == null ? new De() : new X(), ce = void 0, U = 0, M = he, Ae = "", Qe = "", te = "", Fe = "", k = W, Be = 0, _e = 0, oa = function(x, A, B, L) {
                    if (M === Z) if (x === 200 && B != null && D.test(B)) {
                        M = ue, c = Date.now(), i = v, n.readyState = ue;
                        var b = new qe("open", {
                            status: x,
                            statusText: A,
                            headers: L
                        });
                        n.dispatchEvent(b), z(n, n.onopen, b);
                    } else x !== 200 ? A && (A = A.replace(/\s+/g, " ")) : B == null || B.replace(/\s+/g, " "), 
                    Le(), b = new qe("error", {
                        status: x,
                        statusText: A,
                        headers: L
                    }), n.dispatchEvent(b), z(n, n.onerror, b);
                }, ra = function(x) {
                    if (M === ue) {
                        for (var A = -1, B = 0; B < x.length; B += 1) (j = x.charCodeAt(B)) !== `
`.charCodeAt(0) && j !== "\r".charCodeAt(0) || (A = B);
                        var L = (A !== -1 ? Fe : "") + x.slice(0, A + 1);
                        Fe = (A === -1 ? Fe : "") + x.slice(A + 1), x !== "" && (c = Date.now(), 
                        w += x.length);
                        for (var b = 0; b < L.length; b += 1) {
                            var j = L.charCodeAt(b);
                            if (k === _ && j === `
`.charCodeAt(0)) k = W; else if (k === _ && (k = W), j === "\r".charCodeAt(0) || j === `
`.charCodeAt(0)) {
                                if (k !== W) {
                                    k === O && (_e = b + 1);
                                    var ge = L.slice(Be, _e - 1), ae = L.slice(_e + (_e < b && L.charCodeAt(_e) === " ".charCodeAt(0) ? 1 : 0), b);
                                    ge === "data" ? (Ae += `
`, Ae += ae) : ge === "id" ? Qe = ae : ge === "event" ? te = ae : ge === "retry" ? (v = E(ae, v), 
                                    i = v) : ge === "heartbeatTimeout" && (p = E(ae, p), 
                                    U !== 0 && (ne(U), U = K(function() {
                                        Ne();
                                    }, p)));
                                }
                                if (k === W) {
                                    if (Ae !== "") {
                                        f = Qe, te === "" && (te = "message");
                                        var Se = new Re(te, {
                                            data: Ae.slice(1),
                                            lastEventId: Qe
                                        });
                                        if (n.dispatchEvent(Se), te === "open" ? z(n, n.onopen, Se) : te === "message" ? z(n, n.onmessage, Se) : te === "error" && z(n, n.onerror, Se), 
                                        M === me) return;
                                    }
                                    Ae = "", te = "";
                                }
                                k = j === "\r".charCodeAt(0) ? _ : W;
                            } else k === W && (Be = b, k = O), k === O ? j === ":".charCodeAt(0) && (_e = b + 1, 
                            k = s) : k === s && (k = R);
                        }
                    }
                }, Yt = function(x) {
                    if (M === ue || M === Z) {
                        M = he, U !== 0 && (ne(U), U = 0), U = K(function() {
                            Ne();
                        }, i), i = H(Math.min(16 * v, 2 * i)), n.readyState = Z;
                        var A = new be("error", {
                            error: x
                        });
                        n.dispatchEvent(A), z(n, n.onerror, A);
                    }
                }, Le = function() {
                    M = me, ce != null && (ce.abort(), ce = void 0), U !== 0 && (ne(U), 
                    U = 0), n.readyState = me;
                }, Ne = function() {
                    if (U = 0, M === he) {
                        c = !1, w = 0, U = K(function() {
                            Ne();
                        }, p), M = Z, Ae = "", te = "", Qe = f, Fe = "", Be = 0, 
                        _e = 0, k = W;
                        var x = a;
                        if (a.slice(0, 5) !== "data:" && a.slice(0, 5) !== "blob:" && f !== "") {
                            var A = a.indexOf("?");
                            x = A === -1 ? a : a.slice(0, A + 1) + a.slice(A + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(ae, Se) {
                                return Se === d ? "" : ae;
                            }), x += (a.indexOf("?") === -1 ? "?" : "&") + d + "=" + encodeURIComponent(f);
                        }
                        var B = n.withCredentials, L = {
                            Accept: "text/event-stream"
                        }, b = n.headers;
                        if (b != null) for (var j in b) Object.prototype.hasOwnProperty.call(b, j) && (L[j] = b[j]);
                        try {
                            ce = Me.open(ye, oa, ra, Yt, x, B, L);
                        } catch (ae) {
                            throw Le(), ae;
                        }
                    } else if (c || ce == null) {
                        var ge = Math.max((c || Date.now()) + p - Date.now(), 1);
                        c = !1, U = K(function() {
                            Ne();
                        }, ge);
                    } else Yt(new Error("No activity within " + p + " milliseconds. " + (M === Z ? "No response received." : w + " chars received.") + " Reconnecting.")), 
                    ce != null && (ce.abort(), ce = void 0);
                };
                n.url = a, n.readyState = Z, n.withCredentials = l, n.headers = Ve, 
                n._close = Le, Ne();
            }(this, t, o);
        }
        var ze = fe != null && $ != null && "body" in $.prototype;
        N.prototype = Object.create(ve.prototype), N.prototype.CONNECTING = Z, N.prototype.OPEN = ue, 
        N.prototype.CLOSED = me, N.prototype.close = function() {
            this._close();
        }, N.CONNECTING = Z, N.OPEN = ue, N.CLOSED = me, N.prototype.withCredentials = void 0;
        var we, Ue = oe;
        q == null || oe != null && "withCredentials" in oe.prototype || (Ue = N), 
        we = function(t) {
            t.EventSourcePolyfill = N, t.NativeEventSource = oe, t.EventSource = Ue;
        }(Je), we !== void 0 && (Ke.exports = we);
    }(typeof globalThis > "u" ? typeof window < "u" ? window : typeof self < "u" ? self : sa : globalThis);
    var na = He.exports;
    let y, Ze, We, $e, Ye, Xe, et, tt, at, nt, ot, rt, st, lt, it, ut, ct, dt, pt, ft, vt, ht, mt, yt, _t, gt, Ct, bt, wt, At, St, Tt, Et, xt, qt, Nt, It, Ot, Dt, kt, Rt, Ut, Vt, Qt, Ft, Pt, Ht, zt, Mt, Bt, Lt, jt, Gt, Kt, Jt, Zt, Wt, $t;
    y = C => (xa("data-v-db7a2415"), C = C(), qa(), C), Ze = {
        class: "aiProblemSettingContainer"
    }, We = {
        class: "container_left"
    }, $e = y(() => r("div", {
        class: "box_title"
    }, " 出题设置区 ", -1)), Ye = {
        class: "container_content"
    }, Xe = y(() => r("div", {
        class: "container_tips"
    }, " AI受限于大模型能力，可能存在不准确情况，请自行确认AI出题结果是否符合预期 ", -1)), et = {
        class: "container_form"
    }, tt = {
        class: "custom-timeline"
    }, at = {
        class: "step"
    }, nt = y(() => r("div", {
        class: "step-number"
    }, "1", -1)), ot = y(() => r("span", {
        class: "step_box"
    }, [ r("span", {
        class: "step_title"
    }, "第一步："), Q("选择出题方式") ], -1)), rt = {
        class: "step"
    }, st = y(() => r("div", {
        class: "step-number"
    }, "2", -1)), lt = {
        class: "step_box"
    }, it = y(() => r("span", {
        class: "step_title"
    }, "第二步：", -1)), ut = {
        class: "step"
    }, ct = y(() => r("div", {
        class: "step-number"
    }, "3", -1)), dt = y(() => r("span", {
        class: "step_box"
    }, [ r("span", {
        class: "step_title"
    }, "第三步："), Q("确认题型及出题数量"), r("span", {
        class: "step_tips"
    }, "（每次最多出10道题，数量越多，耗时越长）") ], -1)), pt = {
        style: {
            display: "flex"
        }
    }, ft = {
        class: "question-select-box"
    }, vt = y(() => r("span", {
        class: "question-item-label"
    }, "选择题型：", -1)), ht = {
        class: "question-select-box"
    }, mt = y(() => r("span", {
        class: "question-item-label"
    }, "数量", -1)), yt = {
        class: "step difficulty_select_box"
    }, _t = y(() => r("div", {
        class: "step-number"
    }, "4", -1)), gt = y(() => r("span", {
        class: "step_box"
    }, [ r("span", {
        class: "step_title"
    }, "第四步："), Q("选择难易度") ], -1)), Ct = y(() => r("span", null, "难易度：", -1)), bt = {
        class: "container_right"
    }, wt = y(() => r("div", {
        class: "box_title"
    }, " AI出题区 ", -1)), At = {
        key: 0,
        class: "container-empty"
    }, St = [ y(() => r("div", {
        class: "empty-image"
    }, null, -1)), y(() => r("span", {
        class: "tips_one"
    }, "暂无试题", -1)), y(() => r("span", {
        class: "tips_two"
    }, "请在左侧输入出题信息，点击“开始出题”按钮，让AI为您定制专属试题", -1)) ], Tt = {
        class: "card_title"
    }, Et = [ "onClick" ], xt = {
        class: "card_content"
    }, qt = {
        key: 0,
        class: "dataContainer"
    }, Nt = {
        key: 1,
        class: "pendingContainer"
    }, It = y(() => r("div", {
        class: "loading-icon"
    }, [ r("img", {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH3SURBVDiNjZC/a1NRGIbf99ybm9ybJt5u2gZaRByqpKAUG6cODp2FgAgOWikdXFzFwcHdUQkdMukQEPwPurShlUJBrIOlFkpFjAlJTe+v5JzPqRI6tPeZvuE8Dy+HOMPt5ZMrDmVWaF2GMS4NEii0KTgKBt73nTq7o+95esxUxSn6wSJobpGMKUgEjASIlUhsoGJSEiqzN9ke+9ZoUP8PzFTFKY73V0BrgkYCgWyI4MtmKd8CgMrhsQ8rNykyLClaWhvd3ux5O2hQ2wDg++F9Q3WNIq2E3tvtGv+MzmwCHQCd8qNf+/lccdbOKG+u0Jv6DOzz7lI4ZSzzEoJQWeb1xrvC77P/MkqlKi794OZQQ7Td21Vim3uEZKG4fpEMAM0GQ7H4k0oSJ3LGlYiUBcoxOtm6SD4lG7lt25hYvHxGESxRJOftXTpMG1irI9ZGx2oAUSAcEFkspNUBgKKRiQZaxwoGHYFkg6O/V9Pq1apYWTcf5/1BpITylWBWkYtpA60bYKgRH3S7kbIs+xMAh7AezK+E02kCa6+gCxNIDurTMQFgfjl8QZiHELa08MnWqvsj7RoCQOW5uOif1EHOQaCh8N5C5mMomd3tGgfnBRQANN8wTHj8WGA+gBiD4NnQDNYdBEGqBaPcedovU2GJ4ALA682a554X+Ae08OBjQCf9QwAAAABJRU5ErkJggg==",
        alt: "Loading..."
    }) ], -1)), Ot = y(() => r("span", null, "AI出题可能需要一些时间，请耐心等待...", -1)), Dt = {
        key: 2,
        class: "errorContainer"
    }, kt = [ "onClick" ], Rt = {
        class: "setUpTheInformation"
    }, Ut = {
        class: "dialogContent"
    }, Vt = {
        class: "dataContainerItem"
    }, Qt = y(() => r("span", {
        class: "dialogContentLabel"
    }, "出题方式：", -1)), Ft = {
        class: "dialogContentValue"
    }, Pt = {
        class: "dataContainerItem"
    }, Ht = y(() => r("span", {
        class: "dialogContentLabel"
    }, "输入内容：", -1)), zt = {
        class: "dataDomains"
    }, Mt = {
        class: "dataContainerItem"
    }, Bt = y(() => r("span", {
        class: "dialogContentLabel"
    }, "出题数量：", -1)), Lt = {
        class: "dialogContentValue"
    }, jt = {
        class: "questionNum"
    }, Gt = {
        class: "dataContainerItem"
    }, Kt = y(() => r("span", {
        class: "dialogContentLabel"
    }, "难易度：", -1)), Jt = {
        class: "dialogContentValue"
    }, Zt = {
        class: "transcriptionContainer"
    }, Wt = {
        class: "transcriptionContainerContent"
    }, $t = {
        style: {
            display: "flex",
            "justify-content": "center"
        }
    }, aa = La({
        __name: "aiProblemSetting",
        props: {
            parentId: {
                type: String,
                default: ""
            }
        },
        emits: [ "callAPIStatus" ],
        setup(C, {
            expose: K,
            emit: ne
        }) {
            const {
                base_url: q
            } = Na;
            la();
            const pe = ne, Ee = C, oe = I([ {
                label: "单选题",
                value: "singleChoiceNum",
                type: 1
            }, {
                label: "多选题",
                value: "multipleChoiceNum",
                type: 2
            }, {
                label: "判断题",
                value: "judgementNum",
                type: 3
            }, {
                label: "填空题",
                value: "fillInBlankNum",
                type: 4
            }, {
                label: "问答题",
                value: "askAnswerNum",
                type: 5
            } ]), J = ia();
            ua(Ee);
            const h = I({
                questionSettingType: "1",
                content: "",
                questionsField: "singleChoiceNum",
                questionsNum: 0,
                numberOfQuestions: {
                    singleChoiceNum: 0,
                    multipleChoiceNum: 0,
                    judgementNum: 0,
                    fillInBlankNum: 0,
                    askAnswerNum: 0
                },
                difficulty: "1"
            }), fe = I(null), $ = I(""), F = I([]), Ce = I(!1), re = I(null), xe = I(null), Y = I(!1), S = I(!1), T = I({}), se = I({}), le = I(!1), X = I(new Map()), P = I({}), De = () => {
                h.value.questionsNum = 0;
            }, ve = () => {
                P.value = {};
            }, ke = async () => {
                le.value = !0;
                let O = F.value;
                (0, ea.createQuestionBatch)(O, va(Ee.parentId)).then(s => {
                    J.success(`\u5DF2\u6210\u529F\u4FDD\u5B58${F.value.length || 0}\u9053\u9898\u5230\u201C\u4E2A\u4EBA\u8BD5\u9898\u5E93\u201D\u4E2D`), 
                    Y.value = !1, le.value = !1;
                }).catch(() => {
                    le.value = !1;
                });
            }, ie = O => {
                let s = new Date(O);
                return `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")} ${String(s.getHours()).padStart(2, "0")}:${String(s.getMinutes()).padStart(2, "0")}:${String(s.getSeconds()).padStart(2, "0")}`;
            }, Re = () => {
                F.value = [], $.value = "";
            }, qe = ca({
                questionSettingType: [ {
                    required: !0,
                    message: "请选择出题方式",
                    trigger: "change"
                } ],
                content: [ {
                    required: !0,
                    message: "请输入内容",
                    trigger: "change"
                } ],
                difficulty: [ {
                    required: !0,
                    message: "请选择难易度",
                    trigger: "change"
                } ],
                questionsField: [ {
                    required: !0,
                    message: "请选择题型",
                    trigger: "change"
                } ],
                questionsNum: [ {
                    required: !0,
                    message: "请设置选题数量",
                    trigger: "change"
                }, {
                    type: "number",
                    min: 1,
                    max: 10,
                    message: "出题数量请设置在1~10之间",
                    trigger: "change"
                } ]
            }), be = () => {
                re.value && (re.value.scrollTop = re.value.scrollHeight);
            }, he = () => {
                requestAnimationFrame(() => {
                    (() => {
                        const O = document.querySelectorAll(".step");
                        O.forEach((s, R) => {
                            const D = s.querySelector(".step-number");
                            if (D && R < O.length - 1) {
                                const E = O[R + 1].getBoundingClientRect().top - D.getBoundingClientRect().bottom;
                                D.style.setProperty("--line-height", `${E}px`);
                            }
                        });
                    })();
                });
            }, Z = "open", ue = "message", me = "error", _ = I({}), W = (O, s) => {
                if (_.value && _.value.close && (_.value.close(), _.value = {}), 
                window.EventSource !== void 0) {
                    const R = `Bearer ${ha()}`;
                    _.value = new na.EventSourcePolyfill(`${q}/resource/exam-question/createConnect/${s}`, {
                        headers: {
                            Authorization: R,
                            "Cache-Control": "no-cache",
                            "Content-Type": "text/event-stream"
                        },
                        heartbeatTimeout: 6e5
                    }), _.value.addEventListener(Z, D => {
                        D.type === "open" && ((E, H) => {
                            let z = {
                                questionSettingType: h.value.questionSettingType,
                                content: h.value.content,
                                difficulty: h.value.difficulty,
                                ...h.value.numberOfQuestions,
                                questionType: oe.value.find(N => N.value === h.value.questionsField).type,
                                id: H
                            };
                            ea.aiQuestionsApi(z).then(() => {}).catch(() => {}), 
                            Ie(() => {
                                be();
                            });
                        })(0, s);
                    }), _.value.addEventListener(ue, D => {
                        let E = JSON.parse(D.data);
                        if (D.type === "message") {
                            if (E.event === "text_chunk") {
                                T.value[s] = !1;
                                const H = X.value.get(s);
                                H && (H.questionData += E.data.text, X.value.set(s, H));
                            } else E.event === "workflow_finished" ? (T.value[s] = !1, 
                            pe("callAPIStatus", !1), _.value && _.value.close && _.value.close()) : E.event === "error" && (T.value[s] = !1, 
                            se.value[s] = !0, pe("callAPIStatus", !1), _.value && _.value.close && _.value.close());
                            Ie(() => {
                                be();
                            });
                        }
                    }), _.value.addEventListener(me, D => {
                        pe("callAPIStatus", !1), T.value[s] = !1, se.value[s] = !0, 
                        Ie(() => {
                            be();
                        }), _.value && _.value.close && _.value.close();
                    });
                }
            };
            return da(() => {
                Ie(() => {
                    he(), window.addEventListener("resize", he);
                });
            }), pa(() => {
                window.removeEventListener("resize", he);
            }), K({
                efficacy: () => {
                    h.value.numberOfQuestions = {
                        singleChoiceNum: 0,
                        multipleChoiceNum: 0,
                        judgementNum: 0,
                        fillInBlankNum: 0,
                        askAnswerNum: 0
                    }, h.value.numberOfQuestions[h.value.questionsField] = h.value.questionsNum, 
                    xe.value.validate(O => {
                        if (O) {
                            let s = new Date().getTime(), R = Ma();
                            T.value[R] = !0, pe("callAPIStatus", !0);
                            let D = {
                                rawData: h.value,
                                timestamp: s,
                                snowflakeId: R,
                                questionData: ""
                            };
                            X.value.set(R, JSON.parse(JSON.stringify(D))), W(s, R);
                        }
                    });
                },
                initialize: () => {
                    xe.value.resetFields(), $.value = "", X.value.clear();
                }
            }), (O, s) => {
                const R = ma, D = ya, E = _a, H = ga, z = Ca, N = ba, ze = wa, we = ka, Ue = Aa, t = Sa, o = Ta, n = Ea, a = Oa;
                return V(), G("div", Ze, [ r("div", We, [ $e, r("div", Ye, [ Xe, r("div", et, [ m(Ue, {
                    ref_key: "formRef",
                    ref: xe,
                    model: u(h),
                    rules: u(qe)
                }, {
                    default: g(() => [ r("div", tt, [ r("div", at, [ nt, ot, m(E, {
                        prop: "questionSettingType"
                    }, {
                        default: g(() => [ m(D, {
                            modelValue: u(h).questionSettingType,
                            "onUpdate:modelValue": s[0] || (s[0] = e => u(h).questionSettingType = e)
                        }, {
                            default: g(() => [ m(R, {
                                value: "1"
                            }, {
                                default: g(() => [ Q("按材料出题") ]),
                                _: 1
                            }), m(R, {
                                value: "2"
                            }, {
                                default: g(() => [ Q("按学科/知识技能点等要求出题") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]), r("div", rt, [ st, r("span", lt, [ it, Q(de([ "1" ].includes(u(h).questionSettingType) ? "输入材料内容" : "输入出题要求"), 1) ]), m(E, {
                        prop: "content"
                    }, {
                        default: g(() => [ m(H, {
                            modelValue: u(h).content,
                            "onUpdate:modelValue": s[1] || (s[1] = e => u(h).content = e),
                            maxlength: "1500",
                            placeholder: [ "1" ].includes(u(h).questionSettingType) ? "请您输入一段材料，根据材料生成相关题目，如课文片段、历史事件、科学现象、新闻报道等一段文本内容；适用于考察学生对材料的理解、分析能力；" : "请您输入出题要求，如学科类别/所属领域+知识点+关键词等；例如：请围绕环保与可持续发展方面设计题目，题目应涵盖节能减排的具体措施、垃圾分类的重要性和意义等",
                            autosize: {
                                minRows: 9,
                                maxRows: 9
                            },
                            "show-word-limit": "",
                            type: "textarea"
                        }, null, 8, [ "modelValue", "placeholder" ]) ]),
                        _: 1
                    }) ]), r("div", ut, [ ct, dt, r("span", pt, [ m(E, {
                        prop: "questionsField"
                    }, {
                        default: g(() => [ r("span", ft, [ vt, m(N, {
                            modelValue: u(h).questionsField,
                            "onUpdate:modelValue": s[2] || (s[2] = e => u(h).questionsField = e),
                            placeholder: "请选择题型",
                            size: "default",
                            style: {
                                width: "100px"
                            },
                            onChange: De
                        }, {
                            default: g(() => [ (V(!0), G(je, null, Ge(u(oe), e => (V(), 
                            Xt(z, {
                                key: e.value,
                                label: e.label,
                                value: e.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]) ]),
                        _: 1
                    }), m(E, {
                        prop: "questionsNum"
                    }, {
                        default: g(() => [ r("span", ht, [ mt, m(ze, {
                            modelValue: u(h).questionsNum,
                            "onUpdate:modelValue": s[3] || (s[3] = e => u(h).questionsNum = e),
                            max: 10,
                            min: 0,
                            "controls-position": "right",
                            size: "default",
                            style: {
                                width: "80px"
                            },
                            onCompositionend: s[4] || (s[4] = e => u(Va)(e)),
                            onCompositionstart: s[5] || (s[5] = e => u(Qa)(e)),
                            onKeydown: s[6] || (s[6] = e => u(Fa)(e))
                        }, null, 8, [ "modelValue" ]) ]) ]),
                        _: 1
                    }) ]) ]), r("div", yt, [ _t, gt, m(E, {
                        prop: "difficulty"
                    }, {
                        default: g(() => [ Ct, m(we, {
                            type: u(Pe).QUESTION_DIFFICULT,
                            value: u(h).difficulty
                        }, null, 8, [ "type", "value" ]), m(N, {
                            modelValue: u(h).difficulty,
                            "onUpdate:modelValue": s[7] || (s[7] = e => u(h).difficulty = e),
                            placeholder: "请选择",
                            style: {
                                width: "30px"
                            }
                        }, {
                            default: g(() => [ (V(!0), G(je, null, Ge(u(ta)(u(Pe).QUESTION_DIFFICULT), e => (V(), 
                            Xt(z, {
                                key: e.value,
                                label: e.label,
                                value: e.value
                            }, {
                                default: g(() => [ m(we, {
                                    type: u(Pe).QUESTION_DIFFICULT,
                                    value: e.value
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 2
                            }, 1032, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]) ]) ]),
                    _: 1
                }, 8, [ "model", "rules" ]) ]) ]) ]), r("div", bt, [ wt, r("div", {
                    class: "container_content",
                    ref_key: "rightContentRef",
                    ref: re
                }, [ u(X).size === 0 ? (V(), G("div", At, St)) : Te("", !0), (V(!0), 
                G(je, null, Ge(u(X).entries(), ([ e, l ]) => (V(), G("div", {
                    class: "talkToTheCard",
                    key: e
                }, [ r("div", Tt, [ r("span", null, de(ie(l.timestamp)), 1), u(T)[e] ? Te("", !0) : (V(), 
                G("span", {
                    key: 0,
                    class: "questionInformation",
                    onClick: d => {
                        return v = l, S.value = !0, void (P.value = v);
                        var v;
                    }
                }, [ m(t, {
                    size: 16,
                    icon: "svg-icon:setting-icon"
                }), Q("出题信息") ], 8, Et)) ]), r("div", xt, [ u(T)[e] || u(se)[e] ? Te("", !0) : (V(), 
                G("div", qt, de(l.questionData), 1)), u(T)[e] ? (V(), G("div", Nt, [ m(fa, {
                    name: "fade"
                }, {
                    default: g(() => [ It ]),
                    _: 1
                }), Ot ])) : Te("", !0), u(se)[e] ? (V(), G("div", Dt, [ m(t, {
                    size: 16,
                    icon: "svg-icon:caution-icon"
                }), Q(" 出题失败! ") ])) : Te("", !0) ]), u(T)[e] || u(se)[e] ? Te("", !0) : (V(), 
                G("div", {
                    key: 0,
                    class: "card_footer",
                    onClick: d => (v => {
                        Y.value = !0, $.value = v.questionData, Ie(() => {
                            fe.value.importsFunction();
                        });
                    })(l)
                }, [ m(t, {
                    size: 16,
                    icon: "svg-icon:copy-icon"
                }), Q("复制到输入区 ") ], 8, kt)) ]))), 128)) ], 512) ]), r("div", Rt, [ m(n, {
                    modelValue: u(S),
                    "onUpdate:modelValue": s[9] || (s[9] = e => Oe(S) ? S.value = e : null),
                    title: "出题信息",
                    width: "1091",
                    onClose: ve
                }, {
                    footer: g(() => [ m(o, {
                        size: "large",
                        onClick: s[8] || (s[8] = e => S.value = !1)
                    }, {
                        default: g(() => [ Q("关闭") ]),
                        _: 1
                    }) ]),
                    default: g(() => {
                        var e, l, d, v, p, f, i;
                        return [ r("div", Ut, [ r("div", Vt, [ Qt, r("span", Ft, de(((e = u(P).rawData) == null ? void 0 : e.questionSettingType) === "1" ? "按材料出题" : "按学科/知识技能点等要求出题"), 1) ]), r("div", Pt, [ Ht, r("span", zt, de((l = u(P).rawData) == null ? void 0 : l.content), 1) ]), r("div", Mt, [ Bt, r("span", Lt, [ r("span", null, [ Q(de((d = u(oe).find(c => {
                            var w;
                            return c.value === ((w = u(P).rawData) == null ? void 0 : w.questionsField);
                        })) == null ? void 0 : d.label) + " ", 1), r("span", jt, de(((p = u(P).rawData) == null ? void 0 : p.numberOfQuestions[(v = u(P).rawData) == null ? void 0 : v.questionsField]) || 0), 1) ]) ]) ]), r("div", Gt, [ Kt, r("span", Jt, de((i = (f = u(ta)(u(Pe).QUESTION_DIFFICULT)) == null ? void 0 : f.find(c => {
                            var w;
                            return c.value === ((w = u(P).rawData) == null ? void 0 : w.difficulty);
                        })) == null ? void 0 : i.label), 1) ]) ]) ];
                    }),
                    _: 1
                }, 8, [ "modelValue" ]) ]), r("div", Zt, [ m(a, {
                    modelValue: u(Y),
                    "onUpdate:modelValue": s[14] || (s[14] = e => Oe(Y) ? Y.value = e : null),
                    title: "智能录入",
                    size: "92%",
                    onClose: Re
                }, {
                    footer: g(() => [ r("div", $t, [ m(o, {
                        size: "large",
                        type: "primary",
                        loading: u(le),
                        onClick: ke
                    }, {
                        default: g(() => [ Q("保存") ]),
                        _: 1
                    }, 8, [ "loading" ]), m(o, {
                        size: "large",
                        disabled: u(le),
                        onClick: s[13] || (s[13] = e => Y.value = !1)
                    }, {
                        default: g(() => [ Q("返回") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]) ]),
                    default: g(() => [ r("div", Wt, [ m(Ha, {
                        ref_key: "batchEntryRef",
                        ref: fe,
                        isAiComponent: !0,
                        modelValue: u(F),
                        "onUpdate:modelValue": s[10] || (s[10] = e => Oe(F) ? F.value = e : null),
                        pass: u(Ce),
                        "onUpdate:pass": s[11] || (s[11] = e => Oe(Ce) ? Ce.value = e : null),
                        imports: u($),
                        "onUpdate:imports": s[12] || (s[12] = e => Oe($) ? $.value = e : null)
                    }, null, 8, [ "modelValue", "pass", "imports" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-db7a2415" ] ]);
});

export {
    nn as __tla,
    aa as default
};