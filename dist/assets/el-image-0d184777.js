import {
    aD as te,
    b1 as k,
    b2 as se,
    bb as ie,
    d as $,
    a$ as oe,
    aE as ne,
    bH as re,
    bI as ce,
    r as c,
    e as u,
    bJ as p,
    w as ue,
    f as ve,
    o as n,
    c as v,
    aI as z,
    t as M,
    B as de,
    a,
    z as g,
    F as A,
    aJ as fe,
    D as y,
    C as pe,
    l as ye,
    x as me,
    aG as ge,
    n as be,
    bK as we,
    bF as he,
    bL as _e,
    bM as D,
    bN as Se,
    bO as xe,
    aL as ke,
    __tla as ze
} from "./index-6c08ea4c.js";

import {
    E as Ee,
    __tla as Le
} from "./el-image-viewer-2c0d56e4.js";

let T, Ie = Promise.all([ (() => {
    try {
        return ze;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})() ]).then(async () => {
    const F = te({
        hideOnClickModal: Boolean,
        src: {
            type: String,
            default: ""
        },
        fit: {
            type: String,
            values: [ "", "contain", "cover", "fill", "none", "scale-down" ],
            default: ""
        },
        loading: {
            type: String,
            values: [ "eager", "lazy" ]
        },
        lazy: Boolean,
        scrollContainer: {
            type: k([ String, Object ])
        },
        previewSrcList: {
            type: k(Array),
            default: () => se([])
        },
        previewTeleported: Boolean,
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
            type: k(String)
        }
    }), J = {
        load: i => i instanceof Event,
        error: i => i instanceof Event,
        switch: i => ie(i),
        close: () => !0,
        show: () => !0
    }, K = [ "src", "loading", "crossorigin" ], P = {
        key: 0
    }, j = $({
        name: "ElImage",
        inheritAttrs: !1
    });
    T = ke(ge($({
        ...j,
        props: F,
        emits: J,
        setup(i, {
            emit: d
        }) {
            const l = i;
            let E = "";
            const {
                t: H
            } = oe(), o = ne("image"), R = re(), Y = ce(), b = c(), f = c(!1), r = c(!0), w = c(!1), m = c(), s = c(), q = p && "loading" in HTMLImageElement.prototype;
            let h, _;
            const G = u(() => [ o.e("inner"), S.value && o.e("preview"), r.value && o.is("loading") ]), Q = u(() => R.style), U = u(() => {
                const {
                    fit: e
                } = l;
                return p && e ? {
                    objectFit: e
                } : {};
            }), S = u(() => {
                const {
                    previewSrcList: e
                } = l;
                return Array.isArray(e) && e.length > 0;
            }), V = u(() => {
                const {
                    previewSrcList: e,
                    initialIndex: t
                } = l;
                let O = t;
                return t > e.length - 1 && (O = 0), O;
            }), L = u(() => l.loading !== "eager" && (!q && l.loading === "lazy" || l.lazy)), x = () => {
                p && (r.value = !0, f.value = !1, b.value = l.src);
            };
            function W(e) {
                r.value = !1, f.value = !1, d("load", e);
            }
            function X(e) {
                r.value = !1, f.value = !0, d("error", e);
            }
            function I() {
                Se(m.value, s.value) && (x(), N());
            }
            const C = xe(I, 200, !0);
            async function B() {
                var e;
                if (!p) return;
                await be();
                const {
                    scrollContainer: t
                } = l;
                we(t) ? s.value = t : he(t) && t !== "" ? s.value = (e = document.querySelector(t)) != null ? e : void 0 : m.value && (s.value = _e(m.value)), 
                s.value && (h = D(s, "scroll", C), setTimeout(() => I(), 100));
            }
            function N() {
                p && s.value && C && (h == null || h(), s.value = void 0);
            }
            function Z(e) {
                if (e.ctrlKey) return e.deltaY < 0 || e.deltaY > 0 ? (e.preventDefault(), 
                !1) : void 0;
            }
            function ee() {
                S.value && (_ = D("wheel", Z, {
                    passive: !1
                }), E = document.body.style.overflow, document.body.style.overflow = "hidden", 
                w.value = !0, d("show"));
            }
            function ae() {
                _ == null || _(), document.body.style.overflow = E, w.value = !1, 
                d("close");
            }
            function le(e) {
                d("switch", e);
            }
            return ue(() => l.src, () => {
                L.value ? (r.value = !0, f.value = !1, N(), B()) : x();
            }), ve(() => {
                L.value ? B() : x();
            }), (e, t) => (n(), v("div", {
                ref_key: "container",
                ref: m,
                class: g([ a(o).b(), e.$attrs.class ]),
                style: me(a(Q))
            }, [ f.value ? z(e.$slots, "error", {
                key: 0
            }, () => [ M("div", {
                class: g(a(o).e("error"))
            }, de(a(H)("el.image.error")), 3) ]) : (n(), v(A, {
                key: 1
            }, [ b.value !== void 0 ? (n(), v("img", fe({
                key: 0
            }, a(Y), {
                src: b.value,
                loading: e.loading,
                style: a(U),
                class: a(G),
                crossorigin: e.crossorigin,
                onClick: ee,
                onLoad: W,
                onError: X
            }), null, 16, K)) : y("v-if", !0), r.value ? (n(), v("div", {
                key: 1,
                class: g(a(o).e("wrapper"))
            }, [ z(e.$slots, "placeholder", {}, () => [ M("div", {
                class: g(a(o).e("placeholder"))
            }, null, 2) ]) ], 2)) : y("v-if", !0) ], 64)), a(S) ? (n(), v(A, {
                key: 2
            }, [ w.value ? (n(), pe(a(Ee), {
                key: 0,
                "z-index": e.zIndex,
                "initial-index": a(V),
                infinite: e.infinite,
                "zoom-rate": e.zoomRate,
                "min-scale": e.minScale,
                "max-scale": e.maxScale,
                "url-list": e.previewSrcList,
                "hide-on-click-modal": e.hideOnClickModal,
                teleported: e.previewTeleported,
                "close-on-press-escape": e.closeOnPressEscape,
                onClose: ae,
                onSwitch: le
            }, {
                default: ye(() => [ e.$slots.viewer ? (n(), v("div", P, [ z(e.$slots, "viewer") ])) : y("v-if", !0) ]),
                _: 3
            }, 8, [ "z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "url-list", "hide-on-click-modal", "teleported", "close-on-press-escape" ])) : y("v-if", !0) ], 64)) : y("v-if", !0) ], 6));
        }
    }), [ [ "__file", "image.vue" ] ]));
});

export {
    T as E,
    Ie as __tla
};