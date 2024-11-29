import {
    d as A,
    aa as D,
    p as J,
    r as d,
    U as O,
    o as V,
    C as b,
    l as t,
    k as i,
    v as g,
    a,
    A as P,
    m as j,
    P as Q,
    O as R,
    Q as z,
    J as B,
    aU as E,
    a9 as G,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    a as K,
    b as L,
    d as M,
    __tla as N
} from "./index-decb78d3.js";

let h, T = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    h = A({
        __name: "Demo03CourseForm",
        emits: [ "success" ],
        setup(W, {
            expose: w,
            emit: k
        }) {
            const {
                t: m
            } = D(), v = J(), u = d(!1), _ = d(""), o = d(!1), p = d(""), l = d({
                id: void 0,
                studentId: void 0,
                name: void 0,
                score: void 0
            }), C = O({
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
                score: [ {
                    required: !0,
                    message: "分数不能为空",
                    trigger: "blur"
                } ]
            }), n = d();
            w({
                open: async (s, e, c) => {
                    if (u.value = !0, _.value = m("action." + s), p.value = s, q(), 
                    l.value.studentId = c, e) {
                        o.value = !0;
                        try {
                            l.value = await K(e);
                        } finally {
                            o.value = !1;
                        }
                    }
                }
            });
            const I = k, U = async () => {
                await n.value.validate(), o.value = !0;
                try {
                    const s = l.value;
                    p.value === "create" ? (await L(s), v.success(m("common.createSuccess"))) : (await M(s), 
                    v.success(m("common.updateSuccess"))), u.value = !1, I("success");
                } finally {
                    o.value = !1;
                }
            }, q = () => {
                var s;
                l.value = {
                    id: void 0,
                    studentId: void 0,
                    name: void 0,
                    score: void 0
                }, (s = n.value) == null || s.resetFields();
            };
            return (s, e) => {
                const c = Q, f = R, x = z, y = B, F = E, S = G;
                return V(), b(F, {
                    title: a(_),
                    modelValue: a(u),
                    "onUpdate:modelValue": e[3] || (e[3] = r => j(u) ? u.value = r : null)
                }, {
                    footer: t(() => [ i(y, {
                        onClick: e[2] || (e[2] = r => u.value = !1)
                    }, {
                        default: t(() => [ g("取 消") ]),
                        _: 1
                    }), i(y, {
                        onClick: U,
                        type: "primary",
                        disabled: a(o)
                    }, {
                        default: t(() => [ g("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: t(() => [ P((V(), b(x, {
                        ref_key: "formRef",
                        ref: n,
                        model: a(l),
                        rules: a(C),
                        "label-width": "100px"
                    }, {
                        default: t(() => [ i(f, {
                            label: "名字",
                            prop: "name"
                        }, {
                            default: t(() => [ i(c, {
                                modelValue: a(l).name,
                                "onUpdate:modelValue": e[0] || (e[0] = r => a(l).name = r),
                                placeholder: "请输入名字"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), i(f, {
                            label: "分数",
                            prop: "score"
                        }, {
                            default: t(() => [ i(c, {
                                modelValue: a(l).score,
                                "onUpdate:modelValue": e[1] || (e[1] = r => a(l).score = r),
                                placeholder: "请输入分数"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ S, a(o) ] ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]);
            };
        }
    });
});

export {
    h as _,
    T as __tla
};