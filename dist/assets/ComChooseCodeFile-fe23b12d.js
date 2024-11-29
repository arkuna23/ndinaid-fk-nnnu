import {
    e as F,
    r as s,
    U as E,
    a,
    f as H,
    o as M,
    c as O,
    A as Q,
    G as W,
    k as o,
    l as r,
    v as f,
    B as _,
    t as P,
    I as X,
    z as Y,
    m as ee,
    n as z,
    L as le,
    _ as ae,
    J as se,
    P as oe,
    Z as te,
    aU as de,
    __tla as re
} from "./index-6c08ea4c.js";

import {
    a as ie,
    __tla as ne
} from "./judge-7c842b3d.js";

import {
    h as ue
} from "./tree-05ea8e09.js";

import {
    _ as ce
} from "./_plugin-vue_export-helper-1b428a4d.js";

let I, pe = Promise.all([ (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})() ]).then(async () => {
    let k, w, V;
    k = {
        class: "select-code px-10px"
    }, w = {
        class: "custom-tree-node"
    }, V = {
        class: "dialog-footer align-center"
    }, I = ce({
        __name: "ComChooseCodeFile",
        props: {
            modelValue: {
                type: String,
                default: () => ""
            },
            chooseFilePath: {
                type: String,
                default: () => ""
            },
            codeRepositoryId: {
                type: [ String, Number ],
                default: ""
            },
            defaultList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "update:modelValue" ],
        setup(L, {
            emit: R
        }) {
            const U = R, t = L, i = F({
                get: () => t.modelValue,
                set: e => {
                    U("update:modelValue", e);
                }
            });
            s([]);
            const u = s(!1);
            s(0);
            const n = E({
                keywords: ""
            }), x = s([]), p = s(), m = s([]);
            s({});
            const y = s(!1), c = s({}), S = F(() => (m.value.length > 0 ? m.value : t.defaultList).find(e => e.id === i.value) || {}), T = s({
                children: "children",
                label: "name",
                isLeaf: (e, l) => e.fileType === "0",
                class: (e, l) => (e.fileType === "1" ? "code-folder" : "code-file") + (e.id === a(c).id ? " is-active-node" : "") + ` level-${l.level}`
            });
            function A() {
                y.value = !0;
            }
            function B() {
                y.value = !1;
            }
            const N = async (e, l) => {
                e.fileType === "0" && (c.value = e);
            }, v = () => {
                var e;
                (e = p.value) == null || e.filter(a(n));
            }, G = (e = {
                keywords: ""
            }, l) => t.chooseFilePath ? e.keywords ? l.name.includes(e.keywords) && l.path === t.chooseFilePath : l.path === t.chooseFilePath : !e.keywords || l.name.includes(e.keywords);
            function J() {
                n.value.keywords = "", u.value = !0, c.value = {}, C();
            }
            const C = () => {
                if (t.codeRepositoryId) {
                    if (t.defaultList.length > 0) return void z(() => {
                        var e;
                        (e = p.value) == null || e.filter(a(n));
                    });
                    ie(t.codeRepositoryId).then(e => {
                        x.value = ue(e), m.value = e, z(() => {
                            var l;
                            (l = p.value) == null || l.filter(a(n));
                        });
                    });
                }
            }, K = () => {
                i.value = c.value.id, b();
            }, b = () => {
                u.value = !1;
            };
            function Z() {
                i.value = "";
            }
            return H(() => {
                C();
            }), (e, l) => {
                const $ = le, g = ae, h = se, j = oe, q = te, D = de;
                return M(), O("div", k, [ Q(o($, {
                    round: "",
                    size: "default",
                    closable: "",
                    class: "mr-8px",
                    onClose: Z
                }, {
                    default: r(() => [ f(_(a(S).name), 1) ]),
                    _: 1
                }, 512), [ [ W, a(i) ] ]), o(h, {
                    onClick: J,
                    size: "small",
                    round: "",
                    class: "!px-8px"
                }, {
                    default: r(() => [ o(g, {
                        icon: "ep:" + (a(i) ? "sort" : "plus"),
                        size: 12,
                        class: "mr-3px"
                    }, null, 8, [ "icon" ]), f(" " + _(a(i) ? "更换" : "添加"), 1) ]),
                    _: 1
                }), o(D, {
                    modelValue: a(u),
                    "onUpdate:modelValue": l[1] || (l[1] = d => ee(u) ? u.value = d : null),
                    title: "选择文件",
                    width: "440px",
                    scroll: ""
                }, {
                    footer: r(() => {
                        var d;
                        return [ P("div", V, [ o(h, {
                            onClick: b
                        }, {
                            default: r(() => [ f("取 消") ]),
                            _: 1
                        }), o(h, {
                            type: "primary",
                            disabled: !((d = a(c)) != null && d.id),
                            onClick: K
                        }, {
                            default: r(() => [ f("确 定") ]),
                            _: 1
                        }, 8, [ "disabled" ]) ]) ];
                    }),
                    default: r(() => [ o(j, {
                        size: "large",
                        modelValue: a(n).keywords,
                        "onUpdate:modelValue": l[0] || (l[0] = d => a(n).keywords = d),
                        placeholder: "请输入关键字",
                        onKeyup: X(v, [ "enter" ]),
                        onClear: v,
                        onFocus: A,
                        onBlur: B,
                        class: Y([ "left search-keywords mb-10px", a(y) ? "is-focus" : "" ]),
                        clearable: ""
                    }, {
                        append: r(() => [ o(g, {
                            icon: "ep:search",
                            class: "pointer",
                            onClick: v
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue", "class" ]), o(q, {
                        data: a(x),
                        props: a(T),
                        onNodeClick: N,
                        ref_key: "treeRef",
                        ref: p,
                        class: "task-tree",
                        "default-expand-all": "",
                        "filter-node-method": G,
                        "node-key": "id",
                        indent: 12
                    }, {
                        default: r(({
                            node: d
                        }) => [ P("div", w, _(d.label), 1) ]),
                        _: 1
                    }, 8, [ "data", "props" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-73e97232" ] ]);
});

export {
    pe as __tla,
    I as default
};