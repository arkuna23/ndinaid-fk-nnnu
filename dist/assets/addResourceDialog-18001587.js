import {
    _ as xe,
    __tla as Ne
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    r as p,
    h as Ie,
    e as E,
    o as i,
    c as T,
    k as t,
    l as r,
    C as m,
    a as v,
    t as u,
    v as f,
    B as h,
    D as k,
    bB as oe,
    M as Te,
    s as Se,
    ad as Re,
    K as Ce,
    L as Ue,
    J as Le,
    ae as Ve,
    aU as Pe,
    R as ze,
    S as Be,
    __tla as Ee
} from "./index-6c08ea4c.js";

import {
    _ as De,
    __tla as Ae
} from "./index-c4ca0ced.js";

import {
    _ as He,
    __tla as Oe
} from "./index-8b41572c.js";

import {
    _ as Je,
    __tla as Me
} from "./index-1024512a.js";

import {
    _ as $e
} from "./step1Banner-550d8194.js";

import {
    _ as je
} from "./file_HTML-65451e1b.js";

import {
    g as Fe
} from "./file.data-794ea5d0.js";

import {
    d as Ke,
    __tla as Xe
} from "./formatTime-de6f1520.js";

import {
    d as qe,
    p as Ge,
    __tla as Qe
} from "./library-c2ecc5ca.js";

import {
    n as We,
    __tla as Ye
} from "./index-9567cbf6.js";

import {
    r as Ze,
    __tla as ea
} from "./file-e038b35d.js";

import aa, {
    __tla as la
} from "./resourceSetting-939e80bf.js";

import {
    _ as ta
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ra
} from "./index.es-14d10e28.js";

import {
    __tla as sa
} from "./project-file-a2b4fd07.js";

import {
    __tla as oa
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as pa
} from "./DeptTag-1be092ce.js";

import {
    __tla as ia
} from "./index-ef4d146e.js";

import "./file_题-23882218.js";

import "./step2Banner-4d214de6.js";

