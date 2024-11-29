import {
    a7 as i,
    d as j,
    aa as z,
    p as B,
    r,
    U as G,
    o as b,
    C as I,
    l as s,
    k as c,
    a as e,
    v as x,
    A as H,
    m as K,
    P as L,
    O as M,
    Q as N,
    J as T,
    aU as W,
    a9 as X,
    __tla as Y
} from "./index-6c08ea4c.js";

import {
    d as Z,
    h as $
} from "./tree-05ea8e09.js";

import {
    E as aa,
    __tla as ea
} from "./index-ef4d146e.js";

let U, k, C, f, la = Promise.all([ (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})() ]).then(async () => {
    f = async d => await i.get({
        url: "/infra/demo02-category/list",
        params: d
    }), k = async d => await i.delete({
        url: "/infra/demo02-category/delete?id=" + d
    }), C = async d => await i.download({
        url: "/infra/demo02-category/export-excel",
        params: d
    }), U = j({
        __name: "Demo02CategoryForm",
        emits: [ "success" ],
        setup(d, {
            expose: q,
            emit: F
        }) {
            const {
                t: m
            } = z(), _ = B(), o = r(!1), g = r(""), u = r(!1), w = r(""), t = r({
                id: void 0,
                name: void 0,
                parentId: void 0
            }), P = G({
                name: [ {
                    required: !0,
                    message: "名字不能为空",
                    trigger: "blur"
                } ],
                parentId: [ {
                    required: !0,
                    message: "父级编号不能为空",
                    trigger: "blur"
                } ]
            }), p = r(), y = r();
            q({
                open: async (l, a) => {
                    if (o.value = !0, g.value = m("action." + l), w.value = l, D(), 
                    a) {
                        u.value = !0;
                        try {
                            t.value = await (async v => await i.get({
                                url: "/infra/demo02-category/get?id=" + v
                            }))(a);
                        } finally {
                            u.value = !1;
                        }
                    }
                    await E();
                }
            });
            const S = F, A = async () => {
                await p.value.validate(), u.value = !0;
                try {
                    const l = t.value;
                    w.value === "create" ? (await (async a => await i.post({
                        url: "/infra/demo02-category/create",
                        data: a
                    }))(l), _.success(m("common.createSuccess"))) : (await (async a => await i.put({
                        url: "/infra/demo02-category/update",
                        data: a
                    }))(l), _.success(m("common.updateSuccess"))), o.value = !1, 
                    S("success");
                } finally {
                    u.value = !1;
                }
            }, D = () => {
                var l;
                t.value = {
                    id: void 0,
                    name: void 0,
                    parentId: void 0
                }, (l = p.value) == null || l.resetFields();
            }, E = async () => {
                y.value = [];
                const l = await f(), a = {
                    id: 0,
                    name: "顶级示例分类",
                    children: []
                };
                a.children = $(l, "id", "parentId"), y.value.push(a);
            };
            return (l, a) => {
                const v = L, h = M, J = aa, O = N, V = T, Q = W, R = X;
                return b(), I(Q, {
                    title: e(g),
                    modelValue: e(o),
                    "onUpdate:modelValue": a[3] || (a[3] = n => K(o) ? o.value = n : null)
                }, {
                    footer: s(() => [ c(V, {
                        onClick: A,
                        type: "primary",
                        disabled: e(u)
                    }, {
                        default: s(() => [ x("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]), c(V, {
                        onClick: a[2] || (a[2] = n => o.value = !1)
                    }, {
                        default: s(() => [ x("取 消") ]),
                        _: 1
                    }) ]),
                    default: s(() => [ H((b(), I(O, {
                        ref_key: "formRef",
                        ref: p,
                        model: e(t),
                        rules: e(P),
                        "label-width": "100px"
                    }, {
                        default: s(() => [ c(h, {
                            label: "名字",
                            prop: "name"
                        }, {
                            default: s(() => [ c(v, {
                                modelValue: e(t).name,
                                "onUpdate:modelValue": a[0] || (a[0] = n => e(t).name = n),
                                placeholder: "请输入名字"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), c(h, {
                            label: "父级编号",
                            prop: "parentId"
                        }, {
                            default: s(() => [ c(J, {
                                modelValue: e(t).parentId,
                                "onUpdate:modelValue": a[1] || (a[1] = n => e(t).parentId = n),
                                data: e(y),
                                props: e(Z),
                                "check-strictly": "",
                                "default-expand-all": "",
                                placeholder: "请选择父级编号"
                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ R, e(u) ] ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]);
            };
        }
    });
});

export {
    U as _,
    la as __tla,
    k as d,
    C as e,
    f as g
};