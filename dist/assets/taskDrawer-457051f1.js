import {
    T as Ia,
    p as Da,
    r as n,
    e as T,
    U as wa,
    w as Ca,
    o as w,
    c as j,
    t as y,
    k as r,
    l as d,
    v as g,
    B as x,
    a as t,
    m as aa,
    C as $,
    F as ea,
    y as ka,
    D as Na,
    n as H,
    ad as Va,
    J as xa,
    ae as za,
    P as Ra,
    bp as Ua,
    aU as $a,
    R as Ea,
    S as Aa,
    __tla as Fa
} from "./index-6c08ea4c.js";

import {
    _ as Oa,
    __tla as Ta
} from "./index-c4ca0ced.js";

import {
    _ as ja,
    __tla as Ha
} from "./index-1024512a.js";

import {
    E as Pa,
    __tla as qa
} from "./el-drawer-fca4d971.js";

import {
    h as ta,
    i as Ba,
    j as la,
    k as Ja,
    s as ra,
    l as La,
    m as Qa,
    __tla as Wa
} from "./courseAssessment-6fc94c1d.js";

import {
    _ as Ga
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ka
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ma
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ya
} from "./index-ef4d146e.js";

let oa, Za = Promise.all([ (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})() ]).then(async () => {
    let E, P, q, B, J, L, Q, W;
    E = k => (Ea("data-v-e7fc238c"), k = k(), Aa(), k), P = {
        class: "test-drawer"
    }, q = {
        class: "tipStyle"
    }, B = E(() => y("span", {
        class: "tipIcon"
    }, null, -1)), J = {
        class: "tipStyle"
    }, L = E(() => y("span", {
        class: "tipIcon"
    }, null, -1)), Q = {
        class: "bottom-box"
    }, W = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, oa = Ga({
        __name: "taskDrawer",
        props: {
            itemData: {
                type: Object,
                default: () => {}
            }
        },
        setup(k, {
            expose: ua
        }) {
            const p = Ia(), z = Da(), N = n(!1), G = n([]), sa = n([ {
                label: "未开始",
                value: "2"
            }, {
                label: "进行中",
                value: "3"
            }, {
                label: "已截止",
                value: "4"
            } ]), da = n([ {
                label: "未开始",
                value: "0"
            }, {
                label: "进行中",
                value: "1"
            }, {
                label: "已结束",
                value: "2"
            } ]), a = k, ia = T(() => a.itemData.dataSource === 2 ? "已选择测验数" : a.itemData.dataSource === 3 ? "已选择作业数" : a.itemData.dataSource === 4 ? "已选择项目数" : a.itemData.dataSource === 5 ? "已选择考试名称" : ""), v = T(() => a.itemData.dataSource === 2 ? "测验" : a.itemData.dataSource === 3 ? "作业" : a.itemData.dataSource === 4 ? "项目" : a.itemData.dataSource === 5 ? "考试" : ""), h = n([]), m = n(!1), b = n([]), V = n(null), I = n(0), i = n({
                pageNum: 1,
                pageSize: 10
            }), D = n({
                keywords: "",
                status: ""
            }), ca = T(() => a.itemData.dataSource === 5 ? [ {
                label: "状态",
                key: "status",
                type: "list",
                options: [ {
                    label: "未开始",
                    value: "0"
                }, {
                    label: "进行中",
                    value: "1"
                }, {
                    label: "已结束",
                    value: "2"
                } ],
                width: "158px"
            } ] : [ {
                label: "状态",
                key: "status",
                type: "list",
                options: [ {
                    label: "未发布",
                    value: "1"
                }, {
                    label: "未开始",
                    value: "2"
                }, {
                    label: "进行中",
                    value: "3"
                }, {
                    label: "已截止",
                    value: "4"
                } ],
                width: "158px"
            } ]), S = n({}), na = l => {
                D.value = l, K();
            }, K = () => {
                if (a.itemData.dataSource === 2 || a.itemData.dataSource === 3) {
                    let l = {
                        ...i.value,
                        ...D.value,
                        teachCourseId: p.params.teachCourseId,
                        gradeItemId: a.itemData.id,
                        teachClassId: S.value.id,
                        type: a.itemData.dataSource
                    };
                    ta(l).then(e => {
                        b.value = e == null ? void 0 : e.list, I.value = e == null ? void 0 : e.total, 
                        m.value = !0;
                    });
                } else if (a.itemData.dataSource === 4) {
                    let l = {
                        ...i.value,
                        ...D.value,
                        teachCourseId: p.params.teachCourseId,
                        itemId: a.itemData.id
                    };
                    la(l).then(e => {
                        b.value = e == null ? void 0 : e.list, I.value = e == null ? void 0 : e.total, 
                        m.value = !0;
                    });
                } else if (a.itemData.dataSource === 5) {
                    let l = {
                        pageNum: i.value.pageNum - 1,
                        pageSize: i.value.pageSize,
                        teachArrangementId: p.query.teachArrangementId,
                        examName: D.value.keywords,
                        status: D.value.status,
                        ownerFlag: !1
                    };
                    ra(l).then(e => {
                        b.value = e == null ? void 0 : e.content, I.value = e == null ? void 0 : e.totalElements, 
                        m.value = !0;
                    });
                }
            }, ma = () => {
                if (a.itemData.dataSource !== 5) {
                    if (h.value.length === 0) return void z.error("请选择");
                    if (h.value.forEach(e => {
                        e.score !== null && e.score !== "0" && e.score !== 0 || z.error("请输入分值");
                    }), h.value.reduce((e, u) => e + parseInt(u.score, 10), 0) > a.itemData.score) return void z.error("总分不能大于" + a.itemData.score);
                } else if (Object.keys(h.value).length === 0) return void z.error("请选择");
                let l = {
                    id: S.value.itemRoleId,
                    teachCourseId: p.params.teachCourseId,
                    gradeItemId: a.itemData.id,
                    teachClassId: S.value.id,
                    teachClassName: S.value.name,
                    tabName: S.value.tabName,
                    type: a.itemData.dataSource,
                    data: JSON.stringify(h.value)
                };
                La(l).then(e => {
                    Z(), m.value = !1;
                });
            }, pa = l => {
                let e = !0;
                return h.value.forEach(u => {
                    u.id === l && (e = !1);
                }), e;
            }, R = wa({
                arr: []
            });
            Ca(() => h.value, l => {
                R.arr = [], R.arr[l.id] = !0;
            });
            const M = l => {
                h.value = l;
            };
            function va(l) {
                for (let e of sa.value) if (e.value === l) return e.label;
                return "--";
            }
            function ha(l) {
                for (let e of da.value) if (e.value === l) return e.label;
                return "--";
            }
            const Y = () => {
                V.value.clearSelection(), h.value = [], i.value = {
                    pageNum: 1,
                    pageSize: 10
                }, m.value = !1;
            }, _a = async () => {
                N.value = !1;
            }, Z = () => {
                Qa({
                    teachCourseId: p.params.teachCourseId,
                    itemId: a.itemData.id
                }).then(l => {
                    G.value = l;
                });
            };
            return ua({
                handleOpen: () => {
                    N.value = !0, H(() => {
                        Z();
                    });
                }
            }), (l, e) => {
                const u = Va, A = xa, F = za, fa = Pa, ya = ja, X = Ra, ba = Ua, Sa = Oa, ga = $a;
                return w(), j(ea, null, [ y("div", P, [ r(fa, {
                    modelValue: t(N),
                    "onUpdate:modelValue": e[0] || (e[0] = f => aa(N) ? N.value = f : null),
                    title: "考核任务设置",
                    size: "927",
                    "before-close": _a
                }, {
                    default: d(() => {
                        var f;
                        return [ y("div", null, [ y("div", q, [ B, g(x(((f = a == null ? void 0 : a.itemData) == null ? void 0 : f.dataSource) !== 5 ? "请为每个班级选择需要计入成绩考核的具体测验任务及其分值" : "请为每个教学班级选择需要计入成绩考核的具体考试任务"), 1) ]), r(F, {
                            data: t(G),
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: d(() => [ r(u, {
                                type: "index",
                                label: "序号",
                                width: "70"
                            }), r(u, {
                                prop: "name",
                                label: "教学班级名称"
                            }), r(u, {
                                prop: "tabName",
                                label: t(ia)
                            }, null, 8, [ "label" ]), r(u, {
                                label: "操作",
                                width: "100"
                            }, {
                                default: d(U => [ r(A, {
                                    type: "primary",
                                    link: "",
                                    onClick: c => (C => {
                                        if (S.value = C, a.itemData.dataSource === 2 || a.itemData.dataSource === 3) {
                                            let _ = {
                                                ...i.value,
                                                teachCourseId: p.params.teachCourseId,
                                                gradeItemId: a.itemData.id,
                                                teachClassId: S.value.id,
                                                status: "",
                                                type: a.itemData.dataSource
                                            };
                                            ta(_).then(o => {
                                                b.value = o == null ? void 0 : o.list, 
                                                I.value = o == null ? void 0 : o.total;
                                            });
                                            let s = {
                                                teachCourseId: p.params.teachCourseId,
                                                gradeItemId: a.itemData.id,
                                                teachClassId: S.value.id,
                                                type: a.itemData.dataSource
                                            };
                                            Ba(s).then(o => {
                                                m.value = !0, H(() => {
                                                    o.forEach(O => {
                                                        V.value.toggleRowSelection(O, !0);
                                                    });
                                                });
                                            });
                                        } else if (a.itemData.dataSource === 4) {
                                            let _ = {
                                                ...i.value,
                                                teachCourseId: p.params.teachCourseId,
                                                itemId: a.itemData.id
                                            };
                                            la(_).then(o => {
                                                b.value = o == null ? void 0 : o.list, 
                                                I.value = o == null ? void 0 : o.total;
                                            });
                                            let s = {
                                                teachCourseId: p.params.teachCourseId,
                                                itemId: a.itemData.id
                                            };
                                            Ja(s).then(o => {
                                                m.value = !0, H(() => {
                                                    o.forEach(O => {
                                                        V.value.toggleRowSelection(O, !0);
                                                    });
                                                });
                                            });
                                        } else if (a.itemData.dataSource === 5) {
                                            let _ = {
                                                pageNum: i.value.pageNum - 1,
                                                pageSize: i.value.pageSize,
                                                teachArrangementId: p.query.teachArrangementId,
                                                examName: D.value.keywords,
                                                status: D.value.status,
                                                ownerFlag: !1
                                            };
                                            ra(_).then(s => {
                                                b.value = s == null ? void 0 : s.content, 
                                                I.value = s == null ? void 0 : s.totalElements, 
                                                m.value = !0;
                                            });
                                        }
                                    })(U.row)
                                }, {
                                    default: d(() => [ g("选择" + x(t(v)), 1) ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]) ];
                    }),
                    _: 1
                }, 8, [ "modelValue" ]) ]), r(ga, {
                    modelValue: t(m),
                    "onUpdate:modelValue": e[3] || (e[3] = f => aa(m) ? m.value = f : null),
                    title: `\u6DFB\u52A0${t(v)}`,
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    width: "850",
                    draggable: !1,
                    onClose: Y
                }, {
                    default: d(() => {
                        var f, U;
                        return [ y("div", J, [ L, g(x(((f = a == null ? void 0 : a.itemData) == null ? void 0 : f.dataSource) !== 5 ? `\u6B64\u5904\u53EF\u9009\u62E9\u5F53\u524D\u6559\u5B66\u73ED\u7EA7\u4E0B\u5DF2\u53D1\u5E03\u7684\u6240\u6709${t(v)}\uFF08\u591A\u9009\uFF09\uFF0C\u7CFB\u7EDF\u5C06\u6839\u636E\u6240\u9009${t(v)}\u4E0B\u5B66\u751F\u5F97\u5206\u4EE5\u53CA\u6240\u5360\u8003\u6838\u9879\u5206\u503C\u8FDB\u884C\u81EA\u52A8\u6838\u7B97\u3002` : "此处可选择当前租户下所有用户创建的关联了当前学期-当前课程的考试（单选），请授课教师确认并选择与当前教学班级相匹配的考试，系统将根据所选考试下学生成绩进行自动核算（请确保所选考试下包含当前教学班级内所有学生，否则按0分计算）"), 1) ]), r(ya, {
                            ref: "comSearchRef",
                            searchList: t(ca),
                            onHandleSearch: na,
                            onHandleReset: l.resetQuery,
                            class: "left",
                            inDialog: !0,
                            keywordsInfo: {
                                key: "keywords",
                                label: `${t(v)}\u540D\u79F0`
                            }
                        }, null, 8, [ "searchList", "onHandleReset", "keywordsInfo" ]), y("div", null, [ ((U = a == null ? void 0 : a.itemData) == null ? void 0 : U.dataSource) !== 5 ? (w(), 
                        $(F, {
                            key: 0,
                            data: t(b),
                            ref_key: "dialogTableRef",
                            ref: V,
                            onSelectionChange: M,
                            "row-key": "id",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: d(() => {
                                var c, C;
                                return [ r(u, {
                                    type: "selection",
                                    width: "55",
                                    "reserve-selection": ""
                                }), r(u, {
                                    prop: "name",
                                    label: `${t(v)}\u540D\u79F0`
                                }, null, 8, [ "label" ]), r(u, {
                                    prop: "status",
                                    label: `${t(v)}\u72B6\u6001`
                                }, {
                                    default: d(_ => [ g(x(va(_.row.status)), 1) ]),
                                    _: 1
                                }, 8, [ "label" ]), r(u, {
                                    prop: ((c = a == null ? void 0 : a.itemData) == null ? void 0 : c.dataSource) === 4 ? "totalScore" : "testScore",
                                    label: ((C = a == null ? void 0 : a.itemData) == null ? void 0 : C.dataSource) === 4 ? "项目总分" : "平均得分（百分值）"
                                }, null, 8, [ "prop", "label" ]), r(u, {
                                    label: `\u5206\u503C(${a.itemData.score})`
                                }, {
                                    default: d(_ => [ pa(_.row.id) ? (w(), $(X, {
                                        key: 0,
                                        disabled: "",
                                        placeholder: "请输入分值"
                                    })) : (w(!0), j(ea, {
                                        key: 1
                                    }, ka(t(h), s => (w(), j("div", {
                                        key: s.id
                                    }, [ s.id === _.row.id ? (w(), $(X, {
                                        key: 0,
                                        modelValue: s.score,
                                        "onUpdate:modelValue": o => s.score = o,
                                        placeholder: "请输入分值"
                                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : Na("", !0) ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "label" ]) ];
                            }),
                            _: 1
                        }, 8, [ "data" ])) : (w(), $(F, {
                            key: 1,
                            data: t(b),
                            ref_key: "dialogTableRef",
                            ref: V,
                            onRowClick: M,
                            "row-key": "id",
                            style: {
                                width: "100%"
                            }
                        }, {
                            default: d(() => [ r(u, {
                                width: "50"
                            }, {
                                default: d(c => [ r(ba, {
                                    modelValue: t(R).arr[c.row.id],
                                    "onUpdate:modelValue": C => t(R).arr[c.row.id] = C,
                                    label: !0,
                                    size: "small"
                                }, {
                                    default: d(() => [ g(" ") ]),
                                    _: 2
                                }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]),
                                _: 1
                            }), r(u, {
                                prop: "examName",
                                label: `${t(v)}\u540D\u79F0`
                            }, null, 8, [ "label" ]), r(u, {
                                prop: "candidateCount",
                                label: `${t(v)}\u4EBA\u6570`
                            }, null, 8, [ "label" ]), r(u, {
                                prop: "status",
                                label: `${t(v)}\u72B6\u6001`
                            }, {
                                default: d(c => [ g(x(ha(c.row.status)), 1) ]),
                                _: 1
                            }, 8, [ "label" ]), r(u, {
                                prop: "createByName",
                                label: "创建人"
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), y("div", Q, [ r(Sa, {
                            limit: t(i).pageSize,
                            "onUpdate:limit": e[1] || (e[1] = c => t(i).pageSize = c),
                            page: t(i).pageNo,
                            "onUpdate:page": e[2] || (e[2] = c => t(i).pageNo = c),
                            total: t(I),
                            onPagination: K
                        }, null, 8, [ "limit", "page", "total" ]) ]) ]), y("div", W, [ r(A, {
                            onClick: Y
                        }, {
                            default: d(() => [ g("取消") ]),
                            _: 1
                        }), r(A, {
                            type: "primary",
                            onClick: ma
                        }, {
                            default: d(() => [ g("确定") ]),
                            _: 1
                        }) ]) ];
                    }),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-e7fc238c" ] ]);
});

export {
    Za as __tla,
    oa as default
};