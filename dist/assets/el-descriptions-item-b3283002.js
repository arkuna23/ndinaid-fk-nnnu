import {
    d as S,
    b0 as F,
    dH as sl,
    bi as G,
    aE as H,
    A as W,
    i as E,
    cd as rl,
    aD as B,
    b1 as nl,
    a,
    o as s,
    c as b,
    t as h,
    F as m,
    y as N,
    C as A,
    k as L,
    aG as M,
    d4 as il,
    cs as ol,
    bf as cl,
    b9 as dl,
    e as pl,
    z as w,
    aI as O,
    v as R,
    B as q,
    D as ul,
    ca as yl,
    aL as bl,
    aM as vl,
    __tla as hl
} from "./index-6c08ea4c.js";

let P, J, ml = Promise.all([ (() => {
    try {
        return hl;
    } catch {}
})() ]).then(async () => {
    const z = Symbol("elDescriptions");
    var k = S({
        name: "ElDescriptionsCell",
        props: {
            cell: {
                type: Object
            },
            tag: {
                type: String,
                default: "td"
            },
            type: {
                type: String
            }
        },
        setup: () => ({
            descriptions: F(z, {})
        }),
        render() {
            var _, o, t, D, r, c, $;
            const i = sl(this.cell), l = (((_ = this.cell) == null ? void 0 : _.dirs) || []).map(Z => {
                const {
                    dir: ll,
                    arg: tl,
                    modifiers: el,
                    value: al
                } = Z;
                return [ ll, al, tl, el ];
            }), {
                border: p,
                direction: n
            } = this.descriptions, e = n === "vertical", f = ((D = (t = (o = this.cell) == null ? void 0 : o.children) == null ? void 0 : t.label) == null ? void 0 : D.call(t)) || i.label, u = ($ = (c = (r = this.cell) == null ? void 0 : r.children) == null ? void 0 : c.default) == null ? void 0 : $.call(c), y = i.span, g = i.align ? `is-${i.align}` : "", v = i.labelAlign ? `is-${i.labelAlign}` : g, x = i.className, j = i.labelClassName, I = {
                width: G(i.width),
                minWidth: G(i.minWidth)
            }, d = H("descriptions");
            switch (this.type) {
              case "label":
                return W(E(this.tag, {
                    style: I,
                    class: [ d.e("cell"), d.e("label"), d.is("bordered-label", p), d.is("vertical-label", e), v, j ],
                    colSpan: e ? y : 1
                }, f), l);

              case "content":
                return W(E(this.tag, {
                    style: I,
                    class: [ d.e("cell"), d.e("content"), d.is("bordered-content", p), d.is("vertical-content", e), g, x ],
                    colSpan: e ? y : 2 * y - 1
                }, u), l);

              default:
                return W(E("td", {
                    style: I,
                    class: [ d.e("cell"), g ],
                    colSpan: y
                }, [ rl(f) ? void 0 : E("span", {
                    class: [ d.e("label"), j ]
                }, f), E("span", {
                    class: [ d.e("content"), x ]
                }, u) ]), l);
            }
        }
    });
    const K = B({
        row: {
            type: nl(Array),
            default: () => []
        }
    }), Q = {
        key: 1
    }, T = S({
        name: "ElDescriptionsRow"
    });
    var U = M(S({
        ...T,
        props: K,
        setup(_) {
            const o = F(z, {});
            return (t, D) => a(o).direction === "vertical" ? (s(), b(m, {
                key: 0
            }, [ h("tr", null, [ (s(!0), b(m, null, N(t.row, (r, c) => (s(), A(a(k), {
                key: `tr1-${c}`,
                cell: r,
                tag: "th",
                type: "label"
            }, null, 8, [ "cell" ]))), 128)) ]), h("tr", null, [ (s(!0), b(m, null, N(t.row, (r, c) => (s(), 
            A(a(k), {
                key: `tr2-${c}`,
                cell: r,
                tag: "td",
                type: "content"
            }, null, 8, [ "cell" ]))), 128)) ]) ], 64)) : (s(), b("tr", Q, [ (s(!0), 
            b(m, null, N(t.row, (r, c) => (s(), b(m, {
                key: `tr3-${c}`
            }, [ a(o).border ? (s(), b(m, {
                key: 0
            }, [ L(a(k), {
                cell: r,
                tag: "td",
                type: "label"
            }, null, 8, [ "cell" ]), L(a(k), {
                cell: r,
                tag: "td",
                type: "content"
            }, null, 8, [ "cell" ]) ], 64)) : (s(), A(a(k), {
                key: 1,
                cell: r,
                tag: "td",
                type: "both"
            }, null, 8, [ "cell" ])) ], 64))), 128)) ]));
        }
    }), [ [ "__file", "descriptions-row.vue" ] ]);
    const V = B({
        border: {
            type: Boolean,
            default: !1
        },
        column: {
            type: Number,
            default: 3
        },
        direction: {
            type: String,
            values: [ "horizontal", "vertical" ],
            default: "horizontal"
        },
        size: il,
        title: {
            type: String,
            default: ""
        },
        extra: {
            type: String,
            default: ""
        }
    }), X = S({
        name: "ElDescriptions"
    });
    var Y = M(S({
        ...X,
        props: V,
        setup(_) {
            const o = _, t = H("descriptions"), D = ol(), r = cl();
            dl(z, o);
            const c = pl(() => [ t.b(), t.m(D.value) ]), $ = (l, p, n, e = !1) => (l.props || (l.props = {}), 
            p > n && (l.props.span = n), e && (l.props.span = p), l), i = () => {
                if (!r.default) return [];
                const l = yl(r.default()).filter(u => {
                    var y;
                    return ((y = u == null ? void 0 : u.type) == null ? void 0 : y.name) === "ElDescriptionsItem";
                }), p = [];
                let n = [], e = o.column, f = 0;
                return l.forEach((u, y) => {
                    var g;
                    const v = ((g = u.props) == null ? void 0 : g.span) || 1;
                    if (y < l.length - 1 && (f += v > e ? e : v), y === l.length - 1) {
                        const x = o.column - f % o.column;
                        return n.push($(u, x, e, !0)), void p.push(n);
                    }
                    v < e ? (e -= v, n.push(u)) : (n.push($(u, v, e)), p.push(n), 
                    e = o.column, n = []);
                }), p;
            };
            return (l, p) => (s(), b("div", {
                class: w(a(c))
            }, [ l.title || l.extra || l.$slots.title || l.$slots.extra ? (s(), 
            b("div", {
                key: 0,
                class: w(a(t).e("header"))
            }, [ h("div", {
                class: w(a(t).e("title"))
            }, [ O(l.$slots, "title", {}, () => [ R(q(l.title), 1) ]) ], 2), h("div", {
                class: w(a(t).e("extra"))
            }, [ O(l.$slots, "extra", {}, () => [ R(q(l.extra), 1) ]) ], 2) ], 2)) : ul("v-if", !0), h("div", {
                class: w(a(t).e("body"))
            }, [ h("table", {
                class: w([ a(t).e("table"), a(t).is("bordered", l.border) ])
            }, [ h("tbody", null, [ (s(!0), b(m, null, N(i(), (n, e) => (s(), A(U, {
                key: e,
                row: n
            }, null, 8, [ "row" ]))), 128)) ]) ], 2) ], 2) ], 2));
        }
    }), [ [ "__file", "description.vue" ] ]);
    let C;
    C = S({
        name: "ElDescriptionsItem",
        props: B({
            label: {
                type: String,
                default: ""
            },
            span: {
                type: Number,
                default: 1
            },
            width: {
                type: [ String, Number ],
                default: ""
            },
            minWidth: {
                type: [ String, Number ],
                default: ""
            },
            align: {
                type: String,
                default: "left"
            },
            labelAlign: {
                type: String,
                default: ""
            },
            className: {
                type: String,
                default: ""
            },
            labelClassName: {
                type: String,
                default: ""
            }
        })
    }), J = bl(Y, {
        DescriptionsItem: C
    }), P = vl(C);
});

export {
    P as E,
    ml as __tla,
    J as a
};