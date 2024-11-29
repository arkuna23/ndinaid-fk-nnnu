import {
    r as u,
    p as Be,
    aV as Fe,
    f as Me,
    h as W,
    o as m,
    c as f,
    a as e,
    t as l,
    k as L,
    l as U,
    v as w,
    z as K,
    F as Pe,
    y as Ve,
    B as G,
    C as Ne,
    D as P,
    A as j,
    x as Le,
    G as E,
    m as ze,
    J as He,
    cn as Te,
    a9 as We,
    R as Ke,
    S as Ge,
    __tla as qe
} from "./index-6c08ea4c.js";

import {
    E as Qe,
    __tla as Xe
} from "./el-link-8197297a.js";

import {
    H as Ye
} from "./human.esm-bde48517.js";

import {
    i as Re,
    __tla as Ze
} from "./informationGathering-f22611ed.js";

import {
    a as $e,
    k as ea,
    __tla as aa
} from "./file-e038b35d.js";

import la, {
    __tla as ta
} from "./solution-dcea957b.js";

import {
    _ as ua
} from "./_plugin-vue_export-helper-1b428a4d.js";

let Se, ia = Promise.all([ (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})() ]).then(async () => {
    let q, Q, X, Y, Z, $, ee, _, ae, le, te, ue, ie, ne, se, re, ce, ve, oe, de, he, me, pe, fe, ge, ye, we, _e, be, ke;
    q = "" + new URL("no-image-9b80016e.png", import.meta.url).href, Q = "" + new URL("error-image-9b6138b6.png", import.meta.url).href, 
    X = "" + new URL("head-182984d9.png", import.meta.url).href, Y = "" + new URL("up-head-ba550bed.png", import.meta.url).href, 
    Z = "" + new URL("down-head-43179de7.png", import.meta.url).href, $ = "" + new URL("left-head-b40e0e00.png", import.meta.url).href, 
    ee = "" + new URL("right-head-81d4bd72.png", import.meta.url).href, _ = D => (Ke("data-v-bf6b1178"), 
    D = D(), Ge(), D), ae = {
        class: "app-container"
    }, le = {
        key: 0,
        class: "no-data"
    }, te = _(() => l("img", {
        src: q,
        alt: ""
    }, null, -1)), ue = _(() => l("div", null, [ l("span", null, "请您采集人脸识别基准照片，作为考试时人脸识别比对的照片。") ], -1)), 
    ie = _(() => l("div", null, [ l("span", null, "采集完成后，如需更改，需要联系学校管理员处理。") ], -1)), 
    ne = {
        key: 1,
        class: "main"
    }, se = {
        class: "main-left"
    }, re = {
        class: "view",
        style: {
            direction: "rtl"
        }
    }, ce = [ "onClick" ], ve = [ "src" ], oe = {
        class: "main-right"
    }, de = [ "src" ], he = {
        key: 0,
        class: "error-message"
    }, me = {
        key: 0,
        src: Q,
        alt: "",
        style: {
            "margin-bottom": "15px"
        }
    }, pe = {
        class: "message"
    }, fe = _(() => l("div", null, " 说明： ", -1)), ge = _(() => l("div", null, " 1、推荐使用PC客户端进行信息采集，网页端只支持Chrome浏览器 ", -1)), 
    ye = _(() => l("div", null, " 3、当显示未检测到摄像头时：请检查摄像头硬件设备是否完好 ", -1)), we = {
        key: 1
    }, _e = {
        key: 2
    }, be = _(() => l("div", null, "人脸识别基准照片采集已完成，照片将作为考试时人脸识别比对的照片。如需更改，需要联系学校管理员处理。", -1)), 
    ke = {
        __name: "index",
        setup(D) {
            JSON.parse('{"source":"NEUNSE","bucketName":"neunsebucket","indexName":"neunseindex"}');
            const A = u(!1), J = u(!1), B = Be(), V = u(null), R = u(null), S = u(!0), I = u(!1), F = u(!1), n = u(!1), d = u([]), O = u([]), Ie = u([ "正面", "向上30度", "向下30度", "向左30度", "向右30度" ]), b = u(0), z = u(!1), g = u(null), o = u(null), c = u(null), s = u(void 0), H = new Ye({
                backend: "webgl",
                modelBasePath: "./models",
                body: {
                    enabled: !1
                },
                hand: {
                    enabled: !1
                }
            });
            function xe(a) {
                if (O.value.length > 0 && O.value[a]) return $e(O.value[a].eid);
                if (d.value.length > 0 && d.value[a]) return d.value[a];
                switch (a) {
                  case 0:
                    return X;

                  case 1:
                    return Y;

                  case 2:
                    return Z;

                  case 3:
                    return $;

                  case 4:
                    return ee;
                }
            }
            async function Ce() {
                z.value = !0, n.value = !0;
                try {
                    await (async () => {
                        await H.load(), await H.warmup();
                    })(), await new Promise((a, r) => {
                        navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                            audio: !1,
                            video: {
                                facingMode: "user",
                                resizeMode: "none",
                                width: {
                                    ideal: o.value.clientWidth
                                },
                                aspectRatio: o.value.clientWidth / o.value.clientHeight
                            }
                        }).then(t => {
                            o.value && (o.value.srcObject = t, a("操作成功！"));
                        }).catch(t => {
                            (function(v) {
                                v.name === "NotAllowedError" ? M(1) : v.name === "NotFoundError" ? M(2) : M(3);
                            })(t), r("操作失败！");
                        }) : (M(4), r("操作失败！"));
                    });
                } catch {} finally {
                    z.value = !1;
                }
            }
            function Ue() {
                Re.getListById(W().user.id).then(a => {
                    (a == null ? void 0 : a.collectionStatus) === void 0 ? (F.value = !1, 
                    n.value = !1, R.value = 0) : a.collectionStatus === "0" ? (F.value = !0, 
                    n.value = !1, O.value = JSON.parse(a.pictures), V.value = a.updateTime, 
                    R.value = null) : a.collectionStatus === "1" && (F.value = !0, 
                    n.value = !1, O.value = JSON.parse(a.pictures), V.value = a.updateTime, 
                    R.value = 1);
                });
            }
            function Oe() {
                O.value = [], Ce();
            }
            function M(a) {
                switch (a) {
                  case 1:
                  case 3:
                  case 4:
                    g.value = "无法调用摄像头";
                    break;

                  case 2:
                    g.value = "未检测到摄像头";
                }
            }
            Fe(() => {
                var a;
                (a = o.value) != null && a.srcObject && (o.value.srcObject.getTracks().forEach(r => {
                    r.stop();
                }), o.value = null);
            }), Me(() => {
                Ue();
            });
            const k = u(!0);
            async function je() {
                var a;
                if ((a = o.value) != null && a.srcObject && c.value) {
                    c.value.width = o.value.videoWidth, c.value.height = o.value.videoHeight;
                    const r = c.value.getContext("2d");
                    if (r) {
                        k.value = !1, r.drawImage(o.value, 0, 0, c.value.width, c.value.height), 
                        s.value = c.value.toDataURL("image/png");
                        const t = new Image();
                        t.src = s.value, S.value = !0;
                        let v = await H.detect(t);
                        const {
                            persons: p
                        } = v;
                        p.length === 0 ? (I.value = !0, g.value = "当前拍摄的照片中没有人像/请您调整拍摄的角度") : p.length > 1 ? (I.value = !0, 
                        g.value = "检测到多个人员，请重新拍摄") : p.length === 1 && (!function(y, x) {
                            switch (x) {
                              case 0:
                                return y.some(i => i.gesture === "facing center");

                              case 1:
                                return y.some(i => i.gesture === "head up");

                              case 2:
                                return y.some(i => i.gesture === "head down");

                              case 3:
                                return y.some(i => i.gesture === "facing left");

                              case 4:
                                return y.some(i => i.gesture === "facing right");
                            }
                        }(p[0].gestures, b.value) || p[0].face.score < 1) && (I.value = !0, 
                        g.value = "当前拍摄的照片中没有人像/请您调整拍摄的角度");
                    }
                }
            }
            function Ee() {
                B.confirm("确定保存照片吗？").then(() => {
                    d.value[b.value] = s.value;
                });
            }
            function De() {
                g.value = "", I.value = !1, s.value = void 0, k.value = !0;
            }
            function Ae() {
                B.confirm("确定提交吗？").then(() => {
                    J.value = !0, new FormData();
                    let a = [];
                    d.value.forEach((t, v) => {
                        a[v] = function(p, y) {
                            let x = p.split(","), i = x[0].match(/:(.*?);/)[1], T = atob(x[1]), h = T.length, C = new Uint8Array(h);
                            for (;h--; ) C[h] = T.charCodeAt(h);
                            return new File([ C ], y, {
                                type: i
                            });
                        }(t, W().user.nickname + "_" + v + ".png");
                    });
                    let r = {
                        userName: R.value === 1 ? W().user.id : null,
                        pictures: [],
                        collectionStatus: 0
                    };
                    ea(a).then(t => {
                        t.data.data.forEach((v, p) => {
                            r.pictures[v.objectKey.match(/_([^.]*?)(?=\.)/)[1]] = {
                                eid: v.eid,
                                tpye: v.objectKey.match(/_([^.]*?)(?=\.)/)[1]
                            };
                        }), r.pictures = JSON.stringify(r.pictures), Re.putImgList(r).then(v => {
                            B.success("操作成功"), Ue();
                        }).catch(() => {
                            J.value = !1;
                        });
                    }).catch(t => {
                        J.value = !1;
                    });
                });
            }
            function Je() {
                A.value = !0;
            }
            return (a, r) => {
                const t = He, v = Te, p = Qe, y = We;
                return m(), f("div", ae, [ e(F) || e(n) ? (m(), f("div", ne, [ l("div", se, [ l("div", {
                    class: K(e(n) || e(R) === 1 ? "start" : "nostart")
                }, [ L(v, {
                    noresize: ""
                }, {
                    default: U(() => [ l("div", re, [ (m(!0), f(Pe, null, Ve(e(Ie), (x, i) => (m(), 
                    f("div", {
                        class: K([ "card", e(b) === i ? "isActive" : "" ]),
                        key: i,
                        onClick: T => function(h) {
                            if (n.value) if (d.value[b.value] === s.value || s.value === void 0) {
                                if (d.value[h]) {
                                    s.value = d.value[h];
                                    const C = c.value.getContext("2d");
                                    if (C) {
                                        const N = new Image();
                                        N.onload = function() {
                                            C.drawImage(N, 0, 0, c.value.width, c.value.height);
                                        }, N.src = s.value;
                                    }
                                    S.value = !1, k.value = !1;
                                } else k.value = !0, S.value = !0, s.value = void 0;
                                b.value = h;
                            } else B.confirm("您的照片还未保存，确定要离开吗？").then(() => {
                                if (d.value[h]) {
                                    s.value = d.value[h];
                                    const C = c.value.getContext("2d");
                                    if (C) {
                                        const N = new Image();
                                        N.onload = function() {
                                            C.drawImage(N, 0, 0, c.value.width, c.value.height);
                                        }, N.src = s.value;
                                    }
                                    S.value = !1, k.value = !1;
                                } else k.value = !0, S.value = !0, s.value = void 0;
                                g.value = "", b.value = h, I.value = !1;
                            }); else b.value = h;
                        }(i)
                    }, [ l("div", {
                        class: K(e(d)[i] ? "img-right" : "")
                    }, [ l("img", {
                        src: xe(i),
                        height: "130",
                        width: "130",
                        alt: ""
                    }, null, 8, ve) ], 2), w(" " + G(x), 1) ], 10, ce))), 128)) ]) ]),
                    _: 1
                }) ], 2), e(n) ? (m(), Ne(t, {
                    key: 0,
                    disabled: e(d).length !== 5,
                    class: "btn",
                    type: "primary",
                    loading: e(J),
                    onClick: Ae
                }, {
                    default: U(() => [ w("提交全部") ]),
                    _: 1
                }, 8, [ "disabled", "loading" ])) : P("", !0), e(n) || e(R) !== 1 ? P("", !0) : (m(), 
                Ne(t, {
                    key: 1,
                    class: "btn",
                    type: "primary",
                    onClick: Oe
                }, {
                    default: U(() => [ w("重新采集") ]),
                    _: 1
                })) ]), l("div", oe, [ j((m(), f("div", {
                    class: "view",
                    style: Le(e(n) ? "" : "width:600px;height:600px;border-radius: 50%;")
                }, [ j(l("video", {
                    class: "video",
                    ref_key: "video",
                    ref: o,
                    autoplay: ""
                }, null, 512), [ [ E, e(k) && e(n) ] ]), j(l("canvas", {
                    class: "video",
                    ref_key: "canvas",
                    ref: c
                }, null, 512), [ [ E, !e(k) && e(n) ] ]), l("img", {
                    src: xe(e(b)),
                    alt: "",
                    style: Le(e(n) ? "width:430px;height:430px" : "width:568px;height:568px")
                }, null, 12, de), e(g) ? (m(), f("div", he, G(e(g)), 1)) : P("", !0) ], 4)), [ [ y, e(z) ] ]), e(n) ? (m(), 
                f("img", me)) : P("", !0), l("div", pe, [ fe, ge, l("div", null, [ w(" 2、当显示无法调用摄像头时："), L(p, {
                    type: "primary",
                    onClick: Je
                }, {
                    default: U(() => [ w("查看解决方案") ]),
                    _: 1
                }) ]), ye ]), e(n) ? (m(), f("div", we, [ j(L(t, {
                    style: {
                        width: "240px",
                        height: "60px"
                    },
                    type: "primary",
                    onClick: je
                }, {
                    default: U(() => [ w("拍照") ]),
                    _: 1
                }, 512), [ [ E, !e(s) ] ]), j(L(t, {
                    style: {
                        width: "110px",
                        height: "60px"
                    },
                    type: "primary",
                    disabled: e(I),
                    onClick: Ee
                }, {
                    default: U(() => [ w("保存照片") ]),
                    _: 1
                }, 8, [ "disabled" ]), [ [ E, e(s) && e(S) ] ]), j(L(t, {
                    style: {
                        width: "110px",
                        height: "60px"
                    },
                    onClick: De
                }, {
                    default: U(() => [ w("重新拍摄") ]),
                    _: 1
                }, 512), [ [ E, e(s) ] ]) ])) : (m(), f("div", _e, [ be, l("div", null, "提交时间：" + G(e(V)), 1) ])) ]) ])) : (m(), 
                f("div", le, [ te, ue, ie, l("div", null, [ L(t, {
                    class: "btn",
                    type: "primary",
                    onClick: Ce
                }, {
                    default: U(() => [ w("开始采集") ]),
                    _: 1
                }) ]) ])), L(la, {
                    modelValue: e(A),
                    "onUpdate:modelValue": r[0] || (r[0] = x => ze(A) ? A.value = x : null)
                }, null, 8, [ "modelValue" ]) ]);
            };
        }
    }, Se = ua(ke, [ [ "__scopeId", "data-v-bf6b1178" ] ]);
});

export {
    ia as __tla,
    Se as default
};