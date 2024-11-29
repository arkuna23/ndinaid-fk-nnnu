import {
    u as st,
    r as H,
    U as J,
    w as ot,
    f as rt,
    j as lt,
    o as a,
    c as e,
    t as s,
    z as y,
    B as o,
    a as n,
    v as r,
    k as c,
    l as d,
    aP as ct,
    F as it,
    y as nt,
    C as M,
    D as dt,
    A as h,
    aQ as pt,
    L as ut,
    K as mt,
    Y as _t,
    R as ht,
    S as vt,
    __tla as yt
} from "./index-6c08ea4c.js";

import {
    E as ft,
    __tla as gt
} from "./el-image-0d184777.js";

import {
    __tla as wt
} from "./el-image-viewer-2c0d56e4.js";

import {
    _ as Ct,
    a as It
} from "./noData-stu-project-a9c039eb.js";

import {
    d as bt,
    __tla as jt
} from "./formatTime-de6f1520.js";

import {
    i as kt,
    __tla as xt
} from "./index-47b8bbcb.js";

import {
    a as Nt,
    t as V,
    __tla as St
} from "./file-e038b35d.js";

import {
    _ as Tt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as At
} from "./throttle-1adeb119.js";

let W, Et = Promise.all([ (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return gt;
    } catch {}
})(), (() => {
    try {
        return wt;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})() ]).then(async () => {
    let f, C, I, b, j, k, x, N, S, T, A, E, P, B, L, z, F, D, K, O, Q;
    f = l => (ht("data-v-104d1c0f"), l = l(), vt(), l), C = {
        class: "my-teaching-course"
    }, I = {
        class: "title"
    }, b = {
        key: 0,
        class: "data-content"
    }, j = [ "onClick" ], k = {
        class: "course-cover"
    }, x = {
        class: "cover-content"
    }, N = {
        class: "course-info"
    }, S = {
        class: "row1"
    }, T = {
        class: "tooltip-content"
    }, A = {
        key: 0,
        class: "row2"
    }, E = {
        class: "row2-tea tooltip-content"
    }, P = {
        class: "row2-tea row2-tea2 tooltip-content"
    }, B = {
        key: 1,
        class: "row3"
    }, L = {
        class: "row3-class tooltip-content"
    }, z = {
        class: "row3"
    }, F = {
        class: "row3-class tooltip-content"
    }, D = {
        key: 1,
        class: "no-data-content"
    }, K = {
        key: 0,
        style: {
            position: "relative"
        }
    }, O = [ f(() => s("img", {
        src: It,
        alt: ""
    }, null, -1)), f(() => s("span", {
        style: {
            "font-size": "12px",
            color: "#999999",
            position: "absolute",
            bottom: "10px",
            left: "65px"
        }
    }, "暂无教学项目", -1)) ], Q = {
        key: 1,
        src: Ct,
        alt: ""
    }, W = Tt({
        __name: "myProjectList",
        props: {
            termId: {
                type: String,
                default: () => ""
            },
            isTeacher: {
                type: Boolean,
                default: !0
            }
        },
        setup(l) {
            const p = l, R = st(), v = H([]), U = H(0);
            J({
                termId: ""
            }), J({
                pageNo: 1,
                pageSize: 10
            }), ot(() => p.termId, i => {
                i && X();
            });
            const X = async () => {
                const i = await kt({
                    pageNo: 1,
                    pageSize: 4,
                    termId: p.termId
                }, p.isTeacher);
                return v.value = i ? i.list : [], v.value.forEach(g => {
                    g.cover = g.coverEid;
                }), U.value = i ? i.total : 0, i;
            }, Y = [ {
                value: "1",
                label: "未发布",
                color: "#EEF1F7"
            }, {
                value: "2",
                label: "未开始",
                color: "#245FE6"
            }, {
                value: "3",
                label: "进行中",
                color: "#34CE72"
            }, {
                value: "4",
                label: "已截止",
                color: "#E14635"
            } ], Z = () => {
                R.push({
                    name: p.isTeacher ? "TeaProjectList" : "StuProjectList",
                    params: {
                        termId: p.termId
                    }
                });
            };
            return rt(async () => {}), (i, g) => {
                const tt = pt, at = ft, $ = ut, u = mt, et = _t, m = lt("show-tip");
                return a(), e("div", C, [ s("div", I, [ s("span", {
                    class: y([ "left-title", l.isTeacher ? "blueBorder" : "yellowBorder" ])
                }, o(l.isTeacher ? "我的教学项目" : "我的项目") + "（" + o(n(U)) + "）", 3), s("span", {
                    class: "more",
                    onClick: Z
                }, [ r("更多 "), c(tt, {
                    style: {
                        position: "relative",
                        top: "2px"
                    }
                }, {
                    default: d(() => [ c(n(ct)) ]),
                    _: 1
                }) ]) ]), n(v).length ? (a(), e("div", b, [ (a(!0), e(it, null, nt(n(v), t => {
                    var q;
                    return a(), e("div", {
                        key: t.projectId,
                        class: y([ "course-list-common", [ "status-" + t.projectStatus ] ]),
                        onClick: w => {
                            return _ = t, G = p.isTeacher ? {} : {
                                status: 0
                            }, void R.push({
                                name: p.isTeacher ? "ProjectDetails" : "ProjectDetailsStu",
                                params: {
                                    projectId: _.projectId,
                                    classId: _.teachClassId,
                                    teachArrangementId: _.teachArrangementId,
                                    teachCourseId: _.teachCourseId,
                                    tab: "1",
                                    ...G
                                }
                            });
                            var _, G;
                        }
                    }, [ s("div", k, [ s("div", x, [ [ "1", "2", "3", "4" ].indexOf(t.cover) >= 0 ? (a(), 
                    e("div", {
                        key: 0,
                        class: y([ [ "upload-img", `project-default-cover-${t.cover}` ], "common-img" ]),
                        style: {
                            width: "100%",
                            height: "160px"
                        }
                    }, null, 2)) : (a(), M(at, {
                        key: 1,
                        fit: "cover",
                        src: n(Nt)(t.cover),
                        style: {
                            width: "100%",
                            height: "160px"
                        },
                        class: "common-img"
                    }, null, 8, [ "src" ])), s("div", null, [ c($, {
                        class: "distribute distribute-status tooltip-content",
                        color: (q = n(V)({
                            list: Y,
                            listAttrCode: "value",
                            rawAttrCode: t.projectStatus
                        })) == null ? void 0 : q.color
                    }, {
                        default: d(() => {
                            var w;
                            return [ r(o((w = n(V)({
                                list: Y,
                                listAttrCode: "value",
                                rawAttrCode: t.projectStatus
                            })) == null ? void 0 : w.label), 1) ];
                        }),
                        _: 2
                    }, 1032, [ "color" ]), t.type ? (a(), M($, {
                        key: 0,
                        class: "distribute distribute-course",
                        color: "#fff"
                    }, {
                        default: d(() => [ r(o(t.type), 1) ]),
                        _: 2
                    }, 1024)) : dt("", !0) ]) ]) ]), s("div", N, [ s("div", S, [ h((a(), 
                    e("span", T, [ c(u, {
                        content: t.projectName
                    }, {
                        default: d(() => [ r(o(t.projectName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]) ]), l.isTeacher ? (a(), 
                    e("div", A, [ h((a(), e("span", E, [ c(u, {
                        content: t.teachCourseName
                    }, {
                        default: d(() => [ r("所属课程：" + o(t.teachCourseName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]), h((a(), e("span", P, [ c(u, {
                        content: t.teachClassName
                    }, {
                        default: d(() => [ r("授课班级：" + o(t.teachClassName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]) ])) : (a(), e("div", B, [ h((a(), 
                    e("span", L, [ c(u, {
                        content: t.teachClassName
                    }, {
                        default: d(() => [ r("授课班级：" + o(t.teachClassName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]) ])), s("div", z, [ h((a(), 
                    e("span", F, [ c(u, {
                        content: t.className
                    }, {
                        default: d(() => [ r("截止时间：" + o(n(bt)(t, t, t.endTime)), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]) ]), s("div", {
                        class: y([ "row3", t.projectStatus == 3 ? "blueLine" : "redLine" ]),
                        style: {
                            display: "block"
                        }
                    }, [ r(" 项目进度："), c(et, {
                        percentage: t.progress,
                        style: {
                            display: "inline-block",
                            width: "calc(100% - 120px)"
                        },
                        "show-text": !1
                    }, null, 8, [ "percentage" ]), r("  " + o(t.progress) + "% ", 1) ], 2) ]) ], 10, j);
                }), 128)) ])) : (a(), e("div", D, [ l.isTeacher ? (a(), e("div", K, O)) : (a(), 
                e("img", Q)) ])) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-104d1c0f" ] ]);
});

export {
    Et as __tla,
    W as default
};