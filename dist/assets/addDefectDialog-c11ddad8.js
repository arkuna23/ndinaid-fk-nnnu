import {
    a0 as ve,
    r as n,
    T as fe,
    U as H,
    w as ge,
    n as be,
    f as he,
    o as _,
    c as k,
    k as l,
    l as s,
    v as J,
    a as r,
    t as m,
    C as U,
    D as ye,
    F as L,
    y as A,
    m as Y,
    d_ as G,
    B as K,
    a6 as V,
    P as Ve,
    O as xe,
    ab as Te,
    ac as Ie,
    aQ as De,
    N as ke,
    Q as Ue,
    J as Ye,
    aU as je,
    R as Ee,
    S as qe,
    __tla as Me
} from "./index-6c08ea4c.js";

import {
    E as Se,
    __tla as we
} from "./el-avatar-76960a98.js";

import {
    _ as Ce,
    __tla as Oe
} from "./Editor-ef737d2a.js";

import {
    d as ze,
    a as Ne,
    u as Re,
    b as Be,
    __tla as Fe
} from "./trial-c683a75c.js";

import {
    a as Qe,
    __tla as Pe
} from "./file-e038b35d.js";

import {
    __tla as He
} from "./project-51c056b9.js";

import {
    c as Je,
    __tla as Le
} from "./member-bed692a1.js";

