import {
    _ as yt,
    __tla as gt
} from "./ContentPage-f6bcc98e.js";

import {
    _ as wt,
    __tla as bt
} from "./index-e2094cc0.js";

import {
    _ as vt,
    __tla as kt
} from "./index-c4ca0ced.js";

import {
    _ as Ct,
    __tla as xt
} from "./index-8b41572c.js";

import {
    T as St,
    u as Nt,
    p as Lt,
    U as z,
    r as i,
    e as V,
    b9 as It,
    f as Tt,
    j as Bt,
    o as v,
    c as Ot,
    k as a,
    l as u,
    t as f,
    A as I,
    C as T,
    v as B,
    a as n,
    B as zt,
    F as Rt,
    E as Et,
    i as R,
    _ as jt,
    J as $t,
    ad as Dt,
    ae as Pt,
    R as At,
    S as Ht,
    __tla as Jt
} from "./index-6c08ea4c.js";

import {
    _ as Mt,
    __tla as Ut
} from "./index-1024512a.js";

import Ft, {
    __tla as qt
} from "./addTeach-52c31c64.js";

import {
    i as Gt,
    __tla as Xt
} from "./importTeach-ad550a44.js";

import {
    z as Kt,
    A as Qt,
    B as Vt,
    C as Wt,
    D as Yt,
    __tla as Zt
} from "./index-cfc63ccf.js";

import {
    d as te,
    __tla as ee
} from "./formatTime-de6f1520.js";

import {
    _ as ae
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as se
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as le
} from "./DeptTag-1be092ce.js";

import {
    __tla as re
} from "./index-ef4d146e.js";

import {
    __tla as oe
} from "./index-13c88727.js";

import {
    __tla as ne
} from "./index-9567cbf6.js";

import {
    __tla as ie
} from "./catalog-6352045f.js";

import {
    __tla as ce
} from "./file-e038b35d.js";

import {
    __tla as ue
} from "./errorDialog-2a24db66.js";

import {
    __tla as pe
} from "./fqa-b0babe7d.js";

