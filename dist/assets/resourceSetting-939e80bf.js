import {
    h as Ye,
    u as Se,
    T as Ue,
    r as p,
    a0 as qe,
    o as m,
    C as _,
    l,
    t as h,
    a,
    c as T,
    D as g,
    k as s,
    F as V,
    v as o,
    A as oe,
    G as ne,
    m as pe,
    y as me,
    H as ce,
    B as H,
    bo as k,
    E as Ne,
    n as Me,
    _ as ze,
    K as Le,
    O as He,
    J as Oe,
    ab as Ae,
    P as Fe,
    ac as Be,
    bp as Je,
    bq as je,
    N as Ke,
    Q as Ge,
    aU as Qe,
    R as $e,
    S as We,
    __tla as Xe
} from "./index-6c08ea4c.js";

import {
    _ as Ze
} from "./step2Banner-4d214de6.js";

import {
    d as ea
} from "./tree-05ea8e09.js";

import {
    u as aa,
    c as la,
    b as sa,
    d as ta,
    I as ve,
    J as ia,
    K as ua,
    a as da,
    L as ra,
    p as oa,
    o as na,
    q as pa,
    M as ma,
    __tla as ca
} from "./index-9567cbf6.js";

import {
    _ as va
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as ha,
    __tla as ga
} from "./index-ef4d146e.js";

