import {
    aD as F,
    b3 as j,
    bb as p,
    a_ as q,
    b1 as w,
    d as v,
    aE as A,
    r as B,
    e as n,
    bF as C,
    bi as D,
    w as G,
    o as c,
    c as f,
    x as y,
    a as l,
    C as _,
    l as I,
    aY as L,
    aQ as N,
    aI as P,
    z as Q,
    aG as V,
    aL as Y,
    __tla as $
} from "./index-6c08ea4c.js";

let m, H = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})() ]).then(async () => {
    const b = F({
        size: {
            type: [ Number, String ],
            values: j,
            default: "",
            validator: s => p(s)
        },
        shape: {
            type: String,
            values: [ "circle", "square" ],
            default: "circle"
        },
        icon: {
            type: q
        },
        src: {
            type: String,
            default: ""
        },
        alt: String,
        srcSet: String,
        fit: {
            type: w(String),
            default: "cover"
        }
    }), d = {
        error: s => s instanceof Event
    }, S = [ "src", "alt", "srcset" ], g = v({
        name: "ElAvatar"
    });
    m = Y(V(v({
        ...g,
        props: b,
        emits: d,
        setup(s, {
            emit: h
        }) {
            const e = s, t = A("avatar"), i = B(!1), E = n(() => {
                const {
                    size: a,
                    icon: o,
                    shape: u
                } = e, r = [ t.b() ];
                return C(a) && r.push(t.m(a)), o && r.push(t.m("icon")), u && r.push(t.m(u)), 
                r;
            }), k = n(() => {
                const {
                    size: a
                } = e;
                return p(a) ? t.cssVarBlock({
                    size: D(a) || ""
                }) : void 0;
            }), z = n(() => ({
                objectFit: e.fit
            }));
            function x(a) {
                i.value = !0, h("error", a);
            }
            return G(() => e.src, () => i.value = !1), (a, o) => (c(), f("span", {
                class: Q(l(E)),
                style: y(l(k))
            }, [ !a.src && !a.srcSet || i.value ? a.icon ? (c(), _(l(N), {
                key: 1
            }, {
                default: I(() => [ (c(), _(L(a.icon))) ]),
                _: 1
            })) : P(a.$slots, "default", {
                key: 2
            }) : (c(), f("img", {
                key: 0,
                src: a.src,
                alt: a.alt,
                srcset: a.srcSet,
                style: y(l(z)),
                onError: x
            }, null, 44, S)) ], 6));
        }
    }), [ [ "__file", "avatar.vue" ] ]));
});

export {
    m as E,
    H as __tla
};