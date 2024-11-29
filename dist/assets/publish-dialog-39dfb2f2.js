import {
    T as se,
    aa as te,
    p as ie,
    r,
    U as de,
    a6 as p,
    e as pe,
    o as c,
    C as _,
    l as a,
    k as s,
    v as m,
    a as e,
    D,
    A as Y,
    dP as E,
    G as re,
    c as oe,
    F as ne,
    y as me,
    m as be,
    bp as ve,
    bq as ce,
    O as fe,
    av as ge,
    N as he,
    ab as _e,
    ac as Te,
    aw as ye,
    Q as Ve,
    J as we,
    aU as Oe,
    a9 as Pe,
    R as ke,
    S as xe,
    t as M,
    __tla as De
} from "./index-6c08ea4c.js";

import {
    __tla as Ie
} from "./dict-c5825220.js";

import {
    f as C,
    __tla as Ue
} from "./formatTime-de6f1520.js";

import {
    e as qe,
    p as Re,
    j as Se,
    i as Ye,
    __tla as Ee
} from "./project-51c056b9.js";

import {
    _ as Me
} from "./_plugin-vue_export-helper-1b428a4d.js";

let H, Ce = Promise.all([ (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})() ]).then(async () => {
    let O, I, U;
    O = T => (ke("data-v-4f9177c1"), T = T(), xe(), T), I = O(() => M("span", {
        class: "tips"
    }, " 该项目发布后学生可见，默认按资源顺序执行，可跳关执行", -1)), U = O(() => M("span", {
        class: "tips"
    }, "该项目学生发布后可见，按顺序执行，前序任务完才可解锁下一任务", -1)), H = Me(Object.assign({
        name: "SystemTenantManageForm"
    }, {
        __name: "publish-dialog",
        emits: [ "success" ],
        setup(T, {
            expose: j,
            emit: F
        }) {
            const N = se(), {
                t: z
            } = te(), y = ie(), f = r(!1), q = r(""), g = r(!1), b = r(""), l = r({
                publishType: 1,
                completeType: 1,
                publishTime: "",
                groupPlanId: "",
                endTime: "",
                publishRange: 1,
                trialType: 1,
                groupPlanName: ""
            }), J = r(), P = r([]), A = de({
                publishType: [ {
                    required: !0,
                    message: "请选择发布方式",
                    trigger: [ "blur", "change" ]
                } ],
                publishTime: [ {
                    required: !0,
                    message: "请选择发布时间",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (t, u, d) => {
                        l.value.publishType == "2" && u && v.value != 3 ? p(u).valueOf() < p(new Date()).valueOf() ? d(new Error("发布时间需大于当前时间")) : l.value.endTime && p(u).valueOf() >= p(l.value.endTime).valueOf() ? d(new Error("发布时间需小于截止时间")) : d() : d();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                completeType: [ {
                    required: !0,
                    message: "请选择完成方式",
                    trigger: "blur"
                } ],
                groupPlanId: [ {
                    required: !0,
                    message: "请选择分组",
                    trigger: [ "blur", "change" ]
                } ],
                trialType: [ {
                    required: !0,
                    message: "请选择实验方式",
                    trigger: "blur"
                } ],
                endTime: [ {
                    required: !0,
                    message: "请选择截止时间",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (t, u, d) => {
                        p(u).valueOf() < p(new Date()).valueOf() && d(new Error("截止时间需大于当前时间")), 
                        l.value.publishType == "2" && l.value.publishTime && u && p(u).valueOf() < p(l.value.publishTime).valueOf() ? d(new Error("截止时间需大于发布时间")) : d();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                publishRange: [ {
                    required: !0,
                    message: "请选择发布范围",
                    trigger: [ "blur", "change" ]
                } ]
            }), V = r();
            r([]);
            const G = t => p(t).valueOf() < p(Date.now()).valueOf() - 864e5, Q = t => p(t).valueOf() < p(Date.now()).valueOf() - 864e5, B = pe(() => (P.value.find(t => t.id === l.value.groupPlanId) || {}).name), k = r([]), w = r([]), v = r(), x = r(0);
            j({
                open: async (t, u, d, h = null, n = 0) => {
                    if (f.value = !0, k.value = u, w.value = d, q.value = z("action." + t), 
                    b.value = t, x.value = n, W(), t === "publishSetting") {
                        g.value = !0, v.value = h;
                        try {
                            const o = await qe({
                                id: u
                            });
                            l.value = o, l.value.publishTime = C(o.publishTime), 
                            l.value.endTime = C(o.endTime), J.value = o.publishType;
                        } finally {
                            g.value = !1;
                        }
                    } else n == 1 && w.value.includes(15) && (l.value.completeType = 2);
                    X();
                }
            });
            const K = F, L = async () => {
                if (V && await V.value.validate()) {
                    if (b.value === "publishProject" && l.value.completeType == 1 && w.value.includes(15)) return y.alertError("当前选择包含Devops环境项目，该项目仅支持分组完成，请重新进行选择。");
                    if (l.value.completeType == 2 && l.value.publishRange == 2) return y.alertError("完成方式为分组完成，发布范围只能选择当前班级");
                    g.value = !0;
                    try {
                        l.value.groupPlanName = B.value;
                        const t = {
                            ...l.value
                        };
                        t.endTime = p(l.value.endTime).valueOf(), t.publishTime = p(l.value.publishTime).valueOf(), 
                        b.value === "publishProject" ? (await Re({
                            ...t,
                            ids: k.value
                        }), y.success("发布成功")) : (await Se({
                            ...t,
                            ids: [ k.value ]
                        }), y.success("发布设置成功")), f.value = !1, K("success");
                    } finally {
                        g.value = !1;
                    }
                }
            }, W = () => {
                var t;
                l.value = {
                    trialType: 1,
                    publishType: 1,
                    completeType: 1,
                    publishTime: "",
                    groupPlanId: "",
                    endTime: "",
                    publishRange: 1,
                    groupPlanName: ""
                }, v.value = "", (t = V.value) == null || t.resetFields();
            }, X = async () => {
                const t = await Ye({
                    teachClassId: N.params.classId,
                    status: 1
                });
                P.value = t ?? [];
            };
            return (t, u) => {
                const d = ve, h = ce, n = fe, o = ge, R = he, Z = _e, $ = Te, ee = ye, le = Ve, S = we, ae = Oe, ue = Pe;
                return c(), _(ae, {
                    modelValue: e(f),
                    "onUpdate:modelValue": u[8] || (u[8] = i => be(f) ? f.value = i : null),
                    title: e(q),
                    width: "520",
                    height: "500"
                }, {
                    footer: a(() => [ s(S, {
                        onClick: u[7] || (u[7] = i => f.value = !1)
                    }, {
                        default: a(() => [ m("取 消") ]),
                        _: 1
                    }), e(v) != 4 ? (c(), _(S, {
                        key: 0,
                        disabled: e(g),
                        type: "primary",
                        onClick: L
                    }, {
                        default: a(() => [ m("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ])) : D("", !0) ]),
                    default: a(() => [ Y((c(), _(le, {
                        ref_key: "formRef",
                        ref: V,
                        "label-position": "top",
                        model: e(l),
                        rules: e(A),
                        "label-width": "80px",
                        size: "large",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: a(() => [ s(ee, {
                            gutter: 0
                        }, {
                            default: a(() => [ s(o, {
                                span: 11
                            }, {
                                default: a(() => [ s(n, {
                                    label: "发布方式",
                                    prop: "publishType"
                                }, {
                                    default: a(() => [ s(h, {
                                        modelValue: e(l).publishType,
                                        "onUpdate:modelValue": u[0] || (u[0] = i => e(l).publishType = i),
                                        disabled: e(b) === "publishSetting"
                                    }, {
                                        default: a(() => [ s(d, {
                                            value: 1
                                        }, {
                                            default: a(() => [ m("立即发布") ]),
                                            _: 1
                                        }), s(d, {
                                            value: 2
                                        }, {
                                            default: a(() => [ m("定时发布") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), s(o, {
                                span: 13
                            }, {
                                default: a(() => [ e(l).publishType == 2 || e(b) === "publishSetting" ? (c(), 
                                _(n, {
                                    key: 0,
                                    label: " ",
                                    prop: "publishTime",
                                    class: "col_13w100"
                                }, {
                                    default: a(() => [ s(R, {
                                        modelValue: e(l).publishTime,
                                        "onUpdate:modelValue": u[1] || (u[1] = i => e(l).publishTime = i),
                                        "value-format": "YYYY-MM-DD HH:mm:ss",
                                        type: "datetime",
                                        placeholder: "请选择发布时间",
                                        "disabled-date": G,
                                        "prefix-icon": e(E),
                                        disabled: e(b) === "publishSetting" && (e(l).publishType == 1 || e(v) == 3 || e(v) == 4)
                                    }, null, 8, [ "modelValue", "prefix-icon", "disabled" ]) ]),
                                    _: 1
                                })) : D("", !0) ]),
                                _: 1
                            }), s(o, {
                                span: 11
                            }, {
                                default: a(() => [ s(n, {
                                    label: "完成方式",
                                    prop: "completeType"
                                }, {
                                    default: a(() => [ s(h, {
                                        modelValue: e(l).completeType,
                                        "onUpdate:modelValue": u[2] || (u[2] = i => e(l).completeType = i),
                                        disabled: e(b) === "publishSetting"
                                    }, {
                                        default: a(() => [ Y(s(d, {
                                            value: 1
                                        }, {
                                            default: a(() => [ m("个人完成") ]),
                                            _: 1
                                        }, 512), [ [ re, e(x) == 1 && !e(w).includes(15) || e(x) == 0 ] ]), s(d, {
                                            value: 2
                                        }, {
                                            default: a(() => [ m("分组完成") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), s(o, {
                                span: 13
                            }, {
                                default: a(() => [ e(l).completeType == 2 ? (c(), 
                                _(n, {
                                    key: 0,
                                    label: " ",
                                    prop: "groupPlanId",
                                    class: "col_13w100"
                                }, {
                                    default: a(() => [ s($, {
                                        modelValue: e(l).groupPlanId,
                                        "onUpdate:modelValue": u[3] || (u[3] = i => e(l).groupPlanId = i),
                                        placeholder: "请选择分组方案",
                                        disabled: e(v) == 4 || e(b) === "publishSetting"
                                    }, {
                                        default: a(() => [ (c(!0), oe(ne, null, me(e(P), i => (c(), 
                                        _(Z, {
                                            key: i.id,
                                            label: i.name,
                                            value: i.id
                                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                })) : D("", !0) ]),
                                _: 1
                            }), s(o, {
                                span: 24
                            }, {
                                default: a(() => [ s(n, {
                                    label: "实验方式",
                                    prop: "trialType"
                                }, {
                                    default: a(() => [ s(h, {
                                        modelValue: e(l).trialType,
                                        "onUpdate:modelValue": u[4] || (u[4] = i => e(l).trialType = i),
                                        disabled: e(v) == 4
                                    }, {
                                        default: a(() => [ s(d, {
                                            value: 1
                                        }, {
                                            default: a(() => [ m("自由模式"), I ]),
                                            _: 1
                                        }), s(d, {
                                            value: 2
                                        }, {
                                            default: a(() => [ m("闯关模式"), U ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), s(n, {
                                label: "截止时间",
                                prop: "endTime",
                                class: "w100"
                            }, {
                                default: a(() => [ s(R, {
                                    modelValue: e(l).endTime,
                                    "onUpdate:modelValue": u[5] || (u[5] = i => e(l).endTime = i),
                                    placeholder: "请选择截止时间",
                                    "prefix-icon": e(E),
                                    "disabled-date": Q,
                                    "value-format": "YYYY-MM-DD HH:mm:ss",
                                    type: "datetime",
                                    disabled: e(v) == 4
                                }, null, 8, [ "modelValue", "prefix-icon", "disabled" ]) ]),
                                _: 1
                            }), s(o, {
                                span: 12
                            }, {
                                default: a(() => [ s(n, {
                                    label: "发布范围",
                                    prop: "publishRange"
                                }, {
                                    default: a(() => [ s(h, {
                                        modelValue: e(l).publishRange,
                                        "onUpdate:modelValue": u[6] || (u[6] = i => e(l).publishRange = i),
                                        disabled: e(b) == "publishSetting"
                                    }, {
                                        default: a(() => [ s(d, {
                                            value: 1
                                        }, {
                                            default: a(() => [ m("当前班级") ]),
                                            _: 1
                                        }), s(d, {
                                            value: 2
                                        }, {
                                            default: a(() => [ m("全部班级") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ ue, e(g) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-4f9177c1" ] ]);
});

export {
    Ce as __tla,
    H as default
};