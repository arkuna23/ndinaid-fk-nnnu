import {
    _ as Ie,
    __tla as Pe
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    d as Se,
    h as ze,
    e as j,
    r as p,
    p as Re,
    U as De,
    o as s,
    c,
    a as l,
    k as t,
    l as r,
    t as _,
    C as d,
    v as f,
    D as h,
    F as je,
    y as Ae,
    B as v,
    bB as Fe,
    _ as Le,
    J as Me,
    ad as Oe,
    L as Be,
    K as Ee,
    ae as Ue,
    __tla as Ke
} from "./index-6c08ea4c.js";

import {
    _ as Ge,
    __tla as He
} from "./index-71666e05.js";

import {
    _ as Je,
    __tla as qe
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Qe,
    __tla as Ve
} from "./index-e2094cc0.js";

import {
    _ as We,
    __tla as Xe
} from "./index-c4ca0ced.js";

import {
    _ as Ye,
    __tla as Ze
} from "./index-8b41572c.js";

import {
    _ as $e,
    __tla as ea
} from "./index-1024512a.js";

import {
    _ as aa
} from "./file_HTML-65451e1b.js";

import {
    _ as ta,
    __tla as la
} from "./addFolder.vue_vue_type_script_setup_true_lang-9de62bf4.js";

import ra, {
    __tla as sa
} from "./moveDialog-3f2fe548.js";

import {
    d as oa,
    __tla as ia
} from "./formatTime-de6f1520.js";

import {
    g as na
} from "./file.data-794ea5d0.js";

import {
    l as pa,
    r as ca,
    __tla as _a
} from "./file-e038b35d.js";

import {
    g as da,
    r as ma,
    a as oe,
    __tla as ya
} from "./library-c2ecc5ca.js";

import {
    a as ua,
    b as fa,
    E as ha,
    __tla as va
} from "./index-5adb716b.js";

import {
    _ as ga
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as wa
} from "./index.es-14d10e28.js";

import {
    __tla as ka
} from "./project-file-a2b4fd07.js";

import {
    __tla as ba
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as xa
} from "./DeptTag-1be092ce.js";

import {
    __tla as Na
} from "./index-ef4d146e.js";

import "./validate-b72f006c.js";

import "./file_题-23882218.js";

