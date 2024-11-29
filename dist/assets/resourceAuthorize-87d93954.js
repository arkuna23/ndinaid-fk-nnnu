import {
    _ as Se,
    __tla as Ae
} from "./index-e2094cc0.js";

import {
    _ as Le,
    __tla as xe
} from "./index-c4ca0ced.js";

import {
    _ as Ie,
    __tla as Ce
} from "./index-8b41572c.js";

import {
    u as Re,
    p as ze,
    T as Ee,
    r as i,
    U as A,
    e as V,
    f as Ue,
    o as W,
    c as X,
    t,
    k as o,
    a as l,
    D as qe,
    B as y,
    v as h,
    l as f,
    F as je,
    _ as Be,
    J as De,
    ad as Oe,
    ae as He,
    R as Pe,
    S as Ye,
    __tla as $e
} from "./index-6c08ea4c.js";

import {
    _ as Fe,
    __tla as Ge
} from "./index-1024512a.js";

import {
    a as Je,
    g as Ze,
    b as Ke,
    d as Me,
    __tla as Qe
} from "./addAuthorize-5cc52396.js";

import {
    a as Ve,
    __tla as We
} from "./index-c31c99eb.js";

import {
    d as L,
    __tla as Xe
} from "./formatTime-de6f1520.js";

import {
    _ as ea
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as aa
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as ta
} from "./DeptTag-1be092ce.js";

import {
    __tla as la
} from "./index-ef4d146e.js";

