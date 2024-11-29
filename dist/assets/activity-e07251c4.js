import {
    _ as Je,
    __tla as Ue
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    d as Ee,
    e as ue,
    r as c,
    h as Ge,
    p as He,
    U as Ke,
    f as Qe,
    bB as k,
    o,
    c as p,
    a as i,
    k as l,
    l as s,
    t as _,
    v,
    F as fe,
    y as qe,
    B as z,
    C as I,
    D as J,
    _ as Ve,
    J as We,
    ad as Xe,
    L as Ye,
    K as Ze,
    ae as $e,
    __tla as ea
} from "./index-6c08ea4c.js";

import {
    _ as aa,
    __tla as ta
} from "./index-71666e05.js";

import {
    _ as la,
    __tla as ra
} from "./ContentPage-f6bcc98e.js";

import {
    _ as sa,
    __tla as oa
} from "./index-e2094cc0.js";

import {
    _ as ia,
    __tla as na
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
    _ as ma
} from "./file_ACT-3397ae80.js";

import {
    _ as ua,
    __tla as fa
} from "./uploadResource.vue_vue_type_script_setup_true_lang-1c4dac79.js";

import {
    _ as ha,
    __tla as ya
} from "./addFolder.vue_vue_type_script_setup_true_lang-ea73707f.js";

import {
    _ as va,
    __tla as ga
} from "./addLink.vue_vue_type_script_setup_true_lang-9ebce006.js";

import ka, {
    __tla as wa
} from "./moveDialog-7e744632.js";

import {
    _ as ba,
    __tla as Na
} from "./resetName.vue_vue_type_script_setup_true_lang-7d073a48.js";

import {
    d as xa,
    __tla as za
} from "./formatTime-de6f1520.js";

import {
    g as P,
    a as U,
    b as he,
    r as R,
    __tla as Ia
} from "./activity-afb6dd89.js";

import {
    g as La
} from "./file.data-794ea5d0.js";

import {
    __tla as Pa
} from "./file-e038b35d.js";

import {
    a as Sa,
    b as Ra,
    E as Ca,
    __tla as Da
} from "./index-5adb716b.js";

import {
    _ as Ta
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Oa
} from "./index.es-14d10e28.js";

import {
    __tla as ja
} from "./project-file-a2b4fd07.js";

import {
    __tla as Fa
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ba
} from "./DeptTag-1be092ce.js";

import {
    __tla as Aa
} from "./index-ef4d146e.js";

import {
    __tla as Ma
} from "./index-a34a73bc.js";

import "./file_题-23882218.js";

import "./validate-b72f006c.js";

