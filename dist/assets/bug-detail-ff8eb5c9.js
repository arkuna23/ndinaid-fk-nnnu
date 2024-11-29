import {
    r as i,
    T as qe,
    h as Qe,
    e as U,
    w as fe,
    p as ye,
    n as Ge,
    f as Je,
    j as We,
    o as n,
    c as d,
    a,
    C as g,
    l as s,
    t as u,
    k as t,
    D as I,
    v as b,
    A as w,
    G as he,
    B as _,
    H as $e,
    m as E,
    F as C,
    y as H,
    z,
    d_ as ge,
    a6 as Y,
    _ as Ze,
    K as ea,
    O as aa,
    L as la,
    M as ta,
    s as sa,
    ab as ra,
    ac as ua,
    aQ as na,
    P as ia,
    N as oa,
    Q as da,
    J as pa,
    a9 as ca,
    R as ma,
    S as va,
    __tla as _a
} from "./index-6c08ea4c.js";

import {
    E as fa,
    __tla as ya
} from "./el-drawer-fca4d971.js";

import {
    E as ha,
    __tla as ga
} from "./el-avatar-76960a98.js";

import {
    E as ba,
    a as Ta,
    __tla as ka
} from "./el-collapse-item-c8b76a0a.js";

import {
    _ as xa,
    __tla as Va
} from "./index-71666e05.js";

import {
    _ as wa,
    __tla as Ea
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as S,
    g as be,
    __tla as Da
} from "./dict-c5825220.js";

import {
    a as Ia,
    __tla as Ya
} from "./file-e038b35d.js";

import {
    c as Sa,
    __tla as Pa
} from "./member-bed692a1.js";

import {
    j as Ma,
    __tla as Na
} from "./workItem-20fa3e3c.js";

import {
    u as ja,
    __tla as La
} from "./trial-c683a75c.js";

