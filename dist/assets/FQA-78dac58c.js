import {
    u as Ne,
    T as ze,
    p as Fe,
    h as Oe,
    a0 as Be,
    e as oe,
    U as R,
    r as l,
    b9 as De,
    ej as Pe,
    f as Te,
    j as Ee,
    o,
    c as T,
    t as x,
    a as t,
    k as a,
    l as r,
    A as p,
    C as n,
    v as u,
    dX as se,
    c5 as ne,
    B as Je,
    F as je,
    _ as He,
    aQ as Ue,
    J as Ve,
    ad as Ge,
    ak as Xe,
    ae as $e,
    a9 as Ke,
    __tla as Me
} from "./index-6c08ea4c.js";

import {
    _ as We,
    __tla as Ye
} from "./index-e2094cc0.js";

import {
    _ as Ze,
    __tla as ea
} from "./index-c834085f.js";

import {
    _ as aa,
    __tla as ta
} from "./index-c4ca0ced.js";

import {
    _ as ra,
    __tla as la
} from "./index-8b41572c.js";

import {
    _ as oa,
    __tla as sa
} from "./index-1024512a.js";

import {
    __tla as na
} from "./dict-c5825220.js";

import ca, {
    __tla as ia
} from "./addFQA-91c93a8c.js";

import pa, {
    __tla as _a
} from "./viewFQA-8ef12967.js";

import {
    i as ua,
    __tla as ma
} from "./importTeach-ad550a44.js";

import {
    g as da,
    b as fa,
    u as ha,
    d as ya,
    __tla as ga
} from "./fqa-b0babe7d.js";

import {
    d as va
} from "./download-20922b56.js";

import {
    a as wa,
    __tla as ba
} from "./index-9567cbf6.js";

import {
    _ as ka
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as xa,
    b as Ia,
    E as qa,
    __tla as Ca
} from "./index-5adb716b.js";

import {
    __tla as Aa
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Sa
} from "./DeptTag-1be092ce.js";

import {
    __tla as Qa
} from "./index-ef4d146e.js";

import {
    __tla as Ra
} from "./Editor-ef737d2a.js";

import {
    __tla as La
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Na
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as za
} from "./file-e038b35d.js";

import {
    __tla as Fa
} from "./index-13c88727.js";

import {
    __tla as Oa
} from "./index-cfc63ccf.js";

import {
    __tla as Ba
} from "./catalog-6352045f.js";

import {
    __tla as Da
} from "./errorDialog-2a24db66.js";

import {
    __tla as Pa
} from "./formatTime-de6f1520.js";