let he, fa = Promise.all([ (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})() ]).then(async () => {
    let O, A, F, B, J, j, K, G, Q, $, W, X, Z;
    O = {
        style: {
            width: "720px",
            margin: "0 auto"
        }
    }, A = {
        key: 0,
        style: {
            "text-align": "center",
            margin: "10px 0"
        }
    }, F = [ (w => ($e("data-v-84e39187"), w = w(), We(), w))(() => h("img", {
        src: Ze,
        alt: ""
    }, null, -1)) ], B = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "65px",
            cursor: "pointer"
        }
    }, J = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "105px",
            cursor: "pointer"
        }
    }, j = {
        class: "ktList"
    }, K = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "60px",
            cursor: "pointer"
        }
    }, G = {
        key: 0,
        class: "right"
    }, Q = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, $ = {
        class: "addLabelInput"
    }, W = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "105px",
            cursor: "pointer"
        }
    }, X = {
        style: {
            color: "#245FE6"
        }
    }, Z = {
        style: {
            "text-align": "center",
            "margin-top": "10px",
            padding: "10px 0",
            "box-shadow": "0px -10px 10px 0px rgba(0, 0, 0, 0.05)"
        }
    }, he = va({
        __name: "resourceSetting",
        props: {
            isfromTeaching: {
                type: Number,
                default: 0
            },
            scene: {
                type: String,
                required: !0,
                default: ""
            }
        },
        emits: [ "done" ],
        setup(w, {
            expose: ge,
            emit: fe
        }) {
            Ye(), Se();
            const c = Ue(), N = p(), E = p(!1), U = p([]), be = fe, ye = w, {
                isfromTeaching: R,
                scene: n
            } = qe(ye), e = p({
                parentId: "",
                ktIds: [],
                labels: [],
                isExamPoints: 1,
                isPublish: 0,
                publishTime: null,
                publishRange: 0,
                firstPlay: 0,
                isDownload: 0,
                endTime: null
            }), Ie = p({
                isExamPoints: [ {
                    required: !0,
                    message: "是否作为考核点不能为空",
                    trigger: "change"
                } ],
                isPublish: [ {
                    required: !0,
                    message: "是否发布不能为空",
                    trigger: "change"
                }, {
                    validator: (r, i, t) => {
                        e.value.isPublish != 2 || e.value.publishTime ? t() : t(new Error("发布时间不能为空"));
                    },
                    trigger: "blur"
                } ],
                publishRange: [ {
                    required: !0,
                    message: "发布范围不能为空",
                    trigger: "change"
                } ],
                firstPlay: [ {
                    required: !0,
                    message: "首次播放要求不能为空",
                    trigger: "change"
                } ],
                isDownload: [ {
                    required: !0,
                    message: "是否允许下载不能为空",
                    trigger: "change"
                } ],
                endTime: [ {
                    validator: (r, i, t) => {
                        e.value.publishTime && e.value.publishTime > e.value.endTime ? t(new Error("截止时间不能早于发布时间")) : t();
                    },
                    trigger: "blur"
                } ]
            }), ee = p([]), ae = p([]), le = p(0), C = p(!0), v = p(""), D = p({}), se = r => {
                v.value = "", r && (D.value = r, v.value = r.tagName), C.value = !1;
            }, xe = () => {
                v.value && (D.value.id ? aa({
                    tagName: v.value,
                    sourceType: 0,
                    teachCourseId: c.params.teachCourseId,
                    id: D.value.id
                }).then(r => {
                    q(), le.value++, D.value = {}, v.value = "", C.value = !0;
                }) : la({
                    tagName: v.value,
                    sourceType: 0,
                    teachCourseId: c.params.teachCourseId
                }).then(r => {
                    k({
                        type: "success",
                        message: "添加成功"
                    }), q(), le.value++, D.value = {}, v.value = "", C.value = !0;
                }));
            }, _e = () => {
                D.value = {}, v.value = "", C.value = !0;
            }, M = p(0), q = () => {
                sa({
                    teachCourseId: c.params.teachCourseId
                }).then(r => {
                    M.value++, ae.value = r;
                });
            }, y = p([]), Y = p([ !1, !1 ]), b = p(0), te = p(!1), ie = p(!1), ue = p(!1), Te = () => {
                N.value.validate(r => {
                    if (r) if (n.value == "add") {
                        var i = [];
                        y.value.forEach(d => {
                            i.push({
                                name: d.resName,
                                resType: d.resType,
                                ktName: d.ktNames,
                                dataId: d.eid,
                                resLink: d.resLink,
                                resExt: d.resExt,
                                resOriginId: d.id,
                                resPkgId: d.resPkgId,
                                resRootPkgId: d.resRootPkgId,
                                resIsNeu: d.resIsNeu
                            });
                        });
                        var t = {
                            teachCourseId: c.params.teachCourseId,
                            dirId: e.value.parentId || "",
                            sourceType: R.value == 1 ? 1 : 6,
                            isAssess: e.value.isExamPoints,
                            ktIds: [],
                            tagIds: e.value.labels,
                            resDetailList: i,
                            resClassCtlResp: {
                                isOpen: e.value.isPublish ? 1 : 0,
                                range: e.value.publishRange,
                                currentTeachClassId: c.params.classId,
                                openType: e.value.isPublish && e.value.isPublish == 1 ? 0 : e.value.isPublish && e.value.isPublish == 2 ? 1 : null,
                                isDownload: e.value.isDownload,
                                isDrag: e.value.firstPlay,
                                openTimeStr: e.value.publishTime,
                                closeTimeStr: e.value.endTime
                            }
                        };
                        ra(t).then(d => {
                            k({
                                message: "操作成功",
                                type: "success"
                            }), P(2);
                        });
                    } else n.value == "publish" && R.value == 0 ? oa({
                        isOpen: e.value.isPublish ? 1 : 0,
                        range: e.value.publishRange,
                        currentTeachClassId: c.params.classId,
                        resIds: y.value.map(d => d.id),
                        teachCourseId: c.params.teachCourseId,
                        openType: e.value.isPublish == 1 ? 0 : 1,
                        isDownload: e.value.isDownload,
                        isDrag: e.value.firstPlay,
                        openTimeStr: e.value.publishTime,
                        closeTimeStr: e.value.endTime
                    }).then(d => {
                        k({
                            message: "操作成功",
                            type: "success"
                        }), P(2);
                    }) : n.value == "publish" && R.value == 1 ? b.value ? na({
                        isOpen: e.value.isPublish ? 1 : 0,
                        range: e.value.publishRange,
                        currentTeachClassId: c.params.classId,
                        resId: y.value[0].id,
                        teachCourseId: c.params.teachCourseId,
                        openType: e.value.isPublish && e.value.isPublish == 1 ? 0 : 1,
                        isDownload: e.value.isDownload,
                        isDrag: e.value.firstPlay,
                        openTimeStr: e.value.publishTime,
                        closeTimeStr: e.value.endTime
                    }).then(d => {
                        k({
                            message: "操作成功",
                            type: "success"
                        }), P(2);
                    }) : pa({
                        isOpen: e.value.isPublish ? 1 : 0,
                        range: e.value.publishRange,
                        currentTeachClassId: c.params.classId,
                        resIds: y.value.map(d => d.id),
                        teachCourseId: c.params.teachCourseId,
                        openType: e.value.isPublish && e.value.isPublish == 1 ? 0 : 1,
                        isDownload: e.value.isDownload,
                        isDrag: e.value.firstPlay,
                        openTimeStr: e.value.publishTime,
                        closeTimeStr: e.value.endTime
                    }).then(d => {
                        k({
                            message: "操作成功",
                            type: "success"
                        }), P(2);
                    }) : n.value == "set" && ma({
                        resIds: y.value.map(d => d.id),
                        dirId: e.value.parentId || "",
                        isAssess: e.value.isExamPoints,
                        ktIds: [],
                        tagIds: e.value.labels
                    }).then(d => {
                        k({
                            message: "操作成功",
                            type: "success"
                        }), P(2);
                    });
                });
            }, de = () => {
                e.value = {
                    parentId: "",
                    ktIds: [],
                    labels: [],
                    isExamPoints: 1,
                    isPublish: 0,
                    publishTime: null,
                    publishRange: 0,
                    firstPlay: 0,
                    isDownload: 0,
                    endTime: null
                }, Y.value = [ !1, !1 ], C.value = !0, v.value = "", b.value = 0, 
                te.value = !1, ue.value = !1, ie.value = !1;
            }, P = r => {
                r && be("done", r), E.value = !1;
            };
            return ge({
                open: (r, i) => {
                    de(), r.length && (r.forEach(t => {
                        [ 1, 2 ].includes(t.resType) ? Y.value[0] = !0 : [ 3, 4, 7 ].includes(t.resType) && (Y.value[1] = !0);
                    }), y.value = r), E.value = !0, Me(() => {
                        N.value.clearValidate(), n.value == "publish" ? (e.value.isPublish = 1, 
                        i && ve({
                            resId: r[0].id,
                            currenClassId: c.params.classId
                        }).then(t => {
                            e.value.isPublish = t.resCtl.openType ? 2 : 1, e.value.publishTime = t.resCtl.openTimeStr, 
                            e.value.publishRange = 0, e.value.firstPlay = t.resCtl.isDrag, 
                            e.value.isDownload = t.resCtl.isDownload, e.value.endTime = t.resCtl.closeTimeStr, 
                            b.value = t.status - 1, [ 2, 3 ].includes(b.value) && (te.value = !0), 
                            t.resCtl.openType ? Date.parse(e.value.publishTime) > new Date().getTime() && (ie.value = !0) : ue.value = !0;
                        })) : n.value == "set" && r.length == 1 && ve({
                            resId: r[0].id,
                            currenClassId: c.params.classId
                        }).then(t => {
                            e.value.parentId = t.dirId, e.value.ktIds = t.ktList, 
                            e.value.labels = t.tagList.map(d => d.tagId), e.value.isExamPoints = t.isAssess;
                        }), n.value == "publish" ? y.value.length == 1 && ia({
                            currenClassId: c.params.classId,
                            teachCourseId: c.params.teachCourseId,
                            resId: y.value[0].id
                        }).then(t => {
                            U.value = t.teachClassList || [];
                        }) : ua({
                            teachCourseId: c.params.teachCourseId
                        }).then(t => {
                            U.value = t;
                        });
                    }), q(), da({
                        teachCourseId: c.params.teachCourseId
                    }).then(t => {
                        ee.value = t;
                    });
                }
            }), (r, i) => {
                const t = ze, d = Le, Ce = ha, I = He, x = Oe, Pe = Ae, ke = Fe, De = Be, f = Je, S = je, re = Ke, Ve = Ge, we = Qe;
                return m(), _(we, {
                    modelValue: a(E),
                    "onUpdate:modelValue": i[13] || (i[13] = u => pe(E) ? E.value = u : null),
                    "modal-class": "resourceSetting",
                    title: a(n) == "add" || a(n) == "set" ? "资料设置" : "资源发布",
                    width: "1200px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: de
                }, {
                    default: l(() => [ h("div", O, [ a(n) == "add" ? (m(), T("div", A, F)) : g("", !0), s(Ve, {
                        ref_key: "formRef",
                        ref: N,
                        "label-position": "top",
                        "label-width": "90px",
                        model: a(e),
                        rules: a(Ie),
                        style: {
                            height: "535px",
                            "overflow-y": "scroll",
                            padding: "0 15px"
                        }
                    }, {
                        default: l(() => [ a(n) == "add" || a(n) == "set" ? (m(), 
                        T(V, {
                            key: 0
                        }, [ s(I, {
                            label: "所属目录",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: l(() => [ h("div", B, [ s(d, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：关联课程目录后本次所选择资料可在相应目录下展示"
                            }, {
                                default: l(() => [ s(t, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), s(Ce, {
                                modelValue: a(e).parentId,
                                "onUpdate:modelValue": i[0] || (i[0] = u => a(e).parentId = u),
                                data: a(ee),
                                "check-strictly": "",
                                "render-after-expand": !1,
                                placeholder: "请选择所属目录",
                                style: {
                                    width: "calc(100% - 20px)"
                                },
                                filterable: "",
                                props: a(ea),
                                clearable: ""
                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }), s(I, {
                            label: "关联知识技能点",
                            style: {
                                width: "calc(100% - 20px)",
                                position: "relative"
                            }
                        }, {
                            default: l(() => [ h("div", J, [ s(d, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：关联当前课程知识图谱下知识技能点，该资源学习情况可用于后续知识技能点达成情况考核"
                            }, {
                                default: l(() => [ s(t, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), h("div", j, [ s(x, {
                                round: "",
                                size: "small",
                                class: "pointsItem"
                            }, {
                                default: l(() => [ o("知识点1  "), s(t, {
                                    icon: "ep:circle-close-filled",
                                    color: "#BED0F8",
                                    size: 14
                                }) ]),
                                _: 1
                            }), s(x, {
                                round: "",
                                size: "small",
                                style: {
                                    color: "#333",
                                    "line-height": "14px"
                                }
                            }, {
                                default: l(() => [ s(t, {
                                    icon: "ep:plus",
                                    color: "#333",
                                    size: 14
                                }), o(" 添加") ]),
                                _: 1
                            }) ]) ]),
                            _: 1
                        }), s(I, {
                            label: "资料标签",
                            style: {
                                width: "calc(100% - 20px)",
                                position: "relative"
                            }
                        }, {
                            default: l(() => [ h("div", K, [ s(d, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：标签用于提醒学生该资料适用的学习阶段/场景/方式等，每个资料最多可关联3个标签"
                            }, {
                                default: l(() => [ s(t, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), (m(), _(De, {
                                modelValue: a(e).labels,
                                "onUpdate:modelValue": i[2] || (i[2] = u => a(e).labels = u),
                                key: a(M),
                                multiple: "",
                                placeholder: "请选择教学资料标签",
                                style: {
                                    width: "calc(100% - 20px)"
                                },
                                "multiple-limit": 3
                            }, {
                                footer: l(() => [ oe(s(x, {
                                    onClick: se,
                                    size: "small",
                                    type: "primary",
                                    text: ""
                                }, {
                                    default: l(() => [ s(t, {
                                        icon: "ep:plus",
                                        color: "#245FE6",
                                        style: {
                                            position: "relative",
                                            top: "-1px"
                                        }
                                    }), o(" 新建") ]),
                                    _: 1
                                }, 512), [ [ ne, a(C) ] ]), oe(h("div", $, [ s(ke, {
                                    modelValue: a(v),
                                    "onUpdate:modelValue": i[1] || (i[1] = u => pe(v) ? v.value = u : null),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    maxlength: 5,
                                    style: {
                                        "max-width": "520px"
                                    },
                                    placeholder: "请输入标签名称"
                                }, {
                                    append: l(() => [ h("div", {
                                        style: {
                                            "padding-left": "12px",
                                            "padding-right": "12px"
                                        },
                                        onClick: xe
                                    }, "保存") ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), s(x, {
                                    type: "primary",
                                    text: "",
                                    style: {
                                        "margin-left": "10px"
                                    },
                                    onClick: _e
                                }, {
                                    default: l(() => [ o("取消") ]),
                                    _: 1
                                }) ], 512), [ [ ne, !a(C) ] ]) ]),
                                default: l(() => [ (m(!0), T(V, null, me(a(ae), u => (m(), 
                                _(Pe, {
                                    key: u.id + a(M),
                                    label: u.tagName,
                                    value: u.id
                                }, {
                                    default: l(() => [ u.sourceType || u.showhandle ? g("", !0) : (m(), 
                                    T("div", G, [ s(x, {
                                        type: "primary",
                                        style: {
                                            padding: "0px"
                                        },
                                        onClick: ce(z => se(u), [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: l(() => [ o("编辑") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]), s(x, {
                                        type: "danger",
                                        style: {
                                            padding: "0px 10px 0 0"
                                        },
                                        onClick: ce(z => {
                                            return L = u, void Ne.confirm("确定要删除该标签吗？", "提示", {
                                                confirmButtonText: "确认",
                                                cancelButtonText: "取消"
                                            }).then(() => {
                                                ta({
                                                    id: L.id
                                                }).then(ba => {
                                                    k({
                                                        message: "操作成功",
                                                        type: "success"
                                                    }), e.value.labels.forEach((Ee, Re) => {
                                                        Ee == L.id && e.value.labels.splice(Re, 1);
                                                    }), q();
                                                });
                                            }).catch(() => {});
                                            var L;
                                        }, [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: l(() => [ o("删除") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])), h("div", Q, H(u.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ])) ]),
                            _: 1
                        }) ], 64)) : g("", !0), !a(R) || a(n) != "add" && a(n) != "set" ? g("", !0) : (m(), 
                        _(I, {
                            key: 1,
                            prop: "isExamPoints",
                            label: "是否作为考核点",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: l(() => [ h("div", W, [ s(d, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：设置为考核点的资料，其学生学习完成情况数据将纳入课程成绩考核"
                            }, {
                                default: l(() => [ s(t, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), s(S, {
                                modelValue: a(e).isExamPoints,
                                "onUpdate:modelValue": i[3] || (i[3] = u => a(e).isExamPoints = u)
                            }, {
                                default: l(() => [ s(f, {
                                    value: 1
                                }, {
                                    default: l(() => [ o("是") ]),
                                    _: 1
                                }), s(f, {
                                    value: 0
                                }, {
                                    default: l(() => [ o("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })), a(R) && a(n) == "add" || a(n) == "publish" ? (m(), 
                        T(V, {
                            key: 2
                        }, [ s(I, {
                            prop: "isPublish",
                            label: "是否发布",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: l(() => [ s(S, {
                                modelValue: a(e).isPublish,
                                "onUpdate:modelValue": i[4] || (i[4] = u => a(e).isPublish = u),
                                style: {
                                    "margin-right": "20px"
                                },
                                onChange: i[5] || (i[5] = u => a(e).publishTime = null),
                                disabled: a(b) == 2 || a(b) == 3
                            }, {
                                default: l(() => [ a(n) == "add" ? (m(), _(f, {
                                    key: 0,
                                    value: 0
                                }, {
                                    default: l(() => [ o("暂不发布") ]),
                                    _: 1
                                })) : g("", !0), s(f, {
                                    value: 1
                                }, {
                                    default: l(() => [ o("立即发布") ]),
                                    _: 1
                                }), s(f, {
                                    value: 2
                                }, {
                                    default: l(() => [ o("定时发布") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]), a(e).isPublish == 2 ? (m(), 
                            _(re, {
                                key: 0,
                                disabled: a(b) == 2 || a(b) == 3,
                                modelValue: a(e).publishTime,
                                "onUpdate:modelValue": i[6] || (i[6] = u => a(e).publishTime = u),
                                type: "datetime",
                                placeholder: "请选择发布时间",
                                format: "YYYY-MM-DD HH:mm:ss",
                                "value-format": "YYYY-MM-DD HH:mm:ss"
                            }, null, 8, [ "disabled", "modelValue" ])) : g("", !0) ]),
                            _: 1
                        }), a(e).isPublish != 0 ? (m(), T(V, {
                            key: 0
                        }, [ s(I, {
                            prop: "publishRange",
                            label: "发布范围"
                        }, {
                            default: l(() => [ s(S, {
                                modelValue: a(e).publishRange,
                                "onUpdate:modelValue": i[7] || (i[7] = u => a(e).publishRange = u),
                                disabled: !(a(n) == "add" || a(b) == 0)
                            }, {
                                default: l(() => [ s(f, {
                                    value: 0
                                }, {
                                    default: l(() => [ o("当前班级") ]),
                                    _: 1
                                }), s(f, {
                                    value: 1
                                }, {
                                    default: l(() => [ o("全部班级 "), a(n) == "publish" && a(y).length > 1 || a(n) == "publish" && [ 1, 2, 3 ].includes(a(b)) ? g("", !0) : (m(), 
                                    T(V, {
                                        key: 0
                                    }, [ o("（ "), s(d, {
                                        class: "box-item",
                                        effect: "light",
                                        placement: "right"
                                    }, {
                                        content: l(() => [ (m(!0), T(V, null, me(a(U), (u, z) => (m(), 
                                        T("div", {
                                            key: z
                                        }, H(u.name), 1))), 128)) ]),
                                        default: l(() => [ h("span", X, H(a(U).length), 1) ]),
                                        _: 1
                                    }), o(" ） ") ], 64)) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), a(Y)[0] ? (m(), _(I, {
                            key: 0,
                            prop: "firstPlay",
                            label: "首次播放要求"
                        }, {
                            default: l(() => [ s(S, {
                                modelValue: a(e).firstPlay,
                                "onUpdate:modelValue": i[8] || (i[8] = u => a(e).firstPlay = u)
                            }, {
                                default: l(() => [ s(f, {
                                    value: 1
                                }, {
                                    default: l(() => [ o("允许拖动") ]),
                                    _: 1
                                }), s(f, {
                                    value: 0
                                }, {
                                    default: l(() => [ o("不允许拖动") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : g("", !0), a(Y)[1] ? (m(), _(I, {
                            key: 1,
                            prop: "isDownload",
                            label: "是否允许下载"
                        }, {
                            default: l(() => [ s(S, {
                                modelValue: a(e).isDownload,
                                "onUpdate:modelValue": i[9] || (i[9] = u => a(e).isDownload = u)
                            }, {
                                default: l(() => [ s(f, {
                                    value: 1
                                }, {
                                    default: l(() => [ o("是") ]),
                                    _: 1
                                }), s(f, {
                                    value: 0
                                }, {
                                    default: l(() => [ o("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : g("", !0), s(I, {
                            label: "截止时间",
                            prop: "endTime",
                            class: "endTimeClass"
                        }, {
                            default: l(() => [ s(re, {
                                modelValue: a(e).endTime,
                                "onUpdate:modelValue": i[10] || (i[10] = u => a(e).endTime = u),
                                type: "datetime",
                                placeholder: "请选择截止时间",
                                format: "YYYY-MM-DD HH:mm:ss",
                                "value-format": "YYYY-MM-DD HH:mm:ss",
                                style: {
                                    display: "inline-block"
                                }
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ], 64)) : g("", !0) ], 64)) : g("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]), h("div", Z, [ s(x, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: i[11] || (i[11] = u => P(1))
                    }, {
                        default: l(() => [ o("取消") ]),
                        _: 1
                    }), a(n) == "add" ? (m(), _(x, {
                        key: 0,
                        style: {
                            "margin-right": "20px",
                            "margin-left": "20px"
                        },
                        onClick: i[12] || (i[12] = u => P(0))
                    }, {
                        default: l(() => [ o("上一步") ]),
                        _: 1
                    })) : g("", !0), s(x, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: Te
                    }, {
                        default: l(() => [ o("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-84e39187" ] ]);
});

export {
    fa as __tla,
    he as default
};