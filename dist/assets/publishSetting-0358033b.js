import {
    r as j,
    p as le,
    T as te,
    e as S,
    a0 as re,
    w as ie,
    o as d,
    c as v,
    k as s,
    l as e,
    a,
    C as f,
    v as u,
    D as m,
    F as ue,
    y as oe,
    B,
    t as n,
    dP as de,
    H as pe,
    bp as ne,
    bq as me,
    N as ce,
    O as Ce,
    K as ge,
    _ as fe,
    a8 as ye,
    br as be,
    cK as Te,
    Q as ve,
    R as _e,
    S as he,
    __tla as Re
} from "./index-6c08ea4c.js";

import {
    K as Se,
    J as Ve,
    __tla as Pe
} from "./index-9567cbf6.js";

import {
    h as Ye,
    a as we,
    b as ze
} from "./keyboardDisable-3c8e0d58.js";

import {
    _ as De
} from "./_plugin-vue_export-helper-1b428a4d.js";

let E, Fe = Promise.all([ (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})() ]).then(async () => {
    let c, V, P, Y, w, z, D, F, q, k, H;
    c = y => (_e("data-v-b32e179a"), y = y(), he(), y), V = {
        class: "publishSettingContainer"
    }, P = c(() => n("div", {
        class: "tooltip-container"
    }, " 发布方式 ", -1)), Y = {
        key: 0,
        class: "publishingSettings"
    }, w = {
        style: {
            color: "#245fe6"
        }
    }, z = c(() => n("div", {
        class: "tooltip-container"
    }, " 作答截止时间 ", -1)), D = {
        class: "tooltip-container"
    }, F = c(() => n("div", {
        class: "tooltip-container"
    }, " 公布答案 ", -1)), q = c(() => n("div", {
        class: "tooltip-container"
    }, " 公布成绩 ", -1)), k = {
        class: "tooltip-container"
    }, H = c(() => n("div", {
        class: "tooltip-container"
    }, " 计分方式 ", -1)), E = De({
        __name: "publishSetting",
        props: {
            formData: {
                type: Object,
                default: () => ({
                    releaseStatus: "0",
                    resClassCtlResp: {
                        openTimeStr: "",
                        range: "0",
                        closeTimeStr: "",
                        antiCheatingSettings: [],
                        answerPublishType: "1",
                        scorePublishType: "2",
                        multiTryFlag: "0",
                        multiTryTimes: null,
                        scoreCalculateType: "1"
                    }
                })
            },
            controlsType: {
                type: String,
                default: "1"
            },
            resId: {
                type: String,
                default: ""
            },
            isPurelyObjective: {
                type: Boolean,
                default: !1
            },
            sourceType: {
                type: String,
                default: ""
            },
            isStart: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:formData" ],
        setup(y, {
            expose: N,
            emit: A
        }) {
            const G = A, b = j(null);
            le();
            const I = te(), T = j([]), J = S(() => I.params.classId), M = S(() => I.params.teachCourseId), _ = y, {
                controlsType: C,
                resId: L,
                isPurelyObjective: h,
                sourceType: Q,
                isStart: U
            } = re(_), t = S({
                get: () => _.formData,
                set: p => {
                    G("update:formData", p);
                }
            });
            ie(() => h.value, () => {
                t.value.resClassCtlResp.scoreCalculateType = "";
            });
            const W = () => {
                t.value.resClassCtlResp = {
                    openTimeStr: "",
                    range: "0",
                    closeTimeStr: "",
                    antiCheatingSettings: [],
                    answerPublishType: "1",
                    scorePublishType: "2",
                    multiTryFlag: "0",
                    multiTryTimes: null,
                    scoreCalculateType: "1"
                };
            }, X = {
                releaseStatus: [ {
                    required: !0,
                    message: "请选择发布状态",
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.openTimeStr": [ {
                    required: !0,
                    message: "请选择发布时间",
                    trigger: [ "change", "blur" ]
                }, {
                    validator: (p, l, i) => {
                        t.value.closeTimeStr && l && l >= t.value.closeTimeStr ? i(new Error("发布时间不能大于等于截止时间")) : i();
                    },
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.range": [ {
                    required: !0,
                    message: "请选择发布范围",
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.closeTimeStr": [ {
                    required: !0,
                    message: "请选择截止时间",
                    trigger: [ "change", "blur" ]
                }, {
                    validator: (p, l, i) => {
                        t.value.openTimeStr && l && l <= t.value.openTimeStr ? i(new Error("截止时间不能小于等于开始时间")) : i();
                    },
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.answerPublishType": [ {
                    required: !0,
                    message: "请选择公布答案",
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.scorePublishType": [ {
                    required: !0,
                    message: "请选择公布成绩",
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.multiTryFlag": [ {
                    required: !0,
                    message: "请选择是否允许多次作答",
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.multiTryNum": [ {
                    required: !0,
                    message: "请输入允许作答次数",
                    trigger: [ "change", "blur" ]
                } ],
                "resClassCtlResp.scoreCalculateType": [ {
                    required: !0,
                    message: "请选择计分方式",
                    trigger: [ "change", "blur" ]
                } ]
            }, Z = () => {
                t.value.resClassCtlResp.multiTryFlag === "1" && (t.value.resClassCtlResp.multiTryTimes = 3);
            };
            return N({
                validateForm: () => new Promise((p, l) => {
                    b.value.validate(i => {
                        i ? p(!0) : l(!1);
                    });
                }),
                getInformationAboutTheClass: async () => {
                    try {
                        if (_.controlsType === "1") T.value = await Se({
                            teachCourseId: M.value
                        }); else {
                            const p = await Ve({
                                currenClassId: J.value,
                                teachCourseId: M.value,
                                resId: L.value
                            });
                            T.value = p.teachClassList || [];
                        }
                    } catch {}
                },
                clearForm: () => {
                    b.value && b.value.resetFields();
                }
            }), (p, l) => {
                const i = ne, g = me, x = ce, o = Ce, R = ge, K = fe, O = ye, $ = be, ee = Te, ae = ve;
                return d(), v("div", V, [ s(ae, {
                    ref_key: "dialogFormRef",
                    ref: b,
                    model: a(t),
                    rules: X,
                    class: "dialog-form",
                    inline: "",
                    "label-position": "top",
                    onSubmit: l[13] || (l[13] = pe(() => {}, [ "prevent" ]))
                }, {
                    default: e(() => [ s(o, {
                        class: "form-item",
                        label: "发布方式",
                        prop: "releaseStatus"
                    }, {
                        label: e(() => [ P ]),
                        default: e(() => [ s(g, {
                            modelValue: a(t).releaseStatus,
                            "onUpdate:modelValue": l[0] || (l[0] = r => a(t).releaseStatus = r),
                            onChange: W,
                            disabled: [ "2" ].includes(a(C)) && a(U)
                        }, {
                            default: e(() => [ [ "1" ].includes(a(C)) ? (d(), f(i, {
                                key: 0,
                                value: "0",
                                size: "large"
                            }, {
                                default: e(() => [ u("暂不发布") ]),
                                _: 1
                            })) : m("", !0), s(i, {
                                value: "1",
                                size: "large"
                            }, {
                                default: e(() => [ u("立即发布") ]),
                                _: 1
                            }), s(i, {
                                value: "2",
                                size: "large"
                            }, {
                                default: e(() => [ u("定时发布") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue", "disabled" ]), a(t).releaseStatus === "2" ? (d(), 
                        f(o, {
                            key: 0,
                            prop: "resClassCtlResp.openTimeStr"
                        }, {
                            default: e(() => [ s(x, {
                                disabled: [ "2" ].includes(a(C)) && a(U),
                                modelValue: a(t).resClassCtlResp.openTimeStr,
                                "onUpdate:modelValue": l[1] || (l[1] = r => a(t).resClassCtlResp.openTimeStr = r),
                                type: "datetime",
                                placeholder: "请选择发布时间",
                                format: "YYYY-MM-DD HH:mm:ss",
                                "value-format": "YYYY-MM-DD HH:mm:ss"
                            }, null, 8, [ "disabled", "modelValue" ]) ]),
                            _: 1
                        })) : m("", !0) ]),
                        _: 1
                    }), a(t).releaseStatus !== "0" ? (d(), v("div", Y, [ s(o, {
                        class: "form-item",
                        prop: "resClassCtlResp.range",
                        label: "发布范围"
                    }, {
                        default: e(() => [ s(g, {
                            modelValue: a(t).resClassCtlResp.range,
                            "onUpdate:modelValue": l[2] || (l[2] = r => a(t).resClassCtlResp.range = r),
                            disabled: [ "2" ].includes(a(C))
                        }, {
                            default: e(() => [ s(i, {
                                value: "0"
                            }, {
                                default: e(() => [ u("当前班级") ]),
                                _: 1
                            }), s(i, {
                                value: "1"
                            }, {
                                default: e(() => [ u("全部班级 （ "), s(R, {
                                    class: "box-item",
                                    effect: "light",
                                    placement: "right"
                                }, {
                                    content: e(() => [ (d(!0), v(ue, null, oe(a(T), (r, se) => (d(), 
                                    v("div", {
                                        key: se
                                    }, B(r.name), 1))), 128)) ]),
                                    default: e(() => [ n("span", w, B(a(T).length), 1) ]),
                                    _: 1
                                }), u(" ） ") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue", "disabled" ]) ]),
                        _: 1
                    }), s(o, {
                        class: "form-item",
                        label: "作答截止时间",
                        prop: "resClassCtlResp.closeTimeStr"
                    }, {
                        label: e(() => [ z ]),
                        default: e(() => [ s(x, {
                            modelValue: a(t).resClassCtlResp.closeTimeStr,
                            "onUpdate:modelValue": l[3] || (l[3] = r => a(t).resClassCtlResp.closeTimeStr = r),
                            type: "datetime",
                            "prefix-icon": a(de),
                            placeholder: "请选择截止时间",
                            format: "YYYY-MM-DD HH:mm:ss",
                            "value-format": "YYYY-MM-DD HH:mm:ss"
                        }, null, 8, [ "modelValue", "prefix-icon" ]) ]),
                        _: 1
                    }), [ "2" ].includes(a(Q)) ? (d(), f(o, {
                        key: 0,
                        class: "form-item",
                        label: "防作弊设置",
                        prop: "resClassCtlResp.antiCheatingSettings"
                    }, {
                        label: e(() => [ n("div", D, [ u(" 防作弊设置 "), s(R, {
                            content: "说明：题序混淆(勾选后，小题题序将被打乱显示，大题题序不变);选项混淆(勾选后，选择题选项将被打乱显示)",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ s(K, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ s($, {
                            modelValue: a(t).resClassCtlResp.antiCheatingSettings,
                            "onUpdate:modelValue": l[4] || (l[4] = r => a(t).resClassCtlResp.antiCheatingSettings = r)
                        }, {
                            default: e(() => [ s(O, {
                                value: "questionDisorder"
                            }, {
                                default: e(() => [ u("题序混淆") ]),
                                _: 1
                            }), s(O, {
                                value: "optionDisorder"
                            }, {
                                default: e(() => [ u("选项混淆") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    })) : m("", !0), s(o, {
                        class: "form-item",
                        label: "公布答案",
                        prop: "resClassCtlResp.answerPublishType"
                    }, {
                        label: e(() => [ F ]),
                        default: e(() => [ s(g, {
                            modelValue: a(t).resClassCtlResp.answerPublishType,
                            "onUpdate:modelValue": l[5] || (l[5] = r => a(t).resClassCtlResp.answerPublishType = r)
                        }, {
                            default: e(() => [ s(i, {
                                value: "1",
                                size: "large"
                            }, {
                                default: e(() => [ u("截止后自动公布") ]),
                                _: 1
                            }), s(i, {
                                value: "2",
                                size: "large"
                            }, {
                                default: e(() => [ u("提交后自动公布") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), s(o, {
                        class: "form-item",
                        label: "公布成绩",
                        prop: "resClassCtlResp.scorePublishType"
                    }, {
                        label: e(() => [ q ]),
                        default: e(() => [ s(g, {
                            modelValue: a(t).resClassCtlResp.scorePublishType,
                            "onUpdate:modelValue": l[6] || (l[6] = r => a(t).resClassCtlResp.scorePublishType = r)
                        }, {
                            default: e(() => [ s(i, {
                                value: "2",
                                size: "large"
                            }, {
                                default: e(() => [ u("截止后自动公布") ]),
                                _: 1
                            }), s(i, {
                                value: "3",
                                size: "large"
                            }, {
                                default: e(() => [ u("提交后自动公布") ]),
                                _: 1
                            }), s(i, {
                                value: "1",
                                size: "large"
                            }, {
                                default: e(() => [ u("教师手动公布") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), a(h) ? (d(), f(o, {
                        key: 1,
                        class: "form-item",
                        label: "是否允许多次作答",
                        prop: "resClassCtlResp.multiTryFlag"
                    }, {
                        label: e(() => [ n("div", k, [ u(" 是否允许多次作答 "), s(R, {
                            content: "说明：是否允许多次作答设置，只对含有“单选题、多选题、判断题”测验适用! 若测验中含主观题，学生只能作答一次测验，即此设置无效，请知晓!",
                            effect: "dark",
                            placement: "top"
                        }, {
                            default: e(() => [ s(K, {
                                size: 14,
                                class: "ml5",
                                icon: "ep:question-filled"
                            }) ]),
                            _: 1
                        }) ]) ]),
                        default: e(() => [ s(g, {
                            modelValue: a(t).resClassCtlResp.multiTryFlag,
                            "onUpdate:modelValue": l[7] || (l[7] = r => a(t).resClassCtlResp.multiTryFlag = r),
                            disabled: [ "2" ].includes(a(C)),
                            onChange: Z
                        }, {
                            default: e(() => [ s(i, {
                                value: "0",
                                size: "large"
                            }, {
                                default: e(() => [ u("否") ]),
                                _: 1
                            }), s(i, {
                                value: "1",
                                size: "large"
                            }, {
                                default: e(() => [ u("是") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue", "disabled" ]), a(t).resClassCtlResp.multiTryFlag === "1" ? (d(), 
                        f(o, {
                            key: 0,
                            prop: "resClassCtlResp.tryTimes"
                        }, {
                            default: e(() => [ s(ee, {
                                disabled: [ "2" ].includes(a(C)),
                                class: "ml-5",
                                modelValue: a(t).resClassCtlResp.multiTryTimes,
                                "onUpdate:modelValue": l[8] || (l[8] = r => a(t).resClassCtlResp.multiTryTimes = r),
                                min: 2,
                                max: 3,
                                "controls-position": "right",
                                onCompositionend: l[9] || (l[9] = r => a(Ye)(r)),
                                onCompositionstart: l[10] || (l[10] = r => a(we)(r)),
                                onKeydown: l[11] || (l[11] = r => a(ze)(r)),
                                style: {
                                    width: "100px"
                                }
                            }, null, 8, [ "disabled", "modelValue" ]) ]),
                            _: 1
                        })) : m("", !0) ]),
                        _: 1
                    })) : m("", !0), a(h) && a(t).resClassCtlResp.multiTryFlag === "1" ? (d(), 
                    f(o, {
                        key: 2,
                        class: "form-item",
                        label: "计分方式",
                        prop: "resClassCtlResp.scoreCalculateType"
                    }, {
                        label: e(() => [ H ]),
                        default: e(() => [ s(g, {
                            modelValue: a(t).resClassCtlResp.scoreCalculateType,
                            "onUpdate:modelValue": l[12] || (l[12] = r => a(t).resClassCtlResp.scoreCalculateType = r)
                        }, {
                            default: e(() => [ s(i, {
                                value: "1",
                                size: "large"
                            }, {
                                default: e(() => [ u("取最高分") ]),
                                _: 1
                            }), s(i, {
                                value: "2",
                                size: "large"
                            }, {
                                default: e(() => [ u("取平均分") ]),
                                _: 1
                            }), s(i, {
                                value: "3",
                                size: "large"
                            }, {
                                default: e(() => [ u("取最后一次得分") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    })) : m("", !0) ])) : m("", !0) ]),
                    _: 1
                }, 8, [ "model" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b32e179a" ] ]);
});

export {
    Fe as __tla,
    E as default
};