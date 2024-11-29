import {
    b8 as _e,
    p as ge,
    e as we,
    w as ve,
    r as p,
    f as be,
    j as he,
    o as c,
    C as V,
    l as t,
    k as o,
    t as m,
    v as f,
    a as n,
    c as k,
    F as Z,
    y as ee,
    B as ae,
    A as ye,
    m as E,
    I as xe,
    D as ke,
    H as Ve,
    n as F,
    L as Ce,
    O as Le,
    a8 as Ue,
    K as Oe,
    P as Se,
    cK as qe,
    J as Ee,
    aU as Fe,
    Q as Re,
    R as Ke,
    S as Be,
    __tla as De
} from "./index-6c08ea4c.js";

import R, {
    __tla as Ne
} from "./editEditor-a03e6696.js";

import {
    _ as Te
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as je
} from "./Editor-ef737d2a.js";

import {
    __tla as Ie
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Pe
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as ze
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let le, We = Promise.all([ (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})() ]).then(async () => {
    let C, K, B, D, N, T, j, I, P, z, W, $, A;
    C = y => (Ke("data-v-dc2db801"), y = y(), Be(), y), K = {
        class: "label-box pr-5"
    }, B = {
        class: "label-box pr-5"
    }, D = {
        class: "answer-cont"
    }, N = {
        class: "tags-list"
    }, T = {
        class: "neu-thumbnailDisplay tagText"
    }, j = {
        class: "input-box"
    }, I = [ "onClick" ], P = [ "onClick" ], z = [ C(() => m("span", {
        class: "middle"
    }, "插入公式", -1)) ], W = {
        key: 0,
        class: "score-box mt-2"
    }, $ = C(() => m("label", {
        class: "el-form-item__label"
    }, "答案分数", -1)), A = {
        class: "label-box pr-5"
    }, le = Te({
        __name: "type4",
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
        setup(y, {
            expose: te,
            emit: se
        }) {
            const {
                proxy: H
            } = _e(), J = ge(), L = se, U = y, r = we({
                get: () => U.form,
                set: a => {
                    L("update:form", a);
                }
            });
            ve(() => r.value.stem, () => {
                (function() {
                    const a = new Date().getTime();
                    let e = {
                        ...r.value || {}
                    }, l = ((e == null ? void 0 : e.stem) || "").match(/([\(|（]\s*[\)|）])/g), u = 0;
                    l && (u = l.length);
                    let i = [ ...(e == null ? void 0 : e.answers) || [] ];
                    if (i.length > u) e.answers.splice(-1 * (i.length - u)); else {
                        for (let v = 0; v < u; v++) v >= i.length && i.push({
                            answer: "",
                            answerList: [],
                            key: a + 10 * v + "",
                            fullScore: 2,
                            blankScore: 2
                        });
                        e.answers = i;
                    }
                    L("update:form", e);
                })();
            });
            const re = p(), M = p({
                stem: [ {
                    required: !0,
                    message: "请输入题干",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: function(a, e, l) {
                        let u = e.match(/([\(|（]\s*[\)|）])/g), i = 0;
                        u && (i = u.length), i === 0 ? l(new Error("填空题题干请输入至少一个 ‘（）’ ")) : l();
                    },
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
                    message: "请选择正确答案",
                    trigger: [ "blur", "change" ]
                } ]
            }), _ = p(!1), g = p(""), x = p(""), w = p(-1), O = p(null), S = p(null), q = () => {
                _.value = !1, w.value = -1;
            };
            function ne() {
                S.value.updateEditorFocus(), F(() => {
                    var a;
                    Q(((a = r.value.answers[w.value]) == null ? void 0 : a.answerList) || [], 2), 
                    q();
                });
            }
            function Q(a = [], e) {
                let l;
                l = e === 1 ? g.value : x.value, a.indexOf(l) >= 0 ? J.warning("重复答案，请调整！") : l.indexOf("|") >= 0 ? J.warning("答案中不允许出现‘|’，请调整！") : (a.push(l), 
                g.value = "", x.value = ""), X();
            }
            function oe() {
                r.value.answers.forEach(a => {
                    a.blankScore = a.blankScore > 0 ? a.blankScore : .1;
                });
            }
            function X() {
                let a = {
                    ...r.value,
                    answers: (r.value.answers || []).map(e => ({
                        ...e,
                        answer: (e.answerList || []).join("|")
                    }))
                };
                r.value = a;
            }
            function G(a = {}) {
                H.$refs.questionFormRef.resetFields();
                let e = {
                    ...a,
                    answerNeedOrder: a.answerNeedOrder,
                    answers: (a.answers || []).map(l => ({
                        ...l,
                        answerList: l.answer ? (l.answer || "").split("|") : []
                    }))
                };
                L("update:form", e);
            }
            return te({
                reset: G,
                validateForm: async () => H.$refs.questionFormRef.validate()
            }), be(() => {
                G(U.form);
            }), (a, e) => {
                const l = Ce, u = Le, i = Ue, v = Oe, ue = Se, ie = qe, Y = Ee, de = Fe, me = Re, ce = he("show-tip");
                return c(), V(me, {
                    model: n(r),
                    ref_key: "questionFormRef",
                    ref: re,
                    rules: n(M),
                    inline: !1,
                    onSubmit: e[8] || (e[8] = Ve(() => {}, [ "prevent" ]))
                }, {
                    default: t(() => [ o(u, {
                        prop: "stem"
                    }, {
                        label: t(() => [ m("div", K, [ o(l, null, {
                            default: t(() => [ f("题干") ]),
                            _: 1
                        }) ]) ]),
                        default: t(() => [ o(R, {
                            modelValue: n(r).stem,
                            "onUpdate:modelValue": e[0] || (e[0] = s => n(r).stem = s),
                            text: n(r).stemText,
                            "onUpdate:text": e[1] || (e[1] = s => n(r).stemText = s),
                            placeholder: "请点击此处编辑题干，“空格”请输入“（）”"
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), o(u, {
                        required: ""
                    }, {
                        label: t(() => [ m("div", B, [ o(l, null, {
                            default: t(() => [ f("答案") ]),
                            _: 1
                        }) ]) ]),
                        default: t(() => [ o(i, {
                            modelValue: n(r).answerNeedOrder,
                            "onUpdate:modelValue": e[2] || (e[2] = s => n(r).answerNeedOrder = s),
                            "true-value": "0",
                            "false-value": "1"
                        }, {
                            default: t(() => [ f("答案无顺序要求") ]),
                            _: 1
                        }, 8, [ "modelValue" ]), (c(!0), k(Z, null, ee(n(r).answers, (s, b) => (c(), 
                        V(u, {
                            key: s.key,
                            prop: "answers." + b + ".answer",
                            style: {
                                width: "100%",
                                border: "0",
                                "margin-bottom": "20px",
                                "padding-top": "0"
                            },
                            rules: n(M).choiceContent
                        }, {
                            label: t(() => [ f(ae(b + 1 + "."), 1) ]),
                            default: t(() => [ m("div", D, [ m("div", N, [ (c(!0), 
                            k(Z, null, ee(s.answerList, (d, h) => (c(), V(l, {
                                key: b + "." + h + d,
                                class: "mx-1",
                                closable: "",
                                "disable-transitions": !1,
                                onClose: $e => function(pe, Ae, fe) {
                                    pe.splice(fe, 1), X();
                                }(s.answerList, 0, h)
                            }, {
                                default: t(() => [ ye((c(), k("span", null, [ o(v, {
                                    content: d,
                                    placement: "top",
                                    "show-after": 300,
                                    "raw-content": "",
                                    effect: "light"
                                }, {
                                    default: t(() => [ m("span", T, ae(d), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])), [ [ ce ] ]) ]),
                                _: 2
                            }, 1032, [ "onClose" ]))), 128)) ]), m("div", j, [ n(w) !== b || n(_) ? (c(), 
                            k("div", {
                                key: 0,
                                class: "placeholder pl-3",
                                onClick: d => function(h) {
                                    w.value = h, F(() => {
                                        O.value && O.value[0].focus();
                                    });
                                }(b)
                            }, "点此编辑，回车保存，支持多个答案（答对一个即算对）", 8, I)) : (c(), V(ue, {
                                key: 1,
                                ref_for: !0,
                                ref_key: "answerInputRef",
                                ref: O,
                                class: "answer-input",
                                modelValue: n(g),
                                "onUpdate:modelValue": e[3] || (e[3] = d => E(g) ? g.value = d : null),
                                onBlur: e[4] || (e[4] = () => {
                                    g.value = "", w.value = -1;
                                }),
                                onKeydown: xe(d => Q(s.answerList, 1), [ "enter" ]),
                                maxlength: "10000",
                                placeholder: "请输入答案"
                            }, null, 8, [ "modelValue", "onKeydown" ])) ]), m("div", {
                                class: "insert-btn",
                                onClick: d => (h => {
                                    w.value = h, _.value = !0, F(() => {
                                        S.value.showEditor();
                                    });
                                })(b)
                            }, z, 8, P) ]), U.inLibrary ? (c(), k("div", W, [ $, o(ie, {
                                modelValue: s.blankScore,
                                "onUpdate:modelValue": d => s.blankScore = d,
                                modelModifiers: {
                                    number: !0
                                },
                                onChange: oe,
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
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ])) : ke("", !0) ]),
                            _: 2
                        }, 1032, [ "prop", "rules" ]))), 128)) ]),
                        _: 1
                    }), o(u, {
                        prop: "analysis"
                    }, {
                        label: t(() => [ m("div", A, [ o(l, null, {
                            default: t(() => [ f("解析") ]),
                            _: 1
                        }) ]) ]),
                        default: t(() => [ o(R, {
                            modelValue: n(r).analysis,
                            "onUpdate:modelValue": e[5] || (e[5] = s => n(r).analysis = s)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), o(de, {
                        modelValue: n(_),
                        "onUpdate:modelValue": e[7] || (e[7] = s => E(_) ? _.value = s : null),
                        width: "500px",
                        title: "插入公式",
                        onClose: q
                    }, {
                        footer: t(() => [ o(Y, {
                            type: "primary",
                            size: "large",
                            onClick: ne
                        }, {
                            default: t(() => [ f(" 确认 ") ]),
                            _: 1
                        }), o(Y, {
                            size: "large",
                            onClick: q
                        }, {
                            default: t(() => [ f("取消") ]),
                            _: 1
                        }) ]),
                        default: t(() => [ o(R, {
                            longDisplay: !0,
                            ref_key: "EditEditorRef",
                            ref: S,
                            modelValue: n(x),
                            "onUpdate:modelValue": e[6] || (e[6] = s => E(x) ? x.value = s : null)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-dc2db801" ] ]);
});

export {
    We as __tla,
    le as default
};