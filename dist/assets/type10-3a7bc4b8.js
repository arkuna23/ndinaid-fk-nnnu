import {
    _ as je,
    __tla as Ke
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    r as L,
    a0 as U,
    e as Q,
    w as C,
    o as i,
    c as l,
    A as P,
    G as B,
    a,
    t as e,
    C as Ie,
    D as p,
    F as H,
    y as V,
    B as n,
    k as S,
    v as q,
    R as Re,
    S as Ee,
    aX as d,
    m as Ne,
    aY as Ge,
    __tla as $e
} from "./index-6c08ea4c.js";

import {
    f as Fe,
    __tla as ze
} from "./formatTime-de6f1520.js";

import {
    D as O,
    __tla as Je
} from "./dict-c5825220.js";

import We, {
    __tla as Ze
} from "./type1-d1c988fe.js";

import ea, {
    __tla as aa
} from "./type2-939c8380.js";

import ta, {
    __tla as ia
} from "./type3-88dc6364.js";

import la, {
    __tla as oa
} from "./type4-a9d5770c.js";

import sa, {
    __tla as ra
} from "./type5-eee3ae6c.js";

import na, {
    __tla as ca
} from "./type6-c80fcdf9.js";

import da, {
    __tla as ua
} from "./type7-52b282a4.js";

import {
    V as ma,
    __tla as pa
} from "./video-1d0dc730.js";

import {
    g as ya,
    __tla as fa
} from "./file-e038b35d.js";

import {
    _ as X
} from "./_plugin-vue_export-helper-1b428a4d.js";

import _a, {
    __tla as ha
} from "./type20-d132236e.js";

import va, {
    __tla as Sa
} from "./type30-d500a30b.js";

