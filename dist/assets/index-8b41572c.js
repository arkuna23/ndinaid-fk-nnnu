import {
    al as c,
    e as t,
    ag as h,
    a as e,
    o as x,
    c as P,
    aI as _,
    x as f,
    z as m,
    __tla as y
} from "./index-6c08ea4c.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

let d, b = Promise.all([ (() => {
    try {
        return y;
    } catch {}
})() ]).then(async () => {
    d = S({
        __name: "index",
        props: {
            noSearch: {
                type: [ Boolean, String ],
                default: !1
            },
            noPager: {
                type: [ Boolean, String ],
                default: !1
            },
            outerHeight: {
                type: [ String, Number ],
                default: "62"
            },
            noPadding: {
                type: [ String, Boolean ],
                default: !1
            }
        },
        setup(r) {
            const g = c(), o = t(() => g.getActiveIsThirdHidden), s = h(), n = t(() => s.getLayout), a = r, i = t(() => ({
                noPager: !!a.noPager,
                hasPager: !a.noPager,
                noSearch: !!a.noSearch,
                noPadding: !!a.noPadding
            })), p = t(() => e(n) === "top" ? "top-bg" : "cutmenu-bg"), l = t(() => e(n) === "top" ? e(o) ? a.noPadding ? "-36px" : "-48px" : a.noPadding ? "-2px" : "-10px" : e(o) ? a.noPadding ? "-48px" : "-60px" : a.noPadding ? "-8px" : "-20px");
            return (u, v) => (x(), P("div", {
                style: f({
                    "--com-outer-height": a.outerHeight + "px",
                    "--com-padding-height": e(l)
                }),
                class: m([ "default-box", e(i), e(p) ])
            }, [ _(u.$slots, "default", {}, void 0, !0) ], 6));
        }
    }, [ [ "__scopeId", "data-v-bc6070f5" ] ]);
});

export {
    d as _,
    b as __tla
};