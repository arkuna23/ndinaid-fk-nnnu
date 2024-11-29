import {
    e as T,
    f as I,
    o as n,
    c as i,
    t as s,
    a as l,
    k as _,
    l as p,
    F as V,
    y as k,
    B,
    a8 as j,
    br as q,
    __tla as x
} from "./index-6c08ea4c.js";

import {
    _ as F
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, O = Promise.all([ (() => {
    try {
        return x;
    } catch {}
})() ]).then(async () => {
    let o, c, r, d, u, m, f;
    o = {
        class: "qusetion-info"
    }, c = {
        class: "info-item"
    }, r = [ "innerHTML" ], d = {
        class: "info-item"
    }, u = {
        class: "value"
    }, m = {
        class: "choices-label"
    }, f = [ "innerHTML" ], C = F({
        __name: "type2",
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
            emit: y
        }) {
            const A = y, b = w, a = T({
                get: () => b.form,
                set: e => {
                    emit("update:form", e);
                }
            });
            function g(e) {
                A("answerChange", e);
            }
            return I(() => {
                var e;
                ((e = a.value) == null ? void 0 : e.candidateAnswer) === null && (a.value.candidateAnswer = []);
            }), (e, h) => {
                const H = j, L = q;
                return n(), i("div", o, [ s("div", c, [ s("div", {
                    class: "value",
                    innerHTML: l(a).stem
                }, null, 8, r) ]), s("div", d, [ s("div", u, [ _(L, {
                    modelValue: l(a).candidateAnswer,
                    "onUpdate:modelValue": h[0] || (h[0] = t => l(a).candidateAnswer = t),
                    onChange: g
                }, {
                    default: p(() => [ (n(!0), i(V, null, k(l(a).choices || [], (t, M) => (n(), 
                    i("div", {
                        class: "choices mb2",
                        key: t.choiceId
                    }, [ _(H, {
                        value: t.choiceId
                    }, {
                        default: p(() => {
                            return [ s("div", m, B((v = M, String.fromCharCode(v + "A".charCodeAt()) + ".")), 1), s("div", {
                                class: "choices-html",
                                innerHTML: t.choiceContent
                            }, null, 8, f) ];
                            var v;
                        }),
                        _: 2
                    }, 1032, [ "value" ]) ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-f7773b43" ] ]);
});

export {
    O as __tla,
    C as default
};