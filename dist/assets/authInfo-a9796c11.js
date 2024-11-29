import {
    d as I,
    r as i,
    o as h,
    c as m,
    k as t,
    l as d,
    v as f,
    a,
    F as Y,
    t as e,
    B as p,
    a6 as n,
    z as B,
    m as M,
    bB as V,
    ad as S,
    ae as U,
    J as z,
    aU as C,
    __tla as F
} from "./index-6c08ea4c.js";

import {
    _ as J,
    __tla as N
} from "./index-71666e05.js";

import {
    a as P,
    __tla as T
} from "./projectList-47ec8076.js";

import {
    _ as q
} from "./_plugin-vue_export-helper-1b428a4d.js";

let b, G = Promise.all([ (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})() ]).then(async () => {
    let c, g, y, k;
    c = {
        class: "auth-info-header"
    }, g = {
        class: "auth-title"
    }, y = {
        class: "auth-time"
    }, k = {
        key: 1,
        class: "page-empty w-100%"
    }, b = q(I({
        __name: "authInfo",
        setup(H, {
            expose: j
        }) {
            const o = i(!1), w = i("授权信息"), v = i(), l = i([]);
            return j({
                openDialog: _ => {
                    o.value = !0, v.value = _, P({
                        pkgId: _.id,
                        tenantId: V(),
                        pkgType: "2"
                    }).then(r => {
                        l.value = r;
                    });
                },
                closeDialog: () => {
                    o.value = !1;
                }
            }), (_, r) => {
                const u = S, x = U, A = J, E = z, D = C;
                return h(), m("div", null, [ t(D, {
                    modelValue: a(o),
                    "onUpdate:modelValue": r[1] || (r[1] = s => M(o) ? o.value = s : null),
                    scroll: !0,
                    "max-height": "210",
                    title: a(w),
                    width: "1000"
                }, {
                    footer: d(() => [ t(E, {
                        type: "default",
                        onClick: r[0] || (r[0] = s => o.value = !1)
                    }, {
                        default: d(() => [ f("返回") ]),
                        _: 1
                    }) ]),
                    default: d(() => [ a(l) && a(l).length > 0 ? (h(), m(Y, {
                        key: 0
                    }, [ e("div", c, [ e("div", g, [ e("span", null, p(a(v).resName), 1) ]), e("div", y, [ e("span", null, [ f("有效期至：" + p(a(n)(a(l)[0].pkgAuthEnd.join("-")).format("YYYY年MM月DD日")) + "（剩余", 1), e("span", {
                        class: B([ "primary", {
                            danger: a(n)(a(l)[0].pkgAuthEnd.join("-")).diff(a(n)(), "day") < 30
                        } ])
                    }, p(a(n)(a(l)[0].pkgAuthEnd.join("-")).diff(a(n)(), "day") < 0 ? 0 : a(n)(a(l)[0].pkgAuthEnd.join("-")).diff(a(n)(), "day")), 3), f("天）") ]) ]) ]), t(x, {
                        data: a(l),
                        "max-height": "280px",
                        style: {
                            width: "100%",
                            "margin-top": "5px"
                        }
                    }, {
                        default: d(() => [ t(u, {
                            type: "index",
                            width: "80",
                            label: "序号"
                        }), t(u, {
                            prop: "date",
                            label: "授权开始时间"
                        }, {
                            default: d(s => [ e("span", null, p(s.row.pkgAuthStart.join("-")), 1) ]),
                            _: 1
                        }), t(u, {
                            prop: "date",
                            label: "授权结束时间"
                        }, {
                            default: d(s => [ e("span", null, p(s.row.pkgAuthEnd.join("-")), 1) ]),
                            _: 1
                        }), t(u, {
                            prop: "date",
                            label: "录入时间"
                        }, {
                            default: d(s => [ e("span", null, p(s.row.pkgAuthStart.join("-")), 1) ]),
                            _: 1
                        }), t(u, {
                            prop: "date",
                            label: "导入类型",
                            width: "120"
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ], 64)) : (h(), m("div", k, [ t(A, {
                        type: "resource"
                    }) ])) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-cb7b0767" ] ]);
});

export {
    G as __tla,
    b as default
};