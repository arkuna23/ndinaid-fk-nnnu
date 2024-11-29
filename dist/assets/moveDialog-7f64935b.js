import {
    d as Y,
    r as t,
    p as ee,
    h as ae,
    j as le,
    o as g,
    c as C,
    k as r,
    l as i,
    t as u,
    v as y,
    a as d,
    aP as se,
    H as te,
    A as j,
    C as re,
    B as ie,
    G as de,
    m as ne,
    _ as oe,
    J as ue,
    P as ce,
    O as me,
    Q as ve,
    Z as pe,
    aU as fe,
    __tla as _e
} from "./index-6c08ea4c.js";

import {
    f as he
} from "./tree-05ea8e09.js";

import {
    m as ge,
    __tla as ye
} from "./file-e038b35d.js";

import {
    m as ke,
    i as Ne,
    g as Ce,
    __tla as xe
} from "./questionBank-6fe58de9.js";

import {
    _ as we
} from "./_plugin-vue_export-helper-1b428a4d.js";

let A, Ve = Promise.all([ (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})() ]).then(async () => {
    let x, w, V, I, b, U;
    x = {
        class: "move-dialog"
    }, w = [ "onClick" ], V = {
        class: "custom-node-label"
    }, I = [ "onClick" ], b = {
        key: 1
    }, U = {
        class: "custom-node-select"
    }, A = we(Y({
        __name: "moveDialog",
        emits: [ "refresh" ],
        setup(Ie, {
            expose: G,
            emit: J
        }) {
            const z = J, c = t(!1), n = ee(), s = t({
                resName: ""
            }), P = t(), L = t({}), o = t(!1), B = t("移动到"), l = t({}), O = t();
            ae();
            const f = t([]), _ = t(0), Q = () => {
                let e = {
                    parentId: l.value.id,
                    ids: P.value
                };
                ke(e.parentId, _.value, e.ids).then(a => {
                    a ? (n.success("保存成功"), z("refresh"), o.value = !1) : n.error("保存失败");
                });
            }, R = () => {
                l.value = {}, s.value.resName = "";
            }, Z = () => {
                if (c.value) n.warning("请先保存当前目录"); else if (l.value.id) {
                    let e = he(f.value, l.value.id);
                    e && (e.children = (e == null ? void 0 : e.children) ?? [], 
                    e.children.push({
                        id: ge(),
                        label: "",
                        edit: !0,
                        children: []
                    }), c.value = !0);
                } else n.warning("请选择一级文件目录后，再继续操作");
            }, $ = () => {
                if (!s.value.resName) return void n.warning("请输入文件夹名称");
                if (s.value.resName.length > 100) return void n.warning("长度在100个字符以内");
                if (!/^(?!.*[\\\/]).*$/.test(s.value.resName)) return void n.warning(`\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u5B57\u7B26 "\\" \u6216 "/"
`);
                let e = {
                    folderName: s.value.resName,
                    parentId: l.value.id,
                    release: _.value
                };
                Ne(e).then(async a => {
                    a && (s.value.resName = "", f.value = await Ce(_.value), c.value = !1, 
                    n.success("保存成功"), z("refresh"));
                });
            };
            return G({
                openDialog: e => {
                    o.value = !0, B.value = e.title, f.value = e.treeList, P.value = e.ids, 
                    _.value = e.release, c.value = !1;
                }
            }), (e, a) => {
                const D = oe, h = ue, q = ce, E = me, K = ve, M = pe, S = fe, T = le("trim");
                return g(), C("div", x, [ r(S, {
                    modelValue: d(o),
                    "onUpdate:modelValue": a[3] || (a[3] = m => ne(o) ? o.value = m : null),
                    scroll: !0,
                    truthHeight: 465,
                    "max-height": 465,
                    title: d(B),
                    width: "570",
                    onClose: R
                }, {
                    footer: i(() => [ u("div", null, [ r(h, {
                        type: "primary",
                        plain: "",
                        onClick: Z
                    }, {
                        default: i(() => [ y("新建文件夹") ]),
                        _: 1
                    }) ]), u("div", null, [ r(h, {
                        type: "default",
                        onClick: a[2] || (a[2] = m => o.value = !1)
                    }, {
                        default: i(() => [ y("取消") ]),
                        _: 1
                    }), r(h, {
                        type: "primary",
                        onClick: Q
                    }, {
                        default: i(() => [ y("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: i(() => [ r(M, {
                        data: d(f),
                        props: {
                            children: "children",
                            label: "name"
                        },
                        "expand-on-click-node": !1,
                        indent: 14,
                        "default-expand-all": "",
                        icon: d(se)
                    }, {
                        default: i(({
                            node: m,
                            data: v
                        }) => [ u("span", {
                            class: "custom-tree-node",
                            onClick: k => ((N, p) => {
                                l.value.id == p.id ? l.value = {} : l.value = {
                                    ...p,
                                    level: N.level
                                };
                            })(m, v)
                        }, [ u("div", V, [ r(D, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), v.edit ? (g(), C("div", {
                            key: 0,
                            onClick: a[1] || (a[1] = te(() => {}, [ "stop" ]))
                        }, [ r(K, {
                            ref_key: "addFolderFormRef",
                            ref: O,
                            model: d(s),
                            rules: d(L),
                            class: "neu"
                        }, {
                            default: i(() => [ r(E, {
                                prop: "resName",
                                style: {
                                    margin: "0"
                                }
                            }, {
                                default: i(() => [ j((g(), re(q, {
                                    modelValue: d(s).resName,
                                    "onUpdate:modelValue": a[0] || (a[0] = k => d(s).resName = k),
                                    placeholder: "请输入文件夹名称"
                                }, {
                                    append: i(() => [ r(h, {
                                        onClick: $,
                                        type: "primary"
                                    }, {
                                        default: i(() => [ y("保存") ]),
                                        _: 1
                                    }), u("span", {
                                        onClick: k => ((N, p) => {
                                            p.id == l.value.id && (l.value = {});
                                            const F = N.parent, H = F.data.children || F.data, W = H.findIndex(X => X.id === p.id);
                                            H.splice(W, 1), s.value.resName = "", 
                                            c.value = !1;
                                        })(m, v),
                                        style: {
                                            "margin-left": "30px",
                                            color: "#245fe6"
                                        }
                                    }, "取消", 8, I) ]),
                                    _: 2
                                }, 1032, [ "modelValue" ])), [ [ T ] ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "model", "rules" ]) ])) : (g(), C("span", b, ie(v.name), 1)) ]), u("div", U, [ j(r(D, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ de, d(l).id === v.id ] ]) ]) ], 8, w) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-adc89f72" ] ]);
});

export {
    Ve as __tla,
    A as default
};