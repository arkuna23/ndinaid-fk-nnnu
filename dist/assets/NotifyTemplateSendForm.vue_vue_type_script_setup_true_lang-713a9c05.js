import {
    d as N,
    p as R,
    r as _,
    U as A,
    o as d,
    C as c,
    l as r,
    k as s,
    v as y,
    a as l,
    A as f,
    c as v,
    F as b,
    y as V,
    B as G,
    G as I,
    m as J,
    P as j,
    O as z,
    bp as O,
    bq as Q,
    ab as Y,
    ac as H,
    Q as K,
    J as L,
    aU as W,
    a9 as X,
    __tla as Z
} from "./index-6c08ea4c.js";

import {
    a as $,
    __tla as ee
} from "./index-d1db0401.js";

import {
    g as ae,
    s as le,
    __tla as te
} from "./index-cd74b47f.js";

import {
    b as re,
    D as se,
    __tla as ue
} from "./dict-c5825220.js";

let T, oe = Promise.all([ (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})() ]).then(async () => {
    T = N({
        name: "SystemNotifyTemplateSendForm",
        __name: "NotifyTemplateSendForm",
        setup(de, {
            expose: U
        }) {
            const k = R(), p = _(!1), n = _(!1), t = _({
                content: "",
                params: {},
                userId: void 0,
                userType: 1,
                templateCode: "",
                templateParams: new Map()
            }), h = A({
                userId: [ {
                    required: !0,
                    message: "用户编号不能为空",
                    trigger: "change"
                } ],
                templateCode: [ {
                    required: !0,
                    message: "模版编号不能为空",
                    trigger: "blur"
                } ],
                templateParams: {}
            }), i = _(), g = _([]);
            U({
                open: async m => {
                    p.value = !0, C(), n.value = !0;
                    try {
                        const a = await ae(m);
                        t.value.content = a.content, t.value.params = a.params, 
                        t.value.templateCode = a.code, t.value.templateParams = a.params.reduce((o, u) => (o[u] = "", 
                        o), {}), h.templateParams = a.params.reduce((o, u) => (o[u] = {
                            required: !0,
                            message: "参数 " + u + " 不能为空",
                            trigger: "blur"
                        }, o), {});
                    } finally {
                        n.value = !1;
                    }
                    g.value = await $();
                }
            });
            const w = async () => {
                if (i && await i.value.validate()) {
                    n.value = !0;
                    try {
                        const m = t.value, a = await le(m);
                        a && k.success("提交发送成功！发送结果，见发送日志编号：" + a), p.value = !1;
                    } finally {
                        n.value = !1;
                    }
                }
            }, C = () => {
                var m;
                t.value = {
                    content: "",
                    params: {},
                    mobile: "",
                    templateCode: "",
                    templateParams: new Map(),
                    userType: 1
                }, (m = i.value) == null || m.resetFields();
            };
            return (m, a) => {
                const o = j, u = z, x = O, F = Q, S = Y, q = H, B = K, P = L, D = W, E = X;
                return d(), c(D, {
                    modelValue: l(p),
                    "onUpdate:modelValue": a[5] || (a[5] = e => J(p) ? p.value = e : null),
                    title: "测试发送",
                    "max-height": 500
                }, {
                    footer: r(() => [ s(P, {
                        onClick: a[4] || (a[4] = e => p.value = !1)
                    }, {
                        default: r(() => [ y("取 消") ]),
                        _: 1
                    }), s(P, {
                        disabled: l(n),
                        type: "primary",
                        onClick: w
                    }, {
                        default: r(() => [ y("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ f((d(), c(B, {
                        ref_key: "formRef",
                        ref: i,
                        model: l(t),
                        rules: l(h),
                        "label-width": "140px"
                    }, {
                        default: r(() => [ s(u, {
                            label: "模板内容",
                            prop: "content"
                        }, {
                            default: r(() => [ s(o, {
                                modelValue: l(t).content,
                                "onUpdate:modelValue": a[0] || (a[0] = e => l(t).content = e),
                                placeholder: "请输入模板内容",
                                readonly: "",
                                type: "textarea"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(u, {
                            label: "用户类型",
                            prop: "userType"
                        }, {
                            default: r(() => [ s(F, {
                                modelValue: l(t).userType,
                                "onUpdate:modelValue": a[1] || (a[1] = e => l(t).userType = e)
                            }, {
                                default: r(() => [ (d(!0), v(b, null, V(l(re)(l(se).USER_TYPE), e => (d(), 
                                c(x, {
                                    key: e.value,
                                    label: e.value
                                }, {
                                    default: r(() => [ y(G(e.label), 1) ]),
                                    _: 2
                                }, 1032, [ "label" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), f(s(u, {
                            label: "接收人ID",
                            prop: "userId"
                        }, {
                            default: r(() => [ s(o, {
                                modelValue: l(t).userId,
                                "onUpdate:modelValue": a[2] || (a[2] = e => l(t).userId = e),
                                style: {
                                    width: "160px"
                                }
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }, 512), [ [ I, l(t).userType === 1 ] ]), f(s(u, {
                            label: "接收人",
                            prop: "userId"
                        }, {
                            default: r(() => [ s(q, {
                                modelValue: l(t).userId,
                                "onUpdate:modelValue": a[3] || (a[3] = e => l(t).userId = e),
                                placeholder: "请选择接收人"
                            }, {
                                default: r(() => [ (d(!0), v(b, null, V(l(g), e => (d(), 
                                c(S, {
                                    key: e.id,
                                    label: e.nickname,
                                    value: e.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }, 512), [ [ I, l(t).userType === 2 ] ]), (d(!0), v(b, null, V(l(t).params, e => (d(), 
                        c(u, {
                            key: e,
                            label: "参数 {" + e + "}",
                            prop: "templateParams." + e
                        }, {
                            default: r(() => [ s(o, {
                                modelValue: l(t).templateParams[e],
                                "onUpdate:modelValue": M => l(t).templateParams[e] = M,
                                placeholder: "请输入 " + e + " 参数"
                            }, null, 8, [ "modelValue", "onUpdate:modelValue", "placeholder" ]) ]),
                            _: 2
                        }, 1032, [ "label", "prop" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ E, l(n) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    T as _,
    oe as __tla
};