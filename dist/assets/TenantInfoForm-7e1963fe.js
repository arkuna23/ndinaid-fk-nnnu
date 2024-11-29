import {
    aa as I,
    p as M,
    r as m,
    U as P,
    o as i,
    C as _,
    l as r,
    k as u,
    v as h,
    a,
    A as z,
    c as B,
    F as L,
    y as O,
    m as Y,
    P as j,
    O as D,
    ab as J,
    ac as Q,
    Q as R,
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
    C as V
} from "./constants-528bd83f.js";

import {
    g as ee,
    c as ae,
    u as le,
    __tla as te
} from "./index-7c503ef3.js";

import {
    _ as se
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
        return te;
    } catch {}
})() ]).then(async () => {
    E = se(Object.assign({
        name: "TenantInfoForm"
    }, {
        __name: "TenantInfoForm",
        emits: [ "success" ],
        setup(oe, {
            expose: w,
            emit: A
        }) {
            const {
                t: f
            } = I(), v = M(), d = m(!1), g = m(""), n = m(!1), y = m(""), t = m({
                id: "",
                name: "",
                type: "",
                code: "",
                status: V.ENABLE
            }), T = P({
                name: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请输入租户名称"
                }, {
                    min: 1,
                    max: 30,
                    message: "长度必须介于 1 和 30 之间",
                    trigger: [ "blur", "change" ]
                } ],
                type: [ {
                    required: !0,
                    message: "请选择租户类型",
                    trigger: [ "blur", "change" ]
                } ],
                code: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请输入租户代码"
                }, {
                    validator: (s, e, o) => {
                        e.length > 20 ? o(new Error("长度在 1 到 20 个字符")) : /^[a-zA-Z0-9]*$/.test(e) ? o() : o(new Error("只允许输入大小写英文字母和数字"));
                    },
                    trigger: [ "blur", "change" ]
                } ]
            }), c = m();
            w({
                open: async (s, e) => {
                    if (d.value = !0, g.value = s === "create" ? "新增租户" : "编辑租户", 
                    y.value = s, x(), e) {
                        n.value = !0;
                        try {
                            const o = await ee(e);
                            t.value = o;
                        } finally {
                            n.value = !1;
                        }
                    }
                }
            });
            const U = A, k = async () => {
                if (c && await c.value.validate()) {
                    n.value = !0;
                    try {
                        const s = t.value;
                        y.value === "create" ? (await ae(s), v.success(f("common.createSuccess"))) : (await le(s), 
                        v.success(f("common.updateSuccess"))), d.value = !1, U("success");
                    } finally {
                        n.value = !1;
                    }
                }
            }, x = () => {
                var s;
                t.value = {
                    id: "",
                    name: "",
                    type: "",
                    code: "",
                    status: V.ENABLE
                }, (s = c.value) == null || s.resetFields();
            };
            return (s, e) => {
                const o = j, p = D, C = J, N = Q, S = R, b = Z, q = $, F = G;
                return i(), _(q, {
                    modelValue: a(d),
                    "onUpdate:modelValue": e[4] || (e[4] = l => Y(d) ? d.value = l : null),
                    title: a(g),
                    width: "400"
                }, {
                    footer: r(() => [ u(b, {
                        onClick: e[3] || (e[3] = l => d.value = !1)
                    }, {
                        default: r(() => [ h("取 消") ]),
                        _: 1
                    }), u(b, {
                        disabled: a(n),
                        type: "primary",
                        onClick: k
                    }, {
                        default: r(() => [ h("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ z((i(), _(S, {
                        ref_key: "formRef",
                        ref: c,
                        model: a(t),
                        rules: a(T),
                        "label-position": "top",
                        "label-width": "80px",
                        size: "large"
                    }, {
                        default: r(() => [ u(p, {
                            label: "租户名称",
                            prop: "name"
                        }, {
                            default: r(() => [ u(o, {
                                modelValue: a(t).name,
                                "onUpdate:modelValue": e[0] || (e[0] = l => a(t).name = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入租户名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(p, {
                            label: "租户代码",
                            prop: "code"
                        }, {
                            default: r(() => [ u(o, {
                                modelValue: a(t).code,
                                "onUpdate:modelValue": e[1] || (e[1] = l => a(t).code = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入租户代码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(p, {
                            label: "租户类型",
                            prop: "type"
                        }, {
                            default: r(() => [ u(N, {
                                modelValue: a(t).type,
                                "onUpdate:modelValue": e[2] || (e[2] = l => a(t).type = l),
                                placeholder: "请选择租户类型"
                            }, {
                                default: r(() => [ (i(!0), B(L, null, O(a(K)(a(W).SYSTEM_TENANT_TYPE), l => (i(), 
                                _(C, {
                                    key: l.value,
                                    label: l.label,
                                    value: l.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ F, a(n) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-04ac1f1b" ] ]);
});

export {
    re as __tla,
    E as default
};