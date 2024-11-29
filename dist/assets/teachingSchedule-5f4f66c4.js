import {
    u as xe,
    p as Ce,
    h as Ie,
    e as T,
    U as B,
    r as i,
    b9 as Le,
    ej as ze,
    f as Oe,
    j as De,
    o as m,
    c as Pe,
    k as l,
    l as u,
    t as R,
    a as c,
    A as d,
    C as _,
    v as h,
    B as Te,
    D as M,
    F as Be,
    bo as W,
    _ as Re,
    J as Ae,
    ad as je,
    L as He,
    ae as Ee,
    a9 as Ue,
    fo as Je,
    __tla as $e
} from "./index-6c08ea4c.js";

import {
    _ as qe,
    __tla as Fe
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Ge,
    __tla as Qe
} from "./index-e2094cc0.js";

import {
    _ as Ve,
    __tla as Ke
} from "./index-c4ca0ced.js";

import {
    _ as Me,
    __tla as We
} from "./index-8b41572c.js";

import {
    _ as Xe,
    __tla as Ye
} from "./index-1024512a.js";

import {
    __tla as Ze
} from "./dict-c5825220.js";

import ea, {
    __tla as aa
} from "./addTeach-52c31c64.js";

import {
    i as ta,
    __tla as ra
} from "./importTeach-ad550a44.js";

import {
    x as la,
    ar as oa,
    ae as sa,
    D as ca,
    as as na,
    at as ia,
    au as ua,
    av as pa,
    aw as ma,
    ax as da,
    ay as _a,
    __tla as ha
} from "./index-9567cbf6.js";

import {
    d as ya,
    __tla as fa
} from "./formatTime-de6f1520.js";

import {
    t as wa
} from "./formatter-7ecf379a.js";

import {
    h as ga
} from "./tree-05ea8e09.js";

import {
    _ as ba
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as va
} from "./index-993301ca.js";

import {
    __tla as ka
} from "./DeptTag-1be092ce.js";

import {
    __tla as Sa
} from "./index-ef4d146e.js";

import {
    __tla as Na
} from "./index-13c88727.js";

import {
    __tla as xa
} from "./index-cfc63ccf.js";

import {
    __tla as Ca
} from "./catalog-6352045f.js";

import {
    __tla as Ia
} from "./file-e038b35d.js";

import {
    __tla as La
} from "./errorDialog-2a24db66.js";

import {
    __tla as za
} from "./fqa-b0babe7d.js";

