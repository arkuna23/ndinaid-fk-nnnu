import {
    p as le,
    h as se,
    u as oe,
    e as ne,
    r as u,
    U as F,
    f as ie,
    j as me,
    o as g,
    c as ce,
    k as l,
    l as i,
    t as f,
    a as o,
    A as C,
    C as N,
    v as I,
    B as O,
    F as pe,
    E as _e,
    _ as ue,
    J as de,
    ad as he,
    ak as fe,
    ae as ye,
    a9 as we,
    __tla as ge
} from "./index-6c08ea4c.js";

import {
    _ as ve,
    __tla as Ye
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Te,
    __tla as be
} from "./index-c4ca0ced.js";

import {
    _ as Ce,
    __tla as Ne
} from "./index-8b41572c.js";

import {
    _ as ke,
    __tla as Se
} from "./index-1024512a.js";

import {
    __tla as Ee
} from "./dict-c5825220.js";

import De, {
    __tla as xe
} from "./addTeach-52c31c64.js";

import {
    ai as ze,
    aj as Me,
    ak as Ie,
    al as Oe,
    __tla as Le
} from "./index-9567cbf6.js";

import {
    f as v,
    b as A,
    __tla as He
} from "./formatTime-de6f1520.js";

import {
    _ as Pe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ue
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as je
} from "./DeptTag-1be092ce.js";

import {
    __tla as Be
} from "./index-ef4d146e.js";

import {
    __tla as Je
} from "./index-13c88727.js";

