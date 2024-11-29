import {
    _ as _t,
    __tla as nt
} from "./index-c4ca0ced.js";

import {
    d as pt,
    r as l,
    u as ut,
    T as ct,
    e as v,
    h as A,
    p as dt,
    w as mt,
    U as yt,
    f as H,
    o as d,
    c as b,
    t as p,
    k as o,
    a as r,
    l as y,
    x as ft,
    B as T,
    C as w,
    D as ht,
    bB as kt,
    ad as gt,
    _ as vt,
    ae as bt,
    __tla as Tt
} from "./index-6c08ea4c.js";

import {
    _ as wt,
    __tla as It
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as xt,
    __tla as Nt
} from "./index-1024512a.js";

import {
    d as qt,
    __tla as St
} from "./formatTime-de6f1520.js";

import {
    d as m,
    D as u,
    __tla as Ut
} from "./dict-c5825220.js";

import {
    d as Et,
    __tla as Pt
} from "./questionBank-6fe58de9.js";

import {
    Q as Ct,
    __tla as Ft
} from "./questionPreview-3c0f3206.js";

import {
    _ as Ot,
    __tla as Qt
} from "./viewDatabase.vue_vue_type_script_setup_true_lang-a51e8548.js";

import {
    g as Bt,
    __tla as Dt
} from "./selectCourseResourcePackageQuestion.vue_vue_type_style_index_0_scoped_270afb37_lang-ab43f27d.js";

import {
    _ as Lt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Rt
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as zt
} from "./DeptTag-1be092ce.js";

import {
    __tla as Yt
} from "./index-ef4d146e.js";

import {
    __tla as At
} from "./type1-bb9ab50e.js";

import {
    __tla as Ht
} from "./type2-f7593207.js";

import {
    __tla as Jt
} from "./type3-f0157d42.js";

import {
    __tla as Vt
} from "./type4-e194cfc5.js";

import {
    __tla as Wt
} from "./type5-5cfc2694.js";

import {
    __tla as jt
} from "./type6-f24b6333.js";

import {
    __tla as Gt
} from "./type7-6a71ebde.js";

import {
    __tla as Kt
} from "./video-1d0dc730.js";

import {
    __tla as Mt
} from "./file-e038b35d.js";

import {
    __tla as Xt
} from "./type20-1bb6de92.js";

import {
    __tla as Zt
} from "./type30-1635403c.js";

import {
    __tla as $t
} from "./myQuestionBank-a9dcc9db.js";

import {
    __tla as te
} from "./sqlDetail-6033fcff.js";

