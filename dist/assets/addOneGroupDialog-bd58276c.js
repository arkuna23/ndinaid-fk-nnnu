import {
    h as C,
    u as w,
    T as N,
    r,
    U as O,
    o as q,
    C as D,
    l as u,
    k as n,
    a as l,
    t as Q,
    v as h,
    m as j,
    bo as b,
    P as F,
    O as G,
    Q as J,
    J as T,
    aU as z,
    __tla as A
} from "./index-6c08ea4c.js";

import {
    g as B,
    c as E,
    u as H,
    __tla as K
} from "./index-d7ee4e02.js";

let y, L = Promise.all([ (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let g;
    g = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, y = {
        __name: "addOneGroupDialog",
        emits: [ "tableRefresh" ],
        setup(M, {
            expose: x,
            emit: k
        }) {
            const _ = C();
            w(), N();
            const t = r(!1), m = r(""), v = k, a = r({
                name: ""
            }), d = r(), I = O({
                name: [ {
                    required: !0,
                    message: "小组名称不能为空",
                    trigger: "blur"
                }, {
                    max: 30,
                    message: "小组名称最多30位字符",
                    trigger: "blur"
                } ]
            }), s = r(null), U = () => {
                d.value.validate(o => {
                    o && (m.value == "add" ? E({
                        groupPlanId: s.value.planId,
                        name: a.value.name,
                        creatorName: _.getUser.nickname
                    }).then(e => {
                        b({
                            message: "操作成功",
                            type: "success"
                        }), v("tableRefresh"), p();
                    }) : H({
                        id: s.value.groupId,
                        groupPlanId: s.value.planId,
                        name: a.value.name,
                        creatorName: _.getUser.nickname
                    }).then(e => {
                        b({
                            message: "操作成功",
                            type: "success"
                        }), v("tableRefresh"), p();
                    }));
                });
            }, p = () => {
                s.value = null, a.value = {
                    name: ""
                }, d.value.resetFields(), t.value = !1;
            };
            return x({
                open: (o, e) => {
                    s.value = e, m.value = o, e.groupId && B({
                        id: e.groupId
                    }).then(c => {
                        a.value.name = c.name;
                    }), t.value = !0;
                }
            }), (o, e) => {
                const c = F, V = G, P = J, f = T, R = z;
                return q(), D(R, {
                    modelValue: l(t),
                    "onUpdate:modelValue": e[1] || (e[1] = i => j(t) ? t.value = i : null),
                    title: l(m) == "add" ? "新增小组" : "编辑小组",
                    width: "420px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: u(() => [ n(P, {
                        ref_key: "formRef",
                        ref: d,
                        "label-position": "top",
                        "label-width": "90px",
                        model: l(a),
                        rules: l(I)
                    }, {
                        default: u(() => [ n(V, {
                            prop: "name",
                            label: "小组名称"
                        }, {
                            default: u(() => [ n(c, {
                                modelValue: l(a).name,
                                "onUpdate:modelValue": e[0] || (e[0] = i => l(a).name = i),
                                clearable: "",
                                placeholder: "请输入小组名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), Q("div", g, [ n(f, {
                        onClick: p
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), n(f, {
                        type: "primary",
                        onClick: U
                    }, {
                        default: u(() => [ h("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    };
});

export {
    L as __tla,
    y as default
};