let q, Re = Promise.all([ (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})() ]).then(async () => {
    let L, H, P;
    L = {
        class: "top-box"
    }, H = {
        class: "right btns-box header-btns pt-1"
    }, P = {
        class: "bottom-box"
    }, q = Pe({
        __name: "semesterManage",
        setup($e) {
            const k = le(), G = se();
            oe();
            const K = ne(() => [ {
                label: "所属学年",
                key: "startYear",
                type: "list",
                options: U()
            } ]), S = u([]), U = () => {
                const e = [];
                let a = new Date().getFullYear() - 4;
                for (let t = 1; t < 11; t++) e.push({
                    value: `${a}`,
                    label: `${a}-${a + 1}\u5B66\u5E74`
                }), a += 1;
                return e;
            }, _ = F({
                pageNo: 1,
                pageSize: 10
            }), Q = u(null), j = u([]), V = u(!1), y = u({}), Y = u(null), B = ({
                type: e,
                title: a,
                row: t
            }) => {
                const n = {
                    semesterEdit: () => {
                        y.value = JSON.parse(JSON.stringify(t)), y.value.teachDate = [ A("", "", t.termStartTime), A("", "", t.termEndTime) ];
                    },
                    default: () => {}
                };
                (n[e] || n.default)(), Y.value.handleOpen({
                    type: e,
                    title: a
                });
            }, W = () => {
                _.pageNo = 1, _.pageSize = 10;
            }, d = F({
                name: "",
                startYear: ""
            }), E = e => {
                var t;
                const a = (t = S.value) == null ? void 0 : t.filter(n => n.value === e);
                if (a != null && a.length) {
                    const {
                        value: n,
                        label: m
                    } = a == null ? void 0 : a.pop();
                    return n;
                }
                return "";
            }, D = e => e ? (parseInt(e) + 1).toString() : "", J = u(0), h = async () => {
                const e = await ze({
                    pageNo: _.pageNo,
                    pageSize: _.pageSize,
                    name: d.name,
                    startYear: d.startYear,
                    endYear: D(d.startYear),
                    yearName: E(d.startYear)
                });
                j.value = e == null ? void 0 : e.list, J.value = e == null ? void 0 : e.total;
            }, X = e => {
                Object.keys(d).forEach(a => d[a] = e[a]), h();
            }, R = async ({
                type: e,
                row: a
            }) => {
                var r;
                const {
                    id: t,
                    name: n,
                    startYear: m,
                    endYear: s,
                    yearName: T,
                    termStartTime: c,
                    termEndTime: z,
                    isCurrentTerm: b,
                    creatorName: M,
                    teachDate: p
                } = a;
                let w = {};
                (0, {
                    changeIsCurrent: () => {
                        w = {
                            id: t,
                            name: n,
                            isCurrentTerm: b === 0 ? 1 : 0,
                            startYear: m,
                            endYear: s,
                            yearName: T,
                            termStartTime: v(c, "YYYY-MM-DD"),
                            termEndTime: v(z, "YYYY-MM-DD"),
                            creatorName: M
                        };
                    },
                    semesterEdit: () => {
                        w = {
                            id: y.value.id,
                            name: n,
                            startYear: m,
                            endYear: D(m),
                            yearName: E(m),
                            termStartTime: (p == null ? void 0 : p[0]) || "",
                            termEndTime: (p == null ? void 0 : p[1]) || "",
                            isCurrentTerm: b,
                            creatorName: y.value.creatorName
                        };
                    }
                }[e])(), await Z(w), e === "semesterEdit" && ((r = Y.value) == null || r.handleClose()), 
                k.success("操作成功"), h();
            }, Z = async e => {
                await Me({
                    ...e
                });
            }, x = u(null), ee = ({
                type: e,
                params: a
            }) => {
                const t = {
                    semesterCreate: () => {
                        x.value = ae;
                    },
                    semesterEdit: () => {
                        x.value = R;
                    },
                    default: () => {}
                };
                (t[e] || t.default)(), x.value({
                    type: e,
                    row: a
                });
            }, ae = async ({
                row: e
            }) => {
                const {
                    name: a,
                    startYear: t,
                    termStartTime: n,
                    termEndTime: m,
                    isCurrentTerm: s,
                    createTime: T,
                    teachDate: c
                } = e;
                await Oe({
                    name: a,
                    startYear: t,
                    endYear: D(t),
                    yearName: E(t),
                    termStartTime: (c == null ? void 0 : c[0]) || "",
                    termEndTime: (c == null ? void 0 : c[1]) || "",
                    isCurrentTerm: s,
                    creatorName: G.getUser.nickname
                }), Y.value.handleClose(), k.success("添加成功"), h();
            };
            return ie(() => {
                h(), S.value = U();
            }), (e, a) => {
                const t = ke, n = ue, m = de, s = he, T = fe, c = ye, z = Ce, b = Te, M = ve, p = me("hasPermi"), w = we;
                return g(), ce(pe, null, [ l(M, {
                    class: "teaching-schedule"
                }, {
                    default: i(() => [ f("div", L, [ l(t, {
                        searchList: o(K),
                        onHandleSearch: X,
                        onHandleReset: W,
                        class: "left",
                        keywordsInfo: {
                            key: "name",
                            label: "学期名称"
                        }
                    }, null, 8, [ "searchList" ]), f("div", H, [ C((g(), N(m, {
                        type: "primary",
                        onClick: a[0] || (a[0] = r => B({
                            type: "semesterCreate",
                            title: "新增学期"
                        })),
                        size: "large"
                    }, {
                        default: i(() => [ l(n, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), I(" 新增 ") ]),
                        _: 1
                    })), [ [ p, [ "teachmanager:teach-term:create" ] ] ]) ]) ]), l(z, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: i(() => [ C((g(), N(c, {
                            ref_key: "tableRef",
                            ref: Q,
                            data: o(j),
                            height: "calc(100%)"
                        }, {
                            default: i(() => [ l(s, {
                                type: "index",
                                label: "序号",
                                width: "52"
                            }), l(s, {
                                label: "学期名称",
                                prop: "name",
                                "show-overflow-tooltip": ""
                            }), l(s, {
                                label: "所属学年",
                                prop: "yearName",
                                "show-overflow-tooltip": ""
                            }), l(s, {
                                label: "学期开始时间",
                                prop: "termStartTime",
                                "show-overflow-tooltip": ""
                            }, {
                                default: i(r => [ f("span", null, O(o(v)(r.row.termStartTime, "YYYY-MM-DD")), 1) ]),
                                _: 1
                            }), l(s, {
                                label: "学期结束时间",
                                prop: "termEndTime",
                                "show-overflow-tooltip": ""
                            }, {
                                default: i(r => [ f("span", null, O(o(v)(r.row.termEndTime, "YYYY-MM-DD")), 1) ]),
                                _: 1
                            }), l(s, {
                                label: "是否为当前学期",
                                prop: "isCurrentTerm",
                                "show-overflow-tooltip": ""
                            }, {
                                default: i(r => [ l(T, {
                                    size: "small",
                                    "model-value": r.row.isCurrentTerm,
                                    "active-value": 0,
                                    "inactive-value": 1,
                                    "active-color": "#13ce66",
                                    onChange: $ => R({
                                        type: "changeIsCurrent",
                                        row: r.row
                                    })
                                }, null, 8, [ "model-value", "onChange" ]) ]),
                                _: 1
                            }), l(s, {
                                label: "创建人",
                                prop: "creatorName",
                                "show-overflow-tooltip": ""
                            }), l(s, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                "show-overflow-tooltip": ""
                            }, {
                                default: i(r => [ f("span", null, O(o(v)(r.row.createTime)), 1) ]),
                                _: 1
                            }), l(s, {
                                label: "操作",
                                fixed: "right"
                            }, {
                                default: i(r => [ C((g(), N(m, {
                                    link: "",
                                    type: "primary",
                                    onClick: $ => B({
                                        type: "semesterEdit",
                                        title: "编辑学期",
                                        row: r.row
                                    })
                                }, {
                                    default: i(() => [ I(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ p, [ "teachmanager:teach-term:update" ] ] ]), C((g(), 
                                N(m, {
                                    link: "",
                                    type: "danger",
                                    onClick: $ => (({
                                        key: Fe,
                                        id: te
                                    }) => {
                                        _e.confirm("确定删除当前学期？", "提示", {
                                            confirmButtonText: "确 认",
                                            cancelButtonText: "取 消"
                                        }).then(async () => {
                                            await (async ({
                                                id: re
                                            }) => {
                                                await Ie({
                                                    id: re
                                                }), k.success("删除成功");
                                            })({
                                                id: te
                                            }), h();
                                        });
                                    })({
                                        key: "delTerm",
                                        id: r.row.id
                                    })
                                }, {
                                    default: i(() => [ I(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ p, [ "teachmanager:teach-term:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ w, o(V) ] ]) ]),
                        _: 1
                    }), f("div", P, [ l(b, {
                        limit: o(_).pageSize,
                        "onUpdate:limit": a[1] || (a[1] = r => o(_).pageSize = r),
                        page: o(_).pageNo,
                        "onUpdate:page": a[2] || (a[2] = r => o(_).pageNo = r),
                        total: o(J),
                        onPagination: h
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), l(De, {
                    ref_key: "addTeachRef",
                    ref: Y,
                    teachInfo: o(y),
                    semesterYearList: o(S),
                    onHandleData: ee
                }, null, 8, [ "teachInfo", "semesterYearList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-53757b61" ] ]);
});

export {
    Re as __tla,
    q as default
};