import De, {
    __tla as Ke
} from "./type1-d2f1fe5f.js";

import Ne, {
    __tla as Ge
} from "./type2-23e73879.js";

import We, {
    __tla as $e
} from "./type3-99183189.js";

import ze, {
    __tla as Je
} from "./type4-8e8aae4d.js";

import Ze, {
    __tla as ea
} from "./type5-c77ba902.js";

import aa, {
    __tla as ta
} from "./type6-10786b18.js";

import ia, {
    __tla as la
} from "./type7-6d90f77a.js";

import {
    _ as je,
    __tla as sa
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as oa,
    __tla as ra
} from "./index-bbb36ead.js";

import {
    r as k,
    a0 as U,
    e as A,
    w as Y,
    o as i,
    c as l,
    A as L,
    G as P,
    a,
    t as e,
    C as Ee,
    D as y,
    F as H,
    y as Q,
    B as n,
    k as v,
    v as V,
    R as Re,
    S as Ie,
    aX as d,
    m as na,
    aY as ca,
    __tla as da
} from "./index-6c08ea4c.js";

import {
    g as ua,
    __tla as ma
} from "./file-e038b35d.js";

import {
    f as Fe,
    __tla as pa
} from "./formatTime-de6f1520.js";

import {
    D as q,
    __tla as ya
} from "./dict-c5825220.js";

import {
    _ as C
} from "./_plugin-vue_export-helper-1b428a4d.js";

import fa, {
    __tla as _a
} from "./type20-1c61a004.js";

import ha, {
    __tla as va
} from "./type30-727e9366.js";

