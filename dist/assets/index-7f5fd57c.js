import {
    _ as st,
    __tla as ot
} from "./ContentPage-f6bcc98e.js";

import {
    _ as it,
    __tla as _t
} from "./index-c4ca0ced.js";

import {
    _ as nt,
    __tla as ct
} from "./index-8b41572c.js";

import {
    d as mt,
    r as c,
    p as pt,
    e5 as yt,
    e as B,
    e6 as dt,
    U as ut,
    j as ft,
    o as i,
    c as b,
    a as o,
    k as a,
    l as e,
    t as m,
    A as f,
    C as p,
    v as h,
    B as ht,
    z as wt,
    D as k,
    _ as kt,
    J as vt,
    ad as gt,
    ae as Tt,
    __tla as bt
} from "./index-6c08ea4c.js";

import {
    _ as St,
    __tla as Ct
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as xt,
    __tla as Nt
} from "./index-71666e05.js";

import {
    _ as Et,
    __tla as zt
} from "./index-1024512a.js";

import {
    d as It,
    __tla as Yt
} from "./formatTime-de6f1520.js";

import At, {
    __tla as Rt
} from "./addNotice-c97227c7.js";

import Ut, {
    __tla as Dt
} from "./previewNotice-b88ecf5b.js";

import {
    d as Ft,
    b as Lt,
    r as Pt,
    __tla as Ht
} from "./index-95092119.js";

import {
    b as q,
    D as S,
    __tla as Mt
} from "./dict-c5825220.js";

import {
    _ as Ot
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as jt
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as Bt
} from "./DeptTag-1be092ce.js";

import {
    __tla as qt
} from "./index-ef4d146e.js";

import {
    __tla as Jt
} from "./index-a34a73bc.js";

import "./file_题-23882218.js";

import {
    __tla as Qt
} from "./file-e038b35d.js";

import {
    __tla as Zt
} from "./Editor-ef737d2a.js";

