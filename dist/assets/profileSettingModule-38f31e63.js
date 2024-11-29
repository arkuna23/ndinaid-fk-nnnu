import {
    b0 as pe,
    T as ce,
    r as p,
    p as me,
    e as Y,
    h as fe,
    j as ve,
    o as c,
    c as g,
    k as a,
    l as e,
    t as u,
    v as i,
    a as o,
    B as C,
    A as k,
    G as $,
    m as E,
    F as _e,
    y as ge,
    C as ye,
    H as D,
    D as he,
    _ as ke,
    K as be,
    O as Te,
    J as Ie,
    ab as Ve,
    P as Ce,
    ac as De,
    bp as Pe,
    bq as we,
    Q as ze,
    __tla as Ae
} from "./index-6c08ea4c.js";

import {
    a as Ne,
    f as xe,
    b as qe,
    u as Ue,
    e as Se,
    __tla as Be
} from "./neuResourceQuestion-36ca89a3.js";

import {
    d as Fe
} from "./tree-05ea8e09.js";

import {
    _ as je
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Le,
    __tla as Me
} from "./index-ef4d146e.js";

let R, Oe = Promise.all([ (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})() ]).then(async () => {
    let P, w, z, A, N, x, q, U, S, B;
    P = {
        class: "profileSettingContainer"
    }, w = {
        class: "tooltip-container"
    }, z = {
        class: "tooltip-container"
    }, A = {
        key: 0
    }, N = {
        class: "optionContainer"
    }, x = {
        class: "insertTagContent ellipsis"
    }, q = {
        class: "mr10"
    }, U = {
        class: "ellipsis",
        style: {
            width: "300px"
        }
    }, S = {
        class: "appendButton",
        style: {
            display: "flex"
        }
    }, B = {
        class: "tooltip-container"
    }, R = je({
        __name: "profileSettingModule",
        props: {
            formData: {
                type: Object,
                default: () => ({
                    teachTags: [],
                    dirId: "",
                    isAssess: 0
                })
            },
            sourceType: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:formData" ],
        setup(b, {
            expose: W,
            emit: X
        }) {
            const Z = X, T = pe("basicInformation"), m = ce(), F = p([]), j = p([]), f = p({}), d = p(""), v = p(!0), L = p(null), y = me(), M = Y(() => fe().isSupAdmin), ee = b, r = Y({
                get: () => ee.formData,
                set: t => {
                    Z("update:formData", t);
                }
            }), I = () => {
                Ne(m.params.id).then(t => {
                    F.value = t;
                });
            }, O = (t = {}) => {
                d.value = "", t && (f.value = t, d.value = t.tagName), v.value = !1;
            }, ae = async () => {
                if (d.value) {
                    const t = {
                        tagName: d.value,
                        sourceType: 0,
                        ...f.value.id && {
                            id: f.value.id
                        }
                    };
                    M.value ? t.neuPkgId = m.params.id : (t.resPkgId = m.params.id, 
                    t.resRootPkgId = T.value.neuPkgId, t.resIsNeu = T.value && T.value.neuPkgId ? 1 : 0), 
                    await (async s => {
                        try {
                            const n = s.id ? await Ue(s) : await Se(s);
                            return y.success("操作成功"), I(), f.value = {}, d.value = "", 
                            v.value = !0, n;
                        } catch (n) {
                            throw y.error("操作失败，请重试"), n;
                        }
                    })(t);
                } else y.error("请输入标签名称");
            }, G = () => {
                d.value = "", f.value = {}, v.value = !0;
            }, le = {
                isAssess: [ {
                    required: !0,
                    message: "请选择是否作为考核点",
                    trigger: [ "change", "blur" ]
                } ]
            };
            return W({
                getTagList: I,
                getDirectoryDropdownList: () => {
                    xe(m.params.id).then(t => {
                        j.value = t;
                    });
                },
                validateForm: () => new Promise((t, s) => {
                    L.value.validate(n => {
                        n ? t(!0) : s(!1);
                    });
                })
            }), (t, s) => {
                const n = ke, _ = be, te = Le, V = Te, h = Ie, se = Ve, oe = Ce, re = De, H = Pe, ie = we, de = ze, J = ve("show-tip");
                return c(), g("div", P, [ a(de, {
                    ref_key: "dialogFormRef",
                    ref: L,
                    formData: o(r),
                    "onUpdate:formData": s[4] || (s[4] = l => E(r) ? r.value = l : null),
                    model: o(r),
                    rules: le,
                    class: "dialog-form",
                    inline: "",
                    "label-position": "top",
                    onSubmit: s[5] || (s[5] = D(() => {}, [ "prevent" ]))
                }, {
                    default: e(() => [ a(V, {
                        class: "form-item",
                        label: "所属目录",
                        prop: "dirId"
                    }, {
                        label: e(() => [ u("div", w, [ i(" 所属目录 "), a(_, {
                            content: "说明：关联课程目录后本次所选择资料可在相应目录下展示",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ a(n, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ a(te, {
                            modelValue: o(r).dirId,
                            "onUpdate:modelValue": s[0] || (s[0] = l => o(r).dirId = l),
                            data: o(j),
                            "check-strictly": "",
                            "render-after-expand": !1,
                            placeholder: "请选择所属目录",
                            filterable: "",
                            props: o(Fe),
                            clearable: ""
                        }, null, 8, [ "modelValue", "data", "props" ]) ]),
                        _: 1
                    }), a(V, {
                        class: "form-item",
                        prop: "teachTags"
                    }, {
                        label: e(() => [ u("div", z, [ i(C(b.sourceType === "2" ? "测验标签" : b.sourceType === "3" ? "作业标签" : "资料标签") + " ", 1), a(_, {
                            content: "说明：标签用于提醒学生该资料适用的学习阶段/场景/方式等，每个资料最多可关联3个标签",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ a(n, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ a(re, {
                            modelValue: o(r).teachTags,
                            "onUpdate:modelValue": s[2] || (s[2] = l => o(r).teachTags = l),
                            multiple: "",
                            placeholder: "请选择教学资料标签",
                            "multiple-limit": 3,
                            onBlur: G,
                            size: "large"
                        }, {
                            footer: e(() => [ k(a(h, {
                                class: "mt10",
                                size: "small",
                                type: "primary",
                                onClick: O
                            }, {
                                default: e(() => [ i("新建 ") ]),
                                _: 1
                            }, 512), [ [ $, o(v) ] ]), k(u("div", S, [ a(oe, {
                                modelValue: o(d),
                                "onUpdate:modelValue": s[1] || (s[1] = l => E(d) ? d.value = l : null),
                                modelModifiers: {
                                    trim: !0
                                },
                                maxlength: "5",
                                placeholder: "请输入标签名称"
                            }, {
                                append: e(() => [ u("div", {
                                    class: "appendPrimary",
                                    onClick: ae
                                }, "保存") ]),
                                _: 1
                            }, 8, [ "modelValue" ]), a(h, {
                                text: "",
                                type: "primary",
                                onClick: G
                            }, {
                                default: e(() => [ i("取消") ]),
                                _: 1
                            }) ], 512), [ [ $, !o(v) ] ]) ]),
                            default: e(() => [ (c(!0), g(_e, null, ge(o(F), l => (c(), 
                            ye(se, {
                                key: l.id,
                                label: l.tagName,
                                value: l.id
                            }, {
                                default: e(() => [ l.sourceType || l.showhandle ? he("", !0) : (c(), 
                                g("div", A, [ u("div", N, [ k((c(), g("span", x, [ a(_, {
                                    placement: "top-start",
                                    content: l.tagName
                                }, {
                                    default: e(() => [ i(C(l.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])), [ [ J ] ]), u("span", q, [ a(h, {
                                    size: "small",
                                    type: "primary",
                                    onClick: D(ne => O(l), [ "stop" ])
                                }, {
                                    default: e(() => [ i("编辑") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), a(h, {
                                    size: "small",
                                    type: "danger",
                                    onClick: D(ne => (K => {
                                        let Q = {
                                            id: K.id
                                        };
                                        M.value || (Q.resPkgId = m.params.id), qe(Q).then(Ge => {
                                            y.success("删除成功"), r.value.teachTags = r.value.teachTags.filter(ue => ue !== K.id), 
                                            I();
                                        });
                                    })(l), [ "stop" ])
                                }, {
                                    default: e(() => [ i("删除") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]) ]) ])), k((c(), g("div", U, [ a(_, {
                                    placement: "top-start",
                                    content: l.tagName
                                }, {
                                    default: e(() => [ i(C(l.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])), [ [ J ] ]) ]),
                                _: 2
                            }, 1032, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), a(V, {
                        class: "form-item",
                        label: "是否作为考核点",
                        prop: "isAssess"
                    }, {
                        label: e(() => [ u("div", B, [ i(" 是否作为考核点 "), a(_, {
                            content: "说明：设置为考核点的资料，其学生学习完成情况数据将纳入课程成绩考核",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ a(n, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ a(ie, {
                            modelValue: o(r).isAssess,
                            "onUpdate:modelValue": s[3] || (s[3] = l => o(r).isAssess = l)
                        }, {
                            default: e(() => [ a(H, {
                                value: 1,
                                size: "large"
                            }, {
                                default: e(() => [ i("是") ]),
                                _: 1
                            }), a(H, {
                                value: 0,
                                size: "large"
                            }, {
                                default: e(() => [ i("否") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "formData", "model" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-c2f988ad" ] ]);
});

export {
    Oe as __tla,
    R as default
};