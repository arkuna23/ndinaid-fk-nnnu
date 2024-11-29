import {
    a0 as p,
    h as d,
    e as u,
    o as g,
    c as m,
    k as f,
    a as t,
    t as v,
    B as y,
    aI as h,
    _ as I,
    __tla as x
} from "./index-6c08ea4c.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

let n, b = Promise.all([ (() => {
    try {
        return x;
    } catch {}
})() ]).then(async () => {
    let a, s;
    a = {
        class: "neu-no-data"
    }, s = {
        class: "my-5"
    }, n = S({
        __name: "index",
        props: {
            svgIcon: {
                type: String,
                default: () => "svg-icon:bg-no-data"
            },
            info: {
                type: String,
                default: () => "暂无数据"
            }
        },
        setup(e) {
            const o = e, {
                svgIcon: l,
                info: c
            } = p(o), i = d();
            return u(() => i.isStudent), (r, k) => {
                const _ = I;
                return g(), m("div", a, [ f(_, {
                    icon: t(l),
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }, null, 8, [ "icon" ]), v("p", s, y(t(c)), 1), h(r.$slots, "btn", {}, void 0, !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-795c5666" ] ]);
});

export {
    n as _,
    b as __tla
};