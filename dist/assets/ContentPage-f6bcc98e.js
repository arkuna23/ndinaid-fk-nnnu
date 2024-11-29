import {
    az as o,
    ag as z,
    b as j,
    e as s,
    a0 as w,
    a,
    o as c,
    c as l,
    t as d,
    k as H,
    v as g,
    H as I,
    B as D,
    D as L,
    aI as M,
    z as h,
    x as O,
    aj as q,
    _ as A,
    __tla as E
} from "./index-6c08ea4c.js";

import {
    _ as F
} from "./_plugin-vue_export-helper-1b428a4d.js";

let x, G = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})() ]).then(async () => {
    let p;
    p = {
        key: 0,
        class: "head-title h-18px pb-15px pt-5px"
    }, x = F(Object.assign({
        name: "ContentPage"
    }, {
        __name: "ContentPage",
        props: {
            title: o.string.def(""),
            noPadding: o.bool.def(!1),
            noBgColor: o.bool.def(!1)
        },
        emits: [ "routerBack" ],
        setup(v, {
            emit: _
        }) {
            const m = z(), u = j(), t = s(() => m.getLayout), {
                getPrefixCls: b
            } = q(), f = b("content-wrap"), k = v, {
                title: n,
                noPadding: e,
                noBgColor: y
            } = w(k), P = _, r = s(() => !!a(n) && a(t) === "cutMenu"), B = s(() => u.getBodyHeight - (t.value === "top" ? 144 : 96));
            function C() {
                P("routerBack");
            }
            return (i, J) => {
                const $ = A;
                return c(), l("div", {
                    class: h([ a(f), a(t) === "top" ? `h-[calc(100vh-var(--app-content-padding)-var(--top-header-height)-var(--top-header-height))] ${a(e) ? "px-0" : "px-20px"} top-bg` : (a(e) ? "!px-0px" : "px-20px") + " py-10px h-[calc(100vh-var(--app-content-padding)-var(--app-content-padding)-var(--top-header-height))]", a(y) ? "no-bg-color" : "", {
                        noPadding: a(e)
                    } ]),
                    style: O(`--com-page-min-height:${a(B)}px;`)
                }, [ a(r) ? (c(), l("div", p, [ d("span", {
                    class: "mr-15px pl-20px pr-15px",
                    onClick: I(C, [ "stop" ])
                }, [ H($, {
                    icon: "ep:back",
                    size: 14,
                    class: "icon-box"
                }), g(" 返回 ") ]), g(" " + D(a(n)), 1) ])) : L("", !0), d("div", {
                    class: h([ i.$attrs.class, "page-cont", a(r) ? "show-title" : "hide-title" ])
                }, [ M(i.$slots, "default", {}, void 0, !0) ], 2) ], 6);
            };
        }
    }), [ [ "__scopeId", "data-v-62661749" ] ]);
});

export {
    x as _,
    G as __tla
};