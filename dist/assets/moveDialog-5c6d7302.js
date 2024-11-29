import {
    d as Y,
    r,
    p as ee,
    h as ae,
    j as le,
    o as h,
    c as C,
    k as t,
    l as i,
    t as u,
    v as y,
    a as d,
    aP as se,
    H as re,
    A as q,
    C as te,
    B as ie,
    G as de,
    m as ne,
    _ as oe,
    J as ue,
    P as me,
    O as ce,
    Q as ve,
    Z as pe,
    aU as fe,
    __tla as _e
} from "./index-6c08ea4c.js";

import {
    v as ge
} from "./validate-b72f006c.js";

import {
    f as he
} from "./tree-05ea8e09.js";

import {
    m as ye,
    __tla as ke
} from "./file-e038b35d.js";

import {
    m as Ne,
    i as Ce,
    d as xe,
    __tla as we
} from "./examPaperLibrary-5d47fe72.js";

import {
    _ as be
} from "./_plugin-vue_export-helper-1b428a4d.js";

let A, Ve = Promise.all([ (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})() ]).then(async () => {
    let x, w, b, V, I, P;
    x = {
        class: "move-dialog"
    }, w = [ "onClick" ], b = {
        class: "custom-node-label"
    }, V = [ "onClick" ], I = {
        key: 1
    }, P = {
        class: "custom-node-select"
    }, A = be(Y({
        __name: "moveDialog",
        emits: [ "refresh" ],
        setup(Ie, {
            expose: B,
            emit: G
        }) {
            const U = G, m = r(!1), n = ee(), s = r({
                resName: ""
            }), z = r(), J = r({
                resName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: ge,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), o = r(!1), D = r("移动到"), l = r({}), L = r();
            ae();
            const f = r([]), _ = r(0), O = () => {
                let e = {
                    parentId: l.value.id,
                    ids: z.value
                };
                Ne(e.parentId, _.value, e.ids).then(a => {
                    a ? (n.success("保存成功"), U("refresh"), o.value = !1) : n.error("保存失败");
                });
            }, Q = () => {
                l.value = {}, s.value.resName = "";
            }, R = () => {
                if (m.value) n.warning("请先保存当前目录"); else if (l.value.id) {
                    let e = he(f.value, l.value.id);
                    e && (e.children = (e == null ? void 0 : e.children) ?? [], 
                    e.children.push({
                        id: ye(),
                        label: "",
                        edit: !0,
                        children: []
                    }), m.value = !0);
                } else n.warning("请选择一级文件目录后，再继续操作");
            }, Z = () => {
                if (!s.value.resName) return void n.warning("请输入文件夹名称");
                if (s.value.resName.length > 100) return void n.warning("长度在100个字符以内");
                if (!/^(?!.*[\\\/]).*$/.test(s.value.resName)) return void n.warning(`\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u5B57\u7B26 "\\" \u6216 "/"
`);
                let e = {
                    folderName: s.value.resName,
                    parentId: l.value.id,
                    release: _.value
                };
                Ce(e).then(async a => {
                    a && (s.value.resName = "", f.value = await xe(_.value), m.value = !1, 
                    n.success("保存成功"), U("refresh"));
                });
            };
            return B({
                openDialog: e => {
                    o.value = !0, D.value = e.title, f.value = e.treeList, z.value = e.ids, 
                    _.value = e.release, m.value = !1;
                }
            }), (e, a) => {
                const F = oe, g = ue, $ = me, E = ce, K = ve, M = pe, S = fe, T = le("trim");
                return h(), C("div", x, [ t(S, {
                    modelValue: d(o),
                    "onUpdate:modelValue": a[3] || (a[3] = c => ne(o) ? o.value = c : null),
                    scroll: !0,
                    truthHeight: 465,
                    "max-height": 465,
                    title: d(D),
                    width: "570",
                    onClose: Q
                }, {
                    footer: i(() => [ u("div", null, [ t(g, {
                        type: "primary",
                        plain: "",
                        onClick: R
                    }, {
                        default: i(() => [ y("新建文件夹") ]),
                        _: 1
                    }) ]), u("div", null, [ t(g, {
                        type: "default",
                        onClick: a[2] || (a[2] = c => o.value = !1)
                    }, {
                        default: i(() => [ y("取消") ]),
                        _: 1
                    }), t(g, {
                        type: "primary",
                        onClick: O
                    }, {
                        default: i(() => [ y("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: i(() => [ t(M, {
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
                            node: c,
                            data: v
                        }) => [ u("span", {
                            class: "custom-tree-node",
                            onClick: k => ((N, p) => {
                                l.value.id == p.id ? l.value = {} : l.value = {
                                    ...p,
                                    level: N.level
                                };
                            })(c, v)
                        }, [ u("div", b, [ t(F, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), v.edit ? (h(), C("div", {
                            key: 0,
                            onClick: a[1] || (a[1] = re(() => {}, [ "stop" ]))
                        }, [ t(K, {
                            ref_key: "addFolderFormRef",
                            ref: L,
                            model: d(s),
                            rules: d(J),
                            class: "neu"
                        }, {
                            default: i(() => [ t(E, {
                                prop: "resName",
                                style: {
                                    margin: "0"
                                }
                            }, {
                                default: i(() => [ q((h(), te($, {
                                    modelValue: d(s).resName,
                                    "onUpdate:modelValue": a[0] || (a[0] = k => d(s).resName = k),
                                    placeholder: "请输入文件夹名称"
                                }, {
                                    append: i(() => [ t(g, {
                                        onClick: Z,
                                        type: "primary"
                                    }, {
                                        default: i(() => [ y("保存") ]),
                                        _: 1
                                    }), u("span", {
                                        onClick: k => ((N, p) => {
                                            p.id == l.value.id && (l.value = {});
                                            const H = N.parent, j = H.data.children || H.data, W = j.findIndex(X => X.id === p.id);
                                            j.splice(W, 1), s.value.resName = "", 
                                            m.value = !1;
                                        })(c, v),
                                        style: {
                                            "margin-left": "30px",
                                            color: "#245fe6"
                                        }
                                    }, "取消", 8, V) ]),
                                    _: 2
                                }, 1032, [ "modelValue" ])), [ [ T ] ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "model", "rules" ]) ])) : (h(), C("span", I, ie(v.name), 1)) ]), u("div", P, [ q(t(F, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ de, d(l).id === v.id ] ]) ]) ], 8, w) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-320617ba" ] ]);
});

export {
    Ve as __tla,
    A as default
};