let ye, Ja = Promise.all([ (() => {
    try {
        return Ue;
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
        return ra;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return na;
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
        return ga;
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
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Oa;
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
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})() ]).then(async () => {
    let E, G, H, K, Q, q, V, W, X, Y, Z, $, ee, ae, te, le, re, se;
    E = {
        key: 0
    }, G = {
        class: "top-box"
    }, H = {
        class: "right btns-box"
    }, K = {
        class: "file-path"
    }, Q = [ "onClick" ], q = {
        key: 1,
        class: "path-item stop"
    }, V = {
        class: "file-name"
    }, W = {
        key: 1,
        src: ma,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, X = [ "title", "onClick" ], Y = {
        key: 0,
        class: "file-name"
    }, Z = [ "src" ], $ = [ "onClick" ], ee = {
        key: 1
    }, ae = {
        class: "file-name"
    }, te = {
        class: "file-name__span"
    }, le = {
        class: "items-left flex justify-left"
    }, re = {
        class: "bottom-box pt-12px"
    }, se = {
        key: 1,
        class: "page-empty"
    }, ye = Ta(Ee({
        __name: "activity",
        setup(Ua) {
            const oe = ue(() => ve.isTeacher), n = {
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
            }, C = c(), D = c(), T = c(), ie = c(), ne = c(), O = c(), j = c(), F = c(), ce = c(), ve = Ge(), m = He(), pe = [ {
                label: "校级",
                value: 1
            }, {
                label: "院级",
                value: 2
            }, {
                label: "系级",
                value: 3
            } ], w = c([]), ge = ue(() => [ {
                label: "适应等级",
                key: "applicativeLevel",
                type: "list",
                options: pe
            } ]), h = c([]), b = c([]), N = c(10);
            let B = c(10);
            const t = Ke({
                pageNo: 1,
                pageSize: 10,
                resName: "",
                applicativeLevel: ""
            }), ke = c(!1);
            Qe(() => {
                P({
                    pubParentId: "0",
                    release: 1,
                    tenantId: k(),
                    ...t
                }).then(e => {
                    h.value = e.records, t.pageNo = e.current, t.pageSize = e.size, 
                    N.value = e.total, B.value = e.total;
                }), U({
                    id: n.id,
                    release: 1
                }).then(e => {
                    w.value.push(...e);
                });
            });
            const A = e => {
                e.resType == 0 ? (t.pageNo = 1, T.value.resetParamsFile(), P({
                    ...t,
                    pubParentId: e.id,
                    tenantId: k()
                }).then(r => {
                    n.id = e.id, n.resName = e.resName, n.resDesc = e.resName, h.value = r.records, 
                    t.pageNo = r.current, t.pageSize = r.size, N.value = r.total, 
                    U({
                        id: n.id,
                        release: 1
                    }).then(d => {
                        w.value = d;
                    });
                })) : e.resType == 6 ? window.open(e.resLink, "_blank") : ce.value.operation(e);
            }, de = e => {
                switch (e) {
                  case "uploadFile":
                    C.value.openDialog({
                        title: "新建活动资源",
                        type: "add",
                        fatherObj: n
                    });
                    break;

                  case "addLink":
                    ie.value.openDialog({
                        title: "添加链接"
                    });
                    break;

                  case "addFolder":
                    D.value.openDialog({
                        title: "新建文件夹",
                        type: "add",
                        fatherObj: n
                    });
                }
            };
            function we(e) {
                t.pageNo = 1, t.pageSize = 10, Le(), delete e.keywords;
                let r = !Object.entries(e).some(d => d[1] !== void 0 && d[1] !== "");
                P({
                    ...t,
                    ...e,
                    release: 1,
                    pubParentId: r ? n.id : "",
                    tenantId: k()
                }).then(d => {
                    h.value = d.records, t.pageNo = d.current, t.pageSize = d.size, 
                    N.value = d.total, t.applicativeLevel = e.applicativeLevel, 
                    t.resName = e.resName;
                });
            }
            const be = () => {
                let e = !t.applicativeLevel && !t.resName;
                P({
                    pubParentId: e ? n.id : "",
                    tenantId: k(),
                    ...t
                }).then(r => {
                    h.value = r.records, t.pageNo = r.current, t.pageSize = r.size, 
                    N.value = r.total;
                });
            };
            function Ne(e) {
                b.value = [ ...e ], b.value.length === h.value.length ? j.value.checkBox = !0 : j.value.checkBox = !1;
            }
            const xe = async () => {
                await m.delConfirm("确定删除这些资源吗？删除后不可恢复！", "提示"), R(0, b.value.map(e => e.id)).then(e => {
                    g(), m.success("删除成功");
                });
            }, ze = async () => {
                await m.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定要公开这些资源吗？", "提示"), 
                R(0, b.value.map(e => e.id)).then(e => {
                    g(), m.success("公开成功");
                });
            }, Ie = async () => {
                let e = await he({
                    release: 1,
                    parentId: 0,
                    resType: 0,
                    tenantId: k()
                });
                e = JSON.parse(e || {}), F.value.openDialog({
                    title: "移动到",
                    treeList: e,
                    row: b.value
                });
            }, Le = () => {
                n.pubParentId = "0", n.id = "0", t.applicativeLevel = "", t.resName = "", 
                U({
                    id: 0,
                    release: 1
                }).then(e => {
                    w.value = e;
                });
            }, Pe = async () => {
                await m.confirm("确定下载这些资源吗？", "提示");
            }, Se = e => {
                e ? O.value.toggleAllSelection() : O.value.clearSelection();
            }, g = () => {
                var e;
                (e = T.value) == null || e.resetParamsFile(), t.pageNo = 1, t.pageSize = 10, 
                t.applicativeLevel = "", t.resName = "", P({
                    pubParentId: n.id,
                    tenantId: k(),
                    ...t
                }).then(r => {
                    h.value = r.records, t.pageNo = r.current, t.pageSize = r.size, 
                    N.value = r.total, r.current == 1 && n.id == "0" && (B.value = r.total);
                });
            };
            return (e, r) => {
                const d = da, L = Ve, S = We, y = Xe, Re = Ye, _e = Ze, Ce = $e, De = ca, Te = ia, Oe = sa, je = la, Fe = aa, me = Sa, Be = Ra, Ae = Ca, Me = Je;
                return o(), p("div", null, [ i(B) > 0 ? (o(), p("div", E, [ l(je, {
                    class: "cont-box"
                }, {
                    default: s(() => [ _("div", G, [ l(d, {
                        ref_key: "ComSearchRef",
                        ref: T,
                        searchList: i(ge),
                        keywordsInfo: {
                            label: "活动资料名称/文件夹名称/文件名",
                            key: "resName"
                        },
                        onHandleSearch: we,
                        class: "left"
                    }, null, 8, [ "searchList" ]), _("div", H, [ l(S, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: r[0] || (r[0] = a => de("addFolder"))
                    }, {
                        default: s(() => [ l(L, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), v(" 新建文件夹 ") ]),
                        _: 1
                    }) ]) ]), _("div", K, [ (o(!0), p(fe, null, qe(i(w), (a, u) => (o(), 
                    p("div", {
                        key: a.id,
                        style: {
                            "max-width": "120px",
                            overflow: "hidden",
                            "white-space": "nowrap",
                            "text-overflow": "ellipsis"
                        }
                    }, [ u < i(w).length - 1 ? (o(), p("span", {
                        key: 0,
                        class: "path-item",
                        onClick: x => {
                            return (f = a).resType = 0, void A(f);
                            var f;
                        }
                    }, z(a.resName), 9, Q)) : (o(), p("span", q, z(a.resName), 1)), u < i(w).length - 1 ? (o(), 
                    I(L, {
                        key: 2,
                        icon: "ep:arrow-right-bold",
                        size: 10,
                        style: {
                            margin: "0 10px"
                        }
                    })) : J("", !0) ]))), 128)) ]), l(De, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 93
                    }, {
                        default: s(() => [ l(Ce, {
                            ref_key: "ResourceTableRef",
                            ref: O,
                            data: i(h),
                            height: "calc(100% )",
                            "header-row-class-name": "system-header",
                            onSelectionChange: Ne,
                            "row-key": "id"
                        }, {
                            default: s(() => [ i(oe) ? J("", !0) : (o(), I(y, {
                                key: 0,
                                type: "selection",
                                width: "50"
                            })), l(y, {
                                label: "资料名称/文件夹名称",
                                key: "actName",
                                prop: "actName",
                                "min-width": "180px"
                            }, {
                                default: s(a => [ _("div", V, [ a.row.resType == 0 ? (o(), 
                                I(L, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : (o(), p("img", W)), _("span", {
                                    class: "file-name__span",
                                    title: a.row.actName,
                                    onClick: u => A(a.row)
                                }, z(a.row.actName), 9, X) ]) ]),
                                _: 1
                            }), l(y, {
                                label: "适用等级",
                                prop: "applicativeLevel",
                                "show-overflow-tooltip": !0
                            }, {
                                default: s(a => [ a.row.applicativeLevel ? (o(), 
                                I(Re, {
                                    key: 0,
                                    type: a.row.applicativeLevel == 1 ? "primary" : a.row.applicativeLevel == 2 ? "success" : "warning",
                                    class: "type-tag"
                                }, {
                                    default: s(() => {
                                        var u;
                                        return [ v(z((u = pe.find(x => x.value == a.row.applicativeLevel)) == null ? void 0 : u.label), 1) ];
                                    }),
                                    _: 2
                                }, 1032, [ "type" ])) : (o(), p(fe, {
                                    key: 1
                                }, [ v(" -- ") ], 64)) ]),
                                _: 1
                            }), l(y, {
                                label: "文件名",
                                prop: "resName",
                                "min-width": "260px"
                            }, {
                                default: s(a => [ a.row.resType != 0 ? (o(), p("div", Y, [ a.row.resType == 0 ? (o(), 
                                I(L, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : (o(), p("img", {
                                    key: 1,
                                    src: i(La)(a.row.resName + a.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, Z)), l(_e, {
                                    effect: "dark",
                                    content: a.row.resName,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: s(() => [ _("span", {
                                        class: "file-name__span",
                                        onClick: u => A(a.row)
                                    }, z(a.row.resName), 9, $) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])) : (o(), p("div", ee, "--")) ]),
                                _: 1
                            }), l(y, {
                                label: "所在文件夹",
                                key: "folderPath",
                                prop: "folderPath"
                            }, {
                                default: s(a => [ _("div", ae, [ l(_e, {
                                    effect: "dark",
                                    content: a.row.folderPath,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: s(() => [ _("span", te, z(a.row.folderPath && a.row.folderPath.indexOf(",") >= 0 ? a.row.folderPath.split(",").slice(-1)[0] : a.row.folderPath), 1) ]),
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
                                formatter: i(xa),
                                width: "180"
                            }, null, 8, [ "formatter" ]), i(oe) ? J("", !0) : (o(), 
                            I(y, {
                                key: 1,
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: s(a => [ _("div", le, [ l(S, {
                                    type: "primary",
                                    size: "small",
                                    onClick: u => (async (x, f) => {
                                        switch (x) {
                                          case "handlePublic":
                                            await m.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定公开吗？", "提示"), 
                                            R(0, [ f.id ]).then(Ea => {
                                                g(), m.success("公开成功");
                                            });
                                            break;

                                          case "handleMove":
                                            let M = await he({
                                                release: 1,
                                                parentId: 0,
                                                resType: 0,
                                                tenantId: k()
                                            });
                                            M = JSON.parse(M || {}), F.value.openDialog({
                                                title: "移动到",
                                                treeList: M,
                                                row: [ f ]
                                            });
                                            break;

                                          case "handleEdit":
                                            f.eid ? C.value.openDialog({
                                                title: "编辑活动资源",
                                                editObject: f,
                                                type: "edit",
                                                fatherObj: n
                                            }) : D.value.openDialog({
                                                title: "编辑文件夹",
                                                type: "edit",
                                                editObject: f,
                                                fatherObj: n
                                            });
                                            break;

                                          case "handleResetName":
                                            ne.value.openDialog({
                                                title: "重命名"
                                            });
                                        }
                                    })("handleMove", a.row),
                                    link: ""
                                }, {
                                    default: s(() => [ v(" 移动 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), l(S, {
                                    type: "danger",
                                    size: "small",
                                    link: "",
                                    onClick: u => (async x => {
                                        await m.delConfirm("确定删除该资源吗？删除后不可恢复！", "提示"), 
                                        R(0, [ x.id ]).then(f => {
                                            g(), m.success("删除成功");
                                        });
                                    })(a.row)
                                }, {
                                    default: s(() => [ v(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]) ]),
                                _: 1
                            })) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), _("div", re, [ l(Te, {
                        total: i(N),
                        page: i(t).pageNo,
                        "onUpdate:page": r[1] || (r[1] = a => i(t).pageNo = a),
                        limit: i(t).pageSize,
                        "onUpdate:limit": r[2] || (r[2] = a => i(t).pageSize = a),
                        onPagination: be
                    }, null, 8, [ "total", "page", "limit" ]) ]), l(Oe, {
                        ref_key: "SelectionButtonGroupRef",
                        ref: j,
                        "select-list": i(b),
                        "page-list": i(h),
                        btnList: [ "delete", "move" ],
                        checkBox: i(ke),
                        subject: "文件/文件夹",
                        onDelete: xe,
                        onMove: Ie,
                        onShare: ze,
                        onDownload: Pe,
                        onSelectAll: Se
                    }, null, 8, [ "select-list", "page-list", "checkBox" ]) ]),
                    _: 1
                }) ])) : (o(), p("div", se, [ l(Fe, {
                    type: "resource",
                    msg: "暂无资源"
                }), l(Ae, {
                    teleported: !1,
                    class: "empty-dropdown",
                    onCommand: de
                }, {
                    dropdown: s(() => [ l(Be, null, {
                        default: s(() => [ l(me, {
                            command: "uploadFile"
                        }, {
                            default: s(() => [ v("新建活动资源") ]),
                            _: 1
                        }), l(me, {
                            command: "addFolder"
                        }, {
                            default: s(() => [ v("新建文件夹") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    default: s(() => [ l(S, {
                        type: "primary",
                        size: "large"
                    }, {
                        default: s(() => [ v(" 新建 "), l(L, {
                            class: "el-icon--right",
                            icon: "ep:arrow-down",
                            style: {
                                "margin-left": "5px"
                            }
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ])), l(ua, {
                    ref_key: "UploadResourceRef",
                    ref: C,
                    onRefresh: g
                }, null, 512), l(ha, {
                    ref_key: "AddFolderRef",
                    ref: D,
                    onRefresh: g
                }, null, 512), l(va, {
                    ref_key: "AddLinkRef",
                    ref: ie
                }, null, 512), l(ka, {
                    ref_key: "MoveDialogRef",
                    ref: F,
                    onRefresh: g
                }, null, 512), l(ba, {
                    ref_key: "ResetNameRef",
                    ref: ne
                }, null, 512), l(Me, {
                    ref_key: "ResourcePreviewRef",
                    ref: ce
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-ad3636be" ] ]);
});

export {
    Ja as __tla,
    ye as default
};