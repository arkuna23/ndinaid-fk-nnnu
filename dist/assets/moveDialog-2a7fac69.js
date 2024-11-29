import {
    d as $,
    p as ee,
    r as i,
    h as ae,
    j as le,
    o as y,
    c as x,
    k as s,
    l as r,
    t as p,
    v as N,
    a as d,
    aP as se,
    H as re,
    A as J,
    C as te,
    B as ie,
    G as de,
    m as ne,
    _ as oe,
    J as ue,
    P as ce,
    O as me,
    Q as pe,
    Z as ve,
    aU as fe,
    __tla as ge
} from "./index-6c08ea4c.js";

import {
    v as _e,
    c as he
} from "./validate-b72f006c.js";

import {
    f as ye
} from "./tree-05ea8e09.js";

import {
    m as Ne,
    __tla as ke
} from "./file-e038b35d.js";

import {
    c as we,
    m as xe,
    a as Ce,
    g as Ie,
    __tla as be
} from "./gdsAdmin-093ae0de.js";

import {
    _ as Ue
} from "./_plugin-vue_export-helper-1b428a4d.js";

let O, Pe = Promise.all([ (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})() ]).then(async () => {
    let C, I, b, U, P, V;
    C = {
        class: "move-dialog"
    }, I = [ "onClick" ], b = {
        class: "custom-node-label"
    }, U = [ "onClick" ], P = [ "title" ], V = {
        class: "custom-node-select"
    }, O = Ue($({
        __name: "moveDialog",
        emits: [ "refresh" ],
        setup(Ve, {
            expose: T,
            emit: q
        }) {
            const A = q, v = ee(), t = i({
                resName: ""
            }), u = i(!1), D = i(), B = i({
                resName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: _e,
                    message: "文件夹名称不能为空",
                    trigger: "change"
                }, {
                    validator: async function(a, e, o) {
                        await we({
                            folderName: e,
                            parentId: l.value.id,
                            creator: f.getUser.id
                        }) ? o(new Error("文件夹名称与当前层级下的文件夹同名")) : o();
                    },
                    message: "文件夹名称与当前层级下的文件夹同名",
                    trigger: "change"
                }, {
                    validator: he,
                    message: '字符串中不能包含字符 "\\" 或 "/"',
                    trigger: "change"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), c = i(!1), F = i("移动到"), l = i({}), j = i(), f = ae(), h = i([]), G = () => {
                xe({
                    parentId: l.value.id,
                    creator: f.getUser.id
                }, D.value.map(a => a.id)).then(a => {
                    v.success("移动成功"), A("refresh"), c.value = !1;
                });
            }, H = () => {
                l.value = {}, t.value.resName = "", u.value = !1;
            }, L = () => {
                if (l.value.id) if (u.value) v.warning("请保存正在新增的文件夹"); else {
                    let a = ye(h.value, l.value.id);
                    a && (a.children.findIndex(e => e.edit) >= 0 ? v.warning("请保存正在新增的文件夹") : (u.value = !0, 
                    a.children.push({
                        id: Ne(),
                        label: "",
                        edit: !0,
                        children: []
                    })));
                } else v.warning("请选择一级文件目录后，再继续操作");
            }, Q = () => {
                j.value.validate(a => {
                    if (a) {
                        const e = {
                            ...l.value
                        };
                        e.children = [ {
                            grdName: t.value.resName,
                            resName: t.value.resName,
                            resType: 0,
                            resDesc: t.value.resName,
                            pvtParentId: "",
                            pvtAncestorId: "",
                            pubParentId: "",
                            pubAncestorId: "",
                            neuParentId: "0",
                            neuAncestorId: "0",
                            release: 0,
                            creatorName: f.getUser.nickname,
                            updaterName: f.getUser.nickname
                        } ], Ce(e).then(async o => {
                            if (o) {
                                t.value.resName = "", u.value = !1;
                                let n = await Ie({
                                    release: 0,
                                    parentId: 0,
                                    resType: 0,
                                    creator: f.getUser.id
                                });
                                n = JSON.parse(n || {}), h.value = n, v.success("保存成功"), 
                                A("refresh");
                            }
                        });
                    }
                });
            };
            return T({
                openDialog: a => {
                    c.value = !0, F.value = a.title, h.value = a.treeList, D.value = a.row;
                }
            }), (a, e) => {
                const o = oe, n = ue, R = ce, S = me, Z = pe, K = ve, M = fe, W = le("trim");
                return y(), x("div", C, [ s(M, {
                    modelValue: d(c),
                    "onUpdate:modelValue": e[3] || (e[3] = g => ne(c) ? c.value = g : null),
                    scroll: !0,
                    "max-height": 465,
                    title: d(F),
                    width: "570",
                    onClose: H
                }, {
                    footer: r(() => [ p("div", null, [ s(n, {
                        type: "primary",
                        plain: "",
                        onClick: L
                    }, {
                        default: r(() => [ N("新建文件夹") ]),
                        _: 1
                    }) ]), p("div", null, [ s(n, {
                        type: "default",
                        onClick: e[2] || (e[2] = g => c.value = !1)
                    }, {
                        default: r(() => [ N("取消") ]),
                        _: 1
                    }), s(n, {
                        type: "primary",
                        onClick: G
                    }, {
                        default: r(() => [ N("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: r(() => [ s(K, {
                        data: d(h),
                        props: {
                            children: "children",
                            label: "label"
                        },
                        "expand-on-click-node": !1,
                        indent: 14,
                        "default-expand-all": "",
                        icon: d(se)
                    }, {
                        default: r(({
                            node: g,
                            data: m
                        }) => [ p("span", {
                            class: "custom-tree-node",
                            onClick: k => ((w, _) => {
                                u.value || (l.value.id == _.id ? l.value = {} : l.value = {
                                    ..._,
                                    level: w.level
                                });
                            })(g, m)
                        }, [ p("div", b, [ s(o, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), m.edit ? (y(), x("div", {
                            key: 0,
                            onClick: e[1] || (e[1] = re(() => {}, [ "stop" ]))
                        }, [ s(Z, {
                            ref_key: "addFolderFormRef",
                            ref: j,
                            model: d(t),
                            rules: d(B),
                            class: "neu"
                        }, {
                            default: r(() => [ s(S, {
                                prop: "resName",
                                style: {
                                    margin: "0"
                                }
                            }, {
                                default: r(() => [ J((y(), te(R, {
                                    modelValue: d(t).resName,
                                    "onUpdate:modelValue": e[0] || (e[0] = k => d(t).resName = k),
                                    placeholder: "请输入文件夹名称"
                                }, {
                                    append: r(() => [ s(n, {
                                        onClick: Q,
                                        type: "primary"
                                    }, {
                                        default: r(() => [ N("保存") ]),
                                        _: 1
                                    }), p("span", {
                                        onClick: k => ((w, _) => {
                                            _.id == l.value.id && (l.value = {}), 
                                            u.value = !1, t.value.resName = "";
                                            const z = w.parent, E = z.data.children || z.data, X = E.findIndex(Y => Y.id === _.id);
                                            E.splice(X, 1);
                                        })(g, m),
                                        style: {
                                            "margin-left": "30px",
                                            color: "#245FE6"
                                        }
                                    }, "取消", 8, U) ]),
                                    _: 2
                                }, 1032, [ "modelValue" ])), [ [ W ] ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "model", "rules" ]) ])) : (y(), x("span", {
                            key: 1,
                            title: m.resName,
                            style: {
                                display: "inline-block",
                                width: "350px",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap"
                            }
                        }, ie(m.resName), 9, P)) ]), p("div", V, [ J(s(o, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ de, d(l).id === m.id ] ]) ]) ], 8, I) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-75ee16d0" ] ]);
});

export {
    Pe as __tla,
    O as default
};