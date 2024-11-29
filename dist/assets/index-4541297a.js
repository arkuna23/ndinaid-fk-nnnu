import {
    _ as O,
    __tla as Q
} from "./index-c4ca0ced.js";

import {
    _ as V,
    __tla as W
} from "./index-8b41572c.js";

import {
    r as e,
    T as X,
    h as Y,
    U as Z,
    e as w,
    f as $,
    n as tt,
    o as c,
    c as d,
    t as p,
    k as t,
    a as l,
    l as i,
    D as k,
    H as at,
    v as rt,
    B as et,
    ad as lt,
    J as st,
    ae as ot,
    __tla as _t
} from "./index-6c08ea4c.js";

import {
    _ as it,
    __tla as ut
} from "./index-71666e05.js";

import {
    _ as pt,
    __tla as mt
} from "./index-1024512a.js";

import {
    __tla as nt
} from "./workItem-20fa3e3c.js";

import {
    _ as ct
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    g as dt,
    __tla as ht
} from "./trial-c683a75c.js";

import {
    g as ft,
    __tla as vt
} from "./member-bed692a1.js";

import yt, {
    __tla as gt
} from "./addDrawerDialog-8cb35a0c.js";

import {
    __tla as wt
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as kt
} from "./DeptTag-1be092ce.js";

import {
    __tla as bt
} from "./index-ef4d146e.js";

import {
    __tla as It
} from "./el-drawer-fca4d971.js";

import {
    __tla as St
} from "./el-link-8197297a.js";

import {
    __tla as Lt
} from "./el-avatar-76960a98.js";

import "./taskAllocationList-57d50b2e.js";

import {
    __tla as Nt
} from "./addDefectDialog-c11ddad8.js";

import {
    __tla as Ut
} from "./Editor-ef737d2a.js";

import {
    __tla as xt
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as zt
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Dt
} from "./file-e038b35d.js";

import {
    __tla as Ct
} from "./project-51c056b9.js";

import {
    __tla as Rt
} from "./task-be0f4a51.js";