import {
    __tla as Gt
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Kt
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import "./validate-b72f006c.js";

import {
    __tla as Vt
} from "./index-7c75bd27.js";

import {
    __tla as Wt
} from "./message-dd00d81b.js";

import {
    __tla as Xt
} from "./index-67f95b27.js";

import {
    __tla as $t
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    __tla as ta
} from "./index.es-14d10e28.js";

import {
    __tla as aa
} from "./project-file-a2b4fd07.js";

import "./file.data-794ea5d0.js";

let J, ea = Promise.all([ (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})(), (() => {
    try {
        return bt;
    } catch {}
})(), (() => {
    try {
        return Ct;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})(), (() => {
    try {
        return Yt;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Ht;
    } catch {}
})(), (() => {
    try {
        return Mt;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return Bt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return Jt;
    } catch {}
})(), (() => {
    try {
        return Qt;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})(), (() => {
    try {
        return Gt;
    } catch {}
})(), (() => {
    try {
        return Kt;
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
        return $t;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})() ]).then(async () => {
    let C, x, N, E, z, I, Y, A, R, U;
    C = {
        key: 0
    }, x = {
        class: "top-box"
    }, N = {
        class: "right btns-box header-btns"
    }, E = {
        class: "data-empty"
    }, z = [ "onClick" ], I = {
        key: 0
    }, Y = {
        key: 1
    }, A = {
        class: "items-left flex justify-left"
    }, R = {
        class: "bottom-box"
    }, U = {
        class: "page-empty w-screen"
    }, J = Ot(mt({
        __name: "index",
        setup(ra) {
            const v = c(), D = c(), Q = c(), g = pt(), {
                wsCache: Z
            } = yt(), G = B(() => Z.get(dt.USER).permissions), K = B(() => [ {
                label: "通知类型",
                key: "classify",
                type: "list",
                multiple: !0,
                options: q(S.SYSTEM_NOTIFY_CLASSIFY_TENANT)
            }, {
                label: "发布状态",
                key: "status",
                type: "list",
                options: q(S.SYSTEM_NOTIFY_PUBLISH_STATUS)
            }, {
                label: "发布时间",
                key: "time",
                type: "datetimerange"
            } ]), F = c([ {} ]), V = c([]), L = c(0), w = c(0), r = ut({
                pageNo: 1,
                pageSize: 10,
                keyword: "",
                module: "tenant",
                endTime: "",
                startTime: "",
                classify: [],
                status: ""
            });
            function W(s) {
                var n;
                r.pageNo = 1, r.keyword = s.keyword, s.time ? (r.endTime = s.time[1], 
                r.startTime = s.time[0]) : (r.endTime = "", r.startTime = ""), r.classify = (n = s.classify) == null ? void 0 : n.join(","), 
                r.status = s.status, y();
            }
            const X = () => {
                r.endTime = "", r.startTime = "";
            };
            function $(s) {
                V.value = [ ...s ];
            }
            const P = () => {
                v.value.openDialog({
                    data: null,
                    type: "add"
                });
            }, y = async () => {
                const s = await Lt({
                    ...r
                });
                F.value = s.list ?? [], L.value = s.total, w.value = w.value === 0 ? s.total : w.value;
            };
            return y(), (s, n) => {
                const tt = Et, at = kt, d = vt, H = xt, _ = gt, M = St, et = Tt, rt = nt, lt = it, O = st, u = ft("hasPermi");
                return i(), b("div", null, [ o(w) && o(w) > 0 ? (i(), b("div", C, [ a(O, {
                    class: "cont-box"
                }, {
                    default: e(() => [ m("div", x, [ a(tt, {
                        ref: "ComSearchRef",
                        searchList: o(K),
                        keywordsInfo: {
                            label: "标题名称",
                            key: "keyword"
                        },
                        onHandleSearch: W,
                        class: "left",
                        onHandleReset: X
                    }, null, 8, [ "searchList" ]), m("div", N, [ f((i(), p(d, {
                        type: "primary",
                        size: "large",
                        onClick: P,
                        style: {
                            "margin-left": "12px"
                        }
                    }, {
                        default: e(() => [ a(at, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), h(" 新建 ") ]),
                        _: 1
                    })), [ [ u, [ "system:notify:create" ] ] ]) ]) ]), a(rt, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 61
                    }, {
                        default: e(() => [ a(et, {
                            ref_key: "ResourceTableRef",
                            ref: Q,
                            data: o(F),
                            height: "calc(100% )",
                            "header-row-class-name": "system-header",
                            onSelectionChange: $,
                            "row-key": "id"
                        }, {
                            empty: e(() => [ m("div", E, [ a(H, {
                                msg: "暂无数据",
                                type: "resource"
                            }) ]) ]),
                            default: e(() => [ a(_, {
                                label: "标题",
                                prop: "title",
                                width: "240px",
                                "show-overflow-tooltip": "",
                                fixed: ""
                            }, {
                                default: e(({
                                    row: t
                                }) => [ m("span", {
                                    class: "file-name neu-pointer",
                                    onClick: T => {
                                        var j;
                                        return l = t.id, void (((j = G.value) == null ? void 0 : j.includes("system:notify:query")) && D.value.openDialog({
                                            id: l,
                                            from: "all"
                                        }));
                                        var l;
                                    }
                                }, ht(t.title), 9, z) ]),
                                _: 1
                            }), a(_, {
                                label: "通知类型",
                                "show-overflow-tooltip": !0,
                                "min-width": "130",
                                prop: "classify"
                            }, {
                                default: e(({
                                    row: t
                                }) => [ a(M, {
                                    type: o(S).SYSTEM_NOTIFY_CLASSIFY_TENANT,
                                    value: t.classify,
                                    class: wt("classify" + t.classify)
                                }, null, 8, [ "type", "value", "class" ]) ]),
                                _: 1
                            }), a(_, {
                                label: "发布状态",
                                "show-overflow-tooltip": !0,
                                "min-width": "120"
                            }, {
                                default: e(({
                                    row: t
                                }) => [ a(M, {
                                    type: o(S).SYSTEM_NOTIFY_PUBLISH_STATUS,
                                    value: t.status
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), a(_, {
                                "min-width": "100",
                                label: "可见范围",
                                prop: "targetType"
                            }, {
                                default: e(({
                                    row: t
                                }) => [ t.targetType == 1 ? (i(), b("span", I, "全体")) : k("", !0), t.targetType == 2 ? (i(), 
                                b("span", Y, "定向发布")) : k("", !0) ]),
                                _: 1
                            }), a(_, {
                                label: "发布时间",
                                prop: "sendTime",
                                formatter: o(It),
                                "min-width": "180"
                            }, null, 8, [ "formatter" ]), a(_, {
                                label: "发布者",
                                prop: "creator",
                                "show-overflow-tooltip": "",
                                "min-width": "130"
                            }), a(_, {
                                "min-width": "100",
                                label: "阅读次数",
                                prop: "readNumber"
                            }), a(_, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: e(t => [ m("div", A, [ t.row.status != 3 ? f((i(), 
                                p(d, {
                                    key: 0,
                                    type: "primary",
                                    size: "small",
                                    onClick: T => {
                                        return l = t.row, void v.value.openDialog({
                                            data: {
                                                fileEid: l.fileEid,
                                                id: l.id
                                            },
                                            type: "view"
                                        });
                                        var l;
                                    },
                                    link: ""
                                }, {
                                    default: e(() => [ h(" 查看 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ u, [ "system:notify:query" ] ] ]) : k("", !0), t.row.status == 3 ? f((i(), 
                                p(d, {
                                    key: 1,
                                    type: "primary",
                                    size: "small",
                                    link: "",
                                    onClick: T => {
                                        return l = t.row, void v.value.openDialog({
                                            data: {
                                                fileEid: l.fileEid,
                                                id: l.id
                                            },
                                            type: "edit"
                                        });
                                        var l;
                                    }
                                }, {
                                    default: e(() => [ h(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ u, [ "system:notify:update" ] ] ]) : k("", !0), t.row.status == 2 ? f((i(), 
                                p(d, {
                                    key: 2,
                                    type: "primary",
                                    size: "small",
                                    onClick: T => (async l => {
                                        await g.delConfirm("  您即将撤回这条已发布的通知。一旦撤回，该通知将从所有用户的通知列表中移除，且此操作不可撤销。您确定要进行撤回操作吗？", "提示"), 
                                        await Pt({
                                            id: l.id
                                        }), g.success("撤回成功"), y();
                                    })(t.row),
                                    link: ""
                                }, {
                                    default: e(() => [ h(" 撤回 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ u, [ "system:notify:recall" ] ] ]) : k("", !0), f((i(), 
                                p(d, {
                                    type: "danger",
                                    size: "small",
                                    link: "",
                                    onClick: T => (async l => {
                                        await g.delConfirm("您即将删除这条通知公告。此操作不可逆，一旦删除，所有用户将无法再查看此通知。您确定要继续吗？", "提示"), 
                                        await Ft({
                                            id: l.id
                                        }), g.success("删除成功"), y();
                                    })(t.row)
                                }, {
                                    default: e(() => [ h(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ u, [ "system:notify:delete" ] ] ]) ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), m("div", R, [ a(lt, {
                        total: o(L),
                        page: o(r).pageNo,
                        "onUpdate:page": n[0] || (n[0] = t => o(r).pageNo = t),
                        limit: o(r).pageSize,
                        "onUpdate:limit": n[1] || (n[1] = t => o(r).pageSize = t),
                        onPagination: y
                    }, null, 8, [ "total", "page", "limit" ]) ]) ]),
                    _: 1
                }) ])) : (i(), p(O, {
                    key: 1,
                    class: "cont-box"
                }, {
                    default: e(() => [ m("div", U, [ a(H, {
                        type: "resource",
                        msg: "暂无资源"
                    }), f((i(), p(d, {
                        type: "primary",
                        size: "large",
                        style: {
                            padding: "12px 56px"
                        },
                        onClick: P
                    }, {
                        default: e(() => [ h(" 新建 ") ]),
                        _: 1
                    })), [ [ u, [ "system:notify:create" ] ] ]) ]) ]),
                    _: 1
                })), a(At, {
                    ref_key: "AddNoticeRef",
                    ref: v,
                    onRefresh: y
                }, null, 512), a(Ut, {
                    ref_key: "noticeDetailRef",
                    ref: D
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-0c3c8b1d" ] ]);
});

export {
    ea as __tla,
    J as default
};