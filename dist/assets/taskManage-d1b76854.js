import {
    p as z,
    r as i,
    U as E,
    f as N,
    aT as W,
    o as y,
    c as g,
    F as M,
    t as $,
    k as a,
    l as o,
    v as b,
    H as U,
    D as L,
    C as O,
    ai as X,
    y as q,
    _ as Z,
    J as ee,
    ad as ae,
    ae as te,
    ab as le,
    ac as se,
    O as re,
    Q as oe,
    aU as ne,
    __tla as ie
} from "./index-6c08ea4c.js";

import {
    _ as P,
    __tla as ce
} from "./index-da0e4c45.js";

import {
    _ as me,
    __tla as de
} from "./index-71666e05.js";

import {
    _ as ue,
    __tla as pe
} from "./index-8b41572c.js";

import {
    _ as ye,
    __tla as _e
} from "./index-1024512a.js";

import {
    d as he,
    i as fe,
    a as ge,
    g as be,
    c as ve,
    __tla as ke
} from "./taskManage-5f71a641.js";

import {
    g as Te,
    __tla as we
} from "./templateType-4cbca9bc.js";

import De, {
    __tla as Ce
} from "./detail-0c0d61c0.js";

import {
    _ as Fe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./tree-05ea8e09.js";

import {
    __tla as xe
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ve
} from "./index-ef4d146e.js";

let Y, $e = Promise.all([ (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})() ]).then(async () => {
    const I = {
        class: "task-instance"
    }, A = {
        key: 0,
        class: "neu-tenant-list"
    }, J = {
        class: "top-box"
    }, Q = {
        class: "right btns-box header-btns"
    }, j = {
        class: "table-list"
    }, B = {
        key: 1,
        class: "page-empty w-100%"
    }, G = {
        class: "dialog-footer"
    };
    Y = Fe({
        name: "TaskManage",
        components: {
            toDetail: De,
            YamlEditor: P
        },
        setup() {
            const v = z(), d = i(null), R = i(null), t = i(null), D = i(!1), C = i(!1), _ = E({
                form: {
                    namespace: "",
                    resourceType: ""
                }
            }), u = E({
                name: "",
                namespace: "",
                resourceType: "",
                syncType: ""
            }), m = i([ {
                type: "list",
                label: "命名空间",
                key: "namespace",
                default: "",
                options: []
            }, {
                type: "list",
                label: "类型",
                key: "resourceType",
                default: "",
                options: []
            }, {
                type: "list",
                label: "同步类型",
                key: "syncType",
                default: "",
                options: [ {
                    value: "init",
                    label: "init"
                }, {
                    value: "timing",
                    label: "timing"
                }, {
                    value: "manual",
                    label: "manual"
                } ]
            } ]), c = i([]), F = i([]), S = i([ {
                value: 1,
                label: "init"
            }, {
                value: 2,
                label: "timing"
            }, {
                value: 3,
                label: "manual"
            } ]), k = E({
                data: []
            }), T = i(0), h = i(!1), w = i(null), f = () => {
                t.value.clearValidate(), _.form = {
                    namespace: "",
                    resourceType: ""
                }, D.value = !1;
            }, x = i(null);
            let p = async () => {
                h.value = !0;
                const l = {
                    ...u
                };
                await ge(l).then(e => {
                    if (e.code === 200) {
                        let r = e.data.items;
                        r.forEach(n => {
                            n.name = n.metadata.name, n.version = n.metadata.annotations["neuedu.com/version"], 
                            n.resourceType = n.metadata.labels["neuedu.com/type"], 
                            n.syncType = n.metadata.labels["neuedu.com/syncType"], 
                            n.namespace = n.metadata.namespace, n.createTime = s(n.metadata.creationTimestamp);
                        }), r = r.sort((n, K) => Date.parse(K.createTime) - Date.parse(n.createTime)), 
                        k.data = [ ...r ], T.value == 0 && (T.value = k.data.length), 
                        h.value = !1;
                    }
                });
            };
            const V = async () => {
                await Te({
                    type: 1
                }).then(l => {
                    l.code === 200 && l.data.records.forEach(e => {
                        var r;
                        F.value.push({
                            label: e.name,
                            value: e.code
                        }), (r = m.value[1]) == null || r.options.push({
                            label: e.name,
                            value: e.code
                        });
                    });
                }), await be().then(l => {
                    l.data.forEach(e => {
                        var r;
                        c.value.push({
                            value: e.metadata.name,
                            label: e.metadata.name
                        }), (r = m.value[0]) == null || r.options.push({
                            value: e.metadata.name,
                            label: e.metadata.name
                        });
                    });
                });
            };
            let s = l => {
                const e = new Date(l);
                return `${e.getFullYear()}-${e.getMonth() + 1 < 10 ? `0${e.getMonth() + 1}` : e.getMonth() + 1}-${e.getDate() < 10 ? `0${e.getDate()}` : e.getDate()} ${e.getHours() < 10 ? `0${e.getHours()}` : e.getHours()}:${e.getMinutes() < 10 ? `0${e.getMinutes()}` : e.getMinutes()}:${e.getSeconds() < 10 ? `0${e.getSeconds()}` : e.getSeconds()}`;
            };
            return N(() => {
                p(), V();
            }), {
                initPage: p,
                searchForm: d,
                selectTable: R,
                queryParams: u,
                nameSpaceOptions: c,
                taskTypeOptions: F,
                taskSyncTypeOptions: S,
                resetForm: () => {
                    d.value.resetFields();
                },
                tableData: k,
                tableloading: h,
                toDetail: async l => {
                    w.value = l, C.value = !0;
                },
                handleDelete: l => {
                    const e = {
                        namespace: l.namespace,
                        name: l.name
                    };
                    z().delConfirm("您确定要删除此task吗？", "提示").then(async () => {
                        await he(e).then(r => {
                            r.code === 200 && (v.success("删除task成功"), p());
                        });
                    });
                },
                editFormRef: t,
                dialogVisible: D,
                editForm: _,
                closeEdit: f,
                handleAdd: () => {
                    D.value = !0;
                },
                toDetailFlag: C,
                close: () => {
                    C.value = !1;
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
                    p();
                },
                editRules: {
                    namespace: [ {
                        required: !0,
                        message: "命名空间不能为空",
                        trigger: "blur"
                    } ]
                },
                yamlEditorRef: x,
                handleSubmit: () => {
                    const l = new File([ x.value.textarea ], "test.yml", {
                        type: ""
                    }), e = new FormData();
                    e.append("file", l), e.append("namespace", _.form.namespace), 
                    e.append("resourceType", _.form.resourceType), fe(e).then(r => {
                        r.code === 200 && (v.success("创建成功"), f(), p());
                    });
                },
                handleCreate: async () => {
                    await ve().then(l => {
                        l.code === 200 && (v.success("同步task成功"), p());
                    });
                },
                forMatterTime: s,
                getOptionsData: V,
                detailContent: w,
                sortDate: (l, e, r) => Date.parse(l[r]) > Date.parse(e[r]) ? 1 : -1,
                searchList: m,
                searchData: l => {
                    const {
                        name: e,
                        namespace: r,
                        resourceType: H,
                        syncType: n
                    } = l;
                    u.name = e, u.namespace = r, u.resourceType = H, u.syncType = n, 
                    p();
                },
                originalTotal: T
            };
        }
    }, [ [ "render", function(v, d, R, t, D, C) {
        const _ = ye, u = Z, m = ee, c = ae, F = te, S = ue, k = me, T = W("toDetail"), h = le, w = se, f = re, x = P, p = oe, V = ne;
        return y(), g("div", I, [ t.originalTotal > 0 ? (y(), g(M, {
            key: 0
        }, [ t.toDetailFlag ? L("", !0) : (y(), g("div", A, [ $("div", J, [ a(_, {
            ref: "ComSearchRef",
            searchList: t.searchList,
            keywordsInfo: {
                label: "名称",
                key: "name"
            },
            onHandleSearch: t.searchData,
            class: "left"
        }, null, 8, [ "searchList", "onHandleSearch" ]), $("div", Q, [ a(m, {
            type: "primary",
            size: "large",
            class: "add",
            onClick: t.handleCreate
        }, {
            default: o(() => [ a(u, {
                icon: "ep:refresh",
                style: {
                    "margin-right": "5px"
                }
            }), b("同步 ") ]),
            _: 1
        }, 8, [ "onClick" ]) ]) ]), $("div", j, [ a(S, {
            class: "center-box",
            "no-pager": !1,
            "outer-height": -40
        }, {
            default: o(() => [ a(F, {
                class: "common-table",
                ref: "selectTable",
                data: t.tableData.data,
                "highlight-current-row": "",
                "default-sort": {
                    prop: "createTime",
                    order: "descending"
                },
                height: "calc(100% )"
            }, {
                default: o(() => [ a(c, {
                    type: "index",
                    label: "序号",
                    "min-width": "100",
                    "show-overflow-tooltip": !0
                }), a(c, {
                    prop: "name",
                    label: "名称",
                    "min-width": "180",
                    "show-overflow-tooltip": !0
                }), a(c, {
                    prop: "version",
                    label: "版本号",
                    "min-width": "140"
                }), a(c, {
                    prop: "resourceType",
                    label: "类型",
                    "min-width": "150"
                }), a(c, {
                    prop: "syncType",
                    label: "同步类型",
                    "min-width": "120"
                }), a(c, {
                    prop: "namespace",
                    label: "命名空间",
                    "min-width": "150"
                }), a(c, {
                    prop: "createTime",
                    label: "创建时间",
                    "min-width": "200",
                    sortable: !0
                }), a(c, {
                    label: "操作",
                    fixed: "right",
                    width: "160"
                }, {
                    default: o(s => [ a(m, {
                        type: "primary",
                        text: "",
                        onClick: U(l => t.toDetail(s.row), [ "stop" ])
                    }, {
                        default: o(() => [ b("详情") ]),
                        _: 2
                    }, 1032, [ "onClick" ]), a(m, {
                        type: "danger",
                        text: "",
                        onClick: U(l => t.handleDelete(s.row), [ "stop" ])
                    }, {
                        default: o(() => [ b("删除") ]),
                        _: 2
                    }, 1032, [ "onClick" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "data" ]) ]),
            _: 1
        }) ]) ])) ], 64)) : (y(), g("div", B, [ a(k, {
            type: "resource"
        }), a(m, {
            type: "primary",
            size: "large",
            class: "add",
            onClick: t.handleCreate
        }, {
            default: o(() => [ a(u, {
                icon: "ep:refresh",
                style: {
                    "margin-right": "5px"
                }
            }), b("同步 ") ]),
            _: 1
        }, 8, [ "onClick" ]) ])), a(X, null, {
            default: o(() => [ t.toDetailFlag ? (y(), O(T, {
                key: 0,
                "task-info": t.detailContent,
                onClose: t.close
            }, null, 8, [ "task-info", "onClose" ])) : L("", !0) ]),
            _: 1
        }), a(V, {
            modelValue: t.dialogVisible,
            "onUpdate:modelValue": d[2] || (d[2] = s => t.dialogVisible = s),
            width: "800px",
            onClose: t.closeEdit,
            "close-on-click-modal": !1,
            title: "作业导入"
        }, {
            footer: o(() => [ $("div", G, [ a(m, {
                size: "large",
                onClick: t.closeEdit
            }, {
                default: o(() => [ b("取消") ]),
                _: 1
            }, 8, [ "onClick" ]), a(m, {
                type: "primary",
                size: "large",
                onClick: t.handleSubmit
            }, {
                default: o(() => [ b("新建") ]),
                _: 1
            }, 8, [ "onClick" ]) ]) ]),
            default: o(() => [ a(p, {
                ref: "editFormRef",
                model: t.editForm.form,
                rules: t.editRules,
                "label-width": "84px",
                size: "large"
            }, {
                default: o(() => [ a(f, {
                    label: "命名空间",
                    prop: "namespace"
                }, {
                    default: o(() => [ a(w, {
                        modelValue: t.editForm.form.namespace,
                        "onUpdate:modelValue": d[0] || (d[0] = s => t.editForm.form.namespace = s),
                        placeholder: "请选择",
                        filterable: ""
                    }, {
                        default: o(() => [ (y(!0), g(M, null, q(t.nameSpaceOptions, s => (y(), 
                        O(h, {
                            key: s.value,
                            label: s.label,
                            value: s.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), a(f, {
                    label: "作业类型",
                    prop: "namespace"
                }, {
                    default: o(() => [ a(w, {
                        modelValue: t.editForm.form.resourceType,
                        "onUpdate:modelValue": d[1] || (d[1] = s => t.editForm.form.resourceType = s),
                        placeholder: "请选择",
                        filterable: ""
                    }, {
                        default: o(() => [ (y(!0), g(M, null, q(t.taskTypeOptions, s => (y(), 
                        O(h, {
                            key: s.value,
                            label: s.label,
                            value: s.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), a(f, {
                    label: "yaml",
                    prop: "yaml",
                    required: ""
                }, {
                    default: o(() => [ a(x, {
                        ref: "yamlEditorRef",
                        "code-string": v.code
                    }, null, 8, [ "code-string" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "model", "rules" ]) ]),
            _: 1
        }, 8, [ "modelValue", "onClose" ]) ]);
    } ], [ "__scopeId", "data-v-60938caa" ] ]);
});

export {
    $e as __tla,
    Y as default
};