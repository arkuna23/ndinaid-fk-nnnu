import {
    cJ as bs,
    u as J1,
    T as X1,
    r as Er,
    b9 as K1,
    aX as so,
    U as $1,
    f as Z1,
    A as Q1,
    a as Ze,
    o as Ei,
    c as co,
    t as ze,
    k as ys,
    l as vu,
    dU as tl,
    D as bu,
    z as uo,
    B as ua,
    C as yu,
    v as el,
    F as nl,
    y as rl,
    aY as il,
    aQ as al,
    aC as ol,
    J as sl,
    a9 as cl,
    R as ul,
    S as ll,
    __tla as hl
} from "./index-6c08ea4c.js";

import wu, {
    __tla as fl
} from "./checkOverview-9cc05c66.js";

import dl, {
    __tla as pl
} from "./checkProblems-ac1fe994.js";

import gl, {
    __tla as ml
} from "./checkCodes-f0c443b2.js";

import {
    c as vl,
    __tla as bl
} from "./check-a26308bc.js";

import {
    t as ws,
    __tla as yl
} from "./dialogProblem-fa4d1fd2.js";

import wl from "./html2canvas.esm-ad032b91.js";

import {
    f as Ll,
    __tla as Nl
} from "./formatTime-de6f1520.js";

import {
    _ as xl
} from "./_plugin-vue_export-helper-1b428a4d.js";

let Ls, fe, Lu, Al = Promise.all([ (() => {
    try {
        return hl;
    } catch {}
})(), (() => {
    try {
        return fl;
    } catch {}
})(), (() => {
    try {
        return pl;
    } catch {}
})(), (() => {
    try {
        return ml;
    } catch {}
})(), (() => {
    try {
        return bl;
    } catch {}
})(), (() => {
    try {
        return yl;
    } catch {}
})(), (() => {
    try {
        return Nl;
    } catch {}
})() ]).then(async () => {
    fe = function(i) {
        return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, fe(i);
    };
    var on = Uint8Array, sn = Uint16Array, qi = Uint32Array, la = new on([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ]), ha = new on([ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ]), lo = new on([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]), Ns = function(i, e) {
        for (var n = new sn(31), a = 0; a < 31; ++a) n[a] = e += 1 << i[a - 1];
        var s = new qi(n[30]);
        for (a = 1; a < 30; ++a) for (var o = n[a]; o < n[a + 1]; ++o) s[o] = o - n[a] << 5 | a;
        return [ n, s ];
    }, xs = Ns(la, 2), As = xs[0], ho = xs[1];
    As[28] = 258, ho[258] = 28;
    for (var _s = Ns(ha, 0), Nu = _s[0], Ss = _s[1], fo = new sn(32768), Ae = 0; Ae < 32768; ++Ae) {
        var qr = (43690 & Ae) >>> 1 | (21845 & Ae) << 1;
        qr = (61680 & (qr = (52428 & qr) >>> 2 | (13107 & qr) << 2)) >>> 4 | (3855 & qr) << 4, 
        fo[Ae] = ((65280 & qr) >>> 8 | (255 & qr) << 8) >>> 1;
    }
    var zn = function(i, e, n) {
        for (var a = i.length, s = 0, o = new sn(e); s < a; ++s) ++o[i[s] - 1];
        var l, h = new sn(e);
        for (s = 0; s < e; ++s) h[s] = h[s - 1] + o[s - 1] << 1;
        if (n) {
            l = new sn(1 << e);
            var f = 15 - e;
            for (s = 0; s < a; ++s) if (i[s]) for (var m = s << 4 | i[s], y = e - i[s], b = h[i[s] - 1]++ << y, k = b | (1 << y) - 1; b <= k; ++b) l[fo[b] >>> f] = m;
        } else for (l = new sn(a), s = 0; s < a; ++s) l[s] = fo[h[i[s] - 1]++] >>> 15 - i[s];
        return l;
    }, pr = new on(288);
    for (Ae = 0; Ae < 144; ++Ae) pr[Ae] = 8;
    for (Ae = 144; Ae < 256; ++Ae) pr[Ae] = 9;
    for (Ae = 256; Ae < 280; ++Ae) pr[Ae] = 7;
    for (Ae = 280; Ae < 288; ++Ae) pr[Ae] = 8;
    var Ri = new on(32);
    for (Ae = 0; Ae < 32; ++Ae) Ri[Ae] = 5;
    var xu = zn(pr, 9, 0), Au = zn(pr, 9, 1), _u = zn(Ri, 5, 0), Su = zn(Ri, 5, 1), po = function(i) {
        for (var e = i[0], n = 1; n < i.length; ++n) i[n] > e && (e = i[n]);
        return e;
    }, Pn = function(i, e, n) {
        var a = e / 8 | 0;
        return (i[a] | i[a + 1] << 8) >>> (7 & e) & n;
    }, go = function(i, e) {
        var n = e / 8 | 0;
        return (i[n] | i[n + 1] << 8 | i[n + 2] << 16) >>> (7 & e);
    }, mo = function(i) {
        return (i / 8 | 0) + (7 & i && 1);
    }, Ps = function(i, e, n) {
        (e == null || e < 0) && (e = 0), (n == null || n > i.length) && (n = i.length);
        var a = new (i instanceof sn ? sn : i instanceof qi ? qi : on)(n - e);
        return a.set(i.subarray(e, n)), a;
    }, rr = function(i, e, n) {
        n <<= 7 & e;
        var a = e / 8 | 0;
        i[a] |= n, i[a + 1] |= n >>> 8;
    }, Ti = function(i, e, n) {
        n <<= 7 & e;
        var a = e / 8 | 0;
        i[a] |= n, i[a + 1] |= n >>> 8, i[a + 2] |= n >>> 16;
    }, vo = function(i, e) {
        for (var n = [], a = 0; a < i.length; ++a) i[a] && n.push({
            s: a,
            f: i[a]
        });
        var s = n.length, o = n.slice();
        if (!s) return [ new on(0), 0 ];
        if (s == 1) {
            var l = new on(n[0].s + 1);
            return l[n[0].s] = 1, [ l, 1 ];
        }
        n.sort(function(ot, yt) {
            return ot.f - yt.f;
        }), n.push({
            s: -1,
            f: 25001
        });
        var h = n[0], f = n[1], m = 0, y = 1, b = 2;
        for (n[0] = {
            s: -1,
            f: h.f + f.f,
            l: h,
            r: f
        }; y != s - 1; ) h = n[n[m].f < n[b].f ? m++ : b++], f = n[m != y && n[m].f < n[b].f ? m++ : b++], 
        n[y++] = {
            s: -1,
            f: h.f + f.f,
            l: h,
            r: f
        };
        var k = o[0].s;
        for (a = 1; a < s; ++a) o[a].s > k && (k = o[a].s);
        var p = new sn(k + 1), M = bo(n[y - 1], p, 0);
        if (M > e) {
            a = 0;
            var S = 0, E = M - e, A = 1 << E;
            for (o.sort(function(ot, yt) {
                return p[yt.s] - p[ot.s] || ot.f - yt.f;
            }); a < s; ++a) {
                var U = o[a].s;
                if (!(p[U] > e)) break;
                S += A - (1 << M - p[U]), p[U] = e;
            }
            for (S >>>= E; S > 0; ) {
                var X = o[a].s;
                p[X] < e ? S -= 1 << e - p[X]++ - 1 : ++a;
            }
            for (;a >= 0 && S; --a) {
                var Z = o[a].s;
                p[Z] == e && (--p[Z], ++S);
            }
            M = e;
        }
        return [ new on(p), M ];
    }, bo = function(i, e, n) {
        return i.s == -1 ? Math.max(bo(i.l, e, n + 1), bo(i.r, e, n + 1)) : e[i.s] = n;
    }, ks = function(i) {
        for (var e = i.length; e && !i[--e]; );
        for (var n = new sn(++e), a = 0, s = i[0], o = 1, l = function(f) {
            n[a++] = f;
        }, h = 1; h <= e; ++h) if (i[h] == s && h != e) ++o; else {
            if (!s && o > 2) {
                for (;o > 138; o -= 138) l(32754);
                o > 2 && (l(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), 
                o = 0);
            } else if (o > 3) {
                for (l(s), --o; o > 6; o -= 6) l(8304);
                o > 2 && (l(o - 3 << 5 | 8208), o = 0);
            }
            for (;o--; ) l(s);
            o = 1, s = i[h];
        }
        return [ n.subarray(0, a), e ];
    }, Di = function(i, e) {
        for (var n = 0, a = 0; a < e.length; ++a) n += i[a] * e[a];
        return n;
    }, fa = function(i, e, n) {
        var a = n.length, s = mo(e + 2);
        i[s] = 255 & a, i[s + 1] = a >>> 8, i[s + 2] = 255 ^ i[s], i[s + 3] = 255 ^ i[s + 1];
        for (var o = 0; o < a; ++o) i[s + o + 4] = n[o];
        return 8 * (s + 4 + a);
    }, Fs = function(i, e, n, a, s, o, l, h, f, m, y) {
        rr(e, y++, n), ++s[256];
        for (var b = vo(s, 15), k = b[0], p = b[1], M = vo(o, 15), S = M[0], E = M[1], A = ks(k), U = A[0], X = A[1], Z = ks(S), ot = Z[0], yt = Z[1], Lt = new sn(19), O = 0; O < U.length; ++O) Lt[31 & U[O]]++;
        for (O = 0; O < ot.length; ++O) Lt[31 & ot[O]]++;
        for (var lt = vo(Lt, 7), vt = lt[0], P = lt[1], I = 19; I > 4 && !vt[lo[I - 1]]; --I);
        var R, T, at, rt, pt = m + 5 << 3, Q = Di(s, pr) + Di(o, Ri) + l, st = Di(s, k) + Di(o, S) + l + 14 + 3 * I + Di(Lt, vt) + (2 * Lt[16] + 3 * Lt[17] + 7 * Lt[18]);
        if (pt <= Q && pt <= st) return fa(e, y, i.subarray(f, f + m));
        if (rr(e, y, 1 + (st < Q)), y += 2, st < Q) {
            R = zn(k, p, 0), T = k, at = zn(S, E, 0), rt = S;
            var ct = zn(vt, P, 0);
            for (rr(e, y, X - 257), rr(e, y + 5, yt - 1), rr(e, y + 10, I - 4), 
            y += 14, O = 0; O < I; ++O) rr(e, y + 3 * O, vt[lo[O]]);
            y += 3 * I;
            for (var Ct = [ U, ot ], L = 0; L < 2; ++L) {
                var j = Ct[L];
                for (O = 0; O < j.length; ++O) {
                    var q = 31 & j[O];
                    rr(e, y, ct[q]), y += vt[q], q > 15 && (rr(e, y, j[O] >>> 5 & 127), 
                    y += j[O] >>> 12);
                }
            }
        } else R = xu, T = pr, at = _u, rt = Ri;
        for (O = 0; O < h; ++O) if (a[O] > 255) {
            q = a[O] >>> 18 & 31, Ti(e, y, R[q + 257]), y += T[q + 257], q > 7 && (rr(e, y, a[O] >>> 23 & 31), 
            y += la[q]);
            var W = 31 & a[O];
            Ti(e, y, at[W]), y += rt[W], W > 3 && (Ti(e, y, a[O] >>> 5 & 8191), 
            y += ha[W]);
        } else Ti(e, y, R[a[O]]), y += T[a[O]];
        return Ti(e, y, R[256]), y + T[256];
    }, Pu = new qi([ 65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632 ]), ku = new on(0), Fu = function(i, e, n, a, s) {
        return function(o, l, h, f, m, y) {
            var b = o.length, k = new on(f + b + 5 * (1 + Math.floor(b / 7e3)) + m), p = k.subarray(f, k.length - m), M = 0;
            if (!l || b < 8) for (var S = 0; S <= b; S += 65535) {
                var E = S + 65535;
                E < b ? M = fa(p, M, o.subarray(S, E)) : (p[S] = y, M = fa(p, M, o.subarray(S, b)));
            } else {
                for (var A = Pu[l - 1], U = A >>> 13, X = 8191 & A, Z = (1 << h) - 1, ot = new sn(32768), yt = new sn(Z + 1), Lt = Math.ceil(h / 3), O = 2 * Lt, lt = function(Vt) {
                    return (o[Vt] ^ o[Vt + 1] << Lt ^ o[Vt + 2] << O) & Z;
                }, vt = new qi(25e3), P = new sn(288), I = new sn(32), R = 0, T = 0, at = (S = 0, 
                0), rt = 0, pt = 0; S < b; ++S) {
                    var Q = lt(S), st = 32767 & S, ct = yt[Q];
                    if (ot[st] = ct, yt[Q] = st, rt <= S) {
                        var Ct = b - S;
                        if ((R > 7e3 || at > 24576) && Ct > 423) {
                            M = Fs(o, p, 0, vt, P, I, T, at, pt, S - pt, M), at = R = T = 0, 
                            pt = S;
                            for (var L = 0; L < 286; ++L) P[L] = 0;
                            for (L = 0; L < 30; ++L) I[L] = 0;
                        }
                        var j = 2, q = 0, W = X, G = st - ct & 32767;
                        if (Ct > 2 && Q == lt(S - G)) for (var tt = Math.min(U, Ct) - 1, et = Math.min(32767, S), nt = Math.min(258, Ct); G <= et && --W && st != ct; ) {
                            if (o[S + j] == o[S + j - G]) {
                                for (var wt = 0; wt < nt && o[S + wt] == o[S + wt - G]; ++wt);
                                if (wt > j) {
                                    if (j = wt, q = G, wt > tt) break;
                                    var Nt = Math.min(G, wt - 2), Ft = 0;
                                    for (L = 0; L < Nt; ++L) {
                                        var kt = S - G + L + 32768 & 32767, zt = kt - ot[kt] + 32768 & 32767;
                                        zt > Ft && (Ft = zt, ct = kt);
                                    }
                                }
                            }
                            G += (st = ct) - (ct = ot[st]) + 32768 & 32767;
                        }
                        if (q) {
                            vt[at++] = 268435456 | ho[j] << 18 | Ss[q];
                            var F = 31 & ho[j], At = 31 & Ss[q];
                            T += la[F] + ha[At], ++P[257 + F], ++I[At], rt = S + j, 
                            ++R;
                        } else vt[at++] = o[S], ++P[o[S]];
                    }
                }
                M = Fs(o, p, y, vt, P, I, T, at, pt, S - pt, M), y || (M = fa(p, M, ku));
            }
            return Ps(k, 0, f + mo(M) + m);
        }(i, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(i.length)))) : 12 + e.mem, n, a, !s);
    };
    function Is(i, e) {
        e === void 0 && (e = {});
        var n = function() {
            var s = 1, o = 0;
            return {
                p: function(l) {
                    for (var h = s, f = o, m = l.length, y = 0; y != m; ) {
                        for (var b = Math.min(y + 5552, m); y < b; ++y) f += h += l[y];
                        h %= 65521, f %= 65521;
                    }
                    s = h, o = f;
                },
                d: function() {
                    return (s >>> 8 << 16 | (255 & o) << 8 | o >>> 8) + 2 * ((255 & s) << 23);
                }
            };
        }();
        n.p(i);
        var a = Fu(i, e, 2, 4);
        return function(s, o) {
            var l = o.level, h = l == 0 ? 0 : l < 6 ? 1 : l == 9 ? 3 : 2;
            s[0] = 120, s[1] = h << 6 | (h ? 32 - 2 * h : 1);
        }(a, e), function(s, o, l) {
            for (;l; ++o) s[o] = l, l >>>= 8;
        }(a, a.length - 4, n.d()), a;
    }
    function Iu(i, e) {
        return function(n, a, s) {
            var o = n.length, l = !a || s, h = !s || s.i;
            s || (s = {}), a || (a = new on(3 * o));
            var f = function(et) {
                var nt = a.length;
                if (et > nt) {
                    var wt = new on(Math.max(2 * nt, et));
                    wt.set(a), a = wt;
                }
            }, m = s.f || 0, y = s.p || 0, b = s.b || 0, k = s.l, p = s.d, M = s.m, S = s.n, E = 8 * o;
            do {
                if (!k) {
                    s.f = m = Pn(n, y, 1);
                    var A = Pn(n, y + 1, 3);
                    if (y += 3, !A) {
                        var U = n[(R = mo(y) + 4) - 4] | n[R - 3] << 8, X = R + U;
                        if (X > o) {
                            if (h) throw "unexpected EOF";
                            break;
                        }
                        l && f(b + U), a.set(n.subarray(R, X), b), s.b = b += U, 
                        s.p = y = 8 * X;
                        continue;
                    }
                    if (A == 1) k = Au, p = Su, M = 9, S = 5; else {
                        if (A != 2) throw "invalid block type";
                        var Z = Pn(n, y, 31) + 257, ot = Pn(n, y + 10, 15) + 4, yt = Z + Pn(n, y + 5, 31) + 1;
                        y += 14;
                        for (var Lt = new on(yt), O = new on(19), lt = 0; lt < ot; ++lt) O[lo[lt]] = Pn(n, y + 3 * lt, 7);
                        y += 3 * ot;
                        var vt = po(O), P = (1 << vt) - 1;
                        if (!h && y + yt * (vt + 7) > E) break;
                        var I = zn(O, vt, 1);
                        for (lt = 0; lt < yt; ) {
                            var R, T = I[Pn(n, y, P)];
                            if (y += 15 & T, (R = T >>> 4) < 16) Lt[lt++] = R; else {
                                var at = 0, rt = 0;
                                for (R == 16 ? (rt = 3 + Pn(n, y, 3), y += 2, at = Lt[lt - 1]) : R == 17 ? (rt = 3 + Pn(n, y, 7), 
                                y += 3) : R == 18 && (rt = 11 + Pn(n, y, 127), y += 7); rt--; ) Lt[lt++] = at;
                            }
                        }
                        var pt = Lt.subarray(0, Z), Q = Lt.subarray(Z);
                        M = po(pt), S = po(Q), k = zn(pt, M, 1), p = zn(Q, S, 1);
                    }
                    if (y > E) throw "unexpected EOF";
                }
                l && f(b + 131072);
                for (var st = (1 << M) - 1, ct = (1 << S) - 1, Ct = M + S + 18; h || y + Ct < E; ) {
                    var L = (at = k[go(n, y) & st]) >>> 4;
                    if ((y += 15 & at) > E) throw "unexpected EOF";
                    if (!at) throw "invalid length/literal";
                    if (L < 256) a[b++] = L; else {
                        if (L == 256) {
                            k = null;
                            break;
                        }
                        var j = L - 254;
                        if (L > 264) {
                            var q = la[lt = L - 257];
                            j = Pn(n, y, (1 << q) - 1) + As[lt], y += q;
                        }
                        var W = p[go(n, y) & ct], G = W >>> 4;
                        if (!W) throw "invalid distance";
                        if (y += 15 & W, Q = Nu[G], G > 3 && (q = ha[G], Q += go(n, y) & (1 << q) - 1, 
                        y += q), y > E) throw "unexpected EOF";
                        l && f(b + 131072);
                        for (var tt = b + j; b < tt; b += 4) a[b] = a[b - Q], a[b + 1] = a[b + 1 - Q], 
                        a[b + 2] = a[b + 2 - Q], a[b + 3] = a[b + 3 - Q];
                        b = tt;
                    }
                }
                s.l = k, s.p = y, s.b = b, k && (m = 1, s.m = M, s.d = p, s.n = S);
            } while (!m);
            return b == a.length ? a : Ps(a, 0, b);
        }((function(n) {
            if ((15 & n[0]) != 8 || n[0] >>> 4 > 7 || (n[0] << 8 | n[1]) % 31) throw "invalid zlib data";
            if (32 & n[1]) throw "invalid zlib data: preset dictionaries not supported";
        }(i), i.subarray(2, -4)), e);
    }
    var Ht = function() {
        return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
    }();
    function yo() {
        Ht.console && typeof Ht.console.log == "function" && Ht.console.log.apply(Ht.console, arguments);
    }
    var ye = {
        log: yo,
        warn: function(i) {
            Ht.console && (typeof Ht.console.warn == "function" ? Ht.console.warn.apply(Ht.console, arguments) : yo.call(null, arguments));
        },
        error: function(i) {
            Ht.console && (typeof Ht.console.error == "function" ? Ht.console.error.apply(Ht.console, arguments) : yo(i));
        }
    };
    function wo(i, e, n) {
        var a = new XMLHttpRequest();
        a.open("GET", i), a.responseType = "blob", a.onload = function() {
            Rr(a.response, e, n);
        }, a.onerror = function() {
            ye.error("could not download file");
        }, a.send();
    }
    function Cs(i) {
        var e = new XMLHttpRequest();
        e.open("HEAD", i, !1);
        try {
            e.send();
        } catch {}
        return e.status >= 200 && e.status <= 299;
    }
    function da(i) {
        try {
            i.dispatchEvent(new MouseEvent("click"));
        } catch {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), 
            i.dispatchEvent(e);
        }
    }
    var zi, Lo, Rr = Ht.saveAs || ((typeof window > "u" ? "undefined" : fe(window)) !== "object" || window !== Ht ? function() {} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(i, e, n) {
        var a = Ht.URL || Ht.webkitURL, s = document.createElement("a");
        e = e || i.name || "download", s.download = e, s.rel = "noopener", typeof i == "string" ? (s.href = i, 
        s.origin !== location.origin ? Cs(s.href) ? wo(i, e, n) : da(s, s.target = "_blank") : da(s)) : (s.href = a.createObjectURL(i), 
        setTimeout(function() {
            a.revokeObjectURL(s.href);
        }, 4e4), setTimeout(function() {
            da(s);
        }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(i, e, n) {
        if (e = e || i.name || "download", typeof i == "string") if (Cs(i)) wo(i, e, n); else {
            var a = document.createElement("a");
            a.href = i, a.target = "_blank", setTimeout(function() {
                da(a);
            });
        } else navigator.msSaveOrOpenBlob(function(s, o) {
            return o === void 0 ? o = {
                autoBom: !1
            } : fe(o) !== "object" && (ye.warn("Deprecated: Expected third argument to be a object"), 
            o = {
                autoBom: !o
            }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob([ String.fromCharCode(65279), s ], {
                type: s.type
            }) : s;
        }(i, n), e);
    } : function(i, e, n, a) {
        if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), 
        typeof i == "string") return wo(i, e, n);
        var s = i.type === "application/octet-stream", o = /constructor/i.test(Ht.HTMLElement) || Ht.safari, l = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((l || s && o) && (typeof FileReader > "u" ? "undefined" : fe(FileReader)) === "object") {
            var h = new FileReader();
            h.onloadend = function() {
                var y = h.result;
                y = l ? y : y.replace(/^data:[^;]*;/, "data:attachment/file;"), 
                a ? a.location.href = y : location = y, a = null;
            }, h.readAsDataURL(i);
        } else {
            var f = Ht.URL || Ht.webkitURL, m = f.createObjectURL(i);
            a ? a.location = m : location.href = m, a = null, setTimeout(function() {
                f.revokeObjectURL(m);
            }, 4e4);
        }
    });
    function js(i) {
        var e;
        i = i || "", this.ok = !1, i.charAt(0) == "#" && (i = i.substr(1, 6)), i = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dodgerblue: "1e90ff",
            feldspar: "d19275",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslateblue: "8470ff",
            lightslategray: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370d8",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "d87093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            violetred: "d02090",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        }[i = (i = i.replace(/ /g, "")).toLowerCase()] || i;
        for (var n = [ {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
            process: function(h) {
                return [ parseInt(h[1]), parseInt(h[2]), parseInt(h[3]) ];
            }
        }, {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: [ "#00ff00", "336699" ],
            process: function(h) {
                return [ parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16) ];
            }
        }, {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: [ "#fb0", "f0f" ],
            process: function(h) {
                return [ parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16) ];
            }
        } ], a = 0; a < n.length; a++) {
            var s = n[a].re, o = n[a].process, l = s.exec(i);
            l && (e = o(l), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, 
        this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, 
        this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, 
        this.toRGB = function() {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }, this.toHex = function() {
            var h = this.r.toString(16), f = this.g.toString(16), m = this.b.toString(16);
            return h.length == 1 && (h = "0" + h), f.length == 1 && (f = "0" + f), 
            m.length == 1 && (m = "0" + m), "#" + h + f + m;
        };
    }
    function No(i, e) {
        var n = i[0], a = i[1], s = i[2], o = i[3];
        n = Qe(n, a, s, o, e[0], 7, -680876936), o = Qe(o, n, a, s, e[1], 12, -389564586), 
        s = Qe(s, o, n, a, e[2], 17, 606105819), a = Qe(a, s, o, n, e[3], 22, -1044525330), 
        n = Qe(n, a, s, o, e[4], 7, -176418897), o = Qe(o, n, a, s, e[5], 12, 1200080426), 
        s = Qe(s, o, n, a, e[6], 17, -1473231341), a = Qe(a, s, o, n, e[7], 22, -45705983), 
        n = Qe(n, a, s, o, e[8], 7, 1770035416), o = Qe(o, n, a, s, e[9], 12, -1958414417), 
        s = Qe(s, o, n, a, e[10], 17, -42063), a = Qe(a, s, o, n, e[11], 22, -1990404162), 
        n = Qe(n, a, s, o, e[12], 7, 1804603682), o = Qe(o, n, a, s, e[13], 12, -40341101), 
        s = Qe(s, o, n, a, e[14], 17, -1502002290), n = tn(n, a = Qe(a, s, o, n, e[15], 22, 1236535329), s, o, e[1], 5, -165796510), 
        o = tn(o, n, a, s, e[6], 9, -1069501632), s = tn(s, o, n, a, e[11], 14, 643717713), 
        a = tn(a, s, o, n, e[0], 20, -373897302), n = tn(n, a, s, o, e[5], 5, -701558691), 
        o = tn(o, n, a, s, e[10], 9, 38016083), s = tn(s, o, n, a, e[15], 14, -660478335), 
        a = tn(a, s, o, n, e[4], 20, -405537848), n = tn(n, a, s, o, e[9], 5, 568446438), 
        o = tn(o, n, a, s, e[14], 9, -1019803690), s = tn(s, o, n, a, e[3], 14, -187363961), 
        a = tn(a, s, o, n, e[8], 20, 1163531501), n = tn(n, a, s, o, e[13], 5, -1444681467), 
        o = tn(o, n, a, s, e[2], 9, -51403784), s = tn(s, o, n, a, e[7], 14, 1735328473), 
        n = en(n, a = tn(a, s, o, n, e[12], 20, -1926607734), s, o, e[5], 4, -378558), 
        o = en(o, n, a, s, e[8], 11, -2022574463), s = en(s, o, n, a, e[11], 16, 1839030562), 
        a = en(a, s, o, n, e[14], 23, -35309556), n = en(n, a, s, o, e[1], 4, -1530992060), 
        o = en(o, n, a, s, e[4], 11, 1272893353), s = en(s, o, n, a, e[7], 16, -155497632), 
        a = en(a, s, o, n, e[10], 23, -1094730640), n = en(n, a, s, o, e[13], 4, 681279174), 
        o = en(o, n, a, s, e[0], 11, -358537222), s = en(s, o, n, a, e[3], 16, -722521979), 
        a = en(a, s, o, n, e[6], 23, 76029189), n = en(n, a, s, o, e[9], 4, -640364487), 
        o = en(o, n, a, s, e[12], 11, -421815835), s = en(s, o, n, a, e[15], 16, 530742520), 
        n = nn(n, a = en(a, s, o, n, e[2], 23, -995338651), s, o, e[0], 6, -198630844), 
        o = nn(o, n, a, s, e[7], 10, 1126891415), s = nn(s, o, n, a, e[14], 15, -1416354905), 
        a = nn(a, s, o, n, e[5], 21, -57434055), n = nn(n, a, s, o, e[12], 6, 1700485571), 
        o = nn(o, n, a, s, e[3], 10, -1894986606), s = nn(s, o, n, a, e[10], 15, -1051523), 
        a = nn(a, s, o, n, e[1], 21, -2054922799), n = nn(n, a, s, o, e[8], 6, 1873313359), 
        o = nn(o, n, a, s, e[15], 10, -30611744), s = nn(s, o, n, a, e[6], 15, -1560198380), 
        a = nn(a, s, o, n, e[13], 21, 1309151649), n = nn(n, a, s, o, e[4], 6, -145523070), 
        o = nn(o, n, a, s, e[11], 10, -1120210379), s = nn(s, o, n, a, e[2], 15, 718787259), 
        a = nn(a, s, o, n, e[9], 21, -343485551), i[0] = gr(n, i[0]), i[1] = gr(a, i[1]), 
        i[2] = gr(s, i[2]), i[3] = gr(o, i[3]);
    }
    function pa(i, e, n, a, s, o) {
        return e = gr(gr(e, i), gr(a, o)), gr(e << s | e >>> 32 - s, n);
    }
    function Qe(i, e, n, a, s, o, l) {
        return pa(e & n | ~e & a, i, e, s, o, l);
    }
    function tn(i, e, n, a, s, o, l) {
        return pa(e & a | n & ~a, i, e, s, o, l);
    }
    function en(i, e, n, a, s, o, l) {
        return pa(e ^ n ^ a, i, e, s, o, l);
    }
    function nn(i, e, n, a, s, o, l) {
        return pa(n ^ (e | ~a), i, e, s, o, l);
    }
    function Os(i) {
        var e, n = i.length, a = [ 1732584193, -271733879, -1732584194, 271733878 ];
        for (e = 64; e <= i.length; e += 64) No(a, Cu(i.substring(e - 64, e)));
        i = i.substring(e - 64);
        var s = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (e = 0; e < i.length; e++) s[e >> 2] |= i.charCodeAt(e) << (e % 4 << 3);
        if (s[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (No(a, s), e = 0; e < 16; e++) s[e] = 0;
        return s[14] = 8 * n, No(a, s), a;
    }
    function Cu(i) {
        var e, n = [];
        for (e = 0; e < 64; e += 4) n[e >> 2] = i.charCodeAt(e) + (i.charCodeAt(e + 1) << 8) + (i.charCodeAt(e + 2) << 16) + (i.charCodeAt(e + 3) << 24);
        return n;
    }
    zi = Ht.atob.bind(Ht), Lo = Ht.btoa.bind(Ht);
    var Bs = "0123456789abcdef".split("");
    function ju(i) {
        for (var e = "", n = 0; n < 4; n++) e += Bs[i >> 8 * n + 4 & 15] + Bs[i >> 8 * n & 15];
        return e;
    }
    function Ou(i) {
        return String.fromCharCode(255 & i, (65280 & i) >> 8, (16711680 & i) >> 16, (4278190080 & i) >> 24);
    }
    function xo(i) {
        return Os(i).map(Ou).join("");
    }
    var Bu = function(i) {
        for (var e = 0; e < i.length; e++) i[e] = ju(i[e]);
        return i.join("");
    }(Os("hello")) != "5d41402abc4b2a76b9719d911017c592";
    function gr(i, e) {
        if (Bu) {
            var n = (65535 & i) + (65535 & e);
            return (i >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n;
        }
        return i + e & 4294967295;
    }
    function Ao(i, e) {
        var n, a, s, o;
        if (i !== n) {
            for (var l = (s = i, o = 1 + (256 / i.length | 0), new Array(o + 1).join(s)), h = [], f = 0; f < 256; f++) h[f] = f;
            var m = 0;
            for (f = 0; f < 256; f++) {
                var y = h[f];
                m = (m + y + l.charCodeAt(f)) % 256, h[f] = h[m], h[m] = y;
            }
            n = i, a = h;
        } else h = a;
        var b = e.length, k = 0, p = 0, M = "";
        for (f = 0; f < b; f++) p = (p + (y = h[k = (k + 1) % 256])) % 256, h[k] = h[p], 
        h[p] = y, l = h[(h[k] + h[p]) % 256], M += String.fromCharCode(e.charCodeAt(f) ^ l);
        return M;
    }
    var Ms = {
        print: 4,
        modify: 8,
        copy: 16,
        "annot-forms": 32
    };
    function ti(i, e, n, a) {
        this.v = 1, this.r = 2;
        var s = 192;
        i.forEach(function(h) {
            if (Ms.perm !== void 0) throw new Error("Invalid permission: " + h);
            s += Ms[h];
        }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
        var o = (e + this.padding).substr(0, 32), l = (n + this.padding).substr(0, 32);
        this.O = this.processOwnerPassword(o, l), this.P = -(1 + (255 ^ s)), this.encryptionKey = xo(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(0, 5), 
        this.U = Ao(this.encryptionKey, this.padding);
    }
    function ei(i) {
        if (/[^\u0000-\u00ff]/.test(i)) throw new Error("Invalid PDF Name Object: " + i + ", Only accept ASCII characters.");
        for (var e = "", n = i.length, a = 0; a < n; a++) {
            var s = i.charCodeAt(a);
            e += s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? "#" + ("0" + s.toString(16)).slice(-2) : i[a];
        }
        return e;
    }
    function Es(i) {
        if (fe(i) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
        var e = {};
        this.subscribe = function(n, a, s) {
            if (s = s || !1, typeof n != "string" || typeof a != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
            e.hasOwnProperty(n) || (e[n] = {});
            var o = Math.random().toString(35);
            return e[n][o] = [ a, !!s ], o;
        }, this.unsubscribe = function(n) {
            for (var a in e) if (e[a][n]) return delete e[a][n], Object.keys(e[a]).length === 0 && delete e[a], 
            !0;
            return !1;
        }, this.publish = function(n) {
            if (e.hasOwnProperty(n)) {
                var a = Array.prototype.slice.call(arguments, 1), s = [];
                for (var o in e[n]) {
                    var l = e[n][o];
                    try {
                        l[0].apply(i, a);
                    } catch (h) {
                        Ht.console && ye.error("jsPDF PubSub Error", h.message, h);
                    }
                    l[1] && s.push(o);
                }
                s.length && s.forEach(this.unsubscribe);
            }
        }, this.getTopics = function() {
            return e;
        };
    }
    function ga(i) {
        if (!(this instanceof ga)) return new ga(i);
        var e = "opacity,stroke-opacity".split(",");
        for (var n in i) i.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = i[n]);
        this.id = "", this.objectNumber = -1;
    }
    function qs(i, e) {
        this.gState = i, this.matrix = e, this.id = "", this.objectNumber = -1;
    }
    function Tr(i, e, n, a, s) {
        if (!(this instanceof Tr)) return new Tr(i, e, n, a, s);
        this.type = i === "axial" ? 2 : 3, this.coords = e, this.colors = n, qs.call(this, a, s);
    }
    function ni(i, e, n, a, s) {
        if (!(this instanceof ni)) return new ni(i, e, n, a, s);
        this.boundingBox = i, this.xStep = e, this.yStep = n, this.stream = "", 
        this.cloneIndex = 0, qs.call(this, a, s);
    }
    function Wt(i) {
        var e, n = typeof arguments[0] == "string" ? arguments[0] : "p", a = arguments[1], s = arguments[2], o = arguments[3], l = [], h = 1, f = 16, m = "S", y = null;
        fe(i = i || {}) === "object" && (n = i.orientation, a = i.unit || a, s = i.format || s, 
        o = i.compress || i.compressPdf || o, (y = i.encryption || null) !== null && (y.userPassword = y.userPassword || "", 
        y.ownerPassword = y.ownerPassword || "", y.userPermissions = y.userPermissions || []), 
        h = typeof i.userUnit == "number" ? Math.abs(i.userUnit) : 1, i.precision !== void 0 && (e = i.precision), 
        i.floatPrecision !== void 0 && (f = i.floatPrecision), m = i.defaultPathOperation || "S"), 
        l = i.filters || (o === !0 ? [ "FlateEncode" ] : l), a = a || "mm", n = ("" + (n || "P")).toLowerCase();
        var b = i.putOnlyUsedFonts || !1, k = {}, p = {
            internal: {},
            __private__: {}
        };
        p.__private__.PubSub = Es;
        var M = "1.3", S = p.__private__.getPdfVersion = function() {
            return M;
        };
        p.__private__.setPdfVersion = function(c) {
            M = c;
        };
        var E = {
            a0: [ 2383.94, 3370.39 ],
            a1: [ 1683.78, 2383.94 ],
            a2: [ 1190.55, 1683.78 ],
            a3: [ 841.89, 1190.55 ],
            a4: [ 595.28, 841.89 ],
            a5: [ 419.53, 595.28 ],
            a6: [ 297.64, 419.53 ],
            a7: [ 209.76, 297.64 ],
            a8: [ 147.4, 209.76 ],
            a9: [ 104.88, 147.4 ],
            a10: [ 73.7, 104.88 ],
            b0: [ 2834.65, 4008.19 ],
            b1: [ 2004.09, 2834.65 ],
            b2: [ 1417.32, 2004.09 ],
            b3: [ 1000.63, 1417.32 ],
            b4: [ 708.66, 1000.63 ],
            b5: [ 498.9, 708.66 ],
            b6: [ 354.33, 498.9 ],
            b7: [ 249.45, 354.33 ],
            b8: [ 175.75, 249.45 ],
            b9: [ 124.72, 175.75 ],
            b10: [ 87.87, 124.72 ],
            c0: [ 2599.37, 3676.54 ],
            c1: [ 1836.85, 2599.37 ],
            c2: [ 1298.27, 1836.85 ],
            c3: [ 918.43, 1298.27 ],
            c4: [ 649.13, 918.43 ],
            c5: [ 459.21, 649.13 ],
            c6: [ 323.15, 459.21 ],
            c7: [ 229.61, 323.15 ],
            c8: [ 161.57, 229.61 ],
            c9: [ 113.39, 161.57 ],
            c10: [ 79.37, 113.39 ],
            dl: [ 311.81, 623.62 ],
            letter: [ 612, 792 ],
            "government-letter": [ 576, 756 ],
            legal: [ 612, 1008 ],
            "junior-legal": [ 576, 360 ],
            ledger: [ 1224, 792 ],
            tabloid: [ 792, 1224 ],
            "credit-card": [ 153, 243 ]
        };
        p.__private__.getPageFormats = function() {
            return E;
        };
        var A = p.__private__.getPageFormat = function(c) {
            return E[c];
        };
        s = s || "a4";
        var U = "compat", X = "advanced", Z = U;
        function ot() {
            this.saveGraphicsState(), F(new Ut(Zt, 0, 0, -Zt, 0, bn() * Zt).toString() + " cm"), 
            this.setFontSize(this.getFontSize() / Zt), m = "n", Z = X;
        }
        function yt() {
            this.restoreGraphicsState(), m = "S", Z = U;
        }
        var Lt = p.__private__.combineFontStyleAndFontWeight = function(c, g) {
            if (c == "bold" && g == "normal" || c == "bold" && g == 400 || c == "normal" && g == "italic" || c == "bold" && g == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
            return g && (c = g == 400 || g === "normal" ? c === "italic" ? "italic" : "normal" : g != 700 && g !== "bold" || c !== "normal" ? (g == 700 ? "bold" : g) + "" + c : "bold"), 
            c;
        };
        p.advancedAPI = function(c) {
            var g = Z === U;
            return g && ot.call(this), typeof c != "function" || (c(this), g && yt.call(this)), 
            this;
        }, p.compatAPI = function(c) {
            var g = Z === X;
            return g && yt.call(this), typeof c != "function" || (c(this), g && ot.call(this)), 
            this;
        }, p.isAdvancedAPI = function() {
            return Z === X;
        };
        var O, lt = function(c) {
            if (Z !== X) throw new Error(c + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
        }, vt = p.roundToPrecision = p.__private__.roundToPrecision = function(c, g) {
            var B = e || g;
            if (isNaN(c) || isNaN(B)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
            return c.toFixed(B).replace(/0+$/, "");
        };
        O = p.hpf = p.__private__.hpf = typeof f == "number" ? function(c) {
            if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
            return vt(c, f);
        } : f === "smart" ? function(c) {
            if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
            return vt(c, c > -1 && c < 1 ? 16 : 5);
        } : function(c) {
            if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
            return vt(c, 16);
        };
        var P = p.f2 = p.__private__.f2 = function(c) {
            if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f2");
            return vt(c, 2);
        }, I = p.__private__.f3 = function(c) {
            if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f3");
            return vt(c, 3);
        }, R = p.scale = p.__private__.scale = function(c) {
            if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.scale");
            return Z === U ? c * Zt : Z === X ? c : void 0;
        }, T = function(c) {
            return R(function(g) {
                return Z === U ? bn() - g : Z === X ? g : void 0;
            }(c));
        };
        p.__private__.setPrecision = p.setPrecision = function(c) {
            typeof parseInt(c, 10) == "number" && (e = parseInt(c, 10));
        };
        var at, rt = "00000000000000000000000000000000", pt = p.__private__.getFileId = function() {
            return rt;
        }, Q = p.__private__.setFileId = function(c) {
            return rt = c !== void 0 && /^[a-fA-F0-9]{32}$/.test(c) ? c.toUpperCase() : rt.split("").map(function() {
                return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
            }).join(""), y !== null && (Xe = new ti(y.userPermissions, y.userPassword, y.ownerPassword, rt)), 
            rt;
        };
        p.setFileId = function(c) {
            return Q(c), this;
        }, p.getFileId = function() {
            return pt();
        };
        var st = p.__private__.convertDateToPDFDate = function(c) {
            var g = c.getTimezoneOffset(), B = g < 0 ? "+" : "-", D = Math.floor(Math.abs(g / 60)), J = Math.abs(g % 60), ut = [ B, q(D), "'", q(J), "'" ].join("");
            return [ "D:", c.getFullYear(), q(c.getMonth() + 1), q(c.getDate()), q(c.getHours()), q(c.getMinutes()), q(c.getSeconds()), ut ].join("");
        }, ct = p.__private__.convertPDFDateToDate = function(c) {
            var g = parseInt(c.substr(2, 4), 10), B = parseInt(c.substr(6, 2), 10) - 1, D = parseInt(c.substr(8, 2), 10), J = parseInt(c.substr(10, 2), 10), ut = parseInt(c.substr(12, 2), 10), bt = parseInt(c.substr(14, 2), 10);
            return new Date(g, B, D, J, ut, bt, 0);
        }, Ct = p.__private__.setCreationDate = function(c) {
            var g;
            if (c === void 0 && (c = new Date()), c instanceof Date) g = st(c); else {
                if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(c)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
                g = c;
            }
            return at = g;
        }, L = p.__private__.getCreationDate = function(c) {
            var g = at;
            return c === "jsDate" && (g = ct(at)), g;
        };
        p.setCreationDate = function(c) {
            return Ct(c), this;
        }, p.getCreationDate = function(c) {
            return L(c);
        };
        var j, q = p.__private__.padd2 = function(c) {
            return ("0" + parseInt(c)).slice(-2);
        }, W = p.__private__.padd2Hex = function(c) {
            return ("00" + (c = c.toString())).substr(c.length);
        }, G = 0, tt = [], et = [], nt = 0, wt = [], Nt = [], Ft = !1, kt = et;
        p.__private__.setCustomOutputDestination = function(c) {
            Ft = !0, kt = c;
        };
        var zt = function(c) {
            Ft || (kt = c);
        };
        p.__private__.resetCustomOutputDestination = function() {
            Ft = !1, kt = et;
        };
        var F = p.__private__.out = function(c) {
            return c = c.toString(), nt += c.length + 1, kt.push(c), kt;
        }, At = p.__private__.write = function(c) {
            return F(arguments.length === 1 ? c.toString() : Array.prototype.join.call(arguments, " "));
        }, Vt = p.__private__.getArrayBuffer = function(c) {
            for (var g = c.length, B = new ArrayBuffer(g), D = new Uint8Array(B); g--; ) D[g] = c.charCodeAt(g);
            return B;
        }, Bt = [ [ "Helvetica", "helvetica", "normal", "WinAnsiEncoding" ], [ "Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding" ], [ "Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding" ], [ "Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding" ], [ "Courier", "courier", "normal", "WinAnsiEncoding" ], [ "Courier-Bold", "courier", "bold", "WinAnsiEncoding" ], [ "Courier-Oblique", "courier", "italic", "WinAnsiEncoding" ], [ "Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding" ], [ "Times-Roman", "times", "normal", "WinAnsiEncoding" ], [ "Times-Bold", "times", "bold", "WinAnsiEncoding" ], [ "Times-Italic", "times", "italic", "WinAnsiEncoding" ], [ "Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding" ], [ "ZapfDingbats", "zapfdingbats", "normal", null ], [ "Symbol", "symbol", "normal", null ] ];
        p.__private__.getStandardFonts = function() {
            return Bt;
        };
        var mt = i.fontSize || 16;
        p.__private__.setFontSize = p.setFontSize = function(c) {
            return mt = Z === X ? c / Zt : c, this;
        };
        var St, Mt = p.__private__.getFontSize = p.getFontSize = function() {
            return Z === U ? mt : mt * Zt;
        }, _t = i.R2L || !1;
        p.__private__.setR2L = p.setR2L = function(c) {
            return _t = c, this;
        }, p.__private__.getR2L = p.getR2L = function() {
            return _t;
        };
        var Tt, te = p.__private__.setZoomMode = function(c) {
            if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(c)) St = c; else if (isNaN(c)) {
                if ([ void 0, null, "fullwidth", "fullheight", "fullpage", "original" ].indexOf(c) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + c + '" is not recognized.');
                St = c;
            } else St = parseInt(c, 10);
        };
        p.__private__.getZoomMode = function() {
            return St;
        };
        var Xt, oe = p.__private__.setPageMode = function(c) {
            if ([ void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen" ].indexOf(c) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + c + '" is not recognized.');
            Tt = c;
        };
        p.__private__.getPageMode = function() {
            return Tt;
        };
        var se = p.__private__.setLayoutMode = function(c) {
            if ([ void 0, null, "continuous", "single", "twoleft", "tworight", "two" ].indexOf(c) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + c + '" is not recognized.');
            Xt = c;
        };
        p.__private__.getLayoutMode = function() {
            return Xt;
        }, p.__private__.setDisplayMode = p.setDisplayMode = function(c, g, B) {
            return te(c), se(g), oe(B), this;
        };
        var ne = {
            title: "",
            subject: "",
            author: "",
            keywords: "",
            creator: ""
        };
        p.__private__.getDocumentProperty = function(c) {
            if (Object.keys(ne).indexOf(c) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
            return ne[c];
        }, p.__private__.getDocumentProperties = function() {
            return ne;
        }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(c) {
            for (var g in ne) ne.hasOwnProperty(g) && c[g] && (ne[g] = c[g]);
            return this;
        }, p.__private__.setDocumentProperty = function(c, g) {
            if (Object.keys(ne).indexOf(c) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
            return ne[c] = g;
        };
        var qt, Zt, Rt, Ue, ae, ee = {}, ue = {}, fn = [], Gt = {}, me = {}, ve = {}, Be = {}, dn = null, Pe = 0, Kt = [], de = new Es(p), Ur = i.hotfixes || [], rn = {}, Vn = {}, Gn = [], Ut = function c(g, B, D, J, ut, bt) {
            if (!(this instanceof c)) return new c(g, B, D, J, ut, bt);
            isNaN(g) && (g = 1), isNaN(B) && (B = 0), isNaN(D) && (D = 0), isNaN(J) && (J = 1), 
            isNaN(ut) && (ut = 0), isNaN(bt) && (bt = 0), this._matrix = [ g, B, D, J, ut, bt ];
        };
        Object.defineProperty(Ut.prototype, "sx", {
            get: function() {
                return this._matrix[0];
            },
            set: function(c) {
                this._matrix[0] = c;
            }
        }), Object.defineProperty(Ut.prototype, "shy", {
            get: function() {
                return this._matrix[1];
            },
            set: function(c) {
                this._matrix[1] = c;
            }
        }), Object.defineProperty(Ut.prototype, "shx", {
            get: function() {
                return this._matrix[2];
            },
            set: function(c) {
                this._matrix[2] = c;
            }
        }), Object.defineProperty(Ut.prototype, "sy", {
            get: function() {
                return this._matrix[3];
            },
            set: function(c) {
                this._matrix[3] = c;
            }
        }), Object.defineProperty(Ut.prototype, "tx", {
            get: function() {
                return this._matrix[4];
            },
            set: function(c) {
                this._matrix[4] = c;
            }
        }), Object.defineProperty(Ut.prototype, "ty", {
            get: function() {
                return this._matrix[5];
            },
            set: function(c) {
                this._matrix[5] = c;
            }
        }), Object.defineProperty(Ut.prototype, "a", {
            get: function() {
                return this._matrix[0];
            },
            set: function(c) {
                this._matrix[0] = c;
            }
        }), Object.defineProperty(Ut.prototype, "b", {
            get: function() {
                return this._matrix[1];
            },
            set: function(c) {
                this._matrix[1] = c;
            }
        }), Object.defineProperty(Ut.prototype, "c", {
            get: function() {
                return this._matrix[2];
            },
            set: function(c) {
                this._matrix[2] = c;
            }
        }), Object.defineProperty(Ut.prototype, "d", {
            get: function() {
                return this._matrix[3];
            },
            set: function(c) {
                this._matrix[3] = c;
            }
        }), Object.defineProperty(Ut.prototype, "e", {
            get: function() {
                return this._matrix[4];
            },
            set: function(c) {
                this._matrix[4] = c;
            }
        }), Object.defineProperty(Ut.prototype, "f", {
            get: function() {
                return this._matrix[5];
            },
            set: function(c) {
                this._matrix[5] = c;
            }
        }), Object.defineProperty(Ut.prototype, "rotation", {
            get: function() {
                return Math.atan2(this.shx, this.sx);
            }
        }), Object.defineProperty(Ut.prototype, "scaleX", {
            get: function() {
                return this.decompose().scale.sx;
            }
        }), Object.defineProperty(Ut.prototype, "scaleY", {
            get: function() {
                return this.decompose().scale.sy;
            }
        }), Object.defineProperty(Ut.prototype, "isIdentity", {
            get: function() {
                return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
            }
        }), Ut.prototype.join = function(c) {
            return [ this.sx, this.shy, this.shx, this.sy, this.tx, this.ty ].map(O).join(c);
        }, Ut.prototype.multiply = function(c) {
            var g = c.sx * this.sx + c.shy * this.shx, B = c.sx * this.shy + c.shy * this.sy, D = c.shx * this.sx + c.sy * this.shx, J = c.shx * this.shy + c.sy * this.sy, ut = c.tx * this.sx + c.ty * this.shx + this.tx, bt = c.tx * this.shy + c.ty * this.sy + this.ty;
            return new Ut(g, B, D, J, ut, bt);
        }, Ut.prototype.decompose = function() {
            var c = this.sx, g = this.shy, B = this.shx, D = this.sy, J = this.tx, ut = this.ty, bt = Math.sqrt(c * c + g * g), Ot = (c /= bt) * B + (g /= bt) * D;
            B -= c * Ot, D -= g * Ot;
            var Et = Math.sqrt(B * B + D * D);
            return Ot /= Et, c * (D /= Et) < g * (B /= Et) && (c = -c, g = -g, Ot = -Ot, 
            bt = -bt), {
                scale: new Ut(bt, 0, 0, Et, 0, 0),
                translate: new Ut(1, 0, 0, 1, J, ut),
                rotate: new Ut(c, g, -g, c, 0, 0),
                skew: new Ut(1, 0, Ot, 1, 0, 0)
            };
        }, Ut.prototype.toString = function(c) {
            return this.join(" ");
        }, Ut.prototype.inversed = function() {
            var c = this.sx, g = this.shy, B = this.shx, D = this.sy, J = this.tx, ut = this.ty, bt = 1 / (c * D - g * B), Ot = D * bt, Et = -g * bt, Jt = -B * bt, re = c * bt;
            return new Ut(Ot, Et, Jt, re, -Ot * J - Jt * ut, -Et * J - re * ut);
        }, Ut.prototype.applyToPoint = function(c) {
            var g = c.x * this.sx + c.y * this.shx + this.tx, B = c.x * this.shy + c.y * this.sy + this.ty;
            return new Gr(g, B);
        }, Ut.prototype.applyToRectangle = function(c) {
            var g = this.applyToPoint(c), B = this.applyToPoint(new Gr(c.x + c.w, c.y + c.h));
            return new Yi(g.x, g.y, B.x - g.x, B.y - g.y);
        }, Ut.prototype.clone = function() {
            var c = this.sx, g = this.shy, B = this.shx, D = this.sy, J = this.tx, ut = this.ty;
            return new Ut(c, g, B, D, J, ut);
        }, p.Matrix = Ut;
        var ir = p.matrixMult = function(c, g) {
            return g.multiply(c);
        }, Cn = new Ut(1, 0, 0, 1, 0, 0);
        p.unitMatrix = p.identityMatrix = Cn;
        var Yn = function(c, g) {
            if (!me[c]) {
                var B = (g instanceof Tr ? "Sh" : "P") + (Object.keys(Gt).length + 1).toString(10);
                g.id = B, me[c] = B, Gt[B] = g, de.publish("addPattern", g);
            }
        };
        p.ShadingPattern = Tr, p.TilingPattern = ni, p.addShadingPattern = function(c, g) {
            return lt("addShadingPattern()"), Yn(c, g), this;
        }, p.beginTilingPattern = function(c) {
            lt("beginTilingPattern()"), Ji(c.boundingBox[0], c.boundingBox[1], c.boundingBox[2] - c.boundingBox[0], c.boundingBox[3] - c.boundingBox[1], c.matrix);
        }, p.endTilingPattern = function(c, g) {
            lt("endTilingPattern()"), g.stream = Nt[j].join(`
`), Yn(c, g), de.publish("endTilingPattern", g), Gn.pop().restore();
        };
        var Je, He = p.__private__.newObject = function() {
            var c = Me();
            return vn(c, !0), c;
        }, Me = p.__private__.newObjectDeferred = function() {
            return G++, tt[G] = function() {
                return nt;
            }, G;
        }, vn = function(c, g) {
            return g = typeof g == "boolean" && g, tt[c] = nt, g && F(c + " 0 obj"), 
            c;
        }, li = p.__private__.newAdditionalObject = function() {
            var c = {
                objId: Me(),
                content: ""
            };
            return wt.push(c), c;
        }, ar = Me(), jn = Me(), On = p.__private__.decodeColorString = function(c) {
            var g = c.split(" ");
            if (g.length !== 2 || g[1] !== "g" && g[1] !== "G") g.length !== 5 || g[4] !== "k" && g[4] !== "K" || (g = [ (1 - g[0]) * (1 - g[3]), (1 - g[1]) * (1 - g[3]), (1 - g[2]) * (1 - g[3]), "r" ]); else {
                var B = parseFloat(g[0]);
                g = [ B, B, B, "r" ];
            }
            for (var D = "#", J = 0; J < 3; J++) D += ("0" + Math.floor(255 * parseFloat(g[J])).toString(16)).slice(-2);
            return D;
        }, Bn = p.__private__.encodeColorString = function(c) {
            var g;
            typeof c == "string" && (c = {
                ch1: c
            });
            var B = c.ch1, D = c.ch2, J = c.ch3, ut = c.ch4, bt = c.pdfColorType === "draw" ? [ "G", "RG", "K" ] : [ "g", "rg", "k" ];
            if (typeof B == "string" && B.charAt(0) !== "#") {
                var Ot = new js(B);
                if (Ot.ok) B = Ot.toHex(); else if (!/^\d*\.?\d*$/.test(B)) throw new Error('Invalid color "' + B + '" passed to jsPDF.encodeColorString.');
            }
            if (typeof B == "string" && /^#[0-9A-Fa-f]{3}$/.test(B) && (B = "#" + B[1] + B[1] + B[2] + B[2] + B[3] + B[3]), 
            typeof B == "string" && /^#[0-9A-Fa-f]{6}$/.test(B)) {
                var Et = parseInt(B.substr(1), 16);
                B = Et >> 16 & 255, D = Et >> 8 & 255, J = 255 & Et;
            }
            if (D === void 0 || ut === void 0 && B === D && D === J) typeof B == "string" ? g = B + " " + bt[0] : c.precision === 2 ? g = P(B / 255) + " " + bt[0] : g = I(B / 255) + " " + bt[0]; else if (ut === void 0 || fe(ut) === "object") {
                if (ut && !isNaN(ut.a) && ut.a === 0) return [ "1.", "1.", "1.", bt[1] ].join(" ");
                typeof B == "string" ? g = [ B, D, J, bt[1] ].join(" ") : c.precision === 2 ? g = [ P(B / 255), P(D / 255), P(J / 255), bt[1] ].join(" ") : g = [ I(B / 255), I(D / 255), I(J / 255), bt[1] ].join(" ");
            } else typeof B == "string" ? g = [ B, D, J, ut, bt[2] ].join(" ") : c.precision === 2 ? g = [ P(B), P(D), P(J), P(ut), bt[2] ].join(" ") : g = [ I(B), I(D), I(J), I(ut), bt[2] ].join(" ");
            return g;
        }, Jn = p.__private__.getFilters = function() {
            return l;
        }, Nn = p.__private__.putStream = function(c) {
            var g = (c = c || {}).data || "", B = c.filters || Jn(), D = c.alreadyAppliedFilters || [], J = c.addLength1 || !1, ut = g.length, bt = c.objectId, Ot = function(We) {
                return We;
            };
            if (y !== null && bt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
            y !== null && (Ot = Xe.encryptor(bt, 0));
            var Et = {};
            B === !0 && (B = [ "FlateEncode" ]);
            var Jt = c.additionalKeyValues || [], re = (Et = Wt.API.processDataByFilters !== void 0 ? Wt.API.processDataByFilters(g, B) : {
                data: g,
                reverseChain: []
            }).reverseChain + (Array.isArray(D) ? D.join(" ") : D.toString());
            if (Et.data.length !== 0 && (Jt.push({
                key: "Length",
                value: Et.data.length
            }), J === !0 && Jt.push({
                key: "Length1",
                value: ut
            })), re.length != 0) if (re.split("/").length - 1 == 1) Jt.push({
                key: "Filter",
                value: re
            }); else {
                Jt.push({
                    key: "Filter",
                    value: "[" + re + "]"
                });
                for (var le = 0; le < Jt.length; le += 1) if (Jt[le].key === "DecodeParms") {
                    for (var _e = [], ke = 0; ke < Et.reverseChain.split("/").length - 1; ke += 1) _e.push("null");
                    _e.push(Jt[le].value), Jt[le].value = "[" + _e.join(" ") + "]";
                }
            }
            F("<<");
            for (var Ne = 0; Ne < Jt.length; Ne++) F("/" + Jt[Ne].key + " " + Jt[Ne].value);
            F(">>"), Et.data.length !== 0 && (F("stream"), F(Ot(Et.data)), F("endstream"));
        }, Xn = p.__private__.putPage = function(c) {
            var g = c.number, B = c.data, D = c.objId, J = c.contentsObjId;
            vn(D, !0), F("<</Type /Page"), F("/Parent " + c.rootDictionaryObjId + " 0 R"), 
            F("/Resources " + c.resourceDictionaryObjId + " 0 R"), F("/MediaBox [" + parseFloat(O(c.mediaBox.bottomLeftX)) + " " + parseFloat(O(c.mediaBox.bottomLeftY)) + " " + O(c.mediaBox.topRightX) + " " + O(c.mediaBox.topRightY) + "]"), 
            c.cropBox !== null && F("/CropBox [" + O(c.cropBox.bottomLeftX) + " " + O(c.cropBox.bottomLeftY) + " " + O(c.cropBox.topRightX) + " " + O(c.cropBox.topRightY) + "]"), 
            c.bleedBox !== null && F("/BleedBox [" + O(c.bleedBox.bottomLeftX) + " " + O(c.bleedBox.bottomLeftY) + " " + O(c.bleedBox.topRightX) + " " + O(c.bleedBox.topRightY) + "]"), 
            c.trimBox !== null && F("/TrimBox [" + O(c.trimBox.bottomLeftX) + " " + O(c.trimBox.bottomLeftY) + " " + O(c.trimBox.topRightX) + " " + O(c.trimBox.topRightY) + "]"), 
            c.artBox !== null && F("/ArtBox [" + O(c.artBox.bottomLeftX) + " " + O(c.artBox.bottomLeftY) + " " + O(c.artBox.topRightX) + " " + O(c.artBox.topRightY) + "]"), 
            typeof c.userUnit == "number" && c.userUnit !== 1 && F("/UserUnit " + c.userUnit), 
            de.publish("putPage", {
                objId: D,
                pageContext: Kt[g],
                pageNumber: g,
                page: B
            }), F("/Contents " + J + " 0 R"), F(">>"), F("endobj");
            var ut = B.join(`
`);
            return Z === X && (ut += `
Q`), vn(J, !0), Nn({
                data: ut,
                filters: Jn(),
                objectId: J
            }), F("endobj"), D;
        }, Hr = p.__private__.putPages = function() {
            var c, g, B = [];
            for (c = 1; c <= Pe; c++) Kt[c].objId = Me(), Kt[c].contentsObjId = Me();
            for (c = 1; c <= Pe; c++) B.push(Xn({
                number: c,
                data: Nt[c],
                objId: Kt[c].objId,
                contentsObjId: Kt[c].contentsObjId,
                mediaBox: Kt[c].mediaBox,
                cropBox: Kt[c].cropBox,
                bleedBox: Kt[c].bleedBox,
                trimBox: Kt[c].trimBox,
                artBox: Kt[c].artBox,
                userUnit: Kt[c].userUnit,
                rootDictionaryObjId: ar,
                resourceDictionaryObjId: jn
            }));
            vn(ar, !0), F("<</Type /Pages");
            var D = "/Kids [";
            for (g = 0; g < Pe; g++) D += B[g] + " 0 R ";
            F(D + "]"), F("/Count " + Pe), F(">>"), F("endobj"), de.publish("postPutPages");
        }, hi = function(c) {
            de.publish("putFont", {
                font: c,
                out: F,
                newObject: He,
                putStream: Nn
            }), c.isAlreadyPutted !== !0 && (c.objectNumber = He(), F("<<"), F("/Type /Font"), 
            F("/BaseFont /" + ei(c.postScriptName)), F("/Subtype /Type1"), typeof c.encoding == "string" && F("/Encoding /" + c.encoding), 
            F("/FirstChar 32"), F("/LastChar 255"), F(">>"), F("endobj"));
        }, fi = function(c) {
            c.objectNumber = He();
            var g = [];
            g.push({
                key: "Type",
                value: "/XObject"
            }), g.push({
                key: "Subtype",
                value: "/Form"
            }), g.push({
                key: "BBox",
                value: "[" + [ O(c.x), O(c.y), O(c.x + c.width), O(c.y + c.height) ].join(" ") + "]"
            }), g.push({
                key: "Matrix",
                value: "[" + c.matrix.toString() + "]"
            });
            var B = c.pages[1].join(`
`);
            Nn({
                data: B,
                additionalKeyValues: g,
                objectId: c.objectNumber
            }), F("endobj");
        }, di = function(c, g) {
            g || (g = 21);
            var B = He(), D = function(bt, Ot) {
                var Et, Jt = [], re = 1 / (Ot - 1);
                for (Et = 0; Et < 1; Et += re) Jt.push(Et);
                if (Jt.push(1), bt[0].offset != 0) {
                    var le = {
                        offset: 0,
                        color: bt[0].color
                    };
                    bt.unshift(le);
                }
                if (bt[bt.length - 1].offset != 1) {
                    var _e = {
                        offset: 1,
                        color: bt[bt.length - 1].color
                    };
                    bt.push(_e);
                }
                for (var ke = "", Ne = 0, We = 0; We < Jt.length; We++) {
                    for (Et = Jt[We]; Et > bt[Ne + 1].offset; ) Ne++;
                    var qe = bt[Ne].offset, Ke = (Et - qe) / (bt[Ne + 1].offset - qe), ur = bt[Ne].color, Yr = bt[Ne + 1].color;
                    ke += W(Math.round((1 - Ke) * ur[0] + Ke * Yr[0]).toString(16)) + W(Math.round((1 - Ke) * ur[1] + Ke * Yr[1]).toString(16)) + W(Math.round((1 - Ke) * ur[2] + Ke * Yr[2]).toString(16));
                }
                return ke.trim();
            }(c.colors, g), J = [];
            J.push({
                key: "FunctionType",
                value: "0"
            }), J.push({
                key: "Domain",
                value: "[0.0 1.0]"
            }), J.push({
                key: "Size",
                value: "[" + g + "]"
            }), J.push({
                key: "BitsPerSample",
                value: "8"
            }), J.push({
                key: "Range",
                value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
            }), J.push({
                key: "Decode",
                value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
            }), Nn({
                data: D,
                additionalKeyValues: J,
                alreadyAppliedFilters: [ "/ASCIIHexDecode" ],
                objectId: B
            }), F("endobj"), c.objectNumber = He(), F("<< /ShadingType " + c.type), 
            F("/ColorSpace /DeviceRGB");
            var ut = "/Coords [" + O(parseFloat(c.coords[0])) + " " + O(parseFloat(c.coords[1])) + " ";
            c.type === 2 ? ut += O(parseFloat(c.coords[2])) + " " + O(parseFloat(c.coords[3])) : ut += O(parseFloat(c.coords[2])) + " " + O(parseFloat(c.coords[3])) + " " + O(parseFloat(c.coords[4])) + " " + O(parseFloat(c.coords[5])), 
            F(ut += "]"), c.matrix && F("/Matrix [" + c.matrix.toString() + "]"), 
            F("/Function " + B + " 0 R"), F("/Extend [true true]"), F(">>"), F("endobj");
        }, pi = function(c, g) {
            var B = Me(), D = He();
            g.push({
                resourcesOid: B,
                objectOid: D
            }), c.objectNumber = D;
            var J = [];
            J.push({
                key: "Type",
                value: "/Pattern"
            }), J.push({
                key: "PatternType",
                value: "1"
            }), J.push({
                key: "PaintType",
                value: "1"
            }), J.push({
                key: "TilingType",
                value: "1"
            }), J.push({
                key: "BBox",
                value: "[" + c.boundingBox.map(O).join(" ") + "]"
            }), J.push({
                key: "XStep",
                value: O(c.xStep)
            }), J.push({
                key: "YStep",
                value: O(c.yStep)
            }), J.push({
                key: "Resources",
                value: B + " 0 R"
            }), c.matrix && J.push({
                key: "Matrix",
                value: "[" + c.matrix.toString() + "]"
            }), Nn({
                data: c.stream,
                additionalKeyValues: J,
                objectId: c.objectNumber
            }), F("endobj");
        }, Aa = function(c) {
            for (var g in c.objectNumber = He(), F("<<"), c) switch (g) {
              case "opacity":
                F("/ca " + P(c[g]));
                break;

              case "stroke-opacity":
                F("/CA " + P(c[g]));
            }
            F(">>"), F("endobj");
        }, _a = function(c) {
            vn(c.resourcesOid, !0), F("<<"), F("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), 
            function() {
                for (var g in F("/Font <<"), ee) ee.hasOwnProperty(g) && (b === !1 || b === !0 && k.hasOwnProperty(g)) && F("/" + g + " " + ee[g].objectNumber + " 0 R");
                F(">>");
            }(), function() {
                if (Object.keys(Gt).length > 0) {
                    for (var g in F("/Shading <<"), Gt) Gt.hasOwnProperty(g) && Gt[g] instanceof Tr && Gt[g].objectNumber >= 0 && F("/" + g + " " + Gt[g].objectNumber + " 0 R");
                    de.publish("putShadingPatternDict"), F(">>");
                }
            }(), function(g) {
                if (Object.keys(Gt).length > 0) {
                    for (var B in F("/Pattern <<"), Gt) Gt.hasOwnProperty(B) && Gt[B] instanceof p.TilingPattern && Gt[B].objectNumber >= 0 && Gt[B].objectNumber < g && F("/" + B + " " + Gt[B].objectNumber + " 0 R");
                    de.publish("putTilingPatternDict"), F(">>");
                }
            }(c.objectOid), function() {
                if (Object.keys(ve).length > 0) {
                    var g;
                    for (g in F("/ExtGState <<"), ve) ve.hasOwnProperty(g) && ve[g].objectNumber >= 0 && F("/" + g + " " + ve[g].objectNumber + " 0 R");
                    de.publish("putGStateDict"), F(">>");
                }
            }(), function() {
                for (var g in F("/XObject <<"), rn) rn.hasOwnProperty(g) && rn[g].objectNumber >= 0 && F("/" + g + " " + rn[g].objectNumber + " 0 R");
                de.publish("putXobjectDict"), F(">>");
            }(), F(">>"), F("endobj");
        }, Bo = function() {
            var c = [];
            (function() {
                for (var g in ee) ee.hasOwnProperty(g) && (b === !1 || b === !0 && k.hasOwnProperty(g)) && hi(ee[g]);
            })(), function() {
                var g;
                for (g in ve) ve.hasOwnProperty(g) && Aa(ve[g]);
            }(), function() {
                for (var g in rn) rn.hasOwnProperty(g) && fi(rn[g]);
            }(), function(g) {
                var B;
                for (B in Gt) Gt.hasOwnProperty(B) && (Gt[B] instanceof Tr ? di(Gt[B]) : Gt[B] instanceof ni && pi(Gt[B], g));
            }(c), de.publish("putResources"), c.forEach(_a), _a({
                resourcesOid: jn,
                objectOid: Number.MAX_SAFE_INTEGER
            }), de.publish("postPutResources");
        }, Wr = function(c) {
            ue[c.fontName] = ue[c.fontName] || {}, ue[c.fontName][c.fontStyle] = c.id;
        }, Ui = function(c, g, B, D, J) {
            var ut = {
                id: "F" + (Object.keys(ee).length + 1).toString(10),
                postScriptName: c,
                fontName: g,
                fontStyle: B,
                encoding: D,
                isStandardFont: J || !1,
                metadata: {}
            };
            return de.publish("addFont", {
                font: ut,
                instance: this
            }), ee[ut.id] = ut, Wr(ut), ut.id;
        }, or = p.__private__.pdfEscape = p.pdfEscape = function(c, g) {
            return function(B, D) {
                var J, ut, bt, Ot, Et, Jt, re, le, _e;
                if (bt = (D = D || {}).sourceEncoding || "Unicode", Et = D.outputEncoding, 
                (D.autoencode || Et) && ee[qt].metadata && ee[qt].metadata[bt] && ee[qt].metadata[bt].encoding && (Ot = ee[qt].metadata[bt].encoding, 
                !Et && ee[qt].encoding && (Et = ee[qt].encoding), !Et && Ot.codePages && (Et = Ot.codePages[0]), 
                typeof Et == "string" && (Et = Ot[Et]), Et)) {
                    for (re = !1, Jt = [], J = 0, ut = B.length; J < ut; J++) (le = Et[B.charCodeAt(J)]) ? Jt.push(String.fromCharCode(le)) : Jt.push(B[J]), 
                    Jt[J].charCodeAt(0) >> 8 && (re = !0);
                    B = Jt.join("");
                }
                for (J = B.length; re === void 0 && J !== 0; ) B.charCodeAt(J - 1) >> 8 && (re = !0), 
                J--;
                if (!re) return B;
                for (Jt = D.noBOM ? [] : [ 254, 255 ], J = 0, ut = B.length; J < ut; J++) {
                    if ((_e = (le = B.charCodeAt(J)) >> 8) >> 8) throw new Error("Character at position " + J + " of string '" + B + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                    Jt.push(_e), Jt.push(le - (_e << 8));
                }
                return String.fromCharCode.apply(void 0, Jt);
            }(c, g).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        }, gi = p.__private__.beginPage = function(c) {
            Nt[++Pe] = [], Kt[Pe] = {
                objId: 0,
                contentsObjId: 0,
                userUnit: Number(h),
                artBox: null,
                bleedBox: null,
                cropBox: null,
                trimBox: null,
                mediaBox: {
                    bottomLeftX: 0,
                    bottomLeftY: 0,
                    topRightX: Number(c[0]),
                    topRightY: Number(c[1])
                }
            }, ka(Pe), zt(Nt[j]);
        }, Sa = function(c, g) {
            var B, D, J;
            switch (n = g || n, typeof c == "string" && (B = A(c.toLowerCase()), 
            Array.isArray(B) && (D = B[0], J = B[1])), Array.isArray(c) && (D = c[0] * Zt, 
            J = c[1] * Zt), isNaN(D) && (D = s[0], J = s[1]), (D > 14400 || J > 14400) && (ye.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), 
            D = Math.min(14400, D), J = Math.min(14400, J)), s = [ D, J ], n.substr(0, 1)) {
              case "l":
                J > D && (s = [ J, D ]);
                break;

              case "p":
                D > J && (s = [ J, D ]);
            }
            gi(s), Wo(Yt), F(wi), Vi !== 0 && F(Vi + " J"), Nr !== 0 && F(Nr + " j"), 
            de.publish("addPage", {
                pageNumber: Pe
            });
        }, Pa = function(c) {
            c > 0 && c <= Pe && (Nt.splice(c, 1), Kt.splice(c, 1), Pe--, j > Pe && (j = Pe), 
            this.setPage(j));
        }, ka = function(c) {
            c > 0 && c <= Pe && (j = c);
        }, mi = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
            return Nt.length - 1;
        }, Fa = function(c, g, B) {
            var D, J = void 0;
            return B = B || {}, c = c !== void 0 ? c : ee[qt].fontName, g = g !== void 0 ? g : ee[qt].fontStyle, 
            D = c.toLowerCase(), ue[D] !== void 0 && ue[D][g] !== void 0 ? J = ue[D][g] : ue[c] !== void 0 && ue[c][g] !== void 0 ? J = ue[c][g] : B.disableWarning === !1 && ye.warn("Unable to look up font label for font '" + c + "', '" + g + "'. Refer to getFontList() for available fonts."), 
            J || B.noFallback || (J = ue.times[g]) == null && (J = ue.times.normal), 
            J;
        }, Ee = p.__private__.putInfo = function() {
            var c = He(), g = function(D) {
                return D;
            };
            for (var B in y !== null && (g = Xe.encryptor(c, 0)), F("<<"), F("/Producer (" + or(g("jsPDF " + Wt.version)) + ")"), 
            ne) ne.hasOwnProperty(B) && ne[B] && F("/" + B.substr(0, 1).toUpperCase() + B.substr(1) + " (" + or(g(ne[B])) + ")");
            F("/CreationDate (" + or(g(at)) + ")"), F(">>"), F("endobj");
        }, Ia = p.__private__.putCatalog = function(c) {
            var g = (c = c || {}).rootDictionaryObjId || ar;
            switch (He(), F("<<"), F("/Type /Catalog"), F("/Pages " + g + " 0 R"), 
            St || (St = "fullwidth"), St) {
              case "fullwidth":
                F("/OpenAction [3 0 R /FitH null]");
                break;

              case "fullheight":
                F("/OpenAction [3 0 R /FitV null]");
                break;

              case "fullpage":
                F("/OpenAction [3 0 R /Fit]");
                break;

              case "original":
                F("/OpenAction [3 0 R /XYZ null null 1]");
                break;

              default:
                var B = "" + St;
                B.substr(B.length - 1) === "%" && (St = parseInt(St) / 100), typeof St == "number" && F("/OpenAction [3 0 R /XYZ null null " + P(St) + "]");
            }
            switch (Xt || (Xt = "continuous"), Xt) {
              case "continuous":
                F("/PageLayout /OneColumn");
                break;

              case "single":
                F("/PageLayout /SinglePage");
                break;

              case "two":
              case "twoleft":
                F("/PageLayout /TwoColumnLeft");
                break;

              case "tworight":
                F("/PageLayout /TwoColumnRight");
            }
            Tt && F("/PageMode /" + Tt), de.publish("putCatalog"), F(">>"), F("endobj");
        }, Ca = p.__private__.putTrailer = function() {
            F("trailer"), F("<<"), F("/Size " + (G + 1)), F("/Root " + G + " 0 R"), 
            F("/Info " + (G - 1) + " 0 R"), y !== null && F("/Encrypt " + Xe.oid + " 0 R"), 
            F("/ID [ <" + rt + "> <" + rt + "> ]"), F(">>");
        }, Mo = p.__private__.putHeader = function() {
            F("%PDF-" + M), F("%ºß¬à");
        }, ja = p.__private__.putXRef = function() {
            var c = "0000000000";
            F("xref"), F("0 " + (G + 1)), F("0000000000 65535 f ");
            for (var g = 1; g <= G; g++) typeof tt[g] == "function" ? F((c + tt[g]()).slice(-10) + " 00000 n ") : tt[g] !== void 0 ? F((c + tt[g]).slice(-10) + " 00000 n ") : F("0000000000 00000 n ");
        }, sr = p.__private__.buildDocument = function() {
            G = 0, nt = 0, et = [], tt = [], wt = [], ar = Me(), jn = Me(), zt(et), 
            de.publish("buildDocument"), Mo(), Hr(), function() {
                de.publish("putAdditionalObjects");
                for (var g = 0; g < wt.length; g++) {
                    var B = wt[g];
                    vn(B.objId, !0), F(B.content), F("endobj");
                }
                de.publish("postPutAdditionalObjects");
            }(), Bo(), y !== null && (Xe.oid = He(), F("<<"), F("/Filter /Standard"), 
            F("/V " + Xe.v), F("/R " + Xe.r), F("/U <" + Xe.toHexString(Xe.U) + ">"), 
            F("/O <" + Xe.toHexString(Xe.O) + ">"), F("/P " + Xe.P), F(">>"), F("endobj")), 
            Ee(), Ia();
            var c = nt;
            return ja(), Ca(), F("startxref"), F("" + c), F("%%EOF"), zt(Nt[j]), 
            et.join(`
`);
        }, pn = p.__private__.getBlob = function(c) {
            return new Blob([ Vt(c) ], {
                type: "application/pdf"
            });
        }, vi = p.output = p.__private__.output = (Je = function(c, g) {
            switch (typeof (g = g || {}) == "string" ? g = {
                filename: g
            } : g.filename = g.filename || "generated.pdf", c) {
              case void 0:
                return sr();

              case "save":
                p.save(g.filename);
                break;

              case "arraybuffer":
                return Vt(sr());

              case "blob":
                return pn(sr());

              case "bloburi":
              case "bloburl":
                if (Ht.URL !== void 0 && typeof Ht.URL.createObjectURL == "function") return Ht.URL && Ht.URL.createObjectURL(pn(sr())) || void 0;
                ye.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                break;

              case "datauristring":
              case "dataurlstring":
                var B = "", D = sr();
                try {
                    B = Lo(D);
                } catch {
                    B = Lo(unescape(encodeURIComponent(D)));
                }
                return "data:application/pdf;filename=" + g.filename + ";base64," + B;

              case "pdfobjectnewwindow":
                if (Object.prototype.toString.call(Ht) === "[object Window]") {
                    var J = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", ut = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                    g.pdfObjectUrl && (J = g.pdfObjectUrl, ut = "");
                    var bt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + J + '"' + ut + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(g) + ");<\/script></body></html>", Ot = Ht.open();
                    return Ot !== null && Ot.document.write(bt), Ot;
                }
                throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");

              case "pdfjsnewwindow":
                if (Object.prototype.toString.call(Ht) === "[object Window]") {
                    var Et = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (g.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + g.filename + '" width="500px" height="400px" /></body></html>', Jt = Ht.open();
                    if (Jt !== null) {
                        Jt.document.write(Et);
                        var re = this;
                        Jt.document.documentElement.querySelector("#pdfViewer").onload = function() {
                            Jt.document.title = g.filename, Jt.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(re.output("bloburl"));
                        };
                    }
                    return Jt;
                }
                throw new Error("The option pdfjsnewwindow just works in a browser-environment.");

              case "dataurlnewwindow":
                if (Object.prototype.toString.call(Ht) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                var le = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", g) + '"></iframe></body></html>', _e = Ht.open();
                if (_e !== null && (_e.document.write(le), _e.document.title = g.filename), 
                _e || typeof safari > "u") return _e;
                break;

              case "datauri":
              case "dataurl":
                return Ht.document.location.href = this.output("datauristring", g);

              default:
                return null;
            }
        }, Je.foo = function() {
            try {
                return Je.apply(this, arguments);
            } catch (B) {
                var c = B.stack || "";
                ~c.indexOf(" at ") && (c = c.split(" at ")[1]);
                var g = "Error in function " + c.split(`
`)[0].split("<")[0] + ": " + B.message;
                if (!Ht.console) throw new Error(g);
                Ht.console.error(g, B), Ht.alert && alert(g);
            }
        }, Je.foo.bar = Je, Je.foo), cr = function(c) {
            return Array.isArray(Ur) === !0 && Ur.indexOf(c) > -1;
        };
        switch (a) {
          case "pt":
            Zt = 1;
            break;

          case "mm":
            Zt = 72 / 25.4;
            break;

          case "cm":
            Zt = 72 / 2.54;
            break;

          case "in":
            Zt = 72;
            break;

          case "px":
            Zt = cr("px_scaling") == 1 ? .75 : 96 / 72;
            break;

          case "pc":
          case "em":
            Zt = 12;
            break;

          case "ex":
            Zt = 6;
            break;

          default:
            if (typeof a != "number") throw new Error("Invalid unit: " + a);
            Zt = a;
        }
        var Xe = null;
        Ct(), Q();
        var Oa = p.__private__.getPageInfo = p.getPageInfo = function(c) {
            if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
            return {
                objId: Kt[c].objId,
                pageNumber: c,
                pageContext: Kt[c]
            };
        }, Eo = p.__private__.getPageInfoByObjId = function(c) {
            if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
            for (var g in Kt) if (Kt[g].objId === c) break;
            return Oa(g);
        }, qo = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
            return {
                objId: Kt[j].objId,
                pageNumber: j,
                pageContext: Kt[j]
            };
        };
        p.addPage = function() {
            return Sa.apply(this, arguments), this;
        }, p.setPage = function() {
            return ka.apply(this, arguments), zt.call(this, Nt[j]), this;
        }, p.insertPage = function(c) {
            return this.addPage(), this.movePage(j, c), this;
        }, p.movePage = function(c, g) {
            var B, D;
            if (c > g) {
                B = Nt[c], D = Kt[c];
                for (var J = c; J > g; J--) Nt[J] = Nt[J - 1], Kt[J] = Kt[J - 1];
                Nt[g] = B, Kt[g] = D, this.setPage(g);
            } else if (c < g) {
                B = Nt[c], D = Kt[c];
                for (var ut = c; ut < g; ut++) Nt[ut] = Nt[ut + 1], Kt[ut] = Kt[ut + 1];
                Nt[g] = B, Kt[g] = D, this.setPage(g);
            }
            return this;
        }, p.deletePage = function() {
            return Pa.apply(this, arguments), this;
        }, p.__private__.text = p.text = function(c, g, B, D, J) {
            var ut, bt, Ot, Et, Jt, re, le, _e, ke, Ne = (D = D || {}).scope || this;
            if (typeof c == "number" && typeof g == "number" && (typeof B == "string" || Array.isArray(B))) {
                var We = B;
                B = g, g = c, c = We;
            }
            if (arguments[3] instanceof Ut == 0 ? (Ot = arguments[4], Et = arguments[5], 
            fe(le = arguments[3]) === "object" && le !== null || (typeof Ot == "string" && (Et = Ot, 
            Ot = null), typeof le == "string" && (Et = le, le = null), typeof le == "number" && (Ot = le, 
            le = null), D = {
                flags: le,
                angle: Ot,
                align: Et
            })) : (lt("The transform parameter of text() with a Matrix value"), 
            ke = J), isNaN(g) || isNaN(B) || c == null) throw new Error("Invalid arguments passed to jsPDF.text");
            if (c.length === 0) return Ne;
            var qe, Ke = "", ur = typeof D.lineHeightFactor == "number" ? D.lineHeightFactor : Vr, Yr = Ne.internal.scaleFactor;
            function Zo(xe) {
                return xe = xe.split("\t").join(Array(D.TabLen || 9).join(" ")), 
                or(xe, le);
            }
            function Jr(xe) {
                for (var we, Oe = xe.concat(), Re = [], er = Oe.length; er--; ) typeof (we = Oe.shift()) == "string" ? Re.push(we) : Array.isArray(xe) && (we.length === 1 || we[1] === void 0 && we[2] === void 0) ? Re.push(we[0]) : Re.push([ we[0], we[1], we[2] ]);
                return Re;
            }
            function Qn(xe, we) {
                var Oe;
                if (typeof xe == "string") Oe = we(xe)[0]; else if (Array.isArray(xe)) {
                    for (var Re, er, ea = xe.concat(), Ii = [], Da = ea.length; Da--; ) typeof (Re = ea.shift()) == "string" ? Ii.push(we(Re)[0]) : Array.isArray(Re) && typeof Re[0] == "string" && (er = we(Re[0], Re[1], Re[2]), 
                    Ii.push([ er[0], er[1], er[2] ]));
                    Oe = Ii;
                }
                return Oe;
            }
            var Ai = !1, _i = !0;
            if (typeof c == "string") Ai = !0; else if (Array.isArray(c)) {
                var Xr = c.concat();
                bt = [];
                for (var xr, cn = Xr.length; cn--; ) (typeof (xr = Xr.shift()) != "string" || Array.isArray(xr) && typeof xr[0] != "string") && (_i = !1);
                Ai = _i;
            }
            if (Ai === !1) throw new Error('Type of text must be string or Array. "' + c + '" is not recognized.');
            typeof c == "string" && (c = c.match(/[\r?\n]/) ? c.split(/\r\n|\r|\n/g) : [ c ]);
            var lr = mt / Ne.internal.scaleFactor, Ar = lr * (ur - 1);
            switch (D.baseline) {
              case "bottom":
                B -= Ar;
                break;

              case "top":
                B += lr - Ar;
                break;

              case "hanging":
                B += lr - 2 * Ar;
                break;

              case "middle":
                B += lr / 2 - Ar;
            }
            if ((re = D.maxWidth || 0) > 0 && (typeof c == "string" ? c = Ne.splitTextToSize(c, re) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(xe, we) {
                return xe.concat(Ne.splitTextToSize(we, re));
            }, []))), ut = {
                text: c,
                x: g,
                y: B,
                options: D,
                mutex: {
                    pdfEscape: or,
                    activeFontKey: qt,
                    fonts: ee,
                    activeFontSize: mt
                }
            }, de.publish("preProcessText", ut), c = ut.text, Ot = (D = ut.options).angle, 
            ke instanceof Ut == 0 && Ot && typeof Ot == "number") {
                Ot *= Math.PI / 180, D.rotationDirection === 0 && (Ot = -Ot), Z === X && (Ot = -Ot);
                var $i = Math.cos(Ot), Zi = Math.sin(Ot);
                ke = new Ut($i, Zi, -Zi, $i, 0, 0);
            } else Ot && Ot instanceof Ut && (ke = Ot);
            Z !== X || ke || (ke = Cn), (Jt = D.charSpace || Li) !== void 0 && (Ke += O(R(Jt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (_e = D.horizontalScale) !== void 0 && (Ke += O(100 * _e) + ` Tz
`), D.lang;
            var un = -1, Ea = D.renderingMode !== void 0 ? D.renderingMode : D.stroke, Si = Ne.internal.getCurrentPageInfo().pageContext;
            switch (Ea) {
              case 0:
              case !1:
              case "fill":
                un = 0;
                break;

              case 1:
              case !0:
              case "stroke":
                un = 1;
                break;

              case 2:
              case "fillThenStroke":
                un = 2;
                break;

              case 3:
              case "invisible":
                un = 3;
                break;

              case 4:
              case "fillAndAddForClipping":
                un = 4;
                break;

              case 5:
              case "strokeAndAddPathForClipping":
                un = 5;
                break;

              case 6:
              case "fillThenStrokeAndAddToPathForClipping":
                un = 6;
                break;

              case 7:
              case "addToPathForClipping":
                un = 7;
            }
            var Mn = Si.usedRenderingMode !== void 0 ? Si.usedRenderingMode : -1;
            un !== -1 ? Ke += un + ` Tr
` : Mn !== -1 && (Ke += `0 Tr
`), un !== -1 && (Si.usedRenderingMode = un), Et = D.align || "left";
            var an, Pi = mt * ur, qa = Ne.internal.pageSize.getWidth(), Ra = ee[qt];
            Jt = D.charSpace || Li, re = D.maxWidth || 0, le = Object.assign({
                autoencode: !0,
                noBOM: !0
            }, D.flags);
            var _r = [];
            if (Object.prototype.toString.call(c) === "[object Array]") {
                var En;
                bt = Jr(c), Et !== "left" && (an = bt.map(function(xe) {
                    return Ne.getStringUnitWidth(xe, {
                        font: Ra,
                        charSpace: Jt,
                        fontSize: mt,
                        doKerning: !1
                    }) * mt / Yr;
                }));
                var qn, Kr = 0;
                if (Et === "right") {
                    g -= an[0], c = [], cn = bt.length;
                    for (var tr = 0; tr < cn; tr++) tr === 0 ? (qn = wr(g), En = Lr(B)) : (qn = R(Kr - an[tr]), 
                    En = -Pi), c.push([ bt[tr], qn, En ]), Kr = an[tr];
                } else if (Et === "center") {
                    g -= an[0] / 2, c = [], cn = bt.length;
                    for (var Sr = 0; Sr < cn; Sr++) Sr === 0 ? (qn = wr(g), En = Lr(B)) : (qn = R((Kr - an[Sr]) / 2), 
                    En = -Pi), c.push([ bt[Sr], qn, En ]), Kr = an[Sr];
                } else if (Et === "left") {
                    c = [], cn = bt.length;
                    for (var Qi = 0; Qi < cn; Qi++) c.push(bt[Qi]);
                } else {
                    if (Et !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                    c = [], cn = bt.length, re = re !== 0 ? re : qa;
                    for (var xn = 0; xn < cn; xn++) En = xn === 0 ? Lr(B) : -Pi, 
                    qn = xn === 0 ? wr(g) : 0, xn < cn - 1 ? _r.push(O(R((re - an[xn]) / (bt[xn].split(" ").length - 1)))) : _r.push(0), 
                    c.push([ bt[xn], qn, En ]);
                }
            }
            (typeof D.R2L == "boolean" ? D.R2L : _t) === !0 && (c = Qn(c, function(xe, we, Oe) {
                return [ xe.split("").reverse().join(""), we, Oe ];
            })), ut = {
                text: c,
                x: g,
                y: B,
                options: D,
                mutex: {
                    pdfEscape: or,
                    activeFontKey: qt,
                    fonts: ee,
                    activeFontSize: mt
                }
            }, de.publish("postProcessText", ut), c = ut.text, qe = ut.mutex.isHex || !1;
            var ta = ee[qt].encoding;
            ta !== "WinAnsiEncoding" && ta !== "StandardEncoding" || (c = Qn(c, function(xe, we, Oe) {
                return [ Zo(xe), we, Oe ];
            })), bt = Jr(c), c = [];
            for (var ki, Fi, $r, Zr = Array.isArray(bt[0]) ? 1 : 0, Pr = "", Ta = function(xe, we, Oe) {
                var Re = "";
                return Oe instanceof Ut ? (Oe = typeof D.angle == "number" ? ir(Oe, new Ut(1, 0, 0, 1, xe, we)) : ir(new Ut(1, 0, 0, 1, xe, we), Oe), 
                Z === X && (Oe = ir(new Ut(1, 0, 0, -1, 0, 0), Oe)), Re = Oe.join(" ") + ` Tm
`) : Re = O(xe) + " " + O(we) + ` Td
`, Re;
            }, Rn = 0; Rn < bt.length; Rn++) {
                switch (Pr = "", Zr) {
                  case 1:
                    $r = (qe ? "<" : "(") + bt[Rn][0] + (qe ? ">" : ")"), ki = parseFloat(bt[Rn][1]), 
                    Fi = parseFloat(bt[Rn][2]);
                    break;

                  case 0:
                    $r = (qe ? "<" : "(") + bt[Rn] + (qe ? ">" : ")"), ki = wr(g), 
                    Fi = Lr(B);
                }
                _r !== void 0 && _r[Rn] !== void 0 && (Pr = _r[Rn] + ` Tw
`), Rn === 0 ? c.push(Pr + Ta(ki, Fi, ke) + $r) : Zr === 0 ? c.push(Pr + $r) : Zr === 1 && c.push(Pr + Ta(ki, Fi, ke) + $r);
            }
            c = Zr === 0 ? c.join(` Tj
T* `) : c.join(` Tj
`), c += ` Tj
`;
            var kr = `BT
/`;
            return kr += qt + " " + mt + ` Tf
`, kr += O(mt * ur) + ` TL
`, kr += $n + `
`, kr += Ke, kr += c, F(kr += "ET"), k[qt] = !0, Ne;
        };
        var Ro = p.__private__.clip = p.clip = function(c) {
            return F(c === "evenodd" ? "W*" : "W"), this;
        };
        p.clipEvenOdd = function() {
            return Ro("evenodd");
        }, p.__private__.discardPath = p.discardPath = function() {
            return F("n"), this;
        };
        var Kn = p.__private__.isValidStyle = function(c) {
            var g = !1;
            return [ void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n" ].indexOf(c) !== -1 && (g = !0), 
            g;
        };
        p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(c) {
            return Kn(c) && (m = c), this;
        };
        var Ba = p.__private__.getStyle = p.getStyle = function(c) {
            var g = m;
            switch (c) {
              case "D":
              case "S":
                g = "S";
                break;

              case "F":
                g = "f";
                break;

              case "FD":
              case "DF":
                g = "B";
                break;

              case "f":
              case "f*":
              case "B":
              case "B*":
                g = c;
            }
            return g;
        }, bi = p.close = function() {
            return F("h"), this;
        };
        p.stroke = function() {
            return F("S"), this;
        }, p.fill = function(c) {
            return yi("f", c), this;
        }, p.fillEvenOdd = function(c) {
            return yi("f*", c), this;
        }, p.fillStroke = function(c) {
            return yi("B", c), this;
        }, p.fillStrokeEvenOdd = function(c) {
            return yi("B*", c), this;
        };
        var yi = function(c, g) {
            fe(g) === "object" ? Do(g, c) : F(c);
        }, Hi = function(c) {
            c === null || Z === X && c === void 0 || (c = Ba(c), F(c));
        };
        function To(c, g, B, D, J) {
            var ut = new ni(g || this.boundingBox, B || this.xStep, D || this.yStep, this.gState, J || this.matrix);
            ut.stream = this.stream;
            var bt = c + "$$" + this.cloneIndex++ + "$$";
            return Yn(bt, ut), ut;
        }
        var Do = function(c, g) {
            var B = me[c.key], D = Gt[B];
            if (D instanceof Tr) F("q"), F(zo(g)), D.gState && p.setGState(D.gState), 
            F(c.matrix.toString() + " cm"), F("/" + B + " sh"), F("Q"); else if (D instanceof ni) {
                var J = new Ut(1, 0, 0, -1, 0, bn());
                c.matrix && (J = J.multiply(c.matrix || Cn), B = To.call(D, c.key, c.boundingBox, c.xStep, c.yStep, J).id), 
                F("q"), F("/Pattern cs"), F("/" + B + " scn"), D.gState && p.setGState(D.gState), 
                F(g), F("Q");
            }
        }, zo = function(c) {
            switch (c) {
              case "f":
              case "F":
              case "n":
                return "W n";

              case "f*":
                return "W* n";

              case "B":
              case "S":
                return "W S";

              case "B*":
                return "W* S";
            }
        }, br = p.moveTo = function(c, g) {
            return F(O(R(c)) + " " + O(T(g)) + " m"), this;
        }, Ma = p.lineTo = function(c, g) {
            return F(O(R(c)) + " " + O(T(g)) + " l"), this;
        }, yr = p.curveTo = function(c, g, B, D, J, ut) {
            return F([ O(R(c)), O(T(g)), O(R(B)), O(T(D)), O(R(J)), O(T(ut)), "c" ].join(" ")), 
            this;
        };
        p.__private__.line = p.line = function(c, g, B, D, J) {
            if (isNaN(c) || isNaN(g) || isNaN(B) || isNaN(D) || !Kn(J)) throw new Error("Invalid arguments passed to jsPDF.line");
            return Z === U ? this.lines([ [ B - c, D - g ] ], c, g, [ 1, 1 ], J || "S") : this.lines([ [ B - c, D - g ] ], c, g, [ 1, 1 ]).stroke();
        }, p.__private__.lines = p.lines = function(c, g, B, D, J, ut) {
            var bt, Ot, Et, Jt, re, le, _e, ke, Ne, We, qe, Ke;
            if (typeof c == "number" && (Ke = B, B = g, g = c, c = Ke), D = D || [ 1, 1 ], 
            ut = ut || !1, isNaN(g) || isNaN(B) || !Array.isArray(c) || !Array.isArray(D) || !Kn(J) || typeof ut != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
            for (br(g, B), bt = D[0], Ot = D[1], Jt = c.length, We = g, qe = B, 
            Et = 0; Et < Jt; Et++) (re = c[Et]).length === 2 ? (We = re[0] * bt + We, 
            qe = re[1] * Ot + qe, Ma(We, qe)) : (le = re[0] * bt + We, _e = re[1] * Ot + qe, 
            ke = re[2] * bt + We, Ne = re[3] * Ot + qe, We = re[4] * bt + We, qe = re[5] * Ot + qe, 
            yr(le, _e, ke, Ne, We, qe));
            return ut && bi(), Hi(J), this;
        }, p.path = function(c) {
            for (var g = 0; g < c.length; g++) {
                var B = c[g], D = B.c;
                switch (B.op) {
                  case "m":
                    br(D[0], D[1]);
                    break;

                  case "l":
                    Ma(D[0], D[1]);
                    break;

                  case "c":
                    yr.apply(this, D);
                    break;

                  case "h":
                    bi();
                }
            }
            return this;
        }, p.__private__.rect = p.rect = function(c, g, B, D, J) {
            if (isNaN(c) || isNaN(g) || isNaN(B) || isNaN(D) || !Kn(J)) throw new Error("Invalid arguments passed to jsPDF.rect");
            return Z === U && (D = -D), F([ O(R(c)), O(T(g)), O(R(B)), O(R(D)), "re" ].join(" ")), 
            Hi(J), this;
        }, p.__private__.triangle = p.triangle = function(c, g, B, D, J, ut, bt) {
            if (isNaN(c) || isNaN(g) || isNaN(B) || isNaN(D) || isNaN(J) || isNaN(ut) || !Kn(bt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
            return this.lines([ [ B - c, D - g ], [ J - B, ut - D ], [ c - J, g - ut ] ], c, g, [ 1, 1 ], bt, !0), 
            this;
        }, p.__private__.roundedRect = p.roundedRect = function(c, g, B, D, J, ut, bt) {
            if (isNaN(c) || isNaN(g) || isNaN(B) || isNaN(D) || isNaN(J) || isNaN(ut) || !Kn(bt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
            var Ot = 4 / 3 * (Math.SQRT2 - 1);
            return J = Math.min(J, .5 * B), ut = Math.min(ut, .5 * D), this.lines([ [ B - 2 * J, 0 ], [ J * Ot, 0, J, ut - ut * Ot, J, ut ], [ 0, D - 2 * ut ], [ 0, ut * Ot, -J * Ot, ut, -J, ut ], [ 2 * J - B, 0 ], [ -J * Ot, 0, -J, -ut * Ot, -J, -ut ], [ 0, 2 * ut - D ], [ 0, -ut * Ot, J * Ot, -ut, J, -ut ] ], c + J, g, [ 1, 1 ], bt, !0), 
            this;
        }, p.__private__.ellipse = p.ellipse = function(c, g, B, D, J) {
            if (isNaN(c) || isNaN(g) || isNaN(B) || isNaN(D) || !Kn(J)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
            var ut = 4 / 3 * (Math.SQRT2 - 1) * B, bt = 4 / 3 * (Math.SQRT2 - 1) * D;
            return br(c + B, g), yr(c + B, g - bt, c + ut, g - D, c, g - D), yr(c - ut, g - D, c - B, g - bt, c - B, g), 
            yr(c - B, g + bt, c - ut, g + D, c, g + D), yr(c + ut, g + D, c + B, g + bt, c + B, g), 
            Hi(J), this;
        }, p.__private__.circle = p.circle = function(c, g, B, D) {
            if (isNaN(c) || isNaN(g) || isNaN(B) || !Kn(D)) throw new Error("Invalid arguments passed to jsPDF.circle");
            return this.ellipse(c, g, B, B, D);
        }, p.setFont = function(c, g, B) {
            return B && (g = Lt(g, B)), qt = Fa(c, g, {
                disableWarning: !1
            }), this;
        };
        var Uo = p.__private__.getFont = p.getFont = function() {
            return ee[Fa.apply(p, arguments)];
        };
        p.__private__.getFontList = p.getFontList = function() {
            var c, g, B = {};
            for (c in ue) if (ue.hasOwnProperty(c)) for (g in B[c] = [], ue[c]) ue[c].hasOwnProperty(g) && B[c].push(g);
            return B;
        }, p.addFont = function(c, g, B, D, J) {
            var ut = [ "StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding" ];
            return arguments[3] && ut.indexOf(arguments[3]) !== -1 ? J = arguments[3] : arguments[3] && ut.indexOf(arguments[3]) == -1 && (B = Lt(B, D)), 
            Ui.call(this, c, g, B, J = J || "Identity-H");
        };
        var Vr, Yt = i.lineWidth || .200025, Ho = p.__private__.getLineWidth = p.getLineWidth = function() {
            return Yt;
        }, Wo = p.__private__.setLineWidth = p.setLineWidth = function(c) {
            return Yt = c, F(O(R(c)) + " w"), this;
        };
        p.__private__.setLineDash = Wt.API.setLineDash = Wt.API.setLineDashPattern = function(c, g) {
            if (c = c || [], g = g || 0, isNaN(g) || !Array.isArray(c)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
            return c = c.map(function(B) {
                return O(R(B));
            }).join(" "), g = O(R(g)), F("[" + c + "] " + g + " d"), this;
        };
        var Vo = p.__private__.getLineHeight = p.getLineHeight = function() {
            return mt * Vr;
        };
        p.__private__.getLineHeight = p.getLineHeight = function() {
            return mt * Vr;
        };
        var Go = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(c) {
            return typeof (c = c || 1.15) == "number" && (Vr = c), this;
        }, Yo = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
            return Vr;
        };
        Go(i.lineHeight);
        var wr = p.__private__.getHorizontalCoordinate = function(c) {
            return R(c);
        }, Lr = p.__private__.getVerticalCoordinate = function(c) {
            return Z === X ? c : Kt[j].mediaBox.topRightY - Kt[j].mediaBox.bottomLeftY - R(c);
        }, Jo = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(c) {
            return O(wr(c));
        }, Xo = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(c) {
            return O(Lr(c));
        }, wi = i.strokeColor || "0 G";
        p.__private__.getStrokeColor = p.getDrawColor = function() {
            return On(wi);
        }, p.__private__.setStrokeColor = p.setDrawColor = function(c, g, B, D) {
            return wi = Bn({
                ch1: c,
                ch2: g,
                ch3: B,
                ch4: D,
                pdfColorType: "draw",
                precision: 2
            }), F(wi), this;
        };
        var Wi = i.fillColor || "0 g";
        p.__private__.getFillColor = p.getFillColor = function() {
            return On(Wi);
        }, p.__private__.setFillColor = p.setFillColor = function(c, g, B, D) {
            return Wi = Bn({
                ch1: c,
                ch2: g,
                ch3: B,
                ch4: D,
                pdfColorType: "fill",
                precision: 2
            }), F(Wi), this;
        };
        var $n = i.textColor || "0 g", Ko = p.__private__.getTextColor = p.getTextColor = function() {
            return On($n);
        };
        p.__private__.setTextColor = p.setTextColor = function(c, g, B, D) {
            return $n = Bn({
                ch1: c,
                ch2: g,
                ch3: B,
                ch4: D,
                pdfColorType: "text",
                precision: 3
            }), this;
        };
        var Li = i.charSpace, $o = p.__private__.getCharSpace = p.getCharSpace = function() {
            return parseFloat(Li || 0);
        };
        p.__private__.setCharSpace = p.setCharSpace = function(c) {
            if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
            return Li = c, this;
        };
        var Vi = 0;
        p.CapJoinStyles = {
            0: 0,
            butt: 0,
            but: 0,
            miter: 0,
            1: 1,
            round: 1,
            rounded: 1,
            circle: 1,
            2: 2,
            projecting: 2,
            project: 2,
            square: 2,
            bevel: 2
        }, p.__private__.setLineCap = p.setLineCap = function(c) {
            var g = p.CapJoinStyles[c];
            if (g === void 0) throw new Error("Line cap style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return Vi = g, F(g + " J"), this;
        };
        var Nr = 0;
        p.__private__.setLineJoin = p.setLineJoin = function(c) {
            var g = p.CapJoinStyles[c];
            if (g === void 0) throw new Error("Line join style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            return Nr = g, F(g + " j"), this;
        }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(c) {
            if (c = c || 0, isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
            return F(O(R(c)) + " M"), this;
        }, p.GState = ga, p.setGState = function(c) {
            (c = typeof c == "string" ? ve[Be[c]] : Gi(null, c)).equals(dn) || (F("/" + c.id + " gs"), 
            dn = c);
        };
        var Gi = function(c, g) {
            if (!c || !Be[c]) {
                var B = !1;
                for (var D in ve) if (ve.hasOwnProperty(D) && ve[D].equals(g)) {
                    B = !0;
                    break;
                }
                if (B) g = ve[D]; else {
                    var J = "GS" + (Object.keys(ve).length + 1).toString(10);
                    ve[J] = g, g.id = J;
                }
                return c && (Be[c] = g.id), de.publish("addGState", g), g;
            }
        };
        p.addGState = function(c, g) {
            return Gi(c, g), this;
        }, p.saveGraphicsState = function() {
            return F("q"), fn.push({
                key: qt,
                size: mt,
                color: $n
            }), this;
        }, p.restoreGraphicsState = function() {
            F("Q");
            var c = fn.pop();
            return qt = c.key, mt = c.size, $n = c.color, dn = null, this;
        }, p.setCurrentTransformationMatrix = function(c) {
            return F(c.toString() + " cm"), this;
        }, p.comment = function(c) {
            return F("#" + c), this;
        };
        var Gr = function(c, g) {
            var B = c || 0;
            Object.defineProperty(this, "x", {
                enumerable: !0,
                get: function() {
                    return B;
                },
                set: function(ut) {
                    isNaN(ut) || (B = parseFloat(ut));
                }
            });
            var D = g || 0;
            Object.defineProperty(this, "y", {
                enumerable: !0,
                get: function() {
                    return D;
                },
                set: function(ut) {
                    isNaN(ut) || (D = parseFloat(ut));
                }
            });
            var J = "pt";
            return Object.defineProperty(this, "type", {
                enumerable: !0,
                get: function() {
                    return J;
                },
                set: function(ut) {
                    J = ut.toString();
                }
            }), this;
        }, Yi = function(c, g, B, D) {
            Gr.call(this, c, g), this.type = "rect";
            var J = B || 0;
            Object.defineProperty(this, "w", {
                enumerable: !0,
                get: function() {
                    return J;
                },
                set: function(bt) {
                    isNaN(bt) || (J = parseFloat(bt));
                }
            });
            var ut = D || 0;
            return Object.defineProperty(this, "h", {
                enumerable: !0,
                get: function() {
                    return ut;
                },
                set: function(bt) {
                    isNaN(bt) || (ut = parseFloat(bt));
                }
            }), this;
        }, Ni = function() {
            this.page = Pe, this.currentPage = j, this.pages = Nt.slice(0), this.pagesContext = Kt.slice(0), 
            this.x = Rt, this.y = Ue, this.matrix = ae, this.width = Xi(j), this.height = bn(j), 
            this.outputDestination = kt, this.id = "", this.objectNumber = -1;
        };
        Ni.prototype.restore = function() {
            Pe = this.page, j = this.currentPage, Kt = this.pagesContext, Nt = this.pages, 
            Rt = this.x, Ue = this.y, ae = this.matrix, Zn(j, this.width), Ki(j, this.height), 
            kt = this.outputDestination;
        };
        var Ji = function(c, g, B, D, J) {
            Gn.push(new Ni()), Pe = j = 0, Nt = [], Rt = c, Ue = g, ae = J, gi([ B, D ]);
        };
        for (var xi in p.beginFormObject = function(c, g, B, D, J) {
            return Ji(c, g, B, D, J), this;
        }, p.endFormObject = function(c) {
            return function(g) {
                if (Vn[g]) Gn.pop().restore(); else {
                    var B = new Ni(), D = "Xo" + (Object.keys(rn).length + 1).toString(10);
                    B.id = D, Vn[g] = D, rn[D] = B, de.publish("addFormObject", B), 
                    Gn.pop().restore();
                }
            }(c), this;
        }, p.doFormObject = function(c, g) {
            var B = rn[Vn[c]];
            return F("q"), F(g.toString() + " cm"), F("/" + B.id + " Do"), F("Q"), 
            this;
        }, p.getFormObject = function(c) {
            var g = rn[Vn[c]];
            return {
                x: g.x,
                y: g.y,
                width: g.width,
                height: g.height,
                matrix: g.matrix
            };
        }, p.save = function(c, g) {
            return c = c || "generated.pdf", (g = g || {}).returnPromise = g.returnPromise || !1, 
            g.returnPromise === !1 ? (Rr(pn(sr()), c), typeof Rr.unload == "function" && Ht.setTimeout && setTimeout(Rr.unload, 911), 
            this) : new Promise(function(B, D) {
                try {
                    var J = Rr(pn(sr()), c);
                    typeof Rr.unload == "function" && Ht.setTimeout && setTimeout(Rr.unload, 911), 
                    B(J);
                } catch (ut) {
                    D(ut.message);
                }
            });
        }, Wt.API) Wt.API.hasOwnProperty(xi) && (xi === "events" && Wt.API.events.length ? function(c, g) {
            var B, D, J;
            for (J = g.length - 1; J !== -1; J--) B = g[J][0], D = g[J][1], c.subscribe.apply(c, [ B ].concat(typeof D == "function" ? [ D ] : D));
        }(de, Wt.API.events) : p[xi] = Wt.API[xi]);
        var Xi = p.getPageWidth = function(c) {
            return (Kt[c = c || j].mediaBox.topRightX - Kt[c].mediaBox.bottomLeftX) / Zt;
        }, Zn = p.setPageWidth = function(c, g) {
            Kt[c].mediaBox.topRightX = g * Zt + Kt[c].mediaBox.bottomLeftX;
        }, bn = p.getPageHeight = function(c) {
            return (Kt[c = c || j].mediaBox.topRightY - Kt[c].mediaBox.bottomLeftY) / Zt;
        }, Ki = p.setPageHeight = function(c, g) {
            Kt[c].mediaBox.topRightY = g * Zt + Kt[c].mediaBox.bottomLeftY;
        };
        return p.internal = {
            pdfEscape: or,
            getStyle: Ba,
            getFont: Uo,
            getFontSize: Mt,
            getCharSpace: $o,
            getTextColor: Ko,
            getLineHeight: Vo,
            getLineHeightFactor: Yo,
            getLineWidth: Ho,
            write: At,
            getHorizontalCoordinate: wr,
            getVerticalCoordinate: Lr,
            getCoordinateString: Jo,
            getVerticalCoordinateString: Xo,
            collections: {},
            newObject: He,
            newAdditionalObject: li,
            newObjectDeferred: Me,
            newObjectDeferredBegin: vn,
            getFilters: Jn,
            putStream: Nn,
            events: de,
            scaleFactor: Zt,
            pageSize: {
                getWidth: function() {
                    return Xi(j);
                },
                setWidth: function(c) {
                    Zn(j, c);
                },
                getHeight: function() {
                    return bn(j);
                },
                setHeight: function(c) {
                    Ki(j, c);
                }
            },
            encryptionOptions: y,
            encryption: Xe,
            getEncryptor: function(c) {
                return y !== null ? Xe.encryptor(c, 0) : function(g) {
                    return g;
                };
            },
            output: vi,
            getNumberOfPages: mi,
            pages: Nt,
            out: F,
            f2: P,
            f3: I,
            getPageInfo: Oa,
            getPageInfoByObjId: Eo,
            getCurrentPageInfo: qo,
            getPDFVersion: S,
            Point: Gr,
            Rectangle: Yi,
            Matrix: Ut,
            hasHotfix: cr
        }, Object.defineProperty(p.internal.pageSize, "width", {
            get: function() {
                return Xi(j);
            },
            set: function(c) {
                Zn(j, c);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(p.internal.pageSize, "height", {
            get: function() {
                return bn(j);
            },
            set: function(c) {
                Ki(j, c);
            },
            enumerable: !0,
            configurable: !0
        }), function(c) {
            for (var g = 0, B = Bt.length; g < B; g++) {
                var D = Ui.call(this, c[g][0], c[g][1], c[g][2], Bt[g][3], !0);
                b === !1 && (k[D] = !0);
                var J = c[g][0].split("-");
                Wr({
                    id: D,
                    fontName: J[0],
                    fontStyle: J[1] || ""
                });
            }
            de.publish("addFonts", {
                fonts: ee,
                dictionary: ue
            });
        }.call(p, Bt), qt = "F1", Sa(s, n), de.publish("initialized"), p;
    }
    ti.prototype.lsbFirstWord = function(i) {
        return String.fromCharCode(255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255);
    }, ti.prototype.toHexString = function(i) {
        return i.split("").map(function(e) {
            return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
        }).join("");
    }, ti.prototype.hexToBytes = function(i) {
        for (var e = [], n = 0; n < i.length; n += 2) e.push(String.fromCharCode(parseInt(i.substr(n, 2), 16)));
        return e.join("");
    }, ti.prototype.processOwnerPassword = function(i, e) {
        return Ao(xo(e).substr(0, 5), i);
    }, ti.prototype.encryptor = function(i, e) {
        var n = xo(this.encryptionKey + String.fromCharCode(255 & i, i >> 8 & 255, i >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
        return function(a) {
            return Ao(n, a);
        };
    }, ga.prototype.equals = function(i) {
        var e, n = "id,objectNumber,equals";
        if (!i || fe(i) !== fe(this)) return !1;
        var a = 0;
        for (e in this) if (!(n.indexOf(e) >= 0)) {
            if (this.hasOwnProperty(e) && !i.hasOwnProperty(e) || this[e] !== i[e]) return !1;
            a++;
        }
        for (e in i) i.hasOwnProperty(e) && n.indexOf(e) < 0 && a--;
        return a === 0;
    }, Wt.API = {
        events: []
    }, Wt.version = "2.5.1";
    var Se = Wt.API, _o = 1, Dr = function(i) {
        return i.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, ri = function(i) {
        return i.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
    }, $t = function(i) {
        return i.toFixed(2);
    }, mr = function(i) {
        return i.toFixed(5);
    };
    Se.__acroform__ = {};
    var hn = function(i, e) {
        i.prototype = Object.create(e.prototype), i.prototype.constructor = i;
    }, Rs = function(i) {
        return i * _o;
    }, Un = function(i) {
        var e = new Ds(), n = jt.internal.getHeight(i) || 0, a = jt.internal.getWidth(i) || 0;
        return e.BBox = [ 0, 0, Number($t(a)), Number($t(n)) ], e;
    }, Mu = Se.__acroform__.setBit = function(i, e) {
        if (i = i || 0, e = e || 0, isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
        return i | 1 << e;
    }, Eu = Se.__acroform__.clearBit = function(i, e) {
        if (i = i || 0, e = e || 0, isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
        return i & ~(1 << e);
    }, qu = Se.__acroform__.getBit = function(i, e) {
        if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
        return i & 1 << e ? 1 : 0;
    }, Ie = Se.__acroform__.getBitForPdf = function(i, e) {
        if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
        return qu(i, e - 1);
    }, Ce = Se.__acroform__.setBitForPdf = function(i, e) {
        if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
        return Mu(i, e - 1);
    }, je = Se.__acroform__.clearBitForPdf = function(i, e) {
        if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
        return Eu(i, e - 1);
    }, Ru = Se.__acroform__.calculateCoordinates = function(i, e) {
        var n = e.internal.getHorizontalCoordinate, a = e.internal.getVerticalCoordinate, s = i[0], o = i[1], l = i[2], h = i[3], f = {};
        return f.lowerLeft_X = n(s) || 0, f.lowerLeft_Y = a(o + h) || 0, f.upperRight_X = n(s + l) || 0, 
        f.upperRight_Y = a(o) || 0, [ Number($t(f.lowerLeft_X)), Number($t(f.lowerLeft_Y)), Number($t(f.upperRight_X)), Number($t(f.upperRight_Y)) ];
    }, Tu = function(i) {
        if (i.appearanceStreamContent) return i.appearanceStreamContent;
        if (i.V || i.DV) {
            var e = [], n = i._V || i.DV, a = So(i, n), s = i.scope.internal.getFont(i.fontName, i.fontStyle).id;
            e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(i.scope.__private__.encodeColorString(i.color)), 
            e.push("/" + s + " " + $t(a.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), 
            e.push(a.text), e.push("ET"), e.push("Q"), e.push("EMC");
            var o = Un(i);
            return o.scope = i.scope, o.stream = e.join(`
`), o;
        }
    }, So = function(i, e) {
        var n = i.fontSize === 0 ? i.maxFontSize : i.fontSize, a = {
            text: "",
            fontSize: ""
        }, s = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
        s = i.multiline ? s.map(function(P) {
            return P.split(`
`);
        }) : s.map(function(P) {
            return [ P ];
        });
        var o = n, l = jt.internal.getHeight(i) || 0;
        l = l < 0 ? -l : l;
        var h = jt.internal.getWidth(i) || 0;
        h = h < 0 ? -h : h;
        var f = function(P, I, R) {
            if (P + 1 < s.length) {
                var T = I + " " + s[P + 1][0];
                return ma(T, i, R).width <= h - 4;
            }
            return !1;
        };
        o++;
        t: for (;o > 0; ) {
            e = "", o--;
            var m, y, b = ma("3", i, o).height, k = i.multiline ? l - o : (l - b) / 2, p = k += 2, M = 0, S = 0, E = 0;
            if (o <= 0) {
                e = `(...) Tj
`, e += "% Width of Text: " + ma(e, i, o = 12).width + ", FieldWidth:" + h + `
`;
                break;
            }
            for (var A = "", U = 0, X = 0; X < s.length; X++) if (s.hasOwnProperty(X)) {
                var Z = !1;
                if (s[X].length !== 1 && E !== s[X].length - 1) {
                    if ((b + 2) * (U + 2) + 2 > l) continue t;
                    A += s[X][E], Z = !0, S = X, X--;
                } else {
                    A = (A += s[X][E] + " ").substr(A.length - 1) == " " ? A.substr(0, A.length - 1) : A;
                    var ot = parseInt(X), yt = f(ot, A, o), Lt = X >= s.length - 1;
                    if (yt && !Lt) {
                        A += " ", E = 0;
                        continue;
                    }
                    if (yt || Lt) {
                        if (Lt) S = ot; else if (i.multiline && (b + 2) * (U + 2) + 2 > l) continue t;
                    } else {
                        if (!i.multiline || (b + 2) * (U + 2) + 2 > l) continue t;
                        S = ot;
                    }
                }
                for (var O = "", lt = M; lt <= S; lt++) {
                    var vt = s[lt];
                    if (i.multiline) {
                        if (lt === S) {
                            O += vt[E] + " ", E = (E + 1) % vt.length;
                            continue;
                        }
                        if (lt === M) {
                            O += vt[vt.length - 1] + " ";
                            continue;
                        }
                    }
                    O += vt[0] + " ";
                }
                switch (O = O.substr(O.length - 1) == " " ? O.substr(0, O.length - 1) : O, 
                y = ma(O, i, o).width, i.textAlign) {
                  case "right":
                    m = h - y - 2;
                    break;

                  case "center":
                    m = (h - y) / 2;
                    break;

                  default:
                    m = 2;
                }
                e += $t(m) + " " + $t(p) + ` Td
`, e += "(" + Dr(O) + `) Tj
`, e += -$t(m) + ` 0 Td
`, p = -(o + 2), y = 0, M = Z ? S : S + 1, U++, A = "";
            }
            break;
        }
        return a.text = e, a.fontSize = o, a;
    }, ma = function(i, e, n) {
        var a = e.scope.internal.getFont(e.fontName, e.fontStyle), s = e.scope.getStringUnitWidth(i, {
            font: a,
            fontSize: parseFloat(n),
            charSpace: 0
        }) * parseFloat(n);
        return {
            height: e.scope.getStringUnitWidth("3", {
                font: a,
                fontSize: parseFloat(n),
                charSpace: 0
            }) * parseFloat(n) * 1.5,
            width: s
        };
    }, Du = {
        fields: [],
        xForms: [],
        acroFormDictionaryRoot: null,
        printedOut: !1,
        internal: null,
        isInitialized: !1
    }, zu = function(i, e) {
        var n = {
            type: "reference",
            object: i
        };
        e.internal.getPageInfo(i.page).pageContext.annotations.find(function(a) {
            return a.type === n.type && a.object === n.object;
        }) === void 0 && e.internal.getPageInfo(i.page).pageContext.annotations.push(n);
    }, Uu = function(i, e) {
        if (e.scope = i, i.internal !== void 0 && (i.internal.acroformPlugin === void 0 || i.internal.acroformPlugin.isInitialized === !1)) {
            if (kn.FieldNum = 0, i.internal.acroformPlugin = JSON.parse(JSON.stringify(Du)), 
            i.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
            _o = i.internal.scaleFactor, i.internal.acroformPlugin.acroFormDictionaryRoot = new zs(), 
            i.internal.acroformPlugin.acroFormDictionaryRoot.scope = i, i.internal.acroformPlugin.acroFormDictionaryRoot._eventID = i.internal.events.subscribe("postPutResources", function() {
                var n;
                (n = i).internal.events.unsubscribe(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID), 
                delete n.internal.acroformPlugin.acroFormDictionaryRoot._eventID, 
                n.internal.acroformPlugin.printedOut = !0;
            }), i.internal.events.subscribe("buildDocument", function() {
                (function(n) {
                    n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                    var a = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                    for (var s in a) if (a.hasOwnProperty(s)) {
                        var o = a[s];
                        o.objId = void 0, o.hasAnnotation && zu(o, n);
                    }
                })(i);
            }), i.internal.events.subscribe("putCatalog", function() {
                (function(n) {
                    if (n.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
                    n.internal.write("/AcroForm " + n.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
                })(i);
            }), i.internal.events.subscribe("postPutPages", function(n) {
                (function(a, s) {
                    var o = !a;
                    for (var l in a || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), 
                    s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), 
                    a = a || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (a.hasOwnProperty(l)) {
                        var h = a[l], f = [], m = h.Rect;
                        if (h.Rect && (h.Rect = Ru(h.Rect, s)), s.internal.newObjectDeferredBegin(h.objId, !0), 
                        h.DA = jt.createDefaultAppearanceStream(h), fe(h) === "object" && typeof h.getKeyValueListForStream == "function" && (f = h.getKeyValueListForStream()), 
                        h.Rect = m, h.hasAppearanceStream && !h.appearanceStreamContent) {
                            var y = Tu(h);
                            f.push({
                                key: "AP",
                                value: "<</N " + y + ">>"
                            }), s.internal.acroformPlugin.xForms.push(y);
                        }
                        if (h.appearanceStreamContent) {
                            var b = "";
                            for (var k in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(k)) {
                                var p = h.appearanceStreamContent[k];
                                if (b += "/" + k + " ", b += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                                    for (var l in p) if (p.hasOwnProperty(l)) {
                                        var M = p[l];
                                        typeof M == "function" && (M = M.call(s, h)), 
                                        b += "/" + l + " " + M + " ", s.internal.acroformPlugin.xForms.indexOf(M) >= 0 || s.internal.acroformPlugin.xForms.push(M);
                                    }
                                } else typeof (M = p) == "function" && (M = M.call(s, h)), 
                                b += "/" + l + " " + M, s.internal.acroformPlugin.xForms.indexOf(M) >= 0 || s.internal.acroformPlugin.xForms.push(M);
                                b += ">>";
                            }
                            f.push({
                                key: "AP",
                                value: `<<
` + b + ">>"
                            });
                        }
                        s.internal.putStream({
                            additionalKeyValues: f,
                            objectId: h.objId
                        }), s.internal.out("endobj");
                    }
                    o && function(S, E) {
                        for (var A in S) if (S.hasOwnProperty(A)) {
                            var U = A, X = S[A];
                            E.internal.newObjectDeferredBegin(X.objId, !0), fe(X) === "object" && typeof X.putStream == "function" && X.putStream(), 
                            delete S[U];
                        }
                    }(s.internal.acroformPlugin.xForms, s);
                })(n, i);
            }), i.internal.acroformPlugin.isInitialized = !0;
        }
    }, Ts = Se.__acroform__.arrayToPdfArray = function(i, e, n) {
        var a = function(l) {
            return l;
        };
        if (Array.isArray(i)) {
            for (var s = "[", o = 0; o < i.length; o++) switch (o !== 0 && (s += " "), 
            fe(i[o])) {
              case "boolean":
              case "number":
              case "object":
                s += i[o].toString();
                break;

              case "string":
                i[o].substr(0, 1) !== "/" ? (e !== void 0 && n && (a = n.internal.getEncryptor(e)), 
                s += "(" + Dr(a(i[o].toString())) + ")") : s += i[o].toString();
            }
            return s + "]";
        }
        throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
    }, Po = function(i, e, n) {
        var a = function(s) {
            return s;
        };
        return e !== void 0 && n && (a = n.internal.getEncryptor(e)), (i = i || "").toString(), 
        "(" + Dr(a(i)) + ")";
    }, Hn = function() {
        this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
            get: function() {
                if (this._objId === void 0) {
                    if (this.scope === void 0) return;
                    this._objId = this.scope.internal.newObjectDeferred();
                }
                return this._objId;
            },
            set: function(i) {
                this._objId = i;
            }
        }), Object.defineProperty(this, "scope", {
            value: this._scope,
            writable: !0
        });
    };
    Hn.prototype.toString = function() {
        return this.objId + " 0 R";
    }, Hn.prototype.putStream = function() {
        var i = this.getKeyValueListForStream();
        this.scope.internal.putStream({
            data: this.stream,
            additionalKeyValues: i,
            objectId: this.objId
        }), this.scope.internal.out("endobj");
    }, Hn.prototype.getKeyValueListForStream = function() {
        var i = [], e = Object.getOwnPropertyNames(this).filter(function(o) {
            return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_";
        });
        for (var n in e) if (Object.getOwnPropertyDescriptor(this, e[n]).configurable === !1) {
            var a = e[n], s = this[a];
            s && (Array.isArray(s) ? i.push({
                key: a,
                value: Ts(s, this.objId, this.scope)
            }) : s instanceof Hn ? (s.scope = this.scope, i.push({
                key: a,
                value: s.objId + " 0 R"
            })) : typeof s != "function" && i.push({
                key: a,
                value: s
            }));
        }
        return i;
    };
    var Ds = function() {
        Hn.call(this), Object.defineProperty(this, "Type", {
            value: "/XObject",
            configurable: !1,
            writable: !0
        }), Object.defineProperty(this, "Subtype", {
            value: "/Form",
            configurable: !1,
            writable: !0
        }), Object.defineProperty(this, "FormType", {
            value: 1,
            configurable: !1,
            writable: !0
        });
        var i, e = [];
        Object.defineProperty(this, "BBox", {
            configurable: !1,
            get: function() {
                return e;
            },
            set: function(n) {
                e = n;
            }
        }), Object.defineProperty(this, "Resources", {
            value: "2 0 R",
            configurable: !1,
            writable: !0
        }), Object.defineProperty(this, "stream", {
            enumerable: !1,
            configurable: !0,
            set: function(n) {
                i = n.trim();
            },
            get: function() {
                return i || null;
            }
        });
    };
    hn(Ds, Hn);
    var zs = function() {
        Hn.call(this);
        var i, e = [];
        Object.defineProperty(this, "Kids", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return e.length > 0 ? e : void 0;
            }
        }), Object.defineProperty(this, "Fields", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return e;
            }
        }), Object.defineProperty(this, "DA", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                if (i) {
                    var n = function(a) {
                        return a;
                    };
                    return this.scope && (n = this.scope.internal.getEncryptor(this.objId)), 
                    "(" + Dr(n(i)) + ")";
                }
            },
            set: function(n) {
                i = n;
            }
        });
    };
    hn(zs, Hn);
    var kn = function i() {
        Hn.call(this);
        var e = 4;
        Object.defineProperty(this, "F", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return e;
            },
            set: function(A) {
                if (isNaN(A)) throw new Error('Invalid value "' + A + '" for attribute F supplied.');
                e = A;
            }
        }), Object.defineProperty(this, "showWhenPrinted", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(e, 3);
            },
            set: function(A) {
                A ? this.F = Ce(e, 3) : this.F = je(e, 3);
            }
        });
        var n = 0;
        Object.defineProperty(this, "Ff", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return n;
            },
            set: function(A) {
                if (isNaN(A)) throw new Error('Invalid value "' + A + '" for attribute Ff supplied.');
                n = A;
            }
        });
        var a = [];
        Object.defineProperty(this, "Rect", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                if (a.length !== 0) return a;
            },
            set: function(A) {
                a = A !== void 0 ? A : [];
            }
        }), Object.defineProperty(this, "x", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !a || isNaN(a[0]) ? 0 : a[0];
            },
            set: function(A) {
                a[0] = A;
            }
        }), Object.defineProperty(this, "y", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !a || isNaN(a[1]) ? 0 : a[1];
            },
            set: function(A) {
                a[1] = A;
            }
        }), Object.defineProperty(this, "width", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !a || isNaN(a[2]) ? 0 : a[2];
            },
            set: function(A) {
                a[2] = A;
            }
        }), Object.defineProperty(this, "height", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !a || isNaN(a[3]) ? 0 : a[3];
            },
            set: function(A) {
                a[3] = A;
            }
        });
        var s = "";
        Object.defineProperty(this, "FT", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return s;
            },
            set: function(A) {
                switch (A) {
                  case "/Btn":
                  case "/Tx":
                  case "/Ch":
                  case "/Sig":
                    s = A;
                    break;

                  default:
                    throw new Error('Invalid value "' + A + '" for attribute FT supplied.');
                }
            }
        });
        var o = null;
        Object.defineProperty(this, "T", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                if (!o || o.length < 1) {
                    if (this instanceof ya) return;
                    o = "FieldObject" + i.FieldNum++;
                }
                var A = function(U) {
                    return U;
                };
                return this.scope && (A = this.scope.internal.getEncryptor(this.objId)), 
                "(" + Dr(A(o)) + ")";
            },
            set: function(A) {
                o = A.toString();
            }
        }), Object.defineProperty(this, "fieldName", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return o;
            },
            set: function(A) {
                o = A;
            }
        });
        var l = "helvetica";
        Object.defineProperty(this, "fontName", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return l;
            },
            set: function(A) {
                l = A;
            }
        });
        var h = "normal";
        Object.defineProperty(this, "fontStyle", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return h;
            },
            set: function(A) {
                h = A;
            }
        });
        var f = 0;
        Object.defineProperty(this, "fontSize", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return f;
            },
            set: function(A) {
                f = A;
            }
        });
        var m = void 0;
        Object.defineProperty(this, "maxFontSize", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return m === void 0 ? 50 / _o : m;
            },
            set: function(A) {
                m = A;
            }
        });
        var y = "black";
        Object.defineProperty(this, "color", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return y;
            },
            set: function(A) {
                y = A;
            }
        });
        var b = "/F1 0 Tf 0 g";
        Object.defineProperty(this, "DA", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                if (!(!b || this instanceof ya || this instanceof zr)) return Po(b, this.objId, this.scope);
            },
            set: function(A) {
                A = A.toString(), b = A;
            }
        });
        var k = null;
        Object.defineProperty(this, "DV", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                if (k) return this instanceof Ve == 0 ? Po(k, this.objId, this.scope) : k;
            },
            set: function(A) {
                A = A.toString(), k = this instanceof Ve == 0 ? A.substr(0, 1) === "(" ? ri(A.substr(1, A.length - 2)) : ri(A) : A;
            }
        }), Object.defineProperty(this, "defaultValue", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return this instanceof Ve == 1 ? ri(k.substr(1, k.length - 1)) : k;
            },
            set: function(A) {
                A = A.toString(), k = this instanceof Ve == 1 ? "/" + A : A;
            }
        });
        var p = null;
        Object.defineProperty(this, "_V", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                if (p) return p;
            },
            set: function(A) {
                this.V = A;
            }
        }), Object.defineProperty(this, "V", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                if (p) return this instanceof Ve == 0 ? Po(p, this.objId, this.scope) : p;
            },
            set: function(A) {
                A = A.toString(), p = this instanceof Ve == 0 ? A.substr(0, 1) === "(" ? ri(A.substr(1, A.length - 2)) : ri(A) : A;
            }
        }), Object.defineProperty(this, "value", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return this instanceof Ve == 1 ? ri(p.substr(1, p.length - 1)) : p;
            },
            set: function(A) {
                A = A.toString(), p = this instanceof Ve == 1 ? "/" + A : A;
            }
        }), Object.defineProperty(this, "hasAnnotation", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return this.Rect;
            }
        }), Object.defineProperty(this, "Type", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return this.hasAnnotation ? "/Annot" : null;
            }
        }), Object.defineProperty(this, "Subtype", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return this.hasAnnotation ? "/Widget" : null;
            }
        });
        var M, S = !1;
        Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return S;
            },
            set: function(A) {
                A = !!A, S = A;
            }
        }), Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                if (M) return M;
            },
            set: function(A) {
                M = A;
            }
        }), Object.defineProperty(this, "readOnly", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 1);
            },
            set: function(A) {
                A ? this.Ff = Ce(this.Ff, 1) : this.Ff = je(this.Ff, 1);
            }
        }), Object.defineProperty(this, "required", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 2);
            },
            set: function(A) {
                A ? this.Ff = Ce(this.Ff, 2) : this.Ff = je(this.Ff, 2);
            }
        }), Object.defineProperty(this, "noExport", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 3);
            },
            set: function(A) {
                A ? this.Ff = Ce(this.Ff, 3) : this.Ff = je(this.Ff, 3);
            }
        });
        var E = null;
        Object.defineProperty(this, "Q", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                if (E !== null) return E;
            },
            set: function(A) {
                if ([ 0, 1, 2 ].indexOf(A) === -1) throw new Error('Invalid value "' + A + '" for attribute Q supplied.');
                E = A;
            }
        }), Object.defineProperty(this, "textAlign", {
            get: function() {
                var A;
                switch (E) {
                  case 0:
                  default:
                    A = "left";
                    break;

                  case 1:
                    A = "center";
                    break;

                  case 2:
                    A = "right";
                }
                return A;
            },
            configurable: !0,
            enumerable: !0,
            set: function(A) {
                switch (A) {
                  case "right":
                  case 2:
                    E = 2;
                    break;

                  case "center":
                  case 1:
                    E = 1;
                    break;

                  default:
                    E = 0;
                }
            }
        });
    };
    hn(kn, Hn);
    var ii = function() {
        kn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
        var i = 0;
        Object.defineProperty(this, "TI", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return i;
            },
            set: function(n) {
                i = n;
            }
        }), Object.defineProperty(this, "topIndex", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return i;
            },
            set: function(n) {
                i = n;
            }
        });
        var e = [];
        Object.defineProperty(this, "Opt", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return Ts(e, this.objId, this.scope);
            },
            set: function(n) {
                var a, s;
                s = [], typeof (a = n) == "string" && (s = function(o, l, h) {
                    h || (h = 1);
                    for (var f, m = []; f = l.exec(o); ) m.push(f[h]);
                    return m;
                }(a, /\((.*?)\)/g)), e = s;
            }
        }), this.getOptions = function() {
            return e;
        }, this.setOptions = function(n) {
            e = n, this.sort && e.sort();
        }, this.addOption = function(n) {
            n = (n = n || "").toString(), e.push(n), this.sort && e.sort();
        }, this.removeOption = function(n, a) {
            for (a = a || !1, n = (n = n || "").toString(); e.indexOf(n) !== -1 && (e.splice(e.indexOf(n), 1), 
            a !== !1); );
        }, Object.defineProperty(this, "combo", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 18);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 18) : this.Ff = je(this.Ff, 18);
            }
        }), Object.defineProperty(this, "edit", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 19);
            },
            set: function(n) {
                this.combo === !0 && (n ? this.Ff = Ce(this.Ff, 19) : this.Ff = je(this.Ff, 19));
            }
        }), Object.defineProperty(this, "sort", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 20);
            },
            set: function(n) {
                n ? (this.Ff = Ce(this.Ff, 20), e.sort()) : this.Ff = je(this.Ff, 20);
            }
        }), Object.defineProperty(this, "multiSelect", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 22);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 22) : this.Ff = je(this.Ff, 22);
            }
        }), Object.defineProperty(this, "doNotSpellCheck", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 23);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
            }
        }), Object.defineProperty(this, "commitOnSelChange", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 27);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 27) : this.Ff = je(this.Ff, 27);
            }
        }), this.hasAppearanceStream = !1;
    };
    hn(ii, kn);
    var ai = function() {
        ii.call(this), this.fontName = "helvetica", this.combo = !1;
    };
    hn(ai, ii);
    var oi = function() {
        ai.call(this), this.combo = !0;
    };
    hn(oi, ai);
    var va = function() {
        oi.call(this), this.edit = !0;
    };
    hn(va, oi);
    var Ve = function() {
        kn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 15);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 15) : this.Ff = je(this.Ff, 15);
            }
        }), Object.defineProperty(this, "radio", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 16);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 16) : this.Ff = je(this.Ff, 16);
            }
        }), Object.defineProperty(this, "pushButton", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 17);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 17) : this.Ff = je(this.Ff, 17);
            }
        }), Object.defineProperty(this, "radioIsUnison", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 26);
            },
            set: function(n) {
                n ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
            }
        });
        var i, e = {};
        Object.defineProperty(this, "MK", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                var n = function(o) {
                    return o;
                };
                if (this.scope && (n = this.scope.internal.getEncryptor(this.objId)), 
                Object.keys(e).length !== 0) {
                    var a, s = [];
                    for (a in s.push("<<"), e) s.push("/" + a + " (" + Dr(n(e[a])) + ")");
                    return s.push(">>"), s.join(`
`);
                }
            },
            set: function(n) {
                fe(n) === "object" && (e = n);
            }
        }), Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return e.CA || "";
            },
            set: function(n) {
                typeof n == "string" && (e.CA = n);
            }
        }), Object.defineProperty(this, "AS", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return i;
            },
            set: function(n) {
                i = n;
            }
        }), Object.defineProperty(this, "appearanceState", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return i.substr(1, i.length - 1);
            },
            set: function(n) {
                i = "/" + n;
            }
        });
    };
    hn(Ve, kn);
    var ba = function() {
        Ve.call(this), this.pushButton = !0;
    };
    hn(ba, Ve);
    var si = function() {
        Ve.call(this), this.radio = !0, this.pushButton = !1;
        var i = [];
        Object.defineProperty(this, "Kids", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return i;
            },
            set: function(e) {
                i = e !== void 0 ? e : [];
            }
        });
    };
    hn(si, Ve);
    var ya = function() {
        var i, e;
        kn.call(this), Object.defineProperty(this, "Parent", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return i;
            },
            set: function(s) {
                i = s;
            }
        }), Object.defineProperty(this, "optionName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return e;
            },
            set: function(s) {
                e = s;
            }
        });
        var n, a = {};
        Object.defineProperty(this, "MK", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                var s = function(h) {
                    return h;
                };
                this.scope && (s = this.scope.internal.getEncryptor(this.objId));
                var o, l = [];
                for (o in l.push("<<"), a) l.push("/" + o + " (" + Dr(s(a[o])) + ")");
                return l.push(">>"), l.join(`
`);
            },
            set: function(s) {
                fe(s) === "object" && (a = s);
            }
        }), Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return a.CA || "";
            },
            set: function(s) {
                typeof s == "string" && (a.CA = s);
            }
        }), Object.defineProperty(this, "AS", {
            enumerable: !1,
            configurable: !1,
            get: function() {
                return n;
            },
            set: function(s) {
                n = s;
            }
        }), Object.defineProperty(this, "appearanceState", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return n.substr(1, n.length - 1);
            },
            set: function(s) {
                n = "/" + s;
            }
        }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = jt.RadioButton.Circle, 
        this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
    };
    hn(ya, kn), si.prototype.setAppearance = function(i) {
        if (!("createAppearanceStream" in i) || !("getCA" in i)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
        for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
            var n = this.Kids[e];
            n.appearanceStreamContent = i.createAppearanceStream(n.optionName), 
            n.caption = i.getCA();
        }
    }, si.prototype.createOption = function(i) {
        var e = new ya();
        return e.Parent = this, e.optionName = i, this.Kids.push(e), Hu.call(this.scope, e), 
        e;
    };
    var wa = function() {
        Ve.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", 
        this.value = "On", this.textAlign = "center", this.appearanceStreamContent = jt.CheckBox.createAppearanceStream();
    };
    hn(wa, Ve);
    var zr = function() {
        kn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 13);
            },
            set: function(e) {
                e ? this.Ff = Ce(this.Ff, 13) : this.Ff = je(this.Ff, 13);
            }
        }), Object.defineProperty(this, "fileSelect", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 21);
            },
            set: function(e) {
                e ? this.Ff = Ce(this.Ff, 21) : this.Ff = je(this.Ff, 21);
            }
        }), Object.defineProperty(this, "doNotSpellCheck", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 23);
            },
            set: function(e) {
                e ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
            }
        }), Object.defineProperty(this, "doNotScroll", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 24);
            },
            set: function(e) {
                e ? this.Ff = Ce(this.Ff, 24) : this.Ff = je(this.Ff, 24);
            }
        }), Object.defineProperty(this, "comb", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 25);
            },
            set: function(e) {
                e ? this.Ff = Ce(this.Ff, 25) : this.Ff = je(this.Ff, 25);
            }
        }), Object.defineProperty(this, "richText", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 26);
            },
            set: function(e) {
                e ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
            }
        });
        var i = null;
        Object.defineProperty(this, "MaxLen", {
            enumerable: !0,
            configurable: !1,
            get: function() {
                return i;
            },
            set: function(e) {
                i = e;
            }
        }), Object.defineProperty(this, "maxLength", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return i;
            },
            set: function(e) {
                Number.isInteger(e) && (i = e);
            }
        }), Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return this.V || this.DV;
            }
        });
    };
    hn(zr, kn);
    var La = function() {
        zr.call(this), Object.defineProperty(this, "password", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return !!Ie(this.Ff, 14);
            },
            set: function(i) {
                i ? this.Ff = Ce(this.Ff, 14) : this.Ff = je(this.Ff, 14);
            }
        }), this.password = !0;
    };
    hn(La, zr);
    var jt = {
        CheckBox: {
            createAppearanceStream: function() {
                return {
                    N: {
                        On: jt.CheckBox.YesNormal
                    },
                    D: {
                        On: jt.CheckBox.YesPushDown,
                        Off: jt.CheckBox.OffPushDown
                    }
                };
            },
            YesPushDown: function(i) {
                var e = Un(i);
                e.scope = i.scope;
                var n = [], a = i.scope.internal.getFont(i.fontName, i.fontStyle).id, s = i.scope.__private__.encodeColorString(i.color), o = So(i, i.caption);
                return n.push("0.749023 g"), n.push("0 0 " + $t(jt.internal.getWidth(i)) + " " + $t(jt.internal.getHeight(i)) + " re"), 
                n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + a + " " + $t(o.fontSize) + " Tf " + s), 
                n.push("BT"), n.push(o.text), n.push("ET"), n.push("Q"), n.push("EMC"), 
                e.stream = n.join(`
`), e;
            },
            YesNormal: function(i) {
                var e = Un(i);
                e.scope = i.scope;
                var n = i.scope.internal.getFont(i.fontName, i.fontStyle).id, a = i.scope.__private__.encodeColorString(i.color), s = [], o = jt.internal.getHeight(i), l = jt.internal.getWidth(i), h = So(i, i.caption);
                return s.push("1 g"), s.push("0 0 " + $t(l) + " " + $t(o) + " re"), 
                s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + $t(l - 1) + " " + $t(o - 1) + " re"), 
                s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + n + " " + $t(h.fontSize) + " Tf " + a), 
                s.push(h.text), s.push("ET"), s.push("Q"), e.stream = s.join(`
`), e;
            },
            OffPushDown: function(i) {
                var e = Un(i);
                e.scope = i.scope;
                var n = [];
                return n.push("0.749023 g"), n.push("0 0 " + $t(jt.internal.getWidth(i)) + " " + $t(jt.internal.getHeight(i)) + " re"), 
                n.push("f"), e.stream = n.join(`
`), e;
            }
        },
        RadioButton: {
            Circle: {
                createAppearanceStream: function(i) {
                    var e = {
                        D: {
                            Off: jt.RadioButton.Circle.OffPushDown
                        },
                        N: {}
                    };
                    return e.N[i] = jt.RadioButton.Circle.YesNormal, e.D[i] = jt.RadioButton.Circle.YesPushDown, 
                    e;
                },
                getCA: function() {
                    return "l";
                },
                YesNormal: function(i) {
                    var e = Un(i);
                    e.scope = i.scope;
                    var n = [], a = jt.internal.getWidth(i) <= jt.internal.getHeight(i) ? jt.internal.getWidth(i) / 4 : jt.internal.getHeight(i) / 4;
                    a = Number((.9 * a).toFixed(5));
                    var s = jt.internal.Bezier_C, o = Number((a * s).toFixed(5));
                    return n.push("q"), n.push("1 0 0 1 " + mr(jt.internal.getWidth(i) / 2) + " " + mr(jt.internal.getHeight(i) / 2) + " cm"), 
                    n.push(a + " 0 m"), n.push(a + " " + o + " " + o + " " + a + " 0 " + a + " c"), 
                    n.push("-" + o + " " + a + " -" + a + " " + o + " -" + a + " 0 c"), 
                    n.push("-" + a + " -" + o + " -" + o + " -" + a + " 0 -" + a + " c"), 
                    n.push(o + " -" + a + " " + a + " -" + o + " " + a + " 0 c"), 
                    n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
                },
                YesPushDown: function(i) {
                    var e = Un(i);
                    e.scope = i.scope;
                    var n = [], a = jt.internal.getWidth(i) <= jt.internal.getHeight(i) ? jt.internal.getWidth(i) / 4 : jt.internal.getHeight(i) / 4;
                    a = Number((.9 * a).toFixed(5));
                    var s = Number((2 * a).toFixed(5)), o = Number((s * jt.internal.Bezier_C).toFixed(5)), l = Number((a * jt.internal.Bezier_C).toFixed(5));
                    return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + mr(jt.internal.getWidth(i) / 2) + " " + mr(jt.internal.getHeight(i) / 2) + " cm"), 
                    n.push(s + " 0 m"), n.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), 
                    n.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), 
                    n.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), 
                    n.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), 
                    n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + mr(jt.internal.getWidth(i) / 2) + " " + mr(jt.internal.getHeight(i) / 2) + " cm"), 
                    n.push(a + " 0 m"), n.push(a + " " + l + " " + l + " " + a + " 0 " + a + " c"), 
                    n.push("-" + l + " " + a + " -" + a + " " + l + " -" + a + " 0 c"), 
                    n.push("-" + a + " -" + l + " -" + l + " -" + a + " 0 -" + a + " c"), 
                    n.push(l + " -" + a + " " + a + " -" + l + " " + a + " 0 c"), 
                    n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
                },
                OffPushDown: function(i) {
                    var e = Un(i);
                    e.scope = i.scope;
                    var n = [], a = jt.internal.getWidth(i) <= jt.internal.getHeight(i) ? jt.internal.getWidth(i) / 4 : jt.internal.getHeight(i) / 4;
                    a = Number((.9 * a).toFixed(5));
                    var s = Number((2 * a).toFixed(5)), o = Number((s * jt.internal.Bezier_C).toFixed(5));
                    return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + mr(jt.internal.getWidth(i) / 2) + " " + mr(jt.internal.getHeight(i) / 2) + " cm"), 
                    n.push(s + " 0 m"), n.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), 
                    n.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), 
                    n.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), 
                    n.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), 
                    n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
                }
            },
            Cross: {
                createAppearanceStream: function(i) {
                    var e = {
                        D: {
                            Off: jt.RadioButton.Cross.OffPushDown
                        },
                        N: {}
                    };
                    return e.N[i] = jt.RadioButton.Cross.YesNormal, e.D[i] = jt.RadioButton.Cross.YesPushDown, 
                    e;
                },
                getCA: function() {
                    return "8";
                },
                YesNormal: function(i) {
                    var e = Un(i);
                    e.scope = i.scope;
                    var n = [], a = jt.internal.calculateCross(i);
                    return n.push("q"), n.push("1 1 " + $t(jt.internal.getWidth(i) - 2) + " " + $t(jt.internal.getHeight(i) - 2) + " re"), 
                    n.push("W"), n.push("n"), n.push($t(a.x1.x) + " " + $t(a.x1.y) + " m"), 
                    n.push($t(a.x2.x) + " " + $t(a.x2.y) + " l"), n.push($t(a.x4.x) + " " + $t(a.x4.y) + " m"), 
                    n.push($t(a.x3.x) + " " + $t(a.x3.y) + " l"), n.push("s"), n.push("Q"), 
                    e.stream = n.join(`
`), e;
                },
                YesPushDown: function(i) {
                    var e = Un(i);
                    e.scope = i.scope;
                    var n = jt.internal.calculateCross(i), a = [];
                    return a.push("0.749023 g"), a.push("0 0 " + $t(jt.internal.getWidth(i)) + " " + $t(jt.internal.getHeight(i)) + " re"), 
                    a.push("f"), a.push("q"), a.push("1 1 " + $t(jt.internal.getWidth(i) - 2) + " " + $t(jt.internal.getHeight(i) - 2) + " re"), 
                    a.push("W"), a.push("n"), a.push($t(n.x1.x) + " " + $t(n.x1.y) + " m"), 
                    a.push($t(n.x2.x) + " " + $t(n.x2.y) + " l"), a.push($t(n.x4.x) + " " + $t(n.x4.y) + " m"), 
                    a.push($t(n.x3.x) + " " + $t(n.x3.y) + " l"), a.push("s"), a.push("Q"), 
                    e.stream = a.join(`
`), e;
                },
                OffPushDown: function(i) {
                    var e = Un(i);
                    e.scope = i.scope;
                    var n = [];
                    return n.push("0.749023 g"), n.push("0 0 " + $t(jt.internal.getWidth(i)) + " " + $t(jt.internal.getHeight(i)) + " re"), 
                    n.push("f"), e.stream = n.join(`
`), e;
                }
            }
        },
        createDefaultAppearanceStream: function(i) {
            var e = i.scope.internal.getFont(i.fontName, i.fontStyle).id, n = i.scope.__private__.encodeColorString(i.color);
            return "/" + e + " " + i.fontSize + " Tf " + n;
        }
    };
    jt.internal = {
        Bezier_C: .551915024494,
        calculateCross: function(i) {
            var e = jt.internal.getWidth(i), n = jt.internal.getHeight(i), a = Math.min(e, n);
            return {
                x1: {
                    x: (e - a) / 2,
                    y: (n - a) / 2 + a
                },
                x2: {
                    x: (e - a) / 2 + a,
                    y: (n - a) / 2
                },
                x3: {
                    x: (e - a) / 2,
                    y: (n - a) / 2
                },
                x4: {
                    x: (e - a) / 2 + a,
                    y: (n - a) / 2 + a
                }
            };
        }
    }, jt.internal.getWidth = function(i) {
        var e = 0;
        return fe(i) === "object" && (e = Rs(i.Rect[2])), e;
    }, jt.internal.getHeight = function(i) {
        var e = 0;
        return fe(i) === "object" && (e = Rs(i.Rect[3])), e;
    };
    var ci, ko, Hu = Se.addField = function(i) {
        if (Uu(this, i), !(i instanceof kn)) throw new Error("Invalid argument passed to jsPDF.addField.");
        var e;
        return (e = i).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, 
        e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), 
        i.page = i.scope.internal.getCurrentPageInfo().pageNumber, this;
    };
    function Us(i) {
        return i.reduce(function(e, n, a) {
            return e[n] = a, e;
        }, {});
    }
    Se.AcroFormChoiceField = ii, Se.AcroFormListBox = ai, Se.AcroFormComboBox = oi, 
    Se.AcroFormEditBox = va, Se.AcroFormButton = Ve, Se.AcroFormPushButton = ba, 
    Se.AcroFormRadioButton = si, Se.AcroFormCheckBox = wa, Se.AcroFormTextField = zr, 
    Se.AcroFormPasswordField = La, Se.AcroFormAppearance = jt, Se.AcroForm = {
        ChoiceField: ii,
        ListBox: ai,
        ComboBox: oi,
        EditBox: va,
        Button: Ve,
        PushButton: ba,
        RadioButton: si,
        CheckBox: wa,
        TextField: zr,
        PasswordField: La,
        Appearance: jt
    }, Wt.AcroForm = {
        ChoiceField: ii,
        ListBox: ai,
        ComboBox: oi,
        EditBox: va,
        Button: Ve,
        PushButton: ba,
        RadioButton: si,
        CheckBox: wa,
        TextField: zr,
        PasswordField: La,
        Appearance: jt
    }, function(i) {
        i.__addimage__ = {};
        var e = "UNKNOWN", n = {
            PNG: [ [ 137, 80, 78, 71 ] ],
            TIFF: [ [ 77, 77, 0, 42 ], [ 73, 73, 42, 0 ] ],
            JPEG: [ [ 255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0 ], [ 255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0 ], [ 255, 216, 255, 219 ], [ 255, 216, 255, 238 ] ],
            JPEG2000: [ [ 0, 0, 0, 12, 106, 80, 32, 32 ] ],
            GIF87a: [ [ 71, 73, 70, 56, 55, 97 ] ],
            GIF89a: [ [ 71, 73, 70, 56, 57, 97 ] ],
            WEBP: [ [ 82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80 ] ],
            BMP: [ [ 66, 77 ], [ 66, 65 ], [ 67, 73 ], [ 67, 80 ], [ 73, 67 ], [ 80, 84 ] ]
        }, a = i.__addimage__.getImageFileTypeByImageData = function(P, I) {
            var R, T, at, rt, pt, Q = e;
            if ((I = I || e) === "RGBA" || P.data !== void 0 && P.data instanceof Uint8ClampedArray && "height" in P && "width" in P) return "RGBA";
            if (yt(P)) for (pt in n) for (at = n[pt], R = 0; R < at.length; R += 1) {
                for (rt = !0, T = 0; T < at[R].length; T += 1) if (at[R][T] !== void 0 && at[R][T] !== P[T]) {
                    rt = !1;
                    break;
                }
                if (rt === !0) {
                    Q = pt;
                    break;
                }
            } else for (pt in n) for (at = n[pt], R = 0; R < at.length; R += 1) {
                for (rt = !0, T = 0; T < at[R].length; T += 1) if (at[R][T] !== void 0 && at[R][T] !== P.charCodeAt(T)) {
                    rt = !1;
                    break;
                }
                if (rt === !0) {
                    Q = pt;
                    break;
                }
            }
            return Q === e && I !== e && (Q = I), Q;
        }, s = function P(I) {
            for (var R = this.internal.write, T = this.internal.putStream, at = (0, 
            this.internal.getFilters)(); at.indexOf("FlateEncode") !== -1; ) at.splice(at.indexOf("FlateEncode"), 1);
            I.objectId = this.internal.newObject();
            var rt = [];
            if (rt.push({
                key: "Type",
                value: "/XObject"
            }), rt.push({
                key: "Subtype",
                value: "/Image"
            }), rt.push({
                key: "Width",
                value: I.width
            }), rt.push({
                key: "Height",
                value: I.height
            }), I.colorSpace === E.INDEXED ? rt.push({
                key: "ColorSpace",
                value: "[/Indexed /DeviceRGB " + (I.palette.length / 3 - 1) + " " + ("sMask" in I && I.sMask !== void 0 ? I.objectId + 2 : I.objectId + 1) + " 0 R]"
            }) : (rt.push({
                key: "ColorSpace",
                value: "/" + I.colorSpace
            }), I.colorSpace === E.DEVICE_CMYK && rt.push({
                key: "Decode",
                value: "[1 0 1 0 1 0 1 0]"
            })), rt.push({
                key: "BitsPerComponent",
                value: I.bitsPerComponent
            }), "decodeParameters" in I && I.decodeParameters !== void 0 && rt.push({
                key: "DecodeParms",
                value: "<<" + I.decodeParameters + ">>"
            }), "transparency" in I && Array.isArray(I.transparency)) {
                for (var pt = "", Q = 0, st = I.transparency.length; Q < st; Q++) pt += I.transparency[Q] + " " + I.transparency[Q] + " ";
                rt.push({
                    key: "Mask",
                    value: "[" + pt + "]"
                });
            }
            I.sMask !== void 0 && rt.push({
                key: "SMask",
                value: I.objectId + 1 + " 0 R"
            });
            var ct = I.filter !== void 0 ? [ "/" + I.filter ] : void 0;
            if (T({
                data: I.data,
                additionalKeyValues: rt,
                alreadyAppliedFilters: ct,
                objectId: I.objectId
            }), R("endobj"), "sMask" in I && I.sMask !== void 0) {
                var Ct = "/Predictor " + I.predictor + " /Colors 1 /BitsPerComponent " + I.bitsPerComponent + " /Columns " + I.width, L = {
                    width: I.width,
                    height: I.height,
                    colorSpace: "DeviceGray",
                    bitsPerComponent: I.bitsPerComponent,
                    decodeParameters: Ct,
                    data: I.sMask
                };
                "filter" in I && (L.filter = I.filter), P.call(this, L);
            }
            if (I.colorSpace === E.INDEXED) {
                var j = this.internal.newObject();
                T({
                    data: O(new Uint8Array(I.palette)),
                    objectId: j
                }), R("endobj");
            }
        }, o = function() {
            var P = this.internal.collections.addImage_images;
            for (var I in P) s.call(this, P[I]);
        }, l = function() {
            var P, I = this.internal.collections.addImage_images, R = this.internal.write;
            for (var T in I) R("/I" + (P = I[T]).index, P.objectId, "0", "R");
        }, h = function() {
            this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, 
            this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", l));
        }, f = function() {
            var P = this.internal.collections.addImage_images;
            return h.call(this), P;
        }, m = function() {
            return Object.keys(this.internal.collections.addImage_images).length;
        }, y = function(P) {
            return typeof i["process" + P.toUpperCase()] == "function";
        }, b = function(P) {
            return fe(P) === "object" && P.nodeType === 1;
        }, k = function(P, I) {
            if (P.nodeName === "IMG" && P.hasAttribute("src")) {
                var R = "" + P.getAttribute("src");
                if (R.indexOf("data:image/") === 0) return zi(unescape(R).split("base64,").pop());
                var T = i.loadFile(R, !0);
                if (T !== void 0) return T;
            }
            if (P.nodeName === "CANVAS") {
                if (P.width === 0 || P.height === 0) throw new Error("Given canvas must have data. Canvas width: " + P.width + ", height: " + P.height);
                var at;
                switch (I) {
                  case "PNG":
                    at = "image/png";
                    break;

                  case "WEBP":
                    at = "image/webp";
                    break;

                  default:
                    at = "image/jpeg";
                }
                return zi(P.toDataURL(at, 1).split("base64,").pop());
            }
        }, p = function(P) {
            var I = this.internal.collections.addImage_images;
            if (I) {
                for (var R in I) if (P === I[R].alias) return I[R];
            }
        }, M = function(P, I, R) {
            return P || I || (P = -96, I = -96), P < 0 && (P = -1 * R.width * 72 / P / this.internal.scaleFactor), 
            I < 0 && (I = -1 * R.height * 72 / I / this.internal.scaleFactor), P === 0 && (P = I * R.width / R.height), 
            I === 0 && (I = P * R.height / R.width), [ P, I ];
        }, S = function(P, I, R, T, at, rt) {
            var pt = M.call(this, R, T, at), Q = this.internal.getCoordinateString, st = this.internal.getVerticalCoordinateString, ct = f.call(this);
            if (R = pt[0], T = pt[1], ct[at.index] = at, rt) {
                rt *= Math.PI / 180;
                var Ct = Math.cos(rt), L = Math.sin(rt), j = function(W) {
                    return W.toFixed(4);
                }, q = [ j(Ct), j(L), j(-1 * L), j(Ct), 0, 0, "cm" ];
            }
            this.internal.write("q"), rt ? (this.internal.write([ 1, "0", "0", 1, Q(P), st(I + T), "cm" ].join(" ")), 
            this.internal.write(q.join(" ")), this.internal.write([ Q(R), "0", "0", Q(T), "0", "0", "cm" ].join(" "))) : this.internal.write([ Q(R), "0", "0", Q(T), Q(P), st(I + T), "cm" ].join(" ")), 
            this.isAdvancedAPI() && this.internal.write([ 1, 0, 0, -1, 0, 0, "cm" ].join(" ")), 
            this.internal.write("/I" + at.index + " Do"), this.internal.write("Q");
        }, E = i.color_spaces = {
            DEVICE_RGB: "DeviceRGB",
            DEVICE_GRAY: "DeviceGray",
            DEVICE_CMYK: "DeviceCMYK",
            CAL_GREY: "CalGray",
            CAL_RGB: "CalRGB",
            LAB: "Lab",
            ICC_BASED: "ICCBased",
            INDEXED: "Indexed",
            PATTERN: "Pattern",
            SEPARATION: "Separation",
            DEVICE_N: "DeviceN"
        };
        i.decode = {
            DCT_DECODE: "DCTDecode",
            FLATE_DECODE: "FlateDecode",
            LZW_DECODE: "LZWDecode",
            JPX_DECODE: "JPXDecode",
            JBIG2_DECODE: "JBIG2Decode",
            ASCII85_DECODE: "ASCII85Decode",
            ASCII_HEX_DECODE: "ASCIIHexDecode",
            RUN_LENGTH_DECODE: "RunLengthDecode",
            CCITT_FAX_DECODE: "CCITTFaxDecode"
        };
        var A = i.image_compression = {
            NONE: "NONE",
            FAST: "FAST",
            MEDIUM: "MEDIUM",
            SLOW: "SLOW"
        }, U = i.__addimage__.sHashCode = function(P) {
            var I, R, T = 0;
            if (typeof P == "string") for (R = P.length, I = 0; I < R; I++) T = (T << 5) - T + P.charCodeAt(I), 
            T |= 0; else if (yt(P)) for (R = P.byteLength / 2, I = 0; I < R; I++) T = (T << 5) - T + P[I], 
            T |= 0;
            return T;
        }, X = i.__addimage__.validateStringAsBase64 = function(P) {
            (P = P || "").toString().trim();
            var I = !0;
            return P.length === 0 && (I = !1), P.length % 4 != 0 && (I = !1), /^[A-Za-z0-9+/]+$/.test(P.substr(0, P.length - 2)) === !1 && (I = !1), 
            /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(P.substr(-2)) === !1 && (I = !1), 
            I;
        }, Z = i.__addimage__.extractImageFromDataUrl = function(P) {
            var I = (P = P || "").split("base64,"), R = null;
            if (I.length === 2) {
                var T = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(I[0]);
                Array.isArray(T) && (R = {
                    mimeType: T[1],
                    charset: T[2],
                    data: I[1]
                });
            }
            return R;
        }, ot = i.__addimage__.supportsArrayBuffer = function() {
            return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
        };
        i.__addimage__.isArrayBuffer = function(P) {
            return ot() && P instanceof ArrayBuffer;
        };
        var yt = i.__addimage__.isArrayBufferView = function(P) {
            return ot() && typeof Uint32Array < "u" && (P instanceof Int8Array || P instanceof Uint8Array || typeof Uint8ClampedArray < "u" && P instanceof Uint8ClampedArray || P instanceof Int16Array || P instanceof Uint16Array || P instanceof Int32Array || P instanceof Uint32Array || P instanceof Float32Array || P instanceof Float64Array);
        }, Lt = i.__addimage__.binaryStringToUint8Array = function(P) {
            for (var I = P.length, R = new Uint8Array(I), T = 0; T < I; T++) R[T] = P.charCodeAt(T);
            return R;
        }, O = i.__addimage__.arrayBufferToBinaryString = function(P) {
            for (var I = "", R = yt(P) ? P : new Uint8Array(P), T = 0; T < R.length; T += 8192) I += String.fromCharCode.apply(null, R.subarray(T, T + 8192));
            return I;
        };
        i.addImage = function() {
            var P, I, R, T, at, rt, pt, Q, st;
            if (typeof arguments[1] == "number" ? (I = e, R = arguments[1], T = arguments[2], 
            at = arguments[3], rt = arguments[4], pt = arguments[5], Q = arguments[6], 
            st = arguments[7]) : (I = arguments[1], R = arguments[2], T = arguments[3], 
            at = arguments[4], rt = arguments[5], pt = arguments[6], Q = arguments[7], 
            st = arguments[8]), fe(P = arguments[0]) === "object" && !b(P) && "imageData" in P) {
                var ct = P;
                P = ct.imageData, I = ct.format || I || e, R = ct.x || R || 0, T = ct.y || T || 0, 
                at = ct.w || ct.width || at, rt = ct.h || ct.height || rt, pt = ct.alias || pt, 
                Q = ct.compression || Q, st = ct.rotation || ct.angle || st;
            }
            var Ct = this.internal.getFilters();
            if (Q === void 0 && Ct.indexOf("FlateEncode") !== -1 && (Q = "SLOW"), 
            isNaN(R) || isNaN(T)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
            h.call(this);
            var L = lt.call(this, P, I, pt, Q);
            return S.call(this, R, T, at, rt, L, st), this;
        };
        var lt = function(P, I, R, T) {
            var at, rt, pt;
            if (typeof P == "string" && a(P) === e) {
                P = unescape(P);
                var Q = vt(P, !1);
                (Q !== "" || (Q = i.loadFile(P, !0)) !== void 0) && (P = Q);
            }
            if (b(P) && (P = k(P, I)), I = a(P, I), !y(I)) throw new Error("addImage does not support files of type '" + I + "', please ensure that a plugin for '" + I + "' support is added.");
            if (((pt = R) == null || pt.length === 0) && (R = function(st) {
                return typeof st == "string" || yt(st) ? U(st) : yt(st.data) ? U(st.data) : null;
            }(P)), (at = p.call(this, R)) || (ot() && (P instanceof Uint8Array || I === "RGBA" || (rt = P, 
            P = Lt(P))), at = this["process" + I.toUpperCase()](P, m.call(this), R, function(st) {
                return st && typeof st == "string" && (st = st.toUpperCase()), st in i.image_compression ? st : A.NONE;
            }(T), rt)), !at) throw new Error("An unknown error occurred whilst processing the image.");
            return at;
        }, vt = i.__addimage__.convertBase64ToBinaryString = function(P, I) {
            var R;
            I = typeof I != "boolean" || I;
            var T, at = "";
            if (typeof P == "string") {
                T = (R = Z(P)) !== null ? R.data : P;
                try {
                    at = zi(T);
                } catch (rt) {
                    if (I) throw X(T) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + rt.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
                }
            }
            return at;
        };
        i.getImageProperties = function(P) {
            var I, R, T = "";
            if (b(P) && (P = k(P)), typeof P == "string" && a(P) === e && ((T = vt(P, !1)) === "" && (T = i.loadFile(P) || ""), 
            P = T), R = a(P), !y(R)) throw new Error("addImage does not support files of type '" + R + "', please ensure that a plugin for '" + R + "' support is added.");
            if (!ot() || P instanceof Uint8Array || (P = Lt(P)), !(I = this["process" + R.toUpperCase()](P))) throw new Error("An unknown error occurred whilst processing the image");
            return I.fileType = R, I;
        };
    }(Wt.API), ci = Wt.API, ko = function(i) {
        if (i !== void 0 && i != "") return !0;
    }, Wt.API.events.push([ "addPage", function(i) {
        this.internal.getPageInfo(i.pageNumber).pageContext.annotations = [];
    } ]), ci.events.push([ "putPage", function(i) {
        for (var e, n, a, s = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, l = this.internal.getPageInfoByObjId(i.objId), h = i.pageContext.annotations, f = !1, m = 0; m < h.length && !f; m++) switch ((e = h[m]).type) {
          case "link":
            (ko(e.options.url) || ko(e.options.pageNumber)) && (f = !0);
            break;

          case "reference":
          case "text":
          case "freetext":
            f = !0;
        }
        if (f != 0) {
            this.internal.write("/Annots [");
            for (var y = 0; y < h.length; y++) {
                e = h[y];
                var b = this.internal.pdfEscape, k = this.internal.getEncryptor(i.objId);
                switch (e.type) {
                  case "reference":
                    this.internal.write(" " + e.object.objId + " 0 R ");
                    break;

                  case "text":
                    var p = this.internal.newAdditionalObject(), M = this.internal.newAdditionalObject(), S = this.internal.getEncryptor(p.objId), E = e.title || "Note";
                    a = "<</Type /Annot /Subtype /Text " + (n = "/Rect [" + s(e.bounds.x) + " " + o(e.bounds.y + e.bounds.h) + " " + s(e.bounds.x + e.bounds.w) + " " + o(e.bounds.y) + "] ") + "/Contents (" + b(S(e.contents)) + ")", 
                    a += " /Popup " + M.objId + " 0 R", a += " /P " + l.objId + " 0 R", 
                    a += " /T (" + b(S(E)) + ") >>", p.content = a;
                    var A = p.objId + " 0 R";
                    a = "<</Type /Annot /Subtype /Popup " + (n = "/Rect [" + s(e.bounds.x + 30) + " " + o(e.bounds.y + e.bounds.h) + " " + s(e.bounds.x + e.bounds.w + 30) + " " + o(e.bounds.y) + "] ") + " /Parent " + A, 
                    e.open && (a += " /Open true"), a += " >>", M.content = a, this.internal.write(p.objId, "0 R", M.objId, "0 R");
                    break;

                  case "freetext":
                    n = "/Rect [" + s(e.bounds.x) + " " + o(e.bounds.y) + " " + s(e.bounds.x + e.bounds.w) + " " + o(e.bounds.y + e.bounds.h) + "] ";
                    var U = e.color || "#000000";
                    a = "<</Type /Annot /Subtype /FreeText " + n + "/Contents (" + b(k(e.contents)) + ")", 
                    a += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + U + ")", 
                    a += " /Border [0 0 0]", a += " >>", this.internal.write(a);
                    break;

                  case "link":
                    if (e.options.name) {
                        var X = this.annotations._nameMap[e.options.name];
                        e.options.pageNumber = X.page, e.options.top = X.y;
                    } else e.options.top || (e.options.top = 0);
                    if (n = "/Rect [" + e.finalBounds.x + " " + e.finalBounds.y + " " + e.finalBounds.w + " " + e.finalBounds.h + "] ", 
                    a = "", e.options.url) a = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /A <</S /URI /URI (" + b(k(e.options.url)) + ") >>"; else if (e.options.pageNumber) switch (a = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(e.options.pageNumber).objId + " 0 R", 
                    e.options.magFactor = e.options.magFactor || "XYZ", e.options.magFactor) {
                      case "Fit":
                        a += " /Fit]";
                        break;

                      case "FitH":
                        a += " /FitH " + e.options.top + "]";
                        break;

                      case "FitV":
                        e.options.left = e.options.left || 0, a += " /FitV " + e.options.left + "]";
                        break;

                      default:
                        var Z = o(e.options.top);
                        e.options.left = e.options.left || 0, e.options.zoom === void 0 && (e.options.zoom = 0), 
                        a += " /XYZ " + e.options.left + " " + Z + " " + e.options.zoom + "]";
                    }
                    a != "" && (a += " >>", this.internal.write(a));
                }
            }
            this.internal.write("]");
        }
    } ]), ci.createAnnotation = function(i) {
        var e = this.internal.getCurrentPageInfo();
        switch (i.type) {
          case "link":
            this.link(i.bounds.x, i.bounds.y, i.bounds.w, i.bounds.h, i);
            break;

          case "text":
          case "freetext":
            e.pageContext.annotations.push(i);
        }
    }, ci.link = function(i, e, n, a, s) {
        var o = this.internal.getCurrentPageInfo(), l = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString;
        o.pageContext.annotations.push({
            finalBounds: {
                x: l(i),
                y: h(e),
                w: l(i + n),
                h: h(e + a)
            },
            options: s,
            type: "link"
        });
    }, ci.textWithLink = function(i, e, n, a) {
        var s, o, l = this.getTextWidth(i), h = this.internal.getLineHeight() / this.internal.scaleFactor;
        if (a.maxWidth !== void 0) {
            o = a.maxWidth;
            var f = this.splitTextToSize(i, o).length;
            s = Math.ceil(h * f);
        } else o = l, s = h;
        return this.text(i, e, n, a), n += .2 * h, a.align === "center" && (e -= l / 2), 
        a.align === "right" && (e -= l), this.link(e, n - h, o, s, a), l;
    }, ci.getTextWidth = function(i) {
        var e = this.internal.getFontSize();
        return this.getStringUnitWidth(i) * e / this.internal.scaleFactor;
    }, function(i) {
        var e = {
            1569: [ 65152 ],
            1570: [ 65153, 65154 ],
            1571: [ 65155, 65156 ],
            1572: [ 65157, 65158 ],
            1573: [ 65159, 65160 ],
            1574: [ 65161, 65162, 65163, 65164 ],
            1575: [ 65165, 65166 ],
            1576: [ 65167, 65168, 65169, 65170 ],
            1577: [ 65171, 65172 ],
            1578: [ 65173, 65174, 65175, 65176 ],
            1579: [ 65177, 65178, 65179, 65180 ],
            1580: [ 65181, 65182, 65183, 65184 ],
            1581: [ 65185, 65186, 65187, 65188 ],
            1582: [ 65189, 65190, 65191, 65192 ],
            1583: [ 65193, 65194 ],
            1584: [ 65195, 65196 ],
            1585: [ 65197, 65198 ],
            1586: [ 65199, 65200 ],
            1587: [ 65201, 65202, 65203, 65204 ],
            1588: [ 65205, 65206, 65207, 65208 ],
            1589: [ 65209, 65210, 65211, 65212 ],
            1590: [ 65213, 65214, 65215, 65216 ],
            1591: [ 65217, 65218, 65219, 65220 ],
            1592: [ 65221, 65222, 65223, 65224 ],
            1593: [ 65225, 65226, 65227, 65228 ],
            1594: [ 65229, 65230, 65231, 65232 ],
            1601: [ 65233, 65234, 65235, 65236 ],
            1602: [ 65237, 65238, 65239, 65240 ],
            1603: [ 65241, 65242, 65243, 65244 ],
            1604: [ 65245, 65246, 65247, 65248 ],
            1605: [ 65249, 65250, 65251, 65252 ],
            1606: [ 65253, 65254, 65255, 65256 ],
            1607: [ 65257, 65258, 65259, 65260 ],
            1608: [ 65261, 65262 ],
            1609: [ 65263, 65264, 64488, 64489 ],
            1610: [ 65265, 65266, 65267, 65268 ],
            1649: [ 64336, 64337 ],
            1655: [ 64477 ],
            1657: [ 64358, 64359, 64360, 64361 ],
            1658: [ 64350, 64351, 64352, 64353 ],
            1659: [ 64338, 64339, 64340, 64341 ],
            1662: [ 64342, 64343, 64344, 64345 ],
            1663: [ 64354, 64355, 64356, 64357 ],
            1664: [ 64346, 64347, 64348, 64349 ],
            1667: [ 64374, 64375, 64376, 64377 ],
            1668: [ 64370, 64371, 64372, 64373 ],
            1670: [ 64378, 64379, 64380, 64381 ],
            1671: [ 64382, 64383, 64384, 64385 ],
            1672: [ 64392, 64393 ],
            1676: [ 64388, 64389 ],
            1677: [ 64386, 64387 ],
            1678: [ 64390, 64391 ],
            1681: [ 64396, 64397 ],
            1688: [ 64394, 64395 ],
            1700: [ 64362, 64363, 64364, 64365 ],
            1702: [ 64366, 64367, 64368, 64369 ],
            1705: [ 64398, 64399, 64400, 64401 ],
            1709: [ 64467, 64468, 64469, 64470 ],
            1711: [ 64402, 64403, 64404, 64405 ],
            1713: [ 64410, 64411, 64412, 64413 ],
            1715: [ 64406, 64407, 64408, 64409 ],
            1722: [ 64414, 64415 ],
            1723: [ 64416, 64417, 64418, 64419 ],
            1726: [ 64426, 64427, 64428, 64429 ],
            1728: [ 64420, 64421 ],
            1729: [ 64422, 64423, 64424, 64425 ],
            1733: [ 64480, 64481 ],
            1734: [ 64473, 64474 ],
            1735: [ 64471, 64472 ],
            1736: [ 64475, 64476 ],
            1737: [ 64482, 64483 ],
            1739: [ 64478, 64479 ],
            1740: [ 64508, 64509, 64510, 64511 ],
            1744: [ 64484, 64485, 64486, 64487 ],
            1746: [ 64430, 64431 ],
            1747: [ 64432, 64433 ]
        }, n = {
            65247: {
                65154: 65269,
                65156: 65271,
                65160: 65273,
                65166: 65275
            },
            65248: {
                65154: 65270,
                65156: 65272,
                65160: 65274,
                65166: 65276
            },
            65165: {
                65247: {
                    65248: {
                        65258: 65010
                    }
                }
            },
            1617: {
                1612: 64606,
                1613: 64607,
                1614: 64608,
                1615: 64609,
                1616: 64610
            }
        }, a = {
            1612: 64606,
            1613: 64607,
            1614: 64608,
            1615: 64609,
            1616: 64610
        }, s = [ 1570, 1571, 1573, 1575 ];
        i.__arabicParser__ = {};
        var o = i.__arabicParser__.isInArabicSubstitutionA = function(S) {
            return e[S.charCodeAt(0)] !== void 0;
        }, l = i.__arabicParser__.isArabicLetter = function(S) {
            return typeof S == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(S);
        }, h = i.__arabicParser__.isArabicEndLetter = function(S) {
            return l(S) && o(S) && e[S.charCodeAt(0)].length <= 2;
        }, f = i.__arabicParser__.isArabicAlfLetter = function(S) {
            return l(S) && s.indexOf(S.charCodeAt(0)) >= 0;
        };
        i.__arabicParser__.arabicLetterHasIsolatedForm = function(S) {
            return l(S) && o(S) && e[S.charCodeAt(0)].length >= 1;
        };
        var m = i.__arabicParser__.arabicLetterHasFinalForm = function(S) {
            return l(S) && o(S) && e[S.charCodeAt(0)].length >= 2;
        };
        i.__arabicParser__.arabicLetterHasInitialForm = function(S) {
            return l(S) && o(S) && e[S.charCodeAt(0)].length >= 3;
        };
        var y = i.__arabicParser__.arabicLetterHasMedialForm = function(S) {
            return l(S) && o(S) && e[S.charCodeAt(0)].length == 4;
        }, b = i.__arabicParser__.resolveLigatures = function(S) {
            var E = 0, A = n, U = "", X = 0;
            for (E = 0; E < S.length; E += 1) A[S.charCodeAt(E)] !== void 0 ? (X++, 
            typeof (A = A[S.charCodeAt(E)]) == "number" && (U += String.fromCharCode(A), 
            A = n, X = 0), E === S.length - 1 && (A = n, U += S.charAt(E - (X - 1)), 
            E -= X - 1, X = 0)) : (A = n, U += S.charAt(E - X), E -= X, X = 0);
            return U;
        };
        i.__arabicParser__.isArabicDiacritic = function(S) {
            return S !== void 0 && a[S.charCodeAt(0)] !== void 0;
        };
        var k = i.__arabicParser__.getCorrectForm = function(S, E, A) {
            return l(S) ? o(S) === !1 ? -1 : !m(S) || !l(E) && !l(A) || !l(A) && h(E) || h(S) && !l(E) || h(S) && f(E) || h(S) && h(E) ? 0 : y(S) && l(E) && !h(E) && l(A) && m(A) ? 3 : h(S) || !l(A) ? 1 : 2 : -1;
        }, p = function(S) {
            var E = 0, A = 0, U = 0, X = "", Z = "", ot = "", yt = (S = S || "").split("\\s+"), Lt = [];
            for (E = 0; E < yt.length; E += 1) {
                for (Lt.push(""), A = 0; A < yt[E].length; A += 1) X = yt[E][A], 
                Z = yt[E][A - 1], ot = yt[E][A + 1], l(X) ? (U = k(X, Z, ot), Lt[E] += U !== -1 ? String.fromCharCode(e[X.charCodeAt(0)][U]) : X) : Lt[E] += X;
                Lt[E] = b(Lt[E]);
            }
            return Lt.join(" ");
        }, M = i.__arabicParser__.processArabic = i.processArabic = function() {
            var S, E = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, A = [];
            if (Array.isArray(E)) {
                var U = 0;
                for (A = [], U = 0; U < E.length; U += 1) Array.isArray(E[U]) ? A.push([ p(E[U][0]), E[U][1], E[U][2] ]) : A.push([ p(E[U]) ]);
                S = A;
            } else S = p(E);
            return typeof arguments[0] == "string" ? S : (arguments[0].text = S, 
            arguments[0]);
        };
        i.events.push([ "preProcessText", M ]);
    }(Wt.API), Wt.API.autoPrint = function(i) {
        var e;
        return (i = i || {}).variant = i.variant || "non-conform", i.variant === "javascript" ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
            e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), 
            this.internal.out("/Type /Action"), this.internal.out("/N /Print"), 
            this.internal.out(">>"), this.internal.out("endobj");
        }), this.internal.events.subscribe("putCatalog", function() {
            this.internal.out("/OpenAction " + e + " 0 R");
        })), this;
    }, function(i) {
        var e = function() {
            var n = void 0;
            Object.defineProperty(this, "pdf", {
                get: function() {
                    return n;
                },
                set: function(h) {
                    n = h;
                }
            });
            var a = 150;
            Object.defineProperty(this, "width", {
                get: function() {
                    return a;
                },
                set: function(h) {
                    a = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h, 
                    this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = a + 1);
                }
            });
            var s = 300;
            Object.defineProperty(this, "height", {
                get: function() {
                    return s;
                },
                set: function(h) {
                    s = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 300 : h, 
                    this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = s + 1);
                }
            });
            var o = [];
            Object.defineProperty(this, "childNodes", {
                get: function() {
                    return o;
                },
                set: function(h) {
                    o = h;
                }
            });
            var l = {};
            Object.defineProperty(this, "style", {
                get: function() {
                    return l;
                },
                set: function(h) {
                    l = h;
                }
            }), Object.defineProperty(this, "parentNode", {});
        };
        e.prototype.getContext = function(n, a) {
            var s;
            if ((n = n || "2d") !== "2d") return null;
            for (s in a) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = a[s]);
            return this.pdf.context2d._canvas = this, this.pdf.context2d;
        }, e.prototype.toDataURL = function() {
            throw new Error("toDataURL is not implemented.");
        }, i.events.push([ "initialized", function() {
            this.canvas = new e(), this.canvas.pdf = this;
        } ]);
    }(Wt.API), function(i) {
        var e = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        }, n = !1, a = function() {
            this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, 
            this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), 
            this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this));
        }, s = function() {
            this.internal.__cell__.lastCell = new o(), this.internal.__cell__.pages = 1;
        }, o = function() {
            var f = arguments[0];
            Object.defineProperty(this, "x", {
                enumerable: !0,
                get: function() {
                    return f;
                },
                set: function(S) {
                    f = S;
                }
            });
            var m = arguments[1];
            Object.defineProperty(this, "y", {
                enumerable: !0,
                get: function() {
                    return m;
                },
                set: function(S) {
                    m = S;
                }
            });
            var y = arguments[2];
            Object.defineProperty(this, "width", {
                enumerable: !0,
                get: function() {
                    return y;
                },
                set: function(S) {
                    y = S;
                }
            });
            var b = arguments[3];
            Object.defineProperty(this, "height", {
                enumerable: !0,
                get: function() {
                    return b;
                },
                set: function(S) {
                    b = S;
                }
            });
            var k = arguments[4];
            Object.defineProperty(this, "text", {
                enumerable: !0,
                get: function() {
                    return k;
                },
                set: function(S) {
                    k = S;
                }
            });
            var p = arguments[5];
            Object.defineProperty(this, "lineNumber", {
                enumerable: !0,
                get: function() {
                    return p;
                },
                set: function(S) {
                    p = S;
                }
            });
            var M = arguments[6];
            return Object.defineProperty(this, "align", {
                enumerable: !0,
                get: function() {
                    return M;
                },
                set: function(S) {
                    M = S;
                }
            }), this;
        };
        o.prototype.clone = function() {
            return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
        }, o.prototype.toArray = function() {
            return [ this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align ];
        }, i.setHeaderFunction = function(f) {
            return a.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, 
            this;
        }, i.getTextDimensions = function(f, m) {
            a.call(this);
            var y = (m = m || {}).fontSize || this.getFontSize(), b = m.font || this.getFont(), k = m.scaleFactor || this.internal.scaleFactor, p = 0, M = 0, S = 0, E = this;
            if (!Array.isArray(f) && typeof f != "string") {
                if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
                f = String(f);
            }
            var A = m.maxWidth;
            A > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, A) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(X, Z) {
                return X.concat(E.splitTextToSize(Z, A));
            }, [])) : f = Array.isArray(f) ? f : [ f ];
            for (var U = 0; U < f.length; U++) p < (S = this.getStringUnitWidth(f[U], {
                font: b
            }) * y) && (p = S);
            return p !== 0 && (M = f.length), {
                w: p /= k,
                h: Math.max((M * y * this.getLineHeightFactor() - y * (this.getLineHeightFactor() - 1)) / k, 0)
            };
        }, i.cellAddPage = function() {
            a.call(this), this.addPage();
            var f = this.internal.__cell__.margins || e;
            return this.internal.__cell__.lastCell = new o(f.left, f.top, void 0, void 0), 
            this.internal.__cell__.pages += 1, this;
        };
        var l = i.cell = function() {
            var f;
            f = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), 
            a.call(this);
            var m = this.internal.__cell__.lastCell, y = this.internal.__cell__.padding, b = this.internal.__cell__.margins || e, k = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
            return m.lineNumber !== void 0 && (m.lineNumber === f.lineNumber ? (f.x = (m.x || 0) + (m.width || 0), 
            f.y = m.y || 0) : m.y + m.height + f.height + b.bottom > this.getPageHeight() ? (this.cellAddPage(), 
            f.y = b.top, p && k && (this.printHeaderRow(f.lineNumber, !0), f.y += k[0].height)) : f.y = m.y + m.height || f.y), 
            f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, n === !0 ? "FD" : void 0), 
            f.align === "right" ? this.text(f.text, f.x + f.width - y, f.y + y, {
                align: "right",
                baseline: "top"
            }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + y, {
                align: "center",
                baseline: "top",
                maxWidth: f.width - y - y
            }) : this.text(f.text, f.x + y, f.y + y, {
                align: "left",
                baseline: "top",
                maxWidth: f.width - y - y
            })), this.internal.__cell__.lastCell = f, this;
        };
        i.table = function(f, m, y, b, k) {
            if (a.call(this), !y) throw new Error("No data for PDF table.");
            var p, M, S, E, A = [], U = [], X = [], Z = {}, ot = {}, yt = [], Lt = [], O = (k = k || {}).autoSize || !1, lt = k.printHeaders !== !1, vt = k.css && k.css["font-size"] !== void 0 ? 16 * k.css["font-size"] : k.fontSize || 12, P = k.margins || Object.assign({
                width: this.getPageWidth()
            }, e), I = typeof k.padding == "number" ? k.padding : 3, R = k.headerBackgroundColor || "#c8c8c8", T = k.headerTextColor || "#000";
            if (s.call(this), this.internal.__cell__.printHeaders = lt, this.internal.__cell__.margins = P, 
            this.internal.__cell__.table_font_size = vt, this.internal.__cell__.padding = I, 
            this.internal.__cell__.headerBackgroundColor = R, this.internal.__cell__.headerTextColor = T, 
            this.setFontSize(vt), b == null) U = A = Object.keys(y[0]), X = A.map(function() {
                return "left";
            }); else if (Array.isArray(b) && fe(b[0]) === "object") for (A = b.map(function(ct) {
                return ct.name;
            }), U = b.map(function(ct) {
                return ct.prompt || ct.name || "";
            }), X = b.map(function(ct) {
                return ct.align || "left";
            }), p = 0; p < b.length; p += 1) ot[b[p].name] = b[p].width * (19.049976 / 25.4); else Array.isArray(b) && typeof b[0] == "string" && (U = A = b, 
            X = A.map(function() {
                return "left";
            }));
            if (O || Array.isArray(b) && typeof b[0] == "string") for (p = 0; p < A.length; p += 1) {
                for (Z[E = A[p]] = y.map(function(ct) {
                    return ct[E];
                }), this.setFont(void 0, "bold"), yt.push(this.getTextDimensions(U[p], {
                    fontSize: this.internal.__cell__.table_font_size,
                    scaleFactor: this.internal.scaleFactor
                }).w), M = Z[E], this.setFont(void 0, "normal"), S = 0; S < M.length; S += 1) yt.push(this.getTextDimensions(M[S], {
                    fontSize: this.internal.__cell__.table_font_size,
                    scaleFactor: this.internal.scaleFactor
                }).w);
                ot[E] = Math.max.apply(null, yt) + I + I, yt = [];
            }
            if (lt) {
                var at = {};
                for (p = 0; p < A.length; p += 1) at[A[p]] = {}, at[A[p]].text = U[p], 
                at[A[p]].align = X[p];
                var rt = h.call(this, at, ot);
                Lt = A.map(function(ct) {
                    return new o(f, m, ot[ct], rt, at[ct].text, void 0, at[ct].align);
                }), this.setTableHeaderRow(Lt), this.printHeaderRow(1, !1);
            }
            var pt = b.reduce(function(ct, Ct) {
                return ct[Ct.name] = Ct.align, ct;
            }, {});
            for (p = 0; p < y.length; p += 1) {
                "rowStart" in k && k.rowStart instanceof Function && k.rowStart({
                    row: p,
                    data: y[p]
                }, this);
                var Q = h.call(this, y[p], ot);
                for (S = 0; S < A.length; S += 1) {
                    var st = y[p][A[S]];
                    "cellStart" in k && k.cellStart instanceof Function && k.cellStart({
                        row: p,
                        col: S,
                        data: st
                    }, this), l.call(this, new o(f, m, ot[A[S]], Q, st, p + 2, pt[A[S]]));
                }
            }
            return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = m, 
            this;
        };
        var h = function(f, m) {
            var y = this.internal.__cell__.padding, b = this.internal.__cell__.table_font_size, k = this.internal.scaleFactor;
            return Object.keys(f).map(function(p) {
                var M = f[p];
                return this.splitTextToSize(M.hasOwnProperty("text") ? M.text : M, m[p] - y - y);
            }, this).map(function(p) {
                return this.getLineHeightFactor() * p.length * b / k + y + y;
            }, this).reduce(function(p, M) {
                return Math.max(p, M);
            }, 0);
        };
        i.setTableHeaderRow = function(f) {
            a.call(this), this.internal.__cell__.tableHeaderRow = f;
        }, i.printHeaderRow = function(f, m) {
            if (a.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
            var y;
            if (n = !0, typeof this.internal.__cell__.headerFunction == "function") {
                var b = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
                this.internal.__cell__.lastCell = new o(b[0], b[1], b[2], b[3], void 0, -1);
            }
            this.setFont(void 0, "bold");
            for (var k = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
                y = this.internal.__cell__.tableHeaderRow[p].clone(), m && (y.y = this.internal.__cell__.margins.top || 0, 
                k.push(y)), y.lineNumber = f;
                var M = this.getTextColor();
                this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), 
                l.call(this, y), this.setTextColor(M);
            }
            k.length > 0 && this.setTableHeaderRow(k), this.setFont(void 0, "normal"), 
            n = !1;
        };
    }(Wt.API);
    var Hs = {
        italic: [ "italic", "oblique", "normal" ],
        oblique: [ "oblique", "italic", "normal" ],
        normal: [ "normal", "oblique", "italic" ]
    }, Ws = [ "ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded" ], Fo = Us(Ws), Vs = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], Wu = Us(Vs);
    function Io(i) {
        var e = i.family.replace(/"|'/g, "").toLowerCase(), n = function(o) {
            return Hs[o = o || "normal"] ? o : "normal";
        }(i.style), a = function(o) {
            return o ? typeof o == "number" ? o >= 100 && o <= 900 && o % 100 == 0 ? o : 400 : /^\d00$/.test(o) ? parseInt(o) : o === "bold" ? 700 : 400 : 400;
        }(i.weight), s = function(o) {
            return typeof Fo[o = o || "normal"] == "number" ? o : "normal";
        }(i.stretch);
        return {
            family: e,
            style: n,
            weight: a,
            stretch: s,
            src: i.src || [],
            ref: i.ref || {
                name: e,
                style: [ s, n, a ].join(" ")
            }
        };
    }
    function Gs(i, e, n, a) {
        var s;
        for (s = n; s >= 0 && s < e.length; s += a) if (i[e[s]]) return i[e[s]];
        for (s = n; s >= 0 && s < e.length; s -= a) if (i[e[s]]) return i[e[s]];
    }
    var Vu = {
        "sans-serif": "helvetica",
        fixed: "courier",
        monospace: "courier",
        terminal: "courier",
        cursive: "times",
        fantasy: "times",
        serif: "times"
    }, Ys = {
        caption: "times",
        icon: "times",
        menu: "times",
        "message-box": "times",
        "small-caption": "times",
        "status-bar": "times"
    };
    function Js(i) {
        return [ i.stretch, i.style, i.weight, i.family ].join(" ");
    }
    function Xs(i) {
        return i.trimLeft();
    }
    function Gu(i, e) {
        for (var n = 0; n < i.length; ) {
            if (i.charAt(n) === e) return [ i.substring(0, n), i.substring(n + 1) ];
            n += 1;
        }
        return null;
    }
    function Yu(i) {
        var e = i.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
        return e === null ? null : [ e[0], i.substring(e[0].length) ];
    }
    var Na, Ks, $s, Co = [ "times" ];
    (function(i) {
        var e, n, a, s, o, l, h, f, m, y = function(L) {
            return L = L || {}, this.isStrokeTransparent = L.isStrokeTransparent || !1, 
            this.strokeOpacity = L.strokeOpacity || 1, this.strokeStyle = L.strokeStyle || "#000000", 
            this.fillStyle = L.fillStyle || "#000000", this.isFillTransparent = L.isFillTransparent || !1, 
            this.fillOpacity = L.fillOpacity || 1, this.font = L.font || "10px sans-serif", 
            this.textBaseline = L.textBaseline || "alphabetic", this.textAlign = L.textAlign || "left", 
            this.lineWidth = L.lineWidth || 1, this.lineJoin = L.lineJoin || "miter", 
            this.lineCap = L.lineCap || "butt", this.path = L.path || [], this.transform = L.transform !== void 0 ? L.transform.clone() : new f(), 
            this.globalCompositeOperation = L.globalCompositeOperation || "normal", 
            this.globalAlpha = L.globalAlpha || 1, this.clip_path = L.clip_path || [], 
            this.currentPoint = L.currentPoint || new l(), this.miterLimit = L.miterLimit || 10, 
            this.lastPoint = L.lastPoint || new l(), this.lineDashOffset = L.lineDashOffset || 0, 
            this.lineDash = L.lineDash || [], this.margin = L.margin || [ 0, 0, 0, 0 ], 
            this.prevPageLastElemOffset = L.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof L.ignoreClearRect != "boolean" || L.ignoreClearRect, 
            this;
        };
        i.events.push([ "initialized", function() {
            this.context2d = new b(this), e = this.internal.f2, n = this.internal.getCoordinateString, 
            a = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, 
            o = this.internal.getVerticalCoordinate, l = this.internal.Point, h = this.internal.Rectangle, 
            f = this.internal.Matrix, m = new y();
        } ]);
        var b = function(L) {
            Object.defineProperty(this, "canvas", {
                get: function() {
                    return {
                        parentNode: !1,
                        style: !1
                    };
                }
            });
            var j = L;
            Object.defineProperty(this, "pdf", {
                get: function() {
                    return j;
                }
            });
            var q = !1;
            Object.defineProperty(this, "pageWrapXEnabled", {
                get: function() {
                    return q;
                },
                set: function(F) {
                    q = !!F;
                }
            });
            var W = !1;
            Object.defineProperty(this, "pageWrapYEnabled", {
                get: function() {
                    return W;
                },
                set: function(F) {
                    W = !!F;
                }
            });
            var G = 0;
            Object.defineProperty(this, "posX", {
                get: function() {
                    return G;
                },
                set: function(F) {
                    isNaN(F) || (G = F);
                }
            });
            var tt = 0;
            Object.defineProperty(this, "posY", {
                get: function() {
                    return tt;
                },
                set: function(F) {
                    isNaN(F) || (tt = F);
                }
            }), Object.defineProperty(this, "margin", {
                get: function() {
                    return m.margin;
                },
                set: function(F) {
                    var At;
                    typeof F == "number" ? At = [ F, F, F, F ] : ((At = new Array(4))[0] = F[0], 
                    At[1] = F.length >= 2 ? F[1] : At[0], At[2] = F.length >= 3 ? F[2] : At[0], 
                    At[3] = F.length >= 4 ? F[3] : At[1]), m.margin = At;
                }
            });
            var et = !1;
            Object.defineProperty(this, "autoPaging", {
                get: function() {
                    return et;
                },
                set: function(F) {
                    et = F;
                }
            });
            var nt = 0;
            Object.defineProperty(this, "lastBreak", {
                get: function() {
                    return nt;
                },
                set: function(F) {
                    nt = F;
                }
            });
            var wt = [];
            Object.defineProperty(this, "pageBreaks", {
                get: function() {
                    return wt;
                },
                set: function(F) {
                    wt = F;
                }
            }), Object.defineProperty(this, "ctx", {
                get: function() {
                    return m;
                },
                set: function(F) {
                    F instanceof y && (m = F);
                }
            }), Object.defineProperty(this, "path", {
                get: function() {
                    return m.path;
                },
                set: function(F) {
                    m.path = F;
                }
            });
            var Nt = [];
            Object.defineProperty(this, "ctxStack", {
                get: function() {
                    return Nt;
                },
                set: function(F) {
                    Nt = F;
                }
            }), Object.defineProperty(this, "fillStyle", {
                get: function() {
                    return this.ctx.fillStyle;
                },
                set: function(F) {
                    var At;
                    At = k(F), this.ctx.fillStyle = At.style, this.ctx.isFillTransparent = At.a === 0, 
                    this.ctx.fillOpacity = At.a, this.pdf.setFillColor(At.r, At.g, At.b, {
                        a: At.a
                    }), this.pdf.setTextColor(At.r, At.g, At.b, {
                        a: At.a
                    });
                }
            }), Object.defineProperty(this, "strokeStyle", {
                get: function() {
                    return this.ctx.strokeStyle;
                },
                set: function(F) {
                    var At = k(F);
                    this.ctx.strokeStyle = At.style, this.ctx.isStrokeTransparent = At.a === 0, 
                    this.ctx.strokeOpacity = At.a, At.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (At.a, 
                    this.pdf.setDrawColor(At.r, At.g, At.b));
                }
            }), Object.defineProperty(this, "lineCap", {
                get: function() {
                    return this.ctx.lineCap;
                },
                set: function(F) {
                    [ "butt", "round", "square" ].indexOf(F) !== -1 && (this.ctx.lineCap = F, 
                    this.pdf.setLineCap(F));
                }
            }), Object.defineProperty(this, "lineWidth", {
                get: function() {
                    return this.ctx.lineWidth;
                },
                set: function(F) {
                    isNaN(F) || (this.ctx.lineWidth = F, this.pdf.setLineWidth(F));
                }
            }), Object.defineProperty(this, "lineJoin", {
                get: function() {
                    return this.ctx.lineJoin;
                },
                set: function(F) {
                    [ "bevel", "round", "miter" ].indexOf(F) !== -1 && (this.ctx.lineJoin = F, 
                    this.pdf.setLineJoin(F));
                }
            }), Object.defineProperty(this, "miterLimit", {
                get: function() {
                    return this.ctx.miterLimit;
                },
                set: function(F) {
                    isNaN(F) || (this.ctx.miterLimit = F, this.pdf.setMiterLimit(F));
                }
            }), Object.defineProperty(this, "textBaseline", {
                get: function() {
                    return this.ctx.textBaseline;
                },
                set: function(F) {
                    this.ctx.textBaseline = F;
                }
            }), Object.defineProperty(this, "textAlign", {
                get: function() {
                    return this.ctx.textAlign;
                },
                set: function(F) {
                    [ "right", "end", "center", "left", "start" ].indexOf(F) !== -1 && (this.ctx.textAlign = F);
                }
            });
            var Ft = null;
            function kt(F, At) {
                if (Ft === null) {
                    var Vt = function(Bt) {
                        var mt = [];
                        return Object.keys(Bt).forEach(function(St) {
                            Bt[St].forEach(function(Mt) {
                                var _t = null;
                                switch (Mt) {
                                  case "bold":
                                    _t = {
                                        family: St,
                                        weight: "bold"
                                    };
                                    break;

                                  case "italic":
                                    _t = {
                                        family: St,
                                        style: "italic"
                                    };
                                    break;

                                  case "bolditalic":
                                    _t = {
                                        family: St,
                                        weight: "bold",
                                        style: "italic"
                                    };
                                    break;

                                  case "":
                                  case "normal":
                                    _t = {
                                        family: St
                                    };
                                }
                                _t !== null && (_t.ref = {
                                    name: St,
                                    style: Mt
                                }, mt.push(_t));
                            });
                        }), mt;
                    }(F.getFontList());
                    Ft = function(Bt) {
                        for (var mt = {}, St = 0; St < Bt.length; ++St) {
                            var Mt = Io(Bt[St]), _t = Mt.family, Tt = Mt.stretch, te = Mt.style, Xt = Mt.weight;
                            mt[_t] = mt[_t] || {}, mt[_t][Tt] = mt[_t][Tt] || {}, 
                            mt[_t][Tt][te] = mt[_t][Tt][te] || {}, mt[_t][Tt][te][Xt] = Mt;
                        }
                        return mt;
                    }(Vt.concat(At));
                }
                return Ft;
            }
            var zt = null;
            Object.defineProperty(this, "fontFaces", {
                get: function() {
                    return zt;
                },
                set: function(F) {
                    Ft = null, zt = F;
                }
            }), Object.defineProperty(this, "font", {
                get: function() {
                    return this.ctx.font;
                },
                set: function(F) {
                    var At;
                    if (this.ctx.font = F, (At = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(F)) !== null) {
                        var Vt = At[1], Bt = (At[2], At[3]), mt = At[4], St = (At[5], 
                        At[6]), Mt = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(mt)[2];
                        mt = Math.floor(Mt === "px" ? parseFloat(mt) * this.pdf.internal.scaleFactor : Mt === "em" ? parseFloat(mt) * this.pdf.getFontSize() : parseFloat(mt) * this.pdf.internal.scaleFactor), 
                        this.pdf.setFontSize(mt);
                        var _t = function(qt) {
                            var Zt, Rt, Ue = [], ae = qt.trim();
                            if (ae === "") return Co;
                            if (ae in Ys) return [ Ys[ae] ];
                            for (;ae !== ""; ) {
                                switch (Rt = null, Zt = (ae = Xs(ae)).charAt(0)) {
                                  case '"':
                                  case "'":
                                    Rt = Gu(ae.substring(1), Zt);
                                    break;

                                  default:
                                    Rt = Yu(ae);
                                }
                                if (Rt === null || (Ue.push(Rt[0]), (ae = Xs(Rt[1])) !== "" && ae.charAt(0) !== ",")) return Co;
                                ae = ae.replace(/^,/, "");
                            }
                            return Ue;
                        }(St);
                        if (this.fontFaces) {
                            var Tt = function(qt, Zt, Rt) {
                                for (var Ue = (Rt = Rt || {}).defaultFontFamily || "times", ae = Object.assign({}, Vu, Rt.genericFontFamilies || {}), ee = null, ue = null, fn = 0; fn < Zt.length; ++fn) if (ae[(ee = Io(Zt[fn])).family] && (ee.family = ae[ee.family]), 
                                qt.hasOwnProperty(ee.family)) {
                                    ue = qt[ee.family];
                                    break;
                                }
                                if (!(ue = ue || qt[Ue])) throw new Error("Could not find a font-family for the rule '" + Js(ee) + "' and default family '" + Ue + "'.");
                                if (ue = function(Gt, me) {
                                    if (me[Gt]) return me[Gt];
                                    var ve = Fo[Gt], Be = ve <= Fo.normal ? -1 : 1, dn = Gs(me, Ws, ve, Be);
                                    if (!dn) throw new Error("Could not find a matching font-stretch value for " + Gt);
                                    return dn;
                                }(ee.stretch, ue), ue = function(Gt, me) {
                                    if (me[Gt]) return me[Gt];
                                    for (var ve = Hs[Gt], Be = 0; Be < ve.length; ++Be) if (me[ve[Be]]) return me[ve[Be]];
                                    throw new Error("Could not find a matching font-style for " + Gt);
                                }(ee.style, ue), !(ue = function(Gt, me) {
                                    if (me[Gt]) return me[Gt];
                                    if (Gt === 400 && me[500]) return me[500];
                                    if (Gt === 500 && me[400]) return me[400];
                                    var ve = Wu[Gt], Be = Gs(me, Vs, ve, Gt < 400 ? -1 : 1);
                                    if (!Be) throw new Error("Could not find a matching font-weight for value " + Gt);
                                    return Be;
                                }(ee.weight, ue))) throw new Error("Failed to resolve a font for the rule '" + Js(ee) + "'.");
                                return ue;
                            }(kt(this.pdf, this.fontFaces), _t.map(function(qt) {
                                return {
                                    family: qt,
                                    stretch: "normal",
                                    weight: Bt,
                                    style: Vt
                                };
                            }));
                            this.pdf.setFont(Tt.ref.name, Tt.ref.style);
                        } else {
                            var te = "";
                            (Bt === "bold" || parseInt(Bt, 10) >= 700 || Vt === "bold") && (te = "bold"), 
                            Vt === "italic" && (te += "italic"), te.length === 0 && (te = "normal");
                            for (var Xt = "", oe = {
                                arial: "Helvetica",
                                Arial: "Helvetica",
                                verdana: "Helvetica",
                                Verdana: "Helvetica",
                                helvetica: "Helvetica",
                                Helvetica: "Helvetica",
                                "sans-serif": "Helvetica",
                                fixed: "Courier",
                                monospace: "Courier",
                                terminal: "Courier",
                                cursive: "Times",
                                fantasy: "Times",
                                serif: "Times"
                            }, se = 0; se < _t.length; se++) {
                                if (this.pdf.internal.getFont(_t[se], te, {
                                    noFallback: !0,
                                    disableWarning: !0
                                }) !== void 0) {
                                    Xt = _t[se];
                                    break;
                                }
                                if (te === "bolditalic" && this.pdf.internal.getFont(_t[se], "bold", {
                                    noFallback: !0,
                                    disableWarning: !0
                                }) !== void 0) Xt = _t[se], te = "bold"; else if (this.pdf.internal.getFont(_t[se], "normal", {
                                    noFallback: !0,
                                    disableWarning: !0
                                }) !== void 0) {
                                    Xt = _t[se], te = "normal";
                                    break;
                                }
                            }
                            if (Xt === "") {
                                for (var ne = 0; ne < _t.length; ne++) if (oe[_t[ne]]) {
                                    Xt = oe[_t[ne]];
                                    break;
                                }
                            }
                            Xt = Xt === "" ? "Times" : Xt, this.pdf.setFont(Xt, te);
                        }
                    }
                }
            }), Object.defineProperty(this, "globalCompositeOperation", {
                get: function() {
                    return this.ctx.globalCompositeOperation;
                },
                set: function(F) {
                    this.ctx.globalCompositeOperation = F;
                }
            }), Object.defineProperty(this, "globalAlpha", {
                get: function() {
                    return this.ctx.globalAlpha;
                },
                set: function(F) {
                    this.ctx.globalAlpha = F;
                }
            }), Object.defineProperty(this, "lineDashOffset", {
                get: function() {
                    return this.ctx.lineDashOffset;
                },
                set: function(F) {
                    this.ctx.lineDashOffset = F, Ct.call(this);
                }
            }), Object.defineProperty(this, "lineDash", {
                get: function() {
                    return this.ctx.lineDash;
                },
                set: function(F) {
                    this.ctx.lineDash = F, Ct.call(this);
                }
            }), Object.defineProperty(this, "ignoreClearRect", {
                get: function() {
                    return this.ctx.ignoreClearRect;
                },
                set: function(F) {
                    this.ctx.ignoreClearRect = !!F;
                }
            });
        };
        b.prototype.setLineDash = function(L) {
            this.lineDash = L;
        }, b.prototype.getLineDash = function() {
            return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
        }, b.prototype.fill = function() {
            Z.call(this, "fill", !1);
        }, b.prototype.stroke = function() {
            Z.call(this, "stroke", !1);
        }, b.prototype.beginPath = function() {
            this.path = [ {
                type: "begin"
            } ];
        }, b.prototype.moveTo = function(L, j) {
            if (isNaN(L) || isNaN(j)) throw ye.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
            var q = this.ctx.transform.applyToPoint(new l(L, j));
            this.path.push({
                type: "mt",
                x: q.x,
                y: q.y
            }), this.ctx.lastPoint = new l(L, j);
        }, b.prototype.closePath = function() {
            var L = new l(0, 0), j = 0;
            for (j = this.path.length - 1; j !== -1; j--) if (this.path[j].type === "begin" && fe(this.path[j + 1]) === "object" && typeof this.path[j + 1].x == "number") {
                L = new l(this.path[j + 1].x, this.path[j + 1].y);
                break;
            }
            this.path.push({
                type: "close"
            }), this.ctx.lastPoint = new l(L.x, L.y);
        }, b.prototype.lineTo = function(L, j) {
            if (isNaN(L) || isNaN(j)) throw ye.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
            var q = this.ctx.transform.applyToPoint(new l(L, j));
            this.path.push({
                type: "lt",
                x: q.x,
                y: q.y
            }), this.ctx.lastPoint = new l(q.x, q.y);
        }, b.prototype.clip = function() {
            this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), Z.call(this, null, !0);
        }, b.prototype.quadraticCurveTo = function(L, j, q, W) {
            if (isNaN(q) || isNaN(W) || isNaN(L) || isNaN(j)) throw ye.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
            var G = this.ctx.transform.applyToPoint(new l(q, W)), tt = this.ctx.transform.applyToPoint(new l(L, j));
            this.path.push({
                type: "qct",
                x1: tt.x,
                y1: tt.y,
                x: G.x,
                y: G.y
            }), this.ctx.lastPoint = new l(G.x, G.y);
        }, b.prototype.bezierCurveTo = function(L, j, q, W, G, tt) {
            if (isNaN(G) || isNaN(tt) || isNaN(L) || isNaN(j) || isNaN(q) || isNaN(W)) throw ye.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
            var et = this.ctx.transform.applyToPoint(new l(G, tt)), nt = this.ctx.transform.applyToPoint(new l(L, j)), wt = this.ctx.transform.applyToPoint(new l(q, W));
            this.path.push({
                type: "bct",
                x1: nt.x,
                y1: nt.y,
                x2: wt.x,
                y2: wt.y,
                x: et.x,
                y: et.y
            }), this.ctx.lastPoint = new l(et.x, et.y);
        }, b.prototype.arc = function(L, j, q, W, G, tt) {
            if (isNaN(L) || isNaN(j) || isNaN(q) || isNaN(W) || isNaN(G)) throw ye.error("jsPDF.context2d.arc: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.arc");
            if (tt = !!tt, !this.ctx.transform.isIdentity) {
                var et = this.ctx.transform.applyToPoint(new l(L, j));
                L = et.x, j = et.y;
                var nt = this.ctx.transform.applyToPoint(new l(0, q)), wt = this.ctx.transform.applyToPoint(new l(0, 0));
                q = Math.sqrt(Math.pow(nt.x - wt.x, 2) + Math.pow(nt.y - wt.y, 2));
            }
            Math.abs(G - W) >= 2 * Math.PI && (W = 0, G = 2 * Math.PI), this.path.push({
                type: "arc",
                x: L,
                y: j,
                radius: q,
                startAngle: W,
                endAngle: G,
                counterclockwise: tt
            });
        }, b.prototype.arcTo = function(L, j, q, W, G) {
            throw new Error("arcTo not implemented.");
        }, b.prototype.rect = function(L, j, q, W) {
            if (isNaN(L) || isNaN(j) || isNaN(q) || isNaN(W)) throw ye.error("jsPDF.context2d.rect: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.rect");
            this.moveTo(L, j), this.lineTo(L + q, j), this.lineTo(L + q, j + W), 
            this.lineTo(L, j + W), this.lineTo(L, j), this.lineTo(L + q, j), this.lineTo(L, j);
        }, b.prototype.fillRect = function(L, j, q, W) {
            if (isNaN(L) || isNaN(j) || isNaN(q) || isNaN(W)) throw ye.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
            if (!p.call(this)) {
                var G = {};
                this.lineCap !== "butt" && (G.lineCap = this.lineCap, this.lineCap = "butt"), 
                this.lineJoin !== "miter" && (G.lineJoin = this.lineJoin, this.lineJoin = "miter"), 
                this.beginPath(), this.rect(L, j, q, W), this.fill(), G.hasOwnProperty("lineCap") && (this.lineCap = G.lineCap), 
                G.hasOwnProperty("lineJoin") && (this.lineJoin = G.lineJoin);
            }
        }, b.prototype.strokeRect = function(L, j, q, W) {
            if (isNaN(L) || isNaN(j) || isNaN(q) || isNaN(W)) throw ye.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
            M.call(this) || (this.beginPath(), this.rect(L, j, q, W), this.stroke());
        }, b.prototype.clearRect = function(L, j, q, W) {
            if (isNaN(L) || isNaN(j) || isNaN(q) || isNaN(W)) throw ye.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
            this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(L, j, q, W));
        }, b.prototype.save = function(L) {
            L = typeof L != "boolean" || L;
            for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), 
            this.pdf.internal.out("q");
            if (this.pdf.setPage(j), L) {
                this.ctx.fontSize = this.pdf.internal.getFontSize();
                var W = new y(this.ctx);
                this.ctxStack.push(this.ctx), this.ctx = W;
            }
        }, b.prototype.restore = function(L) {
            L = typeof L != "boolean" || L;
            for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), 
            this.pdf.internal.out("Q");
            this.pdf.setPage(j), L && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), 
            this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, 
            this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, 
            this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, 
            this.lineDashOffset = this.ctx.lineDashOffset);
        }, b.prototype.toDataURL = function() {
            throw new Error("toDataUrl not implemented.");
        };
        var k = function(L) {
            var j, q, W, G;
            if (L.isCanvasGradient === !0 && (L = L.getColor()), !L) return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                style: L
            };
            if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(L)) j = 0, 
            q = 0, W = 0, G = 0; else {
                var tt = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(L);
                if (tt !== null) j = parseInt(tt[1]), q = parseInt(tt[2]), W = parseInt(tt[3]), 
                G = 1; else if ((tt = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(L)) !== null) j = parseInt(tt[1]), 
                q = parseInt(tt[2]), W = parseInt(tt[3]), G = parseFloat(tt[4]); else {
                    if (G = 1, typeof L == "string" && L.charAt(0) !== "#") {
                        var et = new js(L);
                        L = et.ok ? et.toHex() : "#000000";
                    }
                    L.length === 4 ? (j = L.substring(1, 2), j += j, q = L.substring(2, 3), 
                    q += q, W = L.substring(3, 4), W += W) : (j = L.substring(1, 3), 
                    q = L.substring(3, 5), W = L.substring(5, 7)), j = parseInt(j, 16), 
                    q = parseInt(q, 16), W = parseInt(W, 16);
                }
            }
            return {
                r: j,
                g: q,
                b: W,
                a: G,
                style: L
            };
        }, p = function() {
            return this.ctx.isFillTransparent || this.globalAlpha == 0;
        }, M = function() {
            return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
        };
        b.prototype.fillText = function(L, j, q, W) {
            if (isNaN(j) || isNaN(q) || typeof L != "string") throw ye.error("jsPDF.context2d.fillText: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.fillText");
            if (W = isNaN(W) ? void 0 : W, !p.call(this)) {
                var G = Q(this.ctx.transform.rotation), tt = this.ctx.transform.scaleX;
                I.call(this, {
                    text: L,
                    x: j,
                    y: q,
                    scale: tt,
                    angle: G,
                    align: this.textAlign,
                    maxWidth: W
                });
            }
        }, b.prototype.strokeText = function(L, j, q, W) {
            if (isNaN(j) || isNaN(q) || typeof L != "string") throw ye.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
            if (!M.call(this)) {
                W = isNaN(W) ? void 0 : W;
                var G = Q(this.ctx.transform.rotation), tt = this.ctx.transform.scaleX;
                I.call(this, {
                    text: L,
                    x: j,
                    y: q,
                    scale: tt,
                    renderingMode: "stroke",
                    angle: G,
                    align: this.textAlign,
                    maxWidth: W
                });
            }
        }, b.prototype.measureText = function(L) {
            if (typeof L != "string") throw ye.error("jsPDF.context2d.measureText: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.measureText");
            var j = this.pdf, q = this.pdf.internal.scaleFactor, W = j.internal.getFontSize(), G = j.getStringUnitWidth(L) * W / j.internal.scaleFactor;
            return new function(tt) {
                var et = (tt = tt || {}).width || 0;
                return Object.defineProperty(this, "width", {
                    get: function() {
                        return et;
                    }
                }), this;
            }({
                width: G *= Math.round(96 * q / 72 * 1e4) / 1e4
            });
        }, b.prototype.scale = function(L, j) {
            if (isNaN(L) || isNaN(j)) throw ye.error("jsPDF.context2d.scale: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.scale");
            var q = new f(L, 0, 0, j, 0, 0);
            this.ctx.transform = this.ctx.transform.multiply(q);
        }, b.prototype.rotate = function(L) {
            if (isNaN(L)) throw ye.error("jsPDF.context2d.rotate: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.rotate");
            var j = new f(Math.cos(L), Math.sin(L), -Math.sin(L), Math.cos(L), 0, 0);
            this.ctx.transform = this.ctx.transform.multiply(j);
        }, b.prototype.translate = function(L, j) {
            if (isNaN(L) || isNaN(j)) throw ye.error("jsPDF.context2d.translate: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.translate");
            var q = new f(1, 0, 0, 1, L, j);
            this.ctx.transform = this.ctx.transform.multiply(q);
        }, b.prototype.transform = function(L, j, q, W, G, tt) {
            if (isNaN(L) || isNaN(j) || isNaN(q) || isNaN(W) || isNaN(G) || isNaN(tt)) throw ye.error("jsPDF.context2d.transform: Invalid arguments", arguments), 
            new Error("Invalid arguments passed to jsPDF.context2d.transform");
            var et = new f(L, j, q, W, G, tt);
            this.ctx.transform = this.ctx.transform.multiply(et);
        }, b.prototype.setTransform = function(L, j, q, W, G, tt) {
            L = isNaN(L) ? 1 : L, j = isNaN(j) ? 0 : j, q = isNaN(q) ? 0 : q, W = isNaN(W) ? 1 : W, 
            G = isNaN(G) ? 0 : G, tt = isNaN(tt) ? 0 : tt, this.ctx.transform = new f(L, j, q, W, G, tt);
        };
        var S = function() {
            return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
        };
        b.prototype.drawImage = function(L, j, q, W, G, tt, et, nt, wt) {
            var Nt = this.pdf.getImageProperties(L), Ft = 1, kt = 1, zt = 1, F = 1;
            W !== void 0 && nt !== void 0 && (zt = nt / W, F = wt / G, Ft = Nt.width / W * nt / W, 
            kt = Nt.height / G * wt / G), tt === void 0 && (tt = j, et = q, j = 0, 
            q = 0), W !== void 0 && nt === void 0 && (nt = W, wt = G), W === void 0 && nt === void 0 && (nt = Nt.width, 
            wt = Nt.height);
            for (var At, Vt = this.ctx.transform.decompose(), Bt = Q(Vt.rotate.shx), mt = new f(), St = (mt = (mt = (mt = mt.multiply(Vt.translate)).multiply(Vt.skew)).multiply(Vt.scale)).applyToRectangle(new h(tt - j * zt, et - q * F, W * Ft, G * kt)), Mt = E.call(this, St), _t = [], Tt = 0; Tt < Mt.length; Tt += 1) _t.indexOf(Mt[Tt]) === -1 && _t.push(Mt[Tt]);
            if (X(_t), this.autoPaging) for (var te = _t[0], Xt = _t[_t.length - 1], oe = te; oe < Xt + 1; oe++) {
                this.pdf.setPage(oe);
                var se = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ne = oe === 1 ? this.posY + this.margin[0] : this.margin[0], qt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Zt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Rt = oe === 1 ? 0 : qt + (oe - 2) * Zt;
                if (this.ctx.clip_path.length !== 0) {
                    var Ue = this.path;
                    At = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = U(At, this.posX + this.margin[3], -Rt + ne + this.ctx.prevPageLastElemOffset), 
                    ot.call(this, "fill", !0), this.path = Ue;
                }
                var ae = JSON.parse(JSON.stringify(St));
                ae = U([ ae ], this.posX + this.margin[3], -Rt + ne + this.ctx.prevPageLastElemOffset)[0];
                var ee = (oe > te || oe < Xt) && S.call(this);
                ee && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], se, Zt, null).clip().discardPath()), 
                this.pdf.addImage(L, "JPEG", ae.x, ae.y, ae.w, ae.h, null, null, Bt), 
                ee && this.pdf.restoreGraphicsState();
            } else this.pdf.addImage(L, "JPEG", St.x, St.y, St.w, St.h, null, null, Bt);
        };
        var E = function(L, j, q) {
            var W = [];
            j = j || this.pdf.internal.pageSize.width, q = q || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
            var G = this.posY + this.ctx.prevPageLastElemOffset;
            switch (L.type) {
              default:
              case "mt":
              case "lt":
                W.push(Math.floor((L.y + G) / q) + 1);
                break;

              case "arc":
                W.push(Math.floor((L.y + G - L.radius) / q) + 1), W.push(Math.floor((L.y + G + L.radius) / q) + 1);
                break;

              case "qct":
                var tt = st(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x, L.y);
                W.push(Math.floor((tt.y + G) / q) + 1), W.push(Math.floor((tt.y + tt.h + G) / q) + 1);
                break;

              case "bct":
                var et = ct(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x2, L.y2, L.x, L.y);
                W.push(Math.floor((et.y + G) / q) + 1), W.push(Math.floor((et.y + et.h + G) / q) + 1);
                break;

              case "rect":
                W.push(Math.floor((L.y + G) / q) + 1), W.push(Math.floor((L.y + L.h + G) / q) + 1);
            }
            for (var nt = 0; nt < W.length; nt += 1) for (;this.pdf.internal.getNumberOfPages() < W[nt]; ) A.call(this);
            return W;
        }, A = function() {
            var L = this.fillStyle, j = this.strokeStyle, q = this.font, W = this.lineCap, G = this.lineWidth, tt = this.lineJoin;
            this.pdf.addPage(), this.fillStyle = L, this.strokeStyle = j, this.font = q, 
            this.lineCap = W, this.lineWidth = G, this.lineJoin = tt;
        }, U = function(L, j, q) {
            for (var W = 0; W < L.length; W++) switch (L[W].type) {
              case "bct":
                L[W].x2 += j, L[W].y2 += q;

              case "qct":
                L[W].x1 += j, L[W].y1 += q;

              default:
                L[W].x += j, L[W].y += q;
            }
            return L;
        }, X = function(L) {
            return L.sort(function(j, q) {
                return j - q;
            });
        }, Z = function(L, j) {
            for (var q, W, G = this.fillStyle, tt = this.strokeStyle, et = this.lineCap, nt = this.lineWidth, wt = Math.abs(nt * this.ctx.transform.scaleX), Nt = this.lineJoin, Ft = JSON.parse(JSON.stringify(this.path)), kt = JSON.parse(JSON.stringify(this.path)), zt = [], F = 0; F < kt.length; F++) if (kt[F].x !== void 0) for (var At = E.call(this, kt[F]), Vt = 0; Vt < At.length; Vt += 1) zt.indexOf(At[Vt]) === -1 && zt.push(At[Vt]);
            for (var Bt = 0; Bt < zt.length; Bt++) for (;this.pdf.internal.getNumberOfPages() < zt[Bt]; ) A.call(this);
            if (X(zt), this.autoPaging) for (var mt = zt[0], St = zt[zt.length - 1], Mt = mt; Mt < St + 1; Mt++) {
                this.pdf.setPage(Mt), this.fillStyle = G, this.strokeStyle = tt, 
                this.lineCap = et, this.lineWidth = wt, this.lineJoin = Nt;
                var _t = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Tt = Mt === 1 ? this.posY + this.margin[0] : this.margin[0], te = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Xt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], oe = Mt === 1 ? 0 : te + (Mt - 2) * Xt;
                if (this.ctx.clip_path.length !== 0) {
                    var se = this.path;
                    q = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = U(q, this.posX + this.margin[3], -oe + Tt + this.ctx.prevPageLastElemOffset), 
                    ot.call(this, L, !0), this.path = se;
                }
                if (W = JSON.parse(JSON.stringify(Ft)), this.path = U(W, this.posX + this.margin[3], -oe + Tt + this.ctx.prevPageLastElemOffset), 
                j === !1 || Mt === 0) {
                    var ne = (Mt > mt || Mt < St) && S.call(this);
                    ne && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], _t, Xt, null).clip().discardPath()), 
                    ot.call(this, L, j), ne && this.pdf.restoreGraphicsState();
                }
                this.lineWidth = nt;
            } else this.lineWidth = wt, ot.call(this, L, j), this.lineWidth = nt;
            this.path = Ft;
        }, ot = function(L, j) {
            if ((L !== "stroke" || j || !M.call(this)) && (L === "stroke" || j || !p.call(this))) {
                for (var q, W, G = [], tt = this.path, et = 0; et < tt.length; et++) {
                    var nt = tt[et];
                    switch (nt.type) {
                      case "begin":
                        G.push({
                            begin: !0
                        });
                        break;

                      case "close":
                        G.push({
                            close: !0
                        });
                        break;

                      case "mt":
                        G.push({
                            start: nt,
                            deltas: [],
                            abs: []
                        });
                        break;

                      case "lt":
                        var wt = G.length;
                        if (tt[et - 1] && !isNaN(tt[et - 1].x) && (q = [ nt.x - tt[et - 1].x, nt.y - tt[et - 1].y ], 
                        wt > 0)) {
                            for (;wt >= 0; wt--) if (G[wt - 1].close !== !0 && G[wt - 1].begin !== !0) {
                                G[wt - 1].deltas.push(q), G[wt - 1].abs.push(nt);
                                break;
                            }
                        }
                        break;

                      case "bct":
                        q = [ nt.x1 - tt[et - 1].x, nt.y1 - tt[et - 1].y, nt.x2 - tt[et - 1].x, nt.y2 - tt[et - 1].y, nt.x - tt[et - 1].x, nt.y - tt[et - 1].y ], 
                        G[G.length - 1].deltas.push(q);
                        break;

                      case "qct":
                        var Nt = tt[et - 1].x + 2 / 3 * (nt.x1 - tt[et - 1].x), Ft = tt[et - 1].y + 2 / 3 * (nt.y1 - tt[et - 1].y), kt = nt.x + 2 / 3 * (nt.x1 - nt.x), zt = nt.y + 2 / 3 * (nt.y1 - nt.y), F = nt.x, At = nt.y;
                        q = [ Nt - tt[et - 1].x, Ft - tt[et - 1].y, kt - tt[et - 1].x, zt - tt[et - 1].y, F - tt[et - 1].x, At - tt[et - 1].y ], 
                        G[G.length - 1].deltas.push(q);
                        break;

                      case "arc":
                        G.push({
                            deltas: [],
                            abs: [],
                            arc: !0
                        }), Array.isArray(G[G.length - 1].abs) && G[G.length - 1].abs.push(nt);
                    }
                }
                W = j ? null : L === "stroke" ? "stroke" : "fill";
                for (var Vt = !1, Bt = 0; Bt < G.length; Bt++) if (G[Bt].arc) for (var mt = G[Bt].abs, St = 0; St < mt.length; St++) {
                    var Mt = mt[St];
                    Mt.type === "arc" ? O.call(this, Mt.x, Mt.y, Mt.radius, Mt.startAngle, Mt.endAngle, Mt.counterclockwise, void 0, j, !Vt) : R.call(this, Mt.x, Mt.y), 
                    Vt = !0;
                } else if (G[Bt].close === !0) this.pdf.internal.out("h"), Vt = !1; else if (G[Bt].begin !== !0) {
                    var _t = G[Bt].start.x, Tt = G[Bt].start.y;
                    T.call(this, G[Bt].deltas, _t, Tt), Vt = !0;
                }
                W && lt.call(this, W), j && vt.call(this);
            }
        }, yt = function(L) {
            var j = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, q = j * (this.pdf.internal.getLineHeightFactor() - 1);
            switch (this.ctx.textBaseline) {
              case "bottom":
                return L - q;

              case "top":
                return L + j - q;

              case "hanging":
                return L + j - 2 * q;

              case "middle":
                return L + j / 2 - q;

              default:
                return L;
            }
        }, Lt = function(L) {
            return L + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
        };
        b.prototype.createLinearGradient = function() {
            var L = function() {};
            return L.colorStops = [], L.addColorStop = function(j, q) {
                this.colorStops.push([ j, q ]);
            }, L.getColor = function() {
                return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
            }, L.isCanvasGradient = !0, L;
        }, b.prototype.createPattern = function() {
            return this.createLinearGradient();
        }, b.prototype.createRadialGradient = function() {
            return this.createLinearGradient();
        };
        var O = function(L, j, q, W, G, tt, et, nt, wt) {
            for (var Nt = rt.call(this, q, W, G, tt), Ft = 0; Ft < Nt.length; Ft++) {
                var kt = Nt[Ft];
                Ft === 0 && (wt ? P.call(this, kt.x1 + L, kt.y1 + j) : R.call(this, kt.x1 + L, kt.y1 + j)), 
                at.call(this, L, j, kt.x2, kt.y2, kt.x3, kt.y3, kt.x4, kt.y4);
            }
            nt ? vt.call(this) : lt.call(this, et);
        }, lt = function(L) {
            switch (L) {
              case "stroke":
                this.pdf.internal.out("S");
                break;

              case "fill":
                this.pdf.internal.out("f");
            }
        }, vt = function() {
            this.pdf.clip(), this.pdf.discardPath();
        }, P = function(L, j) {
            this.pdf.internal.out(n(L) + " " + a(j) + " m");
        }, I = function(L) {
            var j;
            switch (L.align) {
              case "right":
              case "end":
                j = "right";
                break;

              case "center":
                j = "center";
                break;

              default:
                j = "left";
            }
            var q = this.pdf.getTextDimensions(L.text), W = yt.call(this, L.y), G = Lt.call(this, W) - q.h, tt = this.ctx.transform.applyToPoint(new l(L.x, W)), et = this.ctx.transform.decompose(), nt = new f();
            nt = (nt = (nt = nt.multiply(et.translate)).multiply(et.skew)).multiply(et.scale);
            for (var wt, Nt, Ft, kt = this.ctx.transform.applyToRectangle(new h(L.x, W, q.w, q.h)), zt = nt.applyToRectangle(new h(L.x, G, q.w, q.h)), F = E.call(this, zt), At = [], Vt = 0; Vt < F.length; Vt += 1) At.indexOf(F[Vt]) === -1 && At.push(F[Vt]);
            if (X(At), this.autoPaging) for (var Bt = At[0], mt = At[At.length - 1], St = Bt; St < mt + 1; St++) {
                this.pdf.setPage(St);
                var Mt = St === 1 ? this.posY + this.margin[0] : this.margin[0], _t = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Tt = this.pdf.internal.pageSize.height - this.margin[2], te = Tt - this.margin[0], Xt = this.pdf.internal.pageSize.width - this.margin[1], oe = Xt - this.margin[3], se = St === 1 ? 0 : _t + (St - 2) * te;
                if (this.ctx.clip_path.length !== 0) {
                    var ne = this.path;
                    wt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = U(wt, this.posX + this.margin[3], -1 * se + Mt), 
                    ot.call(this, "fill", !0), this.path = ne;
                }
                var qt = U([ JSON.parse(JSON.stringify(zt)) ], this.posX + this.margin[3], -se + Mt + this.ctx.prevPageLastElemOffset)[0];
                L.scale >= .01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), 
                Ft = this.lineWidth, this.lineWidth = Ft * L.scale);
                var Zt = this.autoPaging !== "text";
                if (Zt || qt.y + qt.h <= Tt) {
                    if (Zt || qt.y >= Mt && qt.x <= Xt) {
                        var Rt = Zt ? L.text : this.pdf.splitTextToSize(L.text, L.maxWidth || Xt - qt.x)[0], Ue = U([ JSON.parse(JSON.stringify(kt)) ], this.posX + this.margin[3], -se + Mt + this.ctx.prevPageLastElemOffset)[0], ae = Zt && (St > Bt || St < mt) && S.call(this);
                        ae && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], oe, te, null).clip().discardPath()), 
                        this.pdf.text(Rt, Ue.x, Ue.y, {
                            angle: L.angle,
                            align: j,
                            renderingMode: L.renderingMode
                        }), ae && this.pdf.restoreGraphicsState();
                    }
                } else qt.y < Tt && (this.ctx.prevPageLastElemOffset += Tt - qt.y);
                L.scale >= .01 && (this.pdf.setFontSize(Nt), this.lineWidth = Ft);
            } else L.scale >= .01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), 
            Ft = this.lineWidth, this.lineWidth = Ft * L.scale), this.pdf.text(L.text, tt.x + this.posX, tt.y + this.posY, {
                angle: L.angle,
                align: j,
                renderingMode: L.renderingMode,
                maxWidth: L.maxWidth
            }), L.scale >= .01 && (this.pdf.setFontSize(Nt), this.lineWidth = Ft);
        }, R = function(L, j, q, W) {
            q = q || 0, W = W || 0, this.pdf.internal.out(n(L + q) + " " + a(j + W) + " l");
        }, T = function(L, j, q) {
            return this.pdf.lines(L, j, q, null, null);
        }, at = function(L, j, q, W, G, tt, et, nt) {
            this.pdf.internal.out([ e(s(q + L)), e(o(W + j)), e(s(G + L)), e(o(tt + j)), e(s(et + L)), e(o(nt + j)), "c" ].join(" "));
        }, rt = function(L, j, q, W) {
            for (var G = 2 * Math.PI, tt = Math.PI / 2; j > q; ) j -= G;
            var et = Math.abs(q - j);
            et < G && W && (et = G - et);
            for (var nt = [], wt = W ? -1 : 1, Nt = j; et > 1e-5; ) {
                var Ft = Nt + wt * Math.min(et, tt);
                nt.push(pt.call(this, L, Nt, Ft)), et -= Math.abs(Ft - Nt), Nt = Ft;
            }
            return nt;
        }, pt = function(L, j, q) {
            var W = (q - j) / 2, G = L * Math.cos(W), tt = L * Math.sin(W), et = G, nt = -tt, wt = et * et + nt * nt, Nt = wt + et * G + nt * tt, Ft = 4 / 3 * (Math.sqrt(2 * wt * Nt) - Nt) / (et * tt - nt * G), kt = et - Ft * nt, zt = nt + Ft * et, F = kt, At = -zt, Vt = W + j, Bt = Math.cos(Vt), mt = Math.sin(Vt);
            return {
                x1: L * Math.cos(j),
                y1: L * Math.sin(j),
                x2: kt * Bt - zt * mt,
                y2: kt * mt + zt * Bt,
                x3: F * Bt - At * mt,
                y3: F * mt + At * Bt,
                x4: L * Math.cos(q),
                y4: L * Math.sin(q)
            };
        }, Q = function(L) {
            return 180 * L / Math.PI;
        }, st = function(L, j, q, W, G, tt) {
            var et = L + .5 * (q - L), nt = j + .5 * (W - j), wt = G + .5 * (q - G), Nt = tt + .5 * (W - tt), Ft = Math.min(L, G, et, wt), kt = Math.max(L, G, et, wt), zt = Math.min(j, tt, nt, Nt), F = Math.max(j, tt, nt, Nt);
            return new h(Ft, zt, kt - Ft, F - zt);
        }, ct = function(L, j, q, W, G, tt, et, nt) {
            var wt, Nt, Ft, kt, zt, F, At, Vt, Bt, mt, St, Mt, _t, Tt, te = q - L, Xt = W - j, oe = G - q, se = tt - W, ne = et - G, qt = nt - tt;
            for (Nt = 0; Nt < 41; Nt++) Bt = (At = (Ft = L + (wt = Nt / 40) * te) + wt * ((zt = q + wt * oe) - Ft)) + wt * (zt + wt * (G + wt * ne - zt) - At), 
            mt = (Vt = (kt = j + wt * Xt) + wt * ((F = W + wt * se) - kt)) + wt * (F + wt * (tt + wt * qt - F) - Vt), 
            Nt == 0 ? (St = Bt, Mt = mt, _t = Bt, Tt = mt) : (St = Math.min(St, Bt), 
            Mt = Math.min(Mt, mt), _t = Math.max(_t, Bt), Tt = Math.max(Tt, mt));
            return new h(Math.round(St), Math.round(Mt), Math.round(_t - St), Math.round(Tt - Mt));
        }, Ct = function() {
            if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
                var L, j, q = (L = this.ctx.lineDash, j = this.ctx.lineDashOffset, 
                JSON.stringify({
                    lineDash: L,
                    lineDashOffset: j
                }));
                this.prevLineDash !== q && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), 
                this.prevLineDash = q);
            }
        };
    })(Wt.API), function(i) {
        var e = function(o) {
            var l, h, f, m, y, b, k, p, M, S;
            for (h = [], f = 0, m = (o += l = "\0\0\0\0".slice(o.length % 4 || 4)).length; m > f; f += 4) (y = (o.charCodeAt(f) << 24) + (o.charCodeAt(f + 1) << 16) + (o.charCodeAt(f + 2) << 8) + o.charCodeAt(f + 3)) !== 0 ? (b = (y = ((y = ((y = ((y = (y - (S = y % 85)) / 85) - (M = y % 85)) / 85) - (p = y % 85)) / 85) - (k = y % 85)) / 85) % 85, 
            h.push(b + 33, k + 33, p + 33, M + 33, S + 33)) : h.push(122);
            return function(E, A) {
                for (var U = A; U > 0; U--) E.pop();
            }(h, l.length), String.fromCharCode.apply(String, h) + "~>";
        }, n = function(o) {
            var l, h, f, m, y, b = String, k = "length", p = 255, M = "charCodeAt", S = "slice", E = "replace";
            for (o[S](-2), o = o[S](0, -2)[E](/\s/g, "")[E]("z", "!!!!!"), f = [], 
            m = 0, y = (o += l = "uuuuu"[S](o[k] % 5 || 5))[k]; y > m; m += 5) h = 52200625 * (o[M](m) - 33) + 614125 * (o[M](m + 1) - 33) + 7225 * (o[M](m + 2) - 33) + 85 * (o[M](m + 3) - 33) + (o[M](m + 4) - 33), 
            f.push(p & h >> 24, p & h >> 16, p & h >> 8, p & h);
            return function(A, U) {
                for (var X = U; X > 0; X--) A.pop();
            }(f, l[k]), b.fromCharCode.apply(b, f);
        }, a = function(o) {
            var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
            if ((o = o.replace(/\s/g, "")).indexOf(">") !== -1 && (o = o.substr(0, o.indexOf(">"))), 
            o.length % 2 && (o += "0"), l.test(o) === !1) return "";
            for (var h = "", f = 0; f < o.length; f += 2) h += String.fromCharCode("0x" + (o[f] + o[f + 1]));
            return h;
        }, s = function(o) {
            for (var l = new Uint8Array(o.length), h = o.length; h--; ) l[h] = o.charCodeAt(h);
            return (l = Is(l)).reduce(function(f, m) {
                return f + String.fromCharCode(m);
            }, "");
        };
        i.processDataByFilters = function(o, l) {
            var h = 0, f = o || "", m = [];
            for (typeof (l = l || []) == "string" && (l = [ l ]), h = 0; h < l.length; h += 1) switch (l[h]) {
              case "ASCII85Decode":
              case "/ASCII85Decode":
                f = n(f), m.push("/ASCII85Encode");
                break;

              case "ASCII85Encode":
              case "/ASCII85Encode":
                f = e(f), m.push("/ASCII85Decode");
                break;

              case "ASCIIHexDecode":
              case "/ASCIIHexDecode":
                f = a(f), m.push("/ASCIIHexEncode");
                break;

              case "ASCIIHexEncode":
              case "/ASCIIHexEncode":
                f = f.split("").map(function(y) {
                    return ("0" + y.charCodeAt().toString(16)).slice(-2);
                }).join("") + ">", m.push("/ASCIIHexDecode");
                break;

              case "FlateEncode":
              case "/FlateEncode":
                f = s(f), m.push("/FlateDecode");
                break;

              default:
                throw new Error('The filter: "' + l[h] + '" is not implemented');
            }
            return {
                data: f,
                reverseChain: m.reverse().join(" ")
            };
        };
    }(Wt.API), function(i) {
        i.loadFile = function(e, n, a) {
            return function(s, o, l) {
                o = o !== !1, l = typeof l == "function" ? l : function() {};
                var h = void 0;
                try {
                    h = function(f, m, y) {
                        var b = new XMLHttpRequest(), k = 0, p = function(M) {
                            var S = M.length, E = [], A = String.fromCharCode;
                            for (k = 0; k < S; k += 1) E.push(A(255 & M.charCodeAt(k)));
                            return E.join("");
                        };
                        if (b.open("GET", f, !m), b.overrideMimeType("text/plain; charset=x-user-defined"), 
                        m === !1 && (b.onload = function() {
                            b.status === 200 ? y(p(this.responseText)) : y(void 0);
                        }), b.send(null), m && b.status === 200) return p(b.responseText);
                    }(s, o, l);
                } catch {}
                return h;
            }(e, n, a);
        }, i.loadImageFile = i.loadFile;
    }(Wt.API), function(i) {
        function e() {
            return (Ht.html2canvas ? Promise.resolve(Ht.html2canvas) : bs(() => import("./html2canvas.esm-ad032b91.js"), [], import.meta.url)).catch(function(l) {
                return Promise.reject(new Error("Could not load html2canvas: " + l));
            }).then(function(l) {
                return l.default ? l.default : l;
            });
        }
        function n() {
            return (Ht.DOMPurify ? Promise.resolve(Ht.DOMPurify) : bs(() => import("./purify.es-049b1b73.js"), [], import.meta.url)).catch(function(l) {
                return Promise.reject(new Error("Could not load dompurify: " + l));
            }).then(function(l) {
                return l.default ? l.default : l;
            });
        }
        var a = function(l) {
            var h = fe(l);
            return h === "undefined" ? "undefined" : h === "string" || l instanceof String ? "string" : h === "number" || l instanceof Number ? "number" : h === "function" || l instanceof Function ? "function" : l && l.constructor === Array ? "array" : l && l.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
        }, s = function(l, h) {
            var f = document.createElement(l);
            for (var m in h.className && (f.className = h.className), h.innerHTML && h.dompurify && (f.innerHTML = h.dompurify.sanitize(h.innerHTML)), 
            h.style) f.style[m] = h.style[m];
            return f;
        }, o = function l(h) {
            var f = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), m = l.convert(Promise.resolve(), f);
            return (m = m.setProgress(1, l, 1, [ l ])).set(h);
        };
        (o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(l, h) {
            return l.__proto__ = h || o.prototype, l;
        }, o.template = {
            prop: {
                src: null,
                container: null,
                overlay: null,
                canvas: null,
                img: null,
                pdf: null,
                pageSize: null,
                callback: function() {}
            },
            progress: {
                val: 0,
                state: null,
                n: 0,
                stack: []
            },
            opt: {
                filename: "file.pdf",
                margin: [ 0, 0, 0, 0 ],
                enableLinks: !0,
                x: 0,
                y: 0,
                html2canvas: {},
                jsPDF: {},
                backgroundColor: "transparent"
            }
        }, o.prototype.from = function(l, h) {
            return this.then(function() {
                switch (h = h || function(f) {
                    switch (a(f)) {
                      case "string":
                        return "string";

                      case "element":
                        return f.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";

                      default:
                        return "unknown";
                    }
                }(l)) {
                  case "string":
                    return this.then(n).then(function(f) {
                        return this.set({
                            src: s("div", {
                                innerHTML: l,
                                dompurify: f
                            })
                        });
                    });

                  case "element":
                    return this.set({
                        src: l
                    });

                  case "canvas":
                    return this.set({
                        canvas: l
                    });

                  case "img":
                    return this.set({
                        img: l
                    });

                  default:
                    return this.error("Unknown source type.");
                }
            });
        }, o.prototype.to = function(l) {
            switch (l) {
              case "container":
                return this.toContainer();

              case "canvas":
                return this.toCanvas();

              case "img":
                return this.toImg();

              case "pdf":
                return this.toPdf();

              default:
                return this.error("Invalid target.");
            }
        }, o.prototype.toContainer = function() {
            return this.thenList([ function() {
                return this.prop.src || this.error("Cannot duplicate - no source HTML.");
            }, function() {
                return this.prop.pageSize || this.setPageSize();
            } ]).then(function() {
                var l = {
                    position: "relative",
                    display: "inline-block",
                    width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
                    left: 0,
                    right: 0,
                    top: 0,
                    margin: "auto",
                    backgroundColor: this.opt.backgroundColor
                }, h = function f(m, y) {
                    for (var b = m.nodeType === 3 ? document.createTextNode(m.nodeValue) : m.cloneNode(!1), k = m.firstChild; k; k = k.nextSibling) y !== !0 && k.nodeType === 1 && k.nodeName === "SCRIPT" || b.appendChild(f(k, y));
                    return m.nodeType === 1 && (m.nodeName === "CANVAS" ? (b.width = m.width, 
                    b.height = m.height, b.getContext("2d").drawImage(m, 0, 0)) : m.nodeName !== "TEXTAREA" && m.nodeName !== "SELECT" || (b.value = m.value), 
                    b.addEventListener("load", function() {
                        b.scrollTop = m.scrollTop, b.scrollLeft = m.scrollLeft;
                    }, !0)), b;
                }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                h.tagName === "BODY" && (l.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), 
                this.prop.overlay = s("div", {
                    className: "html2pdf__overlay",
                    style: {
                        position: "fixed",
                        overflow: "hidden",
                        zIndex: 1e3,
                        left: "-100000px",
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                }), this.prop.container = s("div", {
                    className: "html2pdf__container",
                    style: l
                }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(s("div", {
                    style: {
                        clear: "both",
                        border: "0 none transparent",
                        margin: 0,
                        padding: 0,
                        height: 0
                    }
                })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), 
                document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", 
                this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
            });
        }, o.prototype.toCanvas = function() {
            var l = [ function() {
                return document.body.contains(this.prop.container) || this.toContainer();
            } ];
            return this.thenList(l).then(e).then(function(h) {
                var f = Object.assign({}, this.opt.html2canvas);
                return delete f.onrendered, h(this.prop.container, f);
            }).then(function(h) {
                (this.opt.html2canvas.onrendered || function() {})(h), this.prop.canvas = h, 
                document.body.removeChild(this.prop.overlay);
            });
        }, o.prototype.toContext2d = function() {
            var l = [ function() {
                return document.body.contains(this.prop.container) || this.toContainer();
            } ];
            return this.thenList(l).then(e).then(function(h) {
                var f = this.opt.jsPDF, m = this.opt.fontFaces, y = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, b = Object.assign({
                    async: !0,
                    allowTaint: !0,
                    scale: y,
                    scrollX: this.opt.scrollX || 0,
                    scrollY: this.opt.scrollY || 0,
                    backgroundColor: "#ffffff",
                    imageTimeout: 15e3,
                    logging: !0,
                    proxy: null,
                    removeContainer: !0,
                    foreignObjectRendering: !1,
                    useCORS: !1
                }, this.opt.html2canvas);
                if (delete b.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, 
                f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, 
                f.context2d.fontFaces = m, m) for (var k = 0; k < m.length; ++k) {
                    var p = m[k], M = p.src.find(function(S) {
                        return S.format === "truetype";
                    });
                    M && f.addFont(M.url, p.ref.name, p.ref.style);
                }
                return b.windowHeight = b.windowHeight || 0, b.windowHeight = b.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : b.windowHeight, 
                f.context2d.save(!0), h(this.prop.container, b);
            }).then(function(h) {
                this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {})(h), 
                this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
            });
        }, o.prototype.toImg = function() {
            return this.thenList([ function() {
                return this.prop.canvas || this.toCanvas();
            } ]).then(function() {
                var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                this.prop.img = document.createElement("img"), this.prop.img.src = l;
            });
        }, o.prototype.toPdf = function() {
            return this.thenList([ function() {
                return this.toContext2d();
            } ]).then(function() {
                this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
            });
        }, o.prototype.output = function(l, h, f) {
            return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(l, h) : this.outputPdf(l, h);
        }, o.prototype.outputPdf = function(l, h) {
            return this.thenList([ function() {
                return this.prop.pdf || this.toPdf();
            } ]).then(function() {
                return this.prop.pdf.output(l, h);
            });
        }, o.prototype.outputImg = function(l) {
            return this.thenList([ function() {
                return this.prop.img || this.toImg();
            } ]).then(function() {
                switch (l) {
                  case void 0:
                  case "img":
                    return this.prop.img;

                  case "datauristring":
                  case "dataurlstring":
                    return this.prop.img.src;

                  case "datauri":
                  case "dataurl":
                    return document.location.href = this.prop.img.src;

                  default:
                    throw 'Image output type "' + l + '" is not supported.';
                }
            });
        }, o.prototype.save = function(l) {
            return this.thenList([ function() {
                return this.prop.pdf || this.toPdf();
            } ]).set(l ? {
                filename: l
            } : null).then(function() {
                this.prop.pdf.save(this.opt.filename);
            });
        }, o.prototype.doCallback = function() {
            return this.thenList([ function() {
                return this.prop.pdf || this.toPdf();
            } ]).then(function() {
                this.prop.callback(this.prop.pdf);
            });
        }, o.prototype.set = function(l) {
            if (a(l) !== "object") return this;
            var h = Object.keys(l || {}).map(function(f) {
                if (f in o.template.prop) return function() {
                    this.prop[f] = l[f];
                };
                switch (f) {
                  case "margin":
                    return this.setMargin.bind(this, l.margin);

                  case "jsPDF":
                    return function() {
                        return this.opt.jsPDF = l.jsPDF, this.setPageSize();
                    };

                  case "pageSize":
                    return this.setPageSize.bind(this, l.pageSize);

                  default:
                    return function() {
                        this.opt[f] = l[f];
                    };
                }
            }, this);
            return this.then(function() {
                return this.thenList(h);
            });
        }, o.prototype.get = function(l, h) {
            return this.then(function() {
                var f = l in o.template.prop ? this.prop[l] : this.opt[l];
                return h ? h(f) : f;
            });
        }, o.prototype.setMargin = function(l) {
            return this.then(function() {
                switch (a(l)) {
                  case "number":
                    l = [ l, l, l, l ];

                  case "array":
                    if (l.length === 2 && (l = [ l[0], l[1], l[0], l[1] ]), l.length === 4) break;

                  default:
                    return this.error("Invalid margin array.");
                }
                this.opt.margin = l;
            }).then(this.setPageSize);
        }, o.prototype.setPageSize = function(l) {
            function h(f, m) {
                return Math.floor(f * m / 72 * 96);
            }
            return this.then(function() {
                (l = l || Wt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = {
                    width: l.width - this.opt.margin[1] - this.opt.margin[3],
                    height: l.height - this.opt.margin[0] - this.opt.margin[2]
                }, l.inner.px = {
                    width: h(l.inner.width, l.k),
                    height: h(l.inner.height, l.k)
                }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
            });
        }, o.prototype.setProgress = function(l, h, f, m) {
            return l != null && (this.progress.val = l), h != null && (this.progress.state = h), 
            f != null && (this.progress.n = f), m != null && (this.progress.stack = m), 
            this.progress.ratio = this.progress.val / this.progress.state, this;
        }, o.prototype.updateProgress = function(l, h, f, m) {
            return this.setProgress(l ? this.progress.val + l : null, h || null, f ? this.progress.n + f : null, m ? this.progress.stack.concat(m) : null);
        }, o.prototype.then = function(l, h) {
            var f = this;
            return this.thenCore(l, h, function(m, y) {
                return f.updateProgress(null, null, 1, [ m ]), Promise.prototype.then.call(this, function(b) {
                    return f.updateProgress(null, m), b;
                }).then(m, y).then(function(b) {
                    return f.updateProgress(1), b;
                });
            });
        }, o.prototype.thenCore = function(l, h, f) {
            f = f || Promise.prototype.then, l && (l = l.bind(this)), h && (h = h.bind(this));
            var m = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), y = f.call(m, l, h);
            return o.convert(y, this.__proto__);
        }, o.prototype.thenExternal = function(l, h) {
            return Promise.prototype.then.call(this, l, h);
        }, o.prototype.thenList = function(l) {
            var h = this;
            return l.forEach(function(f) {
                h = h.thenCore(f);
            }), h;
        }, o.prototype.catch = function(l) {
            l && (l = l.bind(this));
            var h = Promise.prototype.catch.call(this, l);
            return o.convert(h, this);
        }, o.prototype.catchExternal = function(l) {
            return Promise.prototype.catch.call(this, l);
        }, o.prototype.error = function(l) {
            return this.then(function() {
                throw new Error(l);
            });
        }, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, 
        o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, 
        Wt.getPageSize = function(l, h, f) {
            if (fe(l) === "object") {
                var m = l;
                l = m.orientation, h = m.unit || h, f = m.format || f;
            }
            h = h || "mm", f = f || "a4", l = ("" + (l || "P")).toLowerCase();
            var y, b = ("" + f).toLowerCase(), k = {
                a0: [ 2383.94, 3370.39 ],
                a1: [ 1683.78, 2383.94 ],
                a2: [ 1190.55, 1683.78 ],
                a3: [ 841.89, 1190.55 ],
                a4: [ 595.28, 841.89 ],
                a5: [ 419.53, 595.28 ],
                a6: [ 297.64, 419.53 ],
                a7: [ 209.76, 297.64 ],
                a8: [ 147.4, 209.76 ],
                a9: [ 104.88, 147.4 ],
                a10: [ 73.7, 104.88 ],
                b0: [ 2834.65, 4008.19 ],
                b1: [ 2004.09, 2834.65 ],
                b2: [ 1417.32, 2004.09 ],
                b3: [ 1000.63, 1417.32 ],
                b4: [ 708.66, 1000.63 ],
                b5: [ 498.9, 708.66 ],
                b6: [ 354.33, 498.9 ],
                b7: [ 249.45, 354.33 ],
                b8: [ 175.75, 249.45 ],
                b9: [ 124.72, 175.75 ],
                b10: [ 87.87, 124.72 ],
                c0: [ 2599.37, 3676.54 ],
                c1: [ 1836.85, 2599.37 ],
                c2: [ 1298.27, 1836.85 ],
                c3: [ 918.43, 1298.27 ],
                c4: [ 649.13, 918.43 ],
                c5: [ 459.21, 649.13 ],
                c6: [ 323.15, 459.21 ],
                c7: [ 229.61, 323.15 ],
                c8: [ 161.57, 229.61 ],
                c9: [ 113.39, 161.57 ],
                c10: [ 79.37, 113.39 ],
                dl: [ 311.81, 623.62 ],
                letter: [ 612, 792 ],
                "government-letter": [ 576, 756 ],
                legal: [ 612, 1008 ],
                "junior-legal": [ 576, 360 ],
                ledger: [ 1224, 792 ],
                tabloid: [ 792, 1224 ],
                "credit-card": [ 153, 243 ]
            };
            switch (h) {
              case "pt":
                y = 1;
                break;

              case "mm":
                y = 72 / 25.4;
                break;

              case "cm":
                y = 72 / 2.54;
                break;

              case "in":
                y = 72;
                break;

              case "px":
                y = .75;
                break;

              case "pc":
              case "em":
                y = 12;
                break;

              case "ex":
                y = 6;
                break;

              default:
                throw "Invalid unit: " + h;
            }
            var p, M = 0, S = 0;
            if (k.hasOwnProperty(b)) M = k[b][1] / y, S = k[b][0] / y; else try {
                M = f[1], S = f[0];
            } catch {
                throw new Error("Invalid format: " + f);
            }
            if (l === "p" || l === "portrait") l = "p", S > M && (p = S, S = M, 
            M = p); else {
                if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
                l = "l", M > S && (p = S, S = M, M = p);
            }
            return {
                width: S,
                height: M,
                unit: h,
                k: y,
                orientation: l
            };
        }, i.html = function(l, h) {
            (h = h || {}).callback = h.callback || function() {}, h.html2canvas = h.html2canvas || {}, 
            h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, 
            h.fontFaces = h.fontFaces ? h.fontFaces.map(Io) : null;
            var f = new o(h);
            return h.worker ? f : f.from(l).doCallback();
        };
    }(Wt.API), Wt.API.addJS = function(i) {
        return $s = i, this.internal.events.subscribe("postPutResources", function() {
            Na = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Na + 1) + " 0 R]"), 
            this.internal.out(">>"), this.internal.out("endobj"), Ks = this.internal.newObject(), 
            this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + $s + ")"), 
            this.internal.out(">>"), this.internal.out("endobj");
        }), this.internal.events.subscribe("putCatalog", function() {
            Na !== void 0 && Ks !== void 0 && this.internal.out("/Names <</JavaScript " + Na + " 0 R>>");
        }), this;
    }, function(i) {
        var e;
        i.events.push([ "postPutResources", function() {
            var n = this, a = /^(\d+) 0 obj$/;
            if (this.outline.root.children.length > 0) for (var s = n.outline.render().split(/\r\n/), o = 0; o < s.length; o++) {
                var l = s[o], h = a.exec(l);
                if (h != null) {
                    var f = h[1];
                    n.internal.newObjectDeferredBegin(f, !1);
                }
                n.internal.write(l);
            }
            if (this.outline.createNamedDestinations) {
                var m = this.internal.pages.length, y = [];
                for (o = 0; o < m; o++) {
                    var b = n.internal.newObject();
                    y.push(b);
                    var k = n.internal.getPageInfo(o + 1);
                    n.internal.write("<< /D[" + k.objId + " 0 R /XYZ null null null]>> endobj");
                }
                var p = n.internal.newObject();
                for (n.internal.write("<< /Names [ "), o = 0; o < y.length; o++) n.internal.write("(page_" + (o + 1) + ")" + y[o] + " 0 R");
                n.internal.write(" ] >>", "endobj"), e = n.internal.newObject(), 
                n.internal.write("<< /Dests " + p + " 0 R"), n.internal.write(">>", "endobj");
            }
        } ]), i.events.push([ "putCatalog", function() {
            this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), 
            this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"));
        } ]), i.events.push([ "initialized", function() {
            var n = this;
            n.outline = {
                createNamedDestinations: !1,
                root: {
                    children: []
                }
            }, n.outline.add = function(a, s, o) {
                var l = {
                    title: s,
                    options: o,
                    children: []
                };
                return a == null && (a = this.root), a.children.push(l), l;
            }, n.outline.render = function() {
                return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = n, this.genIds_r(this.root), 
                this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
            }, n.outline.genIds_r = function(a) {
                a.id = n.internal.newObjectDeferred();
                for (var s = 0; s < a.children.length; s++) this.genIds_r(a.children[s]);
            }, n.outline.renderRoot = function(a) {
                this.objStart(a), this.line("/Type /Outlines"), a.children.length > 0 && (this.line("/First " + this.makeRef(a.children[0])), 
                this.line("/Last " + this.makeRef(a.children[a.children.length - 1]))), 
                this.line("/Count " + this.count_r({
                    count: 0
                }, a)), this.objEnd();
            }, n.outline.renderItems = function(a) {
                for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < a.children.length; o++) {
                    var l = a.children[o];
                    this.objStart(l), this.line("/Title " + this.makeString(l.title)), 
                    this.line("/Parent " + this.makeRef(a)), o > 0 && this.line("/Prev " + this.makeRef(a.children[o - 1])), 
                    o < a.children.length - 1 && this.line("/Next " + this.makeRef(a.children[o + 1])), 
                    l.children.length > 0 && (this.line("/First " + this.makeRef(l.children[0])), 
                    this.line("/Last " + this.makeRef(l.children[l.children.length - 1])));
                    var h = this.count = this.count_r({
                        count: 0
                    }, l);
                    if (h > 0 && this.line("/Count " + h), l.options && l.options.pageNumber) {
                        var f = n.internal.getPageInfo(l.options.pageNumber);
                        this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + s(0) + " 0]");
                    }
                    this.objEnd();
                }
                for (var m = 0; m < a.children.length; m++) this.renderItems(a.children[m]);
            }, n.outline.line = function(a) {
                this.ctx.val += a + `\r
`;
            }, n.outline.makeRef = function(a) {
                return a.id + " 0 R";
            }, n.outline.makeString = function(a) {
                return "(" + n.internal.pdfEscape(a) + ")";
            }, n.outline.objStart = function(a) {
                this.ctx.val += `\r
` + a.id + ` 0 obj\r
<<\r
`;
            }, n.outline.objEnd = function() {
                this.ctx.val += `>> \r
endobj\r
`;
            }, n.outline.count_r = function(a, s) {
                for (var o = 0; o < s.children.length; o++) a.count++, this.count_r(a, s.children[o]);
                return a.count;
            };
        } ]);
    }(Wt.API), function(i) {
        var e = [ 192, 193, 194, 195, 196, 197, 198, 199 ];
        i.processJPEG = function(n, a, s, o, l, h) {
            var f, m = this.decode.DCT_DECODE, y = null;
            if (typeof n == "string" || this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) {
                switch (n = l || n, n = this.__addimage__.isArrayBuffer(n) ? new Uint8Array(n) : n, 
                (f = function(b) {
                    for (var k, p = 256 * b.charCodeAt(4) + b.charCodeAt(5), M = b.length, S = {
                        width: 0,
                        height: 0,
                        numcomponents: 1
                    }, E = 4; E < M; E += 2) {
                        if (E += p, e.indexOf(b.charCodeAt(E + 1)) !== -1) {
                            k = 256 * b.charCodeAt(E + 5) + b.charCodeAt(E + 6), 
                            S = {
                                width: 256 * b.charCodeAt(E + 7) + b.charCodeAt(E + 8),
                                height: k,
                                numcomponents: b.charCodeAt(E + 9)
                            };
                            break;
                        }
                        p = 256 * b.charCodeAt(E + 2) + b.charCodeAt(E + 3);
                    }
                    return S;
                }(n = this.__addimage__.isArrayBufferView(n) ? this.__addimage__.arrayBufferToBinaryString(n) : n)).numcomponents) {
                  case 1:
                    h = this.color_spaces.DEVICE_GRAY;
                    break;

                  case 4:
                    h = this.color_spaces.DEVICE_CMYK;
                    break;

                  case 3:
                    h = this.color_spaces.DEVICE_RGB;
                }
                y = {
                    data: n,
                    width: f.width,
                    height: f.height,
                    colorSpace: h,
                    bitsPerComponent: 8,
                    filter: m,
                    index: a,
                    alias: s
                };
            }
            return y;
        };
    }(Wt.API);
    var ui, xa, Zs, Qs, tc, Ju = function() {
        var i, e, n;
        function a(o) {
            var l, h, f, m, y, b, k, p, M, S, E, A, U, X;
            for (this.data = o, this.pos = 8, this.palette = [], this.imgData = [], 
            this.transparency = {}, this.animation = null, this.text = {}, b = null; ;) {
                switch (l = this.readUInt32(), M = function() {
                    var Z, ot;
                    for (ot = [], Z = 0; Z < 4; ++Z) ot.push(String.fromCharCode(this.data[this.pos++]));
                    return ot;
                }.call(this).join("")) {
                  case "IHDR":
                    this.width = this.readUInt32(), this.height = this.readUInt32(), 
                    this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], 
                    this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], 
                    this.interlaceMethod = this.data[this.pos++];
                    break;

                  case "acTL":
                    this.animation = {
                        numFrames: this.readUInt32(),
                        numPlays: this.readUInt32() || 1 / 0,
                        frames: []
                    };
                    break;

                  case "PLTE":
                    this.palette = this.read(l);
                    break;

                  case "fcTL":
                    b && this.animation.frames.push(b), this.pos += 4, b = {
                        width: this.readUInt32(),
                        height: this.readUInt32(),
                        xOffset: this.readUInt32(),
                        yOffset: this.readUInt32()
                    }, y = this.readUInt16(), m = this.readUInt16() || 100, b.delay = 1e3 * y / m, 
                    b.disposeOp = this.data[this.pos++], b.blendOp = this.data[this.pos++], 
                    b.data = [];
                    break;

                  case "IDAT":
                  case "fdAT":
                    for (M === "fdAT" && (this.pos += 4, l -= 4), o = (b != null ? b.data : void 0) || this.imgData, 
                    A = 0; 0 <= l ? A < l : A > l; 0 <= l ? ++A : --A) o.push(this.data[this.pos++]);
                    break;

                  case "tRNS":
                    switch (this.transparency = {}, this.colorType) {
                      case 3:
                        if (f = this.palette.length / 3, this.transparency.indexed = this.read(l), 
                        this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
                        if ((S = f - this.transparency.indexed.length) > 0) for (U = 0; 0 <= S ? U < S : U > S; 0 <= S ? ++U : --U) this.transparency.indexed.push(255);
                        break;

                      case 0:
                        this.transparency.grayscale = this.read(l)[0];
                        break;

                      case 2:
                        this.transparency.rgb = this.read(l);
                    }
                    break;

                  case "tEXt":
                    k = (E = this.read(l)).indexOf(0), p = String.fromCharCode.apply(String, E.slice(0, k)), 
                    this.text[p] = String.fromCharCode.apply(String, E.slice(k + 1));
                    break;

                  case "IEND":
                    return b && this.animation.frames.push(b), this.colors = function() {
                        switch (this.colorType) {
                          case 0:
                          case 3:
                          case 4:
                            return 1;

                          case 2:
                          case 6:
                            return 3;
                        }
                    }.call(this), this.hasAlphaChannel = (X = this.colorType) === 4 || X === 6, 
                    h = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * h, 
                    this.colorSpace = function() {
                        switch (this.colors) {
                          case 1:
                            return "DeviceGray";

                          case 3:
                            return "DeviceRGB";
                        }
                    }.call(this), void (this.imgData = new Uint8Array(this.imgData));

                  default:
                    this.pos += l;
                }
                if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
            }
        }
        a.prototype.read = function(o) {
            var l, h;
            for (h = [], l = 0; 0 <= o ? l < o : l > o; 0 <= o ? ++l : --l) h.push(this.data[this.pos++]);
            return h;
        }, a.prototype.readUInt32 = function() {
            return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
        }, a.prototype.readUInt16 = function() {
            return this.data[this.pos++] << 8 | this.data[this.pos++];
        }, a.prototype.decodePixels = function(o) {
            var l = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * l), f = 0, m = this;
            if (o == null && (o = this.imgData), o.length === 0) return new Uint8Array(0);
            function y(b, k, p, M) {
                var S, E, A, U, X, Z, ot, yt, Lt, O, lt, vt, P, I, R, T, at, rt, pt, Q, st, ct = Math.ceil((m.width - b) / p), Ct = Math.ceil((m.height - k) / M), L = m.width == ct && m.height == Ct;
                for (I = l * ct, vt = L ? h : new Uint8Array(I * Ct), Z = o.length, 
                P = 0, E = 0; P < Ct && f < Z; ) {
                    switch (o[f++]) {
                      case 0:
                        for (U = at = 0; at < I; U = at += 1) vt[E++] = o[f++];
                        break;

                      case 1:
                        for (U = rt = 0; rt < I; U = rt += 1) S = o[f++], X = U < l ? 0 : vt[E - l], 
                        vt[E++] = (S + X) % 256;
                        break;

                      case 2:
                        for (U = pt = 0; pt < I; U = pt += 1) S = o[f++], A = (U - U % l) / l, 
                        R = P && vt[(P - 1) * I + A * l + U % l], vt[E++] = (R + S) % 256;
                        break;

                      case 3:
                        for (U = Q = 0; Q < I; U = Q += 1) S = o[f++], A = (U - U % l) / l, 
                        X = U < l ? 0 : vt[E - l], R = P && vt[(P - 1) * I + A * l + U % l], 
                        vt[E++] = (S + Math.floor((X + R) / 2)) % 256;
                        break;

                      case 4:
                        for (U = st = 0; st < I; U = st += 1) S = o[f++], A = (U - U % l) / l, 
                        X = U < l ? 0 : vt[E - l], P === 0 ? R = T = 0 : (R = vt[(P - 1) * I + A * l + U % l], 
                        T = A && vt[(P - 1) * I + (A - 1) * l + U % l]), ot = X + R - T, 
                        yt = Math.abs(ot - X), O = Math.abs(ot - R), lt = Math.abs(ot - T), 
                        Lt = yt <= O && yt <= lt ? X : O <= lt ? R : T, vt[E++] = (S + Lt) % 256;
                        break;

                      default:
                        throw new Error("Invalid filter algorithm: " + o[f - 1]);
                    }
                    if (!L) {
                        var j = ((k + P * M) * m.width + b) * l, q = P * I;
                        for (U = 0; U < ct; U += 1) {
                            for (var W = 0; W < l; W += 1) h[j++] = vt[q++];
                            j += (p - 1) * l;
                        }
                    }
                    P++;
                }
            }
            return o = Iu(o), m.interlaceMethod == 1 ? (y(0, 0, 8, 8), y(4, 0, 8, 8), 
            y(0, 4, 4, 8), y(2, 0, 4, 4), y(0, 2, 2, 4), y(1, 0, 2, 2), y(0, 1, 1, 2)) : y(0, 0, 1, 1), 
            h;
        }, a.prototype.decodePalette = function() {
            var o, l, h, f, m, y, b, k, p;
            for (h = this.palette, y = this.transparency.indexed || [], m = new Uint8Array((y.length || 0) + h.length), 
            f = 0, o = 0, l = b = 0, k = h.length; b < k; l = b += 3) m[f++] = h[l], 
            m[f++] = h[l + 1], m[f++] = h[l + 2], m[f++] = (p = y[o++]) != null ? p : 255;
            return m;
        }, a.prototype.copyToImageData = function(o, l) {
            var h, f, m, y, b, k, p, M, S, E, A;
            if (f = this.colors, S = null, h = this.hasAlphaChannel, this.palette.length && (S = (A = this._decodedPalette) != null ? A : this._decodedPalette = this.decodePalette(), 
            f = 4, h = !0), M = (m = o.data || o).length, b = S || l, y = k = 0, 
            f === 1) for (;y < M; ) p = S ? 4 * l[y / 4] : k, E = b[p++], m[y++] = E, 
            m[y++] = E, m[y++] = E, m[y++] = h ? b[p++] : 255, k = p; else for (;y < M; ) p = S ? 4 * l[y / 4] : k, 
            m[y++] = b[p++], m[y++] = b[p++], m[y++] = b[p++], m[y++] = h ? b[p++] : 255, 
            k = p;
        }, a.prototype.decode = function() {
            var o;
            return o = new Uint8Array(this.width * this.height * 4), this.copyToImageData(o, this.decodePixels()), 
            o;
        };
        var s = function() {
            if (Object.prototype.toString.call(Ht) === "[object Window]") {
                try {
                    e = Ht.document.createElement("canvas"), n = e.getContext("2d");
                } catch {
                    return !1;
                }
                return !0;
            }
            return !1;
        };
        return s(), i = function(o) {
            var l;
            if (s() === !0) return n.width = o.width, n.height = o.height, n.clearRect(0, 0, o.width, o.height), 
            n.putImageData(o, 0, 0), (l = new Image()).src = e.toDataURL(), l;
            throw new Error("This method requires a Browser with Canvas-capability.");
        }, a.prototype.decodeFrames = function(o) {
            var l, h, f, m, y, b, k, p;
            if (this.animation) {
                for (p = [], h = y = 0, b = (k = this.animation.frames).length; y < b; h = ++y) l = k[h], 
                f = o.createImageData(l.width, l.height), m = this.decodePixels(new Uint8Array(l.data)), 
                this.copyToImageData(f, m), l.imageData = f, p.push(l.image = i(f));
                return p;
            }
        }, a.prototype.renderFrame = function(o, l) {
            var h, f, m;
            return h = (f = this.animation.frames)[l], m = f[l - 1], l === 0 && o.clearRect(0, 0, this.width, this.height), 
            (m != null ? m.disposeOp : void 0) === 1 ? o.clearRect(m.xOffset, m.yOffset, m.width, m.height) : (m != null ? m.disposeOp : void 0) === 2 && o.putImageData(m.imageData, m.xOffset, m.yOffset), 
            h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height), 
            o.drawImage(h.image, h.xOffset, h.yOffset);
        }, a.prototype.animate = function(o) {
            var l, h, f, m, y, b, k = this;
            return h = 0, b = this.animation, m = b.numFrames, f = b.frames, y = b.numPlays, 
            (l = function() {
                var p, M;
                if (p = h++ % m, M = f[p], k.renderFrame(o, p), m > 1 && h / m < y) return k.animation._timeout = setTimeout(l, M.delay);
            })();
        }, a.prototype.stopAnimation = function() {
            var o;
            return clearTimeout((o = this.animation) != null ? o._timeout : void 0);
        }, a.prototype.render = function(o) {
            var l, h;
            return o._png && o._png.stopAnimation(), o._png = this, o.width = this.width, 
            o.height = this.height, l = o.getContext("2d"), this.animation ? (this.decodeFrames(l), 
            this.animate(l)) : (h = l.createImageData(this.width, this.height), 
            this.copyToImageData(h, this.decodePixels()), l.putImageData(h, 0, 0));
        }, a;
    }();
    function Xu(i) {
        var e = 0;
        if (i[e++] !== 71 || i[e++] !== 73 || i[e++] !== 70 || i[e++] !== 56 || (i[e++] + 1 & 253) != 56 || i[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
        var n = i[e++] | i[e++] << 8, a = i[e++] | i[e++] << 8, s = i[e++], o = s >> 7, l = 1 << 1 + (7 & s);
        i[e++], i[e++];
        var h = null, f = null;
        o && (h = e, f = l, e += 3 * l);
        var m = !0, y = [], b = 0, k = null, p = 0, M = null;
        for (this.width = n, this.height = a; m && e < i.length; ) switch (i[e++]) {
          case 33:
            switch (i[e++]) {
              case 255:
                if (i[e] !== 11 || i[e + 1] == 78 && i[e + 2] == 69 && i[e + 3] == 84 && i[e + 4] == 83 && i[e + 5] == 67 && i[e + 6] == 65 && i[e + 7] == 80 && i[e + 8] == 69 && i[e + 9] == 50 && i[e + 10] == 46 && i[e + 11] == 48 && i[e + 12] == 3 && i[e + 13] == 1 && i[e + 16] == 0) e += 14, 
                M = i[e++] | i[e++] << 8, e++; else for (e += 12; ;) {
                    if (!((P = i[e++]) >= 0)) throw Error("Invalid block size");
                    if (P === 0) break;
                    e += P;
                }
                break;

              case 249:
                if (i[e++] !== 4 || i[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
                var S = i[e++];
                b = i[e++] | i[e++] << 8, k = i[e++], !(1 & S) && (k = null), p = S >> 2 & 7, 
                e++;
                break;

              case 254:
                for (;;) {
                    if (!((P = i[e++]) >= 0)) throw Error("Invalid block size");
                    if (P === 0) break;
                    e += P;
                }
                break;

              default:
                throw new Error("Unknown graphic control label: 0x" + i[e - 1].toString(16));
            }
            break;

          case 44:
            var E = i[e++] | i[e++] << 8, A = i[e++] | i[e++] << 8, U = i[e++] | i[e++] << 8, X = i[e++] | i[e++] << 8, Z = i[e++], ot = Z >> 6 & 1, yt = 1 << 1 + (7 & Z), Lt = h, O = f, lt = !1;
            Z >> 7 && (lt = !0, Lt = e, O = yt, e += 3 * yt);
            var vt = e;
            for (e++; ;) {
                var P;
                if (!((P = i[e++]) >= 0)) throw Error("Invalid block size");
                if (P === 0) break;
                e += P;
            }
            y.push({
                x: E,
                y: A,
                width: U,
                height: X,
                has_local_palette: lt,
                palette_offset: Lt,
                palette_size: O,
                data_offset: vt,
                data_length: e - vt,
                transparent_index: k,
                interlaced: !!ot,
                delay: b,
                disposal: p
            });
            break;

          case 59:
            m = !1;
            break;

          default:
            throw new Error("Unknown gif block: 0x" + i[e - 1].toString(16));
        }
        this.numFrames = function() {
            return y.length;
        }, this.loopCount = function() {
            return M;
        }, this.frameInfo = function(I) {
            if (I < 0 || I >= y.length) throw new Error("Frame index out of range.");
            return y[I];
        }, this.decodeAndBlitFrameBGRA = function(I, R) {
            var T = this.frameInfo(I), at = T.width * T.height, rt = new Uint8Array(at);
            ec(i, T.data_offset, rt, at);
            var pt = T.palette_offset, Q = T.transparent_index;
            Q === null && (Q = 256);
            var st = T.width, ct = n - st, Ct = st, L = 4 * (T.y * n + T.x), j = 4 * ((T.y + T.height) * n + T.x), q = L, W = 4 * ct;
            T.interlaced === !0 && (W += 4 * n * 7);
            for (var G = 8, tt = 0, et = rt.length; tt < et; ++tt) {
                var nt = rt[tt];
                if (Ct === 0 && (Ct = st, (q += W) >= j && (W = 4 * ct + 4 * n * (G - 1), 
                q = L + (st + ct) * (G << 1), G >>= 1)), nt === Q) q += 4; else {
                    var wt = i[pt + 3 * nt], Nt = i[pt + 3 * nt + 1], Ft = i[pt + 3 * nt + 2];
                    R[q++] = Ft, R[q++] = Nt, R[q++] = wt, R[q++] = 255;
                }
                --Ct;
            }
        }, this.decodeAndBlitFrameRGBA = function(I, R) {
            var T = this.frameInfo(I), at = T.width * T.height, rt = new Uint8Array(at);
            ec(i, T.data_offset, rt, at);
            var pt = T.palette_offset, Q = T.transparent_index;
            Q === null && (Q = 256);
            var st = T.width, ct = n - st, Ct = st, L = 4 * (T.y * n + T.x), j = 4 * ((T.y + T.height) * n + T.x), q = L, W = 4 * ct;
            T.interlaced === !0 && (W += 4 * n * 7);
            for (var G = 8, tt = 0, et = rt.length; tt < et; ++tt) {
                var nt = rt[tt];
                if (Ct === 0 && (Ct = st, (q += W) >= j && (W = 4 * ct + 4 * n * (G - 1), 
                q = L + (st + ct) * (G << 1), G >>= 1)), nt === Q) q += 4; else {
                    var wt = i[pt + 3 * nt], Nt = i[pt + 3 * nt + 1], Ft = i[pt + 3 * nt + 2];
                    R[q++] = wt, R[q++] = Nt, R[q++] = Ft, R[q++] = 255;
                }
                --Ct;
            }
        };
    }
    function ec(i, e, n, a) {
        for (var s = i[e++], o = 1 << s, l = o + 1, h = l + 1, f = s + 1, m = (1 << f) - 1, y = 0, b = 0, k = 0, p = i[e++], M = new Int32Array(4096), S = null; ;) {
            for (;y < 16 && p !== 0; ) b |= i[e++] << y, y += 8, p === 1 ? p = i[e++] : --p;
            if (y < f) break;
            var E = b & m;
            if (b >>= f, y -= f, E !== o) {
                if (E === l) break;
                for (var A = E < h ? E : S, U = 0, X = A; X > o; ) X = M[X] >> 8, 
                ++U;
                var Z = X;
                if (k + U + (A !== E ? 1 : 0) > a) return void ye.log("Warning, gif stream longer than expected.");
                n[k++] = Z;
                var ot = k += U;
                for (A !== E && (n[k++] = Z), X = A; U--; ) X = M[X], n[--ot] = 255 & X, 
                X >>= 8;
                S !== null && h < 4096 && (M[h++] = S << 8 | Z, h >= m + 1 && f < 12 && (++f, 
                m = m << 1 | 1)), S = E;
            } else h = l + 1, m = (1 << (f = s + 1)) - 1, S = null;
        }
        return k !== a && ye.log("Warning, gif stream shorter than expected."), 
        n;
    }
    function jo(i) {
        var e, n, a, s, o, l = Math.floor, h = new Array(64), f = new Array(64), m = new Array(64), y = new Array(64), b = new Array(65535), k = new Array(65535), p = new Array(64), M = new Array(64), S = [], E = 0, A = 7, U = new Array(64), X = new Array(64), Z = new Array(64), ot = new Array(256), yt = new Array(2048), Lt = [ 0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63 ], O = [ 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ], lt = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ], vt = [ 0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125 ], P = [ 1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250 ], I = [ 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], R = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ], T = [ 0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119 ], at = [ 0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250 ];
        function rt(L, j) {
            for (var q = 0, W = 0, G = new Array(), tt = 1; tt <= 16; tt++) {
                for (var et = 1; et <= L[tt]; et++) G[j[W]] = [], G[j[W]][0] = q, 
                G[j[W]][1] = tt, W++, q++;
                q *= 2;
            }
            return G;
        }
        function pt(L) {
            for (var j = L[0], q = L[1] - 1; q >= 0; ) j & 1 << q && (E |= 1 << A), 
            q--, --A < 0 && (E == 255 ? (Q(255), Q(0)) : Q(E), A = 7, E = 0);
        }
        function Q(L) {
            S.push(L);
        }
        function st(L) {
            Q(L >> 8 & 255), Q(255 & L);
        }
        function ct(L, j, q, W, G) {
            for (var tt, et = G[0], nt = G[240], wt = function(mt, St) {
                var Mt, _t, Tt, te, Xt, oe, se, ne, qt, Zt, Rt = 0;
                for (qt = 0; qt < 8; ++qt) {
                    Mt = mt[Rt], _t = mt[Rt + 1], Tt = mt[Rt + 2], te = mt[Rt + 3], 
                    Xt = mt[Rt + 4], oe = mt[Rt + 5], se = mt[Rt + 6];
                    var Ue = Mt + (ne = mt[Rt + 7]), ae = Mt - ne, ee = _t + se, ue = _t - se, fn = Tt + oe, Gt = Tt - oe, me = te + Xt, ve = te - Xt, Be = Ue + me, dn = Ue - me, Pe = ee + fn, Kt = ee - fn;
                    mt[Rt] = Be + Pe, mt[Rt + 4] = Be - Pe;
                    var de = .707106781 * (Kt + dn);
                    mt[Rt + 2] = dn + de, mt[Rt + 6] = dn - de;
                    var Ur = .382683433 * ((Be = ve + Gt) - (Kt = ue + ae)), rn = .5411961 * Be + Ur, Vn = 1.306562965 * Kt + Ur, Gn = .707106781 * (Pe = Gt + ue), Ut = ae + Gn, ir = ae - Gn;
                    mt[Rt + 5] = ir + rn, mt[Rt + 3] = ir - rn, mt[Rt + 1] = Ut + Vn, 
                    mt[Rt + 7] = Ut - Vn, Rt += 8;
                }
                for (Rt = 0, qt = 0; qt < 8; ++qt) {
                    Mt = mt[Rt], _t = mt[Rt + 8], Tt = mt[Rt + 16], te = mt[Rt + 24], 
                    Xt = mt[Rt + 32], oe = mt[Rt + 40], se = mt[Rt + 48];
                    var Cn = Mt + (ne = mt[Rt + 56]), Yn = Mt - ne, Je = _t + se, He = _t - se, Me = Tt + oe, vn = Tt - oe, li = te + Xt, ar = te - Xt, jn = Cn + li, On = Cn - li, Bn = Je + Me, Jn = Je - Me;
                    mt[Rt] = jn + Bn, mt[Rt + 32] = jn - Bn;
                    var Nn = .707106781 * (Jn + On);
                    mt[Rt + 16] = On + Nn, mt[Rt + 48] = On - Nn;
                    var Xn = .382683433 * ((jn = ar + vn) - (Jn = He + Yn)), Hr = .5411961 * jn + Xn, hi = 1.306562965 * Jn + Xn, fi = .707106781 * (Bn = vn + He), di = Yn + fi, pi = Yn - fi;
                    mt[Rt + 40] = pi + Hr, mt[Rt + 24] = pi - Hr, mt[Rt + 8] = di + hi, 
                    mt[Rt + 56] = di - hi, Rt++;
                }
                for (qt = 0; qt < 64; ++qt) Zt = mt[qt] * St[qt], p[qt] = Zt > 0 ? Zt + .5 | 0 : Zt - .5 | 0;
                return p;
            }(L, j), Nt = 0; Nt < 64; ++Nt) M[Lt[Nt]] = wt[Nt];
            var Ft = M[0] - q;
            q = M[0], Ft == 0 ? pt(W[0]) : (pt(W[k[tt = 32767 + Ft]]), pt(b[tt]));
            for (var kt = 63; kt > 0 && M[kt] == 0; ) kt--;
            if (kt == 0) return pt(et), q;
            for (var zt, F = 1; F <= kt; ) {
                for (var At = F; M[F] == 0 && F <= kt; ) ++F;
                var Vt = F - At;
                if (Vt >= 16) {
                    zt = Vt >> 4;
                    for (var Bt = 1; Bt <= zt; ++Bt) pt(nt);
                    Vt &= 15;
                }
                tt = 32767 + M[F], pt(G[(Vt << 4) + k[tt]]), pt(b[tt]), F++;
            }
            return kt != 63 && pt(et), q;
        }
        function Ct(L) {
            L = Math.min(Math.max(L, 1), 100), o != L && (function(j) {
                for (var q = [ 16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99 ], W = 0; W < 64; W++) {
                    var G = l((q[W] * j + 50) / 100);
                    G = Math.min(Math.max(G, 1), 255), h[Lt[W]] = G;
                }
                for (var tt = [ 17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99 ], et = 0; et < 64; et++) {
                    var nt = l((tt[et] * j + 50) / 100);
                    nt = Math.min(Math.max(nt, 1), 255), f[Lt[et]] = nt;
                }
                for (var wt = [ 1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379 ], Nt = 0, Ft = 0; Ft < 8; Ft++) for (var kt = 0; kt < 8; kt++) m[Nt] = 1 / (h[Lt[Nt]] * wt[Ft] * wt[kt] * 8), 
                y[Nt] = 1 / (f[Lt[Nt]] * wt[Ft] * wt[kt] * 8), Nt++;
            }(L < 50 ? Math.floor(5e3 / L) : Math.floor(200 - 2 * L)), o = L);
        }
        this.encode = function(L, j) {
            j && Ct(j), S = new Array(), E = 0, A = 7, st(65496), st(65504), st(16), 
            Q(74), Q(70), Q(73), Q(70), Q(0), Q(1), Q(1), Q(0), st(1), st(1), Q(0), 
            Q(0), function() {
                st(65499), st(132), Q(0);
                for (var _t = 0; _t < 64; _t++) Q(h[_t]);
                Q(1);
                for (var Tt = 0; Tt < 64; Tt++) Q(f[Tt]);
            }(), function(_t, Tt) {
                st(65472), st(17), Q(8), st(Tt), st(_t), Q(3), Q(1), Q(17), Q(0), 
                Q(2), Q(17), Q(1), Q(3), Q(17), Q(1);
            }(L.width, L.height), function() {
                st(65476), st(418), Q(0);
                for (var _t = 0; _t < 16; _t++) Q(O[_t + 1]);
                for (var Tt = 0; Tt <= 11; Tt++) Q(lt[Tt]);
                Q(16);
                for (var te = 0; te < 16; te++) Q(vt[te + 1]);
                for (var Xt = 0; Xt <= 161; Xt++) Q(P[Xt]);
                Q(1);
                for (var oe = 0; oe < 16; oe++) Q(I[oe + 1]);
                for (var se = 0; se <= 11; se++) Q(R[se]);
                Q(17);
                for (var ne = 0; ne < 16; ne++) Q(T[ne + 1]);
                for (var qt = 0; qt <= 161; qt++) Q(at[qt]);
            }(), st(65498), st(12), Q(3), Q(1), Q(0), Q(2), Q(17), Q(3), Q(17), 
            Q(0), Q(63), Q(0);
            var q = 0, W = 0, G = 0;
            E = 0, A = 7, this.encode.displayName = "_encode_";
            for (var tt, et, nt, wt, Nt, Ft, kt, zt, F, At = L.data, Vt = L.width, Bt = L.height, mt = 4 * Vt, St = 0; St < Bt; ) {
                for (tt = 0; tt < mt; ) {
                    for (Nt = mt * St + tt, kt = -1, zt = 0, F = 0; F < 64; F++) Ft = Nt + (zt = F >> 3) * mt + (kt = 4 * (7 & F)), 
                    St + zt >= Bt && (Ft -= mt * (St + 1 + zt - Bt)), tt + kt >= mt && (Ft -= tt + kt - mt + 4), 
                    et = At[Ft++], nt = At[Ft++], wt = At[Ft++], U[F] = (yt[et] + yt[nt + 256 | 0] + yt[wt + 512 | 0] >> 16) - 128, 
                    X[F] = (yt[et + 768 | 0] + yt[nt + 1024 | 0] + yt[wt + 1280 | 0] >> 16) - 128, 
                    Z[F] = (yt[et + 1280 | 0] + yt[nt + 1536 | 0] + yt[wt + 1792 | 0] >> 16) - 128;
                    q = ct(U, m, q, e, a), W = ct(X, y, W, n, s), G = ct(Z, y, G, n, s), 
                    tt += 32;
                }
                St += 8;
            }
            if (A >= 0) {
                var Mt = [];
                Mt[1] = A + 1, Mt[0] = (1 << A + 1) - 1, pt(Mt);
            }
            return st(65497), new Uint8Array(S);
        }, i = i || 50, function() {
            for (var L = String.fromCharCode, j = 0; j < 256; j++) ot[j] = L(j);
        }(), e = rt(O, lt), n = rt(I, R), a = rt(vt, P), s = rt(T, at), function() {
            for (var L = 1, j = 2, q = 1; q <= 15; q++) {
                for (var W = L; W < j; W++) k[32767 + W] = q, b[32767 + W] = [], 
                b[32767 + W][1] = q, b[32767 + W][0] = W;
                for (var G = -(j - 1); G <= -L; G++) k[32767 + G] = q, b[32767 + G] = [], 
                b[32767 + G][1] = q, b[32767 + G][0] = j - 1 + G;
                L <<= 1, j <<= 1;
            }
        }(), function() {
            for (var L = 0; L < 256; L++) yt[L] = 19595 * L, yt[L + 256 | 0] = 38470 * L, 
            yt[L + 512 | 0] = 7471 * L + 32768, yt[L + 768 | 0] = -11059 * L, yt[L + 1024 | 0] = -21709 * L, 
            yt[L + 1280 | 0] = 32768 * L + 8421375, yt[L + 1536 | 0] = -27439 * L, 
            yt[L + 1792 | 0] = -5329 * L;
        }(), Ct(i);
    }
    function Fn(i, e) {
        if (this.pos = 0, this.buffer = i, this.datav = new DataView(i.buffer), 
        this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), 
        this.pos += 2, [ "BM", "BA", "CI", "CP", "IC", "PT" ].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
        this.parseHeader(), this.parseBGR();
    }
    function nc(i) {
        function e(O) {
            if (!O) throw Error("assert :P");
        }
        function n(O, lt, vt) {
            for (var P = 0; 4 > P; P++) if (O[lt + P] != vt.charCodeAt(P)) return !0;
            return !1;
        }
        function a(O, lt, vt, P, I) {
            for (var R = 0; R < I; R++) O[lt + R] = vt[P + R];
        }
        function s(O, lt, vt, P) {
            for (var I = 0; I < P; I++) O[lt + I] = vt;
        }
        function o(O) {
            return new Int32Array(O);
        }
        function l(O, lt) {
            for (var vt = [], P = 0; P < O; P++) vt.push(new lt());
            return vt;
        }
        function h(O, lt) {
            var vt = [];
            return function P(I, R, T) {
                for (var at = T[R], rt = 0; rt < at && (I.push(T.length > R + 1 ? [] : new lt()), 
                !(T.length < R + 1)); rt++) P(I[rt], R + 1, T);
            }(vt, 0, O), vt;
        }
        var f = function() {
            var O = this;
            function lt(t, r) {
                for (var u = 1 << r - 1 >>> 0; t & u; ) u >>>= 1;
                return u ? (t & u - 1) + u : t;
            }
            function vt(t, r, u, d, v) {
                e(!(d % u));
                do {
                    t[r + (d -= u)] = v;
                } while (0 < d);
            }
            function P(t, r, u, d, v) {
                if (e(2328 >= v), 512 >= v) var w = o(512); else if ((w = o(v)) == null) return 0;
                return function(N, x, _, C, z, K) {
                    var $, Y, dt = x, it = 1 << _, H = o(16), V = o(16);
                    for (e(z != 0), e(C != null), e(N != null), e(0 < _), Y = 0; Y < z; ++Y) {
                        if (15 < C[Y]) return 0;
                        ++H[C[Y]];
                    }
                    if (H[0] == z) return 0;
                    for (V[1] = 0, $ = 1; 15 > $; ++$) {
                        if (H[$] > 1 << $) return 0;
                        V[$ + 1] = V[$] + H[$];
                    }
                    for (Y = 0; Y < z; ++Y) $ = C[Y], 0 < C[Y] && (K[V[$]++] = Y);
                    if (V[15] == 1) return (C = new I()).g = 0, C.value = K[0], 
                    vt(N, dt, 1, it, C), it;
                    var ht, gt = -1, ft = it - 1, It = 0, xt = 1, Dt = 1, Pt = 1 << _;
                    for (Y = 0, $ = 1, z = 2; $ <= _; ++$, z <<= 1) {
                        if (xt += Dt <<= 1, 0 > (Dt -= H[$])) return 0;
                        for (;0 < H[$]; --H[$]) (C = new I()).g = $, C.value = K[Y++], 
                        vt(N, dt + It, z, Pt, C), It = lt(It, $);
                    }
                    for ($ = _ + 1, z = 2; 15 >= $; ++$, z <<= 1) {
                        if (xt += Dt <<= 1, 0 > (Dt -= H[$])) return 0;
                        for (;0 < H[$]; --H[$]) {
                            if (C = new I(), (It & ft) != gt) {
                                for (dt += Pt, ht = 1 << (gt = $) - _; 15 > gt && !(0 >= (ht -= H[gt])); ) ++gt, 
                                ht <<= 1;
                                it += Pt = 1 << (ht = gt - _), N[x + (gt = It & ft)].g = ht + _, 
                                N[x + gt].value = dt - x - gt;
                            }
                            C.g = $ - _, C.value = K[Y++], vt(N, dt + (It >> _), z, Pt, C), 
                            It = lt(It, $);
                        }
                    }
                    return xt != 2 * V[15] - 1 ? 0 : it;
                }(t, r, u, d, v, w);
            }
            function I() {
                this.value = this.g = 0;
            }
            function R() {
                this.value = this.g = 0;
            }
            function T() {
                this.G = l(5, I), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, 
                this.pd = l(tr, R);
            }
            function at(t, r, u, d) {
                e(t != null), e(r != null), e(2147483648 > d), t.Ca = 254, t.I = 0, 
                t.b = -8, t.Ka = 0, t.oa = r, t.pa = u, t.Jd = r, t.Yc = u + d, 
                t.Zc = 4 <= d ? u + d - 4 + 1 : u, tt(t);
            }
            function rt(t, r) {
                for (var u = 0; 0 < r--; ) u |= nt(t, 128) << r;
                return u;
            }
            function pt(t, r) {
                var u = rt(t, r);
                return et(t) ? -u : u;
            }
            function Q(t, r, u, d) {
                var v, w = 0;
                for (e(t != null), e(r != null), e(4294967288 > d), t.Sb = d, t.Ra = 0, 
                t.u = 0, t.h = 0, 4 < d && (d = 4), v = 0; v < d; ++v) w += r[u + v] << 8 * v;
                t.Ra = w, t.bb = d, t.oa = r, t.pa = u;
            }
            function st(t) {
                for (;8 <= t.u && t.bb < t.Sb; ) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << xn - 8 >>> 0, 
                ++t.bb, t.u -= 8;
                q(t) && (t.h = 1, t.u = 0);
            }
            function ct(t, r) {
                if (e(0 <= r), !t.h && r <= Qi) {
                    var u = j(t) & Sr[r];
                    return t.u += r, st(t), u;
                }
                return t.h = 1, t.u = 0;
            }
            function Ct() {
                this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], 
                this.Yc = 0, this.Zc = [], this.Ka = 0;
            }
            function L() {
                this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
            }
            function j(t) {
                return t.Ra >>> (t.u & xn - 1) >>> 0;
            }
            function q(t) {
                return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > xn;
            }
            function W(t, r) {
                t.u = r, t.h = q(t);
            }
            function G(t) {
                t.u >= ta && (e(t.u >= ta), st(t));
            }
            function tt(t) {
                e(t != null && t.oa != null), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, 
                t.b += 8) : (e(t != null && t.oa != null), t.pa < t.Yc ? (t.b += 8, 
                t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, 
                t.Ka = 1));
            }
            function et(t) {
                return rt(t, 1);
            }
            function nt(t, r) {
                var u = t.Ca;
                0 > t.b && tt(t);
                var d = t.b, v = u * r >>> 8, w = (t.I >>> d > v) + 0;
                for (w ? (u -= v, t.I -= v + 1 << d >>> 0) : u = v + 1, d = u, v = 0; 256 <= d; ) v += 8, 
                d >>= 8;
                return d = 7 ^ v + ki[d], t.b -= d, t.Ca = (u << d) - 1, w;
            }
            function wt(t, r, u) {
                t[r + 0] = u >> 24 & 255, t[r + 1] = u >> 16 & 255, t[r + 2] = u >> 8 & 255, 
                t[r + 3] = 255 & u;
            }
            function Nt(t, r) {
                return t[r + 0] | t[r + 1] << 8;
            }
            function Ft(t, r) {
                return Nt(t, r) | t[r + 2] << 16;
            }
            function kt(t, r) {
                return Nt(t, r) | Nt(t, r + 2) << 16;
            }
            function zt(t, r) {
                var u = 1 << r;
                return e(t != null), e(0 < r), t.X = o(u), t.X == null ? 0 : (t.Mb = 32 - r, 
                t.Xa = r, 1);
            }
            function F(t, r) {
                e(t != null), e(r != null), e(t.Xa == r.Xa), a(r.X, 0, t.X, 0, 1 << r.Xa);
            }
            function At() {
                this.X = [], this.Xa = this.Mb = 0;
            }
            function Vt(t, r, u, d) {
                e(u != null), e(d != null);
                var v = u[0], w = d[0];
                return v == 0 && (v = (t * w + r / 2) / r), w == 0 && (w = (r * v + t / 2) / t), 
                0 >= v || 0 >= w ? 0 : (u[0] = v, d[0] = w, 1);
            }
            function Bt(t, r) {
                return t + (1 << r) - 1 >>> r;
            }
            function mt(t, r) {
                return ((4278255360 & t) + (4278255360 & r) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & r) >>> 0 & 16711935) >>> 0;
            }
            function St(t, r) {
                O[r] = function(u, d, v, w, N, x, _) {
                    var C;
                    for (C = 0; C < N; ++C) {
                        var z = O[t](x[_ + C - 1], v, w + C);
                        x[_ + C] = mt(u[d + C], z);
                    }
                };
            }
            function Mt() {
                this.ud = this.hd = this.jd = 0;
            }
            function _t(t, r) {
                return ((4278124286 & (t ^ r)) >>> 1) + (t & r) >>> 0;
            }
            function Tt(t) {
                return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
            }
            function te(t, r) {
                return Tt(t + (t - r + .5 >> 1));
            }
            function Xt(t, r, u) {
                return Math.abs(r - u) - Math.abs(t - u);
            }
            function oe(t, r, u, d, v, w, N) {
                for (d = w[N - 1], u = 0; u < v; ++u) w[N + u] = d = mt(t[r + u], d);
            }
            function se(t, r, u, d, v) {
                var w;
                for (w = 0; w < u; ++w) {
                    var N = t[r + w], x = N >> 8 & 255, _ = 16711935 & (_ = (_ = 16711935 & N) + ((x << 16) + x));
                    d[v + w] = (4278255360 & N) + _ >>> 0;
                }
            }
            function ne(t, r) {
                r.jd = 255 & t, r.hd = t >> 8 & 255, r.ud = t >> 16 & 255;
            }
            function qt(t, r, u, d, v, w) {
                var N;
                for (N = 0; N < d; ++N) {
                    var x = r[u + N], _ = x >>> 8, C = x, z = 255 & (z = (z = x >>> 16) + ((t.jd << 24 >> 24) * (_ << 24 >> 24) >>> 5));
                    C = 255 & (C = (C += (t.hd << 24 >> 24) * (_ << 24 >> 24) >>> 5) + ((t.ud << 24 >> 24) * (z << 24 >> 24) >>> 5)), 
                    v[w + N] = (4278255360 & x) + (z << 16) + C;
                }
            }
            function Zt(t, r, u, d, v) {
                O[r] = function(w, N, x, _, C, z, K, $, Y) {
                    for (_ = K; _ < $; ++_) for (K = 0; K < Y; ++K) C[z++] = v(x[d(w[N++])]);
                }, O[t] = function(w, N, x, _, C, z, K) {
                    var $ = 8 >> w.b, Y = w.Ea, dt = w.K[0], it = w.w;
                    if (8 > $) for (w = (1 << w.b) - 1, it = (1 << $) - 1; N < x; ++N) {
                        var H, V = 0;
                        for (H = 0; H < Y; ++H) H & w || (V = d(_[C++])), z[K++] = v(dt[V & it]), 
                        V >>= $;
                    } else O["VP8LMapColor" + u](_, C, dt, it, z, K, N, x, Y);
                };
            }
            function Rt(t, r, u, d, v) {
                for (u = r + u; r < u; ) {
                    var w = t[r++];
                    d[v++] = w >> 16 & 255, d[v++] = w >> 8 & 255, d[v++] = 255 & w;
                }
            }
            function Ue(t, r, u, d, v) {
                for (u = r + u; r < u; ) {
                    var w = t[r++];
                    d[v++] = w >> 16 & 255, d[v++] = w >> 8 & 255, d[v++] = 255 & w, 
                    d[v++] = w >> 24 & 255;
                }
            }
            function ae(t, r, u, d, v) {
                for (u = r + u; r < u; ) {
                    var w = (N = t[r++]) >> 16 & 240 | N >> 12 & 15, N = 240 & N | N >> 28 & 15;
                    d[v++] = w, d[v++] = N;
                }
            }
            function ee(t, r, u, d, v) {
                for (u = r + u; r < u; ) {
                    var w = (N = t[r++]) >> 16 & 248 | N >> 13 & 7, N = N >> 5 & 224 | N >> 3 & 31;
                    d[v++] = w, d[v++] = N;
                }
            }
            function ue(t, r, u, d, v) {
                for (u = r + u; r < u; ) {
                    var w = t[r++];
                    d[v++] = 255 & w, d[v++] = w >> 8 & 255, d[v++] = w >> 16 & 255;
                }
            }
            function fn(t, r, u, d, v, w) {
                if (w == 0) for (u = r + u; r < u; ) wt(d, ((w = t[r++])[0] >> 24 | w[1] >> 8 & 65280 | w[2] << 8 & 16711680 | w[3] << 24) >>> 0), 
                v += 32; else a(d, v, t, r, u);
            }
            function Gt(t, r) {
                O[r][0] = O[t + "0"], O[r][1] = O[t + "1"], O[r][2] = O[t + "2"], 
                O[r][3] = O[t + "3"], O[r][4] = O[t + "4"], O[r][5] = O[t + "5"], 
                O[r][6] = O[t + "6"], O[r][7] = O[t + "7"], O[r][8] = O[t + "8"], 
                O[r][9] = O[t + "9"], O[r][10] = O[t + "10"], O[r][11] = O[t + "11"], 
                O[r][12] = O[t + "12"], O[r][13] = O[t + "13"], O[r][14] = O[t + "0"], 
                O[r][15] = O[t + "0"];
            }
            function me(t) {
                return t == rs || t == is || t == Ya || t == as;
            }
            function ve() {
                this.eb = [], this.size = this.A = this.fb = 0;
            }
            function Be() {
                this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
            }
            function dn() {
                this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new ve(), 
                this.f.kb = new Be(), this.sd = null;
            }
            function Pe() {
                this.width = [ 0 ], this.height = [ 0 ], this.Pd = [ 0 ], this.Qd = [ 0 ], 
                this.format = [ 0 ];
            }
            function Kt() {
                this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
            }
            function de(t) {
                return alert("todo:WebPSamplerProcessPlane"), t.T;
            }
            function Ur(t, r) {
                var u = t.T, d = r.ba.f.RGBA, v = d.eb, w = d.fb + t.ka * d.A, N = _n[r.ba.S], x = t.y, _ = t.O, C = t.f, z = t.N, K = t.ea, $ = t.W, Y = r.cc, dt = r.dc, it = r.Mc, H = r.Nc, V = t.ka, ht = t.ka + t.T, gt = t.U, ft = gt + 1 >> 1;
                for (V == 0 ? N(x, _, null, null, C, z, K, $, C, z, K, $, v, w, null, null, gt) : (N(r.ec, r.fc, x, _, Y, dt, it, H, C, z, K, $, v, w - d.A, v, w, gt), 
                ++u); V + 2 < ht; V += 2) Y = C, dt = z, it = K, H = $, z += t.Rc, 
                $ += t.Rc, w += 2 * d.A, N(x, (_ += 2 * t.fa) - t.fa, x, _, Y, dt, it, H, C, z, K, $, v, w - d.A, v, w, gt);
                return _ += t.fa, t.j + ht < t.o ? (a(r.ec, r.fc, x, _, gt), a(r.cc, r.dc, C, z, ft), 
                a(r.Mc, r.Nc, K, $, ft), u--) : 1 & ht || N(x, _, null, null, C, z, K, $, C, z, K, $, v, w + d.A, null, null, gt), 
                u;
            }
            function rn(t, r, u) {
                var d = t.F, v = [ t.J ];
                if (d != null) {
                    var w = t.U, N = r.ba.S, x = N == Ga || N == Ya;
                    r = r.ba.f.RGBA;
                    var _ = [ 0 ], C = t.ka;
                    _[0] = t.T, t.Kb && (C == 0 ? --_[0] : (--C, v[0] -= t.width), 
                    t.j + t.ka + t.T == t.o && (_[0] = t.o - t.j - C));
                    var z = r.eb;
                    C = r.fb + C * r.A, t = Ec(d, v[0], t.width, w, _, z, C + (x ? 0 : 3), r.A), 
                    e(u == _), t && me(N) && na(z, C, x, w, _, r.A);
                }
                return 0;
            }
            function Vn(t) {
                var r = t.ma, u = r.ba.S, d = 11 > u, v = u == Wa || u == Va || u == Ga || u == ns || u == 12 || me(u);
                if (r.memory = null, r.Ib = null, r.Jb = null, r.Nd = null, !En(r.Oa, t, v ? 11 : 12)) return 0;
                if (v && me(u) && Ai(), t.da) alert("todo:use_scaling"); else {
                    if (d) {
                        if (r.Ib = de, t.Kb) {
                            if (u = t.U + 1 >> 1, r.memory = o(t.U + 2 * u), r.memory == null) return 0;
                            r.ec = r.memory, r.fc = 0, r.cc = r.ec, r.dc = r.fc + t.U, 
                            r.Mc = r.cc, r.Nc = r.dc + u, r.Ib = Ur, Ai();
                        }
                    } else alert("todo:EmitYUV");
                    v && (r.Jb = rn, d && Jr());
                }
                if (d && !Qc) {
                    for (t = 0; 256 > t; ++t) F1[t] = 89858 * (t - 128) + Xa >> Ja, 
                    j1[t] = -22014 * (t - 128) + Xa, C1[t] = -45773 * (t - 128), 
                    I1[t] = 113618 * (t - 128) + Xa >> Ja;
                    for (t = ia; t < cs; ++t) r = 76283 * (t - 16) + Xa >> Ja, O1[t - ia] = Mn(r, 255), 
                    B1[t - ia] = Mn(r + 8 >> 4, 15);
                    Qc = 1;
                }
                return 1;
            }
            function Gn(t) {
                var r = t.ma, u = t.U, d = t.T;
                return e(!(1 & t.ka)), 0 >= u || 0 >= d ? 0 : (u = r.Ib(t, r), r.Jb != null && r.Jb(t, r, u), 
                r.Dc += u, 1);
            }
            function Ut(t) {
                t.ma.memory = null;
            }
            function ir(t, r, u, d) {
                return ct(t, 8) != 47 ? 0 : (r[0] = ct(t, 14) + 1, u[0] = ct(t, 14) + 1, 
                d[0] = ct(t, 1), ct(t, 3) != 0 ? 0 : !t.h);
            }
            function Cn(t, r) {
                if (4 > t) return t + 1;
                var u = t - 2 >> 1;
                return (2 + (1 & t) << u) + ct(r, u) + 1;
            }
            function Yn(t, r) {
                return 120 < r ? r - 120 : 1 <= (u = ((u = g1[r - 1]) >> 4) * t + (8 - (15 & u))) ? u : 1;
                var u;
            }
            function Je(t, r, u) {
                var d = j(u), v = t[r += 255 & d].g - 8;
                return 0 < v && (W(u, u.u + 8), d = j(u), r += t[r].value, r += d & (1 << v) - 1), 
                W(u, u.u + t[r].g), t[r].value;
            }
            function He(t, r, u) {
                return u.g += t.g, u.value += t.value << r >>> 0, e(8 >= u.g), t.g;
            }
            function Me(t, r, u) {
                var d = t.xc;
                return e((r = d == 0 ? 0 : t.vc[t.md * (u >> d) + (r >> d)]) < t.Wb), 
                t.Ya[r];
            }
            function vn(t, r, u, d) {
                var v = t.ab, w = t.c * r, N = t.C;
                r = N + r;
                var x = u, _ = d;
                for (d = t.Ta, u = t.Ua; 0 < v--; ) {
                    var C = t.gc[v], z = N, K = r, $ = x, Y = _, dt = (_ = d, x = u, 
                    C.Ea);
                    switch (e(z < K), e(K <= C.nc), C.hc) {
                      case 2:
                        Zr($, Y, (K - z) * dt, _, x);
                        break;

                      case 0:
                        var it = z, H = K, V = _, ht = x, gt = (Pt = C).Ea;
                        it == 0 && (Fi($, Y, null, null, 1, V, ht), oe($, Y + 1, 0, 0, gt - 1, V, ht + 1), 
                        Y += gt, ht += gt, ++it);
                        for (var ft = 1 << Pt.b, It = ft - 1, xt = Bt(gt, Pt.b), Dt = Pt.K, Pt = Pt.w + (it >> Pt.b) * xt; it < H; ) {
                            var he = Dt, pe = Pt, ce = 1;
                            for ($r($, Y, V, ht - gt, 1, V, ht); ce < gt; ) {
                                var ie = (ce & ~It) + ft;
                                ie > gt && (ie = gt), (0, xe[he[pe++] >> 8 & 15])($, Y + +ce, V, ht + ce - gt, ie - ce, V, ht + ce), 
                                ce = ie;
                            }
                            Y += gt, ht += gt, ++it & It || (Pt += xt);
                        }
                        K != C.nc && a(_, x - dt, _, x + (K - z - 1) * dt, dt);
                        break;

                      case 1:
                        for (dt = $, H = Y, gt = ($ = C.Ea) - (ht = $ & ~(V = (Y = 1 << C.b) - 1)), 
                        it = Bt($, C.b), ft = C.K, C = C.w + (z >> C.b) * it; z < K; ) {
                            for (It = ft, xt = C, Dt = new Mt(), Pt = H + ht, he = H + $; H < Pt; ) ne(It[xt++], Dt), 
                            we(Dt, dt, H, Y, _, x), H += Y, x += Y;
                            H < he && (ne(It[xt++], Dt), we(Dt, dt, H, gt, _, x), 
                            H += gt, x += gt), ++z & V || (C += it);
                        }
                        break;

                      case 3:
                        if ($ == _ && Y == x && 0 < C.b) {
                            for (H = _, $ = dt = x + (K - z) * dt - (ht = (K - z) * Bt(C.Ea, C.b)), 
                            Y = _, V = x, it = [], ht = (gt = ht) - 1; 0 <= ht; --ht) it[ht] = Y[V + ht];
                            for (ht = gt - 1; 0 <= ht; --ht) H[$ + ht] = it[ht];
                            Pr(C, z, K, _, dt, _, x);
                        } else Pr(C, z, K, $, Y, _, x);
                    }
                    x = d, _ = u;
                }
                _ != u && a(d, u, x, _, w);
            }
            function li(t, r) {
                var u = t.V, d = t.Ba + t.c * t.C, v = r - t.C;
                if (e(r <= t.l.o), e(16 >= v), 0 < v) {
                    var w = t.l, N = t.Ta, x = t.Ua, _ = w.width;
                    if (vn(t, v, u, d), v = x = [ x ], e((u = t.C) < (d = r)), e(w.v < w.va), 
                    d > w.o && (d = w.o), u < w.j) {
                        var C = w.j - u;
                        u = w.j, v[0] += C * _;
                    }
                    if (u >= d ? u = 0 : (v[0] += 4 * w.v, w.ka = u - w.j, w.U = w.va - w.v, 
                    w.T = d - u, u = 1), u) {
                        if (x = x[0], 11 > (u = t.ca).S) {
                            var z = u.f.RGBA, K = (d = u.S, v = w.U, w = w.T, C = z.eb, 
                            z.A), $ = w;
                            for (z = z.fb + t.Ma * z.A; 0 < $--; ) {
                                var Y = N, dt = x, it = v, H = C, V = z;
                                switch (d) {
                                  case Ha:
                                    Oe(Y, dt, it, H, V);
                                    break;

                                  case Wa:
                                    Re(Y, dt, it, H, V);
                                    break;

                                  case rs:
                                    Re(Y, dt, it, H, V), na(H, V, 0, it, 1, 0);
                                    break;

                                  case Hc:
                                    Ii(Y, dt, it, H, V);
                                    break;

                                  case Va:
                                    fn(Y, dt, it, H, V, 1);
                                    break;

                                  case is:
                                    fn(Y, dt, it, H, V, 1), na(H, V, 0, it, 1, 0);
                                    break;

                                  case Ga:
                                    fn(Y, dt, it, H, V, 0);
                                    break;

                                  case Ya:
                                    fn(Y, dt, it, H, V, 0), na(H, V, 1, it, 1, 0);
                                    break;

                                  case ns:
                                    er(Y, dt, it, H, V);
                                    break;

                                  case as:
                                    er(Y, dt, it, H, V), Mc(H, V, it, 1, 0);
                                    break;

                                  case Wc:
                                    ea(Y, dt, it, H, V);
                                    break;

                                  default:
                                    e(0);
                                }
                                x += _, z += K;
                            }
                            t.Ma += w;
                        } else alert("todo:EmitRescaledRowsYUVA");
                        e(t.Ma <= u.height);
                    }
                }
                t.C = r, e(t.C <= t.i);
            }
            function ar(t) {
                var r;
                if (0 < t.ua) return 0;
                for (r = 0; r < t.Wb; ++r) {
                    var u = t.Ya[r].G, d = t.Ya[r].H;
                    if (0 < u[1][d[1] + 0].g || 0 < u[2][d[2] + 0].g || 0 < u[3][d[3] + 0].g) return 0;
                }
                return 1;
            }
            function jn(t, r, u, d, v, w) {
                if (t.Z != 0) {
                    var N = t.qd, x = t.rd;
                    for (e(Ir[t.Z] != null); r < u; ++r) Ir[t.Z](N, x, d, v, d, v, w), 
                    N = d, x = v, v += w;
                    t.qd = N, t.rd = x;
                }
            }
            function On(t, r) {
                var u = t.l.ma, d = u.Z == 0 || u.Z == 1 ? t.l.j : t.C;
                if (d = t.C < d ? d : t.C, e(r <= t.l.o), r > d) {
                    var v = t.l.width, w = u.ca, N = u.tb + v * d, x = t.V, _ = t.Ba + t.c * d, C = t.gc;
                    e(t.ab == 1), e(C[0].hc == 3), Rn(C[0], d, r, x, _, w, N), jn(u, d, r, w, N, v);
                }
                t.C = t.Ma = r;
            }
            function Bn(t, r, u, d, v, w, N) {
                var x = t.$ / d, _ = t.$ % d, C = t.m, z = t.s, K = u + t.$, $ = K;
                v = u + d * v;
                var Y = u + d * w, dt = 280 + z.ua, it = t.Pb ? x : 16777216, H = 0 < z.ua ? z.Wa : null, V = z.wc, ht = K < Y ? Me(z, _, x) : null;
                e(t.C < w), e(Y <= v);
                var gt = !1;
                t: for (;;) {
                    for (;gt || K < Y; ) {
                        var ft = 0;
                        if (x >= it) {
                            var It = K - u;
                            e((it = t).Pb), it.wd = it.m, it.xd = It, 0 < it.s.ua && F(it.s.Wa, it.s.vb), 
                            it = x + v1;
                        }
                        if (_ & V || (ht = Me(z, _, x)), e(ht != null), ht.Qb && (r[K] = ht.qb, 
                        gt = !0), !gt) if (G(C), ht.jc) {
                            ft = C, It = r;
                            var xt = K, Dt = ht.pd[j(ft) & tr - 1];
                            e(ht.jc), 256 > Dt.g ? (W(ft, ft.u + Dt.g), It[xt] = Dt.value, 
                            ft = 0) : (W(ft, ft.u + Dt.g - 256), e(256 <= Dt.value), 
                            ft = Dt.value), ft == 0 && (gt = !0);
                        } else ft = Je(ht.G[0], ht.H[0], C);
                        if (C.h) break;
                        if (gt || 256 > ft) {
                            if (!gt) if (ht.nd) r[K] = (ht.qb | ft << 8) >>> 0; else {
                                if (G(C), gt = Je(ht.G[1], ht.H[1], C), G(C), It = Je(ht.G[2], ht.H[2], C), 
                                xt = Je(ht.G[3], ht.H[3], C), C.h) break;
                                r[K] = (xt << 24 | gt << 16 | ft << 8 | It) >>> 0;
                            }
                            if (gt = !1, ++K, ++_ >= d && (_ = 0, ++x, N != null && x <= w && !(x % 16) && N(t, x), 
                            H != null)) for (;$ < K; ) ft = r[$++], H.X[(506832829 * ft & 4294967295) >>> H.Mb] = ft;
                        } else if (280 > ft) {
                            if (ft = Cn(ft - 256, C), It = Je(ht.G[4], ht.H[4], C), 
                            G(C), It = Yn(d, It = Cn(It, C)), C.h) break;
                            if (K - u < It || v - K < ft) break t;
                            for (xt = 0; xt < ft; ++xt) r[K + xt] = r[K + xt - It];
                            for (K += ft, _ += ft; _ >= d; ) _ -= d, ++x, N != null && x <= w && !(x % 16) && N(t, x);
                            if (e(K <= v), _ & V && (ht = Me(z, _, x)), H != null) for (;$ < K; ) ft = r[$++], 
                            H.X[(506832829 * ft & 4294967295) >>> H.Mb] = ft;
                        } else {
                            if (!(ft < dt)) break t;
                            for (gt = ft - 280, e(H != null); $ < K; ) ft = r[$++], 
                            H.X[(506832829 * ft & 4294967295) >>> H.Mb] = ft;
                            ft = K, e(!(gt >>> (It = H).Xa)), r[ft] = It.X[gt], 
                            gt = !0;
                        }
                        gt || e(C.h == q(C));
                    }
                    if (t.Pb && C.h && K < v) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 
                    0 < t.s.ua && F(t.s.vb, t.s.Wa); else {
                        if (C.h) break t;
                        N != null && N(t, x > w ? w : x), t.a = 0, t.$ = K - u;
                    }
                    return 1;
                }
                return t.a = 3, 0;
            }
            function Jn(t) {
                e(t != null), t.vc = null, t.yc = null, t.Ya = null;
                var r = t.Wa;
                r != null && (r.X = null), t.vb = null, e(t != null);
            }
            function Nn() {
                var t = new le();
                return t == null ? null : (t.a = 0, t.xb = Yc, Gt("Predictor", "VP8LPredictors"), 
                Gt("Predictor", "VP8LPredictors_C"), Gt("PredictorAdd", "VP8LPredictorsAdd"), 
                Gt("PredictorAdd", "VP8LPredictorsAdd_C"), Zr = se, we = qt, Oe = Rt, 
                Re = Ue, er = ae, ea = ee, Ii = ue, O.VP8LMapColor32b = Ta, O.VP8LMapColor8b = kr, 
                t);
            }
            function Xn(t, r, u, d, v) {
                var w = 1, N = [ t ], x = [ r ], _ = d.m, C = d.s, z = null, K = 0;
                t: for (;;) {
                    if (u) for (;w && ct(_, 1); ) {
                        var $ = N, Y = x, dt = d, it = 1, H = dt.m, V = dt.gc[dt.ab], ht = ct(H, 2);
                        if (dt.Oc & 1 << ht) w = 0; else {
                            switch (dt.Oc |= 1 << ht, V.hc = ht, V.Ea = $[0], V.nc = Y[0], 
                            V.K = [ null ], ++dt.ab, e(4 >= dt.ab), ht) {
                              case 0:
                              case 1:
                                V.b = ct(H, 3) + 2, it = Xn(Bt(V.Ea, V.b), Bt(V.nc, V.b), 0, dt, V.K), 
                                V.K = V.K[0];
                                break;

                              case 3:
                                var gt, ft = ct(H, 8) + 1, It = 16 < ft ? 0 : 4 < ft ? 1 : 2 < ft ? 2 : 3;
                                if ($[0] = Bt(V.Ea, It), V.b = It, gt = it = Xn(ft, 1, 0, dt, V.K)) {
                                    var xt, Dt = ft, Pt = V, he = 1 << (8 >> Pt.b), pe = o(he);
                                    if (pe == null) gt = 0; else {
                                        var ce = Pt.K[0], ie = Pt.w;
                                        for (pe[0] = Pt.K[0][0], xt = 1; xt < 1 * Dt; ++xt) pe[xt] = mt(ce[ie + xt], pe[xt - 1]);
                                        for (;xt < 4 * he; ++xt) pe[xt] = 0;
                                        Pt.K[0] = null, Pt.K[0] = pe, gt = 1;
                                    }
                                }
                                it = gt;
                                break;

                              case 2:
                                break;

                              default:
                                e(0);
                            }
                            w = it;
                        }
                    }
                    if (N = N[0], x = x[0], w && ct(_, 1) && !(w = 1 <= (K = ct(_, 4)) && 11 >= K)) {
                        d.a = 3;
                        break t;
                    }
                    var Le;
                    if (Le = w) e: {
                        var be, Qt, Te, gn = d, De = N, mn = x, ge = K, wn = u, Ln = gn.m, Ge = gn.s, $e = [ null ], ln = 1, Sn = 0, nr = m1[ge];
                        n: for (;;) {
                            if (wn && ct(Ln, 1)) {
                                var Ye = ct(Ln, 3) + 2, fr = Bt(De, Ye), Qr = Bt(mn, Ye), ji = fr * Qr;
                                if (!Xn(fr, Qr, 0, gn, $e)) break n;
                                for ($e = $e[0], Ge.xc = Ye, be = 0; be < ji; ++be) {
                                    var Cr = $e[be] >> 8 & 65535;
                                    $e[be] = Cr, Cr >= ln && (ln = Cr + 1);
                                }
                            }
                            if (Ln.h) break n;
                            for (Qt = 0; 5 > Qt; ++Qt) {
                                var Fe = Vc[Qt];
                                !Qt && 0 < ge && (Fe += 1 << ge), Sn < Fe && (Sn = Fe);
                            }
                            var us = l(ln * nr, I), nu = ln, ru = l(nu, T);
                            if (ru == null) var $a = null; else e(65536 >= nu), 
                            $a = ru;
                            var aa = o(Sn);
                            if ($a == null || aa == null || us == null) {
                                gn.a = 1;
                                break n;
                            }
                            var Za = us;
                            for (be = Te = 0; be < ln; ++be) {
                                var Dn = $a[be], Oi = Dn.G, Bi = Dn.H, iu = 0, Qa = 1, au = 0;
                                for (Qt = 0; 5 > Qt; ++Qt) {
                                    Fe = Vc[Qt], Oi[Qt] = Za, Bi[Qt] = Te, !Qt && 0 < ge && (Fe += 1 << ge);
                                    i: {
                                        var to, ls = Fe, eo = gn, oa = aa, q1 = Za, R1 = Te, hs = 0, jr = eo.m, T1 = ct(jr, 1);
                                        if (s(oa, 0, 0, ls), T1) {
                                            var D1 = ct(jr, 1) + 1, z1 = ct(jr, 1), ou = ct(jr, z1 == 0 ? 1 : 8);
                                            oa[ou] = 1, D1 == 2 && (oa[ou = ct(jr, 8)] = 1);
                                            var no = 1;
                                        } else {
                                            var su = o(19), cu = ct(jr, 4) + 4;
                                            if (19 < cu) {
                                                eo.a = 3;
                                                var ro = 0;
                                                break i;
                                            }
                                            for (to = 0; to < cu; ++to) su[p1[to]] = ct(jr, 3);
                                            var fs = void 0, sa = void 0, uu = eo, U1 = su, io = ls, lu = oa, ds = 0, Or = uu.m, hu = 8, fu = l(128, I);
                                            r: for (;P(fu, 0, 7, U1, 19); ) {
                                                if (ct(Or, 1)) {
                                                    var H1 = 2 + 2 * ct(Or, 3);
                                                    if ((fs = 2 + ct(Or, H1)) > io) break r;
                                                } else fs = io;
                                                for (sa = 0; sa < io && fs--; ) {
                                                    G(Or);
                                                    var du = fu[0 + (127 & j(Or))];
                                                    W(Or, Or.u + du.g);
                                                    var Mi = du.value;
                                                    if (16 > Mi) lu[sa++] = Mi, 
                                                    Mi != 0 && (hu = Mi); else {
                                                        var W1 = Mi == 16, pu = Mi - 16, V1 = f1[pu], gu = ct(Or, h1[pu]) + V1;
                                                        if (sa + gu > io) break r;
                                                        for (var G1 = W1 ? hu : 0; 0 < gu--; ) lu[sa++] = G1;
                                                    }
                                                }
                                                ds = 1;
                                                break r;
                                            }
                                            ds || (uu.a = 3), no = ds;
                                        }
                                        (no = no && !jr.h) && (hs = P(q1, R1, 8, oa, ls)), 
                                        no && hs != 0 ? ro = hs : (eo.a = 3, ro = 0);
                                    }
                                    if (ro == 0) break n;
                                    if (Qa && d1[Qt] == 1 && (Qa = Za[Te].g == 0), 
                                    iu += Za[Te].g, Te += ro, 3 >= Qt) {
                                        var ca, ps = aa[0];
                                        for (ca = 1; ca < Fe; ++ca) aa[ca] > ps && (ps = aa[ca]);
                                        au += ps;
                                    }
                                }
                                if (Dn.nd = Qa, Dn.Qb = 0, Qa && (Dn.qb = (Oi[3][Bi[3] + 0].value << 24 | Oi[1][Bi[1] + 0].value << 16 | Oi[2][Bi[2] + 0].value) >>> 0, 
                                iu == 0 && 256 > Oi[0][Bi[0] + 0].value && (Dn.Qb = 1, 
                                Dn.qb += Oi[0][Bi[0] + 0].value << 8)), Dn.jc = !Dn.Qb && 6 > au, 
                                Dn.jc) {
                                    var ao, dr = Dn;
                                    for (ao = 0; ao < tr; ++ao) {
                                        var Br = ao, Mr = dr.pd[Br], oo = dr.G[0][dr.H[0] + Br];
                                        256 <= oo.value ? (Mr.g = oo.g + 256, Mr.value = oo.value) : (Mr.g = 0, 
                                        Mr.value = 0, Br >>= He(oo, 8, Mr), Br >>= He(dr.G[1][dr.H[1] + Br], 16, Mr), 
                                        Br >>= He(dr.G[2][dr.H[2] + Br], 0, Mr), 
                                        He(dr.G[3][dr.H[3] + Br], 24, Mr));
                                    }
                                }
                            }
                            Ge.vc = $e, Ge.Wb = ln, Ge.Ya = $a, Ge.yc = us, Le = 1;
                            break e;
                        }
                        Le = 0;
                    }
                    if (!(w = Le)) {
                        d.a = 3;
                        break t;
                    }
                    if (0 < K) {
                        if (C.ua = 1 << K, !zt(C.Wa, K)) {
                            d.a = 1, w = 0;
                            break t;
                        }
                    } else C.ua = 0;
                    var gs = d, mu = N, Y1 = x, ms = gs.s, vs = ms.xc;
                    if (gs.c = mu, gs.i = Y1, ms.md = Bt(mu, vs), ms.wc = vs == 0 ? -1 : (1 << vs) - 1, 
                    u) {
                        d.xb = A1;
                        break t;
                    }
                    if ((z = o(N * x)) == null) {
                        d.a = 1, w = 0;
                        break t;
                    }
                    w = (w = Bn(d, z, 0, N, x, x, null)) && !_.h;
                    break t;
                }
                return w ? (v != null ? v[0] = z : (e(z == null), e(u)), d.$ = 0, 
                u || Jn(C)) : Jn(C), w;
            }
            function Hr(t, r) {
                var u = t.c * t.i, d = u + r + 16 * r;
                return e(t.c <= r), t.V = o(d), t.V == null ? (t.Ta = null, t.Ua = 0, 
                t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + u + r, 1);
            }
            function hi(t, r) {
                var u = t.C, d = r - u, v = t.V, w = t.Ba + t.c * u;
                for (e(r <= t.l.o); 0 < d; ) {
                    var N = 16 < d ? 16 : d, x = t.l.ma, _ = t.l.width, C = _ * N, z = x.ca, K = x.tb + _ * u, $ = t.Ta, Y = t.Ua;
                    vn(t, N, v, w), qc($, Y, z, K, C), jn(x, u, u + N, z, K, _), 
                    d -= N, v += N * t.c, u += N;
                }
                e(u == r), t.C = t.Ma = r;
            }
            function fi() {
                this.ub = this.yd = this.td = this.Rb = 0;
            }
            function di() {
                this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
            }
            function pi() {
                this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4);
            }
            function Aa() {
                this.Yb = function() {
                    var t = [];
                    return function r(u, d, v) {
                        for (var w = v[d], N = 0; N < w && (u.push(v.length > d + 1 ? [] : 0), 
                        !(v.length < d + 1)); N++) r(u[N], d + 1, v);
                    }(t, 0, [ 3, 11 ]), t;
                }();
            }
            function _a() {
                this.jb = o(3), this.Wc = h([ 4, 8 ], Aa), this.Xc = h([ 4, 17 ], Aa);
            }
            function Bo() {
                this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4);
            }
            function Wr() {
                this.ld = this.La = this.dd = this.tc = 0;
            }
            function Ui() {
                this.Na = this.la = 0;
            }
            function or() {
                this.Sc = [ 0, 0 ], this.Eb = [ 0, 0 ], this.Qc = [ 0, 0 ], this.ia = this.lc = 0;
            }
            function gi() {
                this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
            }
            function Sa() {
                this.uc = this.M = this.Nb = 0, this.wa = Array(new Wr()), this.Y = 0, 
                this.ya = Array(new gi()), this.aa = 0, this.l = new mi();
            }
            function Pa() {
                this.y = o(16), this.f = o(8), this.ea = o(8);
            }
            function ka() {
                this.cb = this.a = 0, this.sc = "", this.m = new Ct(), this.Od = new fi(), 
                this.Kc = new di(), this.ed = new Bo(), this.Qa = new pi(), this.Ic = this.$c = this.Aa = 0, 
                this.D = new Sa(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, 
                this.Jc = l(8, Ct), this.ia = 0, this.pb = l(4, or), this.Pa = new _a(), 
                this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [ 0, 0, 0, 0 ], 
                this.Gd = Array(new Pa()), this.Hd = 0, this.rb = Array(new Ui()), 
                this.sb = 0, this.wa = Array(new Wr()), this.Y = 0, this.oc = [], 
                this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, 
                this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, 
                this.ya = Array(new gi()), this.L = this.aa = 0, this.gd = h([ 4, 2 ], Wr), 
                this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], 
                this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
            }
            function mi() {
                this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], 
                this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, 
                this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", 
                this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], 
                this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, 
                this.F = [], this.J = 0;
            }
            function Fa() {
                var t = new ka();
                return t != null && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ra || (ra = Mo)), 
                t;
            }
            function Ee(t, r, u) {
                return t.a == 0 && (t.a = r, t.sc = u, t.cb = 0), 0;
            }
            function Ia(t, r, u) {
                return 3 <= u && t[r + 0] == 157 && t[r + 1] == 1 && t[r + 2] == 42;
            }
            function Ca(t, r) {
                if (t == null) return 0;
                if (t.a = 0, t.sc = "OK", r == null) return Ee(t, 2, "null VP8Io passed to VP8GetHeaders()");
                var u = r.data, d = r.w, v = r.ha;
                if (4 > v) return Ee(t, 7, "Truncated header.");
                var w = u[d + 0] | u[d + 1] << 8 | u[d + 2] << 16, N = t.Od;
                if (N.Rb = !(1 & w), N.td = w >> 1 & 7, N.yd = w >> 4 & 1, N.ub = w >> 5, 
                3 < N.td) return Ee(t, 3, "Incorrect keyframe parameters.");
                if (!N.yd) return Ee(t, 4, "Frame not displayable.");
                d += 3, v -= 3;
                var x = t.Kc;
                if (N.Rb) {
                    if (7 > v) return Ee(t, 7, "cannot parse picture header");
                    if (!Ia(u, d, v)) return Ee(t, 3, "Bad code word");
                    x.c = 16383 & (u[d + 4] << 8 | u[d + 3]), x.Td = u[d + 4] >> 6, 
                    x.i = 16383 & (u[d + 6] << 8 | u[d + 5]), x.Ud = u[d + 6] >> 6, 
                    d += 7, v -= 7, t.za = x.c + 15 >> 4, t.Ub = x.i + 15 >> 4, 
                    r.width = x.c, r.height = x.i, r.Da = 0, r.j = 0, r.v = 0, r.va = r.width, 
                    r.o = r.height, r.da = 0, r.ib = r.width, r.hb = r.height, r.U = r.width, 
                    r.T = r.height, s((w = t.Pa).jb, 0, 255, w.jb.length), e((w = t.Qa) != null), 
                    w.Cb = 0, w.Bb = 0, w.Fb = 1, s(w.Zb, 0, 0, w.Zb.length), s(w.Lb, 0, 0, w.Lb);
                }
                if (N.ub > v) return Ee(t, 7, "bad partition length");
                at(w = t.m, u, d, N.ub), d += N.ub, v -= N.ub, N.Rb && (x.Ld = et(w), 
                x.Kd = et(w)), x = t.Qa;
                var _, C = t.Pa;
                if (e(w != null), e(x != null), x.Cb = et(w), x.Cb) {
                    if (x.Bb = et(w), et(w)) {
                        for (x.Fb = et(w), _ = 0; 4 > _; ++_) x.Zb[_] = et(w) ? pt(w, 7) : 0;
                        for (_ = 0; 4 > _; ++_) x.Lb[_] = et(w) ? pt(w, 6) : 0;
                    }
                    if (x.Bb) for (_ = 0; 3 > _; ++_) C.jb[_] = et(w) ? rt(w, 8) : 255;
                } else x.Bb = 0;
                if (w.Ka) return Ee(t, 3, "cannot parse segment header");
                if ((x = t.ed).zd = et(w), x.Tb = rt(w, 6), x.wb = rt(w, 3), x.Pc = et(w), 
                x.Pc && et(w)) {
                    for (C = 0; 4 > C; ++C) et(w) && (x.vd[C] = pt(w, 6));
                    for (C = 0; 4 > C; ++C) et(w) && (x.od[C] = pt(w, 6));
                }
                if (t.L = x.Tb == 0 ? 0 : x.zd ? 1 : 2, w.Ka) return Ee(t, 3, "cannot parse filter header");
                var z = v;
                if (v = _ = d, d = _ + z, x = z, t.Xb = (1 << rt(t.m, 2)) - 1, z < 3 * (C = t.Xb)) u = 7; else {
                    for (_ += 3 * C, x -= 3 * C, z = 0; z < C; ++z) {
                        var K = u[v + 0] | u[v + 1] << 8 | u[v + 2] << 16;
                        K > x && (K = x), at(t.Jc[+z], u, _, K), _ += K, x -= K, 
                        v += 3;
                    }
                    at(t.Jc[+C], u, _, x), u = _ < d ? 0 : 5;
                }
                if (u != 0) return Ee(t, u, "cannot parse partitions");
                for (u = rt(_ = t.m, 7), v = et(_) ? pt(_, 4) : 0, d = et(_) ? pt(_, 4) : 0, 
                x = et(_) ? pt(_, 4) : 0, C = et(_) ? pt(_, 4) : 0, _ = et(_) ? pt(_, 4) : 0, 
                z = t.Qa, K = 0; 4 > K; ++K) {
                    if (z.Cb) {
                        var $ = z.Zb[K];
                        z.Fb || ($ += u);
                    } else {
                        if (0 < K) {
                            t.pb[K] = t.pb[0];
                            continue;
                        }
                        $ = u;
                    }
                    var Y = t.pb[K];
                    Y.Sc[0] = os[Mn($ + v, 127)], Y.Sc[1] = ss[Mn($ + 0, 127)], 
                    Y.Eb[0] = 2 * os[Mn($ + d, 127)], Y.Eb[1] = 101581 * ss[Mn($ + x, 127)] >> 16, 
                    8 > Y.Eb[1] && (Y.Eb[1] = 8), Y.Qc[0] = os[Mn($ + C, 117)], 
                    Y.Qc[1] = ss[Mn($ + _, 127)], Y.lc = $ + _;
                }
                if (!N.Rb) return Ee(t, 4, "Not a key frame.");
                for (et(w), N = t.Pa, u = 0; 4 > u; ++u) {
                    for (v = 0; 8 > v; ++v) for (d = 0; 3 > d; ++d) for (x = 0; 11 > x; ++x) C = nt(w, N1[u][v][d][x]) ? rt(w, 8) : w1[u][v][d][x], 
                    N.Wc[u][v].Yb[d][x] = C;
                    for (v = 0; 17 > v; ++v) N.Xc[u][v] = N.Wc[u][x1[v]];
                }
                return t.kc = et(w), t.kc && (t.Bd = rt(w, 8)), t.cb = 1;
            }
            function Mo(t, r, u, d, v, w, N) {
                var x = r[v].Yb[u];
                for (u = 0; 16 > v; ++v) {
                    if (!nt(t, x[u + 0])) return v;
                    for (;!nt(t, x[u + 1]); ) if (x = r[++v].Yb[0], u = 0, v == 16) return 16;
                    var _ = r[v + 1].Yb;
                    if (nt(t, x[u + 2])) {
                        var C = t, z = 0;
                        if (nt(C, ($ = x)[(K = u) + 3])) if (nt(C, $[K + 6])) {
                            for (x = 0, K = 2 * (z = nt(C, $[K + 8])) + ($ = nt(C, $[K + 9 + z])), 
                            z = 0, $ = b1[K]; $[x]; ++x) z += z + nt(C, $[x]);
                            z += 3 + (8 << K);
                        } else nt(C, $[K + 7]) ? (z = 7 + 2 * nt(C, 165), z += nt(C, 145)) : z = 5 + nt(C, 159); else z = nt(C, $[K + 4]) ? 3 + nt(C, $[K + 5]) : 2;
                        x = _[2];
                    } else z = 1, x = _[1];
                    _ = N + y1[v], 0 > (C = t).b && tt(C);
                    var K, $ = C.b, Y = (K = C.Ca >> 1) - (C.I >> $) >> 31;
                    --C.b, C.Ca += Y, C.Ca |= 1, C.I -= (K + 1 & Y) << $, w[_] = ((z ^ Y) - Y) * d[(0 < v) + 0];
                }
                return 16;
            }
            function ja(t) {
                var r = t.rb[t.sb - 1];
                r.la = 0, r.Na = 0, s(t.zc, 0, 0, t.zc.length), t.ja = 0;
            }
            function sr(t, r) {
                if (t == null) return 0;
                if (r == null) return Ee(t, 2, "NULL VP8Io parameter in VP8Decode().");
                if (!t.cb && !Ca(t, r)) return 0;
                if (e(t.cb), r.ac == null || r.ac(r)) {
                    r.ob && (t.L = 0);
                    var u = Ka[t.L];
                    if (t.L == 2 ? (t.yb = 0, t.zb = 0) : (t.yb = r.v - u >> 4, 
                    t.zb = r.j - u >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), 
                    t.Va = r.o + 15 + u >> 4, t.Hb = r.va + 15 + u >> 4, t.Hb > t.za && (t.Hb = t.za), 
                    t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
                        var d = t.ed;
                        for (u = 0; 4 > u; ++u) {
                            var v;
                            if (t.Qa.Cb) {
                                var w = t.Qa.Lb[u];
                                t.Qa.Fb || (w += d.Tb);
                            } else w = d.Tb;
                            for (v = 0; 1 >= v; ++v) {
                                var N = t.gd[u][v], x = w;
                                if (d.Pc && (x += d.vd[0], v && (x += d.od[0])), 
                                0 < (x = 0 > x ? 0 : 63 < x ? 63 : x)) {
                                    var _ = x;
                                    0 < d.wb && (_ = 4 < d.wb ? _ >> 2 : _ >> 1) > 9 - d.wb && (_ = 9 - d.wb), 
                                    1 > _ && (_ = 1), N.dd = _, N.tc = 2 * x + _, 
                                    N.ld = 40 <= x ? 2 : 15 <= x ? 1 : 0;
                                } else N.tc = 0;
                                N.La = v;
                            }
                        }
                    }
                    u = 0;
                } else Ee(t, 6, "Frame setup failed"), u = t.a;
                if (u = u == 0) {
                    if (u) {
                        t.$c = 0, 0 < t.Aa || (t.Ic = E1);
                        t: {
                            u = t.Ic, d = 4 * (_ = t.za);
                            var C = 32 * _, z = _ + 1, K = 0 < t.L ? _ * (0 < t.Aa ? 2 : 1) : 0, $ = (t.Aa == 2 ? 2 : 1) * _;
                            if ((N = d + 832 + (v = 3 * (16 * u + Ka[t.L]) / 2 * C) + (w = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != N) u = 0; else {
                                if (N > t.Vb) {
                                    if (t.Vb = 0, t.Ec = o(N), t.Fc = 0, t.Ec == null) {
                                        u = Ee(t, 1, "no memory during frame initialization.");
                                        break t;
                                    }
                                    t.Vb = N;
                                }
                                N = t.Ec, x = t.Fc, t.Ac = N, t.Bc = x, x += d, 
                                t.Gd = l(C, Pa), t.Hd = 0, t.rb = l(z + 1, Ui), 
                                t.sb = 1, t.wa = K ? l(K, Wr) : null, t.Y = 0, t.D.Nb = 0, 
                                t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += _), 
                                e(!0), t.oc = N, t.pc = x, x += 832, t.ya = l($, gi), 
                                t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, t.Aa == 2 && (t.D.aa += _), 
                                t.R = 16 * _, t.B = 8 * _, _ = (C = Ka[t.L]) * t.R, 
                                C = C / 2 * t.B, t.sa = N, t.ta = x + _, t.qa = t.sa, 
                                t.ra = t.ta + 16 * u * t.R + C, t.Ha = t.qa, t.Ia = t.ra + 8 * u * t.B + C, 
                                t.$c = 0, x += v, t.mb = w ? N : null, t.nb = w ? x : null, 
                                e(x + w <= t.Fc + t.Vb), ja(t), s(t.Ac, t.Bc, 0, d), 
                                u = 1;
                            }
                        }
                        if (u) {
                            if (r.ka = 0, r.y = t.sa, r.O = t.ta, r.f = t.qa, r.N = t.ra, 
                            r.ea = t.Ha, r.Vd = t.Ia, r.fa = t.R, r.Rc = t.B, r.F = null, 
                            r.J = 0, !Uc) {
                                for (u = -255; 255 >= u; ++u) Rc[255 + u] = 0 > u ? -u : u;
                                for (u = -1020; 1020 >= u; ++u) Tc[1020 + u] = -128 > u ? -128 : 127 < u ? 127 : u;
                                for (u = -112; 112 >= u; ++u) Dc[112 + u] = -16 > u ? -16 : 15 < u ? 15 : u;
                                for (u = -255; 510 >= u; ++u) zc[255 + u] = 0 > u ? 0 : 255 < u ? 255 : u;
                                Uc = 1;
                            }
                            Da = Ba, za = Eo, Qo = qo, Ci = Ro, ts = Kn, Nc = Oa, 
                            xc = Ki, Ac = c, _c = D, Sc = J, Pc = g, kc = B, Fc = ut, 
                            Ic = bt, Cc = Ni, jc = Ji, Oc = xi, Bc = Xi, Tn[0] = Vo, 
                            Tn[1] = yi, Tn[2] = Ho, Tn[3] = Wo, Tn[4] = Go, Tn[5] = wr, 
                            Tn[6] = Yo, Tn[7] = Lr, Tn[8] = Xo, Tn[9] = Jo, Fr[0] = Ma, 
                            Fr[1] = To, Fr[2] = Do, Fr[3] = zo, Fr[4] = yr, Fr[5] = Uo, 
                            Fr[6] = Vr, hr[0] = Ko, hr[1] = Hi, hr[2] = wi, hr[3] = Wi, 
                            hr[4] = $o, hr[5] = Li, hr[6] = Vi, u = 1;
                        } else u = 0;
                    }
                    u && (u = function(Y, dt) {
                        for (Y.M = 0; Y.M < Y.Va; ++Y.M) {
                            var it, H = Y.Jc[Y.M & Y.Xb], V = Y.m, ht = Y;
                            for (it = 0; it < ht.za; ++it) {
                                var gt = V, ft = ht, It = ft.Ac, xt = ft.Bc + 4 * it, Dt = ft.zc, Pt = ft.ya[ft.aa + it];
                                if (ft.Qa.Bb ? Pt.$b = nt(gt, ft.Pa.jb[0]) ? 2 + nt(gt, ft.Pa.jb[2]) : nt(gt, ft.Pa.jb[1]) : Pt.$b = 0, 
                                ft.kc && (Pt.Ad = nt(gt, ft.Bd)), Pt.Za = !nt(gt, 145) + 0, 
                                Pt.Za) {
                                    var he = Pt.Ob, pe = 0;
                                    for (ft = 0; 4 > ft; ++ft) {
                                        var ce, ie = Dt[0 + ft];
                                        for (ce = 0; 4 > ce; ++ce) {
                                            ie = L1[It[xt + ce]][ie];
                                            for (var Le = Gc[nt(gt, ie[0])]; 0 < Le; ) Le = Gc[2 * Le + nt(gt, ie[Le])];
                                            ie = -Le, It[xt + ce] = ie;
                                        }
                                        a(he, pe, It, xt, 4), pe += 4, Dt[0 + ft] = ie;
                                    }
                                } else ie = nt(gt, 156) ? nt(gt, 128) ? 1 : 3 : nt(gt, 163) ? 2 : 0, 
                                Pt.Ob[0] = ie, s(It, xt, ie, 4), s(Dt, 0, ie, 4);
                                Pt.Dd = nt(gt, 142) ? nt(gt, 114) ? nt(gt, 183) ? 1 : 3 : 2 : 0;
                            }
                            if (ht.m.Ka) return Ee(Y, 7, "Premature end-of-partition0 encountered.");
                            for (;Y.ja < Y.za; ++Y.ja) {
                                if (ht = H, gt = (V = Y).rb[V.sb - 1], It = V.rb[V.sb + V.ja], 
                                it = V.ya[V.aa + V.ja], xt = V.kc ? it.Ad : 0) gt.la = It.la = 0, 
                                it.Za || (gt.Na = It.Na = 0), it.Hc = 0, it.Gc = 0, 
                                it.ia = 0; else {
                                    var be, Qt;
                                    if (gt = It, It = ht, xt = V.Pa.Xc, Dt = V.ya[V.aa + V.ja], 
                                    Pt = V.pb[Dt.$b], ft = Dt.ad, he = 0, pe = V.rb[V.sb - 1], 
                                    ie = ce = 0, s(ft, he, 0, 384), Dt.Za) var Te = 0, gn = xt[3]; else {
                                        Le = o(16);
                                        var De = gt.Na + pe.Na;
                                        if (De = ra(It, xt[1], De, Pt.Eb, 0, Le, 0), 
                                        gt.Na = pe.Na = (0 < De) + 0, 1 < De) Da(Le, 0, ft, he); else {
                                            var mn = Le[0] + 3 >> 3;
                                            for (Le = 0; 256 > Le; Le += 16) ft[he + Le] = mn;
                                        }
                                        Te = 1, gn = xt[0];
                                    }
                                    var ge = 15 & gt.la, wn = 15 & pe.la;
                                    for (Le = 0; 4 > Le; ++Le) {
                                        var Ln = 1 & wn;
                                        for (mn = Qt = 0; 4 > mn; ++mn) ge = ge >> 1 | (Ln = (De = ra(It, gn, De = Ln + (1 & ge), Pt.Sc, Te, ft, he)) > Te) << 7, 
                                        Qt = Qt << 2 | (3 < De ? 3 : 1 < De ? 2 : ft[he + 0] != 0), 
                                        he += 16;
                                        ge >>= 4, wn = wn >> 1 | Ln << 7, ce = (ce << 8 | Qt) >>> 0;
                                    }
                                    for (gn = ge, Te = wn >> 4, be = 0; 4 > be; be += 2) {
                                        for (Qt = 0, ge = gt.la >> 4 + be, wn = pe.la >> 4 + be, 
                                        Le = 0; 2 > Le; ++Le) {
                                            for (Ln = 1 & wn, mn = 0; 2 > mn; ++mn) De = Ln + (1 & ge), 
                                            ge = ge >> 1 | (Ln = 0 < (De = ra(It, xt[2], De, Pt.Qc, 0, ft, he))) << 3, 
                                            Qt = Qt << 2 | (3 < De ? 3 : 1 < De ? 2 : ft[he + 0] != 0), 
                                            he += 16;
                                            ge >>= 2, wn = wn >> 1 | Ln << 5;
                                        }
                                        ie |= Qt << 4 * be, gn |= ge << 4 << be, 
                                        Te |= (240 & wn) << be;
                                    }
                                    gt.la = gn, pe.la = Te, Dt.Hc = ce, Dt.Gc = ie, 
                                    Dt.ia = 43690 & ie ? 0 : Pt.ia, xt = !(ce | ie);
                                }
                                if (0 < V.L && (V.wa[V.Y + V.ja] = V.gd[it.$b][it.Za], 
                                V.wa[V.Y + V.ja].La |= !xt), ht.Ka) return Ee(Y, 7, "Premature end-of-file encountered.");
                            }
                            if (ja(Y), V = dt, ht = 1, it = (H = Y).D, gt = 0 < H.L && H.M >= H.zb && H.M <= H.Va, 
                            H.Aa == 0) t: {
                                if (it.M = H.M, it.uc = gt, Ra(H, it), ht = 1, it = (Qt = H.D).Nb, 
                                gt = (ie = Ka[H.L]) * H.R, It = ie / 2 * H.B, Le = 16 * it * H.R, 
                                mn = 8 * it * H.B, xt = H.sa, Dt = H.ta - gt + Le, 
                                Pt = H.qa, ft = H.ra - It + mn, he = H.Ha, pe = H.Ia - It + mn, 
                                wn = (ge = Qt.M) == 0, ce = ge >= H.Va - 1, H.Aa == 2 && Ra(H, Qt), 
                                Qt.uc) for (Ln = (De = H).D.M, e(De.D.uc), Qt = De.yb; Qt < De.Hb; ++Qt) {
                                    Te = Qt, gn = Ln;
                                    var Ge = ($e = (Fe = De).D).Nb;
                                    be = Fe.R;
                                    var $e = $e.wa[$e.Y + Te], ln = Fe.sa, Sn = Fe.ta + 16 * Ge * be + 16 * Te, nr = $e.dd, Ye = $e.tc;
                                    if (Ye != 0) if (e(3 <= Ye), Fe.L == 1) 0 < Te && jc(ln, Sn, be, Ye + 4), 
                                    $e.La && Bc(ln, Sn, be, Ye), 0 < gn && Cc(ln, Sn, be, Ye + 4), 
                                    $e.La && Oc(ln, Sn, be, Ye); else {
                                        var fr = Fe.B, Qr = Fe.qa, ji = Fe.ra + 8 * Ge * fr + 8 * Te, Cr = Fe.Ha, Fe = Fe.Ia + 8 * Ge * fr + 8 * Te;
                                        Ge = $e.ld, 0 < Te && (Ac(ln, Sn, be, Ye + 4, nr, Ge), 
                                        Sc(Qr, ji, Cr, Fe, fr, Ye + 4, nr, Ge)), 
                                        $e.La && (kc(ln, Sn, be, Ye, nr, Ge), Ic(Qr, ji, Cr, Fe, fr, Ye, nr, Ge)), 
                                        0 < gn && (xc(ln, Sn, be, Ye + 4, nr, Ge), 
                                        _c(Qr, ji, Cr, Fe, fr, Ye + 4, nr, Ge)), 
                                        $e.La && (Pc(ln, Sn, be, Ye, nr, Ge), Fc(Qr, ji, Cr, Fe, fr, Ye, nr, Ge));
                                    }
                                }
                                if (H.ia && alert("todo:DitherRow"), V.put != null) {
                                    if (Qt = 16 * ge, ge = 16 * (ge + 1), wn ? (V.y = H.sa, 
                                    V.O = H.ta + Le, V.f = H.qa, V.N = H.ra + mn, 
                                    V.ea = H.Ha, V.W = H.Ia + mn) : (Qt -= ie, V.y = xt, 
                                    V.O = Dt, V.f = Pt, V.N = ft, V.ea = he, V.W = pe), 
                                    ce || (ge -= ie), ge > V.o && (ge = V.o), V.F = null, 
                                    V.J = null, H.Fa != null && 0 < H.Fa.length && Qt < ge && (V.J = qe(H, V, Qt, ge - Qt), 
                                    V.F = H.mb, V.F == null && V.F.length == 0)) {
                                        ht = Ee(H, 3, "Could not decode alpha data.");
                                        break t;
                                    }
                                    Qt < V.j && (ie = V.j - Qt, Qt = V.j, e(!(1 & ie)), 
                                    V.O += H.R * ie, V.N += H.B * (ie >> 1), V.W += H.B * (ie >> 1), 
                                    V.F != null && (V.J += V.width * ie)), Qt < ge && (V.O += V.v, 
                                    V.N += V.v >> 1, V.W += V.v >> 1, V.F != null && (V.J += V.v), 
                                    V.ka = Qt - V.j, V.U = V.va - V.v, V.T = ge - Qt, 
                                    ht = V.put(V));
                                }
                                it + 1 != H.Ic || ce || (a(H.sa, H.ta - gt, xt, Dt + 16 * H.R, gt), 
                                a(H.qa, H.ra - It, Pt, ft + 8 * H.B, It), a(H.Ha, H.Ia - It, he, pe + 8 * H.B, It));
                            }
                            if (!ht) return Ee(Y, 6, "Output aborted.");
                        }
                        return 1;
                    }(t, r)), r.bc != null && r.bc(r), u &= 1;
                }
                return u ? (t.cb = 0, u) : 0;
            }
            function pn(t, r, u, d, v) {
                v = t[r + u + 32 * d] + (v >> 3), t[r + u + 32 * d] = -256 & v ? 0 > v ? 0 : 255 : v;
            }
            function vi(t, r, u, d, v, w) {
                pn(t, r, 0, u, d + v), pn(t, r, 1, u, d + w), pn(t, r, 2, u, d - w), 
                pn(t, r, 3, u, d - v);
            }
            function cr(t) {
                return (20091 * t >> 16) + t;
            }
            function Xe(t, r, u, d) {
                var v, w = 0, N = o(16);
                for (v = 0; 4 > v; ++v) {
                    var x = t[r + 0] + t[r + 8], _ = t[r + 0] - t[r + 8], C = (35468 * t[r + 4] >> 16) - cr(t[r + 12]), z = cr(t[r + 4]) + (35468 * t[r + 12] >> 16);
                    N[w + 0] = x + z, N[w + 1] = _ + C, N[w + 2] = _ - C, N[w + 3] = x - z, 
                    w += 4, r++;
                }
                for (v = w = 0; 4 > v; ++v) x = (t = N[w + 0] + 4) + N[w + 8], _ = t - N[w + 8], 
                C = (35468 * N[w + 4] >> 16) - cr(N[w + 12]), pn(u, d, 0, 0, x + (z = cr(N[w + 4]) + (35468 * N[w + 12] >> 16))), 
                pn(u, d, 1, 0, _ + C), pn(u, d, 2, 0, _ - C), pn(u, d, 3, 0, x - z), 
                w++, d += 32;
            }
            function Oa(t, r, u, d) {
                var v = t[r + 0] + 4, w = 35468 * t[r + 4] >> 16, N = cr(t[r + 4]), x = 35468 * t[r + 1] >> 16;
                vi(u, d, 0, v + N, t = cr(t[r + 1]), x), vi(u, d, 1, v + w, t, x), 
                vi(u, d, 2, v - w, t, x), vi(u, d, 3, v - N, t, x);
            }
            function Eo(t, r, u, d, v) {
                Xe(t, r, u, d), v && Xe(t, r + 16, u, d + 4);
            }
            function qo(t, r, u, d) {
                za(t, r + 0, u, d, 1), za(t, r + 32, u, d + 128, 1);
            }
            function Ro(t, r, u, d) {
                var v;
                for (t = t[r + 0] + 4, v = 0; 4 > v; ++v) for (r = 0; 4 > r; ++r) pn(u, d, r, v, t);
            }
            function Kn(t, r, u, d) {
                t[r + 0] && Ci(t, r + 0, u, d), t[r + 16] && Ci(t, r + 16, u, d + 4), 
                t[r + 32] && Ci(t, r + 32, u, d + 128), t[r + 48] && Ci(t, r + 48, u, d + 128 + 4);
            }
            function Ba(t, r, u, d) {
                var v, w = o(16);
                for (v = 0; 4 > v; ++v) {
                    var N = t[r + 0 + v] + t[r + 12 + v], x = t[r + 4 + v] + t[r + 8 + v], _ = t[r + 4 + v] - t[r + 8 + v], C = t[r + 0 + v] - t[r + 12 + v];
                    w[0 + v] = N + x, w[8 + v] = N - x, w[4 + v] = C + _, w[12 + v] = C - _;
                }
                for (v = 0; 4 > v; ++v) N = (t = w[0 + 4 * v] + 3) + w[3 + 4 * v], 
                x = w[1 + 4 * v] + w[2 + 4 * v], _ = w[1 + 4 * v] - w[2 + 4 * v], 
                C = t - w[3 + 4 * v], u[d + 0] = N + x >> 3, u[d + 16] = C + _ >> 3, 
                u[d + 32] = N - x >> 3, u[d + 48] = C - _ >> 3, d += 64;
            }
            function bi(t, r, u) {
                var d, v = r - 32, w = yn, N = 255 - t[v - 1];
                for (d = 0; d < u; ++d) {
                    var x, _ = w, C = N + t[r - 1];
                    for (x = 0; x < u; ++x) t[r + x] = _[C + t[v + x]];
                    r += 32;
                }
            }
            function yi(t, r) {
                bi(t, r, 4);
            }
            function Hi(t, r) {
                bi(t, r, 8);
            }
            function To(t, r) {
                bi(t, r, 16);
            }
            function Do(t, r) {
                var u;
                for (u = 0; 16 > u; ++u) a(t, r + 32 * u, t, r - 32, 16);
            }
            function zo(t, r) {
                var u;
                for (u = 16; 0 < u; --u) s(t, r, t[r - 1], 16), r += 32;
            }
            function br(t, r, u) {
                var d;
                for (d = 0; 16 > d; ++d) s(r, u + 32 * d, t, 16);
            }
            function Ma(t, r) {
                var u, d = 16;
                for (u = 0; 16 > u; ++u) d += t[r - 1 + 32 * u] + t[r + u - 32];
                br(d >> 5, t, r);
            }
            function yr(t, r) {
                var u, d = 8;
                for (u = 0; 16 > u; ++u) d += t[r - 1 + 32 * u];
                br(d >> 4, t, r);
            }
            function Uo(t, r) {
                var u, d = 8;
                for (u = 0; 16 > u; ++u) d += t[r + u - 32];
                br(d >> 4, t, r);
            }
            function Vr(t, r) {
                br(128, t, r);
            }
            function Yt(t, r, u) {
                return t + 2 * r + u + 2 >> 2;
            }
            function Ho(t, r) {
                var u, d = r - 32;
                for (d = new Uint8Array([ Yt(t[d - 1], t[d + 0], t[d + 1]), Yt(t[d + 0], t[d + 1], t[d + 2]), Yt(t[d + 1], t[d + 2], t[d + 3]), Yt(t[d + 2], t[d + 3], t[d + 4]) ]), 
                u = 0; 4 > u; ++u) a(t, r + 32 * u, d, 0, d.length);
            }
            function Wo(t, r) {
                var u = t[r - 1], d = t[r - 1 + 32], v = t[r - 1 + 64], w = t[r - 1 + 96];
                wt(t, r + 0, 16843009 * Yt(t[r - 1 - 32], u, d)), wt(t, r + 32, 16843009 * Yt(u, d, v)), 
                wt(t, r + 64, 16843009 * Yt(d, v, w)), wt(t, r + 96, 16843009 * Yt(v, w, w));
            }
            function Vo(t, r) {
                var u, d = 4;
                for (u = 0; 4 > u; ++u) d += t[r + u - 32] + t[r - 1 + 32 * u];
                for (d >>= 3, u = 0; 4 > u; ++u) s(t, r + 32 * u, d, 4);
            }
            function Go(t, r) {
                var u = t[r - 1 + 0], d = t[r - 1 + 32], v = t[r - 1 + 64], w = t[r - 1 - 32], N = t[r + 0 - 32], x = t[r + 1 - 32], _ = t[r + 2 - 32], C = t[r + 3 - 32];
                t[r + 0 + 96] = Yt(d, v, t[r - 1 + 96]), t[r + 1 + 96] = t[r + 0 + 64] = Yt(u, d, v), 
                t[r + 2 + 96] = t[r + 1 + 64] = t[r + 0 + 32] = Yt(w, u, d), t[r + 3 + 96] = t[r + 2 + 64] = t[r + 1 + 32] = t[r + 0 + 0] = Yt(N, w, u), 
                t[r + 3 + 64] = t[r + 2 + 32] = t[r + 1 + 0] = Yt(x, N, w), t[r + 3 + 32] = t[r + 2 + 0] = Yt(_, x, N), 
                t[r + 3 + 0] = Yt(C, _, x);
            }
            function Yo(t, r) {
                var u = t[r + 1 - 32], d = t[r + 2 - 32], v = t[r + 3 - 32], w = t[r + 4 - 32], N = t[r + 5 - 32], x = t[r + 6 - 32], _ = t[r + 7 - 32];
                t[r + 0 + 0] = Yt(t[r + 0 - 32], u, d), t[r + 1 + 0] = t[r + 0 + 32] = Yt(u, d, v), 
                t[r + 2 + 0] = t[r + 1 + 32] = t[r + 0 + 64] = Yt(d, v, w), t[r + 3 + 0] = t[r + 2 + 32] = t[r + 1 + 64] = t[r + 0 + 96] = Yt(v, w, N), 
                t[r + 3 + 32] = t[r + 2 + 64] = t[r + 1 + 96] = Yt(w, N, x), t[r + 3 + 64] = t[r + 2 + 96] = Yt(N, x, _), 
                t[r + 3 + 96] = Yt(x, _, _);
            }
            function wr(t, r) {
                var u = t[r - 1 + 0], d = t[r - 1 + 32], v = t[r - 1 + 64], w = t[r - 1 - 32], N = t[r + 0 - 32], x = t[r + 1 - 32], _ = t[r + 2 - 32], C = t[r + 3 - 32];
                t[r + 0 + 0] = t[r + 1 + 64] = w + N + 1 >> 1, t[r + 1 + 0] = t[r + 2 + 64] = N + x + 1 >> 1, 
                t[r + 2 + 0] = t[r + 3 + 64] = x + _ + 1 >> 1, t[r + 3 + 0] = _ + C + 1 >> 1, 
                t[r + 0 + 96] = Yt(v, d, u), t[r + 0 + 64] = Yt(d, u, w), t[r + 0 + 32] = t[r + 1 + 96] = Yt(u, w, N), 
                t[r + 1 + 32] = t[r + 2 + 96] = Yt(w, N, x), t[r + 2 + 32] = t[r + 3 + 96] = Yt(N, x, _), 
                t[r + 3 + 32] = Yt(x, _, C);
            }
            function Lr(t, r) {
                var u = t[r + 0 - 32], d = t[r + 1 - 32], v = t[r + 2 - 32], w = t[r + 3 - 32], N = t[r + 4 - 32], x = t[r + 5 - 32], _ = t[r + 6 - 32], C = t[r + 7 - 32];
                t[r + 0 + 0] = u + d + 1 >> 1, t[r + 1 + 0] = t[r + 0 + 64] = d + v + 1 >> 1, 
                t[r + 2 + 0] = t[r + 1 + 64] = v + w + 1 >> 1, t[r + 3 + 0] = t[r + 2 + 64] = w + N + 1 >> 1, 
                t[r + 0 + 32] = Yt(u, d, v), t[r + 1 + 32] = t[r + 0 + 96] = Yt(d, v, w), 
                t[r + 2 + 32] = t[r + 1 + 96] = Yt(v, w, N), t[r + 3 + 32] = t[r + 2 + 96] = Yt(w, N, x), 
                t[r + 3 + 64] = Yt(N, x, _), t[r + 3 + 96] = Yt(x, _, C);
            }
            function Jo(t, r) {
                var u = t[r - 1 + 0], d = t[r - 1 + 32], v = t[r - 1 + 64], w = t[r - 1 + 96];
                t[r + 0 + 0] = u + d + 1 >> 1, t[r + 2 + 0] = t[r + 0 + 32] = d + v + 1 >> 1, 
                t[r + 2 + 32] = t[r + 0 + 64] = v + w + 1 >> 1, t[r + 1 + 0] = Yt(u, d, v), 
                t[r + 3 + 0] = t[r + 1 + 32] = Yt(d, v, w), t[r + 3 + 32] = t[r + 1 + 64] = Yt(v, w, w), 
                t[r + 3 + 64] = t[r + 2 + 64] = t[r + 0 + 96] = t[r + 1 + 96] = t[r + 2 + 96] = t[r + 3 + 96] = w;
            }
            function Xo(t, r) {
                var u = t[r - 1 + 0], d = t[r - 1 + 32], v = t[r - 1 + 64], w = t[r - 1 + 96], N = t[r - 1 - 32], x = t[r + 0 - 32], _ = t[r + 1 - 32], C = t[r + 2 - 32];
                t[r + 0 + 0] = t[r + 2 + 32] = u + N + 1 >> 1, t[r + 0 + 32] = t[r + 2 + 64] = d + u + 1 >> 1, 
                t[r + 0 + 64] = t[r + 2 + 96] = v + d + 1 >> 1, t[r + 0 + 96] = w + v + 1 >> 1, 
                t[r + 3 + 0] = Yt(x, _, C), t[r + 2 + 0] = Yt(N, x, _), t[r + 1 + 0] = t[r + 3 + 32] = Yt(u, N, x), 
                t[r + 1 + 32] = t[r + 3 + 64] = Yt(d, u, N), t[r + 1 + 64] = t[r + 3 + 96] = Yt(v, d, u), 
                t[r + 1 + 96] = Yt(w, v, d);
            }
            function wi(t, r) {
                var u;
                for (u = 0; 8 > u; ++u) a(t, r + 32 * u, t, r - 32, 8);
            }
            function Wi(t, r) {
                var u;
                for (u = 0; 8 > u; ++u) s(t, r, t[r - 1], 8), r += 32;
            }
            function $n(t, r, u) {
                var d;
                for (d = 0; 8 > d; ++d) s(r, u + 32 * d, t, 8);
            }
            function Ko(t, r) {
                var u, d = 8;
                for (u = 0; 8 > u; ++u) d += t[r + u - 32] + t[r - 1 + 32 * u];
                $n(d >> 4, t, r);
            }
            function Li(t, r) {
                var u, d = 4;
                for (u = 0; 8 > u; ++u) d += t[r + u - 32];
                $n(d >> 3, t, r);
            }
            function $o(t, r) {
                var u, d = 4;
                for (u = 0; 8 > u; ++u) d += t[r - 1 + 32 * u];
                $n(d >> 3, t, r);
            }
            function Vi(t, r) {
                $n(128, t, r);
            }
            function Nr(t, r, u) {
                var d = t[r - u], v = t[r + 0], w = 3 * (v - d) + es[1020 + t[r - 2 * u] - t[r + u]], N = Ua[112 + (w + 4 >> 3)];
                t[r - u] = yn[255 + d + Ua[112 + (w + 3 >> 3)]], t[r + 0] = yn[255 + v - N];
            }
            function Gi(t, r, u, d) {
                var v = t[r + 0], w = t[r + u];
                return An[255 + t[r - 2 * u] - t[r - u]] > d || An[255 + w - v] > d;
            }
            function Gr(t, r, u, d) {
                return 4 * An[255 + t[r - u] - t[r + 0]] + An[255 + t[r - 2 * u] - t[r + u]] <= d;
            }
            function Yi(t, r, u, d, v) {
                var w = t[r - 3 * u], N = t[r - 2 * u], x = t[r - u], _ = t[r + 0], C = t[r + u], z = t[r + 2 * u], K = t[r + 3 * u];
                return 4 * An[255 + x - _] + An[255 + N - C] > d ? 0 : An[255 + t[r - 4 * u] - w] <= v && An[255 + w - N] <= v && An[255 + N - x] <= v && An[255 + K - z] <= v && An[255 + z - C] <= v && An[255 + C - _] <= v;
            }
            function Ni(t, r, u, d) {
                var v = 2 * d + 1;
                for (d = 0; 16 > d; ++d) Gr(t, r + d, u, v) && Nr(t, r + d, u);
            }
            function Ji(t, r, u, d) {
                var v = 2 * d + 1;
                for (d = 0; 16 > d; ++d) Gr(t, r + d * u, 1, v) && Nr(t, r + d * u, 1);
            }
            function xi(t, r, u, d) {
                var v;
                for (v = 3; 0 < v; --v) Ni(t, r += 4 * u, u, d);
            }
            function Xi(t, r, u, d) {
                var v;
                for (v = 3; 0 < v; --v) Ji(t, r += 4, u, d);
            }
            function Zn(t, r, u, d, v, w, N, x) {
                for (w = 2 * w + 1; 0 < v--; ) {
                    if (Yi(t, r, u, w, N)) if (Gi(t, r, u, x)) Nr(t, r, u); else {
                        var _ = t, C = r, z = u, K = _[C - 2 * z], $ = _[C - z], Y = _[C + 0], dt = _[C + z], it = _[C + 2 * z], H = 27 * (ht = es[1020 + 3 * (Y - $) + es[1020 + K - dt]]) + 63 >> 7, V = 18 * ht + 63 >> 7, ht = 9 * ht + 63 >> 7;
                        _[C - 3 * z] = yn[255 + _[C - 3 * z] + ht], _[C - 2 * z] = yn[255 + K + V], 
                        _[C - z] = yn[255 + $ + H], _[C + 0] = yn[255 + Y - H], 
                        _[C + z] = yn[255 + dt - V], _[C + 2 * z] = yn[255 + it - ht];
                    }
                    r += d;
                }
            }
            function bn(t, r, u, d, v, w, N, x) {
                for (w = 2 * w + 1; 0 < v--; ) {
                    if (Yi(t, r, u, w, N)) if (Gi(t, r, u, x)) Nr(t, r, u); else {
                        var _ = t, C = r, z = u, K = _[C - z], $ = _[C + 0], Y = _[C + z], dt = Ua[112 + (4 + (it = 3 * ($ - K)) >> 3)], it = Ua[112 + (it + 3 >> 3)], H = dt + 1 >> 1;
                        _[C - 2 * z] = yn[255 + _[C - 2 * z] + H], _[C - z] = yn[255 + K + it], 
                        _[C + 0] = yn[255 + $ - dt], _[C + z] = yn[255 + Y - H];
                    }
                    r += d;
                }
            }
            function Ki(t, r, u, d, v, w) {
                Zn(t, r, u, 1, 16, d, v, w);
            }
            function c(t, r, u, d, v, w) {
                Zn(t, r, 1, u, 16, d, v, w);
            }
            function g(t, r, u, d, v, w) {
                var N;
                for (N = 3; 0 < N; --N) bn(t, r += 4 * u, u, 1, 16, d, v, w);
            }
            function B(t, r, u, d, v, w) {
                var N;
                for (N = 3; 0 < N; --N) bn(t, r += 4, 1, u, 16, d, v, w);
            }
            function D(t, r, u, d, v, w, N, x) {
                Zn(t, r, v, 1, 8, w, N, x), Zn(u, d, v, 1, 8, w, N, x);
            }
            function J(t, r, u, d, v, w, N, x) {
                Zn(t, r, 1, v, 8, w, N, x), Zn(u, d, 1, v, 8, w, N, x);
            }
            function ut(t, r, u, d, v, w, N, x) {
                bn(t, r + 4 * v, v, 1, 8, w, N, x), bn(u, d + 4 * v, v, 1, 8, w, N, x);
            }
            function bt(t, r, u, d, v, w, N, x) {
                bn(t, r + 4, 1, v, 8, w, N, x), bn(u, d + 4, 1, v, 8, w, N, x);
            }
            function Ot() {
                this.ba = new dn(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, 
                this.Oa = new Kt(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", 
                this.Nd = "OutputRowFunc";
            }
            function Et() {
                this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], 
                this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
            }
            function Jt() {
                this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
            }
            function re() {
                this.ua = 0, this.Wa = new At(), this.vb = new At(), this.md = this.xc = this.wc = 0, 
                this.vc = [], this.Wb = 0, this.Ya = new T(), this.yc = new I();
            }
            function le() {
                this.xb = this.a = 0, this.l = new mi(), this.ca = new dn(), this.V = [], 
                this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new L(), this.Pb = 0, 
                this.wd = new L(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, 
                this.s = new re(), this.ab = 0, this.gc = l(4, Jt), this.Oc = 0;
            }
            function _e() {
                this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new mi(), 
                this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
            }
            function ke(t, r, u, d, v, w, N) {
                for (t = t == null ? 0 : t[r + 0], r = 0; r < N; ++r) v[w + r] = t + u[d + r] & 255, 
                t = v[w + r];
            }
            function Ne(t, r, u, d, v, w, N) {
                var x;
                if (t == null) ke(null, null, u, d, v, w, N); else for (x = 0; x < N; ++x) v[w + x] = t[r + x] + u[d + x] & 255;
            }
            function We(t, r, u, d, v, w, N) {
                if (t == null) ke(null, null, u, d, v, w, N); else {
                    var x, _ = t[r + 0], C = _, z = _;
                    for (x = 0; x < N; ++x) C = z + (_ = t[r + x]) - C, z = u[d + x] + (-256 & C ? 0 > C ? 0 : 255 : C) & 255, 
                    C = _, v[w + x] = z;
                }
            }
            function qe(t, r, u, d) {
                var v = r.width, w = r.o;
                if (e(t != null && r != null), 0 > u || 0 >= d || u + d > w) return null;
                if (!t.Cc) {
                    if (t.ga == null) {
                        var N;
                        if (t.ga = new _e(), (N = t.ga == null) || (N = r.width * r.o, 
                        e(t.Gb.length == 0), t.Gb = o(N), t.Uc = 0, t.Gb == null ? N = 0 : (t.mb = t.Gb, 
                        t.nb = t.Uc, t.rc = null, N = 1), N = !N), !N) {
                            N = t.ga;
                            var x = t.Fa, _ = t.P, C = t.qc, z = t.mb, K = t.nb, $ = _ + 1, Y = C - 1, dt = N.l;
                            if (e(x != null && z != null && r != null), Ir[0] = null, 
                            Ir[1] = ke, Ir[2] = Ne, Ir[3] = We, N.ca = z, N.tb = K, 
                            N.c = r.width, N.i = r.height, e(0 < N.c && 0 < N.i), 
                            1 >= C) r = 0; else if (N.$a = 3 & x[_ + 0], N.Z = x[_ + 0] >> 2 & 3, 
                            N.Lc = x[_ + 0] >> 4 & 3, _ = x[_ + 0] >> 6 & 3, 0 > N.$a || 1 < N.$a || 4 <= N.Z || 1 < N.Lc || _) r = 0; else if (dt.put = Gn, 
                            dt.ac = Vn, dt.bc = Ut, dt.ma = N, dt.width = r.width, 
                            dt.height = r.height, dt.Da = r.Da, dt.v = r.v, dt.va = r.va, 
                            dt.j = r.j, dt.o = r.o, N.$a) t: {
                                e(N.$a == 1), r = Nn();
                                e: for (;;) {
                                    if (r == null) {
                                        r = 0;
                                        break t;
                                    }
                                    if (e(N != null), N.mc = r, r.c = N.c, r.i = N.i, 
                                    r.l = N.l, r.l.ma = N, r.l.width = N.c, r.l.height = N.i, 
                                    r.a = 0, Q(r.m, x, $, Y), !Xn(N.c, N.i, 1, r, null) || (r.ab == 1 && r.gc[0].hc == 3 && ar(r.s) ? (N.ic = 1, 
                                    x = r.c * r.i, r.Ta = null, r.Ua = 0, r.V = o(x), 
                                    r.Ba = 0, r.V == null ? (r.a = 1, r = 0) : r = 1) : (N.ic = 0, 
                                    r = Hr(r, N.c)), !r)) break e;
                                    r = 1;
                                    break t;
                                }
                                N.mc = null, r = 0;
                            } else r = Y >= N.c * N.i;
                            N = !r;
                        }
                        if (N) return null;
                        t.ga.Lc != 1 ? t.Ga = 0 : d = w - u;
                    }
                    e(t.ga != null), e(u + d <= w);
                    t: {
                        if (r = (x = t.ga).c, w = x.l.o, x.$a == 0) {
                            if ($ = t.rc, Y = t.Vc, dt = t.Fa, _ = t.P + 1 + u * r, 
                            C = t.mb, z = t.nb + u * r, e(_ <= t.P + t.qc), x.Z != 0) for (e(Ir[x.Z] != null), 
                            N = 0; N < d; ++N) Ir[x.Z]($, Y, dt, _, C, z, r), $ = C, 
                            Y = z, z += r, _ += r; else for (N = 0; N < d; ++N) a(C, z, dt, _, r), 
                            $ = C, Y = z, z += r, _ += r;
                            t.rc = $, t.Vc = Y;
                        } else {
                            if (e(x.mc != null), r = u + d, e((N = x.mc) != null), 
                            e(r <= N.i), N.C >= r) r = 1; else if (x.ic || Jr(), 
                            x.ic) {
                                x = N.V, $ = N.Ba, Y = N.c;
                                var it = N.i, H = (dt = 1, _ = N.$ / Y, C = N.$ % Y, 
                                z = N.m, K = N.s, N.$), V = Y * it, ht = Y * r, gt = K.wc, ft = H < ht ? Me(K, C, _) : null;
                                e(H <= V), e(r <= it), e(ar(K));
                                e: for (;;) {
                                    for (;!z.h && H < ht; ) {
                                        if (C & gt || (ft = Me(K, C, _)), e(ft != null), 
                                        G(z), 256 > (it = Je(ft.G[0], ft.H[0], z))) x[$ + H] = it, 
                                        ++H, ++C >= Y && (C = 0, ++_ <= r && !(_ % 16) && On(N, _)); else {
                                            if (!(280 > it)) {
                                                dt = 0;
                                                break e;
                                            }
                                            it = Cn(it - 256, z);
                                            var It, xt = Je(ft.G[4], ft.H[4], z);
                                            if (G(z), !(H >= (xt = Yn(Y, xt = Cn(xt, z))) && V - H >= it)) {
                                                dt = 0;
                                                break e;
                                            }
                                            for (It = 0; It < it; ++It) x[$ + H + It] = x[$ + H + It - xt];
                                            for (H += it, C += it; C >= Y; ) C -= Y, 
                                            ++_ <= r && !(_ % 16) && On(N, _);
                                            H < ht && C & gt && (ft = Me(K, C, _));
                                        }
                                        e(z.h == q(z));
                                    }
                                    On(N, _ > r ? r : _);
                                    break e;
                                }
                                !dt || z.h && H < V ? (dt = 0, N.a = z.h ? 5 : 3) : N.$ = H, 
                                r = dt;
                            } else r = Bn(N, N.V, N.Ba, N.c, N.i, r, hi);
                            if (!r) {
                                d = 0;
                                break t;
                            }
                        }
                        u + d >= w && (t.Cc = 1), d = 1;
                    }
                    if (!d) return null;
                    if (t.Cc && ((d = t.ga) != null && (d.mc = null), t.ga = null, 
                    0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
                }
                return t.nb + u * v;
            }
            function Ke(t, r, u, d, v, w) {
                for (;0 < v--; ) {
                    var N, x = t, _ = r + (u ? 1 : 0), C = t, z = r + (u ? 0 : 3);
                    for (N = 0; N < d; ++N) {
                        var K = C[z + 4 * N];
                        K != 255 && (K *= 32897, x[_ + 4 * N + 0] = x[_ + 4 * N + 0] * K >> 23, 
                        x[_ + 4 * N + 1] = x[_ + 4 * N + 1] * K >> 23, x[_ + 4 * N + 2] = x[_ + 4 * N + 2] * K >> 23);
                    }
                    r += w;
                }
            }
            function ur(t, r, u, d, v) {
                for (;0 < d--; ) {
                    var w;
                    for (w = 0; w < u; ++w) {
                        var N = t[r + 2 * w + 0], x = 15 & (C = t[r + 2 * w + 1]), _ = 4369 * x, C = (240 & C | C >> 4) * _ >> 16;
                        t[r + 2 * w + 0] = (240 & N | N >> 4) * _ >> 16 & 240 | (15 & N | N << 4) * _ >> 16 >> 4 & 15, 
                        t[r + 2 * w + 1] = 240 & C | x;
                    }
                    r += v;
                }
            }
            function Yr(t, r, u, d, v, w, N, x) {
                var _, C, z = 255;
                for (C = 0; C < v; ++C) {
                    for (_ = 0; _ < d; ++_) {
                        var K = t[r + _];
                        w[N + 4 * _] = K, z &= K;
                    }
                    r += u, N += x;
                }
                return z != 255;
            }
            function Zo(t, r, u, d, v) {
                var w;
                for (w = 0; w < v; ++w) u[d + w] = t[r + w] >> 8;
            }
            function Jr() {
                na = Ke, Mc = ur, Ec = Yr, qc = Zo;
            }
            function Qn(t, r, u) {
                O[t] = function(d, v, w, N, x, _, C, z, K, $, Y, dt, it, H, V, ht, gt) {
                    var ft, It = gt - 1 >> 1, xt = x[_ + 0] | C[z + 0] << 16, Dt = K[$ + 0] | Y[dt + 0] << 16;
                    e(d != null);
                    var Pt = 3 * xt + Dt + 131074 >> 2;
                    for (r(d[v + 0], 255 & Pt, Pt >> 16, it, H), w != null && (Pt = 3 * Dt + xt + 131074 >> 2, 
                    r(w[N + 0], 255 & Pt, Pt >> 16, V, ht)), ft = 1; ft <= It; ++ft) {
                        var he = x[_ + ft] | C[z + ft] << 16, pe = K[$ + ft] | Y[dt + ft] << 16, ce = xt + he + Dt + pe + 524296, ie = ce + 2 * (he + Dt) >> 3;
                        Pt = ie + xt >> 1, xt = (ce = ce + 2 * (xt + pe) >> 3) + he >> 1, 
                        r(d[v + 2 * ft - 1], 255 & Pt, Pt >> 16, it, H + (2 * ft - 1) * u), 
                        r(d[v + 2 * ft - 0], 255 & xt, xt >> 16, it, H + (2 * ft - 0) * u), 
                        w != null && (Pt = ce + Dt >> 1, xt = ie + pe >> 1, r(w[N + 2 * ft - 1], 255 & Pt, Pt >> 16, V, ht + (2 * ft - 1) * u), 
                        r(w[N + 2 * ft + 0], 255 & xt, xt >> 16, V, ht + (2 * ft + 0) * u)), 
                        xt = he, Dt = pe;
                    }
                    1 & gt || (Pt = 3 * xt + Dt + 131074 >> 2, r(d[v + gt - 1], 255 & Pt, Pt >> 16, it, H + (gt - 1) * u), 
                    w != null && (Pt = 3 * Dt + xt + 131074 >> 2, r(w[N + gt - 1], 255 & Pt, Pt >> 16, V, ht + (gt - 1) * u)));
                };
            }
            function Ai() {
                _n[Ha] = _1, _n[Wa] = Jc, _n[Hc] = S1, _n[Va] = Xc, _n[Ga] = Kc, 
                _n[ns] = $c, _n[Wc] = P1, _n[rs] = Jc, _n[is] = Xc, _n[Ya] = Kc, 
                _n[as] = $c;
            }
            function _i(t) {
                return t & ~k1 ? 0 > t ? 0 : 255 : t >> Zc;
            }
            function Xr(t, r) {
                return _i((19077 * t >> 8) + (26149 * r >> 8) - 14234);
            }
            function xr(t, r, u) {
                return _i((19077 * t >> 8) - (6419 * r >> 8) - (13320 * u >> 8) + 8708);
            }
            function cn(t, r) {
                return _i((19077 * t >> 8) + (33050 * r >> 8) - 17685);
            }
            function lr(t, r, u, d, v) {
                d[v + 0] = Xr(t, u), d[v + 1] = xr(t, r, u), d[v + 2] = cn(t, r);
            }
            function Ar(t, r, u, d, v) {
                d[v + 0] = cn(t, r), d[v + 1] = xr(t, r, u), d[v + 2] = Xr(t, u);
            }
            function $i(t, r, u, d, v) {
                var w = xr(t, r, u);
                r = w << 3 & 224 | cn(t, r) >> 3, d[v + 0] = 248 & Xr(t, u) | w >> 5, 
                d[v + 1] = r;
            }
            function Zi(t, r, u, d, v) {
                var w = 240 & cn(t, r) | 15;
                d[v + 0] = 240 & Xr(t, u) | xr(t, r, u) >> 4, d[v + 1] = w;
            }
            function un(t, r, u, d, v) {
                d[v + 0] = 255, lr(t, r, u, d, v + 1);
            }
            function Ea(t, r, u, d, v) {
                Ar(t, r, u, d, v), d[v + 3] = 255;
            }
            function Si(t, r, u, d, v) {
                lr(t, r, u, d, v), d[v + 3] = 255;
            }
            function Mn(t, r) {
                return 0 > t ? 0 : t > r ? r : t;
            }
            function an(t, r, u) {
                O[t] = function(d, v, w, N, x, _, C, z, K) {
                    for (var $ = z + (-2 & K) * u; z != $; ) r(d[v + 0], w[N + 0], x[_ + 0], C, z), 
                    r(d[v + 1], w[N + 0], x[_ + 0], C, z + u), v += 2, ++N, ++_, 
                    z += 2 * u;
                    1 & K && r(d[v + 0], w[N + 0], x[_ + 0], C, z);
                };
            }
            function Pi(t, r, u) {
                return u == 0 ? t == 0 ? r == 0 ? 6 : 5 : r == 0 ? 4 : 0 : u;
            }
            function qa(t, r, u, d, v) {
                switch (t >>> 30) {
                  case 3:
                    za(r, u, d, v, 0);
                    break;

                  case 2:
                    Nc(r, u, d, v);
                    break;

                  case 1:
                    Ci(r, u, d, v);
                }
            }
            function Ra(t, r) {
                var u, d, v = r.M, w = r.Nb, N = t.oc, x = t.pc + 40, _ = t.oc, C = t.pc + 584, z = t.oc, K = t.pc + 600;
                for (u = 0; 16 > u; ++u) N[x + 32 * u - 1] = 129;
                for (u = 0; 8 > u; ++u) _[C + 32 * u - 1] = 129, z[K + 32 * u - 1] = 129;
                for (0 < v ? N[x - 1 - 32] = _[C - 1 - 32] = z[K - 1 - 32] = 129 : (s(N, x - 32 - 1, 127, 21), 
                s(_, C - 32 - 1, 127, 9), s(z, K - 32 - 1, 127, 9)), d = 0; d < t.za; ++d) {
                    var $ = r.ya[r.aa + d];
                    if (0 < d) {
                        for (u = -1; 16 > u; ++u) a(N, x + 32 * u - 4, N, x + 32 * u + 12, 4);
                        for (u = -1; 8 > u; ++u) a(_, C + 32 * u - 4, _, C + 32 * u + 4, 4), 
                        a(z, K + 32 * u - 4, z, K + 32 * u + 4, 4);
                    }
                    var Y = t.Gd, dt = t.Hd + d, it = $.ad, H = $.Hc;
                    if (0 < v && (a(N, x - 32, Y[dt].y, 0, 16), a(_, C - 32, Y[dt].f, 0, 8), 
                    a(z, K - 32, Y[dt].ea, 0, 8)), $.Za) {
                        var V = N, ht = x - 32 + 16;
                        for (0 < v && (d >= t.za - 1 ? s(V, ht, Y[dt].y[15], 4) : a(V, ht, Y[dt + 1].y, 0, 4)), 
                        u = 0; 4 > u; u++) V[ht + 128 + u] = V[ht + 256 + u] = V[ht + 384 + u] = V[ht + 0 + u];
                        for (u = 0; 16 > u; ++u, H <<= 2) V = N, ht = x + tu[u], 
                        Tn[$.Ob[u]](V, ht), qa(H, it, 16 * +u, V, ht);
                    } else if (V = Pi(d, v, $.Ob[0]), Fr[V](N, x), H != 0) for (u = 0; 16 > u; ++u, 
                    H <<= 2) qa(H, it, 16 * +u, N, x + tu[u]);
                    for (u = $.Gc, V = Pi(d, v, $.Dd), hr[V](_, C), hr[V](z, K), 
                    H = it, V = _, ht = C, 255 & ($ = u | 0) && (170 & $ ? Qo(H, 256, V, ht) : ts(H, 256, V, ht)), 
                    $ = z, H = K, 255 & (u >>= 8) && (170 & u ? Qo(it, 320, $, H) : ts(it, 320, $, H)), 
                    v < t.Ub - 1 && (a(Y[dt].y, 0, N, x + 480, 16), a(Y[dt].f, 0, _, C + 224, 8), 
                    a(Y[dt].ea, 0, z, K + 224, 8)), u = 8 * w * t.B, Y = t.sa, dt = t.ta + 16 * d + 16 * w * t.R, 
                    it = t.qa, $ = t.ra + 8 * d + u, H = t.Ha, V = t.Ia + 8 * d + u, 
                    u = 0; 16 > u; ++u) a(Y, dt + u * t.R, N, x + 32 * u, 16);
                    for (u = 0; 8 > u; ++u) a(it, $ + u * t.B, _, C + 32 * u, 8), 
                    a(H, V + u * t.B, z, K + 32 * u, 8);
                }
            }
            function _r(t, r, u, d, v, w, N, x, _) {
                var C = [ 0 ], z = [ 0 ], K = 0, $ = _ != null ? _.kd : 0, Y = _ ?? new Et();
                if (t == null || 12 > u) return 7;
                Y.data = t, Y.w = r, Y.ha = u, r = [ r ], u = [ u ], Y.gb = [ Y.gb ];
                t: {
                    var dt = r, it = u, H = Y.gb;
                    if (e(t != null), e(it != null), e(H != null), H[0] = 0, 12 <= it[0] && !n(t, dt[0], "RIFF")) {
                        if (n(t, dt[0] + 8, "WEBP")) {
                            H = 3;
                            break t;
                        }
                        var V = kt(t, dt[0] + 4);
                        if (12 > V || 4294967286 < V) {
                            H = 3;
                            break t;
                        }
                        if ($ && V > it[0] - 8) {
                            H = 7;
                            break t;
                        }
                        H[0] = V, dt[0] += 12, it[0] -= 12;
                    }
                    H = 0;
                }
                if (H != 0) return H;
                for (V = 0 < Y.gb[0], u = u[0]; ;) {
                    t: {
                        var ht = t;
                        it = r, H = u;
                        var gt = C, ft = z, It = dt = [ 0 ];
                        if ((Pt = K = [ K ])[0] = 0, 8 > H[0]) H = 7; else {
                            if (!n(ht, it[0], "VP8X")) {
                                if (kt(ht, it[0] + 4) != 10) {
                                    H = 3;
                                    break t;
                                }
                                if (18 > H[0]) {
                                    H = 7;
                                    break t;
                                }
                                var xt = kt(ht, it[0] + 8), Dt = 1 + Ft(ht, it[0] + 12);
                                if (2147483648 <= Dt * (ht = 1 + Ft(ht, it[0] + 15))) {
                                    H = 3;
                                    break t;
                                }
                                It != null && (It[0] = xt), gt != null && (gt[0] = Dt), 
                                ft != null && (ft[0] = ht), it[0] += 18, H[0] -= 18, 
                                Pt[0] = 1;
                            }
                            H = 0;
                        }
                    }
                    if (K = K[0], dt = dt[0], H != 0) return H;
                    if (it = !!(2 & dt), !V && K) return 3;
                    if (w != null && (w[0] = !!(16 & dt)), N != null && (N[0] = it), 
                    x != null && (x[0] = 0), N = C[0], dt = z[0], K && it && _ == null) {
                        H = 0;
                        break;
                    }
                    if (4 > u) {
                        H = 7;
                        break;
                    }
                    if (V && K || !V && !K && !n(t, r[0], "ALPH")) {
                        u = [ u ], Y.na = [ Y.na ], Y.P = [ Y.P ], Y.Sa = [ Y.Sa ];
                        t: {
                            xt = t, H = r, V = u;
                            var Pt = Y.gb;
                            gt = Y.na, ft = Y.P, It = Y.Sa, Dt = 22, e(xt != null), 
                            e(V != null), ht = H[0];
                            var he = V[0];
                            for (e(gt != null), e(It != null), gt[0] = null, ft[0] = null, 
                            It[0] = 0; ;) {
                                if (H[0] = ht, V[0] = he, 8 > he) {
                                    H = 7;
                                    break t;
                                }
                                var pe = kt(xt, ht + 4);
                                if (4294967286 < pe) {
                                    H = 3;
                                    break t;
                                }
                                var ce = 8 + pe + 1 & -2;
                                if (Dt += ce, 0 < Pt && Dt > Pt) {
                                    H = 3;
                                    break t;
                                }
                                if (!n(xt, ht, "VP8 ") || !n(xt, ht, "VP8L")) {
                                    H = 0;
                                    break t;
                                }
                                if (he[0] < ce) {
                                    H = 7;
                                    break t;
                                }
                                n(xt, ht, "ALPH") || (gt[0] = xt, ft[0] = ht + 8, 
                                It[0] = pe), ht += ce, he -= ce;
                            }
                        }
                        if (u = u[0], Y.na = Y.na[0], Y.P = Y.P[0], Y.Sa = Y.Sa[0], 
                        H != 0) break;
                    }
                    u = [ u ], Y.Ja = [ Y.Ja ], Y.xa = [ Y.xa ];
                    t: if (Pt = t, H = r, V = u, gt = Y.gb[0], ft = Y.Ja, It = Y.xa, 
                    xt = H[0], ht = !n(Pt, xt, "VP8 "), Dt = !n(Pt, xt, "VP8L"), 
                    e(Pt != null), e(V != null), e(ft != null), e(It != null), 8 > V[0]) H = 7; else {
                        if (ht || Dt) {
                            if (Pt = kt(Pt, xt + 4), 12 <= gt && Pt > gt - 12) {
                                H = 3;
                                break t;
                            }
                            if ($ && Pt > V[0] - 8) {
                                H = 7;
                                break t;
                            }
                            ft[0] = Pt, H[0] += 8, V[0] -= 8, It[0] = Dt;
                        } else It[0] = 5 <= V[0] && Pt[xt + 0] == 47 && !(Pt[xt + 4] >> 5), 
                        ft[0] = V[0];
                        H = 0;
                    }
                    if (u = u[0], Y.Ja = Y.Ja[0], Y.xa = Y.xa[0], r = r[0], H != 0) break;
                    if (4294967286 < Y.Ja) return 3;
                    if (x == null || it || (x[0] = Y.xa ? 2 : 1), N = [ N ], dt = [ dt ], 
                    Y.xa) {
                        if (5 > u) {
                            H = 7;
                            break;
                        }
                        x = N, $ = dt, it = w, t == null || 5 > u ? t = 0 : 5 <= u && t[r + 0] == 47 && !(t[r + 4] >> 5) ? (V = [ 0 ], 
                        Pt = [ 0 ], gt = [ 0 ], Q(ft = new L(), t, r, u), ir(ft, V, Pt, gt) ? (x != null && (x[0] = V[0]), 
                        $ != null && ($[0] = Pt[0]), it != null && (it[0] = gt[0]), 
                        t = 1) : t = 0) : t = 0;
                    } else {
                        if (10 > u) {
                            H = 7;
                            break;
                        }
                        x = dt, t == null || 10 > u || !Ia(t, r + 3, u - 3) ? t = 0 : ($ = t[r + 0] | t[r + 1] << 8 | t[r + 2] << 16, 
                        it = 16383 & (t[r + 7] << 8 | t[r + 6]), t = 16383 & (t[r + 9] << 8 | t[r + 8]), 
                        1 & $ || 3 < ($ >> 1 & 7) || !($ >> 4 & 1) || $ >> 5 >= Y.Ja || !it || !t ? t = 0 : (N && (N[0] = it), 
                        x && (x[0] = t), t = 1));
                    }
                    if (!t || (N = N[0], dt = dt[0], K && (C[0] != N || z[0] != dt))) return 3;
                    _ != null && (_[0] = Y, _.offset = r - _.w, e(4294967286 > r - _.w), 
                    e(_.offset == _.ha - u));
                    break;
                }
                return H == 0 || H == 7 && K && _ == null ? (w != null && (w[0] |= Y.na != null && 0 < Y.na.length), 
                d != null && (d[0] = N), v != null && (v[0] = dt), 0) : H;
            }
            function En(t, r, u) {
                var d = r.width, v = r.height, w = 0, N = 0, x = d, _ = v;
                if (r.Da = t != null && 0 < t.Da, r.Da && (x = t.cd, _ = t.bd, w = t.v, 
                N = t.j, 11 > u || (w &= -2, N &= -2), 0 > w || 0 > N || 0 >= x || 0 >= _ || w + x > d || N + _ > v)) return 0;
                if (r.v = w, r.j = N, r.va = w + x, r.o = N + _, r.U = x, r.T = _, 
                r.da = t != null && 0 < t.da, r.da) {
                    if (!Vt(x, _, u = [ t.ib ], w = [ t.hb ])) return 0;
                    r.ib = u[0], r.hb = w[0];
                }
                return r.ob = t != null && t.ob, r.Kb = t == null || !t.Sd, r.da && (r.ob = r.ib < 3 * d / 4 && r.hb < 3 * v / 4, 
                r.Kb = 0), 1;
            }
            function qn(t) {
                if (t == null) return 2;
                if (11 > t.S) {
                    var r = t.f.RGBA;
                    r.fb += (t.height - 1) * r.A, r.A = -r.A;
                } else r = t.f.kb, t = t.height, r.O += (t - 1) * r.fa, r.fa = -r.fa, 
                r.N += (t - 1 >> 1) * r.Ab, r.Ab = -r.Ab, r.W += (t - 1 >> 1) * r.Db, 
                r.Db = -r.Db, r.F != null && (r.J += (t - 1) * r.lb, r.lb = -r.lb);
                return 0;
            }
            function Kr(t, r, u, d) {
                if (d == null || 0 >= t || 0 >= r) return 2;
                if (u != null) {
                    if (u.Da) {
                        var v = u.cd, w = u.bd, N = -2 & u.v, x = -2 & u.j;
                        if (0 > N || 0 > x || 0 >= v || 0 >= w || N + v > t || x + w > r) return 2;
                        t = v, r = w;
                    }
                    if (u.da) {
                        if (!Vt(t, r, v = [ u.ib ], w = [ u.hb ])) return 2;
                        t = v[0], r = w[0];
                    }
                }
                d.width = t, d.height = r;
                t: {
                    var _ = d.width, C = d.height;
                    if (t = d.S, 0 >= _ || 0 >= C || !(t >= Ha && 13 > t)) t = 2; else {
                        if (0 >= d.Rd && d.sd == null) {
                            N = w = v = r = 0;
                            var z = (x = _ * eu[t]) * C;
                            if (11 > t || (w = (C + 1) / 2 * (r = (_ + 1) / 2), 
                            t == 12 && (N = (v = _) * C)), (C = o(z + 2 * w + N)) == null) {
                                t = 1;
                                break t;
                            }
                            d.sd = C, 11 > t ? ((_ = d.f.RGBA).eb = C, _.fb = 0, 
                            _.A = x, _.size = z) : ((_ = d.f.kb).y = C, _.O = 0, 
                            _.fa = x, _.Fd = z, _.f = C, _.N = 0 + z, _.Ab = r, 
                            _.Cd = w, _.ea = C, _.W = 0 + z + w, _.Db = r, _.Ed = w, 
                            t == 12 && (_.F = C, _.J = 0 + z + 2 * w), _.Tc = N, 
                            _.lb = v);
                        }
                        if (r = 1, v = d.S, w = d.width, N = d.height, v >= Ha && 13 > v) if (11 > v) t = d.f.RGBA, 
                        r &= (x = Math.abs(t.A)) * (N - 1) + w <= t.size, r &= x >= w * eu[v], 
                        r &= t.eb != null; else {
                            t = d.f.kb, x = (w + 1) / 2, z = (N + 1) / 2, _ = Math.abs(t.fa), 
                            C = Math.abs(t.Ab);
                            var K = Math.abs(t.Db), $ = Math.abs(t.lb), Y = $ * (N - 1) + w;
                            r &= _ * (N - 1) + w <= t.Fd, r &= C * (z - 1) + x <= t.Cd, 
                            r = (r &= K * (z - 1) + x <= t.Ed) & _ >= w & C >= x & K >= x, 
                            r &= t.y != null, r &= t.f != null, r &= t.ea != null, 
                            v == 12 && (r &= $ >= w, r &= Y <= t.Tc, r &= t.F != null);
                        } else r = 0;
                        t = r ? 0 : 2;
                    }
                }
                return t != 0 || u != null && u.fd && (t = qn(d)), t;
            }
            var tr = 64, Sr = [ 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215 ], Qi = 24, xn = 32, ta = 8, ki = [ 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ];
            St("Predictor0", "PredictorAdd0"), O.Predictor0 = function() {
                return 4278190080;
            }, O.Predictor1 = function(t) {
                return t;
            }, O.Predictor2 = function(t, r, u) {
                return r[u + 0];
            }, O.Predictor3 = function(t, r, u) {
                return r[u + 1];
            }, O.Predictor4 = function(t, r, u) {
                return r[u - 1];
            }, O.Predictor5 = function(t, r, u) {
                return _t(_t(t, r[u + 1]), r[u + 0]);
            }, O.Predictor6 = function(t, r, u) {
                return _t(t, r[u - 1]);
            }, O.Predictor7 = function(t, r, u) {
                return _t(t, r[u + 0]);
            }, O.Predictor8 = function(t, r, u) {
                return _t(r[u - 1], r[u + 0]);
            }, O.Predictor9 = function(t, r, u) {
                return _t(r[u + 0], r[u + 1]);
            }, O.Predictor10 = function(t, r, u) {
                return _t(_t(t, r[u - 1]), _t(r[u + 0], r[u + 1]));
            }, O.Predictor11 = function(t, r, u) {
                var d = r[u + 0];
                return 0 >= Xt(d >> 24 & 255, t >> 24 & 255, (r = r[u - 1]) >> 24 & 255) + Xt(d >> 16 & 255, t >> 16 & 255, r >> 16 & 255) + Xt(d >> 8 & 255, t >> 8 & 255, r >> 8 & 255) + Xt(255 & d, 255 & t, 255 & r) ? d : t;
            }, O.Predictor12 = function(t, r, u) {
                var d = r[u + 0];
                return (Tt((t >> 24 & 255) + (d >> 24 & 255) - ((r = r[u - 1]) >> 24 & 255)) << 24 | Tt((t >> 16 & 255) + (d >> 16 & 255) - (r >> 16 & 255)) << 16 | Tt((t >> 8 & 255) + (d >> 8 & 255) - (r >> 8 & 255)) << 8 | Tt((255 & t) + (255 & d) - (255 & r))) >>> 0;
            }, O.Predictor13 = function(t, r, u) {
                var d = r[u - 1];
                return (te((t = _t(t, r[u + 0])) >> 24 & 255, d >> 24 & 255) << 24 | te(t >> 16 & 255, d >> 16 & 255) << 16 | te(t >> 8 & 255, d >> 8 & 255) << 8 | te(255 & t, 255 & d)) >>> 0;
            };
            var Fi = O.PredictorAdd0;
            O.PredictorAdd1 = oe, St("Predictor2", "PredictorAdd2"), St("Predictor3", "PredictorAdd3"), 
            St("Predictor4", "PredictorAdd4"), St("Predictor5", "PredictorAdd5"), 
            St("Predictor6", "PredictorAdd6"), St("Predictor7", "PredictorAdd7"), 
            St("Predictor8", "PredictorAdd8"), St("Predictor9", "PredictorAdd9"), 
            St("Predictor10", "PredictorAdd10"), St("Predictor11", "PredictorAdd11"), 
            St("Predictor12", "PredictorAdd12"), St("Predictor13", "PredictorAdd13");
            var $r = O.PredictorAdd2;
            Zt("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
                return t >> 8 & 255;
            }, function(t) {
                return t;
            }), Zt("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
                return t;
            }, function(t) {
                return t >> 8 & 255;
            });
            var Zr, Pr = O.ColorIndexInverseTransform, Ta = O.MapARGB, Rn = O.VP8LColorIndexInverseTransformAlpha, kr = O.MapAlpha, xe = O.VP8LPredictorsAdd = [];
            xe.length = 16, (O.VP8LPredictors = []).length = 16, (O.VP8LPredictorsAdd_C = []).length = 16, 
            (O.VP8LPredictors_C = []).length = 16;
            var we, Oe, Re, er, ea, Ii, Da, za, Nc, Qo, Ci, ts, xc, Ac, _c, Sc, Pc, kc, Fc, Ic, Cc, jc, Oc, Bc, na, Mc, Ec, qc, Rc = o(511), Tc = o(2041), Dc = o(225), zc = o(767), Uc = 0, es = Tc, Ua = Dc, yn = zc, An = Rc, Ha = 0, Wa = 1, Hc = 2, Va = 3, Ga = 4, ns = 5, Wc = 6, rs = 7, is = 8, Ya = 9, as = 10, h1 = [ 2, 3, 7 ], f1 = [ 3, 3, 11 ], Vc = [ 280, 256, 256, 256, 40 ], d1 = [ 0, 1, 1, 1, 0 ], p1 = [ 17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ], g1 = [ 24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112 ], m1 = [ 2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004 ], v1 = 8, os = [ 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157 ], ss = [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284 ], ra = null, b1 = [ [ 173, 148, 140, 0 ], [ 176, 155, 140, 135, 0 ], [ 180, 157, 141, 134, 130, 0 ], [ 254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0 ] ], y1 = [ 0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15 ], Gc = [ -0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9 ], w1 = [ [ [ [ 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128 ] ], [ [ 253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128 ], [ 189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128 ], [ 106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128 ] ], [ [ 1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128 ], [ 181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128 ], [ 78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128 ] ], [ [ 1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128 ], [ 184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128 ], [ 77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128 ] ], [ [ 1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128 ], [ 170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128 ], [ 37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128 ] ], [ [ 1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128 ], [ 207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128 ], [ 102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128 ] ], [ [ 1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128 ], [ 177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128 ], [ 80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128 ] ], [ [ 1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128 ] ] ], [ [ [ 198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62 ], [ 131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1 ], [ 68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128 ] ], [ [ 1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128 ], [ 184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128 ], [ 81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128 ] ], [ [ 1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128 ], [ 99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128 ], [ 23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128 ] ], [ [ 1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128 ], [ 109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128 ], [ 44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128 ] ], [ [ 1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128 ], [ 94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128 ], [ 22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128 ] ], [ [ 1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128 ], [ 124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128 ], [ 35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128 ] ], [ [ 1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128 ], [ 121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128 ], [ 45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128 ] ], [ [ 1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128 ], [ 203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128 ], [ 137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128 ] ] ], [ [ [ 253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128 ], [ 175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128 ], [ 73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128 ] ], [ [ 1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128 ], [ 239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128 ], [ 155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128 ] ], [ [ 1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128 ], [ 201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128 ], [ 69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128 ] ], [ [ 1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128 ], [ 223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128 ], [ 141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128 ] ], [ [ 1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128 ], [ 190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128 ], [ 149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128 ] ], [ [ 1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128 ] ], [ [ 1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128 ], [ 213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128 ], [ 55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128 ] ], [ [ 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128 ] ] ], [ [ [ 202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255 ], [ 126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128 ], [ 61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128 ] ], [ [ 1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128 ], [ 166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128 ], [ 39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128 ] ], [ [ 1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128 ], [ 124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128 ], [ 24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128 ] ], [ [ 1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128 ], [ 149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128 ], [ 28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128 ] ], [ [ 1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128 ], [ 123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128 ], [ 20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128 ] ], [ [ 1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128 ], [ 168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128 ], [ 47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128 ] ], [ [ 1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128 ], [ 141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128 ], [ 42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128 ] ], [ [ 1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128 ], [ 238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128 ] ] ] ], L1 = [ [ [ 231, 120, 48, 89, 115, 113, 120, 152, 112 ], [ 152, 179, 64, 126, 170, 118, 46, 70, 95 ], [ 175, 69, 143, 80, 85, 82, 72, 155, 103 ], [ 56, 58, 10, 171, 218, 189, 17, 13, 152 ], [ 114, 26, 17, 163, 44, 195, 21, 10, 173 ], [ 121, 24, 80, 195, 26, 62, 44, 64, 85 ], [ 144, 71, 10, 38, 171, 213, 144, 34, 26 ], [ 170, 46, 55, 19, 136, 160, 33, 206, 71 ], [ 63, 20, 8, 114, 114, 208, 12, 9, 226 ], [ 81, 40, 11, 96, 182, 84, 29, 16, 36 ] ], [ [ 134, 183, 89, 137, 98, 101, 106, 165, 148 ], [ 72, 187, 100, 130, 157, 111, 32, 75, 80 ], [ 66, 102, 167, 99, 74, 62, 40, 234, 128 ], [ 41, 53, 9, 178, 241, 141, 26, 8, 107 ], [ 74, 43, 26, 146, 73, 166, 49, 23, 157 ], [ 65, 38, 105, 160, 51, 52, 31, 115, 128 ], [ 104, 79, 12, 27, 217, 255, 87, 17, 7 ], [ 87, 68, 71, 44, 114, 51, 15, 186, 23 ], [ 47, 41, 14, 110, 182, 183, 21, 17, 194 ], [ 66, 45, 25, 102, 197, 189, 23, 18, 22 ] ], [ [ 88, 88, 147, 150, 42, 46, 45, 196, 205 ], [ 43, 97, 183, 117, 85, 38, 35, 179, 61 ], [ 39, 53, 200, 87, 26, 21, 43, 232, 171 ], [ 56, 34, 51, 104, 114, 102, 29, 93, 77 ], [ 39, 28, 85, 171, 58, 165, 90, 98, 64 ], [ 34, 22, 116, 206, 23, 34, 43, 166, 73 ], [ 107, 54, 32, 26, 51, 1, 81, 43, 31 ], [ 68, 25, 106, 22, 64, 171, 36, 225, 114 ], [ 34, 19, 21, 102, 132, 188, 16, 76, 124 ], [ 62, 18, 78, 95, 85, 57, 50, 48, 51 ] ], [ [ 193, 101, 35, 159, 215, 111, 89, 46, 111 ], [ 60, 148, 31, 172, 219, 228, 21, 18, 111 ], [ 112, 113, 77, 85, 179, 255, 38, 120, 114 ], [ 40, 42, 1, 196, 245, 209, 10, 25, 109 ], [ 88, 43, 29, 140, 166, 213, 37, 43, 154 ], [ 61, 63, 30, 155, 67, 45, 68, 1, 209 ], [ 100, 80, 8, 43, 154, 1, 51, 26, 71 ], [ 142, 78, 78, 16, 255, 128, 34, 197, 171 ], [ 41, 40, 5, 102, 211, 183, 4, 1, 221 ], [ 51, 50, 17, 168, 209, 192, 23, 25, 82 ] ], [ [ 138, 31, 36, 171, 27, 166, 38, 44, 229 ], [ 67, 87, 58, 169, 82, 115, 26, 59, 179 ], [ 63, 59, 90, 180, 59, 166, 93, 73, 154 ], [ 40, 40, 21, 116, 143, 209, 34, 39, 175 ], [ 47, 15, 16, 183, 34, 223, 49, 45, 183 ], [ 46, 17, 33, 183, 6, 98, 15, 32, 183 ], [ 57, 46, 22, 24, 128, 1, 54, 17, 37 ], [ 65, 32, 73, 115, 28, 128, 23, 128, 205 ], [ 40, 3, 9, 115, 51, 192, 18, 6, 223 ], [ 87, 37, 9, 115, 59, 77, 64, 21, 47 ] ], [ [ 104, 55, 44, 218, 9, 54, 53, 130, 226 ], [ 64, 90, 70, 205, 40, 41, 23, 26, 57 ], [ 54, 57, 112, 184, 5, 41, 38, 166, 213 ], [ 30, 34, 26, 133, 152, 116, 10, 32, 134 ], [ 39, 19, 53, 221, 26, 114, 32, 73, 255 ], [ 31, 9, 65, 234, 2, 15, 1, 118, 73 ], [ 75, 32, 12, 51, 192, 255, 160, 43, 51 ], [ 88, 31, 35, 67, 102, 85, 55, 186, 85 ], [ 56, 21, 23, 111, 59, 205, 45, 37, 192 ], [ 55, 38, 70, 124, 73, 102, 1, 34, 98 ] ], [ [ 125, 98, 42, 88, 104, 85, 117, 175, 82 ], [ 95, 84, 53, 89, 128, 100, 113, 101, 45 ], [ 75, 79, 123, 47, 51, 128, 81, 171, 1 ], [ 57, 17, 5, 71, 102, 57, 53, 41, 49 ], [ 38, 33, 13, 121, 57, 73, 26, 1, 85 ], [ 41, 10, 67, 138, 77, 110, 90, 47, 114 ], [ 115, 21, 2, 10, 102, 255, 166, 23, 6 ], [ 101, 29, 16, 10, 85, 128, 101, 196, 26 ], [ 57, 18, 10, 102, 102, 213, 34, 20, 43 ], [ 117, 20, 15, 36, 163, 128, 68, 1, 26 ] ], [ [ 102, 61, 71, 37, 34, 53, 31, 243, 192 ], [ 69, 60, 71, 38, 73, 119, 28, 222, 37 ], [ 68, 45, 128, 34, 1, 47, 11, 245, 171 ], [ 62, 17, 19, 70, 146, 85, 55, 62, 70 ], [ 37, 43, 37, 154, 100, 163, 85, 160, 1 ], [ 63, 9, 92, 136, 28, 64, 32, 201, 85 ], [ 75, 15, 9, 9, 64, 255, 184, 119, 16 ], [ 86, 6, 28, 5, 64, 255, 25, 248, 1 ], [ 56, 8, 17, 132, 137, 255, 55, 116, 128 ], [ 58, 15, 20, 82, 135, 57, 26, 121, 40 ] ], [ [ 164, 50, 31, 137, 154, 133, 25, 35, 218 ], [ 51, 103, 44, 131, 131, 123, 31, 6, 158 ], [ 86, 40, 64, 135, 148, 224, 45, 183, 128 ], [ 22, 26, 17, 131, 240, 154, 14, 1, 209 ], [ 45, 16, 21, 91, 64, 222, 7, 1, 197 ], [ 56, 21, 39, 155, 60, 138, 23, 102, 213 ], [ 83, 12, 13, 54, 192, 255, 68, 47, 28 ], [ 85, 26, 85, 85, 128, 128, 32, 146, 171 ], [ 18, 11, 7, 63, 144, 171, 4, 4, 246 ], [ 35, 27, 10, 146, 174, 171, 12, 26, 128 ] ], [ [ 190, 80, 35, 99, 180, 80, 126, 54, 45 ], [ 85, 126, 47, 87, 176, 51, 41, 20, 32 ], [ 101, 75, 128, 139, 118, 146, 116, 128, 85 ], [ 56, 41, 15, 176, 236, 85, 37, 9, 62 ], [ 71, 30, 17, 119, 118, 255, 17, 18, 138 ], [ 101, 38, 60, 138, 55, 70, 43, 26, 142 ], [ 146, 36, 19, 30, 171, 255, 97, 27, 20 ], [ 138, 45, 61, 62, 219, 1, 81, 188, 64 ], [ 32, 41, 20, 117, 151, 142, 20, 21, 163 ], [ 112, 19, 12, 61, 195, 128, 48, 4, 24 ] ] ], N1 = [ [ [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255 ], [ 250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255 ], [ 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ] ], [ [ [ 217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255 ], [ 234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255 ] ], [ [ 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ] ], [ [ [ 186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255 ], [ 251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255 ] ], [ [ 255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ] ], [ [ [ 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255 ], [ 248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ], [ [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] ] ] ], x1 = [ 0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0 ], Fr = [], Tn = [], hr = [], A1 = 1, Yc = 2, Ir = [], _n = [];
            Qn("UpsampleRgbLinePair", lr, 3), Qn("UpsampleBgrLinePair", Ar, 3), 
            Qn("UpsampleRgbaLinePair", Si, 4), Qn("UpsampleBgraLinePair", Ea, 4), 
            Qn("UpsampleArgbLinePair", un, 4), Qn("UpsampleRgba4444LinePair", Zi, 2), 
            Qn("UpsampleRgb565LinePair", $i, 2);
            var _1 = O.UpsampleRgbLinePair, S1 = O.UpsampleBgrLinePair, Jc = O.UpsampleRgbaLinePair, Xc = O.UpsampleBgraLinePair, Kc = O.UpsampleArgbLinePair, $c = O.UpsampleRgba4444LinePair, P1 = O.UpsampleRgb565LinePair, Ja = 16, Xa = 1 << Ja - 1, ia = -227, cs = 482, Zc = 6, k1 = (256 << Zc) - 1, Qc = 0, F1 = o(256), I1 = o(256), C1 = o(256), j1 = o(256), O1 = o(cs - ia), B1 = o(cs - ia);
            an("YuvToRgbRow", lr, 3), an("YuvToBgrRow", Ar, 3), an("YuvToRgbaRow", Si, 4), 
            an("YuvToBgraRow", Ea, 4), an("YuvToArgbRow", un, 4), an("YuvToRgba4444Row", Zi, 2), 
            an("YuvToRgb565Row", $i, 2);
            var tu = [ 0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396 ], Ka = [ 0, 2, 8 ], M1 = [ 8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1 ], E1 = 1;
            this.WebPDecodeRGBA = function(t, r, u, d, v) {
                var w = Wa, N = new Ot(), x = new dn();
                N.ba = x, x.S = w, x.width = [ x.width ], x.height = [ x.height ];
                var _ = x.width, C = x.height, z = new Pe();
                if (z == null || t == null) var K = 2; else e(z != null), K = _r(t, r, u, z.width, z.height, z.Pd, z.Qd, z.format, null);
                if (K != 0 ? _ = 0 : (_ != null && (_[0] = z.width[0]), C != null && (C[0] = z.height[0]), 
                _ = 1), _) {
                    x.width = x.width[0], x.height = x.height[0], d != null && (d[0] = x.width), 
                    v != null && (v[0] = x.height);
                    t: {
                        if (d = new mi(), (v = new Et()).data = t, v.w = r, v.ha = u, 
                        v.kd = 1, r = [ 0 ], e(v != null), ((t = _r(v.data, v.w, v.ha, null, null, null, r, null, v)) == 0 || t == 7) && r[0] && (t = 4), 
                        (r = t) == 0) {
                            if (e(N != null), d.data = v.data, d.w = v.w + v.offset, 
                            d.ha = v.ha - v.offset, d.put = Gn, d.ac = Vn, d.bc = Ut, 
                            d.ma = N, v.xa) {
                                if ((t = Nn()) == null) {
                                    N = 1;
                                    break t;
                                }
                                if (function($, Y) {
                                    var dt = [ 0 ], it = [ 0 ], H = [ 0 ];
                                    e: for (;;) {
                                        if ($ == null) return 0;
                                        if (Y == null) return $.a = 2, 0;
                                        if ($.l = Y, $.a = 0, Q($.m, Y.data, Y.w, Y.ha), 
                                        !ir($.m, dt, it, H)) {
                                            $.a = 3;
                                            break e;
                                        }
                                        if ($.xb = Yc, Y.width = dt[0], Y.height = it[0], 
                                        !Xn(dt[0], it[0], 1, $, null)) break e;
                                        return 1;
                                    }
                                    return e($.a != 0), 0;
                                }(t, d)) {
                                    if (d = (r = Kr(d.width, d.height, N.Oa, N.ba)) == 0) {
                                        e: {
                                            d = t;
                                            n: for (;;) {
                                                if (d == null) {
                                                    d = 0;
                                                    break e;
                                                }
                                                if (e(d.s.yc != null), e(d.s.Ya != null), 
                                                e(0 < d.s.Wb), e((u = d.l) != null), 
                                                e((v = u.ma) != null), d.xb != 0) {
                                                    if (d.ca = v.ba, d.tb = v.tb, 
                                                    e(d.ca != null), !En(v.Oa, u, Va)) {
                                                        d.a = 2;
                                                        break n;
                                                    }
                                                    if (!Hr(d, u.width) || u.da) break n;
                                                    if ((u.da || me(d.ca.S)) && Jr(), 
                                                    11 > d.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), 
                                                    d.ca.f.kb.F != null && Jr()), 
                                                    d.Pb && 0 < d.s.ua && d.s.vb.X == null && !zt(d.s.vb, d.s.Wa.Xa)) {
                                                        d.a = 1;
                                                        break n;
                                                    }
                                                    d.xb = 0;
                                                }
                                                if (!Bn(d, d.V, d.Ba, d.c, d.i, u.o, li)) break n;
                                                v.Dc = d.Ma, d = 1;
                                                break e;
                                            }
                                            e(d.a != 0), d = 0;
                                        }
                                        d = !d;
                                    }
                                    d && (r = t.a);
                                } else r = t.a;
                            } else {
                                if ((t = new Fa()) == null) {
                                    N = 1;
                                    break t;
                                }
                                if (t.Fa = v.na, t.P = v.P, t.qc = v.Sa, Ca(t, d)) {
                                    if ((r = Kr(d.width, d.height, N.Oa, N.ba)) == 0) {
                                        if (t.Aa = 0, u = N.Oa, e((v = t) != null), 
                                        u != null) {
                                            if (0 < (_ = 0 > (_ = u.Md) ? 0 : 100 < _ ? 255 : 255 * _ / 100)) {
                                                for (C = z = 0; 4 > C; ++C) 12 > (K = v.pb[C]).lc && (K.ia = _ * M1[0 > K.lc ? 0 : K.lc] >> 3), 
                                                z |= K.ia;
                                                z && (alert("todo:VP8InitRandom"), 
                                                v.ia = 1);
                                            }
                                            v.Ga = u.Id, 100 < v.Ga ? v.Ga = 100 : 0 > v.Ga && (v.Ga = 0);
                                        }
                                        sr(t, d) || (r = t.a);
                                    }
                                } else r = t.a;
                            }
                            r == 0 && N.Oa != null && N.Oa.fd && (r = qn(N.ba));
                        }
                        N = r;
                    }
                    w = N != 0 ? null : 11 > w ? x.f.RGBA.eb : x.f.kb.y;
                } else w = null;
                return w;
            };
            var eu = [ 3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1 ];
        };
        function m(O, lt) {
            for (var vt = "", P = 0; P < 4; P++) vt += String.fromCharCode(O[lt++]);
            return vt;
        }
        function y(O, lt) {
            return (O[lt + 0] | O[lt + 1] << 8 | O[lt + 2] << 16) >>> 0;
        }
        function b(O, lt) {
            return (O[lt + 0] | O[lt + 1] << 8 | O[lt + 2] << 16 | O[lt + 3] << 24) >>> 0;
        }
        new f();
        var k = [ 0 ], p = [ 0 ], M = [], S = new f(), E = i, A = function(O, lt) {
            var vt = {}, P = 0, I = !1, R = 0, T = 0;
            if (vt.frames = [], !function(j, q, W, G) {
                for (var tt = 0; tt < 4; tt++) if (j[q + tt] != "RIFF".charCodeAt(tt)) return !0;
                return !1;
            }(O, lt)) {
                var at, rt;
                for (b(O, lt += 4), lt += 8; lt < O.length; ) {
                    var pt = m(O, lt), Q = b(O, lt += 4);
                    lt += 4;
                    var st = Q + (1 & Q);
                    switch (pt) {
                      case "VP8 ":
                      case "VP8L":
                        vt.frames[P] === void 0 && (vt.frames[P] = {}), (L = vt.frames[P]).src_off = I ? T : lt - 8, 
                        L.src_size = R + Q + 8, P++, I && (I = !1, R = 0, T = 0);
                        break;

                      case "VP8X":
                        (L = vt.header = {}).feature_flags = O[lt];
                        var ct = lt + 4;
                        L.canvas_width = 1 + y(O, ct), ct += 3, L.canvas_height = 1 + y(O, ct), 
                        ct += 3;
                        break;

                      case "ALPH":
                        I = !0, R = st + 8, T = lt - 8;
                        break;

                      case "ANIM":
                        (L = vt.header).bgcolor = b(O, lt), ct = lt + 4, L.loop_count = (at = O)[(rt = ct) + 0] | at[rt + 1] << 8, 
                        ct += 2;
                        break;

                      case "ANMF":
                        var Ct, L;
                        (L = vt.frames[P] = {}).offset_x = 2 * y(O, lt), lt += 3, 
                        L.offset_y = 2 * y(O, lt), lt += 3, L.width = 1 + y(O, lt), 
                        lt += 3, L.height = 1 + y(O, lt), lt += 3, L.duration = y(O, lt), 
                        lt += 3, Ct = O[lt++], L.dispose = 1 & Ct, L.blend = Ct >> 1 & 1;
                    }
                    pt != "ANMF" && (lt += st);
                }
                return vt;
            }
        }(E, 0);
        A.response = E, A.rgbaoutput = !0, A.dataurl = !1;
        var U = A.header ? A.header : null, X = A.frames ? A.frames : null;
        if (U) {
            U.loop_counter = U.loop_count, k = [ U.canvas_height ], p = [ U.canvas_width ];
            for (var Z = 0; Z < X.length && X[Z].blend != 0; Z++);
        }
        var ot = X[0], yt = S.WebPDecodeRGBA(E, ot.src_off, ot.src_size, p, k);
        ot.rgba = yt, ot.imgwidth = p[0], ot.imgheight = k[0];
        for (var Lt = 0; Lt < p[0] * k[0] * 4; Lt++) M[Lt] = yt[Lt];
        return this.width = p, this.height = k, this.data = M, this;
    }
    (function(i) {
        var e = function(b, k, p, M) {
            var S = 4, E = o;
            switch (M) {
              case i.image_compression.FAST:
                S = 1, E = s;
                break;

              case i.image_compression.MEDIUM:
                S = 6, E = l;
                break;

              case i.image_compression.SLOW:
                S = 9, E = h;
            }
            var A = Is(b = n(b, k, p, E), {
                level: S
            });
            return i.__addimage__.arrayBufferToBinaryString(A);
        }, n = function(b, k, p, M) {
            for (var S, E, A, U = b.length / k, X = new Uint8Array(b.length + U), Z = m(), ot = 0; ot < U; ot += 1) {
                if (A = ot * k, S = b.subarray(A, A + k), M) X.set(M(S, p, E), A + ot); else {
                    for (var yt, Lt = Z.length, O = []; yt < Lt; yt += 1) O[yt] = Z[yt](S, p, E);
                    var lt = y(O.concat());
                    X.set(O[lt], A + ot);
                }
                E = S;
            }
            return X;
        }, a = function(b) {
            var k = Array.apply([], b);
            return k.unshift(0), k;
        }, s = function(b, k) {
            var p, M = [], S = b.length;
            M[0] = 1;
            for (var E = 0; E < S; E += 1) p = b[E - k] || 0, M[E + 1] = b[E] - p + 256 & 255;
            return M;
        }, o = function(b, k, p) {
            var M, S = [], E = b.length;
            S[0] = 2;
            for (var A = 0; A < E; A += 1) M = p && p[A] || 0, S[A + 1] = b[A] - M + 256 & 255;
            return S;
        }, l = function(b, k, p) {
            var M, S, E = [], A = b.length;
            E[0] = 3;
            for (var U = 0; U < A; U += 1) M = b[U - k] || 0, S = p && p[U] || 0, 
            E[U + 1] = b[U] + 256 - (M + S >>> 1) & 255;
            return E;
        }, h = function(b, k, p) {
            var M, S, E, A, U = [], X = b.length;
            U[0] = 4;
            for (var Z = 0; Z < X; Z += 1) M = b[Z - k] || 0, S = p && p[Z] || 0, 
            E = p && p[Z - k] || 0, A = f(M, S, E), U[Z + 1] = b[Z] - A + 256 & 255;
            return U;
        }, f = function(b, k, p) {
            if (b === k && k === p) return b;
            var M = Math.abs(k - p), S = Math.abs(b - p), E = Math.abs(b + k - p - p);
            return M <= S && M <= E ? b : S <= E ? k : p;
        }, m = function() {
            return [ a, s, o, l, h ];
        }, y = function(b) {
            var k = b.map(function(p) {
                return p.reduce(function(M, S) {
                    return M + Math.abs(S);
                }, 0);
            });
            return k.indexOf(Math.min.apply(null, k));
        };
        i.processPNG = function(b, k, p, M) {
            var S, E, A, U, X, Z, ot, yt, Lt, O, lt, vt, P, I, R, T = this.decode.FLATE_DECODE, at = "";
            if (this.__addimage__.isArrayBuffer(b) && (b = new Uint8Array(b)), this.__addimage__.isArrayBufferView(b)) {
                if (b = (A = new Ju(b)).imgData, E = A.bits, S = A.colorSpace, X = A.colors, 
                [ 4, 6 ].indexOf(A.colorType) !== -1) {
                    if (A.bits === 8) {
                        Lt = (yt = A.pixelBitlength == 32 ? new Uint32Array(A.decodePixels().buffer) : A.pixelBitlength == 16 ? new Uint16Array(A.decodePixels().buffer) : new Uint8Array(A.decodePixels().buffer)).length, 
                        lt = new Uint8Array(Lt * A.colors), O = new Uint8Array(Lt);
                        var rt, pt = A.pixelBitlength - A.bits;
                        for (I = 0, R = 0; I < Lt; I++) {
                            for (P = yt[I], rt = 0; rt < pt; ) lt[R++] = P >>> rt & 255, 
                            rt += A.bits;
                            O[I] = P >>> rt & 255;
                        }
                    }
                    if (A.bits === 16) {
                        Lt = (yt = new Uint32Array(A.decodePixels().buffer)).length, 
                        lt = new Uint8Array(Lt * (32 / A.pixelBitlength) * A.colors), 
                        O = new Uint8Array(Lt * (32 / A.pixelBitlength)), vt = A.colors > 1, 
                        I = 0, R = 0;
                        for (var Q = 0; I < Lt; ) P = yt[I++], lt[R++] = P >>> 0 & 255, 
                        vt && (lt[R++] = P >>> 16 & 255, P = yt[I++], lt[R++] = P >>> 0 & 255), 
                        O[Q++] = P >>> 16 & 255;
                        E = 8;
                    }
                    M !== i.image_compression.NONE ? (b = e(lt, A.width * A.colors, A.colors, M), 
                    ot = e(O, A.width, 1, M)) : (b = lt, ot = O, T = void 0);
                }
                if (A.colorType === 3 && (S = this.color_spaces.INDEXED, Z = A.palette, 
                A.transparency.indexed)) {
                    var st = A.transparency.indexed, ct = 0;
                    for (I = 0, Lt = st.length; I < Lt; ++I) ct += st[I];
                    if ((ct /= 255) == Lt - 1 && st.indexOf(0) !== -1) U = [ st.indexOf(0) ]; else if (ct !== Lt) {
                        for (yt = A.decodePixels(), O = new Uint8Array(yt.length), 
                        I = 0, Lt = yt.length; I < Lt; I++) O[I] = st[yt[I]];
                        ot = e(O, A.width, 1);
                    }
                }
                var Ct = function(L) {
                    var j;
                    switch (L) {
                      case i.image_compression.FAST:
                        j = 11;
                        break;

                      case i.image_compression.MEDIUM:
                        j = 13;
                        break;

                      case i.image_compression.SLOW:
                        j = 14;
                        break;

                      default:
                        j = 12;
                    }
                    return j;
                }(M);
                return T === this.decode.FLATE_DECODE && (at = "/Predictor " + Ct + " "), 
                at += "/Colors " + X + " /BitsPerComponent " + E + " /Columns " + A.width, 
                (this.__addimage__.isArrayBuffer(b) || this.__addimage__.isArrayBufferView(b)) && (b = this.__addimage__.arrayBufferToBinaryString(b)), 
                (ot && this.__addimage__.isArrayBuffer(ot) || this.__addimage__.isArrayBufferView(ot)) && (ot = this.__addimage__.arrayBufferToBinaryString(ot)), 
                {
                    alias: p,
                    data: b,
                    index: k,
                    filter: T,
                    decodeParameters: at,
                    transparency: U,
                    palette: Z,
                    sMask: ot,
                    predictor: Ct,
                    width: A.width,
                    height: A.height,
                    bitsPerComponent: E,
                    colorSpace: S
                };
            }
        };
    })(Wt.API), function(i) {
        i.processGIF89A = function(e, n, a, s) {
            var o = new Xu(e), l = o.width, h = o.height, f = [];
            o.decodeAndBlitFrameRGBA(0, f);
            var m = {
                data: f,
                width: l,
                height: h
            }, y = new jo(100).encode(m, 100);
            return i.processJPEG.call(this, y, n, a, s);
        }, i.processGIF87A = i.processGIF89A;
    }(Wt.API), Fn.prototype.parseHeader = function() {
        if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), 
        this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, 
        this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), 
        this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, 
        this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), 
        this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, 
        this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), 
        this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, 
        this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), 
        this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), 
        this.bitPP < 15) {
            var i = this.colors === 0 ? 1 << this.bitPP : this.colors;
            this.palette = new Array(i);
            for (var e = 0; e < i; e++) {
                var n = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0);
                this.palette[e] = {
                    red: s,
                    green: a,
                    blue: n,
                    quad: o
                };
            }
        }
        this.height < 0 && (this.height *= -1, this.bottom_up = !1);
    }, Fn.prototype.parseBGR = function() {
        this.pos = this.offset;
        try {
            var i = "bit" + this.bitPP, e = this.width * this.height * 4;
            this.data = new Uint8Array(e), this[i]();
        } catch (n) {
            ye.log("bit decode error:" + n);
        }
    }, Fn.prototype.bit1 = function() {
        var i, e = Math.ceil(this.width / 8), n = e % 4;
        for (i = this.height - 1; i >= 0; i--) {
            for (var a = this.bottom_up ? i : this.height - 1 - i, s = 0; s < e; s++) for (var o = this.datav.getUint8(this.pos++, !0), l = a * this.width * 4 + 8 * s * 4, h = 0; h < 8 && 8 * s + h < this.width; h++) {
                var f = this.palette[o >> 7 - h & 1];
                this.data[l + 4 * h] = f.blue, this.data[l + 4 * h + 1] = f.green, 
                this.data[l + 4 * h + 2] = f.red, this.data[l + 4 * h + 3] = 255;
            }
            n !== 0 && (this.pos += 4 - n);
        }
    }, Fn.prototype.bit4 = function() {
        for (var i = Math.ceil(this.width / 2), e = i % 4, n = this.height - 1; n >= 0; n--) {
            for (var a = this.bottom_up ? n : this.height - 1 - n, s = 0; s < i; s++) {
                var o = this.datav.getUint8(this.pos++, !0), l = a * this.width * 4 + 2 * s * 4, h = o >> 4, f = 15 & o, m = this.palette[h];
                if (this.data[l] = m.blue, this.data[l + 1] = m.green, this.data[l + 2] = m.red, 
                this.data[l + 3] = 255, 2 * s + 1 >= this.width) break;
                m = this.palette[f], this.data[l + 4] = m.blue, this.data[l + 4 + 1] = m.green, 
                this.data[l + 4 + 2] = m.red, this.data[l + 4 + 3] = 255;
            }
            e !== 0 && (this.pos += 4 - e);
        }
    }, Fn.prototype.bit8 = function() {
        for (var i = this.width % 4, e = this.height - 1; e >= 0; e--) {
            for (var n = this.bottom_up ? e : this.height - 1 - e, a = 0; a < this.width; a++) {
                var s = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 4 * a;
                if (s < this.palette.length) {
                    var l = this.palette[s];
                    this.data[o] = l.red, this.data[o + 1] = l.green, this.data[o + 2] = l.blue, 
                    this.data[o + 3] = 255;
                } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, 
                this.data[o + 3] = 255;
            }
            i !== 0 && (this.pos += 4 - i);
        }
    }, Fn.prototype.bit15 = function() {
        for (var i = this.width % 3, e = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
            for (var a = this.bottom_up ? n : this.height - 1 - n, s = 0; s < this.width; s++) {
                var o = this.datav.getUint16(this.pos, !0);
                this.pos += 2;
                var l = (o & e) / e * 255 | 0, h = (o >> 5 & e) / e * 255 | 0, f = (o >> 10 & e) / e * 255 | 0, m = o >> 15 ? 255 : 0, y = a * this.width * 4 + 4 * s;
                this.data[y] = f, this.data[y + 1] = h, this.data[y + 2] = l, this.data[y + 3] = m;
            }
            this.pos += i;
        }
    }, Fn.prototype.bit16 = function() {
        for (var i = this.width % 3, e = parseInt("11111", 2), n = parseInt("111111", 2), a = this.height - 1; a >= 0; a--) {
            for (var s = this.bottom_up ? a : this.height - 1 - a, o = 0; o < this.width; o++) {
                var l = this.datav.getUint16(this.pos, !0);
                this.pos += 2;
                var h = (l & e) / e * 255 | 0, f = (l >> 5 & n) / n * 255 | 0, m = (l >> 11) / e * 255 | 0, y = s * this.width * 4 + 4 * o;
                this.data[y] = m, this.data[y + 1] = f, this.data[y + 2] = h, this.data[y + 3] = 255;
            }
            this.pos += i;
        }
    }, Fn.prototype.bit24 = function() {
        for (var i = this.height - 1; i >= 0; i--) {
            for (var e = this.bottom_up ? i : this.height - 1 - i, n = 0; n < this.width; n++) {
                var a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), l = e * this.width * 4 + 4 * n;
                this.data[l] = o, this.data[l + 1] = s, this.data[l + 2] = a, this.data[l + 3] = 255;
            }
            this.pos += this.width % 4;
        }
    }, Fn.prototype.bit32 = function() {
        for (var i = this.height - 1; i >= 0; i--) for (var e = this.bottom_up ? i : this.height - 1 - i, n = 0; n < this.width; n++) {
            var a = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), l = this.datav.getUint8(this.pos++, !0), h = e * this.width * 4 + 4 * n;
            this.data[h] = o, this.data[h + 1] = s, this.data[h + 2] = a, this.data[h + 3] = l;
        }
    }, Fn.prototype.getData = function() {
        return this.data;
    }, function(i) {
        i.processBMP = function(e, n, a, s) {
            var o = new Fn(e, !1), l = o.width, h = o.height, f = {
                data: o.getData(),
                width: l,
                height: h
            }, m = new jo(100).encode(f, 100);
            return i.processJPEG.call(this, m, n, a, s);
        };
    }(Wt.API), nc.prototype.getData = function() {
        return this.data;
    }, function(i) {
        i.processWEBP = function(e, n, a, s) {
            var o = new nc(e), l = o.width, h = o.height, f = {
                data: o.getData(),
                width: l,
                height: h
            }, m = new jo(100).encode(f, 100);
            return i.processJPEG.call(this, m, n, a, s);
        };
    }(Wt.API), Wt.API.processRGBA = function(i, e, n) {
        for (var a = i.data, s = a.length, o = new Uint8Array(s / 4 * 3), l = new Uint8Array(s / 4), h = 0, f = 0, m = 0; m < s; m += 4) {
            var y = a[m], b = a[m + 1], k = a[m + 2], p = a[m + 3];
            o[h++] = y, o[h++] = b, o[h++] = k, l[f++] = p;
        }
        var M = this.__addimage__.arrayBufferToBinaryString(o);
        return {
            alpha: this.__addimage__.arrayBufferToBinaryString(l),
            data: M,
            index: e,
            alias: n,
            colorSpace: "DeviceRGB",
            bitsPerComponent: 8,
            width: i.width,
            height: i.height
        };
    }, Wt.API.setLanguage = function(i) {
        return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, 
        this.internal.languageSettings.isSubscribed = !1), {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic (Standard)",
            "ar-DZ": "Arabic (Algeria)",
            "ar-BH": "Arabic (Bahrain)",
            "ar-EG": "Arabic (Egypt)",
            "ar-IQ": "Arabic (Iraq)",
            "ar-JO": "Arabic (Jordan)",
            "ar-KW": "Arabic (Kuwait)",
            "ar-LB": "Arabic (Lebanon)",
            "ar-LY": "Arabic (Libya)",
            "ar-MA": "Arabic (Morocco)",
            "ar-OM": "Arabic (Oman)",
            "ar-QA": "Arabic (Qatar)",
            "ar-SA": "Arabic (Saudi Arabia)",
            "ar-SY": "Arabic (Syria)",
            "ar-TN": "Arabic (Tunisia)",
            "ar-AE": "Arabic (U.A.E.)",
            "ar-YE": "Arabic (Yemen)",
            an: "Aragonese",
            hy: "Armenian",
            as: "Assamese",
            ast: "Asturian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bs: "Bosnian",
            br: "Breton",
            bg: "Bulgarian",
            my: "Burmese",
            ca: "Catalan",
            ch: "Chamorro",
            ce: "Chechen",
            zh: "Chinese",
            "zh-HK": "Chinese (Hong Kong)",
            "zh-CN": "Chinese (PRC)",
            "zh-SG": "Chinese (Singapore)",
            "zh-TW": "Chinese (Taiwan)",
            cv: "Chuvash",
            co: "Corsican",
            cr: "Cree",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch (Standard)",
            "nl-BE": "Dutch (Belgian)",
            en: "English",
            "en-AU": "English (Australia)",
            "en-BZ": "English (Belize)",
            "en-CA": "English (Canada)",
            "en-IE": "English (Ireland)",
            "en-JM": "English (Jamaica)",
            "en-NZ": "English (New Zealand)",
            "en-PH": "English (Philippines)",
            "en-ZA": "English (South Africa)",
            "en-TT": "English (Trinidad & Tobago)",
            "en-GB": "English (United Kingdom)",
            "en-US": "English (United States)",
            "en-ZW": "English (Zimbabwe)",
            eo: "Esperanto",
            et: "Estonian",
            fo: "Faeroese",
            fj: "Fijian",
            fi: "Finnish",
            fr: "French (Standard)",
            "fr-BE": "French (Belgium)",
            "fr-CA": "French (Canada)",
            "fr-FR": "French (France)",
            "fr-LU": "French (Luxembourg)",
            "fr-MC": "French (Monaco)",
            "fr-CH": "French (Switzerland)",
            fy: "Frisian",
            fur: "Friulian",
            gd: "Gaelic (Scots)",
            "gd-IE": "Gaelic (Irish)",
            gl: "Galacian",
            ka: "Georgian",
            de: "German (Standard)",
            "de-AT": "German (Austria)",
            "de-DE": "German (Germany)",
            "de-LI": "German (Liechtenstein)",
            "de-LU": "German (Luxembourg)",
            "de-CH": "German (Switzerland)",
            el: "Greek",
            gu: "Gujurati",
            ht: "Haitian",
            he: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            iu: "Inuktitut",
            ga: "Irish",
            it: "Italian (Standard)",
            "it-CH": "Italian (Switzerland)",
            ja: "Japanese",
            kn: "Kannada",
            ks: "Kashmiri",
            kk: "Kazakh",
            km: "Khmer",
            ky: "Kirghiz",
            tlh: "Klingon",
            ko: "Korean",
            "ko-KP": "Korean (North Korea)",
            "ko-KR": "Korean (South Korea)",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "North Macedonia",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mo: "Moldavian",
            nv: "Navajo",
            ng: "Ndonga",
            ne: "Nepali",
            no: "Norwegian",
            nb: "Norwegian (Bokmal)",
            nn: "Norwegian (Nynorsk)",
            oc: "Occitan",
            or: "Oriya",
            om: "Oromo",
            fa: "Persian",
            "fa-IR": "Persian/Iran",
            pl: "Polish",
            pt: "Portuguese",
            "pt-BR": "Portuguese (Brazil)",
            pa: "Punjabi",
            "pa-IN": "Punjabi (India)",
            "pa-PK": "Punjabi (Pakistan)",
            qu: "Quechua",
            rm: "Rhaeto-Romanic",
            ro: "Romanian",
            "ro-MO": "Romanian (Moldavia)",
            ru: "Russian",
            "ru-MO": "Russian (Moldavia)",
            sz: "Sami (Lappish)",
            sg: "Sango",
            sa: "Sanskrit",
            sc: "Sardinian",
            sd: "Sindhi",
            si: "Singhalese",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somani",
            sb: "Sorbian",
            es: "Spanish",
            "es-AR": "Spanish (Argentina)",
            "es-BO": "Spanish (Bolivia)",
            "es-CL": "Spanish (Chile)",
            "es-CO": "Spanish (Colombia)",
            "es-CR": "Spanish (Costa Rica)",
            "es-DO": "Spanish (Dominican Republic)",
            "es-EC": "Spanish (Ecuador)",
            "es-SV": "Spanish (El Salvador)",
            "es-GT": "Spanish (Guatemala)",
            "es-HN": "Spanish (Honduras)",
            "es-MX": "Spanish (Mexico)",
            "es-NI": "Spanish (Nicaragua)",
            "es-PA": "Spanish (Panama)",
            "es-PY": "Spanish (Paraguay)",
            "es-PE": "Spanish (Peru)",
            "es-PR": "Spanish (Puerto Rico)",
            "es-ES": "Spanish (Spain)",
            "es-UY": "Spanish (Uruguay)",
            "es-VE": "Spanish (Venezuela)",
            sx: "Sutu",
            sw: "Swahili",
            sv: "Swedish",
            "sv-FI": "Swedish (Finland)",
            "sv-SV": "Swedish (Sweden)",
            ta: "Tamil",
            tt: "Tatar",
            te: "Teluga",
            th: "Thai",
            tig: "Tigre",
            ts: "Tsonga",
            tn: "Tswana",
            tr: "Turkish",
            tk: "Turkmen",
            uk: "Ukrainian",
            hsb: "Upper Sorbian",
            ur: "Urdu",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volapuk",
            wa: "Walloon",
            cy: "Welsh",
            xh: "Xhosa",
            ji: "Yiddish",
            zu: "Zulu"
        }[i] !== void 0 && (this.internal.languageSettings.languageCode = i, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
            this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
        }), this.internal.languageSettings.isSubscribed = !0)), this;
    }, ui = Wt.API, xa = ui.getCharWidthsArray = function(i, e) {
        var n, a, s = (e = e || {}).font || this.internal.getFont(), o = e.fontSize || this.internal.getFontSize(), l = e.charSpace || this.internal.getCharSpace(), h = e.widths ? e.widths : s.metadata.Unicode.widths, f = h.fof ? h.fof : 1, m = e.kerning ? e.kerning : s.metadata.Unicode.kerning, y = m.fof ? m.fof : 1, b = e.doKerning !== !1, k = 0, p = i.length, M = 0, S = h[0] || f, E = [];
        for (n = 0; n < p; n++) a = i.charCodeAt(n), typeof s.metadata.widthOfString == "function" ? E.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(a)) + l * (1e3 / o) || 0) / 1e3) : (k = b && fe(m[a]) === "object" && !isNaN(parseInt(m[a][M], 10)) ? m[a][M] / y : 0, 
        E.push((h[a] || S) / f + k)), M = a;
        return E;
    }, Zs = ui.getStringUnitWidth = function(i, e) {
        var n = (e = e || {}).fontSize || this.internal.getFontSize(), a = e.font || this.internal.getFont(), s = e.charSpace || this.internal.getCharSpace();
        return ui.processArabic && (i = ui.processArabic(i)), typeof a.metadata.widthOfString == "function" ? a.metadata.widthOfString(i, n, s) / n : xa.apply(this, arguments).reduce(function(o, l) {
            return o + l;
        }, 0);
    }, Qs = function(i, e, n, a) {
        for (var s = [], o = 0, l = i.length, h = 0; o !== l && h + e[o] < n; ) h += e[o], 
        o++;
        s.push(i.slice(0, o));
        var f = o;
        for (h = 0; o !== l; ) h + e[o] > a && (s.push(i.slice(f, o)), h = 0, f = o), 
        h += e[o], o++;
        return f !== o && s.push(i.slice(f, o)), s;
    }, tc = function(i, e, n) {
        n || (n = {});
        var a, s, o, l, h, f, m, y = [], b = [ y ], k = n.textIndent || 0, p = 0, M = 0, S = i.split(" "), E = xa.apply(this, [ " ", n ])[0];
        if (f = n.lineIndent === -1 ? S[0].length + 2 : n.lineIndent || 0) {
            var A = Array(f).join(" "), U = [];
            S.map(function(Z) {
                (Z = Z.split(/\s*\n/)).length > 1 ? U = U.concat(Z.map(function(ot, yt) {
                    return (yt && ot.length ? `
` : "") + ot;
                })) : U.push(Z[0]);
            }), S = U, f = Zs.apply(this, [ A, n ]);
        }
        for (o = 0, l = S.length; o < l; o++) {
            var X = 0;
            if (a = S[o], f && a[0] == `
` && (a = a.substr(1), X = 1), k + p + (M = (s = xa.apply(this, [ a, n ])).reduce(function(Z, ot) {
                return Z + ot;
            }, 0)) > e || X) {
                if (M > e) {
                    for (h = Qs.apply(this, [ a, s, e - (k + p), e ]), y.push(h.shift()), 
                    y = [ h.pop() ]; h.length; ) b.push([ h.shift() ]);
                    M = s.slice(a.length - (y[0] ? y[0].length : 0)).reduce(function(Z, ot) {
                        return Z + ot;
                    }, 0);
                } else y = [ a ];
                b.push(y), k = M + f, p = E;
            } else y.push(a), k += p + M, p = E;
        }
        return m = f ? function(Z, ot) {
            return (ot ? A : "") + Z.join(" ");
        } : function(Z) {
            return Z.join(" ");
        }, b.map(m);
    }, ui.splitTextToSize = function(i, e, n) {
        var a, s = (n = n || {}).fontSize || this.internal.getFontSize(), o = function(y) {
            if (y.widths && y.kerning) return {
                widths: y.widths,
                kerning: y.kerning
            };
            var b = this.internal.getFont(y.fontName, y.fontStyle);
            return b.metadata.Unicode ? {
                widths: b.metadata.Unicode.widths || {
                    0: 1
                },
                kerning: b.metadata.Unicode.kerning || {}
            } : {
                font: b.metadata,
                fontSize: this.internal.getFontSize(),
                charSpace: this.internal.getCharSpace()
            };
        }.call(this, n);
        a = Array.isArray(i) ? i : String(i).split(/\r?\n/);
        var l = 1 * this.internal.scaleFactor * e / s;
        o.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / s : 0, 
        o.lineIndent = n.lineIndent;
        var h, f, m = [];
        for (h = 0, f = a.length; h < f; h++) m = m.concat(tc.apply(this, [ a[h], l, o ]));
        return m;
    }, function(i) {
        i.__fontmetrics__ = i.__fontmetrics__ || {};
        for (var e = "klmnopqrstuvwxyz", n = {}, a = {}, s = 0; s < 16; s++) n[e[s]] = "0123456789abcdef"[s], 
        a["0123456789abcdef"[s]] = e[s];
        var o = function(b) {
            return "0x" + parseInt(b, 10).toString(16);
        }, l = i.__fontmetrics__.compress = function(b) {
            var k, p, M, S, E = [ "{" ];
            for (var A in b) {
                if (k = b[A], isNaN(parseInt(A, 10)) ? p = "'" + A + "'" : (A = parseInt(A, 10), 
                p = (p = o(A).slice(2)).slice(0, -1) + a[p.slice(-1)]), typeof k == "number") k < 0 ? (M = o(k).slice(3), 
                S = "-") : (M = o(k).slice(2), S = ""), M = S + M.slice(0, -1) + a[M.slice(-1)]; else {
                    if (fe(k) !== "object") throw new Error("Don't know what to do with value type " + fe(k) + ".");
                    M = l(k);
                }
                E.push(p + M);
            }
            return E.push("}"), E.join("");
        }, h = i.__fontmetrics__.uncompress = function(b) {
            if (typeof b != "string") throw new Error("Invalid argument passed to uncompress.");
            for (var k, p, M, S, E = {}, A = 1, U = E, X = [], Z = "", ot = "", yt = b.length - 1, Lt = 1; Lt < yt; Lt += 1) (S = b[Lt]) == "'" ? k ? (M = k.join(""), 
            k = void 0) : k = [] : k ? k.push(S) : S == "{" ? (X.push([ U, M ]), 
            U = {}, M = void 0) : S == "}" ? ((p = X.pop())[0][p[1]] = U, M = void 0, 
            U = p[0]) : S == "-" ? A = -1 : M === void 0 ? n.hasOwnProperty(S) ? (Z += n[S], 
            M = parseInt(Z, 16) * A, A = 1, Z = "") : Z += S : n.hasOwnProperty(S) ? (ot += n[S], 
            U[M] = parseInt(ot, 16) * A, A = 1, M = void 0, ot = "") : ot += S;
            return E;
        }, f = {
            codePages: [ "WinAnsiEncoding" ],
            WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
        }, m = {
            Unicode: {
                Courier: f,
                "Courier-Bold": f,
                "Courier-BoldOblique": f,
                "Courier-Oblique": f,
                Helvetica: f,
                "Helvetica-Bold": f,
                "Helvetica-BoldOblique": f,
                "Helvetica-Oblique": f,
                "Times-Roman": f,
                "Times-Bold": f,
                "Times-BoldItalic": f,
                "Times-Italic": f
            }
        }, y = {
            Unicode: {
                "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
                Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
            }
        };
        i.events.push([ "addFont", function(b) {
            var k = b.font, p = y.Unicode[k.postScriptName];
            p && (k.metadata.Unicode = {}, k.metadata.Unicode.widths = p.widths, 
            k.metadata.Unicode.kerning = p.kerning);
            var M = m.Unicode[k.postScriptName];
            M && (k.metadata.Unicode.encoding = M, k.encoding = M.codePages[0]);
        } ]);
    }(Wt.API), function(i) {
        var e = function(n) {
            for (var a = n.length, s = new Uint8Array(a), o = 0; o < a; o++) s[o] = n.charCodeAt(o);
            return s;
        };
        i.API.events.push([ "addFont", function(n) {
            var a = void 0, s = n.font, o = n.instance;
            if (!s.isStandardFont) {
                if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
                if (typeof (a = o.existsFileInVFS(s.postScriptName) === !1 ? o.loadFile(s.postScriptName) : o.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
                (function(l, h) {
                    h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(zi(h)), l.metadata = i.API.TTFFont.open(h), 
                    l.metadata.Unicode = l.metadata.Unicode || {
                        encoding: {},
                        kerning: {},
                        widths: []
                    }, l.metadata.glyIdsUsed = [ 0 ];
                })(s, a);
            }
        } ]);
    }(Wt), function(i) {
        function e() {
            return (Ht.canvg ? Promise.resolve(Ht.canvg) : bs(() => import("./index.es-88b649f9.js").then(async n => (await n.__tla, 
            n)), [ "./index.es-88b649f9.js", "./index-6c08ea4c.js", "./index-42414064.css", "./checkOverview-9cc05c66.js", "./check-C-7cf0dd88.js", "./check-a26308bc.js", "./_plugin-vue_export-helper-1b428a4d.js", "./checkOverview-a6573f20.css", "./checkProblems-ac1fe994.js", "./index-c4ca0ced.js", "./index-993301ca.js", "./index-f686bc96.css", "./el-collapse-item-c8b76a0a.js", "./el-collapse-item-3aeebddd.css", "./dialogProblem-fa4d1fd2.js", "./dialogProblem-25fed064.css", "./checkProblems-34e17a3e.css", "./checkCodes-f0c443b2.js", "./el-breadcrumb-item-45b75827.js", "./el-breadcrumb-item-855342db.css", "./diff-code-51383ecb.js", "./diff-code-9e5c7d87.css", "./checkCodes-5ddd2eb9.css", "./html2canvas.esm-ad032b91.js", "./formatTime-de6f1520.js" ], import.meta.url)).catch(function(n) {
                return Promise.reject(new Error("Could not load canvg: " + n));
            }).then(function(n) {
                return n.default ? n.default : n;
            });
        }
        Wt.API.addSvgAsImage = function(n, a, s, o, l, h, f, m) {
            if (isNaN(a) || isNaN(s)) throw ye.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), 
            new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
            if (isNaN(o) || isNaN(l)) throw ye.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), 
            new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
            var y = document.createElement("canvas");
            y.width = o, y.height = l;
            var b = y.getContext("2d");
            b.fillStyle = "#fff", b.fillRect(0, 0, y.width, y.height);
            var k = {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                ignoreDimensions: !0
            }, p = this;
            return e().then(function(M) {
                return M.fromString(b, n, k);
            }, function() {
                return Promise.reject(new Error("Could not load canvg."));
            }).then(function(M) {
                return M.render(k);
            }).then(function() {
                p.addImage(y.toDataURL("image/jpeg", 1), a, s, o, l, f, m);
            });
        };
    }(), Wt.API.putTotalPages = function(i) {
        var e, n = 0;
        parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(i, "g"), 
        n = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(i, this.internal.getFont()), "g"), 
        n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
        for (var a = 1; a <= this.internal.getNumberOfPages(); a++) for (var s = 0; s < this.internal.pages[a].length; s++) this.internal.pages[a][s] = this.internal.pages[a][s].replace(e, n);
        return this;
    }, Wt.API.viewerPreferences = function(i, e) {
        var n;
        i = i || {}, e = e || !1;
        var a, s, o, l = {
            HideToolbar: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [ !0, !1 ],
                pdfVersion: 1.3
            },
            HideMenubar: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [ !0, !1 ],
                pdfVersion: 1.3
            },
            HideWindowUI: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [ !0, !1 ],
                pdfVersion: 1.3
            },
            FitWindow: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [ !0, !1 ],
                pdfVersion: 1.3
            },
            CenterWindow: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [ !0, !1 ],
                pdfVersion: 1.3
            },
            DisplayDocTitle: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [ !0, !1 ],
                pdfVersion: 1.4
            },
            NonFullScreenPageMode: {
                defaultValue: "UseNone",
                value: "UseNone",
                type: "name",
                explicitSet: !1,
                valueSet: [ "UseNone", "UseOutlines", "UseThumbs", "UseOC" ],
                pdfVersion: 1.3
            },
            Direction: {
                defaultValue: "L2R",
                value: "L2R",
                type: "name",
                explicitSet: !1,
                valueSet: [ "L2R", "R2L" ],
                pdfVersion: 1.3
            },
            ViewArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: [ "MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox" ],
                pdfVersion: 1.4
            },
            ViewClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: [ "MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox" ],
                pdfVersion: 1.4
            },
            PrintArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: [ "MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox" ],
                pdfVersion: 1.4
            },
            PrintClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: [ "MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox" ],
                pdfVersion: 1.4
            },
            PrintScaling: {
                defaultValue: "AppDefault",
                value: "AppDefault",
                type: "name",
                explicitSet: !1,
                valueSet: [ "AppDefault", "None" ],
                pdfVersion: 1.6
            },
            Duplex: {
                defaultValue: "",
                value: "none",
                type: "name",
                explicitSet: !1,
                valueSet: [ "Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none" ],
                pdfVersion: 1.7
            },
            PickTrayByPDFSize: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [ !0, !1 ],
                pdfVersion: 1.7
            },
            PrintPageRange: {
                defaultValue: "",
                value: "",
                type: "array",
                explicitSet: !1,
                valueSet: null,
                pdfVersion: 1.7
            },
            NumCopies: {
                defaultValue: 1,
                value: 1,
                type: "integer",
                explicitSet: !1,
                valueSet: null,
                pdfVersion: 1.7
            }
        }, h = Object.keys(l), f = [], m = 0, y = 0, b = 0;
        function k(M, S) {
            var E, A = !1;
            for (E = 0; E < M.length; E += 1) M[E] === S && (A = !0);
            return A;
        }
        if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, 
        this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(l)), 
        this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, 
        i === "reset" || e === !0) {
            var p = h.length;
            for (b = 0; b < p; b += 1) n[h[b]].value = n[h[b]].defaultValue, n[h[b]].explicitSet = !1;
        }
        if (fe(i) === "object") {
            for (s in i) if (o = i[s], k(h, s) && o !== void 0) {
                if (n[s].type === "boolean" && typeof o == "boolean") n[s].value = o; else if (n[s].type === "name" && k(n[s].valueSet, o)) n[s].value = o; else if (n[s].type === "integer" && Number.isInteger(o)) n[s].value = o; else if (n[s].type === "array") {
                    for (m = 0; m < o.length; m += 1) if (a = !0, o[m].length === 1 && typeof o[m][0] == "number") f.push(String(o[m] - 1)); else if (o[m].length > 1) {
                        for (y = 0; y < o[m].length; y += 1) typeof o[m][y] != "number" && (a = !1);
                        a === !0 && f.push([ o[m][0] - 1, o[m][1] - 1 ].join(" "));
                    }
                    n[s].value = "[" + f.join(" ") + "]";
                } else n[s].value = n[s].defaultValue;
                n[s].explicitSet = !0;
            }
        }
        return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
            var M, S = [];
            for (M in n) n[M].explicitSet === !0 && (n[M].type === "name" ? S.push("/" + M + " /" + n[M].value) : S.push("/" + M + " " + n[M].value));
            S.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + S.join(`
`) + `
>>`);
        }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, 
        this;
    }, function(i) {
        var e = function() {
            var a = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), o = unescape(encodeURIComponent(a)), l = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), m = o.length + l.length + h.length + s.length + f.length;
            this.internal.__metadata__.metadata_object_number = this.internal.newObject(), 
            this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + m + " >>"), 
            this.internal.write("stream"), this.internal.write(s + o + l + h + f), 
            this.internal.write("endstream"), this.internal.write("endobj");
        }, n = function() {
            this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
        };
        i.addMetadata = function(a, s) {
            return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
                metadata: a,
                namespaceuri: s || "http://jspdf.default.namespaceuri/"
            }, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", e)), 
            this;
        };
    }(Wt.API), function(i) {
        var e = i.API, n = e.pdfEscape16 = function(o, l) {
            for (var h, f = l.metadata.Unicode.widths, m = [ "", "0", "00", "000", "0000" ], y = [ "" ], b = 0, k = o.length; b < k; ++b) {
                if (h = l.metadata.characterToGlyph(o.charCodeAt(b)), l.metadata.glyIdsUsed.push(h), 
                l.metadata.toUnicode[h] = o.charCodeAt(b), f.indexOf(h) == -1 && (f.push(h), 
                f.push([ parseInt(l.metadata.widthOfGlyph(h), 10) ])), h == "0") return y.join("");
                h = h.toString(16), y.push(m[4 - h.length], h);
            }
            return y.join("");
        }, a = function(o) {
            var l, h, f, m, y, b, k;
            for (y = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, f = [], b = 0, k = (h = Object.keys(o).sort(function(p, M) {
                return p - M;
            })).length; b < k; b++) l = h[b], f.length >= 100 && (y += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), o[l] !== void 0 && o[l] !== null && typeof o[l].toString == "function" && (m = ("0000" + o[l].toString(16)).slice(-4), 
            l = ("0000" + (+l).toString(16)).slice(-4), f.push("<" + l + "><" + m + ">"));
            return f.length && (y += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), y + `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
        };
        e.events.push([ "putFont", function(o) {
            (function(l) {
                var h = l.font, f = l.out, m = l.newObject, y = l.putStream;
                if (h.metadata instanceof i.API.TTFFont && h.encoding === "Identity-H") {
                    for (var b = h.metadata.Unicode.widths, k = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), p = "", M = 0; M < k.length; M++) p += String.fromCharCode(k[M]);
                    var S = m();
                    y({
                        data: p,
                        addLength1: !0,
                        objectId: S
                    }), f("endobj");
                    var E = m();
                    y({
                        data: a(h.metadata.toUnicode),
                        addLength1: !0,
                        objectId: E
                    }), f("endobj");
                    var A = m();
                    f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + ei(h.fontName)), 
                    f("/FontFile2 " + S + " 0 R"), f("/FontBBox " + i.API.PDFObject.convert(h.metadata.bbox)), 
                    f("/Flags " + h.metadata.flags), f("/StemV " + h.metadata.stemV), 
                    f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), 
                    f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), 
                    f(">>"), f("endobj");
                    var U = m();
                    f("<<"), f("/Type /Font"), f("/BaseFont /" + ei(h.fontName)), 
                    f("/FontDescriptor " + A + " 0 R"), f("/W " + i.API.PDFObject.convert(b)), 
                    f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), 
                    f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), 
                    f("/Ordering (" + h.encoding + ")"), f(">>"), f(">>"), f("endobj"), 
                    h.objectNumber = m(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), 
                    f("/ToUnicode " + E + " 0 R"), f("/BaseFont /" + ei(h.fontName)), 
                    f("/Encoding /" + h.encoding), f("/DescendantFonts [" + U + " 0 R]"), 
                    f(">>"), f("endobj"), h.isAlreadyPutted = !0;
                }
            })(o);
        } ]), e.events.push([ "putFont", function(o) {
            (function(l) {
                var h = l.font, f = l.out, m = l.newObject, y = l.putStream;
                if (h.metadata instanceof i.API.TTFFont && h.encoding === "WinAnsiEncoding") {
                    for (var b = h.metadata.rawData, k = "", p = 0; p < b.length; p++) k += String.fromCharCode(b[p]);
                    var M = m();
                    y({
                        data: k,
                        addLength1: !0,
                        objectId: M
                    }), f("endobj");
                    var S = m();
                    y({
                        data: a(h.metadata.toUnicode),
                        addLength1: !0,
                        objectId: S
                    }), f("endobj");
                    var E = m();
                    f("<<"), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), 
                    f("/StemV " + h.metadata.stemV), f("/Type /FontDescriptor"), 
                    f("/FontFile2 " + M + " 0 R"), f("/Flags 96"), f("/FontBBox " + i.API.PDFObject.convert(h.metadata.bbox)), 
                    f("/FontName /" + ei(h.fontName)), f("/ItalicAngle " + h.metadata.italicAngle), 
                    f("/Ascent " + h.metadata.ascender), f(">>"), f("endobj"), h.objectNumber = m();
                    for (var A = 0; A < h.metadata.hmtx.widths.length; A++) h.metadata.hmtx.widths[A] = parseInt(h.metadata.hmtx.widths[A] * (1e3 / h.metadata.head.unitsPerEm));
                    f("<</Subtype/TrueType/Type/Font/ToUnicode " + S + " 0 R/BaseFont/" + ei(h.fontName) + "/FontDescriptor " + E + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + i.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), 
                    f("endobj"), h.isAlreadyPutted = !0;
                }
            })(o);
        } ]);
        var s = function(o) {
            var l, h = o.text || "", f = o.x, m = o.y, y = o.options || {}, b = o.mutex || {}, k = b.pdfEscape, p = b.activeFontKey, M = b.fonts, S = p, E = "", A = 0, U = "", X = M[S].encoding;
            if (M[S].encoding !== "Identity-H") return {
                text: h,
                x: f,
                y: m,
                options: y,
                mutex: b
            };
            for (U = h, S = p, Array.isArray(h) && (U = h[0]), A = 0; A < U.length; A += 1) M[S].metadata.hasOwnProperty("cmap") && (l = M[S].metadata.cmap.unicode.codeMap[U[A].charCodeAt(0)]), 
            l || U[A].charCodeAt(0) < 256 && M[S].metadata.hasOwnProperty("Unicode") ? E += U[A] : E += "";
            var Z = "";
            return parseInt(S.slice(1)) < 14 || X === "WinAnsiEncoding" ? Z = k(E, S).split("").map(function(ot) {
                return ot.charCodeAt(0).toString(16);
            }).join("") : X === "Identity-H" && (Z = n(E, M[S])), b.isHex = !0, 
            {
                text: Z,
                x: f,
                y: m,
                options: y,
                mutex: b
            };
        };
        e.events.push([ "postProcessText", function(o) {
            var l = o.text || "", h = [], f = {
                text: l,
                x: o.x,
                y: o.y,
                options: o.options,
                mutex: o.mutex
            };
            if (Array.isArray(l)) {
                var m = 0;
                for (m = 0; m < l.length; m += 1) Array.isArray(l[m]) && l[m].length === 3 ? h.push([ s(Object.assign({}, f, {
                    text: l[m][0]
                })).text, l[m][1], l[m][2] ]) : h.push(s(Object.assign({}, f, {
                    text: l[m]
                })).text);
                o.text = h;
            } else o.text = s(Object.assign({}, f, {
                text: l
            })).text;
        } ]);
    }(Wt), function(i) {
        var e = function() {
            return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
        };
        i.existsFileInVFS = function(n) {
            return e.call(this), this.internal.vFS[n] !== void 0;
        }, i.addFileToVFS = function(n, a) {
            return e.call(this), this.internal.vFS[n] = a, this;
        }, i.getFileFromVFS = function(n) {
            return e.call(this), this.internal.vFS[n] !== void 0 ? this.internal.vFS[n] : null;
        };
    }(Wt.API), function(i) {
        i.__bidiEngine__ = i.prototype.__bidiEngine__ = function(a) {
            var s, o, l, h, f, m, y, b = e, k = [ [ 0, 3, 0, 1, 0, 0, 0 ], [ 0, 3, 0, 1, 2, 2, 0 ], [ 0, 3, 0, 17, 2, 0, 1 ], [ 0, 3, 5, 5, 4, 1, 0 ], [ 0, 3, 21, 21, 4, 0, 1 ], [ 0, 3, 5, 5, 4, 2, 0 ] ], p = [ [ 2, 0, 1, 1, 0, 1, 0 ], [ 2, 0, 1, 1, 0, 2, 0 ], [ 2, 0, 2, 1, 3, 2, 0 ], [ 2, 0, 2, 33, 3, 1, 1 ] ], M = {
                L: 0,
                R: 1,
                EN: 2,
                AN: 3,
                N: 4,
                B: 5,
                S: 6
            }, S = {
                0: 0,
                5: 1,
                6: 2,
                7: 3,
                32: 4,
                251: 5,
                254: 6,
                255: 7
            }, E = [ "(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤" ], A = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), U = !1, X = 0;
            this.__bidiEngine__ = {};
            var Z = function(P) {
                var I = P.charCodeAt(), R = I >> 8, T = S[R];
                return T !== void 0 ? b[256 * T + (255 & I)] : R === 252 || R === 253 ? "AL" : A.test(R) ? "L" : R === 8 ? "R" : "N";
            }, ot = function(P) {
                for (var I, R = 0; R < P.length; R++) {
                    if ((I = Z(P.charAt(R))) === "L") return !1;
                    if (I === "R") return !0;
                }
                return !1;
            }, yt = function(P, I, R, T) {
                var at, rt, pt, Q, st = I[T];
                switch (st) {
                  case "L":
                  case "R":
                  case "LRE":
                  case "RLE":
                  case "LRO":
                  case "RLO":
                  case "PDF":
                    U = !1;
                    break;

                  case "N":
                  case "AN":
                    break;

                  case "EN":
                    U && (st = "AN");
                    break;

                  case "AL":
                    U = !0, st = "R";
                    break;

                  case "WS":
                  case "BN":
                    st = "N";
                    break;

                  case "CS":
                    T < 1 || T + 1 >= I.length || (at = R[T - 1]) !== "EN" && at !== "AN" || (rt = I[T + 1]) !== "EN" && rt !== "AN" ? st = "N" : U && (rt = "AN"), 
                    st = rt === at ? rt : "N";
                    break;

                  case "ES":
                    st = (at = T > 0 ? R[T - 1] : "B") === "EN" && T + 1 < I.length && I[T + 1] === "EN" ? "EN" : "N";
                    break;

                  case "ET":
                    if (T > 0 && R[T - 1] === "EN") {
                        st = "EN";
                        break;
                    }
                    if (U) {
                        st = "N";
                        break;
                    }
                    for (pt = T + 1, Q = I.length; pt < Q && I[pt] === "ET"; ) pt++;
                    st = pt < Q && I[pt] === "EN" ? "EN" : "N";
                    break;

                  case "NSM":
                    if (l && !h) {
                        for (Q = I.length, pt = T + 1; pt < Q && I[pt] === "NSM"; ) pt++;
                        if (pt < Q) {
                            var ct = P[T], Ct = ct >= 1425 && ct <= 2303 || ct === 64286;
                            if (at = I[pt], Ct && (at === "R" || at === "AL")) {
                                st = "R";
                                break;
                            }
                        }
                    }
                    st = T < 1 || (at = I[T - 1]) === "B" ? "N" : R[T - 1];
                    break;

                  case "B":
                    U = !1, s = !0, st = X;
                    break;

                  case "S":
                    o = !0, st = "N";
                }
                return st;
            }, Lt = function(P, I, R) {
                var T = P.split("");
                return R && O(T, R, {
                    hiLevel: X
                }), T.reverse(), I && I.reverse(), T.join("");
            }, O = function(P, I, R) {
                var T, at, rt, pt, Q, st = -1, ct = P.length, Ct = 0, L = [], j = X ? p : k, q = [];
                for (U = !1, s = !1, o = !1, at = 0; at < ct; at++) q[at] = Z(P[at]);
                for (rt = 0; rt < ct; rt++) {
                    if (Q = Ct, L[rt] = yt(P, q, L, rt), T = 240 & (Ct = j[Q][M[L[rt]]]), 
                    Ct &= 15, I[rt] = pt = j[Ct][5], T > 0) if (T === 16) {
                        for (at = st; at < rt; at++) I[at] = 1;
                        st = -1;
                    } else st = -1;
                    if (j[Ct][6]) st === -1 && (st = rt); else if (st > -1) {
                        for (at = st; at < rt; at++) I[at] = pt;
                        st = -1;
                    }
                    q[rt] === "B" && (I[rt] = 0), R.hiLevel |= pt;
                }
                o && function(W, G, tt) {
                    for (var et = 0; et < tt; et++) if (W[et] === "S") {
                        G[et] = X;
                        for (var nt = et - 1; nt >= 0 && W[nt] === "WS"; nt--) G[nt] = X;
                    }
                }(q, I, ct);
            }, lt = function(P, I, R, T, at) {
                if (!(at.hiLevel < P)) {
                    if (P === 1 && X === 1 && !s) return I.reverse(), void (R && R.reverse());
                    for (var rt, pt, Q, st, ct = I.length, Ct = 0; Ct < ct; ) {
                        if (T[Ct] >= P) {
                            for (Q = Ct + 1; Q < ct && T[Q] >= P; ) Q++;
                            for (st = Ct, pt = Q - 1; st < pt; st++, pt--) rt = I[st], 
                            I[st] = I[pt], I[pt] = rt, R && (rt = R[st], R[st] = R[pt], 
                            R[pt] = rt);
                            Ct = Q;
                        }
                        Ct++;
                    }
                }
            }, vt = function(P, I, R) {
                var T = P.split(""), at = {
                    hiLevel: X
                };
                return R || (R = []), O(T, R, at), function(rt, pt, Q) {
                    if (Q.hiLevel !== 0 && y) for (var st, ct = 0; ct < rt.length; ct++) pt[ct] === 1 && (st = E.indexOf(rt[ct])) >= 0 && (rt[ct] = E[st + 1]);
                }(T, R, at), lt(2, T, I, R, at), lt(1, T, I, R, at), T.join("");
            };
            return this.__bidiEngine__.doBidiReorder = function(P, I, R) {
                if (function(at, rt) {
                    if (rt) for (var pt = 0; pt < at.length; pt++) rt[pt] = pt;
                    h === void 0 && (h = ot(at)), m === void 0 && (m = ot(at));
                }(P, I), l || !f || m) if (l && f && h ^ m) X = h ? 1 : 0, P = Lt(P, I, R); else if (!l && f && m) X = h ? 1 : 0, 
                P = vt(P, I, R), P = Lt(P, I); else if (!l || h || f || m) {
                    if (l && !f && h ^ m) P = Lt(P, I), h ? (X = 0, P = vt(P, I, R)) : (X = 1, 
                    P = vt(P, I, R), P = Lt(P, I)); else if (l && h && !f && m) X = 1, 
                    P = vt(P, I, R), P = Lt(P, I); else if (!l && !f && h ^ m) {
                        var T = y;
                        h ? (X = 1, P = vt(P, I, R), X = 0, y = !1, P = vt(P, I, R), 
                        y = T) : (X = 0, P = vt(P, I, R), P = Lt(P, I), X = 1, y = !1, 
                        P = vt(P, I, R), y = T, P = Lt(P, I));
                    }
                } else X = 0, P = vt(P, I, R); else X = h ? 1 : 0, P = vt(P, I, R);
                return P;
            }, this.__bidiEngine__.setOptions = function(P) {
                P && (l = P.isInputVisual, f = P.isOutputVisual, h = P.isInputRtl, 
                m = P.isOutputRtl, y = P.isSymmetricSwapping);
            }, this.__bidiEngine__.setOptions(a), this.__bidiEngine__;
        };
        var e = [ "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N" ], n = new i.__bidiEngine__({
            isInputVisual: !0
        });
        i.API.events.push([ "postProcessText", function(a) {
            var s = a.text, o = (a.x, a.y, a.options || {}), l = (a.mutex, o.lang, 
            []);
            if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, 
            n.setOptions(o), Object.prototype.toString.call(s) === "[object Array]") {
                var h = 0;
                for (l = [], h = 0; h < s.length; h += 1) Object.prototype.toString.call(s[h]) === "[object Array]" ? l.push([ n.doBidiReorder(s[h][0]), s[h][1], s[h][2] ]) : l.push([ n.doBidiReorder(s[h]) ]);
                a.text = l;
            } else a.text = n.doBidiReorder(s);
            n.setOptions({
                isInputVisual: !0
            });
        } ]);
    }(Wt), Wt.API.TTFFont = function() {
        function i(e) {
            var n;
            if (this.rawData = e, n = this.contents = new vr(e), this.contents.pos = 4, 
            n.readString(4) === "ttcf") throw new Error("TTCF not supported.");
            n.pos = 0, this.parse(), this.subset = new l1(this), this.registerTTF();
        }
        return i.open = function(e) {
            return new i(e);
        }, i.prototype.parse = function() {
            return this.directory = new Ku(this.contents), this.head = new Zu(this), 
            this.name = new r1(this), this.cmap = new ic(this), this.toUnicode = {}, 
            this.hhea = new Qu(this), this.maxp = new i1(this), this.hmtx = new a1(this), 
            this.post = new e1(this), this.os2 = new t1(this), this.loca = new u1(this), 
            this.glyf = new o1(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, 
            this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, 
            this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, 
            this.bbox = [ this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax ];
        }, i.prototype.registerTTF = function() {
            var e, n, a, s, o;
            if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
                var l, h, f, m;
                for (m = [], l = 0, h = (f = this.bbox).length; l < h; l++) e = f[l], 
                m.push(Math.round(e * this.scaleFactor));
                return m;
            }.call(this), this.stemV = 0, this.post.exists ? (a = 255 & (s = this.post.italic_angle), 
            32768 & (n = s >> 16) && (n = -(1 + (65535 ^ n))), this.italicAngle = +(n + "." + a)) : this.italicAngle = 0, 
            this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), 
            this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, 
            this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, 
            this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, 
            this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), 
            this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 
            this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
        }, i.prototype.characterToGlyph = function(e) {
            var n;
            return ((n = this.cmap.unicode) != null ? n.codeMap[e] : void 0) || 0;
        }, i.prototype.widthOfGlyph = function(e) {
            var n;
            return n = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * n;
        }, i.prototype.widthOfString = function(e, n, a) {
            var s, o, l, h;
            for (l = 0, o = 0, h = (e = "" + e).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) s = e.charCodeAt(o), 
            l += this.widthOfGlyph(this.characterToGlyph(s)) + a * (1e3 / n) || 0;
            return l * (n / 1e3);
        }, i.prototype.lineHeight = function(e, n) {
            var a;
            return n == null && (n = !1), a = n ? this.lineGap : 0, (this.ascender + a - this.decender) / 1e3 * e;
        }, i;
    }();
    var In, vr = function() {
        function i(e) {
            this.data = e ?? [], this.pos = 0, this.length = this.data.length;
        }
        return i.prototype.readByte = function() {
            return this.data[this.pos++];
        }, i.prototype.writeByte = function(e) {
            return this.data[this.pos++] = e;
        }, i.prototype.readUInt32 = function() {
            return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
        }, i.prototype.writeUInt32 = function(e) {
            return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), 
            this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
        }, i.prototype.readInt32 = function() {
            var e;
            return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
        }, i.prototype.writeInt32 = function(e) {
            return e < 0 && (e += 4294967296), this.writeUInt32(e);
        }, i.prototype.readUInt16 = function() {
            return this.readByte() << 8 | this.readByte();
        }, i.prototype.writeUInt16 = function(e) {
            return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
        }, i.prototype.readInt16 = function() {
            var e;
            return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
        }, i.prototype.writeInt16 = function(e) {
            return e < 0 && (e += 65536), this.writeUInt16(e);
        }, i.prototype.readString = function(e) {
            var n, a;
            for (a = [], n = 0; 0 <= e ? n < e : n > e; n = 0 <= e ? ++n : --n) a[n] = String.fromCharCode(this.readByte());
            return a.join("");
        }, i.prototype.writeString = function(e) {
            var n, a, s;
            for (s = [], n = 0, a = e.length; 0 <= a ? n < a : n > a; n = 0 <= a ? ++n : --n) s.push(this.writeByte(e.charCodeAt(n)));
            return s;
        }, i.prototype.readShort = function() {
            return this.readInt16();
        }, i.prototype.writeShort = function(e) {
            return this.writeInt16(e);
        }, i.prototype.readLongLong = function() {
            var e, n, a, s, o, l, h, f;
            return e = this.readByte(), n = this.readByte(), a = this.readByte(), 
            s = this.readByte(), o = this.readByte(), l = this.readByte(), h = this.readByte(), 
            f = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ n) + 1099511627776 * (255 ^ a) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ o) + 65536 * (255 ^ l) + 256 * (255 ^ h) + (255 ^ f) + 1) : 72057594037927940 * e + 281474976710656 * n + 1099511627776 * a + 4294967296 * s + 16777216 * o + 65536 * l + 256 * h + f;
        }, i.prototype.writeLongLong = function(e) {
            var n, a;
            return n = Math.floor(e / 4294967296), a = 4294967295 & e, this.writeByte(n >> 24 & 255), 
            this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n), 
            this.writeByte(a >> 24 & 255), this.writeByte(a >> 16 & 255), this.writeByte(a >> 8 & 255), 
            this.writeByte(255 & a);
        }, i.prototype.readInt = function() {
            return this.readInt32();
        }, i.prototype.writeInt = function(e) {
            return this.writeInt32(e);
        }, i.prototype.read = function(e) {
            var n, a;
            for (n = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) n.push(this.readByte());
            return n;
        }, i.prototype.write = function(e) {
            var n, a, s, o;
            for (o = [], a = 0, s = e.length; a < s; a++) n = e[a], o.push(this.writeByte(n));
            return o;
        }, i;
    }(), Ku = function() {
        var i;
        function e(n) {
            var a, s, o;
            for (this.scalarType = n.readInt(), this.tableCount = n.readShort(), 
            this.searchRange = n.readShort(), this.entrySelector = n.readShort(), 
            this.rangeShift = n.readShort(), this.tables = {}, s = 0, o = this.tableCount; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) a = {
                tag: n.readString(4),
                checksum: n.readInt(),
                offset: n.readInt(),
                length: n.readInt()
            }, this.tables[a.tag] = a;
        }
        return e.prototype.encode = function(n) {
            var a, s, o, l, h, f, m, y, b, k, p, M, S;
            for (S in p = Object.keys(n).length, f = Math.log(2), b = 16 * Math.floor(Math.log(p) / f), 
            l = Math.floor(b / f), y = 16 * p - b, (s = new vr()).writeInt(this.scalarType), 
            s.writeShort(p), s.writeShort(b), s.writeShort(l), s.writeShort(y), 
            o = 16 * p, m = s.pos + o, h = null, M = [], n) for (k = n[S], s.writeString(S), 
            s.writeInt(i(k)), s.writeInt(m), s.writeInt(k.length), M = M.concat(k), 
            S === "head" && (h = m), m += k.length; m % 4; ) M.push(0), m++;
            return s.write(M), a = 2981146554 - i(s.data), s.pos = h + 8, s.writeUInt32(a), 
            s.data;
        }, i = function(n) {
            var a, s, o, l;
            for (n = ac.call(n); n.length % 4; ) n.push(0);
            for (o = new vr(n), s = 0, a = 0, l = n.length; a < l; a = a += 4) s += o.readUInt32();
            return 4294967295 & s;
        }, e;
    }(), $u = {}.hasOwnProperty, Wn = function(i, e) {
        for (var n in e) $u.call(e, n) && (i[n] = e[n]);
        function a() {
            this.constructor = i;
        }
        return a.prototype = e.prototype, i.prototype = new a(), i.__super__ = e.prototype, 
        i;
    };
    In = function() {
        function i(e) {
            var n;
            this.file = e, n = this.file.directory.tables[this.tag], this.exists = !!n, 
            n && (this.offset = n.offset, this.length = n.length, this.parse(this.file.contents));
        }
        return i.prototype.parse = function() {}, i.prototype.encode = function() {}, 
        i.prototype.raw = function() {
            return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
        }, i;
    }();
    var Zu = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "head", e.prototype.parse = function(n) {
            return n.pos = this.offset, this.version = n.readInt(), this.revision = n.readInt(), 
            this.checkSumAdjustment = n.readInt(), this.magicNumber = n.readInt(), 
            this.flags = n.readShort(), this.unitsPerEm = n.readShort(), this.created = n.readLongLong(), 
            this.modified = n.readLongLong(), this.xMin = n.readShort(), this.yMin = n.readShort(), 
            this.xMax = n.readShort(), this.yMax = n.readShort(), this.macStyle = n.readShort(), 
            this.lowestRecPPEM = n.readShort(), this.fontDirectionHint = n.readShort(), 
            this.indexToLocFormat = n.readShort(), this.glyphDataFormat = n.readShort();
        }, e.prototype.encode = function(n) {
            var a;
            return (a = new vr()).writeInt(this.version), a.writeInt(this.revision), 
            a.writeInt(this.checkSumAdjustment), a.writeInt(this.magicNumber), a.writeShort(this.flags), 
            a.writeShort(this.unitsPerEm), a.writeLongLong(this.created), a.writeLongLong(this.modified), 
            a.writeShort(this.xMin), a.writeShort(this.yMin), a.writeShort(this.xMax), 
            a.writeShort(this.yMax), a.writeShort(this.macStyle), a.writeShort(this.lowestRecPPEM), 
            a.writeShort(this.fontDirectionHint), a.writeShort(n), a.writeShort(this.glyphDataFormat), 
            a.data;
        }, e;
    }(), rc = function() {
        function i(e, n) {
            var a, s, o, l, h, f, m, y, b, k, p, M, S, E, A, U, X;
            switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), 
            this.offset = n + e.readInt(), b = e.pos, e.pos = this.offset, this.format = e.readUInt16(), 
            this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, 
            this.codeMap = {}, this.format) {
              case 0:
                for (f = 0; f < 256; ++f) this.codeMap[f] = e.readByte();
                break;

              case 4:
                for (p = e.readUInt16(), k = p / 2, e.pos += 6, o = function() {
                    var Z, ot;
                    for (ot = [], f = Z = 0; 0 <= k ? Z < k : Z > k; f = 0 <= k ? ++Z : --Z) ot.push(e.readUInt16());
                    return ot;
                }(), e.pos += 2, S = function() {
                    var Z, ot;
                    for (ot = [], f = Z = 0; 0 <= k ? Z < k : Z > k; f = 0 <= k ? ++Z : --Z) ot.push(e.readUInt16());
                    return ot;
                }(), m = function() {
                    var Z, ot;
                    for (ot = [], f = Z = 0; 0 <= k ? Z < k : Z > k; f = 0 <= k ? ++Z : --Z) ot.push(e.readUInt16());
                    return ot;
                }(), y = function() {
                    var Z, ot;
                    for (ot = [], f = Z = 0; 0 <= k ? Z < k : Z > k; f = 0 <= k ? ++Z : --Z) ot.push(e.readUInt16());
                    return ot;
                }(), s = (this.length - e.pos + this.offset) / 2, h = function() {
                    var Z, ot;
                    for (ot = [], f = Z = 0; 0 <= s ? Z < s : Z > s; f = 0 <= s ? ++Z : --Z) ot.push(e.readUInt16());
                    return ot;
                }(), f = A = 0, X = o.length; A < X; f = ++A) for (E = o[f], a = U = M = S[f]; M <= E ? U <= E : U >= E; a = M <= E ? ++U : --U) y[f] === 0 ? l = a + m[f] : (l = h[y[f] / 2 + (a - M) - (k - f)] || 0) !== 0 && (l += m[f]), 
                this.codeMap[a] = 65535 & l;
            }
            e.pos = b;
        }
        return i.encode = function(e, n) {
            var a, s, o, l, h, f, m, y, b, k, p, M, S, E, A, U, X, Z, ot, yt, Lt, O, lt, vt, P, I, R, T, at, rt, pt, Q, st, ct, Ct, L, j, q, W, G, tt, et, nt, wt, Nt, Ft;
            switch (T = new vr(), l = Object.keys(e).sort(function(kt, zt) {
                return kt - zt;
            }), n) {
              case "macroman":
                for (S = 0, E = function() {
                    var kt = [];
                    for (M = 0; M < 256; ++M) kt.push(0);
                    return kt;
                }(), U = {
                    0: 0
                }, o = {}, at = 0, st = l.length; at < st; at++) U[nt = e[s = l[at]]] == null && (U[nt] = ++S), 
                o[s] = {
                    old: e[s],
                    new: U[e[s]]
                }, E[s] = U[e[s]];
                return T.writeUInt16(1), T.writeUInt16(0), T.writeUInt32(12), T.writeUInt16(0), 
                T.writeUInt16(262), T.writeUInt16(0), T.write(E), {
                    charMap: o,
                    subtable: T.data,
                    maxGlyphID: S + 1
                };

              case "unicode":
                for (I = [], b = [], X = 0, U = {}, a = {}, A = m = null, rt = 0, 
                ct = l.length; rt < ct; rt++) U[ot = e[s = l[rt]]] == null && (U[ot] = ++X), 
                a[s] = {
                    old: ot,
                    new: U[ot]
                }, h = U[ot] - s, A != null && h === m || (A && b.push(A), I.push(s), 
                m = h), A = s;
                for (A && b.push(A), b.push(65535), I.push(65535), vt = 2 * (lt = I.length), 
                O = 2 * Math.pow(Math.log(lt) / Math.LN2, 2), k = Math.log(O / 2) / Math.LN2, 
                Lt = 2 * lt - O, f = [], yt = [], p = [], M = pt = 0, Ct = I.length; pt < Ct; M = ++pt) {
                    if (P = I[M], y = b[M], P === 65535) {
                        f.push(0), yt.push(0);
                        break;
                    }
                    if (P - (R = a[P].new) >= 32768) for (f.push(0), yt.push(2 * (p.length + lt - M)), 
                    s = Q = P; P <= y ? Q <= y : Q >= y; s = P <= y ? ++Q : --Q) p.push(a[s].new); else f.push(R - P), 
                    yt.push(0);
                }
                for (T.writeUInt16(3), T.writeUInt16(1), T.writeUInt32(12), T.writeUInt16(4), 
                T.writeUInt16(16 + 8 * lt + 2 * p.length), T.writeUInt16(0), T.writeUInt16(vt), 
                T.writeUInt16(O), T.writeUInt16(k), T.writeUInt16(Lt), tt = 0, L = b.length; tt < L; tt++) s = b[tt], 
                T.writeUInt16(s);
                for (T.writeUInt16(0), et = 0, j = I.length; et < j; et++) s = I[et], 
                T.writeUInt16(s);
                for (wt = 0, q = f.length; wt < q; wt++) h = f[wt], T.writeUInt16(h);
                for (Nt = 0, W = yt.length; Nt < W; Nt++) Z = yt[Nt], T.writeUInt16(Z);
                for (Ft = 0, G = p.length; Ft < G; Ft++) S = p[Ft], T.writeUInt16(S);
                return {
                    charMap: a,
                    subtable: T.data,
                    maxGlyphID: X + 1
                };
            }
        }, i;
    }(), ic = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "cmap", e.prototype.parse = function(n) {
            var a, s, o;
            for (n.pos = this.offset, this.version = n.readUInt16(), o = n.readUInt16(), 
            this.tables = [], this.unicode = null, s = 0; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) a = new rc(n, this.offset), 
            this.tables.push(a), a.isUnicode && this.unicode == null && (this.unicode = a);
            return !0;
        }, e.encode = function(n, a) {
            var s, o;
            return a == null && (a = "macroman"), s = rc.encode(n, a), (o = new vr()).writeUInt16(0), 
            o.writeUInt16(1), s.table = o.data.concat(s.subtable), s;
        }, e;
    }(), Qu = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "hhea", e.prototype.parse = function(n) {
            return n.pos = this.offset, this.version = n.readInt(), this.ascender = n.readShort(), 
            this.decender = n.readShort(), this.lineGap = n.readShort(), this.advanceWidthMax = n.readShort(), 
            this.minLeftSideBearing = n.readShort(), this.minRightSideBearing = n.readShort(), 
            this.xMaxExtent = n.readShort(), this.caretSlopeRise = n.readShort(), 
            this.caretSlopeRun = n.readShort(), this.caretOffset = n.readShort(), 
            n.pos += 8, this.metricDataFormat = n.readShort(), this.numberOfMetrics = n.readUInt16();
        }, e;
    }(), t1 = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "OS/2", e.prototype.parse = function(n) {
            if (n.pos = this.offset, this.version = n.readUInt16(), this.averageCharWidth = n.readShort(), 
            this.weightClass = n.readUInt16(), this.widthClass = n.readUInt16(), 
            this.type = n.readShort(), this.ySubscriptXSize = n.readShort(), this.ySubscriptYSize = n.readShort(), 
            this.ySubscriptXOffset = n.readShort(), this.ySubscriptYOffset = n.readShort(), 
            this.ySuperscriptXSize = n.readShort(), this.ySuperscriptYSize = n.readShort(), 
            this.ySuperscriptXOffset = n.readShort(), this.ySuperscriptYOffset = n.readShort(), 
            this.yStrikeoutSize = n.readShort(), this.yStrikeoutPosition = n.readShort(), 
            this.familyClass = n.readShort(), this.panose = function() {
                var a, s;
                for (s = [], a = 0; a < 10; ++a) s.push(n.readByte());
                return s;
            }(), this.charRange = function() {
                var a, s;
                for (s = [], a = 0; a < 4; ++a) s.push(n.readInt());
                return s;
            }(), this.vendorID = n.readString(4), this.selection = n.readShort(), 
            this.firstCharIndex = n.readShort(), this.lastCharIndex = n.readShort(), 
            this.version > 0 && (this.ascent = n.readShort(), this.descent = n.readShort(), 
            this.lineGap = n.readShort(), this.winAscent = n.readShort(), this.winDescent = n.readShort(), 
            this.codePageRange = function() {
                var a, s;
                for (s = [], a = 0; a < 2; a = ++a) s.push(n.readInt());
                return s;
            }(), this.version > 1)) return this.xHeight = n.readShort(), this.capHeight = n.readShort(), 
            this.defaultChar = n.readShort(), this.breakChar = n.readShort(), this.maxContext = n.readShort();
        }, e;
    }(), e1 = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "post", e.prototype.parse = function(n) {
            var a, s, o;
            switch (n.pos = this.offset, this.format = n.readInt(), this.italicAngle = n.readInt(), 
            this.underlinePosition = n.readShort(), this.underlineThickness = n.readShort(), 
            this.isFixedPitch = n.readInt(), this.minMemType42 = n.readInt(), this.maxMemType42 = n.readInt(), 
            this.minMemType1 = n.readInt(), this.maxMemType1 = n.readInt(), this.format) {
              case 65536:
              case 196608:
                break;

              case 131072:
                var l;
                for (s = n.readUInt16(), this.glyphNameIndex = [], l = 0; 0 <= s ? l < s : l > s; l = 0 <= s ? ++l : --l) this.glyphNameIndex.push(n.readUInt16());
                for (this.names = [], o = []; n.pos < this.offset + this.length; ) a = n.readByte(), 
                o.push(this.names.push(n.readString(a)));
                return o;

              case 151552:
                return s = n.readUInt16(), this.offsets = n.read(s);

              case 262144:
                return this.map = function() {
                    var h, f, m;
                    for (m = [], l = h = 0, f = this.file.maxp.numGlyphs; 0 <= f ? h < f : h > f; l = 0 <= f ? ++h : --h) m.push(n.readUInt32());
                    return m;
                }.call(this);
            }
        }, e;
    }(), n1 = function(i, e) {
        this.raw = i, this.length = i.length, this.platformID = e.platformID, this.encodingID = e.encodingID, 
        this.languageID = e.languageID;
    }, r1 = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "name", e.prototype.parse = function(n) {
            var a, s, o, l, h, f, m, y, b, k, p;
            for (n.pos = this.offset, n.readShort(), a = n.readShort(), f = n.readShort(), 
            s = [], l = 0; 0 <= a ? l < a : l > a; l = 0 <= a ? ++l : --l) s.push({
                platformID: n.readShort(),
                encodingID: n.readShort(),
                languageID: n.readShort(),
                nameID: n.readShort(),
                length: n.readShort(),
                offset: this.offset + f + n.readShort()
            });
            for (m = {}, l = b = 0, k = s.length; b < k; l = ++b) o = s[l], n.pos = o.offset, 
            y = n.readString(o.length), h = new n1(y, o), m[p = o.nameID] == null && (m[p] = []), 
            m[o.nameID].push(h);
            this.strings = m, this.copyright = m[0], this.fontFamily = m[1], this.fontSubfamily = m[2], 
            this.uniqueSubfamily = m[3], this.fontName = m[4], this.version = m[5];
            try {
                this.postscriptName = m[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
            } catch {
                this.postscriptName = m[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
            }
            return this.trademark = m[7], this.manufacturer = m[8], this.designer = m[9], 
            this.description = m[10], this.vendorUrl = m[11], this.designerUrl = m[12], 
            this.license = m[13], this.licenseUrl = m[14], this.preferredFamily = m[15], 
            this.preferredSubfamily = m[17], this.compatibleFull = m[18], this.sampleText = m[19];
        }, e;
    }(), i1 = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "maxp", e.prototype.parse = function(n) {
            return n.pos = this.offset, this.version = n.readInt(), this.numGlyphs = n.readUInt16(), 
            this.maxPoints = n.readUInt16(), this.maxContours = n.readUInt16(), 
            this.maxCompositePoints = n.readUInt16(), this.maxComponentContours = n.readUInt16(), 
            this.maxZones = n.readUInt16(), this.maxTwilightPoints = n.readUInt16(), 
            this.maxStorage = n.readUInt16(), this.maxFunctionDefs = n.readUInt16(), 
            this.maxInstructionDefs = n.readUInt16(), this.maxStackElements = n.readUInt16(), 
            this.maxSizeOfInstructions = n.readUInt16(), this.maxComponentElements = n.readUInt16(), 
            this.maxComponentDepth = n.readUInt16();
        }, e;
    }(), a1 = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "hmtx", e.prototype.parse = function(n) {
            var a, s, o, l, h, f, m;
            for (n.pos = this.offset, this.metrics = [], a = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? a < f : a > f; a = 0 <= f ? ++a : --a) this.metrics.push({
                advance: n.readUInt16(),
                lsb: n.readInt16()
            });
            for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, 
            this.leftSideBearings = function() {
                var y, b;
                for (b = [], a = y = 0; 0 <= o ? y < o : y > o; a = 0 <= o ? ++y : --y) b.push(n.readInt16());
                return b;
            }(), this.widths = function() {
                var y, b, k, p;
                for (p = [], y = 0, b = (k = this.metrics).length; y < b; y++) l = k[y], 
                p.push(l.advance);
                return p;
            }.call(this), s = this.widths[this.widths.length - 1], m = [], a = h = 0; 0 <= o ? h < o : h > o; a = 0 <= o ? ++h : --h) m.push(this.widths.push(s));
            return m;
        }, e.prototype.forGlyph = function(n) {
            return n in this.metrics ? this.metrics[n] : {
                advance: this.metrics[this.metrics.length - 1].advance,
                lsb: this.leftSideBearings[n - this.metrics.length]
            };
        }, e;
    }(), ac = [].slice, o1 = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "glyf", e.prototype.parse = function() {
            return this.cache = {};
        }, e.prototype.glyphFor = function(n) {
            var a, s, o, l, h, f, m, y, b, k;
            return n in this.cache ? this.cache[n] : (l = this.file.loca, a = this.file.contents, 
            s = l.indexOf(n), (o = l.lengthOf(n)) === 0 ? this.cache[n] = null : (a.pos = this.offset + s, 
            h = (f = new vr(a.read(o))).readShort(), y = f.readShort(), k = f.readShort(), 
            m = f.readShort(), b = f.readShort(), this.cache[n] = h === -1 ? new c1(f, y, k, m, b) : new s1(f, h, y, k, m, b), 
            this.cache[n]));
        }, e.prototype.encode = function(n, a, s) {
            var o, l, h, f, m;
            for (h = [], l = [], f = 0, m = a.length; f < m; f++) o = n[a[f]], l.push(h.length), 
            o && (h = h.concat(o.encode(s)));
            return l.push(h.length), {
                table: h,
                offsets: l
            };
        }, e;
    }(), s1 = function() {
        function i(e, n, a, s, o, l) {
            this.raw = e, this.numberOfContours = n, this.xMin = a, this.yMin = s, 
            this.xMax = o, this.yMax = l, this.compound = !1;
        }
        return i.prototype.encode = function() {
            return this.raw.data;
        }, i;
    }(), c1 = function() {
        function i(e, n, a, s, o) {
            var l, h;
            for (this.raw = e, this.xMin = n, this.yMin = a, this.xMax = s, this.yMax = o, 
            this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], l = this.raw; h = l.readShort(), 
            this.glyphOffsets.push(l.pos), this.glyphIDs.push(l.readUInt16()), 32 & h; ) l.pos += 1 & h ? 4 : 2, 
            128 & h ? l.pos += 8 : 64 & h ? l.pos += 4 : 8 & h && (l.pos += 2);
        }
        return i.prototype.encode = function() {
            var e, n, a;
            for (n = new vr(ac.call(this.raw.data)), e = 0, a = this.glyphIDs.length; e < a; ++e) n.pos = this.glyphOffsets[e];
            return n.data;
        }, i;
    }(), u1 = function(i) {
        function e() {
            return e.__super__.constructor.apply(this, arguments);
        }
        return Wn(e, In), e.prototype.tag = "loca", e.prototype.parse = function(n) {
            var a, s;
            return n.pos = this.offset, a = this.file.head.indexToLocFormat, this.offsets = a === 0 ? function() {
                var o, l;
                for (l = [], s = 0, o = this.length; s < o; s += 2) l.push(2 * n.readUInt16());
                return l;
            }.call(this) : function() {
                var o, l;
                for (l = [], s = 0, o = this.length; s < o; s += 4) l.push(n.readUInt32());
                return l;
            }.call(this);
        }, e.prototype.indexOf = function(n) {
            return this.offsets[n];
        }, e.prototype.lengthOf = function(n) {
            return this.offsets[n + 1] - this.offsets[n];
        }, e.prototype.encode = function(n, a) {
            for (var s = new Uint32Array(this.offsets.length), o = 0, l = 0, h = 0; h < s.length; ++h) if (s[h] = o, 
            l < a.length && a[l] == h) {
                ++l, s[h] = o;
                var f = this.offsets[h], m = this.offsets[h + 1] - f;
                m > 0 && (o += m);
            }
            for (var y = new Array(4 * s.length), b = 0; b < s.length; ++b) y[4 * b + 3] = 255 & s[b], 
            y[4 * b + 2] = (65280 & s[b]) >> 8, y[4 * b + 1] = (16711680 & s[b]) >> 16, 
            y[4 * b] = (4278190080 & s[b]) >> 24;
            return y;
        }, e;
    }(), l1 = function() {
        function i(e) {
            this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
        }
        return i.prototype.generateCmap = function() {
            var e, n, a, s, o;
            for (n in s = this.font.cmap.tables[0].codeMap, e = {}, o = this.subset) a = o[n], 
            e[n] = s[a];
            return e;
        }, i.prototype.glyphsFor = function(e) {
            var n, a, s, o, l, h, f;
            for (s = {}, l = 0, h = e.length; l < h; l++) s[o = e[l]] = this.font.glyf.glyphFor(o);
            for (o in n = [], s) (a = s[o]) != null && a.compound && n.push.apply(n, a.glyphIDs);
            if (n.length > 0) for (o in f = this.glyphsFor(n)) a = f[o], s[o] = a;
            return s;
        }, i.prototype.encode = function(e, n) {
            var a, s, o, l, h, f, m, y, b, k, p, M, S, E, A;
            for (s in a = ic.encode(this.generateCmap(), "unicode"), l = this.glyphsFor(e), 
            p = {
                0: 0
            }, A = a.charMap) p[(f = A[s]).old] = f.new;
            for (M in k = a.maxGlyphID, l) M in p || (p[M] = k++);
            return y = function(U) {
                var X, Z;
                for (X in Z = {}, U) Z[U[X]] = X;
                return Z;
            }(p), b = Object.keys(y).sort(function(U, X) {
                return U - X;
            }), S = function() {
                var U, X, Z;
                for (Z = [], U = 0, X = b.length; U < X; U++) h = b[U], Z.push(y[h]);
                return Z;
            }(), o = this.font.glyf.encode(l, S, p), m = this.font.loca.encode(o.offsets, S), 
            E = {
                cmap: this.font.cmap.raw(),
                glyf: o.table,
                loca: m,
                hmtx: this.font.hmtx.raw(),
                hhea: this.font.hhea.raw(),
                maxp: this.font.maxp.raw(),
                post: this.font.post.raw(),
                name: this.font.name.raw(),
                head: this.font.head.encode(n)
            }, this.font.os2.exists && (E["OS/2"] = this.font.os2.raw()), this.font.directory.encode(E);
        }, i;
    }();
    Wt.API.PDFObject = function() {
        var i;
        function e() {}
        return i = function(n, a) {
            return (Array(a + 1).join("0") + n).slice(-a);
        }, e.convert = function(n) {
            var a, s, o, l;
            if (Array.isArray(n)) return "[" + function() {
                var h, f, m;
                for (m = [], h = 0, f = n.length; h < f; h++) a = n[h], m.push(e.convert(a));
                return m;
            }().join(" ") + "]";
            if (typeof n == "string") return "/" + n;
            if (n != null && n.isString) return "(" + n + ")";
            if (n instanceof Date) return "(D:" + i(n.getUTCFullYear(), 4) + i(n.getUTCMonth(), 2) + i(n.getUTCDate(), 2) + i(n.getUTCHours(), 2) + i(n.getUTCMinutes(), 2) + i(n.getUTCSeconds(), 2) + "Z)";
            if ({}.toString.call(n) === "[object Object]") {
                for (s in o = [ "<<" ], n) l = n[s], o.push("/" + s + " " + e.convert(l));
                return o.push(">>"), o.join(`
`);
            }
            return "" + n;
        }, e;
    }();
    let Oo, oc, sc, cc, uc, lc, hc, fc, dc, pc, gc, mc, vc, bc, yc, wc, Lc;
    Oo = i => (ul("data-v-ae035f75"), i = i(), ll(), i), oc = {
        class: "work-deploy-result"
    }, sc = {
        key: 0,
        class: "page-header"
    }, cc = Oo(() => ze("span", null, "返回", -1)), uc = Oo(() => ze("span", null, "检查结果", -1)), 
    lc = {
        style: {
            height: "calc(100% - 70px)",
            "overflow-y": "auto"
        }
    }, hc = {
        class: "content-header"
    }, fc = {
        class: "header-left"
    }, dc = {
        class: "task-title"
    }, pc = {
        class: "title"
    }, gc = {
        class: "error-message"
    }, mc = {
        class: "task-info"
    }, vc = {
        class: "header-right"
    }, bc = {
        class: "content-optional relative"
    }, yc = {
        class: "neu-tabs-custom"
    }, wc = [ "onClick" ], Lc = {
        __name: "check-result",
        props: {
            from: {
                type: String,
                default: ""
            },
            checkData: {
                type: Object,
                default: () => ({})
            }
        },
        setup(i) {
            const e = J1(), n = X1(), a = Er(n.params.checkId), s = i;
            K1("checkData", s.checkData);
            const o = () => {
                e.back();
            }, l = Er([ {
                name: "概览",
                code: so(wu)
            }, {
                name: "问题",
                code: so(dl)
            }, {
                name: "代码",
                code: so(gl)
            } ]), h = Er(so(wu)), f = Er("概览"), m = $1({
                checkTaskName: "",
                evnGitProName: "",
                checkTime: "",
                startByName: "",
                status: ""
            }), y = Er(null), b = Er(null), k = Er(null), p = Er(!1), M = () => {
                p.value = !0, wl(y.value, {
                    useCORS: !0,
                    backgroundColor: "#f0f5fe",
                    scale: 1.5
                }).then(S => {
                    const E = new Wt("p", "mm", "a4");
                    E.setFillColor("#f0f5fe"), E.rect(0, 0, E.internal.pageSize.getWidth(), E.internal.pageSize.getHeight(), "F");
                    const A = S.toDataURL("image/png");
                    E.addImage(A, "JPEG", 5, 5, 200, 200 / S.width * S.height), 
                    p.value = !1, E.save(`${m.checkTaskName}.pdf`, {
                        compress: !0
                    });
                });
            };
            return Z1(() => {
                (async () => {
                    const S = await vl.getSummaryData(a.value ?? s.checkData.checkId), {
                        checkTaskName: E,
                        evnGitProName: A,
                        checkTime: U,
                        startByName: X,
                        status: Z
                    } = S;
                    m.checkTaskName = E, m.evnGitProName = A, m.checkTime = U, m.startByName = X, 
                    m.status = Z;
                })();
            }), (S, E) => {
                var ot;
                const A = al, U = ol, X = sl, Z = cl;
                return Q1((Ei(), co("div", oc, [ s.from !== "teachingProjectScore" ? (Ei(), 
                co("div", sc, [ ze("div", {
                    class: "back",
                    onClick: o
                }, [ ys(A, null, {
                    default: vu(() => [ ys(Ze(tl)) ]),
                    _: 1
                }), cc ]), ys(U, {
                    direction: "vertical"
                }), uc ])) : bu("", !0), ze("div", {
                    ref_key: "canvasContainer",
                    ref: k,
                    style: {
                        display: "none"
                    }
                }, [ ze("canvas", {
                    ref_key: "canvas",
                    ref: b
                }, null, 512) ], 512), ze("div", lc, [ ze("div", {
                    class: uo([ "page-content", {
                        "h-100%": Ze(f) != "概览"
                    } ]),
                    ref_key: "htmlContentRef",
                    ref: y,
                    id: "htmlContent"
                }, [ ze("div", hc, [ ze("div", fc, [ ze("div", dc, [ ze("span", pc, ua(Ze(m).checkTaskName), 1), ze("div", gc, [ ze("span", {
                    class: uo("check-status-" + Ze(ws)(Ze(m)).color)
                }, ua(Ze(ws)(Ze(m)).word), 3) ]) ]), ze("div", mc, [ ze("span", null, "代码仓库：" + ua(Ze(m).evnGitProName), 1), ze("span", null, "最近检查时间：" + ua(Ze(Ll)(Ze(m).checkTime)), 1) ]) ]), ze("div", vc, [ ze("div", {
                    class: uo([ "common-img", ((ot = Ze(ws)(Ze(m))) == null ? void 0 : ot.type) + "-img" ])
                }, null, 2), Ze(f) == "概览" ? (Ei(), yu(X, {
                    key: 0,
                    ref: "buttonRef",
                    type: "primary",
                    size: "large",
                    onClick: M
                }, {
                    default: vu(() => [ el(" 下载 ") ]),
                    _: 1
                }, 512)) : bu("", !0) ]) ]), ze("div", bc, [ ze("div", yc, [ (Ei(!0), 
                co(nl, null, rl(Ze(l), yt => (Ei(), co("span", {
                    key: yt.code,
                    class: uo([ "neu-tabs-default", {
                        "neu-tabs-active": Ze(h) === yt.code
                    } ]),
                    onClick: Lt => (O => {
                        h.value = O.code, f.value = O.name;
                    })(yt)
                }, ua(yt.name), 11, wc))), 128)) ]), (Ei(), yu(il(Ze(h)), {
                    class: "neu-transform"
                })) ]) ], 2) ]) ])), [ [ Z, Ze(p) ] ]);
            };
        }
    }, Ls = xl(Lc, [ [ "__scopeId", "data-v-ae035f75" ] ]), Lu = Object.defineProperty({
        __proto__: null,
        default: Ls
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    Ls as C,
    fe as _,
    Al as __tla,
    Lu as c
};