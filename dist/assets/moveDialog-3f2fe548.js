import {
    d as K,
    p as M,
    h as Q,
    r as c,
    j as W,
    o as N,
    c as x,
    k as s,
    l as r,
    t as f,
    v as h,
    a as m,
    aP as R,
    H as X,
    A as B,
    C as Y,
    z as ee,
    B as ae,
    G as le,
    m as te,
    bB as U,
    _ as se,
    J as re,
    P as ne,
    Z as de,
    aU as ie,
    __tla as oe
} from "./index-6c08ea4c.js";

import {
    f as ue
} from "./tree-05ea8e09.js";

import {
    m as ce,
    __tla as me
} from "./file-e038b35d.js";

import {
    m as pe,
    c as ve,
    b as _e,
    d as fe,
    __tla as he
} from "./library-c2ecc5ca.js";

import {
    _ as ge
} from "./_plugin-vue_export-helper-1b428a4d.js";

let J, ye = Promise.all([ (() => {
    try {
        return oe;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})() ]).then(async () => {
    let V, b, w, P;
    V = {
        class: "move-dialog"
    }, b = [ "onClick" ], w = {
        class: "custom-node-label"
    }, P = {
        class: "custom-node-select"
    }, J = ge(K({
        __name: "moveDialog",
        emits: [ "refresh" ],
        setup(ke, {
            expose: T,
            emit: G
        }) {
            const n = M(), C = Q(), H = G, o = c(!1), z = c("移动到"), a = c({}), g = c([]), I = c([]), p = c(!1), A = () => {
                fe({
                    release: 1,
                    parentId: 0,
                    resType: 0,
                    tenantId: U()
                }).then(l => {
                    g.value = l ? JSON.parse(l) : [];
                });
            }, L = () => {
                const l = {
                    parentId: a.value.id,
                    tenantId: U()
                };
                pe(l, I.value).then(d => {
                    n.success("移动成功"), o.value = !1, H("refresh");
                });
            }, O = () => {
                g.value = [], p.value = !1, a.value = {}, I.value = [];
            }, S = () => {
                if (p.value) n.warning("请先保存当前目录"); else if (a.value.id) {
                    let l = ue(g.value, a.value.id);
                    l && (l.children.push({
                        id: ce(),
                        resName: "",
                        edit: !0,
                        children: []
                    }), p.value = !0);
                } else n.warning("请选择文件目录后，再继续操作");
            };
            return T({
                openDialog: l => {
                    o.value = !0, z.value = l.title, I.value = l.moveList, A();
                }
            }), (l, d) => {
                const D = se, v = re, Z = ne, $ = de, q = ie, E = W("trim");
                return N(), x("div", V, [ s(q, {
                    modelValue: m(o),
                    "onUpdate:modelValue": d[2] || (d[2] = u => te(o) ? o.value = u : null),
                    scroll: !0,
                    "max-height": 465,
                    title: m(z),
                    width: "570",
                    onClose: O
                }, {
                    footer: r(() => [ f("div", null, [ s(v, {
                        type: "primary",
                        plain: "",
                        onClick: S
                    }, {
                        default: r(() => [ h("新建文件夹") ]),
                        _: 1
                    }) ]), f("div", null, [ s(v, {
                        type: "default",
                        onClick: d[1] || (d[1] = u => o.value = !1)
                    }, {
                        default: r(() => [ h("取消") ]),
                        _: 1
                    }), s(v, {
                        type: "primary",
                        onClick: L
                    }, {
                        default: r(() => [ h("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: r(() => [ s($, {
                        data: m(g),
                        props: {
                            children: "children",
                            label: "resName"
                        },
                        "expand-on-click-node": !1,
                        indent: 14,
                        "default-expand-all": "",
                        icon: m(R)
                    }, {
                        default: r(({
                            node: u,
                            data: t
                        }) => [ f("span", {
                            class: "custom-tree-node",
                            onClick: y => ((i, e) => {
                                a.value.id == e.id ? a.value = {} : a.value = {
                                    ...e,
                                    level: i.level
                                };
                            })(u, t)
                        }, [ f("div", w, [ s(D, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), t.edit ? (N(), x("div", {
                            key: 0,
                            onClick: d[0] || (d[0] = X(() => {}, [ "stop" ]))
                        }, [ B((N(), Y(Z, {
                            modelValue: t.resName,
                            "onUpdate:modelValue": y => t.resName = y,
                            placeholder: "请输入文件夹名称"
                        }, {
                            append: r(() => [ s(v, {
                                onClick: y => ((i, e) => {
                                    if (!e.resName) return void n.warning("请输入文件夹名称");
                                    if (e.resName.length > 100) return void n.warning("长度在100个字符以内");
                                    if (!/^(?!.*[\\\/]).*$/.test(e.name)) return void n.warning(`\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u5B57\u7B26 "\\" \u6216 "/"
`);
                                    const _ = {
                                        ...i.parent.data
                                    };
                                    _.children = [ {
                                        resName: e.resName,
                                        resType: 0,
                                        resDesc: e.resName,
                                        pvtParentId: i.parent.data.id,
                                        pvtAncestorId: "0",
                                        pubParentId: "",
                                        pubAncestorId: "",
                                        release: 1,
                                        creatorName: C.getUser.nickname,
                                        updaterName: C.getUser.nickname
                                    } ], ve({
                                        folderName: e.resName,
                                        parentId: i.parent.data.id,
                                        creator: C.getUser.id,
                                        tenantId: U()
                                    }).then(k => {
                                        k ? n.error("文件夹名称已存在") : _e(_).then(j => {
                                            n.success("保存成功"), A(), p.value = !1;
                                        });
                                    });
                                })(u, t),
                                type: "primary",
                                style: {
                                    "border-radius": "0 4px 4px 0"
                                }
                            }, {
                                default: r(() => [ h("保存") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ])), [ [ E ] ]), s(v, {
                            onClick: y => ((i, e) => {
                                e.id == a.value.id && (a.value = {});
                                const _ = i.parent, k = _.data.children || _.data, j = k.findIndex(F => F.id === e.id);
                                k.splice(j, 1), p.value = !1;
                            })(u, t),
                            text: ""
                        }, {
                            default: r(() => [ h("取消") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ])) : (N(), x("span", {
                            key: 1,
                            class: ee({
                                "is-select": m(a).id == t.id
                            })
                        }, ae(t.resName), 3)) ]), f("div", P, [ B(s(D, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ le, m(a).id === t.id ] ]) ]) ], 8, b) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-14248233" ] ]);
});

export {
    ye as __tla,
    J as default
};