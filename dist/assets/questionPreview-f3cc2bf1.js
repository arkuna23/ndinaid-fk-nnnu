import je, {
    __tla as Qe
} from "./type1-f54a72e8.js";

import Ue, {
    __tla as He
} from "./type2-625362d1.js";

import Be, {
    __tla as De
} from "./type3-e71584c7.js";

import Fe, {
    __tla as Re
} from "./type4-47087f4a.js";

import Ve, {
    __tla as Ye
} from "./type5-97d52dc5.js";

import Ae, {
    __tla as We
} from "./type6-2fd98a76.js";

import ze, {
    __tla as Je
} from "./type7-fc86bf1f.js";

import {
    _ as ge,
    __tla as Xe
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    a7 as r,
    e as q,
    r as h,
    w as O,
    o as u,
    c,
    t as n,
    a,
    H as Ge,
    D as x,
    C as P,
    B as b,
    l as $,
    k as _,
    v as he,
    m as xe,
    F as be,
    y as Te,
    _ as Ke,
    J as Ze,
    Y as ea,
    aW as aa,
    q as ta,
    aX as f,
    aY as la,
    __tla as na
} from "./index-6c08ea4c.js";

import {
    _ as ia,
    __tla as oa
} from "./index-bbb36ead.js";

import {
    D as Ce,
    __tla as sa
} from "./dict-c5825220.js";

import {
    _ as U
} from "./_plugin-vue_export-helper-1b428a4d.js";

import ra, {
    __tla as ua
} from "./type20-a3f2a7d1.js";

import da, {
    __tla as pa
} from "./type30-212dce14.js";

import {
    g as ca,
    __tla as ma
} from "./file-e038b35d.js";

