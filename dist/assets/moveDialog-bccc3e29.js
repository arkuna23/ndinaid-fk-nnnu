import {
    d as F,
    p as K,
    h as M,
    r as u,
    j as W,
    o as C,
    c as I,
    k as t,
    l as r,
    t as h,
    v as g,
    a as m,
    aP as Q,
    H as R,
    A as J,
    C as X,
    z as Y,
    B as ee,
    G as ae,
    m as le,
    _ as se,
    J as te,
    P as re,
    Z as ie,
    aU as ne,
    __tla as de
} from "./index-6c08ea4c.js";

import {
    f as oe
} from "./tree-05ea8e09.js";

import {
    m as ce,
    __tla as ue
} from "./file-e038b35d.js";

import {
    m as me,
    c as pe,
    b as ve,
    d as _e,
    __tla as fe
} from "./library-c2ecc5ca.js";

import {
    _ as he
} from "./_plugin-vue_export-helper-1b428a4d.js";

let T, ge = Promise.all([ (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})() ]).then(async () => {
    let U, V, b, w;
    U = {
        class: "move-dialog"
    }, V = [ "onClick" ], b = {
        class: "custom-node-label"
    }, w = {
        class: "custom-node-select"
    }, T = he(F({
        __name: "moveDialog",
        emits: [ "refresh" ],
        setup(ye, {
            expose: j,
            emit: B
        }) {
            const i = K(), p = M(), G = B, o = u(!1), P = u("移动到"), a = u({}), y = u([]), v = u(!1), x = u([]), D = () => {
                _e({
                    release: 0,
                    parentId: 0,
                    resType: 0,
                    creator: p.getUser.id
                }).then(l => {
                    y.value = l ? JSON.parse(l) : [];
                });
            }, H = () => {
                const l = {
                    parentId: a.value.id,
                    creator: p.getUser.id
                };
                me(l, x.value).then(n => {
                    i.success("移动成功"), o.value = !1, G("refresh");
                });
            }, L = () => {
                y.value = [], v.value = !1, a.value = {}, x.value = [];
            }, O = () => {
                if (v.value) i.warning("请先保存当前目录"); else if (a.value.id) {
                    let l = oe(y.value, a.value.id);
                    l && (l.children.push({
                        id: ce(),
                        resName: "",
                        edit: !0,
                        children: []
                    }), v.value = !0);
                } else i.warning("请选择文件目录后，再继续操作");
            };
            return j({
                openDialog: l => {
                    o.value = !0, P.value = l.title, x.value = l.moveList, D();
                }
            }), (l, n) => {
                const z = se, _ = te, S = re, Z = ie, $ = ne, q = W("trim");
                return C(), I("div", U, [ t($, {
                    modelValue: m(o),
                    "onUpdate:modelValue": n[2] || (n[2] = c => le(o) ? o.value = c : null),
                    scroll: !0,
                    "max-height": 465,
                    title: m(P),
                    width: "570",
                    onClose: L
                }, {
                    footer: r(() => [ h("div", null, [ t(_, {
                        type: "primary",
                        plain: "",
                        onClick: O
                    }, {
                        default: r(() => [ g("新建文件夹") ]),
                        _: 1
                    }) ]), h("div", null, [ t(_, {
                        type: "default",
                        onClick: n[1] || (n[1] = c => o.value = !1)
                    }, {
                        default: r(() => [ g("取消") ]),
                        _: 1
                    }), t(_, {
                        type: "primary",
                        onClick: H
                    }, {
                        default: r(() => [ g("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: r(() => [ t(Z, {
                        data: m(y),
                        props: {
                            children: "children",
                            label: "resName"
                        },
                        "expand-on-click-node": !1,
                        indent: 14,
                        "default-expand-all": "",
                        icon: m(Q)
                    }, {
                        default: r(({
                            node: c,
                            data: s
                        }) => [ h("span", {
                            class: "custom-tree-node",
                            onClick: k => ((d, e) => {
                                a.value.id == e.id ? a.value = {} : a.value = {
                                    ...e,
                                    level: d.level
                                };
                            })(c, s)
                        }, [ h("div", b, [ t(z, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), s.edit ? (C(), I("div", {
                            key: 0,
                            onClick: n[0] || (n[0] = R(() => {}, [ "stop" ]))
                        }, [ J((C(), X(S, {
                            modelValue: s.resName,
                            "onUpdate:modelValue": k => s.resName = k,
                            placeholder: "请输入文件夹名称"
                        }, {
                            append: r(() => [ t(_, {
                                onClick: k => ((d, e) => {
                                    if (!e.resName) return void i.warning("请输入文件夹名称");
                                    if (e.resName.length > 100) return void i.warning("长度在100个字符以内");
                                    if (!/^(?!.*[\\\/]).*$/.test(e.name)) return void i.warning(`\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u5B57\u7B26 "\\" \u6216 "/"
`);
                                    const f = {
                                        ...d.parent.data
                                    };
                                    f.children = [ {
                                        resName: e.resName,
                                        resType: 0,
                                        resDesc: e.resName,
                                        pvtParentId: d.parent.data.id,
                                        pvtAncestorId: "0",
                                        pubParentId: "",
                                        pubAncestorId: "",
                                        release: 0,
                                        creatorName: p.getUser.nickname,
                                        updaterName: p.getUser.nickname
                                    } ], pe({
                                        folderName: e.resName,
                                        parentId: d.parent.data.id,
                                        creator: p.getUser.id
                                    }).then(N => {
                                        N ? i.error("文件夹名称已存在") : ve(f).then(A => {
                                            i.success("保存成功"), D(), v.value = !1;
                                        });
                                    });
                                })(c, s),
                                type: "primary",
                                style: {
                                    "border-radius": "0 4px 4px 0"
                                }
                            }, {
                                default: r(() => [ g("保存") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ])), [ [ q ] ]), t(_, {
                            onClick: k => ((d, e) => {
                                e.id == a.value.id && (a.value = {});
                                const f = d.parent, N = f.data.children || f.data, A = N.findIndex(E => E.id === e.id);
                                N.splice(A, 1), v.value = !1;
                            })(c, s),
                            text: ""
                        }, {
                            default: r(() => [ g("取消") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ])) : (C(), I("span", {
                            key: 1,
                            class: Y({
                                "is-select": m(a).id == s.id
                            })
                        }, ee(s.resName), 3)) ]), h("div", w, [ J(t(z, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ ae, m(a).id === s.id ] ]) ]) ], 8, V) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-b111f896" ] ]);
});

export {
    ge as __tla,
    T as default
};