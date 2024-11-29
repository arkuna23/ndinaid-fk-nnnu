import {
    _ as fe,
    __tla as ve
} from "./index.vue_vue_type_script_setup_true_name_ResourcePreview_lang-62b68757.js";

import {
    r as o,
    h as he,
    e as E,
    o as i,
    c as P,
    k as t,
    l as r,
    C as _,
    a as y,
    t as u,
    v,
    B as h,
    D as ge,
    bB as X,
    M as ke,
    s as be,
    ad as we,
    K as xe,
    L as Ne,
    J as Ie,
    ae as Te,
    aU as Re,
    R as Se,
    S as Ce,
    __tla as Le
} from "./index-6c08ea4c.js";

import {
    _ as Ee,
    __tla as Pe
} from "./index-c4ca0ced.js";

import {
    _ as Ue,
    __tla as Ve
} from "./index-8b41572c.js";

import {
    _ as ze,
    __tla as Be
} from "./index-1024512a.js";

import {
    _ as De
} from "./step1Banner-550d8194.js";

import {
    _ as He
} from "./file_HTML-65451e1b.js";

import {
    g as Oe
} from "./file.data-794ea5d0.js";

import {
    d as je,
    __tla as Ae
} from "./formatTime-de6f1520.js";

import {
    d as Je,
    __tla as Me
} from "./library-c2ecc5ca.js";

import {
    n as $e,
    __tla as Fe
} from "./index-9567cbf6.js";

import {
    r as Ke,
    __tla as We
} from "./file-e038b35d.js";

import Ye, {
    __tla as Ze
} from "./resourceSetting-8d4d06ac.js";

import {
    _ as qe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ge
} from "./index.es-14d10e28.js";

import {
    __tla as Qe
} from "./project-file-a2b4fd07.js";

import {
    __tla as Xe
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as ea
} from "./DeptTag-1be092ce.js";

import {
    __tla as aa
} from "./index-ef4d146e.js";

import "./file_题-23882218.js";

import "./step2Banner-4d214de6.js";

