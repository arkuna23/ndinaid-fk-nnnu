import {
    aa as q,
    p as H,
    r as l,
    U as J,
    f as P,
    o as w,
    C as x,
    l as u,
    k as i,
    v as V,
    A as j,
    a as s,
    H as M,
    m as N,
    P as O,
    O as Q,
    Q as R,
    J as $,
    aU as B,
    a9 as E,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    b as K,
    __tla as L
} from "./judge-7c842b3d.js";

import {
    x as T,
    __tla as W
} from "./file-e038b35d.js";

let k, X = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})() ]).then(async () => {
    k = {
        __name: "DialogFile",
        emits: [ "success" ],
        setup(Y, {
            expose: z,
            emit: A
        }) {
            const {
                t: f
            } = q(), v = H(), F = A, r = l(!1), g = l(""), c = l(!1), y = l(""), h = l(""), d = l(""), t = l({
                id: "",
                name: ""
            }), U = J({
                name: [ {
                    required: !0,
                    trigger: [ "change", "blur" ],
                    message: "请输入文件名称"
                }, {
                    min: 3,
                    max: 50,
                    message: "长度必须介于 3 和 50 之间",
                    trigger: [ "change", "blur" ]
                }, {
                    pattern: /^[A-Za-z][A-Za-z.]+[A-Za-z]$/,
                    message: "只能输入 字母 或  ’.‘  ，且首末位必须为字母",
                    trigger: [ "change", "blur" ]
                } ]
            }), o = l();
            z({
                open: async (a, e, p, _) => {
                    r.value = !0, g.value = a === "update" ? "编辑" : a === "create" ? "新建" : "查看", 
                    y.value = a, C(), h.value = e, d.value = p || "", a === "update" && (t.value.name = _ || "");
                }
            });
            const C = () => {
                var a;
                t.value = {
                    id: "",
                    name: ""
                }, (a = o.value) == null || a.resetFields();
            };
            return P(() => {}), (a, e) => {
                const p = O, _ = Q, I = R, b = $, S = B, Z = E;
                return w(), x(S, {
                    modelValue: s(r),
                    "onUpdate:modelValue": e[4] || (e[4] = n => N(r) ? r.value = n : null),
                    title: s(g) + "文件",
                    width: "440"
                }, {
                    footer: u(() => [ i(b, {
                        onClick: e[2] || (e[2] = n => r.value = !1)
                    }, {
                        default: u(() => [ V("取 消") ]),
                        _: 1
                    }), i(b, {
                        type: "primary",
                        onClick: e[3] || (e[3] = n => (async () => {
                            if (o && await o.value.validate()) {
                                c.value = !0;
                                try {
                                    if (y.value === "create") {
                                        const D = new File([ "// 请完善文件内容" ], t.value.name, {
                                            type: ""
                                        });
                                        let m = new FormData();
                                        m.append("file", D), m.append("groupId", h.value), 
                                        m.append("parentId", d.value), await T(m), 
                                        v.success(f("common.createSuccess"));
                                    } else await K({
                                        fileId: d.value,
                                        fileName: t.value.name
                                    }), v.success(f("common.updateSuccess"));
                                    r.value = !1, F("success");
                                } finally {
                                    c.value = !1;
                                }
                            }
                        })())
                    }, {
                        default: u(() => [ V("确 定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ j((w(), x(I, {
                        ref_key: "formRef",
                        ref: o,
                        model: s(t),
                        rules: s(U),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        onSubmit: e[1] || (e[1] = M(() => {}, [ "prevent" ]))
                    }, {
                        default: u(() => [ i(_, {
                            label: "文件名称",
                            prop: "name"
                        }, {
                            default: u(() => [ i(p, {
                                modelValue: s(t).name,
                                "onUpdate:modelValue": e[0] || (e[0] = n => s(t).name = n),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入文件名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ Z, s(c) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    };
});

export {
    X as __tla,
    k as default
};