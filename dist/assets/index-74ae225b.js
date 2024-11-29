import {
    T as ne,
    aa as me,
    p as ve,
    r as i,
    U as fe,
    o as g,
    C as b,
    l as e,
    k as l,
    v as o,
    a as s,
    A as C,
    G as F,
    t as V,
    m as L,
    c as q,
    F as _e,
    y as he,
    H as D,
    D as ge,
    B as ye,
    bo as G,
    E as Ie,
    O as xe,
    J as be,
    ab as Ce,
    _ as Ve,
    P as ke,
    ac as we,
    bp as Ae,
    bq as Ue,
    av as Te,
    aw as Ne,
    Q as Ee,
    aU as Pe,
    a9 as ze,
    __tla as Be
} from "./index-6c08ea4c.js";

import {
    s as Fe,
    a as Le,
    e as qe,
    b as De,
    u as Ge,
    c as He,
    d as Je,
    __tla as Ke
} from "./index-9567cbf6.js";

import {
    d as Me
} from "./tree-05ea8e09.js";

import {
    _ as Oe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Qe,
    __tla as Re
} from "./index-ef4d146e.js";

let H, Se = Promise.all([ (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})() ]).then(async () => {
    let k, w, A;
    k = {
        key: 0,
        class: "right"
    }, w = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, A = {
        class: "addLabelInput"
    }, H = Oe({
        __name: "index",
        emits: [ "success" ],
        setup(Ye, {
            expose: J,
            emit: K
        }) {
            const _ = ne(), {
                t: M
            } = me(), O = ve(), p = i(!1), n = i(!1), U = i([]), u = i({
                isAssess: "1",
                dirId: "",
                tagIds: []
            }), T = i([]), Q = fe({
                dirId: [ {
                    message: "请选择项目目录",
                    trigger: [ "blur", "change" ]
                } ],
                tagIds: [ {
                    message: "请选择项目标签",
                    trigger: [ "blur", "change" ]
                } ],
                isAssess: [ {
                    required: !0,
                    message: "请选择是否作为考核点",
                    trigger: [ "blur", "change" ]
                } ]
            }), y = i();
            J({
                open: async t => {
                    p.value = !0, Y(), j(t), Z(), I();
                }
            });
            const R = K, S = async () => {
                if (y && await y.value.validate()) {
                    n.value = !0;
                    try {
                        u.value, await Fe({
                            ...u.value,
                            resIds: U.value
                        }), O.success(M("common.updateSuccess")), p.value = !1, 
                        R("success");
                    } finally {
                        n.value = !1;
                    }
                }
            }, Y = () => {
                var t;
                c.value = !0, r.value = "", (t = y.value) == null || t.resetFields();
            }, Z = async () => {
                const t = await Le({
                    teachCourseId: _.params.teachCourseId
                });
                T.value = t;
            }, j = async t => {
                var d;
                try {
                    n.value = !0;
                    const v = await qe({
                        teachCourseId: _.params.teachCourseId,
                        dataId: t
                    });
                    U.value = [ v.id ], u.value.dirId = v.dirId, u.value.isAssess = v.isAssess, 
                    u.value.tagIds = (d = v.tagList) == null ? void 0 : d.map(h => h.tagId);
                } finally {
                    n.value = !1;
                }
            }, N = i(0), E = i([]), I = () => {
                De({
                    teachCourseId: _.params.teachCourseId
                }).then(t => {
                    N.value++, E.value = t;
                });
            }, P = i(0), c = i(!0), r = i(""), m = i({}), z = t => {
                r.value = "", t && (m.value = t, r.value = t.tagName), c.value = !1;
            }, W = () => {
                r.value && (m.value.id ? Ge({
                    tagName: r.value,
                    sourceType: 0,
                    teachCourseId: _.params.teachCourseId,
                    id: m.value.id
                }).then(t => {
                    I(), P.value++, m.value = {}, r.value = "", c.value = !0;
                }) : He({
                    tagName: r.value,
                    sourceType: 0,
                    teachCourseId: _.params.teachCourseId
                }).then(t => {
                    G({
                        type: "success",
                        message: "添加成功"
                    }), I(), P.value++, m.value = {}, r.value = "", c.value = !0;
                }));
            }, X = () => {
                m.value = {}, r.value = "", c.value = !0;
            };
            return (t, d) => {
                const v = Qe, h = xe, f = be, $ = Ce, ee = Ve, ae = ke, le = we, B = Ae, se = Ue, te = Te, de = Ne, ue = Ee, re = Pe, ie = ze;
                return g(), b(re, {
                    modelValue: s(p),
                    "onUpdate:modelValue": d[5] || (d[5] = a => L(p) ? p.value = a : null),
                    title: "资源设置",
                    width: "520",
                    height: "500"
                }, {
                    footer: e(() => [ l(f, {
                        onClick: d[4] || (d[4] = a => p.value = !1)
                    }, {
                        default: e(() => [ o("取 消") ]),
                        _: 1
                    }), l(f, {
                        disabled: s(n),
                        type: "primary",
                        onClick: S
                    }, {
                        default: e(() => [ o("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: e(() => [ C((g(), b(ue, {
                        ref_key: "formRef",
                        ref: y,
                        "label-position": "top",
                        model: s(u),
                        rules: s(Q),
                        "label-width": "80px",
                        size: "large",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: e(() => [ l(de, {
                            gutter: 0
                        }, {
                            default: e(() => [ l(h, {
                                label: "所属目录",
                                class: "w100"
                            }, {
                                default: e(() => [ l(v, {
                                    modelValue: s(u).dirId,
                                    "onUpdate:modelValue": d[0] || (d[0] = a => s(u).dirId = a),
                                    data: s(T),
                                    "check-strictly": "",
                                    "render-after-expand": !1,
                                    placeholder: "请选择所属目录",
                                    style: {
                                        width: "calc(100%)"
                                    },
                                    filterable: "",
                                    clearable: "",
                                    props: s(Me)
                                }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                _: 1
                            }), l(h, {
                                label: "项目标签",
                                prop: "",
                                class: "w100"
                            }, {
                                default: e(() => [ l(le, {
                                    clearable: "",
                                    modelValue: s(u).tagIds,
                                    "onUpdate:modelValue": d[2] || (d[2] = a => s(u).tagIds = a),
                                    placeholder: "请选择项目标签",
                                    multiple: "",
                                    "multiple-limit": 3
                                }, {
                                    footer: e(() => [ C(l(f, {
                                        onClick: z,
                                        size: "small",
                                        type: "primary",
                                        text: ""
                                    }, {
                                        default: e(() => [ l(ee, {
                                            icon: "ep:plus",
                                            color: "#245FE6",
                                            style: {
                                                position: "relative",
                                                top: "-1px"
                                            }
                                        }), o(" 新建") ]),
                                        _: 1
                                    }, 512), [ [ F, s(c) ] ]), C(V("div", A, [ l(ae, {
                                        modelValue: s(r),
                                        "onUpdate:modelValue": d[1] || (d[1] = a => L(r) ? r.value = a : null),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        maxlength: 5,
                                        style: {
                                            "max-width": "360px"
                                        },
                                        placeholder: "请输入标签名称"
                                    }, {
                                        append: e(() => [ V("div", {
                                            style: {
                                                "padding-left": "12px",
                                                "padding-right": "12px"
                                            },
                                            onClick: W
                                        }, "保存") ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]), l(f, {
                                        type: "primary",
                                        text: "",
                                        style: {
                                            "margin-left": "10px"
                                        },
                                        onClick: X
                                    }, {
                                        default: e(() => [ o("取消") ]),
                                        _: 1
                                    }) ], 512), [ [ F, !s(c) ] ]) ]),
                                    default: e(() => [ (g(!0), q(_e, null, he(s(E), a => (g(), 
                                    b($, {
                                        key: a.id + s(N),
                                        label: a.tagName,
                                        value: a.id
                                    }, {
                                        default: e(() => [ a.sourceType || a.showhandle ? ge("", !0) : (g(), 
                                        q("div", k, [ l(f, {
                                            type: "primary",
                                            style: {
                                                padding: "0px"
                                            },
                                            onClick: D(oe => z(a), [ "stop" ]),
                                            text: ""
                                        }, {
                                            default: e(() => [ o("编辑") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]), l(f, {
                                            type: "danger",
                                            style: {
                                                padding: "0px 10px 0 0"
                                            },
                                            onClick: D(oe => {
                                                return x = a, void Ie.confirm("确定要删除该标签吗？", "提示", {
                                                    confirmButtonText: "确认",
                                                    cancelButtonText: "取消"
                                                }).then(() => {
                                                    Je({
                                                        id: x.id
                                                    }).then(Ze => {
                                                        G({
                                                            message: "操作成功",
                                                            type: "success"
                                                        }), u.value.tagIds.forEach((ce, pe) => {
                                                            ce == x.id && u.value.tagIds.splice(pe, 1);
                                                        }), I();
                                                    });
                                                }).catch(() => {});
                                                var x;
                                            }, [ "stop" ]),
                                            text: ""
                                        }, {
                                            default: e(() => [ o("删除") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]) ])), V("div", w, ye(a.tagName), 1) ]),
                                        _: 2
                                    }, 1032, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }), l(te, {
                                span: 12
                            }, {
                                default: e(() => [ l(h, {
                                    label: "是否作为考核点",
                                    prop: "isAssess"
                                }, {
                                    default: e(() => [ l(se, {
                                        modelValue: s(u).isAssess,
                                        "onUpdate:modelValue": d[3] || (d[3] = a => s(u).isAssess = a)
                                    }, {
                                        default: e(() => [ l(B, {
                                            value: 1
                                        }, {
                                            default: e(() => [ o("是") ]),
                                            _: 1
                                        }), l(B, {
                                            value: 0
                                        }, {
                                            default: e(() => [ o("否") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ ie, s(n) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-3dec90a1" ] ]);
});

export {
    Se as __tla,
    H as default
};