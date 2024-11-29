import {
    T as D,
    r as m,
    e as F,
    U as T,
    j as B,
    o as p,
    C as y,
    l as d,
    k as s,
    a as t,
    v as h,
    c as J,
    F as K,
    y as Q,
    t as z,
    A as G,
    m as H,
    n as L,
    bo as I,
    P as M,
    O as N,
    cK as S,
    ab as W,
    ac as X,
    Q as Y,
    J as Z,
    aU as $,
    __tla as ee
} from "./index-6c08ea4c.js";

import {
    u as ae,
    h as le,
    __tla as te
} from "./attendance-a1fdab58.js";

let V, se = Promise.all([ (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})() ]).then(async () => {
    let _;
    _ = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, V = {
        __name: "addAttendanceDialog",
        props: {
            isEdit: {
                type: Boolean,
                default: !1
            },
            form: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "tableRefresh" ],
        setup(f, {
            expose: C,
            emit: x
        }) {
            const o = D(), r = m(!1), g = x, u = f, k = F(() => u.isEdit ? "编辑讨论" : "新增讨论"), e = m({
                title: "",
                duration: 10,
                dirId: "",
                teachCourseId: o.params.teachCourseId,
                teachClassId: o.params.classId
            }), n = m(), E = T({
                title: [ {
                    required: !0,
                    message: "请输入考勤名称",
                    trigger: [ "blur", "change" ]
                }, {
                    max: 20,
                    message: "考勤名称最多20位字符",
                    trigger: [ "blur", "change" ]
                } ],
                viewType: [ {
                    required: !0,
                    message: "请输入讨论范围",
                    trigger: [ "blur", "change" ]
                } ]
            }), U = () => {
                n.value.validate(b => {
                    b && (u.isEdit ? ae({
                        ...e.value,
                        duration: void 0
                    }).then(l => {
                        I({
                            message: "操作成功",
                            type: "success"
                        }), g("Refresh"), i();
                    }) : le({
                        ...e.value
                    }).then(l => {
                        I({
                            message: "操作成功",
                            type: "success"
                        }), g("Refresh"), i();
                    }));
                });
            }, i = () => {
                e.value = {
                    title: "",
                    duration: 10,
                    dirId: "",
                    teachCourseId: o.params.teachCourseId,
                    teachClassId: o.params.classId
                }, n.value.resetFields(), r.value = !1;
            };
            return C({
                handleOpen: () => {
                    r.value = !0, L(() => {
                        u.isEdit ? e.value = {
                            ...u.form
                        } : e.value.title = "签到考勤" + Date.now();
                    });
                }
            }), (b, l) => {
                const w = M, c = N, j = S, A = W, O = X, P = Y, v = Z, R = $, q = B("hasPermi");
                return p(), y(R, {
                    modelValue: t(r),
                    "onUpdate:modelValue": l[3] || (l[3] = a => H(r) ? r.value = a : null),
                    title: t(k),
                    width: "530px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: i
                }, {
                    default: d(() => [ s(P, {
                        ref_key: "formRef",
                        ref: n,
                        "label-position": "top",
                        "label-width": "90px",
                        model: t(e),
                        rules: t(E)
                    }, {
                        default: d(() => [ s(c, {
                            prop: "title",
                            label: "考勤名称"
                        }, {
                            default: d(() => [ s(w, {
                                modelValue: t(e).title,
                                "onUpdate:modelValue": l[0] || (l[0] = a => t(e).title = a),
                                clearable: "",
                                placeholder: "请填写考勤名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(c, {
                            prop: "duration",
                            label: "考勤时长"
                        }, {
                            default: d(() => [ s(j, {
                                modelValue: t(e).duration,
                                "onUpdate:modelValue": l[1] || (l[1] = a => t(e).duration = a),
                                min: 1,
                                max: 100,
                                "controls-position": "right",
                                disabled: f.isEdit
                            }, null, 8, [ "modelValue", "disabled" ]), h(" 分钟 ") ]),
                            _: 1
                        }), s(c, {
                            prop: "dirId",
                            label: "关联目录"
                        }, {
                            default: d(() => [ s(O, {
                                modelValue: t(e).dirId,
                                "onUpdate:modelValue": l[2] || (l[2] = a => t(e).dirId = a),
                                placeholder: "请选择目录"
                            }, {
                                default: d(() => [ (p(), J(K, null, Q([], a => s(A, {
                                    key: a.value,
                                    label: a.label,
                                    value: a.value
                                }, null, 8, [ "label", "value" ])), 64)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), z("div", _, [ s(v, {
                        onClick: i
                    }, {
                        default: d(() => [ h("取消") ]),
                        _: 1
                    }), G((p(), y(v, {
                        type: "primary",
                        onClick: U
                    }, {
                        default: d(() => [ h("确定") ]),
                        _: 1
                    })), [ [ q, [ "teachmanager:teach-course-attendance:create" ] ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    };
});

export {
    se as __tla,
    V as default
};