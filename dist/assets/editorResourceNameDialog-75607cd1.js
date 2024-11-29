import {
    r as s,
    o as U,
    C as w,
    l as r,
    k as o,
    a as m,
    t as v,
    v as g,
    m as E,
    bo as O,
    P,
    O as R,
    Q as j,
    J as q,
    aU as z,
    __tla as F
} from "./index-6c08ea4c.js";

import {
    O as I,
    __tla as J
} from "./index-9567cbf6.js";

let f, Q = Promise.all([ (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})() ]).then(async () => {
    let i, p;
    i = v("div", {
        style: {
            "font-size": "12px",
            "padding-left": "10px"
        }
    }, "说明：如该资料是从个人/校本资源库或课程资源包中选择，本次修改将不会影响原始文件名称", -1), p = {
        style: {
            "text-align": "center",
            margin: "40px 0 20px 0"
        }
    }, f = {
        __name: "editorResourceNameDialog",
        emits: [ "editorNameDone" ],
        setup(A, {
            expose: x,
            emit: y
        }) {
            const l = s(!1), u = s(), n = s(null), e = s({
                name: ""
            }), b = s({
                name: [ {
                    required: !0,
                    message: "资料名称不能为空",
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "资料名称最多100位字符",
                    trigger: "blur"
                } ]
            }), h = y, V = () => {
                u.value.validate(a => {
                    a && I({
                        resId: n.value.id,
                        name: e.value.name + n.value.resExt
                    }).then(t => {
                        O({
                            message: "操作成功",
                            type: "success"
                        }), h("editorNameDone", {
                            oldData: n.value,
                            name: e.value.name
                        }), c();
                    });
                });
            }, c = () => {
                u.value.resetFields(), l.value = !1;
            };
            return x({
                open: a => {
                    n.value = a, e.value.name = a.name.replace(a.resExt, ""), l.value = !0;
                }
            }), (a, t) => {
                const k = P, D = R, C = j, _ = q, N = z;
                return U(), w(N, {
                    modelValue: m(l),
                    "onUpdate:modelValue": t[1] || (t[1] = d => E(l) ? l.value = d : null),
                    title: "编辑资料",
                    width: "600px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: r(() => [ o(C, {
                        ref_key: "formRef",
                        ref: u,
                        "label-position": "top",
                        "label-width": "90px",
                        model: m(e),
                        rules: m(b)
                    }, {
                        default: r(() => [ o(D, {
                            prop: "name",
                            label: "资料名称"
                        }, {
                            default: r(() => [ o(k, {
                                modelValue: m(e).name,
                                "onUpdate:modelValue": t[0] || (t[0] = d => m(e).name = d),
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), i, v("div", p, [ o(_, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: c
                    }, {
                        default: r(() => [ g("取消") ]),
                        _: 1
                    }), o(_, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: V
                    }, {
                        default: r(() => [ g("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    Q as __tla,
    f as default
};