let H, S, we, Ie, Le, fa = Promise.all([ (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return sa;
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
        return ma;
    } catch {}
})() ]).then(async () => {
    let o, B, D, F, R, V, Y, A, W, z, J, X, G, K, Z, ee, ae, te, le, E, ne, ie, oe, se, re, ue, de, pe, ce, M, me;
    o = "smartexam", H = {
        getUnfinishedList: e => r.post({
            url: `/${o}/my-exam/unfinished/list`,
            data: e
        }),
        getFinishedList: e => r.post({
            url: `/${o}/my-exam/finished/list`,
            data: e
        }),
        getExamInfo: e => r.get({
            url: `/${o}/my-exam/exam/info?examId=${e.examId}&candidateId=${e.candidateId}`
        }),
        validateStudentLateForExam: e => r.get({
            url: `/${o}/candidate/process/access?examId=${e.examId}&candidateId=${e.candidateId}`
        }),
        startExam: e => r.get({
            url: `/${o}/candidate/process/entrance?examId=${e.examId}&candidateId=${e.candidateId}`
        }),
        subQuestion: e => r.put({
            url: `/${o}/candidate/process/question/save`,
            data: e,
            showLoading: !1
        }),
        subPaper: e => r.put({
            url: `/${o}/candidate/process/submit?candidateId=${e.candidateId}&doCheck=${e.doCheck}`
        }),
        autoSubPaper: e => r.put({
            url: `/${o}/candidate/process/autoSubmit?candidateId=${e.candidateId}&doCheck=${e.doCheck}`
        }),
        subLog: e => r.post({
            url: `/${o}/invigilation-center/recordLog`,
            data: e,
            showLoading: !1
        }),
        getRemainingTime: e => r.get({
            url: `/${o}/candidate/process/left-time/${e}`
        }),
        enterRoom: e => r.post({
            url: `/${o}/invigilation-center/save-exam-Info`,
            data: e
        }),
        getDetail: e => r.get({
            url: `/${o}/my-exam/finished/detail?candidateId=${e}`
        }),
        markQuestion: e => r.put({
            url: `/${o}/candidate/process/question/mark`,
            data: e
        }),
        playTimes: e => r.put({
            url: `/${o}/candidate/process/question/play/times`,
            data: e,
            showLoading: !1
        }),
        applyManualReview: e => r.post({
            url: `/${o}/invigilation-center/apply-manual-review`,
            data: e
        }),
        disableSoftwareList: () => r.get({
            url: `/${o}/disableSoftware/list`
        }),
        getNewExeFile: () => r.download({
            url: "/smartexam/clientVersion/getExamClient/exam-setup.exe"
        })
    }, B = {
        class: "qusetion-info"
    }, D = {
        class: "info-item"
    }, F = [ "innerHTML" ], R = {
        class: "info-item"
    }, V = {
        class: "value"
    }, Y = {
        class: "preview-box",
        style: {
            position: "relative"
        }
    }, A = {
        key: 2,
        class: "ml10"
    }, W = [ "src" ], z = {
        key: 4,
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, J = {
        style: {
            display: "flex",
            "align-items": "center",
            width: "300px"
        }
    }, X = {
        style: {
            "flex-grow": "1",
            padding: "6px"
        }
    }, G = {
        key: 0,
        class: "ml10"
    }, K = {
        class: "label",
        style: {
            "text-align": "right"
        }
    }, Z = {
        class: "value"
    }, ee = {
        class: "px-0"
    }, ae = {
        class: "info-item"
    }, te = {
        class: "label"
    }, le = {
        class: "value"
    }, E = U({
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
        setup(e, {
            emit: k
        }) {
            const m = k, l = e, t = q({
                get: () => l.form,
                set: s => {
                    emit("update:form", s);
                }
            }), v = q(() => [ "mp4" ].indexOf(t.value.suffix) >= 0), w = q(() => [ "mp3", "ogg" ].indexOf(t.value.suffix) >= 0), I = h("");
            O(() => l.form.eid, () => {
                l.form.eid && w.value && ca(l.form.eid).then(s => {
                    I.value = s;
                });
            }, {
                immediate: !0
            });
            const i = h(null), L = h(0), p = h(0), g = h(0), T = h(100), y = h(1);
            function fe() {
                if (t.value.playCountLeft !== null && t.value.playCountLeft >= 0) {
                    let s = {
                        examId: l.info.examId,
                        paperId: l.info.paperId,
                        questionType: l.form.value.questionType,
                        questionNo: l.form.value.questionNo
                    };
                    H.playTimes(s).then(d => {
                        d.data >= 0 && (t.value.playCountLeft = d.data, i.value.play(), 
                        m("startPlay", i.value), y.value = 3);
                    });
                } else i.value.play(), m("startPlay", i.value), y.value = 3;
            }
            function N() {
                i.value.pause(), y.value = 2;
            }
            function ye() {
                i.value.play(), m("startPlay", i.value), y.value = 3;
            }
            function $e() {
                const s = i.value;
                if (s) {
                    p.value = s.currentTime;
                    const d = s.duration;
                    L.value = Math.round(p.value / d * 100), g.value = d;
                }
            }
            function _e(s) {
                const d = new Date(1e3 * s);
                return `${String(d.getUTCMinutes()).padStart(2, "0")}:${String(d.getUTCSeconds()).padStart(2, "0")}`;
            }
            function ke(s) {
                i.value && (i.value.volume = s / 100);
            }
            function ve() {
                y.value = 1;
            }
            function qe(s) {
                s.questionType = "8", m("answerChange", s, !0);
            }
            return O(() => t, () => {}, {
                deep: !0,
                immediate: !0
            }), (s, d) => {
                const Pe = ia, j = Ke, Q = Ze, Se = ea, Oe = aa, Ee = ta, Me = ge;
                return u(), c("div", B, [ n("div", D, [ n("div", {
                    class: "value",
                    innerHTML: a(t).stem
                }, null, 8, F) ]), n("div", R, [ n("div", V, [ n("div", Y, [ a(t).playCountLeft !== null && a(t).playCountLeft === 0 && a(v) && a(y) === 1 ? (u(), 
                c("div", {
                    key: 0,
                    onClick: d[0] || (d[0] = Ge(() => {}, [ "stop", "prevent" ])),
                    style: {
                        "z-index": "10000",
                        width: "733px",
                        height: "400px",
                        position: "absolute"
                    }
                })) : x("", !0), a(v) ? (u(), P(Pe, {
                    key: 1,
                    ref_key: "audioElement",
                    ref: i,
                    dataId: a(t).eid,
                    defaultWidth: "600px",
                    defaultHeight: "400px",
                    canParse: !0,
                    speed: !1,
                    canPlay: !0,
                    onPlay: d[1] || (d[1] = C => a(y) === 1 ? fe() : ye()),
                    onIsOver: ve,
                    onPause: N
                }, null, 8, [ "dataId" ])) : x("", !0), a(t).playCountLeft !== null && a(t).playCountLeft >= 0 && a(v) ? (u(), 
                c("div", A, " 剩余播放次数：" + b(a(t).playCountLeft) + "次 ", 1)) : x("", !0), a(w) ? (u(), 
                c("audio", {
                    key: 3,
                    ref_key: "audioElement",
                    ref: i,
                    src: a(I),
                    onEnded: ve,
                    onTimeupdate: $e,
                    onPause: N
                }, null, 40, W)) : x("", !0), a(w) ? (u(), c("div", z, [ n("div", J, [ a(y) === 1 ? (u(), 
                P(Q, {
                    key: 0,
                    disabled: a(t).playCountLeft !== null && a(t).playCountLeft === 0,
                    plain: "",
                    text: "",
                    bg: "",
                    circle: "",
                    onClick: fe
                }, {
                    default: $(() => [ _(j, {
                        icon: "ep:caret-right"
                    }) ]),
                    _: 1
                }, 8, [ "disabled" ])) : x("", !0), a(y) === 2 ? (u(), P(Q, {
                    key: 1,
                    plain: "",
                    text: "",
                    bg: "",
                    circle: "",
                    onClick: ye
                }, {
                    default: $(() => [ _(j, {
                        icon: "ep:caret-right"
                    }) ]),
                    _: 1
                })) : x("", !0), a(y) === 3 ? (u(), P(Q, {
                    key: 2,
                    onClick: N,
                    plain: "",
                    text: "",
                    bg: "",
                    circle: ""
                }, {
                    default: $(() => [ he("∥") ]),
                    _: 1
                })) : x("", !0), n("div", X, [ _(Se, {
                    percentage: a(L)
                }, {
                    default: $(() => [ he(b(_e(a(p))) + " / " + b(_e(a(g))), 1) ]),
                    _: 1
                }, 8, [ "percentage" ]) ]), _(Ee, {
                    placement: "top",
                    width: 50,
                    trigger: "hover",
                    "popper-class": "audio-popover"
                }, {
                    default: $(() => [ _(Oe, {
                        modelValue: a(T),
                        "onUpdate:modelValue": d[2] || (d[2] = C => xe(T) ? T.value = C : null),
                        "show-tooltip": !1,
                        onChange: ke,
                        vertical: "",
                        height: "50px",
                        style: {
                            "margin-top": "10px"
                        }
                    }, null, 8, [ "modelValue" ]) ]),
                    reference: $(() => [ _(j, {
                        icon: "ep:headset"
                    }) ]),
                    _: 1
                }) ]), a(t).playCountLeft !== null && a(t).playCountLeft >= 0 ? (u(), 
                c("span", G, "剩余播放次数：" + b(a(t).playCountLeft) + "次", 1)) : x("", !0) ])) : x("", !0) ]) ]) ]), (u(!0), 
                c(be, null, Te(a(t).subQuestions, (C, Ne) => (u(), c("div", {
                    class: "info-item questions pb-3 pt-1 mt-1",
                    key: C.subId
                }, [ n("div", K, b(l.num + "." + (Ne + 1)), 1), n("div", Z, [ n("div", ee, [ n("div", ae, [ n("div", te, [ _(Me, {
                    type: a(Ce).QUESTION_TYPE,
                    value: C.questionType
                }, null, 8, [ "type", "value" ]) ]), n("div", le, " （ " + b(C.questionScore || 0) + " 分 ） ", 1) ]) ]), _(S, {
                    id: "px-0",
                    form: C || {},
                    "is-child": !0,
                    onAnswerChange: qe
                }, null, 8, [ "form" ]) ]) ]))), 128)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-4a93d43c" ] ]), Le = Object.defineProperty({
        __proto__: null,
        default: E
    }, Symbol.toStringTag, {
        value: "Module"
    }), ne = {
        class: "qusetion-info"
    }, ie = {
        class: "info-item"
    }, oe = [ "innerHTML" ], se = {
        class: "label",
        style: {
            "text-align": "right"
        }
    }, re = {
        class: "value"
    }, ue = {
        class: "px-0"
    }, de = {
        class: "info-item"
    }, pe = {
        class: "label"
    }, ce = {
        class: "value"
    }, M = U({
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
        setup(e, {
            emit: k
        }) {
            const m = k, l = e;
            function t(v) {
                v.questionType = "8", m("answerChange", v, !0);
            }
            return O(() => l.form, () => {}, {
                deep: !0,
                immediate: !0
            }), (v, w) => {
                const I = ge;
                return u(), c("div", ne, [ n("div", ie, [ n("div", {
                    class: "value",
                    innerHTML: l.form.stem
                }, null, 8, oe) ]), (u(!0), c(be, null, Te(l.form.subQuestions, (i, L) => (u(), 
                c("div", {
                    class: "info-item questions pb-3 pt-1 mt-1",
                    key: i.subId
                }, [ n("div", se, b(l.num + "." + (L + 1)), 1), n("div", re, [ n("div", ue, [ n("div", de, [ n("div", pe, [ _(I, {
                    type: a(Ce).QUESTION_TYPE,
                    value: i.questionType
                }, null, 8, [ "type", "value" ]) ]), n("div", ce, " （ " + b(i.questionScore || 0) + " 分 ） ", 1) ]) ]), _(S, {
                    id: "px-0",
                    form: i || {},
                    "is-child": !0,
                    showType: !l.inLibrary,
                    onAnswerChange: t
                }, null, 8, [ "form", "showType" ]) ]) ]))), 128)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-fdabd267" ] ]), we = Object.defineProperty({
        __proto__: null,
        default: M
    }, Symbol.toStringTag, {
        value: "Module"
    }), me = {
        class: "px-5 preview-box"
    }, S = U({
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
        setup(e, {
            emit: k
        }) {
            const m = k, l = e, t = q({
                get: () => l.form,
                set: p => {
                    m("update:form", p);
                }
            });
            O(() => l.form, () => {}, {
                deep: !0,
                immediate: !0
            });
            const v = h([ {
                name: "Type1",
                code: f(je)
            }, {
                name: "Type2",
                code: f(Ue)
            }, {
                name: "Type3",
                code: f(Be)
            }, {
                name: "Type4",
                code: f(Fe)
            }, {
                name: "Type5",
                code: f(Ve)
            }, {
                name: "Type6",
                code: f(Ae)
            }, {
                name: "Type7",
                code: f(ze)
            }, {
                name: "Type8",
                code: f(E)
            }, {
                name: "Type10",
                code: f(M)
            }, {
                name: "Type20",
                code: f(ra)
            }, {
                name: "Type30",
                code: f(da)
            } ]), w = h(), I = q(() => {
                var p;
                return ((p = v.value.find(g => g.name === `Type${t.value.questionType}`)) == null ? void 0 : p.code) || "span";
            });
            function i(p, g) {
                if (g) m("answerChange", p); else {
                    let T = {
                        answer: p,
                        questionNo: t.value.questionNo,
                        questionType: t.value.questionType
                    };
                    m("answerChange", T);
                }
            }
            function L(p) {
                m("startPlay", p);
            }
            return (p, g) => (u(), c("div", me, [ (u(), P(la(a(I)), {
                form: a(t),
                "onUpdate:form": g[0] || (g[0] = T => xe(t) ? t.value = T : null),
                "is-child": l.isChild,
                inLibrary: l.inLibrary,
                num: l.num,
                info: l.info,
                ref_key: "comRef",
                ref: w,
                onAnswerChange: i,
                onStartPlay: L
            }, null, 40, [ "form", "is-child", "inLibrary", "num", "info" ])) ]));
        }
    }, [ [ "__scopeId", "data-v-96da7223" ] ]), Ie = Object.defineProperty({
        __proto__: null,
        default: S
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    H as M,
    S as Q,
    fa as __tla,
    we as a,
    Ie as q,
    Le as t
};