import {
    h as Ne,
    u as ze,
    p as Ie,
    e as A,
    U as B,
    r as i,
    b9 as Oe,
    ej as De,
    f as Re,
    j as Je,
    o as h,
    c as Pe,
    k as t,
    l as p,
    t as E,
    a as n,
    A as b,
    C as g,
    v as w,
    B as je,
    D as te,
    F as Ae,
    _ as Be,
    J as Ee,
    ad as Te,
    L as He,
    ak as Ue,
    ae as Ve,
    a9 as $e,
    __tla as qe
} from "./index-6c08ea4c.js";

import {
    _ as Fe,
    __tla as Ge
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Qe,
    __tla as We
} from "./index-e2094cc0.js";

import {
    _ as Ke,
    __tla as Me
} from "./index-c4ca0ced.js";

import {
    _ as Xe,
    __tla as Ye
} from "./index-8b41572c.js";

import {
    _ as Ze,
    __tla as ea
} from "./index-1024512a.js";

import {
    __tla as aa
} from "./dict-c5825220.js";

import ta, {
    __tla as la
} from "./courseCategory-891018d3.js";

import ra, {
    __tla as oa
} from "./addCourse-e12b1b69.js";

import {
    i as sa,
    __tla as na
} from "./importTeach-ad550a44.js";

import {
    ac as ia,
    ad as ca,
    ae as pa,
    z as ua,
    af as _a,
    ag as ma,
    ah as da,
    __tla as ha
} from "./index-9567cbf6.js";

import {
    d as fa,
    __tla as ya
} from "./formatTime-de6f1520.js";

import {
    t as ba
} from "./formatter-7ecf379a.js";

import {
    h as ga
} from "./tree-05ea8e09.js";

import {
    _ as wa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as va
} from "./index-993301ca.js";

import {
    __tla as Sa
} from "./DeptTag-1be092ce.js";

import {
    __tla as ka
} from "./index-ef4d146e.js";

import {
    __tla as xa
} from "./index-13c88727.js";

import {
    __tla as La
} from "./el-image-0d184777.js";

import {
    __tla as Ca
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as Na
} from "./throttle-1adeb119.js";

import {
    __tla as za
} from "./file-e038b35d.js";

import "./validate-b72f006c.js";

import {
    __tla as Ia
} from "./index-cfc63ccf.js";

import {
    __tla as Oa
} from "./catalog-6352045f.js";

import {
    __tla as Da
} from "./errorDialog-2a24db66.js";

import {
    __tla as Ra
} from "./fqa-b0babe7d.js";

