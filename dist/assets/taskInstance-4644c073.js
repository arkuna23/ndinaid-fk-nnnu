import {
    dU as j,
    p as H,
    r as _,
    U as K,
    f as Y,
    aT as L,
    o as p,
    c as i,
    t as u,
    k as t,
    l as r,
    v as U,
    F as b,
    y as V,
    C as F,
    D as A,
    B as R,
    aI as W,
    aQ as X,
    P as Z,
    O as ee,
    ab as ae,
    ac as le,
    av as te,
    aw as oe,
    J as se,
    Q as re,
    R as me,
    S as ne,
    __tla as pe
} from "./index-6c08ea4c.js";

import {
    g as ce,
    a as ie,
    __tla as ue
} from "./taskManage-5f71a641.js";

import {
    f as de,
    __tla as fe
} from "./taskInstance-9258951c.js";

import {
    _ as ke
} from "./_plugin-vue_export-helper-1b428a4d.js";

let z, ge = Promise.all([ (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})() ]).then(async () => {
    const B = {
        name: "TaskInstance",
        components: {
            Back: j
        },
        emits: [ "close" ],
        setup(y, n) {
            const $ = H(), a = _(null), x = _([]), w = _([]), f = _([]), h = _("请选择"), k = () => ({
                name: "",
                namespace: "",
                task: "",
                timeout: "60",
                serviceAccount: "",
                params: [],
                workspaces: []
            }), o = K({
                form: {
                    name: "",
                    namespace: "",
                    task: "",
                    timeout: "60",
                    serviceAccount: "",
                    params: [],
                    workspaces: []
                }
            });
            return Y(() => {
                ce().then(m => {
                    m.data.forEach(l => {
                        x.value.push({
                            value: l.metadata.name,
                            label: l.metadata.name
                        });
                    });
                });
            }), {
                goBack: () => {
                    n.emit("close");
                },
                editFormRef: a,
                editForm: o,
                initEditForm: k,
                editRules: {
                    name: [ {
                        required: !0,
                        message: "名称不能为空",
                        trigger: "blur"
                    }, {
                        pattern: /^[^\s]+$/,
                        message: "不允许输入空格",
                        trigger: "blur"
                    }, {
                        pattern: /^[a-z0-9][a-z0-9-]+[a-z0-9]$/,
                        message: "名称以数字或小写字母开头结尾，且只能包含小写字母、数字，以及 -",
                        trigger: "blur"
                    }, {
                        max: 63,
                        message: "最多 63 个字符",
                        trigger: "blur"
                    } ],
                    namespace: [ {
                        required: !0,
                        message: "命名空间不能为空",
                        trigger: "blur"
                    } ],
                    task: [ {
                        required: !0,
                        message: "作业名称不能为空",
                        trigger: "blur"
                    } ],
                    serviceAccount: [ {
                        pattern: /^[^\s]+$/,
                        message: "不允许输入空格",
                        trigger: "blur"
                    }, {
                        pattern: /^[a-z0-9][a-z0-9-]+[a-z0-9]$/,
                        message: "serviceAccount以数字或小写字母开头结尾，且只能包含小写字母、数字，以及 -",
                        trigger: "blur"
                    }, {
                        max: 63,
                        message: "最多 63 个字符",
                        trigger: "blur"
                    } ]
                },
                nameSpaceOptions: x,
                taskOptions: w,
                taskParams: f,
                workspaceOptions: [ "configMap", "secret", "emptyDir", "persistentVolumeClaim" ],
                taskPlaceholder: h,
                namespaceChange: m => {
                    m ? ie({
                        namespace: m
                    }).then(l => {
                        if (l.code === 200) {
                            const c = l.data.items;
                            c.forEach(g => {
                                w.value.push({
                                    value: g.metadata.name,
                                    label: g.metadata.name
                                });
                            }), c.length ? (f.value = c, h.value = "请选择") : (f.value = [], 
                            h.value = `\u5728Namespace'${m}'\u4E2D\u672A\u627E\u5230Task`);
                        }
                    }) : (w.value = [], h.value = "请选择");
                },
                taskChange: m => {
                    m ? (o.form.params = f.value.filter(l => l.metadata.name === m)[0].spec.params.map(l => ({
                        name: l.name || "",
                        value: l.default || "",
                        description: l.description || "",
                        optional: l.optional || !1
                    })), o.form.workspaces = f.value.filter(l => l.metadata.name === m)[0].spec.workspaces.map(l => ({
                        name: l.name || "",
                        description: l.description || "",
                        optional: l.optional || !1
                    }))) : (o.form.params = [], o.form.workspaces = []);
                },
                addTaskInstance: () => {
                    const m = [];
                    for (const s of o.form.workspaces) {
                        let v = {};
                        if (s.key === "configMap") v = {
                            name: s.name,
                            configMap: {
                                name: s.value
                            }
                        }; else if (s.key === "persistentVolumeClaim") v = {
                            name: s.name,
                            persistentVolumeClaim: {
                                claimName: s.value
                            }
                        }; else if (s.key === "secret") v = {
                            name: s.name,
                            secret: {
                                secretName: s.value
                            }
                        }; else {
                            if (s.key !== "emptyDir") break;
                            v = {
                                name: s.name,
                                emptyDir: {}
                            };
                        }
                        m.push(v);
                    }
                    const l = [];
                    for (const s of o.form.params) l.push({
                        name: s.name,
                        value: s.value
                    });
                    const c = {
                        taskRun: {
                            metadata: {
                                name: o.form.name,
                                namespace: o.form.namespace
                            },
                            spec: {
                                serviceAccountName: o.form.serviceAccount,
                                taskRef: {
                                    kind: "Task",
                                    name: o.form.task
                                },
                                params: l,
                                workspaces: m
                            }
                        }
                    }, {
                        timeout: g
                    } = o.form;
                    g.replace(/(^s*)|(s*$)/g, "").length === 0 ? c.taskRun.spec.timeout = 0 : c.taskRun.spec.timeout = `${g}min`, 
                    de(c).then(s => {
                        s.code === 200 && ($.success("新建成功"), n.emit("close"));
                    });
                }
            };
        }
    }, C = y => (me("data-v-e991fd95"), y = y(), ne(), y), O = {
        class: "task pa-5"
    }, P = {
        class: "header"
    }, I = C(() => u("span", {
        class: "title"
    }, " 创建作业实例 ", -1)), S = {
        key: 0,
        style: {
            color: "red",
            display: "inline"
        }
    }, D = {
        style: {
            display: "inline"
        }
    }, N = {
        style: {
            color: "gray"
        }
    }, q = {
        key: 0,
        style: {
            color: "red",
            display: "inline"
        }
    }, E = {
        style: {
            display: "inline"
        }
    }, M = {
        style: {
            color: "gray"
        }
    }, Q = C(() => u("span", {
        class: "description"
    }, "ServiceAccount（可选）", -1)), G = C(() => u("span", {
        class: "description"
    }, "确保所选的（若未选择则为默认的）ServiceAccount 具有创建 TaskRun 和与 TaskRun 交互的任何其他权限。", -1)), J = C(() => u("span", {
        class: "description"
    }, "TaskRun 的超时（分钟）", -1));
    z = ke(B, [ [ "render", function(y, n, $, a, x, w) {
        const f = L("Back"), h = X, k = Z, o = ee, m = ae, l = le, c = te, g = oe, s = se, v = re;
        return p(), i("div", O, [ u("div", P, [ u("span", {
            style: {
                cursor: "pointer"
            },
            onClick: n[0] || (n[0] = (...e) => a.goBack && a.goBack(...e))
        }, [ t(h, null, {
            default: r(() => [ t(f) ]),
            _: 1
        }), U(" 返回 ") ]), I ]), t(v, {
            ref: "editFormRef",
            model: a.editForm.form,
            rules: a.editRules,
            "label-width": "100px",
            "label-position": "left",
            style: {
                "margin-left": "20px"
            },
            size: "large"
        }, {
            default: r(() => [ t(o, {
                label: "名称",
                prop: "name"
            }, {
                default: r(() => [ t(k, {
                    modelValue: a.editForm.form.name,
                    "onUpdate:modelValue": n[1] || (n[1] = e => a.editForm.form.name = e),
                    placeholder: "请输入"
                }, null, 8, [ "modelValue" ]) ]),
                _: 1
            }), t(o, {
                label: "命名空间",
                prop: "namespace"
            }, {
                default: r(() => [ t(l, {
                    modelValue: a.editForm.form.namespace,
                    "onUpdate:modelValue": n[2] || (n[2] = e => a.editForm.form.namespace = e),
                    placeholder: "请选择",
                    clearable: "",
                    filterable: "",
                    onChange: a.namespaceChange
                }, {
                    default: r(() => [ (p(!0), i(b, null, V(a.nameSpaceOptions, e => (p(), 
                    F(m, {
                        key: e.value,
                        label: e.label,
                        value: e.value
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "onChange" ]) ]),
                _: 1
            }), t(o, {
                label: "作业名称",
                prop: "task"
            }, {
                default: r(() => [ t(l, {
                    modelValue: a.editForm.form.task,
                    "onUpdate:modelValue": n[3] || (n[3] = e => a.editForm.form.task = e),
                    placeholder: a.taskPlaceholder,
                    clearable: "",
                    onChange: a.taskChange
                }, {
                    default: r(() => [ (p(!0), i(b, null, V(a.taskOptions, e => (p(), 
                    F(m, {
                        key: e.value,
                        label: e.label,
                        value: e.value
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "placeholder", "onChange" ]) ]),
                _: 1
            }), a.editForm.form.params.length ? (p(), F(o, {
                key: 0,
                label: "参数",
                prop: "params"
            }, {
                default: r(() => [ (p(!0), i(b, null, V(a.editForm.form.params, (e, T) => (p(), 
                i("div", {
                    key: T,
                    style: {
                        "margin-bottom": "20px"
                    }
                }, [ e.optional ? A("", !0) : (p(), i("p", S, "*")), u("p", D, R(e.name), 1), t(k, {
                    modelValue: e.value,
                    "onUpdate:modelValue": d => e.value = d,
                    placeholder: "请输入"
                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), u("p", N, R(e.description), 1) ]))), 128)) ]),
                _: 1
            })) : A("", !0), a.editForm.form.params.length ? (p(), F(o, {
                key: 1,
                label: "工作空间",
                prop: "workspaces"
            }, {
                default: r(() => [ (p(!0), i(b, null, V(a.editForm.form.workspaces, (e, T) => (p(), 
                i("div", {
                    key: T,
                    style: {
                        "margin-bottom": "20px"
                    }
                }, [ e.optional ? A("", !0) : (p(), i("p", q, "*")), u("p", E, R(e.name), 1), t(g, {
                    gutter: 24
                }, {
                    default: r(() => [ t(c, {
                        span: 6
                    }, {
                        default: r(() => [ t(l, {
                            modelValue: e.key,
                            "onUpdate:modelValue": d => e.key = d,
                            placeholder: a.taskPlaceholder,
                            clearable: ""
                        }, {
                            default: r(() => [ (p(!0), i(b, null, V(a.workspaceOptions, d => (p(), 
                            F(m, {
                                key: d,
                                label: d,
                                value: d
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue", "placeholder" ]) ]),
                        _: 2
                    }, 1024), t(c, {
                        span: 18
                    }, {
                        default: r(() => [ t(k, {
                            modelValue: e.value,
                            "onUpdate:modelValue": d => e.value = d,
                            placeholder: "请输入",
                            style: {
                                display: "inline"
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1024) ]),
                    _: 2
                }, 1024), u("p", M, R(e.description), 1) ]))), 128)) ]),
                _: 1
            })) : A("", !0), t(o, {
                prop: "serviceAccount"
            }, {
                default: r(() => [ W(y.$slots, "default", {}, () => [ U("可选值 "), Q ], !0), t(k, {
                    modelValue: a.editForm.form.serviceAccount,
                    "onUpdate:modelValue": n[4] || (n[4] = e => a.editForm.form.serviceAccount = e),
                    placeholder: "请输入"
                }, null, 8, [ "modelValue" ]), G ]),
                _: 3
            }), t(o, {
                label: "超时",
                prop: "timeout"
            }, {
                default: r(() => [ t(k, {
                    modelValue: a.editForm.form.timeout,
                    "onUpdate:modelValue": n[5] || (n[5] = e => a.editForm.form.timeout = e),
                    placeholder: "请输入"
                }, null, 8, [ "modelValue" ]), J ]),
                _: 1
            }), t(s, {
                type: "primary",
                class: "search",
                style: {
                    width: "120px"
                },
                onClick: a.addTaskInstance
            }, {
                default: r(() => [ U(" 创建 ") ]),
                _: 1
            }, 8, [ "onClick" ]), t(s, {
                style: {
                    width: "120px"
                },
                onClick: a.goBack
            }, {
                default: r(() => [ U(" 取消 ") ]),
                _: 1
            }, 8, [ "onClick" ]) ]),
            _: 3
        }, 8, [ "model", "rules" ]) ]);
    } ], [ "__scopeId", "data-v-e991fd95" ] ]);
});

export {
    ge as __tla,
    z as default
};