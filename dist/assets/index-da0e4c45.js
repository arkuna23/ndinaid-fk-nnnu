import {
    a3 as wc,
    o as xc,
    c as Cc,
    A as kc,
    di as Sc,
    t as Lc,
    __tla as Tc
} from "./index-6c08ea4c.js";

import {
    _ as Mc
} from "./_plugin-vue_export-helper-1b428a4d.js";

let pa, Ac = Promise.all([ (() => {
    try {
        return Tc;
    } catch {}
})() ]).then(async () => {
    var so = {}, co = {
        exports: {}
    };
    (function() {
        var O, G, E = Function("return this")(), _ = "Boolean Number String Function Array Date RegExp Object".split(" "), rt = {};
        for (O in _) _.hasOwnProperty(O) && (G = _[O], rt["[object " + G + "]"] = G.toLowerCase());
        function at(Y) {
            return Y == null ? String(Y) : rt[Object.prototype.toString.call(Y)] || "object";
        }
        function Q(Y) {
            var K, st;
            if (at(Y) === "object") {
                for (K in Y) if ((st = Y[K]) !== void 0 && at(st) !== "function") return !1;
            }
            return !0;
        }
        String.prototype.entityify || (String.prototype.entityify = function() {
            return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }), String.prototype.quote || (String.prototype.quote = function() {
            var Y, K, st = this.length, M = '"';
            for (K = 0; K < st; K += 1) if ((Y = this.charAt(K)) >= " ") Y !== "\\" && Y !== '"' || (M += "\\"), 
            M += Y; else switch (Y) {
              case "\b":
                M += "\\b";
                break;

              case "\f":
                M += "\\f";
                break;

              case `
`:
                M += "\\n";
                break;

              case "\r":
                M += "\\r";
                break;

              case "\t":
                M += "\\t";
                break;

              default:
                Y = Y.charCodeAt(), M += "\\u00" + Math.floor(Y / 16).toString(16) + (Y % 16).toString(16);
            }
            return M + '"';
        }), String.prototype.supplant || (String.prototype.supplant = function(Y) {
            return this.replace(/{([^{}]*)}/g, function(K, st) {
                var M = Y[st];
                return typeof M == "string" || typeof M == "number" ? M : K;
            });
        }), String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
        }), co.exports = {
            typeOf: at,
            isEmpty: Q
        }, E.typeOf = E.typeOf || at, E.isEmpty = E.isEmpty || Q;
    })();
    var bn, ga = co.exports;
    bn = ga.typeOf, so.stringify = function(O) {
        var G, E = "";
        return "---" + (G = {
            undefined: function() {
                return "null";
            },
            null: function() {
                return "null";
            },
            number: function(_) {
                return _;
            },
            boolean: function(_) {
                return _ ? "true" : "false";
            },
            string: function(_) {
                return JSON.stringify(_);
            },
            array: function(_) {
                var rt = "";
                return _.length === 0 ? rt += "[]" : (E = E.replace(/$/, "  "), 
                _.forEach(function(at) {
                    var Q = G[bn(at)];
                    if (!Q) throw new Error("what the crap: " + bn(at));
                    rt += `
` + E + "- " + Q(at);
                }), E = E.replace(/  /, ""), rt);
            },
            object: function(_) {
                var rt = "";
                return Object.keys(_).length === 0 ? rt += "{}" : (E = E.replace(/$/, "  "), 
                Object.keys(_).forEach(function(at) {
                    var Q = _[at], Y = G[bn(Q)];
                    if (Q !== void 0) {
                        if (!Y) throw new Error("what the crap: " + bn(Q));
                        rt += `
` + E + at + ": " + Y(Q);
                    }
                }), E = E.replace(/  /, ""), rt);
            },
            function: function() {
                return "[object Function]";
            }
        })[bn(O)](O) + `
`;
    };
    var uo, fo = {
        exports: {}
    };
    function Xe() {
        return uo || (uo = 1, fo.exports = function() {
            var O = navigator.userAgent, G = navigator.platform, E = /gecko\/\d/i.test(O), _ = /MSIE \d/.test(O), rt = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(O), at = /Edge\/(\d+)/.exec(O), Q = _ || rt || at, Y = Q && (_ ? document.documentMode || 6 : +(at || rt)[1]), K = !at && /WebKit\//.test(O), st = K && /Qt\/\d+\.\d+/.test(O), M = !at && /Chrome\/(\d+)/.exec(O), it = M && +M[1], Z = /Opera\//.test(O), vt = /Apple Computer/.test(navigator.vendor), dt = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(O), D = /PhantomJS/.test(O), b = vt && (/Mobile\/\w+/.test(O) || navigator.maxTouchPoints > 2), C = /Android/.test(O), u = b || C || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(O), h = b || /Mac/.test(G), m = /\bCrOS\b/.test(O), y = /win/i.test(G), S = Z && O.match(/Version\/(\d*\.\d*)/);
            S && (S = Number(S[1])), S && S >= 15 && (Z = !1, K = !0);
            var N = h && (st || Z && (S == null || S < 12.11)), P = E || Q && Y >= 9;
            function F(t) {
                return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*");
            }
            var z, L = function(t, e) {
                var r = t.className, n = F(e).exec(r);
                if (n) {
                    var i = r.slice(n.index + n[0].length);
                    t.className = r.slice(0, n.index) + (i ? n[1] + i : "");
                }
            };
            function R(t) {
                for (var e = t.childNodes.length; e > 0; --e) t.removeChild(t.firstChild);
                return t;
            }
            function v(t, e) {
                return R(t).appendChild(e);
            }
            function U(t, e, r, n) {
                var i = document.createElement(t);
                if (r && (i.className = r), n && (i.style.cssText = n), typeof e == "string") i.appendChild(document.createTextNode(e)); else if (e) for (var o = 0; o < e.length; ++o) i.appendChild(e[o]);
                return i;
            }
            function wt(t, e, r, n) {
                var i = U(t, e, r, n);
                return i.setAttribute("role", "presentation"), i;
            }
            function St(t, e) {
                if (e.nodeType == 3 && (e = e.parentNode), t.contains) return t.contains(e);
                do {
                    if (e.nodeType == 11 && (e = e.host), e == t) return !0;
                } while (e = e.parentNode);
            }
            function mt(t) {
                var e;
                try {
                    e = t.activeElement;
                } catch {
                    e = t.body || null;
                }
                for (;e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
                return e;
            }
            function Bt(t, e) {
                var r = t.className;
                F(e).test(r) || (t.className += (r ? " " : "") + e);
            }
            function Rt(t, e) {
                for (var r = t.split(" "), n = 0; n < r.length; n++) r[n] && !F(r[n]).test(e) && (e += " " + r[n]);
                return e;
            }
            z = document.createRange ? function(t, e, r, n) {
                var i = document.createRange();
                return i.setEnd(n || t, r), i.setStart(t, e), i;
            } : function(t, e, r) {
                var n = document.body.createTextRange();
                try {
                    n.moveToElementText(t.parentNode);
                } catch {
                    return n;
                }
                return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", e), 
                n;
            };
            var $t = function(t) {
                t.select();
            };
            function Mt(t) {
                return t.display.wrapper.ownerDocument;
            }
            function Xt(t) {
                return Mt(t).defaultView;
            }
            function jt(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(null, e);
                };
            }
            function nt(t, e, r) {
                for (var n in e || (e = {}), t) !t.hasOwnProperty(n) || r === !1 && e.hasOwnProperty(n) || (e[n] = t[n]);
                return e;
            }
            function X(t, e, r, n, i) {
                e == null && (e = t.search(/[^\s\u00a0]/)) == -1 && (e = t.length);
                for (var o = n || 0, l = i || 0; ;) {
                    var a = t.indexOf("\t", o);
                    if (a < 0 || a >= e) return l + (e - o);
                    l += a - o, l += r - l % r, o = a + 1;
                }
            }
            b ? $t = function(t) {
                t.selectionStart = 0, t.selectionEnd = t.value.length;
            } : Q && ($t = function(t) {
                try {
                    t.select();
                } catch {}
            });
            var lt = function() {
                this.id = null, this.f = null, this.time = 0, this.handler = jt(this.onTimeout, this);
            };
            function ct(t, e) {
                for (var r = 0; r < t.length; ++r) if (t[r] == e) return r;
                return -1;
            }
            lt.prototype.onTimeout = function(t) {
                t.id = 0, t.time <= +new Date() ? t.f() : setTimeout(t.handler, t.time - +new Date());
            }, lt.prototype.set = function(t, e) {
                this.f = e;
                var r = +new Date() + t;
                (!this.id || r < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, t), 
                this.time = r);
            };
            var Ye = 50, pt = {
                toString: function() {
                    return "CodeMirror.Pass";
                }
            }, xt = {
                scroll: !1
            }, ge = {
                origin: "*mouse"
            }, Ce = {
                origin: "+move"
            };
            function Dt(t, e, r) {
                for (var n = 0, i = 0; ;) {
                    var o = t.indexOf("\t", n);
                    o == -1 && (o = t.length);
                    var l = o - n;
                    if (o == t.length || i + l >= e) return n + Math.min(l, e - i);
                    if (i += o - n, n = o + 1, (i += r - i % r) >= e) return n;
                }
            }
            var At = [ "" ];
            function de(t) {
                for (;At.length <= t; ) At.push(ut(At) + " ");
                return At[t];
            }
            function ut(t) {
                return t[t.length - 1];
            }
            function wn(t, e) {
                for (var r = [], n = 0; n < t.length; n++) r[n] = e(t[n], n);
                return r;
            }
            function Ar(t, e, r) {
                for (var n = 0, i = r(e); n < t.length && r(t[n]) <= i; ) n++;
                t.splice(n, 0, e);
            }
            function Kn() {}
            function Nr(t, e) {
                var r;
                return Object.create ? r = Object.create(t) : (Kn.prototype = t, 
                r = new Kn()), e && nt(e, r), r;
            }
            var hi = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
            function Gn(t) {
                return /\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || hi.test(t));
            }
            function xn(t, e) {
                return e ? !!(e.source.indexOf("\\w") > -1 && Gn(t)) || e.test(t) : Gn(t);
            }
            function Or(t) {
                for (var e in t) if (t.hasOwnProperty(e) && t[e]) return !1;
                return !0;
            }
            var Cn = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
            function _n(t) {
                return t.charCodeAt(0) >= 768 && Cn.test(t);
            }
            function Ne(t, e, r) {
                for (;(r < 0 ? e > 0 : e < t.length) && _n(t.charAt(e)); ) e += r;
                return e;
            }
            function Ht(t, e, r) {
                for (var n = e > r ? -1 : 1; ;) {
                    if (e == r) return e;
                    var i = (e + r) / 2, o = n < 0 ? Math.ceil(i) : Math.floor(i);
                    if (o == e) return t(o) ? e : r;
                    t(o) ? r = o : e = o + n;
                }
            }
            function an(t, e, r, n) {
                if (!t) return n(e, r, "ltr", 0);
                for (var i = !1, o = 0; o < t.length; ++o) {
                    var l = t[o];
                    (l.from < r && l.to > e || e == r && l.to == e) && (n(Math.max(l.from, e), Math.min(l.to, r), l.level == 1 ? "rtl" : "ltr", o), 
                    i = !0);
                }
                i || n(e, r, "ltr");
            }
            var Oe = null;
            function me(t, e, r) {
                var n;
                Oe = null;
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o.from < e && o.to > e) return i;
                    o.to == e && (o.from != o.to && r == "before" ? n = i : Oe = i), 
                    o.from == e && (o.from != o.to && r != "before" ? n = i : Oe = i);
                }
                return n ?? Oe;
            }
            var di = function() {
                var t = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", e = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
                function r(c) {
                    return c <= 247 ? t.charAt(c) : 1424 <= c && c <= 1524 ? "R" : 1536 <= c && c <= 1785 ? e.charAt(c - 1536) : 1774 <= c && c <= 2220 ? "r" : 8192 <= c && c <= 8203 ? "w" : c == 8204 ? "b" : "L";
                }
                var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, o = /[LRr]/, l = /[Lb1n]/, a = /[1n]/;
                function s(c, d, p) {
                    this.level = c, this.from = d, this.to = p;
                }
                return function(c, d) {
                    var p = d == "ltr" ? "L" : "R";
                    if (c.length == 0 || d == "ltr" && !n.test(c)) return !1;
                    for (var w = c.length, x = [], T = 0; T < w; ++T) x.push(r(c.charCodeAt(T)));
                    for (var H = 0, B = p; H < w; ++H) {
                        var j = x[H];
                        j == "m" ? x[H] = B : B = j;
                    }
                    for (var $ = 0, I = p; $ < w; ++$) {
                        var J = x[$];
                        J == "1" && I == "r" ? x[$] = "n" : o.test(J) && (I = J, 
                        J == "r" && (x[$] = "R"));
                    }
                    for (var q = 1, et = x[0]; q < w - 1; ++q) {
                        var Ct = x[q];
                        Ct == "+" && et == "1" && x[q + 1] == "1" ? x[q] = "1" : Ct != "," || et != x[q + 1] || et != "1" && et != "n" || (x[q] = et), 
                        et = Ct;
                    }
                    for (var kt = 0; kt < w; ++kt) {
                        var fe = x[kt];
                        if (fe == ",") x[kt] = "N"; else if (fe == "%") {
                            var Tt = void 0;
                            for (Tt = kt + 1; Tt < w && x[Tt] == "%"; ++Tt);
                            for (var xe = kt && x[kt - 1] == "!" || Tt < w && x[Tt] == "1" ? "1" : "N", he = kt; he < Tt; ++he) x[he] = xe;
                            kt = Tt - 1;
                        }
                    }
                    for (var Ft = 0, se = p; Ft < w; ++Ft) {
                        var ne = x[Ft];
                        se == "L" && ne == "1" ? x[Ft] = "L" : o.test(ne) && (se = ne);
                    }
                    for (var It = 0; It < w; ++It) if (i.test(x[It])) {
                        var Et = void 0;
                        for (Et = It + 1; Et < w && i.test(x[Et]); ++Et);
                        for (var zt = (It ? x[It - 1] : p) == "L", ce = zt == ((Et < w ? x[Et] : p) == "L") ? zt ? "L" : "R" : p, ln = It; ln < Et; ++ln) x[ln] = ce;
                        It = Et - 1;
                    }
                    for (var Ae, Jt = [], Ut = 0; Ut < w; ) if (l.test(x[Ut])) {
                        var lo = Ut;
                        for (++Ut; Ut < w && l.test(x[Ut]); ++Ut);
                        Jt.push(new s(0, lo, Ut));
                    } else {
                        var $e = Ut, vn = Jt.length, yn = d == "rtl" ? 1 : 0;
                        for (++Ut; Ut < w && x[Ut] != "L"; ++Ut);
                        for (var re = $e; re < Ut; ) if (a.test(x[re])) {
                            $e < re && (Jt.splice(vn, 0, new s(1, $e, re)), vn += yn);
                            var jn = re;
                            for (++re; re < Ut && a.test(x[re]); ++re);
                            Jt.splice(vn, 0, new s(2, jn, re)), vn += yn, $e = re;
                        } else ++re;
                        $e < Ut && Jt.splice(vn, 0, new s(1, $e, Ut));
                    }
                    return d == "ltr" && (Jt[0].level == 1 && (Ae = c.match(/^\s+/)) && (Jt[0].from = Ae[0].length, 
                    Jt.unshift(new s(0, 0, Ae[0].length))), ut(Jt).level == 1 && (Ae = c.match(/\s+$/)) && (ut(Jt).to -= Ae[0].length, 
                    Jt.push(new s(0, w - Ae[0].length, w)))), d == "rtl" ? Jt.reverse() : Jt;
                };
            }();
            function ve(t, e) {
                var r = t.order;
                return r == null && (r = t.order = di(t.text, e)), r;
            }
            var Dr = [], V = function(t, e, r) {
                if (t.addEventListener) t.addEventListener(e, r, !1); else if (t.attachEvent) t.attachEvent("on" + e, r); else {
                    var n = t._handlers || (t._handlers = {});
                    n[e] = (n[e] || Dr).concat(r);
                }
            };
            function $n(t, e) {
                return t._handlers && t._handlers[e] || Dr;
            }
            function Yt(t, e, r) {
                if (t.removeEventListener) t.removeEventListener(e, r, !1); else if (t.detachEvent) t.detachEvent("on" + e, r); else {
                    var n = t._handlers, i = n && n[e];
                    if (i) {
                        var o = ct(i, r);
                        o > -1 && (n[e] = i.slice(0, o).concat(i.slice(o + 1)));
                    }
                }
            }
            function Lt(t, e) {
                var r = $n(t, e);
                if (r.length) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n);
            }
            function Wt(t, e, r) {
                return typeof e == "string" && (e = {
                    type: e,
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                    }
                }), Lt(t, r || e.type, t, e), Xn(e) || e.codemirrorIgnore;
            }
            function Hr(t) {
                var e = t._handlers && t._handlers.cursorActivity;
                if (e) for (var r = t.curOp.cursorActivityHandlers || (t.curOp.cursorActivityHandlers = []), n = 0; n < e.length; ++n) ct(r, e[n]) == -1 && r.push(e[n]);
            }
            function Qt(t, e) {
                return $n(t, e).length > 0;
            }
            function te(t) {
                t.prototype.on = function(e, r) {
                    V(this, e, r);
                }, t.prototype.off = function(e, r) {
                    Yt(this, e, r);
                };
            }
            function qt(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1;
            }
            function sn(t) {
                t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
            }
            function Xn(t) {
                return t.defaultPrevented != null ? t.defaultPrevented : t.returnValue == 0;
            }
            function Re(t) {
                qt(t), sn(t);
            }
            function ie(t) {
                return t.target || t.srcElement;
            }
            function Yn(t) {
                var e = t.which;
                return e == null && (1 & t.button ? e = 1 : 2 & t.button ? e = 3 : 4 & t.button && (e = 2)), 
                h && t.ctrlKey && e == 1 && (e = 3), e;
            }
            var qn, ye, pi = function() {
                if (Q && Y < 9) return !1;
                var t = U("div");
                return "draggable" in t || "dragDrop" in t;
            }();
            function Wr(t) {
                if (qn == null) {
                    var e = U("span", "​");
                    v(t, U("span", [ e, document.createTextNode("x") ])), t.firstChild.offsetHeight != 0 && (qn = e.offsetWidth <= 1 && e.offsetHeight > 2 && !(Q && Y < 8));
                }
                var r = qn ? U("span", "​") : U("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return r.setAttribute("cm-text", ""), r;
            }
            function Fr(t) {
                if (ye != null) return ye;
                var e = v(t, document.createTextNode("AخA")), r = z(e, 0, 1).getBoundingClientRect(), n = z(e, 1, 2).getBoundingClientRect();
                return R(t), !(!r || r.left == r.right) && (ye = n.right - r.right < 3);
            }
            var Zn, De = `

b`.split(/\n/).length != 3 ? function(t) {
                for (var e = 0, r = [], n = t.length; e <= n; ) {
                    var i = t.indexOf(`
`, e);
                    i == -1 && (i = t.length);
                    var o = t.slice(e, t.charAt(i - 1) == "\r" ? i - 1 : i), l = o.indexOf("\r");
                    l != -1 ? (r.push(o.slice(0, l)), e += l + 1) : (r.push(o), 
                    e = i + 1);
                }
                return r;
            } : function(t) {
                return t.split(/\r\n?|\n/);
            }, He = window.getSelection ? function(t) {
                try {
                    return t.selectionStart != t.selectionEnd;
                } catch {
                    return !1;
                }
            } : function(t) {
                var e;
                try {
                    e = t.ownerDocument.selection.createRange();
                } catch {}
                return !(!e || e.parentElement() != t) && e.compareEndPoints("StartToEnd", e) != 0;
            }, qe = "oncopy" in (Zn = U("div")) || (Zn.setAttribute("oncopy", "return;"), 
            typeof Zn.oncopy == "function"), kn = null;
            function Ie(t) {
                if (kn != null) return kn;
                var e = v(t, U("span", "x")), r = e.getBoundingClientRect(), n = z(e, 0, 1).getBoundingClientRect();
                return kn = Math.abs(r.left - n.left) > 1;
            }
            var Jn = {}, ze = {};
            function Sn(t, e) {
                arguments.length > 2 && (e.dependencies = Array.prototype.slice.call(arguments, 2)), 
                Jn[t] = e;
            }
            function ke(t, e) {
                ze[t] = e;
            }
            function We(t) {
                if (typeof t == "string" && ze.hasOwnProperty(t)) t = ze[t]; else if (t && typeof t.name == "string" && ze.hasOwnProperty(t.name)) {
                    var e = ze[t.name];
                    typeof e == "string" && (e = {
                        name: e
                    }), (t = Nr(e, t)).name = e.name;
                } else {
                    if (typeof t == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return We("application/xml");
                    if (typeof t == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(t)) return We("application/json");
                }
                return typeof t == "string" ? {
                    name: t
                } : t || {
                    name: "null"
                };
            }
            function Qn(t, e) {
                e = We(e);
                var r = Jn[e.name];
                if (!r) return Qn(t, "text/plain");
                var n = r(t, e);
                if (Ue.hasOwnProperty(e.name)) {
                    var i = Ue[e.name];
                    for (var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), 
                    n[o] = i[o]);
                }
                if (n.name = e.name, e.helperType && (n.helperType = e.helperType), 
                e.modeProps) for (var l in e.modeProps) n[l] = e.modeProps[l];
                return n;
            }
            var Ue = {};
            function gi(t, e) {
                nt(e, Ue.hasOwnProperty(t) ? Ue[t] : Ue[t] = {});
            }
            function be(t, e) {
                if (e === !0) return e;
                if (t.copyState) return t.copyState(e);
                var r = {};
                for (var n in e) {
                    var i = e[n];
                    i instanceof Array && (i = i.concat([])), r[n] = i;
                }
                return r;
            }
            function Ln(t, e) {
                for (var r; t.innerMode && (r = t.innerMode(e)) && r.mode != t; ) e = r.state, 
                t = r.mode;
                return r || {
                    mode: t,
                    state: e
                };
            }
            function Pr(t, e, r) {
                return !t.startState || t.startState(e, r);
            }
            var Nt = function(t, e, r) {
                this.pos = this.start = 0, this.string = t, this.tabSize = e || 8, 
                this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, 
                this.lineOracle = r;
            };
            function tt(t, e) {
                if ((e -= t.first) < 0 || e >= t.size) throw new Error("There is no line " + (e + t.first) + " in the document.");
                for (var r = t; !r.lines; ) for (var n = 0; ;++n) {
                    var i = r.children[n], o = i.chunkSize();
                    if (e < o) {
                        r = i;
                        break;
                    }
                    e -= o;
                }
                return r.lines[e];
            }
            function Fe(t, e, r) {
                var n = [], i = e.line;
                return t.iter(e.line, r.line + 1, function(o) {
                    var l = o.text;
                    i == r.line && (l = l.slice(0, r.ch)), i == e.line && (l = l.slice(e.ch)), 
                    n.push(l), ++i;
                }), n;
            }
            function tr(t, e, r) {
                var n = [];
                return t.iter(e, r, function(i) {
                    n.push(i.text);
                }), n;
            }
            function we(t, e) {
                var r = e - t.height;
                if (r) for (var n = t; n; n = n.parent) n.height += r;
            }
            function ht(t) {
                if (t.parent == null) return null;
                for (var e = t.parent, r = ct(e.lines, t), n = e.parent; n; e = n, 
                n = n.parent) for (var i = 0; n.children[i] != e; ++i) r += n.children[i].chunkSize();
                return r + e.first;
            }
            function f(t, e) {
                var r = t.first;
                t: do {
                    for (var n = 0; n < t.children.length; ++n) {
                        var i = t.children[n], o = i.height;
                        if (e < o) {
                            t = i;
                            continue t;
                        }
                        e -= o, r += i.chunkSize();
                    }
                    return r;
                } while (!t.lines);
                for (var l = 0; l < t.lines.length; ++l) {
                    var a = t.lines[l].height;
                    if (e < a) break;
                    e -= a;
                }
                return r + l;
            }
            function g(t, e) {
                return e >= t.first && e < t.first + t.size;
            }
            function A(t, e) {
                return String(t.lineNumberFormatter(e + t.firstLineNumber));
            }
            function k(t, e, r) {
                if (r === void 0 && (r = null), !(this instanceof k)) return new k(t, e, r);
                this.line = t, this.ch = e, this.sticky = r;
            }
            function W(t, e) {
                return t.line - e.line || t.ch - e.ch;
            }
            function ft(t, e) {
                return t.sticky == e.sticky && W(t, e) == 0;
            }
            function yt(t) {
                return k(t.line, t.ch);
            }
            function Vt(t, e) {
                return W(t, e) < 0 ? e : t;
            }
            function oe(t, e) {
                return W(t, e) < 0 ? t : e;
            }
            function po(t, e) {
                return Math.max(t.first, Math.min(e, t.first + t.size - 1));
            }
            function ot(t, e) {
                if (e.line < t.first) return k(t.first, 0);
                var r = t.first + t.size - 1;
                return e.line > r ? k(r, tt(t, r).text.length) : xa(e, tt(t, e.line).text.length);
            }
            function xa(t, e) {
                var r = t.ch;
                return r == null || r > e ? k(t.line, e) : r < 0 ? k(t.line, 0) : t;
            }
            function go(t, e) {
                for (var r = [], n = 0; n < e.length; n++) r[n] = ot(t, e[n]);
                return r;
            }
            Nt.prototype.eol = function() {
                return this.pos >= this.string.length;
            }, Nt.prototype.sol = function() {
                return this.pos == this.lineStart;
            }, Nt.prototype.peek = function() {
                return this.string.charAt(this.pos) || void 0;
            }, Nt.prototype.next = function() {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++);
            }, Nt.prototype.eat = function(t) {
                var e = this.string.charAt(this.pos);
                if (typeof t == "string" ? e == t : e && (t.test ? t.test(e) : t(e))) return ++this.pos, 
                e;
            }, Nt.prototype.eatWhile = function(t) {
                for (var e = this.pos; this.eat(t); );
                return this.pos > e;
            }, Nt.prototype.eatSpace = function() {
                for (var t = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
                return this.pos > t;
            }, Nt.prototype.skipToEnd = function() {
                this.pos = this.string.length;
            }, Nt.prototype.skipTo = function(t) {
                var e = this.string.indexOf(t, this.pos);
                if (e > -1) return this.pos = e, !0;
            }, Nt.prototype.backUp = function(t) {
                this.pos -= t;
            }, Nt.prototype.column = function() {
                return this.lastColumnPos < this.start && (this.lastColumnValue = X(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), 
                this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? X(this.string, this.lineStart, this.tabSize) : 0);
            }, Nt.prototype.indentation = function() {
                return X(this.string, null, this.tabSize) - (this.lineStart ? X(this.string, this.lineStart, this.tabSize) : 0);
            }, Nt.prototype.match = function(t, e, r) {
                if (typeof t != "string") {
                    var n = this.string.slice(this.pos).match(t);
                    return n && n.index > 0 ? null : (n && e !== !1 && (this.pos += n[0].length), 
                    n);
                }
                var i = function(o) {
                    return r ? o.toLowerCase() : o;
                };
                if (i(this.string.substr(this.pos, t.length)) == i(t)) return e !== !1 && (this.pos += t.length), 
                !0;
            }, Nt.prototype.current = function() {
                return this.string.slice(this.start, this.pos);
            }, Nt.prototype.hideFirstChars = function(t, e) {
                this.lineStart += t;
                try {
                    return e();
                } finally {
                    this.lineStart -= t;
                }
            }, Nt.prototype.lookAhead = function(t) {
                var e = this.lineOracle;
                return e && e.lookAhead(t);
            }, Nt.prototype.baseToken = function() {
                var t = this.lineOracle;
                return t && t.baseToken(this.pos);
            };
            var Er = function(t, e) {
                this.state = t, this.lookAhead = e;
            }, Pe = function(t, e, r, n) {
                this.state = e, this.doc = t, this.line = r, this.maxLookAhead = n || 0, 
                this.baseTokens = null, this.baseTokenPos = 1;
            };
            function mo(t, e, r, n) {
                var i = [ t.state.modeGen ], o = {};
                Co(t, e.text, t.doc.mode, r, function(c, d) {
                    return i.push(c, d);
                }, o, n);
                for (var l = r.state, a = function(c) {
                    r.baseTokens = i;
                    var d = t.state.overlays[c], p = 1, w = 0;
                    r.state = !0, Co(t, e.text, d.mode, r, function(x, T) {
                        for (var H = p; w < x; ) {
                            var B = i[p];
                            B > x && i.splice(p, 1, x, i[p + 1], B), p += 2, w = Math.min(x, B);
                        }
                        if (T) if (d.opaque) i.splice(H, p - H, x, "overlay " + T), 
                        p = H + 2; else for (;H < p; H += 2) {
                            var j = i[H + 1];
                            i[H + 1] = (j ? j + " " : "") + "overlay " + T;
                        }
                    }, o), r.state = l, r.baseTokens = null, r.baseTokenPos = 1;
                }, s = 0; s < t.state.overlays.length; ++s) a(s);
                return {
                    styles: i,
                    classes: o.bgClass || o.textClass ? o : null
                };
            }
            function vo(t, e, r) {
                if (!e.styles || e.styles[0] != t.state.modeGen) {
                    var n = er(t, ht(e)), i = e.text.length > t.options.maxHighlightLength && be(t.doc.mode, n.state), o = mo(t, e, n);
                    i && (n.state = i), e.stateAfter = n.save(!i), e.styles = o.styles, 
                    o.classes ? e.styleClasses = o.classes : e.styleClasses && (e.styleClasses = null), 
                    r === t.doc.highlightFrontier && (t.doc.modeFrontier = Math.max(t.doc.modeFrontier, ++t.doc.highlightFrontier));
                }
                return e.styles;
            }
            function er(t, e, r) {
                var n = t.doc, i = t.display;
                if (!n.mode.startState) return new Pe(n, !0, e);
                var o = Ca(t, e, r), l = o > n.first && tt(n, o - 1).stateAfter, a = l ? Pe.fromSaved(n, l, o) : new Pe(n, Pr(n.mode), o);
                return n.iter(o, e, function(s) {
                    mi(t, s.text, a);
                    var c = a.line;
                    s.stateAfter = c == e - 1 || c % 5 == 0 || c >= i.viewFrom && c < i.viewTo ? a.save() : null, 
                    a.nextLine();
                }), r && (n.modeFrontier = a.line), a;
            }
            function mi(t, e, r, n) {
                var i = t.doc.mode, o = new Nt(e, t.options.tabSize, r);
                for (o.start = o.pos = n || 0, e == "" && yo(i, r.state); !o.eol(); ) vi(i, o, r.state), 
                o.start = o.pos;
            }
            function yo(t, e) {
                if (t.blankLine) return t.blankLine(e);
                if (t.innerMode) {
                    var r = Ln(t, e);
                    return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
                }
            }
            function vi(t, e, r, n) {
                for (var i = 0; i < 10; i++) {
                    n && (n[0] = Ln(t, r).mode);
                    var o = t.token(e, r);
                    if (e.pos > e.start) return o;
                }
                throw new Error("Mode " + t.name + " failed to advance stream.");
            }
            Pe.prototype.lookAhead = function(t) {
                var e = this.doc.getLine(this.line + t);
                return e != null && t > this.maxLookAhead && (this.maxLookAhead = t), 
                e;
            }, Pe.prototype.baseToken = function(t) {
                if (!this.baseTokens) return null;
                for (;this.baseTokens[this.baseTokenPos] <= t; ) this.baseTokenPos += 2;
                var e = this.baseTokens[this.baseTokenPos + 1];
                return {
                    type: e && e.replace(/( |^)overlay .*/, ""),
                    size: this.baseTokens[this.baseTokenPos] - t
                };
            }, Pe.prototype.nextLine = function() {
                this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
            }, Pe.fromSaved = function(t, e, r) {
                return e instanceof Er ? new Pe(t, be(t.mode, e.state), r, e.lookAhead) : new Pe(t, be(t.mode, e), r);
            }, Pe.prototype.save = function(t) {
                var e = t !== !1 ? be(this.doc.mode, this.state) : this.state;
                return this.maxLookAhead > 0 ? new Er(e, this.maxLookAhead) : e;
            };
            var bo = function(t, e, r) {
                this.start = t.start, this.end = t.pos, this.string = t.current(), 
                this.type = e || null, this.state = r;
            };
            function wo(t, e, r, n) {
                var i, o, l = t.doc, a = l.mode, s = tt(l, (e = ot(l, e)).line), c = er(t, e.line, r), d = new Nt(s.text, t.options.tabSize, c);
                for (n && (o = []); (n || d.pos < e.ch) && !d.eol(); ) d.start = d.pos, 
                i = vi(a, d, c.state), n && o.push(new bo(d, i, be(l.mode, c.state)));
                return n ? o : new bo(d, i, c.state);
            }
            function xo(t, e) {
                if (t) for (;;) {
                    var r = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!r) break;
                    t = t.slice(0, r.index) + t.slice(r.index + r[0].length);
                    var n = r[1] ? "bgClass" : "textClass";
                    e[n] == null ? e[n] = r[2] : new RegExp("(?:^|\\s)" + r[2] + "(?:$|\\s)").test(e[n]) || (e[n] += " " + r[2]);
                }
                return t;
            }
            function Co(t, e, r, n, i, o, l) {
                var a = r.flattenSpans;
                a == null && (a = t.options.flattenSpans);
                var s, c = 0, d = null, p = new Nt(e, t.options.tabSize, n), w = t.options.addModeClass && [ null ];
                for (e == "" && xo(yo(r, n.state), o); !p.eol(); ) {
                    if (p.pos > t.options.maxHighlightLength ? (a = !1, l && mi(t, e, n, p.pos), 
                    p.pos = e.length, s = null) : s = xo(vi(r, p, n.state, w), o), 
                    w) {
                        var x = w[0].name;
                        x && (s = "m-" + (s ? x + " " + s : x));
                    }
                    if (!a || d != s) {
                        for (;c < p.start; ) i(c = Math.min(p.start, c + 5e3), d);
                        d = s;
                    }
                    p.start = p.pos;
                }
                for (;c < p.pos; ) {
                    var T = Math.min(p.pos, c + 5e3);
                    i(T, d), c = T;
                }
            }
            function Ca(t, e, r) {
                for (var n, i, o = t.doc, l = r ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100), a = e; a > l; --a) {
                    if (a <= o.first) return o.first;
                    var s = tt(o, a - 1), c = s.stateAfter;
                    if (c && (!r || a + (c instanceof Er ? c.lookAhead : 0) <= o.modeFrontier)) return a;
                    var d = X(s.text, null, t.options.tabSize);
                    (i == null || n > d) && (i = a - 1, n = d);
                }
                return i;
            }
            function ka(t, e) {
                if (t.modeFrontier = Math.min(t.modeFrontier, e), !(t.highlightFrontier < e - 10)) {
                    for (var r = t.first, n = e - 1; n > r; n--) {
                        var i = tt(t, n).stateAfter;
                        if (i && (!(i instanceof Er) || n + i.lookAhead < e)) {
                            r = n + 1;
                            break;
                        }
                    }
                    t.highlightFrontier = Math.min(t.highlightFrontier, r);
                }
            }
            var ko = !1, Ve = !1;
            function Sa() {
                ko = !0;
            }
            function La() {
                Ve = !0;
            }
            function Br(t, e, r) {
                this.marker = t, this.from = e, this.to = r;
            }
            function nr(t, e) {
                if (t) for (var r = 0; r < t.length; ++r) {
                    var n = t[r];
                    if (n.marker == e) return n;
                }
            }
            function Ta(t, e) {
                for (var r, n = 0; n < t.length; ++n) t[n] != e && (r || (r = [])).push(t[n]);
                return r;
            }
            function Ma(t, e, r) {
                var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet()));
                n && t.markedSpans && n.has(t.markedSpans) ? t.markedSpans.push(e) : (t.markedSpans = t.markedSpans ? t.markedSpans.concat([ e ]) : [ e ], 
                n && n.add(t.markedSpans)), e.marker.attachLine(t);
            }
            function Aa(t, e, r) {
                var n;
                if (t) for (var i = 0; i < t.length; ++i) {
                    var o = t[i], l = o.marker;
                    if (o.from == null || (l.inclusiveLeft ? o.from <= e : o.from < e) || o.from == e && l.type == "bookmark" && (!r || !o.marker.insertLeft)) {
                        var a = o.to == null || (l.inclusiveRight ? o.to >= e : o.to > e);
                        (n || (n = [])).push(new Br(l, o.from, a ? null : o.to));
                    }
                }
                return n;
            }
            function Na(t, e, r) {
                var n;
                if (t) for (var i = 0; i < t.length; ++i) {
                    var o = t[i], l = o.marker;
                    if (o.to == null || (l.inclusiveRight ? o.to >= e : o.to > e) || o.from == e && l.type == "bookmark" && (!r || o.marker.insertLeft)) {
                        var a = o.from == null || (l.inclusiveLeft ? o.from <= e : o.from < e);
                        (n || (n = [])).push(new Br(l, a ? null : o.from - e, o.to == null ? null : o.to - e));
                    }
                }
                return n;
            }
            function yi(t, e) {
                if (e.full) return null;
                var r = g(t, e.from.line) && tt(t, e.from.line).markedSpans, n = g(t, e.to.line) && tt(t, e.to.line).markedSpans;
                if (!r && !n) return null;
                var i = e.from.ch, o = e.to.ch, l = W(e.from, e.to) == 0, a = Aa(r, i, l), s = Na(n, o, l), c = e.text.length == 1, d = ut(e.text).length + (c ? i : 0);
                if (a) for (var p = 0; p < a.length; ++p) {
                    var w = a[p];
                    if (w.to == null) {
                        var x = nr(s, w.marker);
                        x ? c && (w.to = x.to == null ? null : x.to + d) : w.to = i;
                    }
                }
                if (s) for (var T = 0; T < s.length; ++T) {
                    var H = s[T];
                    H.to != null && (H.to += d), H.from == null ? nr(a, H.marker) || (H.from = d, 
                    c && (a || (a = [])).push(H)) : (H.from += d, c && (a || (a = [])).push(H));
                }
                a && (a = So(a)), s && s != a && (s = So(s));
                var B = [ a ];
                if (!c) {
                    var j, $ = e.text.length - 2;
                    if ($ > 0 && a) for (var I = 0; I < a.length; ++I) a[I].to == null && (j || (j = [])).push(new Br(a[I].marker, null, null));
                    for (var J = 0; J < $; ++J) B.push(j);
                    B.push(s);
                }
                return B;
            }
            function So(t) {
                for (var e = 0; e < t.length; ++e) {
                    var r = t[e];
                    r.from != null && r.from == r.to && r.marker.clearWhenEmpty !== !1 && t.splice(e--, 1);
                }
                return t.length ? t : null;
            }
            function Oa(t, e, r) {
                var n = null;
                if (t.iter(e.line, r.line + 1, function(x) {
                    if (x.markedSpans) for (var T = 0; T < x.markedSpans.length; ++T) {
                        var H = x.markedSpans[T].marker;
                        !H.readOnly || n && ct(n, H) != -1 || (n || (n = [])).push(H);
                    }
                }), !n) return null;
                for (var i = [ {
                    from: e,
                    to: r
                } ], o = 0; o < n.length; ++o) for (var l = n[o], a = l.find(0), s = 0; s < i.length; ++s) {
                    var c = i[s];
                    if (!(W(c.to, a.from) < 0 || W(c.from, a.to) > 0)) {
                        var d = [ s, 1 ], p = W(c.from, a.from), w = W(c.to, a.to);
                        (p < 0 || !l.inclusiveLeft && !p) && d.push({
                            from: c.from,
                            to: a.from
                        }), (w > 0 || !l.inclusiveRight && !w) && d.push({
                            from: a.to,
                            to: c.to
                        }), i.splice.apply(i, d), s += d.length - 3;
                    }
                }
                return i;
            }
            function Lo(t) {
                var e = t.markedSpans;
                if (e) {
                    for (var r = 0; r < e.length; ++r) e[r].marker.detachLine(t);
                    t.markedSpans = null;
                }
            }
            function To(t, e) {
                if (e) {
                    for (var r = 0; r < e.length; ++r) e[r].marker.attachLine(t);
                    t.markedSpans = e;
                }
            }
            function Rr(t) {
                return t.inclusiveLeft ? -1 : 0;
            }
            function Ir(t) {
                return t.inclusiveRight ? 1 : 0;
            }
            function bi(t, e) {
                var r = t.lines.length - e.lines.length;
                if (r != 0) return r;
                var n = t.find(), i = e.find(), o = W(n.from, i.from) || Rr(t) - Rr(e);
                if (o) return -o;
                var l = W(n.to, i.to) || Ir(t) - Ir(e);
                return l || e.id - t.id;
            }
            function Mo(t, e) {
                var r, n = Ve && t.markedSpans;
                if (n) for (var i = void 0, o = 0; o < n.length; ++o) (i = n[o]).marker.collapsed && (e ? i.from : i.to) == null && (!r || bi(r, i.marker) < 0) && (r = i.marker);
                return r;
            }
            function Ao(t) {
                return Mo(t, !0);
            }
            function zr(t) {
                return Mo(t, !1);
            }
            function Da(t, e) {
                var r, n = Ve && t.markedSpans;
                if (n) for (var i = 0; i < n.length; ++i) {
                    var o = n[i];
                    o.marker.collapsed && (o.from == null || o.from < e) && (o.to == null || o.to > e) && (!r || bi(r, o.marker) < 0) && (r = o.marker);
                }
                return r;
            }
            function No(t, e, r, n, i) {
                var o = tt(t, e), l = Ve && o.markedSpans;
                if (l) for (var a = 0; a < l.length; ++a) {
                    var s = l[a];
                    if (s.marker.collapsed) {
                        var c = s.marker.find(0), d = W(c.from, r) || Rr(s.marker) - Rr(i), p = W(c.to, n) || Ir(s.marker) - Ir(i);
                        if (!(d >= 0 && p <= 0 || d <= 0 && p >= 0) && (d <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? W(c.to, r) >= 0 : W(c.to, r) > 0) || d >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? W(c.from, n) <= 0 : W(c.from, n) < 0))) return !0;
                    }
                }
            }
            function Se(t) {
                for (var e; e = Ao(t); ) t = e.find(-1, !0).line;
                return t;
            }
            function Ha(t) {
                for (var e; e = zr(t); ) t = e.find(1, !0).line;
                return t;
            }
            function Wa(t) {
                for (var e, r; e = zr(t); ) t = e.find(1, !0).line, (r || (r = [])).push(t);
                return r;
            }
            function wi(t, e) {
                var r = tt(t, e), n = Se(r);
                return r == n ? e : ht(n);
            }
            function Oo(t, e) {
                if (e > t.lastLine()) return e;
                var r, n = tt(t, e);
                if (!Ze(t, n)) return e;
                for (;r = zr(n); ) n = r.find(1, !0).line;
                return ht(n) + 1;
            }
            function Ze(t, e) {
                var r = Ve && e.markedSpans;
                if (r) {
                    for (var n = void 0, i = 0; i < r.length; ++i) if ((n = r[i]).marker.collapsed && (n.from == null || !n.marker.widgetNode && n.from == 0 && n.marker.inclusiveLeft && xi(t, e, n))) return !0;
                }
            }
            function xi(t, e, r) {
                if (r.to == null) {
                    var n = r.marker.find(1, !0);
                    return xi(t, n.line, nr(n.line.markedSpans, r.marker));
                }
                if (r.marker.inclusiveRight && r.to == e.text.length) return !0;
                for (var i = void 0, o = 0; o < e.markedSpans.length; ++o) if ((i = e.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == r.to && (i.to == null || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && xi(t, e, i)) return !0;
            }
            function je(t) {
                for (var e = 0, r = (t = Se(t)).parent, n = 0; n < r.lines.length; ++n) {
                    var i = r.lines[n];
                    if (i == t) break;
                    e += i.height;
                }
                for (var o = r.parent; o; o = (r = o).parent) for (var l = 0; l < o.children.length; ++l) {
                    var a = o.children[l];
                    if (a == r) break;
                    e += a.height;
                }
                return e;
            }
            function Ur(t) {
                if (t.height == 0) return 0;
                for (var e, r = t.text.length, n = t; e = Ao(n); ) {
                    var i = e.find(0, !0);
                    n = i.from.line, r += i.from.ch - i.to.ch;
                }
                for (n = t; e = zr(n); ) {
                    var o = e.find(0, !0);
                    r -= n.text.length - o.from.ch, r += (n = o.to.line).text.length - o.to.ch;
                }
                return r;
            }
            function Ci(t) {
                var e = t.display, r = t.doc;
                e.maxLine = tt(r, r.first), e.maxLineLength = Ur(e.maxLine), e.maxLineChanged = !0, 
                r.iter(function(n) {
                    var i = Ur(n);
                    i > e.maxLineLength && (e.maxLineLength = i, e.maxLine = n);
                });
            }
            var Tn = function(t, e, r) {
                this.text = t, To(this, e), this.height = r ? r(this) : 1;
            };
            function Fa(t, e, r, n) {
                t.text = e, t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null), 
                t.order != null && (t.order = null), Lo(t), To(t, r);
                var i = n ? n(t) : 1;
                i != t.height && we(t, i);
            }
            function Pa(t) {
                t.parent = null, Lo(t);
            }
            Tn.prototype.lineNo = function() {
                return ht(this);
            }, te(Tn);
            var Ea = {}, Ba = {};
            function Do(t, e) {
                if (!t || /^\s*$/.test(t)) return null;
                var r = e.addModeClass ? Ba : Ea;
                return r[t] || (r[t] = t.replace(/\S+/g, "cm-$&"));
            }
            function Ho(t, e) {
                var r = wt("span", null, null, K ? "padding-right: .1px" : null), n = {
                    pre: wt("pre", [ r ], "CodeMirror-line"),
                    content: r,
                    col: 0,
                    pos: 0,
                    cm: t,
                    trailingSpace: !1,
                    splitSpaces: t.getOption("lineWrapping")
                };
                e.measure = {};
                for (var i = 0; i <= (e.rest ? e.rest.length : 0); i++) {
                    var o = i ? e.rest[i - 1] : e.line, l = void 0;
                    n.pos = 0, n.addToken = Ia, Fr(t.display.measure) && (l = ve(o, t.doc.direction)) && (n.addToken = Ua(n.addToken, l)), 
                    n.map = [], Va(o, n, vo(t, o, e != t.display.externalMeasured && ht(o))), 
                    o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = Rt(o.styleClasses.bgClass, n.bgClass || "")), 
                    o.styleClasses.textClass && (n.textClass = Rt(o.styleClasses.textClass, n.textClass || ""))), 
                    n.map.length == 0 && n.map.push(0, 0, n.content.appendChild(Wr(t.display.measure))), 
                    i == 0 ? (e.measure.map = n.map, e.measure.cache = {}) : ((e.measure.maps || (e.measure.maps = [])).push(n.map), 
                    (e.measure.caches || (e.measure.caches = [])).push({}));
                }
                if (K) {
                    var a = n.content.lastChild;
                    (/\bcm-tab\b/.test(a.className) || a.querySelector && a.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack");
                }
                return Lt(t, "renderLine", t, e.line, n.pre), n.pre.className && (n.textClass = Rt(n.pre.className, n.textClass || "")), 
                n;
            }
            function Ra(t) {
                var e = U("span", "•", "cm-invalidchar");
                return e.title = "\\u" + t.charCodeAt(0).toString(16), e.setAttribute("aria-label", e.title), 
                e;
            }
            function Ia(t, e, r, n, i, o, l) {
                if (e) {
                    var a, s = t.splitSpaces ? za(e, t.trailingSpace) : e, c = t.cm.state.specialChars, d = !1;
                    if (c.test(e)) {
                        a = document.createDocumentFragment();
                        for (var p = 0; ;) {
                            c.lastIndex = p;
                            var w = c.exec(e), x = w ? w.index - p : e.length - p;
                            if (x) {
                                var T = document.createTextNode(s.slice(p, p + x));
                                Q && Y < 9 ? a.appendChild(U("span", [ T ])) : a.appendChild(T), 
                                t.map.push(t.pos, t.pos + x, T), t.col += x, t.pos += x;
                            }
                            if (!w) break;
                            p += x + 1;
                            var H = void 0;
                            if (w[0] == "\t") {
                                var B = t.cm.options.tabSize, j = B - t.col % B;
                                (H = a.appendChild(U("span", de(j), "cm-tab"))).setAttribute("role", "presentation"), 
                                H.setAttribute("cm-text", "\t"), t.col += j;
                            } else w[0] == "\r" || w[0] == `
` ? ((H = a.appendChild(U("span", w[0] == "\r" ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", w[0]), 
                            t.col += 1) : ((H = t.cm.options.specialCharPlaceholder(w[0])).setAttribute("cm-text", w[0]), 
                            Q && Y < 9 ? a.appendChild(U("span", [ H ])) : a.appendChild(H), 
                            t.col += 1);
                            t.map.push(t.pos, t.pos + 1, H), t.pos++;
                        }
                    } else t.col += e.length, a = document.createTextNode(s), t.map.push(t.pos, t.pos + e.length, a), 
                    Q && Y < 9 && (d = !0), t.pos += e.length;
                    if (t.trailingSpace = s.charCodeAt(e.length - 1) == 32, r || n || i || d || o || l) {
                        var $ = r || "";
                        n && ($ += n), i && ($ += i);
                        var I = U("span", [ a ], $, o);
                        if (l) for (var J in l) l.hasOwnProperty(J) && J != "style" && J != "class" && I.setAttribute(J, l[J]);
                        return t.content.appendChild(I);
                    }
                    t.content.appendChild(a);
                }
            }
            function za(t, e) {
                if (t.length > 1 && !/  /.test(t)) return t;
                for (var r = e, n = "", i = 0; i < t.length; i++) {
                    var o = t.charAt(i);
                    o != " " || !r || i != t.length - 1 && t.charCodeAt(i + 1) != 32 || (o = " "), 
                    n += o, r = o == " ";
                }
                return n;
            }
            function Ua(t, e) {
                return function(r, n, i, o, l, a, s) {
                    i = i ? i + " cm-force-border" : "cm-force-border";
                    for (var c = r.pos, d = c + n.length; ;) {
                        for (var p = void 0, w = 0; w < e.length && !((p = e[w]).to > c && p.from <= c); w++);
                        if (p.to >= d) return t(r, n, i, o, l, a, s);
                        t(r, n.slice(0, p.to - c), i, o, null, a, s), o = null, 
                        n = n.slice(p.to - c), c = p.to;
                    }
                };
            }
            function Wo(t, e, r, n) {
                var i = !n && r.widgetNode;
                i && t.map.push(t.pos, t.pos + e, i), !n && t.cm.display.input.needsContentAttribute && (i || (i = t.content.appendChild(document.createElement("span"))), 
                i.setAttribute("cm-marker", r.id)), i && (t.cm.display.input.setUneditable(i), 
                t.content.appendChild(i)), t.pos += e, t.trailingSpace = !1;
            }
            function Va(t, e, r) {
                var n = t.markedSpans, i = t.text, o = 0;
                if (n) for (var l, a, s, c, d, p, w, x = i.length, T = 0, H = 1, B = "", j = 0; ;) {
                    if (j == T) {
                        s = c = d = a = "", w = null, p = null, j = 1 / 0;
                        for (var $ = [], I = void 0, J = 0; J < n.length; ++J) {
                            var q = n[J], et = q.marker;
                            if (et.type == "bookmark" && q.from == T && et.widgetNode) $.push(et); else if (q.from <= T && (q.to == null || q.to > T || et.collapsed && q.to == T && q.from == T)) {
                                if (q.to != null && q.to != T && j > q.to && (j = q.to, 
                                c = ""), et.className && (s += " " + et.className), 
                                et.css && (a = (a ? a + ";" : "") + et.css), et.startStyle && q.from == T && (d += " " + et.startStyle), 
                                et.endStyle && q.to == j && (I || (I = [])).push(et.endStyle, q.to), 
                                et.title && ((w || (w = {})).title = et.title), 
                                et.attributes) for (var Ct in et.attributes) (w || (w = {}))[Ct] = et.attributes[Ct];
                                et.collapsed && (!p || bi(p.marker, et) < 0) && (p = q);
                            } else q.from > T && j > q.from && (j = q.from);
                        }
                        if (I) for (var kt = 0; kt < I.length; kt += 2) I[kt + 1] == j && (c += " " + I[kt]);
                        if (!p || p.from == T) for (var fe = 0; fe < $.length; ++fe) Wo(e, 0, $[fe]);
                        if (p && (p.from || 0) == T) {
                            if (Wo(e, (p.to == null ? x + 1 : p.to) - T, p.marker, p.from == null), 
                            p.to == null) return;
                            p.to == T && (p = !1);
                        }
                    }
                    if (T >= x) break;
                    for (var Tt = Math.min(x, j); ;) {
                        if (B) {
                            var xe = T + B.length;
                            if (!p) {
                                var he = xe > Tt ? B.slice(0, Tt - T) : B;
                                e.addToken(e, he, l ? l + s : s, d, T + he.length == j ? c : "", a, w);
                            }
                            if (xe >= Tt) {
                                B = B.slice(Tt - T), T = Tt;
                                break;
                            }
                            T = xe, d = "";
                        }
                        B = i.slice(o, o = r[H++]), l = Do(r[H++], e.cm.options);
                    }
                } else for (var Ft = 1; Ft < r.length; Ft += 2) e.addToken(e, i.slice(o, o = r[Ft]), Do(r[Ft + 1], e.cm.options));
            }
            function Fo(t, e, r) {
                this.line = e, this.rest = Wa(e), this.size = this.rest ? ht(ut(this.rest)) - r + 1 : 1, 
                this.node = this.text = null, this.hidden = Ze(t, e);
            }
            function Vr(t, e, r) {
                for (var n, i = [], o = e; o < r; o = n) {
                    var l = new Fo(t.doc, tt(t.doc, o), o);
                    n = o + l.size, i.push(l);
                }
                return i;
            }
            var Mn = null;
            function ja(t) {
                Mn ? Mn.ops.push(t) : t.ownsGroup = Mn = {
                    ops: [ t ],
                    delayedCallbacks: []
                };
            }
            function Ka(t) {
                var e = t.delayedCallbacks, r = 0;
                do {
                    for (;r < e.length; r++) e[r].call(null);
                    for (var n = 0; n < t.ops.length; n++) {
                        var i = t.ops[n];
                        if (i.cursorActivityHandlers) for (;i.cursorActivityCalled < i.cursorActivityHandlers.length; ) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                    }
                } while (r < e.length);
            }
            function Ga(t, e) {
                var r = t.ownsGroup;
                if (r) try {
                    Ka(r);
                } finally {
                    Mn = null, e(r);
                }
            }
            var rr = null;
            function Kt(t, e) {
                var r = $n(t, e);
                if (r.length) {
                    var n, i = Array.prototype.slice.call(arguments, 2);
                    Mn ? n = Mn.delayedCallbacks : rr ? n = rr : (n = rr = [], setTimeout(_a, 0));
                    for (var o = function(a) {
                        n.push(function() {
                            return r[a].apply(null, i);
                        });
                    }, l = 0; l < r.length; ++l) o(l);
                }
            }
            function _a() {
                var t = rr;
                rr = null;
                for (var e = 0; e < t.length; ++e) t[e]();
            }
            function Po(t, e, r, n) {
                for (var i = 0; i < e.changes.length; i++) {
                    var o = e.changes[i];
                    o == "text" ? Xa(t, e) : o == "gutter" ? Bo(t, e, r, n) : o == "class" ? ki(t, e) : o == "widget" && Ya(t, e, n);
                }
                e.changes = null;
            }
            function ir(t) {
                return t.node == t.text && (t.node = U("div", null, null, "position: relative"), 
                t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text), 
                t.node.appendChild(t.text), Q && Y < 8 && (t.node.style.zIndex = 2)), 
                t.node;
            }
            function $a(t, e) {
                var r = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
                if (r && (r += " CodeMirror-linebackground"), e.background) r ? e.background.className = r : (e.background.parentNode.removeChild(e.background), 
                e.background = null); else if (r) {
                    var n = ir(e);
                    e.background = n.insertBefore(U("div", null, r), n.firstChild), 
                    t.display.input.setUneditable(e.background);
                }
            }
            function Eo(t, e) {
                var r = t.display.externalMeasured;
                return r && r.line == e.line ? (t.display.externalMeasured = null, 
                e.measure = r.measure, r.built) : Ho(t, e);
            }
            function Xa(t, e) {
                var r = e.text.className, n = Eo(t, e);
                e.text == e.node && (e.node = n.pre), e.text.parentNode.replaceChild(n.pre, e.text), 
                e.text = n.pre, n.bgClass != e.bgClass || n.textClass != e.textClass ? (e.bgClass = n.bgClass, 
                e.textClass = n.textClass, ki(t, e)) : r && (e.text.className = r);
            }
            function ki(t, e) {
                $a(t, e), e.line.wrapClass ? ir(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
                var r = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
                e.text.className = r || "";
            }
            function Bo(t, e, r, n) {
                if (e.gutter && (e.node.removeChild(e.gutter), e.gutter = null), 
                e.gutterBackground && (e.node.removeChild(e.gutterBackground), e.gutterBackground = null), 
                e.line.gutterClass) {
                    var i = ir(e);
                    e.gutterBackground = U("div", null, "CodeMirror-gutter-background " + e.line.gutterClass, "left: " + (t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), 
                    t.display.input.setUneditable(e.gutterBackground), i.insertBefore(e.gutterBackground, e.text);
                }
                var o = e.line.gutterMarkers;
                if (t.options.lineNumbers || o) {
                    var l = ir(e), a = e.gutter = U("div", null, "CodeMirror-gutter-wrapper", "left: " + (t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
                    if (a.setAttribute("aria-hidden", "true"), t.display.input.setUneditable(a), 
                    l.insertBefore(a, e.text), e.line.gutterClass && (a.className += " " + e.line.gutterClass), 
                    !t.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (e.lineNumber = a.appendChild(U("div", A(t.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + t.display.lineNumInnerWidth + "px"))), 
                    o) for (var s = 0; s < t.display.gutterSpecs.length; ++s) {
                        var c = t.display.gutterSpecs[s].className, d = o.hasOwnProperty(c) && o[c];
                        d && a.appendChild(U("div", [ d ], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[c] + "px; width: " + n.gutterWidth[c] + "px"));
                    }
                }
            }
            function Ya(t, e, r) {
                e.alignable && (e.alignable = null);
                for (var n = F("CodeMirror-linewidget"), i = e.node.firstChild, o = void 0; i; i = o) o = i.nextSibling, 
                n.test(i.className) && e.node.removeChild(i);
                Ro(t, e, r);
            }
            function qa(t, e, r, n) {
                var i = Eo(t, e);
                return e.text = e.node = i.pre, i.bgClass && (e.bgClass = i.bgClass), 
                i.textClass && (e.textClass = i.textClass), ki(t, e), Bo(t, e, r, n), 
                Ro(t, e, n), e.node;
            }
            function Ro(t, e, r) {
                if (Io(t, e.line, e, r, !0), e.rest) for (var n = 0; n < e.rest.length; n++) Io(t, e.rest[n], e, r, !1);
            }
            function Io(t, e, r, n, i) {
                if (e.widgets) for (var o = ir(r), l = 0, a = e.widgets; l < a.length; ++l) {
                    var s = a[l], c = U("div", [ s.node ], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
                    s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), 
                    Za(s, c, r, n), t.display.input.setUneditable(c), i && s.above ? o.insertBefore(c, r.gutter || r.text) : o.appendChild(c), 
                    Kt(s, "redraw");
                }
            }
            function Za(t, e, r, n) {
                if (t.noHScroll) {
                    (r.alignable || (r.alignable = [])).push(e);
                    var i = n.wrapperWidth;
                    e.style.left = n.fixedPos + "px", t.coverGutter || (i -= n.gutterTotalWidth, 
                    e.style.paddingLeft = n.gutterTotalWidth + "px"), e.style.width = i + "px";
                }
                t.coverGutter && (e.style.zIndex = 5, e.style.position = "relative", 
                t.noHScroll || (e.style.marginLeft = -n.gutterTotalWidth + "px"));
            }
            function or(t) {
                if (t.height != null) return t.height;
                var e = t.doc.cm;
                if (!e) return 0;
                if (!St(document.body, t.node)) {
                    var r = "position: relative;";
                    t.coverGutter && (r += "margin-left: -" + e.display.gutters.offsetWidth + "px;"), 
                    t.noHScroll && (r += "width: " + e.display.wrapper.clientWidth + "px;"), 
                    v(e.display.measure, U("div", [ t.node ], null, r));
                }
                return t.height = t.node.parentNode.offsetHeight;
            }
            function Ke(t, e) {
                for (var r = ie(e); r != t.wrapper; r = r.parentNode) if (!r || r.nodeType == 1 && r.getAttribute("cm-ignore-events") == "true" || r.parentNode == t.sizer && r != t.mover) return !0;
            }
            function jr(t) {
                return t.lineSpace.offsetTop;
            }
            function Si(t) {
                return t.mover.offsetHeight - t.lineSpace.offsetHeight;
            }
            function zo(t) {
                if (t.cachedPaddingH) return t.cachedPaddingH;
                var e = v(t.measure, U("pre", "x", "CodeMirror-line-like")), r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, n = {
                    left: parseInt(r.paddingLeft),
                    right: parseInt(r.paddingRight)
                };
                return isNaN(n.left) || isNaN(n.right) || (t.cachedPaddingH = n), 
                n;
            }
            function Ee(t) {
                return Ye - t.display.nativeBarWidth;
            }
            function cn(t) {
                return t.display.scroller.clientWidth - Ee(t) - t.display.barWidth;
            }
            function Li(t) {
                return t.display.scroller.clientHeight - Ee(t) - t.display.barHeight;
            }
            function Ja(t, e, r) {
                var n = t.options.lineWrapping, i = n && cn(t);
                if (!e.measure.heights || n && e.measure.width != i) {
                    var o = e.measure.heights = [];
                    if (n) {
                        e.measure.width = i;
                        for (var l = e.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
                            var s = l[a], c = l[a + 1];
                            Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - r.top);
                        }
                    }
                    o.push(r.bottom - r.top);
                }
            }
            function Uo(t, e, r) {
                if (t.line == e) return {
                    map: t.measure.map,
                    cache: t.measure.cache
                };
                if (t.rest) {
                    for (var n = 0; n < t.rest.length; n++) if (t.rest[n] == e) return {
                        map: t.measure.maps[n],
                        cache: t.measure.caches[n]
                    };
                    for (var i = 0; i < t.rest.length; i++) if (ht(t.rest[i]) > r) return {
                        map: t.measure.maps[i],
                        cache: t.measure.caches[i],
                        before: !0
                    };
                }
            }
            function Qa(t, e) {
                var r = ht(e = Se(e)), n = t.display.externalMeasured = new Fo(t.doc, e, r);
                n.lineN = r;
                var i = n.built = Ho(t, n);
                return n.text = i.pre, v(t.display.lineMeasure, i.pre), n;
            }
            function Vo(t, e, r, n) {
                return Be(t, An(t, e), r, n);
            }
            function Ti(t, e) {
                if (e >= t.display.viewFrom && e < t.display.viewTo) return t.display.view[hn(t, e)];
                var r = t.display.externalMeasured;
                return r && e >= r.lineN && e < r.lineN + r.size ? r : void 0;
            }
            function An(t, e) {
                var r = ht(e), n = Ti(t, r);
                n && !n.text ? n = null : n && n.changes && (Po(t, n, r, Di(t)), 
                t.curOp.forceUpdate = !0), n || (n = Qa(t, e));
                var i = Uo(n, e, r);
                return {
                    line: e,
                    view: n,
                    rect: null,
                    map: i.map,
                    cache: i.cache,
                    before: i.before,
                    hasHeights: !1
                };
            }
            function Be(t, e, r, n, i) {
                e.before && (r = -1);
                var o, l = r + (n || "");
                return e.cache.hasOwnProperty(l) ? o = e.cache[l] : (e.rect || (e.rect = e.view.text.getBoundingClientRect()), 
                e.hasHeights || (Ja(t, e.view, e.rect), e.hasHeights = !0), (o = es(t, e, r, n)).bogus || (e.cache[l] = o)), 
                {
                    left: o.left,
                    right: o.right,
                    top: i ? o.rtop : o.top,
                    bottom: i ? o.rbottom : o.bottom
                };
            }
            var un, jo = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
            function Ko(t, e, r) {
                for (var n, i, o, l, a, s, c = 0; c < t.length; c += 3) if (a = t[c], 
                s = t[c + 1], e < a ? (i = 0, o = 1, l = "left") : e < s ? o = 1 + (i = e - a) : (c == t.length - 3 || e == s && t[c + 3] > e) && (i = (o = s - a) - 1, 
                e >= s && (l = "right")), i != null) {
                    if (n = t[c + 2], a == s && r == (n.insertLeft ? "left" : "right") && (l = r), 
                    r == "left" && i == 0) for (;c && t[c - 2] == t[c - 3] && t[c - 1].insertLeft; ) n = t[2 + (c -= 3)], 
                    l = "left";
                    if (r == "right" && i == s - a) for (;c < t.length - 3 && t[c + 3] == t[c + 4] && !t[c + 5].insertLeft; ) n = t[(c += 3) + 2], 
                    l = "right";
                    break;
                }
                return {
                    node: n,
                    start: i,
                    end: o,
                    collapse: l,
                    coverStart: a,
                    coverEnd: s
                };
            }
            function ts(t, e) {
                var r = jo;
                if (e == "left") for (var n = 0; n < t.length && (r = t[n]).left == r.right; n++); else for (var i = t.length - 1; i >= 0 && (r = t[i]).left == r.right; i--);
                return r;
            }
            function es(t, e, r, n) {
                var i, o = Ko(e.map, r, n), l = o.node, a = o.start, s = o.end, c = o.collapse;
                if (l.nodeType == 3) {
                    for (var d = 0; d < 4; d++) {
                        for (;a && _n(e.line.text.charAt(o.coverStart + a)); ) --a;
                        for (;o.coverStart + s < o.coverEnd && _n(e.line.text.charAt(o.coverStart + s)); ) ++s;
                        if ((i = Q && Y < 9 && a == 0 && s == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : ts(z(l, a, s).getClientRects(), n)).left || i.right || a == 0) break;
                        s = a, a -= 1, c = "right";
                    }
                    Q && Y < 11 && (i = ns(t.display.measure, i));
                } else {
                    var p;
                    a > 0 && (c = n = "right"), i = t.options.lineWrapping && (p = l.getClientRects()).length > 1 ? p[n == "right" ? p.length - 1 : 0] : l.getBoundingClientRect();
                }
                if (Q && Y < 9 && !a && (!i || !i.left && !i.right)) {
                    var w = l.parentNode.getClientRects()[0];
                    i = w ? {
                        left: w.left,
                        right: w.left + On(t.display),
                        top: w.top,
                        bottom: w.bottom
                    } : jo;
                }
                for (var x = i.top - e.rect.top, T = i.bottom - e.rect.top, H = (x + T) / 2, B = e.view.measure.heights, j = 0; j < B.length - 1 && !(H < B[j]); j++);
                var $ = j ? B[j - 1] : 0, I = B[j], J = {
                    left: (c == "right" ? i.right : i.left) - e.rect.left,
                    right: (c == "left" ? i.left : i.right) - e.rect.left,
                    top: $,
                    bottom: I
                };
                return i.left || i.right || (J.bogus = !0), t.options.singleCursorHeightPerLine || (J.rtop = x, 
                J.rbottom = T), J;
            }
            function ns(t, e) {
                if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !Ie(t)) return e;
                var r = screen.logicalXDPI / screen.deviceXDPI, n = screen.logicalYDPI / screen.deviceYDPI;
                return {
                    left: e.left * r,
                    right: e.right * r,
                    top: e.top * n,
                    bottom: e.bottom * n
                };
            }
            function Go(t) {
                if (t.measure && (t.measure.cache = {}, t.measure.heights = null, 
                t.rest)) for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {};
            }
            function _o(t) {
                t.display.externalMeasure = null, R(t.display.lineMeasure);
                for (var e = 0; e < t.display.view.length; e++) Go(t.display.view[e]);
            }
            function lr(t) {
                _o(t), t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null, 
                t.options.lineWrapping || (t.display.maxLineChanged = !0), t.display.lineNumChars = null;
            }
            function $o(t) {
                return M && C ? -(t.body.getBoundingClientRect().left - parseInt(getComputedStyle(t.body).marginLeft)) : t.defaultView.pageXOffset || (t.documentElement || t.body).scrollLeft;
            }
            function Xo(t) {
                return M && C ? -(t.body.getBoundingClientRect().top - parseInt(getComputedStyle(t.body).marginTop)) : t.defaultView.pageYOffset || (t.documentElement || t.body).scrollTop;
            }
            function Mi(t) {
                var e = Se(t).widgets, r = 0;
                if (e) for (var n = 0; n < e.length; ++n) e[n].above && (r += or(e[n]));
                return r;
            }
            function Kr(t, e, r, n, i) {
                if (!i) {
                    var o = Mi(e);
                    r.top += o, r.bottom += o;
                }
                if (n == "line") return r;
                n || (n = "local");
                var l = je(e);
                if (n == "local" ? l += jr(t.display) : l -= t.display.viewOffset, 
                n == "page" || n == "window") {
                    var a = t.display.lineSpace.getBoundingClientRect();
                    l += a.top + (n == "window" ? 0 : Xo(Mt(t)));
                    var s = a.left + (n == "window" ? 0 : $o(Mt(t)));
                    r.left += s, r.right += s;
                }
                return r.top += l, r.bottom += l, r;
            }
            function Yo(t, e, r) {
                if (r == "div") return e;
                var n = e.left, i = e.top;
                if (r == "page") n -= $o(Mt(t)), i -= Xo(Mt(t)); else if (r == "local" || !r) {
                    var o = t.display.sizer.getBoundingClientRect();
                    n += o.left, i += o.top;
                }
                var l = t.display.lineSpace.getBoundingClientRect();
                return {
                    left: n - l.left,
                    top: i - l.top
                };
            }
            function Gr(t, e, r, n, i) {
                return n || (n = tt(t.doc, e.line)), Kr(t, n, Vo(t, n, e.ch, i), r);
            }
            function Le(t, e, r, n, i, o) {
                function l(T, H) {
                    var B = Be(t, i, T, H ? "right" : "left", o);
                    return H ? B.left = B.right : B.right = B.left, Kr(t, n, B, r);
                }
                n = n || tt(t.doc, e.line), i || (i = An(t, n));
                var a = ve(n, t.doc.direction), s = e.ch, c = e.sticky;
                if (s >= n.text.length ? (s = n.text.length, c = "before") : s <= 0 && (s = 0, 
                c = "after"), !a) return l(c == "before" ? s - 1 : s, c == "before");
                function d(T, H, B) {
                    return l(B ? T - 1 : T, a[H].level == 1 != B);
                }
                var p = me(a, s, c), w = Oe, x = d(s, p, c == "before");
                return w != null && (x.other = d(s, w, c != "before")), x;
            }
            function qo(t, e) {
                var r = 0;
                e = ot(t.doc, e), t.options.lineWrapping || (r = On(t.display) * e.ch);
                var n = tt(t.doc, e.line), i = je(n) + jr(t.display);
                return {
                    left: r,
                    right: r,
                    top: i,
                    bottom: i + n.height
                };
            }
            function Ai(t, e, r, n, i) {
                var o = k(t, e, r);
                return o.xRel = i, n && (o.outside = n), o;
            }
            function Ni(t, e, r) {
                var n = t.doc;
                if ((r += t.display.viewOffset) < 0) return Ai(n.first, 0, null, -1, -1);
                var i = f(n, r), o = n.first + n.size - 1;
                if (i > o) return Ai(n.first + n.size - 1, tt(n, o).text.length, null, 1, 1);
                e < 0 && (e = 0);
                for (var l = tt(n, i); ;) {
                    var a = rs(t, l, i, e, r), s = Da(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
                    if (!s) return a;
                    var c = s.find(1);
                    if (c.line == i) return c;
                    l = tt(n, i = c.line);
                }
            }
            function Zo(t, e, r, n) {
                n -= Mi(e);
                var i = e.text.length, o = Ht(function(l) {
                    return Be(t, r, l - 1).bottom <= n;
                }, i, 0);
                return {
                    begin: o,
                    end: i = Ht(function(l) {
                        return Be(t, r, l).top > n;
                    }, o, i)
                };
            }
            function Jo(t, e, r, n) {
                return r || (r = An(t, e)), Zo(t, e, r, Kr(t, e, Be(t, r, n), "line").top);
            }
            function Oi(t, e, r, n) {
                return !(t.bottom <= r) && (t.top > r || (n ? t.left : t.right) > e);
            }
            function rs(t, e, r, n, i) {
                i -= je(e);
                var o = An(t, e), l = Mi(e), a = 0, s = e.text.length, c = !0, d = ve(e, t.doc.direction);
                if (d) {
                    var p = (t.options.lineWrapping ? os : is)(t, e, r, o, d, n, i);
                    a = (c = p.level != 1) ? p.from : p.to - 1, s = c ? p.to : p.from - 1;
                }
                var w, x, T = null, H = null, B = Ht(function(q) {
                    var et = Be(t, o, q);
                    return et.top += l, et.bottom += l, !!Oi(et, n, i, !1) && (et.top <= i && et.left <= n && (T = q, 
                    H = et), !0);
                }, a, s), j = !1;
                if (H) {
                    var $ = n - H.left < H.right - n, I = $ == c;
                    B = T + (I ? 0 : 1), x = I ? "after" : "before", w = $ ? H.left : H.right;
                } else {
                    c || B != s && B != a || B++, x = B == 0 ? "after" : B == e.text.length ? "before" : Be(t, o, B - (c ? 1 : 0)).bottom + l <= i == c ? "after" : "before";
                    var J = Le(t, k(r, B, x), "line", e, o);
                    w = J.left, j = i < J.top ? -1 : i >= J.bottom ? 1 : 0;
                }
                return Ai(r, B = Ne(e.text, B, 1), x, j, n - w);
            }
            function is(t, e, r, n, i, o, l) {
                var a = Ht(function(p) {
                    var w = i[p], x = w.level != 1;
                    return Oi(Le(t, k(r, x ? w.to : w.from, x ? "before" : "after"), "line", e, n), o, l, !0);
                }, 0, i.length - 1), s = i[a];
                if (a > 0) {
                    var c = s.level != 1, d = Le(t, k(r, c ? s.from : s.to, c ? "after" : "before"), "line", e, n);
                    Oi(d, o, l, !0) && d.top > l && (s = i[a - 1]);
                }
                return s;
            }
            function os(t, e, r, n, i, o, l) {
                var a = Zo(t, e, n, l), s = a.begin, c = a.end;
                /\s/.test(e.text.charAt(c - 1)) && c--;
                for (var d = null, p = null, w = 0; w < i.length; w++) {
                    var x = i[w];
                    if (!(x.from >= c || x.to <= s)) {
                        var T = Be(t, n, x.level != 1 ? Math.min(c, x.to) - 1 : Math.max(s, x.from)).right, H = T < o ? o - T + 1e9 : T - o;
                        (!d || p > H) && (d = x, p = H);
                    }
                }
                return d || (d = i[i.length - 1]), d.from < s && (d = {
                    from: s,
                    to: d.to,
                    level: d.level
                }), d.to > c && (d = {
                    from: d.from,
                    to: c,
                    level: d.level
                }), d;
            }
            function Nn(t) {
                if (t.cachedTextHeight != null) return t.cachedTextHeight;
                if (un == null) {
                    un = U("pre", null, "CodeMirror-line-like");
                    for (var e = 0; e < 49; ++e) un.appendChild(document.createTextNode("x")), 
                    un.appendChild(U("br"));
                    un.appendChild(document.createTextNode("x"));
                }
                v(t.measure, un);
                var r = un.offsetHeight / 50;
                return r > 3 && (t.cachedTextHeight = r), R(t.measure), r || 1;
            }
            function On(t) {
                if (t.cachedCharWidth != null) return t.cachedCharWidth;
                var e = U("span", "xxxxxxxxxx"), r = U("pre", [ e ], "CodeMirror-line-like");
                v(t.measure, r);
                var n = e.getBoundingClientRect(), i = (n.right - n.left) / 10;
                return i > 2 && (t.cachedCharWidth = i), i || 10;
            }
            function Di(t) {
                for (var e = t.display, r = {}, n = {}, i = e.gutters.clientLeft, o = e.gutters.firstChild, l = 0; o; o = o.nextSibling, 
                ++l) {
                    var a = t.display.gutterSpecs[l].className;
                    r[a] = o.offsetLeft + o.clientLeft + i, n[a] = o.clientWidth;
                }
                return {
                    fixedPos: Hi(e),
                    gutterTotalWidth: e.gutters.offsetWidth,
                    gutterLeft: r,
                    gutterWidth: n,
                    wrapperWidth: e.wrapper.clientWidth
                };
            }
            function Hi(t) {
                return t.scroller.getBoundingClientRect().left - t.sizer.getBoundingClientRect().left;
            }
            function Qo(t) {
                var e = Nn(t.display), r = t.options.lineWrapping, n = r && Math.max(5, t.display.scroller.clientWidth / On(t.display) - 3);
                return function(i) {
                    if (Ze(t.doc, i)) return 0;
                    var o = 0;
                    if (i.widgets) for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
                    return r ? o + (Math.ceil(i.text.length / n) || 1) * e : o + e;
                };
            }
            function Wi(t) {
                var e = t.doc, r = Qo(t);
                e.iter(function(n) {
                    var i = r(n);
                    i != n.height && we(n, i);
                });
            }
            function fn(t, e, r, n) {
                var i = t.display;
                if (!r && ie(e).getAttribute("cm-not-content") == "true") return null;
                var o, l, a = i.lineSpace.getBoundingClientRect();
                try {
                    o = e.clientX - a.left, l = e.clientY - a.top;
                } catch {
                    return null;
                }
                var s, c = Ni(t, o, l);
                if (n && c.xRel > 0 && (s = tt(t.doc, c.line).text).length == c.ch) {
                    var d = X(s, s.length, t.options.tabSize) - s.length;
                    c = k(c.line, Math.max(0, Math.round((o - zo(t.display).left) / On(t.display)) - d));
                }
                return c;
            }
            function hn(t, e) {
                if (e >= t.display.viewTo || (e -= t.display.viewFrom) < 0) return null;
                for (var r = t.display.view, n = 0; n < r.length; n++) if ((e -= r[n].size) < 0) return n;
            }
            function le(t, e, r, n) {
                e == null && (e = t.doc.first), r == null && (r = t.doc.first + t.doc.size), 
                n || (n = 0);
                var i = t.display;
                if (n && r < i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers > e) && (i.updateLineNumbers = e), 
                t.curOp.viewChanged = !0, e >= i.viewTo) Ve && wi(t.doc, e) < i.viewTo && Qe(t); else if (r <= i.viewFrom) Ve && Oo(t.doc, r + n) > i.viewFrom ? Qe(t) : (i.viewFrom += n, 
                i.viewTo += n); else if (e <= i.viewFrom && r >= i.viewTo) Qe(t); else if (e <= i.viewFrom) {
                    var o = _r(t, r, r + n, 1);
                    o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : Qe(t);
                } else if (r >= i.viewTo) {
                    var l = _r(t, e, e, -1);
                    l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : Qe(t);
                } else {
                    var a = _r(t, e, e, -1), s = _r(t, r, r + n, 1);
                    a && s ? (i.view = i.view.slice(0, a.index).concat(Vr(t, a.lineN, s.lineN)).concat(i.view.slice(s.index)), 
                    i.viewTo += n) : Qe(t);
                }
                var c = i.externalMeasured;
                c && (r < c.lineN ? c.lineN += n : e < c.lineN + c.size && (i.externalMeasured = null));
            }
            function Je(t, e, r) {
                t.curOp.viewChanged = !0;
                var n = t.display, i = t.display.externalMeasured;
                if (i && e >= i.lineN && e < i.lineN + i.size && (n.externalMeasured = null), 
                !(e < n.viewFrom || e >= n.viewTo)) {
                    var o = n.view[hn(t, e)];
                    if (o.node != null) {
                        var l = o.changes || (o.changes = []);
                        ct(l, r) == -1 && l.push(r);
                    }
                }
            }
            function Qe(t) {
                t.display.viewFrom = t.display.viewTo = t.doc.first, t.display.view = [], 
                t.display.viewOffset = 0;
            }
            function _r(t, e, r, n) {
                var i, o = hn(t, e), l = t.display.view;
                if (!Ve || r == t.doc.first + t.doc.size) return {
                    index: o,
                    lineN: r
                };
                for (var a = t.display.viewFrom, s = 0; s < o; s++) a += l[s].size;
                if (a != e) {
                    if (n > 0) {
                        if (o == l.length - 1) return null;
                        i = a + l[o].size - e, o++;
                    } else i = a - e;
                    e += i, r += i;
                }
                for (;wi(t.doc, r) != r; ) {
                    if (o == (n < 0 ? 0 : l.length - 1)) return null;
                    r += n * l[o - (n < 0 ? 1 : 0)].size, o += n;
                }
                return {
                    index: o,
                    lineN: r
                };
            }
            function ls(t, e, r) {
                var n = t.display;
                n.view.length == 0 || e >= n.viewTo || r <= n.viewFrom ? (n.view = Vr(t, e, r), 
                n.viewFrom = e) : (n.viewFrom > e ? n.view = Vr(t, e, n.viewFrom).concat(n.view) : n.viewFrom < e && (n.view = n.view.slice(hn(t, e))), 
                n.viewFrom = e, n.viewTo < r ? n.view = n.view.concat(Vr(t, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, hn(t, r)))), 
                n.viewTo = r;
            }
            function tl(t) {
                for (var e = t.display.view, r = 0, n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.hidden || i.node && !i.changes || ++r;
                }
                return r;
            }
            function ar(t) {
                t.display.input.showSelection(t.display.input.prepareSelection());
            }
            function el(t, e) {
                e === void 0 && (e = !0);
                var r = t.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = t.options.$customCursor;
                l && (e = !0);
                for (var a = 0; a < r.sel.ranges.length; a++) if (e || a != r.sel.primIndex) {
                    var s = r.sel.ranges[a];
                    if (!(s.from().line >= t.display.viewTo || s.to().line < t.display.viewFrom)) {
                        var c = s.empty();
                        if (l) {
                            var d = l(t, s);
                            d && Fi(t, d, i);
                        } else (c || t.options.showCursorWhenSelecting) && Fi(t, s.head, i);
                        c || as(t, s, o);
                    }
                }
                return n;
            }
            function Fi(t, e, r) {
                var n = Le(t, e, "div", null, null, !t.options.singleCursorHeightPerLine), i = r.appendChild(U("div", " ", "CodeMirror-cursor"));
                if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * t.options.cursorHeight + "px", 
                /\bcm-fat-cursor\b/.test(t.getWrapperElement().className)) {
                    var o = Gr(t, e, "div", null, null), l = o.right - o.left;
                    i.style.width = (l > 0 ? l : t.defaultCharWidth()) + "px";
                }
                if (n.other) {
                    var a = r.appendChild(U("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    a.style.display = "", a.style.left = n.other.left + "px", a.style.top = n.other.top + "px", 
                    a.style.height = .85 * (n.other.bottom - n.other.top) + "px";
                }
            }
            function $r(t, e) {
                return t.top - e.top || t.left - e.left;
            }
            function as(t, e, r) {
                var n = t.display, i = t.doc, o = document.createDocumentFragment(), l = zo(t.display), a = l.left, s = Math.max(n.sizerWidth, cn(t) - n.sizer.offsetLeft) - l.right, c = i.direction == "ltr";
                function d(I, J, q, et) {
                    J < 0 && (J = 0), J = Math.round(J), et = Math.round(et), o.appendChild(U("div", null, "CodeMirror-selected", "position: absolute; left: " + I + `px;
                             top: ` + J + "px; width: " + (q ?? s - I) + `px;
                             height: ` + (et - J) + "px"));
                }
                function p(I, J, q) {
                    var et, Ct, kt = tt(i, I), fe = kt.text.length;
                    function Tt(Ft, se) {
                        return Gr(t, k(I, Ft), "div", kt, se);
                    }
                    function xe(Ft, se, ne) {
                        var It = Jo(t, kt, null, Ft), Et = se == "ltr" == (ne == "after") ? "left" : "right";
                        return Tt(ne == "after" ? It.begin : It.end - (/\s/.test(kt.text.charAt(It.end - 1)) ? 2 : 1), Et)[Et];
                    }
                    var he = ve(kt, i.direction);
                    return an(he, J || 0, q ?? fe, function(Ft, se, ne, It) {
                        var Et = ne == "ltr", zt = Tt(Ft, Et ? "left" : "right"), ce = Tt(se - 1, Et ? "right" : "left"), ln = J == null && Ft == 0, Ae = q == null && se == fe, Jt = It == 0, Ut = !he || It == he.length - 1;
                        if (ce.top - zt.top <= 3) {
                            var lo = (c ? Ae : ln) && Ut, $e = (c ? ln : Ae) && Jt ? a : (Et ? zt : ce).left, vn = lo ? s : (Et ? ce : zt).right;
                            d($e, zt.top, vn - $e, zt.bottom);
                        } else {
                            var yn, re, jn, ao;
                            Et ? (yn = c && ln && Jt ? a : zt.left, re = c ? s : xe(Ft, ne, "before"), 
                            jn = c ? a : xe(se, ne, "after"), ao = c && Ae && Ut ? s : ce.right) : (yn = c ? xe(Ft, ne, "before") : a, 
                            re = !c && ln && Jt ? s : zt.right, jn = !c && Ae && Ut ? a : ce.left, 
                            ao = c ? xe(se, ne, "after") : s), d(yn, zt.top, re - yn, zt.bottom), 
                            zt.bottom < ce.top && d(a, zt.bottom, null, ce.top), 
                            d(jn, ce.top, ao - jn, ce.bottom);
                        }
                        (!et || $r(zt, et) < 0) && (et = zt), $r(ce, et) < 0 && (et = ce), 
                        (!Ct || $r(zt, Ct) < 0) && (Ct = zt), $r(ce, Ct) < 0 && (Ct = ce);
                    }), {
                        start: et,
                        end: Ct
                    };
                }
                var w = e.from(), x = e.to();
                if (w.line == x.line) p(w.line, w.ch, x.ch); else {
                    var T = tt(i, w.line), H = tt(i, x.line), B = Se(T) == Se(H), j = p(w.line, w.ch, B ? T.text.length + 1 : null).end, $ = p(x.line, B ? 0 : null, x.ch).start;
                    B && (j.top < $.top - 2 ? (d(j.right, j.top, null, j.bottom), 
                    d(a, $.top, $.left, $.bottom)) : d(j.right, j.top, $.left - j.right, j.bottom)), 
                    j.bottom < $.top && d(a, j.bottom, null, $.top);
                }
                r.appendChild(o);
            }
            function Pi(t) {
                if (t.state.focused) {
                    var e = t.display;
                    clearInterval(e.blinker);
                    var r = !0;
                    e.cursorDiv.style.visibility = "", t.options.cursorBlinkRate > 0 ? e.blinker = setInterval(function() {
                        t.hasFocus() || Dn(t), e.cursorDiv.style.visibility = (r = !r) ? "" : "hidden";
                    }, t.options.cursorBlinkRate) : t.options.cursorBlinkRate < 0 && (e.cursorDiv.style.visibility = "hidden");
                }
            }
            function nl(t) {
                t.hasFocus() || (t.display.input.focus(), t.state.focused || Bi(t));
            }
            function Ei(t) {
                t.state.delayingBlurEvent = !0, setTimeout(function() {
                    t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1, 
                    t.state.focused && Dn(t));
                }, 100);
            }
            function Bi(t, e) {
                t.state.delayingBlurEvent && !t.state.draggingText && (t.state.delayingBlurEvent = !1), 
                t.options.readOnly != "nocursor" && (t.state.focused || (Lt(t, "focus", t, e), 
                t.state.focused = !0, Bt(t.display.wrapper, "CodeMirror-focused"), 
                t.curOp || t.display.selForContextMenu == t.doc.sel || (t.display.input.reset(), 
                K && setTimeout(function() {
                    return t.display.input.reset(!0);
                }, 20)), t.display.input.receivedFocus()), Pi(t));
            }
            function Dn(t, e) {
                t.state.delayingBlurEvent || (t.state.focused && (Lt(t, "blur", t, e), 
                t.state.focused = !1, L(t.display.wrapper, "CodeMirror-focused")), 
                clearInterval(t.display.blinker), setTimeout(function() {
                    t.state.focused || (t.display.shift = !1);
                }, 150));
            }
            function Xr(t) {
                for (var e = t.display, r = e.lineDiv.offsetTop, n = Math.max(0, e.scroller.getBoundingClientRect().top), i = e.lineDiv.getBoundingClientRect().top, o = 0, l = 0; l < e.view.length; l++) {
                    var a = e.view[l], s = t.options.lineWrapping, c = void 0, d = 0;
                    if (!a.hidden) {
                        if (i += a.line.height, Q && Y < 8) {
                            var p = a.node.offsetTop + a.node.offsetHeight;
                            c = p - r, r = p;
                        } else {
                            var w = a.node.getBoundingClientRect();
                            c = w.bottom - w.top, !s && a.text.firstChild && (d = a.text.firstChild.getBoundingClientRect().right - w.left - 1);
                        }
                        var x = a.line.height - c;
                        if ((x > .005 || x < -.005) && (i < n && (o -= x), we(a.line, c), 
                        rl(a.line), a.rest)) for (var T = 0; T < a.rest.length; T++) rl(a.rest[T]);
                        if (d > t.display.sizerWidth) {
                            var H = Math.ceil(d / On(t.display));
                            H > t.display.maxLineLength && (t.display.maxLineLength = H, 
                            t.display.maxLine = a.line, t.display.maxLineChanged = !0);
                        }
                    }
                }
                Math.abs(o) > 2 && (e.scroller.scrollTop += o);
            }
            function rl(t) {
                if (t.widgets) for (var e = 0; e < t.widgets.length; ++e) {
                    var r = t.widgets[e], n = r.node.parentNode;
                    n && (r.height = n.offsetHeight);
                }
            }
            function Yr(t, e, r) {
                var n = r && r.top != null ? Math.max(0, r.top) : t.scroller.scrollTop;
                n = Math.floor(n - jr(t));
                var i = r && r.bottom != null ? r.bottom : n + t.wrapper.clientHeight, o = f(e, n), l = f(e, i);
                if (r && r.ensure) {
                    var a = r.ensure.from.line, s = r.ensure.to.line;
                    a < o ? (o = a, l = f(e, je(tt(e, a)) + t.wrapper.clientHeight)) : Math.min(s, e.lastLine()) >= l && (o = f(e, je(tt(e, s)) - t.wrapper.clientHeight), 
                    l = s);
                }
                return {
                    from: o,
                    to: Math.max(l, o + 1)
                };
            }
            function ss(t, e) {
                if (!Wt(t, "scrollCursorIntoView")) {
                    var r = t.display, n = r.sizer.getBoundingClientRect(), i = null, o = r.wrapper.ownerDocument;
                    if (e.top + n.top < 0 ? i = !0 : e.bottom + n.top > (o.defaultView.innerHeight || o.documentElement.clientHeight) && (i = !1), 
                    i != null && !D) {
                        var l = U("div", "​", null, `position: absolute;
                         top: ` + (e.top - r.viewOffset - jr(t.display)) + `px;
                         height: ` + (e.bottom - e.top + Ee(t) + r.barHeight) + `px;
                         left: ` + e.left + "px; width: " + Math.max(2, e.right - e.left) + "px;");
                        t.display.lineSpace.appendChild(l), l.scrollIntoView(i), 
                        t.display.lineSpace.removeChild(l);
                    }
                }
            }
            function cs(t, e, r, n) {
                var i;
                n == null && (n = 0), t.options.lineWrapping || e != r || (r = e.sticky == "before" ? k(e.line, e.ch + 1, "before") : e, 
                e = e.ch ? k(e.line, e.sticky == "before" ? e.ch - 1 : e.ch, "after") : e);
                for (var o = 0; o < 5; o++) {
                    var l = !1, a = Le(t, e), s = r && r != e ? Le(t, r) : a, c = Ri(t, i = {
                        left: Math.min(a.left, s.left),
                        top: Math.min(a.top, s.top) - n,
                        right: Math.max(a.left, s.left),
                        bottom: Math.max(a.bottom, s.bottom) + n
                    }), d = t.doc.scrollTop, p = t.doc.scrollLeft;
                    if (c.scrollTop != null && (cr(t, c.scrollTop), Math.abs(t.doc.scrollTop - d) > 1 && (l = !0)), 
                    c.scrollLeft != null && (dn(t, c.scrollLeft), Math.abs(t.doc.scrollLeft - p) > 1 && (l = !0)), 
                    !l) break;
                }
                return i;
            }
            function us(t, e) {
                var r = Ri(t, e);
                r.scrollTop != null && cr(t, r.scrollTop), r.scrollLeft != null && dn(t, r.scrollLeft);
            }
            function Ri(t, e) {
                var r = t.display, n = Nn(t.display);
                e.top < 0 && (e.top = 0);
                var i = t.curOp && t.curOp.scrollTop != null ? t.curOp.scrollTop : r.scroller.scrollTop, o = Li(t), l = {};
                e.bottom - e.top > o && (e.bottom = e.top + o);
                var a = t.doc.height + Si(r), s = e.top < n, c = e.bottom > a - n;
                if (e.top < i) l.scrollTop = s ? 0 : e.top; else if (e.bottom > i + o) {
                    var d = Math.min(e.top, (c ? a : e.bottom) - o);
                    d != i && (l.scrollTop = d);
                }
                var p = t.options.fixedGutter ? 0 : r.gutters.offsetWidth, w = t.curOp && t.curOp.scrollLeft != null ? t.curOp.scrollLeft : r.scroller.scrollLeft - p, x = cn(t) - r.gutters.offsetWidth, T = e.right - e.left > x;
                return T && (e.right = e.left + x), e.left < 10 ? l.scrollLeft = 0 : e.left < w ? l.scrollLeft = Math.max(0, e.left + p - (T ? 0 : 10)) : e.right > x + w - 3 && (l.scrollLeft = e.right + (T ? 0 : 10) - x), 
                l;
            }
            function Ii(t, e) {
                e != null && (qr(t), t.curOp.scrollTop = (t.curOp.scrollTop == null ? t.doc.scrollTop : t.curOp.scrollTop) + e);
            }
            function Hn(t) {
                qr(t);
                var e = t.getCursor();
                t.curOp.scrollToPos = {
                    from: e,
                    to: e,
                    margin: t.options.cursorScrollMargin
                };
            }
            function sr(t, e, r) {
                e == null && r == null || qr(t), e != null && (t.curOp.scrollLeft = e), 
                r != null && (t.curOp.scrollTop = r);
            }
            function fs(t, e) {
                qr(t), t.curOp.scrollToPos = e;
            }
            function qr(t) {
                var e = t.curOp.scrollToPos;
                e && (t.curOp.scrollToPos = null, il(t, qo(t, e.from), qo(t, e.to), e.margin));
            }
            function il(t, e, r, n) {
                var i = Ri(t, {
                    left: Math.min(e.left, r.left),
                    top: Math.min(e.top, r.top) - n,
                    right: Math.max(e.right, r.right),
                    bottom: Math.max(e.bottom, r.bottom) + n
                });
                sr(t, i.scrollLeft, i.scrollTop);
            }
            function cr(t, e) {
                Math.abs(t.doc.scrollTop - e) < 2 || (E || Ui(t, {
                    top: e
                }), ol(t, e, !0), E && Ui(t), hr(t, 100));
            }
            function ol(t, e, r) {
                e = Math.max(0, Math.min(t.display.scroller.scrollHeight - t.display.scroller.clientHeight, e)), 
                (t.display.scroller.scrollTop != e || r) && (t.doc.scrollTop = e, 
                t.display.scrollbars.setScrollTop(e), t.display.scroller.scrollTop != e && (t.display.scroller.scrollTop = e));
            }
            function dn(t, e, r, n) {
                e = Math.max(0, Math.min(e, t.display.scroller.scrollWidth - t.display.scroller.clientWidth)), 
                (r ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) && !n || (t.doc.scrollLeft = e, 
                ul(t), t.display.scroller.scrollLeft != e && (t.display.scroller.scrollLeft = e), 
                t.display.scrollbars.setScrollLeft(e));
            }
            function ur(t) {
                var e = t.display, r = e.gutters.offsetWidth, n = Math.round(t.doc.height + Si(t.display));
                return {
                    clientHeight: e.scroller.clientHeight,
                    viewHeight: e.wrapper.clientHeight,
                    scrollWidth: e.scroller.scrollWidth,
                    clientWidth: e.scroller.clientWidth,
                    viewWidth: e.wrapper.clientWidth,
                    barLeft: t.options.fixedGutter ? r : 0,
                    docHeight: n,
                    scrollHeight: n + Ee(t) + e.barHeight,
                    nativeBarWidth: e.nativeBarWidth,
                    gutterWidth: r
                };
            }
            var pn = function(t, e, r) {
                this.cm = r;
                var n = this.vert = U("div", [ U("div", null, null, "min-width: 1px") ], "CodeMirror-vscrollbar"), i = this.horiz = U("div", [ U("div", null, null, "height: 100%; min-height: 1px") ], "CodeMirror-hscrollbar");
                n.tabIndex = i.tabIndex = -1, t(n), t(i), V(n, "scroll", function() {
                    n.clientHeight && e(n.scrollTop, "vertical");
                }), V(i, "scroll", function() {
                    i.clientWidth && e(i.scrollLeft, "horizontal");
                }), this.checkedZeroWidth = !1, Q && Y < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
            };
            pn.prototype.update = function(t) {
                var e = t.scrollWidth > t.clientWidth + 1, r = t.scrollHeight > t.clientHeight + 1, n = t.nativeBarWidth;
                if (r) {
                    this.vert.style.display = "block", this.vert.style.bottom = e ? n + "px" : "0";
                    var i = t.viewHeight - (e ? n : 0);
                    this.vert.firstChild.style.height = Math.max(0, t.scrollHeight - t.clientHeight + i) + "px";
                } else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                if (e) {
                    this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", 
                    this.horiz.style.left = t.barLeft + "px";
                    var o = t.viewWidth - t.barLeft - (r ? n : 0);
                    this.horiz.firstChild.style.width = Math.max(0, t.scrollWidth - t.clientWidth + o) + "px";
                } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && t.clientHeight > 0 && (n == 0 && this.zeroWidthHack(), 
                this.checkedZeroWidth = !0), {
                    right: r ? n : 0,
                    bottom: e ? n : 0
                };
            }, pn.prototype.setScrollLeft = function(t) {
                this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
            }, pn.prototype.setScrollTop = function(t) {
                this.vert.scrollTop != t && (this.vert.scrollTop = t), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
            }, pn.prototype.zeroWidthHack = function() {
                var t = h && !dt ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = t, this.horiz.style.visibility = this.vert.style.visibility = "hidden", 
                this.disableHoriz = new lt(), this.disableVert = new lt();
            }, pn.prototype.enableZeroWidthBar = function(t, e, r) {
                function n() {
                    var i = t.getBoundingClientRect();
                    (r == "vert" ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != t ? t.style.visibility = "hidden" : e.set(1e3, n);
                }
                t.style.visibility = "", e.set(1e3, n);
            }, pn.prototype.clear = function() {
                var t = this.horiz.parentNode;
                t.removeChild(this.horiz), t.removeChild(this.vert);
            };
            var fr = function() {};
            function Wn(t, e) {
                e || (e = ur(t));
                var r = t.display.barWidth, n = t.display.barHeight;
                ll(t, e);
                for (var i = 0; i < 4 && r != t.display.barWidth || n != t.display.barHeight; i++) r != t.display.barWidth && t.options.lineWrapping && Xr(t), 
                ll(t, ur(t)), r = t.display.barWidth, n = t.display.barHeight;
            }
            function ll(t, e) {
                var r = t.display, n = r.scrollbars.update(e);
                r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", 
                r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", 
                n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", 
                r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", 
                n.bottom && t.options.coverGutterNextToScrollbar && t.options.fixedGutter ? (r.gutterFiller.style.display = "block", 
                r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = e.gutterWidth + "px") : r.gutterFiller.style.display = "";
            }
            fr.prototype.update = function() {
                return {
                    bottom: 0,
                    right: 0
                };
            }, fr.prototype.setScrollLeft = function() {}, fr.prototype.setScrollTop = function() {}, 
            fr.prototype.clear = function() {};
            var al = {
                native: pn,
                null: fr
            };
            function sl(t) {
                t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && L(t.display.wrapper, t.display.scrollbars.addClass)), 
                t.display.scrollbars = new al[t.options.scrollbarStyle](function(e) {
                    t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), 
                    V(e, "mousedown", function() {
                        t.state.focused && setTimeout(function() {
                            return t.display.input.focus();
                        }, 0);
                    }), e.setAttribute("cm-not-content", "true");
                }, function(e, r) {
                    r == "horizontal" ? dn(t, e) : cr(t, e);
                }, t), t.display.scrollbars.addClass && Bt(t.display.wrapper, t.display.scrollbars.addClass);
            }
            var hs = 0;
            function gn(t) {
                t.curOp = {
                    cm: t,
                    viewChanged: !1,
                    startHeight: t.doc.height,
                    forceUpdate: !1,
                    updateInput: 0,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++hs,
                    markArrays: null
                }, ja(t.curOp);
            }
            function mn(t) {
                var e = t.curOp;
                e && Ga(e, function(r) {
                    for (var n = 0; n < r.ops.length; n++) r.ops[n].cm.curOp = null;
                    ds(r);
                });
            }
            function ds(t) {
                for (var e = t.ops, r = 0; r < e.length; r++) ps(e[r]);
                for (var n = 0; n < e.length; n++) gs(e[n]);
                for (var i = 0; i < e.length; i++) ms(e[i]);
                for (var o = 0; o < e.length; o++) vs(e[o]);
                for (var l = 0; l < e.length; l++) ys(e[l]);
            }
            function ps(t) {
                var e = t.cm, r = e.display;
                ws(e), t.updateMaxLine && Ci(e), t.mustUpdate = t.viewChanged || t.forceUpdate || t.scrollTop != null || t.scrollToPos && (t.scrollToPos.from.line < r.viewFrom || t.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && e.options.lineWrapping, 
                t.update = t.mustUpdate && new Zr(e, t.mustUpdate && {
                    top: t.scrollTop,
                    ensure: t.scrollToPos
                }, t.forceUpdate);
            }
            function gs(t) {
                t.updatedDisplay = t.mustUpdate && zi(t.cm, t.update);
            }
            function ms(t) {
                var e = t.cm, r = e.display;
                t.updatedDisplay && Xr(e), t.barMeasure = ur(e), r.maxLineChanged && !e.options.lineWrapping && (t.adjustWidthTo = Vo(e, r.maxLine, r.maxLine.text.length).left + 3, 
                e.display.sizerWidth = t.adjustWidthTo, t.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + t.adjustWidthTo + Ee(e) + e.display.barWidth), 
                t.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + t.adjustWidthTo - cn(e))), 
                (t.updatedDisplay || t.selectionChanged) && (t.preparedSelection = r.input.prepareSelection());
            }
            function vs(t) {
                var e = t.cm;
                t.adjustWidthTo != null && (e.display.sizer.style.minWidth = t.adjustWidthTo + "px", 
                t.maxScrollLeft < e.doc.scrollLeft && dn(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0), 
                e.display.maxLineChanged = !1);
                var r = t.focus && t.focus == mt(Mt(e));
                t.preparedSelection && e.display.input.showSelection(t.preparedSelection, r), 
                (t.updatedDisplay || t.startHeight != e.doc.height) && Wn(e, t.barMeasure), 
                t.updatedDisplay && ji(e, t.barMeasure), t.selectionChanged && Pi(e), 
                e.state.focused && t.updateInput && e.display.input.reset(t.typing), 
                r && nl(t.cm);
            }
            function ys(t) {
                var e = t.cm, r = e.display, n = e.doc;
                t.updatedDisplay && cl(e, t.update), r.wheelStartX == null || t.scrollTop == null && t.scrollLeft == null && !t.scrollToPos || (r.wheelStartX = r.wheelStartY = null), 
                t.scrollTop != null && ol(e, t.scrollTop, t.forceScroll), t.scrollLeft != null && dn(e, t.scrollLeft, !0, !0), 
                t.scrollToPos && ss(e, cs(e, ot(n, t.scrollToPos.from), ot(n, t.scrollToPos.to), t.scrollToPos.margin));
                var i = t.maybeHiddenMarkers, o = t.maybeUnhiddenMarkers;
                if (i) for (var l = 0; l < i.length; ++l) i[l].lines.length || Lt(i[l], "hide");
                if (o) for (var a = 0; a < o.length; ++a) o[a].lines.length && Lt(o[a], "unhide");
                r.wrapper.offsetHeight && (n.scrollTop = e.display.scroller.scrollTop), 
                t.changeObjs && Lt(e, "changes", e, t.changeObjs), t.update && t.update.finish();
            }
            function ue(t, e) {
                if (t.curOp) return e();
                gn(t);
                try {
                    return e();
                } finally {
                    mn(t);
                }
            }
            function Gt(t, e) {
                return function() {
                    if (t.curOp) return e.apply(t, arguments);
                    gn(t);
                    try {
                        return e.apply(t, arguments);
                    } finally {
                        mn(t);
                    }
                };
            }
            function ee(t) {
                return function() {
                    if (this.curOp) return t.apply(this, arguments);
                    gn(this);
                    try {
                        return t.apply(this, arguments);
                    } finally {
                        mn(this);
                    }
                };
            }
            function _t(t) {
                return function() {
                    var e = this.cm;
                    if (!e || e.curOp) return t.apply(this, arguments);
                    gn(e);
                    try {
                        return t.apply(this, arguments);
                    } finally {
                        mn(e);
                    }
                };
            }
            function hr(t, e) {
                t.doc.highlightFrontier < t.display.viewTo && t.state.highlight.set(e, jt(bs, t));
            }
            function bs(t) {
                var e = t.doc;
                if (!(e.highlightFrontier >= t.display.viewTo)) {
                    var r = +new Date() + t.options.workTime, n = er(t, e.highlightFrontier), i = [];
                    e.iter(n.line, Math.min(e.first + e.size, t.display.viewTo + 500), function(o) {
                        if (n.line >= t.display.viewFrom) {
                            var l = o.styles, a = o.text.length > t.options.maxHighlightLength ? be(e.mode, n.state) : null, s = mo(t, o, n, !0);
                            a && (n.state = a), o.styles = s.styles;
                            var c = o.styleClasses, d = s.classes;
                            d ? o.styleClasses = d : c && (o.styleClasses = null);
                            for (var p = !l || l.length != o.styles.length || c != d && (!c || !d || c.bgClass != d.bgClass || c.textClass != d.textClass), w = 0; !p && w < l.length; ++w) p = l[w] != o.styles[w];
                            p && i.push(n.line), o.stateAfter = n.save(), n.nextLine();
                        } else o.text.length <= t.options.maxHighlightLength && mi(t, o.text, n), 
                        o.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine();
                        if (+new Date() > r) return hr(t, t.options.workDelay), 
                        !0;
                    }), e.highlightFrontier = n.line, e.modeFrontier = Math.max(e.modeFrontier, n.line), 
                    i.length && ue(t, function() {
                        for (var o = 0; o < i.length; o++) Je(t, i[o], "text");
                    });
                }
            }
            var Zr = function(t, e, r) {
                var n = t.display;
                this.viewport = e, this.visible = Yr(n, t.doc, e), this.editorIsHidden = !n.wrapper.offsetWidth, 
                this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, 
                this.oldDisplayWidth = cn(t), this.force = r, this.dims = Di(t), 
                this.events = [];
            };
            function ws(t) {
                var e = t.display;
                !e.scrollbarsClipped && e.scroller.offsetWidth && (e.nativeBarWidth = e.scroller.offsetWidth - e.scroller.clientWidth, 
                e.heightForcer.style.height = Ee(t) + "px", e.sizer.style.marginBottom = -e.nativeBarWidth + "px", 
                e.sizer.style.borderRightWidth = Ee(t) + "px", e.scrollbarsClipped = !0);
            }
            function xs(t) {
                if (t.hasFocus()) return null;
                var e = mt(Mt(t));
                if (!e || !St(t.display.lineDiv, e)) return null;
                var r = {
                    activeElt: e
                };
                if (window.getSelection) {
                    var n = Xt(t).getSelection();
                    n.anchorNode && n.extend && St(t.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, 
                    r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, 
                    r.focusOffset = n.focusOffset);
                }
                return r;
            }
            function Cs(t) {
                if (t && t.activeElt && t.activeElt != mt(t.activeElt.ownerDocument) && (t.activeElt.focus(), 
                !/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) && t.anchorNode && St(document.body, t.anchorNode) && St(document.body, t.focusNode))) {
                    var e = t.activeElt.ownerDocument, r = e.defaultView.getSelection(), n = e.createRange();
                    n.setEnd(t.anchorNode, t.anchorOffset), n.collapse(!1), r.removeAllRanges(), 
                    r.addRange(n), r.extend(t.focusNode, t.focusOffset);
                }
            }
            function zi(t, e) {
                var r = t.display, n = t.doc;
                if (e.editorIsHidden) return Qe(t), !1;
                if (!e.force && e.visible.from >= r.viewFrom && e.visible.to <= r.viewTo && (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && tl(t) == 0) return !1;
                fl(t) && (Qe(t), e.dims = Di(t));
                var i = n.first + n.size, o = Math.max(e.visible.from - t.options.viewportMargin, n.first), l = Math.min(i, e.visible.to + t.options.viewportMargin);
                r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), 
                r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), 
                Ve && (o = wi(t.doc, o), l = Oo(t.doc, l));
                var a = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != e.wrapperHeight || r.lastWrapWidth != e.wrapperWidth;
                ls(t, o, l), r.viewOffset = je(tt(t.doc, r.viewFrom)), t.display.mover.style.top = r.viewOffset + "px";
                var s = tl(t);
                if (!a && s == 0 && !e.force && r.renderedView == r.view && (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo)) return !1;
                var c = xs(t);
                return s > 4 && (r.lineDiv.style.display = "none"), ks(t, r.updateLineNumbers, e.dims), 
                s > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, 
                Cs(c), R(r.cursorDiv), R(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, 
                a && (r.lastWrapHeight = e.wrapperHeight, r.lastWrapWidth = e.wrapperWidth, 
                hr(t, 400)), r.updateLineNumbers = null, !0;
            }
            function cl(t, e) {
                for (var r = e.viewport, n = !0; ;n = !1) {
                    if (n && t.options.lineWrapping && e.oldDisplayWidth != cn(t)) n && (e.visible = Yr(t.display, t.doc, r)); else if (r && r.top != null && (r = {
                        top: Math.min(t.doc.height + Si(t.display) - Li(t), r.top)
                    }), e.visible = Yr(t.display, t.doc, r), e.visible.from >= t.display.viewFrom && e.visible.to <= t.display.viewTo) break;
                    if (!zi(t, e)) break;
                    Xr(t);
                    var i = ur(t);
                    ar(t), Wn(t, i), ji(t, i), e.force = !1;
                }
                e.signal(t, "update", t), t.display.viewFrom == t.display.reportedViewFrom && t.display.viewTo == t.display.reportedViewTo || (e.signal(t, "viewportChange", t, t.display.viewFrom, t.display.viewTo), 
                t.display.reportedViewFrom = t.display.viewFrom, t.display.reportedViewTo = t.display.viewTo);
            }
            function Ui(t, e) {
                var r = new Zr(t, e);
                if (zi(t, r)) {
                    Xr(t), cl(t, r);
                    var n = ur(t);
                    ar(t), Wn(t, n), ji(t, n), r.finish();
                }
            }
            function ks(t, e, r) {
                var n = t.display, i = t.options.lineNumbers, o = n.lineDiv, l = o.firstChild;
                function a(T) {
                    var H = T.nextSibling;
                    return K && h && t.display.currentWheelTarget == T ? T.style.display = "none" : T.parentNode.removeChild(T), 
                    H;
                }
                for (var s = n.view, c = n.viewFrom, d = 0; d < s.length; d++) {
                    var p = s[d];
                    if (!p.hidden) if (p.node && p.node.parentNode == o) {
                        for (;l != p.node; ) l = a(l);
                        var w = i && e != null && e <= c && p.lineNumber;
                        p.changes && (ct(p.changes, "gutter") > -1 && (w = !1), 
                        Po(t, p, c, r)), w && (R(p.lineNumber), p.lineNumber.appendChild(document.createTextNode(A(t.options, c)))), 
                        l = p.node.nextSibling;
                    } else {
                        var x = qa(t, p, c, r);
                        o.insertBefore(x, l);
                    }
                    c += p.size;
                }
                for (;l; ) l = a(l);
            }
            function Vi(t) {
                var e = t.gutters.offsetWidth;
                t.sizer.style.marginLeft = e + "px", Kt(t, "gutterChanged", t);
            }
            function ji(t, e) {
                t.display.sizer.style.minHeight = e.docHeight + "px", t.display.heightForcer.style.top = e.docHeight + "px", 
                t.display.gutters.style.height = e.docHeight + t.display.barHeight + Ee(t) + "px";
            }
            function ul(t) {
                var e = t.display, r = e.view;
                if (e.alignWidgets || e.gutters.firstChild && t.options.fixedGutter) {
                    for (var n = Hi(e) - e.scroller.scrollLeft + t.doc.scrollLeft, i = e.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++) if (!r[l].hidden) {
                        t.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o), 
                        r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                        var a = r[l].alignable;
                        if (a) for (var s = 0; s < a.length; s++) a[s].style.left = o;
                    }
                    t.options.fixedGutter && (e.gutters.style.left = n + i + "px");
                }
            }
            function fl(t) {
                if (!t.options.lineNumbers) return !1;
                var e = t.doc, r = A(t.options, e.first + e.size - 1), n = t.display;
                if (r.length != n.lineNumChars) {
                    var i = n.measure.appendChild(U("div", [ U("div", r) ], "CodeMirror-linenumber CodeMirror-gutter-elt")), o = i.firstChild.offsetWidth, l = i.offsetWidth - o;
                    return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1, 
                    n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, 
                    n.lineGutter.style.width = n.lineNumWidth + "px", Vi(t.display), 
                    !0;
                }
                return !1;
            }
            function Ki(t, e) {
                for (var r = [], n = !1, i = 0; i < t.length; i++) {
                    var o = t[i], l = null;
                    if (typeof o != "string" && (l = o.style, o = o.className), 
                    o == "CodeMirror-linenumbers") {
                        if (!e) continue;
                        n = !0;
                    }
                    r.push({
                        className: o,
                        style: l
                    });
                }
                return e && !n && r.push({
                    className: "CodeMirror-linenumbers",
                    style: null
                }), r;
            }
            function hl(t) {
                var e = t.gutters, r = t.gutterSpecs;
                R(e), t.lineGutter = null;
                for (var n = 0; n < r.length; ++n) {
                    var i = r[n], o = i.className, l = i.style, a = e.appendChild(U("div", null, "CodeMirror-gutter " + o));
                    l && (a.style.cssText = l), o == "CodeMirror-linenumbers" && (t.lineGutter = a, 
                    a.style.width = (t.lineNumWidth || 1) + "px");
                }
                e.style.display = r.length ? "" : "none", Vi(t);
            }
            function dr(t) {
                hl(t.display), le(t), ul(t);
            }
            function Ss(t, e, r, n) {
                var i = this;
                this.input = r, i.scrollbarFiller = U("div", null, "CodeMirror-scrollbar-filler"), 
                i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = U("div", null, "CodeMirror-gutter-filler"), 
                i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = wt("div", null, "CodeMirror-code"), 
                i.selectionDiv = U("div", null, null, "position: relative; z-index: 1"), 
                i.cursorDiv = U("div", null, "CodeMirror-cursors"), i.measure = U("div", null, "CodeMirror-measure"), 
                i.lineMeasure = U("div", null, "CodeMirror-measure"), i.lineSpace = wt("div", [ i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv ], null, "position: relative; outline: none");
                var o = wt("div", [ i.lineSpace ], "CodeMirror-lines");
                i.mover = U("div", [ o ], null, "position: relative"), i.sizer = U("div", [ i.mover ], "CodeMirror-sizer"), 
                i.sizerWidth = null, i.heightForcer = U("div", null, null, "position: absolute; height: " + Ye + "px; width: 1px;"), 
                i.gutters = U("div", null, "CodeMirror-gutters"), i.lineGutter = null, 
                i.scroller = U("div", [ i.sizer, i.heightForcer, i.gutters ], "CodeMirror-scroll"), 
                i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = U("div", [ i.scrollbarFiller, i.gutterFiller, i.scroller ], "CodeMirror"), 
                M && it >= 105 && (i.wrapper.style.clipPath = "inset(0px)"), i.wrapper.setAttribute("translate", "no"), 
                Q && Y < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), 
                K || E && u || (i.scroller.draggable = !0), t && (t.appendChild ? t.appendChild(i.wrapper) : t(i.wrapper)), 
                i.viewFrom = i.viewTo = e.first, i.reportedViewFrom = i.reportedViewTo = e.first, 
                i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, 
                i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, 
                i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, 
                i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, 
                i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, 
                i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, 
                i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, 
                i.gutterSpecs = Ki(n.gutters, n.lineNumbers), hl(i), r.init(i);
            }
            Zr.prototype.signal = function(t, e) {
                Qt(t, e) && this.events.push(arguments);
            }, Zr.prototype.finish = function() {
                for (var t = 0; t < this.events.length; t++) Lt.apply(null, this.events[t]);
            };
            var Jr = 0, Ge = null;
            function dl(t) {
                var e = t.wheelDeltaX, r = t.wheelDeltaY;
                return e == null && t.detail && t.axis == t.HORIZONTAL_AXIS && (e = t.detail), 
                r == null && t.detail && t.axis == t.VERTICAL_AXIS ? r = t.detail : r == null && (r = t.wheelDelta), 
                {
                    x: e,
                    y: r
                };
            }
            function Ls(t) {
                var e = dl(t);
                return e.x *= Ge, e.y *= Ge, e;
            }
            function pl(t, e) {
                M && it == 102 && (t.display.chromeScrollHack == null ? t.display.sizer.style.pointerEvents = "none" : clearTimeout(t.display.chromeScrollHack), 
                t.display.chromeScrollHack = setTimeout(function() {
                    t.display.chromeScrollHack = null, t.display.sizer.style.pointerEvents = "";
                }, 100));
                var r = dl(e), n = r.x, i = r.y, o = Ge;
                e.deltaMode === 0 && (n = e.deltaX, i = e.deltaY, o = 1);
                var l = t.display, a = l.scroller, s = a.scrollWidth > a.clientWidth, c = a.scrollHeight > a.clientHeight;
                if (n && s || i && c) {
                    if (i && h && K) {
                        t: for (var d = e.target, p = l.view; d != a; d = d.parentNode) for (var w = 0; w < p.length; w++) if (p[w].node == d) {
                            t.display.currentWheelTarget = d;
                            break t;
                        }
                    }
                    if (n && !E && !Z && o != null) return i && c && cr(t, Math.max(0, a.scrollTop + i * o)), 
                    dn(t, Math.max(0, a.scrollLeft + n * o)), (!i || i && c) && qt(e), 
                    void (l.wheelStartX = null);
                    if (i && o != null) {
                        var x = i * o, T = t.doc.scrollTop, H = T + l.wrapper.clientHeight;
                        x < 0 ? T = Math.max(0, T + x - 50) : H = Math.min(t.doc.height, H + x + 50), 
                        Ui(t, {
                            top: T,
                            bottom: H
                        });
                    }
                    Jr < 20 && e.deltaMode !== 0 && (l.wheelStartX == null ? (l.wheelStartX = a.scrollLeft, 
                    l.wheelStartY = a.scrollTop, l.wheelDX = n, l.wheelDY = i, setTimeout(function() {
                        if (l.wheelStartX != null) {
                            var B = a.scrollLeft - l.wheelStartX, j = a.scrollTop - l.wheelStartY, $ = j && l.wheelDY && j / l.wheelDY || B && l.wheelDX && B / l.wheelDX;
                            l.wheelStartX = l.wheelStartY = null, $ && (Ge = (Ge * Jr + $) / (Jr + 1), 
                            ++Jr);
                        }
                    }, 200)) : (l.wheelDX += n, l.wheelDY += i));
                }
            }
            Q ? Ge = -.53 : E ? Ge = 15 : M ? Ge = -.7 : vt && (Ge = -1 / 3);
            var pe = function(t, e) {
                this.ranges = t, this.primIndex = e;
            };
            pe.prototype.primary = function() {
                return this.ranges[this.primIndex];
            }, pe.prototype.equals = function(t) {
                if (t == this) return !0;
                if (t.primIndex != this.primIndex || t.ranges.length != this.ranges.length) return !1;
                for (var e = 0; e < this.ranges.length; e++) {
                    var r = this.ranges[e], n = t.ranges[e];
                    if (!ft(r.anchor, n.anchor) || !ft(r.head, n.head)) return !1;
                }
                return !0;
            }, pe.prototype.deepCopy = function() {
                for (var t = [], e = 0; e < this.ranges.length; e++) t[e] = new gt(yt(this.ranges[e].anchor), yt(this.ranges[e].head));
                return new pe(t, this.primIndex);
            }, pe.prototype.somethingSelected = function() {
                for (var t = 0; t < this.ranges.length; t++) if (!this.ranges[t].empty()) return !0;
                return !1;
            }, pe.prototype.contains = function(t, e) {
                e || (e = t);
                for (var r = 0; r < this.ranges.length; r++) {
                    var n = this.ranges[r];
                    if (W(e, n.from()) >= 0 && W(t, n.to()) <= 0) return r;
                }
                return -1;
            };
            var gt = function(t, e) {
                this.anchor = t, this.head = e;
            };
            function Te(t, e, r) {
                var n = t && t.options.selectionsMayTouch, i = e[r];
                e.sort(function(w, x) {
                    return W(w.from(), x.from());
                }), r = ct(e, i);
                for (var o = 1; o < e.length; o++) {
                    var l = e[o], a = e[o - 1], s = W(a.to(), l.from());
                    if (n && !l.empty() ? s > 0 : s >= 0) {
                        var c = oe(a.from(), l.from()), d = Vt(a.to(), l.to()), p = a.empty() ? l.from() == l.head : a.from() == a.head;
                        o <= r && --r, e.splice(--o, 2, new gt(p ? d : c, p ? c : d));
                    }
                }
                return new pe(e, r);
            }
            function tn(t, e) {
                return new pe([ new gt(t, e || t) ], 0);
            }
            function en(t) {
                return t.text ? k(t.from.line + t.text.length - 1, ut(t.text).length + (t.text.length == 1 ? t.from.ch : 0)) : t.to;
            }
            function gl(t, e) {
                if (W(t, e.from) < 0) return t;
                if (W(t, e.to) <= 0) return en(e);
                var r = t.line + e.text.length - (e.to.line - e.from.line) - 1, n = t.ch;
                return t.line == e.to.line && (n += en(e).ch - e.to.ch), k(r, n);
            }
            function Gi(t, e) {
                for (var r = [], n = 0; n < t.sel.ranges.length; n++) {
                    var i = t.sel.ranges[n];
                    r.push(new gt(gl(i.anchor, e), gl(i.head, e)));
                }
                return Te(t.cm, r, t.sel.primIndex);
            }
            function ml(t, e, r) {
                return t.line == e.line ? k(r.line, t.ch - e.ch + r.ch) : k(r.line + (t.line - e.line), t.ch);
            }
            function Ts(t, e, r) {
                for (var n = [], i = k(t.first, 0), o = i, l = 0; l < e.length; l++) {
                    var a = e[l], s = ml(a.from, i, o), c = ml(en(a), i, o);
                    if (i = a.to, o = c, r == "around") {
                        var d = t.sel.ranges[l], p = W(d.head, d.anchor) < 0;
                        n[l] = new gt(p ? c : s, p ? s : c);
                    } else n[l] = new gt(s, s);
                }
                return new pe(n, t.sel.primIndex);
            }
            function _i(t) {
                t.doc.mode = Qn(t.options, t.doc.modeOption), pr(t);
            }
            function pr(t) {
                t.doc.iter(function(e) {
                    e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
                }), t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first, 
                hr(t, 100), t.state.modeGen++, t.curOp && le(t);
            }
            function vl(t, e) {
                return e.from.ch == 0 && e.to.ch == 0 && ut(e.text) == "" && (!t.cm || t.cm.options.wholeLineUpdateBefore);
            }
            function $i(t, e, r, n) {
                function i($) {
                    return r ? r[$] : null;
                }
                function o($, I, J) {
                    Fa($, I, J, n), Kt($, "change", $, e);
                }
                function l($, I) {
                    for (var J = [], q = $; q < I; ++q) J.push(new Tn(c[q], i(q), n));
                    return J;
                }
                var a = e.from, s = e.to, c = e.text, d = tt(t, a.line), p = tt(t, s.line), w = ut(c), x = i(c.length - 1), T = s.line - a.line;
                if (e.full) t.insert(0, l(0, c.length)), t.remove(c.length, t.size - c.length); else if (vl(t, e)) {
                    var H = l(0, c.length - 1);
                    o(p, p.text, x), T && t.remove(a.line, T), H.length && t.insert(a.line, H);
                } else if (d == p) if (c.length == 1) o(d, d.text.slice(0, a.ch) + w + d.text.slice(s.ch), x); else {
                    var B = l(1, c.length - 1);
                    B.push(new Tn(w + d.text.slice(s.ch), x, n)), o(d, d.text.slice(0, a.ch) + c[0], i(0)), 
                    t.insert(a.line + 1, B);
                } else if (c.length == 1) o(d, d.text.slice(0, a.ch) + c[0] + p.text.slice(s.ch), i(0)), 
                t.remove(a.line + 1, T); else {
                    o(d, d.text.slice(0, a.ch) + c[0], i(0)), o(p, w + p.text.slice(s.ch), x);
                    var j = l(1, c.length - 1);
                    T > 1 && t.remove(a.line + 1, T - 1), t.insert(a.line + 1, j);
                }
                Kt(t, "change", t, e);
            }
            function nn(t, e, r) {
                function n(i, o, l) {
                    if (i.linked) for (var a = 0; a < i.linked.length; ++a) {
                        var s = i.linked[a];
                        if (s.doc != o) {
                            var c = l && s.sharedHist;
                            r && !c || (e(s.doc, c), n(s.doc, i, c));
                        }
                    }
                }
                n(t, null, !0);
            }
            function yl(t, e) {
                if (e.cm) throw new Error("This document is already in use.");
                t.doc = e, e.cm = t, Wi(t), _i(t), bl(t), t.options.direction = e.direction, 
                t.options.lineWrapping || Ci(t), t.options.mode = e.modeOption, 
                le(t);
            }
            function bl(t) {
                (t.doc.direction == "rtl" ? Bt : L)(t.display.lineDiv, "CodeMirror-rtl");
            }
            function Ms(t) {
                ue(t, function() {
                    bl(t), le(t);
                });
            }
            function Qr(t) {
                this.done = [], this.undone = [], this.undoDepth = t ? t.undoDepth : 1 / 0, 
                this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, 
                this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = t ? t.maxGeneration : 1;
            }
            function Xi(t, e) {
                var r = {
                    from: yt(e.from),
                    to: en(e),
                    text: Fe(t, e.from, e.to)
                };
                return Cl(t, r, e.from.line, e.to.line + 1), nn(t, function(n) {
                    return Cl(n, r, e.from.line, e.to.line + 1);
                }, !0), r;
            }
            function wl(t) {
                for (;t.length && ut(t).ranges; ) t.pop();
            }
            function As(t, e) {
                return e ? (wl(t.done), ut(t.done)) : t.done.length && !ut(t.done).ranges ? ut(t.done) : t.done.length > 1 && !t.done[t.done.length - 2].ranges ? (t.done.pop(), 
                ut(t.done)) : void 0;
            }
            function xl(t, e, r, n) {
                var i = t.history;
                i.undone.length = 0;
                var o, l, a = +new Date();
                if ((i.lastOp == n || i.lastOrigin == e.origin && e.origin && (e.origin.charAt(0) == "+" && i.lastModTime > a - (t.cm ? t.cm.options.historyEventDelay : 500) || e.origin.charAt(0) == "*")) && (o = As(i, i.lastOp == n))) l = ut(o.changes), 
                W(e.from, e.to) == 0 && W(e.from, l.to) == 0 ? l.to = en(e) : o.changes.push(Xi(t, e)); else {
                    var s = ut(i.done);
                    for (s && s.ranges || ti(t.sel, i.done), o = {
                        changes: [ Xi(t, e) ],
                        generation: i.generation
                    }, i.done.push(o); i.done.length > i.undoDepth; ) i.done.shift(), 
                    i.done[0].ranges || i.done.shift();
                }
                i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, 
                i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = e.origin, 
                l || Lt(t, "historyAdded");
            }
            function Ns(t, e, r, n) {
                var i = e.charAt(0);
                return i == "*" || i == "+" && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date() - t.history.lastSelTime <= (t.cm ? t.cm.options.historyEventDelay : 500);
            }
            function Os(t, e, r, n) {
                var i = t.history, o = n && n.origin;
                r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Ns(t, o, ut(i.done), e)) ? i.done[i.done.length - 1] = e : ti(e, i.done), 
                i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = r, 
                n && n.clearRedo !== !1 && wl(i.undone);
            }
            function ti(t, e) {
                var r = ut(e);
                r && r.ranges && r.equals(t) || e.push(t);
            }
            function Cl(t, e, r, n) {
                var i = e["spans_" + t.id], o = 0;
                t.iter(Math.max(t.first, r), Math.min(t.first + t.size, n), function(l) {
                    l.markedSpans && ((i || (i = e["spans_" + t.id] = {}))[o] = l.markedSpans), 
                    ++o;
                });
            }
            function Ds(t) {
                if (!t) return null;
                for (var e, r = 0; r < t.length; ++r) t[r].marker.explicitlyCleared ? e || (e = t.slice(0, r)) : e && e.push(t[r]);
                return e ? e.length ? e : null : t;
            }
            function Hs(t, e) {
                var r = e["spans_" + t.id];
                if (!r) return null;
                for (var n = [], i = 0; i < e.text.length; ++i) n.push(Ds(r[i]));
                return n;
            }
            function kl(t, e) {
                var r = Hs(t, e), n = yi(t, e);
                if (!r) return n;
                if (!n) return r;
                for (var i = 0; i < r.length; ++i) {
                    var o = r[i], l = n[i];
                    if (o && l) t: for (var a = 0; a < l.length; ++a) {
                        for (var s = l[a], c = 0; c < o.length; ++c) if (o[c].marker == s.marker) continue t;
                        o.push(s);
                    } else l && (r[i] = l);
                }
                return r;
            }
            function Fn(t, e, r) {
                for (var n = [], i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o.ranges) n.push(r ? pe.prototype.deepCopy.call(o) : o); else {
                        var l = o.changes, a = [];
                        n.push({
                            changes: a
                        });
                        for (var s = 0; s < l.length; ++s) {
                            var c = l[s], d = void 0;
                            if (a.push({
                                from: c.from,
                                to: c.to,
                                text: c.text
                            }), e) for (var p in c) (d = p.match(/^spans_(\d+)$/)) && ct(e, Number(d[1])) > -1 && (ut(a)[p] = c[p], 
                            delete c[p]);
                        }
                    }
                }
                return n;
            }
            function Yi(t, e, r, n) {
                if (n) {
                    var i = t.anchor;
                    if (r) {
                        var o = W(e, i) < 0;
                        o != W(r, i) < 0 ? (i = e, e = r) : o != W(e, r) < 0 && (e = r);
                    }
                    return new gt(i, e);
                }
                return new gt(r || e, e);
            }
            function ei(t, e, r, n, i) {
                i == null && (i = t.cm && (t.cm.display.shift || t.extend)), Zt(t, new pe([ Yi(t.sel.primary(), e, r, i) ], 0), n);
            }
            function Sl(t, e, r) {
                for (var n = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0; o < t.sel.ranges.length; o++) n[o] = Yi(t.sel.ranges[o], e[o], null, i);
                Zt(t, Te(t.cm, n, t.sel.primIndex), r);
            }
            function qi(t, e, r, n) {
                var i = t.sel.ranges.slice(0);
                i[e] = r, Zt(t, Te(t.cm, i, t.sel.primIndex), n);
            }
            function Ll(t, e, r, n) {
                Zt(t, tn(e, r), n);
            }
            function Ws(t, e, r) {
                var n = {
                    ranges: e.ranges,
                    update: function(i) {
                        this.ranges = [];
                        for (var o = 0; o < i.length; o++) this.ranges[o] = new gt(ot(t, i[o].anchor), ot(t, i[o].head));
                    },
                    origin: r && r.origin
                };
                return Lt(t, "beforeSelectionChange", t, n), t.cm && Lt(t.cm, "beforeSelectionChange", t.cm, n), 
                n.ranges != e.ranges ? Te(t.cm, n.ranges, n.ranges.length - 1) : e;
            }
            function Tl(t, e, r) {
                var n = t.history.done, i = ut(n);
                i && i.ranges ? (n[n.length - 1] = e, ni(t, e, r)) : Zt(t, e, r);
            }
            function Zt(t, e, r) {
                ni(t, e, r), Os(t, t.sel, t.cm ? t.cm.curOp.id : NaN, r);
            }
            function ni(t, e, r) {
                (Qt(t, "beforeSelectionChange") || t.cm && Qt(t.cm, "beforeSelectionChange")) && (e = Ws(t, e, r));
                var n = r && r.bias || (W(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
                Ml(t, Nl(t, e, n, !0)), r && r.scroll === !1 || !t.cm || t.cm.getOption("readOnly") == "nocursor" || Hn(t.cm);
            }
            function Ml(t, e) {
                e.equals(t.sel) || (t.sel = e, t.cm && (t.cm.curOp.updateInput = 1, 
                t.cm.curOp.selectionChanged = !0, Hr(t.cm)), Kt(t, "cursorActivity", t));
            }
            function Al(t) {
                Ml(t, Nl(t, t.sel, null, !1));
            }
            function Nl(t, e, r, n) {
                for (var i, o = 0; o < e.ranges.length; o++) {
                    var l = e.ranges[o], a = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o], s = ri(t, l.anchor, a && a.anchor, r, n), c = l.head == l.anchor ? s : ri(t, l.head, a && a.head, r, n);
                    (i || s != l.anchor || c != l.head) && (i || (i = e.ranges.slice(0, o)), 
                    i[o] = new gt(s, c));
                }
                return i ? Te(t.cm, i, e.primIndex) : e;
            }
            function Pn(t, e, r, n, i) {
                var o = tt(t, e.line);
                if (o.markedSpans) for (var l = 0; l < o.markedSpans.length; ++l) {
                    var a = o.markedSpans[l], s = a.marker, c = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft, d = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
                    if ((a.from == null || (c ? a.from <= e.ch : a.from < e.ch)) && (a.to == null || (d ? a.to >= e.ch : a.to > e.ch))) {
                        if (i && (Lt(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                            if (o.markedSpans) {
                                --l;
                                continue;
                            }
                            break;
                        }
                        if (!s.atomic) continue;
                        if (r) {
                            var p = s.find(n < 0 ? 1 : -1), w = void 0;
                            if ((n < 0 ? d : c) && (p = Ol(t, p, -n, p && p.line == e.line ? o : null)), 
                            p && p.line == e.line && (w = W(p, r)) && (n < 0 ? w < 0 : w > 0)) return Pn(t, p, e, n, i);
                        }
                        var x = s.find(n < 0 ? -1 : 1);
                        return (n < 0 ? c : d) && (x = Ol(t, x, n, x.line == e.line ? o : null)), 
                        x ? Pn(t, x, e, n, i) : null;
                    }
                }
                return e;
            }
            function ri(t, e, r, n, i) {
                var o = n || 1, l = Pn(t, e, r, o, i) || !i && Pn(t, e, r, o, !0) || Pn(t, e, r, -o, i) || !i && Pn(t, e, r, -o, !0);
                return l || (t.cantEdit = !0, k(t.first, 0));
            }
            function Ol(t, e, r, n) {
                return r < 0 && e.ch == 0 ? e.line > t.first ? ot(t, k(e.line - 1)) : null : r > 0 && e.ch == (n || tt(t, e.line)).text.length ? e.line < t.first + t.size - 1 ? k(e.line + 1, 0) : null : new k(e.line, e.ch + r);
            }
            function Dl(t) {
                t.setSelection(k(t.firstLine(), 0), k(t.lastLine()), xt);
            }
            function Hl(t, e, r) {
                var n = {
                    canceled: !1,
                    from: e.from,
                    to: e.to,
                    text: e.text,
                    origin: e.origin,
                    cancel: function() {
                        return n.canceled = !0;
                    }
                };
                return r && (n.update = function(i, o, l, a) {
                    i && (n.from = ot(t, i)), o && (n.to = ot(t, o)), l && (n.text = l), 
                    a !== void 0 && (n.origin = a);
                }), Lt(t, "beforeChange", t, n), t.cm && Lt(t.cm, "beforeChange", t.cm, n), 
                n.canceled ? (t.cm && (t.cm.curOp.updateInput = 2), null) : {
                    from: n.from,
                    to: n.to,
                    text: n.text,
                    origin: n.origin
                };
            }
            function En(t, e, r) {
                if (t.cm) {
                    if (!t.cm.curOp) return Gt(t.cm, En)(t, e, r);
                    if (t.cm.state.suppressEdits) return;
                }
                if (!(Qt(t, "beforeChange") || t.cm && Qt(t.cm, "beforeChange")) || (e = Hl(t, e, !0))) {
                    var n = ko && !r && Oa(t, e.from, e.to);
                    if (n) for (var i = n.length - 1; i >= 0; --i) Wl(t, {
                        from: n[i].from,
                        to: n[i].to,
                        text: i ? [ "" ] : e.text,
                        origin: e.origin
                    }); else Wl(t, e);
                }
            }
            function Wl(t, e) {
                if (e.text.length != 1 || e.text[0] != "" || W(e.from, e.to) != 0) {
                    var r = Gi(t, e);
                    xl(t, e, r, t.cm ? t.cm.curOp.id : NaN), gr(t, e, r, yi(t, e));
                    var n = [];
                    nn(t, function(i, o) {
                        o || ct(n, i.history) != -1 || (Bl(i.history, e), n.push(i.history)), 
                        gr(i, e, null, yi(i, e));
                    });
                }
            }
            function ii(t, e, r) {
                var n = t.cm && t.cm.state.suppressEdits;
                if (!n || r) {
                    for (var i, o = t.history, l = t.sel, a = e == "undo" ? o.done : o.undone, s = e == "undo" ? o.undone : o.done, c = 0; c < a.length && (i = a[c], 
                    r ? !i.ranges || i.equals(t.sel) : i.ranges); c++);
                    if (c != a.length) {
                        for (o.lastOrigin = o.lastSelOrigin = null; ;) {
                            if (!(i = a.pop()).ranges) {
                                if (n) return void a.push(i);
                                break;
                            }
                            if (ti(i, s), r && !i.equals(t.sel)) return void Zt(t, i, {
                                clearRedo: !1
                            });
                            l = i;
                        }
                        var d = [];
                        ti(l, s), s.push({
                            changes: d,
                            generation: o.generation
                        }), o.generation = i.generation || ++o.maxGeneration;
                        for (var p = Qt(t, "beforeChange") || t.cm && Qt(t.cm, "beforeChange"), w = function(H) {
                            var B = i.changes[H];
                            if (B.origin = e, p && !Hl(t, B, !1)) return a.length = 0, 
                            {};
                            d.push(Xi(t, B));
                            var j = H ? Gi(t, B) : ut(a);
                            gr(t, B, j, kl(t, B)), !H && t.cm && t.cm.scrollIntoView({
                                from: B.from,
                                to: en(B)
                            });
                            var $ = [];
                            nn(t, function(I, J) {
                                J || ct($, I.history) != -1 || (Bl(I.history, B), 
                                $.push(I.history)), gr(I, B, null, kl(I, B));
                            });
                        }, x = i.changes.length - 1; x >= 0; --x) {
                            var T = w(x);
                            if (T) return T.v;
                        }
                    }
                }
            }
            function Fl(t, e) {
                if (e != 0 && (t.first += e, t.sel = new pe(wn(t.sel.ranges, function(i) {
                    return new gt(k(i.anchor.line + e, i.anchor.ch), k(i.head.line + e, i.head.ch));
                }), t.sel.primIndex), t.cm)) {
                    le(t.cm, t.first, t.first - e, e);
                    for (var r = t.cm.display, n = r.viewFrom; n < r.viewTo; n++) Je(t.cm, n, "gutter");
                }
            }
            function gr(t, e, r, n) {
                if (t.cm && !t.cm.curOp) return Gt(t.cm, gr)(t, e, r, n);
                if (e.to.line < t.first) Fl(t, e.text.length - 1 - (e.to.line - e.from.line)); else if (!(e.from.line > t.lastLine())) {
                    if (e.from.line < t.first) {
                        var i = e.text.length - 1 - (t.first - e.from.line);
                        Fl(t, i), e = {
                            from: k(t.first, 0),
                            to: k(e.to.line + i, e.to.ch),
                            text: [ ut(e.text) ],
                            origin: e.origin
                        };
                    }
                    var o = t.lastLine();
                    e.to.line > o && (e = {
                        from: e.from,
                        to: k(o, tt(t, o).text.length),
                        text: [ e.text[0] ],
                        origin: e.origin
                    }), e.removed = Fe(t, e.from, e.to), r || (r = Gi(t, e)), t.cm ? Fs(t.cm, e, n) : $i(t, e, n), 
                    ni(t, r, xt), t.cantEdit && ri(t, k(t.firstLine(), 0)) && (t.cantEdit = !1);
                }
            }
            function Fs(t, e, r) {
                var n = t.doc, i = t.display, o = e.from, l = e.to, a = !1, s = o.line;
                t.options.lineWrapping || (s = ht(Se(tt(n, o.line))), n.iter(s, l.line + 1, function(x) {
                    if (x == i.maxLine) return a = !0, !0;
                })), n.sel.contains(e.from, e.to) > -1 && Hr(t), $i(n, e, r, Qo(t)), 
                t.options.lineWrapping || (n.iter(s, o.line + e.text.length, function(x) {
                    var T = Ur(x);
                    T > i.maxLineLength && (i.maxLine = x, i.maxLineLength = T, 
                    i.maxLineChanged = !0, a = !1);
                }), a && (t.curOp.updateMaxLine = !0)), ka(n, o.line), hr(t, 400);
                var c = e.text.length - (l.line - o.line) - 1;
                e.full ? le(t) : o.line != l.line || e.text.length != 1 || vl(t.doc, e) ? le(t, o.line, l.line + 1, c) : Je(t, o.line, "text");
                var d = Qt(t, "changes"), p = Qt(t, "change");
                if (p || d) {
                    var w = {
                        from: o,
                        to: l,
                        text: e.text,
                        removed: e.removed,
                        origin: e.origin
                    };
                    p && Kt(t, "change", t, w), d && (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(w);
                }
                t.display.selForContextMenu = null;
            }
            function Bn(t, e, r, n, i) {
                var o;
                n || (n = r), W(n, r) < 0 && (r = (o = [ n, r ])[0], n = o[1]), 
                typeof e == "string" && (e = t.splitLines(e)), En(t, {
                    from: r,
                    to: n,
                    text: e,
                    origin: i
                });
            }
            function Pl(t, e, r, n) {
                r < t.line ? t.line += n : e < t.line && (t.line = e, t.ch = 0);
            }
            function El(t, e, r, n) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i], l = !0;
                    if (o.ranges) {
                        o.copied || ((o = t[i] = o.deepCopy()).copied = !0);
                        for (var a = 0; a < o.ranges.length; a++) Pl(o.ranges[a].anchor, e, r, n), 
                        Pl(o.ranges[a].head, e, r, n);
                    } else {
                        for (var s = 0; s < o.changes.length; ++s) {
                            var c = o.changes[s];
                            if (r < c.from.line) c.from = k(c.from.line + n, c.from.ch), 
                            c.to = k(c.to.line + n, c.to.ch); else if (e <= c.to.line) {
                                l = !1;
                                break;
                            }
                        }
                        l || (t.splice(0, i + 1), i = 0);
                    }
                }
            }
            function Bl(t, e) {
                var r = e.from.line, n = e.to.line, i = e.text.length - (n - r) - 1;
                El(t.done, r, n, i), El(t.undone, r, n, i);
            }
            function mr(t, e, r, n) {
                var i = e, o = e;
                return typeof e == "number" ? o = tt(t, po(t, e)) : i = ht(e), i == null ? null : (n(o, i) && t.cm && Je(t.cm, i, r), 
                o);
            }
            function vr(t) {
                this.lines = t, this.parent = null;
                for (var e = 0, r = 0; r < t.length; ++r) t[r].parent = this, e += t[r].height;
                this.height = e;
            }
            function yr(t) {
                this.children = t;
                for (var e = 0, r = 0, n = 0; n < t.length; ++n) {
                    var i = t[n];
                    e += i.chunkSize(), r += i.height, i.parent = this;
                }
                this.size = e, this.height = r, this.parent = null;
            }
            gt.prototype.from = function() {
                return oe(this.anchor, this.head);
            }, gt.prototype.to = function() {
                return Vt(this.anchor, this.head);
            }, gt.prototype.empty = function() {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
            }, vr.prototype = {
                chunkSize: function() {
                    return this.lines.length;
                },
                removeInner: function(t, e) {
                    for (var r = t, n = t + e; r < n; ++r) {
                        var i = this.lines[r];
                        this.height -= i.height, Pa(i), Kt(i, "delete");
                    }
                    this.lines.splice(t, e);
                },
                collapse: function(t) {
                    t.push.apply(t, this.lines);
                },
                insertInner: function(t, e, r) {
                    this.height += r, this.lines = this.lines.slice(0, t).concat(e).concat(this.lines.slice(t));
                    for (var n = 0; n < e.length; ++n) e[n].parent = this;
                },
                iterN: function(t, e, r) {
                    for (var n = t + e; t < n; ++t) if (r(this.lines[t])) return !0;
                }
            }, yr.prototype = {
                chunkSize: function() {
                    return this.size;
                },
                removeInner: function(t, e) {
                    this.size -= e;
                    for (var r = 0; r < this.children.length; ++r) {
                        var n = this.children[r], i = n.chunkSize();
                        if (t < i) {
                            var o = Math.min(e, i - t), l = n.height;
                            if (n.removeInner(t, o), this.height -= l - n.height, 
                            i == o && (this.children.splice(r--, 1), n.parent = null), 
                            (e -= o) == 0) break;
                            t = 0;
                        } else t -= i;
                    }
                    if (this.size - e < 25 && (this.children.length > 1 || !(this.children[0] instanceof vr))) {
                        var a = [];
                        this.collapse(a), this.children = [ new vr(a) ], this.children[0].parent = this;
                    }
                },
                collapse: function(t) {
                    for (var e = 0; e < this.children.length; ++e) this.children[e].collapse(t);
                },
                insertInner: function(t, e, r) {
                    this.size += e.length, this.height += r;
                    for (var n = 0; n < this.children.length; ++n) {
                        var i = this.children[n], o = i.chunkSize();
                        if (t <= o) {
                            if (i.insertInner(t, e, r), i.lines && i.lines.length > 50) {
                                for (var l = i.lines.length % 25 + 25, a = l; a < i.lines.length; ) {
                                    var s = new vr(i.lines.slice(a, a += 25));
                                    i.height -= s.height, this.children.splice(++n, 0, s), 
                                    s.parent = this;
                                }
                                i.lines = i.lines.slice(0, l), this.maybeSpill();
                            }
                            break;
                        }
                        t -= o;
                    }
                },
                maybeSpill: function() {
                    if (!(this.children.length <= 10)) {
                        var t = this;
                        do {
                            var e = new yr(t.children.splice(t.children.length - 5, 5));
                            if (t.parent) {
                                t.size -= e.size, t.height -= e.height;
                                var r = ct(t.parent.children, t);
                                t.parent.children.splice(r + 1, 0, e);
                            } else {
                                var n = new yr(t.children);
                                n.parent = t, t.children = [ n, e ], t = n;
                            }
                            e.parent = t.parent;
                        } while (t.children.length > 10);
                        t.parent.maybeSpill();
                    }
                },
                iterN: function(t, e, r) {
                    for (var n = 0; n < this.children.length; ++n) {
                        var i = this.children[n], o = i.chunkSize();
                        if (t < o) {
                            var l = Math.min(e, o - t);
                            if (i.iterN(t, l, r)) return !0;
                            if ((e -= l) == 0) break;
                            t = 0;
                        } else t -= o;
                    }
                }
            };
            var br = function(t, e, r) {
                if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
                this.doc = t, this.node = e;
            };
            function Rl(t, e, r) {
                je(e) < (t.curOp && t.curOp.scrollTop || t.doc.scrollTop) && Ii(t, r);
            }
            function Ps(t, e, r, n) {
                var i = new br(t, r, n), o = t.cm;
                return o && i.noHScroll && (o.display.alignWidgets = !0), mr(t, e, "widget", function(l) {
                    var a = l.widgets || (l.widgets = []);
                    if (i.insertAt == null ? a.push(i) : a.splice(Math.min(a.length, Math.max(0, i.insertAt)), 0, i), 
                    i.line = l, o && !Ze(t, l)) {
                        var s = je(l) < t.scrollTop;
                        we(l, l.height + or(i)), s && Ii(o, i.height), o.curOp.forceUpdate = !0;
                    }
                    return !0;
                }), o && Kt(o, "lineWidgetAdded", o, i, typeof e == "number" ? e : ht(e)), 
                i;
            }
            br.prototype.clear = function() {
                var t = this.doc.cm, e = this.line.widgets, r = this.line, n = ht(r);
                if (n != null && e) {
                    for (var i = 0; i < e.length; ++i) e[i] == this && e.splice(i--, 1);
                    e.length || (r.widgets = null);
                    var o = or(this);
                    we(r, Math.max(0, r.height - o)), t && (ue(t, function() {
                        Rl(t, r, -o), Je(t, n, "widget");
                    }), Kt(t, "lineWidgetCleared", t, this, n));
                }
            }, br.prototype.changed = function() {
                var t = this, e = this.height, r = this.doc.cm, n = this.line;
                this.height = null;
                var i = or(this) - e;
                i && (Ze(this.doc, n) || we(n, n.height + i), r && ue(r, function() {
                    r.curOp.forceUpdate = !0, Rl(r, n, i), Kt(r, "lineWidgetChanged", r, t, ht(n));
                }));
            }, te(br);
            var Il = 0, rn = function(t, e) {
                this.lines = [], this.type = e, this.doc = t, this.id = ++Il;
            };
            function Rn(t, e, r, n, i) {
                if (n && n.shared) return Es(t, e, r, n, i);
                if (t.cm && !t.cm.curOp) return Gt(t.cm, Rn)(t, e, r, n, i);
                var o = new rn(t, i), l = W(e, r);
                if (n && nt(n, o, !1), l > 0 || l == 0 && o.clearWhenEmpty !== !1) return o;
                if (o.replacedWith && (o.collapsed = !0, o.widgetNode = wt("span", [ o.replacedWith ], "CodeMirror-widget"), 
                n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), 
                n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                    if (No(t, e.line, e, r, o) || e.line != r.line && No(t, r.line, e, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    La();
                }
                o.addToHistory && xl(t, {
                    from: e,
                    to: r,
                    origin: "markText"
                }, t.sel, NaN);
                var a, s = e.line, c = t.cm;
                if (t.iter(s, r.line + 1, function(p) {
                    c && o.collapsed && !c.options.lineWrapping && Se(p) == c.display.maxLine && (a = !0), 
                    o.collapsed && s != e.line && we(p, 0), Ma(p, new Br(o, s == e.line ? e.ch : null, s == r.line ? r.ch : null), t.cm && t.cm.curOp), 
                    ++s;
                }), o.collapsed && t.iter(e.line, r.line + 1, function(p) {
                    Ze(t, p) && we(p, 0);
                }), o.clearOnEnter && V(o, "beforeCursorEnter", function() {
                    return o.clear();
                }), o.readOnly && (Sa(), (t.history.done.length || t.history.undone.length) && t.clearHistory()), 
                o.collapsed && (o.id = ++Il, o.atomic = !0), c) {
                    if (a && (c.curOp.updateMaxLine = !0), o.collapsed) le(c, e.line, r.line + 1); else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var d = e.line; d <= r.line; d++) Je(c, d, "text");
                    o.atomic && Al(c.doc), Kt(c, "markerAdded", c, o);
                }
                return o;
            }
            rn.prototype.clear = function() {
                if (!this.explicitlyCleared) {
                    var t = this.doc.cm, e = t && !t.curOp;
                    if (e && gn(t), Qt(this, "clear")) {
                        var r = this.find();
                        r && Kt(this, "clear", r.from, r.to);
                    }
                    for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
                        var l = this.lines[o], a = nr(l.markedSpans, this);
                        t && !this.collapsed ? Je(t, ht(l), "text") : t && (a.to != null && (i = ht(l)), 
                        a.from != null && (n = ht(l))), l.markedSpans = Ta(l.markedSpans, a), 
                        a.from == null && this.collapsed && !Ze(this.doc, l) && t && we(l, Nn(t.display));
                    }
                    if (t && this.collapsed && !t.options.lineWrapping) for (var s = 0; s < this.lines.length; ++s) {
                        var c = Se(this.lines[s]), d = Ur(c);
                        d > t.display.maxLineLength && (t.display.maxLine = c, t.display.maxLineLength = d, 
                        t.display.maxLineChanged = !0);
                    }
                    n != null && t && this.collapsed && le(t, n, i + 1), this.lines.length = 0, 
                    this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, 
                    t && Al(t.doc)), t && Kt(t, "markerCleared", t, this, n, i), 
                    e && mn(t), this.parent && this.parent.clear();
                }
            }, rn.prototype.find = function(t, e) {
                var r, n;
                t == null && this.type == "bookmark" && (t = 1);
                for (var i = 0; i < this.lines.length; ++i) {
                    var o = this.lines[i], l = nr(o.markedSpans, this);
                    if (l.from != null && (r = k(e ? o : ht(o), l.from), t == -1)) return r;
                    if (l.to != null && (n = k(e ? o : ht(o), l.to), t == 1)) return n;
                }
                return r && {
                    from: r,
                    to: n
                };
            }, rn.prototype.changed = function() {
                var t = this, e = this.find(-1, !0), r = this, n = this.doc.cm;
                e && n && ue(n, function() {
                    var i = e.line, o = ht(e.line), l = Ti(n, o);
                    if (l && (Go(l), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), 
                    n.curOp.updateMaxLine = !0, !Ze(r.doc, i) && r.height != null) {
                        var a = r.height;
                        r.height = null;
                        var s = or(r) - a;
                        s && we(i, i.height + s);
                    }
                    Kt(n, "markerChanged", n, t);
                });
            }, rn.prototype.attachLine = function(t) {
                if (!this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    e.maybeHiddenMarkers && ct(e.maybeHiddenMarkers, this) != -1 || (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(this);
                }
                this.lines.push(t);
            }, rn.prototype.detachLine = function(t) {
                if (this.lines.splice(ct(this.lines, t), 1), !this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this);
                }
            }, te(rn);
            var wr = function(t, e) {
                this.markers = t, this.primary = e;
                for (var r = 0; r < t.length; ++r) t[r].parent = this;
            };
            function Es(t, e, r, n, i) {
                (n = nt(n)).shared = !1;
                var o = [ Rn(t, e, r, n, i) ], l = o[0], a = n.widgetNode;
                return nn(t, function(s) {
                    a && (n.widgetNode = a.cloneNode(!0)), o.push(Rn(s, ot(s, e), ot(s, r), n, i));
                    for (var c = 0; c < s.linked.length; ++c) if (s.linked[c].isParent) return;
                    l = ut(o);
                }), new wr(o, l);
            }
            function zl(t) {
                return t.findMarks(k(t.first, 0), t.clipPos(k(t.lastLine())), function(e) {
                    return e.parent;
                });
            }
            function Bs(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r], i = n.find(), o = t.clipPos(i.from), l = t.clipPos(i.to);
                    if (W(o, l)) {
                        var a = Rn(t, o, l, n.primary, n.primary.type);
                        n.markers.push(a), a.parent = n;
                    }
                }
            }
            function Rs(t) {
                for (var e = function(n) {
                    var i = t[n], o = [ i.primary.doc ];
                    nn(i.primary.doc, function(s) {
                        return o.push(s);
                    });
                    for (var l = 0; l < i.markers.length; l++) {
                        var a = i.markers[l];
                        ct(o, a.doc) == -1 && (a.parent = null, i.markers.splice(l--, 1));
                    }
                }, r = 0; r < t.length; r++) e(r);
            }
            wr.prototype.clear = function() {
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var t = 0; t < this.markers.length; ++t) this.markers[t].clear();
                    Kt(this, "clear");
                }
            }, wr.prototype.find = function(t, e) {
                return this.primary.find(t, e);
            }, te(wr);
            var Is = 0, ae = function(t, e, r, n, i) {
                if (!(this instanceof ae)) return new ae(t, e, r, n, i);
                r == null && (r = 0), yr.call(this, [ new vr([ new Tn("", null) ]) ]), 
                this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, 
                this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
                var o = k(r, 0);
                this.sel = tn(o), this.history = new Qr(null), this.id = ++Is, this.modeOption = e, 
                this.lineSep = n, this.direction = i == "rtl" ? "rtl" : "ltr", this.extend = !1, 
                typeof t == "string" && (t = this.splitLines(t)), $i(this, {
                    from: o,
                    to: o,
                    text: t
                }), Zt(this, tn(o), xt);
            };
            ae.prototype = Nr(yr.prototype, {
                constructor: ae,
                iter: function(t, e, r) {
                    r ? this.iterN(t - this.first, e - t, r) : this.iterN(this.first, this.first + this.size, t);
                },
                insert: function(t, e) {
                    for (var r = 0, n = 0; n < e.length; ++n) r += e[n].height;
                    this.insertInner(t - this.first, e, r);
                },
                remove: function(t, e) {
                    this.removeInner(t - this.first, e);
                },
                getValue: function(t) {
                    var e = tr(this, this.first, this.first + this.size);
                    return t === !1 ? e : e.join(t || this.lineSeparator());
                },
                setValue: _t(function(t) {
                    var e = k(this.first, 0), r = this.first + this.size - 1;
                    En(this, {
                        from: e,
                        to: k(r, tt(this, r).text.length),
                        text: this.splitLines(t),
                        origin: "setValue",
                        full: !0
                    }, !0), this.cm && sr(this.cm, 0, 0), Zt(this, tn(e), xt);
                }),
                replaceRange: function(t, e, r, n) {
                    Bn(this, t, e = ot(this, e), r = r ? ot(this, r) : e, n);
                },
                getRange: function(t, e, r) {
                    var n = Fe(this, ot(this, t), ot(this, e));
                    return r === !1 ? n : r === "" ? n.join("") : n.join(r || this.lineSeparator());
                },
                getLine: function(t) {
                    var e = this.getLineHandle(t);
                    return e && e.text;
                },
                getLineHandle: function(t) {
                    if (g(this, t)) return tt(this, t);
                },
                getLineNumber: function(t) {
                    return ht(t);
                },
                getLineHandleVisualStart: function(t) {
                    return typeof t == "number" && (t = tt(this, t)), Se(t);
                },
                lineCount: function() {
                    return this.size;
                },
                firstLine: function() {
                    return this.first;
                },
                lastLine: function() {
                    return this.first + this.size - 1;
                },
                clipPos: function(t) {
                    return ot(this, t);
                },
                getCursor: function(t) {
                    var e = this.sel.primary();
                    return t == null || t == "head" ? e.head : t == "anchor" ? e.anchor : t == "end" || t == "to" || t === !1 ? e.to() : e.from();
                },
                listSelections: function() {
                    return this.sel.ranges;
                },
                somethingSelected: function() {
                    return this.sel.somethingSelected();
                },
                setCursor: _t(function(t, e, r) {
                    Ll(this, ot(this, typeof t == "number" ? k(t, e || 0) : t), null, r);
                }),
                setSelection: _t(function(t, e, r) {
                    Ll(this, ot(this, t), ot(this, e || t), r);
                }),
                extendSelection: _t(function(t, e, r) {
                    ei(this, ot(this, t), e && ot(this, e), r);
                }),
                extendSelections: _t(function(t, e) {
                    Sl(this, go(this, t), e);
                }),
                extendSelectionsBy: _t(function(t, e) {
                    Sl(this, go(this, wn(this.sel.ranges, t)), e);
                }),
                setSelections: _t(function(t, e, r) {
                    if (t.length) {
                        for (var n = [], i = 0; i < t.length; i++) n[i] = new gt(ot(this, t[i].anchor), ot(this, t[i].head || t[i].anchor));
                        e == null && (e = Math.min(t.length - 1, this.sel.primIndex)), 
                        Zt(this, Te(this.cm, n, e), r);
                    }
                }),
                addSelection: _t(function(t, e, r) {
                    var n = this.sel.ranges.slice(0);
                    n.push(new gt(ot(this, t), ot(this, e || t))), Zt(this, Te(this.cm, n, n.length - 1), r);
                }),
                getSelection: function(t) {
                    for (var e, r = this.sel.ranges, n = 0; n < r.length; n++) {
                        var i = Fe(this, r[n].from(), r[n].to());
                        e = e ? e.concat(i) : i;
                    }
                    return t === !1 ? e : e.join(t || this.lineSeparator());
                },
                getSelections: function(t) {
                    for (var e = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
                        var i = Fe(this, r[n].from(), r[n].to());
                        t !== !1 && (i = i.join(t || this.lineSeparator())), e[n] = i;
                    }
                    return e;
                },
                replaceSelection: function(t, e, r) {
                    for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = t;
                    this.replaceSelections(n, e, r || "+input");
                },
                replaceSelections: _t(function(t, e, r) {
                    for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                        var l = i.ranges[o];
                        n[o] = {
                            from: l.from(),
                            to: l.to(),
                            text: this.splitLines(t[o]),
                            origin: r
                        };
                    }
                    for (var a = e && e != "end" && Ts(this, n, e), s = n.length - 1; s >= 0; s--) En(this, n[s]);
                    a ? Tl(this, a) : this.cm && Hn(this.cm);
                }),
                undo: _t(function() {
                    ii(this, "undo");
                }),
                redo: _t(function() {
                    ii(this, "redo");
                }),
                undoSelection: _t(function() {
                    ii(this, "undo", !0);
                }),
                redoSelection: _t(function() {
                    ii(this, "redo", !0);
                }),
                setExtending: function(t) {
                    this.extend = t;
                },
                getExtending: function() {
                    return this.extend;
                },
                historySize: function() {
                    for (var t = this.history, e = 0, r = 0, n = 0; n < t.done.length; n++) t.done[n].ranges || ++e;
                    for (var i = 0; i < t.undone.length; i++) t.undone[i].ranges || ++r;
                    return {
                        undo: e,
                        redo: r
                    };
                },
                clearHistory: function() {
                    var t = this;
                    this.history = new Qr(this.history), nn(this, function(e) {
                        return e.history = t.history;
                    }, !0);
                },
                markClean: function() {
                    this.cleanGeneration = this.changeGeneration(!0);
                },
                changeGeneration: function(t) {
                    return t && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), 
                    this.history.generation;
                },
                isClean: function(t) {
                    return this.history.generation == (t || this.cleanGeneration);
                },
                getHistory: function() {
                    return {
                        done: Fn(this.history.done),
                        undone: Fn(this.history.undone)
                    };
                },
                setHistory: function(t) {
                    var e = this.history = new Qr(this.history);
                    e.done = Fn(t.done.slice(0), null, !0), e.undone = Fn(t.undone.slice(0), null, !0);
                },
                setGutterMarker: _t(function(t, e, r) {
                    return mr(this, t, "gutter", function(n) {
                        var i = n.gutterMarkers || (n.gutterMarkers = {});
                        return i[e] = r, !r && Or(i) && (n.gutterMarkers = null), 
                        !0;
                    });
                }),
                clearGutter: _t(function(t) {
                    var e = this;
                    this.iter(function(r) {
                        r.gutterMarkers && r.gutterMarkers[t] && mr(e, r, "gutter", function() {
                            return r.gutterMarkers[t] = null, Or(r.gutterMarkers) && (r.gutterMarkers = null), 
                            !0;
                        });
                    });
                }),
                lineInfo: function(t) {
                    var e;
                    if (typeof t == "number") {
                        if (!g(this, t) || (e = t, !(t = tt(this, t)))) return null;
                    } else if ((e = ht(t)) == null) return null;
                    return {
                        line: e,
                        handle: t,
                        text: t.text,
                        gutterMarkers: t.gutterMarkers,
                        textClass: t.textClass,
                        bgClass: t.bgClass,
                        wrapClass: t.wrapClass,
                        widgets: t.widgets
                    };
                },
                addLineClass: _t(function(t, e, r) {
                    return mr(this, t, e == "gutter" ? "gutter" : "class", function(n) {
                        var i = e == "text" ? "textClass" : e == "background" ? "bgClass" : e == "gutter" ? "gutterClass" : "wrapClass";
                        if (n[i]) {
                            if (F(r).test(n[i])) return !1;
                            n[i] += " " + r;
                        } else n[i] = r;
                        return !0;
                    });
                }),
                removeLineClass: _t(function(t, e, r) {
                    return mr(this, t, e == "gutter" ? "gutter" : "class", function(n) {
                        var i = e == "text" ? "textClass" : e == "background" ? "bgClass" : e == "gutter" ? "gutterClass" : "wrapClass", o = n[i];
                        if (!o) return !1;
                        if (r == null) n[i] = null; else {
                            var l = o.match(F(r));
                            if (!l) return !1;
                            var a = l.index + l[0].length;
                            n[i] = o.slice(0, l.index) + (l.index && a != o.length ? " " : "") + o.slice(a) || null;
                        }
                        return !0;
                    });
                }),
                addLineWidget: _t(function(t, e, r) {
                    return Ps(this, t, e, r);
                }),
                removeLineWidget: function(t) {
                    t.clear();
                },
                markText: function(t, e, r) {
                    return Rn(this, ot(this, t), ot(this, e), r, r && r.type || "range");
                },
                setBookmark: function(t, e) {
                    var r = {
                        replacedWith: e && (e.nodeType == null ? e.widget : e),
                        insertLeft: e && e.insertLeft,
                        clearWhenEmpty: !1,
                        shared: e && e.shared,
                        handleMouseEvents: e && e.handleMouseEvents
                    };
                    return Rn(this, t = ot(this, t), t, r, "bookmark");
                },
                findMarksAt: function(t) {
                    var e = [], r = tt(this, (t = ot(this, t)).line).markedSpans;
                    if (r) for (var n = 0; n < r.length; ++n) {
                        var i = r[n];
                        (i.from == null || i.from <= t.ch) && (i.to == null || i.to >= t.ch) && e.push(i.marker.parent || i.marker);
                    }
                    return e;
                },
                findMarks: function(t, e, r) {
                    t = ot(this, t), e = ot(this, e);
                    var n = [], i = t.line;
                    return this.iter(t.line, e.line + 1, function(o) {
                        var l = o.markedSpans;
                        if (l) for (var a = 0; a < l.length; a++) {
                            var s = l[a];
                            s.to != null && i == t.line && t.ch >= s.to || s.from == null && i != t.line || s.from != null && i == e.line && s.from >= e.ch || r && !r(s.marker) || n.push(s.marker.parent || s.marker);
                        }
                        ++i;
                    }), n;
                },
                getAllMarks: function() {
                    var t = [];
                    return this.iter(function(e) {
                        var r = e.markedSpans;
                        if (r) for (var n = 0; n < r.length; ++n) r[n].from != null && t.push(r[n].marker);
                    }), t;
                },
                posFromIndex: function(t) {
                    var e, r = this.first, n = this.lineSeparator().length;
                    return this.iter(function(i) {
                        var o = i.text.length + n;
                        if (o > t) return e = t, !0;
                        t -= o, ++r;
                    }), ot(this, k(r, e));
                },
                indexFromPos: function(t) {
                    var e = (t = ot(this, t)).ch;
                    if (t.line < this.first || t.ch < 0) return 0;
                    var r = this.lineSeparator().length;
                    return this.iter(this.first, t.line, function(n) {
                        e += n.text.length + r;
                    }), e;
                },
                copy: function(t) {
                    var e = new ae(tr(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                    return e.scrollTop = this.scrollTop, e.scrollLeft = this.scrollLeft, 
                    e.sel = this.sel, e.extend = !1, t && (e.history.undoDepth = this.history.undoDepth, 
                    e.setHistory(this.getHistory())), e;
                },
                linkedDoc: function(t) {
                    t || (t = {});
                    var e = this.first, r = this.first + this.size;
                    t.from != null && t.from > e && (e = t.from), t.to != null && t.to < r && (r = t.to);
                    var n = new ae(tr(this, e, r), t.mode || this.modeOption, e, this.lineSep, this.direction);
                    return t.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: n,
                        sharedHist: t.sharedHist
                    }), n.linked = [ {
                        doc: this,
                        isParent: !0,
                        sharedHist: t.sharedHist
                    } ], Bs(n, zl(this)), n;
                },
                unlinkDoc: function(t) {
                    if (t instanceof Ot && (t = t.doc), this.linked) {
                        for (var e = 0; e < this.linked.length; ++e) if (this.linked[e].doc == t) {
                            this.linked.splice(e, 1), t.unlinkDoc(this), Rs(zl(this));
                            break;
                        }
                    }
                    if (t.history == this.history) {
                        var r = [ t.id ];
                        nn(t, function(n) {
                            return r.push(n.id);
                        }, !0), t.history = new Qr(null), t.history.done = Fn(this.history.done, r), 
                        t.history.undone = Fn(this.history.undone, r);
                    }
                },
                iterLinkedDocs: function(t) {
                    nn(this, t);
                },
                getMode: function() {
                    return this.mode;
                },
                getEditor: function() {
                    return this.cm;
                },
                splitLines: function(t) {
                    return this.lineSep ? t.split(this.lineSep) : De(t);
                },
                lineSeparator: function() {
                    return this.lineSep || `
`;
                },
                setDirection: _t(function(t) {
                    t != "rtl" && (t = "ltr"), t != this.direction && (this.direction = t, 
                    this.iter(function(e) {
                        return e.order = null;
                    }), this.cm && Ms(this.cm));
                })
            }), ae.prototype.eachLine = ae.prototype.iter;
            var Ul = 0;
            function zs(t) {
                var e = this;
                if (Vl(e), !Wt(e, t) && !Ke(e.display, t)) {
                    qt(t), Q && (Ul = +new Date());
                    var r = fn(e, t, !0), n = t.dataTransfer.files;
                    if (r && !e.isReadOnly()) if (n && n.length && window.FileReader && window.File) for (var i = n.length, o = Array(i), l = 0, a = function() {
                        ++l == i && Gt(e, function() {
                            var x = {
                                from: r = ot(e.doc, r),
                                to: r,
                                text: e.doc.splitLines(o.filter(function(T) {
                                    return T != null;
                                }).join(e.doc.lineSeparator())),
                                origin: "paste"
                            };
                            En(e.doc, x), Tl(e.doc, tn(ot(e.doc, r), ot(e.doc, en(x))));
                        })();
                    }, s = function(x, T) {
                        if (e.options.allowDropFileTypes && ct(e.options.allowDropFileTypes, x.type) == -1) a(); else {
                            var H = new FileReader();
                            H.onerror = function() {
                                return a();
                            }, H.onload = function() {
                                var B = H.result;
                                /[\x00-\x08\x0e-\x1f]{2}/.test(B) || (o[T] = B), 
                                a();
                            }, H.readAsText(x);
                        }
                    }, c = 0; c < n.length; c++) s(n[c], c); else {
                        if (e.state.draggingText && e.doc.sel.contains(r) > -1) return e.state.draggingText(t), 
                        void setTimeout(function() {
                            return e.display.input.focus();
                        }, 20);
                        try {
                            var d = t.dataTransfer.getData("Text");
                            if (d) {
                                var p;
                                if (e.state.draggingText && !e.state.draggingText.copy && (p = e.listSelections()), 
                                ni(e.doc, tn(r, r)), p) for (var w = 0; w < p.length; ++w) Bn(e.doc, "", p[w].anchor, p[w].head, "drag");
                                e.replaceSelection(d, "around", "paste"), e.display.input.focus();
                            }
                        } catch {}
                    }
                }
            }
            function Us(t, e) {
                if (Q && (!t.state.draggingText || +new Date() - Ul < 100)) Re(e); else if (!Wt(t, e) && !Ke(t.display, e) && (e.dataTransfer.setData("Text", t.getSelection()), 
                e.dataTransfer.effectAllowed = "copyMove", e.dataTransfer.setDragImage && !vt)) {
                    var r = U("img", null, null, "position: fixed; left: 0; top: 0;");
                    r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 
                    Z && (r.width = r.height = 1, t.display.wrapper.appendChild(r), 
                    r._top = r.offsetTop), e.dataTransfer.setDragImage(r, 0, 0), 
                    Z && r.parentNode.removeChild(r);
                }
            }
            function Vs(t, e) {
                var r = fn(t, e);
                if (r) {
                    var n = document.createDocumentFragment();
                    Fi(t, r, n), t.display.dragCursor || (t.display.dragCursor = U("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), 
                    t.display.lineSpace.insertBefore(t.display.dragCursor, t.display.cursorDiv)), 
                    v(t.display.dragCursor, n);
                }
            }
            function Vl(t) {
                t.display.dragCursor && (t.display.lineSpace.removeChild(t.display.dragCursor), 
                t.display.dragCursor = null);
            }
            function jl(t) {
                if (document.getElementsByClassName) {
                    for (var e = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < e.length; n++) {
                        var i = e[n].CodeMirror;
                        i && r.push(i);
                    }
                    r.length && r[0].operation(function() {
                        for (var o = 0; o < r.length; o++) t(r[o]);
                    });
                }
            }
            var Kl = !1;
            function js() {
                Kl || (Ks(), Kl = !0);
            }
            function Ks() {
                var t;
                V(window, "resize", function() {
                    t == null && (t = setTimeout(function() {
                        t = null, jl(Gs);
                    }, 100));
                }), V(window, "blur", function() {
                    return jl(Dn);
                });
            }
            function Gs(t) {
                var e = t.display;
                e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null, 
                e.scrollbarsClipped = !1, t.setSize();
            }
            for (var on = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, xr = 0; xr < 10; xr++) on[xr + 48] = on[xr + 96] = String(xr);
            for (var oi = 65; oi <= 90; oi++) on[oi] = String.fromCharCode(oi);
            for (var Cr = 1; Cr <= 12; Cr++) on[Cr + 111] = on[Cr + 63235] = "F" + Cr;
            var _e = {};
            function _s(t) {
                var e, r, n, i, o = t.split(/-(?!$)/);
                t = o[o.length - 1];
                for (var l = 0; l < o.length - 1; l++) {
                    var a = o[l];
                    if (/^(cmd|meta|m)$/i.test(a)) i = !0; else if (/^a(lt)?$/i.test(a)) e = !0; else if (/^(c|ctrl|control)$/i.test(a)) r = !0; else {
                        if (!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
                        n = !0;
                    }
                }
                return e && (t = "Alt-" + t), r && (t = "Ctrl-" + t), i && (t = "Cmd-" + t), 
                n && (t = "Shift-" + t), t;
            }
            function $s(t) {
                var e = {};
                for (var r in t) if (t.hasOwnProperty(r)) {
                    var n = t[r];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
                    if (n == "...") {
                        delete t[r];
                        continue;
                    }
                    for (var i = wn(r.split(" "), _s), o = 0; o < i.length; o++) {
                        var l = void 0, a = void 0;
                        o == i.length - 1 ? (a = i.join(" "), l = n) : (a = i.slice(0, o + 1).join(" "), 
                        l = "...");
                        var s = e[a];
                        if (s) {
                            if (s != l) throw new Error("Inconsistent bindings for " + a);
                        } else e[a] = l;
                    }
                    delete t[r];
                }
                for (var c in e) t[c] = e[c];
                return t;
            }
            function In(t, e, r, n) {
                var i = (e = li(e)).call ? e.call(t, n) : e[t];
                if (i === !1) return "nothing";
                if (i === "...") return "multi";
                if (i != null && r(i)) return "handled";
                if (e.fallthrough) {
                    if (Object.prototype.toString.call(e.fallthrough) != "[object Array]") return In(t, e.fallthrough, r, n);
                    for (var o = 0; o < e.fallthrough.length; o++) {
                        var l = In(t, e.fallthrough[o], r, n);
                        if (l) return l;
                    }
                }
            }
            function Gl(t) {
                var e = typeof t == "string" ? t : on[t.keyCode];
                return e == "Ctrl" || e == "Alt" || e == "Shift" || e == "Mod";
            }
            function _l(t, e, r) {
                var n = t;
                return e.altKey && n != "Alt" && (t = "Alt-" + t), (N ? e.metaKey : e.ctrlKey) && n != "Ctrl" && (t = "Ctrl-" + t), 
                (N ? e.ctrlKey : e.metaKey) && n != "Mod" && (t = "Cmd-" + t), !r && e.shiftKey && n != "Shift" && (t = "Shift-" + t), 
                t;
            }
            function $l(t, e) {
                if (Z && t.keyCode == 34 && t.char) return !1;
                var r = on[t.keyCode];
                return r != null && !t.altGraphKey && (t.keyCode == 3 && t.code && (r = t.code), 
                _l(r, t, e));
            }
            function li(t) {
                return typeof t == "string" ? _e[t] : t;
            }
            function zn(t, e) {
                for (var r = t.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
                    for (var o = e(r[i]); n.length && W(o.from, ut(n).to) <= 0; ) {
                        var l = n.pop();
                        if (W(l.from, o.from) < 0) {
                            o.from = l.from;
                            break;
                        }
                    }
                    n.push(o);
                }
                ue(t, function() {
                    for (var a = n.length - 1; a >= 0; a--) Bn(t.doc, "", n[a].from, n[a].to, "+delete");
                    Hn(t);
                });
            }
            function Zi(t, e, r) {
                var n = Ne(t.text, e + r, r);
                return n < 0 || n > t.text.length ? null : n;
            }
            function Ji(t, e, r) {
                var n = Zi(t, e.ch, r);
                return n == null ? null : new k(e.line, n, r < 0 ? "after" : "before");
            }
            function Qi(t, e, r, n, i) {
                if (t) {
                    e.doc.direction == "rtl" && (i = -i);
                    var o = ve(r, e.doc.direction);
                    if (o) {
                        var l, a = i < 0 ? ut(o) : o[0], s = i < 0 == (a.level == 1) ? "after" : "before";
                        if (a.level > 0 || e.doc.direction == "rtl") {
                            var c = An(e, r);
                            l = i < 0 ? r.text.length - 1 : 0;
                            var d = Be(e, c, l).top;
                            l = Ht(function(p) {
                                return Be(e, c, p).top == d;
                            }, i < 0 == (a.level == 1) ? a.from : a.to - 1, l), 
                            s == "before" && (l = Zi(r, l, 1));
                        } else l = i < 0 ? a.to : a.from;
                        return new k(n, l, s);
                    }
                }
                return new k(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after");
            }
            function Xs(t, e, r, n) {
                var i = ve(e, t.doc.direction);
                if (!i) return Ji(e, r, n);
                r.ch >= e.text.length ? (r.ch = e.text.length, r.sticky = "before") : r.ch <= 0 && (r.ch = 0, 
                r.sticky = "after");
                var o = me(i, r.ch, r.sticky), l = i[o];
                if (t.doc.direction == "ltr" && l.level % 2 == 0 && (n > 0 ? l.to > r.ch : l.from < r.ch)) return Ji(e, r, n);
                var a, s = function(j, $) {
                    return Zi(e, j instanceof k ? j.ch : j, $);
                }, c = function(j) {
                    return t.options.lineWrapping ? (a = a || An(t, e), Jo(t, e, a, j)) : {
                        begin: 0,
                        end: e.text.length
                    };
                }, d = c(r.sticky == "before" ? s(r, -1) : r.ch);
                if (t.doc.direction == "rtl" || l.level == 1) {
                    var p = l.level == 1 == n < 0, w = s(r, p ? 1 : -1);
                    if (w != null && (p ? w <= l.to && w <= d.end : w >= l.from && w >= d.begin)) {
                        var x = p ? "before" : "after";
                        return new k(r.line, w, x);
                    }
                }
                var T = function(j, $, I) {
                    for (var J = function(kt, fe) {
                        return fe ? new k(r.line, s(kt, 1), "before") : new k(r.line, kt, "after");
                    }; j >= 0 && j < i.length; j += $) {
                        var q = i[j], et = $ > 0 == (q.level != 1), Ct = et ? I.begin : s(I.end, -1);
                        if (q.from <= Ct && Ct < q.to || (Ct = et ? q.from : s(q.to, -1), 
                        I.begin <= Ct && Ct < I.end)) return J(Ct, et);
                    }
                }, H = T(o + n, n, d);
                if (H) return H;
                var B = n > 0 ? d.end : s(d.begin, -1);
                return B == null || n > 0 && B == e.text.length || !(H = T(n > 0 ? 0 : i.length - 1, n, c(B))) ? null : H;
            }
            _e.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            }, _e.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            }, _e.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            }, _e.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: [ "basic", "emacsy" ]
            }, _e.default = h ? _e.macDefault : _e.pcDefault;
            var kr = {
                selectAll: Dl,
                singleSelection: function(t) {
                    return t.setSelection(t.getCursor("anchor"), t.getCursor("head"), xt);
                },
                killLine: function(t) {
                    return zn(t, function(e) {
                        if (e.empty()) {
                            var r = tt(t.doc, e.head.line).text.length;
                            return e.head.ch == r && e.head.line < t.lastLine() ? {
                                from: e.head,
                                to: k(e.head.line + 1, 0)
                            } : {
                                from: e.head,
                                to: k(e.head.line, r)
                            };
                        }
                        return {
                            from: e.from(),
                            to: e.to()
                        };
                    });
                },
                deleteLine: function(t) {
                    return zn(t, function(e) {
                        return {
                            from: k(e.from().line, 0),
                            to: ot(t.doc, k(e.to().line + 1, 0))
                        };
                    });
                },
                delLineLeft: function(t) {
                    return zn(t, function(e) {
                        return {
                            from: k(e.from().line, 0),
                            to: e.from()
                        };
                    });
                },
                delWrappedLineLeft: function(t) {
                    return zn(t, function(e) {
                        var r = t.charCoords(e.head, "div").top + 5;
                        return {
                            from: t.coordsChar({
                                left: 0,
                                top: r
                            }, "div"),
                            to: e.from()
                        };
                    });
                },
                delWrappedLineRight: function(t) {
                    return zn(t, function(e) {
                        var r = t.charCoords(e.head, "div").top + 5, n = t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: r
                        }, "div");
                        return {
                            from: e.from(),
                            to: n
                        };
                    });
                },
                undo: function(t) {
                    return t.undo();
                },
                redo: function(t) {
                    return t.redo();
                },
                undoSelection: function(t) {
                    return t.undoSelection();
                },
                redoSelection: function(t) {
                    return t.redoSelection();
                },
                goDocStart: function(t) {
                    return t.extendSelection(k(t.firstLine(), 0));
                },
                goDocEnd: function(t) {
                    return t.extendSelection(k(t.lastLine()));
                },
                goLineStart: function(t) {
                    return t.extendSelectionsBy(function(e) {
                        return Xl(t, e.head.line);
                    }, {
                        origin: "+move",
                        bias: 1
                    });
                },
                goLineStartSmart: function(t) {
                    return t.extendSelectionsBy(function(e) {
                        return Yl(t, e.head);
                    }, {
                        origin: "+move",
                        bias: 1
                    });
                },
                goLineEnd: function(t) {
                    return t.extendSelectionsBy(function(e) {
                        return Ys(t, e.head.line);
                    }, {
                        origin: "+move",
                        bias: -1
                    });
                },
                goLineRight: function(t) {
                    return t.extendSelectionsBy(function(e) {
                        var r = t.cursorCoords(e.head, "div").top + 5;
                        return t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: r
                        }, "div");
                    }, Ce);
                },
                goLineLeft: function(t) {
                    return t.extendSelectionsBy(function(e) {
                        var r = t.cursorCoords(e.head, "div").top + 5;
                        return t.coordsChar({
                            left: 0,
                            top: r
                        }, "div");
                    }, Ce);
                },
                goLineLeftSmart: function(t) {
                    return t.extendSelectionsBy(function(e) {
                        var r = t.cursorCoords(e.head, "div").top + 5, n = t.coordsChar({
                            left: 0,
                            top: r
                        }, "div");
                        return n.ch < t.getLine(n.line).search(/\S/) ? Yl(t, e.head) : n;
                    }, Ce);
                },
                goLineUp: function(t) {
                    return t.moveV(-1, "line");
                },
                goLineDown: function(t) {
                    return t.moveV(1, "line");
                },
                goPageUp: function(t) {
                    return t.moveV(-1, "page");
                },
                goPageDown: function(t) {
                    return t.moveV(1, "page");
                },
                goCharLeft: function(t) {
                    return t.moveH(-1, "char");
                },
                goCharRight: function(t) {
                    return t.moveH(1, "char");
                },
                goColumnLeft: function(t) {
                    return t.moveH(-1, "column");
                },
                goColumnRight: function(t) {
                    return t.moveH(1, "column");
                },
                goWordLeft: function(t) {
                    return t.moveH(-1, "word");
                },
                goGroupRight: function(t) {
                    return t.moveH(1, "group");
                },
                goGroupLeft: function(t) {
                    return t.moveH(-1, "group");
                },
                goWordRight: function(t) {
                    return t.moveH(1, "word");
                },
                delCharBefore: function(t) {
                    return t.deleteH(-1, "codepoint");
                },
                delCharAfter: function(t) {
                    return t.deleteH(1, "char");
                },
                delWordBefore: function(t) {
                    return t.deleteH(-1, "word");
                },
                delWordAfter: function(t) {
                    return t.deleteH(1, "word");
                },
                delGroupBefore: function(t) {
                    return t.deleteH(-1, "group");
                },
                delGroupAfter: function(t) {
                    return t.deleteH(1, "group");
                },
                indentAuto: function(t) {
                    return t.indentSelection("smart");
                },
                indentMore: function(t) {
                    return t.indentSelection("add");
                },
                indentLess: function(t) {
                    return t.indentSelection("subtract");
                },
                insertTab: function(t) {
                    return t.replaceSelection("\t");
                },
                insertSoftTab: function(t) {
                    for (var e = [], r = t.listSelections(), n = t.options.tabSize, i = 0; i < r.length; i++) {
                        var o = r[i].from(), l = X(t.getLine(o.line), o.ch, n);
                        e.push(de(n - l % n));
                    }
                    t.replaceSelections(e);
                },
                defaultTab: function(t) {
                    t.somethingSelected() ? t.indentSelection("add") : t.execCommand("insertTab");
                },
                transposeChars: function(t) {
                    return ue(t, function() {
                        for (var e = t.listSelections(), r = [], n = 0; n < e.length; n++) if (e[n].empty()) {
                            var i = e[n].head, o = tt(t.doc, i.line).text;
                            if (o) {
                                if (i.ch == o.length && (i = new k(i.line, i.ch - 1)), 
                                i.ch > 0) i = new k(i.line, i.ch + 1), t.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), k(i.line, i.ch - 2), i, "+transpose"); else if (i.line > t.doc.first) {
                                    var l = tt(t.doc, i.line - 1).text;
                                    l && (i = new k(i.line, 1), t.replaceRange(o.charAt(0) + t.doc.lineSeparator() + l.charAt(l.length - 1), k(i.line - 1, l.length - 1), i, "+transpose"));
                                }
                            }
                            r.push(new gt(i, i));
                        }
                        t.setSelections(r);
                    });
                },
                newlineAndIndent: function(t) {
                    return ue(t, function() {
                        for (var e = t.listSelections(), r = e.length - 1; r >= 0; r--) t.replaceRange(t.doc.lineSeparator(), e[r].anchor, e[r].head, "+input");
                        e = t.listSelections();
                        for (var n = 0; n < e.length; n++) t.indentLine(e[n].from().line, null, !0);
                        Hn(t);
                    });
                },
                openLine: function(t) {
                    return t.replaceSelection(`
`, "start");
                },
                toggleOverwrite: function(t) {
                    return t.toggleOverwrite();
                }
            };
            function Xl(t, e) {
                var r = tt(t.doc, e), n = Se(r);
                return n != r && (e = ht(n)), Qi(!0, t, n, e, 1);
            }
            function Ys(t, e) {
                var r = tt(t.doc, e), n = Ha(r);
                return n != r && (e = ht(n)), Qi(!0, t, r, e, -1);
            }
            function Yl(t, e) {
                var r = Xl(t, e.line), n = tt(t.doc, r.line), i = ve(n, t.doc.direction);
                if (!i || i[0].level == 0) {
                    var o = Math.max(r.ch, n.text.search(/\S/)), l = e.line == r.line && e.ch <= o && e.ch;
                    return k(r.line, l ? 0 : o, r.sticky);
                }
                return r;
            }
            function ai(t, e, r) {
                if (typeof e == "string" && !(e = kr[e])) return !1;
                t.display.input.ensurePolled();
                var n = t.display.shift, i = !1;
                try {
                    t.isReadOnly() && (t.state.suppressEdits = !0), r && (t.display.shift = !1), 
                    i = e(t) != pt;
                } finally {
                    t.display.shift = n, t.state.suppressEdits = !1;
                }
                return i;
            }
            function qs(t, e, r) {
                for (var n = 0; n < t.state.keyMaps.length; n++) {
                    var i = In(e, t.state.keyMaps[n], r, t);
                    if (i) return i;
                }
                return t.options.extraKeys && In(e, t.options.extraKeys, r, t) || In(e, t.options.keyMap, r, t);
            }
            var Zs = new lt();
            function Sr(t, e, r, n) {
                var i = t.state.keySeq;
                if (i) {
                    if (Gl(e)) return "handled";
                    if (/\'$/.test(e) ? t.state.keySeq = null : Zs.set(50, function() {
                        t.state.keySeq == i && (t.state.keySeq = null, t.display.input.reset());
                    }), ql(t, i + " " + e, r, n)) return !0;
                }
                return ql(t, e, r, n);
            }
            function ql(t, e, r, n) {
                var i = qs(t, e, n);
                return i == "multi" && (t.state.keySeq = e), i == "handled" && Kt(t, "keyHandled", t, e, r), 
                i != "handled" && i != "multi" || (qt(r), Pi(t)), !!i;
            }
            function Zl(t, e) {
                var r = $l(e, !0);
                return !!r && (e.shiftKey && !t.state.keySeq ? Sr(t, "Shift-" + r, e, function(n) {
                    return ai(t, n, !0);
                }) || Sr(t, r, e, function(n) {
                    if (typeof n == "string" ? /^go[A-Z]/.test(n) : n.motion) return ai(t, n);
                }) : Sr(t, r, e, function(n) {
                    return ai(t, n);
                }));
            }
            function Js(t, e, r) {
                return Sr(t, "'" + r + "'", e, function(n) {
                    return ai(t, n, !0);
                });
            }
            var to = null;
            function Jl(t) {
                var e = this;
                if (!(t.target && t.target != e.display.input.getField() || (e.curOp.focus = mt(Mt(e)), 
                Wt(e, t)))) {
                    Q && Y < 11 && t.keyCode == 27 && (t.returnValue = !1);
                    var r = t.keyCode;
                    e.display.shift = r == 16 || t.shiftKey;
                    var n = Zl(e, t);
                    Z && (to = n ? r : null, n || r != 88 || qe || !(h ? t.metaKey : t.ctrlKey) || e.replaceSelection("", null, "cut")), 
                    E && !h && !n && r == 46 && t.shiftKey && !t.ctrlKey && document.execCommand && document.execCommand("cut"), 
                    r != 18 || /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) || Qs(e);
                }
            }
            function Qs(t) {
                var e = t.display.lineDiv;
                function r(n) {
                    n.keyCode != 18 && n.altKey || (L(e, "CodeMirror-crosshair"), 
                    Yt(document, "keyup", r), Yt(document, "mouseover", r));
                }
                Bt(e, "CodeMirror-crosshair"), V(document, "keyup", r), V(document, "mouseover", r);
            }
            function Ql(t) {
                t.keyCode == 16 && (this.doc.sel.shift = !1), Wt(this, t);
            }
            function ta(t) {
                var e = this;
                if (!(t.target && t.target != e.display.input.getField() || Ke(e.display, t) || Wt(e, t) || t.ctrlKey && !t.altKey || h && t.metaKey)) {
                    var r = t.keyCode, n = t.charCode;
                    if (Z && r == to) return to = null, void qt(t);
                    if (!Z || t.which && !(t.which < 10) || !Zl(e, t)) {
                        var i = String.fromCharCode(n ?? r);
                        i != "\b" && (Js(e, t, i) || e.display.input.onKeyPress(t));
                    }
                }
            }
            var Lr, Tr, tc = 400, eo = function(t, e, r) {
                this.time = t, this.pos = e, this.button = r;
            };
            function ec(t, e) {
                var r = +new Date();
                return Tr && Tr.compare(r, t, e) ? (Lr = Tr = null, "triple") : Lr && Lr.compare(r, t, e) ? (Tr = new eo(r, t, e), 
                Lr = null, "double") : (Lr = new eo(r, t, e), Tr = null, "single");
            }
            function ea(t) {
                var e = this, r = e.display;
                if (!(Wt(e, t) || r.activeTouch && r.input.supportsTouch())) {
                    if (r.input.ensurePolled(), r.shift = t.shiftKey, Ke(r, t)) K || (r.scroller.draggable = !1, 
                    setTimeout(function() {
                        return r.scroller.draggable = !0;
                    }, 100)); else if (!no(e, t)) {
                        var n = fn(e, t), i = Yn(t), o = n ? ec(n, i) : "single";
                        Xt(e).focus(), i == 1 && e.state.selectingText && e.state.selectingText(t), 
                        n && nc(e, i, n, o, t) || (i == 1 ? n ? ic(e, n, o, t) : ie(t) == r.scroller && qt(t) : i == 2 ? (n && ei(e.doc, n), 
                        setTimeout(function() {
                            return r.input.focus();
                        }, 20)) : i == 3 && (P ? e.display.input.onContextMenu(t) : Ei(e)));
                    }
                }
            }
            function nc(t, e, r, n, i) {
                var o = "Click";
                return n == "double" ? o = "Double" + o : n == "triple" && (o = "Triple" + o), 
                Sr(t, _l(o = (e == 1 ? "Left" : e == 2 ? "Middle" : "Right") + o, i), i, function(l) {
                    if (typeof l == "string" && (l = kr[l]), !l) return !1;
                    var a = !1;
                    try {
                        t.isReadOnly() && (t.state.suppressEdits = !0), a = l(t, r) != pt;
                    } finally {
                        t.state.suppressEdits = !1;
                    }
                    return a;
                });
            }
            function rc(t, e, r) {
                var n = t.getOption("configureMouse"), i = n ? n(t, e, r) : {};
                if (i.unit == null) {
                    var o = m ? r.shiftKey && r.metaKey : r.altKey;
                    i.unit = o ? "rectangle" : e == "single" ? "char" : e == "double" ? "word" : "line";
                }
                return (i.extend == null || t.doc.extend) && (i.extend = t.doc.extend || r.shiftKey), 
                i.addNew == null && (i.addNew = h ? r.metaKey : r.ctrlKey), i.moveOnDrag == null && (i.moveOnDrag = !(h ? r.altKey : r.ctrlKey)), 
                i;
            }
            function ic(t, e, r, n) {
                Q ? setTimeout(jt(nl, t), 0) : t.curOp.focus = mt(Mt(t));
                var i, o = rc(t, r, n), l = t.doc.sel;
                t.options.dragDrop && pi && !t.isReadOnly() && r == "single" && (i = l.contains(e)) > -1 && (W((i = l.ranges[i]).from(), e) < 0 || e.xRel > 0) && (W(i.to(), e) > 0 || e.xRel < 0) ? oc(t, n, e, o) : lc(t, n, e, o);
            }
            function oc(t, e, r, n) {
                var i = t.display, o = !1, l = Gt(t, function(c) {
                    K && (i.scroller.draggable = !1), t.state.draggingText = !1, 
                    t.state.delayingBlurEvent && (t.hasFocus() ? t.state.delayingBlurEvent = !1 : Ei(t)), 
                    Yt(i.wrapper.ownerDocument, "mouseup", l), Yt(i.wrapper.ownerDocument, "mousemove", a), 
                    Yt(i.scroller, "dragstart", s), Yt(i.scroller, "drop", l), o || (qt(c), 
                    n.addNew || ei(t.doc, r, null, null, n.extend), K && !vt || Q && Y == 9 ? setTimeout(function() {
                        i.wrapper.ownerDocument.body.focus({
                            preventScroll: !0
                        }), i.input.focus();
                    }, 20) : i.input.focus());
                }), a = function(c) {
                    o = o || Math.abs(e.clientX - c.clientX) + Math.abs(e.clientY - c.clientY) >= 10;
                }, s = function() {
                    return o = !0;
                };
                K && (i.scroller.draggable = !0), t.state.draggingText = l, l.copy = !n.moveOnDrag, 
                V(i.wrapper.ownerDocument, "mouseup", l), V(i.wrapper.ownerDocument, "mousemove", a), 
                V(i.scroller, "dragstart", s), V(i.scroller, "drop", l), t.state.delayingBlurEvent = !0, 
                setTimeout(function() {
                    return i.input.focus();
                }, 20), i.scroller.dragDrop && i.scroller.dragDrop();
            }
            function na(t, e, r) {
                if (r == "char") return new gt(e, e);
                if (r == "word") return t.findWordAt(e);
                if (r == "line") return new gt(k(e.line, 0), ot(t.doc, k(e.line + 1, 0)));
                var n = r(t, e);
                return new gt(n.from, n.to);
            }
            function lc(t, e, r, n) {
                Q && Ei(t);
                var i = t.display, o = t.doc;
                qt(e);
                var l, a, s = o.sel, c = s.ranges;
                if (n.addNew && !n.extend ? (a = o.sel.contains(r), l = a > -1 ? c[a] : new gt(r, r)) : (l = o.sel.primary(), 
                a = o.sel.primIndex), n.unit == "rectangle") n.addNew || (l = new gt(r, r)), 
                r = fn(t, e, !0, !0), a = -1; else {
                    var d = na(t, r, n.unit);
                    l = n.extend ? Yi(l, d.anchor, d.head, n.extend) : d;
                }
                n.addNew ? a == -1 ? (a = c.length, Zt(o, Te(t, c.concat([ l ]), a), {
                    scroll: !1,
                    origin: "*mouse"
                })) : c.length > 1 && c[a].empty() && n.unit == "char" && !n.extend ? (Zt(o, Te(t, c.slice(0, a).concat(c.slice(a + 1)), 0), {
                    scroll: !1,
                    origin: "*mouse"
                }), s = o.sel) : qi(o, a, l, ge) : (a = 0, Zt(o, new pe([ l ], 0), ge), 
                s = o.sel);
                var p = r;
                function w(I) {
                    if (W(p, I) != 0) if (p = I, n.unit == "rectangle") {
                        for (var J = [], q = t.options.tabSize, et = X(tt(o, r.line).text, r.ch, q), Ct = X(tt(o, I.line).text, I.ch, q), kt = Math.min(et, Ct), fe = Math.max(et, Ct), Tt = Math.min(r.line, I.line), xe = Math.min(t.lastLine(), Math.max(r.line, I.line)); Tt <= xe; Tt++) {
                            var he = tt(o, Tt).text, Ft = Dt(he, kt, q);
                            kt == fe ? J.push(new gt(k(Tt, Ft), k(Tt, Ft))) : he.length > Ft && J.push(new gt(k(Tt, Ft), k(Tt, Dt(he, fe, q))));
                        }
                        J.length || J.push(new gt(r, r)), Zt(o, Te(t, s.ranges.slice(0, a).concat(J), a), {
                            origin: "*mouse",
                            scroll: !1
                        }), t.scrollIntoView(I);
                    } else {
                        var se, ne = l, It = na(t, I, n.unit), Et = ne.anchor;
                        W(It.anchor, Et) > 0 ? (se = It.head, Et = oe(ne.from(), It.anchor)) : (se = It.anchor, 
                        Et = Vt(ne.to(), It.head));
                        var zt = s.ranges.slice(0);
                        zt[a] = ac(t, new gt(ot(o, Et), se)), Zt(o, Te(t, zt, a), ge);
                    }
                }
                var x = i.wrapper.getBoundingClientRect(), T = 0;
                function H(I) {
                    var J = ++T, q = fn(t, I, !0, n.unit == "rectangle");
                    if (q) if (W(q, p) != 0) {
                        t.curOp.focus = mt(Mt(t)), w(q);
                        var et = Yr(i, o);
                        (q.line >= et.to || q.line < et.from) && setTimeout(Gt(t, function() {
                            T == J && H(I);
                        }), 150);
                    } else {
                        var Ct = I.clientY < x.top ? -20 : I.clientY > x.bottom ? 20 : 0;
                        Ct && setTimeout(Gt(t, function() {
                            T == J && (i.scroller.scrollTop += Ct, H(I));
                        }), 50);
                    }
                }
                function B(I) {
                    t.state.selectingText = !1, T = 1 / 0, I && (qt(I), i.input.focus()), 
                    Yt(i.wrapper.ownerDocument, "mousemove", j), Yt(i.wrapper.ownerDocument, "mouseup", $), 
                    o.history.lastSelOrigin = null;
                }
                var j = Gt(t, function(I) {
                    I.buttons !== 0 && Yn(I) ? H(I) : B(I);
                }), $ = Gt(t, B);
                t.state.selectingText = $, V(i.wrapper.ownerDocument, "mousemove", j), 
                V(i.wrapper.ownerDocument, "mouseup", $);
            }
            function ac(t, e) {
                var r = e.anchor, n = e.head, i = tt(t.doc, r.line);
                if (W(r, n) == 0 && r.sticky == n.sticky) return e;
                var o = ve(i);
                if (!o) return e;
                var l = me(o, r.ch, r.sticky), a = o[l];
                if (a.from != r.ch && a.to != r.ch) return e;
                var s, c = l + (a.from == r.ch == (a.level != 1) ? 0 : 1);
                if (c == 0 || c == o.length) return e;
                if (n.line != r.line) s = (n.line - r.line) * (t.doc.direction == "ltr" ? 1 : -1) > 0; else {
                    var d = me(o, n.ch, n.sticky), p = d - l || (n.ch - r.ch) * (a.level == 1 ? -1 : 1);
                    s = d == c - 1 || d == c ? p < 0 : p > 0;
                }
                var w = o[c + (s ? -1 : 0)], x = s == (w.level == 1), T = x ? w.from : w.to, H = x ? "after" : "before";
                return r.ch == T && r.sticky == H ? e : new gt(new k(r.line, T, H), n);
            }
            function ra(t, e, r, n) {
                var i, o;
                if (e.touches) i = e.touches[0].clientX, o = e.touches[0].clientY; else try {
                    i = e.clientX, o = e.clientY;
                } catch {
                    return !1;
                }
                if (i >= Math.floor(t.display.gutters.getBoundingClientRect().right)) return !1;
                n && qt(e);
                var l = t.display, a = l.lineDiv.getBoundingClientRect();
                if (o > a.bottom || !Qt(t, r)) return Xn(e);
                o -= a.top - l.viewOffset;
                for (var s = 0; s < t.display.gutterSpecs.length; ++s) {
                    var c = l.gutters.childNodes[s];
                    if (c && c.getBoundingClientRect().right >= i) return Lt(t, r, t, f(t.doc, o), t.display.gutterSpecs[s].className, e), 
                    Xn(e);
                }
            }
            function no(t, e) {
                return ra(t, e, "gutterClick", !0);
            }
            function ia(t, e) {
                Ke(t.display, e) || sc(t, e) || Wt(t, e, "contextmenu") || P || t.display.input.onContextMenu(e);
            }
            function sc(t, e) {
                return !!Qt(t, "gutterContextMenu") && ra(t, e, "gutterContextMenu", !1);
            }
            function oa(t) {
                t.display.wrapper.className = t.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + t.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), 
                lr(t);
            }
            eo.prototype.compare = function(t, e, r) {
                return this.time + tc > t && W(e, this.pos) == 0 && r == this.button;
            };
            var Un = {
                toString: function() {
                    return "CodeMirror.Init";
                }
            }, la = {}, si = {};
            function cc(t) {
                var e = t.optionHandlers;
                function r(n, i, o, l) {
                    t.defaults[n] = i, o && (e[n] = l ? function(a, s, c) {
                        c != Un && o(a, s, c);
                    } : o);
                }
                t.defineOption = r, t.Init = Un, r("value", "", function(n, i) {
                    return n.setValue(i);
                }, !0), r("mode", null, function(n, i) {
                    n.doc.modeOption = i, _i(n);
                }, !0), r("indentUnit", 2, _i, !0), r("indentWithTabs", !1), r("smartIndent", !0), 
                r("tabSize", 4, function(n) {
                    pr(n), lr(n), le(n);
                }, !0), r("lineSeparator", null, function(n, i) {
                    if (n.doc.lineSep = i, i) {
                        var o = [], l = n.doc.first;
                        n.doc.iter(function(s) {
                            for (var c = 0; ;) {
                                var d = s.text.indexOf(i, c);
                                if (d == -1) break;
                                c = d + i.length, o.push(k(l, d));
                            }
                            l++;
                        });
                        for (var a = o.length - 1; a >= 0; a--) Bn(n.doc, i, o[a], k(o[a].line, o[a].ch + i.length));
                    }
                }), r("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(n, i, o) {
                    n.state.specialChars = new RegExp(i.source + (i.test("\t") ? "" : "|\t"), "g"), 
                    o != Un && n.refresh();
                }), r("specialCharPlaceholder", Ra, function(n) {
                    return n.refresh();
                }, !0), r("electricChars", !0), r("inputStyle", u ? "contenteditable" : "textarea", function() {
                    throw new Error("inputStyle can not (yet) be changed in a running editor");
                }, !0), r("spellcheck", !1, function(n, i) {
                    return n.getInputField().spellcheck = i;
                }, !0), r("autocorrect", !1, function(n, i) {
                    return n.getInputField().autocorrect = i;
                }, !0), r("autocapitalize", !1, function(n, i) {
                    return n.getInputField().autocapitalize = i;
                }, !0), r("rtlMoveVisually", !y), r("wholeLineUpdateBefore", !0), 
                r("theme", "default", function(n) {
                    oa(n), dr(n);
                }, !0), r("keyMap", "default", function(n, i, o) {
                    var l = li(i), a = o != Un && li(o);
                    a && a.detach && a.detach(n, l), l.attach && l.attach(n, a || null);
                }), r("extraKeys", null), r("configureMouse", null), r("lineWrapping", !1, fc, !0), 
                r("gutters", [], function(n, i) {
                    n.display.gutterSpecs = Ki(i, n.options.lineNumbers), dr(n);
                }, !0), r("fixedGutter", !0, function(n, i) {
                    n.display.gutters.style.left = i ? Hi(n.display) + "px" : "0", 
                    n.refresh();
                }, !0), r("coverGutterNextToScrollbar", !1, function(n) {
                    return Wn(n);
                }, !0), r("scrollbarStyle", "native", function(n) {
                    sl(n), Wn(n), n.display.scrollbars.setScrollTop(n.doc.scrollTop), 
                    n.display.scrollbars.setScrollLeft(n.doc.scrollLeft);
                }, !0), r("lineNumbers", !1, function(n, i) {
                    n.display.gutterSpecs = Ki(n.options.gutters, i), dr(n);
                }, !0), r("firstLineNumber", 1, dr, !0), r("lineNumberFormatter", function(n) {
                    return n;
                }, dr, !0), r("showCursorWhenSelecting", !1, ar, !0), r("resetSelectionOnContextMenu", !0), 
                r("lineWiseCopyCut", !0), r("pasteLinesPerSelection", !0), r("selectionsMayTouch", !1), 
                r("readOnly", !1, function(n, i) {
                    i == "nocursor" && (Dn(n), n.display.input.blur()), n.display.input.readOnlyChanged(i);
                }), r("screenReaderLabel", null, function(n, i) {
                    i = i === "" ? null : i, n.display.input.screenReaderLabelChanged(i);
                }), r("disableInput", !1, function(n, i) {
                    i || n.display.input.reset();
                }, !0), r("dragDrop", !0, uc), r("allowDropFileTypes", null), r("cursorBlinkRate", 530), 
                r("cursorScrollMargin", 0), r("cursorHeight", 1, ar, !0), r("singleCursorHeightPerLine", !0, ar, !0), 
                r("workTime", 100), r("workDelay", 100), r("flattenSpans", !0, pr, !0), 
                r("addModeClass", !1, pr, !0), r("pollInterval", 100), r("undoDepth", 200, function(n, i) {
                    return n.doc.history.undoDepth = i;
                }), r("historyEventDelay", 1250), r("viewportMargin", 10, function(n) {
                    return n.refresh();
                }, !0), r("maxHighlightLength", 1e4, pr, !0), r("moveInputWithCursor", !0, function(n, i) {
                    i || n.display.input.resetPosition();
                }), r("tabindex", null, function(n, i) {
                    return n.display.input.getField().tabIndex = i || "";
                }), r("autofocus", null), r("direction", "ltr", function(n, i) {
                    return n.doc.setDirection(i);
                }, !0), r("phrases", null);
            }
            function uc(t, e, r) {
                if (!e != !(r && r != Un)) {
                    var n = t.display.dragFunctions, i = e ? V : Yt;
                    i(t.display.scroller, "dragstart", n.start), i(t.display.scroller, "dragenter", n.enter), 
                    i(t.display.scroller, "dragover", n.over), i(t.display.scroller, "dragleave", n.leave), 
                    i(t.display.scroller, "drop", n.drop);
                }
            }
            function fc(t) {
                t.options.lineWrapping ? (Bt(t.display.wrapper, "CodeMirror-wrap"), 
                t.display.sizer.style.minWidth = "", t.display.sizerWidth = null) : (L(t.display.wrapper, "CodeMirror-wrap"), 
                Ci(t)), Wi(t), le(t), lr(t), setTimeout(function() {
                    return Wn(t);
                }, 100);
            }
            function Ot(t, e) {
                var r = this;
                if (!(this instanceof Ot)) return new Ot(t, e);
                this.options = e = e ? nt(e) : {}, nt(la, e, !1);
                var n = e.value;
                typeof n == "string" ? n = new ae(n, e.mode, null, e.lineSeparator, e.direction) : e.mode && (n.modeOption = e.mode), 
                this.doc = n;
                var i = new Ot.inputStyles[e.inputStyle](this), o = this.display = new Ss(t, n, i, e);
                for (var l in o.wrapper.CodeMirror = this, oa(this), e.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), 
                sl(this), this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new lt(),
                    keySeq: null,
                    specialChars: null
                }, e.autofocus && !u && o.input.focus(), Q && Y < 11 && setTimeout(function() {
                    return r.display.input.reset(!0);
                }, 20), hc(this), js(), gn(this), this.curOp.forceUpdate = !0, yl(this, n), 
                e.autofocus && !u || this.hasFocus() ? setTimeout(function() {
                    r.hasFocus() && !r.state.focused && Bi(r);
                }, 20) : Dn(this), si) si.hasOwnProperty(l) && si[l](this, e[l], Un);
                fl(this), e.finishInit && e.finishInit(this);
                for (var a = 0; a < ro.length; ++a) ro[a](this);
                mn(this), K && e.lineWrapping && getComputedStyle(o.lineDiv).textRendering == "optimizelegibility" && (o.lineDiv.style.textRendering = "auto");
            }
            function hc(t) {
                var e = t.display;
                V(e.scroller, "mousedown", Gt(t, ea)), V(e.scroller, "dblclick", Q && Y < 11 ? Gt(t, function(s) {
                    if (!Wt(t, s)) {
                        var c = fn(t, s);
                        if (c && !no(t, s) && !Ke(t.display, s)) {
                            qt(s);
                            var d = t.findWordAt(c);
                            ei(t.doc, d.anchor, d.head);
                        }
                    }
                }) : function(s) {
                    return Wt(t, s) || qt(s);
                }), V(e.scroller, "contextmenu", function(s) {
                    return ia(t, s);
                }), V(e.input.getField(), "contextmenu", function(s) {
                    e.scroller.contains(s.target) || ia(t, s);
                });
                var r, n = {
                    end: 0
                };
                function i() {
                    e.activeTouch && (r = setTimeout(function() {
                        return e.activeTouch = null;
                    }, 1e3), (n = e.activeTouch).end = +new Date());
                }
                function o(s) {
                    if (s.touches.length != 1) return !1;
                    var c = s.touches[0];
                    return c.radiusX <= 1 && c.radiusY <= 1;
                }
                function l(s, c) {
                    if (c.left == null) return !0;
                    var d = c.left - s.left, p = c.top - s.top;
                    return d * d + p * p > 400;
                }
                V(e.scroller, "touchstart", function(s) {
                    if (!Wt(t, s) && !o(s) && !no(t, s)) {
                        e.input.ensurePolled(), clearTimeout(r);
                        var c = +new Date();
                        e.activeTouch = {
                            start: c,
                            moved: !1,
                            prev: c - n.end <= 300 ? n : null
                        }, s.touches.length == 1 && (e.activeTouch.left = s.touches[0].pageX, 
                        e.activeTouch.top = s.touches[0].pageY);
                    }
                }), V(e.scroller, "touchmove", function() {
                    e.activeTouch && (e.activeTouch.moved = !0);
                }), V(e.scroller, "touchend", function(s) {
                    var c = e.activeTouch;
                    if (c && !Ke(e, s) && c.left != null && !c.moved && new Date() - c.start < 300) {
                        var d, p = t.coordsChar(e.activeTouch, "page");
                        d = !c.prev || l(c, c.prev) ? new gt(p, p) : !c.prev.prev || l(c, c.prev.prev) ? t.findWordAt(p) : new gt(k(p.line, 0), ot(t.doc, k(p.line + 1, 0))), 
                        t.setSelection(d.anchor, d.head), t.focus(), qt(s);
                    }
                    i();
                }), V(e.scroller, "touchcancel", i), V(e.scroller, "scroll", function() {
                    e.scroller.clientHeight && (cr(t, e.scroller.scrollTop), dn(t, e.scroller.scrollLeft, !0), 
                    Lt(t, "scroll", t));
                }), V(e.scroller, "mousewheel", function(s) {
                    return pl(t, s);
                }), V(e.scroller, "DOMMouseScroll", function(s) {
                    return pl(t, s);
                }), V(e.wrapper, "scroll", function() {
                    return e.wrapper.scrollTop = e.wrapper.scrollLeft = 0;
                }), e.dragFunctions = {
                    enter: function(s) {
                        Wt(t, s) || Re(s);
                    },
                    over: function(s) {
                        Wt(t, s) || (Vs(t, s), Re(s));
                    },
                    start: function(s) {
                        return Us(t, s);
                    },
                    drop: Gt(t, zs),
                    leave: function(s) {
                        Wt(t, s) || Vl(t);
                    }
                };
                var a = e.input.getField();
                V(a, "keyup", function(s) {
                    return Ql.call(t, s);
                }), V(a, "keydown", Gt(t, Jl)), V(a, "keypress", Gt(t, ta)), V(a, "focus", function(s) {
                    return Bi(t, s);
                }), V(a, "blur", function(s) {
                    return Dn(t, s);
                });
            }
            Ot.defaults = la, Ot.optionHandlers = si;
            var ro = [];
            function Mr(t, e, r, n) {
                var i, o = t.doc;
                r == null && (r = "add"), r == "smart" && (o.mode.indent ? i = er(t, e).state : r = "prev");
                var l = t.options.tabSize, a = tt(o, e), s = X(a.text, null, l);
                a.stateAfter && (a.stateAfter = null);
                var c, d = a.text.match(/^\s*/)[0];
                if (n || /\S/.test(a.text)) {
                    if (r == "smart" && ((c = o.mode.indent(i, a.text.slice(d.length), a.text)) == pt || c > 150)) {
                        if (!n) return;
                        r = "prev";
                    }
                } else c = 0, r = "not";
                r == "prev" ? c = e > o.first ? X(tt(o, e - 1).text, null, l) : 0 : r == "add" ? c = s + t.options.indentUnit : r == "subtract" ? c = s - t.options.indentUnit : typeof r == "number" && (c = s + r), 
                c = Math.max(0, c);
                var p = "", w = 0;
                if (t.options.indentWithTabs) for (var x = Math.floor(c / l); x; --x) w += l, 
                p += "\t";
                if (w < c && (p += de(c - w)), p != d) return Bn(o, p, k(e, 0), k(e, d.length), "+input"), 
                a.stateAfter = null, !0;
                for (var T = 0; T < o.sel.ranges.length; T++) {
                    var H = o.sel.ranges[T];
                    if (H.head.line == e && H.head.ch < d.length) {
                        var B = k(e, d.length);
                        qi(o, T, new gt(B, B));
                        break;
                    }
                }
            }
            Ot.defineInitHook = function(t) {
                return ro.push(t);
            };
            var Me = null;
            function ci(t) {
                Me = t;
            }
            function io(t, e, r, n, i) {
                var o = t.doc;
                t.display.shift = !1, n || (n = o.sel);
                var l = +new Date() - 200, a = i == "paste" || t.state.pasteIncoming > l, s = De(e), c = null;
                if (a && n.ranges.length > 1) if (Me && Me.text.join(`
`) == e) {
                    if (n.ranges.length % Me.text.length == 0) {
                        c = [];
                        for (var d = 0; d < Me.text.length; d++) c.push(o.splitLines(Me.text[d]));
                    }
                } else s.length == n.ranges.length && t.options.pasteLinesPerSelection && (c = wn(s, function(j) {
                    return [ j ];
                }));
                for (var p = t.curOp.updateInput, w = n.ranges.length - 1; w >= 0; w--) {
                    var x = n.ranges[w], T = x.from(), H = x.to();
                    x.empty() && (r && r > 0 ? T = k(T.line, T.ch - r) : t.state.overwrite && !a ? H = k(H.line, Math.min(tt(o, H.line).text.length, H.ch + ut(s).length)) : a && Me && Me.lineWise && Me.text.join(`
`) == s.join(`
`) && (T = H = k(T.line, 0)));
                    var B = {
                        from: T,
                        to: H,
                        text: c ? c[w % c.length] : s,
                        origin: i || (a ? "paste" : t.state.cutIncoming > l ? "cut" : "+input")
                    };
                    En(t.doc, B), Kt(t, "inputRead", t, B);
                }
                e && !a && sa(t, e), Hn(t), t.curOp.updateInput < 2 && (t.curOp.updateInput = p), 
                t.curOp.typing = !0, t.state.pasteIncoming = t.state.cutIncoming = -1;
            }
            function aa(t, e) {
                var r = t.clipboardData && t.clipboardData.getData("Text");
                if (r) return t.preventDefault(), e.isReadOnly() || e.options.disableInput || !e.hasFocus() || ue(e, function() {
                    return io(e, r, 0, null, "paste");
                }), !0;
            }
            function sa(t, e) {
                if (t.options.electricChars && t.options.smartIndent) for (var r = t.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
                    var i = r.ranges[n];
                    if (!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) {
                        var o = t.getModeAt(i.head), l = !1;
                        if (o.electricChars) {
                            for (var a = 0; a < o.electricChars.length; a++) if (e.indexOf(o.electricChars.charAt(a)) > -1) {
                                l = Mr(t, i.head.line, "smart");
                                break;
                            }
                        } else o.electricInput && o.electricInput.test(tt(t.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Mr(t, i.head.line, "smart"));
                        l && Kt(t, "electricInput", t, i.head.line);
                    }
                }
            }
            function ca(t) {
                for (var e = [], r = [], n = 0; n < t.doc.sel.ranges.length; n++) {
                    var i = t.doc.sel.ranges[n].head.line, o = {
                        anchor: k(i, 0),
                        head: k(i + 1, 0)
                    };
                    r.push(o), e.push(t.getRange(o.anchor, o.head));
                }
                return {
                    text: e,
                    ranges: r
                };
            }
            function ua(t, e, r, n) {
                t.setAttribute("autocorrect", r ? "" : "off"), t.setAttribute("autocapitalize", n ? "" : "off"), 
                t.setAttribute("spellcheck", !!e);
            }
            function fa() {
                var t = U("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), e = U("div", [ t ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return K ? t.style.width = "1000px" : t.setAttribute("wrap", "off"), 
                b && (t.style.border = "1px solid black"), ua(t), e;
            }
            function dc(t) {
                var e = t.optionHandlers, r = t.helpers = {};
                t.prototype = {
                    constructor: t,
                    focus: function() {
                        Xt(this).focus(), this.display.input.focus();
                    },
                    setOption: function(n, i) {
                        var o = this.options, l = o[n];
                        o[n] == i && n != "mode" || (o[n] = i, e.hasOwnProperty(n) && Gt(this, e[n])(this, i, l), 
                        Lt(this, "optionChange", this, n));
                    },
                    getOption: function(n) {
                        return this.options[n];
                    },
                    getDoc: function() {
                        return this.doc;
                    },
                    addKeyMap: function(n, i) {
                        this.state.keyMaps[i ? "push" : "unshift"](li(n));
                    },
                    removeKeyMap: function(n) {
                        for (var i = this.state.keyMaps, o = 0; o < i.length; ++o) if (i[o] == n || i[o].name == n) return i.splice(o, 1), 
                        !0;
                    },
                    addOverlay: ee(function(n, i) {
                        var o = n.token ? n : t.getMode(this.options, n);
                        if (o.startState) throw new Error("Overlays may not be stateful.");
                        Ar(this.state.overlays, {
                            mode: o,
                            modeSpec: n,
                            opaque: i && i.opaque,
                            priority: i && i.priority || 0
                        }, function(l) {
                            return l.priority;
                        }), this.state.modeGen++, le(this);
                    }),
                    removeOverlay: ee(function(n) {
                        for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
                            var l = i[o].modeSpec;
                            if (l == n || typeof n == "string" && l.name == n) return i.splice(o, 1), 
                            this.state.modeGen++, void le(this);
                        }
                    }),
                    indentLine: ee(function(n, i, o) {
                        typeof i != "string" && typeof i != "number" && (i = i == null ? this.options.smartIndent ? "smart" : "prev" : i ? "add" : "subtract"), 
                        g(this.doc, n) && Mr(this, n, i, o);
                    }),
                    indentSelection: ee(function(n) {
                        for (var i = this.doc.sel.ranges, o = -1, l = 0; l < i.length; l++) {
                            var a = i[l];
                            if (a.empty()) a.head.line > o && (Mr(this, a.head.line, n, !0), 
                            o = a.head.line, l == this.doc.sel.primIndex && Hn(this)); else {
                                var s = a.from(), c = a.to(), d = Math.max(o, s.line);
                                o = Math.min(this.lastLine(), c.line - (c.ch ? 0 : 1)) + 1;
                                for (var p = d; p < o; ++p) Mr(this, p, n);
                                var w = this.doc.sel.ranges;
                                s.ch == 0 && i.length == w.length && w[l].from().ch > 0 && qi(this.doc, l, new gt(s, w[l].to()), xt);
                            }
                        }
                    }),
                    getTokenAt: function(n, i) {
                        return wo(this, n, i);
                    },
                    getLineTokens: function(n, i) {
                        return wo(this, k(n), i, !0);
                    },
                    getTokenTypeAt: function(n) {
                        n = ot(this.doc, n);
                        var i, o = vo(this, tt(this.doc, n.line)), l = 0, a = (o.length - 1) / 2, s = n.ch;
                        if (s == 0) i = o[2]; else for (;;) {
                            var c = l + a >> 1;
                            if ((c ? o[2 * c - 1] : 0) >= s) a = c; else {
                                if (!(o[2 * c + 1] < s)) {
                                    i = o[2 * c + 2];
                                    break;
                                }
                                l = c + 1;
                            }
                        }
                        var d = i ? i.indexOf("overlay ") : -1;
                        return d < 0 ? i : d == 0 ? null : i.slice(0, d - 1);
                    },
                    getModeAt: function(n) {
                        var i = this.doc.mode;
                        return i.innerMode ? t.innerMode(i, this.getTokenAt(n).state).mode : i;
                    },
                    getHelper: function(n, i) {
                        return this.getHelpers(n, i)[0];
                    },
                    getHelpers: function(n, i) {
                        var o = [];
                        if (!r.hasOwnProperty(i)) return o;
                        var l = r[i], a = this.getModeAt(n);
                        if (typeof a[i] == "string") l[a[i]] && o.push(l[a[i]]); else if (a[i]) for (var s = 0; s < a[i].length; s++) {
                            var c = l[a[i][s]];
                            c && o.push(c);
                        } else a.helperType && l[a.helperType] ? o.push(l[a.helperType]) : l[a.name] && o.push(l[a.name]);
                        for (var d = 0; d < l._global.length; d++) {
                            var p = l._global[d];
                            p.pred(a, this) && ct(o, p.val) == -1 && o.push(p.val);
                        }
                        return o;
                    },
                    getStateAfter: function(n, i) {
                        var o = this.doc;
                        return er(this, (n = po(o, n ?? o.first + o.size - 1)) + 1, i).state;
                    },
                    cursorCoords: function(n, i) {
                        var o = this.doc.sel.primary();
                        return Le(this, n == null ? o.head : typeof n == "object" ? ot(this.doc, n) : n ? o.from() : o.to(), i || "page");
                    },
                    charCoords: function(n, i) {
                        return Gr(this, ot(this.doc, n), i || "page");
                    },
                    coordsChar: function(n, i) {
                        return Ni(this, (n = Yo(this, n, i || "page")).left, n.top);
                    },
                    lineAtHeight: function(n, i) {
                        return n = Yo(this, {
                            top: n,
                            left: 0
                        }, i || "page").top, f(this.doc, n + this.display.viewOffset);
                    },
                    heightAtLine: function(n, i, o) {
                        var l, a = !1;
                        if (typeof n == "number") {
                            var s = this.doc.first + this.doc.size - 1;
                            n < this.doc.first ? n = this.doc.first : n > s && (n = s, 
                            a = !0), l = tt(this.doc, n);
                        } else l = n;
                        return Kr(this, l, {
                            top: 0,
                            left: 0
                        }, i || "page", o || a).top + (a ? this.doc.height - je(l) : 0);
                    },
                    defaultTextHeight: function() {
                        return Nn(this.display);
                    },
                    defaultCharWidth: function() {
                        return On(this.display);
                    },
                    getViewport: function() {
                        return {
                            from: this.display.viewFrom,
                            to: this.display.viewTo
                        };
                    },
                    addWidget: function(n, i, o, l, a) {
                        var s = this.display, c = (n = Le(this, ot(this.doc, n))).bottom, d = n.left;
                        if (i.style.position = "absolute", i.setAttribute("cm-ignore-events", "true"), 
                        this.display.input.setUneditable(i), s.sizer.appendChild(i), 
                        l == "over") c = n.top; else if (l == "above" || l == "near") {
                            var p = Math.max(s.wrapper.clientHeight, this.doc.height), w = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                            (l == "above" || n.bottom + i.offsetHeight > p) && n.top > i.offsetHeight ? c = n.top - i.offsetHeight : n.bottom + i.offsetHeight <= p && (c = n.bottom), 
                            d + i.offsetWidth > w && (d = w - i.offsetWidth);
                        }
                        i.style.top = c + "px", i.style.left = i.style.right = "", 
                        a == "right" ? (d = s.sizer.clientWidth - i.offsetWidth, 
                        i.style.right = "0px") : (a == "left" ? d = 0 : a == "middle" && (d = (s.sizer.clientWidth - i.offsetWidth) / 2), 
                        i.style.left = d + "px"), o && us(this, {
                            left: d,
                            top: c,
                            right: d + i.offsetWidth,
                            bottom: c + i.offsetHeight
                        });
                    },
                    triggerOnKeyDown: ee(Jl),
                    triggerOnKeyPress: ee(ta),
                    triggerOnKeyUp: Ql,
                    triggerOnMouseDown: ee(ea),
                    execCommand: function(n) {
                        if (kr.hasOwnProperty(n)) return kr[n].call(null, this);
                    },
                    triggerElectric: ee(function(n) {
                        sa(this, n);
                    }),
                    findPosH: function(n, i, o, l) {
                        var a = 1;
                        i < 0 && (a = -1, i = -i);
                        for (var s = ot(this.doc, n), c = 0; c < i && !(s = oo(this.doc, s, a, o, l)).hitSide; ++c);
                        return s;
                    },
                    moveH: ee(function(n, i) {
                        var o = this;
                        this.extendSelectionsBy(function(l) {
                            return o.display.shift || o.doc.extend || l.empty() ? oo(o.doc, l.head, n, i, o.options.rtlMoveVisually) : n < 0 ? l.from() : l.to();
                        }, Ce);
                    }),
                    deleteH: ee(function(n, i) {
                        var o = this.doc.sel, l = this.doc;
                        o.somethingSelected() ? l.replaceSelection("", null, "+delete") : zn(this, function(a) {
                            var s = oo(l, a.head, n, i, !1);
                            return n < 0 ? {
                                from: s,
                                to: a.head
                            } : {
                                from: a.head,
                                to: s
                            };
                        });
                    }),
                    findPosV: function(n, i, o, l) {
                        var a = 1, s = l;
                        i < 0 && (a = -1, i = -i);
                        for (var c = ot(this.doc, n), d = 0; d < i; ++d) {
                            var p = Le(this, c, "div");
                            if (s == null ? s = p.left : p.left = s, (c = ha(this, p, a, o)).hitSide) break;
                        }
                        return c;
                    },
                    moveV: ee(function(n, i) {
                        var o = this, l = this.doc, a = [], s = !this.display.shift && !l.extend && l.sel.somethingSelected();
                        if (l.extendSelectionsBy(function(d) {
                            if (s) return n < 0 ? d.from() : d.to();
                            var p = Le(o, d.head, "div");
                            d.goalColumn != null && (p.left = d.goalColumn), a.push(p.left);
                            var w = ha(o, p, n, i);
                            return i == "page" && d == l.sel.primary() && Ii(o, Gr(o, w, "div").top - p.top), 
                            w;
                        }, Ce), a.length) for (var c = 0; c < l.sel.ranges.length; c++) l.sel.ranges[c].goalColumn = a[c];
                    }),
                    findWordAt: function(n) {
                        var i = tt(this.doc, n.line).text, o = n.ch, l = n.ch;
                        if (i) {
                            var a = this.getHelper(n, "wordChars");
                            n.sticky != "before" && l != i.length || !o ? ++l : --o;
                            for (var s = i.charAt(o), c = xn(s, a) ? function(d) {
                                return xn(d, a);
                            } : /\s/.test(s) ? function(d) {
                                return /\s/.test(d);
                            } : function(d) {
                                return !/\s/.test(d) && !xn(d);
                            }; o > 0 && c(i.charAt(o - 1)); ) --o;
                            for (;l < i.length && c(i.charAt(l)); ) ++l;
                        }
                        return new gt(k(n.line, o), k(n.line, l));
                    },
                    toggleOverwrite: function(n) {
                        n != null && n == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? Bt(this.display.cursorDiv, "CodeMirror-overwrite") : L(this.display.cursorDiv, "CodeMirror-overwrite"), 
                        Lt(this, "overwriteToggle", this, this.state.overwrite));
                    },
                    hasFocus: function() {
                        return this.display.input.getField() == mt(Mt(this));
                    },
                    isReadOnly: function() {
                        return !(!this.options.readOnly && !this.doc.cantEdit);
                    },
                    scrollTo: ee(function(n, i) {
                        sr(this, n, i);
                    }),
                    getScrollInfo: function() {
                        var n = this.display.scroller;
                        return {
                            left: n.scrollLeft,
                            top: n.scrollTop,
                            height: n.scrollHeight - Ee(this) - this.display.barHeight,
                            width: n.scrollWidth - Ee(this) - this.display.barWidth,
                            clientHeight: Li(this),
                            clientWidth: cn(this)
                        };
                    },
                    scrollIntoView: ee(function(n, i) {
                        n == null ? (n = {
                            from: this.doc.sel.primary().head,
                            to: null
                        }, i == null && (i = this.options.cursorScrollMargin)) : typeof n == "number" ? n = {
                            from: k(n, 0),
                            to: null
                        } : n.from == null && (n = {
                            from: n,
                            to: null
                        }), n.to || (n.to = n.from), n.margin = i || 0, n.from.line != null ? fs(this, n) : il(this, n.from, n.to, n.margin);
                    }),
                    setSize: ee(function(n, i) {
                        var o = this, l = function(s) {
                            return typeof s == "number" || /^\d+$/.test(String(s)) ? s + "px" : s;
                        };
                        n != null && (this.display.wrapper.style.width = l(n)), 
                        i != null && (this.display.wrapper.style.height = l(i)), 
                        this.options.lineWrapping && _o(this);
                        var a = this.display.viewFrom;
                        this.doc.iter(a, this.display.viewTo, function(s) {
                            if (s.widgets) {
                                for (var c = 0; c < s.widgets.length; c++) if (s.widgets[c].noHScroll) {
                                    Je(o, a, "widget");
                                    break;
                                }
                            }
                            ++a;
                        }), this.curOp.forceUpdate = !0, Lt(this, "refresh", this);
                    }),
                    operation: function(n) {
                        return ue(this, n);
                    },
                    startOperation: function() {
                        return gn(this);
                    },
                    endOperation: function() {
                        return mn(this);
                    },
                    refresh: ee(function() {
                        var n = this.display.cachedTextHeight;
                        le(this), this.curOp.forceUpdate = !0, lr(this), sr(this, this.doc.scrollLeft, this.doc.scrollTop), 
                        Vi(this.display), (n == null || Math.abs(n - Nn(this.display)) > .5 || this.options.lineWrapping) && Wi(this), 
                        Lt(this, "refresh", this);
                    }),
                    swapDoc: ee(function(n) {
                        var i = this.doc;
                        return i.cm = null, this.state.selectingText && this.state.selectingText(), 
                        yl(this, n), lr(this), this.display.input.reset(), sr(this, n.scrollLeft, n.scrollTop), 
                        this.curOp.forceScroll = !0, Kt(this, "swapDoc", this, i), 
                        i;
                    }),
                    phrase: function(n) {
                        var i = this.options.phrases;
                        return i && Object.prototype.hasOwnProperty.call(i, n) ? i[n] : n;
                    },
                    getInputField: function() {
                        return this.display.input.getField();
                    },
                    getWrapperElement: function() {
                        return this.display.wrapper;
                    },
                    getScrollerElement: function() {
                        return this.display.scroller;
                    },
                    getGutterElement: function() {
                        return this.display.gutters;
                    }
                }, te(t), t.registerHelper = function(n, i, o) {
                    r.hasOwnProperty(n) || (r[n] = t[n] = {
                        _global: []
                    }), r[n][i] = o;
                }, t.registerGlobalHelper = function(n, i, o, l) {
                    t.registerHelper(n, i, l), r[n]._global.push({
                        pred: o,
                        val: l
                    });
                };
            }
            function oo(t, e, r, n, i) {
                var o = e, l = r, a = tt(t, e.line), s = i && t.direction == "rtl" ? -r : r;
                function c() {
                    var $ = e.line + s;
                    return !($ < t.first || $ >= t.first + t.size) && (e = new k($, e.ch, e.sticky), 
                    a = tt(t, $));
                }
                function d($) {
                    var I;
                    if (n == "codepoint") {
                        var J = a.text.charCodeAt(e.ch + (r > 0 ? 0 : -1));
                        if (isNaN(J)) I = null; else {
                            var q = r > 0 ? J >= 55296 && J < 56320 : J >= 56320 && J < 57343;
                            I = new k(e.line, Math.max(0, Math.min(a.text.length, e.ch + r * (q ? 2 : 1))), -r);
                        }
                    } else I = i ? Xs(t.cm, a, e, r) : Ji(a, e, r);
                    if (I == null) {
                        if ($ || !c()) return !1;
                        e = Qi(i, t.cm, a, e.line, s);
                    } else e = I;
                    return !0;
                }
                if (n == "char" || n == "codepoint") d(); else if (n == "column") d(!0); else if (n == "word" || n == "group") for (var p = null, w = n == "group", x = t.cm && t.cm.getHelper(e, "wordChars"), T = !0; !(r < 0) || d(!T); T = !1) {
                    var H = a.text.charAt(e.ch) || `
`, B = xn(H, x) ? "w" : w && H == `
` ? "n" : !w || /\s/.test(H) ? null : "p";
                    if (!w || T || B || (B = "s"), p && p != B) {
                        r < 0 && (r = 1, d(), e.sticky = "after");
                        break;
                    }
                    if (B && (p = B), r > 0 && !d(!T)) break;
                }
                var j = ri(t, e, o, l, !0);
                return ft(o, j) && (j.hitSide = !0), j;
            }
            function ha(t, e, r, n) {
                var i, o, l = t.doc, a = e.left;
                if (n == "page") {
                    var s = Math.min(t.display.wrapper.clientHeight, Xt(t).innerHeight || l(t).documentElement.clientHeight), c = Math.max(s - .5 * Nn(t.display), 3);
                    i = (r > 0 ? e.bottom : e.top) + r * c;
                } else n == "line" && (i = r > 0 ? e.bottom + 3 : e.top - 3);
                for (;(o = Ni(t, a, i)).outside; ) {
                    if (r < 0 ? i <= 0 : i >= l.height) {
                        o.hitSide = !0;
                        break;
                    }
                    i += 5 * r;
                }
                return o;
            }
            var bt = function(t) {
                this.cm = t, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, 
                this.polling = new lt(), this.composing = null, this.gracePeriod = !1, 
                this.readDOMTimeout = null;
            };
            function da(t, e) {
                var r = Ti(t, e.line);
                if (!r || r.hidden) return null;
                var n = tt(t.doc, e.line), i = Uo(r, n, e.line), o = ve(n, t.doc.direction), l = "left";
                o && (l = me(o, e.ch) % 2 ? "right" : "left");
                var a = Ko(i.map, e.ch, l);
                return a.offset = a.collapse == "right" ? a.end : a.start, a;
            }
            function pc(t) {
                for (var e = t; e; e = e.parentNode) if (/CodeMirror-gutter-wrapper/.test(e.className)) return !0;
                return !1;
            }
            function Vn(t, e) {
                return e && (t.bad = !0), t;
            }
            function gc(t, e, r, n, i) {
                var o = "", l = !1, a = t.doc.lineSeparator(), s = !1;
                function c(x) {
                    return function(T) {
                        return T.id == x;
                    };
                }
                function d() {
                    l && (o += a, s && (o += a), l = s = !1);
                }
                function p(x) {
                    x && (d(), o += x);
                }
                function w(x) {
                    if (x.nodeType == 1) {
                        var T = x.getAttribute("cm-text");
                        if (T) return void p(T);
                        var H, B = x.getAttribute("cm-marker");
                        if (B) {
                            var j = t.findMarks(k(n, 0), k(i + 1, 0), c(+B));
                            return void (j.length && (H = j[0].find(0)) && p(Fe(t.doc, H.from, H.to).join(a)));
                        }
                        if (x.getAttribute("contenteditable") == "false") return;
                        var $ = /^(pre|div|p|li|table|br)$/i.test(x.nodeName);
                        if (!/^br$/i.test(x.nodeName) && x.textContent.length == 0) return;
                        $ && d();
                        for (var I = 0; I < x.childNodes.length; I++) w(x.childNodes[I]);
                        /^(pre|p)$/i.test(x.nodeName) && (s = !0), $ && (l = !0);
                    } else x.nodeType == 3 && p(x.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                }
                for (;w(e), e != r; ) e = e.nextSibling, s = !1;
                return o;
            }
            function ui(t, e, r) {
                var n;
                if (e == t.display.lineDiv) {
                    if (!(n = t.display.lineDiv.childNodes[r])) return Vn(t.clipPos(k(t.display.viewTo - 1)), !0);
                    e = null, r = 0;
                } else for (n = e; ;n = n.parentNode) {
                    if (!n || n == t.display.lineDiv) return null;
                    if (n.parentNode && n.parentNode == t.display.lineDiv) break;
                }
                for (var i = 0; i < t.display.view.length; i++) {
                    var o = t.display.view[i];
                    if (o.node == n) return mc(o, e, r);
                }
            }
            function mc(t, e, r) {
                var n = t.text.firstChild, i = !1;
                if (!e || !St(n, e)) return Vn(k(ht(t.line), 0), !0);
                if (e == n && (i = !0, e = n.childNodes[r], r = 0, !e)) {
                    var o = t.rest ? ut(t.rest) : t.line;
                    return Vn(k(ht(o), o.text.length), i);
                }
                var l = e.nodeType == 3 ? e : null, a = e;
                for (l || e.childNodes.length != 1 || e.firstChild.nodeType != 3 || (l = e.firstChild, 
                r && (r = l.nodeValue.length)); a.parentNode != n; ) a = a.parentNode;
                var s = t.measure, c = s.maps;
                function d(B, j, $) {
                    for (var I = -1; I < (c ? c.length : 0); I++) for (var J = I < 0 ? s.map : c[I], q = 0; q < J.length; q += 3) {
                        var et = J[q + 2];
                        if (et == B || et == j) {
                            var Ct = ht(I < 0 ? t.line : t.rest[I]), kt = J[q] + $;
                            return ($ < 0 || et != B) && (kt = J[q + ($ ? 1 : 0)]), 
                            k(Ct, kt);
                        }
                    }
                }
                var p = d(l, a, r);
                if (p) return Vn(p, i);
                for (var w = a.nextSibling, x = l ? l.nodeValue.length - r : 0; w; w = w.nextSibling) {
                    if (p = d(w, w.firstChild, 0)) return Vn(k(p.line, p.ch - x), i);
                    x += w.textContent.length;
                }
                for (var T = a.previousSibling, H = r; T; T = T.previousSibling) {
                    if (p = d(T, T.firstChild, -1)) return Vn(k(p.line, p.ch + H), i);
                    H += T.textContent.length;
                }
            }
            bt.prototype.init = function(t) {
                var e = this, r = this, n = r.cm, i = r.div = t.lineDiv;
                function o(a) {
                    for (var s = a.target; s; s = s.parentNode) {
                        if (s == i) return !0;
                        if (/\bCodeMirror-(?:line)?widget\b/.test(s.className)) break;
                    }
                    return !1;
                }
                function l(a) {
                    if (o(a) && !Wt(n, a)) {
                        if (n.somethingSelected()) ci({
                            lineWise: !1,
                            text: n.getSelections()
                        }), a.type == "cut" && n.replaceSelection("", null, "cut"); else {
                            if (!n.options.lineWiseCopyCut) return;
                            var s = ca(n);
                            ci({
                                lineWise: !0,
                                text: s.text
                            }), a.type == "cut" && n.operation(function() {
                                n.setSelections(s.ranges, 0, xt), n.replaceSelection("", null, "cut");
                            });
                        }
                        if (a.clipboardData) {
                            a.clipboardData.clearData();
                            var c = Me.text.join(`
`);
                            if (a.clipboardData.setData("Text", c), a.clipboardData.getData("Text") == c) return void a.preventDefault();
                        }
                        var d = fa(), p = d.firstChild;
                        n.display.lineSpace.insertBefore(d, n.display.lineSpace.firstChild), 
                        p.value = Me.text.join(`
`);
                        var w = mt(i.ownerDocument);
                        $t(p), setTimeout(function() {
                            n.display.lineSpace.removeChild(d), w.focus(), w == i && r.showPrimarySelection();
                        }, 50);
                    }
                }
                i.contentEditable = !0, ua(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize), 
                V(i, "paste", function(a) {
                    !o(a) || Wt(n, a) || aa(a, n) || Y <= 11 && setTimeout(Gt(n, function() {
                        return e.updateFromDOM();
                    }), 20);
                }), V(i, "compositionstart", function(a) {
                    e.composing = {
                        data: a.data,
                        done: !1
                    };
                }), V(i, "compositionupdate", function(a) {
                    e.composing || (e.composing = {
                        data: a.data,
                        done: !1
                    });
                }), V(i, "compositionend", function(a) {
                    e.composing && (a.data != e.composing.data && e.readFromDOMSoon(), 
                    e.composing.done = !0);
                }), V(i, "touchstart", function() {
                    return r.forceCompositionEnd();
                }), V(i, "input", function() {
                    e.composing || e.readFromDOMSoon();
                }), V(i, "copy", l), V(i, "cut", l);
            }, bt.prototype.screenReaderLabelChanged = function(t) {
                t ? this.div.setAttribute("aria-label", t) : this.div.removeAttribute("aria-label");
            }, bt.prototype.prepareSelection = function() {
                var t = el(this.cm, !1);
                return t.focus = mt(this.div.ownerDocument) == this.div, t;
            }, bt.prototype.showSelection = function(t, e) {
                t && this.cm.display.view.length && ((t.focus || e) && this.showPrimarySelection(), 
                this.showMultipleSelections(t));
            }, bt.prototype.getSelection = function() {
                return this.cm.display.wrapper.ownerDocument.getSelection();
            }, bt.prototype.showPrimarySelection = function() {
                var t = this.getSelection(), e = this.cm, r = e.doc.sel.primary(), n = r.from(), i = r.to();
                if (e.display.viewTo == e.display.viewFrom || n.line >= e.display.viewTo || i.line < e.display.viewFrom) t.removeAllRanges(); else {
                    var o = ui(e, t.anchorNode, t.anchorOffset), l = ui(e, t.focusNode, t.focusOffset);
                    if (!o || o.bad || !l || l.bad || W(oe(o, l), n) != 0 || W(Vt(o, l), i) != 0) {
                        var a = e.display.view, s = n.line >= e.display.viewFrom && da(e, n) || {
                            node: a[0].measure.map[2],
                            offset: 0
                        }, c = i.line < e.display.viewTo && da(e, i);
                        if (!c) {
                            var d = a[a.length - 1].measure, p = d.maps ? d.maps[d.maps.length - 1] : d.map;
                            c = {
                                node: p[p.length - 1],
                                offset: p[p.length - 2] - p[p.length - 3]
                            };
                        }
                        if (s && c) {
                            var w, x = t.rangeCount && t.getRangeAt(0);
                            try {
                                w = z(s.node, s.offset, c.offset, c.node);
                            } catch {}
                            w && (!E && e.state.focused ? (t.collapse(s.node, s.offset), 
                            w.collapsed || (t.removeAllRanges(), t.addRange(w))) : (t.removeAllRanges(), 
                            t.addRange(w)), x && t.anchorNode == null ? t.addRange(x) : E && this.startGracePeriod()), 
                            this.rememberSelection();
                        } else t.removeAllRanges();
                    }
                }
            }, bt.prototype.startGracePeriod = function() {
                var t = this;
                clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
                    t.gracePeriod = !1, t.selectionChanged() && t.cm.operation(function() {
                        return t.cm.curOp.selectionChanged = !0;
                    });
                }, 20);
            }, bt.prototype.showMultipleSelections = function(t) {
                v(this.cm.display.cursorDiv, t.cursors), v(this.cm.display.selectionDiv, t.selection);
            }, bt.prototype.rememberSelection = function() {
                var t = this.getSelection();
                this.lastAnchorNode = t.anchorNode, this.lastAnchorOffset = t.anchorOffset, 
                this.lastFocusNode = t.focusNode, this.lastFocusOffset = t.focusOffset;
            }, bt.prototype.selectionInEditor = function() {
                var t = this.getSelection();
                if (!t.rangeCount) return !1;
                var e = t.getRangeAt(0).commonAncestorContainer;
                return St(this.div, e);
            }, bt.prototype.focus = function() {
                this.cm.options.readOnly != "nocursor" && (this.selectionInEditor() && mt(this.div.ownerDocument) == this.div || this.showSelection(this.prepareSelection(), !0), 
                this.div.focus());
            }, bt.prototype.blur = function() {
                this.div.blur();
            }, bt.prototype.getField = function() {
                return this.div;
            }, bt.prototype.supportsTouch = function() {
                return !0;
            }, bt.prototype.receivedFocus = function() {
                var t = this, e = this;
                function r() {
                    e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, r));
                }
                this.selectionInEditor() ? setTimeout(function() {
                    return t.pollSelection();
                }, 20) : ue(this.cm, function() {
                    return e.cm.curOp.selectionChanged = !0;
                }), this.polling.set(this.cm.options.pollInterval, r);
            }, bt.prototype.selectionChanged = function() {
                var t = this.getSelection();
                return t.anchorNode != this.lastAnchorNode || t.anchorOffset != this.lastAnchorOffset || t.focusNode != this.lastFocusNode || t.focusOffset != this.lastFocusOffset;
            }, bt.prototype.pollSelection = function() {
                if (this.readDOMTimeout == null && !this.gracePeriod && this.selectionChanged()) {
                    var t = this.getSelection(), e = this.cm;
                    if (C && M && this.cm.display.gutterSpecs.length && pc(t.anchorNode)) return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }), this.blur(), void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var r = ui(e, t.anchorNode, t.anchorOffset), n = ui(e, t.focusNode, t.focusOffset);
                        r && n && ue(e, function() {
                            Zt(e.doc, tn(r, n), xt), (r.bad || n.bad) && (e.curOp.selectionChanged = !0);
                        });
                    }
                }
            }, bt.prototype.pollContent = function() {
                this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), 
                this.readDOMTimeout = null);
                var t, e, r, n = this.cm, i = n.display, o = n.doc.sel.primary(), l = o.from(), a = o.to();
                if (l.ch == 0 && l.line > n.firstLine() && (l = k(l.line - 1, tt(n.doc, l.line - 1).length)), 
                a.ch == tt(n.doc, a.line).text.length && a.line < n.lastLine() && (a = k(a.line + 1, 0)), 
                l.line < i.viewFrom || a.line > i.viewTo - 1) return !1;
                l.line == i.viewFrom || (t = hn(n, l.line)) == 0 ? (e = ht(i.view[0].line), 
                r = i.view[0].node) : (e = ht(i.view[t].line), r = i.view[t - 1].node.nextSibling);
                var s, c, d = hn(n, a.line);
                if (d == i.view.length - 1 ? (s = i.viewTo - 1, c = i.lineDiv.lastChild) : (s = ht(i.view[d + 1].line) - 1, 
                c = i.view[d + 1].node.previousSibling), !r) return !1;
                for (var p = n.doc.splitLines(gc(n, r, c, e, s)), w = Fe(n.doc, k(e, 0), k(s, tt(n.doc, s).text.length)); p.length > 1 && w.length > 1; ) if (ut(p) == ut(w)) p.pop(), 
                w.pop(), s--; else {
                    if (p[0] != w[0]) break;
                    p.shift(), w.shift(), e++;
                }
                for (var x = 0, T = 0, H = p[0], B = w[0], j = Math.min(H.length, B.length); x < j && H.charCodeAt(x) == B.charCodeAt(x); ) ++x;
                for (var $ = ut(p), I = ut(w), J = Math.min($.length - (p.length == 1 ? x : 0), I.length - (w.length == 1 ? x : 0)); T < J && $.charCodeAt($.length - T - 1) == I.charCodeAt(I.length - T - 1); ) ++T;
                if (p.length == 1 && w.length == 1 && e == l.line) for (;x && x > l.ch && $.charCodeAt($.length - T - 1) == I.charCodeAt(I.length - T - 1); ) x--, 
                T++;
                p[p.length - 1] = $.slice(0, $.length - T).replace(/^\u200b+/, ""), 
                p[0] = p[0].slice(x).replace(/\u200b+$/, "");
                var q = k(e, x), et = k(s, w.length ? ut(w).length - T : 0);
                return p.length > 1 || p[0] || W(q, et) ? (Bn(n.doc, p, q, et, "+input"), 
                !0) : void 0;
            }, bt.prototype.ensurePolled = function() {
                this.forceCompositionEnd();
            }, bt.prototype.reset = function() {
                this.forceCompositionEnd();
            }, bt.prototype.forceCompositionEnd = function() {
                this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, 
                this.updateFromDOM(), this.div.blur(), this.div.focus());
            }, bt.prototype.readFromDOMSoon = function() {
                var t = this;
                this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
                    if (t.readDOMTimeout = null, t.composing) {
                        if (!t.composing.done) return;
                        t.composing = null;
                    }
                    t.updateFromDOM();
                }, 80));
            }, bt.prototype.updateFromDOM = function() {
                var t = this;
                !this.cm.isReadOnly() && this.pollContent() || ue(this.cm, function() {
                    return le(t.cm);
                });
            }, bt.prototype.setUneditable = function(t) {
                t.contentEditable = "false";
            }, bt.prototype.onKeyPress = function(t) {
                t.charCode == 0 || this.composing || (t.preventDefault(), this.cm.isReadOnly() || Gt(this.cm, io)(this.cm, String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), 0));
            }, bt.prototype.readOnlyChanged = function(t) {
                this.div.contentEditable = String(t != "nocursor");
            }, bt.prototype.onContextMenu = function() {}, bt.prototype.resetPosition = function() {}, 
            bt.prototype.needsContentAttribute = !0;
            var Pt = function(t) {
                this.cm = t, this.prevInput = "", this.pollingFast = !1, this.polling = new lt(), 
                this.hasSelection = !1, this.composing = null, this.resetting = !1;
            };
            function vc(t, e) {
                if ((e = e ? nt(e) : {}).value = t.value, !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex), 
                !e.placeholder && t.placeholder && (e.placeholder = t.placeholder), 
                e.autofocus == null) {
                    var r = mt(t.ownerDocument);
                    e.autofocus = r == t || t.getAttribute("autofocus") != null && r == document.body;
                }
                function n() {
                    t.value = a.getValue();
                }
                var i;
                if (t.form && (V(t.form, "submit", n), !e.leaveSubmitMethodAlone)) {
                    var o = t.form;
                    i = o.submit;
                    try {
                        var l = o.submit = function() {
                            n(), o.submit = i, o.submit(), o.submit = l;
                        };
                    } catch {}
                }
                e.finishInit = function(s) {
                    s.save = n, s.getTextArea = function() {
                        return t;
                    }, s.toTextArea = function() {
                        s.toTextArea = isNaN, n(), t.parentNode.removeChild(s.getWrapperElement()), 
                        t.style.display = "", t.form && (Yt(t.form, "submit", n), 
                        e.leaveSubmitMethodAlone || typeof t.form.submit != "function" || (t.form.submit = i));
                    };
                }, t.style.display = "none";
                var a = Ot(function(s) {
                    return t.parentNode.insertBefore(s, t.nextSibling);
                }, e);
                return a;
            }
            function yc(t) {
                t.off = Yt, t.on = V, t.wheelEventPixels = Ls, t.Doc = ae, t.splitLines = De, 
                t.countColumn = X, t.findColumn = Dt, t.isWordChar = Gn, t.Pass = pt, 
                t.signal = Lt, t.Line = Tn, t.changeEnd = en, t.scrollbarModel = al, 
                t.Pos = k, t.cmpPos = W, t.modes = Jn, t.mimeModes = ze, t.resolveMode = We, 
                t.getMode = Qn, t.modeExtensions = Ue, t.extendMode = gi, t.copyState = be, 
                t.startState = Pr, t.innerMode = Ln, t.commands = kr, t.keyMap = _e, 
                t.keyName = $l, t.isModifierKey = Gl, t.lookupKey = In, t.normalizeKeyMap = $s, 
                t.StringStream = Nt, t.SharedTextMarker = wr, t.TextMarker = rn, 
                t.LineWidget = br, t.e_preventDefault = qt, t.e_stopPropagation = sn, 
                t.e_stop = Re, t.addClass = Bt, t.contains = St, t.rmClass = L, 
                t.keyNames = on;
            }
            Pt.prototype.init = function(t) {
                var e = this, r = this, n = this.cm;
                this.createField(t);
                var i = this.textarea;
                function o(l) {
                    if (!Wt(n, l)) {
                        if (n.somethingSelected()) ci({
                            lineWise: !1,
                            text: n.getSelections()
                        }); else {
                            if (!n.options.lineWiseCopyCut) return;
                            var a = ca(n);
                            ci({
                                lineWise: !0,
                                text: a.text
                            }), l.type == "cut" ? n.setSelections(a.ranges, null, xt) : (r.prevInput = "", 
                            i.value = a.text.join(`
`), $t(i));
                        }
                        l.type == "cut" && (n.state.cutIncoming = +new Date());
                    }
                }
                t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild), b && (i.style.width = "0px"), 
                V(i, "input", function() {
                    Q && Y >= 9 && e.hasSelection && (e.hasSelection = null), r.poll();
                }), V(i, "paste", function(l) {
                    Wt(n, l) || aa(l, n) || (n.state.pasteIncoming = +new Date(), 
                    r.fastPoll());
                }), V(i, "cut", o), V(i, "copy", o), V(t.scroller, "paste", function(l) {
                    if (!Ke(t, l) && !Wt(n, l)) {
                        if (!i.dispatchEvent) return n.state.pasteIncoming = +new Date(), 
                        void r.focus();
                        var a = new Event("paste");
                        a.clipboardData = l.clipboardData, i.dispatchEvent(a);
                    }
                }), V(t.lineSpace, "selectstart", function(l) {
                    Ke(t, l) || qt(l);
                }), V(i, "compositionstart", function() {
                    var l = n.getCursor("from");
                    r.composing && r.composing.range.clear(), r.composing = {
                        start: l,
                        range: n.markText(l, n.getCursor("to"), {
                            className: "CodeMirror-composing"
                        })
                    };
                }), V(i, "compositionend", function() {
                    r.composing && (r.poll(), r.composing.range.clear(), r.composing = null);
                });
            }, Pt.prototype.createField = function(t) {
                this.wrapper = fa(), this.textarea = this.wrapper.firstChild;
            }, Pt.prototype.screenReaderLabelChanged = function(t) {
                t ? this.textarea.setAttribute("aria-label", t) : this.textarea.removeAttribute("aria-label");
            }, Pt.prototype.prepareSelection = function() {
                var t = this.cm, e = t.display, r = t.doc, n = el(t);
                if (t.options.moveInputWithCursor) {
                    var i = Le(t, r.sel.primary().head, "div"), o = e.wrapper.getBoundingClientRect(), l = e.lineDiv.getBoundingClientRect();
                    n.teTop = Math.max(0, Math.min(e.wrapper.clientHeight - 10, i.top + l.top - o.top)), 
                    n.teLeft = Math.max(0, Math.min(e.wrapper.clientWidth - 10, i.left + l.left - o.left));
                }
                return n;
            }, Pt.prototype.showSelection = function(t) {
                var e = this.cm.display;
                v(e.cursorDiv, t.cursors), v(e.selectionDiv, t.selection), t.teTop != null && (this.wrapper.style.top = t.teTop + "px", 
                this.wrapper.style.left = t.teLeft + "px");
            }, Pt.prototype.reset = function(t) {
                if (!(this.contextMenuPending || this.composing && t)) {
                    var e = this.cm;
                    if (this.resetting = !0, e.somethingSelected()) {
                        this.prevInput = "";
                        var r = e.getSelection();
                        this.textarea.value = r, e.state.focused && $t(this.textarea), 
                        Q && Y >= 9 && (this.hasSelection = r);
                    } else t || (this.prevInput = this.textarea.value = "", Q && Y >= 9 && (this.hasSelection = null));
                    this.resetting = !1;
                }
            }, Pt.prototype.getField = function() {
                return this.textarea;
            }, Pt.prototype.supportsTouch = function() {
                return !1;
            }, Pt.prototype.focus = function() {
                if (this.cm.options.readOnly != "nocursor" && (!u || mt(this.textarea.ownerDocument) != this.textarea)) try {
                    this.textarea.focus();
                } catch {}
            }, Pt.prototype.blur = function() {
                this.textarea.blur();
            }, Pt.prototype.resetPosition = function() {
                this.wrapper.style.top = this.wrapper.style.left = 0;
            }, Pt.prototype.receivedFocus = function() {
                this.slowPoll();
            }, Pt.prototype.slowPoll = function() {
                var t = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
                    t.poll(), t.cm.state.focused && t.slowPoll();
                });
            }, Pt.prototype.fastPoll = function() {
                var t = !1, e = this;
                function r() {
                    e.poll() || t ? (e.pollingFast = !1, e.slowPoll()) : (t = !0, 
                    e.polling.set(60, r));
                }
                e.pollingFast = !0, e.polling.set(20, r);
            }, Pt.prototype.poll = function() {
                var t = this, e = this.cm, r = this.textarea, n = this.prevInput;
                if (this.contextMenuPending || this.resetting || !e.state.focused || He(r) && !n && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq) return !1;
                var i = r.value;
                if (i == n && !e.somethingSelected()) return !1;
                if (Q && Y >= 9 && this.hasSelection === i || h && /[\uf700-\uf7ff]/.test(i)) return e.display.input.reset(), 
                !1;
                if (e.doc.sel == e.display.selForContextMenu) {
                    var o = i.charCodeAt(0);
                    if (o != 8203 || n || (n = "​"), o == 8666) return this.reset(), 
                    this.cm.execCommand("undo");
                }
                for (var l = 0, a = Math.min(n.length, i.length); l < a && n.charCodeAt(l) == i.charCodeAt(l); ) ++l;
                return ue(e, function() {
                    io(e, i.slice(l), n.length - l, null, t.composing ? "*compose" : null), 
                    i.length > 1e3 || i.indexOf(`
`) > -1 ? r.value = t.prevInput = "" : t.prevInput = i, t.composing && (t.composing.range.clear(), 
                    t.composing.range = e.markText(t.composing.start, e.getCursor("to"), {
                        className: "CodeMirror-composing"
                    }));
                }), !0;
            }, Pt.prototype.ensurePolled = function() {
                this.pollingFast && this.poll() && (this.pollingFast = !1);
            }, Pt.prototype.onKeyPress = function() {
                Q && Y >= 9 && (this.hasSelection = null), this.fastPoll();
            }, Pt.prototype.onContextMenu = function(t) {
                var e = this, r = e.cm, n = r.display, i = e.textarea;
                e.contextMenuPending && e.contextMenuPending();
                var o = fn(r, t), l = n.scroller.scrollTop;
                if (o && !Z) {
                    r.options.resetSelectionOnContextMenu && r.doc.sel.contains(o) == -1 && Gt(r, Zt)(r.doc, tn(o), xt);
                    var a, s = i.style.cssText, c = e.wrapper.style.cssText, d = e.wrapper.offsetParent.getBoundingClientRect();
                    if (e.wrapper.style.cssText = "position: static", i.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (t.clientY - d.top - 5) + "px; left: " + (t.clientX - d.left - 5) + `px;
      z-index: 1000; background: ` + (Q ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`, 
                    K && (a = i.ownerDocument.defaultView.scrollY), n.input.focus(), 
                    K && i.ownerDocument.defaultView.scrollTo(null, a), n.input.reset(), 
                    r.somethingSelected() || (i.value = e.prevInput = " "), e.contextMenuPending = x, 
                    n.selForContextMenu = r.doc.sel, clearTimeout(n.detectingSelectAll), 
                    Q && Y >= 9 && w(), P) {
                        Re(t);
                        var p = function() {
                            Yt(window, "mouseup", p), setTimeout(x, 20);
                        };
                        V(window, "mouseup", p);
                    } else setTimeout(x, 50);
                }
                function w() {
                    if (i.selectionStart != null) {
                        var T = r.somethingSelected(), H = "​" + (T ? i.value : "");
                        i.value = "⇚", i.value = H, e.prevInput = T ? "" : "​", 
                        i.selectionStart = 1, i.selectionEnd = H.length, n.selForContextMenu = r.doc.sel;
                    }
                }
                function x() {
                    if (e.contextMenuPending == x && (e.contextMenuPending = !1, 
                    e.wrapper.style.cssText = c, i.style.cssText = s, Q && Y < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = l), 
                    i.selectionStart != null)) {
                        (!Q || Q && Y < 9) && w();
                        var T = 0, H = function() {
                            n.selForContextMenu == r.doc.sel && i.selectionStart == 0 && i.selectionEnd > 0 && e.prevInput == "​" ? Gt(r, Dl)(r) : T++ < 10 ? n.detectingSelectAll = setTimeout(H, 500) : (n.selForContextMenu = null, 
                            n.input.reset());
                        };
                        n.detectingSelectAll = setTimeout(H, 200);
                    }
                }
            }, Pt.prototype.readOnlyChanged = function(t) {
                t || this.reset(), this.textarea.disabled = t == "nocursor", this.textarea.readOnly = !!t;
            }, Pt.prototype.setUneditable = function() {}, Pt.prototype.needsContentAttribute = !1, 
            cc(Ot), dc(Ot);
            var bc = "iter insert remove copy getEditor constructor".split(" ");
            for (var fi in ae.prototype) ae.prototype.hasOwnProperty(fi) && ct(bc, fi) < 0 && (Ot.prototype[fi] = function(t) {
                return function() {
                    return t.apply(this.doc, arguments);
                };
            }(ae.prototype[fi]));
            return te(ae), Ot.inputStyles = {
                textarea: Pt,
                contenteditable: bt
            }, Ot.defineMode = function(t) {
                Ot.defaults.mode || t == "null" || (Ot.defaults.mode = t), Sn.apply(this, arguments);
            }, Ot.defineMIME = ke, Ot.defineMode("null", function() {
                return {
                    token: function(t) {
                        return t.skipToEnd();
                    }
                };
            }), Ot.defineMIME("text/plain", "null"), Ot.defineExtension = function(t, e) {
                Ot.prototype[t] = e;
            }, Ot.defineDocExtension = function(t, e) {
                ae.prototype[t] = e;
            }, Ot.fromTextArea = vc, yc(Ot), Ot.version = "5.65.9", Ot;
        }()), fo.exports;
    }
    const ma = wc(Xe());
    (function(O) {
        var G = /MSIE \d/.test(navigator.userAgent) && (document.documentMode == null || document.documentMode < 8), E = O.Pos, _ = {
            "(": ")>",
            ")": "(<",
            "[": "]>",
            "]": "[<",
            "{": "}>",
            "}": "{<",
            "<": ">>",
            ">": "<<"
        };
        function rt(M) {
            return M && M.bracketRegex || /[(){}[\]]/;
        }
        function at(M, it, Z) {
            var vt = M.getLineHandle(it.line), dt = it.ch - 1, D = Z && Z.afterCursor;
            D == null && (D = /(^| )cm-fat-cursor($| )/.test(M.getWrapperElement().className));
            var b = rt(Z), C = !D && dt >= 0 && b.test(vt.text.charAt(dt)) && _[vt.text.charAt(dt)] || b.test(vt.text.charAt(dt + 1)) && _[vt.text.charAt(++dt)];
            if (!C) return null;
            var u = C.charAt(1) == ">" ? 1 : -1;
            if (Z && Z.strict && u > 0 != (dt == it.ch)) return null;
            var h = M.getTokenTypeAt(E(it.line, dt + 1)), m = Q(M, E(it.line, dt + (u > 0 ? 1 : 0)), u, h, Z);
            return m == null ? null : {
                from: E(it.line, dt),
                to: m && m.pos,
                match: m && m.ch == C.charAt(0),
                forward: u > 0
            };
        }
        function Q(M, it, Z, vt, dt) {
            for (var D = dt && dt.maxScanLineLength || 1e4, b = dt && dt.maxScanLines || 1e3, C = [], u = rt(dt), h = Z > 0 ? Math.min(it.line + b, M.lastLine() + 1) : Math.max(M.firstLine() - 1, it.line - b), m = it.line; m != h; m += Z) {
                var y = M.getLine(m);
                if (y) {
                    var S = Z > 0 ? 0 : y.length - 1, N = Z > 0 ? y.length : -1;
                    if (!(y.length > D)) for (m == it.line && (S = it.ch - (Z < 0 ? 1 : 0)); S != N; S += Z) {
                        var P = y.charAt(S);
                        if (u.test(P) && (vt === void 0 || (M.getTokenTypeAt(E(m, S + 1)) || "") == (vt || ""))) {
                            var F = _[P];
                            if (F && F.charAt(1) == ">" == Z > 0) C.push(P); else {
                                if (!C.length) return {
                                    pos: E(m, S),
                                    ch: P
                                };
                                C.pop();
                            }
                        }
                    }
                }
            }
            return m - Z != (Z > 0 ? M.lastLine() : M.firstLine()) && null;
        }
        function Y(M, it, Z) {
            for (var vt = M.state.matchBrackets.maxHighlightLineLength || 1e3, dt = Z && Z.highlightNonMatching, D = [], b = M.listSelections(), C = 0; C < b.length; C++) {
                var u = b[C].empty() && at(M, b[C].head, Z);
                if (u && (u.match || dt !== !1) && M.getLine(u.from.line).length <= vt) {
                    var h = u.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                    D.push(M.markText(u.from, E(u.from.line, u.from.ch + 1), {
                        className: h
                    })), u.to && M.getLine(u.to.line).length <= vt && D.push(M.markText(u.to, E(u.to.line, u.to.ch + 1), {
                        className: h
                    }));
                }
            }
            if (D.length) {
                G && M.state.focused && M.focus();
                var m = function() {
                    M.operation(function() {
                        for (var y = 0; y < D.length; y++) D[y].clear();
                    });
                };
                if (!it) return m;
                setTimeout(m, 800);
            }
        }
        function K(M) {
            M.operation(function() {
                M.state.matchBrackets.currentlyHighlighted && (M.state.matchBrackets.currentlyHighlighted(), 
                M.state.matchBrackets.currentlyHighlighted = null), M.state.matchBrackets.currentlyHighlighted = Y(M, !1, M.state.matchBrackets);
            });
        }
        function st(M) {
            M.state.matchBrackets && M.state.matchBrackets.currentlyHighlighted && (M.state.matchBrackets.currentlyHighlighted(), 
            M.state.matchBrackets.currentlyHighlighted = null);
        }
        O.defineOption("matchBrackets", !1, function(M, it, Z) {
            Z && Z != O.Init && (M.off("cursorActivity", K), M.off("focus", K), 
            M.off("blur", st), st(M)), it && (M.state.matchBrackets = typeof it == "object" ? it : {}, 
            M.on("cursorActivity", K), M.on("focus", K), M.on("blur", st));
        }), O.defineExtension("matchBrackets", function() {
            Y(this, !0);
        }), O.defineExtension("findMatchingBracket", function(M, it, Z) {
            return (Z || typeof it == "boolean") && (Z ? (Z.strict = it, it = Z) : it = it ? {
                strict: !0
            } : null), at(this, M, it);
        }), O.defineExtension("scanForBracket", function(M, it, Z, vt) {
            return Q(this, M, it, Z, vt);
        });
    })(Xe()), function(O) {
        O.defineMode("javascript", function(G, E) {
            var _, rt, at = G.indentUnit, Q = E.statementIndent, Y = E.jsonld, K = E.json || Y, st = E.trackScope !== !1, M = E.typescript, it = E.wordCharacters || /[\w$\xa1-\uffff]/, Z = function() {
                function f(Vt) {
                    return {
                        type: Vt,
                        style: "keyword"
                    };
                }
                var g = f("keyword a"), A = f("keyword b"), k = f("keyword c"), W = f("keyword d"), ft = f("operator"), yt = {
                    type: "atom",
                    style: "atom"
                };
                return {
                    if: f("if"),
                    while: g,
                    with: g,
                    else: A,
                    do: A,
                    try: A,
                    finally: A,
                    return: W,
                    break: W,
                    continue: W,
                    new: f("new"),
                    delete: k,
                    void: k,
                    throw: k,
                    debugger: f("debugger"),
                    var: f("var"),
                    const: f("var"),
                    let: f("var"),
                    function: f("function"),
                    catch: f("catch"),
                    for: f("for"),
                    switch: f("switch"),
                    case: f("case"),
                    default: f("default"),
                    in: ft,
                    typeof: ft,
                    instanceof: ft,
                    true: yt,
                    false: yt,
                    null: yt,
                    undefined: yt,
                    NaN: yt,
                    Infinity: yt,
                    this: f("this"),
                    class: f("class"),
                    super: f("atom"),
                    yield: k,
                    export: f("export"),
                    import: f("import"),
                    extends: k,
                    await: k
                };
            }(), vt = /[+\-*&%=<>!?|~^@]/, dt = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
            function D(f) {
                for (var g, A = !1, k = !1; (g = f.next()) != null; ) {
                    if (!A) {
                        if (g == "/" && !k) return;
                        g == "[" ? k = !0 : k && g == "]" && (k = !1);
                    }
                    A = !A && g == "\\";
                }
            }
            function b(f, g, A) {
                return _ = f, rt = A, g;
            }
            function C(f, g) {
                var A = f.next();
                if (A == '"' || A == "'") return g.tokenize = u(A), g.tokenize(f, g);
                if (A == "." && f.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return b("number", "number");
                if (A == "." && f.match("..")) return b("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(A)) return b(A);
                if (A == "=" && f.eat(">")) return b("=>", "operator");
                if (A == "0" && f.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return b("number", "number");
                if (/\d/.test(A)) return f.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), 
                b("number", "number");
                if (A == "/") return f.eat("*") ? (g.tokenize = h, h(f, g)) : f.eat("/") ? (f.skipToEnd(), 
                b("comment", "comment")) : ht(f, g, 1) ? (D(f), f.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), 
                b("regexp", "string-2")) : (f.eat("="), b("operator", "operator", f.current()));
                if (A == "`") return g.tokenize = m, m(f, g);
                if (A == "#" && f.peek() == "!") return f.skipToEnd(), b("meta", "meta");
                if (A == "#" && f.eatWhile(it)) return b("variable", "property");
                if (A == "<" && f.match("!--") || A == "-" && f.match("->") && !/\S/.test(f.string.slice(0, f.start))) return f.skipToEnd(), 
                b("comment", "comment");
                if (vt.test(A)) return A == ">" && g.lexical && g.lexical.type == ">" || (f.eat("=") ? A != "!" && A != "=" || f.eat("=") : /[<>*+\-|&?]/.test(A) && (f.eat(A), 
                A == ">" && f.eat(A))), A == "?" && f.eat(".") ? b(".") : b("operator", "operator", f.current());
                if (it.test(A)) {
                    f.eatWhile(it);
                    var k = f.current();
                    if (g.lastType != ".") {
                        if (Z.propertyIsEnumerable(k)) {
                            var W = Z[k];
                            return b(W.type, W.style, k);
                        }
                        if (k == "async" && f.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)) return b("async", "keyword", k);
                    }
                    return b("variable", "variable", k);
                }
            }
            function u(f) {
                return function(g, A) {
                    var k, W = !1;
                    if (Y && g.peek() == "@" && g.match(dt)) return A.tokenize = C, 
                    b("jsonld-keyword", "meta");
                    for (;(k = g.next()) != null && (k != f || W); ) W = !W && k == "\\";
                    return W || (A.tokenize = C), b("string", "string");
                };
            }
            function h(f, g) {
                for (var A, k = !1; A = f.next(); ) {
                    if (A == "/" && k) {
                        g.tokenize = C;
                        break;
                    }
                    k = A == "*";
                }
                return b("comment", "comment");
            }
            function m(f, g) {
                for (var A, k = !1; (A = f.next()) != null; ) {
                    if (!k && (A == "`" || A == "$" && f.eat("{"))) {
                        g.tokenize = C;
                        break;
                    }
                    k = !k && A == "\\";
                }
                return b("quasi", "string-2", f.current());
            }
            var y = "([{}])";
            function S(f, g) {
                g.fatArrowAt && (g.fatArrowAt = null);
                var A = f.string.indexOf("=>", f.start);
                if (!(A < 0)) {
                    if (M) {
                        var k = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(f.string.slice(f.start, A));
                        k && (A = k.index);
                    }
                    for (var W = 0, ft = !1, yt = A - 1; yt >= 0; --yt) {
                        var Vt = f.string.charAt(yt), oe = y.indexOf(Vt);
                        if (oe >= 0 && oe < 3) {
                            if (!W) {
                                ++yt;
                                break;
                            }
                            if (--W == 0) {
                                Vt == "(" && (ft = !0);
                                break;
                            }
                        } else if (oe >= 3 && oe < 6) ++W; else if (it.test(Vt)) ft = !0; else if (/["'\/`]/.test(Vt)) for (;;--yt) {
                            if (yt == 0) return;
                            if (f.string.charAt(yt - 1) == Vt && f.string.charAt(yt - 2) != "\\") {
                                yt--;
                                break;
                            }
                        } else if (ft && !W) {
                            ++yt;
                            break;
                        }
                    }
                    ft && !W && (g.fatArrowAt = yt);
                }
            }
            var N = {
                atom: !0,
                number: !0,
                variable: !0,
                string: !0,
                regexp: !0,
                this: !0,
                import: !0,
                "jsonld-keyword": !0
            };
            function P(f, g, A, k, W, ft) {
                this.indented = f, this.column = g, this.type = A, this.prev = W, 
                this.info = ft, k != null && (this.align = k);
            }
            function F(f, g) {
                if (!st) return !1;
                for (var A = f.localVars; A; A = A.next) if (A.name == g) return !0;
                for (var k = f.context; k; k = k.prev) for (A = k.vars; A; A = A.next) if (A.name == g) return !0;
            }
            function z(f, g, A, k, W) {
                var ft = f.cc;
                for (L.state = f, L.stream = W, L.marked = null, L.cc = ft, L.style = g, 
                f.lexical.hasOwnProperty("align") || (f.lexical.align = !0); ;) if ((ft.length ? ft.pop() : K ? pt : ct)(A, k)) {
                    for (;ft.length && ft[ft.length - 1].lex; ) ft.pop()();
                    return L.marked ? L.marked : A == "variable" && F(f, k) ? "variable-2" : g;
                }
            }
            var L = {
                state: null,
                column: null,
                marked: null,
                cc: null
            };
            function R() {
                for (var f = arguments.length - 1; f >= 0; f--) L.cc.push(arguments[f]);
            }
            function v() {
                return R.apply(null, arguments), !0;
            }
            function U(f, g) {
                for (var A = g; A; A = A.next) if (A.name == f) return !0;
                return !1;
            }
            function wt(f) {
                var g = L.state;
                if (L.marked = "def", st) {
                    if (g.context) {
                        if (g.lexical.info == "var" && g.context && g.context.block) {
                            var A = St(f, g.context);
                            if (A != null) return void (g.context = A);
                        } else if (!U(f, g.localVars)) return void (g.localVars = new Rt(f, g.localVars));
                    }
                    E.globalVars && !U(f, g.globalVars) && (g.globalVars = new Rt(f, g.globalVars));
                }
            }
            function St(f, g) {
                if (g) {
                    if (g.block) {
                        var A = St(f, g.prev);
                        return A ? A == g.prev ? g : new Bt(A, g.vars, !0) : null;
                    }
                    return U(f, g.vars) ? g : new Bt(g.prev, new Rt(f, g.vars), !1);
                }
                return null;
            }
            function mt(f) {
                return f == "public" || f == "private" || f == "protected" || f == "abstract" || f == "readonly";
            }
            function Bt(f, g, A) {
                this.prev = f, this.vars = g, this.block = A;
            }
            function Rt(f, g) {
                this.name = f, this.next = g;
            }
            var $t = new Rt("this", new Rt("arguments", null));
            function Mt() {
                L.state.context = new Bt(L.state.context, L.state.localVars, !1), 
                L.state.localVars = $t;
            }
            function Xt() {
                L.state.context = new Bt(L.state.context, L.state.localVars, !0), 
                L.state.localVars = null;
            }
            function jt() {
                L.state.localVars = L.state.context.vars, L.state.context = L.state.context.prev;
            }
            function nt(f, g) {
                var A = function() {
                    var k = L.state, W = k.indented;
                    if (k.lexical.type == "stat") W = k.lexical.indented; else for (var ft = k.lexical; ft && ft.type == ")" && ft.align; ft = ft.prev) W = ft.indented;
                    k.lexical = new P(W, L.stream.column(), f, null, k.lexical, g);
                };
                return A.lex = !0, A;
            }
            function X() {
                var f = L.state;
                f.lexical.prev && (f.lexical.type == ")" && (f.indented = f.lexical.indented), 
                f.lexical = f.lexical.prev);
            }
            function lt(f) {
                function g(A) {
                    return A == f ? v() : f == ";" || A == "}" || A == ")" || A == "]" ? R() : v(g);
                }
                return g;
            }
            function ct(f, g) {
                return f == "var" ? v(nt("vardef", g), Re, lt(";"), X) : f == "keyword a" ? v(nt("form"), ge, ct, X) : f == "keyword b" ? v(nt("form"), ct, X) : f == "keyword d" ? L.stream.match(/^\s*$/, !1) ? v() : v(nt("stat"), Dt, lt(";"), X) : f == "debugger" ? v(lt(";")) : f == "{" ? v(nt("}"), Xt, Oe, X, jt) : f == ";" ? v() : f == "if" ? (L.state.lexical.info == "else" && L.state.cc[L.state.cc.length - 1] == X && L.state.cc.pop()(), 
                v(nt("form"), ge, ct, X, Wr)) : f == "function" ? v(He) : f == "for" ? v(nt("form"), Xt, Fr, ct, jt, X) : f == "class" || M && g == "interface" ? (L.marked = "keyword", 
                v(nt("form", f == "class" ? f : g), ze, X)) : f == "variable" ? M && g == "declare" ? (L.marked = "keyword", 
                v(ct)) : M && (g == "module" || g == "enum" || g == "type") && L.stream.match(/^\s*\w/, !1) ? (L.marked = "keyword", 
                g == "enum" ? v(Fe) : g == "type" ? v(kn, lt("operator"), V, lt(";")) : v(nt("form"), ie, lt("{"), nt("}"), Oe, X, X)) : M && g == "namespace" ? (L.marked = "keyword", 
                v(nt("form"), pt, ct, X)) : M && g == "abstract" ? (L.marked = "keyword", 
                v(ct)) : v(nt("stat"), xn) : f == "switch" ? v(nt("form"), ge, lt("{"), nt("}", "switch"), Xt, Oe, X, X, jt) : f == "case" ? v(pt, lt(":")) : f == "default" ? v(lt(":")) : f == "catch" ? v(nt("form"), Mt, Ye, ct, X, jt) : f == "export" ? v(nt("stat"), Qn, X) : f == "import" ? v(nt("stat"), gi, X) : f == "async" ? v(ct) : g == "@" ? v(pt, ct) : R(nt("stat"), pt, lt(";"), X);
            }
            function Ye(f) {
                if (f == "(") return v(Ie, lt(")"));
            }
            function pt(f, g) {
                return Ce(f, g, !1);
            }
            function xt(f, g) {
                return Ce(f, g, !0);
            }
            function ge(f) {
                return f != "(" ? R() : v(nt(")"), Dt, lt(")"), X);
            }
            function Ce(f, g, A) {
                if (L.state.fatArrowAt == L.stream.start) {
                    var k = A ? Kn : Ar;
                    if (f == "(") return v(Mt, nt(")"), Ht(Ie, ")"), X, lt("=>"), k, jt);
                    if (f == "variable") return R(Mt, ie, lt("=>"), k, jt);
                }
                var W = A ? de : At;
                return N.hasOwnProperty(f) ? v(W) : f == "function" ? v(He, W) : f == "class" || M && g == "interface" ? (L.marked = "keyword", 
                v(nt("form"), Jn, X)) : f == "keyword c" || f == "async" ? v(A ? xt : pt) : f == "(" ? v(nt(")"), Dt, lt(")"), X, W) : f == "operator" || f == "spread" ? v(A ? xt : pt) : f == "[" ? v(nt("]"), tt, X, W) : f == "{" ? an(Cn, "}", null, W) : f == "quasi" ? R(ut, W) : f == "new" ? v(Nr(A)) : v();
            }
            function Dt(f) {
                return f.match(/[;\}\)\],]/) ? R() : R(pt);
            }
            function At(f, g) {
                return f == "," ? v(Dt) : de(f, g, !1);
            }
            function de(f, g, A) {
                var k = A == 0 ? At : de, W = A == 0 ? pt : xt;
                return f == "=>" ? v(Mt, A ? Kn : Ar, jt) : f == "operator" ? /\+\+|--/.test(g) || M && g == "!" ? v(k) : M && g == "<" && L.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? v(nt(">"), Ht(V, ">"), X, k) : g == "?" ? v(pt, lt(":"), W) : v(W) : f == "quasi" ? R(ut, k) : f != ";" ? f == "(" ? an(xt, ")", "call", k) : f == "." ? v(Or, k) : f == "[" ? v(nt("]"), Dt, lt("]"), X, k) : M && g == "as" ? (L.marked = "keyword", 
                v(V, k)) : f == "regexp" ? (L.state.lastType = L.marked = "operator", 
                L.stream.backUp(L.stream.pos - L.stream.start - 1), v(W)) : void 0 : void 0;
            }
            function ut(f, g) {
                return f != "quasi" ? R() : g.slice(g.length - 2) != "${" ? v(ut) : v(Dt, wn);
            }
            function wn(f) {
                if (f == "}") return L.marked = "string-2", L.state.tokenize = m, 
                v(ut);
            }
            function Ar(f) {
                return S(L.stream, L.state), R(f == "{" ? ct : pt);
            }
            function Kn(f) {
                return S(L.stream, L.state), R(f == "{" ? ct : xt);
            }
            function Nr(f) {
                return function(g) {
                    return g == "." ? v(f ? Gn : hi) : g == "variable" && M ? v(qt, f ? de : At) : R(f ? xt : pt);
                };
            }
            function hi(f, g) {
                if (g == "target") return L.marked = "keyword", v(At);
            }
            function Gn(f, g) {
                if (g == "target") return L.marked = "keyword", v(de);
            }
            function xn(f) {
                return f == ":" ? v(X, ct) : R(At, lt(";"), X);
            }
            function Or(f) {
                if (f == "variable") return L.marked = "property", v();
            }
            function Cn(f, g) {
                return f == "async" ? (L.marked = "property", v(Cn)) : f == "variable" || L.style == "keyword" ? (L.marked = "property", 
                g == "get" || g == "set" ? v(_n) : (M && L.state.fatArrowAt == L.stream.start && (A = L.stream.match(/^\s*:\s*/, !1)) && (L.state.fatArrowAt = L.stream.pos + A[0].length), 
                v(Ne))) : f == "number" || f == "string" ? (L.marked = Y ? "property" : L.style + " property", 
                v(Ne)) : f == "jsonld-keyword" ? v(Ne) : M && mt(g) ? (L.marked = "keyword", 
                v(Cn)) : f == "[" ? v(pt, me, lt("]"), Ne) : f == "spread" ? v(xt, Ne) : g == "*" ? (L.marked = "keyword", 
                v(Cn)) : f == ":" ? R(Ne) : void 0;
                var A;
            }
            function _n(f) {
                return f != "variable" ? R(Ne) : (L.marked = "property", v(He));
            }
            function Ne(f) {
                return f == ":" ? v(xt) : f == "(" ? R(He) : void 0;
            }
            function Ht(f, g, A) {
                function k(W, ft) {
                    if (A ? A.indexOf(W) > -1 : W == ",") {
                        var yt = L.state.lexical;
                        return yt.info == "call" && (yt.pos = (yt.pos || 0) + 1), 
                        v(function(Vt, oe) {
                            return Vt == g || oe == g ? R() : R(f);
                        }, k);
                    }
                    return W == g || ft == g ? v() : A && A.indexOf(";") > -1 ? R(f) : v(lt(g));
                }
                return function(W, ft) {
                    return W == g || ft == g ? v() : R(f, k);
                };
            }
            function an(f, g, A) {
                for (var k = 3; k < arguments.length; k++) L.cc.push(arguments[k]);
                return v(nt(g, A), Ht(f, g), X);
            }
            function Oe(f) {
                return f == "}" ? v() : R(ct, Oe);
            }
            function me(f, g) {
                if (M) {
                    if (f == ":") return v(V);
                    if (g == "?") return v(me);
                }
            }
            function di(f, g) {
                if (M && (f == ":" || g == "in")) return v(V);
            }
            function ve(f) {
                if (M && f == ":") return L.stream.match(/^\s*\w+\s+is\b/, !1) ? v(pt, Dr, V) : v(V);
            }
            function Dr(f, g) {
                if (g == "is") return L.marked = "keyword", v();
            }
            function V(f, g) {
                return g == "keyof" || g == "typeof" || g == "infer" || g == "readonly" ? (L.marked = "keyword", 
                v(g == "typeof" ? xt : V)) : f == "variable" || g == "void" ? (L.marked = "type", 
                v(te)) : g == "|" || g == "&" ? v(V) : f == "string" || f == "number" || f == "atom" ? v(te) : f == "[" ? v(nt("]"), Ht(V, "]", ","), X, te) : f == "{" ? v(nt("}"), Yt, X, te) : f == "(" ? v(Ht(Qt, ")"), $n, te) : f == "<" ? v(Ht(V, ">"), V) : f == "quasi" ? R(Wt, te) : void 0;
            }
            function $n(f) {
                if (f == "=>") return v(V);
            }
            function Yt(f) {
                return f.match(/[\}\)\]]/) ? v() : f == "," || f == ";" ? v(Yt) : R(Lt, Yt);
            }
            function Lt(f, g) {
                return f == "variable" || L.style == "keyword" ? (L.marked = "property", 
                v(Lt)) : g == "?" || f == "number" || f == "string" ? v(Lt) : f == ":" ? v(V) : f == "[" ? v(lt("variable"), di, lt("]"), Lt) : f == "(" ? R(qe, Lt) : f.match(/[;\}\)\],]/) ? void 0 : v();
            }
            function Wt(f, g) {
                return f != "quasi" ? R() : g.slice(g.length - 2) != "${" ? v(Wt) : v(V, Hr);
            }
            function Hr(f) {
                if (f == "}") return L.marked = "string-2", L.state.tokenize = m, 
                v(Wt);
            }
            function Qt(f, g) {
                return f == "variable" && L.stream.match(/^\s*[?:]/, !1) || g == "?" ? v(Qt) : f == ":" ? v(V) : f == "spread" ? v(Qt) : R(V);
            }
            function te(f, g) {
                return g == "<" ? v(nt(">"), Ht(V, ">"), X, te) : g == "|" || f == "." || g == "&" ? v(V) : f == "[" ? v(V, lt("]"), te) : g == "extends" || g == "implements" ? (L.marked = "keyword", 
                v(V)) : g == "?" ? v(V, lt(":"), V) : void 0;
            }
            function qt(f, g) {
                if (g == "<") return v(nt(">"), Ht(V, ">"), X, te);
            }
            function sn() {
                return R(V, Xn);
            }
            function Xn(f, g) {
                if (g == "=") return v(V);
            }
            function Re(f, g) {
                return g == "enum" ? (L.marked = "keyword", v(Fe)) : R(ie, me, ye, pi);
            }
            function ie(f, g) {
                return M && mt(g) ? (L.marked = "keyword", v(ie)) : f == "variable" ? (wt(g), 
                v()) : f == "spread" ? v(ie) : f == "[" ? an(qn, "]") : f == "{" ? an(Yn, "}") : void 0;
            }
            function Yn(f, g) {
                return f != "variable" || L.stream.match(/^\s*:/, !1) ? (f == "variable" && (L.marked = "property"), 
                f == "spread" ? v(ie) : f == "}" ? R() : f == "[" ? v(pt, lt("]"), lt(":"), Yn) : v(lt(":"), ie, ye)) : (wt(g), 
                v(ye));
            }
            function qn() {
                return R(ie, ye);
            }
            function ye(f, g) {
                if (g == "=") return v(xt);
            }
            function pi(f) {
                if (f == ",") return v(Re);
            }
            function Wr(f, g) {
                if (f == "keyword b" && g == "else") return v(nt("form", "else"), ct, X);
            }
            function Fr(f, g) {
                return g == "await" ? v(Fr) : f == "(" ? v(nt(")"), Zn, X) : void 0;
            }
            function Zn(f) {
                return f == "var" ? v(Re, De) : f == "variable" ? v(De) : R(De);
            }
            function De(f, g) {
                return f == ")" ? v() : f == ";" ? v(De) : g == "in" || g == "of" ? (L.marked = "keyword", 
                v(pt, De)) : R(pt, De);
            }
            function He(f, g) {
                return g == "*" ? (L.marked = "keyword", v(He)) : f == "variable" ? (wt(g), 
                v(He)) : f == "(" ? v(Mt, nt(")"), Ht(Ie, ")"), X, ve, ct, jt) : M && g == "<" ? v(nt(">"), Ht(sn, ">"), X, He) : void 0;
            }
            function qe(f, g) {
                return g == "*" ? (L.marked = "keyword", v(qe)) : f == "variable" ? (wt(g), 
                v(qe)) : f == "(" ? v(Mt, nt(")"), Ht(Ie, ")"), X, ve, jt) : M && g == "<" ? v(nt(">"), Ht(sn, ">"), X, qe) : void 0;
            }
            function kn(f, g) {
                return f == "keyword" || f == "variable" ? (L.marked = "type", v(kn)) : g == "<" ? v(nt(">"), Ht(sn, ">"), X) : void 0;
            }
            function Ie(f, g) {
                return g == "@" && v(pt, Ie), f == "spread" ? v(Ie) : M && mt(g) ? (L.marked = "keyword", 
                v(Ie)) : M && f == "this" ? v(me, ye) : R(ie, me, ye);
            }
            function Jn(f, g) {
                return f == "variable" ? ze(f, g) : Sn(f, g);
            }
            function ze(f, g) {
                if (f == "variable") return wt(g), v(Sn);
            }
            function Sn(f, g) {
                return g == "<" ? v(nt(">"), Ht(sn, ">"), X, Sn) : g == "extends" || g == "implements" || M && f == "," ? (g == "implements" && (L.marked = "keyword"), 
                v(M ? V : pt, Sn)) : f == "{" ? v(nt("}"), ke, X) : void 0;
            }
            function ke(f, g) {
                return f == "async" || f == "variable" && (g == "static" || g == "get" || g == "set" || M && mt(g)) && L.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (L.marked = "keyword", 
                v(ke)) : f == "variable" || L.style == "keyword" ? (L.marked = "property", 
                v(We, ke)) : f == "number" || f == "string" ? v(We, ke) : f == "[" ? v(pt, me, lt("]"), We, ke) : g == "*" ? (L.marked = "keyword", 
                v(ke)) : M && f == "(" ? R(qe, ke) : f == ";" || f == "," ? v(ke) : f == "}" ? v() : g == "@" ? v(pt, ke) : void 0;
            }
            function We(f, g) {
                if (g == "!" || g == "?") return v(We);
                if (f == ":") return v(V, ye);
                if (g == "=") return v(xt);
                var A = L.state.lexical.prev;
                return R(A && A.info == "interface" ? qe : He);
            }
            function Qn(f, g) {
                return g == "*" ? (L.marked = "keyword", v(Nt, lt(";"))) : g == "default" ? (L.marked = "keyword", 
                v(pt, lt(";"))) : f == "{" ? v(Ht(Ue, "}"), Nt, lt(";")) : R(ct);
            }
            function Ue(f, g) {
                return g == "as" ? (L.marked = "keyword", v(lt("variable"))) : f == "variable" ? R(xt, Ue) : void 0;
            }
            function gi(f) {
                return f == "string" ? v() : f == "(" ? R(pt) : f == "." ? R(At) : R(be, Ln, Nt);
            }
            function be(f, g) {
                return f == "{" ? an(be, "}") : (f == "variable" && wt(g), g == "*" && (L.marked = "keyword"), 
                v(Pr));
            }
            function Ln(f) {
                if (f == ",") return v(be, Ln);
            }
            function Pr(f, g) {
                if (g == "as") return L.marked = "keyword", v(be);
            }
            function Nt(f, g) {
                if (g == "from") return L.marked = "keyword", v(pt);
            }
            function tt(f) {
                return f == "]" ? v() : R(Ht(xt, "]"));
            }
            function Fe() {
                return R(nt("form"), ie, lt("{"), nt("}"), Ht(tr, "}"), X, X);
            }
            function tr() {
                return R(ie, ye);
            }
            function we(f, g) {
                return f.lastType == "operator" || f.lastType == "," || vt.test(g.charAt(0)) || /[,.]/.test(g.charAt(0));
            }
            function ht(f, g, A) {
                return g.tokenize == C && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(g.lastType) || g.lastType == "quasi" && /\{\s*$/.test(f.string.slice(0, f.pos - (A || 0)));
            }
            return Mt.lex = Xt.lex = !0, jt.lex = !0, X.lex = !0, {
                startState: function(f) {
                    var g = {
                        tokenize: C,
                        lastType: "sof",
                        cc: [],
                        lexical: new P((f || 0) - at, 0, "block", !1),
                        localVars: E.localVars,
                        context: E.localVars && new Bt(null, null, !1),
                        indented: f || 0
                    };
                    return E.globalVars && typeof E.globalVars == "object" && (g.globalVars = E.globalVars), 
                    g;
                },
                token: function(f, g) {
                    if (f.sol() && (g.lexical.hasOwnProperty("align") || (g.lexical.align = !1), 
                    g.indented = f.indentation(), S(f, g)), g.tokenize != h && f.eatSpace()) return null;
                    var A = g.tokenize(f, g);
                    return _ == "comment" ? A : (g.lastType = _ != "operator" || rt != "++" && rt != "--" ? _ : "incdec", 
                    z(g, A, _, rt, f));
                },
                indent: function(f, g) {
                    if (f.tokenize == h || f.tokenize == m) return O.Pass;
                    if (f.tokenize != C) return 0;
                    var A, k = g && g.charAt(0), W = f.lexical;
                    if (!/^\s*else\b/.test(g)) for (var ft = f.cc.length - 1; ft >= 0; --ft) {
                        var yt = f.cc[ft];
                        if (yt == X) W = W.prev; else if (yt != Wr && yt != jt) break;
                    }
                    for (;(W.type == "stat" || W.type == "form") && (k == "}" || (A = f.cc[f.cc.length - 1]) && (A == At || A == de) && !/^[,\.=+\-*:?[\(]/.test(g)); ) W = W.prev;
                    Q && W.type == ")" && W.prev.type == "stat" && (W = W.prev);
                    var Vt = W.type, oe = k == Vt;
                    return Vt == "vardef" ? W.indented + (f.lastType == "operator" || f.lastType == "," ? W.info.length + 1 : 0) : Vt == "form" && k == "{" ? W.indented : Vt == "form" ? W.indented + at : Vt == "stat" ? W.indented + (we(f, g) ? Q || at : 0) : W.info != "switch" || oe || E.doubleIndentSwitch == 0 ? W.align ? W.column + (oe ? 0 : 1) : W.indented + (oe ? 0 : at) : W.indented + (/^(?:case|default)\b/.test(g) ? at : 2 * at);
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: K ? null : "/*",
                blockCommentEnd: K ? null : "*/",
                blockCommentContinue: K ? null : " * ",
                lineComment: K ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: K ? "json" : "javascript",
                jsonldMode: Y,
                jsonMode: K,
                expressionAllowed: ht,
                skipExpression: function(f) {
                    z(f, "atom", "atom", "true", new O.StringStream("", 2, null));
                }
            };
        }), O.registerHelper("wordChars", "javascript", /[\w$]/), O.defineMIME("text/javascript", "javascript"), 
        O.defineMIME("text/ecmascript", "javascript"), O.defineMIME("application/javascript", "javascript"), 
        O.defineMIME("application/x-javascript", "javascript"), O.defineMIME("application/ecmascript", "javascript"), 
        O.defineMIME("application/json", {
            name: "javascript",
            json: !0
        }), O.defineMIME("application/x-json", {
            name: "javascript",
            json: !0
        }), O.defineMIME("application/manifest+json", {
            name: "javascript",
            json: !0
        }), O.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
        }), O.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
        }), O.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0
        });
    }(Xe()), function(O) {
        var G = "CodeMirror-activeline", E = "CodeMirror-activeline-background", _ = "CodeMirror-activeline-gutter";
        function rt(K) {
            for (var st = 0; st < K.state.activeLines.length; st++) K.removeLineClass(K.state.activeLines[st], "wrap", G), 
            K.removeLineClass(K.state.activeLines[st], "background", E), K.removeLineClass(K.state.activeLines[st], "gutter", _);
        }
        function at(K, st) {
            if (K.length != st.length) return !1;
            for (var M = 0; M < K.length; M++) if (K[M] != st[M]) return !1;
            return !0;
        }
        function Q(K, st) {
            for (var M = [], it = 0; it < st.length; it++) {
                var Z = st[it], vt = K.getOption("styleActiveLine");
                if (typeof vt == "object" && vt.nonEmpty ? Z.anchor.line == Z.head.line : Z.empty()) {
                    var dt = K.getLineHandleVisualStart(Z.head.line);
                    M[M.length - 1] != dt && M.push(dt);
                }
            }
            at(K.state.activeLines, M) || K.operation(function() {
                rt(K);
                for (var D = 0; D < M.length; D++) K.addLineClass(M[D], "wrap", G), 
                K.addLineClass(M[D], "background", E), K.addLineClass(M[D], "gutter", _);
                K.state.activeLines = M;
            });
        }
        function Y(K, st) {
            Q(K, st.ranges);
        }
        O.defineOption("styleActiveLine", !1, function(K, st, M) {
            var it = M != O.Init && M;
            st != it && (it && (K.off("beforeSelectionChange", Y), rt(K), delete K.state.activeLines), 
            st && (K.state.activeLines = [], Q(K, K.listSelections()), K.on("beforeSelectionChange", Y)));
        });
    }(Xe()), function(O) {
        var G = "CodeMirror-hint", E = "CodeMirror-hint-active";
        function _(D, b) {
            if (this.cm = D, this.options = b, this.widget = null, this.debounce = 0, 
            this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, 
            this.options.updateOnCursorActivity) {
                var C = this;
                D.on("cursorActivity", this.activityFunc = function() {
                    C.cursorActivity();
                });
            }
        }
        O.showHint = function(D, b, C) {
            if (!b) return D.showHint(C);
            C && C.async && (b.async = !0);
            var u = {
                hint: b
            };
            if (C) for (var h in C) u[h] = C[h];
            return D.showHint(u);
        }, O.defineExtension("showHint", function(D) {
            D = Q(this, this.getCursor("start"), D);
            var b = this.listSelections();
            if (!(b.length > 1)) {
                if (this.somethingSelected()) {
                    if (!D.hint.supportsSelection) return;
                    for (var C = 0; C < b.length; C++) if (b[C].head.line != b[C].anchor.line) return;
                }
                this.state.completionActive && this.state.completionActive.close();
                var u = this.state.completionActive = new _(this, D);
                u.options.hint && (O.signal(this, "startCompletion", this), u.update(!0));
            }
        }), O.defineExtension("closeHint", function() {
            this.state.completionActive && this.state.completionActive.close();
        });
        var rt = window.requestAnimationFrame || function(D) {
            return setTimeout(D, 1e3 / 60);
        }, at = window.cancelAnimationFrame || clearTimeout;
        function Q(D, b, C) {
            var u = D.options.hintOptions, h = {};
            for (var m in dt) h[m] = dt[m];
            if (u) for (var m in u) u[m] !== void 0 && (h[m] = u[m]);
            if (C) for (var m in C) C[m] !== void 0 && (h[m] = C[m]);
            return h.hint.resolve && (h.hint = h.hint.resolve(D, b)), h;
        }
        function Y(D) {
            return typeof D == "string" ? D : D.text;
        }
        function K(D, b) {
            var C = {
                Up: function() {
                    b.moveFocus(-1);
                },
                Down: function() {
                    b.moveFocus(1);
                },
                PageUp: function() {
                    b.moveFocus(1 - b.menuSize(), !0);
                },
                PageDown: function() {
                    b.moveFocus(b.menuSize() - 1, !0);
                },
                Home: function() {
                    b.setFocus(0);
                },
                End: function() {
                    b.setFocus(b.length - 1);
                },
                Enter: b.pick,
                Tab: b.pick,
                Esc: b.close
            };
            /Mac/.test(navigator.platform) && (C["Ctrl-P"] = function() {
                b.moveFocus(-1);
            }, C["Ctrl-N"] = function() {
                b.moveFocus(1);
            });
            var u = D.options.customKeys, h = u ? {} : C;
            function m(N, P) {
                var F;
                F = typeof P != "string" ? function(z) {
                    return P(z, b);
                } : C.hasOwnProperty(P) ? C[P] : P, h[N] = F;
            }
            if (u) for (var y in u) u.hasOwnProperty(y) && m(y, u[y]);
            var S = D.options.extraKeys;
            if (S) for (var y in S) S.hasOwnProperty(y) && m(y, S[y]);
            return h;
        }
        function st(D, b) {
            for (;b && b != D; ) {
                if (b.nodeName.toUpperCase() === "LI" && b.parentNode == D) return b;
                b = b.parentNode;
            }
        }
        function M(D, b) {
            this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = D, 
            this.data = b, this.picked = !1;
            var C = this, u = D.cm, h = u.getInputField().ownerDocument, m = h.defaultView || h.parentWindow, y = this.hints = h.createElement("ul");
            y.setAttribute("role", "listbox"), y.setAttribute("aria-expanded", "true"), 
            y.id = this.id;
            var S = D.cm.options.theme;
            y.className = "CodeMirror-hints " + S, this.selectedHint = b.selectedHint || 0;
            for (var N = b.list, P = 0; P < N.length; ++P) {
                var F = y.appendChild(h.createElement("li")), z = N[P], L = G + (P != this.selectedHint ? "" : " " + E);
                z.className != null && (L = z.className + " " + L), F.className = L, 
                P == this.selectedHint && F.setAttribute("aria-selected", "true"), 
                F.id = this.id + "-" + P, F.setAttribute("role", "option"), z.render ? z.render(F, b, z) : F.appendChild(h.createTextNode(z.displayText || Y(z))), 
                F.hintId = P;
            }
            var R = D.options.container || h.body, v = u.cursorCoords(D.options.alignWithWord ? b.from : null), U = v.left, wt = v.bottom, St = !0, mt = 0, Bt = 0;
            if (R !== h.body) {
                var Rt = [ "absolute", "relative", "fixed" ].indexOf(m.getComputedStyle(R).position) !== -1 ? R : R.offsetParent, $t = Rt.getBoundingClientRect(), Mt = h.body.getBoundingClientRect();
                mt = $t.left - Mt.left - Rt.scrollLeft, Bt = $t.top - Mt.top - Rt.scrollTop;
            }
            y.style.left = U - mt + "px", y.style.top = wt - Bt + "px";
            var Xt = m.innerWidth || Math.max(h.body.offsetWidth, h.documentElement.offsetWidth), jt = m.innerHeight || Math.max(h.body.offsetHeight, h.documentElement.offsetHeight);
            R.appendChild(y), u.getInputField().setAttribute("aria-autocomplete", "list"), 
            u.getInputField().setAttribute("aria-owns", this.id), u.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
            var nt, X = D.options.moveOnOverlap ? y.getBoundingClientRect() : new DOMRect(), lt = !!D.options.paddingForScrollbar && y.scrollHeight > y.clientHeight + 1;
            if (setTimeout(function() {
                nt = u.getScrollInfo();
            }), X.bottom - jt > 0) {
                var ct = X.bottom - X.top, Ye = X.top - (v.bottom - v.top) - 2;
                jt - X.top < Ye ? (ct > Ye && (y.style.height = (ct = Ye) + "px"), 
                y.style.top = (wt = v.top - ct) + Bt + "px", St = !1) : y.style.height = jt - X.top - 2 + "px";
            }
            var pt, xt = X.right - Xt;
            if (lt && (xt += u.display.nativeBarWidth), xt > 0 && (X.right - X.left > Xt && (y.style.width = Xt - 5 + "px", 
            xt -= X.right - X.left - Xt), y.style.left = (U = Math.max(v.left - xt - mt, 0)) + "px"), 
            lt) for (var ge = y.firstChild; ge; ge = ge.nextSibling) ge.style.paddingRight = u.display.nativeBarWidth + "px";
            u.addKeyMap(this.keyMap = K(D, {
                moveFocus: function(Dt, At) {
                    C.changeActive(C.selectedHint + Dt, At);
                },
                setFocus: function(Dt) {
                    C.changeActive(Dt);
                },
                menuSize: function() {
                    return C.screenAmount();
                },
                length: N.length,
                close: function() {
                    D.close();
                },
                pick: function() {
                    C.pick();
                },
                data: b
            })), D.options.closeOnUnfocus && (u.on("blur", this.onBlur = function() {
                pt = setTimeout(function() {
                    D.close();
                }, 100);
            }), u.on("focus", this.onFocus = function() {
                clearTimeout(pt);
            })), u.on("scroll", this.onScroll = function() {
                var Dt = u.getScrollInfo(), At = u.getWrapperElement().getBoundingClientRect();
                nt || (nt = u.getScrollInfo());
                var de = wt + nt.top - Dt.top, ut = de - (m.pageYOffset || (h.documentElement || h.body).scrollTop);
                if (St || (ut += y.offsetHeight), ut <= At.top || ut >= At.bottom) return D.close();
                y.style.top = de + "px", y.style.left = U + nt.left - Dt.left + "px";
            }), O.on(y, "dblclick", function(Dt) {
                var At = st(y, Dt.target || Dt.srcElement);
                At && At.hintId != null && (C.changeActive(At.hintId), C.pick());
            }), O.on(y, "click", function(Dt) {
                var At = st(y, Dt.target || Dt.srcElement);
                At && At.hintId != null && (C.changeActive(At.hintId), D.options.completeOnSingleClick && C.pick());
            }), O.on(y, "mousedown", function() {
                setTimeout(function() {
                    u.focus();
                }, 20);
            });
            var Ce = this.getSelectedHintRange();
            return Ce.from === 0 && Ce.to === 0 || this.scrollToActive(), O.signal(b, "select", N[this.selectedHint], y.childNodes[this.selectedHint]), 
            !0;
        }
        function it(D, b) {
            if (!D.somethingSelected()) return b;
            for (var C = [], u = 0; u < b.length; u++) b[u].supportsSelection && C.push(b[u]);
            return C;
        }
        function Z(D, b, C, u) {
            if (D.async) D(b, u, C); else {
                var h = D(b, C);
                h && h.then ? h.then(u) : u(h);
            }
        }
        function vt(D, b) {
            var C, u = D.getHelpers(b, "hint");
            if (u.length) {
                var h = function(m, y, S) {
                    var N = it(m, u);
                    function P(F) {
                        if (F == N.length) return y(null);
                        Z(N[F], m, S, function(z) {
                            z && z.list.length > 0 ? y(z) : P(F + 1);
                        });
                    }
                    P(0);
                };
                return h.async = !0, h.supportsSelection = !0, h;
            }
            return (C = D.getHelper(D.getCursor(), "hintWords")) ? function(m) {
                return O.hint.fromList(m, {
                    words: C
                });
            } : O.hint.anyword ? function(m, y) {
                return O.hint.anyword(m, y);
            } : function() {};
        }
        _.prototype = {
            close: function() {
                this.active() && (this.cm.state.completionActive = null, this.tick = null, 
                this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), 
                this.widget && this.data && O.signal(this.data, "close"), this.widget && this.widget.close(), 
                O.signal(this.cm, "endCompletion", this.cm));
            },
            active: function() {
                return this.cm.state.completionActive == this;
            },
            pick: function(D, b) {
                var C = D.list[b], u = this;
                this.cm.operation(function() {
                    C.hint ? C.hint(u.cm, D, C) : u.cm.replaceRange(Y(C), C.from || D.from, C.to || D.to, "complete"), 
                    O.signal(D, "pick", C), u.cm.scrollIntoView();
                }), this.options.closeOnPick && this.close();
            },
            cursorActivity: function() {
                this.debounce && (at(this.debounce), this.debounce = 0);
                var D = this.startPos;
                this.data && (D = this.data.from);
                var b = this.cm.getCursor(), C = this.cm.getLine(b.line);
                if (b.line != this.startPos.line || C.length - b.ch != this.startLen - this.startPos.ch || b.ch < D.ch || this.cm.somethingSelected() || !b.ch || this.options.closeCharacters.test(C.charAt(b.ch - 1))) this.close(); else {
                    var u = this;
                    this.debounce = rt(function() {
                        u.update();
                    }), this.widget && this.widget.disable();
                }
            },
            update: function(D) {
                if (this.tick != null) {
                    var b = this, C = ++this.tick;
                    Z(this.options.hint, this.cm, this.options, function(u) {
                        b.tick == C && b.finishUpdate(u, D);
                    });
                }
            },
            finishUpdate: function(D, b) {
                this.data && O.signal(this.data, "update");
                var C = this.widget && this.widget.picked || b && this.options.completeSingle;
                this.widget && this.widget.close(), this.data = D, D && D.list.length && (C && D.list.length == 1 ? this.pick(D, 0) : (this.widget = new M(this, D), 
                O.signal(D, "shown")));
            }
        }, M.prototype = {
            close: function() {
                if (this.completion.widget == this) {
                    this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), 
                    this.completion.cm.removeKeyMap(this.keyMap);
                    var D = this.completion.cm.getInputField();
                    D.removeAttribute("aria-activedescendant"), D.removeAttribute("aria-owns");
                    var b = this.completion.cm;
                    this.completion.options.closeOnUnfocus && (b.off("blur", this.onBlur), 
                    b.off("focus", this.onFocus)), b.off("scroll", this.onScroll);
                }
            },
            disable: function() {
                this.completion.cm.removeKeyMap(this.keyMap);
                var D = this;
                this.keyMap = {
                    Enter: function() {
                        D.picked = !0;
                    }
                }, this.completion.cm.addKeyMap(this.keyMap);
            },
            pick: function() {
                this.completion.pick(this.data, this.selectedHint);
            },
            changeActive: function(D, b) {
                if (D >= this.data.list.length ? D = b ? this.data.list.length - 1 : 0 : D < 0 && (D = b ? 0 : this.data.list.length - 1), 
                this.selectedHint != D) {
                    var C = this.hints.childNodes[this.selectedHint];
                    C && (C.className = C.className.replace(" " + E, ""), C.removeAttribute("aria-selected")), 
                    (C = this.hints.childNodes[this.selectedHint = D]).className += " " + E, 
                    C.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", C.id), 
                    this.scrollToActive(), O.signal(this.data, "select", this.data.list[this.selectedHint], C);
                }
            },
            scrollToActive: function() {
                var D = this.getSelectedHintRange(), b = this.hints.childNodes[D.from], C = this.hints.childNodes[D.to], u = this.hints.firstChild;
                b.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = b.offsetTop - u.offsetTop : C.offsetTop + C.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = C.offsetTop + C.offsetHeight - this.hints.clientHeight + u.offsetTop);
            },
            screenAmount: function() {
                return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
            },
            getSelectedHintRange: function() {
                var D = this.completion.options.scrollMargin || 0;
                return {
                    from: Math.max(0, this.selectedHint - D),
                    to: Math.min(this.data.list.length - 1, this.selectedHint + D)
                };
            }
        }, O.registerHelper("hint", "auto", {
            resolve: vt
        }), O.registerHelper("hint", "fromList", function(D, b) {
            var C, u = D.getCursor(), h = D.getTokenAt(u), m = O.Pos(u.line, h.start), y = u;
            h.start < u.ch && /\w/.test(h.string.charAt(u.ch - h.start - 1)) ? C = h.string.substr(0, u.ch - h.start) : (C = "", 
            m = u);
            for (var S = [], N = 0; N < b.words.length; N++) {
                var P = b.words[N];
                P.slice(0, C.length) == C && S.push(P);
            }
            if (S.length) return {
                list: S,
                from: m,
                to: y
            };
        }), O.commands.autocomplete = O.showHint;
        var dt = {
            hint: O.hint.auto,
            completeSingle: !0,
            alignWithWord: !0,
            closeCharacters: /[\s()\[\]{};:>,]/,
            closeOnPick: !0,
            closeOnUnfocus: !0,
            updateOnCursorActivity: !0,
            completeOnSingleClick: !0,
            container: null,
            customKeys: null,
            extraKeys: null,
            paddingForScrollbar: !0,
            moveOnOverlap: !0
        };
        O.defineOption("hintOptions", null);
    }(Xe());
    var ho, va = {};
    function ya() {
        return ho || (ho = 1, function(O) {
            var G, E, _ = O.Pos;
            function rt(b) {
                var C = b.flags;
                return C ?? (b.ignoreCase ? "i" : "") + (b.global ? "g" : "") + (b.multiline ? "m" : "");
            }
            function at(b, C) {
                for (var u = rt(b), h = u, m = 0; m < C.length; m++) h.indexOf(C.charAt(m)) == -1 && (h += C.charAt(m));
                return u == h ? b : new RegExp(b.source, h);
            }
            function Q(b) {
                return /\\s|\\n|\n|\\W|\\D|\[\^/.test(b.source);
            }
            function Y(b, C, u) {
                C = at(C, "g");
                for (var h = u.line, m = u.ch, y = b.lastLine(); h <= y; h++, m = 0) {
                    C.lastIndex = m;
                    var S = b.getLine(h), N = C.exec(S);
                    if (N) return {
                        from: _(h, N.index),
                        to: _(h, N.index + N[0].length),
                        match: N
                    };
                }
            }
            function K(b, C, u) {
                if (!Q(C)) return Y(b, C, u);
                C = at(C, "gm");
                for (var h, m = 1, y = u.line, S = b.lastLine(); y <= S; ) {
                    for (var N = 0; N < m && !(y > S); N++) {
                        var P = b.getLine(y++);
                        h = h == null ? P : h + `
` + P;
                    }
                    m *= 2, C.lastIndex = u.ch;
                    var F = C.exec(h);
                    if (F) {
                        var z = h.slice(0, F.index).split(`
`), L = F[0].split(`
`), R = u.line + z.length - 1, v = z[z.length - 1].length;
                        return {
                            from: _(R, v),
                            to: _(R + L.length - 1, L.length == 1 ? v + L[0].length : L[L.length - 1].length),
                            match: F
                        };
                    }
                }
            }
            function st(b, C, u) {
                for (var h, m = 0; m <= b.length; ) {
                    C.lastIndex = m;
                    var y = C.exec(b);
                    if (!y) break;
                    var S = y.index + y[0].length;
                    if (S > b.length - u) break;
                    (!h || S > h.index + h[0].length) && (h = y), m = y.index + 1;
                }
                return h;
            }
            function M(b, C, u) {
                C = at(C, "g");
                for (var h = u.line, m = u.ch, y = b.firstLine(); h >= y; h--, m = -1) {
                    var S = b.getLine(h), N = st(S, C, m < 0 ? 0 : S.length - m);
                    if (N) return {
                        from: _(h, N.index),
                        to: _(h, N.index + N[0].length),
                        match: N
                    };
                }
            }
            function it(b, C, u) {
                if (!Q(C)) return M(b, C, u);
                C = at(C, "gm");
                for (var h, m = 1, y = b.getLine(u.line).length - u.ch, S = u.line, N = b.firstLine(); S >= N; ) {
                    for (var P = 0; P < m && S >= N; P++) {
                        var F = b.getLine(S--);
                        h = h == null ? F : F + `
` + h;
                    }
                    m *= 2;
                    var z = st(h, C, y);
                    if (z) {
                        var L = h.slice(0, z.index).split(`
`), R = z[0].split(`
`), v = S + L.length, U = L[L.length - 1].length;
                        return {
                            from: _(v, U),
                            to: _(v + R.length - 1, R.length == 1 ? U + R[0].length : R[R.length - 1].length),
                            match: z
                        };
                    }
                }
            }
            function Z(b, C, u, h) {
                if (b.length == C.length) return u;
                for (var m = 0, y = u + Math.max(0, b.length - C.length); ;) {
                    if (m == y) return m;
                    var S = m + y >> 1, N = h(b.slice(0, S)).length;
                    if (N == u) return S;
                    N > u ? y = S : m = S + 1;
                }
            }
            function vt(b, C, u, h) {
                if (!C.length) return null;
                var m = h ? G : E, y = m(C).split(/\r|\n\r?/);
                t: for (var S = u.line, N = u.ch, P = b.lastLine() + 1 - y.length; S <= P; S++, 
                N = 0) {
                    var F = b.getLine(S).slice(N), z = m(F);
                    if (y.length == 1) {
                        var L = z.indexOf(y[0]);
                        if (L == -1) continue t;
                        return u = Z(F, z, L, m) + N, {
                            from: _(S, Z(F, z, L, m) + N),
                            to: _(S, Z(F, z, L + y[0].length, m) + N)
                        };
                    }
                    var R = z.length - y[0].length;
                    if (z.slice(R) == y[0]) {
                        for (var v = 1; v < y.length - 1; v++) if (m(b.getLine(S + v)) != y[v]) continue t;
                        var U = b.getLine(S + y.length - 1), wt = m(U), St = y[y.length - 1];
                        if (wt.slice(0, St.length) == St) return {
                            from: _(S, Z(F, z, R, m) + N),
                            to: _(S + y.length - 1, Z(U, wt, St.length, m))
                        };
                    }
                }
            }
            function dt(b, C, u, h) {
                if (!C.length) return null;
                var m = h ? G : E, y = m(C).split(/\r|\n\r?/);
                t: for (var S = u.line, N = u.ch, P = b.firstLine() - 1 + y.length; S >= P; S--, 
                N = -1) {
                    var F = b.getLine(S);
                    N > -1 && (F = F.slice(0, N));
                    var z = m(F);
                    if (y.length == 1) {
                        var L = z.lastIndexOf(y[0]);
                        if (L == -1) continue t;
                        return {
                            from: _(S, Z(F, z, L, m)),
                            to: _(S, Z(F, z, L + y[0].length, m))
                        };
                    }
                    var R = y[y.length - 1];
                    if (z.slice(0, R.length) == R) {
                        var v = 1;
                        for (u = S - y.length + 1; v < y.length - 1; v++) if (m(b.getLine(u + v)) != y[v]) continue t;
                        var U = b.getLine(S + 1 - y.length), wt = m(U);
                        if (wt.slice(wt.length - y[0].length) == y[0]) return {
                            from: _(S + 1 - y.length, Z(U, wt, U.length - y[0].length, m)),
                            to: _(S, Z(F, z, R.length, m))
                        };
                    }
                }
            }
            function D(b, C, u, h) {
                var m;
                this.atOccurrence = !1, this.afterEmptyMatch = !1, this.doc = b, 
                u = u ? b.clipPos(u) : _(0, 0), this.pos = {
                    from: u,
                    to: u
                }, typeof h == "object" ? m = h.caseFold : (m = h, h = null), typeof C == "string" ? (m == null && (m = !1), 
                this.matches = function(y, S) {
                    return (y ? dt : vt)(b, C, S, m);
                }) : (C = at(C, "gm"), h && h.multiline === !1 ? this.matches = function(y, S) {
                    return (y ? M : Y)(b, C, S);
                } : this.matches = function(y, S) {
                    return (y ? it : K)(b, C, S);
                });
            }
            String.prototype.normalize ? (G = function(b) {
                return b.normalize("NFD").toLowerCase();
            }, E = function(b) {
                return b.normalize("NFD");
            }) : (G = function(b) {
                return b.toLowerCase();
            }, E = function(b) {
                return b;
            }), D.prototype = {
                findNext: function() {
                    return this.find(!1);
                },
                findPrevious: function() {
                    return this.find(!0);
                },
                find: function(b) {
                    var C = this.doc.clipPos(b ? this.pos.from : this.pos.to);
                    if (this.afterEmptyMatch && this.atOccurrence && (C = _(C.line, C.ch), 
                    b ? (C.ch--, C.ch < 0 && (C.line--, C.ch = (this.doc.getLine(C.line) || "").length)) : (C.ch++, 
                    C.ch > (this.doc.getLine(C.line) || "").length && (C.ch = 0, 
                    C.line++)), O.cmpPos(C, this.doc.clipPos(C)) != 0)) return this.atOccurrence = !1;
                    var u = this.matches(b, C);
                    if (this.afterEmptyMatch = u && O.cmpPos(u.from, u.to) == 0, 
                    u) return this.pos = u, this.atOccurrence = !0, this.pos.match || !0;
                    var h = _(b ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                    return this.pos = {
                        from: h,
                        to: h
                    }, this.atOccurrence = !1;
                },
                from: function() {
                    if (this.atOccurrence) return this.pos.from;
                },
                to: function() {
                    if (this.atOccurrence) return this.pos.to;
                },
                replace: function(b, C) {
                    if (this.atOccurrence) {
                        var u = O.splitLines(b);
                        this.doc.replaceRange(u, this.pos.from, this.pos.to, C), 
                        this.pos.to = _(this.pos.from.line + u.length - 1, u[u.length - 1].length + (u.length == 1 ? this.pos.from.ch : 0));
                    }
                }
            }, O.defineExtension("getSearchCursor", function(b, C, u) {
                return new D(this.doc, b, C, u);
            }), O.defineDocExtension("getSearchCursor", function(b, C, u) {
                return new D(this, b, C, u);
            }), O.defineExtension("selectMatches", function(b, C) {
                for (var u = [], h = this.getSearchCursor(b, this.getCursor("from"), C); h.findNext() && !(O.cmpPos(h.to(), this.getCursor("to")) > 0); ) u.push({
                    anchor: h.from(),
                    head: h.to()
                });
                u.length && this.setSelections(u, 0);
            });
        }(Xe())), va;
    }
    (function(O) {
        var G = O.commands, E = O.Pos;
        function _(u, h, m) {
            if (m < 0 && h.ch == 0) return u.clipPos(E(h.line - 1));
            var y = u.getLine(h.line);
            if (m > 0 && h.ch >= y.length) return u.clipPos(E(h.line + 1, 0));
            for (var S, N = "start", P = h.ch, F = P, z = m < 0 ? 0 : y.length, L = 0; F != z; F += m, 
            L++) {
                var R = y.charAt(m < 0 ? F - 1 : F), v = R != "_" && O.isWordChar(R) ? "w" : "o";
                if (v == "w" && R.toUpperCase() == R && (v = "W"), N == "start") v != "o" ? (N = "in", 
                S = v) : P = F + m; else if (N == "in" && S != v) {
                    if (S == "w" && v == "W" && m < 0 && F--, S == "W" && v == "w" && m > 0) {
                        if (F == P + 1) {
                            S = "w";
                            continue;
                        }
                        F--;
                    }
                    break;
                }
            }
            return E(h.line, F);
        }
        function rt(u, h) {
            u.extendSelectionsBy(function(m) {
                return u.display.shift || u.doc.extend || m.empty() ? _(u.doc, m.head, h) : h < 0 ? m.from() : m.to();
            });
        }
        function at(u, h) {
            if (u.isReadOnly()) return O.Pass;
            u.operation(function() {
                for (var m = u.listSelections().length, y = [], S = -1, N = 0; N < m; N++) {
                    var P = u.listSelections()[N].head;
                    if (!(P.line <= S)) {
                        var F = E(P.line + (h ? 0 : 1), 0);
                        u.replaceRange(`
`, F, null, "+insertLine"), u.indentLine(F.line, null, !0), y.push({
                            head: F,
                            anchor: F
                        }), S = P.line + 1;
                    }
                }
                u.setSelections(y);
            }), u.execCommand("indentAuto");
        }
        function Q(u, h) {
            for (var m = h.ch, y = m, S = u.getLine(h.line); m && O.isWordChar(S.charAt(m - 1)); ) --m;
            for (;y < S.length && O.isWordChar(S.charAt(y)); ) ++y;
            return {
                from: E(h.line, m),
                to: E(h.line, y),
                word: S.slice(m, y)
            };
        }
        function Y(u, h) {
            for (var m = u.listSelections(), y = [], S = 0; S < m.length; S++) {
                var N = m[S], P = u.findPosV(N.anchor, h, "line", N.anchor.goalColumn), F = u.findPosV(N.head, h, "line", N.head.goalColumn);
                P.goalColumn = N.anchor.goalColumn != null ? N.anchor.goalColumn : u.cursorCoords(N.anchor, "div").left, 
                F.goalColumn = N.head.goalColumn != null ? N.head.goalColumn : u.cursorCoords(N.head, "div").left;
                var z = {
                    anchor: P,
                    head: F
                };
                y.push(N), y.push(z);
            }
            u.setSelections(y);
        }
        function K(u, h, m) {
            for (var y = 0; y < u.length; y++) if (O.cmpPos(u[y].from(), h) == 0 && O.cmpPos(u[y].to(), m) == 0) return !0;
            return !1;
        }
        G.goSubwordLeft = function(u) {
            rt(u, -1);
        }, G.goSubwordRight = function(u) {
            rt(u, 1);
        }, G.scrollLineUp = function(u) {
            var h = u.getScrollInfo();
            if (!u.somethingSelected()) {
                var m = u.lineAtHeight(h.top + h.clientHeight, "local");
                u.getCursor().line >= m && u.execCommand("goLineUp");
            }
            u.scrollTo(null, h.top - u.defaultTextHeight());
        }, G.scrollLineDown = function(u) {
            var h = u.getScrollInfo();
            if (!u.somethingSelected()) {
                var m = u.lineAtHeight(h.top, "local") + 1;
                u.getCursor().line <= m && u.execCommand("goLineDown");
            }
            u.scrollTo(null, h.top + u.defaultTextHeight());
        }, G.splitSelectionByLine = function(u) {
            for (var h = u.listSelections(), m = [], y = 0; y < h.length; y++) for (var S = h[y].from(), N = h[y].to(), P = S.line; P <= N.line; ++P) N.line > S.line && P == N.line && N.ch == 0 || m.push({
                anchor: P == S.line ? S : E(P, 0),
                head: P == N.line ? N : E(P)
            });
            u.setSelections(m, 0);
        }, G.singleSelectionTop = function(u) {
            var h = u.listSelections()[0];
            u.setSelection(h.anchor, h.head, {
                scroll: !1
            });
        }, G.selectLine = function(u) {
            for (var h = u.listSelections(), m = [], y = 0; y < h.length; y++) {
                var S = h[y];
                m.push({
                    anchor: E(S.from().line, 0),
                    head: E(S.to().line + 1, 0)
                });
            }
            u.setSelections(m);
        }, G.insertLineAfter = function(u) {
            return at(u, !1);
        }, G.insertLineBefore = function(u) {
            return at(u, !0);
        }, G.selectNextOccurrence = function(u) {
            var h = u.getCursor("from"), m = u.getCursor("to"), y = u.state.sublimeFindFullWord == u.doc.sel;
            if (O.cmpPos(h, m) == 0) {
                var S = Q(u, h);
                if (!S.word) return;
                u.setSelection(S.from, S.to), y = !0;
            } else {
                var N = u.getRange(h, m), P = y ? new RegExp("\\b" + N + "\\b") : N, F = u.getSearchCursor(P, m), z = F.findNext();
                if (z || (z = (F = u.getSearchCursor(P, E(u.firstLine(), 0))).findNext()), 
                !z || K(u.listSelections(), F.from(), F.to())) return;
                u.addSelection(F.from(), F.to());
            }
            y && (u.state.sublimeFindFullWord = u.doc.sel);
        }, G.skipAndSelectNextOccurrence = function(u) {
            var h = u.getCursor("anchor"), m = u.getCursor("head");
            G.selectNextOccurrence(u), O.cmpPos(h, m) != 0 && u.doc.setSelections(u.doc.listSelections().filter(function(y) {
                return y.anchor != h || y.head != m;
            }));
        }, G.addCursorToPrevLine = function(u) {
            Y(u, -1);
        }, G.addCursorToNextLine = function(u) {
            Y(u, 1);
        };
        var st = "(){}[]";
        function M(u) {
            for (var h = u.listSelections(), m = [], y = 0; y < h.length; y++) {
                var S = h[y], N = S.head, P = u.scanForBracket(N, -1);
                if (!P) return !1;
                for (;;) {
                    var F = u.scanForBracket(N, 1);
                    if (!F) return !1;
                    if (F.ch == st.charAt(st.indexOf(P.ch) + 1)) {
                        var z = E(P.pos.line, P.pos.ch + 1);
                        if (O.cmpPos(z, S.from()) != 0 || O.cmpPos(F.pos, S.to()) != 0) {
                            m.push({
                                anchor: z,
                                head: F.pos
                            });
                            break;
                        }
                        if (!(P = u.scanForBracket(P.pos, -1))) return !1;
                    }
                    N = E(F.pos.line, F.pos.ch + 1);
                }
            }
            return u.setSelections(m), !0;
        }
        function it(u) {
            return u ? /\bpunctuation\b/.test(u) ? u : void 0 : null;
        }
        function Z(u, h, m) {
            if (u.isReadOnly()) return O.Pass;
            for (var y, S = u.listSelections(), N = [], P = 0; P < S.length; P++) {
                var F = S[P];
                if (!F.empty()) {
                    for (var z = F.from().line, L = F.to().line; P < S.length - 1 && S[P + 1].from().line == L; ) L = S[++P].to().line;
                    S[P].to().ch || L--, N.push(z, L);
                }
            }
            N.length ? y = !0 : N.push(u.firstLine(), u.lastLine()), u.operation(function() {
                for (var R = [], v = 0; v < N.length; v += 2) {
                    var U = N[v], wt = N[v + 1], St = E(U, 0), mt = E(wt), Bt = u.getRange(St, mt, !1);
                    h ? Bt.sort(function(Rt, $t) {
                        return Rt < $t ? -m : Rt == $t ? 0 : m;
                    }) : Bt.sort(function(Rt, $t) {
                        var Mt = Rt.toUpperCase(), Xt = $t.toUpperCase();
                        return Mt != Xt && (Rt = Mt, $t = Xt), Rt < $t ? -m : Rt == $t ? 0 : m;
                    }), u.replaceRange(Bt, St, mt), y && R.push({
                        anchor: St,
                        head: E(wt + 1, 0)
                    });
                }
                y && u.setSelections(R, 0);
            });
        }
        function vt(u, h) {
            u.operation(function() {
                for (var m = u.listSelections(), y = [], S = [], N = 0; N < m.length; N++) (F = m[N]).empty() ? (y.push(N), 
                S.push("")) : S.push(h(u.getRange(F.from(), F.to())));
                var P;
                for (u.replaceSelections(S, "around", "case"), N = y.length - 1; N >= 0; N--) {
                    var F = m[y[N]];
                    if (!(P && O.cmpPos(F.head, P) > 0)) {
                        var z = Q(u, F.head);
                        P = z.from, u.replaceRange(h(z.word), z.from, z.to);
                    }
                }
            });
        }
        function dt(u) {
            var h = u.getCursor("from"), m = u.getCursor("to");
            if (O.cmpPos(h, m) == 0) {
                var y = Q(u, h);
                if (!y.word) return;
                h = y.from, m = y.to;
            }
            return {
                from: h,
                to: m,
                query: u.getRange(h, m),
                word: y
            };
        }
        function D(u, h) {
            var m = dt(u);
            if (m) {
                var y = m.query, S = u.getSearchCursor(y, h ? m.to : m.from);
                (h ? S.findNext() : S.findPrevious()) ? u.setSelection(S.from(), S.to()) : (S = u.getSearchCursor(y, h ? E(u.firstLine(), 0) : u.clipPos(E(u.lastLine()))), 
                (h ? S.findNext() : S.findPrevious()) ? u.setSelection(S.from(), S.to()) : m.word && u.setSelection(m.from, m.to));
            }
        }
        G.selectScope = function(u) {
            M(u) || u.execCommand("selectAll");
        }, G.selectBetweenBrackets = function(u) {
            if (!M(u)) return O.Pass;
        }, G.goToBracket = function(u) {
            u.extendSelectionsBy(function(h) {
                var m = u.scanForBracket(h.head, 1, it(u.getTokenTypeAt(h.head)));
                if (m && O.cmpPos(m.pos, h.head) != 0) return m.pos;
                var y = u.scanForBracket(h.head, -1, it(u.getTokenTypeAt(E(h.head.line, h.head.ch + 1))));
                return y && E(y.pos.line, y.pos.ch + 1) || h.head;
            });
        }, G.swapLineUp = function(u) {
            if (u.isReadOnly()) return O.Pass;
            for (var h = u.listSelections(), m = [], y = u.firstLine() - 1, S = [], N = 0; N < h.length; N++) {
                var P = h[N], F = P.from().line - 1, z = P.to().line;
                S.push({
                    anchor: E(P.anchor.line - 1, P.anchor.ch),
                    head: E(P.head.line - 1, P.head.ch)
                }), P.to().ch != 0 || P.empty() || --z, F > y ? m.push(F, z) : m.length && (m[m.length - 1] = z), 
                y = z;
            }
            u.operation(function() {
                for (var L = 0; L < m.length; L += 2) {
                    var R = m[L], v = m[L + 1], U = u.getLine(R);
                    u.replaceRange("", E(R, 0), E(R + 1, 0), "+swapLine"), v > u.lastLine() ? u.replaceRange(`
` + U, E(u.lastLine()), null, "+swapLine") : u.replaceRange(U + `
`, E(v, 0), null, "+swapLine");
                }
                u.setSelections(S), u.scrollIntoView();
            });
        }, G.swapLineDown = function(u) {
            if (u.isReadOnly()) return O.Pass;
            for (var h = u.listSelections(), m = [], y = u.lastLine() + 1, S = h.length - 1; S >= 0; S--) {
                var N = h[S], P = N.to().line + 1, F = N.from().line;
                N.to().ch != 0 || N.empty() || P--, P < y ? m.push(P, F) : m.length && (m[m.length - 1] = F), 
                y = F;
            }
            u.operation(function() {
                for (var z = m.length - 2; z >= 0; z -= 2) {
                    var L = m[z], R = m[z + 1], v = u.getLine(L);
                    L == u.lastLine() ? u.replaceRange("", E(L - 1), E(L), "+swapLine") : u.replaceRange("", E(L, 0), E(L + 1, 0), "+swapLine"), 
                    u.replaceRange(v + `
`, E(R, 0), null, "+swapLine");
                }
                u.scrollIntoView();
            });
        }, G.toggleCommentIndented = function(u) {
            u.toggleComment({
                indent: !0
            });
        }, G.joinLines = function(u) {
            for (var h = u.listSelections(), m = [], y = 0; y < h.length; y++) {
                for (var S = h[y], N = S.from(), P = N.line, F = S.to().line; y < h.length - 1 && h[y + 1].from().line == F; ) F = h[++y].to().line;
                m.push({
                    start: P,
                    end: F,
                    anchor: !S.empty() && N
                });
            }
            u.operation(function() {
                for (var z = 0, L = [], R = 0; R < m.length; R++) {
                    for (var v, U = m[R], wt = U.anchor && E(U.anchor.line - z, U.anchor.ch), St = U.start; St <= U.end; St++) {
                        var mt = St - z;
                        St == U.end && (v = E(mt, u.getLine(mt).length + 1)), mt < u.lastLine() && (u.replaceRange(" ", E(mt), E(mt + 1, /^\s*/.exec(u.getLine(mt + 1))[0].length)), 
                        ++z);
                    }
                    L.push({
                        anchor: wt || v,
                        head: v
                    });
                }
                u.setSelections(L, 0);
            });
        }, G.duplicateLine = function(u) {
            u.operation(function() {
                for (var h = u.listSelections().length, m = 0; m < h; m++) {
                    var y = u.listSelections()[m];
                    y.empty() ? u.replaceRange(u.getLine(y.head.line) + `
`, E(y.head.line, 0)) : u.replaceRange(u.getRange(y.from(), y.to()), y.from());
                }
                u.scrollIntoView();
            });
        }, G.sortLines = function(u) {
            Z(u, !0, 1);
        }, G.reverseSortLines = function(u) {
            Z(u, !0, -1);
        }, G.sortLinesInsensitive = function(u) {
            Z(u, !1, 1);
        }, G.reverseSortLinesInsensitive = function(u) {
            Z(u, !1, -1);
        }, G.nextBookmark = function(u) {
            var h = u.state.sublimeBookmarks;
            if (h) for (;h.length; ) {
                var m = h.shift(), y = m.find();
                if (y) return h.push(m), u.setSelection(y.from, y.to);
            }
        }, G.prevBookmark = function(u) {
            var h = u.state.sublimeBookmarks;
            if (h) for (;h.length; ) {
                h.unshift(h.pop());
                var m = h[h.length - 1].find();
                if (m) return u.setSelection(m.from, m.to);
                h.pop();
            }
        }, G.toggleBookmark = function(u) {
            for (var h = u.listSelections(), m = u.state.sublimeBookmarks || (u.state.sublimeBookmarks = []), y = 0; y < h.length; y++) {
                for (var S = h[y].from(), N = h[y].to(), P = h[y].empty() ? u.findMarksAt(S) : u.findMarks(S, N), F = 0; F < P.length; F++) if (P[F].sublimeBookmark) {
                    P[F].clear();
                    for (var z = 0; z < m.length; z++) m[z] == P[F] && m.splice(z--, 1);
                    break;
                }
                F == P.length && m.push(u.markText(S, N, {
                    sublimeBookmark: !0,
                    clearWhenEmpty: !1
                }));
            }
        }, G.clearBookmarks = function(u) {
            var h = u.state.sublimeBookmarks;
            if (h) for (var m = 0; m < h.length; m++) h[m].clear();
            h.length = 0;
        }, G.selectBookmarks = function(u) {
            var h = u.state.sublimeBookmarks, m = [];
            if (h) for (var y = 0; y < h.length; y++) {
                var S = h[y].find();
                S ? m.push({
                    anchor: S.from,
                    head: S.to
                }) : h.splice(y--, 0);
            }
            m.length && u.setSelections(m, 0);
        }, G.smartBackspace = function(u) {
            if (u.somethingSelected()) return O.Pass;
            u.operation(function() {
                for (var h = u.listSelections(), m = u.getOption("indentUnit"), y = h.length - 1; y >= 0; y--) {
                    var S = h[y].head, N = u.getRange({
                        line: S.line,
                        ch: 0
                    }, S), P = O.countColumn(N, null, u.getOption("tabSize")), F = u.findPosH(S, -1, "char", !1);
                    if (N && !/\S/.test(N) && P % m == 0) {
                        var z = new E(S.line, O.findColumn(N, P - m, m));
                        z.ch != S.ch && (F = z);
                    }
                    u.replaceRange("", F, S, "+delete");
                }
            });
        }, G.delLineRight = function(u) {
            u.operation(function() {
                for (var h = u.listSelections(), m = h.length - 1; m >= 0; m--) u.replaceRange("", h[m].anchor, E(h[m].to().line), "+delete");
                u.scrollIntoView();
            });
        }, G.upcaseAtCursor = function(u) {
            vt(u, function(h) {
                return h.toUpperCase();
            });
        }, G.downcaseAtCursor = function(u) {
            vt(u, function(h) {
                return h.toLowerCase();
            });
        }, G.setSublimeMark = function(u) {
            u.state.sublimeMark && u.state.sublimeMark.clear(), u.state.sublimeMark = u.setBookmark(u.getCursor());
        }, G.selectToSublimeMark = function(u) {
            var h = u.state.sublimeMark && u.state.sublimeMark.find();
            h && u.setSelection(u.getCursor(), h);
        }, G.deleteToSublimeMark = function(u) {
            var h = u.state.sublimeMark && u.state.sublimeMark.find();
            if (h) {
                var m = u.getCursor(), y = h;
                if (O.cmpPos(m, y) > 0) {
                    var S = y;
                    y = m, m = S;
                }
                u.state.sublimeKilled = u.getRange(m, y), u.replaceRange("", m, y);
            }
        }, G.swapWithSublimeMark = function(u) {
            var h = u.state.sublimeMark && u.state.sublimeMark.find();
            h && (u.state.sublimeMark.clear(), u.state.sublimeMark = u.setBookmark(u.getCursor()), 
            u.setCursor(h));
        }, G.sublimeYank = function(u) {
            u.state.sublimeKilled != null && u.replaceSelection(u.state.sublimeKilled, null, "paste");
        }, G.showInCenter = function(u) {
            var h = u.cursorCoords(null, "local");
            u.scrollTo(null, (h.top + h.bottom) / 2 - u.getScrollInfo().clientHeight / 2);
        }, G.findUnder = function(u) {
            D(u, !0);
        }, G.findUnderPrevious = function(u) {
            D(u, !1);
        }, G.findAllUnder = function(u) {
            var h = dt(u);
            if (h) {
                for (var m = u.getSearchCursor(h.query), y = [], S = -1; m.findNext(); ) y.push({
                    anchor: m.from(),
                    head: m.to()
                }), m.from().line <= h.from.line && m.from().ch <= h.from.ch && S++;
                u.setSelections(y, S);
            }
        };
        var b = O.keyMap;
        b.macSublime = {
            "Cmd-Left": "goLineStartSmart",
            "Shift-Tab": "indentLess",
            "Shift-Ctrl-K": "deleteLine",
            "Alt-Q": "wrapLines",
            "Ctrl-Left": "goSubwordLeft",
            "Ctrl-Right": "goSubwordRight",
            "Ctrl-Alt-Up": "scrollLineUp",
            "Ctrl-Alt-Down": "scrollLineDown",
            "Cmd-L": "selectLine",
            "Shift-Cmd-L": "splitSelectionByLine",
            Esc: "singleSelectionTop",
            "Cmd-Enter": "insertLineAfter",
            "Shift-Cmd-Enter": "insertLineBefore",
            "Cmd-D": "selectNextOccurrence",
            "Shift-Cmd-Space": "selectScope",
            "Shift-Cmd-M": "selectBetweenBrackets",
            "Cmd-M": "goToBracket",
            "Cmd-Ctrl-Up": "swapLineUp",
            "Cmd-Ctrl-Down": "swapLineDown",
            "Cmd-/": "toggleCommentIndented",
            "Cmd-J": "joinLines",
            "Shift-Cmd-D": "duplicateLine",
            F5: "sortLines",
            "Shift-F5": "reverseSortLines",
            "Cmd-F5": "sortLinesInsensitive",
            "Shift-Cmd-F5": "reverseSortLinesInsensitive",
            F2: "nextBookmark",
            "Shift-F2": "prevBookmark",
            "Cmd-F2": "toggleBookmark",
            "Shift-Cmd-F2": "clearBookmarks",
            "Alt-F2": "selectBookmarks",
            Backspace: "smartBackspace",
            "Cmd-K Cmd-D": "skipAndSelectNextOccurrence",
            "Cmd-K Cmd-K": "delLineRight",
            "Cmd-K Cmd-U": "upcaseAtCursor",
            "Cmd-K Cmd-L": "downcaseAtCursor",
            "Cmd-K Cmd-Space": "setSublimeMark",
            "Cmd-K Cmd-A": "selectToSublimeMark",
            "Cmd-K Cmd-W": "deleteToSublimeMark",
            "Cmd-K Cmd-X": "swapWithSublimeMark",
            "Cmd-K Cmd-Y": "sublimeYank",
            "Cmd-K Cmd-C": "showInCenter",
            "Cmd-K Cmd-G": "clearBookmarks",
            "Cmd-K Cmd-Backspace": "delLineLeft",
            "Cmd-K Cmd-1": "foldAll",
            "Cmd-K Cmd-0": "unfoldAll",
            "Cmd-K Cmd-J": "unfoldAll",
            "Ctrl-Shift-Up": "addCursorToPrevLine",
            "Ctrl-Shift-Down": "addCursorToNextLine",
            "Cmd-F3": "findUnder",
            "Shift-Cmd-F3": "findUnderPrevious",
            "Alt-F3": "findAllUnder",
            "Shift-Cmd-[": "fold",
            "Shift-Cmd-]": "unfold",
            "Cmd-I": "findIncremental",
            "Shift-Cmd-I": "findIncrementalReverse",
            "Cmd-H": "replace",
            F3: "findNext",
            "Shift-F3": "findPrev",
            fallthrough: "macDefault"
        }, O.normalizeKeyMap(b.macSublime), b.pcSublime = {
            "Shift-Tab": "indentLess",
            "Shift-Ctrl-K": "deleteLine",
            "Alt-Q": "wrapLines",
            "Ctrl-T": "transposeChars",
            "Alt-Left": "goSubwordLeft",
            "Alt-Right": "goSubwordRight",
            "Ctrl-Up": "scrollLineUp",
            "Ctrl-Down": "scrollLineDown",
            "Ctrl-L": "selectLine",
            "Shift-Ctrl-L": "splitSelectionByLine",
            Esc: "singleSelectionTop",
            "Ctrl-Enter": "insertLineAfter",
            "Shift-Ctrl-Enter": "insertLineBefore",
            "Ctrl-D": "selectNextOccurrence",
            "Shift-Ctrl-Space": "selectScope",
            "Shift-Ctrl-M": "selectBetweenBrackets",
            "Ctrl-M": "goToBracket",
            "Shift-Ctrl-Up": "swapLineUp",
            "Shift-Ctrl-Down": "swapLineDown",
            "Ctrl-/": "toggleCommentIndented",
            "Ctrl-J": "joinLines",
            "Shift-Ctrl-D": "duplicateLine",
            F9: "sortLines",
            "Shift-F9": "reverseSortLines",
            "Ctrl-F9": "sortLinesInsensitive",
            "Shift-Ctrl-F9": "reverseSortLinesInsensitive",
            F2: "nextBookmark",
            "Shift-F2": "prevBookmark",
            "Ctrl-F2": "toggleBookmark",
            "Shift-Ctrl-F2": "clearBookmarks",
            "Alt-F2": "selectBookmarks",
            Backspace: "smartBackspace",
            "Ctrl-K Ctrl-D": "skipAndSelectNextOccurrence",
            "Ctrl-K Ctrl-K": "delLineRight",
            "Ctrl-K Ctrl-U": "upcaseAtCursor",
            "Ctrl-K Ctrl-L": "downcaseAtCursor",
            "Ctrl-K Ctrl-Space": "setSublimeMark",
            "Ctrl-K Ctrl-A": "selectToSublimeMark",
            "Ctrl-K Ctrl-W": "deleteToSublimeMark",
            "Ctrl-K Ctrl-X": "swapWithSublimeMark",
            "Ctrl-K Ctrl-Y": "sublimeYank",
            "Ctrl-K Ctrl-C": "showInCenter",
            "Ctrl-K Ctrl-G": "clearBookmarks",
            "Ctrl-K Ctrl-Backspace": "delLineLeft",
            "Ctrl-K Ctrl-1": "foldAll",
            "Ctrl-K Ctrl-0": "unfoldAll",
            "Ctrl-K Ctrl-J": "unfoldAll",
            "Ctrl-Alt-Up": "addCursorToPrevLine",
            "Ctrl-Alt-Down": "addCursorToNextLine",
            "Ctrl-F3": "findUnder",
            "Shift-Ctrl-F3": "findUnderPrevious",
            "Alt-F3": "findAllUnder",
            "Shift-Ctrl-[": "fold",
            "Shift-Ctrl-]": "unfold",
            "Ctrl-I": "findIncremental",
            "Shift-Ctrl-I": "findIncrementalReverse",
            "Ctrl-H": "replace",
            F3: "findNext",
            "Shift-F3": "findPrev",
            fallthrough: "pcDefault"
        }, O.normalizeKeyMap(b.pcSublime);
        var C = b.default == b.macDefault;
        b.sublime = C ? b.macSublime : b.pcSublime;
    })(Xe(), ya()), function(O) {
        function G(_, rt) {
            function at() {
                _.display.wrapper.offsetHeight ? (E(_, rt), _.display.lastWrapHeight != _.display.wrapper.clientHeight && _.refresh()) : rt.timeout = setTimeout(at, rt.delay);
            }
            rt.timeout = setTimeout(at, rt.delay), rt.hurry = function() {
                clearTimeout(rt.timeout), rt.timeout = setTimeout(at, 50);
            }, O.on(window, "mouseup", rt.hurry), O.on(window, "keyup", rt.hurry);
        }
        function E(_, rt) {
            clearTimeout(rt.timeout), O.off(window, "mouseup", rt.hurry), O.off(window, "keyup", rt.hurry);
        }
        O.defineOption("autoRefresh", !1, function(_, rt) {
            _.state.autoRefresh && (E(_, _.state.autoRefresh), _.state.autoRefresh = null), 
            rt && _.display.wrapper.offsetHeight == 0 && G(_, _.state.autoRefresh = {
                delay: rt.delay || 250
            });
        });
    }(Xe());
    const ba = {
        props: {
            codeString: {
                type: [ Object, String ],
                default: null
            },
            readOnly: {
                type: Boolean,
                default: !1
            },
            string: {
                type: Boolean,
                default: !1
            }
        },
        data() {
            return {
                editorText: "",
                textarea: this.codeString ? this.string ? this.codeString : so.stringify(this.codeString) : ""
            };
        },
        mounted() {
            this.editorText = ma.fromTextArea(this.$refs.mycode, {
                mode: {
                    name: "javascript",
                    globalVars: !0
                },
                theme: "blackboard",
                indentWithTabs: !0,
                smartIndent: !0,
                lineNumbers: !0,
                matchBrackets: !0,
                autoRefresh: !0,
                readOnly: this.readOnly,
                extraKeys: {
                    Ctrl: "autocomplete"
                },
                hintOptions: {
                    tables: {
                        users: [ "name", "score", "birthDate" ],
                        countries: [ "name", "population", "size" ]
                    }
                }
            }), this.editorText.on("change", O => {
                this.textarea = O.getValue();
            });
        },
        methods: {
            refresh() {
                this.$nextTick(() => {
                    this.editorText.refresh();
                });
            },
            setValue() {
                this.cminstance.setValue(this.textarea), this.refresh();
            }
        }
    }, wa = {
        class: "text123"
    };
    pa = Mc(ba, [ [ "render", function(O, G, E, _, rt, at) {
        return xc(), Cc("div", wa, [ kc(Lc("textarea", {
            ref: "mycode",
            "onUpdate:modelValue": G[0] || (G[0] = Q => rt.textarea = Q),
            class: "textarea"
        }, null, 512), [ [ Sc, rt.textarea ] ]) ]);
    } ] ]);
});

export {
    pa as _,
    Ac as __tla
};