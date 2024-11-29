import {
    bv as h,
    r as j,
    bM as P,
    f as S,
    c4 as q,
    bO as z,
    d as m,
    aE as D,
    e as G,
    o as p,
    C as $,
    l as x,
    a,
    c as I,
    x as L,
    z as b,
    H as O,
    aI as Q,
    k as C,
    aQ as w,
    el as A,
    D as F,
    ai as J,
    aG as K,
    aL as R,
    aj as U,
    __tla as V
} from "./index-6c08ea4c.js";

let E, W = Promise.all([ (() => {
    try {
        return V;
    } catch {}
})() ]).then(async () => {
    const B = {
        visibilityHeight: {
            type: Number,
            default: 200
        },
        target: {
            type: String,
            default: ""
        },
        right: {
            type: Number,
            default: 40
        },
        bottom: {
            type: Number,
            default: 40
        }
    }, H = {
        click: o => o instanceof MouseEvent
    }, d = "ElBacktop", T = m({
        name: d
    });
    let f;
    f = R(K(m({
        ...T,
        props: B,
        emits: H,
        setup(o, {
            emit: i
        }) {
            const s = o, l = D("backtop"), {
                handleClick: u,
                visible: g
            } = ((t, r, n) => {
                const e = h(), v = h(), _ = j(!1), k = () => {
                    e.value && (_.value = e.value.scrollTop >= t.visibilityHeight);
                }, M = z(k, 300, !0);
                return P(v, "scroll", M), S(() => {
                    var c;
                    v.value = document, e.value = document.documentElement, t.target && (e.value = (c = document.querySelector(t.target)) != null ? c : void 0, 
                    e.value || q(n, `target does not exist: ${t.target}`), v.value = e.value), 
                    k();
                }), {
                    visible: _,
                    handleClick: c => {
                        var y;
                        (y = e.value) == null || y.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }), r("click", c);
                    }
                };
            })(s, i, d), N = G(() => ({
                right: `${s.right}px`,
                bottom: `${s.bottom}px`
            }));
            return (t, r) => (p(), $(J, {
                name: `${a(l).namespace.value}-fade-in`
            }, {
                default: x(() => [ a(g) ? (p(), I("div", {
                    key: 0,
                    style: L(a(N)),
                    class: b(a(l).b()),
                    onClick: r[0] || (r[0] = O((...n) => a(u) && a(u)(...n), [ "stop" ]))
                }, [ Q(t.$slots, "default", {}, () => [ C(a(w), {
                    class: b(a(l).e("icon"))
                }, {
                    default: x(() => [ C(a(A)) ]),
                    _: 1
                }, 8, [ "class" ]) ]) ], 6)) : F("v-if", !0) ]),
                _: 3
            }, 8, [ "name" ]));
        }
    }), [ [ "__file", "backtop.vue" ] ])), E = m({
        name: "BackTop",
        __name: "Backtop",
        setup(o) {
            const {
                getPrefixCls: i,
                variables: s
            } = U(), l = i("backtop");
            return (u, g) => (p(), $(a(f), {
                class: b(`${a(l)}-backtop`),
                target: `.${a(s).namespace}-layout-content-scrollbar`
            }, null, 8, [ "class", "target" ]));
        }
    });
});

export {
    E as _,
    W as __tla
};