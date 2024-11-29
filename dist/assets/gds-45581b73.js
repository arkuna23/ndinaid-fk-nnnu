import {
    _ as Me,
    __tla as Ee
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    d as Je,
    e as E,
    r as p,
    h as qe,
    p as He,
    U as $e,
    f as Ge,
    bB as k,
    o,
    c as d,
    a as n,
    k as l,
    l as s,
    t as m,
    v as f,
    D as P,
    F as ye,
    y as Ke,
    B as z,
    C as v,
    _ as Qe,
    J as Ve,
    ad as We,
    L as Xe,
    K as Ye,
    ae as Ze,
    __tla as ea
} from "./index-6c08ea4c.js";

import {
    _ as aa,
    __tla as ta
} from "./index-71666e05.js";

import {
    _ as ra,
    __tla as la
} from "./ContentPage-f6bcc98e.js";

import {
    _ as sa,
    __tla as oa
} from "./index-e2094cc0.js";

import {
    _ as na,
    __tla as ia
} from "./index-c4ca0ced.js";

import {
    _ as ca,
    __tla as pa
} from "./index-8b41572c.js";

import {
    _ as da,
    __tla as _a
} from "./index-1024512a.js";

import {
    _ as ua
} from "./file_GDS-f505c9c0.js";

import {
    _ as ma,
    __tla as fa
} from "./uploadResource.vue_vue_type_script_setup_true_lang-756c558b.js";

import {
    _ as ha,
    __tla as ya
} from "./addFolder.vue_vue_type_script_setup_true_lang-27128a02.js";

import {
    _ as ga,
    __tla as ka
} from "./addLink.vue_vue_type_script_setup_true_lang-b41d0662.js";

import va, {
    __tla as wa
} from "./moveDialog-3f7e3aec.js";

import {
    _ as ba,
    __tla as Na
} from "./resetName.vue_vue_type_script_setup_true_lang-e8253dd9.js";

import {
    d as xa,
    __tla as za
} from "./formatTime-de6f1520.js";

import {
    b as S,
    d as J,
    g as ge,
    r as R,
    __tla as Ia
} from "./gds-4e6665e9.js";

import {
    g as Pa
} from "./file.data-794ea5d0.js";

import {
    __tla as Sa
} from "./file-e038b35d.js";

import {
    a as Ca,
    b as Ra,
    E as Da,
    __tla as Ta
} from "./index-5adb716b.js";

import {
    _ as Oa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ja
} from "./index.es-14d10e28.js";

import {
    __tla as Fa
} from "./project-file-a2b4fd07.js";

import {
    __tla as La
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ba
} from "./DeptTag-1be092ce.js";

import {
    __tla as Aa
} from "./index-ef4d146e.js";

import {
    __tla as Ua
} from "./index-a34a73bc.js";

import "./file_题-23882218.js";

import "./validate-b72f006c.js";

