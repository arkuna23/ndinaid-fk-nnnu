import {
    b8 as J,
    p as G,
    r as v,
    w as O,
    f as L,
    o as b,
    C as R,
    l as s,
    k as o,
    t as p,
    v as h,
    a as t,
    c as Q,
    F as X,
    y as K,
    B as M,
    dX as N,
    H as f,
    c5 as W,
    e0 as Y,
    L as Z,
    O as ee,
    J as ae,
    a8 as te,
    br as le,
    Q as se,
    __tla as oe
} from "./index-6c08ea4c.js";

import y, {
    __tla as re
} from "./editEditor-a03e6696.js";

import {
    _ as ne
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ce
} from "./Editor-ef737d2a.js";

import {
    __tla as ie
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as ue
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as de
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let j, me = Promise.all([ (() => {
    try {
        return oe;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ie;
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
    let w, C, x, q, V, k;
    w = {
        class: "label-box pr-5"
    }, C = {
        class: "label-box pr-5"
    }, x = {
        class: "item-cont"
    }, q = {
        class: "right-box"
    }, V = {
        class: "show-btns"
    }, k = {
        class: "label-box pr-5"
    }, j = ne({
        __name: "type2",
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
        setup(A, {
            expose: D,
            emit: P
        }) {
            const {
                proxy: I
            } = J(), F = G(), $ = P, T = A, e = v({});
            O(() => T.form, i => {
                e.value.questionScore = i.questionScore;
            }, {
                deep: !0,
                immediate: !0
            }), O(() => e.value, i => {
                let a = {
                    ...i,
                    answer: (i.answers || []).join(",")
                };
                $("update:form", a);
            }, {
                deep: !0
            });
            const E = v(), U = v({
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
                answers: [ {
                    required: !0,
                    message: "请选择正确答案",
                    trigger: [ "blur", "change" ]
                } ]
            });
            function S(i = {}) {
                const a = new Date().getTime(), l = {
                    ...i
                };
                I.$refs.questionFormRef.resetFields(), l.stem ? e.value = {
                    ...l,
                    questionType: "2",
                    answers: l.answer ? l.answer.split(",") : []
                } : e.value = {
                    ...l,
                    questionType: "2",
                    questionScore: l.questionScore || 0,
                    answers: l.answer ? l.answer.split(",") : [],
                    choices: l.choices || [ {
                        choiceId: a + "",
                        choiceContent: ""
                    }, {
                        choiceId: a + 10 + "",
                        choiceContent: ""
                    }, {
                        choiceId: a + 20 + "",
                        choiceContent: ""
                    }, {
                        choiceId: a + 30 + "",
                        choiceContent: ""
                    } ]
                };
            }
            function z(i, a, l) {
                e.value.choices = function(n, c, m) {
                    if (c < 0 || c >= n.length || m < 0 || m >= n.length) return n;
                    var g = n[c];
                    return n[c] = n[m], n[m] = g, n;
                }(e.value.choices, a, a + l);
            }
            return D({
                reset: S,
                validateForm: async () => I.$refs.questionFormRef.validate()
            }), L(() => {
                S(T.form);
            }), (i, a) => {
                const l = Z, n = ee, c = ae, m = te, g = le, H = se;
                return b(), R(H, {
                    model: t(e),
                    ref_key: "questionFormRef",
                    ref: E,
                    rules: t(U),
                    inline: !1
                }, {
                    default: s(() => [ o(n, {
                        prop: "stem"
                    }, {
                        label: s(() => [ p("div", w, [ o(l, null, {
                            default: s(() => [ h("题干") ]),
                            _: 1
                        }) ]) ]),
                        default: s(() => [ o(y, {
                            modelValue: t(e).stem,
                            "onUpdate:modelValue": a[0] || (a[0] = r => t(e).stem = r),
                            text: t(e).stemText,
                            "onUpdate:text": a[1] || (a[1] = r => t(e).stemText = r),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), o(n, {
                        prop: "answers"
                    }, {
                        label: s(() => [ p("div", C, [ o(l, null, {
                            default: s(() => [ h("选项") ]),
                            _: 1
                        }) ]) ]),
                        default: s(() => [ o(g, {
                            modelValue: t(e).answers,
                            "onUpdate:modelValue": a[2] || (a[2] = r => t(e).answers = r)
                        }, {
                            default: s(() => [ (b(!0), Q(X, null, K(t(e).choices, (r, u) => (b(), 
                            R(n, {
                                key: r.choiceId,
                                prop: "choices." + u + ".choiceContent",
                                class: "choices-item",
                                style: {
                                    width: "100%",
                                    border: "0",
                                    "margin-bottom": "20px",
                                    "padding-top": "0"
                                },
                                rules: t(U).choiceContent
                            }, {
                                label: s(() => [ o(m, {
                                    value: r.choiceId
                                }, {
                                    default: s(() => {
                                        return [ h(M((d = u, String.fromCharCode(d + "A".charCodeAt()) + ".")), 1) ];
                                        var d;
                                    }),
                                    _: 2
                                }, 1032, [ "value" ]) ]),
                                default: s(() => [ p("div", x, [ o(y, {
                                    modelValue: r.choiceContent,
                                    "onUpdate:modelValue": d => r.choiceContent = d,
                                    placeholder: "点击此处编辑选项内容，选中即为正确答案"
                                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), p("div", q, [ p("span", V, [ o(c, {
                                    icon: t(N),
                                    size: "small",
                                    disabled: u === 0,
                                    circle: "",
                                    onClick: f(d => z(0, u, -1), [ "prevent" ])
                                }, null, 8, [ "icon", "disabled", "onClick" ]), o(c, {
                                    icon: t(W),
                                    size: "small",
                                    disabled: u === t(e).choices.length - 1,
                                    circle: "",
                                    onClick: f(d => z(0, u, 1), [ "prevent" ])
                                }, null, 8, [ "icon", "disabled", "onClick" ]), o(c, {
                                    class: "delete-btn",
                                    icon: t(Y),
                                    size: "small",
                                    circle: "",
                                    onClick: f(d => function(B) {
                                        if (e.value.choices.length <= 2) F.warning("试题最少保留 2 个选项！"); else {
                                            const _ = e.value.choices.indexOf(B);
                                            _ !== -1 && e.value.choices.splice(_, 1);
                                        }
                                        e.value.answers = e.value.answers.filter(_ => _ !== B.choiceId);
                                    }(r), [ "prevent" ])
                                }, null, 8, [ "icon", "onClick" ]) ]) ]) ]) ]),
                                _: 2
                            }, 1032, [ "prop", "rules" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]), o(c, {
                            link: "",
                            type: "primary",
                            icon: "plus",
                            class: "mt-1",
                            onClick: a[3] || (a[3] = f(r => function() {
                                if (e.value.choices.length < 26) {
                                    const u = new Date().getTime();
                                    e.value.choices.push({
                                        choiceId: u + "",
                                        choiceContent: ""
                                    });
                                } else F.warning("试题最多只能有 26 个选项！");
                            }(), [ "prevent" ]))
                        }, {
                            default: s(() => [ h("添加选项") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), o(n, {
                        prop: "analysis"
                    }, {
                        label: s(() => [ p("div", k, [ o(l, null, {
                            default: s(() => [ h("解析") ]),
                            _: 1
                        }) ]) ]),
                        default: s(() => [ o(y, {
                            modelValue: t(e).analysis,
                            "onUpdate:modelValue": a[4] || (a[4] = r => t(e).analysis = r)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-15305df4" ] ]);
});

export {
    me as __tla,
    j as default
};