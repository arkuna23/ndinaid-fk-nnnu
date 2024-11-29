import {
    b8 as R,
    r as X,
    j as Y,
    o as l,
    c as i,
    A as o,
    G as C,
    t as a,
    k as n,
    a as E,
    D as F,
    l as c,
    v as W,
    z as Z,
    F as $,
    y as aa,
    C as sa,
    B as ea,
    J as la,
    K as ta,
    L as ia,
    R as na,
    S as ra,
    __tla as oa
} from "./index-6c08ea4c.js";

import {
    _ as ca,
    __tla as da
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    M as ua,
    __tla as ma
} from "./myQuestionBank-a9dcc9db.js";

import {
    _ as va
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    D as O,
    __tla as pa
} from "./dict-c5825220.js";

import "./color-a8b4eb58.js";

let S, fa = Promise.all([ (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})() ]).then(async () => {
    let e, d, u, m, v, p, f, _, y, b, h, w, T, g, I, D, L, M, H, P, k, B, x, V;
    e = t => (na("data-v-9c4ab58a"), t = t(), ra(), t), d = {
        class: "qusetion-info"
    }, u = {
        key: 0,
        class: "info-item"
    }, m = {
        class: "label"
    }, v = {
        class: "value"
    }, p = {
        class: "info-item"
    }, f = {
        class: "label"
    }, _ = [ "innerHTML" ], y = {
        class: "info-item"
    }, b = e(() => a("div", {
        class: "label"
    }, "数据库", -1)), h = {
        class: "value"
    }, w = {
        class: "info-item"
    }, T = e(() => a("div", {
        class: "label"
    }, "答案", -1)), g = [ "innerHTML" ], I = {
        class: "info-item"
    }, D = e(() => a("div", {
        class: "label"
    }, "解析", -1)), L = [ "innerHTML" ], M = {
        class: "info-item"
    }, H = e(() => a("div", {
        class: "label"
    }, "难易度", -1)), P = {
        class: "value"
    }, k = {
        class: "info-item"
    }, B = e(() => a("div", {
        class: "label"
    }, "标签", -1)), x = {
        class: "value"
    }, V = {
        class: "neu-thumbnailDisplay tagText"
    }, S = va({
        __name: "type30",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            showType: {
                type: Boolean,
                default: !1
            },
            inPageView: {
                type: Boolean,
                default: !1
            },
            hideAnswer: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "viewDatabase" ],
        setup(t, {
            emit: U
        }) {
            R(), X(null);
            const j = U, s = t;
            function z() {
                ua.getDbById(s.form.dbId).then(q => {
                    j("viewDatabase", q);
                });
            }
            return (q, _a) => {
                const A = ca, N = la, Q = ta, G = ia, J = Y("show-tip");
                return l(), i("div", d, [ s.showType ? (l(), i("div", u, [ o(a("div", m, "题型", 512), [ [ C, !s.inPageView ] ]), a("div", v, [ n(A, {
                    type: E(O).QUESTION_TYPE,
                    value: s.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : F("", !0), a("div", p, [ o(a("div", f, "题干", 512), [ [ C, !s.inPageView ] ]), a("div", {
                    class: "value",
                    innerHTML: s.form.stem
                }, null, 8, _) ]), a("div", y, [ b, a("div", h, [ n(N, {
                    type: "primary",
                    plain: "",
                    size: "small",
                    onClick: z
                }, {
                    default: c(() => [ W("查看数据库") ]),
                    _: 1
                }) ]) ]), s.hideAnswer ? F("", !0) : (l(), i("div", {
                    key: 1,
                    class: Z(s.inPageView ? "py-2 pr-5 mt-2 qusetion-bg-gray" : "")
                }, [ a("div", w, [ T, a("div", {
                    class: "value",
                    innerHTML: s.form.answer
                }, null, 8, g) ]), a("div", I, [ D, a("div", {
                    class: "value",
                    innerHTML: s.form.analysis
                }, null, 8, L) ]), a("div", M, [ H, a("div", P, [ n(A, {
                    type: E(O).QUESTION_DIFFICULT,
                    value: s.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ]), a("div", k, [ B, a("div", x, [ (l(!0), 
                i($, null, aa(s.form.tags || [], (r, K) => (l(), sa(G, {
                    key: K + r,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: c(() => [ o((l(), i("span", null, [ n(Q, {
                        content: r,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: c(() => [ a("span", V, ea(r), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ J ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9c4ab58a" ] ]);
});

export {
    fa as __tla,
    S as default
};