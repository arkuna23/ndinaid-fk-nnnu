import {
    r as a,
    h as O,
    p as P,
    j as q,
    o as w,
    c as A,
    k as t,
    l as s,
    v as c,
    a as u,
    H as D,
    A as H,
    m as J,
    P as Q,
    O as R,
    Q as S,
    J as z,
    aU as B,
    __tla as E
} from "./index-6c08ea4c.js";

import {
    v as G,
    c as I
} from "./validate-b72f006c.js";

import {
    o as K,
    __tla as L
} from "./file-e038b35d.js";

import {
    u as M,
    __tla as T
} from "./library-c2ecc5ca.js";

let v, W = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})() ]).then(async () => {
    v = {
        __name: "editFileName",
        emits: [ "refresh" ],
        setup(X, {
            expose: p,
            emit: f
        }) {
            const i = a(), g = O(), h = f, l = a(!1), N = a("编辑资料"), r = a({
                resName: ""
            }), b = P(), y = a({
                resName: [ {
                    required: !0,
                    message: "名称不能为空",
                    trigger: "blur"
                }, {
                    validator: G,
                    message: "名称不能为空",
                    trigger: "blur"
                }, {
                    validator: I,
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
                        M(e).then(() => {
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
                    l.value = !0, n.value = m.editObject, d.value = K(m.editObject.resName), 
                    r.value.resName = d.value.baseName;
                }
            }), (m, e) => {
                const j = Q, k = R, F = S, _ = z, U = B, C = q("trim");
                return w(), A("div", null, [ t(U, {
                    modelValue: u(l),
                    "onUpdate:modelValue": e[3] || (e[3] = o => J(l) ? l.value = o : null),
                    scroll: !0,
                    "max-height": "210",
                    title: u(N),
                    width: "420",
                    onClose: V
                }, {
                    footer: s(() => [ t(_, {
                        type: "default",
                        onClick: e[2] || (e[2] = o => l.value = !1)
                    }, {
                        default: s(() => [ c("取消") ]),
                        _: 1
                    }), t(_, {
                        type: "primary",
                        onClick: x
                    }, {
                        default: s(() => [ c("确定") ]),
                        _: 1
                    }) ]),
                    default: s(() => [ t(F, {
                        ref_key: "addFolderFormRef",
                        ref: i,
                        model: u(r),
                        rules: u(y),
                        class: "neu",
                        onSubmit: e[1] || (e[1] = D(() => {}, [ "prevent" ]))
                    }, {
                        default: s(() => [ t(k, {
                            label: "重命名",
                            prop: "resName"
                        }, {
                            default: s(() => [ H(t(j, {
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
    };
});

export {
    W as __tla,
    v as default
};