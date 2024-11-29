import {
    d as P,
    h as A,
    r as d,
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
    b as E,
    u as G,
    __tla as K
} from "./library-c2ecc5ca.js";

let y, M = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    y = P({
        __name: "addLink",
        emits: [ "refresh" ],
        setup(W, {
            expose: L,
            emit: V
        }) {
            const n = A(), o = d(), p = V, m = d({}), s = d(!1), v = d("添加链接"), a = d({
                resName: "",
                resLink: ""
            }), g = C(), U = d({
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
            }), x = () => {
                o.value.validate(t => {
                    if (t) if (m.value.type == "add") {
                        const e = {
                            ...m.value.fatherObj
                        };
                        e.children = [ {
                            resName: a.value.resName,
                            resType: 6,
                            resDesc: a.value.resName,
                            resLink: a.value.resLink,
                            pvtParentId: "0",
                            pvtAncestorId: "0",
                            pubParentId: "",
                            pubAncestorId: "",
                            release: 0,
                            creatorName: n.getUser.nickname,
                            updaterName: n.getUser.nickname
                        } ], E(e).then(c => {
                            g.success("提交成功"), s.value = !1, p("refresh");
                        });
                    } else m.value.type == "edit" && G({
                        ...a.value,
                        updaterName: n.getUser.nickname
                    }).then(() => {
                        g.success("提交成功"), s.value = !1, p("refresh");
                    });
                });
            }, j = () => {
                a.value = {
                    resName: "",
                    resLink: ""
                }, o.value.resetFields();
            };
            return L({
                openDialog: t => {
                    s.value = !0, v.value = t.title, m.value = t, t.type == "edit" && Object.assign(a.value, t.editObject);
                }
            }), (t, e) => {
                const c = J, _ = Q, I = R, f = S, O = T, b = q("trim");
                return D(), F("div", null, [ r(O, {
                    modelValue: l(s),
                    "onUpdate:modelValue": e[4] || (e[4] = i => H(s) ? s.value = i : null),
                    scroll: !0,
                    "max-height": "290",
                    title: l(v),
                    width: "420",
                    onClose: j
                }, {
                    footer: u(() => [ r(f, {
                        type: "default",
                        onClick: e[3] || (e[3] = i => s.value = !1)
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), r(f, {
                        type: "primary",
                        onClick: x
                    }, {
                        default: u(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ r(I, {
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
                                "onUpdate:modelValue": e[0] || (e[0] = i => l(a).resName = i),
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
                                "onUpdate:modelValue": e[1] || (e[1] = i => l(a).resLink = i),
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