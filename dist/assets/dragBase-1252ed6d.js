import {
    p as me,
    r as n,
    f as Ae,
    n as I,
    g as he,
    w as ge,
    o as H,
    c as S,
    A as ee,
    G as ae,
    a as o,
    t as h,
    B as te,
    D as le,
    H as E,
    k as fe,
    z as pe,
    x as we,
    _ as ye,
    R as be,
    S as Ee,
    __tla as Be
} from "./index-6c08ea4c.js";

import {
    H as Re
} from "./human.esm-bde48517.js";

import {
    _ as xe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ne, Ce = Promise.all([ (() => {
    try {
        return Be;
    } catch {}
})() ]).then(async () => {
    let B, V, N, O, j, _, z, K, q;
    B = p => (be("data-v-b3569a19"), p = p(), Ee(), p), V = {
        style: {
            width: "100%",
            height: "100%"
        }
    }, N = {
        key: 0,
        class: "video-title"
    }, O = B(() => h("div", {
        class: "video-title-status"
    }, null, -1)), j = {
        class: "video-title-text"
    }, _ = [ B(() => h("img", {
        style: {
            width: "16px",
            height: "16px",
            margin: "9.5px"
        },
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB9SURBVEiJY2AYEcDY2DjA2Ng4gBy9TESq84dimllANhi1YOAtYIExoMkQV0qxYWBgOEKOBcT64Mj////XkmPB0AeM5GgyMjLyYWRkDMajZOPZs2c3MDCQmYqghtsQo5aFsBKc4MjZs2cTCSka+hlt1AKCgNxUtJGqrhjUAAC4xhMNYZcCeAAAAABJRU5ErkJggg==",
        alt: ""
    }, null, -1)) ], z = {
        class: "camera-box"
    }, K = B(() => h("img", {
        style: {},
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFTSURBVEiJ5ZQvSwRRFMV/VzYYN2wxCBsMBoPBsEWw2K2CxaygoGDxexj8AH6ARVAMu2Cx2DYKChsswho3CD+Db2Fcdmbf+ieIBwZmzr3vnHvffW/gX0Gtq/XfED5W++ogPX314KfE22pHXS5wy4lrf1f8UO1UxDvq/ncM+mOVf5qBuqL2vypeVweF7/PCDM4K/KBq8HMVHnXgNYlsAavAArAIrCWOlFNqUMvpBlgCuhExTIbdxE1FrsEVcJOEa8AOsPljBhHRU3eBo0TtRkQvs7jJUJvqY0beo9osi1cN+Y28Dmspd3ZMO4LjR3kSqjoAuAZOKuKnwOUUjXKoDfVZ3ZsQ2083vVGlERkmS8AFMA90E70BDIHtiHiYtfAyo1b6s7bVVu663ItGRNyp96P37HVlgbS3t3xszQijE/Va4IbAekS8zGSQTJpZVUY85eT9TbwDan/mBlO4Y6cAAAAASUVORK5CYII=",
        alt: ""
    }, null, -1)), q = {
        class: "camera-text"
    }, ne = xe({
        __name: "dragBase",
        props: {
            distanceRight: {
                type: Number,
                default: 0
            },
            distanceBottom: {
                type: Number,
                default: 100
            },
            isScrollHidden: {
                type: Boolean,
                default: !1
            },
            isCanDraggable: {
                type: Boolean,
                default: !0
            },
            zIndex: {
                type: Number,
                default: 50
            },
            value: {
                type: String,
                default: "悬浮球！"
            },
            faceResultList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "handlepaly", "detectionAnomaly" ],
        setup(p, {
            emit: ue
        }) {
            const ie = me(), W = ue, s = n(null), t = n(null), d = n(null), R = n(!1), u = n(null), r = n(null), l = n(0), v = n(0), x = n(null), X = n(0), Z = n(0), L = n(0), y = n(""), c = n(""), g = n(!1), C = new Re({
                backend: "webgl",
                modelBasePath: "./models",
                face: {
                    emotion: {
                        enabled: !1
                    }
                },
                body: {
                    enabled: !1
                },
                hand: {
                    enabled: !1
                },
                gesture: {
                    enabled: !1
                }
            }), Q = n(null), m = p;
            Ae(async () => {
                u.value = document.documentElement.clientWidth, r.value = document.documentElement.clientHeight, 
                m.isCanDraggable && I(() => {
                    t.value = s.value.getBoundingClientRect(), l.value = u.value - t.value.width - m.distanceRight, 
                    v.value = r.value - t.value.height - m.distanceBottom, U();
                }), m.isScrollHidden && window.addEventListener("scroll", ve), window.addEventListener("resize", ce), 
                await async function() {
                    await C.load(), await C.warmup();
                }(), T("1"), await F();
            }), he(() => {
                y.value = "";
            }), ge(() => y.value, a => {
                a && (c.value = a, ie.warning(a), G());
            });
            let D, w = 0;
            async function F() {
                var i, f, Y, b, J, P;
                let a = 0, e = await C.detect(d.value);
                for (let A = 0; A < Math.min(5, m.faceResultList.length); A++) {
                    const $ = (Y = (f = (i = m.faceResultList[A]) == null ? void 0 : i.face) == null ? void 0 : f[0]) == null ? void 0 : Y.embedding;
                    if ($ && ((J = (b = e == null ? void 0 : e.face) == null ? void 0 : b[0]) != null && J.embedding)) {
                        const re = C.match.similarity($, e.face[0].embedding);
                        a = Math.max(a, re);
                    }
                }
                if (requestAnimationFrame(F), a < .7 ? (w || (w = Date.now()), c.value || (c.value = "识别异常")) : (w = null, 
                c.value = ""), w && Date.now() - w >= 18e4) {
                    if ((P = d.value) != null && P.srcObject) {
                        let A = document.createElement("canvas");
                        A.width = d.value.videoWidth, A.height = d.value.videoHeight, 
                        A.getContext("2d").drawImage(d.value, 0, 0, A.width, A.height), 
                        Q.value = A.toDataURL("image/png");
                    }
                    I(() => {
                        W("detectionAnomaly", Q.value);
                    }), w = null;
                }
            }
            function oe() {
                g.value = !0, I(() => {
                    u.value = document.documentElement.clientWidth, r.value = document.documentElement.clientHeight, 
                    setTimeout(() => {
                        t.value = s.value.getBoundingClientRect(), l.value = u.value - t.value.width - m.distanceRight, 
                        v.value = r.value - t.value.height - m.distanceBottom, U();
                    }, 300);
                });
            }
            function T(a) {
                navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                    audio: !1,
                    video: {
                        facingMode: "user",
                        resizeMode: "none",
                        width: {
                            ideal: d.value.clientWidth
                        },
                        aspectRatio: d.value.clientWidth / d.value.clientHeight
                    }
                }).then(e => {
                    d.value && (d.value.srcObject = e, D && clearInterval(D), c.value = "", 
                    y.value = "", e.oninactive = i => {
                        setTimeout(() => {
                            c.value = "摄像头异常";
                        }, 500), G();
                    });
                }).catch(e => {
                    a === "1" && function(i) {
                        i.name === "NotAllowedError" ? M(1) : i.name === "NotFoundError" ? M(2) : M(3);
                    }(e);
                }) : a === "1" && M(4);
            }
            function M(a) {
                switch (a) {
                  case 1:
                  case 3:
                  case 4:
                    y.value = "无法调用摄像头";
                    break;

                  case 2:
                    y.value = "未检测到摄像头";
                }
            }
            function G() {
                clearInterval(D), D = setInterval(T, 5e3);
            }
            function U() {
                s.value.addEventListener("touchstart", (R.value = !1, void (s.value.style.transition = "none"))), 
                s.value.addEventListener("touchmove", a => function(e) {
                    if (R.value = !0, e.targetTouches.length === 1) {
                        let i = event.targetTouches[0];
                        l.value = i.clientX - t.value.width / 2, v.value = i.clientY - t.value.height / 2;
                    }
                }(a)), s.value.addEventListener("touchend", function() {
                    R.value && (s.value.style.transition = "all 0.3s", k());
                }());
            }
            function k() {
                l.value + t.value.width / 2 >= u.value / 2 ? l.value = u.value - t.value.width : l.value = 0, 
                v.value < 0 && (v.value = 0), v.value + t.value.height >= r.value && (v.value = r.value - t.value.height);
            }
            function ve() {
                x.value && clearTimeout(x.value), x.value = setTimeout(() => {
                    (document.documentElement.scrollTop || document.body.scrollTop) === X.value && (l.value > u.value / 2 ? l.value = u.value - t.value.width : l.value = 0, 
                    clearTimeout(x));
                }, 200), X.value = document.documentElement.scrollTop || document.body.scrollTop, 
                l.value > u.value / 2 ? l.value = u.value + t.value.width : l.value = -t.value.width;
            }
            function ce() {
                u.value = document.documentElement.clientWidth, r.value = document.documentElement.clientHeight, 
                k();
            }
            function se(a) {
                const e = a || window.event;
                Z.value = e.screenX, L.value = e.screenY;
                let i = t.value.width / 2, f = t.value.height / 2;
                e.preventDefault && e.preventDefault(), R.value = !1, s.value.style.transition = "none", 
                document.onmousemove = function(Y) {
                    var b = Y || window.event;
                    l.value = b.clientX - i, v.value = b.clientY - f, l.value < 0 && (l.value = 0), 
                    v.value < 0 && (v.value = 0), l.value >= u.value - 2 * i && (l.value = u.value - 2 * i), 
                    v.value >= r.value - 2 * f && (v.value = r.value - 2 * f);
                };
            }
            function de(a) {
                const e = a || window.event;
                L.value == e.screenY && Z.value == e.screenX && (W("handlepaly"), 
                g.value && (g.value = !1, I(() => {
                    u.value = document.documentElement.clientWidth, r.value = document.documentElement.clientHeight, 
                    setTimeout(() => {
                        t.value = s.value.getBoundingClientRect(), l.value = u.value - t.value.width - m.distanceRight, 
                        v.value = r.value - t.value.height - m.distanceBottom, U();
                    }, 300);
                }))), document.onmousemove = null, k(), s.value.style.transition = "all 0.3s";
            }
            return (a, e) => {
                const i = ye;
                return H(), S("div", {
                    ref_key: "floatDrag",
                    ref: s,
                    class: pe([ "float-position", o(g) && o(c) ? "icon-body icon-error-color" : o(g) && !o(c) ? "icon-body icon-color" : "video" ]),
                    style: we({
                        left: o(l) + "px",
                        top: o(v) + "px",
                        zIndex: p.zIndex
                    }),
                    onTouchmove: e[0] || (e[0] = E(() => {}, [ "prevent" ])),
                    onMousemove: e[1] || (e[1] = E(() => {}, [ "prevent" ])),
                    onMousedown: se,
                    onMouseup: de,
                    onClick: e[2] || (e[2] = E((...f) => a.handleMagnify && a.handleMagnify(...f), [ "prevent", "stop" ]))
                }, [ ee(h("div", V, [ o(c) ? (H(), S("div", N, [ O, h("p", j, te(o(c)), 1) ])) : le("", !0), o(c) !== "识别异常" && o(c) !== "" ? (H(), 
                S("div", {
                    key: 1,
                    class: "icon-rebox",
                    onClick: E(T, [ "prevent", "stop" ])
                }, [ fe(i, {
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    icon: "ep:refresh-right"
                }) ])) : le("", !0), h("div", {
                    class: "icon-box",
                    onClick: E(oe, [ "prevent", "stop" ])
                }, _), h("video", {
                    style: {
                        width: "100%",
                        height: "100%",
                        "object-fit": "cover"
                    },
                    ref_key: "video",
                    ref: d,
                    class: "camera",
                    autoplay: ""
                }, null, 512) ], 512), [ [ ae, !o(g) ] ]), ee(h("div", z, [ K, h("p", q, te(o(g) && o(c) ? o(c) === "识别异常" ? "识别异常" : "摄像头异常" : "监控中"), 1) ], 512), [ [ ae, o(g) ] ]) ], 38);
            };
        }
    }, [ [ "__scopeId", "data-v-b3569a19" ] ]);
});

export {
    Ce as __tla,
    ne as default
};