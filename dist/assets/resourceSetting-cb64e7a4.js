import {
    h as Ee,
    u as De,
    T as Ve,
    r as o,
    b0 as Ne,
    a0 as Re,
    o as g,
    C as P,
    l as t,
    t as m,
    a as i,
    c as V,
    D as C,
    k as s,
    F as se,
    v,
    A as te,
    G as ie,
    m as ue,
    y as qe,
    H as re,
    B as Se,
    bo as b,
    E as ze,
    n as Ae,
    _ as Be,
    K as Ue,
    O as Le,
    J as Oe,
    ab as Fe,
    P as je,
    ac as Je,
    bp as Ge,
    bq as He,
    Q as Ke,
    aU as Me,
    R as Qe,
    S as Ye,
    __tla as We
} from "./index-6c08ea4c.js";

import {
    _ as Xe
} from "./step2Banner-4d214de6.js";

import {
    d as Ze
} from "./tree-05ea8e09.js";

import {
    u as $e,
    c as ea,
    a as aa,
    d as la,
    b as de,
    g as sa,
    e as ta,
    s as ia,
    __tla as ua
} from "./pkgManage-4e23f8a8.js";

import {
    p as ra,
    o as da,
    q as oa,
    __tla as na
} from "./index-9567cbf6.js";

import {
    _ as pa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as ca,
    __tla as ma
} from "./index-ef4d146e.js";

