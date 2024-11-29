import {
    T as mt,
    u as yt,
    h as kt,
    r as u,
    e as ht,
    U as tt,
    f as ft,
    o as i,
    c as d,
    t as n,
    k as a,
    a as _,
    C as I,
    l as r,
    v as c,
    D as m,
    A as at,
    G as et,
    B as G,
    p as T,
    J as wt,
    ad as vt,
    L as gt,
    _ as Ct,
    ae as Pt,
    R as It,
    S as Gt,
    __tla as Tt
} from "./index-6c08ea4c.js";

import {
    _ as bt,
    __tla as Dt
} from "./index-1024512a.js";

import Nt, {
    __tla as jt
} from "./check-dialog-463cb4ef.js";

import {
    c as b,
    __tla as St
} from "./check-a26308bc.js";

import {
    e as rt,
    t as ot,
    __tla as xt
} from "./dialogProblem-fa4d1fd2.js";

import {
    g as Rt,
    __tla as zt
} from "./group-7c00fc2a.js";

import {
    g as Kt,
    __tla as Lt
} from "./code-a0d24f62.js";

import {
    d as Bt,
    f as Ot,
    __tla as Ut
} from "./formatTime-de6f1520.js";

import At, {
    __tla as Ht
} from "./check-detail-Dialog-c03f0876.js";

import {
    _ as Jt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as Zt
} from "./DeptTag-1be092ce.js";

import {
    __tla as qt
} from "./index-ef4d146e.js";

import {
    __tla as Et
} from "./el-drawer-fca4d971.js";

import {
    __tla as Ft
} from "./check-result-070ada17.js";

import {
    __tla as Mt
} from "./checkOverview-9cc05c66.js";

import "./check-C-7cf0dd88.js";

import {
    __tla as Qt
} from "./checkProblems-ac1fe994.js";

import {
    __tla as Vt
} from "./index-c4ca0ced.js";

import {
    __tla as Wt
} from "./index-993301ca.js";

import {
    __tla as Xt
} from "./el-collapse-item-c8b76a0a.js";

import {
    __tla as Yt
} from "./checkCodes-f0c443b2.js";

import {
    __tla as $t
} from "./el-breadcrumb-item-45b75827.js";

import {
    __tla as ta
} from "./diff-code-51383ecb.js";

import "./html2canvas.esm-ad032b91.js";

