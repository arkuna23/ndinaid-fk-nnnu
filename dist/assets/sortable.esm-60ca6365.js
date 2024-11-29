function mt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), n.push.apply(n, o);
    }
    return n;
}

function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? mt(Object(n), !0).forEach(function(o) {
            Lt(e, o, n[o]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
        });
    }
    return e;
}

function et(e) {
    return et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, et(e);
}

function Lt(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function te() {
    return te = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    }, te.apply(this, arguments);
}

function jt(e, t) {
    if (e == null) return {};
    var n, o, r = function(a, l) {
        if (a == null) return {};
        var s, u, d = {}, p = Object.keys(a);
        for (u = 0; u < p.length; u++) s = p[u], l.indexOf(s) >= 0 || (d[s] = a[s]);
        return d;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}

function ne(e) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(e);
}

var oe = ne(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), xe = ne(/Edge/i), bt = ne(/firefox/i), Me = ne(/safari/i) && !ne(/chrome/i) && !ne(/android/i), yt = ne(/iP(ad|od|hone)/i), wt = ne(/chrome/i) && ne(/android/i), Et = {
    capture: !1,
    passive: !1
};

function b(e, t, n) {
    e.addEventListener(t, n, !oe && Et);
}

function m(e, t, n) {
    e.removeEventListener(t, n, !oe && Et);
}

function Be(e, t) {
    if (t) {
        if (t[0] === ">" && (t = t.substring(1)), e) try {
            if (e.matches) return e.matches(t);
            if (e.msMatchesSelector) return e.msMatchesSelector(t);
            if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
        } catch {
            return !1;
        }
        return !1;
    }
}

function Wt(e) {
    return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}

function V(e, t, n, o) {
    if (e) {
        n = n || document;
        do {
            if (t != null && (t[0] === ">" ? e.parentNode === n && Be(e, t) : Be(e, t)) || o && e === n) return e;
            if (e === n) break;
        } while (e = Wt(e));
    }
    return null;
}

var Oe, St = /\s+/g;

function F(e, t, n) {
    if (e && t) if (e.classList) e.classList[n ? "add" : "remove"](t); else {
        var o = (" " + e.className + " ").replace(St, " ").replace(" " + t + " ", " ");
        e.className = (o + (n ? " " + t : "")).replace(St, " ");
    }
}

function h(e, t, n) {
    var o = e && e.style;
    if (o) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), 
        t === void 0 ? n : n[t];
        t in o || t.indexOf("webkit") !== -1 || (t = "-webkit-" + t), o[t] = n + (typeof n == "string" ? "" : "px");
    }
}

function me(e, t) {
    var n = "";
    if (typeof e == "string") n = e; else do {
        var o = h(e, "transform");
        o && o !== "none" && (n = o + " " + n);
    } while (!t && (e = e.parentNode));
    var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return r && new r(n);
}

function _t(e, t, n) {
    if (e) {
        var o = e.getElementsByTagName(t), r = 0, i = o.length;
        if (n) for (;r < i; r++) n(o[r], r);
        return o;
    }
    return [];
}

function $() {
    var e = document.scrollingElement;
    return e || document.documentElement;
}

function x(e, t, n, o, r) {
    if (e.getBoundingClientRect || e === window) {
        var i, a, l, s, u, d, p;
        if (e !== window && e.parentNode && e !== $() ? (a = (i = e.getBoundingClientRect()).top, 
        l = i.left, s = i.bottom, u = i.right, d = i.height, p = i.width) : (a = 0, 
        l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, 
        p = window.innerWidth), (t || n) && e !== window && (r = r || e.parentNode, 
        !oe)) do {
            if (r && r.getBoundingClientRect && (h(r, "transform") !== "none" || n && h(r, "position") !== "static")) {
                var _ = r.getBoundingClientRect();
                a -= _.top + parseInt(h(r, "border-top-width")), l -= _.left + parseInt(h(r, "border-left-width")), 
                s = a + i.height, u = l + i.width;
                break;
            }
        } while (r = r.parentNode);
        if (o && e !== window) {
            var v = me(r || e), C = v && v.a, O = v && v.d;
            v && (s = (a /= O) + (d /= O), u = (l /= C) + (p /= C));
        }
        return {
            top: a,
            left: l,
            bottom: s,
            right: u,
            width: p,
            height: d
        };
    }
}

function Dt(e, t, n) {
    for (var o = le(e, !0), r = x(e)[t]; o; ) {
        var i = x(o)[n];
        if (!(n === "top" || n === "left" ? r >= i : r <= i)) return o;
        if (o === $()) break;
        o = le(o, !1);
    }
    return !1;
}

function be(e, t, n, o) {
    for (var r = 0, i = 0, a = e.children; i < a.length; ) {
        if (a[i].style.display !== "none" && a[i] !== f.ghost && (o || a[i] !== f.dragged) && V(a[i], n.draggable, e, !1)) {
            if (r === t) return a[i];
            r++;
        }
        i++;
    }
    return null;
}

function tt(e, t) {
    for (var n = e.lastElementChild; n && (n === f.ghost || h(n, "display") === "none" || t && !Be(n, t)); ) n = n.previousElementSibling;
    return n || null;
}

function z(e, t) {
    var n = 0;
    if (!e || !e.parentNode) return -1;
    for (;e = e.previousElementSibling; ) e.nodeName.toUpperCase() === "TEMPLATE" || e === f.clone || t && !Be(e, t) || n++;
    return n;
}

function Tt(e) {
    var t = 0, n = 0, o = $();
    if (e) do {
        var r = me(e), i = r.a, a = r.d;
        t += e.scrollLeft * i, n += e.scrollTop * a;
    } while (e !== o && (e = e.parentNode));
    return [ t, n ];
}

function le(e, t) {
    if (!e || !e.getBoundingClientRect) return $();
    var n = e, o = !1;
    do {
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var r = h(n);
            if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return $();
                if (o || t) return n;
                o = !0;
            }
        }
    } while (n = n.parentNode);
    return $();
}

