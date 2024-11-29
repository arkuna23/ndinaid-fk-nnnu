import {
    _ as xe,
    __tla as Ce
} from "./index-e2094cc0.js";

import {
    _ as Ie,
    __tla as ze
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    d as Se,
    aO as Pe,
    a as l,
    a0 as Re,
    r as k,
    p as Ae,
    e as L,
    U as De,
    o as i,
    c as j,
    t as w,
    k as a,
    C as n,
    l as r,
    v as c,
    D as u,
    F as Ee,
    y as Oe,
    B as I,
    A as Le,
    G as Ve,
    z as Be,
    a6 as Ge,
    _ as Ue,
    J as Ne,
    ad as Je,
    K as qe,
    ak as He,
    ae as Ke,
    __tla as Xe
} from "./index-6c08ea4c.js";

import {
    _ as Me,
    __tla as Qe
} from "./index-71666e05.js";

import {
    _ as We,
    __tla as Ye
} from "./index-1024512a.js";

import {
    _ as Ze
} from "./file_HTML-65451e1b.js";

import {
    g as $e
} from "./file.data-794ea5d0.js";

import {
    _ as et,
    __tla as tt
} from "./addFolder.vue_vue_type_script_setup_true_lang-2e8ce82a.js";

import lt, {
    __tla as at
} from "./addResource-cf3ece02.js";

import {
    a as rt,
    d as it,
    c as st,
    u as ot,
    b as ct,
    e as oe,
    g as nt,
    f as pt,
    __tla as ut
} from "./project-file-a2b4fd07.js";

import {
    r as dt,
    h as yt,
    __tla as _t
} from "./file-e038b35d.js";

import {
    a as mt,
    b as ft,
    E as ht,
    __tla as vt
} from "./index-5adb716b.js";

import {
    _ as gt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as kt
} from "./index.es-14d10e28.js";

import "./tree-05ea8e09.js";

import {
    __tla as jt
} from "./DeptTag-1be092ce.js";

import {
    __tla as wt
} from "./index-ef4d146e.js";

import "./file_题-23882218.js";

import "./validate-b72f006c.js";

import {
    __tla as Tt
} from "./index-c4ca0ced.js";

import {
    __tla as bt
} from "./index-993301ca.js";

import {
    __tla as Ft
} from "./index-a34a73bc.js";

import {
    __tla as xt
} from "./library-c2ecc5ca.js";

import {
    __tla as Ct
} from "./formatTime-de6f1520.js";

