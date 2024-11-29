import {
    d as ee,
    p as ae,
    r as i,
    h as le,
    bB as h,
    j as se,
    o as y,
    c as w,
    k as s,
    l as r,
    t as p,
    v as N,
    a as d,
    aP as re,
    H as te,
    A as J,
    C as ie,
    B as de,
    G as ne,
    m as oe,
    _ as ue,
    J as ce,
    P as me,
    O as pe,
    Q as ve,
    Z as fe,
    aU as ge,
    __tla as _e
} from "./index-6c08ea4c.js";

import {
    v as he,
    c as ye
} from "./validate-b72f006c.js";

import {
    f as Ne
} from "./tree-05ea8e09.js";

import {
    m as ke,
    __tla as Ie
} from "./file-e038b35d.js";

import {
    d as be,
    m as we,
    c as xe,
    b as Ce,
    __tla as Ue
} from "./activity-afb6dd89.js";

import {
    _ as Ve
} from "./_plugin-vue_export-helper-1b428a4d.js";

let O, Pe = Promise.all([ (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})() ]).then(async () => {
    let x, C, U, V, P, A;
    x = {
        class: "move-dialog"
    }, C = [ "onClick" ], U = {
        class: "custom-node-label"
    }, V = [ "onClick" ], P = [ "title" ], A = {
        class: "custom-node-select"
    }, O = Ve(ee({
        __name: "moveDialog",
        emits: [ "refresh" ],
        setup(Ae, {
            expose: T,
            emit: q
        }) {
            const D = q, v = ae(), t = i({
                resName: ""
            }), F = i(), u = i(!1), G = i({
                resName: [ {
                    required: !0,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: he,
                    message: "文件夹名称不能为空",
                    trigger: "blur"
                }, {
                    validator: async function(a, e, o) {
                        await be({
                            folderName: e,
                            parentId: l.value.id,
                            tenantId: h(),
                            creator: k.getUser.id
                        }) ? o(new Error("文件夹名称与当前层级下的文件夹同名")) : o();
                    },
                    message: "文件夹名称与当前层级下的文件夹同名",
                    trigger: "change"
                }, {
                    validator: ye,
                    message: '字符串中不能包含字符 "\\" 或 "/"',
                    trigger: "change"
                }, {
                    max: 100,
                    message: "长度在100个字符以内",
                    trigger: "blur"
                } ]
            }), c = i(!1), j = i("移动到"), l = i({}), z = i(), k = le(), _ = i([]), H = () => {
                we({
                    parentId: l.value.id,
                    tenantId: h()
                }, F.value.map(a => a.id)).then(a => {
                    v.success("提交成功"), D("refresh"), c.value = !1;
                });
            }, L = () => {
                l.value = {}, t.value.resName = "", u.value = !1;
            }, Q = () => {
                if (l.value.id) if (u.value) v.warning("请保存正在新增的文件夹"); else {
                    let a = Ne(_.value, l.value.id);
                    a && (a.children.findIndex(e => e.edit) >= 0 ? v.warning("请保存正在新增的文件夹") : (u.value = !0, 
                    a.children.push({
                        id: ke(),
                        label: "",
                        edit: !0,
                        children: []
                    })));
                } else v.warning("请选择一级文件目录后，再继续操作");
            }, R = () => {
                z.value.validate(a => {
                    if (a) {
                        const e = {
                            ...l.value
                        };
                        e.children = [ {
                            actName: t.value.resName,
                            resName: t.value.resName,
                            resType: 0,
                            resDesc: t.value.resName,
                            pvtParentId: "0",
                            pvtAncestorId: "0",
                            pubParentId: "",
                            pubAncestorId: "",
                            release: 1,
                            creatorName: k.getUser.nickname,
                            updaterName: k.getUser.nickname
                        } ], xe(e, {
                            tenantId: h()
                        }).then(async o => {
                            if (o) {
                                u.value = !1, t.value.resName = "";
                                let n = await Ce({
                                    release: 1,
                                    parentId: 0,
                                    resType: 0,
                                    tenantId: h()
                                });
                                n = JSON.parse(n || {}), _.value = n, v.success("提交成功"), 
                                D("refresh");
                            }
                        });
                    }
                });
            };
            return T({
                openDialog: a => {
                    c.value = !0, j.value = a.title, _.value = a.treeList, F.value = a.row;
                }
            }), (a, e) => {
                const o = ue, n = ce, S = me, Z = pe, K = ve, M = fe, W = ge, X = se("trim");
                return y(), w("div", x, [ s(W, {
                    modelValue: d(c),
                    "onUpdate:modelValue": e[3] || (e[3] = f => oe(c) ? c.value = f : null),
                    scroll: !0,
                    "max-height": 465,
                    title: d(j),
                    width: "570",
                    onClose: L
                }, {
                    footer: r(() => [ p("div", null, [ s(n, {
                        type: "primary",
                        plain: "",
                        onClick: Q
                    }, {
                        default: r(() => [ N("新建文件夹") ]),
                        _: 1
                    }) ]), p("div", null, [ s(n, {
                        type: "default",
                        onClick: e[2] || (e[2] = f => c.value = !1)
                    }, {
                        default: r(() => [ N("取消") ]),
                        _: 1
                    }), s(n, {
                        type: "primary",
                        onClick: H
                    }, {
                        default: r(() => [ N("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: r(() => [ s(M, {
                        data: d(_),
                        props: {
                            children: "children",
                            label: "label"
                        },
                        "expand-on-click-node": !1,
                        indent: 14,
                        "default-expand-all": "",
                        icon: d(re)
                    }, {
                        default: r(({
                            node: f,
                            data: m
                        }) => [ p("span", {
                            class: "custom-tree-node",
                            onClick: I => ((b, g) => {
                                u.value || (l.value.id == g.id ? l.value = {} : l.value = {
                                    ...g,
                                    level: b.level
                                });
                            })(f, m)
                        }, [ p("div", U, [ s(o, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), m.edit ? (y(), w("div", {
                            key: 0,
                            onClick: e[1] || (e[1] = te(() => {}, [ "stop" ]))
                        }, [ s(K, {
                            ref_key: "addFolderFormRef",
                            ref: z,
                            model: d(t),
                            rules: d(G),
                            class: "neu"
                        }, {
                            default: r(() => [ s(Z, {
                                prop: "resName",
                                style: {
                                    margin: "0"
                                }
                            }, {
                                default: r(() => [ J((y(), ie(S, {
                                    modelValue: d(t).resName,
                                    "onUpdate:modelValue": e[0] || (e[0] = I => d(t).resName = I),
                                    placeholder: "请输入文件夹名称"
                                }, {
                                    append: r(() => [ s(n, {
                                        onClick: R,
                                        type: "primary"
                                    }, {
                                        default: r(() => [ N("保存") ]),
                                        _: 1
                                    }), p("span", {
                                        onClick: I => ((b, g) => {
                                            g.id == l.value.id && (l.value = {}), 
                                            u.value = !1, t.value.resName = "";
                                            const B = b.parent, E = B.data.children || B.data, Y = E.findIndex($ => $.id === g.id);
                                            E.splice(Y, 1);
                                        })(f, m),
                                        style: {
                                            "margin-left": "30px",
                                            color: "#245FE6"
                                        }
                                    }, "取消", 8, V) ]),
                                    _: 2
                                }, 1032, [ "modelValue" ])), [ [ X ] ]) ]),
                                _: 2
                            }, 1024) ]),
                            _: 2
                        }, 1032, [ "model", "rules" ]) ])) : (y(), w("span", {
                            key: 1,
                            title: m.resName,
                            style: {
                                display: "inline-block",
                                width: "350px",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap"
                            }
                        }, de(m.resName), 9, P)) ]), p("div", A, [ J(s(o, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ ne, d(l).id === m.id ] ]) ]) ], 8, C) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-e97a5db1" ] ]);
});

export {
    Pe as __tla,
    O as default
};