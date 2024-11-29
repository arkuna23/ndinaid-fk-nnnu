import {
    d as me,
    h as _e,
    r as n,
    e as fe,
    p as ve,
    a6 as y,
    f as ge,
    j as ye,
    o as p,
    c as I,
    k as s,
    l as d,
    A as E,
    v as f,
    G as z,
    a,
    H as be,
    F as P,
    y as Y,
    C as v,
    D as x,
    dP as he,
    m as we,
    n as Te,
    P as xe,
    O as Ve,
    ab as Ie,
    ac as Ee,
    ak as De,
    bp as Ue,
    bq as Se,
    N as ke,
    Q as Ne,
    J as qe,
    aU as Ce,
    R as Re,
    S as Fe,
    t as Oe,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    _ as Pe,
    __tla as Ye
} from "./index-a34a73bc.js";

import {
    _ as Ae,
    __tla as Le
} from "./Editor-ef737d2a.js";

import {
    v as Me
} from "./validate-b72f006c.js";

import {
    b as A,
    D as L,
    __tla as je
} from "./dict-c5825220.js";

import {
    g as Be,
    a as Ke,
    u as Ge,
    __tla as Je
} from "./index-95092119.js";

import {
    d as He,
    h as Qe
} from "./tree-05ea8e09.js";

import {
    a as Ze,
    __tla as We
} from "./index-7c75bd27.js";

import {
    q as Xe,
    __tla as $e
} from "./file-e038b35d.js";

import {
    u as ea,
    __tla as aa
} from "./message-dd00d81b.js";

import {
    E as la,
    __tla as ta
} from "./index-ef4d146e.js";

