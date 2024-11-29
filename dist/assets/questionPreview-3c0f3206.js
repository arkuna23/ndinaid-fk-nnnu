import Re, {
    __tla as ze
} from "./type1-bb9ab50e.js";

import Ge, {
    __tla as Ke
} from "./type2-f7593207.js";

import Xe, {
    __tla as $e
} from "./type3-f0157d42.js";

import Je, {
    __tla as We
} from "./type4-e194cfc5.js";

import Ze, {
    __tla as ea
} from "./type5-5cfc2694.js";

import aa, {
    __tla as ta
} from "./type6-f24b6333.js";

import sa, {
    __tla as ia
} from "./type7-6a71ebde.js";

import {
    b8 as Ae,
    r as P,
    e as q,
    w as x,
    j as Ie,
    o as t,
    c as i,
    A as _,
    G as L,
    t as e,
    k as u,
    a as o,
    D as m,
    C as k,
    F as A,
    y as I,
    B as h,
    z as Qe,
    l as Q,
    K as Be,
    L as Oe,
    R as De,
    S as Ee,
    aX as r,
    aY as la,
    __tla as na
} from "./index-6c08ea4c.js";

import {
    V as oa,
    __tla as ra
} from "./video-1d0dc730.js";

import {
    _ as je,
    __tla as ua
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as w,
    __tla as da
} from "./dict-c5825220.js";

import {
    _ as j
} from "./_plugin-vue_export-helper-1b428a4d.js";

import ca, {
    __tla as pa
} from "./type20-1bb6de92.js";

import ya, {
    __tla as ma
} from "./type30-1635403c.js";

import {
    g as fa,
    __tla as _a
} from "./file-e038b35d.js";

