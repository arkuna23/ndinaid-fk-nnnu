import {
    cg as v,
    aT as M,
    o as s,
    C as d,
    l as n,
    c as u,
    y as g,
    t as x,
    B as I,
    F as w,
    z,
    aO as D,
    __tla as L
} from "./index-6c08ea4c.js";

import {
    E as N,
    a as S,
    __tla as V
} from "./el-collapse-item-c8b76a0a.js";

import {
    M as B,
    __tla as E
} from "./index-3a269d1c.js";

import {
    _ as P
} from "./_plugin-vue_export-helper-1b428a4d.js";

let p, R = Promise.all([ (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return V;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})() ]).then(async () => {
    const r = {
        components: {
            MdPreview: B
        },
        props: {
            headersList: {
                type: Array,
                default: () => []
            },
            notMarkDown: {
                type: Boolean,
                default: !1
            },
            accordion: {
                type: Boolean,
                default: !0
            },
            fontSize: {
                type: String,
                default: "12"
            },
            isDark: {
                type: Boolean,
                default: !1
            }
        },
        data: () => ({
            activeName: "1",
            getRandomId: v()
        }),
        computed: {
            fontSizeNumber() {
                return this.fontSize + "px";
            },
            scrollElement: () => document.documentElement
        },
        watch: {
            headersList: {
                deep: !0,
                immediate: !0,
                handler() {}
            }
        }
    }, i = () => {
        D(e => ({
            "2c7f8d46": e.fontSizeNumber
        }));
    }, c = r.setup;
    r.setup = c ? (e, o) => (i(), c(e, o)) : i;
    const _ = {
        class: "head-title neu-ellipse"
    }, h = [ "innerHTML" ];
    p = P(r, [ [ "render", function(e, o, a, T, l, b) {
        const f = M("MdPreview"), y = N, k = S;
        return s(), d(k, {
            modelValue: l.activeName,
            "onUpdate:modelValue": o[0] || (o[0] = t => l.activeName = t),
            accordion: a.accordion,
            class: z([ "md-collapse !px-0", a.isDark ? "is-dark" : "" ])
        }, {
            default: n(() => [ (s(!0), u(w, null, g(a.headersList, (t, m) => (s(), 
            d(y, {
                name: m + 1 + "",
                key: l.getRandomId + m
            }, {
                title: n(() => [ x("div", _, I(t.text), 1) ]),
                default: n(() => [ a.notMarkDown ? (s(), u("div", {
                    key: 1,
                    innerHTML: e.$xss(t.htmls),
                    class: "hidden"
                }, null, 8, h)) : (s(), d(f, {
                    key: 0,
                    editorId: l.getRandomId,
                    modelValue: t.texts,
                    class: "!px-0px",
                    theme: a.isDark ? "dark" : "light"
                }, null, 8, [ "editorId", "modelValue", "theme" ])) ]),
                _: 2
            }, 1032, [ "name" ]))), 128)) ]),
            _: 1
        }, 8, [ "modelValue", "accordion", "class" ]);
    } ], [ "__scopeId", "data-v-4f739fa4" ] ]);
});

export {
    R as __tla,
    p as default
};