import {
    _ as Tt,
    __tla as $t
} from "./ContentPage-f6bcc98e.js";

import {
    _ as qt,
    __tla as Dt
} from "./index-c4ca0ced.js";

import {
    _ as Ht,
    __tla as Pt
} from "./index-f977be78.js";

import {
    u as Ft,
    p as Jt,
    e as Rt,
    r as l,
    U as yt,
    ej as Ut,
    f as Kt,
    j as ht,
    o as s,
    c as i,
    k as c,
    l as d,
    a as r,
    t as o,
    A as y,
    C as b,
    v as p,
    F as ft,
    y as Gt,
    z as vt,
    B as v,
    D as gt,
    _ as Mt,
    J as Qt,
    L as Vt,
    K as Wt,
    R as Xt,
    S as Yt,
    __tla as Zt
} from "./index-6c08ea4c.js";

import {
    E as ta,
    __tla as aa
} from "./el-image-0d184777.js";

import {
    __tla as ea
} from "./el-image-viewer-2c0d56e4.js";

import {
    _ as sa,
    __tla as ra
} from "./index-1024512a.js";

import oa, {
    __tla as la
} from "./addTeach-52c31c64.js";

import {
    g as ca,
    o as na,
    p as ia,
    s as ua,
    __tla as da
} from "./index-cfc63ccf.js";

import {
    a as ma,
    j as _a,
    q as pa,
    __tla as ya
} from "./index-b22fcdff.js";

import {
    a as ha,
    t as wt,
    __tla as fa
} from "./file-e038b35d.js";

import {
    _ as va
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ga
} from "./index-993301ca.js";

import {
    __tla as wa
} from "./index-5adb716b.js";

import {
    __tla as Ca
} from "./throttle-1adeb119.js";

import "./tree-05ea8e09.js";

import {
    __tla as ba
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ia
} from "./index-ef4d146e.js";

import {
    __tla as ka
} from "./index-13c88727.js";

import {
    __tla as xa
} from "./index-9567cbf6.js";

