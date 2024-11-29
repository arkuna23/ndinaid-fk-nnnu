import {
    T as De,
    u as Ee,
    aa as Oe,
    p as Ne,
    r as g,
    e as M,
    U as Ue,
    a6 as m,
    f as qe,
    o,
    c as q,
    t as b,
    A as z,
    a as l,
    C as n,
    l as a,
    k as s,
    v as i,
    G as re,
    m as Re,
    F,
    y as de,
    H as ie,
    D as _,
    B as Ye,
    dP as oe,
    bo as pe,
    O as He,
    J as Se,
    ab as je,
    _ as Ae,
    P as Me,
    ac as ze,
    av as Fe,
    bp as Ge,
    bq as Je,
    N as Le,
    aw as Be,
    Q as Ke,
    a9 as Qe,
    R as We,
    S as Xe,
    __tla as Ze
} from "./index-6c08ea4c.js";

import {
    a as $e,
    b as ea,
    u as aa,
    c as la,
    d as sa,
    __tla as ta
} from "./index-9567cbf6.js";

import {
    g as ua,
    a as ra,
    u as da,
    c as ia,
    d as oa,
    __tla as pa
} from "./pkgManage-4e23f8a8.js";

import {
    g as ca,
    a as ma,
    u as na,
    c as va,
    d as fa,
    __tla as ga
} from "./pkgManage-14933852.js";

import {
    a as ha,
    __tla as _a
} from "./project-11c04120.js";

import {
    d as ya
} from "./tree-05ea8e09.js";

import {
    h as ba,
    i as Ia,
    __tla as Ta
} from "./project-51c056b9.js";

import {
    g as wa,
    __tla as Ca
} from "./resApi-8ab67bac.js";

import {
    g as xa,
    __tla as ka
} from "./list-724ebf74.js";

import {
    _ as Va
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Pa,
    __tla as Da
} from "./index-ef4d146e.js";