let X, Oa = Promise.all([ (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})() ]).then(async () => {
    let A, j, H;
    A = {
        class: "top-box"
    }, j = {
        class: "right btns-box header-btns pt-1"
    }, H = {
        class: "bottom-box"
    }, X = ba({
        __name: "teachingSchedule",
        setup(Da) {
            const Y = xe(), g = Ce(), Z = Ie(), ee = T(() => [ {
                label: "开课学期",
                key: "termId",
                type: "list",
                customValue: "id",
                customLabel: "name",
                options: N.value
            }, {
                label: "开课单位名称/代码",
                key: "courseDepts",
                type: "tree",
                options: K.value,
                width: "180px",
                filterable: !0,
                multiple: !0
            }, {
                label: "教师姓名/工号",
                key: "teacherkeywords",
                type: "input",
                width: "150px",
                maxLength: 30
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
            } ]), ae = {
                children: "children",
                label: (e, a) => {
                    let t = "";
                    return t = e.code !== null && e.code !== "" ? `${e.name}(${e.code})` : e.name, 
                    t;
                },
                value: "id",
                isLeaf: "leaf",
                emitPath: !1,
                class: "tree-node-custom"
            }, p = B({
                pageNo: 1,
                pageSize: 10
            }), te = i(!1);
            T(() => y.value.length > 0);
            const y = i([]), E = i({
                0: [],
                1: []
            }), re = e => {
                y.value = e, te.value = e.length === S.value.length, E.value = oe({
                    rawList: y.value,
                    groupAttr: "releaseStatus"
                });
            }, le = T(() => {
                var e;
                return [ {
                    key: "batchPublish",
                    label: "发布",
                    type: "primary",
                    icon: "ep:promotion",
                    permi: "teachmanager:teach-arrangement:update",
                    disabled: ((e = E.value[0]) == null ? void 0 : e.length) !== y.value.length
                }, {
                    key: "batchDel",
                    label: "删除",
                    color: "#E14635",
                    icon: "svg-icon:delete",
                    permi: "teachmanager:teach-arrangement:delete"
                } ];
            }), oe = ({
                rawList: e,
                groupAttr: a
            }) => e.reduce((t, o) => {
                const r = o[a];
                return t[r] || (t[r] = []), t[r].push(o), t;
            }, {}), se = ({
                key: e
            }) => {
                const a = JSON.parse(JSON.stringify(y.value));
                let t = [];
                const o = {
                    batchPublish: async () => {
                        t = a.map(r => r.id), await ce({
                            ids: t
                        }), g.success("发布成功"), f();
                    },
                    batchDel: () => {
                        t = a.map(r => r.id), g.confirm("确定删除选择的课程信息？", "提示", {
                            confirmButtonText: "确 认",
                            cancelButtonText: "取 消"
                        }).then(async () => {
                            await ne({
                                ids: t
                            }), f();
                        });
                    },
                    default: () => {}
                };
                (o[e] || o.default)();
            }, ce = async ({
                ids: e
            }) => {
                await na({
                    ids: e.join()
                });
            }, ne = async ({
                ids: e
            }) => {
                await ia({
                    ids: e.join()
                }), g.success("删除成功");
            }, L = i(null), ie = e => {
                e !== !1 ? L.value.toggleAllSelection() : L.value.clearSelection();
            }, S = i([]), ue = i(!1), U = i({}), z = i(null), J = async ({
                type: e,
                title: a,
                row: t
            }) => {
                const o = {
                    create: () => {},
                    edit: async () => {
                        U.value = await pe(t.id);
                    },
                    default: () => {}
                };
                await (o[e] || o.default)(), z.value.handleOpen({
                    type: e,
                    title: a
                });
            }, $ = i([]), pe = e => ua({
                id: e
            }), me = () => {
                p.pageNo = 1, p.pageSize = 10;
            }, O = B({
                keywords: "",
                termId: "",
                courseDepts: [],
                teacherkeywords: "",
                releaseStatus: "",
                tenantId: ""
            }), de = e => {
                Object.keys(O).forEach(a => O[a] = e[a]), f();
            }, q = i(0), f = async () => {
                const e = await oa({
                    pageNo: p.pageNo,
                    pageSize: p.pageSize,
                    ...O
                });
                S.value = e == null ? void 0 : e.list, q.value = (e == null ? void 0 : e.total) || 0;
            }, _e = async ({
                row: e
            }) => {
                const a = await da({
                    id: e.id
                });
                return g.success("发布成功"), a;
            }, he = async ({
                key: e,
                id: a
            }) => {
                await _a({
                    id: a
                }), W.success("删除成功");
            }, F = ({
                key: e,
                id: a,
                row: t
            }) => {
                let o = "", r = null;
                (0, {
                    publish: () => {
                        o = "教学安排发布后教师即可查看并开展课程教学，确定发布？", r = _e;
                    },
                    del: () => {
                        o = "如教学安排已发布，删除后所有已产生的教学及学习数据将全部清空，确定删除？", r = he;
                    }
                }[e])(), g.confirm(o, "提示", {
                    confirmButtonText: "确 认",
                    cancelButtonText: "取 消"
                }).then(async () => {
                    await r({
                        key: e,
                        id: a,
                        row: t
                    }), f();
                });
            }, G = i(null), ye = () => {
                G.value.handleOpen({
                    tip: "每学期每门课程学生仅可加入其中1个教学班级",
                    source: "teachingSchedule",
                    instruction: "请基于系统模板补充信息，单次最多导入数据100000行"
                });
            };
            Le("tableColumnList", [ {
                prop: "courseName",
                label: "课程名称",
                width: "80px"
            }, {
                prop: "courseCode",
                label: "课程代码",
                width: "80px"
            }, {
                prop: "teacherName",
                label: "授课教师姓名",
                width: "80px"
            }, {
                prop: "teacherNumber",
                label: "授课教师学号/工号",
                width: "100px"
            }, {
                prop: "teachClassName",
                label: "教学班名称",
                width: "80px"
            }, {
                prop: "stuName",
                label: "学生姓名",
                width: "80px"
            }, {
                prop: "stuNumber",
                label: "学生学号/工号",
                width: "80px"
            } ]);
            const Q = i(null), V = () => {
                var e;
                (e = Q.value) == null || e.resetParams();
            }, D = i(null), fe = async ({
                type: e,
                params: a
            }) => {
                const t = {
                    create: () => {
                        D.value = we;
                    },
                    edit: () => {
                        D.value = ge;
                    },
                    default: () => {}
                };
                (t[e] || t.default)(), await D.value({
                    params: a
                }), W.success("操作成功"), z.value.handleClose(), V();
            }, we = async ({
                params: e
            }) => {
                const {
                    id: a,
                    courseSource: t,
                    courseName: o,
                    courseCode: r,
                    termId: s,
                    courseId: b,
                    releaseStatus: v,
                    teachStatus: k,
                    creatorName: C
                } = e;
                return await pa({
                    id: a,
                    courseSource: t,
                    courseName: o,
                    courseCode: r,
                    termId: s,
                    courseId: b,
                    releaseStatus: v,
                    teachStatus: k,
                    creatorName: Z.getUser.nickname,
                    createSource: "1",
                    cover: Je(1, 4).toString()
                });
            }, ge = async ({
                params: e
            }) => {
                const {
                    id: a,
                    courseSource: t,
                    courseName: o,
                    courseCode: r,
                    termId: s,
                    courseId: b,
                    releaseStatus: v,
                    teachStatus: k,
                    creatorName: C
                } = e;
                return await ma({
                    id: a,
                    courseSource: t,
                    courseId: b,
                    courseName: o,
                    courseCode: r,
                    termId: s,
                    releaseStatus: v,
                    teachStatus: k,
                    creatorName: C
                });
            }, K = i([]), N = i([]), be = B({
                source: "teachingSchedule",
                name: "教学安排导入模板"
            }), ve = e => {
                const a = {
                    0: "未发布",
                    1: "已发布",
                    default: ""
                };
                return a[e] || a.default;
            }, x = (e, a) => wa(e[a.property]);
            return ze(async () => {
                K.value = ga(await (async () => await sa())()), N.value = await (async () => (await ca()).map(e => (e.value = e.id, 
                e.label = e.name, e)))();
            }), Oe(() => {
                f(), (async () => {
                    const e = await la({
                        keywords: ""
                    });
                    $.value = e || [];
                })();
            }), (e, a) => {
                const t = Xe, o = Re, r = Ae, s = je, b = He, v = Ee, k = Me, C = Ve, ke = Ge, Se = qe, w = De("hasPermi"), Ne = Ue;
                return m(), Pe(Be, null, [ l(Se, {
                    class: "teaching-schedule"
                }, {
                    default: u(() => [ R("div", A, [ l(t, {
                        ref_key: "comSearchRef",
                        ref: Q,
                        searchList: c(ee),
                        treeProps: ae,
                        onHandleSearch: de,
                        onHandleReset: me,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "课程名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), R("div", j, [ d((m(), _(r, {
                        type: "primary",
                        onClick: a[0] || (a[0] = n => J({
                            type: "create",
                            title: "新建教学安排"
                        })),
                        size: "large"
                    }, {
                        default: u(() => [ l(o, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), h(" 新增 ") ]),
                        _: 1
                    })), [ [ w, [ "teachmanager:teach-arrangement:create" ] ] ]), d((m(), 
                    _(r, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: ye
                    }, {
                        default: u(() => [ l(o, {
                            icon: "svg-icon:icon-import",
                            size: 16,
                            class: "icon-import mr-1"
                        }), h(" 导入 ") ]),
                        _: 1
                    })), [ [ w, [ "teachmanager:teach-arrangement:import" ] ] ]) ]) ]), l(k, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: u(() => [ d((m(), _(v, {
                            ref_key: "tableRef",
                            ref: L,
                            data: c(S),
                            height: "calc(100%)",
                            onSelectionChange: re
                        }, {
                            default: u(() => [ l(s, {
                                type: "selection"
                            }), l(s, {
                                type: "index",
                                label: "序号",
                                width: "52"
                            }), l(s, {
                                label: "课程名称",
                                prop: "courseName",
                                "show-overflow-tooltip": ""
                            }), l(s, {
                                label: "课程代码",
                                prop: "courseCode",
                                "show-overflow-tooltip": ""
                            }), l(s, {
                                label: "开课学期",
                                prop: "termName",
                                "show-overflow-tooltip": ""
                            }), l(s, {
                                label: "开课单位",
                                prop: "courseDeptName",
                                "show-overflow-tooltip": "",
                                formatter: x
                            }), l(s, {
                                label: "授课教师",
                                prop: "teacherName",
                                "show-overflow-tooltip": "",
                                formatter: x
                            }), l(s, {
                                label: "教学班级数",
                                prop: "classCount",
                                width: "100",
                                formatter: x
                            }), l(s, {
                                label: "学生数",
                                prop: "studentCount",
                                formatter: x
                            }), l(s, {
                                label: "发布状态",
                                prop: "releaseStatus"
                            }, {
                                default: u(n => [ l(b, {
                                    type: n.row.releaseStatus === "1" ? "success" : "info"
                                }, {
                                    default: u(() => [ h(Te(ve(n.row.releaseStatus)), 1) ]),
                                    _: 2
                                }, 1032, [ "type" ]) ]),
                                _: 1
                            }), l(s, {
                                label: "创建人",
                                prop: "creatorName",
                                "show-overflow-tooltip": ""
                            }), l(s, {
                                label: "创建时间",
                                prop: "createTime",
                                formatter: c(ya),
                                "show-overflow-tooltip": "",
                                width: "180"
                            }, null, 8, [ "formatter" ]), l(s, {
                                label: "操作",
                                "min-width": "238",
                                fixed: "right"
                            }, {
                                default: u(n => [ n.row.releaseStatus === "0" ? d((m(), 
                                _(r, {
                                    key: 0,
                                    link: "",
                                    type: "primary",
                                    onClick: P => J({
                                        type: "edit",
                                        title: "编辑教学安排",
                                        row: n.row
                                    })
                                }, {
                                    default: u(() => [ h(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ w, [ "teachmanager:teach-arrangement:update" ] ] ]) : M("", !0), d((m(), 
                                _(r, {
                                    link: "",
                                    type: "primary",
                                    onClick: P => (({
                                        row: I
                                    }) => {
                                        Y.push({
                                            name: "TeachingClass",
                                            params: {
                                                courseId: I.courseId,
                                                termId: I.termId,
                                                teachArrangementId: I.id
                                            },
                                            query: {
                                                releaseStatus: I.releaseStatus
                                            }
                                        });
                                    })({
                                        row: n.row
                                    })
                                }, {
                                    default: u(() => [ h(" 教学班管理 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ w, [ "teachmanager:teach-arrangement:update" ] ] ]), n.row.releaseStatus === "0" ? d((m(), 
                                _(r, {
                                    key: 1,
                                    link: "",
                                    type: "primary",
                                    onClick: P => F({
                                        key: "publish",
                                        id: n.row.id,
                                        row: n.row
                                    })
                                }, {
                                    default: u(() => [ h(" 发布 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ w, [ "teachmanager:teach-arrangement:update" ] ] ]) : M("", !0), d((m(), 
                                _(r, {
                                    link: "",
                                    type: "danger",
                                    onClick: P => F({
                                        key: "del",
                                        id: n.row.id,
                                        row: n.row
                                    })
                                }, {
                                    default: u(() => [ h(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ w, [ "teachmanager:teach-arrangement:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ Ne, c(ue) ] ]) ]),
                        _: 1
                    }), R("div", H, [ l(C, {
                        limit: c(p).pageSize,
                        "onUpdate:limit": a[1] || (a[1] = n => c(p).pageSize = n),
                        page: c(p).pageNo,
                        "onUpdate:page": a[2] || (a[2] = n => c(p).pageNo = n),
                        total: c(q),
                        onPagination: f
                    }, null, 8, [ "limit", "page", "total" ]) ]), l(ke, {
                        ref: "SelectionButtonGroupRef",
                        selectList: c(y),
                        pageList: c(S),
                        btnInfoList: c(le),
                        onSelectAll: ie,
                        onHandleEvent: se
                    }, null, 8, [ "selectList", "pageList", "btnInfoList" ]) ]),
                    _: 1
                }), l(ea, {
                    ref_key: "addTeachRef",
                    ref: z,
                    teachInfo: c(U),
                    courseList: c($),
                    onHandleData: fe,
                    termOptionList: c(N)
                }, null, 8, [ "teachInfo", "courseList", "termOptionList" ]), l(ta, {
                    ref_key: "importTeachRef",
                    ref: G,
                    downloadInfo: c(be),
                    termOptionList: c(N),
                    onRefreshList: V
                }, null, 8, [ "downloadInfo", "termOptionList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-9edd7dc8" ] ]);
});

export {
    Oa as __tla,
    X as default
};