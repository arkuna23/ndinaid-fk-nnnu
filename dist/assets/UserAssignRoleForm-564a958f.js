import {
    a7 as y,
    d as S,
    aa as j,
    p as J,
    r as n,
    o as m,
    C as _,
    l as t,
    k as d,
    v as b,
    a as s,
    A as M,
    c as O,
    F as Q,
    y as q,
    m as z,
    P as B,
    O as D,
    ab as E,
    ac as G,
    Q as H,
    J as K,
    aU as L,
    a9 as N,
    __tla as T
} from "./index-6c08ea4c.js";

import {
    b as W,
    __tla as X
} from "./index-736610b8.js";

let V, Y = Promise.all([ (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})() ]).then(async () => {
    V = S({
        name: "SystemUserAssignRoleForm",
        __name: "UserAssignRoleForm",
        emits: [ "success" ],
        setup(Z, {
            expose: k,
            emit: I
        }) {
            const {
                t: w
            } = j(), U = J(), r = n(!1), o = n(!1), e = n({
                id: -1,
                nickname: "",
                username: "",
                roleIds: []
            }), i = n(), v = n([]);
            k({
                open: async u => {
                    r.value = !0, F(), e.value.id = u.id, e.value.username = u.username, 
                    e.value.nickname = u.nickname, o.value = !0;
                    try {
                        e.value.roleIds = await (async a => await y.get({
                            url: "/system/permission/list-user-roles?userId=" + a
                        }))(u.id);
                    } finally {
                        o.value = !1;
                    }
                    v.value = await W();
                }
            });
            const g = I, h = async () => {
                if (i && await i.value.validate()) {
                    o.value = !0;
                    try {
                        await (async u => await y.post({
                            url: "/system/permission/assign-user-role",
                            data: u
                        }))({
                            userId: e.value.id,
                            roleIds: e.value.roleIds
                        }), U.success(w("common.updateSuccess")), r.value = !1, 
                        g("success", !0);
                    } finally {
                        o.value = !1;
                    }
                }
            }, F = () => {
                var u;
                e.value = {
                    id: -1,
                    nickname: "",
                    username: "",
                    roleIds: []
                }, (u = i.value) == null || u.resetFields();
            };
            return (u, a) => {
                const f = B, c = D, x = E, A = G, C = H, p = K, R = L, P = N;
                return m(), _(R, {
                    modelValue: s(r),
                    "onUpdate:modelValue": a[4] || (a[4] = l => z(r) ? r.value = l : null),
                    title: "分配角色"
                }, {
                    footer: t(() => [ d(p, {
                        onClick: a[3] || (a[3] = l => r.value = !1)
                    }, {
                        default: t(() => [ b("取 消") ]),
                        _: 1
                    }), d(p, {
                        disabled: s(o),
                        type: "primary",
                        onClick: h
                    }, {
                        default: t(() => [ b("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: t(() => [ M((m(), _(C, {
                        ref_key: "formRef",
                        ref: i,
                        model: s(e),
                        "label-width": "80px"
                    }, {
                        default: t(() => [ d(c, {
                            label: "用户名称"
                        }, {
                            default: t(() => [ d(f, {
                                modelValue: s(e).username,
                                "onUpdate:modelValue": a[0] || (a[0] = l => s(e).username = l),
                                modelModifiers: {
                                    trim: !0
                                },
                                disabled: !0
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), d(c, {
                            label: "用户昵称"
                        }, {
                            default: t(() => [ d(f, {
                                modelValue: s(e).nickname,
                                "onUpdate:modelValue": a[1] || (a[1] = l => s(e).nickname = l),
                                disabled: !0
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), d(c, {
                            label: "角色"
                        }, {
                            default: t(() => [ d(A, {
                                modelValue: s(e).roleIds,
                                "onUpdate:modelValue": a[2] || (a[2] = l => s(e).roleIds = l),
                                multiple: "",
                                placeholder: "请选择角色"
                            }, {
                                default: t(() => [ (m(!0), O(Q, null, q(s(v), l => (m(), 
                                _(x, {
                                    key: l.id,
                                    label: l.name,
                                    value: l.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ])), [ [ P, s(o) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    Y as __tla,
    V as default
};