let x, Ue, Ce, Xe, wa = Promise.all([ (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})() ]).then(async () => {
    let j, Y, D, K, N, G, $, z, J, W, Z, ee, ae, te, ie, le, oe, se, re, ne, ce, de, ue, me, pe, ye, I, fe, R, _e, he, ve, Se, we, Te, be, ge, ke, Le, Pe, Be, xe, Me, Ae, Qe, He, Ve, qe, Oe, E;
    j = o => (Re("data-v-256ce9ed"), o = o(), Ee(), o), Y = {
        class: "qusetion-info"
    }, D = {
        class: "info-item"
    }, K = {
        class: "label"
    }, N = [ "innerHTML" ], G = {
        class: "info-item"
    }, $ = {
        class: "label"
    }, z = {
        class: "value"
    }, J = {
        class: "preview-box"
    }, W = [ "src" ], Z = {
        class: "label",
        style: {
            "text-align": "right"
        }
    }, ee = {
        class: "value"
    }, ae = {
        class: "px-0"
    }, te = {
        key: 0,
        class: "info-item"
    }, ie = {
        class: "label",
        style: {
            width: "unset"
        }
    }, le = {
        class: "value specialBox"
    }, oe = {
        key: 0
    }, se = {
        class: "totalPoints"
    }, re = {
        class: "points"
    }, ne = {
        key: 0,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, ce = {
        class: "info-item"
    }, de = j(() => e("div", {
        class: "label"
    }, "改阅人", -1)), ue = {
        class: "value"
    }, me = {
        class: "info-item"
    }, pe = j(() => e("div", {
        class: "label"
    }, "改阅原因", -1)), ye = {
        class: "value"
    }, I = X({
        __name: "type8",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            showType: {
                type: Boolean,
                default: !1
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
            scoreList: {
                type: Object,
                default: () => {}
            },
            multiSelectionHalfScoreSwitch: {
                type: Boolean,
                default: !1
            },
            markType: {
                type: String,
                default: ""
            }
        },
        emits: [ "computedScore" ],
        setup(o, {
            emit: w
        }) {
            const t = o, r = w;
            L({});
            const {
                hideQuestionStem: m,
                scoreList: F,
                markType: u,
                multiSelectionHalfScoreSwitch: T
            } = U(t), b = Q(() => [ "mp4" ].indexOf(t.form.suffix) >= 0), f = s => {
                r("computedScore", s);
            }, g = Q(() => [ "mp3", "ogg" ].indexOf(t.form.suffix) >= 0), _ = L("");
            return C(() => t.form.eid, () => {
                t.form.eid && g.value && ya(t.form.eid).then(s => {
                    _.value = s;
                });
            }, {
                immediate: !0
            }), C(() => t.form, () => {}, {
                deep: !0,
                immediate: !0
            }), (s, y) => {
                const h = ma, M = je;
                return i(), l("div", Y, [ P(e("div", D, [ P(e("div", K, "题干", 512), [ [ B, !t.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: t.form.stem
                }, null, 8, N) ], 512), [ [ B, !a(m) ] ]), e("div", G, [ P(e("div", $, "附件", 512), [ [ B, !t.inPageView ] ]), e("div", z, [ e("div", J, [ a(b) ? (i(), 
                Ie(h, {
                    key: 0,
                    dataId: t.form.eid,
                    width: "440px",
                    height: "330px"
                }, null, 8, [ "dataId" ])) : p("", !0), a(g) ? (i(), l("audio", {
                    key: 1,
                    src: a(_),
                    controls: ""
                }, null, 8, W)) : p("", !0) ]) ]) ]), (i(!0), l(H, null, V(t.form.subQuestions, (c, v) => (i(), 
                l("div", {
                    key: v,
                    class: "info-item questions pb-3 pt-1 mt-1"
                }, [ e("div", Z, "子题" + n(v + 1), 1), e("div", ee, [ e("div", ae, [ t.inLibrary ? (i(), 
                l("div", te, [ e("div", ie, [ S(M, {
                    type: a(O).QUESTION_TYPE,
                    value: c.questionType
                }, null, 8, [ "type", "value" ]) ]), e("div", le, [ e("span", null, "（ " + n(parseFloat(c.questionScore.toFixed(1)) || 0) + " 分 ）", 1), [ "3", "4" ].includes(a(u)) ? (i(), 
                l("span", oe, [ S(M, {
                    type: a(O).EXAM_MARK_STATUS,
                    value: c.markrResults
                }, null, 8, [ "type", "value" ]), e("span", se, [ q("得分"), e("span", re, n(c.candidateScore), 1), q("分") ]) ])) : p("", !0) ]) ])) : p("", !0) ]), S(x, {
                    id: "px-0",
                    form: c || {},
                    markType: a(u),
                    hideAnswer: t.hideAnswer,
                    hideQuestionStem: a(m),
                    inLibrary: t.inLibrary,
                    inPageView: t.inPageView,
                    multiSelectionHalfScoreSwitch: a(T),
                    "is-child": !0,
                    showType: !t.inLibrary,
                    onComputedScore: f
                }, null, 8, [ "form", "markType", "hideAnswer", "hideQuestionStem", "inLibrary", "inPageView", "multiSelectionHalfScoreSwitch", "showType" ]) ]) ]))), 128)), [ "3", "2", "4" ].includes(a(u)) && o.form.changeMarkers.length > 0 ? (i(), 
                l("div", ne, [ (i(!0), l(H, null, V(o.form.changeMarkers, (c, v) => (i(), 
                l("div", {
                    key: v
                }, [ e("div", ce, [ de, e("div", ue, n(c.changeMarker ?? "--") + "，于" + n(a(Fe)(c.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", me, [ pe, e("div", ye, n(c.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : p("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-256ce9ed" ] ]), Xe = Object.defineProperty({
        __proto__: null,
        default: I
    }, Symbol.toStringTag, {
        value: "Module"
    }), fe = {
        class: "px-5 preview-box"
    }, x = X({
        __name: "questionMark",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            showType: {
                type: Boolean,
                default: !1
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
            multiSelectionHalfScoreSwitch: {
                type: Boolean,
                default: !1
            },
            scoreList: {
                type: Object,
                default: () => {}
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
        emits: [ "update:form", "update:scoreList", "computedScore" ],
        setup(o, {
            emit: w
        }) {
            const t = w, r = o, {
                form: m,
                showType: F,
                inLibrary: u,
                inPageView: T,
                hideAnswer: b,
                multiSelectionHalfScoreSwitch: f,
                hideQuestionStem: g,
                scoreList: _,
                markType: s,
                showScore: y
            } = U(r), h = Q({
                get: () => m.value,
                set: () => {
                    t("update:form", m.value);
                }
            }), M = k => {
                t("computedScore", k);
            }, c = L([ {
                name: "Type1",
                code: d(We)
            }, {
                name: "Type2",
                code: d(ea)
            }, {
                name: "Type3",
                code: d(ta)
            }, {
                name: "Type4",
                code: d(la)
            }, {
                name: "Type5",
                code: d(sa)
            }, {
                name: "Type6",
                code: d(na)
            }, {
                name: "Type7",
                code: d(da)
            }, {
                name: "Type8",
                code: d(I)
            }, {
                name: "Type10",
                code: d(E)
            }, {
                name: "Type20",
                code: d(_a)
            }, {
                name: "Type30",
                code: d(va)
            } ]), v = L(), Ye = Q(() => {
                const k = c.value.find(A => A.name === `Type${h.value.questionType}`);
                return k ? k.code : "span";
            });
            return (k, A) => (i(), l("div", fe, [ (i(), Ie(Ge(a(Ye)), {
                ref_key: "comRef",
                ref: v,
                form: a(h),
                "onUpdate:form": A[0] || (A[0] = De => Ne(h) ? h.value = De : null),
                hideAnswer: a(b),
                hideQuestionStem: a(g),
                inLibrary: a(u),
                inPageView: a(T),
                markType: a(s),
                showScore: a(y),
                multiSelectionHalfScoreSwitch: a(f),
                showType: a(F),
                onComputedScore: M
            }, null, 40, [ "form", "hideAnswer", "hideQuestionStem", "inLibrary", "inPageView", "markType", "showScore", "multiSelectionHalfScoreSwitch", "showType" ])) ]));
        }
    }, [ [ "__scopeId", "data-v-b056f0db" ] ]), Ce = Object.defineProperty({
        __proto__: null,
        default: x
    }, Symbol.toStringTag, {
        value: "Module"
    }), R = o => (Re("data-v-00276ad9"), o = o(), Ee(), o), _e = {
        class: "qusetion-info"
    }, he = {
        class: "info-item"
    }, ve = {
        class: "label"
    }, Se = [ "innerHTML" ], we = {
        class: "label",
        style: {
            "text-align": "right"
        }
    }, Te = {
        class: "value"
    }, be = {
        class: "px-0"
    }, ge = {
        key: 0,
        class: "info-item"
    }, ke = {
        class: "label",
        style: {
            width: "unset"
        }
    }, Le = {
        class: "value specialBox"
    }, Pe = {
        key: 0
    }, Be = {
        class: "totalPoints"
    }, xe = {
        class: "points"
    }, Me = {
        key: 0,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, Ae = {
        class: "info-item"
    }, Qe = R(() => e("div", {
        class: "label"
    }, "改阅人", -1)), He = {
        class: "value"
    }, Ve = {
        class: "info-item"
    }, qe = R(() => e("div", {
        class: "label"
    }, "改阅原因", -1)), Oe = {
        class: "value"
    }, E = X({
        __name: "type10",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            showType: {
                type: Boolean,
                default: !1
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
            scoreList: {
                type: Object,
                default: () => {}
            },
            multiSelectionHalfScoreSwitch: {
                type: Boolean,
                default: !1
            },
            markType: {
                type: String,
                default: ""
            }
        },
        emits: [ "computedScore" ],
        setup(o, {
            emit: w
        }) {
            L({});
            const t = w, r = o, {
                hideQuestionStem: m,
                scoreList: F,
                markType: u,
                multiSelectionHalfScoreSwitch: T
            } = U(r), b = f => {
                t("computedScore", f);
            };
            return C(() => r.form, () => {}, {
                deep: !0,
                immediate: !0
            }), (f, g) => {
                const _ = je;
                return i(), l("div", _e, [ P(e("div", he, [ P(e("div", ve, "题干", 512), [ [ B, !r.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: r.form.stem
                }, null, 8, Se) ], 512), [ [ B, !a(m) ] ]), (i(!0), l(H, null, V(r.form.subQuestions, (s, y) => (i(), 
                l("div", {
                    key: y,
                    class: "info-item questions pb-3 pt-1 mt-1"
                }, [ e("div", we, "子题" + n(y + 1), 1), e("div", Te, [ e("div", be, [ r.inLibrary ? (i(), 
                l("div", ge, [ e("div", ke, [ S(_, {
                    type: a(O).QUESTION_TYPE,
                    value: s.questionType
                }, null, 8, [ "type", "value" ]) ]), e("div", Le, [ e("span", null, "（ " + n(parseFloat(s.questionScore.toFixed(1)) || 0) + " 分 ）", 1), [ "3", "4" ].includes(a(u)) ? (i(), 
                l("span", Pe, [ S(_, {
                    type: a(O).EXAM_MARK_STATUS,
                    value: s.markrResults
                }, null, 8, [ "type", "value" ]), e("span", Be, [ q("得分"), e("span", xe, n(s.candidateScore), 1), q("分") ]) ])) : p("", !0) ]) ])) : p("", !0) ]), S(x, {
                    id: "px-0",
                    form: s || {},
                    hideAnswer: r.hideAnswer,
                    hideQuestionStem: a(m),
                    inLibrary: r.inLibrary,
                    inPageView: r.inPageView,
                    "is-child": !0,
                    markType: a(u),
                    multiSelectionHalfScoreSwitch: a(T),
                    showType: !r.inLibrary,
                    onComputedScore: b
                }, null, 8, [ "form", "hideAnswer", "hideQuestionStem", "inLibrary", "inPageView", "markType", "multiSelectionHalfScoreSwitch", "showType" ]) ]) ]))), 128)), [ "3", "2", "4" ].includes(a(u)) && o.form.changeMarkers.length > 0 ? (i(), 
                l("div", Me, [ (i(!0), l(H, null, V(o.form.changeMarkers, (s, y) => (i(), 
                l("div", {
                    key: y
                }, [ e("div", Ae, [ Qe, e("div", He, n(s.changeMarker ?? "--") + "，于" + n(a(Fe)(s.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", Ve, [ qe, e("div", Oe, n(s.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : p("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-00276ad9" ] ]), Ue = Object.defineProperty({
        __proto__: null,
        default: E
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    x as Q,
    wa as __tla,
    Ue as a,
    Ce as q,
    Xe as t
};