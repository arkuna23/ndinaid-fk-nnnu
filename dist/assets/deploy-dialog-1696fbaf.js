import {
    aO as le,
    a as t,
    a0 as te,
    r as g,
    a5 as se,
    e as oe,
    o as I,
    c as R,
    k as u,
    l as c,
    t as U,
    B as re,
    C as q,
    D as E,
    bo as m,
    ea as ue,
    _ as Z,
    ch as ie,
    Y as ne,
    R as de,
    S as pe,
    T as ce,
    U as me,
    j as ve,
    v as j,
    A as fe,
    F as ge,
    y as he,
    m as ye,
    n as H,
    P as _e,
    O as be,
    ab as xe,
    ac as Fe,
    Q as Ie,
    J as ke,
    aU as Ce,
    __tla as we
} from "./index-6c08ea4c.js";

import {
    j as Ve,
    __tla as Ue
} from "./build-0e7c99ca.js";

import {
    g as Le,
    e as Ne,
    a as Re,
    __tla as je
} from "./deploy-dab1856f.js";

import {
    b as ze,
    p as De,
    __tla as Oe
} from "./file-e038b35d.js";

import {
    _ as Q
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    d as Pe,
    __tla as Te
} from "./project-enjineering-046a4b77.js";

let Y, Be = Promise.all([ (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})() ]).then(async () => {
    let G, S, $, A, J, M;
    G = (b => (de("data-v-0346f66f"), b = b(), pe(), b))(() => U("span", {
        class: "title"
    }, "点击上传或拖拽文件到这", -1)), S = {
        class: "tip"
    }, $ = Q({
        __name: "upload-resource",
        props: {
            accept: {
                type: String,
                default: ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.mp4,.jpg,.jpeg"
            },
            tooltip: {
                type: String,
                default: "支持文件类型：pdf、doc、docx、ppt、pptx、xls、xlsx、zip、MP4、JPG、JPEG"
            },
            size: {
                type: Number,
                default: 1024
            },
            autoUpload: {
                type: Boolean,
                default: !0
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            showFileList: {
                type: Boolean,
                default: !0
            },
            nameLength: {
                type: Number,
                default: 200
            },
            bodyWidth: {
                type: String,
                default: "500px"
            },
            englishName: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "success", "response", "fileChange", "fileRemove", "error" ],
        setup(b, {
            expose: z,
            emit: D
        }) {
            le(i => ({
                "03bb08e9": t(V)
            }));
            const v = D, h = b, {
                accept: f,
                tooltip: x,
                size: d,
                autoUpload: _,
                englishName: C
            } = te(h), r = g(null), k = se.CancelToken, l = g(null), y = g(0), O = i => {
                const s = i[0], p = s.name.slice(0, s.name.lastIndexOf(".")), e = p.length > h.nameLength, a = s.name.substring(s.name.lastIndexOf(".")).toLowerCase();
                C.value && (/^[0-9A-Za-z-_]+$/.test(p) || m.error("文件名必须为英文")), 
                f.value.split(",").includes(a) ? s.size >= 1024 * d.value * 1024 ? m.error(`\u4E0A\u4F20\u8D44\u6E90\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${d.value}MB`) : e ? m.error(`\u4E0A\u4F20\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7${h.nameLength}\u4E2A\u5B57\u7B26!`) : (r.value.clearFiles(), 
                s.uid = ue(), r.value.handleStart(s)) : m.error("请上传符合规则的资源格式");
            }, P = () => {
                v("fileRemove");
            }, L = i => {
                const s = i.name.slice(0, i.name.lastIndexOf(".")), p = s.length > h.nameLength, e = i.name.substring(i.name.lastIndexOf(".")).toLowerCase();
                return C.value && !/^[0-9A-Za-z-_]+$/.test(s) ? (m.error("文件名必须为英文"), 
                void r.value.clearFiles()) : f.value.split(",").includes(e) ? i.size >= 1024 * d.value * 1024 ? (m.error(`\u4E0A\u4F20\u8D44\u6E90\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${d.value}MB`), 
                void r.value.clearFiles()) : p ? (m.error(`\u4E0A\u4F20\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7${h.nameLength}\u4E2A\u5B57\u7B26!`), 
                void r.value.clearFiles()) : (v("fileChange", i), void (_.value && r.value.submit())) : (m.error("请上传符合规则的资源格式"), 
                void r.value.clearFiles());
            }, T = i => {
                const s = i.file, p = new FormData();
                p.append("file", s), p.append("source", ze), De(p, e => {
                    const {
                        loaded: a,
                        total: o
                    } = e;
                    y.value = Number((90 * Number(a / o)).toFixed());
                }, new k(function(e) {
                    l.value = e;
                })).then(async e => {
                    y.value = 100, setTimeout(() => {
                        y.value = 0;
                    }, 500);
                    const a = e.data;
                    a.errorFlag == "0" || a.errorFlag == "2" ? (y.value = 0, v("success", a), 
                    v("response", e)) : (m.warning("资源服务：文件上传失败"), y.value = 0, 
                    r.value && w(), v("fileRemove"), v("error"));
                }).catch(() => {
                    y.value = 0, r.value && w(), v("fileRemove"), v("error");
                });
            }, w = () => {
                r.value.clearFiles();
            }, V = oe(() => h.bodyWidth);
            return z({
                cancelUpload: () => {
                    typeof l.value == "function" && l.value();
                },
                submitUpload: () => {
                    r.value.submit();
                },
                clearFiles: w
            }), (i, s) => {
                const p = Z, e = ie, a = ne;
                return I(), R("div", null, [ u(e, {
                    class: "upload-demo",
                    drag: "",
                    action: "#",
                    multiple: "",
                    accept: t(f),
                    "on-change": L,
                    "on-exceed": O,
                    "auto-upload": !1,
                    ref_key: "uploadRef",
                    ref: r,
                    limit: 1,
                    "show-file-list": h.showFileList,
                    "http-request": T,
                    "on-remove": P,
                    disabled: b.isDisabled
                }, {
                    default: c(() => [ U("div", {
                        class: "upload-box",
                        onDrop: s[0] || (s[0] = o => (F => {
                            let N = F.dataTransfer.files[0].name, B = N.substring(N.lastIndexOf(".")).toLowerCase();
                            if (!f.value.split(",").includes(B)) return m.error("请上传符合规则的资源格式");
                        })(o)),
                        onDragover: s[1] || (s[1] = o => o.preventDefault())
                    }, [ u(p, {
                        class: "icon",
                        icon: "svg-icon:cloud-upload"
                    }), G, U("span", S, re(t(x)), 1) ], 32) ]),
                    _: 1
                }, 8, [ "accept", "show-file-list", "disabled" ]), t(y) ? (I(), 
                q(a, {
                    key: 0,
                    "text-inside": !0,
                    "stroke-width": 20,
                    percentage: t(y),
                    style: {
                        width: "100%",
                        "margin-top": "5px"
                    }
                }, null, 8, [ "percentage" ])) : E("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-0346f66f" ] ]), A = {
        class: "deploy-dialog"
    }, J = {
        style: {
            display: "flex"
        }
    }, M = {
        key: 0,
        style: {
            color: "#999",
            "font-size": "12px"
        }
    }, Y = Q({
        __name: "deploy-dialog",
        emits: [ "refresh" ],
        setup(b, {
            expose: z,
            emit: D
        }) {
            const v = D, h = g(""), f = g(!1), x = g(!1), d = g(!1), _ = g(null), C = g(), r = g([]), k = ce(), l = g({
                deploymentTaskName: "",
                structureId: "",
                description: "",
                evnGitProId: "",
                hasFile: "",
                nginxConfigEid: "",
                projectId: k.params.projectId,
                port: null
            }), y = me({
                deploymentTaskName: [ {
                    required: !0,
                    message: "请输入任务名称",
                    trigger: "blur"
                }, {
                    max: 20,
                    message: "长度限制20字符以内",
                    trigger: "blur"
                } ],
                structureId: [ {
                    required: !0,
                    message: "请选择构建任务",
                    trigger: "change"
                } ],
                description: [ {
                    required: !0,
                    message: "请输入任务描述",
                    trigger: "blur"
                }, {
                    max: 200,
                    message: "长度限制200字符以内",
                    trigger: "blur"
                } ],
                hasFile: [ {
                    required: !0,
                    message: "请上传配置文件",
                    trigger: "change"
                } ],
                port: [ {
                    required: !0,
                    message: "请输入端口号",
                    trigger: "blur"
                }, {
                    pattern: /^[1-9]\d{0,3}$/,
                    message: "只能输入0~10000范围内的整数",
                    trigger: "blur"
                } ]
            }), O = () => {
                Ve({
                    groupId: k.params.groupId
                }).then(e => {
                    r.value = e, L();
                });
            }, P = () => {
                l.value = {
                    deploymentTaskName: "",
                    structureId: "",
                    description: "",
                    evnGitProId: "",
                    hasFile: "",
                    nginxConfigEid: ""
                }, f.value = !1, x.value = !1, H(() => {
                    _.value.clearValidate();
                });
            }, L = () => {
                const e = r.value.filter(a => a.buildId == l.value.structureId)[0];
                e && (l.value.evnGitProId = e.evnGitProId, e.evnGitProName == "frontend" ? f.value = !0 : f.value = !1, 
                e.buildFillId && Le(e.buildFillId).then(a => {
                    l.value.port = (a == null ? void 0 : a.port) ?? null;
                }));
            }, T = () => {
                _.value.validate(e => {
                    if (e) if (f.value) {
                        if (x.value) return void V();
                        C.value.submitUpload();
                    } else V();
                });
            }, w = e => {
                l.value.nginxConfigEid = e.eid, V();
            }, V = () => {
                if (l.value.deployId) Ne(l.value).then(() => {
                    v("refresh"), m.success("编辑成功"), d.value = !1;
                }); else {
                    const e = {
                        groupId: k.params.groupId,
                        projectId: k.params.projectId
                    };
                    Object.assign(e, l.value), Re(e).then(() => {
                        v("refresh"), m.success("新增成功"), d.value = !1;
                    });
                }
            }, i = () => {
                l.value.hasFile = 1, _.value.validateField("hasFile"), x.value = !1;
            }, s = () => {
                l.value.hasFile = null, _.value.validateField("hasFile");
            }, p = () => {
                Pe().then(e => {
                    const a = new Blob([ e ]), o = document.createElement("a");
                    o.download = "nginx模板文件.conf", o.style.display = "none", o.href = URL.createObjectURL(a), 
                    document.body.appendChild(o), o.click(), URL.revokeObjectURL(o.href), 
                    document.body.removeChild(o);
                });
            };
            return z({
                openDialog: e => {
                    e.editFlag && (Object.assign(l.value, e.data), l.value.nginxConfigEid && (l.value.hasFile = 1, 
                    f.value = !0, x.value = !0)), d.value = !0, h.value = e.title, 
                    O(), H(() => {
                        _.value.clearValidate();
                    });
                }
            }), (e, a) => {
                const o = _e, F = be, N = xe, B = Fe, K = Z, X = Ie, W = ke, ee = Ce, ae = ve("trim");
                return I(), R("div", A, [ u(ee, {
                    modelValue: t(d),
                    "onUpdate:modelValue": a[5] || (a[5] = n => ye(d) ? d.value = n : null),
                    title: t(h),
                    "destroy-on-close": "",
                    width: "540px",
                    onClose: P,
                    "append-to-body": !0
                }, {
                    footer: c(() => [ u(W, {
                        onClick: a[4] || (a[4] = n => d.value = !1)
                    }, {
                        default: c(() => [ j("取消") ]),
                        _: 1
                    }), u(W, {
                        type: "primary",
                        onClick: T
                    }, {
                        default: c(() => [ j("确定") ]),
                        _: 1
                    }) ]),
                    default: c(() => [ u(X, {
                        ref_key: "DeployFormRef",
                        ref: _,
                        model: t(l),
                        rules: t(y),
                        "label-width": "100px",
                        size: "large",
                        class: "deploy-form neu"
                    }, {
                        default: c(() => [ u(F, {
                            label: "任务名称",
                            prop: "deploymentTaskName"
                        }, {
                            default: c(() => [ fe(u(o, {
                                modelValue: t(l).deploymentTaskName,
                                "onUpdate:modelValue": a[0] || (a[0] = n => t(l).deploymentTaskName = n),
                                class: "neu",
                                placeholder: "请输入任务名称"
                            }, null, 8, [ "modelValue" ]), [ [ ae ] ]) ]),
                            _: 1
                        }), u(F, {
                            label: "任务描述",
                            prop: "description"
                        }, {
                            default: c(() => [ u(o, {
                                modelValue: t(l).description,
                                "onUpdate:modelValue": a[1] || (a[1] = n => t(l).description = n),
                                "^rows": 5,
                                class: "neu",
                                placeholder: "请输入任务描述",
                                type: "textarea"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(F, {
                            label: "构建任务",
                            prop: "structureId"
                        }, {
                            default: c(() => [ u(B, {
                                modelValue: t(l).structureId,
                                "onUpdate:modelValue": a[2] || (a[2] = n => t(l).structureId = n),
                                class: "neu",
                                placeholder: "请选择",
                                onChange: L
                            }, {
                                default: c(() => [ (I(!0), R(ge, null, he(t(r), n => (I(), 
                                q(N, {
                                    key: n.buildId,
                                    label: n.structureTaskName,
                                    value: n.buildId
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), u(F, {
                            label: "端口",
                            prop: "port"
                        }, {
                            default: c(() => [ u(o, {
                                modelValue: t(l).port,
                                "onUpdate:modelValue": a[3] || (a[3] = n => t(l).port = n),
                                class: "neu",
                                placeholder: "请输入端口号"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), t(f) ? (I(), q(F, {
                            key: 0,
                            label: "配置文件",
                            prop: "hasFile"
                        }, {
                            default: c(() => [ U("div", J, [ j("请选择nginx配置文件 "), U("span", {
                                onClick: p,
                                style: {
                                    display: "flex",
                                    "align-items": "center",
                                    color: "#1d45b5",
                                    "margin-left": "10px",
                                    cursor: "pointer"
                                }
                            }, [ u(K, {
                                icon: "svg-icon:templateDownload",
                                style: {
                                    fill: "#1D45B5"
                                }
                            }), j(" 下载模板") ]) ]), u($, {
                                ref_key: "UploadResourceRef",
                                ref: C,
                                "auto-upload": !1,
                                tooltip: "上传配置后的nginx.conf文件,文件最大不超过10M",
                                size: 10,
                                accept: ".conf",
                                onSuccess: w,
                                onFileChange: i,
                                onFileRemove: s,
                                bodyWidth: "470px"
                            }, null, 512), t(x) ? (I(), R("div", M, " 配置文件已上传 ")) : E("", !0) ]),
                            _: 1
                        })) : E("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-1d69558e" ] ]);
});

export {
    Be as __tla,
    Y as default
};