let ie, Ta = Promise.all([ (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Ve;
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
        return ea;
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
        return ia;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})() ]).then(async () => {
    let A, F, L, M, O, B, E, U, K, G, H, J, q, Q, V, W, X;
    A = {
        key: 0
    }, F = {
        class: "top-box"
    }, L = {
        class: "right btns-box header-btns"
    }, M = {
        class: "file-path"
    }, O = [ "onClick" ], B = {
        key: 1,
        class: "path-item stop"
    }, E = {
        class: "file-name"
    }, U = {
        key: 1,
        src: aa,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, K = [ "src" ], G = [ "title", "onClick" ], H = {
        key: 0
    }, J = {
        key: 1
    }, q = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, Q = {
        style: {
            "max-width": "225px",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            display: "inline-block"
        }
    }, V = {
        class: "items-left flex justify-left"
    }, W = {
        class: "bottom-box"
    }, X = {
        class: "page-empty w-100%"
    }, ie = ga(Se({
        __name: "index",
        setup(Ca) {
            const ne = ze(), b = j(() => ne.isTeacher), P = j(() => y.value && y.value.length > 0 ? y.value[y.value.length - 1] : {
                id: "0",
                resName: "根目录",
                resType: 0,
                resDesc: "根目录",
                pvtParentId: "",
                pvtAncestorId: "",
                pubParentId: "",
                pubAncestorId: "",
                release: 1,
                creatorName: "",
                updaterName: "",
                children: []
            }), S = p(), x = p(), pe = p(), z = p(), Y = p(), Z = p(), N = Re(), ce = j(() => [ {
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
            } ]), R = p([]), T = p([]), y = p([]), $ = p(10), g = p(0), o = De({
                pubParentId: "0",
                resName: "",
                resType: "",
                pageNo: 1,
                pageSize: 10
            }), ee = a => {
                a === "addFolder" && S.value.openDialog({
                    title: "新建文件夹",
                    fatherObj: P,
                    type: "add"
                });
            };
            function ae(a) {
                return a == null || a === "" || Array.isArray(a) && a.length === 0 || typeof a == "object" && Object.keys(a).length === 0;
            }
            function _e(a) {
                o.pageNo = 1, o.resName = a.resName, o.resType = a.resType, ae(o.resName) && ae(o.resType) ? o.pubParentId = P.value.id : o.pubParentId = "", 
                D("0"), w();
            }
            const w = () => {
                da({
                    ...o,
                    tenantId: Fe()
                }).then(a => {
                    var i;
                    (i = x.value) == null || i.clearSelection(), R.value = a.records, 
                    $.value = a.total, g.value = g.value === 0 ? a.total : g.value;
                });
            }, te = async (a, i) => {
                switch (a) {
                  case "handleMove":
                    z.value.openDialog({
                        title: "移动到",
                        moveList: [ i.id ]
                    });
                    break;

                  case "handleEdit":
                    S.value.openDialog({
                        title: "编辑文件夹",
                        editObject: i,
                        fatherObj: P,
                        type: "edit"
                    });
                }
            }, D = a => {
                ma({
                    id: a,
                    release: 1
                }).then(i => {
                    y.value = i;
                });
            };
            function de(a) {
                T.value = [ ...a ];
            }
            const me = async () => {
                await N.delConfirm("确定删除这些资源吗？删除后校本资源库中将不再显示！", "提示"), oe({
                    release: 0
                }, T.value.map(a => a.id)).then(() => {
                    N.success("删除成功"), C();
                });
            }, ye = () => {
                z.value.openDialog({
                    title: "移动到",
                    moveList: T.value.map(a => a.id)
                });
            }, ue = a => {
                a ? x.value.toggleAllSelection() : x.value.clearSelection();
            }, le = a => {
                o.pubParentId = a.id, o.pageNo = 1, D(a.id), w();
            }, C = () => {
                o.pageNo = 1, w();
            };
            return D("0"), w(), (a, i) => {
                const fe = $e, I = Le, k = Me, u = Oe, re = Be, he = Ee, ve = Ue, ge = Ye, we = We, ke = Qe, se = Je, be = Ge, xe = ua, Ne = fa, Te = ha, Ce = Ie;
                return s(), c("div", null, [ l(g) && l(g) > 0 ? (s(), c("div", A, [ t(se, {
                    class: "cont-box"
                }, {
                    default: r(() => [ _("div", F, [ t(fe, {
                        ref_key: "ComSearchRef",
                        ref: Y,
                        searchList: l(ce),
                        keywordsInfo: {
                            label: "资料名称/文件夹名称",
                            key: "resName"
                        },
                        onHandleSearch: _e,
                        class: "left"
                    }, null, 8, [ "searchList" ]), _("div", L, [ l(b) ? h("", !0) : (s(), 
                    d(k, {
                        key: 0,
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: i[0] || (i[0] = e => ee("addFolder")),
                        style: {
                            "margin-left": "12px"
                        }
                    }, {
                        default: r(() => [ t(I, {
                            icon: "svg-icon:add_folder",
                            class: "mr-5px"
                        }), f(" 新建文件夹 ") ]),
                        _: 1
                    })) ]) ]), _("div", M, [ (s(!0), c(je, null, Ae(l(y), (e, m) => (s(), 
                    c("div", {
                        key: e.id,
                        style: {
                            "max-width": "120px",
                            overflow: "hidden",
                            "white-space": "nowrap",
                            "text-overflow": "ellipsis"
                        }
                    }, [ m < l(y).length - 1 ? (s(), c("span", {
                        key: 0,
                        class: "path-item",
                        onClick: n => le(e)
                    }, v(e.resName), 9, O)) : (s(), c("span", B, v(e.resName), 1)), m < l(y).length - 1 ? (s(), 
                    d(I, {
                        key: 2,
                        icon: "ep:arrow-right-bold",
                        size: 10,
                        style: {
                            margin: "0 10px"
                        }
                    })) : h("", !0) ]))), 128)) ]), t(ge, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 93
                    }, {
                        default: r(() => [ t(ve, {
                            ref_key: "ResourceTableRef",
                            ref: x,
                            data: l(R),
                            "header-row-class-name": "system-header",
                            onSelectionChange: de,
                            "row-key": "id",
                            style: {
                                height: "100%"
                            }
                        }, {
                            default: r(() => [ l(b) ? h("", !0) : (s(), d(u, {
                                key: 0,
                                type: "selection",
                                width: "50"
                            })), t(u, {
                                label: "文件名",
                                prop: "resName",
                                fixed: "",
                                width: "350px"
                            }, {
                                default: r(e => [ _("div", E, [ e.row.resType == 0 ? (s(), 
                                d(I, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : e.row.resType == 6 ? (s(), c("img", U)) : (s(), 
                                c("img", {
                                    key: 2,
                                    src: l(na)(e.row.resName + e.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, K)), _("span", {
                                    class: "file-name__span",
                                    title: e.row.resName,
                                    onClick: m => {
                                        var n;
                                        (n = e.row).resType == 0 ? (Y.value.resetParamsFile(), 
                                        o.resName = "", o.resType = "", le(n)) : n.resType == 6 ? window.open(n.resLink, "_blank") : Z.value.operation(n);
                                    }
                                }, v(e.row.resName), 9, G) ]) ]),
                                _: 1
                            }), t(u, {
                                label: "大小",
                                prop: "resSize",
                                "show-overflow-tooltip": !0,
                                "min-width": "120"
                            }, {
                                default: r(e => [ e.row.resType == 0 || e.row.resType == 6 ? (s(), 
                                c("span", H, "--")) : (s(), c("span", J, v(l(pa)(Number(e.row.resSize))), 1)) ]),
                                _: 1
                            }), t(u, {
                                label: "类型",
                                prop: "resType",
                                "min-width": "80"
                            }, {
                                default: r(e => [ e.row.resType == 6 ? (s(), d(re, {
                                    key: 0,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ f("链接") ]),
                                    _: 1
                                })) : (s(), d(re, {
                                    key: 1,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ f(v(l(ca)(e.row.resType)), 1) ]),
                                    _: 2
                                }, 1024)) ]),
                                _: 1
                            }), t(u, {
                                label: "所在文件夹",
                                prop: "fileFolder",
                                "min-width": "225"
                            }, {
                                default: r(e => {
                                    var m;
                                    return [ _("div", q, [ t(he, {
                                        class: "item",
                                        effect: "dark",
                                        content: (m = e.row.folderPath) == null ? void 0 : m.replace(/,/g, "/"),
                                        placement: "top"
                                    }, {
                                        default: r(() => {
                                            var n;
                                            return [ _("span", Q, v((n = e.row.folderPath) == null ? void 0 : n.split(",").slice(-1)[0]), 1) ];
                                        }),
                                        _: 2
                                    }, 1032, [ "content" ]) ]) ];
                                }),
                                _: 1
                            }), t(u, {
                                label: "公开人",
                                prop: "creatorName",
                                "min-width": "180",
                                "show-overflow-tooltip": ""
                            }), t(u, {
                                label: "公开时间",
                                prop: "publishTime",
                                formatter: l(oa),
                                "min-width": "180"
                            }, null, 8, [ "formatter" ]), l(b) ? h("", !0) : (s(), 
                            d(u, {
                                key: 1,
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: r(e => [ _("div", V, [ e.row.resType == 0 ? (s(), 
                                d(k, {
                                    key: 0,
                                    type: "primary",
                                    size: "small",
                                    link: "",
                                    onClick: m => te("handleEdit", e.row)
                                }, {
                                    default: r(() => [ f(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])) : h("", !0), t(k, {
                                    type: "primary",
                                    size: "small",
                                    link: "",
                                    onClick: m => te("handleMove", e.row)
                                }, {
                                    default: r(() => [ f(" 移动 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), t(k, {
                                    type: "danger",
                                    size: "small",
                                    link: "",
                                    onClick: m => (async n => {
                                        await N.delConfirm("确定删除该资源吗？删除后校本资源库中将不再显示！", "提示"), 
                                        oe({
                                            release: 0
                                        }, [ n.id ]).then(() => {
                                            N.success("删除成功"), C();
                                        });
                                    })(e.row)
                                }, {
                                    default: r(() => [ f(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]) ]),
                                _: 1
                            })) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), _("div", W, [ t(we, {
                        total: l($),
                        page: l(o).pageNo,
                        "onUpdate:page": i[1] || (i[1] = e => l(o).pageNo = e),
                        limit: l(o).pageSize,
                        "onUpdate:limit": i[2] || (i[2] = e => l(o).pageSize = e),
                        onPagination: w
                    }, null, 8, [ "total", "page", "limit" ]) ]), t(ke, {
                        ref_key: "SelectionButtonGroupRef",
                        ref: pe,
                        "select-list": l(T),
                        "page-list": l(R),
                        btnList: [ "delete", "move" ],
                        subject: "文件/文件夹",
                        onDelete: me,
                        onMove: ye,
                        onSelectAll: ue
                    }, null, 8, [ "select-list", "page-list" ]) ]),
                    _: 1
                }) ])) : (s(), d(se, {
                    key: 1,
                    class: "cont-box"
                }, {
                    default: r(() => [ _("div", X, [ t(be, {
                        msg: "暂无资源",
                        type: "resource"
                    }), l(b) ? h("", !0) : (s(), d(Te, {
                        key: 0,
                        teleported: !1,
                        trigger: "hover",
                        class: "empty-dropdown",
                        onCommand: ee
                    }, {
                        dropdown: r(() => [ t(Ne, null, {
                            default: r(() => [ t(xe, {
                                command: "addFolder"
                            }, {
                                default: r(() => [ f("新建文件夹") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        default: r(() => [ t(k, {
                            size: "large",
                            type: "primary"
                        }, {
                            default: r(() => [ f(" 新建 "), t(I, {
                                class: "el-icon--right",
                                icon: "ep:arrow-down",
                                style: {
                                    "margin-left": "5px"
                                }
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    })) ]) ]),
                    _: 1
                })), t(ta, {
                    ref_key: "AddFolderRef",
                    ref: S,
                    onRefresh: C
                }, null, 512), t(ra, {
                    ref_key: "MoveDialogRef",
                    ref: z,
                    onRefresh: C
                }, null, 512), t(Ce, {
                    ref_key: "ResourcePreviewRef",
                    ref: Z
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-40b53304" ] ]);
});

export {
    Ta as __tla,
    ie as default
};