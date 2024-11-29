import {
    _ as j,
    __tla as D
} from "./index-c4ca0ced.js";

import {
    _ as U,
    __tla as B
} from "./index-8b41572c.js";

import {
    T as H,
    a0 as O,
    e as A,
    r as y,
    f as E,
    g as F,
    o as t,
    c as _,
    k as s,
    a as u,
    l as v,
    C as i,
    D as n,
    t as T,
    ad as G,
    ae as J,
    R as K,
    S as M,
    __tla as Q
} from "./index-6c08ea4c.js";

import {
    _ as V,
    __tla as W
} from "./index-1024512a.js";

import {
    w as X,
    __tla as Y
} from "./index-9567cbf6.js";

import {
    _ as Z
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as $
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as aa
} from "./DeptTag-1be092ce.js";

import {
    __tla as ea
} from "./index-ef4d146e.js";

let q, ta = Promise.all([ (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})() ]).then(async () => {
    let f, b, g, k, I;
    f = (p => (K("data-v-43acb48a"), p = p(), M(), p))(() => T("div", {
        style: {
            clear: "both"
        }
    }, null, -1)), b = {
        key: 0,
        class: "statusIcon status0"
    }, g = {
        key: 1,
        class: "statusIcon status1"
    }, k = {
        key: 2,
        class: "statusIcon status2"
    }, I = {
        class: "bottom-box"
    }, q = Z({
        __name: "statisticsList",
        props: {
            resInfo: {
                type: Object,
                required: !0,
                default: () => ({})
            }
        },
        setup(p, {
            expose: R
        }) {
            const w = H(), N = p, {
                resInfo: l
            } = O(N), x = A(() => [ {
                label: "学习状态",
                key: "status",
                type: "list",
                options: [ {
                    value: 0,
                    name: "未开始"
                }, {
                    value: 1,
                    name: "进行中"
                }, {
                    value: 2,
                    name: "已完成"
                } ]
            } ]), a = y({
                searchReq: "",
                status: "",
                pageNo: 1,
                pageSize: 10
            }), d = y(0), m = y([]), S = r => {
                a.value.pageNo = 1, a.value.searchReq = r.searchReq || "", a.value.status = r.status || "", 
                h();
            }, h = () => {
                X({
                    ...a.value,
                    resId: l.value.id,
                    teachCourseId: w.params.teachCourseId,
                    teachClassId: w.params.classId
                }).then(r => {
                    m.value = r.list, d.value = r.total;
                });
            };
            return E(() => {
                h();
            }), F(() => {
                a.value = {
                    searchReq: "",
                    status: "",
                    pageNo: 1,
                    pageSize: 10
                }, d.value = 0, m.value = [];
            }), R({
                queryParams: a
            }), (r, c) => {
                const C = V, e = G, z = J, L = U, P = j;
                return t(), _("div", null, [ s(C, {
                    borderBox: !0,
                    searchList: u(x),
                    keywordsInfo: {
                        label: "学生姓名/学号/工号",
                        key: "searchReq"
                    },
                    onHandleSearch: S,
                    class: "left"
                }, null, 8, [ "searchList" ]), f, s(L, {
                    class: "center-box",
                    "no-pager": !1,
                    "outer-height": 102
                }, {
                    default: v(() => [ s(z, {
                        ref: "tableRef",
                        data: m.value,
                        height: "280px"
                    }, {
                        default: v(() => [ s(e, {
                            label: "姓名",
                            prop: "stuName",
                            width: "120"
                        }), s(e, {
                            label: "学号/工号",
                            prop: "stuNo"
                        }), u(l).resType != 5 ? (t(), i(e, {
                            key: 0,
                            label: "观看次数",
                            prop: "watchTimes"
                        })) : n("", !0), u(l).resType != 5 && u(l).resType != 6 ? (t(), 
                        i(e, {
                            key: 1,
                            label: "观看总时长",
                            prop: "watchLength"
                        })) : n("", !0), [ 3, 4, 5, 7 ].includes(u(l).resType) ? (t(), 
                        i(e, {
                            key: 2,
                            label: "下载次数",
                            prop: "downloadTimes"
                        })) : n("", !0), [ 1, 2 ].includes(u(l).resType) ? (t(), 
                        i(e, {
                            key: 3,
                            label: "视频测验完成率",
                            prop: "videoCheckRat",
                            "min-width": "120"
                        })) : n("", !0), s(e, {
                            label: "学习状态",
                            prop: "resType"
                        }, {
                            default: v(o => [ o.row.status == 0 ? (t(), _("div", b, "未开始")) : o.row.status == 1 ? (t(), 
                            _("div", g, "进行中")) : (t(), _("div", k, "已完成")) ]),
                            _: 1
                        }), s(e, {
                            label: "最近学习时间",
                            prop: "updateTime",
                            "min-width": "180"
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }), T("div", I, [ s(P, {
                    total: d.value,
                    page: a.value.pageNo,
                    "onUpdate:page": c[0] || (c[0] = o => a.value.pageNo = o),
                    limit: a.value.pageSize,
                    "onUpdate:limit": c[1] || (c[1] = o => a.value.pageSize = o),
                    onPagination: h
                }, null, 8, [ "total", "page", "limit" ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-43acb48a" ] ]);
});

export {
    ta as __tla,
    q as default
};