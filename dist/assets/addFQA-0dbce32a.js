import {
    p as W,
    h as X,
    T as Y,
    a0 as Z,
    r as i,
    U as $,
    f as ee,
    o as ae,
    C as te,
    l as t,
    k as a,
    v as h,
    a as r,
    H as le,
    m as re,
    bo as se,
    n as C,
    P as oe,
    O as ue,
    av as ne,
    K as de,
    bp as ie,
    bq as pe,
    aw as ce,
    Q as fe,
    J as me,
    aU as _e,
    __tla as he
} from "./index-6c08ea4c.js";

import {
    _ as ve,
    __tla as ge
} from "./Editor-ef737d2a.js";

import {
    c as ye,
    u as be,
    __tla as Ve
} from "./fqa-b0babe7d.js";

import {
    d as w
} from "./tree-05ea8e09.js";

import {
    _ as ke
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as qe,
    __tla as Ce
} from "./index-ef4d146e.js";

import {
    __tla as we
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Ae
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as xe
} from "./file-e038b35d.js";

let A, Oe = Promise.all([ (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})() ]).then(async () => {
    A = ke({
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
            emit: O
        }) {
            const L = b;
            W(), X();
            const z = Y(), {
                teachInfo: v,
                categoryList: Le,
                treeList: I
            } = Z(L), p = i(!1), g = i(""), l = $({
                id: "",
                teachCourseId: "",
                fqaQuestion: "",
                fqaAnswer: "",
                isOpen: 1,
                resource: 0,
                kts: [],
                dirs: []
            }), Q = {
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
                    validator: (s, e, u) => {
                        e === "<p><br></p>" ? u(new Error("请输入答案")) : u();
                    },
                    trigger: "blur"
                } ],
                isOpen: [ {
                    required: !0,
                    message: "请选择状态",
                    trigger: "change"
                } ]
            }, U = O;
            ee(() => {});
            const m = () => {
                p.value = !1, g.value = "", j(), c.value.resetFields();
            }, y = i(null), c = i(null), T = () => {
                c.value.validate(async s => {
                    if (!s) return !1;
                    await y.value(), se.success("操作成功"), U("refreshList"), m();
                });
            }, N = async () => {
                await ye({
                    ...l
                });
            }, D = async () => {
                await be({
                    id: v.id,
                    ...l
                });
            };
            i([]);
            const f = i({});
            function E(s) {
                f.value.courseDept = "开课单位：" + f.value.activeText, f.value.activeText = "";
            }
            const F = (s, e) => e.name.includes(s);
            function P(s, e, u) {
                f.value.activeText = (s == null ? void 0 : s.name) || "";
            }
            const j = () => {
                l.id = "";
            }, B = s => {
                C(() => {
                    c.value.validateField("fqaAnswer");
                });
            }, G = s => {
                c.value.clearValidate("fqaAnswer");
            };
            return x({
                handleOpen: ({
                    title: s,
                    type: e
                }) => {
                    p.value = !0, g.value = s;
                    const u = {
                        create: () => {
                            l.teachCourseId = z.params.teachCourseId, y.value = N;
                        },
                        edit: () => {
                            y.value = D, C(() => {
                                Object.keys(l).forEach(n => {
                                    var d, _;
                                    l[n] = (d = v.value) == null ? void 0 : d[n], 
                                    l.dirs = [ (_ = v.value) == null ? void 0 : _.dirName ];
                                });
                            });
                        },
                        default: () => {}
                    };
                    (u[e] || u.default)();
                },
                handleClose: m
            }), (s, e) => {
                const u = oe, n = ue, d = ne, _ = ve, V = qe, H = de, k = ie, J = pe, K = ce, R = fe, q = me, S = _e;
                return ae(), te(S, {
                    modelValue: r(p),
                    "onUpdate:modelValue": e[7] || (e[7] = o => re(p) ? p.value = o : null),
                    width: "872px",
                    "close-on-click-modal": !1,
                    onClose: m,
                    appendToBody: !0,
                    title: r(g)
                }, {
                    footer: t(() => [ a(q, {
                        size: "large",
                        onClick: e[6] || (e[6] = o => m())
                    }, {
                        default: t(() => [ h("返 回") ]),
                        _: 1
                    }), a(q, {
                        size: "large",
                        type: "primary",
                        onClick: T
                    }, {
                        default: t(() => [ h("确 定") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ a(R, {
                        ref_key: "dialogFormRef",
                        ref: c,
                        model: r(l),
                        onSubmit: e[5] || (e[5] = le(() => {}, [ "prevent" ])),
                        rules: Q,
                        class: "dialog-form",
                        "label-position": "top",
                        inline: ""
                    }, {
                        default: t(() => [ a(K, null, {
                            default: t(() => [ a(d, {
                                span: 24
                            }, {
                                default: t(() => [ a(n, {
                                    label: "问题",
                                    prop: "fqaQuestion"
                                }, {
                                    default: t(() => [ a(u, {
                                        modelValue: r(l).fqaQuestion,
                                        "onUpdate:modelValue": e[0] || (e[0] = o => r(l).fqaQuestion = o),
                                        placeholder: "请输入问题",
                                        maxlength: "200",
                                        size: "large"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(d, {
                                span: 24
                            }, {
                                default: t(() => [ a(n, {
                                    label: "答案",
                                    prop: "fqaAnswer"
                                }, {
                                    default: t(() => [ a(_, {
                                        onGetPlainText: B,
                                        onOnfocus: G,
                                        modelValue: r(l).fqaAnswer,
                                        "onUpdate:modelValue": e[1] || (e[1] = o => r(l).fqaAnswer = o),
                                        height: "200px"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(d, {
                                span: 12
                            }, {
                                default: t(() => [ a(n, {
                                    label: "所属目录",
                                    prop: "dirs"
                                }, {
                                    default: t(() => [ a(V, {
                                        modelValue: r(l).dirs,
                                        "onUpdate:modelValue": e[2] || (e[2] = o => r(l).dirs = o),
                                        data: r(I),
                                        "check-strictly": "",
                                        "render-after-expand": !1,
                                        placeholder: "请选择所属目录",
                                        filterable: "",
                                        size: "large",
                                        multiple: "",
                                        props: r(w)
                                    }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(d, {
                                span: 12
                            }, {
                                default: t(() => [ a(n, {
                                    label: "关联知识技能点",
                                    prop: "ktName"
                                }, {
                                    default: t(() => {
                                        var o;
                                        return [ a(H, {
                                            class: "item",
                                            effect: "dark",
                                            content: ((o = r(f)) == null ? void 0 : o.ktName) || "-",
                                            placement: "top",
                                            disabled: !r(l).ktName
                                        }, {
                                            default: t(() => [ a(V, {
                                                onChange: E,
                                                modelValue: r(l).kts,
                                                "onUpdate:modelValue": e[3] || (e[3] = M => r(l).kts = M),
                                                size: "large",
                                                data: b.courseDeptList,
                                                "node-key": "value",
                                                props: r(w),
                                                placeholder: "请输入知识技能点名称/编号",
                                                "check-strictly": "",
                                                "popper-class": "tree-select-popper",
                                                "render-after-expand": !0,
                                                class: "search-item",
                                                clearable: "",
                                                filterable: "",
                                                "filter-node-method": F,
                                                onNodeClick: P,
                                                onCurrentChange: s.handleCourseDeptChange,
                                                multiple: ""
                                            }, null, 8, [ "modelValue", "data", "props", "onCurrentChange" ]) ]),
                                            _: 1
                                        }, 8, [ "content", "disabled" ]) ];
                                    }),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(d, {
                                span: 12
                            }, {
                                default: t(() => [ a(n, {
                                    label: "状态",
                                    prop: "isOpen"
                                }, {
                                    default: t(() => [ a(J, {
                                        modelValue: r(l).isOpen,
                                        "onUpdate:modelValue": e[4] || (e[4] = o => r(l).isOpen = o)
                                    }, {
                                        default: t(() => [ a(k, {
                                            value: 1,
                                            size: "large"
                                        }, {
                                            default: t(() => [ h("开启") ]),
                                            _: 1
                                        }), a(k, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: t(() => [ h("关闭") ]),
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
    }, [ [ "__scopeId", "data-v-9f9d0263" ] ]);
});

export {
    Oe as __tla,
    A as default
};