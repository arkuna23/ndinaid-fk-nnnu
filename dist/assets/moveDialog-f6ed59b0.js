import {
    d as $,
    p as ee,
    r as i,
    h as ae,
    j as le,
    o as y,
    c as x,
    k as s,
    l as t,
    t as p,
    v as N,
    a as d,
    aP as se,
    H as te,
    A as J,
    C as re,
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
    e as we,
    m as xe,
    c as Ce,
    b as Ie,
    __tla as be
} from "./activityAdmin-9a4ffc20.js";

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
            const A = q, v = ee(), r = i({
                resName: ""
            }), D = i(), B = i({
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
            }), u = i(!1), F = i("移动到"), l = i({}), j = i(), c = i(!1), f = ae(), h = i([]), G = () => {
                xe({
                    parentId: l.value.id,
                    creator: f.getUser.id
                }, D.value.map(a => a.id)).then(a => {
                    v.success("提交成功"), A("refresh"), u.value = !1;
                });
            }, H = () => {
                l.value = {}, r.value.resName = "", c.value = !1;
            }, L = () => {
                if (l.value.id) if (c.value) v.warning("请保存正在新增的文件夹"); else {
                    let a = ye(h.value, l.value.id);
                    a && (a.children.findIndex(e => e.edit) >= 0 ? v.warning("请保存正在新增的文件夹") : (c.value = !0, 
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
                            actName: r.value.resName,
                            resName: r.value.resName,
                            resType: 0,
                            resDesc: r.value.resName,
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
                                r.value.resName = "", c.value = !1;
                                let n = await Ie({
                                    release: 0,
                                    parentId: 0,
                                    resType: 0,
                                    creator: f.getUser.id
                                });
                                n = JSON.parse(n || {}), h.value = n, v.success("提交成功"), 
                                A("refresh");
                            }
                        });
                    }
                });
            };
            return T({
                openDialog: a => {
                    u.value = !0, F.value = a.title, h.value = a.treeList, D.value = a.row;
                }
            }), (a, e) => {
                const o = oe, n = ue, R = ce, S = me, Z = pe, K = ve, M = fe, W = le("trim");
                return y(), x("div", C, [ s(M, {
                    modelValue: d(u),
                    "onUpdate:modelValue": e[3] || (e[3] = g => ne(u) ? u.value = g : null),
                    scroll: !0,
                    "max-height": 465,
                    title: d(F),
                    width: "570",
                    onClose: H
                }, {
                    footer: t(() => [ p("div", null, [ s(n, {
                        type: "primary",
                        plain: "",
                        onClick: L
                    }, {
                        default: t(() => [ N("新建文件夹") ]),
                        _: 1
                    }) ]), p("div", null, [ s(n, {
                        type: "default",
                        onClick: e[2] || (e[2] = g => u.value = !1)
                    }, {
                        default: t(() => [ N("取消") ]),
                        _: 1
                    }), s(n, {
                        type: "primary",
                        onClick: G
                    }, {
                        default: t(() => [ N("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: t(() => [ s(K, {
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
                        default: t(({
                            node: g,
                            data: m
                        }) => [ p("span", {
                            class: "custom-tree-node",
                            onClick: k => ((w, _) => {
                                c.value || (l.value.id == _.id ? l.value = {} : l.value = {
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
                            onClick: e[1] || (e[1] = te(() => {}, [ "stop" ]))
                        }, [ s(Z, {
                            ref_key: "addFolderFormRef",
                            ref: j,
                            model: d(r),
                            rules: d(B),
                            class: "neu"
                        }, {
                            default: t(() => [ s(S, {
                                prop: "resName",
                                style: {
                                    margin: "0"
                                }
                            }, {
                                default: t(() => [ J((y(), re(R, {
                                    modelValue: d(r).resName,
                                    "onUpdate:modelValue": e[0] || (e[0] = k => d(r).resName = k),
                                    placeholder: "请输入文件夹名称"
                                }, {
                                    append: t(() => [ s(n, {
                                        onClick: Q,
                                        type: "primary"
                                    }, {
                                        default: t(() => [ N("保存") ]),
                                        _: 1
                                    }), p("span", {
                                        onClick: k => ((w, _) => {
                                            _.id == l.value.id && (l.value = {}), 
                                            r.value.resName = "", c.value = !1;
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
    }), [ [ "__scopeId", "data-v-76038ba6" ] ]);
});

export {
    Pe as __tla,
    O as default
};