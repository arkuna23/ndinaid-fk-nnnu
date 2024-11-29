import {
    _ as Ie,
    __tla as je
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    _ as Fe,
    __tla as Ae
} from "./index-71666e05.js";

import {
    _ as Oe,
    __tla as Ee
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Me,
    __tla as Ue
} from "./index-e2094cc0.js";

import {
    _ as Be,
    __tla as Ge
} from "./index-c4ca0ced.js";

import {
    _ as He,
    __tla as Je
} from "./index-8b41572c.js";

import {
    d as Ke,
    e as _e,
    r as p,
    h as Ve,
    p as qe,
    U as Qe,
    o as s,
    c,
    a as n,
    k as a,
    l as t,
    t as _,
    v as i,
    F as M,
    y as We,
    B as b,
    C as m,
    D as T,
    _ as Xe,
    J as Ye,
    ad as Ze,
    L as $e,
    K as ea,
    ae as aa,
    __tla as ta
} from "./index-6c08ea4c.js";

import {
    _ as la,
    __tla as ra
} from "./index-1024512a.js";

import {
    _ as sa
} from "./file_HTML-65451e1b.js";

import oa, {
    __tla as ia
} from "./uploadResource-f61230ea.js";

import {
    _ as na,
    __tla as da
} from "./addFolder.vue_vue_type_script_setup_true_lang-f899e3f4.js";

import {
    _ as pa,
    __tla as ca
} from "./addLink.vue_vue_type_script_setup_true_lang-af2702c5.js";

import _a, {
    __tla as ma
} from "./moveDialog-f8678a84.js";

import {
    _ as ua,
    __tla as ya
} from "./editFileName.vue_vue_type_script_setup_true_lang-06ea1d63.js";

import {
    d as fa,
    __tla as ha
} from "./formatTime-de6f1520.js";

import {
    g as ka
} from "./file.data-794ea5d0.js";

import {
    l as wa,
    r as ga,
    h as va,
    __tla as ba
} from "./file-e038b35d.js";

import {
    g as xa,
    r as Ca,
    d as me,
    a as ue,
    __tla as Ta
} from "./libraryAdmin-dc76919b.js";

import {
    a as Na,
    b as Da,
    E as za,
    __tla as Ra
} from "./index-5adb716b.js";

import {
    _ as La
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Pa
} from "./index.es-14d10e28.js";

import {
    __tla as Sa
} from "./project-file-a2b4fd07.js";

import {
    __tla as Ia
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as ja
} from "./DeptTag-1be092ce.js";

import {
    __tla as Fa
} from "./index-ef4d146e.js";

import {
    __tla as Aa
} from "./index-a34a73bc.js";

import "./file_题-23882218.js";

import "./validate-b72f006c.js";

