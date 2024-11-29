import {
    aa as ie,
    p as ne,
    T as ue,
    r as c,
    U as de,
    e as M,
    a as t,
    o as v,
    c as X,
    k as a,
    l as o,
    v as m,
    t as k,
    A as B,
    C as V,
    D as x,
    B as D,
    m as pe,
    dm as me,
    _ as _e,
    q as fe,
    bp as ve,
    bq as ye,
    O as he,
    cK as ge,
    Q as be,
    a8 as we,
    ad as Te,
    ae as Ie,
    J as ke,
    aU as Ve,
    a9 as xe,
    __tla as Se
} from "./index-6c08ea4c.js";

import {
    _ as Ce,
    __tla as Le
} from "./index-1024512a.js";

import {
    c as Ue,
    d as Oe,
    u as Pe,
    __tla as je
} from "./score-b548b686.js";

import {
    c as ze,
    D as S,
    g as H,
    __tla as Ae
} from "./dict-c5825220.js";

import {
    _ as Ee
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as Je
} from "./DeptTag-1be092ce.js";

import {
    __tla as qe
} from "./index-ef4d146e.js";

let Q, Ne = Promise.all([ (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    let C, L, U, O, P;
    C = {
        key: 0
    }, L = {
        class: "top-box",
        style: {
            background: "#fff"
        }
    }, U = {
        class: "main-box"
    }, O = {
        key: 0
    }, P = {
        class: "right btns-box header-btns"
    }, Q = Ee({
        __name: "setting",
        emits: [ "success" ],
        setup(Ke, {
            expose: R,
            emit: Y
        }) {
            const {
                t: F
            } = ie(), g = ne(), b = ue();
            c("");
            const j = c(""), d = c([]), z = c(), w = c(), l = c({
                scoreType: 2,
                isInclude: 1,
                score: 100
            }), y = c({}), _ = c({
                taskStageId: "",
                type: ""
            }), G = de({
                scoreType: [ {
                    required: !0,
                    message: "请选择评分方式",
                    trigger: [ "blur", "change" ]
                } ],
                score: [ {
                    required: !0,
                    message: "请输入项目总分",
                    trigger: [ "blur", "change" ]
                } ]
            }), W = M(() => (d.value || []).filter(e => {
                if (!(_.value.taskStageId && e.taskStageId != _.value.taskStageId || _.value.type && e.type != _.value.type || l.value.isInclude && l.value.isInclude != e.isInclude)) return e;
            })), A = c([]), Z = M(() => [ {
                label: "阶段",
                key: "taskStageId",
                type: "list",
                options: A.value
            }, {
                label: "任务类型",
                key: "type",
                type: "list",
                options: ze(S.EXP_TASK_TYPE)
            } ]), p = c(!1);
            function $(e) {
                _.value = e;
            }
            const ee = async () => {
                try {
                    const e = await Ue({
                        projectId: b.params.projectId
                    });
                    l.value.score = e == null ? void 0 : e.score, l.value.scoreType = e == null ? void 0 : e.scoreType, 
                    j.value = e == null ? void 0 : e.scoreType, d.value = e == null ? void 0 : e.scoreTaskList, 
                    A.value = ((e == null ? void 0 : e.stageList) ?? []).map(r => ({
                        value: r.id,
                        label: r.name
                    })), y.value.scoreTaskList = JSON.parse(JSON.stringify(e.scoreTaskList ?? [])), 
                    y.value.score = e.score;
                } finally {}
            };
            R({
                open: async (e, r) => {
                    p.value = !0, l.value.isInclude = 1, ee();
                }
            });
            const ae = Y, le = async () => {
                var r;
                if (!w || !await w.value.validate()) return;
                let e = 1e3;
                if (l.value.scoreType == 2 && ((r = d.value) == null ? void 0 : r.length) > 0 && (e = d.value.reduce((i, n) => i + (n.isInclude ? 10 * Number(n.score || 0) : 0), 0)), 
                e !== 1e3) return me({
                    title: "提示",
                    message: "当前的计入成绩的任务总和不等于100",
                    type: "warning"
                });
                try {
                    if (await Oe({
                        projectId: b.params.projectId
                    })) if (l.value.scoreType != j.value) await g.confirm("切换评分方式将清空所有已存在的评分数据。这一操作是不可逆的，一旦执行将无法恢复之前的评分记录，您确定执行该操作么？"), 
                    T(); else {
                        let i = !1;
                        if (l.value.scoreType == 1 && y.value.score != l.value.score && (i = !0), 
                        l.value.scoreType == 2) {
                            let n = new Map();
                            y.value.scoreTaskList.forEach(u => {
                                n.set(u.id, u.score);
                            }), d.value.forEach(u => {
                                n.get(u.id) != u.score && (i = !0);
                            });
                        }
                        i ? (await g.confirm("您已调整分数设置，此调整将清空所有已存在的评分数据。这一操作是不可逆的，一旦执行将无法恢复之前的评分记录，您确定执行该操作么？"), 
                        T()) : h();
                    } else T();
                } finally {}
            }, T = async () => {
                await Pe({
                    ...l.value,
                    scoreTaskList: d.value,
                    projectId: b.params.projectId
                }), g.success(F("common.updateSuccess")), h(), ae("success");
            }, h = () => {
                var e;
                (e = z.value) == null || e.resetParams(), p.value = !1;
            };
            return (e, r) => {
                const i = _e, n = fe, u = ve, te = ye, E = he, J = ge, se = be, oe = Ce, q = we, f = Te, re = Ie, N = ke, ce = Ve, K = xe;
                return t(p) ? (v(), X("div", C, [ a(ce, {
                    modelValue: t(p),
                    "onUpdate:modelValue": r[3] || (r[3] = s => pe(p) ? p.value = s : null),
                    title: "评分设置",
                    width: "900",
                    onClose: h,
                    scroll: !0,
                    "max-height": 550
                }, {
                    footer: o(() => [ a(N, {
                        onClick: h
                    }, {
                        default: o(() => [ m("取 消") ]),
                        _: 1
                    }), a(N, {
                        disabled: e.formLoading,
                        type: "primary",
                        onClick: le
                    }, {
                        default: o(() => [ m("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: o(() => [ k("div", L, [ B((v(), V(se, {
                        ref_key: "formRef",
                        ref: w,
                        "label-position": "top",
                        model: t(l),
                        "label-width": "80px",
                        size: "large",
                        style: {
                            "overflow-x": "hidden"
                        },
                        rules: t(G)
                    }, {
                        default: o(() => [ a(E, {
                            label: "评分方式",
                            prop: "scoreType"
                        }, {
                            default: o(() => [ a(te, {
                                modelValue: t(l).scoreType,
                                "onUpdate:modelValue": r[0] || (r[0] = s => t(l).scoreType = s)
                            }, {
                                default: o(() => [ a(u, {
                                    value: 2
                                }, {
                                    default: o(() => [ m("任务评分"), a(n, {
                                        placement: "top-start",
                                        title: "",
                                        width: 300,
                                        trigger: "hover",
                                        content: "任务评分需要对项目中的每个单独计入成绩任务进行详细打分。适合于由多个独立且关键的小任务组成的项目，每个任务都对学习成果有重要影响。"
                                    }, {
                                        reference: o(() => [ a(i, {
                                            icon: "svg-icon:icon-tips",
                                            class: "ml-5px pt-1px",
                                            size: "13"
                                        }) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }), a(u, {
                                    value: 1
                                }, {
                                    default: o(() => [ m("项目评分"), a(n, {
                                        placement: "top-start",
                                        title: "",
                                        width: 300,
                                        trigger: "hover",
                                        content: "项目评分是对整个项目的最终成果进行一次性评估。这种方式适合于综合性质项目，项目结果为一个整体，各个部分紧密相关，难以单独评估。"
                                    }, {
                                        reference: o(() => [ a(i, {
                                            icon: "svg-icon:icon-tips",
                                            class: "ml-5px mt-1px",
                                            size: "13"
                                        }) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(l).scoreType == 1 ? (v(), V(E, {
                            key: 0,
                            label: "项目总分",
                            prop: "score"
                        }, {
                            default: o(() => [ a(J, {
                                modelValue: t(l).score,
                                "onUpdate:modelValue": r[1] || (r[1] = s => t(l).score = s),
                                min: 1,
                                max: 100,
                                step: 1,
                                "step-strictly": "",
                                "controls-position": "right",
                                onChange: e.totalChange,
                                "value-on-clear": 100
                            }, null, 8, [ "modelValue", "onChange" ]) ]),
                            _: 1
                        })) : x("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ K, e.formLoading ] ]) ]), k("div", U, [ t(l).scoreType == 2 ? (v(), 
                    X("div", O, [ a(oe, {
                        ref_key: "ComSearchRef",
                        ref: z,
                        searchList: t(Z),
                        onHandleSearch: $,
                        class: "left",
                        isShowInput: !1
                    }, null, 8, [ "searchList" ]), k("div", P, [ a(q, {
                        modelValue: t(l).isInclude,
                        "onUpdate:modelValue": r[2] || (r[2] = s => t(l).isInclude = s),
                        label: "仅看计入成绩任务",
                        size: "large",
                        "true-label": 1,
                        "false-label": 0
                    }, null, 8, [ "modelValue" ]) ]), B((v(), V(re, {
                        data: t(W),
                        height: "calc(100% - 0px)",
                        onSelectionChange: e.handleSelectionChange
                    }, {
                        default: o(() => [ a(f, {
                            "show-overflow-tooltip": "",
                            label: "任务名称",
                            prop: "name",
                            width: "150"
                        }), a(f, {
                            label: "任务类型",
                            prop: "type",
                            width: "100"
                        }, {
                            default: o(s => [ m(D(t(H)(t(S).EXP_TASK_TYPE, s.row.type)), 1) ]),
                            _: 1
                        }), a(f, {
                            label: "是否提交成果物",
                            prop: "isAchievement",
                            "min-width": "180"
                        }, {
                            default: o(s => [ m(D(t(H)(t(S).COMMON_BOOL, s.row.isAchievement)), 1) ]),
                            _: 1
                        }), a(f, {
                            label: "计入项目成绩",
                            prop: "",
                            "min-width": "180"
                        }, {
                            default: o(({
                                row: s
                            }) => [ a(q, {
                                modelValue: s.isInclude,
                                "onUpdate:modelValue": I => s.isInclude = I,
                                label: "",
                                size: "large",
                                "true-label": 1,
                                "false-label": 0
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                            _: 1
                        }), a(f, {
                            label: "任务总分",
                            prop: "",
                            "min-width": "180"
                        }, {
                            default: o(({
                                row: s
                            }) => [ a(J, {
                                modelValue: s.score,
                                "onUpdate:modelValue": I => s.score = I,
                                min: 0,
                                max: 100,
                                step: 1,
                                "step-strictly": "",
                                "value-on-clear": 0,
                                controls: !1,
                                style: {
                                    width: "120px"
                                }
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data", "onSelectionChange" ])), [ [ K, e.formLoading ] ]) ])) : x("", !0) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ])) : x("", !0);
            };
        }
    }, [ [ "__scopeId", "data-v-a27cc135" ] ]);
});

export {
    Ne as __tla,
    Q as default
};