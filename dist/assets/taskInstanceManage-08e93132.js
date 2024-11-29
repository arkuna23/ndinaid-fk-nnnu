import {
    _ as J,
    __tla as U
} from "./index-71666e05.js";

import {
    _ as Y,
    __tla as G
} from "./index-8b41572c.js";

import {
    p as P,
    r as m,
    U as I,
    e as K,
    f as Q,
    aT as M,
    o,
    c as v,
    F as V,
    t as D,
    k as s,
    l,
    v as p,
    C as _,
    B as N,
    H,
    D as F,
    ai as L,
    E as W,
    _ as X,
    J as Z,
    ad as aa,
    L as ta,
    ae as ea,
    __tla as sa
} from "./index-6c08ea4c.js";

import {
    _ as la,
    __tla as na
} from "./index-1024512a.js";

import {
    g as ra,
    __tla as oa
} from "./taskManage-5f71a641.js";

import {
    d as ia,
    e as ca,
    __tla as ua
} from "./taskInstance-9258951c.js";

import da, {
    __tla as ma
} from "./taskDetail-b2997693.js";

import pa, {
    __tla as _a
} from "./taskInstance-4644c073.js";

import {
    _ as ga
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as ha
} from "./DeptTag-1be092ce.js";

import {
    __tla as ka
} from "./index-ef4d146e.js";

import {
    __tla as fa
} from "./index-da0e4c45.js";

import {
    __tla as ya
} from "./el-collapse-item-c8b76a0a.js";

import "./array-bottom-4bf24e22.js";

import "./check-C-7cf0dd88.js";

import "./warning-a30fb85a.js";

import "./tenant-9e660cc6.js";

import "./fail-da771b5c.js";

import "./picSen-0394b184.js";

import {
    __tla as ba
} from "./clipboard-0a12866f.js";