let x, Ue, Ye, Ce, Sa = Promise.all([ (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})() ]).then(async () => {
    let O, X, D, K, N, G, W, $, z, J, Z, ee, ae, te, ie, le, se, oe, re, ne, ce, de, ue, me, pe, ye, j, E, fe, _e, he, ve, Se, Te, we, be, ge, ke, Le, Pe, xe, Be, Me, Ae, He, Qe, Ve, qe, R, Oe;
    O = s => (Re("data-v-3f8026db"), s = s(), Ie(), s), X = {
        class: "qusetion-info"
    }, D = {
        class: "info-item"
    }, K = {
        class: "label"
    }, N = [ "innerHTML" ], G = {
        class: "info-item"
    }, W = {
        class: "label"
    }, $ = {
        class: "value"
    }, z = {
        class: "preview-box"
    }, J = [ "src" ], Z = {
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
    }, se = {
        key: 0
    }, oe = {
        class: "totalPoints"
    }, re = {
        class: "points"
    }, ne = {
        key: 0,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, ce = {
        class: "info-item"
    }, de = O(() => e("div", {
        class: "label"
    }, "改阅人", -1)), ue = {
        class: "value"
    }, me = {
        class: "info-item"
    }, pe = O(() => e("div", {
        class: "label"
    }, "改阅原因", -1)), ye = {
        class: "value"
    }, j = C({
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
        setup(s, {
            emit: S
        }) {
            const t = s, r = S;
            k({});
            const {
                hideQuestionStem: p,
                scoreList: I,
                markType: m,
                multiSelectionHalfScoreSwitch: T
            } = U(t), w = A(() => [ "mp4" ].indexOf(t.form.suffix) >= 0), f = o => {
                r("computedScore", o);
            }, b = A(() => [ "mp3", "ogg" ].indexOf(t.form.suffix) >= 0), _ = k("");
            return Y(() => t.form.eid, () => {
                t.form.eid && b.value && ua(t.form.eid).then(o => {
                    _.value = o;
                });
            }, {
                immediate: !0
            }), Y(() => t.form, () => {}, {
                deep: !0,
                immediate: !0
            }), (o, u) => {
                const F = oa, B = je;
                return i(), l("div", X, [ L(e("div", D, [ L(e("div", K, "题干", 512), [ [ P, !t.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: t.form.stem
                }, null, 8, N) ], 512), [ [ P, !a(p) ] ]), e("div", G, [ L(e("div", W, "附件", 512), [ [ P, !t.inPageView ] ]), e("div", $, [ e("div", z, [ a(w) ? (i(), 
                Ee(F, {
                    key: 0,
                    dataId: t.form.eid,
                    defaultHeight: "400px",
                    defaultWidth: "600px"
                }, null, 8, [ "dataId" ])) : y("", !0), a(b) ? (i(), l("audio", {
                    key: 1,
                    src: a(_),
                    controls: ""
                }, null, 8, J)) : y("", !0) ]) ]) ]), (i(!0), l(H, null, Q(t.form.subQuestions, (c, h) => (i(), 
                l("div", {
                    key: h,
                    class: "info-item questions pb-3 pt-1 mt-1"
                }, [ e("div", Z, "子题" + n(h + 1), 1), e("div", ee, [ e("div", ae, [ t.inLibrary ? (i(), 
                l("div", te, [ e("div", ie, [ v(B, {
                    type: a(q).QUESTION_TYPE,
                    value: c.questionType
                }, null, 8, [ "type", "value" ]) ]), e("div", le, [ e("span", null, "（ " + n(parseFloat(c.questionScore.toFixed(1)) || 0) + " 分 ）", 1), [ "3" ].includes(a(m)) ? (i(), 
                l("span", se, [ v(B, {
                    TPYE: a(q).EXAM_MARK_STATUS,
                    value: c.markrResults,
                    style: {
                        display: "inline-block"
                    }
                }, null, 8, [ "TPYE", "value" ]), e("span", oe, [ V("得分"), e("span", re, n(c.candidateScore), 1), V("分") ]) ])) : y("", !0) ]) ])) : y("", !0) ]), v(x, {
                    id: "px-0",
                    form: c || {},
                    markType: a(m),
                    hideAnswer: t.hideAnswer,
                    hideQuestionStem: a(p),
                    inLibrary: t.inLibrary,
                    inPageView: t.inPageView,
                    multiSelectionHalfScoreSwitch: a(T),
                    "is-child": !0,
                    showType: !t.inLibrary,
                    onComputedScore: f
                }, null, 8, [ "form", "markType", "hideAnswer", "hideQuestionStem", "inLibrary", "inPageView", "multiSelectionHalfScoreSwitch", "showType" ]) ]) ]))), 128)), [ "3", "2" ].includes(a(m)) && s.form.changeMarkers.length > 0 ? (i(), 
                l("div", ne, [ (i(!0), l(H, null, Q(s.form.changeMarkers, (c, h) => (i(), 
                l("div", {
                    key: h
                }, [ e("div", ce, [ de, e("div", ue, n(c.changeMarker ?? "--") + "，于" + n(a(Fe)(c.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", me, [ pe, e("div", ye, n(c.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : y("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-3f8026db" ] ]), Ce = Object.defineProperty({
        __proto__: null,
        default: j
    }, Symbol.toStringTag, {
        value: "Module"
    }), E = s => (Re("data-v-88e6693d"), s = s(), Ie(), s), fe = {
        class: "qusetion-info"
    }, _e = {
        class: "info-item"
    }, he = {
        class: "label"
    }, ve = [ "innerHTML" ], Se = {
        class: "label",
        style: {
            "text-align": "right"
        }
    }, Te = {
        class: "value"
    }, we = {
        class: "px-0"
    }, be = {
        key: 0,
        class: "info-item"
    }, ge = {
        class: "label",
        style: {
            width: "unset"
        }
    }, ke = {
        class: "value specialBox"
    }, Le = {
        key: 0
    }, Pe = {
        class: "totalPoints"
    }, xe = {
        class: "points"
    }, Be = {
        key: 0,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, Me = {
        class: "info-item"
    }, Ae = E(() => e("div", {
        class: "label"
    }, "改阅人", -1)), He = {
        class: "value"
    }, Qe = {
        class: "info-item"
    }, Ve = E(() => e("div", {
        class: "label"
    }, "改阅原因", -1)), qe = {
        class: "value"
    }, R = C({
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
        setup(s, {
            emit: S
        }) {
            k({});
            const t = S, r = s, {
                hideQuestionStem: p,
                scoreList: I,
                markType: m,
                multiSelectionHalfScoreSwitch: T
            } = U(r), w = f => {
                t("computedScore", f);
            };
            return Y(() => r.form, () => {}, {
                deep: !0,
                immediate: !0
            }), (f, b) => {
                const _ = je;
                return i(), l("div", fe, [ L(e("div", _e, [ L(e("div", he, "题干", 512), [ [ P, !r.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: r.form.stem
                }, null, 8, ve) ], 512), [ [ P, !a(p) ] ]), (i(!0), l(H, null, Q(r.form.subQuestions, (o, u) => (i(), 
                l("div", {
                    key: u,
                    class: "info-item questions pb-3 pt-1 mt-1"
                }, [ e("div", Se, "子题" + n(u + 1), 1), e("div", Te, [ e("div", we, [ r.inLibrary ? (i(), 
                l("div", be, [ e("div", ge, [ v(_, {
                    type: a(q).QUESTION_TYPE,
                    value: o.questionType
                }, null, 8, [ "type", "value" ]) ]), e("div", ke, [ e("span", null, "（ " + n(parseFloat(o.questionScore.toFixed(1)) || 0) + " 分 ）", 1), [ "3" ].includes(a(m)) ? (i(), 
                l("span", Le, [ v(_, {
                    type: a(q).EXAM_MARK_STATUS,
                    value: o.markrResults,
                    style: {
                        display: "inline-block"
                    }
                }, null, 8, [ "type", "value" ]), e("span", Pe, [ V("得分"), e("span", xe, n(o.candidateScore), 1), V("分") ]) ])) : y("", !0) ]) ])) : y("", !0) ]), v(x, {
                    id: "px-0",
                    form: o || {},
                    hideAnswer: r.hideAnswer,
                    hideQuestionStem: a(p),
                    inLibrary: r.inLibrary,
                    inPageView: r.inPageView,
                    "is-child": !0,
                    markType: a(m),
                    multiSelectionHalfScoreSwitch: a(T),
                    showType: !r.inLibrary,
                    onComputedScore: w
                }, null, 8, [ "form", "hideAnswer", "hideQuestionStem", "inLibrary", "inPageView", "markType", "multiSelectionHalfScoreSwitch", "showType" ]) ]) ]))), 128)), [ "3", "2" ].includes(a(m)) && s.form.changeMarkers.length > 0 ? (i(), 
                l("div", Be, [ (i(!0), l(H, null, Q(s.form.changeMarkers, (o, u) => (i(), 
                l("div", {
                    key: u
                }, [ e("div", Me, [ Ae, e("div", He, n(o.changeMarker ?? "--") + "，于" + n(a(Fe)(o.changeMarkerTime) ?? "--") + "改阅", 1) ]), e("div", Qe, [ Ve, e("div", qe, n(o.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : y("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-88e6693d" ] ]), Ue = Object.defineProperty({
        __proto__: null,
        default: R
    }, Symbol.toStringTag, {
        value: "Module"
    }), Oe = {
        class: "px-5 preview-box"
    }, x = C({
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
            }
        },
        emits: [ "update:form", "update:scoreList", "computedScore" ],
        setup(s, {
            emit: S
        }) {
            const t = S, r = s, {
                form: p,
                showType: I,
                inLibrary: m,
                inPageView: T,
                hideAnswer: w,
                multiSelectionHalfScoreSwitch: f,
                hideQuestionStem: b,
                scoreList: _,
                markType: o
            } = U(r), u = A({
                get: () => p.value,
                set: () => {
                    t("update:form", p.value);
                }
            }), F = g => {
                t("computedScore", g);
            }, B = k([ {
                name: "Type1",
                code: d(De)
            }, {
                name: "Type2",
                code: d(Ne)
            }, {
                name: "Type3",
                code: d(We)
            }, {
                name: "Type4",
                code: d(ze)
            }, {
                name: "Type5",
                code: d(Ze)
            }, {
                name: "Type6",
                code: d(aa)
            }, {
                name: "Type7",
                code: d(ia)
            }, {
                name: "Type8",
                code: d(j)
            }, {
                name: "Type10",
                code: d(R)
            }, {
                name: "Type20",
                code: d(fa)
            }, {
                name: "Type30",
                code: d(ha)
            } ]), c = k(), h = A(() => {
                const g = B.value.find(M => M.name === `Type${u.value.questionType}`);
                return g ? g.code : "span";
            });
            return (g, M) => (i(), l("div", Oe, [ (i(), Ee(ca(a(h)), {
                ref_key: "comRef",
                ref: c,
                form: a(u),
                "onUpdate:form": M[0] || (M[0] = Xe => na(u) ? u.value = Xe : null),
                hideAnswer: a(w),
                hideQuestionStem: a(b),
                inLibrary: a(m),
                inPageView: a(T),
                markType: a(o),
                multiSelectionHalfScoreSwitch: a(f),
                showType: a(I),
                onComputedScore: F
            }, null, 40, [ "form", "hideAnswer", "hideQuestionStem", "inLibrary", "inPageView", "markType", "multiSelectionHalfScoreSwitch", "showType" ])) ]));
        }
    }, [ [ "__scopeId", "data-v-c8947963" ] ]), Ye = Object.defineProperty({
        __proto__: null,
        default: x
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    x as Q,
    Sa as __tla,
    Ue as a,
    Ye as q,
    Ce as t
};