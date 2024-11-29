import {
    _ as we,
    __tla as ge
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    u as Ie,
    T as ke,
    r as c,
    U as be,
    f as De,
    o as r,
    c as n,
    a as e,
    z as Re,
    t as o,
    B as Z,
    C as Ne,
    l as p,
    v as _,
    D as $,
    k as i,
    bo as Te,
    J as Ce,
    _ as ze,
    P as Fe,
    O as Ve,
    Q as Ue,
    bp as Ee,
    bq as Pe,
    R as Me,
    S as Se,
    __tla as Le
} from "./index-6c08ea4c.js";

import {
    _ as qe,
    __tla as Be
} from "./index-a34a73bc.js";

import {
    _ as He,
    __tla as Oe
} from "./Editor-ef737d2a.js";

import {
    g as ee
} from "./file.data-794ea5d0.js";

import {
    Q as Qe,
    P as je,
    __tla as Ge
} from "./index-9567cbf6.js";

import {
    h as Je,
    q as Ke,
    __tla as Ae
} from "./file-e038b35d.js";

import {
    _ as We
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Xe
} from "./index.es-14d10e28.js";

import {
    __tla as Ye
} from "./project-file-a2b4fd07.js";

import "./file_题-23882218.js";

import {
    __tla as Ze
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as $e
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

let te, et = Promise.all([ (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})() ]).then(async () => {
    let d, g, I, k, b, D, R, N, T, C, z, F, V, U, E, P, M, S, L, q, B, H, O, Q, j, G;
    d = v => (Me("data-v-a499361d"), v = v(), Se(), v), g = {
        id: "dx",
        style: {
            padding: "20px 0 0"
        }
    }, I = {
        key: 0,
        style: {
            padding: "20px 30px"
        }
    }, k = {
        style: {
            "margin-bottom": "20px"
        }
    }, b = d(() => o("span", {
        style: {
            display: "block",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D",
            "margin-bottom": "10px"
        }
    }, "内容", -1)), D = [ "innerHTML" ], R = {
        key: 1,
        style: {
            "padding-left": "20px"
        }
    }, N = {
        key: 0
    }, T = d(() => o("span", {
        style: {
            display: "block",
            "margin-bottom": "10px",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D"
        }
    }, "附件", -1)), C = [ "src" ], z = {
        key: 1
    }, F = [ d(() => o("span", {
        style: {
            display: "block",
            "margin-bottom": "10px",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D"
        }
    }, "附件", -1)), d(() => o("div", {
        style: {
            "padding-left": "20px"
        }
    }, "无", -1)) ], V = {
        key: 1,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, U = d(() => o("p", {
        style: {
            "margin-top": "10px"
        }
    }, "暂无数据", -1)), E = {
        key: 1,
        class: "height_box"
    }, P = {
        style: {
            padding: "0 30px"
        }
    }, M = d(() => o("div", {
        class: "title_editor"
    }, "内容", -1)), S = d(() => o("div", {
        style: {
            height: "1px"
        }
    }, null, -1)), L = {
        key: 0,
        class: "title_editor"
    }, q = [ "src" ], B = {
        key: 1,
        class: "title_editor"
    }, H = {
        key: 2
    }, O = d(() => o("div", {
        class: "title_editor",
        style: {
            margin: "5px 0 0 0"
        }
    }, "是否允许下载附件", -1)), Q = {
        style: {
            "padding-left": "20px"
        }
    }, j = d(() => o("div", {
        style: {
            height: "40px"
        }
    }, null, -1)), G = {
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
    }, te = We({
        __name: "dx",
        emits: [ "isShowTipFun" ],
        setup(v, {
            emit: ae
        }) {
            Ie();
            const J = ke(), K = c(), y = c(), a = c({
                content: "",
                resourceId: "",
                isDownload: 0
            }), t = c({
                content: null,
                resourceId: null,
                newResourceId: null,
                showNewResourceId: !1,
                isDownload: 0
            }), h = c("preview"), le = ae, m = c({
                contentTxt: ""
            }), A = c(), oe = be({
                contentTxt: [ {
                    max: 2e3,
                    message: "课程导学最多2000位字符",
                    trigger: "change"
                } ]
            }), se = l => {
                m.value.contentTxt = l;
            }, W = l => {
                K.value.operation(l.fileInfo);
            }, re = () => {
                t.value.resourceId = null;
            }, ne = () => {
                A.value.validate(l => {
                    l && (t.value.showNewResourceId ? y.value.submitFile() : X());
                });
            }, X = l => {
                l && l.length && (t.value.newResourceId = l[0].eid), Qe({
                    teachCourseId: J.params.teachCourseId,
                    content: t.value.content,
                    isDownload: t.value.isDownload,
                    resourceId: t.value.newResourceId ? t.value.newResourceId : t.value.resourceId || ""
                }).then(s => {
                    Te({
                        message: "操作成功",
                        type: "success"
                    }), h.value = "preview", f();
                });
            }, ie = () => {
                t.value.showNewResourceId = !0;
            }, de = () => {
                y.value.cancelUpload(), t.value.showNewResourceId = !1;
            }, ue = () => {
                t.value.showNewResourceId = !1;
            }, f = () => {
                je({
                    teachCourseId: J.params.teachCourseId
                }).then(l => {
                    if (l && !l.content && !l.resourceId) return a.value = null, 
                    !1;
                    a.value = l, le("isShowTipFun", l), l && l.resourceId && Ke(l.resourceId).then(s => {
                        a.value.fileInfo = s, a.value.fileInfo.resType = 3, a.value.resName = s.objectKey || s.name;
                        var x = a.value.resName.lastIndexOf(".");
                        a.value.resExt = "." + a.value.resName.substring(x + 1);
                    });
                });
            }, pe = () => {
                h.value = "preview", t.value = {
                    content: null,
                    resourceId: null,
                    newResourceId: null,
                    showNewResourceId: !1,
                    isDownload: 0
                }, m.value = {
                    contentTxt: ""
                }, f();
            };
            return De(() => {
                f();
            }), (l, s) => {
                const x = Ce, ce = ze, _e = He, me = Fe, xe = Ve, ve = Ue, ye = qe, Y = Ee, he = Pe, fe = we;
                return r(), n("div", g, [ e(h) == "preview" ? (r(), n("div", {
                    key: 0,
                    style: {
                        padding: "0 30px"
                    },
                    class: Re({
                        height_box: e(a)
                    })
                }, [ e(a) ? (r(), n("div", I, [ o("div", k, [ b, e(a).content ? (r(), 
                n("div", {
                    key: 0,
                    innerHTML: e(a).content,
                    style: {
                        "padding-left": "20px",
                        "word-break": "break-all",
                        "white-space": "pre-wrap"
                    },
                    class: "editor-content-view wangEditorLinewrapPreView"
                }, null, 8, D)) : (r(), n("div", R, "无")) ]), e(a).resourceId ? (r(), 
                n("div", N, [ T, o("img", {
                    src: e(ee)(e(a).resName + e(a).resExt),
                    alt: "",
                    style: {
                        width: "24px",
                        "margin-right": "5px",
                        "margin-left": "20px",
                        position: "relative",
                        top: "5px"
                    }
                }, null, 8, C), o("span", {
                    class: "file-name__span",
                    onClick: s[0] || (s[0] = u => W(e(a)))
                }, Z(e(a).resName), 1), e(a).isDownload ? (r(), Ne(x, {
                    key: 0,
                    type: "primary",
                    plain: "",
                    round: "",
                    size: "small",
                    onClick: s[1] || (s[1] = u => {
                        return w = e(a), void Je(w.resourceId, w.resName);
                        var w;
                    })
                }, {
                    default: p(() => [ _("下载附件") ]),
                    _: 1
                })) : $("", !0) ])) : (r(), n("div", z, F)) ])) : (r(), n("div", V, [ i(ce, {
                    icon: "svg-icon:bg-no-data-stu",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), U ])) ], 2)) : (r(), n("div", E, [ o("div", P, [ M, i(_e, {
                    modelValue: e(t).content,
                    "onUpdate:modelValue": s[2] || (s[2] = u => e(t).content = u),
                    height: "150px",
                    ltm: 10,
                    onGetPlainText: se
                }, null, 8, [ "modelValue" ]), i(ve, {
                    ref_key: "formRef",
                    ref: A,
                    model: e(m),
                    rules: e(oe),
                    style: {
                        margin: "10px 0"
                    }
                }, {
                    default: p(() => [ i(xe, {
                        prop: "contentTxt",
                        label: ""
                    }, {
                        default: p(() => [ i(me, {
                            modelValue: e(m).contentTxt,
                            "onUpdate:modelValue": s[3] || (s[3] = u => e(m).contentTxt = u),
                            style: {
                                display: "none"
                            }
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]), S, e(t).resourceId ? (r(), n("div", L, [ _("附件      "), o("img", {
                    src: e(ee)(e(t).resName + e(t).resExt),
                    alt: "",
                    style: {
                        width: "24px",
                        "margin-right": "5px",
                        position: "relative",
                        top: "5px"
                    }
                }, null, 8, q), o("span", {
                    class: "file-name__span",
                    onClick: s[4] || (s[4] = u => W(e(t)))
                }, Z(e(t).resName), 1), _("  "), o("span", {
                    style: {
                        color: "#E14635",
                        cursor: "pointer"
                    },
                    onClick: re
                }, "删除") ])) : (r(), n("div", B, "附件")), o("div", null, [ i(ye, {
                    ref_key: "NeuUploadRef",
                    ref: y,
                    accept: ".doc,.docx,.ppt,.pptx,.pdf",
                    alert: "总文件大小不得超过20M",
                    limit: 1,
                    size: 20,
                    onSuccess: X,
                    onError: de,
                    onFileChange: ie,
                    onFileRemove: ue,
                    showUploadIcon: !0,
                    showTooltip: !1,
                    innerBoxTip: "请上传.doc,.docx,.ppt,.pptx,.pdf文件，大小不得超过20M",
                    style: {
                        width: "360px"
                    }
                }, null, 512) ]), e(t).showNewResourceId || e(t).resourceId ? (r(), 
                n("div", H, [ O, o("div", Q, [ i(he, {
                    modelValue: e(t).isDownload,
                    "onUpdate:modelValue": s[5] || (s[5] = u => e(t).isDownload = u)
                }, {
                    default: p(() => [ i(Y, {
                        value: 1,
                        size: "large"
                    }, {
                        default: p(() => [ _("是") ]),
                        _: 1
                    }), i(Y, {
                        value: 0,
                        size: "large"
                    }, {
                        default: p(() => [ _("否") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ])) : $("", !0), j ]), o("div", G, [ i(x, {
                    onClick: pe
                }, {
                    default: p(() => [ _("取消") ]),
                    _: 1
                }), i(x, {
                    type: "primary",
                    onClick: ne
                }, {
                    default: p(() => [ _("保存") ]),
                    _: 1
                }) ]) ])), i(fe, {
                    ref_key: "ResourcePreviewRef",
                    ref: K
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a499361d" ] ]);
});

export {
    et as __tla,
    te as default
};