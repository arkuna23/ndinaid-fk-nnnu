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
    a as m,
    D as u,
    F as z,
    y as G,
    l as p,
    v as sa,
    B as h,
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
    let t, y, _, w, T, b, g, C, L, I, k, P, A, H, M, B, V, D, E, S, j, q, x, F, O, U;
    t = n => (ca("data-v-ccd29955"), n = n(), ra(), n), y = {
        class: "qusetion-info"
    }, _ = {
        key: 0,
        class: "info-item"
    }, w = {
        class: "label"
    }, T = {
        class: "value"
    }, b = {
        class: "info-item"
    }, g = {
        class: "label"
    }, C = [ "innerHTML" ], L = {
        class: "info-item"
    }, I = {
        class: "label"
    }, k = {
        class: "value"
    }, P = {
        class: "choices-label"
    }, A = [ "innerHTML" ], H = {
        class: "info-item"
    }, M = t(() => a("div", {
        class: "label"
    }, "答案", -1)), B = {
        class: "value"
    }, V = {
        class: "info-item"
    }, D = t(() => a("div", {
        class: "label"
    }, "解析", -1)), E = [ "innerHTML" ], S = {
        key: 0,
        class: "info-item"
    }, j = t(() => a("div", {
        class: "label"
    }, "难易度", -1)), q = {
        class: "value"
    }, x = {
        key: 1,
        class: "info-item"
    }, F = t(() => a("div", {
        class: "label"
    }, "标签", -1)), O = {
        class: "value"
    }, U = {
        class: "neu-thumbnailDisplay tagText"
    }, R = ma({
        __name: "type3",
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
                return (e.form.choices || []).forEach((Q, c) => {
                    Q.choiceId === e.form.answer && (o = c);
                }), N(o);
            });
            function N(o) {
                return String.fromCharCode(o + "A".charCodeAt());
            }
            return (o, Q) => {
                const c = ua, Z = ta, J = na, W = oa, X = ea("show-tip");
                return s(), l("div", y, [ e.showType ? (s(), l("div", _, [ r(a("div", w, "题型", 512), [ [ f, !e.inPageView ] ]), a("div", T, [ d(c, {
                    type: m(K).QUESTION_TYPE,
                    value: e.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : u("", !0), a("div", b, [ r(a("div", g, "题干", 512), [ [ f, !e.inPageView ] ]), a("div", {
                    class: "value",
                    innerHTML: e.form.stem
                }, null, 8, C) ]), a("div", L, [ r(a("div", I, "选项", 512), [ [ f, !e.inPageView ] ]), a("div", k, [ (s(!0), 
                l(z, null, G(e.form.choices || [], (i, v) => (s(), l("div", {
                    class: "choices",
                    key: i.choiceId
                }, [ a("div", P, [ d(Z, {
                    value: i.choiceId,
                    "model-value": e.hideAnswer ? "" : e.form.answer
                }, {
                    default: p(() => [ sa(h(N(v) + "."), 1) ]),
                    _: 2
                }, 1032, [ "value", "model-value" ]) ]), a("div", {
                    class: "choices-html",
                    innerHTML: i.choiceContent
                }, null, 8, A) ]))), 128)) ]) ]), e.hideAnswer ? u("", !0) : (s(), 
                l("div", {
                    key: 1,
                    class: la(e.inPageView ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ a("div", H, [ M, a("div", B, h(m(Y)), 1) ]), a("div", V, [ D, a("div", {
                    class: "value",
                    innerHTML: e.form.analysis
                }, null, 8, E) ]), e.isChild ? u("", !0) : (s(), l("div", S, [ j, a("div", q, [ d(c, {
                    type: m(K).QUESTION_DIFFICULT,
                    value: e.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ])), e.isChild ? u("", !0) : (s(), 
                l("div", x, [ F, a("div", O, [ (s(!0), l(z, null, G(e.form.tags || [], (i, v) => (s(), 
                ia(W, {
                    key: v + i,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: p(() => [ r((s(), l("span", null, [ d(J, {
                        content: i,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: p(() => [ a("span", U, h(i), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ X ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ])) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ccd29955" ] ]);
});

export {
    pa as __tla,
    R as default
};