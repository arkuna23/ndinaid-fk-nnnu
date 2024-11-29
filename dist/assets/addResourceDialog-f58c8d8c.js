import {
    _ as ke,
    __tla as be
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    T as we,
    r as o,
    h as xe,
    e as P,
    o as p,
    c as E,
    k as t,
    l as r,
    C as c,
    a as f,
    t as i,
    v,
    B as h,
    D as L,
    M as Ne,
    s as Te,
    ad as Ie,
    K as Re,
    L as Se,
    J as Ue,
    ae as Ce,
    aU as Pe,
    R as Ee,
    S as Le,
    __tla as Ve
} from "./index-6c08ea4c.js";

import {
    _ as ze,
    __tla as De
} from "./index-c4ca0ced.js";

import {
    _ as Ae,
    __tla as Be
} from "./index-8b41572c.js";

import {
    _ as Oe,
    __tla as je
} from "./index-1024512a.js";

import {
    _ as qe
} from "./step1Banner-550d8194.js";

import {
    _ as He
} from "./file_HTML-65451e1b.js";

import {
    g as Je
} from "./file.data-794ea5d0.js";

import {
    d as Me,
    __tla as $e
} from "./formatTime-de6f1520.js";

import {
    n as Fe,
    __tla as Ke
} from "./index-9567cbf6.js";

import {
    r as Ge,
    __tla as Qe
} from "./file-e038b35d.js";

import {
    e as We,
    n as Xe,
    __tla as Ye
} from "./pkgManage-14933852.js";

import Ze, {
    __tla as ea
} from "./resourceSetting-0225cc93.js";

import {
    _ as aa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as la
} from "./index.es-14d10e28.js";

import {
    __tla as ta
} from "./project-file-a2b4fd07.js";

import {
    __tla as ra
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as sa
} from "./DeptTag-1be092ce.js";

import {
    __tla as oa
} from "./index-ef4d146e.js";

import "./file_题-23882218.js";

import "./step2Banner-4d214de6.js";

