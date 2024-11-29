import {
    _ as Ce,
    __tla as ze
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    b0 as Ee,
    u as Pe,
    T as Ue,
    r as v,
    e as Fe,
    U as Me,
    f as je,
    j as Oe,
    o as r,
    c as i,
    a,
    z as re,
    A as ne,
    C as D,
    l as c,
    v as m,
    D as w,
    t as o,
    B as ie,
    k as u,
    bo as ue,
    J as Se,
    _ as Le,
    P as qe,
    O as Be,
    Q as He,
    bp as Ke,
    bq as Ae,
    R as Je,
    S as Qe,
    __tla as Ge
} from "./index-6c08ea4c.js";

import {
    _ as We,
    __tla as Xe
} from "./index-a34a73bc.js";

import {
    _ as Ye,
    __tla as Ze
} from "./Editor-ef737d2a.js";

import {
    _ as de
} from "./editorIcon-5192f4b2.js";

import {
    g as ce
} from "./file.data-794ea5d0.js";

import {
    i as pe,
    j as $e,
    k as ea,
    __tla as aa
} from "./pkgManage-4e23f8a8.js";

import {
    q as me,
    h as ta,
    __tla as la
} from "./file-e038b35d.js";

import {
    _ as oa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as sa
} from "./index.es-14d10e28.js";

import {
    __tla as ra
} from "./project-file-a2b4fd07.js";

import "./file_题-23882218.js";