let Ct, Sa = Promise.all([ (() => {
    try {
        return $t;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})() ]).then(async () => {
    let g, $, q, D, H, P, F, J, R, U, K, G, M, Q, V, W, X, Y, Z, tt, at, et, st, rt;
    g = I => (Xt("data-v-37ab33bc"), I = I(), Yt(), I), $ = {
        key: 0,
        class: "neu-has-data"
    }, q = {
        class: "top-box"
    }, D = {
        class: "right btns-box header-btns pt-1"
    }, H = {
        key: 0,
        style: {
            flex: "1",
            display: "flex",
            "flex-direction": "column"
        }
    }, P = {
        class: "data-content"
    }, F = {
        class: "course-cover"
    }, J = {
        class: "cover-content"
    }, R = [ "onClick" ], U = g(() => o("span", null, "开始学习", -1)), K = {
        class: "course-info"
    }, G = {
        class: "row1"
    }, M = {
        class: "tooltip-content"
    }, Q = {
        class: "row2"
    }, V = {
        class: "tooltip-content mr-12px"
    }, W = {
        class: "row2-tea tooltip-content"
    }, X = {
        class: "row3"
    }, Y = {
        class: "row3-class tooltip-content"
    }, Z = {
        class: "bottom-box"
    }, tt = {
        key: 1,
        class: "neu-no-data"
    }, at = g(() => o("p", {
        class: "my-4"
    }, "暂无数据", -1)), et = {
        key: 1,
        class: "neu-no-data"
    }, st = g(() => o("p", {
        class: "my-4"
    }, "暂无数据", -1)), rt = g(() => o("div", null, null, -1)), Ct = va({
        __name: "courseStudy",
        setup(I) {
            const bt = Ft(), h = Jt(), It = Rt(() => [ {
                label: "课程状态",
                key: "teachStatus",
                type: "list",
                options: z
            }, {
                label: "开课学期",
                key: "termId",
                type: "list",
                options: j.value
            } ]), z = [ {
                value: "0",
                label: "未开课",
                color: "#245FE6"
            }, {
                value: "1",
                label: "进行中",
                color: "#34CE72"
            }, {
                value: "2",
                label: "已结课",
                color: "#C5C5C5"
            } ], ot = l({}), lt = l({}), L = l(null), ct = async ({
                type: t,
                title: e,
                row: u
            }) => {
                const n = {
                    joinCourse: () => {},
                    teaEdit: async () => {
                        ot.value = await kt(u.teachArrangementId), lt.value = JSON.parse(JSON.stringify(ot.value));
                    },
                    default: () => {}
                };
                await (n[t] || n.default)(), L.value.handleOpen({
                    type: t,
                    title: e
                });
            }, kt = async t => await ia({
                id: t
            }), O = l(null), xt = async ({
                type: t,
                params: e
            }) => {
                const u = {
                    create: () => {},
                    teaEdit: () => {
                        O.value = At;
                    },
                    joinCourse: () => {
                        O.value = St;
                    },
                    default: () => {}
                };
                (u[t] || u.default)();
                const n = await O.value({
                    params: e
                });
                h.success(n), L.value.handleClose(), w();
            }, St = async ({
                params: t
            }) => {
                const e = t.confirmCode;
                return await _a({
                    confirmCode: e
                });
            }, k = l([]);
            l(null), l({}), l([]);
            const j = l([]), Nt = async ({
                row: t
            }) => await pa({
                teachClassId: t.teachClassId
            }), nt = () => {
                m.pageNo = 1, m.pageSize = 10;
            }, A = yt({
                keywords: "",
                termId: "",
                teachStatus: ""
            }), m = yt({
                pageNo: 1,
                pageSize: 10
            }), zt = t => {
                Object.keys(A).forEach(e => A[e] = t[e]), nt(), w();
            }, it = l(0), w = async () => {
                const t = await ma({
                    pageNo: m.pageNo,
                    pageSize: m.pageSize,
                    ...A
                });
                return k.value = t == null ? void 0 : t.list, it.value = t == null ? void 0 : t.total, 
                t;
            };
            l("");
            const Lt = ({
                row: t
            }) => {
                bt.push({
                    name: "StudentLearnCourse",
                    params: {
                        teachCourseId: t.teachCourseId,
                        teacherId: t.teacherId,
                        teachArrangementId: t.id,
                        classId: t.teachClassId
                    }
                });
            }, ut = l([]), Ot = l([ {
                name: "退选课程",
                type: "quitCourse",
                title: ""
            } ]), jt = ({
                currentOperate: t,
                row: e
            }) => {
                const {
                    type: u,
                    title: n
                } = t, _ = {
                    quitCourse: () => {
                        (({
                            row: C
                        }) => {
                            h.confirm("当前课程教师已开启允许学生退选课程，退选课程成功后您的所有学习记录将被全部清空（此操作不可撤销），确定退选课程？", "提示", {
                                confirmButtonText: "确 认",
                                cancelButtonText: "取 消"
                            }).then(async () => {
                                await Nt({
                                    row: C
                                }), h.success("退课成功"), w();
                            });
                        })({
                            row: e
                        });
                    },
                    default: () => {}
                };
                (_[u] || _.default)();
            }, At = async ({
                params: t
            }) => {
                const {
                    id: e,
                    teachArrangementId: u,
                    courseSource: n,
                    courseName: _,
                    courseCode: C,
                    termId: x,
                    courseId: f
                } = t, B = await ua({
                    id: e,
                    courseSource: n,
                    teachArrangementId: u,
                    courseId: f,
                    termId: x,
                    courseName: _,
                    courseCode: C
                });
                return h.success("编辑成功"), B;
            };
            l("");
            const dt = l(!1);
            return Ut(async () => {
                j.value = await (async () => (await ca()).map(t => (t.value = t.id, 
                t.label = t.name, t)))();
            }), Kt(() => {
                (async () => {
                    const t = await w();
                    dt.value = (t == null ? void 0 : t.total) > 0;
                })(), (async () => {
                    const t = await na({
                        keywords: ""
                    });
                    t && (ut.value = t == null ? void 0 : t.filter(e => e.releaseStatus === "1"));
                })();
            }), (t, e) => {
                const u = sa, n = Mt, _ = Qt, C = ta, x = Vt, f = Wt, B = Ht, Bt = qt, Et = Tt, E = ht("hasPermi"), S = ht("show-tip");
                return s(), i(ft, null, [ c(Et, {
                    class: "course-teaching",
                    noPadding: !0,
                    noBgColor: !0
                }, {
                    default: d(() => [ r(dt) || r(k).length ? (s(), i("div", $, [ o("div", q, [ c(u, {
                        searchList: r(It),
                        onHandleSearch: zt,
                        onHandleReset: nt,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "课程名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), o("div", D, [ y((s(), b(_, {
                        type: "primary",
                        onClick: e[0] || (e[0] = a => ct({
                            type: "joinCourse",
                            title: "加入课程"
                        })),
                        size: "large"
                    }, {
                        default: d(() => [ c(n, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), p(" 加入课程 ") ]),
                        _: 1
                    })), [ [ E, [ "teachmanager:teach-class-student:update" ] ] ]) ]) ]), r(k).length ? (s(), 
                    i("div", H, [ o("div", P, [ (s(!0), i(ft, null, Gt(r(k), a => {
                        var mt;
                        return s(), i("div", {
                            key: a.arrangementId,
                            class: vt([ "course-list-common", [ "status-" + a.arrangementStatus ] ])
                        }, [ o("div", F, [ o("div", J, [ [ "1", "2", "3", "4" ].indexOf(a.cover) >= 0 ? (s(), 
                        i("div", {
                            key: 0,
                            class: vt([ [ "upload-img", `project-default-cover-${a.cover}` ], "common-img" ]),
                            style: {
                                width: "100%",
                                height: "160px"
                            }
                        }, null, 2)) : (s(), b(C, {
                            key: 1,
                            fit: "cover",
                            src: r(ha)(a.cover),
                            style: {
                                width: "100%",
                                height: "160px"
                            },
                            class: "common-img"
                        }, null, 8, [ "src" ])), o("div", null, [ c(x, {
                            class: "distribute distribute-status",
                            color: (mt = r(wt)({
                                list: z,
                                listAttrCode: "value",
                                rawAttrCode: a.teachStatus
                            })) == null ? void 0 : mt.color
                        }, {
                            default: d(() => {
                                var T;
                                return [ p(v((T = r(wt)({
                                    list: z,
                                    listAttrCode: "value",
                                    rawAttrCode: a.teachStatus
                                })) == null ? void 0 : T.label), 1) ];
                            }),
                            _: 2
                        }, 1032, [ "color" ]), a.type ? (s(), b(x, {
                            key: 0,
                            class: "distribute distribute-course",
                            color: "#fff"
                        }, {
                            default: d(() => [ p(v(a.type), 1) ]),
                            _: 2
                        }, 1024)) : gt("", !0) ]) ]), o("div", {
                            class: "enter-class pointer",
                            onClick: T => (async ({
                                row: _t
                            }) => {
                                let N = "";
                                const pt = {
                                    0: () => {
                                        N = "当前课程尚未开课，暂无法进入学习！", h.confirm(N, "提示", {
                                            confirmButtonText: "确 认",
                                            cancelButtonText: "取 消"
                                        }).then(async () => {});
                                    },
                                    1: () => {
                                        Lt({
                                            row: _t
                                        });
                                    },
                                    2: () => {
                                        N = "当前课程已结课，无法继续学习！", h.confirm(N, "提示", {
                                            confirmButtonText: "关 闭"
                                        }).then(async () => {});
                                    },
                                    default: () => {}
                                };
                                (pt[_t.teachStatus] || pt.default)();
                            })({
                                row: a
                            })
                        }, [ c(n, {
                            icon: "svg-icon:icon-enter-class",
                            size: 24
                        }), U ], 8, R) ]), o("div", K, [ o("div", G, [ y((s(), i("span", M, [ c(f, {
                            content: a.courseName
                        }, {
                            default: d(() => [ p(v(a.courseName), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ S ] ]) ]), o("div", Q, [ y((s(), 
                        i("span", V, [ c(f, {
                            content: `${a.yearName}-${a.termName}`,
                            class: "mr-12px"
                        }, {
                            default: d(() => [ p(v(`${a.yearName}-${a.termName}`), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ S ] ]), y((s(), i("span", W, [ c(f, {
                            content: a.teacherName
                        }, {
                            default: d(() => [ p(v(a.teacherName), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ S ] ]) ]), o("div", X, [ y((s(), 
                        i("span", Y, [ c(f, {
                            content: a.className
                        }, {
                            default: d(() => [ p(v(a.className), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ S ] ]), a.allowExit === "0" ? y((s(), 
                        b(B, {
                            key: 0,
                            operateList: r(Ot),
                            operateItem: a,
                            onHandleOperate: jt,
                            class: "more-operate"
                        }, null, 8, [ "operateList", "operateItem" ])), [ [ E, [ "teachmanager:teach-class-student:update" ] ] ]) : gt("", !0) ]) ]) ], 2);
                    }), 128)) ]), o("div", Z, [ c(Bt, {
                        limit: r(m).pageSize,
                        "onUpdate:limit": e[1] || (e[1] = a => r(m).pageSize = a),
                        page: r(m).pageNo,
                        "onUpdate:page": e[2] || (e[2] = a => r(m).pageNo = a),
                        total: r(it),
                        onPagination: w
                    }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (s(), i("div", tt, [ c(n, {
                        icon: "svg-icon:bg-no-data-stu",
                        size: 200,
                        class: "",
                        style: {
                            height: "160px"
                        }
                    }), at ])) ])) : (s(), i("div", et, [ c(n, {
                        icon: "svg-icon:bg-no-data-stu",
                        size: 200,
                        class: "",
                        style: {
                            height: "160px"
                        }
                    }), st, y((s(), b(_, {
                        type: "primary",
                        size: "large",
                        style: {
                            width: "120px"
                        },
                        onClick: e[3] || (e[3] = a => ct({
                            type: "joinCourse",
                            title: "加入课程"
                        }))
                    }, {
                        default: d(() => [ p("加入课程") ]),
                        _: 1
                    })), [ [ E, [ "teachmanager:teach-class-student:update" ] ] ]) ])) ]),
                    _: 1
                }), rt, c(oa, {
                    ref_key: "addTeachRef",
                    ref: L,
                    teachInfo: r(lt),
                    courseList: r(ut),
                    onHandleData: xt,
                    termOptionList: r(j)
                }, null, 8, [ "teachInfo", "courseList", "termOptionList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-37ab33bc" ] ]);
});

export {
    Sa as __tla,
    Ct as default
};