import {
    d as n,
    az as a,
    o,
    c as p,
    aI as _,
    z as l,
    a as d,
    aj as i,
    __tla as c
} from "./index-6c08ea4c.js";

import {
    _ as m
} from "./_plugin-vue_export-helper-1b428a4d.js";

let t, f = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    t = m(n({
        name: "ContentWrap",
        __name: "ContentWrap",
        props: {
            title: a.string.def(""),
            message: a.string.def("")
        },
        setup(g) {
            const {
                getPrefixCls: s
            } = i(), e = s("content-wrap");
            return (r, u) => (o(), p("div", {
                class: l([ d(e), "p-20px pb-12px" ])
            }, [ _(r.$slots, "default", {}, void 0, !0) ], 2));
        }
    }), [ [ "__scopeId", "data-v-b96d0e4f" ] ]);
});

export {
    t as _,
    f as __tla
};