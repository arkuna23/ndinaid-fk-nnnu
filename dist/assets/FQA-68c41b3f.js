import {
    u as Be,
    T as De,
    p as He,
    h as Ee,
    a0 as Je,
    e as D,
    U as z,
    r as n,
    b9 as Me,
    ej as Ue,
    f as Ve,
    j as je,
    o as t,
    c as x,
    t as A,
    a,
    k as l,
    C as o,
    l as r,
    A as d,
    v as p,
    dX as pe,
    c5 as ue,
    D as v,
    B as Ge,
    z as Xe,
    F as $e,
    _ as We,
    aQ as Ye,
    J as Ke,
    ad as Ze,
    ae as ea,
    a9 as aa,
    __tla as ta
} from "./index-6c08ea4c.js";

import {
    _ as ra,
    __tla as la
} from "./index-e2094cc0.js";

import {
    _ as sa,
    __tla as oa
} from "./index-c834085f.js";

import {
    _ as na,
    __tla as ia
} from "./index-c4ca0ced.js";

import {
    _ as ca,
    __tla as _a
} from "./index-8b41572c.js";

import {
    _ as pa,
    __tla as ua
} from "./index-1024512a.js";

import {
    __tla as da
} from "./dict-c5825220.js";

import ma, {
    __tla as fa
} from "./addFQA-b4cbd236.js";

import ya, {
    __tla as ha
} from "./viewFQA-8ef12967.js";

import {
    i as ga,
    g as wa,
    e as ka,
    a as va,
    c as ba,
    u as Ia,
    d as qa,
    b as xa,
    __tla as Aa
} from "./importTeach-ad550a44.js";

import {
    d as Sa
} from "./download-20922b56.js";

import {
    _ as Qa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as Ca,
    b as Fa,
    E as La,
    __tla as Na
} from "./index-5adb716b.js";

import {
    __tla as za
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Pa
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ra
} from "./index-ef4d146e.js";

import {
    __tla as Ta
} from "./Editor-ef737d2a.js";

import {
    __tla as Oa
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Ba
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Da
} from "./file-e038b35d.js";

import {
    __tla as Ha
} from "./index-13c88727.js";

import {
    __tla as Ea
} from "./index-9567cbf6.js";

import {
    __tla as Ja
} from "./index-cfc63ccf.js";

import {
    __tla as Ma
} from "./catalog-6352045f.js";

import {
    __tla as Ua
} from "./errorDialog-2a24db66.js";

import {
    __tla as Va
} from "./fqa-b0babe7d.js";

import {
    __tla as ja
} from "./formatTime-de6f1520.js";

