import {
    a7 as n,
    d as M,
    aa as N,
    p as j,
    r as c,
    U as G,
    o as p,
    C as y,
    l as r,
    k as s,
    v as b,
    a as e,
    A as T,
    c as X,
    F as Y,
    y as H,
    B as K,
    m as L,
    P as W,
    O as Z,
    bp as $,
    bq as aa,
    N as ea,
    Q as la,
    J as ta,
    aU as ra,
    a9 as sa,
    __tla as oa
} from "./index-6c08ea4c.js";

import {
    _ as da,
    __tla as ua
} from "./UploadImg-4110c3da.js";

import {
    _ as ia,
    __tla as na
} from "./Editor-ef737d2a.js";

import {
    b as ca,
    D as ma,
    __tla as pa
} from "./dict-c5825220.js";

let w, U, S, k, _a = Promise.all([ (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})() ]).then(async () => {
    k = async d => await n.get({
        url: "/infra/demo01-contact/page",
        params: d
    }), U = async d => await n.delete({
        url: "/infra/demo01-contact/delete?id=" + d
    }), S = async d => await n.download({
        url: "/infra/demo01-contact/export-excel",
        params: d
    }), w = M({
        __name: "Demo01ContactForm",
        emits: [ "success" ],
        setup(d, {
            expose: q,
            emit: C
        }) {
            const {
                t: _
            } = N(), g = j(), u = c(!1), V = c(""), i = c(!1), h = c(""), t = c({
                id: void 0,
                name: void 0,
                sex: void 0,
                birthday: void 0,
                description: void 0,
                avatar: void 0
            }), F = G({
                name: [ {
                    required: !0,
                    message: "名字不能为空",
                    trigger: "blur"
                } ],
                sex: [ {
                    required: !0,
                    message: "性别不能为空",
                    trigger: "blur"
                } ],
                birthday: [ {
                    required: !0,
                    message: "出生年不能为空",
                    trigger: "blur"
                } ],
                description: [ {
                    required: !0,
                    message: "简介不能为空",
                    trigger: "blur"
                } ]
            }), v = c();
            q({
                open: async (o, a) => {
                    if (u.value = !0, V.value = _("action." + o), h.value = o, E(), 
                    a) {
                        i.value = !0;
                        try {
                            t.value = await (async f => await n.get({
                                url: "/infra/demo01-contact/get?id=" + f
                            }))(a);
                        } finally {
                            i.value = !1;
                        }
                    }
                }
            });
            const R = C, D = async () => {
                await v.value.validate(), i.value = !0;
                try {
                    const o = t.value;
                    h.value === "create" ? (await (async a => await n.post({
                        url: "/infra/demo01-contact/create",
                        data: a
                    }))(o), g.success(_("common.createSuccess"))) : (await (async a => await n.put({
                        url: "/infra/demo01-contact/update",
                        data: a
                    }))(o), g.success(_("common.updateSuccess"))), u.value = !1, 
                    R("success");
                } finally {
                    i.value = !1;
                }
            }, E = () => {
                var o;
                t.value = {
                    id: void 0,
                    name: void 0,
                    sex: void 0,
                    birthday: void 0,
                    description: void 0,
                    avatar: void 0
                }, (o = v.value) == null || o.resetFields();
            };
            return (o, a) => {
                const f = W, m = Z, z = $, O = aa, P = ea, Q = ia, A = da, B = la, x = ta, I = ra, J = sa;
                return p(), y(I, {
                    title: e(V),
                    modelValue: e(u),
                    "onUpdate:modelValue": a[6] || (a[6] = l => L(u) ? u.value = l : null)
                }, {
                    footer: r(() => [ s(x, {
                        onClick: a[5] || (a[5] = l => u.value = !1)
                    }, {
                        default: r(() => [ b("取 消") ]),
                        _: 1
                    }), s(x, {
                        onClick: D,
                        type: "primary",
                        disabled: e(i)
                    }, {
                        default: r(() => [ b("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: r(() => [ T((p(), y(B, {
                        ref_key: "formRef",
                        ref: v,
                        model: e(t),
                        rules: e(F),
                        "label-width": "100px"
                    }, {
                        default: r(() => [ s(m, {
                            label: "名字",
                            prop: "name"
                        }, {
                            default: r(() => [ s(f, {
                                modelValue: e(t).name,
                                "onUpdate:modelValue": a[0] || (a[0] = l => e(t).name = l),
                                placeholder: "请输入名字"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(m, {
                            label: "性别",
                            prop: "sex"
                        }, {
                            default: r(() => [ s(O, {
                                modelValue: e(t).sex,
                                "onUpdate:modelValue": a[1] || (a[1] = l => e(t).sex = l)
                            }, {
                                default: r(() => [ (p(!0), X(Y, null, H(e(ca)(e(ma).SYSTEM_USER_SEX), l => (p(), 
                                y(z, {
                                    key: l.value,
                                    label: l.value
                                }, {
                                    default: r(() => [ b(K(l.label), 1) ]),
                                    _: 2
                                }, 1032, [ "label" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(m, {
                            label: "出生年",
                            prop: "birthday"
                        }, {
                            default: r(() => [ s(P, {
                                modelValue: e(t).birthday,
                                "onUpdate:modelValue": a[2] || (a[2] = l => e(t).birthday = l),
                                type: "date",
                                "value-format": "x",
                                placeholder: "选择出生年"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(m, {
                            label: "简介",
                            prop: "description"
                        }, {
                            default: r(() => [ s(Q, {
                                modelValue: e(t).description,
                                "onUpdate:modelValue": a[3] || (a[3] = l => e(t).description = l),
                                height: "150px"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), s(m, {
                            label: "头像",
                            prop: "avatar"
                        }, {
                            default: r(() => [ s(A, {
                                modelValue: e(t).avatar,
                                "onUpdate:modelValue": a[4] || (a[4] = l => e(t).avatar = l)
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ J, e(i) ] ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]);
            };
        }
    });
});

export {
    w as _,
    _a as __tla,
    U as d,
    S as e,
    k as g
};