import {
    _ as Je,
    __tla as Ge
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    _ as He,
    __tla as $e
} from "./index-71666e05.js";

import {
    _ as Ke,
    __tla as Qe
} from "./ContentPage-f6bcc98e.js";

import {
    _ as qe,
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
    d as ea,
    r as p,
    h as aa,
    p as ta,
    e as ra,
    U as la,
    f as sa,
    o,
    c as u,
    a as n,
    k as r,
    l as s,
    t as y,
    v as m,
    F as ge,
    y as oa,
    B as I,
    C as h,
    D as P,
    _ as na,
    J as ia,
    ad as da,
    L as ca,
    K as pa,
    ae as _a,
    __tla as ua
} from "./index-6c08ea4c.js";

import {
    _ as ma,
    __tla as fa
} from "./index-1024512a.js";

import {
    _ as ya
} from "./file_GDS-f505c9c0.js";

import {
    _ as ha,
    __tla as ga
} from "./uploadResource.vue_vue_type_script_setup_true_lang-62fe8b92.js";

import {
    _ as ka,
    __tla as va
} from "./addFolder.vue_vue_type_script_setup_true_lang-4fad9c52.js";

import {
    _ as wa,
    __tla as ba
} from "./addLink.vue_vue_type_script_setup_true_lang-6a43bf7d.js";

import Na, {
    __tla as xa
} from "./moveDialog-2a7fac69.js";

import {
    _ as Ca,
    __tla as za
} from "./resetName.vue_vue_type_script_setup_true_lang-ecf1e607.js";

import {
    d as Ia,
    __tla as Pa
} from "./formatTime-de6f1520.js";

import {
    b as S,
    d as M,
    g as ke,
    r as ve,
    e as we,
    __tla as Sa
} from "./gdsAdmin-093ae0de.js";

import {
    g as Ra
} from "./file.data-794ea5d0.js";

import {
    h as be,
    __tla as Ua
} from "./file-e038b35d.js";

import {
    a as Da,
    b as Ta,
    E as ja,
    __tla as Fa
} from "./index-5adb716b.js";

import {
    _ as Oa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as La
} from "./index.es-14d10e28.js";

import {
    __tla as Aa
} from "./project-file-a2b4fd07.js";

import {
    __tla as Ba
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ea
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ma
} from "./index-ef4d146e.js";

import {
    __tla as Ja
} from "./index-a34a73bc.js";

import "./file_题-23882218.js";

import "./validate-b72f006c.js";

