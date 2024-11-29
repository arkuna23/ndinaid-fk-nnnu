import {
    aO as m,
    a,
    a0 as y,
    e as u,
    o as x,
    c as v,
    t as s,
    x as d,
    B as h,
    R as b,
    S as w,
    __tla as z
} from "./index-6c08ea4c.js";

import {
    _ as C
} from "./_plugin-vue_export-helper-1b428a4d.js";

let i, F = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})() ]).then(async () => {
    let r, l, o, p, n;
    r = {
        class: "progress-container"
    }, l = {
        class: "progress-bar"
    }, o = {
        style: {
            display: "flex",
            "align-items": "flex-end"
        }
    }, p = {
        style: {
            "font-size": "12px",
            "font-weight": "700"
        }
    }, n = (e => (b("data-v-d004c0da"), e = e(), w(), e))(() => s("span", {
        style: {
            "font-size": "10px",
            "font-weight": "400"
        }
    }, "%", -1)), i = C({
        __name: "index",
        props: {
            percentage: {
                type: Number,
                default: 50
            },
            progressColor: {
                type: String,
                default: "#245fe6"
            }
        },
        setup(e) {
            m(_ => ({
                39683086: a(f)
            }));
            const c = e, {
                percentage: t,
                progressColor: f
            } = y(c), g = u(() => parseFloat(Number(t.value).toFixed(2)));
            return (_, N) => (x(), v("div", r, [ s("div", l, [ s("div", {
                class: "progress",
                style: d({
                    width: `${a(t)}%`
                })
            }, null, 4) ]), s("div", {
                class: "progress-text",
                style: d({
                    left: `${a(t)}%`
                })
            }, [ s("div", o, [ s("span", p, h(a(g)), 1), n ]) ], 4) ]));
        }
    }, [ [ "__scopeId", "data-v-d004c0da" ] ]);
});

export {
    i as _,
    F as __tla
};