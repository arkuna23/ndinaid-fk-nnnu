import {
    u as Je,
    T as Me,
    p as Ue,
    h as Ve,
    a0 as je,
    e as B,
    U as z,
    r as o,
    b9 as Ge,
    ej as Xe,
    f as $e,
    j as Ke,
    o as l,
    c as q,
    t as Q,
    a,
    k as t,
    C as n,
    l as r,
    A as x,
    v as _,
    dX as pe,
    c5 as de,
    D as g,
    B as We,
    z as Ye,
    F as Ze,
    _ as ea,
    aQ as aa,
    J as ta,
    ad as ra,
    ae as la,
    a9 as sa,
    __tla as oa
} from "./index-6c08ea4c.js";

import {
    _ as na,
    __tla as ia
} from "./index-e2094cc0.js";

import {
    _ as ca,
    __tla as ua
} from "./index-c834085f.js";

import {
    _ as _a,
    __tla as pa
} from "./index-c4ca0ced.js";

import {
    _ as da,
    __tla as fa
} from "./index-8b41572c.js";

import {
    _ as ma,
    __tla as ya
} from "./index-1024512a.js";

import ha, {
    __tla as wa
} from "./addFQA-b4cbd236.js";

import ga, {
    __tla as ka
} from "./viewFQA-8ef12967.js";

import {
    i as va,
    o as ba,
    p as Ia,
    r as qa,
    s as Qa,
    t as xa,
    v as Aa,
    w as La,
    x as Sa,
    __tla as Ca
} from "./importTeach-ad550a44.js";

import {
    d as Fa,
    __tla as Na
} from "./formatTime-de6f1520.js";

import {
    d as Pa
} from "./download-20922b56.js";

import {
    _ as za
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as Ta,
    b as Ra,
    E as Oa,
    __tla as Da
} from "./index-5adb716b.js";

import {
    __tla as Ha
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ba
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ea
} from "./index-ef4d146e.js";

import {
    __tla as Ja
} from "./Editor-ef737d2a.js";

import {
    __tla as Ma
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Ua
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Va
} from "./file-e038b35d.js";

import {
    __tla as ja
} from "./index-13c88727.js";

import {
    __tla as Ga
} from "./index-9567cbf6.js";

import {
    __tla as Xa
} from "./index-cfc63ccf.js";

import {
    __tla as $a
} from "./catalog-6352045f.js";

import {
    __tla as Ka
} from "./errorDialog-2a24db66.js";

import {
    __tla as Wa
} from "./fqa-b0babe7d.js";

