import {
    _ as ct,
    __tla as nt
} from "./index-c4ca0ced.js";

import {
    h as it,
    u as ut,
    T as pt,
    e as M,
    r as N,
    f as _t,
    j as mt,
    o as a,
    c as e,
    k as r,
    a as l,
    t as o,
    F as dt,
    y as vt,
    z as S,
    C as Q,
    l as p,
    v as c,
    B as i,
    D as ht,
    A as h,
    L as yt,
    K as ft,
    Y as gt,
    R as jt,
    S as bt,
    __tla as Nt
} from "./index-6c08ea4c.js";

import {
    E as St,
    __tla as kt
} from "./el-image-0d184777.js";

import {
    __tla as wt
} from "./el-image-viewer-2c0d56e4.js";

import {
    _ as Ct,
    __tla as It
} from "./index-1024512a.js";

import {
    _ as xt,
    a as zt
} from "./noData-stu-project-a9c039eb.js";

import {
    i as Et,
    __tla as At
} from "./index-47b8bbcb.js";

import {
    a as Lt,
    t as V,
    __tla as Pt
} from "./file-e038b35d.js";

import {
    d as Ft,
    __tla as Dt
} from "./formatTime-de6f1520.js";

import {
    _ as Ut
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Bt
} from "./index-993301ca.js";

import {
    __tla as Tt
} from "./throttle-1adeb119.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ht
} from "./DeptTag-1be092ce.js";

import {
    __tla as Kt
} from "./index-ef4d146e.js";

