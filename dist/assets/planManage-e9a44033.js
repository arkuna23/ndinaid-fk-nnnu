import {
    u as le,
    T as te,
    r as d,
    U as se,
    o as i,
    C as g,
    l as u,
    k as n,
    a as l,
    t as m,
    z as D,
    c as F,
    D as y,
    v as _,
    m as ue,
    E as M,
    bo as I,
    P as me,
    O as re,
    cK as ne,
    bp as oe,
    bq as ce,
    Q as de,
    J as ie,
    aU as pe,
    R as ve,
    S as ye,
    __tla as xe
} from "./index-6c08ea4c.js";

import {
    _ as Q,
    a as X
} from "./planTeacher-e2d2fd81.js";

import {
    b as fe,
    f as he,
    h as ge,
    i as A,
    __tla as _e
} from "./index-d7ee4e02.js";

import {
    _ as be
} from "./_plugin-vue_export-helper-1b428a4d.js";

let G, Ne = Promise.all([ (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})() ]).then(async () => {
    let o, k, C, U, T, R, B, q, w, J, P;
    o = x => (ve("data-v-423e0a79"), x = x(), ye(), x), k = {
        style: {
            display: "flex",
            "justify-content": "space-around"
        }
    }, C = {
        key: 0,
        class: "choosedIcon",
        src: Q,
        alt: ""
    }, U = o(() => m("img", {
        class: "planIcon",
        src: X,
        alt: ""
    }, null, -1)), T = o(() => m("div", {
        class: "planTitle"
    }, "教师一键分组", -1)), R = o(() => m("div", {
        class: "planContent"
    }, "一键分组为系统按照规则自动进行小组创建、组长设定，教师可手动局部调整。", -1)), B = {
        key: 0,
        class: "choosedIcon",
        src: Q,
        alt: ""
    }, q = o(() => m("img", {
        class: "planIcon",
        src: X,
        alt: ""
    }, null, -1)), w = o(() => m("div", {
        class: "planTitle"
    }, "教师手动分组", -1)), J = o(() => m("div", {
        class: "planContent"
    }, "教师设定项目组数，并为每组分配一个组长，学生可自由选择项目组", -1)), P = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, G = be({
        __name: "planManage",
        emits: [ "tableRefresh" ],
        setup(x, {
            expose: H,
            emit: L
        }) {
            le();
            const b = te(), p = d(!1), f = d(""), N = L, e = d({
                name: "",
                type: 1,
                rule: 1,
                maxNum: 1
            }), V = d(), W = se({
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
            }), K = r => {
                let a = r.key;
                return a !== "e" && a !== "E" && a !== "+" && a !== "-" && a !== "." || (r.returnValue = !1, 
                !1);
            }, O = d(1), v = d(null), S = r => {
                if (f.value == "editor") return !1;
                e.value.type = r, e.value.rule = 1, e.value.maxNum = 1;
            }, Y = () => {
                e.value.maxNum = 1;
            }, Z = () => {
                V.value.validate(r => {
                    if (r) if (f.value == "add") M.confirm(e.value.type == "1" ? "系统将按此规则自动生成分组结果，确定开始分组？" : "手动分组需要教师指定组长及组员，确定开始分组？", "提示", {
                        confirmButtonText: "确认",
                        cancelButtonText: "取消"
                    }).then(() => {
                        ge({
                            teachClassId: b.params.classId,
                            name: e.value.name,
                            type: e.value.type,
                            rule: e.value.rule,
                            maxNum: e.value.maxNum
                        }).then(c => {
                            I({
                                message: "操作成功",
                                type: "success"
                            }), N("tableRefresh"), h();
                        });
                    }).catch(() => {}); else {
                        var a = null;
                        e.value.type == "1" && (a = e.value.rule == v.value.rule && e.value.maxNum == v.value.maxNum);
                        var t = {
                            id: v.value.id,
                            teachClassId: b.params.classId,
                            name: e.value.name,
                            type: e.value.type,
                            rule: e.value.rule,
                            maxNum: e.value.maxNum
                        };
                        e.value.type == "2" || e.value.type == "1" && a ? A(t).then(c => {
                            I({
                                message: "操作成功",
                                type: "success"
                            }), N("tableRefresh"), h();
                        }) : M.confirm("分组规则发生变化，系统将按照新规则重新分组！", "提示", {
                            confirmButtonText: "确认",
                            cancelButtonText: "取消"
                        }).then(() => {
                            A(t).then(c => {
                                I({
                                    message: "操作成功",
                                    type: "success"
                                }), N("tableRefresh"), h();
                            });
                        }).catch(() => {});
                    }
                });
            }, h = () => {
                e.value = {
                    name: "",
                    type: 1,
                    rule: 1,
                    maxNum: 1
                }, v.value = null, V.value.resetFields(), p.value = !1;
            };
            return H({
                open: (r, a) => {
                    fe({
                        teachClassId: b.params.classId
                    }).then(t => {
                        O.value = t;
                    }), a && he({
                        id: a.id
                    }).then(t => {
                        v.value = JSON.parse(JSON.stringify(t)), e.value = {
                            name: t.name,
                            type: t.type,
                            rule: Number(t.rule),
                            maxNum: t.maxNum
                        };
                    }), f.value = r, p.value = !0;
                }
            }), (r, a) => {
                const t = me, c = re, E = ne, j = oe, $ = ce, ee = de, z = ie, ae = pe;
                return i(), g(ae, {
                    modelValue: l(p),
                    "onUpdate:modelValue": a[6] || (a[6] = s => ue(p) ? p.value = s : null),
                    title: l(f) == "add" ? "新增分组方案" : "编辑分组方案",
                    width: "890px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: u(() => [ n(ee, {
                        ref_key: "formRef",
                        ref: V,
                        "label-position": "top",
                        "label-width": "90px",
                        model: l(e),
                        rules: l(W)
                    }, {
                        default: u(() => [ n(c, {
                            prop: "name",
                            label: "分组方案名称"
                        }, {
                            default: u(() => [ n(t, {
                                modelValue: l(e).name,
                                "onUpdate:modelValue": a[0] || (a[0] = s => l(e).name = s),
                                clearable: "",
                                placeholder: "请输入分组方案名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), n(c, {
                            prop: "type",
                            label: "分组方式"
                        }, {
                            default: u(() => [ m("div", k, [ m("div", {
                                class: D([ "typeItem", {
                                    choosePlan: l(e).type == 1
                                } ]),
                                onClick: a[1] || (a[1] = s => S(1))
                            }, [ l(e).type == 1 ? (i(), F("img", C)) : y("", !0), U, T, R ], 2), m("div", {
                                class: D([ "typeItem", {
                                    choosePlan: l(e).type == 2
                                } ]),
                                style: {
                                    margin: "0 20px"
                                },
                                onClick: a[2] || (a[2] = s => S(2))
                            }, [ l(e).type == 2 ? (i(), F("img", B)) : y("", !0), q, w, J ], 2) ]) ]),
                            _: 1
                        }), l(e).type == 1 ? (i(), g(c, {
                            key: 0,
                            prop: "maxNum",
                            label: "选择组队规则"
                        }, {
                            default: u(() => [ n($, {
                                modelValue: l(e).rule,
                                "onUpdate:modelValue": a[5] || (a[5] = s => l(e).rule = s),
                                onChange: Y
                            }, {
                                default: u(() => [ n(j, {
                                    value: 1
                                }, {
                                    default: u(() => [ _("最大组队数  "), l(e).rule == 1 ? (i(), 
                                    g(E, {
                                        key: 0,
                                        modelValue: l(e).maxNum,
                                        "onUpdate:modelValue": a[3] || (a[3] = s => l(e).maxNum = s),
                                        min: 1,
                                        max: l(O),
                                        precision: 0,
                                        clearable: "",
                                        "controls-position": "right",
                                        onKeydown: K
                                    }, null, 8, [ "modelValue", "max" ])) : y("", !0) ]),
                                    _: 1
                                }), n(j, {
                                    value: 2
                                }, {
                                    default: u(() => [ _("每组最大成员数  "), l(e).rule == 2 ? (i(), 
                                    g(E, {
                                        key: 0,
                                        modelValue: l(e).maxNum,
                                        "onUpdate:modelValue": a[4] || (a[4] = s => l(e).maxNum = s),
                                        min: 1,
                                        precision: 0,
                                        clearable: "",
                                        "controls-position": "right",
                                        onKeydown: K
                                    }, null, 8, [ "modelValue" ])) : y("", !0) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : y("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), m("div", P, [ n(z, {
                        onClick: h
                    }, {
                        default: u(() => [ _("取消") ]),
                        _: 1
                    }), n(z, {
                        type: "primary",
                        onClick: Z
                    }, {
                        default: u(() => [ _("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-423e0a79" ] ]);
});

export {
    Ne as __tla,
    G as default
};