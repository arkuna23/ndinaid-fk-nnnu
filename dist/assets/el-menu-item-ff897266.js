import {
    bX as T,
    b$ as Q,
    aG as ue,
    d as V,
    aE as $,
    o as R,
    C as Ce,
    l as re,
    aI as B,
    aJ as Fe,
    ai as Ge,
    c0 as U,
    c1 as ie,
    c2 as De,
    e as p,
    c3 as Ve,
    aD as ce,
    a_ as H,
    b8 as de,
    b0 as X,
    c4 as Z,
    r as k,
    c5 as He,
    aP as Je,
    U as pe,
    w as Y,
    b9 as ve,
    f as me,
    aV as Se,
    i as b,
    bF as q,
    aQ as ke,
    K as Ee,
    c6 as Ke,
    A as Oe,
    G as Qe,
    F as he,
    c7 as we,
    b1 as fe,
    b2 as Ue,
    c8 as Xe,
    aR as Ze,
    c9 as Ye,
    ca as et,
    cb as tt,
    cc as lt,
    cd as Te,
    n as nt,
    aH as at,
    aT as ot,
    c as ee,
    t as be,
    z as te,
    v as st,
    B as ut,
    aL as rt,
    aM as xe,
    __tla as it
} from "./index-6c08ea4c.js";

