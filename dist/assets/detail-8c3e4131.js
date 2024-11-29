import {
    aO as ht,
    a,
    e as q,
    a0 as yt,
    o as u,
    c as f,
    k as i,
    l as n,
    t as e,
    z as D,
    B as r,
    ag as bt,
    T as gt,
    u as xt,
    dS as wt,
    w as Pl,
    r as c,
    U as At,
    f as kt,
    g as St,
    j as Nt,
    v as g,
    C as x,
    D as T,
    m as ra,
    A as E,
    G as U,
    H as M,
    F as aa,
    y as ea,
    I as Ct,
    K as Tt,
    _ as Et,
    J as Ot,
    M as It,
    s as Pt,
    a8 as Vt,
    ab as Ft,
    ac as Lt,
    O as Dt,
    Q as zt,
    P as Rt,
    L as Bt,
    av as Ut,
    aw as Mt,
    br as qt,
    ad as Ht,
    ae as jt,
    aU as Gt,
    R as Jt,
    S as Qt,
    __tla as Kt
} from "./index-6c08ea4c.js";

import {
    E as Wt,
    __tla as Xt
} from "./el-infinite-scroll-9cd61b58.js";

import {
    E as Yt,
    a as Zt,
    __tla as $t
} from "./el-timeline-item-1cee49b7.js";

import {
    E as as,
    __tla as es
} from "./el-image-0d184777.js";

import {
    __tla as ls
} from "./el-image-viewer-2c0d56e4.js";

import {
    _ as ts,
    __tla as ss
} from "./index-c4ca0ced.js";

import {
    E as is,
    __tla as ns
} from "./el-avatar-76960a98.js";

import {
    a as Vl,
    s as Fl,
    __tla as us
} from "./file-e038b35d.js";

import {
    _ as Ll
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    _ as os,
    __tla as rs
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    E as cs,
    __tla as ms
} from "./el-page-header-bee049a1.js";

import {
    I as H,
    __tla as ds
} from "./invigilator-0cbdfb50.js";

import ps, {
    __tla as vs
} from "./noticeOrFinish-c8ebb1c5.js";

import fs, {
    __tla as _s
} from "./manualReview-b8151b93.js";

import {
    c as hs,
    s as ys,
    __tla as bs
} from "./candidateInfo-12dadb52.js";

import {
    d as gs,
    c as xs,
    __tla as ws
} from "./stomp-client-3e05636e.js";

import {
    f as Sa,
    __tla as As
} from "./formatTime-de6f1520.js";

import {
    d as Dl,
    D as ca,
    __tla as ks
} from "./dict-c5825220.js";

import {
    a as Ss,
    b as Ns,
    E as Cs,
    __tla as Ts
} from "./index-5adb716b.js";

import {
    __tla as Es
} from "./throttle-1adeb119.js";

