import {
    _ as Le,
    __tla as Ae
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    d as De,
    a0 as qe,
    r as u,
    h as Ee,
    U as He,
    e as Be,
    p as Je,
    o as p,
    c as n,
    k as s,
    l as o,
    v as m,
    a as c,
    H as Oe,
    C as d,
    F as ie,
    y as ue,
    D as T,
    t as f,
    B as b,
    bB as $e,
    ab as Qe,
    ac as Ke,
    O as Xe,
    bp as Ge,
    bq as Me,
    a8 as We,
    _ as Ye,
    ad as Ze,
    K as ea,
    L as aa,
    ae as ta,
    cn as la,
    Q as ra,
    J as sa,
    aU as oa,
    R as pa,
    S as ia,
    __tla as ua
} from "./index-6c08ea4c.js";

import {
    _ as na,
    __tla as ca
} from "./index-c4ca0ced.js";

import {
    _ as da,
    __tla as ma
} from "./index-1024512a.js";

import {
    _ as ya,
    __tla as _a
} from "./index-a34a73bc.js";

import {
    _ as va
} from "./file_HTML-65451e1b.js";

import {
    b as fa,
    r as ha,
    g as ga,
    __tla as Ta
} from "./library-c2ecc5ca.js";

import {
    l as ba,
    r as ka,
    v as wa,
    __tla as ja
} from "./file-e038b35d.js";

import {
    g as Fa
} from "./file.data-794ea5d0.js";

import {
    d as ne,
    __tla as Ca
} from "./formatTime-de6f1520.js";

import {
    _ as xa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ia
} from "./index.es-14d10e28.js";

import {
    __tla as Na
} from "./project-file-a2b4fd07.js";

import {
    __tla as Pa
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Sa
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ua
} from "./index-ef4d146e.js";

import "./file_题-23882218.js";

