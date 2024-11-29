import {
    p as R,
    h as G,
    T as M,
    a0 as W,
    r as n,
    U as X,
    f as Y,
    o as Z,
    C as $,
    l as r,
    k as t,
    v as m,
    a as s,
    H as ee,
    m as ae,
    bo as te,
    P as le,
    O as re,
    av as se,
    K as oe,
    bp as de,
    bq as ue,
    aw as ie,
    Q as ne,
    J as pe,
    aU as ce,
    __tla as fe
} from "./index-6c08ea4c.js";

import {
    _ as _e,
    __tla as me
} from "./Editor-ef737d2a.js";

import {
    c as ge,
    u as he,
    __tla as ve
} from "./fqa-b0babe7d.js";

import {
    d as k
} from "./tree-05ea8e09.js";

import {
    _ as ye
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as be,
    __tla as Ve
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

let q, Ae = Promise.all([ (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return Ve;
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
    q = ye({
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
        emits: [ "refreshList" ],
        setup(v, {
            expose: w,
            emit: A
        }) {
            const x = v;
            R(), G();
            const C = M(), {
                categoryList: xe,
                treeList: U
            } = W(x), p = n(!1), g = n(""), l = X({
                id: "",
                teachCourseId: "",
                fqaQuestion: "",
                fqaAnswer: "",
                isOpen: 1,
                resource: 0,
                kts: [],
                dirs: []
            }), I = {
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
                    validator: (o, e, a) => {
                        e && e === "<p><br></p>" ? a(new Error("请输入答案")) : a();
                    },
                    trigger: "blur"
                }, {
                    validator: (o, e, a) => {
                        e && e.length > 2e3 ? a(new Error("课程简介不能超过2000字符")) : a();
                    },
                    trigger: "blur"
                } ],
                isOpen: [ {
                    required: !0,
                    message: "请选择状态",
                    trigger: "change"
                } ]
            }, O = A;
            Y(() => {});
            const f = () => {
                g.value = "", N(), _.value.resetFields(), p.value = !1;
            }, h = n(null), _ = n(null), Q = () => {
                _.value.validate(async o => {
                    if (!o) return !1;
                    await h.value(), te.success("操作成功"), O("refreshList"), f();
                });
            }, z = async () => {
                await ge({
                    ...l
                });
            }, L = async () => {
                await he({
                    ...l
                });
            };
            n([]);
            const c = n({});
            function E(o) {
                c.value.courseDept = "开课单位：" + c.value.activeText, c.value.activeText = "";
            }
            const T = (o, e) => e.name.includes(o);
            function F(o, e, a) {
                c.value.activeText = (o == null ? void 0 : o.name) || "";
            }
            const N = () => {
                l.id = "";
            }, S = o => {
                _.value.validateField("fqaAnswer");
            };
            return w({
                handleOpen: ({
                    title: o,
                    type: e,
                    row: a
                }) => {
                    p.value = !0, g.value = o;
                    const u = {
                        create: () => {
                            l.teachCourseId = C.params.teachCourseId, h.value = z;
                        },
                        edit: () => {
                            h.value = L, Object.keys(l).forEach(i => {
                                l[i] = a == null ? void 0 : a[i];
                            }), l.dirs = (a == null ? void 0 : a.dirIdString) !== "" && (a == null ? void 0 : a.dirIdString) !== null ? a == null ? void 0 : a.dirIdString.split(",") : [], 
                            l.fqaAnswer = a == null ? void 0 : a.fqaAnswer;
                        },
                        default: () => {}
                    };
                    (u[e] || u.default)();
                },
                handleClose: f
            }), (o, e) => {
                const a = le, u = re, i = se, D = _e, y = be, j = oe, b = de, B = ue, P = ie, H = ne, V = pe, J = ce;
                return Z(), $(J, {
                    modelValue: s(p),
                    "onUpdate:modelValue": e[7] || (e[7] = d => ae(p) ? p.value = d : null),
                    width: "872px",
                    "close-on-click-modal": !1,
                    onClose: f,
                    appendToBody: !0,
                    title: s(g)
                }, {
                    footer: r(() => [ t(V, {
                        size: "large",
                        onClick: e[6] || (e[6] = d => f())
                    }, {
                        default: r(() => [ m("返 回") ]),
                        _: 1
                    }), t(V, {
                        size: "large",
                        type: "primary",
                        onClick: Q
                    }, {
                        default: r(() => [ m("确 定") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ t(H, {
                        ref_key: "dialogFormRef",
                        ref: _,
                        model: s(l),
                        onSubmit: e[5] || (e[5] = ee(() => {}, [ "prevent" ])),
                        rules: I,
                        class: "dialog-form",
                        "label-position": "top",
                        inline: ""
                    }, {
                        default: r(() => [ t(P, null, {
                            default: r(() => [ t(i, {
                                span: 24
                            }, {
                                default: r(() => [ t(u, {
                                    label: "问题",
                                    prop: "fqaQuestion"
                                }, {
                                    default: r(() => [ t(a, {
                                        modelValue: s(l).fqaQuestion,
                                        "onUpdate:modelValue": e[0] || (e[0] = d => s(l).fqaQuestion = d),
                                        placeholder: "请输入问题",
                                        maxlength: "200",
                                        size: "large"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(i, {
                                span: 24
                            }, {
                                default: r(() => [ t(u, {
                                    label: "答案",
                                    prop: "fqaAnswer"
                                }, {
                                    default: r(() => [ t(D, {
                                        modelValue: s(l).fqaAnswer,
                                        "onUpdate:modelValue": e[1] || (e[1] = d => s(l).fqaAnswer = d),
                                        height: "200px",
                                        style: {
                                            width: "780px"
                                        },
                                        onEditorBlur: S
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(i, {
                                span: 12
                            }, {
                                default: r(() => [ t(u, {
                                    label: "所属目录",
                                    prop: "dirs"
                                }, {
                                    default: r(() => [ t(y, {
                                        modelValue: s(l).dirs,
                                        "onUpdate:modelValue": e[2] || (e[2] = d => s(l).dirs = d),
                                        data: s(U),
                                        "check-strictly": "",
                                        "render-after-expand": !1,
                                        placeholder: "请选择所属目录",
                                        filterable: "",
                                        size: "large",
                                        multiple: "",
                                        props: s(k)
                                    }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(i, {
                                span: 12
                            }, {
                                default: r(() => [ t(u, {
                                    label: "关联知识技能点",
                                    prop: "ktName"
                                }, {
                                    default: r(() => {
                                        var d;
                                        return [ t(j, {
                                            class: "item",
                                            effect: "dark",
                                            content: ((d = s(c)) == null ? void 0 : d.ktName) || "-",
                                            placement: "top",
                                            disabled: !s(l).ktName
                                        }, {
                                            default: r(() => [ t(y, {
                                                onChange: E,
                                                modelValue: s(l).kts,
                                                "onUpdate:modelValue": e[3] || (e[3] = K => s(l).kts = K),
                                                size: "large",
                                                data: v.courseDeptList,
                                                "node-key": "value",
                                                props: s(k),
                                                placeholder: "请输入知识技能点名称/编号",
                                                "check-strictly": "",
                                                "popper-class": "tree-select-popper",
                                                "render-after-expand": !0,
                                                class: "search-item",
                                                clearable: "",
                                                filterable: "",
                                                "filter-node-method": T,
                                                onNodeClick: F,
                                                multiple: ""
                                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                            _: 1
                                        }, 8, [ "content", "disabled" ]) ];
                                    }),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(i, {
                                span: 12
                            }, {
                                default: r(() => [ t(u, {
                                    label: "状态",
                                    prop: "isOpen"
                                }, {
                                    default: r(() => [ t(B, {
                                        modelValue: s(l).isOpen,
                                        "onUpdate:modelValue": e[4] || (e[4] = d => s(l).isOpen = d)
                                    }, {
                                        default: r(() => [ t(b, {
                                            value: 1,
                                            size: "large"
                                        }, {
                                            default: r(() => [ m("开启") ]),
                                            _: 1
                                        }), t(b, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: r(() => [ m("关闭") ]),
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
    }, [ [ "__scopeId", "data-v-c0a0a171" ] ]);
});

export {
    Ae as __tla,
    q as default
};