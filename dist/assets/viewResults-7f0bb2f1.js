import {
    p as le,
    r as s,
    e as P,
    w as D,
    n as te,
    f as oe,
    o as j,
    C as U,
    l as r,
    t as d,
    z as re,
    v as u,
    k as l,
    a as t,
    B as m,
    A as E,
    x as k,
    c as se,
    D as ie,
    G as ne,
    m as ce,
    L as ue,
    J as pe,
    ad as de,
    ae as me,
    a9 as _e,
    __tla as ve
} from "./index-6c08ea4c.js";

import {
    E as he,
    __tla as fe
} from "./el-drawer-fca4d971.js";

import {
    _ as we,
    __tla as ye
} from "./index-c4ca0ced.js";

import {
    _ as ge,
    __tla as be
} from "./index-1024512a.js";

import {
    T as A,
    __tla as Se
} from "./testPlacementManagement-3629800e.js";

import {
    g as ke,
    a as xe,
    __tla as Ie
} from "./index-7c75bd27.js";

import {
    h as ze
} from "./tree-05ea8e09.js";

import {
    s as Ne,
    __tla as je
} from "./file-e038b35d.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ae
} from "./index-993301ca.js";

import {
    __tla as Be
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ce
} from "./index-ef4d146e.js";

let G, Fe = Promise.all([ (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})() ]).then(async () => {
    let B, C, F;
    B = [ "id" ], C = {
        class: "mb8"
    }, F = {
        key: 0
    }, G = {
        __name: "viewResults",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            examId: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:modelValue", "handleRevise", "particulars", "handleAnnouncementResults" ],
        setup(H, {
            expose: O,
            emit: T
        }) {
            const x = le(), y = T, _ = H, I = s([]), L = s([]), v = s({
                deptIds: "",
                lowScore: null,
                highScore: null,
                keywords: ""
            }), J = P(() => [ {
                label: "组织机构",
                key: "deptIds",
                filterable: !0,
                multiple: !0,
                type: "deptTree",
                options: I.value,
                tagOptions: L.value
            }, {
                label: "最低分",
                type: "number",
                key: "lowScore"
            }, {
                label: "最高分",
                type: "number",
                key: "highScore"
            } ]);
            let M = s([ {
                label: "未交卷",
                value: "0"
            }, {
                label: "自动交卷",
                value: "1"
            }, {
                label: "正常交卷",
                value: "2"
            }, {
                label: "强制交卷",
                value: "3"
            } ]);
            const h = s(!0), z = s(!1), g = s(null), R = s([]), b = s(!1), N = s(0), n = s({
                pageNum: 1,
                pageSize: 10
            }), f = P({
                get: () => _.modelValue,
                set: a => {
                    y("update:modelValue", a);
                }
            });
            D(() => f.value, a => {
                a || (h.value = !0, z.value = !1);
            });
            const q = async () => {
                let a = await A.derivedScoreApi({
                    examId: _.examId
                });
                Ne(a, a.fileName);
            };
            function K() {
                x.confirm("公布成绩后，考生可以查看成绩，确定公布成绩吗？").then(() => {
                    A.AnnouncementResults(_.examId).then(() => {
                        x.success("操作成功"), w(), y("handleAnnouncementResults");
                    });
                });
            }
            D(() => f.value, a => {
                a ? te(() => {
                    w();
                }) : (Object.assign(n.value, {
                    pageNum: 1,
                    pageSize: 10
                }), g.value && g.value.resetParams && g.value.resetParams());
            });
            const Q = a => {
                n.value.pageNum = a.page, n.value.pageSize = a.limit, w();
            };
            function w() {
                b.value = !0;
                let a = {
                    ...v.value,
                    pageNum: n.value.pageNum - 1,
                    pageSize: n.value.pageSize,
                    examId: _.examId
                };
                A.getExamScore(a).then(o => {
                    R.value = o.scoreList.content || [], N.value = o.scoreList.totalElements || 0, 
                    h.value = o.scorePublishFlag, z.value = o.isMarkedFlag, b.value = !1;
                }).catch(o => {
                    b.value = !1;
                });
            }
            function W(a) {
                a.lowScore && a.highScore && a.lowScore > a.highScore ? x.error("最低分不能大于最高分") : (v.value.lowScore = a.lowScore, 
                v.value.highScore = a.highScore, v.value.keywords = a.keywords, 
                v.value.deptIds = (a.deptIds || []).join(","), w());
            }
            const V = async (a = {}) => {
                const o = await xe(a);
                I.value = [], I.value.push(...ze(o));
            };
            return oe(() => {
                (async () => L.value = await ke())(), V();
            }), O({
                getList: w
            }), (a, o) => {
                const X = ue, Y = ge, S = pe, i = de, Z = me, $ = we, ee = he, ae = _e;
                return j(), U(ee, {
                    modelValue: t(f),
                    "onUpdate:modelValue": o[2] || (o[2] = e => ce(f) ? f.value = e : null),
                    size: "70%"
                }, {
                    header: r(({
                        titleId: e,
                        titleClass: p
                    }) => [ d("h4", {
                        id: e,
                        class: re([ p, "mr4" ])
                    }, [ u("查看成绩"), l(X, {
                        type: (t(h), "info"),
                        class: "ml-4"
                    }, {
                        default: r(() => [ u(m(t(h) ? "成绩已公布" : "成绩未公布"), 1) ]),
                        _: 1
                    }, 8, [ "type" ]) ], 10, B) ]),
                    default: r(() => [ l(Y, {
                        ref_key: "searchFormRef",
                        ref: g,
                        inDialog: !0,
                        searchList: t(J),
                        onHandleSearch: W,
                        onHandleGetDeptList: V,
                        keywordsInfo: {
                            key: "keywords",
                            label: "姓名/学号"
                        }
                    }, null, 8, [ "searchList" ]), d("div", C, [ l(S, {
                        type: "primary",
                        plain: "",
                        size: "large",
                        disabled: t(h) || !t(z),
                        onClick: K
                    }, {
                        default: r(() => [ u(" 发布成绩 ") ]),
                        _: 1
                    }, 8, [ "disabled" ]), l(S, {
                        type: "success",
                        plain: "",
                        size: "large",
                        onClick: q
                    }, {
                        default: r(() => [ u(" 导出成绩 ") ]),
                        _: 1
                    }) ]), E((j(), U(Z, {
                        data: t(R)
                    }, {
                        default: r(() => [ l(i, {
                            type: "index",
                            label: "序号",
                            width: "70",
                            align: "center"
                        }), l(i, {
                            prop: "nickName",
                            label: "姓名",
                            "show-overflow-tooltip": !0
                        }), l(i, {
                            prop: "number",
                            label: "学号/工号",
                            "show-overflow-tooltip": !0
                        }), l(i, {
                            prop: "terminalDeptName",
                            label: "所属末级组织",
                            "show-overflow-tooltip": !0
                        }), l(i, {
                            align: "center",
                            label: "是否缺考",
                            "show-overflow-tooltip": !0
                        }, {
                            default: r(e => [ d("div", {
                                style: k(e.row.absence ? "color: #FA4B4B;" : "")
                            }, m(e.row.absence ? "是" : "否"), 5) ]),
                            _: 1
                        }), l(i, {
                            align: "center",
                            label: "交卷状态",
                            "show-overflow-tooltip": !0
                        }, {
                            default: r(e => {
                                var p;
                                return [ d("div", {
                                    style: k(e.row.absence ? "color: #FA4B4B;" : "")
                                }, m(e.row.absence ? "未交卷" : (p = t(M).find(c => c.value === e.row.handPaperType)) == null ? void 0 : p.label), 5) ];
                            }),
                            _: 1
                        }), l(i, {
                            align: "center",
                            label: "主观题成绩"
                        }, {
                            default: r(e => [ d("div", {
                                style: k(e.row.subjectiveScore === "待阅" ? "color: #FA4B4B;" : "")
                            }, m(e.row.subjectiveScore), 5) ]),
                            _: 1
                        }), l(i, {
                            align: "center",
                            label: "客观题成绩"
                        }, {
                            default: r(e => [ d("div", {
                                style: k(e.row.objectiveScore === "系统判分中" ? "color: #FA4B4B;" : "")
                            }, m(e.row.objectiveScore), 5) ]),
                            _: 1
                        }), l(i, {
                            prop: "finalScore",
                            align: "center",
                            label: "总成绩",
                            "show-overflow-tooltip": !0
                        }, {
                            default: r(e => [ u(m(e.row.objectiveScore != "系统判分中" && e.row.subjectiveScore != "待阅" ? e.row.finalScore : "--"), 1) ]),
                            _: 1
                        }), l(i, {
                            label: "操作",
                            fixed: "right",
                            width: "160"
                        }, {
                            default: r(e => [ e.row.absence || e.row.subjectiveScore == "待阅" || e.row.objectiveScore == "系统判分中" ? ie("", !0) : (j(), 
                            se("div", F, [ l(S, {
                                link: "",
                                type: "primary",
                                onClick: p => {
                                    return c = e.row, void y("particulars", c);
                                    var c;
                                }
                            }, {
                                default: r(() => [ u("详情") ]),
                                _: 2
                            }, 1032, [ "onClick" ]), l(S, {
                                link: "",
                                type: "primary",
                                onClick: p => {
                                    return c = e.row, void y("handleRevise", {
                                        ...c,
                                        examId: _.examId
                                    });
                                    var c;
                                }
                            }, {
                                default: r(() => [ u("改阅") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ ae, t(b) ] ]), E(l($, {
                        total: t(N),
                        page: t(n).pageNum,
                        "onUpdate:page": o[0] || (o[0] = e => t(n).pageNum = e),
                        limit: t(n).pageSize,
                        "onUpdate:limit": o[1] || (o[1] = e => t(n).pageSize = e),
                        onPagination: Q
                    }, null, 8, [ "total", "page", "limit" ]), [ [ ne, t(N) > 0 ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    Fe as __tla,
    G as default
};