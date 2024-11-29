import {
    T as ce,
    r as o,
    e as _e,
    bB as ve,
    w as P,
    n as be,
    f as ge,
    j as fe,
    o as m,
    c as v,
    a as t,
    C as b,
    l as u,
    t as n,
    k as r,
    v as A,
    A as he,
    F as y,
    y as V,
    m as D,
    d_ as J,
    B as G,
    D as ye,
    a6 as K,
    p as Ve,
    P as Te,
    O as xe,
    ab as Ie,
    ac as ke,
    aQ as we,
    N as De,
    Q as Ee,
    J as Ue,
    R as je,
    S as Be,
    __tla as qe
} from "./index-6c08ea4c.js";

import {
    E as Fe,
    __tla as Se
} from "./el-drawer-fca4d971.js";

import {
    E as Oe,
    __tla as Ye
} from "./el-avatar-76960a98.js";

import {
    _ as Ce,
    __tla as Ne
} from "./Editor-ef737d2a.js";

import {
    __tla as Re
} from "./workItem-20fa3e3c.js";

import {
    c as ze,
    __tla as He
} from "./member-bed692a1.js";

import {
    a as Qe,
    __tla as Me
} from "./file-e038b35d.js";

import {
    __tla as Pe
} from "./project-51c056b9.js";

import {
    a as Ae,
    b as Je,
    __tla as Ge
} from "./trial-c683a75c.js";

