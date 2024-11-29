import {
    aa as le,
    p as ae,
    e as re,
    r as m,
    U as te,
    o as n,
    C as f,
    l as t,
    k as l,
    v as b,
    a as r,
    A as de,
    c as y,
    F as k,
    y as w,
    t as x,
    B as F,
    D as se,
    m as oe,
    ab as ue,
    ac as ie,
    O as me,
    av as ne,
    _ as pe,
    K as ce,
    P as _e,
    N as fe,
    aw as be,
    Q as ge,
    J as ve,
    aU as he,
    a9 as Ve,
    __tla as ye
} from "./index-6c08ea4c.js";

import {
    b as L,
    D as R,
    __tla as ke
} from "./dict-c5825220.js";

import {
    d as we,
    h as xe
} from "./tree-05ea8e09.js";

import {
    l as Se
} from "./validate-b72f006c.js";

import Ue, {
    __tla as Ie
} from "./DeptTag-1be092ce.js";

import {
    b as Ce,
    __tla as Ye
} from "./index-736610b8.js";

import {
    c as qe,
    a as Me,
    __tla as je
} from "./index-7c75bd27.js";

import {
    b as Ee,
    c as Oe,
    d as $e,
    __tla as ze
} from "./index-d1db0401.js";

import {
    _ as Fe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Le,
    __tla as Re
} from "./index-ef4d146e.js";

