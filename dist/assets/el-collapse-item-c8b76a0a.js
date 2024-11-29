import {
    aD as W,
    b1 as P,
    b2 as le,
    cF as z,
    cG as D,
    bb as te,
    bF as ie,
    cH as oe,
    r as k,
    cr as L,
    w as de,
    b9 as ce,
    aE as $,
    e as i,
    d as I,
    o as M,
    c as O,
    aI as w,
    z as p,
    a as e,
    aG as Q,
    b0 as ne,
    cI as re,
    t as E,
    v as ue,
    B as me,
    k as H,
    l as T,
    aP as ve,
    aQ as pe,
    I as be,
    H as fe,
    A as he,
    G as Ce,
    c6 as ye,
    aL as Ke,
    aM as _e,
    __tla as Ie
} from "./index-6c08ea4c.js";

let j, q, xe = Promise.all([ (() => {
    try {
        return Ie;
    } catch {}
})() ]).then(async () => {
    const F = r => te(r) || ie(r) || oe(r), J = W({
        accordion: Boolean,
        modelValue: {
            type: P([ Array, String, Number ]),
            default: () => le([])
        }
    }), R = {
        [z]: F,
        [D]: F
    }, V = Symbol("collapseContextKey"), U = I({
        name: "ElCollapse"
    });
    var X = Q(I({
        ...U,
        props: J,
        emits: R,
        setup(r, {
            expose: x,
            emit: f
        }) {
            const h = r, {
                activeNames: A,
                setActiveNames: u
            } = ((l, m) => {
                const o = k(L(l.modelValue)), b = n => {
                    o.value = n;
                    const c = l.accordion ? o.value[0] : o.value;
                    m(z, c), m(D, c);
                };
                return de(() => l.modelValue, () => o.value = L(l.modelValue), {
                    deep: !0
                }), ce(V, {
                    activeNames: o,
                    handleItemClick: n => {
                        if (l.accordion) b([ o.value[0] === n ? "" : n ]); else {
                            const c = [ ...o.value ], y = c.indexOf(n);
                            y > -1 ? c.splice(y, 1) : c.push(n), b(c);
                        }
                    }
                }), {
                    activeNames: o,
                    setActiveNames: b
                };
            })(h, f), {
                rootKls: C
            } = (() => {
                const l = $("collapse");
                return {
                    rootKls: i(() => l.b())
                };
            })();
            return x({
                activeNames: A,
                setActiveNames: u
            }), (l, m) => (M(), O("div", {
                class: p(e(C))
            }, [ w(l.$slots, "default") ], 2));
        }
    }), [ [ "__file", "collapse.vue" ] ]);
    const Y = W({
        title: {
            type: String,
            default: ""
        },
        name: {
            type: P([ String, Number ]),
            default: void 0
        },
        disabled: Boolean
    }), Z = [ "id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex" ], ee = [ "id", "aria-hidden", "aria-labelledby" ], ae = I({
        name: "ElCollapseItem"
    });
    var B = Q(I({
        ...ae,
        props: Y,
        setup(r, {
            expose: x
        }) {
            const f = r, {
                focusing: h,
                id: A,
                isActive: u,
                handleFocus: C,
                handleHeaderClick: l,
                handleEnterClick: m
            } = (d => {
                const a = ne(V), {
                    namespace: t
                } = $("collapse"), v = k(!1), s = k(!1), K = re(), _ = i(() => K.current++), g = i(() => {
                    var S;
                    return (S = d.name) != null ? S : `${t.value}-id-${K.prefix}-${e(_)}`;
                }), se = i(() => a == null ? void 0 : a.activeNames.value.includes(e(g)));
                return {
                    focusing: v,
                    id: _,
                    isActive: se,
                    handleFocus: () => {
                        setTimeout(() => {
                            s.value ? s.value = !1 : v.value = !0;
                        }, 50);
                    },
                    handleHeaderClick: () => {
                        d.disabled || (a == null || a.handleItemClick(e(g)), v.value = !1, 
                        s.value = !0);
                    },
                    handleEnterClick: () => {
                        a == null || a.handleItemClick(e(g));
                    }
                };
            })(f), {
                arrowKls: o,
                headKls: b,
                rootKls: n,
                itemWrapperKls: c,
                itemContentKls: y,
                scopedContentId: N,
                scopedHeadId: G
            } = ((d, {
                focusing: a,
                isActive: t,
                id: v
            }) => {
                const s = $("collapse"), K = i(() => [ s.b("item"), s.is("active", e(t)), s.is("disabled", d.disabled) ]), _ = i(() => [ s.be("item", "header"), s.is("active", e(t)), {
                    focusing: e(a) && !d.disabled
                } ]);
                return {
                    arrowKls: i(() => [ s.be("item", "arrow"), s.is("active", e(t)) ]),
                    headKls: _,
                    rootKls: K,
                    itemWrapperKls: i(() => s.be("item", "wrap")),
                    itemContentKls: i(() => s.be("item", "content")),
                    scopedContentId: i(() => s.b(`content-${e(v)}`)),
                    scopedHeadId: i(() => s.b(`head-${e(v)}`))
                };
            })(f, {
                focusing: h,
                isActive: u,
                id: A
            });
            return x({
                isActive: u
            }), (d, a) => (M(), O("div", {
                class: p(e(n))
            }, [ E("button", {
                id: e(G),
                class: p(e(b)),
                "aria-expanded": e(u),
                "aria-controls": e(N),
                "aria-describedby": e(N),
                tabindex: d.disabled ? -1 : 0,
                type: "button",
                onClick: a[0] || (a[0] = (...t) => e(l) && e(l)(...t)),
                onKeydown: a[1] || (a[1] = be(fe((...t) => e(m) && e(m)(...t), [ "stop", "prevent" ]), [ "space", "enter" ])),
                onFocus: a[2] || (a[2] = (...t) => e(C) && e(C)(...t)),
                onBlur: a[3] || (a[3] = t => h.value = !1)
            }, [ w(d.$slots, "title", {}, () => [ ue(me(d.title), 1) ]), H(e(pe), {
                class: p(e(o))
            }, {
                default: T(() => [ H(e(ve)) ]),
                _: 1
            }, 8, [ "class" ]) ], 42, Z), H(e(ye), null, {
                default: T(() => [ he(E("div", {
                    id: e(N),
                    role: "region",
                    class: p(e(c)),
                    "aria-hidden": !e(u),
                    "aria-labelledby": e(G)
                }, [ E("div", {
                    class: p(e(y))
                }, [ w(d.$slots, "default") ], 2) ], 10, ee), [ [ Ce, e(u) ] ]) ]),
                _: 3
            }) ], 2));
        }
    }), [ [ "__file", "collapse-item.vue" ] ]);
    q = Ke(X, {
        CollapseItem: B
    }), j = _e(B);
});

export {
    j as E,
    xe as __tla,
    q as a
};