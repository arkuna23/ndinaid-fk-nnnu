import {
    a7 as f,
    p as ma,
    h as ha,
    T as fa,
    a0 as ga,
    r as o,
    U as _a,
    o as p,
    C as x,
    l,
    t as d,
    a,
    k as t,
    H as Y,
    A as w,
    c as C,
    B as T,
    D as k,
    G as V,
    v as c,
    m as Ie,
    F as xe,
    y as we,
    bo as Ce,
    P as va,
    O as ya,
    av as ba,
    _ as Ia,
    aw as xa,
    J as wa,
    ab as Ca,
    ac as ka,
    bp as Va,
    bq as La,
    N as za,
    K as Na,
    Q as Ua,
    aU as Ta,
    __tla as Da
} from "./index-6c08ea4c.js";

import {
    _ as Ea,
    __tla as Pa
} from "./index-a34a73bc.js";

import {
    _ as Sa,
    __tla as Fa
} from "./Editor-ef737d2a.js";

import {
    E as Oa,
    F as Ra,
    G as ja,
    H as Ma,
    __tla as Ya
} from "./index-9567cbf6.js";

import {
    d as qa
} from "./tree-05ea8e09.js";

import {
    l as Ha,
    __tla as Aa
} from "./file-e038b35d.js";

import {
    g as Ba
} from "./file.data-794ea5d0.js";

import {
    _ as Ga
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Ja,
    __tla as Ka
} from "./index-ef4d146e.js";

