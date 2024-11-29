import {
    d as L,
    aa as N,
    p as O,
    r as u,
    U as T,
    o as _,
    C as y,
    l as d,
    k as t,
    v as b,
    a as e,
    A as X,
    c as Y,
    F as j,
    y as H,
    B as I,
    m as C,
    P as K,
    O as W,
    bp as Z,
    bq as $,
    N as ee,
    Q as ae,
    M as le,
    s as te,
    J as re,
    aU as de,
    a9 as se,
    __tla as ue
} from "./index-6c08ea4c.js";

import {
    _ as oe,
    __tla as ie
} from "./Editor-ef737d2a.js";

import {
    b as me,
    D as ne,
    __tla as _e
} from "./dict-c5825220.js";

import {
    g as ce,
    c as ve,
    u as pe,
    __tla as fe
} from "./index-14696b3e.js";

import {
    _ as ye,
    __tla as be
} from "./Demo03CourseForm.vue_vue_type_script_setup_true_lang-33873574.js";

import {
    _ as he,
    __tla as Ve
} from "./Demo03GradeForm.vue_vue_type_script_setup_true_lang-54ac793a.js";

let k, ge = Promise.all([ (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})() ]).then(async () => {
    k = L({
        __name: "Demo03StudentForm",
        emits: [ "success" ],
        setup(xe, {
            expose: w,
            emit: S
        }) {
            const {
                t: c
            } = N(), h = O(), o = u(!1), V = u(""), i = u(!1), g = u(""), r = u({
                id: void 0,
                name: void 0,
                sex: void 0,
                birthday: void 0,
                description: void 0
            }), q = T({
                name: [ {
                    required: !0,
                    message: "名字不能为空",
                    trigger: "blur"
                } ],
                sex: [ {
                    required: !0,
                    message: "性别不能为空",
                    trigger: "blur"
                } ],
                birthday: [ {
                    required: !0,
                    message: "出生日期不能为空",
                    trigger: "blur"
                } ],
                description: [ {
                    required: !0,
                    message: "简介不能为空",
                    trigger: "blur"
                } ]
            }), v = u(), m = u("demo03Course"), p = u(), f = u();
            w({
                open: async (s, a) => {
                    if (o.value = !0, V.value = c("action." + s), g.value = s, D(), 
                    a) {
                        i.value = !0;
                        try {
                            r.value = await ce(a);
                        } finally {
                            i.value = !1;
                        }
                    }
                }
            });
            const F = S, G = async () => {
                await v.value.validate();
                try {
                    await p.value.validate();
                } catch {
                    return void (m.value = "demo03Course");
                }
                try {
                    await f.value.validate();
                } catch {
                    return void (m.value = "demo03Grade");
                }
                i.value = !0;
                try {
                    const s = r.value;
                    s.demo03Courses = p.value.getData(), s.demo03Grade = f.value.getData(), 
                    g.value === "create" ? (await ve(s), h.success(c("common.createSuccess"))) : (await pe(s), 
                    h.success(c("common.updateSuccess"))), o.value = !1, F("success");
                } finally {
                    i.value = !1;
                }
            }, D = () => {
                var s;
                r.value = {
                    id: void 0,
                    name: void 0,
                    sex: void 0,
                    birthday: void 0,
                    description: void 0
                }, (s = v.value) == null || s.resetFields();
            };
            return (s, a) => {
                const E = K, n = W, R = Z, B = $, J = ee, M = oe, P = ae, x = le, Q = te, U = re, z = de, A = se;
                return _(), y(z, {
                    title: e(V),
                    modelValue: e(o),
                    "onUpdate:modelValue": a[6] || (a[6] = l => C(o) ? o.value = l : null)
                }, {
                    footer: d(() => [ t(U, {
                        onClick: a[5] || (a[5] = l => o.value = !1)
                    }, {
                        default: d(() => [ b("取 消") ]),
                        _: 1
                    }), t(U, {
                        onClick: G,
                        type: "primary",
                        disabled: e(i)
                    }, {
                        default: d(() => [ b("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: d(() => [ X((_(), y(P, {
                        ref_key: "formRef",
                        ref: v,
                        model: e(r),
                        rules: e(q),
                        "label-width": "100px"
                    }, {
                        default: d(() => [ t(n, {
                            label: "名字",
                            prop: "name"
                        }, {
                            default: d(() => [ t(E, {
                                modelValue: e(r).name,
                                "onUpdate:modelValue": a[0] || (a[0] = l => e(r).name = l),
                                placeholder: "请输入名字"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(n, {
                            label: "性别",
                            prop: "sex"
                        }, {
                            default: d(() => [ t(B, {
                                modelValue: e(r).sex,
                                "onUpdate:modelValue": a[1] || (a[1] = l => e(r).sex = l)
                            }, {
                                default: d(() => [ (_(!0), Y(j, null, H(e(me)(e(ne).SYSTEM_USER_SEX), l => (_(), 
                                y(R, {
                                    key: l.value,
                                    label: l.value
                                }, {
                                    default: d(() => [ b(I(l.label), 1) ]),
                                    _: 2
                                }, 1032, [ "label" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(n, {
                            label: "出生日期",
                            prop: "birthday"
                        }, {
                            default: d(() => [ t(J, {
                                modelValue: e(r).birthday,
                                "onUpdate:modelValue": a[2] || (a[2] = l => e(r).birthday = l),
                                type: "date",
                                "value-format": "x",
                                placeholder: "选择出生日期"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(n, {
                            label: "简介",
                            prop: "description"
                        }, {
                            default: d(() => [ t(M, {
                                modelValue: e(r).description,
                                "onUpdate:modelValue": a[3] || (a[3] = l => e(r).description = l),
                                height: "150px"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ A, e(i) ] ]), t(Q, {
                        modelValue: e(m),
                        "onUpdate:modelValue": a[4] || (a[4] = l => C(m) ? m.value = l : null)
                    }, {
                        default: d(() => [ t(x, {
                            label: "学生课程",
                            name: "demo03Course"
                        }, {
                            default: d(() => [ t(ye, {
                                ref_key: "demo03CourseFormRef",
                                ref: p,
                                "student-id": e(r).id
                            }, null, 8, [ "student-id" ]) ]),
                            _: 1
                        }), t(x, {
                            label: "学生班级",
                            name: "demo03Grade"
                        }, {
                            default: d(() => [ t(he, {
                                ref_key: "demo03GradeFormRef",
                                ref: f,
                                "student-id": e(r).id
                            }, null, 8, [ "student-id" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]);
            };
        }
    });
});

export {
    k as _,
    ge as __tla
};