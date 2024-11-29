import {
    e as k,
    o as l,
    c as r,
    t,
    a as s,
    F as V,
    y as g,
    B as o,
    k as x,
    l as M,
    v as P,
    P as T,
    __tla as q
} from "./index-6c08ea4c.js";

import z, {
    __tla as E
} from "./editEditor-a03e6696.js";

import {
    _ as F
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as I
} from "./Editor-ef737d2a.js";

import {
    __tla as O
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as D
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as G
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let C, J = Promise.all([ (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    let i, d, _, m, u, p, h, v, f, y, w;
    i = {
        class: "qusetion-info"
    }, d = {
        class: "info-item"
    }, _ = [ "innerHTML" ], m = {
        class: "info-item"
    }, u = {
        class: "value"
    }, p = {
        key: 0
    }, h = {
        class: "choices-label"
    }, v = {
        class: "choices-html"
    }, f = {
        class: "choices-score",
        style: {
            "box-sizing": "border-box"
        }
    }, y = {
        class: "choices-html"
    }, w = {
        class: "choices-score"
    }, C = F({
        __name: "type4",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isChild: {
                type: Boolean,
                default: !1
            },
            isSubjective: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "answerChange" ],
        setup(b, {
            emit: L
        }) {
            const S = L, j = b, a = k({
                get: () => j.form,
                set: c => {
                    emit("update:form", c);
                }
            });
            let A = k(() => {
                var c;
                return (c = a.value) == null ? void 0 : c.stem.match(/([\(|（]\s*[\)|）])/g);
            });
            function U() {
                S("answerChange", a.value.candidateAnswer);
            }
            return (c, K) => {
                const B = T;
                return l(), r("div", i, [ t("div", d, [ t("div", {
                    class: "value",
                    innerHTML: s(a).stem
                }, null, 8, _) ]), t("div", m, [ t("div", u, [ b.isSubjective ? (l(), 
                r("div", p, [ (l(!0), r(V, null, g(s(A), (H, e) => (l(), r("div", {
                    class: "choices",
                    key: e
                }, [ t("div", h, o(e + 1), 1), t("div", v, [ x(z, {
                    modelValue: s(a).candidateAnswer[e].candidateAnswer,
                    "onUpdate:modelValue": n => s(a).candidateAnswer[e].candidateAnswer = n,
                    placeholder: " ",
                    onAnswerChange: U
                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]), t("div", f, o(s(a).blankScoreList[e] || 0) + " 分 ", 1) ]))), 128)) ])) : (l(!0), 
                r(V, {
                    key: 1
                }, g(s(A), (H, e) => (l(), r("div", {
                    class: "choices",
                    key: e
                }, [ t("div", y, [ x(B, {
                    modelValue: s(a).candidateAnswer[e].candidateAnswer,
                    "onUpdate:modelValue": n => s(a).candidateAnswer[e].candidateAnswer = n,
                    placeholder: ""
                }, {
                    prepend: M(() => [ P(o(e + 1), 1) ]),
                    _: 2
                }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]), t("div", w, " 满分 " + o(s(a).blankScoreList[e] || 0) + " 分 ", 1) ]))), 128)) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-3594d1b8" ] ]);
});

export {
    J as __tla,
    C as default
};