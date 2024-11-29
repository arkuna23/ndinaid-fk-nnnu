import {
    u as ot,
    T as st,
    p as nt,
    h as _t,
    e as E,
    U as v,
    r as a,
    b9 as it,
    ej as ct,
    f as pt,
    o as c,
    c as x,
    t as w,
    a as e,
    k as r,
    l as u,
    A as ut,
    C as I,
    B as mt,
    v as ft,
    F as dt,
    ad as ht,
    J as yt,
    ae as gt,
    a9 as vt,
    __tla as wt
} from "./index-6c08ea4c.js";

import {
    _ as kt,
    __tla as bt
} from "./index-e2094cc0.js";

import {
    _ as xt,
    __tla as It
} from "./index-c834085f.js";

import {
    _ as Lt,
    __tla as Rt
} from "./index-c4ca0ced.js";

import {
    _ as St,
    __tla as qt
} from "./index-8b41572c.js";

import {
    _ as Ct,
    __tla as At
} from "./index-1024512a.js";

import {
    __tla as Nt
} from "./dict-c5825220.js";

import Qt, {
    __tla as Ft
} from "./addFQA-91c93a8c.js";

import zt, {
    __tla as Bt
} from "./viewFQA-8ef12967.js";

import {
    i as Tt,
    __tla as Dt
} from "./importTeach-ad550a44.js";

import {
    g as Et,
    d as Ht,
    __tla as Ut
} from "./fqa-b0babe7d.js";

import {
    a as Gt,
    __tla as Ot
} from "./index-9567cbf6.js";

import {
    _ as Pt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as jt
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Jt
} from "./DeptTag-1be092ce.js";

import {
    __tla as Kt
} from "./index-ef4d146e.js";

import {
    __tla as Mt
} from "./Editor-ef737d2a.js";

import {
    __tla as Vt
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Wt
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Xt
} from "./file-e038b35d.js";

import {
    __tla as Yt
} from "./index-13c88727.js";

import {
    __tla as Zt
} from "./index-cfc63ccf.js";

import {
    __tla as $t
} from "./catalog-6352045f.js";

import {
    __tla as te
} from "./errorDialog-2a24db66.js";

import {
    __tla as ee
} from "./formatTime-de6f1520.js";