function nt(e, t) {
    return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}

function Ct(e, t) {
    return function() {
        if (!Oe) {
            var n = arguments;
            n.length === 1 ? e.call(this, n[0]) : e.apply(this, n), Oe = setTimeout(function() {
                Oe = void 0;
            }, t);
        }
    };
}

function xt(e, t, n) {
    e.scrollLeft += t, e.scrollTop += n;
}

function Mt(e) {
    var t = window.Polymer, n = window.jQuery || window.Zepto;
    return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}

function Ot(e, t, n) {
    var o = {};
    return Array.from(e.children).forEach(function(r) {
        var i, a, l, s;
        if (V(r, t.draggable, e, !1) && !r.animated && r !== n) {
            var u = x(r);
            o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, u.left), 
            o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), 
            o.right = Math.max((l = o.right) !== null && l !== void 0 ? l : -1 / 0, u.right), 
            o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
        }
    }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, 
    o;
}

var H = "Sortable" + new Date().getTime();

function zt() {
    var e, t = [];
    return {
        captureAnimationState: function() {
            t = [], this.options.animation && [].slice.call(this.el.children).forEach(function(n) {
                if (h(n, "display") !== "none" && n !== f.ghost) {
                    t.push({
                        target: n,
                        rect: x(n)
                    });
                    var o = K({}, t[t.length - 1].rect);
                    if (n.thisAnimationDuration) {
                        var r = me(n, !0);
                        r && (o.top -= r.f, o.left -= r.e);
                    }
                    n.fromRect = o;
                }
            });
        },
        addAnimationState: function(n) {
            t.push(n);
        },
        removeAnimationState: function(n) {
            t.splice(function(o, r) {
                for (var i in o) if (o.hasOwnProperty(i)) {
                    for (var a in r) if (r.hasOwnProperty(a) && r[a] === o[i][a]) return Number(i);
                }
                return -1;
            }(t, {
                target: n
            }), 1);
        },
        animateAll: function(n) {
            var o = this;
            if (!this.options.animation) return clearTimeout(e), void (typeof n == "function" && n());
            var r = !1, i = 0;
            t.forEach(function(a) {
                var l = 0, s = a.target, u = s.fromRect, d = x(s), p = s.prevFromRect, _ = s.prevToRect, v = a.rect, C = me(s, !0);
                C && (d.top -= C.f, d.left -= C.e), s.toRect = d, s.thisAnimationDuration && nt(p, d) && !nt(u, d) && (v.top - d.top) / (v.left - d.left) == (u.top - d.top) / (u.left - d.left) && (l = function(O, w, k, Q) {
                    return Math.sqrt(Math.pow(w.top - O.top, 2) + Math.pow(w.left - O.left, 2)) / Math.sqrt(Math.pow(w.top - k.top, 2) + Math.pow(w.left - k.left, 2)) * Q.animation;
                }(v, p, _, o.options)), nt(d, u) || (s.prevFromRect = u, s.prevToRect = d, 
                l || (l = o.options.animation), o.animate(s, v, d, l)), l && (r = !0, 
                i = Math.max(i, l), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
                    s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, 
                    s.prevToRect = null, s.thisAnimationDuration = null;
                }, l), s.thisAnimationDuration = l);
            }), clearTimeout(e), r ? e = setTimeout(function() {
                typeof n == "function" && n();
            }, i) : typeof n == "function" && n(), t = [];
        },
        animate: function(n, o, r, i) {
            if (i) {
                h(n, "transition", ""), h(n, "transform", "");
                var a = me(this.el), l = a && a.a, s = a && a.d, u = (o.left - r.left) / (l || 1), d = (o.top - r.top) / (s || 1);
                n.animatingX = !!u, n.animatingY = !!d, h(n, "transform", "translate3d(" + u + "px," + d + "px,0)"), 
                this.forRepaintDummy = function(p) {
                    return p.offsetWidth;
                }(n), h(n, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), 
                h(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), 
                n.animated = setTimeout(function() {
                    h(n, "transition", ""), h(n, "transform", ""), n.animated = !1, 
                    n.animatingX = !1, n.animatingY = !1;
                }, i);
            }
        }
    };
}

