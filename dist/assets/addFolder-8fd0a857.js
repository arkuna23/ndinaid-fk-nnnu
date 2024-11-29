import {
    h as x,
    r,
    p as A,
    e as C,
    bB as R,
    j as q,
    o as w,
    c as B,
    k as s,
    l as u,
    v as h,
    a as d,
    H as D,
    A as H,
    m as J,
    P,
    O as L,
    Q,
    J as S,
    aU as T,
    __tla as z
} from "./index-6c08ea4c.js";

import {
    v as E,
    c as G
} from "./validate-b72f006c.js";

import {
    b as K,
    c as M,
    u as W,
    __tla as X
} from "./list-724ebf74.js";

let N, Y = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})() ]).then(async () => {
    N = {
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(Z, {
            expose: b,
            emit: y
        }) {
            const n = x(), p = r(), v = y, l = r(!1), f = r("新建文件夹"), o = r({}), e = r({
                pkgName: ""
            }), c = A(), U = r({
                pkgName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: E,
                    message: "文件夹名称不能为空",
                    trigger: [ "change" ]
                }, {
                    validator: G,
                    message: '文件夹名称不能包含字符 "\\" 或 "/"',
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), g = C(() => R()), j = () => {
                p.value.validate(t => {
                    t && K({
                        folderName: e.value.pkgName,
                        parentId: o.value.fatherObj.id,
                        creator: n.getUser.id,
                        id: e.value.id
                    }).then(a => {
                        if (a) c.error("文件夹名称已存在"); else if (o.value.type == "addFolder") {
                            const m = {
                                ...o.value.fatherObj,
                                pkgName: "根目录",
                                tenantId: g.value
                            };
                            m.children = [ {
                                pkgName: e.value.pkgName,
                                pkgType: 0,
                                pvtAncestorId: "0",
                                pubAncestorId: "",
                                neuAncestorId: "0",
                                pkgRelease: 0,
                                creatorName: n.getUser.nickname,
                                updaterName: n.getUser.nickname,
                                tenantId: g.value
                            } ], M(m).then(_ => {
                                c.success("提交成功"), l.value = !1, v("refresh");
                            });
                        } else o.value.type == "edit" && W([ {
                            ...e.value,
                            updaterName: n.getUser.nickname,
                            tenantId: g.value
                        } ]).then(m => {
                            c.success("提交成功"), l.value = !1, v("refresh");
                        });
                    });
                });
            }, I = () => {
                e.value = {
                    pkgName: ""
                }, p.value.resetFields();
            };
            return b({
                openDialog: t => {
                    l.value = !0, o.value = t, f.value = t.title, t.type == "edit" ? Object.assign(e.value, t.editObject) : Object.assign(e.value, {
                        id: ""
                    });
                }
            }), (t, a) => {
                const m = P, _ = L, F = Q, k = S, O = T, V = q("trim");
                return w(), B("div", null, [ s(O, {
                    modelValue: d(l),
                    "onUpdate:modelValue": a[3] || (a[3] = i => J(l) ? l.value = i : null),
                    scroll: !0,
                    "max-height": "210",
                    title: d(f),
                    width: "420",
                    onClose: I
                }, {
                    footer: u(() => [ s(k, {
                        type: "default",
                        onClick: a[2] || (a[2] = i => l.value = !1)
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), s(k, {
                        type: "primary",
                        onClick: j
                    }, {
                        default: u(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ s(F, {
                        ref_key: "addFolderFormRef",
                        ref: p,
                        model: d(e),
                        rules: d(U),
                        class: "neu",
                        onSubmit: a[1] || (a[1] = D(() => {}, [ "prevent" ]))
                    }, {
                        default: u(() => [ s(_, {
                            label: "文件夹名称",
                            prop: "pkgName"
                        }, {
                            default: u(() => [ H(s(m, {
                                modelValue: d(e).pkgName,
                                "onUpdate:modelValue": a[0] || (a[0] = i => d(e).pkgName = i),
                                placeholder: "请输入文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ V ] ]) ]),
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
    Y as __tla,
    N as default
};