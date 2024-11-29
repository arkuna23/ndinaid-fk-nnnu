import {
    _ as tt,
    __tla as at
} from "./index-c834085f.js";

import {
    u as st,
    r as R,
    U as T,
    w as et,
    f as ot,
    j as rt,
    o as a,
    c as o,
    t as s,
    v as r,
    k as l,
    l as n,
    a as i,
    aP as lt,
    F as ct,
    y as nt,
    z as U,
    C as W,
    B as c,
    D as $,
    A as _,
    aQ as it,
    L as ut,
    K as dt,
    R as mt,
    S as _t,
    __tla as pt
} from "./index-6c08ea4c.js";

import {
    E as vt,
    __tla as yt
} from "./el-image-0d184777.js";

import {
    __tla as ft
} from "./el-image-viewer-2c0d56e4.js";

import {
    a as ht,
    __tla as gt
} from "./index-cfc63ccf.js";

import {
    a as Ct,
    t as G,
    __tla as wt
} from "./file-e038b35d.js";

import {
    _ as It
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as bt
} from "./throttle-1adeb119.js";

let H, kt = Promise.all([ (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return ft;
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
        return bt;
    } catch {}
})() ]).then(async () => {
    let f, h, g, C, w, I, b, k, S, A, x, N, j, z, E, D, F, P;
    f = {
        class: "my-teaching-course"
    }, h = {
        class: "title"
    }, g = (u => (mt("data-v-1496e5a2"), u = u(), _t(), u))(() => s("span", {
        class: "left-title"
    }, "我的教学课程", -1)), C = {
        key: 0,
        class: "data-content"
    }, w = {
        class: "course-cover"
    }, I = {
        class: "cover-content"
    }, b = {
        key: 1,
        class: "distribute distribute-course ellipsis"
    }, k = {
        class: "course-info"
    }, S = {
        class: "row1"
    }, A = {
        class: "tooltip-content"
    }, x = {
        class: "row1-type"
    }, N = {
        class: "row2 tooltip-content"
    }, j = {
        class: "row3"
    }, z = {
        class: "row3-class tooltip-content"
    }, E = {
        class: "row3-stu tooltip-content"
    }, D = {
        class: "enter-class"
    }, F = [ "onClick" ], P = {
        key: 1,
        class: "no-data-content"
    }, H = It({
        __name: "myTeachingCourses",
        props: {
            termId: {
                type: String,
                default: () => ""
            }
        },
        setup(u) {
            const q = u, B = st(), p = R([]), J = R(0);
            T({
                termId: ""
            });
            const K = T({
                pageNo: 1,
                pageSize: 10
            });
            et(() => q.termId, e => {
                e && M();
            });
            const M = async () => {
                const e = await ht({
                    pageNo: K.pageNo,
                    pageSize: K.pageSize,
                    termId: q.termId
                });
                return p.value = e == null ? void 0 : e.list, J.value = e == null ? void 0 : e.total, 
                e;
            }, L = [ {
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
            } ], V = ({
                row: e
            }) => {
                B.push({
                    name: "Course"
                });
            };
            return ot(async () => {}), (e, St) => {
                const X = it, Y = vt, O = ut, d = dt, Z = tt, m = rt("show-tip");
                return a(), o("div", f, [ s("div", h, [ g, s("span", {
                    class: "more",
                    onClick: V
                }, [ r("更多 "), l(X, null, {
                    default: n(() => [ l(i(lt)) ]),
                    _: 1
                }) ]) ]), i(p).length ? (a(), o("div", C, [ (a(!0), o(ct, null, nt(i(p).slice(0, 4), t => {
                    var Q;
                    return a(), o("div", {
                        key: t.arrangementId,
                        class: U([ "course-list-common", [ "status-" + t.arrangementStatus ] ])
                    }, [ s("div", w, [ s("div", I, [ [ "1", "2", "3", "4" ].indexOf(t.cover) >= 0 ? (a(), 
                    o("div", {
                        key: 0,
                        class: U([ [ "upload-img", `project-default-cover-${t.cover}` ], "common-img" ]),
                        style: {
                            width: "100%",
                            height: "160px"
                        }
                    }, null, 2)) : (a(), W(Y, {
                        key: 1,
                        fit: "cover",
                        src: i(Ct)(t.cover),
                        style: {
                            width: "100%",
                            height: "160px"
                        },
                        class: "common-img"
                    }, null, 8, [ "src" ])), s("div", null, [ l(O, {
                        class: "distribute distribute-status tooltip-content",
                        color: (Q = i(G)({
                            list: L,
                            listAttrCode: "value",
                            rawAttrCode: t.teachStatus
                        })) == null ? void 0 : Q.color
                    }, {
                        default: n(() => {
                            var v;
                            return [ r(c((v = i(G)({
                                list: L,
                                listAttrCode: "value",
                                rawAttrCode: t.teachStatus
                            })) == null ? void 0 : v.label), 1) ];
                        }),
                        _: 2
                    }, 1032, [ "color" ]), t.type ? (a(), W(O, {
                        key: 0,
                        class: "distribute distribute-course",
                        color: "#fff"
                    }, {
                        default: n(() => [ r(c(t.type), 1) ]),
                        _: 2
                    }, 1024)) : $("", !0), t.type ? (a(), o("div", b, c(t.type), 1)) : $("", !0) ]) ]) ]), s("div", k, [ s("div", S, [ _((a(), 
                    o("span", A, [ l(d, {
                        content: t.name
                    }, {
                        default: n(() => [ r(c(t.name), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]), s("span", x, c(t.code), 1) ]), _((a(), 
                    o("div", N, [ l(d, {
                        content: t.termName
                    }, {
                        default: n(() => [ r(c(t.termName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]), s("div", j, [ _((a(), 
                    o("span", z, [ r("班级： "), l(d, {
                        content: t.classCount.toString()
                    }, {
                        default: n(() => [ r(c(t.classCount), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]), _((a(), o("span", E, [ r("学生："), l(d, {
                        content: t.studentCount.toString()
                    }, {
                        default: n(() => [ r(c(t.studentCount), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ m ] ]), s("div", D, [ s("span", {
                        class: "enter-span",
                        onClick: v => (({
                            row: y
                        }) => {
                            B.push({
                                name: "CourseDetails",
                                params: {
                                    id: y.id
                                },
                                query: {
                                    termId: y.termId,
                                    teachArrangementId: y.teachArrangementId
                                }
                            });
                        })({
                            row: t
                        })
                    }, "进入课程", 8, F) ]) ]) ]) ], 2);
                }), 128)) ])) : (a(), o("div", P, [ l(Z, {
                    style: {
                        height: "260px"
                    },
                    info: "暂无教学课程",
                    svgIcon: "svg-icon:bg-no-data-course-tea"
                }) ])) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-1496e5a2" ] ]);
});

export {
    kt as __tla,
    H as default
};