import {
    _ as Ua
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let Te, Ca = Promise.all([ (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})() ]).then(async () => {
    let T, A, K, O, R, F, X, B, q, Q, G, J, W, $, Z, ee, ae, le, te, se, re, ue, ne;
    T = D => (ma("data-v-fc1d2432"), D = D(), va(), D), A = {
        class: "viewDetail"
    }, K = {
        class: "flex",
        style: {
            "justify-content": "space-between"
        }
    }, O = T(() => u("div", {
        class: "flex"
    }, [ u("span", {
        class: "infoName"
    }, "任务详情") ], -1)), R = T(() => u("span", {
        class: "neu-color-blue"
    }, "退出全屏", -1)), F = [ "innerHTML" ], X = {
        class: "form_left",
        style: {
            width: "65%"
        }
    }, B = {
        class: "neu-ellipse"
    }, q = {
        class: "tabs"
    }, Q = T(() => u("span", null, "全屏", -1)), G = [ "innerHTML" ], J = {
        class: "relation"
    }, W = {
        key: 0
    }, $ = {
        class: "taskItem flex px-2"
    }, Z = {
        class: "nameWrap neu-ellipse"
    }, ee = {
        key: 1
    }, ae = T(() => u("div", {
        class: "form_gutter"
    }, null, -1)), le = {
        class: "form_right"
    }, te = {
        style: {
            width: "calc(100% - 10px)",
            padding: "5px 5px 5px"
        }
    }, se = T(() => u("div", {
        style: {
            width: "100%",
            padding: "0 5px 5px",
            height: "40px",
            color: "#999",
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
        }
    }, " 暂无数据", -1)), re = {
        style: {
            width: "calc(100% - 10px)",
            padding: "0 5px 5px"
        }
    }, ue = {
        class: "flex",
        style: {
            "align-items": "center"
        }
    }, ne = {
        class: "neu-ellipse"
    }, Te = Ua({
        __name: "bug-detail",
        emits: [ "refresh" ],
        setup(D, {
            expose: ke,
            emit: xe
        }) {
            const v = i(""), P = qe(), Ve = xe, we = Qe();
            U(() => we.isStudent);
            const Ee = i(""), f = i(!1), De = i(!1), k = i("description"), M = i([ "关联工作项", "关联用例" ]), x = i(null), Ie = i([ {
                name: "关联工作项",
                data: U(() => e.value.devTasks)
            }, {
                name: "关联用例",
                data: U(() => e.value.testTasks)
            } ]), y = i(!1), Ye = i(""), e = i({
                bugTitle: "",
                moduleName: "",
                priority: "1",
                importance: "1",
                type: "",
                developType: "",
                bugDescription: "",
                manual: "",
                step: "",
                workHours: "",
                precondition: "",
                skillPointList: [],
                fileList: [],
                testStepList: [],
                isAchievement: 1,
                status: "",
                solver: "",
                time: [],
                devTasks: [],
                testTasks: []
            }), Se = i({}), Pe = i({}), Me = i({});
            fe(() => f.value, o => {
                o && x.value && x.value.resetFields();
            });
            const N = () => {
                f.value = !1, e.value.bugDescription = "", k.value = "description", 
                y.value = !1, x.value && x.value.resetFields();
            }, Ne = o => {
                Ma({
                    id: o,
                    groupId: P.params.groupId
                }).then(l => {
                    Object.assign(e.value, l.info), e.value.planStartTime ? e.value.time[0] = Y(e.value.planStartTime).format("YYYY-MM-DD") : e.value.time[0] = "", 
                    e.value.planEndTime ? e.value.time[1] = Y(e.value.planEndTime).format("YYYY-MM-DD") : e.value.time[1] = "", 
                    e.value.devTasks = l.devTasks || [], e.value.testTasks = l.testTasks || [];
                });
            };
            ye();
            const j = i([]), ie = i([]), je = o => {
                o || (v.value = "");
            }, Le = o => {
                Sa({
                    projectId: P.params.projectId,
                    groupId: P.params.groupId
                }).then(l => {
                    ie.value = l || [], j.value = l || [];
                });
            };
            fe(v, o => {
                j.value = ie.value.filter(l => {
                    var p, c;
                    return ((p = l.number) == null ? void 0 : p.includes(o)) || ((c = l.userName) == null ? void 0 : c.includes(o));
                }), Ge(() => {
                    var l, p;
                    (l = document.getElementById("fo")) == null || l.focus(), (p = document.getElementById("fo2")) == null || p.focus();
                });
            });
            const Ue = () => {
                x.value.validate(o => {
                    o && (e.value.time && e.value.time.length > 0 ? (e.value.planStartTime = e.value.time[0] ? Y(e.value.time[0] + " 00:00:00").valueOf() : "", 
                    e.value.planEndTime = e.value.time[1] ? Y(e.value.time[1] + " 23:59:59").valueOf() : "") : (e.value.planStartTime = "", 
                    e.value.planEndTime = ""), ja({
                        ...e.value
                    }).then(l => {
                        ye().success("保存成功"), N(), Ve("refresh");
                    }));
                });
            };
            return Je(() => {}), ke({
                openDrawer: ({
                    id: o,
                    formType: l,
                    user: p,
                    data: c
                }) => {
                    Ye.value = o, f.value = !0, Ee.value = l, Se.value = p, Ne(c.id), 
                    Pe.value = c || {}, Le();
                }
            }), (o, l) => {
                const p = Ze, c = ea, m = aa, Ce = la, oe = ta, de = wa, He = xa, ze = ba, Ae = Ta, Ke = sa, V = ra, pe = ua, ce = na, me = ia, Oe = ha, Re = oa, Fe = da, ve = pa, Xe = fa, L = We("show-tip"), Be = ca;
                return n(), d("div", A, [ a(f) ? (n(), g(Xe, {
                    key: 0,
                    modelValue: a(f),
                    "onUpdate:modelValue": l[9] || (l[9] = r => E(f) ? f.value = r : null),
                    direction: "rtl",
                    "before-close": N,
                    "close-on-click-modal": !1,
                    "show-close": !a(y),
                    size: 800,
                    style: {
                        "z-index": "100000"
                    }
                }, {
                    header: s(({}) => [ u("div", K, [ O, a(y) ? (n(), d("div", {
                        key: 0,
                        onClick: l[0] || (l[0] = r => y.value = !1),
                        class: "neu-pointer mr-2 flex",
                        style: {
                            "align-items": "center"
                        }
                    }, [ t(p, {
                        class: "icon mr-2",
                        icon: "svg-icon:fullScreen"
                    }), R ])) : I("", !0) ]) ]),
                    footer: s(() => [ t(ve, {
                        onClick: N
                    }, {
                        default: s(() => [ b("取 消") ]),
                        _: 1
                    }), t(ve, {
                        type: "primary",
                        onClick: Ue
                    }, {
                        default: s(() => [ b("保存") ]),
                        _: 1
                    }) ]),
                    default: s(() => [ w(u("div", null, [ u("div", {
                        class: "discription",
                        innerHTML: a(e).bugDescription,
                        style: {
                            "white-space": "pre-wrap",
                            "padding-top": "20px"
                        }
                    }, null, 8, F) ], 512), [ [ he, a(y) ] ]), w((n(), g(Fe, {
                        ref_key: "formRef",
                        ref: x,
                        "label-width": "100px",
                        model: a(e),
                        rules: a(Me),
                        size: "large",
                        class: "resourceForm"
                    }, {
                        default: s(() => [ u("div", X, [ t(m, {
                            label: "标题:",
                            prop: "",
                            "label-width": "62px"
                        }, {
                            default: s(() => [ w((n(), d("div", B, [ t(c, {
                                class: "item",
                                effect: "dark",
                                content: a(e).bugTitle,
                                placement: "top-start"
                            }, {
                                default: s(() => [ b(_(a(e).bugTitle), 1) ]),
                                _: 1
                            }, 8, [ "content" ]) ])), [ [ L ] ]) ]),
                            _: 1
                        }), t(m, {
                            label: "类型:",
                            prop: "",
                            "label-width": "62px"
                        }, {
                            default: s(() => [ t(Ce, {
                                type: "success",
                                size: "small"
                            }, {
                                default: s(() => [ b("缺陷") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), u("div", q, [ a(k) === "description" || a(k) === "testDes" ? (n(), 
                        d("div", {
                            key: 0,
                            class: "fulscreen pointer flex",
                            onClick: l[1] || (l[1] = $e(r => y.value = !0, [ "stop" ]))
                        }, [ t(p, {
                            class: "icon mr-2",
                            icon: "svg-icon:fullScreen"
                        }), Q ])) : I("", !0), t(Ke, {
                            modelValue: a(k),
                            "onUpdate:modelValue": l[3] || (l[3] = r => E(k) ? k.value = r : null)
                        }, {
                            default: s(() => [ a(e).type != 6 ? (n(), g(oe, {
                                key: 0,
                                label: "描述",
                                name: "description"
                            }, {
                                default: s(() => [ u("div", {
                                    class: "discription",
                                    innerHTML: a(e).bugDescription,
                                    style: {
                                        "white-space": "pre-wrap"
                                    }
                                }, null, 8, G) ]),
                                _: 1
                            })) : I("", !0), t(oe, {
                                label: "关联",
                                name: "relation"
                            }, {
                                default: s(() => [ u("div", J, [ t(Ae, {
                                    modelValue: a(M),
                                    "onUpdate:modelValue": l[2] || (l[2] = r => E(M) ? M.value = r : null)
                                }, {
                                    default: s(() => [ (n(!0), d(C, null, H(a(Ie), r => (n(), 
                                    g(ze, {
                                        title: r.name,
                                        name: r.name,
                                        key: r.name
                                    }, {
                                        default: s(() => {
                                            var _e;
                                            return [ ((_e = r.data) == null ? void 0 : _e.length) > 0 ? (n(), 
                                            d("div", W, [ (n(!0), d(C, null, H(r.data, h => (n(), 
                                            d("div", {
                                                key: h.id,
                                                class: "neu-flex-space mb-2"
                                            }, [ u("div", $, [ w((n(), d("span", Z, [ t(c, {
                                                class: "item",
                                                effect: "dark",
                                                content: h.name,
                                                placement: "top-start"
                                            }, {
                                                default: s(() => [ b(_(h.name), 1) ]),
                                                _: 2
                                            }, 1032, [ "content" ]) ])), [ [ L ] ]), h.type == 5 ? (n(), 
                                            g(de, {
                                                key: 0,
                                                type: a(S).EXP_TASK_DEVELOP_TYPE,
                                                value: h.developType
                                            }, null, 8, [ "type", "value" ])) : (n(), 
                                            g(de, {
                                                key: 1,
                                                type: a(S).EXP_TASK_TYPE,
                                                value: h.type,
                                                class: z("taskType_" + h.type)
                                            }, null, 8, [ "type", "value", "class" ])) ]) ]))), 128)) ])) : (n(), 
                                            d("div", ee, [ t(He, {
                                                msg: "暂无数据"
                                            }) ])) ];
                                        }),
                                        _: 2
                                    }, 1032, [ "title", "name" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]) ]), ae, u("div", le, [ t(m, {
                            label: "状态",
                            prop: "status",
                            rules: [ {
                                required: !0,
                                message: "请选择状态",
                                trigger: "change"
                            } ]
                        }, {
                            default: s(() => [ t(pe, {
                                modelValue: a(e).status,
                                "onUpdate:modelValue": l[4] || (l[4] = r => a(e).status = r),
                                placeholder: "请选择",
                                class: "neu"
                            }, {
                                default: s(() => [ t(V, {
                                    label: "未开始",
                                    value: 0
                                }), t(V, {
                                    label: "进行中",
                                    value: 1
                                }), t(V, {
                                    label: "已解决",
                                    value: 3
                                }), t(V, {
                                    label: "已拒绝",
                                    value: 4
                                }), t(V, {
                                    label: "已关闭",
                                    value: 5
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(m, {
                            label: "负责人",
                            prop: "solver",
                            rules: [ {
                                required: !0,
                                message: "请选择负责人",
                                trigger: "change"
                            } ]
                        }, {
                            default: s(() => [ t(pe, {
                                modelValue: a(e).solver,
                                "onUpdate:modelValue": l[7] || (l[7] = r => a(e).solver = r),
                                placeholder: "请指派负责人",
                                class: "neu",
                                ref: "userSelectRef",
                                onVisibleChange: je
                            }, {
                                empty: s(() => [ u("div", te, [ t(me, {
                                    modelValue: a(v),
                                    "onUpdate:modelValue": l[5] || (l[5] = r => E(v) ? v.value = r : null),
                                    placeholder: "输入搜索成员姓名",
                                    name: "search",
                                    class: "search-input",
                                    id: "fo"
                                }, {
                                    suffix: s(() => [ t(ce, {
                                        style: {
                                            cursor: "pointer"
                                        }
                                    }, {
                                        default: s(() => [ t(a(ge)) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), se ]) ]),
                                default: s(() => [ u("div", re, [ t(me, {
                                    modelValue: a(v),
                                    "onUpdate:modelValue": l[6] || (l[6] = r => E(v) ? v.value = r : null),
                                    placeholder: "输入搜索成员姓名",
                                    name: "search",
                                    class: "search-input",
                                    id: "fo2"
                                }, {
                                    suffix: s(() => [ t(ce, {
                                        style: {
                                            cursor: "pointer"
                                        }
                                    }, {
                                        default: s(() => [ t(a(ge)) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]), (n(!0), d(C, null, H(a(j), r => (n(), 
                                g(V, {
                                    key: r.userId,
                                    label: r.userName,
                                    value: r.userId
                                }, {
                                    default: s(() => [ u("span", ue, [ t(Oe, {
                                        src: a(Ia)(r.avatar),
                                        size: 24,
                                        class: "mr-1"
                                    }, null, 8, [ "src" ]), u("span", null, _(r.userName), 1), u("span", null, "（" + _(r.number) + "）", 1) ]) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(m, {
                            label: "模块:",
                            prop: "moduleName"
                        }, {
                            default: s(() => [ w((n(), d("div", ne, [ t(c, {
                                class: "item",
                                effect: "dark",
                                content: a(e).moduleName,
                                placement: "top-start"
                            }, {
                                default: s(() => [ b(_(a(e).moduleName), 1) ]),
                                _: 1
                            }, 8, [ "content" ]) ])), [ [ L ] ]) ]),
                            _: 1
                        }), t(m, {
                            label: "优先级:",
                            prop: ""
                        }, {
                            default: s(() => [ u("span", {
                                class: z([ "level neu-level", "neu-level" + a(e).priority ])
                            }, _(a(be)(a(S).EXP_TASK_PRIORITY, a(e).priority)), 3) ]),
                            _: 1
                        }), t(m, {
                            label: "重要程度:",
                            prop: ""
                        }, {
                            default: s(() => [ u("span", {
                                class: z([ "importance", "neu-importance" + a(e).importance ])
                            }, _(a(be)(a(S).EXP_TASK_IMPORTANCE, a(e).importance)), 3) ]),
                            _: 1
                        }), t(m, {
                            label: "预计工时:",
                            prop: ""
                        }, {
                            default: s(() => [ b(_(a(e).workHours || "--") + "人时 ", 1) ]),
                            _: 1
                        }), t(m, {
                            label: "计划时间",
                            prop: "time"
                        }, {
                            default: s(() => [ t(Re, {
                                modelValue: a(e).time,
                                "onUpdate:modelValue": l[8] || (l[8] = r => a(e).time = r),
                                type: "daterange",
                                "range-separator": "至",
                                "start-placeholder": "开始时间",
                                "end-placeholder": "结束时间",
                                "value-format": "YYYY-MM-DD",
                                size: "large",
                                style: {
                                    width: "170px"
                                }
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ he, !a(y) ], [ Be, a(De) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "show-close" ])) : I("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-fc1d2432" ] ]);
});

export {
    Ca as __tla,
    Te as default
};