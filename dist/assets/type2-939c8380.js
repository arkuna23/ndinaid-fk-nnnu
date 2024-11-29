import {
    a0 as we,
    e as oe,
    o as r,
    c,
    A as _,
    G as w,
    a,
    t as l,
    F as ue,
    y as ve,
    k as u,
    z as me,
    l as y,
    v as f,
    D as v,
    B as m,
    a8 as Ve,
    bs as Te,
    bq as Me,
    cK as Ae,
    P as xe,
    R as Ce,
    S as He,
    __tla as Re
} from "./index-6c08ea4c.js";

import {
    f as he,
    __tla as qe
} from "./formatTime-de6f1520.js";

import {
    _ as Le
} from "./_plugin-vue_export-helper-1b428a4d.js";

let pe, Be = Promise.all([ (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    let d, V, T, M, A, x, C, H, R, q, L, B, I, z, F, O, P, j, U, E, Q, $, D, G, K, J, N, W, X, Y, Z, ee, ae, le, se;
    d = h => (Ce("data-v-1460c004"), h = h(), He(), h), V = {
        class: "qusetion-info"
    }, T = {
        class: "info-item"
    }, M = {
        class: "label"
    }, A = [ "innerHTML" ], x = {
        class: "info-item"
    }, C = {
        class: "label"
    }, H = {
        class: "value"
    }, R = {
        class: "choices-label neu-inner-disable"
    }, q = [ "innerHTML" ], L = {
        key: 0,
        class: "item-result"
    }, B = {
        class: "value"
    }, I = {
        class: "value-show"
    }, z = {
        class: "info-item"
    }, F = d(() => l("div", {
        class: "label"
    }, "参考答案", -1)), O = {
        class: "value"
    }, P = {
        class: "info-item"
    }, j = d(() => l("div", {
        class: "label"
    }, "解析", -1)), U = [ "innerHTML" ], E = {
        key: 0,
        class: "info-item"
    }, Q = d(() => l("div", {
        class: "label"
    }, "试题批语", -1)), $ = {
        class: "value"
    }, D = {
        key: 1,
        class: "info-item"
    }, G = d(() => l("div", {
        class: "label"
    }, "批阅人", -1)), K = {
        class: "value"
    }, J = {
        key: 2,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, N = {
        class: "info-item"
    }, W = d(() => l("div", {
        class: "label"
    }, "改阅人", -1)), X = {
        class: "value"
    }, Y = {
        class: "info-item"
    }, Z = d(() => l("div", {
        class: "label"
    }, "改阅原因", -1)), ee = {
        class: "value"
    }, ae = {
        key: 3,
        class: "item-input"
    }, le = d(() => l("div", {
        class: "label"
    }, "本题批语", -1)), se = {
        class: "value"
    }, pe = Le({
        __name: "type2",
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
        setup(h, {
            emit: fe
        }) {
            const ie = fe, ke = h, {
                form: e,
                inPageView: g,
                hideAnswer: te,
                multiSelectionHalfScoreSwitch: Ie,
                hideQuestionStem: ye,
                markType: p
            } = we(ke), ge = () => {
                let n = e.value.candidateScore || 0, s = 0;
                if (e.value.markrResults === "2") s = parseFloat(e.value.questionScore); else if (e.value.markrResults === "1") {
                    let t = Math.round(e.value.questionScore / 2 * 10) / 10 || 0;
                    t < .1 && t > 0 && (t = .1), s = t;
                } else s = 0;
                e.value.candidateScore = parseFloat(s.toFixed(1)), ie("computedScore", {
                    type: 1,
                    newCandidateScore: e.value.candidateScore,
                    oldCandidateScore: n
                }), ie("update:form", e.value);
            }, Se = oe(() => {
                let n = [];
                return (e.value.choices || []).forEach((s, t) => {
                    var o;
                    ((o = e.value.standardAnswer) == null ? void 0 : o.indexOf(s.choiceId)) > -1 && n.push(t);
                }), n.map(s => ce(s)).join(" ");
            }), re = oe(() => {
                var s, t;
                let n = [];
                if (e.value.standardAnswer) {
                    let o = ((s = e.value.standardAnswer) == null ? void 0 : s.split(",")) || [];
                    (t = e.value.candidateAnswer) == null || t.forEach(k => {
                        o.indexOf(k) === -1 && n.push(k);
                    });
                }
                return n;
            });
            function ce(n) {
                return String.fromCharCode(n + "A".charCodeAt());
            }
            return (n, s) => {
                const t = Ve, o = Te, k = Me, be = Ae, _e = xe;
                return r(), c("div", V, [ _(l("div", T, [ _(l("div", M, "题干", 512), [ [ w, !a(g) ] ]), l("div", {
                    class: "value",
                    innerHTML: a(e).stem
                }, null, 8, A) ], 512), [ [ w, !a(ye) ] ]), l("div", x, [ _(l("div", C, "选项", 512), [ [ w, !a(g) ] ]), l("div", H, [ (r(!0), 
                c(ue, null, ve(a(e).choices || [], (i, b) => {
                    var de;
                    return r(), c("div", {
                        key: i.choiceId,
                        class: "choices"
                    }, [ l("div", R, [ u(t, {
                        label: ce(b) + ".",
                        "model-value": !(a(te) && ![ "4" ].includes(a(p))) && ((de = a(e).candidateAnswer) == null ? void 0 : de.indexOf(i.choiceId)) >= 0
                    }, null, 8, [ "label", "model-value" ]) ]), l("div", {
                        class: me([ "choices-html", {
                            "choices-label-error": (ne = i, re.value.length !== 0 && re.value.includes(ne.choiceId))
                        } ]),
                        innerHTML: i.choiceContent
                    }, null, 10, q) ]);
                    var ne;
                }), 128)) ]) ]), [ "0", "1", "2" ].includes(a(p)) ? (r(), c("div", L, [ l("div", B, [ u(k, {
                    modelValue: a(e).markrResults,
                    "onUpdate:modelValue": s[0] || (s[0] = i => a(e).markrResults = i),
                    class: "neu-diamond",
                    size: "large",
                    onChange: ge
                }, {
                    default: y(() => [ u(o, {
                        class: "value-tag correct",
                        value: "2"
                    }, {
                        default: y(() => [ f("正确") ]),
                        _: 1
                    }), u(o, {
                        class: "value-tag partialCorrectness",
                        value: "1"
                    }, {
                        default: y(() => [ f(" 部分正确 ") ]),
                        _: 1
                    }), u(o, {
                        class: "value-tag error",
                        value: "0"
                    }, {
                        default: y(() => [ f("错误") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), l("span", I, [ f(" 得分 "), u(be, {
                    modelValue: a(e).candidateScore,
                    "onUpdate:modelValue": s[1] || (s[1] = i => a(e).candidateScore = i),
                    controls: !1,
                    disabled: !0,
                    max: a(e).questionScore,
                    precision: 1,
                    class: "markStyle",
                    size: "large"
                }, null, 8, [ "modelValue", "max" ]), f(" 分 ") ]) ]) ])) : v("", !0), a(te) ? v("", !0) : (r(), 
                c("div", {
                    key: 1,
                    class: me(a(g) ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ l("div", z, [ F, l("div", O, m(a(Se)), 1) ]), l("div", P, [ j, l("div", {
                    class: "value",
                    innerHTML: a(e).analysis ?? "--"
                }, null, 8, U) ]), [ "2", "3", "4" ].includes(a(p)) ? (r(), c("div", E, [ Q, l("div", $, m(a(e).remark ?? "--"), 1) ])) : v("", !0), a(e).markerRemarks.length > 0 ? (r(), 
                c("div", D, [ G, l("div", K, m((S = a(e).markerRemarks, S.length > 0 ? S.map(i => `${i.marker ?? "--"}\uFF0C\u4E8E${he(i.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : v("", !0) ], 2)), [ "3", "2", "4" ].includes(a(p)) && a(e).changeMarkers.length > 0 ? (r(), 
                c("div", J, [ (r(!0), c(ue, null, ve(a(e).changeMarkers, (i, b) => (r(), 
                c("div", {
                    key: b
                }, [ l("div", N, [ W, l("div", X, m(i.changeMarker ?? "--") + "，于" + m(a(he)(i.changeMarkerTime) ?? "--") + "改阅", 1) ]), l("div", Y, [ Z, l("div", ee, m(i.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : v("", !0), [ "0", "1" ].includes(a(p)) ? (r(), 
                c("div", ae, [ le, l("div", se, [ u(_e, {
                    modelValue: a(e).remark,
                    "onUpdate:modelValue": s[2] || (s[2] = i => a(e).remark = i),
                    maxlength: "200",
                    "show-word-limit": "",
                    placeholder: "请输入试题批语（选填）",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : v("", !0) ]);
                var S;
            };
        }
    }, [ [ "__scopeId", "data-v-1460c004" ] ]);
});

export {
    Be as __tla,
    pe as default
};