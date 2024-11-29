import {
    h as oa,
    r as c,
    T as da,
    U as E,
    f as pa,
    w as ca,
    n as He,
    o as v,
    c as T,
    k as l,
    l as n,
    t as e,
    C as Me,
    v as N,
    F as z,
    B as d,
    z as R,
    a as u,
    d_ as Pe,
    y as qe,
    H as ma,
    E as Je,
    p as _a,
    aQ as va,
    P as fa,
    ab as ya,
    ac as ga,
    O as ha,
    Q as Ia,
    ad as wa,
    ae as xa,
    J as ba,
    R as ka,
    S as Ta,
    __tla as Na
} from "./index-6c08ea4c.js";

import {
    E as Va,
    __tla as La
} from "./el-drawer-fca4d971.js";

import {
    E as Ca,
    __tla as Ba
} from "./el-link-8197297a.js";

import {
    _ as Ra,
    __tla as Da
} from "./index-71666e05.js";

import {
    E as Sa,
    __tla as ja
} from "./el-avatar-76960a98.js";

import {
    l as m
} from "./taskAllocationList-57d50b2e.js";

import {
    c as Oe,
    S as Fa,
    __tla as Ua
} from "./trial-c683a75c.js";

import {
    __tla as Ea
} from "./workItem-20fa3e3c.js";

import za, {
    __tla as Ha
} from "./addDefectDialog-c11ddad8.js";

import {
    a as Ma,
    __tla as Pa
} from "./file-e038b35d.js";

import {
    c as qa,
    __tla as Ja
} from "./member-bed692a1.js";

import {
    e as Oa,
    __tla as Qa
} from "./task-be0f4a51.js";

import {
    _ as Ga
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ka
} from "./Editor-ef737d2a.js";

import {
    __tla as Wa
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Xa
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Ya
} from "./project-51c056b9.js";

