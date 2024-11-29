import {
    p as ot,
    u as lt,
    r as M,
    U as V,
    w as rt,
    f as ct,
    j as nt,
    o as s,
    c as o,
    t as e,
    B as l,
    a as r,
    v as i,
    k as c,
    l as u,
    aP as it,
    F as ut,
    y as mt,
    z as W,
    C as dt,
    D as pt,
    A as _,
    aQ as _t,
    L as ht,
    K as ft,
    E as vt,
    i as h,
    a8 as yt,
    R as gt,
    S as wt,
    __tla as Ct
} from "./index-6c08ea4c.js";

import {
    E as xt,
    __tla as bt
} from "./el-image-0d184777.js";

import {
    __tla as It
} from "./el-image-viewer-2c0d56e4.js";

import {
    a as Nt,
    __tla as St
} from "./index-b22fcdff.js";

import {
    a as kt,
    t as X,
    __tla as At
} from "./file-e038b35d.js";

import {
    _ as Bt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as zt
} from "./throttle-1adeb119.js";

let Y, Et = Promise.all([ (() => {
    try {
        return Ct;
    } catch {}
})(), (() => {
    try {
        return bt;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})() ]).then(async () => {
    let g, w, C, x, b, I, N, S, k, A, B, z, E, F, L, T, j, D, P, R;
    g = "" + new URL("noData-stu-course-b456ef66.png", import.meta.url).href, w = {
        class: "my-teaching-course"
    }, C = {
        class: "title"
    }, x = {
        class: "left-title"
    }, b = {
        key: 0,
        class: "data-content"
    }, I = {
        class: "course-cover"
    }, N = {
        class: "cover-content"
    }, S = {
        key: 0,
        class: "distribute distribute-course ellipsis"
    }, k = {
        class: "course-info"
    }, A = {
        class: "row1"
    }, B = {
        class: "tooltip-content"
    }, z = {
        class: "row2"
    }, E = {
        class: "tooltip-content mr-12px"
    }, F = {
        class: "row2-tea tooltip-content"
    }, L = {
        class: "row3"
    }, T = {
        class: "row3-class tooltip-content"
    }, j = {
        class: "enter-class"
    }, D = [ "onClick" ], P = {
        key: 1,
        class: "no-data-content"
    }, R = [ (m => (gt("data-v-ad85e439"), m = m(), wt(), m))(() => e("img", {
        src: g,
        alt: ""
    }, null, -1)) ], Y = Bt({
        __name: "myCourses",
        props: {
            termId: {
                type: String,
                default: () => ""
            }
        },
        setup(m) {
            const U = ot(), K = m, O = lt(), f = M([]), Q = M(0);
            V({
                termId: ""
            });
            const $ = V({
                pageNo: 1,
                pageSize: 10
            });
            rt(() => K.termId, a => {
                a && Z();
            });
            const Z = async () => {
                const a = await Nt({
                    pageNo: $.pageNo,
                    pageSize: $.pageSize,
                    termId: K.termId
                });
                return f.value = a == null ? void 0 : a.list, Q.value = a == null ? void 0 : a.total, 
                a;
            }, q = [ {
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
            } ], G = ({
                row: a
            }) => {
                O.push({
                    name: "StudentLearnCourse",
                    params: {
                        teachCourseId: a.teachCourseId,
                        teacherId: a.teacherId,
                        teachArrangementId: a.id,
                        classId: a.teachClassId
                    }
                });
            }, tt = ({
                row: a
            }) => {
                O.push({
                    name: "CourseStudy"
                });
            };
            return ct(async () => {}), (a, Ft) => {
                const at = _t, et = xt, st = ht, d = ft, p = nt("show-tip");
                return s(), o("div", w, [ e("div", C, [ e("span", x, "我的课程（" + l(r(Q)) + "）", 1), e("span", {
                    class: "more",
                    onClick: tt
                }, [ i("更多 "), c(at, {
                    style: {
                        position: "relative",
                        top: "2px"
                    }
                }, {
                    default: u(() => [ c(r(it)) ]),
                    _: 1
                }) ]) ]), r(f).length ? (s(), o("div", b, [ (s(!0), o(ut, null, mt(r(f).slice(0, 4), t => {
                    var H;
                    return s(), o("div", {
                        key: t.arrangementId,
                        class: W([ "course-list-common", [ "status-" + t.arrangementStatus ] ])
                    }, [ e("div", I, [ e("div", N, [ [ "1", "2", "3", "4" ].indexOf(t.cover) >= 0 ? (s(), 
                    o("div", {
                        key: 0,
                        class: W([ [ "upload-img", `project-default-cover-${t.cover}` ], "common-img" ]),
                        style: {
                            width: "100%",
                            height: "160px"
                        }
                    }, null, 2)) : (s(), dt(et, {
                        key: 1,
                        fit: "cover",
                        src: r(kt)(t.cover),
                        style: {
                            width: "100%",
                            height: "160px"
                        },
                        class: "common-img"
                    }, null, 8, [ "src" ])), e("div", null, [ c(st, {
                        class: "distribute distribute-status tooltip-content",
                        color: (H = r(X)({
                            list: q,
                            listAttrCode: "value",
                            rawAttrCode: t.teachStatus
                        })) == null ? void 0 : H.color
                    }, {
                        default: u(() => {
                            var v;
                            return [ i(l((v = r(X)({
                                list: q,
                                listAttrCode: "value",
                                rawAttrCode: t.teachStatus
                            })) == null ? void 0 : v.label), 1) ];
                        }),
                        _: 2
                    }, 1032, [ "color" ]), t.type ? (s(), o("div", S, l(t.type), 1)) : pt("", !0) ]) ]) ]), e("div", k, [ e("div", A, [ _((s(), 
                    o("span", B, [ c(d, {
                        content: t.courseName
                    }, {
                        default: u(() => [ i(l(t.courseName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ p ] ]) ]), e("div", z, [ _((s(), 
                    o("span", E, [ c(d, {
                        content: t.termName,
                        class: "mr-12px"
                    }, {
                        default: u(() => [ i(l(t.termName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ p ] ]), _((s(), o("span", F, [ c(d, {
                        content: t.teacherName
                    }, {
                        default: u(() => [ i(l(t.teacherName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ p ] ]) ]), e("div", L, [ _((s(), 
                    o("span", T, [ c(d, {
                        content: t.className
                    }, {
                        default: u(() => [ i(l(t.className), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ p ] ]), e("div", j, [ e("span", {
                        class: "enter-span",
                        onClick: v => (async ({
                            row: y
                        }) => {
                            let n = "";
                            const J = {
                                0: () => {
                                    n = "当前课程尚未开课，暂无法进入学习，请留意系统开课通知！", U.confirm(n, "提示", {
                                        confirmButtonText: "确 认",
                                        cancelButtonText: "取 消"
                                    }).then(async () => {});
                                },
                                1: () => {
                                    n = "当前课程已结课，无法继续学习！", U.confirm(n, "提示", {
                                        confirmButtonText: "关 闭"
                                    }).then(async () => {});
                                },
                                2: () => {
                                    n = "当前课程已结课，教师设置允许继续学习，但所有学习行为不再计入教学统计！", vt({
                                        title: "提示",
                                        message: h("p", null, [ h("p", {
                                            style: ""
                                        }, n), h("p", {
                                            style: "color: #245FE6;text-align: center;font-size: 18px;font-weight: bold;margin-top: 12px;"
                                        }), h(yt, {
                                            style: "position: absolute;left: 12px;bottom: 12px;",
                                            label: "不再提醒"
                                        }) ]),
                                        customClass: "neu-confirm-message-box",
                                        showCancelButton: !1,
                                        confirmButtonText: "知道了"
                                    }).then(() => {
                                        G({
                                            row: y
                                        });
                                    });
                                },
                                3: () => {
                                    G({
                                        row: y
                                    });
                                },
                                default: () => {}
                            };
                            (J[y.teachStatus] || J.default)();
                        })({
                            row: t
                        })
                    }, "开始学习", 8, D) ]) ]) ]) ], 2);
                }), 128)) ])) : (s(), o("div", P, R)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ad85e439" ] ]);
});

export {
    Et as __tla,
    Y as default
};