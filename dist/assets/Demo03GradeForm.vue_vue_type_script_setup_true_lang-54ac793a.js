import {
    d as b,
    r as u,
    U as y,
    w as V,
    A as I,
    a as l,
    o as q,
    C as w,
    l as o,
    k as r,
    P as x,
    O as U,
    Q as k,
    a9 as D,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    b as A,
    __tla as C
} from "./index-14696b3e.js";

let _, F = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})() ]).then(async () => {
    _ = b({
        __name: "Demo03GradeForm",
        props: {
            studentId: {}
        },
        setup(c, {
            expose: p
        }) {
            const v = c, t = u(!1), e = u([]), f = y({
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
            }), m = u();
            return V(() => v.studentId, async s => {
                if (e.value = {
                    id: void 0,
                    studentId: void 0,
                    name: void 0,
                    teacher: void 0
                }, s) try {
                    t.value = !0;
                    const a = await A(s);
                    if (!a) return;
                    e.value = a;
                } finally {
                    t.value = !1;
                }
            }, {
                immediate: !0
            }), p({
                validate: () => m.value.validate(),
                getData: () => e.value
            }), (s, a) => {
                const n = x, i = U, h = k, g = D;
                return I((q(), w(h, {
                    ref_key: "formRef",
                    ref: m,
                    model: l(e),
                    rules: l(f),
                    "label-width": "100px"
                }, {
                    default: o(() => [ r(i, {
                        label: "名字",
                        prop: "name"
                    }, {
                        default: o(() => [ r(n, {
                            modelValue: l(e).name,
                            "onUpdate:modelValue": a[0] || (a[0] = d => l(e).name = d),
                            placeholder: "请输入名字"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), r(i, {
                        label: "班主任",
                        prop: "teacher"
                    }, {
                        default: o(() => [ r(n, {
                            modelValue: l(e).teacher,
                            "onUpdate:modelValue": a[1] || (a[1] = d => l(e).teacher = d),
                            placeholder: "请输入班主任"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ])), [ [ g, l(t) ] ]);
            };
        }
    });
});

export {
    _,
    F as __tla
};