let oe, va = Promise.all([ (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})() ]).then(async () => {
    let A, B, U, L, O, F, j, J, G, H, K, M;
    A = {
        style: {
            width: "720px",
            margin: "0 auto"
        }
    }, B = {
        key: 0,
        style: {
            "text-align": "center",
            margin: "10px 0"
        }
    }, U = [ (_ => (Qe("data-v-99465871"), _ = _(), Ye(), _))(() => m("img", {
        src: Xe,
        alt: ""
    }, null, -1)) ], L = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "65px",
            cursor: "pointer"
        }
    }, O = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "105px",
            cursor: "pointer"
        }
    }, F = {
        class: "ktList"
    }, j = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "60px",
            cursor: "pointer"
        }
    }, J = {
        key: 0,
        class: "right"
    }, G = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, H = {
        class: "addLabelInput"
    }, K = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "105px",
            cursor: "pointer"
        }
    }, M = {
        style: {
            "text-align": "center",
            "margin-top": "10px",
            padding: "10px 0",
            "box-shadow": "0px -10px 10px 0px rgba(0, 0, 0, 0.05)"
        }
    }, oe = pa({
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
        setup(_, {
            expose: ne,
            emit: pe
        }) {
            Ee(), De();
            const n = Ve(), N = o(), k = o(!1), R = Ne("basicInformation"), ce = pe, me = _, {
                isfromTeaching: T,
                scene: p
            } = Re(me), e = o({
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
            }), ve = o({
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
                    validator: (r, u, a) => {
                        e.value.isPublish != 2 || e.value.publishTime ? a() : a(new Error("发布时间不能为空"));
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
                    validator: (r, u, a) => {
                        e.value.publishTime && e.value.publishTime > e.value.endTime ? a(new Error("截止时间不能早于发布时间")) : a();
                    },
                    trigger: "blur"
                } ]
            }), Q = o([]), Y = o([]), W = o(0), f = o(!0), c = o(""), x = o({}), X = r => {
                c.value = "", r && (x.value = r, c.value = r.tagName), f.value = !1;
            }, he = () => {
                c.value && (x.value.id ? $e({
                    tagName: c.value,
                    id: x.value.id
                }).then(r => {
                    w(), W.value++, x.value = {}, c.value = "", f.value = !0;
                }) : ea({
                    tagName: c.value,
                    sourceType: 0,
                    resPkgId: n.params.id,
                    resRootPkgId: R.value.neuPkgId,
                    resIsNeu: R.value && R.value.neuPkgId ? 1 : 0
                }).then(r => {
                    b({
                        type: "success",
                        message: "添加成功"
                    }), w(), W.value++, x.value = {}, c.value = "", f.value = !0;
                }));
            }, ge = () => {
                x.value = {}, c.value = "", f.value = !0;
            }, q = o(0), w = () => {
                aa(n.params.id).then(r => {
                    q.value++, Y.value = r;
                });
            }, I = o([]), S = o([ !1, !1 ]), E = o(0), Z = o(!1), $ = o(!1), ee = o(!1), fe = () => {
                N.value.validate(r => {
                    if (r) if (p.value == "add") {
                        var u = [];
                        I.value.forEach(l => {
                            u.push({
                                type: T.value == 1 ? 1 : 6,
                                name: l.resName,
                                resType: l.resType,
                                resExt: l.resExt,
                                dataId: l.eid,
                                resLink: l.resLink,
                                isAssess: e.value.isExamPoints,
                                resOriginId: l.id,
                                resPkgId: n.params.id,
                                resRootPkgId: l.neuPkgId,
                                resIsNeu: l.resIsNeu,
                                dirId: e.value.parentId || "",
                                ktIds: [],
                                tagIds: e.value.labels,
                                ktName: l.ktNames
                            });
                        });
                        var a = {
                            resPkgId: n.params.id,
                            courseResBaseArray: u
                        };
                        ta(a).then(l => {
                            b({
                                message: "操作成功",
                                type: "success"
                            }), y(2);
                        });
                    } else p.value == "publish" && T.value == 0 ? ra({
                        isOpen: e.value.isPublish ? 1 : 0,
                        range: e.value.publishRange,
                        currentTeachClassId: n.params.classId,
                        resIds: I.value.map(l => l.id),
                        teachCourseId: n.params.teachCourseId,
                        openType: e.value.isPublish == 1 ? 0 : 1,
                        isDownload: e.value.isDownload,
                        isDrag: e.value.firstPlay,
                        openTimeStr: e.value.publishTime,
                        closeTimeStr: e.value.endTime
                    }).then(l => {
                        b({
                            message: "操作成功",
                            type: "success"
                        }), y(2);
                    }) : p.value == "publish" && T.value == 1 ? E.value ? da({
                        isOpen: e.value.isPublish ? 1 : 0,
                        range: e.value.publishRange,
                        currentTeachClassId: n.params.classId,
                        resId: I.value[0].id,
                        teachCourseId: n.params.teachCourseId,
                        openType: e.value.isPublish && e.value.isPublish == 1 ? 0 : 1,
                        isDownload: e.value.isDownload,
                        isDrag: e.value.firstPlay,
                        openTimeStr: e.value.publishTime,
                        closeTimeStr: e.value.endTime
                    }).then(l => {
                        b({
                            message: "操作成功",
                            type: "success"
                        }), y(2);
                    }) : oa({
                        isOpen: e.value.isPublish ? 1 : 0,
                        range: e.value.publishRange,
                        currentTeachClassId: n.params.classId,
                        resIds: I.value.map(l => l.id),
                        teachCourseId: n.params.teachCourseId,
                        openType: e.value.isPublish && e.value.isPublish == 1 ? 0 : 1,
                        isDownload: e.value.isDownload,
                        isDrag: e.value.firstPlay,
                        openTimeStr: e.value.publishTime,
                        closeTimeStr: e.value.endTime
                    }).then(l => {
                        b({
                            message: "操作成功",
                            type: "success"
                        }), y(2);
                    }) : p.value == "set" && (u = [], I.value.forEach(l => {
                        u.push({
                            id: l.id,
                            name: l.resName,
                            dirId: e.value.parentId || "",
                            ktIds: [],
                            tagIds: e.value.labels,
                            type: T.value == 1 ? 1 : 6,
                            isAssess: e.value.isExamPoints
                        });
                    }), a = {
                        resPkgId: n.params.id,
                        courseResArray: u
                    }, ia(a).then(l => {
                        b({
                            message: "操作成功",
                            type: "success"
                        }), y(2);
                    }));
                });
            }, ae = () => {
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
                }, S.value = [ !1, !1 ], f.value = !0, c.value = "", E.value = 0, 
                Z.value = !1, ee.value = !1, $.value = !1;
            }, y = r => {
                r && ce("done", r), k.value = !1;
            };
            return ne({
                open: (r, u) => {
                    ae(), r.length && (r.forEach(a => {
                        [ 1, 2 ].includes(a.resType) ? S.value[0] = !0 : [ 3, 4, 7 ].includes(a.resType) && (S.value[1] = !0);
                    }), I.value = r), k.value = !0, Ae(() => {
                        N.value.clearValidate(), p.value == "publish" ? (e.value.isPublish = 1, 
                        u && de({
                            resId: r[0].id,
                            currenClassId: n.params.classId
                        }).then(a => {
                            e.value.isPublish = a.resCtl.openType ? 2 : 1, e.value.publishTime = a.resCtl.openTimeStr, 
                            e.value.publishRange = 0, e.value.firstPlay = a.resCtl.isDrag, 
                            e.value.isDownload = a.resCtl.isDownload, e.value.endTime = a.resCtl.closeTimeStr, 
                            E.value = a.status - 1, [ 2, 3 ].includes(E.value) && (Z.value = !0), 
                            a.resCtl.openType ? Date.parse(e.value.publishTime) > new Date().getTime() && ($.value = !0) : ee.value = !0;
                        })) : p.value == "set" && r.length == 1 && de(r[0].id).then(a => {
                            e.value.parentId = a.dirId, e.value.ktIds = a.ktList, 
                            e.value.labels = a.tags.map(l => l.id), e.value.isExamPoints = a.isAssess;
                        });
                    }), w(), sa(n.params.id).then(a => {
                        Q.value = a;
                    });
                }
            }), (r, u) => {
                const a = Be, l = Ue, ye = ca, D = Le, h = Oe, be = Fe, xe = je, Ie = Je, le = Ge, _e = He, ke = Ke, Te = Me;
                return g(), P(Te, {
                    modelValue: i(k),
                    "onUpdate:modelValue": u[6] || (u[6] = d => ue(k) ? k.value = d : null),
                    "modal-class": "resourceSetting",
                    title: i(p) == "add" || i(p) == "set" ? "资料设置" : "资源发布",
                    width: "1200px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: ae
                }, {
                    default: t(() => [ m("div", A, [ i(p) == "add" ? (g(), V("div", B, U)) : C("", !0), s(ke, {
                        ref_key: "formRef",
                        ref: N,
                        "label-position": "top",
                        "label-width": "90px",
                        model: i(e),
                        rules: i(ve),
                        style: {
                            height: "535px",
                            "overflow-y": "auto",
                            padding: "0 15px"
                        }
                    }, {
                        default: t(() => [ i(p) == "add" || i(p) == "set" ? (g(), 
                        V(se, {
                            key: 0
                        }, [ s(D, {
                            label: "所属目录",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", L, [ s(l, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：关联课程目录后本次所选择资料可在相应目录下展示"
                            }, {
                                default: t(() => [ s(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), s(ye, {
                                modelValue: i(e).parentId,
                                "onUpdate:modelValue": u[0] || (u[0] = d => i(e).parentId = d),
                                data: i(Q),
                                "check-strictly": "",
                                "render-after-expand": !1,
                                placeholder: "请选择所属目录",
                                style: {
                                    width: "calc(100% - 20px)"
                                },
                                filterable: "",
                                props: i(Ze),
                                clearable: ""
                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }), s(D, {
                            label: "关联知识技能点",
                            style: {
                                width: "calc(100% - 20px)",
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", O, [ s(l, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：关联当前课程知识图谱下知识技能点，该资源学习情况可用于后续知识技能点达成情况考核"
                            }, {
                                default: t(() => [ s(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), m("div", F, [ s(h, {
                                round: "",
                                size: "small",
                                class: "pointsItem"
                            }, {
                                default: t(() => [ v("知识点1  "), s(a, {
                                    icon: "ep:circle-close-filled",
                                    color: "#BED0F8",
                                    size: 14
                                }) ]),
                                _: 1
                            }), s(h, {
                                round: "",
                                size: "small",
                                style: {
                                    color: "#333",
                                    "line-height": "14px"
                                }
                            }, {
                                default: t(() => [ s(a, {
                                    icon: "ep:plus",
                                    color: "#333",
                                    size: 14
                                }), v(" 添加") ]),
                                _: 1
                            }) ]) ]),
                            _: 1
                        }), s(D, {
                            label: "资料标签",
                            style: {
                                width: "calc(100% - 20px)",
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", j, [ s(l, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：标签用于提醒学生该资料适用的学习阶段/场景/方式等，每个资料最多可关联3个标签"
                            }, {
                                default: t(() => [ s(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), (g(), P(Ie, {
                                modelValue: i(e).labels,
                                "onUpdate:modelValue": u[2] || (u[2] = d => i(e).labels = d),
                                key: i(q),
                                multiple: "",
                                placeholder: "请选择教学资料标签",
                                style: {
                                    width: "calc(100% - 20px)"
                                },
                                "multiple-limit": 3
                            }, {
                                footer: t(() => [ te(s(h, {
                                    onClick: X,
                                    size: "small",
                                    type: "primary",
                                    text: ""
                                }, {
                                    default: t(() => [ s(a, {
                                        icon: "ep:plus",
                                        color: "#245FE6",
                                        style: {
                                            position: "relative",
                                            top: "-1px"
                                        }
                                    }), v(" 新建") ]),
                                    _: 1
                                }, 512), [ [ ie, i(f) ] ]), te(m("div", H, [ s(xe, {
                                    modelValue: i(c),
                                    "onUpdate:modelValue": u[1] || (u[1] = d => ue(c) ? c.value = d : null),
                                    modelModifiers: {
                                        trim: !0
                                    },
                                    maxlength: 5,
                                    style: {
                                        "max-width": "520px"
                                    },
                                    placeholder: "请输入标签名称"
                                }, {
                                    append: t(() => [ m("div", {
                                        style: {
                                            "padding-left": "12px",
                                            "padding-right": "12px"
                                        },
                                        onClick: he
                                    }, "保存") ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), s(h, {
                                    type: "primary",
                                    text: "",
                                    style: {
                                        "margin-left": "10px"
                                    },
                                    onClick: ge
                                }, {
                                    default: t(() => [ v("取消") ]),
                                    _: 1
                                }) ], 512), [ [ ie, !i(f) ] ]) ]),
                                default: t(() => [ (g(!0), V(se, null, qe(i(Y), d => (g(), 
                                P(be, {
                                    key: d.id + i(q),
                                    label: d.tagName,
                                    value: d.id
                                }, {
                                    default: t(() => [ d.sourceType || d.showhandle ? C("", !0) : (g(), 
                                    V("div", J, [ s(h, {
                                        type: "primary",
                                        style: {
                                            padding: "0px"
                                        },
                                        onClick: re(Pe => X(d), [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: t(() => [ v("编辑") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]), s(h, {
                                        type: "danger",
                                        style: {
                                            padding: "0px 10px 0 0"
                                        },
                                        onClick: re(Pe => {
                                            return z = d, void ze.confirm("确定要删除该标签吗？", "提示", {
                                                confirmButtonText: "确认",
                                                cancelButtonText: "取消"
                                            }).then(() => {
                                                la({
                                                    id: z.id,
                                                    resPkgId: n.params.id
                                                }).then(ha => {
                                                    b({
                                                        message: "操作成功",
                                                        type: "success"
                                                    }), e.value.labels.forEach((Ce, we) => {
                                                        Ce == z.id && e.value.labels.splice(we, 1);
                                                    }), w();
                                                });
                                            }).catch(() => {});
                                            var z;
                                        }, [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: t(() => [ v("删除") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])), m("div", G, Se(d.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ])) ]),
                            _: 1
                        }) ], 64)) : C("", !0), !i(T) || i(p) != "add" && i(p) != "set" ? C("", !0) : (g(), 
                        P(D, {
                            key: 1,
                            prop: "isExamPoints",
                            label: "是否作为考核点",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", K, [ s(l, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：设置为考核点的资料，其学生学习完成情况数据将纳入课程成绩考核"
                            }, {
                                default: t(() => [ s(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), s(_e, {
                                modelValue: i(e).isExamPoints,
                                "onUpdate:modelValue": u[3] || (u[3] = d => i(e).isExamPoints = d)
                            }, {
                                default: t(() => [ s(le, {
                                    value: 1
                                }, {
                                    default: t(() => [ v("是") ]),
                                    _: 1
                                }), s(le, {
                                    value: 0
                                }, {
                                    default: t(() => [ v("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]), m("div", M, [ s(h, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: u[4] || (u[4] = d => y(1))
                    }, {
                        default: t(() => [ v("取消") ]),
                        _: 1
                    }), i(p) == "add" ? (g(), P(h, {
                        key: 0,
                        style: {
                            "margin-right": "20px",
                            "margin-left": "20px"
                        },
                        onClick: u[5] || (u[5] = d => y(0))
                    }, {
                        default: t(() => [ v("上一步") ]),
                        _: 1
                    })) : C("", !0), s(h, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: fe
                    }, {
                        default: t(() => [ v("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-99465871" ] ]);
});

export {
    va as __tla,
    oe as default
};