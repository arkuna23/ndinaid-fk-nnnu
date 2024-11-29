import {
    d as ae,
    p as le,
    h as te,
    r as v,
    u as ne,
    e as m,
    a as s,
    j as se,
    o as b,
    c as F,
    k as r,
    l as o,
    t as y,
    v as g,
    aP as ie,
    H as de,
    A as B,
    C as re,
    z as oe,
    B as ue,
    G as ce,
    m as pe,
    _ as ve,
    J as me,
    P as fe,
    Z as he,
    aU as _e,
    __tla as ye
} from "./index-6c08ea4c.js";

import {
    f as ge
} from "./tree-05ea8e09.js";

import {
    m as ke,
    __tla as xe
} from "./file-e038b35d.js";

import {
    m as Ce,
    c as be,
    b as Ie,
    __tla as Ve
} from "./projectList-47ec8076.js";

import {
    _ as we
} from "./_plugin-vue_export-helper-1b428a4d.js";

let E, Fe = Promise.all([ (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})() ]).then(async () => {
    let P, j, O, U;
    P = {
        class: "move-dialog"
    }, j = [ "onClick" ], O = {
        class: "custom-node-label"
    }, U = {
        class: "custom-node-select"
    }, E = we(ae({
        __name: "moveDialog",
        props: {
            basePath: {
                type: Object,
                required: !0
            }
        },
        emits: [ "refresh" ],
        setup(G, {
            expose: H,
            emit: J
        }) {
            const u = le();
            te();
            const L = J, N = G, c = v(!1), z = v("移动到"), l = v({}), f = v([]), h = v(!1), I = v([]), T = ne(), V = m(() => s(T.currentRoute)), Z = m(() => s(V).path.indexOf("/neu/") >= 0), A = m(() => s(V).path.indexOf("/public/") >= 0);
            m(() => s(V).path.indexOf("/private/") >= 0);
            const D = m(() => Z.value ? 1 : A.value ? 2 : 3), $ = m(() => {
                const e = R(f.value, l.value.id) || [];
                return e.unshift(0), e.join(",");
            });
            function R(e, a, i = []) {
                for (const t of e) {
                    if (i.push(t.id), t.id === a) return i;
                    if (t.children && t.children.length > 0) {
                        const k = R(t.children, a, i);
                        if (k) return k;
                    }
                    i.pop();
                }
                return null;
            }
            const q = () => {
                Ie({
                    folderType: D.value
                }).then(e => {
                    f.value = e || [];
                });
            }, K = () => {
                const e = {
                    selected: [],
                    toFolderId: l.value.id,
                    currentFolderId: N.basePath.id
                };
                I.value.forEach(a => {
                    const i = {
                        id: a.id,
                        isFolder: a.isFolder,
                        projectRel: A.value ? a.isNeu ? 2 : 3 : 1
                    };
                    e.selected.push(i);
                }), Ce(e).then(a => {
                    u.success("移动成功"), c.value = !1, L("refresh");
                });
            }, M = () => {
                f.value = [], h.value = !1, l.value = {}, I.value = [];
            }, Q = () => {
                if (h.value) u.warning("请先保存当前目录"); else if (l.value.id) {
                    let e = ge(f.value, l.value.id);
                    e && (e.children || (e.children = []), e.children.push({
                        id: ke(),
                        name: "",
                        edit: !0,
                        children: []
                    }), h.value = !0);
                } else u.warning("请选择文件目录后，再继续操作");
            };
            return H({
                openDialog: e => {
                    c.value = !0, z.value = e.title, I.value = e.moveList, q();
                }
            }), (e, a) => {
                const i = ve, t = me, k = fe, S = he, W = _e, X = se("trim");
                return b(), F("div", P, [ r(W, {
                    modelValue: s(c),
                    "onUpdate:modelValue": a[2] || (a[2] = p => pe(c) ? c.value = p : null),
                    scroll: !0,
                    "max-height": 465,
                    title: s(z),
                    width: "570",
                    onClose: M
                }, {
                    footer: o(() => [ y("div", null, [ r(t, {
                        type: "primary",
                        plain: "",
                        onClick: Q
                    }, {
                        default: o(() => [ g("新建文件夹") ]),
                        _: 1
                    }) ]), y("div", null, [ r(t, {
                        type: "default",
                        onClick: a[1] || (a[1] = p => c.value = !1)
                    }, {
                        default: o(() => [ g("取消") ]),
                        _: 1
                    }), r(t, {
                        type: "primary",
                        onClick: K
                    }, {
                        default: o(() => [ g("移动到此") ]),
                        _: 1
                    }) ]) ]),
                    default: o(() => [ r(S, {
                        data: s(f),
                        props: {
                            children: "children",
                            label: "name"
                        },
                        "expand-on-click-node": !1,
                        indent: 14,
                        "default-expand-all": "",
                        icon: s(ie)
                    }, {
                        default: o(({
                            node: p,
                            data: d
                        }) => [ y("span", {
                            class: "custom-tree-node",
                            onClick: x => ((_, n) => {
                                l.value.id == n.id ? l.value = {} : l.value = {
                                    ...n,
                                    level: _.level
                                };
                            })(p, d)
                        }, [ y("div", O, [ r(i, {
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px"
                            }
                        }), d.edit ? (b(), F("div", {
                            key: 0,
                            onClick: a[0] || (a[0] = de(() => {}, [ "stop" ]))
                        }, [ B((b(), re(k, {
                            modelValue: d.name,
                            "onUpdate:modelValue": x => d.name = x,
                            placeholder: "请输入文件夹名称"
                        }, {
                            append: o(() => [ r(t, {
                                onClick: x => ((_, n) => {
                                    if (!n.name) return void u.warning("请输入文件夹名称");
                                    if (n.name.length > 100) return void u.warning("长度在100个字符以内");
                                    if (!/^(?!.*[\\\/]).*$/.test(n.name)) return void u.warning(`\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u5305\u542B\u5B57\u7B26 "\\" \u6216 "/"
`);
                                    const C = {
                                        name: n.name,
                                        parentId: _.parent.data.id,
                                        parentAncestorId: $.value,
                                        type: D.value
                                    };
                                    be(C).then(w => {
                                        u.success("保存成功"), q(), h.value = !1;
                                    });
                                })(p, d),
                                type: "primary",
                                style: {
                                    "border-radius": "0 4px 4px 0"
                                }
                            }, {
                                default: o(() => [ g("保存") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ])), [ [ X ] ]), r(t, {
                            onClick: x => ((_, n) => {
                                n.id == l.value.id && (l.value = {});
                                const C = _.parent, w = C.data.children || C.data, Y = w.findIndex(ee => ee.id === n.id);
                                w.splice(Y, 1), h.value = !1;
                            })(p, d),
                            text: ""
                        }, {
                            default: o(() => [ g("取消") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ])) : (b(), F("span", {
                            key: 1,
                            class: oe({
                                "is-select": s(l).id == d.id
                            })
                        }, ue(d.name), 3)) ]), y("div", U, [ B(r(i, {
                            icon: "svg-icon:folder_select",
                            size: 18
                        }, null, 512), [ [ ce, s(l).id === d.id ] ]) ]) ], 8, j) ]),
                        _: 1
                    }, 8, [ "data", "icon" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-56db4b26" ] ]);
});

export {
    Fe as __tla,
    E as default
};