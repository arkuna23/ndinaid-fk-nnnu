import {
    p as Te,
    a0 as Ae,
    r as u,
    w as xe,
    f as Be,
    n as Ce,
    o,
    c as d,
    A as g,
    G as S,
    a,
    t as e,
    k as m,
    l as He,
    B as v,
    v as me,
    D as p,
    z as Ie,
    F as Le,
    y as Re,
    P as ze,
    J as Pe,
    dV as Ue,
    cK as qe,
    R as je,
    S as De,
    __tla as Fe
} from "./index-6c08ea4c.js";

import "./el-collapse-transition-4ed993c7.js";

import {
    f as ve,
    __tla as Ke
} from "./formatTime-de6f1520.js";

import {
    h as Qe,
    a as $e,
    b as Ge
} from "./keyboardDisable-3c8e0d58.js";

import {
    M as V,
    __tla as Je
} from "./myQuestionBank-a9dcc9db.js";

import Oe, {
    __tla as Ee
} from "./sqlDetail-4b79b2e5.js";

import {
    _ as Ne
} from "./_plugin-vue_export-helper-1b428a4d.js";

let pe, We = Promise.all([ (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})() ]).then(async () => {
    let i, M, T, A, x, B, C, H, I, L, R, z, P, U, q, j, D, F, K, Q, $, G, J, O, E, N, W, X, Y, Z, ee, ae, se, le, te, ie, ne, oe, de, re;
    i = f => (je("data-v-da4a3328"), f = f(), De(), f), M = {
        class: "qusetion-info"
    }, T = {
        class: "info-item"
    }, A = {
        class: "label"
    }, x = [ "innerHTML" ], B = {
        class: "info-item"
    }, C = i(() => e("div", {
        class: "label"
    }, "数据库", -1)), H = {
        class: "value"
    }, I = {
        class: "info-item"
    }, L = i(() => e("div", {
        class: "label"
    }, "考生答案", -1)), R = {
        class: "value"
    }, z = {
        class: "candidateAnswer"
    }, P = {
        class: "runningResult"
    }, U = {
        class: "title"
    }, q = i(() => e("span", {
        class: "title-text"
    }, "运行结果", -1)), j = {
        class: "hide-btn"
    }, D = {
        key: 0,
        class: "item-result"
    }, F = {
        class: "value"
    }, K = {
        class: "info-item"
    }, Q = i(() => e("div", {
        class: "label"
    }, "答案", -1)), $ = [ "innerHTML" ], G = {
        class: "info-item"
    }, J = i(() => e("div", {
        class: "label"
    }, "解析", -1)), O = [ "innerHTML" ], E = {
        key: 0,
        class: "info-item"
    }, N = i(() => e("div", {
        class: "label"
    }, "试题批语", -1)), W = {
        class: "value"
    }, X = {
        key: 1,
        class: "info-item"
    }, Y = i(() => e("div", {
        class: "label"
    }, "批阅人", -1)), Z = {
        class: "value"
    }, ee = {
        key: 2,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, ae = {
        class: "info-item"
    }, se = i(() => e("div", {
        class: "label"
    }, "改阅人", -1)), le = {
        class: "value"
    }, te = {
        class: "info-item"
    }, ie = i(() => e("div", {
        class: "label"
    }, "改阅原因", -1)), ne = {
        class: "value"
    }, oe = {
        key: 3,
        class: "item-input"
    }, de = i(() => e("div", {
        class: "label"
    }, "本题批语", -1)), re = {
        class: "value"
    }, pe = Ne({
        __name: "type30",
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
        setup(f, {
            emit: fe
        }) {
            const ye = Te(), r = f, {
                hideQuestionStem: he,
                form: t,
                markType: h
            } = Ae(r);
            u(!1);
            const be = fe, y = u(!1);
            u(!1);
            const ce = u({}), b = u(), _e = u(), _ = u(0), ke = () => {
                let n = t.value.candidateScore;
                n != _.value && be("computedScore", {
                    type: 2,
                    newCandidateScore: parseFloat(n),
                    oldCandidateScore: _.value
                });
            }, we = () => {
                _.value = t.value.candidateScore ?? 0;
            };
            xe(() => t.value, () => {
                b.value = "";
            });
            const ge = (n, s) => {
                if (n) {
                    let c = btoa(unescape(encodeURIComponent(n)));
                    V.submissions(c, r.form.dbId).then(k => {
                        ue(k, s);
                    });
                } else ye.error("答案为空！");
            };
            function ue(n, s) {
                V.getSubmissions(n).then(c => {
                    if ([ "1", "2" ].includes(c.status_id)) setTimeout(() => {
                        ue(n, s);
                    }, 1e3); else switch (s) {
                      case 1:
                        b.value = atob(c.stdout), y.value = !0;
                        break;

                      case 2:
                        _e.value = atob(c.stdout);
                    }
                });
            }
            return Be(() => {
                Ce(() => {
                    V.getDbById(r.form.dbId).then(n => {
                        ce.value = n;
                    });
                });
            }), (n, s) => {
                const c = ze, k = Pe, Se = Ue, Ve = qe;
                return o(), d("div", M, [ g(e("div", T, [ g(e("div", A, "题干", 512), [ [ S, !r.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: r.form.stem
                }, null, 8, x) ], 512), [ [ S, !a(he) ] ]), e("div", B, [ C, e("div", H, [ m(Oe, {
                    dbInfo: a(ce),
                    showHideBtn: !0,
                    class: "info-box"
                }, null, 8, [ "dbInfo" ]) ]) ]), e("div", I, [ L, e("div", R, [ e("div", z, [ m(c, {
                    modelValue: a(t).candidateAnswer,
                    "onUpdate:modelValue": s[0] || (s[0] = l => a(t).candidateAnswer = l),
                    disabled: !0,
                    resize: "none",
                    maxlength: "1000",
                    "show-word-limit": "",
                    type: "textarea"
                }, null, 8, [ "modelValue" ]), e("span", P, [ e("span", U, [ q, e("span", j, [ m(k, {
                    icon: a(y) ? "ArrowUp" : "ArrowDown",
                    circle: "",
                    size: "small",
                    text: "",
                    onClick: s[1] || (s[1] = l => y.value = !a(y))
                }, null, 8, [ "icon" ]) ]) ]), m(Se, null, {
                    default: He(() => [ g(e("span", {
                        class: "consoleContent"
                    }, v(a(b)), 513), [ [ S, a(y) ] ]) ]),
                    _: 1
                }) ]), e("span", {
                    class: "sumbitBtn",
                    onClick: s[2] || (s[2] = l => ge(a(t).candidateAnswer, 1))
                }, "运行检查") ]) ]) ]), [ "0", "1", "2" ].includes(a(h)) ? (o(), d("div", D, [ e("div", F, [ me(" 得分 "), m(Ve, {
                    modelValue: a(t).candidateScore,
                    "onUpdate:modelValue": s[3] || (s[3] = l => a(t).candidateScore = l),
                    modelModifiers: {
                        trim: !0
                    },
                    controls: !1,
                    max: a(t).questionScore,
                    min: 0,
                    precision: 1,
                    class: "markStyle",
                    size: "large",
                    onBlur: ke,
                    onFocus: we,
                    onCompositionend: s[4] || (s[4] = l => a(Qe)(l)),
                    onCompositionstart: s[5] || (s[5] = l => a($e)(l)),
                    onKeydown: s[6] || (s[6] = l => a(Ge)(l))
                }, null, 8, [ "modelValue", "max" ]), me(" 分 ") ]) ])) : p("", !0), r.hideAnswer ? p("", !0) : (o(), 
                d("div", {
                    key: 1,
                    class: Ie(r.inPageView ? "py-2 pr-5 mt-2 qusetion-bg-gray" : "")
                }, [ e("div", K, [ Q, e("div", {
                    class: "value",
                    innerHTML: a(t).standardAnswer
                }, null, 8, $) ]), e("div", G, [ J, e("div", {
                    class: "value",
                    innerHTML: r.form.analysis ?? "--"
                }, null, 8, O) ]), [ "2", "3" ].includes(a(h)) ? (o(), d("div", E, [ N, e("div", W, v(a(t).remark ?? "--"), 1) ])) : p("", !0), a(t).markerRemarks.length > 0 ? (o(), 
                d("div", X, [ Y, e("div", Z, v((w = a(t).markerRemarks, w.length > 0 ? w.map(l => `${l.marker ?? "--"}\uFF0C\u4E8E${ve(l.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : p("", !0) ], 2)), [ "3", "2" ].includes(a(h)) && a(t).changeMarkers.length > 0 ? (o(), 
                d("div", ee, [ (o(!0), d(Le, null, Re(a(t).changeMarkers, (l, Me) => (o(), 
                d("div", {
                    key: Me
                }, [ e("div", ae, [ se, e("div", le, v(l.changeMarker ?? "--") + "，于" + v(a(ve)(l.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", te, [ ie, e("div", ne, v(l.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : p("", !0), [ "0", "1" ].includes(a(h)) ? (o(), 
                d("div", oe, [ de, e("div", re, [ m(c, {
                    modelValue: a(t).remark,
                    "onUpdate:modelValue": s[7] || (s[7] = l => a(t).remark = l),
                    maxlength: "200",
                    "show-word-limit": "",
                    placeholder: "请输入试题批语（选填）",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : p("", !0) ]);
                var w;
            };
        }
    }, [ [ "__scopeId", "data-v-da4a3328" ] ]);
});

export {
    We as __tla,
    pe as default
};