let Qe, Za = Promise.all([ (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})(), (() => {
    try {
        return Xa;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})() ]).then(async () => {
    let i, H, M, P, q, J, O, Q, G, K, W, X, Y, Z, $, A, ee, ae, te, le, se, re, ne, ue, ie, oe, de, pe, ce, me, _e, ve, fe, ye, ge, he, Ie, we, xe, be, ke;
    i = I => (ka("data-v-d91854e4"), I = I(), Ta(), I), H = {
        class: "trialDrawer"
    }, M = i(() => e("div", {
        class: "neu-flex",
        style: {
            "align-items": "center"
        }
    }, [ e("span", null, "测试用例执行") ], -1)), P = {
        class: "content"
    }, q = {
        class: "drawerList"
    }, J = i(() => e("span", null, "标题：", -1)), O = {
        class: "taskDescribe"
    }, Q = i(() => e("span", null, "描述：", -1)), G = [ "innerHTML" ], K = i(() => e("span", null, "模块：", -1)), 
    W = {
        class: "tag1"
    }, X = {
        class: "tagList"
    }, Y = i(() => e("span", null, "优先级：", -1)), Z = i(() => e("span", null, "重要程度：", -1)), 
    $ = i(() => e("span", null, "工时：", -1)), A = i(() => e("span", null, "负责人：", -1)), 
    ee = {
        style: {
            width: "calc(100% - 10px)",
            padding: "5px 5px 5px"
        }
    }, ae = i(() => e("div", {
        style: {
            width: "100%",
            padding: "0 5px 5px",
            height: "40px",
            color: "#999",
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
        }
    }, " 暂无数据 ", -1)), te = {
        style: {
            width: "calc(100% - 10px)",
            padding: "0 5px 5px"
        }
    }, le = {
        class: "flex",
        style: {
            "align-items": "center"
        }
    }, se = i(() => e("span", null, "前置条件：", -1)), re = {
        class: "steptList"
    }, ne = i(() => e("div", {
        style: {
            "min-width": "80px",
            "text-align": "right"
        }
    }, "步骤：", -1)), ue = {
        style: {
            "min-width": "80%"
        }
    }, ie = {
        class: "top"
    }, oe = i(() => e("span", null, "描述", -1)), de = {
        style: {
            "margin-top": "10px"
        }
    }, pe = {
        style: {
            "font-weight": "normal"
        }
    }, ce = {
        class: "top"
    }, me = i(() => e("span", null, "预期结果", -1)), _e = {
        style: {
            "margin-top": "10px"
        }
    }, ve = {
        style: {
            "font-weight": "normal"
        }
    }, fe = {
        class: "indexBtn"
    }, ye = {
        class: "drawerList",
        style: {
            "margin-top": "24px"
        }
    }, ge = {
        class: "tag1"
    }, he = i(() => e("span", {
        class: "star"
    }, "*", -1)), Ie = i(() => e("span", null, "执行结果：", -1)), we = {
        class: "selectCss"
    }, xe = {
        class: "drawerTable"
    }, be = {
        class: "data-empty"
    }, ke = {
        class: "flex justify-center"
    }, Qe = Ga({
        __name: "addDrawerDialog",
        props: {
            previewFlag: {
                type: Boolean,
                default: !1
            },
            canEditUserId: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "increment" ],
        setup(I, {
            expose: Ge,
            emit: Ke
        }) {
            oa();
            const w = I, D = c([]), S = c([]), f = c(""), y = da(), x = c(), V = c(), o = c(), j = c(), r = E({
                userId: "",
                tastTestResult: "",
                nickName: ""
            }), L = E({
                projectId: "",
                groupId: "",
                arrangementId: ""
            }), We = Ke, g = c(!1), Xe = async t => {
                await Oe({
                    taskId: t.id,
                    groupId: y.params.groupId
                }).then(a => {
                    o.value = a, r.userId = a.taskLeaderId ?? "", r.tastTestResult = a.resultStatus || "", 
                    r.nickName = a.taskLeaderName ?? "";
                });
            }, Ye = () => {
                var t;
                (t = V.value) == null || t.clearValidate();
            };
            pa(() => {});
            const F = () => {
                w.previewFlag ? Te() : Je.confirm("请确定是否关闭？", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    title: "提示"
                }).then(() => {
                    Te();
                });
            }, Te = () => {
                r.userId = "", r.tastTestResult = "", r.nickName = "", Ne(), He(() => {
                    var t;
                    (t = V.value) == null || t.clearValidate(), g.value = !1;
                });
            }, Ne = () => {
                We("increment");
            };
            function Ze() {
                var t;
                (t = V.value) == null || t.validate(async a => {
                    a && Je.confirm("请确定是否保存？", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        title: "提示"
                    }).then(async () => {
                        await Oa({
                            projectId: y.params.projectId,
                            groupId: y.params.groupId,
                            headers: [ {
                                taskId: x.value.id,
                                userId: r == null ? void 0 : r.userId
                            } ]
                        }), await Fa({
                            taskId: x.value.id,
                            resultStatus: r == null ? void 0 : r.tastTestResult,
                            userId: r == null ? void 0 : r.userId
                        }), Ne(), g.value = !1, _a().success("保存成功");
                    });
                });
            }
            const $e = () => {
                j.value.openDialog(x.value, "新建缺陷");
            }, Ae = t => {
                qa({
                    projectId: y.params.projectId,
                    groupId: y.params.groupId
                }).then(a => {
                    S.value = a || [], D.value = a || [], t && Ve(t);
                });
            };
            ca(f, t => {
                D.value = S.value.filter(a => {
                    var p, b;
                    return ((p = a.number) == null ? void 0 : p.includes(t)) || ((b = a.userName) == null ? void 0 : b.includes(t));
                }), He(() => {
                    var a, p;
                    (a = document.getElementById("fo1")) == null || a.focus(), (p = document.getElementById("fo")) == null || p.focus();
                });
            });
            const ea = t => {
                t || (f.value = "");
            }, Ve = t => {
                r.nickName = S.value.find(a => a.userId === t).userName;
            }, aa = E({
                tastTestResult: [ {
                    required: !0,
                    trigger: [ "blur" ],
                    message: "请选择执行结果"
                } ]
            });
            return Ge({
                openDrawer: t => {
                    g.value = !0, x.value = t, L.projectId = t.projectId ?? "", 
                    L.groupId = t.groupId ?? "", L.arrangementId = t.arrangementId ?? "", 
                    Xe(t), Ae(r.userId);
                }
            }), (t, a) => {
                const p = va, b = fa, ta = Sa, U = ya, Le = ga, la = ha, sa = Ia, ra = Ra, h = wa, na = Ca, ua = xa, C = ba, ia = Va;
                return v(), T("div", H, [ l(ia, {
                    modelValue: g.value,
                    "onUpdate:modelValue": a[4] || (a[4] = k => g.value = k),
                    "before-close": F,
                    title: "测试用例执行",
                    size: "50%",
                    "destroy-on-close": ""
                }, {
                    header: n(({}) => [ M ]),
                    footer: n(() => [ e("div", ke, [ w.previewFlag ? (v(), Me(C, {
                        key: 0,
                        type: "default",
                        onClick: F
                    }, {
                        default: n(() => [ N("关闭") ]),
                        _: 1
                    })) : (v(), T(z, {
                        key: 1
                    }, [ l(C, {
                        type: "default",
                        onClick: F
                    }, {
                        default: n(() => [ N("关闭") ]),
                        _: 1
                    }), l(C, {
                        type: "primary",
                        onClick: Ze
                    }, {
                        default: n(() => [ N("保存") ]),
                        _: 1
                    }), l(C, {
                        type: "primary",
                        onClick: $e
                    }, {
                        default: n(() => [ N("新增缺陷") ]),
                        _: 1
                    }) ], 64)) ]) ]),
                    default: n(() => {
                        var k, B, _, Ce, Be, Re, De, Se, je, Fe, Ue;
                        return [ e("div", P, [ e("ul", q, [ e("li", null, [ J, e("span", null, d((k = o.value) == null ? void 0 : k.name), 1) ]), e("li", O, [ Q, e("span", {
                            innerHTML: (B = o.value) == null ? void 0 : B.description
                        }, null, 8, G) ]), e("li", null, [ K, e("span", null, d((_ = o.value) == null ? void 0 : _.taskModuleName), 1) ]), e("li", W, [ e("ul", X, [ e("li", null, [ Y, e("span", {
                            class: R([ "level", "level" + ((Ce = o.value) == null ? void 0 : Ce.priority) ])
                        }, d(u(m).getNameByCode(u(m).levelList, (Be = o.value) == null ? void 0 : Be.priority)), 3) ]), e("li", null, [ Z, e("span", {
                            class: R([ "trialImpoIrtance trialImp", "trialImpoIrtance" + ((Re = o.value) == null ? void 0 : Re.importance) ])
                        }, d(u(m).getNameByCode(u(m).importanceList, (De = o.value) == null ? void 0 : De.importance)), 3) ]), e("li", null, [ $, e("span", null, d((Se = o.value) == null ? void 0 : Se.workHours) + "人时", 1) ]), e("li", null, [ A, e("span", null, [ l(Le, {
                            modelValue: u(r).userId,
                            "onUpdate:modelValue": a[2] || (a[2] = s => u(r).userId = s),
                            placeholder: "请指派负责人",
                            class: "neu",
                            style: {
                                width: "165px"
                            },
                            disabled: w.previewFlag,
                            onChange: Ve,
                            ref: "userSelectRef",
                            onVisibleChange: ea
                        }, {
                            empty: n(() => [ e("div", ee, [ l(b, {
                                modelValue: f.value,
                                "onUpdate:modelValue": a[0] || (a[0] = s => f.value = s),
                                placeholder: "输入搜索成员姓名",
                                name: "search",
                                class: "search-input",
                                id: "fo",
                                clearable: ""
                            }, {
                                suffix: n(() => [ l(p, {
                                    style: {
                                        cursor: "pointer"
                                    }
                                }, {
                                    default: n(() => [ l(u(Pe)) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]), ae ]) ]),
                            default: n(() => [ e("div", te, [ l(b, {
                                modelValue: f.value,
                                "onUpdate:modelValue": a[1] || (a[1] = s => f.value = s),
                                placeholder: "输入搜索成员姓名",
                                name: "search",
                                class: "search-input",
                                id: "fo1",
                                clearable: ""
                            }, {
                                suffix: n(() => [ l(p, {
                                    style: {
                                        cursor: "pointer"
                                    }
                                }, {
                                    default: n(() => [ l(u(Pe)) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]), (v(!0), T(z, null, qe(D.value, s => (v(), 
                            Me(U, {
                                key: s.userId,
                                label: s.userName,
                                value: s.userId
                            }, {
                                default: n(() => [ e("span", le, [ l(ta, {
                                    src: u(Ma)(s.avatar),
                                    size: 24,
                                    class: "mr-1"
                                }, null, 8, [ "src" ]), e("span", null, d(s.userName), 1), e("span", null, "（" + d(s.number) + "）", 1) ]) ]),
                                _: 2
                            }, 1032, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue", "disabled" ]) ]) ]) ]) ]), e("li", null, [ se, e("span", null, d((je = o.value) == null ? void 0 : je.precondition), 1) ]) ]), e("div", re, [ ne, e("div", ue, [ e("ul", null, [ (v(!0), 
                        T(z, null, qe((Fe = o.value) == null ? void 0 : Fe.testStepList, (s, Ee) => (v(), 
                        T("li", {
                            key: s,
                            style: {
                                "list-style": "none"
                            }
                        }, [ e("div", ie, [ oe, e("div", de, [ e("span", pe, d(s.description), 1) ]) ]), e("div", ce, [ me, e("div", _e, [ e("span", ve, d(s.result), 1) ]) ]), e("div", fe, d(Ee + 1), 1) ]))), 128)) ]) ]) ]), l(sa, {
                            model: u(r),
                            ref_key: "formRef",
                            ref: V,
                            rules: u(aa),
                            "label-width": "80px",
                            inline: !1,
                            size: "large"
                        }, {
                            default: n(() => [ e("ul", ye, [ e("li", ge, [ he, Ie, e("span", we, [ l(la, {
                                prop: "tastTestResult"
                            }, {
                                default: n(() => [ l(Le, {
                                    modelValue: u(r).tastTestResult,
                                    "onUpdate:modelValue": a[3] || (a[3] = s => u(r).tastTestResult = s),
                                    disabled: w.previewFlag,
                                    style: {
                                        width: "268px",
                                        "margin-right": "0"
                                    },
                                    placeholder: "请选择执行结果",
                                    class: "neu",
                                    onChange: Ye
                                }, {
                                    default: n(() => [ l(U, {
                                        label: "通过",
                                        value: 2
                                    }), l(U, {
                                        label: "未通过",
                                        value: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue", "disabled" ]) ]),
                                _: 1
                            }) ]) ]) ]) ]),
                            _: 1
                        }, 8, [ "model", "rules" ]) ]), e("div", xe, [ l(ua, {
                            class: "neu-table",
                            data: (Ue = o.value) == null ? void 0 : Ue.bugList,
                            stripe: ""
                        }, {
                            empty: n(() => [ e("div", be, [ l(ra, {
                                msg: "暂无数据"
                            }) ]) ]),
                            default: n(() => [ l(h, {
                                prop: "bugTitle",
                                label: "标题",
                                "min-width": "150",
                                "show-overflow-tooltip": ""
                            }), l(h, {
                                prop: "solverName",
                                label: "处理人",
                                "show-overflow-tooltip": ""
                            }), l(h, {
                                prop: "devTaskName",
                                label: "关联任务",
                                "show-overflow-tooltip": ""
                            }), l(h, {
                                prop: "importance",
                                label: "重要程度",
                                align: "center"
                            }, {
                                default: n(s => [ e("span", {
                                    class: R([ "trialImpoIrtance", "trialImpoIrtance" + s.row.importance ])
                                }, d(u(m).getNameByCode(u(m).importanceList, s.row.importance)), 3) ]),
                                _: 1
                            }), l(h, {
                                prop: "status",
                                label: "状态",
                                align: "center"
                            }, {
                                default: n(s => [ e("span", {
                                    class: R([ "trialStauts", "trialStauts" + s.row.status ])
                                }, d(u(m).getNameByCode(u(m).trialStautsList, s.row.status)), 3) ]),
                                _: 1
                            }), l(h, {
                                "min-width": "100",
                                label: "操作",
                                align: "center"
                            }, {
                                default: n(s => [ l(na, {
                                    underline: !1,
                                    disabled: w.previewFlag,
                                    onClick: ma(Ee => {
                                        return ze = s.row, void j.value.openDialog(ze, "编辑缺陷");
                                        var ze;
                                    }, [ "stop" ]),
                                    style: {
                                        "text-decoration": "none"
                                    },
                                    type: "primary"
                                }, {
                                    default: n(() => [ N("编辑") ]),
                                    _: 2
                                }, 1032, [ "disabled", "onClick" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]) ];
                    }),
                    _: 1
                }, 8, [ "modelValue" ]), l(za, {
                    ref_key: "AddDefectDialogRef",
                    ref: j,
                    onIncrement: a[5] || (a[5] = k => (async B => {
                        await Oe({
                            taskId: B.id,
                            groupId: y.params.groupId
                        }).then(_ => {
                            o.value = _, r.userId = _.taskLeaderId ?? "", r.tastTestResult = _.resultStatus || "", 
                            r.nickName = _.taskLeaderName ?? "", g.value = !0;
                        });
                    })(x.value)),
                    _params: u(L)
                }, null, 8, [ "_params" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-d91854e4" ] ]);
});

export {
    Za as __tla,
    Qe as default
};