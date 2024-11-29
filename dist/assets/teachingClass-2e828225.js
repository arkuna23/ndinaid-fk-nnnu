import {
    p as la,
    u as sa,
    T as oa,
    U as D,
    r as o,
    f as ca,
    j as ia,
    o as p,
    c as na,
    k as t,
    l as c,
    t as _,
    A as d,
    C as u,
    v as w,
    a as r,
    B as _a,
    D as pa,
    F as ma,
    E as ha,
    bo as da,
    _ as ua,
    J as fa,
    ad as ya,
    ae as ga,
    a9 as ba,
    R as wa,
    S as ka,
    __tla as va
} from "./index-6c08ea4c.js";

import {
    _ as Na,
    __tla as Ca
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Ia,
    __tla as Ta
} from "./index-c4ca0ced.js";

import {
    _ as xa,
    __tla as Sa
} from "./index-8b41572c.js";

import {
    _ as za,
    __tla as Ra
} from "./index-1024512a.js";

import {
    __tla as La
} from "./dict-c5825220.js";

import Oa, {
    __tla as Aa
} from "./addTeachClass-e99898b6.js";

import Ha, {
    __tla as Pa
} from "./addTeach-52c31c64.js";

import {
    am as Ua,
    an as Ba,
    ao as Da,
    ap as Ja,
    aq as ja,
    __tla as qa
} from "./index-9567cbf6.js";

import {
    d as Ea,
    __tla as $a
} from "./formatTime-de6f1520.js";

import {
    _ as Fa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ya
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ga
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ka
} from "./index-ef4d146e.js";

import {
    __tla as Ma
} from "./index-33f7224d.js";

import {
    __tla as Qa
} from "./el-infinite-scroll-9cd61b58.js";

import {
    __tla as Va
} from "./throttle-1adeb119.js";

import {
    __tla as Wa
} from "./index-13c88727.js";

import {
    __tla as Xa
} from "./index-7c75bd27.js";

import {
    __tla as Za
} from "./index-d1db0401.js";

import "./validate-b72f006c.js";