import {
    _ as sa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./file_题-23882218.js";

import {
    __tla as da
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as ia
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as ra
} from "./index-67f95b27.js";

let M, oa = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})() ]).then(async () => {
    let D, U;
    D = {
        class: "add-notice"
    }, U = (b => (Re("data-v-aadcd485"), b = b(), Fe(), b))(() => Oe("span", {
        style: {
            "line-height": "normal"
        }
    }, "是否允许下载", -1)), M = sa(me({
        __name: "addNotice",
        emits: [ "refresh" ],
        setup(b, {
            expose: j,
            emit: B
        }) {
            const K = ea();
            _e();
            const c = n(), m = n(), G = B, h = n(!1), J = fe(() => ({
                ...He,
                disabled: o => o.status !== 0
            })), w = n(!0), S = n({
                module: "tenant",
                isDynamic: 0
            }), _ = n(!1), k = n("新建"), N = n(""), V = n([]), r = n("add"), l = n({
                title: "",
                classify: "",
                content: "",
                isDownload: 0,
                sendTime: "",
                sendType: 1,
                targetType: 1,
                targetIdentities: [],
                targetDeptIds: [],
                fileEid: null
            }), H = ve(), Q = n({
                title: [ {
                    required: !0,
                    message: "标题不能为空",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: Me,
                    message: "标题不能为空",
                    trigger: [ "blur", "change" ]
                }, {
                    max: 50,
                    message: "长度在50个字符以内",
                    trigger: [ "blur", "change" ]
                } ],
                classify: [ {
                    required: !0,
                    message: "通知类型不能为空",
                    trigger: [ "blur", "change" ]
                } ],
                content: [ {
                    required: !0,
                    message: "通知内容不能为空",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (o, e, i) => {
                        e === "<p><br></p>" ? i(new Error("通知内容不能为空")) : i();
                    },
                    trigger: [ "blur", "change" ]
                } ],
                fileEid: [ {
                    required: !0,
                    message: "",
                    trigger: [ "blur", "change" ]
                } ],
                targetDeptIds: [ {
                    required: !0,
                    message: "组织架构不能为空",
                    trigger: [ "blur", "change" ]
                } ],
                targetIdentities: [ {
                    required: !0,
                    message: "发送对象不能为空",
                    trigger: [ "blur", "change" ]
                } ],
                sendTime: [ {
                    required: !0,
                    message: "请选择发布日期",
                    trigger: [ "blur", "change" ]
                }, {
                    validator: (o, e, i) => {
                        e ? l.value.sendType == 2 && y(e).valueOf() < y(y(new Date()).valueOf() + 18e5).valueOf() ? i(new Error("所选时间需大于当前时间+30分钟")) : i() : i(new Error("请选择发布日期"));
                    },
                    trigger: [ "blur", "change" ]
                } ]
            }), Z = async o => {
                const e = await Be({
                    id: o
                });
                if (l.value = e, N.value = e.fileEid, e.sendType == 1 && (l.value.sendTime = ""), 
                e.targetType == 1 && (l.value.targetIdentities = [], l.value.targetDeptIds = []), 
                e.fileEid) {
                    const i = await Xe(e.fileEid);
                    let u = i.objectKey.split(".");
                    Te(() => {
                        var g;
                        m.value.fileList = [ {
                            name: i.objectKey,
                            size: i.fileSize,
                            eid: i.eid,
                            status: 1,
                            fileSuffix: u[u.length - 1].toUpperCase()
                        } ], (g = c.value) == null || g.clearValidate();
                    });
                }
            }, W = () => {
                c.value.validate(async o => {
                    var e;
                    if (o) if (((e = m.value.fileList) == null ? void 0 : e.length) > 0 && N.value !== m.value.fileList[0].eid) w.value = !1, 
                    m.value.submitFile(); else {
                        w.value = !0;
                        const i = {
                            ...S.value,
                            ...l.value,
                            type: 1
                        };
                        i.sendType == 2 && (i.sendTime = y(i.sendTime).valueOf()), 
                        q(i);
                    }
                });
            }, q = async o => {
                h.value = !0;
                let e = r.value == "add" ? Ke : Ge;
                try {
                    await e(o), H.success("保存成功"), _.value = !1, G("refresh"), K.getUnReadNumn(), 
                    h.value = !1;
                } catch {
                    w.value = !0, m.value.cancelUpload(), C(), h.value = !1;
                }
            }, X = () => {
                l.value = {
                    title: "",
                    classify: "",
                    content: "",
                    isDownload: 0,
                    sendTime: "",
                    sendType: 1,
                    targetType: 1,
                    targetIdentities: [],
                    targetDeptIds: [],
                    fileEid: null
                }, c.value.resetFields(), m.value.cancelUpload();
            }, C = () => {
                l.value.fileEid = null, (r.value = "edit") && (l.value.fileEid = "");
            }, $ = n({
                status: 0
            }), ee = async o => {
                $.value = o[0], l.value.fileEid = o[0].eid;
                const e = {
                    ...S.value,
                    ...l.value
                };
                e.sendType == 2 && (e.sendTime = y(e.sendTime).valueOf()), q(e);
            }, ae = () => {
                c.value.fileEid = null, m.value.cancelUpload();
            }, le = async (o = {}) => {
                const e = await Ze(o);
                V.value = [], V.value.push(...Qe(e));
            }, te = () => {
                r.value !== "view" && c.value.validateField("content");
            }, se = () => {
                c.value.content === "<p><br></p>" && c.value.clearValidate("content");
            };
            return ge(() => {}), j({
                openDialog: ({
                    data: o,
                    type: e
                }) => {
                    _.value = !0, r.value = e, k.value = e === "add" ? "新建" : e === "edit" ? "编辑" : "查看", 
                    le(), e != "edit" && e != "view" || Z(o.id);
                }
            }), (o, e) => {
                const i = xe, u = Ve, g = Ie, R = Ee, de = Ae, ie = De, re = Pe, T = Ue, F = Se, oe = ke, ue = la, ne = Ne, O = qe, pe = Ce, ce = ye("trim");
                return p(), I("div", D, [ s(pe, {
                    modelValue: a(_),
                    "onUpdate:modelValue": e[11] || (e[11] = t => we(_) ? _.value = t : null),
                    scroll: !0,
                    "max-height": 550,
                    title: a(k),
                    width: "1000",
                    onClose: X
                }, {
                    footer: d(() => [ E(s(O, {
                        type: "default",
                        onClick: e[10] || (e[10] = t => _.value = !1)
                    }, {
                        default: d(() => [ f("取消") ]),
                        _: 1
                    }, 512), [ [ z, a(r) !== "view" ] ]), E(s(O, {
                        type: "primary",
                        onClick: W,
                        loading: a(h)
                    }, {
                        default: d(() => [ f("确定") ]),
                        _: 1
                    }, 8, [ "loading" ]), [ [ z, a(r) !== "view" ] ]) ]),
                    default: d(() => [ s(ne, {
                        ref_key: "addNoticeFormRef",
                        ref: c,
                        model: a(l),
                        rules: a(Q),
                        class: "neu",
                        onSubmit: e[9] || (e[9] = be(() => {}, [ "prevent" ])),
                        size: "large"
                    }, {
                        default: d(() => [ s(u, {
                            label: "标题",
                            prop: "title"
                        }, {
                            default: d(() => [ E(s(i, {
                                modelValue: a(l).title,
                                "onUpdate:modelValue": e[0] || (e[0] = t => a(l).title = t),
                                placeholder: "请输入标题",
                                maxlength: 50,
                                "show-word-limit": "",
                                clearable: "",
                                style: {
                                    width: "400px"
                                },
                                readonly: a(r) === "view"
                            }, null, 8, [ "modelValue", "readonly" ]), [ [ ce ] ]) ]),
                            _: 1
                        }), s(u, {
                            label: "通知类型",
                            prop: "classify"
                        }, {
                            default: d(() => [ s(R, {
                                modelValue: a(l).classify,
                                "onUpdate:modelValue": e[1] || (e[1] = t => a(l).classify = t),
                                placeholder: "请选择",
                                style: {
                                    width: "400px"
                                },
                                disabled: a(r) === "view"
                            }, {
                                default: d(() => [ (p(!0), I(P, null, Y(a(A)(a(L).SYSTEM_NOTIFY_CLASSIFY_TENANT), t => (p(), 
                                v(g, {
                                    key: t.value,
                                    label: t.label,
                                    value: t.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), s(u, {
                            label: "通知内容",
                            prop: "content"
                        }, {
                            default: d(() => [ a(_) ? (p(), v(de, {
                                key: 0,
                                modelValue: a(l).content,
                                "onUpdate:modelValue": e[2] || (e[2] = t => a(l).content = t),
                                height: 150,
                                editorId: "noticeEditorID",
                                readonly: a(r) === "view",
                                onEditorBlur: te,
                                onChange: se
                            }, null, 8, [ "modelValue", "readonly" ])) : x("", !0) ]),
                            _: 1
                        }), s(u, {
                            label: "附件",
                            class: "mb-0"
                        }, {
                            default: d(() => [ U, s(ie, {
                                modelValue: a(l).isDownload,
                                "onUpdate:modelValue": e[3] || (e[3] = t => a(l).isDownload = t),
                                style: {
                                    "--el-switch-on-color": "#245fe6",
                                    "margin-left": "5px"
                                },
                                size: "default",
                                "active-value": 1,
                                "inactive-value": 0,
                                disabled: a(r) === "view"
                            }, null, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), s(u, null, {
                            default: d(() => [ s(re, {
                                limit: 1,
                                style: {
                                    width: "360px"
                                },
                                showUploadIcon: "",
                                onSuccess: ee,
                                onError: ae,
                                onFileRemove: C,
                                ref_key: "NeuUploadRef",
                                ref: m,
                                accept: ".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt",
                                size: 20,
                                noUploadTipShow: a(w),
                                isDisabled: a(r) === "view",
                                noRemove: a(r) === "view",
                                alert: "仅限上传一个文件，20MB以内",
                                tooltip: "<span>文档类：.doc/.docx/.xls/.xlsx/.ppt/.pptx/.pdf/.txt</span>",
                                from: "notice"
                            }, null, 8, [ "noUploadTipShow", "isDisabled", "noRemove" ]) ]),
                            _: 1
                        }), s(u, {
                            label: "发布时间",
                            prop: "sendType"
                        }, {
                            default: d(() => [ s(F, {
                                modelValue: a(l).sendType,
                                "onUpdate:modelValue": e[4] || (e[4] = t => a(l).sendType = t),
                                style: {
                                    "margin-left": "10px"
                                },
                                disabled: a(r) === "view"
                            }, {
                                default: d(() => [ s(T, {
                                    label: 1
                                }, {
                                    default: d(() => [ f("立刻发布") ]),
                                    _: 1
                                }), s(T, {
                                    label: 2
                                }, {
                                    default: d(() => [ f("定时发布") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]), a(l).sendType == 2 ? (p(), 
                            v(u, {
                                key: 0,
                                style: {
                                    "margin-bottom": "0"
                                },
                                prop: "sendTime"
                            }, {
                                default: d(() => [ s(oe, {
                                    class: "neu-date-picker",
                                    modelValue: a(l).sendTime,
                                    "onUpdate:modelValue": e[5] || (e[5] = t => a(l).sendTime = t),
                                    type: "datetime",
                                    placeholder: "选择日期时间",
                                    style: {
                                        width: "180px",
                                        "margin-left": "10px"
                                    },
                                    size: "default",
                                    "prefix-icon": a(he),
                                    disabled: a(r) === "view"
                                }, null, 8, [ "modelValue", "prefix-icon", "disabled" ]) ]),
                                _: 1
                            })) : x("", !0) ]),
                            _: 1
                        }), s(u, {
                            label: "可见范围",
                            prop: ""
                        }, {
                            default: d(() => [ s(F, {
                                modelValue: a(l).targetType,
                                "onUpdate:modelValue": e[6] || (e[6] = t => a(l).targetType = t),
                                style: {
                                    "margin-left": "10px"
                                },
                                disabled: a(r) === "view"
                            }, {
                                default: d(() => [ s(T, {
                                    label: 1
                                }, {
                                    default: d(() => [ f("全体") ]),
                                    _: 1
                                }), s(T, {
                                    label: 2
                                }, {
                                    default: d(() => [ f("定向发布") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), a(l).targetType == 2 ? (p(), v(u, {
                            key: 0,
                            label: "组织架构",
                            prop: "targetDeptIds"
                        }, {
                            default: d(() => [ s(ue, {
                                ref: "treeSelectRef",
                                modelValue: a(l).targetDeptIds,
                                "onUpdate:modelValue": e[7] || (e[7] = t => a(l).targetDeptIds = t),
                                data: a(V),
                                props: a(J),
                                clearable: "",
                                "collapse-tags": !0,
                                "collapse-tags-tooltip": "",
                                style: {
                                    width: "400px"
                                },
                                "check-strictly": "",
                                filterable: "",
                                multiple: "",
                                "default-expand-all": "",
                                placeholder: "请选择组织架构",
                                "value-key": "id",
                                class: "dept-tree-select",
                                disabled: a(r) === "view"
                            }, null, 8, [ "modelValue", "data", "props", "disabled" ]) ]),
                            _: 1
                        })) : x("", !0), a(l).targetType == 2 ? (p(), v(u, {
                            key: 1,
                            label: "发送对象",
                            prop: "targetIdentities"
                        }, {
                            default: d(() => [ s(R, {
                                modelValue: a(l).targetIdentities,
                                "onUpdate:modelValue": e[8] || (e[8] = t => a(l).targetIdentities = t),
                                clearable: "",
                                "collapse-tags": "",
                                "max-collapse-tags": 3,
                                "collapse-tags-tooltip": "",
                                multiple: "",
                                placeholder: "请选择发送对象",
                                style: {
                                    width: "400px"
                                },
                                disabled: a(r) === "view"
                            }, {
                                default: d(() => [ (p(!0), I(P, null, Y(a(A)(a(L).SYSTEM_PERMISSION_INDETITY).filter(t => t.value != 1), t => (p(), 
                                v(g, {
                                    key: t.value,
                                    label: t.label,
                                    value: t.value + ""
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        })) : x("", !0) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-aadcd485" ] ]);
});

export {
    oa as __tla,
    M as default
};