let W, _e = Promise.all([ (() => {
    try {
        return gt;
    } catch {}
})(), (() => {
    try {
        return bt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return Jt;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return Xt;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})() ]).then(async () => {
    let E, j, $, D, P, A;
    E = {
        class: "top-box"
    }, j = {
        class: "right btns-box header-btns pt-1"
    }, $ = {
        class: "content"
    }, D = {
        class: "bottom-box"
    }, P = {
        class: "slot-div mb-30px mt-10px"
    }, A = (k => (At("data-v-c6594b5c"), k = k(), Ht(), k))(() => f("span", null, "教学班级：", -1)), 
    W = ae({
        __name: "stuManage",
        setup(k) {
            const C = St(), Y = Nt(), c = Lt(), Z = () => {
                Y.back(), H();
            }, H = () => {
                Object.keys(b).forEach(t => b[t] = ""), p.pageNo = 1, p.pageSize = 10;
            }, tt = [], p = z({
                pageNo: 1,
                pageSize: 10
            }), et = i(!1);
            V(() => g.value.length > 0);
            const g = i([]), at = t => {
                g.value = t, et.value = t.length === w.value.length;
            }, x = i(null), st = t => {
                var e;
                t !== !1 ? t.value ? x.value.clearSelection() : (e = w.value) == null || e.forEach(s => {
                    x.value.toggleAllSelection();
                }) : x.value.clearSelection();
            }, J = V(() => {
                const t = [], e = [], s = g.value.map(l => (t.push(l.stuId), e.push(l.id), 
                `${l.stuName}(${l.stuNumber})`));
                let o = "";
                return o = g.value.length > 1 ? s.join("，") : s.join(""), {
                    listString: o,
                    stuIdList: t,
                    idList: e
                };
            }), M = i({}), O = i(null), U = i(null), lt = async ({
                type: t,
                params: e
            }) => {
                const s = {
                    stuCreate: () => {
                        U.value = rt;
                    },
                    default: () => {}
                };
                (s[t] || s.default)(), await U.value({
                    params: e
                }), c.success("操作成功"), O.value.handleClose(), d();
            }, rt = async ({
                params: t
            }) => {
                const {
                    id: e,
                    stuName: s,
                    stuNumber: o
                } = t;
                await Vt({
                    id: e,
                    stuName: s,
                    stuNumber: o,
                    teachClassId: C.params.teachClassId
                }), c.success("新建成功");
            }, w = i([]), F = ({
                key: t,
                id: e,
                row: s
            }) => {
                (0, {
                    reset: () => {
                        q({
                            key: "multi",
                            id: e,
                            row: s
                        });
                    },
                    del: () => {
                        c.confirm("如教学安排已发布，删除后所有已产生的教学及学习数据将全部清空，确定删除？", "提示", {
                            confirmButtonText: "确 认",
                            cancelButtonText: "取 消"
                        }).then(async () => {
                            await ot({
                                key: t,
                                id: e,
                                row: s
                            }), c.success("操作成功"), d();
                        });
                    },
                    batchDel: () => {
                        const {
                            listString: o,
                            idList: l
                        } = J.value;
                        let r = l;
                        c.confirm("如教学安排已发布，删除后所有已产生的教学及学习数据将全部清空，确定删除？", "提示", {
                            confirmButtonText: "确 认",
                            cancelButtonText: "取 消"
                        }).then(async () => {
                            await nt({
                                ids: r
                            }), c.success("操作成功"), d();
                        });
                    }
                }[t])();
            }, ot = async ({
                key: t,
                id: e
            }) => {
                await Wt({
                    id: e
                });
            }, nt = async ({
                ids: t
            }) => {
                await Yt({
                    ids: t.join(","),
                    teachClassId: C.params.teachClassId
                });
            }, q = async ({
                key: t,
                id: e,
                row: s
            }) => {
                let o = "", l = [];
                const r = {
                    single: () => {
                        const {
                            listString: _,
                            stuIdList: h
                        } = (({
                            row: y
                        }) => {
                            const S = [];
                            return S.push(y.stuId), {
                                stuIdList: S,
                                listString: `${y.stuName}(${y.stuNumber})`
                            };
                        })({
                            row: s
                        });
                        o = _, l = h;
                    },
                    multi: () => {
                        const {
                            listString: _,
                            stuIdList: h
                        } = J.value;
                        o = _, l = h;
                    },
                    default: () => {}
                };
                (r[t] || r.default)(), c.confirm(`\u662F\u5426\u91CD\u7F6E\u7528\u6237\u201C${o}\u201D\u7684\u5BC6\u7801\uFF1F`, "提示", {
                    confirmButtonText: "确 认",
                    cancelButtonText: "取 消"
                }).then(async () => {
                    const _ = await it({
                        ids: l
                    });
                    Et({
                        title: "提示",
                        message: R("p", null, [ R("p", {
                            style: ""
                        }, `\u7528\u6237\u201C${o}\u201D\uFF0C\u767B\u5F55\u5BC6\u7801\u5DF2\u91CD\u7F6E\u4E3A \uFF1A`), R("p", {
                            style: "color: #245FE6;text-align: center;font-size: 18px;font-weight: bold;margin-top: 12px;"
                        }, _) ]),
                        customClass: "neu-confirm-message-box",
                        showCancelButton: !0,
                        confirmButtonText: "复 制",
                        cancelButtonText: "返 回"
                    }).then(h => {
                        try {
                            navigator.clipboard.writeText(_), c.success("复制成功"), 
                            d();
                        } catch {
                            c.error("复制失败");
                        }
                    });
                });
            }, it = async ({
                ids: t
            }) => await Kt({
                ids: t
            }), G = i(0), d = async () => {
                const t = await Qt({
                    pageNo: p.pageNo,
                    pageSize: p.pageSize,
                    teachClassId: C.params.teachClassId,
                    ...b
                });
                w.value = t == null ? void 0 : t.list, G.value = (t == null ? void 0 : t.total) || 0;
            }, b = z({
                keywords: ""
            }), ct = t => {
                Object.keys(b).forEach(e => b[e] = t[e]), d();
            }, ut = [ {
                key: "reset",
                label: "重置密码",
                type: "primary",
                icon: "ep:promotion",
                permi: "teachmanager:teach-arrangement:update"
            }, {
                key: "batchDel",
                label: "移除",
                color: "#E14635",
                icon: "svg-icon:delete"
            } ], pt = z({
                source: "stuManage",
                name: "教学班学生导入模板"
            }), X = i(null), _t = () => {
                X.value.handleOpen({
                    tip: "请注意学生姓名与学号务必一致，否则无法导入",
                    source: "stuManage",
                    instruction: "请基于系统模板补充信息，单次最多导入500行"
                });
            };
            It("tableColumnList", [ {
                prop: "stuName",
                label: "学生姓名"
            }, {
                prop: "stuNumber",
                label: "学生学号"
            } ]);
            const K = i(null), mt = () => {
                var t;
                (t = K.value) == null || t.resetParams();
            };
            return Tt(() => {
                d();
            }), (t, e) => {
                const s = Mt, o = jt, l = $t, r = Dt, _ = Pt, h = Ct, y = vt, S = wt, dt = yt, N = Bt("hasPermi");
                return v(), Ot(Rt, null, [ a(dt, {
                    class: "course-teaching",
                    title: "学生管理",
                    onRouterBack: Z,
                    noPadding: !0,
                    noBgColor: !0
                }, {
                    default: u(() => [ f("div", E, [ a(s, {
                        ref_key: "comSearchRef",
                        ref: K,
                        searchList: tt,
                        onHandleSearch: ct,
                        onHandleReset: H,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "学生姓名/学号/工号"
                        }
                    }, null, 512), f("div", j, [ I((v(), T(l, {
                        type: "primary",
                        onClick: e[0] || (e[0] = m => (({
                            type: L,
                            title: ft,
                            row: ht
                        }) => {
                            const Q = {
                                stuCreate: () => {},
                                stuEdit: () => {
                                    M.value = JSON.parse(JSON.stringify(ht));
                                },
                                default: () => {}
                            };
                            (Q[L] || Q.default)(), O.value.handleOpen({
                                type: L,
                                title: ft
                            });
                        })({
                            type: "stuCreate",
                            title: "新增学生"
                        })),
                        size: "large"
                    }, {
                        default: u(() => [ a(o, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), B(" 新增学生 ") ]),
                        _: 1
                    })), [ [ N, [ "teachmanager:teach-class-student:create" ] ] ]), I((v(), 
                    T(l, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: _t
                    }, {
                        default: u(() => [ a(o, {
                            icon: "svg-icon:icon-import",
                            size: 16,
                            class: "icon-import mr-1"
                        }), B(" 导入学生 ") ]),
                        _: 1
                    })), [ [ N, [ "teachmanager:teach-class-student:import" ] ] ]) ]) ]), f("div", $, [ a(h, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: u(() => [ a(_, {
                            ref_key: "tableRef",
                            ref: x,
                            data: n(w),
                            height: "calc(100%)",
                            onSelectionChange: at
                        }, {
                            default: u(() => [ a(r, {
                                type: "selection"
                            }), a(r, {
                                type: "index",
                                label: "序号",
                                width: "52"
                            }), a(r, {
                                label: "姓名",
                                prop: "stuName",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "学号/工号",
                                prop: "stuNumber",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "电子邮箱",
                                prop: "stuMail",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "教学班级",
                                prop: "teachClass",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "所属末级组织",
                                prop: "stuDept",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "入班方式",
                                prop: "addType",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "入班时间",
                                prop: "createTime",
                                formatter: n(te),
                                "show-overflow-tooltip": "",
                                width: "180"
                            }, null, 8, [ "formatter" ]), a(r, {
                                label: "操作",
                                width: "238",
                                fixed: "right"
                            }, {
                                default: u(m => [ I((v(), T(l, {
                                    link: "",
                                    type: "primary",
                                    onClick: L => q({
                                        key: "single",
                                        row: m.row
                                    })
                                }, {
                                    default: u(() => [ B(" 重置密码 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ N, [ "system:user:update-password" ] ] ]), I((v(), 
                                T(l, {
                                    link: "",
                                    type: "danger",
                                    onClick: L => F({
                                        key: "del",
                                        id: m.row.id,
                                        row: m.row
                                    })
                                }, {
                                    default: u(() => [ B(" 移除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ N, [ "teachmanager:teach-class-student:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), f("div", D, [ a(y, {
                        limit: n(p).pageSize,
                        "onUpdate:limit": e[1] || (e[1] = m => n(p).pageSize = m),
                        page: n(p).pageNo,
                        "onUpdate:page": e[2] || (e[2] = m => n(p).pageNo = m),
                        total: n(G),
                        onPagination: d
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]), a(S, {
                        ref: "SelectionButtonGroupRef",
                        selectList: n(g),
                        pageList: n(w),
                        btnInfoList: ut,
                        onSelectAll: st,
                        onHandleEvent: F
                    }, null, 8, [ "selectList", "pageList" ]) ]),
                    _: 1
                }), a(Ft, {
                    ref_key: "addTeachRef",
                    ref: O,
                    teachInfo: n(M),
                    onHandleData: lt,
                    termOptionList: t.termOptionList
                }, null, 8, [ "teachInfo", "termOptionList" ]), a(Gt, {
                    ref_key: "importTeachRef",
                    ref: X,
                    downloadInfo: n(pt),
                    termOptionList: t.termOptionList,
                    onRefreshList: mt
                }, {
                    default: u(() => [ f("div", P, [ A, f("span", null, zt(n(C).query.className), 1) ]) ]),
                    _: 1
                }, 8, [ "downloadInfo", "termOptionList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-c6594b5c" ] ]);
});

export {
    _e as __tla,
    W as default
};