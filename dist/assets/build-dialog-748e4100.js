import {
    T as Ve,
    r as o,
    U as $,
    j as Ce,
    o as v,
    c as ee,
    k as i,
    l as u,
    v as ae,
    a as l,
    A as h,
    F as Te,
    y as je,
    C as x,
    t as n,
    G as I,
    B as le,
    D as te,
    m as Oe,
    n as re,
    bo as se,
    P as Ue,
    O as Ee,
    ab as Fe,
    ac as De,
    _ as Re,
    K as qe,
    Q as Se,
    J as Ae,
    aU as Be,
    R as Le,
    S as ze,
    __tla as Je
} from "./index-6c08ea4c.js";

import {
    _ as V,
    a as Ke
} from "./array-bottom-4bf24e22.js";

import {
    g as Me,
    e as Qe,
    a as He,
    b as ie,
    c as We,
    d as Xe,
    __tla as Ye
} from "./build-0e7c99ca.js";

import {
    g as Ze,
    a as $e,
    __tla as ea
} from "./code-a0d24f62.js";

import aa, {
    __tla as la
} from "./chooseFlowline-0cc8e11a.js";

import {
    _ as ta
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as ra,
    __tla as sa
} from "./index-ef4d146e.js";

import "./configInfo-14ae9782.js";

