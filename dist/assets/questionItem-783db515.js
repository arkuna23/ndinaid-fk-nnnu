import le, {
    __tla as ie
} from "./type1-dcece559.js";

import ue, {
    __tla as me
} from "./type2-a6a0182d.js";

import _e, {
    __tla as ce
} from "./type3-5f949f9d.js";

import de, {
    __tla as pe
} from "./type5-0bd437b5.js";

import fe, {
    __tla as ye
} from "./type4-7ca4a753.js";

import ve, {
    __tla as he
} from "./type6-9e74ce48.js";

import be, {
    __tla as Te
} from "./type7-37922e10.js";

import {
    _ as K,
    __tla as ge
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    V as we,
    __tla as qe
} from "./video-1d0dc730.js";

import {
    D as W,
    __tla as xe
} from "./dict-c5825220.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    e as b,
    r as i,
    w,
    o,
    c,
    t,
    a as u,
    C as Z,
    D as ee,
    F as te,
    y as ae,
    B as q,
    k as x,
    aX as n,
    m as Ce,
    aY as Oe,
    __tla as Se
} from "./index-6c08ea4c.js";

import Ie, {
    __tla as Le
} from "./type20-9799eb41.js";

import Pe, {
    __tla as je
} from "./type30-2996afb1.js";

import {
    g as Me,
    __tla as Ne
} from "./file-e038b35d.js";

