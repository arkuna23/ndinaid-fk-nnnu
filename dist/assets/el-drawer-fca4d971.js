import {
    aD as U,
    bd as K,
    be as V,
    d as C,
    bf as W,
    bg as X,
    e as y,
    r as w,
    aE as Y,
    a$ as Z,
    bh as ee,
    bi as ae,
    o as l,
    C as te,
    k as r,
    l as f,
    A as se,
    a as e,
    bj as le,
    bk as oe,
    t as L,
    aJ as re,
    H as de,
    z as s,
    c as d,
    aI as u,
    B as ie,
    D as o,
    aQ as ne,
    bl as ce,
    G as fe,
    ai as ue,
    bm as be,
    aG as pe,
    aL as ve,
    __tla as ye
} from "./index-6c08ea4c.js";

let E, he = Promise.all([ (() => {
    try {
        return ye;
    } catch {}
})() ]).then(async () => {
    const F = U({
        ...K,
        direction: {
            type: String,
            default: "rtl",
            values: [ "ltr", "rtl", "ttb", "btt" ]
        },
        size: {
            type: [ String, Number ],
            default: "30%"
        },
        withHeader: {
            type: Boolean,
            default: !0
        },
        modalFade: {
            type: Boolean,
            default: !0
        },
        headerAriaLevel: {
            type: String,
            default: "2"
        }
    }), R = V, $ = [ "aria-label", "aria-labelledby", "aria-describedby" ], g = [ "id", "aria-level" ], S = [ "aria-label" ], x = [ "id" ], z = C({
        name: "ElDrawer",
        inheritAttrs: !1
    });
    E = ve(pe(C({
        ...z,
        props: F,
        emits: R,
        setup(B, {
            expose: D
        }) {
            const i = B, I = W();
            X({
                scope: "el-drawer",
                from: "the title slot",
                replacement: "the header slot",
                version: "3.0.0",
                ref: "https://element-plus.org/en-US/component/drawer.html#slots"
            }, y(() => !!I.title));
            const b = w(), h = w(), t = Y("drawer"), {
                t: T
            } = Z(), {
                afterEnter: m,
                afterLeave: k,
                beforeLeave: P,
                visible: p,
                rendered: q,
                titleId: v,
                bodyId: A,
                zIndex: G,
                onModalClick: H,
                onOpenAutoFocus: O,
                onCloseAutoFocus: j,
                onFocusoutPrevented: J,
                onCloseRequested: M,
                handleClose: n
            } = ee(i, b), N = y(() => i.direction === "rtl" || i.direction === "ltr"), _ = y(() => ae(i.size));
            return D({
                handleClose: n,
                afterEnter: m,
                afterLeave: k
            }), (a, c) => (l(), te(be, {
                to: "body",
                disabled: !a.appendToBody
            }, [ r(ue, {
                name: e(t).b("fade"),
                onAfterEnter: e(m),
                onAfterLeave: e(k),
                onBeforeLeave: e(P),
                persisted: ""
            }, {
                default: f(() => [ se(r(e(le), {
                    mask: a.modal,
                    "overlay-class": a.modalClass,
                    "z-index": e(G),
                    onClick: e(H)
                }, {
                    default: f(() => [ r(e(oe), {
                        loop: "",
                        trapped: e(p),
                        "focus-trap-el": b.value,
                        "focus-start-el": h.value,
                        onFocusAfterTrapped: e(O),
                        onFocusAfterReleased: e(j),
                        onFocusoutPrevented: e(J),
                        onReleaseRequested: e(M)
                    }, {
                        default: f(() => [ L("div", re({
                            ref_key: "drawerRef",
                            ref: b,
                            "aria-modal": "true",
                            "aria-label": a.title || void 0,
                            "aria-labelledby": a.title ? void 0 : e(v),
                            "aria-describedby": e(A)
                        }, a.$attrs, {
                            class: [ e(t).b(), a.direction, e(p) && "open" ],
                            style: e(N) ? "width: " + e(_) : "height: " + e(_),
                            role: "dialog",
                            onClick: c[1] || (c[1] = de(() => {}, [ "stop" ]))
                        }), [ L("span", {
                            ref_key: "focusStartRef",
                            ref: h,
                            class: s(e(t).e("sr-focus")),
                            tabindex: "-1"
                        }, null, 2), a.withHeader ? (l(), d("header", {
                            key: 0,
                            class: s(e(t).e("header"))
                        }, [ a.$slots.title ? u(a.$slots, "title", {
                            key: 1
                        }, () => [ o(" DEPRECATED SLOT ") ]) : u(a.$slots, "header", {
                            key: 0,
                            close: e(n),
                            titleId: e(v),
                            titleClass: e(t).e("title")
                        }, () => [ a.$slots.title ? o("v-if", !0) : (l(), d("span", {
                            key: 0,
                            id: e(v),
                            role: "heading",
                            "aria-level": a.headerAriaLevel,
                            class: s(e(t).e("title"))
                        }, ie(a.title), 11, g)) ]), a.showClose ? (l(), d("button", {
                            key: 2,
                            "aria-label": e(T)("el.drawer.close"),
                            class: s(e(t).e("close-btn")),
                            type: "button",
                            onClick: c[0] || (c[0] = (...Q) => e(n) && e(n)(...Q))
                        }, [ r(e(ne), {
                            class: s(e(t).e("close"))
                        }, {
                            default: f(() => [ r(e(ce)) ]),
                            _: 1
                        }, 8, [ "class" ]) ], 10, S)) : o("v-if", !0) ], 2)) : o("v-if", !0), e(q) ? (l(), 
                        d("div", {
                            key: 1,
                            id: e(A),
                            class: s(e(t).e("body"))
                        }, [ u(a.$slots, "default") ], 10, x)) : o("v-if", !0), a.$slots.footer ? (l(), 
                        d("div", {
                            key: 2,
                            class: s(e(t).e("footer"))
                        }, [ u(a.$slots, "footer") ], 2)) : o("v-if", !0) ], 16, $) ]),
                        _: 3
                    }, 8, [ "trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested" ]) ]),
                    _: 3
                }, 8, [ "mask", "overlay-class", "z-index", "onClick" ]), [ [ fe, e(p) ] ]) ]),
                _: 3
            }, 8, [ "name", "onAfterEnter", "onAfterLeave", "onBeforeLeave" ]) ], 8, [ "disabled" ]));
        }
    }), [ [ "__file", "drawer.vue" ] ]));
});

export {
    E,
    he as __tla
};