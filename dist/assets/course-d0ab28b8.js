import {
    _ as Mt,
    __tla as Jt
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Pt,
    __tla as jt
} from "./index-c834085f.js";

import {
    _ as Rt,
    __tla as Ut
} from "./index-c4ca0ced.js";

import {
    _ as qt,
    __tla as Ft
} from "./index-f977be78.js";

import {
    u as Kt,
    p as Vt,
    e as Wt,
    r as l,
    U as yt,
    f as $t,
    j as ft,
    o as r,
    c as d,
    k as i,
    l as _,
    a as o,
    t as n,
    A as f,
    C as S,
    v as h,
    F as gt,
    y as Gt,
    z as vt,
    B as g,
    D as Qt,
    bo as Xt,
    _ as Yt,
    J as Zt,
    K as te,
    L as ee,
    R as ae,
    S as se,
    fo as re,
    __tla as oe
} from "./index-6c08ea4c.js";

import {
    E as ce,
    __tla as le
} from "./el-image-0d184777.js";

import {
    __tla as ne
} from "./el-image-viewer-2c0d56e4.js";

import {
    _ as ie,
    __tla as ue
} from "./index-1024512a.js";

import de, {
    __tla as me
} from "./addTeach-52c31c64.js";

import {
    g as pe,
    a as _e,
    o as he,
    p as ye,
    q as fe,
    r as ge,
    s as ve,
    t as we,
    __tla as Se
} from "./index-cfc63ccf.js";

import {
    a as Ie,
    t as wt,
    __tla as Ce
} from "./file-e038b35d.js";

import {
    _ as ke
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as be
} from "./index-993301ca.js";

import {
    __tla as xe
} from "./index-5adb716b.js";

import {
    __tla as Ae
} from "./throttle-1adeb119.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ne
} from "./DeptTag-1be092ce.js";

import {
    __tla as ze
} from "./index-ef4d146e.js";

import {
    __tla as Te
} from "./index-13c88727.js";

import {
    __tla as Ee
} from "./index-9567cbf6.js";

