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
    r as m,
    f as E,
    g as F,
    o as s,
    c,
    k as e,
    a as p,
    l as h,
    C as v,
    D as y,
    t as w,
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
    let b, f, g, I, k;
    b = (u => (K("data-v-0dfa4b59"), u = u(), M(), u))(() => w("div", {
        style: {
            clear: "both"
        }
    }, null, -1)), f = {
        key: 0,
        class: "statusIcon status0"
    }, g = {
        key: 1,
        class: "statusIcon status1"
    }, I = {
        key: 2,
        class: "statusIcon status2"
    }, k = {
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
        setup(u, {
            expose: S
        }) {
            const T = H(), N = u, {
                resInfo: l
            } = O(N), R = A(() => [ {
                label: "学习状态",
                key: "status",
                type: "list",
                options: [ 1, 2 ].includes(l.value.resType) ? [ {
                    value: "0",
                    label: "未开始"
                }, {
                    value: "1",
                    label: "进行中"
                }, {
                    value: "2",
                    label: "已完成"
                } ] : [ {
                    value: "0",
                    label: "未开始"
                }, {
                    value: "2",
                    label: "已完成"
                } ]
            } ]), a = m({
                searchReq: "",
                status: "",
                pageNo: 1,
                pageSize: 10
            }), i = m(0), n = m([]), x = r => {
                a.value.pageNo = 1, a.value.searchReq = r.searchReq || "", a.value.status = r.status || "", 
                d();
            }, d = () => {
                X({
                    ...a.value,
                    resId: l.value.id,
                    teachCourseId: T.params.teachCourseId,
                    teachClassId: T.params.classId
                }).then(r => {
                    n.value = r.list, i.value = r.total;
                });
            };
            return E(() => {
                d();
            }), F(() => {
                a.value = {
                    searchReq: "",
                    status: "",
                    pageNo: 1,
                    pageSize: 10
                }, i.value = 0, n.value = [];
            }), S({
                queryParams: a
            }), (r, _) => {
                const z = V, t = G, C = J, L = U, P = j;
                return s(), c("div", null, [ e(z, {
                    borderBox: !0,
                    searchList: p(R),
                    keywordsInfo: {
                        label: "学生姓名/学号/工号",
                        key: "searchReq"
                    },
                    onHandleSearch: x,
                    class: "left"
                }, null, 8, [ "searchList" ]), b, e(L, {
                    class: "center-box",
                    "no-pager": !1,
                    "outer-height": 102
                }, {
                    default: h(() => [ e(C, {
                        ref: "tableRef",
                        data: n.value,
                        height: "280px"
                    }, {
                        default: h(() => [ e(t, {
                            label: "姓名",
                            prop: "stuName",
                            width: "120"
                        }), e(t, {
                            label: "学号/工号",
                            prop: "stuNo"
                        }), p(l).resType != 5 ? (s(), v(t, {
                            key: 0,
                            label: "观看次数",
                            prop: "watchTimes"
                        })) : y("", !0), p(l).resType != 5 && p(l).resType != 6 ? (s(), 
                        v(t, {
                            key: 1,
                            label: "观看总时长",
                            prop: "watchDurationStr"
                        })) : y("", !0), [ 3, 4, 5, 7 ].includes(p(l).resType) ? (s(), 
                        v(t, {
                            key: 2,
                            label: "下载次数",
                            prop: "downloadTimes"
                        })) : y("", !0), e(t, {
                            label: "学习状态",
                            prop: "resType"
                        }, {
                            default: h(o => [ o.row.status == 0 ? (s(), c("div", f, "未开始")) : o.row.status == 1 ? (s(), 
                            c("div", g, "进行中")) : (s(), c("div", I, "已完成")) ]),
                            _: 1
                        }), e(t, {
                            label: "最近学习时间",
                            prop: "updateTimeStr",
                            "min-width": "180"
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }), w("div", k, [ e(P, {
                    total: i.value,
                    page: a.value.pageNo,
                    "onUpdate:page": _[0] || (_[0] = o => a.value.pageNo = o),
                    limit: a.value.pageSize,
                    "onUpdate:limit": _[1] || (_[1] = o => a.value.pageSize = o),
                    onPagination: d
                }, null, 8, [ "total", "page", "limit" ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-0dfa4b59" ] ]);
});

export {
    ta as __tla,
    q as default
};