let ye, Oa = Promise.all([ (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return da;
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
        return ya;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Ra;
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
        return Ia;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})() ]).then(async () => {
    let U, B, G, H, J, K, V, q, Q, W, X, Y, Z, $, ee, ae, te, le;
    U = {
        key: 0
    }, B = {
        class: "top-box"
    }, G = {
        class: "right btns-box header-btns"
    }, H = {
        class: "file-path"
    }, J = [ "onClick" ], K = {
        key: 1,
        class: "path-item stop"
    }, V = {
        class: "file-name"
    }, q = {
        key: 1,
        src: sa,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, Q = [ "src" ], W = [ "title", "onClick" ], X = {
        key: 0
    }, Y = {
        key: 1
    }, Z = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, $ = {
        style: {
            "max-width": "225px",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            display: "inline-block"
        }
    }, ee = {
        class: "items-left flex justify-left"
    }, ae = {
        class: "neu-table-more"
    }, te = {
        class: "bottom-box"
    }, le = {
        class: "page-empty w-100%"
    }, ye = La(Ke({
        __name: "index",
        setup(Ea) {
            const N = _e(() => h.value && h.value.length > 0 ? h.value[h.value.length - 1] : {
                id: "0",
                resName: "根目录",
                resType: 0,
                resDesc: "根目录",
                pvtParentId: "",
                pvtAncestorId: "",
                pubParentId: "",
                pubAncestorId: "",
                neuParentId: "",
                neuAncestorId: "",
                release: 0,
                creatorName: "",
                updaterName: "",
                children: []
            }), re = p(), se = p(), L = p(), P = p(), R = p(), fe = p(), S = p(), oe = p(), ie = p(), he = Ve(), f = qe(), ke = _e(() => [ {
                label: "资源类型",
                key: "resType",
                type: "list",
                options: [ {
                    label: "视频",
                    value: 1
                }, {
                    label: "音频",
                    value: 2
                }, {
                    label: "文档",
                    value: 3
                }, {
                    label: "图片",
                    value: 4
                }, {
                    label: "压缩包",
                    value: 5
                }, {
                    label: "链接",
                    value: 6
                }, {
                    label: "MD",
                    value: 7
                } ]
            }, {
                label: "公开状态",
                key: "release",
                type: "list",
                options: [ {
                    label: "已公开",
                    value: 1
                }, {
                    label: "未公开",
                    value: 0
                } ]
            } ]), I = p([]), D = p([]), h = p([]), ne = p(0), z = p(0), o = Qe({
                neuParentId: "0",
                resName: "",
                resType: "",
                release: "",
                pageNo: 1,
                pageSize: 10
            }), j = l => {
                switch (l) {
                  case "uploadFile":
                    re.value.openDialog({
                        fatherObj: N
                    });
                    break;

                  case "addLink":
                    P.value.openDialog({
                        title: "添加链接",
                        fatherObj: N,
                        type: "add"
                    });
                    break;

                  case "addFolder":
                    L.value.openDialog({
                        title: "新建文件夹",
                        fatherObj: N,
                        type: "add"
                    });
                }
            };
            function F(l) {
                return l == null || l === "" || Array.isArray(l) && l.length === 0 || typeof l == "object" && Object.keys(l).length === 0;
            }
            function we(l) {
                o.pageNo = 1, o.resName = l.resName ?? "", o.resType = l.resType ?? "", 
                o.release = l.release ?? "", F(o.resName) && F(o.resType) && F(o.release) ? o.neuParentId = N.value.id : o.neuParentId = "", 
                k(), A("0");
            }
            const k = () => {
                xa({
                    ...o,
                    creator: he.getUser.id
                }).then(l => {
                    var r;
                    (r = R.value) == null || r.clearSelection(), I.value = l.records, 
                    ne.value = l.total, z.value = z.value === 0 ? l.total : z.value;
                });
            }, A = l => {
                Ca({
                    id: l,
                    release: 0
                }).then(r => {
                    h.value = r;
                });
            }, g = async (l, r) => {
                switch (l) {
                  case "handlePublic":
                    await f.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定公开吗？", "提示"), 
                    ue({
                        release: 1
                    }, [ r.id ]).then(() => {
                        f.success("公开成功"), k();
                    });
                    break;

                  case "handleMove":
                    S.value.openDialog({
                        title: "移动到",
                        moveList: [ r.id ]
                    });
                    break;

                  case "handleDownLoad":
                    await va(r.eid, r.resName);
                    break;

                  case "handleDel":
                    await f.delConfirm("确定删除该资源吗？删除后不可恢复！", "提示"), me([ r.id ]).then(() => {
                        f.success("删除成功"), x();
                    });
                    break;

                  case "handleEdit":
                    r.resType == 0 ? L.value.openDialog({
                        title: "编辑文件夹",
                        editObject: r,
                        fatherObj: N,
                        type: "edit"
                    }) : r.resType == 6 ? P.value.openDialog({
                        title: "编辑链接",
                        editObject: r,
                        type: "edit"
                    }) : se.value.openDialog({
                        title: "编辑文件名",
                        editObject: r,
                        type: "edit"
                    });
                }
            };
            function ge(l) {
                D.value = [ ...l ];
            }
            const ve = async () => {
                await f.delConfirm("确定删除这些资源吗？删除后不可恢复！", "提示"), me(D.value.map(l => l.id)).then(() => {
                    f.success("删除成功"), x();
                });
            }, be = async () => {
                await f.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定要公开这些资源吗？", "提示"), 
                ue({
                    release: 1
                }, D.value.map(l => l.id)).then(() => {
                    f.success("公开成功"), k();
                });
            }, xe = async () => {
                S.value.openDialog({
                    title: "移动到",
                    moveList: D.value.map(l => l.id)
                });
            }, Ce = l => {
                l ? R.value.toggleAllSelection() : R.value.clearSelection();
            }, de = l => {
                o.neuParentId = l.id, o.pageNo = 1, A(l.id), k();
            }, x = () => {
                o.pageNo = 1, k();
            };
            return A("0"), k(), (l, r) => {
                const Te = la, C = Xe, u = Ye, w = Na, O = Da, E = za, v = Ze, pe = $e, Ne = ea, De = aa, ze = He, Re = Be, Le = Me, ce = Oe, Pe = Fe, Se = Ie;
                return s(), c("div", null, [ n(z) && n(z) > 0 ? (s(), c("div", U, [ a(ce, {
                    class: "cont-box"
                }, {
                    default: t(() => [ _("div", B, [ a(Te, {
                        ref_key: "ComSearchRef",
                        ref: oe,
                        searchList: n(ke),
                        keywordsInfo: {
                            label: "资料名称/文件夹名称",
                            key: "resName"
                        },
                        onHandleSearch: we,
                        class: "left"
                    }, null, 8, [ "searchList" ]), _("div", G, [ a(E, {
                        teleported: !1,
                        trigger: "hover",
                        class: "empty-dropdown",
                        onCommand: j
                    }, {
                        dropdown: t(() => [ a(O, null, {
                            default: t(() => [ a(w, {
                                command: "uploadFile"
                            }, {
                                default: t(() => [ i("上传文件") ]),
                                _: 1
                            }), a(w, {
                                command: "addLink"
                            }, {
                                default: t(() => [ i("添加链接") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        default: t(() => [ a(u, {
                            type: "primary",
                            size: "large"
                        }, {
                            default: t(() => [ a(C, {
                                icon: "ep:plus",
                                class: "mr-5px"
                            }), i(" 新建 ") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(u, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: r[0] || (r[0] = e => j("addFolder")),
                        style: {
                            "margin-left": "12px"
                        }
                    }, {
                        default: t(() => [ a(C, {
                            icon: "svg-icon:add_folder",
                            class: "mr-5px"
                        }), i(" 新建文件夹 ") ]),
                        _: 1
                    }) ]) ]), _("div", H, [ (s(!0), c(M, null, We(n(h), (e, d) => (s(), 
                    c("div", {
                        key: e.id,
                        style: {
                            "max-width": "120px",
                            overflow: "hidden",
                            "white-space": "nowrap",
                            "text-overflow": "ellipsis"
                        }
                    }, [ d < n(h).length - 1 ? (s(), c("span", {
                        key: 0,
                        class: "path-item",
                        onClick: y => de(e)
                    }, b(e.resName), 9, J)) : (s(), c("span", K, b(e.resName), 1)), d < n(h).length - 1 ? (s(), 
                    m(C, {
                        key: 2,
                        icon: "ep:arrow-right-bold",
                        size: 10,
                        style: {
                            margin: "0 10px"
                        }
                    })) : T("", !0) ]))), 128)) ]), a(ze, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 102
                    }, {
                        default: t(() => [ a(De, {
                            ref_key: "ResourceTableRef",
                            ref: R,
                            data: n(I),
                            style: {
                                height: "100%"
                            },
                            "header-row-class-name": "system-header",
                            onSelectionChange: ge,
                            "row-key": "id"
                        }, {
                            default: t(() => [ a(v, {
                                type: "selection",
                                width: "50"
                            }), a(v, {
                                label: "文件名",
                                prop: "resName",
                                fixed: "",
                                width: "350px"
                            }, {
                                default: t(e => [ _("div", V, [ e.row.resType == 0 ? (s(), 
                                m(C, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : e.row.resType == 6 ? (s(), c("img", q)) : (s(), 
                                c("img", {
                                    key: 2,
                                    src: n(ka)(e.row.resName + e.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, Q)), _("span", {
                                    class: "file-name__span",
                                    title: e.row.resName,
                                    onClick: d => {
                                        var y;
                                        (y = e.row).resType == 0 ? (oe.value.resetParamsFile(), 
                                        o.resName = "", o.resType = "", o.release = "", 
                                        de(y)) : y.resType == 6 ? window.open(y.resLink, "_blank") : ie.value.operation(y);
                                    }
                                }, b(e.row.resName), 9, W) ]) ]),
                                _: 1
                            }), a(v, {
                                label: "大小",
                                prop: "resSize",
                                "show-overflow-tooltip": !0,
                                "min-width": "120"
                            }, {
                                default: t(e => [ e.row.resType == 0 || e.row.resType == 6 ? (s(), 
                                c("span", X, "--")) : (s(), c("span", Y, b(n(wa)(Number(e.row.resSize))), 1)) ]),
                                _: 1
                            }), a(v, {
                                label: "类型",
                                prop: "resType",
                                "min-width": "80"
                            }, {
                                default: t(e => [ e.row.resType == 6 ? (s(), m(pe, {
                                    key: 0,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: t(() => [ i("链接") ]),
                                    _: 1
                                })) : (s(), m(pe, {
                                    key: 1,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: t(() => [ i(b(n(ga)(e.row.resType)), 1) ]),
                                    _: 2
                                }, 1024)) ]),
                                _: 1
                            }), a(v, {
                                label: "上次修改时间",
                                prop: "updateTime",
                                formatter: n(fa),
                                "min-width": "180"
                            }, null, 8, [ "formatter" ]), a(v, {
                                label: "所在文件夹",
                                prop: "fileFolder",
                                "min-width": "225"
                            }, {
                                default: t(e => {
                                    var d;
                                    return [ _("div", Z, [ a(Ne, {
                                        class: "item",
                                        effect: "dark",
                                        content: (d = e.row.folderPath) == null ? void 0 : d.replace(/,/g, "/"),
                                        placement: "top"
                                    }, {
                                        default: t(() => {
                                            var y;
                                            return [ _("span", $, b((y = e.row.folderPath) == null ? void 0 : y.split(",").slice(-1)[0]), 1) ];
                                        }),
                                        _: 2
                                    }, 1032, [ "content" ]) ]) ];
                                }),
                                _: 1
                            }), a(v, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: t(e => [ _("div", ee, [ e.row.resType == 0 ? (s(), 
                                c(M, {
                                    key: 0
                                }, [ a(u, {
                                    link: "",
                                    size: "small",
                                    type: "primary",
                                    onClick: d => g("handleEdit", e.row)
                                }, {
                                    default: t(() => [ i(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), a(u, {
                                    link: "",
                                    size: "small",
                                    type: "primary",
                                    onClick: d => g("handleMove", e.row)
                                }, {
                                    default: t(() => [ i(" 移动 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), e.row.release == 0 ? (s(), 
                                m(u, {
                                    key: 0,
                                    link: "",
                                    size: "small",
                                    type: "danger",
                                    onClick: d => g("handleDel", e.row)
                                }, {
                                    default: t(() => [ i(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])) : T("", !0) ], 64)) : (s(), 
                                c(M, {
                                    key: 1
                                }, [ a(u, {
                                    link: "",
                                    size: "small",
                                    type: "primary",
                                    onClick: d => g("handleEdit", e.row)
                                }, {
                                    default: t(() => [ i(b([ 0, 6 ].includes(e.row.resType) ? "编辑" : "重命名"), 1) ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), a(u, {
                                    link: "",
                                    size: "small",
                                    type: "primary",
                                    onClick: d => g("handleMove", e.row)
                                }, {
                                    default: t(() => [ i(" 移动 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), [ 0, 6 ].includes(e.row.resType) || e.row.release != 1 ? T("", !0) : (s(), 
                                m(u, {
                                    key: 0,
                                    link: "",
                                    size: "small",
                                    type: "primary",
                                    onClick: d => g("handleDownLoad", e.row)
                                }, {
                                    default: t(() => [ i(" 下载 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), e.row.release == 0 ? (s(), 
                                m(E, {
                                    key: 1,
                                    style: {
                                        "background-color": "transparent"
                                    },
                                    trigger: "hover",
                                    onCommand: d => g(d, e.row)
                                }, {
                                    dropdown: t(() => [ a(O, null, {
                                        default: t(() => [ e.row.resType != 0 ? (s(), 
                                        m(w, {
                                            key: 0,
                                            command: "handlePublic"
                                        }, {
                                            default: t(() => [ i(" 公开 ") ]),
                                            _: 1
                                        })) : T("", !0), a(w, {
                                            command: "handleDel"
                                        }, {
                                            default: t(() => [ i(" 删除 ") ]),
                                            _: 1
                                        }), [ 0, 6 ].includes(e.row.resType) ? T("", !0) : (s(), 
                                        m(w, {
                                            key: 1,
                                            command: "handleDownLoad"
                                        }, {
                                            default: t(() => [ i(" 下载 ") ]),
                                            _: 1
                                        })) ]),
                                        _: 2
                                    }, 1024) ]),
                                    default: t(() => [ _("div", ae, [ a(C, {
                                        size: 10,
                                        icon: "svg-icon:more"
                                    }) ]) ]),
                                    _: 2
                                }, 1032, [ "onCommand" ])) : T("", !0) ], 64)) ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), _("div", te, [ a(Re, {
                        total: n(ne),
                        page: n(o).pageNo,
                        "onUpdate:page": r[1] || (r[1] = e => n(o).pageNo = e),
                        limit: n(o).pageSize,
                        "onUpdate:limit": r[2] || (r[2] = e => n(o).pageSize = e),
                        onPagination: k
                    }, null, 8, [ "total", "page", "limit" ]) ]), a(Le, {
                        ref_key: "SelectionButtonGroupRef",
                        ref: fe,
                        "select-list": n(D),
                        "page-list": n(I),
                        btnList: [ "delete", "share", "move" ],
                        subject: "文件/文件夹",
                        onDelete: ve,
                        onMove: xe,
                        onShare: be,
                        onSelectAll: Ce
                    }, null, 8, [ "select-list", "page-list" ]) ]),
                    _: 1
                }) ])) : (s(), m(ce, {
                    key: 1,
                    class: "cont-box"
                }, {
                    default: t(() => [ _("div", le, [ a(Pe, {
                        type: "resource",
                        msg: "暂无资源"
                    }), a(E, {
                        teleported: !1,
                        trigger: "hover",
                        class: "empty-dropdown",
                        onCommand: j
                    }, {
                        dropdown: t(() => [ a(O, null, {
                            default: t(() => [ a(w, {
                                command: "uploadFile"
                            }, {
                                default: t(() => [ i("上传文件") ]),
                                _: 1
                            }), a(w, {
                                command: "addLink"
                            }, {
                                default: t(() => [ i("添加链接") ]),
                                _: 1
                            }), a(w, {
                                command: "addFolder"
                            }, {
                                default: t(() => [ i("新建文件夹") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        default: t(() => [ a(u, {
                            type: "primary",
                            size: "large"
                        }, {
                            default: t(() => [ i(" 新建 "), a(C, {
                                class: "el-icon--right",
                                icon: "ep:arrow-down",
                                style: {
                                    "margin-left": "5px"
                                }
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                })), a(oa, {
                    ref_key: "UploadResourceRef",
                    ref: re,
                    onRefresh: x
                }, null, 512), a(na, {
                    ref_key: "AddFolderRef",
                    ref: L,
                    onRefresh: x
                }, null, 512), a(pa, {
                    ref_key: "AddLinkRef",
                    ref: P,
                    onRefresh: x
                }, null, 512), a(_a, {
                    ref_key: "MoveDialogRef",
                    ref: S,
                    onRefresh: x
                }, null, 512), a(ua, {
                    ref_key: "EditFileNameRef",
                    ref: se,
                    onRefresh: k
                }, null, 512), a(Se, {
                    ref_key: "ResourcePreviewRef",
                    ref: ie
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-5a84ba26" ] ]);
});

export {
    Oa as __tla,
    ye as default
};