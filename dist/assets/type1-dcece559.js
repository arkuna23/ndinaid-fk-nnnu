import {
    e as T,
    o as n,
    c as o,
    t as e,
    a as l,
    k as v,
    l as _,
    F as I,
    y as V,
    B as k,
    bp as q,
    bq as B,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    _ as x
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, F = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})() ]).then(async () => {
    let i, c, r, d, u, m, f;
    i = {
        class: "qusetion-info"
    }, c = {
        class: "info-item"
    }, r = [ "innerHTML" ], d = {
        class: "info-item"
    }, u = {
        class: "value"
    }, m = {
        class: "choices-label"
    }, f = [ "innerHTML" ], C = x({
        __name: "type1",
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
        emits: [ "update:answer", "answerChange", "update:form" ],
        setup(y, {
            emit: w
        }) {
            const b = w, g = y, s = T({
                get: () => g.form,
                set: t => {
                    emit("update:form", t);
                }
            });
            function A(t) {
                b("answerChange", t);
            }
            return (t, h) => {
                const H = q, L = B;
                return n(), o("div", i, [ e("div", c, [ e("div", {
                    class: "value",
                    innerHTML: l(s).stem
                }, null, 8, r) ]), e("div", d, [ e("div", u, [ v(L, {
                    modelValue: l(s).candidateAnswer,
                    "onUpdate:modelValue": h[0] || (h[0] = a => l(s).candidateAnswer = a),
                    onChange: A
                }, {
                    default: _(() => [ (n(!0), o(I, null, V(l(s).choices || [], (a, M) => (n(), 
                    o("div", {
                        class: "choices",
                        key: a.choiceId
                    }, [ v(H, {
                        value: a.choiceId
                    }, {
                        default: _(() => {
                            return [ e("div", m, k((p = M, String.fromCharCode(p + "A".charCodeAt()) + ".")), 1), e("div", {
                                class: "choices-html",
                                innerHTML: a.choiceContent
                            }, null, 8, f) ];
                            var p;
                        }),
                        _: 2
                    }, 1032, [ "value" ]) ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-f803f10d" ] ]);
});

export {
    F as __tla,
    C as default
};