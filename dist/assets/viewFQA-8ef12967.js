import {
    a0 as A,
    p as V,
    h as k,
    r as x,
    o as y,
    C as L,
    l as t,
    k as Q,
    v as j,
    t as a,
    B as C,
    a as n,
    m as F,
    J as H,
    aU as M,
    R as O,
    S as P,
    __tla as T
} from "./index-6c08ea4c.js";

import {
    __tla as U
} from "./file-e038b35d.js";

import {
    _ as B
} from "./_plugin-vue_export-helper-1b428a4d.js";

let f, E = Promise.all([ (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})() ]).then(async () => {
    let s, o, r, c, i, p, d, _;
    s = e => (O("data-v-9194096b"), e = e(), P(), e), o = {
        class: "dialog-fqa"
    }, r = {
        class: ""
    }, c = s(() => a("span", {
        class: "label label-q"
    }, "问题 Q", -1)), i = {
        class: "content-q"
    }, p = {
        class: "row-2 mt-5"
    }, d = s(() => a("span", {
        class: "label label-a"
    }, "答案 A", -1)), _ = [ "innerHTML" ], f = B({
        __name: "viewFQA",
        props: {
            info: {
                type: Object,
                default: () => ({})
            }
        },
        setup(e, {
            expose: v
        }) {
            const b = e, {
                info: u
            } = A(b);
            V(), k();
            const l = x(!1), w = () => {
                l.value = !1;
            };
            return v({
                handleOpen: () => {
                    l.value = !0;
                }
            }), (I, m) => {
                const h = H, g = M;
                return y(), L(g, {
                    modelValue: n(l),
                    "onUpdate:modelValue": m[0] || (m[0] = q => F(l) ? l.value = q : null),
                    title: "查看FAQ",
                    width: "1200px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    footer: t(() => [ Q(h, {
                        onClick: w
                    }, {
                        default: t(() => [ j("关闭") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ a("div", o, [ a("div", r, [ c, a("span", i, C(n(u).question), 1) ]), a("div", p, [ d, a("span", {
                        class: "content-a wangEditorLinewrapPreView",
                        innerHTML: n(u).answer
                    }, null, 8, _) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9194096b" ] ]);
});

export {
    E as __tla,
    f as default
};