let Pe, $e, Ne, ct = Promise.all([ (() => {
    try {
        return it;
    } catch {}
})() ]).then(async () => {
    let ze = class {
        constructor(e, t) {
            this.parent = e, this.domNode = t, this.subIndex = 0, this.subIndex = 0, 
            this.init();
        }
        init() {
            this.subMenuItems = this.domNode.querySelectorAll("li"), this.addListeners();
        }
        gotoSubIndex(e) {
            e === this.subMenuItems.length ? e = 0 : e < 0 && (e = this.subMenuItems.length - 1), 
            this.subMenuItems[e].focus(), this.subIndex = e;
        }
        addListeners() {
            const e = this.parent.domNode;
            Array.prototype.forEach.call(this.subMenuItems, t => {
                t.addEventListener("keydown", r => {
                    let o = !1;
                    switch (r.code) {
                      case T.down:
                        this.gotoSubIndex(this.subIndex + 1), o = !0;
                        break;

                      case T.up:
                        this.gotoSubIndex(this.subIndex - 1), o = !0;
                        break;

                      case T.tab:
                        Q(e, "mouseleave");
                        break;

                      case T.enter:
                      case T.space:
                        o = !0, r.currentTarget.click();
                    }
                    return o && (r.preventDefault(), r.stopPropagation()), !1;
                });
            });
        }
    }, Ae = class {
        constructor(e, t) {
            this.domNode = e, this.submenu = null, this.submenu = null, this.init(t);
        }
        init(e) {
            this.domNode.setAttribute("tabindex", "0");
            const t = this.domNode.querySelector(`.${e}-menu`);
            t && (this.submenu = new ze(this, t)), this.addListeners();
        }
        addListeners() {
            this.domNode.addEventListener("keydown", e => {
                let t = !1;
                switch (e.code) {
                  case T.down:
                    Q(e.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(0), 
                    t = !0;
                    break;

                  case T.up:
                    Q(e.currentTarget, "mouseenter"), this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1), 
                    t = !0;
                    break;

                  case T.tab:
                    Q(e.currentTarget, "mouseleave");
                    break;

                  case T.enter:
                  case T.space:
                    t = !0, e.currentTarget.click();
                }
                t && e.preventDefault();
            });
        }
    }, _e = class {
        constructor(e, t) {
            this.domNode = e, this.init(t);
        }
        init(e) {
            const t = this.domNode.childNodes;
            Array.from(t).forEach(r => {
                r.nodeType === 1 && new Ae(r, e);
            });
        }
    };
    var Be = ue(V({
        name: "ElMenuCollapseTransition",
        setup() {
            const e = $("menu");
            return {
                listeners: {
                    onBeforeEnter: t => t.style.opacity = "0.2",
                    onEnter(t, r) {
                        U(t, `${e.namespace.value}-opacity-transition`), t.style.opacity = "1", 
                        r();
                    },
                    onAfterEnter(t) {
                        ie(t, `${e.namespace.value}-opacity-transition`), t.style.opacity = "";
                    },
                    onBeforeLeave(t) {
                        t.dataset || (t.dataset = {}), De(t, e.m("collapse")) ? (ie(t, e.m("collapse")), 
                        t.dataset.oldOverflow = t.style.overflow, t.dataset.scrollWidth = t.clientWidth.toString(), 
                        U(t, e.m("collapse"))) : (U(t, e.m("collapse")), t.dataset.oldOverflow = t.style.overflow, 
                        t.dataset.scrollWidth = t.clientWidth.toString(), ie(t, e.m("collapse"))), 
                        t.style.width = `${t.scrollWidth}px`, t.style.overflow = "hidden";
                    },
                    onLeave(t) {
                        U(t, "horizontal-collapse-transition"), t.style.width = `${t.dataset.scrollWidth}px`;
                    }
                }
            };
        }
    }), [ [ "render", function(e, t, r, o, x, O) {
        return R(), Ce(Ge, Fe({
            mode: "out-in"
        }, e.listeners), {
            default: re(() => [ B(e.$slots, "default") ]),
            _: 3
        }, 16);
    } ], [ "__file", "menu-collapse-transition.vue" ] ]);
    function Me(e, t) {
        const r = p(() => {
            let o = e.parent;
            const x = [ t.value ];
            for (;o.type.name !== "ElMenu"; ) o.props.index && x.unshift(o.props.index), 
            o = o.parent;
            return x;
        });
        return {
            parentMenu: p(() => {
                let o = e.parent;
                for (;o && ![ "ElMenu", "ElSubMenu" ].includes(o.type.name); ) o = o.parent;
                return o;
            }),
            indexPath: r
        };
    }
    function Le(e) {
        return p(() => {
            const t = e.backgroundColor;
            return t ? new Ve(t).shade(20).toString() : "";
        });
    }
    const ge = (e, t) => {
        const r = $("menu");
        return p(() => r.cssVarBlock({
            "text-color": e.textColor || "",
            "hover-text-color": e.textColor || "",
            "bg-color": e.backgroundColor || "",
            "hover-bg-color": Le(e).value || "",
            "active-color": e.activeTextColor || "",
            level: `${t}`
        }));
    }, We = ce({
        index: {
            type: String,
            required: !0
        },
        showTimeout: Number,
        hideTimeout: Number,
        popperClass: String,
        disabled: Boolean,
        teleported: {
            type: Boolean,
            default: void 0
        },
        popperOffset: Number,
        expandCloseIcon: {
            type: H
        },
        expandOpenIcon: {
            type: H
        },
        collapseCloseIcon: {
            type: H
        },
        collapseOpenIcon: {
            type: H
        }
    }), le = "ElSubMenu";
    var ne = V({
        name: le,
        props: We,
        setup(e, {
            slots: t,
            expose: r
        }) {
            const o = de(), {
                indexPath: x,
                parentMenu: O
            } = Me(o, p(() => e.index)), c = $("menu"), h = $("sub-menu"), a = X("rootMenu");
            a || Z(le, "can not inject root menu");
            const i = X(`subMenu:${O.value.uid}`);
            i || Z(le, "can not inject sub menu");
            const d = k({}), y = k({});
            let g;
            const P = k(!1), se = k(), A = k(null), F = p(() => N.value === "horizontal" && W.value ? "bottom-start" : "right-start"), L = p(() => N.value === "horizontal" && W.value || N.value === "vertical" && !a.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? E.value ? e.expandOpenIcon : e.expandCloseIcon : He : e.collapseCloseIcon && e.collapseOpenIcon ? E.value ? e.collapseOpenIcon : e.collapseCloseIcon : Je), W = p(() => i.level === 0), G = p(() => {
                const s = e.teleported;
                return s === void 0 ? W.value : s;
            }), J = p(() => a.props.collapse ? `${c.namespace.value}-zoom-in-left` : `${c.namespace.value}-zoom-in-top`), K = p(() => N.value === "horizontal" && W.value ? [ "bottom-start", "bottom-end", "top-start", "top-end", "right-start", "left-start" ] : [ "right-start", "right", "right-end", "left-start", "bottom-start", "bottom-end", "top-start", "top-end" ]), E = p(() => a.openedMenus.includes(e.index)), _ = p(() => {
                let s = !1;
                return Object.values(d.value).forEach(m => {
                    m.active && (s = !0);
                }), Object.values(y.value).forEach(m => {
                    m.active && (s = !0);
                }), s;
            }), N = p(() => a.props.mode), l = pe({
                index: e.index,
                indexPath: x,
                active: _
            }), n = ge(a.props, i.level + 1), u = p(() => {
                var s;
                return (s = e.popperOffset) != null ? s : a.props.popperOffset;
            }), v = p(() => {
                var s;
                return (s = e.popperClass) != null ? s : a.props.popperClass;
            }), f = p(() => {
                var s;
                return (s = e.showTimeout) != null ? s : a.props.showTimeout;
            }), z = p(() => {
                var s;
                return (s = e.hideTimeout) != null ? s : a.props.hideTimeout;
            }), j = s => {
                var m, M, w;
                s || (w = (M = (m = A.value) == null ? void 0 : m.popperRef) == null ? void 0 : M.popperInstanceRef) == null || w.destroy();
            }, S = () => {
                a.props.menuTrigger === "hover" && a.props.mode === "horizontal" || a.props.collapse && a.props.mode === "vertical" || e.disabled || a.handleSubMenuClick({
                    index: e.index,
                    indexPath: x.value,
                    active: _.value
                });
            }, I = (s, m = f.value) => {
                var M;
                s.type !== "focus" && (a.props.menuTrigger === "click" && a.props.mode === "horizontal" || !a.props.collapse && a.props.mode === "vertical" || e.disabled ? i.mouseInChild.value = !0 : (i.mouseInChild.value = !0, 
                g == null || g(), {
                    stop: g
                } = we(() => {
                    a.openMenu(e.index, x.value);
                }, m), G.value && ((M = O.value.vnode.el) == null || M.dispatchEvent(new MouseEvent("mouseenter")))));
            }, C = (s = !1) => {
                var m;
                a.props.menuTrigger === "click" && a.props.mode === "horizontal" || !a.props.collapse && a.props.mode === "vertical" ? i.mouseInChild.value = !1 : (g == null || g(), 
                i.mouseInChild.value = !1, {
                    stop: g
                } = we(() => !P.value && a.closeMenu(e.index, x.value), z.value), 
                G.value && s && ((m = i.handleMouseleave) == null || m.call(i, !0)));
            };
            Y(() => a.props.collapse, s => j(!!s));
            {
                const s = M => {
                    y.value[M.index] = M;
                }, m = M => {
                    delete y.value[M.index];
                };
                ve(`subMenu:${o.uid}`, {
                    addSubMenu: s,
                    removeSubMenu: m,
                    handleMouseleave: C,
                    mouseInChild: P,
                    level: i.level + 1
                });
            }
            return r({
                opened: E
            }), me(() => {
                a.addSubMenu(l), i.addSubMenu(l);
            }), Se(() => {
                i.removeSubMenu(l), a.removeSubMenu(l);
            }), () => {
                var s;
                const m = [ (s = t.title) == null ? void 0 : s.call(t), b(ke, {
                    class: h.e("icon-arrow"),
                    style: {
                        transform: E.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && a.props.collapse ? "none" : "rotateZ(180deg)" : "none"
                    }
                }, {
                    default: () => q(L.value) ? b(o.appContext.components[L.value]) : b(L.value)
                }) ], M = a.isMenuPopup ? b(Ee, {
                    ref: A,
                    visible: E.value,
                    effect: "light",
                    pure: !0,
                    offset: u.value,
                    showArrow: !1,
                    persistent: !0,
                    popperClass: v.value,
                    placement: F.value,
                    teleported: G.value,
                    fallbackPlacements: K.value,
                    transition: J.value,
                    gpuAcceleration: !1
                }, {
                    content: () => {
                        var w;
                        return b("div", {
                            class: [ c.m(N.value), c.m("popup-container"), v.value ],
                            onMouseenter: D => I(D, 100),
                            onMouseleave: () => C(!0),
                            onFocus: D => I(D, 100)
                        }, [ b("ul", {
                            class: [ c.b(), c.m("popup"), c.m(`popup-${F.value}`) ],
                            style: n.value
                        }, [ (w = t.default) == null ? void 0 : w.call(t) ]) ]);
                    },
                    default: () => b("div", {
                        class: h.e("title"),
                        onClick: S
                    }, m)
                }) : b(he, {}, [ b("div", {
                    class: h.e("title"),
                    ref: se,
                    onClick: S
                }, m), b(Ke, {}, {
                    default: () => {
                        var w;
                        return Oe(b("ul", {
                            role: "menu",
                            class: [ c.b(), c.m("inline") ],
                            style: n.value
                        }, [ (w = t.default) == null ? void 0 : w.call(t) ]), [ [ Qe, E.value ] ]);
                    }
                }) ]);
                return b("li", {
                    class: [ h.b(), h.is("active", _.value), h.is("opened", E.value), h.is("disabled", e.disabled) ],
                    role: "menuitem",
                    ariaHaspopup: !0,
                    ariaExpanded: E.value,
                    onMouseenter: I,
                    onMouseleave: () => C(),
                    onFocus: I
                }, [ M ]);
            };
        }
    });
    const je = ce({
        mode: {
            type: String,
            values: [ "horizontal", "vertical" ],
            default: "vertical"
        },
        defaultActive: {
            type: String,
            default: ""
        },
        defaultOpeneds: {
            type: fe(Array),
            default: () => Ue([])
        },
        uniqueOpened: Boolean,
        router: Boolean,
        menuTrigger: {
            type: String,
            values: [ "hover", "click" ],
            default: "hover"
        },
        collapse: Boolean,
        backgroundColor: String,
        textColor: String,
        activeTextColor: String,
        closeOnClickOutside: Boolean,
        collapseTransition: {
            type: Boolean,
            default: !0
        },
        ellipsis: {
            type: Boolean,
            default: !0
        },
        popperOffset: {
            type: Number,
            default: 6
        },
        ellipsisIcon: {
            type: H,
            default: () => Xe
        },
        popperEffect: {
            type: String,
            values: [ "dark", "light" ],
            default: "dark"
        },
        popperClass: String,
        showTimeout: {
            type: Number,
            default: 300
        },
        hideTimeout: {
            type: Number,
            default: 300
        }
    }), ae = e => Array.isArray(e) && e.every(t => q(t));
    var Re = V({
        name: "ElMenu",
        props: je,
        emits: {
            close: (e, t) => q(e) && ae(t),
            open: (e, t) => q(e) && ae(t),
            select: (e, t, r, o) => q(e) && ae(t) && lt(r) && (o === void 0 || o instanceof Promise)
        },
        setup(e, {
            emit: t,
            slots: r,
            expose: o
        }) {
            const x = de(), O = x.appContext.config.globalProperties.$router, c = k(), h = $("menu"), a = $("sub-menu"), i = k(-1), d = k(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []), y = k(e.defaultActive), g = k({}), P = k({}), se = p(() => e.mode === "horizontal" || e.mode === "vertical" && e.collapse), A = (l, n) => {
                d.value.includes(l) || (e.uniqueOpened && (d.value = d.value.filter(u => n.includes(u))), 
                d.value.push(l), t("open", l, n));
            }, F = l => {
                const n = d.value.indexOf(l);
                n !== -1 && d.value.splice(n, 1);
            }, L = (l, n) => {
                F(l), t("close", l, n);
            }, W = ({
                index: l,
                indexPath: n
            }) => {
                d.value.includes(l) ? L(l, n) : A(l, n);
            }, G = l => {
                (e.mode === "horizontal" || e.collapse) && (d.value = []);
                const {
                    index: n,
                    indexPath: u
                } = l;
                if (!Te(n) && !Te(u)) if (e.router && O) {
                    const v = l.route || n, f = O.push(v).then(z => (z || (y.value = n), 
                    z));
                    t("select", n, u, {
                        index: n,
                        indexPath: u,
                        route: v
                    }, f);
                } else y.value = n, t("select", n, u, {
                    index: n,
                    indexPath: u
                });
            }, J = () => {
                var l, n;
                if (!c.value) return -1;
                const u = Array.from((n = (l = c.value) == null ? void 0 : l.childNodes) != null ? n : []).filter(C => C.nodeName !== "#comment" && (C.nodeName !== "#text" || C.nodeValue)), v = getComputedStyle(c.value), f = Number.parseInt(v.paddingLeft, 10), z = Number.parseInt(v.paddingRight, 10), j = c.value.clientWidth - f - z;
                let S = 0, I = 0;
                return u.forEach((C, s) => {
                    S += (m => {
                        const M = getComputedStyle(m), w = Number.parseInt(M.marginLeft, 10), D = Number.parseInt(M.marginRight, 10);
                        return m.offsetWidth + w + D || 0;
                    })(C), S <= j - 64 && (I = s + 1);
                }), I === u.length ? -1 : I;
            };
            let K = !0;
            const E = () => {
                if (i.value === J()) return;
                const l = () => {
                    i.value = -1, nt(() => {
                        i.value = J();
                    });
                };
                K ? l() : ((n, u = 33.34) => {
                    let v;
                    return () => {
                        v && clearTimeout(v), v = setTimeout(() => {
                            n();
                        }, u);
                    };
                })(l)(), K = !1;
            };
            let _;
            Y(() => e.defaultActive, l => {
                g.value[l] || (y.value = ""), (n => {
                    const u = g.value, v = u[n] || y.value && u[y.value] || u[e.defaultActive];
                    y.value = v ? v.index : n;
                })(l);
            }), Y(() => e.collapse, l => {
                l && (d.value = []);
            }), Y(g.value, () => {
                const l = y.value && g.value[y.value];
                !l || e.mode === "horizontal" || e.collapse || l.indexPath.forEach(n => {
                    const u = P.value[n];
                    u && A(n, u.indexPath);
                });
            }), Ze(() => {
                e.mode === "horizontal" && e.ellipsis ? _ = Ye(c, E).stop : _ == null || _();
            });
            const N = k(!1);
            {
                const l = f => {
                    P.value[f.index] = f;
                }, n = f => {
                    delete P.value[f.index];
                };
                ve("rootMenu", pe({
                    props: e,
                    openedMenus: d,
                    items: g,
                    subMenus: P,
                    activeIndex: y,
                    isMenuPopup: se,
                    addMenuItem: f => {
                        g.value[f.index] = f;
                    },
                    removeMenuItem: f => {
                        delete g.value[f.index];
                    },
                    addSubMenu: l,
                    removeSubMenu: n,
                    openMenu: A,
                    closeMenu: L,
                    handleMenuItemClick: G,
                    handleSubMenuClick: W
                })), ve(`subMenu:${x.uid}`, {
                    addSubMenu: l,
                    removeSubMenu: n,
                    mouseInChild: N,
                    level: 0
                });
            }
            return me(() => {
                e.mode === "horizontal" && new _e(x.vnode.el, h.namespace.value);
            }), o({
                open: l => {
                    const {
                        indexPath: n
                    } = P.value[l];
                    n.forEach(u => A(u, n));
                },
                close: F,
                handleResize: E
            }), () => {
                var l, n;
                let u = (n = (l = r.default) == null ? void 0 : l.call(r)) != null ? n : [];
                const v = [];
                if (e.mode === "horizontal" && c.value) {
                    const S = et(u), I = i.value === -1 ? S : S.slice(0, i.value), C = i.value === -1 ? [] : S.slice(i.value);
                    C != null && C.length && e.ellipsis && (u = I, v.push(b(ne, {
                        index: "sub-menu-more",
                        class: a.e("hide-arrow"),
                        popperOffset: e.popperOffset
                    }, {
                        title: () => b(ke, {
                            class: a.e("icon-more")
                        }, {
                            default: () => b(e.ellipsisIcon)
                        }),
                        default: () => C
                    })));
                }
                const f = ge(e, 0), z = e.closeOnClickOutside ? [ [ tt, () => {
                    d.value.length && (N.value || (d.value.forEach(S => {
                        return t("close", S, (I = S, P.value[I].indexPath));
                        var I;
                    }), d.value = []));
                } ] ] : [], j = Oe(b("ul", {
                    key: String(e.collapse),
                    role: "menubar",
                    ref: c,
                    style: f.value,
                    class: {
                        [h.b()]: !0,
                        [h.m(e.mode)]: !0,
                        [h.m("collapse")]: e.collapse
                    }
                }, [ ...u, ...v ]), z);
                return e.collapseTransition && e.mode === "vertical" ? b(Be, () => j) : j;
            };
        }
    });
    const qe = ce({
        index: {
            type: fe([ String, null ]),
            default: null
        },
        route: {
            type: fe([ String, Object ])
        },
        disabled: Boolean
    }), oe = "ElMenuItem";
    var ye = ue(V({
        name: oe,
        components: {
            ElTooltip: Ee
        },
        props: qe,
        emits: {
            click: e => q(e.index) && Array.isArray(e.indexPath)
        },
        setup(e, {
            emit: t
        }) {
            const r = de(), o = X("rootMenu"), x = $("menu"), O = $("menu-item");
            o || Z(oe, "can not inject root menu");
            const {
                parentMenu: c,
                indexPath: h
            } = Me(r, at(e, "index")), a = X(`subMenu:${c.value.uid}`);
            a || Z(oe, "can not inject sub menu");
            const i = p(() => e.index === o.activeIndex), d = pe({
                index: e.index,
                indexPath: h,
                active: i
            });
            return me(() => {
                a.addSubMenu(d), o.addMenuItem(d);
            }), Se(() => {
                a.removeSubMenu(d), o.removeMenuItem(d);
            }), {
                parentMenu: c,
                rootMenu: o,
                active: i,
                nsMenu: x,
                nsMenuItem: O,
                handleClick: () => {
                    e.disabled || (o.handleMenuItemClick({
                        index: e.index,
                        indexPath: h.value,
                        route: e.route
                    }), t("click", d));
                }
            };
        }
    }), [ [ "render", function(e, t, r, o, x, O) {
        const c = ot("el-tooltip");
        return R(), ee("li", {
            class: te([ e.nsMenuItem.b(), e.nsMenuItem.is("active", e.active), e.nsMenuItem.is("disabled", e.disabled) ]),
            role: "menuitem",
            tabindex: "-1",
            onClick: t[0] || (t[0] = (...h) => e.handleClick && e.handleClick(...h))
        }, [ e.parentMenu.type.name === "ElMenu" && e.rootMenu.props.collapse && e.$slots.title ? (R(), 
        Ce(c, {
            key: 0,
            effect: e.rootMenu.props.popperEffect,
            placement: "right",
            "fallback-placements": [ "left" ],
            persistent: ""
        }, {
            content: re(() => [ B(e.$slots, "title") ]),
            default: re(() => [ be("div", {
                class: te(e.nsMenu.be("tooltip", "trigger"))
            }, [ B(e.$slots, "default") ], 2) ]),
            _: 3
        }, 8, [ "effect" ])) : (R(), ee(he, {
            key: 1
        }, [ B(e.$slots, "default"), B(e.$slots, "title") ], 64)) ], 2);
    } ], [ "__file", "menu-item.vue" ] ]), Ie = ue(V({
        name: "ElMenuItemGroup",
        props: {
            title: String
        },
        setup: () => ({
            ns: $("menu-item-group")
        })
    }), [ [ "render", function(e, t, r, o, x, O) {
        return R(), ee("li", {
            class: te(e.ns.b())
        }, [ be("div", {
            class: te(e.ns.e("title"))
        }, [ e.$slots.title ? B(e.$slots, "title", {
            key: 1
        }) : (R(), ee(he, {
            key: 0
        }, [ st(ut(e.title), 1) ], 64)) ], 2), be("ul", null, [ B(e.$slots, "default") ]) ], 2);
    } ], [ "__file", "menu-item-group.vue" ] ]);
    $e = rt(Re, {
        MenuItem: ye,
        MenuItemGroup: Ie,
        SubMenu: ne
    }), Pe = xe(ye), xe(Ie), Ne = xe(ne);
});

export {
    Pe as E,
    ct as __tla,
    $e as a,
    Ne as b
};