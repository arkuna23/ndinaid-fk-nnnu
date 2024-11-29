import {
    aa as K,
    p as Q,
    r as m,
    U as Z,
    e as $,
    o as n,
    C as f,
    l as o,
    k as r,
    v as C,
    a as e,
    A as G,
    c as D,
    F as x,
    y as U,
    D as W,
    m as X,
    n as ee,
    P as ae,
    O as le,
    av as te,
    ab as re,
    ac as oe,
    cK as se,
    aw as de,
    Q as ue,
    J as ie,
    aU as me,
    a9 as ne,
    __tla as ce
} from "./index-6c08ea4c.js";

import {
    _ as pe,
    __tla as _e
} from "./index-13c88727.js";

import {
    b as M,
    D as h,
    c as fe,
    __tla as ve
} from "./dict-c5825220.js";

import {
    C as O,
    c as ye
} from "./constants-528bd83f.js";

import {
    g as ge,
    c as Se,
    u as be,
    __tla as he
} from "./index-736610b8.js";

import {
    _ as Ve
} from "./_plugin-vue_export-helper-1b428a4d.js";

import Ie, {
    __tla as Ee
} from "./ChooseMenu-9b34958b.js";

import ke, {
    __tla as we
} from "./ChooseDept-d64d0fbd.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ce
} from "./index-70ef8e51.js";

import {
    __tla as De
} from "./index-7c75bd27.js";

import {
    __tla as xe
} from "./DeptTag-1be092ce.js";