let q, ke, Ve, Le, ze, Ne, Ue, Te, De, Ee, Pe, H, Qa = Promise.all([ (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})() ]).then(async () => {
    let A, B, G, J, K, Q, X, Z, $, W, ee, ae, le, te, se, re, ie, ue, oe, de, ce;
    A = "" + new URL("announcementStep1-986e4bc8.png", import.meta.url).href, B = "" + new URL("announcementStep2-eb3a83c9.png", import.meta.url).href, 
    Ue = u => f.get({
        url: "/teachmanager/teach-course-notice-class/pageList",
        params: u
    }), ke = u => f.get({
        url: "/teachmanager/teach-course-notice/get",
        params: u
    }), H = u => f.put({
        url: "/teachmanager/teach-course-notice/update",
        data: u
    }), Ne = u => f.delete({
        url: "/teachmanager/teach-course-notice/delete",
        params: u
    }), Te = u => f.put({
        url: "/teachmanager/teach-course-notice/publish",
        data: u
    }), Ee = u => f.put({
        url: "/teachmanager/teach-course-notice/publishSet",
        data: u
    }), Pe = u => f.put({
        url: "/teachmanager/teach-course-notice/revoke",
        data: u
    }), Le = u => f.get({
        url: "/teachmanager/teach-course-notice-class/getAllClass",
        params: u
    }), Ve = u => f.get({
        url: "/teachmanager/teach-course-notice-class/getPublisNums",
        params: u
    }), ze = u => f.get({
        url: "/teachmanager/teach-course-tag/getTeachCourseTags",
        params: u
    }), G = {
        class: "algin-center"
    }, J = [ "src" ], K = {
        class: ""
    }, Q = {
        key: 0,
        class: "file-list"
    }, X = {
        class: "file-list-item"
    }, Z = {
        class: "flex items-center justify-left",
        style: {
            width: "55%"
        }
    }, $ = {
        class: "file-list-item__icon"
    }, W = [ "src" ], ee = {
        class: "file-list-item__name"
    }, ae = [ "title" ], le = {
        class: "file-size"
    }, te = {
        style: {
            display: "flex",
            width: "20px"
        }
    }, se = {
        key: 0,
        class: "template-form"
    }, re = {
        key: 0,
        class: "right"
    }, ie = {
        class: "ellipsis",
        style: {
            "max-width": "450px"
        }
    }, ue = {
        class: "addLabelInput"
    }, oe = {
        class: "class-detail"
    }, de = {
        style: {
            color: "#245fe6"
        }
    }, ce = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, q = Ga({
        __name: "addAnnouncement",
        props: {
            announcementInfo: {
                type: Object,
                default: () => ({})
            },
            classInfo: {
                type: Object,
                default: () => ({})
            },
            tagList: {
                type: Array,
                default: () => []
            },
            treeList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "refreshList" ],
        setup(u, {
            expose: Se,
            emit: Fe
        }) {
            const ne = ma();
            ha();
            const L = fa(), Oe = u, {
                announcementInfo: E,
                classInfo: pe,
                tagList: Xa,
                treeList: Re
            } = ga(Oe);
            o();
            const z = o(!1), g = o("1"), je = Fe, P = o(null), me = o(""), S = () => {
                g.value = "1", he.value = "1", z.value = !1, N.value.resetFields(), 
                Me();
            }, Me = () => {
                Object.keys(e).forEach(r => e[r] = ""), e.teachLabelId = [], e.isPublish = 0, 
                e.scope = 0, e.isDownload = 0;
            }, Ye = () => {
                g.value = "1";
            }, qe = () => {
                N.value.validate(r => {
                    if (!r) return !1;
                    g.value = "2";
                });
            }, He = () => {
                N.value.validate(async r => {
                    if (!r) return !1;
                    await P.value(), ne.success("操作成功"), je("refreshList"), S();
                });
            }, he = o("1"), e = _a({
                id: "",
                teachCourseId: "",
                teachClassId: "",
                title: "",
                content: "",
                attachmentName: "",
                attachmentSize: "",
                attachmentEid: "",
                teachLabelId: [],
                teachLabelName: "",
                dirId: "",
                isPublish: 0,
                scope: 0,
                isDownload: 0,
                publishTime: ""
            }), Ae = {
                title: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                content: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                }, {
                    validator: (r, s, n) => {
                        s && s === "<p><br></p>" ? n(new Error("请输入公告内容")) : n();
                    },
                    trigger: "blur"
                }, {
                    validator: (r, s, n) => {
                        s && s.length > 500 ? n(new Error("公告内容不能超过500字符")) : n();
                    },
                    trigger: "blur"
                } ],
                scope: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                isPublish: [ {
                    required: !0,
                    message: "是否发布不能为空",
                    trigger: "change"
                }, {
                    validator: (r, s, n) => {
                        e.isPublish != 2 || e.publishTime ? n() : n(new Error("发布时间不能为空"));
                    },
                    trigger: "blur"
                } ],
                isDownload: [ {
                    required: !0,
                    message: "是否允许下载不能为空",
                    trigger: "change"
                } ]
            }, N = o(null), Be = o({
                materialDes: null,
                resourceId: null,
                newResourceId: null,
                showNewResourceId: !1,
                isDownload: 0
            }), F = o(""), Ge = r => {
                var s;
                r && r.length && (Be.value.newResourceId = r[0].eid, e.attachmentEid = r[0].eid, 
                e.attachmentSize = (s = r[0].size) == null ? void 0 : s.toString(), 
                e.attachmentName = r[0].name, F.value = r[0].name.substring(r[0].name.lastIndexOf(".")).toUpperCase().replace(".", ""));
            }, O = o(null), Je = () => {
                O.value.cancelUpload();
            }, Ke = () => {
                U.value = !1, O.value.submitFile();
            }, fe = () => {
                U.value = !1, e.attachmentEid = "", e.attachmentSize = "", e.attachmentName = "";
            }, Qe = async () => {
                var r;
                await (r = {
                    ...e,
                    teachCourseId: L.params.teachCourseId,
                    teachClassId: L.params.classId,
                    teachLabelId: e.teachLabelId.join(",")
                }, f.post({
                    url: "/teachmanager/teach-course-notice/create",
                    data: r
                }));
            }, Xe = async () => {
                await H({
                    ...e,
                    teachLabelId: e.teachLabelId.join(",")
                });
            }, ge = o([]), _e = o(0), R = o(0), b = o(!0), m = o(""), I = o({}), ve = r => {
                m.value = "", r && (I.value = r, m.value = r.tagName), b.value = !1;
            }, D = () => {
                Oa({
                    teachCourseId: L.params.teachCourseId
                }).then(r => {
                    R.value++, ge.value = r;
                });
            }, Ze = () => {
                m.value && (I.value.id ? ja({
                    tagName: m.value,
                    sourceType: 0,
                    teachCourseId: L.params.teachCourseId,
                    id: I.value.id
                }).then(r => {
                    D(), _e.value++, I.value = {}, m.value = "", b.value = !0;
                }) : Ma({
                    tagName: m.value,
                    sourceType: 0,
                    teachCourseId: L.params.teachCourseId
                }).then(r => {
                    Ce({
                        type: "success",
                        message: "添加成功"
                    }), D(), _e.value++, I.value = {}, m.value = "", b.value = !0;
                }));
            }, $e = () => {
                I.value = {}, m.value = "", b.value = !0;
            }, We = r => {
                e.scope = 0, e.isDownload = 0;
            }, U = o(!1), ea = r => {
                N.value.validateField("content");
            };
            return Se({
                handleOpen: ({
                    type: r,
                    title: s
                }) => {
                    z.value = !0, me.value = s, D();
                    const n = {
                        add: () => {
                            P.value = Qe;
                        },
                        edit: () => {
                            Object.keys(e).forEach(h => e[h] = E.value[h]), E.value.teachLabelId !== "" ? e.teachLabelId = E.value.teachLabelId.split(",") : e.teachLabelId = [], 
                            P.value = Xe, F.value = e.attachmentName.substring(e.attachmentName.lastIndexOf(".")).toLowerCase(), 
                            e.attachmentName !== "" ? U.value = !0 : U.value = !1;
                        },
                        default: () => {}
                    };
                    (n[r] || n.default)();
                }
            }), (r, s) => {
                const n = va, h = ya, _ = ba, aa = Sa, la = Ea, ye = Ia, be = xa, ta = Ja, v = wa, sa = Ca, ra = ka, y = Va, j = La, ia = za, ua = Na, oa = Ua, da = Ta;
                return p(), x(da, {
                    modelValue: a(z),
                    "onUpdate:modelValue": s[10] || (s[10] = i => Ie(z) ? z.value = i : null),
                    title: a(me),
                    width: "1000px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: S
                }, {
                    default: l(() => [ d("div", G, [ d("img", {
                        src: a(g) === "1" ? a(A) : a(B),
                        alt: ""
                    }, null, 8, J) ]), t(oa, {
                        ref_key: "templateFormRef",
                        ref: N,
                        model: a(e),
                        onSubmit: s[9] || (s[9] = Y(() => {}, [ "prevent" ])),
                        rules: Ae,
                        "label-position": "top"
                    }, {
                        default: l(() => [ w(d("div", K, [ t(be, null, {
                            default: l(() => [ t(_, {
                                span: 24,
                                class: "step1-left"
                            }, {
                                default: l(() => [ t(h, {
                                    label: "公告标题",
                                    prop: "title"
                                }, {
                                    default: l(() => [ t(n, {
                                        modelValue: a(e).title,
                                        "onUpdate:modelValue": s[0] || (s[0] = i => a(e).title = i),
                                        placeholder: "请输入公告标题",
                                        maxlength: "50",
                                        size: "large",
                                        style: {
                                            width: "780px"
                                        }
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(_, {
                                span: 24,
                                class: ""
                            }, {
                                default: l(() => [ t(h, {
                                    label: "公告内容",
                                    prop: "content"
                                }, {
                                    default: l(() => [ t(aa, {
                                        modelValue: a(e).content,
                                        "onUpdate:modelValue": s[1] || (s[1] = i => a(e).content = i),
                                        onEditorBlur: ea,
                                        height: "100px"
                                    }, null, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(_, {
                                span: 24
                            }, {
                                default: l(() => [ t(h, {
                                    label: "附件",
                                    style: {
                                        "margin-bottom": "0"
                                    }
                                }, {
                                    default: l(() => [ t(la, {
                                        ref_key: "NeuUploadRef",
                                        ref: O,
                                        accept: ".doc,.docx,.ppt,.pptx,.pdf",
                                        alert: "总文件大小不得超过20M",
                                        limit: 1,
                                        size: 20,
                                        onSuccess: Ge,
                                        onError: Je,
                                        onFileChange: Ke,
                                        onFileRemove: fe,
                                        showUploadIcon: !0,
                                        showTooltip: !1,
                                        innerBoxTip: "请上传.doc,.docx,.ppt,.pptx,.pdf文件，大小不得超过20M",
                                        style: {
                                            width: "360px"
                                        }
                                    }, null, 512) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(_, {
                                span: 24
                            }, {
                                default: l(() => [ a(U) ? (p(), C("div", Q, [ d("div", X, [ d("div", Z, [ d("div", $, [ d("img", {
                                    src: a(Ba)(a(F) || ""),
                                    alt: "",
                                    style: {
                                        width: "32px"
                                    }
                                }, null, 8, W) ]), d("div", ee, [ d("span", {
                                    title: a(e).attachmentName,
                                    class: "file-name"
                                }, T(a(e).attachmentName), 9, ae), d("span", le, T(a(Ha)(a(e).attachmentSize || 0)), 1) ]) ]), d("div", te, [ t(ye, {
                                    size: 20,
                                    icon: "svg-icon:file_close",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: fe
                                }) ]) ]) ])) : k("", !0) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ], 512), [ [ V, a(g) === "1" ] ]), a(g) === "2" ? (p(), 
                        C("div", se, [ t(be, {
                            class: "",
                            style: {
                                width: "548px"
                            }
                        }, {
                            default: l(() => [ t(_, {
                                span: 24
                            }, {
                                default: l(() => [ t(h, {
                                    label: "所属目录",
                                    prop: "dirId"
                                }, {
                                    default: l(() => [ t(ta, {
                                        modelValue: a(e).dirId,
                                        "onUpdate:modelValue": s[2] || (s[2] = i => a(e).dirId = i),
                                        data: a(Re),
                                        "check-strictly": "",
                                        "render-after-expand": !1,
                                        placeholder: "请选择所属目录",
                                        filterable: "",
                                        size: "large",
                                        props: a(qa)
                                    }, null, 8, [ "modelValue", "data", "props" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(_, {
                                span: 24
                            }, {
                                default: l(() => [ t(h, {
                                    label: "公告标签",
                                    prop: "teachLabelId"
                                }, {
                                    default: l(() => [ (p(), x(ra, {
                                        modelValue: a(e).teachLabelId,
                                        "onUpdate:modelValue": s[4] || (s[4] = i => a(e).teachLabelId = i),
                                        key: a(R),
                                        multiple: "",
                                        placeholder: "请选择公告标签",
                                        "multiple-limit": 3,
                                        size: "large"
                                    }, {
                                        footer: l(() => [ w(t(v, {
                                            onClick: ve,
                                            size: "small",
                                            type: "primary",
                                            text: ""
                                        }, {
                                            default: l(() => [ t(ye, {
                                                icon: "ep:plus",
                                                color: "#245FE6",
                                                style: {
                                                    position: "relative",
                                                    top: "-1px"
                                                }
                                            }), c(" 新建") ]),
                                            _: 1
                                        }, 512), [ [ V, a(b) ] ]), w(d("div", ue, [ t(n, {
                                            modelValue: a(m),
                                            "onUpdate:modelValue": s[3] || (s[3] = i => Ie(m) ? m.value = i : null),
                                            modelModifiers: {
                                                trim: !0
                                            },
                                            style: {
                                                "max-width": "440px"
                                            },
                                            placeholder: "请输入标签名称",
                                            maxlength: "5"
                                        }, {
                                            append: l(() => [ d("div", {
                                                style: {
                                                    "padding-left": "12px",
                                                    "padding-right": "12px"
                                                },
                                                onClick: Ze
                                            }, "保存") ]),
                                            _: 1
                                        }, 8, [ "modelValue" ]), t(v, {
                                            type: "primary",
                                            text: "",
                                            style: {
                                                "margin-left": "10px"
                                            },
                                            onClick: $e
                                        }, {
                                            default: l(() => [ c("取消") ]),
                                            _: 1
                                        }) ], 512), [ [ V, !a(b) ] ]) ]),
                                        default: l(() => [ (p(!0), C(xe, null, we(a(ge), i => (p(), 
                                        x(sa, {
                                            key: i.id + a(R),
                                            label: i.tagName,
                                            value: i.id
                                        }, {
                                            default: l(() => [ i.sourceType ? k("", !0) : (p(), 
                                            C("div", re, [ t(v, {
                                                type: "primary",
                                                style: {
                                                    padding: "0px"
                                                },
                                                onClick: Y(ca => ve(i), [ "stop" ]),
                                                text: ""
                                            }, {
                                                default: l(() => [ c("编辑") ]),
                                                _: 2
                                            }, 1032, [ "onClick" ]), t(v, {
                                                type: "danger",
                                                style: {
                                                    padding: "0px 10px 0 0"
                                                },
                                                onClick: Y(ca => {
                                                    return M = i, void ne.confirm("确定要删除该标签吗？", "提示", {
                                                        confirmButtonText: "确认",
                                                        cancelButtonText: "取消"
                                                    }).then(() => {
                                                        Ra({
                                                            id: M.id
                                                        }).then(Za => {
                                                            Ce({
                                                                message: "操作成功",
                                                                type: "success"
                                                            }), e.teachLabelId.forEach((na, pa) => {
                                                                na == M.id && e.teachLabelId.splice(pa, 1);
                                                            }), D();
                                                        });
                                                    }).catch(() => {});
                                                    var M;
                                                }, [ "stop" ]),
                                                text: ""
                                            }, {
                                                default: l(() => [ c("删除") ]),
                                                _: 2
                                            }, 1032, [ "onClick" ]) ])), d("div", ie, T(i.tagName), 1) ]),
                                            _: 2
                                        }, 1032, [ "label", "value" ]))), 128)) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ])) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), t(_, {
                                span: 24
                            }, {
                                default: l(() => [ t(h, {
                                    label: "是否发布",
                                    prop: "isPublish"
                                }, {
                                    default: l(() => [ t(j, {
                                        modelValue: a(e).isPublish,
                                        "onUpdate:modelValue": s[5] || (s[5] = i => a(e).isPublish = i),
                                        onChange: We
                                    }, {
                                        default: l(() => [ t(y, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: l(() => [ c("暂不发布") ]),
                                            _: 1
                                        }), t(y, {
                                            value: 1,
                                            size: "large"
                                        }, {
                                            default: l(() => [ c("立即发布") ]),
                                            _: 1
                                        }), t(y, {
                                            value: 2,
                                            size: "large"
                                        }, {
                                            default: l(() => [ c("定时发布") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]), a(e).isPublish == 2 ? (p(), 
                                    x(ia, {
                                        key: 0,
                                        modelValue: a(e).publishTime,
                                        "onUpdate:modelValue": s[6] || (s[6] = i => a(e).publishTime = i),
                                        type: "datetime",
                                        placeholder: "请选择发布时间",
                                        format: "YYYY-MM-DD HH:mm:ss",
                                        "value-format": "YYYY-MM-DD HH:mm:ss",
                                        class: "ml-10px"
                                    }, null, 8, [ "modelValue" ])) : k("", !0) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }), a(e).isPublish !== 0 ? (p(), x(_, {
                                key: 0,
                                span: 24
                            }, {
                                default: l(() => [ t(h, {
                                    label: "发布范围",
                                    prop: "scope"
                                }, {
                                    default: l(() => [ t(j, {
                                        modelValue: a(e).scope,
                                        "onUpdate:modelValue": s[7] || (s[7] = i => a(e).scope = i)
                                    }, {
                                        default: l(() => [ t(y, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: l(() => [ c("当前班级") ]),
                                            _: 1
                                        }), t(ua, {
                                            placement: "top",
                                            effect: "light"
                                        }, {
                                            content: l(() => [ d("ul", oe, [ (p(!0), 
                                            C(xe, null, we(a(pe).list, i => (p(), 
                                            C("li", {
                                                key: i.teachClassId
                                            }, T(i.teachClassName), 1))), 128)) ]) ]),
                                            default: l(() => [ t(y, {
                                                value: 1,
                                                size: "large"
                                            }, {
                                                default: l(() => [ c("全部班级（ "), d("span", de, T(a(pe).count), 1), c(" ） ") ]),
                                                _: 1
                                            }) ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            })) : k("", !0), a(e).isPublish !== 0 ? (p(), x(_, {
                                key: 1,
                                span: 24
                            }, {
                                default: l(() => [ t(h, {
                                    label: "是否允许下载",
                                    prop: "isDownload"
                                }, {
                                    default: l(() => [ t(j, {
                                        modelValue: a(e).isDownload,
                                        "onUpdate:modelValue": s[8] || (s[8] = i => a(e).isDownload = i)
                                    }, {
                                        default: l(() => [ t(y, {
                                            value: 1,
                                            size: "large"
                                        }, {
                                            default: l(() => [ c("是") ]),
                                            _: 1
                                        }), t(y, {
                                            value: 0,
                                            size: "large"
                                        }, {
                                            default: l(() => [ c("否") ]),
                                            _: 1
                                        }) ]),
                                        _: 1
                                    }, 8, [ "modelValue" ]) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            })) : k("", !0) ]),
                            _: 1
                        }) ])) : k("", !0) ]),
                        _: 1
                    }, 8, [ "model" ]), d("div", ce, [ t(v, {
                        onClick: S
                    }, {
                        default: l(() => [ c("取消") ]),
                        _: 1
                    }), w(t(v, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: Ye
                    }, {
                        default: l(() => [ c("上一步") ]),
                        _: 1
                    }, 512), [ [ V, a(g) === "2" ] ]), w(t(v, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        onClick: qe,
                        disabled: !a(he)
                    }, {
                        default: l(() => [ c("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]), [ [ V, a(g) === "1" ] ]), w(t(v, {
                        type: "primary",
                        onClick: He
                    }, {
                        default: l(() => [ c("确定") ]),
                        _: 1
                    }, 512), [ [ V, a(g) === "2" ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-7ead826d" ] ]), De = Object.defineProperty({
        __proto__: null,
        default: q
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    Qa as __tla,
    q as a,
    ke as b,
    Ve as c,
    Le as d,
    ze as e,
    Ne as f,
    Ue as g,
    Te as h,
    De as i,
    Ee as p,
    Pe as r,
    H as u
};