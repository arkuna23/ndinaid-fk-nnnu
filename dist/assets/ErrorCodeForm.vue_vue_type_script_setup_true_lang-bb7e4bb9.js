import {
    a7 as i,
    d as O,
    aa as Q,
    p as R,
    r as p,
    U as z,
    o as b,
    C as U,
    l as t,
    k as s,
    v as h,
    a,
    A as B,
    m as D,
    P as G,
    O as H,
    Q as I,
    J as K,
    aU as L,
    a9 as M,
    __tla as T
} from "./index-6c08ea4c.js";

let w, x, N, C, W = Promise.all([ (() => {
    try {
        return T;
    } catch {}
})() ]).then(async () => {
    C = d => i.get({
        url: "/system/error-code/page",
        params: d
    }), x = d => i.delete({
        url: "/system/error-code/delete?id=" + d
    }), N = d => i.download({
        url: "/system/error-code/export-excel",
        params: d
    }), w = O({
        name: "SystemErrorCodeForm",
        __name: "ErrorCodeForm",
        emits: [ "success" ],
        setup(d, {
            expose: k,
            emit: q
        }) {
            const {
                t: g
            } = Q(), _ = R(), u = p(!1), f = p(""), m = p(!1), y = p(""), l = p({
                id: void 0,
                code: void 0,
                applicationName: "",
                message: "",
                memo: ""
            }), F = z({
                applicationName: [ {
                    required: !0,
                    message: "应用名不能为空",
                    trigger: "blur"
                } ],
                code: [ {
                    required: !0,
                    message: "错误码编码不能为空",
                    trigger: "blur"
                } ],
                message: [ {
                    required: !0,
                    message: "错误码提示不能为空",
                    trigger: "blur"
                } ]
            }), n = p();
            k({
                open: async (r, e) => {
                    if (u.value = !0, f.value = g("action." + r), y.value = r, A(), 
                    e) {
                        m.value = !0;
                        try {
                            l.value = await (c => i.get({
                                url: "/system/error-code/get?id=" + c
                            }))(e);
                        } finally {
                            m.value = !1;
                        }
                    }
                }
            });
            const S = q, E = async () => {
                if (n && await n.value.validate()) {
                    m.value = !0;
                    try {
                        const r = l.value;
                        y.value === "create" ? (await (e => i.post({
                            url: "/system/error-code/create",
                            data: e
                        }))(r), _.success(g("common.createSuccess"))) : (await (e => i.put({
                            url: "/system/error-code/update",
                            data: e
                        }))(r), _.success(g("common.updateSuccess"))), u.value = !1, 
                        S("success");
                    } finally {
                        m.value = !1;
                    }
                }
            }, A = () => {
                var r;
                l.value = {
                    id: void 0,
                    applicationName: "",
                    code: void 0,
                    message: "",
                    memo: ""
                }, (r = n.value) == null || r.resetFields();
            };
            return (r, e) => {
                const c = G, v = H, P = I, V = K, j = L, J = M;
                return b(), U(j, {
                    modelValue: a(u),
                    "onUpdate:modelValue": e[5] || (e[5] = o => D(u) ? u.value = o : null),
                    title: a(f)
                }, {
                    footer: t(() => [ s(V, {
                        onClick: e[4] || (e[4] = o => u.value = !1)
                    }, {
                        default: t(() => [ h("取 消") ]),
                        _: 1
                    }), s(V, {
                        disabled: a(m),
                        type: "primary",
                        onClick: E
                    }, {
                        default: t(() => [ h("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: t(() => [ B((b(), U(P, {
                        ref_key: "formRef",
                        ref: n,
                        model: a(l),
                        rules: a(F),
                        "label-width": "100px"
                    }, {
                        default: t(() => [ s(v, {
                            label: "应用名",
                            prop: "applicationName"
                        }, {
                            default: t(() => [ s(c, {
                                modelValue: a(l).applicationName,
                                "onUpdate:modelValue": e[0] || (e[0] = o => a(l).applicationName = o),
                                clearable: "",
                                placeholder: "请输入应用名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(v, {
                            label: "错误码编码",
                            prop: "code"
                        }, {
                            default: t(() => [ s(c, {
                                modelValue: a(l).code,
                                "onUpdate:modelValue": e[1] || (e[1] = o => a(l).code = o),
                                clearable: "",
                                placeholder: "请输入错误码编码"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(v, {
                            label: "错误码提示",
                            prop: "message"
                        }, {
                            default: t(() => [ s(c, {
                                modelValue: a(l).message,
                                "onUpdate:modelValue": e[2] || (e[2] = o => a(l).message = o),
                                clearable: "",
                                placeholder: "请输入错误码提示"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(v, {
                            label: "备注",
                            prop: "memo"
                        }, {
                            default: t(() => [ s(c, {
                                modelValue: a(l).memo,
                                "onUpdate:modelValue": e[3] || (e[3] = o => a(l).memo = o),
                                clearable: "",
                                placeholder: "请输入备注"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ J, a(m) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    });
});

export {
    w as _,
    W as __tla,
    x as d,
    N as e,
    C as g
};