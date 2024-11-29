import {
    u as me,
    T as ne,
    r as p,
    U as re,
    o as c,
    C as h,
    l as n,
    k as o,
    a as l,
    t,
    z as V,
    c as C,
    D as d,
    v as _,
    m as oe,
    E as H,
    bo as T,
    P as ce,
    O as ie,
    cK as pe,
    bp as de,
    bq as ve,
    Q as ye,
    J as xe,
    aU as fe,
    R as ge,
    S as he,
    __tla as _e
} from "./index-6c08ea4c.js";

import {
    _ as U,
    a as W
} from "./planTeacher-e2d2fd81.js";

import {
    _ as be
} from "./planStudent-ede44d3c.js";

import {
    b as Ne,
    f as ke,
    h as Ie,
    i as X,
    __tla as Ve
} from "./index-d7ee4e02.js";

import {
    _ as Ce
} from "./_plugin-vue_export-helper-1b428a4d.js";

let Y, Te = Promise.all([ (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})() ]).then(async () => {
    let m, P, R, q, w, B, S, J, K, O, j, E, z, D, F;
    m = x => (ge("data-v-a132e77a"), x = x(), he(), x), P = {
        style: {
            display: "flex",
            "justify-content": "space-around"
        }
    }, R = {
        key: 0,
        class: "choosedIcon",
        src: U,
        alt: ""
    }, q = m(() => t("img", {
        class: "planIcon",
        src: W,
        alt: ""
    }, null, -1)), w = m(() => t("div", {
        class: "planTitle"
    }, "教师一键分组", -1)), B = m(() => t("div", {
        class: "planContent"
    }, "一键分组为系统按照规则自动进行小组创建、组长设定，教师可手动局部调整。", -1)), S = {
        key: 0,
        class: "choosedIcon",
        src: U,
        alt: ""
    }, J = m(() => t("img", {
        class: "planIcon",
        src: W,
        alt: ""
    }, null, -1)), K = m(() => t("div", {
        class: "planTitle"
    }, "教师手动分组", -1)), O = m(() => t("div", {
        class: "planContent"
    }, "教师设定项目组数，并为每组分配一个组长，学生可自由选择项目组", -1)), j = {
        key: 0,
        class: "choosedIcon",
        src: U,
        alt: ""
    }, E = m(() => t("img", {
        class: "planIcon",
        src: be,
        alt: ""
    }, null, -1)), z = m(() => t("div", {
        class: "planTitle"
    }, "学生自由组队", -1)), D = m(() => t("div", {
        class: "planContent"
    }, "教师设定项目组数，并为每组分配一个组长，学生可自由选择项目组", -1)), F = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, Y = Ce({
        __name: "planManage",
        emits: [ "tableRefresh" ],
        setup(x, {
            expose: Z,
            emit: $
        }) {
            me();
            const b = ne(), v = p(!1), f = p(""), N = $, e = p({
                name: "",
                type: 1,
                rule: 1,
                maxNum: 1
            }), k = p(), ee = re({
                name: [ {
                    required: !0,
                    message: "分组方案名称不能为空",
                    trigger: "blur"
                }, {
                    max: 30,
                    message: "分组方案名称最多30位字符",
                    trigger: "blur"
                } ],
                type: [ {
                    required: !0,
                    message: "分组方式不能为空",
                    trigger: "change"
                } ],
                maxNum: [ {
                    required: !0,
                    message: "最大数不能为空",
                    trigger: "blur"
                } ]
            }), L = r => {
                let a = r.key;
                return a !== "e" && a !== "E" && a !== "+" && a !== "-" && a !== "." || (r.returnValue = !1, 
                !1);
            }, M = p(1), y = p(null), I = r => {
                if (f.value == "editor") return !1;
                e.value.type = r, e.value.rule = 1, e.value.maxNum = 1;
            }, ae = () => {
                e.value.maxNum = 1;
            }, le = () => {
                k.value.validate(r => {
                    if (r) if (f.value == "add") H.confirm(e.value.type == "1" ? "系统将按此规则自动生成分组结果，确定开始分组？" : "手动分组需要教师指定组长及组员，确定开始分组？", "提示", {
                        confirmButtonText: "确认",
                        cancelButtonText: "取消"
                    }).then(() => {
                        Ie({
                            teachClassId: b.params.classId,
                            name: e.value.name,
                            type: e.value.type,
                            rule: e.value.rule,
                            maxNum: e.value.maxNum
                        }).then(i => {
                            T({
                                message: "操作成功",
                                type: "success"
                            }), N("tableRefresh"), g();
                        });
                    }).catch(() => {}); else {
                        var a = null;
                        e.value.type == "1" && (a = e.value.rule == y.value.rule && e.value.maxNum == y.value.maxNum);
                        var s = {
                            id: y.value.id,
                            teachClassId: b.params.classId,
                            name: e.value.name,
                            type: e.value.type,
                            rule: e.value.rule,
                            maxNum: e.value.maxNum
                        };
                        e.value.type == "2" || e.value.type == "1" && a ? X(s).then(i => {
                            T({
                                message: "操作成功",
                                type: "success"
                            }), N("tableRefresh"), g();
                        }) : H.confirm("分组规则发生变化，系统将按照新规则重新分组！", "提示", {
                            confirmButtonText: "确认",
                            cancelButtonText: "取消"
                        }).then(() => {
                            X(s).then(i => {
                                T({
                                    message: "操作成功",
                                    type: "success"
                                }), N("tableRefresh"), g();
                            });
                        }).catch(() => {});
                    }
                });
            }, g = () => {
                e.value = {
                    name: "",
                    type: 1,
                    rule: 1,
                    maxNum: 1
                }, y.value = null, k.value.resetFields(), v.value = !1;
            };
            return Z({
                open: (r, a) => {
                    Ne({
                        teachClassId: b.params.classId
                    }).then(s => {
                        M.value = s;
                    }), a && ke({
                        id: a.id
                    }).then(s => {
                        y.value = JSON.parse(JSON.stringify(s)), e.value = {
                            name: s.name,
                            type: s.type,
                            rule: Number(s.rule),
                            maxNum: s.maxNum
                        };
                    }), f.value = r, v.value = !0;
                }
            }), (r, a) => {
                const s = ce, i = ie, Q = pe, A = de, te = ve, se = ye, G = xe, ue = fe;
                return c(), h(ue, {
                    modelValue: l(v),
                    "onUpdate:modelValue": a[7] || (a[7] = u => oe(v) ? v.value = u : null),
                    title: l(f) == "add" ? "新增分组方案" : "编辑分组方案",
                    width: "890px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: n(() => [ o(se, {
                        ref_key: "formRef",
                        ref: k,
                        "label-position": "top",
                        "label-width": "90px",
                        model: l(e),
                        rules: l(ee)
                    }, {
                        default: n(() => [ o(i, {
                            prop: "name",
                            label: "分组方案名称"
                        }, {
                            default: n(() => [ o(s, {
                                modelValue: l(e).name,
                                "onUpdate:modelValue": a[0] || (a[0] = u => l(e).name = u),
                                clearable: "",
                                placeholder: "请输入分组标题"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(i, {
                            prop: "type",
                            label: "分组方式"
                        }, {
                            default: n(() => [ t("div", P, [ t("div", {
                                class: V([ "typeItem", {
                                    choosePlan: l(e).type == 1
                                } ]),
                                onClick: a[1] || (a[1] = u => I(1))
                            }, [ l(e).type == 1 ? (c(), C("img", R)) : d("", !0), q, w, B ], 2), t("div", {
                                class: V([ "typeItem", {
                                    choosePlan: l(e).type == 2
                                } ]),
                                style: {
                                    margin: "0 20px"
                                },
                                onClick: a[2] || (a[2] = u => I(2))
                            }, [ l(e).type == 2 ? (c(), C("img", S)) : d("", !0), J, K, O ], 2), t("div", {
                                class: V([ "typeItem", {
                                    choosePlan: l(e).type == 3
                                } ]),
                                onClick: a[3] || (a[3] = u => I(3))
                            }, [ l(e).type == 3 ? (c(), C("img", j)) : d("", !0), E, z, D ], 2) ]) ]),
                            _: 1
                        }), l(e).type == 1 ? (c(), h(i, {
                            key: 0,
                            prop: "maxNum",
                            label: "选择组队规则"
                        }, {
                            default: n(() => [ o(te, {
                                modelValue: l(e).rule,
                                "onUpdate:modelValue": a[6] || (a[6] = u => l(e).rule = u),
                                onChange: ae
                            }, {
                                default: n(() => [ o(A, {
                                    value: 1
                                }, {
                                    default: n(() => [ _("最大组队数  "), l(e).rule == 1 ? (c(), 
                                    h(Q, {
                                        key: 0,
                                        modelValue: l(e).maxNum,
                                        "onUpdate:modelValue": a[4] || (a[4] = u => l(e).maxNum = u),
                                        min: 1,
                                        max: l(M),
                                        precision: 0,
                                        clearable: "",
                                        "controls-position": "right",
                                        onKeydown: L
                                    }, null, 8, [ "modelValue", "max" ])) : d("", !0) ]),
                                    _: 1
                                }), o(A, {
                                    value: 2
                                }, {
                                    default: n(() => [ _("每组最大成员数  "), l(e).rule == 2 ? (c(), 
                                    h(Q, {
                                        key: 0,
                                        modelValue: l(e).maxNum,
                                        "onUpdate:modelValue": a[5] || (a[5] = u => l(e).maxNum = u),
                                        min: 1,
                                        precision: 0,
                                        clearable: "",
                                        "controls-position": "right",
                                        onKeydown: L
                                    }, null, 8, [ "modelValue" ])) : d("", !0) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : d("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), t("div", F, [ o(G, {
                        onClick: g
                    }, {
                        default: n(() => [ _("取消") ]),
                        _: 1
                    }), o(G, {
                        type: "primary",
                        onClick: le
                    }, {
                        default: n(() => [ _("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a132e77a" ] ]);
});

export {
    Te as __tla,
    Y as default
};