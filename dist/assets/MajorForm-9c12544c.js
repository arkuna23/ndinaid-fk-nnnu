import {
    aa as C,
    p as O,
    r as i,
    U as z,
    o as n,
    C as p,
    l as r,
    k as o,
    v as V,
    a,
    A as B,
    c as J,
    F as N,
    y as P,
    m as R,
    P as D,
    O as I,
    ab as Q,
    ac as T,
    Q as Y,
    J as Z,
    aU as $,
    a9 as G,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    b as K,
    D as W,
    __tla as X
} from "./dict-c5825220.js";

import {
    C as h
} from "./constants-528bd83f.js";

import {
    g as ee,
    c as ae,
    u as le,
    __tla as se
} from "./index-d195df69.js";

import {
    _ as te
} from "./_plugin-vue_export-helper-1b428a4d.js";

let E, re = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})() ]).then(async () => {
    E = te(Object.assign({
        name: "MajorForm"
    }, {
        __name: "MajorForm",
        emits: [ "success" ],
        setup(ue, {
            expose: w,
            emit: A
        }) {
            const {
                t: v
            } = C(), f = O(), d = i(!1), g = i(""), m = i(!1), b = i(""), s = i({
                id: "",
                name: "",
                level: "",
                code: "",
                status: h.ENABLE
            }), M = z({
                name: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入专业名称"
                }, {
                    min: 1,
                    max: 20,
                    message: "长度必须介于 1 和 20 之间",
                    trigger: "blur"
                } ],
                level: [ {
                    required: !0,
                    message: "请选择专业层次",
                    trigger: [ "blur", "change" ]
                } ],
                status: [ {
                    required: !0,
                    message: "请选择状态",
                    trigger: "blur"
                } ],
                code: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入专业代码"
                }, {
                    validator: (t, e, u) => {
                        e.length > 20 ? u(new Error("长度在 1 到 20 个字符")) : /^[a-zA-Z0-9]*$/.test(e) ? u() : u(new Error("只允许输入大小写英文字母和数字"));
                    },
                    trigger: "blur"
                } ]
            }), c = i();
            w({
                open: async (t, e) => {
                    if (d.value = !0, g.value = t === "create" ? "新增" : "编辑", b.value = t, 
                    q(), e) {
                        m.value = !0;
                        try {
                            const u = await ee(e);
                            s.value = u;
                        } finally {
                            m.value = !1;
                        }
                    }
                }
            });
            const U = A, k = async () => {
                if (c && await c.value.validate()) {
                    m.value = !0;
                    try {
                        const t = s.value;
                        b.value === "create" ? (await ae(t), f.success(v("common.createSuccess"))) : (await le(t), 
                        f.success(v("common.updateSuccess"))), d.value = !1, U("success");
                    } finally {
                        m.value = !1;
                    }
                }
            }, q = () => {
                var t;
                s.value = {
                    id: "",
                    name: "",
                    level: "",
                    code: "",
                    status: h.ENABLE
                }, (t = c.value) == null || t.resetFields();
            };
            return (t, e) => {
                const u = D, _ = I, x = Q, F = T, L = Y, y = Z, S = $, j = G;
                return n(), p(S, {
                    modelValue: a(d),
                    "onUpdate:modelValue": e[4] || (e[4] = l => R(d) ? d.value = l : null),
                    title: a(g) + "专业",
                    width: "400"
                }, {
                    footer: r(() => [ o(y, {
                        onClick: e[3] || (e[3] = l => d.value = !1)
                    }, {
                        default: r(() => [ V("取 消") ]),
                        _: 1
                    }), o(y, {
                        disabled: a(m),
                        type: "primary",
                        onClick: k
                    }, {
                        default: r(() => [ V("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ B((n(), p(L, {
                        ref_key: "formRef",
                        ref: c,
                        model: a(s),
                        rules: a(M),
                        "label-position": "top",
                        "label-width": "80px",
                        size: "large"
                    }, {
                        default: r(() => [ o(_, {
                            label: "专业名称",
                            prop: "name"
                        }, {
                            default: r(() => [ o(u, {
                                modelValue: a(s).name,
                                "onUpdate:modelValue": e[0] || (e[0] = l => a(s).name = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入专业名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(_, {
                            label: "专业代码",
                            prop: "code"
                        }, {
                            default: r(() => [ o(u, {
                                modelValue: a(s).code,
                                "onUpdate:modelValue": e[1] || (e[1] = l => a(s).code = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入专业代码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(_, {
                            label: "专业层次",
                            prop: "level"
                        }, {
                            default: r(() => [ o(F, {
                                modelValue: a(s).level,
                                "onUpdate:modelValue": e[2] || (e[2] = l => a(s).level = l),
                                placeholder: "请选择专业层次"
                            }, {
                                default: r(() => [ (n(!0), J(N, null, P(a(K)(a(W).SYSTEM_MAJOR_LEVEL), l => (n(), 
                                p(x, {
                                    key: l.value,
                                    label: l.label,
                                    value: l.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ j, a(m) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-207e18f3" ] ]);
});

export {
    re as __tla,
    E as default
};