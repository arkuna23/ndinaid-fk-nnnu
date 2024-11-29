import {
    ef as de,
    p as Y,
    r as c,
    u as ce,
    U as H,
    e as pe,
    f as ue,
    a0 as fe,
    aT as J,
    o as u,
    c as w,
    F as E,
    t as g,
    k as a,
    l,
    v as p,
    H as j,
    C as O,
    D as M,
    ai as G,
    y as B,
    B as _e,
    _ as ye,
    J as he,
    ad as be,
    ae as ve,
    ab as ge,
    ac as ke,
    O as Ce,
    Q as we,
    aU as Fe,
    P as Ve,
    aQ as Te,
    ch as xe,
    R as De,
    S as Oe,
    __tla as Ue
} from "./index-6c08ea4c.js";

import {
    _ as Pe,
    __tla as Re
} from "./index-71666e05.js";

import {
    _ as Ie,
    __tla as Ee
} from "./index-8b41572c.js";

import {
    _ as Se,
    __tla as $e
} from "./index-1024512a.js";

import {
    a as Le,
    __tla as Ne
} from "./pipelineInstance-0aa13fd5.js";

import qe, {
    __tla as ze
} from "./detail-0c0d61c0.js";

import {
    d as He,
    g as K,
    c as je,
    o as Be,
    __tla as Qe
} from "./pipelineManage-fe91e90c.js";

import {
    g as Je,
    __tla as Me
} from "./taskManage-5f71a641.js";

import {
    g as Ae,
    __tla as We
} from "./templateType-4cbca9bc.js";

import {
    n as Ye,
    __tla as Ge
} from "./file-e038b35d.js";

import {
    _ as Ke
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as Xe,
    b as Ze,
    E as ea,
    __tla as aa
} from "./index-5adb716b.js";

import "./tree-05ea8e09.js";

import {
    __tla as la
} from "./DeptTag-1be092ce.js";

import {
    __tla as ta
} from "./index-ef4d146e.js";

import {
    __tla as oa
} from "./index-da0e4c45.js";