let ke, Ma = Promise.all([ (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Sa;
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
        return Fa;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})() ]).then(async () => {
    let q, H, $, G, K, Q, V, W, X, Y, Z, ee, ae, te, re, le, se, oe;
    q = {
        key: 0
    }, H = {
        class: "top-box"
    }, $ = {
        key: 0,
        class: "right btns-box"
    }, G = {
        class: "file-path"
    }, K = [ "onClick" ], Q = {
        key: 1,
        class: "path-item stop"
    }, V = {
        class: "file-name"
    }, W = {
        key: 1,
        src: ua,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, X = [ "title", "onClick" ], Y = {
        key: 0,
        class: "file-name"
    }, Z = [ "src" ], ee = [ "onClick" ], ae = {
        key: 1
    }, te = {
        class: "file-name"
    }, re = {
        class: "file-name__span"
    }, le = {
        class: "items-left flex justify-left"
    }, se = {
        class: "bottom-box pt-12px"
    }, oe = {
        key: 1,
        class: "page-empty"
    }, ke = Oa(Je({
        __name: "gds",
        setup(Ea) {
            const D = E(() => pe.isTeacher), i = {
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
            }, T = p(), O = p(), j = p(), ne = p(), ie = p(), F = p(), L = p(), B = p(), ce = p(), pe = qe();
            E(() => pe.getIsSetUser);
            const u = He(), de = (() => {
                let e, t = [];
                for (e = 2019; e <= 2054; e++) t.push({
                    label: `${e}`,
                    value: `${e}`
                });
                return t;
            })(), w = p([]), ve = E(() => [ {
                label: "所属年届",
                key: "annual",
                type: "list",
                options: de
            } ]), h = p([]), b = p([]), N = p(10);
            let A = p(10);
            const r = $e({
                pageNo: 1,
                pageSize: 10,
                resName: "",
                annual: ""
            }), we = p(!1);
            Ge(() => {
                S({
                    pubParentId: "0",
                    release: 1,
                    tenantId: k(),
                    ...r
                }).then(e => {
                    h.value = e.records, r.pageNo = e.current, r.pageSize = e.size, 
                    N.value = e.total, A.value = e.total;
                }), J({
                    id: i.id,
                    release: 1
                }).then(e => {
                    w.value.push(...e);
                });
            });
            const _e = () => {
                i.pubParentId = "0", i.id = "0", r.annual = "", r.resName = "", 
                J({
                    id: 0,
                    release: 1
                }).then(e => {
                    w.value = e;
                });
            }, U = e => {
                e.resType == 0 ? (r.pageNo = 1, j.value.resetParamsFile(), S({
                    ...r,
                    pubParentId: e.id,
                    tenantId: k()
                }).then(t => {
                    i.id = e.id, i.resName = e.resName, i.resDesc = e.resName, h.value = t.records, 
                    r.pageNo = t.current, r.pageSize = t.size, N.value = t.total, 
                    J({
                        id: i.id,
                        release: 1
                    }).then(c => {
                        w.value = c;
                    });
                })) : e.resType == 6 ? window.open(e.resLink, "_blank") : ce.value.operation(e);
            }, ue = e => {
                switch (e) {
                  case "uploadFile":
                    T.value.openDialog({
                        title: "新建毕设资源",
                        type: "add",
                        fatherObj: i
                    });
                    break;

                  case "addLink":
                    ne.value.openDialog({
                        title: "添加链接"
                    });
                    break;

                  case "addFolder":
                    O.value.openDialog({
                        title: "新建文件夹",
                        type: "add",
                        fatherObj: i
                    });
                }
            };
            function be(e) {
                r.pageNo = 1, r.pageSize = 10, _e(), delete e.keywords;
                let t = !Object.entries(e).some(c => c[1] !== void 0 && c[1] !== "");
                S({
                    ...r,
                    ...e,
                    pubParentId: t ? i.id : "",
                    tenantId: k()
                }).then(c => {
                    h.value = c.records, r.pageNo = c.current, r.pageSize = c.size, 
                    N.value = c.total, r.annual = e.annual, r.resName = e.resName;
                });
            }
            const Ne = () => {
                let e = !r.annual && !r.resName;
                S({
                    pubParentId: e ? i.id : "",
                    tenantId: k(),
                    ...r
                }).then(t => {
                    h.value = t.records, r.pageNo = t.current, r.pageSize = t.size, 
                    N.value = t.total;
                });
            }, me = async (e, t) => {
                switch (e) {
                  case "handlePublic":
                    await u.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定公开吗？", "提示"), 
                    R(0, [ t.id ]).then(x => {
                        g(), u.success("公开成功");
                    });
                    break;

                  case "handleMove":
                    let c = await ge({
                        release: 1,
                        parentId: 0,
                        resType: 0,
                        tenantId: k()
                    });
                    c = JSON.parse(c || {}), B.value.openDialog({
                        title: "移动到",
                        treeList: c,
                        row: [ t ]
                    });
                    break;

                  case "handleEdit":
                    t.eid ? T.value.openDialog({
                        title: "编辑毕设资源",
                        editObject: t,
                        type: "edit",
                        fatherObj: i
                    }) : O.value.openDialog({
                        title: "编辑文件夹",
                        type: "edit",
                        editObject: t,
                        fatherObj: i
                    });
                    break;

                  case "handleResetName":
                    ie.value.openDialog({
                        title: "重命名"
                    });
                }
            };
            function xe(e) {
                b.value = [ ...e ], b.value.length === h.value.length ? L.value.checkBox = !0 : L.value.checkBox = !1;
            }
            const ze = async () => {
                await u.delConfirm("确定删除这些资源吗？删除后不可恢复！", "提示"), R(0, b.value.map(e => e.id)).then(e => {
                    g(), u.success("删除成功");
                });
            }, Ie = async () => {
                await u.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定要公开这些资源吗？", "提示"), 
                R(0, b.value.map(e => e.id)).then(e => {
                    g(), u.success("公开成功");
                });
            }, Pe = async () => {
                let e = await ge({
                    release: 1,
                    parentId: 0,
                    resType: 0,
                    tenantId: k()
                });
                e = JSON.parse(e || {}), B.value.openDialog({
                    title: "移动到",
                    treeList: e,
                    row: b.value
                });
            }, Se = async () => {
                await u.confirm("确定下载这些资源吗？", "提示");
            }, Ce = e => {
                e ? F.value.toggleAllSelection() : F.value.clearSelection();
            }, g = () => {
                var e;
                (e = j.value) == null || e.resetParamsFile(), r.pageNo = 1, r.pageSize = 10, 
                r.annual = "", r.resName = "", S({
                    pubParentId: i.id,
                    tenantId: k(),
                    ...r
                }).then(t => {
                    h.value = t.records, r.pageNo = t.current, r.pageSize = t.size, 
                    N.value = t.total, t.current == 1 && i.id == "0" && (A.value = t.total);
                });
            };
            return (e, t) => {
                const c = da, x = Qe, I = Ve, y = We, Re = Xe, fe = Ye, De = Ze, Te = ca, Oe = na, je = sa, Fe = ra, Le = aa, he = Ca, Be = Ra, Ae = Da, Ue = Me;
                return o(), d("div", null, [ n(A) > 0 ? (o(), d("div", q, [ l(Fe, {
                    class: "cont-box"
                }, {
                    default: s(() => [ m("div", H, [ l(c, {
                        ref_key: "ComSearchRef",
                        ref: j,
                        searchList: n(ve),
                        keywordsInfo: {
                            label: "毕设资源名称/文件夹名称/文件名",
                            key: "resName"
                        },
                        onHandleSearch: be,
                        onHandleReset: _e,
                        class: "left"
                    }, null, 8, [ "searchList" ]), n(D) ? P("", !0) : (o(), d("div", $, [ l(I, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: t[0] || (t[0] = a => ue("addFolder"))
                    }, {
                        default: s(() => [ l(x, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), f(" 新建文件夹 ") ]),
                        _: 1
                    }) ])) ]), m("div", G, [ (o(!0), d(ye, null, Ke(n(w), (a, _) => (o(), 
                    d("div", {
                        key: a.id,
                        style: {
                            "max-width": "120px",
                            overflow: "hidden",
                            "white-space": "nowrap",
                            "text-overflow": "ellipsis"
                        }
                    }, [ _ < n(w).length - 1 ? (o(), d("span", {
                        key: 0,
                        class: "path-item",
                        onClick: C => {
                            return (M = a).resType = 0, void U(M);
                            var M;
                        }
                    }, z(a.resName), 9, K)) : (o(), d("span", Q, z(a.resName), 1)), _ < n(w).length - 1 ? (o(), 
                    v(x, {
                        key: 2,
                        icon: "ep:arrow-right-bold",
                        size: 10,
                        style: {
                            margin: "0 10px"
                        }
                    })) : P("", !0) ]))), 128)) ]), l(Te, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 93
                    }, {
                        default: s(() => [ l(De, {
                            ref_key: "ResourceTableRef",
                            ref: F,
                            data: n(h),
                            height: "calc(100% )",
                            "header-row-class-name": "system-header",
                            onSelectionChange: xe,
                            "row-key": "id"
                        }, {
                            default: s(() => [ n(D) ? P("", !0) : (o(), v(y, {
                                key: 0,
                                type: "selection",
                                width: "50"
                            })), l(y, {
                                label: "资料名称/文件夹名称",
                                key: "grdName",
                                prop: "grdName",
                                "min-width": "180px"
                            }, {
                                default: s(a => [ m("div", V, [ a.row.resType == 0 ? (o(), 
                                v(x, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : (o(), d("img", W)), m("span", {
                                    class: "file-name__span",
                                    title: a.row.grdName,
                                    onClick: _ => U(a.row)
                                }, z(a.row.grdName), 9, X) ]) ]),
                                _: 1
                            }), l(y, {
                                label: "所属年届",
                                prop: "annual",
                                "show-overflow-tooltip": !0
                            }, {
                                default: s(a => [ a.row.annual ? (o(), v(Re, {
                                    key: 0,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: s(() => {
                                        var _;
                                        return [ f(z((_ = n(de).find(C => C.value == a.row.annual)) == null ? void 0 : _.label), 1) ];
                                    }),
                                    _: 2
                                }, 1024)) : (o(), d(ye, {
                                    key: 1
                                }, [ f(" -- ") ], 64)) ]),
                                _: 1
                            }), l(y, {
                                label: "文件名",
                                prop: "resName",
                                "min-width": "260px"
                            }, {
                                default: s(a => [ a.row.resType != 0 ? (o(), d("div", Y, [ a.row.resType == 0 ? (o(), 
                                v(x, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : (o(), d("img", {
                                    key: 1,
                                    src: n(Pa)(a.row.resName + a.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, Z)), l(fe, {
                                    effect: "dark",
                                    content: a.row.resName,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: s(() => [ m("span", {
                                        class: "file-name__span",
                                        onClick: _ => U(a.row)
                                    }, z(a.row.resName), 9, ee) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])) : (o(), d("div", ae, "--")) ]),
                                _: 1
                            }), l(y, {
                                label: "所在文件夹",
                                key: "folderPath",
                                prop: "folderPath"
                            }, {
                                default: s(a => [ m("div", te, [ l(fe, {
                                    effect: "dark",
                                    content: a.row.folderPath,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: s(() => [ m("span", re, z(a.row.folderPath && a.row.folderPath.indexOf(",") >= 0 ? a.row.folderPath.split(",").slice(-1)[0] : a.row.folderPath), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ]) ]),
                                _: 1
                            }), l(y, {
                                label: "公开人",
                                prop: "creatorName",
                                "show-overflow-tooltip": !0
                            }), l(y, {
                                label: "公开时间",
                                prop: "publishTime",
                                formatter: n(xa),
                                width: "180"
                            }, null, 8, [ "formatter" ]), n(D) ? P("", !0) : (o(), 
                            v(y, {
                                key: 1,
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: s(a => [ m("div", le, [ a.row.resType == 0 ? (o(), 
                                v(I, {
                                    key: 0,
                                    type: "primary",
                                    size: "small",
                                    link: "",
                                    onClick: _ => me("handleEdit", a.row)
                                }, {
                                    default: s(() => [ f(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])) : P("", !0), l(I, {
                                    type: "primary",
                                    size: "small",
                                    onClick: _ => me("handleMove", a.row),
                                    link: ""
                                }, {
                                    default: s(() => [ f(" 移动 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), l(I, {
                                    type: "danger",
                                    size: "small",
                                    link: "",
                                    onClick: _ => (async C => {
                                        await u.delConfirm("确定删除该资源吗？删除后不可恢复！", "提示"), 
                                        R(0, [ C.id ]).then(M => {
                                            g(), u.success("删除成功");
                                        });
                                    })(a.row)
                                }, {
                                    default: s(() => [ f(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]) ]),
                                _: 1
                            })) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), m("div", se, [ l(Oe, {
                        total: n(N),
                        page: n(r).pageNo,
                        "onUpdate:page": t[1] || (t[1] = a => n(r).pageNo = a),
                        limit: n(r).pageSize,
                        "onUpdate:limit": t[2] || (t[2] = a => n(r).pageSize = a),
                        onPagination: Ne
                    }, null, 8, [ "total", "page", "limit" ]) ]), l(je, {
                        ref_key: "SelectionButtonGroupRef",
                        ref: L,
                        "select-list": n(b),
                        "page-list": n(h),
                        btnList: [ "delete", "move" ],
                        checkBox: n(we),
                        subject: "文件/文件夹",
                        onDelete: ze,
                        onMove: Pe,
                        onShare: Ie,
                        onDownload: Se,
                        onSelectAll: Ce
                    }, null, 8, [ "select-list", "page-list", "checkBox" ]) ]),
                    _: 1
                }) ])) : (o(), d("div", oe, [ l(Le, {
                    type: "resource",
                    msg: "暂无资源"
                }), l(Ae, {
                    teleported: !1,
                    class: "empty-dropdown",
                    onCommand: ue
                }, {
                    dropdown: s(() => [ l(Be, null, {
                        default: s(() => [ l(he, {
                            command: "uploadFile"
                        }, {
                            default: s(() => [ f("新建毕设资源") ]),
                            _: 1
                        }), l(he, {
                            command: "addFolder"
                        }, {
                            default: s(() => [ f("新建文件夹") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    default: s(() => [ l(I, {
                        type: "primary",
                        size: "large"
                    }, {
                        default: s(() => [ f(" 新建 "), l(x, {
                            class: "el-icon--right",
                            icon: "ep:arrow-down",
                            style: {
                                "margin-left": "5px"
                            }
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ])), l(ma, {
                    ref_key: "UploadResourceRef",
                    ref: T,
                    onRefresh: g
                }, null, 512), l(ha, {
                    ref_key: "AddFolderRef",
                    ref: O,
                    onRefresh: g
                }, null, 512), l(ga, {
                    ref_key: "AddLinkRef",
                    ref: ne
                }, null, 512), l(va, {
                    ref_key: "MoveDialogRef",
                    ref: B,
                    onRefresh: g
                }, null, 512), l(ba, {
                    ref_key: "ResetNameRef",
                    ref: ie
                }, null, 512), l(Ue, {
                    ref_key: "ResourcePreviewRef",
                    ref: ce
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-1e987dde" ] ]);
});

export {
    Ma as __tla,
    ke as default
};