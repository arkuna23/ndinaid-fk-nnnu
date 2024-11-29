import {
    _ as oe,
    __tla as ie
} from "./index-8b41572c.js";

import {
    h as ne,
    r as _,
    T as ce,
    u as ue,
    e as O,
    o as s,
    c as y,
    t as c,
    k as a,
    a as u,
    C as r,
    l,
    v as o,
    D as i,
    B as U,
    a6 as q,
    p as R,
    bo as E,
    J as de,
    ad as pe,
    L as me,
    K as _e,
    _ as fe,
    ae as ye,
    R as ke,
    S as he,
    __tla as we
} from "./index-6c08ea4c.js";

import {
    _ as ge,
    __tla as ve
} from "./index-1024512a.js";

import be, {
    __tla as Ce
} from "./build-dialog-748e4100.js";

import {
    f as Te,
    h as De,
    i as Re,
    j as Se,
    __tla as Pe
} from "./build-0e7c99ca.js";

import {
    g as Me,
    __tla as Ye
} from "./group-7c00fc2a.js";

import {
    d as xe,
    __tla as He
} from "./formatTime-de6f1520.js";

import {
    f as Ie
} from "./formatter-7ecf379a.js";

import {
    _ as Ne
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as je
} from "./DeptTag-1be092ce.js";

import {
    __tla as ze
} from "./index-ef4d146e.js";

import "./array-bottom-4bf24e22.js";

import {
    __tla as Fe
} from "./code-a0d24f62.js";

import {
    __tla as Be
} from "./chooseFlowline-0cc8e11a.js";

import "./configInfo-14ae9782.js";

