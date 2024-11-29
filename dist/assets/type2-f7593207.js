import {
    b8 as aa,
    e as ea,
    j as sa,
    o as s,
    c as l,
    A as u,
    G as p,
    t as a,
    k as v,
    a as h,
    D as f,
    F as z,
    y as G,
    z as la,
    B as K,
    C as ia,
    l as R,
    a8 as ta,
    K as na,
    L as oa,
    R as ca,
    S as ra,
    __tla as da
} from "./index-6c08ea4c.js";

import {
    _ as ua,
    __tla as va
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as X,
    __tla as fa
} from "./dict-c5825220.js";

import {
    _ as ma
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let Y, pa = Promise.all([ (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})() ]).then(async () => {
    let t, y, _, w, b, T, g, C, I, L, k, P, x, A, H, M, B, O, V, j, D, E, S, q, F, U;
    t = n => (ca("data-v-2a400ec8"), n = n(), ra(), n), y = {
        class: "qusetion-info"
    }, _ = {
        key: 0,
        class: "info-item"
    }, w = {
        class: "label"
    }, b = {
        class: "value"
    }, T = {
        class: "info-item"
    }, g = {
        class: "label"
    }, C = [ "innerHTML" ], I = {
        class: "info-item"
    }, L = {
        class: "label"
    }, k = {
        class: "value"
    }, P = {
        class: "choices-label"
    }, x = [ "innerHTML" ], A = {
        class: "info-item"
    }, H = t(() => a("div", {
        class: "label"
    }, "答案", -1)), M = {
        class: "value"
    }, B = {
        class: "info-item"
    }, O = t(() => a("div", {
        class: "label"
    }, "解析", -1)), V = [ "innerHTML" ], j = {
        key: 0,
        class: "info-item"
    }, D = t(() => a("div", {
        class: "label"
    }, "难易度", -1)), E = {
        class: "value"
    }, S = {
        key: 1,
        class: "info-item"
    }, q = t(() => a("div", {
        class: "label"
    }, "标签", -1)), F = {
        class: "value"
    }, U = {
        class: "neu-thumbnailDisplay tagText"
    }, Y = ma({
        __name: "type2",
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
            aa();
            const e = n, J = ea(() => {
                let o = [];
                return (e.form.choices || []).forEach((c, r) => {
                    var d;
                    ((d = e.form.answer) == null ? void 0 : d.indexOf(c.choiceId)) > -1 && o.push(r);
                }), o.map(c => N(c)).join(" ");
            });
            function N(o) {
                return String.fromCharCode(o + "A".charCodeAt());
            }
            return (o, c) => {
                const r = ua, d = ta, W = na, Z = oa, $ = sa("show-tip");
                return s(), l("div", y, [ e.showType ? (s(), l("div", _, [ u(a("div", w, "题型", 512), [ [ p, !e.inPageView ] ]), a("div", b, [ v(r, {
                    type: h(X).QUESTION_TYPE,
                    value: e.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : f("", !0), a("div", T, [ u(a("div", g, "题干", 512), [ [ p, !e.inPageView ] ]), a("div", {
                    class: "value",
                    innerHTML: e.form.stem
                }, null, 8, C) ]), a("div", I, [ u(a("div", L, "选项", 512), [ [ p, !e.inPageView ] ]), a("div", k, [ (s(!0), 
                l(z, null, G(e.form.choices || [], (i, m) => {
                    var Q;
                    return s(), l("div", {
                        class: "choices",
                        key: i.choiceId
                    }, [ a("div", P, [ v(d, {
                        label: N(m) + ".",
                        "model-value": !e.hideAnswer && ((Q = e.form.answer) == null ? void 0 : Q.indexOf(i.choiceId)) >= 0
                    }, null, 8, [ "label", "model-value" ]) ]), a("div", {
                        class: "choices-html",
                        innerHTML: i.choiceContent
                    }, null, 8, x) ]);
                }), 128)) ]) ]), e.hideAnswer ? f("", !0) : (s(), l("div", {
                    key: 1,
                    class: la(e.inPageView ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ a("div", A, [ H, a("div", M, K(h(J)), 1) ]), a("div", B, [ O, a("div", {
                    class: "value",
                    innerHTML: e.form.analysis
                }, null, 8, V) ]), e.isChild ? f("", !0) : (s(), l("div", j, [ D, a("div", E, [ v(r, {
                    type: h(X).QUESTION_DIFFICULT,
                    value: e.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ])), e.isChild ? f("", !0) : (s(), 
                l("div", S, [ q, a("div", F, [ (s(!0), l(z, null, G(e.form.tags || [], (i, m) => (s(), 
                ia(Z, {
                    key: m + i,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: R(() => [ u((s(), l("span", null, [ v(W, {
                        content: i,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: R(() => [ a("span", U, K(i), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ $ ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ])) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-2a400ec8" ] ]);
});

export {
    pa as __tla,
    Y as default
};