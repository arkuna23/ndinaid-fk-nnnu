import {
    p as pe,
    h as ne,
    u as ce,
    T as me,
    r as o,
    b0 as ve,
    e as fe,
    o as h,
    C as U,
    l as e,
    k as a,
    v as c,
    t as g,
    a as i,
    A as M,
    G as B,
    m as D,
    c as G,
    F as ge,
    y as _e,
    H as K,
    D as ye,
    B as Ie,
    bo as xe,
    n as he,
    _ as ke,
    K as be,
    O as we,
    J as Ve,
    ab as Ae,
    P as Ce,
    ac as Pe,
    bp as Ne,
    bq as je,
    Q as Ue,
    aU as qe,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    d as Re
} from "./tree-05ea8e09.js";

import {
    u as Le,
    a as Te,
    d as Ee,
    y as Se,
    g as Fe,
    s as He,
    c as Je,
    __tla as Me
} from "./pkgManage-4e23f8a8.js";

import {
    u as Be,
    a as De,
    d as Ge,
    b as Ke,
    g as Oe,
    s as Qe,
    c as Ye,
    __tla as We
} from "./pkgManage-14933852.js";

import {
    _ as Xe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Ze,
    __tla as $e
} from "./index-ef4d146e.js";

let O, ea = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})() ]).then(async () => {
    let q, z, R, L, T, E;
    q = {
        style: {
            position: "absolute",
            top: "-41px",
            left: "65px",
            cursor: "pointer"
        }
    }, z = {
        style: {
            position: "absolute",
            top: "-41px",
            left: "60px",
            cursor: "pointer"
        }
    }, R = {
        key: 0,
        class: "right"
    }, L = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, T = {
        class: "addLabelInput"
    }, E = {
        style: {
            position: "absolute",
            top: "-41px",
            left: "105px",
            cursor: "pointer"
        }
    }, O = Xe({
        __name: "projectResourceSetting",
        props: {},
        emits: [ "success" ],
        setup(aa, {
            expose: Q,
            emit: Y
        }) {
            const b = pe();
            ne(), ce();
            const r = me(), w = o(), _ = o(!1), V = ve("basicInformation"), W = Y, s = o({
                dirId: "",
                tagIds: [],
                isAssess: 1
            }), A = o([]), X = o({
                isAssess: [ {
                    required: !0,
                    message: "是否作为考核点不能为空",
                    trigger: "change"
                } ]
            }), m = fe(() => r.name === "NeuCourseResManage"), C = o([]), S = o([]), F = o(0), v = o(!0), u = o(""), f = o({}), H = t => {
                u.value = "", t && (f.value = t, u.value = t.tagName), v.value = !1;
            }, Z = async () => {
                if (u.value) if (f.value.id) m.value ? await Be({
                    tagName: u.value,
                    id: f.value.id
                }) : await Le({
                    tagName: u.value,
                    id: f.value.id
                }), k(), F.value++, f.value = {}, u.value = "", v.value = !0; else {
                    let t;
                    t = m.value ? Ye : Je, t({
                        tagName: u.value,
                        sourceType: 0,
                        resPkgId: r.params.id,
                        neuPkgId: r.params.id,
                        resRootPkgId: V.value.neuPkgId,
                        resIsNeu: V.value && V.value.neuPkgId ? 1 : 0
                    }).then(d => {
                        xe({
                            type: "success",
                            message: "添加成功"
                        }), k(), F.value++, f.value = {}, u.value = "", v.value = !0;
                    });
                }
            }, $ = () => {
                f.value = {}, u.value = "", v.value = !0;
            }, P = o(0), k = async () => {
                let t;
                t = m.value ? await De({
                    id: r.params.id
                }) : await Te(r.params.id), P.value++, S.value = t;
            }, ee = () => {
                w.value.validate(async t => {
                    if (t) {
                        if (m.value) Qe({
                            resIds: A.value.map(d => d.projectId),
                            ...s.value
                        }); else {
                            let d = A.value.map(n => ({
                                dataId: n.projectId,
                                name: n.name,
                                dirId: s.value.dirId,
                                tagIds: s.value.tagIds,
                                type: 4,
                                isAssess: s.value.isAssess
                            }));
                            await He({
                                resPkgId: r.params.id,
                                courseResArray: d
                            });
                        }
                        N(), b.success("操作成功"), W("success"), _.value = !1;
                    }
                });
            }, N = () => {
                s.value = {
                    dirId: "",
                    tagIds: [],
                    isAssess: 1
                }, v.value = !0, u.value = "";
            };
            return Q({
                open: async (t, d) => {
                    A.value = t, N(), _.value = !0, he(async () => {
                        var n;
                        if (w.value.clearValidate(), t.length == 1) if (m.value) {
                            const p = await Ke({
                                dataId: t[0].projectId
                            });
                            s.value.dirId = p.dirId, s.value.tagIds = (n = p.tagList) == null ? void 0 : n.map(y => y.id), 
                            s.value.isAssess = p.isAssess ?? 1;
                        } else Se({
                            dataId: t[0].projectId,
                            pkgId: r.params.id
                        }).then(p => {
                            var y;
                            s.value.dirId = p.dirId, s.value.tagIds = (y = p.tags) == null ? void 0 : y.map(x => x.id), 
                            s.value.isAssess = p.isAssess ?? 1;
                        });
                    }), k(), m.value ? C.value = await Oe({
                        neuPkgId: r.params.id
                    }) : C.value = await Fe(r.params.id);
                }
            }), (t, d) => {
                const n = ke, p = be, y = Ze, x = we, I = Ve, ae = Ae, se = Ce, le = Pe, J = Ne, te = je, de = Ue, ie = qe;
                return h(), U(ie, {
                    modelValue: i(_),
                    "onUpdate:modelValue": d[5] || (d[5] = l => D(_) ? _.value = l : null),
                    "modal-class": "resourceSetting",
                    title: "资源设置",
                    width: "520",
                    height: "500",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    onClose: N
                }, {
                    footer: e(() => [ a(I, {
                        onClick: d[4] || (d[4] = l => _.value = !1)
                    }, {
                        default: e(() => [ c("取 消") ]),
                        _: 1
                    }), a(I, {
                        disabled: t.formLoading,
                        type: "primary",
                        onClick: ee
                    }, {
                        default: e(() => [ c("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: e(() => [ g("div", null, [ a(de, {
                        ref_key: "formRef",
                        ref: w,
                        "label-position": "top",
                        "label-width": "90px",
                        model: i(s),
                        rules: i(X),
                        size: "large"
                    }, {
                        default: e(() => [ a(x, {
                            label: "所属目录",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: e(() => [ g("div", q, [ a(p, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：关联课程目录后本次所选择项目可在相应目录下展示"
                            }, {
                                default: e(() => [ a(n, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), a(y, {
                                modelValue: i(s).dirId,
                                "onUpdate:modelValue": d[0] || (d[0] = l => i(s).dirId = l),
                                data: i(C),
                                "check-strictly": "",
                                "render-after-expand": !1,
                                placeholder: "请选择所属目录",
                                style: {
                                    width: "calc(100% - 20px)"
                                },
                                filterable: "",
                                props: i(Re),
                                clearable: ""
                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }), a(x, {
                            label: "项目标签",
                            style: {
                                width: "calc(100% - 20px)",
                                position: "relative"
                            }
                        }, {
                            default: e(() => [ g("div", z, [ a(p, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：标签用于提醒学生该项目适用的学习阶段/场景/方式等，每个项目最多可关联3个标签"
                            }, {
                                default: e(() => [ a(n, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), (h(), U(le, {
                                modelValue: i(s).tagIds,
                                "onUpdate:modelValue": d[2] || (d[2] = l => i(s).tagIds = l),
                                key: i(P),
                                multiple: "",
                                placeholder: "请选择项目标签",
                                style: {
                                    width: "calc(100% - 20px)"
                                },
                                "multiple-limit": 3
                            }, {
                                footer: e(() => [ M(a(I, {
                                    onClick: H,
                                    size: "small",
                                    type: "primary",
                                    text: ""
                                }, {
                                    default: e(() => [ a(n, {
                                        icon: "ep:plus",
                                        color: "#245FE6",
                                        style: {
                                            position: "relative",
                                            top: "-1px"
                                        }
                                    }), c(" 新建") ]),
                                    _: 1
                                }, 512), [ [ B, i(v) ] ]), M(g("div", T, [ a(se, {
                                    modelValue: i(u),
                                    "onUpdate:modelValue": d[1] || (d[1] = l => D(u) ? u.value = l : null),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    maxlength: 5,
                                    style: {
                                        "max-width": "520px"
                                    },
                                    placeholder: "请输入标签名称"
                                }, {
                                    append: e(() => [ g("div", {
                                        style: {
                                            "padding-left": "12px",
                                            "padding-right": "12px"
                                        },
                                        onClick: Z
                                    }, "保存") ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), a(I, {
                                    type: "primary",
                                    text: "",
                                    style: {
                                        "margin-left": "10px"
                                    },
                                    onClick: $
                                }, {
                                    default: e(() => [ c("取消") ]),
                                    _: 1
                                }) ], 512), [ [ B, !i(v) ] ]) ]),
                                default: e(() => [ (h(!0), G(ge, null, _e(i(S), l => (h(), 
                                U(ae, {
                                    key: l.id + i(P),
                                    label: l.tagName,
                                    value: l.id
                                }, {
                                    default: e(() => [ l.sourceType || l.showhandle ? ye("", !0) : (h(), 
                                    G("div", R, [ a(I, {
                                        type: "primary",
                                        style: {
                                            padding: "0px"
                                        },
                                        onClick: K(ue => H(l), [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: e(() => [ c("编辑") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]), a(I, {
                                        type: "danger",
                                        style: {
                                            padding: "0px 10px 0 0"
                                        },
                                        onClick: K(ue => (async j => {
                                            await b.delConfirm("确定要删除该标签吗？", "提示"), 
                                            m.value ? await Ge({
                                                id: j.id,
                                                resPkgId: r.params.id
                                            }) : await Ee({
                                                id: j.id,
                                                resPkgId: r.params.id
                                            }), b.success("删除成功"), (s.value.tagIds ?? []).forEach((oe, re) => {
                                                oe == j.id && s.value.tagIds.splice(re, 1);
                                            }), k();
                                        })(l), [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: e(() => [ c("删除") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])), g("div", L, Ie(l.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ])) ]),
                            _: 1
                        }), a(x, {
                            prop: "isAssess",
                            label: "是否作为考核点",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: e(() => [ g("div", E, [ a(p, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：设置为考核点的项目，其学生学习完成情况数据将纳入课程成绩考核"
                            }, {
                                default: e(() => [ a(n, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), a(te, {
                                modelValue: i(s).isAssess,
                                "onUpdate:modelValue": d[3] || (d[3] = l => i(s).isAssess = l)
                            }, {
                                default: e(() => [ a(J, {
                                    value: 1
                                }, {
                                    default: e(() => [ c("是") ]),
                                    _: 1
                                }), a(J, {
                                    value: 0
                                }, {
                                    default: e(() => [ c("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a31bd5d2" ] ]);
});

export {
    ea as __tla,
    O as default
};