let X, na = Promise.all([ (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Ge;
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
        return ta;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})() ]).then(async () => {
    const Z = {
        name: "PipelineManage",
        components: {
            UploadFilled: de,
            toDetail: qe,
            addPipelineInstance: Le
        },
        setup() {
            const y = Y(), n = c(0), A = ce(), e = c(null), W = c(null), S = c(!1), U = c(!1), F = c(!1), i = c(null), d = H({
                form: {
                    namespace: "",
                    name: ""
                }
            }), P = c(!1), k = H({
                name: "",
                namespace: "",
                resourceType: "",
                syncType: ""
            }), R = pe(() => [ {
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
            } ]), V = c(!1), $ = c([]), L = c([]), Q = c([ {
                value: 1,
                label: "init"
            }, {
                value: 2,
                label: "timing"
            }, {
                value: 3,
                label: "manual"
            } ]), I = H({
                data: []
            }), C = c(!1), T = c(null), h = c(""), D = c(""), x = c([]);
            let b = async () => {
                C.value = !0;
                const o = {
                    ...k
                };
                await K(o).then(s => {
                    if (s.code === 200) {
                        let r = s.data.items;
                        r.forEach(m => {
                            var _;
                            m.name = m.metadata.name, m.version = m.metadata.annotations["neuedu.com/version"], 
                            m.resourceType = m.metadata.labels["neuedu.com/type"], 
                            m.syncType = m.metadata.labels["neuedu.com/syncType"], 
                            m.namespace = m.metadata.namespace, m.createTime = `${(_ = m.metadata.creationTimestamp).substr(0, 4)}-${_.substr(5, 2)}-${_.substr(8, 2)} ${_.substr(11, 2)}:${_.substr(14, 2)}:${_.substr(17, 2)}`;
                        }), r = r.sort((m, _) => Date.parse(_.createTime) - Date.parse(m.createTime)), 
                        I.data = [ ...r ], n.value == 0 && (n.value = I.data.length), 
                        C.value = !1;
                    }
                });
            };
            const N = async () => {
                await Ae().then(o => {
                    o.code === 200 && o.data.records.forEach(s => {
                        var r, f;
                        L.value.push({
                            label: s.name,
                            value: s.code
                        }), (f = (r = R.value[1]) == null ? void 0 : r.options) == null || f.push({
                            label: s.name,
                            value: s.code
                        });
                    });
                }), await Je().then(o => {
                    o.data.forEach(s => {
                        var r, f;
                        $.value.push({
                            value: s.metadata.name,
                            label: s.metadata.name
                        }), (f = (r = R.value[0]) == null ? void 0 : r.options) == null || f.push({
                            value: s.metadata.name,
                            label: s.metadata.name
                        });
                    });
                });
            };
            let q = () => {
                i.value.clearValidate(), d.form.namespace = "", U.value = !1;
            };
            const z = () => {
                i.value.clearValidate(), d.form.namespace = "", d.form.name = "", 
                F.value = !1;
            }, t = c("请选择"), v = H({
                uploadFile: {}
            });
            return ue(() => {
                b(), N();
            }), {
                searchForm: e,
                selectTable: W,
                queryParams: k,
                nameSpaceOptions: $,
                taskTypeOptions: L,
                taskSyncTypeOptions: Q,
                resetForm: () => {
                    e.value.resetFields();
                },
                tableData: I,
                tableloading: C,
                toDetail: async o => {
                    T.value = o, S.value = !0;
                },
                handleEdit: o => {
                    A.push({
                        name: "PipelineConfigTemplate",
                        query: {
                            purpose: "lineEdit",
                            name: o.name,
                            namespace: o.namespace
                        }
                    });
                },
                handleDelete: o => {
                    const s = {
                        name: o.name,
                        namespace: o.namespace
                    };
                    Y().delConfirm("您确定要删除此流水线吗？", "提示").then(async () => {
                        await He(s).then(r => {
                            r.code === 200 && (y.success("删除流水线成功"), b());
                        });
                    });
                },
                toDetailFlag: S,
                close: () => {
                    S.value = !1;
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
                    b();
                },
                toPipelineInstanceFlag: P,
                closePipelineInstance: () => {
                    P.value = !1;
                },
                handleRun: o => {
                    h.value = o.name, D.value = o.namespace, P.value = !0;
                },
                initPage: b,
                getOptionsData: N,
                detailContent: T,
                handleCreate: async () => {
                    i.value.validate(async o => {
                        if (o) {
                            const s = {
                                namespace: d.form.namespace
                            };
                            await je(s).then(r => {
                                r.code === 200 && (y.success("手动同步流水线成功"), q(), 
                                b());
                            });
                        }
                    });
                },
                pipelineName: h,
                pipelineNameSpace: D,
                outPut: () => {
                    i.value.validate(async o => {
                        if (o) {
                            const s = {
                                ...d.form
                            };
                            await Be(s).then(r => {
                                const f = new Blob([ r ]), m = window.URL.createObjectURL(f), _ = window.document.createElement("a");
                                _.href = m, _.download = `${d.form.name}.yml`, _.style.display = "none", 
                                _.click(), URL.revokeObjectURL(m), z();
                            });
                        }
                    });
                },
                editFormRef: i,
                editForm: d,
                closeEdit: q,
                editRules: {
                    namespace: [ {
                        required: !0,
                        message: "命名空间不能为空",
                        trigger: "blur"
                    } ],
                    name: [ {
                        required: !0,
                        message: "名称不能为空",
                        trigger: "blur"
                    } ]
                },
                dialogVisible: U,
                nameOptions: x,
                dialogOutput: F,
                closeOutput: z,
                selectName: async o => {
                    await K({
                        name: "",
                        namespace: o,
                        resourceType: "",
                        syncType: ""
                    }).then(r => {
                        if (r.code === 200) {
                            const f = r.data.items;
                            f.length ? (f.forEach(m => {
                                x.value.push({
                                    label: m.metadata.name,
                                    value: m.metadata.name
                                });
                            }), t.value = "请选择") : (x.value = [], t.value = `\u5728Namespace'${o}'\u4E2D\u672A\u627E\u5230`);
                        }
                    });
                },
                namePlaceholder: t,
                importDialog: V,
                ...fe(v),
                beforeFileUpload: o => (v.uploadFile = o, !1),
                handleImport: () => {
                    i.value.validate(async o => {
                        if (o) {
                            const s = new FormData();
                            s.append("file", v.uploadFile), s.append("namespace", d.form.namespace), 
                            s.append("name", d.form.name), Ye("/ci-processor/v1beta1/pipeline/input", s).then(r => {
                                r.data.code === 200 ? (y.success("导入成功"), b(), v.uploadFile = {}, 
                                V.value = !1) : y.error(r.data.msg);
                            });
                        }
                    });
                },
                closeImport: () => {
                    i.value.clearValidate(), d.form.name = "", d.form.namespace = "", 
                    v.uploadFile = {}, V.value = !1;
                },
                searchList: R,
                searchData: o => {
                    const {
                        name: s,
                        namespace: r,
                        resourceType: f,
                        syncType: m
                    } = o;
                    k.name = s, k.namespace = r, k.resourceType = f, k.syncType = m, 
                    b();
                },
                handleCommand: o => {
                    switch (o) {
                      case "sync":
                        U.value = !0;
                        break;

                      case "import":
                        V.value = !0;
                    }
                },
                originalTotal: n
            };
        }
    }, ee = {
        class: "task-instance neu-tenant-list"
    }, ae = {
        class: "top-box"
    }, le = {
        class: "right btns-box header-btns"
    }, te = {
        class: "table-list"
    }, oe = {
        key: 1,
        class: "page-empty w-100%"
    }, ne = {
        class: "dialog-footer"
    }, se = {
        class: "dialog-footer"
    }, re = (y => (De("data-v-d4847086"), y = y(), Oe(), y))(() => g("div", {
        class: "el-upload__text"
    }, [ p(" 将文件拖到此处，或"), g("em", null, "点击上传") ], -1)), ie = {
        key: 0,
        class: "el-upload__tip icho-file-list neu-color-blue pr-6 neu-ellipse"
    }, me = {
        class: "dialog-footer"
    };
    X = Ke(Z, [ [ "render", function(y, n, A, e, W, S) {
        const U = Se, F = ye, i = he, d = be, P = ve, k = Ie, R = Pe, V = Xe, $ = Ze, L = ea, Q = J("toDetail"), I = J("addPipelineInstance"), C = ge, T = ke, h = Ce, D = we, x = Fe, b = Ve, N = J("UploadFilled"), q = Te, z = xe;
        return u(), w("div", ee, [ e.originalTotal > 0 ? (u(), w(E, {
            key: 0
        }, [ g("div", ae, [ a(U, {
            ref: "ComSearchRef",
            searchList: e.searchList,
            keywordsInfo: {
                label: "名称",
                key: "name"
            },
            onHandleSearch: e.searchData,
            class: "left"
        }, null, 8, [ "searchList", "onHandleSearch" ]), g("div", le, [ a(i, {
            type: "primary",
            size: "large",
            class: "add",
            onClick: n[0] || (n[0] = t => e.dialogVisible = !0)
        }, {
            default: l(() => [ a(F, {
                icon: "ep:refresh",
                style: {
                    "margin-right": "5px"
                }
            }), p(" 同步 ") ]),
            _: 1
        }), a(i, {
            type: "primary",
            size: "large",
            plain: "",
            onClick: n[1] || (n[1] = t => e.importDialog = !0)
        }, {
            default: l(() => [ a(F, {
                icon: "svg-icon:import",
                style: {
                    "margin-right": "5px"
                }
            }), p("导入 ") ]),
            _: 1
        }), a(i, {
            type: "primary",
            plain: "",
            size: "large",
            onClick: n[2] || (n[2] = t => e.dialogOutput = !0)
        }, {
            default: l(() => [ a(F, {
                icon: "svg-icon:export",
                style: {
                    "margin-right": "5px"
                }
            }), p("导出 ") ]),
            _: 1
        }) ]) ]), g("div", te, [ a(k, {
            class: "center-box",
            "no-pager": !1,
            "outer-height": -40
        }, {
            default: l(() => [ a(P, {
                class: "common-table",
                ref: "selectTable",
                data: e.tableData.data,
                "highlight-current-row": "",
                height: "100%",
                "default-sort": {
                    prop: "createTime",
                    order: "descending"
                }
            }, {
                default: l(() => [ a(d, {
                    type: "index",
                    label: "序号",
                    "min-width": "100",
                    "show-overflow-tooltip": !0
                }), a(d, {
                    prop: "name",
                    label: "名称",
                    "min-width": "140"
                }), a(d, {
                    prop: "resourceType",
                    label: "类型",
                    "min-width": "140"
                }), a(d, {
                    prop: "syncType",
                    label: "同步类型",
                    "min-width": "140"
                }), a(d, {
                    prop: "namespace",
                    label: "命名空间",
                    "min-width": "140"
                }), a(d, {
                    prop: "createTime",
                    label: "创建时间",
                    "min-width": "200",
                    sortable: ""
                }), a(d, {
                    label: "操作",
                    fixed: "right",
                    width: "300"
                }, {
                    default: l(t => [ a(i, {
                        type: "primary",
                        text: "",
                        onClick: j(v => e.toDetail(t.row), [ "stop" ])
                    }, {
                        default: l(() => [ p("详情") ]),
                        _: 2
                    }, 1032, [ "onClick" ]), a(i, {
                        type: "primary",
                        text: "",
                        onClick: j(v => e.handleEdit(t.row), [ "stop" ])
                    }, {
                        default: l(() => [ p("编辑") ]),
                        _: 2
                    }, 1032, [ "onClick" ]), a(i, {
                        type: "primary",
                        text: "",
                        onClick: j(v => e.handleRun(t.row), [ "stop" ])
                    }, {
                        default: l(() => [ p("运行") ]),
                        _: 2
                    }, 1032, [ "onClick" ]), a(i, {
                        type: "danger",
                        text: "",
                        onClick: j(v => e.handleDelete(t.row), [ "stop" ])
                    }, {
                        default: l(() => [ p("删除") ]),
                        _: 2
                    }, 1032, [ "onClick" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "data" ]) ]),
            _: 1
        }) ]) ], 64)) : (u(), w("div", oe, [ a(R, {
            type: "resource"
        }), a(L, {
            teleported: !1,
            trigger: "hover",
            class: "empty-dropdown",
            onCommand: e.handleCommand
        }, {
            dropdown: l(() => [ a($, null, {
                default: l(() => [ a(V, {
                    command: "sync"
                }, {
                    default: l(() => [ p("同步") ]),
                    _: 1
                }), a(V, {
                    command: "import"
                }, {
                    default: l(() => [ p("导入") ]),
                    _: 1
                }) ]),
                _: 1
            }) ]),
            default: l(() => [ a(i, {
                type: "primary",
                size: "large"
            }, {
                default: l(() => [ p(" 操作 "), a(F, {
                    class: "el-icon--right",
                    icon: "ep:arrow-down",
                    style: {
                        "margin-left": "5px"
                    }
                }) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "onCommand" ]) ])), a(G, null, {
            default: l(() => [ e.toDetailFlag ? (u(), O(Q, {
                key: 0,
                "task-info": e.detailContent,
                onClose: e.close
            }, null, 8, [ "task-info", "onClose" ])) : M("", !0) ]),
            _: 1
        }), a(G, null, {
            default: l(() => [ e.toPipelineInstanceFlag ? (u(), O(I, {
                key: 0,
                name: e.pipelineName,
                namespace: e.pipelineNameSpace,
                onClose: e.closePipelineInstance
            }, null, 8, [ "name", "namespace", "onClose" ])) : M("", !0) ]),
            _: 1
        }), a(x, {
            modelValue: e.dialogVisible,
            "onUpdate:modelValue": n[4] || (n[4] = t => e.dialogVisible = t),
            width: "460px",
            onClose: e.closeEdit,
            "close-on-click-modal": !1,
            title: "手动同步创建pipeline"
        }, {
            footer: l(() => [ g("div", ne, [ a(i, {
                onClick: e.closeEdit
            }, {
                default: l(() => [ p("取消") ]),
                _: 1
            }, 8, [ "onClick" ]), a(i, {
                type: "primary",
                onClick: e.handleCreate
            }, {
                default: l(() => [ p("开始同步") ]),
                _: 1
            }, 8, [ "onClick" ]) ]) ]),
            default: l(() => [ a(D, {
                ref: "editFormRef",
                model: e.editForm.form,
                rules: e.editRules,
                "label-width": "84px",
                class: "neu"
            }, {
                default: l(() => [ a(h, {
                    label: "命名空间",
                    prop: "namespace"
                }, {
                    default: l(() => [ a(T, {
                        modelValue: e.editForm.form.namespace,
                        "onUpdate:modelValue": n[3] || (n[3] = t => e.editForm.form.namespace = t),
                        placeholder: "请选择",
                        filterable: ""
                    }, {
                        default: l(() => [ (u(!0), w(E, null, B(e.nameSpaceOptions, t => (u(), 
                        O(C, {
                            key: t.value,
                            label: t.label,
                            value: t.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "model", "rules" ]) ]),
            _: 1
        }, 8, [ "modelValue", "onClose" ]), a(x, {
            modelValue: e.dialogOutput,
            "onUpdate:modelValue": n[7] || (n[7] = t => e.dialogOutput = t),
            width: "460px",
            onClose: e.closeOutput,
            "close-on-click-modal": !1,
            title: "导出pipeline"
        }, {
            footer: l(() => [ g("div", se, [ a(i, {
                onClick: e.closeOutput
            }, {
                default: l(() => [ p("取消") ]),
                _: 1
            }, 8, [ "onClick" ]), a(i, {
                type: "primary",
                onClick: e.outPut
            }, {
                default: l(() => [ p("开始导出") ]),
                _: 1
            }, 8, [ "onClick" ]) ]) ]),
            default: l(() => [ a(D, {
                ref: "editFormRef",
                model: e.editForm.form,
                rules: e.editRules,
                "label-width": "84px",
                class: "neu"
            }, {
                default: l(() => [ a(h, {
                    label: "命名空间",
                    prop: "namespace"
                }, {
                    default: l(() => [ a(T, {
                        modelValue: e.editForm.form.namespace,
                        "onUpdate:modelValue": n[5] || (n[5] = t => e.editForm.form.namespace = t),
                        placeholder: "请选择",
                        filterable: "",
                        onChange: e.selectName
                    }, {
                        default: l(() => [ (u(!0), w(E, null, B(e.nameSpaceOptions, t => (u(), 
                        O(C, {
                            key: t.value,
                            label: t.label,
                            value: t.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue", "onChange" ]) ]),
                    _: 1
                }), a(h, {
                    label: "名称",
                    prop: "name"
                }, {
                    default: l(() => [ a(T, {
                        modelValue: e.editForm.form.name,
                        "onUpdate:modelValue": n[6] || (n[6] = t => e.editForm.form.name = t),
                        placeholder: e.namePlaceholder,
                        filterable: ""
                    }, {
                        default: l(() => [ (u(!0), w(E, null, B(e.nameOptions, t => (u(), 
                        O(C, {
                            key: t.value,
                            label: t.label,
                            value: t.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue", "placeholder" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "model", "rules" ]) ]),
            _: 1
        }, 8, [ "modelValue", "onClose" ]), a(x, {
            modelValue: e.importDialog,
            "onUpdate:modelValue": n[11] || (n[11] = t => e.importDialog = t),
            width: "480px",
            onClose: e.closeImport,
            "close-on-click-modal": !1,
            title: "导入"
        }, {
            footer: l(() => [ g("div", me, [ a(i, {
                onClick: e.closeImport
            }, {
                default: l(() => [ p("取消") ]),
                _: 1
            }, 8, [ "onClick" ]), a(i, {
                type: "primary",
                onClick: e.handleImport
            }, {
                default: l(() => [ p("开始导入") ]),
                _: 1
            }, 8, [ "onClick" ]) ]) ]),
            default: l(() => [ a(D, {
                ref: "editFormRef",
                model: e.editForm.form,
                rules: e.editRules,
                "label-width": "84px",
                class: "neu"
            }, {
                default: l(() => [ a(h, {
                    label: "命名空间",
                    prop: "namespace"
                }, {
                    default: l(() => [ a(T, {
                        modelValue: e.editForm.form.namespace,
                        "onUpdate:modelValue": n[8] || (n[8] = t => e.editForm.form.namespace = t),
                        placeholder: "请选择",
                        filterable: ""
                    }, {
                        default: l(() => [ (u(!0), w(E, null, B(e.nameSpaceOptions, t => (u(), 
                        O(C, {
                            key: t.value,
                            label: t.label,
                            value: t.value
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), a(h, {
                    label: "名称",
                    prop: "name"
                }, {
                    default: l(() => [ a(b, {
                        modelValue: e.editForm.form.name,
                        "onUpdate:modelValue": n[9] || (n[9] = t => e.editForm.form.name = t),
                        placeholder: "请输入"
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), a(h, {
                    label: "yaml",
                    required: "",
                    class: "el-form-item-upload"
                }, {
                    default: l(() => [ a(z, {
                        drag: "",
                        action: "#",
                        multiple: !1,
                        accept: ".yml",
                        "before-upload": e.beforeFileUpload
                    }, {
                        tip: l(() => [ y.uploadFile.name ? (u(), w("div", ie, [ p(_e(y.uploadFile.name || "") + " ", 1), g("i", {
                            class: "el-icon-close",
                            onClick: n[10] || (n[10] = t => y.uploadFile = {})
                        }) ])) : M("", !0) ]),
                        default: l(() => [ a(q, {
                            size: 67
                        }, {
                            default: l(() => [ a(N) ]),
                            _: 1
                        }), re ]),
                        _: 1
                    }, 8, [ "before-upload" ]) ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "model", "rules" ]) ]),
            _: 1
        }, 8, [ "modelValue", "onClose" ]) ]);
    } ], [ "__scopeId", "data-v-d4847086" ] ]);
});

export {
    na as __tla,
    X as default
};