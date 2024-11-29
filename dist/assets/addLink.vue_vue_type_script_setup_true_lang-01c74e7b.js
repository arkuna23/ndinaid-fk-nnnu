import {
    d as U,
    r as o,
    p as C,
    o as q,
    c as F,
    k as a,
    l as t,
    v as _,
    a as l,
    m as L,
    P,
    O as w,
    Q as D,
    J,
    aU as O,
    __tla as Q
} from "./index-6c08ea4c.js";

import {
    v,
    d as R
} from "./validate-b72f006c.js";

let f, j = Promise.all([ (() => {
    try {
        return Q;
    } catch {}
})() ]).then(async () => {
    f = U({
        __name: "addLink",
        setup(z, {
            expose: k
        }) {
            const i = o(), s = o(!1), m = o("添加链接"), r = o({
                name: "",
                link: ""
            }), n = C(), b = o({
                name: [ {
                    required: !0,
                    message: "链接名称不能为空",
                    trigger: "blur"
                }, {
                    validator: v,
                    message: "链接名称不能为空",
                    trigger: "blur"
                }, {
                    max: 200,
                    message: "长度在200个字符以内",
                    trigger: "blur"
                } ],
                link: [ {
                    required: !0,
                    message: "链接网址不能为空",
                    trigger: "blur"
                }, {
                    validator: v,
                    message: "链接网址不能为空",
                    trigger: "blur"
                }, {
                    validator: R,
                    trigger: "blur"
                }, {
                    max: 9999,
                    message: "长度在9999个字符以内",
                    trigger: "blur"
                } ]
            }), V = () => {
                i.value.validate(d => {
                    d ? (n.success("提交成功"), s.value = !1) : n.error("提交失败");
                });
            }, h = () => {
                r.value.name = "", r.value.link = "", i.value.resetFields();
            };
            return k({
                openDialog: d => {
                    s.value = !0, m.value = d.title;
                }
            }), (d, e) => {
                const g = P, p = w, y = D, c = J, x = O;
                return q(), F("div", null, [ a(x, {
                    modelValue: l(s),
                    "onUpdate:modelValue": e[3] || (e[3] = u => L(s) ? s.value = u : null),
                    scroll: !0,
                    "max-height": "290",
                    title: l(m),
                    width: "420",
                    onClose: h
                }, {
                    footer: t(() => [ a(c, {
                        type: "default",
                        onClick: e[2] || (e[2] = u => s.value = !1)
                    }, {
                        default: t(() => [ _("取消") ]),
                        _: 1
                    }), a(c, {
                        type: "primary",
                        onClick: V
                    }, {
                        default: t(() => [ _("确定") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ a(y, {
                        ref_key: "addLinkFormRef",
                        ref: i,
                        model: l(r),
                        rules: l(b),
                        class: "neu"
                    }, {
                        default: t(() => [ a(p, {
                            label: "链接名称",
                            prop: "name"
                        }, {
                            default: t(() => [ a(g, {
                                modelValue: l(r).name,
                                "onUpdate:modelValue": e[0] || (e[0] = u => l(r).name = u),
                                placeholder: "请输入链接名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(p, {
                            label: "链接网址",
                            prop: "link"
                        }, {
                            default: t(() => [ a(g, {
                                modelValue: l(r).link,
                                "onUpdate:modelValue": e[1] || (e[1] = u => l(r).link = u),
                                placeholder: "请输入链接网址",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]) ]),
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
    f as _,
    j as __tla
};