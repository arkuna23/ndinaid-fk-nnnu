import {
    d as F,
    r as u,
    p as P,
    h as w,
    j as A,
    o as C,
    c as D,
    k as d,
    l as m,
    v as _,
    a as o,
    A as T,
    m as q,
    bB as N,
    P as z,
    O as B,
    Q as E,
    J,
    aU as Q,
    __tla as R
} from "./index-6c08ea4c.js";

import {
    v as G,
    c as H
} from "./validate-b72f006c.js";

import {
    d as K,
    c as L,
    u as M,
    __tla as S
} from "./activity-afb6dd89.js";

let h, W = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return S;
    } catch {}
})() ]).then(async () => {
    h = F({
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(X, {
            expose: y,
            emit: b
        }) {
            const c = u(), r = u(!1), v = u("新建文件夹"), e = u({
                resName: ""
            }), p = b, g = P(), n = w(), l = u({}), j = u({
                resName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: G,
                    message: "文件夹名称不能为空",
                    trigger: "change"
                }, {
                    validator: async function(t, a, s) {
                        await K({
                            folderName: a,
                            parentId: l.value.fatherObj.id,
                            tenantId: N(),
                            creator: n.getUser.id
                        }) ? s(new Error("文件夹名称与当前层级下的文件夹同名")) : s();
                    },
                    message: "文件夹名称与当前层级下的文件夹同名",
                    trigger: "change"
                }, {
                    validator: H,
                    message: '字符串中不能包含字符 "\\" 或 "/"',
                    trigger: "change"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), k = () => {
                c.value.validate(t => {
                    if (t) {
                        const a = {
                            ...l.value.fatherObj
                        };
                        a.children = [ {
                            actName: e.value.resName,
                            resName: e.value.resName,
                            resType: 0,
                            resDesc: e.value.resName,
                            pvtParentId: "",
                            pvtAncestorId: "",
                            pubParentId: "0",
                            pubAncestorId: "0",
                            release: 1,
                            creatorName: n.getUser.nickname,
                            updaterName: n.getUser.nickname
                        } ], l.value.type == "add" ? L(a, {
                            tenantId: N()
                        }).then(s => {
                            s && (g.success("提交成功"), r.value = !1, p("refresh"));
                        }) : l.value.type == "edit" && M({
                            ...l.value.editObject,
                            resType: 0,
                            actName: e.value.resName,
                            resName: e.value.resName,
                            updaterName: n.getUser.nickname
                        }).then(s => {
                            s && (g.success("提交成功"), r.value = !1, p("refresh"));
                        }), r.value = !1;
                    }
                });
            }, I = () => {
                e.value.resName = "", c.value.resetFields();
            };
            return y({
                openDialog: t => {
                    r.value = !0, v.value = t.title, l.value = t, t.type == "edit" ? Object.assign(e.value, t.editObject) : e.value.resName = "";
                }
            }), (t, a) => {
                const s = z, O = B, U = E, f = J, V = Q, x = A("trim");
                return C(), D("div", null, [ d(V, {
                    modelValue: o(r),
                    "onUpdate:modelValue": a[2] || (a[2] = i => q(r) ? r.value = i : null),
                    scroll: !0,
                    "max-height": "210",
                    title: o(v),
                    width: "420",
                    onClose: I
                }, {
                    footer: m(() => [ d(f, {
                        type: "default",
                        onClick: a[1] || (a[1] = i => r.value = !1)
                    }, {
                        default: m(() => [ _("取消") ]),
                        _: 1
                    }), d(f, {
                        type: "primary",
                        onClick: k
                    }, {
                        default: m(() => [ _("确定") ]),
                        _: 1
                    }) ]),
                    default: m(() => [ d(U, {
                        ref_key: "addFolderFormRef",
                        ref: c,
                        model: o(e),
                        rules: o(j),
                        class: "neu"
                    }, {
                        default: m(() => [ d(O, {
                            label: "文件夹名称",
                            prop: "resName"
                        }, {
                            default: m(() => [ T(d(s, {
                                size: "large",
                                modelValue: o(e).resName,
                                "onUpdate:modelValue": a[0] || (a[0] = i => o(e).resName = i),
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
    });
});

export {
    h as _,
    W as __tla
};