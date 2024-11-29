import {
    h as le,
    p as te,
    e as B,
    w as E,
    r as n,
    n as se,
    f as oe,
    o as h,
    C as f,
    l as d,
    k as l,
    v as C,
    a as t,
    H as re,
    c as k,
    F as A,
    y as U,
    I as ue,
    t as de,
    A as M,
    B as G,
    G as ce,
    m as ne,
    ab as ie,
    ac as pe,
    O as he,
    P as me,
    _ as ge,
    J as ve,
    Q as _e,
    ad as fe,
    ae as Ce,
    aU as ye,
    a9 as be,
    __tla as Ie
} from "./index-6c08ea4c.js";

import {
    _ as we,
    __tla as xe
} from "./index-c4ca0ced.js";

import {
    T as g,
    __tla as Ve
} from "./testPlacementManagement-3629800e.js";

import {
    d as Se,
    D as Te,
    __tla as Ne
} from "./dict-c5825220.js";

import {
    _ as Le
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ke
} from "./index-993301ca.js";

let H, Ae = Promise.all([ (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})() ]).then(async () => {
    let z;
    z = {
        align: "right",
        class: "right mb8"
    }, H = Le({
        __name: "selectClassStudentCom",
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
        setup(J, {
            emit: K
        }) {
            const i = le(), O = te(), Y = K, y = J;
            B(() => {
                var s;
                return (s = Se(Te.EXAM_STATUS)) == null ? void 0 : s.filter(e => e.value !== "0");
            });
            const v = B({
                get: () => y.modelValue,
                set: s => {
                    Y("update:modelValue", s);
                }
            });
            E(() => v.value, s => {
                s && (p.value = {
                    pageNum: 1,
                    pageSize: 10
                }, o.value = {
                    teachCode: "",
                    teachArrangementIds: [],
                    teachClassList: [],
                    searchText: ""
                }, x.value = 0, se(() => {
                    y.notInUserIds.forEach(e => {
                        R.value.toggleRowSelection({
                            stuId: e
                        }, !0);
                    });
                }), N(), g.getSemesterList().then(e => {
                    b.value = e, b.value.length > 0 && (o.value.courseYear = b.value[0].id, 
                    g.getTeachArrangeList({
                        termId: o.value.courseYear,
                        releaseStatus: "1",
                        teacherId: i.isTeacher ? i.user.id : null
                    }).then(r => {
                        I.value = r.reduce((u, c) => {
                            let _ = u.find(V => V.courseCode === c.courseCode);
                            return _ ? _.ids.push(c.id) : u.push({
                                courseCode: c.courseCode,
                                courseName: c.courseName,
                                ids: [ c.id ]
                            }), u;
                        }, []);
                    }));
                }), g.getTeachClassList({
                    teacherId: i.isTeacher ? i.user.id : null
                }).then(e => {
                    T.value = e;
                }));
            });
            const P = n([]);
            function Q(s) {
                P.value = [ ...s ];
            }
            const D = n(null), o = n({
                teachCode: "",
                teachArrangementIds: [],
                teachClassList: [],
                searchText: ""
            }), b = n([]), I = n([]), T = n([]), F = n([]), w = n(!1), x = n(0), R = n(), p = n({
                pageNum: 1,
                pageSize: 10
            }), X = s => {
                p.value.pageNum = s.page, p.value.pageSize = s.limit, N();
            };
            function N() {
                w.value = !0;
                let s = {
                    ...o.value,
                    ...p.value,
                    examId: y.examId,
                    userIds: []
                };
                g.getStudentPage(s).then(e => {
                    const {
                        list: r
                    } = e || {};
                    F.value = r.map(u => ({
                        ...u,
                        id: u.stuId
                    })), x.value = e.total, w.value = !1;
                }).catch(e => {
                    w.value = !1;
                });
            }
            function L() {
                N();
            }
            oe(() => {});
            const j = () => {
                let s = P.value.map(r => r.stuId), e = {
                    examId: y.examId,
                    userIds: s
                };
                g.addExamStudent(e).then(r => {
                    O.success("操作成功"), Y("closeDialog"), v.value = !1;
                }).catch(r => {});
            };
            function q(s) {
                g.getTeachArrangeList({
                    termId: s,
                    releaseStatus: "1",
                    teacherId: i.isTeacher ? i.user.id : null
                }).then(e => {
                    I.value = e.reduce((r, u) => {
                        let c = r.find(_ => _.courseCode === u.courseCode);
                        return c ? c.ids.push(u.id) : r.push({
                            courseCode: u.courseCode,
                            courseName: u.courseName,
                            ids: [ u.id ]
                        }), r;
                    }, []), o.value.teachCode = null, o.value.teachArrangementIds = null, 
                    o.value.teachClassList = null;
                });
            }
            return E(() => o.value.teachCode, s => {
                let e = I.value.find(r => r.courseCode == s);
                o.value.teachArrangementIds = e == null ? void 0 : e.ids, function(r) {
                    g.getTeachClassList({
                        teachArrangementIds: r,
                        teacherId: i.isTeacher ? i.user.id : null
                    }).then(u => {
                        T.value = u, o.value.teachClassList = [];
                    });
                }(e == null ? void 0 : e.ids);
            }), (s, e) => {
                const r = ie, u = pe, c = he, _ = me, V = ge, S = ve, W = _e, m = fe, Z = Ce, $ = we, ee = ye, ae = be;
                return h(), f(ee, {
                    modelValue: t(v),
                    "onUpdate:modelValue": e[9] || (e[9] = a => ne(v) ? v.value = a : null),
                    width: "1200px",
                    title: "添加考生"
                }, {
                    footer: d(() => [ l(S, {
                        type: "primary",
                        onClick: j
                    }, {
                        default: d(() => [ C("确定") ]),
                        _: 1
                    }), l(S, {
                        onClick: e[8] || (e[8] = a => v.value = !1)
                    }, {
                        default: d(() => [ C("取消") ]),
                        _: 1
                    }) ]),
                    default: d(() => [ l(W, {
                        ref_key: "searchFormRef",
                        ref: D,
                        inline: !0,
                        size: "large",
                        model: t(o),
                        onSubmit: e[5] || (e[5] = re(() => {}, [ "prevent" ]))
                    }, {
                        default: d(() => [ l(c, {
                            label: "开课学期",
                            prop: "courseYear"
                        }, {
                            default: d(() => [ l(u, {
                                modelValue: t(o).courseYear,
                                "onUpdate:modelValue": e[0] || (e[0] = a => t(o).courseYear = a),
                                placeholder: "请选择开课学期",
                                size: "large",
                                style: {
                                    width: "240px"
                                },
                                onChange: q
                            }, {
                                default: d(() => [ (h(!0), k(A, null, U(t(b), a => (h(), 
                                f(r, {
                                    key: a.id,
                                    label: a.name,
                                    value: a.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(c, {
                            label: "选择课程",
                            prop: "teachCode"
                        }, {
                            default: d(() => [ l(u, {
                                modelValue: t(o).teachCode,
                                "onUpdate:modelValue": e[1] || (e[1] = a => t(o).teachCode = a),
                                filterable: "",
                                clearable: "",
                                placeholder: "请选择课程",
                                size: "large",
                                style: {
                                    width: "240px"
                                }
                            }, {
                                default: d(() => [ (h(!0), k(A, null, U(t(I), a => (h(), 
                                f(r, {
                                    key: a.courseCode,
                                    label: a.courseName,
                                    value: a.courseCode
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(c, {
                            label: "教学班",
                            prop: "teachClassList"
                        }, {
                            default: d(() => [ l(u, {
                                modelValue: t(o).teachClassList,
                                "onUpdate:modelValue": e[2] || (e[2] = a => t(o).teachClassList = a),
                                placeholder: "请选择教学班",
                                filterable: "",
                                clearable: "",
                                "collapse-tags": "",
                                "collapse-tags-tooltip": "",
                                multiple: "",
                                style: {
                                    width: "240px"
                                }
                            }, {
                                default: d(() => [ (h(!0), k(A, null, U(t(T), a => (h(), 
                                f(r, {
                                    key: a.id,
                                    label: a.name,
                                    value: a.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(c, {
                            label: "关键字",
                            "label-width": "68",
                            prop: "searchText"
                        }, {
                            default: d(() => [ l(_, {
                                modelValue: t(o).searchText,
                                "onUpdate:modelValue": e[3] || (e[3] = a => t(o).searchText = a),
                                placeholder: "请输入姓名/学号",
                                clearable: "",
                                maxlength: "100",
                                style: {
                                    width: "200px"
                                },
                                onKeyup: ue(L, [ "enter" ])
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), de("div", z, [ l(S, {
                            type: "primary",
                            onClick: L
                        }, {
                            default: d(() => [ l(V, {
                                icon: "ep:search",
                                class: "mr-4px"
                            }), C("查询") ]),
                            _: 1
                        }), l(S, {
                            onClick: e[4] || (e[4] = a => (D.value.resetFields(), 
                            void L()))
                        }, {
                            default: d(() => [ l(V, {
                                icon: "ep:refresh",
                                class: "mr-4px"
                            }), C("重置") ]),
                            _: 1
                        }) ]) ]),
                        _: 1
                    }, 8, [ "model" ]), M((h(), f(Z, {
                        ref_key: "tableRef",
                        ref: R,
                        data: t(F),
                        "row-key": "id",
                        "max-height": "440px",
                        onSelectionChange: Q
                    }, {
                        default: d(() => [ l(m, {
                            type: "selection",
                            width: "50",
                            align: "center",
                            "reserve-selection": ""
                        }), l(m, {
                            type: "index",
                            label: "序号",
                            width: "100",
                            align: "center"
                        }), l(m, {
                            prop: "stuName",
                            label: "姓名",
                            "show-overflow-tooltip": !0
                        }), l(m, {
                            prop: "stuNumber",
                            label: "学号",
                            "show-overflow-tooltip": !0
                        }), l(m, {
                            prop: "teachClassName",
                            label: "教学班名称",
                            "show-overflow-tooltip": !0,
                            align: "center"
                        }), l(m, {
                            label: "所属课程名称及课程代码",
                            "show-overflow-tooltip": !0,
                            align: "center"
                        }, {
                            default: d(a => [ C(G(a.row.courseName) + "（" + G(a.row.courseCode) + "） ", 1) ]),
                            _: 1
                        }), l(m, {
                            prop: "teacherName",
                            label: "课程授课教师",
                            "show-overflow-tooltip": !0,
                            align: "center"
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ ae, t(w) ] ]), M(l($, {
                        total: t(x),
                        page: t(p).pageNum,
                        "onUpdate:page": e[6] || (e[6] = a => t(p).pageNum = a),
                        limit: t(p).pageSize,
                        "onUpdate:limit": e[7] || (e[7] = a => t(p).pageSize = a),
                        pageSizes: [ 10, 20, 30, 50, 100, 200, 500, 1e3, 2e3, 5e3 ],
                        onPagination: X
                    }, null, 8, [ "total", "page", "limit" ]), [ [ ce, t(x) > 0 ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-893dc249" ] ]);
});

export {
    Ae as __tla,
    H as default
};