let F, jt = Promise.all([ (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return vt;
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
        return kt;
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
        return Lt;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return Ut;
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
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Ct;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})() ]).then(async () => {
    let b, I, S, L, N, U, x, z, D;
    b = {
        class: "trial"
    }, I = {
        class: "content_right_main"
    }, S = {
        class: "search_box"
    }, L = {
        class: "table_box"
    }, N = {
        class: "data-empty"
    }, U = {
        key: 0
    }, x = {
        key: 1,
        class: "c2"
    }, z = {
        key: 2,
        class: "c1"
    }, D = {
        class: "neu-flex-center"
    }, F = ct({
        __name: "index",
        setup(Ht) {
            const C = e(), h = X(), f = Y(), v = e([]), R = e([ {} ]), j = e(0);
            e(null);
            const H = e(""), u = Z({
                pageNo: 1,
                pageSize: 10
            }), y = w(() => f.isStudent && H.value != f.getUser.id), P = w(() => f.getUser.id), m = e({
                taskName: "",
                taskLeaderId: y.value ? P.value : "",
                resultStatus: ""
            }), J = w(() => [ {
                label: "负责人",
                key: "taskLeaderId",
                type: "list",
                options: v.value,
                default: y.value ? P.value : "",
                disabled: y.value
            }, {
                label: "执行结果",
                key: "resultStatus",
                type: "list",
                options: M.value
            } ]), M = e([ {
                label: "待执行",
                value: "0"
            }, {
                label: "未通过",
                value: "1"
            }, {
                label: "已通过",
                value: "2"
            } ]), n = async () => {
                await dt({
                    projectId: h.params.projectId,
                    groupId: h.params.groupId,
                    ...u,
                    ...m.value
                }).then(a => {
                    R.value = a.list, j.value = a.total;
                });
            }, q = a => {
                m.value.resultStatus = a.resultStatus ?? "", m.value.taskLeaderId = a.taskLeaderId ?? "", 
                m.value.taskName = a.taskName ?? "", n();
            };
            $(() => {
                ft({
                    id: h.params.groupId
                }).then(a => {
                    var s;
                    if (a.groupUserList && a.groupUserList.length > 0) {
                        const g = a.groupUserList.map(o => ({
                            label: o.userName,
                            value: o.userId
                        }));
                        v.value = g || [], v.value.length > 0 && (H.value = ((s = a.groupUserList.filter(o => o.isLeader == 1)[0]) == null ? void 0 : s.userId) ?? "");
                    }
                    tt(() => {
                        n();
                    });
                });
            });
            const T = e(!1);
            return (a, s) => {
                const g = pt, o = it, _ = lt, A = st, E = ot, G = V, K = O;
                return c(), d("div", b, [ p("div", I, [ p("div", S, [ t(g, {
                    ref: "ComSearchRef",
                    searchList: l(J),
                    keywordsInfo: {
                        label: "任务名称",
                        key: "taskName"
                    },
                    onHandleSearch: q,
                    class: "left"
                }, null, 8, [ "searchList" ]) ]), t(G, {
                    "outer-height": 0,
                    class: "center-box"
                }, {
                    default: i(() => [ p("div", L, [ t(E, {
                        data: l(R),
                        height: "100%"
                    }, {
                        empty: i(() => [ p("div", N, [ t(o, {
                            msg: "暂无数据"
                        }) ]) ]),
                        default: i(() => [ t(_, {
                            prop: "name",
                            label: "标题",
                            "min-width": "250",
                            "show-overflow-tooltip": ""
                        }), t(_, {
                            prop: "taskLeaderName",
                            label: "负责人",
                            "min-width": "100",
                            "show-overflow-tooltip": ""
                        }), t(_, {
                            prop: "tastTestResult",
                            label: "执行结果",
                            "min-width": "100",
                            "show-overflow-tooltip": ""
                        }, {
                            default: i(r => [ [ null, "", "0", 0 ].includes(r.row.resultStatus) ? (c(), 
                            d("span", U, "待执行")) : k("", !0), r.row.resultStatus == "1" ? (c(), 
                            d("span", x, "未通过")) : k("", !0), r.row.resultStatus == "2" ? (c(), 
                            d("span", z, "已通过")) : k("", !0) ]),
                            _: 1
                        }), t(_, {
                            prop: "taskModuleName",
                            label: "模块",
                            "min-width": "100",
                            "show-overflow-tooltip": ""
                        }), t(_, {
                            prop: "bugNum",
                            label: "缺陷",
                            "min-width": "100",
                            "show-overflow-tooltip": ""
                        }), t(_, {
                            label: "操作",
                            "min-width": "50",
                            "show-overflow-tooltip": ""
                        }, {
                            default: i(r => [ t(A, {
                                type: "primary",
                                size: "small",
                                link: "",
                                onClick: at(Pt => {
                                    return B = r.row, void C.value.openDrawer(B);
                                    var B;
                                }, [ "stop" ])
                            }, {
                                default: i(() => [ rt(et(l(T) ? "查看" : "执行"), 1) ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]) ]),
                    _: 1
                }), p("div", D, [ t(K, {
                    total: l(j),
                    page: l(u).pageNo,
                    "onUpdate:page": s[0] || (s[0] = r => l(u).pageNo = r),
                    limit: l(u).pageSize,
                    "onUpdate:limit": s[1] || (s[1] = r => l(u).pageSize = r),
                    onPagination: n
                }, null, 8, [ "total", "page", "limit" ]) ]) ]), t(yt, {
                    ref_key: "addDrawerDialogRef",
                    ref: C,
                    "preview-flag": l(T),
                    onIncrement: n
                }, null, 8, [ "preview-flag" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b8151ee2" ] ]);
});

export {
    jt as __tla,
    F as default
};