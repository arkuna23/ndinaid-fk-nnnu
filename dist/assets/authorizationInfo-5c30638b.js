import {
    r as _,
    o as g,
    c,
    k as e,
    l as s,
    t as l,
    B as o,
    a as t,
    v as m,
    x as V,
    m as F,
    bB as $,
    ad as z,
    ae as B,
    J as N,
    aU as O,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    _ as U,
    __tla as j
} from "./index-8b41572c.js";

import {
    d as h,
    __tla as C
} from "./formatTime-de6f1520.js";

import {
    a as J,
    __tla as M
} from "./list-6e502bc8.js";

import {
    _ as Y
} from "./_plugin-vue_export-helper-1b428a4d.js";

let x, q = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    let v, k, f, w, y;
    v = {
        class: "pkgAuthorizationTitle"
    }, k = {
        class: "pkgName"
    }, f = {
        key: 0,
        class: "pkgTime"
    }, w = {
        key: 1,
        class: "pkgTime"
    }, y = {
        style: {
            margin: "20px",
            "text-align": "center"
        }
    }, x = Y({
        __name: "authorizationInfo",
        setup(G, {
            expose: A
        }) {
            const u = _(!1), n = _([]), d = _({}), b = _({}), T = i => {
                const r = new Date(i);
                return `${r.getFullYear()}\u5E74${String(r.getMonth() + 1).padStart(2, "0")}\u6708${String(r.getDate()).padStart(2, "0")}\u65E5`;
            }, D = () => {
                n.value = [], u.value = !1;
            };
            return A({
                open: i => {
                    b.value = i, J({
                        pkgId: i.neuPkgId,
                        pkgType: 1,
                        tenantId: $()
                    }).then(r => {
                        n.value = r, d.value = n.value[n.value.length - 1];
                    }), u.value = !0;
                }
            }), (i, r) => {
                const p = z, I = B, S = U, E = N, L = O;
                return g(), c("div", null, [ e(L, {
                    modelValue: t(u),
                    "onUpdate:modelValue": r[0] || (r[0] = a => F(u) ? u.value = a : null),
                    title: "授权信息",
                    width: "1000",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1
                }, {
                    default: s(() => [ l("div", null, [ l("div", v, [ l("div", k, o(t(b).pkgName), 1), t(d).pkgLeftDays ? (g(), 
                    c("div", f, [ m("有效期至：" + o(T(t(d).pkgAuthEnd)) + "（剩余", 1), l("span", {
                        style: V({
                            color: t(d).pkgLeftDays > 30 ? "#245FE6" : "red"
                        })
                    }, o(t(d).pkgLeftDays), 5), m("天）") ])) : (g(), c("div", w, "已到期")) ]), e(S, {
                        "no-pager": !0,
                        "outer-height": -40
                    }, {
                        default: s(() => [ e(I, {
                            class: "common-table",
                            ref: "selectTable",
                            data: t(n),
                            "highlight-current-row": "",
                            "max-height": "300"
                        }, {
                            default: s(() => [ e(p, {
                                type: "index",
                                label: "序号",
                                width: "100"
                            }), e(p, {
                                label: "授权开始时间"
                            }, {
                                default: s(a => [ l("div", null, o(t(h)(a.row, a.row, a.row.pkgAuthStart)), 1) ]),
                                _: 1
                            }), e(p, {
                                label: "授权结束时间"
                            }, {
                                default: s(a => [ l("div", null, o(t(h)(a.row, a.row, a.row.pkgAuthEnd)), 1) ]),
                                _: 1
                            }), e(p, {
                                label: "录入时间"
                            }, {
                                default: s(a => [ l("div", null, o(t(h)(a.row, a.row, a.row.updateTime)), 1) ]),
                                _: 1
                            }), e(p, {
                                label: "录入类型"
                            }, {
                                default: s(a => [ l("div", null, o(a.row.pkgAuthOprt == 1 ? "新增授权" : a.row.pkgAuthOprt == 2 ? "更新授权" : "取消授权"), 1) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }) ]), l("div", y, [ e(E, {
                        onClick: D
                    }, {
                        default: s(() => [ m("关闭") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-df3ab523" ] ]);
});

export {
    q as __tla,
    x as default
};