let E, va = Promise.all([ (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return G;
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
        return oa;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return ka;
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
        return ba;
    } catch {}
})() ]).then(async () => {
    const A = {
        class: "task-instance neu-tenant-list"
    }, B = {
        key: 0,
        class: "neu-tenant-list"
    }, O = {
        class: "top-box"
    }, j = {
        class: "right btns-box header-btns"
    }, z = {
        key: 1,
        class: "page-empty w-100%"
    };
    E = ga({
        name: "TaskManage",
        components: {
            toDetail: da,
            addTaskInstance: pa
        },
        setup() {
            const x = P(), w = m(null), R = m(null), e = m(!1), f = m(!1), g = I({
                taskName: "",
                namespace: "",
                currentTaskStaus: ""
            }), S = K(() => [ {
                type: "list",
                label: "命名空间",
                key: "namespace",
                default: "",
                options: k.value
            }, {
                type: "list",
                label: "状态",
                key: "currentTaskStaus",
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
            } ]), k = m([]), d = I({
                data: []
            }), i = m(0), c = m(!1), y = m(null);
            let h = async () => {
                const t = {
                    ...g
                };
                await ca(t).then(a => {
                    if (a.code === 200 && a.data.items) {
                        let u = a.data.items;
                        u.forEach(n => {
                            n.name = n.metadata.name, n.namespace = n.metadata.namespace, 
                            n.taskStatus = n.status.conditions[0].reason, n.message = n.status.conditions[0].message, 
                            n.createTime = r(n.metadata.creationTimestamp), n.taskName = n.spec.taskRef.name;
                        }), u = u.sort((n, q) => Date.parse(q.createTime) - Date.parse(n.createTime)), 
                        b(u), c.value = !1;
                    } else d.data = [], c.value = !1;
                });
            };
            const T = m(""), C = m([ {
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
            } ]), b = t => {
                const a = [];
                g.currentTaskStaus == "" ? d.data = [ ...t ] : (t.forEach(u => {
                    u.taskStatus === g.currentTaskStaus && a.push(u);
                }), d.data = [ ...a ]), i.value == 0 && (i.value = d.data.length);
            };
            let r = t => {
                const a = new Date(t);
                return `${a.getFullYear()}-${a.getMonth() + 1 < 10 ? `0${a.getMonth() + 1}` : a.getMonth() + 1}-${a.getDate() < 10 ? `0${a.getDate()}` : a.getDate()} ${a.getHours() < 10 ? `0${a.getHours()}` : a.getHours()}:${a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes()}:${a.getSeconds() < 10 ? `0${a.getSeconds()}` : a.getSeconds()}`;
            };
            return Q(async () => {
                h(), await ra().then(t => {
                    t.data.forEach(a => {
                        k.value.push({
                            value: a.metadata.name,
                            label: a.metadata.name
                        });
                    });
                });
            }), {
                initPage: h,
                searchForm: w,
                selectTable: R,
                queryParams: g,
                nameSpaceOptions: k,
                resetForm: () => {
                    w.value.resetFields();
                },
                tableData: d,
                tableloading: c,
                toDetail: t => {
                    [ "Started", "Running", "Succeeded", "TaskRunCancelled", "Pending", "Failed" ].indexOf(t.taskStatus) < 0 ? W.alert(t.message, `${t.taskStatus}`, {
                        confirmButtonText: "确定",
                        showClose: !1,
                        customClass: "neu-error-box icho-message-box",
                        confirmButtonClass: "neu-bg-red neu-border-red"
                    }) : (y.value = t, e.value = !0);
                },
                handleDelete: t => {
                    const a = {
                        namespace: t.namespace,
                        taskRunName: t.name
                    };
                    P().delConfirm("您确定要删除此作业实例吗？", "提示").then(async () => {
                        await ia(a).then(u => {
                            u.code === 200 && (x.success("删除作业实例成功"), h());
                        });
                    });
                },
                toDetailFlag: e,
                toTaskInstanceFlag: f,
                closeDetail: () => {
                    e.value = !1, f.value = !1;
                },
                searchrules: {
                    name: [ {
                        pattern: /^[^\s]+$/,
                        message: "不允许输入空格",
                        trigger: "blur"
                    }, {
                        min: 1,
                        max: 63,
                        message: "长度在 1 到 63 个字符",
                        trigger: "blur"
                    } ]
                },
                getData: () => {
                    h();
                },
                closeTaskInstance: () => {
                    f.value = !1, h();
                },
                handleAdd: () => {
                    f.value = !0;
                },
                detailContent: y,
                statusOptions: C,
                currentTaskStaus: T,
                statusDeal: b,
                searchList: S,
                searchData: t => {
                    const {
                        taskName: a,
                        namespace: u,
                        currentTaskStaus: $
                    } = t;
                    g.taskName = a, g.namespace = u, g.currentTaskStaus = $, h();
                },
                originalTotal: i
            };
        }
    }, [ [ "render", function(x, w, R, e, f, g) {
        const S = la, k = X, d = Z, i = aa, c = ta, y = ea, h = Y, T = J, C = M("toDetail"), b = M("addTaskInstance");
        return o(), v("div", A, [ e.originalTotal > 0 ? (o(), v(V, {
            key: 0
        }, [ e.toTaskInstanceFlag || e.toDetailFlag ? F("", !0) : (o(), v("div", B, [ D("div", O, [ s(S, {
            ref: "ComSearchRef",
            searchList: e.searchList,
            keywordsInfo: {
                label: "作业名称",
                key: "taskName"
            },
            onHandleSearch: e.searchData,
            class: "left"
        }, null, 8, [ "searchList", "onHandleSearch" ]), D("div", j, [ s(d, {
            size: "large",
            type: "primary",
            onClick: e.handleAdd
        }, {
            default: l(() => [ s(k, {
                icon: "ep:plus",
                style: {
                    "margin-right": "5px"
                }
            }), p(" 新建 ") ]),
            _: 1
        }, 8, [ "onClick" ]) ]) ]), s(h, {
            class: "center-box",
            "no-pager": !1,
            "outer-height": -40
        }, {
            default: l(() => [ s(y, {
                class: "common-table",
                ref: "selectTable",
                data: e.tableData.data,
                "highlight-current-row": "",
                height: "calc(100% )",
                "default-sort": {
                    prop: "createTime",
                    order: "descending"
                }
            }, {
                default: l(() => [ s(i, {
                    type: "index",
                    label: "序号",
                    "min-width": "100"
                }), s(i, {
                    prop: "name",
                    label: "名称",
                    "min-width": "220",
                    "show-overflow-tooltip": !0
                }), s(i, {
                    prop: "taskName",
                    label: "作业名称",
                    "min-width": "120",
                    "show-overflow-tooltip": !0
                }), s(i, {
                    prop: "taskStatus",
                    "show-overflow-tooltip": !0,
                    label: "状态",
                    width: "200"
                }, {
                    default: l(r => [ r.row.taskStatus === "Started" ? (o(), _(c, {
                        key: 0
                    }, {
                        default: l(() => [ p(" 启动 ") ]),
                        _: 1
                    })) : r.row.taskStatus === "Running" ? (o(), _(c, {
                        key: 1
                    }, {
                        default: l(() => [ p(" 运行 ") ]),
                        _: 1
                    })) : r.row.taskStatus === "Succeeded" ? (o(), _(c, {
                        key: 2,
                        type: "success"
                    }, {
                        default: l(() => [ p(" 成功 ") ]),
                        _: 1
                    })) : r.row.taskStatus === "TaskRunCancelled" ? (o(), _(c, {
                        key: 3,
                        type: "info"
                    }, {
                        default: l(() => [ p(" 取消 ") ]),
                        _: 1
                    })) : r.row.taskStatus === "Pending" ? (o(), _(c, {
                        key: 4,
                        type: "warning",
                        class: "warning"
                    }, {
                        default: l(() => [ p(" 挂起 ") ]),
                        _: 1
                    })) : r.row.taskStatus === "Failed" ? (o(), _(c, {
                        key: 5,
                        type: "danger"
                    }, {
                        default: l(() => [ p(" 失败 ") ]),
                        _: 1
                    })) : (o(), _(c, {
                        key: 6,
                        type: "danger"
                    }, {
                        default: l(() => [ D("span", null, N(r.row.taskStatus) + "：" + N(r.row.message), 1) ]),
                        _: 2
                    }, 1024)) ]),
                    _: 1
                }), s(i, {
                    prop: "namespace",
                    label: "命名空间",
                    "min-width": "120"
                }), s(i, {
                    prop: "createTime",
                    label: "创建时间",
                    "min-width": "200",
                    sortable: !0
                }), s(i, {
                    label: "操作",
                    fixed: "right",
                    width: "180"
                }, {
                    default: l(r => [ s(d, {
                        type: "primary",
                        text: "",
                        onClick: H(t => e.toDetail(r.row), [ "stop" ])
                    }, {
                        default: l(() => [ p("详情") ]),
                        _: 2
                    }, 1032, [ "onClick" ]), s(d, {
                        type: "danger",
                        text: "",
                        onClick: H(t => e.handleDelete(r.row), [ "stop" ])
                    }, {
                        default: l(() => [ p("删除") ]),
                        _: 2
                    }, 1032, [ "onClick" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "data" ]) ]),
            _: 1
        }) ])) ], 64)) : (o(), v("div", z, [ s(T, {
            type: "resource"
        }), s(d, {
            size: "large",
            type: "primary",
            onClick: e.handleAdd
        }, {
            default: l(() => [ s(k, {
                icon: "ep:plus",
                style: {
                    "margin-right": "5px"
                }
            }), p(" 新建 ") ]),
            _: 1
        }, 8, [ "onClick" ]) ])), s(L, null, {
            default: l(() => [ e.toDetailFlag ? (o(), _(C, {
                key: 0,
                "detail-content": e.detailContent,
                onClose: e.closeDetail
            }, null, 8, [ "detail-content", "onClose" ])) : F("", !0) ]),
            _: 1
        }), s(L, null, {
            default: l(() => [ e.toTaskInstanceFlag ? (o(), _(b, {
                key: 0,
                onClose: e.closeTaskInstance
            }, null, 8, [ "onClose" ])) : F("", !0) ]),
            _: 1
        }) ]);
    } ], [ "__scopeId", "data-v-f17968ee" ] ]);
});

export {
    va as __tla,
    E as default
};