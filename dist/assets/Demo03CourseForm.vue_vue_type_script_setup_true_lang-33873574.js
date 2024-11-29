import {
    d as U,
    r as m,
    U as $,
    w as q,
    o as g,
    c as D,
    A as j,
    a as d,
    C as F,
    l as a,
    k as e,
    v as h,
    F as P,
    ad as A,
    P as J,
    O,
    J as Q,
    ae as R,
    Q as z,
    aw as B,
    a9 as E,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    a as H,
    __tla as K
} from "./index-14696b3e.js";

let x, L = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    x = U({
        __name: "Demo03CourseForm",
        props: {
            studentId: {}
        },
        setup(b, {
            expose: w
        }) {
            const c = b, n = m(!1), l = m([]), i = $({
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
            }), p = m();
            q(() => c.studentId, async s => {
                if (l.value = [], s) try {
                    n.value = !0, l.value = await H(s);
                } finally {
                    n.value = !1;
                }
            }, {
                immediate: !0
            });
            const y = () => {
                const s = {
                    id: void 0,
                    studentId: void 0,
                    name: void 0,
                    score: void 0
                };
                s.studentId = c.studentId, l.value.push(s);
            };
            return w({
                validate: () => p.value.validate(),
                getData: () => l.value
            }), (s, M) => {
                const u = A, _ = J, f = O, v = Q, V = R, k = z, I = B, C = E;
                return g(), D(P, null, [ j((g(), F(k, {
                    ref_key: "formRef",
                    ref: p,
                    model: d(l),
                    rules: d(i),
                    "label-width": "0px",
                    "inline-message": !0
                }, {
                    default: a(() => [ e(V, {
                        data: d(l),
                        class: "-mt-10px"
                    }, {
                        default: a(() => [ e(u, {
                            label: "序号",
                            type: "index",
                            width: "100"
                        }), e(u, {
                            label: "名字",
                            "min-width": "150"
                        }, {
                            default: a(({
                                row: t,
                                $index: o
                            }) => [ e(f, {
                                prop: `${o}.name`,
                                rules: d(i).name,
                                class: "mb-0px!"
                            }, {
                                default: a(() => [ e(_, {
                                    modelValue: t.name,
                                    "onUpdate:modelValue": r => t.name = r,
                                    placeholder: "请输入名字"
                                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                                _: 2
                            }, 1032, [ "prop", "rules" ]) ]),
                            _: 1
                        }), e(u, {
                            label: "分数",
                            "min-width": "150"
                        }, {
                            default: a(({
                                row: t,
                                $index: o
                            }) => [ e(f, {
                                prop: `${o}.score`,
                                rules: d(i).score,
                                class: "mb-0px!"
                            }, {
                                default: a(() => [ e(_, {
                                    modelValue: t.score,
                                    "onUpdate:modelValue": r => t.score = r,
                                    placeholder: "请输入分数"
                                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                                _: 2
                            }, 1032, [ "prop", "rules" ]) ]),
                            _: 1
                        }), e(u, {
                            align: "center",
                            fixed: "right",
                            label: "操作",
                            width: "60"
                        }, {
                            default: a(({
                                $index: t
                            }) => [ e(v, {
                                onClick: o => {
                                    return r = t, void l.value.splice(r, 1);
                                    var r;
                                },
                                link: ""
                            }, {
                                default: a(() => [ h("—") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }, 8, [ "model", "rules" ])), [ [ C, d(n) ] ]), e(I, {
                    justify: "center",
                    class: "mt-3"
                }, {
                    default: a(() => [ e(v, {
                        onClick: y,
                        round: ""
                    }, {
                        default: a(() => [ h("+ 添加学生课程") ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ], 64);
            };
        }
    });
});

export {
    x as _,
    L as __tla
};