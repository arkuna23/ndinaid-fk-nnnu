import {
    aD as v,
    b1 as u,
    d,
    aE as p,
    o as r,
    c as o,
    z as t,
    a,
    aI as l,
    v as y,
    B as f,
    D as i,
    t as b,
    x as _,
    aG as S,
    aL as $,
    __tla as g
} from "./index-6c08ea4c.js";

let c, w = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})() ]).then(async () => {
    const n = v({
        header: {
            type: String,
            default: ""
        },
        footer: {
            type: String,
            default: ""
        },
        bodyStyle: {
            type: u([ String, Object, Array ]),
            default: ""
        },
        bodyClass: String,
        shadow: {
            type: String,
            values: [ "always", "hover", "never" ],
            default: "always"
        }
    }), h = d({
        name: "ElCard"
    });
    c = $(S(d({
        ...h,
        props: n,
        setup(m) {
            const e = p("card");
            return (s, C) => (r(), o("div", {
                class: t([ a(e).b(), a(e).is(`${s.shadow}-shadow`) ])
            }, [ s.$slots.header || s.header ? (r(), o("div", {
                key: 0,
                class: t(a(e).e("header"))
            }, [ l(s.$slots, "header", {}, () => [ y(f(s.header), 1) ]) ], 2)) : i("v-if", !0), b("div", {
                class: t([ a(e).e("body"), s.bodyClass ]),
                style: _(s.bodyStyle)
            }, [ l(s.$slots, "default") ], 6), s.$slots.footer || s.footer ? (r(), 
            o("div", {
                key: 1,
                class: t(a(e).e("footer"))
            }, [ l(s.$slots, "footer", {}, () => [ y(f(s.footer), 1) ]) ], 2)) : i("v-if", !0) ], 2));
        }
    }), [ [ "__file", "card.vue" ] ]));
});

export {
    c as E,
    w as __tla
};