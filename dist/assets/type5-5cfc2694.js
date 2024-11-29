import {
    b8 as R,
    j as J,
    o as e,
    c as l,
    A as o,
    G as S,
    t as a,
    k as r,
    a as U,
    D as d,
    z as W,
    F as K,
    y as N,
    C as Q,
    l as c,
    B as Y,
    K as X,
    L as Z,
    R as $,
    S as aa,
    __tla as sa
} from "./index-6c08ea4c.js";

import {
    _ as ea,
    __tla as la
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as z,
    __tla as ta
} from "./dict-c5825220.js";

import {
    _ as ia
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let G, na = Promise.all([ (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})() ]).then(async () => {
    let i, f, p, v, m, y, _, h, T, w, b, g, L, k, j, H, M, P, B, C, D, I, x, V, q;
    i = n => ($("data-v-4d2025f2"), n = n(), aa(), n), f = {
        class: "qusetion-info"
    }, p = {
        key: 0,
        class: "info-item"
    }, v = {
        class: "label"
    }, m = {
        class: "value"
    }, y = {
        class: "info-item"
    }, _ = {
        class: "label"
    }, h = [ "innerHTML" ], T = {
        class: "info-item"
    }, w = i(() => a("div", {
        class: "label"
    }, "答案", -1)), b = [ "innerHTML" ], g = {
        class: "info-item"
    }, L = i(() => a("div", {
        class: "label"
    }, "关键词", -1)), k = {
        class: "value"
    }, j = {
        class: "neu-thumbnailDisplay tagText"
    }, H = {
        class: "info-item"
    }, M = i(() => a("div", {
        class: "label"
    }, "解析", -1)), P = [ "innerHTML" ], B = {
        key: 0,
        class: "info-item"
    }, C = i(() => a("div", {
        class: "label"
    }, "难易度", -1)), D = {
        class: "value"
    }, I = {
        key: 1,
        class: "info-item"
    }, x = i(() => a("div", {
        class: "label"
    }, "标签", -1)), V = {
        class: "value"
    }, q = {
        class: "neu-thumbnailDisplay tagText"
    }, G = ia({
        __name: "type5",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isChild: {
                type: Boolean,
                default: !1
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
        setup(n) {
            R();
            const s = n;
            return (oa, ra) => {
                const A = ea, E = X, F = Z, O = J("show-tip");
                return e(), l("div", f, [ s.showType ? (e(), l("div", p, [ o(a("div", v, "题型", 512), [ [ S, !s.inPageView ] ]), a("div", m, [ r(A, {
                    type: U(z).QUESTION_TYPE,
                    value: s.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : d("", !0), a("div", y, [ o(a("div", _, "题干", 512), [ [ S, !s.inPageView ] ]), a("div", {
                    class: "value",
                    innerHTML: s.form.stem
                }, null, 8, h) ]), s.hideAnswer ? d("", !0) : (e(), l("div", {
                    key: 1,
                    class: W(s.inPageView ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ a("div", T, [ w, a("div", {
                    class: "value",
                    innerHTML: s.form.answer
                }, null, 8, b) ]), a("div", g, [ L, a("div", k, [ (e(!0), l(K, null, N(s.form.answerKeywords, (t, u) => (e(), 
                Q(F, {
                    key: u + t.join(" 或 "),
                    class: "mr-2",
                    "disable-transitions": !1
                }, {
                    default: c(() => [ o((e(), l("span", null, [ r(E, {
                        content: t.join(" 或 "),
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: c(() => [ a("span", j, Y(t.join(" 或 ")), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ O ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]), a("div", H, [ M, a("div", {
                    class: "value",
                    innerHTML: s.form.analysis
                }, null, 8, P) ]), s.isChild ? d("", !0) : (e(), l("div", B, [ C, a("div", D, [ r(A, {
                    type: U(z).QUESTION_DIFFICULT,
                    value: s.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ])), s.isChild ? d("", !0) : (e(), 
                l("div", I, [ x, a("div", V, [ (e(!0), l(K, null, N(s.form.tags || [], (t, u) => (e(), 
                Q(F, {
                    key: u + t,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    "disable-transitions": !1
                }, {
                    default: c(() => [ o((e(), l("span", null, [ r(E, {
                        content: t,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: c(() => [ a("span", q, Y(t), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ O ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ])) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-4d2025f2" ] ]);
});

export {
    na as __tla,
    G as default
};