let J, ae = Promise.all([ (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return $a;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})(), (() => {
    try {
        return Xa;
    } catch {}
})(), (() => {
    try {
        return Za;
    } catch {}
})() ]).then(async () => {
    let k, T, x, S, z, R, L;
    k = f => (wa("data-v-9e92b3ae"), f = f(), ka(), f), T = {
        class: "info-header mr-16"
    }, x = k(() => _("span", {
        class: "icon-box-back"
    }, "返回", -1)), S = k(() => _("span", {
        class: "info-name"
    }, "教学班管理", -1)), z = {
        class: "top-box"
    }, R = {
        class: "right btns-box header-btns pt-1"
    }, L = {
        class: "bottom-box"
    }, J = Fa({
        __name: "teachingClass",
        setup(f) {
            const j = la(), q = sa(), v = oa(), E = [], i = D({
                pageNo: 1,
                pageSize: 10
            }), $ = o(null), O = o([]), F = o(!1), y = o({}), A = o(null), H = async ({
                type: e,
                title: a,
                row: n
            }) => {
                const g = {
                    create: () => {},
                    edit: ({
                        id: s
                    }) => Q({
                        id: s
                    }),
                    default: () => {}
                };
                await (g[e] || g.default)({
                    id: n.id
                }), A.value.handleOpen({
                    type: e,
                    title: a
                });
            }, Y = () => {
                i.pageNo = 1, i.pageSize = 10;
            }, N = D({
                name: ""
            }), P = o(0), G = e => {
                Object.keys(N).forEach(a => N[a] = e[a]), m();
            }, m = async () => {
                const e = await Ua({
                    pageNo: i.pageNo,
                    pageSize: i.pageSize,
                    ...N,
                    classId: v.params.classId,
                    teachArrangementId: v.params.teachArrangementId
                });
                O.value = e == null ? void 0 : e.list, P.value = (e == null ? void 0 : e.total) || 0;
            }, K = ({
                key: e,
                id: a
            }) => {
                ha.confirm("确定删除当前教学班级？", "提示", {
                    confirmButtonText: "确 认",
                    cancelButtonText: "取 消"
                }).then(async () => {
                    await (async n => {
                        await Ja({
                            id: n
                        });
                    })(a), j.success("操作成功"), m();
                });
            }, M = () => {
                q.back();
            }, C = o(null), I = o([]), Q = async ({
                id: e
            }) => {
                y.value = await ja({
                    id: e
                });
            }, V = async ({
                type: e,
                params: a
            }) => {
                const n = {
                    id: a.id,
                    teacherId: a.teacherId,
                    teacherName: a.teacherName,
                    teacherNumber: a.teacherNumber,
                    originalTeacherId: a.originalTeacherId,
                    originalTeacherName: a.originalTeacherName,
                    originalTeacherNumber: a.originalTeacherNumber
                };
                await Da(n), da.success("移交成功"), C.value.handleClose(), m();
            }, U = o(null), W = () => {
                var e;
                (e = U.value) == null || e.resetParams();
            };
            return ca(() => {
                m(), (async () => I.value = await Ba({
                    identities: "4"
                }))();
            }), (e, a) => {
                const n = ua, g = za, h = fa, s = ya, X = ga, Z = xa, aa = Ia, ea = Na, b = ia("hasPermi"), ta = ba;
                return p(), na(ma, null, [ t(ea, {
                    class: "teaching-schedule"
                }, {
                    default: c(() => [ _("div", T, [ _("div", {
                        class: "icon-box",
                        onClick: M
                    }, [ t(n, {
                        icon: "ep:back",
                        size: 16,
                        class: "icon-import mr-1"
                    }), x ]), S ]), _("div", z, [ t(g, {
                        ref_key: "comSearchRef",
                        ref: U,
                        searchList: E,
                        onHandleSearch: G,
                        onHandleReset: Y,
                        class: "left",
                        keywordsInfo: {
                            key: "name",
                            label: "教学班名称"
                        }
                    }, null, 512), _("div", R, [ d((p(), u(h, {
                        type: "primary",
                        onClick: a[0] || (a[0] = l => H({
                            type: "create",
                            title: "新增教学班级",
                            row: ""
                        })),
                        size: "large"
                    }, {
                        default: c(() => [ t(n, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), w(" 新增 ") ]),
                        _: 1
                    })), [ [ b, [ "teachmanager:teach-class:create" ] ] ]) ]) ]), t(Z, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: c(() => [ d((p(), u(X, {
                            ref_key: "tableRef",
                            ref: $,
                            data: r(O),
                            height: "calc(100%)"
                        }, {
                            default: c(() => [ t(s, {
                                type: "index",
                                label: "序号",
                                width: "52"
                            }), t(s, {
                                label: "教学班级名称",
                                prop: "name",
                                "show-overflow-tooltip": ""
                            }), t(s, {
                                label: "学生数",
                                prop: "studentCount",
                                "show-overflow-tooltip": ""
                            }), t(s, {
                                label: "授课教师",
                                prop: "teacherName",
                                "show-overflow-tooltip": ""
                            }, {
                                default: c(l => [ _("span", null, _a(`${l.row.teacherName}\uFF08${l.row.teacherNumber}\uFF09`), 1) ]),
                                _: 1
                            }), t(s, {
                                label: "创建人",
                                prop: "creatorName",
                                "show-overflow-tooltip": ""
                            }), t(s, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                formatter: r(Ea)
                            }, null, 8, [ "formatter" ]), t(s, {
                                label: "操作",
                                fixed: "right"
                            }, {
                                default: c(l => [ d((p(), u(h, {
                                    link: "",
                                    type: "primary",
                                    onClick: B => H({
                                        type: "edit",
                                        title: "编辑教学班级",
                                        row: l.row
                                    })
                                }, {
                                    default: c(() => [ w(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ b, [ "teachmanager:teach-class:update" ] ] ]), r(v).query.releaseStatus === "1" ? d((p(), 
                                u(h, {
                                    key: 0,
                                    link: "",
                                    type: "primary",
                                    onClick: B => (async ({
                                        row: ra
                                    }) => {
                                        y.value = JSON.parse(JSON.stringify(ra)), 
                                        C.value.handleOpen({
                                            type: "handOver",
                                            title: "移交教学班级"
                                        });
                                    })({
                                        type: "update",
                                        row: l.row
                                    })
                                }, {
                                    default: c(() => [ w(" 移交 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ b, [ "teachmanager:teach-class:update" ] ] ]) : pa("", !0), d((p(), 
                                u(h, {
                                    link: "",
                                    type: "danger",
                                    onClick: B => K({
                                        key: "del",
                                        id: l.row.id
                                    })
                                }, {
                                    default: c(() => [ w(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ b, [ "teachmanager:teach-class:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ ta, r(F) ] ]) ]),
                        _: 1
                    }), _("div", L, [ t(aa, {
                        limit: r(i).pageSize,
                        "onUpdate:limit": a[1] || (a[1] = l => r(i).pageSize = l),
                        page: r(i).pageNo,
                        "onUpdate:page": a[2] || (a[2] = l => r(i).pageNo = l),
                        total: r(P),
                        onPagination: m
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), t(Oa, {
                    ref_key: "addTeachClassRef",
                    ref: A,
                    teachInfo: r(y),
                    teacherList: r(I),
                    onRefreshList: W
                }, null, 8, [ "teachInfo", "teacherList" ]), t(Ha, {
                    ref_key: "addTeachRef",
                    ref: C,
                    teachInfo: r(y),
                    teacherList: r(I),
                    onHandleData: V
                }, null, 8, [ "teachInfo", "teacherList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-9e92b3ae" ] ]);
});

export {
    ae as __tla,
    J as default
};