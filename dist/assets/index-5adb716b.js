import {
    aD as Ke,
    b1 as W,
    ci as Me,
    bX as I,
    aG as P,
    d as G,
    r as C,
    b0 as E,
    e as F,
    b9 as J,
    cj as Pe,
    aH as A,
    a as T,
    w as ae,
    bM as Ge,
    aI as $,
    ck as x,
    aT as h,
    o as B,
    C as z,
    l as g,
    k as _,
    aK as Le,
    cl as ze,
    cm as ie,
    n as Oe,
    J as se,
    cn as Ae,
    co as He,
    K as Ne,
    cp as Je,
    aQ as de,
    c5 as Ue,
    cq as Ye,
    b8 as ue,
    aE as q,
    a$ as je,
    bi as Ve,
    cr as We,
    aV as qe,
    cs as Qe,
    c as U,
    ct as Xe,
    aJ as H,
    z as Q,
    D as X,
    cu as ce,
    cv as Ze,
    cw as en,
    t as nn,
    aY as on,
    H as Z,
    F as tn,
    cx as pe,
    cy as ln,
    cz as ve,
    cA as rn,
    cB as an,
    cC as sn,
    x as dn,
    cD as un,
    cE as cn,
    aL as pn,
    aM as fe,
    __tla as vn
} from "./index-6c08ea4c.js";

