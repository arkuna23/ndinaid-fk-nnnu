import {
    _ as Re,
    __tla as Te
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    u as Ce,
    T as Ve,
    r as v,
    U as ze,
    f as Ue,
    j as Ee,
    o as r,
    c as i,
    a as t,
    z as Fe,
    A as se,
    C as k,
    l as c,
    v as m,
    t as s,
    B as oe,
    D as re,
    k as u,
    bo as je,
    J as Pe,
    _ as Me,
    P as Le,
    O as Oe,
    Q as Se,
    bp as qe,
    bq as Be,
    R as He,
    S as Ke,
    __tla as Qe
} from "./index-6c08ea4c.js";

import {
    _ as Ae,
    __tla as Je
} from "./index-a34a73bc.js";

import {
    _ as Ge,
    __tla as We
} from "./Editor-ef737d2a.js";

import {
    _ as ne
} from "./editorIcon-5192f4b2.js";

import {
    g as ie
} from "./file.data-794ea5d0.js";

import {
    P as ue,
    Q as Xe,
    __tla as Ye
} from "./index-9567cbf6.js";

import {
    q as de,
    h as Ze,
    __tla as $e
} from "./file-e038b35d.js";

import {
    _ as et
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as tt
} from "./index.es-14d10e28.js";

import {
    __tla as at
} from "./project-file-a2b4fd07.js";

import "./file_题-23882218.js";

