import {
    r as m,
    a0 as Se,
    U as ie,
    o as L,
    c as Q,
    k as a,
    l,
    a as t,
    m as re,
    t as o,
    v as d,
    B as p,
    z as R,
    A as V,
    G as j,
    D as ne,
    n as Ne,
    ad as Ie,
    ae as Te,
    M as xe,
    s as ze,
    __tla as Pe
} from "./index-6c08ea4c.js";

import {
    E as Ce,
    __tla as Ue
} from "./el-drawer-fca4d971.js";

import {
    _ as Be,
    __tla as Oe
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as qe,
    __tla as Ee
} from "./index-c4ca0ced.js";

import {
    E as Le,
    __tla as Qe
} from "./el-link-8197297a.js";

import {
    _ as Re,
    __tla as Ve
} from "./index-1024512a.js";

import {
    d as je,
    e as De,
    __tla as He
} from "./markingCenter-690f9b44.js";

import {
    f as N,
    __tla as Ke
} from "./formatTime-de6f1520.js";

import {
    d as Ge,
    D as se,
    __tla as Me
} from "./dict-c5825220.js";

import {
    _ as Ye
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import {
    __tla as Ae
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Fe
} from "./DeptTag-1be092ce.js";

import {
    __tla as Je
} from "./index-ef4d146e.js";

let ue, We = Promise.all([ (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})() ]).then(async () => {
    let D, H, K, G, M, Y, A, F, J;
    D = {
        class: "markingSettingContainer"
    }, H = {
        key: 0
    }, K = {
        class: "table-container"
    }, G = {
        class: "pagination"
    }, M = {
        class: "table-container"
    }, Y = {
        class: "pagination"
    }, A = {
        key: 1
    }, F = {
        class: "table-container"
    }, J = {
        class: "pagination"
    }, ue = Ye({
        __name: "markingSetting",
        props: {
            drawerTitle: {
                type: String,
                default: ""
            },
            idObj: {
                type: Object,
                default: () => {}
            },
            markingState: {
                type: Number,
                default: 0
            }
        },
        emits: [ "markByPerson", "markByQuestions", "particulars", "markingSettingClose" ],
        setup(me, {
            expose: oe,
            emit: de
        }) {
            const h = m(!1), f = m("1"), k = m(null), g = m(null), w = de, pe = me, {
                drawerTitle: ce,
                idObj: v,
                markingState: I
            } = Se(pe), W = m({
                ststus: "",
                lowScore: null,
                highScore: null,
                nameNumber: ""
            }), _e = m([ {
                label: "阅卷状态",
                type: "list",
                key: "status",
                options: [ {
                    label: "全部",
                    value: ""
                }, {
                    label: "已完成",
                    value: "1"
                }, {
                    label: "未完成",
                    value: "0"
                } ]
            }, {
                label: "最低分",
                type: "number",
                key: "lowScore"
            }, {
                label: "最高分",
                type: "number",
                key: "highScore"
            } ]), fe = m([ {
                label: "最低分",
                type: "number",
                key: "lowScore"
            }, {
                label: "最高分",
                type: "number",
                key: "highScore"
            } ]), T = m([]), y = m(0), X = m(null), s = ie({
                pageNum: 1,
                pageSize: 10
            }), Z = m({
                ststus: "",
                questionType: "",
                stemText: ""
            }), ge = m([ {
                type: "list",
                label: "阅卷状态",
                key: "status",
                options: [ {
                    label: "全部",
                    value: ""
                }, {
                    label: "已完成",
                    value: "1"
                }, {
                    label: "未完成",
                    value: "0"
                } ]
            }, {
                type: "list",
                label: "题型",
                key: "questionType",
                options: Ge(se.QUESTION_TYPE)
            } ]), $ = m([]), x = m(0), ye = m(null), c = ie({
                pageNum: 1,
                pageSize: 10
            }), ee = () => {
                c.pageNum = 1, c.pageSize = 10, s.pageNum = 1, s.pageSize = 10, 
                f.value = "1", w("markingSettingClose"), g.value && g.value.resetParams && g.value.resetParams(), 
                k.value && k.value.resetParams && k.value.resetParams();
            }, ae = u => {
                s.pageNum = u.page, s.pageSize = u.limit, S();
            }, be = u => {
                c.pageNum = u.page, c.pageSize = u.limit, C();
            }, z = u => {
                switch (u) {
                  case "0":
                    return "未完成 ";

                  case "1":
                    return "已完成";

                  default:
                    return "--";
                }
            }, P = u => {
                switch (u) {
                  case "0":
                    return "reviewRedStyle";

                  case "1":
                    return "reviewGreenStyle";

                  default:
                    return "--";
                }
            }, he = u => {
                Z.value = u, C();
            }, C = () => {
                if (v.value.examId) {
                    let u = {
                        examId: v.value.examId,
                        pageNum: c.pageNum > 0 ? c.pageNum - 1 : 0,
                        pageSize: c.pageSize,
                        ...Z.value
                    };
                    je(u).then(i => {
                        $.value = i.content || [], x.value = i.totalElements || 0;
                    });
                }
            };
            function te(u) {
                W.value = u, S();
            }
            const S = () => {
                if (v.value.examId) {
                    let u = {
                        examId: v.value.examId,
                        pageNum: s.pageNum > 0 ? s.pageNum - 1 : 0,
                        pageSize: s.pageSize,
                        ...W.value
                    };
                    De(u).then(i => {
                        T.value = i.content || [], y.value = i.totalElements || 0;
                    });
                }
            }, U = () => {
                if ([ 0 ].includes(I.value)) switch (f.value) {
                  case "1":
                    return s.pageNum = 1, s.pageSize = 10, S();

                  case "2":
                    return s.pageNum = 1, s.pageSize = 10, C();

                  default:
                    return () => {};
                } else S();
            };
            return oe({
                handleOpen: () => {
                    h.value = !0, Ne(() => {
                        U();
                    });
                },
                handleClose: ee,
                getTableList: U
            }), (u, i) => {
                const B = Re, r = Ie, O = Le, q = Te, E = qe, le = xe, ke = Be, we = ze, ve = Ce;
                return L(), Q("div", D, [ a(ve, {
                    modelValue: t(h),
                    "onUpdate:modelValue": i[8] || (i[8] = e => re(h) ? h.value = e : null),
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    title: t(ce),
                    size: "80%",
                    onClose: ee
                }, {
                    default: l(() => [ [ 0 ].includes(t(I)) ? (L(), Q("div", H, [ a(we, {
                        modelValue: t(f),
                        "onUpdate:modelValue": i[4] || (i[4] = e => re(f) ? f.value = e : null),
                        class: "demo-tabs",
                        onTabChange: i[5] || (i[5] = e => U())
                    }, {
                        default: l(() => [ a(le, {
                            label: "按人批阅",
                            name: "1"
                        }, {
                            default: l(() => [ o("div", null, [ a(B, {
                                ref_key: "markByPersonSearchKRef",
                                ref: g,
                                searchList: t(_e),
                                keywordsInfo: {
                                    label: "姓名/学号/工号",
                                    key: "nameNumber"
                                },
                                inDialog: !0,
                                onHandleSearch: te
                            }, null, 8, [ "searchList" ]), o("div", K, [ a(q, {
                                ref_key: "markByPersonTableRef",
                                ref: X,
                                data: t(T)
                            }, {
                                default: l(() => [ a(r, {
                                    label: "序号",
                                    "min-width": "50",
                                    type: "index"
                                }), a(r, {
                                    label: "姓名",
                                    "min-width": "100",
                                    prop: "nickName"
                                }), a(r, {
                                    label: "学号/工号",
                                    "min-width": "100",
                                    prop: "number"
                                }), a(r, {
                                    label: "交卷时间",
                                    "min-width": "100",
                                    prop: "submitTime"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ d(p(t(N)(e.submitTime) || "--"), 1) ]),
                                    _: 1
                                }), a(r, {
                                    label: "批阅状态",
                                    "min-width": "100",
                                    prop: "status"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ o("span", {
                                        class: R([ P(e.status), "reviewStyle" ])
                                    }, p(z(e.status)), 3) ]),
                                    _: 1
                                }), a(r, {
                                    label: "成绩",
                                    "min-width": "100",
                                    prop: "finalScore"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ d(p([ "", void 0, null ].includes(e.finalScore) ? "--" : e.finalScore), 1) ]),
                                    _: 1
                                }), a(r, {
                                    label: "批阅人",
                                    "min-width": "100"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => {
                                        var _;
                                        return [ d(p(((_ = e.markUsers) == null ? void 0 : _.join("、")) || "--"), 1) ];
                                    }),
                                    _: 1
                                }), a(r, {
                                    label: "批阅完成时间",
                                    "min-width": "100",
                                    prop: "markerTime"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ d(p(t(N)(e.markCompleteTime) || "--"), 1) ]),
                                    _: 1
                                }), a(r, {
                                    label: "操作",
                                    "min-width": "100"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ a(O, {
                                        underline: !1,
                                        type: "primary",
                                        onClick: _ => (n => {
                                            if (n.examId && n.id) {
                                                let b = {
                                                    examId: n.examId,
                                                    paperId: n.id,
                                                    nickName: n.nickName,
                                                    number: n.number,
                                                    examName: n.examName,
                                                    candidateId: n.candidateId
                                                };
                                                w("markByPerson", b);
                                            }
                                        })(e)
                                    }, {
                                        default: l(() => [ d("批阅") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "data" ]) ]), o("div", G, [ V(a(E, {
                                limit: t(s).pageSize,
                                "onUpdate:limit": i[0] || (i[0] = e => t(s).pageSize = e),
                                page: t(s).pageNum,
                                "onUpdate:page": i[1] || (i[1] = e => t(s).pageNum = e),
                                total: t(y),
                                onPagination: ae
                            }, null, 8, [ "limit", "page", "total" ]), [ [ j, t(y) > 0 ] ]) ]) ]) ]),
                            _: 1
                        }), a(le, {
                            label: "按题批阅",
                            name: "2"
                        }, {
                            default: l(() => [ o("div", null, [ a(B, {
                                ref_key: "markByQuestionsSearchKRef",
                                ref: k,
                                searchList: t(ge),
                                keywordsInfo: {
                                    label: "题干",
                                    key: "stemText"
                                },
                                inDialog: !0,
                                onHandleSearch: he
                            }, null, 8, [ "searchList" ]), o("div", M, [ a(q, {
                                ref_key: "markByQuestionsTableRef",
                                ref: ye,
                                data: t($)
                            }, {
                                default: l(() => [ a(r, {
                                    label: "题号",
                                    "min-width": "50",
                                    prop: "questionNO"
                                }), a(r, {
                                    label: "试题题干",
                                    "min-width": "100",
                                    prop: "searchText"
                                }), a(r, {
                                    label: "题型",
                                    "min-width": "100",
                                    prop: "questionType"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ a(ke, {
                                        type: t(se).QUESTION_TYPE,
                                        value: e.questionType
                                    }, null, 8, [ "type", "value" ]) ]),
                                    _: 1
                                }), a(r, {
                                    label: "已批阅/总数量",
                                    "min-width": "100"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ d(p(e.markQustionCount + "/" + e.questionTotal), 1) ]),
                                    _: 1
                                }), a(r, {
                                    label: "批阅状态",
                                    "min-width": "100",
                                    prop: "status"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ o("span", {
                                        class: R([ P(e.status), "reviewStyle" ])
                                    }, p(z(e.status)), 3) ]),
                                    _: 1
                                }), a(r, {
                                    label: "操作",
                                    "min-width": "100"
                                }, {
                                    default: l(({
                                        row: e
                                    }) => [ a(O, {
                                        underline: !1,
                                        type: "primary",
                                        onClick: _ => (n => {
                                            if (n.questionNO && n.examId) {
                                                let b = {
                                                    questionNO: n.questionNO,
                                                    examId: n.examId
                                                };
                                                w("markByQuestions", b);
                                            }
                                        })(e)
                                    }, {
                                        default: l(() => [ d("批阅") ]),
                                        _: 2
                                    }, 1032, [ "onClick" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "data" ]) ]), o("div", Y, [ V(a(E, {
                                limit: t(c).pageSize,
                                "onUpdate:limit": i[2] || (i[2] = e => t(c).pageSize = e),
                                page: t(c).pageNum,
                                "onUpdate:page": i[3] || (i[3] = e => t(c).pageNum = e),
                                total: t(x),
                                onPagination: be
                            }, null, 8, [ "limit", "page", "total" ]), [ [ j, t(x) > 0 ] ]) ]) ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ])) : ne("", !0), [ 1 ].includes(t(I)) ? (L(), 
                    Q("div", A, [ o("div", null, [ a(B, {
                        ref_key: "markByPersonSearchKRef",
                        ref: g,
                        searchList: t(fe),
                        keywordsInfo: {
                            label: "姓名/学号/工号",
                            key: "nameNumber"
                        },
                        inDialog: !0,
                        onHandleSearch: te
                    }, null, 8, [ "searchList" ]), o("div", F, [ a(q, {
                        ref_key: "markByPersonTableRef",
                        ref: X,
                        data: t(T)
                    }, {
                        default: l(() => [ a(r, {
                            label: "序号",
                            "min-width": "50",
                            type: "index"
                        }), a(r, {
                            label: "姓名",
                            "min-width": "100",
                            prop: "nickName"
                        }), a(r, {
                            label: "学号/工号",
                            "min-width": "100",
                            prop: "number"
                        }), a(r, {
                            label: "交卷时间",
                            "min-width": "100",
                            prop: "submitTime"
                        }, {
                            default: l(({
                                row: e
                            }) => [ d(p(t(N)(e.submitTime) || "--"), 1) ]),
                            _: 1
                        }), a(r, {
                            label: "批阅状态",
                            "min-width": "100",
                            prop: "status"
                        }, {
                            default: l(({
                                row: e
                            }) => [ o("span", {
                                class: R([ P(e.status), "reviewStyle" ])
                            }, p(z(e.status)), 3) ]),
                            _: 1
                        }), a(r, {
                            label: "成绩",
                            "min-width": "100",
                            prop: "finalScore"
                        }, {
                            default: l(({
                                row: e
                            }) => [ d(p([ "", void 0, null ].includes(e.finalScore) ? "--" : e.finalScore), 1) ]),
                            _: 1
                        }), a(r, {
                            label: "批阅人",
                            "min-width": "100"
                        }, {
                            default: l(({
                                row: e
                            }) => {
                                var _;
                                return [ d(p(((_ = e.markUsers) == null ? void 0 : _.join("、")) || "--"), 1) ];
                            }),
                            _: 1
                        }), a(r, {
                            label: "批阅完成时间",
                            "min-width": "100",
                            prop: "markerTime"
                        }, {
                            default: l(({
                                row: e
                            }) => [ d(p(t(N)(e.markCompleteTime) || "--"), 1) ]),
                            _: 1
                        }), a(r, {
                            label: "操作",
                            "min-width": "100"
                        }, {
                            default: l(({
                                row: e
                            }) => [ a(O, {
                                underline: !1,
                                type: "primary",
                                onClick: _ => (n => {
                                    if (n.examId && n.id) {
                                        let b = {
                                            examId: n.examId,
                                            paperId: n.id,
                                            nickName: n.nickName,
                                            number: n.number,
                                            examName: n.examName,
                                            candidateId: n.candidateId
                                        };
                                        w("particulars", b);
                                    }
                                })(e)
                            }, {
                                default: l(() => [ d("详情") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]), o("div", J, [ V(a(E, {
                        limit: t(s).pageSize,
                        "onUpdate:limit": i[6] || (i[6] = e => t(s).pageSize = e),
                        page: t(s).pageNum,
                        "onUpdate:page": i[7] || (i[7] = e => t(s).pageNum = e),
                        total: t(y),
                        onPagination: ae
                    }, null, 8, [ "limit", "page", "total" ]), [ [ j, t(y) > 0 ] ]) ]) ]) ])) : ne("", !0) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a40a4526" ] ]);
});

export {
    We as __tla,
    ue as default
};