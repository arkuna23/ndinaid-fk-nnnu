import {
    d as oa,
    e as R,
    h as ia,
    b0 as na,
    T as ra,
    r as h,
    p as ua,
    j as da,
    o as p,
    c as v,
    k as a,
    l as e,
    t as u,
    v as o,
    a as d,
    A as k,
    G as E,
    m as G,
    F as ca,
    y as pa,
    C as ma,
    B as H,
    H as z,
    D as fa,
    _ as va,
    K as _a,
    J as ga,
    O as ya,
    ab as ha,
    P as ka,
    ac as ba,
    Q as Ca,
    __tla as za
} from "./index-6c08ea4c.js";

import {
    a as Pa,
    b as Ta,
    u as Da,
    e as Ia,
    __tla as Na
} from "./neuResourceQuestion-36ca89a3.js";

import {
    _ as wa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let J, xa = Promise.all([ (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})() ]).then(async () => {
    let P, T, D, I, N, w, x, V, B, S;
    P = {
        class: "profileSettingContainer"
    }, T = {
        class: "tooltip-container"
    }, D = {
        class: "ktList"
    }, I = {
        class: "tooltip-container"
    }, N = {
        key: 0
    }, w = {
        class: "optionContainer"
    }, x = {
        class: "insertTagContent ellipsis"
    }, V = {
        class: "mr10"
    }, B = {
        class: "ellipsis",
        style: {
            width: "300px"
        }
    }, S = {
        class: "appendButton",
        style: {
            display: "flex"
        }
    }, J = wa(oa({
        __name: "profileSettingModule",
        props: {
            formData: {
                type: Object,
                default: () => ({
                    ktPointList: [],
                    teachTags: []
                })
            }
        },
        emits: [ "update:formData" ],
        setup(K, {
            expose: Q,
            emit: W
        }) {
            const X = W, F = R(() => ia().isSupAdmin), b = na("basicInformation"), _ = ra(), L = h([]), m = h({}), i = h(""), f = h(!0), g = ua(), Y = K, r = R({
                get: () => Y.formData,
                set: t => {
                    X("update:formData", t);
                }
            }), C = () => {
                Pa(_.params.id).then(t => {
                    L.value = t;
                });
            }, j = (t = {}) => {
                i.value = "", t && (m.value = t, i.value = t.tagName), f.value = !1;
            }, Z = async () => {
                if (i.value) {
                    const t = {
                        tagName: i.value,
                        sourceType: 0,
                        ...m.value.id && {
                            id: m.value.id
                        }
                    };
                    F.value ? t.neuPkgId = _.params.id : (t.resPkgId = _.params.id, 
                    t.resRootPkgId = b.value.neuPkgId, t.resIsNeu = b.value && b.value.neuPkgId ? 1 : 0), 
                    await (async s => {
                        try {
                            const n = s.id ? await Da(s) : await Ia(s);
                            return g.success("操作成功"), C(), m.value = {}, i.value = "", 
                            f.value = !0, n;
                        } catch (n) {
                            throw g.error("操作失败，请重试"), n;
                        }
                    })(t);
                } else g.error("请输入标签名称");
            }, U = () => {
                i.value = "", m.value = {}, f.value = !0;
            };
            return Q({
                getTagList: C
            }), (t, s) => {
                const n = va, y = _a, c = ga, q = ya, $ = ha, aa = ka, ea = ba, la = Ca, A = da("show-tip");
                return p(), v("div", P, [ a(la, {
                    ref: "dialogFormRef",
                    formData: d(r),
                    "onUpdate:formData": s[2] || (s[2] = l => G(r) ? r.value = l : null),
                    rules: t.rules,
                    class: "dialog-form",
                    inline: "",
                    "label-position": "top",
                    onSubmit: s[3] || (s[3] = z(() => {}, [ "prevent" ]))
                }, {
                    default: e(() => [ a(q, {
                        class: "form-item",
                        label: "关联知识技能点"
                    }, {
                        label: e(() => [ u("div", T, [ o(" 关联知识技能点 "), a(y, {
                            content: "说明：关联当前课程知识图谱下知识技能点，该资源学习情况可用于后续知识技能点达成情况考核",
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
                        default: e(() => [ u("div", D, [ a(c, {
                            class: "pl10",
                            round: "",
                            size: "small"
                        }, {
                            default: e(() => [ o("知识点1 "), a(n, {
                                size: 14,
                                class: "ml5",
                                color: "#BED0F8",
                                icon: "ep:circle-close-filled"
                            }) ]),
                            _: 1
                        }), a(c, {
                            class: "addButton",
                            round: "",
                            size: "small"
                        }, {
                            default: e(() => [ a(n, {
                                size: 14,
                                color: "#333",
                                icon: "ep:plus"
                            }), o(" 添加 ") ]),
                            _: 1
                        }) ]) ]),
                        _: 1
                    }), a(q, {
                        class: "form-item",
                        label: "资料标签"
                    }, {
                        label: e(() => [ u("div", I, [ o(" 资料标签 "), a(y, {
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
                        default: e(() => [ a(ea, {
                            modelValue: d(r).teachTags,
                            "onUpdate:modelValue": s[1] || (s[1] = l => d(r).teachTags = l),
                            multiple: "",
                            placeholder: "请选择教学资料标签",
                            "multiple-limit": 3,
                            onBlur: U,
                            size: "large"
                        }, {
                            footer: e(() => [ k(a(c, {
                                class: "mt10",
                                size: "small",
                                type: "primary",
                                onClick: j
                            }, {
                                default: e(() => [ o("新建 ") ]),
                                _: 1
                            }, 512), [ [ E, d(f) ] ]), k(u("div", S, [ a(aa, {
                                modelValue: d(i),
                                "onUpdate:modelValue": s[0] || (s[0] = l => G(i) ? i.value = l : null),
                                modelModifiers: {
                                    trim: !0
                                },
                                maxlength: "5",
                                placeholder: "请输入标签名称"
                            }, {
                                append: e(() => [ u("div", {
                                    class: "appendPrimary",
                                    onClick: Z
                                }, "保存") ]),
                                _: 1
                            }, 8, [ "modelValue" ]), a(c, {
                                text: "",
                                type: "primary",
                                onClick: U
                            }, {
                                default: e(() => [ o("取消") ]),
                                _: 1
                            }) ], 512), [ [ E, !d(f) ] ]) ]),
                            default: e(() => [ (p(!0), v(ca, null, pa(d(L), l => (p(), 
                            ma($, {
                                key: l.id,
                                label: l.tagName,
                                value: l.id
                            }, {
                                default: e(() => [ l.sourceType || l.showhandle ? fa("", !0) : (p(), 
                                v("div", N, [ u("div", w, [ k((p(), v("span", x, [ a(y, {
                                    placement: "top-start",
                                    content: l.tagName
                                }, {
                                    default: e(() => [ o(H(l.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])), [ [ A ] ]), u("span", V, [ a(c, {
                                    size: "small",
                                    type: "primary",
                                    onClick: z(ta => j(l), [ "stop" ])
                                }, {
                                    default: e(() => [ o("编辑") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), a(c, {
                                    size: "small",
                                    type: "danger",
                                    onClick: z(ta => (M => {
                                        let O = {
                                            id: M.id
                                        };
                                        F.value || (O.resPkgId = _.params.id), Ta(O).then(Va => {
                                            g.success("删除成功"), r.value.teachTags = r.value.teachTags.filter(sa => sa !== M.id), 
                                            C();
                                        });
                                    })(l), [ "stop" ])
                                }, {
                                    default: e(() => [ o("删除") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]) ]) ])), k((p(), v("div", B, [ a(y, {
                                    placement: "top-start",
                                    content: l.tagName
                                }, {
                                    default: e(() => [ o(H(l.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])), [ [ A ] ]) ]),
                                _: 2
                            }, 1032, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "formData", "rules" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-9c90b465" ] ]);
});

export {
    xa as __tla,
    J as default
};