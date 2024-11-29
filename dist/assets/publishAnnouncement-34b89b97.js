import {
    p as Ue,
    h as Oe,
    T as je,
    a0 as Ne,
    r as d,
    U as Se,
    e as Y,
    o as c,
    C as w,
    l as a,
    k as s,
    v as o,
    a as l,
    H,
    D as L,
    t as h,
    c as f,
    F,
    y as M,
    B as T,
    A as se,
    G as ue,
    m as de,
    ct as Ye,
    bo as oe,
    bp as He,
    bq as Fe,
    N as Me,
    O as Be,
    av as qe,
    K as Ae,
    aw as Ge,
    J as Re,
    ab as Je,
    _ as Ke,
    P as Qe,
    ac as We,
    Q as Xe,
    aU as Ze,
    R as $e,
    S as ea,
    n as z,
    __tla as aa
} from "./index-6c08ea4c.js";

import {
    F as la,
    G as ta,
    H as sa,
    E as ua,
    __tla as da
} from "./index-9567cbf6.js";

import {
    d as oa
} from "./tree-05ea8e09.js";

import {
    _ as ia
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as ra,
    __tla as na
} from "./index-ef4d146e.js";

let ie, ca = Promise.all([ (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})() ]).then(async () => {
    let B, q, A, G, R, J, K, Q, W, X;
    B = {
        class: "class-detail"
    }, q = {
        style: {
            color: "#245fe6"
        }
    }, A = {
        key: 1
    }, G = {
        key: 0,
        class: "right"
    }, R = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, J = {
        class: "addLabelInput"
    }, K = {
        key: 2,
        class: "revert"
    }, Q = (I => ($e("data-v-19d88297"), I = I(), ea(), I))(() => h("p", {
        class: "info mb-16px"
    }, "公告撤销发布后学生端将不可见，确定撤销发布？", -1)), W = {
        class: "class-detail"
    }, X = {
        style: {
            color: "#245fe6"
        }
    }, ie = ia({
        __name: "publishAnnouncement",
        props: {
            announcementInfo: {
                type: Object,
                default: () => {}
            },
            classInfo: {
                type: Object,
                default: () => ({})
            },
            treeList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "refreshList" ],
        setup(I, {
            expose: re,
            emit: ne
        }) {
            const ce = I, pe = ne, me = Ue();
            Oe();
            const P = je(), {
                announcementInfo: m,
                classInfo: k,
                treeList: he
            } = Ne(ce), V = d(!1), E = d(""), e = Se({
                id: "",
                teachCourseId: "",
                teachClassId: "",
                isPublish: 2,
                scope: 0,
                isDownload: 0,
                publishTime: "",
                teachLabelId: [],
                dirId: ""
            }), fe = {
                scope: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                isPublish: [ {
                    required: !0,
                    message: "是否发布不能为空",
                    trigger: "change"
                }, {
                    validator: (i, u, r) => {
                        e.isPublish != 2 || e.publishTime ? r() : r(new Error("发布时间不能为空"));
                    },
                    trigger: "blur"
                } ],
                isDownload: [ {
                    required: !0,
                    message: "是否允许下载不能为空",
                    trigger: "change"
                } ]
            }, U = () => {
                V.value = !1, E.value = "", be(), O.value.resetFields();
            };
            d(null), d(null);
            const C = d(!1), x = d(""), O = d(null), ve = () => {
                O.value.validate(async i => {
                    if (!i) return !1;
                    pe("handleData", {
                        type: x.value,
                        params: e
                    });
                });
            };
            d([]), d({});
            const be = () => {
                Object.keys(e).forEach(i => {
                    e[i] = "";
                }), e.isPublish = 2, e.scope = 0, e.isDownload = 0, e.teachLabelId = [];
            };
            d([ {
                name: "班级一",
                code: "1"
            }, {
                name: "班级二",
                code: "2"
            }, {
                name: "班级三",
                code: "3"
            } ]);
            const _e = Y(() => [ "publish", "publishSetting", "publishEdit" ].includes(x.value)), Z = Y(() => x.value === "announcementSetting"), $ = Y(() => x.value === "revertPublish"), ee = d([]), ae = d(0), j = d(0), b = d(!0), p = d(""), _ = d({}), le = i => {
                p.value = "", i && (_.value = i, p.value = i.tagName), b.value = !1;
            }, D = () => {
                ua({
                    teachCourseId: P.params.teachCourseId
                }).then(i => {
                    j.value++, ee.value = i;
                });
            }, ye = () => {
                p.value && (_.value.id ? ta({
                    tagName: p.value,
                    sourceType: 0,
                    teachCourseId: P.params.teachCourseId,
                    id: _.value.id
                }).then(i => {
                    D(), ae.value++, _.value = {}, p.value = "", b.value = !0;
                }) : sa({
                    tagName: p.value,
                    sourceType: 0,
                    teachCourseId: P.params.teachCourseId
                }).then(i => {
                    oe({
                        type: "success",
                        message: "添加成功"
                    }), D(), ae.value++, _.value = {}, p.value = "", b.value = !0;
                }));
            }, ge = () => {
                _.value = {}, p.value = "", b.value = !0;
            }, Ie = i => {
                e.scope = 0, e.isDownload = 0;
            };
            return re({
                handleOpen: async ({
                    row: i,
                    title: u,
                    type: r
                }) => {
                    x.value = r, V.value = !0, E.value = u;
                    const v = {
                        publish: () => {
                            C.value = !1, z(() => {
                                Object.keys(e).forEach(n => e[n] = m.value[n]), 
                                e.isPublish = 2, e.isDownload = 0, e.scope = 0;
                            });
                        },
                        publishEdit: () => {
                            C.value = !1;
                        },
                        publishSetting: () => {
                            C.value = !0, z(() => {
                                Object.keys(e).forEach(n => e[n] = m.value[n]), 
                                e.publishTime = m.value.publishTimeString;
                            });
                        },
                        announcementSetting: () => {
                            D(), Z.value = !0, z(() => {
                                Object.keys(e).forEach(n => e[n] = m.value[n]), 
                                m.value.teachLabelId !== "" ? e.teachLabelId = m.value.teachLabelId.split(",") : e.teachLabelId = [];
                            });
                        },
                        revertPublish: () => {
                            $.value = !0, z(() => {
                                Object.keys(e).forEach(n => e[n] = m.value[n]), 
                                e.publishTime = m.value.publishTimeString;
                            });
                        },
                        default: () => {}
                    };
                    (v[r] || v.default)();
                },
                handleClose: U
            }), (i, u) => {
                const r = He, v = Fe, n = Me, y = Be, N = qe, te = Ae, ke = Ge, Ve = ra, g = Re, Ce = Je, xe = Ke, we = Qe, Le = We, Te = Xe, De = Ze;
                return c(), w(De, {
                    modelValue: l(V),
                    "onUpdate:modelValue": u[10] || (u[10] = t => de(V) ? V.value = t : null),
                    width: "600",
                    "close-on-click-modal": !1,
                    onClose: U,
                    appendToBody: !0,
                    title: l(E)
                }, {
                    footer: a(() => [ s(g, {
                        size: "large",
                        onClick: u[9] || (u[9] = t => U())
                    }, {
                        default: a(() => [ o("返 回") ]),
                        _: 1
                    }), s(g, {
                        size: "large",
                        type: "primary",
                        onClick: ve
                    }, {
                        default: a(() => [ o("确 定") ]),
                        _: 1
                    }) ]),
                    default: a(() => [ s(Te, {
                        ref_key: "dialogFormRef",
                        ref: O,
                        model: l(e),
                        onSubmit: u[8] || (u[8] = H(() => {}, [ "prevent" ])),
                        rules: fe,
                        class: "dialog-form",
                        "label-position": "top"
                    }, {
                        default: a(() => [ l(_e) ? (c(), w(ke, {
                            key: 0
                        }, {
                            default: a(() => [ s(N, {
                                span: 24
                            }, {
                                default: a(() => [ s(y, {
                                    label: "发布方式",
                                    prop: "isPublish"
                                }, {
                                    default: a(() => [ s(v, {
                                        modelValue: l(e).isPublish,
                                        "onUpdate:modelValue": u[0] || (u[0] = t => l(e).isPublish = t),
                                        onChange: Ie,
                                        disabled: l(C)
                                    }, {
                                        default: a(() => [ s(r, {
                                            value: 1,
                                            size: "large"
                                        }, {
                                            default: a(() => [ o("立即发布") ]),
                                            _: 1
                                        }), s(r, {
                                            value: 2,
                                            size: "large"
                                        }, {
                                            default: a(() => [ o("定时发布") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]), l(e).isPublish == 2 ? (c(), 
                                    w(n, {
                                        key: 0,
                                        modelValue: l(e).publishTime,
                                        "onUpdate:modelValue": u[1] || (u[1] = t => l(e).publishTime = t),
                                        type: "datetime",
                                        placeholder: "请选择发布时间",
                                        format: "YYYY-MM-DD HH:mm:ss",
                                        "value-format": "YYYY-MM-DD HH:mm:ss",
                                        class: "ml-10px"
                                    }, null, 8, [ "modelValue" ])) : L("", !0) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), s(N, {
                                span: 24
                            }, {
                                default: a(() => [ s(y, {
                                    label: "发布范围",
                                    prop: "scope"
                                }, {
                                    default: a(() => [ s(v, {
                                        modelValue: l(e).scope,
                                        "onUpdate:modelValue": u[2] || (u[2] = t => l(e).scope = t),
                                        disabled: l(C)
                                    }, {
                                        default: a(() => [ s(r, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: a(() => [ o("当前班级") ]),
                                            _: 1
                                        }), s(te, {
                                            placement: "top",
                                            effect: "light"
                                        }, {
                                            content: a(() => [ h("ul", B, [ (c(!0), 
                                            f(F, null, M(l(k).list, t => (c(), f("li", {
                                                key: t.teachClassId
                                            }, T(t.teachClassName), 1))), 128)) ]) ]),
                                            default: a(() => [ s(r, {
                                                value: 1,
                                                size: "large"
                                            }, {
                                                default: a(() => [ o("全部班级（ "), h("span", q, T(l(k).count), 1), o(" ） ") ]),
                                                _: 1
                                            }) ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue", "disabled" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), s(N, {
                                span: 24
                            }, {
                                default: a(() => [ s(y, {
                                    label: "是否允许下载",
                                    prop: "isDownload"
                                }, {
                                    default: a(() => [ s(v, {
                                        modelValue: l(e).isDownload,
                                        "onUpdate:modelValue": u[3] || (u[3] = t => l(e).isDownload = t)
                                    }, {
                                        default: a(() => [ s(r, {
                                            value: 1,
                                            size: "large"
                                        }, {
                                            default: a(() => [ o("是") ]),
                                            _: 1
                                        }), s(r, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: a(() => [ o("否") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        })) : L("", !0), l(Z) ? (c(), f("div", A, [ s(y, {
                            label: "所属目录",
                            prop: "dirId"
                        }, {
                            default: a(() => [ s(Ve, {
                                modelValue: l(e).dirId,
                                "onUpdate:modelValue": u[4] || (u[4] = t => l(e).dirId = t),
                                data: l(he),
                                "check-strictly": "",
                                "render-after-expand": !1,
                                placeholder: "请选择所属目录",
                                filterable: "",
                                size: "large",
                                props: l(oa)
                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }), s(y, {
                            label: "公告标签",
                            prop: "teachLabelId"
                        }, {
                            default: a(() => [ (c(), w(Le, {
                                modelValue: l(e).teachLabelId,
                                "onUpdate:modelValue": u[6] || (u[6] = t => l(e).teachLabelId = t),
                                key: l(j),
                                multiple: "",
                                placeholder: "请选择公告标签",
                                "multiple-limit": 3,
                                size: "large"
                            }, {
                                footer: a(() => [ se(s(g, {
                                    onClick: le,
                                    size: "small",
                                    type: "primary",
                                    text: ""
                                }, {
                                    default: a(() => [ s(xe, {
                                        icon: "ep:plus",
                                        color: "#245FE6",
                                        style: {
                                            position: "relative",
                                            top: "-1px"
                                        }
                                    }), o(" 新建") ]),
                                    _: 1
                                }, 512), [ [ ue, l(b) ] ]), se(h("div", J, [ s(we, {
                                    modelValue: l(p),
                                    "onUpdate:modelValue": u[5] || (u[5] = t => de(p) ? p.value = t : null),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    style: {
                                        "max-width": "450px"
                                    },
                                    placeholder: "请输入标签名称",
                                    maxlength: "5"
                                }, {
                                    append: a(() => [ h("div", {
                                        style: {
                                            "padding-left": "12px",
                                            "padding-right": "12px"
                                        },
                                        onClick: ye
                                    }, "保存") ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), s(g, {
                                    type: "primary",
                                    text: "",
                                    style: {
                                        "margin-left": "10px"
                                    },
                                    onClick: ge
                                }, {
                                    default: a(() => [ o("取消") ]),
                                    _: 1
                                }) ], 512), [ [ ue, !l(b) ] ]) ]),
                                default: a(() => [ (c(!0), f(F, null, M(l(ee), t => (c(), 
                                w(Ce, {
                                    key: t.id + l(j),
                                    label: t.tagName,
                                    value: t.id
                                }, {
                                    default: a(() => [ t.sourceType || t.showhandle ? L("", !0) : (c(), 
                                    f("div", G, [ s(g, {
                                        type: "primary",
                                        style: {
                                            padding: "0px"
                                        },
                                        onClick: H(ze => le(t), [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: a(() => [ o("编辑") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]), s(g, {
                                        type: "danger",
                                        style: {
                                            padding: "0px 10px 0 0"
                                        },
                                        onClick: H(ze => {
                                            return S = t, void me.confirm("确定要删除该标签吗？", "提示", {
                                                confirmButtonText: "确认",
                                                cancelButtonText: "取消"
                                            }).then(() => {
                                                la({
                                                    id: S.id
                                                }).then(pa => {
                                                    oe({
                                                        message: "操作成功",
                                                        type: "success"
                                                    }), e.teachLabelId.forEach((Pe, Ee) => {
                                                        Pe == S.id && e.teachLabelId.splice(Ee, 1);
                                                    }), D();
                                                });
                                            }).catch(() => {});
                                            var S;
                                        }, [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: a(() => [ o("删除") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])), h("div", R, T(t.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ])) ]),
                            _: 1
                        }) ])) : L("", !0), l($) ? (c(), f("div", K, [ Q, s(y, {
                            label: "撤销发布范围",
                            prop: "scope"
                        }, {
                            default: a(() => [ s(v, {
                                modelValue: l(e).scope,
                                "onUpdate:modelValue": u[7] || (u[7] = t => l(e).scope = t)
                            }, {
                                default: a(() => [ s(r, {
                                    value: 0,
                                    size: "large"
                                }, {
                                    default: a(() => [ o("当前班级") ]),
                                    _: 1
                                }), s(te, {
                                    placement: "top",
                                    effect: "light"
                                }, Ye({
                                    default: a(() => [ s(r, {
                                        value: 1,
                                        size: "large"
                                    }, {
                                        default: a(() => [ o("全部班级（ "), h("span", X, T(l(k).count), 1), o(" ） ") ]),
                                        _: 1
                                    }) ]),
                                    _: 2
                                }, [ l(k).count ? {
                                    name: "content",
                                    fn: a(() => [ h("ul", W, [ (c(!0), f(F, null, M(l(k).list, t => (c(), 
                                    f("li", {
                                        key: t.teachClassId
                                    }, T(t.teachClassName), 1))), 128)) ]) ]),
                                    key: "0"
                                } : void 0 ]), 1024) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ])) : L("", !0) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-19d88297" ] ]);
});

export {
    ca as __tla,
    ie as default
};