import {
    a7 as V,
    dU as le,
    p as ne,
    r as h,
    U as oe,
    f as te,
    w as ie,
    aT as se,
    o as r,
    c as d,
    t as m,
    k as o,
    l as t,
    v as D,
    F as P,
    y as R,
    C as b,
    D as C,
    B as O,
    aI as re,
    aQ as pe,
    P as me,
    O as ue,
    ab as ce,
    ac as de,
    av as fe,
    aw as ve,
    ak as ge,
    J as ye,
    Q as ke,
    R as he,
    S as _e,
    __tla as Ve
} from "./index-6c08ea4c.js";

import {
    g as be,
    __tla as we
} from "./taskManage-5f71a641.js";

import {
    g as Fe,
    __tla as Pe
} from "./pipelineManage-fe91e90c.js";

import {
    _ as Re
} from "./_plugin-vue_export-helper-1b428a4d.js";

let B, T, z, $, M, N, Ce = Promise.all([ (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})() ]).then(async () => {
    z = function(i) {
        return V.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/pipelineRun",
            params: i
        });
    }, T = function(i) {
        return V.delete({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/pipelineRun",
            params: i
        });
    }, N = function(i) {
        return V.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/pipelineRun/trigger",
            params: i
        });
    }, M = function(i) {
        return V.get({
            originalData: !0,
            url: "/env-api/ci-processor/v1beta1/tekton/pipelineRun/stop",
            params: i
        });
    };
    const q = {
        name: "TaskInstance",
        components: {
            Back: le
        },
        props: {
            name: {
                type: String,
                default: ""
            },
            namespace: {
                type: String,
                default: ""
            }
        },
        emits: [ "close" ],
        setup(i, s) {
            const S = ne(), a = h(null), U = h(!1), A = h("禁用"), x = h([]), F = h([]), v = () => ({
                name: "",
                namespace: "default",
                pipeline: "",
                timeout: "60",
                serviceAccount: "",
                params: [],
                workspaces: []
            }), l = oe({
                form: {
                    name: "",
                    namespace: "default",
                    pipeline: "",
                    timeout: "60",
                    serviceAccount: "",
                    params: [],
                    workspaces: []
                }
            }), c = h([]), g = async () => {
                const p = {
                    namespace: l.form.namespace,
                    name: "",
                    resourceType: "",
                    syncType: ""
                };
                await Fe(p).then(n => {
                    if (n.code === 200) if (c.value = n.data.items, c.value.length) {
                        const k = [];
                        c.value.forEach(e => {
                            k.push({
                                value: e.metadata.name,
                                label: e.metadata.name
                            });
                        }), F.value = k, y.value = "请选择";
                    } else F.value = [], y.value = `\u5728Namespace'${p.namespace}'\u4E2D\u672A\u627E\u5230Pipeline`;
                });
            };
            let y = h("请输入"), _ = p => {
                p ? (l.form.params = c.value.filter(n => n.metadata.name === p)[0].spec.params.map(n => ({
                    name: n.name || "",
                    value: n.default || "",
                    description: n.description || "",
                    optional: n.optional || !1
                })), l.form.workspaces = c.value.filter(n => n.metadata.name === p)[0].spec.workspaces.map(n => ({
                    name: n.name || "",
                    description: n.description || "",
                    optional: n.optional || !1
                }))) : (l.form.params = [], l.form.workspaces = []);
            };
            return te(async () => {
                await g(), await be().then(p => {
                    p.data.forEach(n => {
                        x.value.push({
                            value: n.metadata.name,
                            label: n.metadata.name
                        });
                    });
                }), i.name && (l.form.pipeline = i.name, l.form.namespace = i.namespace, 
                _(i.name));
            }), ie(U, p => {
                A.value = p === !0 ? "启用" : "禁用";
            }), {
                goBack: () => {
                    s.emit("close");
                },
                editFormRef: a,
                editForm: l,
                initEditForm: v,
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
                    pipeline: [ {
                        required: !0,
                        message: "流水线不能为空",
                        trigger: "blur"
                    } ]
                },
                nameSpaceOptions: x,
                openValue: U,
                activeText: A,
                workspaceOptions: [ "configMap", "secret", "emptyDir", "persistentVolumeClaim" ],
                getPipelineOptions: g,
                pipelineOptions: F,
                changePipeline: () => {
                    l.form.pipeline = "", g(), _();
                },
                pipelineList: c,
                selectPipeline: _,
                pipelinePlaceholder: y,
                handleCreate: async () => {
                    const p = [];
                    for (const e of l.form.workspaces) {
                        let f = {};
                        if (e.key === "configMap") f = {
                            name: e.name,
                            configMap: {
                                name: e.value
                            }
                        }; else if (e.key === "persistentVolumeClaim") f = {
                            name: e.name,
                            subpath: e.subpath,
                            persistentVolumeClaim: {
                                claimName: e.value
                            }
                        }; else if (e.key === "secret") f = {
                            name: e.name,
                            secret: {
                                secretName: e.value
                            }
                        }; else {
                            if (e.key !== "emptyDir") break;
                            f = {
                                name: e.name,
                                emptyDir: {}
                            };
                        }
                        p.push(f);
                    }
                    const n = [];
                    for (const e of l.form.params) n.push({
                        name: e.name,
                        value: e.value
                    });
                    const k = {
                        pipelineRun: {
                            metadata: {
                                name: l.form.name,
                                namespace: l.form.namespace
                            },
                            spec: {
                                timeout: `${l.form.timeout}min`,
                                serviceAccountName: l.form.serviceAccount,
                                pipelineRef: {
                                    name: l.form.pipeline
                                },
                                params: n,
                                workspaces: p
                            }
                        }
                    };
                    U.value ? await function(e) {
                        return V.post({
                            originalData: !0,
                            url: "/env-api/ci-processor/v1beta1/tekton/startPipelineRun",
                            data: e
                        });
                    }(k).then(e => {
                        e.code === 200 && (S.success("新建成功"), s.emit("close"));
                    }) : await function(e) {
                        return V.post({
                            originalData: !0,
                            url: "/env-api/ci-processor/v1beta1/tekton/pendingPipelineRun",
                            data: e
                        });
                    }(k).then(e => {
                        e.code === 200 && (S.success("新建成功"), s.emit("close"));
                    });
                }
            };
        }
    }, w = i => (he("data-v-729f3651"), i = i(), _e(), i), E = {
        class: "pipeline pa-5"
    }, I = {
        class: "header"
    }, j = w(() => m("span", {
        class: "title"
    }, " 创建流水线实例 ", -1)), Q = {
        key: 0,
        style: {
            "margin-top": "40px"
        }
    }, J = {
        key: 0,
        style: {
            color: "red",
            display: "inline"
        }
    }, L = {
        style: {
            display: "inline"
        }
    }, G = {
        style: {
            color: "gray"
        }
    }, H = {
        key: 0,
        style: {
            color: "red",
            display: "inline"
        }
    }, K = {
        style: {
            display: "inline"
        }
    }, W = {
        style: {
            color: "gray"
        }
    }, X = w(() => m("span", {
        class: "description"
    }, "ServiceAccount（可选）", -1)), Y = w(() => m("span", {
        class: "description"
    }, "确保所选的 ServiceAccount（如果没有选择，则为默认值）具有创建 PipelineRun 和与 PipelineRun 交互的任何其他权限。", -1)), Z = w(() => m("span", {
        class: "description"
    }, "PipelineRun 的超时（分钟）", -1)), ee = w(() => m("div", null, "创建处于暂挂状态的 PipelineRun", -1)), ae = {
        style: {
            margin: "20px 0"
        }
    };
    B = Re(q, [ [ "render", function(i, s, S, a, U, A) {
        const x = se("Back"), F = pe, v = me, l = ue, c = ce, g = de, y = fe, _ = ve, p = ge, n = ye, k = ke;
        return r(), d("div", E, [ m("div", I, [ m("span", {
            style: {
                cursor: "pointer"
            },
            onClick: s[0] || (s[0] = (...e) => a.goBack && a.goBack(...e))
        }, [ o(F, null, {
            default: t(() => [ o(x) ]),
            _: 1
        }), D(" 返回 ") ]), j ]), o(k, {
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
            default: t(() => [ o(l, {
                label: "名称",
                prop: "name"
            }, {
                default: t(() => [ o(v, {
                    modelValue: a.editForm.form.name,
                    "onUpdate:modelValue": s[1] || (s[1] = e => a.editForm.form.name = e),
                    placeholder: "请输入"
                }, null, 8, [ "modelValue" ]) ]),
                _: 1
            }), o(l, {
                label: "命名空间",
                prop: "namespace"
            }, {
                default: t(() => [ o(g, {
                    modelValue: a.editForm.form.namespace,
                    "onUpdate:modelValue": s[2] || (s[2] = e => a.editForm.form.namespace = e),
                    placeholder: "请选择",
                    onChange: a.changePipeline
                }, {
                    default: t(() => [ (r(!0), d(P, null, R(a.nameSpaceOptions, e => (r(), 
                    b(c, {
                        key: e.value,
                        label: e.label,
                        value: e.value
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "onChange" ]) ]),
                _: 1
            }), o(l, {
                label: "流水线",
                prop: "pipeline"
            }, {
                default: t(() => [ o(g, {
                    modelValue: a.editForm.form.pipeline,
                    "onUpdate:modelValue": s[3] || (s[3] = e => a.editForm.form.pipeline = e),
                    placeholder: a.pipelinePlaceholder,
                    onChange: a.selectPipeline
                }, {
                    default: t(() => [ (r(!0), d(P, null, R(a.pipelineOptions, e => (r(), 
                    b(c, {
                        key: e.value,
                        label: e.label,
                        value: e.value
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "placeholder", "onChange" ]) ]),
                _: 1
            }), a.editForm.form.params.length ? (r(), d("div", Q, " 参数 ")) : C("", !0), (r(!0), 
            d(P, null, R(a.editForm.form.params, (e, f) => (r(), b(l, {
                key: f
            }, {
                default: t(() => [ e.optional ? C("", !0) : (r(), d("p", J, "*")), m("div", L, O(e.name), 1), o(v, {
                    modelValue: e.value,
                    "onUpdate:modelValue": u => e.value = u,
                    placeholder: a.pipelinePlaceholder
                }, null, 8, [ "modelValue", "onUpdate:modelValue", "placeholder" ]), m("p", G, O(e.description), 1) ]),
                _: 2
            }, 1024))), 128)), a.editForm.form.params.length ? (r(), b(l, {
                key: 1,
                label: "工作空间",
                prop: "workspaces"
            }, {
                default: t(() => [ (r(!0), d(P, null, R(a.editForm.form.workspaces, (e, f) => (r(), 
                d("div", {
                    key: f,
                    style: {
                        "margin-bottom": "20px"
                    }
                }, [ e.optional ? C("", !0) : (r(), d("p", H, "*")), m("p", K, O(e.name), 1), o(_, {
                    gutter: 12,
                    class: "el-row"
                }, {
                    default: t(() => [ o(y, {
                        span: 6
                    }, {
                        default: t(() => [ o(g, {
                            modelValue: e.key,
                            "onUpdate:modelValue": u => e.key = u,
                            placeholder: "选择存储类型",
                            clearable: ""
                        }, {
                            default: t(() => [ (r(!0), d(P, null, R(a.workspaceOptions, u => (r(), 
                            b(c, {
                                key: u,
                                label: u,
                                value: u
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 2
                        }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1024), o(y, {
                        span: 18
                    }, {
                        default: t(() => [ o(v, {
                            modelValue: e.value,
                            "onUpdate:modelValue": u => e.value = u,
                            placeholder: "请输入存储名称",
                            style: {
                                display: "inline"
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1024) ]),
                    _: 2
                }, 1024), o(_, {
                    class: "el-row"
                }, {
                    default: t(() => [ o(y, {
                        span: 24
                    }, {
                        default: t(() => [ e.key === "persistentVolumeClaim" ? (r(), 
                        b(v, {
                            key: 0,
                            modelValue: e.subPath,
                            "onUpdate:modelValue": u => e.subPath = u,
                            placeholder: "请输入子路径",
                            style: {
                                display: "inline"
                            }
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) : C("", !0) ]),
                        _: 2
                    }, 1024) ]),
                    _: 2
                }, 1024), m("p", W, O(e.description), 1) ]))), 128)) ]),
                _: 1
            })) : C("", !0), o(l, {
                prop: "namespace"
            }, {
                default: t(() => [ re(i.$slots, "default", {}, () => [ D("可选值 "), X ], !0), o(v, {
                    modelValue: a.editForm.form.serviceAccount,
                    "onUpdate:modelValue": s[4] || (s[4] = e => a.editForm.form.serviceAccount = e),
                    placeholder: "请输入"
                }, null, 8, [ "modelValue" ]), Y ]),
                _: 3
            }), o(l, {
                label: "超时时间",
                prop: "timeout"
            }, {
                default: t(() => [ o(v, {
                    modelValue: a.editForm.form.timeout,
                    "onUpdate:modelValue": s[5] || (s[5] = e => a.editForm.form.timeout = e),
                    placeholder: "请输入"
                }, null, 8, [ "modelValue" ]), Z ]),
                _: 1
            }), ee, m("div", ae, [ o(p, {
                modelValue: a.openValue,
                "onUpdate:modelValue": s[6] || (s[6] = e => a.openValue = e),
                size: "large",
                "active-text": a.activeText
            }, null, 8, [ "modelValue", "active-text" ]) ]), o(n, {
                type: "primary",
                class: "search",
                style: {
                    width: "120px"
                },
                onClick: a.handleCreate
            }, {
                default: t(() => [ D(" 创建 ") ]),
                _: 1
            }, 8, [ "onClick" ]), o(n, {
                style: {
                    width: "120px"
                },
                onClick: a.goBack
            }, {
                default: t(() => [ D(" 取消 ") ]),
                _: 1
            }, 8, [ "onClick" ]) ]),
            _: 3
        }, 8, [ "model", "rules" ]) ]);
    } ], [ "__scopeId", "data-v-729f3651" ] ]), $ = Object.defineProperty({
        __proto__: null,
        default: B
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    Ce as __tla,
    B as a,
    T as d,
    z as g,
    $ as p,
    M as s,
    N as t
};