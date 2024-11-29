import {
    h as we,
    u as Ee,
    T as De,
    r as o,
    b0 as Le,
    a0 as Ve,
    o as g,
    C as k,
    l as t,
    t as m,
    a as i,
    c as L,
    D as P,
    k as l,
    F as le,
    v,
    A as se,
    G as te,
    m as ie,
    y as qe,
    H as ue,
    B as Se,
    bo as b,
    E as Ne,
    n as ze,
    _ as Re,
    K as Ue,
    O as Oe,
    J as Ae,
    ab as Be,
    P as Fe,
    ac as je,
    bp as Me,
    bq as Ge,
    Q as He,
    aU as Je,
    R as Ke,
    S as Qe,
    __tla as Ye
} from "./index-6c08ea4c.js";

import {
    _ as We
} from "./step2Banner-4d214de6.js";

import {
    d as Xe
} from "./tree-05ea8e09.js";

import {
    u as Ze,
    c as $e,
    a as ea,
    d as aa,
    f as re,
    g as la,
    h as sa,
    i as ta,
    __tla as ia
} from "./pkgManage-14933852.js";

import {
    p as ua,
    o as ra,
    q as da,
    __tla as oa
} from "./index-9567cbf6.js";

import {
    _ as na
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as pa,
    __tla as ca
} from "./index-ef4d146e.js";