let V, Ue, Me, Ne, va = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return We;
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
        return ia;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})() ]).then(async () => {
    let B, U, M, N, C, F, Y, H, R, z, G, K, X, $, J, W, Z, ee, ae, te, se, ie, le, ne, oe, O, D, re, ue, de, ce, pe, ye, me, fe, _e, ve, be, he, we, Te, ge, Pe, Le, Ve, Se, E, qe;
    B = l => (De("data-v-6630bdba"), l = l(), Ee(), l), U = {
        class: "qusetion-info"
    }, M = {
        key: 0,
        class: "info-item"
    }, N = {
        class: "label"
    }, C = {
        class: "value"
    }, F = {
        class: "info-item"
    }, Y = {
        class: "label"
    }, H = [ "innerHTML" ], R = {
        class: "info-item"
    }, z = {
        class: "label"
    }, G = {
        class: "value"
    }, K = {
        class: "preview-box"
    }, X = [ "src" ], $ = {
        class: "child-label"
    }, J = {
        class: "value"
    }, W = {
        class: "px-0"
    }, Z = {
        class: "info-item"
    }, ee = {
        key: 0,
        class: "value"
    }, ae = {
        class: "info-item"
    }, te = B(() => e("div", {
        class: "label"
    }, "难易度", -1)), se = {
        class: "value"
    }, ie = {
        class: "info-item"
    }, le = B(() => e("div", {
        class: "label"
    }, "标签", -1)), ne = {
        class: "value"
    }, oe = {
        class: "neu-thumbnailDisplay tagText"
    }, O = j({
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
            }
        },
        emits: [ "startPlay" ],
        setup(l, {
            emit: s
        }) {
            Ae();
            const T = s, a = l, d = P(""), g = q(() => [ "mp4" ].indexOf(a.form.suffix) >= 0), v = q(() => [ "mp3", "ogg" ].indexOf(a.form.suffix) >= 0);
            x(() => a.form.eid, () => {
                a.form.eid && v.value && fa(a.form.eid).then(c => {
                    d.value = c;
                });
            }, {
                immediate: !0
            }), x(() => a.form, () => {}, {
                deep: !0,
                immediate: !0
            });
            const f = P(null);
            function n() {
                T("startPlay", f.value);
            }
            return (c, p) => {
                const b = je, Ce = oa, Fe = Be, Ye = Oe, He = Ie("show-tip");
                return t(), i("div", U, [ a.showType ? (t(), i("div", M, [ _(e("div", N, "题型", 512), [ [ L, !a.inPageView ] ]), e("div", C, [ u(b, {
                    type: o(w).QUESTION_TYPE,
                    value: a.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : m("", !0), e("div", F, [ _(e("div", Y, "题干", 512), [ [ L, !a.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: a.form.stem
                }, null, 8, H) ]), e("div", R, [ _(e("div", z, "附件", 512), [ [ L, !a.inPageView ] ]), e("div", G, [ e("div", K, [ o(g) ? (t(), 
                k(Ce, {
                    key: 0,
                    ref_key: "playRef",
                    ref: f,
                    onPlay: n,
                    dataId: a.form.eid,
                    width: "440px",
                    height: "330px",
                    canParse: !1
                }, null, 8, [ "dataId" ])) : m("", !0), o(v) ? (t(), i("audio", {
                    key: 1,
                    ref_key: "playRef",
                    ref: f,
                    onPlay: n,
                    src: o(d),
                    controls: ""
                }, null, 40, X)) : m("", !0) ]) ]) ]), (t(!0), i(A, null, I(a.form.subQuestions, (y, S) => {
                    var xe, ke;
                    return t(), i("div", {
                        class: "info-item questions mt-1 pb-3 pt-1",
                        key: S
                    }, [ e("div", $, "子题" + h(S + 1), 1), e("div", J, [ e("div", W, [ e("div", Z, [ a.inLibrary ? (t(), 
                    i("div", ee, [ u(b, {
                        type: o(w).QUESTION_TYPE,
                        value: (xe = y.subQuestion) == null ? void 0 : xe.questionType
                    }, null, 8, [ "type", "value" ]), e("span", null, "（ " + h(((ke = y.subQuestion) == null ? void 0 : ke.questionScore) || y.questionScore || 0) + " 分 ）", 1) ])) : m("", !0) ]) ]), u(V, {
                        id: "px-0",
                        form: y.subQuestion || {},
                        "is-child": !0,
                        showType: !a.inLibrary,
                        inPageView: a.inPageView,
                        hideAnswer: a.hideAnswer,
                        inLibrary: a.inLibrary
                    }, null, 8, [ "form", "showType", "inPageView", "hideAnswer", "inLibrary" ]) ]) ]);
                }), 128)), a.hideAnswer ? m("", !0) : (t(), i("div", {
                    key: 1,
                    class: Qe(a.inPageView ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ e("div", ae, [ te, e("div", se, [ u(b, {
                    type: o(w).QUESTION_DIFFICULT,
                    value: a.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ]), e("div", ie, [ le, e("div", ne, [ (t(!0), 
                i(A, null, I(a.form.tags || [], (y, S) => (t(), k(Ye, {
                    key: S + y,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: Q(() => [ _((t(), i("span", null, [ u(Fe, {
                        content: y,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: Q(() => [ e("span", oe, h(y), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ He ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6630bdba" ] ]), Ne = Object.defineProperty({
        __proto__: null,
        default: O
    }, Symbol.toStringTag, {
        value: "Module"
    }), D = l => (De("data-v-330952cf"), l = l(), Ee(), l), re = {
        class: "qusetion-info"
    }, ue = {
        key: 0,
        class: "info-item"
    }, de = {
        class: "label"
    }, ce = {
        class: "value"
    }, pe = {
        class: "info-item"
    }, ye = {
        class: "label"
    }, me = [ "innerHTML" ], fe = {
        class: "child-label"
    }, _e = {
        class: "value"
    }, ve = {
        class: "px-0"
    }, be = {
        class: "info-item"
    }, he = {
        key: 0,
        class: "value"
    }, we = {
        class: "info-item"
    }, Te = D(() => e("div", {
        class: "label"
    }, "难易度", -1)), ge = {
        class: "value"
    }, Pe = {
        class: "info-item"
    }, Le = D(() => e("div", {
        class: "label"
    }, "标签", -1)), Ve = {
        class: "value"
    }, Se = {
        class: "neu-thumbnailDisplay tagText"
    }, E = j({
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
            }
        },
        setup(l) {
            Ae();
            const s = l;
            return x(() => s.form, () => {}, {
                deep: !0,
                immediate: !0
            }), (T, a) => {
                const d = je, g = Be, v = Oe, f = Ie("show-tip");
                return t(), i("div", re, [ s.showType ? (t(), i("div", ue, [ _(e("div", de, "题型", 512), [ [ L, !s.inPageView ] ]), e("div", ce, [ u(d, {
                    type: o(w).QUESTION_TYPE,
                    value: s.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : m("", !0), e("div", pe, [ _(e("div", ye, "题干", 512), [ [ L, !s.inPageView ] ]), e("div", {
                    class: "value",
                    innerHTML: s.form.stem
                }, null, 8, me) ]), (t(!0), i(A, null, I(s.form.subQuestions, (n, c) => (t(), 
                i("div", {
                    class: "info-item questions pb-3 pt-1 mt-1",
                    key: c
                }, [ e("div", fe, "子题" + h(c + 1), 1), e("div", _e, [ e("div", ve, [ e("div", be, [ s.inLibrary ? (t(), 
                i("div", he, [ u(d, {
                    type: o(w).QUESTION_TYPE,
                    value: n.subQuestion.questionType
                }, null, 8, [ "type", "value" ]), e("span", null, "（ " + h(n.subQuestion.questionScore || n.questionScore || 0) + " 分 ）", 1) ])) : m("", !0) ]) ]), u(V, {
                    id: "px-0",
                    form: n.subQuestion || {},
                    "is-child": !0,
                    showType: !s.inLibrary,
                    inPageView: s.inPageView,
                    hideAnswer: s.hideAnswer,
                    inLibrary: s.inLibrary
                }, null, 8, [ "form", "showType", "inPageView", "hideAnswer", "inLibrary" ]) ]) ]))), 128)), s.hideAnswer ? m("", !0) : (t(), 
                i("div", {
                    key: 1,
                    class: Qe(s.inPageView ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ e("div", we, [ Te, e("div", ge, [ u(d, {
                    type: o(w).QUESTION_DIFFICULT,
                    value: s.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ]), e("div", Pe, [ Le, e("div", Ve, [ (t(!0), 
                i(A, null, I(s.form.tags || [], (n, c) => (t(), k(v, {
                    key: c + n,
                    class: "mr-2",
                    style: {
                        "max-width": "80%"
                    },
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: Q(() => [ _((t(), i("span", null, [ u(g, {
                        content: n,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: Q(() => [ e("span", Se, h(n), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ f ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-330952cf" ] ]), Ue = Object.defineProperty({
        __proto__: null,
        default: E
    }, Symbol.toStringTag, {
        value: "Module"
    }), qe = {
        class: "px-5 preview-box"
    }, V = j({
        __name: "questionPreview",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isChild: {
                type: Boolean,
                default: !1
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
            }
        },
        emits: [ "startPlay", "viewDatabase" ],
        setup(l, {
            emit: s
        }) {
            const T = s;
            P(null);
            const a = l, d = q({
                get: () => a.form,
                set: () => {}
            });
            x(() => a.form, () => {}, {
                deep: !0,
                immediate: !0
            });
            const g = P([ {
                name: "Type1",
                code: r(Re)
            }, {
                name: "Type2",
                code: r(Ge)
            }, {
                name: "Type3",
                code: r(Xe)
            }, {
                name: "Type4",
                code: r(Je)
            }, {
                name: "Type5",
                code: r(Ze)
            }, {
                name: "Type6",
                code: r(aa)
            }, {
                name: "Type7",
                code: r(sa)
            }, {
                name: "Type8",
                code: r(O)
            }, {
                name: "Type10",
                code: r(E)
            }, {
                name: "Type20",
                code: r(ca)
            }, {
                name: "Type30",
                code: r(ya)
            } ]), v = P(), f = q(() => {
                var p;
                return ((p = g.value.find(b => b.name === `Type${d.value.questionType}`)) == null ? void 0 : p.code) || "span";
            });
            function n(p) {
                T("startPlay", p);
            }
            const c = p => {
                T("viewDatabase", p);
            };
            return (p, b) => (t(), i("div", qe, [ (t(), k(la(o(f)), {
                form: o(d),
                "is-child": a.isChild,
                inLibrary: a.inLibrary,
                inPageView: a.inPageView,
                hideAnswer: a.hideAnswer,
                showType: a.showType,
                ref_key: "comRef",
                ref: v,
                onStartPlay: n,
                onViewDatabase: c
            }, null, 40, [ "form", "is-child", "inLibrary", "inPageView", "hideAnswer", "showType" ])) ]));
        }
    }, [ [ "__scopeId", "data-v-ff063a77" ] ]), Me = Object.defineProperty({
        __proto__: null,
        default: V
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    V as Q,
    va as __tla,
    Ue as a,
    Me as q,
    Ne as t
};