let ce, Ta = Promise.all([ (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return na;
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
        return ma;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Qa;
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
        return Na;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Fa;
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
        return Pa;
    } catch {}
})() ]).then(async () => {
    let E, J, j, H, U, V, G;
    E = {
        class: "teaching-schedule"
    }, J = {
        key: 0,
        style: {
            flex: "1",
            display: "flex",
            "flex-direction": "column"
        }
    }, j = {
        class: "top-box mb-10px"
    }, H = {
        class: "right btns-box header-btns"
    }, U = {
        key: 0,
        style: {
            flex: "1"
        }
    }, V = [ "onClick" ], G = {
        class: "bottom-box"
    }, ce = ka({
        __name: "FQA",
        props: {
            basicInformation: {
                type: Object,
                default: () => ({})
            }
        },
        setup(ie) {
            Ne();
            const L = ze(), N = Fe();
            Oe();
            const pe = ie, {
                basicInformation: _e
            } = Be(pe), ue = oe(() => [ {
                label: "所属目录",
                key: "dirIds",
                type: "tree",
                multiple: !0,
                options: C.value
            }, {
                label: "关联知识技能点",
                key: "ktIds",
                type: "tree",
                options: C.value,
                width: "158px"
            } ]), i = R({
                pageNo: 1,
                pageSize: 10
            }), me = l(!1);
            oe(() => w.value.length > 0);
            const w = l([]), de = e => {
                w.value = e, me.value = e.length === d.value.length;
            }, I = l(null), fe = e => {
                var s;
                e !== !1 ? e.value ? I.value.clearSelection() : (s = d.value) == null || s.forEach(h => {
                    I.value.toggleAllSelection();
                }) : I.value.clearSelection();
            }, d = l([]), he = l(!1), X = l({}), z = l(null), F = () => {
                i.pageNo = 1, i.pageSize = 10;
            }, b = R({
                searchReq: "",
                ktIds: [],
                dirIds: []
            }), ye = e => {
                b.searchReq = e.searchReq, b.ktIds = e.ktIds, b.dirIds = e.dirIds, 
                F(), f();
            };
            l(!1);
            const $ = l(0), f = async () => {
                const e = await da({
                    pageNo: i.pageNo,
                    pageSize: i.pageSize,
                    teachCourseId: L.params.teachCourseId,
                    ...b
                });
                return d.value = e == null ? void 0 : e.list, $.value = (e == null ? void 0 : e.total) || 0, 
                e;
            }, ge = async () => await ya({
                fqaIds: q.value
            }), q = l([]), K = ({
                key: e,
                id: s,
                row: h
            }) => {
                let y = "", k = null;
                y = "如教学安排已发布，删除后所有已产生的教学及学习数据将全部清空，确定删除？", k = ge, q.value = [], 
                (0, {
                    operateDel: async () => {
                        q.value = [ s ];
                    },
                    selectDel: async () => {
                        q.value = w.value.map(g => g.id);
                    }
                }[e])(), N.confirm("如教学安排已发布，删除后所有已产生的教学及学习数据将全部清空，确定删除？", "提示", {
                    confirmButtonText: "确 认",
                    cancelButtonText: "取 消"
                }).then(async () => {
                    await k({
                        key: e,
                        id: s,
                        row: h
                    }), w.value = [], N.success("操作成功"), f();
                });
            }, M = l(null), ve = async () => {
                const e = await fa({
                    pageNo: i.pageNo,
                    pageSize: i.pageSize,
                    teachCourseId: L.params.teachCourseId,
                    ...b
                });
                va.excel(e, `FAQ-${_e.value.teachCourseName}.xls`);
            };
            De("tableColumnList", [ {
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
            } ]), l(null);
            const C = l([]), O = l(!1), W = e => {
                O.value = e;
            }, we = async ({
                id: e,
                isOpen: s
            }) => await ha({
                id: e,
                isOpen: s
            }), be = [ {
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
            } ], Y = e => {
                let s = "", h = "";
                const y = {
                    manualAdd: () => {
                        s = "create", h = "新建FAQ", z.value.handleOpen({
                            type: s,
                            title: h
                        });
                    },
                    batchImport: () => {
                        M.value.handleOpen({
                            tip: "说明：请按模板要求导入FAQ，导入后可编辑修改",
                            source: "FQA",
                            instruction: "请基于系统模板补充信息，单次最多导入200行"
                        });
                    },
                    default: () => {}
                };
                (y[e] || y.default)();
            }, Z = l(null), B = R({
                question: "",
                answer: ""
            }), ke = () => {
                F(), f();
            }, xe = R({
                source: "FQA",
                name: "FAQ导入模板"
            }), D = l(null), Ie = () => {
                D.value ? D.value.resetParams() : ae();
            }, ee = l(!1), ae = async () => {
                const e = await f();
                ee.value = (e == null ? void 0 : e.total) > 0;
            }, qe = l(!0);
            return Pe(async () => {
                (async () => wa({
                    teachCourseId: L.params.teachCourseId
                }).then(e => {
                    C.value = e || [];
                }))();
            }), Te(() => {
                qe.value = !1, ae();
            }), (e, s) => {
                const h = oa, y = He, k = Ue, g = Ve, A = xa, te = Ia, re = qa, m = Ge, Ce = Xe, Ae = $e, Se = ra, Qe = aa, le = Ze, Re = We, _ = Ee("hasPermi"), Le = Ke;
                return o(), T(je, null, [ x("div", E, [ t(ee) || t(d).length ? (o(), 
                T("div", J, [ x("div", j, [ a(h, {
                    ref_key: "comSearchRef",
                    ref: D,
                    borderBox: !0,
                    searchList: t(ue),
                    onHandleSearch: ye,
                    onHandleReset: F,
                    class: "left",
                    keywordsInfo: {
                        key: "searchReq",
                        label: "问题/答案关键字"
                    }
                }, null, 8, [ "searchList" ]), x("div", H, [ a(re, {
                    trigger: "click",
                    onCommand: Y,
                    onVisibleChange: W
                }, {
                    dropdown: r(() => [ a(te, null, {
                        default: r(() => [ p((o(), n(A, {
                            command: "batchImport"
                        }, {
                            default: r(() => [ u("批量导入") ]),
                            _: 1
                        })), [ [ _, [ "teachmanager:teach-class-fqa:import" ] ] ]), p((o(), 
                        n(A, {
                            command: "manualAdd"
                        }, {
                            default: r(() => [ u("手动新建") ]),
                            _: 1
                        })), [ [ _, [ "teachmanager:teach-course-fqa:create" ] ] ]) ]),
                        _: 1
                    }) ]),
                    default: r(() => [ a(g, {
                        type: "primary",
                        size: "large",
                        class: "btn-group mr-10px"
                    }, {
                        default: r(() => [ p(a(y, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }, null, 512), [ [ _, [ "teachmanager:teach-class-fqa:import", "teachmanager:teach-course-fqa:create" ] ] ]), u(" 新建 "), a(k, {
                            style: {
                                "margin-left": "5px"
                            }
                        }, {
                            default: r(() => [ t(O) ? (o(), n(t(se), {
                                key: 0
                            })) : (o(), n(t(ne), {
                                key: 1
                            })) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }), p((o(), n(g, {
                    type: "primary",
                    plain: "",
                    size: "large",
                    onClick: ve
                }, {
                    default: r(() => [ a(y, {
                        icon: "svg-icon:icon-export",
                        class: "icon-export mr-4px"
                    }), u(" 导出 ") ]),
                    _: 1
                })), [ [ _, [ "teachmanager:teach-course-fqa:export" ] ] ]) ]) ]), t(d).length ? (o(), 
                T("div", U, [ a(Se, {
                    class: "center-box pt-0",
                    "no-pager": !1,
                    "no-padding": !0,
                    "outer-height": -8
                }, {
                    default: r(() => [ p((o(), n(Ae, {
                        ref_key: "tableRef",
                        ref: I,
                        data: t(d),
                        onSelectionChange: de
                    }, {
                        default: r(() => [ a(m, {
                            type: "selection"
                        }), a(m, {
                            type: "index",
                            label: "序号",
                            width: "52"
                        }), a(m, {
                            label: "问题",
                            prop: "fqaQuestion",
                            "show-overflow-tooltip": ""
                        }, {
                            default: r(c => [ x("span", {
                                class: "span-link",
                                onClick: P => (({
                                    row: v
                                }) => {
                                    Z.value.handleOpen({
                                        id: v.id
                                    }), B.question = v.fqaQuestion, B.answer = v.fqaAnswer;
                                })({
                                    row: c.row
                                })
                            }, Je(c.row.fqaQuestion), 9, V) ]),
                            _: 1
                        }), a(m, {
                            label: "所属课程目录",
                            prop: "dirName",
                            "show-overflow-tooltip": ""
                        }), a(m, {
                            label: "关联知识技能点",
                            prop: "ktName",
                            "show-overflow-tooltip": ""
                        }), a(m, {
                            label: "开放状态"
                        }, {
                            default: r(c => [ a(Ce, {
                                size: "small",
                                "model-value": c.row.isOpen,
                                "active-value": 1,
                                "inactive-value": 0,
                                "active-color": "#13ce66",
                                onChange: P => (async ({
                                    type: v,
                                    row: S
                                }) => {
                                    const Q = {
                                        id: S.id,
                                        isOpen: S.isOpen === 0 ? 1 : 0
                                    };
                                    await we({
                                        ...Q
                                    }), N.success("操作成功"), f();
                                })({
                                    type: "changeIsCurrent",
                                    row: c.row
                                })
                            }, null, 8, [ "model-value", "onChange" ]) ]),
                            _: 1
                        }), a(m, {
                            label: "最近修改时间",
                            prop: "updateTimeStr",
                            "show-overflow-tooltip": "",
                            width: "180"
                        }), a(m, {
                            label: "操作",
                            width: "120",
                            fixed: "right"
                        }, {
                            default: r(c => [ p((o(), n(g, {
                                link: "",
                                type: "primary",
                                onClick: P => (async ({
                                    type: v,
                                    title: S,
                                    row: Q
                                }) => {
                                    X.value = JSON.parse(JSON.stringify(Q)), z.value.handleOpen({
                                        type: v,
                                        title: S,
                                        row: Q
                                    });
                                })({
                                    type: "edit",
                                    title: "编辑FAQ",
                                    row: c.row
                                })
                            }, {
                                default: r(() => [ u(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ _, [ "teachmanager:teach-course-fqa:update" ] ] ]), p((o(), 
                            n(g, {
                                link: "",
                                type: "danger",
                                onClick: P => K({
                                    key: "operateDel",
                                    id: c.row.id,
                                    row: c.row
                                })
                            }, {
                                default: r(() => [ u(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ _, [ "teachmanager:teach-course-fqa:delete" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ Le, t(he) ] ]) ]),
                    _: 1
                }), x("div", G, [ a(Qe, {
                    limit: t(i).pageSize,
                    "onUpdate:limit": s[0] || (s[0] = c => t(i).pageSize = c),
                    page: t(i).pageNo,
                    "onUpdate:page": s[1] || (s[1] = c => t(i).pageNo = c),
                    total: t($),
                    onPagination: f
                }, null, 8, [ "limit", "page", "total" ]) ]) ])) : (o(), n(le, {
                    key: 1,
                    class: "noData"
                })) ])) : (o(), n(le, {
                    key: 1
                }, {
                    btn: r(() => [ a(re, {
                        trigger: "click",
                        onCommand: Y,
                        onVisibleChange: W
                    }, {
                        dropdown: r(() => [ a(te, null, {
                            default: r(() => [ p((o(), n(A, {
                                command: "batchImport"
                            }, {
                                default: r(() => [ u("批量导入") ]),
                                _: 1
                            })), [ [ _, [ "teachmanager:teach-class-fqa:import" ] ] ]), p((o(), 
                            n(A, {
                                command: "manualAdd"
                            }, {
                                default: r(() => [ u("手动新建") ]),
                                _: 1
                            })), [ [ _, [ "teachmanager:teach-course-fqa:create" ] ] ]) ]),
                            _: 1
                        }) ]),
                        default: r(() => [ p((o(), n(g, {
                            type: "primary",
                            size: "large",
                            class: "btn-group"
                        }, {
                            default: r(() => [ u(" 新增FAQ "), a(k, {
                                style: {
                                    "margin-left": "5px"
                                }
                            }, {
                                default: r(() => [ t(O) ? (o(), n(t(se), {
                                    key: 0
                                })) : (o(), n(t(ne), {
                                    key: 1
                                })) ]),
                                _: 1
                            }) ]),
                            _: 1
                        })), [ [ _, [ "teachmanager:teach-class-fqa:import", "teachmanager:teach-course-fqa:create" ] ] ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                })), a(Re, {
                    ref: "SelectionButtonGroupRef",
                    selectList: t(w),
                    pageList: t(d),
                    btnInfoList: be,
                    onSelectAll: fe,
                    onHandleEvent: K
                }, null, 8, [ "selectList", "pageList" ]) ]), a(ca, {
                    ref_key: "addFQARef",
                    ref: z,
                    teachInfo: t(X),
                    onRefreshList: ke,
                    treeList: t(C)
                }, null, 8, [ "teachInfo", "treeList" ]), a(ua, {
                    ref_key: "importTeachRef",
                    ref: M,
                    downloadInfo: t(xe),
                    onRefreshList: Ie
                }, null, 8, [ "downloadInfo" ]), a(pa, {
                    ref_key: "viewFQARef",
                    ref: Z,
                    info: t(B),
                    onRefreshList: f
                }, null, 8, [ "info" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-4e897a9c" ] ]);
});

export {
    Ta as __tla,
    ce as default
};