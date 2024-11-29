import {
    e as Ve,
    a0 as je,
    r as p,
    f as Be,
    w as Fe,
    o as c,
    C as ye,
    l as b,
    t as e,
    B as o,
    a as s,
    z as f,
    c as v,
    k as h,
    D as xe,
    F as C,
    y as T,
    A as Ie,
    G as we,
    H as Je,
    _ as Re,
    aU as ze,
    R as Ge,
    S as He,
    __tla as Me
} from "./index-6c08ea4c.js";

import {
    E as qe,
    a as Ke,
    __tla as Qe
} from "./el-timeline-item-1cee49b7.js";

import {
    E as We,
    __tla as Xe
} from "./el-image-0d184777.js";

import {
    __tla as Ye
} from "./el-image-viewer-2c0d56e4.js";

import {
    I as be,
    __tla as Ze
} from "./invigilator-0cbdfb50.js";

import {
    a as Pe,
    __tla as $e
} from "./file-e038b35d.js";

import {
    f as O,
    __tla as ea
} from "./formatTime-de6f1520.js";

import {
    _ as aa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ke, A, L, ta = Promise.all([ (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})() ]).then(async () => {
    let i, N, D, E, U, V, j, B, F, J, R, z, G, H, M, q, K, Q, W, X, Y, Z, $, ee, ae, te, le, se, ie, ne, oe, re, ce, ue;
    L = "" + new URL("stu-video-error-64b02311.png", import.meta.url).href, i = _ => (Ge("data-v-88210300"), 
    _ = _(), He(), _), N = {
        class: "el-dialog__title"
    }, D = {
        class: "dialog-content"
    }, E = {
        class: "pl-8 pr-8"
    }, U = i(() => e("p", {
        class: "content-title"
    }, "考生信息", -1)), V = {
        class: "content-info"
    }, j = {
        class: "info-left"
    }, B = {
        class: "info"
    }, F = i(() => e("label", null, "姓名：", -1)), J = {
        class: "info"
    }, R = i(() => e("label", null, "学号/工号：", -1)), z = {
        class: "info"
    }, G = i(() => e("label", null, "开始时间：", -1)), H = {
        class: "info"
    }, M = i(() => e("label", null, "交卷时间：", -1)), q = {
        class: "info"
    }, K = i(() => e("label", null, "考生状态：", -1)), Q = {
        key: 0,
        class: "img-left"
    }, W = {
        class: "img-preparations"
    }, X = i(() => e("div", {
        class: "image-slot"
    }, " 暂无照片 ", -1)), Y = i(() => e("div", {
        class: "carousel-exchange"
    }, [ e("p", {
        class: "img-illustrate"
    }, "人脸识别通过照片") ], -1)), Z = {
        key: 1,
        class: "img-right"
    }, $ = {
        class: "carousel-exchange"
    }, ee = {
        class: "img-illustrate"
    }, ae = i(() => e("p", {
        class: "content-title pl-8 pr-8"
    }, "动态监控", -1)), te = {
        class: "content-dynamic"
    }, le = {
        class: "pt-5 clearfix pl-8 pr-8"
    }, se = i(() => e("div", {
        class: "search-label"
    }, "筛选：", -1)), ie = [ "onClick" ], ne = i(() => e("div", {
        class: "timeline-boxshadow"
    }, null, -1)), oe = {
        class: "content-timeline"
    }, re = {
        class: "item-timeline"
    }, ce = {
        class: "item-timeline-left"
    }, ue = {
        class: "item-timeline-right"
    }, A = aa({
        __name: "candidateInfo",
        props: {
            searchList: {
                type: Array,
                default: () => []
            },
            candidateDetails: {
                type: Object,
                default: () => ({})
            }
        },
        setup(_, {
            expose: Le
        }) {
            const de = _, Se = Ve(() => de.searchList), {
                candidateDetails: l
            } = je(de), P = p(!1), Ce = p("详情"), Te = p("70px");
            Be(() => {});
            const pe = () => {
                P.value = !1, Te.value = "", u.value = [ "1", "2", "3", "4", "5", "6" ];
            };
            function ve(a) {
                return a === "1" ? L : a ? Pe(a) : "";
            }
            const g = p("");
            Fe(() => l.value.referencePhotoIdList, a => {
                a && a.length && Oe();
            });
            const Oe = () => {
                var r;
                const {
                    eid: a
                } = (r = JSON.parse(JSON.stringify(l.value.referencePhotoIdList))) == null ? void 0 : r.shift();
                g.value = a || "";
            }, u = p([ "1", "2", "3", "4", "5", "6" ]), me = p([]), fe = ({
                status: a,
                attr: r
            }) => {
                var y;
                const m = {
                    1: {
                        word: "准备中",
                        status: "not"
                    },
                    2: {
                        word: "答题中",
                        status: "ready"
                    },
                    3: {
                        word: "已交卷",
                        status: "examing"
                    },
                    4: {
                        word: "未进入",
                        status: "finished"
                    },
                    default: {
                        word: "--",
                        status: ""
                    }
                };
                return ((y = m[a]) == null ? void 0 : y[r]) || m.default[r];
            }, he = async () => {
                const a = await be.getLogApi({
                    examId: l.value.examId,
                    userId: l.value.userId,
                    typeList: u.value
                });
                me.value = a;
            }, Ae = a => {
                const r = {
                    0: "正脸",
                    1: "上脸",
                    2: "下脸",
                    3: "左脸",
                    4: "右脸",
                    default: ""
                };
                return r[a] || r.default;
            }, k = p(""), Ne = async () => {
                const a = await be.getShowPictureApi(l.value.examId);
                return k.value = a || "", _e(), a;
            }, _e = () => {
                const a = {
                    0: [ "info-right-hidden" ],
                    1: [ "info-right-show" ],
                    2: [ "info-right-one" ],
                    default: [ "info-right-hidden" ]
                };
                return a[k.value] || a.default;
            };
            return Le({
                handleOpen: () => {
                    P.value = !0, Ne(), he();
                },
                handleClose: pe
            }), (a, r) => {
                const m = We, y = Re, De = qe, Ee = Ke, Ue = ze;
                return c(), ye(Ue, {
                    modelValue: P.value,
                    "onUpdate:modelValue": r[0] || (r[0] = n => P.value = n),
                    title: "",
                    width: "790px",
                    "close-on-click-modal": !1,
                    onClose: pe,
                    appendToBody: !0
                }, {
                    header: b(() => [ e("span", N, o(Ce.value), 1) ]),
                    default: b(() => {
                        return [ e("div", D, [ e("div", E, [ U, e("div", V, [ e("div", j, [ e("div", B, [ F, e("span", null, o(s(l).nickName), 1) ]), e("div", J, [ R, e("span", null, o(s(l).number), 1) ]), e("div", z, [ G, e("span", null, o(s(O)(s(l).answeringTime)), 1) ]), e("div", H, [ M, e("span", null, o(s(O)(s(l).submissionTime)), 1) ]), e("div", q, [ K, e("span", {
                            class: f([ "info-btn", "info-btn-" + fe({
                                status: s(l).examStatus,
                                attr: "status"
                            }) ])
                        }, o(fe({
                            status: s(l).examStatus,
                            attr: "word"
                        })), 3) ]) ]), e("div", {
                            class: f([ "info-right", _e() ])
                        }, [ [ "1" ].includes(k.value) ? (c(), v("div", Q, [ e("p", W, o((ge = s(l).preparationStatus, 
                        {
                            0: "申请人工",
                            1: "识别中",
                            2: "人工通过",
                            3: "验证通过",
                            4: "人工未通过"
                        }[ge])), 1), h(m, {
                            src: (n = s(l), (n == null ? void 0 : n.preparationStatus) === "2" || (n == null ? void 0 : n.preparationStatus) === "3" ? n.anomalousPhotoId === "1" ? L : n.anomalousPhotoId ? Pe(n.anomalousPhotoId) : "" : "")
                        }, {
                            error: b(() => [ X ]),
                            _: 1
                        }, 8, [ "src" ]), Y ])) : xe("", !0), [ "1", "2" ].includes(k.value) ? (c(), 
                        v("div", Z, [ (c(!0), v(C, null, T(s(l).referencePhotoIdList, (t, d) => Ie((c(), 
                        v("div", {
                            class: f([ "img-right-carousel", t.eid === g.value ? "carousel-show" : "carousel-hide" ]),
                            key: t.eid
                        }, [ h(m, {
                            src: ve(t.eid)
                        }, null, 8, [ "src" ]), e("div", $, [ h(y, {
                            icon: "ep:arrow-left",
                            class: f([ "neu-pointer", {
                                "exchange-disabled": d < 1
                            } ]),
                            onClick: x => ((S, I) => {
                                var w;
                                I > 0 && (g.value = (w = l.value.referencePhotoIdList) == null ? void 0 : w[I - 1].eid);
                            })(t.eid, d)
                        }, null, 8, [ "class", "onClick" ]), e("p", ee, " 人脸识别基准照片" + o(Ae(t.tpye)), 1), h(y, {
                            icon: "ep:arrow-right",
                            class: f([ "neu-pointer", {
                                "exchange-disabled": d === s(l).referencePhotoIdList.length - 1
                            } ]),
                            onClick: x => ((S, I) => {
                                var w;
                                I < l.value.referencePhotoIdList.length - 1 && (g.value = (w = l.value.referencePhotoIdList) == null ? void 0 : w[I + 1].eid);
                            })(t.eid, d)
                        }, null, 8, [ "class", "onClick" ]) ]) ], 2)), [ [ we, t.eid === g.value ] ])), 128)) ])) : xe("", !0) ], 2) ]) ]), ae, e("div", te, [ e("div", le, [ se, (c(!0), 
                        v(C, null, T(Se.value, t => (c(), v("div", {
                            key: t.value,
                            class: f([ "search-item", u.value.indexOf(t.value) >= 0 ? "is-active" : "" ]),
                            onClick: Je(d => function(x) {
                                u.value.indexOf(x.value) >= 0 ? u.value = u.value.filter(S => S !== x.value) : u.value.push(x.value), 
                                he();
                            }(t), [ "stop" ])
                        }, o(t.label), 11, ie))), 128)) ]), ne, e("div", oe, [ h(Ee, {
                            style: {
                                "max-width": "600px"
                            }
                        }, {
                            default: b(() => [ (c(!0), v(C, null, T(me.value, (t, d) => (c(), 
                            ye(De, {
                                key: d,
                                icon: t.icon,
                                color: t.exceptionStatus === "2" ? "#1EC740" : "#F63030",
                                "hide-timestamp": !0
                            }, {
                                default: b(() => [ e("div", re, [ e("div", ce, o(s(O)(t.createTime)), 1), e("div", ue, [ e("p", null, o(t.logTypeName), 1), e("p", null, o(t.desc), 1), Ie(h(m, {
                                    class: "img-default",
                                    fit: "contain",
                                    src: ve(t.anomalousPhotoId)
                                }, null, 8, [ "src" ]), [ [ we, [ "2", "3", "4", "5", "17", "18", "19" ].includes(t.logType) && t.anomalousPhotoId ] ]) ]) ]) ]),
                                _: 2
                            }, 1032, [ "icon", "color" ]))), 128)) ]),
                            _: 1
                        }) ]) ]) ]) ];
                        var n, ge;
                    }),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-88210300" ] ]), ke = Object.defineProperty({
        __proto__: null,
        default: A
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    ta as __tla,
    ke as a,
    A as c,
    L as s
};