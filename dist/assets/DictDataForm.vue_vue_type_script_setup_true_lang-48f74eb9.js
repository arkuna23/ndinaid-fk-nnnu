import {
    d as z,
    aa as J,
    p as K,
    r as m,
    U as Q,
    cj as R,
    o as p,
    C as v,
    l as t,
    k as u,
    v as f,
    a,
    A as G,
    c as C,
    F as h,
    y as T,
    B as H,
    m as I,
    fs as W,
    ft as X,
    fu as Y,
    P as Z,
    O as $,
    cK as ee,
    bp as ae,
    bq as le,
    ab as se,
    ac as ue,
    Q as te,
    J as oe,
    aU as re,
    a9 as de,
    __tla as ie
} from "./index-6c08ea4c.js";

import {
    b as ce,
    D as me,
    __tla as pe
} from "./dict-c5825220.js";

import {
    C as U
} from "./constants-528bd83f.js";

let k, ne = Promise.all([ (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})() ]).then(async () => {
    k = z({
        name: "SystemDictDataForm",
        __name: "DictDataForm",
        emits: [ "success" ],
        setup(ve, {
            expose: S,
            emit: w
        }) {
            const {
                t: b
            } = J(), _ = K(), i = m(!1), y = m(""), c = m(!1), V = m(""), s = m({
                id: void 0,
                sort: void 0,
                label: "",
                value: "",
                dictType: "",
                status: U.ENABLE,
                colorType: "",
                cssClass: "",
                remark: ""
            }), q = Q({
                label: [ {
                    required: !0,
                    message: "数据标签不能为空",
                    trigger: "blur"
                } ],
                value: [ {
                    required: !0,
                    message: "数据键值不能为空",
                    trigger: "blur"
                } ],
                sort: [ {
                    required: !0,
                    message: "数据顺序不能为空",
                    trigger: "blur"
                } ],
                status: [ {
                    required: !0,
                    message: "状态不能为空",
                    trigger: "change"
                } ]
            }), n = m(), D = R([ {
                value: "default",
                label: "默认"
            }, {
                value: "primary",
                label: "主要"
            }, {
                value: "success",
                label: "成功"
            }, {
                value: "info",
                label: "信息"
            }, {
                value: "warning",
                label: "警告"
            }, {
                value: "danger",
                label: "危险"
            } ]);
            S({
                open: async (o, l, r) => {
                    if (i.value = !0, y.value = b("action." + o), V.value = o, A(), 
                    r && (s.value.dictType = r), l) {
                        c.value = !0;
                        try {
                            s.value = await W(l);
                        } finally {
                            c.value = !1;
                        }
                    }
                }
            });
            const F = w, x = async () => {
                if (n && await n.value.validate()) {
                    c.value = !0;
                    try {
                        const o = s.value;
                        V.value === "create" ? (await X(o), _.success(b("common.createSuccess"))) : (await Y(o), 
                        _.success(b("common.updateSuccess"))), i.value = !1, F("success");
                    } finally {
                        c.value = !1;
                    }
                }
            }, A = () => {
                var o;
                s.value = {
                    id: void 0,
                    sort: void 0,
                    label: "",
                    value: "",
                    dictType: "",
                    status: U.ENABLE,
                    colorType: "",
                    cssClass: "",
                    remark: ""
                }, (o = n.value) == null || o.resetFields();
            };
            return (o, l) => {
                const r = Z, d = $, B = ee, E = ae, O = le, N = se, L = ue, M = te, g = oe, P = re, j = de;
                return p(), v(P, {
                    modelValue: a(i),
                    "onUpdate:modelValue": l[9] || (l[9] = e => I(i) ? i.value = e : null),
                    title: a(y),
                    scroll: "",
                    width: "420"
                }, {
                    footer: t(() => [ u(g, {
                        onClick: l[8] || (l[8] = e => i.value = !1)
                    }, {
                        default: t(() => [ f("取 消") ]),
                        _: 1
                    }), u(g, {
                        disabled: a(c),
                        type: "primary",
                        onClick: x
                    }, {
                        default: t(() => [ f("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: t(() => [ G((p(), v(M, {
                        ref_key: "formRef",
                        ref: n,
                        "label-position": "top",
                        model: a(s),
                        size: "large",
                        rules: a(q),
                        "label-width": "80px"
                    }, {
                        default: t(() => [ u(d, {
                            label: "字典类型",
                            prop: "type"
                        }, {
                            default: t(() => [ u(r, {
                                modelValue: a(s).dictType,
                                "onUpdate:modelValue": l[0] || (l[0] = e => a(s).dictType = e),
                                disabled: a(s).id !== void 0,
                                placeholder: "请输入参数名称"
                            }, null, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), u(d, {
                            label: "数据标签",
                            prop: "label"
                        }, {
                            default: t(() => [ u(r, {
                                modelValue: a(s).label,
                                "onUpdate:modelValue": l[1] || (l[1] = e => a(s).label = e),
                                placeholder: "请输入数据标签"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(d, {
                            label: "数据键值",
                            prop: "value"
                        }, {
                            default: t(() => [ u(r, {
                                modelValue: a(s).value,
                                "onUpdate:modelValue": l[2] || (l[2] = e => a(s).value = e),
                                placeholder: "请输入数据键值"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(d, {
                            label: "显示排序",
                            prop: "sort"
                        }, {
                            default: t(() => [ u(B, {
                                modelValue: a(s).sort,
                                "onUpdate:modelValue": l[3] || (l[3] = e => a(s).sort = e),
                                min: 0,
                                "controls-position": "right"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(d, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: t(() => [ u(O, {
                                modelValue: a(s).status,
                                "onUpdate:modelValue": l[4] || (l[4] = e => a(s).status = e)
                            }, {
                                default: t(() => [ (p(!0), C(h, null, T(a(ce)(a(me).COMMON_STATUS), e => (p(), 
                                v(E, {
                                    key: e.value,
                                    value: e.value
                                }, {
                                    default: t(() => [ f(H(e.label), 1) ]),
                                    _: 2
                                }, 1032, [ "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(d, {
                            label: "颜色类型",
                            prop: "colorType"
                        }, {
                            default: t(() => [ u(L, {
                                modelValue: a(s).colorType,
                                "onUpdate:modelValue": l[5] || (l[5] = e => a(s).colorType = e)
                            }, {
                                default: t(() => [ (p(!0), C(h, null, T(a(D), e => (p(), 
                                v(N, {
                                    key: e.value,
                                    label: e.label + "(" + e.value + ")",
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(d, {
                            label: "CSS Class",
                            prop: "cssClass"
                        }, {
                            default: t(() => [ u(r, {
                                modelValue: a(s).cssClass,
                                "onUpdate:modelValue": l[6] || (l[6] = e => a(s).cssClass = e),
                                placeholder: "请输入 CSS Class"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(d, {
                            label: "备注",
                            prop: "remark"
                        }, {
                            default: t(() => [ u(r, {
                                modelValue: a(s).remark,
                                "onUpdate:modelValue": l[7] || (l[7] = e => a(s).remark = e),
                                placeholder: "请输入内容",
                                type: "textarea"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ j, a(c) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    });
});

export {
    k as _,
    ne as __tla
};