let ce, Ea = Promise.all([ (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})() ]).then(async () => {
    let R, G, J, L, B, K, Q, W, X;
    R = k => (We("data-v-39e562c7"), k = k(), Xe(), k), G = {
        class: "project flex flex-col"
    }, J = {
        key: 0,
        class: "right"
    }, L = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, B = {
        class: "addLabelInput"
    }, K = R(() => b("span", {
        class: "tips"
    }, " 该项目发布后学生可见，默认按资源顺序执行，可跳关执行", -1)), Q = R(() => b("span", {
        class: "tips"
    }, " 该项目学生发布后可见，按顺序执行，前序任务完才可解锁下一任务", -1)), W = {
        class: "bottom-box"
    }, X = {
        class: "footer"
    }, ce = Va({
        __name: "projectSetting",
        props: {
            selectInfo: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "pre" ],
        setup(k, {
            emit: me
        }) {
            const d = De(), Y = Ee(), {
                t: Z
            } = Oe(), V = Ne(), P = g(!1), e = g({
                publishType: 1,
                completeType: 1,
                publishTime: "",
                groupPlanId: "",
                endTime: "",
                publishRange: 1,
                isExamine: 1,
                teachCourseDirectoryId: "",
                teachCourseTagIds: [],
                trialType: 1,
                isPublish: 0,
                groupPlanName: ""
            }), ne = M(() => (S.value.find(r => r.id === e.value.groupPlanId) || {}).name), $ = g([]), ve = r => m(r).valueOf() < m(Date.now()).valueOf() - 864e5, fe = r => m(r).valueOf() < m(Date.now()).valueOf() - 864e5, ge = Ue({
                publishType: [ {
                    required: !0,
                    message: "请选择发布方式",
                    trigger: "blur"
                } ],
                publishTime: [ {
                    required: !0,
                    message: "请选择发布时间",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (r, t, v) => {
                        e.value.publishType == "2" && t ? m(t).valueOf() < m(new Date()).valueOf() ? v(new Error("发布时间需大于当前时间")) : e.value.endTime && m(t).valueOf() >= m(e.value.endTime).valueOf() ? v(new Error("发布时间需小于截止时间")) : v() : v();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                completeType: [ {
                    required: !0,
                    message: "请选择完成方式",
                    trigger: [ "blur", "change" ]
                } ],
                groupPlanId: [ {
                    required: !0,
                    message: "请选择分组",
                    trigger: "blur"
                } ],
                trialType: [ {
                    required: !0,
                    message: "请选择实验方式",
                    trigger: "blur"
                } ],
                endTime: [ {
                    required: !0,
                    message: "请选择截止时间",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (r, t, v) => {
                        m(t).valueOf() < m(new Date()).valueOf() && v(new Error("截止时间需大于当前时间")), 
                        e.value.publishType == "2" && e.value.publishTime && t && m(t).valueOf() < m(e.value.publishTime).valueOf() ? v(new Error("截止时间需大于发布时间")) : v();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                publishRange: [ {
                    required: !0,
                    message: "请选择发布范围",
                    trigger: [ "blur", "change" ]
                } ],
                teachCourseDirectoryId: [ {
                    message: "请选择项目目录",
                    trigger: [ "blur", "change" ]
                } ],
                teachCourseTagIds: [ {
                    message: "请选择项目标签",
                    trigger: [ "blur", "change" ]
                } ],
                isExamine: [ {
                    required: !0,
                    message: "请选择是否作为考核点",
                    trigger: [ "blur", "change" ]
                } ],
                isPublish: [ {
                    required: !0,
                    message: "请选择是否发布",
                    trigger: [ "blur", "change" ]
                } ]
            }), I = M(() => e.value.isPublish == 1), D = g(), he = me, H = k, _e = async () => {
                if (D && await D.value.validate()) {
                    if (e.value.isPublish == 1 && e.value.completeType == 1 && H.selectInfo.environments.includes(15)) return V.alertError("当前选择包含Devops环境项目，该项目仅支持分组完成，请重新进行选择。");
                    if (e.value.completeType == 2 && e.value.publishRange == 2) return V.alertError("完成方式为分组完成，发布范围只能选择当前班级");
                    P.value = !0;
                    try {
                        e.value.groupPlanName = ne.value;
                        const {
                            classId: r,
                            teachArrangementId: t,
                            teachCourseId: v
                        } = d.params, c = {
                            ...H.selectInfo,
                            teachClassId: r,
                            teachCourseId: v,
                            teachArrangementId: t
                        };
                        let h = {
                            teachCourseDirectoryId: e.value.teachCourseDirectoryId,
                            teachCourseTagIds: e.value.teachCourseTagIds,
                            isExamine: e.value.isExamine,
                            isPublish: e.value.isPublish
                        }, C = {
                            ...e.value
                        };
                        C.endTime = m(e.value.endTime).valueOf(), C.publishTime = m(e.value.publishTime).valueOf();
                        let j = e.value.isPublish == 1 ? {
                            ...c,
                            ...C
                        } : {
                            ...h,
                            ...c
                        };
                        await ba(j), V.success(Z("common.createSuccess")), window.sessionStorage.setItem("currentTab", 13), 
                        Y.back();
                    } finally {
                        P.value = !1;
                    }
                }
            }, ye = async () => {
                if (D && await D.value.validate()) {
                    P.value = !0;
                    try {
                        let r = {
                            teachCourseDirectoryId: e.value.teachCourseDirectoryId,
                            teachCourseTagIds: e.value.teachCourseTagIds,
                            isExamine: e.value.isExamine,
                            pkgId: d.params.id,
                            ids: H.selectInfo.ids
                        };
                        await ha(r), V.success(Z("common.createSuccess")), window.sessionStorage.setItem("currentTab", 12), 
                        Y.back();
                    } finally {
                        P.value = !1;
                    }
                }
            }, be = () => {
                T.value = !0, p.value = "", he("pre", e.value);
            }, ee = g([]), ae = g(0), O = async () => {
                let r;
                r = d.params.classId ? await ea({
                    teachCourseId: d.params.teachCourseId
                }) : E.value ? await ma({
                    id: d.params.id
                }) : await ra(d.params.id), ae.value++, ee.value = r;
            }, S = g([]), E = M(() => d.name === "NeuAddProject"), le = g(0), T = g(!0), p = g(""), w = g({}), se = r => {
                p.value = "", r && (w.value = r, p.value = r.tagName), T.value = !1;
            }, Ie = async () => {
                if (p.value) if (w.value.id) {
                    if (d.params.classId) await aa({
                        tagName: p.value,
                        sourceType: 0,
                        teachCourseId: d.params.teachCourseId,
                        id: w.value.id
                    }); else {
                        let r;
                        r = E.value ? na : da, await r({
                            tagName: p.value,
                            id: w.value.id
                        });
                    }
                    O(), le.value++, w.value = {}, p.value = "", T.value = !0;
                } else {
                    if (d.params.classId) await la({
                        tagName: p.value,
                        sourceType: 0,
                        teachCourseId: d.params.teachCourseId
                    }); else {
                        let r;
                        r = E.value ? va : ia, await r({
                            tagName: p.value,
                            sourceType: 0,
                            resPkgId: d.params.id,
                            neuPkgId: d.params.id,
                            resRootPkgId: N.value.neuPkgId,
                            resIsNeu: N.value && N.value.neuPkgId ? 1 : 0
                        });
                    }
                    pe({
                        type: "success",
                        message: "添加成功"
                    }), O(), le.value++, w.value = {}, p.value = "", T.value = !0;
                }
            }, Te = () => {
                w.value = {}, p.value = "", T.value = !0;
            }, N = g({});
            return qe(() => {
                (async () => {
                    let r;
                    r = d.params.classId ? await $e({
                        teachCourseId: d.params.teachCourseId
                    }) : E.value ? await ca({
                        neuPkgId: d.params.id
                    }) : await ua(d.params.id), $.value = r;
                })(), O(), d.params.classId ? (async () => S.value = await Ia({
                    teachClassId: d.params.classId,
                    status: 1
                }) || [])() : (async () => {
                    let r;
                    r = d.name === "NeuAddProject" ? xa : wa, r({
                        id: d.params.id
                    }).then(t => {
                        N.value = t;
                    });
                })();
            }), (r, t) => {
                const v = Pa, c = He, h = Se, C = je, j = Ae, we = Me, te = ze, y = Fe, f = Ge, x = Je, ue = Le, Ce = Be, xe = Ke, ke = Qe;
                return o(), q(F, null, [ b("div", G, [ z((o(), n(xe, {
                    ref_key: "formRef",
                    ref: D,
                    "label-position": "top",
                    model: l(e),
                    rules: l(ge),
                    "label-width": "80px",
                    size: "large",
                    style: {
                        "overflow-x": "hidden",
                        width: "920px"
                    }
                }, {
                    default: a(() => [ s(Ce, {
                        gutter: 0
                    }, {
                        default: a(() => [ s(c, {
                            label: "所属目录",
                            class: "w100"
                        }, {
                            default: a(() => [ s(v, {
                                modelValue: l(e).teachCourseDirectoryId,
                                "onUpdate:modelValue": t[0] || (t[0] = u => l(e).teachCourseDirectoryId = u),
                                data: l($),
                                "check-strictly": "",
                                "render-after-expand": !1,
                                placeholder: "请选择所属目录",
                                style: {
                                    width: "calc(100%)"
                                },
                                filterable: "",
                                clearable: "",
                                props: l(ya),
                                teleported: !1
                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }), s(y, {
                            span: 24
                        }, {
                            default: a(() => [ s(c, {
                                label: "项目标签",
                                prop: ""
                            }, {
                                default: a(() => [ s(te, {
                                    clearable: "",
                                    modelValue: l(e).teachCourseTagIds,
                                    "onUpdate:modelValue": t[2] || (t[2] = u => l(e).teachCourseTagIds = u),
                                    placeholder: "请选择项目标签",
                                    multiple: "",
                                    "multiple-limit": 3,
                                    style: {
                                        width: "100%"
                                    },
                                    teleported: !0
                                }, {
                                    footer: a(() => [ z(s(h, {
                                        onClick: se,
                                        size: "small",
                                        type: "primary",
                                        text: ""
                                    }, {
                                        default: a(() => [ s(j, {
                                            icon: "ep:plus",
                                            color: "#245FE6",
                                            style: {
                                                position: "relative",
                                                top: "-1px"
                                            }
                                        }), i(" 新建") ]),
                                        _: 1
                                    }, 512), [ [ re, l(T) ] ]), z(b("div", B, [ s(we, {
                                        modelValue: l(p),
                                        "onUpdate:modelValue": t[1] || (t[1] = u => Re(p) ? p.value = u : null),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        maxlength: 5,
                                        style: {
                                            "max-width": "780px"
                                        },
                                        placeholder: "请输入标签名称"
                                    }, {
                                        append: a(() => [ b("div", {
                                            style: {
                                                "padding-left": "12px",
                                                "padding-right": "12px"
                                            },
                                            onClick: Ie
                                        }, "保存") ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]), s(h, {
                                        type: "primary",
                                        text: "",
                                        style: {
                                            "margin-left": "10px"
                                        },
                                        onClick: Te
                                    }, {
                                        default: a(() => [ i("取消") ]),
                                        _: 1
                                    }) ], 512), [ [ re, !l(T) ] ]) ]),
                                    default: a(() => [ (o(!0), q(F, null, de(l(ee), u => (o(), 
                                    n(C, {
                                        key: u.id + l(ae),
                                        label: u.tagName,
                                        value: u.id
                                    }, {
                                        default: a(() => [ u.sourceType || u.showhandle ? _("", !0) : (o(), 
                                        q("div", J, [ s(h, {
                                            type: "primary",
                                            style: {
                                                padding: "0px"
                                            },
                                            onClick: ie(Ve => se(u), [ "stop" ]),
                                            text: ""
                                        }, {
                                            default: a(() => [ i("编辑") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]), s(h, {
                                            type: "danger",
                                            style: {
                                                padding: "0px 10px 0 0"
                                            },
                                            onClick: ie(Ve => (async A => {
                                                if (await V.delConfirm("确定要删除该标签吗？", "提示"), 
                                                d.params.classId) await sa({
                                                    id: A.id
                                                }); else {
                                                    let U;
                                                    U = E.value ? fa : oa, await U({
                                                        id: A.id,
                                                        resPkgId: d.params.id,
                                                        neuPkgId: d.params.id
                                                    });
                                                }
                                                pe({
                                                    message: "操作成功",
                                                    type: "success"
                                                }), e.value.teachCourseTagIds.forEach((U, Pe) => {
                                                    U == A.id && e.value.teachCourseTagIds.splice(Pe, 1);
                                                }), O();
                                            })(u), [ "stop" ]),
                                            text: ""
                                        }, {
                                            default: a(() => [ i("删除") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ]) ])), b("div", L, Ye(u.tagName), 1) ]),
                                        _: 2
                                    }, 1032, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), s(y, {
                            span: 24
                        }, {
                            default: a(() => [ s(c, {
                                label: "是否作为考核点",
                                prop: "isExamine"
                            }, {
                                default: a(() => [ s(x, {
                                    modelValue: l(e).isExamine,
                                    "onUpdate:modelValue": t[3] || (t[3] = u => l(e).isExamine = u)
                                }, {
                                    default: a(() => [ s(f, {
                                        value: 1
                                    }, {
                                        default: a(() => [ i("是") ]),
                                        _: 1
                                    }), s(f, {
                                        value: 0
                                    }, {
                                        default: a(() => [ i("否") ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }), l(d).params.classId ? (o(), n(c, {
                                key: 0,
                                label: "是否发布",
                                prop: "isPublish"
                            }, {
                                default: a(() => [ s(x, {
                                    modelValue: l(e).isPublish,
                                    "onUpdate:modelValue": t[4] || (t[4] = u => l(e).isPublish = u)
                                }, {
                                    default: a(() => [ s(f, {
                                        value: 1
                                    }, {
                                        default: a(() => [ i("是") ]),
                                        _: 1
                                    }), s(f, {
                                        value: 0
                                    }, {
                                        default: a(() => [ i("否") ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            })) : _("", !0) ]),
                            _: 1
                        }), s(y, {
                            span: 6
                        }, {
                            default: a(() => [ l(I) ? (o(), n(c, {
                                key: 0,
                                label: "发布方式",
                                prop: "publishType"
                            }, {
                                default: a(() => [ s(x, {
                                    modelValue: l(e).publishType,
                                    "onUpdate:modelValue": t[5] || (t[5] = u => l(e).publishType = u)
                                }, {
                                    default: a(() => [ s(f, {
                                        value: 1
                                    }, {
                                        default: a(() => [ i("立即发布") ]),
                                        _: 1
                                    }), s(f, {
                                        value: 2
                                    }, {
                                        default: a(() => [ i("定时发布") ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            })) : _("", !0) ]),
                            _: 1
                        }), s(y, {
                            span: 18
                        }, {
                            default: a(() => [ l(I) && l(e).publishType == 2 ? (o(), 
                            n(c, {
                                key: 0,
                                label: " ",
                                prop: "publishTime",
                                class: "col_13w100"
                            }, {
                                default: a(() => [ s(ue, {
                                    modelValue: l(e).publishTime,
                                    "onUpdate:modelValue": t[6] || (t[6] = u => l(e).publishTime = u),
                                    "value-format": "YYYY-MM-DD HH:mm:ss",
                                    type: "datetime",
                                    placeholder: "请选择发布时间",
                                    "disabled-date": ve,
                                    "prefix-icon": l(oe)
                                }, null, 8, [ "modelValue", "prefix-icon" ]) ]),
                                _: 1
                            })) : _("", !0) ]),
                            _: 1
                        }), s(y, {
                            span: 6
                        }, {
                            default: a(() => [ l(I) ? (o(), n(c, {
                                key: 0,
                                label: "完成方式",
                                prop: "completeType"
                            }, {
                                default: a(() => [ s(x, {
                                    modelValue: l(e).completeType,
                                    "onUpdate:modelValue": t[7] || (t[7] = u => l(e).completeType = u)
                                }, {
                                    default: a(() => [ s(f, {
                                        value: 1
                                    }, {
                                        default: a(() => [ i("个人完成") ]),
                                        _: 1
                                    }), s(f, {
                                        value: 2
                                    }, {
                                        default: a(() => [ i("分组完成") ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            })) : _("", !0) ]),
                            _: 1
                        }), s(y, {
                            span: 18
                        }, {
                            default: a(() => [ l(I) && l(e).completeType == 2 ? (o(), 
                            n(c, {
                                key: 0,
                                label: " ",
                                prop: "groupPlanId",
                                class: "col_13w100"
                            }, {
                                default: a(() => [ s(te, {
                                    modelValue: l(e).groupPlanId,
                                    "onUpdate:modelValue": t[8] || (t[8] = u => l(e).groupPlanId = u),
                                    placeholder: "请选择"
                                }, {
                                    default: a(() => [ (o(!0), q(F, null, de(l(S), u => (o(), 
                                    n(C, {
                                        key: u.id,
                                        label: u.name,
                                        value: u.id
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            })) : _("", !0) ]),
                            _: 1
                        }), s(y, {
                            span: 12
                        }, {
                            default: a(() => [ l(I) ? (o(), n(c, {
                                key: 0,
                                label: "实验方式",
                                prop: "trialType"
                            }, {
                                default: a(() => [ s(x, {
                                    modelValue: l(e).trialType,
                                    "onUpdate:modelValue": t[9] || (t[9] = u => l(e).trialType = u)
                                }, {
                                    default: a(() => [ s(f, {
                                        value: 1
                                    }, {
                                        default: a(() => [ i("自由模式"), K ]),
                                        _: 1
                                    }), s(f, {
                                        value: 2
                                    }, {
                                        default: a(() => [ i("闯关模式"), Q ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            })) : _("", !0) ]),
                            _: 1
                        }), l(I) ? (o(), n(c, {
                            key: 0,
                            label: "截止时间",
                            prop: "endTime",
                            class: "w100"
                        }, {
                            default: a(() => [ s(ue, {
                                modelValue: l(e).endTime,
                                "onUpdate:modelValue": t[10] || (t[10] = u => l(e).endTime = u),
                                placeholder: "请选择截止时间",
                                "prefix-icon": l(oe),
                                "disabled-date": fe,
                                "value-format": "YYYY-MM-DD HH:mm:ss",
                                type: "datetime"
                            }, null, 8, [ "modelValue", "prefix-icon" ]) ]),
                            _: 1
                        })) : _("", !0), s(y, {
                            span: 12
                        }, {
                            default: a(() => [ l(I) ? (o(), n(c, {
                                key: 0,
                                label: "发布范围",
                                prop: "publishRange"
                            }, {
                                default: a(() => [ s(x, {
                                    modelValue: l(e).publishRange,
                                    "onUpdate:modelValue": t[11] || (t[11] = u => l(e).publishRange = u)
                                }, {
                                    default: a(() => [ s(f, {
                                        value: 1
                                    }, {
                                        default: a(() => [ i("当前班级") ]),
                                        _: 1
                                    }), s(f, {
                                        value: 2
                                    }, {
                                        default: a(() => [ i("全部班级") ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            })) : _("", !0) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ])), [ [ ke, l(P) ] ]) ]), b("div", W, [ b("div", X, [ s(h, {
                    onClick: t[12] || (t[12] = u => l(Y).back())
                }, {
                    default: a(() => [ i("取 消") ]),
                    _: 1
                }), s(h, {
                    type: "",
                    onClick: be
                }, {
                    default: a(() => [ i("上一步") ]),
                    _: 1
                }), l(d).params.classId ? (o(), n(h, {
                    key: 0,
                    type: "primary",
                    onClick: _e
                }, {
                    default: a(() => [ i("完成") ]),
                    _: 1
                })) : (o(), n(h, {
                    key: 1,
                    type: "primary",
                    onClick: ye
                }, {
                    default: a(() => [ i("完成") ]),
                    _: 1
                })) ]) ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-39e562c7" ] ]);
});

export {
    Ea as __tla,
    ce as default
};