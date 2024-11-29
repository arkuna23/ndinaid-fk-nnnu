import {
    i as R,
    __tla as C
} from "./system-b59f2a4a.js";

import {
    _ as U
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    r as b,
    f as j,
    o as B,
    c as N,
    t,
    B as l,
    a as i,
    R as P,
    S,
    __tla as T
} from "./index-6c08ea4c.js";

let I, k = Promise.all([ (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})() ]).then(async () => {
    let n, r, _, a, m, c, u, d, o, p, f, v, y, h, g, x, L;
    n = "" + new URL("systemIndexLine1_4-e6e67dfc.png", import.meta.url).href, r = "" + new URL("systemIndexLine1_5-f4250445.png", import.meta.url).href, 
    _ = "" + new URL("systemIndexLine1_6-56a3a6f0.png", import.meta.url).href, a = e => (P("data-v-a6771925"), 
    e = e(), S(), e), m = {
        style: {
            display: "flex",
            "justify-content": "space-between",
            "margin-top": "10px"
        }
    }, c = {
        class: "_item _item1"
    }, u = a(() => t("img", {
        src: n,
        alt: ""
    }, null, -1)), d = a(() => t("div", {
        class: "_title"
    }, "累计用户数", -1)), o = {
        class: "_num"
    }, p = {
        class: "_item _item2"
    }, f = a(() => t("img", {
        src: r,
        alt: ""
    }, null, -1)), v = a(() => t("div", {
        class: "_title"
    }, "累计学习者", -1)), y = {
        class: "_num"
    }, h = {
        class: "_item _item3"
    }, g = a(() => t("img", {
        src: _,
        alt: ""
    }, null, -1)), x = a(() => t("div", {
        class: "_title"
    }, "累计教学者", -1)), L = {
        class: "_num"
    }, I = U({
        __name: "userNumText",
        setup(e) {
            const s = b({});
            return j(() => {
                R().then(w => {
                    s.value = w;
                });
            }), (w, q) => (B(), N("div", m, [ t("div", c, [ u, d, t("div", o, l(i(s).totalCount), 1) ]), t("div", p, [ f, v, t("div", y, l(i(s).studentCount), 1) ]), t("div", h, [ g, x, t("div", L, l(i(s).teacherCount), 1) ]) ]));
        }
    }, [ [ "__scopeId", "data-v-a6771925" ] ]);
});

export {
    k as __tla,
    I as default
};