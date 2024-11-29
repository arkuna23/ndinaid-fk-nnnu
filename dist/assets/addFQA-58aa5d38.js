import {
    p as S,
    h as G,
    T as M,
    a0 as W,
    r as n,
    U as X,
    f as Y,
    o as Z,
    C as $,
    l,
    k as e,
    v as _,
    a as r,
    H as ee,
    m as ae,
    bo as te,
    P as le,
    O as re,
    av as se,
    K as oe,
    bp as ue,
    bq as de,
    aw as ne,
    Q as ie,
    J as pe,
    aU as ce,
    n as fe,
    __tla as me
} from "./index-6c08ea4c.js";

import {
    _ as _e,
    __tla as he
} from "./Editor-ef737d2a.js";

import {
    c as ye,
    u as ge,
    __tla as ve
} from "./fqa-b0babe7d.js";

import {
    d as q
} from "./tree-05ea8e09.js";

import {
    _ as be
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Ve,
    __tla as Ce
} from "./index-ef4d146e.js";

import {
    __tla as ke
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as qe
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as we
} from "./file-e038b35d.js";

let w, xe = Promise.all([ (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})() ]).then(async () => {
    w = be({
        __name: "addFQA",
        props: {
            teachInfo: {
                type: Object,
                default: () => ({})
            },
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
        emits: [ "refreshList" ],
        setup(b, {
            expose: x,
            emit: A
        }) {
            const O = b;
            S(), G();
            const L = M(), {
                teachInfo: h,
                categoryList: Ae,
                treeList: Q
            } = W(O), i = n(!1), y = n(""), t = X({
                id: "",
                teachCourseId: "",
                fqaQuestion: "",
                fqaAnswer: "",
                isOpen: 1,
                resource: 0,
                kts: [],
                dirs: []
            }), z = {
                fqaQuestion: [ {
                    required: !0,
                    message: "请输入问题",
                    trigger: "blur"
                } ],
                fqaAnswer: [ {
                    required: !0,
                    message: "请输入答案",
                    trigger: "change"
                } ],
                isOpen: [ {
                    required: !0,
                    message: "请选择状态",
                    trigger: "change"
                } ]
            }, I = A;
            Y(() => {});
            const f = () => {
                i.value = !1, y.value = "", E(), v.value.resetFields();
            }, g = n(null), v = n(null), U = () => {
                v.value.validate(async o => {
                    if (!o) return !1;
                    await g.value(), te.success("操作成功"), I("refreshList"), f();
                });
            }, N = async () => {
                await ye({
                    ...t
                });
            }, T = async () => {
                await ge({
                    id: h.id,
                    ...t
                });
            };
            n([]);
            const p = n({});
            function D(o) {
                p.value.courseDept = "开课单位：" + p.value.activeText, p.value.activeText = "";
            }
            const j = (o, a) => a.name.includes(o);
            function F(o, a, c) {
                p.value.activeText = (o == null ? void 0 : o.name) || "";
            }
            const E = () => {
                t.id = "", t.id = "";
            };
            return x({
                handleOpen: ({
                    title: o,
                    type: a
                }) => {
                    i.value = !0, y.value = o;
                    const c = {
                        create: () => {
                            t.teachCourseId = L.params.teachCourseId, g.value = N;
                        },
                        edit: () => {
                            g.value = T, fe(() => {
                                Object.keys(t).forEach(u => {
                                    var d, m;
                                    t[u] = (d = h.value) == null ? void 0 : d[u], 
                                    t.dirs = [ (m = h.value) == null ? void 0 : m.dirName ];
                                });
                            });
                        },
                        default: () => {}
                    };
                    (c[a] || c.default)();
                },
                handleClose: f
            }), (o, a) => {
                const c = le, u = re, d = se, m = _e, V = Ve, P = oe, C = ue, B = de, H = ne, J = ie, k = pe, K = ce;
                return Z(), $(K, {
                    modelValue: r(i),
                    "onUpdate:modelValue": a[7] || (a[7] = s => ae(i) ? i.value = s : null),
                    width: "872px",
                    "close-on-click-modal": !1,
                    onClose: f,
                    appendToBody: !0,
                    title: r(y)
                }, {
                    footer: l(() => [ e(k, {
                        size: "large",
                        onClick: a[6] || (a[6] = s => f())
                    }, {
                        default: l(() => [ _("返 回") ]),
                        _: 1
                    }), e(k, {
                        size: "large",
                        type: "primary",
                        onClick: U
                    }, {
                        default: l(() => [ _("确 定") ]),
                        _: 1
                    }) ]),
                    default: l(() => [ e(J, {
                        ref_key: "dialogFormRef",
                        ref: v,
                        model: r(t),
                        onSubmit: a[5] || (a[5] = ee(() => {}, [ "prevent" ])),
                        rules: z,
                        class: "dialog-form",
                        "label-position": "top",
                        inline: ""
                    }, {
                        default: l(() => [ e(H, null, {
                            default: l(() => [ e(d, {
                                span: 24
                            }, {
                                default: l(() => [ e(u, {
                                    label: "问题",
                                    prop: "fqaQuestion"
                                }, {
                                    default: l(() => [ e(c, {
                                        modelValue: r(t).fqaQuestion,
                                        "onUpdate:modelValue": a[0] || (a[0] = s => r(t).fqaQuestion = s),
                                        placeholder: "请输入问题",
                                        maxlength: "200",
                                        size: "large"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(d, {
                                span: 24
                            }, {
                                default: l(() => [ e(u, {
                                    label: "答案",
                                    prop: "fqaAnswer"
                                }, {
                                    default: l(() => [ e(m, {
                                        modelValue: r(t).fqaAnswer,
                                        "onUpdate:modelValue": a[1] || (a[1] = s => r(t).fqaAnswer = s),
                                        height: "100px"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(d, {
                                span: 12
                            }, {
                                default: l(() => [ e(u, {
                                    label: "所属目录",
                                    prop: "dirs"
                                }, {
                                    default: l(() => [ e(V, {
                                        modelValue: r(t).dirs,
                                        "onUpdate:modelValue": a[2] || (a[2] = s => r(t).dirs = s),
                                        data: r(Q),
                                        "check-strictly": "",
                                        "render-after-expand": !1,
                                        placeholder: "请选择所属目录",
                                        filterable: "",
                                        size: "large",
                                        multiple: "",
                                        props: r(q)
                                    }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(d, {
                                span: 12
                            }, {
                                default: l(() => [ e(u, {
                                    label: "关联知识技能点",
                                    prop: "ktName"
                                }, {
                                    default: l(() => {
                                        var s;
                                        return [ e(P, {
                                            class: "item",
                                            effect: "dark",
                                            content: ((s = r(p)) == null ? void 0 : s.ktName) || "-",
                                            placement: "top",
                                            disabled: !r(t).ktName
                                        }, {
                                            default: l(() => [ e(V, {
                                                onChange: D,
                                                modelValue: r(t).type,
                                                "onUpdate:modelValue": a[3] || (a[3] = R => r(t).type = R),
                                                size: "large",
                                                data: b.courseDeptList,
                                                "node-key": "value",
                                                props: r(q),
                                                placeholder: "请输入知识技能点名称/编号",
                                                "check-strictly": "",
                                                "popper-class": "tree-select-popper",
                                                "render-after-expand": !0,
                                                class: "search-item",
                                                clearable: "",
                                                filterable: "",
                                                "filter-node-method": j,
                                                onNodeClick: F,
                                                onCurrentChange: o.handleCourseDeptChange,
                                                multiple: ""
                                            }, null, 8, [ "modelValue", "data", "props", "onCurrentChange" ]) ]),
                                            _: 1
                                        }, 8, [ "content", "disabled" ]) ];
                                    }),
                                    _: 1
                                }) ]),
                                _: 1
                            }), e(d, {
                                span: 12
                            }, {
                                default: l(() => [ e(u, {
                                    label: "状态",
                                    prop: "isOpen"
                                }, {
                                    default: l(() => [ e(B, {
                                        modelValue: r(t).isOpen,
                                        "onUpdate:modelValue": a[4] || (a[4] = s => r(t).isOpen = s)
                                    }, {
                                        default: l(() => [ e(C, {
                                            value: 1,
                                            size: "large"
                                        }, {
                                            default: l(() => [ _("开启") ]),
                                            _: 1
                                        }), e(C, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: l(() => [ _("关闭") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
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
    }, [ [ "__scopeId", "data-v-eec58272" ] ]);
});

export {
    xe as __tla,
    w as default
};