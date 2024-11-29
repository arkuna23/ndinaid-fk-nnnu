import {
    a7 as f,
    aa as W,
    p as ee,
    r as i,
    e as ae,
    o as g,
    C as v,
    l as t,
    k as a,
    v as V,
    a as r,
    A as le,
    c as S,
    F as C,
    y as q,
    B as te,
    t as E,
    m as re,
    P as de,
    O as se,
    av as ue,
    bp as oe,
    bq as me,
    ab as ne,
    ac as ie,
    _ as pe,
    K as ce,
    aw as be,
    Q as fe,
    J as ge,
    aU as _e,
    a9 as ve,
    R as Ve,
    S as ye,
    __tla as he
} from "./index-6c08ea4c.js";

import {
    b as ke,
    D as we,
    __tla as xe
} from "./dict-c5825220.js";

import {
    b as Ie,
    __tla as Ue
} from "./index-c31c99eb.js";

import {
    k as Me
} from "./validate-b72f006c.js";

import {
    _ as Se
} from "./_plugin-vue_export-helper-1b428a4d.js";

let h, T, F, P, R, Ce = Promise.all([ (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})() ]).then(async () => {
    let k, w;
    F = o => f.get({
        url: "/system/tenant-admin/page",
        params: o
    }), R = o => f.put({
        url: "/system/tenant-admin/update/status",
        data: o
    }), P = o => f.put({
        url: "/system/tenant-admin/update/password",
        data: o
    }), k = (o => (Ve("data-v-128b788e"), o = o(), ye(), o))(() => E("span", {
        class: "tip"
    }, "作为登录账号使用", -1)), w = {
        class: "relative"
    }, h = Se(Object.assign({
        name: "SystemTenantManageForm"
    }, {
        __name: "TenantManageForm",
        emits: [ "success" ],
        setup(o, {
            expose: $,
            emit: O
        }) {
            const {
                t: y
            } = W(), x = ee(), p = i(!1), I = i(""), c = i(!1), b = i(""), d = i({
                id: "",
                number: "",
                nickname: "",
                sex: 0,
                mobile: "",
                email: "",
                idCard: "",
                remark: "",
                avatar: "",
                deptId: "",
                roleIds: [],
                password: "",
                userId: "",
                tenantId: ""
            }), z = ae(() => ({
                number: [ {
                    required: !0,
                    message: "请输入工号",
                    trigger: "blur"
                }, {
                    validator: (u, e, s) => {
                        e.length > 30 ? s(new Error("长度在 1 到 30 个字符")) : /^[a-zA-Z0-9]*$/.test(e) ? s() : s(new Error("只允许输入大小写英文字母和数字"));
                    },
                    trigger: "blur"
                } ],
                nickname: [ {
                    required: !0,
                    message: "请输入姓名",
                    trigger: "blur"
                }, {
                    min: 1,
                    max: 50,
                    message: "长度必须介于 1 和 50 之间",
                    trigger: "blur"
                } ],
                sex: [ {
                    required: !0,
                    message: "请选择用户性别",
                    trigger: "blur"
                } ],
                email: [ {
                    type: "email",
                    message: "请输入正确的邮箱地址",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 60,
                    message: "长度必须介于 1 和 60 之间",
                    trigger: "blur"
                } ],
                mobile: [ {
                    required: !0,
                    message: "请输入手机号码",
                    trigger: "blur"
                }, {
                    pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
                    message: "请输入正确的手机号码",
                    trigger: "blur"
                } ],
                idCard: [ {
                    validator: (u, e, s) => {
                        e ? /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e) ? s() : s(new Error("请输入有效的身份证号码")) : s();
                    },
                    trigger: "blur"
                } ],
                password: [ {
                    required: !1,
                    message: "请输入登录密码",
                    trigger: "blur"
                }, {
                    ...b.value === "update" ? {} : {
                        validator: Me,
                        trigger: [ "blur", "change" ]
                    }
                } ],
                remark: [ {
                    required: !1,
                    trigger: "blur",
                    message: "请输入备注"
                }, {
                    min: 0,
                    max: 200,
                    message: "长度必须介于 0 和 200 之间",
                    trigger: "blur"
                } ],
                tenantId: [ {
                    required: !0,
                    message: "请选择负责租户",
                    trigger: [ "blur", "change" ]
                } ]
            })), _ = i(), U = i([]), A = (u, e) => e.name.includes(u) || (e.code || "").includes(u);
            $({
                open: async (u, e) => {
                    if (p.value = !0, I.value = `${y("action." + u)}\u79DF\u6237\u7BA1\u7406\u5458`, 
                    b.value = u, J(), e) {
                        c.value = !0;
                        try {
                            d.value = await (s => f.get({
                                url: "/system/tenant-admin/get?id=" + s
                            }))(e), b.value === "update" && (d.value.password = "********");
                        } finally {
                            c.value = !1;
                        }
                    }
                    U.value = await Ie();
                }
            });
            const X = O, j = async () => {
                if (_ && await _.value.validate()) {
                    c.value = !0;
                    try {
                        const u = d.value;
                        b.value === "create" ? (await (e => f.post({
                            url: "/system/tenant-admin/create",
                            data: e
                        }))(u), x.success(y("common.createSuccess"))) : (await (e => f.put({
                            url: "/system/tenant-admin/update",
                            data: e
                        }))(u), x.success(y("common.updateSuccess"))), p.value = !1, 
                        X("success");
                    } finally {
                        c.value = !1;
                    }
                }
            }, J = () => {
                var u;
                d.value = {
                    id: "",
                    number: "",
                    nickname: "",
                    sex: 0,
                    mobile: "",
                    email: "",
                    idCard: "",
                    remark: "",
                    avatar: "",
                    deptId: "",
                    roleIds: [],
                    password: "",
                    userId: "",
                    tenantId: ""
                }, (u = _.value) == null || u.resetFields();
            };
            return (u, e) => {
                const s = de, m = se, n = ue, K = oe, B = me, D = ne, N = ie, Q = pe, Y = ce, Z = be, G = fe, M = ge, H = _e, L = ve;
                return g(), v(H, {
                    modelValue: r(p),
                    "onUpdate:modelValue": e[10] || (e[10] = l => re(p) ? p.value = l : null),
                    title: r(I),
                    width: "820"
                }, {
                    footer: t(() => [ a(M, {
                        onClick: e[9] || (e[9] = l => p.value = !1)
                    }, {
                        default: t(() => [ V("取 消") ]),
                        _: 1
                    }), a(M, {
                        disabled: r(c),
                        type: "primary",
                        onClick: j
                    }, {
                        default: t(() => [ V("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: t(() => [ le((g(), v(G, {
                        ref_key: "formRef",
                        ref: _,
                        "label-position": "top",
                        model: r(d),
                        rules: r(z),
                        "label-width": "80px",
                        size: "large",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: t(() => [ a(Z, {
                            gutter: 20
                        }, {
                            default: t(() => [ a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "工号",
                                    prop: "number"
                                }, {
                                    default: t(() => [ k, a(s, {
                                        modelValue: r(d).number,
                                        "onUpdate:modelValue": e[0] || (e[0] = l => r(d).number = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入工号",
                                        disabled: r(b) === "update"
                                    }, null, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "姓名",
                                    prop: "nickname"
                                }, {
                                    default: t(() => [ a(s, {
                                        modelValue: r(d).nickname,
                                        "onUpdate:modelValue": e[1] || (e[1] = l => r(d).nickname = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入姓名"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "性别",
                                    prop: "sex"
                                }, {
                                    default: t(() => [ a(B, {
                                        modelValue: r(d).sex,
                                        "onUpdate:modelValue": e[2] || (e[2] = l => r(d).sex = l)
                                    }, {
                                        default: t(() => [ (g(!0), S(C, null, q(r(ke)(r(we).SYSTEM_USER_SEX), l => (g(), 
                                        v(K, {
                                            key: l.value,
                                            value: l.value
                                        }, {
                                            default: t(() => [ V(te(l.label), 1) ]),
                                            _: 2
                                        }, 1032, [ "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "手机号",
                                    prop: "mobile"
                                }, {
                                    default: t(() => [ a(s, {
                                        modelValue: r(d).mobile,
                                        "onUpdate:modelValue": e[3] || (e[3] = l => r(d).mobile = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入手机号"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "电子邮箱",
                                    prop: "email"
                                }, {
                                    default: t(() => [ a(s, {
                                        modelValue: r(d).email,
                                        "onUpdate:modelValue": e[4] || (e[4] = l => r(d).email = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入电子邮箱"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "身份证号",
                                    prop: "idCard"
                                }, {
                                    default: t(() => [ a(s, {
                                        modelValue: r(d).idCard,
                                        "onUpdate:modelValue": e[5] || (e[5] = l => r(d).idCard = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入身份证号"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "负责租户",
                                    prop: "tenantId"
                                }, {
                                    default: t(() => [ a(N, {
                                        modelValue: r(d).tenantId,
                                        "onUpdate:modelValue": e[6] || (e[6] = l => r(d).tenantId = l),
                                        clearable: "",
                                        filterable: "",
                                        "filter-node-method": A,
                                        placeholder: "请请输入租户名称/代码"
                                    }, {
                                        default: t(() => [ (g(!0), S(C, null, q(r(U), l => (g(), 
                                        v(D, {
                                            key: l.id,
                                            label: l.name + "（" + l.code + "）",
                                            value: l.id
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 12
                            }, {
                                default: t(() => [ a(m, {
                                    label: "登录密码",
                                    prop: "password"
                                }, {
                                    label: t(() => [ E("div", w, [ V(" 登录密码 "), a(Y, {
                                        class: "box-item",
                                        effect: "dark",
                                        content: "支持8-16位，数字+大写字母+小写字母+特殊字符组合",
                                        placement: "top"
                                    }, {
                                        default: t(() => [ a(Q, {
                                            icon: "ep:info-filled",
                                            size: 14,
                                            class: "info-icon ml-4px"
                                        }) ]),
                                        _: 1
                                    }) ]) ]),
                                    default: t(() => [ a(s, {
                                        modelValue: r(d).password,
                                        "onUpdate:modelValue": e[7] || (e[7] = l => r(d).password = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入登录密码",
                                        disabled: r(b) === "update"
                                    }, null, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(n, {
                                span: 24
                            }, {
                                default: t(() => [ a(m, {
                                    label: "备注",
                                    prop: "remark"
                                }, {
                                    default: t(() => [ a(s, {
                                        modelValue: r(d).remark,
                                        "onUpdate:modelValue": e[8] || (e[8] = l => r(d).remark = l),
                                        type: "textarea",
                                        placeholder: "请输入备注"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ L, r(c) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-128b788e" ] ]), T = Object.defineProperty({
        __proto__: null,
        default: h
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    h as T,
    Ce as __tla,
    T as a,
    F as g,
    P as r,
    R as u
};