let de, ma = Promise.all([ (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})() ]).then(async () => {
    let z, R, U, O, A, B, F, j, M, G, H, J;
    z = {
        style: {
            width: "720px",
            margin: "0 auto"
        }
    }, R = {
        key: 0,
        style: {
            "text-align": "center",
            margin: "10px 0"
        }
    }, U = [ (I => (Ke("data-v-51586a18"), I = I(), Qe(), I))(() => m("img", {
        src: We,
        alt: ""
    }, null, -1)) ], O = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "65px",
            cursor: "pointer"
        }
    }, A = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "105px",
            cursor: "pointer"
        }
    }, B = {
        class: "ktList"
    }, F = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "60px",
            cursor: "pointer"
        }
    }, j = {
        key: 0,
        class: "right"
    }, M = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, G = {
        class: "addLabelInput"
    }, H = {
        style: {
            position: "absolute",
            top: "-33px",
            left: "105px",
            cursor: "pointer"
        }
    }, J = {
        style: {
            "text-align": "center",
            "margin-top": "10px",
            padding: "10px 0",
            "box-shadow": "0px -10px 10px 0px rgba(0, 0, 0, 0.05)"
        }
    }, de = na({
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
        setup(I, {
            expose: oe,
            emit: ne
        }) {
            we(), Ee();
            const p = De(), V = o(), T = o(!1);
            Le("basicInformation");
            const pe = ne, ce = I, {
                isfromTeaching: C,
                scene: n
            } = Ve(ce), e = o({
                parentId: "",
                ktIdList: [],
                labels: [],
                isExamPoints: 1,
                isPublish: 0,
                publishTime: null,
                publishRange: 0,
                firstPlay: 0,
                isDownload: 0,
                endTime: null
            }), me = o({
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
            }), K = o([]), Q = o([]), Y = o(0), f = o(!0), c = o(""), x = o({}), W = r => {
                c.value = "", r && (x.value = r, c.value = r.tagName), f.value = !1;
            }, ve = () => {
                c.value && (x.value.id ? Ze({
                    sourceType: 0,
                    neuPkgId: p.params.id,
                    tagName: c.value,
                    id: x.value.id
                }).then(r => {
                    w(), Y.value++, x.value = {}, c.value = "", f.value = !0;
                }) : $e({
                    tagName: c.value,
                    sourceType: 0,
                    neuPkgId: p.params.id
                }).then(r => {
                    b({
                        type: "success",
                        message: "添加成功"
                    }), w(), Y.value++, x.value = {}, c.value = "", f.value = !0;
                }));
            }, he = () => {
                x.value = {}, c.value = "", f.value = !0;
            }, q = o(0), w = () => {
                ea({
                    id: p.params.id
                }).then(r => {
                    q.value++, Q.value = r;
                });
            }, _ = o([]), S = o([ !1, !1 ]), E = o(0), X = o(!1), Z = o(!1), $ = o(!1), ge = () => {
                V.value.validate(r => {
                    if (r) {
                        if (n.value == "add") {
                            var u = [];
                            _.value.forEach(s => {
                                u.push({
                                    type: C.value == 1 ? 1 : 6,
                                    name: s.resName,
                                    resType: s.resType,
                                    resExt: s.resExt,
                                    dataId: s.eid,
                                    resLink: s.resLink,
                                    isAssess: e.value.isExamPoints,
                                    neuPkgId: p.params.id,
                                    resOriginId: s.id,
                                    resPkgId: p.params.id,
                                    resRootPkgId: s.neuPkgId,
                                    resIsNeu: s.resIsNeu,
                                    dirId: e.value.parentId || "",
                                    ktIdList: [],
                                    tagIdList: e.value.labels,
                                    ktName: s.ktNames
                                });
                            }), sa({
                                voList: u,
                                ktIdList: [],
                                tagIdList: e.value.labels
                            }).then(s => {
                                b({
                                    message: "操作成功",
                                    type: "success"
                                }), y(2);
                            });
                        } else if (n.value == "publish" && C.value == 0) ua({
                            isOpen: e.value.isPublish ? 1 : 0,
                            range: e.value.publishRange,
                            currentTeachClassId: p.params.classId,
                            resIds: _.value.map(s => s.id),
                            teachCourseId: p.params.teachCourseId,
                            openType: e.value.isPublish == 1 ? 0 : 1,
                            isDownload: e.value.isDownload,
                            isDrag: e.value.firstPlay,
                            openTimeStr: e.value.publishTime,
                            closeTimeStr: e.value.endTime
                        }).then(s => {
                            b({
                                message: "操作成功",
                                type: "success"
                            }), y(2);
                        }); else if (n.value == "publish" && C.value == 1) E.value ? ra({
                            isOpen: e.value.isPublish ? 1 : 0,
                            range: e.value.publishRange,
                            currentTeachClassId: p.params.classId,
                            resId: _.value[0].id,
                            teachCourseId: p.params.teachCourseId,
                            openType: e.value.isPublish && e.value.isPublish == 1 ? 0 : 1,
                            isDownload: e.value.isDownload,
                            isDrag: e.value.firstPlay,
                            openTimeStr: e.value.publishTime,
                            closeTimeStr: e.value.endTime
                        }).then(s => {
                            b({
                                message: "操作成功",
                                type: "success"
                            }), y(2);
                        }) : da({
                            isOpen: e.value.isPublish ? 1 : 0,
                            range: e.value.publishRange,
                            currentTeachClassId: p.params.classId,
                            resIds: _.value.map(s => s.id),
                            teachCourseId: p.params.teachCourseId,
                            openType: e.value.isPublish && e.value.isPublish == 1 ? 0 : 1,
                            isDownload: e.value.isDownload,
                            isDrag: e.value.firstPlay,
                            openTimeStr: e.value.publishTime,
                            closeTimeStr: e.value.endTime
                        }).then(s => {
                            b({
                                message: "操作成功",
                                type: "success"
                            }), y(2);
                        }); else if (n.value == "set") {
                            u = [], _.value.forEach(s => {
                                u.push(s.id);
                            });
                            var a = {
                                resIds: u,
                                dirId: e.value.parentId || "",
                                isAssess: e.value.isExamPoints,
                                ktIds: [],
                                tagIds: e.value.labels
                            };
                            ta(a).then(s => {
                                b({
                                    message: "操作成功",
                                    type: "success"
                                }), y(2);
                            });
                        }
                    }
                });
            }, ee = () => {
                e.value = {
                    parentId: "",
                    ktIdList: [],
                    labels: [],
                    isExamPoints: 1,
                    isPublish: 0,
                    publishTime: null,
                    publishRange: 0,
                    firstPlay: 0,
                    isDownload: 0,
                    endTime: null
                }, S.value = [ !1, !1 ], f.value = !0, c.value = "", E.value = 0, 
                X.value = !1, $.value = !1, Z.value = !1;
            }, y = r => {
                r && pe("done", r), T.value = !1;
            };
            return oe({
                open: (r, u) => {
                    ee(), r.length && (r.forEach(a => {
                        [ 1, 2 ].includes(a.resType) ? S.value[0] = !0 : [ 3, 4, 7 ].includes(a.resType) && (S.value[1] = !0);
                    }), _.value = r), T.value = !0, ze(() => {
                        V.value.clearValidate(), n.value == "publish" ? (e.value.isPublish = 1, 
                        u && re({
                            resId: r[0].id,
                            currenClassId: p.params.classId
                        }).then(a => {
                            e.value.isPublish = a.resCtl.openType ? 2 : 1, e.value.publishTime = a.resCtl.openTimeStr, 
                            e.value.publishRange = 0, e.value.firstPlay = a.resCtl.isDrag, 
                            e.value.isDownload = a.resCtl.isDownload, e.value.endTime = a.resCtl.closeTimeStr, 
                            E.value = a.status - 1, [ 2, 3 ].includes(E.value) && (X.value = !0), 
                            a.resCtl.openType ? Date.parse(e.value.publishTime) > new Date().getTime() && (Z.value = !0) : $.value = !0;
                        })) : n.value == "set" && r.length == 1 && re({
                            id: r[0].id
                        }).then(a => {
                            e.value.parentId = a.dirId, e.value.ktIdList = a.ktList, 
                            e.value.labels = a.tagList && a.tagList.length ? a.tagList.map(s => s.id) : [], 
                            e.value.isExamPoints = a.isAssess;
                        });
                    }), w(), la({
                        neuPkgId: p.params.id
                    }).then(a => {
                        K.value = a;
                    });
                }
            }), (r, u) => {
                const a = Re, s = Ue, fe = pa, D = Oe, h = Ae, ye = Be, be = Fe, xe = je, ae = Me, _e = Ge, Ie = He, Te = Je;
                return g(), k(Te, {
                    modelValue: i(T),
                    "onUpdate:modelValue": u[6] || (u[6] = d => ie(T) ? T.value = d : null),
                    "modal-class": "resourceSetting",
                    title: i(n) == "add" || i(n) == "set" ? "资料设置" : "资源发布",
                    width: "1200px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: ee
                }, {
                    default: t(() => [ m("div", z, [ i(n) == "add" ? (g(), L("div", R, U)) : P("", !0), l(Ie, {
                        ref_key: "formRef",
                        ref: V,
                        "label-position": "top",
                        "label-width": "90px",
                        model: i(e),
                        rules: i(me),
                        style: {
                            height: "535px",
                            "overflow-y": "scroll",
                            padding: "0 15px"
                        }
                    }, {
                        default: t(() => [ i(n) == "add" || i(n) == "set" ? (g(), 
                        L(le, {
                            key: 0
                        }, [ l(D, {
                            label: "所属目录",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", O, [ l(s, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：关联课程目录后本次所选择资料可在相应目录下展示"
                            }, {
                                default: t(() => [ l(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), l(fe, {
                                modelValue: i(e).parentId,
                                "onUpdate:modelValue": u[0] || (u[0] = d => i(e).parentId = d),
                                data: i(K),
                                "check-strictly": "",
                                "render-after-expand": !1,
                                placeholder: "请选择所属目录",
                                style: {
                                    width: "calc(100% - 20px)"
                                },
                                filterable: "",
                                props: i(Xe),
                                clearable: ""
                            }, null, 8, [ "modelValue", "data", "props" ]) ]),
                            _: 1
                        }), l(D, {
                            label: "关联知识技能点",
                            style: {
                                width: "calc(100% - 20px)",
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", A, [ l(s, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：关联当前课程知识图谱下知识技能点，该资源学习情况可用于后续知识技能点达成情况考核"
                            }, {
                                default: t(() => [ l(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), m("div", B, [ l(h, {
                                round: "",
                                size: "small",
                                class: "pointsItem"
                            }, {
                                default: t(() => [ v("知识点1  "), l(a, {
                                    icon: "ep:circle-close-filled",
                                    color: "#BED0F8",
                                    size: 14
                                }) ]),
                                _: 1
                            }), l(h, {
                                round: "",
                                size: "small",
                                style: {
                                    color: "#333",
                                    "line-height": "14px"
                                }
                            }, {
                                default: t(() => [ l(a, {
                                    icon: "ep:plus",
                                    color: "#333",
                                    size: 14
                                }), v(" 添加") ]),
                                _: 1
                            }) ]) ]),
                            _: 1
                        }), l(D, {
                            label: "资料标签",
                            style: {
                                width: "calc(100% - 20px)",
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", F, [ l(s, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：标签用于提醒学生该资料适用的学习阶段/场景/方式等，每个资料最多可关联3个标签"
                            }, {
                                default: t(() => [ l(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), (g(), k(xe, {
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
                                footer: t(() => [ se(l(h, {
                                    onClick: W,
                                    size: "small",
                                    type: "primary",
                                    text: ""
                                }, {
                                    default: t(() => [ l(a, {
                                        icon: "ep:plus",
                                        color: "#245FE6",
                                        style: {
                                            position: "relative",
                                            top: "-1px"
                                        }
                                    }), v(" 新建") ]),
                                    _: 1
                                }, 512), [ [ te, i(f) ] ]), se(m("div", G, [ l(be, {
                                    modelValue: i(c),
                                    "onUpdate:modelValue": u[1] || (u[1] = d => ie(c) ? c.value = d : null),
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
                                        onClick: ve
                                    }, "保存") ]),
                                    _: 1
                                }, 8, [ "modelValue" ]), l(h, {
                                    type: "primary",
                                    text: "",
                                    style: {
                                        "margin-left": "10px"
                                    },
                                    onClick: he
                                }, {
                                    default: t(() => [ v("取消") ]),
                                    _: 1
                                }) ], 512), [ [ te, !i(f) ] ]) ]),
                                default: t(() => [ (g(!0), L(le, null, qe(i(Q), d => (g(), 
                                k(ye, {
                                    key: d.id + i(q),
                                    label: d.tagName,
                                    value: d.id
                                }, {
                                    default: t(() => [ d.sourceType || d.showhandle ? P("", !0) : (g(), 
                                    L("div", j, [ l(h, {
                                        type: "primary",
                                        style: {
                                            padding: "0px"
                                        },
                                        onClick: ue(ke => W(d), [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: t(() => [ v("编辑") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]), l(h, {
                                        type: "danger",
                                        style: {
                                            padding: "0px 10px 0 0"
                                        },
                                        onClick: ue(ke => {
                                            return N = d, void Ne.confirm("确定要删除该标签吗？", "提示", {
                                                confirmButtonText: "确认",
                                                cancelButtonText: "取消"
                                            }).then(() => {
                                                aa({
                                                    id: N.id
                                                }).then(va => {
                                                    b({
                                                        message: "操作成功",
                                                        type: "success"
                                                    }), e.value.labels.forEach((Pe, Ce) => {
                                                        Pe == N.id && e.value.labels.splice(Ce, 1);
                                                    }), w();
                                                });
                                            }).catch(() => {});
                                            var N;
                                        }, [ "stop" ]),
                                        text: ""
                                    }, {
                                        default: t(() => [ v("删除") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ])), m("div", M, Se(d.tagName), 1) ]),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ])) ]),
                            _: 1
                        }) ], 64)) : P("", !0), !i(C) || i(n) != "add" && i(n) != "set" ? P("", !0) : (g(), 
                        k(D, {
                            key: 1,
                            prop: "isExamPoints",
                            label: "是否作为考核点",
                            style: {
                                position: "relative"
                            }
                        }, {
                            default: t(() => [ m("div", H, [ l(s, {
                                effect: "dark",
                                placement: "top",
                                content: "说明：设置为考核点的资料，其学生学习完成情况数据将纳入课程成绩考核"
                            }, {
                                default: t(() => [ l(a, {
                                    icon: "ep:question-filled",
                                    size: 14
                                }) ]),
                                _: 1
                            }) ]), l(_e, {
                                modelValue: i(e).isExamPoints,
                                "onUpdate:modelValue": u[3] || (u[3] = d => i(e).isExamPoints = d)
                            }, {
                                default: t(() => [ l(ae, {
                                    value: 1
                                }, {
                                    default: t(() => [ v("是") ]),
                                    _: 1
                                }), l(ae, {
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
                    }, 8, [ "model", "rules" ]) ]), m("div", J, [ l(h, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: u[4] || (u[4] = d => y(1))
                    }, {
                        default: t(() => [ v("取消") ]),
                        _: 1
                    }), i(n) == "add" ? (g(), k(h, {
                        key: 0,
                        style: {
                            "margin-right": "20px",
                            "margin-left": "20px"
                        },
                        onClick: u[5] || (u[5] = d => y(0))
                    }, {
                        default: t(() => [ v("上一步") ]),
                        _: 1
                    })) : P("", !0), l(h, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: ge
                    }, {
                        default: t(() => [ v("确定") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-51586a18" ] ]);
});

export {
    ma as __tla,
    de as default
};