var ye = [], ot = {
    initializeByDefault: !0
}, Ne = {
    mount: function(e) {
        for (var t in ot) ot.hasOwnProperty(t) && !(t in e) && (e[t] = ot[t]);
        ye.forEach(function(n) {
            if (n.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
        }), ye.push(e);
    },
    pluginEvent: function(e, t, n) {
        var o = this;
        this.eventCanceled = !1, n.cancel = function() {
            o.eventCanceled = !0;
        };
        var r = e + "Global";
        ye.forEach(function(i) {
            t[i.pluginName] && (t[i.pluginName][r] && t[i.pluginName][r](K({
                sortable: t
            }, n)), t.options[i.pluginName] && t[i.pluginName][e] && t[i.pluginName][e](K({
                sortable: t
            }, n)));
        });
    },
    initializePlugins: function(e, t, n, o) {
        for (var r in ye.forEach(function(a) {
            var l = a.pluginName;
            if (e.options[l] || a.initializeByDefault) {
                var s = new a(e, t, e.options);
                s.sortable = e, s.options = e.options, e[l] = s, te(n, s.defaults);
            }
        }), e.options) if (e.options.hasOwnProperty(r)) {
            var i = this.modifyOption(e, r, e.options[r]);
            i !== void 0 && (e.options[r] = i);
        }
    },
    getEventProperties: function(e, t) {
        var n = {};
        return ye.forEach(function(o) {
            typeof o.eventProperties == "function" && te(n, o.eventProperties.call(t[o.pluginName], e));
        }), n;
    },
    modifyOption: function(e, t, n) {
        var o;
        return ye.forEach(function(r) {
            e[r.pluginName] && r.optionListeners && typeof r.optionListeners[t] == "function" && (o = r.optionListeners[t].call(e[r.pluginName], n));
        }), o;
    }
}, Gt = [ "evt" ], Y = function(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, r = jt(n, Gt);
    Ne.pluginEvent.bind(f)(e, t, K({
        dragEl: c,
        parentEl: D,
        ghostEl: g,
        rootEl: S,
        nextEl: he,
        lastDownEl: Fe,
        cloneEl: T,
        cloneHidden: se,
        dragStarted: Pe,
        putSortable: A,
        activeSortable: f.active,
        originalEvent: o,
        oldIndex: we,
        oldDraggableIndex: Ae,
        newIndex: L,
        newDraggableIndex: ce,
        hideGhostForTarget: Yt,
        unhideGhostForTarget: Rt,
        cloneNowHidden: function() {
            se = !0;
        },
        cloneNowShown: function() {
            se = !1;
        },
        dispatchSortableEvent: function(i) {
            I({
                sortable: t,
                name: i,
                originalEvent: o
            });
        }
    }, r));
};

function I(e) {
    (function(t) {
        var n = t.sortable, o = t.rootEl, r = t.name, i = t.targetEl, a = t.cloneEl, l = t.toEl, s = t.fromEl, u = t.oldIndex, d = t.newIndex, p = t.oldDraggableIndex, _ = t.newDraggableIndex, v = t.originalEvent, C = t.putSortable, O = t.extraEventProperties;
        if (n = n || o && o[H]) {
            var w, k = n.options, Q = "on" + r.charAt(0).toUpperCase() + r.substr(1);
            !window.CustomEvent || oe || xe ? (w = document.createEvent("Event")).initEvent(r, !0, !0) : w = new CustomEvent(r, {
                bubbles: !0,
                cancelable: !0
            }), w.to = l || o, w.from = s || o, w.item = i || o, w.clone = a, w.oldIndex = u, 
            w.newIndex = d, w.oldDraggableIndex = p, w.newDraggableIndex = _, w.originalEvent = v, 
            w.pullMode = C ? C.lastPutMode : void 0;
            var j = K(K({}, O), Ne.getEventProperties(r, n));
            for (var re in j) w[re] = j[re];
            o && o.dispatchEvent(w), k[Q] && k[Q].call(n, w);
        }
    })(K({
        putSortable: A,
        cloneEl: T,
        targetEl: c,
        rootEl: S,
        oldIndex: we,
        oldDraggableIndex: Ae,
        newIndex: L,
        newDraggableIndex: ce
    }, e));
}

var c, D, g, S, he, Fe, T, se, we, L, Ae, ce, He, A, fe, q, rt, it, Nt, At, Pe, Ee, Ie, Le, P, Se = !1, je = !1, We = [], ke = !1, ze = !1, at = [], lt = !1, Ge = [], Ue = typeof document < "u", Ve = yt, Pt = xe || oe ? "cssFloat" : "float", Ut = Ue && !wt && !yt && "draggable" in document.createElement("div"), It = function() {
    if (Ue) {
        if (oe) return !1;
        var e = document.createElement("x");
        return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
    }
}(), kt = function(e, t) {
    var n = h(e), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = be(e, 0, t), i = be(e, 1, t), a = r && h(r), l = i && h(i), s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + x(r).width, u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + x(i).width;
    if (n.display === "flex") return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
    if (n.display === "grid") return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
    if (r && a.float && a.float !== "none") {
        var d = a.float === "left" ? "left" : "right";
        return !i || l.clear !== "both" && l.clear !== d ? "horizontal" : "vertical";
    }
    return r && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || s >= o && n[Pt] === "none" || i && n[Pt] === "none" && s + u > o) ? "vertical" : "horizontal";
}, Xt = function(e) {
    function t(r, i) {
        return function(a, l, s, u) {
            var d = a.options.group.name && l.options.group.name && a.options.group.name === l.options.group.name;
            if (r == null && (i || d)) return !0;
            if (r == null || r === !1) return !1;
            if (i && r === "clone") return r;
            if (typeof r == "function") return t(r(a, l, s, u), i)(a, l, s, u);
            var p = (i ? a : l).options.group.name;
            return r === !0 || typeof r == "string" && r === p || r.join && r.indexOf(p) > -1;
        };
    }
    var n = {}, o = e.group;
    o && et(o) == "object" || (o = {
        name: o
    }), n.name = o.name, n.checkPull = t(o.pull, !0), n.checkPut = t(o.put), n.revertClone = o.revertClone, 
    e.group = n;
}, Yt = function() {
    !It && g && h(g, "display", "none");
}, Rt = function() {
    !It && g && h(g, "display", "");
};

Ue && !wt && document.addEventListener("click", function(e) {
    if (je) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), 
    e.stopImmediatePropagation && e.stopImmediatePropagation(), je = !1, !1;
}, !0);

var pe = function(e) {
    if (c) {
        e = e.touches ? e.touches[0] : e;
        var t = (r = e.clientX, i = e.clientY, We.some(function(l) {
            var s = l[H].options.emptyInsertThreshold;
            if (s && !tt(l)) {
                var u = x(l), d = r >= u.left - s && r <= u.right + s, p = i >= u.top - s && i <= u.bottom + s;
                return d && p ? a = l : void 0;
            }
        }), a);
        if (t) {
            var n = {};
            for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o]);
            n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, 
            t[H]._onDragOver(n);
        }
    }
    var r, i, a;
}, Vt = function(e) {
    c && c.parentNode[H]._isOutsideThisEl(e.target);
};

