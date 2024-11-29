import {
    a0 as ge,
    e as _e,
    o as t,
    c as r,
    A as g,
    G as _,
    a,
    t as l,
    F as ce,
    y as de,
    k as u,
    l as f,
    v as p,
    B as o,
    z as ne,
    D as v,
    bp as be,
    bs as we,
    bq as Me,
    cK as Te,
    P as Ae,
    R as Ve,
    S as He,
    __tla as Re
} from "./index-6c08ea4c.js";

import {
    f as oe,
    __tla as qe
} from "./formatTime-de6f1520.js";

import {
    _ as Ce
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ue, Le = Promise.all([ (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    let c, b, w, M, T, A, V, H, R, q, C, L, x, B, I, z, F, P, U, j, Q, $, D, E, G, K, O, J, N, W, X, Y, Z, ee, ae;
    c = m => (Ve("data-v-ee805a07"), m = m(), He(), m), b = {
        class: "qusetion-info"
    }, w = {
        class: "info-item"
    }, M = {
        class: "label"
    }, T = [ "innerHTML" ], A = {
        class: "info-item"
    }, V = {
        class: "label"
    }, H = {
        class: "value"
    }, R = {
        class: "choices-label neu-inner-disable"
    }, q = [ "innerHTML" ], C = {
        key: 0,
        class: "item-result"
    }, L = {
        class: "value"
    }, x = {
        class: "value-show"
    }, B = {
        class: "info-item"
    }, I = c(() => l("div", {
        class: "label"
    }, "参考答案", -1)), z = {
        class: "value"
    }, F = {
        class: "info-item"
    }, P = c(() => l("div", {
        class: "label"
    }, "解析", -1)), U = [ "innerHTML" ], j = {
        key: 0,
        class: "info-item"
    }, Q = c(() => l("div", {
        class: "label"
    }, "试题批语", -1)), $ = {
        class: "value"
    }, D = {
        key: 1,
        class: "info-item"
    }, E = c(() => l("div", {
        class: "label"
    }, "批阅人", -1)), G = {
        class: "value"
    }, K = {
        key: 2,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, O = {
        class: "info-item"
    }, J = c(() => l("div", {
        class: "label"
    }, "改阅人", -1)), N = {
        class: "value"
    }, W = {
        class: "info-item"
    }, X = c(() => l("div", {
        class: "label"
    }, "改阅原因", -1)), Y = {
        class: "value"
    }, Z = {
        key: 3,
        class: "item-input"
    }, ee = c(() => l("div", {
        class: "label"
    }, "本题批语", -1)), ae = {
        class: "value"
    }, ue = Ce({
        __name: "type3",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            inPageView: {
                type: Boolean,
                default: !1
            },
            hideAnswer: {
                type: Boolean,
                default: !1
            },
            multiSelectionHalfScoreSwitch: {
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
        setup(m, {
            emit: ve
        }) {
            const le = ve, me = m, {
                form: e,
                inPageView: k,
                hideAnswer: se,
                multiSelectionHalfScoreSwitch: xe,
                hideQuestionStem: pe,
                markType: h
            } = ge(me), he = () => {
                let n = e.value.candidateScore || 0, i = 0;
                if (e.value.markrResults === "2") i = parseFloat(e.value.questionScore); else if (e.value.markrResults === "1") {
                    let d = Math.round(e.value.questionScore / 2 * 10) / 10 || 0;
                    d < .1 && d > 0 && (d = .1), i = d;
                } else i = 0;
                e.value.candidateScore = parseFloat(i.toFixed(1)), le("computedScore", {
                    type: 1,
                    newCandidateScore: e.value.candidateScore,
                    oldCandidateScore: n
                }), le("update:form", e.value);
            }, fe = _e(() => {
                let n;
                return (e.value.choices || []).forEach((i, d) => {
                    i.choiceId === e.value.standardAnswer && (n = d);
                }), ie(n);
            });
            function ie(n) {
                return String.fromCharCode(n + "A".charCodeAt());
            }
            return (n, i) => {
                const d = be, te = we, ke = Me, ye = Te, Se = Ae;
                return t(), r("div", b, [ g(l("div", w, [ g(l("div", M, "题干", 512), [ [ _, !a(k) ] ]), l("div", {
                    class: "value",
                    innerHTML: a(e).stem
                }, null, 8, T) ], 512), [ [ _, !a(pe) ] ]), l("div", A, [ g(l("div", V, "选项", 512), [ [ _, !a(k) ] ]), l("div", H, [ (t(!0), 
                r(ce, null, de(a(e).choices || [], (s, S) => {
                    return t(), r("div", {
                        key: s.choiceId,
                        class: "choices"
                    }, [ l("div", R, [ u(d, {
                        value: s.choiceId,
                        "model-value": a(se) ? "" : a(e).candidateAnswer
                    }, {
                        default: f(() => [ p(o(ie(S) + "."), 1) ]),
                        _: 2
                    }, 1032, [ "value", "model-value" ]) ]), l("div", {
                        class: ne([ "choices-html", {
                            "choices-label-error": (re = s, !(e.value.candidateAnswer == e.value.standardAnswer || !e.value.standardAnswer) && re.choiceId === e.value.candidateAnswer)
                        } ]),
                        innerHTML: s.choiceContent
                    }, null, 10, q) ]);
                    var re;
                }), 128)) ]) ]), [ "0", "1", "2" ].includes(a(h)) ? (t(), r("div", C, [ l("div", L, [ u(ke, {
                    modelValue: a(e).markrResults,
                    "onUpdate:modelValue": i[0] || (i[0] = s => a(e).markrResults = s),
                    class: "neu-diamond",
                    size: "large",
                    onChange: he
                }, {
                    default: f(() => [ u(te, {
                        class: "value-tag correct",
                        value: "2"
                    }, {
                        default: f(() => [ p("正确") ]),
                        _: 1
                    }), u(te, {
                        class: "value-tag error",
                        value: "0"
                    }, {
                        default: f(() => [ p("错误") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), l("span", x, [ p(" 得分 "), u(ye, {
                    modelValue: a(e).candidateScore,
                    "onUpdate:modelValue": i[1] || (i[1] = s => a(e).candidateScore = s),
                    controls: !1,
                    disabled: !0,
                    max: a(e).questionScore,
                    precision: 1,
                    class: "markStyle",
                    size: "large"
                }, null, 8, [ "modelValue", "max" ]), p(" 分 ") ]) ]) ])) : v("", !0), a(se) ? v("", !0) : (t(), 
                r("div", {
                    key: 1,
                    class: ne(a(k) ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ l("div", B, [ I, l("div", z, o(a(fe)), 1) ]), l("div", F, [ P, l("div", {
                    class: "value",
                    innerHTML: a(e).analysis ?? "--"
                }, null, 8, U) ]), [ "2", "3" ].includes(a(h)) ? (t(), r("div", j, [ Q, l("div", $, o(a(e).remark ?? "--"), 1) ])) : v("", !0), a(e).markerRemarks.length > 0 ? (t(), 
                r("div", D, [ E, l("div", G, o((y = a(e).markerRemarks, y.length > 0 ? y.map(s => `${s.marker ?? "--"}\uFF0C\u4E8E${oe(s.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : v("", !0) ], 2)), [ "3", "2" ].includes(a(h)) && a(e).changeMarkers.length > 0 ? (t(), 
                r("div", K, [ (t(!0), r(ce, null, de(a(e).changeMarkers, (s, S) => (t(), 
                r("div", {
                    key: S
                }, [ l("div", O, [ J, l("div", N, o(s.changeMarker ?? "--") + "，于" + o(a(oe)(s.changeMarkerTime) ?? "--") + "改阅", 1) ]), l("div", W, [ X, l("div", Y, o(s.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : v("", !0), [ "0", "1" ].includes(a(h)) ? (t(), 
                r("div", Z, [ ee, l("div", ae, [ u(Se, {
                    modelValue: a(e).remark,
                    "onUpdate:modelValue": i[2] || (i[2] = s => a(e).remark = s),
                    maxlength: "200",
                    "show-word-limit": "",
                    placeholder: "请输入试题批语（选填）",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : v("", !0) ]);
                var y;
            };
        }
    }, [ [ "__scopeId", "data-v-ee805a07" ] ]);
});

export {
    Le as __tla,
    ue as default
};