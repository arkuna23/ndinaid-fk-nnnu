import {
    p as B,
    h as H,
    T as J,
    a0 as K,
    r as n,
    U as R,
    o as G,
    C as M,
    l as o,
    k as r,
    v as k,
    a as s,
    H as W,
    m as X,
    P as Y,
    O as Z,
    av as $,
    K as ee,
    aw as ae,
    Q as te,
    J as re,
    aU as le,
    __tla as se
} from "./index-6c08ea4c.js";

import {
    _ as oe,
    __tla as de
} from "./Editor-ef737d2a.js";

import {
    d as b
} from "./tree-05ea8e09.js";

import {
    _ as ue
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as ie,
    __tla as ne
} from "./index-ef4d146e.js";

import {
    __tla as pe
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as ce
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as me
} from "./file-e038b35d.js";

let q, fe = Promise.all([ (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})() ]).then(async () => {
    q = ue({
        __name: "addFQA",
        props: {
            categoryList: {
                type: Array,
                default: () => []
            },
            courseDeptList: {
                type: Array,
                default: () => []
            },
            treeList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "submitFQA" ],
        setup(g, {
            expose: A,
            emit: w
        }) {
            const V = g;
            B(), H();
            const x = J(), {
                categoryList: _e,
                treeList: Q
            } = K(V), p = n(!1), f = n(""), t = R({
                id: "",
                resPkgId: "",
                fqaQuestion: "",
                fqaAnswer: "",
                resource: 0,
                kts: [],
                dirs: []
            }), C = {
                fqaQuestion: [ {
                    required: !0,
                    message: "请输入问题",
                    trigger: "blur"
                } ],
                fqaAnswer: [ {
                    required: !0,
                    message: "请输入答案",
                    trigger: "change"
                }, {
                    validator: (l, a, e) => {
                        a && a === "<p><br></p>" ? e(new Error("请输入答案")) : e();
                    },
                    trigger: "blur"
                }, {
                    validator: (l, a, e) => {
                        a && a.length > 2e3 ? e(new Error("课程简介不能超过2000字符")) : e();
                    },
                    trigger: "blur"
                } ]
            }, E = w, _ = () => {
                f.value = "", m.value.resetFields(), N(), p.value = !1;
            };
            n(null);
            const y = n(""), m = n(null), U = () => {
                m.value.validate(async l => {
                    if (!l) return !1;
                    E("submitFQA", {
                        requestParams: t,
                        type: y.value
                    });
                });
            };
            n([]);
            const c = n({});
            function F(l) {
                c.value.courseDept = "开课单位：" + c.value.activeText, c.value.activeText = "";
            }
            const I = (l, a) => a.name.includes(l);
            function L(l, a, e) {
                c.value.activeText = (l == null ? void 0 : l.name) || "";
            }
            const N = () => {
                Object.keys(t).map(l => t[l] = ""), t.resource = 0, t.kts = [], 
                t.dirs = [];
            }, z = l => {
                m.value.validateField("fqaAnswer");
            };
            return A({
                handleOpen: ({
                    title: l,
                    type: a,
                    row: e
                }) => {
                    p.value = !0, f.value = l, y.value = a;
                    const i = {
                        create: () => {
                            t.resPkgId = x.params.id;
                        },
                        edit: () => {
                            Object.keys(t).forEach(u => {
                                t[u] = e == null ? void 0 : e[u];
                            }), t.dirs = (e == null ? void 0 : e.dirIdString) !== "" && (e == null ? void 0 : e.dirIdString) !== null ? e == null ? void 0 : e.dirIdString.split(",") : [], 
                            t.fqaAnswer = e == null ? void 0 : e.fqaAnswer;
                        },
                        editNeu: () => {
                            Object.keys(t).forEach(u => {
                                t[u] = e == null ? void 0 : e[u];
                            });
                        },
                        default: () => {}
                    };
                    (i[a] || i.default)();
                },
                handleClose: _
            }), (l, a) => {
                const e = Y, i = Z, u = $, O = oe, h = ie, P = ee, T = ae, S = te, v = re, j = le;
                return G(), M(j, {
                    modelValue: s(p),
                    "onUpdate:modelValue": a[6] || (a[6] = d => X(p) ? p.value = d : null),
                    width: "872px",
                    "close-on-click-modal": !1,
                    onClose: _,
                    appendToBody: !0,
                    title: s(f)
                }, {
                    footer: o(() => [ r(v, {
                        size: "large",
                        onClick: a[5] || (a[5] = d => _())
                    }, {
                        default: o(() => [ k("返 回") ]),
                        _: 1
                    }), r(v, {
                        size: "large",
                        type: "primary",
                        onClick: U
                    }, {
                        default: o(() => [ k("确 定") ]),
                        _: 1
                    }) ]),
                    default: o(() => [ r(S, {
                        ref_key: "dialogFormRef",
                        ref: m,
                        model: s(t),
                        onSubmit: a[4] || (a[4] = W(() => {}, [ "prevent" ])),
                        rules: C,
                        class: "dialog-form",
                        "label-position": "top",
                        inline: ""
                    }, {
                        default: o(() => [ r(T, null, {
                            default: o(() => [ r(u, {
                                span: 24
                            }, {
                                default: o(() => [ r(i, {
                                    label: "问题",
                                    prop: "fqaQuestion"
                                }, {
                                    default: o(() => [ r(e, {
                                        modelValue: s(t).fqaQuestion,
                                        "onUpdate:modelValue": a[0] || (a[0] = d => s(t).fqaQuestion = d),
                                        placeholder: "请输入问题",
                                        maxlength: "200",
                                        size: "large"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 24
                            }, {
                                default: o(() => [ r(i, {
                                    label: "答案",
                                    prop: "fqaAnswer"
                                }, {
                                    default: o(() => [ r(O, {
                                        modelValue: s(t).fqaAnswer,
                                        "onUpdate:modelValue": a[1] || (a[1] = d => s(t).fqaAnswer = d),
                                        height: "200px",
                                        style: {
                                            width: "780px"
                                        },
                                        onEditorBlur: z
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 12
                            }, {
                                default: o(() => [ r(i, {
                                    label: "所属目录",
                                    prop: "dirs"
                                }, {
                                    default: o(() => [ r(h, {
                                        modelValue: s(t).dirs,
                                        "onUpdate:modelValue": a[2] || (a[2] = d => s(t).dirs = d),
                                        data: s(Q),
                                        "check-strictly": "",
                                        "render-after-expand": !1,
                                        placeholder: "请选择所属目录",
                                        filterable: "",
                                        size: "large",
                                        multiple: "",
                                        props: s(b)
                                    }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), r(u, {
                                span: 12
                            }, {
                                default: o(() => [ r(i, {
                                    label: "关联知识技能点",
                                    prop: "ktName"
                                }, {
                                    default: o(() => {
                                        var d;
                                        return [ r(P, {
                                            class: "item",
                                            effect: "dark",
                                            content: ((d = s(c)) == null ? void 0 : d.ktName) || "-",
                                            placement: "top",
                                            disabled: !s(t).ktName
                                        }, {
                                            default: o(() => [ r(h, {
                                                onChange: F,
                                                modelValue: s(t).kts,
                                                "onUpdate:modelValue": a[3] || (a[3] = D => s(t).kts = D),
                                                size: "large",
                                                data: g.courseDeptList,
                                                "node-key": "value",
                                                props: s(b),
                                                placeholder: "请输入知识技能点名称/编号",
                                                "check-strictly": "",
                                                "popper-class": "tree-select-popper",
                                                "render-after-expand": !0,
                                                class: "search-item",
                                                clearable: "",
                                                filterable: "",
                                                "filter-node-method": I,
                                                onNodeClick: L,
                                                multiple: ""
                                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                            _: 1
                                        }, 8, [ "content", "disabled" ]) ];
                                    }),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-913d3125" ] ]);
});

export {
    fe as __tla,
    q as default
};