let Ne, Ga = Promise.all([ (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Qe;
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
        return ua;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return va;
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
        return za;
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
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})() ]).then(async () => {
    let J, G, H, $, K, Q, q, V, W, X, Y, Z, ee, ae, te, re, le, se, oe, ne;
    J = {
        key: 0
    }, G = {
        class: "top-box"
    }, H = {
        class: "right btns-box"
    }, $ = {
        class: "file-path"
    }, K = [ "onClick" ], Q = {
        key: 1,
        class: "path-item stop"
    }, q = {
        class: "file-name"
    }, V = {
        key: 1,
        src: ya,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, W = [ "title", "onClick" ], X = {
        key: 0,
        class: "file-name"
    }, Y = [ "src" ], Z = [ "onClick" ], ee = {
        key: 1
    }, ae = {
        class: "file-name"
    }, te = {
        class: "file-name__span"
    }, re = {
        key: 0,
        class: "items-left flex justify-left"
    }, le = {
        key: 1,
        class: "items-left flex justify-left"
    }, se = {
        class: "neu-table-more"
    }, oe = {
        class: "bottom-box pt-12px"
    }, ne = {
        key: 1,
        class: "page-empty"
    }, Ne = Oa(ea({
        __name: "gdsAdmin",
        setup(Ha) {
            const i = {
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
            }, D = p(), T = p(), j = p(), ie = p(), de = p(), F = p(), O = p(), L = p(), ce = p(), _ = aa(), f = ta(), pe = (() => {
                let e, t = [];
                for (e = 2019; e <= 2054; e++) t.push({
                    label: `${e}`,
                    value: `${e}`
                });
                return t;
            })(), x = p([]), xe = ra(() => [ {
                label: "所属年届",
                key: "annual",
                type: "list",
                options: pe
            } ]), g = p([]), k = p([]), C = p(10);
            let A = p(10);
            const l = la({
                pageNo: 1,
                pageSize: 10,
                release: "",
                resName: "",
                annual: ""
            }), Ce = p(!1);
            sa(() => {
                S({
                    neuParentId: "0",
                    creator: _.getUser.id,
                    tenantId: _.getUser.id,
                    ...l
                }).then(e => {
                    g.value = e.records, l.pageNo = e.current, l.pageSize = e.size, 
                    C.value = e.total, A.value = e.total;
                }), M({
                    id: i.id,
                    release: 0
                }).then(e => {
                    x.value.push(...e);
                });
            });
            const _e = () => {
                i.neuParentId = "0", i.id = "0", l.release = "", l.annual = "", 
                l.resName = "", M({
                    id: 0,
                    release: 0
                }).then(e => {
                    x.value = e;
                });
            }, B = e => {
                e.resType == 0 ? (l.pageNo = 1, j.value.resetParamsFile(), S({
                    ...l,
                    neuParentId: e.id,
                    creator: _.getUser.id,
                    tenantId: _.getUser.id
                }).then(t => {
                    i.id = e.id, i.resName = e.resName, i.resDesc = e.resName, g.value = t.records, 
                    l.pageNo = t.current, l.pageSize = t.size, C.value = t.total, 
                    M({
                        id: i.id,
                        release: 0
                    }).then(d => {
                        x.value = d;
                    });
                })) : e.resType == 6 ? window.open(e.resLink, "_blank") : ce.value.operation(e);
            }, E = e => {
                switch (e) {
                  case "uploadFile":
                    D.value.openDialog({
                        title: "新建毕设资源",
                        type: "add",
                        fatherObj: i
                    });
                    break;

                  case "addLink":
                    ie.value.openDialog({
                        title: "添加链接"
                    });
                    break;

                  case "addFolder":
                    T.value.openDialog({
                        title: "新建文件夹",
                        type: "add",
                        fatherObj: i
                    });
                }
            };
            function ze(e) {
                l.pageNo = 1, l.pageSize = 10, _e(), delete e.keywords;
                let t = !Object.entries(e).some(d => d[1] !== void 0 && d[1] !== "");
                S({
                    ...l,
                    ...e,
                    neuParentId: t ? i.id : "",
                    creator: _.getUser.id,
                    tenantId: _.getUser.id
                }).then(d => {
                    g.value = d.records, l.pageNo = d.current, l.pageSize = d.size, 
                    l.annual = e.annual, l.release = e.release, l.resName = e.resName, 
                    C.value = d.total;
                });
            }
            const Ie = () => {
                let e = !l.annual && !l.release && !l.resName;
                S({
                    neuParentId: e ? i.id : "",
                    creator: _.getUser.id,
                    tenantId: _.getUser.id,
                    ...l
                }).then(t => {
                    g.value = t.records, l.pageNo = t.current, l.pageSize = t.size, 
                    C.value = t.total;
                });
            }, R = async (e, t) => {
                switch (e) {
                  case "handlePublic":
                    await f.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定公开吗？", "提示"), 
                    ve(1, [ t.id ]).then(v => {
                        b(), f.success("公开成功");
                    });
                    break;

                  case "handleMove":
                    let d = await ke({
                        release: 0,
                        parentId: 0,
                        resType: 0,
                        creator: _.getUser.id,
                        tenantId: _.getUser.id
                    });
                    d = JSON.parse(d || {}), L.value.openDialog({
                        title: "移动到",
                        treeList: d,
                        row: [ t ]
                    });
                    break;

                  case "handleEdit":
                    t.resType == 0 ? T.value.openDialog({
                        title: "编辑文件夹",
                        type: "edit",
                        editObject: t,
                        fatherObj: i
                    }) : D.value.openDialog({
                        title: "编辑毕设资源",
                        editObject: t,
                        type: "edit",
                        fatherObj: i
                    });
                    break;

                  case "handleResetName":
                    de.value.openDialog({
                        title: "重命名"
                    });
                }
            }, ue = async e => {
                await f.delConfirm("确定删除该资源吗？删除后不可恢复！", "提示"), we([ e.id ], 0).then(t => {
                    b(), t ? f.success("删除成功") : f.error("文件夹下有资源不能删除");
                });
            };
            function Pe(e) {
                k.value = [ ...e ], k.value.length === g.value.length ? O.value.checkBox = !0 : O.value.checkBox = !1;
            }
            const Se = async () => {
                k.value.find(e => e.release == 1) ? f.warning("资源已公开，不可删除。") : (await f.delConfirm("确定删除这些资源吗？删除后不可恢复！", "提示"), 
                we(k.value.map(e => e.id), 0).then(e => {
                    b(), e ? f.success("删除成功") : f.error("文件夹下有资源不能删除");
                }));
            }, Re = async () => {
                await f.confirm("资源公开后将显示在校本资源库里，所有人均可查看和使用，且公开后该资源不可再修改或删除， 确定要公开这些资源吗？", "提示"), 
                ve(1, k.value.map(e => e.id)).then(e => {
                    b(), f.success("公开成功");
                });
            }, Ue = async () => {
                let e = await ke({
                    release: 0,
                    parentId: 0,
                    resType: 0,
                    creator: _.getUser.id,
                    tenantId: _.getUser.id
                });
                e = JSON.parse(e || {}), L.value.openDialog({
                    title: "移动到",
                    treeList: e,
                    row: k.value
                });
            }, De = async () => {
                await f.confirm("确定下载这些资源吗？", "提示"), k.value.forEach(e => {
                    be(e.eid, e.resName);
                });
            }, Te = e => {
                e ? F.value.toggleAllSelection() : F.value.clearSelection();
            }, b = () => {
                var e;
                (e = j.value) == null || e.resetParamsFile(), l.pageNo = 1, l.pageSize = 10, 
                l.release = "", l.annual = "", l.resName = "", S({
                    neuParentId: i.id,
                    creator: _.getUser.id,
                    tenantId: _.getUser.id,
                    ...l
                }).then(t => {
                    g.value = t.records, l.pageNo = t.current, l.pageSize = t.size, 
                    C.value = t.total, t.current == 1 && i.id == "0" && (A.value = t.total);
                });
            };
            return (e, t) => {
                const d = ma, v = na, w = ia, N = da, je = ca, me = pa, U = Da, fe = Ta, ye = ja, Fe = _a, Oe = Ye, Le = We, Ae = qe, Be = Ke, Ee = He, Me = Je;
                return o(), u("div", null, [ n(A) > 0 ? (o(), u("div", J, [ r(Be, {
                    class: "cont-box"
                }, {
                    default: s(() => [ y("div", G, [ r(d, {
                        ref_key: "ComSearchRef",
                        ref: j,
                        searchList: n(xe),
                        keywordsInfo: {
                            label: "资料名称/文件夹名称/文件名",
                            key: "resName"
                        },
                        onHandleSearch: ze,
                        onHandleReset: _e,
                        class: "left"
                    }, null, 8, [ "searchList" ]), y("div", H, [ r(w, {
                        type: "primary",
                        size: "large",
                        onClick: t[0] || (t[0] = a => E("uploadFile"))
                    }, {
                        default: s(() => [ r(v, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), m(" 新建 ") ]),
                        _: 1
                    }), r(w, {
                        type: "primary",
                        size: "large",
                        plain: "",
                        onClick: t[1] || (t[1] = a => E("addFolder"))
                    }, {
                        default: s(() => [ r(v, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), m(" 新建文件夹 ") ]),
                        _: 1
                    }) ]) ]), y("div", $, [ (o(!0), u(ge, null, oa(n(x), (a, c) => (o(), 
                    u("div", {
                        key: a.id,
                        style: {
                            "max-width": "120px",
                            overflow: "hidden",
                            "white-space": "nowrap",
                            "text-overflow": "ellipsis"
                        }
                    }, [ c < n(x).length - 1 ? (o(), u("span", {
                        key: 0,
                        class: "path-item",
                        onClick: z => {
                            return (he = a).resType = 0, void B(he);
                            var he;
                        }
                    }, I(a.resName), 9, K)) : (o(), u("span", Q, I(a.resName), 1)), c < n(x).length - 1 ? (o(), 
                    h(v, {
                        key: 2,
                        icon: "ep:arrow-right-bold",
                        size: 10,
                        style: {
                            margin: "0 10px"
                        }
                    })) : P("", !0) ]))), 128)) ]), r(Oe, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 102
                    }, {
                        default: s(() => [ r(Fe, {
                            ref_key: "ResourceTableRef",
                            ref: F,
                            data: n(g),
                            height: "calc(100% )",
                            "header-row-class-name": "system-header",
                            onSelectionChange: Pe,
                            "row-key": "id"
                        }, {
                            default: s(() => [ r(N, {
                                type: "selection",
                                width: "50"
                            }), r(N, {
                                label: "资料名称/文件夹名称",
                                key: "grdName",
                                prop: "grdName",
                                "min-width": "180px"
                            }, {
                                default: s(a => [ y("div", q, [ a.row.resType == 0 ? (o(), 
                                h(v, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : (o(), u("img", V)), y("span", {
                                    class: "file-name__span",
                                    title: a.row.grdName,
                                    onClick: c => B(a.row)
                                }, I(a.row.grdName), 9, W) ]) ]),
                                _: 1
                            }), r(N, {
                                label: "所属年届",
                                prop: "annual",
                                "show-overflow-tooltip": !0
                            }, {
                                default: s(a => [ a.row.annual ? (o(), h(je, {
                                    key: 0,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: s(() => {
                                        var c;
                                        return [ m(I((c = n(pe).find(z => z.value == a.row.annual)) == null ? void 0 : c.label), 1) ];
                                    }),
                                    _: 2
                                }, 1024)) : (o(), u(ge, {
                                    key: 1
                                }, [ m(" -- ") ], 64)) ]),
                                _: 1
                            }), r(N, {
                                label: "文件名",
                                prop: "resName",
                                "min-width": "260px"
                            }, {
                                default: s(a => [ a.row.resType != 0 ? (o(), u("div", X, [ a.row.resType == 0 ? (o(), 
                                h(v, {
                                    key: 0,
                                    icon: "svg-icon:folder",
                                    size: 18,
                                    style: {
                                        "margin-right": "10px",
                                        "flex-shrink": "0"
                                    }
                                })) : (o(), u("img", {
                                    key: 1,
                                    src: n(Ra)(a.row.resName + a.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, Y)), r(me, {
                                    effect: "dark",
                                    content: a.row.resName,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: s(() => [ y("span", {
                                        class: "file-name__span",
                                        onClick: c => B(a.row)
                                    }, I(a.row.resName), 9, Z) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ])) : (o(), u("div", ee, "--")) ]),
                                _: 1
                            }), r(N, {
                                label: "所在文件夹",
                                key: "folderPath",
                                prop: "folderPath"
                            }, {
                                default: s(a => [ y("div", ae, [ r(me, {
                                    effect: "dark",
                                    content: a.row.folderPath,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: s(() => [ y("span", te, I(a.row.folderPath && a.row.folderPath.indexOf(",") >= 0 ? a.row.folderPath.split(",").slice(-1)[0] : a.row.folderPath), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ]) ]),
                                _: 1
                            }), r(N, {
                                label: "上次修改时间",
                                prop: "updateTime",
                                formatter: n(Ia),
                                width: "180"
                            }, null, 8, [ "formatter" ]), r(N, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: s(a => [ a.row.resType == 0 ? (o(), u("div", re, [ a.row.release != 1 ? (o(), 
                                h(w, {
                                    key: 0,
                                    size: "small",
                                    link: "",
                                    type: "primary",
                                    onClick: c => R("handleEdit", a.row)
                                }, {
                                    default: s(() => [ m(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])) : P("", !0), a.row.release != 1 ? (o(), 
                                h(w, {
                                    key: 1,
                                    type: "danger",
                                    size: "small",
                                    link: "",
                                    onClick: c => ue(a.row)
                                }, {
                                    default: s(() => [ m(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])) : P("", !0), r(w, {
                                    size: "small",
                                    link: "",
                                    type: "primary",
                                    onClick: c => R("handleMove", a.row)
                                }, {
                                    default: s(() => [ m(" 移动 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ])) : (o(), u("div", le, [ r(w, {
                                    type: "primary",
                                    size: "small",
                                    onClick: c => {
                                        return z = a.row, void be(z.eid, z.resName);
                                        var z;
                                    },
                                    link: ""
                                }, {
                                    default: s(() => [ m(" 下载 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), r(w, {
                                    type: "primary",
                                    size: "small",
                                    link: "",
                                    onClick: c => R("handleMove", a.row)
                                }, {
                                    default: s(() => [ m(" 移动 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), a.row.release != 1 ? (o(), 
                                h(ye, {
                                    key: 0,
                                    trigger: "click",
                                    onCommand: c => R(c, a.row),
                                    style: {
                                        "background-color": "transparent"
                                    }
                                }, {
                                    dropdown: s(() => [ r(fe, null, {
                                        default: s(() => [ a.row.release != 1 ? (o(), 
                                        h(U, {
                                            key: 0,
                                            command: "handleEdit"
                                        }, {
                                            default: s(() => [ m(" 编辑 ") ]),
                                            _: 1
                                        })) : P("", !0), a.row.release != 1 ? (o(), 
                                        h(U, {
                                            key: 1,
                                            onClick: c => ue(a.row)
                                        }, {
                                            default: s(() => [ m(" 删除 ") ]),
                                            _: 2
                                        }, 1032, [ "onClick" ])) : P("", !0) ]),
                                        _: 2
                                    }, 1024) ]),
                                    default: s(() => [ y("div", se, [ r(v, {
                                        icon: "svg-icon:more",
                                        size: 10
                                    }) ]) ]),
                                    _: 2
                                }, 1032, [ "onCommand" ])) : P("", !0) ])) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), y("div", oe, [ r(Le, {
                        total: n(C),
                        page: n(l).pageNo,
                        "onUpdate:page": t[2] || (t[2] = a => n(l).pageNo = a),
                        limit: n(l).pageSize,
                        "onUpdate:limit": t[3] || (t[3] = a => n(l).pageSize = a),
                        onPagination: Ie
                    }, null, 8, [ "total", "page", "limit" ]) ]), r(Ae, {
                        ref_key: "SelectionButtonGroupRef",
                        ref: O,
                        "select-list": n(k),
                        "page-list": n(g),
                        btnList: [ "delete", "share", "move" ],
                        checkBox: n(Ce),
                        subject: "文件/文件夹",
                        onDelete: Se,
                        onMove: Ue,
                        onShare: Re,
                        onDownload: De,
                        onSelectAll: Te
                    }, null, 8, [ "select-list", "page-list", "checkBox" ]) ]),
                    _: 1
                }) ])) : (o(), u("div", ne, [ r(Ee, {
                    type: "resource",
                    msg: "暂无资源"
                }), r(ye, {
                    teleported: !1,
                    class: "empty-dropdown",
                    onCommand: E
                }, {
                    dropdown: s(() => [ r(fe, null, {
                        default: s(() => [ r(U, {
                            command: "uploadFile"
                        }, {
                            default: s(() => [ m("新建毕设资源") ]),
                            _: 1
                        }), r(U, {
                            command: "addFolder"
                        }, {
                            default: s(() => [ m("新建文件夹") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    default: s(() => [ r(w, {
                        type: "primary",
                        size: "large"
                    }, {
                        default: s(() => [ m(" 新建 "), r(v, {
                            class: "el-icon--right",
                            icon: "ep:arrow-down",
                            style: {
                                "margin-left": "5px"
                            }
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ])), r(ha, {
                    ref_key: "UploadResourceRef",
                    ref: D,
                    onRefresh: b
                }, null, 512), r(ka, {
                    ref_key: "AddFolderRef",
                    ref: T,
                    onRefresh: b
                }, null, 512), r(wa, {
                    ref_key: "AddLinkRef",
                    ref: ie
                }, null, 512), r(Na, {
                    ref_key: "MoveDialogRef",
                    ref: L,
                    onRefresh: b
                }, null, 512), r(Ca, {
                    ref_key: "ResetNameRef",
                    ref: de
                }, null, 512), r(Me, {
                    ref_key: "ResourcePreviewRef",
                    ref: ce
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-b509b8e8" ] ]);
});

export {
    Ga as __tla,
    Ne as default
};