let B, Be = Promise.all([ (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})() ]).then(async () => {
    let S, U, I;
    S = {
        class: "relative"
    }, U = {
        class: "tree-item"
    }, I = {
        class: "relative"
    }, B = Fe(Object.assign({
        name: "SystemUserForm"
    }, {
        __name: "UserForm",
        emits: [ "success" ],
        setup(De, {
            expose: D,
            emit: J
        }) {
            const {
                t: h
            } = le(), C = ae(), T = re(() => ({
                ...we,
                disabled: s => s.status !== 0
            })), Y = m(), c = m(!1), q = m(""), _ = m(!1), g = m(""), d = m({
                id: "",
                number: "",
                nickname: "",
                sex: null,
                mobile: "",
                email: "",
                idCard: "",
                remark: "",
                deptId: "",
                roleIds: [],
                password: "",
                joinYear: null,
                inSchoolStatus: null
            }), A = te({
                number: [ {
                    required: !0,
                    message: "请输入学号/工号",
                    trigger: "blur"
                }, {
                    validator: (s, a, o) => {
                        a.length > 30 ? o(new Error("长度在 1 到 30 个字符")) : /^[a-zA-Z0-9]*$/.test(a) ? o() : o(new Error("只允许输入大小写英文字母和数字"));
                    },
                    trigger: "blur"
                } ],
                nickname: [ {
                    required: !0,
                    message: "请输入用户姓名",
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
                    trigger: "change"
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
                    required: !1,
                    message: "请输入手机号码",
                    trigger: "blur"
                }, {
                    pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
                    message: "请输入正确的手机号码",
                    trigger: "blur"
                } ],
                idCard: [ {
                    validator: (s, a, o) => {
                        a ? /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(a) ? o() : o(new Error("请输入有效的身份证号码")) : o();
                    },
                    trigger: "blur"
                } ],
                password: [ {
                    required: !1,
                    message: "请输入登录密码",
                    trigger: "blur"
                }, {
                    validator: Se,
                    trigger: "blur"
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
                deptId: [ {
                    required: !0,
                    trigger: "change",
                    message: "请选择末级组织"
                } ],
                roleIds: [ {
                    required: !0,
                    trigger: "change",
                    message: "请选择角色"
                } ],
                joinYear: [ {
                    required: !0,
                    trigger: "change",
                    message: "请选择入学/职年份"
                } ],
                inSchoolStatus: [ {
                    required: !1,
                    trigger: "change",
                    message: "请选择是否在校/岗"
                } ]
            }), v = m(), M = m([]), j = m([]), E = m([]);
            D({
                open: async (s, a) => {
                    if (c.value = !0, q.value = h("action." + s), g.value = s, X(), 
                    E.value = await qe(), j.value = await Ce(), a) {
                        _.value = !0;
                        try {
                            d.value = await Ee(a);
                        } finally {
                            _.value = !1;
                        }
                    }
                    M.value = xe(await Me({
                        status: ""
                    })), setTimeout(() => {
                        var o;
                        (o = Y.value) == null || o.filter("");
                    }, 1);
                }
            });
            const N = (s, a) => (a.name.includes(s) || (a.code || "").includes(s)) && a.status === 0, P = J, Q = async () => {
                if (v && await v.value.validate()) {
                    _.value = !0;
                    try {
                        const s = d.value;
                        g.value === "create" ? (await Oe(s), C.success(h("common.createSuccess"))) : (await $e(s), 
                        C.success(h("common.updateSuccess"))), c.value = !1, P("success");
                    } finally {
                        _.value = !1;
                    }
                }
            }, X = () => {
                var s;
                d.value = {
                    id: "",
                    number: "",
                    nickname: "",
                    sex: null,
                    mobile: "",
                    email: "",
                    idCard: "",
                    remark: "",
                    deptId: "",
                    roleIds: [],
                    password: "",
                    joinYear: null,
                    inSchoolStatus: null
                }, (s = v.value) == null || s.resetFields();
            };
            return (s, a) => {
                const o = ue, V = ie, u = me, i = ne, O = pe, $ = ce, p = _e, K = fe, Z = Le, G = be, H = ge, z = ve, W = he, ee = Ve;
                return n(), f(W, {
                    modelValue: r(c),
                    "onUpdate:modelValue": a[13] || (a[13] = e => oe(c) ? c.value = e : null),
                    title: r(q) + "用户",
                    scroll: "",
                    width: "872"
                }, {
                    footer: t(() => [ l(z, {
                        onClick: a[12] || (a[12] = e => c.value = !1)
                    }, {
                        default: t(() => [ b("取 消") ]),
                        _: 1
                    }), l(z, {
                        disabled: r(_),
                        type: "primary",
                        onClick: Q
                    }, {
                        default: t(() => [ b("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: t(() => [ de((n(), f(H, {
                        ref_key: "formRef",
                        ref: v,
                        size: "large",
                        "label-position": "top",
                        model: r(d),
                        rules: r(A),
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: t(() => [ l(G, {
                            gutter: 20
                        }, {
                            default: t(() => [ l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "用户角色",
                                    prop: "roleIds"
                                }, {
                                    default: t(() => [ l(V, {
                                        modelValue: r(d).roleIds,
                                        "onUpdate:modelValue": a[0] || (a[0] = e => r(d).roleIds = e),
                                        placeholder: "请选择用户角色（可多选）",
                                        clearable: "",
                                        multiple: ""
                                    }, {
                                        default: t(() => [ (n(!0), y(k, null, w(r(j), e => (n(), 
                                        f(o, {
                                            key: e.id,
                                            label: e.name,
                                            value: e.id
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "是否在校/岗",
                                    prop: "inSchoolStatus"
                                }, {
                                    default: t(() => [ l(V, {
                                        modelValue: r(d).inSchoolStatus,
                                        "onUpdate:modelValue": a[1] || (a[1] = e => r(d).inSchoolStatus = e),
                                        placeholder: "请选择是否在校/岗",
                                        clearable: ""
                                    }, {
                                        default: t(() => [ (n(!0), y(k, null, w(r(L)(r(R).COMMON_BOOL), e => (n(), 
                                        f(o, {
                                            key: e.value,
                                            label: e.label,
                                            value: e.value
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "学号/工号",
                                    prop: "number"
                                }, {
                                    label: t(() => [ x("div", S, [ b(" 学号/工号 "), l($, {
                                        class: "box-item",
                                        effect: "dark",
                                        content: "作为登录账号使用",
                                        placement: "top"
                                    }, {
                                        default: t(() => [ l(O, {
                                            icon: "ep:info-filled",
                                            size: 14,
                                            class: "info-icon ml-4px"
                                        }) ]),
                                        _: 1
                                    }) ]) ]),
                                    default: t(() => [ l(p, {
                                        modelValue: r(d).number,
                                        "onUpdate:modelValue": a[2] || (a[2] = e => r(d).number = e),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入学号/工号",
                                        disabled: r(g) === "update"
                                    }, null, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "姓名",
                                    prop: "nickname"
                                }, {
                                    default: t(() => [ l(p, {
                                        modelValue: r(d).nickname,
                                        "onUpdate:modelValue": a[3] || (a[3] = e => r(d).nickname = e),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入姓名"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "用户性别",
                                    prop: "sex"
                                }, {
                                    default: t(() => [ l(V, {
                                        modelValue: r(d).sex,
                                        "onUpdate:modelValue": a[4] || (a[4] = e => r(d).sex = e),
                                        placeholder: "请选择"
                                    }, {
                                        default: t(() => [ (n(!0), y(k, null, w(r(L)(r(R).SYSTEM_USER_SEX), e => (n(), 
                                        f(o, {
                                            key: e.value,
                                            label: e.label,
                                            value: e.value
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "身份证号",
                                    prop: "idCard"
                                }, {
                                    default: t(() => [ l(p, {
                                        modelValue: r(d).idCard,
                                        "onUpdate:modelValue": a[5] || (a[5] = e => r(d).idCard = e),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入身份证号"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "入学/职年份",
                                    prop: "joinYear"
                                }, {
                                    default: t(() => [ l(K, {
                                        class: "!w-100%",
                                        modelValue: r(d).joinYear,
                                        "onUpdate:modelValue": a[6] || (a[6] = e => r(d).joinYear = e),
                                        "value-format": "YYYY",
                                        type: "year",
                                        placeholder: "请选择入学/职年份"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "所属末级组织",
                                    prop: "deptId"
                                }, {
                                    default: t(() => [ l(Z, {
                                        ref_key: "treeSelectRef",
                                        ref: Y,
                                        modelValue: r(d).deptId,
                                        "onUpdate:modelValue": a[7] || (a[7] = e => r(d).deptId = e),
                                        data: r(M),
                                        props: r(T),
                                        "check-strictly": "",
                                        filterable: "",
                                        "filter-node-method": N,
                                        "default-expand-all": "",
                                        placeholder: "请选择所属末级组织",
                                        "value-key": "deptId",
                                        class: "dept-tree-select"
                                    }, {
                                        default: t(({
                                            data: e
                                        }) => [ x("div", U, [ b(F(e.name) + F(e.code ? `\uFF08${e.code}\uFF09` : "") + " ", 1), l(Ue, {
                                            tagCode: e.tagCode,
                                            codeList: r(E),
                                            class: "tag-box"
                                        }, null, 8, [ "tagCode", "codeList" ]) ]) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "data", "props" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "电子邮箱",
                                    prop: "email"
                                }, {
                                    default: t(() => [ l(p, {
                                        modelValue: r(d).email,
                                        "onUpdate:modelValue": a[8] || (a[8] = e => r(d).email = e),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        maxlength: "50",
                                        placeholder: "请输入电子邮箱"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ l(u, {
                                    label: "手机号",
                                    prop: "mobile"
                                }, {
                                    default: t(() => [ l(p, {
                                        modelValue: r(d).mobile,
                                        "onUpdate:modelValue": a[9] || (a[9] = e => r(d).mobile = e),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入手机号"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), l(i, {
                                span: 12
                            }, {
                                default: t(() => [ r(g) === "create" ? (n(), f(u, {
                                    key: 0,
                                    label: "登录密码",
                                    prop: "password"
                                }, {
                                    label: t(() => [ x("div", I, [ b(" 登录密码 "), l($, {
                                        class: "box-item",
                                        effect: "dark",
                                        content: "支持8-16位，数字+大写字母+小写字母+特殊字符组合",
                                        placement: "top"
                                    }, {
                                        default: t(() => [ l(O, {
                                            icon: "ep:info-filled",
                                            size: 14,
                                            class: "info-icon ml-4px"
                                        }) ]),
                                        _: 1
                                    }) ]) ]),
                                    default: t(() => [ l(p, {
                                        modelValue: r(d).password,
                                        "onUpdate:modelValue": a[10] || (a[10] = e => r(d).password = e),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入登录密码",
                                        "show-password": "",
                                        type: "password"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                })) : se("", !0) ]),
                                _: 1
                            }), l(i, {
                                span: 24
                            }, {
                                default: t(() => [ l(u, {
                                    label: "备注",
                                    prop: "remark"
                                }, {
                                    default: t(() => [ l(p, {
                                        modelValue: r(d).remark,
                                        "onUpdate:modelValue": a[11] || (a[11] = e => r(d).remark = e),
                                        placeholder: "请输入内容",
                                        type: "textarea"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ ee, r(_) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-20345c1b" ] ]);
});

export {
    Be as __tla,
    B as default
};