import {
    _ as M,
    __tla as Q
} from "./index-71666e05.js";

import {
    _ as V,
    __tla as W
} from "./index-8b41572c.js";

import {
    p as O,
    r as c,
    U as E,
    f as X,
    aT as H,
    o,
    c as P,
    F as Y,
    t as S,
    k as e,
    l as i,
    v as u,
    C as y,
    B as N,
    H as D,
    D as F,
    ai as A,
    E as Z,
    _ as aa,
    J as ea,
    ad as ta,
    L as la,
    ae as na,
    __tla as ia
} from "./index-6c08ea4c.js";

import {
    _ as sa,
    __tla as ra
} from "./index-1024512a.js";

import oa, {
    __tla as pa
} from "./instanceDetail-1e8d4ce5.js";

import {
    a as ca,
    d as ua,
    g as da,
    t as ma,
    s as _a,
    __tla as ha
} from "./pipelineInstance-0aa13fd5.js";

import {
    g as ya,
    __tla as fa
} from "./taskManage-5f71a641.js";

import {
    _ as ga
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as ba
} from "./DeptTag-1be092ce.js";

import {
    __tla as wa
} from "./index-ef4d146e.js";

import {
    __tla as va
} from "./index-da0e4c45.js";

import {
    __tla as ka
} from "./el-collapse-item-c8b76a0a.js";

import "./array-bottom-4bf24e22.js";

import "./check-C-7cf0dd88.js";

import "./warning-a30fb85a.js";

import "./tenant-9e660cc6.js";

import "./fail-da771b5c.js";

import "./picSen-0394b184.js";

import {
    __tla as Ca
} from "./clipboard-0a12866f.js";

import {
    __tla as Pa
} from "./taskInstance-9258951c.js";

import {
    __tla as Sa
} from "./pipelineManage-fe91e90c.js";

