import {
    aa as z,
    p as J,
    r as o,
    U as K,
    o as c,
    C as _,
    l as s,
    k as u,
    v as I,
    a as l,
    A as M,
    c as w,
    F as U,
    y as C,
    m as Q,
    ab as D,
    ac as G,
    O as H,
    cK as W,
    P as X,
    Q as Y,
    J as Z,
    aU as $,
    a9 as ee,
    __tla as ae
} from "./index-6c08ea4c.js";

import {
    __tla as le
} from "./dict-c5825220.js";

import {
    a as te,
    c as re,
    u as se,
    __tla as ue
} from "./index-c31c99eb.js";

import {
    C as x
} from "./constants-528bd83f.js";

import {
    e as oe,
    __tla as de
} from "./index-5125d270.js";

import {
    b as ie,
    __tla as ce
} from "./index-7c503ef3.js";

import {
    _ as ne
} from "./_plugin-vue_export-helper-1b428a4d.js";

let E, me = Promise.all([ (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})() ]).then(async () => {
    E = ne(Object.assign({
        name: "SystemTenantForm"
    }, {
        __name: "TenantForm",
        emits: [ "success" ],
        setup(pe, {
            expose: q,
            emit: S
        }) {
            const {
                t: v
            } = z(), f = J(), d = o(!1), b = o(""), i = o(!1), g = o(""), r = o({
                id: void 0,
                dictId: void 0,
                packageId: void 0,
                remark: void 0,
                accountCount: null,
                status: x.ENABLE,
                website: "",
                expireTime: "",
                envServiceUrl: "",
                imageRepositoryUrl: ""
            }), T = K({
                dictId: [ {
                    required: !0,
                    message: "请选择租户名称",
                    trigger: [ "blur", "change" ]
                } ],
                packageId: [ {
                    required: !0,
                    message: "选择租户套餐",
                    trigger: [ "blur", "change" ]
                } ],
                status: [ {
                    required: !0,
                    message: "租户状态不能为空",
                    trigger: [ "blur", "change" ]
                } ],
                accountCount: [ {
                    required: !1,
                    trigger: [ "blur", "change" ],
                    message: "请输入用户限制"
                }, {
                    validator: (t, e, n) => {
                        e && (e > 1e5 || e < 1) ? n(new Error("用户限制必须介于 1 和 100000 之间")) : n();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                remark: [ {
                    required: !1,
                    trigger: [ "blur", "change" ],
                    message: "请输入备注"
                }, {
                    min: 0,
                    max: 200,
                    message: "长度必须介于 0 和 200 之间",
                    trigger: [ "blur", "change" ]
                } ]
            }), m = o(), y = o([]), h = o([]);
            q({
                open: async (t, e) => {
                    if (d.value = !0, b.value = t === "create" ? "新增合作租户" : "编辑合作租户", 
                    g.value = t, j(), e) {
                        i.value = !0;
                        try {
                            r.value = await te(e);
                        } finally {
                            i.value = !1;
                        }
                    }
                    y.value = await oe({
                        status: 0
                    }), h.value = await ie({
                        status: 0
                    });
                }
            });
            const A = S, F = async () => {
                if (m && await m.value.validate()) {
                    i.value = !0;
                    try {
                        const t = r.value;
                        g.value === "create" ? (await re(t), f.success(v("common.createSuccess"))) : (await se(t), 
                        f.success(v("common.updateSuccess"))), d.value = !1, A("success");
                    } finally {
                        i.value = !1;
                    }
                }
            }, R = (t, e) => e.name.includes(t) || (e.code || "").includes(t), j = () => {
                var t;
                r.value = {
                    id: void 0,
                    dictId: void 0,
                    packageId: void 0,
                    remark: void 0,
                    accountCount: null,
                    status: x.ENABLE,
                    website: "",
                    expireTime: "",
                    envServiceUrl: "",
                    imageRepositoryUrl: ""
                }, (t = m.value) == null || t.resetFields();
            };
            return (t, e) => {
                const n = D, k = G, p = H, B = W, L = X, N = Y, V = Z, O = $, P = ee;
                return c(), _(O, {
                    modelValue: l(d),
                    "onUpdate:modelValue": e[5] || (e[5] = a => Q(d) ? d.value = a : null),
                    title: l(b),
                    width: "420"
                }, {
                    footer: s(() => [ u(V, {
                        onClick: e[4] || (e[4] = a => d.value = !1)
                    }, {
                        default: s(() => [ I("取 消") ]),
                        _: 1
                    }), u(V, {
                        disabled: l(i),
                        type: "primary",
                        onClick: F
                    }, {
                        default: s(() => [ I("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ M((c(), _(N, {
                        ref_key: "formRef",
                        ref: m,
                        "label-position": "top",
                        model: l(r),
                        rules: l(T),
                        "label-width": "80px",
                        size: "large"
                    }, {
                        default: s(() => [ u(p, {
                            label: "选择租户",
                            prop: "dictId"
                        }, {
                            default: s(() => [ u(k, {
                                modelValue: l(r).dictId,
                                "onUpdate:modelValue": e[0] || (e[0] = a => l(r).dictId = a),
                                clearable: "",
                                filterable: "",
                                "filter-node-method": R,
                                placeholder: "请输入租户名称/代码",
                                disabled: l(g) === "update"
                            }, {
                                default: s(() => [ (c(!0), w(U, null, C(l(h), a => (c(), 
                                _(n, {
                                    key: a.id,
                                    label: a.name + "（" + a.code + "）",
                                    value: a.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), u(p, {
                            label: "选购套餐",
                            prop: "packageId"
                        }, {
                            default: s(() => [ u(k, {
                                modelValue: l(r).packageId,
                                "onUpdate:modelValue": e[1] || (e[1] = a => l(r).packageId = a),
                                clearable: "",
                                placeholder: "请选择套餐名称/代码"
                            }, {
                                default: s(() => [ (c(!0), w(U, null, C(l(y), a => (c(), 
                                _(n, {
                                    key: a.id,
                                    label: a.name + "(" + a.code + ")",
                                    value: a.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(p, {
                            label: "用户限制",
                            prop: "accountCount"
                        }, {
                            default: s(() => [ u(B, {
                                style: {
                                    width: "100%"
                                },
                                modelValue: l(r).accountCount,
                                "onUpdate:modelValue": e[2] || (e[2] = a => l(r).accountCount = a),
                                modelModifiers: {
                                    number: !0
                                },
                                min: 1,
                                step: 1,
                                "step-strictly": "",
                                max: 1e5,
                                "controls-position": "right",
                                placeholder: "请输入用户限制"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(p, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: s(() => [ u(L, {
                                modelValue: l(r).remark,
                                "onUpdate:modelValue": e[3] || (e[3] = a => l(r).remark = a),
                                type: "textarea",
                                placeholder: "请输入备注"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ P, l(i) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-3d5de42d" ] ]);
});

export {
    me as __tla,
    E as default
};