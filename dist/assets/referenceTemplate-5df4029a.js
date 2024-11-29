import {
    T as oe,
    p as ne,
    r as _,
    h as me,
    e as D,
    U as ie,
    o as i,
    C as g,
    l as a,
    t as d,
    a as e,
    c as k,
    k as t,
    m as S,
    F as re,
    y as de,
    B as G,
    v as n,
    z as ce,
    D as p,
    H as pe,
    A as C,
    G as U,
    bp as ve,
    bq as fe,
    av as _e,
    aw as ge,
    P as Ne,
    O as ye,
    cK as xe,
    _ as be,
    K as Ve,
    Q as he,
    J as ke,
    aU as Se,
    R as Ce,
    S as Ue,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    __tla as qe
} from "./file-e038b35d.js";

import {
    s as we,
    a as Ke
} from "./referenceTemplateStep2-f50532f2.js";

import {
    c as Ie,
    __tla as Le
} from "./catalog-6352045f.js";

import {
    _ as Ae
} from "./_plugin-vue_export-helper-1b428a4d.js";

let H, Be = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})() ]).then(async () => {
    let z, q, w, K, I, L, A, B;
    z = {
        class: "algin-center mb-14"
    }, q = [ "src" ], w = {
        key: 0,
        class: "px-45 pb-14"
    }, K = {
        class: "label-em"
    }, I = {
        key: 1,
        class: "template-form"
    }, L = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, A = (N => (Ce("data-v-758bbc23"), N = N(), Ue(), N))(() => d("span", null, "各子级目录是否统一排序", -1)), 
    B = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, H = Ae({
        __name: "referenceTemplate",
        emits: [ "refreshList" ],
        setup(N, {
            expose: J,
            emit: O
        }) {
            const Q = oe();
            ne(), _(), me();
            const v = _(!1), m = _("1"), Y = O, b = () => {
                m.value = "1", o.value = "1", $(), v.value = !1;
            }, $ = () => {
                l.level1Num = 1, l.level2Num = 1, l.level3Num = 1, l.unifiedSort = !0;
            }, j = () => {
                m.value = "1";
            }, E = () => {
                m.value = "2";
            }, W = () => {
                M.value.validate(async r => {
                    if (!r) return !1;
                    await ee(), b(), Y("refreshList");
                });
            }, o = _("1"), F = [ {
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
            } ], V = D(() => {
                var c;
                const r = (c = F.filter(y => y.code === o.value)) == null ? void 0 : c.pop(), {
                    name: s
                } = r;
                return s;
            }), X = D(() => ({
                1: 3,
                2: 2,
                3: 2,
                4: 2,
                5: 1
            })[o.value] || 0), l = ie({
                level1Num: 1,
                level2Num: 1,
                level3Num: 1,
                unifiedSort: !0
            }), Z = {
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
            }, M = _(null), ee = async () => await Ie({
                template: o.value,
                teachCourseId: Q.params.teachCourseId,
                level: X.value,
                ...l
            }), le = () => {
                l.level1Num = 1, l.level2Num = 1, l.unifiedSort = !0;
                const r = {
                    2: () => {
                        l.level2Num = 3, l.level3Num = 0, l.unifiedSort = !1;
                    },
                    3: () => {
                        l.level3Num = 0;
                    },
                    4: () => {
                        l.level3Num = 0;
                    },
                    5: () => {
                        l.level2Num = 0, l.level3Num = 0, l.unifiedSort = !1;
                    },
                    default: 1
                };
                (r[o.value] || r.default)();
            };
            return J({
                openStep1: () => {
                    v.value = !0;
                }
            }), (r, s) => {
                const c = ve, y = fe, P = _e, ae = ge, te = Ne, f = ye, h = xe, R = be, T = Ve, se = he, x = ke, ue = Se;
                return i(), g(ue, {
                    modelValue: e(v),
                    "onUpdate:modelValue": s[7] || (s[7] = u => S(v) ? v.value = u : null),
                    title: "引用目录模板",
                    width: "1000px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: b
                }, {
                    default: a(() => [ d("div", z, [ d("img", {
                        src: e(m) === "1" ? e(we) : e(Ke),
                        alt: ""
                    }, null, 8, q) ]), e(m) === "1" ? (i(), k("div", w, [ t(ae, null, {
                        default: a(() => [ t(P, {
                            span: 12,
                            class: "step1-left"
                        }, {
                            default: a(() => [ t(y, {
                                modelValue: e(o),
                                "onUpdate:modelValue": s[0] || (s[0] = u => S(o) ? o.value = u : null),
                                onChange: le
                            }, {
                                default: a(() => [ (i(), k(re, null, de(F, u => t(c, {
                                    key: u.code,
                                    value: u.code
                                }, {
                                    default: a(() => [ d("em", K, G(u.cnName), 1), n(G(u.name), 1) ]),
                                    _: 2
                                }, 1032, [ "value" ])), 64)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(P, {
                            span: 12,
                            class: "pl-19"
                        }, {
                            default: a(() => [ d("div", {
                                class: ce([ "common-template", `template-${e(o)}` ])
                            }, null, 2) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ])) : p("", !0), e(m) === "2" ? (i(), k("div", I, [ t(se, {
                        ref_key: "templateFormRef",
                        ref: M,
                        model: e(l),
                        onSubmit: s[6] || (s[6] = pe(() => {}, [ "prevent" ])),
                        rules: Z,
                        "label-position": "top"
                    }, {
                        default: a(() => [ t(f, {
                            label: "引用目录模板"
                        }, {
                            default: a(() => [ t(te, {
                                disabled: !0,
                                size: "large",
                                modelValue: e(V),
                                "onUpdate:modelValue": s[1] || (s[1] = u => S(V) ? V.value = u : null)
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(f, {
                            label: "一级目录（课次）个数",
                            prop: "level1Num"
                        }, {
                            default: a(() => [ t(h, {
                                modelValue: e(l).level1Num,
                                "onUpdate:modelValue": s[2] || (s[2] = u => e(l).level1Num = u),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                step: 1,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), n("   个 "), t(T, {
                                content: "说明：各课次下默认生成二级目录：课前、课中、课后",
                                placement: "top",
                                effect: "light"
                            }, {
                                default: a(() => [ [ "2" ].includes(e(o)) ? (i(), 
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
                            prop: "level2Num"
                        }, {
                            default: a(() => [ t(h, {
                                modelValue: e(l).level2Num,
                                "onUpdate:modelValue": s[3] || (s[3] = u => e(l).level2Num = u),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), n("   个 ") ]),
                            _: 1
                        })) : p("", !0), [ "1" ].includes(e(o)) ? (i(), g(f, {
                            key: 1,
                            label: "每二级目录下三级目录（单元）",
                            prop: "level3Num"
                        }, {
                            default: a(() => [ t(h, {
                                modelValue: e(l).level3Num,
                                "onUpdate:modelValue": s[4] || (s[4] = u => e(l).level3Num = u),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), n("   个 ") ]),
                            _: 1
                        })) : p("", !0), [ "1", "3", "4" ].includes(e(o)) ? (i(), 
                        g(f, {
                            key: 2,
                            prop: "unifiedSort"
                        }, {
                            label: a(() => [ d("div", L, [ A, t(T, {
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
                                modelValue: e(l).unifiedSort,
                                "onUpdate:modelValue": s[5] || (s[5] = u => e(l).unifiedSort = u)
                            }, {
                                default: a(() => [ t(c, {
                                    value: !0,
                                    size: "large"
                                }, {
                                    default: a(() => [ n("是") ]),
                                    _: 1
                                }), t(c, {
                                    value: !1,
                                    size: "large"
                                }, {
                                    default: a(() => [ n("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : p("", !0) ]),
                        _: 1
                    }, 8, [ "model" ]) ])) : p("", !0), d("div", B, [ t(x, {
                        onClick: b
                    }, {
                        default: a(() => [ n("取消") ]),
                        _: 1
                    }), C(t(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: j
                    }, {
                        default: a(() => [ n("上一步") ]),
                        _: 1
                    }, 512), [ [ U, e(m) === "2" ] ]), C(t(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: E,
                        disabled: !e(o)
                    }, {
                        default: a(() => [ n("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]), [ [ U, e(m) === "1" ] ]), C(t(x, {
                        type: "primary",
                        onClick: W
                    }, {
                        default: a(() => [ n("确定") ]),
                        _: 1
                    }, 512), [ [ U, e(m) === "2" ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-758bbc23" ] ]);
});

export {
    Be as __tla,
    H as default
};