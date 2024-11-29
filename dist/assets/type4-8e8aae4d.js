import {
    a0 as Re,
    j as xe,
    o as t,
    c as n,
    A as b,
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
    z as Ce,
    C as Be,
    bs as He,
    bq as qe,
    cK as De,
    K as Ue,
    L as je,
    P as ze,
    R as Fe,
    S as Pe,
    __tla as Ke
} from "./index-6c08ea4c.js";

import {
    _ as Ee,
    __tla as Qe
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    f as pe,
    __tla as $e
} from "./formatTime-de6f1520.js";

import {
    D as Ge,
    __tla as Ie
} from "./dict-c5825220.js";

import {
    _ as Oe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let ve, Xe = Promise.all([ (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Ie;
    } catch {}
})() ]).then(async () => {
    let r, w, S, T, L, M, V, A, R, x, C, B, H, q, D, U, j, z, F, P, K, E, Q, $, G, I, O, X, J, N, W, Y, Z, ee, ae, se, le, te, ne, ie;
    r = v => (Fe("data-v-7558324f"), v = v(), Pe(), v), w = {
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
            color: "#2B58DD",
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
    }, D = {
        class: "info-item"
    }, U = r(() => e("div", {
        class: "label"
    }, "参考答案", -1)), j = {
        class: "value"
    }, z = {
        class: "choices-item"
    }, F = {
        class: "choices-label"
    }, P = {
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
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
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
    }, ve = Oe({
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
                markType: u
            } = Re(fe);
            return (Je, f) => {
                const de = He, _e = qe, ge = Ee, be = De, we = Ue, Se = je, Te = ze, Le = xe("show-tip");
                return t(), n("div", w, [ b(e("div", S, [ b(e("div", T, "题干", 512), [ [ me, !a(ce) ] ]), e("div", {
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
                    n("span", B, [ o(_e, {
                        modelValue: l.markrResults,
                        "onUpdate:modelValue": k => l.markrResults = k,
                        class: "neu-diamond",
                        size: "large",
                        onChange: k => (Ne => {
                            let oe = 0, Me = s.value.candidateScore || 0;
                            s.value.candidateAnswer.forEach((Ve, ue) => {
                                if (Ve.markrResults === "2" && ue < s.value.blankScoreList.length) {
                                    const Ae = parseFloat(s.value.blankScoreList[ue]) || 0;
                                    oe += Ae;
                                }
                            }), s.value.candidateScore = parseFloat(oe.toFixed(1)), 
                            re("computedScore", {
                                type: 2,
                                newCandidateScore: s.value.candidateScore,
                                oldCandidateScore: Me
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
                    }, 1032, [ "modelValue", "onUpdate:modelValue", "onChange" ]) ])) : d("", !0), [ "3" ].includes(a(u)) ? (t(), 
                    n("span", H, [ o(ge, {
                        tpye: a(Ge).EXAM_MARK_STATUS,
                        value: l.markrResults,
                        style: {
                            display: "inline-block"
                        }
                    }, null, 8, [ "tpye", "value" ]) ])) : d("", !0) ]) ]);
                }), 128)), [ "0", "1", "2" ].includes(a(u)) ? (t(), n("div", q, [ p("得分 "), o(be, {
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
                    class: Ce(a(ce) ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ e("div", D, [ U, e("div", j, [ (t(!0), n(h, null, _(a(s).standardAnswer || [], (l, c) => (t(), 
                n("div", {
                    key: l.answer + c,
                    class: "choices"
                }, [ e("div", z, [ e("div", F, " 第" + i(c + 1) + "空： ", 1), e("div", P, [ (t(!0), 
                n(h, null, _((l.answer || "").split("|"), (m, k) => (t(), Be(Se, {
                    key: k + m,
                    "disable-transitions": !1,
                    class: "mr-2"
                }, {
                    default: y(() => [ b((t(), n("span", null, [ o(we, {
                        content: m,
                        "show-after": 300,
                        effect: "light",
                        placement: "top",
                        "raw-content": ""
                    }, {
                        default: y(() => [ e("span", K, i(m), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ Le ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]) ]))), 128)) ]) ]), e("div", E, [ Q, e("div", {
                    class: "value",
                    innerHTML: a(s).analysis ?? "--"
                }, null, 8, $) ]), [ "2", "3" ].includes(a(u)) ? (t(), n("div", G, [ I, e("div", O, i(a(s).remark ?? "--"), 1) ])) : d("", !0), a(s).markerRemarks.length > 0 ? (t(), 
                n("div", X, [ J, e("div", N, i((g = a(s).markerRemarks, g.length > 0 ? g.map(l => `${l.marker ?? "--"}\uFF0C\u4E8E${pe(l.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : d("", !0) ], 2)), [ "3", "2" ].includes(a(u)) && a(s).changeMarkers.length > 0 ? (t(), 
                n("div", W, [ (t(!0), n(h, null, _(a(s).changeMarkers, (l, c) => (t(), 
                n("div", {
                    key: c
                }, [ e("div", Y, [ Z, e("div", ee, i(l.changeMarker ?? "--") + "，于" + i(a(pe)(l.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", ae, [ se, e("div", le, i(l.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : d("", !0), [ "0", "1" ].includes(a(u)) ? (t(), 
                n("div", te, [ ne, e("div", ie, [ o(Te, {
                    modelValue: a(s).remark,
                    "onUpdate:modelValue": f[1] || (f[1] = l => a(s).remark = l),
                    maxlength: "200",
                    "show-word-limit": "",
                    placeholder: "请输入试题批语（选填）",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : d("", !0) ]);
                var g;
            };
        }
    }, [ [ "__scopeId", "data-v-7558324f" ] ]);
});

export {
    Xe as __tla,
    ve as default
};