import {
    __tla as na
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as ia
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

let ve, ua = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Ze;
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
        return sa;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})() ]).then(async () => {
    let n, N, T, V, C, z, E, P, U, F, M, j, O, S, L, q, B, H, K, A, J, Q, G, W, X, Y, Z;
    n = h => (Je("data-v-50436062"), h = h(), Qe(), h), N = {
        key: 0,
        style: {
            padding: "20px 30px"
        }
    }, T = n(() => o("img", {
        src: de,
        alt: ""
    }, null, -1)), V = {
        style: {
            "margin-bottom": "20px"
        }
    }, C = n(() => o("span", {
        style: {
            display: "block",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D",
            "margin-bottom": "10px"
        }
    }, "内容", -1)), z = [ "innerHTML" ], E = {
        key: 1,
        style: {
            "padding-left": "20px"
        }
    }, P = {
        key: 1,
        style: {
            "margin-bottom": "20px"
        }
    }, U = n(() => o("span", {
        style: {
            display: "block",
            "margin-bottom": "10px",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D"
        }
    }, "附件", -1)), F = [ "src" ], M = {
        key: 2
    }, j = [ n(() => o("span", {
        style: {
            display: "block",
            "margin-bottom": "10px",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D"
        }
    }, "附件", -1)), n(() => o("div", {
        style: {
            "padding-left": "20px"
        }
    }, "无", -1)) ], O = {
        key: 1,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, S = n(() => o("p", {
        class: ""
    }, "暂无数据", -1)), L = n(() => o("img", {
        src: de,
        alt: ""
    }, null, -1)), q = {
        key: 1,
        class: "height_box"
    }, B = {
        style: {
            padding: "0 30px"
        }
    }, H = n(() => o("div", {
        class: "title_editor"
    }, "内容", -1)), K = n(() => o("div", {
        style: {
            height: "1px"
        }
    }, null, -1)), A = {
        key: 0,
        class: "title_editor"
    }, J = [ "src" ], Q = {
        key: 1,
        class: "title_editor"
    }, G = {
        key: 2
    }, W = n(() => o("div", {
        class: "title_editor",
        style: {
            margin: "5px 0 0 0"
        }
    }, "是否允许下载附件", -1)), X = {
        style: {
            "padding-left": "20px"
        }
    }, Y = n(() => o("div", {
        style: {
            height: "40px"
        }
    }, null, -1)), Z = {
        style: {
            position: "absolute",
            bottom: "0px",
            width: "100%",
            "text-align": "center",
            "box-shadow": "0px -1px 0px 0px #DFDFDF",
            height: "70px",
            "line-height": "70px",
            "background-color": "#fff"
        }
    }, ve = oa({
        __name: "dx",
        emits: [ "isShowTipFun" ],
        setup(h, {
            emit: da
        }) {
            const I = Ee("basicInformation");
            Pe();
            const f = Ue(), $ = v(), k = v(), x = v(!1), b = Fe(() => f.name.includes("Manage")), s = v({
                content: "",
                resourceId: "",
                isDownload: 0
            }), e = v({
                content: null,
                resourceId: null,
                newResourceId: null,
                showNewResourceId: !1,
                isDownload: 0
            }), y = v("preview"), _ = v({
                contentTxt: ""
            }), ee = v(), _e = Me({
                contentTxt: [ {
                    max: 2e3,
                    message: "课程导学最多2000位字符",
                    trigger: "change"
                } ]
            }), ae = () => {
                y.value = "editor", _.value.contentTxt = "", pe(f.params.id).then(l => {
                    if (!l) return !1;
                    e.value = l, l ? l.resourceId && me(l.resourceId).then(t => {
                        e.value.fileInfo = t, e.value.fileInfo.resType = 3, e.value.resName = t.objectKey || t.name;
                        var p = e.value.resName.lastIndexOf(".");
                        e.value.resExt = "." + e.value.resName.substring(p + 1), 
                        e.value.newResourceId = !1, e.value.showNewResourceId = !1;
                    }) : e.value = {
                        content: null,
                        resourceId: null,
                        newResourceId: null,
                        showNewResourceId: !1,
                        isDownload: 0
                    };
                });
            }, te = l => {
                $.value.operation(l.fileInfo);
            }, xe = () => {
                e.value.resourceId = null;
            }, ye = () => {
                ee.value.validate(l => {
                    l && (x.value = !0, e.value.showNewResourceId ? k.value.submitFile() : le());
                });
            }, le = l => {
                l && l.length && (e.value.newResourceId = l[0].eid), e.value && e.value.id ? $e({
                    id: e.value.id,
                    content: e.value.content == "<p><br></p>" ? "" : e.value.content,
                    isDownload: e.value.isDownload,
                    resourceId: e.value.newResourceId ? e.value.newResourceId : e.value.resourceId || ""
                }).then(t => {
                    ue({
                        message: "操作成功",
                        type: "success"
                    }), window.setTimeout(() => {
                        y.value = "preview", g(), x.value = !1;
                    }, 500);
                }).catch(t => {
                    x.value = !1;
                }) : ea({
                    content: e.value.content == "<p><br></p>" ? "" : e.value.content,
                    isDownload: e.value.isDownload,
                    resourceId: e.value.newResourceId ? e.value.newResourceId : e.value.resourceId || "",
                    resPkgId: f.params.id,
                    resRootPkgId: I.value.neuPkgId,
                    resIsNeu: I.value && I.value.neuPkgId ? 1 : 0
                }).then(t => {
                    ue({
                        message: "操作成功",
                        type: "success"
                    }), window.setTimeout(() => {
                        y.value = "preview", g(), x.value = !1;
                    }, 500);
                }).catch(t => {
                    x.value = !1;
                });
            }, he = () => {
                e.value.showNewResourceId = !0;
            }, fe = () => {
                k.value.cancelUpload(), e.value.showNewResourceId = !1;
            }, ge = () => {
                e.value.showNewResourceId = !1;
            }, g = () => {
                pe(f.params.id).then(l => {
                    if (l && !l.content && !l.resourceId) return s.value = null, 
                    !1;
                    s.value = l, l && l.resourceId && me(l.resourceId).then(t => {
                        s.value.fileInfo = t, s.value.fileInfo.resType = 3, s.value.resName = t.objectKey || t.name;
                        var p = s.value.resName.lastIndexOf(".");
                        s.value.resExt = "." + s.value.resName.substring(p + 1);
                    });
                });
            }, we = () => {
                y.value = "preview", e.value = {
                    content: null,
                    resourceId: null,
                    newResourceId: null,
                    showNewResourceId: !1,
                    isDownload: 0
                }, _.value = {
                    contentTxt: ""
                }, g();
            };
            return je(() => {
                g();
            }), (l, t) => {
                const p = Se, Ie = Le, ke = Ye, be = qe, Re = Be, De = He, Ne = We, oe = Ke, Te = Ae, Ve = Ce, se = Oe("hasPermi-none");
                return r(), i("div", {
                    id: "dx",
                    style: {
                        padding: "20px 0 0"
                    },
                    class: re("isManage" + a(b))
                }, [ a(y) == "preview" ? (r(), i("div", {
                    key: 0,
                    style: {
                        padding: "0 30px"
                    },
                    class: re({
                        height_box: a(s)
                    })
                }, [ a(s) ? (r(), i("div", N, [ a(b) ? ne((r(), D(p, {
                    key: 0,
                    class: "right",
                    type: "primary",
                    onClick: ae
                }, {
                    default: c(() => [ T, m(" 编辑") ]),
                    _: 1
                })), [ [ se, [ "teachmanager:teach-course-guidance:update" ] ] ]) : w("", !0), o("div", V, [ C, a(s).content ? (r(), 
                i("div", {
                    key: 0,
                    innerHTML: a(s).content,
                    style: {
                        "padding-left": "20px",
                        "word-break": "break-all",
                        "white-space": "pre-wrap"
                    },
                    class: "editor-content-view wangEditorLinewrapPreView"
                }, null, 8, z)) : (r(), i("div", E, "无")) ]), a(s).resourceId ? (r(), 
                i("div", P, [ U, o("img", {
                    src: a(ce)(a(s).resName + a(s).resExt),
                    alt: "",
                    style: {
                        width: "24px",
                        "margin-right": "5px",
                        "margin-left": "20px",
                        position: "relative",
                        top: "5px"
                    }
                }, null, 8, F), o("span", {
                    class: "file-name__span",
                    onClick: t[0] || (t[0] = d => te(a(s)))
                }, ie(a(s).resName), 1), a(s).isDownload ? (r(), D(p, {
                    key: 0,
                    type: "primary",
                    plain: "",
                    round: "",
                    size: "small",
                    onClick: t[1] || (t[1] = d => {
                        return R = a(s), void ta(R.resourceId, R.resName);
                        var R;
                    })
                }, {
                    default: c(() => [ m("下载附件") ]),
                    _: 1
                })) : w("", !0) ])) : (r(), i("div", M, j)) ])) : (r(), i("div", O, [ u(Ie, {
                    icon: "svg-icon:bg-no-data",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), S, a(b) ? ne((r(), D(p, {
                    key: 0,
                    type: "primary",
                    onClick: ae,
                    style: {
                        "margin-top": "10px"
                    }
                }, {
                    default: c(() => [ L, m(" 编辑") ]),
                    _: 1
                })), [ [ se, [ "teachmanager:teach-course-guidance:update" ] ] ]) : w("", !0) ])) ], 2)) : (r(), 
                i("div", q, [ o("div", B, [ H, u(ke, {
                    modelValue: a(e).content,
                    "onUpdate:modelValue": t[2] || (t[2] = d => a(e).content = d),
                    height: "150px",
                    ltm: 10,
                    text: a(_).contentTxt,
                    "onUpdate:text": t[3] || (t[3] = d => a(_).contentTxt = d)
                }, null, 8, [ "modelValue", "text" ]), u(De, {
                    ref_key: "formRef",
                    ref: ee,
                    model: a(_),
                    rules: a(_e),
                    style: {
                        margin: "10px 0"
                    }
                }, {
                    default: c(() => [ u(Re, {
                        prop: "contentTxt",
                        label: ""
                    }, {
                        default: c(() => [ u(be, {
                            modelValue: a(_).contentTxt,
                            "onUpdate:modelValue": t[4] || (t[4] = d => a(_).contentTxt = d),
                            style: {
                                display: "none"
                            }
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]), K, a(e).resourceId ? (r(), i("div", A, [ m("附件      "), o("img", {
                    src: a(ce)(a(e).resName + a(e).resExt),
                    alt: "",
                    style: {
                        width: "24px",
                        "margin-right": "5px",
                        position: "relative",
                        top: "5px"
                    }
                }, null, 8, J), o("span", {
                    class: "file-name__span",
                    onClick: t[5] || (t[5] = d => te(a(e)))
                }, ie(a(e).resName), 1), m("  "), o("span", {
                    style: {
                        color: "#E14635",
                        cursor: "pointer"
                    },
                    onClick: xe
                }, "删除") ])) : (r(), i("div", Q, "附件")), o("div", null, [ u(Ne, {
                    ref_key: "NeuUploadRef",
                    ref: k,
                    accept: ".doc,.docx,.ppt,.pptx,.pdf",
                    alert: "总文件大小不得超过50M",
                    limit: 1,
                    size: 50,
                    onSuccess: le,
                    onError: fe,
                    onFileChange: he,
                    onFileRemove: ge,
                    showUploadIcon: !0,
                    showTooltip: !1,
                    innerBoxTip: "请上传.doc,.docx,.ppt,.pptx,.pdf文件，大小不得超过50M",
                    style: {
                        width: "360px"
                    }
                }, null, 512) ]), a(e).showNewResourceId || a(e).resourceId ? (r(), 
                i("div", G, [ W, o("div", X, [ u(Te, {
                    modelValue: a(e).isDownload,
                    "onUpdate:modelValue": t[6] || (t[6] = d => a(e).isDownload = d)
                }, {
                    default: c(() => [ u(oe, {
                        value: 1,
                        size: "large"
                    }, {
                        default: c(() => [ m("是") ]),
                        _: 1
                    }), u(oe, {
                        value: 0,
                        size: "large"
                    }, {
                        default: c(() => [ m("否") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ])) : w("", !0), Y ]), o("div", Z, [ u(p, {
                    onClick: we
                }, {
                    default: c(() => [ m("取消") ]),
                    _: 1
                }), u(p, {
                    type: "primary",
                    onClick: ye,
                    disabled: a(x)
                }, {
                    default: c(() => [ m("保存") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ])), u(Ve, {
                    ref_key: "ResourcePreviewRef",
                    ref: $
                }, null, 512) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-50436062" ] ]);
});

export {
    ua as __tla,
    ve as default
};