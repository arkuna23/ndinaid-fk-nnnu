import {
    e as v,
    o as c,
    c as i,
    t,
    a as l,
    k as C,
    l as y,
    F as T,
    y as V,
    B as k,
    bp as q,
    bq as B,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    _ as x
} from "./_plugin-vue_export-helper-1b428a4d.js";

let g, E = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})() ]).then(async () => {
    let r, d, u, m, h, f, p;
    r = {
        class: "qusetion-info"
    }, d = {
        class: "info-item"
    }, u = [ "innerHTML" ], m = {
        class: "info-item"
    }, h = {
        class: "value"
    }, f = {
        class: "choices-label"
    }, p = [ "innerHTML" ], g = x({
        __name: "type3",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isChild: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "answerChange", "update:form" ],
        setup(w, {
            emit: b
        }) {
            const A = b, H = w, a = v({
                get: () => H.form,
                set: e => {
                    emit("update:form", e);
                }
            });
            function _(e) {
                return String.fromCharCode(e + "A".charCodeAt());
            }
            function I(e) {
                A("answerChange", e);
            }
            return v(() => {
                let e;
                return (a.choices || []).forEach((n, o) => {
                    n.choiceId === a.answer && (e = o);
                }), _(e);
            }), (e, n) => {
                const o = q, L = B;
                return c(), i("div", r, [ t("div", d, [ t("div", {
                    class: "value",
                    innerHTML: l(a).stem
                }, null, 8, u) ]), t("div", m, [ t("div", h, [ C(L, {
                    modelValue: l(a).candidateAnswer,
                    "onUpdate:modelValue": n[0] || (n[0] = s => l(a).candidateAnswer = s),
                    onChange: I
                }, {
                    default: y(() => [ (c(!0), i(T, null, V(l(a).choices || [], (s, M) => (c(), 
                    i("div", {
                        class: "choices",
                        key: s.choiceId
                    }, [ C(o, {
                        value: s.choiceId
                    }, {
                        default: y(() => [ t("div", f, k(_(M) + "."), 1), t("div", {
                            class: "choices-html",
                            innerHTML: s.choiceContent
                        }, null, 8, p) ]),
                        _: 2
                    }, 1032, [ "value" ]) ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-c50922ab" ] ]);
});

export {
    E as __tla,
    g as default
};