import {
    _ as Ke
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Le
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as We
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

let L, Xe = Promise.all([ (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})() ]).then(async () => {
    let g, E, U, j, B, q, F, S, O, Y, C, N;
    g = T => (je("data-v-a1ba1dd9"), T = T(), Be(), T), E = {
        class: "addBug"
    }, U = {
        class: "form_left"
    }, j = g(() => n("span", {
        class: "bugType"
    }, "缺陷", -1)), B = g(() => n("div", {
        class: "el-form-item__label"
    }, [ n("span", {
        style: {
            "margin-left": "15px"
        }
    }, "描述") ], -1)), q = g(() => n("div", {
        class: "form_gutter"
    }, null, -1)), F = {
        class: "form_right"
    }, S = {
        style: {
            width: "calc(100% - 10px)",
            padding: "5px 5px 5px"
        }
    }, O = g(() => n("div", {
        style: {
            width: "100%",
            padding: "0 5px 5px",
            height: "40px",
            color: "#999",
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
        }
    }, " 暂无数据 ", -1)), Y = {
        style: {
            width: "calc(100% - 10px)",
            padding: "0 5px 5px"
        }
    }, C = {
        class: "flex",
        style: {
            "align-items": "center"
        }
    }, N = {
        class: "text-center"
    }, L = Ke({
        __name: "addBugDrawer",
        emits: [ "submitForm" ],
        setup(T, {
            expose: W,
            emit: X
        }) {
            const Z = X, x = ce(), p = o(!1), f = o(null);
            o(null), o(null);
            const $ = o(null), R = o(!1), l = o({
                bugTitle: "",
                solver: "",
                priority: "2",
                importance: "3",
                timer: [],
                status: 0,
                devTaskId: "",
                planStartTime: "",
                planEndTime: "",
                bugDescription: "<p><br></p>"
            }), c = o(""), k = o([]), z = o([]);
            o([]);
            const ee = o([]), I = o([]), ae = o([ {
                label: "低",
                value: "1"
            }, {
                label: "中",
                value: "2"
            }, {
                label: "高",
                value: "3"
            } ]), le = o([ {
                label: "关键",
                value: "1"
            }, {
                label: "重要",
                value: "2"
            }, {
                label: "一般",
                value: "3"
            }, {
                label: "提示",
                value: "4"
            } ]), te = o({
                bugTitle: [ {
                    required: !0,
                    message: "请输入标题",
                    trigger: "blur"
                }, {
                    min: 1,
                    max: 30,
                    message: "长度在 1 到 30 个字符",
                    trigger: "blur"
                } ],
                priority: [ {
                    required: !0,
                    message: "请选择优先级",
                    trigger: [ "blur", "change" ]
                } ],
                status: [ {
                    required: !0,
                    message: "请选择状态",
                    trigger: [ "blur", "change" ]
                } ],
                devTaskId: [ {
                    required: !0,
                    message: "请选择任务",
                    trigger: [ "blur", "change" ]
                } ],
                moduleId: [ {
                    required: !0,
                    message: "请选择模块",
                    trigger: [ "blur", "change" ]
                } ],
                solver: [ {
                    required: !0,
                    message: "请选择负责人",
                    trigger: [ "blur", "change" ]
                } ],
                importance: [ {
                    required: !0,
                    message: "请选择重要程度",
                    trigger: [ "blur", "change" ]
                } ],
                timer: [ {
                    required: !1,
                    validator: (s, a, i) => {
                        let d = [ "2023-01-01", "2023-12-31" ], w = a && a.length > 0 ? new Date(new Date(a[0]).setHours(0, 0, 0, 0)).getTime() : "", _ = a && a.length > 0 ? new Date(new Date(a[1]).setHours(23, 59, 59, 59)).getTime() : "";
                        a && a.length != 0 && (w < new Date(d[0]).getTime() || _ > new Date(d[1]).getTime()) ? i(new Error("当前时间设置与教学时间不符")) : i();
                    },
                    trigger: [ "blur", "change" ]
                } ]
            });
            _e(() => ve()), P(() => p.value, s => {
                s && f.value && f.value.resetFields();
            }), P(c, s => {
                k.value = z.value.filter(a => {
                    var i, d;
                    return ((i = a.userName) == null ? void 0 : i.includes(s)) || ((d = a.number) == null ? void 0 : d.includes(s));
                }), be(() => {
                    var a, i;
                    (a = document.getElementById("fo1")) == null || a.focus(), (i = document.getElementById("fo")) == null || i.focus();
                });
            });
            const re = () => {}, ue = s => {
                s || (c.value = "");
            }, se = () => {
                f.value.validate(s => {
                    s && (l.value.timer && l.value.timer.length > 0 ? (l.value.planStartTime = l.value.timer[0] ? K(l.value.timer[0] + " 00:00:00").valueOf() : "", 
                    l.value.planEndTime = l.value.timer[1] ? K(l.value.timer[1] + " 23:59:59").valueOf() : "") : (l.value.planStartTime = "", 
                    l.value.planEndTime = ""), Ae({
                        projectId: x.params.projectId,
                        testTaskId: "",
                        ...l.value
                    }).then(a => {
                        p.value = !1, Z("submitForm", l.value);
                    }));
                });
            }, H = () => {
                Ve().confirm("您确定要关闭新建缺陷吗？", "提示").then(() => oe()).catch(() => {});
            }, oe = () => {
                f.value.resetFields(), p.value = !1, l.value = {
                    bugTitle: "",
                    solver: "",
                    priority: "2",
                    importance: "3",
                    timer: [],
                    status: 0,
                    devTaskId: "",
                    planStartTime: "",
                    planEndTime: "",
                    bugDescription: "<p><br></p>"
                }, I.value = [];
            };
            return ge(() => {}), W({
                openDrawer: () => {
                    p.value = !0, ze({
                        projectId: x.params.projectId,
                        groupId: x.params.groupId
                    }).then(s => {
                        z.value = s || [], k.value = s || [];
                    }), Je({
                        projectId: x.params.projectId,
                        type: 5
                    }).then(s => {
                        I.value.length = 0;
                        for (const a of s) I.value.push({
                            value: a.id,
                            label: a.name
                        });
                    }), l.value.timer = [], R.value = !1;
                }
            }), (s, a) => {
                const i = Te, d = xe, w = Ce, _ = Ie, h = ke, Q = we, de = Oe, ne = De, ie = Ee, M = Ue, me = Fe, pe = fe("trim");
                return m(), v("div", E, [ t(p) ? (m(), b(me, {
                    key: 0,
                    modelValue: t(p),
                    "onUpdate:modelValue": a[10] || (a[10] = e => D(p) ? p.value = e : null),
                    title: "新建缺陷",
                    "before-close": H,
                    "close-on-click-modal": !1,
                    size: "900"
                }, {
                    footer: u(() => [ n("div", N, [ r(M, {
                        type: "default",
                        onClick: H
                    }, {
                        default: u(() => [ A("取消") ]),
                        _: 1
                    }), r(M, {
                        type: "primary",
                        onClick: se
                    }, {
                        default: u(() => [ A("保存") ]),
                        _: 1
                    }) ]) ]),
                    default: u(() => [ r(ie, {
                        ref_key: "formRef",
                        ref: f,
                        "label-width": "90px",
                        "label-position": "right",
                        model: t(l),
                        rules: t(te),
                        size: "large",
                        class: "resourceForm"
                    }, {
                        default: u(() => [ n("div", U, [ r(d, {
                            label: "标题",
                            prop: "bugTitle"
                        }, {
                            default: u(() => [ he(r(i, {
                                modelValue: t(l).bugTitle,
                                "onUpdate:modelValue": a[0] || (a[0] = e => t(l).bugTitle = e),
                                placeholder: "请输入缺陷标题",
                                maxlength: "30",
                                class: "neu",
                                "label-width": "50"
                            }, null, 8, [ "modelValue" ]), [ [ pe ] ]) ]),
                            _: 1
                        }), r(d, {
                            label: "类型",
                            prop: ""
                        }, {
                            default: u(() => [ j ]),
                            _: 1
                        }), r(d, {
                            label: "",
                            prop: "bugDescription",
                            "label-width": "35"
                        }, {
                            default: u(() => [ B, r(w, {
                                modelValue: t(l).bugDescription,
                                "onUpdate:modelValue": a[1] || (a[1] = e => t(l).bugDescription = e),
                                placeholder: `\u3010\u6B65\u9AA4\u3011:\u6309\u7167\u7279\u5B9A\u6D4B\u8BD5\u6B65\u9AA4\u6267\u884C\u6210\u679C\u7269<br>\u3010\u7ED3\u679C\u3011:
\u6D4B\u8BD5\u6B65\u9AA4\u6267\u884C\u540E\u4EA7\u751F\u7684\u7ED3\u679C<br>\u3010\u671F\u671B\u3011: \u6309\u7167\u9700\u6C42\u548C\u4EFB\u52A1\u4EE5\u53CA\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u9884\u671F\u4EA7\u751F\u7684\u6B63\u786E\u7684\u7ED3\u679C`,
                                height: "400px",
                                onOnfocus: re,
                                onEditorBlur: s.handelOnBlur
                            }, null, 8, [ "modelValue", "onEditorBlur" ]) ]),
                            _: 1
                        }) ]), q, n("div", F, [ r(d, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: t(l).status,
                                "onUpdate:modelValue": a[2] || (a[2] = e => t(l).status = e),
                                placeholder: "请选择状态",
                                class: "neu",
                                disabled: ""
                            }, {
                                default: u(() => [ (m(!0), v(y, null, V(t(ee), e => (m(), 
                                b(_, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)), r(_, {
                                    value: 0,
                                    label: "未开始"
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "关联任务",
                            prop: "devTaskId"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: t(l).devTaskId,
                                "onUpdate:modelValue": a[3] || (a[3] = e => t(l).devTaskId = e),
                                placeholder: "请选择",
                                class: "neu"
                            }, {
                                default: u(() => [ (m(!0), v(y, null, V(t(I), e => (m(), 
                                b(_, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "负责人",
                            prop: "solver"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: t(l).solver,
                                "onUpdate:modelValue": a[6] || (a[6] = e => t(l).solver = e),
                                placeholder: "请指派负责人",
                                class: "neu",
                                ref_key: "userSelectRef",
                                ref: $,
                                onVisibleChange: ue
                            }, {
                                empty: u(() => [ n("div", S, [ r(i, {
                                    modelValue: t(c),
                                    "onUpdate:modelValue": a[4] || (a[4] = e => D(c) ? c.value = e : null),
                                    placeholder: "输入搜索成员姓名",
                                    name: "search",
                                    class: "search-input",
                                    id: "fo",
                                    clearable: ""
                                }, {
                                    suffix: u(() => [ r(Q, {
                                        style: {
                                            cursor: "pointer"
                                        }
                                    }, {
                                        default: u(() => [ r(t(J)) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), O ]) ]),
                                default: u(() => [ n("div", Y, [ r(i, {
                                    modelValue: t(c),
                                    "onUpdate:modelValue": a[5] || (a[5] = e => D(c) ? c.value = e : null),
                                    placeholder: "输入搜索成员姓名",
                                    name: "search",
                                    class: "search-input",
                                    id: "fo1",
                                    clearable: ""
                                }, {
                                    suffix: u(() => [ r(Q, {
                                        style: {
                                            cursor: "pointer"
                                        }
                                    }, {
                                        default: u(() => [ r(t(J)) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]), (m(!0), v(y, null, V(t(k), e => (m(), 
                                b(_, {
                                    key: e.userId,
                                    label: e.userName,
                                    value: e.userId
                                }, {
                                    default: u(() => [ n("span", C, [ r(de, {
                                        src: t(Qe)(e.avatar),
                                        size: 24,
                                        class: "mr-10px"
                                    }, null, 8, [ "src" ]), n("span", null, G(e.userName), 1), n("span", null, "（" + G(e.number) + "）", 1) ]) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "优先级",
                            prop: "priority"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: t(l).priority,
                                "onUpdate:modelValue": a[7] || (a[7] = e => t(l).priority = e),
                                placeholder: "请选择优先级",
                                class: "neu"
                            }, {
                                default: u(() => [ (m(!0), v(y, null, V(t(ae), e => (m(), 
                                b(_, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "重要程度",
                            prop: "importance"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: t(l).importance,
                                "onUpdate:modelValue": a[8] || (a[8] = e => t(l).importance = e),
                                placeholder: "请选择重要程度",
                                class: "neu"
                            }, {
                                default: u(() => [ (m(!0), v(y, null, V(t(le), e => (m(), 
                                b(_, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            prop: "",
                            label: "计划时间"
                        }, {
                            default: u(() => [ r(ne, {
                                modelValue: t(l).timer,
                                "onUpdate:modelValue": a[9] || (a[9] = e => t(l).timer = e),
                                type: "daterange",
                                "range-separator": "至",
                                "start-placeholder": "开始日期",
                                disabled: t(R),
                                "value-format": "YYYY-MM-DD",
                                "end-placeholder": "结束日期"
                            }, null, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }) ]) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ])) : ye("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a1ba1dd9" ] ]);
});

export {
    Xe as __tla,
    L as default
};