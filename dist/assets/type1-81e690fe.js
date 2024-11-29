import {
    p as L,
    b8 as P,
    r as f,
    w as z,
    f as G,
    o as b,
    C as B,
    l as r,
    k as s,
    t as p,
    v as h,
    a as l,
    c as Q,
    F as X,
    y as K,
    B as M,
    dX as N,
    H as g,
    c5 as W,
    e0 as Y,
    L as Z,
    O as ee,
    J as te,
    bp as ae,
    bq as le,
    Q as re,
    __tla as se
} from "./index-6c08ea4c.js";

import v, {
    __tla as oe
} from "./editEditor-a03e6696.js";

import {
    _ as ne
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ie
} from "./Editor-ef737d2a.js";

import {
    __tla as ce
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as ue
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as de
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let R, me = Promise.all([ (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})() ]).then(async () => {
    let w, y, C, x, q, V;
    w = {
        class: "label-box pr-5"
    }, y = {
        class: "label-box pr-5"
    }, C = {
        class: "item-cont"
    }, x = {
        class: "right-box"
    }, q = {
        class: "show-btns"
    }, V = {
        class: "label-box pr-5"
    }, R = ne({
        __name: "type1",
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
            }
        },
        emits: [ "update:form" ],
        setup(j, {
            expose: A,
            emit: D
        }) {
            const k = L(), {
                proxy: I
            } = P(), $ = D, F = j, a = f({});
            z(() => F.form, i => {
                a.value.questionScore = i.questionScore;
            }, {
                deep: !0,
                immediate: !0
            }), z(() => a.value, i => {
                $("update:form", i);
            }, {
                deep: !0
            });
            const H = f(), U = f({
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
                    validator: (i, t, e) => {
                        t === "<p><br></p>" ? e(new Error("请输入题干")) : e();
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
                }, {
                    validator: (i, t, e) => {
                        t === "<p><br></p>" ? e(new Error("请输入题干")) : e();
                    },
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
                }, {
                    validator: (i, t, e) => {
                        t === "<p><br></p>" ? e(new Error("请输入题干")) : e();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                answer: [ {
                    required: !0,
                    message: "请选择正确答案",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (i, t, e) => {
                        t === "<p><br></p>" ? e(new Error("请输入题干")) : e();
                    },
                    trigger: [ "blur", "change" ]
                } ]
            });
            function E(i = {}) {
                const t = new Date().getTime(), e = {
                    ...i
                };
                I.$refs.questionFormRef.resetFields(), e.stem ? a.value = {
                    ...e,
                    answers: e.answer ? e.answer.split(",") : []
                } : a.value = {
                    ...e,
                    answers: e.answer ? e.answer.split(",") : [],
                    questionType: "1",
                    questionScore: e.questionScore || 0,
                    choices: e.choices || [ {
                        choiceId: t + "",
                        choiceContent: ""
                    }, {
                        choiceId: t + 10 + "",
                        choiceContent: ""
                    }, {
                        choiceId: t + 20 + "",
                        choiceContent: ""
                    }, {
                        choiceId: t + 30 + "",
                        choiceContent: ""
                    } ]
                };
            }
            function S(i, t, e) {
                a.value.choices = function(n, c, m) {
                    if (c < 0 || c >= n.length || m < 0 || m >= n.length) return n;
                    var _ = n[c];
                    return n[c] = n[m], n[m] = _, n;
                }(a.value.choices, t, t + e);
            }
            return A({
                reset: E,
                validateForm: async () => I.$refs.questionFormRef.validate()
            }), G(() => {
                E(F.form);
            }), (i, t) => {
                const e = Z, n = ee, c = te, m = ae, _ = le, J = re;
                return b(), B(J, {
                    ref_key: "questionFormRef",
                    ref: H,
                    inline: !1,
                    model: l(a),
                    rules: l(U)
                }, {
                    default: r(() => [ s(n, {
                        prop: "stem"
                    }, {
                        label: r(() => [ p("div", w, [ s(e, null, {
                            default: r(() => [ h("题干") ]),
                            _: 1
                        }) ]) ]),
                        default: r(() => [ s(v, {
                            modelValue: l(a).stem,
                            "onUpdate:modelValue": t[0] || (t[0] = o => l(a).stem = o),
                            text: l(a).stemText,
                            "onUpdate:text": t[1] || (t[1] = o => l(a).stemText = o),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), s(n, {
                        prop: "answer"
                    }, {
                        label: r(() => [ p("div", y, [ s(e, null, {
                            default: r(() => [ h("选项") ]),
                            _: 1
                        }) ]) ]),
                        default: r(() => [ s(_, {
                            modelValue: l(a).answer,
                            "onUpdate:modelValue": t[2] || (t[2] = o => l(a).answer = o)
                        }, {
                            default: r(() => [ (b(!0), Q(X, null, K(l(a).choices, (o, u) => (b(), 
                            B(n, {
                                key: o.choiceId,
                                prop: "choices." + u + ".choiceContent",
                                rules: l(U).choiceContent,
                                class: "choices-item",
                                style: {
                                    width: "100%",
                                    border: "0",
                                    "margin-bottom": "20px",
                                    "padding-top": "0"
                                }
                            }, {
                                label: r(() => [ s(m, {
                                    value: o.choiceId
                                }, {
                                    default: r(() => {
                                        return [ h(M((d = u, String.fromCharCode(d + "A".charCodeAt()) + ".")), 1) ];
                                        var d;
                                    }),
                                    _: 2
                                }, 1032, [ "value" ]) ]),
                                default: r(() => [ p("div", C, [ s(v, {
                                    modelValue: o.choiceContent,
                                    "onUpdate:modelValue": d => o.choiceContent = d,
                                    placeholder: "点击此处编辑选项内容，选中即为正确答案"
                                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), p("div", x, [ p("span", q, [ s(c, {
                                    disabled: u === 0,
                                    circle: "",
                                    icon: l(N),
                                    size: "small",
                                    onClick: g(d => S(0, u, -1), [ "prevent" ])
                                }, null, 8, [ "disabled", "icon", "onClick" ]), s(c, {
                                    disabled: u === l(a).choices.length - 1,
                                    circle: "",
                                    icon: l(W),
                                    size: "small",
                                    onClick: g(d => S(0, u, 1), [ "prevent" ])
                                }, null, 8, [ "disabled", "icon", "onClick" ]), s(c, {
                                    circle: "",
                                    class: "delete-btn",
                                    icon: l(Y),
                                    size: "small",
                                    onClick: g(d => function(T) {
                                        if (a.value.choices.length <= 2) k.warning("试题最少保留 2 个选项！"); else {
                                            const O = a.value.choices.indexOf(T);
                                            O !== -1 && a.value.choices.splice(O, 1);
                                        }
                                        a.value.answer === T.choiceId && (a.value.answer = "");
                                    }(o), [ "prevent" ])
                                }, null, 8, [ "icon", "onClick" ]) ]) ]) ]) ]),
                                _: 2
                            }, 1032, [ "prop", "rules" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]), s(c, {
                            class: "mt-1",
                            icon: "plus",
                            link: "",
                            type: "primary",
                            onClick: t[3] || (t[3] = g(o => function() {
                                if (a.value.choices.length < 26) {
                                    const u = new Date().getTime();
                                    a.value.choices.push({
                                        choiceId: u + "",
                                        choiceContent: ""
                                    });
                                } else k.warning("试题最多只能有 26 个选项！");
                            }(), [ "prevent" ]))
                        }, {
                            default: r(() => [ h(" 添加选项 ") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), s(n, {
                        prop: "analysis"
                    }, {
                        label: r(() => [ p("div", V, [ s(e, null, {
                            default: r(() => [ h("解析") ]),
                            _: 1
                        }) ]) ]),
                        default: r(() => [ s(v, {
                            modelValue: l(a).analysis,
                            "onUpdate:modelValue": t[4] || (t[4] = o => l(a).analysis = o)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-1b29e774" ] ]);
});

export {
    me as __tla,
    R as default
};