import {
    p as O,
    w as S,
    e as v,
    r,
    f as T,
    j as U,
    o as t,
    c as n,
    t as d,
    B as V,
    z as h,
    k as s,
    a as X,
    dX as $,
    D as E,
    F as m,
    y as _,
    A as j,
    l as i,
    G as P,
    C as z,
    v as Q,
    x as R,
    J as W,
    K as Y,
    ad as Z,
    ae as aa,
    M as ea,
    L as la,
    s as ta,
    __tla as sa
} from "./index-6c08ea4c.js";

import {
    _ as oa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let J, na = Promise.all([ (() => {
    try {
        return sa;
    } catch {}
})() ]).then(async () => {
    let g, y, w, x, I, N;
    g = {
        class: "title"
    }, y = {
        class: "cont-left"
    }, w = [ "onClick" ], x = {
        class: "neu-thumbnailDisplay titleText"
    }, I = {
        class: "cont-right"
    }, N = {
        class: "px-3 tag-box"
    }, J = oa({
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
            O();
            const a = q;
            S(() => a.dbInfo, () => {
                p.value = "1", o.value = (a.dbInfo.tables || []).length > 0 ? a.dbInfo.tables[0].tableName : "";
            }, {
                deep: !0
            });
            const A = v(() => u.value ? a.defaultHeight : 40), u = r(!1), o = r("");
            r(!1);
            const p = r("1"), B = v(() => ((a.dbInfo.tables || []).find(f => f.tableName === o.value) || {}).tableStructure || {}), k = v(() => ((a.dbInfo.tables || []).find(f => f.tableName === o.value) || {}).tableData || {});
            return T(() => {
                o.value = (a.dbInfo.tables || []).length > 0 ? a.dbInfo.tables[0].tableName : "", 
                u.value = !a.showHideBtn;
            }), (f, c) => {
                const F = W, G = Y, H = Z, C = aa, D = ea, K = la, L = ta, M = U("show-tip");
                return t(), n("div", {
                    class: h([ "db-box info-box", a.noBorder ? "no-border" : "" ]),
                    style: R(`height: ${A.value}px;`)
                }, [ d("div", {
                    class: "info-header pointer",
                    onClick: c[0] || (c[0] = () => {
                        a.showHideBtn && (u.value = !u.value);
                    })
                }, [ d("div", g, "【" + V(a.dbInfo.dbName || "") + "】库表总览", 1), a.showHideBtn ? (t(), 
                n("div", {
                    key: 0,
                    class: h([ "hide-btn", {
                        "is-hide": !u.value
                    } ])
                }, [ s(F, {
                    icon: X($),
                    text: "",
                    size: "small",
                    circle: ""
                }, null, 8, [ "icon" ]) ], 2)) : E("", !0) ]), d("div", {
                    class: h([ "info-cont", {
                        "is-hide": !u.value
                    } ])
                }, [ d("div", y, [ (t(!0), n(m, null, _(a.dbInfo.tables, e => (t(), 
                n("div", {
                    class: h([ "table-item", {
                        "is-active": e.tableName === o.value
                    } ]),
                    key: e.tableName,
                    onClick: b => function(l) {
                        o.value = l.tableName;
                    }(e)
                }, [ j((t(), n("span", null, [ s(G, {
                    content: e.tableName,
                    placement: "right",
                    "show-after": 300
                }, {
                    default: i(() => [ d("span", x, V(e.tableName), 1) ]),
                    _: 2
                }, 1032, [ "content" ]) ])), [ [ M ] ]) ], 10, w))), 128)) ]), d("div", I, [ j(s(L, {
                    modelValue: p.value,
                    "onUpdate:modelValue": c[1] || (c[1] = e => p.value = e),
                    class: "demo-tabs"
                }, {
                    default: i(() => [ s(D, {
                        label: "表结构",
                        name: "1"
                    }, {
                        default: i(() => {
                            var e;
                            return [ s(C, {
                                data: ((e = B.value) == null ? void 0 : e.datas) || [],
                                height: a.defaultHeight - 70 + "px"
                            }, {
                                default: i(() => {
                                    var b;
                                    return [ (t(!0), n(m, null, _(((b = B.value) == null ? void 0 : b.titles) || [], l => (t(), 
                                    z(H, {
                                        key: l,
                                        prop: l,
                                        label: l,
                                        "min-width": "100",
                                        "show-overflow-tooltip": !0
                                    }, null, 8, [ "prop", "label" ]))), 128)) ];
                                }),
                                _: 1
                            }, 8, [ "data", "height" ]) ];
                        }),
                        _: 1
                    }), s(D, {
                        label: "表数据",
                        name: "2"
                    }, {
                        default: i(() => {
                            var e;
                            return [ d("div", N, [ s(K, {
                                type: "info"
                            }, {
                                default: i(() => [ Q("仅展示表内 10 条数据") ]),
                                _: 1
                            }) ]), s(C, {
                                data: ((e = k.value) == null ? void 0 : e.datas) || [],
                                height: a.defaultHeight - 102 + "px"
                            }, {
                                default: i(() => {
                                    var b;
                                    return [ (t(!0), n(m, null, _(((b = k.value) == null ? void 0 : b.titles) || [], l => (t(), 
                                    z(H, {
                                        key: l,
                                        prop: l,
                                        label: l,
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
                }, 8, [ "modelValue" ]), [ [ P, o.value ] ]) ]) ], 2) ], 6);
            };
        }
    }, [ [ "__scopeId", "data-v-53ac4c77" ] ]);
});

export {
    na as __tla,
    J as default
};