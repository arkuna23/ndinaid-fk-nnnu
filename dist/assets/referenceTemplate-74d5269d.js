import {
    T as te,
    p as me,
    r as f,
    h as ue,
    e as k,
    U as se,
    o as r,
    C as _,
    l as a,
    t as d,
    a as e,
    c as S,
    k as t,
    m as U,
    F as oe,
    y as ne,
    B as z,
    v as n,
    z as ie,
    D as v,
    H as re,
    A as C,
    G as q,
    bp as de,
    bq as ce,
    av as ve,
    aw as pe,
    P as Ne,
    O as fe,
    cK as _e,
    _ as ge,
    K as ye,
    Q as xe,
    J as be,
    aU as Ve,
    __tla as he
} from "./index-6c08ea4c.js";

import {
    __tla as ke
} from "./file-e038b35d.js";

import {
    s as Se,
    a as Ue
} from "./referenceTemplateStep2-f50532f2.js";

import {
    _ as ze
} from "./_plugin-vue_export-helper-1b428a4d.js";

let I, Ce = Promise.all([ (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})() ]).then(async () => {
    let P, $, T, w, D, F, K;
    P = {
        class: "algin-center mb-14"
    }, $ = [ "src" ], T = {
        key: 0,
        class: "px-45 pb-14"
    }, w = {
        class: "label-em"
    }, D = {
        key: 1,
        class: "template-form"
    }, F = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, K = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, I = ze({
        __name: "referenceTemplate",
        emits: [ "refreshList" ],
        setup(qe, {
            expose: J,
            emit: L
        }) {
            te(), me(), f(), ue();
            const p = f(!1), i = f("1"), M = L, b = () => {
                i.value = "1", s.value = "1", Q(), p.value = !1;
            }, Q = () => {
                l.level1Num = 1, l.level2Num = 1, l.level3Num = 1, l.unifiedSort = !0;
            }, R = () => {
                i.value = "1";
            }, X = () => {
                i.value = "2";
            }, j = () => {
                A.value.validate(async o => {
                    if (!o) return !1;
                    M("submitTemplate", {
                        requestParams: {
                            template: s.value,
                            level: E.value,
                            ...l
                        }
                    });
                });
            }, s = f("1"), O = [ {
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
            } ], V = k(() => {
                var c;
                const o = (c = O.filter(y => y.code === s.value)) == null ? void 0 : c.pop(), {
                    name: m
                } = o;
                return m;
            }), E = k(() => ({
                1: 3,
                2: 2,
                3: 2,
                4: 2,
                5: 1
            })[s.value] || 0), l = se({
                level1Num: 1,
                level2Num: 1,
                level3Num: 1,
                unifiedSort: !0
            }), W = {
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
            }, A = f(null), Y = () => {
                l.level1Num = 1, l.level2Num = 1, l.unifiedSort = !0;
                const o = {
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
                (o[s.value] || o.default)();
            }, g = k(() => {
                const o = {
                    1: {
                        level1Name: "章节",
                        level2Name: "节",
                        level3Name: "单元",
                        radioName: "各子集目录",
                        content: "说明：统一排序即目录下所有子目录统一（连续）排序，否则各子目录分别（不连续）排序"
                    },
                    2: {
                        level1Name: "课次",
                        level2Name: "",
                        level3Name: "",
                        radioName: "",
                        content: "说明：系统将在各一级目录（课次）自动生成二级目录：课前、课中、课后（生成后可修改）"
                    },
                    3: {
                        level1Name: "周次",
                        level2Name: "课时",
                        level3Name: "",
                        radioName: "各周次下课时",
                        content: "说明：统一排序即目录下所有子目录统一（连续）排序，否则各子目录分别（不连续）排序"
                    },
                    4: {
                        level1Name: "知识单元",
                        level2Name: "知识点",
                        level3Name: "",
                        radioName: "各知识单元下知识点",
                        content: "说明：统一排序即目录下所有子目录统一（连续）排序，否则各子目录分别（不连续）排序"
                    },
                    5: {
                        level1Name: "讲次",
                        level2Name: "",
                        level3Name: "",
                        radioName: "",
                        content: ""
                    },
                    default: {
                        level1Name: "",
                        level2Name: "",
                        level3Name: "",
                        content: ""
                    }
                };
                return o[s.value] || o.default;
            });
            return J({
                openStep1: () => {
                    p.value = !0;
                },
                closeDialog: b
            }), (o, m) => {
                const c = de, y = ce, B = ve, Z = pe, ee = Ne, N = fe, h = _e, G = ge, H = ye, le = xe, x = be, ae = Ve;
                return r(), _(ae, {
                    modelValue: e(p),
                    "onUpdate:modelValue": m[7] || (m[7] = u => U(p) ? p.value = u : null),
                    title: "引用目录模板",
                    width: "1000px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: b
                }, {
                    default: a(() => [ d("div", P, [ d("img", {
                        src: e(i) === "1" ? e(Se) : e(Ue),
                        alt: ""
                    }, null, 8, $) ]), e(i) === "1" ? (r(), S("div", T, [ t(Z, null, {
                        default: a(() => [ t(B, {
                            span: 12,
                            class: "step1-left"
                        }, {
                            default: a(() => [ t(y, {
                                modelValue: e(s),
                                "onUpdate:modelValue": m[0] || (m[0] = u => U(s) ? s.value = u : null),
                                onChange: Y
                            }, {
                                default: a(() => [ (r(), S(oe, null, ne(O, u => t(c, {
                                    key: u.code,
                                    value: u.code
                                }, {
                                    default: a(() => [ d("em", w, z(u.cnName), 1), n(z(u.name), 1) ]),
                                    _: 2
                                }, 1032, [ "value" ])), 64)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(B, {
                            span: 12,
                            class: "pl-19"
                        }, {
                            default: a(() => [ d("div", {
                                class: ie([ "common-template", `template-${e(s)}` ])
                            }, null, 2) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ])) : v("", !0), e(i) === "2" ? (r(), S("div", D, [ t(le, {
                        ref_key: "templateFormRef",
                        ref: A,
                        model: e(l),
                        onSubmit: m[6] || (m[6] = re(() => {}, [ "prevent" ])),
                        rules: W,
                        "label-position": "top"
                    }, {
                        default: a(() => [ t(N, {
                            label: "引用目录模板"
                        }, {
                            default: a(() => [ t(ee, {
                                disabled: !0,
                                size: "large",
                                modelValue: e(V),
                                "onUpdate:modelValue": m[1] || (m[1] = u => U(V) ? V.value = u : null)
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(N, {
                            label: `\u4E00\u7EA7\u76EE\u5F55\uFF08${e(g).level1Name}\uFF09\u4E2A\u6570`,
                            prop: "level1Num"
                        }, {
                            default: a(() => [ t(h, {
                                modelValue: e(l).level1Num,
                                "onUpdate:modelValue": m[2] || (m[2] = u => e(l).level1Num = u),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                step: 1,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), n("   个 "), t(H, {
                                content: "说明：系统将在各一级目录（课次）自动生成二级目录：课前、课中、课后（生成后可修改）",
                                placement: "top",
                                effect: "light"
                            }, {
                                default: a(() => [ [ "2" ].includes(e(s)) ? (r(), 
                                _(G, {
                                    key: 0,
                                    icon: "svg-icon:icon-tooltip",
                                    class: "pointer ml-6px"
                                })) : v("", !0) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "label" ]), [ "1", "3", "4" ].includes(e(s)) ? (r(), 
                        _(N, {
                            key: 0,
                            label: `\u6BCF\u4E00\u7EA7\u76EE\u5F55\u4E0B\u4E8C\u7EA7\u76EE\u5F55\uFF08${e(g).level2Name}\uFF09`,
                            prop: "level2Num"
                        }, {
                            default: a(() => [ t(h, {
                                modelValue: e(l).level2Num,
                                "onUpdate:modelValue": m[3] || (m[3] = u => e(l).level2Num = u),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), n("   个 ") ]),
                            _: 1
                        }, 8, [ "label" ])) : v("", !0), [ "1" ].includes(e(s)) ? (r(), 
                        _(N, {
                            key: 1,
                            label: `\u6BCF\u4E8C\u7EA7\u76EE\u5F55\u4E0B\u4E09\u7EA7\u76EE\u5F55\uFF08${e(g).level3Name}\uFF09`,
                            prop: "level3Num"
                        }, {
                            default: a(() => [ t(h, {
                                modelValue: e(l).level3Num,
                                "onUpdate:modelValue": m[4] || (m[4] = u => e(l).level3Num = u),
                                size: "large",
                                "controls-position": "right",
                                min: 1,
                                max: 100,
                                "step-strictly": ""
                            }, null, 8, [ "modelValue" ]), n("   个 ") ]),
                            _: 1
                        }, 8, [ "label" ])) : v("", !0), [ "1", "3", "4" ].includes(e(s)) ? (r(), 
                        _(N, {
                            key: 2,
                            prop: "unifiedSort"
                        }, {
                            label: a(() => [ d("div", F, [ d("span", null, z(e(g).radioName) + "是否统一排序", 1), t(H, {
                                content: "说明：统一排序即目录下所有子目录统一（连续）排序，否则各子目录分别（不连续）排序",
                                placement: "top",
                                effect: "light"
                            }, {
                                default: a(() => [ t(G, {
                                    icon: "svg-icon:icon-tooltip",
                                    class: "pointer ml-6px"
                                }) ]),
                                _: 1
                            }) ]) ]),
                            default: a(() => [ t(y, {
                                modelValue: e(l).unifiedSort,
                                "onUpdate:modelValue": m[5] || (m[5] = u => e(l).unifiedSort = u)
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
                        })) : v("", !0) ]),
                        _: 1
                    }, 8, [ "model" ]) ])) : v("", !0), d("div", K, [ t(x, {
                        onClick: b
                    }, {
                        default: a(() => [ n("取消") ]),
                        _: 1
                    }), C(t(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: R
                    }, {
                        default: a(() => [ n("上一步") ]),
                        _: 1
                    }, 512), [ [ q, e(i) === "2" ] ]), C(t(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: X,
                        disabled: !e(s)
                    }, {
                        default: a(() => [ n("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]), [ [ q, e(i) === "1" ] ]), C(t(x, {
                        type: "primary",
                        onClick: j
                    }, {
                        default: a(() => [ n("确定") ]),
                        _: 1
                    }, 512), [ [ q, e(i) === "2" ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-f37c9702" ] ]);
});

export {
    Ce as __tla,
    I as default
};