let T, se, re, ne, ke = Promise.all([ (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})() ]).then(async () => {
    let I, L, P, j, M, N, k, B, Q, E, H, A, U, C, Y, D, F, R, V, X, $, z, G, O, J;
    I = {
        class: "qusetion-info"
    }, L = {
        class: "info-item"
    }, P = [ "innerHTML" ], j = {
        class: "info-item"
    }, M = {
        class: "value"
    }, N = {
        class: "preview-box"
    }, k = [ "src" ], B = {
        class: "label",
        style: {
            "text-align": "right"
        }
    }, Q = {
        class: "value"
    }, E = {
        class: "px-0"
    }, H = {
        class: "info-item"
    }, A = {
        class: "label"
    }, U = {
        class: "value"
    }, C = S({
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
            num: {
                type: Number,
                default: 1
            },
            info: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "answerChange", "startPlay", "update:form" ],
        setup(f, {
            emit: y
        }) {
            const l = y, e = f, a = b({
                get: () => e.form,
                set: s => {
                    l("update:form", s);
                }
            }), d = b(() => [ "mp4" ].indexOf(a.value.suffix) >= 0), v = b(() => [ "mp3", "ogg" ].indexOf(a.value.suffix) >= 0), p = i("");
            function m(s) {
                s.questionType = "8", l("answerChange", s, !0);
            }
            return w(() => e.form.eid, () => {
                e.form.eid && v.value && Me(e.form.eid).then(s => {
                    p.value = s;
                });
            }, {
                immediate: !0
            }), i(null), i(0), i(0), i(0), i(100), i(1), w(() => a, () => {}, {
                deep: !0,
                immediate: !0
            }), (s, r) => {
                const _ = we, h = K;
                return o(), c("div", I, [ t("div", L, [ t("div", {
                    class: "value",
                    innerHTML: u(a).stem
                }, null, 8, P) ]), t("div", j, [ t("div", M, [ t("div", N, [ u(d) ? (o(), 
                Z(_, {
                    key: 0,
                    dataId: e.form.eid,
                    width: "440px",
                    height: "330px"
                }, null, 8, [ "dataId" ])) : ee("", !0), u(v) ? (o(), c("audio", {
                    key: 1,
                    src: u(p),
                    controls: ""
                }, null, 8, k)) : ee("", !0) ]) ]) ]), (o(!0), c(te, null, ae(u(a).subQuestions, (g, oe) => (o(), 
                c("div", {
                    class: "info-item questions pb-3 pt-1 mt-1",
                    key: g.subId
                }, [ t("div", B, q(e.num + "." + (oe + 1)), 1), t("div", Q, [ t("div", E, [ t("div", H, [ t("div", A, [ x(h, {
                    type: u(W).QUESTION_TYPE,
                    value: g.questionType
                }, null, 8, [ "type", "value" ]) ]), t("div", U, " （ " + q(g.questionScore || 0) + " 分 ） ", 1) ]) ]), x(T, {
                    id: "px-0",
                    form: g || {},
                    "is-child": !0,
                    onAnswerChange: m
                }, null, 8, [ "form" ]) ]) ]))), 128)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-975dfcb3" ] ]), ne = Object.defineProperty({
        __proto__: null,
        default: C
    }, Symbol.toStringTag, {
        value: "Module"
    }), Y = {
        class: "qusetion-info"
    }, D = {
        class: "info-item"
    }, F = [ "innerHTML" ], R = {
        class: "label",
        style: {
            "text-align": "right"
        }
    }, V = {
        class: "value"
    }, X = {
        class: "px-0"
    }, $ = {
        class: "info-item"
    }, z = {
        class: "label"
    }, G = {
        class: "value"
    }, O = S({
        __name: "type10",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            num: {
                type: Number,
                default: 1
            }
        },
        emits: [ "answerChange" ],
        setup(f, {
            emit: y
        }) {
            const l = y, e = f;
            function a(d) {
                d.questionType = "8", l("answerChange", d, !0);
            }
            return w(() => e.form, () => {}, {
                deep: !0,
                immediate: !0
            }), (d, v) => {
                const p = K;
                return o(), c("div", Y, [ t("div", D, [ t("div", {
                    class: "value",
                    innerHTML: e.form.stem
                }, null, 8, F) ]), (o(!0), c(te, null, ae(e.form.subQuestions, (m, s) => (o(), 
                c("div", {
                    class: "info-item questions pb-3 pt-1 mt-1",
                    key: m.subId
                }, [ t("div", R, q(e.num + "." + (s + 1)), 1), t("div", V, [ t("div", X, [ t("div", $, [ t("div", z, [ x(p, {
                    type: u(W).QUESTION_TYPE,
                    value: m.questionType
                }, null, 8, [ "type", "value" ]) ]), t("div", G, " （ " + q(m.questionScore || 0) + " 分 ） ", 1) ]) ]), x(T, {
                    id: "px-0",
                    form: m || {},
                    "is-child": !0,
                    showType: !e.inLibrary,
                    onAnswerChange: a
                }, null, 8, [ "form", "showType" ]) ]) ]))), 128)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-807a9754" ] ]), se = Object.defineProperty({
        __proto__: null,
        default: O
    }, Symbol.toStringTag, {
        value: "Module"
    }), J = {
        class: "px-5 preview-box"
    }, T = S({
        __name: "questionItem",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isChild: {
                type: Boolean,
                default: !1
            },
            inLibrary: {
                type: Boolean,
                default: !1
            },
            num: {
                type: Number,
                default: 1
            },
            info: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "update:form", "answerChange", "startPlay" ],
        setup(f, {
            emit: y
        }) {
            const l = y, e = f, a = b({
                get: () => e.form,
                set: r => {
                    l("update:form", r);
                }
            });
            w(() => e.form, () => {}, {
                deep: !0,
                immediate: !0
            });
            const d = i([ {
                name: "Type1",
                code: n(le)
            }, {
                name: "Type2",
                code: n(ue)
            }, {
                name: "Type3",
                code: n(_e)
            }, {
                name: "Type4",
                code: n(fe)
            }, {
                name: "Type5",
                code: n(de)
            }, {
                name: "Type6",
                code: n(ve)
            }, {
                name: "Type7",
                code: n(be)
            }, {
                name: "Type8",
                code: n(C)
            }, {
                name: "Type10",
                code: n(O)
            }, {
                name: "Type20",
                code: n(Ie)
            }, {
                name: "Type30",
                code: n(Pe)
            } ]), v = i(), p = b(() => {
                var r;
                return ((r = d.value.find(_ => _.name === `Type${a.value.questionType}`)) == null ? void 0 : r.code) || "span";
            });
            function m(r, _) {
                if (_) l("answerChange", r); else {
                    let h = {
                        answer: r,
                        questionNo: a.value.questionNo,
                        questionType: a.value.questionType
                    };
                    l("answerChange", h);
                }
            }
            function s(r) {
                l("startPlay", r);
            }
            return (r, _) => (o(), c("div", J, [ (o(), Z(Oe(u(p)), {
                form: u(a),
                "onUpdate:form": _[0] || (_[0] = h => Ce(a) ? a.value = h : null),
                "is-child": e.isChild,
                inLibrary: e.inLibrary,
                num: e.num,
                info: e.info,
                ref_key: "comRef",
                ref: v,
                onAnswerChange: m,
                onStartPlay: s
            }, null, 40, [ "form", "is-child", "inLibrary", "num", "info" ])) ]));
        }
    }, [ [ "__scopeId", "data-v-26cc8bb4" ] ]), re = Object.defineProperty({
        __proto__: null,
        default: T
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    T as Q,
    ke as __tla,
    se as a,
    re as q,
    ne as t
};