import {
    f as O,
    U as b,
    r as z,
    w as h,
    o as i,
    c as k,
    k as r,
    l as m,
    t as y,
    F,
    y as v,
    B as g,
    C as I,
    v as R,
    D as T,
    P,
    O as A,
    ab as J,
    ac as N,
    J as Q,
    Q as $,
    R as q,
    S as G,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    E as K,
    __tla as L
} from "./el-drawer-fca4d971.js";

import {
    _ as M
} from "./_plugin-vue_export-helper-1b428a4d.js";

let x, W = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    const E = {
        name: "EditTask",
        props: {
            showStatus: {
                type: Boolean,
                default: !1
            },
            taskInfo: {
                type: Object,
                default: () => ({})
            },
            curentItem: {
                type: Object,
                default: () => ({})
            },
            toDo: {
                type: String,
                default: "stageTask"
            },
            workVal: {
                type: Object,
                default: () => ({})
            }
        },
        setup(a, s) {
            O(() => {
                a.toDo === "editTask" && (t.form = a.taskInfo);
            });
            const f = {
                name: "",
                params: [],
                taskRef: {
                    kind: "",
                    name: ""
                },
                workspaces: [],
                runAfter: "",
                timeout: 0
            }, e = b({});
            let t = b({
                form: {
                    ...f
                }
            });
            const _ = b({
                val: []
            }), p = z(!1);
            h(() => a.showStatus, o => {
                p.value = o, o === !0 ? a.toDo === "onlystage" ? d() : a.toDo === "stageTask" ? (d(), 
                t.form.name = "") : a.toDo === "editTask" && (t.form = a.taskInfo) : t.form = {
                    ...f
                };
            }, {
                deep: !0
            });
            const d = () => {
                t.form.taskRef.name = a.curentItem.metadata.name, t.form.taskRef.kind = a.curentItem.kind;
                const o = [];
                a.curentItem.spec.workspaces.forEach(n => {
                    o.push({
                        name: n.name,
                        workspace: ""
                    });
                }), t.form.workspaces = o;
                const u = [];
                a.curentItem.spec.params.forEach(n => {
                    u.push({
                        name: n.name,
                        value: ""
                    });
                }), t.form.params = u;
            };
            return h(() => p.value, o => {
                s.emit("update:showStatus", o);
            }, {
                deep: !0
            }), h(() => a.taskInfo, () => {
                t.form = a.taskInfo;
            }, {
                deep: !0
            }), h(() => a.curentItem, o => {
                t.form.taskRef.name = o.metadata.name, t.form.taskRef.kind = o.kind;
                const u = [];
                a.curentItem.spec.workspaces.forEach(w => {
                    u.push({
                        name: w.name,
                        workspace: ""
                    });
                }), t.form.workspaces = u;
                const n = [];
                a.curentItem.spec.params.forEach(w => {
                    n.push({
                        name: w.name,
                        value: ""
                    });
                }), t.form.params = n;
            }, {
                deep: !0
            }), h(() => a.workVal, o => {
                _.val = o;
            }, {
                deep: !0
            }), {
                editForm: t,
                editRules: e,
                addTask: () => {
                    const o = t.form;
                    o.timeout = `${t.form.timeout}m`, s.emit("addNewTask", o);
                },
                saveEdit: () => {
                    s.emit("editTaskFunc", t.form);
                },
                goTarget: o => {
                    document.getElementById(o).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                },
                drawerVisible: p,
                workspaceVal: _,
                paramsFormate: d
            };
        }
    }, U = {
        class: "drawerBox"
    }, D = {
        id: "targetBox",
        style: {
            "padding-right": "20px"
        }
    }, C = {
        class: "description"
    }, B = (a => (q("data-v-764ec891"), a = a(), G(), a))(() => y("span", {
        class: "description"
    }, "TaskRun 的超时（分钟）", -1)), S = {
        class: "description"
    };
    x = M(E, [ [ "render", function(a, s, f, e, t, _) {
        const p = P, d = A, o = J, u = N, n = Q, w = $, j = K;
        return i(), k("section", U, [ r(j, {
            modelValue: e.drawerVisible,
            "onUpdate:modelValue": s[5] || (s[5] = l => e.drawerVisible = l),
            title: "编辑",
            size: "480px",
            direction: "rtl",
            "custom-class": "demo-drawer"
        }, {
            default: m(() => [ y("div", D, [ r(w, {
                ref: "editFormRef",
                model: e.editForm.form,
                rules: e.editRules,
                "label-width": "100px",
                "label-position": "left",
                style: {
                    "margin-left": "20px"
                }
            }, {
                default: m(() => [ r(d, {
                    label: "作业模板名称",
                    prop: "taskRef"
                }, {
                    default: m(() => [ r(p, {
                        modelValue: e.editForm.form.taskRef.name,
                        "onUpdate:modelValue": s[0] || (s[0] = l => e.editForm.form.taskRef.name = l),
                        placeholder: "请输入",
                        disabled: ""
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), r(d, {
                    label: "作业模板类型",
                    prop: "taskRef"
                }, {
                    default: m(() => [ r(p, {
                        modelValue: e.editForm.form.taskRef.kind,
                        "onUpdate:modelValue": s[1] || (s[1] = l => e.editForm.form.taskRef.kind = l),
                        placeholder: "请输入",
                        disabled: ""
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), r(d, {
                    label: "名称",
                    prop: "name"
                }, {
                    default: m(() => [ r(p, {
                        modelValue: e.editForm.form.name,
                        "onUpdate:modelValue": s[2] || (s[2] = l => e.editForm.form.name = l),
                        placeholder: "请输入"
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }), r(d, {
                    label: "任务参数",
                    prop: "params"
                }, {
                    default: m(() => [ (i(!0), k(F, null, v(e.editForm.form.params, (l, V) => (i(), 
                    k("div", {
                        key: l,
                        prop: "params"
                    }, [ y("p", C, g(l.name), 1), r(p, {
                        modelValue: e.editForm.form.params[V].value,
                        "onUpdate:modelValue": c => e.editForm.form.params[V].value = c,
                        size: "small",
                        placeholder: "请输入",
                        clearable: ""
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]))), 128)) ]),
                    _: 1
                }), r(d, {
                    label: "超时",
                    prop: "timeout"
                }, {
                    default: m(() => [ r(p, {
                        modelValue: e.editForm.form.timeout,
                        "onUpdate:modelValue": s[3] || (s[3] = l => e.editForm.form.timeout = l),
                        placeholder: "请输入"
                    }, null, 8, [ "modelValue" ]), B ]),
                    _: 1
                }), r(d, {
                    label: "工作空间",
                    prop: "workspaces"
                }, {
                    default: m(() => [ (i(!0), k(F, null, v(e.editForm.form.workspaces, (l, V) => (i(), 
                    k("div", {
                        key: l,
                        prop: "params",
                        style: {
                            "margin-top": "5px"
                        }
                    }, [ y("p", S, g(l.name), 1), r(u, {
                        modelValue: e.editForm.form.workspaces[V].workspace,
                        "onUpdate:modelValue": c => e.editForm.form.workspaces[V].workspace = c,
                        placeholder: "请选择"
                    }, {
                        default: m(() => [ (i(!0), k(F, null, v(e.workspaceVal.val, c => (i(), 
                        I(o, {
                            key: c + "",
                            label: c.name,
                            value: c.name
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]))), 128)) ]),
                    _: 1
                }), f.toDo === "editTask" ? (i(), I(n, {
                    key: 0,
                    type: "primary",
                    class: "search",
                    style: {
                        width: "120px"
                    },
                    onClick: e.saveEdit
                }, {
                    default: m(() => [ R(" 确定修改 ") ]),
                    _: 1
                }, 8, [ "onClick" ])) : T("", !0), f.toDo === "stageTask" || f.toDo === "onlystage" ? (i(), 
                I(n, {
                    key: 1,
                    type: "primary",
                    class: "search",
                    style: {
                        width: "120px"
                    },
                    disabled: e.editForm.form.name === "",
                    onClick: e.addTask
                }, {
                    default: m(() => [ R(" 创建 ") ]),
                    _: 1
                }, 8, [ "disabled", "onClick" ])) : T("", !0), r(n, {
                    style: {
                        width: "120px"
                    },
                    onClick: s[4] || (s[4] = l => e.drawerVisible = !1)
                }, {
                    default: m(() => [ R(" 取消 ") ]),
                    _: 1
                }) ]),
                _: 1
            }, 8, [ "model", "rules" ]) ]) ]),
            _: 1
        }, 8, [ "modelValue" ]) ]);
    } ], [ "__scopeId", "data-v-764ec891" ] ]);
});

export {
    W as __tla,
    x as default
};