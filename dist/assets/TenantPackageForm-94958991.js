import {
    d as D,
    aa as J,
    p as Q,
    r as o,
    U as Z,
    o as y,
    C as g,
    l as s,
    k as u,
    v,
    a,
    A as j,
    m as V,
    Z as z,
    c as G,
    F as W,
    y as X,
    B as Y,
    P as $,
    O as ee,
    ak as ae,
    bp as le,
    bq as te,
    Q as se,
    J as ue,
    aU as re,
    a9 as oe,
    __tla as de
} from "./index-6c08ea4c.js";

import {
    b as ne,
    D as me,
    __tla as ce
} from "./dict-c5825220.js";

import {
    C as I
} from "./constants-528bd83f.js";

import {
    d as ie,
    h as _e
} from "./tree-05ea8e09.js";

import {
    g as pe,
    c as ve,
    u as fe,
    __tla as ye
} from "./index-5125d270.js";

import {
    g as he,
    __tla as ke
} from "./index-70ef8e51.js";

import {
    E as ge,
    __tla as Ve
} from "./index-ee838148.js";

import {
    _ as be
} from "./_plugin-vue_export-helper-1b428a4d.js";

let E, Ce = Promise.all([ (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})() ]).then(async () => {
    E = be(D({
        name: "SystemTenantPackageForm",
        __name: "TenantPackageForm",
        emits: [ "success" ],
        setup(xe, {
            expose: S,
            emit: q
        }) {
            const {
                t: h
            } = J(), b = Q(), m = o(!1), C = o(""), c = o(!1), x = o(""), r = o({
                id: null,
                name: null,
                remark: null,
                menuIds: [],
                status: I.ENABLE
            }), A = Z({
                name: [ {
                    required: !0,
                    message: "套餐名不能为空",
                    trigger: "blur"
                } ],
                status: [ {
                    required: !0,
                    message: "状态不能为空",
                    trigger: "blur"
                } ],
                menuIds: [ {
                    required: !0,
                    message: "关联的菜单编号不能为空",
                    trigger: "blur"
                } ]
            }), f = o(), k = o([]), i = o(!1), n = o(), p = o(!1);
            S({
                open: async (t, e) => {
                    if (m.value = !0, C.value = h("action." + t), x.value = t, N(), 
                    k.value = _e(await he()), e) {
                        c.value = !0;
                        try {
                            const d = await pe(e);
                            r.value = d, d.menuIds.forEach(_ => {
                                n.value.setChecked(_, !0, !1);
                            });
                        } finally {
                            c.value = !1;
                        }
                    }
                }
            });
            const F = q, M = async () => {
                if (f && await f.value.validate()) {
                    c.value = !0;
                    try {
                        const t = r.value;
                        t.menuIds = [ ...n.value.getCheckedKeys(!1), ...n.value.getHalfCheckedKeys() ], 
                        x.value === "create" ? (await ve(t), b.success(h("common.createSuccess"))) : (await fe(t), 
                        b.success(h("common.updateSuccess"))), m.value = !1, F("success");
                    } finally {
                        c.value = !1;
                    }
                }
            }, N = () => {
                var t, e;
                p.value = !1, i.value = !1, r.value = {
                    id: null,
                    name: null,
                    remark: null,
                    menuIds: [],
                    status: I.ENABLE
                }, (t = n.value) == null || t.setCheckedNodes([]), (e = f.value) == null || e.resetFields();
            }, B = () => {
                n.value.setCheckedNodes(p.value ? k.value : []);
            }, P = () => {
                var e;
                const t = (e = n.value) == null ? void 0 : e.store.nodesMap;
                for (let d in t) t[d].expanded !== i.value && (t[d].expanded = i.value);
            };
            return (t, e) => {
                const d = $, _ = ee, U = ae, T = ge, O = le, H = te, K = se, w = ue, L = re, R = oe;
                return y(), g(L, {
                    modelValue: a(m),
                    "onUpdate:modelValue": e[6] || (e[6] = l => V(m) ? m.value = l : null),
                    title: a(C)
                }, {
                    footer: s(() => [ u(w, {
                        onClick: e[5] || (e[5] = l => m.value = !1)
                    }, {
                        default: s(() => [ v("取 消") ]),
                        _: 1
                    }), u(w, {
                        disabled: a(c),
                        type: "primary",
                        onClick: M
                    }, {
                        default: s(() => [ v("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ j((y(), g(K, {
                        ref_key: "formRef",
                        ref: f,
                        model: a(r),
                        rules: a(A),
                        "label-width": "80px"
                    }, {
                        default: s(() => [ u(_, {
                            label: "套餐名",
                            prop: "name"
                        }, {
                            default: s(() => [ u(d, {
                                modelValue: a(r).name,
                                "onUpdate:modelValue": e[0] || (e[0] = l => a(r).name = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入套餐名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(_, {
                            label: "菜单权限"
                        }, {
                            default: s(() => [ u(T, {
                                class: "cardHeight"
                            }, {
                                header: s(() => [ v(" 全选/全不选: "), u(U, {
                                    modelValue: a(p),
                                    "onUpdate:modelValue": e[1] || (e[1] = l => V(p) ? p.value = l : null),
                                    "active-text": "是",
                                    "inactive-text": "否",
                                    "inline-prompt": "",
                                    onChange: B
                                }, null, 8, [ "modelValue" ]), v(" 全部展开/折叠: "), u(U, {
                                    modelValue: a(i),
                                    "onUpdate:modelValue": e[2] || (e[2] = l => V(i) ? i.value = l : null),
                                    "active-text": "展开",
                                    "inactive-text": "折叠",
                                    "inline-prompt": "",
                                    onChange: P
                                }, null, 8, [ "modelValue" ]) ]),
                                default: s(() => [ u(a(z), {
                                    ref_key: "treeRef",
                                    ref: n,
                                    data: a(k),
                                    props: a(ie),
                                    "empty-text": "加载中，请稍候",
                                    "node-key": "id",
                                    "show-checkbox": ""
                                }, null, 8, [ "data", "props" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), u(_, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: s(() => [ u(H, {
                                modelValue: a(r).status,
                                "onUpdate:modelValue": e[3] || (e[3] = l => a(r).status = l)
                            }, {
                                default: s(() => [ (y(!0), G(W, null, X(a(ne)(a(me).COMMON_STATUS), l => (y(), 
                                g(O, {
                                    key: l.value,
                                    label: l.value
                                }, {
                                    default: s(() => [ v(Y(l.label), 1) ]),
                                    _: 2
                                }, 1032, [ "label" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(_, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: s(() => [ u(d, {
                                modelValue: a(r).remark,
                                "onUpdate:modelValue": e[4] || (e[4] = l => a(r).remark = l),
                                placeholder: "请输入备注"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ R, a(c) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-79407118" ] ]);
});

export {
    Ce as __tla,
    E as default
};