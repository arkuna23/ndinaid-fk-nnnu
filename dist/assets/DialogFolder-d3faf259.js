import {
    aa as q,
    p as D,
    r as l,
    U as H,
    f as I,
    o as f,
    C as v,
    l as r,
    k as n,
    v as g,
    A as P,
    a as t,
    H as j,
    m as J,
    P as M,
    O as N,
    Q as O,
    J as Q,
    aU as R,
    a9 as Z,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    c as B,
    __tla as E
} from "./judge-7c842b3d.js";

let y, G = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})() ]).then(async () => {
    y = {
        __name: "DialogFolder",
        emits: [ "success" ],
        setup(K, {
            expose: h,
            emit: V
        }) {
            const {
                t: b
            } = q(), k = D(), w = V, s = l(!1), d = l(""), i = l(!1), c = l(""), p = l(""), u = l({
                id: "",
                name: ""
            }), x = H({
                name: [ {
                    required: !0,
                    trigger: [ "change", "blur" ],
                    message: "请输入文件夹名称"
                }, {
                    min: 1,
                    max: 50,
                    message: "长度必须介于 1 和 50 之间",
                    trigger: [ "change", "blur" ]
                }, {
                    pattern: /^[A-Za-z0-9]+$/,
                    message: "只允许输入 字母 / 数字 ",
                    trigger: [ "change", "blur" ]
                } ]
            }), m = l();
            h({
                open: async (a, e) => {
                    s.value = !0, d.value = a === "update" ? "编辑" : a === "create" ? "新建" : "查看", 
                    c.value = a, U(), p.value = e;
                }
            });
            const U = () => {
                var a;
                u.value = {
                    id: "",
                    name: ""
                }, (a = m.value) == null || a.resetFields();
            };
            return I(() => {}), (a, e) => {
                const C = M, z = N, A = O, _ = Q, F = R, S = Z;
                return f(), v(F, {
                    modelValue: t(s),
                    "onUpdate:modelValue": e[4] || (e[4] = o => J(s) ? s.value = o : null),
                    title: t(d) + "文件夹",
                    width: "440"
                }, {
                    footer: r(() => [ n(_, {
                        onClick: e[2] || (e[2] = o => s.value = !1)
                    }, {
                        default: r(() => [ g("取 消") ]),
                        _: 1
                    }), n(_, {
                        type: "primary",
                        onClick: e[3] || (e[3] = o => (async () => {
                            if (m && await m.value.validate()) {
                                i.value = !0;
                                try {
                                    c.value === "create" && (await B({
                                        groupId: p.value,
                                        dirName: u.value.name
                                    }), k.success(b("common.createSuccess"))), s.value = !1, 
                                    w("success");
                                } finally {
                                    i.value = !1;
                                }
                            }
                        })())
                    }, {
                        default: r(() => [ g("确 定") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ P((f(), v(A, {
                        ref_key: "formRef",
                        ref: m,
                        model: t(u),
                        rules: t(x),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        onSubmit: e[1] || (e[1] = j(() => {}, [ "prevent" ]))
                    }, {
                        default: r(() => [ n(z, {
                            label: "文件夹名称",
                            prop: "name"
                        }, {
                            default: r(() => [ n(C, {
                                modelValue: t(u).name,
                                "onUpdate:modelValue": e[0] || (e[0] = o => t(u).name = o),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入文件夹名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ S, t(i) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    };
});

export {
    G as __tla,
    y as default
};