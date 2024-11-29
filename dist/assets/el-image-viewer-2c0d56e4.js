import {
    aD as be,
    b1 as V,
    b2 as pe,
    bb as W,
    d as H,
    aX as Q,
    bP as ge,
    bQ as ke,
    a$ as _e,
    aE as xe,
    bR as ye,
    r as y,
    bS as we,
    bv as Ie,
    e as k,
    w as U,
    n as ze,
    f as he,
    o as h,
    C as j,
    k as o,
    l as m,
    t as v,
    z as f,
    a,
    x as q,
    H as Ce,
    D as C,
    aQ as p,
    bl as Ne,
    c as X,
    F as J,
    bc as Oe,
    aP as Te,
    bT as Ae,
    bU as Le,
    aY as Re,
    bV as Xe,
    bW as Ye,
    y as Se,
    A as Ee,
    G as $e,
    aI as De,
    ai as Fe,
    bm as Pe,
    aG as Be,
    bM as T,
    bX as w,
    bY as Ge,
    aL as Me,
    __tla as Ve
} from "./index-6c08ea4c.js";

import {
    t as Y,
    __tla as We
} from "./throttle-1adeb119.js";

let Z, He = Promise.all([ (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})() ]).then(async () => {
    const K = be({
        urlList: {
            type: V(Array),
            default: () => pe([])
        },
        zIndex: {
            type: Number
        },
        initialIndex: {
            type: Number,
            default: 0
        },
        infinite: {
            type: Boolean,
            default: !0
        },
        hideOnClickModal: Boolean,
        teleported: Boolean,
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        },
        zoomRate: {
            type: Number,
            default: 1.2
        },
        minScale: {
            type: Number,
            default: .2
        },
        maxScale: {
            type: Number,
            default: 7
        },
        crossorigin: {
            type: V(String)
        }
    }), ee = {
        close: () => !0,
        switch: I => W(I),
        rotate: I => W(I)
    }, ae = [ "src", "crossorigin" ], se = H({
        name: "ElImageViewer"
    });
    Z = Me(Be(H({
        ...se,
        props: K,
        emits: ee,
        setup(I, {
            expose: te,
            emit: N
        }) {
            var S;
            const c = I, z = {
                CONTAIN: {
                    name: "contain",
                    icon: Q(ge)
                },
                ORIGINAL: {
                    name: "original",
                    icon: Q(ke)
                }
            }, {
                t: le
            } = _e(), t = xe("image-viewer"), {
                nextZIndex: ne
            } = ye(), A = y(), E = y([]), $ = we(), _ = y(!0), b = y(c.initialIndex), O = Ie(z.CONTAIN), l = y({
                scale: 1,
                deg: 0,
                offsetX: 0,
                offsetY: 0,
                enableTransition: !1
            }), oe = y((S = c.zIndex) != null ? S : ne()), ie = k(() => {
                const {
                    urlList: e
                } = c;
                return e.length <= 1;
            }), D = k(() => b.value === 0), F = k(() => b.value === c.urlList.length - 1), ce = k(() => c.urlList[b.value]), ue = k(() => [ t.e("btn"), t.e("prev"), t.is("disabled", !c.infinite && D.value) ]), re = k(() => [ t.e("btn"), t.e("next"), t.is("disabled", !c.infinite && F.value) ]), de = k(() => {
                const {
                    scale: e,
                    deg: s,
                    offsetX: n,
                    offsetY: u,
                    enableTransition: i
                } = l.value;
                let r = n / e, d = u / e;
                switch (s % 360) {
                  case 90:
                  case -270:
                    [ r, d ] = [ d, -r ];
                    break;

                  case 180:
                  case -180:
                    [ r, d ] = [ -r, -d ];
                    break;

                  case 270:
                  case -90:
                    [ r, d ] = [ -d, r ];
                }
                const x = {
                    transform: `scale(${e}) rotate(${s}deg) translate(${r}px, ${d}px)`,
                    transition: i ? "transform .3s" : ""
                };
                return O.value.name === z.CONTAIN.name && (x.maxWidth = x.maxHeight = "100%"), 
                x;
            });
            function L() {
                $.stop(), N("close");
            }
            function fe() {
                _.value = !1;
            }
            function ve(e) {
                _.value = !1, e.target.alt = le("el.image.error");
            }
            function me(e) {
                if (_.value || e.button !== 0 || !A.value) return;
                l.value.enableTransition = !1;
                const {
                    offsetX: s,
                    offsetY: n
                } = l.value, u = e.pageX, i = e.pageY, r = Y(x => {
                    l.value = {
                        ...l.value,
                        offsetX: s + x.pageX - u,
                        offsetY: n + x.pageY - i
                    };
                }), d = T(document, "mousemove", r);
                T(document, "mouseup", () => {
                    d();
                }), e.preventDefault();
            }
            function P() {
                l.value = {
                    scale: 1,
                    deg: 0,
                    offsetX: 0,
                    offsetY: 0,
                    enableTransition: !1
                };
            }
            function B() {
                if (_.value) return;
                const e = Ge(z), s = Object.values(z), n = O.value.name, u = (s.findIndex(i => i.name === n) + 1) % e.length;
                O.value = z[e[u]], P();
            }
            function R(e) {
                const s = c.urlList.length;
                b.value = (e + s) % s;
            }
            function G() {
                D.value && !c.infinite || R(b.value - 1);
            }
            function M() {
                F.value && !c.infinite || R(b.value + 1);
            }
            function g(e, s = {}) {
                if (_.value) return;
                const {
                    minScale: n,
                    maxScale: u
                } = c, {
                    zoomRate: i,
                    rotateDeg: r,
                    enableTransition: d
                } = {
                    zoomRate: c.zoomRate,
                    rotateDeg: 90,
                    enableTransition: !0,
                    ...s
                };
                switch (e) {
                  case "zoomOut":
                    l.value.scale > n && (l.value.scale = Number.parseFloat((l.value.scale / i).toFixed(3)));
                    break;

                  case "zoomIn":
                    l.value.scale < u && (l.value.scale = Number.parseFloat((l.value.scale * i).toFixed(3)));
                    break;

                  case "clockwise":
                    l.value.deg += r, N("rotate", l.value.deg);
                    break;

                  case "anticlockwise":
                    l.value.deg -= r, N("rotate", l.value.deg);
                }
                l.value.enableTransition = d;
            }
            return U(ce, () => {
                ze(() => {
                    const e = E.value[0];
                    e != null && e.complete || (_.value = !0);
                });
            }), U(b, e => {
                P(), N("switch", e);
            }), he(() => {
                var e, s;
                (function() {
                    const n = Y(i => {
                        switch (i.code) {
                          case w.esc:
                            c.closeOnPressEscape && L();
                            break;

                          case w.space:
                            B();
                            break;

                          case w.left:
                            G();
                            break;

                          case w.up:
                            g("zoomIn");
                            break;

                          case w.right:
                            M();
                            break;

                          case w.down:
                            g("zoomOut");
                        }
                    }), u = Y(i => {
                        g((i.deltaY || i.deltaX) < 0 ? "zoomIn" : "zoomOut", {
                            zoomRate: c.zoomRate,
                            enableTransition: !1
                        });
                    });
                    $.run(() => {
                        T(document, "keydown", n), T(document, "wheel", u);
                    });
                })(), (s = (e = A.value) == null ? void 0 : e.focus) == null || s.call(e);
            }), te({
                setActiveItem: R
            }), (e, s) => (h(), j(Pe, {
                to: "body",
                disabled: !e.teleported
            }, [ o(Fe, {
                name: "viewer-fade",
                appear: ""
            }, {
                default: m(() => [ v("div", {
                    ref_key: "wrapper",
                    ref: A,
                    tabindex: -1,
                    class: f(a(t).e("wrapper")),
                    style: q({
                        zIndex: oe.value
                    })
                }, [ v("div", {
                    class: f(a(t).e("mask")),
                    onClick: s[0] || (s[0] = Ce(n => e.hideOnClickModal && L(), [ "self" ]))
                }, null, 2), C(" CLOSE "), v("span", {
                    class: f([ a(t).e("btn"), a(t).e("close") ]),
                    onClick: L
                }, [ o(a(p), null, {
                    default: m(() => [ o(a(Ne)) ]),
                    _: 1
                }) ], 2), C(" ARROW "), a(ie) ? C("v-if", !0) : (h(), X(J, {
                    key: 0
                }, [ v("span", {
                    class: f(a(ue)),
                    onClick: G
                }, [ o(a(p), null, {
                    default: m(() => [ o(a(Oe)) ]),
                    _: 1
                }) ], 2), v("span", {
                    class: f(a(re)),
                    onClick: M
                }, [ o(a(p), null, {
                    default: m(() => [ o(a(Te)) ]),
                    _: 1
                }) ], 2) ], 64)), C(" ACTIONS "), v("div", {
                    class: f([ a(t).e("btn"), a(t).e("actions") ])
                }, [ v("div", {
                    class: f(a(t).e("actions__inner"))
                }, [ o(a(p), {
                    onClick: s[1] || (s[1] = n => g("zoomOut"))
                }, {
                    default: m(() => [ o(a(Ae)) ]),
                    _: 1
                }), o(a(p), {
                    onClick: s[2] || (s[2] = n => g("zoomIn"))
                }, {
                    default: m(() => [ o(a(Le)) ]),
                    _: 1
                }), v("i", {
                    class: f(a(t).e("actions__divider"))
                }, null, 2), o(a(p), {
                    onClick: B
                }, {
                    default: m(() => [ (h(), j(Re(a(O).icon))) ]),
                    _: 1
                }), v("i", {
                    class: f(a(t).e("actions__divider"))
                }, null, 2), o(a(p), {
                    onClick: s[3] || (s[3] = n => g("anticlockwise"))
                }, {
                    default: m(() => [ o(a(Xe)) ]),
                    _: 1
                }), o(a(p), {
                    onClick: s[4] || (s[4] = n => g("clockwise"))
                }, {
                    default: m(() => [ o(a(Ye)) ]),
                    _: 1
                }) ], 2) ], 2), C(" CANVAS "), v("div", {
                    class: f(a(t).e("canvas"))
                }, [ (h(!0), X(J, null, Se(e.urlList, (n, u) => Ee((h(), X("img", {
                    ref_for: !0,
                    ref: i => E.value[u] = i,
                    key: n,
                    src: n,
                    style: q(a(de)),
                    class: f(a(t).e("img")),
                    crossorigin: e.crossorigin,
                    onLoad: fe,
                    onError: ve,
                    onMousedown: me
                }, null, 46, ae)), [ [ $e, u === b.value ] ])), 128)) ], 2), De(e.$slots, "default") ], 6) ]),
                _: 3
            }) ], 8, [ "disabled" ]));
        }
    }), [ [ "__file", "image-viewer.vue" ] ]));
});

export {
    Z as E,
    He as __tla
};