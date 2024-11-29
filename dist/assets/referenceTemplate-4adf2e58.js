import {
    T as oe,
    p as ne,
    r as g,
    h as ue,
    e as G,
    U as ie,
    o as d,
    C as _,
    l as a,
    t as m,
    a as e,
    c as h,
    k as t,
    m as k,
    F as de,
    y as re,
    B as H,
    v as u,
    z as me,
    D as p,
    H as ce,
    A as S,
    G as z,
    bp as pe,
    bq as ve,
    av as fe,
    aw as ge,
    P as _e,
    O as Ce,
    cK as ye,
    _ as xe,
    K as Ve,
    Q as be,
    J as Ue,
    aU as he,
    R as ke,
    S as Se,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    __tla as qe
} from "./file-e038b35d.js";

import {
    s as Ne,
    a as De
} from "./referenceTemplateStep2-f50532f2.js";

import {
    _ as Pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let J, Te = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    let q, N, D, P, T, F, I, w;
    q = {
        class: "algin-center mb-14"
    }, N = [ "src" ], D = {
        key: 0,
        class: "px-45 pb-14"
    }, P = {
        class: "label-em"
    }, T = {
        key: 1,
        class: "template-form"
    }, F = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, I = (C => (ke("data-v-9cdcc507"), C = C(), Se(), C))(() => m("span", null, "各子级目录是否统一排序", -1)), 
    w = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, J = Pe({
        __name: "referenceTemplate",
        emits: [ "refreshList", "submitTemplate" ],
        setup(C, {
            expose: L,
            emit: O
        }) {
            const Q = oe();
            ne(), g(), ue();
            const v = g(!1), i = g("1"), X = O, V = () => {
                i.value = "1", n.value = "1", Z(), v.value = !1;
            }, Z = () => {
                l.level1Count = 1, l.level2Count = 1, l.level3Count = 1, l.isUnifiedSort = !0;
            }, $ = () => {
                i.value = "1";
            }, j = () => {
                i.value = "2";
            }, M = () => {
                E.value.validate(async r => {
                    if (!r) return !1;
                    X("submitTemplate", {
                        requestParams: {
                            templateId: n.value,
                            resPkgId: Q.params.id,
                            levels: W.value,
                            ...l
                        }
                    });
                });
            }, n = g("1"), A = [ {
                name: "章-节-单元（三级结构）",
                code: "1",
                cnName: "模板一："
            }, {
                name: "课次-课前/课中/课后（二级结构）",
                code: "2",
                cnName: "模板二："
            }, {
                name: "周次-课时（二级结构）",
                code: "3",
                cnName: "模板三："
            }, {
                name: "知识单元-知识点（二级结构）",
                code: "4",
                cnName: "模板四："
            }, {
                name: "讲次（一级结构）",
                code: "5",
                cnName: "模板五："
            } ], b = G(() => {
                var c;
                const r = (c = A.filter(y => y.code === n.value)) == null ? void 0 : c.pop(), {
                    name: s
                } = r;
                return s;
            }), W = G(() => ({
                1: 3,
                2: 2,
                3: 2,
                4: 2,
                5: 1
            })[n.value] || 0), l = ie({
                level1Count: 1,
                level2Count: 1,
                level3Count: 1,
                isUnifiedSort: !0
            }), Y = {
                level1Count: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                level2Count: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                } ],
                level3Count: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                isUnifiedSort: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ]
            }, E = g(null), ee = () => {
                l.level1Count = 1, l.level2Count = 1, l.isUnifiedSort = !0;
                const r = {
                    2: () => {
                        l.level2Count = 3, l.level3Count = 0, l.isUnifiedSort = !1;
                    },
                    3: () => {
                        l.level3Count = 0;
                    },
                    4: () => {
                        l.level3Count = 0;
                    },
                    5: () => {
                        l.level2Count = 0, l.level3Count = 0, l.isUnifiedSort = !1;
                    },
                    default: 1
                };
                (r[n.value] || r.default)();
            };
            return L({
                openStep1: () => {
                    v.value = !0;
                },
                closeDialog: V
            }), (r, s) => {
                const c = pe, y = ve, K = fe, le = ge, ae = _e, f = Ce, U = ye, R = xe, B = Ve, te = be, x = Ue, se = he;
                return d(), _(se, {
                    modelValue: e(v),
                    "onUpdate:modelValue": s[7] || (s[7] = o => k(v) ? v.value = o : null),
                    title: "引用目录模板",
                    width: "1000px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: V
                }, {
                    default: a(() => [ m("div", q, [ m("img", {
                        src: e(i) === "1" ? e(Ne) : e(De),
                        alt: ""
                    }, null, 8, N) ]), e(i) === "1" ? (d(), h("div", D, [ t(le, null, {
                        default: a(() => [ t(K, {
                            span: 12,
                            class: "step1-left"
                        }, {
                            default: a(() => [ t(y, {
                                modelValue: e(n),
                                "onUpdate:modelValue": s[0] || (s[0] = o => k(n) ? n.value = o : null),
                                onChange: ee
                            }, {
                                default: a(() => [ (d(), h(de, null, re(A, o => t(c, {
                                    key: o.code,
                                    value: o.code
                                }, {
                                    default: a(() => [ m("em", P, H(o.cnName), 1), u(H(o.name), 1) ]),
                                    _: 2
                                }, 1032, [ "value" ])), 64)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(K, {
                            span: 12,
                            class: "pl-19"
                        }, {
                            default: a(() => [ m("div", {
                                class: me([ "common-template", `template-${e(n)}` ])
                            }, null, 2) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ])) : p("", !0), e(i) === "2" ? (d(), h("div", T, [ t(te, {
                        ref_key: "templateFormRef",
                        ref: E,
                        model: e(l),
                        onSubmit: s[6] || (s[6] = ce(() => {}, [ "prevent" ])),
                        rules: Y,
                        "label-position": "top"
                    }, {
                        default: a(() => [ t(f, {
                            label: "引用目录模板"
                        }, {
                            default: a(() => [ t(ae, {
                                disabled: !0,
                                size: "large",
                                modelValue: e(b),
                                "onUpdate:modelValue": s[1] || (s[1] = o => k(b) ? b.value = o : null)
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(f, {
                            label: "一级目录（课次）个数",
                            prop: "level1Count"
                        }, {
                            default: a(() => [ t(U, {
                                modelValue: e(l).level1Count,
                                "onUpdate:modelValue": s[2] || (s[2] = o => e(l).level1Count = o),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                step: 1,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), u("   个 "), t(B, {
                                content: "说明：各课次下默认生成二级目录：课前、课中、课后",
                                placement: "top",
                                effect: "light"
                            }, {
                                default: a(() => [ [ "2" ].includes(e(n)) ? (d(), 
                                _(R, {
                                    key: 0,
                                    icon: "svg-icon:icon-tooltip",
                                    class: "pointer ml-6px"
                                })) : p("", !0) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), [ "1", "3", "4" ].includes(e(n)) ? (d(), _(f, {
                            key: 0,
                            label: "每一级目录下二级目录（节）",
                            prop: "level2Count"
                        }, {
                            default: a(() => [ t(U, {
                                modelValue: e(l).level2Count,
                                "onUpdate:modelValue": s[3] || (s[3] = o => e(l).level2Count = o),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), u("   个 ") ]),
                            _: 1
                        })) : p("", !0), [ "1" ].includes(e(n)) ? (d(), _(f, {
                            key: 1,
                            label: "每二级目录下三级目录（单元）",
                            prop: "level3Count"
                        }, {
                            default: a(() => [ t(U, {
                                modelValue: e(l).level3Count,
                                "onUpdate:modelValue": s[4] || (s[4] = o => e(l).level3Count = o),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), u("   个 ") ]),
                            _: 1
                        })) : p("", !0), [ "1", "3", "4" ].includes(e(n)) ? (d(), 
                        _(f, {
                            key: 2
                        }, {
                            label: a(() => [ m("div", F, [ I, t(B, {
                                content: "说明：统一排序即目录下所有子目录统一排序，否则各子目录分别排序",
                                placement: "top",
                                effect: "light"
                            }, {
                                default: a(() => [ t(R, {
                                    icon: "svg-icon:icon-tooltip",
                                    class: "pointer ml-6px"
                                }) ]),
                                _: 1
                            }) ]) ]),
                            default: a(() => [ t(y, {
                                modelValue: e(l).isUnifiedSort,
                                "onUpdate:modelValue": s[5] || (s[5] = o => e(l).isUnifiedSort = o)
                            }, {
                                default: a(() => [ t(c, {
                                    value: !0,
                                    size: "large"
                                }, {
                                    default: a(() => [ u("是") ]),
                                    _: 1
                                }), t(c, {
                                    value: !1,
                                    size: "large"
                                }, {
                                    default: a(() => [ u("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : p("", !0) ]),
                        _: 1
                    }, 8, [ "model" ]) ])) : p("", !0), m("div", w, [ t(x, {
                        onClick: V
                    }, {
                        default: a(() => [ u("取消") ]),
                        _: 1
                    }), S(t(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: $
                    }, {
                        default: a(() => [ u("上一步") ]),
                        _: 1
                    }, 512), [ [ z, e(i) === "2" ] ]), S(t(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: j,
                        disabled: !e(n)
                    }, {
                        default: a(() => [ u("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]), [ [ z, e(i) === "1" ] ]), S(t(x, {
                        type: "primary",
                        onClick: M
                    }, {
                        default: a(() => [ u("确定") ]),
                        _: 1
                    }, 512), [ [ z, e(i) === "2" ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9cdcc507" ] ]);
});

export {
    Te as __tla,
    J as default
};