let T, Ue = Promise.all([ (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})() ]).then(async () => {
    T = Ve(Object.assign({
        name: "SystemRoleForm"
    }, {
        __name: "RoleForm",
        emits: [ "success" ],
        setup(Me, {
            expose: R,
            emit: q
        }) {
            const {
                t: y
            } = K(), V = Q(), c = m(!1), I = m(""), p = m(!1), g = m(""), t = m({
                id: void 0,
                name: "",
                code: "",
                sort: void 0,
                status: O.ENABLE,
                remark: "",
                identityScope: [],
                dataScope: null,
                dataScopeDeptIds: [],
                menuIds: []
            }), A = Z({
                name: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入角色名称"
                }, {
                    min: 1,
                    max: 10,
                    message: "长度必须介于 1 和 10 之间",
                    trigger: "blur"
                } ],
                sort: [ {
                    required: !0,
                    message: "请输入显示顺序",
                    trigger: "blur"
                } ],
                identityScope: [ {
                    required: !0,
                    message: "请选择角色身份",
                    trigger: "change"
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
                code: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入角色代码"
                }, {
                    min: 1,
                    max: 10,
                    message: "长度必须介于 1 和 10 之间",
                    trigger: "blur"
                }, {
                    validator: (d, a, i) => {
                        a.length > 10 ? i(new Error("长度在 1 到 10 个字符")) : /^[a-zA-Z0-9]*$/.test(a) ? i() : i(new Error("只允许输入大小写英文字母和数字"));
                    },
                    trigger: "blur"
                } ],
                menuIds: [ {
                    required: !0,
                    trigger: "change",
                    message: "请选择菜单"
                } ],
                dataScope: [ {
                    required: !0,
                    message: "请选择数据范围",
                    trigger: "change"
                } ]
            }), v = m(), S = m(), b = m(), P = $(() => {
                var d;
                return ((d = t.value.identityScope) == null ? void 0 : d.indexOf("3")) >= 0 ? M(h.SYSTEM_ROLE_DATA_SCOPE) : M(h.SYSTEM_ROLE_DATA_SCOPE).filter(a => a.value === 5);
            }), N = () => {
                t.value.dataScope = null;
            }, F = () => {
                var d;
                t.value = {
                    id: void 0,
                    name: "",
                    code: "",
                    sort: void 0,
                    status: O.ENABLE,
                    remark: "",
                    identityScope: [],
                    dataScope: null,
                    dataScopeDeptIds: [],
                    menuIds: []
                }, (d = v.value) == null || d.resetFields();
            };
            R({
                open: async (d, a) => {
                    var i, _;
                    if (c.value = !0, I.value = y("action." + d) + "角色", g.value = d, 
                    F(), a) {
                        p.value = !0;
                        try {
                            let s = await ge(a);
                            s = {
                                ...s,
                                dataScopeDeptIds: s.dataScopeDeptIds || [],
                                identityScope: s.identityScope || []
                            }, t.value.identityScope = s.identityScope, setTimeout(() => {
                                t.value = s;
                            });
                        } finally {
                            p.value = !1, (i = S.value) == null || i.initCom(), 
                            (_ = b.value) == null || _.initCom();
                        }
                    } else ee(() => {
                        var s, u;
                        (s = S.value) == null || s.initCom(), (u = b.value) == null || u.initCom();
                    });
                }
            });
            const L = q, Y = async () => {
                if (v && await v.value.validate()) {
                    p.value = !0;
                    try {
                        const d = t.value;
                        g.value === "create" ? (await Se(d), V.success(y("common.createSuccess"))) : (await be(d), 
                        V.success(y("common.updateSuccess"))), c.value = !1, L("success");
                    } finally {
                        p.value = !1;
                    }
                }
            };
            return (d, a) => {
                const i = pe, _ = ae, s = le, u = te, E = re, k = oe, z = se, B = de, j = ue, w = ie, H = me, J = ne;
                return n(), f(H, {
                    modelValue: e(c),
                    "onUpdate:modelValue": a[9] || (a[9] = l => X(c) ? c.value = l : null),
                    title: e(I),
                    width: "820",
                    scroll: "",
                    maxHeight: 500
                }, {
                    footer: o(() => [ r(w, {
                        onClick: a[8] || (a[8] = l => c.value = !1)
                    }, {
                        default: o(() => [ C("取 消") ]),
                        _: 1
                    }), r(w, {
                        disabled: e(p),
                        type: "primary",
                        onClick: Y
                    }, {
                        default: o(() => [ C("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: o(() => [ r(i, {
                        class: "mb-10px",
                        title: "角色权限修改将影响该角色下所有用户，请谨慎操作！"
                    }), G((n(), f(j, {
                        ref_key: "formRef",
                        ref: v,
                        size: "large",
                        model: e(t),
                        "label-position": "top",
                        rules: e(A),
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: o(() => [ r(B, {
                            gutter: 10
                        }, {
                            default: o(() => [ r(u, {
                                span: 12
                            }, {
                                default: o(() => [ r(s, {
                                    label: "角色名称",
                                    prop: "name"
                                }, {
                                    default: o(() => [ r(_, {
                                        modelValue: e(t).name,
                                        "onUpdate:modelValue": a[0] || (a[0] = l => e(t).name = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入角色名称"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 12
                            }, {
                                default: o(() => [ r(s, {
                                    label: "角色代码",
                                    prop: "code"
                                }, {
                                    default: o(() => [ r(_, {
                                        modelValue: e(t).code,
                                        "onUpdate:modelValue": a[1] || (a[1] = l => e(t).code = l),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        disabled: e(g) === "update",
                                        placeholder: "请输入角色代码"
                                    }, null, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 12
                            }, {
                                default: o(() => [ r(s, {
                                    label: "角色身份",
                                    prop: "identityScope"
                                }, {
                                    default: o(() => [ r(k, {
                                        modelValue: e(t).identityScope,
                                        "onUpdate:modelValue": a[2] || (a[2] = l => e(t).identityScope = l),
                                        onChange: N,
                                        placeholder: "请选择角色身份",
                                        clearable: "",
                                        multiple: ""
                                    }, {
                                        default: o(() => [ (n(!0), D(x, null, U(e(fe)(e(h).SYSTEM_PERMISSION_INDETITY).filter(l => l.value !== "1"), l => (n(), 
                                        f(E, {
                                            key: l.value,
                                            label: l.label,
                                            value: l.value
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 12
                            }, {
                                default: o(() => [ r(s, {
                                    label: "显示顺序",
                                    prop: "sort"
                                }, {
                                    default: o(() => [ r(z, {
                                        style: {
                                            width: "100%"
                                        },
                                        modelValue: e(t).sort,
                                        "onUpdate:modelValue": a[3] || (a[3] = l => e(t).sort = l),
                                        modelModifiers: {
                                            number: !0
                                        },
                                        min: 0,
                                        step: 1,
                                        "step-strictly": "",
                                        max: 100,
                                        "controls-position": "right",
                                        placeholder: "请输入显示顺序"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 24
                            }, {
                                default: o(() => [ r(s, {
                                    label: "备注",
                                    prop: "remark"
                                }, {
                                    default: o(() => [ r(_, {
                                        modelValue: e(t).remark,
                                        "onUpdate:modelValue": a[4] || (a[4] = l => e(t).remark = l),
                                        placeholder: "请输备注",
                                        type: "textarea"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }), r(s, {
                                    label: "功能权限",
                                    prop: "menuIds"
                                }, {
                                    default: o(() => [ r(Ie, {
                                        modelValue: e(t).menuIds,
                                        "onUpdate:modelValue": a[5] || (a[5] = l => e(t).menuIds = l),
                                        ref_key: "chooseMenuRef",
                                        ref: S,
                                        showIdentitys: e(t).identityScope
                                    }, null, 8, [ "modelValue", "showIdentitys" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 12
                            }, {
                                default: o(() => [ r(s, {
                                    label: "权限范围",
                                    prop: "dataScope"
                                }, {
                                    default: o(() => [ r(k, {
                                        modelValue: e(t).dataScope,
                                        "onUpdate:modelValue": a[6] || (a[6] = l => e(t).dataScope = l)
                                    }, {
                                        default: o(() => [ (n(!0), D(x, null, U(e(P), l => (n(), 
                                        f(E, {
                                            key: l.value,
                                            label: l.label,
                                            value: l.value
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(t).dataScope === e(ye).DEPT_CUSTOM ? (n(), f(s, {
                            key: 0
                        }, {
                            default: o(() => [ r(ke, {
                                modelValue: e(t).dataScopeDeptIds,
                                "onUpdate:modelValue": a[7] || (a[7] = l => e(t).dataScopeDeptIds = l),
                                ref_key: "chooseDeptRef",
                                ref: b
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : W("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ J, e(p) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-6975af93" ] ]);
});

export {
    Ue as __tla,
    T as default
};