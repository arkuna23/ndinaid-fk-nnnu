import {
    r as s,
    o as f,
    c as V,
    k as v,
    l as x,
    t as w,
    a as r,
    m as _,
    P as N,
    aU as T,
    n as U,
    __tla as b
} from "./index-6c08ea4c.js";

import {
    g as P,
    __tla as k
} from "./log-8da79d7b.js";

import {
    _ as B
} from "./_plugin-vue_export-helper-1b428a4d.js";

let g, C = Promise.all([ (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})() ]).then(async () => {
    let c, d;
    c = {
        class: "init-log"
    }, d = {
        class: "log-content"
    }, g = B({
        __name: "init-log",
        setup(D, {
            expose: y
        }) {
            const t = s(), u = s(!1), e = s(""), i = s(""), p = s(null), h = () => {
                try {
                    window.clearInterval(p.value);
                } catch {}
            }, m = () => {
                P({
                    ciName: t.value.ciName,
                    ciNamespace: t.value.ciNameSpace,
                    envId: t.value.envId,
                    ciType: t.value.ciType
                }).then(a => {
                    let l = e.value;
                    e.value = a, U(() => {
                        l != e.value && setTimeout(() => {
                            const o = document.getElementById("logInput");
                            o && (o.scrollTop = o.scrollHeight);
                        }, 50);
                    });
                });
            };
            return y({
                openDialog: a => {
                    i.value = a.title, t.value = a, u.value = !0, m(), p.value = setInterval(() => {
                        m();
                    }, 3e3);
                }
            }), (a, l) => {
                const o = N, I = T;
                return f(), V("div", c, [ v(I, {
                    title: r(i),
                    modelValue: r(u),
                    "onUpdate:modelValue": l[1] || (l[1] = n => _(u) ? u.value = n : null),
                    width: "700px",
                    onClose: h,
                    "append-to-body": !0
                }, {
                    default: x(() => [ w("div", d, [ v(o, {
                        id: "logInput",
                        modelValue: r(e),
                        "onUpdate:modelValue": l[0] || (l[0] = n => _(e) ? e.value = n : null),
                        type: "textarea",
                        rows: 20,
                        placeholder: "",
                        disabled: ""
                    }, null, 8, [ "modelValue" ]) ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-05f09c8f" ] ]);
});

export {
    C as __tla,
    g as default
};