let me, ge, be, fn = Promise.all([ (() => {
    try {
        return vn;
    } catch {}
})() ]).then(async () => {
    const we = Ke({
        style: {
            type: W([ String, Array, Object ])
        },
        currentTabId: {
            type: W(String)
        },
        defaultCurrentTabId: String,
        loop: Boolean,
        dir: {
            type: String,
            values: [ "ltr", "rtl" ],
            default: "ltr"
        },
        orientation: {
            type: W(String)
        },
        onBlur: Function,
        onFocus: Function,
        onMousedown: Function
    }), {
        ElCollection: he,
        ElCollectionItem: ye,
        COLLECTION_INJECTION_KEY: Y,
        COLLECTION_ITEM_INJECTION_KEY: Ie
    } = Me("RovingFocusGroup"), j = Symbol("elRovingFocusGroup"), ee = Symbol("elRovingFocusGroupItem"), Ee = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    }, Fe = (e, n, c) => {
        const a = ((d, u) => {
            if (u !== "rtl") return d;
            switch (d) {
              case I.right:
                return I.left;

              case I.left:
                return I.right;

              default:
                return d;
            }
        })(e.key, c);
        if (!(n === "vertical" && [ I.left, I.right ].includes(a) || n === "horizontal" && [ I.up, I.down ].includes(a))) return Ee[a];
    }, V = e => {
        const {
            activeElement: n
        } = document;
        for (const c of e) if (c === n || (c.focus(), n !== document.activeElement)) return;
    }, ne = "currentTabIdChange", oe = "rovingFocusGroup.entryFocus", Ce = {
        bubbles: !1,
        cancelable: !0
    }, _e = G({
        name: "ElRovingFocusGroupImpl",
        inheritAttrs: !1,
        props: we,
        emits: [ ne, "entryFocus" ],
        setup(e, {
            emit: n
        }) {
            var c;
            const a = C((c = e.currentTabId || e.defaultCurrentTabId) != null ? c : null), d = C(!1), u = C(!1), i = C(null), {
                getItems: r
            } = E(Y, void 0), v = F(() => [ {
                outline: "none"
            }, e.style ]), b = x(l => {
                var s;
                (s = e.onMousedown) == null || s.call(e, l);
            }, () => {
                u.value = !0;
            }), w = x(l => {
                var s;
                (s = e.onFocus) == null || s.call(e, l);
            }, l => {
                const s = !T(u), {
                    target: f,
                    currentTarget: y
                } = l;
                if (f === y && s && !T(d)) {
                    const K = new Event(oe, Ce);
                    if (y == null || y.dispatchEvent(K), !K.defaultPrevented) {
                        const R = r().filter(m => m.focusable), S = [ R.find(m => m.active), R.find(m => m.id === T(a)), ...R ].filter(Boolean).map(m => m.ref);
                        V(S);
                    }
                }
                u.value = !1;
            }), t = x(l => {
                var s;
                (s = e.onBlur) == null || s.call(e, l);
            }, () => {
                d.value = !1;
            });
            J(j, {
                currentTabbedId: Pe(a),
                loop: A(e, "loop"),
                tabIndex: F(() => T(d) ? -1 : 0),
                rovingFocusGroupRef: i,
                rovingFocusGroupRootStyle: v,
                orientation: A(e, "orientation"),
                dir: A(e, "dir"),
                onItemFocus: l => {
                    n(ne, l);
                },
                onItemShiftTab: () => {
                    d.value = !0;
                },
                onBlur: t,
                onFocus: w,
                onMousedown: b
            }), ae(() => e.currentTabId, l => {
                a.value = l ?? null;
            }), Ge(i, oe, (...l) => {
                n("entryFocus", ...l);
            });
        }
    });
    var Re = P(G({
        name: "ElRovingFocusGroup",
        components: {
            ElFocusGroupCollection: he,
            ElRovingFocusGroupImpl: P(_e, [ [ "render", function(e, n, c, a, d, u) {
                return $(e.$slots, "default");
            } ], [ "__file", "roving-focus-group-impl.vue" ] ])
        }
    }), [ [ "render", function(e, n, c, a, d, u) {
        const i = h("el-roving-focus-group-impl"), r = h("el-focus-group-collection");
        return B(), z(r, null, {
            default: g(() => [ _(i, Le(ze(e.$attrs)), {
                default: g(() => [ $(e.$slots, "default") ]),
                _: 3
            }, 16) ]),
            _: 3
        });
    } ], [ "__file", "roving-focus-group.vue" ] ]), ke = P(G({
        components: {
            ElRovingFocusCollectionItem: ye
        },
        props: {
            focusable: {
                type: Boolean,
                default: !0
            },
            active: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "mousedown", "focus", "keydown" ],
        setup(e, {
            emit: n
        }) {
            const {
                currentTabbedId: c,
                loop: a,
                onItemFocus: d,
                onItemShiftTab: u
            } = E(j, void 0), {
                getItems: i
            } = E(Y, void 0), r = ie(), v = C(null), b = x(s => {
                n("mousedown", s);
            }, s => {
                e.focusable ? d(T(r)) : s.preventDefault();
            }), w = x(s => {
                n("focus", s);
            }, () => {
                d(T(r));
            }), t = x(s => {
                n("keydown", s);
            }, s => {
                const {
                    key: f,
                    shiftKey: y,
                    target: K,
                    currentTarget: R
                } = s;
                if (f === I.tab && y) return void u();
                if (K !== R) return;
                const S = Fe(s);
                if (S) {
                    s.preventDefault();
                    let o = i().filter(p => p.focusable).map(p => p.ref);
                    switch (S) {
                      case "last":
                        o.reverse();
                        break;

                      case "prev":
                      case "next":
                        {
                            S === "prev" && o.reverse();
                            const p = o.indexOf(R);
                            o = a.value ? (D = p + 1, (m = o).map((k, M) => m[(M + D) % m.length])) : o.slice(p + 1);
                            break;
                        }
                    }
                    Oe(() => {
                        V(o);
                    });
                }
                var m, D;
            }), l = F(() => c.value === T(r));
            return J(ee, {
                rovingFocusGroupItemRef: v,
                tabIndex: F(() => T(l) ? 0 : -1),
                handleMousedown: b,
                handleFocus: w,
                handleKeydown: t
            }), {
                id: r,
                handleKeydown: t,
                handleFocus: w,
                handleMousedown: b
            };
        }
    }), [ [ "render", function(e, n, c, a, d, u) {
        const i = h("el-roving-focus-collection-item");
        return B(), z(i, {
            id: e.id,
            focusable: e.focusable,
            active: e.active
        }, {
            default: g(() => [ $(e.$slots, "default") ]),
            _: 3
        }, 8, [ "id", "focusable", "active" ]);
    } ], [ "__file", "roving-focus-item.vue" ] ]);
    const N = Symbol("elDropdown"), {
        ButtonGroup: Te
    } = se;
    var xe = P(G({
        name: "ElDropdown",
        components: {
            ElButton: se,
            ElButtonGroup: Te,
            ElScrollbar: Ae,
            ElDropdownCollection: He,
            ElTooltip: Ne,
            ElRovingFocusGroup: Re,
            ElOnlyChild: Je,
            ElIcon: de,
            ArrowDown: Ue
        },
        props: Ye,
        emits: [ "visible-change", "click", "command" ],
        setup(e, {
            emit: n
        }) {
            const c = ue(), a = q("dropdown"), {
                t: d
            } = je(), u = C(), i = C(), r = C(null), v = C(null), b = C(null), w = C(null), t = C(!1), l = [ I.enter, I.space, I.down ], s = F(() => ({
                maxHeight: Ve(e.maxHeight)
            })), f = F(() => [ a.m(m.value) ]), y = F(() => We(e.trigger)), K = ie().value, R = F(() => e.id || K);
            function S() {
                var o;
                (o = r.value) == null || o.onClose();
            }
            ae([ u, y ], ([ o, p ], [ k ]) => {
                var M, O, L;
                (M = k == null ? void 0 : k.$el) != null && M.removeEventListener && k.$el.removeEventListener("pointerenter", D), 
                (O = o == null ? void 0 : o.$el) != null && O.removeEventListener && o.$el.removeEventListener("pointerenter", D), 
                (L = o == null ? void 0 : o.$el) != null && L.addEventListener && p.includes("hover") && o.$el.addEventListener("pointerenter", D);
            }, {
                immediate: !0
            }), qe(() => {
                var o, p;
                (p = (o = u.value) == null ? void 0 : o.$el) != null && p.removeEventListener && u.value.$el.removeEventListener("pointerenter", D);
            });
            const m = Qe();
            function D() {
                var o, p;
                (p = (o = u.value) == null ? void 0 : o.$el) == null || p.focus();
            }
            return J(N, {
                contentRef: v,
                role: F(() => e.role),
                triggerId: R,
                isUsingKeyboard: t,
                onItemEnter: function() {},
                onItemLeave: function() {
                    const o = T(v);
                    y.value.includes("hover") && (o == null || o.focus()), w.value = null;
                }
            }), J("elDropdown", {
                instance: c,
                dropdownSize: m,
                handleClick: function() {
                    S();
                },
                commandHandler: function(...o) {
                    n("command", ...o);
                },
                trigger: A(e, "trigger"),
                hideOnClick: A(e, "hideOnClick")
            }), {
                t: d,
                ns: a,
                scrollbar: b,
                wrapStyle: s,
                dropdownTriggerKls: f,
                dropdownSize: m,
                triggerId: R,
                triggerKeys: l,
                currentTabId: w,
                handleCurrentTabIdChange: function(o) {
                    w.value = o;
                },
                handlerMainButtonClick: o => {
                    n("click", o);
                },
                handleEntryFocus: function(o) {
                    t.value || (o.preventDefault(), o.stopImmediatePropagation());
                },
                handleClose: S,
                handleOpen: function() {
                    var o;
                    (o = r.value) == null || o.onOpen();
                },
                handleBeforeShowTooltip: function() {
                    n("visible-change", !0);
                },
                handleShowTooltip: function(o) {
                    (o == null ? void 0 : o.type) === "keydown" && v.value.focus();
                },
                handleBeforeHideTooltip: function() {
                    n("visible-change", !1);
                },
                onFocusAfterTrapped: o => {
                    var p, k;
                    o.preventDefault(), (k = (p = v.value) == null ? void 0 : p.focus) == null || k.call(p, {
                        preventScroll: !0
                    });
                },
                popperRef: r,
                contentRef: v,
                triggeringElementRef: u,
                referenceElementRef: i
            };
        }
    }), [ [ "render", function(e, n, c, a, d, u) {
        var i;
        const r = h("el-dropdown-collection"), v = h("el-roving-focus-group"), b = h("el-scrollbar"), w = h("el-only-child"), t = h("el-tooltip"), l = h("el-button"), s = h("arrow-down"), f = h("el-icon"), y = h("el-button-group");
        return B(), U("div", {
            class: Q([ e.ns.b(), e.ns.is("disabled", e.disabled) ])
        }, [ _(t, {
            ref: "popperRef",
            role: e.role,
            effect: e.effect,
            "fallback-placements": [ "bottom", "top" ],
            "popper-options": e.popperOptions,
            "gpu-acceleration": !1,
            "hide-after": e.trigger === "hover" ? e.hideTimeout : 0,
            "manual-mode": !0,
            placement: e.placement,
            "popper-class": [ e.ns.e("popper"), e.popperClass ],
            "reference-element": (i = e.referenceElementRef) == null ? void 0 : i.$el,
            trigger: e.trigger,
            "trigger-keys": e.triggerKeys,
            "trigger-target-el": e.contentRef,
            "show-after": e.trigger === "hover" ? e.showTimeout : 0,
            "stop-popper-mouse-event": !1,
            "virtual-ref": e.triggeringElementRef,
            "virtual-triggering": e.splitButton,
            disabled: e.disabled,
            transition: `${e.ns.namespace.value}-zoom-in-top`,
            teleported: e.teleported,
            pure: "",
            persistent: "",
            onBeforeShow: e.handleBeforeShowTooltip,
            onShow: e.handleShowTooltip,
            onBeforeHide: e.handleBeforeHideTooltip
        }, Xe({
            content: g(() => [ _(b, {
                ref: "scrollbar",
                "wrap-style": e.wrapStyle,
                tag: "div",
                "view-class": e.ns.e("list")
            }, {
                default: g(() => [ _(v, {
                    loop: e.loop,
                    "current-tab-id": e.currentTabId,
                    orientation: "horizontal",
                    onCurrentTabIdChange: e.handleCurrentTabIdChange,
                    onEntryFocus: e.handleEntryFocus
                }, {
                    default: g(() => [ _(r, null, {
                        default: g(() => [ $(e.$slots, "dropdown") ]),
                        _: 3
                    }) ]),
                    _: 3
                }, 8, [ "loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus" ]) ]),
                _: 3
            }, 8, [ "wrap-style", "view-class" ]) ]),
            _: 2
        }, [ e.splitButton ? void 0 : {
            name: "default",
            fn: g(() => [ _(w, {
                id: e.triggerId,
                ref: "triggeringElementRef",
                role: "button",
                tabindex: e.tabindex
            }, {
                default: g(() => [ $(e.$slots, "default") ]),
                _: 3
            }, 8, [ "id", "tabindex" ]) ])
        } ]), 1032, [ "role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "onBeforeShow", "onShow", "onBeforeHide" ]), e.splitButton ? (B(), 
        z(y, {
            key: 0
        }, {
            default: g(() => [ _(l, H({
                ref: "referenceElementRef"
            }, e.buttonProps, {
                size: e.dropdownSize,
                type: e.type,
                disabled: e.disabled,
                tabindex: e.tabindex,
                onClick: e.handlerMainButtonClick
            }), {
                default: g(() => [ $(e.$slots, "default") ]),
                _: 3
            }, 16, [ "size", "type", "disabled", "tabindex", "onClick" ]), _(l, H({
                id: e.triggerId,
                ref: "triggeringElementRef"
            }, e.buttonProps, {
                role: "button",
                size: e.dropdownSize,
                type: e.type,
                class: e.ns.e("caret-button"),
                disabled: e.disabled,
                tabindex: e.tabindex,
                "aria-label": e.t("el.dropdown.toggleDropdown")
            }), {
                default: g(() => [ _(f, {
                    class: Q(e.ns.e("icon"))
                }, {
                    default: g(() => [ _(s) ]),
                    _: 1
                }, 8, [ "class" ]) ]),
                _: 1
            }, 16, [ "id", "size", "type", "class", "disabled", "tabindex", "aria-label" ]) ]),
            _: 3
        })) : X("v-if", !0) ], 2);
    } ], [ "__file", "dropdown.vue" ] ]);
    const Se = G({
        name: "DropdownItemImpl",
        components: {
            ElIcon: de
        },
        props: ce,
        emits: [ "pointermove", "pointerleave", "click", "clickimpl" ],
        setup(e, {
            emit: n
        }) {
            const c = q("dropdown"), {
                role: a
            } = E(N, void 0), {
                collectionItemRef: d
            } = E(Ze, void 0), {
                collectionItemRef: u
            } = E(Ie, void 0), {
                rovingFocusGroupItemRef: i,
                tabIndex: r,
                handleFocus: v,
                handleKeydown: b,
                handleMousedown: w
            } = E(ee, void 0), t = pe(d, u, i), l = F(() => a.value === "menu" ? "menuitem" : a.value === "navigation" ? "link" : "button"), s = x(f => {
                const {
                    code: y
                } = f;
                if (y === I.enter || y === I.space) return f.preventDefault(), f.stopImmediatePropagation(), 
                n("clickimpl", f), !0;
            }, b);
            return {
                ns: c,
                itemRef: t,
                dataset: {
                    [en]: ""
                },
                role: l,
                tabIndex: r,
                handleFocus: v,
                handleKeydown: s,
                handleMousedown: w
            };
        }
    }), Be = [ "aria-disabled", "tabindex", "role" ], te = () => {
        const e = E("elDropdown", {}), n = F(() => e == null ? void 0 : e.dropdownSize);
        return {
            elDropdown: e,
            _elDropdownSize: n
        };
    };
    var le = P(G({
        name: "ElDropdownItem",
        components: {
            ElDropdownCollectionItem: ln,
            ElRovingFocusItem: ke,
            ElDropdownItemImpl: P(Se, [ [ "render", function(e, n, c, a, d, u) {
                const i = h("el-icon");
                return B(), U(tn, null, [ e.divided ? (B(), U("li", H({
                    key: 0,
                    role: "separator",
                    class: e.ns.bem("menu", "item", "divided")
                }, e.$attrs), null, 16)) : X("v-if", !0), nn("li", H({
                    ref: e.itemRef
                }, {
                    ...e.dataset,
                    ...e.$attrs
                }, {
                    "aria-disabled": e.disabled,
                    class: [ e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled) ],
                    tabindex: e.tabIndex,
                    role: e.role,
                    onClick: n[0] || (n[0] = r => e.$emit("clickimpl", r)),
                    onFocus: n[1] || (n[1] = (...r) => e.handleFocus && e.handleFocus(...r)),
                    onKeydown: n[2] || (n[2] = Z((...r) => e.handleKeydown && e.handleKeydown(...r), [ "self" ])),
                    onMousedown: n[3] || (n[3] = (...r) => e.handleMousedown && e.handleMousedown(...r)),
                    onPointermove: n[4] || (n[4] = r => e.$emit("pointermove", r)),
                    onPointerleave: n[5] || (n[5] = r => e.$emit("pointerleave", r))
                }), [ e.icon ? (B(), z(i, {
                    key: 0
                }, {
                    default: g(() => [ (B(), z(on(e.icon))) ]),
                    _: 1
                })) : X("v-if", !0), $(e.$slots, "default") ], 16, Be) ], 64);
            } ], [ "__file", "dropdown-item-impl.vue" ] ])
        },
        inheritAttrs: !1,
        props: ce,
        emits: [ "pointermove", "pointerleave", "click" ],
        setup(e, {
            emit: n,
            attrs: c
        }) {
            const {
                elDropdown: a
            } = te(), d = ue(), u = C(null), i = F(() => {
                var t, l;
                return (l = (t = T(u)) == null ? void 0 : t.textContent) != null ? l : "";
            }), {
                onItemEnter: r,
                onItemLeave: v
            } = E(N, void 0), b = x(t => (n("pointermove", t), t.defaultPrevented), ve(t => {
                if (e.disabled) return void v(t);
                const l = t.currentTarget;
                l === document.activeElement || l.contains(document.activeElement) || (r(t), 
                t.defaultPrevented || l == null || l.focus());
            })), w = x(t => (n("pointerleave", t), t.defaultPrevented), ve(t => {
                v(t);
            }));
            return {
                handleClick: x(t => {
                    if (!e.disabled) return n("click", t), t.type !== "keydown" && t.defaultPrevented;
                }, t => {
                    var l, s, f;
                    e.disabled ? t.stopImmediatePropagation() : ((l = a == null ? void 0 : a.hideOnClick) != null && l.value && ((s = a.handleClick) == null || s.call(a)), 
                    (f = a.commandHandler) == null || f.call(a, e.command, d, t));
                }),
                handlePointerMove: b,
                handlePointerLeave: w,
                textContent: i,
                propsAndAttrs: F(() => ({
                    ...e,
                    ...c
                }))
            };
        }
    }), [ [ "render", function(e, n, c, a, d, u) {
        var i;
        const r = h("el-dropdown-item-impl"), v = h("el-roving-focus-item"), b = h("el-dropdown-collection-item");
        return B(), z(b, {
            disabled: e.disabled,
            "text-value": (i = e.textValue) != null ? i : e.textContent
        }, {
            default: g(() => [ _(v, {
                focusable: !e.disabled
            }, {
                default: g(() => [ _(r, H(e.propsAndAttrs, {
                    onPointerleave: e.handlePointerLeave,
                    onPointermove: e.handlePointerMove,
                    onClickimpl: e.handleClick
                }), {
                    default: g(() => [ $(e.$slots, "default") ]),
                    _: 3
                }, 16, [ "onPointerleave", "onPointermove", "onClickimpl" ]) ]),
                _: 3
            }, 8, [ "focusable" ]) ]),
            _: 3
        }, 8, [ "disabled", "text-value" ]);
    } ], [ "__file", "dropdown-item.vue" ] ]);
    const De = G({
        name: "ElDropdownMenu",
        props: rn,
        setup(e) {
            const n = q("dropdown"), {
                _elDropdownSize: c
            } = te(), a = c.value, {
                focusTrapRef: d,
                onKeydown: u
            } = E(an, void 0), {
                contentRef: i,
                role: r,
                triggerId: v
            } = E(N, void 0), {
                collectionRef: b,
                getItems: w
            } = E(sn, void 0), {
                rovingFocusGroupRef: t,
                rovingFocusGroupRootStyle: l,
                tabIndex: s,
                onBlur: f,
                onFocus: y,
                onMousedown: K
            } = E(j, void 0), {
                collectionRef: R
            } = E(Y, void 0), S = F(() => [ n.b("menu"), n.bm("menu", a == null ? void 0 : a.value) ]), m = pe(i, b, d, t, R), D = x(o => {
                var p;
                (p = e.onKeydown) == null || p.call(e, o);
            }, o => {
                const {
                    currentTarget: p,
                    code: k,
                    target: M
                } = o;
                if (p.contains(M), I.tab === k && o.stopImmediatePropagation(), 
                o.preventDefault(), M !== T(i) || !un.includes(k)) return;
                const O = w().filter(L => !L.disabled).map(L => L.ref);
                cn.includes(k) && O.reverse(), V(O);
            });
            return {
                size: a,
                rovingFocusGroupRootStyle: l,
                tabIndex: s,
                dropdownKls: S,
                role: r,
                triggerId: v,
                dropdownListWrapperRef: m,
                handleKeydown: o => {
                    D(o), u(o);
                },
                onBlur: f,
                onFocus: y,
                onMousedown: K
            };
        }
    }), $e = [ "role", "aria-labelledby" ];
    var re = P(De, [ [ "render", function(e, n, c, a, d, u) {
        return B(), U("ul", {
            ref: e.dropdownListWrapperRef,
            class: Q(e.dropdownKls),
            style: dn(e.rovingFocusGroupRootStyle),
            tabindex: -1,
            role: e.role,
            "aria-labelledby": e.triggerId,
            onBlur: n[0] || (n[0] = (...i) => e.onBlur && e.onBlur(...i)),
            onFocus: n[1] || (n[1] = (...i) => e.onFocus && e.onFocus(...i)),
            onKeydown: n[2] || (n[2] = Z((...i) => e.handleKeydown && e.handleKeydown(...i), [ "self" ])),
            onMousedown: n[3] || (n[3] = Z((...i) => e.onMousedown && e.onMousedown(...i), [ "self" ]))
        }, [ $(e.$slots, "default") ], 46, $e);
    } ], [ "__file", "dropdown-menu.vue" ] ]);
    me = pn(xe, {
        DropdownItem: le,
        DropdownMenu: re
    }), ge = fe(le), be = fe(re);
});

export {
    me as E,
    fn as __tla,
    ge as a,
    be as b
};