let ce, Va = Promise.all([ (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})() ]).then(async () => {
    let V, z, R, L, A, D, q, E, H, B, J, O, $, Q, K;
    V = {
        class: "upload-resource"
    }, z = {
        key: 2,
        class: "flex flex-col"
    }, R = {
        class: "top-box",
        style: {
            "background-color": "#fff",
            margin: "0"
        }
    }, L = {
        class: "file-path"
    }, A = [ "onClick" ], D = {
        key: 1,
        class: "path-item stop"
    }, q = {
        class: "file-name"
    }, E = {
        key: 1,
        src: va,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, H = [ "src" ], B = [ "onClick" ], J = {
        key: 3,
        class: "file-tag",
        style: {
            "margin-left": "7px"
        }
    }, O = [ (h => (pa("data-v-af941f4f"), h = h(), ia(), h))(() => f("span", null, "公开", -1)) ], 
    $ = {
        key: 0
    }, Q = {
        key: 1
    }, K = {
        class: "bottom-box"
    }, ce = xa(De({
        __name: "addResource",
        props: {
            formType: {
                type: String,
                required: !0
            }
        },
        emits: [ "submit" ],
        setup(h, {
            expose: de,
            emit: me
        }) {
            const ye = h, {
                formType: X
            } = qe(ye), g = u(), G = u(), j = u(), M = u(), W = u(), F = Ee(), Y = me, _e = u([ {
                label: "项目指导类",
                value: 2
            }, {
                label: "学习参考类",
                value: 1
            }, {
                label: "项目模板类",
                value: 3
            }, {
                label: "其他",
                value: 4
            } ]), ve = u({
                projectFileType: [ {
                    required: !0,
                    message: "请选择资料类型",
                    trigger: "change"
                } ]
            }), y = u(!1), Z = u("上传文件"), r = u({
                projectFileCreateType: 1,
                projectFileType: "",
                sync: !1
            }), ee = u([]), k = u([]), w = u([]), ae = u(0), t = He({
                pvtParentId: "0",
                pubParentId: "0",
                resName: "",
                resType: "",
                release: "",
                pageNo: 1,
                pageSize: 10
            });
            function fe(e) {
                k.value = [ ...e ];
            }
            const he = Be(() => {
                var e;
                return ((e = g.value) == null ? void 0 : e.uploadPercentage) || 0;
            }), C = u(!1), te = Je(), ge = () => {
                W.value.validate(e => {
                    e && (r.value.projectFileCreateType == 1 ? g.value.fileList.length > 0 ? g.value.submitFile() : te.warning("请上传文件") : k.value.length == 0 ? te.warning("请选择至少一个文件") : Y("submit", {
                        projectFileType: r.value.projectFileType,
                        projectFileCreateType: r.value.projectFileCreateType,
                        selectList: k.value
                    }));
                });
            }, Te = () => {
                var e;
                (e = g.value) == null || e.cancelUpload(), r.value = {
                    projectFileCreateType: 1,
                    projectFileType: "",
                    sync: !1
                }, t.resType = "", t.release = "", t.pageNo = 1, t.pageSize = 10, 
                t.pvtParentId = "0", t.pubParentId = "0", t.resName = "", k.value = [];
            }, be = e => {
                const l = [];
                if (e && e.length > 0 && e.forEach(i => {
                    i.status == "1" && l.push({
                        resName: i.name,
                        resExt: `.${i.fileSuffix.toLowerCase()}`,
                        resType: wa(`.${i.fileSuffix.toLowerCase()}`),
                        resSize: i.size,
                        resDesc: i.name,
                        pvtParentId: "",
                        pvtAncestorId: "",
                        pubParentId: "",
                        pubAncestorId: "",
                        release: 0,
                        creatorName: F.getUser.nickname,
                        updaterName: F.getUser.nickname,
                        eid: i.eid
                    });
                }), l.length > 0 && r.value.sync) {
                    const i = {
                        id: "0",
                        resName: "根目录",
                        resType: 0,
                        resDesc: "根目录",
                        pvtParentId: "",
                        pvtAncestorId: "",
                        pubParentId: "",
                        pubAncestorId: "",
                        release: 0,
                        creatorName: "",
                        updaterName: "",
                        children: []
                    };
                    i.children = l, fa(i).then(N => {
                        N.code == 200 && (y.value = !1);
                    });
                }
                l.length > 0 && Y("submit", {
                    projectFileType: r.value.projectFileType,
                    projectFileCreateType: r.value.projectFileCreateType,
                    selectList: l
                });
            };
            function x(e) {
                return e == null || e === "" || Array.isArray(e) && e.length === 0 || typeof e == "object" && Object.keys(e).length === 0;
            }
            function ke(e) {
                t.pageNo = 1, t.resName = e.resName ?? "", t.resType = e.resType ?? "", 
                t.release = e.release ?? "", x(t.resName) && x(t.resType) && x(t.release) ? r.value.projectFileCreateType == 2 ? (t.pvtParentId = "0", 
                t.pubParentId = null) : (t.pvtParentId = null, t.pubParentId = "0") : r.value.projectFileCreateType == 2 ? (t.pvtParentId = "", 
                t.pubParentId = null) : (t.pvtParentId = null, t.pubParentId = ""), 
                I(), re("0");
            }
            const le = e => {
                t.pageNo = 1, r.value.projectFileCreateType == 2 ? (t.pvtParentId = e.id, 
                t.pubParentId = null) : (t.pvtParentId = null, t.pubParentId = e.id), 
                re(e.id), I();
            }, re = e => {
                ha({
                    id: e,
                    release: r.value.projectFileCreateType == 2 ? 0 : 1
                }).then(l => {
                    w.value = l;
                });
            }, I = () => {
                const e = {
                    ...t
                };
                r.value.projectFileCreateType == 2 ? e.creator = F.getUser.id : e.tenantId = $e(), 
                ga(e).then(l => {
                    var i;
                    (i = G.value) == null || i.clearSelection(), ee.value = l.records, 
                    ae.value = l.total;
                });
            };
            function we(e, l) {
                return X.value == "project" || e.resType !== 0;
            }
            const je = () => {
                r.value.projectFileCreateType == 1 ? r.value.sync = !1 : j.value.resetParams();
            };
            return de({
                openDialog: e => {
                    y.value = !0, Z.value = e.title, e.projectFileType ? (r.value.projectFileType = e.projectFileType, 
                    C.value = !0) : (r.value.projectFileType = "", C.value = !1);
                },
                closeDialog: () => {
                    y.value = !1;
                }
            }), (e, l) => {
                const i = Qe, N = Ke, P = Xe, S = Ge, Fe = Me, Ce = We, xe = ya, Ie = da, se = Ye, _ = Ze, Ne = ea, oe = aa, Pe = ta, Se = la, Ue = na, Ve = ra, pe = sa, ze = oa, Re = Le;
                return p(), n("div", V, [ s(ze, {
                    modelValue: y.value,
                    "onUpdate:modelValue": l[7] || (l[7] = a => y.value = a),
                    scroll: !0,
                    "max-height": "290",
                    title: Z.value,
                    width: "900",
                    onClose: Te
                }, {
                    footer: o(() => [ s(pe, {
                        type: "default",
                        onClick: l[6] || (l[6] = a => y.value = !1)
                    }, {
                        default: o(() => [ m("取消") ]),
                        _: 1
                    }), s(pe, {
                        type: "primary",
                        onClick: ge,
                        disabled: c(he) != 0
                    }, {
                        default: o(() => [ m("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: o(() => [ s(Ve, {
                        ref_key: "UploadResFormRef",
                        ref: W,
                        model: r.value,
                        rules: ve.value,
                        class: "neu",
                        onSubmit: l[5] || (l[5] = Oe(() => {}, [ "prevent" ]))
                    }, {
                        default: o(() => [ c(X) == "project" ? (p(), d(P, {
                            key: 0,
                            label: "资料类型",
                            prop: "projectFileType"
                        }, {
                            default: o(() => [ s(N, {
                                modelValue: r.value.projectFileType,
                                "onUpdate:modelValue": l[0] || (l[0] = a => r.value.projectFileType = a),
                                disabled: C.value,
                                placeholder: "请选择资料类型"
                            }, {
                                default: o(() => [ (p(!0), n(ie, null, ue(_e.value, a => (p(), 
                                d(i, {
                                    key: a.value,
                                    label: a.label,
                                    value: a.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        })) : T("", !0), s(P, {
                            label: "添加方式",
                            required: ""
                        }, {
                            default: o(() => [ s(Fe, {
                                modelValue: r.value.projectFileCreateType,
                                "onUpdate:modelValue": l[1] || (l[1] = a => r.value.projectFileCreateType = a),
                                onChange: je
                            }, {
                                default: o(() => [ s(S, {
                                    value: 1
                                }, {
                                    default: o(() => [ m("新建") ]),
                                    _: 1
                                }), s(S, {
                                    value: 2
                                }, {
                                    default: o(() => [ m("基于个人资源资料库添加") ]),
                                    _: 1
                                }), s(S, {
                                    value: 3
                                }, {
                                    default: o(() => [ m("基于校本资源资料库添加") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r.value.projectFileCreateType == 1 ? (p(), d(P, {
                            key: 1,
                            style: {
                                width: "400px"
                            }
                        }, {
                            default: o(() => [ s(Ce, {
                                modelValue: r.value.sync,
                                "onUpdate:modelValue": l[2] || (l[2] = a => r.value.sync = a)
                            }, {
                                default: o(() => [ m("同步至个人资料库") ]),
                                _: 1
                            }, 8, [ "modelValue" ]), s(xe, {
                                ref_key: "NeuUploadRef",
                                ref: g,
                                onSubmit: be,
                                noUploadTipShow: !0
                            }, null, 512) ]),
                            _: 1
                        })) : (p(), n("div", z, [ f("div", R, [ s(Ie, {
                            ref_key: "ComSearchRef",
                            ref: j,
                            keywordsInfo: {
                                label: "资料名称/文件夹名称",
                                key: "resName"
                            },
                            onHandleSearch: ke,
                            class: "left"
                        }, null, 512) ]), f("div", L, [ (p(!0), n(ie, null, ue(w.value, (a, U) => (p(), 
                        n("div", {
                            key: a.id,
                            style: {
                                "max-width": "120px",
                                overflow: "hidden",
                                "white-space": "nowrap",
                                "text-overflow": "ellipsis"
                            }
                        }, [ U < w.value.length - 1 ? (p(), n("span", {
                            key: 0,
                            class: "path-item",
                            onClick: v => le(a)
                        }, b(a.resName), 9, A)) : (p(), n("span", D, b(a.resName), 1)), U < w.value.length - 1 ? (p(), 
                        d(se, {
                            key: 2,
                            icon: "ep:arrow-right-bold",
                            size: 10,
                            style: {
                                margin: "0 10px"
                            }
                        })) : T("", !0) ]))), 128)) ]), s(Se, {
                            "max-height": "200px"
                        }, {
                            default: o(() => [ s(Pe, {
                                ref_key: "ResourceTableRef",
                                ref: G,
                                data: ee.value,
                                height: "calc(100% )",
                                "header-row-class-name": "system-header",
                                onSelectionChange: fe,
                                "row-key": "id"
                            }, {
                                default: o(() => [ s(_, {
                                    type: "selection",
                                    width: "50",
                                    selectable: we
                                }), s(_, {
                                    label: "文件名",
                                    prop: "resName",
                                    fixed: "",
                                    width: "350px"
                                }, {
                                    default: o(a => [ f("div", q, [ a.row.resType == 0 ? (p(), 
                                    d(se, {
                                        key: 0,
                                        icon: "svg-icon:folder",
                                        size: 18,
                                        style: {
                                            "margin-right": "10px",
                                            "flex-shrink": "0"
                                        }
                                    })) : a.row.resType == 6 ? (p(), n("img", E)) : (p(), 
                                    n("img", {
                                        key: 2,
                                        src: c(Fa)(a.row.resName + a.row.resExt),
                                        alt: "",
                                        style: {
                                            width: "18px",
                                            "flex-shrink": "0",
                                            "margin-right": "10px"
                                        }
                                    }, null, 8, H)), s(Ne, {
                                        effect: "dark",
                                        content: a.row.resName,
                                        placement: "top",
                                        enterable: !1
                                    }, {
                                        default: o(() => [ f("span", {
                                            class: "file-name__span",
                                            onClick: U => {
                                                var v;
                                                (v = a.row).resType == 0 ? (j.value.resetParamsFile(), 
                                                t.resName = "", t.resType = "", 
                                                t.release = "", le(v)) : v.resType == 6 ? window.open(v.resLink, "_blank") : M.value.operation(v);
                                            }
                                        }, b(a.row.resName), 9, B) ]),
                                        _: 2
                                    }, 1032, [ "content" ]), r.value.projectFileCreateType == 2 && a.row.release != 0 ? (p(), 
                                    n("div", J, O)) : T("", !0) ]) ]),
                                    _: 1
                                }), s(_, {
                                    label: "大小",
                                    prop: "resSize",
                                    "show-overflow-tooltip": !0,
                                    "min-width": "120"
                                }, {
                                    default: o(a => [ a.row.resType == 0 || a.row.resType == 6 ? (p(), 
                                    n("span", $, "--")) : (p(), n("span", Q, b(c(ba)(Number(a.row.resSize))), 1)) ]),
                                    _: 1
                                }), s(_, {
                                    label: "类型",
                                    prop: "resType",
                                    "min-width": "80"
                                }, {
                                    default: o(a => [ a.row.resType == 6 ? (p(), 
                                    d(oe, {
                                        key: 0,
                                        type: "primary",
                                        class: "type-tag"
                                    }, {
                                        default: o(() => [ m("链接") ]),
                                        _: 1
                                    })) : (p(), d(oe, {
                                        key: 1,
                                        type: "primary",
                                        class: "type-tag"
                                    }, {
                                        default: o(() => [ m(b(c(ka)(a.row.resType)), 1) ]),
                                        _: 2
                                    }, 1024)) ]),
                                    _: 1
                                }), r.value.projectFileCreateType == 2 ? (p(), d(_, {
                                    key: 0,
                                    label: "上次修改时间",
                                    prop: "updateTime",
                                    formatter: c(ne),
                                    "min-width": "180"
                                }, null, 8, [ "formatter" ])) : T("", !0), r.value.projectFileCreateType == 3 ? (p(), 
                                d(_, {
                                    key: 1,
                                    label: "公开时间",
                                    prop: "publishTime",
                                    formatter: c(ne),
                                    "min-width": "180"
                                }, null, 8, [ "formatter" ])) : T("", !0) ]),
                                _: 1
                            }, 8, [ "data" ]) ]),
                            _: 1
                        }), f("div", K, [ s(Ue, {
                            total: ae.value,
                            page: c(t).pageNo,
                            "onUpdate:page": l[3] || (l[3] = a => c(t).pageNo = a),
                            limit: c(t).pageSize,
                            "onUpdate:limit": l[4] || (l[4] = a => c(t).pageSize = a),
                            onPagination: I
                        }, null, 8, [ "total", "page", "limit" ]) ]) ])) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), s(Re, {
                    ref_key: "ResourcePreviewRef",
                    ref: M
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-af941f4f" ] ]);
});

export {
    Va as __tla,
    ce as default
};