import {
    aD as A,
    a_ as G,
    d as z,
    a$ as U,
    e as h,
    o as d,
    c as C,
    B as F,
    C as M,
    l as W,
    aY as X,
    a,
    aQ as Z,
    aG as K,
    b0 as $e,
    b1 as ee,
    b2 as ae,
    b3 as te,
    aE as $,
    r as E,
    w as J,
    b4 as De,
    k as ne,
    F as le,
    y as ie,
    ab as Oe,
    ac as Ge,
    z as S,
    t as re,
    P as Je,
    aR as Qe,
    D as Q,
    b5 as Re,
    b6 as se,
    b7 as Ve,
    I as We,
    b8 as Ye,
    b9 as He,
    ba as Xe,
    i as j,
    bb as L,
    bc as Ze,
    aP as ea,
    aL as aa,
    __tla as ta
} from "./index-6c08ea4c.js";

let ue, na = Promise.all([ (() => {
    try {
        return ta;
    } catch {}
})() ]).then(async () => {
    const Y = Symbol("elPaginationKey"), oe = A({
        disabled: Boolean,
        currentPage: {
            type: Number,
            default: 1
        },
        prevText: {
            type: String
        },
        prevIcon: {
            type: G
        }
    }), pe = {
        click: e => e instanceof MouseEvent
    }, de = [ "disabled", "aria-label", "aria-disabled" ], ge = {
        key: 0
    }, ce = z({
        name: "ElPaginationPrev"
    });
    var be = K(z({
        ...ce,
        props: oe,
        emits: pe,
        setup(e) {
            const u = e, {
                t: n
            } = U(), g = h(() => u.disabled || u.currentPage <= 1);
            return (s, p) => (d(), C("button", {
                type: "button",
                class: "btn-prev",
                disabled: a(g),
                "aria-label": s.prevText || a(n)("el.pagination.prev"),
                "aria-disabled": a(g),
                onClick: p[0] || (p[0] = b => s.$emit("click", b))
            }, [ s.prevText ? (d(), C("span", ge, F(s.prevText), 1)) : (d(), M(a(Z), {
                key: 1
            }, {
                default: W(() => [ (d(), M(X(s.prevIcon))) ]),
                _: 1
            })) ], 8, de));
        }
    }), [ [ "__file", "prev.vue" ] ]);
    const ve = A({
        disabled: Boolean,
        currentPage: {
            type: Number,
            default: 1
        },
        pageCount: {
            type: Number,
            default: 50
        },
        nextText: {
            type: String
        },
        nextIcon: {
            type: G
        }
    }), me = [ "disabled", "aria-label", "aria-disabled" ], fe = {
        key: 0
    }, Ce = z({
        name: "ElPaginationNext"
    });
    var ye = K(z({
        ...Ce,
        props: ve,
        emits: [ "click" ],
        setup(e) {
            const u = e, {
                t: n
            } = U(), g = h(() => u.disabled || u.currentPage === u.pageCount || u.pageCount === 0);
            return (s, p) => (d(), C("button", {
                type: "button",
                class: "btn-next",
                disabled: a(g),
                "aria-label": s.nextText || a(n)("el.pagination.next"),
                "aria-disabled": a(g),
                onClick: p[0] || (p[0] = b => s.$emit("click", b))
            }, [ s.nextText ? (d(), C("span", fe, F(s.nextText), 1)) : (d(), M(a(Z), {
                key: 1
            }, {
                default: W(() => [ (d(), M(X(s.nextIcon))) ]),
                _: 1
            })) ], 8, me));
        }
    }), [ [ "__file", "next.vue" ] ]);
    const R = () => $e(Y, {}), Pe = A({
        pageSize: {
            type: Number,
            required: !0
        },
        pageSizes: {
            type: ee(Array),
            default: () => ae([ 10, 20, 30, 40, 50, 100 ])
        },
        popperClass: {
            type: String
        },
        disabled: Boolean,
        teleported: Boolean,
        size: {
            type: String,
            values: te
        }
    }), xe = z({
        name: "ElPaginationSizes"
    });
    var ze = K(z({
        ...xe,
        props: Pe,
        emits: [ "page-size-change" ],
        setup(e, {
            emit: u
        }) {
            const n = e, {
                t: g
            } = U(), s = $("pagination"), p = R(), b = E(n.pageSize);
            J(() => n.pageSizes, (c, y) => {
                if (!De(c, y) && Array.isArray(c)) {
                    const o = c.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
                    u("page-size-change", o);
                }
            }), J(() => n.pageSize, c => {
                b.value = c;
            });
            const x = h(() => n.pageSizes);
            function I(c) {
                var y;
                c !== b.value && (b.value = c, (y = p.handleSizeChange) == null || y.call(p, Number(c)));
            }
            return (c, y) => (d(), C("span", {
                class: S(a(s).e("sizes"))
            }, [ ne(a(Ge), {
                "model-value": b.value,
                disabled: c.disabled,
                "popper-class": c.popperClass,
                size: c.size,
                teleported: c.teleported,
                "validate-event": !1,
                onChange: I
            }, {
                default: W(() => [ (d(!0), C(le, null, ie(a(x), o => (d(), M(a(Oe), {
                    key: o,
                    value: o,
                    label: o + a(g)("el.pagination.pagesize")
                }, null, 8, [ "value", "label" ]))), 128)) ]),
                _: 1
            }, 8, [ "model-value", "disabled", "popper-class", "size", "teleported" ]) ], 2));
        }
    }), [ [ "__file", "sizes.vue" ] ]);
    const he = A({
        size: {
            type: String,
            values: te
        }
    }), Se = [ "disabled" ], ke = z({
        name: "ElPaginationJumper"
    });
    var Ne = K(z({
        ...ke,
        props: he,
        setup(e) {
            const {
                t: u
            } = U(), n = $("pagination"), {
                pageCount: g,
                disabled: s,
                currentPage: p,
                changeEvent: b
            } = R(), x = E(), I = h(() => {
                var o;
                return (o = x.value) != null ? o : p == null ? void 0 : p.value;
            });
            function c(o) {
                x.value = o ? +o : "";
            }
            function y(o) {
                o = Math.trunc(+o), b == null || b(o), x.value = void 0;
            }
            return (o, k) => (d(), C("span", {
                class: S(a(n).e("jump")),
                disabled: a(s)
            }, [ re("span", {
                class: S([ a(n).e("goto") ])
            }, F(a(u)("el.pagination.goto")), 3), ne(a(Je), {
                size: o.size,
                class: S([ a(n).e("editor"), a(n).is("in-pagination") ]),
                min: 1,
                max: a(g),
                disabled: a(s),
                "model-value": a(I),
                "validate-event": !1,
                label: a(u)("el.pagination.page"),
                type: "number",
                "onUpdate:modelValue": c,
                onChange: y
            }, null, 8, [ "size", "class", "max", "disabled", "model-value", "label" ]), re("span", {
                class: S([ a(n).e("classifier") ])
            }, F(a(u)("el.pagination.pageClassifier")), 3) ], 10, Se));
        }
    }), [ [ "__file", "jumper.vue" ] ]);
    const _e = A({
        total: {
            type: Number,
            default: 1e3
        }
    }), Te = [ "disabled" ], Be = z({
        name: "ElPaginationTotal"
    });
    var Ee = K(z({
        ...Be,
        props: _e,
        setup(e) {
            const {
                t: u
            } = U(), n = $("pagination"), {
                disabled: g
            } = R();
            return (s, p) => (d(), C("span", {
                class: S(a(n).e("total")),
                disabled: a(g)
            }, F(a(u)("el.pagination.total", {
                total: s.total
            })), 11, Te));
        }
    }), [ [ "__file", "total.vue" ] ]);
    const Ie = A({
        currentPage: {
            type: Number,
            default: 1
        },
        pageCount: {
            type: Number,
            required: !0
        },
        pagerCount: {
            type: Number,
            default: 7
        },
        disabled: Boolean
    }), Me = [ "onKeyup" ], Le = [ "aria-current", "aria-label", "tabindex" ], je = [ "tabindex", "aria-label" ], qe = [ "aria-current", "aria-label", "tabindex" ], we = [ "tabindex", "aria-label" ], Ae = [ "aria-current", "aria-label", "tabindex" ], Ue = z({
        name: "ElPaginationPager"
    });
    var Fe = K(z({
        ...Ue,
        props: Ie,
        emits: [ "change" ],
        setup(e, {
            emit: u
        }) {
            const n = e, g = $("pager"), s = $("icon"), {
                t: p
            } = U(), b = E(!1), x = E(!1), I = E(!1), c = E(!1), y = E(!1), o = E(!1), k = h(() => {
                const t = n.pagerCount, l = (t - 1) / 2, i = Number(n.currentPage), N = Number(n.pageCount);
                let B = !1, _ = !1;
                N > t && (i > t - l && (B = !0), i < N - l && (_ = !0));
                const T = [];
                if (B && !_) for (let P = N - (t - 2); P < N; P++) T.push(P); else if (!B && _) for (let P = 2; P < t; P++) T.push(P); else if (B && _) {
                    const P = Math.floor(t / 2) - 1;
                    for (let V = i - P; V <= i + P; V++) T.push(V);
                } else for (let P = 2; P < N; P++) T.push(P);
                return T;
            }), v = h(() => [ "more", "btn-quickprev", s.b(), g.is("disabled", n.disabled) ]), D = h(() => [ "more", "btn-quicknext", s.b(), g.is("disabled", n.disabled) ]), q = h(() => n.disabled ? -1 : 0);
            function O(t = !1) {
                n.disabled || (t ? I.value = !0 : c.value = !0);
            }
            function w(t = !1) {
                t ? y.value = !0 : o.value = !0;
            }
            function r(t) {
                const l = t.target;
                if (l.tagName.toLowerCase() === "li" && Array.from(l.classList).includes("number")) {
                    const i = Number(l.textContent);
                    i !== n.currentPage && u("change", i);
                } else l.tagName.toLowerCase() === "li" && Array.from(l.classList).includes("more") && m(t);
            }
            function m(t) {
                const l = t.target;
                if (l.tagName.toLowerCase() === "ul" || n.disabled) return;
                let i = Number(l.textContent);
                const N = n.pageCount, B = n.currentPage, _ = n.pagerCount - 2;
                l.className.includes("more") && (l.className.includes("quickprev") ? i = B - _ : l.className.includes("quicknext") && (i = B + _)), 
                Number.isNaN(+i) || (i < 1 && (i = 1), i > N && (i = N)), i !== B && u("change", i);
            }
            return Qe(() => {
                const t = (n.pagerCount - 1) / 2;
                b.value = !1, x.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - t && (b.value = !0), 
                n.currentPage < n.pageCount - t && (x.value = !0));
            }), (t, l) => (d(), C("ul", {
                class: S(a(g).b()),
                onClick: m,
                onKeyup: We(r, [ "enter" ])
            }, [ t.pageCount > 0 ? (d(), C("li", {
                key: 0,
                class: S([ [ a(g).is("active", t.currentPage === 1), a(g).is("disabled", t.disabled) ], "number" ]),
                "aria-current": t.currentPage === 1,
                "aria-label": a(p)("el.pagination.currentPage", {
                    pager: 1
                }),
                tabindex: a(q)
            }, " 1 ", 10, Le)) : Q("v-if", !0), b.value ? (d(), C("li", {
                key: 1,
                class: S(a(v)),
                tabindex: a(q),
                "aria-label": a(p)("el.pagination.prevPages", {
                    pager: t.pagerCount - 2
                }),
                onMouseenter: l[0] || (l[0] = i => O(!0)),
                onMouseleave: l[1] || (l[1] = i => I.value = !1),
                onFocus: l[2] || (l[2] = i => w(!0)),
                onBlur: l[3] || (l[3] = i => y.value = !1)
            }, [ !I.value && !y.value || t.disabled ? (d(), M(a(se), {
                key: 1
            })) : (d(), M(a(Re), {
                key: 0
            })) ], 42, je)) : Q("v-if", !0), (d(!0), C(le, null, ie(a(k), i => (d(), 
            C("li", {
                key: i,
                class: S([ [ a(g).is("active", t.currentPage === i), a(g).is("disabled", t.disabled) ], "number" ]),
                "aria-current": t.currentPage === i,
                "aria-label": a(p)("el.pagination.currentPage", {
                    pager: i
                }),
                tabindex: a(q)
            }, F(i), 11, qe))), 128)), x.value ? (d(), C("li", {
                key: 2,
                class: S(a(D)),
                tabindex: a(q),
                "aria-label": a(p)("el.pagination.nextPages", {
                    pager: t.pagerCount - 2
                }),
                onMouseenter: l[4] || (l[4] = i => O()),
                onMouseleave: l[5] || (l[5] = i => c.value = !1),
                onFocus: l[6] || (l[6] = i => w()),
                onBlur: l[7] || (l[7] = i => o.value = !1)
            }, [ !c.value && !o.value || t.disabled ? (d(), M(a(se), {
                key: 1
            })) : (d(), M(a(Ve), {
                key: 0
            })) ], 42, we)) : Q("v-if", !0), t.pageCount > 1 ? (d(), C("li", {
                key: 3,
                class: S([ [ a(g).is("active", t.currentPage === t.pageCount), a(g).is("disabled", t.disabled) ], "number" ]),
                "aria-current": t.currentPage === t.pageCount,
                "aria-label": a(p)("el.pagination.currentPage", {
                    pager: t.pageCount
                }),
                tabindex: a(q)
            }, F(t.pageCount), 11, Ae)) : Q("v-if", !0) ], 42, Me));
        }
    }), [ [ "__file", "pager.vue" ] ]);
    const f = e => typeof e != "number", Ke = A({
        pageSize: Number,
        defaultPageSize: Number,
        total: Number,
        pageCount: Number,
        pagerCount: {
            type: Number,
            validator: e => L(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 == 1,
            default: 7
        },
        currentPage: Number,
        defaultCurrentPage: Number,
        layout: {
            type: String,
            default: [ "prev", "pager", "next", "jumper", "->", "total" ].join(", ")
        },
        pageSizes: {
            type: ee(Array),
            default: () => ae([ 10, 20, 30, 40, 50, 100 ])
        },
        popperClass: {
            type: String,
            default: ""
        },
        prevText: {
            type: String,
            default: ""
        },
        prevIcon: {
            type: G,
            default: () => Ze
        },
        nextText: {
            type: String,
            default: ""
        },
        nextIcon: {
            type: G,
            default: () => ea
        },
        teleported: {
            type: Boolean,
            default: !0
        },
        small: Boolean,
        background: Boolean,
        disabled: Boolean,
        hideOnSinglePage: Boolean
    }), H = "ElPagination";
    ue = aa(z({
        name: H,
        props: Ke,
        emits: {
            "update:current-page": e => L(e),
            "update:page-size": e => L(e),
            "size-change": e => L(e),
            change: (e, u) => L(e) && L(u),
            "current-change": e => L(e),
            "prev-click": e => L(e),
            "next-click": e => L(e)
        },
        setup(e, {
            emit: u,
            slots: n
        }) {
            const {
                t: g
            } = U(), s = $("pagination"), p = Ye().vnode.props || {}, b = "onUpdate:currentPage" in p || "onUpdate:current-page" in p || "onCurrentChange" in p, x = "onUpdate:pageSize" in p || "onUpdate:page-size" in p || "onSizeChange" in p, I = h(() => {
                if (f(e.total) && f(e.pageCount) || !f(e.currentPage) && !b) return !1;
                if (e.layout.includes("sizes")) {
                    if (f(e.pageCount)) {
                        if (!f(e.total) && !f(e.pageSize) && !x) return !1;
                    } else if (!x) return !1;
                }
                return !0;
            }), c = E(f(e.defaultPageSize) ? 10 : e.defaultPageSize), y = E(f(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), o = h({
                get: () => f(e.pageSize) ? c.value : e.pageSize,
                set(r) {
                    f(e.pageSize) && (c.value = r), x && (u("update:page-size", r), 
                    u("size-change", r));
                }
            }), k = h(() => {
                let r = 0;
                return f(e.pageCount) ? f(e.total) || (r = Math.max(1, Math.ceil(e.total / o.value))) : r = e.pageCount, 
                r;
            }), v = h({
                get: () => f(e.currentPage) ? y.value : e.currentPage,
                set(r) {
                    let m = r;
                    r < 1 ? m = 1 : r > k.value && (m = k.value), f(e.currentPage) && (y.value = m), 
                    b && (u("update:current-page", m), u("current-change", m));
                }
            });
            function D(r) {
                v.value = r;
            }
            function q() {
                e.disabled || (v.value -= 1, u("prev-click", v.value));
            }
            function O() {
                e.disabled || (v.value += 1, u("next-click", v.value));
            }
            function w(r, m) {
                r && (r.props || (r.props = {}), r.props.class = [ r.props.class, m ].join(" "));
            }
            return J(k, r => {
                v.value > r && (v.value = r);
            }), J([ v, o ], r => {
                u("change", ...r);
            }, {
                flush: "post"
            }), He(Y, {
                pageCount: k,
                disabled: h(() => e.disabled),
                currentPage: v,
                changeEvent: D,
                handleSizeChange: function(r) {
                    o.value = r;
                    const m = k.value;
                    v.value > m && (v.value = m);
                }
            }), () => {
                var r, m;
                if (!I.value) return Xe(H, g("el.pagination.deprecationWarning")), 
                null;
                if (!e.layout || e.hideOnSinglePage && k.value <= 1) return null;
                const t = [], l = [], i = j("div", {
                    class: s.e("rightwrapper")
                }, l), N = {
                    prev: j(be, {
                        disabled: e.disabled,
                        currentPage: v.value,
                        prevText: e.prevText,
                        prevIcon: e.prevIcon,
                        onClick: q
                    }),
                    jumper: j(Ne, {
                        size: e.small ? "small" : "default"
                    }),
                    pager: j(Fe, {
                        currentPage: v.value,
                        pageCount: k.value,
                        pagerCount: e.pagerCount,
                        onChange: D,
                        disabled: e.disabled
                    }),
                    next: j(ye, {
                        disabled: e.disabled,
                        currentPage: v.value,
                        pageCount: k.value,
                        nextText: e.nextText,
                        nextIcon: e.nextIcon,
                        onClick: O
                    }),
                    sizes: j(ze, {
                        pageSize: o.value,
                        pageSizes: e.pageSizes,
                        popperClass: e.popperClass,
                        disabled: e.disabled,
                        teleported: e.teleported,
                        size: e.small ? "small" : "default"
                    }),
                    slot: (m = (r = n == null ? void 0 : n.default) == null ? void 0 : r.call(n)) != null ? m : null,
                    total: j(Ee, {
                        total: f(e.total) ? 0 : e.total
                    })
                }, B = e.layout.split(",").map(T => T.trim());
                let _ = !1;
                return B.forEach(T => {
                    T !== "->" ? _ ? l.push(N[T]) : t.push(N[T]) : _ = !0;
                }), w(t[0], s.is("first")), w(t[t.length - 1], s.is("last")), _ && l.length > 0 && (w(l[0], s.is("first")), 
                w(l[l.length - 1], s.is("last")), t.push(i)), j("div", {
                    class: [ s.b(), s.is("background", e.background), {
                        [s.m("small")]: e.small
                    } ]
                }, t);
            };
        }
    }));
});

export {
    ue as E,
    na as __tla
};