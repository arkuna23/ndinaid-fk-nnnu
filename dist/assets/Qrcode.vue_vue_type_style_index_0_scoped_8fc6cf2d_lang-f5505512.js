import {
    d as W,
    az as w,
    r as P,
    e as j,
    w as X,
    A as Z,
    o as C,
    c as D,
    C as ee,
    aY as te,
    z as I,
    a as d,
    t as A,
    k as ae,
    B as oe,
    D as se,
    x as le,
    aj as ie,
    a9 as re,
    _ as ne,
    n as ce,
    dI as de,
    bC as Q,
    __tla as fe
} from "./index-6c08ea4c.js";

import {
    b as ue
} from "./browser-86b6ed1b.js";

let U, ge = Promise.all([ (() => {
    try {
        return fe;
    } catch {}
})() ]).then(async () => {
    let x;
    x = {
        class: "absolute left-[50%] top-[50%] font-bold"
    }, U = W({
        name: "Qrcode",
        __name: "Qrcode",
        props: {
            tag: w.string.validate(f => [ "canvas", "img" ].includes(f)).def("canvas"),
            text: {
                type: [ String, Array ],
                default: null
            },
            options: {
                type: Object,
                default: () => ({})
            },
            width: w.number.def(200),
            logo: {
                type: [ String, Object ],
                default: ""
            },
            disabled: w.bool.def(!1),
            disabledText: w.string.def("")
        },
        emits: [ "done", "click", "disabled-click" ],
        setup(f, {
            emit: E
        }) {
            const s = f, u = E, {
                getPrefixCls: H
            } = ie(), _ = H("qrcode"), {
                toCanvas: k,
                toDataURL: M
            } = ue, v = P(!0), p = P(null), g = j(() => String(s.text)), q = j(() => ({
                width: s.width + "px",
                height: s.width + "px"
            }));
            X(() => g.value, a => {
                a && (async () => {
                    await ce();
                    const e = de(s.options || {});
                    if (s.tag === "canvas") {
                        e.errorCorrectionLevel = e.errorCorrectionLevel || $(d(g));
                        const t = await Y(d(g), e);
                        e.scale = s.width === 0 ? void 0 : s.width / t * 4;
                        const o = await k(d(p), d(g), e);
                        if (s.logo) {
                            const r = await B(o);
                            u("done", r), v.value = !1;
                        } else u("done", o.toDataURL()), v.value = !1;
                    } else {
                        const t = await M(g.value, {
                            errorCorrectionLevel: "H",
                            width: s.width,
                            ...e
                        });
                        d(p).src = t, u("done", t), v.value = !1;
                    }
                })();
            }, {
                deep: !0,
                immediate: !0
            });
            const B = a => {
                const e = a.width, t = Object.assign({
                    logoSize: .15,
                    bgColor: "#ffffff",
                    borderSize: .05,
                    crossOrigin: "anonymous",
                    borderRadius: 8,
                    logoRadius: 0
                }, Q(s.logo) ? {} : s.logo), {
                    logoSize: o = .15,
                    bgColor: r = "#ffffff",
                    borderSize: i = .05,
                    crossOrigin: m = "anonymous",
                    borderRadius: J = 8,
                    logoRadius: y = 0
                } = t, K = Q(s.logo) ? s.logo : s.logo.src, n = e * o, c = e * (1 - o) / 2, S = e * (o + i), z = e * (1 - o - i) / 2, l = a.getContext("2d");
                if (!l) return;
                R(l)(z, z, S, S, J), l.fillStyle = r, l.fill();
                const b = new Image();
                return (m || y) && b.setAttribute("crossOrigin", m), b.src = K, 
                new Promise(N => {
                    b.onload = () => {
                        var T;
                        y ? (V => {
                            const h = document.createElement("canvas");
                            h.width = c + n, h.height = c + n;
                            const L = h.getContext("2d");
                            if (!L || !l || (L.drawImage(V, c, c, n, n), R(l)(c, c, n, n, y), 
                            !l)) return;
                            const O = l.createPattern(h, "no-repeat");
                            O && (l.fillStyle = O, l.fill());
                        })(b) : (T = b, l.drawImage(T, c, c, n, n)), N(a.toDataURL());
                    };
                });
            }, Y = async (a, e) => {
                const t = document.createElement("canvas");
                return await k(t, a, e), t.width;
            }, $ = a => a.length > 36 ? "M" : a.length > 16 ? "Q" : "H", R = a => (e, t, o, r, i) => {
                const m = Math.min(o, r);
                return i > m / 2 && (i = m / 2), a.beginPath(), a.moveTo(e + i, t), 
                a.arcTo(e + o, t, e + o, t + r, i), a.arcTo(e + o, t + r, e, t + r, i), 
                a.arcTo(e, t + r, e, t, i), a.arcTo(e, t, e + o, t, i), a.closePath(), 
                a;
            }, F = () => {
                u("click");
            }, G = () => {
                u("disabled-click");
            };
            return (a, e) => {
                const t = ne, o = re;
                return Z((C(), D("div", {
                    class: I([ d(_), "relative inline-block" ]),
                    style: le(q.value)
                }, [ (C(), ee(te(f.tag), {
                    ref_key: "wrapRef",
                    ref: p,
                    onClick: F
                }, null, 512)), f.disabled ? (C(), D("div", {
                    key: 0,
                    class: I([ `${d(_)}--disabled`, "absolute left-0 top-0 h-full w-full flex items-center justify-center" ]),
                    onClick: G
                }, [ A("div", x, [ ae(t, {
                    size: 30,
                    color: "var(--el-color-primary)",
                    icon: "ep:refresh-right"
                }), A("div", null, oe(f.disabledText), 1) ]) ], 2)) : se("", !0) ], 6)), [ [ o, v.value ] ]);
            };
        }
    });
});

export {
    U as _,
    ge as __tla
};