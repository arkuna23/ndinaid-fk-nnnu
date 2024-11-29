import {
    a0 as v,
    e as y,
    o as b,
    c as h,
    t as e,
    k as N,
    a as t,
    B as f,
    v as k,
    Y as R,
    R as S,
    S as T,
    __tla as x
} from "./index-6c08ea4c.js";

import {
    _ as I
} from "./_plugin-vue_export-helper-1b428a4d.js";

let c, w = Promise.all([ (() => {
    try {
        return x;
    } catch {}
})() ]).then(async () => {
    let p, l, n, u, i;
    p = {
        class: "progress_container"
    }, l = (a => (S("data-v-8dff5ba4"), a = a(), T(), a))(() => e("span", {
        class: "title"
    }, "已阅", -1)), n = {
        class: "progressNoumenon"
    }, u = {
        class: "tips"
    }, i = {
        class: "tipsReal"
    }, c = I({
        __name: "progressBar",
        props: {
            progressBarTotal: {
                type: Number,
                default: 0
            },
            progressBarRealNumber: {
                type: Number,
                default: 0
            },
            progressBarIntroduce: {
                type: String,
                default: () => ""
            },
            progressBarTip: {
                type: String,
                default: () => ""
            },
            strokeWidth: {
                type: Number,
                default: 8
            },
            formatData: {
                type: String,
                default: () => ""
            }
        },
        setup(a) {
            const g = a, {
                progressBarTotal: s,
                progressBarRealNumber: d,
                strokeWidth: m,
                formatData: D,
                progressBarIntroduce: F,
                progressBarTip: W
            } = v(g), _ = y(() => {
                if (s.value === 0) return 0;
                let r = d.value / s.value;
                if (r < .001 && r > 0) return .1;
                let o = (100 * r).toFixed(1);
                return r >= .9999 && r < 1 && (o = "99.9"), parseFloat(o);
            });
            return (r, o) => {
                const B = R;
                return b(), h("div", p, [ l, e("span", n, [ N(B, {
                    percentage: t(_),
                    "stroke-width": t(m),
                    "text-inside": !0,
                    striped: ""
                }, null, 8, [ "percentage", "stroke-width" ]) ]), e("span", u, [ e("span", i, f(t(d)), 1), k("/" + f(t(s)), 1) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-8dff5ba4" ] ]);
});

export {
    w as __tla,
    c as default
};