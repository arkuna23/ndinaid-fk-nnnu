import {
    a0 as he,
    r as be,
    j as _e,
    o as i,
    c as n,
    A as y,
    G as ee,
    t as e,
    a,
    v as ae,
    k,
    D as o,
    z as ge,
    F as se,
    y as le,
    C as we,
    l as ie,
    B as c,
    cK as Te,
    K as Me,
    L as Se,
    P as He,
    R as Ve,
    S as Le,
    __tla as je
} from "./index-6c08ea4c.js";

import {
    f as ne,
    __tla as Ae
} from "./formatTime-de6f1520.js";

import {
    h as xe,
    a as Be,
    b as Ce
} from "./keyboardDisable-3c8e0d58.js";

import {
    _ as qe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let te, Ke = Promise.all([ (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})() ]).then(async () => {
    let t, h, b, _, g, w, T, M, S, H, V, L, j, A, x, B, C, q, K, P, R, z, D, F, Q, U, $, G, I, O, E, J, N, W, X, Y;
    t = d => (Ve("data-v-ca7dbf3e"), d = d(), Le(), d), h = {
        class: "qusetion-info"
    }, b = {
        class: "info-item"
    }, _ = {
        class: "label"
    }, g = [ "innerHTML" ], w = {
        class: "info-item"
    }, T = t(() => e("div", {
        class: "label"
    }, "考生答案", -1)), M = [ "innerHTML" ], S = {
        key: 0,
        class: "item-result"
    }, H = {
        class: "value"
    }, V = {
        class: "info-item"
    }, L = t(() => e("div", {
        class: "label"
    }, "参考答案", -1)), j = [ "innerHTML" ], A = {
        class: "info-item"
    }, x = t(() => e("div", {
        class: "label"
    }, "关键词", -1)), B = {
        class: "value"
    }, C = {
        class: "neu-thumbnailDisplay tagText"
    }, q = {
        class: "info-item"
    }, K = t(() => e("div", {
        class: "label"
    }, "解析", -1)), P = [ "innerHTML" ], R = {
        key: 0,
        class: "info-item"
    }, z = t(() => e("div", {
        class: "label"
    }, "试题批语", -1)), D = {
        class: "value"
    }, F = {
        key: 1,
        class: "info-item"
    }, Q = t(() => e("div", {
        class: "label"
    }, "批阅人", -1)), U = {
        class: "value"
    }, $ = {
        key: 2,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, G = {
        class: "info-item"
    }, I = t(() => e("div", {
        class: "label"
    }, "改阅人", -1)), O = {
        class: "value"
    }, E = {
        class: "info-item"
    }, J = t(() => e("div", {
        class: "label"
    }, "改阅原因", -1)), N = {
        class: "value"
    }, W = {
        key: 3,
        class: "item-input"
    }, X = t(() => e("div", {
        class: "label"
    }, "本题批语", -1)), Y = {
        class: "value"
    }, te = qe({
        __name: "type5",
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
            hideQuestionStem: {
                type: Boolean,
                default: !1
            },
            markType: {
                type: String,
                default: ""
            }
        },
        emits: [ "computedScore" ],
        setup(d, {
            emit: re
        }) {
            const de = re, oe = d, {
                form: l,
                inPageView: Z,
                hideAnswer: ce,
                markType: m
            } = he(oe), u = be(0), me = () => {
                let v = l.value.candidateScore;
                v != u.value && de("computedScore", {
                    type: 2,
                    newCandidateScore: v,
                    oldCandidateScore: u.value
                });
            }, ue = () => {
                u.value = l.value.candidateScore ?? 0;
            };
            return (v, r) => {
                const ve = Te, pe = Me, fe = Se, ye = He, ke = _e("show-tip");
                return i(), n("div", h, [ y(e("div", b, [ y(e("div", _, "题干", 512), [ [ ee, !a(Z) ] ]), e("div", {
                    class: "value",
                    innerHTML: a(l).stem
                }, null, 8, g) ], 512), [ [ ee, !d.hideQuestionStem ] ]), e("div", w, [ T, e("div", {
                    class: "value candidateAnswer",
                    innerHTML: a(l).candidateAnswer
                }, null, 8, M) ]), [ "0", "1", "2" ].includes(a(m)) ? (i(), n("div", S, [ e("div", H, [ ae(" 得分 "), k(ve, {
                    modelValue: a(l).candidateScore,
                    "onUpdate:modelValue": r[0] || (r[0] = s => a(l).candidateScore = s),
                    modelModifiers: {
                        trim: !0
                    },
                    controls: !1,
                    max: a(l).questionScore,
                    min: 0,
                    precision: 1,
                    class: "markStyle",
                    size: "large",
                    onBlur: me,
                    onFocus: ue,
                    onCompositionend: r[1] || (r[1] = s => a(xe)(s)),
                    onCompositionstart: r[2] || (r[2] = s => a(Be)(s)),
                    onKeydown: r[3] || (r[3] = s => a(Ce)(s))
                }, null, 8, [ "modelValue", "max" ]), ae(" 分 ") ]) ])) : o("", !0), a(ce) ? o("", !0) : (i(), 
                n("div", {
                    key: 1,
                    class: ge(a(Z) ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ e("div", V, [ L, e("div", {
                    class: "value",
                    innerHTML: a(l).standardAnswer
                }, null, 8, j) ]), e("div", A, [ x, e("div", B, [ (i(!0), n(se, null, le(a(l).answerKeywords, (s, f) => (i(), 
                we(fe, {
                    key: f + s.join(" 或 "),
                    class: "mr-2",
                    "disable-transitions": !1
                }, {
                    default: ie(() => [ y((i(), n("span", null, [ k(pe, {
                        content: s.join(" 或 "),
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: ie(() => [ e("span", C, c(s.join(" 或 ")), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ ke ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]), e("div", q, [ K, e("div", {
                    class: "value",
                    innerHTML: a(l).analysis
                }, null, 8, P) ]), [ "2", "3" ].includes(a(m)) ? (i(), n("div", R, [ z, e("div", D, c(a(l).remark ?? "--"), 1) ])) : o("", !0), a(l).markerRemarks.length > 0 ? (i(), 
                n("div", F, [ Q, e("div", U, c((p = a(l).markerRemarks, p.length > 0 ? p.map(s => `${s.marker ?? "--"}\uFF0C\u4E8E${ne(s.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : o("", !0) ], 2)), [ "3", "2" ].includes(a(m)) && a(l).changeMarkers.length > 0 ? (i(), 
                n("div", $, [ (i(!0), n(se, null, le(a(l).changeMarkers, (s, f) => (i(), 
                n("div", {
                    key: f
                }, [ e("div", G, [ I, e("div", O, c(s.changeMarker ?? "--") + "，于" + c(a(ne)(s.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", E, [ J, e("div", N, c(s.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : o("", !0), [ "0", "1" ].includes(a(m)) ? (i(), 
                n("div", W, [ X, e("div", Y, [ k(ye, {
                    modelValue: a(l).remark,
                    "onUpdate:modelValue": r[4] || (r[4] = s => a(l).remark = s),
                    maxlength: "200",
                    placeholder: "请输入试题批语（选填）",
                    "show-word-limit": "",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : o("", !0) ]);
                var p;
            };
        }
    }, [ [ "__scopeId", "data-v-ca7dbf3e" ] ]);
});

export {
    Ke as __tla,
    te as default
};