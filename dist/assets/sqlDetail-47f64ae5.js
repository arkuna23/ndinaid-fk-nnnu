import {
    w as O,
    e as m,
    r as c,
    f as S,
    j as T,
    o as l,
    c as n,
    t as d,
    B as V,
    z as h,
    k as t,
    D as $,
    F as _,
    y as g,
    A as j,
    l as i,
    G as P,
    C as z,
    v as E,
    x as Q,
    J as R,
    K as W,
    ad as X,
    ae as Y,
    M as Z,
    L as aa,
    s as ea,
    __tla as la
} from "./index-6c08ea4c.js";

import {
    _ as ta
} from "./_plugin-vue_export-helper-1b428a4d.js";

let A, sa = Promise.all([ (() => {
    try {
        return la;
    } catch {}
})() ]).then(async () => {
    let w, y, x, I, N, B;
    w = {
        class: "title"
    }, y = {
        class: "cont-left"
    }, x = [ "onClick" ], I = {
        class: "neu-thumbnailDisplay titleText"
    }, N = {
        class: "cont-right"
    }, B = {
        class: "px-3 tag-box"
    }, A = ta({
        __name: "sqlDetail",
        props: {
            dbInfo: {
                type: Object,
                default: () => ({})
            },
            noBorder: {
                type: Boolean,
                default: !1
            },
            defaultHeight: {
                type: Number,
                default: 300
            },
            showHideBtn: {
                type: Boolean,
                default: !1
            }
        },
        setup(q) {
            const a = q;
            O(() => a.dbInfo, () => {
                p.value = "1", s.value = (a.dbInfo.tables || []).length > 0 ? a.dbInfo.tables[0].tableName : "";
            }, {
                deep: !0
            });
            const F = m(() => u.value ? a.defaultHeight : 40), u = c(!1), s = c("");
            c(!1);
            const p = c("1"), H = m(() => ((a.dbInfo.tables || []).find(f => f.tableName === s.value) || {}).tableStructure || {}), k = m(() => ((a.dbInfo.tables || []).find(f => f.tableName === s.value) || {}).tableData || {});
            return S(() => {
                s.value = (a.dbInfo.tables || []).length > 0 ? a.dbInfo.tables[0].tableName : "", 
                u.value = !a.showHideBtn;
            }), (f, r) => {
                const G = R, J = W, C = X, D = Y, U = Z, K = aa, L = ea, M = T("show-tip");
                return l(), n("div", {
                    class: h([ "db-box info-box", a.noBorder ? "no-border" : "" ]),
                    style: Q(`height: ${F.value}px;`)
                }, [ d("div", {
                    class: "info-header pointer",
                    onClick: r[0] || (r[0] = () => {
                        a.showHideBtn && (u.value = !u.value);
                    })
                }, [ d("div", w, "【" + V(a.dbInfo.dbName || "") + "】库表总览", 1), a.showHideBtn ? (l(), 
                n("div", {
                    key: 0,
                    class: h([ "hide-btn", {
                        "is-hide": !u.value
                    } ])
                }, [ t(G, {
                    icon: "ArrowUp",
                    text: "",
                    size: "small",
                    circle: ""
                }) ], 2)) : $("", !0) ]), d("div", {
                    class: h([ "info-cont", {
                        "is-hide": !u.value
                    } ])
                }, [ d("div", y, [ (l(!0), n(_, null, g(a.dbInfo.tables, e => (l(), 
                n("div", {
                    class: h([ "table-item", {
                        "is-active": e.tableName === s.value
                    } ]),
                    key: e.tableName,
                    onClick: b => function(o) {
                        s.value = o.tableName;
                    }(e)
                }, [ j((l(), n("span", null, [ t(J, {
                    content: e.tableName,
                    placement: "right",
                    "show-after": 300
                }, {
                    default: i(() => [ d("span", I, V(e.tableName), 1) ]),
                    _: 2
                }, 1032, [ "content" ]) ])), [ [ M ] ]) ], 10, x))), 128)) ]), d("div", N, [ j(t(L, {
                    modelValue: p.value,
                    "onUpdate:modelValue": r[1] || (r[1] = e => p.value = e),
                    class: "demo-tabs"
                }, {
                    default: i(() => [ t(U, {
                        label: "表结构",
                        name: "1"
                    }, {
                        default: i(() => {
                            var e;
                            return [ t(D, {
                                data: ((e = H.value) == null ? void 0 : e.datas) || [],
                                height: a.defaultHeight - 70 + "px"
                            }, {
                                default: i(() => {
                                    var b;
                                    return [ (l(!0), n(_, null, g(((b = H.value) == null ? void 0 : b.titles) || [], (o, v) => (l(), 
                                    z(C, {
                                        key: v,
                                        prop: o,
                                        label: o,
                                        "min-width": "100",
                                        "show-overflow-tooltip": !0
                                    }, null, 8, [ "prop", "label" ]))), 128)) ];
                                }),
                                _: 1
                            }, 8, [ "data", "height" ]) ];
                        }),
                        _: 1
                    }), t(U, {
                        label: "表数据",
                        name: "2"
                    }, {
                        default: i(() => {
                            var e;
                            return [ d("div", B, [ t(K, {
                                type: "info"
                            }, {
                                default: i(() => [ E("仅展示表内 10 条数据") ]),
                                _: 1
                            }) ]), t(D, {
                                data: ((e = k.value) == null ? void 0 : e.datas) || [],
                                height: a.defaultHeight - 102 + "px"
                            }, {
                                default: i(() => {
                                    var b;
                                    return [ (l(!0), n(_, null, g(((b = k.value) == null ? void 0 : b.titles) || [], (o, v) => (l(), 
                                    z(C, {
                                        key: v,
                                        prop: o,
                                        label: o,
                                        "min-width": "100",
                                        "show-overflow-tooltip": !0
                                    }, null, 8, [ "prop", "label" ]))), 128)) ];
                                }),
                                _: 1
                            }, 8, [ "data", "height" ]) ];
                        }),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), [ [ P, s.value ] ]) ]) ], 2) ], 6);
            };
        }
    }, [ [ "__scopeId", "data-v-56fbb2c2" ] ]);
});

export {
    sa as __tla,
    A as default
};