let B, Da = Promise.all([ (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return pa;
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
        return ba;
    } catch {}
})(), (() => {
    try {
        return wa;
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
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})() ]).then(async () => {
    const z = {
        class: "task-instance neu-tenant-list"
    }, j = {
        key: 0,
        class: "neu-tenant-list"
    }, J = {
        class: "top-box"
    }, q = {
        class: "right btns-box header-btns"
    }, U = {
        class: "table-list"
    }, G = {
        key: 1,
        class: "page-empty w-100%"
    };
    B = ga({
        name: "PipelineInstance",
        components: {
            toDetail: oa,
            addPipelineInstance: ca
        },
        setup() {
            const I = O(), R = c(null), $ = c(null), t = c(!1), T = c(null), k = c(0), w = c(!1), d = E({
                pipelineName: "",
                namespace: "",
                resourceType: "",
                syncType: "",
                status: ""
            }), m = c([ {
                type: "list",
                label: "命名空间",
                key: "namespace",
                default: "",
                options: []
            }, {
                type: "list",
                label: "状态",
                key: "status",
                default: "",
                options: [ {
                    value: "Running",
                    label: "运行"
                }, {
                    value: "PipelineRunPending",
                    label: "挂起"
                }, {
                    value: "Failed",
                    label: "失败"
                }, {
                    value: "Succeeded",
                    label: "成功"
                }, {
                    value: "PipelineRunCancelled",
                    label: "取消"
                } ]
            } ]), p = c([]), h = c([ {
                value: "Running",
                label: "运行"
            }, {
                value: "PipelineRunPending",
                label: "挂起"
            }, {
                value: "Failed",
                label: "失败"
            }, {
                value: "Succeeded",
                label: "成功"
            }, {
                value: "PipelineRunCancelled",
                label: "取消"
            } ]), x = c([ {
                value: 1,
                label: "init"
            }, {
                value: 2,
                label: "timing"
            }, {
                value: 3,
                label: "manual"
            } ]), f = E({
                data: []
            }), g = c(!1);
            let _ = async () => {
                g.value = !0;
                const a = {
                    ...d
                };
                await da(a).then(l => {
                    if (l.code === 200 && l.data.items) {
                        let r = l.data.items;
                        r.forEach(s => {
                            s.name = s.metadata.name, s.pipeline = s.metadata.labels["tekton.dev/pipeline"], 
                            s.pipelineStatus = s.status.conditions[0].reason, s.namespace = s.metadata.namespace, 
                            s.message = s.status.conditions[0].message, s.createTime = n(s.metadata.creationTimestamp), 
                            s.time = L(s.status.completionTime, s.status.startTime);
                        }), r = r.sort((s, K) => Date.parse(K.createTime) - Date.parse(s.createTime)), 
                        C(r), g.value = !1;
                    } else f.data = [], g.value = !1;
                    k.value == 0 && (k.value = f.data.length);
                });
            };
            const C = a => {
                const l = d.status, r = [];
                l == "" ? f.data = [ ...a ] : (a.forEach(v => {
                    v.pipelineStatus === l && r.push(v);
                }), f.data = [ ...r ]);
            };
            let n = a => `${a.substr(0, 4)}-${a.substr(5, 2)}-${a.substr(8, 2)} ${a.substr(11, 2)}:${a.substr(14, 2)}:${a.substr(17, 2)}`;
            const b = async () => {
                await ya().then(a => {
                    a.data.forEach(l => {
                        var r;
                        p.value.push({
                            value: l.metadata.name,
                            label: l.metadata.name
                        }), (r = m.value) == null || r[0].options.push({
                            value: l.metadata.name,
                            label: l.metadata.name
                        });
                    });
                });
            };
            let L = (a, l) => a ? Date.parse(a) / 1e3 - Date.parse(l) / 1e3 + "秒" : "--";
            return X(() => {
                _(), b();
            }), {
                searchForm: R,
                selectTable: $,
                queryParams: d,
                nameSpaceOptions: p,
                statusOptions: h,
                taskSyncTypeOptions: x,
                resetForm: () => {
                    R.value.resetFields();
                },
                tableData: f,
                tableloading: g,
                toDetail: a => {
                    [ "Running", "Succeeded", "PipelineRunCancelled", "PipelineRunPending", "Failed" ].indexOf(a.pipelineStatus) < 0 ? Z.alert(a.message, `${a.pipelineStatus}`, {
                        confirmButtonText: "确定",
                        showClose: !1,
                        customClass: "neu-error-box icho-message-box",
                        confirmButtonClass: "neu-bg-red neu-border-red"
                    }) : (T.value = a, t.value = !0);
                },
                handleDelete: a => {
                    const l = {
                        namespace: a.metadata.namespace,
                        name: a.name
                    };
                    O().delConfirm("您确定要删除此流水线实例吗？", "提示").then(async () => {
                        await ua(l).then(r => {
                            r.code === 200 && (I.success("删除流水线实例成功"), _());
                        });
                    });
                },
                toDetailFlag: t,
                closeDetail: () => {
                    t.value = !1;
                },
                detailContent: T,
                searchrules: {
                    pipelineName: [ {
                        pattern: /^[^\s]+$/,
                        message: "不允许输入空格",
                        trigger: "blur"
                    }, {
                        max: 63,
                        message: "长度最多为63 个字符",
                        trigger: "blur"
                    } ]
                },
                getData: () => {
                    _();
                },
                toPipelineInstanceFlag: w,
                closePipelineInstance: () => {
                    w.value = !1, _();
                },
                handleAdd: () => {
                    w.value = !0;
                },
                initPage: _,
                getOptionsData: b,
                formatterDuration: L,
                handleRun: async a => {
                    const l = {
                        name: a.metadata.name,
                        namespace: a.metadata.namespace
                    };
                    await ma(l).then(r => {
                        _();
                    });
                },
                handleStop: async a => {
                    const l = {
                        name: a.metadata.name,
                        namespace: a.metadata.namespace
                    };
                    await _a(l).then(r => {});
                },
                statusDeal: C,
                searchList: m,
                searchData: a => {
                    const {
                        taskName: l,
                        namespace: r,
                        status: v
                    } = a;
                    d.taskName = l, d.namespace = r, d.status = v, _();
                },
                originalTotal: k
            };
        }
    }, [ [ "render", function(I, R, $, t, T, k) {
        const w = sa, d = aa, m = ea, p = ta, h = la, x = na, f = V, g = M, _ = H("toDetail"), C = H("addPipelineInstance");
        return o(), P("div", z, [ t.originalTotal > 0 ? (o(), P(Y, {
            key: 0
        }, [ t.toPipelineInstanceFlag || t.toDetailFlag ? F("", !0) : (o(), P("div", j, [ S("div", J, [ e(w, {
            ref: "ComSearchRef",
            searchList: t.searchList,
            keywordsInfo: {
                label: "名称",
                key: "name"
            },
            onHandleSearch: t.searchData,
            class: "left"
        }, null, 8, [ "searchList", "onHandleSearch" ]), S("div", q, [ e(m, {
            type: "primary",
            class: "add",
            size: "large",
            onClick: t.handleAdd
        }, {
            default: i(() => [ e(d, {
                icon: "ep:plus",
                style: {
                    "margin-right": "5px"
                }
            }), u(" 新建 ") ]),
            _: 1
        }, 8, [ "onClick" ]) ]) ]), S("div", U, [ e(f, {
            class: "center-box",
            "no-pager": !1,
            "outer-height": -40
        }, {
            default: i(() => [ e(x, {
                class: "common-table",
                ref: "selectTable",
                data: t.tableData.data,
                "highlight-current-row": "",
                height: "100%",
                "default-sort": {
                    prop: "createTime",
                    order: "descending"
                }
            }, {
                default: i(() => [ e(p, {
                    type: "index",
                    label: "序号",
                    "min-width": "100"
                }), e(p, {
                    prop: "name",
                    label: "名称",
                    "min-width": "220",
                    "show-overflow-tooltip": !0
                }), e(p, {
                    prop: "namespace",
                    label: "命名空间",
                    "min-width": "140"
                }), e(p, {
                    prop: "pipelineStatus",
                    label: "状态",
                    width: "200",
                    "show-overflow-tooltip": !0
                }, {
                    default: i(n => [ n.row.pipelineStatus === "Running" ? (o(), 
                    y(h, {
                        key: 0
                    }, {
                        default: i(() => [ u(" 运行 ") ]),
                        _: 1
                    })) : n.row.pipelineStatus === "Succeeded" ? (o(), y(h, {
                        key: 1,
                        type: "success"
                    }, {
                        default: i(() => [ u(" 成功 ") ]),
                        _: 1
                    })) : n.row.pipelineStatus === "PipelineRunCancelled" ? (o(), 
                    y(h, {
                        key: 2,
                        type: "info"
                    }, {
                        default: i(() => [ u(" 取消 ") ]),
                        _: 1
                    })) : n.row.pipelineStatus === "PipelineRunPending" ? (o(), 
                    y(h, {
                        key: 3,
                        type: "warning",
                        class: "warning"
                    }, {
                        default: i(() => [ u(" 挂起 ") ]),
                        _: 1
                    })) : n.row.pipelineStatus === "Failed" ? (o(), y(h, {
                        key: 4,
                        type: "danger"
                    }, {
                        default: i(() => [ u(" 失败 ") ]),
                        _: 1
                    })) : (o(), y(h, {
                        key: 5,
                        type: "danger"
                    }, {
                        default: i(() => [ S("span", null, N(n.row.pipelineStatus) + "：" + N(n.row.message), 1) ]),
                        _: 2
                    }, 1024)) ]),
                    _: 1
                }), e(p, {
                    prop: "time",
                    label: "持续时间",
                    "min-width": "140"
                }), e(p, {
                    prop: "pipeline",
                    label: "流水线",
                    "min-width": "140",
                    "show-overflow-tooltip": ""
                }), e(p, {
                    prop: "createTime",
                    label: "创建时间",
                    "min-width": "200",
                    sortable: !0
                }), e(p, {
                    label: "操作",
                    fixed: "right",
                    width: "320"
                }, {
                    default: i(n => [ e(m, {
                        type: "primary",
                        text: "",
                        onClick: D(b => t.toDetail(n.row), [ "stop" ])
                    }, {
                        default: i(() => [ u("详情") ]),
                        _: 2
                    }, 1032, [ "onClick" ]), e(m, {
                        type: "primary",
                        text: "",
                        disabled: n.row.pipelineStatus !== "Running" && n.row.pipelineStatus !== "PipelineRunPending" && n.row.pipelineStatus !== "PipelineRunCancelled",
                        onClick: D(b => t.handleStop(n.row), [ "stop" ])
                    }, {
                        default: i(() => [ u("中止") ]),
                        _: 2
                    }, 1032, [ "disabled", "onClick" ]), e(m, {
                        type: "primary",
                        text: "",
                        disabled: n.row.pipelineStatus !== "Running" && n.row.pipelineStatus !== "PipelineRunPending" && n.row.pipelineStatus !== "PipelineRunCancelled",
                        onClick: D(b => t.handleRun(n.row), [ "stop" ])
                    }, {
                        default: i(() => [ u("运行") ]),
                        _: 2
                    }, 1032, [ "disabled", "onClick" ]), e(m, {
                        type: "primary",
                        text: "",
                        onClick: D(b => t.handleDelete(n.row), [ "stop" ])
                    }, {
                        default: i(() => [ u("删除") ]),
                        _: 2
                    }, 1032, [ "onClick" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "data" ]) ]),
            _: 1
        }) ]) ])) ], 64)) : (o(), P("div", G, [ e(g, {
            type: "resource"
        }), e(m, {
            type: "primary",
            class: "add",
            size: "large",
            onClick: t.handleAdd
        }, {
            default: i(() => [ e(d, {
                icon: "ep:plus",
                style: {
                    "margin-right": "5px"
                }
            }), u(" 新建 ") ]),
            _: 1
        }, 8, [ "onClick" ]) ])), e(A, null, {
            default: i(() => [ t.toDetailFlag ? (o(), y(_, {
                key: 0,
                "detail-content": t.detailContent,
                onClose: t.closeDetail
            }, null, 8, [ "detail-content", "onClose" ])) : F("", !0) ]),
            _: 1
        }), e(A, null, {
            default: i(() => [ t.toPipelineInstanceFlag ? (o(), y(C, {
                key: 0,
                onClose: t.closePipelineInstance
            }, null, 8, [ "onClose" ])) : F("", !0) ]),
            _: 1
        }) ]);
    } ], [ "__scopeId", "data-v-ac0fdf82" ] ]);
});

export {
    Da as __tla,
    B as default
};