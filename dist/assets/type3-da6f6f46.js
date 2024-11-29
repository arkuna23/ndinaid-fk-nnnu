import {
    b8 as O,
    r as d,
    w as V,
    f as P,
    o as p,
    C as F,
    l as e,
    k as s,
    t as n,
    v as m,
    a as t,
    c as $,
    F as D,
    y as L,
    B as I,
    L as Q,
    O as z,
    bp as G,
    bq as H,
    Q as J,
    R as K,
    S as M,
    __tla as N
} from "./index-6c08ea4c.js";

import T, {
    __tla as W
} from "./editEditor-a03e6696.js";

import {
    _ as X
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Y
} from "./Editor-ef737d2a.js";

import {
    __tla as Z
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as ee
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as ae
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let R, te = Promise.all([ (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})() ]).then(async () => {
    let _, f, g, h, b;
    _ = {
        class: "label-box pr-5"
    }, f = {
        class: "label-box pr-5"
    }, g = {
        class: "item-cont"
    }, h = (i => (K("data-v-56843605"), i = i(), M(), i))(() => n("div", {
        class: "right-box"
    }, [ n("span", {
        class: "show-btns"
    }) ], -1)), b = {
        class: "label-box pr-5"
    }, R = X({
        __name: "type3",
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
        setup(i, {
            expose: S,
            emit: U
        }) {
            const {
                proxy: y
            } = O(), k = U, v = i, a = d({});
            V(() => v.form, () => {}, {
                deep: !0
            }), V(() => a.value, u => {
                k("update:form", u);
            }, {
                deep: !0
            });
            const B = d(), x = d({
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
                    message: "请选择正确答案",
                    trigger: [ "blur", "change" ]
                } ]
            });
            function q(u = {}) {
                const r = new Date().getTime(), o = {
                    ...u
                };
                y.$refs.questionFormRef.resetFields(), o.stem ? a.value = {
                    ...o,
                    questionType: "3",
                    answers: o.answer ? o.answer.split(",") : []
                } : a.value = {
                    answers: [],
                    questionType: "3",
                    questionScore: o.questionScore || 0,
                    choices: [ {
                        choiceId: r + "",
                        choiceContent: "正确"
                    }, {
                        choiceId: r + 10 + "",
                        choiceContent: "错误"
                    } ]
                };
            }
            return S({
                reset: q,
                validateForm: async () => y.$refs.questionFormRef.validate()
            }), P(() => {
                q(v.form);
            }), (u, r) => {
                const o = Q, c = z, j = G, A = H, E = J;
                return p(), F(E, {
                    model: t(a),
                    ref_key: "questionFormRef",
                    ref: B,
                    rules: t(x),
                    inline: !1
                }, {
                    default: e(() => [ s(c, {
                        prop: "stem"
                    }, {
                        label: e(() => [ n("div", _, [ s(o, null, {
                            default: e(() => [ m("题干") ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ s(T, {
                            modelValue: t(a).stem,
                            "onUpdate:modelValue": r[0] || (r[0] = l => t(a).stem = l),
                            text: t(a).stemText,
                            "onUpdate:text": r[1] || (r[1] = l => t(a).stemText = l),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), s(c, {
                        prop: "answer"
                    }, {
                        label: e(() => [ n("div", f, [ s(o, null, {
                            default: e(() => [ m("选项") ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ s(A, {
                            modelValue: t(a).answer,
                            "onUpdate:modelValue": r[2] || (r[2] = l => t(a).answer = l)
                        }, {
                            default: e(() => [ (p(!0), $(D, null, L(t(a).choices, (l, w) => (p(), 
                            F(c, {
                                key: l.choiceId,
                                prop: "choices." + w + ".choiceContent",
                                style: {
                                    width: "100%",
                                    border: "0",
                                    "margin-bottom": "20px",
                                    "padding-top": "0"
                                },
                                rules: t(x).choiceContent
                            }, {
                                label: e(() => [ s(j, {
                                    value: l.choiceId
                                }, {
                                    default: e(() => {
                                        return [ m(I((C = w, String.fromCharCode(C + "A".charCodeAt()) + ".")), 1) ];
                                        var C;
                                    }),
                                    _: 2
                                }, 1032, [ "value" ]) ]),
                                default: e(() => [ n("div", g, [ n("div", null, I(l.choiceContent), 1), h ]) ]),
                                _: 2
                            }, 1032, [ "prop", "rules" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(c, {
                        prop: "analysis"
                    }, {
                        label: e(() => [ n("div", b, [ s(o, null, {
                            default: e(() => [ m("解析") ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ s(T, {
                            modelValue: t(a).analysis,
                            "onUpdate:modelValue": r[3] || (r[3] = l => t(a).analysis = l)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-56843605" ] ]);
});

export {
    te as __tla,
    R as default
};