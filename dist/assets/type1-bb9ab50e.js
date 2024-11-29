import {
    b8 as $,
    e as aa,
    j as ea,
    o as s,
    c as l,
    A as r,
    G as f,
    t as a,
    k as d,
    a as Q,
    D as u,
    F as z,
    y as G,
    l as m,
    v as sa,
    B as p,
    z as la,
    C as ia,
    bp as ta,
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
    D as K,
    __tla as fa
} from "./dict-c5825220.js";

import {
    _ as ma
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let R, pa = Promise.all([ (() => {
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
    let t, h, y, _, b, w, T, g, C, L, I, k, P, A, H, M, B, V, D, E, S, j, q, x, F, O;
    t = n => (ca("data-v-6e8dcb06"), n = n(), ra(), n), h = {
        class: "qusetion-info"
    }, y = {
        key: 0,
        class: "info-item"
    }, _ = {
        class: "label"
    }, b = {
        class: "value"
    }, w = {
        class: "info-item"
    }, T = {
        class: "label"
    }, g = [ "innerHTML" ], C = {
        class: "info-item"
    }, L = {
        class: "label"
    }, I = {
        class: "value"
    }, k = {
        class: "choices-label"
    }, P = [ "innerHTML" ], A = {
        class: "info-item"
    }, H = t(() => a("div", {
        class: "label"
    }, "答案", -1)), M = {
        class: "value"
    }, B = {
        class: "info-item"
    }, V = t(() => a("div", {
        class: "label"
    }, "解析", -1)), D = [ "innerHTML" ], E = {
        key: 0,
        class: "info-item"
    }, S = t(() => a("div", {
        class: "label"
    }, "难易度", -1)), j = {
        class: "value"
    }, q = {
        key: 1,
        class: "info-item"
    }, x = t(() => a("div", {
        class: "label"
    }, "标签", -1)), F = {
        class: "value"
    }, O = {
        class: "neu-thumbnailDisplay tagText"
    }, R = ma({
        __name: "type1",
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
            $();
            const e = n, Y = aa(() => {
                let o;
                return (e.form.choices || []).forEach((N, c) => {
                    N.choiceId === e.form.answer && (o = c);
                }), U(o);
            });
            function U(o) {
                return String.fromCharCode(o + "A".charCodeAt());
            }
            return (o, N) => {
                const c = ua, Z = ta, J = na, W = oa, X = ea("show-tip");
                return s(), l("div", h, [ e.showType ? (s(), l("div", y, [ r(a("div", _, "题型", 512), [ [ f, !e.inPageView ] ]), a("div", b, [ d(c, {
                    type: Q(K).QUESTION_TYPE,
                    value: e.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : u("", !0), a("div", w, [ r(a("div", T, "题干", 512), [ [ f, !e.inPageView ] ]), a("div", {
                    class: "value",
                    innerHTML: e.form.stem
                }, null, 8, g) ]), a("div", C, [ r(a("div", L, "选项", 512), [ [ f, !e.inPageView ] ]), a("div", I, [ (s(!0), 
                l(z, null, G(e.form.choices || [], (i, v) => (s(), l("div", {
                    class: "choices",
                    key: i.choiceId
                }, [ a("div", k, [ d(Z, {
                    value: i.choiceId,
                    "model-value": e.hideAnswer ? "" : e.form.answer
                }, {
                    default: m(() => [ sa(p(U(v) + "."), 1) ]),
                    _: 2
                }, 1032, [ "value", "model-value" ]) ]), a("div", {
                    class: "choices-html",
                    innerHTML: i.choiceContent
                }, null, 8, P) ]))), 128)) ]) ]), e.hideAnswer ? u("", !0) : (s(), 
                l("div", {
                    key: 1,
                    class: la(e.inPageView ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ a("div", A, [ H, a("div", M, p(Y.value), 1) ]), a("div", B, [ V, a("div", {
                    class: "value",
                    innerHTML: e.form.analysis
                }, null, 8, D) ]), e.isChild ? u("", !0) : (s(), l("div", E, [ S, a("div", j, [ d(c, {
                    type: Q(K).QUESTION_DIFFICULT,
                    value: e.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ])), e.isChild ? u("", !0) : (s(), 
                l("div", q, [ x, a("div", F, [ (s(!0), l(z, null, G(e.form.tags || [], (i, v) => (s(), 
                ia(W, {
                    key: v + i,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: m(() => [ r((s(), l("span", null, [ d(J, {
                        content: i,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: m(() => [ a("span", O, p(i), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ X ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ])) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6e8dcb06" ] ]);
});

export {
    pa as __tla,
    R as default
};