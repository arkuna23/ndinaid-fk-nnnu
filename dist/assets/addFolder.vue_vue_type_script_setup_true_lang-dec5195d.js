import {
    d as x,
    r as u,
    p as F,
    h as P,
    j as w,
    o as A,
    c as C,
    k as m,
    l as d,
    v as _,
    a as o,
    A as D,
    m as q,
    P as T,
    O as z,
    Q as E,
    J,
    aU as Q,
    __tla as R
} from "./index-6c08ea4c.js";

import {
    v as B,
    c as G
} from "./validate-b72f006c.js";

import {
    d as H,
    c as K,
    u as L,
    __tla as M
} from "./activity-afb6dd89.js";

let h, S = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    h = x({
        __name: "addFolder",
        emits: [ "refresh" ],
        setup(W, {
            expose: N,
            emit: y
        }) {
            const c = u(), r = u(!1), v = u("新建文件夹"), e = u({
                resName: ""
            }), p = y, g = F(), i = P(), t = u({}), b = u({
                resName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: B,
                    message: "文件夹名称不能为空",
                    trigger: "change"
                }, {
                    validator: async function(s, a, l) {
                        await H({
                            folderName: a,
                            parentId: t.value.fatherObj.id,
                            creator: i.getUser.id
                        }) ? l(new Error("文件夹名称与当前层级下的文件夹同名")) : l();
                    },
                    message: "文件夹名称与当前层级下的文件夹同名",
                    trigger: "change"
                }, {
                    validator: G,
                    message: '字符串中不能包含字符 "\\" 或 "/"',
                    trigger: "change"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), j = () => {
                c.value.validate(s => {
                    if (s) {
                        const a = {
                            ...t.value.fatherObj
                        };
                        a.children = [ {
                            actName: e.value.resName,
                            resName: e.value.resName,
                            resType: 0,
                            resDesc: e.value.resName,
                            pvtParentId: "0",
                            pvtAncestorId: "0",
                            pubParentId: "",
                            pubAncestorId: "",
                            release: 0,
                            creatorName: i.getUser.nickname,
                            updaterName: i.getUser.nickname
                        } ], t.value.type == "add" ? K(a).then(l => {
                            l && (g.success("提交成功"), r.value = !1, p("refresh"));
                        }) : t.value.type == "edit" && L({
                            ...t.value.editObject,
                            resType: 0,
                            actName: e.value.resName,
                            resName: e.value.resName,
                            updaterName: i.getUser.nickname
                        }).then(l => {
                            l && (g.success("提交成功"), r.value = !1, p("refresh"));
                        }), r.value = !1;
                    }
                });
            }, k = () => {
                e.value.resName = "", c.value.resetFields();
            };
            return N({
                openDialog: s => {
                    r.value = !0, v.value = s.title, t.value = s, s.type == "edit" ? Object.assign(e.value, s.editObject) : e.value.resName = "";
                }
            }), (s, a) => {
                const l = T, O = z, U = E, f = J, V = Q, I = w("trim");
                return A(), C("div", null, [ m(V, {
                    modelValue: o(r),
                    "onUpdate:modelValue": a[2] || (a[2] = n => q(r) ? r.value = n : null),
                    scroll: !0,
                    "max-height": "210",
                    title: o(v),
                    width: "420",
                    onClose: k
                }, {
                    footer: d(() => [ m(f, {
                        type: "default",
                        onClick: a[1] || (a[1] = n => r.value = !1)
                    }, {
                        default: d(() => [ _("取消") ]),
                        _: 1
                    }), m(f, {
                        type: "primary",
                        onClick: j
                    }, {
                        default: d(() => [ _("确定") ]),
                        _: 1
                    }) ]),
                    default: d(() => [ m(U, {
                        ref_key: "addFolderFormRef",
                        ref: c,
                        model: o(e),
                        rules: o(b),
                        class: "neu"
                    }, {
                        default: d(() => [ m(O, {
                            label: "文件夹名称",
                            prop: "resName"
                        }, {
                            default: d(() => [ D(m(l, {
                                size: "large",
                                modelValue: o(e).resName,
                                "onUpdate:modelValue": a[0] || (a[0] = n => o(e).resName = n),
                                placeholder: "请输入文件夹名称",
                                clearable: ""
                            }, null, 8, [ "modelValue" ]), [ [ I ] ]) ]),
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
    S as __tla
};