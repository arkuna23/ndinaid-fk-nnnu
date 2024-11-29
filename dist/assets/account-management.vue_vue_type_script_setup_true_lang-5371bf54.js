import {
    d as F,
    r as d,
    p as G,
    o as g,
    C as y,
    l as a,
    v as c,
    c as j,
    F as O,
    k as t,
    A as b,
    G as h,
    t as V,
    n as P,
    P as z,
    O as D,
    _ as J,
    Q,
    J as R,
    aU as B,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    a as I,
    b as K
} from "./validate-b72f006c.js";

import {
    o as L,
    __tla as M
} from "./code-a0d24f62.js";

let k, S = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    let _, f;
    _ = V("span", null, "邮箱", -1), f = V("span", {
        style: {
            "font-size": "12px",
            color: "#999999",
            "margin-left": "8px"
        }
    }, "请使用常用的邮箱地址，以便找回密码/接收重要的系统通知", -1), k = F({
        __name: "account-management",
        setup(T, {
            expose: x
        }) {
            const p = d(), u = d(!0), C = G(), r = d(!1), s = d({
                gitName: "",
                password: "",
                gitEmail: ""
            }), E = {
                gitName: [ {
                    required: !0,
                    message: "请输入用户名",
                    trigger: "blur"
                }, {
                    min: 3,
                    max: 16,
                    message: "长度在 3 到 16 个字符",
                    trigger: "blur"
                } ],
                gitEmail: [ {
                    required: !0,
                    message: "请输入邮箱",
                    trigger: "blur"
                }, {
                    validator: I
                } ],
                password: [ {
                    required: !0,
                    message: "请输入密码",
                    trigger: "blur"
                }, {
                    min: 8,
                    max: 32,
                    message: "长度在 8 到 32 个字符",
                    trigger: "blur"
                }, {
                    validator: K
                } ]
            }, N = () => {
                s.value = {
                    gitName: "",
                    password: "",
                    gitEmail: ""
                }, P(() => {
                    p.value.clearValidate();
                });
            }, U = () => {
                p.value.validate(o => {
                    o && L(s.value).then(e => {
                        r.value = !1, C.success(e.msg || "创建成功");
                    });
                });
            }, i = d({});
            return x({
                openDialog: o => {
                    r.value = !0, i.value = o, o.type == "preview" && Object.assign(s.value, o.data);
                }
            }), (o, e) => {
                const m = z, n = D, w = J, q = Q, v = R, A = B;
                return g(), y(A, {
                    title: "Git成员管理",
                    "destroy-on-close": "",
                    modelValue: r.value,
                    "onUpdate:modelValue": e[7] || (e[7] = l => r.value = l),
                    width: "540px",
                    onClose: N
                }, {
                    footer: a(() => [ i.value.type == "preview" ? (g(), y(v, {
                        key: 0,
                        onClick: e[5] || (e[5] = l => r.value = !1)
                    }, {
                        default: a(() => [ c("关闭") ]),
                        _: 1
                    })) : (g(), j(O, {
                        key: 1
                    }, [ t(v, {
                        onClick: e[6] || (e[6] = l => r.value = !1)
                    }, {
                        default: a(() => [ c("取消") ]),
                        _: 1
                    }), t(v, {
                        type: "primary",
                        onClick: U
                    }, {
                        default: a(() => [ c("确定") ]),
                        _: 1
                    }) ], 64)) ]),
                    default: a(() => [ t(q, {
                        ref_key: "AccountFormRef",
                        ref: p,
                        rules: E,
                        model: s.value,
                        "label-width": "115px",
                        class: "neu",
                        disabled: i.value.type == "preview"
                    }, {
                        default: a(() => [ t(n, {
                            label: "用户名",
                            prop: "gitName"
                        }, {
                            default: a(() => [ t(m, {
                                modelValue: s.value.gitName,
                                "onUpdate:modelValue": e[0] || (e[0] = l => s.value.gitName = l),
                                placeholder: "请输入用户名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(n, {
                            label: "邮箱",
                            prop: "gitEmail",
                            "label-width": "100%"
                        }, {
                            label: a(() => [ _, f ]),
                            default: a(() => [ t(m, {
                                modelValue: s.value.gitEmail,
                                "onUpdate:modelValue": e[1] || (e[1] = l => s.value.gitEmail = l),
                                placeholder: "请输入邮箱"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(n, {
                            label: "密码",
                            prop: "password"
                        }, {
                            default: a(() => [ t(m, {
                                modelValue: s.value.password,
                                "onUpdate:modelValue": e[4] || (e[4] = l => s.value.password = l),
                                placeholder: "请输入密码",
                                "show-password": u.value
                            }, {
                                suffix: a(() => [ b(t(w, {
                                    icon: "ep:view",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: e[2] || (e[2] = l => u.value = !1)
                                }, null, 512), [ [ h, u.value && i.value.type == "preview" ] ]), b(t(w, {
                                    icon: "ep:hide",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: e[3] || (e[3] = l => u.value = !0)
                                }, null, 512), [ [ h, !u.value && i.value.type == "preview" ] ]) ]),
                                _: 1
                            }, 8, [ "modelValue", "show-password" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "disabled" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    k as _,
    S as __tla
};