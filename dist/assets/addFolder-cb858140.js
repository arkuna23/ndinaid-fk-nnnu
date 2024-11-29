import {
    h as A,
    r,
    a0 as C,
    p as R,
    j as W,
    o as q,
    c as w,
    k as s,
    l as u,
    v as y,
    a as d,
    H as B,
    A as D,
    m as H,
    bB as J,
    P as Q,
    O as S,
    Q as T,
    J as z,
    aU as E,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    v as K,
    c as L
} from "./validate-b72f006c.js";

import {
    d as M,
    e as X,
    u as Y,
    __tla as Z
} from "./list-6e502bc8.js";

let N, $ = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})() ]).then(async () => {
    N = {
        __name: "addFolder",
        props: {
            storeWay: {
                type: Number,
                default: 0
            }
        },
        emits: [ "refresh" ],
        setup(b, {
            expose: U,
            emit: j
        }) {
            const i = A(), n = r(), g = j, I = b, {
                storeWay: f
            } = C(I), l = r(!1), _ = r("新建文件夹"), o = r({}), a = r({
                pkgName: ""
            }), v = R(), O = r({
                pkgName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: K,
                    message: "文件夹名称不能为空",
                    trigger: [ "change" ]
                }, {
                    validator: L,
                    message: '文件夹名称不能包含字符 "\\" 或 "/"',
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), V = () => {
                n.value.validate(t => {
                    if (t) {
                        var e = {
                            folderName: a.value.pkgName,
                            parentId: o.value.fatherObj.id,
                            creator: i.getUser.id,
                            id: a.value.id
                        };
                        f.value && (e.tenantId = J()), M(e).then(c => {
                            if (c) v.error("文件夹名称已存在"); else if (o.value.type == "add") {
                                const m = {
                                    ...o.value.fatherObj
                                };
                                m.children = [ {
                                    pkgName: a.value.pkgName,
                                    pkgType: 0,
                                    pvtParentId: "0",
                                    pvtAncestorId: "0",
                                    pubParentId: "",
                                    pubAncestorId: "",
                                    pkgRelease: f.value,
                                    creatorName: i.getUser.nickname,
                                    updaterName: i.getUser.nickname
                                } ], X(m).then(h => {
                                    v.success("提交成功"), l.value = !1, g("refresh");
                                });
                            } else o.value.type == "edit" && Y({
                                ...a.value,
                                updaterName: i.getUser.nickname
                            }).then(m => {
                                v.success("提交成功"), l.value = !1, g("refresh");
                            });
                        });
                    }
                });
            }, F = () => {
                a.value = {
                    pkgName: ""
                }, n.value.resetFields();
            };
            return U({
                openDialog: t => {
                    l.value = !0, o.value = t, _.value = t.title, t.type == "edit" && Object.assign(a.value, t.editObject);
                }
            }), (t, e) => {
                const c = Q, m = S, h = T, k = z, P = E, x = W("trim");
                return q(), w("div", null, [ s(P, {
                    modelValue: d(l),
                    "onUpdate:modelValue": e[3] || (e[3] = p => H(l) ? l.value = p : null),
                    scroll: !0,
                    "max-height": "210",
                    title: d(_),
                    width: "420",
                    onClose: F
                }, {
                    footer: u(() => [ s(k, {
                        type: "default",
                        onClick: e[2] || (e[2] = p => l.value = !1)
                    }, {
                        default: u(() => [ y("取消") ]),
                        _: 1
                    }), s(k, {
                        type: "primary",
                        onClick: V
                    }, {
                        default: u(() => [ y("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ s(h, {
                        ref_key: "addFolderFormRef",
                        ref: n,
                        model: d(a),
                        rules: d(O),
                        class: "neu",
                        onSubmit: e[1] || (e[1] = B(() => {}, [ "prevent" ]))
                    }, {
                        default: u(() => [ s(m, {
                            label: "文件夹名称",
                            prop: "pkgName"
                        }, {
                            default: u(() => [ D(s(c, {
                                modelValue: d(a).pkgName,
                                "onUpdate:modelValue": e[0] || (e[0] = p => d(a).pkgName = p),
                                placeholder: "请输入文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ x ] ]) ]),
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
    $ as __tla,
    N as default
};