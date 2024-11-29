import {
    T as ue,
    r as f,
    U as he,
    f as fe,
    o as c,
    c as P,
    k as r,
    l as s,
    v as w,
    a as i,
    F,
    y as Q,
    C as m,
    t as d,
    B as N,
    D as ie,
    P as ve,
    O as ke,
    ab as ge,
    ac as ye,
    _ as Pe,
    K as _e,
    Q as Ie,
    J as Ge,
    aU as Te,
    R as xe,
    S as be,
    n as Ce,
    __tla as we
} from "./index-6c08ea4c.js";

import {
    c as V,
    __tla as Ne
} from "./check-a26308bc.js";

import {
    g as Ve,
    __tla as je
} from "./code-a0d24f62.js";

import {
    _ as Oe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Ue,
    __tla as De
} from "./index-ef4d146e.js";

let re, qe = Promise.all([ (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})() ]).then(async () => {
    let j, R, L, z, A, B, J, K, S, H, M, W, X, Y;
    j = v => (xe("data-v-89feb531"), v = v(), be(), v), R = {
        class: "deploy-dialog"
    }, L = {
        class: "flowline-tag"
    }, z = {
        class: "taskName mr-2"
    }, A = {
        class: "optional mt-6"
    }, B = {
        class: "optional-title"
    }, J = {
        class: "neu-flex-center"
    }, K = j(() => d("span", null, "编译目录", -1)), S = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, H = {
        class: "optional mt-5"
    }, M = {
        class: "optional-title"
    }, W = {
        class: "neu-flex-center"
    }, X = j(() => d("span", null, "打包目录", -1)), Y = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, re = Oe({
        __name: "check-dialog",
        props: {
            editData: {
                type: Object,
                default: () => {}
            }
        },
        emits: [ "needUpdate" ],
        setup(v, {
            expose: se,
            emit: ce
        }) {
            const Z = v, $ = ce, O = ue(), U = f(null), u = f(!0), h = f(!0), _ = ({
                type: l
            }) => {
                const a = {
                    optional: () => {
                        u.value = !u.value;
                    },
                    output: () => {
                        h.value = !h.value;
                    },
                    default: () => {}
                };
                (a[l] || a.default)();
            }, e = he({
                visible: !1,
                title: "",
                type: "",
                form: {
                    groupId: "",
                    evnGitProName: "",
                    evnGitProId: "",
                    envGitGroupPath: "",
                    checkTaskName: "",
                    checkCompilePath: "./",
                    checkCompileType: "",
                    checkOutPath: "./",
                    pipelineTask: "",
                    envGitProType: "",
                    checkFillId: ""
                },
                checkCompilePathList: []
            }), ne = {
                checkCompileType: [ {
                    required: !0,
                    message: "请选择项目编译环境",
                    trigger: "change"
                } ],
                checkTaskName: [ {
                    required: !0,
                    message: "请输入任务名称",
                    trigger: "blur"
                } ],
                evnGitProId: [ {
                    required: !0,
                    message: "请选择代码仓库地址",
                    trigger: "change"
                } ],
                pipelineTask: [ {
                    required: !0,
                    message: "请选择作业",
                    trigger: "change"
                } ]
            }, k = () => {
                U.value.resetFields(), e.form.evnGitProName = "", e.form.envGitGroupPath = "", 
                e.form.gitProId = "", e.form.checkCompilePath = "./", e.form.checkOutPath = "./", 
                e.form.checkFillId = "", u.value = !0, h.value = !0, e.visible = !1;
            }, de = () => {
                U.value.validate(l => {
                    if (l) {
                        const a = {
                            add: async () => {
                                await V.add({
                                    ...e.form
                                }) && (k(), $("needUpdate"));
                            },
                            edit: async () => {
                                await V.edit({
                                    ...e.form,
                                    checkId: Z.editData.checkId
                                }) && (k(), $("needUpdate"));
                            },
                            default: () => {}
                        };
                        (a[e.type] || a.default)();
                    }
                });
            }, ee = () => {
                const l = I.value.filter(a => a.evnGitProId === e.form.evnGitProId)[0];
                e.form.evnGitProName = l.gitProName, e.form.envGitGroupPath = l.gitGroupPath, 
                e.form.gitProId = l.gitProId, e.form.envGitProType = l.gitProjectType, 
                pe(l.gitProjectType), te();
            }, I = f([]), ae = async () => {
                const l = await Ve({
                    name: "",
                    groupId: O.params.groupId
                });
                if (l && (I.value = l || [], e.form.evnGitProId)) {
                    const a = I.value.filter(o => o.evnGitProId === e.form.evnGitProId)[0];
                    e.form.gitProId = a.gitProId, te();
                }
                return l;
            }, D = f([]), te = () => {
                V.getProjectTree({
                    projectId: e.form.gitProId,
                    filePath: "",
                    ref: "master",
                    recursive: !0
                }).then(l => {
                    let a = [];
                    l.forEach(o => {
                        o.type == "TREE" && (o.newPath = o.path.split("/"), o.newPath.pop(), 
                        o.newPath = o.newPath.join("/"), o.children = [], o.value = "./" + o.path, 
                        a.push(o));
                    }), D.value = [ {
                        name: "./",
                        value: "./",
                        children: le(a, "")
                    } ];
                });
            }, le = (l, a) => {
                let o = [];
                return l.forEach(n => {
                    n.newPath == a && (n.children = le(l, n.path), o.push(n));
                }), o;
            }, G = f([]), pe = l => {
                V.getTaskListApi({
                    projectId: O.params.projectId,
                    projectType: l || ""
                }).then(a => {
                    a && (G.value = a.items || [], G.value.map(o => me(o)));
                });
            }, me = l => {
                const {
                    annotations: a
                } = l.metadata;
                l.tags = Object.keys(a).filter(o => o.indexOf("neuedu.com/") !== -1 && o !== "neuedu.com/version").map(o => ({
                    tagName: a[o]
                }));
            };
            return fe(async () => {
                const {
                    groupId: l
                } = O.params;
                e.form.groupId = l;
            }), se({
                openDialog: ({
                    title: l,
                    type: a
                }) => {
                    e.visible = !0, e.title = l, e.type = a, G.value = [];
                    const o = {
                        add: () => {
                            ae();
                        },
                        edit: () => {
                            Ce(async () => {
                                const {
                                    groupId: n,
                                    evnGitProName: T,
                                    evnGitProId: x,
                                    envGitGroupPath: p,
                                    checkTaskName: b,
                                    checkCompilePath: g,
                                    checkCompileType: q,
                                    checkOutPath: y,
                                    pipelineTask: E
                                } = Z.editData;
                                e.form.groupId = n, e.form.evnGitProName = T, e.form.evnGitProId = x, 
                                e.form.envGitGroupPath = p, e.form.checkTaskName = b, 
                                e.form.checkCompilePath = g, e.form.checkOutPath = y, 
                                e.form.checkCompileType = q, e.form.pipelineTask = E, 
                                u.value = g === "./", h.value = y === "./", await ae(), 
                                ee();
                            });
                        },
                        default: () => {}
                    };
                    (o[a] || o.default)();
                },
                closeDialog: k
            }), (l, a) => {
                const o = ve, n = ke, T = ge, x = ye, p = Pe, b = _e, g = Ue, q = Ie, y = Ge, E = Te;
                return c(), P("div", R, [ r(E, {
                    title: i(e).title,
                    "model-value": i(e).visible,
                    width: "540px",
                    onClose: k,
                    "close-on-click-modal": !1
                }, {
                    footer: s(() => [ r(y, {
                        onClick: k
                    }, {
                        default: s(() => [ w("取消") ]),
                        _: 1
                    }), r(y, {
                        type: "primary",
                        onClick: de
                    }, {
                        default: s(() => [ w("确定") ]),
                        _: 1
                    }) ]),
                    default: s(() => [ r(q, {
                        ref_key: "DeployFormRef",
                        ref: U,
                        rules: ne,
                        model: i(e).form,
                        size: "large",
                        "label-width": "112px",
                        class: "neu"
                    }, {
                        default: s(() => [ r(n, {
                            label: "任务名称",
                            prop: "checkTaskName",
                            required: ""
                        }, {
                            default: s(() => [ r(o, {
                                modelValue: i(e).form.checkTaskName,
                                "onUpdate:modelValue": a[0] || (a[0] = t => i(e).form.checkTaskName = t),
                                class: "neu",
                                placeholder: "请输入任务名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(n, {
                            label: "代码仓库",
                            prop: "evnGitProId"
                        }, {
                            default: s(() => [ r(x, {
                                modelValue: i(e).form.evnGitProId,
                                "onUpdate:modelValue": a[1] || (a[1] = t => i(e).form.evnGitProId = t),
                                class: "neu",
                                placeholder: "请选择",
                                onChange: ee
                            }, {
                                default: s(() => [ (c(!0), P(F, null, Q(i(I), t => (c(), 
                                m(T, {
                                    key: t.evnGitProId,
                                    label: t.gitProName,
                                    value: t.evnGitProId
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(n, {
                            label: "作业",
                            prop: "pipelineTask",
                            class: "mb-2"
                        }, {
                            default: s(() => [ r(x, {
                                modelValue: i(e).form.pipelineTask,
                                "onUpdate:modelValue": a[2] || (a[2] = t => i(e).form.pipelineTask = t),
                                class: "neu",
                                placeholder: "请选择"
                            }, {
                                default: s(() => [ (c(!0), P(F, null, Q(i(G), t => (c(), 
                                m(T, {
                                    key: t.metadata.uid,
                                    label: t.metadata.name,
                                    value: t.metadata.name
                                }, {
                                    default: s(() => {
                                        var oe;
                                        return [ d("div", L, [ d("p", z, N((oe = t == null ? void 0 : t.metadata) == null ? void 0 : oe.name), 1), (c(!0), 
                                        P(F, null, Q(t.tags, C => (c(), P("span", {
                                            key: C.creationTimestamp
                                        }, N(C == null ? void 0 : C.tagName), 1))), 128)) ]) ];
                                    }),
                                    _: 2
                                }, 1032, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), d("div", A, [ d("div", B, [ d("div", J, [ K, r(b, {
                            class: "item",
                            effect: "dark",
                            content: "项目应用编译工具的执行路径，如:maven执行编译及打包的路径，类比npm等等",
                            placement: "top"
                        }, {
                            default: s(() => [ r(p, {
                                icon: "svg-icon:help",
                                style: {
                                    "margin-left": "5px"
                                }
                            }) ]),
                            _: 1
                        }) ]), i(u) ? (c(), m(p, {
                            key: 0,
                            icon: "svg-icon:choose-collapse",
                            style: {
                                width: "18px",
                                height: "18px"
                            },
                            onClick: a[3] || (a[3] = t => _({
                                type: "optional"
                            }))
                        })) : (c(), m(p, {
                            key: 1,
                            icon: "svg-icon:choose-expand",
                            style: {
                                width: "18px",
                                height: "18px"
                            },
                            onClick: a[4] || (a[4] = t => _({
                                type: "optional"
                            }))
                        })) ]), i(u) ? ie("", !0) : (c(), m(n, {
                            key: 0,
                            label: "",
                            "label-width": "0"
                        }, {
                            default: s(() => [ r(g, {
                                modelValue: i(e).form.checkCompilePath,
                                "onUpdate:modelValue": a[5] || (a[5] = t => i(e).form.checkCompilePath = t),
                                data: i(D),
                                "check-strictly": "",
                                "render-after-expand": !1
                            }, {
                                default: s(({
                                    data: {
                                        name: t
                                    }
                                }) => [ d("div", S, [ r(p, {
                                    icon: "svg-icon:tree-folder",
                                    style: {
                                        "margin-right": "5px"
                                    }
                                }), w(N(t), 1) ]) ]),
                                _: 1
                            }, 8, [ "modelValue", "data" ]) ]),
                            _: 1
                        })) ]), d("div", H, [ d("div", M, [ d("div", W, [ X, r(b, {
                            class: "item",
                            effect: "dark",
                            content: "编译项目执行后生成产物的路径，如:maven构建后的jar生成路径，类比其他",
                            placement: "top"
                        }, {
                            default: s(() => [ r(p, {
                                icon: "svg-icon:help",
                                style: {
                                    "margin-left": "5px"
                                }
                            }) ]),
                            _: 1
                        }) ]), i(h) ? (c(), m(p, {
                            key: 0,
                            icon: "svg-icon:choose-collapse",
                            style: {
                                width: "18px",
                                height: "18px"
                            },
                            onClick: a[6] || (a[6] = t => _({
                                type: "output"
                            }))
                        })) : (c(), m(p, {
                            key: 1,
                            icon: "svg-icon:choose-expand",
                            style: {
                                width: "18px",
                                height: "18px"
                            },
                            onClick: a[7] || (a[7] = t => _({
                                type: "output"
                            }))
                        })) ]), i(h) ? ie("", !0) : (c(), m(n, {
                            key: 0,
                            label: "",
                            "label-width": "0"
                        }, {
                            default: s(() => [ r(g, {
                                modelValue: i(e).form.checkOutPath,
                                "onUpdate:modelValue": a[8] || (a[8] = t => i(e).form.checkOutPath = t),
                                data: i(D),
                                "check-strictly": "",
                                "render-after-expand": !1
                            }, {
                                default: s(({
                                    data: {
                                        name: t
                                    }
                                }) => [ d("div", Y, [ r(p, {
                                    icon: "svg-icon:tree-folder",
                                    style: {
                                        "margin-right": "5px"
                                    }
                                }), w(N(t), 1) ]) ]),
                                _: 1
                            }, 8, [ "modelValue", "data" ]) ]),
                            _: 1
                        })) ]) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "title", "model-value" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-89feb531" ] ]);
});

export {
    qe as __tla,
    re as default
};