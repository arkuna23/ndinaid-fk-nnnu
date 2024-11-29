import {
    d as x,
    h as F,
    r as s,
    p as P,
    j as A,
    o as C,
    c as D,
    k as u,
    l as d,
    v as h,
    a as o,
    H as q,
    A as w,
    m as B,
    bB as H,
    P as J,
    O as Q,
    Q as R,
    J as S,
    aU as T,
    __tla as z
} from "./index-6c08ea4c.js";

import {
    v as E,
    c as G
} from "./validate-b72f006c.js";

import {
    c as K,
    b as L,
    u as M,
    __tla as W
} from "./library-c2ecc5ca.js";

let b, X = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})() ]).then(async () => {
    b = x({
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(Y, {
            expose: N,
            emit: y
        }) {
            const l = F(), c = s(), v = y, r = s(!1), _ = s("新建文件夹"), m = s({}), a = s({
                resName: ""
            }), p = P(), U = s({
                resName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: E,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: G,
                    message: '文件夹名称不能包含字符 "\\" 或 "/"',
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), k = () => {
                c.value.validate(t => {
                    t && K({
                        folderName: a.value.resName,
                        parentId: m.value.fatherObj.id,
                        creator: l.getUser.id,
                        tenantId: H()
                    }).then(e => {
                        if (e) p.error("文件夹名称已存在"); else if (m.value.type == "add") {
                            const i = {
                                ...m.value.fatherObj
                            };
                            i.children = [ {
                                resName: a.value.resName,
                                resType: 0,
                                resDesc: a.value.resName,
                                pvtParentId: "0",
                                pvtAncestorId: "0",
                                pubParentId: "",
                                pubAncestorId: "",
                                release: 1,
                                creator: l.getUser.id,
                                updater: l.getUser.id,
                                creatorName: l.getUser.nickname,
                                updaterName: l.getUser.nickname
                            } ], L(i).then(f => {
                                p.success("提交成功"), r.value = !1, v("refresh");
                            });
                        } else m.value.type == "edit" && M({
                            ...a.value,
                            updaterName: l.getUser.nickname
                        }).then(i => {
                            p.success("提交成功"), r.value = !1, v("refresh");
                        });
                    });
                });
            }, I = () => {
                a.value = {
                    resName: ""
                }, c.value.resetFields();
            };
            return N({
                openDialog: t => {
                    r.value = !0, m.value = t, _.value = t.title, t.type == "edit" && Object.assign(a.value, t.editObject);
                }
            }), (t, e) => {
                const i = J, f = Q, j = R, g = S, O = T, V = A("trim");
                return C(), D("div", null, [ u(O, {
                    modelValue: o(r),
                    "onUpdate:modelValue": e[3] || (e[3] = n => B(r) ? r.value = n : null),
                    scroll: !0,
                    "max-height": "210",
                    title: o(_),
                    width: "420",
                    onClose: I
                }, {
                    footer: d(() => [ u(g, {
                        type: "default",
                        onClick: e[2] || (e[2] = n => r.value = !1)
                    }, {
                        default: d(() => [ h("取消") ]),
                        _: 1
                    }), u(g, {
                        type: "primary",
                        onClick: k
                    }, {
                        default: d(() => [ h("确定") ]),
                        _: 1
                    }) ]),
                    default: d(() => [ u(j, {
                        ref_key: "addFolderFormRef",
                        ref: c,
                        model: o(a),
                        rules: o(U),
                        class: "neu",
                        onSubmit: e[1] || (e[1] = q(() => {}, [ "prevent" ]))
                    }, {
                        default: d(() => [ u(f, {
                            label: "文件夹名称",
                            prop: "resName"
                        }, {
                            default: d(() => [ w(u(i, {
                                modelValue: o(a).resName,
                                "onUpdate:modelValue": e[0] || (e[0] = n => o(a).resName = n),
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
    b as _,
    X as __tla
};