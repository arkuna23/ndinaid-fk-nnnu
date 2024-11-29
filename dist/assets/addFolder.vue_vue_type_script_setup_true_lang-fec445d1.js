import {
    d as x,
    h as F,
    r as s,
    p as P,
    j as A,
    o as C,
    c as D,
    k as t,
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
    c as G,
    b as K,
    u as L,
    __tla as M
} from "./library-c2ecc5ca.js";

let N, W = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    N = x({
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(X, {
            expose: b,
            emit: y
        }) {
            const i = F(), c = s(), v = y, r = s(!1), _ = s("新建文件夹"), m = s({}), a = s({
                resName: ""
            }), p = P(), k = s({
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
            }), U = () => {
                c.value.validate(l => {
                    l && G({
                        folderName: a.value.resName,
                        parentId: m.value.fatherObj.id,
                        creator: i.getUser.id
                    }).then(e => {
                        if (e) p.error("文件夹名称已存在"); else if (m.value.type == "add") {
                            const o = {
                                ...m.value.fatherObj
                            };
                            o.children = [ {
                                resName: a.value.resName,
                                resType: 0,
                                resDesc: a.value.resName,
                                pvtParentId: "0",
                                pvtAncestorId: "0",
                                pubParentId: "",
                                pubAncestorId: "",
                                release: 0,
                                creatorName: i.getUser.nickname,
                                updaterName: i.getUser.nickname
                            } ], K(o).then(f => {
                                p.success("提交成功"), r.value = !1, v("refresh");
                            });
                        } else m.value.type == "edit" && L({
                            ...a.value,
                            updaterName: i.getUser.nickname
                        }).then(o => {
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
                    r.value = !0, m.value = l, _.value = l.title, l.type == "edit" && Object.assign(a.value, l.editObject);
                }
            }), (l, e) => {
                const o = J, f = Q, I = R, g = S, O = T, V = A("trim");
                return C(), D("div", null, [ t(O, {
                    modelValue: d(r),
                    "onUpdate:modelValue": e[3] || (e[3] = n => H(r) ? r.value = n : null),
                    scroll: !0,
                    "max-height": "210",
                    title: d(_),
                    width: "420",
                    onClose: j
                }, {
                    footer: u(() => [ t(g, {
                        type: "default",
                        onClick: e[2] || (e[2] = n => r.value = !1)
                    }, {
                        default: u(() => [ h("取消") ]),
                        _: 1
                    }), t(g, {
                        type: "primary",
                        onClick: U
                    }, {
                        default: u(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ t(I, {
                        ref_key: "addFolderFormRef",
                        ref: c,
                        model: d(a),
                        rules: d(k),
                        class: "neu",
                        onSubmit: e[1] || (e[1] = q(() => {}, [ "prevent" ]))
                    }, {
                        default: u(() => [ t(f, {
                            label: "文件夹名称",
                            prop: "resName"
                        }, {
                            default: u(() => [ w(t(o, {
                                modelValue: d(a).resName,
                                "onUpdate:modelValue": e[0] || (e[0] = n => d(a).resName = n),
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
    });
});

export {
    N as _,
    W as __tla
};