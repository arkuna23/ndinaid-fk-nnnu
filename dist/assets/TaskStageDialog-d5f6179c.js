import {
    aa as D,
    p as F,
    r as t,
    U as J,
    f as K,
    o as y,
    C as g,
    l as r,
    k as d,
    v as h,
    A as O,
    a as s,
    m as Q,
    P as R,
    O as T,
    cK as B,
    Q as E,
    J as G,
    aU as H,
    a9 as L,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    w as N,
    x as W,
    y as X,
    __tla as Y
} from "./project-51c056b9.js";

import {
    _ as Z
} from "./_plugin-vue_export-helper-1b428a4d.js";

let V, $ = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})() ]).then(async () => {
    V = Z({
        __name: "TaskStageDialog",
        props: {
            projectId: {
                type: String,
                default: ""
            }
        },
        emits: [ "success" ],
        setup(w, {
            expose: b,
            emit: x
        }) {
            const {
                t: m
            } = D(), c = F(), I = w, o = t(!1), p = t(""), i = t(!1), f = t(""), l = t({
                id: "",
                name: "",
                sort: null
            }), U = J({
                sort: [ {
                    required: !0,
                    message: "请输入阶段顺序",
                    trigger: "blur"
                } ],
                name: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入阶段名称"
                }, {
                    min: 1,
                    max: 50,
                    message: "长度必须介于 1 至 50 之间",
                    trigger: "blur"
                } ]
            }), n = t();
            t(), t([]), t([]), b({
                open: async (a, e) => {
                    if (o.value = !0, p.value = a === "update" ? "编辑" : "新建", f.value = a, 
                    j(), a === "update" && e) {
                        i.value = !0;
                        try {
                            l.value = await N(e);
                        } finally {
                            i.value = !1;
                        }
                    } else e && (l.value.parentId = e);
                }
            });
            const k = x, S = async () => {
                if (n && await n.value.validate()) {
                    i.value = !0;
                    try {
                        const a = {
                            ...l.value,
                            projectId: I.projectId
                        };
                        f.value === "create" ? (await W(a), c.success(m("common.createSuccess"))) : (await X(a), 
                        c.success(m("common.updateSuccess"))), o.value = !1, k("success");
                    } finally {
                        i.value = !1;
                    }
                }
            }, j = () => {
                var a;
                l.value = {
                    id: "",
                    name: "",
                    sort: null
                }, (a = n.value) == null || a.resetFields();
            };
            return K(() => {}), (a, e) => {
                const C = R, _ = T, q = B, P = E, v = G, z = H, A = L;
                return y(), g(z, {
                    modelValue: s(o),
                    "onUpdate:modelValue": e[3] || (e[3] = u => Q(o) ? o.value = u : null),
                    title: s(p) + "阶段",
                    width: "420"
                }, {
                    footer: r(() => [ d(v, {
                        onClick: e[2] || (e[2] = u => o.value = !1)
                    }, {
                        default: r(() => [ h("取 消") ]),
                        _: 1
                    }), d(v, {
                        type: "primary",
                        onClick: S
                    }, {
                        default: r(() => [ h("确 定") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ O((y(), g(P, {
                        ref_key: "formRef",
                        ref: n,
                        model: s(l),
                        rules: s(U),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: r(() => [ d(_, {
                            label: "阶段名称",
                            prop: "name"
                        }, {
                            default: r(() => [ d(C, {
                                modelValue: s(l).name,
                                "onUpdate:modelValue": e[0] || (e[0] = u => s(l).name = u),
                                placeholder: "请输入阶段名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), d(_, {
                            label: "阶段顺序",
                            prop: "sort"
                        }, {
                            default: r(() => [ d(q, {
                                modelValue: s(l).sort,
                                "onUpdate:modelValue": e[1] || (e[1] = u => s(l).sort = u),
                                placeholder: "请输入阶段顺序",
                                min: 0,
                                step: 1,
                                "step-strictly": "",
                                max: 1e5,
                                "controls-position": "right",
                                class: "align-left",
                                style: {
                                    width: "100%"
                                }
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ A, s(i) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-4084ad70" ] ]);
});

export {
    $ as __tla,
    V as default
};