let H, ae = Promise.all([ (() => {
    try {
        return wt;
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
        return Rt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return Bt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Ot;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return Jt;
    } catch {}
})(), (() => {
    try {
        return Kt;
    } catch {}
})(), (() => {
    try {
        return Mt;
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
        return Zt;
    } catch {}
})(), (() => {
    try {
        return $t;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})() ]).then(async () => {
    let L, R, S, q, C, A;
    L = {
        class: "teaching-schedule"
    }, R = {
        key: 0,
        style: {
            flex: "1",
            display: "flex",
            "flex-direction": "column"
        }
    }, S = {
        class: "top-box mb-10px"
    }, q = {
        key: 0,
        style: {
            flex: "1"
        }
    }, C = [ "onClick" ], A = {
        class: "bottom-box"
    }, H = Pt({
        __name: "FQA",
        setup(re) {
            ot();
            const N = st(), Q = nt();
            _t();
            const U = E(() => [ {
                label: "所属目录",
                key: "dirIds",
                type: "tree",
                multiple: !0,
                options: h.value
            }, {
                label: "关联知识技能点",
                key: "ktIds",
                type: "tree",
                options: h.value,
                width: "158px"
            } ]), o = v({
                pageNo: 1,
                pageSize: 10
            }), G = a(!1);
            E(() => p.value.length > 0);
            const p = a([]), O = t => {
                p.value = t, G.value = t.length === _.value.length;
            }, m = a(null), P = t => {
                var l;
                t !== !1 ? t.value ? m.value.clearSelection() : (l = _.value) == null || l.forEach(y => {
                    m.value.toggleAllSelection();
                }) : m.value.clearSelection();
            }, _ = a([]), j = a(!1), J = a({}), K = a(null), F = () => {
                o.pageNo = 1, o.pageSize = 10;
            }, f = v({
                searchReq: "",
                ktIds: [],
                dirIds: []
            }), M = t => {
                f.searchReq = t.searchReq, f.ktIds = t.ktIds, f.dirIds = t.dirIds, 
                i();
            };
            a(!1);
            const z = a(0), i = async () => {
                const t = await Et({
                    pageNo: o.pageNo,
                    pageSize: o.pageSize,
                    teachCourseId: N.params.teachCourseId,
                    ...f
                });
                _.value = t == null ? void 0 : t.list, z.value = (t == null ? void 0 : t.total) || 0;
            }, V = async () => await Ht({
                fqaIds: d.value
            }), d = a([]), W = ({
                key: t,
                id: l,
                row: y
            }) => {
                let s = "", g = null;
                s = "如教学安排已发布，删除后所有已产生的教学及学习数据将全部清空，确定删除？", g = V, d.value = [], 
                (0, {
                    operateDel: async () => {
                        d.value = [ l ];
                    },
                    selectDel: async () => {
                        d.value = p.value.map(b => b.id);
                    }
                }[t])(), Q.confirm("如教学安排已发布，删除后所有已产生的教学及学习数据将全部清空，确定删除？", "提示", {
                    confirmButtonText: "确 认",
                    cancelButtonText: "取 消"
                }).then(async () => {
                    await g({
                        key: t,
                        id: l,
                        row: y
                    }), p.value = [], Q.success("操作成功"), i();
                });
            }, X = a(null);
            it("tableColumnList", [ {
                prop: "fqaQuestion",
                label: "问题",
                width: "80px"
            }, {
                prop: "code",
                label: "答案",
                width: "80px"
            }, {
                prop: "type",
                label: "所属目录",
                width: "80px"
            }, {
                prop: "ktName",
                label: "关联所属技能点编号",
                width: "80px"
            }, {
                prop: "isOpen",
                label: "状态",
                width: "80px"
            } ]), a(null);
            const h = a([]);
            a(!1);
            const Y = [ {
                key: "reset",
                label: "开启",
                type: "primary",
                icon: "ep:promotion",
                permi: "teachmanager:teach-arrangement:update"
            }, {
                key: "reset",
                label: "关闭",
                type: "primary",
                icon: "ep:promotion",
                permi: "teachmanager:teach-arrangement:update"
            }, {
                key: "selectDel",
                label: "删除",
                color: "#E14635",
                icon: "svg-icon:delete",
                permi: ""
            } ], B = a(null), k = v({
                question: "",
                answer: ""
            }), T = ({
                row: t
            }) => {
                B.value.handleOpen({
                    id: t.id
                }), k.question = t.fqaQuestion, k.answer = t.fqaAnswer;
            }, Z = () => {
                F(), i();
            }, $ = v({
                source: "FQA",
                name: "FAQ导入模板"
            });
            return ct(async () => {
                (async () => Gt({
                    teachCourseId: N.params.teachCourseId
                }).then(t => {
                    h.value = t;
                }))();
            }), pt(() => {
                i();
            }), (t, l) => {
                const y = Ct, s = ht, g = yt, b = gt, tt = St, et = Lt, D = xt, at = kt, rt = vt;
                return c(), x(dt, null, [ w("div", L, [ e(_).length ? (c(), x("div", R, [ w("div", S, [ r(y, {
                    borderBox: !0,
                    searchList: e(U),
                    onHandleSearch: M,
                    onHandleReset: F,
                    class: "left",
                    keywordsInfo: {
                        key: "searchReq",
                        label: "问题/答案关键字"
                    }
                }, null, 8, [ "searchList" ]) ]), e(_).length ? (c(), x("div", q, [ r(tt, {
                    class: "center-box pt-0",
                    "no-pager": !1,
                    "no-padding": !0,
                    "outer-height": -8
                }, {
                    default: u(() => [ ut((c(), I(b, {
                        ref_key: "tableRef",
                        ref: m,
                        data: e(_),
                        onSelectionChange: O
                    }, {
                        default: u(() => [ r(s, {
                            type: "selection"
                        }), r(s, {
                            type: "index",
                            label: "序号",
                            width: "52"
                        }), r(s, {
                            label: "问题",
                            prop: "fqaQuestion",
                            "show-overflow-tooltip": ""
                        }, {
                            default: u(n => [ w("span", {
                                class: "span-link",
                                onClick: lt => T({
                                    row: n.row
                                })
                            }, mt(n.row.fqaQuestion), 9, C) ]),
                            _: 1
                        }), r(s, {
                            label: "所属课程目录",
                            prop: "dirName",
                            "show-overflow-tooltip": ""
                        }), r(s, {
                            label: "关联知识技能点",
                            prop: "ktName",
                            "show-overflow-tooltip": ""
                        }), r(s, {
                            label: "操作",
                            width: "120",
                            fixed: "right"
                        }, {
                            default: u(n => [ r(g, {
                                link: "",
                                type: "primary",
                                onClick: lt => T({
                                    row: n.row
                                })
                            }, {
                                default: u(() => [ ft(" 详情 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ rt, e(j) ] ]) ]),
                    _: 1
                }), w("div", A, [ r(et, {
                    limit: e(o).pageSize,
                    "onUpdate:limit": l[0] || (l[0] = n => e(o).pageSize = n),
                    page: e(o).pageNo,
                    "onUpdate:page": l[1] || (l[1] = n => e(o).pageNo = n),
                    total: e(z),
                    onPagination: i
                }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (c(), I(D, {
                    key: 1,
                    class: "noData"
                })) ])) : (c(), I(D, {
                    key: 1
                })), r(at, {
                    ref: "SelectionButtonGroupRef",
                    selectList: e(p),
                    pageList: e(_),
                    btnInfoList: Y,
                    onSelectAll: P,
                    onHandleEvent: W
                }, null, 8, [ "selectList", "pageList" ]) ]), r(Qt, {
                    ref_key: "addFQARef",
                    ref: K,
                    teachInfo: e(J),
                    onRefreshList: Z,
                    treeList: e(h)
                }, null, 8, [ "teachInfo", "treeList" ]), r(Tt, {
                    ref_key: "importTeachRef",
                    ref: X,
                    downloadInfo: e($),
                    onRefreshList: i
                }, null, 8, [ "downloadInfo" ]), r(zt, {
                    ref_key: "viewFQARef",
                    ref: B,
                    info: e(k),
                    onRefreshList: i
                }, null, 8, [ "info" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-496f0ab2" ] ]);
});

export {
    ae as __tla,
    H as default
};