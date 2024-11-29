import {
    ag as z,
    e as s,
    r as f,
    aR as b,
    o as h,
    c as C,
    A as S,
    G as x,
    k as N,
    a as j,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    _ as A
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as U,
    __tla as k
} from "./index-993301ca.js";

let m, q = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})() ]).then(async () => {
    let u;
    u = {
        class: "pagination"
    }, m = A(Object.assign({
        name: "Pagination"
    }, {
        __name: "index",
        props: {
            total: {
                required: !0,
                type: Number
            },
            page: {
                type: Number,
                default: 1
            },
            limit: {
                type: Number,
                default: 20
            },
            pagerCount: {
                type: Number,
                default: document.body.clientWidth < 992 ? 5 : 7
            },
            pageSizes: {
                type: Array,
                default: () => [ 10, 20, 30, 50, 100 ]
            }
        },
        emits: [ "update:page", "update:limit", "pagination", "pagination" ],
        setup(t, {
            emit: c
        }) {
            const d = z(), o = s(() => d.currentSize), g = f(o.value === "small");
            b(() => {
                g.value = o.value === "small";
            });
            const l = t, i = c, e = s({
                get: () => l.page,
                set(a) {
                    i("update:page", a);
                }
            }), r = s({
                get: () => l.limit,
                set(a) {
                    i("update:limit", a);
                }
            }), _ = a => {
                e.value * a > l.total && (e.value = 1), i("pagination", {
                    page: e.value,
                    limit: a
                });
            }, v = a => {
                i("pagination", {
                    page: a,
                    limit: r.value
                });
            };
            return (a, p) => {
                const y = U;
                return h(), C("div", u, [ S(N(y, {
                    "current-page": e.value,
                    "onUpdate:currentPage": p[0] || (p[0] = n => e.value = n),
                    "page-size": r.value,
                    "onUpdate:pageSize": p[1] || (p[1] = n => r.value = n),
                    "page-sizes": l.pageSizes,
                    "pager-count": t.pagerCount,
                    total: t.total,
                    small: j(g),
                    layout: "total, sizes, prev, pager, next, jumper",
                    onSizeChange: _,
                    onCurrentChange: v
                }, null, 8, [ "current-page", "page-size", "page-sizes", "pager-count", "total", "small" ]), [ [ x, t.total > 0 ] ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-977f7a52" ] ]);
});

export {
    m as _,
    q as __tla
};