let Q, Le = Promise.all([ (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})() ]).then(async () => {
    let b, S, P, M, Y, x, H, I, N, j, z, F, B, L;
    b = k => (ke("data-v-079dc8cd"), k = k(), he(), k), S = {
        class: "work-build-list"
    }, P = {
        class: "page-content"
    }, M = {
        class: "content-header"
    }, Y = {
        class: "header-left"
    }, x = {
        class: "header-right"
    }, H = {
        class: "content-container"
    }, I = {
        class: "double-cell"
    }, N = {
        key: 0,
        class: "cell-item"
    }, j = {
        key: 1,
        class: "cell-item"
    }, z = b(() => c("span", null, "--", -1)), F = {
        key: 2,
        class: "cell-item"
    }, B = {
        key: 3,
        class: "cell-item"
    }, L = b(() => c("span", null, "--", -1)), Q = Ne({
        __name: "work-build-list",
        emits: [ "goPage" ],
        setup(k, {
            emit: V
        }) {
            const $ = ne(), C = _(null), A = ce(), W = V, G = _([]);
            ue(), _([]), O(() => $.isStudent);
            const J = _({
                key: ""
            }), X = n => {
                Te({
                    namespace: n.ciNameSpace,
                    pipelineRunName: n.ciName
                }).then(e => {
                    e.name = e.metadata.name, e.pipeline = e.metadata.labels["tekton.dev/pipeline"], 
                    e.pipelineStatus = e.status.conditions[0].reason, e.namespace = e.metadata.namespace, 
                    e.message = e.status.conditions[0].message, e.createTime = q(e.metadata.creationTimestamp).format("YYYY-MM-DD HH:MM:ss"), 
                    e.time = ((g, d) => g ? "" + (Date.parse(g) / 1e3 - Date.parse(d) / 1e3) : "0")(e.status.completionTime, e.status.startTime), 
                    [ "Running", "Succeeded", "PipelineRunCancelled", "PipelineRunPending", "Failed" ].indexOf(e.pipelineStatus) < 0 ? R().confirm(`${e.pipelineStatus}\uFF1A${e.message}`) : W("goPage", "result", e, n);
                });
            }, Z = () => {
                C.value.openDialog({
                    title: "新建任务",
                    editFlag: !1
                });
            }, K = _(0), h = O(() => !!$.isTeacher || K.value != 0), ee = n => {
                J.value.key = n.key ?? "", T();
            }, T = () => {
                Se({
                    groupId: A.params.groupId,
                    key: J.value.key
                }).then(n => {
                    G.value = n;
                });
            }, w = () => {
                T();
            };
            w(), Me({
                projectId: A.params.projectId
            }).then(n => {
                K.value = n.isLeader;
            });
            const te = _("");
            return (n, e) => {
                const g = ge, d = de, p = pe, f = me, ae = _e, v = fe, le = ye, se = oe;
                return s(), y("div", S, [ c("div", P, [ c("div", M, [ c("div", Y, [ a(g, {
                    ref: "ComSearchRef",
                    keywordsInfo: {
                        label: "任务名称",
                        key: "key"
                    },
                    onHandleSearch: ee,
                    class: "left"
                }, null, 512) ]), c("div", x, [ u(h) ? (s(), r(d, {
                    key: 0,
                    type: "primary",
                    size: "large",
                    onClick: Z
                }, {
                    default: l(() => [ o("新建任务") ]),
                    _: 1
                })) : i("", !0), a(d, {
                    size: "large",
                    onClick: T
                }, {
                    default: l(() => [ o("刷新状态") ]),
                    _: 1
                }) ]) ]), a(se, {
                    "outer-height": 50,
                    "no-pager": !0,
                    class: "center-box"
                }, {
                    default: l(() => [ c("div", H, [ a(le, {
                        class: "neu-table",
                        data: u(G),
                        style: {
                            width: "100%"
                        }
                    }, {
                        default: l(() => [ a(p, {
                            prop: "structureTaskName",
                            "show-overflow-tooltip": "",
                            label: "构建任务",
                            width: "150",
                            align: "center"
                        }), a(p, {
                            prop: "createTime",
                            formatter: u(xe),
                            label: "创建时间",
                            width: "180",
                            "show-overflow-tooltip": ""
                        }, null, 8, [ "formatter" ]), a(p, {
                            prop: "evnGitProName",
                            label: "代码库",
                            width: "180",
                            "show-overflow-tooltip": ""
                        }), a(p, {
                            prop: "structurePath",
                            label: "路径",
                            "min-width": "180",
                            "show-overflow-tooltip": ""
                        }), a(p, {
                            width: "120",
                            label: "执行结果"
                        }, {
                            default: l(t => [ t.row.status == 1 ? (s(), r(f, {
                                key: 0,
                                type: "success"
                            }, {
                                default: l(() => [ o("构建成功") ]),
                                _: 1
                            })) : i("", !0), t.row.status == 3 ? (s(), r(ae, {
                                key: 1,
                                class: "item",
                                effect: "dark",
                                content: t.row.errorMsg,
                                placement: "top"
                            }, {
                                default: l(() => [ a(f, {
                                    type: "danger"
                                }, {
                                    default: l(() => [ o("构建失败") ]),
                                    _: 1
                                }) ]),
                                _: 2
                            }, 1032, [ "content" ])) : i("", !0), t.row.status == 0 ? (s(), 
                            r(f, {
                                key: 2,
                                type: "info"
                            }, {
                                default: l(() => [ o("待构建") ]),
                                _: 1
                            })) : i("", !0), t.row.status == 2 ? (s(), r(f, {
                                key: 3,
                                type: "warning"
                            }, {
                                default: l(() => [ o("构建中") ]),
                                _: 1
                            })) : i("", !0), t.row.status == 4 ? (s(), r(f, {
                                key: 4,
                                type: "warning"
                            }, {
                                default: l(() => [ o("准备中") ]),
                                _: 1
                            })) : i("", !0) ]),
                            _: 1
                        }), a(p, {
                            prop: "executeUserRealName",
                            label: "发起人",
                            "show-overflow-tooltip": "",
                            formatter: u(Ie)
                        }, null, 8, [ "formatter" ]), a(p, {
                            prop: "date",
                            label: "启动时间",
                            width: "190"
                        }, {
                            default: l(t => [ c("div", I, [ t.row.buildTime ? (s(), 
                            y("div", N, [ a(v, {
                                icon: "svg-icon:clock1"
                            }), c("span", null, U(u(q)(t.row.buildTime).format("YYYY-MM-DD HH:mm:ss")), 1) ])) : (s(), 
                            y("div", j, [ a(v, {
                                icon: "svg-icon:clock1"
                            }), z ])), t.row.duration ? (s(), y("div", F, [ a(v, {
                                icon: "svg-icon:clock2"
                            }), c("span", null, U(t.row.duration) + "S", 1) ])) : (s(), 
                            y("div", B, [ a(v, {
                                icon: "svg-icon:clock2"
                            }), L ])) ]) ]),
                            _: 1
                        }), [ "7" ].includes(u(te)) ? i("", !0) : (s(), r(p, {
                            key: 0,
                            label: "操作",
                            align: "center",
                            width: "220px",
                            fixed: "right"
                        }, {
                            default: l(t => [ [ "0", "1", "3" ].includes(t.row.status) && u(h) ? (s(), 
                            r(d, {
                                key: 0,
                                type: "primary",
                                link: "",
                                onClick: D => (async m => {
                                    await R().confirm("您确定要执行该任务吗？", "提示"), Re(m).then(re => {
                                        E.success("操作成功"), w();
                                    });
                                })(t.row)
                            }, {
                                default: l(() => [ o(" 执行 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : i("", !0), [ "0" ].includes(t.row.status) && u(h) ? (s(), 
                            r(d, {
                                key: 1,
                                type: "primary",
                                link: "",
                                onClick: D => {
                                    return m = t.row, void C.value.openDialog({
                                        title: "编辑任务",
                                        editFlag: !0,
                                        data: m
                                    });
                                    var m;
                                }
                            }, {
                                default: l(() => [ o(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : i("", !0), [ "1", "2", "3" ].includes(t.row.status) ? (s(), 
                            r(d, {
                                key: 2,
                                type: "primary",
                                link: "",
                                onClick: D => X(t.row)
                            }, {
                                default: l(() => [ o(" 详情 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : i("", !0), [ "0", "1", "3" ].includes(t.row.status) && u(h) ? (s(), 
                            r(d, {
                                key: 3,
                                type: "danger",
                                link: "",
                                onClick: D => (async m => {
                                    await R().delConfirm("此操作会删除该构建任务，请确认是否继续？", "提示"), 
                                    De(m).then(re => {
                                        E.success("删除成功"), w();
                                    });
                                })(t.row)
                            }, {
                                default: l(() => [ o(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : i("", !0) ]),
                            _: 1
                        })) ]),
                        _: 1
                    }, 8, [ "data" ]) ]) ]),
                    _: 1
                }) ]), a(be, {
                    ref_key: "BuildDialogRef",
                    ref: C,
                    onRefresh: w
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-079dc8cd" ] ]);
});

export {
    Le as __tla,
    Q as default
};