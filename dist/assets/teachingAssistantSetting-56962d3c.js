import {
    T as J,
    p as O,
    r as i,
    U as Q,
    f as D,
    o as b,
    c as T,
    t as u,
    a as r,
    k as e,
    l as a,
    v as c,
    B as G,
    C as H,
    m as K,
    F as L,
    J as M,
    ad as W,
    ae as X,
    P as Y,
    O as Z,
    Q as $,
    aU as ee,
    R as ae,
    S as te,
    __tla as le
} from "./index-6c08ea4c.js";

import {
    _ as re,
    __tla as se
} from "./index-c834085f.js";

import {
    E as ce,
    __tla as ue
} from "./el-link-8197297a.js";

import {
    g as oe,
    d as de,
    a as ie,
    __tla as me
} from "./basicSetting-c1425caa.js";

import {
    f as ne,
    __tla as _e
} from "./formatTime-de6f1520.js";

import {
    _ as pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let q, he = Promise.all([ (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})() ]).then(async () => {
    let y, g, v, N, C;
    y = {
        class: "teaching-assistant-setting"
    }, g = {
        key: 0
    }, v = {
        class: "clearFix mb-10px"
    }, N = (m => (ae("data-v-93d0f0e6"), m = m(), te(), m))(() => u("div", {
        class: "tipStyle"
    }, [ u("span", {
        class: "tipIcon"
    }), c("说明：请保证输入的助教姓名与其学号/工号一致，且该助教账号应具备系统中“教师身份”，否则无法新增成功；助教添加成功后在当前课程下与授课教师拥有相同管理权限 ") ], -1)), 
    C = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, q = pe({
        __name: "teachingAssistantSetting",
        setup(m) {
            const w = J(), _ = O(), p = i([]), o = i(!1), k = i(null), s = i({
                teacherName: "",
                teacherNumber: ""
            }), z = Q({
                teacherName: [ {
                    required: !0,
                    message: "助教姓名不能为空",
                    trigger: "blur"
                } ],
                teacherNumber: [ {
                    required: !0,
                    message: "学号/工号不能为空",
                    trigger: "blur"
                } ]
            }), V = i(!0), h = async (U = !1) => {
                V.value = U;
                const t = await oe({
                    teachCourseId: w.params.id
                });
                p.value = t;
            }, x = () => {
                o.value = !0;
            }, B = async () => {
                await k.value.validate(), await ie({
                    teachCourseId: w.params.id,
                    teacherName: s.value.teacherName,
                    teacherNumber: s.value.teacherNumber
                }), _.success("添加成功"), f(), h();
            }, f = () => {
                o.value = !1, s.value = {
                    teacherName: "",
                    teacherNumber: ""
                };
            };
            return D(() => {
                h(!0);
            }), (U, t) => {
                const n = M, d = W, F = ce, P = X, R = re, I = Y, S = Z, j = $, A = ee;
                return b(), T(L, null, [ u("div", y, [ r(p).length > 0 || !r(V) ? (b(), 
                T("div", g, [ u("div", v, [ e(n, {
                    type: "primary",
                    size: "large",
                    class: "right",
                    onClick: t[0] || (t[0] = l => x())
                }, {
                    default: a(() => [ c(" 添加助教 ") ]),
                    _: 1
                }) ]), u("div", null, [ e(P, {
                    data: r(p),
                    style: {
                        width: "100%"
                    }
                }, {
                    default: a(() => [ e(d, {
                        type: "index",
                        label: "序号",
                        width: "70"
                    }), e(d, {
                        prop: "teacherName",
                        label: "姓名"
                    }), e(d, {
                        prop: "teacherNumber",
                        label: "学号/工号"
                    }), e(d, {
                        label: "添加时间"
                    }, {
                        default: a(l => [ c(G(r(ne)(l.row.createTime)), 1) ]),
                        _: 1
                    }), e(d, {
                        label: "操作",
                        width: "100"
                    }, {
                        default: a(l => [ e(F, {
                            type: "danger",
                            underline: !1,
                            onClick: fe => (async E => {
                                await _.delConfirm("助教移除后对本门课程不再具有相应管理权限，已产生数据不受影响，确定移除？"), 
                                await de({
                                    id: E.id
                                }), _.success("移除成功"), h();
                            })(l.row)
                        }, {
                            default: a(() => [ c("移除") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]) ])) : (b(), H(R, {
                    key: 1
                }, {
                    btn: a(() => [ e(n, {
                        type: "primary",
                        size: "large",
                        class: "btn-group",
                        onClick: t[1] || (t[1] = l => x())
                    }, {
                        default: a(() => [ c(" 添加助教 ") ]),
                        _: 1
                    }) ]),
                    _: 1
                })) ]), e(A, {
                    modelValue: r(o),
                    "onUpdate:modelValue": t[4] || (t[4] = l => K(o) ? o.value = l : null),
                    title: "添加助教",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: f
                }, {
                    default: a(() => [ N, e(j, {
                        ref_key: "formRef",
                        ref: k,
                        model: r(s),
                        rules: r(z),
                        "label-position": "top"
                    }, {
                        default: a(() => [ e(S, {
                            label: "助教姓名",
                            prop: "teacherName"
                        }, {
                            default: a(() => [ e(I, {
                                modelValue: r(s).teacherName,
                                "onUpdate:modelValue": t[2] || (t[2] = l => r(s).teacherName = l),
                                placeholder: "请输入助教姓名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), e(S, {
                            label: "学号/工号",
                            prop: "teacherNumber"
                        }, {
                            default: a(() => [ e(I, {
                                modelValue: r(s).teacherNumber,
                                "onUpdate:modelValue": t[3] || (t[3] = l => r(s).teacherNumber = l),
                                placeholder: "请输入学号/工号"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), u("div", C, [ e(n, {
                        onClick: f
                    }, {
                        default: a(() => [ c("取消") ]),
                        _: 1
                    }), e(n, {
                        type: "primary",
                        onClick: B
                    }, {
                        default: a(() => [ c("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-93d0f0e6" ] ]);
});

export {
    he as __tla,
    q as default
};