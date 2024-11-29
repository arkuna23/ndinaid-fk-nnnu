import {
    d as P,
    h as x,
    r as t,
    p as A,
    j as F,
    o as C,
    c as D,
    k as s,
    l as u,
    v as h,
    a as d,
    H as q,
    A as w,
    m as H,
    P as J,
    O as Q,
    Q as R,
    J as S,
    aU as T,
    __tla as z
} from "./index-6c08ea4c.js";

import {
    v as B,
    c as E
} from "./validate-b72f006c.js";

import {
    b as G,
    c as K,
    u as L,
    __tla as M
} from "./libraryAdmin-dc76919b.js";

let N, W = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    N = P({
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(X, {
            expose: b,
            emit: y
        }) {
            const n = x(), c = t(), v = y, r = t(!1), _ = t("新建文件夹"), o = t({}), a = t({
                resName: ""
            }), p = A(), k = t({
                resName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: B,
                    message: "文件夹名称不能为空",
                    trigger: [ "change" ]
                }, {
                    validator: E,
                    message: '文件夹名称不能包含字符 "\\" 或 "/"',
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), I = () => {
                c.value.validate(l => {
                    l && G({
                        folderName: a.value.resName,
                        parentId: o.value.fatherObj.id,
                        creator: n.getUser.id
                    }).then(e => {
                        if (e) p.error("文件夹名称已存在"); else if (o.value.type == "add") {
                            const m = {
                                ...o.value.fatherObj
                            };
                            m.children = [ {
                                resName: a.value.resName,
                                resType: 0,
                                resDesc: a.value.resName,
                                pvtParentId: "",
                                pvtAncestorId: "",
                                pubParentId: "",
                                pubAncestorId: "",
                                neuParentId: "0",
                                neuAncestorId: "0",
                                release: 0,
                                creatorName: n.getUser.nickname,
                                updaterName: n.getUser.nickname
                            } ], K(m).then(f => {
                                p.success("提交成功"), r.value = !1, v("refresh");
                            });
                        } else o.value.type == "edit" && L({
                            ...a.value,
                            updaterName: n.getUser.nickname
                        }).then(m => {
                            p.success("提交成功"), r.value = !1, v("refresh");
                        });
                    });
                });
            }, j = () => {
                a.value = {
                    resName: ""
                }, c.value.resetFields();
            };
            return b({
                openDialog: l => {
                    r.value = !0, o.value = l, _.value = l.title, l.type == "edit" && Object.assign(a.value, l.editObject);
                }
            }), (l, e) => {
                const m = J, f = Q, U = R, g = S, V = T, O = F("trim");
                return C(), D("div", null, [ s(V, {
                    modelValue: d(r),
                    "onUpdate:modelValue": e[3] || (e[3] = i => H(r) ? r.value = i : null),
                    scroll: !0,
                    "max-height": "210",
                    title: d(_),
                    width: "420",
                    onClose: j
                }, {
                    footer: u(() => [ s(g, {
                        type: "default",
                        onClick: e[2] || (e[2] = i => r.value = !1)
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), s(g, {
                        type: "primary",
                        onClick: I
                    }, {
                        default: u(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ s(U, {
                        ref_key: "addFolderFormRef",
                        ref: c,
                        model: d(a),
                        rules: d(k),
                        class: "neu",
                        onSubmit: e[1] || (e[1] = q(() => {}, [ "prevent" ]))
                    }, {
                        default: u(() => [ s(f, {
                            label: "文件夹名称",
                            prop: "resName"
                        }, {
                            default: u(() => [ w(s(m, {
                                modelValue: d(a).resName,
                                "onUpdate:modelValue": e[0] || (e[0] = i => d(a).resName = i),
                                placeholder: "请输入文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ O ] ]) ]),
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
    N as _,
    W as __tla
};