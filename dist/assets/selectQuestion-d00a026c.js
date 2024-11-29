import {
    _ as he,
    __tla as we
} from "./index-c4ca0ced.js";

import {
    d as ve,
    r as s,
    u as ke,
    h as ge,
    p as be,
    a0 as xe,
    e as Ne,
    w as Te,
    U as Ie,
    f as Fe,
    dW as I,
    o as l,
    c as y,
    t as n,
    k as i,
    a,
    F as qe,
    y as Ce,
    B as w,
    C as p,
    D as F,
    l as h,
    x as Le,
    _ as Ue,
    ad as Ee,
    K as Se,
    ae as Oe,
    __tla as Pe
} from "./index-6c08ea4c.js";

import {
    _ as ze,
    __tla as De
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as Qe,
    __tla as Be
} from "./index-1024512a.js";

import {
    d as J,
    __tla as Re
} from "./formatTime-de6f1520.js";

import {
    d as X,
    D as T,
    __tla as Ae
} from "./dict-c5825220.js";

import {
    a as Z,
    b as He,
    c as We,
    __tla as Ye
} from "./questionBank-6fe58de9.js";

import {
    Q as je,
    __tla as Ke
} from "./questionPreview-3c0f3206.js";

import {
    _ as Me,
    __tla as Ve
} from "./viewDatabase.vue_vue_type_script_setup_true_lang-a51e8548.js";

import {
    _ as Ge
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Je
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as Xe
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ze
} from "./index-ef4d146e.js";

import {
    __tla as $e
} from "./type1-bb9ab50e.js";

import {
    __tla as et
} from "./type2-f7593207.js";

import {
    __tla as tt
} from "./type3-f0157d42.js";

import {
    __tla as at
} from "./type4-e194cfc5.js";

import {
    __tla as rt
} from "./type5-5cfc2694.js";

import {
    __tla as lt
} from "./type6-f24b6333.js";

import {
    __tla as ot
} from "./type7-6a71ebde.js";

import {
    __tla as st
} from "./video-1d0dc730.js";

import {
    __tla as it
} from "./file-e038b35d.js";

import {
    __tla as nt
} from "./type20-1bb6de92.js";

import {
    __tla as _t
} from "./type30-1635403c.js";

import {
    __tla as dt
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as ct
} from "./sqlDetail-6033fcff.js";