let St, Le = Promise.all([ (() => {
    try {
        return Jt;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})() ]).then(async () => {
    let I, D, H, M, J, P, j, R, U, q, F, K, V, W, $, G, Q, X, Y, Z, tt, et, at;
    I = C => (ae("data-v-ffedb42c"), C = C(), se(), C), D = {
        key: 0,
        class: "neu-has-data"
    }, H = {
        class: "top-box"
    }, M = {
        class: "right btns-box header-btns pt-1"
    }, J = {
        key: 0,
        style: {
            flex: "1",
            display: "flex",
            "flex-direction": "column"
        }
    }, P = {
        class: "data-content"
    }, j = {
        class: "course-cover"
    }, R = {
        class: "cover-content"
    }, U = {
        key: 0,
        class: "distribute distribute-course ellipsis"
    }, q = [ "onClick" ], F = I(() => n("span", null, "进入课程", -1)), K = {
        class: "course-info"
    }, V = {
        class: "row1"
    }, W = {
        class: "tooltip-content"
    }, $ = {
        class: "row1-type"
    }, G = {
        class: "row2 tooltip-content"
    }, Q = {
        class: "row3"
    }, X = {
        class: "row3-class tooltip-content"
    }, Y = {
        class: "row3-stu tooltip-content"
    }, Z = {
        class: "bottom-box"
    }, tt = {
        key: 1,
        class: "neu-no-data"
    }, et = I(() => n("p", {
        class: "my-4"
    }, "暂无数据", -1)), at = I(() => n("div", null, null, -1)), St = ke({
        __name: "course",
        setup(C) {
            const It = Kt(), k = Vt(), Ct = Wt(() => [ {
                label: "课程状态",
                key: "teachStatus",
                type: "list",
                options: N
            }, {
                label: "开课学期",
                key: "termId",
                type: "list",
                options: x.value,
                default: dt.value
            } ]), N = [ {
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
            } ], st = l({}), rt = l({}), z = l(null), T = async ({
                type: t,
                title: e,
                row: s
            }) => {
                const u = {
                    create: () => {},
                    teaEdit: async () => {
                        st.value = await kt(s.teachArrangementId), rt.value = JSON.parse(JSON.stringify(st.value));
                    },
                    default: () => {}
                };
                await (u[t] || u.default)(), z.value.handleOpen({
                    type: t,
                    title: e
                });
            }, kt = async t => await ye({
                id: t
            }), E = l(null), bt = async ({
                type: t,
                params: e
            }) => {
                const s = {
                    create: () => {
                        E.value = xt;
                    },
                    teaEdit: () => {
                        E.value = Lt;
                    },
                    default: () => {}
                };
                (s[t] || s.default)(), await E.value({
                    params: e
                }), Xt.success("操作成功"), z.value.handleClose(), v();
            }, xt = async ({
                params: t
            }) => {
                const {
                    id: e,
                    courseSource: s,
                    courseName: u,
                    courseCode: p,
                    termId: m,
                    courseId: c
                } = t;
                return await fe({
                    id: e,
                    courseSource: s,
                    courseName: u,
                    courseCode: p,
                    termId: m,
                    courseId: c,
                    cover: re(1, 4).toString()
                });
            }, b = l([]);
            l(null), l({}), l([]);
            const x = l([]), At = async ({
                id: t,
                teachArrangementId: e
            }) => await we({
                id: t,
                teachArrangementId: e
            }), ot = () => {
                y.pageNo = 1, y.pageSize = 10;
            }, L = yt({
                keywords: "",
                termId: "",
                teachStatus: ""
            }), y = yt({
                pageNo: 1,
                pageSize: 10
            }), Nt = t => {
                Object.keys(L).forEach(e => L[e] = t[e]), ot(), v();
            }, ct = l(0), v = async () => {
                const t = await _e({
                    pageNo: y.pageNo,
                    pageSize: y.pageSize,
                    ...L
                });
                return b.value = t == null ? void 0 : t.list, ct.value = t == null ? void 0 : t.total, 
                t;
            }, lt = ({
                row: t
            }) => {
                It.push({
                    name: "CourseDetails",
                    params: {
                        id: t.id
                    },
                    query: {
                        termId: t.termId,
                        teachArrangementId: t.teachArrangementId
                    }
                });
            }, nt = l([]), it = l([ {
                name: "编辑",
                type: "teaEdit",
                showMore: !1,
                title: "编辑课程",
                teachStatus: "0,1,2",
                createSource: "2"
            }, {
                name: "开课",
                type: "openTeaching",
                showMore: !1,
                title: "编辑课程",
                teachStatus: "0, 2",
                createSource: "1"
            }, {
                name: "结课",
                type: "openTeaching",
                showMore: !1,
                title: "编辑课程",
                teachStatus: "1",
                createSource: "1"
            }, {
                name: "删除",
                type: "delete",
                showMore: !1,
                title: "",
                teachStatus: "0,1,2",
                createSource: "2"
            } ]), zt = t => {
                const e = t.teachStatus;
                return t.createSource === "2" ? it.value.filter(s => s.teachStatus.includes(e)) : it.value.filter(s => s.teachStatus.includes(e) && s.createSource === "1");
            }, Tt = ({
                currentOperate: t,
                row: e
            }) => {
                const {
                    type: s,
                    title: u
                } = t, p = {
                    openTeaching: () => {
                        let m = "", c = "";
                        e.teachStatus === "0" || e.teachStatus === "2" ? (m = "开课后学生可进入课程进行学习，确定开课？", 
                        c = "1") : (m = "结课后学生无法继续进入课程学习且课程下不可新增学生，确定结课？", c = "2"), 
                        k.confirm(m, "提示", {
                            confirmButtonText: "确 认",
                            cancelButtonText: "取 消"
                        }).then(async () => {
                            await Et({
                                id: e.id,
                                teachStatus: c
                            }), k.success("操作成功"), v();
                        });
                    },
                    teaEdit: () => {
                        T({
                            type: s,
                            title: "",
                            row: e,
                            title: u
                        });
                    },
                    delete: () => {
                        (({
                            id: m,
                            teachArrangementId: c
                        }) => {
                            k.confirm("课程被删除后师生端皆不可见，且课程下已产生教学及学习数据均将被清空（无法撤销恢复），确定删除？", "提示", {
                                confirmButtonText: "确 认",
                                cancelButtonText: "取 消"
                            }).then(async () => {
                                await At({
                                    id: m,
                                    teachArrangementId: c
                                }), k.success("操作成功"), v();
                            });
                        })({
                            id: e.id,
                            teachArrangementId: e.teachArrangementId
                        });
                    },
                    default: () => {}
                };
                (p[s] || p.default)();
            }, Et = async ({
                id: t,
                teachStatus: e
            }) => await ge({
                id: t,
                teachStatus: e
            }), Lt = async ({
                params: t
            }) => {
                const {
                    id: e,
                    teachArrangementId: s,
                    courseSource: u,
                    courseName: p,
                    courseCode: m,
                    termId: c,
                    courseId: O
                } = t;
                return await ve({
                    id: e,
                    courseSource: u,
                    teachArrangementId: s,
                    courseId: O,
                    termId: c,
                    courseName: p,
                    courseCode: m
                });
            };
            l("");
            const ut = l(!1), dt = l(""), mt = () => {
                var e;
                const t = (e = x.value.filter(s => s.isCurrentTerm === 0)) == null ? void 0 : e.pop();
                dt.value = (t == null ? void 0 : t.id) || "";
            };
            return $t(async () => {
                await (async () => {
                    const t = await pe();
                    return t.map(e => (e.value = e.id, e.label = e.name, e)), x.value = t, 
                    mt(), t;
                })(), (async () => {
                    const t = await he({
                        keywords: ""
                    });
                    nt.value = t || [], mt();
                })(), (async () => {
                    const t = await v();
                    ut.value = (t == null ? void 0 : t.total) > 0;
                })();
            }), (t, e) => {
                const s = ie, u = Yt, p = Zt, m = ce, c = te, O = ee, Ot = qt, Bt = Rt, Dt = Pt, Ht = Mt, B = ft("hasPermi"), w = ft("show-tip");
                return r(), d(gt, null, [ i(Ht, {
                    class: "course-teaching",
                    noPadding: !0,
                    noBgColor: !0
                }, {
                    default: _(() => [ o(ut) || o(b).length ? (r(), d("div", D, [ n("div", H, [ i(s, {
                        searchList: o(Ct),
                        onHandleSearch: Nt,
                        onHandleReset: ot,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "课程名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), n("div", M, [ f((r(), S(p, {
                        type: "primary",
                        onClick: e[0] || (e[0] = a => T({
                            type: "create",
                            title: "新建课程"
                        })),
                        size: "large"
                    }, {
                        default: _(() => [ i(u, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), h(" 新建课程 ") ]),
                        _: 1
                    })), [ [ B, [ "teachmanager:teach-course:create" ] ] ]) ]) ]), o(b).length ? (r(), 
                    d("div", J, [ n("div", P, [ (r(!0), d(gt, null, Gt(o(b), a => {
                        var pt, _t, ht;
                        return r(), d("div", {
                            key: a.id,
                            class: vt([ "course-list-common", [ "status-" + a.arrangementStatus ] ])
                        }, [ n("div", j, [ n("div", R, [ [ "1", "2", "3", "4" ].indexOf(a.cover) >= 0 ? (r(), 
                        d("div", {
                            key: 0,
                            class: vt([ [ "upload-img", `project-default-cover-${a.cover}` ], "common-img" ]),
                            style: {
                                width: "100%",
                                height: "160px"
                            }
                        }, null, 2)) : (r(), S(m, {
                            key: 1,
                            fit: "cover",
                            src: o(Ie)(a.cover),
                            style: {
                                width: "100%",
                                height: "160px"
                            },
                            class: "common-img"
                        }, null, 8, [ "src" ])), n("div", null, [ f((r(), S(O, {
                            class: "distribute distribute-status tooltip-content",
                            color: (pt = o(wt)({
                                list: N,
                                listAttrCode: "value",
                                rawAttrCode: a.teachStatus
                            })) == null ? void 0 : pt.color
                        }, {
                            default: _(() => [ i(c, {
                                content: a.name
                            }, {
                                default: _(() => {
                                    var A;
                                    return [ h(g((A = o(wt)({
                                        list: N,
                                        listAttrCode: "value",
                                        rawAttrCode: a.teachStatus
                                    })) == null ? void 0 : A.label), 1) ];
                                }),
                                _: 2
                            }, 1032, [ "content" ]) ]),
                            _: 2
                        }, 1032, [ "color" ])), [ [ w ] ]), a.type ? (r(), d("div", U, g(a.type), 1)) : Qt("", !0) ]) ]), n("div", {
                            class: "enter-class pointer",
                            onClick: A => lt({
                                row: a
                            })
                        }, [ i(u, {
                            icon: "svg-icon:icon-enter-class",
                            size: 24,
                            onClick: A => lt({
                                row: a
                            })
                        }, null, 8, [ "onClick" ]), F ], 8, q) ]), n("div", K, [ n("div", V, [ f((r(), 
                        d("span", W, [ i(c, {
                            content: a.name
                        }, {
                            default: _(() => [ h(g(a.name), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ w ] ]), n("span", $, g(a.code), 1) ]), f((r(), 
                        d("div", G, [ i(c, {
                            content: a.termName
                        }, {
                            default: _(() => [ h(g(a.termName), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ w ] ]), n("div", Q, [ f((r(), 
                        d("span", X, [ h("班级： "), i(c, {
                            content: (_t = a.classCount) == null ? void 0 : _t.toString()
                        }, {
                            default: _(() => [ h(g(a.classCount), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ w ] ]), f((r(), d("span", Y, [ h("学生："), i(c, {
                            content: (ht = a.studentCount) == null ? void 0 : ht.toString()
                        }, {
                            default: _(() => [ h(g(a.studentCount), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]) ])), [ [ w ] ]), f(i(Ot, {
                            operateList: zt(a),
                            operateItem: a,
                            onHandleOperate: Tt,
                            class: "more-operate"
                        }, null, 8, [ "operateList", "operateItem" ]), [ [ B, [ "teachmanager:teach-course:update" ] ] ]) ]) ]) ], 2);
                    }), 128)) ]), n("div", Z, [ i(Bt, {
                        limit: o(y).pageSize,
                        "onUpdate:limit": e[1] || (e[1] = a => o(y).pageSize = a),
                        page: o(y).pageNo,
                        "onUpdate:page": e[2] || (e[2] = a => o(y).pageNo = a),
                        total: o(ct),
                        onPagination: v
                    }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (r(), S(Dt, {
                        key: 1,
                        class: "noData"
                    })) ])) : (r(), d("div", tt, [ i(u, {
                        icon: "svg-icon:bg-no-data",
                        size: 200,
                        class: "",
                        style: {
                            height: "160px"
                        }
                    }), et, f((r(), S(p, {
                        type: "primary",
                        size: "large",
                        style: {
                            width: "120px"
                        },
                        onClick: e[3] || (e[3] = a => T({
                            type: "create",
                            title: "新建课程"
                        }))
                    }, {
                        default: _(() => [ h("新建课程") ]),
                        _: 1
                    })), [ [ B, [ "teachmanager:teach-course:create" ] ] ]) ])) ]),
                    _: 1
                }), at, i(de, {
                    ref_key: "addTeachRef",
                    ref: z,
                    teachInfo: o(rt),
                    courseList: o(nt),
                    onHandleData: bt,
                    termOptionList: o(x)
                }, null, 8, [ "teachInfo", "courseList", "termOptionList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-ffedb42c" ] ]);
});

export {
    Le as __tla,
    St as default
};