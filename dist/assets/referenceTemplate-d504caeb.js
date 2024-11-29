import {
    T as ue,
    p as oe,
    r as _,
    h as me,
    e as D,
    U as ne,
    o as i,
    C as g,
    l,
    t as d,
    a as e,
    c as k,
    k as a,
    m as U,
    F as re,
    y as ie,
    B as G,
    v as n,
    z as de,
    D as p,
    H as ce,
    A as C,
    G as S,
    bp as pe,
    bq as ve,
    av as fe,
    aw as _e,
    P as ge,
    O as Ne,
    cK as ye,
    _ as xe,
    K as Ve,
    Q as he,
    J as be,
    aU as ke,
    R as Ue,
    S as Ce,
    __tla as Se
} from "./index-6c08ea4c.js";

import {
    __tla as ze
} from "./file-e038b35d.js";

import {
    s as qe,
    a as we
} from "./referenceTemplateStep2-f50532f2.js";

import {
    c as Ke,
    __tla as Fe
} from "./catalog-6352045f.js";

import {
    _ as Ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

let H, Le = Promise.all([ (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})() ]).then(async () => {
    let z, q, w, K, F, I, L, A;
    z = {
        class: "algin-center mb-14"
    }, q = [ "src" ], w = {
        key: 0,
        class: "px-45 pb-14"
    }, K = {
        class: "label-em"
    }, F = {
        key: 1,
        class: "template-form"
    }, I = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, L = (N => (Ue("data-v-6513e263"), N = N(), Ce(), N))(() => d("span", null, "各子级目录是否统一排序", -1)), 
    A = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, H = Ie({
        __name: "referenceTemplate",
        emits: [ "refreshList" ],
        setup(N, {
            expose: J,
            emit: O
        }) {
            const Q = ue();
            oe(), _(), me();
            const v = _(!1), r = _("1"), Y = O, B = () => {
                var m;
                r.value = "1", o.value = "1", v.value = !1, (m = h.value) == null || m.resetFields();
            }, $ = () => {
                r.value = "1";
            }, j = () => {
                r.value = "2";
            }, E = () => {
                h.value.validate(async m => {
                    if (!m) return !1;
                    await Z(), B(), Y("refreshList");
                });
            }, o = _("1"), M = [ {
                name: "章-节-单元",
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
            } ], V = D(() => {
                var c;
                const m = (c = M.filter(y => y.code === o.value)) == null ? void 0 : c.pop(), {
                    name: t
                } = m;
                return t;
            }), W = D(() => ({
                1: 3,
                2: 2,
                3: 2,
                4: 2,
                5: 1
            })[o.value] || 0), u = ne({
                level1Num: 1,
                level2Num: 1,
                level3Num: 1,
                unifiedSort: !0
            }), X = {
                level1Num: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                level2Num: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                } ],
                level3Num: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                unifiedSort: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ]
            }, h = _(null), Z = async () => await Ke({
                template: o.value,
                teachCourseId: Q.params.teachCourseId,
                level: W.value,
                ...u
            }), ee = () => {
                u.level2Num = 1;
                const m = {
                    2: () => {
                        u.level2Num = 3, u.level3Num = 0;
                    },
                    3: () => {
                        u.level3Num = 0;
                    },
                    4: () => {
                        u.level3Num = 0;
                    },
                    5: () => {
                        u.level2Num = 0, u.level3Num = 0;
                    },
                    default: 1
                };
                (m[o.value] || m.default)();
            };
            return J({
                openStep1: () => {
                    v.value = !0;
                }
            }), (m, t) => {
                const c = pe, y = ve, P = fe, le = _e, ae = ge, f = Ne, b = ye, R = xe, T = Ve, te = he, x = be, se = ke;
                return i(), g(se, {
                    modelValue: e(v),
                    "onUpdate:modelValue": t[7] || (t[7] = s => U(v) ? v.value = s : null),
                    title: "引用目录模板",
                    width: "1000px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: l(() => [ d("div", z, [ d("img", {
                        src: e(r) === "1" ? e(qe) : e(we),
                        alt: ""
                    }, null, 8, q) ]), e(r) === "1" ? (i(), k("div", w, [ a(le, null, {
                        default: l(() => [ a(P, {
                            span: 12,
                            class: "step1-left"
                        }, {
                            default: l(() => [ a(y, {
                                modelValue: e(o),
                                "onUpdate:modelValue": t[0] || (t[0] = s => U(o) ? o.value = s : null),
                                onChange: ee
                            }, {
                                default: l(() => [ (i(), k(re, null, ie(M, s => a(c, {
                                    key: s.code,
                                    value: s.code
                                }, {
                                    default: l(() => [ d("em", K, G(s.cnName), 1), n(G(s.name), 1) ]),
                                    _: 2
                                }, 1032, [ "value" ])), 64)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(P, {
                            span: 12,
                            class: "pl-19"
                        }, {
                            default: l(() => [ d("div", {
                                class: de([ "common-template", `template-${e(o)}` ])
                            }, null, 2) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ])) : p("", !0), e(r) === "2" ? (i(), k("div", F, [ a(te, {
                        ref_key: "templateFormRef",
                        ref: h,
                        model: e(u),
                        onSubmit: t[6] || (t[6] = ce(() => {}, [ "prevent" ])),
                        rules: X,
                        "label-position": "top"
                    }, {
                        default: l(() => [ a(f, {
                            label: "引用目录模板"
                        }, {
                            default: l(() => [ a(ae, {
                                disabled: !0,
                                size: "large",
                                modelValue: e(V),
                                "onUpdate:modelValue": t[1] || (t[1] = s => U(V) ? V.value = s : null)
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(f, {
                            label: "一级目录（章）",
                            prop: "level1Num"
                        }, {
                            default: l(() => [ a(b, {
                                modelValue: e(u).level1Num,
                                "onUpdate:modelValue": t[2] || (t[2] = s => e(u).level1Num = s),
                                size: "large",
                                "controls-position": "right",
                                min: "1",
                                max: "100"
                            }, null, 8, [ "modelValue" ]), n("   个 "), a(T, {
                                content: "说明：各课次下默认生成二级目录：课前、课中、课后",
                                placement: "top",
                                effect: "light"
                            }, {
                                default: l(() => [ [ "2" ].includes(e(o)) ? (i(), 
                                g(R, {
                                    key: 0,
                                    icon: "svg-icon:icon-tooltip",
                                    class: "pointer ml-6px"
                                })) : p("", !0) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), [ "1", "3", "4" ].includes(e(o)) ? (i(), g(f, {
                            key: 0,
                            label: "每一级目录下二级目录（节）",
                            prop: "level2Num",
                            min: "1",
                            max: "100"
                        }, {
                            default: l(() => [ a(b, {
                                modelValue: e(u).level2Num,
                                "onUpdate:modelValue": t[3] || (t[3] = s => e(u).level2Num = s),
                                size: "large",
                                "controls-position": "right",
                                min: "1"
                            }, null, 8, [ "modelValue" ]), n("   个 ") ]),
                            _: 1
                        })) : p("", !0), [ "1" ].includes(e(o)) ? (i(), g(f, {
                            key: 1,
                            label: "每二级目录下三级目录（单元）",
                            prop: "level3Num",
                            min: "1",
                            max: "100"
                        }, {
                            default: l(() => [ a(b, {
                                modelValue: e(u).level3Num,
                                "onUpdate:modelValue": t[4] || (t[4] = s => e(u).level3Num = s),
                                size: "large",
                                "controls-position": "right",
                                min: "1"
                            }, null, 8, [ "modelValue" ]), n("   个 ") ]),
                            _: 1
                        })) : p("", !0), [ "1", "3", "4" ].includes(e(o)) ? (i(), 
                        g(f, {
                            key: 2,
                            prop: "unifiedSort"
                        }, {
                            label: l(() => [ d("div", I, [ L, a(T, {
                                content: "说明：统一排序即目录下所有子目录统一排序，否则各子目录分别排序",
                                placement: "top",
                                effect: "light"
                            }, {
                                default: l(() => [ a(R, {
                                    icon: "svg-icon:icon-tooltip",
                                    class: "pointer ml-6px"
                                }) ]),
                                _: 1
                            }) ]) ]),
                            default: l(() => [ a(y, {
                                modelValue: e(u).unifiedSort,
                                "onUpdate:modelValue": t[5] || (t[5] = s => e(u).unifiedSort = s)
                            }, {
                                default: l(() => [ a(c, {
                                    value: !0,
                                    size: "large"
                                }, {
                                    default: l(() => [ n("是") ]),
                                    _: 1
                                }), a(c, {
                                    value: !1,
                                    size: "large"
                                }, {
                                    default: l(() => [ n("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : p("", !0) ]),
                        _: 1
                    }, 8, [ "model" ]) ])) : p("", !0), d("div", A, [ a(x, {
                        onClick: B
                    }, {
                        default: l(() => [ n("取消") ]),
                        _: 1
                    }), C(a(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: $
                    }, {
                        default: l(() => [ n("上一步") ]),
                        _: 1
                    }, 512), [ [ S, e(r) === "2" ] ]), C(a(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: j,
                        disabled: !e(o)
                    }, {
                        default: l(() => [ n("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]), [ [ S, e(r) === "1" ] ]), C(a(x, {
                        type: "primary",
                        onClick: E
                    }, {
                        default: l(() => [ n("确定") ]),
                        _: 1
                    }, 512), [ [ S, e(r) === "2" ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6513e263" ] ]);
});

export {
    Le as __tla,
    H as default
};