let pe, na = Promise.all([ (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return Me;
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
        return ea;
    } catch {}
})(), (() => {
    try {
        return la;
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
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})() ]).then(async () => {
    let S, D, A, H, O, J, M, $, j, F, K, X, q;
    S = b => (ze("data-v-0adf7184"), b = b(), Be(), b), D = S(() => u("div", {
        style: {
            "text-align": "center",
            margin: "10px 0"
        }
    }, [ u("img", {
        src: $e,
        alt: ""
    }) ], -1)), A = {
        class: "chooseResourceStatistics",
        style: {
            color: "#333",
            margin: "10px 0"
        }
    }, H = {
        class: "file-name"
    }, O = {
        key: 0,
        src: je,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, J = [ "src" ], M = {
        class: "file-name__span"
    }, $ = {
        key: 2,
        class: "file-tag",
        style: {
            "margin-left": "7px"
        }
    }, j = [ S(() => u("span", null, "NEU", -1)) ], F = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, K = {
        style: {
            "max-width": "225px",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            display: "inline-block"
        }
    }, X = {
        class: "bottom-box"
    }, q = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, pe = ta({
        __name: "addResourceDialog",
        emits: [ "tableRefresh" ],
        setup(b, {
            expose: ie,
            emit: ne
        }) {
            const G = p(), R = Ie(), Q = p(), W = p(), w = p(!1), s = p("1"), x = p(0), ue = ne, g = p([ {
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
            } ]), Y = E(() => [ {
                label: "请输入关联知识技能点名称/编号",
                key: "kt",
                type: "input"
            }, {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: g.value
            }, {
                label: "所属文件夹",
                key: "parentId",
                type: "tree",
                filterable: !0,
                options: N.value
            } ]), de = E(() => [ {
                label: "请输入关联知识技能点名称/编号",
                key: "kt",
                type: "input"
            }, {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: g.value
            }, {
                label: "课程资源包",
                key: "pkgId",
                type: "list",
                options: V.value
            }, {
                label: "来源",
                key: "pkgRelease",
                type: "list",
                default: 0,
                clearable: 0,
                options: [ {
                    label: "个人资源包",
                    value: 0
                }, {
                    label: "校本资源包",
                    value: 1
                } ]
            } ]), o = p({
                pageNo: 1,
                pageSize: 10,
                resName: "",
                resType: "",
                parentId: "",
                ktName: "",
                pkgId: "",
                pkgRelease: 0
            }), C = p(0), U = p([]), c = p([]), me = E(() => {
                var e = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                c.value.forEach(n => {
                    for (let _ = 0; _ < g.value.length; _++) if (g.value[_].value == n.resType) {
                        e[_ + 1]++;
                        break;
                    }
                });
                var a = "";
                return g.value.forEach(n => {
                    e[n.value] && (a += `${n.label}${e[n.value]}\u4E2A\uFF0C`);
                }), a ? "，其中" + a.slice(0, -1) : "";
            }), Z = p(0), ce = () => {
                x.value++, c.value = [], o.value = {
                    pageNo: 1,
                    pageSize: 10,
                    resName: "",
                    resType: "",
                    parentId: "",
                    ktName: "",
                    pkgId: "",
                    pkgRelease: 0
                }, ee(), ae(), I();
            }, N = p([]), L = e => {
                if (Array.isArray(e)) e.forEach(a => L(a)); else if (typeof e == "object" && e !== null) {
                    e.hasOwnProperty("resName") && (e.name = e.resName, delete e.resName);
                    for (let a in e) e.hasOwnProperty(a) && L(e[a]);
                }
            }, ee = () => {
                qe({
                    release: s.value == 1 ? 0 : 1,
                    parentId: 0,
                    resType: 0,
                    creator: s.value == 1 ? R.getUser.id : null,
                    tenantId: s.value == 2 ? oe() : null
                }).then(e => {
                    e ? (N.value = JSON.parse(e), L(N.value)) : N.value = [];
                });
            }, V = p([]), ae = () => {
                Ge({
                    userId: R.getUser.id
                }).then(e => {
                    V.value = e, V.value.forEach(a => {
                        a.label = a.pkgName, a.value = a.id;
                    });
                });
            }, P = e => {
                o.value.pageNo = 1, o.value.resName = e.resName || "", o.value.resType = e.resType || "", 
                o.value.parentId = e.parentId || "", o.value.ktName = e.ktName || "", 
                o.value.pkgId = e.pkgId || "", o.value.pkgRelease = e.pkgRelease || 0, 
                I();
            }, I = e => {
                c.value = [], We({
                    ...o.value,
                    creator: s.value == 1 ? R.getUser.id : null,
                    tenantId: s.value == 2 || s.value == 3 ? oe() : null,
                    scope: s.value
                }).then(a => {
                    var n;
                    (n = W.value) == null || n.clearSelection(), U.value = a.records, 
                    C.value = a.total;
                });
            };
            function _e(e) {
                c.value = [ ...e ];
            }
            const le = () => {
                s.value = "1", o.value = {
                    pageNo: 1,
                    pageSize: 10,
                    resName: "",
                    resType: "",
                    parentId: "",
                    ktName: "",
                    pkgId: "",
                    pkgRelease: 0
                }, C.value = 0, U.value = [], c.value = [];
            }, te = () => {
                le(), w.value = !1;
            }, ve = () => {
                G.value.open(c.value);
            }, ye = e => {
                e == 2 && ue("tableRefresh"), te();
            };
            return ie({
                openStep1: e => {
                    le(), Z.value = e, w.value = !0, ee(), ae(), I();
                }
            }), (e, a) => {
                const n = Je, _ = Te, fe = Se, d = Re, re = Ce, se = Ue, z = Le, he = Ve, ge = He, ke = De, be = Pe, we = xe;
                return i(), T("div", null, [ t(be, {
                    modelValue: w.value,
                    "onUpdate:modelValue": a[3] || (a[3] = l => w.value = l),
                    title: "添加资料",
                    width: "1200px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: r(() => [ D, t(fe, {
                        modelValue: s.value,
                        "onUpdate:modelValue": a[0] || (a[0] = l => s.value = l),
                        class: "step1-tabs",
                        onTabChange: ce
                    }, {
                        default: r(() => [ t(_, {
                            label: "个人资料库",
                            name: "1"
                        }, {
                            default: r(() => [ (i(), m(n, {
                                borderBox: !0,
                                searchList: v(Y),
                                key: x.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: P,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }), t(_, {
                            label: "校本资料库",
                            name: "2"
                        }, {
                            default: r(() => [ (i(), m(n, {
                                borderBox: !0,
                                searchList: v(Y),
                                key: x.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: P,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }), t(_, {
                            label: "课程资源包",
                            name: "3"
                        }, {
                            default: r(() => [ (i(), m(n, {
                                borderBox: !0,
                                searchList: v(de),
                                key: x.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: P,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), u("div", A, [ f("已选择" + h(c.value.length) + "个资料", 1), u("span", null, h(v(me)), 1) ]), t(ge, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 102
                    }, {
                        default: r(() => [ (i(), m(he, {
                            ref_key: "ResourceTableRef",
                            ref: W,
                            key: s.value,
                            data: U.value,
                            height: "300px",
                            "header-row-class-name": "system-header",
                            onSelectionChange: _e,
                            "row-key": "id"
                        }, {
                            default: r(() => [ t(d, {
                                type: "selection",
                                width: "50"
                            }), t(d, {
                                label: s.value == 3 ? "资源名称" : "文件名",
                                prop: "resName",
                                fixed: "",
                                width: "350px"
                            }, {
                                default: r(l => [ u("div", H, [ l.row.resType == 6 ? (i(), 
                                T("img", O)) : (i(), T("img", {
                                    key: 1,
                                    src: v(Fe)(l.row.resName + l.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, J)), t(re, {
                                    effect: "dark",
                                    content: l.row.resName,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: r(() => [ u("span", M, h(l.row.resName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]), l.row.resIsNeu ? (i(), 
                                T("div", $, j)) : k("", !0) ]) ]),
                                _: 1
                            }, 8, [ "label" ]), t(d, {
                                label: "类型",
                                prop: "resType",
                                "min-width": "80"
                            }, {
                                default: r(l => [ l.row.resType == 6 ? (i(), m(se, {
                                    key: 0,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ f("链接") ]),
                                    _: 1
                                })) : (i(), m(se, {
                                    key: 1,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ f(h(v(Ze)(l.row.resType)), 1) ]),
                                    _: 2
                                }, 1024)) ]),
                                _: 1
                            }), s.value != 3 ? (i(), m(d, {
                                key: 0,
                                label: "所在文件夹",
                                prop: "fileFolder",
                                "min-width": "120"
                            }, {
                                default: r(l => {
                                    var B;
                                    return [ u("div", F, [ t(re, {
                                        class: "item",
                                        effect: "dark",
                                        content: (B = l.row.folderPath) == null ? void 0 : B.replace(/,/g, "/"),
                                        placement: "top"
                                    }, {
                                        default: r(() => {
                                            var y;
                                            return [ u("span", K, h((y = l.row.folderPath) == null ? void 0 : y.split(",").slice(-1)[0]), 1) ];
                                        }),
                                        _: 2
                                    }, 1032, [ "content" ]) ]) ];
                                }),
                                _: 1
                            })) : k("", !0), s.value == 3 ? (i(), m(d, {
                                key: 1,
                                label: "所属课程资源包",
                                prop: "pkgNameAndCode",
                                "min-width": "150"
                            })) : k("", !0), t(d, {
                                label: "关联知识技能点",
                                prop: "ktStr",
                                "min-width": "200"
                            }), s.value == 3 ? (i(), m(d, {
                                key: 2,
                                label: "资源包来源",
                                prop: "pkgSource",
                                "min-width": "120"
                            })) : k("", !0), s.value == "2" ? (i(), m(d, {
                                key: 3,
                                label: "创建人",
                                prop: "creatorName",
                                "min-width": "120"
                            })) : k("", !0), t(d, {
                                label: "上次修改时间",
                                prop: "updateTime",
                                formatter: v(Ke),
                                "min-width": "180"
                            }, null, 8, [ "formatter" ]), t(d, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: r(l => [ t(z, {
                                    type: "primary",
                                    text: "",
                                    style: {
                                        "padding-left": "0"
                                    },
                                    onClick: B => {
                                        var y;
                                        (y = l.row).resType == 6 ? window.open(y.resLink, "_blank") : Q.value.operation(y);
                                    }
                                }, {
                                    default: r(() => [ f(h(l.row.resType == 5 ? "下载" : "预览"), 1) ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])) ]),
                        _: 1
                    }), u("div", X, [ t(ke, {
                        total: C.value,
                        page: o.value.pageNo,
                        "onUpdate:page": a[1] || (a[1] = l => o.value.pageNo = l),
                        limit: o.value.pageSize,
                        "onUpdate:limit": a[2] || (a[2] = l => o.value.pageSize = l),
                        onPagination: I
                    }, null, 8, [ "total", "page", "limit" ]) ]), u("div", q, [ t(z, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: te
                    }, {
                        default: r(() => [ f("取消") ]),
                        _: 1
                    }), t(z, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        disabled: !c.value.length,
                        onClick: ve
                    }, {
                        default: r(() => [ f("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), t(aa, {
                    ref_key: "resourceSettingRef",
                    ref: G,
                    onDone: ye,
                    isfromTeaching: Z.value,
                    scene: "add"
                }, null, 8, [ "isfromTeaching" ]), t(we, {
                    ref_key: "ResourcePreviewRef",
                    ref: Q
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-0adf7184" ] ]);
});

export {
    na as __tla,
    pe as default
};