let de, Ga = Promise.all([ (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})() ]).then(async () => {
    let H, E, J, M, U, V, j, G, X;
    H = {
        class: "teaching-schedule"
    }, E = {
        key: 0,
        style: {
            flex: "1",
            display: "flex",
            "flex-direction": "column"
        }
    }, J = {
        class: "top-box mb-10px"
    }, M = {
        class: "right btns-box header-btns"
    }, U = {
        key: 0,
        style: {
            flex: "1"
        }
    }, V = [ "onClick" ], j = [ "innerHTML" ], G = {
        key: 0
    }, X = {
        class: "bottom-box"
    }, de = Qa({
        __name: "FQA",
        props: {
            basicInformation: {
                type: Object,
                default: () => ({})
            }
        },
        setup(me) {
            Be();
            const g = De(), S = He();
            Ee();
            const fe = me, {
                basicInformation: ye
            } = Je(fe), m = D(() => {
                var e;
                return (e = g == null ? void 0 : g.name) == null ? void 0 : e.includes("Manage");
            }), he = D(() => [ {
                label: "所属目录",
                key: "dirIds",
                type: "tree",
                multiple: !0,
                options: L.value
            }, {
                label: "关联知识技能点",
                key: "ktIds",
                type: "tree",
                options: L.value,
                width: "158px"
            } ]), c = z({
                pageNo: 1,
                pageSize: 10
            }), ge = n(!1);
            D(() => I.value.length > 0);
            const I = n([]), we = e => {
                I.value = e, ge.value = e.length === w.value.length;
            }, Q = n(null), ke = e => {
                var s;
                e !== !1 ? e.value ? Q.value.clearSelection() : (s = w.value) == null || s.forEach(_ => {
                    Q.value.toggleAllSelection();
                }) : Q.value.clearSelection();
            }, w = n([]), ve = n(!1), $ = n({}), C = n(null), W = () => {
                c.pageNo = 1, c.pageSize = 10;
            }, u = z({
                searchReq: "",
                ktIds: [],
                dirIds: []
            }), be = e => {
                u.searchReq = e.searchReq, u.ktIds = e.ktIds || [], u.dirIds = e.dirIds || [], 
                W(), F();
            };
            n(!1);
            const Y = n(0), F = async () => {
                const e = await wa({
                    pageNo: c.pageNo,
                    pageSize: c.pageSize,
                    resPkgId: g.params.id,
                    ...u
                });
                return w.value = e == null ? void 0 : e.list, Y.value = (e == null ? void 0 : e.total) || 0, 
                e;
            }, Ie = async () => await qa(q.value), qe = async () => await xa({
                idArray: q.value,
                resPkgId: g.params.id
            }), q = n([]), K = ({
                key: e,
                id: s,
                row: _
            }) => {
                let k = "", b = null;
                k = "确认删除当前FQA？", q.value = [], (0, {
                    operateDel: async () => {
                        q.value = s, b = Ie;
                    },
                    selectDel: async () => {
                        q.value = I.value.map(f => f.id), b = qe;
                    }
                }[e])(), S.confirm("确认删除当前FQA？", "提示", {
                    confirmButtonText: "确 认",
                    cancelButtonText: "取 消"
                }).then(async () => {
                    await b({
                        key: e,
                        id: s,
                        row: _
                    }), I.value = [], S.success("删除成功"), F();
                });
            }, Z = n(null), xe = async () => {
                const e = await ka({
                    pageNo: c.pageNo,
                    pageSize: c.pageSize,
                    resPkgId: g.params.id,
                    ...u,
                    dirIds: u.dirIds.length ? u.dirIds : "",
                    ktIds: u.ktIds.length ? u.ktIds : ""
                });
                Sa.excel(e, `FQA-${ye.value.pkgName}.xls`);
            };
            Me("tableColumnList", [ {
                prop: "fqaQuestion",
                label: "问题",
                width: "80px"
            }, {
                prop: "fqaAnswer",
                label: "答案",
                width: "80px"
            }, {
                prop: "dirIds",
                label: "所属目录",
                width: "80px"
            }, {
                prop: "ktIds",
                label: "关联所属技能点编号",
                width: "80px"
            } ]);
            const P = n(null), Ae = async ({
                type: e,
                requestParams: s
            }) => {
                const _ = {
                    create: () => {
                        P.value = Se;
                    },
                    edit: () => {
                        P.value = Qe;
                    },
                    default: () => {}
                };
                (_[e] || _.default)(), await P.value({
                    requestParams: s
                }), C.value.handleClose(), le();
            }, Se = async ({
                requestParams: e
            }) => {
                const s = await ba(e);
                return S.success("新建成功"), s;
            }, L = n([]), R = n(!1), ee = e => {
                R.value = e;
            }, Qe = async ({
                requestParams: e
            }) => {
                const s = await Ia(e);
                return S.success("操作成功"), s;
            }, Ce = [ {
                key: "selectDel",
                label: "删除",
                color: "#E14635",
                icon: "svg-icon:delete",
                permi: "res:tenant-course-fqa:delete"
            } ], ae = e => {
                let s = "", _ = "";
                const k = {
                    create: () => {
                        s = "create", _ = "新建FQA", C.value.handleOpen({
                            type: s,
                            title: _
                        });
                    },
                    batchImport: () => {
                        Z.value.handleOpen({
                            tip: "说明：请按模板要求导入FAQ，导入后可编辑修改",
                            source: "privateFQA",
                            instruction: "请基于系统模板补充信息，单次最多导入200行"
                        });
                    },
                    default: () => {}
                };
                (k[e] || k.default)();
            }, te = n(null), T = z({
                question: "",
                answer: ""
            }), re = ({
                row: e
            }) => {
                te.value.handleOpen({
                    id: e.id
                }), T.question = e.fqaQuestion, T.answer = e.fqaAnswer;
            }, Fe = z({
                source: "privateFQA",
                name: "FAQ导入模板"
            }), O = n(null), le = () => {
                O.value ? O.value.resetParams() : oe();
            }, se = n(!1), oe = async () => {
                const e = await F();
                se.value = (e == null ? void 0 : e.total) > 0;
            };
            return Ue(async () => {
                (async () => {
                    const e = await va(g.params.id);
                    L.value = e || [];
                })();
            }), Ve(() => {
                oe();
            }), (e, s) => {
                const _ = pa, k = We, b = Ye, f = Ke, N = Ca, ne = Fa, ie = La, y = Ze, Le = ea, Ne = ca, ze = na, ce = sa, Pe = ra, h = je("hasPermi"), Re = aa;
                return t(), x($e, null, [ A("div", H, [ a(se) || a(w).length ? (t(), 
                x("div", E, [ A("div", J, [ l(_, {
                    ref_key: "comSearchRef",
                    ref: O,
                    borderBox: !0,
                    searchList: a(he),
                    onHandleSearch: be,
                    onHandleReset: W,
                    class: "left",
                    keywordsInfo: {
                        key: "searchReq",
                        label: "问题/答案关键字"
                    }
                }, null, 8, [ "searchList" ]), A("div", M, [ a(m) ? (t(), o(ie, {
                    key: 0,
                    trigger: "click",
                    onCommand: ae,
                    onVisibleChange: ee
                }, {
                    dropdown: r(() => [ l(ne, null, {
                        default: r(() => [ d((t(), o(N, {
                            command: "batchImport"
                        }, {
                            default: r(() => [ p("批量导入") ]),
                            _: 1
                        })), [ [ h, [ "res:Tenant-class-fqa:import" ] ] ]), d((t(), 
                        o(N, {
                            command: "create"
                        }, {
                            default: r(() => [ p("手动新建") ]),
                            _: 1
                        })), [ [ h, [ "res:tenant-course-fqa:create" ] ] ]) ]),
                        _: 1
                    }) ]),
                    default: r(() => [ l(f, {
                        type: "primary",
                        size: "large",
                        class: "btn-group mr-10px"
                    }, {
                        default: r(() => [ d(l(k, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }, null, 512), [ [ h, [ "res:Tenant-class-fqa:import", "res:tenant-course-fqa:create" ] ] ]), p(" 新建 "), l(b, {
                            style: {
                                "margin-left": "5px"
                            }
                        }, {
                            default: r(() => [ a(R) ? (t(), o(a(pe), {
                                key: 0
                            })) : (t(), o(a(ue), {
                                key: 1
                            })) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                })) : v("", !0), a(m) ? (t(), o(f, {
                    key: 1,
                    type: "primary",
                    plain: "",
                    onClick: xe,
                    size: "large"
                }, {
                    default: r(() => [ l(k, {
                        icon: "svg-icon:icon-export",
                        class: "icon-export mr-4px"
                    }), p(" 导出 ") ]),
                    _: 1
                })) : v("", !0) ]) ]), a(w).length ? (t(), x("div", U, [ l(Ne, {
                    class: "center-box pt-0",
                    "no-pager": !1,
                    "no-padding": !0,
                    "outer-height": 31
                }, {
                    default: r(() => [ d((t(), o(Le, {
                        ref_key: "tableRef",
                        ref: Q,
                        data: a(w),
                        onSelectionChange: we
                    }, {
                        default: r(() => [ a(m) ? (t(), o(y, {
                            key: 0,
                            type: "selection"
                        })) : v("", !0), l(y, {
                            type: "index",
                            label: "序号",
                            width: "52"
                        }), l(y, {
                            label: "问题",
                            prop: "fqaQuestion",
                            "show-overflow-tooltip": ""
                        }, {
                            default: r(i => [ a(m) ? (t(), x("span", {
                                key: 0,
                                class: "span-link",
                                onClick: B => re({
                                    row: i.row
                                })
                            }, Ge(i.row.fqaQuestion), 9, V)) : v("", !0) ]),
                            _: 1
                        }), l(y, {
                            label: "答案",
                            prop: "fqaAnswer",
                            "show-overflow-tooltip": ""
                        }, {
                            default: r(i => [ A("span", {
                                class: Xe([ "wangEditorLinewrapPreView line-clamp1", a(m) ? "answer-primary" : "answer-default" ]),
                                innerHTML: i.row.fqaAnswer
                            }, null, 10, j) ]),
                            _: 1
                        }), l(y, {
                            label: "所属课程目录",
                            prop: "dirName",
                            "show-overflow-tooltip": ""
                        }), l(y, {
                            label: "关联知识技能点",
                            prop: "ktName",
                            "show-overflow-tooltip": ""
                        }), l(y, {
                            label: "创建时间",
                            prop: "updateTimeStr",
                            "show-overflow-tooltip": "",
                            width: "180"
                        }), l(y, {
                            label: "操作",
                            width: "120",
                            fixed: "right"
                        }, {
                            default: r(i => [ a(m) ? (t(), x("div", G, [ d((t(), 
                            o(f, {
                                link: "",
                                type: "primary",
                                onClick: B => (async ({
                                    type: Te,
                                    title: Oe,
                                    row: _e
                                }) => {
                                    $.value = JSON.parse(JSON.stringify(_e)), C.value.handleOpen({
                                        type: Te,
                                        title: Oe,
                                        row: _e
                                    });
                                })({
                                    type: "edit",
                                    title: "编辑FAQ",
                                    row: i.row
                                })
                            }, {
                                default: r(() => [ p(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ h, [ "res:tenant-course-fqa:update" ] ] ]), d((t(), 
                            o(f, {
                                link: "",
                                type: "danger",
                                onClick: B => K({
                                    key: "operateDel",
                                    id: i.row.id,
                                    row: i.row
                                })
                            }, {
                                default: r(() => [ p(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ h, [ "res:tenant-course-fqa:delete" ] ] ]) ])) : v("", !0), a(m) ? v("", !0) : (t(), 
                            o(f, {
                                key: 1,
                                link: "",
                                type: `primary\r
                  `,
                                onClick: B => re({
                                    row: i.row
                                })
                            }, {
                                default: r(() => [ p(" 详情 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ Re, a(ve) ] ]) ]),
                    _: 1
                }), A("div", X, [ l(ze, {
                    limit: a(c).pageSize,
                    "onUpdate:limit": s[0] || (s[0] = i => a(c).pageSize = i),
                    page: a(c).pageNo,
                    "onUpdate:page": s[1] || (s[1] = i => a(c).pageNo = i),
                    total: a(Y),
                    onPagination: F
                }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (t(), o(ce, {
                    key: 1,
                    class: "noData"
                })) ])) : (t(), o(ce, {
                    key: 1
                }, {
                    btn: r(() => [ a(m) ? (t(), o(ie, {
                        key: 0,
                        trigger: "click",
                        onCommand: ae,
                        onVisibleChange: ee
                    }, {
                        dropdown: r(() => [ l(ne, null, {
                            default: r(() => [ d((t(), o(N, {
                                command: "batchImport"
                            }, {
                                default: r(() => [ p("批量导入") ]),
                                _: 1
                            })), [ [ h, [ "res:Tenant-class-fqa:import" ] ] ]), d((t(), 
                            o(N, {
                                command: "create"
                            }, {
                                default: r(() => [ p("手动新建") ]),
                                _: 1
                            })), [ [ h, [ "res:tenant-course-fqa:create" ] ] ]) ]),
                            _: 1
                        }) ]),
                        default: r(() => [ d((t(), o(f, {
                            type: "primary",
                            size: "large",
                            class: "btn-group"
                        }, {
                            default: r(() => [ p(" 新增FQA "), l(b, {
                                style: {
                                    "margin-left": "5px"
                                }
                            }, {
                                default: r(() => [ a(R) ? (t(), o(a(pe), {
                                    key: 0
                                })) : (t(), o(a(ue), {
                                    key: 1
                                })) ]),
                                _: 1
                            }) ]),
                            _: 1
                        })), [ [ h, [ "res:Tenant-class-fqa:import", "res:tenant-course-fqa:create" ] ] ]) ]),
                        _: 1
                    })) : v("", !0) ]),
                    _: 1
                })), l(Pe, {
                    ref: "SelectionButtonGroupRef",
                    selectList: a(I),
                    pageList: a(w),
                    btnInfoList: Ce,
                    onSelectAll: ke,
                    onHandleEvent: K
                }, null, 8, [ "selectList", "pageList" ]) ]), l(ma, {
                    ref_key: "addFQARef",
                    ref: C,
                    teachInfo: a($),
                    onSubmitFQA: Ae,
                    treeList: a(L)
                }, null, 8, [ "teachInfo", "treeList" ]), l(ga, {
                    ref_key: "importTeachRef",
                    ref: Z,
                    downloadInfo: a(Fe),
                    onRefreshList: le
                }, null, 8, [ "downloadInfo" ]), l(ya, {
                    ref_key: "viewFQARef",
                    ref: te,
                    info: a(T)
                }, null, 8, [ "info" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-8893d64b" ] ]);
});

export {
    Ga as __tla,
    de as default
};