import {
    d as z,
    b0 as A,
    r as u,
    p as O,
    j as R,
    o as m,
    c as q,
    k as i,
    l as s,
    a as e,
    C as p,
    v as c,
    D as f,
    A as E,
    m as P,
    n as F,
    P as J,
    O as L,
    Q,
    J as B,
    aU as G,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    v as I,
    h as K
} from "./validate-b72f006c.js";

import {
    n as M,
    __tla as N
} from "./project-enjineering-046a4b77.js";

let v, S = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    v = z({
        __name: "setDemoUrl",
        emits: [ "refresh" ],
        setup(T, {
            expose: g,
            emit: y
        }) {
            const o = A("authEditDevops"), l = u(!1), n = u(), r = u({
                demoUrl: ""
            }), b = y, U = O(), h = u({
                demoUrl: [ {
                    required: !0,
                    message: "请输入演示地址",
                    trigger: "blur"
                }, {
                    validator: I,
                    message: "链接网址不能为空",
                    trigger: "blur"
                }, {
                    validator: K,
                    message: "请输入正确的URL地址",
                    trigger: "blur"
                }, {
                    max: 50,
                    message: "演示地址不能超过50个字符",
                    trigger: "blur"
                } ]
            }), k = () => {
                n.value.validate(async d => {
                    d && (await M(r.value), b("refresh"), U.success("保存成功"), l.value = !1);
                });
            }, V = () => {
                r.value = {
                    demoUrl: ""
                }, F(() => {
                    n.value.clearValidate();
                });
            };
            return g({
                openDialog: d => {
                    l.value = !0, Object.assign(r.value, d.data);
                }
            }), (d, a) => {
                const C = J, x = L, D = Q, _ = B, j = G, w = R("trim");
                return m(), q("div", null, [ i(j, {
                    title: "配置演示环境",
                    modelValue: e(l),
                    "onUpdate:modelValue": a[3] || (a[3] = t => P(l) ? l.value = t : null),
                    width: "700px",
                    onClose: V,
                    "append-to-body": !0
                }, {
                    footer: s(() => [ e(o) ? f("", !0) : (m(), p(_, {
                        key: 0,
                        size: "default",
                        onClick: a[1] || (a[1] = t => l.value = !1)
                    }, {
                        default: s(() => [ c("关 闭") ]),
                        _: 1
                    })), e(o) ? (m(), p(_, {
                        key: 1,
                        size: "default",
                        onClick: a[2] || (a[2] = t => l.value = !1)
                    }, {
                        default: s(() => [ c("取 消") ]),
                        _: 1
                    })) : f("", !0), e(o) ? (m(), p(_, {
                        key: 2,
                        type: "primary",
                        size: "default",
                        onClick: k
                    }, {
                        default: s(() => [ c("确 定 ") ]),
                        _: 1
                    })) : f("", !0) ]),
                    default: s(() => [ i(D, {
                        disabled: !e(o),
                        ref_key: "AddFormRef",
                        ref: n,
                        model: e(r),
                        rules: e(h),
                        "label-width": "200px",
                        class: "neu"
                    }, {
                        default: s(() => [ i(x, {
                            label: "演示地址：",
                            prop: "demoUrl"
                        }, {
                            default: s(() => [ E(i(C, {
                                modelValue: e(r).demoUrl,
                                "onUpdate:modelValue": a[0] || (a[0] = t => e(r).demoUrl = t),
                                placeholder: "请输入演示地址"
                            }, null, 8, [ "modelValue" ]), [ [ w ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "disabled", "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    });
});

export {
    v as _,
    S as __tla
};