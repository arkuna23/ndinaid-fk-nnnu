import {
    r as u,
    p as ce,
    T as ue,
    e as V,
    a0 as ne,
    f as pe,
    j as me,
    o as p,
    c as _,
    k as a,
    l as e,
    t as n,
    v as r,
    a as s,
    B as z,
    A as b,
    G as Q,
    m as fe,
    F as ve,
    y as _e,
    C as ge,
    H as I,
    D as he,
    _ as ye,
    K as be,
    O as ke,
    J as Ce,
    ab as Te,
    P as Ve,
    ac as ze,
    bp as Ie,
    bq as we,
    Q as Ne,
    __tla as xe
} from "./index-6c08ea4c.js";

import {
    b as Ae,
    d as De,
    a as qe,
    u as Fe,
    c as Se,
    __tla as Ue
} from "./index-9567cbf6.js";

import {
    d as Be
} from "./tree-05ea8e09.js";

import {
    _ as Pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as je,
    __tla as Ee
} from "./index-ef4d146e.js";

let R, Me = Promise.all([ (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})() ]).then(async () => {
    let w, N, x, A, D, q, F, S, U, B;
    w = {
        class: "profileSettingContainer"
    }, N = {
        class: "tooltip-container"
    }, x = {
        class: "tooltip-container"
    }, A = {
        key: 0
    }, D = {
        class: "optionContainer"
    }, q = {
        class: "insertTagContent ellipsis"
    }, F = {
        class: "mr10"
    }, S = {
        class: "ellipsis",
        style: {
            width: "300px"
        }
    }, U = {
        class: "appendButton",
        style: {
            display: "flex"
        }
    }, B = {
        class: "tooltip-container"
    }, R = Pe({
        __name: "profileSettingModule",
        props: {
            formData: {
                type: Object,
                default: () => ({
                    teachTags: [],
                    dirId: "",
                    isAssess: "0"
                })
            },
            sourceType: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:formData" ],
        setup(Y, {
            expose: $,
            emit: W
        }) {
            const X = W, P = u([]);
            u([]);
            const j = u([]), m = u({}), i = u(""), f = u(!0), g = u(null), h = ce(), E = ue();
            V(() => E.params.classId);
            const k = V(() => E.params.teachCourseId), M = Y, {
                sourceType: O
            } = ne(M), d = V({
                get: () => M.formData,
                set: o => {
                    X("update:formData", o);
                }
            }), C = () => {
                Ae({
                    teachCourseId: k.value
                }).then(o => {
                    P.value = o;
                });
            }, G = (o = {}) => {
                i.value = "", o && (m.value = o, i.value = o.tagName), f.value = !1;
            }, Z = async () => {
                if (i.value) {
                    const o = {
                        tagName: i.value,
                        sourceType: 0,
                        teachCourseId: k.value,
                        ...m.value.id && {
                            id: m.value.id
                        }
                    };
                    await (async t => {
                        try {
                            const c = t.id ? await Fe(t) : await Se(t);
                            return h.success("操作成功"), C(), m.value = {}, i.value = "", 
                            f.value = !0, c;
                        } catch (c) {
                            throw h.error("操作失败，请重试"), c;
                        }
                    })(o);
                } else h.error("请输入标签名称");
            }, H = () => {
                i.value = "", m.value = {}, f.value = !0;
            }, ee = {
                isAssess: [ {
                    required: !0,
                    message: "请选择是否作为考核点",
                    trigger: [ "change", "blur" ]
                } ]
            };
            return pe(() => {
                qe({
                    teachCourseId: k.value
                }).then(o => {
                    j.value = o || [];
                });
            }), $({
                getTagList: C,
                validateForm: () => new Promise((o, t) => {
                    g.value.validate(c => {
                        c ? o(!0) : t(!1);
                    });
                }),
                clearForm: () => {
                    g.value && g.value.resetFields();
                }
            }), (o, t) => {
                const c = ye, v = be, ae = je, T = ke, y = Ce, le = Te, te = Ve, se = ze, J = Ie, oe = we, re = Ne, K = me("show-tip");
                return p(), _("div", w, [ a(re, {
                    ref_key: "dialogFormRef",
                    ref: g,
                    model: s(d),
                    rules: ee,
                    class: "dialog-form",
                    inline: "",
                    "label-position": "top",
                    onSubmit: t[4] || (t[4] = I(() => {}, [ "prevent" ]))
                }, {
                    default: e(() => [ a(T, {
                        class: "form-item",
                        label: "所属目录",
                        prop: "dirId"
                    }, {
                        label: e(() => [ n("div", N, [ r(" 所属目录 "), a(v, {
                            content: "说明：关联课程目录后本次所选择资料可在相应目录下展示",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ a(c, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ a(ae, {
                            modelValue: s(d).dirId,
                            "onUpdate:modelValue": t[0] || (t[0] = l => s(d).dirId = l),
                            size: "large",
                            data: s(j),
                            "check-strictly": "",
                            "render-after-expand": !1,
                            placeholder: "请选择所属目录",
                            filterable: "",
                            props: s(Be),
                            clearable: ""
                        }, null, 8, [ "modelValue", "data", "props" ]) ]),
                        _: 1
                    }), a(T, {
                        class: "form-item",
                        label: "资料标签",
                        prop: "teachTags"
                    }, {
                        label: e(() => [ n("div", x, [ r(z(s(O) === "2" ? "测验标签" : s(O) === "3" ? "作业标签" : "资料标签") + " ", 1), a(v, {
                            content: "说明：标签用于提醒学生该资料适用的学习阶段/场景/方式等，每个资料最多可关联3个标签",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ a(c, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ a(se, {
                            modelValue: s(d).teachTags,
                            "onUpdate:modelValue": t[2] || (t[2] = l => s(d).teachTags = l),
                            multiple: "",
                            placeholder: "请选择教学资料标签",
                            "multiple-limit": 3,
                            onBlur: H,
                            size: "large",
                            clearable: ""
                        }, {
                            footer: e(() => [ b(a(y, {
                                class: "mt10",
                                size: "small",
                                type: "primary",
                                onClick: G
                            }, {
                                default: e(() => [ r("新建 ") ]),
                                _: 1
                            }, 512), [ [ Q, s(f) ] ]), b(n("div", U, [ a(te, {
                                modelValue: s(i),
                                "onUpdate:modelValue": t[1] || (t[1] = l => fe(i) ? i.value = l : null),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入标签名称"
                            }, {
                                append: e(() => [ n("div", {
                                    class: "appendPrimary",
                                    onClick: Z
                                }, "保存") ]),
                                _: 1
                            }, 8, [ "modelValue" ]), a(y, {
                                text: "",
                                type: "primary",
                                onClick: H
                            }, {
                                default: e(() => [ r("取消") ]),
                                _: 1
                            }) ], 512), [ [ Q, !s(f) ] ]) ]),
                            default: e(() => [ (p(!0), _(ve, null, _e(s(P), l => (p(), 
                            ge(le, {
                                key: l.id,
                                label: l.tagName,
                                value: l.id
                            }, {
                                default: e(() => [ l.sourceType || l.showhandle ? he("", !0) : (p(), 
                                _("div", A, [ n("div", D, [ b((p(), _("span", q, [ a(v, {
                                    placement: "top-start",
                                    content: l.tagName
                                }, {
                                    default: e(() => [ r(z(l.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])), [ [ K ] ]), n("span", F, [ a(y, {
                                    size: "small",
                                    type: "primary",
                                    onClick: I(ie => G(l), [ "stop" ])
                                }, {
                                    default: e(() => [ r("编辑") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), a(y, {
                                    size: "small",
                                    type: "danger",
                                    onClick: I(ie => {
                                        var L;
                                        De({
                                            id: (L = l).id
                                        }).then(Oe => {
                                            h.success("删除成功"), d.value.teachTags = d.value.teachTags.filter(de => de !== L.id), 
                                            C();
                                        });
                                    }, [ "stop" ])
                                }, {
                                    default: e(() => [ r("删除") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]) ]) ])), b((p(), _("div", S, [ a(v, {
                                    placement: "top-start",
                                    content: l.tagName
                                }, {
                                    default: e(() => [ r(z(l.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])), [ [ K ] ]) ]),
                                _: 2
                            }, 1032, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), a(T, {
                        class: "form-item",
                        label: "是否作为考核点",
                        prop: "isAssess"
                    }, {
                        label: e(() => [ n("div", B, [ r(" 是否作为考核点 "), a(v, {
                            content: "说明：设置为考核点的资料，其学生学习完成情况数据将纳入课程成绩考核",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ a(c, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ a(oe, {
                            modelValue: s(d).isAssess,
                            "onUpdate:modelValue": t[3] || (t[3] = l => s(d).isAssess = l)
                        }, {
                            default: e(() => [ a(J, {
                                value: "1",
                                size: "large"
                            }, {
                                default: e(() => [ r("是") ]),
                                _: 1
                            }), a(J, {
                                value: "0",
                                size: "large"
                            }, {
                                default: e(() => [ r("否") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-4ec1efb8" ] ]);
});

export {
    Me as __tla,
    R as default
};