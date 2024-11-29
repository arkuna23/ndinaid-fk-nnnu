import {
    aD as h,
    a_ as x,
    dU as C,
    d as b,
    bf as E,
    a$ as H,
    aE as D,
    e as S,
    o as l,
    c,
    z as t,
    a,
    aI as i,
    D as r,
    t as o,
    C as u,
    l as P,
    aY as z,
    aQ as B,
    v,
    B as f,
    k as G,
    aC as I,
    aG as L,
    aL as Q,
    __tla as U
} from "./index-6c08ea4c.js";

let m, Y = Promise.all([ (() => {
    try {
        return U;
    } catch {}
})() ]).then(async () => {
    const _ = h({
        icon: {
            type: x,
            default: () => C
        },
        title: String,
        content: {
            type: String,
            default: ""
        }
    }), p = [ "aria-label" ], $ = b({
        name: "ElPageHeader"
    });
    m = Q(L(b({
        ...$,
        props: _,
        emits: {
            back: () => !0
        },
        setup(j, {
            emit: k
        }) {
            const n = E(), {
                t: d
            } = H(), s = D("page-header"), y = S(() => [ s.b(), {
                [s.m("has-breadcrumb")]: !!n.breadcrumb,
                [s.m("has-extra")]: !!n.extra,
                [s.is("contentful")]: !!n.default
            } ]);
            function g() {
                k("back");
            }
            return (e, q) => (l(), c("div", {
                class: t(a(y))
            }, [ e.$slots.breadcrumb ? (l(), c("div", {
                key: 0,
                class: t(a(s).e("breadcrumb"))
            }, [ i(e.$slots, "breadcrumb") ], 2)) : r("v-if", !0), o("div", {
                class: t(a(s).e("header"))
            }, [ o("div", {
                class: t(a(s).e("left"))
            }, [ o("div", {
                class: t(a(s).e("back")),
                role: "button",
                tabindex: "0",
                onClick: g
            }, [ e.icon || e.$slots.icon ? (l(), c("div", {
                key: 0,
                "aria-label": e.title || a(d)("el.pageHeader.title"),
                class: t(a(s).e("icon"))
            }, [ i(e.$slots, "icon", {}, () => [ e.icon ? (l(), u(a(B), {
                key: 0
            }, {
                default: P(() => [ (l(), u(z(e.icon))) ]),
                _: 1
            })) : r("v-if", !0) ]) ], 10, p)) : r("v-if", !0), o("div", {
                class: t(a(s).e("title"))
            }, [ i(e.$slots, "title", {}, () => [ v(f(e.title || a(d)("el.pageHeader.title")), 1) ]) ], 2) ], 2), G(a(I), {
                direction: "vertical"
            }), o("div", {
                class: t(a(s).e("content"))
            }, [ i(e.$slots, "content", {}, () => [ v(f(e.content), 1) ]) ], 2) ], 2), e.$slots.extra ? (l(), 
            c("div", {
                key: 0,
                class: t(a(s).e("extra"))
            }, [ i(e.$slots, "extra") ], 2)) : r("v-if", !0) ], 2), e.$slots.default ? (l(), 
            c("div", {
                key: 1,
                class: t(a(s).e("main"))
            }, [ i(e.$slots, "default") ], 2)) : r("v-if", !0) ], 2));
        }
    }), [ [ "__file", "page-header.vue" ] ]));
});

export {
    m as E,
    Y as __tla
};