let ce, It = Promise.all([ (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Ye;
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
        return ut;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return wt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return bt;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return Ct;
    } catch {}
})() ]).then(async () => {
    let V, B, G, U, N, J, q, H, K, X, M, Q, W, Y, Z;
    V = {
        class: "project-resource"
    }, B = {
        key: 0,
        style: {
            height: "100%"
        }
    }, G = {
        class: "top-box"
    }, U = {
        class: "right btns-box header-btns"
    }, N = {
        class: "file-path"
    }, J = [ "onClick" ], q = {
        key: 1,
        class: "path-item stop"
    }, H = {
        class: "center-box"
    }, K = {
        class: "file-name"
    }, X = {
        key: 1,
        src: Ze,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, M = [ "src" ], Q = [ "onClick" ], W = {
        class: "items-left flex justify-left"
    }, Y = {
        key: 1,
        class: "page-empty w-100%"
    }, Z = {
        style: {
            height: "60px"
        }
    }, ce = gt(Se({
        __name: "projectResource",
        props: {
            projectId: {
                type: [ String, Number ],
                default: ""
            },
            pageType: {
                type: String,
                required: !0
            },
            calculatingTime: {
                type: Boolean,
                default: !1
            }
        },
        setup(ne) {
            Pe(e => ({
                "74aabf62": l(de)
            }));
            const P = ne, {
                projectId: C,
                pageType: o
            } = Re(P), $ = k(), ee = k(), b = k(), R = k(), F = Ae(), A = k([]), z = k([]), m = L(() => f.value && f.value.length > 0 ? f.value[f.value.length - 1] : {
                id: "0",
                projectId: null,
                name: "根目录",
                structureType: 0,
                parentId: null,
                parentAncestorId: null,
                eid: null,
                fileExt: null,
                fileSize: null,
                projectFileType: null,
                projectFileCreateType: null,
                isPublish: null
            }), pe = {
                2: "项目指导类",
                1: "学习参考类",
                3: "项目模板类",
                4: "其他"
            }, ue = L(() => [ {
                label: "资料类型",
                key: "projectFileType",
                type: "list",
                options: [ {
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
                } ]
            } ]), f = k([ {
                id: "0",
                projectId: null,
                name: "根目录",
                structureType: 0,
                parentId: null,
                parentAncestorId: null,
                eid: null,
                fileExt: null,
                fileSize: null,
                projectFileType: null,
                projectFileCreateType: null,
                isPublish: null
            } ]), S = k(0), y = De({
                parentId: "0",
                name: "",
                projectFileType: ""
            }), de = L(() => (o == null ? void 0 : o.value) == "create" ? "calc(100% - 130px)" : "calc(100% - 80px)");
            function ye(e) {
                z.value = [ ...e ];
            }
            const D = k(), _e = e => {
                e ? D.value.toggleAllSelection() : D.value.clearSelection();
            }, E = e => {
                nt({
                    id: e
                }).then(s => {
                    f.value = s;
                });
            }, h = () => {
                pt({
                    ...y,
                    projectId: C.value,
                    isPublish: o.value == "student" ? 1 : ""
                }).then(e => {
                    A.value = e, S.value == 0 && (S.value = (e == null ? void 0 : e.length) || 0);
                });
            };
            function te(e) {
                return e == null || e === "" || Array.isArray(e) && e.length === 0 || typeof e == "object" && Object.keys(e).length === 0;
            }
            function me(e) {
                y.name = e.name ?? "", y.projectFileType = e.projectFileType ?? "", 
                te(y.name) && te(y.projectFileType) ? y.parentId = "0" : y.parentId = "", 
                h(), E("0");
            }
            const le = e => {
                y.parentId = e.id, E(e.id), h();
            }, O = e => {
                switch (e) {
                  case "addResource":
                    R.value.openDialog({
                        title: "添加资料",
                        projectFileType: m.value.projectFileType
                    });
                    break;

                  case "addFolder":
                    b.value.openDialog({
                        title: "新建文件夹",
                        fatherObj: m,
                        type: "add",
                        formType: "folder",
                        projectFileType: m.value.projectFileType
                    });
                }
            }, ae = e => {
                if (e.structureType == 0) $.value.resetParamsFile(), y.name = "", 
                y.projectFileType = "", le(e); else if (e.structureType == 6) window.open(e.resLink, "_blank"); else {
                    let s = {
                        eid: e.eid,
                        resType: e.structureType
                    };
                    P.calculatingTime && (s.startTime = Ge(new Date()).valueOf(), 
                    s.projectId = C.value, s.id = e.id), ee.value.operation(s);
                }
            }, re = async e => {
                await F.delConfirm("确定删除该资源吗？删除后将不再显示！", "提示"), it({
                    id: e.id
                }).then(() => {
                    F.success("操作成功"), h();
                });
            }, fe = e => {
                e.type == "add" ? st({
                    projectId: C.value,
                    name: e.data.name,
                    parentId: m.value.id,
                    projectFileType: e.data.projectFileType
                }).then(() => {
                    F.success("操作成功"), h(), b.value.closeDialog();
                }) : e.type == "edit" && ot(e.data).then(() => {
                    F.success("操作成功"), h(), b.value.closeDialog();
                });
            }, he = e => {
                let s = {
                    projectId: C.value,
                    parentId: m.value.id,
                    projectFileType: e.projectFileType,
                    projectFileCreateType: e.projectFileCreateType,
                    files: []
                };
                e.selectList.forEach(p => {
                    const v = {
                        name: p.resName,
                        eid: p.eid,
                        fileExt: p.resExt,
                        structureType: p.resType,
                        fileSize: p.resSize,
                        fileLink: p.resLink || "",
                        resId: p.id
                    };
                    s.files.push(v);
                }), ct(s).then(() => {
                    F.success("操作成功"), h(), R.value.closeDialog();
                });
            }, ie = e => {
                const s = {
                    isPublish: e,
                    projectFileIds: []
                };
                z.value.forEach(p => {
                    s.projectFileIds.push(p.id);
                }), oe(s).then(p => {
                    F.success("操作成功"), h();
                });
            };
            return E("0"), h(), (e, s) => {
                const p = We, v = Ue, _ = Ne, x = Je, ve = qe, ge = He, ke = Ke, je = Me, se = mt, we = ft, Te = ht, be = Ie, Fe = xe;
                return i(), j("div", {
                    style: {
                        height: "100%"
                    },
                    class: Be({
                        "project-page": [ "project", "student" ].includes(l(o))
                    })
                }, [ w("div", V, [ l(S) && l(S) > 0 ? (i(), j("div", B, [ w("div", G, [ a(p, {
                    ref_key: "ComSearchRef",
                    ref: $,
                    searchList: l(ue),
                    keywordsInfo: {
                        label: "资料名称",
                        key: "name"
                    },
                    onHandleSearch: me,
                    class: "left"
                }, null, 8, [ "searchList" ]), w("div", U, [ [ "project", "create" ].includes(l(o)) ? (i(), 
                n(_, {
                    key: 0,
                    type: "primary",
                    size: "large",
                    onClick: s[0] || (s[0] = t => O("addResource"))
                }, {
                    default: r(() => [ a(v, {
                        icon: "ep:plus",
                        class: "mr-5px"
                    }), c(" 添加资料 ") ]),
                    _: 1
                })) : u("", !0), [ "project", "create" ].includes(l(o)) && l(f).length < 5 ? (i(), 
                n(_, {
                    key: 1,
                    type: "primary",
                    size: "large",
                    plain: "",
                    onClick: s[1] || (s[1] = t => O("addFolder")),
                    style: {
                        "margin-left": "12px"
                    }
                }, {
                    default: r(() => [ a(v, {
                        icon: "svg-icon:add_folder",
                        class: "mr-5px"
                    }), c(" 添加文件夹 ") ]),
                    _: 1
                })) : u("", !0) ]) ]), w("div", N, [ (i(!0), j(Ee, null, Oe(l(f), (t, d) => (i(), 
                j("div", {
                    key: t.id,
                    style: {
                        "max-width": "120px",
                        overflow: "hidden",
                        "white-space": "nowrap",
                        "text-overflow": "ellipsis"
                    }
                }, [ d < l(f).length - 1 ? (i(), j("span", {
                    key: 0,
                    class: "path-item",
                    onClick: T => le(t)
                }, I(t.name), 9, J)) : (i(), j("span", q, I(t.name), 1)), d < l(f).length - 1 ? (i(), 
                n(v, {
                    key: 2,
                    icon: "ep:arrow-right-bold",
                    size: 10,
                    style: {
                        margin: "0 10px"
                    }
                })) : u("", !0) ]))), 128)) ]), w("div", H, [ a(ke, {
                    ref_key: "ResourceTableRef",
                    ref: D,
                    data: l(A),
                    style: {
                        height: "calc(100%)"
                    },
                    "header-row-class-name": "system-header",
                    "row-key": "id",
                    onSelectionChange: ye
                }, {
                    default: r(() => [ [ "project" ].includes(l(o)) ? (i(), n(x, {
                        key: 0,
                        type: "selection",
                        width: "50"
                    })) : u("", !0), a(x, {
                        label: "资料名称",
                        prop: "name",
                        fixed: "",
                        "min-width": "350px"
                    }, {
                        default: r(t => [ w("div", K, [ t.row.structureType == 0 ? (i(), 
                        n(v, {
                            key: 0,
                            icon: "svg-icon:folder",
                            size: 18,
                            style: {
                                "margin-right": "10px",
                                "flex-shrink": "0"
                            }
                        })) : t.row.structureType == 6 ? (i(), j("img", X)) : (i(), 
                        j("img", {
                            key: 2,
                            src: l($e)(t.row.name + t.row.fileExt),
                            alt: "",
                            style: {
                                width: "18px",
                                "flex-shrink": "0",
                                "margin-right": "10px"
                            }
                        }, null, 8, M)), a(ve, {
                            effect: "dark",
                            content: t.row.name,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: r(() => [ w("span", {
                                class: "file-name__span",
                                onClick: d => ae(t.row)
                            }, I(t.row.name), 9, Q) ]),
                            _: 2
                        }, 1032, [ "content" ]) ]) ]),
                        _: 1
                    }), a(x, {
                        label: "资料类型",
                        prop: "resSize",
                        "show-overflow-tooltip": !0,
                        "min-width": "120"
                    }, {
                        default: r(t => [ c(I(pe[t.row.projectFileType]), 1) ]),
                        _: 1
                    }), [ "preview", "project", "student" ].includes(l(o)) ? (i(), 
                    n(x, {
                        key: 1,
                        label: "种类",
                        "show-overflow-tooltip": !0,
                        "min-width": "120"
                    }, {
                        default: r(t => [ c(I(l(dt)(t.row.structureType)), 1) ]),
                        _: 1
                    })) : u("", !0), l(o) == "project" ? (i(), n(x, {
                        key: 2,
                        label: "发布状态",
                        "min-width": "120"
                    }, {
                        default: r(t => [ a(ge, {
                            modelValue: t.row.isPublish,
                            "onUpdate:modelValue": d => t.row.isPublish = d,
                            "active-value": 1,
                            "inactive-value": 0,
                            onChange: d => (T => {
                                const g = {
                                    isPublish: T.isPublish,
                                    projectFileIds: [ T.id ]
                                };
                                oe(g).then(zt => {
                                    h();
                                });
                            })(t.row)
                        }, null, 8, [ "modelValue", "onUpdate:modelValue", "onChange" ]) ]),
                        _: 1
                    })) : u("", !0), a(x, {
                        label: "操作",
                        width: "160",
                        fixed: "right"
                    }, {
                        default: r(t => {
                            return [ w("div", W, [ [ "create" ].includes(l(o)) ? (i(), 
                            n(_, {
                                key: 0,
                                type: "primary",
                                size: "small",
                                link: "",
                                onClick: T => {
                                    var g;
                                    (g = t.row).structureType == 0 ? b.value.openDialog({
                                        title: "编辑文件夹",
                                        fatherObj: m,
                                        type: "edit",
                                        formType: "folder",
                                        editObject: g,
                                        projectFileType: m.value.projectFileType
                                    }) : b.value.openDialog({
                                        title: "资料编辑",
                                        fatherObj: m,
                                        type: "edit",
                                        formType: "res",
                                        editObject: g,
                                        projectFileType: m.value.projectFileType
                                    });
                                }
                            }, {
                                default: r(() => [ c(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : u("", !0), [ "create" ].includes(l(o)) ? (i(), 
                            n(_, {
                                key: 1,
                                type: "danger",
                                size: "small",
                                link: "",
                                onClick: T => re(t.row)
                            }, {
                                default: r(() => [ c(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : u("", !0), [ "preview", "project", "student" ].includes(l(o)) && ![ 0, 5 ].includes(t.row.structureType) ? (i(), 
                            n(_, {
                                key: 2,
                                type: "primary",
                                size: "small",
                                link: "",
                                onClick: T => ae(t.row)
                            }, {
                                default: r(() => [ c(" 查看 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : u("", !0), [ "preview", "project", "student" ].includes(l(o)) && (d = t.row, 
                            [ 1, 2, 4 ].includes(d.projectFileType) ? [ 5 ].includes(d.structureType) : ![ 0, 6 ].includes(d.structureType)) ? (i(), 
                            n(_, {
                                key: 3,
                                type: "primary",
                                size: "small",
                                link: "",
                                onClick: T => (async g => {
                                    await yt(g.eid, g.name), P.calculatingTime && rt({
                                        projectId: C.value,
                                        fileId: g.id,
                                        valid: !0
                                    });
                                })(t.row)
                            }, {
                                default: r(() => [ c(" 下载 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : u("", !0), [ "project" ].includes(l(o)) && t.row.isPublish != 1 ? (i(), 
                            n(_, {
                                key: 4,
                                type: "danger",
                                size: "small",
                                link: "",
                                onClick: T => re(t.row)
                            }, {
                                default: r(() => [ c(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) : u("", !0) ]) ];
                            var d;
                        }),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]) ])) : (i(), j("div", Y, [ a(je), [ "create", "project" ].includes(l(o)) ? (i(), 
                n(Te, {
                    key: 0,
                    teleported: !1,
                    trigger: "hover",
                    class: "empty-dropdown",
                    onCommand: O
                }, {
                    dropdown: r(() => [ a(we, null, {
                        default: r(() => [ a(se, {
                            command: "addResource"
                        }, {
                            default: r(() => [ c("添加资料") ]),
                            _: 1
                        }), a(se, {
                            command: "addFolder"
                        }, {
                            default: r(() => [ c("添加文件夹") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    default: r(() => [ a(_, {
                        type: "primary",
                        size: "large"
                    }, {
                        default: r(() => [ c(" 新建 "), a(v, {
                            class: "el-icon--right",
                            icon: "ep:arrow-down",
                            style: {
                                "margin-left": "5px"
                            }
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                })) : u("", !0) ])), a(be, {
                    ref_key: "ResourcePreviewRef",
                    ref: ee
                }, null, 512), a(et, {
                    ref_key: "AddFolderRef",
                    ref: b,
                    "folder-type": "project",
                    onSubmit: fe
                }, null, 512), a(lt, {
                    ref_key: "AddResourceRef",
                    ref: R,
                    "form-type": "project",
                    onSubmit: he
                }, null, 512) ]), Le(w("div", Z, null, 512), [ [ Ve, l(z).length > 0 ] ]), a(Fe, {
                    ref: "SelectionButtonGroupRef",
                    "select-list": l(z),
                    "page-list": l(A),
                    subject: "文件/文件夹",
                    onSelectAll: _e
                }, {
                    default: r(() => [ a(_, {
                        type: "primary",
                        onClick: s[2] || (s[2] = t => ie(1))
                    }, {
                        default: r(() => [ a(v, {
                            icon: "svg-icon:icon-publish",
                            class: "mr-5px"
                        }), c("发布 ") ]),
                        _: 1
                    }), a(_, {
                        type: "danger",
                        onClick: s[3] || (s[3] = t => ie(0))
                    }, {
                        default: r(() => [ a(v, {
                            icon: "ep:circle-close",
                            class: "mr-5px"
                        }), c("取消发布 ") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "select-list", "page-list" ]) ], 2);
            };
        }
    }), [ [ "__scopeId", "data-v-64b3393c" ] ]);
});

export {
    It as __tla,
    ce as default
};