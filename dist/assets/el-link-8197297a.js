import {
    aD as m,
    a_ as v,
    d,
    aE as E,
    e as $,
    o as t,
    c as r,
    C as o,
    l as S,
    aY as B,
    a as i,
    aQ as C,
    D as n,
    z as f,
    aI as c,
    aG as D,
    aL as L,
    __tla as w
} from "./index-6c08ea4c.js";

let u, x = Promise.all([ (() => {
    try {
        return w;
    } catch {}
})() ]).then(async () => {
    const p = m({
        type: {
            type: String,
            values: [ "primary", "success", "warning", "info", "danger", "default" ],
            default: "default"
        },
        underline: {
            type: Boolean,
            default: !0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        href: {
            type: String,
            default: ""
        },
        target: {
            type: String,
            default: "_self"
        },
        icon: {
            type: v
        }
    }), y = {
        click: l => l instanceof MouseEvent
    }, _ = [ "href", "target" ], g = d({
        name: "ElLink"
    });
    u = L(D(d({
        ...g,
        props: p,
        emits: y,
        setup(l, {
            emit: k
        }) {
            const e = l, s = E("link"), b = $(() => [ s.b(), s.m(e.type), s.is("disabled", e.disabled), s.is("underline", e.underline && !e.disabled) ]);
            function h(a) {
                e.disabled || k("click", a);
            }
            return (a, z) => (t(), r("a", {
                class: f(i(b)),
                href: a.disabled || !a.href ? void 0 : a.href,
                target: a.disabled || !a.href ? void 0 : a.target,
                onClick: h
            }, [ a.icon ? (t(), o(i(C), {
                key: 0
            }, {
                default: S(() => [ (t(), o(B(a.icon))) ]),
                _: 1
            })) : n("v-if", !0), a.$slots.default ? (t(), r("span", {
                key: 1,
                class: f(i(s).e("inner"))
            }, [ c(a.$slots, "default") ], 2)) : n("v-if", !0), a.$slots.icon ? c(a.$slots, "icon", {
                key: 2
            }) : n("v-if", !0) ], 10, _));
        }
    }), [ [ "__file", "link.vue" ] ]));
});

export {
    u as E,
    x as __tla
};