import {
    __tla as lt
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as st
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

let ce, ot = Promise.all([ (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return Qe;
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
        return Ye;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return tt;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return st;
    } catch {}
})() ]).then(async () => {
    let n, b, N, D, R, T, C, V, z, U, E, F, j, P, M, L, O, S, q, B, H, K, Q, A, J, G, W, X;
    n = x => (He("data-v-71746cd7"), x = x(), Ke(), x), b = {
        id: "dx",
        style: {
            padding: "20px 0 0"
        }
    }, N = {
        key: 0,
        style: {
            padding: "20px 30px"
        }
    }, D = n(() => s("img", {
        src: ne,
        alt: ""
    }, null, -1)), R = {
        style: {
            "margin-bottom": "20px"
        }
    }, T = n(() => s("span", {
        style: {
            display: "block",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D",
            "margin-bottom": "10px"
        }
    }, "内容", -1)), C = [ "innerHTML" ], V = {
        key: 1,
        style: {
            "padding-left": "20px"
        }
    }, z = {
        key: 0
    }, U = n(() => s("span", {
        style: {
            display: "block",
            "margin-bottom": "10px",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D"
        }
    }, "附件", -1)), E = [ "src" ], F = {
        key: 1
    }, j = [ n(() => s("span", {
        style: {
            display: "block",
            "margin-bottom": "10px",
            "font-weight": "900",
            "font-size": "16px",
            color: "#3D3D3D"
        }
    }, "附件", -1)), n(() => s("div", {
        style: {
            "padding-left": "20px"
        }
    }, "无", -1)) ], P = {
        key: 1,
        class: "neu-no-data",
        style: {
            height: "500px"
        }
    }, M = n(() => s("p", {
        class: ""
    }, "暂无数据", -1)), L = n(() => s("img", {
        src: ne,
        alt: ""
    }, null, -1)), O = {
        key: 1,
        class: "height_box"
    }, S = {
        style: {
            padding: "0 30px"
        }
    }, q = n(() => s("div", {
        class: "title_editor"
    }, "内容", -1)), B = n(() => s("div", {
        style: {
            height: "1px"
        }
    }, null, -1)), H = {
        key: 0,
        class: "title_editor"
    }, K = [ "src" ], Q = {
        key: 1,
        class: "title_editor"
    }, A = {
        key: 2
    }, J = n(() => s("div", {
        class: "title_editor",
        style: {
            margin: "5px 0 0 0"
        }
    }, "是否允许下载附件", -1)), G = {
        style: {
            "padding-left": "20px"
        }
    }, W = n(() => s("div", {
        style: {
            height: "40px"
        }
    }, null, -1)), X = {
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
    }, ce = et({
        __name: "dx",
        emits: [ "isShowTipFun" ],
        setup(x, {
            emit: rt
        }) {
            Ce();
            const f = Ve(), Y = v(), w = v(), h = v(!1), o = v({
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
            }), Z = v(), pe = ze({
                contentTxt: [ {
                    max: 2e3,
                    message: "课程导学最多2000位字符",
                    trigger: "change"
                } ]
            }), $ = () => {
                y.value = "editor", _.value.contentTxt = "", ue({
                    teachCourseId: f.params.teachCourseId
                }).then(l => {
                    if (!l) return !1;
                    e.value = l, l ? l.resourceId && de(l.resourceId).then(a => {
                        e.value.fileInfo = a, e.value.fileInfo.resType = 3, e.value.resName = a.objectKey || a.name;
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
            }, ee = l => {
                Y.value.operation(l.fileInfo);
            }, me = () => {
                e.value.resourceId = null;
            }, ve = () => {
                Z.value.validate(l => {
                    l && (h.value = !0, e.value.showNewResourceId ? w.value.submitFile() : te());
                });
            }, te = l => {
                l && l.length && (e.value.newResourceId = l[0].eid), Xe({
                    teachCourseId: f.params.teachCourseId,
                    content: e.value.content == "<p><br></p>" ? "" : e.value.content,
                    isDownload: e.value.isDownload,
                    resourceId: e.value.newResourceId ? e.value.newResourceId : e.value.resourceId || ""
                }).then(a => {
                    je({
                        message: "操作成功",
                        type: "success"
                    }), window.setTimeout(() => {
                        y.value = "preview", g(), h.value = !1;
                    }, 500);
                }).catch(a => {
                    h.value = !1;
                });
            }, _e = () => {
                e.value.showNewResourceId = !0;
            }, xe = () => {
                w.value.cancelUpload(), e.value.showNewResourceId = !1;
            }, he = () => {
                e.value.showNewResourceId = !1;
            }, g = () => {
                ue({
                    teachCourseId: f.params.teachCourseId
                }).then(l => {
                    if (l && !l.content && !l.resourceId) return o.value = null, 
                    !1;
                    o.value = l, l && l.resourceId && de(l.resourceId).then(a => {
                        o.value.fileInfo = a, o.value.fileInfo.resType = 3, o.value.resName = a.objectKey || a.name;
                        var p = o.value.resName.lastIndexOf(".");
                        o.value.resExt = "." + o.value.resName.substring(p + 1);
                    });
                });
            }, ye = () => {
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
            return Ue(() => {
                g();
            }), (l, a) => {
                const p = Pe, fe = Me, we = Ge, ge = Le, Ie = Oe, ke = Se, be = Ae, ae = qe, Ne = Be, De = Re, le = Ee("hasPermi");
                return r(), i("div", b, [ t(y) == "preview" ? (r(), i("div", {
                    key: 0,
                    style: {
                        padding: "0 30px"
                    },
                    class: Fe({
                        height_box: t(o)
                    })
                }, [ t(o) ? (r(), i("div", N, [ se((r(), k(p, {
                    class: "right",
                    type: "primary",
                    onClick: $
                }, {
                    default: c(() => [ D, m(" 编辑") ]),
                    _: 1
                })), [ [ le, [ "teachmanager:teach-course-guidance:update" ] ] ]), s("div", R, [ T, t(o).content ? (r(), 
                i("div", {
                    key: 0,
                    innerHTML: t(o).content,
                    style: {
                        "padding-left": "20px",
                        "word-break": "break-all",
                        "white-space": "pre-wrap"
                    },
                    class: "editor-content-view wangEditorLinewrapPreView"
                }, null, 8, C)) : (r(), i("div", V, "无")) ]), t(o).resourceId ? (r(), 
                i("div", z, [ U, s("img", {
                    src: t(ie)(t(o).resName + t(o).resExt),
                    alt: "",
                    style: {
                        width: "24px",
                        "margin-right": "5px",
                        "margin-left": "20px",
                        position: "relative",
                        top: "5px"
                    }
                }, null, 8, E), s("span", {
                    class: "file-name__span",
                    onClick: a[0] || (a[0] = d => ee(t(o)))
                }, oe(t(o).resName), 1), t(o).isDownload ? (r(), k(p, {
                    key: 0,
                    type: "primary",
                    plain: "",
                    round: "",
                    size: "small",
                    onClick: a[1] || (a[1] = d => {
                        return I = t(o), void Ze(I.resourceId, I.resName);
                        var I;
                    })
                }, {
                    default: c(() => [ m("下载附件") ]),
                    _: 1
                })) : re("", !0) ])) : (r(), i("div", F, j)) ])) : (r(), i("div", P, [ u(fe, {
                    icon: "svg-icon:bg-no-data",
                    size: 200,
                    class: "",
                    style: {
                        height: "160px"
                    }
                }), M, se((r(), k(p, {
                    type: "primary",
                    onClick: $,
                    style: {
                        "margin-top": "10px"
                    }
                }, {
                    default: c(() => [ L, m(" 编辑") ]),
                    _: 1
                })), [ [ le, [ "teachmanager:teach-course-guidance:update" ] ] ]) ])) ], 2)) : (r(), 
                i("div", O, [ s("div", S, [ q, u(we, {
                    modelValue: t(e).content,
                    "onUpdate:modelValue": a[2] || (a[2] = d => t(e).content = d),
                    height: "150px",
                    ltm: 10,
                    text: t(_).contentTxt,
                    "onUpdate:text": a[3] || (a[3] = d => t(_).contentTxt = d)
                }, null, 8, [ "modelValue", "text" ]), u(ke, {
                    ref_key: "formRef",
                    ref: Z,
                    model: t(_),
                    rules: t(pe),
                    style: {
                        margin: "10px 0"
                    }
                }, {
                    default: c(() => [ u(Ie, {
                        prop: "contentTxt",
                        label: ""
                    }, {
                        default: c(() => [ u(ge, {
                            modelValue: t(_).contentTxt,
                            "onUpdate:modelValue": a[4] || (a[4] = d => t(_).contentTxt = d),
                            style: {
                                display: "none"
                            }
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]), B, t(e).resourceId ? (r(), i("div", H, [ m("附件      "), s("img", {
                    src: t(ie)(t(e).resName + t(e).resExt),
                    alt: "",
                    style: {
                        width: "24px",
                        "margin-right": "5px",
                        position: "relative",
                        top: "5px"
                    }
                }, null, 8, K), s("span", {
                    class: "file-name__span",
                    onClick: a[5] || (a[5] = d => ee(t(e)))
                }, oe(t(e).resName), 1), m("  "), s("span", {
                    style: {
                        color: "#E14635",
                        cursor: "pointer"
                    },
                    onClick: me
                }, "删除") ])) : (r(), i("div", Q, "附件")), s("div", null, [ u(be, {
                    ref_key: "NeuUploadRef",
                    ref: w,
                    accept: ".doc,.docx,.ppt,.pptx,.pdf",
                    alert: "总文件大小不得超过50M",
                    limit: 1,
                    size: 50,
                    onSuccess: te,
                    onError: xe,
                    onFileChange: _e,
                    onFileRemove: he,
                    showUploadIcon: !0,
                    showTooltip: !1,
                    innerBoxTip: "请上传.doc,.docx,.ppt,.pptx,.pdf文件，大小不得超过50M",
                    style: {
                        width: "360px"
                    }
                }, null, 512) ]), t(e).showNewResourceId || t(e).resourceId ? (r(), 
                i("div", A, [ J, s("div", G, [ u(Ne, {
                    modelValue: t(e).isDownload,
                    "onUpdate:modelValue": a[6] || (a[6] = d => t(e).isDownload = d)
                }, {
                    default: c(() => [ u(ae, {
                        value: 1,
                        size: "large"
                    }, {
                        default: c(() => [ m("是") ]),
                        _: 1
                    }), u(ae, {
                        value: 0,
                        size: "large"
                    }, {
                        default: c(() => [ m("否") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ])) : re("", !0), W ]), s("div", X, [ u(p, {
                    onClick: ye
                }, {
                    default: c(() => [ m("取消") ]),
                    _: 1
                }), u(p, {
                    type: "primary",
                    onClick: ve,
                    disabled: t(h)
                }, {
                    default: c(() => [ m("保存") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ])), u(De, {
                    ref_key: "ResourcePreviewRef",
                    ref: Y
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-71746cd7" ] ]);
});

export {
    ot as __tla,
    ce as default
};