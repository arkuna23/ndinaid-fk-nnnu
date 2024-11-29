import {
    d as j,
    aa as A,
    p as D,
    r as o,
    U as G,
    o as y,
    C as V,
    l as s,
    k as i,
    v as b,
    a,
    A as J,
    m as P,
    P as O,
    O as Q,
    Q as R,
    J as z,
    aU as B,
    a9 as E,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    h as K,
    i as L,
    j as M,
    __tla as N
} from "./index-decb78d3.js";

let g, T = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    g = j({
        __name: "Demo03GradeForm",
        emits: [ "success" ],
        setup(W, {
            expose: w,
            emit: U
        }) {
            const {
                t: m
            } = A(), v = D(), u = o(!1), _ = o(""), r = o(!1), p = o(""), l = o({
                id: void 0,
                studentId: void 0,
                name: void 0,
                teacher: void 0
            }), k = G({
                studentId: [ {
                    required: !0,
                    message: "学生编号不能为空",
                    trigger: "blur"
                } ],
                name: [ {
                    required: !0,
                    message: "名字不能为空",
                    trigger: "blur"
                } ],
                teacher: [ {
                    required: !0,
                    message: "班主任不能为空",
                    trigger: "blur"
                } ]
            }), n = o();
            w({
                open: async (t, e, c) => {
                    if (u.value = !0, _.value = m("action." + t), p.value = t, C(), 
                    l.value.studentId = c, e) {
                        r.value = !0;
                        try {
                            l.value = await K(e);
                        } finally {
                            r.value = !1;
                        }
                    }
                }
            });
            const I = U, q = async () => {
                await n.value.validate(), r.value = !0;
                try {
                    const t = l.value;
                    p.value === "create" ? (await L(t), v.success(m("common.createSuccess"))) : (await M(t), 
                    v.success(m("common.updateSuccess"))), u.value = !1, I("success");
                } finally {
                    r.value = !1;
                }
            }, C = () => {
                var t;
                l.value = {
                    id: void 0,
                    studentId: void 0,
                    name: void 0,
                    teacher: void 0
                }, (t = n.value) == null || t.resetFields();
            };
            return (t, e) => {
                const c = O, f = Q, x = R, h = z, F = B, S = E;
                return y(), V(F, {
                    title: a(_),
                    modelValue: a(u),
                    "onUpdate:modelValue": e[3] || (e[3] = d => P(u) ? u.value = d : null)
                }, {
                    footer: s(() => [ i(h, {
                        onClick: e[2] || (e[2] = d => u.value = !1)
                    }, {
                        default: s(() => [ b("取 消") ]),
                        _: 1
                    }), i(h, {
                        onClick: q,
                        type: "primary",
                        disabled: a(r)
                    }, {
                        default: s(() => [ b("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ J((y(), V(x, {
                        ref_key: "formRef",
                        ref: n,
                        model: a(l),
                        rules: a(k),
                        "label-width": "100px"
                    }, {
                        default: s(() => [ i(f, {
                            label: "名字",
                            prop: "name"
                        }, {
                            default: s(() => [ i(c, {
                                modelValue: a(l).name,
                                "onUpdate:modelValue": e[0] || (e[0] = d => a(l).name = d),
                                placeholder: "请输入名字"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), i(f, {
                            label: "班主任",
                            prop: "teacher"
                        }, {
                            default: s(() => [ i(c, {
                                modelValue: a(l).teacher,
                                "onUpdate:modelValue": e[1] || (e[1] = d => a(l).teacher = d),
                                placeholder: "请输入班主任"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ S, a(r) ] ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]);
            };
        }
    });
});

export {
    g as _,
    T as __tla
};