let le, Ja = Promise.all([ (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
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
        return aa;
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
        return na;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return La;
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
        return za;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})() ]).then(async () => {
    let T, H, U;
    T = {
        class: "top-box"
    }, H = {
        class: "right btns-box header-btns pt-1"
    }, U = {
        class: "bottom-box"
    }, le = wa({
        __name: "courseInfo",
        setup(Pa) {
            Ne(), ze();
            const f = Ie(), re = A(() => [ {
                label: "课程类别",
                key: "type",
                type: "list",
                options: R.value
            }, {
                label: "开课单位名称/代码",
                key: "courseDepts",
                type: "tree",
                options: J.value,
                width: "180px",
                filterable: !0,
                multiple: !0
            }, {
                label: "发布状态",
                key: "releaseStatus",
                type: "list",
                options: [ {
                    value: 0,
                    label: "未发布"
                }, {
                    value: 1,
                    label: "已发布"
                } ]
            }, {
                label: "启用状态",
                key: "enableStatus",
                type: "list",
                options: [ {
                    value: 0,
                    label: "启用"
                }, {
                    value: 1,
                    label: "停用"
                } ]
            } ]), oe = {
                children: "children",
                label: (e, a) => {
                    let l = "";
                    return l = e.code !== null && e.code !== "" ? `${e.name}(${e.code})` : e.name, 
                    l;
                },
                value: "id",
                isLeaf: "leaf",
                emitPath: !1,
                class: "tree-node-custom"
            }, d = B({
                pageNo: 1,
                pageSize: 10
            }), V = i(0), se = i(!1);
            A(() => u.value.length > 0);
            const u = i([]), x = i([]), N = i({
                0: [],
                1: []
            }), z = i({
                0: [],
                1: []
            }), ne = e => {
                u.value = e, N.value = q({
                    rawList: u.value,
                    groupAttr: "releaseStatus"
                }), x.value = u.value.filter(a => a.releaseStatus === "1"), z.value = q({
                    rawList: u.value,
                    groupAttr: "enableStatus"
                }), se.value = e.length === L.value.length;
            }, ie = A(() => {
                var e, a, l, r;
                return [ {
                    key: "batchPublish",
                    label: "发布",
                    type: "primary",
                    icon: "ep:promotion",
                    permi: "teachmanager:base-course:update",
                    disabled: ((e = N.value[0]) == null ? void 0 : e.length) !== u.value.length
                }, {
                    key: "batchEnableStatus",
                    label: "停用",
                    type: "primary",
                    icon: "ep:promotion",
                    permi: "teachmanager:base-course:update",
                    disabled: ((a = z.value[0]) == null ? void 0 : a.length) !== x.value.length
                }, {
                    key: "batchEnableStatus",
                    label: "启用",
                    type: "primary",
                    icon: "ep:promotion",
                    permi: "teachmanager:base-course:update",
                    disabled: ((l = z.value[1]) == null ? void 0 : l.length) !== x.value.length
                }, {
                    key: "batchDel",
                    label: "删除",
                    color: "#E14635",
                    icon: "svg-icon:delete",
                    permi: "teachmanager:base-course:delete",
                    disabled: ((r = N.value[0]) == null ? void 0 : r.length) !== u.value.length
                } ];
            }), ce = ({
                key: e
            }) => {
                const a = JSON.parse(JSON.stringify(u.value)), l = JSON.parse(JSON.stringify(x.value));
                let r = [], c = [];
                const o = {
                    batchPublish: async () => {
                        r = a.map(m => (m.releaseStatus = "1", m.enableStatus = "0", 
                        m)), await $({
                            arr: r
                        }), f.success("发布成功"), _();
                    },
                    batchEnableStatus: async () => {
                        let m = l.map(S => (S.enableStatus = S.enableStatus === "0" ? "1" : "0", 
                        S));
                        await $({
                            arr: m
                        }), f.success("操作成功"), _();
                    },
                    batchDel: () => {
                        c = a.map(m => m.id), f.confirm("确定删除选择的课程信息？", "提示", {
                            confirmButtonText: "确 认",
                            cancelButtonText: "取 消"
                        }).then(async () => {
                            await pe({
                                ids: c
                            }), _();
                        });
                    },
                    default: () => {}
                };
                (o[e] || o.default)();
            }, $ = async ({
                arr: e
            }) => {
                await _a(e);
            }, pe = async ({
                ids: e
            }) => {
                await ma({
                    ids: e.join()
                }), f.success("删除成功");
            }, q = ({
                rawList: e,
                groupAttr: a
            }) => e.reduce((l, r) => {
                const c = r[a];
                return l[c] || (l[c] = []), l[c].push(r), l;
            }, {}), I = i(null), ue = e => {
                e !== !1 ? I.value.toggleAllSelection() : I.value.clearSelection();
            }, L = i([]), _e = i(!1), O = i({}), F = i(null), G = ({
                type: e,
                title: a,
                row: l
            }) => {
                const r = {
                    create: () => {},
                    edit: () => {
                        O.value = JSON.parse(JSON.stringify(l));
                    },
                    default: () => {}
                };
                (r[e] || r.default)(), F.value.handleOpen({
                    type: e,
                    title: a
                });
            }, Q = i(null), W = () => {
                var e;
                (e = Q.value) == null || e.resetParams();
            }, K = () => {
                d.pageNo = 1, d.pageSize = 10;
            }, D = B({
                keywords: "",
                type: "",
                enableStatus: "",
                releaseStatus: "",
                courseDepts: []
            }), _ = async () => {
                const e = await ia({
                    pageNo: d.pageNo,
                    pageSize: d.pageSize,
                    ...D
                });
                L.value = (e == null ? void 0 : e.list) || [], V.value = (e == null ? void 0 : e.total) || 0;
            }, me = async e => {
                await da({
                    ...e
                }), f.success("操作成功");
            }, M = i(null), de = () => {
                M.value.handleOpen();
            }, X = i(null), he = () => {
                X.value.handleOpen({
                    tip: "课程主要用于每学期教学安排创建及专业人才培养方案制定，创建成功并发布后（且状态为启用）可以使用",
                    source: "courseInfo",
                    instruction: "请基于系统模板补充信息，单次最多导入数据2000行"
                });
            };
            Oe("tableColumnList", [ {
                prop: "name",
                label: "课程名称",
                width: "80px"
            }, {
                prop: "code",
                label: "课程代码",
                width: "80px"
            }, {
                prop: "type",
                label: "课程类别",
                width: "80px"
            }, {
                prop: "teachingObject",
                label: "课程方向",
                width: "80px"
            }, {
                prop: "teachingObject",
                label: "授课对象",
                width: "80px"
            }, {
                prop: "courseDeptName",
                label: "开课单位名称",
                width: "120px"
            }, {
                prop: "courseDeptCode",
                label: "开课单位代码",
                width: "120px"
            }, {
                prop: "credit",
                label: "学分",
                width: "80px"
            }, {
                prop: "classHours",
                label: "学时",
                width: "80px"
            }, {
                prop: "introduction",
                label: "课程简介",
                width: "80px"
            } ]);
            const fe = e => {
                Object.keys(D).forEach(a => D[a] = e[a]), _();
            }, R = i([]), Y = async () => {
                const e = (await ca({
                    keywords: ""
                })).map(a => (a.value = a.id, a.label = a.name, a));
                return R.value = e, e;
            }, J = i([]), Z = ({
                type: e,
                row: a
            }) => {
                let l = {}, r = "";
                (0, {
                    changeStatus: () => {
                        r = "操作成功", l = {
                            id: a.id,
                            enableStatus: a.enableStatus
                        };
                    },
                    publish: () => {
                        r = "发布成功", l = {
                            id: a.id,
                            releaseStatus: "1",
                            enableStatus: "0"
                        };
                    }
                }[e])(), ee(l, r);
            }, ee = async (e, a) => {
                await ua({
                    ...e
                }), f.success(a), _();
            }, ye = B({
                source: "courseInfo",
                name: "课程信息导入模板"
            });
            De(async () => {
                await Y(), J.value = ga(await (async () => await pa())());
            });
            const be = async () => {
                K(), _(), Y();
            }, ge = e => {
                const a = {
                    0: "未发布",
                    1: "已发布",
                    default: ""
                };
                return a[e] || a.default;
            }, y = (e, a) => ba(e[a.property]);
            return Re(() => {
                _();
            }), (e, a) => {
                const l = Ze, r = Be, c = Ee, o = Te, m = He, S = Ue, we = Ve, ve = Xe, Se = Ke, ke = Qe, xe = Fe, v = Je("hasPermi"), Le = $e;
                return h(), Pe(Ae, null, [ t(xe, {
                    class: "teaching-schedule"
                }, {
                    default: p(() => [ E("div", T, [ t(l, {
                        ref_key: "comSearchRef",
                        ref: Q,
                        searchList: n(re),
                        treeProps: oe,
                        onHandleSearch: fe,
                        onHandleReset: K,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "课程名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), E("div", H, [ b((h(), g(c, {
                        type: "primary",
                        onClick: a[0] || (a[0] = s => G({
                            type: "create",
                            title: "新建课程信息"
                        })),
                        size: "large"
                    }, {
                        default: p(() => [ t(r, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), w(" 新增 ") ]),
                        _: 1
                    })), [ [ v, [ "teachmanager:base-course:create" ] ] ]), b((h(), 
                    g(c, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: he
                    }, {
                        default: p(() => [ t(r, {
                            icon: "svg-icon:icon-import",
                            size: 16,
                            class: "icon-import mr-1"
                        }), w(" 导入 ") ]),
                        _: 1
                    })), [ [ v, [ "teachmanager:base-course:import" ] ] ]), b((h(), 
                    g(c, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: de
                    }, {
                        default: p(() => [ t(r, {
                            icon: "svg-icon:icon-type-setting",
                            size: 16,
                            class: "icon-import mr-1"
                        }), w(" 类别设置 ") ]),
                        _: 1
                    })), [ [ v, [ "teachmanager:course-category:query" ] ] ]) ]) ]), t(ve, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: p(() => [ b((h(), g(we, {
                            ref_key: "tableRef",
                            ref: I,
                            data: n(L),
                            height: "calc(100%)",
                            onSelectionChange: ne
                        }, {
                            default: p(() => [ t(o, {
                                type: "selection"
                            }), t(o, {
                                type: "index",
                                label: "序号",
                                width: "52"
                            }), t(o, {
                                label: "课程名称",
                                prop: "name",
                                "show-overflow-tooltip": ""
                            }), t(o, {
                                label: "课程代码",
                                prop: "code",
                                "show-overflow-tooltip": ""
                            }), t(o, {
                                label: "课程类别",
                                prop: "typeName",
                                "show-overflow-tooltip": "",
                                formatter: y
                            }), t(o, {
                                label: "授课对象",
                                prop: "teachingObject",
                                "show-overflow-tooltip": "",
                                formatter: y
                            }), t(o, {
                                label: "开课单位",
                                prop: "courseDeptName",
                                "show-overflow-tooltip": "",
                                formatter: y
                            }), t(o, {
                                label: "学分",
                                prop: "credit",
                                formatter: y
                            }), t(o, {
                                label: "学时",
                                prop: "classHours",
                                formatter: y
                            }), t(o, {
                                label: "课程方向",
                                prop: "courseDirection",
                                "show-overflow-tooltip": "",
                                formatter: y
                            }), t(o, {
                                label: "发布状态",
                                prop: "releaseStatus"
                            }, {
                                default: p(s => [ t(m, {
                                    type: s.row.releaseStatus === "1" ? "success" : "info"
                                }, {
                                    default: p(() => [ w(je(ge(s.row.releaseStatus)), 1) ]),
                                    _: 2
                                }, 1032, [ "type" ]) ]),
                                _: 1
                            }), t(o, {
                                label: "启用状态",
                                prop: "enableStatus"
                            }, {
                                default: p(s => [ t(S, {
                                    disabled: s.row.releaseStatus === "0",
                                    modelValue: s.row.enableStatus,
                                    "onUpdate:modelValue": k => s.row.enableStatus = k,
                                    size: "small",
                                    "active-value": "0",
                                    "inactive-value": "1",
                                    class: "ml-2",
                                    onChange: k => Z({
                                        type: "changeStatus",
                                        row: s.row
                                    }),
                                    "active-color": "#13ce66"
                                }, null, 8, [ "disabled", "modelValue", "onUpdate:modelValue", "onChange" ]) ]),
                                _: 1
                            }), t(o, {
                                label: "创建人",
                                prop: "creatorName",
                                "show-overflow-tooltip": "",
                                formatter: y
                            }), t(o, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                formatter: n(fa),
                                "show-overflow-tooltip": ""
                            }, null, 8, [ "formatter" ]), t(o, {
                                label: "操作",
                                width: "180",
                                fixed: "right"
                            }, {
                                default: p(s => [ b((h(), g(c, {
                                    link: "",
                                    type: "primary",
                                    onClick: k => G({
                                        type: "edit",
                                        title: "编辑课程信息",
                                        row: s.row
                                    })
                                }, {
                                    default: p(() => [ w(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ v, [ "teachmanager:base-course:update" ] ] ]), s.row.releaseStatus === "0" ? b((h(), 
                                g(c, {
                                    key: 0,
                                    link: "",
                                    type: "primary",
                                    onClick: k => Z({
                                        type: "publish",
                                        row: s.row
                                    })
                                }, {
                                    default: p(() => [ w(" 发布 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ v, [ "teachmanager:base-course:update" ] ] ]) : te("", !0), s.row.releaseStatus === "0" ? b((h(), 
                                g(c, {
                                    key: 1,
                                    link: "",
                                    type: "danger",
                                    onClick: k => (({
                                        type: Ce,
                                        row: ae
                                    }) => {
                                        let C = "", P = {}, j = null;
                                        (0, {
                                            publish: () => {
                                                C = "确定发布当前课程信息？", P = {
                                                    id: ae.id,
                                                    releaseStatus: "1",
                                                    enableStatus: "0"
                                                }, j = ee;
                                            },
                                            del: () => {
                                                C = "确定删除当前课程信息？", P = {
                                                    id: ae.id
                                                }, j = me;
                                            }
                                        }[Ce])(), f.confirm(C, "提示", {
                                            confirmButtonText: "确 认",
                                            cancelButtonText: "取 消"
                                        }).then(async () => {
                                            await j(P, C), _();
                                        });
                                    })({
                                        type: "del",
                                        row: s.row
                                    })
                                }, {
                                    default: p(() => [ w(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ v, [ "teachmanager:base-course:delete" ] ] ]) : te("", !0) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ Le, n(_e) ] ]) ]),
                        _: 1
                    }), E("div", U, [ t(Se, {
                        limit: n(d).pageSize,
                        "onUpdate:limit": a[1] || (a[1] = s => n(d).pageSize = s),
                        page: n(d).pageNo,
                        "onUpdate:page": a[2] || (a[2] = s => n(d).pageNo = s),
                        total: n(V),
                        onPagination: _
                    }, null, 8, [ "limit", "page", "total" ]) ]), t(ke, {
                        ref: "SelectionButtonGroupRef",
                        selectList: n(u),
                        pageList: n(L),
                        btnInfoList: n(ie),
                        onSelectAll: ue,
                        onHandleEvent: ce
                    }, null, 8, [ "selectList", "pageList", "btnInfoList" ]) ]),
                    _: 1
                }), t(ra, {
                    ref_key: "addCourseRef",
                    ref: F,
                    teachInfo: n(O),
                    categoryList: n(R),
                    courseDeptList: n(J),
                    onRefreshList: W
                }, null, 8, [ "teachInfo", "categoryList", "courseDeptList" ]), t(ta, {
                    ref_key: "courseCategoryRef",
                    ref: M,
                    teachInfo: n(O),
                    onRefreshList: be
                }, null, 8, [ "teachInfo" ]), t(sa, {
                    ref_key: "importTeachRef",
                    ref: X,
                    downloadInfo: n(ye),
                    onRefreshList: W
                }, null, 8, [ "downloadInfo" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-17ebf745" ] ]);
});

export {
    Ja as __tla,
    le as default
};