let le, pa = Promise.all([ (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return Ke;
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
        return ea;
    } catch {}
})(), (() => {
    try {
        return la;
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
        return sa;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})() ]).then(async () => {
    let V, z, D, A, B, O, j, q, H, J;
    V = (g => (Ee("data-v-23d44168"), g = g(), Le(), g))(() => i("div", {
        style: {
            "text-align": "center",
            margin: "10px 0"
        }
    }, [ i("img", {
        src: qe,
        alt: ""
    }) ], -1)), z = {
        class: "chooseResourceStatistics",
        style: {
            color: "#333",
            margin: "10px 0"
        }
    }, D = {
        class: "file-name"
    }, A = {
        key: 0,
        src: He,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, B = [ "src" ], O = {
        class: "file-name__span"
    }, j = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, q = {
        style: {
            "max-width": "225px",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            display: "inline-block"
        }
    }, H = {
        class: "bottom-box"
    }, J = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, le = aa({
        __name: "addResourceDialog",
        emits: [ "tableRefresh" ],
        setup(g, {
            expose: te,
            emit: re
        }) {
            const se = we(), M = o(), x = xe(), $ = o(), F = o(), k = o(!1), u = o("4"), N = o(0), oe = re, _ = o([ {
                label: "视频",
                value: 1,
                num: 0
            }, {
                label: "音频",
                value: 2,
                num: 0
            }, {
                label: "文档",
                value: 3,
                num: 0
            }, {
                label: "图片",
                value: 4,
                num: 0
            }, {
                label: "压缩包",
                value: 5,
                num: 0
            }, {
                label: "链接",
                value: 6,
                num: 0
            }, {
                label: "MD",
                value: 7,
                num: 0
            } ]), pe = P(() => [ {
                label: "请输入关联知识技能点名称/编号",
                key: "kt",
                type: "input"
            }, {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: _.value
            }, {
                label: "所属文件夹",
                key: "parentId",
                type: "tree",
                filterable: !0,
                options: b.value
            } ]), ne = P(() => [ {
                label: "请输入关联知识技能点名称/编号",
                key: "kt",
                type: "input"
            }, {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: _.value
            }, {
                label: "课程资源包",
                key: "pkgId",
                type: "list",
                options: S.value
            } ]), s = o({
                pageNo: 1,
                pageSize: 10,
                resName: "",
                resType: "",
                parentId: "",
                ktName: "",
                pkgId: "",
                pkgRelease: ""
            }), T = o(0), I = o([]), d = o([]), ie = P(() => {
                _.value.forEach(a => {
                    a.num = 0;
                }), d.value.forEach(a => {
                    for (let n = 0; n < _.value.length; n++) if (_.value[n].value == a.resType) {
                        _.value[n].num++;
                        break;
                    }
                });
                var e = "";
                return _.value.forEach(a => {
                    a.num && (e += `${a.label}${a.num}\u4E2A\uFF0C`);
                }), e ? "，其中" + e.slice(0, -1) : "";
            }), K = o(0), ue = () => {
                N.value++, d.value = [], s.value = {
                    pageNo: 1,
                    pageSize: 10,
                    resName: "",
                    resType: "",
                    parentId: "",
                    ktName: "",
                    pkgId: "",
                    pkgRelease: ""
                }, G(), Q(), w();
            }, b = o([]), R = e => {
                if (Array.isArray(e)) e.forEach(a => R(a)); else if (typeof e == "object" && e !== null) {
                    e.hasOwnProperty("resName") && (e.name = e.resName, delete e.resName);
                    for (let a in e) e.hasOwnProperty(a) && R(e[a]);
                }
            }, G = () => {
                We({
                    parentId: 0,
                    resType: 0,
                    creator: x.getUser.id
                }).then(e => {
                    e ? (b.value = JSON.parse(e), R(b.value)) : b.value = [];
                });
            }, S = o([]), Q = () => {
                Xe({
                    creator: x.getUser.id,
                    currPkgId: se.params.id
                }).then(e => {
                    S.value = e, S.value.forEach(a => {
                        a.label = a.pkgName, a.value = a.id;
                    });
                });
            }, W = e => {
                s.value.pageNo = 1, s.value.resName = e.resName || "", s.value.resType = e.resType || "", 
                s.value.parentId = e.parentId || "", s.value.ktName = e.ktName || "", 
                s.value.pkgId = e.pkgId || "", s.value.pkgRelease = e.pkgRelease || "", 
                w();
            }, w = e => {
                d.value = [], Fe({
                    ...s.value,
                    creator: x.getUser.id,
                    scope: u.value
                }).then(a => {
                    var n;
                    (n = F.value) == null || n.clearSelection(), I.value = a.records, 
                    T.value = a.total;
                });
            };
            function me(e) {
                d.value = [ ...e ];
            }
            const X = () => {
                u.value = "4", s.value = {
                    pageNo: 1,
                    pageSize: 10,
                    resName: "",
                    resType: "",
                    parentId: "",
                    ktName: "",
                    pkgId: "",
                    pkgRelease: ""
                }, T.value = 0, I.value = [], d.value = [];
            }, Y = () => {
                X(), k.value = !1;
            }, de = () => {
                M.value.open(d.value);
            }, ce = e => {
                e == 2 && oe("tableRefresh"), Y();
            };
            return te({
                openStep1: e => {
                    X(), K.value = e, k.value = !0, G(), Q(), w();
                }
            }), (e, a) => {
                const n = Oe, Z = Ne, _e = Te, m = Ie, ee = Re, ae = Se, U = Ue, ye = Ce, fe = Ae, ve = ze, he = Pe, ge = ke;
                return p(), E("div", null, [ t(he, {
                    modelValue: k.value,
                    "onUpdate:modelValue": a[3] || (a[3] = l => k.value = l),
                    title: "添加资料",
                    width: "1200px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: r(() => [ V, t(_e, {
                        modelValue: u.value,
                        "onUpdate:modelValue": a[0] || (a[0] = l => u.value = l),
                        class: "step1-tabs",
                        onTabChange: ue
                    }, {
                        default: r(() => [ t(Z, {
                            label: "东软资料库",
                            name: "4"
                        }, {
                            default: r(() => [ (p(), c(n, {
                                borderBox: !0,
                                searchList: f(pe),
                                key: N.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: W,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }), t(Z, {
                            label: "课程资源包",
                            name: "5"
                        }, {
                            default: r(() => [ (p(), c(n, {
                                borderBox: !0,
                                searchList: f(ne),
                                key: N.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: W,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), i("div", z, [ v("已选择" + h(d.value.length) + "个资料", 1), i("span", null, h(f(ie)), 1) ]), t(fe, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 102
                    }, {
                        default: r(() => [ (p(), c(ye, {
                            ref_key: "ResourceTableRef",
                            ref: F,
                            key: u.value,
                            data: I.value,
                            height: "300px",
                            "header-row-class-name": "system-header",
                            onSelectionChange: me,
                            "row-key": "id"
                        }, {
                            default: r(() => [ t(m, {
                                type: "selection",
                                width: "50"
                            }), t(m, {
                                label: u.value == 5 ? "资源名称" : "文件名",
                                prop: "resName",
                                fixed: "",
                                width: "350px"
                            }, {
                                default: r(l => [ i("div", D, [ l.row.resType == 6 ? (p(), 
                                E("img", A)) : (p(), E("img", {
                                    key: 1,
                                    src: f(Je)(l.row.resName + l.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, B)), t(ee, {
                                    effect: "dark",
                                    content: l.row.resName,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: r(() => [ i("span", O, h(l.row.resName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ]) ]),
                                _: 1
                            }, 8, [ "label" ]), t(m, {
                                label: "类型",
                                prop: "resType",
                                "min-width": "80"
                            }, {
                                default: r(l => [ l.row.resType == 6 ? (p(), c(ae, {
                                    key: 0,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ v("链接") ]),
                                    _: 1
                                })) : (p(), c(ae, {
                                    key: 1,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ v(h(f(Ge)(l.row.resType)), 1) ]),
                                    _: 2
                                }, 1024)) ]),
                                _: 1
                            }), u.value == 4 ? (p(), c(m, {
                                key: 0,
                                label: "所在文件夹",
                                prop: "fileFolder",
                                "min-width": "120"
                            }, {
                                default: r(l => {
                                    var C;
                                    return [ i("div", j, [ t(ee, {
                                        class: "item",
                                        effect: "dark",
                                        content: (C = l.row.folderPath) == null ? void 0 : C.replace(/,/g, "/"),
                                        placement: "top"
                                    }, {
                                        default: r(() => {
                                            var y;
                                            return [ i("span", q, h((y = l.row.folderPath) == null ? void 0 : y.split(",").slice(-1)[0]), 1) ];
                                        }),
                                        _: 2
                                    }, 1032, [ "content" ]) ]) ];
                                }),
                                _: 1
                            })) : L("", !0), u.value == 5 ? (p(), c(m, {
                                key: 1,
                                label: "所属课程资源包",
                                prop: "pkgNameAndCode",
                                "min-width": "150"
                            })) : L("", !0), t(m, {
                                label: "关联知识技能点",
                                prop: "ktStr",
                                "min-width": "200"
                            }), u.value == 5 ? (p(), c(m, {
                                key: 2,
                                label: "资源包来源",
                                prop: "pkgSource",
                                "min-width": "120"
                            })) : L("", !0), t(m, {
                                label: "上次修改时间",
                                prop: "updateTime",
                                formatter: f(Me),
                                "min-width": "180"
                            }, null, 8, [ "formatter" ]), t(m, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: r(l => [ t(U, {
                                    type: "primary",
                                    text: "",
                                    style: {
                                        "padding-left": "0"
                                    },
                                    onClick: C => {
                                        var y;
                                        (y = l.row).resType == 6 ? window.open(y.resLink, "_blank") : $.value.operation(y);
                                    }
                                }, {
                                    default: r(() => [ v(h(l.row.resType == 5 ? "下载" : "预览"), 1) ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])) ]),
                        _: 1
                    }), i("div", H, [ t(ve, {
                        total: T.value,
                        page: s.value.pageNo,
                        "onUpdate:page": a[1] || (a[1] = l => s.value.pageNo = l),
                        limit: s.value.pageSize,
                        "onUpdate:limit": a[2] || (a[2] = l => s.value.pageSize = l),
                        onPagination: w
                    }, null, 8, [ "total", "page", "limit" ]) ]), i("div", J, [ t(U, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: Y
                    }, {
                        default: r(() => [ v("取消") ]),
                        _: 1
                    }), t(U, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        disabled: !d.value.length,
                        onClick: de
                    }, {
                        default: r(() => [ v("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), t(Ze, {
                    ref_key: "resourceSettingRef",
                    ref: M,
                    onDone: ce,
                    isfromTeaching: K.value,
                    scene: "add"
                }, null, 8, [ "isfromTeaching" ]), t(ge, {
                    ref_key: "ResourcePreviewRef",
                    ref: $
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-23d44168" ] ]);
});

export {
    pa as __tla,
    le as default
};