let W, Ot = Promise.all([ (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return wt;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Bt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return Ht;
    } catch {}
})(), (() => {
    try {
        return Kt;
    } catch {}
})() ]).then(async () => {
    let g, k, w, C, I, x, z, E, A, L, P, F, D, U, B, T, H, K, O, R;
    g = y => (jt("data-v-cb402f3a"), y = y(), bt(), y), k = {
        class: "my-teaching-course projectBox"
    }, w = {
        key: 0,
        class: "data-content"
    }, C = [ "onClick" ], I = {
        class: "course-cover"
    }, x = {
        class: "cover-content"
    }, z = {
        class: "course-info"
    }, E = {
        class: "row1"
    }, A = {
        class: "tooltip-content"
    }, L = {
        key: 0,
        class: "row2"
    }, P = {
        class: "row2-tea tooltip-content"
    }, F = {
        class: "row2-tea row2-tea2 tooltip-content"
    }, D = {
        key: 1,
        class: "row3"
    }, U = {
        class: "row3-class tooltip-content"
    }, B = {
        class: "row3"
    }, T = {
        class: "row3-class tooltip-content"
    }, H = {
        key: 1,
        class: "no-data-content"
    }, K = {
        key: 0,
        style: {
            position: "relative"
        }
    }, O = [ g(() => o("img", {
        src: zt,
        alt: ""
    }, null, -1)), g(() => o("span", {
        style: {
            "font-size": "12px",
            color: "#999999",
            position: "absolute",
            bottom: "10px",
            left: "65px"
        }
    }, "暂无教学项目", -1)) ], R = {
        key: 1,
        src: xt,
        alt: ""
    }, W = Ut({
        __name: "myProjectList",
        setup(y) {
            const X = it(), Z = ut(), tt = pt(), _ = M(() => X.getUser.curIdentity == 4), at = M(() => [ {
                label: "项目状态",
                key: "projectStatus",
                type: "list",
                options: _.value ? [ {
                    value: 1,
                    label: "未发布"
                }, {
                    value: 2,
                    label: "未开始"
                }, {
                    value: 3,
                    label: "进行中"
                }, {
                    value: 4,
                    label: "已截止"
                } ] : [ {
                    value: 2,
                    label: "未开始"
                }, {
                    value: 3,
                    label: "进行中"
                }, {
                    value: 4,
                    label: "已截止"
                } ]
            } ]), Y = [ {
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
            } ], s = N({
                projectStatus: "",
                projectName: "",
                pageNo: 1,
                pageSize: 12
            }), f = N([]), $ = N(100), et = n => {
                s.value.pageNo = 1, s.value.projectStatus = n.projectStatus, s.value.projectName = n.projectName, 
                j();
            }, j = () => {
                Et({
                    pageNo: s.value.pageNo,
                    pageSize: s.value.pageSize,
                    termId: tt.params.termId,
                    projectName: s.value.projectName,
                    projectStatusList: s.value.projectStatus ? [ s.value.projectStatus ] : []
                }, _.value).then(n => {
                    f.value = n ? n.list : [], f.value.forEach(u => {
                        u.cover = u.coverEid;
                    }), $.value = n ? n.total : 0;
                });
            };
            return _t(() => {
                j();
            }), (n, u) => {
                const lt = Ct, st = St, q = yt, m = ft, ot = gt, rt = ct, d = mt("show-tip");
                return a(), e("div", null, [ r(lt, {
                    searchList: l(at),
                    onHandleSearch: et,
                    class: "left",
                    keywordsInfo: {
                        key: "projectName",
                        label: "项目名称"
                    }
                }, null, 8, [ "searchList" ]), o("div", k, [ l(f).length ? (a(), 
                e("div", w, [ (a(!0), e(dt, null, vt(l(f), t => {
                    var G;
                    return a(), e("div", {
                        key: t.projectId,
                        class: S([ "course-list-common", [ "status-" + t.projectStatus ] ]),
                        onClick: b => {
                            return v = t, J = _.value ? {} : {
                                status: 0
                            }, void Z.push({
                                name: _.value ? "ProjectDetails" : "ProjectDetailsStu",
                                params: {
                                    projectId: v.projectId,
                                    classId: v.teachClassId,
                                    teachArrangementId: v.teachArrangementId,
                                    teachCourseId: v.teachCourseId,
                                    tab: "1",
                                    ...J
                                }
                            });
                            var v, J;
                        }
                    }, [ o("div", I, [ o("div", x, [ [ "1", "2", "3", "4" ].indexOf(t.cover) >= 0 ? (a(), 
                    e("div", {
                        key: 0,
                        class: S([ [ "upload-img", `project-default-cover-${t.cover}` ], "common-img" ]),
                        style: {
                            width: "100%",
                            height: "160px"
                        }
                    }, null, 2)) : (a(), Q(st, {
                        key: 1,
                        fit: "cover",
                        src: l(Lt)(t.cover),
                        style: {
                            width: "100%",
                            height: "160px"
                        },
                        class: "common-img"
                    }, null, 8, [ "src" ])), o("div", null, [ r(q, {
                        class: "distribute distribute-status tooltip-content",
                        color: (G = l(V)({
                            list: Y,
                            listAttrCode: "value",
                            rawAttrCode: t.projectStatus
                        })) == null ? void 0 : G.color
                    }, {
                        default: p(() => {
                            var b;
                            return [ c(i((b = l(V)({
                                list: Y,
                                listAttrCode: "value",
                                rawAttrCode: t.projectStatus
                            })) == null ? void 0 : b.label), 1) ];
                        }),
                        _: 2
                    }, 1032, [ "color" ]), t.type ? (a(), Q(q, {
                        key: 0,
                        class: "distribute distribute-course",
                        color: "#fff"
                    }, {
                        default: p(() => [ c(i(t.type), 1) ]),
                        _: 2
                    }, 1024)) : ht("", !0) ]) ]) ]), o("div", z, [ o("div", E, [ h((a(), 
                    e("span", A, [ r(m, {
                        content: t.projectName
                    }, {
                        default: p(() => [ c(i(t.projectName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ d ] ]) ]), l(_) ? (a(), e("div", L, [ h((a(), 
                    e("span", P, [ r(m, {
                        content: t.teachCourseName
                    }, {
                        default: p(() => [ c("所属课程：" + i(t.teachCourseName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ d ] ]), h((a(), e("span", F, [ r(m, {
                        content: t.teachClassName
                    }, {
                        default: p(() => [ c("授课班级：" + i(t.teachClassName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ d ] ]) ])) : (a(), e("div", D, [ h((a(), 
                    e("span", U, [ r(m, {
                        content: t.teachClassName
                    }, {
                        default: p(() => [ c("授课班级：" + i(t.teachClassName), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ d ] ]) ])), o("div", B, [ h((a(), 
                    e("span", T, [ r(m, {
                        content: t.className
                    }, {
                        default: p(() => [ c("截止时间：" + i(l(Ft)(t, t, t.endTime)), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ d ] ]) ]), o("div", {
                        class: S([ "row3", t.projectStatus == 3 ? "blueLine" : "redLine" ]),
                        style: {
                            display: "block"
                        }
                    }, [ c(" 项目进度："), r(ot, {
                        percentage: t.progress,
                        style: {
                            display: "inline-block",
                            width: "calc(100% - 120px)"
                        },
                        "show-text": !1
                    }, null, 8, [ "percentage" ]), c("  " + i(t.progress) + "% ", 1) ], 2) ]) ], 10, C);
                }), 128)) ])) : (a(), e("div", H, [ l(_) ? (a(), e("div", K, O)) : (a(), 
                e("img", R)) ])) ]), r(rt, {
                    "page-sizes": [ 12, 24, 48, 96 ],
                    limit: l(s).pageSize,
                    "onUpdate:limit": u[0] || (u[0] = t => l(s).pageSize = t),
                    page: l(s).pageNo,
                    "onUpdate:page": u[1] || (u[1] = t => l(s).pageNo = t),
                    total: l($),
                    onPagination: j
                }, null, 8, [ "limit", "page", "total" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-cb402f3a" ] ]);
});

export {
    Ot as __tla,
    W as default
};