import {
    _ as Ae
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ge
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Ke
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

let W, We = Promise.all([ (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})() ]).then(async () => {
    let g, j, E, q, M, S, w, C, O, z, N, R;
    g = v => (Ee("data-v-7f02dfa6"), v = v(), qe(), v), j = {
        class: "defectDialog"
    }, E = {
        class: "formLeft"
    }, q = g(() => m("span", {
        class: "tag"
    }, "缺陷", -1)), M = {
        class: "trialDescribe"
    }, S = {
        class: "wangEditor"
    }, w = g(() => m("div", {
        class: "mid"
    }, null, -1)), C = {
        class: "formRight"
    }, O = {
        style: {
            width: "calc(100% - 10px)",
            padding: "5px 5px 5px"
        }
    }, z = g(() => m("div", {
        style: {
            width: "100%",
            padding: "0 5px 5px",
            height: "40px",
            color: "#999",
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
        }
    }, " 暂无数据", -1)), N = {
        style: {
            width: "calc(100% - 10px)",
            padding: "0 5px 5px"
        }
    }, R = {
        class: "flex",
        style: {
            "align-items": "center"
        }
    }, W = Ae({
        __name: "addDefectDialog",
        props: {
            _params: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "increment" ],
        setup(v, {
            expose: X,
            emit: Z
        }) {
            ve(v);
            const x = n("新建缺陷"), T = n([]), B = n([]), p = n(""), b = fe(), h = n(null), $ = n(`\u3010\u6B65\u9AA4\u3011: \u6309\u7167\u7279\u5B9A\u6D4B\u8BD5\u6B65\u9AA4\u6267\u884C\u6210\u679C\u7269<br><br>\u3010\u7ED3\u679C\u3011:
  \u6D4B\u8BD5\u6B65\u9AA4\u6267\u884C\u540E\u4EA7\u751F\u7684\u7ED3\u679C<br><br>\u3010\u671F\u671B\u3011: \u6309\u7167\u9700\u6C42\u548C\u4EFB\u52A1\u53CA\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u9884\u671F\u4EA7\u751F\u7684\u6B63\u786E\u7ED3\u679C`), c = n(!1), I = n(!1), F = n(!1), ee = Z, ae = () => {
                var u;
                e.bugDescription = "", (u = h.value) == null || u.resetFields(), 
                y.value = [], le.value = [], ee("increment");
            }, e = H({
                bugTitle: "",
                bugDescription: "",
                status: "",
                solver: "",
                devTaskId: "",
                priority: 2,
                importance: 3,
                time: [],
                planStartTime: "",
                planEndTime: ""
            }), D = n([]), le = n([]), y = n([]), te = () => {
                ze({
                    id: D.value.id
                }).then(u => {
                    Object.assign(e, u), e.planStartTime ? e.time[0] = V(e.planStartTime).format("YYYY-MM-DD") : e.time[0] = "", 
                    e.planEndTime ? e.time[1] = V(e.planEndTime).format("YYYY-MM-DD") : e.time[1] = "";
                });
            }, re = () => {
                e.time = [], F.value = !1;
            }, se = () => {
                var u;
                e.time && e.time.length > 0 ? (e.planStartTime = e.time[0] ? V(e.time[0] + " 00:00:00").valueOf() : "", 
                e.planEndTime = e.time[1] ? V(e.time[1] + " 23:59:59").valueOf() : "") : (e.planStartTime = "", 
                e.planEndTime = ""), (u = h.value) == null || u.validate(async a => {
                    a && (x.value == "新建缺陷" ? Ne({
                        ...e,
                        projectId: b.params.projectId,
                        testTaskId: D.value.id
                    }).then(d => {
                        c.value = !1;
                    }) : Re({
                        ...e
                    }).then(d => {
                        c.value = !1;
                    }));
                });
            }, ue = () => {
                Be({
                    projectId: b.params.projectId,
                    type: 5
                }).then(u => {
                    y.value.length = 0;
                    for (const a of u) y.value.push({
                        value: a.id,
                        label: a.name
                    });
                });
            }, de = u => {
                Je({
                    projectId: b.params.projectId,
                    groupId: b.params.groupId
                }).then(a => {
                    B.value = a || [], T.value = a || [];
                });
            };
            ge(p, u => {
                T.value = B.value.filter(a => {
                    var d, i;
                    return ((d = a.number) == null ? void 0 : d.includes(u)) || ((i = a.userName) == null ? void 0 : i.includes(u));
                }), be(() => {
                    var a, d;
                    (a = document.getElementById("fo")) == null || a.focus(), (d = document.getElementById("fo2")) == null || d.focus();
                });
            });
            const oe = u => {
                u || (p.value = "");
            }, ie = H({
                bugTitle: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请输入标题"
                }, {
                    max: 100,
                    message: "标题长度应小于100字",
                    trigger: [ "blur", "change" ]
                } ],
                status: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请选择状态"
                } ],
                modelId: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请选择选择模块"
                } ],
                devTaskId: [ {
                    required: !0,
                    trigger: [ "blur" ],
                    message: "请选择关联任务"
                } ],
                solver: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请选择负责人"
                } ],
                priority: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请选择优先级"
                } ],
                importance: [ {
                    required: !0,
                    trigger: [ "blur", "change" ],
                    message: "请选择重要程度"
                } ]
            });
            return he(() => {}), X({
                openDialog: (u, a) => {
                    var d;
                    c.value = !0, x.value = a, D.value = u, a !== "新建缺陷" ? (te(), 
                    I.value = !1) : ((d = h.value) == null || d.resetFields(), e.status = 0, 
                    I.value = !0, re()), ue(), de();
                }
            }), (u, a) => {
                const d = Ve, i = xe, ne = Ce, o = Te, f = Ie, Q = De, me = Se, pe = ke, ce = Ue, P = Ye, _e = je;
                return _(), k("div", j, [ l(_e, {
                    title: r(x),
                    modelValue: r(c),
                    "onUpdate:modelValue": a[11] || (a[11] = t => Y(c) ? c.value = t : null),
                    onClose: ae
                }, {
                    footer: s(() => [ l(P, {
                        onClick: a[10] || (a[10] = t => c.value = !1)
                    }, {
                        default: s(() => [ J("取消") ]),
                        _: 1
                    }), l(P, {
                        type: "primary",
                        onClick: se
                    }, {
                        default: s(() => [ J("保存") ]),
                        _: 1
                    }) ]),
                    default: s(() => [ l(ce, {
                        model: r(e),
                        ref_key: "formRef",
                        ref: h,
                        rules: r(ie),
                        "label-width": "90px",
                        inline: !1,
                        size: "large",
                        class: "fromModel neu"
                    }, {
                        default: s(() => [ m("div", E, [ l(i, {
                            label: "标题",
                            prop: "bugTitle"
                        }, {
                            default: s(() => [ l(d, {
                                modelValue: r(e).bugTitle,
                                "onUpdate:modelValue": a[0] || (a[0] = t => r(e).bugTitle = t),
                                maxlength: "100",
                                class: "neu",
                                placeholder: "请输入缺陷标题"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            label: "类型"
                        }, {
                            default: s(() => [ q ]),
                            _: 1
                        }), m("div", M, [ l(i, {
                            label: "描述",
                            prop: "bugDescription"
                        }), m("div", S, [ r(c) ? (_(), U(ne, {
                            key: 0,
                            editorHeight: "200px",
                            maxlength: "5000",
                            modelValue: r(e).bugDescription,
                            "onUpdate:modelValue": a[1] || (a[1] = t => r(e).bugDescription = t),
                            placeholder: r($),
                            style: {
                                "z-index": "99"
                            },
                            height: "260px"
                        }, null, 8, [ "modelValue", "placeholder" ])) : ye("", !0) ]) ]) ]), w, m("div", C, [ l(i, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: s(() => [ l(f, {
                                modelValue: r(e).status,
                                "onUpdate:modelValue": a[2] || (a[2] = t => r(e).status = t),
                                placeholder: "请选择",
                                class: "neu",
                                disabled: r(I)
                            }, {
                                default: s(() => [ l(o, {
                                    label: "未开始",
                                    value: 0
                                }), l(o, {
                                    label: "进行中",
                                    value: 1
                                }), l(o, {
                                    label: "已解决",
                                    value: 3
                                }), l(o, {
                                    label: "已拒绝",
                                    value: 4
                                }), l(o, {
                                    label: "已关闭",
                                    value: 5
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), l(i, {
                            label: "关联任务",
                            prop: "devTaskId"
                        }, {
                            default: s(() => [ l(f, {
                                modelValue: r(e).devTaskId,
                                "onUpdate:modelValue": a[3] || (a[3] = t => r(e).devTaskId = t),
                                placeholder: "请选择",
                                class: "neu"
                            }, {
                                default: s(() => [ (_(!0), k(L, null, A(r(y), t => (_(), 
                                U(o, {
                                    key: t.value,
                                    label: t.label,
                                    value: t.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            label: "负责人",
                            prop: "solver"
                        }, {
                            default: s(() => [ l(f, {
                                modelValue: r(e).solver,
                                "onUpdate:modelValue": a[6] || (a[6] = t => r(e).solver = t),
                                placeholder: "请指派负责人",
                                class: "neu",
                                ref: "userSelectRef",
                                onVisibleChange: oe
                            }, {
                                empty: s(() => [ m("div", O, [ l(d, {
                                    modelValue: r(p),
                                    "onUpdate:modelValue": a[4] || (a[4] = t => Y(p) ? p.value = t : null),
                                    placeholder: "输入搜索成员姓名",
                                    name: "search",
                                    class: "search-input",
                                    id: "fo"
                                }, {
                                    suffix: s(() => [ l(Q, {
                                        style: {
                                            cursor: "pointer"
                                        }
                                    }, {
                                        default: s(() => [ l(r(G)) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), z ]) ]),
                                default: s(() => [ m("div", N, [ l(d, {
                                    modelValue: r(p),
                                    "onUpdate:modelValue": a[5] || (a[5] = t => Y(p) ? p.value = t : null),
                                    placeholder: "输入搜索成员姓名",
                                    name: "search",
                                    class: "search-input",
                                    id: "fo2"
                                }, {
                                    suffix: s(() => [ l(Q, {
                                        style: {
                                            cursor: "pointer"
                                        }
                                    }, {
                                        default: s(() => [ l(r(G)) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]), (_(!0), k(L, null, A(r(T), t => (_(), 
                                U(o, {
                                    key: t.userId,
                                    label: t.userName,
                                    value: t.userId
                                }, {
                                    default: s(() => [ m("span", R, [ l(me, {
                                        src: r(Qe)(t.avatar),
                                        size: 24,
                                        class: "mr-1"
                                    }, null, 8, [ "src" ]), m("span", null, K(t.userName), 1), m("span", null, "（" + K(t.number) + "）", 1) ]) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            label: "优先级",
                            prop: "priority"
                        }, {
                            default: s(() => [ l(f, {
                                modelValue: r(e).priority,
                                "onUpdate:modelValue": a[7] || (a[7] = t => r(e).priority = t),
                                placeholder: "请选择",
                                class: "neu"
                            }, {
                                default: s(() => [ l(o, {
                                    label: "中",
                                    value: 2
                                }), l(o, {
                                    label: "低",
                                    value: 1
                                }), l(o, {
                                    label: "高",
                                    value: 3
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            label: "重要程度",
                            prop: "importance"
                        }, {
                            default: s(() => [ l(f, {
                                modelValue: r(e).importance,
                                "onUpdate:modelValue": a[8] || (a[8] = t => r(e).importance = t),
                                placeholder: "请选择",
                                class: "neu"
                            }, {
                                default: s(() => [ l(o, {
                                    label: "关键",
                                    value: 1
                                }), l(o, {
                                    label: "重要",
                                    value: 2
                                }), l(o, {
                                    label: "一般",
                                    value: 3
                                }), l(o, {
                                    label: "提示",
                                    value: 4
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(i, {
                            label: "计划时间",
                            prop: "time"
                        }, {
                            default: s(() => [ l(pe, {
                                class: "neu",
                                disabled: r(F),
                                modelValue: r(e).time,
                                "onUpdate:modelValue": a[9] || (a[9] = t => r(e).time = t),
                                type: "daterange",
                                "range-separator": "至",
                                "start-placeholder": "开始时间",
                                "end-placeholder": "结束时间",
                                "value-format": "YYYY-MM-DD",
                                size: "large"
                            }, null, 8, [ "disabled", "modelValue" ]) ]),
                            _: 1
                        }) ]) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-7f02dfa6" ] ]);
});

export {
    We as __tla,
    W as default
};