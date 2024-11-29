import {
    a2 as le,
    a3 as il,
    __tla as xv
} from "./index-6c08ea4c.js";

import {
    _ as Oa,
    __tla as bv
} from "./check-result-070ada17.js";

import {
    __tla as Sv
} from "./checkOverview-9cc05c66.js";

import "./check-C-7cf0dd88.js";

import {
    __tla as wv
} from "./check-a26308bc.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Tv
} from "./checkProblems-ac1fe994.js";

import {
    __tla as Ov
} from "./index-c4ca0ced.js";

import {
    __tla as Av
} from "./index-993301ca.js";

import {
    __tla as Cv
} from "./el-collapse-item-c8b76a0a.js";

import {
    __tla as Ev
} from "./dialogProblem-fa4d1fd2.js";

import {
    __tla as Pv
} from "./checkCodes-f0c443b2.js";

import {
    __tla as Mv
} from "./el-breadcrumb-item-45b75827.js";

import {
    __tla as Nv
} from "./diff-code-51383ecb.js";

import "./html2canvas.esm-ad032b91.js";

import {
    __tla as _v
} from "./formatTime-de6f1520.js";

let Aa, Ca, De, Ea, nt, Xr, Yr, qr, Wr, Ut, Pa, Ma, Na, _a, bt, V, Ra, Gr, Va, Ia, ka, La, Fe, Q, Da, Fa, je, Qr, $r, ja, Ba, za, Ua, Be, Zr, Ha, Xa, Ct, ze, M, E, Ya, k, qa, Kr, T, Jr, ti, ei, Wa, ri, St, Ga, Ht, Qa, $a, ce, ii, Za, Ka, Ja, ni, ts, es, Ue, wt, rs, is, Et, ns, as, ss, os, Pt, us, hs, ls, ai, nl, tt, cs, gs, si, oi, He, Rv = Promise.all([ (() => {
    try {
        return xv;
    } catch {}
})(), (() => {
    try {
        return bv;
    } catch {}
})(), (() => {
    try {
        return Sv;
    } catch {}
})(), (() => {
    try {
        return wv;
    } catch {}
})(), (() => {
    try {
        return Tv;
    } catch {}
})(), (() => {
    try {
        return Ov;
    } catch {}
})(), (() => {
    try {
        return Av;
    } catch {}
})(), (() => {
    try {
        return Cv;
    } catch {}
})(), (() => {
    try {
        return Ev;
    } catch {}
})(), (() => {
    try {
        return Pv;
    } catch {}
})(), (() => {
    try {
        return Mv;
    } catch {}
})(), (() => {
    try {
        return Nv;
    } catch {}
})(), (() => {
    try {
        return _v;
    } catch {}
})() ]).then(async () => {
    var ge = function(t) {
        return t && t.Math === Math && t;
    }, L = ge(typeof globalThis == "object" && globalThis) || ge(typeof window == "object" && window) || ge(typeof self == "object" && self) || ge(typeof le == "object" && le) || ge(typeof le == "object" && le) || function() {
        return this;
    }() || Function("return this")(), fe = {}, D = function(t) {
        try {
            return !!t();
        } catch {
            return !0;
        }
    }, st = !D(function() {
        return Object.defineProperty({}, 1, {
            get: function() {
                return 7;
            }
        })[1] !== 7;
    }), Xe = !D(function() {
        var t = function() {}.bind();
        return typeof t != "function" || t.hasOwnProperty("prototype");
    }), al = Xe, Ye = Function.prototype.call, X = al ? Ye.bind(Ye) : function() {
        return Ye.apply(Ye, arguments);
    }, fs = {}, ds = {}.propertyIsEnumerable, ps = Object.getOwnPropertyDescriptor, sl = ps && !ds.call({
        1: 2
    }, 1);
    fs.f = sl ? function(t) {
        var e = ps(this, t);
        return !!e && e.enumerable;
    } : ds;
    var Tt, qe, ui = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        };
    }, ms = Xe, ys = Function.prototype, hi = ys.call, ol = ms && ys.bind.bind(hi, hi), F = ms ? ol : function(t) {
        return function() {
            return hi.apply(t, arguments);
        };
    }, vs = F, ul = vs({}.toString), hl = vs("".slice), Mt = function(t) {
        return hl(ul(t), 8, -1);
    }, ll = D, cl = Mt, li = Object, gl = F("".split), xs = ll(function() {
        return !li("z").propertyIsEnumerable(0);
    }) ? function(t) {
        return cl(t) === "String" ? gl(t, "") : li(t);
    } : li, Nt = function(t) {
        return t == null;
    }, fl = Nt, dl = TypeError, ot = function(t) {
        if (fl(t)) throw new dl("Can't call method on " + t);
        return t;
    }, pl = xs, ml = ot, de = function(t) {
        return pl(ml(t));
    }, ci = typeof document == "object" && document.all, j = ci === void 0 && ci !== void 0 ? function(t) {
        return typeof t == "function" || t === ci;
    } : function(t) {
        return typeof t == "function";
    }, yl = j, ut = function(t) {
        return typeof t == "object" ? t !== null : yl(t);
    }, gi = L, vl = j, _t = function(t, e) {
        return arguments.length < 2 ? (r = gi[t], vl(r) ? r : void 0) : gi[t] && gi[t][e];
        var r;
    }, We = F({}.isPrototypeOf), Ge = typeof navigator < "u" && String(navigator.userAgent) || "", bs = L, fi = Ge, Ss = bs.process, ws = bs.Deno, Ts = Ss && Ss.versions || ws && ws.version, Os = Ts && Ts.v8;
    Os && (qe = (Tt = Os.split("."))[0] > 0 && Tt[0] < 4 ? 1 : +(Tt[0] + Tt[1])), 
    !qe && fi && (!(Tt = fi.match(/Edge\/(\d+)/)) || Tt[1] >= 74) && (Tt = fi.match(/Chrome\/(\d+)/)) && (qe = +Tt[1]);
    var Qe = qe, As = Qe, xl = D, bl = L.String, Cs = !!Object.getOwnPropertySymbols && !xl(function() {
        var t = Symbol("symbol detection");
        return !bl(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && As && As < 41;
    }), Es = Cs && !Symbol.sham && typeof Symbol.iterator == "symbol", Sl = _t, wl = j, Tl = We, Ol = Object, Ps = Es ? function(t) {
        return typeof t == "symbol";
    } : function(t) {
        var e = Sl("Symbol");
        return wl(e) && Tl(e.prototype, Ol(t));
    }, Al = String, $e = function(t) {
        try {
            return Al(t);
        } catch {
            return "Object";
        }
    }, Cl = j, El = $e, Pl = TypeError, dt = function(t) {
        if (Cl(t)) return t;
        throw new Pl(El(t) + " is not a function");
    }, Ml = dt, Nl = Nt, Xt = function(t, e) {
        var r = t[e];
        return Nl(r) ? void 0 : Ml(r);
    }, di = X, pi = j, mi = ut, _l = TypeError, Ms = {
        exports: {}
    }, Ns = L, Rl = Object.defineProperty, yi = function(t, e) {
        try {
            Rl(Ns, t, {
                value: e,
                configurable: !0,
                writable: !0
            });
        } catch {
            Ns[t] = e;
        }
        return e;
    }, Vl = L, Il = yi, _s = "__core-js_shared__", Rs = Ms.exports = Vl[_s] || Il(_s, {});
    (Rs.versions || (Rs.versions = [])).push({
        version: "3.37.1",
        mode: "global",
        copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var vi = Ms.exports, Vs = vi, xi = function(t, e) {
        return Vs[t] || (Vs[t] = e || {});
    }, kl = ot, Ll = Object, Ze = function(t) {
        return Ll(kl(t));
    }, Dl = Ze, Fl = F({}.hasOwnProperty), ht = Object.hasOwn || function(t, e) {
        return Fl(Dl(t), e);
    }, jl = F, Bl = 0, zl = Math.random(), Ul = jl(1..toString), Is = function(t) {
        return "Symbol(" + (t === void 0 ? "" : t) + ")_" + Ul(++Bl + zl, 36);
    }, Hl = xi, ks = ht, Xl = Is, Yl = Cs, ql = Es, Yt = L.Symbol, bi = Hl("wks"), Wl = ql ? Yt.for || Yt : Yt && Yt.withoutSetter || Xl, H = function(t) {
        return ks(bi, t) || (bi[t] = Yl && ks(Yt, t) ? Yt[t] : Wl("Symbol." + t)), 
        bi[t];
    }, Gl = X, Ls = ut, Ds = Ps, Ql = Xt, $l = function(t, e) {
        var r, i;
        if (e === "string" && pi(r = t.toString) && !mi(i = di(r, t)) || pi(r = t.valueOf) && !mi(i = di(r, t)) || e !== "string" && pi(r = t.toString) && !mi(i = di(r, t))) return i;
        throw new _l("Can't convert object to primitive value");
    }, Zl = TypeError, Kl = H("toPrimitive"), Jl = function(t, e) {
        if (!Ls(t) || Ds(t)) return t;
        var r, i = Ql(t, Kl);
        if (i) {
            if (e === void 0 && (e = "default"), r = Gl(i, t, e), !Ls(r) || Ds(r)) return r;
            throw new Zl("Can't convert object to primitive value");
        }
        return e === void 0 && (e = "number"), $l(t, e);
    }, tc = Ps, Fs = function(t) {
        var e = Jl(t, "string");
        return tc(e) ? e : e + "";
    }, js = ut, Si = L.document, ec = js(Si) && js(Si.createElement), Ke = function(t) {
        return ec ? Si.createElement(t) : {};
    }, rc = Ke, Bs = !st && !D(function() {
        return Object.defineProperty(rc("div"), "a", {
            get: function() {
                return 7;
            }
        }).a !== 7;
    }), ic = st, nc = X, ac = fs, sc = ui, oc = de, uc = Fs, hc = ht, lc = Bs, zs = Object.getOwnPropertyDescriptor;
    fe.f = ic ? zs : function(t, e) {
        if (t = oc(t), e = uc(e), lc) try {
            return zs(t, e);
        } catch {}
        if (hc(t, e)) return sc(!nc(ac.f, t, e), t[e]);
    };
    var pt = {}, Us = st && D(function() {
        return Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype !== 42;
    }), cc = ut, gc = String, fc = TypeError, $ = function(t) {
        if (cc(t)) return t;
        throw new fc(gc(t) + " is not an object");
    }, dc = st, pc = Bs, mc = Us, Je = $, Hs = Fs, yc = TypeError, wi = Object.defineProperty, vc = Object.getOwnPropertyDescriptor, Ti = "enumerable", Oi = "configurable", Ai = "writable";
    pt.f = dc ? mc ? function(t, e, r) {
        if (Je(t), e = Hs(e), Je(r), typeof t == "function" && e === "prototype" && "value" in r && Ai in r && !r[Ai]) {
            var i = vc(t, e);
            i && i[Ai] && (t[e] = r.value, r = {
                configurable: Oi in r ? r[Oi] : i[Oi],
                enumerable: Ti in r ? r[Ti] : i[Ti],
                writable: !1
            });
        }
        return wi(t, e, r);
    } : wi : function(t, e, r) {
        if (Je(t), e = Hs(e), Je(r), pc) try {
            return wi(t, e, r);
        } catch {}
        if ("get" in r || "set" in r) throw new yc("Accessors not supported");
        return "value" in r && (t[e] = r.value), t;
    };
    var xc = pt, bc = ui, pe = st ? function(t, e, r) {
        return xc.f(t, e, bc(1, r));
    } : function(t, e, r) {
        return t[e] = r, t;
    }, Xs = {
        exports: {}
    }, Ci = st, Sc = ht, Ys = Function.prototype, wc = Ci && Object.getOwnPropertyDescriptor, Ei = Sc(Ys, "name"), me = {
        EXISTS: Ei,
        PROPER: Ei && function() {}.name === "something",
        CONFIGURABLE: Ei && (!Ci || Ci && wc(Ys, "name").configurable)
    }, Tc = j, Pi = vi, Oc = F(Function.toString);
    Tc(Pi.inspectSource) || (Pi.inspectSource = function(t) {
        return Oc(t);
    });
    var tr, ye, er, Mi = Pi.inspectSource, Ac = j, qs = L.WeakMap, Cc = Ac(qs) && /native code/.test(String(qs)), Ec = Is, Ws = xi("keys"), Ni = function(t) {
        return Ws[t] || (Ws[t] = Ec(t));
    }, _i = {}, Pc = Cc, Gs = L, Mc = ut, Nc = pe, Ri = ht, Vi = vi, _c = Ni, Rc = _i, Qs = "Object already initialized", Ii = Gs.TypeError, Vc = Gs.WeakMap;
    if (Pc || Vi.state) {
        var gt = Vi.state || (Vi.state = new Vc());
        gt.get = gt.get, gt.has = gt.has, gt.set = gt.set, tr = function(t, e) {
            if (gt.has(t)) throw new Ii(Qs);
            return e.facade = t, gt.set(t, e), e;
        }, ye = function(t) {
            return gt.get(t) || {};
        }, er = function(t) {
            return gt.has(t);
        };
    } else {
        var qt = _c("state");
        Rc[qt] = !0, tr = function(t, e) {
            if (Ri(t, qt)) throw new Ii(Qs);
            return e.facade = t, Nc(t, qt, e), e;
        }, ye = function(t) {
            return Ri(t, qt) ? t[qt] : {};
        }, er = function(t) {
            return Ri(t, qt);
        };
    }
    var ve = {
        set: tr,
        get: ye,
        has: er,
        enforce: function(t) {
            return er(t) ? ye(t) : tr(t, {});
        },
        getterFor: function(t) {
            return function(e) {
                var r;
                if (!Mc(e) || (r = ye(e)).type !== t) throw new Ii("Incompatible receiver, " + t + " required");
                return r;
            };
        }
    }, ki = F, Ic = D, kc = j, rr = ht, Li = st, Lc = me.CONFIGURABLE, Dc = Mi, Fc = ve.enforce, jc = ve.get, $s = String, ir = Object.defineProperty, Bc = ki("".slice), zc = ki("".replace), Uc = ki([].join), Hc = Li && !Ic(function() {
        return ir(function() {}, "length", {
            value: 8
        }).length !== 8;
    }), Xc = String(String).split("String"), Yc = Xs.exports = function(t, e, r) {
        Bc($s(e), 0, 7) === "Symbol(" && (e = "[" + zc($s(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), 
        r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!rr(t, "name") || Lc && t.name !== e) && (Li ? ir(t, "name", {
            value: e,
            configurable: !0
        }) : t.name = e), Hc && r && rr(r, "arity") && t.length !== r.arity && ir(t, "length", {
            value: r.arity
        });
        try {
            r && rr(r, "constructor") && r.constructor ? Li && ir(t, "prototype", {
                writable: !1
            }) : t.prototype && (t.prototype = void 0);
        } catch {}
        var i = Fc(t);
        return rr(i, "source") || (i.source = Uc(Xc, typeof e == "string" ? e : "")), 
        t;
    };
    Function.prototype.toString = Yc(function() {
        return kc(this) && jc(this).source || Dc(this);
    }, "toString");
    var Zs = Xs.exports, qc = j, Wc = pt, Gc = Zs, Qc = yi, Rt = function(t, e, r, i) {
        i || (i = {});
        var n = i.enumerable, s = i.name !== void 0 ? i.name : e;
        if (qc(r) && Gc(r, s, i), i.global) n ? t[e] = r : Qc(e, r); else {
            try {
                i.unsafe ? t[e] && (n = !0) : delete t[e];
            } catch {}
            n ? t[e] = r : Wc.f(t, e, {
                value: r,
                enumerable: !1,
                configurable: !i.nonConfigurable,
                writable: !i.nonWritable
            });
        }
        return t;
    }, Ks = {}, $c = Math.ceil, Zc = Math.floor, Kc = Math.trunc || function(t) {
        var e = +t;
        return (e > 0 ? Zc : $c)(e);
    }, Jc = Kc, nr = function(t) {
        var e = +t;
        return e != e || e === 0 ? 0 : Jc(e);
    }, tg = nr, eg = Math.max, rg = Math.min, ig = nr, ng = Math.min, Wt = function(t) {
        var e = ig(t);
        return e > 0 ? ng(e, 9007199254740991) : 0;
    }, ag = Wt, Di = function(t) {
        return ag(t.length);
    }, sg = de, og = function(t, e) {
        var r = tg(t);
        return r < 0 ? eg(r + e, 0) : rg(r, e);
    }, ug = Di, Js = function(t) {
        return function(e, r, i) {
            var n = sg(e), s = ug(n);
            if (s === 0) return !t && -1;
            var a, o = og(i, s);
            if (t && r != r) {
                for (;s > o; ) if ((a = n[o++]) != a) return !0;
            } else for (;s > o; o++) if ((t || o in n) && n[o] === r) return t || o || 0;
            return !t && -1;
        };
    }, to = {
        includes: Js(!0),
        indexOf: Js(!1)
    }, Fi = ht, hg = de, lg = to.indexOf, cg = _i, eo = F([].push), ro = function(t, e) {
        var r, i = hg(t), n = 0, s = [];
        for (r in i) !Fi(cg, r) && Fi(i, r) && eo(s, r);
        for (;e.length > n; ) Fi(i, r = e[n++]) && (~lg(s, r) || eo(s, r));
        return s;
    }, ji = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ], gg = ro, fg = ji.concat("length", "prototype");
    Ks.f = Object.getOwnPropertyNames || function(t) {
        return gg(t, fg);
    };
    var io = {};
    io.f = Object.getOwnPropertySymbols;
    var dg = _t, pg = Ks, mg = io, yg = $, vg = F([].concat), xg = dg("Reflect", "ownKeys") || function(t) {
        var e = pg.f(yg(t)), r = mg.f;
        return r ? vg(e, r(t)) : e;
    }, no = ht, bg = xg, Sg = fe, wg = pt, Tg = D, Og = j, Ag = /#|\.prototype\./, xe = function(t, e) {
        var r = Eg[Cg(t)];
        return r === Mg || r !== Pg && (Og(e) ? Tg(e) : !!e);
    }, Cg = xe.normalize = function(t) {
        return String(t).replace(Ag, ".").toLowerCase();
    }, Eg = xe.data = {}, Pg = xe.NATIVE = "N", Mg = xe.POLYFILL = "P", ao = xe, ar = L, Ng = fe.f, _g = pe, Rg = Rt, Vg = yi, Ig = function(t, e, r) {
        for (var i = bg(e), n = wg.f, s = Sg.f, a = 0; a < i.length; a++) {
            var o = i[a];
            no(t, o) || r && no(r, o) || n(t, o, s(e, o));
        }
    }, kg = ao, Z = function(t, e) {
        var r, i, n, s, a, o = t.target, u = t.global, h = t.stat;
        if (r = u ? ar : h ? ar[o] || Vg(o, {}) : ar[o] && ar[o].prototype) for (i in e) {
            if (s = e[i], n = t.dontCallGetSet ? (a = Ng(r, i)) && a.value : r[i], 
            !kg(u ? i : o + (h ? "." : "#") + i, t.forced) && n !== void 0) {
                if (typeof s == typeof n) continue;
                Ig(s, n);
            }
            (t.sham || n && n.sham) && _g(s, "sham", !0), Rg(r, i, s, t);
        }
    }, be = Mt(L.process) === "process", Lg = F, Dg = dt, Fg = ut, jg = function(t) {
        return Fg(t) || t === null;
    }, Bg = String, zg = TypeError, Ug = function(t, e, r) {
        try {
            return Lg(Dg(Object.getOwnPropertyDescriptor(t, e)[r]));
        } catch {}
    }, Hg = ut, Xg = ot, Yg = function(t) {
        if (jg(t)) return t;
        throw new zg("Can't set " + Bg(t) + " as a prototype");
    }, so = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1, r = {};
        try {
            (t = Ug(Object.prototype, "__proto__", "set"))(r, []), e = r instanceof Array;
        } catch {}
        return function(i, n) {
            return Xg(i), Yg(n), Hg(i) && (e ? t(i, n) : i.__proto__ = n), i;
        };
    }() : void 0), qg = pt.f, Wg = ht, oo = H("toStringTag"), sr = function(t, e, r) {
        t && !r && (t = t.prototype), t && !Wg(t, oo) && qg(t, oo, {
            configurable: !0,
            value: e
        });
    }, uo = Zs, Gg = pt, Qg = _t, $g = function(t, e, r) {
        return r.get && uo(r.get, e, {
            getter: !0
        }), r.set && uo(r.set, e, {
            setter: !0
        }), Gg.f(t, e, r);
    }, Zg = st, ho = H("species"), Kg = We, Jg = TypeError, lo = {};
    lo[H("toStringTag")] = "z";
    var tf = String(lo) === "[object z]", ef = j, or = Mt, rf = H("toStringTag"), nf = Object, af = or(function() {
        return arguments;
    }()) === "Arguments", Bi = tf ? or : function(t) {
        var e, r, i;
        return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (r = function(n, s) {
            try {
                return n[s];
            } catch {}
        }(e = nf(t), rf)) == "string" ? r : af ? or(e) : (i = or(e)) === "Object" && ef(e.callee) ? "Arguments" : i;
    }, sf = F, of = D, co = j, uf = Bi, hf = Mi, go = function() {}, fo = _t("Reflect", "construct"), zi = /^\s*(?:class|function)\b/, lf = sf(zi.exec), cf = !zi.test(go), Se = function(t) {
        if (!co(t)) return !1;
        try {
            return fo(go, [], t), !0;
        } catch {
            return !1;
        }
    }, po = function(t) {
        if (!co(t)) return !1;
        switch (uf(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
            return cf || !!lf(zi, hf(t));
        } catch {
            return !0;
        }
    };
    po.sham = !0;
    var we, Gt, mo, Ui, gf = !fo || of(function() {
        var t;
        return Se(Se.call) || !Se(Object) || !Se(function() {
            t = !0;
        }) || t;
    }) ? po : Se, ff = gf, df = $e, pf = TypeError, yo = $, mf = function(t) {
        if (ff(t)) return t;
        throw new pf(df(t) + " is not a constructor");
    }, yf = Nt, vf = H("species"), vo = function(t, e) {
        var r, i = yo(t).constructor;
        return i === void 0 || yf(r = yo(i)[vf]) ? e : mf(r);
    }, xf = Xe, xo = Function.prototype, bo = xo.apply, So = xo.call, wo = typeof Reflect == "object" && Reflect.apply || (xf ? So.bind(bo) : function() {
        return So.apply(bo, arguments);
    }), bf = Mt, Sf = F, Te = function(t) {
        if (bf(t) === "Function") return Sf(t);
    }, wf = dt, Tf = Xe, Of = Te(Te.bind), Hi = function(t, e) {
        return wf(t), e === void 0 ? t : Tf ? Of(t, e) : function() {
            return t.apply(e, arguments);
        };
    }, To = _t("document", "documentElement"), Af = F([].slice), Cf = TypeError, Oo = /(?:ipad|iphone|ipod).*applewebkit/i.test(Ge), it = L, Ef = wo, Pf = Hi, Ao = j, Mf = ht, Co = D, Eo = To, Nf = Af, Po = Ke, _f = function(t, e) {
        if (t < e) throw new Cf("Not enough arguments");
        return t;
    }, Rf = Oo, Vf = be, Xi = it.setImmediate, Yi = it.clearImmediate, If = it.process, qi = it.Dispatch, kf = it.Function, Mo = it.MessageChannel, Lf = it.String, Wi = 0, Oe = {}, No = "onreadystatechange";
    Co(function() {
        we = it.location;
    });
    var Gi = function(t) {
        if (Mf(Oe, t)) {
            var e = Oe[t];
            delete Oe[t], e();
        }
    }, Qi = function(t) {
        return function() {
            Gi(t);
        };
    }, _o = function(t) {
        Gi(t.data);
    }, Ro = function(t) {
        it.postMessage(Lf(t), we.protocol + "//" + we.host);
    };
    Xi && Yi || (Xi = function(t) {
        _f(arguments.length, 1);
        var e = Ao(t) ? t : kf(t), r = Nf(arguments, 1);
        return Oe[++Wi] = function() {
            Ef(e, void 0, r);
        }, Gt(Wi), Wi;
    }, Yi = function(t) {
        delete Oe[t];
    }, Vf ? Gt = function(t) {
        If.nextTick(Qi(t));
    } : qi && qi.now ? Gt = function(t) {
        qi.now(Qi(t));
    } : Mo && !Rf ? (Ui = (mo = new Mo()).port2, mo.port1.onmessage = _o, Gt = Pf(Ui.postMessage, Ui)) : it.addEventListener && Ao(it.postMessage) && !it.importScripts && we && we.protocol !== "file:" && !Co(Ro) ? (Gt = Ro, 
    it.addEventListener("message", _o, !1)) : Gt = No in Po("script") ? function(t) {
        Eo.appendChild(Po("script"))[No] = function() {
            Eo.removeChild(this), Gi(t);
        };
    } : function(t) {
        setTimeout(Qi(t), 0);
    });
    var Vo = {
        set: Xi,
        clear: Yi
    }, Io = L, Df = st, Ff = Object.getOwnPropertyDescriptor, ko = function() {
        this.head = null, this.tail = null;
    };
    ko.prototype = {
        add: function(t) {
            var e = {
                item: t,
                next: null
            }, r = this.tail;
            r ? r.next = e : this.head = e, this.tail = e;
        },
        get: function() {
            var t = this.head;
            if (t) return (this.head = t.next) === null && (this.tail = null), t.item;
        }
    };
    var Qt, $i, Zi, Ki, Lo, Do = ko, jf = /ipad|iphone|ipod/i.test(Ge) && typeof Pebble < "u", Bf = /web0s(?!.*chrome)/i.test(Ge), $t = L, zf = function(t) {
        if (!Df) return Io[t];
        var e = Ff(Io, t);
        return e && e.value;
    }, Fo = Hi, Ji = Vo.set, Uf = Do, Hf = Oo, Xf = jf, Yf = Bf, tn = be, jo = $t.MutationObserver || $t.WebKitMutationObserver, Bo = $t.document, zo = $t.process, ur = $t.Promise, en = zf("queueMicrotask");
    if (!en) {
        var hr = new Uf(), lr = function() {
            var t, e;
            for (tn && (t = zo.domain) && t.exit(); e = hr.get(); ) try {
                e();
            } catch (r) {
                throw hr.head && Qt(), r;
            }
            t && t.enter();
        };
        Hf || tn || Yf || !jo || !Bo ? !Xf && ur && ur.resolve ? ((Ki = ur.resolve(void 0)).constructor = ur, 
        Lo = Fo(Ki.then, Ki), Qt = function() {
            Lo(lr);
        }) : tn ? Qt = function() {
            zo.nextTick(lr);
        } : (Ji = Fo(Ji, $t), Qt = function() {
            Ji(lr);
        }) : ($i = !0, Zi = Bo.createTextNode(""), new jo(lr).observe(Zi, {
            characterData: !0
        }), Qt = function() {
            Zi.data = $i = !$i;
        }), en = function(t) {
            hr.head || Qt(), hr.add(t);
        };
    }
    var qf = en, rn = function(t) {
        try {
            return {
                error: !1,
                value: t()
            };
        } catch (e) {
            return {
                error: !0,
                value: e
            };
        }
    }, cr = L.Promise, Uo = typeof Deno == "object" && Deno && typeof Deno.version == "object", Wf = !Uo && !be && typeof window == "object" && typeof document == "object", Gf = L, Ae = cr, Qf = j, $f = ao, Zf = Mi, Kf = H, Jf = Wf, td = Uo, nn = Qe;
    Ae && Ae.prototype;
    var ed = Kf("species"), Ho = !1, Xo = Qf(Gf.PromiseRejectionEvent), rd = $f("Promise", function() {
        var t = Zf(Ae), e = t !== String(Ae);
        if (!e && nn === 66) return !0;
        if (!nn || nn < 51 || !/native code/.test(t)) {
            var r = new Ae(function(n) {
                n(1);
            }), i = function(n) {
                n(function() {}, function() {});
            };
            if ((r.constructor = {})[ed] = i, !(Ho = r.then(function() {}) instanceof i)) return !0;
        }
        return !e && (Jf || td) && !Xo;
    }), Vt = {
        CONSTRUCTOR: rd,
        REJECTION_EVENT: Xo,
        SUBCLASSING: Ho
    }, Zt = {}, Yo = dt, id = TypeError, nd = function(t) {
        var e, r;
        this.promise = new t(function(i, n) {
            if (e !== void 0 || r !== void 0) throw new id("Bad Promise constructor");
            e = i, r = n;
        }), this.resolve = Yo(e), this.reject = Yo(r);
    };
    Zt.f = function(t) {
        return new nd(t);
    };
    var an, qo, Wo, ad = Z, gr = be, Ot = L, Kt = X, Go = Rt, Qo = so, sd = sr, od = function(t) {
        var e = Qg(t);
        Zg && e && !e[ho] && $g(e, ho, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    }, ud = dt, fr = j, hd = ut, ld = function(t, e) {
        if (Kg(e, t)) return t;
        throw new Jg("Incorrect invocation");
    }, cd = vo, $o = Vo.set, sn = qf, gd = function(t, e) {}, fd = rn, dd = Do, Zo = ve, dr = cr, Ko = Zt, pr = "Promise", Jo = Vt.CONSTRUCTOR, pd = Vt.REJECTION_EVENT, md = Vt.SUBCLASSING, on = Zo.getterFor(pr), yd = Zo.set, Jt = dr && dr.prototype, te = dr, mr = Jt, tu = Ot.TypeError, un = Ot.document, hn = Ot.process, ln = Ko.f, vd = ln, xd = !!(un && un.createEvent && Ot.dispatchEvent), eu = "unhandledrejection", ru = function(t) {
        var e;
        return !(!hd(t) || !fr(e = t.then)) && e;
    }, iu = function(t, e) {
        var r, i, n, s = e.value, a = e.state === 1, o = a ? t.ok : t.fail, u = t.resolve, h = t.reject, l = t.domain;
        try {
            o ? (a || (e.rejection === 2 && Sd(e), e.rejection = 1), o === !0 ? r = s : (l && l.enter(), 
            r = o(s), l && (l.exit(), n = !0)), r === t.promise ? h(new tu("Promise-chain cycle")) : (i = ru(r)) ? Kt(i, r, u, h) : u(r)) : h(s);
        } catch (g) {
            l && !n && l.exit(), h(g);
        }
    }, nu = function(t, e) {
        t.notified || (t.notified = !0, sn(function() {
            for (var r, i = t.reactions; r = i.get(); ) iu(r, t);
            t.notified = !1, e && !t.rejection && bd(t);
        }));
    }, au = function(t, e, r) {
        var i, n;
        xd ? ((i = un.createEvent("Event")).promise = e, i.reason = r, i.initEvent(t, !1, !0), 
        Ot.dispatchEvent(i)) : i = {
            promise: e,
            reason: r
        }, !pd && (n = Ot["on" + t]) ? n(i) : t === eu && gd("Unhandled promise rejection", r);
    }, bd = function(t) {
        Kt($o, Ot, function() {
            var e, r = t.facade, i = t.value;
            if (su(t) && (e = fd(function() {
                gr ? hn.emit("unhandledRejection", i, r) : au(eu, r, i);
            }), t.rejection = gr || su(t) ? 2 : 1, e.error)) throw e.value;
        });
    }, su = function(t) {
        return t.rejection !== 1 && !t.parent;
    }, Sd = function(t) {
        Kt($o, Ot, function() {
            var e = t.facade;
            gr ? hn.emit("rejectionHandled", e) : au("rejectionhandled", e, t.value);
        });
    }, ee = function(t, e, r) {
        return function(i) {
            t(e, i, r);
        };
    }, re = function(t, e, r) {
        t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, nu(t, !0));
    }, cn = function(t, e, r) {
        if (!t.done) {
            t.done = !0, r && (t = r);
            try {
                if (t.facade === e) throw new tu("Promise can't be resolved itself");
                var i = ru(e);
                i ? sn(function() {
                    var n = {
                        done: !1
                    };
                    try {
                        Kt(i, e, ee(cn, n, t), ee(re, n, t));
                    } catch (s) {
                        re(n, s, t);
                    }
                }) : (t.value = e, t.state = 1, nu(t, !1));
            } catch (n) {
                re({
                    done: !1
                }, n, t);
            }
        }
    };
    if (Jo && (mr = (te = function(t) {
        ld(this, mr), ud(t), Kt(an, this);
        var e = on(this);
        try {
            t(ee(cn, e), ee(re, e));
        } catch (r) {
            re(e, r);
        }
    }).prototype, (an = function(t) {
        yd(this, {
            type: pr,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new dd(),
            rejection: !1,
            state: 0,
            value: void 0
        });
    }).prototype = Go(mr, "then", function(t, e) {
        var r = on(this), i = ln(cd(this, te));
        return r.parent = !0, i.ok = !fr(t) || t, i.fail = fr(e) && e, i.domain = gr ? hn.domain : void 0, 
        r.state === 0 ? r.reactions.add(i) : sn(function() {
            iu(i, r);
        }), i.promise;
    }), qo = function() {
        var t = new an(), e = on(t);
        this.promise = t, this.resolve = ee(cn, e), this.reject = ee(re, e);
    }, Ko.f = ln = function(t) {
        return t === te || t === void 0 ? new qo(t) : vd(t);
    }, fr(dr) && Jt !== Object.prototype)) {
        Wo = Jt.then, md || Go(Jt, "then", function(t, e) {
            var r = this;
            return new te(function(i, n) {
                Kt(Wo, r, i, n);
            }).then(t, e);
        }, {
            unsafe: !0
        });
        try {
            delete Jt.constructor;
        } catch {}
        Qo && Qo(Jt, mr);
    }
    ad({
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: Jo
    }, {
        Promise: te
    }), sd(te, pr, !1), od(pr);
    var Ce = {}, wd = Ce, Td = H("iterator"), Od = Array.prototype, Ad = Bi, ou = Xt, Cd = Nt, Ed = Ce, Pd = H("iterator"), uu = function(t) {
        if (!Cd(t)) return ou(t, Pd) || ou(t, "@@iterator") || Ed[Ad(t)];
    }, Md = X, Nd = dt, _d = $, Rd = $e, Vd = uu, Id = TypeError, kd = X, hu = $, Ld = Xt, Dd = Hi, Fd = X, jd = $, Bd = $e, zd = function(t) {
        return t !== void 0 && (wd.Array === t || Od[Td] === t);
    }, Ud = Di, lu = We, Hd = function(t, e) {
        var r = arguments.length < 2 ? Vd(t) : e;
        if (Nd(r)) return _d(Md(r, t));
        throw new Id(Rd(t) + " is not iterable");
    }, Xd = uu, cu = function(t, e, r) {
        var i, n;
        hu(t);
        try {
            if (!(i = Ld(t, "return"))) {
                if (e === "throw") throw r;
                return r;
            }
            i = kd(i, t);
        } catch (s) {
            n = !0, i = s;
        }
        if (e === "throw") throw r;
        if (n) throw i;
        return hu(i), r;
    }, Yd = TypeError, yr = function(t, e) {
        this.stopped = t, this.result = e;
    }, gu = yr.prototype, fu = function(t, e, r) {
        var i, n, s, a, o, u, h, l = r && r.that, g = !(!r || !r.AS_ENTRIES), c = !(!r || !r.IS_RECORD), f = !(!r || !r.IS_ITERATOR), d = !(!r || !r.INTERRUPTED), p = Dd(e, l), y = function(v) {
            return i && cu(i, "normal", v), new yr(!0, v);
        }, x = function(v) {
            return g ? (jd(v), d ? p(v[0], v[1], y) : p(v[0], v[1])) : d ? p(v, y) : p(v);
        };
        if (c) i = t.iterator; else if (f) i = t; else {
            if (!(n = Xd(t))) throw new Yd(Bd(t) + " is not iterable");
            if (zd(n)) {
                for (s = 0, a = Ud(t); a > s; s++) if ((o = x(t[s])) && lu(gu, o)) return o;
                return new yr(!1);
            }
            i = Hd(t, n);
        }
        for (u = c ? t.next : i.next; !(h = Fd(u, i)).done; ) {
            try {
                o = x(h.value);
            } catch (v) {
                cu(i, "throw", v);
            }
            if (typeof o == "object" && o && lu(gu, o)) return o;
        }
        return new yr(!1);
    }, du = H("iterator"), pu = !1;
    try {
        var qd = 0, mu = {
            next: function() {
                return {
                    done: !!qd++
                };
            },
            return: function() {
                pu = !0;
            }
        };
        mu[du] = function() {
            return this;
        }, Array.from(mu, function() {
            throw 2;
        });
    } catch {}
    var Wd = cr, Gd = function(t, e) {
        try {
            if (!e && !pu) return !1;
        } catch {
            return !1;
        }
        var r = !1;
        try {
            var i = {};
            i[du] = function() {
                return {
                    next: function() {
                        return {
                            done: r = !0
                        };
                    }
                };
            }, t(i);
        } catch {}
        return r;
    }, yu = Vt.CONSTRUCTOR || !Gd(function(t) {
        Wd.all(t).then(void 0, function() {});
    }), Qd = X, $d = dt, Zd = Zt, Kd = rn, Jd = fu;
    Z({
        target: "Promise",
        stat: !0,
        forced: yu
    }, {
        all: function(t) {
            var e = this, r = Zd.f(e), i = r.resolve, n = r.reject, s = Kd(function() {
                var a = $d(e.resolve), o = [], u = 0, h = 1;
                Jd(t, function(l) {
                    var g = u++, c = !1;
                    h++, Qd(a, e, l).then(function(f) {
                        c || (c = !0, o[g] = f, --h || i(o));
                    }, n);
                }), --h || i(o);
            });
            return s.error && n(s.value), r.promise;
        }
    });
    var tp = Z, ep = Vt.CONSTRUCTOR, gn = cr, rp = _t, ip = j, np = Rt, vu = gn && gn.prototype;
    if (tp({
        target: "Promise",
        proto: !0,
        forced: ep,
        real: !0
    }, {
        catch: function(t) {
            return this.then(void 0, t);
        }
    }), ip(gn)) {
        var xu = rp("Promise").prototype.catch;
        vu.catch !== xu && np(vu, "catch", xu, {
            unsafe: !0
        });
    }
    var ap = X, sp = dt, op = Zt, up = rn, hp = fu;
    Z({
        target: "Promise",
        stat: !0,
        forced: yu
    }, {
        race: function(t) {
            var e = this, r = op.f(e), i = r.reject, n = up(function() {
                var s = sp(e.resolve);
                hp(t, function(a) {
                    ap(s, e, a).then(r.resolve, i);
                });
            });
            return n.error && i(n.value), r.promise;
        }
    });
    var lp = Zt;
    Z({
        target: "Promise",
        stat: !0,
        forced: Vt.CONSTRUCTOR
    }, {
        reject: function(t) {
            var e = lp.f(this);
            return (0, e.reject)(t), e.promise;
        }
    });
    var cp = $, gp = ut, fp = Zt, dp = Z, pp = Vt.CONSTRUCTOR, mp = function(t, e) {
        if (cp(t), gp(e) && e.constructor === t) return e;
        var r = fp.f(t);
        return (0, r.resolve)(e), r.promise;
    };
    function bu(t, e, r, i, n, s, a) {
        try {
            var o = t[s](a), u = o.value;
        } catch (h) {
            return void r(h);
        }
        o.done ? e(u) : Promise.resolve(u).then(i, n);
    }
    function mt(t) {
        return function() {
            var e = this, r = arguments;
            return new Promise(function(i, n) {
                var s = t.apply(e, r);
                function a(u) {
                    bu(s, i, n, a, o, "next", u);
                }
                function o(u) {
                    bu(s, i, n, a, o, "throw", u);
                }
                a(void 0);
            });
        };
    }
    _t("Promise"), dp({
        target: "Promise",
        stat: !0,
        forced: pp
    }, {
        resolve: function(t) {
            return mp(this, t);
        }
    });
    var yp = Bi, vp = String, ft = function(t) {
        if (yp(t) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return vp(t);
    }, xp = $, Su = function() {
        var t = xp(this), e = "";
        return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), 
        t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), 
        t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
    }, fn = D, dn = L.RegExp, pn = fn(function() {
        var t = dn("a", "y");
        return t.lastIndex = 2, t.exec("abcd") !== null;
    }), bp = pn || fn(function() {
        return !dn("a", "y").sticky;
    }), wu = {
        BROKEN_CARET: pn || fn(function() {
            var t = dn("^r", "gy");
            return t.lastIndex = 2, t.exec("str") !== null;
        }),
        MISSED_STICKY: bp,
        UNSUPPORTED_Y: pn
    }, Tu = {}, Sp = ro, wp = ji, Tp = Object.keys || function(t) {
        return Sp(t, wp);
    }, Op = st, Ap = Us, Cp = pt, Ep = $, Pp = de, Mp = Tp;
    Tu.f = Op && !Ap ? Object.defineProperties : function(t, e) {
        Ep(t);
        for (var r, i = Pp(e), n = Mp(e), s = n.length, a = 0; s > a; ) Cp.f(t, r = n[a++], i[r]);
        return t;
    };
    var vr, Np = $, _p = Tu, Ou = ji, Rp = _i, Vp = To, Ip = Ke, mn = "prototype", yn = "script", Au = Ni("IE_PROTO"), vn = function() {}, Cu = function(t) {
        return "<" + yn + ">" + t + "</" + yn + ">";
    }, Eu = function(t) {
        t.write(Cu("")), t.close();
        var e = t.parentWindow.Object;
        return t = null, e;
    }, xr = function() {
        try {
            vr = new ActiveXObject("htmlfile");
        } catch {}
        var t, e, r;
        xr = typeof document < "u" ? document.domain && vr ? Eu(vr) : (e = Ip("iframe"), 
        r = "java" + yn + ":", e.style.display = "none", Vp.appendChild(e), e.src = String(r), 
        (t = e.contentWindow.document).open(), t.write(Cu("document.F=Object")), 
        t.close(), t.F) : Eu(vr);
        for (var i = Ou.length; i--; ) delete xr[mn][Ou[i]];
        return xr();
    };
    Rp[Au] = !0;
    var Pu, xn, bn = Object.create || function(t, e) {
        var r;
        return t !== null ? (vn[mn] = Np(t), r = new vn(), vn[mn] = null, r[Au] = t) : r = xr(), 
        e === void 0 ? r : _p.f(r, e);
    }, kp = D, Lp = L.RegExp, Dp = kp(function() {
        var t = Lp(".", "s");
        return !(t.dotAll && t.test(`
`) && t.flags === "s");
    }), Fp = D, jp = L.RegExp, Bp = Fp(function() {
        var t = jp("(?<a>b)", "g");
        return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
    }), ie = X, br = F, zp = ft, Up = Su, Hp = wu, Xp = bn, Yp = ve.get, qp = Dp, Wp = Bp, Gp = xi("native-string-replace", String.prototype.replace), Sr = RegExp.prototype.exec, Sn = Sr, Qp = br("".charAt), $p = br("".indexOf), Zp = br("".replace), wn = br("".slice), Tn = (xn = /b*/g, 
    ie(Sr, Pu = /a/, "a"), ie(Sr, xn, "a"), Pu.lastIndex !== 0 || xn.lastIndex !== 0), Mu = Hp.BROKEN_CARET, On = /()??/.exec("")[1] !== void 0;
    (Tn || On || Mu || qp || Wp) && (Sn = function(t) {
        var e, r, i, n, s, a, o, u = this, h = Yp(u), l = zp(t), g = h.raw;
        if (g) return g.lastIndex = u.lastIndex, e = ie(Sn, g, l), u.lastIndex = g.lastIndex, 
        e;
        var c = h.groups, f = Mu && u.sticky, d = ie(Up, u), p = u.source, y = 0, x = l;
        if (f && (d = Zp(d, "y", ""), $p(d, "g") === -1 && (d += "g"), x = wn(l, u.lastIndex), 
        u.lastIndex > 0 && (!u.multiline || u.multiline && Qp(l, u.lastIndex - 1) !== `
`) && (p = "(?: " + p + ")", x = " " + x, y++), r = new RegExp("^(?:" + p + ")", d)), 
        On && (r = new RegExp("^" + p + "$(?!\\s)", d)), Tn && (i = u.lastIndex), 
        n = ie(Sr, f ? r : u, x), f ? n ? (n.input = wn(n.input, y), n[0] = wn(n[0], y), 
        n.index = u.lastIndex, u.lastIndex += n[0].length) : u.lastIndex = 0 : Tn && n && (u.lastIndex = u.global ? n.index + n[0].length : i), 
        On && n && n.length > 1 && ie(Gp, n[0], r, function() {
            for (s = 1; s < arguments.length - 2; s++) arguments[s] === void 0 && (n[s] = void 0);
        }), n && c) for (n.groups = a = Xp(null), s = 0; s < c.length; s++) a[(o = c[s])[0]] = n[o[1]];
        return n;
    });
    var wr = Sn;
    Z({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== wr
    }, {
        exec: wr
    });
    var Nu = X, _u = Rt, Kp = wr, Ru = D, Vu = H, Jp = pe, tm = Vu("species"), An = RegExp.prototype, Cn = function(t, e, r, i) {
        var n = Vu(t), s = !Ru(function() {
            var h = {};
            return h[n] = function() {
                return 7;
            }, ""[t](h) !== 7;
        }), a = s && !Ru(function() {
            var h = !1, l = /a/;
            return t === "split" && ((l = {}).constructor = {}, l.constructor[tm] = function() {
                return l;
            }, l.flags = "", l[n] = /./[n]), l.exec = function() {
                return h = !0, null;
            }, l[n](""), !h;
        });
        if (!s || !a || r) {
            var o = /./[n], u = e(n, ""[t], function(h, l, g, c, f) {
                var d = l.exec;
                return d === Kp || d === An.exec ? s && !f ? {
                    done: !0,
                    value: Nu(o, l, g, c)
                } : {
                    done: !0,
                    value: Nu(h, g, l, c)
                } : {
                    done: !1
                };
            });
            _u(String.prototype, t, u[0]), _u(An, n, u[1]);
        }
        i && Jp(An[n], "sham", !0);
    }, En = F, em = nr, rm = ft, im = ot, nm = En("".charAt), Iu = En("".charCodeAt), am = En("".slice), ku = function(t) {
        return function(e, r) {
            var i, n, s = rm(im(e)), a = em(r), o = s.length;
            return a < 0 || a >= o ? t ? "" : void 0 : (i = Iu(s, a)) < 55296 || i > 56319 || a + 1 === o || (n = Iu(s, a + 1)) < 56320 || n > 57343 ? t ? nm(s, a) : i : t ? am(s, a, a + 2) : n - 56320 + (i - 55296 << 10) + 65536;
        };
    }, sm = {
        codeAt: ku(!1),
        charAt: ku(!0)
    }.charAt, Pn = function(t, e, r) {
        return e + (r ? sm(t, e).length : 1);
    }, Lu = X, om = $, um = j, hm = Mt, lm = wr, cm = TypeError, Mn = function(t, e) {
        var r = t.exec;
        if (um(r)) {
            var i = Lu(r, t, e);
            return i !== null && om(i), i;
        }
        if (hm(t) === "RegExp") return Lu(lm, t, e);
        throw new cm("RegExp#exec called on incompatible receiver");
    }, gm = X, fm = $, dm = Nt, pm = Wt, Nn = ft, mm = ot, ym = Xt, vm = Pn, Du = Mn;
    Cn("match", function(t, e, r) {
        return [ function(i) {
            var n = mm(this), s = dm(i) ? void 0 : ym(i, t);
            return s ? gm(s, i, n) : new RegExp(i)[t](Nn(n));
        }, function(i) {
            var n = fm(this), s = Nn(i), a = r(e, n, s);
            if (a.done) return a.value;
            if (!n.global) return Du(n, s);
            var o = n.unicode;
            n.lastIndex = 0;
            for (var u, h = [], l = 0; (u = Du(n, s)) !== null; ) {
                var g = Nn(u[0]);
                h[l] = g, g === "" && (n.lastIndex = vm(s, pm(n.lastIndex), o)), 
                l++;
            }
            return l === 0 ? null : h;
        } ];
    });
    var _n = F, xm = Ze, bm = Math.floor, Rn = _n("".charAt), Sm = _n("".replace), Vn = _n("".slice), wm = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Tm = /\$([$&'`]|\d{1,2})/g, Om = wo, Fu = X, Tr = F, Am = Cn, Cm = D, Em = $, Pm = j, Mm = Nt, Nm = nr, _m = Wt, ne = ft, Rm = ot, Vm = Pn, Im = Xt, km = function(t, e, r, i, n, s) {
        var a = r + t.length, o = i.length, u = Tm;
        return n !== void 0 && (n = xm(n), u = wm), Sm(s, u, function(h, l) {
            var g;
            switch (Rn(l, 0)) {
              case "$":
                return "$";

              case "&":
                return t;

              case "`":
                return Vn(e, 0, r);

              case "'":
                return Vn(e, a);

              case "<":
                g = n[Vn(l, 1, -1)];
                break;

              default:
                var c = +l;
                if (c === 0) return h;
                if (c > o) {
                    var f = bm(c / 10);
                    return f === 0 ? h : f <= o ? i[f - 1] === void 0 ? Rn(l, 1) : i[f - 1] + Rn(l, 1) : h;
                }
                g = i[c - 1];
            }
            return g === void 0 ? "" : g;
        });
    }, Lm = Mn, In = H("replace"), Dm = Math.max, Fm = Math.min, jm = Tr([].concat), kn = Tr([].push), ju = Tr("".indexOf), Bu = Tr("".slice), Bm = "a".replace(/./, "$0") === "$0", zu = !!/./[In] && /./[In]("a", "$0") === "";
    Am("replace", function(t, e, r) {
        var i = zu ? "$" : "$0";
        return [ function(n, s) {
            var a = Rm(this), o = Mm(n) ? void 0 : Im(n, In);
            return o ? Fu(o, n, a, s) : Fu(e, ne(a), n, s);
        }, function(n, s) {
            var a = Em(this), o = ne(n);
            if (typeof s == "string" && ju(s, i) === -1 && ju(s, "$<") === -1) {
                var u = r(e, a, o, s);
                if (u.done) return u.value;
            }
            var h = Pm(s);
            h || (s = ne(s));
            var l, g = a.global;
            g && (l = a.unicode, a.lastIndex = 0);
            for (var c, f = []; (c = Lm(a, o)) !== null && (kn(f, c), g); ) ne(c[0]) === "" && (a.lastIndex = Vm(o, _m(a.lastIndex), l));
            for (var d, p = "", y = 0, x = 0; x < f.length; x++) {
                for (var v, b = ne((c = f[x])[0]), A = Dm(Fm(Nm(c.index), o.length), 0), S = [], w = 1; w < c.length; w++) kn(S, (d = c[w]) === void 0 ? d : String(d));
                var O = c.groups;
                if (h) {
                    var P = jm([ b ], S, A, o);
                    O !== void 0 && kn(P, O), v = ne(Om(s, void 0, P));
                } else v = km(b, o, A, S, O, s);
                A >= y && (p += Bu(o, y, A) + v, y = A + b.length);
            }
            return p + Bu(o, y);
        } ];
    }, !!Cm(function() {
        var t = /./;
        return t.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            }, e;
        }, "".replace(t, "$<a>") !== "7";
    }) || !Bm || zu);
    var Ln, zm = ut, Um = Mt, Hm = H("match"), Xm = function(t) {
        var e;
        return zm(t) && ((e = t[Hm]) !== void 0 ? !!e : Um(t) === "RegExp");
    }, Ym = TypeError, Dn = function(t) {
        if (Xm(t)) throw new Ym("The method doesn't accept regular expressions");
        return t;
    }, qm = H("match"), Fn = function(t) {
        var e = /./;
        try {
            "/./"[t](e);
        } catch {
            try {
                return e[qm] = !1, "/./"[t](e);
            } catch {}
        }
        return !1;
    }, Wm = Z, Gm = Te, Qm = fe.f, $m = Wt, Uu = ft, Zm = Dn, Km = ot, Jm = Fn, ty = Gm("".slice), ey = Math.min, Hu = Jm("startsWith");
    Wm({
        target: "String",
        proto: !0,
        forced: !!(Hu || (Ln = Qm(String.prototype, "startsWith"), !Ln || Ln.writable)) && !Hu
    }, {
        startsWith: function(t) {
            var e = Uu(Km(this));
            Zm(t);
            var r = $m(ey(arguments.length > 1 ? arguments[1] : void 0, e.length)), i = Uu(t);
            return ty(e, r, r + i.length) === i;
        }
    });
    var ry = H, iy = bn, ny = pt.f, jn = ry("unscopables"), Bn = Array.prototype;
    Bn[jn] === void 0 && ny(Bn, jn, {
        configurable: !0,
        value: iy(null)
    });
    var It, Xu, Yu, ay = !D(function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    }), sy = ht, oy = j, uy = Ze, hy = ay, qu = Ni("IE_PROTO"), zn = Object, ly = zn.prototype, Wu = hy ? zn.getPrototypeOf : function(t) {
        var e = uy(t);
        if (sy(e, qu)) return e[qu];
        var r = e.constructor;
        return oy(r) && e instanceof r ? r.prototype : e instanceof zn ? ly : null;
    }, cy = D, gy = j, fy = ut, Gu = Wu, dy = Rt, Un = H("iterator"), Qu = !1;
    [].keys && ("next" in (Yu = [].keys()) ? (Xu = Gu(Gu(Yu))) !== Object.prototype && (It = Xu) : Qu = !0);
    var py = !fy(It) || cy(function() {
        var t = {};
        return It[Un].call(t) !== t;
    });
    py && (It = {}), gy(It[Un]) || dy(It, Un, function() {
        return this;
    });
    var Hn = {
        IteratorPrototype: It,
        BUGGY_SAFARI_ITERATORS: Qu
    }, my = Hn.IteratorPrototype, yy = bn, vy = ui, xy = sr, by = Ce, Sy = function() {
        return this;
    }, wy = Z, Ty = X, Oy = j, Ay = function(t, e, r, i) {
        var n = e + " Iterator";
        return t.prototype = yy(my, {
            next: vy(+!i, r)
        }), xy(t, n, !1), by[n] = Sy, t;
    }, $u = Wu, Zu = so, Cy = sr, Ey = pe, Xn = Rt, Py = Ce, My = me.PROPER, Ny = me.CONFIGURABLE, Ku = Hn.IteratorPrototype, Or = Hn.BUGGY_SAFARI_ITERATORS, Ee = H("iterator"), Ju = "keys", Pe = "values", th = "entries", _y = function() {
        return this;
    }, Ry = de, Yn = function(t) {
        Bn[jn][t] = !0;
    }, eh = Ce, rh = ve, Vy = pt.f, Iy = function(t, e, r, i, n, s, a) {
        Ay(r, e, i);
        var o, u, h, l = function(x) {
            if (x === n && p) return p;
            if (!Or && x && x in f) return f[x];
            switch (x) {
              case Ju:
              case Pe:
              case th:
                return function() {
                    return new r(this, x);
                };
            }
            return function() {
                return new r(this);
            };
        }, g = e + " Iterator", c = !1, f = t.prototype, d = f[Ee] || f["@@iterator"] || n && f[n], p = !Or && d || l(n), y = e === "Array" && f.entries || d;
        if (y && (o = $u(y.call(new t()))) !== Object.prototype && o.next && ($u(o) !== Ku && (Zu ? Zu(o, Ku) : Oy(o[Ee]) || Xn(o, Ee, _y)), 
        Cy(o, g, !0)), My && n === Pe && d && d.name !== Pe && (Ny ? Ey(f, "name", Pe) : (c = !0, 
        p = function() {
            return Ty(d, this);
        })), n) if (u = {
            values: l(Pe),
            keys: s ? p : l(Ju),
            entries: l(th)
        }, a) for (h in u) (Or || c || !(h in f)) && Xn(f, h, u[h]); else wy({
            target: e,
            proto: !0,
            forced: Or || c
        }, u);
        return f[Ee] !== p && Xn(f, Ee, p, {
            name: n
        }), Py[e] = p, u;
    }, Ar = function(t, e) {
        return {
            value: t,
            done: e
        };
    }, ky = st, ih = "Array Iterator", Ly = rh.set, Dy = rh.getterFor(ih), Fy = Iy(Array, "Array", function(t, e) {
        Ly(this, {
            type: ih,
            target: Ry(t),
            index: 0,
            kind: e
        });
    }, function() {
        var t = Dy(this), e = t.target, r = t.index++;
        if (!e || r >= e.length) return t.target = void 0, Ar(void 0, !0);
        switch (t.kind) {
          case "keys":
            return Ar(r, !1);

          case "values":
            return Ar(e[r], !1);
        }
        return Ar([ r, e[r] ], !1);
    }, "values"), nh = eh.Arguments = eh.Array;
    if (Yn("keys"), Yn("values"), Yn("entries"), ky && nh.name !== "values") try {
        Vy(nh, "name", {
            value: "values"
        });
    } catch {}
    var qn = Ke("span").classList, ah = qn && qn.constructor && qn.constructor.prototype, jy = ah === Object.prototype ? void 0 : ah, sh = L, oh = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }, By = jy, Me = Fy, uh = pe, zy = sr, Wn = H("iterator"), Gn = Me.values, hh = function(t, e) {
        if (t) {
            if (t[Wn] !== Gn) try {
                uh(t, Wn, Gn);
            } catch {
                t[Wn] = Gn;
            }
            if (zy(t, e, !0), oh[e]) {
                for (var r in Me) if (t[r] !== Me[r]) try {
                    uh(t, r, Me[r]);
                } catch {
                    t[r] = Me[r];
                }
            }
        }
    };
    for (var Qn in oh) hh(sh[Qn] && sh[Qn].prototype, Qn);
    function Uy(t) {
        var e = function(r, i) {
            if (Oa(r) != "object" || !r) return r;
            var n = r[Symbol.toPrimitive];
            if (n !== void 0) {
                var s = n.call(r, i || "default");
                if (Oa(s) != "object") return s;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (i === "string" ? String : Number)(r);
        }(t, "string");
        return Oa(e) == "symbol" ? e : e + "";
    }
    function $n(t, e, r) {
        return (e = Uy(e)) in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t;
    }
    hh(By, "DOMTokenList");
    var Hy = dt, Xy = Ze, Yy = xs, qy = Di, lh = TypeError, ch = "Reduce of empty array with no initial value", gh = function(t) {
        return function(e, r, i, n) {
            var s = Xy(e), a = Yy(s), o = qy(s);
            if (Hy(r), o === 0 && i < 2) throw new lh(ch);
            var u = t ? o - 1 : 0, h = t ? -1 : 1;
            if (i < 2) for (;;) {
                if (u in a) {
                    n = a[u], u += h;
                    break;
                }
                if (u += h, t ? u < 0 : o <= u) throw new lh(ch);
            }
            for (;t ? u >= 0 : o > u; u += h) u in a && (n = r(n, a[u], u, s));
            return n;
        };
    }, Wy = {
        left: gh(!1),
        right: gh(!0)
    }, Gy = D, fh = function(t, e) {
        var r = [][t];
        return !!r && Gy(function() {
            r.call(null, e || function() {
                return 1;
            }, 1);
        });
    }, Qy = Wy.left;
    Z({
        target: "Array",
        proto: !0,
        forced: !be && Qe > 79 && Qe < 83 || !fh("reduce")
    }, {
        reduce: function(t) {
            var e = arguments.length;
            return Qy(this, t, e, e > 1 ? arguments[1] : void 0);
        }
    });
    var $y = Z, Zy = Te, Ky = fe.f, Jy = Wt, dh = ft, t0 = Dn, e0 = ot, r0 = Fn, i0 = Zy("".slice), n0 = Math.min, ph = r0("endsWith"), a0 = !ph && !!function() {
        var t = Ky(String.prototype, "endsWith");
        return t && !t.writable;
    }();
    $y({
        target: "String",
        proto: !0,
        forced: !a0 && !ph
    }, {
        endsWith: function(t) {
            var e = dh(e0(this));
            t0(t);
            var r = arguments.length > 1 ? arguments[1] : void 0, i = e.length, n = r === void 0 ? i : n0(Jy(r), i), s = dh(t);
            return i0(e, n - s.length, n) === s;
        }
    });
    var Zn = X, mh = F, s0 = Cn, o0 = $, u0 = Nt, h0 = ot, l0 = vo, c0 = Pn, g0 = Wt, yh = ft, f0 = Xt, vh = Mn, d0 = D, ae = wu.UNSUPPORTED_Y, p0 = Math.min, Kn = mh([].push), Jn = mh("".slice), m0 = !d0(function() {
        var t = /(?:)/, e = t.exec;
        t.exec = function() {
            return e.apply(this, arguments);
        };
        var r = "ab".split(t);
        return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
    }), xh = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
    s0("split", function(t, e, r) {
        var i = "0".split(void 0, 0).length ? function(n, s) {
            return n === void 0 && s === 0 ? [] : Zn(e, this, n, s);
        } : e;
        return [ function(n, s) {
            var a = h0(this), o = u0(n) ? void 0 : f0(n, t);
            return o ? Zn(o, n, a, s) : Zn(i, yh(a), n, s);
        }, function(n, s) {
            var a = o0(this), o = yh(n);
            if (!xh) {
                var u = r(i, a, o, s, i !== e);
                if (u.done) return u.value;
            }
            var h = l0(a, RegExp), l = a.unicode, g = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (ae ? "g" : "y"), c = new h(ae ? "^(?:" + a.source + ")" : a, g), f = s === void 0 ? 4294967295 : s >>> 0;
            if (f === 0) return [];
            if (o.length === 0) return vh(c, o) === null ? [ o ] : [];
            for (var d = 0, p = 0, y = []; p < o.length; ) {
                c.lastIndex = ae ? 0 : p;
                var x, v = vh(c, ae ? Jn(o, p) : o);
                if (v === null || (x = p0(g0(c.lastIndex + (ae ? p : 0)), o.length)) === d) p = c0(o, p, l); else {
                    if (Kn(y, Jn(o, d, p)), y.length === f) return y;
                    for (var b = 1; b <= v.length - 1; b++) if (Kn(y, v[b]), y.length === f) return y;
                    p = d = x;
                }
            }
            return Kn(y, Jn(o, d)), y;
        } ];
    }, xh || !m0, ae);
    var Cr = {
        exports: {}
    }, Ne = {
        exports: {}
    };
    (function() {
        var t, e, r, i, n, s;
        typeof performance < "u" && performance !== null && performance.now ? Ne.exports = function() {
            return performance.now();
        } : typeof process < "u" && process !== null && process.hrtime ? (Ne.exports = function() {
            return (t() - n) / 1e6;
        }, e = process.hrtime, i = (t = function() {
            var a;
            return 1e9 * (a = e())[0] + a[1];
        })(), s = 1e9 * process.uptime(), n = i - s) : Date.now ? (Ne.exports = function() {
            return Date.now() - r;
        }, r = Date.now()) : (Ne.exports = function() {
            return new Date().getTime() - r;
        }, r = new Date().getTime());
    }).call(le);
    for (var y0 = Ne.exports, yt = typeof window > "u" ? le : window, Er = [ "moz", "webkit" ], se = "AnimationFrame", oe = yt["request" + se], _e = yt["cancel" + se] || yt["cancelRequest" + se], Re = 0; !oe && Re < Er.length; Re++) oe = yt[Er[Re] + "Request" + se], 
    _e = yt[Er[Re] + "Cancel" + se] || yt[Er[Re] + "CancelRequest" + se];
    if (!oe || !_e) {
        var ta = 0, bh = 0, kt = [], v0 = 1e3 / 60;
        oe = function(t) {
            if (kt.length === 0) {
                var e = y0(), r = Math.max(0, v0 - (e - ta));
                ta = r + e, setTimeout(function() {
                    var i = kt.slice(0);
                    kt.length = 0;
                    for (var n = 0; n < i.length; n++) if (!i[n].cancelled) try {
                        i[n].callback(ta);
                    } catch (s) {
                        setTimeout(function() {
                            throw s;
                        }, 0);
                    }
                }, Math.round(r));
            }
            return kt.push({
                handle: ++bh,
                callback: t,
                cancelled: !1
            }), bh;
        }, _e = function(t) {
            for (var e = 0; e < kt.length; e++) kt[e].handle === t && (kt[e].cancelled = !0);
        };
    }
    Cr.exports = function(t) {
        return oe.call(yt, t);
    }, Cr.exports.cancel = function() {
        _e.apply(yt, arguments);
    }, Cr.exports.polyfill = function(t) {
        t || (t = yt), t.requestAnimationFrame = oe, t.cancelAnimationFrame = _e;
    };
    const ea = il(Cr.exports);
    var Sh = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`, x0 = ot, b0 = ft, ra = Sh, wh = F("".replace), S0 = RegExp("^[" + ra + "]+"), w0 = RegExp("(^|[^" + ra + "])[" + ra + "]+$"), ia = function(t) {
        return function(e) {
            var r = b0(x0(e));
            return 1 & t && (r = wh(r, S0, "")), 2 & t && (r = wh(r, w0, "$1")), 
            r;
        };
    }, T0 = {
        start: ia(1),
        end: ia(2),
        trim: ia(3)
    }, O0 = me.PROPER, A0 = D, Th = Sh, C0 = T0.trim;
    Z({
        target: "String",
        proto: !0,
        forced: function(t) {
            return A0(function() {
                return !!Th[t]() || "​᠎"[t]() !== "​᠎" || O0 && Th[t].name !== t;
            });
        }("trim")
    }, {
        trim: function() {
            return C0(this);
        }
    });
    var E0 = function(t) {
        this.ok = !1, this.alpha = 1, t.charAt(0) == "#" && (t = t.substr(1, 6)), 
        t = (t = t.replace(/ /g, "")).toLowerCase();
        var e = {
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
            rebeccapurple: "663399",
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
        };
        t = e[t] || t;
        for (var r = [ {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: [ "rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)" ],
            process: function(u) {
                return [ parseInt(u[1]), parseInt(u[2]), parseInt(u[3]), parseFloat(u[4]) ];
            }
        }, {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
            process: function(u) {
                return [ parseInt(u[1]), parseInt(u[2]), parseInt(u[3]) ];
            }
        }, {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: [ "#00ff00", "336699" ],
            process: function(u) {
                return [ parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16) ];
            }
        }, {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: [ "#fb0", "f0f" ],
            process: function(u) {
                return [ parseInt(u[1] + u[1], 16), parseInt(u[2] + u[2], 16), parseInt(u[3] + u[3], 16) ];
            }
        } ], i = 0; i < r.length; i++) {
            var n = r[i].re, s = r[i].process, a = n.exec(t);
            if (a) {
                var o = s(a);
                this.r = o[0], this.g = o[1], this.b = o[2], o.length > 3 && (this.alpha = o[3]), 
                this.ok = !0;
            }
        }
        this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, 
        this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, 
        this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, 
        this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, 
        this.toRGB = function() {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }, this.toRGBA = function() {
            return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
        }, this.toHex = function() {
            var u = this.r.toString(16), h = this.g.toString(16), l = this.b.toString(16);
            return u.length == 1 && (u = "0" + u), h.length == 1 && (h = "0" + h), 
            l.length == 1 && (l = "0" + l), "#" + u + h + l;
        }, this.getHelpXML = function() {
            for (var u = new Array(), h = 0; h < r.length; h++) for (var l = r[h].example, g = 0; g < l.length; g++) u[u.length] = l[g];
            for (var c in e) u[u.length] = c;
            var f = document.createElement("ul");
            for (f.setAttribute("id", "rgbcolor-examples"), h = 0; h < u.length; h++) try {
                var d = document.createElement("li"), p = new RGBColor(u[h]), y = document.createElement("div");
                y.style.cssText = "margin: 3px; border: 1px solid black; background:" + p.toHex() + "; color:" + p.toHex(), 
                y.appendChild(document.createTextNode("test"));
                var x = document.createTextNode(" " + u[h] + " -> " + p.toRGB() + " -> " + p.toHex());
                d.appendChild(y), d.appendChild(x), f.appendChild(d);
            } catch {}
            return f;
        };
    };
    const na = il(E0);
    var P0 = Z, M0 = to.indexOf, N0 = fh, aa = Te([].indexOf), Oh = !!aa && 1 / aa([ 1 ], 1, -0) < 0;
    P0({
        target: "Array",
        proto: !0,
        forced: Oh || !N0("indexOf")
    }, {
        indexOf: function(t) {
            var e = arguments.length > 1 ? arguments[1] : void 0;
            return Oh ? aa(this, t, e) || 0 : M0(this, t, e);
        }
    });
    var _0 = Z, R0 = Dn, V0 = ot, Ah = ft, I0 = Fn, k0 = F("".indexOf);
    _0({
        target: "String",
        proto: !0,
        forced: !I0("includes")
    }, {
        includes: function(t) {
            return !!~k0(Ah(V0(this)), Ah(R0(t)), arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var L0 = Mt, D0 = Z, F0 = Array.isArray || function(t) {
        return L0(t) === "Array";
    }, j0 = F([].reverse), Ch = [ 1, 2 ];
    D0({
        target: "Array",
        proto: !0,
        forced: String(Ch) === String(Ch.reverse())
    }, {
        reverse: function() {
            return F0(this) && (this.length = this.length), j0(this);
        }
    });
    var Eh = function(t, e) {
        return (Eh = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(r, i) {
            r.__proto__ = i;
        } || function(r, i) {
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
        })(t, e);
    };
    function Ph(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function r() {
            this.constructor = t;
        }
        Eh(t, e), t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, 
        new r());
    }
    function sa(t, e) {
        var r = t[0], i = t[1];
        return [ r * Math.cos(e) - i * Math.sin(e), r * Math.sin(e) + i * Math.cos(e) ];
    }
    function lt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var r = 0; r < t.length; r++) if (typeof t[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof t[r] + " == typeof " + t[r]);
        return !0;
    }
    var At = Math.PI;
    function oa(t, e, r) {
        t.lArcFlag = t.lArcFlag === 0 ? 0 : 1, t.sweepFlag = t.sweepFlag === 0 ? 0 : 1;
        var i = t.rX, n = t.rY, s = t.x, a = t.y;
        i = Math.abs(t.rX), n = Math.abs(t.rY);
        var o = sa([ (e - s) / 2, (r - a) / 2 ], -t.xRot / 180 * At), u = o[0], h = o[1], l = Math.pow(u, 2) / Math.pow(i, 2) + Math.pow(h, 2) / Math.pow(n, 2);
        1 < l && (i *= Math.sqrt(l), n *= Math.sqrt(l)), t.rX = i, t.rY = n;
        var g = Math.pow(i, 2) * Math.pow(h, 2) + Math.pow(n, 2) * Math.pow(u, 2), c = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(i, 2) * Math.pow(n, 2) - g) / g)), f = i * h / n * c, d = -n * u / i * c, p = sa([ f, d ], t.xRot / 180 * At);
        t.cX = p[0] + (e + s) / 2, t.cY = p[1] + (r + a) / 2, t.phi1 = Math.atan2((h - d) / n, (u - f) / i), 
        t.phi2 = Math.atan2((-h - d) / n, (-u - f) / i), t.sweepFlag === 0 && t.phi2 > t.phi1 && (t.phi2 -= 2 * At), 
        t.sweepFlag === 1 && t.phi2 < t.phi1 && (t.phi2 += 2 * At), t.phi1 *= 180 / At, 
        t.phi2 *= 180 / At;
    }
    function Mh(t, e, r) {
        lt(t, e, r);
        var i = t * t + e * e - r * r;
        if (0 > i) return [];
        if (i === 0) return [ [ t * r / (t * t + e * e), e * r / (t * t + e * e) ] ];
        var n = Math.sqrt(i);
        return [ [ (t * r + e * n) / (t * t + e * e), (e * r - t * n) / (t * t + e * e) ], [ (t * r - e * n) / (t * t + e * e), (e * r + t * n) / (t * t + e * e) ] ];
    }
    var B, vt = Math.PI / 180;
    function Nh(t, e, r) {
        return (1 - r) * t + r * e;
    }
    function _h(t, e, r, i) {
        return t + Math.cos(i / 180 * At) * e + Math.sin(i / 180 * At) * r;
    }
    function Rh(t, e, r, i) {
        var n = 1e-6, s = e - t, a = r - e, o = 3 * s + 3 * (i - r) - 6 * a, u = 6 * (a - s), h = 3 * s;
        return Math.abs(o) < n ? [ -h / u ] : function(l, g, c) {
            c === void 0 && (c = 1e-6);
            var f = l * l / 4 - g;
            if (f < -c) return [];
            if (f <= c) return [ -l / 2 ];
            var d = Math.sqrt(f);
            return [ -l / 2 - d, -l / 2 + d ];
        }(u / o, h / o, n);
    }
    function Vh(t, e, r, i, n) {
        var s = 1 - n;
        return t * (s * s * s) + e * (3 * s * s * n) + r * (3 * s * n * n) + i * (n * n * n);
    }
    (function(t) {
        function e() {
            return n(function(a, o, u) {
                return a.relative && (a.x1 !== void 0 && (a.x1 += o), a.y1 !== void 0 && (a.y1 += u), 
                a.x2 !== void 0 && (a.x2 += o), a.y2 !== void 0 && (a.y2 += u), 
                a.x !== void 0 && (a.x += o), a.y !== void 0 && (a.y += u), a.relative = !1), 
                a;
            });
        }
        function r() {
            var a = NaN, o = NaN, u = NaN, h = NaN;
            return n(function(l, g, c) {
                return l.type & m.SMOOTH_CURVE_TO && (l.type = m.CURVE_TO, a = isNaN(a) ? g : a, 
                o = isNaN(o) ? c : o, l.x1 = l.relative ? g - a : 2 * g - a, l.y1 = l.relative ? c - o : 2 * c - o), 
                l.type & m.CURVE_TO ? (a = l.relative ? g + l.x2 : l.x2, o = l.relative ? c + l.y2 : l.y2) : (a = NaN, 
                o = NaN), l.type & m.SMOOTH_QUAD_TO && (l.type = m.QUAD_TO, u = isNaN(u) ? g : u, 
                h = isNaN(h) ? c : h, l.x1 = l.relative ? g - u : 2 * g - u, l.y1 = l.relative ? c - h : 2 * c - h), 
                l.type & m.QUAD_TO ? (u = l.relative ? g + l.x1 : l.x1, h = l.relative ? c + l.y1 : l.y1) : (u = NaN, 
                h = NaN), l;
            });
        }
        function i() {
            var a = NaN, o = NaN;
            return n(function(u, h, l) {
                if (u.type & m.SMOOTH_QUAD_TO && (u.type = m.QUAD_TO, a = isNaN(a) ? h : a, 
                o = isNaN(o) ? l : o, u.x1 = u.relative ? h - a : 2 * h - a, u.y1 = u.relative ? l - o : 2 * l - o), 
                u.type & m.QUAD_TO) {
                    a = u.relative ? h + u.x1 : u.x1, o = u.relative ? l + u.y1 : u.y1;
                    var g = u.x1, c = u.y1;
                    u.type = m.CURVE_TO, u.x1 = ((u.relative ? 0 : h) + 2 * g) / 3, 
                    u.y1 = ((u.relative ? 0 : l) + 2 * c) / 3, u.x2 = (u.x + 2 * g) / 3, 
                    u.y2 = (u.y + 2 * c) / 3;
                } else a = NaN, o = NaN;
                return u;
            });
        }
        function n(a) {
            var o = 0, u = 0, h = NaN, l = NaN;
            return function(g) {
                if (isNaN(h) && !(g.type & m.MOVE_TO)) throw new Error("path must start with moveto");
                var c = a(g, o, u, h, l);
                return g.type & m.CLOSE_PATH && (o = h, u = l), g.x !== void 0 && (o = g.relative ? o + g.x : g.x), 
                g.y !== void 0 && (u = g.relative ? u + g.y : g.y), g.type & m.MOVE_TO && (h = o, 
                l = u), c;
            };
        }
        function s(a, o, u, h, l, g) {
            return lt(a, o, u, h, l, g), n(function(c, f, d, p) {
                var y = c.x1, x = c.x2, v = c.relative && !isNaN(p), b = c.x !== void 0 ? c.x : v ? 0 : f, A = c.y !== void 0 ? c.y : v ? 0 : d;
                function S(at) {
                    return at * at;
                }
                c.type & m.HORIZ_LINE_TO && o !== 0 && (c.type = m.LINE_TO, c.y = c.relative ? 0 : d), 
                c.type & m.VERT_LINE_TO && u !== 0 && (c.type = m.LINE_TO, c.x = c.relative ? 0 : f), 
                c.x !== void 0 && (c.x = c.x * a + A * u + (v ? 0 : l)), c.y !== void 0 && (c.y = b * o + c.y * h + (v ? 0 : g)), 
                c.x1 !== void 0 && (c.x1 = c.x1 * a + c.y1 * u + (v ? 0 : l)), c.y1 !== void 0 && (c.y1 = y * o + c.y1 * h + (v ? 0 : g)), 
                c.x2 !== void 0 && (c.x2 = c.x2 * a + c.y2 * u + (v ? 0 : l)), c.y2 !== void 0 && (c.y2 = x * o + c.y2 * h + (v ? 0 : g));
                var w = a * h - o * u;
                if (c.xRot !== void 0 && (a !== 1 || o !== 0 || u !== 0 || h !== 1)) if (w === 0) delete c.rX, 
                delete c.rY, delete c.xRot, delete c.lArcFlag, delete c.sweepFlag, 
                c.type = m.LINE_TO; else {
                    var O = c.xRot * Math.PI / 180, P = Math.sin(O), I = Math.cos(O), C = 1 / S(c.rX), N = 1 / S(c.rY), U = S(I) * C + S(P) * N, K = 2 * P * I * (C - N), W = S(P) * C + S(I) * N, Y = U * h * h - K * o * h + W * o * o, G = K * (a * h + o * u) - 2 * (U * u * h + W * a * o), R = U * u * u - K * a * u + W * a * a, _ = (Math.atan2(G, Y - R) + Math.PI) % Math.PI / 2, J = Math.sin(_), q = Math.cos(_);
                    c.rX = Math.abs(w) / Math.sqrt(Y * S(q) + G * J * q + R * S(J)), 
                    c.rY = Math.abs(w) / Math.sqrt(Y * S(J) - G * J * q + R * S(q)), 
                    c.xRot = 180 * _ / Math.PI;
                }
                return c.sweepFlag !== void 0 && 0 > w && (c.sweepFlag = +!c.sweepFlag), 
                c;
            });
        }
        t.ROUND = function(a) {
            function o(u) {
                return Math.round(u * a) / a;
            }
            return a === void 0 && (a = 1e13), lt(a), function(u) {
                return u.x1 !== void 0 && (u.x1 = o(u.x1)), u.y1 !== void 0 && (u.y1 = o(u.y1)), 
                u.x2 !== void 0 && (u.x2 = o(u.x2)), u.y2 !== void 0 && (u.y2 = o(u.y2)), 
                u.x !== void 0 && (u.x = o(u.x)), u.y !== void 0 && (u.y = o(u.y)), 
                u.rX !== void 0 && (u.rX = o(u.rX)), u.rY !== void 0 && (u.rY = o(u.rY)), 
                u;
            };
        }, t.TO_ABS = e, t.TO_REL = function() {
            return n(function(a, o, u) {
                return a.relative || (a.x1 !== void 0 && (a.x1 -= o), a.y1 !== void 0 && (a.y1 -= u), 
                a.x2 !== void 0 && (a.x2 -= o), a.y2 !== void 0 && (a.y2 -= u), 
                a.x !== void 0 && (a.x -= o), a.y !== void 0 && (a.y -= u), a.relative = !0), 
                a;
            });
        }, t.NORMALIZE_HVZ = function(a, o, u) {
            return a === void 0 && (a = !0), o === void 0 && (o = !0), u === void 0 && (u = !0), 
            n(function(h, l, g, c, f) {
                if (isNaN(c) && !(h.type & m.MOVE_TO)) throw new Error("path must start with moveto");
                return o && h.type & m.HORIZ_LINE_TO && (h.type = m.LINE_TO, h.y = h.relative ? 0 : g), 
                u && h.type & m.VERT_LINE_TO && (h.type = m.LINE_TO, h.x = h.relative ? 0 : l), 
                a && h.type & m.CLOSE_PATH && (h.type = m.LINE_TO, h.x = h.relative ? c - l : c, 
                h.y = h.relative ? f - g : f), h.type & m.ARC && (h.rX === 0 || h.rY === 0) && (h.type = m.LINE_TO, 
                delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag), 
                h;
            });
        }, t.NORMALIZE_ST = r, t.QT_TO_C = i, t.INFO = n, t.SANITIZE = function(a) {
            a === void 0 && (a = 0), lt(a);
            var o = NaN, u = NaN, h = NaN, l = NaN;
            return n(function(g, c, f, d, p) {
                var y = Math.abs, x = !1, v = 0, b = 0;
                if (g.type & m.SMOOTH_CURVE_TO && (v = isNaN(o) ? 0 : c - o, b = isNaN(u) ? 0 : f - u), 
                g.type & (m.CURVE_TO | m.SMOOTH_CURVE_TO) ? (o = g.relative ? c + g.x2 : g.x2, 
                u = g.relative ? f + g.y2 : g.y2) : (o = NaN, u = NaN), g.type & m.SMOOTH_QUAD_TO ? (h = isNaN(h) ? c : 2 * c - h, 
                l = isNaN(l) ? f : 2 * f - l) : g.type & m.QUAD_TO ? (h = g.relative ? c + g.x1 : g.x1, 
                l = g.relative ? f + g.y1 : g.y2) : (h = NaN, l = NaN), g.type & m.LINE_COMMANDS || g.type & m.ARC && (g.rX === 0 || g.rY === 0 || !g.lArcFlag) || g.type & m.CURVE_TO || g.type & m.SMOOTH_CURVE_TO || g.type & m.QUAD_TO || g.type & m.SMOOTH_QUAD_TO) {
                    var A = g.x === void 0 ? 0 : g.relative ? g.x : g.x - c, S = g.y === void 0 ? 0 : g.relative ? g.y : g.y - f;
                    v = isNaN(h) ? g.x1 === void 0 ? v : g.relative ? g.x : g.x1 - c : h - c, 
                    b = isNaN(l) ? g.y1 === void 0 ? b : g.relative ? g.y : g.y1 - f : l - f;
                    var w = g.x2 === void 0 ? 0 : g.relative ? g.x : g.x2 - c, O = g.y2 === void 0 ? 0 : g.relative ? g.y : g.y2 - f;
                    y(A) <= a && y(S) <= a && y(v) <= a && y(b) <= a && y(w) <= a && y(O) <= a && (x = !0);
                }
                return g.type & m.CLOSE_PATH && y(c - d) <= a && y(f - p) <= a && (x = !0), 
                x ? [] : g;
            });
        }, t.MATRIX = s, t.ROTATE = function(a, o, u) {
            o === void 0 && (o = 0), u === void 0 && (u = 0), lt(a, o, u);
            var h = Math.sin(a), l = Math.cos(a);
            return s(l, h, -h, l, o - o * l + u * h, u - o * h - u * l);
        }, t.TRANSLATE = function(a, o) {
            return o === void 0 && (o = 0), lt(a, o), s(1, 0, 0, 1, a, o);
        }, t.SCALE = function(a, o) {
            return o === void 0 && (o = a), lt(a, o), s(a, 0, 0, o, 0, 0);
        }, t.SKEW_X = function(a) {
            return lt(a), s(1, 0, Math.atan(a), 1, 0, 0);
        }, t.SKEW_Y = function(a) {
            return lt(a), s(1, Math.atan(a), 0, 1, 0, 0);
        }, t.X_AXIS_SYMMETRY = function(a) {
            return a === void 0 && (a = 0), lt(a), s(-1, 0, 0, 1, a, 0);
        }, t.Y_AXIS_SYMMETRY = function(a) {
            return a === void 0 && (a = 0), lt(a), s(1, 0, 0, -1, 0, a);
        }, t.A_TO_C = function() {
            return n(function(a, o, u) {
                return m.ARC === a.type ? function(h, l, g) {
                    var c, f, d, p;
                    h.cX || oa(h, l, g);
                    for (var y = Math.min(h.phi1, h.phi2), x = Math.max(h.phi1, h.phi2) - y, v = Math.ceil(x / 90), b = new Array(v), A = l, S = g, w = 0; w < v; w++) {
                        var O = Nh(h.phi1, h.phi2, w / v), P = Nh(h.phi1, h.phi2, (w + 1) / v), I = P - O, C = 4 / 3 * Math.tan(I * vt / 4), N = [ Math.cos(O * vt) - C * Math.sin(O * vt), Math.sin(O * vt) + C * Math.cos(O * vt) ], U = N[0], K = N[1], W = [ Math.cos(P * vt), Math.sin(P * vt) ], Y = W[0], G = W[1], R = [ Y + C * Math.sin(P * vt), G - C * Math.cos(P * vt) ], _ = R[0], J = R[1];
                        b[w] = {
                            relative: h.relative,
                            type: m.CURVE_TO
                        };
                        var q = function(at, Ve) {
                            var ue = sa([ at * h.rX, Ve * h.rY ], h.xRot), Ie = ue[0], ke = ue[1];
                            return [ h.cX + Ie, h.cY + ke ];
                        };
                        c = q(U, K), b[w].x1 = c[0], b[w].y1 = c[1], f = q(_, J), 
                        b[w].x2 = f[0], b[w].y2 = f[1], d = q(Y, G), b[w].x = d[0], 
                        b[w].y = d[1], h.relative && (b[w].x1 -= A, b[w].y1 -= S, 
                        b[w].x2 -= A, b[w].y2 -= S, b[w].x -= A, b[w].y -= S), A = (p = [ b[w].x, b[w].y ])[0], 
                        S = p[1];
                    }
                    return b;
                }(a, a.relative ? 0 : o, a.relative ? 0 : u) : a;
            });
        }, t.ANNOTATE_ARCS = function() {
            return n(function(a, o, u) {
                return a.relative && (o = 0, u = 0), m.ARC === a.type && oa(a, o, u), 
                a;
            });
        }, t.CLONE = function() {
            return function(a) {
                var o = {};
                for (var u in a) o[u] = a[u];
                return o;
            };
        }, t.CALCULATE_BOUNDS = function() {
            var a = e(), o = i(), u = r(), h = n(function(l, g, c) {
                var f = u(o(a(function(_) {
                    var J = {};
                    for (var q in _) J[q] = _[q];
                    return J;
                }(l))));
                function d(_) {
                    _ > h.maxX && (h.maxX = _), _ < h.minX && (h.minX = _);
                }
                function p(_) {
                    _ > h.maxY && (h.maxY = _), _ < h.minY && (h.minY = _);
                }
                if (f.type & m.DRAWING_COMMANDS && (d(g), p(c)), f.type & m.HORIZ_LINE_TO && d(f.x), 
                f.type & m.VERT_LINE_TO && p(f.y), f.type & m.LINE_TO && (d(f.x), 
                p(f.y)), f.type & m.CURVE_TO) {
                    d(f.x), p(f.y);
                    for (var y = 0, x = Rh(g, f.x1, f.x2, f.x); y < x.length; y++) 0 < (R = x[y]) && 1 > R && d(Vh(g, f.x1, f.x2, f.x, R));
                    for (var v = 0, b = Rh(c, f.y1, f.y2, f.y); v < b.length; v++) 0 < (R = b[v]) && 1 > R && p(Vh(c, f.y1, f.y2, f.y, R));
                }
                if (f.type & m.ARC) {
                    d(f.x), p(f.y), oa(f, g, c);
                    for (var A = f.xRot / 180 * Math.PI, S = Math.cos(A) * f.rX, w = Math.sin(A) * f.rX, O = -Math.sin(A) * f.rY, P = Math.cos(A) * f.rY, I = f.phi1 < f.phi2 ? [ f.phi1, f.phi2 ] : -180 > f.phi2 ? [ f.phi2 + 360, f.phi1 + 360 ] : [ f.phi2, f.phi1 ], C = I[0], N = I[1], U = function(_) {
                        var J = _[0], q = _[1], at = 180 * Math.atan2(q, J) / Math.PI;
                        return at < C ? at + 360 : at;
                    }, K = 0, W = Mh(O, -S, 0).map(U); K < W.length; K++) (R = W[K]) > C && R < N && d(_h(f.cX, S, O, R));
                    for (var Y = 0, G = Mh(P, -w, 0).map(U); Y < G.length; Y++) {
                        var R;
                        (R = G[Y]) > C && R < N && p(_h(f.cY, w, P, R));
                    }
                }
                return l;
            });
            return h.minX = 1 / 0, h.maxX = -1 / 0, h.minY = 1 / 0, h.maxY = -1 / 0, 
            h;
        };
    })(B || (B = {}));
    var ct, Ih = function() {
        function t() {}
        return t.prototype.round = function(e) {
            return this.transform(B.ROUND(e));
        }, t.prototype.toAbs = function() {
            return this.transform(B.TO_ABS());
        }, t.prototype.toRel = function() {
            return this.transform(B.TO_REL());
        }, t.prototype.normalizeHVZ = function(e, r, i) {
            return this.transform(B.NORMALIZE_HVZ(e, r, i));
        }, t.prototype.normalizeST = function() {
            return this.transform(B.NORMALIZE_ST());
        }, t.prototype.qtToC = function() {
            return this.transform(B.QT_TO_C());
        }, t.prototype.aToC = function() {
            return this.transform(B.A_TO_C());
        }, t.prototype.sanitize = function(e) {
            return this.transform(B.SANITIZE(e));
        }, t.prototype.translate = function(e, r) {
            return this.transform(B.TRANSLATE(e, r));
        }, t.prototype.scale = function(e, r) {
            return this.transform(B.SCALE(e, r));
        }, t.prototype.rotate = function(e, r, i) {
            return this.transform(B.ROTATE(e, r, i));
        }, t.prototype.matrix = function(e, r, i, n, s, a) {
            return this.transform(B.MATRIX(e, r, i, n, s, a));
        }, t.prototype.skewX = function(e) {
            return this.transform(B.SKEW_X(e));
        }, t.prototype.skewY = function(e) {
            return this.transform(B.SKEW_Y(e));
        }, t.prototype.xSymmetry = function(e) {
            return this.transform(B.X_AXIS_SYMMETRY(e));
        }, t.prototype.ySymmetry = function(e) {
            return this.transform(B.Y_AXIS_SYMMETRY(e));
        }, t.prototype.annotateArcs = function() {
            return this.transform(B.ANNOTATE_ARCS());
        }, t;
    }(), B0 = function(t) {
        return t === " " || t === "\t" || t === "\r" || t === `
`;
    }, kh = function(t) {
        return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
    }, z0 = function(t) {
        function e() {
            var r = t.call(this) || this;
            return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, 
            r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, 
            r.curNumberHasDecimal = !1, r.curArgs = [], r;
        }
        return Ph(e, t), e.prototype.finish = function(r) {
            if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
            return r;
        }, e.prototype.parse = function(r, i) {
            var n = this;
            i === void 0 && (i = []);
            for (var s = function(g) {
                i.push(g), n.curArgs.length = 0, n.canParseCommandOrComma = !0;
            }, a = 0; a < r.length; a++) {
                var o = r[a], u = !(this.curCommandType !== m.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), h = kh(o) && (this.curNumber === "0" && o === "0" || u);
                if (!kh(o) || h) if (o !== "e" && o !== "E") if (o !== "-" && o !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (o !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
                    if (this.curNumber && this.curCommandType !== -1) {
                        var l = Number(this.curNumber);
                        if (isNaN(l)) throw new SyntaxError("Invalid number ending at " + a);
                        if (this.curCommandType === m.ARC) {
                            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
                                if (0 > l) throw new SyntaxError('Expected positive number, got "' + l + '" at index "' + a + '"');
                            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
                        }
                        this.curArgs.push(l), this.curArgs.length === U0[this.curCommandType] && (m.HORIZ_LINE_TO === this.curCommandType ? s({
                            type: m.HORIZ_LINE_TO,
                            relative: this.curCommandRelative,
                            x: l
                        }) : m.VERT_LINE_TO === this.curCommandType ? s({
                            type: m.VERT_LINE_TO,
                            relative: this.curCommandRelative,
                            y: l
                        }) : this.curCommandType === m.MOVE_TO || this.curCommandType === m.LINE_TO || this.curCommandType === m.SMOOTH_QUAD_TO ? (s({
                            type: this.curCommandType,
                            relative: this.curCommandRelative,
                            x: this.curArgs[0],
                            y: this.curArgs[1]
                        }), m.MOVE_TO === this.curCommandType && (this.curCommandType = m.LINE_TO)) : this.curCommandType === m.CURVE_TO ? s({
                            type: m.CURVE_TO,
                            relative: this.curCommandRelative,
                            x1: this.curArgs[0],
                            y1: this.curArgs[1],
                            x2: this.curArgs[2],
                            y2: this.curArgs[3],
                            x: this.curArgs[4],
                            y: this.curArgs[5]
                        }) : this.curCommandType === m.SMOOTH_CURVE_TO ? s({
                            type: m.SMOOTH_CURVE_TO,
                            relative: this.curCommandRelative,
                            x2: this.curArgs[0],
                            y2: this.curArgs[1],
                            x: this.curArgs[2],
                            y: this.curArgs[3]
                        }) : this.curCommandType === m.QUAD_TO ? s({
                            type: m.QUAD_TO,
                            relative: this.curCommandRelative,
                            x1: this.curArgs[0],
                            y1: this.curArgs[1],
                            x: this.curArgs[2],
                            y: this.curArgs[3]
                        }) : this.curCommandType === m.ARC && s({
                            type: m.ARC,
                            relative: this.curCommandRelative,
                            rX: this.curArgs[0],
                            rY: this.curArgs[1],
                            xRot: this.curArgs[2],
                            lArcFlag: this.curArgs[3],
                            sweepFlag: this.curArgs[4],
                            x: this.curArgs[5],
                            y: this.curArgs[6]
                        })), this.curNumber = "", this.curNumberHasExpDigits = !1, 
                        this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, 
                        this.canParseCommandOrComma = !0;
                    }
                    if (!B0(o)) if (o === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1; else if (o !== "+" && o !== "-" && o !== ".") if (h) this.curNumber = o, 
                    this.curNumberHasDecimal = !1; else {
                        if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + a + ".");
                        if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + o + '" at index ' + a + ". Command cannot follow comma");
                        if (this.canParseCommandOrComma = !1, o !== "z" && o !== "Z") if (o === "h" || o === "H") this.curCommandType = m.HORIZ_LINE_TO, 
                        this.curCommandRelative = o === "h"; else if (o === "v" || o === "V") this.curCommandType = m.VERT_LINE_TO, 
                        this.curCommandRelative = o === "v"; else if (o === "m" || o === "M") this.curCommandType = m.MOVE_TO, 
                        this.curCommandRelative = o === "m"; else if (o === "l" || o === "L") this.curCommandType = m.LINE_TO, 
                        this.curCommandRelative = o === "l"; else if (o === "c" || o === "C") this.curCommandType = m.CURVE_TO, 
                        this.curCommandRelative = o === "c"; else if (o === "s" || o === "S") this.curCommandType = m.SMOOTH_CURVE_TO, 
                        this.curCommandRelative = o === "s"; else if (o === "q" || o === "Q") this.curCommandType = m.QUAD_TO, 
                        this.curCommandRelative = o === "q"; else if (o === "t" || o === "T") this.curCommandType = m.SMOOTH_QUAD_TO, 
                        this.curCommandRelative = o === "t"; else {
                            if (o !== "a" && o !== "A") throw new SyntaxError('Unexpected character "' + o + '" at index ' + a + ".");
                            this.curCommandType = m.ARC, this.curCommandRelative = o === "a";
                        } else i.push({
                            type: m.CLOSE_PATH
                        }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                    } else this.curNumber = o, this.curNumberHasDecimal = o === ".";
                } else this.curNumber += o, this.curNumberHasDecimal = !0; else this.curNumber += o; else this.curNumber += o, 
                this.curNumberHasExp = !0; else this.curNumber += o, this.curNumberHasExpDigits = this.curNumberHasExp;
            }
            return i;
        }, e.prototype.transform = function(r) {
            return Object.create(this, {
                parse: {
                    value: function(i, n) {
                        n === void 0 && (n = []);
                        for (var s = 0, a = Object.getPrototypeOf(this).parse.call(this, i); s < a.length; s++) {
                            var o = a[s], u = r(o);
                            Array.isArray(u) ? n.push.apply(n, u) : n.push(u);
                        }
                        return n;
                    }
                }
            });
        }, e;
    }(Ih), m = function(t) {
        function e(r) {
            var i = t.call(this) || this;
            return i.commands = typeof r == "string" ? e.parse(r) : r, i;
        }
        return Ph(e, t), e.prototype.encode = function() {
            return e.encode(this.commands);
        }, e.prototype.getBounds = function() {
            var r = B.CALCULATE_BOUNDS();
            return this.transform(r), r;
        }, e.prototype.transform = function(r) {
            for (var i = [], n = 0, s = this.commands; n < s.length; n++) {
                var a = r(s[n]);
                Array.isArray(a) ? i.push.apply(i, a) : i.push(a);
            }
            return this.commands = i, this;
        }, e.encode = function(r) {
            return function(i) {
                var n = "";
                Array.isArray(i) || (i = [ i ]);
                for (var s = 0; s < i.length; s++) {
                    var a = i[s];
                    if (a.type === m.CLOSE_PATH) n += "z"; else if (a.type === m.HORIZ_LINE_TO) n += (a.relative ? "h" : "H") + a.x; else if (a.type === m.VERT_LINE_TO) n += (a.relative ? "v" : "V") + a.y; else if (a.type === m.MOVE_TO) n += (a.relative ? "m" : "M") + a.x + " " + a.y; else if (a.type === m.LINE_TO) n += (a.relative ? "l" : "L") + a.x + " " + a.y; else if (a.type === m.CURVE_TO) n += (a.relative ? "c" : "C") + a.x1 + " " + a.y1 + " " + a.x2 + " " + a.y2 + " " + a.x + " " + a.y; else if (a.type === m.SMOOTH_CURVE_TO) n += (a.relative ? "s" : "S") + a.x2 + " " + a.y2 + " " + a.x + " " + a.y; else if (a.type === m.QUAD_TO) n += (a.relative ? "q" : "Q") + a.x1 + " " + a.y1 + " " + a.x + " " + a.y; else if (a.type === m.SMOOTH_QUAD_TO) n += (a.relative ? "t" : "T") + a.x + " " + a.y; else {
                        if (a.type !== m.ARC) throw new Error('Unexpected command type "' + a.type + '" at index ' + s + ".");
                        n += (a.relative ? "a" : "A") + a.rX + " " + a.rY + " " + a.xRot + " " + +a.lArcFlag + " " + +a.sweepFlag + " " + a.x + " " + a.y;
                    }
                }
                return n;
            }(r);
        }, e.parse = function(r) {
            var i = new z0(), n = [];
            return i.parse(r, n), i.finish(n), n;
        }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, 
        e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, 
        e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, 
        e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, 
        e;
    }(Ih), U0 = ((ct = {})[m.MOVE_TO] = 2, ct[m.LINE_TO] = 2, ct[m.HORIZ_LINE_TO] = 1, 
    ct[m.VERT_LINE_TO] = 1, ct[m.CLOSE_PATH] = 0, ct[m.QUAD_TO] = 4, ct[m.SMOOTH_QUAD_TO] = 2, 
    ct[m.CURVE_TO] = 6, ct[m.SMOOTH_CURVE_TO] = 4, ct[m.ARC] = 7, ct), H0 = X, X0 = ht, Y0 = We, q0 = Su, Lh = RegExp.prototype, W0 = me.PROPER, G0 = Rt, Q0 = $, Dh = ft, $0 = D, Z0 = function(t) {
        var e = t.flags;
        return e !== void 0 || "flags" in Lh || X0(t, "flags") || !Y0(Lh, t) ? e : H0(q0, t);
    }, ua = "toString", Fh = RegExp.prototype, jh = Fh[ua], K0 = $0(function() {
        return jh.call({
            source: "a",
            flags: "b"
        }) !== "/a/b";
    }), J0 = W0 && jh.name !== ua;
    function ha(t) {
        return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, ha(t);
    }
    (K0 || J0) && G0(Fh, ua, function() {
        var t = Q0(this);
        return "/" + Dh(t.source) + "/" + Dh(Z0(t));
    }, {
        unsafe: !0
    });
    var tv = [ 512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259 ], ev = [ 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];
    function rv(t, e, r, i, n, s) {
        if (!(isNaN(s) || s < 1)) {
            s |= 0;
            var a = function(o, u, h, l, g) {
                if (typeof o == "string" && (o = document.getElementById(o)), !o || ha(o) !== "object" || !("getContext" in o)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
                var c = o.getContext("2d");
                try {
                    return c.getImageData(u, h, l, g);
                } catch (f) {
                    throw new Error("unable to access image data: " + f);
                }
            }(t, e, r, i, n);
            a = function(o, u, h, l, g, c) {
                for (var f, d = o.data, p = 2 * c + 1, y = l - 1, x = g - 1, v = c + 1, b = v * (v + 1) / 2, A = new Bh(), S = A, w = 1; w < p; w++) S = S.next = new Bh(), 
                w === v && (f = S);
                S.next = A;
                for (var O = null, P = null, I = 0, C = 0, N = tv[c], U = ev[c], K = 0; K < g; K++) {
                    S = A;
                    for (var W = d[C], Y = d[C + 1], G = d[C + 2], R = d[C + 3], _ = 0; _ < v; _++) S.r = W, 
                    S.g = Y, S.b = G, S.a = R, S = S.next;
                    for (var J = 0, q = 0, at = 0, Ve = 0, ue = v * W, Ie = v * Y, ke = v * G, ca = v * R, _r = b * W, Rr = b * Y, Vr = b * G, Ir = b * R, Le = 1; Le < v; Le++) {
                        var kr = C + ((y < Le ? y : Le) << 2), Wh = d[kr], Gh = d[kr + 1], Qh = d[kr + 2], $h = d[kr + 3], Lr = v - Le;
                        _r += (S.r = Wh) * Lr, Rr += (S.g = Gh) * Lr, Vr += (S.b = Qh) * Lr, 
                        Ir += (S.a = $h) * Lr, J += Wh, q += Gh, at += Qh, Ve += $h, 
                        S = S.next;
                    }
                    O = A, P = f;
                    for (var ga = 0; ga < l; ga++) {
                        var fa = Ir * N >>> U;
                        if (d[C + 3] = fa, fa !== 0) {
                            var da = 255 / fa;
                            d[C] = (_r * N >>> U) * da, d[C + 1] = (Rr * N >>> U) * da, 
                            d[C + 2] = (Vr * N >>> U) * da;
                        } else d[C] = d[C + 1] = d[C + 2] = 0;
                        _r -= ue, Rr -= Ie, Vr -= ke, Ir -= ca, ue -= O.r, Ie -= O.g, 
                        ke -= O.b, ca -= O.a;
                        var Ft = ga + c + 1;
                        Ft = I + (Ft < y ? Ft : y) << 2, _r += J += O.r = d[Ft], 
                        Rr += q += O.g = d[Ft + 1], Vr += at += O.b = d[Ft + 2], 
                        Ir += Ve += O.a = d[Ft + 3], O = O.next;
                        var Dr = P, Zh = Dr.r, Kh = Dr.g, Jh = Dr.b, tl = Dr.a;
                        ue += Zh, Ie += Kh, ke += Jh, ca += tl, J -= Zh, q -= Kh, 
                        at -= Jh, Ve -= tl, P = P.next, C += 4;
                    }
                    I += l;
                }
                for (var he = 0; he < l; he++) {
                    var jt = d[C = he << 2], Bt = d[C + 1], zt = d[C + 2], et = d[C + 3], pa = v * jt, ma = v * Bt, ya = v * zt, va = v * et, Fr = b * jt, jr = b * Bt, Br = b * zt, zr = b * et;
                    S = A;
                    for (var el = 0; el < v; el++) S.r = jt, S.g = Bt, S.b = zt, 
                    S.a = et, S = S.next;
                    for (var rl = l, xa = 0, ba = 0, Sa = 0, wa = 0, Ur = 1; Ur <= c; Ur++) {
                        C = rl + he << 2;
                        var Hr = v - Ur;
                        Fr += (S.r = jt = d[C]) * Hr, jr += (S.g = Bt = d[C + 1]) * Hr, 
                        Br += (S.b = zt = d[C + 2]) * Hr, zr += (S.a = et = d[C + 3]) * Hr, 
                        wa += jt, xa += Bt, ba += zt, Sa += et, S = S.next, Ur < x && (rl += l);
                    }
                    C = he, O = A, P = f;
                    for (var Ta = 0; Ta < g; Ta++) {
                        var rt = C << 2;
                        d[rt + 3] = et = zr * N >>> U, et > 0 ? (et = 255 / et, 
                        d[rt] = (Fr * N >>> U) * et, d[rt + 1] = (jr * N >>> U) * et, 
                        d[rt + 2] = (Br * N >>> U) * et) : d[rt] = d[rt + 1] = d[rt + 2] = 0, 
                        Fr -= pa, jr -= ma, Br -= ya, zr -= va, pa -= O.r, ma -= O.g, 
                        ya -= O.b, va -= O.a, rt = he + ((rt = Ta + v) < x ? rt : x) * l << 2, 
                        Fr += wa += O.r = d[rt], jr += xa += O.g = d[rt + 1], Br += ba += O.b = d[rt + 2], 
                        zr += Sa += O.a = d[rt + 3], O = O.next, pa += jt = P.r, 
                        ma += Bt = P.g, ya += zt = P.b, va += et = P.a, wa -= jt, 
                        xa -= Bt, ba -= zt, Sa -= et, P = P.next, C += l;
                    }
                }
                return o;
            }(a, 0, 0, i, n, s), t.getContext("2d").putImageData(a, e, r);
        }
    }
    var Bh = function t() {
        (function(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
        })(this, t), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
    };
    nl = Object.freeze({
        __proto__: null,
        offscreen: function() {
            var {
                DOMParser: t
            } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = {
                window: null,
                ignoreAnimation: !0,
                ignoreMouse: !0,
                DOMParser: t,
                createCanvas: (r, i) => new OffscreenCanvas(r, i),
                createImage: r => mt(function*() {
                    var i = yield fetch(r), n = yield i.blob();
                    return yield createImageBitmap(n);
                })()
            };
            return typeof DOMParser > "u" && t !== void 0 || Reflect.deleteProperty(e, "DOMParser"), 
            e;
        },
        node: function(t) {
            var {
                DOMParser: e,
                canvas: r,
                fetch: i
            } = t;
            return {
                window: null,
                ignoreAnimation: !0,
                ignoreMouse: !0,
                DOMParser: e,
                fetch: i,
                createCanvas: r.createCanvas,
                createImage: r.loadImage
            };
        }
    }), Pt = function(t) {
        return t.replace(/(?!\u3000)\s+/gm, " ");
    }, cs = function(t) {
        return t.replace(/^[\n \t]+/, "");
    }, gs = function(t) {
        return t.replace(/[\n \t]+$/, "");
    }, tt = function(t) {
        return ((t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []).map(parseFloat);
    };
    var iv = /^[A-Z-]+$/;
    hs = function(t) {
        return iv.test(t) ? t.toLowerCase() : t;
    }, ai = function(t) {
        var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(t) || [];
        return e[2] || e[3] || e[4];
    }, ls = function(t) {
        if (!t.startsWith("rgb")) return t;
        var e = 3;
        return t.replace(/\d+(\.\d+)?/g, (r, i) => e-- && i ? String(Math.round(parseFloat(r))) : r);
    };
    var nv = /(\[[^\]]+\])/g, av = /(#[^\s+>~.[:]+)/g, sv = /(\.[^\s+>~.[:]+)/g, ov = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, uv = /(:[\w-]+\([^)]*\))/gi, hv = /(:[^\s+>~.[:]+)/g, lv = /([^\s+>~.[:]+)/g;
    function Lt(t, e) {
        var r = e.exec(t);
        return r ? [ t.replace(e, " "), r.length ] : [ t, 0 ];
    }
    us = function(t) {
        var e = [ 0, 0, 0 ], r = t.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), i = 0;
        return [ r, i ] = Lt(r, nv), e[1] += i, [ r, i ] = Lt(r, av), e[0] += i, 
        [ r, i ] = Lt(r, sv), e[1] += i, [ r, i ] = Lt(r, ov), e[2] += i, [ r, i ] = Lt(r, uv), 
        e[1] += i, [ r, i ] = Lt(r, hv), e[1] += i, r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), 
        [ r, i ] = Lt(r, lv), e[2] += i, e.join("");
    }, Ct = 1e-8, si = function(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
    }, He = function(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (si(t) * si(e));
    }, oi = function(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(He(t, e));
    }, Xr = function(t) {
        return t * t * t;
    }, Yr = function(t) {
        return 3 * t * t * (1 - t);
    }, qr = function(t) {
        return 3 * t * (1 - t) * (1 - t);
    }, Wr = function(t) {
        return (1 - t) * (1 - t) * (1 - t);
    }, Jr = function(t) {
        return t * t;
    }, ti = function(t) {
        return 2 * t * (1 - t);
    }, ei = function(t) {
        return (1 - t) * (1 - t);
    }, T = class {
        constructor(t, e, r) {
            this.document = t, this.name = e, this.value = r, this.isNormalizedColor = !1;
        }
        static empty(t) {
            return new T(t, "EMPTY", "");
        }
        split() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
                document: e,
                name: r
            } = this;
            return Pt(this.getString()).trim().split(t).map(i => new T(e, r, i));
        }
        hasValue(t) {
            var {
                value: e
            } = this;
            return e !== null && e !== "" && (t || e !== 0) && e !== void 0;
        }
        isString(t) {
            var {
                value: e
            } = this, r = typeof e == "string";
            return r && t ? t.test(e) : r;
        }
        isUrlDefinition() {
            return this.isString(/^url\(/);
        }
        isPixels() {
            if (!this.hasValue()) return !1;
            var t = this.getString();
            switch (!0) {
              case t.endsWith("px"):
              case /^[0-9]+$/.test(t):
                return !0;

              default:
                return !1;
            }
        }
        setValue(t) {
            return this.value = t, this;
        }
        getValue(t) {
            return t === void 0 || this.hasValue() ? this.value : t;
        }
        getNumber(t) {
            if (!this.hasValue()) return t === void 0 ? 0 : parseFloat(t);
            var {
                value: e
            } = this, r = parseFloat(e);
            return this.isString(/%$/) && (r /= 100), r;
        }
        getString(t) {
            return t === void 0 || this.hasValue() ? this.value === void 0 ? "" : String(this.value) : String(t);
        }
        getColor(t) {
            var e = this.getString(t);
            return this.isNormalizedColor || (this.isNormalizedColor = !0, e = ls(e), 
            this.value = e), e;
        }
        getDpi() {
            return 96;
        }
        getRem() {
            return this.document.rootEmSize;
        }
        getEm() {
            return this.document.emSize;
        }
        getUnits() {
            return this.getString().replace(/[0-9.-]/g, "");
        }
        getPixels(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
            if (!this.hasValue()) return 0;
            var [ r, i ] = typeof t == "boolean" ? [ void 0, t ] : [ t ], {
                viewPort: n
            } = this.document.screen;
            switch (!0) {
              case this.isString(/vmin$/):
                return this.getNumber() / 100 * Math.min(n.computeSize("x"), n.computeSize("y"));

              case this.isString(/vmax$/):
                return this.getNumber() / 100 * Math.max(n.computeSize("x"), n.computeSize("y"));

              case this.isString(/vw$/):
                return this.getNumber() / 100 * n.computeSize("x");

              case this.isString(/vh$/):
                return this.getNumber() / 100 * n.computeSize("y");

              case this.isString(/rem$/):
                return this.getNumber() * this.getRem();

              case this.isString(/em$/):
                return this.getNumber() * this.getEm();

              case this.isString(/ex$/):
                return this.getNumber() * this.getEm() / 2;

              case this.isString(/px$/):
                return this.getNumber();

              case this.isString(/pt$/):
                return this.getNumber() * this.getDpi() * (1 / 72);

              case this.isString(/pc$/):
                return 15 * this.getNumber();

              case this.isString(/cm$/):
                return this.getNumber() * this.getDpi() / 2.54;

              case this.isString(/mm$/):
                return this.getNumber() * this.getDpi() / 25.4;

              case this.isString(/in$/):
                return this.getNumber() * this.getDpi();

              case this.isString(/%$/) && i:
                return this.getNumber() * this.getEm();

              case this.isString(/%$/):
                return this.getNumber() * n.computeSize(r);

              default:
                var s = this.getNumber();
                return e && s < 1 ? s * n.computeSize(r) : s;
            }
        }
        getMilliseconds() {
            return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : 1e3 * this.getNumber() : 0;
        }
        getRadians() {
            if (!this.hasValue()) return 0;
            switch (!0) {
              case this.isString(/deg$/):
                return this.getNumber() * (Math.PI / 180);

              case this.isString(/grad$/):
                return this.getNumber() * (Math.PI / 200);

              case this.isString(/rad$/):
                return this.getNumber();

              default:
                return this.getNumber() * (Math.PI / 180);
            }
        }
        getDefinition() {
            var t = this.getString(), e = /#([^)'"]+)/.exec(t);
            return e && (e = e[1]), e || (e = t), this.document.definitions[e];
        }
        getFillStyleDefinition(t, e) {
            var r = this.getDefinition();
            if (!r) return null;
            if (typeof r.createGradient == "function") return r.createGradient(this.document.ctx, t, e);
            if (typeof r.createPattern == "function") {
                if (r.getHrefAttribute().hasValue()) {
                    var i = r.getAttribute("patternTransform");
                    r = r.getHrefAttribute().getDefinition(), i.hasValue() && r.getAttribute("patternTransform", !0).setValue(i.value);
                }
                return r.createPattern(this.document.ctx, t, e);
            }
            return null;
        }
        getTextBaseline() {
            return this.hasValue() ? T.textBaselineMapping[this.getString()] : null;
        }
        addOpacity(t) {
            for (var e = this.getColor(), r = e.length, i = 0, n = 0; n < r && (e[n] === "," && i++, 
            i !== 3); n++);
            if (t.hasValue() && this.isString() && i !== 3) {
                var s = new na(e);
                s.ok && (s.alpha = t.getNumber(), e = s.toRGBA());
            }
            return new T(this.document, this.name, e);
        }
    }, T.textBaselineMapping = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic"
    }, os = class {
        constructor() {
            this.viewPorts = [];
        }
        clear() {
            this.viewPorts = [];
        }
        setCurrent(t, e) {
            this.viewPorts.push({
                width: t,
                height: e
            });
        }
        removeCurrent() {
            this.viewPorts.pop();
        }
        getCurrent() {
            var {
                viewPorts: t
            } = this;
            return t[t.length - 1];
        }
        get width() {
            return this.getCurrent().width;
        }
        get height() {
            return this.getCurrent().height;
        }
        computeSize(t) {
            return typeof t == "number" ? t : t === "x" ? this.width : t === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
        }
    }, k = class {
        constructor(t, e) {
            this.x = t, this.y = e;
        }
        static parse(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [ r = e, i = e ] = tt(t);
            return new k(r, i);
        }
        static parseScale(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [ r = e, i = r ] = tt(t);
            return new k(r, i);
        }
        static parsePath(t) {
            for (var e = tt(t), r = e.length, i = [], n = 0; n < r; n += 2) i.push(new k(e[n], e[n + 1]));
            return i;
        }
        angleTo(t) {
            return Math.atan2(t.y - this.y, t.x - this.x);
        }
        applyTransform(t) {
            var {
                x: e,
                y: r
            } = this, i = e * t[0] + r * t[2] + t[4], n = e * t[1] + r * t[3] + t[5];
            this.x = i, this.y = n;
        }
    }, Xa = class {
        constructor(t) {
            this.screen = t, this.working = !1, this.events = [], this.eventElements = [], 
            this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
        }
        isWorking() {
            return this.working;
        }
        start() {
            if (!this.working) {
                var {
                    screen: t,
                    onClick: e,
                    onMouseMove: r
                } = this, i = t.ctx.canvas;
                i.onclick = e, i.onmousemove = r, this.working = !0;
            }
        }
        stop() {
            if (this.working) {
                var t = this.screen.ctx.canvas;
                this.working = !1, t.onclick = null, t.onmousemove = null;
            }
        }
        hasEvents() {
            return this.working && this.events.length > 0;
        }
        runEvents() {
            if (this.working) {
                var {
                    screen: t,
                    events: e,
                    eventElements: r
                } = this, {
                    style: i
                } = t.ctx.canvas;
                i && (i.cursor = ""), e.forEach((n, s) => {
                    for (var {
                        run: a
                    } = n, o = r[s]; o; ) a(o), o = o.parent;
                }), this.events = [], this.eventElements = [];
            }
        }
        checkPath(t, e) {
            if (this.working && e) {
                var {
                    events: r,
                    eventElements: i
                } = this;
                r.forEach((n, s) => {
                    var {
                        x: a,
                        y: o
                    } = n;
                    !i[s] && e.isPointInPath && e.isPointInPath(a, o) && (i[s] = t);
                });
            }
        }
        checkBoundingBox(t, e) {
            if (this.working && e) {
                var {
                    events: r,
                    eventElements: i
                } = this;
                r.forEach((n, s) => {
                    var {
                        x: a,
                        y: o
                    } = n;
                    !i[s] && e.isPointInBox(a, o) && (i[s] = t);
                });
            }
        }
        mapXY(t, e) {
            for (var {
                window: r,
                ctx: i
            } = this.screen, n = new k(t, e), s = i.canvas; s; ) n.x -= s.offsetLeft, 
            n.y -= s.offsetTop, s = s.offsetParent;
            return r.scrollX && (n.x += r.scrollX), r.scrollY && (n.y += r.scrollY), 
            n;
        }
        onClick(t) {
            var {
                x: e,
                y: r
            } = this.mapXY(t.clientX, t.clientY);
            this.events.push({
                type: "onclick",
                x: e,
                y: r,
                run(i) {
                    i.onClick && i.onClick();
                }
            });
        }
        onMouseMove(t) {
            var {
                x: e,
                y: r
            } = this.mapXY(t.clientX, t.clientY);
            this.events.push({
                type: "onmousemove",
                x: e,
                y: r,
                run(i) {
                    i.onMouseMove && i.onMouseMove();
                }
            });
        }
    };
    var zh = typeof window < "u" ? window : null, Uh = typeof fetch < "u" ? fetch.bind(void 0) : null;
    ce = class {
        constructor(t) {
            var {
                fetch: e = Uh,
                window: r = zh
            } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.ctx = t, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, 
            this.CLIENT_HEIGHT = 600, this.viewPort = new os(), this.mouse = new Xa(this), 
            this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, 
            this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = e;
        }
        wait(t) {
            this.waits.push(t);
        }
        ready() {
            return this.readyPromise ? this.readyPromise : Promise.resolve();
        }
        isReady() {
            if (this.isReadyLock) return !0;
            var t = this.waits.every(e => e());
            return t && (this.waits = [], this.resolveReady && this.resolveReady()), 
            this.isReadyLock = t, t;
        }
        setDefaults(t) {
            t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", 
            t.miterLimit = 4;
        }
        setViewBox(t) {
            var {
                document: e,
                ctx: r,
                aspectRatio: i,
                width: n,
                desiredWidth: s,
                height: a,
                desiredHeight: o,
                minX: u = 0,
                minY: h = 0,
                refX: l,
                refY: g,
                clip: c = !1,
                clipX: f = 0,
                clipY: d = 0
            } = t, p = Pt(i).replace(/^defer\s/, ""), [ y, x ] = p.split(" "), v = y || "xMidYMid", b = x || "meet", A = n / s, S = a / o, w = Math.min(A, S), O = Math.max(A, S), P = s, I = o;
            b === "meet" && (P *= w, I *= w), b === "slice" && (P *= O, I *= O);
            var C = new T(e, "refX", l), N = new T(e, "refY", g), U = C.hasValue() && N.hasValue();
            if (U && r.translate(-w * C.getPixels("x"), -w * N.getPixels("y")), 
            c) {
                var K = w * f, W = w * d;
                r.beginPath(), r.moveTo(K, W), r.lineTo(n, W), r.lineTo(n, a), r.lineTo(K, a), 
                r.closePath(), r.clip();
            }
            if (!U) {
                var Y = b === "meet" && w === S, G = b === "slice" && O === S, R = b === "meet" && w === A, _ = b === "slice" && O === A;
                v.startsWith("xMid") && (Y || G) && r.translate(n / 2 - P / 2, 0), 
                v.endsWith("YMid") && (R || _) && r.translate(0, a / 2 - I / 2), 
                v.startsWith("xMax") && (Y || G) && r.translate(n - P, 0), v.endsWith("YMax") && (R || _) && r.translate(0, a - I);
            }
            switch (!0) {
              case v === "none":
                r.scale(A, S);
                break;

              case b === "meet":
                r.scale(w, w);
                break;

              case b === "slice":
                r.scale(O, O);
            }
            r.translate(-u, -h);
        }
        start(t) {
            var {
                enableRedraw: e = !1,
                ignoreMouse: r = !1,
                ignoreAnimation: i = !1,
                ignoreDimensions: n = !1,
                ignoreClear: s = !1,
                forceRedraw: a,
                scaleWidth: o,
                scaleHeight: u,
                offsetX: h,
                offsetY: l
            } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
                FRAMERATE: g,
                mouse: c
            } = this, f = 1e3 / g;
            if (this.frameDuration = f, this.readyPromise = new Promise(v => {
                this.resolveReady = v;
            }), this.isReady() && this.render(t, n, s, o, u, h, l), e) {
                var d = Date.now(), p = d, y = 0, x = () => {
                    d = Date.now(), (y = d - p) >= f && (p = d - y % f, this.shouldUpdate(i, a) && (this.render(t, n, s, o, u, h, l), 
                    c.runEvents())), this.intervalId = ea(x);
                };
                r || c.start(), this.intervalId = ea(x);
            }
        }
        stop() {
            this.intervalId && (ea.cancel(this.intervalId), this.intervalId = null), 
            this.mouse.stop();
        }
        shouldUpdate(t, e) {
            if (!t) {
                var {
                    frameDuration: r
                } = this;
                if (this.animations.reduce((i, n) => n.update(r) || i, !1)) return !0;
            }
            return !(typeof e != "function" || !e()) || !(this.isReadyLock || !this.isReady()) || !!this.mouse.hasEvents();
        }
        render(t, e, r, i, n, s, a) {
            var {
                CLIENT_WIDTH: o,
                CLIENT_HEIGHT: u,
                viewPort: h,
                ctx: l,
                isFirstRender: g
            } = this, c = l.canvas;
            h.clear(), c.width && c.height ? h.setCurrent(c.width, c.height) : h.setCurrent(o, u);
            var f = t.getStyle("width"), d = t.getStyle("height");
            !e && (g || typeof i != "number" && typeof n != "number") && (f.hasValue() && (c.width = f.getPixels("x"), 
            c.style && (c.style.width = "".concat(c.width, "px"))), d.hasValue() && (c.height = d.getPixels("y"), 
            c.style && (c.style.height = "".concat(c.height, "px"))));
            var p = c.clientWidth || c.width, y = c.clientHeight || c.height;
            if (e && f.hasValue() && d.hasValue() && (p = f.getPixels("x"), y = d.getPixels("y")), 
            h.setCurrent(p, y), typeof s == "number" && t.getAttribute("x", !0).setValue(s), 
            typeof a == "number" && t.getAttribute("y", !0).setValue(a), typeof i == "number" || typeof n == "number") {
                var x = tt(t.getAttribute("viewBox").getString()), v = 0, b = 0;
                if (typeof i == "number") {
                    var A = t.getStyle("width");
                    A.hasValue() ? v = A.getPixels("x") / i : isNaN(x[2]) || (v = x[2] / i);
                }
                if (typeof n == "number") {
                    var S = t.getStyle("height");
                    S.hasValue() ? b = S.getPixels("y") / n : isNaN(x[3]) || (b = x[3] / n);
                }
                v || (v = b), b || (b = v), t.getAttribute("width", !0).setValue(i), 
                t.getAttribute("height", !0).setValue(n);
                var w = t.getStyle("transform", !0, !0);
                w.setValue("".concat(w.getString(), " scale(").concat(1 / v, ", ").concat(1 / b, ")"));
            }
            r || l.clearRect(0, 0, p, y), t.render(l), g && (this.isFirstRender = !1);
        }
    }, ce.defaultWindow = zh, ce.defaultFetch = Uh;
    var {
        defaultFetch: cv
    } = ce, gv = typeof DOMParser < "u" ? DOMParser : null;
    ze = class {
        constructor() {
            var {
                fetch: t = cv,
                DOMParser: e = gv
            } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.fetch = t, this.DOMParser = e;
        }
        parse(t) {
            var e = this;
            return mt(function*() {
                return t.startsWith("<") ? e.parseFromString(t) : e.load(t);
            })();
        }
        parseFromString(t) {
            var e = new this.DOMParser();
            try {
                return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
            } catch {
                return this.checkDocument(e.parseFromString(t, "text/xml"));
            }
        }
        checkDocument(t) {
            var e = t.getElementsByTagName("parsererror")[0];
            if (e) throw new Error(e.textContent);
            return t;
        }
        load(t) {
            var e = this;
            return mt(function*() {
                var r = yield e.fetch(t), i = yield r.text();
                return e.parseFromString(i);
            })();
        }
    }, ns = class {
        constructor(t, e) {
            this.type = "translate", this.point = null, this.point = k.parse(e);
        }
        apply(t) {
            var {
                x: e,
                y: r
            } = this.point;
            t.translate(e || 0, r || 0);
        }
        unapply(t) {
            var {
                x: e,
                y: r
            } = this.point;
            t.translate(-1 * e || 0, -1 * r || 0);
        }
        applyToPoint(t) {
            var {
                x: e,
                y: r
            } = this.point;
            t.applyTransform([ 1, 0, 0, 1, e || 0, r || 0 ]);
        }
    }, Ga = class {
        constructor(t, e, r) {
            this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, 
            this.cx = 0, this.cy = 0;
            var i = tt(e);
            this.angle = new T(t, "angle", i[0]), this.originX = r[0], this.originY = r[1], 
            this.cx = i[1] || 0, this.cy = i[2] || 0;
        }
        apply(t) {
            var {
                cx: e,
                cy: r,
                originX: i,
                originY: n,
                angle: s
            } = this, a = e + i.getPixels("x"), o = r + n.getPixels("y");
            t.translate(a, o), t.rotate(s.getRadians()), t.translate(-a, -o);
        }
        unapply(t) {
            var {
                cx: e,
                cy: r,
                originX: i,
                originY: n,
                angle: s
            } = this, a = e + i.getPixels("x"), o = r + n.getPixels("y");
            t.translate(a, o), t.rotate(-1 * s.getRadians()), t.translate(-a, -o);
        }
        applyToPoint(t) {
            var {
                cx: e,
                cy: r,
                angle: i
            } = this, n = i.getRadians();
            t.applyTransform([ 1, 0, 0, 1, e || 0, r || 0 ]), t.applyTransform([ Math.cos(n), Math.sin(n), -Math.sin(n), Math.cos(n), 0, 0 ]), 
            t.applyTransform([ 1, 0, 0, 1, -e || 0, -r || 0 ]);
        }
    }, $a = class {
        constructor(t, e, r) {
            this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
            var i = k.parseScale(e);
            i.x !== 0 && i.y !== 0 || (i.x = Ct, i.y = Ct), this.scale = i, this.originX = r[0], 
            this.originY = r[1];
        }
        apply(t) {
            var {
                scale: {
                    x: e,
                    y: r
                },
                originX: i,
                originY: n
            } = this, s = i.getPixels("x"), a = n.getPixels("y");
            t.translate(s, a), t.scale(e, r || e), t.translate(-s, -a);
        }
        unapply(t) {
            var {
                scale: {
                    x: e,
                    y: r
                },
                originX: i,
                originY: n
            } = this, s = i.getPixels("x"), a = n.getPixels("y");
            t.translate(s, a), t.scale(1 / e, 1 / r || e), t.translate(-s, -a);
        }
        applyToPoint(t) {
            var {
                x: e,
                y: r
            } = this.scale;
            t.applyTransform([ e || 0, 0, 0, r || 0, 0, 0 ]);
        }
    }, Zr = class {
        constructor(t, e, r) {
            this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, 
            this.matrix = tt(e), this.originX = r[0], this.originY = r[1];
        }
        apply(t) {
            var {
                originX: e,
                originY: r,
                matrix: i
            } = this, n = e.getPixels("x"), s = r.getPixels("y");
            t.translate(n, s), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), 
            t.translate(-n, -s);
        }
        unapply(t) {
            var {
                originX: e,
                originY: r,
                matrix: i
            } = this, n = i[0], s = i[2], a = i[4], o = i[1], u = i[3], h = i[5], l = 1 / (n * (1 * u - 0 * h) - s * (1 * o - 0 * h) + a * (0 * o - 0 * u)), g = e.getPixels("x"), c = r.getPixels("y");
            t.translate(g, c), t.transform(l * (1 * u - 0 * h), l * (0 * h - 1 * o), l * (0 * a - 1 * s), l * (1 * n - 0 * a), l * (s * h - a * u), l * (a * o - n * h)), 
            t.translate(-g, -c);
        }
        applyToPoint(t) {
            t.applyTransform(this.matrix);
        }
    }, ii = class extends Zr {
        constructor(t, e, r) {
            super(t, e, r), this.type = "skew", this.angle = null, this.angle = new T(t, "angle", e);
        }
    }, Za = class extends ii {
        constructor(t, e, r) {
            super(t, e, r), this.type = "skewX", this.matrix = [ 1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0 ];
        }
    }, Ka = class extends ii {
        constructor(t, e, r) {
            super(t, e, r), this.type = "skewY", this.matrix = [ 1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0 ];
        }
    }, Et = class {
        constructor(t, e, r) {
            this.document = t, this.transforms = [];
            var i = function(n) {
                return Pt(n).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
            }(e);
            i.forEach(n => {
                if (n !== "none") {
                    var [ s, a ] = function(u) {
                        var [ h, l ] = u.split("(");
                        return [ h.trim(), l.trim().replace(")", "") ];
                    }(n), o = Et.transformTypes[s];
                    o !== void 0 && this.transforms.push(new o(this.document, a, r));
                }
            });
        }
        static fromElement(t, e) {
            var r = e.getStyle("transform", !1, !0), [ i, n = i ] = e.getStyle("transform-origin", !1, !0).split(), s = [ i, n ];
            return r.hasValue() ? new Et(t, r.getString(), s) : null;
        }
        apply(t) {
            for (var {
                transforms: e
            } = this, r = e.length, i = 0; i < r; i++) e[i].apply(t);
        }
        unapply(t) {
            for (var {
                transforms: e
            } = this, r = e.length - 1; r >= 0; r--) e[r].unapply(t);
        }
        applyToPoint(t) {
            for (var {
                transforms: e
            } = this, r = e.length, i = 0; i < r; i++) e[i].applyToPoint(t);
        }
    }, Et.transformTypes = {
        translate: ns,
        rotate: Ga,
        scale: $a,
        matrix: Zr,
        skewX: Za,
        skewY: Ka
    }, V = class {
        constructor(t, e) {
            var r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
            if (this.document = t, this.node = e, this.captureTextNodes = r, this.attributes = {}, 
            this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, 
            this.animationFrozenValue = "", this.parent = null, this.children = [], 
            e && e.nodeType === 1) {
                if (Array.from(e.attributes).forEach(a => {
                    var o = hs(a.nodeName);
                    this.attributes[o] = new T(t, o, a.value);
                }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
                    var i = this.getAttribute("style").getString().split(";").map(a => a.trim());
                    i.forEach(a => {
                        if (a) {
                            var [ o, u ] = a.split(":").map(h => h.trim());
                            this.styles[o] = new T(t, o, u);
                        }
                    });
                }
                var {
                    definitions: n
                } = t, s = this.getAttribute("id");
                s.hasValue() && (n[s.getString()] || (n[s.getString()] = this)), 
                Array.from(e.childNodes).forEach(a => {
                    if (a.nodeType === 1) this.addChild(a); else if (r && (a.nodeType === 3 || a.nodeType === 4)) {
                        var o = t.createTextNode(a);
                        o.getText().length > 0 && this.addChild(o);
                    }
                });
            }
        }
        getAttribute(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r = this.attributes[t];
            if (!r && e) {
                var i = new T(this.document, t, "");
                return this.attributes[t] = i, i;
            }
            return r || T.empty(this.document);
        }
        getHrefAttribute() {
            for (var t in this.attributes) if (t === "href" || t.endsWith(":href")) return this.attributes[t];
            return T.empty(this.document);
        }
        getStyle(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = this.styles[t];
            if (i) return i;
            var n = this.getAttribute(t);
            if (n != null && n.hasValue()) return this.styles[t] = n, n;
            if (!r) {
                var {
                    parent: s
                } = this;
                if (s) {
                    var a = s.getStyle(t);
                    if (a != null && a.hasValue()) return a;
                }
            }
            if (e) {
                var o = new T(this.document, t, "");
                return this.styles[t] = o, o;
            }
            return i || T.empty(this.document);
        }
        render(t) {
            if (this.getStyle("display").getString() !== "none" && this.getStyle("visibility").getString() !== "hidden") {
                if (t.save(), this.getStyle("mask").hasValue()) {
                    var e = this.getStyle("mask").getDefinition();
                    e && (this.applyEffects(t), e.apply(t, this));
                } else if (this.getStyle("filter").getValue("none") !== "none") {
                    var r = this.getStyle("filter").getDefinition();
                    r && (this.applyEffects(t), r.apply(t, this));
                } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
                t.restore();
            }
        }
        setContext(t) {}
        applyEffects(t) {
            var e = Et.fromElement(this.document, this);
            e && e.apply(t);
            var r = this.getStyle("clip-path", !1, !0);
            if (r.hasValue()) {
                var i = r.getDefinition();
                i && i.apply(t);
            }
        }
        clearContext(t) {}
        renderChildren(t) {
            this.children.forEach(e => {
                e.render(t);
            });
        }
        addChild(t) {
            var e = t instanceof V ? t : this.document.createElement(t);
            e.parent = this, V.ignoreChildTypes.includes(e.type) || this.children.push(e);
        }
        matchesSelector(t) {
            var e, {
                node: r
            } = this;
            if (typeof r.matches == "function") return r.matches(t);
            var i = (e = r.getAttribute) === null || e === void 0 ? void 0 : e.call(r, "class");
            return !(!i || i === "") && i.split(" ").some(n => ".".concat(n) === t);
        }
        addStylesFromStyleDefinition() {
            var {
                styles: t,
                stylesSpecificity: e
            } = this.document;
            for (var r in t) if (!r.startsWith("@") && this.matchesSelector(r)) {
                var i = t[r], n = e[r];
                if (i) for (var s in i) {
                    var a = this.stylesSpecificity[s];
                    a === void 0 && (a = "000"), n >= a && (this.styles[s] = i[s], 
                    this.stylesSpecificity[s] = n);
                }
            }
        }
        removeStyles(t, e) {
            return e.reduce((r, i) => {
                var n = t.getStyle(i);
                if (!n.hasValue()) return r;
                var s = n.getString();
                return n.setValue(""), [ ...r, [ i, s ] ];
            }, []);
        }
        restoreStyles(t, e) {
            e.forEach(r => {
                var [ i, n ] = r;
                t.getStyle(i, !0).setValue(n);
            });
        }
        isFirstChild() {
            var t;
            return ((t = this.parent) === null || t === void 0 ? void 0 : t.children.indexOf(this)) === 0;
        }
    }, V.ignoreChildTypes = [ "title" ], as = class extends V {
        constructor(t, e, r) {
            super(t, e, r);
        }
    };
    function fv(t) {
        var e = t.trim();
        return /^('|")/.test(e) ? e : '"'.concat(e, '"');
    }
    function dv(t) {
        if (!t) return "";
        var e = t.trim().toLowerCase();
        switch (e) {
          case "normal":
          case "italic":
          case "oblique":
          case "inherit":
          case "initial":
          case "unset":
            return e;

          default:
            return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
        }
    }
    function pv(t) {
        if (!t) return "";
        var e = t.trim().toLowerCase();
        switch (e) {
          case "normal":
          case "bold":
          case "lighter":
          case "bolder":
          case "inherit":
          case "initial":
          case "unset":
            return e;

          default:
            return /^[\d.]+$/.test(e) ? e : "";
        }
    }
    Q = class {
        constructor(t, e, r, i, n, s) {
            var a = s ? typeof s == "string" ? Q.parse(s) : s : {};
            this.fontFamily = n || a.fontFamily, this.fontSize = i || a.fontSize, 
            this.fontStyle = t || a.fontStyle, this.fontWeight = r || a.fontWeight, 
            this.fontVariant = e || a.fontVariant;
        }
        static parse() {
            var t = arguments.length > 1 ? arguments[1] : void 0, e = "", r = "", i = "", n = "", s = "", a = Pt(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").trim().split(" "), o = {
                fontSize: !1,
                fontStyle: !1,
                fontWeight: !1,
                fontVariant: !1
            };
            return a.forEach(u => {
                switch (!0) {
                  case !o.fontStyle && Q.styles.includes(u):
                    u !== "inherit" && (e = u), o.fontStyle = !0;
                    break;

                  case !o.fontVariant && Q.variants.includes(u):
                    u !== "inherit" && (r = u), o.fontStyle = !0, o.fontVariant = !0;
                    break;

                  case !o.fontWeight && Q.weights.includes(u):
                    u !== "inherit" && (i = u), o.fontStyle = !0, o.fontVariant = !0, 
                    o.fontWeight = !0;
                    break;

                  case !o.fontSize:
                    u !== "inherit" && ([ n ] = u.split("/")), o.fontStyle = !0, 
                    o.fontVariant = !0, o.fontWeight = !0, o.fontSize = !0;
                    break;

                  default:
                    u !== "inherit" && (s += u);
                }
            }), new Q(e, r, i, n, s, t);
        }
        toString() {
            return [ dv(this.fontStyle), this.fontVariant, pv(this.fontWeight), this.fontSize, (t = this.fontFamily, 
            typeof process > "u" ? t : t.trim().split(",").map(fv).join(",")) ].join(" ").trim();
            var t;
        }
    }, Q.styles = "normal|italic|oblique|inherit", Q.variants = "normal|small-caps|inherit", 
    Q.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", 
    nt = class {
        constructor() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
            this.x1 = t, this.y1 = e, this.x2 = r, this.y2 = i, this.addPoint(t, e), 
            this.addPoint(r, i);
        }
        get x() {
            return this.x1;
        }
        get y() {
            return this.y1;
        }
        get width() {
            return this.x2 - this.x1;
        }
        get height() {
            return this.y2 - this.y1;
        }
        addPoint(t, e) {
            t !== void 0 && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, 
            this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), 
            e !== void 0 && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, 
            this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
        }
        addX(t) {
            this.addPoint(t, null);
        }
        addY(t) {
            this.addPoint(null, t);
        }
        addBoundingBox(t) {
            if (t) {
                var {
                    x1: e,
                    y1: r,
                    x2: i,
                    y2: n
                } = t;
                this.addPoint(e, r), this.addPoint(i, n);
            }
        }
        sumCubic(t, e, r, i, n) {
            return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * i + Math.pow(t, 3) * n;
        }
        bezierCurveAdd(t, e, r, i, n) {
            var s = 6 * e - 12 * r + 6 * i, a = -3 * e + 9 * r - 9 * i + 3 * n, o = 3 * r - 3 * e;
            if (a !== 0) {
                var u = Math.pow(s, 2) - 4 * o * a;
                if (!(u < 0)) {
                    var h = (-s + Math.sqrt(u)) / (2 * a);
                    0 < h && h < 1 && (t ? this.addX(this.sumCubic(h, e, r, i, n)) : this.addY(this.sumCubic(h, e, r, i, n)));
                    var l = (-s - Math.sqrt(u)) / (2 * a);
                    0 < l && l < 1 && (t ? this.addX(this.sumCubic(l, e, r, i, n)) : this.addY(this.sumCubic(l, e, r, i, n)));
                }
            } else {
                if (s === 0) return;
                var g = -o / s;
                0 < g && g < 1 && (t ? this.addX(this.sumCubic(g, e, r, i, n)) : this.addY(this.sumCubic(g, e, r, i, n)));
            }
        }
        addBezierCurve(t, e, r, i, n, s, a, o) {
            this.addPoint(t, e), this.addPoint(a, o), this.bezierCurveAdd(!0, t, r, n, a), 
            this.bezierCurveAdd(!1, e, i, s, o);
        }
        addQuadraticCurve(t, e, r, i, n, s) {
            var a = t + .6666666666666666 * (r - t), o = e + 2 / 3 * (i - e), u = a + 1 / 3 * (n - t), h = o + 1 / 3 * (s - e);
            this.addBezierCurve(t, e, a, u, o, h, n, s);
        }
        isPointInBox(t, e) {
            var {
                x1: r,
                y1: i,
                x2: n,
                y2: s
            } = this;
            return r <= t && t <= n && i <= e && e <= s;
        }
    }, E = class extends m {
        constructor(t) {
            super(t.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), 
            this.control = null, this.start = null, this.current = null, this.command = null, 
            this.commands = this.commands, this.i = -1, this.previousCommand = null, 
            this.points = [], this.angles = [];
        }
        reset() {
            this.i = -1, this.command = null, this.previousCommand = null, this.start = new k(0, 0), 
            this.control = new k(0, 0), this.current = new k(0, 0), this.points = [], 
            this.angles = [];
        }
        isEnd() {
            var {
                i: t,
                commands: e
            } = this;
            return t >= e.length - 1;
        }
        next() {
            var t = this.commands[++this.i];
            return this.previousCommand = this.command, this.command = t, t;
        }
        getPoint() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new k(this.command[t], this.command[e]);
            return this.makeAbsolute(r);
        }
        getAsControlPoint(t, e) {
            var r = this.getPoint(t, e);
            return this.control = r, r;
        }
        getAsCurrentPoint(t, e) {
            var r = this.getPoint(t, e);
            return this.current = r, r;
        }
        getReflectedControlPoint() {
            var t = this.previousCommand.type;
            if (t !== m.CURVE_TO && t !== m.SMOOTH_CURVE_TO && t !== m.QUAD_TO && t !== m.SMOOTH_QUAD_TO) return this.current;
            var {
                current: {
                    x: e,
                    y: r
                },
                control: {
                    x: i,
                    y: n
                }
            } = this;
            return new k(2 * e - i, 2 * r - n);
        }
        makeAbsolute(t) {
            if (this.command.relative) {
                var {
                    x: e,
                    y: r
                } = this.current;
                t.x += e, t.y += r;
            }
            return t;
        }
        addMarker(t, e, r) {
            var {
                points: i,
                angles: n
            } = this;
            r && n.length > 0 && !n[n.length - 1] && (n[n.length - 1] = i[i.length - 1].angleTo(r)), 
            this.addMarkerAngle(t, e ? e.angleTo(t) : null);
        }
        addMarkerAngle(t, e) {
            this.points.push(t), this.angles.push(e);
        }
        getMarkerPoints() {
            return this.points;
        }
        getMarkerAngles() {
            for (var {
                angles: t
            } = this, e = t.length, r = 0; r < e; r++) if (!t[r]) {
                for (var i = r + 1; i < e; i++) if (t[i]) {
                    t[r] = t[i];
                    break;
                }
            }
            return t;
        }
    }, St = class extends V {
        constructor() {
            super(...arguments), this.modifiedEmSizeStack = !1;
        }
        calculateOpacity() {
            for (var t = 1, e = this; e; ) {
                var r = e.getStyle("opacity", !1, !0);
                r.hasValue(!0) && (t *= r.getNumber()), e = e.parent;
            }
            return t;
        }
        setContext(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
            if (!e) {
                var r = this.getStyle("fill"), i = this.getStyle("fill-opacity"), n = this.getStyle("stroke"), s = this.getStyle("stroke-opacity");
                if (r.isUrlDefinition()) {
                    var a = r.getFillStyleDefinition(this, i);
                    a && (t.fillStyle = a);
                } else if (r.hasValue()) {
                    r.getString() === "currentColor" && r.setValue(this.getStyle("color").getColor());
                    var o = r.getColor();
                    o !== "inherit" && (t.fillStyle = o === "none" ? "rgba(0,0,0,0)" : o);
                }
                if (i.hasValue()) {
                    var u = new T(this.document, "fill", t.fillStyle).addOpacity(i).getColor();
                    t.fillStyle = u;
                }
                if (n.isUrlDefinition()) {
                    var h = n.getFillStyleDefinition(this, s);
                    h && (t.strokeStyle = h);
                } else if (n.hasValue()) {
                    n.getString() === "currentColor" && n.setValue(this.getStyle("color").getColor());
                    var l = n.getString();
                    l !== "inherit" && (t.strokeStyle = l === "none" ? "rgba(0,0,0,0)" : l);
                }
                if (s.hasValue()) {
                    var g = new T(this.document, "stroke", t.strokeStyle).addOpacity(s).getString();
                    t.strokeStyle = g;
                }
                var c = this.getStyle("stroke-width");
                if (c.hasValue()) {
                    var f = c.getPixels();
                    t.lineWidth = f || Ct;
                }
                var d = this.getStyle("stroke-linecap"), p = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), x = this.getStyle("stroke-dasharray"), v = this.getStyle("stroke-dashoffset");
                if (d.hasValue() && (t.lineCap = d.getString()), p.hasValue() && (t.lineJoin = p.getString()), 
                y.hasValue() && (t.miterLimit = y.getNumber()), x.hasValue() && x.getString() !== "none") {
                    var b = tt(x.getString());
                    t.setLineDash !== void 0 ? t.setLineDash(b) : t.webkitLineDash !== void 0 ? t.webkitLineDash = b : t.mozDash === void 0 || b.length === 1 && b[0] === 0 || (t.mozDash = b);
                    var A = v.getPixels();
                    t.lineDashOffset !== void 0 ? t.lineDashOffset = A : t.webkitLineDashOffset !== void 0 ? t.webkitLineDashOffset = A : t.mozDashOffset !== void 0 && (t.mozDashOffset = A);
                }
            }
            if (this.modifiedEmSizeStack = !1, t.font !== void 0) {
                var S = this.getStyle("font"), w = this.getStyle("font-style"), O = this.getStyle("font-variant"), P = this.getStyle("font-weight"), I = this.getStyle("font-size"), C = this.getStyle("font-family"), N = new Q(w.getString(), O.getString(), P.getString(), I.hasValue() ? "".concat(I.getPixels(!0), "px") : "", C.getString(), Q.parse(S.getString(), t.font));
                w.setValue(N.fontStyle), O.setValue(N.fontVariant), P.setValue(N.fontWeight), 
                I.setValue(N.fontSize), C.setValue(N.fontFamily), t.font = N.toString(), 
                I.isPixels() && (this.document.emSize = I.getPixels(), this.modifiedEmSizeStack = !0);
            }
            e || (this.applyEffects(t), t.globalAlpha = this.calculateOpacity());
        }
        clearContext(t) {
            super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
        }
    }, M = class extends St {
        constructor(t, e, r) {
            super(t, e, r), this.type = "path", this.pathParser = null, this.pathParser = new E(this.getAttribute("d").getString());
        }
        path(t) {
            var {
                pathParser: e
            } = this, r = new nt();
            for (e.reset(), t && t.beginPath(); !e.isEnd(); ) switch (e.next().type) {
              case E.MOVE_TO:
                this.pathM(t, r);
                break;

              case E.LINE_TO:
                this.pathL(t, r);
                break;

              case E.HORIZ_LINE_TO:
                this.pathH(t, r);
                break;

              case E.VERT_LINE_TO:
                this.pathV(t, r);
                break;

              case E.CURVE_TO:
                this.pathC(t, r);
                break;

              case E.SMOOTH_CURVE_TO:
                this.pathS(t, r);
                break;

              case E.QUAD_TO:
                this.pathQ(t, r);
                break;

              case E.SMOOTH_QUAD_TO:
                this.pathT(t, r);
                break;

              case E.ARC:
                this.pathA(t, r);
                break;

              case E.CLOSE_PATH:
                this.pathZ(t, r);
            }
            return r;
        }
        getBoundingBox(t) {
            return this.path();
        }
        getMarkers() {
            var {
                pathParser: t
            } = this, e = t.getMarkerPoints(), r = t.getMarkerAngles(), i = e.map((n, s) => [ n, r[s] ]);
            return i;
        }
        renderChildren(t) {
            this.path(t), this.document.screen.mouse.checkPath(this, t);
            var e = this.getStyle("fill-rule");
            t.fillStyle !== "" && (e.getString("inherit") !== "inherit" ? t.fill(e.getString()) : t.fill()), 
            t.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (t.save(), 
            t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore()) : t.stroke());
            var r = this.getMarkers();
            if (r) {
                var i = r.length - 1, n = this.getStyle("marker-start"), s = this.getStyle("marker-mid"), a = this.getStyle("marker-end");
                if (n.isUrlDefinition()) {
                    var o = n.getDefinition(), [ u, h ] = r[0];
                    o.render(t, u, h);
                }
                if (s.isUrlDefinition()) for (var l = s.getDefinition(), g = 1; g < i; g++) {
                    var [ c, f ] = r[g];
                    l.render(t, c, f);
                }
                if (a.isUrlDefinition()) {
                    var d = a.getDefinition(), [ p, y ] = r[i];
                    d.render(t, p, y);
                }
            }
        }
        static pathM(t) {
            var e = t.getAsCurrentPoint();
            return t.start = t.current, {
                point: e
            };
        }
        pathM(t, e) {
            var {
                pathParser: r
            } = this, {
                point: i
            } = M.pathM(r), {
                x: n,
                y: s
            } = i;
            r.addMarker(i), e.addPoint(n, s), t && t.moveTo(n, s);
        }
        static pathL(t) {
            var {
                current: e
            } = t;
            return {
                current: e,
                point: t.getAsCurrentPoint()
            };
        }
        pathL(t, e) {
            var {
                pathParser: r
            } = this, {
                current: i,
                point: n
            } = M.pathL(r), {
                x: s,
                y: a
            } = n;
            r.addMarker(n, i), e.addPoint(s, a), t && t.lineTo(s, a);
        }
        static pathH(t) {
            var {
                current: e,
                command: r
            } = t, i = new k((r.relative ? e.x : 0) + r.x, e.y);
            return t.current = i, {
                current: e,
                point: i
            };
        }
        pathH(t, e) {
            var {
                pathParser: r
            } = this, {
                current: i,
                point: n
            } = M.pathH(r), {
                x: s,
                y: a
            } = n;
            r.addMarker(n, i), e.addPoint(s, a), t && t.lineTo(s, a);
        }
        static pathV(t) {
            var {
                current: e,
                command: r
            } = t, i = new k(e.x, (r.relative ? e.y : 0) + r.y);
            return t.current = i, {
                current: e,
                point: i
            };
        }
        pathV(t, e) {
            var {
                pathParser: r
            } = this, {
                current: i,
                point: n
            } = M.pathV(r), {
                x: s,
                y: a
            } = n;
            r.addMarker(n, i), e.addPoint(s, a), t && t.lineTo(s, a);
        }
        static pathC(t) {
            var {
                current: e
            } = t;
            return {
                current: e,
                point: t.getPoint("x1", "y1"),
                controlPoint: t.getAsControlPoint("x2", "y2"),
                currentPoint: t.getAsCurrentPoint()
            };
        }
        pathC(t, e) {
            var {
                pathParser: r
            } = this, {
                current: i,
                point: n,
                controlPoint: s,
                currentPoint: a
            } = M.pathC(r);
            r.addMarker(a, s, n), e.addBezierCurve(i.x, i.y, n.x, n.y, s.x, s.y, a.x, a.y), 
            t && t.bezierCurveTo(n.x, n.y, s.x, s.y, a.x, a.y);
        }
        static pathS(t) {
            var {
                current: e
            } = t;
            return {
                current: e,
                point: t.getReflectedControlPoint(),
                controlPoint: t.getAsControlPoint("x2", "y2"),
                currentPoint: t.getAsCurrentPoint()
            };
        }
        pathS(t, e) {
            var {
                pathParser: r
            } = this, {
                current: i,
                point: n,
                controlPoint: s,
                currentPoint: a
            } = M.pathS(r);
            r.addMarker(a, s, n), e.addBezierCurve(i.x, i.y, n.x, n.y, s.x, s.y, a.x, a.y), 
            t && t.bezierCurveTo(n.x, n.y, s.x, s.y, a.x, a.y);
        }
        static pathQ(t) {
            var {
                current: e
            } = t;
            return {
                current: e,
                controlPoint: t.getAsControlPoint("x1", "y1"),
                currentPoint: t.getAsCurrentPoint()
            };
        }
        pathQ(t, e) {
            var {
                pathParser: r
            } = this, {
                current: i,
                controlPoint: n,
                currentPoint: s
            } = M.pathQ(r);
            r.addMarker(s, n, n), e.addQuadraticCurve(i.x, i.y, n.x, n.y, s.x, s.y), 
            t && t.quadraticCurveTo(n.x, n.y, s.x, s.y);
        }
        static pathT(t) {
            var {
                current: e
            } = t, r = t.getReflectedControlPoint();
            return t.control = r, {
                current: e,
                controlPoint: r,
                currentPoint: t.getAsCurrentPoint()
            };
        }
        pathT(t, e) {
            var {
                pathParser: r
            } = this, {
                current: i,
                controlPoint: n,
                currentPoint: s
            } = M.pathT(r);
            r.addMarker(s, n, n), e.addQuadraticCurve(i.x, i.y, n.x, n.y, s.x, s.y), 
            t && t.quadraticCurveTo(n.x, n.y, s.x, s.y);
        }
        static pathA(t) {
            var {
                current: e,
                command: r
            } = t, {
                rX: i,
                rY: n,
                xRot: s,
                lArcFlag: a,
                sweepFlag: o
            } = r, u = s * (Math.PI / 180), h = t.getAsCurrentPoint(), l = new k(Math.cos(u) * (e.x - h.x) / 2 + Math.sin(u) * (e.y - h.y) / 2, -Math.sin(u) * (e.x - h.x) / 2 + Math.cos(u) * (e.y - h.y) / 2), g = Math.pow(l.x, 2) / Math.pow(i, 2) + Math.pow(l.y, 2) / Math.pow(n, 2);
            g > 1 && (i *= Math.sqrt(g), n *= Math.sqrt(g));
            var c = (a === o ? -1 : 1) * Math.sqrt((Math.pow(i, 2) * Math.pow(n, 2) - Math.pow(i, 2) * Math.pow(l.y, 2) - Math.pow(n, 2) * Math.pow(l.x, 2)) / (Math.pow(i, 2) * Math.pow(l.y, 2) + Math.pow(n, 2) * Math.pow(l.x, 2)));
            isNaN(c) && (c = 0);
            var f = new k(c * i * l.y / n, c * -n * l.x / i), d = new k((e.x + h.x) / 2 + Math.cos(u) * f.x - Math.sin(u) * f.y, (e.y + h.y) / 2 + Math.sin(u) * f.x + Math.cos(u) * f.y), p = oi([ 1, 0 ], [ (l.x - f.x) / i, (l.y - f.y) / n ]), y = [ (l.x - f.x) / i, (l.y - f.y) / n ], x = [ (-l.x - f.x) / i, (-l.y - f.y) / n ], v = oi(y, x);
            return He(y, x) <= -1 && (v = Math.PI), He(y, x) >= 1 && (v = 0), {
                currentPoint: h,
                rX: i,
                rY: n,
                sweepFlag: o,
                xAxisRotation: u,
                centp: d,
                a1: p,
                ad: v
            };
        }
        pathA(t, e) {
            var {
                pathParser: r
            } = this, {
                currentPoint: i,
                rX: n,
                rY: s,
                sweepFlag: a,
                xAxisRotation: o,
                centp: u,
                a1: h,
                ad: l
            } = M.pathA(r), g = 1 - a ? 1 : -1, c = h + g * (l / 2), f = new k(u.x + n * Math.cos(c), u.y + s * Math.sin(c));
            if (r.addMarkerAngle(f, c - g * Math.PI / 2), r.addMarkerAngle(i, c - g * Math.PI), 
            e.addPoint(i.x, i.y), t && !isNaN(h) && !isNaN(l)) {
                var d = n > s ? n : s, p = n > s ? 1 : n / s, y = n > s ? s / n : 1;
                t.translate(u.x, u.y), t.rotate(o), t.scale(p, y), t.arc(0, 0, d, h, h + l, !!(1 - a)), 
                t.scale(1 / p, 1 / y), t.rotate(-o), t.translate(-u.x, -u.y);
            }
        }
        static pathZ(t) {
            t.current = t.start;
        }
        pathZ(t, e) {
            M.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
        }
    }, Qr = class extends M {
        constructor(t, e, r) {
            super(t, e, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), 
            this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
        }
    }, wt = class extends St {
        constructor(t, e, r) {
            super(t, e, new.target === wt || r), this.type = "text", this.x = 0, 
            this.y = 0, this.measureCache = -1;
        }
        setContext(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
            super.setContext(t, e);
            var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
            r && (t.textBaseline = r);
        }
        initializeCoordinates() {
            this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, 
            this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
        }
        getBoundingBox(t) {
            if (this.type !== "text") return this.getTElementBoundingBox(t);
            this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t);
            var e = null;
            return this.children.forEach((r, i) => {
                var n = this.getChildBoundingBox(t, this, this, i);
                e ? e.addBoundingBox(n) : e = n;
            }), e;
        }
        getFontSize() {
            var {
                document: t,
                parent: e
            } = this, r = Q.parse(t.ctx.font).fontSize;
            return e.getStyle("font-size").getNumber(r);
        }
        getTElementBoundingBox(t) {
            var e = this.getFontSize();
            return new nt(this.x, this.y - e, this.x + this.measureText(t), this.y);
        }
        getGlyph(t, e, r) {
            var i = e[r], n = null;
            if (t.isArabic) {
                var s = e.length, a = e[r - 1], o = e[r + 1], u = "isolated";
                if ((r === 0 || a === " ") && r < s - 1 && o !== " " && (u = "terminal"), 
                r > 0 && a !== " " && r < s - 1 && o !== " " && (u = "medial"), 
                r > 0 && a !== " " && (r === s - 1 || o === " ") && (u = "initial"), 
                t.glyphs[i] !== void 0) {
                    var h = t.glyphs[i];
                    n = h instanceof Qr ? h : h[u];
                }
            } else n = t.glyphs[i];
            return n || (n = t.missingGlyph), n;
        }
        getText() {
            return "";
        }
        getTextFromNode(t) {
            var e = t || this.node, r = Array.from(e.parentNode.childNodes), i = r.indexOf(e), n = r.length - 1, s = Pt(e.textContent || "");
            return i === 0 && (s = cs(s)), i === n && (s = gs(s)), s;
        }
        renderChildren(t) {
            if (this.type === "text") {
                this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t), 
                this.children.forEach((r, i) => {
                    this.renderChild(t, this, this, i);
                });
                var {
                    mouse: e
                } = this.document.screen;
                e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
            } else this.renderTElementChildren(t);
        }
        renderTElementChildren(t) {
            var {
                document: e,
                parent: r
            } = this, i = this.getText(), n = r.getStyle("font-family").getDefinition();
            if (n) for (var {
                unitsPerEm: s
            } = n.fontFace, a = Q.parse(e.ctx.font), o = r.getStyle("font-size").getNumber(a.fontSize), u = r.getStyle("font-style").getString(a.fontStyle), h = o / s, l = n.isRTL ? i.split("").reverse().join("") : i, g = tt(r.getAttribute("dx").getString()), c = l.length, f = 0; f < c; f++) {
                var d = this.getGlyph(n, l, f);
                t.translate(this.x, this.y), t.scale(h, -h);
                var p = t.lineWidth;
                t.lineWidth = t.lineWidth * s / o, u === "italic" && t.transform(1, 0, .4, 1, 0, 0), 
                d.render(t), u === "italic" && t.transform(1, 0, -.4, 1, 0, 0), 
                t.lineWidth = p, t.scale(1 / h, -1 / h), t.translate(-this.x, -this.y), 
                this.x += o * (d.horizAdvX || n.horizAdvX) / s, g[f] === void 0 || isNaN(g[f]) || (this.x += g[f]);
            } else {
                var {
                    x: y,
                    y: x
                } = this;
                t.fillStyle && t.fillText(i, y, x), t.strokeStyle && t.strokeText(i, y, x);
            }
        }
        applyAnchoring() {
            if (!(this.textChunkStart >= this.leafTexts.length)) {
                var t = this.leafTexts[this.textChunkStart], e = t.getStyle("text-anchor").getString("start"), r = 0;
                r = e === "start" ? t.x - this.minX : e === "end" ? t.x - this.maxX : t.x - (this.minX + this.maxX) / 2;
                for (var i = this.textChunkStart; i < this.leafTexts.length; i++) this.leafTexts[i].x += r;
                this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, 
                this.textChunkStart = this.leafTexts.length;
            }
        }
        adjustChildCoordinatesRecursive(t) {
            this.children.forEach((e, r) => {
                this.adjustChildCoordinatesRecursiveCore(t, this, this, r);
            }), this.applyAnchoring();
        }
        adjustChildCoordinatesRecursiveCore(t, e, r, i) {
            var n = r.children[i];
            n.children.length > 0 ? n.children.forEach((s, a) => {
                e.adjustChildCoordinatesRecursiveCore(t, e, n, a);
            }) : this.adjustChildCoordinates(t, e, r, i);
        }
        adjustChildCoordinates(t, e, r, i) {
            var n = r.children[i];
            if (typeof n.measureText != "function") return n;
            t.save(), n.setContext(t, !0);
            var s = n.getAttribute("x"), a = n.getAttribute("y"), o = n.getAttribute("dx"), u = n.getAttribute("dy"), h = n.getStyle("font-family").getDefinition(), l = !!h && h.isRTL;
            i === 0 && (s.hasValue() || s.setValue(n.getInheritedAttribute("x")), 
            a.hasValue() || a.setValue(n.getInheritedAttribute("y")), o.hasValue() || o.setValue(n.getInheritedAttribute("dx")), 
            u.hasValue() || u.setValue(n.getInheritedAttribute("dy")));
            var g = n.measureText(t);
            return l && (e.x -= g), s.hasValue() ? (e.applyAnchoring(), n.x = s.getPixels("x"), 
            o.hasValue() && (n.x += o.getPixels("x"))) : (o.hasValue() && (e.x += o.getPixels("x")), 
            n.x = e.x), e.x = n.x, l || (e.x += g), a.hasValue() ? (n.y = a.getPixels("y"), 
            u.hasValue() && (n.y += u.getPixels("y"))) : (u.hasValue() && (e.y += u.getPixels("y")), 
            n.y = e.y), e.y = n.y, e.leafTexts.push(n), e.minX = Math.min(e.minX, n.x, n.x + g), 
            e.maxX = Math.max(e.maxX, n.x, n.x + g), n.clearContext(t), t.restore(), 
            n;
        }
        getChildBoundingBox(t, e, r, i) {
            var n = r.children[i];
            if (typeof n.getBoundingBox != "function") return null;
            var s = n.getBoundingBox(t);
            return s ? (n.children.forEach((a, o) => {
                var u = e.getChildBoundingBox(t, e, n, o);
                s.addBoundingBox(u);
            }), s) : null;
        }
        renderChild(t, e, r, i) {
            var n = r.children[i];
            n.render(t), n.children.forEach((s, a) => {
                e.renderChild(t, e, n, a);
            });
        }
        measureText(t) {
            var {
                measureCache: e
            } = this;
            if (~e) return e;
            var r = this.getText(), i = this.measureTargetText(t, r);
            return this.measureCache = i, i;
        }
        measureTargetText(t, e) {
            if (!e.length) return 0;
            var {
                parent: r
            } = this, i = r.getStyle("font-family").getDefinition();
            if (i) {
                for (var n = this.getFontSize(), s = i.isRTL ? e.split("").reverse().join("") : e, a = tt(r.getAttribute("dx").getString()), o = s.length, u = 0, h = 0; h < o; h++) u += (this.getGlyph(i, s, h).horizAdvX || i.horizAdvX) * n / i.fontFace.unitsPerEm, 
                a[h] === void 0 || isNaN(a[h]) || (u += a[h]);
                return u;
            }
            if (!t.measureText) return 10 * e.length;
            t.save(), this.setContext(t, !0);
            var {
                width: l
            } = t.measureText(e);
            return this.clearContext(t), t.restore(), l;
        }
        getInheritedAttribute(t) {
            for (var e = this; e instanceof wt && e.isFirstChild(); ) {
                var r = e.parent.getAttribute(t);
                if (r.hasValue(!0)) return r.getValue("0");
                e = e.parent;
            }
            return null;
        }
    }, Ue = class extends wt {
        constructor(t, e, r) {
            super(t, e, new.target === Ue || r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
        }
        getText() {
            return this.text;
        }
    };
    class mv extends Ue {
        constructor() {
            super(...arguments), this.type = "textNode";
        }
    }
    Ht = class extends St {
        constructor() {
            super(...arguments), this.type = "svg", this.root = !1;
        }
        setContext(t) {
            var e, {
                document: r
            } = this, {
                screen: i,
                window: n
            } = r, s = t.canvas;
            if (i.setDefaults(t), s.style && t.font !== void 0 && n && n.getComputedStyle !== void 0) {
                t.font = n.getComputedStyle(s).getPropertyValue("font");
                var a = new T(r, "fontSize", Q.parse(t.font).fontSize);
                a.hasValue() && (r.rootEmSize = a.getPixels("y"), r.emSize = r.rootEmSize);
            }
            this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), 
            this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
            var {
                width: o,
                height: u
            } = i.viewPort;
            this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), 
            this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), 
            this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
            var h = this.getAttribute("refX"), l = this.getAttribute("refY"), g = this.getAttribute("viewBox"), c = g.hasValue() ? tt(g.getString()) : null, f = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", d = 0, p = 0, y = 0, x = 0;
            c && (d = c[0], p = c[1]), this.root || (o = this.getStyle("width").getPixels("x"), 
            u = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = d, 
            x = p, d = 0, p = 0)), i.viewPort.setCurrent(o, u), !this.node || this.parent && ((e = this.node.parentNode) === null || e === void 0 ? void 0 : e.nodeName) !== "foreignObject" || !this.getStyle("transform", !1, !0).hasValue() || this.getStyle("transform-origin", !1, !0).hasValue() || this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), 
            super.setContext(t), t.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), 
            c && (o = c[2], u = c[3]), r.setViewBox({
                ctx: t,
                aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                width: i.viewPort.width,
                desiredWidth: o,
                height: i.viewPort.height,
                desiredHeight: u,
                minX: d,
                minY: p,
                refX: h.getValue(),
                refY: l.getValue(),
                clip: f,
                clipX: y,
                clipY: x
            }), c && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(o, u));
        }
        clearContext(t) {
            super.clearContext(t), this.document.screen.viewPort.removeCurrent();
        }
        resize(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = this.getAttribute("width", !0), n = this.getAttribute("height", !0), s = this.getAttribute("viewBox"), a = this.getAttribute("style"), o = i.getNumber(0), u = n.getNumber(0);
            if (r) if (typeof r == "string") this.getAttribute("preserveAspectRatio", !0).setValue(r); else {
                var h = this.getAttribute("preserveAspectRatio");
                h.hasValue() && h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
            }
            if (i.setValue(t), n.setValue(e), s.hasValue() || s.setValue("0 0 ".concat(o || t, " ").concat(u || e)), 
            a.hasValue()) {
                var l = this.getStyle("width"), g = this.getStyle("height");
                l.hasValue() && l.setValue("".concat(t, "px")), g.hasValue() && g.setValue("".concat(e, "px"));
            }
        }
    }, ri = class extends M {
        constructor() {
            super(...arguments), this.type = "rect";
        }
        path(t) {
            var e = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), i = this.getStyle("width", !1, !0).getPixels("x"), n = this.getStyle("height", !1, !0).getPixels("y"), s = this.getAttribute("rx"), a = this.getAttribute("ry"), o = s.getPixels("x"), u = a.getPixels("y");
            if (s.hasValue() && !a.hasValue() && (u = o), a.hasValue() && !s.hasValue() && (o = u), 
            o = Math.min(o, i / 2), u = Math.min(u, n / 2), t) {
                var h = (Math.sqrt(2) - 1) / 3 * 4;
                t.beginPath(), n > 0 && i > 0 && (t.moveTo(e + o, r), t.lineTo(e + i - o, r), 
                t.bezierCurveTo(e + i - o + h * o, r, e + i, r + u - h * u, e + i, r + u), 
                t.lineTo(e + i, r + n - u), t.bezierCurveTo(e + i, r + n - u + h * u, e + i - o + h * o, r + n, e + i - o, r + n), 
                t.lineTo(e + o, r + n), t.bezierCurveTo(e + o - h * o, r + n, e, r + n - u + h * u, e, r + n - u), 
                t.lineTo(e, r + u), t.bezierCurveTo(e, r + u - h * u, e + o - h * o, r, e + o, r), 
                t.closePath());
            }
            return new nt(e, r, e + i, r + n);
        }
        getMarkers() {
            return null;
        }
    }, Pa = class extends M {
        constructor() {
            super(...arguments), this.type = "circle";
        }
        path(t) {
            var e = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), i = this.getAttribute("r").getPixels();
            return t && i > 0 && (t.beginPath(), t.arc(e, r, i, 0, 2 * Math.PI, !1), 
            t.closePath()), new nt(e - i, r - i, e + i, r + i);
        }
        getMarkers() {
            return null;
        }
    }, Ra = class extends M {
        constructor() {
            super(...arguments), this.type = "ellipse";
        }
        path(t) {
            var e = (Math.sqrt(2) - 1) / 3 * 4, r = this.getAttribute("rx").getPixels("x"), i = this.getAttribute("ry").getPixels("y"), n = this.getAttribute("cx").getPixels("x"), s = this.getAttribute("cy").getPixels("y");
            return t && r > 0 && i > 0 && (t.beginPath(), t.moveTo(n + r, s), t.bezierCurveTo(n + r, s + e * i, n + e * r, s + i, n, s + i), 
            t.bezierCurveTo(n - e * r, s + i, n - r, s + e * i, n - r, s), t.bezierCurveTo(n - r, s - e * i, n - e * r, s - i, n, s - i), 
            t.bezierCurveTo(n + e * r, s - i, n + r, s - e * i, n + r, s), t.closePath()), 
            new nt(n - r, s - i, n + r, s + i);
        }
        getMarkers() {
            return null;
        }
    }, Ba = class extends M {
        constructor() {
            super(...arguments), this.type = "line";
        }
        getPoints() {
            return [ new k(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new k(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y")) ];
        }
        path(t) {
            var [ {
                x: e,
                y: r
            }, {
                x: i,
                y: n
            } ] = this.getPoints();
            return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(i, n)), new nt(e, r, i, n);
        }
        getMarkers() {
            var [ t, e ] = this.getPoints(), r = t.angleTo(e);
            return [ [ t, r ], [ e, r ] ];
        }
    }, Kr = class extends M {
        constructor(t, e, r) {
            super(t, e, r), this.type = "polyline", this.points = [], this.points = k.parsePath(this.getAttribute("points").getString());
        }
        path(t) {
            var {
                points: e
            } = this, [ {
                x: r,
                y: i
            } ] = e, n = new nt(r, i);
            return t && (t.beginPath(), t.moveTo(r, i)), e.forEach(s => {
                var {
                    x: a,
                    y: o
                } = s;
                n.addPoint(a, o), t && t.lineTo(a, o);
            }), n;
        }
        getMarkers() {
            var {
                points: t
            } = this, e = t.length - 1, r = [];
            return t.forEach((i, n) => {
                n !== e && r.push([ i, i.angleTo(t[n + 1]) ]);
            }), r.length > 0 && r.push([ t[t.length - 1], r[r.length - 1][1] ]), 
            r;
        }
    }, qa = class extends Kr {
        constructor() {
            super(...arguments), this.type = "polygon";
        }
        path(t) {
            var e = super.path(t), [ {
                x: r,
                y: i
            } ] = this.points;
            return t && (t.lineTo(r, i), t.closePath()), e;
        }
    }, Ya = class extends V {
        constructor() {
            super(...arguments), this.type = "pattern";
        }
        createPattern(t, e, r) {
            var i = this.getStyle("width").getPixels("x", !0), n = this.getStyle("height").getPixels("y", !0), s = new Ht(this.document, null);
            s.attributes.viewBox = new T(this.document, "viewBox", this.getAttribute("viewBox").getValue()), 
            s.attributes.width = new T(this.document, "width", "".concat(i, "px")), 
            s.attributes.height = new T(this.document, "height", "".concat(n, "px")), 
            s.attributes.transform = new T(this.document, "transform", this.getAttribute("patternTransform").getValue()), 
            s.children = this.children;
            var a = this.document.createCanvas(i, n), o = a.getContext("2d"), u = this.getAttribute("x"), h = this.getAttribute("y");
            u.hasValue() && h.hasValue() && o.translate(u.getPixels("x", !0), h.getPixels("y", !0)), 
            r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
            for (var l = -1; l <= 1; l++) for (var g = -1; g <= 1; g++) o.save(), 
            s.attributes.x = new T(this.document, "x", l * a.width), s.attributes.y = new T(this.document, "y", g * a.height), 
            s.render(o), o.restore();
            return t.createPattern(a, "repeat");
        }
    }, Ua = class extends V {
        constructor() {
            super(...arguments), this.type = "marker";
        }
        render(t, e, r) {
            if (e) {
                var {
                    x: i,
                    y: n
                } = e, s = this.getAttribute("orient").getString("auto"), a = this.getAttribute("markerUnits").getString("strokeWidth");
                t.translate(i, n), s === "auto" && t.rotate(r), a === "strokeWidth" && t.scale(t.lineWidth, t.lineWidth), 
                t.save();
                var o = new Ht(this.document, null);
                o.type = this.type, o.attributes.viewBox = new T(this.document, "viewBox", this.getAttribute("viewBox").getValue()), 
                o.attributes.refX = new T(this.document, "refX", this.getAttribute("refX").getValue()), 
                o.attributes.refY = new T(this.document, "refY", this.getAttribute("refY").getValue()), 
                o.attributes.width = new T(this.document, "width", this.getAttribute("markerWidth").getValue()), 
                o.attributes.height = new T(this.document, "height", this.getAttribute("markerHeight").getValue()), 
                o.attributes.overflow = new T(this.document, "overflow", this.getAttribute("overflow").getValue()), 
                o.attributes.fill = new T(this.document, "fill", this.getAttribute("fill").getColor("black")), 
                o.attributes.stroke = new T(this.document, "stroke", this.getAttribute("stroke").getValue("none")), 
                o.children = this.children, o.render(t), t.restore(), a === "strokeWidth" && t.scale(1 / t.lineWidth, 1 / t.lineWidth), 
                s === "auto" && t.rotate(-r), t.translate(-i, -n);
            }
        }
    }, Na = class extends V {
        constructor() {
            super(...arguments), this.type = "defs";
        }
        render() {}
    }, je = class extends St {
        constructor() {
            super(...arguments), this.type = "g";
        }
        getBoundingBox(t) {
            var e = new nt();
            return this.children.forEach(r => {
                e.addBoundingBox(r.getBoundingBox(t));
            }), e;
        }
    }, $r = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.attributesToInherit = [ "gradientUnits" ], this.stops = [];
            var {
                stops: i,
                children: n
            } = this;
            n.forEach(s => {
                s.type === "stop" && i.push(s);
            });
        }
        getGradientUnits() {
            return this.getAttribute("gradientUnits").getString("objectBoundingBox");
        }
        createGradient(t, e, r) {
            var i = this;
            this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), 
            this.inheritStopContainer(i));
            var {
                stops: n
            } = i, s = this.getGradient(t, e);
            if (!s) return this.addParentOpacity(r, n[n.length - 1].color);
            if (n.forEach(p => {
                s.addColorStop(p.offset, this.addParentOpacity(r, p.color));
            }), this.getAttribute("gradientTransform").hasValue()) {
                var {
                    document: a
                } = this, {
                    MAX_VIRTUAL_PIXELS: o,
                    viewPort: u
                } = a.screen, [ h ] = u.viewPorts, l = new ri(a, null);
                l.attributes.x = new T(a, "x", -o / 3), l.attributes.y = new T(a, "y", -o / 3), 
                l.attributes.width = new T(a, "width", o), l.attributes.height = new T(a, "height", o);
                var g = new je(a, null);
                g.attributes.transform = new T(a, "transform", this.getAttribute("gradientTransform").getValue()), 
                g.children = [ l ];
                var c = new Ht(a, null);
                c.attributes.x = new T(a, "x", 0), c.attributes.y = new T(a, "y", 0), 
                c.attributes.width = new T(a, "width", h.width), c.attributes.height = new T(a, "height", h.height), 
                c.children = [ g ];
                var f = a.createCanvas(h.width, h.height), d = f.getContext("2d");
                return d.fillStyle = s, c.render(d), d.createPattern(f, "no-repeat");
            }
            return s;
        }
        inheritStopContainer(t) {
            this.attributesToInherit.forEach(e => {
                !this.getAttribute(e).hasValue() && t.getAttribute(e).hasValue() && this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
            });
        }
        addParentOpacity(t, e) {
            return t.hasValue() ? new T(this.document, "color", e).addOpacity(t).getColor() : e;
        }
    }, za = class extends $r {
        constructor(t, e, r) {
            super(t, e, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
        }
        getGradient(t, e) {
            var r = this.getGradientUnits() === "objectBoundingBox", i = r ? e.getBoundingBox(t) : null;
            if (r && !i) return null;
            this.getAttribute("x1").hasValue() || this.getAttribute("y1").hasValue() || this.getAttribute("x2").hasValue() || this.getAttribute("y2").hasValue() || (this.getAttribute("x1", !0).setValue(0), 
            this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), 
            this.getAttribute("y2", !0).setValue(0));
            var n = r ? i.x + i.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), s = r ? i.y + i.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), a = r ? i.x + i.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), o = r ? i.y + i.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
            return n === a && s === o ? null : t.createLinearGradient(n, s, a, o);
        }
    }, Wa = class extends $r {
        constructor(t, e, r) {
            super(t, e, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
        }
        getGradient(t, e) {
            var r = this.getGradientUnits() === "objectBoundingBox", i = e.getBoundingBox(t);
            if (r && !i) return null;
            this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), 
            this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), 
            this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
            var n = r ? i.x + i.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), s = r ? i.y + i.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), a = n, o = s;
            this.getAttribute("fx").hasValue() && (a = r ? i.x + i.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), 
            this.getAttribute("fy").hasValue() && (o = r ? i.y + i.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
            var u = r ? (i.width + i.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), h = this.getAttribute("fr").getPixels();
            return t.createRadialGradient(a, o, h, n, s, u);
        }
    }, Ja = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "stop";
            var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), n = this.getStyle("stop-opacity"), s = this.getStyle("stop-color", !0);
            s.getString() === "" && s.setValue("#000"), n.hasValue() && (s = s.addOpacity(n)), 
            this.offset = i, this.color = s.getColor();
        }
    }, De = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "animate", this.duration = 0, this.initialValue = null, 
            this.initialUnits = "", this.removed = !1, this.frozen = !1, t.screen.animations.push(this), 
            this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), 
            this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), 
            this.values = new T(t, "values", null);
            var i = this.getAttribute("values");
            i.hasValue() && this.values.setValue(i.getString().split(";"));
        }
        getProperty() {
            var t = this.getAttribute("attributeType").getString(), e = this.getAttribute("attributeName").getString();
            return t === "CSS" ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
        }
        calcValue() {
            var {
                initialUnits: t
            } = this, {
                progress: e,
                from: r,
                to: i
            } = this.getProgress(), n = r.getNumber() + (i.getNumber() - r.getNumber()) * e;
            return t === "%" && (n *= 100), "".concat(n).concat(t);
        }
        update(t) {
            var {
                parent: e
            } = this, r = this.getProperty();
            if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), 
            this.duration > this.maxDuration) {
                var i = this.getAttribute("fill").getString("remove");
                if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") this.duration = 0; else if (i !== "freeze" || this.frozen) {
                    if (i === "remove" && !this.removed) return this.removed = !0, 
                    r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue), 
                    !0;
                } else this.frozen = !0, e.animationFrozen = !0, e.animationFrozenValue = r.getString();
                return !1;
            }
            this.duration += t;
            var n = !1;
            if (this.begin < this.duration) {
                var s = this.calcValue(), a = this.getAttribute("type");
                if (a.hasValue()) {
                    var o = a.getString();
                    s = "".concat(o, "(").concat(s, ")");
                }
                r.setValue(s), n = !0;
            }
            return n;
        }
        getProgress() {
            var {
                document: t,
                values: e
            } = this, r = {
                progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
            };
            if (e.hasValue()) {
                var i = r.progress * (e.getValue().length - 1), n = Math.floor(i), s = Math.ceil(i);
                r.from = new T(t, "from", parseFloat(e.getValue()[n])), r.to = new T(t, "to", parseFloat(e.getValue()[s])), 
                r.progress = (i - n) / (s - n);
            } else r.from = this.from, r.to = this.to;
            return r;
        }
    }, Ca = class extends De {
        constructor() {
            super(...arguments), this.type = "animateColor";
        }
        calcValue() {
            var {
                progress: t,
                from: e,
                to: r
            } = this.getProgress(), i = new na(e.getColor()), n = new na(r.getColor());
            if (i.ok && n.ok) {
                var s = i.r + (n.r - i.r) * t, a = i.g + (n.g - i.g) * t, o = i.b + (n.b - i.b) * t;
                return "rgb(".concat(Math.floor(s), ", ").concat(Math.floor(a), ", ").concat(Math.floor(o), ")");
            }
            return this.getAttribute("from").getColor();
        }
    }, Ea = class extends De {
        constructor() {
            super(...arguments), this.type = "animateTransform";
        }
        calcValue() {
            var {
                progress: t,
                from: e,
                to: r
            } = this.getProgress(), i = tt(e.getString()), n = tt(r.getString()), s = i.map((a, o) => a + (n[o] - a) * t).join(" ");
            return s;
        }
    }, Da = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
            var {
                definitions: i
            } = t, {
                children: n
            } = this;
            for (var s of n) switch (s.type) {
              case "font-face":
                this.fontFace = s;
                var a = s.getStyle("font-family");
                a.hasValue() && (i[a.getString()] = this);
                break;

              case "missing-glyph":
                this.missingGlyph = s;
                break;

              case "glyph":
                var o = s;
                o.arabicForm ? (this.isRTL = !0, this.isArabic = !0, this.glyphs[o.unicode] === void 0 && (this.glyphs[o.unicode] = {}), 
                this.glyphs[o.unicode][o.arabicForm] = o) : this.glyphs[o.unicode] = o;
            }
        }
        render() {}
    }, Fa = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), 
            this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
        }
    }, Ha = class extends M {
        constructor() {
            super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
        }
    }, es = class extends wt {
        constructor() {
            super(...arguments), this.type = "tref";
        }
        getText() {
            var t = this.getHrefAttribute().getDefinition();
            if (t) {
                var e = t.children[0];
                if (e) return e.getText();
            }
            return "";
        }
    }, Aa = class extends wt {
        constructor(t, e, r) {
            super(t, e, r), this.type = "a";
            var {
                childNodes: i
            } = e, n = i[0], s = i.length > 0 && Array.from(i).every(a => a.nodeType === 3);
            this.hasText = s, this.text = s ? this.getTextFromNode(n) : "";
        }
        getText() {
            return this.text;
        }
        renderChildren(t) {
            if (this.hasText) {
                super.renderChildren(t);
                var {
                    document: e,
                    x: r,
                    y: i
                } = this, {
                    mouse: n
                } = e.screen, s = new T(e, "fontSize", Q.parse(e.ctx.font).fontSize);
                n.isWorking() && n.checkBoundingBox(this, new nt(r, i - s.getPixels("y"), r + this.measureText(t), i));
            } else if (this.children.length > 0) {
                var a = new je(this.document, null);
                a.children = this.children, a.parent = this, a.render(t);
            }
        }
        onClick() {
            var {
                window: t
            } = this.document;
            t && t.open(this.getHrefAttribute().getString());
        }
        onMouseMove() {
            this.document.ctx.canvas.style.cursor = "pointer";
        }
    };
    function Hh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })), r.push.apply(r, i);
        }
        return r;
    }
    function Pr(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Hh(Object(r), !0).forEach(function(i) {
                $n(t, i, r[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Hh(Object(r)).forEach(function(i) {
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
            });
        }
        return t;
    }
    rs = class extends wt {
        constructor(t, e, r) {
            super(t, e, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, 
            this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], 
            this.measuresCache = new Map([ [ "", 0 ] ]);
            var i = this.getHrefAttribute().getDefinition();
            this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(i);
        }
        getText() {
            return this.text;
        }
        path(t) {
            var {
                dataArray: e
            } = this;
            t && t.beginPath(), e.forEach(r => {
                var {
                    type: i,
                    points: n
                } = r;
                switch (i) {
                  case E.LINE_TO:
                    t && t.lineTo(n[0], n[1]);
                    break;

                  case E.MOVE_TO:
                    t && t.moveTo(n[0], n[1]);
                    break;

                  case E.CURVE_TO:
                    t && t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                    break;

                  case E.QUAD_TO:
                    t && t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                    break;

                  case E.ARC:
                    var [ s, a, o, u, h, l, g, c ] = n, f = o > u ? o : u, d = o > u ? 1 : o / u, p = o > u ? u / o : 1;
                    t && (t.translate(s, a), t.rotate(g), t.scale(d, p), t.arc(0, 0, f, h, h + l, !!(1 - c)), 
                    t.scale(1 / d, 1 / p), t.rotate(-g), t.translate(-s, -a));
                    break;

                  case E.CLOSE_PATH:
                    t && t.closePath();
                }
            });
        }
        renderChildren(t) {
            this.setTextData(t), t.save();
            var e = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), {
                glyphInfo: i
            } = this, n = t.fillStyle;
            e === "underline" && t.beginPath(), i.forEach((s, a) => {
                var {
                    p0: o,
                    p1: u,
                    rotation: h,
                    text: l
                } = s;
                t.save(), t.translate(o.x, o.y), t.rotate(h), t.fillStyle && t.fillText(l, 0, 0), 
                t.strokeStyle && t.strokeText(l, 0, 0), t.restore(), e === "underline" && (a === 0 && t.moveTo(o.x, o.y + r / 8), 
                t.lineTo(u.x, u.y + r / 5));
            }), e === "underline" && (t.lineWidth = r / 20, t.strokeStyle = n, t.stroke(), 
            t.closePath()), t.restore();
        }
        getLetterSpacingAt() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return this.letterSpacingCache[t] || 0;
        }
        findSegmentToFitChar(t, e, r, i, n, s, a, o, u) {
            var h = s, l = this.measureText(t, o);
            o === " " && e === "justify" && r < i && (l += (i - r) / n), u > -1 && (h += this.getLetterSpacingAt(u));
            var g = this.textHeight / 20, c = this.getEquidistantPointOnPath(h, g, 0), f = this.getEquidistantPointOnPath(h + l, g, 0), d = {
                p0: c,
                p1: f
            }, p = c && f ? Math.atan2(f.y - c.y, f.x - c.x) : 0;
            if (a) {
                var y = Math.cos(Math.PI / 2 + p) * a, x = Math.cos(-p) * a;
                d.p0 = Pr(Pr({}, c), {}, {
                    x: c.x + y,
                    y: c.y + x
                }), d.p1 = Pr(Pr({}, f), {}, {
                    x: f.x + y,
                    y: f.y + x
                });
            }
            return {
                offset: h += l,
                segment: d,
                rotation: p
            };
        }
        measureText(t, e) {
            var {
                measuresCache: r
            } = this, i = e || this.getText();
            if (r.has(i)) return r.get(i);
            var n = this.measureTargetText(t, i);
            return r.set(i, n), n;
        }
        setTextData(t) {
            if (!this.glyphInfo) {
                var e = this.getText(), r = e.split(""), i = e.split(" ").length - 1, n = this.parent.getAttribute("dx").split().map(b => b.getPixels("x")), s = this.parent.getAttribute("dy").getPixels("y"), a = this.parent.getStyle("text-anchor").getString("start"), o = this.getStyle("letter-spacing"), u = this.parent.getStyle("letter-spacing"), h = 0;
                o.hasValue() && o.getValue() !== "inherit" ? o.hasValue() && o.getValue() !== "initial" && o.getValue() !== "unset" && (h = o.getPixels()) : h = u.getPixels();
                var l = [], g = e.length;
                this.letterSpacingCache = l;
                for (var c = 0; c < g; c++) l.push(n[c] !== void 0 ? n[c] : h);
                var f = l.reduce((b, A, S) => S === 0 ? 0 : b + A || 0, 0), d = this.measureText(t), p = Math.max(d + f, 0);
                this.textWidth = d, this.textHeight = this.getFontSize(), this.glyphInfo = [];
                var y = this.getPathLength(), x = this.getStyle("startOffset").getNumber(0) * y, v = 0;
                a !== "middle" && a !== "center" || (v = -p / 2), a !== "end" && a !== "right" || (v = -p), 
                v += x, r.forEach((b, A) => {
                    var {
                        offset: S,
                        segment: w,
                        rotation: O
                    } = this.findSegmentToFitChar(t, a, p, y, i, v, s, b, A);
                    v = S, w.p0 && w.p1 && this.glyphInfo.push({
                        text: r[A],
                        p0: w.p0,
                        p1: w.p1,
                        rotation: O
                    });
                });
            }
        }
        parsePathData(t) {
            if (this.pathLength = -1, !t) return [];
            var e = [], {
                pathParser: r
            } = t;
            for (r.reset(); !r.isEnd(); ) {
                var {
                    current: i
                } = r, n = i ? i.x : 0, s = i ? i.y : 0, a = r.next(), o = a.type, u = [];
                switch (a.type) {
                  case E.MOVE_TO:
                    this.pathM(r, u);
                    break;

                  case E.LINE_TO:
                    o = this.pathL(r, u);
                    break;

                  case E.HORIZ_LINE_TO:
                    o = this.pathH(r, u);
                    break;

                  case E.VERT_LINE_TO:
                    o = this.pathV(r, u);
                    break;

                  case E.CURVE_TO:
                    this.pathC(r, u);
                    break;

                  case E.SMOOTH_CURVE_TO:
                    o = this.pathS(r, u);
                    break;

                  case E.QUAD_TO:
                    this.pathQ(r, u);
                    break;

                  case E.SMOOTH_QUAD_TO:
                    o = this.pathT(r, u);
                    break;

                  case E.ARC:
                    u = this.pathA(r);
                    break;

                  case E.CLOSE_PATH:
                    M.pathZ(r);
                }
                a.type !== E.CLOSE_PATH ? e.push({
                    type: o,
                    points: u,
                    start: {
                        x: n,
                        y: s
                    },
                    pathLength: this.calcLength(n, s, o, u)
                }) : e.push({
                    type: E.CLOSE_PATH,
                    points: [],
                    pathLength: 0
                });
            }
            return e;
        }
        pathM(t, e) {
            var {
                x: r,
                y: i
            } = M.pathM(t).point;
            e.push(r, i);
        }
        pathL(t, e) {
            var {
                x: r,
                y: i
            } = M.pathL(t).point;
            return e.push(r, i), E.LINE_TO;
        }
        pathH(t, e) {
            var {
                x: r,
                y: i
            } = M.pathH(t).point;
            return e.push(r, i), E.LINE_TO;
        }
        pathV(t, e) {
            var {
                x: r,
                y: i
            } = M.pathV(t).point;
            return e.push(r, i), E.LINE_TO;
        }
        pathC(t, e) {
            var {
                point: r,
                controlPoint: i,
                currentPoint: n
            } = M.pathC(t);
            e.push(r.x, r.y, i.x, i.y, n.x, n.y);
        }
        pathS(t, e) {
            var {
                point: r,
                controlPoint: i,
                currentPoint: n
            } = M.pathS(t);
            return e.push(r.x, r.y, i.x, i.y, n.x, n.y), E.CURVE_TO;
        }
        pathQ(t, e) {
            var {
                controlPoint: r,
                currentPoint: i
            } = M.pathQ(t);
            e.push(r.x, r.y, i.x, i.y);
        }
        pathT(t, e) {
            var {
                controlPoint: r,
                currentPoint: i
            } = M.pathT(t);
            return e.push(r.x, r.y, i.x, i.y), E.QUAD_TO;
        }
        pathA(t) {
            var {
                rX: e,
                rY: r,
                sweepFlag: i,
                xAxisRotation: n,
                centp: s,
                a1: a,
                ad: o
            } = M.pathA(t);
            return i === 0 && o > 0 && (o -= 2 * Math.PI), i === 1 && o < 0 && (o += 2 * Math.PI), 
            [ s.x, s.y, e, r, a, o, n, i ];
        }
        calcLength(t, e, r, i) {
            var n = 0, s = null, a = null, o = 0;
            switch (r) {
              case E.LINE_TO:
                return this.getLineLength(t, e, i[0], i[1]);

              case E.CURVE_TO:
                for (n = 0, s = this.getPointOnCubicBezier(0, t, e, i[0], i[1], i[2], i[3], i[4], i[5]), 
                o = .01; o <= 1; o += .01) a = this.getPointOnCubicBezier(o, t, e, i[0], i[1], i[2], i[3], i[4], i[5]), 
                n += this.getLineLength(s.x, s.y, a.x, a.y), s = a;
                return n;

              case E.QUAD_TO:
                for (n = 0, s = this.getPointOnQuadraticBezier(0, t, e, i[0], i[1], i[2], i[3]), 
                o = .01; o <= 1; o += .01) a = this.getPointOnQuadraticBezier(o, t, e, i[0], i[1], i[2], i[3]), 
                n += this.getLineLength(s.x, s.y, a.x, a.y), s = a;
                return n;

              case E.ARC:
                n = 0;
                var u = i[4], h = i[5], l = i[4] + h, g = Math.PI / 180;
                if (Math.abs(u - l) < g && (g = Math.abs(u - l)), s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), 
                h < 0) for (o = u - g; o > l; o -= g) a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0), 
                n += this.getLineLength(s.x, s.y, a.x, a.y), s = a; else for (o = u + g; o < l; o += g) a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], o, 0), 
                n += this.getLineLength(s.x, s.y, a.x, a.y), s = a;
                return a = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), 
                n += this.getLineLength(s.x, s.y, a.x, a.y);
            }
            return 0;
        }
        getPointOnLine(t, e, r, i, n) {
            var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, o = (n - r) / (i - e + Ct), u = Math.sqrt(t * t / (1 + o * o));
            i < e && (u *= -1);
            var h = o * u, l = null;
            if (i === e) l = {
                x: s,
                y: a + h
            }; else if ((a - r) / (s - e + Ct) === o) l = {
                x: s + u,
                y: a + h
            }; else {
                var g, c, f = this.getLineLength(e, r, i, n);
                if (f < Ct) return null;
                var d = (s - e) * (i - e) + (a - r) * (n - r);
                g = e + (d /= f * f) * (i - e), c = r + d * (n - r);
                var p = this.getLineLength(s, a, g, c), y = Math.sqrt(t * t - p * p);
                u = Math.sqrt(y * y / (1 + o * o)), i < e && (u *= -1), l = {
                    x: g + u,
                    y: c + (h = o * u)
                };
            }
            return l;
        }
        getPointOnPath(t) {
            var e = this.getPathLength(), r = 0, i = null;
            if (t < -5e-5 || t - 5e-5 > e) return null;
            var {
                dataArray: n
            } = this;
            for (var s of n) {
                if (!s || !(s.pathLength < 5e-5 || r + s.pathLength + 5e-5 < t)) {
                    var a = t - r, o = 0;
                    switch (s.type) {
                      case E.LINE_TO:
                        i = this.getPointOnLine(a, s.start.x, s.start.y, s.points[0], s.points[1], s.start.x, s.start.y);
                        break;

                      case E.ARC:
                        var u = s.points[4], h = s.points[5], l = s.points[4] + h;
                        if (o = u + a / s.pathLength * h, h < 0 && o < l || h >= 0 && o > l) break;
                        i = this.getPointOnEllipticalArc(s.points[0], s.points[1], s.points[2], s.points[3], o, s.points[6]);
                        break;

                      case E.CURVE_TO:
                        (o = a / s.pathLength) > 1 && (o = 1), i = this.getPointOnCubicBezier(o, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3], s.points[4], s.points[5]);
                        break;

                      case E.QUAD_TO:
                        (o = a / s.pathLength) > 1 && (o = 1), i = this.getPointOnQuadraticBezier(o, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3]);
                    }
                    if (i) return i;
                    break;
                }
                r += s.pathLength;
            }
            return null;
        }
        getLineLength(t, e, r, i) {
            return Math.sqrt((r - t) * (r - t) + (i - e) * (i - e));
        }
        getPathLength() {
            return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((t, e) => e.pathLength > 0 ? t + e.pathLength : t, 0)), 
            this.pathLength;
        }
        getPointOnCubicBezier(t, e, r, i, n, s, a, o, u) {
            return {
                x: o * Xr(t) + s * Yr(t) + i * qr(t) + e * Wr(t),
                y: u * Xr(t) + a * Yr(t) + n * qr(t) + r * Wr(t)
            };
        }
        getPointOnQuadraticBezier(t, e, r, i, n, s, a) {
            return {
                x: s * Jr(t) + i * ti(t) + e * ei(t),
                y: a * Jr(t) + n * ti(t) + r * ei(t)
            };
        }
        getPointOnEllipticalArc(t, e, r, i, n, s) {
            var a = Math.cos(s), o = Math.sin(s), u = r * Math.cos(n), h = i * Math.sin(n);
            return {
                x: t + (u * a - h * o),
                y: e + (u * o + h * a)
            };
        }
        buildEquidistantCache(t, e) {
            var r = this.getPathLength(), i = e || .25, n = t || r / 100;
            if (!this.equidistantCache || this.equidistantCache.step !== n || this.equidistantCache.precision !== i) {
                this.equidistantCache = {
                    step: n,
                    precision: i,
                    points: []
                };
                for (var s = 0, a = 0; a <= r; a += i) {
                    var o = this.getPointOnPath(a), u = this.getPointOnPath(a + i);
                    o && u && (s += this.getLineLength(o.x, o.y, u.x, u.y)) >= n && (this.equidistantCache.points.push({
                        x: o.x,
                        y: o.y,
                        distance: a
                    }), s -= n);
                }
            }
        }
        getEquidistantPointOnPath(t, e, r) {
            if (this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5) return null;
            var i = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
            return this.equidistantCache.points[i] || null;
        }
    };
    var yv = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
    ja = class extends St {
        constructor(t, e, r) {
            super(t, e, r), this.type = "image", this.loaded = !1;
            var i = this.getHrefAttribute().getString();
            if (i) {
                var n = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
                t.images.push(this), n ? this.loadSvg(i) : this.loadImage(i), this.isSvg = n;
            }
        }
        loadImage(t) {
            var e = this;
            return mt(function*() {
                try {
                    var r = yield e.document.createImage(t);
                    e.image = r;
                } catch {}
                e.loaded = !0;
            })();
        }
        loadSvg(t) {
            var e = this;
            return mt(function*() {
                var r = yv.exec(t);
                if (r) {
                    var i = r[5];
                    r[4] === "base64" ? e.image = atob(i) : e.image = decodeURIComponent(i);
                } else try {
                    var n = yield e.document.fetch(t), s = yield n.text();
                    e.image = s;
                } catch {}
                e.loaded = !0;
            })();
        }
        renderChildren(t) {
            var {
                document: e,
                image: r,
                loaded: i
            } = this, n = this.getAttribute("x").getPixels("x"), s = this.getAttribute("y").getPixels("y"), a = this.getStyle("width").getPixels("x"), o = this.getStyle("height").getPixels("y");
            if (i && r && a && o) {
                if (t.save(), t.translate(n, s), this.isSvg) {
                    var u = e.canvg.forkString(t, this.image, {
                        ignoreMouse: !0,
                        ignoreAnimation: !0,
                        ignoreDimensions: !0,
                        ignoreClear: !0,
                        offsetX: 0,
                        offsetY: 0,
                        scaleWidth: a,
                        scaleHeight: o
                    });
                    u.document.documentElement.parent = this, u.render();
                } else {
                    var h = this.image;
                    e.setViewBox({
                        ctx: t,
                        aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                        width: a,
                        desiredWidth: h.width,
                        height: o,
                        desiredHeight: h.height
                    }), this.loaded && (h.complete === void 0 || h.complete) && t.drawImage(h, 0, 0);
                }
                t.restore();
            }
        }
        getBoundingBox() {
            var t = this.getAttribute("x").getPixels("x"), e = this.getAttribute("y").getPixels("y"), r = this.getStyle("width").getPixels("x"), i = this.getStyle("height").getPixels("y");
            return new nt(t, e, t + r, e + i);
        }
    }, ts = class extends St {
        constructor() {
            super(...arguments), this.type = "symbol";
        }
        render(t) {}
    }, Qa = class {
        constructor(t) {
            this.document = t, this.loaded = !1, t.fonts.push(this);
        }
        load(t, e) {
            var r = this;
            return mt(function*() {
                try {
                    var {
                        document: i
                    } = r, n = (yield i.canvg.parser.load(e)).getElementsByTagName("font");
                    Array.from(n).forEach(s => {
                        var a = i.createElement(s);
                        i.definitions[t] = a;
                    });
                } catch {}
                r.loaded = !0;
            })();
        }
    }, ni = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "style";
            var i = Pt(Array.from(e.childNodes).map(n => n.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, ""));
            i.split("}").forEach(n => {
                var s = n.trim();
                if (s) {
                    var a = s.split("{"), o = a[0].split(","), u = a[1].split(";");
                    o.forEach(h => {
                        var l = h.trim();
                        if (l) {
                            var g = t.styles[l] || {};
                            if (u.forEach(f => {
                                var d = f.indexOf(":"), p = f.substr(0, d).trim(), y = f.substr(d + 1, f.length - d).trim();
                                p && y && (g[p] = new T(t, p, y));
                            }), t.styles[l] = g, t.stylesSpecificity[l] = us(l), 
                            l === "@font-face") {
                                var c = g["font-family"].getString().replace(/"|'/g, "");
                                g.src.getString().split(",").forEach(f => {
                                    if (f.indexOf('format("svg")') > 0) {
                                        var d = ai(f);
                                        d && new Qa(t).load(c, d);
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
    }, ni.parseExternalUrl = ai, ss = class extends St {
        constructor() {
            super(...arguments), this.type = "use";
        }
        setContext(t) {
            super.setContext(t);
            var e = this.getAttribute("x"), r = this.getAttribute("y");
            e.hasValue() && t.translate(e.getPixels("x"), 0), r.hasValue() && t.translate(0, r.getPixels("y"));
        }
        path(t) {
            var {
                element: e
            } = this;
            e && e.path(t);
        }
        renderChildren(t) {
            var {
                document: e,
                element: r
            } = this;
            if (r) {
                var i = r;
                if (r.type === "symbol" && ((i = new Ht(e, null)).attributes.viewBox = new T(e, "viewBox", r.getAttribute("viewBox").getString()), 
                i.attributes.preserveAspectRatio = new T(e, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), 
                i.attributes.overflow = new T(e, "overflow", r.getAttribute("overflow").getString()), 
                i.children = r.children, r.styles.opacity = new T(e, "opacity", this.calculateOpacity())), 
                i.type === "svg") {
                    var n = this.getStyle("width", !1, !0), s = this.getStyle("height", !1, !0);
                    n.hasValue() && (i.attributes.width = new T(e, "width", n.getString())), 
                    s.hasValue() && (i.attributes.height = new T(e, "height", s.getString()));
                }
                var a = i.parent;
                i.parent = this, i.render(t), i.parent = a;
            }
        }
        getBoundingBox(t) {
            var {
                element: e
            } = this;
            return e ? e.getBoundingBox(t) : null;
        }
        elementTransform() {
            var {
                document: t,
                element: e
            } = this;
            return Et.fromElement(t, e);
        }
        get element() {
            return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), 
            this.cachedElement;
        }
    };
    function Mr(t, e, r, i, n, s) {
        return t[r * i * 4 + 4 * e + s];
    }
    function Nr(t, e, r, i, n, s, a) {
        t[r * i * 4 + 4 * e + s] = a;
    }
    function z(t, e, r) {
        return t[e] * r;
    }
    function xt(t, e, r, i) {
        return e + Math.cos(t) * r + Math.sin(t) * i;
    }
    Gr = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "feColorMatrix";
            var i = tt(this.getAttribute("values").getString());
            switch (this.getAttribute("type").getString("matrix")) {
              case "saturate":
                var n = i[0];
                i = [ .213 + .787 * n, .715 - .715 * n, .072 - .072 * n, 0, 0, .213 - .213 * n, .715 + .285 * n, .072 - .072 * n, 0, 0, .213 - .213 * n, .715 - .715 * n, .072 + .928 * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ];
                break;

              case "hueRotate":
                var s = i[0] * Math.PI / 180;
                i = [ xt(s, .213, .787, -.213), xt(s, .715, -.715, -.715), xt(s, .072, -.072, .928), 0, 0, xt(s, .213, -.213, .143), xt(s, .715, .285, .14), xt(s, .072, -.072, -.283), 0, 0, xt(s, .213, -.213, -.787), xt(s, .715, -.715, .715), xt(s, .072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ];
                break;

              case "luminanceToAlpha":
                i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1 ];
            }
            this.matrix = i, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
        }
        apply(t, e, r, i, n) {
            for (var {
                includeOpacity: s,
                matrix: a
            } = this, o = t.getImageData(0, 0, i, n), u = 0; u < n; u++) for (var h = 0; h < i; h++) {
                var l = Mr(o.data, h, u, i, 0, 0), g = Mr(o.data, h, u, i, 0, 1), c = Mr(o.data, h, u, i, 0, 2), f = Mr(o.data, h, u, i, 0, 3), d = z(a, 0, l) + z(a, 1, g) + z(a, 2, c) + z(a, 3, f) + z(a, 4, 1), p = z(a, 5, l) + z(a, 6, g) + z(a, 7, c) + z(a, 8, f) + z(a, 9, 1), y = z(a, 10, l) + z(a, 11, g) + z(a, 12, c) + z(a, 13, f) + z(a, 14, 1), x = z(a, 15, l) + z(a, 16, g) + z(a, 17, c) + z(a, 18, f) + z(a, 19, 1);
                s && (d = 0, p = 0, y = 0, x *= f / 255), Nr(o.data, h, u, i, 0, 0, d), 
                Nr(o.data, h, u, i, 0, 1, p), Nr(o.data, h, u, i, 0, 2, y), Nr(o.data, h, u, i, 0, 3, x);
            }
            t.clearRect(0, 0, i, n), t.putImageData(o, 0, 0);
        }
    }, Be = class extends V {
        constructor() {
            super(...arguments), this.type = "mask";
        }
        apply(t, e) {
            var {
                document: r
            } = this, i = this.getAttribute("x").getPixels("x"), n = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), a = this.getStyle("height").getPixels("y");
            if (!s && !a) {
                var o = new nt();
                this.children.forEach(f => {
                    o.addBoundingBox(f.getBoundingBox(t));
                }), i = Math.floor(o.x1), n = Math.floor(o.y1), s = Math.floor(o.width), 
                a = Math.floor(o.height);
            }
            var u = this.removeStyles(e, Be.ignoreStyles), h = r.createCanvas(i + s, n + a), l = h.getContext("2d");
            r.screen.setDefaults(l), this.renderChildren(l), new Gr(r, {
                nodeType: 1,
                childNodes: [],
                attributes: [ {
                    nodeName: "type",
                    value: "luminanceToAlpha"
                }, {
                    nodeName: "includeOpacity",
                    value: "true"
                } ]
            }).apply(l, 0, 0, i + s, n + a);
            var g = r.createCanvas(i + s, n + a), c = g.getContext("2d");
            r.screen.setDefaults(c), e.render(c), c.globalCompositeOperation = "destination-in", 
            c.fillStyle = l.createPattern(h, "no-repeat"), c.fillRect(0, 0, i + s, n + a), 
            t.fillStyle = c.createPattern(g, "no-repeat"), t.fillRect(0, 0, i + s, n + a), 
            this.restoreStyles(e, u);
        }
        render(t) {}
    }, Be.ignoreStyles = [ "mask", "transform", "clip-path" ];
    var Xh = () => {};
    Ma = class extends V {
        constructor() {
            super(...arguments), this.type = "clipPath";
        }
        apply(t) {
            var {
                document: e
            } = this, r = Reflect.getPrototypeOf(t), {
                beginPath: i,
                closePath: n
            } = t;
            r && (r.beginPath = Xh, r.closePath = Xh), Reflect.apply(i, t, []), 
            this.children.forEach(s => {
                if (s.path !== void 0) {
                    var a = s.elementTransform !== void 0 ? s.elementTransform() : null;
                    a || (a = Et.fromElement(e, s)), a && a.apply(t), s.path(t), 
                    r && (r.closePath = n), a && a.unapply(t);
                }
            }), Reflect.apply(n, t, []), t.clip(), r && (r.beginPath = i, r.closePath = n);
        }
        render(t) {}
    }, Fe = class extends V {
        constructor() {
            super(...arguments), this.type = "filter";
        }
        apply(t, e) {
            var {
                document: r,
                children: i
            } = this, n = e.getBoundingBox(t);
            if (n) {
                var s = 0, a = 0;
                i.forEach(y => {
                    var x = y.extraFilterDistance || 0;
                    s = Math.max(s, x), a = Math.max(a, x);
                });
                var o = Math.floor(n.width), u = Math.floor(n.height), h = o + 2 * s, l = u + 2 * a;
                if (!(h < 1 || l < 1)) {
                    var g = Math.floor(n.x), c = Math.floor(n.y), f = this.removeStyles(e, Fe.ignoreStyles), d = r.createCanvas(h, l), p = d.getContext("2d");
                    r.screen.setDefaults(p), p.translate(-g + s, -c + a), e.render(p), 
                    i.forEach(y => {
                        typeof y.apply == "function" && y.apply(p, 0, 0, h, l);
                    }), t.drawImage(d, 0, 0, h, l, g - s, c - a, h, l), this.restoreStyles(e, f);
                }
            }
        }
        render(t) {}
    }, Fe.ignoreStyles = [ "filter", "transform", "clip-path" ], Ia = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
        }
        apply(t, e, r, i, n) {}
    }, La = class extends V {
        constructor() {
            super(...arguments), this.type = "feMorphology";
        }
        apply(t, e, r, i, n) {}
    }, Va = class extends V {
        constructor() {
            super(...arguments), this.type = "feComposite";
        }
        apply(t, e, r, i, n) {}
    }, ka = class extends V {
        constructor(t, e, r) {
            super(t, e, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), 
            this.extraFilterDistance = this.blurRadius;
        }
        apply(t, e, r, i, n) {
            var {
                document: s,
                blurRadius: a
            } = this, o = s.window ? s.window.document.body : null, u = t.canvas;
            u.id = s.getUniqueId(), o && (u.style.display = "none", o.appendChild(u)), 
            rv(u, e, r, i, n, a), o && o.removeChild(u);
        }
    }, is = class extends V {
        constructor() {
            super(...arguments), this.type = "title";
        }
    }, _a = class extends V {
        constructor() {
            super(...arguments), this.type = "desc";
        }
    };
    var vv = {
        svg: Ht,
        rect: ri,
        circle: Pa,
        ellipse: Ra,
        line: Ba,
        polyline: Kr,
        polygon: qa,
        path: M,
        pattern: Ya,
        marker: Ua,
        defs: Na,
        linearGradient: za,
        radialGradient: Wa,
        stop: Ja,
        animate: De,
        animateColor: Ca,
        animateTransform: Ea,
        font: Da,
        "font-face": Fa,
        "missing-glyph": Ha,
        glyph: Qr,
        text: wt,
        tspan: Ue,
        tref: es,
        a: Aa,
        textPath: rs,
        image: ja,
        g: je,
        symbol: ts,
        style: ni,
        use: ss,
        mask: Be,
        clipPath: Ma,
        filter: Fe,
        feDropShadow: Ia,
        feMorphology: La,
        feComposite: Va,
        feColorMatrix: Gr,
        feGaussianBlur: ka,
        title: is,
        desc: _a
    };
    function Yh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })), r.push.apply(r, i);
        }
        return r;
    }
    function la() {
        return la = mt(function*(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r = document.createElement("img");
            return e && (r.crossOrigin = "Anonymous"), new Promise((i, n) => {
                r.onload = () => {
                    i(r);
                }, r.onerror = (s, a, o, u, h) => {
                    n(h);
                }, r.src = t;
            });
        }), la.apply(this, arguments);
    }
    bt = class {
        constructor(t) {
            var {
                rootEmSize: e = 12,
                emSize: r = 12,
                createCanvas: i = bt.createCanvas,
                createImage: n = bt.createImage,
                anonymousCrossOrigin: s
            } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.canvg = t, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, 
            this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, 
            this.screen = t.screen, this.rootEmSize = e, this.emSize = r, this.createCanvas = i, 
            this.createImage = this.bindCreateImage(n, s), this.screen.wait(this.isImagesLoaded.bind(this)), 
            this.screen.wait(this.isFontsLoaded.bind(this));
        }
        bindCreateImage(t, e) {
            return typeof e == "boolean" ? (r, i) => t(r, typeof i == "boolean" ? i : e) : t;
        }
        get window() {
            return this.screen.window;
        }
        get fetch() {
            return this.screen.fetch;
        }
        get ctx() {
            return this.screen.ctx;
        }
        get emSize() {
            var {
                emSizeStack: t
            } = this;
            return t[t.length - 1];
        }
        set emSize(t) {
            var {
                emSizeStack: e
            } = this;
            e.push(t);
        }
        popEmSize() {
            var {
                emSizeStack: t
            } = this;
            t.pop();
        }
        getUniqueId() {
            return "canvg".concat(++this.uniqueId);
        }
        isImagesLoaded() {
            return this.images.every(t => t.loaded);
        }
        isFontsLoaded() {
            return this.fonts.every(t => t.loaded);
        }
        createDocumentElement(t) {
            var e = this.createElement(t.documentElement);
            return e.root = !0, e.addStylesFromStyleDefinition(), this.documentElement = e, 
            e;
        }
        createElement(t) {
            var e = t.nodeName.replace(/^[^:]+:/, ""), r = bt.elementTypes[e];
            return r !== void 0 ? new r(this, t) : new as(this, t);
        }
        createTextNode(t) {
            return new mv(this, t);
        }
        setViewBox(t) {
            this.screen.setViewBox(function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var i = arguments[r] != null ? arguments[r] : {};
                    r % 2 ? Yh(Object(i), !0).forEach(function(n) {
                        $n(e, n, i[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Yh(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
                    });
                }
                return e;
            }({
                document: this
            }, t));
        }
    };
    function qh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })), r.push.apply(r, i);
        }
        return r;
    }
    function Dt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? qh(Object(r), !0).forEach(function(i) {
                $n(t, i, r[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qh(Object(r)).forEach(function(i) {
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
            });
        }
        return t;
    }
    bt.createCanvas = function(t, e) {
        var r = document.createElement("canvas");
        return r.width = t, r.height = e, r;
    }, bt.createImage = function(t) {
        return la.apply(this, arguments);
    }, bt.elementTypes = vv, Ut = class {
        constructor(t, e) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            this.parser = new ze(r), this.screen = new ce(t, r), this.options = r;
            var i = new bt(this, r), n = i.createDocumentElement(e);
            this.document = i, this.documentElement = n;
        }
        static from(t, e) {
            var r = arguments;
            return mt(function*() {
                var i = r.length > 2 && r[2] !== void 0 ? r[2] : {}, n = new ze(i), s = yield n.parse(e);
                return new Ut(t, s, i);
            })();
        }
        static fromString(t, e) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = new ze(r).parseFromString(e);
            return new Ut(t, i, r);
        }
        fork(t, e) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return Ut.from(t, e, Dt(Dt({}, this.options), r));
        }
        forkString(t, e) {
            var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return Ut.fromString(t, e, Dt(Dt({}, this.options), r));
        }
        ready() {
            return this.screen.ready();
        }
        isReady() {
            return this.screen.isReady();
        }
        render() {
            var t = arguments, e = this;
            return mt(function*() {
                var r = t.length > 0 && t[0] !== void 0 ? t[0] : {};
                e.start(Dt({
                    enableRedraw: !0,
                    ignoreAnimation: !0,
                    ignoreMouse: !0
                }, r)), yield e.ready(), e.stop();
            })();
        }
        start() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
                documentElement: e,
                screen: r,
                options: i
            } = this;
            r.start(e, Dt(Dt({
                enableRedraw: !0
            }, i), t));
        }
        stop() {
            this.screen.stop();
        }
        resize(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
            this.documentElement.resize(t, e, r);
        }
    };
});

export {
    Aa as AElement,
    Ca as AnimateColorElement,
    De as AnimateElement,
    Ea as AnimateTransformElement,
    nt as BoundingBox,
    Xr as CB1,
    Yr as CB2,
    qr as CB3,
    Wr as CB4,
    Ut as Canvg,
    Pa as CircleElement,
    Ma as ClipPathElement,
    Na as DefsElement,
    _a as DescElement,
    bt as Document,
    V as Element,
    Ra as EllipseElement,
    Gr as FeColorMatrixElement,
    Va as FeCompositeElement,
    Ia as FeDropShadowElement,
    ka as FeGaussianBlurElement,
    La as FeMorphologyElement,
    Fe as FilterElement,
    Q as Font,
    Da as FontElement,
    Fa as FontFaceElement,
    je as GElement,
    Qr as GlyphElement,
    $r as GradientElement,
    ja as ImageElement,
    Ba as LineElement,
    za as LinearGradientElement,
    Ua as MarkerElement,
    Be as MaskElement,
    Zr as Matrix,
    Ha as MissingGlyphElement,
    Xa as Mouse,
    Ct as PSEUDO_ZERO,
    ze as Parser,
    M as PathElement,
    E as PathParser,
    Ya as PatternElement,
    k as Point,
    qa as PolygonElement,
    Kr as PolylineElement,
    T as Property,
    Jr as QB1,
    ti as QB2,
    ei as QB3,
    Wa as RadialGradientElement,
    ri as RectElement,
    St as RenderedElement,
    Ga as Rotate,
    Ht as SVGElement,
    Qa as SVGFontLoader,
    $a as Scale,
    ce as Screen,
    ii as Skew,
    Za as SkewX,
    Ka as SkewY,
    Ja as StopElement,
    ni as StyleElement,
    ts as SymbolElement,
    es as TRefElement,
    Ue as TSpanElement,
    wt as TextElement,
    rs as TextPathElement,
    is as TitleElement,
    Et as Transform,
    ns as Translate,
    as as UnknownElement,
    ss as UseElement,
    os as ViewPort,
    Rv as __tla,
    Pt as compressSpaces,
    Ut as default,
    us as getSelectorSpecificity,
    hs as normalizeAttributeName,
    ls as normalizeColor,
    ai as parseExternalUrl,
    nl as presets,
    tt as toNumbers,
    cs as trimLeft,
    gs as trimRight,
    si as vectorMagnitude,
    oi as vectorsAngle,
    He as vectorsRatio
};