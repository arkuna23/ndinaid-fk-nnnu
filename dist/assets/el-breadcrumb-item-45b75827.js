import {
    aD as y,
    a_ as z,
    d as n,
    a$ as D,
    aE as v,
    r as g,
    b9 as G,
    f as P,
    o as l,
    c as p,
    aI as k,
    z as o,
    a,
    aG as I,
    b1 as K,
    b8 as L,
    b0 as M,
    t as O,
    C as h,
    l as Q,
    aY as Y,
    aQ as w,
    B as F,
    aL as H,
    aM as J,
    __tla as N
} from "./index-6c08ea4c.js";

let $, B, R = Promise.all([ (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    const b = Symbol("breadcrumbKey"), E = y({
        separator: {
            type: String,
            default: "/"
        },
        separatorIcon: {
            type: z
        }
    }), S = [ "aria-label" ], C = n({
        name: "ElBreadcrumb"
    });
    var x = I(n({
        ...C,
        props: E,
        setup(c) {
            const t = c, {
                t: u
            } = D(), s = v("breadcrumb"), r = g();
            return G(b, t), P(() => {
                const e = r.value.querySelectorAll(`.${s.e("item")}`);
                e.length && e[e.length - 1].setAttribute("aria-current", "page");
            }), (e, d) => (l(), p("div", {
                ref_key: "breadcrumb",
                ref: r,
                class: o(a(s).b()),
                "aria-label": a(u)("el.breadcrumb.label"),
                role: "navigation"
            }, [ k(e.$slots, "default") ], 10, S));
        }
    }), [ [ "__file", "breadcrumb.vue" ] ]);
    const A = y({
        to: {
            type: K([ String, Object ]),
            default: ""
        },
        replace: {
            type: Boolean,
            default: !1
        }
    }), j = n({
        name: "ElBreadcrumbItem"
    });
    var i = I(n({
        ...j,
        props: A,
        setup(c) {
            const t = c, u = L(), s = M(b, void 0), r = v("breadcrumb"), e = u.appContext.config.globalProperties.$router, d = g(), q = () => {
                t.to && e && (t.replace ? e.replace(t.to) : e.push(t.to));
            };
            return (m, T) => {
                var f, _;
                return l(), p("span", {
                    class: o(a(r).e("item"))
                }, [ O("span", {
                    ref_key: "link",
                    ref: d,
                    class: o([ a(r).e("inner"), a(r).is("link", !!m.to) ]),
                    role: "link",
                    onClick: q
                }, [ k(m.$slots, "default") ], 2), (f = a(s)) != null && f.separatorIcon ? (l(), 
                h(a(w), {
                    key: 0,
                    class: o(a(r).e("separator"))
                }, {
                    default: Q(() => [ (l(), h(Y(a(s).separatorIcon))) ]),
                    _: 1
                }, 8, [ "class" ])) : (l(), p("span", {
                    key: 1,
                    class: o(a(r).e("separator")),
                    role: "presentation"
                }, F((_ = a(s)) == null ? void 0 : _.separator), 3)) ], 2);
            };
        }
    }), [ [ "__file", "breadcrumb-item.vue" ] ]);
    B = H(x, {
        BreadcrumbItem: i
    }), $ = J(i);
});

export {
    $ as E,
    R as __tla,
    B as a
};