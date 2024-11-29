import {
    aa as ee,
    a0 as te,
    b8 as ne,
    r as t,
    U as L,
    e as re,
    w as Ie,
    f as oe,
    o as W,
    c as _,
    a as e,
    x as w,
    t as s,
    A as ae,
    G as ie,
    k as $e,
    l as Oe,
    z as Y,
    B as V,
    D as A,
    ai as _e,
    n as ce,
    dJ as ue,
    dK as pe,
    F as Ce,
    y as Be,
    aR as Ne,
    v as je,
    C as De,
    aY as Ee,
    __tla as Je
} from "./index-6c08ea4c.js";

import {
    C as K,
    __tla as Le
} from "./index-e75cf668.js";

import {
    _ as Ve
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ve, Me = Promise.all([ (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})() ]).then(async () => {
    function R(a, f = "XwKsGlMcdPMEhR1B") {
        const l = K.enc.Utf8.parse(f), o = K.enc.Utf8.parse(a);
        return K.AES.encrypt(o, l, {
            mode: K.mode.ECB,
            padding: K.pad.Pkcs7
        }).toString();
    }
    function le(a) {
        let f, l, o, g;
        const r = window, c = a.$el.parentNode.offsetWidth || r.offsetWidth, y = a.$el.parentNode.offsetHeight || r.offsetHeight;
        return f = a.imgSize.width.indexOf("%") != -1 ? parseInt(a.imgSize.width) / 100 * c + "px" : a.imgSize.width, 
        l = a.imgSize.height.indexOf("%") != -1 ? parseInt(a.imgSize.height) / 100 * y + "px" : a.imgSize.height, 
        o = a.barSize.width.indexOf("%") != -1 ? parseInt(a.barSize.width) / 100 * c + "px" : a.barSize.width, 
        g = a.barSize.height.indexOf("%") != -1 ? parseInt(a.barSize.height) / 100 * y + "px" : a.barSize.height, 
        {
            imgWidth: f,
            imgHeight: l,
            barWidth: o,
            barHeight: g
        };
    }
    const he = {
        style: {
            position: "relative"
        }
    }, de = [ "src" ], ge = [ s("i", {
        class: "iconfont icon-refresh"
    }, null, -1) ], fe = [ "textContent" ], ye = [ "textContent" ], me = [ "src" ], be = {
        __name: "VerifySlide",
        props: {
            captchaType: {
                type: String
            },
            type: {
                type: String,
                default: "1"
            },
            mode: {
                type: String,
                default: "fixed"
            },
            vSpace: {
                type: Number,
                default: 5
            },
            explain: {
                type: String,
                default: ""
            },
            imgSize: {
                type: Object,
                default: () => ({
                    width: "310px",
                    height: "155px"
                })
            },
            blockSize: {
                type: Object,
                default: () => ({
                    width: "50px",
                    height: "50px"
                })
            },
            barSize: {
                type: Object,
                default: () => ({
                    width: "310px",
                    height: "30px"
                })
            }
        },
        setup(a) {
            const f = a, {
                t: l
            } = ee(), {
                mode: o,
                captchaType: g,
                type: r,
                blockSize: c,
                explain: y
            } = te(f), {
                proxy: p
            } = ne();
            let u = t(""), z = t(""), M = t(""), P = t(""), H = t(""), m = t(""), N = t(""), b = t(""), k = t(""), j = t(""), v = L({
                imgHeight: 0,
                imgWidth: 0,
                barHeight: 0,
                barWidth: 0
            }), C = t(void 0), I = t(void 0), $ = t(void 0), B = t("#ddd"), O = t(void 0), D = t("icon-right"), E = t(!1), d = t(!1), n = t(!0), x = t(""), S = t(""), X = t(0);
            const J = re(() => p.$el.querySelector(".verify-bar-area")), U = () => {
                y.value === "" ? k.value = l("captcha.slide") : k.value = y.value, 
                se(), ce(() => {
                    let {
                        imgHeight: i,
                        imgWidth: h,
                        barHeight: T,
                        barWidth: Z
                    } = le(p);
                    v.imgHeight = i, v.imgWidth = h, v.barHeight = T, v.barWidth = Z, 
                    p.$parent.$emit("ready", p);
                }), window.removeEventListener("touchmove", function(i) {
                    F(i);
                }), window.removeEventListener("mousemove", function(i) {
                    F(i);
                }), window.removeEventListener("touchend", function() {
                    G();
                }), window.removeEventListener("mouseup", function() {
                    G();
                }), window.addEventListener("touchmove", function(i) {
                    F(i);
                }), window.addEventListener("mousemove", function(i) {
                    F(i);
                }), window.addEventListener("touchend", function() {
                    G();
                }), window.addEventListener("mouseup", function() {
                    G();
                });
            };
            Ie(r, () => {
                U();
            }), oe(() => {
                U(), p.$el.onselectstart = function() {
                    return !1;
                };
            });
            const q = i => {
                if ((i = i || window.event).touches) h = i.touches[0].pageX; else var h = i.clientX;
                X.value = Math.floor(h - J.value.getBoundingClientRect().left), 
                m.value = +new Date(), d.value == 0 && (k.value = "", $.value = "#337ab7", 
                B.value = "#337AB7", O.value = "#fff", i.stopPropagation(), E.value = !0);
            }, F = i => {
                if (i = i || window.event, E.value && d.value == 0) {
                    if (i.touches) h = i.touches[0].pageX; else var h = i.clientX;
                    var T = h - J.value.getBoundingClientRect().left;
                    T >= J.value.offsetWidth - parseInt(parseInt(c.value.width) / 2) - 2 && (T = J.value.offsetWidth - parseInt(parseInt(c.value.width) / 2) - 2), 
                    T <= 0 && (T = parseInt(parseInt(c.value.width) / 2)), C.value = T - X.value + "px", 
                    I.value = T - X.value + "px";
                }
            }, G = () => {
                if (N.value = +new Date(), E.value && d.value == 0) {
                    var i = parseInt((C.value || "0").replace("px", ""));
                    i = 310 * i / parseInt(v.imgWidth);
                    let h = {
                        captchaType: g.value,
                        pointJson: u.value ? R(JSON.stringify({
                            x: i,
                            y: 5
                        }), u.value) : JSON.stringify({
                            x: i,
                            y: 5
                        }),
                        token: H.value
                    };
                    ue(h).then(T => {
                        if (T.repCode == "0000") {
                            $.value = "#5cb85c", B.value = "#5cb85c", O.value = "#fff", 
                            D.value = "icon-check", n.value = !1, d.value = !0, 
                            o.value == "pop" && setTimeout(() => {
                                p.$parent.clickShow = !1, Q();
                            }, 1500), z.value = !0, b.value = `${((N.value - m.value) / 1e3).toFixed(2)}s
            ${l("captcha.success")}`;
                            var Z = u.value ? R(H.value + "---" + JSON.stringify({
                                x: i,
                                y: 5
                            }), u.value) : H.value + "---" + JSON.stringify({
                                x: i,
                                y: 5
                            });
                            setTimeout(() => {
                                b.value = "", p.$parent.closeBox(), p.$parent.$emit("success", {
                                    captchaVerification: Z
                                });
                            }, 1e3);
                        } else $.value = "#d9534f", B.value = "#d9534f", O.value = "#fff", 
                        D.value = "icon-close", z.value = !1, setTimeout(function() {
                            Q();
                        }, 1e3), p.$parent.$emit("error", p), b.value = l("captcha.fail"), 
                        setTimeout(() => {
                            b.value = "";
                        }, 1e3);
                    }), E.value = !1;
                }
            }, Q = async () => {
                n.value = !0, j.value = "", x.value = "left .3s", C.value = 0, I.value = void 0, 
                S.value = "width .3s", B.value = "#ddd", $.value = "#fff", O.value = "#000", 
                D.value = "icon-right", d.value = !1, await se(), setTimeout(() => {
                    S.value = "", x.value = "", k.value = y.value;
                }, 300);
            }, se = async () => {
                let i = {
                    captchaType: g.value
                };
                const h = await pe(i);
                h.repCode == "0000" ? (M.value = h.repData.originalImageBase64, 
                P.value = h.repData.jigsawImageBase64, H.value = h.repData.token, 
                u.value = h.repData.secretKey) : b.value = h.repMsg;
            };
            return (i, h) => (W(), _("div", he, [ e(r) === "2" ? (W(), _("div", {
                key: 0,
                style: w({
                    height: parseInt(e(v).imgHeight) + a.vSpace + "px"
                }),
                class: "verify-img-out"
            }, [ s("div", {
                style: w({
                    width: e(v).imgWidth,
                    height: e(v).imgHeight
                }),
                class: "verify-img-panel"
            }, [ s("img", {
                src: "data:image/png;base64," + e(M),
                alt: "",
                style: {
                    display: "block",
                    width: "100%",
                    height: "100%"
                }
            }, null, 8, de), ae(s("div", {
                class: "verify-refresh",
                onClick: Q
            }, ge, 512), [ [ ie, e(n) ] ]), $e(_e, {
                name: "tips"
            }, {
                default: Oe(() => [ e(b) ? (W(), _("span", {
                    key: 0,
                    class: Y([ e(z) ? "suc-bg" : "err-bg", "verify-tips" ])
                }, V(e(b)), 3)) : A("", !0) ]),
                _: 1
            }) ], 4) ], 4)) : A("", !0), s("div", {
                style: w({
                    width: e(v).imgWidth,
                    height: a.barSize.height,
                    "line-height": a.barSize.height
                }),
                class: "verify-bar-area"
            }, [ s("span", {
                class: "verify-msg",
                textContent: V(e(k))
            }, null, 8, fe), s("div", {
                style: w({
                    width: e(I) !== void 0 ? e(I) : a.barSize.height,
                    height: a.barSize.height,
                    "border-color": e(B),
                    transaction: e(S)
                }),
                class: "verify-left-bar"
            }, [ s("span", {
                class: "verify-msg",
                textContent: V(e(j))
            }, null, 8, ye), s("div", {
                style: w({
                    width: a.barSize.height,
                    height: a.barSize.height,
                    "background-color": e($),
                    left: e(C),
                    transition: e(x)
                }),
                class: "verify-move-block",
                onMousedown: q,
                onTouchstart: q
            }, [ s("i", {
                class: Y([ "verify-icon iconfont", e(D) ]),
                style: w({
                    color: e(O)
                })
            }, null, 6), e(r) === "2" ? (W(), _("div", {
                key: 0,
                style: w({
                    width: Math.floor(47 * parseInt(e(v).imgWidth) / 310) + "px",
                    height: e(v).imgHeight,
                    top: "-" + (parseInt(e(v).imgHeight) + a.vSpace) + "px",
                    "background-size": e(v).imgWidth + " " + e(v).imgHeight
                }),
                class: "verify-sub-block"
            }, [ s("img", {
                src: "data:image/png;base64," + e(P),
                alt: "",
                style: {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    "-webkit-user-drag": "none"
                }
            }, null, 8, me) ], 4)) : A("", !0) ], 36) ], 4) ], 4) ]));
        }
    }, xe = {
        style: {
            position: "relative"
        }
    }, Se = {
        class: "verify-img-out"
    }, we = [ s("i", {
        class: "iconfont icon-refresh"
    }, null, -1) ], ze = [ "src" ], ke = {
        class: "verify-msg"
    }, Te = {
        name: "Vue3Verify",
        components: {
            VerifySlide: be,
            VerifyPoints: {
                __name: "VerifyPoints",
                props: {
                    mode: {
                        type: String,
                        default: "fixed"
                    },
                    captchaType: {
                        type: String
                    },
                    vSpace: {
                        type: Number,
                        default: 5
                    },
                    imgSize: {
                        type: Object,
                        default: () => ({
                            width: "310px",
                            height: "155px"
                        })
                    },
                    barSize: {
                        type: Object,
                        default: () => ({
                            width: "310px",
                            height: "40px"
                        })
                    }
                },
                setup(a) {
                    const f = a, {
                        t: l
                    } = ee(), {
                        mode: o,
                        captchaType: g
                    } = te(f), {
                        proxy: r
                    } = ne();
                    let c = t(""), y = t(3), p = L([]), u = L([]), z = t(1), M = t(""), P = L([]), H = t(""), m = L({
                        imgHeight: 0,
                        imgWidth: 0,
                        barHeight: 0,
                        barWidth: 0
                    }), N = L([]), b = t(""), k = t(void 0), j = t(void 0), v = t(!0), C = t(!0);
                    oe(() => {
                        p.splice(0, p.length), u.splice(0, u.length), z.value = 1, 
                        D(), ce(() => {
                            let {
                                imgHeight: d,
                                imgWidth: n,
                                barHeight: x,
                                barWidth: S
                            } = le(r);
                            m.imgHeight = d, m.imgWidth = n, m.barHeight = x, m.barWidth = S, 
                            r.$parent.$emit("ready", r);
                        }), r.$el.onselectstart = function() {
                            return !1;
                        };
                    });
                    const I = t(null), $ = function(d, n) {
                        return {
                            x: n.offsetX,
                            y: n.offsetY
                        };
                    }, B = function(d) {
                        return N.push(Object.assign({}, d)), z.value + 1;
                    }, O = async function() {
                        N.splice(0, N.length), k.value = "#000", j.value = "#ddd", 
                        C.value = !0, p.splice(0, p.length), u.splice(0, u.length), 
                        z.value = 1, await D(), v.value = !0;
                    }, D = async () => {
                        let d = {
                            captchaType: g.value
                        };
                        const n = await pe(d);
                        n.repCode == "0000" ? (M.value = n.repData.originalImageBase64, 
                        H.value = n.repData.token, c.value = n.repData.secretKey, 
                        P.value = n.repData.wordList, b.value = l("captcha.point") + "【" + P.value.join(",") + "】") : b.value = n.repMsg;
                    }, E = function(d, n) {
                        return d.map(x => ({
                            x: Math.round(310 * x.x / parseInt(n.imgWidth)),
                            y: Math.round(155 * x.y / parseInt(n.imgHeight))
                        }));
                    };
                    return (d, n) => (W(), _("div", xe, [ s("div", Se, [ s("div", {
                        style: w({
                            width: e(m).imgWidth,
                            height: e(m).imgHeight,
                            "background-size": e(m).imgWidth + " " + e(m).imgHeight,
                            "margin-bottom": a.vSpace + "px"
                        }),
                        class: "verify-img-panel"
                    }, [ ae(s("div", {
                        class: "verify-refresh",
                        style: {
                            "z-index": "3"
                        },
                        onClick: O
                    }, we, 512), [ [ ie, e(v) ] ]), s("img", {
                        ref_key: "canvas",
                        ref: I,
                        src: "data:image/png;base64," + e(M),
                        alt: "",
                        style: {
                            display: "block",
                            width: "100%",
                            height: "100%"
                        },
                        onClick: n[0] || (n[0] = x => e(C) ? (S => {
                            if (u.push($(I, S)), z.value == y.value) {
                                z.value = B($(I, S));
                                let X = E(u, m);
                                u.length = 0, u.push(...X), setTimeout(() => {
                                    var J = c.value ? R(H.value + "---" + JSON.stringify(u), c.value) : H.value + "---" + JSON.stringify(u);
                                    let U = {
                                        captchaType: g.value,
                                        pointJson: c.value ? R(JSON.stringify(u), c.value) : JSON.stringify(u),
                                        token: H.value
                                    };
                                    ue(U).then(q => {
                                        q.repCode == "0000" ? (k.value = "#4cae4c", 
                                        j.value = "#5cb85c", b.value = l("captcha.success"), 
                                        C.value = !1, o.value == "pop" && setTimeout(() => {
                                            r.$parent.clickShow = !1, O();
                                        }, 1500), r.$parent.$emit("success", {
                                            captchaVerification: J
                                        })) : (r.$parent.$emit("error", r), k.value = "#d9534f", 
                                        j.value = "#d9534f", b.value = l("captcha.fail"), 
                                        setTimeout(() => {
                                            O();
                                        }, 700));
                                    });
                                }, 400);
                            }
                            z.value < y.value && (z.value = B($(I, S)));
                        })(x) : void 0)
                    }, null, 8, ze), (W(!0), _(Ce, null, Be(e(N), (x, S) => (W(), 
                    _("div", {
                        key: S,
                        style: w({
                            "background-color": "#1abd6c",
                            color: "#fff",
                            "z-index": 9999,
                            width: "20px",
                            height: "20px",
                            "text-align": "center",
                            "line-height": "20px",
                            "border-radius": "50%",
                            position: "absolute",
                            top: parseInt(x.y - 10) + "px",
                            left: parseInt(x.x - 10) + "px"
                        }),
                        class: "point-area"
                    }, V(S + 1), 5))), 128)) ], 4) ]), s("div", {
                        style: w({
                            width: e(m).imgWidth,
                            color: e(k),
                            "border-color": e(j),
                            "line-height": a.barSize.height
                        }),
                        class: "verify-bar-area"
                    }, [ s("span", ke, V(e(b)), 1) ], 4) ]));
                }
            }
        },
        props: {
            captchaType: {
                type: String,
                required: !0
            },
            figure: {
                type: Number
            },
            arith: {
                type: Number
            },
            mode: {
                type: String,
                default: "pop"
            },
            vSpace: {
                type: Number
            },
            explain: {
                type: String
            },
            imgSize: {
                type: Object,
                default: () => ({
                    width: "310px",
                    height: "155px"
                })
            },
            blockSize: {
                type: Object
            },
            barSize: {
                type: Object
            }
        },
        setup(a) {
            const {
                t: f
            } = ee(), {
                captchaType: l,
                mode: o
            } = te(a), g = t(!1), r = t(void 0), c = t(void 0), y = t({}), p = re(() => o.value != "pop" || g.value);
            return Ne(() => {
                switch (l.value) {
                  case "blockPuzzle":
                    r.value = "2", c.value = "VerifySlide";
                    break;

                  case "clickWord":
                    r.value = "", c.value = "VerifyPoints";
                }
            }), {
                t: f,
                clickShow: g,
                verifyType: r,
                componentType: c,
                instance: y,
                showBox: p,
                closeBox: () => {
                    g.value = !1, y.value.refresh && y.value.refresh();
                },
                show: () => {
                    o.value == "pop" && (g.value = !0);
                }
            };
        }
    }, We = {
        key: 0,
        class: "verifybox-top"
    }, He = [ s("i", {
        class: "iconfont icon-close"
    }, null, -1) ];
    ve = Ve(Te, [ [ "render", function(a, f, l, o, g, r) {
        return ae((W(), _("div", {
            class: Y(l.mode == "pop" ? "mask" : "")
        }, [ s("div", {
            class: Y(l.mode == "pop" ? "verifybox" : ""),
            style: w({
                "max-width": parseInt(l.imgSize.width) + 20 + "px"
            })
        }, [ l.mode == "pop" ? (W(), _("div", We, [ je(V(o.t("captcha.verification")) + " ", 1), s("span", {
            class: "verifybox-close",
            onClick: f[0] || (f[0] = (...c) => o.closeBox && o.closeBox(...c))
        }, He) ])) : A("", !0), s("div", {
            style: w({
                padding: l.mode == "pop" ? "10px" : "0"
            }),
            class: "verifybox-bottom"
        }, [ o.componentType ? (W(), De(Ee(o.componentType), {
            key: 0,
            ref: "instance",
            arith: l.arith,
            barSize: l.barSize,
            blockSize: l.blockSize,
            captchaType: l.captchaType,
            explain: l.explain,
            figure: l.figure,
            imgSize: l.imgSize,
            mode: l.mode,
            type: o.verifyType,
            vSpace: l.vSpace
        }, null, 8, [ "arith", "barSize", "blockSize", "captchaType", "explain", "figure", "imgSize", "mode", "type", "vSpace" ])) : A("", !0) ], 4) ], 6) ], 2)), [ [ ie, o.showBox ] ]);
    } ] ]);
});

export {
    ve as _,
    Me as __tla
};