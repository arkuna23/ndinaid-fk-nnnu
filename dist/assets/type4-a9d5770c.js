import {
    a0 as xe,
    j as Ce,
    o as t,
    c as n,
    A as g,
    G as me,
    a,
    t as e,
    F as h,
    y as _,
    B as i,
    v as p,
    k as o,
    l as y,
    D as d,
    z as Be,
    C as He,
    bs as qe,
    bq as Ue,
    cK as je,
    K as ze,
    L as Fe,
    P as Pe,
    R as De,
    S as Ke,
    __tla as Ee
} from "./index-6c08ea4c.js";

import {
    _ as Qe,
    __tla as $e
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    f as pe,
    __tla as Ge
} from "./formatTime-de6f1520.js";

import {
    D as Ie,
    __tla as Oe
} from "./dict-c5825220.js";

import {
    _ as Xe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let ve, Je = Promise.all([ (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})() ]).then(async () => {
    let r, w, S, T, L, M, V, A, R, x, C, B, H, q, U, j, z, F, P, D, K, E, Q, $, G, I, O, X, J, N, W, Y, Z, ee, ae, se, le, te, ne, ie;
    r = v => (De("data-v-3d91b83d"), v = v(), Ke(), v), w = {
        class: "qusetion-info"
    }, S = {
        class: "info-item"
    }, T = {
        class: "label"
    }, L = [ "innerHTML" ], M = {
        class: "info-item"
    }, V = {
        class: "answerContent"
    }, A = {
        class: "answerContentTitle"
    }, R = [ "innerHTML" ], x = {
        class: "answerResult"
    }, C = {
        style: {
            color: "#2b58dd",
            margin: "0 2px"
        }
    }, B = {
        key: 0,
        class: "answerResultTag"
    }, H = {
        key: 1,
        class: "ml20"
    }, q = {
        key: 0,
        class: "value-input"
    }, U = {
        class: "info-item"
    }, j = r(() => e("div", {
        class: "label"
    }, "参考答案", -1)), z = {
        class: "value"
    }, F = {
        class: "choices-item"
    }, P = {
        class: "choices-label"
    }, D = {
        class: "choices-html"
    }, K = {
        class: "neu-thumbnailDisplay tagText"
    }, E = {
        class: "info-item"
    }, Q = r(() => e("div", {
        class: "label"
    }, "解析", -1)), $ = [ "innerHTML" ], G = {
        key: 0,
        class: "info-item"
    }, I = r(() => e("div", {
        class: "label"
    }, "试题批语", -1)), O = {
        class: "value"
    }, X = {
        key: 1,
        class: "info-item"
    }, J = r(() => e("div", {
        class: "label"
    }, "批阅人", -1)), N = {
        class: "value"
    }, W = {
        key: 1,
        class: "qusetion-bg-pink mt10 py-2 pr-5"
    }, Y = {
        class: "info-item"
    }, Z = r(() => e("div", {
        class: "label"
    }, "改阅人", -1)), ee = {
        class: "value"
    }, ae = {
        class: "info-item"
    }, se = r(() => e("div", {
        class: "label"
    }, "改阅原因", -1)), le = {
        class: "value"
    }, te = {
        key: 2,
        class: "item-input"
    }, ne = r(() => e("div", {
        class: "label"
    }, "本题批语", -1)), ie = {
        class: "value"
    }, ve = Xe({
        __name: "type4",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            inLibrary: {
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
            },
            hideQuestionStem: {
                type: Boolean,
                default: !1
            },
            markType: {
                type: String,
                default: ""
            },
            showScore: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "update:form", "computedScore" ],
        setup(v, {
            emit: ye
        }) {
            const re = ye, fe = v, {
                form: s,
                inPageView: ce,
                hideAnswer: ke,
                hideQuestionStem: he,
                markType: u,
                showScore: _e
            } = xe(fe);
            return (Ne, f) => {
                const de = qe, be = Ue, ge = Qe, we = je, Se = ze, Te = Fe, Le = Pe, Me = Ce("show-tip");
                return t(), n("div", w, [ g(e("div", S, [ g(e("div", T, "题干", 512), [ [ me, !a(ce) ] ]), e("div", {
                    class: "value",
                    innerHTML: a(s).stem
                }, null, 8, L) ], 512), [ [ me, !a(he) ] ]), e("div", M, [ (t(!0), 
                n(h, null, _(a(s).candidateAnswer, (l, c) => {
                    var m;
                    return t(), n("div", {
                        key: c,
                        class: "candidateAnswer"
                    }, [ e("span", V, [ e("span", A, i(c + 1), 1), e("span", {
                        class: "answerContentText",
                        innerHTML: ((m = l.candidateAnswer) == null ? void 0 : m.split("|").join("、")) || ""
                    }, null, 8, R) ]), e("span", x, [ e("span", null, [ p("满分 "), e("span", C, i(a(s).blankScoreList[c] || 0), 1), p(" 分") ]), [ "0", "1", "2" ].includes(a(u)) ? (t(), 
                    n("span", B, [ o(be, {
                        modelValue: l.markrResults,
                        "onUpdate:modelValue": k => l.markrResults = k,
                        class: "neu-diamond",
                        size: "large",
                        onChange: k => (We => {
                            let oe = 0, Ve = s.value.candidateScore || 0;
                            s.value.candidateAnswer.forEach((Ae, ue) => {
                                if (Ae.markrResults === "2" && ue < s.value.blankScoreList.length) {
                                    const Re = parseFloat(s.value.blankScoreList[ue]) || 0;
                                    oe += Re;
                                }
                            }), s.value.candidateScore = parseFloat(oe.toFixed(1)), 
                            re("computedScore", {
                                type: 2,
                                newCandidateScore: s.value.candidateScore,
                                oldCandidateScore: Ve
                            }), re("update:form", s.value);
                        })()
                    }, {
                        default: y(() => [ o(de, {
                            class: "value-tag correct",
                            label: "2"
                        }, {
                            default: y(() => [ p("正确") ]),
                            _: 1
                        }), o(de, {
                            class: "value-tag error",
                            label: "0"
                        }, {
                            default: y(() => [ p("错误") ]),
                            _: 1
                        }) ]),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue", "onChange" ]) ])) : d("", !0), [ "3", "4" ].includes(a(u)) && a(_e) ? (t(), 
                    n("span", H, [ o(ge, {
                        tpye: a(Ie).EXAM_MARK_STATUS,
                        value: l.markrResults,
                        style: {
                            display: "inline-block"
                        }
                    }, null, 8, [ "tpye", "value" ]) ])) : d("", !0) ]) ]);
                }), 128)), [ "0", "1", "2" ].includes(a(u)) ? (t(), n("div", q, [ p("得分 "), o(we, {
                    modelValue: a(s).candidateScore,
                    "onUpdate:modelValue": f[0] || (f[0] = l => a(s).candidateScore = l),
                    controls: !1,
                    disabled: !0,
                    max: a(s).questionScore,
                    precision: 1,
                    class: "markStyle",
                    size: "large"
                }, null, 8, [ "modelValue", "max" ]), p(" 分 ") ])) : d("", !0) ]), a(ke) ? d("", !0) : (t(), 
                n("div", {
                    key: 0,
                    class: Be(a(ce) ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ e("div", U, [ j, e("div", z, [ (t(!0), n(h, null, _(a(s).standardAnswer || [], (l, c) => (t(), 
                n("div", {
                    key: l.answer + c,
                    class: "choices"
                }, [ e("div", F, [ e("div", P, " 第" + i(c + 1) + "空： ", 1), e("div", D, [ (t(!0), 
                n(h, null, _((l.answer || "").split("|"), (m, k) => (t(), He(Te, {
                    key: k + m,
                    "disable-transitions": !1,
                    class: "mr-2"
                }, {
                    default: y(() => [ g((t(), n("span", null, [ o(Se, {
                        content: m,
                        "show-after": 300,
                        effect: "light",
                        placement: "top",
                        "raw-content": ""
                    }, {
                        default: y(() => [ e("span", K, i(m), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ Me ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]) ]))), 128)) ]) ]), e("div", E, [ Q, e("div", {
                    class: "value",
                    innerHTML: a(s).analysis ?? "--"
                }, null, 8, $) ]), [ "2", "3", "4" ].includes(a(u)) ? (t(), n("div", G, [ I, e("div", O, i(a(s).remark ?? "--"), 1) ])) : d("", !0), a(s).markerRemarks.length > 0 ? (t(), 
                n("div", X, [ J, e("div", N, i((b = a(s).markerRemarks, b.length > 0 ? b.map(l => `${l.marker ?? "--"}\uFF0C\u4E8E${pe(l.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : d("", !0) ], 2)), [ "3", "2", "4" ].includes(a(u)) && a(s).changeMarkers.length > 0 ? (t(), 
                n("div", W, [ (t(!0), n(h, null, _(a(s).changeMarkers, (l, c) => (t(), 
                n("div", {
                    key: c
                }, [ e("div", Y, [ Z, e("div", ee, i(l.changeMarker ?? "--") + "，于" + i(a(pe)(l.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", ae, [ se, e("div", le, i(l.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : d("", !0), [ "0", "1" ].includes(a(u)) ? (t(), 
                n("div", te, [ ne, e("div", ie, [ o(Le, {
                    modelValue: a(s).remark,
                    "onUpdate:modelValue": f[1] || (f[1] = l => a(s).remark = l),
                    maxlength: "200",
                    "show-word-limit": "",
                    placeholder: "请输入试题批语（选填）",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : d("", !0) ]);
                var b;
            };
        }
    }, [ [ "__scopeId", "data-v-3d91b83d" ] ]);
});

export {
    Je as __tla,
    ve as default
};