let ee, oa = Promise.all([ (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})() ]).then(async () => {
    let T, x, I, C, R, z, E, U, q, j, B, D, O, H, P, Y, $, F, G;
    T = w => (Pe("data-v-fa1d0099"), w = w(), Ye(), w), x = {
        class: "course-teaching"
    }, I = {
        class: "info-header"
    }, C = T(() => t("span", {
        class: "icon-box-back"
    }, "返回", -1)), R = T(() => t("span", {
        class: "info-name"
    }, "资源授权", -1)), z = {
        class: "school"
    }, E = [ "src" ], U = {
        class: "school-name"
    }, q = {
        class: "school-num"
    }, j = {
        class: "school-key"
    }, B = {
        class: "c1"
    }, D = {
        class: "school-key"
    }, O = {
        class: "c2"
    }, H = {
        class: "school-key"
    }, P = {
        class: "c3"
    }, Y = {
        class: "top-box"
    }, $ = {
        class: "right btns-box header-btns pt-1"
    }, F = {
        class: "content"
    }, G = {
        class: "bottom-box"
    }, ee = ea({
        __name: "resourceAuthorize",
        setup(w) {
            const ae = Re(), b = ze(), v = Ee(), J = i(0), Z = i(0), K = i(0);
            A({
                arrangementId: "1675796700649570305",
                arrangementName: "测试首页组队设置0703-1717",
                termId: null,
                startYear: "2023",
                endYear: "2024",
                termName: "第二学期",
                arrangementIntro: null,
                arrangementStatus: "3",
                releaseTime: "2023-07-10 11:27:08",
                createTime: "2023-07-03 17:20:43",
                updateTime: null,
                userId: "1650040458642108418",
                userName: "nv00001",
                nickName: "徐老师",
                pageNo: null,
                pageSize: null,
                classNumber: "2"
            });
            const p = i({
                tenantName: "",
                tenantId: "",
                accountCount: "",
                code: "",
                imageRepositoryUrl: ""
            }), te = () => {
                ae.back();
            }, le = [ "", "课程资源", "项目资源", "活动资源", "毕设资源" ], oe = [ "", "本科", "专科", "高职", "中职" ], se = [ {
                label: "资源类型",
                key: "pkgType",
                type: "list",
                options: [ {
                    value: 1,
                    label: "课程资源"
                }, {
                    value: 2,
                    label: "项目资源"
                }, {
                    value: 3,
                    label: "活动资源"
                }, {
                    value: 4,
                    label: "毕设资源"
                } ]
            }, {
                label: "适用层次",
                key: "pkgLevel",
                type: "list",
                options: [ {
                    value: 1,
                    label: "本科"
                }, {
                    value: 2,
                    label: "专科"
                }, {
                    value: 3,
                    label: "高职"
                }, {
                    value: 4,
                    label: "中职"
                } ]
            }, {
                label: "授权期限",
                key: "pkgAuthTime",
                type: "datetimerange"
            } ], u = A({
                pageNo: 1,
                pageSize: 10
            }), re = i(!1);
            V(() => m.value.length > 0);
            const m = i([]), ne = e => {
                m.value = e, re.value = e.length === k.value.length;
            }, N = i(null), ie = e => {
                var a;
                e !== !1 ? e.value ? N.value.clearSelection() : (a = k.value) == null || a.forEach(s => {
                    N.value.toggleAllSelection();
                }) : N.value.clearSelection();
            }, pe = V(() => {
                const e = m.value.map(s => `${s.name}(${s.id})`);
                let a = "";
                return a = m.value.length > 1 ? e.join("，") : e.join(""), a;
            }), ce = i({}), S = i(null), M = i(null), ue = async ({
                type: e,
                params: a
            }) => {
                const s = {
                    review: () => {
                        M.value = me;
                    },
                    default: () => {}
                };
                (s[e] || s.default)(), await M.value({
                    params: a
                }), b.success("操作成功"), addTeachRef.value.handleClose(), _();
            }, me = async ({
                params: e
            }) => {
                b.success("审核");
            }, k = i([]), de = ({
                key: e,
                id: a,
                row: s
            }) => {
                (0, {
                    reset: () => {
                        ye({
                            key: "multi",
                            id: a,
                            row: s
                        });
                    },
                    del: () => {
                        b.confirm("授权取消后资源对该租户将不可见，已使用的不受影响， 确定取消授权？", "提示", {
                            confirmButtonText: "确 认",
                            cancelButtonText: "取 消"
                        }).then(async () => {
                            await ge(m.value), b.success("操作成功"), _();
                        });
                    }
                }[e])();
            }, ge = async e => {
                await Me({
                    idArray: e.map(a => a.id)
                });
            }, ye = async ({
                key: e,
                id: a,
                row: s
            }) => {
                const d = {
                    single: () => {
                        (({
                            row: g
                        }) => {
                            g.name, g.id;
                        })({
                            row: s
                        });
                    },
                    multi: () => {
                        pe.value;
                    },
                    default: () => {}
                };
                (d[e] || d.default)(), S.value.openDialog({
                    type: "update",
                    title: "更新授权",
                    chooseSelection: m.value
                });
            }, Q = i(null), _ = async () => {
                var a, s, d, g;
                const e = await Ze({
                    pageNo: u.pageNo,
                    pageSize: u.pageSize,
                    tenantId: v.query.id || "",
                    tenantName: p.value.tenantName,
                    tenantCode: v.query.code || "",
                    pkgId: "",
                    pkgCode: r.keywords,
                    pkgName: r.keywords,
                    pkgAuthStart: ((a = r.pkgAuthTime[0]) == null ? void 0 : a.slice(0, 10)) || "",
                    pkgAuthEnd: ((s = r.pkgAuthTime[1]) == null ? void 0 : s.slice(0, 10)) || "",
                    pkgType: r.pkgType,
                    pkgLevel: r.pkgLevel
                });
                k.value = e == null ? void 0 : e.list, Q.value = (e == null ? void 0 : e.total) || 0, 
                Ke({
                    tenantId: v.query.id || "",
                    tenantName: p.value.tenantName,
                    tenantCode: v.query.code || "",
                    pkgId: "",
                    pkgCode: r.keywords,
                    pkgName: r.keywords,
                    pkgAuthStart: ((d = r.pkgAuthTime[0]) == null ? void 0 : d.slice(0, 10)) || "",
                    pkgAuthEnd: ((g = r.pkgAuthTime[1]) == null ? void 0 : g.slice(0, 10)) || "",
                    pkgType: r.pkgType,
                    pkgLevel: r.pkgLevel
                }).then(n => {
                    J.value = n.authedNum || 0, Z.value = n.willExpiredNum || 0, 
                    K.value = n.expiredNum || 0;
                });
            }, r = A({
                keywords: "",
                pkgType: "",
                pkgLevel: "",
                pkgAuthTime: []
            }), _e = e => {
                Object.keys(r).forEach(a => r[a] = e[a] || ""), _();
            }, he = [ {
                key: "reset",
                label: "更新授权",
                type: "primary",
                icon: "ep:refresh"
            }, {
                key: "del",
                label: "取消授权",
                color: "#E14635",
                icon: "svg-icon:cancel_auth"
            } ], ve = () => {
                u.pageNo = 1, _();
            };
            return Ue(async () => {
                await (async () => {
                    const e = await Ve(v.query.id);
                    e && (p.value.tenantName = e.name, p.value.accountCount = e.accountCount, 
                    p.value.code = e.code, p.value.imageRepositoryUrl = e.imageRepositoryUrl);
                })(), _();
            }), (e, a) => {
                const s = Be, d = Fe, g = De, n = Oe, ke = He, fe = Ie, we = Le, be = Se;
                return W(), X(je, null, [ t("div", x, [ t("div", I, [ t("div", {
                    class: "icon-box",
                    onClick: te
                }, [ o(s, {
                    icon: "ep:back",
                    size: 16,
                    class: "icon-import mr-1"
                }), C ]), R ]), t("div", z, [ l(p).imageRepositoryUrl ? (W(), X("img", {
                    key: 0,
                    class: "sch-logo",
                    src: l(p).imageRepositoryUrl
                }, null, 8, E)) : qe("", !0), t("div", null, [ t("h5", U, y(l(p).tenantName), 1), t("p", q, y(l(p).accountCount), 1), t("p", null, [ t("span", j, [ h("累计授权资源"), t("u", B, y(l(J)), 1) ]), t("span", D, [ h("即将到期资源"), t("u", O, y(l(Z)), 1) ]), t("span", H, [ h("已到期资源"), t("u", P, y(l(K)), 1) ]) ]) ]) ]), t("div", Y, [ o(d, {
                    searchList: se,
                    onHandleSearch: _e,
                    class: "left",
                    keywordsInfo: {
                        key: "keywords",
                        label: "课程名称/编号"
                    }
                }), t("div", $, [ o(g, {
                    type: "primary",
                    onClick: a[0] || (a[0] = c => (({
                        type: Ne,
                        title: Te,
                        row: sa
                    }) => {
                        S.value.openDialog({
                            type: Ne,
                            title: Te,
                            tenantName: p.value.tenantName
                        });
                    })({
                        type: "add",
                        title: "新增授权"
                    })),
                    size: "large",
                    plain: ""
                }, {
                    default: f(() => [ o(s, {
                        icon: "svg-icon:auth",
                        class: "mr-4px"
                    }), h(" 新增授权 ") ]),
                    _: 1
                }) ]) ]), t("div", F, [ o(fe, {
                    class: "center-box",
                    "no-pager": !1
                }, {
                    default: f(() => [ o(ke, {
                        ref_key: "tableRef",
                        ref: N,
                        data: l(k),
                        height: "calc(100%)",
                        onSelectionChange: ne
                    }, {
                        default: f(() => [ o(n, {
                            type: "selection"
                        }), o(n, {
                            type: "index",
                            label: "序号",
                            width: "52"
                        }), o(n, {
                            label: "资源名称",
                            prop: "pkgName",
                            "show-overflow-tooltip": ""
                        }), o(n, {
                            label: "资源编号",
                            prop: "pkgCode",
                            "show-overflow-tooltip": ""
                        }), o(n, {
                            label: "资源类型",
                            prop: "pkgType",
                            "show-overflow-tooltip": ""
                        }, {
                            default: f(c => [ h(y(le[c.row.pkgType]), 1) ]),
                            _: 1
                        }), o(n, {
                            label: "适用层次",
                            prop: "pkgLevel",
                            "show-overflow-tooltip": ""
                        }, {
                            default: f(c => [ h(y(oe[c.row.pkgLevel || ""]), 1) ]),
                            _: 1
                        }), o(n, {
                            label: "授权开始时间",
                            prop: "pkgAuthStart",
                            formatter: l(L),
                            "show-overflow-tooltip": "",
                            width: "180"
                        }, null, 8, [ "formatter" ]), o(n, {
                            label: "授权结束时间",
                            prop: "pkgAuthEnd",
                            formatter: l(L),
                            "show-overflow-tooltip": "",
                            width: "180"
                        }, null, 8, [ "formatter" ]), o(n, {
                            label: "最后录入时间",
                            prop: "createTime",
                            formatter: l(L),
                            "show-overflow-tooltip": "",
                            width: "180"
                        }, null, 8, [ "formatter" ]) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }), t("div", G, [ o(we, {
                    limit: l(u).pageSize,
                    "onUpdate:limit": a[1] || (a[1] = c => l(u).pageSize = c),
                    page: l(u).pageNo,
                    "onUpdate:page": a[2] || (a[2] = c => l(u).pageNo = c),
                    total: l(Q),
                    onPagination: _
                }, null, 8, [ "limit", "page", "total" ]) ]) ]), o(be, {
                    ref: "SelectionButtonGroupRef",
                    selectList: l(m),
                    pageList: l(k),
                    btnInfoList: he,
                    onSelectAll: ie,
                    onHandleEvent: de
                }, null, 8, [ "selectList", "pageList" ]) ]), o(Je, {
                    ref_key: "addAuthorizeRef",
                    ref: S,
                    teachInfo: l(ce),
                    onHandleData: ue,
                    termOptionList: e.termOptionList,
                    onRefresh: ve
                }, null, 8, [ "teachInfo", "termOptionList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-fa1d0099" ] ]);
});

export {
    oa as __tla,
    ee as default
};