import {
    d as F,
    aa as N,
    p as O,
    r as m,
    U as L,
    o as p,
    C as v,
    l as s,
    k as u,
    v as y,
    a as e,
    A as M,
    c as P,
    F as j,
    y as z,
    B as J,
    m as Q,
    P as R,
    O as G,
    bp as H,
    bq as I,
    Q as K,
    J as W,
    aU as X,
    a9 as Y,
    __tla as Z
} from "./index-6c08ea4c.js";

import {
    b as $,
    D as ee,
    __tla as ae
} from "./dict-c5825220.js";

import {
    a as le,
    c as te,
    u as se,
    __tla as ue
} from "./dict.type-16d98778.js";

import {
    C as h
} from "./constants-528bd83f.js";

let k, re = Promise.all([ (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})() ]).then(async () => {
    k = F({
        name: "SystemDictTypeForm",
        __name: "DictTypeForm",
        emits: [ "success" ],
        setup(oe, {
            expose: U,
            emit: w
        }) {
            const {
                t: c
            } = N(), f = O(), o = m(!1), b = m(""), d = m(!1), V = m(""), t = m({
                id: void 0,
                name: "",
                type: "",
                status: h.ENABLE,
                remark: ""
            }), S = L({
                name: [ {
                    required: !0,
                    message: "字典名称不能为空",
                    trigger: "blur"
                } ],
                type: [ {
                    required: !0,
                    message: "字典类型不能为空",
                    trigger: "blur"
                } ],
                status: [ {
                    required: !0,
                    message: "状态不能为空",
                    trigger: "change"
                } ]
            }), i = m();
            U({
                open: async (r, a) => {
                    if (o.value = !0, b.value = c("action." + r), V.value = r, C(), 
                    a) {
                        d.value = !0;
                        try {
                            t.value = await le(a);
                        } finally {
                            d.value = !1;
                        }
                    }
                }
            });
            const q = w, A = async () => {
                if (i && await i.value.validate()) {
                    d.value = !0;
                    try {
                        const r = t.value;
                        V.value === "create" ? (await te(r), f.success(c("common.createSuccess"))) : (await se(r), 
                        f.success(c("common.updateSuccess"))), o.value = !1, q("success");
                    } finally {
                        d.value = !1;
                    }
                }
            }, C = () => {
                var r;
                t.value = {
                    id: void 0,
                    type: "",
                    name: "",
                    status: h.ENABLE,
                    remark: ""
                }, (r = i.value) == null || r.resetFields();
            };
            return (r, a) => {
                const _ = R, n = G, E = H, x = I, T = K, g = W, B = X, D = Y;
                return p(), v(B, {
                    modelValue: e(o),
                    "onUpdate:modelValue": a[5] || (a[5] = l => Q(o) ? o.value = l : null),
                    title: e(b),
                    width: "420"
                }, {
                    footer: s(() => [ u(g, {
                        onClick: a[4] || (a[4] = l => o.value = !1)
                    }, {
                        default: s(() => [ y("取 消") ]),
                        _: 1
                    }), u(g, {
                        disabled: e(d),
                        type: "primary",
                        onClick: A
                    }, {
                        default: s(() => [ y("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ M((p(), v(T, {
                        ref_key: "formRef",
                        ref: i,
                        size: "large",
                        "label-position": "top",
                        model: e(t),
                        rules: e(S),
                        "label-width": "80px"
                    }, {
                        default: s(() => [ u(n, {
                            label: "字典名称",
                            prop: "name"
                        }, {
                            default: s(() => [ u(_, {
                                modelValue: e(t).name,
                                "onUpdate:modelValue": a[0] || (a[0] = l => e(t).name = l),
                                placeholder: "请输入字典名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(n, {
                            label: "字典类型",
                            prop: "type"
                        }, {
                            default: s(() => [ u(_, {
                                modelValue: e(t).type,
                                "onUpdate:modelValue": a[1] || (a[1] = l => e(t).type = l),
                                disabled: e(t).id !== void 0,
                                placeholder: "请输入参数名称"
                            }, null, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), u(n, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: s(() => [ u(x, {
                                modelValue: e(t).status,
                                "onUpdate:modelValue": a[2] || (a[2] = l => e(t).status = l)
                            }, {
                                default: s(() => [ (p(!0), P(j, null, z(e($)(e(ee).COMMON_STATUS), l => (p(), 
                                v(E, {
                                    key: l.value,
                                    value: l.value
                                }, {
                                    default: s(() => [ y(J(l.label), 1) ]),
                                    _: 2
                                }, 1032, [ "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(n, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: s(() => [ u(_, {
                                modelValue: e(t).remark,
                                "onUpdate:modelValue": a[3] || (a[3] = l => e(t).remark = l),
                                placeholder: "请输入内容",
                                type: "textarea"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ D, e(d) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    });
});

export {
    k as _,
    re as __tla
};