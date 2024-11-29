import {
    d as A,
    h as O,
    r as i,
    p as C,
    j as q,
    o as D,
    c as F,
    k as r,
    l as u,
    v as h,
    a as l,
    H as w,
    A as k,
    m as H,
    P as J,
    O as Q,
    Q as R,
    J as S,
    aU as T,
    __tla as z
} from "./index-6c08ea4c.js";

import {
    v as N,
    d as B
} from "./validate-b72f006c.js";

import {
    c as E,
    u as G,
    __tla as K
} from "./libraryAdmin-dc76919b.js";

let y, M = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    y = A({
        __name: "addLink",
        emits: [ "refresh" ],
        setup(W, {
            expose: L,
            emit: V
        }) {
            const m = O(), o = i(), p = V, n = i({}), s = i(!1), v = i("添加链接"), a = i({
                resName: "",
                resLink: ""
            }), g = C(), U = i({
                resName: [ {
                    required: !0,
                    message: "链接名称不能为空",
                    trigger: "blur"
                }, {
                    validator: N,
                    message: "链接名称不能为空",
                    trigger: "blur"
                }, {
                    max: 200,
                    message: "长度在200个字符以内",
                    trigger: "blur"
                } ],
                resLink: [ {
                    required: !0,
                    message: "链接网址不能为空",
                    trigger: "blur"
                }, {
                    validator: N,
                    message: "链接网址不能为空",
                    trigger: "blur"
                }, {
                    validator: B,
                    trigger: "blur"
                }, {
                    max: 9999,
                    message: "长度在9999个字符以内",
                    trigger: "blur"
                } ]
            }), I = () => {
                o.value.validate(t => {
                    if (t) if (n.value.type == "add") {
                        const e = {
                            ...n.value.fatherObj
                        };
                        e.children = [ {
                            resName: a.value.resName,
                            resType: 6,
                            resDesc: a.value.resName,
                            resLink: a.value.resLink,
                            pvtParentId: "",
                            pvtAncestorId: "",
                            pubParentId: "",
                            pubAncestorId: "",
                            neuParentId: "0",
                            neuAncestorId: "0",
                            release: 0,
                            creatorName: m.getUser.nickname,
                            updaterName: m.getUser.nickname
                        } ], E(e).then(c => {
                            g.success("提交成功"), s.value = !1, p("refresh");
                        });
                    } else n.value.type == "edit" && G({
                        ...a.value,
                        updaterName: m.getUser.nickname
                    }).then(() => {
                        g.success("提交成功"), s.value = !1, p("refresh");
                    });
                });
            }, x = () => {
                a.value = {
                    resName: "",
                    resLink: ""
                }, o.value.resetFields();
            };
            return L({
                openDialog: t => {
                    s.value = !0, v.value = t.title, n.value = t, t.type == "edit" && Object.assign(a.value, t.editObject);
                }
            }), (t, e) => {
                const c = J, _ = Q, P = R, f = S, j = T, b = q("trim");
                return D(), F("div", null, [ r(j, {
                    modelValue: l(s),
                    "onUpdate:modelValue": e[4] || (e[4] = d => H(s) ? s.value = d : null),
                    scroll: !0,
                    "max-height": "290",
                    title: l(v),
                    width: "420",
                    onClose: x
                }, {
                    footer: u(() => [ r(f, {
                        type: "default",
                        onClick: e[3] || (e[3] = d => s.value = !1)
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), r(f, {
                        type: "primary",
                        onClick: I
                    }, {
                        default: u(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ r(P, {
                        ref_key: "addLinkFormRef",
                        ref: o,
                        model: l(a),
                        rules: l(U),
                        class: "neu",
                        onSubmit: e[2] || (e[2] = w(() => {}, [ "prevent" ]))
                    }, {
                        default: u(() => [ r(_, {
                            label: "链接名称",
                            prop: "resName"
                        }, {
                            default: u(() => [ k(r(c, {
                                modelValue: l(a).resName,
                                "onUpdate:modelValue": e[0] || (e[0] = d => l(a).resName = d),
                                placeholder: "请输入链接名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ b ] ]) ]),
                            _: 1
                        }), r(_, {
                            label: "链接网址",
                            prop: "resLink"
                        }, {
                            default: u(() => [ k(r(c, {
                                modelValue: l(a).resLink,
                                "onUpdate:modelValue": e[1] || (e[1] = d => l(a).resLink = d),
                                placeholder: "请输入链接网址",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ b ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    });
});

export {
    y as _,
    M as __tla
};