let ee, la = Promise.all([ (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return Ge;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})() ]).then(async () => {
    let U, V, z, B, D, H, O, j, A, J;
    U = (g => (Se("data-v-0fd2a9bc"), g = g(), Ce(), g))(() => u("div", {
        style: {
            "text-align": "center",
            margin: "10px 0"
        }
    }, [ u("img", {
        src: De,
        alt: ""
    }) ], -1)), V = {
        class: "chooseResourceStatistics",
        style: {
            color: "#333",
            margin: "10px 0"
        }
    }, z = {
        class: "file-name"
    }, B = {
        key: 0,
        src: He,
        alt: "",
        style: {
            width: "18px",
            "flex-shrink": "0",
            "margin-right": "10px"
        }
    }, D = [ "src" ], H = {
        class: "file-name__span"
    }, O = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, j = {
        style: {
            "max-width": "225px",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            display: "inline-block"
        }
    }, A = {
        class: "bottom-box"
    }, J = {
        style: {
            "text-align": "center",
            margin: "20px 0"
        }
    }, ee = qe({
        __name: "addResourceDialog",
        emits: [ "tableRefresh" ],
        setup(g, {
            expose: ae,
            emit: le
        }) {
            const M = o(), $ = he(), F = o(), K = o(), k = o(!1), n = o("1"), b = o(0), te = le, d = o([ {
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
            } ]), W = E(() => [ {
                label: "请输入关联知识技能点名称/编号",
                key: "kt",
                type: "input"
            }, {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: d.value
            }, {
                label: "所属文件夹",
                key: "parentId",
                type: "tree",
                filterable: !0,
                options: w.value
            } ]), re = E(() => [ {
                label: "请输入关联知识技能点名称/编号",
                key: "kt",
                type: "input"
            }, {
                label: "资料类型",
                key: "resType",
                type: "list",
                options: d.value
            }, {
                label: "课程资源包",
                key: "pkgId",
                type: "list",
                options: []
            }, {
                label: "来源",
                key: "pkgRelease",
                type: "list",
                options: [ {
                    label: "个人资源包",
                    value: 0
                }, {
                    label: "校本资源包",
                    value: 1
                } ]
            } ]), s = o({
                pageNo: 1,
                pageSize: 10,
                resName: "",
                resType: "",
                parentId: "",
                ktName: "",
                pkgId: "",
                pkgRelease: ""
            }), N = o(0), I = o([]), m = o([]), se = E(() => {
                d.value.forEach(a => {
                    a.num = 0;
                }), m.value.forEach(a => {
                    for (let p = 0; p < d.value.length; p++) if (d.value[p].value == a.resType) {
                        d.value[p].num++;
                        break;
                    }
                });
                var e = "";
                return d.value.forEach(a => {
                    a.num && (e += `${a.label}${a.num}\u4E2A\uFF0C`);
                }), e ? "，其中" + e.slice(0, -1) : "";
            }), Y = o(0), oe = () => {
                b.value++, m.value = [], s.value = {
                    pageNo: 1,
                    pageSize: 10,
                    resName: "",
                    resType: "",
                    parentId: "",
                    ktName: "",
                    pkgId: "",
                    pkgRelease: ""
                }, Z(), x();
            }, w = o([]), T = e => {
                if (Array.isArray(e)) e.forEach(a => T(a)); else if (typeof e == "object" && e !== null) {
                    e.hasOwnProperty("resName") && (e.name = e.resName, delete e.resName);
                    for (let a in e) e.hasOwnProperty(a) && T(e[a]);
                }
            }, Z = () => {
                Je({
                    release: n.value == 1 ? 0 : 1,
                    parentId: 0,
                    resType: 0,
                    creator: n.value == 1 ? $.getUser.id : null,
                    tenantId: n.value == 2 ? X() : null
                }).then(e => {
                    e ? (w.value = JSON.parse(e), T(w.value)) : w.value = [];
                });
            }, R = e => {
                s.value.pageNo = 1, s.value.resName = e.resName || "", s.value.resType = e.resType || "", 
                s.value.parentId = e.parentId || "", s.value.ktName = e.ktName || "", 
                s.value.pkgId = e.pkgId || "", s.value.pkgRelease = e.pkgRelease || "", 
                x();
            }, x = e => {
                m.value = [], $e({
                    ...s.value,
                    creator: n.value == 1 ? $.getUser.id : null,
                    tenantId: n.value == 2 ? X() : null,
                    scope: n.value
                }).then(a => {
                    var p;
                    (p = K.value) == null || p.clearSelection(), I.value = a.records, 
                    N.value = a.total;
                });
            };
            function ne(e) {
                m.value = [ ...e ];
            }
            const q = () => {
                n.value = "1", s.value = {
                    pageNo: 1,
                    pageSize: 10,
                    resName: "",
                    resType: "",
                    parentId: "",
                    ktName: "",
                    pkgId: "",
                    pkgRelease: ""
                }, N.value = 0, I.value = [], m.value = [], k.value = !1;
            }, pe = () => {
                M.value.open(m.value);
            }, ie = () => {
                te("tableRefresh"), q();
            };
            return ae({
                openStep1: e => {
                    Y.value = e, k.value = !0, Z(), x();
                }
            }), (e, a) => {
                const p = ze, S = ke, ue = be, c = we, G = xe, Q = Ne, C = Ie, me = Te, ce = Ue, de = Ee, _e = Re, ye = fe;
                return i(), P("div", null, [ t(_e, {
                    modelValue: k.value,
                    "onUpdate:modelValue": a[3] || (a[3] = l => k.value = l),
                    title: "添加资料",
                    width: "1200px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: r(() => [ U, t(ue, {
                        modelValue: n.value,
                        "onUpdate:modelValue": a[0] || (a[0] = l => n.value = l),
                        class: "step1-tabs",
                        onTabChange: oe
                    }, {
                        default: r(() => [ t(S, {
                            label: "个人资料库",
                            name: "1"
                        }, {
                            default: r(() => [ (i(), _(p, {
                                borderBox: !0,
                                searchList: y(W),
                                key: b.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: R,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }), t(S, {
                            label: "校本资料库",
                            name: "2"
                        }, {
                            default: r(() => [ (i(), _(p, {
                                borderBox: !0,
                                searchList: y(W),
                                key: b.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: R,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }), t(S, {
                            label: "课程资源包",
                            name: "3"
                        }, {
                            default: r(() => [ (i(), _(p, {
                                borderBox: !0,
                                searchList: y(re),
                                key: b.value,
                                keywordsInfo: {
                                    label: "资料名称",
                                    key: "resName"
                                },
                                onHandleSearch: R,
                                class: "left"
                            }, null, 8, [ "searchList" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), u("div", V, [ v("已选择" + h(m.value.length) + "个资料", 1), u("span", null, h(y(se)), 1) ]), t(ce, {
                        class: "center-box",
                        "no-pager": !1,
                        "outer-height": 102
                    }, {
                        default: r(() => [ (i(), _(me, {
                            ref_key: "ResourceTableRef",
                            ref: K,
                            key: n.value,
                            data: I.value,
                            height: "300px",
                            "header-row-class-name": "system-header",
                            onSelectionChange: ne,
                            "row-key": "id"
                        }, {
                            default: r(() => [ t(c, {
                                type: "selection",
                                width: "50"
                            }), t(c, {
                                label: "文件名",
                                prop: "resName",
                                fixed: "",
                                width: "350px"
                            }, {
                                default: r(l => [ u("div", z, [ l.row.resType == 6 ? (i(), 
                                P("img", B)) : (i(), P("img", {
                                    key: 1,
                                    src: y(Oe)(l.row.resName + l.row.resExt),
                                    alt: "",
                                    style: {
                                        width: "18px",
                                        "flex-shrink": "0",
                                        "margin-right": "10px"
                                    }
                                }, null, 8, D)), t(G, {
                                    effect: "dark",
                                    content: l.row.resName,
                                    placement: "top",
                                    enterable: !1
                                }, {
                                    default: r(() => [ u("span", H, h(l.row.resName), 1) ]),
                                    _: 2
                                }, 1032, [ "content" ]) ]) ]),
                                _: 1
                            }), t(c, {
                                label: "类型",
                                prop: "resType",
                                "min-width": "80"
                            }, {
                                default: r(l => [ l.row.resType == 6 ? (i(), _(Q, {
                                    key: 0,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ v("链接") ]),
                                    _: 1
                                })) : (i(), _(Q, {
                                    key: 1,
                                    type: "primary",
                                    class: "type-tag"
                                }, {
                                    default: r(() => [ v(h(y(Ke)(l.row.resType)), 1) ]),
                                    _: 2
                                }, 1024)) ]),
                                _: 1
                            }), t(c, {
                                label: "所在文件夹",
                                prop: "fileFolder",
                                "min-width": "120"
                            }, {
                                default: r(l => {
                                    var L;
                                    return [ u("div", O, [ t(G, {
                                        class: "item",
                                        effect: "dark",
                                        content: (L = l.row.folderPath) == null ? void 0 : L.replace(/,/g, "/"),
                                        placement: "top"
                                    }, {
                                        default: r(() => {
                                            var f;
                                            return [ u("span", j, h((f = l.row.folderPath) == null ? void 0 : f.split(",").slice(-1)[0]), 1) ];
                                        }),
                                        _: 2
                                    }, 1032, [ "content" ]) ]) ];
                                }),
                                _: 1
                            }), t(c, {
                                label: "关联知识技能点",
                                prop: "ktStr",
                                "min-width": "200"
                            }), n.value == "2" ? (i(), _(c, {
                                key: 0,
                                label: "创建人",
                                prop: "creatorName",
                                "min-width": "120"
                            })) : ge("", !0), t(c, {
                                label: "上次修改时间",
                                prop: "updateTime",
                                formatter: y(je),
                                "min-width": "180"
                            }, null, 8, [ "formatter" ]), t(c, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: r(l => [ t(C, {
                                    type: "primary",
                                    text: "",
                                    onClick: L => {
                                        var f;
                                        (f = l.row).resType == 6 ? window.open(f.resLink, "_blank") : F.value.operation(f);
                                    }
                                }, {
                                    default: r(() => [ v("预览") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])) ]),
                        _: 1
                    }), u("div", A, [ t(de, {
                        total: N.value,
                        page: s.value.pageNo,
                        "onUpdate:page": a[1] || (a[1] = l => s.value.pageNo = l),
                        limit: s.value.pageSize,
                        "onUpdate:limit": a[2] || (a[2] = l => s.value.pageSize = l),
                        onPagination: x
                    }, null, 8, [ "total", "page", "limit" ]) ]), u("div", J, [ t(C, {
                        style: {
                            "margin-right": "20px"
                        },
                        onClick: q
                    }, {
                        default: r(() => [ v("取消") ]),
                        _: 1
                    }), t(C, {
                        style: {
                            "margin-left": "20px"
                        },
                        type: "primary",
                        disabled: !m.value.length,
                        onClick: pe
                    }, {
                        default: r(() => [ v("下一步") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), t(Ye, {
                    ref_key: "resourceSettingRef",
                    ref: M,
                    onDone: ie,
                    isfromTeaching: Y.value,
                    scene: "add"
                }, null, 8, [ "isfromTeaching" ]), t(ye, {
                    ref_key: "ResourcePreviewRef",
                    ref: F
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-0fd2a9bc" ] ]);
});

export {
    la as __tla,
    ee as default
};