import {
    d as k,
    r as _,
    U,
    w as v,
    a as l,
    o as x,
    C as w,
    l as a,
    k as e,
    t as B,
    v as I,
    P as F,
    O,
    av as P,
    _ as g,
    K as j,
    aw as q,
    Q as A,
    __tla as K
} from "./index-6c08ea4c.js";

import {
    r as n,
    __tla as M
} from "./formRules-e114368a.js";

let c, Q = Promise.all([ (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    c = k({
        name: "InfraCodegenBasicInfoForm",
        __name: "BasicInfoForm",
        props: {
            table: {
                type: Object,
                default: () => null
            }
        },
        setup(f, {
            expose: b
        }) {
            const i = f, p = _(), t = _({
                tableName: "",
                tableComment: "",
                className: "",
                author: "",
                remark: ""
            }), V = U({
                tableName: [ n ],
                tableComment: [ n ],
                className: [ n ],
                author: [ n ]
            });
            return v(() => i.table, m => {
                m && (t.value = m);
            }, {
                deep: !0,
                immediate: !0
            }), b({
                validate: async () => {
                    var m;
                    return (m = l(p)) == null ? void 0 : m.validate();
                }
            }), (m, o) => {
                const r = F, u = O, d = P, h = g, N = j, y = q, C = A;
                return x(), w(C, {
                    ref_key: "formRef",
                    ref: p,
                    model: l(t),
                    rules: l(V),
                    "label-width": "120px"
                }, {
                    default: a(() => [ e(y, null, {
                        default: a(() => [ e(d, {
                            span: 12
                        }, {
                            default: a(() => [ e(u, {
                                label: "表名称",
                                prop: "tableName"
                            }, {
                                default: a(() => [ e(r, {
                                    modelValue: l(t).tableName,
                                    "onUpdate:modelValue": o[0] || (o[0] = s => l(t).tableName = s),
                                    placeholder: "请输入仓库名称"
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(d, {
                            span: 12
                        }, {
                            default: a(() => [ e(u, {
                                label: "表描述",
                                prop: "tableComment"
                            }, {
                                default: a(() => [ e(r, {
                                    modelValue: l(t).tableComment,
                                    "onUpdate:modelValue": o[1] || (o[1] = s => l(t).tableComment = s),
                                    placeholder: "请输入"
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(d, {
                            span: 12
                        }, {
                            default: a(() => [ e(u, {
                                prop: "className"
                            }, {
                                label: a(() => [ B("span", null, [ I(" 实体类名称 "), e(N, {
                                    content: "默认去除表名的前缀。如果存在重复，则需要手动添加前缀，避免 MyBatis 报 Alias 重复的问题。",
                                    placement: "top"
                                }, {
                                    default: a(() => [ e(h, {
                                        class: "",
                                        icon: "ep:question-filled"
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: a(() => [ e(r, {
                                    modelValue: l(t).className,
                                    "onUpdate:modelValue": o[2] || (o[2] = s => l(t).className = s),
                                    placeholder: "请输入"
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(d, {
                            span: 12
                        }, {
                            default: a(() => [ e(u, {
                                label: "作者",
                                prop: "author"
                            }, {
                                default: a(() => [ e(r, {
                                    modelValue: l(t).author,
                                    "onUpdate:modelValue": o[3] || (o[3] = s => l(t).author = s),
                                    placeholder: "请输入"
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(d, {
                            span: 24
                        }, {
                            default: a(() => [ e(u, {
                                label: "备注",
                                prop: "remark"
                            }, {
                                default: a(() => [ e(r, {
                                    modelValue: l(t).remark,
                                    "onUpdate:modelValue": o[4] || (o[4] = s => l(t).remark = s),
                                    rows: 3,
                                    type: "textarea"
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    });
});

export {
    c as _,
    Q as __tla
};