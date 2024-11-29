import {
    ag as n,
    e as o,
    o as c,
    c as d,
    k as u,
    v as _,
    B as p,
    z as g,
    a as f,
    x as m,
    _ as y,
    __tla as S
} from "./index-6c08ea4c.js";

import {
    _ as h
} from "./_plugin-vue_export-helper-1b428a4d.js";

let e, v = Promise.all([ (() => {
    try {
        return S;
    } catch {}
})() ]).then(async () => {
    e = h({
        __name: "index",
        props: {
            title: {
                type: String,
                default: ""
            },
            width: {
                type: String,
                default: "100%"
            },
            isStudentFlag: {
                type: String,
                default: "2"
            }
        },
        setup(s) {
            const l = n(), i = o(() => {
                let a = "";
                return a = t.isStudentFlag === "2" ? l.getLayout : t.isStudentFlag === "1" ? "top" : "custom", 
                a;
            }), t = s;
            return (a, w) => {
                const r = y;
                return c(), d("div", {
                    class: g([ "com-alert", `${f(i)}-alert` ]),
                    style: m(`width: ${t.width}`)
                }, [ u(r, {
                    icon: "ep:info-filled",
                    class: "icon-info"
                }), _(" " + p(t.title), 1) ], 6);
            };
        }
    }, [ [ "__scopeId", "data-v-79874504" ] ]);
});

export {
    e as _,
    v as __tla
};