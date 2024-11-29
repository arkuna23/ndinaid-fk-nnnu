import {
    aa as F,
    p as J,
    r as d,
    T as O,
    U as j,
    o as v,
    C as y,
    l as a,
    k as u,
    v as i,
    a as l,
    A as P,
    m as Q,
    t as T,
    bp as B,
    bq as D,
    O as E,
    Q as G,
    J as H,
    aU as K,
    a9 as L,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    u as N,
    __tla as S
} from "./project-51c056b9.js";

let g, W = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return S;
    } catch {}
})() ]).then(async () => {
    let _;
    _ = T("div", null, "若撤销发布学生无法进行训练，已有训练数据将被清空，请确认是否执行该操作，用户确定后执行发布撤销，项目状态流转为未发布", -1), 
    g = {
        __name: "index",
        emits: [ "success" ],
        setup(X, {
            expose: h,
            emit: R
        }) {
            F();
            const b = J(), s = d(!1), o = d(!1), r = d({
                classRange: 1
            }), C = O(), V = j({}), n = d(), f = d([]);
            h({
                open: async e => {
                    s.value = !0, f.value = e, w();
                }
            });
            const x = R, k = async () => {
                if (n && await n.value.validate()) {
                    o.value = !0;
                    try {
                        const e = r.value;
                        await N({
                            ...e,
                            ids: f.value,
                            teachCourseId: C.params.teachCourseId
                        }), b.success("操作成功"), s.value = !1, x("success");
                    } finally {
                        o.value = !1;
                    }
                }
            }, w = () => {
                var e;
                r.value = {
                    classRange: 1
                }, (e = n.value) == null || e.resetFields();
            };
            return (e, t) => {
                const m = B, U = D, I = E, q = G, p = H, z = K, A = L;
                return v(), y(z, {
                    modelValue: l(s),
                    "onUpdate:modelValue": t[2] || (t[2] = c => Q(s) ? s.value = c : null),
                    title: "撤销发布",
                    width: "520"
                }, {
                    footer: a(() => [ u(p, {
                        onClick: t[1] || (t[1] = c => s.value = !1)
                    }, {
                        default: a(() => [ i("取 消") ]),
                        _: 1
                    }), u(p, {
                        disabled: l(o),
                        type: "primary",
                        onClick: k
                    }, {
                        default: a(() => [ i("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: a(() => [ _, P((v(), y(q, {
                        ref_key: "formRef",
                        ref: n,
                        model: l(r),
                        rules: l(V),
                        "label-width": "80px",
                        size: "large",
                        style: {
                            "margin-top": "50px"
                        }
                    }, {
                        default: a(() => [ u(I, {
                            label: "发布范围",
                            prop: "classRange"
                        }, {
                            default: a(() => [ u(U, {
                                modelValue: l(r).classRange,
                                "onUpdate:modelValue": t[0] || (t[0] = c => l(r).classRange = c)
                            }, {
                                default: a(() => [ u(m, {
                                    value: 1
                                }, {
                                    default: a(() => [ i("当前班级") ]),
                                    _: 1
                                }), u(m, {
                                    value: 2
                                }, {
                                    default: a(() => [ i("全部班级") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ A, l(o) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    W as __tla,
    g as default
};