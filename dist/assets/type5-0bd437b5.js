import g, {
    __tla as C
} from "./editEditor-a03e6696.js";

import {
    _ as b
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    e as A,
    o as V,
    c as j,
    t as a,
    a as r,
    k as x,
    R as H,
    S as L,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    __tla as T
} from "./Editor-ef737d2a.js";

import {
    __tla as k
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as q
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as B
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let f, I = Promise.all([ (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})() ]).then(async () => {
    let l, o, c, _, i, n, m, d;
    l = {
        class: "qusetion-info"
    }, o = {
        class: "info-item"
    }, c = [ "innerHTML" ], _ = {
        class: "info-item"
    }, i = {
        class: "value"
    }, n = {
        class: "choices"
    }, m = (t => (H("data-v-cf576528"), t = t(), L(), t))(() => a("div", {
        class: "choices-label"
    }, " ", -1)), d = {
        class: "choices-html"
    }, f = b({
        __name: "type5",
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
        setup(t, {
            emit: p
        }) {
            const h = p, v = t, s = A({
                get: () => v.form,
                set: e => {
                    emit("update:form", e);
                }
            });
            function y(e) {
                h("answerChange", e);
            }
            return (e, u) => (V(), j("div", l, [ a("div", o, [ a("div", {
                class: "value",
                innerHTML: r(s).stem
            }, null, 8, c) ]), a("div", _, [ a("div", i, [ a("div", n, [ m, a("div", d, [ x(g, {
                modelValue: r(s).candidateAnswer,
                "onUpdate:modelValue": u[0] || (u[0] = w => r(s).candidateAnswer = w),
                placeholder: "",
                onAnswerChange: y
            }, null, 8, [ "modelValue" ]) ]) ]) ]) ]) ]));
        }
    }, [ [ "__scopeId", "data-v-cf576528" ] ]);
});

export {
    I as __tla,
    f as default
};