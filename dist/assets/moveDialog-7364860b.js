import {
    p as M,
    h as Q,
    r as p,
    a0 as X,
    j as Y,
    o as I,
    c as b,
    k as n,
    l as s,
    t as h,
    v as y,
    a as c,
    aP as ee,
    H as ae,
    A as W,
    C as le,
    z as te,
    B as re,
    G as ne,
    m as se,
    bB as V,
    _ as de,
    J as ie,
    P as oe,
    Z as ue,
    aU as pe,
    __tla as ce
} from "./index-6c08ea4c.js";

import {
    f as me
} from "./tree-05ea8e09.js";

import {
    m as ve,
    __tla as _e
} from "./file-e038b35d.js";

import {
    m as ge,
    b as fe,
    c as ke,
    d as he,
    __tla as ye
} from "./list-724ebf74.js";

import {
    _ as Ne
} from "./_plugin-vue_export-helper-1b428a4d.js";

let G, Ce = Promise.all([ (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})() ]).then(async () => {
    let w, P, z, A;
    w = {
        class: "move-dialog"
    }, P = [ "onClick" ], z = {
        class: "custom-node-label"
    }, A = {
        class: "custom-node-select"
    }, G = Ne({
        __name: "moveDialog",
        props: {
            storeWay: {
                type: Number,
                default: 0
            }
        },
        emits: [ "refresh" ],
        setup(H, {
            expose: L,
            emit: O
        }) {
            const d = M(), m = Q(), R = O, o = p(!1), j = p("移动到"), a = p({}), N = p([]), v = p(!1), x = p([]), S = H, {
                storeWay: _
            } = X(S), B = () => {
                var e = {
                    release: _.value,
                    parentId: 0,
                    resType: 0
                };
                _.value ? e.tenantId = V() : e.creator = m.getUser.id, he(e).then(t => {
                    N.value = t ? JSON.parse(t) : [];
                });
            }, T = () => {
                const e = {
                    parentId: a.value.id
                };
                _.value ? e.tenantId = V() : e.creator = m.getUser.id, ge(e, x.value).then(t => {
                    d.success("移动成功"), o.value = !1, R("refresh");
                });
            }, Z = () => {
                N.value = [], v.value = !1, a.value = {}, x.value = [];
            }, $ = () => {
                if (v.value) d.warning("请先保存当前目录"); else if (a.value.id) {
                    let e = me(N.value, a.value.id);
                    e && (e.children.push({
                        id: ve(),
                        pkgName: "",
                        edit: !0,
                        children: []
                    }), v.value = !0);
                } else d.warning("请选择文件目录后，再继续操作");
            };
            return L({
                openDialog: e => {
                    o.value = !0, j.value = e.title, x.value = e.moveList, B();
                }
            }), (e, t) => {
                const D = de, g = ie, q = oe, E = ue, F = pe, K = Y("trim");
                return I(), b("div", w, [ n(F, {
                    modelValue: c(o),
                    "onUpdate:modelValue": t[2] || (t[2] = u => se(o) ? o.value = u : null),
                    scroll: !0,
                    "max-height": 465,
                    title: c(j),
                    width: "570",
                    onClose: Z
                }, {
                    footer: s(() => [ h("div", null, [ n(g, {
                        type: "primary",
                        plain: "",
                        onClick: $
                    }, {
                        default: s(() => [ y("新建文件夹") ]),
                        _: 1
                    }) ]), h("div", null, [ n(g, {
                        type: "default",
                        onClick: t[1] || (t[1] = u => o.value = !1)
                    }, {
                        default: s(() => [ y("取消") ]),
                        _: 1
                    }), n(g, {
                        type: "primary",
                        onClick: T
                    }, {
                        default: s(() => [ y("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: s(() => [ n(E, {
                        data: c(N),
                        props: {
                            children: "children",
                            label: "pkgName"
                        },
                        "expand-on-click-node": !1,
                        indent: 14,
                        "default-expand-all": "",
                        icon: c(ee)
                    }, {
                        default: s(({
                            node: u,
                            data: r
                        }) => [ h("span", {
                            class: "custom-tree-node",
                            onClick: C => ((i, l) => {
                                a.value.id == l.id ? a.value = {} : a.value = {
                                    ...l,
                                    level: i.level
                                };
                            })(u, r)
                        }, [ h("div", z, [ n(D, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), r.edit ? (I(), b("div", {
                            key: 0,
                            onClick: t[0] || (t[0] = ae(() => {}, [ "stop" ]))
                        }, [ W((I(), le(q, {
                            modelValue: r.pkgName,
                            "onUpdate:modelValue": C => r.pkgName = C,
                            placeholder: "请输入文件夹名称"
                        }, {
                            append: s(() => [ n(g, {
                                onClick: C => ((i, l) => {
                                    if (!l.pkgName) return void d.warning("请输入文件夹名称");
                                    if (l.pkgName.length > 100) return void d.warning("长度在100个字符以内");
                                    if (!/^(?!.*[\\\/]).*$/.test(l.name)) return void d.warning(`\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u5B57\u7B26 "\\" \u6216 "/"
`);
                                    const f = {
                                        ...i.parent.data
                                    };
                                    f.children = [ {
                                        pkgName: l.pkgName,
                                        pkgType: 0,
                                        pvtParentId: i.parent.data.id,
                                        pvtAncestorId: "0",
                                        pubParentId: "",
                                        pubAncestorId: "",
                                        pkgRelease: _.value,
                                        creatorName: m.getUser.nickname,
                                        updaterName: m.getUser.nickname
                                    } ];
                                    var k = {
                                        folderName: l.pkgName,
                                        parentId: i.parent.data.id,
                                        creator: m.getUser.id
                                    };
                                    _.value && (k.tenantId = V()), fe(k).then(U => {
                                        U ? d.error("文件夹名称已存在") : ke(f).then(J => {
                                            d.success("保存成功"), B(), v.value = !1;
                                        });
                                    });
                                })(u, r),
                                type: "primary",
                                style: {
                                    "border-radius": "0 4px 4px 0"
                                }
                            }, {
                                default: s(() => [ y("保存") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ])), [ [ K ] ]), n(g, {
                            onClick: C => ((i, l) => {
                                l.id == a.value.id && (a.value = {});
                                const f = i.parent, k = f.data.children || f.data, U = k.findIndex(J => J.id === l.id);
                                k.splice(U, 1), v.value = !1;
                            })(u, r),
                            text: ""
                        }, {
                            default: s(() => [ y("取消") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ])) : (I(), b("span", {
                            key: 1,
                            class: te({
                                "is-select": c(a).id == r.id
                            })
                        }, re(r.pkgName), 3)) ]), h("div", A, [ W(n(D, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ ne, c(a).id === r.id ] ]) ]) ], 8, P) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-5f8283e1" ] ]);
});

export {
    Ce as __tla,
    G as default
};