let fe, Ya = Promise.all([ (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Na;
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
        return Ba;
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
})(), (() => {
    try {
        return Ga;
    } catch {}
})(), (() => {
    try {
        return Xa;
    } catch {}
})(), (() => {
    try {
        return $a;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})() ]).then(async () => {
    let E, J, M, U, V, j, G, X, $;
    E = {
        class: "teaching-schedule"
    }, J = {
        key: 0,
        class: "neu-has-data"
    }, M = {
        class: "top-box mb-10px"
    }, U = {
        class: "right btns-box header-btns"
    }, V = {
        key: 0,
        style: {
            flex: "1"
        }
    }, j = [ "onClick" ], G = [ "innerHTML" ], X = {
        key: 0
    }, $ = {
        class: "bottom-box"
    }, fe = za({
        __name: "FQA",
        props: {
            basicInformation: {
                type: Object,
                default: () => ({})
            }
        },
        setup(me) {
            Je();
            const y = Me(), A = Ue();
            Ve();
            const ye = me, {
                basicInformation: he
            } = je(ye), d = B(() => {
                var e;
                return (e = y == null ? void 0 : y.name) == null ? void 0 : e.includes("Manage");
            }), we = B(() => [ {
                label: "所属目录",
                key: "directoryIds",
                type: "tree",
                multiple: !0,
                options: F.value
            }, {
                label: "关联知识技能点",
                key: "ktId",
                type: "tree",
                options: F.value,
                width: "158px"
            } ]), u = z({
                pageNo: 1,
                pageSize: 10
            }), ge = o(!1);
            B(() => b.value.length > 0);
            const b = o([]), ke = e => {
                b.value = e, ge.value = e.length === h.value.length;
            }, L = o(null), ve = e => {
                var s;
                e !== !1 ? e.value ? L.value.clearSelection() : (s = h.value) == null || s.forEach(i => {
                    L.value.toggleAllSelection();
                }) : L.value.clearSelection();
            }, h = o([]), be = o(!1), k = o({}), S = o(null), K = () => {
                u.pageNo = 1, u.pageSize = 10;
            }, p = z({
                fqaQuestion: "",
                ktId: [],
                directoryIds: []
            }), Ie = e => {
                p.fqaQuestion = e.fqaQuestion, p.ktId = e.ktId || [], p.directoryIds = e.directoryIds || [], 
                K(), C();
            };
            o(!1);
            const W = o(0), C = async () => {
                const e = await ba({
                    pageNo: u.pageNo,
                    pageSize: u.pageSize,
                    neuPkgId: y.params.id,
                    ...p
                });
                return h.value = e == null ? void 0 : e.list, W.value = (e == null ? void 0 : e.total) || 0, 
                e;
            }, qe = async () => await La({
                id: I.value
            }), Qe = async () => await Sa(I.value), I = o([]), Y = ({
                key: e,
                id: s,
                row: i
            }) => {
                let w = "", v = null;
                w = "确认删除当前FQA？", I.value = [], (0, {
                    operateDel: async () => {
                        I.value = s, v = qe;
                    },
                    selectDel: async () => {
                        I.value = b.value.map(f => f.id), v = Qe;
                    }
                }[e])(), A.confirm("确认删除当前FQA？", "提示", {
                    confirmButtonText: "确 认",
                    cancelButtonText: "取 消"
                }).then(async () => {
                    await v({
                        key: e,
                        id: s,
                        row: i
                    }), b.value = [], A.success("删除成功"), C();
                });
            }, Z = o(null), xe = async () => {
                const e = await Ia({
                    pageNo: u.pageNo,
                    pageSize: u.pageSize,
                    neuPkgId: y.params.id,
                    ...p,
                    directoryIds: p.directoryIds.length ? p.directoryIds : "",
                    ktId: p.ktId.length ? p.ktId : ""
                });
                Pa.excel(e, `FQA-${he.value.pkgName}.xls`);
            };
            Ge("tableColumnList", [ {
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
            const T = o(null), Ae = async ({
                type: e,
                requestParams: s
            }) => {
                const i = {
                    create: () => {
                        T.value = Le;
                    },
                    editNeu: () => {
                        T.value = Se;
                    },
                    default: () => {}
                };
                (i[e] || i.default)(), await T.value({
                    requestParams: s
                }), S.value.handleClose(), le();
            }, Le = async ({
                requestParams: e
            }) => {
                const s = {
                    id: "",
                    fqaQuestion: e.fqaQuestion,
                    fqaAnswer: e.fqaAnswer,
                    directoryList: e.dirs,
                    ktIdList: e.kts,
                    resource: e.resource,
                    neuPkgId: y.params.id
                }, i = await xa(s);
                return A.success("新建成功"), i;
            }, F = o([]), R = o(!1), ee = e => {
                R.value = e;
            }, Se = async ({
                requestParams: e
            }) => {
                const s = {
                    id: k.value.id,
                    fqaQuestion: e.fqaQuestion,
                    fqaAnswer: e.fqaAnswer,
                    directoryList: e.dirs,
                    ktIdList: e.kts,
                    neuPkgId: k.value.neuPkgId
                }, i = await Aa(s);
                return A.success("编辑成功"), i;
            }, Ce = [ {
                key: "selectDel",
                label: "删除",
                color: "#E14635",
                icon: "svg-icon:delete"
            } ], ae = e => {
                let s = "", i = "";
                const w = {
                    create: () => {
                        s = "create", i = "新建FQA", S.value.handleOpen({
                            type: s,
                            title: i
                        });
                    },
                    batchImport: () => {
                        Z.value.handleOpen({
                            tip: "说明：请按模板要求导入FAQ，导入后可编辑修改",
                            source: "neuFQA",
                            instruction: "请基于系统模板补充信息，单次最多导入200行"
                        });
                    },
                    default: () => {}
                };
                (w[e] || w.default)();
            }, te = o(null), O = z({
                question: "",
                answer: ""
            }), re = ({
                row: e
            }) => {
                te.value.handleOpen({
                    id: e.id
                }), O.question = e.fqaQuestion, O.answer = e.fqaAnswer;
            }, Fe = z({
                source: "neuFQA",
                name: "FAQ导入模板"
            }), D = o(null), le = () => {
                D.value ? D.value.resetParams() : oe();
            }, se = o(!1), oe = async () => {
                const e = await C();
                se.value = (e == null ? void 0 : e.total) > 0;
            }, Ne = async e => await Qa({
                id: e.id
            });
            return Xe(async () => {
                (async () => {
                    const e = await qa({
                        neuPkgId: y.params.id
                    });
                    F.value = e || [];
                })();
            }), $e(() => {
                oe();
            }), (e, s) => {
                const i = ma, w = ea, v = aa, f = ta, N = Ta, ne = Ra, ie = Oa, m = ra, Pe = la, ze = da, Te = _a, ce = ca, Re = na, P = Ke("hasPermi"), Oe = sa;
                return l(), q(Ze, null, [ Q("div", E, [ a(se) || a(h).length ? (l(), 
                q("div", J, [ Q("div", M, [ t(i, {
                    ref_key: "comSearchRef",
                    ref: D,
                    searchList: a(we),
                    onHandleSearch: Ie,
                    onHandleReset: K,
                    class: "left",
                    keywordsInfo: {
                        key: "fqaQuestion",
                        label: "问题/答案关键字"
                    }
                }, null, 8, [ "searchList" ]), Q("div", U, [ a(d) ? (l(), n(ie, {
                    key: 0,
                    trigger: "click",
                    onCommand: ae,
                    onVisibleChange: ee
                }, {
                    dropdown: r(() => [ t(ne, null, {
                        default: r(() => [ x((l(), n(N, {
                            command: "batchImport"
                        }, {
                            default: r(() => [ _("批量导入") ]),
                            _: 1
                        })), [ [ P, [ "res:Tenant-class-fqa:import" ] ] ]), t(N, {
                            command: "create"
                        }, {
                            default: r(() => [ _("手动新建") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    default: r(() => [ t(f, {
                        type: "primary",
                        size: "large",
                        class: "btn-group mr-10px"
                    }, {
                        default: r(() => [ x(t(w, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }, null, 512), [ [ P, [ "res:Tenant-class-fqa:import", "res:tenant-course-fqa:create" ] ] ]), _(" 新建 "), t(v, {
                            style: {
                                "margin-left": "5px"
                            }
                        }, {
                            default: r(() => [ a(R) ? (l(), n(a(pe), {
                                key: 0
                            })) : (l(), n(a(de), {
                                key: 1
                            })) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                })) : g("", !0), a(d) ? (l(), n(f, {
                    key: 1,
                    type: "primary",
                    plain: "",
                    onClick: xe,
                    size: "large"
                }, {
                    default: r(() => [ t(w, {
                        icon: "svg-icon:icon-export",
                        class: "icon-export mr-4px"
                    }), _(" 导出 ") ]),
                    _: 1
                })) : g("", !0) ]) ]), a(h).length ? (l(), q("div", V, [ t(ze, {
                    class: "center-box pt-0",
                    "no-pager": !1,
                    "no-padding": !0,
                    "outer-height": 4
                }, {
                    default: r(() => [ x((l(), n(Pe, {
                        ref_key: "tableRef",
                        ref: L,
                        data: a(h),
                        onSelectionChange: ke
                    }, {
                        default: r(() => [ a(d) ? (l(), n(m, {
                            key: 0,
                            type: "selection"
                        })) : g("", !0), t(m, {
                            type: "index",
                            label: "序号",
                            width: "52"
                        }), t(m, {
                            label: "问题",
                            prop: "fqaQuestion",
                            "show-overflow-tooltip": ""
                        }, {
                            default: r(c => [ a(d) ? (l(), q("span", {
                                key: 0,
                                class: "span-link",
                                onClick: H => re({
                                    row: c.row
                                })
                            }, We(c.row.fqaQuestion), 9, j)) : g("", !0) ]),
                            _: 1
                        }), t(m, {
                            label: "答案",
                            prop: "fqaAnswer",
                            "show-overflow-tooltip": ""
                        }, {
                            default: r(c => [ Q("span", {
                                class: Ye([ "wangEditorLinewrapPreView line-clamp1", a(d) ? "answer-primary" : "answer-default" ]),
                                innerHTML: c.row.fqaAnswer
                            }, null, 10, G) ]),
                            _: 1
                        }), t(m, {
                            label: "所属课程目录",
                            prop: "dirNameList",
                            "show-overflow-tooltip": ""
                        }), t(m, {
                            label: "关联知识技能点",
                            prop: "ktName",
                            "show-overflow-tooltip": ""
                        }), t(m, {
                            label: "创建时间",
                            prop: "createTime",
                            "show-overflow-tooltip": "",
                            width: "180",
                            formatter: a(Fa)
                        }, null, 8, [ "formatter" ]), t(m, {
                            label: "操作",
                            width: "120",
                            fixed: "right"
                        }, {
                            default: r(c => [ a(d) ? (l(), q("div", X, [ t(f, {
                                link: "",
                                type: "primary",
                                onClick: H => (async ({
                                    type: De,
                                    title: He,
                                    row: Be
                                }) => {
                                    var ue, _e;
                                    k.value = JSON.parse(JSON.stringify(await Ne(Be))), 
                                    k.value.dirs = (_e = (ue = k.value) == null ? void 0 : ue.dirList) == null ? void 0 : _e.map(Ee => Ee.id), 
                                    S.value.handleOpen({
                                        type: De,
                                        title: He,
                                        row: k.value
                                    });
                                })({
                                    type: "editNeu",
                                    title: "编辑FQA",
                                    row: c.row
                                })
                            }, {
                                default: r(() => [ _(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]), t(f, {
                                link: "",
                                type: "danger",
                                onClick: H => Y({
                                    key: "operateDel",
                                    id: c.row.id,
                                    row: c.row
                                })
                            }, {
                                default: r(() => [ _(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ])) : g("", !0), a(d) ? g("", !0) : (l(), 
                            n(f, {
                                key: 1,
                                link: "",
                                type: `primary\r
                  `,
                                onClick: H => re({
                                    row: c.row
                                })
                            }, {
                                default: r(() => [ _(" 详情 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ Oe, a(be) ] ]) ]),
                    _: 1
                }), Q("div", $, [ t(Te, {
                    limit: a(u).pageSize,
                    "onUpdate:limit": s[0] || (s[0] = c => a(u).pageSize = c),
                    page: a(u).pageNo,
                    "onUpdate:page": s[1] || (s[1] = c => a(u).pageNo = c),
                    total: a(W),
                    onPagination: C
                }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (l(), n(ce, {
                    key: 1,
                    class: "noData"
                })), t(Re, {
                    ref: "SelectionButtonGroupRef",
                    selectList: a(b),
                    pageList: a(h),
                    btnInfoList: Ce,
                    onSelectAll: ve,
                    onHandleEvent: Y
                }, null, 8, [ "selectList", "pageList" ]) ])) : (l(), n(ce, {
                    key: 1
                }, {
                    btn: r(() => [ a(d) ? (l(), n(ie, {
                        key: 0,
                        trigger: "click",
                        onCommand: ae,
                        onVisibleChange: ee
                    }, {
                        dropdown: r(() => [ t(ne, null, {
                            default: r(() => [ x((l(), n(N, {
                                command: "batchImport"
                            }, {
                                default: r(() => [ _("批量导入") ]),
                                _: 1
                            })), [ [ P, [ "res:Tenant-class-fqa:import" ] ] ]), x((l(), 
                            n(N, {
                                command: "create"
                            }, {
                                default: r(() => [ _("手动新建") ]),
                                _: 1
                            })), [ [ P, [ "res:tenant-course-fqa:create" ] ] ]) ]),
                            _: 1
                        }) ]),
                        default: r(() => [ t(f, {
                            type: "primary",
                            size: "large",
                            class: "btn-group"
                        }, {
                            default: r(() => [ _(" 新增FQA "), t(v, {
                                style: {
                                    "margin-left": "5px"
                                }
                            }, {
                                default: r(() => [ a(R) ? (l(), n(a(pe), {
                                    key: 0
                                })) : (l(), n(a(de), {
                                    key: 1
                                })) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    })) : g("", !0) ]),
                    _: 1
                })) ]), t(ha, {
                    ref_key: "addFQARef",
                    ref: S,
                    onSubmitFQA: Ae,
                    treeList: a(F)
                }, null, 8, [ "treeList" ]), t(va, {
                    ref_key: "importTeachRef",
                    ref: Z,
                    downloadInfo: a(Fe),
                    onRefreshList: le
                }, null, 8, [ "downloadInfo" ]), t(ga, {
                    ref_key: "viewFQARef",
                    ref: te,
                    info: a(O)
                }, null, 8, [ "info" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-d8077175" ] ]);
});

export {
    Ya as __tla,
    fe as default
};