let $, pt = Promise.all([ (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Pe;
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
        return Re;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Je;
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
        return $e;
    } catch {}
})(), (() => {
    try {
        return et;
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
        return rt;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return st;
    } catch {}
})(), (() => {
    try {
        return it;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return dt;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})() ]).then(async () => {
    let q, C, L, U, E, S, O, P, z, D, Q, B, R;
    q = {
        class: "cont-box"
    }, C = {
        class: "top-box"
    }, L = {
        class: "file-path"
    }, U = [ "onClick" ], E = {
        key: 1,
        class: "path-item stop"
    }, S = {
        class: "center-box"
    }, O = {
        m: "4",
        style: {
            background: "#F9F9F9"
        }
    }, P = [ "onClick" ], z = [ "title" ], D = {
        key: 1
    }, Q = {
        key: 1
    }, B = {
        style: {
            "max-width": "100px",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            display: "inline-block"
        }
    }, R = {
        class: "bottom-box pt-12px"
    }, $ = Ge(ve({
        __name: "selectQuestion",
        props: {
            activeName: {
                type: String,
                default: () => "1"
            },
            questionIdList: {
                type: Array,
                default: () => []
            },
            list: {
                default: () => [],
                type: Array
            }
        },
        emits: [ "update:list" ],
        setup(ee, {
            emit: te
        }) {
            const A = s();
            ke();
            const m = s({
                id: 0,
                folderName: "根目录",
                release: 0
            }), v = s(), ae = s(), f = s([]);
            ge(), be();
            const k = s([]), re = s([ {
                label: "题型",
                key: "questionType",
                type: "list",
                options: X(T.QUESTION_TYPE)
            }, {
                label: "难易度",
                key: "difficult",
                type: "list",
                options: X(T.QUESTION_DIFFICULT)
            } ]), g = ee, {
                activeName: b
            } = xe(g), le = Ne({
                get: () => g.list,
                set: e => {
                    se("update:list", e);
                }
            });
            Te(() => g.activeName, () => {
                ne(), Y(), v.value.resetParams();
            }, {
                immediate: !1
            });
            const H = s([]), W = s(10);
            let oe = s(10);
            const _ = Ie({
                questionType: "",
                difficult: "",
                keywords: "",
                page: 1,
                size: 10
            }), se = te;
            s(!1), Fe(() => {
                x("", !0), Y();
            });
            const ie = e => {
                A.value.handleOpen(e);
            }, ne = () => {
                m.value = {
                    id: 0,
                    folderName: "根目录",
                    release: 0
                };
            };
            function _e(e) {
                le.value = [ ...e ];
            }
            const Y = () => {
                Z({
                    id: I(m.value.id),
                    release: [ "1" ].includes(b.value) ? "0" : "1"
                }).then(e => {
                    k.value = [ {
                        id: "0",
                        folderName: "根目录"
                    } ];
                });
            }, j = e => {
                e.folder ? (v.value.resetParamsFile(), m.value.id = e.id ?? "", 
                m.value.folderName = e.showName, x(m.value.id), K(m.value.id)) : f.value.indexOf(e.id) >= 0 ? f.value = f.value.filter(r => r.id === e.id) : f.value.push(e.id);
            }, K = (e = "") => {
                Z({
                    id: I(e),
                    release: [ "1" ].includes(b.value) ? "0" : "1"
                }).then(r => {
                    k.value = r;
                });
            };
            function de({
                row: e,
                column: r,
                rowIndex: d,
                columnIndex: u
            }) {
                return (r.type === "expand" ? "is-folder" : "is-question") + " pointer";
            }
            const x = async (e = "", r = !1) => {
                let d, u = {
                    parentId: I(e),
                    ..._,
                    page: _.page - 1,
                    sort: "folder,updateTime,desc"
                };
                d = [ "1" ].includes(g.activeName) ? await He(u) : await We(u), 
                H.value = d.pageList.content, W.value = d.pageList.totalElements, 
                r && (oe.value = d.pageList.totalElements), f.value = [];
            };
            function ce(e) {
                K(), _.keywords = e.keywords || "", _.difficult = e.difficult || "", 
                _.questionType = e.questionType || "", x();
            }
            const pe = () => {
                m.id = "0", v.value && v.value.resetParamsFile();
            };
            function M(e, r, d, u) {
                return d || "--";
            }
            function ue(e, r) {
                return !e.folder && g.questionIdList.indexOf(e.id) < 0;
            }
            return (e, r) => {
                const d = Qe, u = Ue, c = Ee, V = ze, me = Se, fe = Oe, ye = he;
                return l(), y("div", null, [ n("div", null, [ n("div", q, [ n("div", C, [ i(d, {
                    ref_key: "ComSearchRef",
                    ref: v,
                    borderBox: !0,
                    searchList: a(re),
                    keywordsInfo: {
                        label: (a(b), "试题题干/试题标签/文件夹名称"),
                        key: "keywords"
                    },
                    onHandleSearch: ce,
                    onHandleReset: pe,
                    class: "left"
                }, null, 8, [ "searchList", "keywordsInfo" ]) ]), n("div", L, [ (l(!0), 
                y(qe, null, Ce(a(k), (t, o) => (l(), y("div", {
                    key: t.id,
                    style: {
                        "max-width": "120px",
                        overflow: "hidden",
                        "white-space": "nowrap",
                        "text-overflow": "ellipsis"
                    }
                }, [ o < a(k).length - 1 ? (l(), y("span", {
                    key: 0,
                    class: "path-item",
                    onClick: N => {
                        return (G = t).folder = !0, void j(G);
                        var G;
                    }
                }, w(t.folderName), 9, U)) : (l(), y("span", E, w(t.folderName), 1)), o < a(k).length - 1 ? (l(), 
                p(u, {
                    key: 2,
                    icon: "ep:arrow-right-bold",
                    size: 10,
                    style: {
                        margin: "0 10px"
                    }
                })) : F("", !0) ]))), 128)) ]), n("div", S, [ i(fe, {
                    ref_key: "ResourceTableRef",
                    ref: ae,
                    data: a(H),
                    height: "500px",
                    "header-row-class-name": "system-header",
                    "cell-class-name": de,
                    "expand-row-keys": a(f),
                    onSelectionChange: _e,
                    "row-key": "id"
                }, {
                    default: h(() => [ i(c, {
                        type: "selection",
                        width: "50",
                        selectable: ue
                    }), i(c, {
                        type: "expand",
                        width: "20"
                    }, {
                        default: h(t => [ n("div", O, [ t.row.folder ? F("", !0) : (l(), 
                        p(je, {
                            key: 0,
                            form: t.row.questionBody || {},
                            onViewDatabase: ie
                        }, null, 8, [ "form" ])) ]) ]),
                        _: 1
                    }), i(c, {
                        label: "试题题干/文件夹名称",
                        key: "folderName",
                        prop: "folderName",
                        "min-width": "180px"
                    }, {
                        default: h(t => {
                            var o;
                            return [ n("div", {
                                class: "file-name",
                                onClick: N => j(t.row)
                            }, [ t.row.folder ? (l(), p(u, {
                                key: 0,
                                icon: "svg-icon:folder",
                                size: 18,
                                style: {
                                    "margin-right": "10px",
                                    "flex-shrink": "0"
                                }
                            })) : (l(), p(u, {
                                key: 1,
                                icon: "svg-icon:question",
                                size: 18,
                                style: {
                                    "margin-right": "10px",
                                    "flex-shrink": "0"
                                }
                            })), n("span", {
                                class: "file-name__span",
                                style: Le({
                                    fontWeight: (o = a(f)) != null && o.includes(t.row.id) ? "bold" : "normal"
                                }),
                                title: t.row.showName
                            }, w(t.row.showName), 13, z) ], 8, P) ];
                        }),
                        _: 1
                    }), i(c, {
                        prop: "orderNum",
                        label: "题型",
                        width: "120"
                    }, {
                        default: h(t => {
                            var o;
                            return [ t.row.folder ? (l(), y("span", D, w("--"))) : (l(), 
                            p(V, {
                                key: 0,
                                type: a(T).QUESTION_TYPE,
                                value: ((o = t.row.questionBody) == null ? void 0 : o.questionType) || 0
                            }, null, 8, [ "type", "value" ])) ];
                        }),
                        _: 1
                    }), i(c, {
                        prop: "deptName",
                        label: "难易度",
                        width: "80",
                        formatter: M
                    }, {
                        default: h(t => {
                            var o;
                            return [ t.row.folder ? (l(), y("span", Q, w("--"))) : (l(), 
                            p(V, {
                                key: 0,
                                type: a(T).QUESTION_DIFFICULT,
                                value: ((o = t.row.questionBody) == null ? void 0 : o.difficult) || 0
                            }, null, 8, [ "type", "value" ])) ];
                        }),
                        _: 1
                    }), i(c, {
                        formatter: M,
                        label: "所在文件夹",
                        prop: "belongToFolderName",
                        width: "100"
                    }, {
                        default: h(t => {
                            var o;
                            return [ i(me, {
                                class: "item",
                                effect: "dark",
                                content: (o = t.row.ancestorsFolderName) == null ? void 0 : o.replace(/,/g, "/"),
                                placement: "top"
                            }, {
                                default: h(() => {
                                    var N;
                                    return [ n("span", B, w((N = t.row.belongToFolderName) == null ? void 0 : N.split(",").slice(-1)[0]), 1) ];
                                }),
                                _: 2
                            }, 1032, [ "content" ]) ];
                        }),
                        _: 1
                    }), [ "2" ].includes(a(b)) ? (l(), p(c, {
                        key: 0,
                        prop: "publisherName",
                        label: "公开人",
                        width: "170"
                    })) : F("", !0), [ "1" ].includes(a(b)) ? (l(), p(c, {
                        key: 1,
                        label: "上次修改时间",
                        prop: "updateTime",
                        formatter: a(J),
                        width: "170"
                    }, null, 8, [ "formatter" ])) : (l(), p(c, {
                        key: 2,
                        label: "公开时间",
                        prop: "publisherTime",
                        formatter: a(J),
                        width: "170"
                    }, null, 8, [ "formatter" ])) ]),
                    _: 1
                }, 8, [ "data", "expand-row-keys" ]) ]), n("div", R, [ i(ye, {
                    total: a(W),
                    page: a(_).page,
                    "onUpdate:page": r[0] || (r[0] = t => a(_).page = t),
                    limit: a(_).size,
                    "onUpdate:limit": r[1] || (r[1] = t => a(_).size = t),
                    onPagination: r[2] || (r[2] = t => x())
                }, null, 8, [ "total", "page", "limit" ]) ]) ]), i(Me, {
                    ref_key: "viewDatabaseRef",
                    ref: A
                }, null, 512) ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-079624dd" ] ]);
});

export {
    pt as __tla,
    $ as default
};