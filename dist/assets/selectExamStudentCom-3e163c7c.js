import {
    p as ne,
    e as J,
    w as de,
    r as n,
    n as ie,
    o as m,
    C as E,
    l as u,
    k as t,
    v as _,
    a as o,
    H as ce,
    c as G,
    F as H,
    y as O,
    I as A,
    t as Q,
    A as X,
    B as pe,
    G as me,
    m as ge,
    ab as he,
    ac as ve,
    O as _e,
    cK as fe,
    P as ye,
    _ as we,
    J as Se,
    Q as xe,
    ad as be,
    ae as Ve,
    aU as Ie,
    a9 as ke,
    R as Ee,
    S as Ce,
    __tla as Ue
} from "./index-6c08ea4c.js";

import {
    _ as Ne,
    __tla as ze
} from "./index-c4ca0ced.js";

import {
    T as C,
    __tla as Ae
} from "./testPlacementManagement-3629800e.js";

import {
    d as Ke,
    D as Pe,
    __tla as Re
} from "./dict-c5825220.js";

import {
    _ as Be
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Fe
} from "./index-993301ca.js";

let j, De = Promise.all([ (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})() ]).then(async () => {
    let K, P;
    K = (g => (Ee("data-v-a87afa19"), g = g(), Ce(), g))(() => Q("span", {
        style: {
            width: "50px",
            "text-align": "center"
        }
    }, "一", -1)), P = {
        align: "right",
        class: "right mb8"
    }, j = Be({
        __name: "selectExamStudentCom",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            examId: {
                type: String,
                default: ""
            },
            notInUserIds: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "update:modelValue", "closeDialog" ],
        setup(g, {
            emit: W
        }) {
            const Y = ne(), R = W, U = g, Z = J(() => {
                var a;
                return (a = Ke(Pe.EXAM_STATUS)) == null ? void 0 : a.filter(e => e.value !== "0");
            }), h = J({
                get: () => U.modelValue,
                set: a => {
                    R("update:modelValue", a);
                }
            });
            de(() => h.value, a => {
                a && (d.value = {
                    pageNum: 1,
                    pageSize: 10
                }, r.value = {
                    status: "",
                    selectedExamId: "",
                    lowScore: null,
                    highScore: null,
                    keywords: ""
                }, f.value = [], w.value = 0, ie(() => {
                    U.notInUserIds.forEach(e => {
                        B.value.toggleRowSelection({
                            userId: e
                        }, !0);
                    });
                }), C.getExamListByStatus().then(e => {
                    S.value = e;
                }));
            });
            const N = n([]);
            function $(a) {
                N.value = [ ...a ];
            }
            const v = n(null), r = n({
                status: "",
                selectedExamId: "",
                lowScore: null,
                highScore: null,
                keywords: ""
            }), f = n([]), y = n(!1), w = n(0), B = n(), d = n({
                pageNum: 1,
                pageSize: 10
            }), S = n([]), ee = a => {
                d.value.pageNum = a.page, d.value.pageSize = a.limit, D();
            }, le = n({
                selectedExamId: [ {
                    required: !0,
                    message: "请选择考试名称",
                    trigger: [ "blur", "change" ]
                } ],
                lowScore: [ {
                    validator: (a, e, s) => {
                        e !== "" && e !== null && r.value.highScore !== "" && r.value.highScore !== null && (e > r.value.highScore ? s(new Error("最低分不能大于最高分")) : s()), 
                        s();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                highScore: [ {
                    validator: (a, e, s) => {
                        v.value.validateField("lowScore"), s();
                    },
                    trigger: [ "blur", "change" ]
                } ]
            });
            function F(a) {
                C.getExamListByStatus(a).then(e => {
                    S.value = e, r.value.selectedExamId = "";
                });
            }
            const z = n("");
            function D() {
                v.value.validate(a => {
                    if (a) {
                        y.value = !0;
                        let e = {
                            ...r.value,
                            ...d.value,
                            pageNum: d.value.pageNum - 1,
                            pageSize: d.value.pageSize
                        };
                        C.getExamedStudentPage(e).then(s => {
                            var V;
                            let c = (V = S.value) == null ? void 0 : V.find(I => I.id === r.value.selectedExamId);
                            z.value = c == null ? void 0 : c.status;
                            const {
                                content: i,
                                totalElements: b
                            } = s || {};
                            f.value = i, w.value = b, y.value = !1;
                        }).catch(s => {
                            y.value = !1;
                        });
                    }
                });
            }
            function x() {
                v.value.validate(a => {
                    a && D();
                });
            }
            const ae = () => {
                let a = N.value.map(s => s.userId), e = {
                    examId: U.examId,
                    userIds: a
                };
                C.addExamStudent(e).then(s => {
                    Y.success("操作成功"), N.value = [], R("closeDialog");
                }).catch(s => {});
            }, L = a => {
                const e = a.key;
                return !![ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "Backspace", "ArrowRight", "ArrowLeft" ].includes(e) || (a.returnValue = !1, 
                !1);
            };
            let M = "";
            const T = a => {
                M = a.target.value;
            }, q = a => {
                a.target.value = M;
            };
            return (a, e) => {
                const s = he, c = ve, i = _e, b = fe, V = ye, I = we, k = Se, te = xe, p = be, oe = Ve, re = Ne, ue = Ie, se = ke;
                return m(), E(ue, {
                    modelValue: o(h),
                    "onUpdate:modelValue": e[16] || (e[16] = l => ge(h) ? h.value = l : null),
                    width: "1200px",
                    title: "添加考生"
                }, {
                    footer: u(() => [ t(k, {
                        type: "primary",
                        onClick: ae
                    }, {
                        default: u(() => [ _("确定") ]),
                        _: 1
                    }), t(k, {
                        onClick: e[15] || (e[15] = l => h.value = !1)
                    }, {
                        default: u(() => [ _("取消") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ t(te, {
                        ref_key: "searchFormRef",
                        ref: v,
                        rules: o(le),
                        inline: !0,
                        size: "large",
                        model: o(r),
                        onSubmit: e[12] || (e[12] = ce(() => {}, [ "prevent" ]))
                    }, {
                        default: u(() => [ t(i, {
                            label: "考试状态",
                            prop: "status"
                        }, {
                            default: u(() => [ t(c, {
                                modelValue: o(r).status,
                                "onUpdate:modelValue": e[0] || (e[0] = l => o(r).status = l),
                                clearable: "",
                                style: {
                                    width: "200px"
                                },
                                onChange: F
                            }, {
                                default: u(() => [ (m(!0), G(H, null, O(o(Z), l => (m(), 
                                E(s, {
                                    key: l.value,
                                    label: l.label,
                                    value: l.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(i, {
                            label: "考试名称",
                            prop: "selectedExamId"
                        }, {
                            default: u(() => [ t(c, {
                                modelValue: o(r).selectedExamId,
                                "onUpdate:modelValue": e[1] || (e[1] = l => o(r).selectedExamId = l),
                                filterable: "",
                                clearable: "",
                                style: {
                                    width: "200px"
                                }
                            }, {
                                default: u(() => [ (m(!0), G(H, null, O(o(S), l => (m(), 
                                E(s, {
                                    key: l.id,
                                    label: l.examName,
                                    value: l.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(i, {
                            label: "成绩筛选"
                        }, {
                            default: u(() => [ t(i, {
                                prop: "lowScore",
                                class: "mr-0"
                            }, {
                                default: u(() => [ t(b, {
                                    modelValue: o(r).lowScore,
                                    "onUpdate:modelValue": e[2] || (e[2] = l => o(r).lowScore = l),
                                    placeholder: "分数",
                                    clearable: "",
                                    controls: !1,
                                    style: {
                                        width: "80px"
                                    },
                                    onKeyup: A(x, [ "enter" ]),
                                    onKeydown: e[3] || (e[3] = l => L(l)),
                                    onCompositionstart: e[4] || (e[4] = l => T(l)),
                                    onCompositionend: e[5] || (e[5] = l => q(l))
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }), K, t(i, {
                                prop: "highScore",
                                class: "mr-0"
                            }, {
                                default: u(() => [ t(b, {
                                    modelValue: o(r).highScore,
                                    "onUpdate:modelValue": e[6] || (e[6] = l => o(r).highScore = l),
                                    placeholder: "分数",
                                    clearable: "",
                                    controls: !1,
                                    style: {
                                        width: "80px"
                                    },
                                    onKeyup: A(x, [ "enter" ]),
                                    onKeydown: e[7] || (e[7] = l => L(l)),
                                    onCompositionstart: e[8] || (e[8] = l => T(l)),
                                    onCompositionend: e[9] || (e[9] = l => q(l))
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), t(i, {
                            label: "关键字",
                            prop: "keywords"
                        }, {
                            default: u(() => [ t(V, {
                                modelValue: o(r).keywords,
                                "onUpdate:modelValue": e[10] || (e[10] = l => o(r).keywords = l),
                                placeholder: "请输入姓名/学号",
                                clearable: "",
                                maxlength: "100",
                                style: {
                                    width: "200px"
                                },
                                onKeyup: A(x, [ "enter" ])
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), Q("div", P, [ t(k, {
                            type: "primary",
                            onClick: x
                        }, {
                            default: u(() => [ t(I, {
                                icon: "ep:search",
                                class: "mr-4px"
                            }), _("查询") ]),
                            _: 1
                        }), t(k, {
                            onClick: e[11] || (e[11] = l => (v.value.resetFields(), 
                            f.value = [], void F()))
                        }, {
                            default: u(() => [ t(I, {
                                icon: "ep:refresh",
                                class: "mr-4px"
                            }), _("重置") ]),
                            _: 1
                        }) ]) ]),
                        _: 1
                    }, 8, [ "rules", "model" ]), X((m(), E(oe, {
                        ref_key: "tableRef",
                        ref: B,
                        data: o(f),
                        "row-key": "userId",
                        "max-height": "440px",
                        onSelectionChange: $
                    }, {
                        default: u(() => [ t(p, {
                            type: "selection",
                            width: "50",
                            align: "center",
                            "reserve-selection": ""
                        }), t(p, {
                            type: "index",
                            label: "序号",
                            width: "100",
                            align: "center"
                        }), t(p, {
                            prop: "nickName",
                            label: "姓名",
                            "show-overflow-tooltip": !0
                        }), t(p, {
                            prop: "number",
                            label: "学号",
                            "show-overflow-tooltip": !0
                        }), t(p, {
                            prop: "org.terminalDeptName",
                            label: "所属末级组织",
                            "show-overflow-tooltip": !0
                        }), t(p, {
                            prop: "score",
                            label: "考试成绩",
                            "show-overflow-tooltip": !0
                        }, {
                            default: u(l => [ _(pe(o(z) === "3" || o(z) === "4" ? l.row.score ? l.row.score : "0" : "-"), 1) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ se, o(y) ] ]), X(t(re, {
                        total: o(w),
                        page: o(d).pageNum,
                        "onUpdate:page": e[13] || (e[13] = l => o(d).pageNum = l),
                        limit: o(d).pageSize,
                        "onUpdate:limit": e[14] || (e[14] = l => o(d).pageSize = l),
                        pageSizes: [ 10, 20, 30, 50, 100, 200, 500, 1e3, 2e3, 5e3 ],
                        onPagination: ee
                    }, null, 8, [ "total", "page", "limit" ]), [ [ me, o(w) > 0 ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a87afa19" ] ]);
});

export {
    De as __tla,
    j as default
};