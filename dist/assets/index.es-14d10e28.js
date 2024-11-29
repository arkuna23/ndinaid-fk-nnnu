import {
    i as $e,
    ce as Ke,
    __tla as Zn
} from "./index-6c08ea4c.js";

let Ze, Gn = Promise.all([ (() => {
    try {
        return Zn;
    } catch {}
})() ]).then(async () => {
    function Wt(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(r) {
                return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })), i.push.apply(i, n);
        }
        return i;
    }
    function Ot(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Wt(Object(i), !0).forEach(function(n) {
                Ge(t, n, i[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Wt(Object(i)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n));
            });
        }
        return t;
    }
    function kt(t) {
        return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, kt(t);
    }
    function _t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, Ht(n.key), n);
        }
    }
    function Ge(t, e, i) {
        return (e = Ht(e)) in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t;
    }
    function Ht(t) {
        var e = function(i, n) {
            if (typeof i != "object" || i === null) return i;
            var r = i[Symbol.toPrimitive];
            if (r !== void 0) {
                var o = r.call(i, n || "default");
                if (typeof o != "object") return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (n === "string" ? String : Number)(i);
        }(t, "string");
        return typeof e == "symbol" ? e : String(e);
    }
    var Bt = {
        backdrop: !0,
        button: !0,
        navbar: !0,
        title: !0,
        toolbar: !0,
        className: "",
        container: "body",
        filter: null,
        fullscreen: !0,
        inheritedAttributes: [ "crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap" ],
        initialCoverage: .9,
        initialViewIndex: 0,
        inline: !1,
        interval: 5e3,
        keyboard: !0,
        focus: !0,
        loading: !0,
        loop: !0,
        minWidth: 200,
        minHeight: 100,
        movable: !0,
        rotatable: !0,
        scalable: !0,
        zoomable: !0,
        zoomOnTouch: !0,
        zoomOnWheel: !0,
        slideOnTouch: !0,
        toggleOnDblclick: !0,
        tooltip: !0,
        transition: !0,
        zIndex: 2015,
        zIndexInline: 0,
        zoomRatio: .1,
        minZoomRatio: .01,
        maxZoomRatio: 100,
        url: "src",
        ready: null,
        show: null,
        shown: null,
        hide: null,
        hidden: null,
        view: null,
        viewed: null,
        move: null,
        moved: null,
        rotate: null,
        rotated: null,
        scale: null,
        scaled: null,
        zoom: null,
        zoomed: null,
        play: null,
        stop: null
    }, ht = typeof window < "u" && window.document !== void 0, Y = ht ? window : {}, B = !(!ht || !Y.document.documentElement) && "ontouchstart" in Y.document.documentElement, Tt = !!ht && "PointerEvent" in Y, g = "viewer", ut = "move", Ut = "switch", it = "zoom", dt = "".concat(g, "-active"), Je = "".concat(g, "-close"), mt = "".concat(g, "-fade"), Et = "".concat(g, "-fixed"), Qe = "".concat(g, "-fullscreen"), Vt = "".concat(g, "-fullscreen-exit"), W = "".concat(g, "-hide"), ti = "".concat(g, "-hide-md-down"), ei = "".concat(g, "-hide-sm-down"), ii = "".concat(g, "-hide-xs-down"), I = "".concat(g, "-in"), nt = "".concat(g, "-invisible"), U = "".concat(g, "-loading"), ni = "".concat(g, "-move"), $t = "".concat(g, "-open"), V = "".concat(g, "-show"), k = "".concat(g, "-transition"), $ = "click", jt = "dblclick", Kt = "dragstart", Zt = "focusin", Gt = "keydown", C = "load", _ = "error", Jt = Tt ? "pointerdown" : B ? "touchstart" : "mousedown", Qt = Tt ? "pointermove" : B ? "touchmove" : "mousemove", te = Tt ? "pointerup pointercancel" : B ? "touchend touchcancel" : "mouseup", ee = "resize", L = "transitionend", ie = "wheel", ne = "ready", re = "show", oe = "shown", ae = "hide", se = "hidden", le = "view", rt = "viewed", ce = "move", he = "moved", ue = "rotate", de = "rotated", me = "scale", fe = "scaled", ge = "zoom", ve = "zoomed", pe = "play", be = "stop", ft = "".concat(g, "Action"), zt = /\s\s*/, gt = [ "zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical" ];
    function ot(t) {
        return typeof t == "string";
    }
    var ri = Number.isNaN || Y.isNaN;
    function O(t) {
        return typeof t == "number" && !ri(t);
    }
    function K(t) {
        return t === void 0;
    }
    function Z(t) {
        return kt(t) === "object" && t !== null;
    }
    var oi = Object.prototype.hasOwnProperty;
    function G(t) {
        if (!Z(t)) return !1;
        try {
            var e = t.constructor, i = e.prototype;
            return e && i && oi.call(i, "isPrototypeOf");
        } catch {
            return !1;
        }
    }
    function b(t) {
        return typeof t == "function";
    }
    function w(t, e) {
        if (t && b(e)) if (Array.isArray(t) || O(t.length)) {
            var i, n = t.length;
            for (i = 0; i < n && e.call(t, t[i], i, t) !== !1; i += 1);
        } else Z(t) && Object.keys(t).forEach(function(r) {
            e.call(t, t[r], r, t);
        });
        return t;
    }
    var S = Object.assign || function(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
        return Z(t) && i.length > 0 && i.forEach(function(r) {
            Z(r) && Object.keys(r).forEach(function(o) {
                t[o] = r[o];
            });
        }), t;
    }, ai = /^(?:width|height|left|top|marginLeft|marginTop)$/;
    function M(t, e) {
        var i = t.style;
        w(e, function(n, r) {
            ai.test(r) && O(n) && (n += "px"), i[r] = n;
        });
    }
    function J(t, e) {
        return !(!t || !e) && (t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1);
    }
    function d(t, e) {
        if (t && e) if (O(t.length)) w(t, function(n) {
            d(n, e);
        }); else if (t.classList) t.classList.add(e); else {
            var i = t.className.trim();
            i ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e)) : t.className = e;
        }
    }
    function p(t, e) {
        t && e && (O(t.length) ? w(t, function(i) {
            p(i, e);
        }) : t.classList ? t.classList.remove(e) : t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, "")));
    }
    function at(t, e, i) {
        e && (O(t.length) ? w(t, function(n) {
            at(n, e, i);
        }) : i ? d(t, e) : p(t, e));
    }
    var si = /([a-z\d])([A-Z])/g;
    function At(t) {
        return t.replace(si, "$1-$2").toLowerCase();
    }
    function Q(t, e) {
        return Z(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(At(e)));
    }
    function St(t, e, i) {
        Z(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-".concat(At(e)), i);
    }
    var ye = function() {
        var t = !1;
        if (ht) {
            var e = !1, i = function() {}, n = Object.defineProperty({}, "once", {
                get: function() {
                    return t = !0, e;
                },
                set: function(r) {
                    e = r;
                }
            });
            Y.addEventListener("test", i, n), Y.removeEventListener("test", i, n);
        }
        return t;
    }();
    function y(t, e, i) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, r = i;
        e.trim().split(zt).forEach(function(o) {
            if (!ye) {
                var a = t.listeners;
                a && a[o] && a[o][i] && (r = a[o][i], delete a[o][i], Object.keys(a[o]).length === 0 && delete a[o], 
                Object.keys(a).length === 0 && delete t.listeners);
            }
            t.removeEventListener(o, r, n);
        });
    }
    function m(t, e, i) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, r = i;
        e.trim().split(zt).forEach(function(o) {
            if (n.once && !ye) {
                var a = t.listeners, l = a === void 0 ? {} : a;
                r = function() {
                    delete l[o][i], t.removeEventListener(o, r, n);
                    for (var s = arguments.length, h = new Array(s), c = 0; c < s; c++) h[c] = arguments[c];
                    i.apply(t, h);
                }, l[o] || (l[o] = {}), l[o][i] && t.removeEventListener(o, l[o][i], n), 
                l[o][i] = r, t.listeners = l;
            }
            t.addEventListener(o, r, n);
        });
    }
    function E(t, e, i, n) {
        var r;
        return b(Event) && b(CustomEvent) ? r = new CustomEvent(e, Ot({
            bubbles: !0,
            cancelable: !0,
            detail: i
        }, n)) : (r = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i), 
        t.dispatchEvent(r);
    }
    function vt(t) {
        var e = t.rotate, i = t.scaleX, n = t.scaleY, r = t.translateX, o = t.translateY, a = [];
        O(r) && r !== 0 && a.push("translateX(".concat(r, "px)")), O(o) && o !== 0 && a.push("translateY(".concat(o, "px)")), 
        O(e) && e !== 0 && a.push("rotate(".concat(e, "deg)")), O(i) && i !== 1 && a.push("scaleX(".concat(i, ")")), 
        O(n) && n !== 1 && a.push("scaleY(".concat(n, ")"));
        var l = a.length ? a.join(" ") : "none";
        return {
            WebkitTransform: l,
            msTransform: l,
            transform: l
        };
    }
    var Dt = Y.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(Y.navigator.userAgent);
    function we(t, e, i) {
        var n = document.createElement("img");
        if (t.naturalWidth && !Dt) return i(t.naturalWidth, t.naturalHeight), n;
        var r = document.body || document.documentElement;
        return n.onload = function() {
            i(n.width, n.height), Dt || r.removeChild(n);
        }, w(e.inheritedAttributes, function(o) {
            var a = t.getAttribute(o);
            a !== null && n.setAttribute(o, a);
        }), n.src = t.src, Dt || (n.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", 
        r.appendChild(n)), n;
    }
    function pt(t) {
        switch (t) {
          case 2:
            return ii;

          case 3:
            return ei;

          case 4:
            return ti;

          default:
            return "";
        }
    }
    function bt(t, e) {
        var i = t.pageX, n = t.pageY, r = {
            endX: i,
            endY: n
        };
        return e ? r : Ot({
            timeStamp: Date.now(),
            startX: i,
            startY: n
        }, r);
    }
    var xe, li = {
        render: function() {
            this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
        },
        initBody: function() {
            var t = this.element.ownerDocument, e = t.body || t.documentElement;
            this.body = e, this.scrollbarWidth = window.innerWidth - t.documentElement.clientWidth, 
            this.initialBodyPaddingRight = e.style.paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(e).paddingRight;
        },
        initContainer: function() {
            this.containerData = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        initViewer: function() {
            var t, e = this.options, i = this.parent;
            e.inline && (t = {
                width: Math.max(i.offsetWidth, e.minWidth),
                height: Math.max(i.offsetHeight, e.minHeight)
            }, this.parentData = t), !this.fulled && t || (t = this.containerData), 
            this.viewerData = S({}, t);
        },
        renderViewer: function() {
            this.options.inline && !this.fulled && M(this.viewer, this.viewerData);
        },
        initList: function() {
            var t = this, e = this.element, i = this.options, n = this.list, r = [];
            n.innerHTML = "", w(this.images, function(o, a) {
                var l = o.src, s = o.alt || function(f) {
                    return ot(f) ? decodeURIComponent(f.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
                }(l), h = t.getImageURL(o);
                if (l || h) {
                    var c = document.createElement("li"), u = document.createElement("img");
                    w(i.inheritedAttributes, function(f) {
                        var v = o.getAttribute(f);
                        v !== null && u.setAttribute(f, v);
                    }), i.navbar && (u.src = l || h), u.alt = s, u.setAttribute("data-original-url", h || l), 
                    c.setAttribute("data-index", a), c.setAttribute("data-viewer-action", "view"), 
                    c.setAttribute("role", "button"), i.keyboard && c.setAttribute("tabindex", 0), 
                    c.appendChild(u), n.appendChild(c), r.push(c);
                }
            }), this.items = r, w(r, function(o) {
                var a, l, s = o.firstElementChild;
                St(s, "filled", !0), i.loading && d(o, U), m(s, C, a = function(h) {
                    y(s, _, l), i.loading && p(o, U), t.loadImage(h);
                }, {
                    once: !0
                }), m(s, _, l = function() {
                    y(s, C, a), i.loading && p(o, U);
                }, {
                    once: !0
                });
            }), i.transition && m(e, rt, function() {
                d(n, k);
            }, {
                once: !0
            });
        },
        renderList: function() {
            var t = this.index, e = this.items[t];
            if (e) {
                var i = e.nextElementSibling, n = parseInt(window.getComputedStyle(i || e).marginLeft, 10), r = e.offsetWidth, o = r + n;
                M(this.list, S({
                    width: o * this.length - n
                }, vt({
                    translateX: (this.viewerData.width - r) / 2 - o * t
                })));
            }
        },
        resetList: function() {
            var t = this.list;
            t.innerHTML = "", p(t, k), M(t, vt({
                translateX: 0
            }));
        },
        initImage: function(t) {
            var e, i = this, n = this.options, r = this.image, o = this.viewerData, a = this.footer.offsetHeight, l = o.width, s = Math.max(o.height - a, a), h = this.imageData || {};
            this.imageInitializing = {
                abort: function() {
                    e.onload = null;
                }
            }, e = we(r, n, function(c, u) {
                var f = c / u, v = Math.max(0, Math.min(1, n.initialCoverage)), z = l, T = s;
                i.imageInitializing = !1, s * f > l ? T = l / f : z = s * f, v = O(v) ? v : .9, 
                z = Math.min(z * v, c), T = Math.min(T * v, u);
                var A = (l - z) / 2, F = (s - T) / 2, R = {
                    left: A,
                    top: F,
                    x: A,
                    y: F,
                    width: z,
                    height: T,
                    oldRatio: 1,
                    ratio: z / c,
                    aspectRatio: f,
                    naturalWidth: c,
                    naturalHeight: u
                }, P = S({}, R);
                n.rotatable && (R.rotate = h.rotate || 0, P.rotate = 0), n.scalable && (R.scaleX = h.scaleX || 1, 
                R.scaleY = h.scaleY || 1, P.scaleX = 1, P.scaleY = 1), i.imageData = R, 
                i.initialImageData = P, t && t();
            });
        },
        renderImage: function(t) {
            var e = this, i = this.image, n = this.imageData;
            if (M(i, S({
                width: n.width,
                height: n.height,
                marginLeft: n.x,
                marginTop: n.y
            }, vt(n))), t) if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && J(i, k)) {
                var r = function() {
                    e.imageRendering = !1, t();
                };
                this.imageRendering = {
                    abort: function() {
                        y(i, L, r);
                    }
                }, m(i, L, r, {
                    once: !0
                });
            } else t();
        },
        resetImage: function() {
            var t = this.image;
            t && (this.viewing && this.viewing.abort(), t.parentNode.removeChild(t), 
            this.image = null, this.title.innerHTML = "");
        }
    }, ci = {
        bind: function() {
            var t = this.options, e = this.viewer, i = this.canvas, n = this.element.ownerDocument;
            m(e, $, this.onClick = this.click.bind(this)), m(e, Kt, this.onDragStart = this.dragstart.bind(this)), 
            m(i, Jt, this.onPointerDown = this.pointerdown.bind(this)), m(n, Qt, this.onPointerMove = this.pointermove.bind(this)), 
            m(n, te, this.onPointerUp = this.pointerup.bind(this)), m(n, Gt, this.onKeyDown = this.keydown.bind(this)), 
            m(window, ee, this.onResize = this.resize.bind(this)), t.zoomable && t.zoomOnWheel && m(e, ie, this.onWheel = this.wheel.bind(this), {
                passive: !1,
                capture: !0
            }), t.toggleOnDblclick && m(i, jt, this.onDblclick = this.dblclick.bind(this));
        },
        unbind: function() {
            var t = this.options, e = this.viewer, i = this.canvas, n = this.element.ownerDocument;
            y(e, $, this.onClick), y(e, Kt, this.onDragStart), y(i, Jt, this.onPointerDown), 
            y(n, Qt, this.onPointerMove), y(n, te, this.onPointerUp), y(n, Gt, this.onKeyDown), 
            y(window, ee, this.onResize), t.zoomable && t.zoomOnWheel && y(e, ie, this.onWheel, {
                passive: !1,
                capture: !0
            }), t.toggleOnDblclick && y(i, jt, this.onDblclick);
        }
    }, hi = {
        click: function(t) {
            var e = this.options, i = this.imageData, n = t.target, r = Q(n, ft);
            switch (r || n.localName !== "img" || n.parentElement.localName !== "li" || (r = Q(n = n.parentElement, ft)), 
            B && t.isTrusted && n === this.canvas && clearTimeout(this.clickCanvasTimeout), 
            r) {
              case "mix":
                this.played ? this.stop() : e.inline ? this.fulled ? this.exit() : this.full() : this.hide();
                break;

              case "hide":
                this.pointerMoved || this.hide();
                break;

              case "view":
                this.view(Q(n, "index"));
                break;

              case "zoom-in":
                this.zoom(.1, !0);
                break;

              case "zoom-out":
                this.zoom(-.1, !0);
                break;

              case "one-to-one":
                this.toggle();
                break;

              case "reset":
                this.reset();
                break;

              case "prev":
                this.prev(e.loop);
                break;

              case "play":
                this.play(e.fullscreen);
                break;

              case "next":
                this.next(e.loop);
                break;

              case "rotate-left":
                this.rotate(-90);
                break;

              case "rotate-right":
                this.rotate(90);
                break;

              case "flip-horizontal":
                this.scaleX(-i.scaleX || -1);
                break;

              case "flip-vertical":
                this.scaleY(-i.scaleY || -1);
                break;

              default:
                this.played && this.stop();
            }
        },
        dblclick: function(t) {
            t.preventDefault(), this.viewed && t.target === this.image && (B && t.isTrusted && clearTimeout(this.doubleClickImageTimeout), 
            this.toggle(t.isTrusted ? t : t.detail && t.detail.originalEvent));
        },
        load: function() {
            var t = this;
            this.timeout && (clearTimeout(this.timeout), this.timeout = !1);
            var e = this.element, i = this.options, n = this.image, r = this.index, o = this.viewerData;
            p(n, nt), i.loading && p(this.canvas, U), n.style.cssText = "height:0;" + "margin-left:".concat(o.width / 2, "px;") + "margin-top:".concat(o.height / 2, "px;") + "max-width:none!important;position:relative;width:0;", 
            this.initImage(function() {
                at(n, ni, i.movable), at(n, k, i.transition), t.renderImage(function() {
                    t.viewed = !0, t.viewing = !1, b(i.viewed) && m(e, rt, i.viewed, {
                        once: !0
                    }), E(e, rt, {
                        originalImage: t.images[r],
                        index: r,
                        image: n
                    }, {
                        cancelable: !1
                    });
                });
            });
        },
        loadImage: function(t) {
            var e = t.target, i = e.parentNode, n = i.offsetWidth || 30, r = i.offsetHeight || 50, o = !!Q(e, "filled");
            we(e, this.options, function(a, l) {
                var s = a / l, h = n, c = r;
                r * s > n ? o ? h = r * s : c = n / s : o ? c = n / s : h = r * s, 
                M(e, S({
                    width: h,
                    height: c
                }, vt({
                    translateX: (n - h) / 2,
                    translateY: (r - c) / 2
                })));
            });
        },
        keydown: function(t) {
            var e = this.options;
            if (e.keyboard) {
                var i = t.keyCode || t.which || t.charCode;
                if (i === 13 && this.viewer.contains(t.target) && this.click(t), 
                this.fulled) switch (i) {
                  case 27:
                    this.played ? this.stop() : e.inline ? this.fulled && this.exit() : this.hide();
                    break;

                  case 32:
                    this.played && this.stop();
                    break;

                  case 37:
                    this.played && this.playing ? this.playing.prev() : this.prev(e.loop);
                    break;

                  case 38:
                    t.preventDefault(), this.zoom(e.zoomRatio, !0);
                    break;

                  case 39:
                    this.played && this.playing ? this.playing.next() : this.next(e.loop);
                    break;

                  case 40:
                    t.preventDefault(), this.zoom(-e.zoomRatio, !0);
                    break;

                  case 48:
                  case 49:
                    t.ctrlKey && (t.preventDefault(), this.toggle());
                }
            }
        },
        dragstart: function(t) {
            t.target.localName === "img" && t.preventDefault();
        },
        pointerdown: function(t) {
            var e = this.options, i = this.pointers, n = t.buttons, r = t.button;
            if (this.pointerMoved = !1, !(!this.viewed || this.showing || this.viewing || this.hiding || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (O(n) && n !== 1 || O(r) && r !== 0 || t.ctrlKey))) {
                t.preventDefault(), t.changedTouches ? w(t.changedTouches, function(a) {
                    i[a.identifier] = bt(a);
                }) : i[t.pointerId || 0] = bt(t);
                var o = !!e.movable && ut;
                e.zoomOnTouch && e.zoomable && Object.keys(i).length > 1 ? o = it : e.slideOnTouch && (t.pointerType === "touch" || t.type === "touchstart") && this.isSwitchable() && (o = Ut), 
                !e.transition || o !== ut && o !== it || p(this.image, k), this.action = o;
            }
        },
        pointermove: function(t) {
            var e = this.pointers, i = this.action;
            this.viewed && i && (t.preventDefault(), t.changedTouches ? w(t.changedTouches, function(n) {
                S(e[n.identifier] || {}, bt(n, !0));
            }) : S(e[t.pointerId || 0] || {}, bt(t, !0)), this.change(t));
        },
        pointerup: function(t) {
            var e, i = this, n = this.options, r = this.action, o = this.pointers;
            t.changedTouches ? w(t.changedTouches, function(a) {
                e = o[a.identifier], delete o[a.identifier];
            }) : (e = o[t.pointerId || 0], delete o[t.pointerId || 0]), r && (t.preventDefault(), 
            !n.transition || r !== ut && r !== it || d(this.image, k), this.action = !1, 
            B && r !== it && e && Date.now() - e.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), 
            clearTimeout(this.doubleClickImageTimeout), n.toggleOnDblclick && this.viewed && t.target === this.image ? this.imageClicked ? (this.imageClicked = !1, 
            this.doubleClickImageTimeout = setTimeout(function() {
                E(i.image, jt, {
                    originalEvent: t
                });
            }, 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout(function() {
                i.imageClicked = !1;
            }, 500)) : (this.imageClicked = !1, n.backdrop && n.backdrop !== "static" && t.target === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
                E(i.canvas, $, {
                    originalEvent: t
                });
            }, 50)))));
        },
        resize: function() {
            var t = this;
            if (this.isShown && !this.hiding && (this.fulled && (this.close(), this.initBody(), 
            this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), 
            this.renderList(), this.viewed && this.initImage(function() {
                t.renderImage();
            }), this.played)) {
                if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) return void this.stop();
                w(this.player.getElementsByTagName("img"), function(e) {
                    m(e, C, t.loadImage.bind(t), {
                        once: !0
                    }), E(e, C);
                });
            }
        },
        wheel: function(t) {
            var e = this;
            if (this.viewed && (t.preventDefault(), !this.wheeling)) {
                this.wheeling = !0, setTimeout(function() {
                    e.wheeling = !1;
                }, 50);
                var i = Number(this.options.zoomRatio) || .1, n = 1;
                t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), 
                this.zoom(-n * i, !0, null, t);
            }
        }
    }, ui = {
        show: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e = this.element, i = this.options;
            if (i.inline || this.showing || this.isShown || this.showing) return this;
            if (!this.ready) return this.build(), this.ready && this.show(t), this;
            if (b(i.show) && m(e, re, i.show, {
                once: !0
            }), E(e, re) === !1 || !this.ready) return this;
            this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
            var n = this.viewer;
            if (p(n, W), n.setAttribute("role", "dialog"), n.setAttribute("aria-labelledby", this.title.id), 
            n.setAttribute("aria-modal", !0), n.removeAttribute("aria-hidden"), 
            i.transition && !t) {
                var r = this.shown.bind(this);
                this.transitioning = {
                    abort: function() {
                        y(n, L, r), p(n, I);
                    }
                }, d(n, k), n.initialOffsetWidth = n.offsetWidth, m(n, L, r, {
                    once: !0
                }), d(n, I);
            } else d(n, I), this.shown();
            return this;
        },
        hide: function() {
            var t = this, e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], i = this.element, n = this.options;
            if (n.inline || this.hiding || !this.isShown && !this.showing) return this;
            if (b(n.hide) && m(i, ae, n.hide, {
                once: !0
            }), E(i, ae) === !1) return this;
            this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
            var r = this.viewer, o = this.image, a = function() {
                p(r, I), t.hidden();
            };
            if (n.transition && !e) {
                var l = function h(c) {
                    c && c.target === r && (y(r, L, h), t.hidden());
                }, s = function() {
                    J(r, k) ? (m(r, L, l), p(r, I)) : a();
                };
                this.transitioning = {
                    abort: function() {
                        t.viewed && J(o, k) ? y(o, L, s) : J(r, k) && y(r, L, l);
                    }
                }, this.viewed && J(o, k) ? (m(o, L, s, {
                    once: !0
                }), this.zoomTo(0, !1, null, null, !0)) : s();
            } else a();
            return this;
        },
        view: function() {
            var t = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
            if (e = Number(e) || 0, this.hiding || this.played || e < 0 || e >= this.length || this.viewed && e === this.index) return this;
            if (!this.isShown) return this.index = e, this.show();
            this.viewing && this.viewing.abort();
            var i = this.element, n = this.options, r = this.title, o = this.canvas, a = this.items[e], l = a.querySelector("img"), s = Q(l, "originalUrl"), h = l.getAttribute("alt"), c = document.createElement("img");
            if (w(n.inheritedAttributes, function(T) {
                var A = l.getAttribute(T);
                A !== null && c.setAttribute(T, A);
            }), c.src = s, c.alt = h, b(n.view) && m(i, le, n.view, {
                once: !0
            }), E(i, le, {
                originalImage: this.images[e],
                index: e,
                image: c
            }) === !1 || !this.isShown || this.hiding || this.played) return this;
            var u = this.items[this.index];
            u && (p(u, dt), u.removeAttribute("aria-selected")), d(a, dt), a.setAttribute("aria-selected", !0), 
            n.focus && a.focus(), this.image = c, this.viewed = !1, this.index = e, 
            this.imageData = {}, d(c, nt), n.loading && d(o, U), o.innerHTML = "", 
            o.appendChild(c), this.renderList(), r.innerHTML = "";
            var f, v, z = function() {
                var T, A = t.imageData, F = Array.isArray(n.title) ? n.title[1] : n.title;
                r.innerHTML = ot(T = b(F) ? F.call(t, c, A) : "".concat(h, " (").concat(A.naturalWidth, " × ").concat(A.naturalHeight, ")")) ? T.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : T;
            };
            return m(i, rt, z, {
                once: !0
            }), this.viewing = {
                abort: function() {
                    y(i, rt, z), c.complete ? t.imageRendering ? t.imageRendering.abort() : t.imageInitializing && t.imageInitializing.abort() : (c.src = "", 
                    y(c, C, f), t.timeout && clearTimeout(t.timeout));
                }
            }, c.complete ? this.load() : (m(c, C, f = function() {
                y(c, _, v), t.load();
            }, {
                once: !0
            }), m(c, _, v = function() {
                y(c, C, f), t.timeout && (clearTimeout(t.timeout), t.timeout = !1), 
                p(c, nt), n.loading && p(t.canvas, U);
            }, {
                once: !0
            }), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                p(c, nt), t.timeout = !1;
            }, 1e3)), this;
        },
        prev: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e = this.index - 1;
            return e < 0 && (e = t ? this.length - 1 : 0), this.view(e), this;
        },
        next: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e = this.length - 1, i = this.index + 1;
            return i > e && (i = t ? 0 : e), this.view(i), this;
        },
        move: function(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, i = this.imageData;
            return this.moveTo(K(t) ? t : i.x + Number(t), K(e) ? e : i.y + Number(e)), 
            this;
        },
        moveTo: function(t) {
            var e = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = this.element, o = this.options, a = this.imageData;
            if (t = Number(t), i = Number(i), this.viewed && !this.played && o.movable) {
                var l = a.x, s = a.y, h = !1;
                if (O(t) ? h = !0 : t = l, O(i) ? h = !0 : i = s, h) {
                    if (b(o.move) && m(r, ce, o.move, {
                        once: !0
                    }), E(r, ce, {
                        x: t,
                        y: i,
                        oldX: l,
                        oldY: s,
                        originalEvent: n
                    }) === !1) return this;
                    a.x = t, a.y = i, a.left = t, a.top = i, this.moving = !0, this.renderImage(function() {
                        e.moving = !1, b(o.moved) && m(r, he, o.moved, {
                            once: !0
                        }), E(r, he, {
                            x: t,
                            y: i,
                            oldX: l,
                            oldY: s,
                            originalEvent: n
                        }, {
                            cancelable: !1
                        });
                    });
                }
            }
            return this;
        },
        rotate: function(t) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(t)), this;
        },
        rotateTo: function(t) {
            var e = this, i = this.element, n = this.options, r = this.imageData;
            if (O(t = Number(t)) && this.viewed && !this.played && n.rotatable) {
                var o = r.rotate;
                if (b(n.rotate) && m(i, ue, n.rotate, {
                    once: !0
                }), E(i, ue, {
                    degree: t,
                    oldDegree: o
                }) === !1) return this;
                r.rotate = t, this.rotating = !0, this.renderImage(function() {
                    e.rotating = !1, b(n.rotated) && m(i, de, n.rotated, {
                        once: !0
                    }), E(i, de, {
                        degree: t,
                        oldDegree: o
                    }, {
                        cancelable: !1
                    });
                });
            }
            return this;
        },
        scaleX: function(t) {
            return this.scale(t, this.imageData.scaleY), this;
        },
        scaleY: function(t) {
            return this.scale(this.imageData.scaleX, t), this;
        },
        scale: function(t) {
            var e = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = this.element, r = this.options, o = this.imageData;
            if (t = Number(t), i = Number(i), this.viewed && !this.played && r.scalable) {
                var a = o.scaleX, l = o.scaleY, s = !1;
                if (O(t) ? s = !0 : t = a, O(i) ? s = !0 : i = l, s) {
                    if (b(r.scale) && m(n, me, r.scale, {
                        once: !0
                    }), E(n, me, {
                        scaleX: t,
                        scaleY: i,
                        oldScaleX: a,
                        oldScaleY: l
                    }) === !1) return this;
                    o.scaleX = t, o.scaleY = i, this.scaling = !0, this.renderImage(function() {
                        e.scaling = !1, b(r.scaled) && m(n, fe, r.scaled, {
                            once: !0
                        }), E(n, fe, {
                            scaleX: t,
                            scaleY: i,
                            oldScaleX: a,
                            oldScaleY: l
                        }, {
                            cancelable: !1
                        });
                    });
                }
            }
            return this;
        },
        zoom: function(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, r = this.imageData;
            return t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t, this.zoomTo(r.width * t / r.naturalWidth, e, i, n), 
            this;
        },
        zoomTo: function(t) {
            var e = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, o = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], a = this.element, l = this.options, s = this.pointers, h = this.imageData, c = h.x, u = h.y, f = h.width, v = h.height, z = h.naturalWidth, T = h.naturalHeight;
            if (O(t = Math.max(0, t)) && this.viewed && !this.played && (o || l.zoomable)) {
                if (!o) {
                    var A = Math.max(.01, l.minZoomRatio), F = Math.min(100, l.maxZoomRatio);
                    t = Math.min(Math.max(t, A), F);
                }
                if (r) switch (r.type) {
                  case "wheel":
                    l.zoomRatio >= .055 && t > .95 && t < 1.05 && (t = 1);
                    break;

                  case "pointermove":
                  case "touchmove":
                  case "mousemove":
                    t > .99 && t < 1.01 && (t = 1);
                }
                var R = z * t, P = T * t, N = R - f, j = P - v, ct = h.ratio;
                if (b(l.zoom) && m(a, ge, l.zoom, {
                    once: !0
                }), E(a, ge, {
                    ratio: t,
                    oldRatio: ct,
                    originalEvent: r
                }) === !1) return this;
                if (this.zooming = !0, r) {
                    var tt = function(H) {
                        var q = H.getBoundingClientRect();
                        return {
                            left: q.left + (window.pageXOffset - document.documentElement.clientLeft),
                            top: q.top + (window.pageYOffset - document.documentElement.clientTop)
                        };
                    }(this.viewer), X = s && Object.keys(s).length > 0 ? function(H) {
                        var q = 0, et = 0, D = 0;
                        return w(H, function(Ve) {
                            var $n = Ve.startX, Kn = Ve.startY;
                            q += $n, et += Kn, D += 1;
                        }), {
                            pageX: q /= D,
                            pageY: et /= D
                        };
                    }(s) : {
                        pageX: r.pageX,
                        pageY: r.pageY
                    };
                    h.x -= N * ((X.pageX - tt.left - c) / f), h.y -= j * ((X.pageY - tt.top - u) / v);
                } else G(n) && O(n.x) && O(n.y) ? (h.x -= N * ((n.x - c) / f), h.y -= j * ((n.y - u) / v)) : (h.x -= N / 2, 
                h.y -= j / 2);
                h.left = h.x, h.top = h.y, h.width = R, h.height = P, h.oldRatio = ct, 
                h.ratio = t, this.renderImage(function() {
                    e.zooming = !1, b(l.zoomed) && m(a, ve, l.zoomed, {
                        once: !0
                    }), E(a, ve, {
                        ratio: t,
                        oldRatio: ct,
                        originalEvent: r
                    }, {
                        cancelable: !1
                    });
                }), i && this.tooltip();
            }
            return this;
        },
        play: function() {
            var t = this, e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if (!this.isShown || this.played) return this;
            var i = this.element, n = this.options;
            if (b(n.play) && m(i, pe, n.play, {
                once: !0
            }), E(i, pe) === !1) return this;
            var r = this.player, o = this.loadImage.bind(this), a = [], l = 0, s = 0;
            if (this.played = !0, this.onLoadWhenPlay = o, e && this.requestFullscreen(e), 
            d(r, V), w(this.items, function(c, u) {
                var f = c.querySelector("img"), v = document.createElement("img");
                v.src = Q(f, "originalUrl"), v.alt = f.getAttribute("alt"), v.referrerPolicy = f.referrerPolicy, 
                l += 1, d(v, mt), at(v, k, n.transition), J(c, dt) && (d(v, I), 
                s = u), a.push(v), m(v, C, o, {
                    once: !0
                }), r.appendChild(v);
            }), O(n.interval) && n.interval > 0) {
                var h = function c() {
                    clearTimeout(t.playing.timeout), p(a[s], I), d(a[s = (s += 1) < l ? s : 0], I), 
                    t.playing.timeout = setTimeout(c, n.interval);
                };
                l > 1 && (this.playing = {
                    prev: function c() {
                        clearTimeout(t.playing.timeout), p(a[s], I), d(a[s = (s -= 1) >= 0 ? s : l - 1], I), 
                        t.playing.timeout = setTimeout(c, n.interval);
                    },
                    next: h,
                    timeout: setTimeout(h, n.interval)
                });
            }
            return this;
        },
        stop: function() {
            var t = this;
            if (!this.played) return this;
            var e = this.element, i = this.options;
            if (b(i.stop) && m(e, be, i.stop, {
                once: !0
            }), E(e, be) === !1) return this;
            var n = this.player;
            return clearTimeout(this.playing.timeout), this.playing = !1, this.played = !1, 
            w(n.getElementsByTagName("img"), function(r) {
                y(r, C, t.onLoadWhenPlay);
            }), p(n, V), n.innerHTML = "", this.exitFullscreen(), this;
        },
        full: function() {
            var t = this, e = this.options, i = this.viewer, n = this.image, r = this.list;
            return !this.isShown || this.played || this.fulled || !e.inline || (this.fulled = !0, 
            this.open(), d(this.button, Vt), e.transition && (p(r, k), this.viewed && p(n, k)), 
            d(i, Et), i.setAttribute("role", "dialog"), i.setAttribute("aria-labelledby", this.title.id), 
            i.setAttribute("aria-modal", !0), i.removeAttribute("style"), M(i, {
                zIndex: e.zIndex
            }), e.focus && this.enforceFocus(), this.initContainer(), this.viewerData = S({}, this.containerData), 
            this.renderList(), this.viewed && this.initImage(function() {
                t.renderImage(function() {
                    e.transition && setTimeout(function() {
                        d(n, k), d(r, k);
                    }, 0);
                });
            })), this;
        },
        exit: function() {
            var t = this, e = this.options, i = this.viewer, n = this.image, r = this.list;
            return this.isShown && !this.played && this.fulled && e.inline ? (this.fulled = !1, 
            this.close(), p(this.button, Vt), e.transition && (p(r, k), this.viewed && p(n, k)), 
            e.focus && this.clearEnforceFocus(), i.removeAttribute("role"), i.removeAttribute("aria-labelledby"), 
            i.removeAttribute("aria-modal"), p(i, Et), M(i, {
                zIndex: e.zIndexInline
            }), this.viewerData = S({}, this.parentData), this.renderViewer(), this.renderList(), 
            this.viewed && this.initImage(function() {
                t.renderImage(function() {
                    e.transition && setTimeout(function() {
                        d(n, k), d(r, k);
                    }, 0);
                });
            }), this) : this;
        },
        tooltip: function() {
            var t = this, e = this.options, i = this.tooltipBox, n = this.imageData;
            return this.viewed && !this.played && e.tooltip ? (i.textContent = "".concat(Math.round(100 * n.ratio), "%"), 
            this.tooltipping ? clearTimeout(this.tooltipping) : e.transition ? (this.fading && E(i, L), 
            d(i, V), d(i, mt), d(i, k), i.removeAttribute("aria-hidden"), i.initialOffsetWidth = i.offsetWidth, 
            d(i, I)) : (d(i, V), i.removeAttribute("aria-hidden")), this.tooltipping = setTimeout(function() {
                e.transition ? (m(i, L, function() {
                    p(i, V), p(i, mt), p(i, k), i.setAttribute("aria-hidden", !0), 
                    t.fading = !1;
                }, {
                    once: !0
                }), p(i, I), t.fading = !0) : (p(i, V), i.setAttribute("aria-hidden", !0)), 
                t.tooltipping = !1;
            }, 1e3), this) : this;
        },
        toggle: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            return this.imageData.ratio === 1 ? this.zoomTo(this.imageData.oldRatio, !0, null, t) : this.zoomTo(1, !0, null, t), 
            this;
        },
        reset: function() {
            return this.viewed && !this.played && (this.imageData = S({}, this.initialImageData), 
            this.renderImage()), this;
        },
        update: function() {
            var t = this, e = this.element, i = this.options, n = this.isImg;
            if (n && !e.parentNode) return this.destroy();
            var r = [];
            if (w(n ? [ e ] : e.querySelectorAll("img"), function(s) {
                b(i.filter) ? i.filter.call(t, s) && r.push(s) : t.getImageURL(s) && r.push(s);
            }), !r.length) return this;
            if (this.images = r, this.length = r.length, this.ready) {
                var o = [];
                if (w(this.items, function(s, h) {
                    var c = s.querySelector("img"), u = r[h];
                    u && c && u.src === c.src && u.alt === c.alt || o.push(h);
                }), M(this.list, {
                    width: "auto"
                }), this.initList(), this.isShown) if (this.length) {
                    if (this.viewed) {
                        var a = o.indexOf(this.index);
                        if (a >= 0) this.viewed = !1, this.view(Math.max(Math.min(this.index - a, this.length - 1), 0)); else {
                            var l = this.items[this.index];
                            d(l, dt), l.setAttribute("aria-selected", !0);
                        }
                    }
                } else this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, 
                this.canvas.innerHTML = "", this.title.innerHTML = "";
            } else this.build();
            return this;
        },
        destroy: function() {
            var t = this.element, e = this.options;
            return t[g] ? (this.destroyed = !0, this.ready ? (this.played && this.stop(), 
            e.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), 
            this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), 
            this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : e.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), 
            e.inline || y(t, $, this.onStart), t[g] = void 0, this) : this;
        }
    }, di = {
        getImageURL: function(t) {
            var e = this.options.url;
            return e = ot(e) ? t.getAttribute(e) : b(e) ? e.call(this, t) : "";
        },
        enforceFocus: function() {
            var t = this;
            this.clearEnforceFocus(), m(document, Zt, this.onFocusin = function(e) {
                var i = t.viewer, n = e.target;
                if (n !== document && n !== i && !i.contains(n)) {
                    for (;n; ) {
                        if (n.getAttribute("tabindex") !== null || n.getAttribute("aria-modal") === "true") return;
                        n = n.parentElement;
                    }
                    i.focus();
                }
            });
        },
        clearEnforceFocus: function() {
            this.onFocusin && (y(document, Zt, this.onFocusin), this.onFocusin = null);
        },
        open: function() {
            var t = this.body;
            d(t, $t), this.scrollbarWidth > 0 && (t.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px"));
        },
        close: function() {
            var t = this.body;
            p(t, $t), this.scrollbarWidth > 0 && (t.style.paddingRight = this.initialBodyPaddingRight);
        },
        shown: function() {
            var t = this.element, e = this.options, i = this.viewer;
            this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, 
            e.focus && (i.focus(), this.enforceFocus()), b(e.shown) && m(t, oe, e.shown, {
                once: !0
            }), E(t, oe) !== !1 && this.ready && this.isShown && !this.hiding && this.view(this.index);
        },
        hidden: function() {
            var t = this.element, e = this.options, i = this.viewer;
            e.fucus && this.clearEnforceFocus(), this.close(), this.unbind(), d(i, W), 
            i.removeAttribute("role"), i.removeAttribute("aria-labelledby"), i.removeAttribute("aria-modal"), 
            i.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), 
            this.fulled = !1, this.viewed = !1, this.isShown = !1, this.hiding = !1, 
            this.destroyed || (b(e.hidden) && m(t, se, e.hidden, {
                once: !0
            }), E(t, se, null, {
                cancelable: !1
            }));
        },
        requestFullscreen: function(t) {
            var e = this.element.ownerDocument;
            if (this.fulled && !(e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement)) {
                var i = e.documentElement;
                i.requestFullscreen ? G(t) ? i.requestFullscreen(t) : i.requestFullscreen() : i.webkitRequestFullscreen ? i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.msRequestFullscreen && i.msRequestFullscreen();
            }
        },
        exitFullscreen: function() {
            var t = this.element.ownerDocument;
            this.fulled && (t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement) && (t.exitFullscreen ? t.exitFullscreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.msExitFullscreen && t.msExitFullscreen());
        },
        change: function(t) {
            var e = this.options, i = this.pointers, n = i[Object.keys(i)[0]];
            if (n) {
                var r = n.endX - n.startX, o = n.endY - n.startY;
                switch (this.action) {
                  case ut:
                    r === 0 && o === 0 || (this.pointerMoved = !0, this.move(r, o, t));
                    break;

                  case it:
                    this.zoom(function(l) {
                        var s = Ot({}, l), h = [];
                        return w(l, function(c, u) {
                            delete s[u], w(s, function(f) {
                                var v = Math.abs(c.startX - f.startX), z = Math.abs(c.startY - f.startY), T = Math.abs(c.endX - f.endX), A = Math.abs(c.endY - f.endY), F = Math.sqrt(v * v + z * z), R = (Math.sqrt(T * T + A * A) - F) / F;
                                h.push(R);
                            });
                        }), h.sort(function(c, u) {
                            return Math.abs(c) < Math.abs(u);
                        }), h[0];
                    }(i), !1, null, t);
                    break;

                  case Ut:
                    this.action = "switched";
                    var a = Math.abs(r);
                    a > 1 && a > Math.abs(o) && (this.pointers = {}, r > 1 ? this.prev(e.loop) : r < -1 && this.next(e.loop));
                }
                w(i, function(l) {
                    l.startX = l.endX, l.startY = l.endY;
                });
            }
        },
        isSwitchable: function() {
            var t = this.imageData, e = this.viewerData;
            return this.length > 1 && t.x >= 0 && t.y >= 0 && t.width <= e.width && t.height <= e.height;
        }
    }, mi = Y.Viewer, fi = (xe = -1, function() {
        return xe += 1;
    }), Oe = function() {
        function t(r) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (function(a, l) {
                if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
            }(this, t), !r || r.nodeType !== 1) throw new Error("The first argument is required and must be an element.");
            this.element = r, this.options = S({}, Bt, G(o) && o), this.action = !1, 
            this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, 
            this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, 
            this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, 
            this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, 
            this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, 
            this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zooming = !1, 
            this.pointerMoved = !1, this.id = fi(), this.init();
        }
        var e, i, n;
        return e = t, n = [ {
            key: "noConflict",
            value: function() {
                return window.Viewer = mi, t;
            }
        }, {
            key: "setDefaults",
            value: function(r) {
                S(Bt, G(r) && r);
            }
        } ], (i = [ {
            key: "init",
            value: function() {
                var r = this, o = this.element, a = this.options;
                if (!o[g]) {
                    o[g] = this, a.focus && !a.keyboard && (a.focus = !1);
                    var l = o.localName === "img", s = [];
                    if (w(l ? [ o ] : o.querySelectorAll("img"), function(u) {
                        b(a.filter) ? a.filter.call(r, u) && s.push(u) : r.getImageURL(u) && s.push(u);
                    }), this.isImg = l, this.length = s.length, this.images = s, 
                    this.initBody(), K(document.createElement(g).style.transition) && (a.transition = !1), 
                    a.inline) {
                        var h = 0, c = function() {
                            var u;
                            (h += 1) === r.length && (r.initializing = !1, r.delaying = {
                                abort: function() {
                                    clearTimeout(u);
                                }
                            }, u = setTimeout(function() {
                                r.delaying = !1, r.build();
                            }, 0));
                        };
                        this.initializing = {
                            abort: function() {
                                w(s, function(u) {
                                    u.complete || (y(u, C, c), y(u, _, c));
                                });
                            }
                        }, w(s, function(u) {
                            var f, v;
                            u.complete ? c() : (m(u, C, f = function() {
                                y(u, _, v), c();
                            }, {
                                once: !0
                            }), m(u, _, v = function() {
                                y(u, C, f), c();
                            }, {
                                once: !0
                            }));
                        });
                    } else m(o, $, this.onStart = function(u) {
                        var f = u.target;
                        f.localName !== "img" || b(a.filter) && !a.filter.call(r, f) || r.view(r.images.indexOf(f));
                    });
                }
            }
        }, {
            key: "build",
            value: function() {
                if (!this.ready) {
                    var r = this.element, o = this.options, a = r.parentNode, l = document.createElement("div");
                    l.innerHTML = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
                    var s = l.querySelector(".".concat(g, "-container")), h = s.querySelector(".".concat(g, "-title")), c = s.querySelector(".".concat(g, "-toolbar")), u = s.querySelector(".".concat(g, "-navbar")), f = s.querySelector(".".concat(g, "-button")), v = s.querySelector(".".concat(g, "-canvas"));
                    if (this.parent = a, this.viewer = s, this.title = h, this.toolbar = c, 
                    this.navbar = u, this.button = f, this.canvas = v, this.footer = s.querySelector(".".concat(g, "-footer")), 
                    this.tooltipBox = s.querySelector(".".concat(g, "-tooltip")), 
                    this.player = s.querySelector(".".concat(g, "-player")), this.list = s.querySelector(".".concat(g, "-list")), 
                    s.id = "".concat(g).concat(this.id), h.id = "".concat(g, "Title").concat(this.id), 
                    d(h, o.title ? pt(Array.isArray(o.title) ? o.title[0] : o.title) : W), 
                    d(u, o.navbar ? pt(o.navbar) : W), at(f, W, !o.button), o.keyboard && f.setAttribute("tabindex", 0), 
                    o.backdrop && (d(s, "".concat(g, "-backdrop")), o.inline || o.backdrop === "static" || St(v, ft, "hide")), 
                    ot(o.className) && o.className && o.className.split(zt).forEach(function(j) {
                        d(s, j);
                    }), o.toolbar) {
                        var z = document.createElement("ul"), T = G(o.toolbar), A = gt.slice(0, 3), F = gt.slice(7, 9), R = gt.slice(9);
                        T || d(c, pt(o.toolbar)), w(T ? o.toolbar : gt, function(j, ct) {
                            var tt = T && G(j), X = T ? At(ct) : j, H = tt && !K(j.show) ? j.show : j;
                            if (H && (o.zoomable || A.indexOf(X) === -1) && (o.rotatable || F.indexOf(X) === -1) && (o.scalable || R.indexOf(X) === -1)) {
                                var q = tt && !K(j.size) ? j.size : j, et = tt && !K(j.click) ? j.click : j, D = document.createElement("li");
                                o.keyboard && D.setAttribute("tabindex", 0), D.setAttribute("role", "button"), 
                                d(D, "".concat(g, "-").concat(X)), b(et) || St(D, ft, X), 
                                O(H) && d(D, pt(H)), [ "small", "large" ].indexOf(q) !== -1 ? d(D, "".concat(g, "-").concat(q)) : X === "play" && d(D, "".concat(g, "-large")), 
                                b(et) && m(D, $, et), z.appendChild(D);
                            }
                        }), c.appendChild(z);
                    } else d(c, W);
                    if (!o.rotatable) {
                        var P = c.querySelectorAll('li[class*="rotate"]');
                        d(P, nt), w(P, function(j) {
                            c.appendChild(j);
                        });
                    }
                    if (o.inline) d(f, Qe), M(s, {
                        zIndex: o.zIndexInline
                    }), window.getComputedStyle(a).position === "static" && M(a, {
                        position: "relative"
                    }), a.insertBefore(s, r.nextSibling); else {
                        d(f, Je), d(s, Et), d(s, mt), d(s, W), M(s, {
                            zIndex: o.zIndex
                        });
                        var N = o.container;
                        ot(N) && (N = r.ownerDocument.querySelector(N)), N || (N = this.body), 
                        N.appendChild(s);
                    }
                    o.inline && (this.render(), this.bind(), this.isShown = !0), 
                    this.ready = !0, b(o.ready) && m(r, ne, o.ready, {
                        once: !0
                    }), E(r, ne) !== !1 ? this.ready && o.inline && this.view(this.index) : this.ready = !1;
                }
            }
        } ]) && _t(e.prototype, i), n && _t(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t;
    }();
    S(Oe.prototype, li, ci, hi, ui, di);
    var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ke = function(t) {
        return t;
    }, gi = function(t, e, i) {
        switch (i.length) {
          case 0:
            return t.call(e);

          case 1:
            return t.call(e, i[0]);

          case 2:
            return t.call(e, i[0], i[1]);

          case 3:
            return t.call(e, i[0], i[1], i[2]);
        }
        return t.apply(e, i);
    }, Te = Math.max, vi = function(t, e, i) {
        return e = Te(e === void 0 ? t.length - 1 : e, 0), function() {
            for (var n = arguments, r = -1, o = Te(n.length - e, 0), a = Array(o); ++r < o; ) a[r] = n[e + r];
            r = -1;
            for (var l = Array(e + 1); ++r < e; ) l[r] = n[r];
            return l[e] = i(a), gi(t, this, l);
        };
    }, pi = function(t) {
        return function() {
            return t;
        };
    }, Ee = typeof yt == "object" && yt && yt.Object === Object && yt, bi = Ee, yi = typeof self == "object" && self && self.Object === Object && self, It = bi || yi || Function("return this")(), Ct = It.Symbol, je = Ct, ze = Object.prototype, wi = ze.hasOwnProperty, xi = ze.toString, st = je ? je.toStringTag : void 0, Oi = function(t) {
        var e = wi.call(t, st), i = t[st];
        try {
            t[st] = void 0;
            var n = !0;
        } catch {}
        var r = xi.call(t);
        return n && (e ? t[st] = i : delete t[st]), r;
    }, ki = Object.prototype.toString, Ti = Oi, Ei = function(t) {
        return ki.call(t);
    }, Ae = Ct ? Ct.toStringTag : void 0, Ft = function(t) {
        return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Ae && Ae in Object(t) ? Ti(t) : Ei(t);
    }, wt = function(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function");
    }, ji = Ft, zi = wt, Se, De = function(t) {
        if (!zi(t)) return !1;
        var e = ji(t);
        return e == "[object Function]" || e == "[object GeneratorFunction]" || e == "[object AsyncFunction]" || e == "[object Proxy]";
    }, Rt = It["__core-js_shared__"], Ie = (Se = /[^.]+$/.exec(Rt && Rt.keys && Rt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Se : "", Ai = function(t) {
        return !!Ie && Ie in t;
    }, Si = Function.prototype.toString, Di = De, Ii = Ai, Ci = wt, Fi = function(t) {
        if (t != null) {
            try {
                return Si.call(t);
            } catch {}
            try {
                return t + "";
            } catch {}
        }
        return "";
    }, Ri = /^\[object .+?Constructor\]$/, Li = Function.prototype, Mi = Object.prototype, Pi = Li.toString, Ni = Mi.hasOwnProperty, Yi = RegExp("^" + Pi.call(Ni).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Xi = function(t) {
        return !(!Ci(t) || Ii(t)) && (Di(t) ? Yi : Ri).test(Fi(t));
    }, qi = function(t, e) {
        return t == null ? void 0 : t[e];
    }, Wi = function(t, e) {
        var i = qi(t, e);
        return Xi(i) ? i : void 0;
    }, _i = function() {
        try {
            var t = Wi(Object, "defineProperty");
            return t({}, "", {}), t;
        } catch {}
    }(), Hi = pi, Ce = _i, Bi = Ce ? function(t, e) {
        return Ce(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Hi(e),
            writable: !0
        });
    } : ke, Ui = Date.now, Vi = function(t) {
        var e = 0, i = 0;
        return function() {
            var n = Ui(), r = 16 - (n - i);
            if (i = n, r > 0) {
                if (++e >= 800) return arguments[0];
            } else e = 0;
            return t.apply(void 0, arguments);
        };
    }(Bi), $i = ke, Ki = vi, Zi = Vi, Gi = function(t, e) {
        return Zi(Ki(t, e, $i), t + "");
    }, Fe = function(t, e) {
        return t === e || t != t && e != e;
    }, Re = function(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= 9007199254740991;
    }, Ji = De, Qi = Re, Le = function(t) {
        return t != null && Qi(t.length) && !Ji(t);
    }, tn = /^(?:0|[1-9]\d*)$/, Me = function(t, e) {
        var i = typeof t;
        return !!(e = e ?? 9007199254740991) && (i == "number" || i != "symbol" && tn.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }, en = Fe, nn = Le, rn = Me, on = wt, an = function(t, e, i) {
        if (!on(i)) return !1;
        var n = typeof e;
        return !!(n == "number" ? nn(i) && rn(e, i.length) : n == "string" && e in i) && en(i[e], t);
    }, sn = function(t, e) {
        for (var i = -1, n = Array(t); ++i < t; ) n[i] = e(i);
        return n;
    }, Lt = function(t) {
        return t != null && typeof t == "object";
    }, ln = Ft, cn = Lt, lt, Mt, Pe, Ne, Pt, Nt, Yt, Ye, Xe = function(t) {
        return cn(t) && ln(t) == "[object Arguments]";
    }, hn = Lt, qe = Object.prototype, un = qe.hasOwnProperty, dn = qe.propertyIsEnumerable, mn = Xe(function() {
        return arguments;
    }()) ? Xe : function(t) {
        return hn(t) && un.call(t, "callee") && !dn.call(t, "callee");
    }, fn = Array.isArray, Xt = {
        exports: {}
    };
    lt = Xt, Pe = It, Ne = function() {
        return !1;
    }, Pt = (Mt = Xt.exports) && !Mt.nodeType && Mt, Nt = Pt && lt && !lt.nodeType && lt, 
    Yt = Nt && Nt.exports === Pt ? Pe.Buffer : void 0, Ye = (Yt ? Yt.isBuffer : void 0) || Ne, 
    lt.exports = Ye;
    var gn = Ft, vn = Re, pn = Lt, x = {};
    x["[object Float32Array]"] = x["[object Float64Array]"] = x["[object Int8Array]"] = x["[object Int16Array]"] = x["[object Int32Array]"] = x["[object Uint8Array]"] = x["[object Uint8ClampedArray]"] = x["[object Uint16Array]"] = x["[object Uint32Array]"] = !0, 
    x["[object Arguments]"] = x["[object Array]"] = x["[object ArrayBuffer]"] = x["[object Boolean]"] = x["[object DataView]"] = x["[object Date]"] = x["[object Error]"] = x["[object Function]"] = x["[object Map]"] = x["[object Number]"] = x["[object Object]"] = x["[object RegExp]"] = x["[object Set]"] = x["[object String]"] = x["[object WeakMap]"] = !1;
    var bn = function(t) {
        return pn(t) && vn(t.length) && !!x[gn(t)];
    }, yn = function(t) {
        return function(e) {
            return t(e);
        };
    }, qt = {
        exports: {}
    };
    (function(t, e) {
        var i = Ee, n = e && !e.nodeType && e, r = n && t && !t.nodeType && t, o = r && r.exports === n && i.process, a = function() {
            try {
                var l = r && r.require && r.require("util").types;
                return l || o && o.binding && o.binding("util");
            } catch {}
        }();
        t.exports = a;
    })(qt, qt.exports);
    var wn = bn, xn = yn, We = qt.exports, _e = We && We.isTypedArray, On = _e ? xn(_e) : wn, kn = sn, Tn = mn, En = fn, jn = Xt.exports, zn = Me, An = On, Sn = Object.prototype.hasOwnProperty, Dn = function(t, e) {
        var i = En(t), n = !i && Tn(t), r = !i && !n && jn(t), o = !i && !n && !r && An(t), a = i || n || r || o, l = a ? kn(t.length, String) : [], s = l.length;
        for (var h in t) !e && !Sn.call(t, h) || a && (h == "length" || r && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || zn(h, s)) || l.push(h);
        return l;
    }, In = Object.prototype, Cn = wt, Fn = function(t) {
        var e = t && t.constructor;
        return t === (typeof e == "function" && e.prototype || In);
    }, Rn = function(t) {
        var e = [];
        if (t != null) for (var i in Object(t)) e.push(i);
        return e;
    }, Ln = Object.prototype.hasOwnProperty, Mn = Dn, Pn = function(t) {
        if (!Cn(t)) return Rn(t);
        var e = Fn(t), i = [];
        for (var n in t) (n != "constructor" || !e && Ln.call(t, n)) && i.push(n);
        return i;
    }, Nn = Le, Yn = Gi, Xn = Fe, qn = an, Wn = function(t) {
        return Nn(t) ? Mn(t, !0) : Pn(t);
    }, He = Object.prototype, _n = He.hasOwnProperty;
    Yn(function(t, e) {
        t = Object(t);
        var i = -1, n = e.length, r = n > 2 ? e[2] : void 0;
        for (r && qn(e[0], e[1], r) && (n = 1); ++i < n; ) for (var o = e[i], a = Wn(o), l = -1, s = a.length; ++l < s; ) {
            var h = a[l], c = t[h];
            (c === void 0 || Xn(c, He[h]) && !_n.call(t, h)) && (t[h] = o[h]);
        }
        return t;
    });
    const Hn = typeof window < "u" && window !== null;
    (function() {
        if (Hn && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) return "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
            get() {
                return this.intersectionRatio > 0;
            }
        }), !0;
    })();
    const Bn = Object.prototype.propertyIsEnumerable, Be = Object.getOwnPropertySymbols;
    function xt(t) {
        return typeof t == "function" || toString.call(t) === "[object Object]";
    }
    function Un(t) {
        return t !== "__proto__" && t !== "constructor" && t !== "prototype";
    }
    function Vn(t, ...e) {
        if (!xt(t)) throw new TypeError("expected the first argument to be an object");
        if (e.length === 0 || typeof Symbol != "function" || typeof Be != "function") return t;
        for (const i of e) {
            const n = Be(i);
            for (const r of n) Bn.call(i, r) && (t[r] = i[r]);
        }
        return t;
    }
    function Ue(t, ...e) {
        let i = 0;
        var n;
        for ((typeof (n = t) == "object" ? n === null : typeof n != "function") && (t = e[i++]), 
        t || (t = {}); i < e.length; i++) if (xt(e[i])) {
            for (const r of Object.keys(e[i])) Un(r) && (xt(t[r]) && xt(e[i][r]) ? Ue(t[r], e[i][r]) : t[r] = e[i][r]);
            Vn(t, e[i]);
        }
        return t;
    }
    Ze = ({
        images: t = [],
        options: e
    }) => {
        e = Ue(e, {
            inline: !1
        });
        const i = document.createElement("div"), n = $e("div", {
            style: {
                display: "none"
            },
            class: [ "__viewer-token" ]
        }, t.map(l => $e("img", typeof l == "string" ? {
            src: l
        } : l)));
        Ke(n, i);
        const r = i.firstElementChild;
        document.body.appendChild(r);
        const o = new Oe(r, e), a = o.destroy.bind(o);
        return o.destroy = function() {
            return a(), Ke(null, i), o;
        }, o.show(), r.addEventListener("hidden", function() {
            this.viewer === o && o.destroy();
        }), o;
    };
});

export {
    Gn as __tla,
    Ze as a
};