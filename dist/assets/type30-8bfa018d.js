import {
    b8 as U,
    e as R,
    r as x,
    f as j,
    o as k,
    C as B,
    l as a,
    k as l,
    t as u,
    v as n,
    a as t,
    H as E,
    L as O,
    O as P,
    Q as $,
    __tla as C
} from "./index-6c08ea4c.js";

import H, {
    __tla as L
} from "./sqlInfo-6616efed.js";

import d, {
    __tla as Q
} from "./editEditor-a03e6696.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as z
} from "./sqlDetail-6033fcff.js";

import {
    __tla as A
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as D
} from "./dict-c5825220.js";

import {
    __tla as G
} from "./file-e038b35d.js";

import {
    __tla as J
} from "./index-5adb716b.js";

import {
    __tla as K
} from "./Editor-ef737d2a.js";

import {
    __tla as M
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as N
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let q, W = Promise.all([ (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    let i, p, c, f;
    i = {
        class: "label-box pr-5"
    }, p = {
        class: "label-box pr-5"
    }, c = {
        class: "label-box pr-5"
    }, f = {
        class: "label-box pr-5"
    }, q = S({
        __name: "type30",
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
        setup(V, {
            expose: v,
            emit: T
        }) {
            const {
                proxy: g
            } = U(), b = T, y = V, r = R({
                get: () => y.form,
                set: o => {
                    b("update:form", o);
                }
            }), w = x(), F = x({
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
                dbId: [ {
                    required: !0,
                    message: "请选择数据库",
                    trigger: [ "blur", "change" ]
                } ],
                answer: [ {
                    required: !0,
                    message: "请输入正确答案",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ]
            });
            function h(o = {}) {
                g.$refs.questionFormRef.resetFields();
                let e = {
                    ...o,
                    sqlType: "82"
                };
                b("update:form", e);
            }
            return v({
                reset: h,
                validateForm: async () => g.$refs.questionFormRef.validate()
            }), j(() => {
                h(y.form);
            }), (o, e) => {
                const m = O, _ = P, I = $;
                return k(), B(I, {
                    model: t(r),
                    ref_key: "questionFormRef",
                    ref: w,
                    rules: t(F),
                    inline: !1,
                    onSubmit: e[5] || (e[5] = E(() => {}, [ "prevent" ]))
                }, {
                    default: a(() => [ l(_, {
                        prop: "stem"
                    }, {
                        label: a(() => [ u("div", i, [ l(m, null, {
                            default: a(() => [ n("题干") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ l(d, {
                            modelValue: t(r).stem,
                            "onUpdate:modelValue": e[0] || (e[0] = s => t(r).stem = s),
                            text: t(r).stemText,
                            "onUpdate:text": e[1] || (e[1] = s => t(r).stemText = s),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), l(_, {
                        prop: "dbId"
                    }, {
                        label: a(() => [ u("div", p, [ l(m, null, {
                            default: a(() => [ n("数据库") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ l(H, {
                            modelValue: t(r).dbId,
                            "onUpdate:modelValue": e[2] || (e[2] = s => t(r).dbId = s),
                            sqlType: t(r).sqlType
                        }, null, 8, [ "modelValue", "sqlType" ]) ]),
                        _: 1
                    }), l(_, {
                        prop: "answer"
                    }, {
                        label: a(() => [ u("div", c, [ l(m, null, {
                            default: a(() => [ n("答案") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ l(d, {
                            modelValue: t(r).answer,
                            "onUpdate:modelValue": e[3] || (e[3] = s => t(r).answer = s)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), l(_, {
                        prop: "analysis"
                    }, {
                        label: a(() => [ u("div", f, [ l(m, null, {
                            default: a(() => [ n("解析") ]),
                            _: 1
                        }) ]) ]),
                        default: a(() => [ l(d, {
                            modelValue: t(r).analysis,
                            "onUpdate:modelValue": e[4] || (e[4] = s => t(r).analysis = s)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ede59b1e" ] ]);
});

export {
    W as __tla,
    q as default
};