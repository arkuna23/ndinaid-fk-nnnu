import {
    aa as te,
    p as ue,
    r as o,
    U as re,
    w as K,
    o as V,
    C as U,
    l as n,
    k as u,
    v as $,
    a as t,
    A as ne,
    t as g,
    m as b,
    z as oe,
    Z as de,
    c as me,
    F as ce,
    y as ie,
    n as pe,
    P as ve,
    O as fe,
    av as _e,
    aw as ge,
    _ as he,
    ak as ye,
    a8 as xe,
    br as ke,
    Q as Ve,
    J as be,
    aU as we,
    a9 as Ce,
    R as Ee,
    S as Te,
    __tla as Ie
} from "./index-6c08ea4c.js";

import {
    b as Ue,
    D as Ae,
    __tla as Ne
} from "./dict-c5825220.js";

import {
    C as R
} from "./constants-528bd83f.js";

import {
    d as ze,
    h as Se
} from "./tree-05ea8e09.js";

import {
    g as Me,
    c as B,
    u as Pe,
    __tla as qe
} from "./index-5125d270.js";

import {
    g as Fe,
    __tla as Ke
} from "./index-70ef8e51.js";

import {
    _ as $e
} from "./_plugin-vue_export-helper-1b428a4d.js";

let L, Re = Promise.all([ (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})() ]).then(async () => {
    let w, A, N, z, S, M;
    w = h => (Ee("data-v-20d9727f"), h = h(), Te(), h), A = {
        class: "cardHeight env-types-group px-20px py-16px"
    }, N = {
        class: "pb-10px"
    }, z = w(() => g("span", {
        class: "ml-20px mr-10px"
    }, "全选:", -1)), S = w(() => g("span", {
        class: "ml-20px mr-10px"
    }, "展开/折叠:", -1)), M = {
        class: "env-types-group px-20px py-6px"
    }, L = $e(Object.assign({
        name: "SystemTenantPackageForm"
    }, {
        __name: "TenantPackageForm",
        emits: [ "success" ],
        setup(h, {
            expose: H,
            emit: J
        }) {
            const {
                t: y
            } = te(), C = ue(), i = o(!1), P = o(""), v = o(!1), E = o(""), r = o({
                id: null,
                name: null,
                code: null,
                remark: null,
                envTypes: [],
                menuIds: [],
                status: R.ENABLE
            }), O = re({
                name: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请输入套餐名称"
                }, {
                    min: 1,
                    max: 20,
                    message: "长度必须介于 1 和 20 之间",
                    trigger: [ "blur", "change" ]
                } ],
                remark: [ {
                    required: !1,
                    trigger: [ "blur", "change" ],
                    message: "请输入备注"
                }, {
                    min: 0,
                    max: 200,
                    message: "备注长度必须介于 0 和 200 之间",
                    trigger: [ "blur", "change" ]
                } ],
                code: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请输入套餐代码"
                }, {
                    validator: (a, e, l) => {
                        e.length > 20 ? l(new Error("长度在 1 到 20 个字符")) : /^[a-zA-Z0-9]*$/.test(e) ? l() : l(new Error("只允许输入大小写英文字母和数字"));
                    },
                    trigger: [ "blur", "change" ]
                } ],
                menuIds: [ {
                    required: !0,
                    validator: (a, e, l) => {
                        r.value.menuIds.length === 0 ? l(new Error("请选择菜单权限")) : l();
                    },
                    trigger: [ "blur", "change" ]
                } ]
            }), p = o(), T = o([]), f = o(!1), d = o(), _ = o(!1), x = o("");
            K(() => x.value, a => {
                var e;
                (e = d.value) == null || e.filter(a);
            }), K(() => r.value.menuIds, a => {
                var e;
                (e = p.value) == null || e.validate("menuIds");
            });
            const Y = (a, e) => !a || e.name.includes(a);
            H({
                open: async (a, e) => {
                    var l, c;
                    if (P.value = y("action." + a), E.value = a, D(), (l = p.value) == null || l.clearValidate(), 
                    T.value = Se(await Fe()), e) {
                        (c = p.value) == null || c.resetFields(), v.value = !0;
                        try {
                            const m = await Me(e);
                            r.value = {
                                ...m,
                                envTypes: m.envTypes || []
                            }, i.value = !0, a === "copy" && (r.value.name = `\u590D\u5236-${m.name}`, 
                            r.value.remark = `\u590D\u5236-${m.remark}`, r.value.code = `fz${m.code}`), 
                            pe(() => {
                                m.menuIds.forEach(I => {
                                    var k;
                                    (k = d.value) == null || k.setChecked(I, !0, !1);
                                });
                            });
                        } finally {
                            v.value = !1;
                        }
                    } else i.value = !0;
                }
            });
            const Z = J, j = async () => {
                var a, e;
                if (p && await p.value.validate()) {
                    v.value = !0;
                    try {
                        const l = r.value;
                        l.menuIds = [ ...((a = d.value) == null ? void 0 : a.getCheckedKeys(!1)) || [], ...((e = d.value) == null ? void 0 : e.getHalfCheckedKeys()) || [] ], 
                        E.value === "create" ? (await B(l), C.success(y("common.createSuccess"))) : E.value === "copy" ? (l.id = null, 
                        await B(l), C.success(y("common.createSuccess"))) : (await Pe(l), 
                        C.success(y("common.updateSuccess"))), i.value = !1, Z("success");
                    } finally {
                        v.value = !1;
                    }
                }
            }, D = () => {
                var a, e;
                _.value = !1, f.value = !1, r.value = {
                    id: null,
                    name: null,
                    code: null,
                    remark: null,
                    envTypes: [],
                    menuIds: [],
                    status: R.ENABLE
                }, (a = d.value) == null || a.setCheckedNodes([]), (e = p.value) == null || e.resetFields();
            }, G = () => {
                var a;
                (a = d.value) == null || a.setCheckedNodes(_.value ? T.value : []);
            }, Q = () => {
                var e;
                const a = (e = d.value) == null ? void 0 : e.store.nodesMap;
                for (let l in a) a[l].expanded !== f.value && (a[l].expanded = f.value);
            }, W = () => {
                var a;
                r.value.menuIds = (a = d.value) == null ? void 0 : a.getCheckedKeys();
            };
            return (a, e) => {
                const l = ve, c = fe, m = _e, I = ge, k = he, q = ye, X = xe, ee = ke, ae = Ve, F = be, le = we, se = Ce;
                return V(), U(le, {
                    modelValue: t(i),
                    "onUpdate:modelValue": e[8] || (e[8] = s => b(i) ? i.value = s : null),
                    title: t(P),
                    scroll: "",
                    width: "820"
                }, {
                    footer: n(() => [ u(F, {
                        onClick: e[7] || (e[7] = s => i.value = !1)
                    }, {
                        default: n(() => [ $("取 消") ]),
                        _: 1
                    }), u(F, {
                        disabled: t(v),
                        type: "primary",
                        onClick: j
                    }, {
                        default: n(() => [ $("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: n(() => [ ne((V(), U(ae, {
                        ref_key: "formRef",
                        ref: p,
                        size: "large",
                        "label-position": "top",
                        model: t(r),
                        rules: t(O),
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: n(() => [ u(I, {
                            gutter: 20
                        }, {
                            default: n(() => [ u(m, {
                                span: 12
                            }, {
                                default: n(() => [ u(c, {
                                    label: "套餐名称",
                                    prop: "name"
                                }, {
                                    default: n(() => [ u(l, {
                                        modelValue: t(r).name,
                                        "onUpdate:modelValue": e[0] || (e[0] = s => t(r).name = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入套餐名称"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), u(m, {
                                span: 12
                            }, {
                                default: n(() => [ u(c, {
                                    label: "套餐代码",
                                    prop: "code"
                                }, {
                                    default: n(() => [ u(l, {
                                        modelValue: t(r).code,
                                        "onUpdate:modelValue": e[1] || (e[1] = s => t(r).code = s),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入套餐代码"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), u(c, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: n(() => [ u(l, {
                                modelValue: t(r).remark,
                                "onUpdate:modelValue": e[2] || (e[2] = s => t(r).remark = s),
                                modelModifiers: {
                                    trim: !0
                                },
                                type: "textarea",
                                placeholder: "请输入备注"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(c, {
                            label: "菜单权限",
                            prop: "menuIds",
                            class: "menuIds"
                        }), g("div", A, [ g("div", N, [ u(l, {
                            size: "large",
                            modelValue: t(x),
                            "onUpdate:modelValue": e[3] || (e[3] = s => b(x) ? x.value = s : null),
                            placeholder: "请输入菜单名称",
                            class: oe([ "search-keywords !w-350px" ]),
                            clearable: ""
                        }, {
                            append: n(() => [ u(k, {
                                icon: "ep:search",
                                class: "pointer"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]), z, u(q, {
                            modelValue: t(_),
                            "onUpdate:modelValue": e[4] || (e[4] = s => b(_) ? _.value = s : null),
                            size: "default",
                            "active-text": "是",
                            "inactive-text": "否",
                            "inline-prompt": "",
                            onChange: G
                        }, null, 8, [ "modelValue" ]), S, u(q, {
                            size: "default",
                            modelValue: t(f),
                            "onUpdate:modelValue": e[5] || (e[5] = s => b(f) ? f.value = s : null),
                            "active-text": "展开",
                            "inactive-text": "折叠",
                            "inline-prompt": "",
                            onChange: Q
                        }, null, 8, [ "modelValue" ]) ]), u(t(de), {
                            ref_key: "treeRef",
                            ref: d,
                            data: t(T),
                            props: t(ze),
                            "empty-text": "暂无数据",
                            "node-key": "id",
                            "show-checkbox": "",
                            "filter-node-method": Y,
                            onCheckChange: W
                        }, null, 8, [ "data", "props" ]) ]), u(c, {
                            label: "实验环境",
                            prop: "envTypes"
                        }, {
                            default: n(() => [ g("div", M, [ u(ee, {
                                modelValue: t(r).envTypes,
                                "onUpdate:modelValue": e[6] || (e[6] = s => t(r).envTypes = s)
                            }, {
                                default: n(() => [ (V(!0), me(ce, null, ie(t(Ue)(t(Ae).SYSTEM_TENANT_PACKAGE_ENV_TYPE).filter(s => s.value !== 0), s => (V(), 
                                U(X, {
                                    key: s.value,
                                    label: s.label,
                                    value: s.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ se, t(v) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-20d9727f" ] ]);
});

export {
    Re as __tla,
    L as default
};