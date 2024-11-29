import {
    a0 as Ie,
    h as Te,
    u as ke,
    T as be,
    p as Se,
    e as xe,
    r as l,
    U as te,
    ej as Ne,
    f as Re,
    j as Ae,
    o as r,
    c as u,
    t as o,
    a as n,
    k as i,
    D as Me,
    F as se,
    y as ze,
    z as Ue,
    A as le,
    l as m,
    v as h,
    B as T,
    C as je,
    m as De,
    _ as Ee,
    K as qe,
    J as Be,
    aU as Le,
    R as Oe,
    S as Qe,
    __tla as Ve
} from "./index-6c08ea4c.js";

import {
    _ as He,
    __tla as Fe
} from "./index-c834085f.js";

import {
    _ as Je,
    __tla as Ke
} from "./index-f977be78.js";

import Pe, {
    __tla as Ge
} from "./addTeach-52c31c64.js";

import {
    d as We,
    f as Xe,
    h as Ye,
    j as Ze,
    k as ne,
    l as $e,
    __tla as ea
} from "./index-cfc63ccf.js";

import {
    b as aa
} from "./browser-86b6ed1b.js";

import {
    _ as ta
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as sa
} from "./index-5adb716b.js";

import {
    __tla as la
} from "./index-13c88727.js";

import {
    __tla as na
} from "./index-9567cbf6.js";

import "./tree-05ea8e09.js";

import {
    __tla as ca
} from "./index-ef4d146e.js";