function f(e, t) {
    if (!e || !e.nodeType || e.nodeType !== 1) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
    this.el = e, this.options = t = te({}, t), e[H] = this;
    var n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return kt(e, this.options);
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(i, a) {
            i.setData("Text", a.textContent);
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: f.supportPointer !== !1 && "PointerEvent" in window && !Me,
        emptyInsertThreshold: 5
    };
    for (var o in Ne.initializePlugins(this, e, n), n) !(o in t) && (t[o] = n[o]);
    for (var r in Xt(t), this) r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
    this.nativeDraggable = !t.forceFallback && Ut, this.nativeDraggable && (this.options.touchStartThreshold = 1), 
    t.supportPointer ? b(e, "pointerdown", this._onTapStart) : (b(e, "mousedown", this._onTapStart), 
    b(e, "touchstart", this._onTapStart)), this.nativeDraggable && (b(e, "dragover", this), 
    b(e, "dragenter", this)), We.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), 
    te(this, zt());
}

function qe(e, t, n, o, r, i, a, l) {
    var s, u, d = e[H], p = d.options.onMove;
    return !window.CustomEvent || oe || xe ? (s = document.createEvent("Event")).initEvent("move", !0, !0) : s = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }), s.to = t, s.from = e, s.dragged = n, s.draggedRect = o, s.related = r || t, 
    s.relatedRect = i || x(t), s.willInsertAfter = l, s.originalEvent = a, e.dispatchEvent(s), 
    p && (u = p.call(d, s, a)), u;
}

function st(e) {
    e.draggable = !1;
}

function qt() {
    lt = !1;
}

function Qt(e) {
    for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--; ) o += t.charCodeAt(n);
    return o.toString(36);
}

function Qe(e) {
    return setTimeout(e, 0);
}

function ct(e) {
    return clearTimeout(e);
}

