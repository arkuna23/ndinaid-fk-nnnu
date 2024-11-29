import {
    d as j,
    p as D,
    r as n,
    U as I,
    o as c,
    C as _,
    l as r,
    k as u,
    v as f,
    a,
    A as J,
    c as g,
    F as k,
    y as h,
    B as z,
    m as Q,
    P as R,
    O as G,
    ab as H,
    ac as K,
    bp as W,
    bq as X,
    Q as Z,
    J as $,
    aU as ee,
    a9 as ae,
    __tla as le
} from "./index-6c08ea4c.js";

import {
    b as U,
    D as E,
    __tla as te
} from "./dict-c5825220.js";

import {
    g as ue,
    c as re,
    u as se,
    __tla as oe
} from "./index-cd74b47f.js";

import {
    C as T
} from "./constants-528bd83f.js";

let q, de = Promise.all([ (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})() ]).then(async () => {
    q = j({
        __name: "NotifyTemplateForm",
        emits: [ "success" ],
        setup(me, {
            expose: A,
            emit: N
        }) {
            const v = D(), d = n(!1), b = n(""), m = n(!1), y = n(""), t = n({
                id: void 0,
                name: "",
                nickname: "",
                code: "",
                content: "",
                type: void 0,
                params: "",
                status: T.ENABLE,
                remark: ""
            }), w = I({
                type: [ {
                    required: !0,
                    message: "消息类型不能为空",
                    trigger: "change"
                } ],
                status: [ {
                    required: !0,
                    message: "开启状态不能为空",
                    trigger: "blur"
                } ],
                code: [ {
                    required: !0,
                    message: "模板编码不能为空",
                    trigger: "blur"
                } ],
                name: [ {
                    required: !0,
                    message: "模板名称不能为空",
                    trigger: "blur"
                } ],
                nickname: [ {
                    required: !0,
                    message: "发件人姓名不能为空",
                    trigger: "blur"
                } ],
                content: [ {
                    required: !0,
                    message: "模板内容不能为空",
                    trigger: "blur"
                } ]
            }), p = n();
            A({
                open: async (s, l) => {
                    if (d.value = !0, b.value = s, y.value = s, M(), l) {
                        m.value = !0;
                        try {
                            t.value = await ue(l);
                        } finally {
                            m.value = !1;
                        }
                    }
                }
            });
            const x = N, C = async () => {
                if (p && await p.value.validate()) {
                    m.value = !0;
                    try {
                        const s = t.value;
                        y.value === "create" ? (await re(s), v.success("新增成功")) : (await se(s), 
                        v.success("修改成功")), d.value = !1, x("success");
                    } finally {
                        m.value = !1;
                    }
                }
            }, M = () => {
                var s;
                t.value = {
                    id: void 0,
                    name: "",
                    nickname: "",
                    code: "",
                    content: "",
                    type: void 0,
                    params: "",
                    status: T.ENABLE,
                    remark: ""
                }, (s = p.value) == null || s.resetFields();
            };
            return (s, l) => {
                const i = R, o = G, F = H, L = K, O = W, P = X, S = Z, V = $, B = ee, Y = ae;
                return c(), _(B, {
                    title: a(b),
                    modelValue: a(d),
                    "onUpdate:modelValue": l[8] || (l[8] = e => Q(d) ? d.value = e : null)
                }, {
                    footer: r(() => [ u(V, {
                        onClick: l[7] || (l[7] = e => d.value = !1)
                    }, {
                        default: r(() => [ f("取 消") ]),
                        _: 1
                    }), u(V, {
                        onClick: C,
                        type: "primary",
                        disabled: a(m)
                    }, {
                        default: r(() => [ f("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ J((c(), _(S, {
                        ref_key: "formRef",
                        ref: p,
                        model: a(t),
                        rules: a(w),
                        "label-width": "140px"
                    }, {
                        default: r(() => [ u(o, {
                            label: "模版编码",
                            prop: "code"
                        }, {
                            default: r(() => [ u(i, {
                                modelValue: a(t).code,
                                "onUpdate:modelValue": l[0] || (l[0] = e => a(t).code = e),
                                placeholder: "请输入模版编码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(o, {
                            label: "模板名称",
                            prop: "name"
                        }, {
                            default: r(() => [ u(i, {
                                modelValue: a(t).name,
                                "onUpdate:modelValue": l[1] || (l[1] = e => a(t).name = e),
                                placeholder: "请输入模版名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(o, {
                            label: "发件人名称",
                            prop: "nickname"
                        }, {
                            default: r(() => [ u(i, {
                                modelValue: a(t).nickname,
                                "onUpdate:modelValue": l[2] || (l[2] = e => a(t).nickname = e),
                                placeholder: "请输入发件人名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(o, {
                            label: "模板内容",
                            prop: "content"
                        }, {
                            default: r(() => [ u(i, {
                                type: "textarea",
                                modelValue: a(t).content,
                                "onUpdate:modelValue": l[3] || (l[3] = e => a(t).content = e),
                                placeholder: "请输入模板内容"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(o, {
                            label: "类型",
                            prop: "type"
                        }, {
                            default: r(() => [ u(L, {
                                modelValue: a(t).type,
                                "onUpdate:modelValue": l[4] || (l[4] = e => a(t).type = e),
                                placeholder: "请选择类型"
                            }, {
                                default: r(() => [ (c(!0), g(k, null, h(a(U)(a(E).SYSTEM_NOTIFY_TEMPLATE_TYPE), e => (c(), 
                                _(F, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(o, {
                            label: "开启状态",
                            prop: "status"
                        }, {
                            default: r(() => [ u(P, {
                                modelValue: a(t).status,
                                "onUpdate:modelValue": l[5] || (l[5] = e => a(t).status = e)
                            }, {
                                default: r(() => [ (c(!0), g(k, null, h(a(U)(a(E).COMMON_STATUS), e => (c(), 
                                _(O, {
                                    key: e.value,
                                    label: e.value
                                }, {
                                    default: r(() => [ f(z(e.label), 1) ]),
                                    _: 2
                                }, 1032, [ "label" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(o, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: r(() => [ u(i, {
                                modelValue: a(t).remark,
                                "onUpdate:modelValue": l[6] || (l[6] = e => a(t).remark = e),
                                placeholder: "请输入备注"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ Y, a(m) ] ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]);
            };
        }
    });
});

export {
    q as _,
    de as __tla
};