import {
    b8 as re,
    aT as me,
    j as ce,
    o as s,
    c as t,
    A as y,
    G as le,
    t as e,
    k as a,
    a as _,
    D as o,
    F as ae,
    y as se,
    B as te,
    l as u,
    z as ve,
    C as pe,
    P as fe,
    O as ye,
    Q as _e,
    K as be,
    L as he,
    R as we,
    S as ge,
    __tla as Te
} from "./index-6c08ea4c.js";

import {
    _ as Ve,
    __tla as xe
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as b,
    __tla as ke
} from "./dict-c5825220.js";

import {
    _ as Ce
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let ie, Pe = Promise.all([ (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})() ]).then(async () => {
    let i, h, w, g, T, V, x, k, C, P, U, I, O, A, H, L, M, E, B, D, Q, R, S, q, F, N, j, G, Y, z, K, J, W, X, Z;
    i = n => (we("data-v-9f87777b"), n = n(), ge(), n), h = {
        class: "qusetion-info"
    }, w = {
        key: 0,
        class: "info-item"
    }, g = {
        class: "label"
    }, T = {
        class: "value"
    }, V = {
        class: "info-item"
    }, x = i(() => e("div", {
        class: "label"
    }, "语言类型", -1)), k = {
        class: "value"
    }, C = {
        class: "info-item"
    }, P = {
        class: "label"
    }, U = [ "innerHTML" ], I = {
        key: 1,
        class: "info-item mb-2"
    }, O = i(() => e("div", {
        class: "label"
    }, "主函数", -1)), A = {
        class: "value"
    }, H = {
        class: "info-item mb-2"
    }, L = i(() => e("div", {
        class: "label"
    }, "代码区", -1)), M = {
        class: "value"
    }, E = {
        key: 2,
        class: "info-item"
    }, B = i(() => e("div", {
        class: "label"
    }, "测试用例", -1)), D = {
        class: "info-cont value"
    }, Q = {
        class: "test-list"
    }, R = {
        class: "item-title"
    }, S = {
        class: "info-item"
    }, q = i(() => e("div", {
        class: "label"
    }, "答案", -1)), F = {
        class: "value"
    }, N = {
        key: 0,
        class: "info-item"
    }, j = i(() => e("div", {
        class: "label"
    }, "解析", -1)), G = [ "innerHTML" ], Y = {
        class: "info-item"
    }, z = i(() => e("div", {
        class: "label"
    }, "难易度", -1)), K = {
        class: "value"
    }, J = {
        class: "info-item"
    }, W = i(() => e("div", {
        class: "label"
    }, "标签", -1)), X = {
        class: "value"
    }, Z = {
        class: "neu-thumbnailDisplay tagText"
    }, ie = Ce({
        __name: "type20",
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
        setup(n) {
            re();
            const l = n;
            function m(c) {
                return c && decodeURIComponent(escape(window.atob(c))) || "";
            }
            return (c, Ue) => {
                const v = Ve, p = me("ComCodeMirror"), $ = fe, ee = ye, de = _e, ne = be, oe = he, ue = ce("show-tip");
                return s(), t("div", h, [ l.showType ? (s(), t("div", w, [ y(e("div", g, "题型", 512), [ [ le, !l.inPageView ] ]), e("div", T, [ a(v, {
                    type: _(b).QUESTION_TYPE,
                    value: l.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : o("", !0), e("div", V, [ x, e("div", k, [ a(v, {
                    type: _(b).QUESTION_PROGRAM_TYPE,
                    value: l.form.langId
                }, null, 8, [ "type", "value" ]) ]) ]), e("div", C, [ y(e("div", P, "题干", 512), [ [ le, !l.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: l.form.stem
                }, null, 8, U) ]), l.hideAnswer ? o("", !0) : (s(), t("div", I, [ O, e("div", A, [ a(p, {
                    placeholder: "",
                    "model-value": m(l.form.mainContent),
                    disabled: !0,
                    defaultHeight: 200
                }, null, 8, [ "model-value" ]) ]) ])), e("div", H, [ L, e("div", M, [ a(p, {
                    placeholder: "",
                    "model-value": m(l.form.solutionContent),
                    disabled: !0,
                    defaultHeight: 200
                }, null, 8, [ "model-value" ]) ]) ]), l.hideAnswer ? o("", !0) : (s(), 
                t("div", E, [ B, e("div", D, [ e("div", Q, [ (s(!0), t(ae, null, se(l.form.testCases, (d, r) => (s(), 
                t("div", {
                    class: "test-item",
                    key: r
                }, [ e("div", R, " 用例" + te(r + 1) + ": ", 1), a(de, null, {
                    default: u(() => [ a(ee, {
                        label: "输入",
                        "label-width": "80px",
                        style: {
                            border: "0",
                            "margin-bottom": "20px",
                            padding: "0"
                        }
                    }, {
                        default: u(() => [ a($, {
                            modelValue: d.in,
                            "onUpdate:modelValue": f => d.in = f,
                            readonly: ""
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1024), a(ee, {
                        label: "预期结果",
                        "label-width": "80px",
                        style: {
                            border: "0",
                            "margin-bottom": "20px",
                            padding: "0"
                        }
                    }, {
                        default: u(() => [ a($, {
                            modelValue: d.expectOut,
                            "onUpdate:modelValue": f => d.expectOut = f,
                            readonly: ""
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1024) ]),
                    _: 2
                }, 1024) ]))), 128)) ]) ]) ])), l.hideAnswer ? o("", !0) : (s(), 
                t("div", {
                    key: 3,
                    class: ve(l.inPageView ? "py-2 pr-5 mt-2 qusetion-bg-gray" : "")
                }, [ e("div", S, [ q, e("div", F, [ a(p, {
                    placeholder: "",
                    "model-value": m(l.form.answer),
                    disabled: !0,
                    defaultHeight: 200
                }, null, 8, [ "model-value" ]) ]) ]), l.hideAnswer ? o("", !0) : (s(), 
                t("div", N, [ j, e("div", {
                    class: "value",
                    innerHTML: l.form.analysis
                }, null, 8, G) ])), e("div", Y, [ z, e("div", K, [ a(v, {
                    type: _(b).QUESTION_DIFFICULT,
                    value: l.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ]), e("div", J, [ W, e("div", X, [ (s(!0), 
                t(ae, null, se(l.form.tags || [], (d, r) => (s(), pe(oe, {
                    key: r + d,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: u(() => [ y((s(), t("span", null, [ a(ne, {
                        content: d,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: u(() => [ e("span", Z, te(d), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ ue ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9f87777b" ] ]);
});

export {
    Pe as __tla,
    ie as default
};