let ce, ra = Promise.all([ (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})() ]).then(async () => {
    let j, D, E, q, B, L, O, Q, V, H, F, J, K, P;
    j = {
        class: "course-teaching"
    }, D = {
        key: 0,
        class: "neu-has-data"
    }, E = {
        class: "data-content"
    }, q = (v => (Oe("data-v-0c82cb80"), v = v(), Qe(), v))(() => o("p", {
        class: "teaching-list-add"
    }, "新增班级", -1)), B = {
        class: "course-info"
    }, L = {
        class: "row1"
    }, O = {
        class: "tooltip-content"
    }, Q = {
        class: "row3"
    }, V = {
        class: "row3-class tooltip-content"
    }, H = {
        class: "row3-btn"
    }, F = {
        key: 0,
        class: "QR-code"
    }, J = [ "src" ], K = {
        key: 1,
        class: "invite-code"
    }, P = {
        class: "class-name"
    }, ce = ta({
        __name: "teachingClass",
        props: {
            courseDetails: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "refreshStatistic" ],
        setup(v, {
            emit: re
        }) {
            const oe = v, {
                courseDetails: G
            } = Ie(oe), W = re, k = Te(), b = ke(), g = be(), f = Se();
            xe(() => [ {
                label: "课程状态",
                key: "termId",
                type: "list",
                customValue: "id",
                customLabel: "name",
                options: [ {
                    value: 0,
                    label: "未开课"
                }, {
                    value: 1,
                    label: "进行中"
                }, {
                    value: 2,
                    label: "已结课"
                } ]
            }, {
                label: "开课学期",
                key: "releaseStatus",
                type: "list",
                options: [ {
                    value: 0,
                    label: "未发布"
                }, {
                    value: 1,
                    label: "已发布"
                } ]
            } ]);
            const X = l({}), S = l(null), x = async ({
                type: e,
                title: a,
                row: t
            }) => {
                const c = {
                    createTeaching: () => {},
                    editTeaching: async () => {
                        X.value = await me({
                            id: t.id
                        });
                    },
                    default: () => {}
                };
                await (c[e] || c.default)(), S.value.handleOpen({
                    type: e,
                    title: a
                });
            }, N = l(null), ie = async ({
                type: e,
                params: a
            }) => {
                const t = {
                    createTeaching: () => {
                        N.value = ue;
                    },
                    editTeaching: () => {
                        N.value = pe;
                    },
                    default: () => {}
                };
                (t[e] || t.default)(), await N.value({
                    params: a
                }), f.success("操作成功"), S.value.handleClose(), A(), W("refreshStatistic");
            }, R = l([]), Y = () => {
                p.value = !1, d.code = "", d.className = "";
            }, de = async ({
                id: e
            }) => await $e({
                id: e
            }), ue = async ({
                params: e
            }) => {
                const {
                    name: a,
                    addType: t,
                    needConfirm: c,
                    allowExit: y,
                    maxCount: _,
                    creatorName: U
                } = e;
                await Xe({
                    id: "",
                    name: a,
                    teacherId: k.getUser.id,
                    teacherName: k.getUser.nickname,
                    teacherNumber: k.getUser.number,
                    teachArrangementId: g.query.teachArrangementId,
                    teachCourseId: g.params.id,
                    addType: t.join(","),
                    needConfirm: c,
                    allowExit: y,
                    maxCount: _,
                    creatorName: U
                }), f.success("新建成功");
            }, me = ({
                id: e
            }) => Ye({
                id: e
            }), pe = async ({
                params: e
            }) => {
                const a = {
                    id: e.id,
                    name: e.name,
                    teachArrangementId: e.teachArrangementId,
                    addType: e.addType.join(","),
                    needConfirm: e.needConfirm,
                    allowExit: e.allowExit,
                    maxCount: e.maxCount,
                    cover: e.cover
                };
                return await Ze(a);
            }, Z = te({
                pageNo: 1,
                pageSize: 10
            }), he = l(0), A = async () => {
                const e = await We({
                    pageNo: Z.pageNo,
                    pageSize: Z.pageSize,
                    teachArrangementId: g.query.teachArrangementId,
                    teachCourseId: g.params.id
                });
                R.value = e == null ? void 0 : e.list, he.value = (e == null ? void 0 : e.total) || 0;
            }, $ = l([ {
                name: "编辑",
                type: "editTeaching",
                showMore: !1
            }, {
                name: "学生管理",
                type: "stuManage",
                showMore: !1
            }, {
                name: "入班审核",
                type: "classReview",
                showMore: !1
            }, {
                name: "入班二维码",
                type: "QRCode",
                showMore: !1
            }, {
                name: "入班邀请码",
                type: "inviteCode",
                showMore: !1
            }, {
                name: "删除",
                type: "delete",
                showMore: !1
            } ]), M = l(""), p = l(!1), C = l(!1), d = te({
                code: "",
                className: ""
            }), ye = ({
                currentOperate: e,
                row: a
            }) => {
                p.value = !1;
                const {
                    type: t
                } = e, c = {
                    editTeaching: () => {
                        x({
                            type: t,
                            title: "编辑班级",
                            row: a
                        });
                    },
                    delete: () => {
                        (({
                            id: y
                        }) => {
                            f.confirm("教学班级删除后其下所有学生将自动被移除出课程，且该班级相关所有教学和学习记录将被清空（无法撤销恢复），确定删除？", "提示", {
                                confirmButtonText: "确 认",
                                cancelButtonText: "取 消"
                            }).then(async () => {
                                await de({
                                    id: y
                                }), f.success("操作成功"), A(), W("refreshStatistic");
                            });
                        })({
                            id: a.id
                        });
                    },
                    QRCode: async () => {
                        M.value = "入班二维码", p.value = !0, C.value = !0, await ge({
                            id: a.id
                        }), _e();
                    },
                    inviteCode: () => {
                        M.value = "入班邀请码", p.value = !0, fe({
                            id: a.id
                        }), d.className = a.name, C.value = !1;
                    },
                    stuManage: () => {
                        b.push({
                            name: "StuManage",
                            params: {
                                teachClassId: a.id,
                                teachCourseId: a.teachCourseId
                            },
                            query: {
                                className: a.name
                            }
                        });
                    },
                    classReview: () => {
                        b.push({
                            name: "ClassReview",
                            params: {
                                teachClassId: a.id,
                                teachCourseId: a.teachCourseId
                            }
                        });
                    }
                };
                (c[t] || c.default)();
            };
            l(null);
            const ee = l(null), _e = e => {
                aa.toDataURL(w.value, {
                    width: 240
                }, (a, t) => {
                    a || (ee.value = t);
                });
            }, w = l(""), z = e => {
                navigator.clipboard.writeText(e), f.success("已复制");
            }, ve = () => {
                let e = "";
                e = C.value ? w.value : d.code, z(e);
            }, fe = async ({
                id: e
            }) => {
                const a = await ne({
                    id: e
                });
                a == null ? d.code : d.code = a;
            }, ge = async ({
                id: e
            }) => {
                await ne({
                    id: e
                }), w.value;
            }, Ce = e => {
                let a = [];
                return a = e.needConfirm === "1" ? $.value.filter(t => t.type !== "classReview") : $.value, 
                e.addType.includes("1") || (a = a.filter(t => t.type !== "QRCode")), 
                e.addType.includes("2") || (a = a.filter(t => t.type !== "inviteCode")), 
                G.value.createSource !== "2" && (a = a.filter(t => t.type !== "editTeaching" && t.type !== "delete" && t.type !== "classReview")), 
                a;
            };
            return Ne(async () => {}), Re(() => {
                A();
            }), (e, a) => {
                const t = Ee, c = qe, y = Je, _ = Be, U = He, we = Le, ae = Ae("show-tip");
                return r(), u(se, null, [ o("div", j, [ n(R).length ? (r(), u("div", D, [ o("div", E, [ n(G).createSource === "2" ? (r(), 
                u("div", {
                    key: 0,
                    class: "teaching-list-first teaching-list-common",
                    onClick: a[0] || (a[0] = s => x({
                        type: "createTeaching",
                        title: "新建班级"
                    }))
                }, [ i(t, {
                    icon: "svg-icon:icon-class",
                    size: 18,
                    class: "pointer"
                }), q ])) : Me("", !0), (r(!0), u(se, null, ze(n(R), s => (r(), 
                u("div", {
                    key: s.arrangementId,
                    class: Ue([ "course-list-common", [ "status-" + s.arrangementStatus ] ])
                }, [ o("div", B, [ o("div", L, [ le((r(), u("span", O, [ i(c, {
                    content: s.name
                }, {
                    default: m(() => [ h(T(s.name), 1) ]),
                    _: 2
                }, 1032, [ "content" ]) ])), [ [ ae ] ]), i(y, {
                    operateList: Ce(s),
                    operateItem: s,
                    onHandleOperate: ye
                }, null, 8, [ "operateList", "operateItem" ]) ]), o("div", Q, [ le((r(), 
                u("span", V, [ h("学生： "), i(c, {
                    content: s.studentCount.toString()
                }, {
                    default: m(() => [ h(T(s.studentCount), 1) ]),
                    _: 2
                }, 1032, [ "content" ]) ])), [ [ ae ] ]), o("div", H, [ i(_, {
                    type: "primary",
                    onClick: oa => (I => {
                        b.push({
                            name: "StartTeaching",
                            params: {
                                teachCourseId: I.teachCourseId,
                                teacherId: I.teacherId,
                                teachArrangementId: I.teachArrangementId,
                                classId: I.id
                            }
                        });
                    })(s)
                }, {
                    default: m(() => [ h("开始教学") ]),
                    _: 2
                }, 1032, [ "onClick" ]) ]) ]) ]) ], 2))), 128)) ]) ])) : (r(), je(U, {
                    key: 1
                }, {
                    btn: m(() => [ i(_, {
                        type: "primary",
                        size: "large",
                        onClick: a[1] || (a[1] = s => x({
                            type: "createTeaching",
                            title: "新建班级",
                            row: {}
                        }))
                    }, {
                        default: m(() => [ h("新建教学班级") ]),
                        _: 1
                    }) ]),
                    _: 1
                })) ]), i(we, {
                    modelValue: n(p),
                    "onUpdate:modelValue": a[4] || (a[4] = s => De(p) ? p.value = s : null),
                    width: "420px",
                    "close-on-click-modal": !1,
                    onClose: Y,
                    appendToBody: !0,
                    title: n(M),
                    "modal-class": "modal-class"
                }, {
                    footer: m(() => [ i(_, {
                        size: "large",
                        onClick: Y
                    }, {
                        default: m(() => [ h("关 闭") ]),
                        _: 1
                    }), i(_, {
                        size: "large",
                        type: "primary",
                        onClick: ve
                    }, {
                        default: m(() => [ h("复 制") ]),
                        _: 1
                    }) ]),
                    default: m(() => [ n(C) ? (r(), u("div", F, [ o("img", {
                        src: n(ee),
                        alt: "",
                        class: "pointer",
                        onClick: a[2] || (a[2] = s => z(n(w)))
                    }, null, 8, J) ])) : (r(), u("div", K, [ o("p", {
                        class: "code pointer",
                        onClick: a[3] || (a[3] = s => z(n(d).code))
                    }, T(n(d).code), 1), o("p", P, T(n(d).className), 1) ])) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), i(Pe, {
                    ref_key: "addTeachRef",
                    ref: S,
                    teachInfo: n(X),
                    onHandleData: ie
                }, null, 8, [ "teachInfo" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-0c82cb80" ] ]);
});

export {
    ra as __tla,
    ce as default
};