f.prototype = {
    constructor: f,
    _isOutsideThisEl: function(e) {
        this.el.contains(e) || e === this.el || (Ee = null);
    },
    _getDirection: function(e, t) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, c) : this.options.direction;
    },
    _onTapStart: function(e) {
        if (e.cancelable) {
            var t = this, n = this.el, o = this.options, r = o.preventOnFilter, i = e.type, a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (a || e).target, s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, u = o.filter;
            if (function(d) {
                Ge.length = 0;
                for (var p = d.getElementsByTagName("input"), _ = p.length; _--; ) {
                    var v = p[_];
                    v.checked && Ge.push(v);
                }
            }(n), !c && !(/mousedown|pointerdown/.test(i) && e.button !== 0 || o.disabled) && !s.isContentEditable && (this.nativeDraggable || !Me || !l || l.tagName.toUpperCase() !== "SELECT") && !((l = V(l, o.draggable, n, !1)) && l.animated || Fe === l)) {
                if (we = z(l), Ae = z(l, o.draggable), typeof u == "function") {
                    if (u.call(this, e, l, this)) return I({
                        sortable: t,
                        rootEl: s,
                        name: "filter",
                        targetEl: l,
                        toEl: n,
                        fromEl: n
                    }), Y("filter", t, {
                        evt: e
                    }), void (r && e.cancelable && e.preventDefault());
                } else if (u && (u = u.split(",").some(function(d) {
                    if (d = V(s, d.trim(), n, !1)) return I({
                        sortable: t,
                        rootEl: d,
                        name: "filter",
                        targetEl: l,
                        fromEl: n,
                        toEl: n
                    }), Y("filter", t, {
                        evt: e
                    }), !0;
                }))) return void (r && e.cancelable && e.preventDefault());
                o.handle && !V(s, o.handle, n, !1) || this._prepareDragStart(e, a, l);
            }
        }
    },
    _prepareDragStart: function(e, t, n) {
        var o, r = this, i = r.el, a = r.options, l = i.ownerDocument;
        if (n && !c && n.parentNode === i) {
            var s = x(n);
            if (S = i, D = (c = n).parentNode, he = c.nextSibling, Fe = n, He = a.group, 
            f.dragged = c, fe = {
                target: c,
                clientX: (t || e).clientX,
                clientY: (t || e).clientY
            }, Nt = fe.clientX - s.left, At = fe.clientY - s.top, this._lastX = (t || e).clientX, 
            this._lastY = (t || e).clientY, c.style["will-change"] = "all", o = function() {
                Y("delayEnded", r, {
                    evt: e
                }), f.eventCanceled ? r._onDrop() : (r._disableDelayedDragEvents(), 
                !bt && r.nativeDraggable && (c.draggable = !0), r._triggerDragStart(e, t), 
                I({
                    sortable: r,
                    name: "choose",
                    originalEvent: e
                }), F(c, a.chosenClass, !0));
            }, a.ignore.split(",").forEach(function(u) {
                _t(c, u.trim(), st);
            }), b(l, "dragover", pe), b(l, "mousemove", pe), b(l, "touchmove", pe), 
            b(l, "mouseup", r._onDrop), b(l, "touchend", r._onDrop), b(l, "touchcancel", r._onDrop), 
            bt && this.nativeDraggable && (this.options.touchStartThreshold = 4, 
            c.draggable = !0), Y("delayStart", this, {
                evt: e
            }), !a.delay || a.delayOnTouchOnly && !t || this.nativeDraggable && (xe || oe)) o(); else {
                if (f.eventCanceled) return void this._onDrop();
                b(l, "mouseup", r._disableDelayedDrag), b(l, "touchend", r._disableDelayedDrag), 
                b(l, "touchcancel", r._disableDelayedDrag), b(l, "mousemove", r._delayedDragTouchMoveHandler), 
                b(l, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && b(l, "pointermove", r._delayedDragTouchMoveHandler), 
                r._dragStartTimer = setTimeout(o, a.delay);
            }
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var t = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
    },
    _disableDelayedDrag: function() {
        c && st(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        m(e, "mouseup", this._disableDelayedDrag), m(e, "touchend", this._disableDelayedDrag), 
        m(e, "touchcancel", this._disableDelayedDrag), m(e, "mousemove", this._delayedDragTouchMoveHandler), 
        m(e, "touchmove", this._delayedDragTouchMoveHandler), m(e, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function(e, t) {
        t = t || e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? b(document, "pointermove", this._onTouchMove) : b(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (b(c, "dragend", this), 
        b(S, "dragstart", this._onDragStart));
        try {
            document.selection ? Qe(function() {
                document.selection.empty();
            }) : window.getSelection().removeAllRanges();
        } catch {}
    },
    _dragStarted: function(e, t) {
        if (Se = !1, S && c) {
            Y("dragStarted", this, {
                evt: t
            }), this.nativeDraggable && b(document, "dragover", Vt);
            var n = this.options;
            !e && F(c, n.dragClass, !1), F(c, n.ghostClass, !0), f.active = this, 
            e && this._appendGhost(), I({
                sortable: this,
                name: "start",
                originalEvent: t
            });
        } else this._nulling();
    },
    _emulateDragOver: function() {
        if (q) {
            this._lastX = q.clientX, this._lastY = q.clientY, Yt();
            for (var e = document.elementFromPoint(q.clientX, q.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(q.clientX, q.clientY)) !== t; ) t = e;
            if (c.parentNode[H]._isOutsideThisEl(e), t) do {
                if (t[H] && t[H]._onDragOver({
                    clientX: q.clientX,
                    clientY: q.clientY,
                    target: e,
                    rootEl: t
                }) && !this.options.dragoverBubble) break;
                e = t;
            } while (t = t.parentNode);
            Rt();
        }
    },
    _onTouchMove: function(e) {
        if (fe) {
            var t = this.options, n = t.fallbackTolerance, o = t.fallbackOffset, r = e.touches ? e.touches[0] : e, i = g && me(g, !0), a = g && i && i.a, l = g && i && i.d, s = Ve && P && Tt(P), u = (r.clientX - fe.clientX + o.x) / (a || 1) + (s ? s[0] - at[0] : 0) / (a || 1), d = (r.clientY - fe.clientY + o.y) / (l || 1) + (s ? s[1] - at[1] : 0) / (l || 1);
            if (!f.active && !Se) {
                if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n) return;
                this._onDragStart(e, !0);
            }
            if (g) {
                i ? (i.e += u - (rt || 0), i.f += d - (it || 0)) : i = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: u,
                    f: d
                };
                var p = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
                h(g, "webkitTransform", p), h(g, "mozTransform", p), h(g, "msTransform", p), 
                h(g, "transform", p), rt = u, it = d, q = r;
            }
            e.cancelable && e.preventDefault();
        }
    },
    _appendGhost: function() {
        if (!g) {
            var e = this.options.fallbackOnBody ? document.body : S, t = x(c, !0, Ve, !0, e), n = this.options;
            if (Ve) {
                for (P = e; h(P, "position") === "static" && h(P, "transform") === "none" && P !== document; ) P = P.parentNode;
                P !== document.body && P !== document.documentElement ? (P === document && (P = $()), 
                t.top += P.scrollTop, t.left += P.scrollLeft) : P = $(), at = Tt(P);
            }
            F(g = c.cloneNode(!0), n.ghostClass, !1), F(g, n.fallbackClass, !0), 
            F(g, n.dragClass, !0), h(g, "transition", ""), h(g, "transform", ""), 
            h(g, "box-sizing", "border-box"), h(g, "margin", 0), h(g, "top", t.top), 
            h(g, "left", t.left), h(g, "width", t.width), h(g, "height", t.height), 
            h(g, "opacity", "0.8"), h(g, "position", Ve ? "absolute" : "fixed"), 
            h(g, "zIndex", "100000"), h(g, "pointerEvents", "none"), f.ghost = g, 
            e.appendChild(g), h(g, "transform-origin", Nt / parseInt(g.style.width) * 100 + "% " + At / parseInt(g.style.height) * 100 + "%");
        }
    },
    _onDragStart: function(e, t) {
        var n = this, o = e.dataTransfer, r = n.options;
        Y("dragStart", this, {
            evt: e
        }), f.eventCanceled ? this._onDrop() : (Y("setupClone", this), f.eventCanceled || ((T = Mt(c)).removeAttribute("id"), 
        T.draggable = !1, T.style["will-change"] = "", this._hideClone(), F(T, this.options.chosenClass, !1), 
        f.clone = T), n.cloneId = Qe(function() {
            Y("clone", n), f.eventCanceled || (n.options.removeCloneOnHide || S.insertBefore(T, c), 
            n._hideClone(), I({
                sortable: n,
                name: "clone"
            }));
        }), !t && F(c, r.dragClass, !0), t ? (je = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (m(document, "mouseup", n._onDrop), 
        m(document, "touchend", n._onDrop), m(document, "touchcancel", n._onDrop), 
        o && (o.effectAllowed = "move", r.setData && r.setData.call(n, o, c)), b(document, "drop", n), 
        h(c, "transform", "translateZ(0)")), Se = !0, n._dragStartId = Qe(n._dragStarted.bind(n, t, e)), 
        b(document, "selectstart", n), Pe = !0, Me && h(document.body, "user-select", "none"));
    },
    _onDragOver: function(e) {
        var t, n, o, r, i = this.el, a = e.target, l = this.options, s = l.group, u = f.active, d = He === s, p = l.sort, _ = A || u, v = this, C = !1;
        if (!lt) {
            if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), 
            a = V(a, l.draggable, i, !0), Z("dragOver"), f.eventCanceled) return C;
            if (c.contains(e.target) || a.animated && a.animatingX && a.animatingY || v._ignoreWhileAnimating === a) return B(!1);
            if (je = !1, u && !l.disabled && (d ? p || (o = D !== S) : A === this || (this.lastPutMode = He.checkPull(this, u, c, e)) && s.checkPut(this, u, c, e))) {
                if (r = this._getDirection(e, a) === "vertical", t = x(c), Z("dragOverValid"), 
                f.eventCanceled) return C;
                if (o) return D = S, ee(), this._hideClone(), Z("revert"), f.eventCanceled || (he ? S.insertBefore(c, he) : S.appendChild(c)), 
                B(!0);
                var O = tt(i, l.draggable);
                if (!O || function(y, X, E) {
                    var N = x(tt(E.el, E.options.draggable)), G = Ot(E.el, E.options, g), W = 10;
                    return X ? y.clientX > G.right + W || y.clientY > N.bottom && y.clientX > N.left : y.clientY > G.bottom + W || y.clientX > N.right && y.clientY > N.top;
                }(e, r, this) && !O.animated) {
                    if (O === c) return B(!1);
                    if (O && i === e.target && (a = O), a && (n = x(a)), qe(S, i, c, t, a, n, e, !!a) !== !1) return ee(), 
                    O && O.nextSibling ? i.insertBefore(c, O.nextSibling) : i.appendChild(c), 
                    D = i, de(), B(!0);
                } else if (O && function(y, X, E) {
                    var N = x(be(E.el, 0, E.options, !0)), G = Ot(E.el, E.options, g), W = 10;
                    return X ? y.clientX < G.left - W || y.clientY < N.top && y.clientX < N.right : y.clientY < G.top - W || y.clientY < N.bottom && y.clientX < N.left;
                }(e, r, this)) {
                    var w = be(i, 0, l, !0);
                    if (w === c) return B(!1);
                    if (n = x(a = w), qe(S, i, c, t, a, n, e, !1) !== !1) return ee(), 
                    i.insertBefore(c, w), D = i, de(), B(!0);
                } else if (a.parentNode === i) {
                    n = x(a);
                    var k, Q, j, re = c.parentNode !== i, ge = !function(y, X, E) {
                        var N = E ? y.left : y.top, G = E ? y.right : y.bottom, W = E ? y.width : y.height, Te = E ? X.left : X.top, $e = E ? X.right : X.bottom, U = E ? X.width : X.height;
                        return N === Te || G === $e || N + W / 2 === Te + U / 2;
                    }(c.animated && c.toRect || t, a.animated && a.toRect || n, r), ve = r ? "top" : "left", J = Dt(a, "top", "top") || Dt(c, "top", "top"), _e = J ? J.scrollTop : void 0;
                    if (Ee !== a && (Q = n[ve], ke = !1, ze = !ge && l.invertSwap || re), 
                    k = function(y, X, E, N, G, W, Te, $e) {
                        var U = N ? y.clientY : y.clientX, ae = N ? E.height : E.width, Ce = N ? E.top : E.left, Re = N ? E.bottom : E.right, Je = !1;
                        if (!Te) {
                            if ($e && Le < ae * G) {
                                if (!ke && (Ie === 1 ? U > Ce + ae * W / 2 : U < Re - ae * W / 2) && (ke = !0), 
                                ke) Je = !0; else if (Ie === 1 ? U < Ce + Le : U > Re - Le) return -Ie;
                            } else if (U > Ce + ae * (1 - G) / 2 && U < Re - ae * (1 - G) / 2) return function(Ht) {
                                return z(c) < z(Ht) ? 1 : -1;
                            }(X);
                        }
                        return (Je = Je || Te) && (U < Ce + ae * W / 2 || U > Re - ae * W / 2) ? U > Ce + ae / 2 ? 1 : -1 : 0;
                    }(e, a, n, r, ge ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, ze, Ee === a), 
                    k !== 0) {
                        var R = z(c);
                        do {
                            R -= k, j = D.children[R];
                        } while (j && (h(j, "display") === "none" || j === g));
                    }
                    if (k === 0 || j === a) return B(!1);
                    Ee = a, Ie = k;
                    var De = a.nextElementSibling, ue = !1, ie = qe(S, i, c, t, a, n, e, ue = k === 1);
                    if (ie !== !1) return ie !== 1 && ie !== -1 || (ue = ie === 1), 
                    lt = !0, setTimeout(qt, 30), ee(), ue && !De ? i.appendChild(c) : a.parentNode.insertBefore(c, ue ? De : a), 
                    J && xt(J, 0, _e - J.scrollTop), D = c.parentNode, Q === void 0 || ze || (Le = Math.abs(Q - x(a)[ve])), 
                    de(), B(!0);
                }
                if (i.contains(c)) return B(!1);
            }
            return !1;
        }
        function Z(y, X) {
            Y(y, v, K({
                evt: e,
                isOwner: d,
                axis: r ? "vertical" : "horizontal",
                revert: o,
                dragRect: t,
                targetRect: n,
                canSort: p,
                fromSortable: _,
                target: a,
                completed: B,
                onMove: function(E, N) {
                    return qe(S, i, c, t, E, x(E), e, N);
                },
                changed: de
            }, X));
        }
        function ee() {
            Z("dragOverAnimationCapture"), v.captureAnimationState(), v !== _ && _.captureAnimationState();
        }
        function B(y) {
            return Z("dragOverCompleted", {
                insertion: y
            }), y && (d ? u._hideClone() : u._showClone(v), v !== _ && (F(c, A ? A.options.ghostClass : u.options.ghostClass, !1), 
            F(c, l.ghostClass, !0)), A !== v && v !== f.active ? A = v : v === f.active && A && (A = null), 
            _ === v && (v._ignoreWhileAnimating = a), v.animateAll(function() {
                Z("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
            }), v !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (a === c && !c.animated || a === i && !a.animated) && (Ee = null), 
            l.dragoverBubble || e.rootEl || a === document || (c.parentNode[H]._isOutsideThisEl(e.target), 
            !y && pe(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), 
            C = !0;
        }
        function de() {
            L = z(c), ce = z(c, l.draggable), I({
                sortable: v,
                name: "change",
                toEl: i,
                newIndex: L,
                newDraggableIndex: ce,
                originalEvent: e
            });
        }
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        m(document, "mousemove", this._onTouchMove), m(document, "touchmove", this._onTouchMove), 
        m(document, "pointermove", this._onTouchMove), m(document, "dragover", pe), 
        m(document, "mousemove", pe), m(document, "touchmove", pe);
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        m(e, "mouseup", this._onDrop), m(e, "touchend", this._onDrop), m(e, "pointerup", this._onDrop), 
        m(e, "touchcancel", this._onDrop), m(document, "selectstart", this);
    },
    _onDrop: function(e) {
        var t = this.el, n = this.options;
        L = z(c), ce = z(c, n.draggable), Y("drop", this, {
            evt: e
        }), D = c && c.parentNode, L = z(c), ce = z(c, n.draggable), f.eventCanceled || (Se = !1, 
        ze = !1, ke = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), 
        ct(this.cloneId), ct(this._dragStartId), this.nativeDraggable && (m(document, "drop", this), 
        m(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), 
        Me && h(document.body, "user-select", ""), h(c, "transform", ""), e && (Pe && (e.cancelable && e.preventDefault(), 
        !n.dropBubble && e.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), 
        (S === D || A && A.lastPutMode !== "clone") && T && T.parentNode && T.parentNode.removeChild(T), 
        c && (this.nativeDraggable && m(c, "dragend", this), st(c), c.style["will-change"] = "", 
        Pe && !Se && F(c, A ? A.options.ghostClass : this.options.ghostClass, !1), 
        F(c, this.options.chosenClass, !1), I({
            sortable: this,
            name: "unchoose",
            toEl: D,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), S !== D ? (L >= 0 && (I({
            rootEl: D,
            name: "add",
            toEl: D,
            fromEl: S,
            originalEvent: e
        }), I({
            sortable: this,
            name: "remove",
            toEl: D,
            originalEvent: e
        }), I({
            rootEl: D,
            name: "sort",
            toEl: D,
            fromEl: S,
            originalEvent: e
        }), I({
            sortable: this,
            name: "sort",
            toEl: D,
            originalEvent: e
        })), A && A.save()) : L !== we && L >= 0 && (I({
            sortable: this,
            name: "update",
            toEl: D,
            originalEvent: e
        }), I({
            sortable: this,
            name: "sort",
            toEl: D,
            originalEvent: e
        })), f.active && (L != null && L !== -1 || (L = we, ce = Ae), I({
            sortable: this,
            name: "end",
            toEl: D,
            originalEvent: e
        }), this.save())))), this._nulling();
    },
    _nulling: function() {
        Y("nulling", this), S = c = D = g = he = T = Fe = se = fe = q = Pe = L = ce = we = Ae = Ee = Ie = A = He = f.dragged = f.ghost = f.clone = f.active = null, 
        Ge.forEach(function(e) {
            e.checked = !0;
        }), Ge.length = rt = it = 0;
    },
    handleEvent: function(e) {
        switch (e.type) {
          case "drop":
          case "dragend":
            this._onDrop(e);
            break;

          case "dragenter":
          case "dragover":
            c && (this._onDragOver(e), function(t) {
                t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
            }(e));
            break;

          case "selectstart":
            e.preventDefault();
        }
    },
    toArray: function() {
        for (var e, t = [], n = this.el.children, o = 0, r = n.length, i = this.options; o < r; o++) V(e = n[o], i.draggable, this.el, !1) && t.push(e.getAttribute(i.dataIdAttr) || Qt(e));
        return t;
    },
    sort: function(e, t) {
        var n = {}, o = this.el;
        this.toArray().forEach(function(r, i) {
            var a = o.children[i];
            V(a, this.options.draggable, o, !1) && (n[r] = a);
        }, this), t && this.captureAnimationState(), e.forEach(function(r) {
            n[r] && (o.removeChild(n[r]), o.appendChild(n[r]));
        }), t && this.animateAll();
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this);
    },
    closest: function(e, t) {
        return V(e, t || this.options.draggable, this.el, !1);
    },
    option: function(e, t) {
        var n = this.options;
        if (t === void 0) return n[e];
        var o = Ne.modifyOption(this, e, t);
        n[e] = o !== void 0 ? o : t, e === "group" && Xt(n);
    },
    destroy: function() {
        Y("destroy", this);
        var e = this.el;
        e[H] = null, m(e, "mousedown", this._onTapStart), m(e, "touchstart", this._onTapStart), 
        m(e, "pointerdown", this._onTapStart), this.nativeDraggable && (m(e, "dragover", this), 
        m(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(t) {
            t.removeAttribute("draggable");
        }), this._onDrop(), this._disableDelayedDragEvents(), We.splice(We.indexOf(this.el), 1), 
        this.el = e = null;
    },
    _hideClone: function() {
        if (!se) {
            if (Y("hideClone", this), f.eventCanceled) return;
            h(T, "display", "none"), this.options.removeCloneOnHide && T.parentNode && T.parentNode.removeChild(T), 
            se = !0;
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode === "clone") {
            if (se) {
                if (Y("showClone", this), f.eventCanceled) return;
                c.parentNode != S || this.options.group.revertClone ? he ? S.insertBefore(T, he) : S.appendChild(T) : S.insertBefore(T, c), 
                this.options.group.revertClone && this.animate(c, T), h(T, "display", ""), 
                se = !1;
            }
        } else this._hideClone();
    }
}, Ue && b(document, "touchmove", function(e) {
    (f.active || Se) && e.cancelable && e.preventDefault();
}), f.utils = {
    on: b,
    off: m,
    css: h,
    find: _t,
    is: function(e, t) {
        return !!V(e, t, e, !1);
    },
    extend: function(e, t) {
        if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
    },
    throttle: Ct,
    closest: V,
    toggleClass: F,
    clone: Mt,
    index: z,
    nextTick: Qe,
    cancelNextTick: ct,
    detectDirection: kt,
    getChild: be
}, f.get = function(e) {
    return e[H];
}, f.mount = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    t[0].constructor === Array && (t = t[0]), t.forEach(function(o) {
        if (!o.prototype || !o.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
        o.utils && (f.utils = K(K({}, f.utils), o.utils)), Ne.mount(o);
    });
}, f.create = function(e, t) {
    return new f(e, t);
}, f.version = "1.15.2";

var Xe, ut, dt, ht, Ze, Ye, M = [], ft = !1;

function Ke() {
    M.forEach(function(e) {
        clearInterval(e.pid);
    }), M = [];
}

function Bt() {
    clearInterval(Ye);
}

var pt = Ct(function(e, t, n, o) {
    if (t.scroll) {
        var r, i = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = t.scrollSensitivity, s = t.scrollSpeed, u = $(), d = !1;
        ut !== n && (ut = n, Ke(), Xe = t.scroll, r = t.scrollFn, Xe === !0 && (Xe = le(n, !0)));
        var p = 0, _ = Xe;
        do {
            var v = _, C = x(v), O = C.top, w = C.bottom, k = C.left, Q = C.right, j = C.width, re = C.height, ge = void 0, ve = void 0, J = v.scrollWidth, _e = v.scrollHeight, R = h(v), De = v.scrollLeft, ue = v.scrollTop;
            v === u ? (ge = j < J && (R.overflowX === "auto" || R.overflowX === "scroll" || R.overflowX === "visible"), 
            ve = re < _e && (R.overflowY === "auto" || R.overflowY === "scroll" || R.overflowY === "visible")) : (ge = j < J && (R.overflowX === "auto" || R.overflowX === "scroll"), 
            ve = re < _e && (R.overflowY === "auto" || R.overflowY === "scroll"));
            var ie = ge && (Math.abs(Q - i) <= l && De + j < J) - (Math.abs(k - i) <= l && !!De), Z = ve && (Math.abs(w - a) <= l && ue + re < _e) - (Math.abs(O - a) <= l && !!ue);
            if (!M[p]) for (var ee = 0; ee <= p; ee++) M[ee] || (M[ee] = {});
            M[p].vx == ie && M[p].vy == Z && M[p].el === v || (M[p].el = v, M[p].vx = ie, 
            M[p].vy = Z, clearInterval(M[p].pid), ie == 0 && Z == 0 || (d = !0, 
            M[p].pid = setInterval(function() {
                o && this.layer === 0 && f.active._onTouchMove(Ze);
                var B = M[this.layer].vy ? M[this.layer].vy * s : 0, de = M[this.layer].vx ? M[this.layer].vx * s : 0;
                typeof r == "function" && r.call(f.dragged.parentNode[H], de, B, e, Ze, M[this.layer].el) !== "continue" || xt(M[this.layer].el, de, B);
            }.bind({
                layer: p
            }), 24))), p++;
        } while (t.bubbleScroll && _ !== u && (_ = le(_, !1)));
        ft = d;
    }
}, 30), Ft = function(e) {
    var t = e.originalEvent, n = e.putSortable, o = e.dragEl, r = e.activeSortable, i = e.dispatchSortableEvent, a = e.hideGhostForTarget, l = e.unhideGhostForTarget;
    if (t) {
        var s = n || r;
        a();
        var u = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, d = document.elementFromPoint(u.clientX, u.clientY);
        l(), s && !s.el.contains(d) && (i("spill"), this.onSpill({
            dragEl: o,
            putSortable: n
        }));
    }
};

function gt() {}

function vt() {}

gt.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var t = e.oldDraggableIndex;
        this.startIndex = t;
    },
    onSpill: function(e) {
        var t = e.dragEl, n = e.putSortable;
        this.sortable.captureAnimationState(), n && n.captureAnimationState();
        var o = be(this.sortable.el, this.startIndex, this.options);
        o ? this.sortable.el.insertBefore(t, o) : this.sortable.el.appendChild(t), 
        this.sortable.animateAll(), n && n.animateAll();
    },
    drop: Ft
}, te(gt, {
    pluginName: "revertOnSpill"
}), vt.prototype = {
    onSpill: function(e) {
        var t = e.dragEl, n = e.putSortable || this.sortable;
        n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), 
        n.animateAll();
    },
    drop: Ft
}, te(vt, {
    pluginName: "removeOnSpill"
}), f.mount(new function() {
    function e() {
        for (var t in this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0
        }, this) t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
    }
    return e.prototype = {
        dragStarted: function(t) {
            var n = t.originalEvent;
            this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? b(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? b(document, "touchmove", this._handleFallbackAutoScroll) : b(document, "mousemove", this._handleFallbackAutoScroll);
        },
        dragOverCompleted: function(t) {
            var n = t.originalEvent;
            this.options.dragOverBubble || n.rootEl || this._handleAutoScroll(n);
        },
        drop: function() {
            this.sortable.nativeDraggable ? m(document, "dragover", this._handleAutoScroll) : (m(document, "pointermove", this._handleFallbackAutoScroll), 
            m(document, "touchmove", this._handleFallbackAutoScroll), m(document, "mousemove", this._handleFallbackAutoScroll)), 
            Bt(), Ke(), clearTimeout(Oe), Oe = void 0;
        },
        nulling: function() {
            Ze = ut = Xe = ft = Ye = dt = ht = null, M.length = 0;
        },
        _handleFallbackAutoScroll: function(t) {
            this._handleAutoScroll(t, !0);
        },
        _handleAutoScroll: function(t, n) {
            var o = this, r = (t.touches ? t.touches[0] : t).clientX, i = (t.touches ? t.touches[0] : t).clientY, a = document.elementFromPoint(r, i);
            if (Ze = t, n || this.options.forceAutoScrollFallback || xe || oe || Me) {
                pt(t, this.options, a, n);
                var l = le(a, !0);
                !ft || Ye && r === dt && i === ht || (Ye && Bt(), Ye = setInterval(function() {
                    var s = le(document.elementFromPoint(r, i), !0);
                    s !== l && (l = s, Ke()), pt(t, o.options, s, n);
                }, 10), dt = r, ht = i);
            } else {
                if (!this.options.bubbleScroll || le(a, !0) === $()) return void Ke();
                pt(t, this.options, le(a, !1), !1);
            }
        }
    }, te(e, {
        pluginName: "scroll",
        initializeByDefault: !0
    });
}()), f.mount(vt, gt);

export {
    f as S
};