let ne, ia = Promise.all([ (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})() ]).then(async () => {
    let b, C, T, j, O, U, E, F, D, R, q, S, A, B;
    b = f => (Le("data-v-ca2b2efd"), f = f(), ze(), f), C = {
        class: "build-dialog"
    }, T = {
        style: {
            width: "100%",
            display: "flex",
            "justify-content": "center",
            "margin-top": "24px"
        }
    }, j = {
        class: "option-config"
    }, O = {
        class: "header"
    }, U = {
        class: "flex items-center"
    }, E = b(() => n("span", null, "编译目录", -1)), F = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, D = {
        class: "mt-5",
        style: {
            width: "100%",
            display: "flex",
            "justify-content": "center"
        }
    }, R = {
        class: "option-config"
    }, q = {
        class: "header"
    }, S = {
        class: "flex items-center"
    }, A = b(() => n("span", null, "打包目录", -1)), B = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, ne = ta({
        __name: "build-dialog",
        emits: [ "refresh" ],
        setup(f, {
            expose: ue,
            emit: oe
        }) {
            const k = Ve(), L = o(""), m = o(!1), g = o(null);
            o(null);
            const c = o(!1), p = o(!1), t = o({
                evnGitProId: "",
                evnGitProName: "",
                envGitGroupPath: "",
                structureTaskName: "",
                structurePath: "./",
                pipelineName: "",
                gitProId: "",
                structureOutPath: "./",
                buildFillId: ""
            }), _ = o([ {
                name: "./",
                value: "./",
                children: []
            } ]), de = o([]), P = o([]), z = oe, ce = $({
                structureTaskName: [ {
                    required: !0,
                    message: "请输入任务名称",
                    trigger: "blur"
                }, {
                    max: 20,
                    message: "长度限制20字符以内",
                    trigger: "blur"
                } ],
                evnGitProId: [ {
                    required: !0,
                    message: "请选择代码仓库",
                    trigger: "change"
                } ],
                pipelineName: [ {
                    required: !0,
                    message: "请选择流水线",
                    trigger: "change"
                } ]
            }), pe = () => {
                Me({
                    name: "",
                    resourceType: "",
                    syncType: "",
                    namespace: ""
                }).then(a => {
                    let e = [];
                    a.items.forEach(s => {
                        e.push(s.metadata.name);
                    }), de.value = e;
                });
            }, J = () => {
                $e({
                    projectId: t.value.gitProId,
                    filePath: "",
                    ref: "master",
                    recursive: !0
                }).then(a => {
                    let e = [];
                    a.forEach(s => {
                        s.type == "TREE" && (s.newPath = s.path.split("/"), s.newPath.pop(), 
                        s.newPath = s.newPath.join("/"), s.children = [], s.value = "./" + s.path, 
                        e.push(s));
                    }), _.value = [ {
                        name: "./",
                        value: "./",
                        children: K(e, "")
                    } ];
                });
            }, K = (a, e) => {
                let s = [];
                return a.forEach(d => {
                    d.newPath == e && (d.children = K(a, d.path), s.push(d));
                }), s;
            }, me = () => {
                Ze({
                    name: "",
                    groupId: k.params.groupId
                }).then(a => {
                    if (P.value = a, t.value.evnGitProId) {
                        const e = P.value.filter(s => s.evnGitProId === t.value.evnGitProId)[0];
                        t.value.gitProId = e.gitProId, J();
                    }
                });
            }, ve = () => {
                const a = P.value.filter(e => e.evnGitProId === t.value.evnGitProId)[0];
                t.value.evnGitProName = a.gitProName, t.value.envGitGroupPath = a.gitGroupPath, 
                t.value.gitProId = a.gitProId, t.value.pipelineName = a.gitProId, 
                be(a.gitProjectType), J();
            }, he = () => {
                t.value = {
                    evnGitProId: "",
                    evnGitProName: "",
                    envGitGroupPath: "",
                    structureTaskName: "",
                    structurePath: "./",
                    pipelineName: "",
                    structureOutPath: "./",
                    buildFillId: ""
                }, _.value = [ {
                    name: "./",
                    value: "./",
                    children: []
                } ], re(() => {
                    g.value.clearValidate();
                });
            }, fe = () => {
                g.value.validate(a => {
                    if (a) {
                        const e = {
                            groupId: k.params.groupId
                        };
                        Object.assign(e, t.value), e.buildId ? Qe(e).then(() => {
                            se.success("编辑成功"), m.value = !1, z("refresh");
                        }) : He(e).then(() => {
                            se.success("新建成功"), m.value = !1, z("refresh");
                        });
                    }
                });
            }, M = o([]), Q = o([]), N = a => {
                ie({
                    resourceType: a.item.code == "全部" ? "" : a.item.code
                }).then(e => {
                    Q.value = e ?? "";
                });
            }, H = o([]), ge = () => {
                ie({
                    resourceType: ""
                }).then(a => {
                    H.value = a ?? "";
                });
            }, G = o(null), _e = () => {
                G.value.openDialog(), W(), N({
                    item: [ {
                        code: "全部"
                    } ]
                });
            }, Pe = o([ {
                code: "全部"
            } ]), W = () => {
                We({
                    name: "",
                    type: "2",
                    code: ""
                }).then(a => {
                    M.value = Pe.value.concat(a.records);
                });
            }, ye = a => {
                t.value.pipelineName = a, G.value.closeDialog();
            }, w = $({
                frontCiName: "",
                backCiName: ""
            }), Ie = async () => {
                const a = await Xe(k.params.projectId);
                a && Object.keys(w).map(e => w[e] = a.pipelineInfoRespVo[e]);
            }, be = a => {
                t.value.pipelineName = w[{
                    1: "frontCiName",
                    2: "backCiName",
                    default: ""
                }[a]];
            };
            return ue({
                openDialog: a => {
                    m.value = !0, L.value = a.title, a.editFlag && Object.assign(t.value, a.data), 
                    t.value.structureOutPath == "./" ? p.value = !1 : p.value = !0, 
                    t.value.structurePath == "./" ? c.value = !1 : c.value = !0, 
                    pe(), me(), W(), N({
                        item: [ {
                            code: "全部"
                        } ]
                    }), Ie(), ge(), re(() => {
                        g.value.clearValidate();
                    });
                }
            }), (a, e) => {
                const s = Ue, d = Ee, ke = Fe, Ne = De, y = Re, X = qe, Y = ra, Ge = Se, Z = Ae, we = Be, xe = Ce("trim");
                return v(), ee("div", C, [ i(we, {
                    title: l(L),
                    "destroy-on-close": "",
                    modelValue: l(m),
                    "onUpdate:modelValue": e[10] || (e[10] = r => Oe(m) ? m.value = r : null),
                    width: "540px",
                    onClose: he,
                    "close-on-click-modal": !1
                }, {
                    footer: u(() => [ i(Z, {
                        onClick: e[9] || (e[9] = r => m.value = !1)
                    }, {
                        default: u(() => [ ae("取消") ]),
                        _: 1
                    }), i(Z, {
                        type: "primary",
                        onClick: fe
                    }, {
                        default: u(() => [ ae("确定") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ i(Ge, {
                        ref_key: "BuildFormRef",
                        ref: g,
                        rules: ce,
                        model: l(t),
                        size: "large",
                        "label-width": "100px",
                        class: "neu"
                    }, {
                        default: u(() => [ i(d, {
                            label: "任务名称",
                            prop: "structureTaskName"
                        }, {
                            default: u(() => [ h(i(s, {
                                modelValue: l(t).structureTaskName,
                                "onUpdate:modelValue": e[0] || (e[0] = r => l(t).structureTaskName = r),
                                class: "neu",
                                placeholder: "请输入任务名称",
                                style: {
                                    width: "100%"
                                }
                            }, null, 8, [ "modelValue" ]), [ [ xe ] ]) ]),
                            _: 1
                        }), i(d, {
                            label: "代码仓库",
                            prop: "evnGitProId"
                        }, {
                            default: u(() => [ i(Ne, {
                                modelValue: l(t).evnGitProId,
                                "onUpdate:modelValue": e[1] || (e[1] = r => l(t).evnGitProId = r),
                                class: "neu",
                                placeholder: "请选择",
                                onChange: ve,
                                style: {
                                    width: "100%"
                                }
                            }, {
                                default: u(() => [ (v(!0), ee(Te, null, je(l(P), r => (v(), 
                                x(ke, {
                                    key: r.evnGitProId,
                                    label: r.gitProName,
                                    value: r.evnGitProId
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), i(d, {
                            label: "流水线",
                            prop: "pipelineName",
                            class: "mb-2"
                        }, {
                            default: u(() => [ i(s, {
                                modelValue: l(t).pipelineName,
                                "onUpdate:modelValue": e[2] || (e[2] = r => l(t).pipelineName = r),
                                class: "neu input-flowline",
                                style: {
                                    width: "100%",
                                    border: "1px solid #dcdfe6",
                                    "border-radius": "4px"
                                }
                            }, {
                                append: u(() => [ n("span", {
                                    class: "input-flowline-append",
                                    onClick: _e
                                }, "选择流水线") ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), n("div", T, [ n("div", j, [ n("div", O, [ n("div", U, [ E, i(X, {
                            class: "item",
                            effect: "dark",
                            content: "项目应用编译工具的执行路径，如:maven执行编译及打包的路径，类比npm等等",
                            placement: "top"
                        }, {
                            default: u(() => [ i(y, {
                                icon: "svg-icon:help",
                                style: {
                                    "margin-left": "5px"
                                }
                            }) ]),
                            _: 1
                        }) ]), h(n("img", {
                            src: V,
                            alt: "",
                            onClick: e[3] || (e[3] = r => c.value = !l(c))
                        }, null, 512), [ [ I, l(c) ] ]), h(n("img", {
                            src: Ke,
                            alt: "",
                            onClick: e[4] || (e[4] = r => c.value = !l(c))
                        }, null, 512), [ [ I, !l(c) ] ]) ]), l(c) ? (v(), x(d, {
                            key: 0,
                            "label-width": "0",
                            style: {
                                width: "430px"
                            }
                        }, {
                            default: u(() => [ i(Y, {
                                modelValue: l(t).structurePath,
                                "onUpdate:modelValue": e[5] || (e[5] = r => l(t).structurePath = r),
                                data: l(_),
                                "check-strictly": "",
                                "render-after-expand": !1
                            }, {
                                default: u(({
                                    data: {
                                        name: r
                                    }
                                }) => [ n("div", F, [ i(y, {
                                    icon: "svg-icon:tree-folder",
                                    style: {
                                        "margin-right": "5px"
                                    }
                                }), n("span", null, le(r), 1) ]) ]),
                                _: 1
                            }, 8, [ "modelValue", "data" ]) ]),
                            _: 1
                        })) : te("", !0) ]) ]), n("div", D, [ n("div", R, [ n("div", q, [ n("div", S, [ A, i(X, {
                            class: "item",
                            effect: "dark",
                            content: "编译项目执行后生成产物的路径，如:maven构建后的jar生成路径，类比其他",
                            placement: "top"
                        }, {
                            default: u(() => [ i(y, {
                                icon: "svg-icon:help",
                                style: {
                                    "margin-left": "5px"
                                }
                            }) ]),
                            _: 1
                        }) ]), h(n("img", {
                            src: V,
                            alt: "",
                            onClick: e[6] || (e[6] = r => p.value = !l(p))
                        }, null, 512), [ [ I, l(p) ] ]), h(n("img", {
                            src: V,
                            alt: "",
                            onClick: e[7] || (e[7] = r => p.value = !l(p))
                        }, null, 512), [ [ I, !l(p) ] ]) ]), l(p) ? (v(), x(d, {
                            key: 0,
                            "label-width": "0",
                            style: {
                                width: "430px"
                            }
                        }, {
                            default: u(() => [ i(Y, {
                                modelValue: l(t).structureOutPath,
                                "onUpdate:modelValue": e[8] || (e[8] = r => l(t).structureOutPath = r),
                                data: l(_),
                                "check-strictly": "",
                                "render-after-expand": !1
                            }, {
                                default: u(({
                                    data: {
                                        name: r
                                    }
                                }) => [ n("div", B, [ i(y, {
                                    icon: "svg-icon:tree-folder",
                                    style: {
                                        "margin-right": "5px"
                                    }
                                }), n("span", null, le(r), 1) ]) ]),
                                _: 1
                            }, 8, [ "modelValue", "data" ]) ]),
                            _: 1
                        })) : te("", !0) ]) ]) ]),
                        _: 1
                    }, 8, [ "rules", "model" ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]), i(aa, {
                    "menu-list": l(M),
                    "info-list": l(Q),
                    pipelineName: l(t).pipelineName,
                    rawInfoList: l(H),
                    onChangeMenu: N,
                    onSavePipelineData: ye,
                    ref_key: "chooseFlowlineRef",
                    ref: G
                }, null, 8, [ "menu-list", "info-list", "pipelineName", "rawInfoList" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ca2b2efd" ] ]);
});

export {
    ia as __tla,
    ne as default
};