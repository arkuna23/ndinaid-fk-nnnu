import {
    b0 as x,
    u as H,
    e as _,
    a,
    r as K,
    U as k,
    o as p,
    C as c,
    l as t,
    t as W,
    B as P,
    k as r,
    v as T,
    D as m,
    A as N,
    G as O,
    n as X,
    P as Y,
    O as Z,
    av as ee,
    aw as ae,
    Q as se,
    J as le,
    aU as te,
    bo as V,
    __tla as re
} from "./index-6c08ea4c.js";

import {
    c as h,
    __tla as de
} from "./cloud-6a4afb61.js";

import {
    v as oe,
    h as ie
} from "./validate-b72f006c.js";

import {
    _ as ue
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, ne = Promise.all([ (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})() ]).then(async () => {
    let U;
    U = {
        class: "el-dialog__title"
    }, C = ue({
        __name: "addService",
        props: {
            resourcesParams: {
                type: Object,
                default: () => {}
            },
            dbInfo: {
                type: Object,
                default: () => {}
            },
            projectInfo: {
                type: Object,
                default: () => {}
            }
        },
        emits: [ "needUpdate" ],
        setup(R, {
            expose: q,
            emit: E
        }) {
            const b = x("authEditDevops"), u = R, M = H(), D = _(() => a(M.currentRoute)), I = _(() => a(D).path.indexOf("/neu/") >= 0 || a(D).path.indexOf("/private/") >= 0), z = x("isDb"), f = E, y = K(""), g = k({
                visible: !1
            }), e = k({
                title: "",
                type: "",
                serviceName: "",
                serviceDescription: "",
                demoPort: "",
                isDb: "",
                projectId: "",
                demoUrl: "",
                demoId: "",
                nginxConfigEid: "",
                demoType: "",
                demoEid: ""
            }), F = {
                serviceName: [ {
                    required: !0,
                    message: "请输入服务名称",
                    trigger: "blur"
                } ],
                serviceDescription: [ {
                    required: !0,
                    message: "请输入说明",
                    trigger: "blur"
                } ],
                demoPort: [ {
                    required: !0,
                    message: "请输入端口号",
                    trigger: "blur"
                }, {
                    pattern: /^[1-9]\d{0,3}$/,
                    message: "只能输入0~10000范围内的整数",
                    trigger: "blur"
                } ],
                demoUrl: [ {
                    required: !0,
                    message: "请输入演示地址",
                    trigger: "blur"
                }, {
                    validator: oe,
                    message: "链接网址不能为空",
                    trigger: "blur"
                }, {
                    validator: ie,
                    message: "请输入正确的URL地址",
                    trigger: "blur"
                }, {
                    max: 50,
                    message: "演示地址不能超过50个字符",
                    trigger: "blur"
                } ]
            }, A = () => {
                y.value.validate(async l => {
                    l && B();
                });
            }, B = () => {
                const l = {
                    add: async () => {
                        await J(), n(), f("needUpdate");
                    },
                    edit: async () => {
                        await j(), n(), f("needUpdate");
                    },
                    distribute: async () => {
                        await L(), n(), f("needUpdate");
                    },
                    url: async () => {
                        await j(), n(), f("needUpdate");
                    },
                    default: () => {}
                };
                (l[e.type] || l.default)();
            }, G = _(() => e.type === "distribute"), J = async () => {
                var s;
                const l = await h.add({
                    projectId: u.resourcesParams.projectId,
                    demoType: u.resourcesParams.region == "1" ? "nginx" : "java8",
                    isDb: z.value,
                    serviceName: e.serviceName,
                    serviceDescription: e.serviceDescription,
                    deployType: (s = u.projectInfo.pipelineInfoRespVo) == null ? void 0 : s.demoType,
                    sourceClassify: I.value ? "1" : "2"
                });
                return l && V({
                    type: "success",
                    message: "操作成功",
                    duration: 2e3
                }), l;
            }, j = async () => {
                var s;
                const l = await h.edit({
                    ...e,
                    deployType: (s = u.projectInfo.pipelineInfoRespVo) == null ? void 0 : s.demoType
                });
                return l && V({
                    type: "success",
                    message: "操作成功",
                    duration: 2e3
                }), l;
            }, L = async () => {
                var s;
                const l = await h.deploy({
                    ...e,
                    isDb: u.dbInfo.dbVersion != "" && u.resourcesParams.region == "2" ? "1" : "0",
                    sourceClassify: I.value ? "1" : "2",
                    deployType: (s = u.projectInfo.pipelineInfoRespVo) == null ? void 0 : s.demoType
                });
                return l && V({
                    type: "success",
                    message: "操作成功",
                    duration: 2e3
                }), l;
            }, n = () => {
                y.value.resetFields(), g.visible = !1;
            };
            return q({
                openDialog: ({
                    type: l,
                    title: s,
                    data: d
                }) => {
                    g.visible = !0, e.type = l, e.title = s, X(() => {
                        y.value.resetFields(), Object.keys(e).forEach(i => {
                            d[i] && (e[i] = d[i]);
                        });
                    });
                },
                closeDialog: n
            }), (l, s) => {
                const d = Y, i = Z, v = ee, Q = ae, S = se, w = le, $ = te;
                return p(), c($, {
                    modelValue: a(g).visible,
                    "onUpdate:modelValue": s[4] || (s[4] = o => a(g).visible = o),
                    width: "540px",
                    title: "添加服务",
                    "close-on-click-modal": !1,
                    class: "dialog-add-semester",
                    onClose: n
                }, {
                    header: t(() => [ W("span", U, P(a(e).title), 1) ]),
                    footer: t(() => [ r(w, {
                        size: "default",
                        onClick: n
                    }, {
                        default: t(() => [ T(P(a(b) ? "取 消" : "关 闭"), 1) ]),
                        _: 1
                    }), a(b) ? (p(), c(w, {
                        key: 0,
                        type: "primary",
                        size: "default",
                        onClick: A
                    }, {
                        default: t(() => [ T("确 定 ") ]),
                        _: 1
                    })) : m("", !0) ]),
                    default: t(() => [ r(S, {
                        ref_key: "dialogFormAddRef",
                        ref: y,
                        model: a(e),
                        disabled: !a(b),
                        "label-width": "84",
                        class: "edit-form neu",
                        size: "large",
                        rules: F
                    }, {
                        default: t(() => [ r(Q, null, {
                            default: t(() => [ [ "add", "edit" ].includes(a(e).type) ? (p(), 
                            c(v, {
                                key: 0,
                                span: 24
                            }, {
                                default: t(() => [ r(i, {
                                    label: "服务名称",
                                    prop: "serviceName"
                                }, {
                                    default: t(() => [ r(d, {
                                        class: "neu",
                                        maxlength: "20",
                                        modelValue: a(e).serviceName,
                                        "onUpdate:modelValue": s[0] || (s[0] = o => a(e).serviceName = o),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        placeholder: "请输入服务名称"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            })) : m("", !0), [ "add", "edit" ].includes(a(e).type) ? (p(), 
                            c(v, {
                                key: 1,
                                span: 24
                            }, {
                                default: t(() => [ r(i, {
                                    label: "说明",
                                    prop: "serviceDescription"
                                }, {
                                    default: t(() => [ r(d, {
                                        class: "neu",
                                        type: "textarea",
                                        placeholder: "请输入内容",
                                        modelValue: a(e).serviceDescription,
                                        "onUpdate:modelValue": s[1] || (s[1] = o => a(e).serviceDescription = o),
                                        modelModifiers: {
                                            trim: !0
                                        },
                                        maxlength: "100",
                                        "show-word-limit": ""
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            })) : m("", !0), a(G) ? (p(), c(v, {
                                key: 2,
                                span: 24
                            }, {
                                default: t(() => [ r(i, {
                                    label: "端口",
                                    prop: "demoPort"
                                }, {
                                    default: t(() => [ r(d, {
                                        class: "neu",
                                        placeholder: "请输入端口号",
                                        modelValue: a(e).demoPort,
                                        "onUpdate:modelValue": s[2] || (s[2] = o => a(e).demoPort = o),
                                        modelModifiers: {
                                            trim: !0
                                        }
                                    }, null, 8, [ "modelValue" ]), N(r(d, null, null, 512), [ [ O, !1 ] ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            })) : m("", !0), a(e).type == "url" ? (p(), c(v, {
                                key: 3,
                                span: 24
                            }, {
                                default: t(() => [ r(i, {
                                    label: "演示地址",
                                    prop: "demoUrl"
                                }, {
                                    default: t(() => [ r(d, {
                                        class: "neu",
                                        placeholder: "请输入演示地址",
                                        modelValue: a(e).demoUrl,
                                        "onUpdate:modelValue": s[3] || (s[3] = o => a(e).demoUrl = o),
                                        modelModifiers: {
                                            trim: !0
                                        }
                                    }, null, 8, [ "modelValue" ]), N(r(d, null, null, 512), [ [ O, !1 ] ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            })) : m("", !0) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "disabled" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-249a831d" ] ]);
});

export {
    ne as __tla,
    C as default
};