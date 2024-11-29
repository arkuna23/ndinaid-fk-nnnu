import Ge, {
    __tla as He
} from "./type1-81e690fe.js";

import Je, {
    __tla as We
} from "./type2-cee6fed1.js";

import Ze, {
    __tla as et
} from "./type3-da6f6f46.js";

import tt, {
    __tla as at
} from "./type4-0f2e1cd1.js";

import lt, {
    __tla as nt
} from "./type5-a6b47fc2.js";

import st, {
    __tla as ot
} from "./type6-9fcada99.js";

import rt, {
    __tla as ut
} from "./type7-f25f20ee.js";

import {
    b8 as Ce,
    p as Ee,
    e as B,
    r as F,
    w as it,
    f as re,
    o as f,
    C as R,
    l as a,
    k as l,
    t as m,
    v as I,
    D as H,
    c as z,
    a as v,
    F as J,
    y as W,
    B as Z,
    dX as Fe,
    H as V,
    c5 as Ve,
    e0 as Ue,
    L as Me,
    O as Oe,
    P as dt,
    ch as ct,
    J as Pe,
    cK as Ie,
    Q as Le,
    R as mt,
    S as pt,
    dY as ft,
    aX as k,
    m as bt,
    aY as _t,
    __tla as vt
} from "./index-6c08ea4c.js";

import {
    _ as Be,
    __tla as yt
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    V as gt,
    __tla as ht
} from "./video-1d0dc730.js";

import {
    d as Re,
    D as ee,
    __tla as Qt
} from "./dict-c5825220.js";

import ze, {
    __tla as xt
} from "./editEditor-a03e6696.js";

import {
    _ as ue
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as $e,
    b as Ne,
    E as De,
    __tla as qt
} from "./index-5adb716b.js";

import wt, {
    __tla as Tt
} from "./type30-8bfa018d.js";

import kt, {
    __tla as St
} from "./type20-0744bc00.js";

import {
    g as Ct,
    u as Et,
    __tla as Ft
} from "./file-e038b35d.js";

