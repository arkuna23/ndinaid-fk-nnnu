import {
    d as O,
    r as a,
    h as P,
    p as q,
    j as w,
    o as A,
    c as D,
    k as s,
    l as t,
    v as c,
    a as u,
    H,
    A as J,
    m as Q,
    P as R,
    O as S,
    Q as z,
    J as B,
    aU as E,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    v as I,
    c as K
} from "./validate-b72f006c.js";

import {
    o as L,
    __tla as M
} from "./file-e038b35d.js";

import {
    u as T,
    __tla as W
} from "./library-c2ecc5ca.js";

let v, X = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})() ]).then(async () => {
    v = O({
        __name: "editFileName",
        emits: [ "refresh" ],
        setup(Y, {
            expose: p,
            emit: f
        }) {
            const i = a(), g = P(), h = f, l = a(!1), N = a("编辑资料"), r = a({
                resName: ""
            }), b = q(), y = a({
                resName: [ {
                    required: !0,
                    message: "名称不能为空",
                    trigger: "blur"
                }, {
                    validator: I,
                    message: "名称不能为空",
                    trigger: "blur"
                }, {
                    validator: K,
                    message: '名称不能包含字符 "\\" 或 "/"',
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), d = a({}), n = a({}), x = () => {
                i.value.validate(m => {
                    if (m) {
                        const e = {
                            ...n.value,
                            resName: r.value.resName + "." + d.value.extension,
                            updaterName: g.getUser.nickname
                        };
                        T(e).then(() => {
                            b.success("提交成功"), l.value = !1, h("refresh");
                        });
                    }
                });
            }, V = () => {
                r.value = {
                    resName: ""
                }, i.value.resetFields();
            };
            return p({
                openDialog: m => {
                    l.value = !0, n.value = m.editObject, d.value = L(m.editObject.resName), 
                    r.value.resName = d.value.baseName;
                }
            }), (m, e) => {
                const j = R, k = S, F = z, _ = B, U = E, C = w("trim");
                return A(), D("div", null, [ s(U, {
                    modelValue: u(l),
                    "onUpdate:modelValue": e[3] || (e[3] = o => Q(l) ? l.value = o : null),
                    scroll: !0,
                    "max-height": "210",
                    title: u(N),
                    width: "420",
                    onClose: V
                }, {
                    footer: t(() => [ s(_, {
                        type: "default",
                        onClick: e[2] || (e[2] = o => l.value = !1)
                    }, {
                        default: t(() => [ c("取消") ]),
                        _: 1
                    }), s(_, {
                        type: "primary",
                        onClick: x
                    }, {
                        default: t(() => [ c("确定") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ s(F, {
                        ref_key: "addFolderFormRef",
                        ref: i,
                        model: u(r),
                        rules: u(y),
                        class: "neu",
                        onSubmit: e[1] || (e[1] = H(() => {}, [ "prevent" ]))
                    }, {
                        default: t(() => [ s(k, {
                            label: "重命名",
                            prop: "resName"
                        }, {
                            default: t(() => [ J(s(j, {
                                modelValue: u(r).resName,
                                "onUpdate:modelValue": e[0] || (e[0] = o => u(r).resName = o),
                                placeholder: "请输入新的名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ C ] ]) ]),
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
    v as _,
    X as __tla
};