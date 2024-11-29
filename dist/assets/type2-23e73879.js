import {
    a0 as Ve,
    e as oe,
    o as t,
    c as d,
    A as b,
    G as w,
    a,
    t as l,
    F as ue,
    y as ve,
    k as v,
    z as me,
    l as y,
    v as h,
    C as Me,
    D as u,
    B as m,
    a8 as Ae,
    bs as Te,
    bq as Ce,
    cK as xe,
    P as He,
    R as Re,
    S as qe,
    __tla as Le
} from "./index-6c08ea4c.js";

import {
    f as fe,
    __tla as Be
} from "./formatTime-de6f1520.js";

import {
    _ as Ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

let he, ze = Promise.all([ (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})() ]).then(async () => {
    let c, V, M, A, T, C, x, H, R, q, L, B, I, z, F, O, P, j, U, E, Q, $, D, G, K, J, N, W, X, Y, Z, ee, ae, le, se;
    c = f => (Re("data-v-9735f8df"), f = f(), qe(), f), V = {
        class: "qusetion-info"
    }, M = {
        class: "info-item"
    }, A = {
        class: "label"
    }, T = [ "innerHTML" ], C = {
        class: "info-item"
    }, x = {
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
    }, F = c(() => l("div", {
        class: "label"
    }, "参考答案", -1)), O = {
        class: "value"
    }, P = {
        class: "info-item"
    }, j = c(() => l("div", {
        class: "label"
    }, "解析", -1)), U = [ "innerHTML" ], E = {
        key: 0,
        class: "info-item"
    }, Q = c(() => l("div", {
        class: "label"
    }, "试题批语", -1)), $ = {
        class: "value"
    }, D = {
        key: 1,
        class: "info-item"
    }, G = c(() => l("div", {
        class: "label"
    }, "批阅人", -1)), K = {
        class: "value"
    }, J = {
        key: 2,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, N = {
        class: "info-item"
    }, W = c(() => l("div", {
        class: "label"
    }, "改阅人", -1)), X = {
        class: "value"
    }, Y = {
        class: "info-item"
    }, Z = c(() => l("div", {
        class: "label"
    }, "改阅原因", -1)), ee = {
        class: "value"
    }, ae = {
        key: 3,
        class: "item-input"
    }, le = c(() => l("div", {
        class: "label"
    }, "本题批语", -1)), se = {
        class: "value"
    }, he = Ie({
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
        setup(f, {
            emit: pe
        }) {
            const ie = pe, ke = f, {
                form: e,
                inPageView: g,
                hideAnswer: te,
                multiSelectionHalfScoreSwitch: ye,
                hideQuestionStem: ge,
                markType: p
            } = Ve(ke), Se = () => {
                let n = e.value.candidateScore || 0, s = 0;
                if (e.value.markrResults === "2") s = parseFloat(e.value.questionScore); else if (e.value.markrResults === "1") {
                    let r = Math.round(e.value.questionScore / 2 * 10) / 10 || 0;
                    r < .1 && r > 0 && (r = .1), s = r;
                } else s = 0;
                e.value.candidateScore = parseFloat(s.toFixed(1)), ie("computedScore", {
                    type: 1,
                    newCandidateScore: e.value.candidateScore,
                    oldCandidateScore: n
                }), ie("update:form", e.value);
            }, _e = oe(() => {
                let n = [];
                return (e.value.choices || []).forEach((s, r) => {
                    var o;
                    ((o = e.value.standardAnswer) == null ? void 0 : o.indexOf(s.choiceId)) > -1 && n.push(r);
                }), n.map(s => de(s)).join(" ");
            }), re = oe(() => {
                var s, r;
                let n = [];
                if (e.value.standardAnswer) {
                    let o = ((s = e.value.standardAnswer) == null ? void 0 : s.split(",")) || [];
                    (r = e.value.candidateAnswer) == null || r.forEach(k => {
                        o.indexOf(k) === -1 && n.push(k);
                    });
                }
                return n;
            });
            function de(n) {
                return String.fromCharCode(n + "A".charCodeAt());
            }
            return (n, s) => {
                const r = Ae, o = Te, k = Ce, be = xe, we = He;
                return t(), d("div", V, [ b(l("div", M, [ b(l("div", A, "题干", 512), [ [ w, !a(g) ] ]), l("div", {
                    class: "value",
                    innerHTML: a(e).stem
                }, null, 8, T) ], 512), [ [ w, !a(ge) ] ]), l("div", C, [ b(l("div", x, "选项", 512), [ [ w, !a(g) ] ]), l("div", H, [ (t(!0), 
                d(ue, null, ve(a(e).choices || [], (i, _) => {
                    var ce;
                    return t(), d("div", {
                        key: i.choiceId,
                        class: "choices"
                    }, [ l("div", R, [ v(r, {
                        label: de(_) + ".",
                        "model-value": !a(te) && ((ce = a(e).candidateAnswer) == null ? void 0 : ce.indexOf(i.choiceId)) >= 0
                    }, null, 8, [ "label", "model-value" ]) ]), l("div", {
                        class: me([ "choices-html", {
                            "choices-label-error": (ne = i, re.value.length !== 0 && re.value.includes(ne.choiceId))
                        } ]),
                        innerHTML: i.choiceContent
                    }, null, 10, q) ]);
                    var ne;
                }), 128)) ]) ]), [ "0", "1", "2" ].includes(a(p)) ? (t(), d("div", L, [ l("div", B, [ v(k, {
                    modelValue: a(e).markrResults,
                    "onUpdate:modelValue": s[0] || (s[0] = i => a(e).markrResults = i),
                    class: "neu-diamond",
                    size: "large",
                    onChange: Se
                }, {
                    default: y(() => [ v(o, {
                        class: "value-tag correct",
                        value: "2"
                    }, {
                        default: y(() => [ h("正确") ]),
                        _: 1
                    }), a(ye) ? (t(), Me(o, {
                        key: 0,
                        class: "value-tag partialCorrectness",
                        value: "1"
                    }, {
                        default: y(() => [ h(" 部分正确 ") ]),
                        _: 1
                    })) : u("", !0), v(o, {
                        class: "value-tag error",
                        value: "0"
                    }, {
                        default: y(() => [ h("错误") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), l("span", I, [ h(" 得分 "), v(be, {
                    modelValue: a(e).candidateScore,
                    "onUpdate:modelValue": s[1] || (s[1] = i => a(e).candidateScore = i),
                    controls: !1,
                    disabled: !0,
                    max: a(e).questionScore,
                    precision: 1,
                    class: "markStyle",
                    size: "large"
                }, null, 8, [ "modelValue", "max" ]), h(" 分 ") ]) ]) ])) : u("", !0), a(te) ? u("", !0) : (t(), 
                d("div", {
                    key: 1,
                    class: me(a(g) ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ l("div", z, [ F, l("div", O, m(a(_e)), 1) ]), l("div", P, [ j, l("div", {
                    class: "value",
                    innerHTML: a(e).analysis ?? "--"
                }, null, 8, U) ]), [ "2", "3" ].includes(a(p)) ? (t(), d("div", E, [ Q, l("div", $, m(a(e).remark ?? "--"), 1) ])) : u("", !0), a(e).markerRemarks.length > 0 ? (t(), 
                d("div", D, [ G, l("div", K, m((S = a(e).markerRemarks, S.length > 0 ? S.map(i => `${i.marker ?? "--"}\uFF0C\u4E8E${fe(i.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : u("", !0) ], 2)), [ "3", "2" ].includes(a(p)) && a(e).changeMarkers.length > 0 ? (t(), 
                d("div", J, [ (t(!0), d(ue, null, ve(a(e).changeMarkers, (i, _) => (t(), 
                d("div", {
                    key: _
                }, [ l("div", N, [ W, l("div", X, m(i.changeMarker ?? "--") + "，于" + m(a(fe)(i.changeMarkerTime) ?? "--") + "改阅", 1) ]), l("div", Y, [ Z, l("div", ee, m(i.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : u("", !0), [ "0", "1" ].includes(a(p)) ? (t(), 
                d("div", ae, [ le, l("div", se, [ v(we, {
                    modelValue: a(e).remark,
                    "onUpdate:modelValue": s[2] || (s[2] = i => a(e).remark = i),
                    maxlength: "200",
                    "show-word-limit": "",
                    placeholder: "请输入试题批语（选填）",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : u("", !0) ]);
                var S;
            };
        }
    }, [ [ "__scopeId", "data-v-9735f8df" ] ]);
});

export {
    ze as __tla,
    he as default
};