let G, je, Ye, Xe, Vt = Promise.all([ (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return Qt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})() ]).then(async () => {
    let ie, de, ce, me, pe, fe, be, _e, ve, ye, ge, te, he, Qe, xe, qe, we, Te, ke, ae;
    ie = {
        class: "label-box pr-5"
    }, de = {
        class: "label-box pr-5"
    }, ce = (U => (mt("data-v-cdf1614f"), U = U(), pt(), U))(() => m("div", {
        class: "el-upload__tip"
    }, " 请选择 .mp3/.ogg/.mp4 文件，音频文件大小限制 10 Mb， 视频文件大小限制 20 Mb。 ", -1)), me = {
        class: "preview-box"
    }, pe = [ "src" ], fe = {
        class: "label-box pr-5"
    }, be = {
        class: "child-num-cont"
    }, _e = {
        class: "show-btns"
    }, ve = {
        class: "label-box pr-5"
    }, ye = {
        class: "child-num-cont"
    }, ge = {
        class: "neu-color-blue px-3 py-1"
    }, te = ue({
        __name: "type8",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isPreview: {
                type: Boolean,
                default: !1
            },
            isEdit: {
                type: Boolean,
                default: !1
            },
            inLibrary: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:form" ],
        setup(U, {
            expose: Y,
            emit: X
        }) {
            const {
                proxy: $
            } = Ce(), y = Ee(), N = X, b = U, q = B(() => Re(ee.QUESTION_TYPE).filter(t => [ 1, 2, 3, 4, 5 ].includes(Number(t.value)))), e = B({
                get: () => b.form,
                set: t => {
                    N("update:form", t);
                }
            }), w = F(!1), g = F(), M = B(() => [ "mp4" ].indexOf(e.value.suffix) >= 0 && w.value), j = B(() => [ "mp3", "ogg" ].indexOf(e.value.suffix) >= 0 && w.value), K = F("");
            it(() => w.value, () => {
                b.form.eid && j.value && w.value && Ct(b.form.eid).then(t => {
                    K.value = t;
                });
            }, {
                immediate: !0
            });
            const le = F({
                stem: [ {
                    required: !0,
                    message: "请输入题干",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                ename: [ {
                    required: !0,
                    message: "请选择文件",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 200,
                    message: "长度在 1 到 200 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                choiceContent: [ {
                    required: !0,
                    message: "请输入选项内容",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                answer: [ {
                    required: !0,
                    message: "请输入答案",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ]
            }), A = F({}), p = async t => await A.value[`qusetionRef-${t}`].validateForm();
            function d(t, s, u) {
                e.value.subQuestions = function(_, S, C) {
                    let n = [ ..._ ];
                    if (S < 0 || S >= n.length || C < 0 || C >= n.length) return n;
                    let o = n[S];
                    return n[S] = n[C], n[C] = o, n;
                }(e.value.subQuestions, s, s + u);
            }
            function h(t) {
                e.value.subQuestions.length < 40 ? e.value.subQuestions.push({
                    subId: new Date().getTime() + "",
                    questionScore: 2,
                    subQuestion: {
                        questionType: t,
                        questionScore: 2
                    }
                }) : y.error("最多可以添加 40 道子题!");
            }
            function Q(t = {}) {
                e.value = {
                    ...t,
                    subQuestions: t.subQuestions || [],
                    ename: t.ename ? t.ename : t.eName ? t.eName : ""
                }, $.$refs.questionFormRef.resetFields();
            }
            async function L(t) {
                let s = function(n) {
                    let o = "";
                    return n.lastIndexOf(".") > -1 && (o = n.slice(n.lastIndexOf(".") + 1).toLowerCase()), 
                    o;
                }(t.name), u = function(n, o) {
                    for (let r in o) if (o[r].extensions.includes(n)) return o[r];
                    return null;
                }(s, {
                    video: {
                        extensions: [ "mp4" ],
                        maxSizeMB: 20,
                        errorMessage: "只允许上传 .mp4 文件，且文件大小不超过 20 Mb!"
                    },
                    audio: {
                        extensions: [ "mp3", "ogg" ],
                        maxSizeMB: 10,
                        errorMessage: "只允许上传 .mp3/.ogg 文件，且文件大小不超过 10 Mb!"
                    }
                });
                if (!u) return y.error("只允许上传 .mp3/.ogg/.mp4 文件!"), !1;
                if (t.size / 1024 / 1024 >= u.maxSizeMB) return y.error(u.errorMessage), 
                !1;
                let _ = t.name.replace(/[\s\r]/g, "");
                const S = t.slice(0, t.size, t.type), C = new File([ S ], _, {
                    type: t.type
                });
                return await async function(n, o) {
                    try {
                        w.value = !1;
                        let r = await Et(n);
                        if (r && r.data.data.errorFlag === "1") y.error("上传失败"); else {
                            const {
                                eid: T,
                                objectKey: c
                            } = r.data.data, O = {
                                name: c,
                                suffix: o,
                                eid: T
                            };
                            e.value.ename = O.name, e.value.eid = O.eid, e.value.suffix = O.suffix, 
                            setTimeout(() => {
                                w.value = !0;
                            }, 1e3);
                        }
                    } catch {
                        w.value = !1, y.error("上传过程中出现错误，请稍后重试");
                    }
                }(C, s), !1;
            }
            return Y({
                reset: Q,
                validateForm: async () => {
                    let t = await $.$refs.questionFormRef.validate(), s = !0;
                    for (let u = 0; u < e.value.subQuestions.length; u++) {
                        let _ = await p(u);
                        if (s = _, _ !== !0) return !1;
                    }
                    return new Promise((u, _) => {
                        t && s ? u(!0) : _(!1);
                    });
                }
            }), re(() => {
                Q(b.form);
            }), (t, s) => {
                const u = Me, _ = Oe, S = dt, C = ct, n = gt, o = Be, r = Pe, T = Ie, c = $e, O = Ne, ne = De, se = Le;
                return f(), R(se, {
                    model: e.value,
                    ref_key: "questionFormRef",
                    ref: g,
                    rules: v(le),
                    inline: !1,
                    onSubmit: s[4] || (s[4] = V(() => {}, [ "prevent" ]))
                }, {
                    default: a(() => [ l(_, {
                        prop: "stem"
                    }, {
                        label: a(() => [ m("div", ie, [ l(u, {
                            effect: "dark"
                        }, {
                            default: a(() => [ I("主题干") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ l(ze, {
                            modelValue: e.value.stem,
                            "onUpdate:modelValue": s[0] || (s[0] = i => e.value.stem = i),
                            text: e.value.stemText,
                            "onUpdate:text": s[1] || (s[1] = i => e.value.stemText = i),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), l(_, {
                        prop: "ename"
                    }, {
                        label: a(() => [ m("div", de, [ l(u, {
                            effect: "dark"
                        }, {
                            default: a(() => [ I("附件") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ l(C, {
                            limit: 1,
                            class: "upload-demo",
                            action: "#",
                            "show-file-list": !1,
                            accept: ".mp3,.mp4,.ogg",
                            "before-upload": L
                        }, {
                            tip: a(() => [ ce ]),
                            default: a(() => [ l(S, {
                                modelValue: e.value.ename,
                                "onUpdate:modelValue": s[2] || (s[2] = i => e.value.ename = i),
                                readonly: "",
                                placeholder: "请选择音视频文件"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), m("div", me, [ M.value ? (f(), R(n, {
                            key: 0,
                            dataId: e.value.eid,
                            width: "440px",
                            height: "330px",
                            canParse: !1
                        }, null, 8, [ "dataId" ])) : H("", !0), j.value ? (f(), 
                        z("audio", {
                            key: 1,
                            src: v(K),
                            controls: ""
                        }, null, 8, pe)) : H("", !0) ]) ]),
                        _: 1
                    }), (f(!0), z(J, null, W(e.value.subQuestions || [], (i, E) => (f(), 
                    z("div", {
                        class: "child-question pt-2",
                        key: E
                    }, [ l(_, {
                        required: ""
                    }, {
                        label: a(() => [ m("div", fe, [ l(u, {
                            effect: "dark"
                        }, {
                            default: a(() => [ I("子题" + Z(E + 1), 1) ]),
                            _: 2
                        }, 1024) ]) ]),
                        default: a(() => [ m("div", be, [ l(o, {
                            type: v(ee).QUESTION_TYPE,
                            value: i.subQuestion.questionType
                        }, null, 8, [ "type", "value" ]), m("span", _e, [ l(r, {
                            icon: v(Fe),
                            size: "small",
                            disabled: E === 0,
                            circle: "",
                            onClick: V(P => d(0, E, -1), [ "prevent" ])
                        }, null, 8, [ "icon", "disabled", "onClick" ]), l(r, {
                            icon: v(Ve),
                            size: "small",
                            disabled: E === e.value.subQuestions.length - 1,
                            circle: "",
                            onClick: V(P => d(0, E, 1), [ "prevent" ])
                        }, null, 8, [ "icon", "disabled", "onClick" ]), l(r, {
                            class: "delete-btn",
                            icon: v(Ue),
                            size: "small",
                            circle: "",
                            onClick: V(P => function(D, x) {
                                e.value.subQuestions.splice(x, 1);
                            }(0, E), [ "prevent" ])
                        }, null, 8, [ "icon", "onClick" ]) ]) ]) ]),
                        _: 2
                    }, 1024), b.inLibrary ? (f(), R(_, {
                        key: 0,
                        required: ""
                    }, {
                        label: a(() => [ m("div", ve, [ l(u, null, {
                            default: a(() => [ I("分数") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ m("div", ye, [ l(T, {
                            modelValue: i.subQuestion.questionScore,
                            "onUpdate:modelValue": P => i.subQuestion.questionScore = P,
                            modelModifiers: {
                                number: !0
                            },
                            placeholder: "请输入",
                            style: {
                                width: "100px"
                            },
                            step: 1,
                            precision: 1,
                            min: .1,
                            max: 999,
                            title: "",
                            onChange: P => function(D, x) {
                                if (!D) return void (x.subQuestion.questionScore = D || .1);
                                const oe = D;
                                x = {
                                    ...x,
                                    questionScore: oe,
                                    ...x.subQuestion.questionType === "4" ? {
                                        subQuestion: {
                                            ...x.subQuestion,
                                            answers: x.subQuestion.answers.map((Ke, Ae) => {
                                                let Se = parseFloat(Math.round(10 * oe / x.subQuestion.answers.length) / 10);
                                                Ke.blankScore = x.subQuestion.answers.length === Ae + 1 ? oe - Se * (x.subQuestion.answers.length - 1) : Se;
                                            })
                                        }
                                    } : {}
                                };
                            }(i.subQuestion.questionScore, i),
                            "step-strictly": !1,
                            "controls-position": "right"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue", "onChange" ]) ]) ]),
                        _: 2
                    }, 1024)) : H("", !0), l(G, {
                        class: "question-info pl-0",
                        ref_for: !0,
                        ref: P => ((D, x) => {
                            D && (A.value[`qusetionRef-${x}`] = D);
                        })(P, E),
                        type: i.subQuestion.questionType,
                        form: e.value.subQuestions[E].subQuestion,
                        "onUpdate:form": P => e.value.subQuestions[E].subQuestion = P,
                        inLibrary: b.inLibrary,
                        isEdit: b.isEdit
                    }, null, 8, [ "type", "form", "onUpdate:form", "inLibrary", "isEdit" ]) ]))), 128)), l(ne, {
                        onCommand: h,
                        onClick: s[3] || (s[3] = V(() => {}, [ "stop" ]))
                    }, {
                        dropdown: a(() => [ l(O, null, {
                            default: a(() => [ (f(!0), z(J, null, W(q.value, i => (f(), 
                            R(c, {
                                key: i,
                                command: i.value
                            }, {
                                default: a(() => [ m("div", ge, Z(i.label), 1) ]),
                                _: 2
                            }, 1032, [ "command" ]))), 128)) ]),
                            _: 1
                        }) ]),
                        default: a(() => [ l(r, {
                            icon: "plus",
                            class: "my-3"
                        }, {
                            default: a(() => [ I("添加子试题") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-cdf1614f" ] ]), Xe = Object.defineProperty({
        __proto__: null,
        default: te
    }, Symbol.toStringTag, {
        value: "Module"
    }), he = {
        class: "label-box pr-5"
    }, Qe = {
        class: "label-box pr-5"
    }, xe = {
        class: "child-num-cont"
    }, qe = {
        class: "show-btns"
    }, we = {
        class: "label-box pr-5"
    }, Te = {
        class: "child-num-cont"
    }, ke = {
        class: "neu-color-blue px-3 py-1"
    }, ae = ue({
        __name: "type10",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isPreview: {
                type: Boolean,
                default: !1
            },
            isEdit: {
                type: Boolean,
                default: !1
            },
            inLibrary: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:form" ],
        setup(U, {
            expose: Y,
            emit: X
        }) {
            const $ = Ee(), {
                proxy: y
            } = Ce(), N = X, b = U, q = B(() => Re(ee.QUESTION_TYPE).filter(p => [ 1, 2, 3, 4, 5 ].includes(Number(p.value)))), e = B({
                get: () => b.form,
                set: p => {
                    N("update:form", p);
                }
            }), w = F(), g = F({
                stem: [ {
                    required: !0,
                    message: "请输入题干",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                analysis: [ {
                    required: !1,
                    message: "请输入解析",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                choiceContent: [ {
                    required: !0,
                    message: "请输入选项内容",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                answer: [ {
                    required: !0,
                    message: "请输入答案",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ]
            }), M = F({}), j = async p => await M.value[`qusetionRef-${p}`].validateForm();
            function K(p, d, h) {
                e.value.subQuestions = function(Q, L, t) {
                    let s = [ ...Q ];
                    if (L < 0 || L >= s.length || t < 0 || t >= s.length) return s;
                    var u = s[L];
                    return s[L] = s[t], s[t] = u, s;
                }(e.value.subQuestions, d, d + h);
            }
            function le(p) {
                e.value.subQuestions.length < 40 ? e.value.subQuestions.push({
                    subId: new Date().getTime() + "",
                    questionScore: 2,
                    subQuestion: {
                        questionType: p,
                        questionScore: 2
                    }
                }) : $.error("最多可以添加 40 道子题!");
            }
            function A(p = {}) {
                e.value = {
                    ...p,
                    subQuestions: p.subQuestions || []
                }, y.$refs.questionFormRef.resetFields();
            }
            return Y({
                reset: A,
                validateForm: async () => {
                    let p = await y.$refs.questionFormRef.validate(), d = !0;
                    for (let h = 0; h < e.value.subQuestions.length; h++) {
                        let Q = await j(h);
                        if (d = Q, Q !== !0) return !1;
                    }
                    return new Promise((h, Q) => {
                        p && d ? h(!0) : Q(!1);
                    });
                }
            }), re(() => {
                A(b.form);
            }), (p, d) => {
                const h = Me, Q = Oe, L = Be, t = Pe, s = Ie, u = $e, _ = Ne, S = De, C = Le;
                return f(), R(C, {
                    model: e.value,
                    ref_key: "questionFormRef",
                    ref: w,
                    rules: v(g),
                    inline: !1,
                    onSubmit: d[3] || (d[3] = V(() => {}, [ "prevent" ]))
                }, {
                    default: a(() => [ l(Q, {
                        prop: "stem"
                    }, {
                        label: a(() => [ m("div", he, [ l(h, {
                            effect: "dark"
                        }, {
                            default: a(() => [ I("主题干") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ l(ze, {
                            modelValue: e.value.stem,
                            "onUpdate:modelValue": d[0] || (d[0] = n => e.value.stem = n),
                            text: e.value.stemText,
                            "onUpdate:text": d[1] || (d[1] = n => e.value.stemText = n),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), (f(!0), z(J, null, W(e.value.subQuestions || [], (n, o) => (f(), 
                    z("div", {
                        class: "child-question pt-2",
                        key: o
                    }, [ l(Q, {
                        required: ""
                    }, {
                        label: a(() => [ m("div", Qe, [ l(h, {
                            effect: "dark"
                        }, {
                            default: a(() => [ I("子题" + Z(o + 1), 1) ]),
                            _: 2
                        }, 1024) ]) ]),
                        default: a(() => [ m("div", xe, [ l(L, {
                            type: v(ee).QUESTION_TYPE,
                            value: n.subQuestion.questionType
                        }, null, 8, [ "type", "value" ]), m("span", qe, [ l(t, {
                            icon: v(Fe),
                            size: "small",
                            disabled: o === 0,
                            circle: "",
                            onClick: V(r => K(0, o, -1), [ "prevent" ])
                        }, null, 8, [ "icon", "disabled", "onClick" ]), l(t, {
                            icon: v(Ve),
                            size: "small",
                            disabled: o === e.value.subQuestions.length - 1,
                            circle: "",
                            onClick: V(r => K(0, o, 1), [ "prevent" ])
                        }, null, 8, [ "icon", "disabled", "onClick" ]), l(t, {
                            class: "delete-btn",
                            icon: v(Ue),
                            size: "small",
                            circle: "",
                            onClick: V(r => function(T, c) {
                                e.value.subQuestions.splice(c, 1);
                            }(0, o), [ "prevent" ])
                        }, null, 8, [ "icon", "onClick" ]) ]) ]) ]),
                        _: 2
                    }, 1024), b.inLibrary ? (f(), R(Q, {
                        key: 0,
                        required: ""
                    }, {
                        label: a(() => [ m("div", we, [ l(h, null, {
                            default: a(() => [ I("分数") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ m("div", Te, [ l(s, {
                            modelValue: n.subQuestion.questionScore,
                            "onUpdate:modelValue": r => n.subQuestion.questionScore = r,
                            modelModifiers: {
                                number: !0
                            },
                            onChange: r => function(T, c) {
                                if (!T) return void (c.subQuestion.questionScore = T || .1);
                                const O = T;
                                c = {
                                    ...c,
                                    questionScore: O,
                                    ...c.subQuestion.questionType === "4" ? {
                                        subQuestion: {
                                            ...c.subQuestion,
                                            answers: c.subQuestion.answers.map((ne, se) => {
                                                let i = parseFloat(Math.round(10 * O / c.subQuestion.answers.length) / 10);
                                                ne.blankScore = c.subQuestion.answers.length === se + 1 ? O - i * (c.subQuestion.answers.length - 1) : i;
                                            })
                                        }
                                    } : {}
                                };
                            }(n.subQuestion.questionScore, n),
                            placeholder: "请输入",
                            style: {
                                width: "100px"
                            },
                            step: 1,
                            precision: 1,
                            min: .1,
                            max: 999,
                            title: "",
                            "step-strictly": !1,
                            "controls-position": "right"
                        }, null, 8, [ "modelValue", "onUpdate:modelValue", "onChange" ]) ]) ]),
                        _: 2
                    }, 1024)) : H("", !0), l(G, {
                        class: "question-info pl-0",
                        ref_for: !0,
                        ref: r => ((T, c) => {
                            T && (M.value[`qusetionRef-${c}`] = T);
                        })(r, o),
                        type: n.subQuestion.questionType,
                        form: e.value.subQuestions[o].subQuestion,
                        "onUpdate:form": r => e.value.subQuestions[o].subQuestion = r,
                        inLibrary: b.inLibrary,
                        isEdit: b.isEdit
                    }, null, 8, [ "type", "form", "onUpdate:form", "inLibrary", "isEdit" ]) ]))), 128)), l(S, {
                        onCommand: le,
                        onClick: d[2] || (d[2] = V(() => {}, [ "stop" ]))
                    }, {
                        dropdown: a(() => [ l(_, null, {
                            default: a(() => [ (f(!0), z(J, null, W(q.value, n => (f(), 
                            R(u, {
                                key: n,
                                command: n.value
                            }, {
                                default: a(() => [ m("div", ke, Z(n.label), 1) ]),
                                _: 2
                            }, 1032, [ "command" ]))), 128)) ]),
                            _: 1
                        }) ]),
                        default: a(() => [ l(t, {
                            icon: v(ft),
                            class: "my-3"
                        }, {
                            default: a(() => [ I("添加子试题") ]),
                            _: 1
                        }, 8, [ "icon" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-bff86b08" ] ]), je = Object.defineProperty({
        __proto__: null,
        default: ae
    }, Symbol.toStringTag, {
        value: "Module"
    }), G = ue({
        __name: "questionInfo",
        props: {
            type: {
                type: String,
                default: ""
            },
            form: {
                type: Object,
                default: () => ({})
            },
            isPreview: {
                type: Boolean,
                default: !1
            },
            isEdit: {
                type: Boolean,
                default: !1
            },
            inLibrary: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:form", "viewDatabase", "viewDatabase" ],
        setup(U, {
            expose: Y,
            emit: X
        }) {
            const $ = X, y = U, N = B({
                get: () => y.form,
                set: g => {
                    $("update:form", g);
                }
            }), b = F([ {
                name: "Type1",
                code: k(Ge)
            }, {
                name: "Type2",
                code: k(Je)
            }, {
                name: "Type3",
                code: k(Ze)
            }, {
                name: "Type4",
                code: k(tt)
            }, {
                name: "Type5",
                code: k(lt)
            }, {
                name: "Type6",
                code: k(st)
            }, {
                name: "Type7",
                code: k(rt)
            }, {
                name: "Type8",
                code: k(te)
            }, {
                name: "Type10",
                code: k(ae)
            }, {
                name: "Type20",
                code: k(kt)
            }, {
                name: "Type30",
                code: k(wt)
            } ]), q = F(), e = B(() => {
                var g;
                return ((g = b.value.find(M => M.name === `Type${y.type}`)) == null ? void 0 : g.code) || "span";
            }), w = g => {
                $("viewDatabase", g);
            };
            return Y({
                reset: function(g) {
                    q.value && q.value.reset && q.value.reset(g);
                },
                validateForm: async () => {
                    if (q.value && q.value.validateForm) return q.value.validateForm();
                }
            }), re(() => {}), (g, M) => (f(), z("div", null, [ (f(), R(_t(v(e)), {
                form: v(N),
                "onUpdate:form": M[0] || (M[0] = j => bt(N) ? N.value = j : null),
                isEdit: y.isEdit,
                inLibrary: y.inLibrary,
                onViewDatabase: w,
                ref_key: "comRef",
                ref: q
            }, null, 40, [ "form", "isEdit", "inLibrary" ])) ]));
        }
    }, [ [ "__scopeId", "data-v-1f8b4ce2" ] ]), Ye = Object.defineProperty({
        __proto__: null,
        default: G
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    G as Q,
    Vt as __tla,
    je as a,
    Ye as q,
    Xe as t
};