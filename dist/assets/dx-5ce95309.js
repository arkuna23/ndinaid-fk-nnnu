import {
    _ as Ce,
    __tla as Ve
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    b0 as ze,
    u as Ue,
    T as Fe,
    r as v,
    e as Ee,
    U as Me,
    f as je,
    j as Se,
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
    J as qe,
    _ as Le,
    P as Oe,
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
    l as pe,
    m as $e,
    o as ea,
    __tla as aa
} from "./pkgManage-14933852.js";

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
        return Ve;
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
    let n, N, T, P, C, V, z, U, F, E, M, j, S, q, L, O, B, H, K, A, J, Q, G, W, X, Y, Z;
    n = f => (Je("data-v-74201ec2"), f = f(), Qe(), f), N = {
        key: 0,
        style: {
            padding: "20px 30px"
        }
    }, T = n(() => o("img", {
        src: de,
        alt: ""
    }, null, -1)), P = {
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
    }, "内容", -1)), V = [ "innerHTML" ], z = {
        key: 1,
        style: {
            "padding-left": "20px"
        }
    }, U = {
        key: 1,
        style: {
            "margin-bottom": "20px"
        }
    }, F = n(() => o("span", {
        style: {
            display: "block",
            "margin-bottom": "10px",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D"
        }
    }, "附件", -1)), E = [ "src" ], M = {
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
    }, "无", -1)) ], S = {
        key: 1,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, q = n(() => o("p", {
        class: ""
    }, "暂无数据", -1)), L = n(() => o("img", {
        src: de,
        alt: ""
    }, null, -1)), O = {
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
        setup(f, {
            emit: da
        }) {
            const I = ze("basicInformation");
            Ue();
            const x = Fe(), $ = v(), k = v(), y = v(!1), b = Ee(() => x.name.includes("Manage")), s = v({
                content: "",
                resourceId: "",
                isDownload: 0
            }), e = v({
                content: null,
                resourceId: null,
                newResourceId: null,
                showNewResourceId: !1,
                isDownload: 0
            }), h = v("preview"), _ = v({
                contentTxt: ""
            }), ee = v(), _e = Me({
                contentTxt: [ {
                    max: 2e3,
                    message: "课程导学最多2000位字符",
                    trigger: "change"
                } ]
            }), ae = () => {
                h.value = "editor", _.value.contentTxt = "", pe({
                    id: x.params.id
                }).then(t => {
                    if (!(t = t && t[0])) return !1;
                    e.value = t, t ? t.resourceId && me(t.resourceId).then(l => {
                        e.value.fileInfo = l, e.value.fileInfo.resType = 3, e.value.resName = l.objectKey || l.name;
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
            }, te = t => {
                $.value.operation(t.fileInfo);
            }, xe = () => {
                e.value.resourceId = null;
            }, ye = () => {
                ee.value.validate(t => {
                    t && (y.value = !0, e.value.showNewResourceId ? k.value.submitFile() : le());
                });
            }, le = t => {
                t && t.length && (e.value.newResourceId = t[0].eid), e.value && e.value.id ? $e({
                    id: e.value.id,
                    neuPkgId: x.params.id,
                    content: e.value.content == "<p><br></p>" ? "" : e.value.content,
                    isDownload: e.value.isDownload,
                    resourceId: e.value.newResourceId ? e.value.newResourceId : e.value.resourceId || ""
                }).then(l => {
                    ue({
                        message: "操作成功",
                        type: "success"
                    }), window.setTimeout(() => {
                        h.value = "preview", g(), y.value = !1;
                    }, 500);
                }).catch(l => {
                    y.value = !1;
                }) : ea({
                    content: e.value.content == "<p><br></p>" ? "" : e.value.content,
                    isDownload: e.value.isDownload,
                    resourceId: e.value.newResourceId ? e.value.newResourceId : e.value.resourceId || "",
                    resPkgId: x.params.id,
                    neuPkgId: x.params.id,
                    resRootPkgId: I.value.neuPkgId,
                    resIsNeu: I.value && I.value.neuPkgId ? 1 : 0
                }).then(l => {
                    ue({
                        message: "操作成功",
                        type: "success"
                    }), window.setTimeout(() => {
                        h.value = "preview", g(), y.value = !1;
                    }, 500);
                }).catch(l => {
                    y.value = !1;
                });
            }, he = () => {
                e.value.showNewResourceId = !0;
            }, fe = () => {
                k.value.cancelUpload(), e.value.showNewResourceId = !1;
            }, ge = () => {
                e.value.showNewResourceId = !1;
            }, g = () => {
                pe({
                    id: x.params.id
                }).then(t => {
                    if ((t = t && t[0]) && !t.content && !t.resourceId) return s.value = null, 
                    !1;
                    s.value = t, t && t.resourceId && me(t.resourceId).then(l => {
                        s.value.fileInfo = l, s.value.fileInfo.resType = 3, s.value.resName = l.objectKey || l.name;
                        var p = s.value.resName.lastIndexOf(".");
                        s.value.resExt = "." + s.value.resName.substring(p + 1);
                    });
                });
            }, we = () => {
                h.value = "preview", e.value = {
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
            }), (t, l) => {
                const p = qe, Ie = Le, ke = Ye, be = Oe, Re = Be, De = He, Ne = We, oe = Ke, Te = Ae, Pe = Ce, se = Se("hasPermi-none");
                return r(), i("div", {
                    id: "dx",
                    style: {
                        padding: "20px 0 0"
                    },
                    class: re("isManage" + a(b))
                }, [ a(h) == "preview" ? (r(), i("div", {
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
                })), [ [ se, [ "teachmanager:teach-course-guidance:update" ] ] ]) : w("", !0), o("div", P, [ C, a(s).content ? (r(), 
                i("div", {
                    key: 0,
                    innerHTML: a(s).content,
                    style: {
                        "padding-left": "20px",
                        "word-break": "break-all",
                        "white-space": "pre-wrap"
                    },
                    class: "editor-content-view wangEditorLinewrapPreView"
                }, null, 8, V)) : (r(), i("div", z, "无")) ]), a(s).resourceId ? (r(), 
                i("div", U, [ F, o("img", {
                    src: a(ce)(a(s).resName + a(s).resExt),
                    alt: "",
                    style: {
                        width: "24px",
                        "margin-right": "5px",
                        "margin-left": "20px",
                        position: "relative",
                        top: "5px"
                    }
                }, null, 8, E), o("span", {
                    class: "file-name__span",
                    onClick: l[0] || (l[0] = d => te(a(s)))
                }, ie(a(s).resName), 1), a(s).isDownload ? (r(), D(p, {
                    key: 0,
                    type: "primary",
                    plain: "",
                    round: "",
                    size: "small",
                    onClick: l[1] || (l[1] = d => {
                        return R = a(s), void ta(R.resourceId, R.resName);
                        var R;
                    })
                }, {
                    default: c(() => [ m("下载附件") ]),
                    _: 1
                })) : w("", !0) ])) : (r(), i("div", M, j)) ])) : (r(), i("div", S, [ u(Ie, {
                    icon: "svg-icon:bg-no-data",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), q, a(b) ? ne((r(), D(p, {
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
                i("div", O, [ o("div", B, [ H, u(ke, {
                    modelValue: a(e).content,
                    "onUpdate:modelValue": l[2] || (l[2] = d => a(e).content = d),
                    height: "150px",
                    ltm: 10,
                    text: a(_).contentTxt,
                    "onUpdate:text": l[3] || (l[3] = d => a(_).contentTxt = d)
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
                            "onUpdate:modelValue": l[4] || (l[4] = d => a(_).contentTxt = d),
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
                    onClick: l[5] || (l[5] = d => te(a(e)))
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
                    "onUpdate:modelValue": l[6] || (l[6] = d => a(e).isDownload = d)
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
                    disabled: a(y)
                }, {
                    default: c(() => [ m("保存") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ])), u(Pe, {
                    ref_key: "ResourcePreviewRef",
                    ref: $
                }, null, 512) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-74201ec2" ] ]);
});

export {
    ua as __tla,
    ve as default
};