import {
    __tla as Os
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

let zl, Is = Promise.all([ (() => {
    try {
        return Kt;
    } catch {}
})(), (() => {
    try {
        return Xt;
    } catch {}
})(), (() => {
    try {
        return $t;
    } catch {}
})(), (() => {
    try {
        return es;
    } catch {}
})(), (() => {
    try {
        return ls;
    } catch {}
})(), (() => {
    try {
        return ss;
    } catch {}
})(), (() => {
    try {
        return ns;
    } catch {}
})(), (() => {
    try {
        return us;
    } catch {}
})(), (() => {
    try {
        return rs;
    } catch {}
})(), (() => {
    try {
        return ms;
    } catch {}
})(), (() => {
    try {
        return ds;
    } catch {}
})(), (() => {
    try {
        return vs;
    } catch {}
})(), (() => {
    try {
        return _s;
    } catch {}
})(), (() => {
    try {
        return bs;
    } catch {}
})(), (() => {
    try {
        return ws;
    } catch {}
})(), (() => {
    try {
        return As;
    } catch {}
})(), (() => {
    try {
        return ks;
    } catch {}
})(), (() => {
    try {
        return Ts;
    } catch {}
})(), (() => {
    try {
        return Es;
    } catch {}
})(), (() => {
    try {
        return Os;
    } catch {}
})() ]).then(async () => {
    let Na, Ca, m, Ta, Ea, Oa, Ia, Pa, Va, Fa, La, Da, za, Ra, Ba, Ua, Ma, qa, Ha, ja, Ga, Ja, Qa, Ka, Wa, Xa, Ya, Za, $a, ae, ee, le, te, se, ie, ne, ue, oe, re, ce, me, de, pe, ve, fe, _e, he, ye, be, ge, xe, we, Ae, ke, Se, Ne, Ce, Te, Ee, Oe, Ie, Pe, Ve, Fe, Le, De, ze, Re, Be, Ue, Me, qe, He, je, Ge, Je, Qe, Ke, We, Xe, Ye, Ze, $e, al, el, ll, tl, sl, il, nl, ul, ol, rl, cl, ml, dl, pl, vl, fl, W;
    Na = {
        calss: "avatarImg"
    }, Ca = Ll({
        __name: "AvatarImage",
        props: {
            eid: {
                type: String,
                default: ""
            },
            size: {
                type: Number,
                default: 20
            },
            name: {
                type: String,
                default: ""
            }
        },
        setup(j) {
            ht(_ => ({
                "615863a5": a(ma),
                "7713ea56": a(O)
            }));
            const ma = q(() => d.value / 3 + "px"), da = () => {
                if (d.value <= 26) return "font";
            }, S = [ "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#F08080", "#CD5C5C", "#FFA07A", "#FA8072", "#E9967A", "#FF7F50", "#FF6347" ], pa = j, {
                eid: G,
                size: d,
                name: o
            } = yt(pa), w = q(() => [ null, "" ].includes(o.value) || o.value === void 0 ? "" : o.value.substr(-2)), O = q(() => {
                if ([ null, "" ].includes(G.value) && ![ null, "" ].includes(o.value) && o.value !== void 0) {
                    const _ = o.value.charCodeAt(0) - "A".charCodeAt(0), z = Math.floor(Math.abs(_) % S.length);
                    return S[z];
                }
                return [ null, "" ].includes(G.value) ? "#B3B3B3" : "";
            });
            return (_, z) => {
                const J = is;
                return u(), f("div", Na, [ i(J, {
                    size: a(d),
                    src: a(G) ? a(Vl)(a(G)) : ""
                }, {
                    default: n(() => [ e("span", {
                        class: D(da())
                    }, r(a(w)), 3) ]),
                    _: 1
                }, 8, [ "size", "src" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b277b20c" ] ]), m = j => (Jt("data-v-10f04c11"), 
    j = j(), Qt(), j), Ta = {
        class: "cont-header"
    }, Ea = {
        key: 0
    }, Oa = {
        class: "title-box"
    }, Ia = {
        class: "title-box"
    }, Pa = {
        key: 0,
        class: "right-time"
    }, Va = {
        class: "text"
    }, Fa = {
        class: "num"
    }, La = m(() => e("span", {
        class: "text"
    }, "天", -1)), Da = {
        class: "num"
    }, za = m(() => e("span", {
        class: "text"
    }, "时", -1)), Ra = {
        class: "num"
    }, Ba = m(() => e("span", {
        class: "text"
    }, "分", -1)), Ua = {
        class: "num"
    }, Ma = m(() => e("span", {
        class: "text"
    }, "秒", -1)), qa = {
        class: "manual-refresh"
    }, Ha = {
        class: "card-list px-5"
    }, ja = {
        class: "btn-box relative"
    }, Ga = {
        key: 0
    }, Ja = m(() => e("div", {
        class: "neu-color-blue px-3 py-1"
    }, "向所有人发送", -1)), Qa = [ "onClick" ], Ka = [ "onClick" ], Wa = m(() => e("div", {
        class: "submit-info"
    }, "正常交卷", -1)), Xa = {
        class: "bot-box"
    }, Ya = {
        class: "user-info"
    }, Za = {
        class: "user-name tooltip-content"
    }, $a = {
        class: "card-number"
    }, ae = {
        class: "item-btn-box"
    }, ee = m(() => e("div", {
        class: "info-desc"
    }, "已申请人工验证", -1)), le = {
        key: 0,
        class: "empty-box"
    }, te = [ m(() => e("div", {
        class: "empty-image"
    }, null, -1)) ], se = {
        key: 1,
        class: "table-list"
    }, ie = {
        class: "dialog-top-box"
    }, ne = {
        class: "item-title"
    }, ue = {
        class: "item-info"
    }, oe = {
        class: "info-item"
    }, re = m(() => e("span", {
        class: "info-item-label"
    }, "开始时间：", -1)), ce = {
        class: "info-item-value"
    }, me = {
        class: "info-item"
    }, de = m(() => e("span", {
        class: "info-item-label"
    }, "结束时间：", -1)), pe = {
        class: "info-item-value"
    }, ve = {
        class: "info-item"
    }, fe = m(() => e("span", {
        class: "info-item-label"
    }, "考试时长：", -1)), _e = {
        class: "info-item-value"
    }, he = {
        class: "info-item"
    }, ye = m(() => e("span", {
        class: "info-item-label"
    }, "试卷满分：", -1)), be = {
        class: "info-item-value"
    }, ge = {
        class: "info-item"
    }, xe = m(() => e("span", {
        class: "info-item-label"
    }, "考生人数：", -1)), we = {
        class: "info-item-value"
    }, Ae = {
        class: "info-item"
    }, ke = m(() => e("span", {
        class: "info-item-label"
    }, "监考人员：", -1)), Se = {
        class: "info-item-value"
    }, Ne = {
        class: "dialog-mid-box"
    }, Ce = m(() => e("div", {
        class: "item-title"
    }, r("考试设置"), -1)), Te = {
        class: "item-info"
    }, Ee = {
        class: "info-item"
    }, Oe = m(() => e("span", {
        class: "info-item-label"
    }, "提前入场：", -1)), Ie = {
        key: 0,
        class: "info-item-value"
    }, Pe = {
        key: 1,
        class: "info-item-value"
    }, Ve = {
        class: "info-item"
    }, Fe = m(() => e("span", {
        class: "info-item-label"
    }, "登录时人脸识别验证：", -1)), Le = {
        class: "info-item-value"
    }, De = {
        class: "info-item"
    }, ze = m(() => e("span", {
        class: "info-item-label"
    }, "迟到限制：", -1)), Re = {
        key: 0,
        class: "info-item-value"
    }, Be = {
        key: 1,
        class: "info-item-value"
    }, Ue = {
        class: "info-item"
    }, Me = m(() => e("span", {
        class: "info-item-label"
    }, "人脸实时对比检测：", -1)), qe = {
        class: "info-item-value"
    }, He = {
        class: "info-item"
    }, je = m(() => e("span", {
        class: "info-item-label"
    }, "限制提交：", -1)), Ge = {
        key: 0,
        class: "info-item-value"
    }, Je = {
        key: 1,
        class: "info-item-value"
    }, Qe = {
        class: "info-item"
    }, Ke = m(() => e("span", {
        class: "info-item-label"
    }, "考试过程切屏检测：", -1)), We = {
        class: "info-item-value"
    }, Xe = {
        class: "info-item"
    }, Ye = m(() => e("span", {
        class: "info-item-label"
    }, "考生设备限制：", -1)), Ze = {
        class: "info-item-value"
    }, $e = {
        class: "info-item"
    }, al = m(() => e("span", {
        class: "info-item-label"
    }, "考试过程屏幕异常检测：", -1)), el = {
        class: "info-item-value"
    }, ll = {
        class: "dialog-bot-box"
    }, tl = m(() => e("div", {
        class: "item-title"
    }, r("考试须知"), -1)), sl = [ "innerHTML" ], il = m(() => e("div", {
        class: "dynamic-title"
    }, " 动态监控 ", -1)), nl = m(() => e("div", {
        class: "search-label"
    }, "筛选：", -1)), ul = [ "onClick" ], ol = {
        class: "submit-btn"
    }, rl = {
        key: 0,
        class: "select-btn"
    }, cl = {
        class: "message-list",
        ref: "messageListRef"
    }, ml = {
        class: "timeline-time"
    }, dl = {
        class: "timeline-info"
    }, pl = {
        class: "timeline-name"
    }, vl = {
        class: "timeline-code"
    }, fl = {
        class: "timeline-desc"
    }, W = 1e3, zl = Ll({
        __name: "detail",
        setup(j) {
            const ma = bt(), da = q(() => ma.getLayout), S = gt(), pa = xt(), G = wt();
            Pl(G, (s, l) => {
                s === "visible" && l === "hidden" && ia();
            });
            const d = c("1"), o = c({}), w = c({
                anomalyStatus: "",
                preparationStatus: "",
                handPaperType: "",
                userNameOrNumber: ""
            }), O = c([]), _ = c([]), z = c(!1), J = c(!1), X = c(!1), N = c(!1), la = c(0), va = c([ {
                label: "人脸比对异常",
                value: "1"
            }, {
                label: "切屏",
                value: "2"
            }, {
                label: "屏幕异常",
                value: "3"
            }, {
                label: "强制交卷",
                value: "4"
            }, {
                label: "监考记录",
                value: "5"
            }, {
                label: "其他",
                value: "6"
            } ]), I = c([ "1", "2", "3", "4", "5", "6" ]), R = c(!1), Rl = q(() => R.value ? va.value : va.value.filter(s => I.value.indexOf(s.value) >= 0)), B = c({
                pageNum: 1,
                pageSize: 24
            });
            Pl(() => d.value, () => {
                O.value = [], w.value = {
                    anomalyStatus: "",
                    preparationStatus: "",
                    handPaperType: "",
                    userNameOrNumber: ""
                }, A();
            });
            const P = c(0), ta = c(0), _l = c(""), Q = c(null), sa = q(() => {
                let s = Math.floor(P.value / 24 / 60 / 60 / 1e3) || 0, l = Math.floor(P.value / 60 / 60 / 1e3) % 24 || 0, v = Math.floor(P.value / 60 / 1e3) % 60 || 0, p = Math.floor(P.value / 1e3) % 60 || 0;
                return {
                    day: s >= 10 ? s + "" : "0" + s,
                    hour: l >= 10 ? l + "" : "0" + l,
                    minutes: v >= 10 ? v + "" : "0" + v,
                    seconds: p >= 10 ? p + "" : "0" + p
                };
            });
            function hl() {
                ta.value++;
                const s = new Date().getTime() - (_l.value + ta.value * W);
                let l = W - s;
                l < 0 && (l = 0), P.value -= W, P.value <= 0 ? (ta.value = 0, Y.value && ia(), 
                clearTimeout(Q.value)) : Q.value = setTimeout(hl, l);
            }
            const Bl = async () => {
                let s = await H.exportSubmitStuApi(S.params.id);
                Fl(s, s.fileName);
            }, Ul = async () => {
                let s = await H.exportNotEnterStuApi(S.params.id);
                Fl(s, s.fileName);
            }, yl = c(null);
            function bl(s) {
                let l = "", v = "", p = "", y = "", k = "", L = "";
                const ua = {
                    1: "准备中",
                    2: "答题中",
                    default: ""
                }, $ = {
                    checked: () => {
                        l = "发送提醒", v = "提醒内容", p = "内容", y = "3", k = "notice", 
                        L = "确定向选中的考生发送提醒吗？", gl(_.value);
                    },
                    all: () => {
                        l = "发送提醒", v = "提醒内容", p = "内容", y = d.value, k = "notice", 
                        L = `\u786E\u5B9A\u5411\u6240\u6709${ua[d.value] || ua.default}\u7684\u8003\u751F\u53D1\u9001\u63D0\u9192\u5417\uFF1F`, 
                        fa.value = null;
                    },
                    finish: () => {
                        l = "强制交卷", v = "强制交卷原因", p = "原因", k = "force", gl(_.value), 
                        L = `\u786E\u5B9A\u5C06\u8003\u751F<span class="tip-name">${_a.value.join("、")}</span>\u5F3A\u5236\u4EA4\u5377\uFF1F`;
                    },
                    default: () => {}
                };
                ($[s] || $.default)(), yl.value.handleOpen({
                    title: l,
                    labelName: v,
                    itemRule: p,
                    remindTypeValue: y,
                    type: k,
                    checkedValue: fa.value,
                    tipContent: L
                });
            }
            const fa = c([]), _a = c([]), gl = s => {
                _a.value = [], fa.value = s.map(l => (_a.value.push(l.nickName), 
                {
                    userId: l.userId,
                    userName: l.nickName,
                    number: l.number,
                    avatarEId: l.avatarEId
                }));
            };
            async function Ml() {
                R.value = !1, F.value = await ya({}), Sl();
            }
            function A() {
                _.value = [], J.value = !1, z.value = !1;
                const {
                    userNameOrNumber: s,
                    preparationStatus: l,
                    handPaperType: v,
                    anomalyStatus: p
                } = w.value;
                let y = {
                    examId: S.params.id,
                    examStatus: d.value,
                    userNameOrNumber: s,
                    preparationStatus: l,
                    handPaperType: v,
                    anomalyStatus: p,
                    pageNum: B.value.pageNum,
                    pageSize: B.value.pageSize
                };
                H.getInvigilatorList(y).then(k => {
                    O.value = k == null ? void 0 : k.records, la.value = (k == null ? void 0 : k.total) || 0;
                });
            }
            function ql() {}
            const Hl = s => {
                B.value.pageNum = s.page, B.value.pageSize = s.limit, A();
            };
            function jl() {
                pa.back();
            }
            const Gl = s => {
                _.value = s ? O.value : [], J.value = !1;
            }, xl = s => {
                const l = s.length;
                z.value = l === O.value.length, J.value = l > 0 && l < O.value.length;
            }, wl = c(null);
            function Jl(s) {
                return d.value === "1" && s.preparationStatus === "0" || d.value === "2" && s.anomalyNumber > 0 || d.value === "3" && s.handPaperType === "3";
            }
            const ha = c("");
            function ia() {
                let s = S.params.id;
                H.getDetailById(s).then(async l => {
                    o.value = l || {}, await Ql({
                        whetherStart: o.value.whetherStart
                    }), Q.value && (clearTimeout(Q.value), Q.value = null, ta.value = 0), 
                    _l.value = new Date().getTime(), P.value >= 0 && (Q.value = setTimeout(hl, W));
                });
            }
            const Y = c(!1), Ql = ({
                whetherStart: s
            }) => {
                const l = {
                    0: () => {
                        P.value = Number(o.value.remainingExamStartTime || "0"), 
                        ha.value = "距离考试开始：", Y.value = !0;
                    },
                    1: () => {
                        P.value = Number(o.value.examTime || "0"), ha.value = "距离考试结束：", 
                        Y.value = !0;
                    },
                    2: () => {
                        Y.value = !1;
                    },
                    default: () => {}
                };
                (l[s] || l.default)();
            };
            let Kl = [ {
                label: "PC端网页",
                value: "PCWEB",
                elTagType: "",
                elTagClass: ""
            }, {
                label: "PC客户端",
                value: "PCEXE",
                elTagType: "",
                elTagClass: ""
            } ];
            const Al = c(null), V = At({
                nickName: "",
                number: "",
                answeringTime: "",
                submissionTime: "",
                examStatus: "",
                examId: "",
                id: "",
                avatarEId: "",
                userName: "",
                userId: "",
                anomalousPhotoId: "",
                referencePhotoIdList: [],
                preparationStatus: ""
            }), F = c([]), kl = async () => {
                const s = await H.getAvatarListApi(V.userId), l = JSON.parse((s == null ? void 0 : s.pictures) || JSON.stringify([]));
                return V.referencePhotoIdList = l, s;
            }, Wl = async () => {
                N.value = !N.value, N.value ? (R.value = !1, F.value = await ya({})) : F.value = [];
            }, ya = async ({
                id: s
            }) => await H.getDynamicLogApi({
                examId: S.params.id,
                typeList: I.value,
                pageSize: "10",
                id: s
            }) || [], Xl = async () => {
                var v, p;
                const s = (p = (v = JSON.parse(JSON.stringify(F.value))) == null ? void 0 : v.pop()) == null ? void 0 : p.id, l = await ya({
                    id: s
                });
                F.value = F.value.concat(l);
            }, ba = c(0), na = c(!1), Yl = () => {
                na.value = !1, ba.value = 0, Sl(), Zl.value = [];
            }, Sl = () => {
                document.getElementById("timeline").scrollIntoView({
                    behavior: "smooth"
                });
            }, Zl = c([]), ga = c([]), $l = s => {
                var l;
                A(), s.createTime = s.createFormatTime, ga.value = [], (l = F.value) == null || l.map(v => ga.value.push(v.id)), 
                !ga.value.includes(s.id) && I.value.includes(s.type) && s.examId === S.params.id && (Nl.value > 30 ? (na.value = !0, 
                ba.value++) : na.value = !1, F.value.unshift(s));
            }, Nl = c(0), Cl = s => {
                const l = s.target;
                Nl.value = l.scrollTop;
            }, at = q(() => S.params.type === "edit"), xa = c(null);
            function Z(s, l, v, p) {
                return v || "--";
            }
            const et = () => {
                A(), ia();
            }, wa = c(!1);
            return kt(async () => {
                xs("/topic/DYNAMIC_MONITORING_LOG", s => {
                    const {
                        data: l
                    } = JSON.parse(s.body);
                    $l(l);
                }, "/topic/APPLY-MANUAL-REVIEWG", () => {
                    A();
                }), ia(), A(), wa.value = await (async () => await H.getFaceIdentifyApi(S.params.id))(), 
                xa.value = document.querySelector(".message-list"), xa.value.addEventListener("scroll", Cl);
            }), St(() => {
                gs(), xa.value.removeEventListener("scroll", Cl);
            }), (s, l) => {
                const v = Tt, p = Et, y = Ot, k = cs, L = It, ua = Pt, $ = Vt, Tl = Ss, lt = Ns, tt = Cs, oa = Ft, Aa = Lt, ka = Dt, st = zt, it = Rt, El = os, Ol = Bt, Il = Ca, nt = Ut, ut = Mt, ot = qt, K = Ht, rt = jt, ct = ts, mt = Gt, dt = as, pt = Yt, vt = Zt, ft = Nt("show-tip"), _t = Wt;
                return u(), f("div", {
                    class: D([ "relative pa-0 base-box", a(N) ? "half-box" : "" ]),
                    style: {
                        overflow: "hidden"
                    }
                }, [ e("div", Ta, [ da.value === "top" ? (u(), f("div", Ea, [ i(v, {
                    content: a(o).examName || "--",
                    placement: "top",
                    "show-after": 500
                }, {
                    default: n(() => [ e("span", Oa, r(a(o).examName || "--"), 1) ]),
                    _: 1
                }, 8, [ "content" ]), i(y, {
                    class: "info-btn ml-2",
                    link: "",
                    onClick: l[0] || (l[0] = t => X.value = !0)
                }, {
                    default: n(() => [ i(p, {
                        icon: "ep:info-filled",
                        class: "mr-4px"
                    }), g("考试信息") ]),
                    _: 1
                }) ])) : (u(), x(k, {
                    key: 1,
                    onBack: jl
                }, {
                    content: n(() => [ i(v, {
                        content: a(o).examName || "--",
                        placement: "top",
                        "show-after": 500
                    }, {
                        default: n(() => [ e("span", Ia, r(a(o).examName || "--"), 1) ]),
                        _: 1
                    }, 8, [ "content" ]), i(y, {
                        class: "info-btn ml-2",
                        link: "",
                        onClick: l[1] || (l[1] = t => X.value = !0)
                    }, {
                        default: n(() => [ i(p, {
                            icon: "ep:info-filled",
                            class: "mr-4px"
                        }), g("考试信息") ]),
                        _: 1
                    }) ]),
                    _: 1
                })) ]), a(Y) ? (u(), f("div", Pa, [ e("span", Va, r(a(ha)), 1), e("span", Fa, r(sa.value.day), 1), La, e("span", Da, r(sa.value.hour), 1), za, e("span", Ra, r(sa.value.minutes), 1), Ba, e("span", Ua, r(sa.value.seconds), 1), Ma ])) : T("", !0), i(ua, {
                    modelValue: a(d),
                    "onUpdate:modelValue": l[2] || (l[2] = t => ra(d) ? d.value = t : null),
                    class: "demo-tabs",
                    onTabClick: ql
                }, {
                    default: n(() => [ i(L, {
                        label: "准备中",
                        name: "1"
                    }), i(L, {
                        label: "答题中",
                        name: "2"
                    }), i(L, {
                        label: "已交卷",
                        name: "3"
                    }), i(L, {
                        label: "未进入",
                        name: "4"
                    }), e("div", qa, [ i(y, {
                        type: "primary",
                        onClick: et
                    }, {
                        default: n(() => [ g("手动刷新") ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), e("div", Ha, [ e("div", ja, [ E(i($, {
                    indeterminate: a(J),
                    modelValue: a(z),
                    "onUpdate:modelValue": l[3] || (l[3] = t => ra(z) ? z.value = t : null),
                    class: "left mr-3",
                    size: "large",
                    onChange: Gl
                }, {
                    default: n(() => [ g(" 全选 ") ]),
                    _: 1
                }, 8, [ "indeterminate", "modelValue" ]), [ [ U, [ "1", "2", "3" ].indexOf(a(d)) >= 0 ] ]), at.value ? (u(), 
                f("div", Ga, [ [ "1", "2" ].indexOf(a(d)) >= 0 ? (u(), x(tt, {
                    key: 0,
                    onCommand: bl,
                    onClick: l[4] || (l[4] = M(() => {}, [ "stop" ])),
                    class: "left mr-3",
                    trigger: "click"
                }, {
                    dropdown: n(() => [ i(lt, null, {
                        default: n(() => [ i(Tl, {
                            command: "all"
                        }, {
                            default: n(() => [ Ja ]),
                            _: 1
                        }), i(Tl, {
                            command: "checked",
                            disabled: a(_).length === 0
                        }, {
                            default: n(() => [ e("div", {
                                class: D([ "px-3 py-1", a(_).length === 0 ? "" : "neu-color-blue" ])
                            }, " 向选中人员发送 ", 2) ]),
                            _: 1
                        }, 8, [ "disabled" ]) ]),
                        _: 1
                    }) ]),
                    default: n(() => [ i(y, {
                        type: "success",
                        class: "left",
                        plain: "",
                        size: "large"
                    }, {
                        default: n(() => [ i(p, {
                            icon: "ep:bell",
                            class: "mr-4px"
                        }), g("批量提醒") ]),
                        _: 1
                    }) ]),
                    _: 1
                })) : T("", !0), [ "2" ].indexOf(a(d)) >= 0 ? (u(), x(y, {
                    key: 1,
                    type: "danger",
                    class: "left",
                    plain: "",
                    size: "large",
                    onClick: l[5] || (l[5] = t => bl("finish")),
                    disabled: a(_).length === 0
                }, {
                    default: n(() => [ i(p, {
                        icon: "ep:finished",
                        class: "mr-4px"
                    }), g("强制交卷") ]),
                    _: 1
                }, 8, [ "disabled" ])) : T("", !0) ])) : T("", !0), [ "3", "4" ].indexOf(a(d)) >= 0 ? (u(), 
                x(y, {
                    key: 1,
                    type: "success",
                    class: "left mr-5",
                    plain: "",
                    size: "large",
                    onClick: l[6] || (l[6] = t => (C => {
                        switch (C) {
                          case "3":
                            return Bl();

                          case "4":
                            return Ul();

                          default:
                            return;
                        }
                    })(a(d)))
                }, {
                    default: n(() => [ i(p, {
                        icon: "ep:download",
                        class: "mr-4px"
                    }), g("导出") ]),
                    _: 1
                })) : T("", !0), i(st, {
                    inline: !0,
                    size: "large",
                    model: a(w),
                    onSubmit: l[10] || (l[10] = M(() => {}, [ "prevent" ])),
                    "label-width": "70px",
                    class: "relative left form-box"
                }, {
                    default: n(() => [ E(i(ka, {
                        label: "验证状态",
                        class: "ml-5",
                        style: {
                            "max-width": "100%"
                        }
                    }, {
                        default: n(() => [ i(Aa, {
                            modelValue: a(w).preparationStatus,
                            "onUpdate:modelValue": l[7] || (l[7] = t => a(w).preparationStatus = t),
                            clearable: "",
                            onChange: A,
                            style: {
                                "max-width": "200px",
                                width: "200px"
                            }
                        }, {
                            default: n(() => [ (u(!0), f(aa, null, ea(a(Dl)(a(ca).PREPARATION_STATUS), t => (u(), 
                            x(oa, {
                                key: t.value,
                                label: t.label,
                                value: t.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 512), [ [ U, [ "1" ].indexOf(a(d)) >= 0 && a(wa) ] ]), E(i(ka, {
                        label: "交卷方式",
                        style: {
                            "max-width": "calc(50% - 20px)"
                        }
                    }, {
                        default: n(() => [ i(Aa, {
                            modelValue: a(w).handPaperType,
                            "onUpdate:modelValue": l[8] || (l[8] = t => a(w).handPaperType = t),
                            clearable: "",
                            onChange: A,
                            placeholder: "请选择",
                            style: {
                                "max-width": "200px",
                                width: "200px"
                            }
                        }, {
                            default: n(() => [ (u(!0), f(aa, null, ea(a(Dl)(a(ca).HAND_PAPER_TYPE).filter(t => t.value !== "0"), t => (u(), 
                            x(oa, {
                                key: t.value,
                                label: t.label,
                                value: t.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 512), [ [ U, [ "3" ].indexOf(a(d)) >= 0 ] ]), E(i(ka, {
                        label: "是否异常",
                        style: {
                            "max-width": "calc(50% - 20px)",
                            "margin-right": "0"
                        }
                    }, {
                        default: n(() => [ i(Aa, {
                            modelValue: a(w).anomalyStatus,
                            "onUpdate:modelValue": l[9] || (l[9] = t => a(w).anomalyStatus = t),
                            clearable: "",
                            style: {
                                "max-width": "200px",
                                width: "200px"
                            },
                            onChange: A,
                            placeholder: "请选择"
                        }, {
                            default: n(() => [ i(oa, {
                                label: "有异常",
                                value: "1"
                            }), i(oa, {
                                label: "无异常",
                                value: "0"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 512), [ [ U, [ "3" ].indexOf(a(d)) >= 0 ] ]) ]),
                    _: 1
                }, 8, [ "model" ]), i(it, {
                    class: "keywords-box",
                    size: "large",
                    modelValue: a(w).userNameOrNumber,
                    "onUpdate:modelValue": l[11] || (l[11] = t => a(w).userNameOrNumber = t),
                    placeholder: "请输入姓名/学号/工号",
                    clearable: "",
                    style: {
                        width: "30%",
                        "max-width": "300px"
                    },
                    onKeyup: Ct(A, [ "enter" ])
                }, {
                    suffix: n(() => [ i(p, {
                        icon: "ep:search",
                        class: "pointer",
                        onClick: M(A, [ "stop" ])
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), a(d) !== "4" ? (u(), x(ot, {
                    key: 0,
                    class: "table-list table-list-tag-special",
                    modelValue: a(_),
                    "onUpdate:modelValue": l[13] || (l[13] = t => ra(_) ? _.value = t : null),
                    onChange: xl
                }, {
                    default: n(() => [ i(ut, {
                        gutter: 20
                    }, {
                        default: n(() => [ (u(!0), f(aa, null, ea(a(O), t => (u(), 
                        x(nt, {
                            xs: a(N) ? 12 : 6,
                            sm: a(N) ? 12 : 6,
                            md: a(N) ? 12 : 6,
                            lg: a(N) ? 8 : 6,
                            xl: a(N) ? 6 : 4,
                            key: t
                        }, {
                            default: n(() => [ e("div", {
                                class: D([ "user-item pointer", {
                                    "warning-item": Jl(t)
                                } ]),
                                onClick: M(C => async function(b) {
                                    Object.keys(V).forEach(h => V[h] = b[h]), kl(), 
                                    wl.value.handleOpen();
                                }(t), [ "stop" ])
                            }, [ e("div", {
                                class: "top-box mb-3",
                                onClick: M(C => function(b) {
                                    _.value.map(h => h.id).indexOf(b.id) >= 0 ? _.value = _.value.filter(h => h.id !== b.id) : _.value.push(b), 
                                    xl(_.value);
                                }(t), [ "stop" ])
                            }, [ i($, {
                                onClick: l[12] || (l[12] = M(() => {}, [ "stop" ])),
                                label: t,
                                class: "check-box"
                            }, {
                                default: n(() => [ g(" ") ]),
                                _: 2
                            }, 1032, [ "label" ]), Wa, a(d) === "1" && a(wa) ? (u(), 
                            x(El, {
                                key: 0,
                                tpye: a(ca).PREPARATION_STATUS,
                                value: t.preparationStatus || "1",
                                class: "right"
                            }, null, 8, [ "tpye", "value" ])) : T("", !0), a(d) === "3" ? (u(), 
                            x(El, {
                                key: 1,
                                type: a(ca).HAND_PAPER_TYPE,
                                value: t.handPaperType || "0",
                                class: "left"
                            }, null, 8, [ "type", "value" ])) : T("", !0), [ "2", "3" ].indexOf(a(d)) >= 0 && t.anomalyNumber === 0 ? (u(), 
                            x(Ol, {
                                key: 2,
                                class: "status-tag"
                            }, {
                                default: n(() => [ g("正常") ]),
                                _: 1
                            })) : T("", !0), [ "2", "3" ].indexOf(a(d)) >= 0 && t.anomalyNumber !== 0 ? (u(), 
                            x(Ol, {
                                key: 3,
                                type: "danger",
                                class: "status-tag"
                            }, {
                                default: n(() => [ g(" 异常" + r(t.anomalyNumber || 0) + "次 ", 1) ]),
                                _: 2
                            }, 1024)) : T("", !0) ], 8, Ka), e("div", Xa, [ e("div", {
                                class: D([ "avatar-box", t.onlineStatus === "1" ? "online" : "offline" ])
                            }, [ i(Il, {
                                size: 54,
                                name: t.nickName,
                                eid: t.anomalousPhotoId
                            }, null, 8, [ "name", "eid" ]) ], 2), e("div", Ya, [ E((u(), 
                            f("div", Za, [ i(v, {
                                content: t.nickName
                            }, {
                                default: n(() => [ g(r(t.nickName), 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ])), [ [ ft ] ]), e("div", $a, r(t.number), 1) ]) ]), E(e("div", ae, [ ee, i(y, {
                                type: "primary",
                                size: "default",
                                onClick: M(C => (b => {
                                    Object.keys(V).forEach(h => {
                                        b[h] && (V[h] = b[h] || "");
                                    }), kl(), Al.value.handleOpen();
                                })(t), [ "stop" ])
                            }, {
                                default: n(() => [ g("验证") ]),
                                _: 2
                            }, 1032, [ "onClick" ]) ], 512), [ [ U, t.preparationStatus === "0" ] ]) ], 10, Qa) ]),
                            _: 2
                        }, 1032, [ "xs", "sm", "md", "lg", "xl" ]))), 128)) ]),
                        _: 1
                    }), a(la) === 0 ? (u(), f("div", le, te)) : T("", !0) ]),
                    _: 1
                }, 8, [ "modelValue" ])) : (u(), f("div", se, [ i(rt, {
                    data: a(O)
                }, {
                    default: n(() => [ i(K, {
                        type: "index",
                        label: "序号",
                        width: "80",
                        align: "center"
                    }), i(K, {
                        prop: "nickName",
                        label: "姓名",
                        "show-overflow-tooltip": !0,
                        width: "100",
                        formatter: Z
                    }), i(K, {
                        prop: "number",
                        label: "学号/工号",
                        "min-width": "140",
                        formatter: Z
                    }), i(K, {
                        prop: "terminalDeptName",
                        label: "所属末级组织",
                        "min-width": "120",
                        formatter: Z
                    }), i(K, {
                        prop: "mobile",
                        label: "手机号",
                        "min-width": "100",
                        formatter: Z
                    }), i(K, {
                        prop: "email",
                        label: "邮箱",
                        "min-width": "160",
                        formatter: Z
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ])) ]), E(i(ct, {
                    total: a(la),
                    pageSizes: [ 12, 24, 48, 96 ],
                    page: a(B).pageNum,
                    "onUpdate:page": l[14] || (l[14] = t => a(B).pageNum = t),
                    limit: a(B).pageSize,
                    "onUpdate:limit": l[15] || (l[15] = t => a(B).pageSize = t),
                    onPagination: Hl
                }, null, 8, [ "total", "page", "limit" ]), [ [ U, a(la) > 0 ] ]), i(mt, {
                    modelValue: a(X),
                    "onUpdate:modelValue": l[16] || (l[16] = t => ra(X) ? X.value = t : null),
                    width: "1090px",
                    title: "考试信息"
                }, {
                    default: n(() => {
                        return [ e("div", ie, [ e("div", ne, r(a(o).examName || "--"), 1), e("div", ue, [ e("div", oe, [ re, e("span", ce, r(a(Sa)(a(o).startTime) || "--"), 1) ]), e("div", me, [ de, e("span", pe, r(a(Sa)(a(o).endTime) || "--"), 1) ]), e("div", ve, [ fe, e("span", _e, r(a(o).duration || "0") + "分钟", 1) ]), e("div", he, [ ye, e("span", be, r(a(o).paperScore || "0") + "分", 1) ]), e("div", ge, [ xe, e("span", we, r(a(o).candidateNumber || "0") + "人", 1) ]), e("div", Ae, [ ke, i(v, {
                            content: a(o).invigilator || "--",
                            placement: "top",
                            "show-after": 300
                        }, {
                            default: n(() => [ e("span", Se, r(a(o).invigilator || "--"), 1) ]),
                            _: 1
                        }, 8, [ "content" ]) ]) ]) ]), e("div", Ne, [ Ce, e("div", Te, [ e("div", Ee, [ Oe, a(o).inRoomAheadSwitch ? (u(), 
                        f("span", Ie, "考前 " + r(a(o).aheadMinutes || "0") + " 分钟可进入考场", 1)) : (u(), 
                        f("span", Pe, "未设置")) ]), e("div", Ve, [ Fe, e("span", Le, r(a(o).faceIdentifySwitch ? "已开启" : "未开启"), 1) ]), e("div", De, [ ze, a(o).lateLimitSwitch ? (u(), 
                        f("span", Re, "迟到 " + r(a(o).lateMinutes || "0") + " 分钟后不可进入考场", 1)) : (u(), 
                        f("span", Be, "未设置")) ]), e("div", Ue, [ Me, e("span", qe, r(a(o).faceCompareSwitch ? "已开启" : "未开启"), 1) ]), e("div", He, [ je, a(o).submitPaperLimitSwitch ? (u(), 
                        f("span", Ge, "开始答卷 " + r(a(o).submitLimitMinutes || "0") + " 分钟后才能交卷", 1)) : (u(), 
                        f("span", Je, "未设置")) ]), e("div", Qe, [ Ke, e("span", We, r(a(o).switchScreenSwitch ? "已开启" : "未开启"), 1) ]), e("div", Xe, [ Ye, e("span", Ze, r((t = a(o).devicesLimit || [], 
                        Kl.filter(C => t.indexOf(C.value) >= 0).map(C => C.label).join("、"))), 1) ]), e("div", $e, [ al, e("span", el, r(a(o).screenExceptionMonitorSwitch ? "已开启" : "未开启"), 1) ]) ]) ]), e("div", ll, [ tl, e("div", {
                            class: "bot-info",
                            innerHTML: a(o).note
                        }, null, 8, sl) ]) ];
                        var t;
                    }),
                    _: 1
                }, 8, [ "modelValue" ]), e("div", {
                    class: D([ "dynamic-monitoring", a(N) ? "show" : "hide" ])
                }, [ e("div", {
                    class: "show-btn pointer",
                    onClick: Wl
                }, [ g(" 动态监控 "), a(N) ? (u(), x(p, {
                    key: 0,
                    icon: "ep:d-arrow-right"
                })) : (u(), x(p, {
                    key: 1,
                    icon: "ep:d-arrow-left"
                })) ]), e("div", {
                    class: D([ "dynamic-cont", , a(R) ? "" : "show" ])
                }, [ E(e("div", {
                    class: "new-message",
                    onClick: Yl
                }, [ i(p, {
                    icon: "svg-icon:d-arrow-top",
                    style: {
                        widows: "8px",
                        height: "8px"
                    }
                }), e("span", null, r(a(ba)) + "条新消息", 1) ], 512), [ [ U, a(na) ] ]), il, e("div", {
                    class: D([ "dynamic-search", a(R) ? "show" : "hide" ])
                }, [ nl, (u(!0), f(aa, null, ea(Rl.value, t => (u(), f("div", {
                    key: t.value,
                    class: D([ "search-item", a(I).indexOf(t.value) >= 0 ? "is-active" : "" ]),
                    onClick: M(C => function(b) {
                        R.value && (I.value.indexOf(b.value) >= 0 ? I.value = I.value.filter(h => h !== b.value) : I.value.push(b.value));
                    }(t), [ "stop" ])
                }, r(t.label), 11, ul))), 128)), e("div", ol, [ i(y, {
                    type: "primary",
                    onClick: Ml
                }, {
                    default: n(() => [ g("确定") ]),
                    _: 1
                }), i(y, {
                    onClick: l[17] || (l[17] = t => {
                        I.value = [ "1", "2", "3", "4", "5", "6" ];
                    })
                }, {
                    default: n(() => [ g("重置") ]),
                    _: 1
                }) ]), a(R) ? T("", !0) : (u(), f("div", rl, [ i(y, {
                    type: "primary",
                    circle: "",
                    onClick: l[18] || (l[18] = t => R.value = !0)
                }, {
                    default: n(() => [ i(p, {
                        icon: "ep:operation"
                    }) ]),
                    _: 1
                }) ])) ], 2), e("div", cl, [ E((u(), x(vt, {
                    class: "timeline",
                    id: "timeline",
                    "infinite-scroll-immediate": "false"
                }, {
                    default: n(() => [ (u(!0), f(aa, null, ea(a(F), (t, C) => (u(), 
                    x(pt, {
                        key: C,
                        icon: t.icon,
                        color: t.exceptionStatus === "2" ? "#1EC740" : "#F63030",
                        "hide-timestamp": !0
                    }, {
                        default: n(() => {
                            return [ e("p", ml, r(a(Sa)(t.createTime)), 1), e("div", dl, [ i(Il, {
                                size: 24,
                                name: t.operatorName,
                                eid: t.operatorAvatarId
                            }, null, 8, [ "name", "eid" ]), e("span", pl, r(t.operatorName), 1), e("span", vl, r(t.number), 1) ]), e("div", fl, [ e("p", null, r(t.logTypeName), 1), e("p", null, r(t.desc), 1), E(i(dt, {
                                src: a("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEVSURBVDiNzZMxTsMwFIb/Z2UhlRADnMOu1DEbXXKAHADDDitHYIO98gVygCywdazU5gQcgCxEqtn8GIKLG9IqiYTUf7Fl+X3/72cbODWRnyhtPwBcDqyvNia+2ltR2vLQFGFN1LVhqrczR3QtmN/WZrLqAxVdEAYVYFwwqJjq7WwUyEHMGViUJn5kYOEg5n1Af44m4F4ZVEhtQcAdwaWjEq3NZEXgFKBPAqe+R1LXibqx71LXSa9EHgZg1+SmOMpBeAKiXOo6K8358miitvMOAso2Jn4GKPuBJQdBgfMLEOXq1t57SGnOlgDQjA3sSKKWM+MhhHj9wjqktGWpvzobeUjhy95L1HYeovDWqhH/rRpr/P/6Bi09cjogLfUtAAAAAElFTkSuQmCC"),
                                "preview-src-list": (b = [ t.anomalousPhotoId ], 
                                b.some(h => h === "1") ? [ ys ] : b.map(h => h ? Vl(h) : "")),
                                class: "scan-pic"
                            }, {
                                default: n(() => [ g("查看图片") ]),
                                _: 2
                            }, 1032, [ "src", "preview-src-list" ]), [ [ U, [ "2", "3", "4", "5", "17", "18", "19" ].includes(t.logType) && t.anomalousPhotoId ] ]) ]) ];
                            var b;
                        }),
                        _: 2
                    }, 1032, [ "icon", "color" ]))), 128)) ]),
                    _: 1
                })), [ [ _t, Xl ] ]) ], 512) ], 2) ], 2), i(ps, {
                    ref_key: "noticeOrFinishRef",
                    ref: yl,
                    candidateDetails: a(V),
                    onRefreshList: A
                }, null, 8, [ "candidateDetails" ]), i(fs, {
                    ref_key: "manualReviewRef",
                    ref: Al,
                    candidateDetails: a(V),
                    onRefreshList: A
                }, null, 8, [ "candidateDetails" ]), i(hs, {
                    searchList: a(va),
                    candidateDetails: a(V),
                    ref_key: "candidateInfoRef",
                    ref: wl
                }, null, 8, [ "searchList", "candidateDetails" ]) ], 2);
            };
        }
    }, [ [ "__scopeId", "data-v-10f04c11" ] ]);
});

export {
    Is as __tla,
    zl as default
};