let lt, aa = Promise.all([ (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})(), (() => {
    try {
        return Lt;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Ht;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return Et;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return Mt;
    } catch {}
})(), (() => {
    try {
        return Qt;
    } catch {}
})(), (() => {
    try {
        return Vt;
    } catch {}
})(), (() => {
    try {
        return Wt;
    } catch {}
})(), (() => {
    try {
        return Xt;
    } catch {}
})(), (() => {
    try {
        return Yt;
    } catch {}
})(), (() => {
    try {
        return $t;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})() ]).then(async () => {
    let D, N, j, S, x, R, z, K, L, B, O, U, A, H, J;
    D = {
        class: "work-deploy-list"
    }, N = {
        class: "page-content"
    }, j = {
        key: 0,
        class: "content-header"
    }, S = {
        class: "header-left"
    }, x = {
        class: "header-right"
    }, R = {
        class: "content-container"
    }, z = {
        class: "neu-sponsor"
    }, K = {
        class: "neu-sponsor"
    }, L = {
        key: 0
    }, B = {
        key: 0
    }, O = {
        key: 1
    }, U = {
        key: 2
    }, A = [ (k => (It("data-v-077d5f6e"), k = k(), Gt(), k))(() => n("span", null, "--", -1)) ], 
    H = {
        key: 3
    }, J = {
        key: 1
    }, lt = Jt({
        __name: "check-list",
        props: {
            from: {
                type: String,
                default: ""
            }
        },
        setup(k) {
            const Z = k, w = mt(), ct = yt(), st = kt();
            u("");
            const q = u(0), it = ht(() => !!st.isTeacher || q.value != 0), v = u(null), E = u(null), F = tt({
                key: "",
                groupId: w.params.groupId
            }), nt = () => {
                v.value.openDialog({
                    title: "新建任务",
                    type: "add"
                });
            }, M = u({}), Q = e => {
                M.value = e, v.value.openDialog({
                    title: "编辑任务",
                    type: "edit"
                });
            }, V = u([]);
            tt({
                pageNum: 1,
                pageSize: 10,
                total: 0
            });
            const _t = e => {
                F.key = e.key ?? "", y();
            }, y = async () => {
                const e = await b.getList({
                    ...F
                });
                V.value = e || [];
            }, g = async e => {
                await T().delConfirm("该操作会删除该条数据，请确实是否继续？", "提示"), await b.del(e.checkId, e.evnGitProName) && (T().success("删除成功"), 
                await y());
            }, W = async e => {
                var $;
                const {
                    checkId: Y,
                    groupId: C,
                    evnGitProName: o,
                    envGitGroupPath: p,
                    evnGitProId: h,
                    checkTaskName: f,
                    checkCompilePath: P,
                    checkOutPath: t,
                    pipelineTask: l
                } = e, s = ($ = X.value.filter(dt => dt.evnGitProId === h)) == null ? void 0 : $[0], ut = s.gitProjectType;
                await b.execute({
                    checkId: Y,
                    groupId: C,
                    evnGitProName: o,
                    envGitGroupPath: p,
                    evnGitProId: h,
                    pipelineTask: l,
                    checkOutPath: t,
                    envGitProType: ut,
                    checkTaskName: f,
                    checkCompilePath: P
                }) && (T().success("执行成功"), await y());
            }, X = u([]);
            ft(() => {
                (async () => {
                    const e = await Kt({
                        name: "",
                        groupId: w.params.groupId
                    });
                    e && (X.value = e || []);
                })(), y(), Rt({
                    projectId: w.params.projectId
                }).then(e => {
                    q.value = e.isLeader;
                });
            });
            const pt = u("");
            return (e, Y) => {
                const C = bt, o = wt, p = vt, h = gt, f = Ct, P = Pt;
                return i(), d("div", D, [ n("div", N, [ Z.from !== "teachingProjectScore" ? (i(), 
                d("div", j, [ n("div", S, [ a(C, {
                    ref: "ComSearchRef",
                    keywordsInfo: {
                        label: "任务名称",
                        key: "key"
                    },
                    onHandleSearch: _t,
                    class: "left"
                }, null, 512) ]), n("div", x, [ _(it) ? (i(), I(o, {
                    key: 0,
                    class: "common-add-btn",
                    type: "primary",
                    size: "large",
                    onClick: nt
                }, {
                    default: r(() => [ c("新建任务") ]),
                    _: 1
                })) : m("", !0), a(o, {
                    size: "large",
                    onClick: y
                }, {
                    default: r(() => [ c("刷新状态") ]),
                    _: 1
                }) ]) ])) : m("", !0), n("div", R, [ a(P, {
                    class: "neu-table",
                    data: _(V),
                    style: {
                        width: "100%"
                    }
                }, {
                    default: r(() => [ a(p, {
                        prop: "checkTaskName",
                        label: "检查任务",
                        "show-overflow-tooltip": "",
                        width: "150"
                    }), a(p, {
                        prop: "createTime",
                        formatter: _(Bt),
                        label: "创建时间",
                        "min-width": "180"
                    }, null, 8, [ "formatter" ]), a(p, {
                        prop: "evnGitProName",
                        label: "代码库",
                        width: "180",
                        "show-overflow-tooltip": ""
                    }), a(p, {
                        prop: "checkCompilePath",
                        label: "路径",
                        "min-width": "180",
                        "show-overflow-tooltip": ""
                    }), a(p, {
                        label: "任务状态",
                        width: "180"
                    }, {
                        default: r(t => {
                            var l, s;
                            return [ at(n("span", null, "--", 512), [ [ et, _(rt)((l = t.row) == null ? void 0 : l.status) ] ]), at(a(h, {
                                type: _(ot)(t.row).type
                            }, {
                                default: r(() => [ c(G(_(ot)(t.row).word), 1) ]),
                                _: 2
                            }, 1032, [ "type" ]), [ [ et, !_(rt)((s = t.row) == null ? void 0 : s.status) ] ]) ];
                        }),
                        _: 1
                    }), a(p, {
                        prop: "name",
                        label: "发起人&发起时间",
                        "min-width": "200"
                    }, {
                        default: r(t => [ n("p", z, [ a(f, {
                            icon: "svg-icon:icon-check-sponsor",
                            style: {
                                cursor: "default"
                            }
                        }), n("span", null, G(t.row.startByName || "--"), 1) ]), n("p", K, [ a(f, {
                            icon: "svg-icon:icon-check-time",
                            style: {
                                cursor: "default"
                            }
                        }), n("span", null, G(_(Ot)(t.row.startTime) || "--"), 1) ]) ]),
                        _: 1
                    }), [ "7" ].includes(_(pt)) ? m("", !0) : (i(), I(p, {
                        key: 0,
                        label: "操作",
                        align: "center",
                        width: "220px",
                        fixed: "right"
                    }, {
                        default: r(t => [ Z.from !== "teachingProjectScore" ? (i(), 
                        d("div", L, [ t.row.status === "0" ? (i(), d("div", B, [ a(o, {
                            type: "primary",
                            link: "",
                            onClick: l => W(t.row)
                        }, {
                            default: r(() => [ c(" 执行 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]), a(o, {
                            type: "primary",
                            link: "",
                            onClick: l => Q(t.row)
                        }, {
                            default: r(() => [ c(" 编辑 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]), a(o, {
                            type: "danger",
                            link: "",
                            onClick: l => g(t.row)
                        }, {
                            default: r(() => [ c(" 删除 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ])) : m("", !0), t.row.status === "1" ? (i(), 
                        d("div", O, [ a(o, {
                            type: "primary",
                            link: "",
                            onClick: l => {
                                return s = t.row, void ct.push({
                                    name: "CheckDetails",
                                    params: {
                                        projectKey: s.projectKey,
                                        checkId: s.checkId
                                    }
                                });
                                var s;
                            }
                        }, {
                            default: r(() => [ c(" 详情 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]), a(o, {
                            type: "primary",
                            link: "",
                            onClick: l => Q(t.row)
                        }, {
                            default: r(() => [ c(" 编辑 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]), a(o, {
                            type: "danger",
                            link: "",
                            onClick: l => g(t.row)
                        }, {
                            default: r(() => [ c(" 删除 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ])) : m("", !0), t.row.status === "2" ? (i(), 
                        d("div", U, A)) : m("", !0), t.row.status === "3" ? (i(), 
                        d("div", H, [ a(o, {
                            type: "primary",
                            link: "",
                            onClick: l => W(t.row)
                        }, {
                            default: r(() => [ c(" 执行 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]), a(o, {
                            type: "danger",
                            link: "",
                            onClick: l => g(t.row)
                        }, {
                            default: r(() => [ c(" 删除 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ])) : m("", !0) ])) : (i(), d("div", J, [ t.row.status === "1" ? (i(), 
                        I(o, {
                            key: 0,
                            type: "primary",
                            link: "",
                            onClick: l => {
                                return s = t.row, void E.value.open(s);
                                var s;
                            }
                        }, {
                            default: r(() => [ c(" 详情 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : m("", !0) ])) ]),
                        _: 1
                    })) ]),
                    _: 1
                }, 8, [ "data" ]) ]) ]), a(Nt, {
                    ref_key: "DeployDialogRef",
                    ref: v,
                    onNeedUpdate: y,
                    editData: _(M)
                }, null, 8, [ "editData" ]), a(At, {
                    ref_key: "checkDetailDialogRef",
                    ref: E,
                    from: "teachingProjectScore"
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-077d5f6e" ] ]);
});

export {
    aa as __tla,
    lt as default
};