let J, ee = Promise.all([ (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return Qt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})(), (() => {
    try {
        return Yt;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})(), (() => {
    try {
        return Ht;
    } catch {}
})(), (() => {
    try {
        return Jt;
    } catch {}
})(), (() => {
    try {
        return Vt;
    } catch {}
})(), (() => {
    try {
        return Wt;
    } catch {}
})(), (() => {
    try {
        return jt;
    } catch {}
})(), (() => {
    try {
        return Gt;
    } catch {}
})(), (() => {
    try {
        return Kt;
    } catch {}
})(), (() => {
    try {
        return Mt;
    } catch {}
})(), (() => {
    try {
        return Xt;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})(), (() => {
    try {
        return $t;
    } catch {}
})(), (() => {
    try {
        return te;
    } catch {}
})() ]).then(async () => {
    let I, x, N, q, S, U, E, P, C;
    I = {
        class: "cont-box"
    }, x = {
        class: "top-box"
    }, N = {
        class: "center-box"
    }, q = {
        m: "4",
        style: {
            background: "#F9F9F9"
        }
    }, S = [ "onClick" ], U = [ "title" ], E = {
        key: 1
    }, P = {
        key: 1
    }, C = {
        class: "bottom-box pt-12px"
    }, J = Lt(pt({
        __name: "selectCourseResourcePackageQuestion",
        props: {
            activeName: {
                type: String,
                default: () => "3"
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
        setup(V, {
            emit: W
        }) {
            const F = l();
            ut(), l({
                id: 0,
                folderName: "根目录",
                release: 0
            });
            const j = ct();
            v(() => j.params.id);
            const O = l(), G = l(), c = l([]), K = A();
            dt(), l([]), l([ {
                label: "资源包类型",
                key: "pkgType",
                type: "list",
                default: 0,
                options: [ {
                    label: "个人资源包",
                    value: 0
                }, {
                    label: "校本资源包",
                    value: 1
                } ]
            }, {
                label: "题型",
                key: "questionType",
                type: "list",
                options: m(u.QUESTION_TYPE)
            }, {
                label: "难易度",
                key: "difficult",
                type: "list",
                options: m(u.QUESTION_DIFFICULT)
            } ]);
            const f = l([]), M = l([ {
                label: "资源包类型",
                key: "pkgType",
                type: "list",
                clearable: 0,
                default: 0,
                options: [ {
                    label: "个人资源包",
                    value: 0
                }, {
                    label: "校本资源包",
                    value: 1
                } ]
            }, {
                label: "所属课程资源包",
                key: "resPkgId",
                type: "list",
                options: f.value
            }, {
                label: "题型",
                key: "questionType",
                type: "list",
                options: m(u.QUESTION_TYPE)
            }, {
                label: "难易度",
                key: "difficult",
                type: "list",
                options: m(u.QUESTION_DIFFICULT)
            } ]), X = l([ {
                label: "课程资源包",
                key: "pkgId",
                type: "list",
                options: f.value
            }, {
                label: "题型",
                key: "questionType",
                type: "list",
                options: m(u.QUESTION_TYPE)
            }, {
                label: "难易度",
                key: "difficult",
                type: "list",
                options: m(u.QUESTION_DIFFICULT)
            } ]), Q = () => {
                let t = {};
                h.value || (t = {
                    tenantId: kt(),
                    pkgRelease: s.pkgType === 0 ? "" : 1
                }, t.pkgRelease == "" && (t.creator = K.getUser.id)), Bt(t).then(e => {
                    f.value = e, f.value.forEach(i => {
                        i.label = i.pkgName, i.value = i.id;
                    });
                });
            }, h = v(() => A().isSupAdmin), k = V, Z = v({
                get: () => k.list,
                set: t => {
                    $("update:list", t);
                }
            });
            mt(() => k.activeName, () => {
                O.value.resetParams();
            }, {
                immediate: !1
            });
            const B = l([]), D = l(10), s = yt({
                questionType: "",
                difficult: "",
                pkgType: 0,
                keywords: "",
                resPkgId: "",
                pageNo: 1,
                pageSize: 10
            }), $ = W;
            l(!1), H(() => {
                g();
            });
            const tt = t => {
                F.value.handleOpen(t);
            };
            function et(t) {
                Z.value = [ ...t ];
            }
            const L = t => {
                c.value.indexOf(t.id) >= 0 ? c.value = c.value.filter(e => e.id === t.id) : c.value.push(t.id);
            };
            function at({
                row: t,
                column: e,
                rowIndex: i,
                columnIndex: _
            }) {
                return (e.type === "expand" ? "is-folder" : "is-question") + " pointer";
            }
            const g = () => {
                let t = {
                    ...s,
                    pageNo: s.pageNo - 1
                };
                Et(t).then(e => {
                    B.value = e.content, D.value = e.totalElements, c.value = [];
                });
            };
            function rt(t) {
                s.keywords = t.keywords || "", s.difficult = t.difficult || "", 
                s.questionType = t.questionType || "", s.pkgType = h.value ? void 0 : t.pkgType, 
                s.resPkgId = t.resPkgId || "", g(), Q();
            }
            function R(t, e, i, _) {
                return i || "--";
            }
            function lt(t, e) {
                return k.questionIdList.indexOf(t.id) < 0;
            }
            return H(() => {
                Q();
            }), (t, e) => {
                const i = xt, _ = gt, z = vt, Y = wt, ot = bt, st = _t;
                return d(), b("div", null, [ p("div", null, [ p("div", I, [ p("div", x, [ o(i, {
                    ref_key: "ComSearchRef",
                    ref: O,
                    borderBox: !0,
                    searchList: r(h) ? r(X) : r(M),
                    keywordsInfo: {
                        label: "题干/知识技能点/标签",
                        key: "keywords"
                    },
                    onHandleSearch: rt,
                    class: "left"
                }, null, 8, [ "searchList" ]) ]), p("div", N, [ o(ot, {
                    ref_key: "ResourceTableRef",
                    ref: G,
                    data: r(B),
                    height: "500px",
                    "header-row-class-name": "system-header",
                    "cell-class-name": at,
                    "expand-row-keys": r(c),
                    onSelectionChange: et,
                    "row-key": "id"
                }, {
                    default: y(() => [ o(_, {
                        type: "selection",
                        width: "50",
                        selectable: lt
                    }), o(_, {
                        type: "expand",
                        width: "20"
                    }, {
                        default: y(a => [ p("div", q, [ o(Ct, {
                            form: a.row.questionBody || {},
                            onViewDatabase: tt
                        }, null, 8, [ "form" ]) ]) ]),
                        _: 1
                    }), o(_, {
                        label: "文件名",
                        prop: "stemText",
                        "min-width": "180px"
                    }, {
                        default: y(a => {
                            var n;
                            return [ p("div", {
                                class: "file-name",
                                onClick: it => L(a.row)
                            }, [ o(z, {
                                icon: "svg-icon:question",
                                size: 18,
                                style: {
                                    "margin-right": "10px",
                                    "flex-shrink": "0"
                                }
                            }), p("span", {
                                class: "file-name__span pointer",
                                style: ft({
                                    fontWeight: (n = r(c)) != null && n.includes(a.row.id) ? "bold" : "normal"
                                }),
                                title: a.row.questionBody.stemText,
                                onClick: e[0] || (e[0] = it => L(t.row))
                            }, T(a.row.questionBody.stemText), 13, U), r(h) || a.row.resIsNeu !== 1 ? ht("", !0) : (d(), 
                            w(z, {
                                key: 0,
                                class: "ml5",
                                icon: "svg-icon:icon-neuResTag",
                                size: 40
                            })) ], 8, S) ];
                        }),
                        _: 1
                    }), o(_, {
                        prop: "orderNum",
                        label: "题型",
                        width: "120"
                    }, {
                        default: y(a => {
                            var n;
                            return [ a.row.folder ? (d(), b("span", E, T("--"))) : (d(), 
                            w(Y, {
                                key: 0,
                                type: r(u).QUESTION_TYPE,
                                value: ((n = a.row.questionBody) == null ? void 0 : n.questionType) || 0
                            }, null, 8, [ "type", "value" ])) ];
                        }),
                        _: 1
                    }), o(_, {
                        prop: "deptName",
                        label: "难易度",
                        width: "80",
                        formatter: R
                    }, {
                        default: y(a => {
                            var n;
                            return [ a.row.folder ? (d(), b("span", P, T("--"))) : (d(), 
                            w(Y, {
                                key: 0,
                                type: r(u).QUESTION_DIFFICULT,
                                value: ((n = a.row.questionBody) == null ? void 0 : n.difficult) || 0
                            }, null, 8, [ "type", "value" ])) ];
                        }),
                        _: 1
                    }), o(_, {
                        prop: "pkgName",
                        label: "所属课程资源包",
                        formatter: R,
                        "show-overflow-tooltip": !0,
                        width: "180"
                    }), o(_, {
                        label: "上次修改时间",
                        prop: "updateTime",
                        formatter: r(qt),
                        width: "170"
                    }, null, 8, [ "formatter" ]) ]),
                    _: 1
                }, 8, [ "data", "expand-row-keys" ]) ]), p("div", C, [ o(st, {
                    total: r(D),
                    page: r(s).pageNo,
                    "onUpdate:page": e[1] || (e[1] = a => r(s).pageNo = a),
                    limit: r(s).pageSize,
                    "onUpdate:limit": e[2] || (e[2] = a => r(s).pageSize = a),
                    onPagination: e[3] || (e[3] = a => g())
                }, null, 8, [ "total", "page", "limit" ]) ]) ]), o(Ot, {
                    ref_key: "viewDatabaseRef",
                    ref: F
                }, null, 512) ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-270afb37" ] ]);
});

export {
    ee as __tla,
    J as default
};