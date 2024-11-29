import {
    b as ra,
    e as W,
    r as n,
    w as da,
    o as r,
    c as p,
    t as o,
    k as s,
    l as i,
    B as C,
    a as l,
    v as m,
    D as S,
    F as K,
    y as ae,
    z as j,
    C as B,
    H as va,
    A as ma,
    m as D,
    p as pa,
    K as ga,
    _ as fa,
    J as ya,
    aU as ka,
    P as ha,
    ad as ba,
    ae as wa,
    a9 as _a,
    R as xa,
    S as Ia,
    __tla as Ca
} from "./index-6c08ea4c.js";

import {
    _ as Sa,
    __tla as Na
} from "./index-13c88727.js";

import {
    G as Va,
    o as Fa,
    r as za,
    g as Ea,
    d as Ba,
    b as Ra,
    e as Ua,
    a as qa,
    c as Ha,
    __tla as Pa
} from "./guacClient-8dd41bd6.js";

import Oa from "./html2canvas.esm-ad032b91.js";

import {
    f as Ta,
    __tla as $a
} from "./file-e038b35d.js";

import {
    _ as Wa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let Ge, ja = Promise.all([ (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return $a;
    } catch {}
})() ]).then(async () => {
    let le, R, te, se, ne, ce, ie, ue, oe, re, de, ve, me, pe, ge, fe, ye, ke, he, be, we, _e, xe, Ie, Ce, Se, Ne, Ve, Fe, ze;
    le = "" + new URL("loading-e62c85d4.gif", import.meta.url).href, R = U => (xa("data-v-a2c49645"), 
    U = U(), Ia(), U), te = {
        class: "env-com"
    }, se = {
        class: "cont-env"
    }, ne = {
        key: 0,
        class: "right relative"
    }, ce = {
        class: "time"
    }, ie = R(() => o("span", {
        class: "neu-color-desc"
    }, "剩余时间：", -1)), ue = {
        class: "time-num-box time-num"
    }, oe = {
        class: "time-num time-num-box"
    }, re = {
        class: "time-num time-num-box"
    }, de = {
        class: "time-num time-num-box"
    }, ve = {
        class: "left-cont"
    }, me = {
        class: "left-tabs"
    }, pe = [ "onClick" ], ge = {
        key: 0,
        class: j([ "left-env-cont env-loading" ]),
        id: "guacViewBox"
    }, fe = {
        class: "loading-box"
    }, ye = R(() => o("img", {
        class: "loading-img",
        fit: "cover",
        src: le
    }, null, -1)), ke = R(() => o("br", null, null, -1)), he = {
        key: 1,
        class: j([ "left-env-cont" ]),
        id: "guacViewBox"
    }, be = {
        key: 0,
        style: {
            height: "100%"
        }
    }, we = [ "src" ], _e = {
        class: "right-menu"
    }, xe = [ "onClick" ], Ie = {
        class: "icon-box"
    }, Ce = {
        class: "img-box min-h-200px"
    }, Se = [ "src" ], Ne = {
        class: "dialog-footer align-center"
    }, Ve = {
        class: "copy-box"
    }, Fe = R(() => o("div", {
        class: "copy-title py-8px"
    }, "内容粘贴区", -1)), ze = {
        class: "dialog-footer align-center"
    }, Ge = Wa({
        __name: "Environment",
        props: {
            module: {
                type: String,
                default: "1"
            },
            projectId: {
                type: String,
                default: ""
            },
            userId: {
                type: String,
                default: ""
            },
            taskId: {
                type: String,
                default: ""
            },
            isTesting: {
                type: String,
                default: "1"
            },
            isCut: {
                type: Number,
                default: 1
            },
            isStudent: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "stopEnv", "saveCutScreen" ],
        setup(U, {
            expose: Le,
            emit: Me
        }) {
            const Ee = ra(), f = pa(), Q = Me, y = U, Ae = W(() => [ {
                name: "退出环境",
                key: "exit",
                icon: "svg-icon:env-exit"
            }, ...[ "ssh", "vnc" ].indexOf(z.value) >= 0 && y.isCut === 1 ? [ {
                name: "剪切板",
                key: "copy",
                icon: "svg-icon:env-copy"
            } ] : [], {
                name: "截图",
                key: "cutScreen",
                icon: "svg-icon:env-cut-screen"
            }, {
                name: "重新链接",
                key: "concat",
                icon: "svg-icon:env-concat"
            }, {
                name: "桌面全屏",
                key: "fullScreen",
                icon: "svg-icon:env-full-screen"
            }, {
                name: "服务器",
                key: "service",
                icon: "svg-icon:env-service"
            }, {
                name: "开放端口",
                key: "port",
                icon: "svg-icon:env-port"
            }, {
                name: "环境清理",
                key: "clean",
                icon: "svg-icon:env-clean"
            } ]), Je = n([ {
                key: "networkOk",
                succ: "网络连接建立成功；",
                error: "网络连接失败；",
                load: "正在检查网络环境..."
            }, {
                key: "replicaOk",
                succ: "实验环境调度成功；",
                error: "实验环境调度失败；",
                load: "正在调度实验环境资源..."
            } ]), q = n([]), _ = n({}), G = n(0), c = W(() => q.value.length > 0 ? q.value[G.value] : {}), x = n("1001100110011001"), N = n([ "00", "00", "00", "00" ]), b = n(0), L = n(!1), Be = n(), H = n(!1), V = n(!1), P = n(""), w = n(!1), X = n(0), I = n(!1), M = n(""), F = n(!1), Re = n([]), Y = n(() => {}), O = n(0), z = W(() => {
                var a, e;
                return ((e = (a = c.value) == null ? void 0 : a.protocols) == null ? void 0 : e[O.value]) || "";
            }), Ue = n(!1), qe = W(() => Ee.getBodyHeight - 140), Ke = W(() => Ee.getBodyWidth), A = n(0);
            da(() => Ke.value, () => {
                Z();
            });
            const Qe = () => {
                var a;
                (a = Be.value) == null || a.copy({
                    data: P.value
                }), V.value = !1;
            }, Z = () => {
                var a;
                A.value = ((a = document.getElementById("guacViewBox")) == null ? void 0 : a.clientWidth) || 0;
            }, Xe = () => {
                O.value = O.value === 1 ? 0 : 1;
            }, Ye = () => {
                Ue.value = !1;
            }, Ze = a => {
                let e = c.value.protocols, v = c.value.svcName + "." + c.value.namespace;
                return window.btoa([ v, e[O.value || 0] === "ssh" ? "0" : "1" ].join("\0"));
            }, ea = a => {
                let e = z.value === "notebook" ? "/jupy-" : "/ide-";
                return `${_.value.webUrl}${e}${c.value.svcName}.${c.value.namespace}/`;
            }, He = (a = 0, e = () => {}, v) => {
                if (!z.value) return f.warning("请先进入实验环境！"), void (a !== 0 && e && e(4));
                if (X.value = a, z.value === "cloudide") return f.warning("当前环境不支持截图！"), 
                a !== 0 && e && e(), void (w.value = !1);
                if (z.value === "notebook") f.warning("当前环境不支持截图！"), a !== 0 && e && e(), 
                w.value = !1; else {
                    w.value = !0, I.value = !0;
                    const u = document.createElement("canvas"), d = document.getElementById("guacClientId");
                    u.width = A.value, u.height = qe.value, Oa(d, {
                        backgroundColor: "#000000",
                        canvas: u,
                        useCORS: !0
                    }).then(g => {
                        M.value = g.toDataURL("image/png"), I.value = !1, v && v();
                    }).catch(() => {
                        a !== 0 && e && e();
                    });
                }
            }, aa = () => {
                Q("saveCutScreen", M.value, a => {
                    I.value = !1, a && (w.value = !1);
                });
            }, la = () => {
                Ta(l(M), `${c.value.name}\u622A\u56FE.png`);
            }, ta = async () => {
                try {
                    await f.confirm("清理环境将重置实验环境，请确认是否清理？"), await za({
                        module: y.module,
                        businessId: y.projectId,
                        userId: y.userId
                    }), f.success("环境清理成功，正在重启实验环境"), b.value += 1, Oe({
                        status: 1
                    });
                } catch {}
            }, Pe = async () => {
                try {
                    let a = await Ea({
                        id: l(_).id,
                        namespace: l(c).namespace,
                        serviceInstanceName: l(c).serviceInstanceName
                    }) || [];
                    Re.value = a.map(e => ({
                        ...e,
                        externalDomain: e.targetPort ? `${e.externalIp}:${e.targetPort}` : "--",
                        status: !!e.targetPort
                    })), F.value || (F.value = !0);
                } catch {
                    f.warning("暂无端口信息！");
                }
            }, sa = () => {
                L.value = !0, setTimeout(() => {
                    L.value = !1;
                }, 200);
            }, na = () => {
                if (window.innerHeight === window.screen.height) document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(); else {
                    var a = document.documentElement;
                    a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen();
                }
            }, E = n(null), ca = a => {
                var e = Number(a), v = parseInt(e / 1e3 / 60 / 60 / 24, 10), u = parseInt(e / 1e3 / 60 / 60 % 24, 10), d = parseInt(e / 1e3 / 60 % 60, 10), g = parseInt(e / 1e3 % 60, 10);
                function k(h) {
                    return h < 10 && (h = "0" + h), h;
                }
                return [ v, u = k(u), d = k(d), g = k(g) ];
            }, ee = async () => {
                try {
                    b.value = -1, await Ba(_.value.id), Q("stopEnv", _.value);
                } catch {}
            }, Oe = a => {
                b.value = Math.floor(100 * Math.random()), b.value += 1, $e(a, b.value);
            }, ia = async () => {
                b.value += 1;
                try {
                    c.value.namespace && await Ra({
                        namespace: c.value.namespace,
                        serviceInstanceName: c.value.serviceInstanceName
                    }), Te(b.value);
                } catch {}
            }, Te = async a => {
                try {
                    const v = await (y.isTesting !== "1" || y.isStudent ? Ua : qa)({
                        module: y.module,
                        businessId: y.projectId,
                        userId: y.userId
                    });
                    $e(v, a);
                } catch {}
            }, $e = (a, e) => {
                _.value = a || {}, x.value = a.overTime + "" || "0", E.value && (window.clearInterval(E.value), 
                E.value = null), E.value = setInterval(() => {
                    Number(x.value) - 1e3 < 0 ? (N.value = [ "00", "00", "00", "00" ], 
                    window.clearInterval(E.value), E.value = null, Number(x.value) - 1e3 < 0 && (f.warning("任务已超时！"), 
                    ee())) : Number(x.value) - 1e3 < 0 ? (f.warning("任务已超时！"), ee()) : (x.value = (Number(x.value) - 1e3).toString(), 
                    N.value = ca(x.value));
                }, 1e3);
                let v = (a == null ? void 0 : a.instances) || [];
                q.value = v.map(u => ({
                    ...u,
                    status: u.networkOk && u.replicaOk ? 1 : 0
                })), Z(), a.status === 1 && e === b.value && setTimeout(() => {
                    Te(e);
                }, 5e3);
            }, ua = () => {
                w.value = !1, X.value === 1 && Y.value && Y.value(4);
            };
            return Le({
                initData: Oe,
                changeViewWidth: Z,
                handleCheckerEnvet: (a, e, v, u = [], d, g) => {
                    if (Y.value = e, v === "cutScreen") He(a, e, g); else if (v === "stepChecker") {
                        let k = {
                            namespace: c.value.namespace,
                            serviceInstanceName: c.value.serviceInstanceName,
                            scripts: u
                        };
                        d ? e && e(4, {}, k) : Ha(k).then(h => {
                            e && e(2, h, k);
                        }).catch(h => {
                            e && e(2, h, k);
                        });
                    } else v === "textarea" && e && e();
                },
                exitEnvironment: ee
            }), (a, e) => {
                const v = ga, u = fa, d = ya, g = ka, k = Sa, h = ha, T = ba, We = wa, oa = _a;
                return r(), p("div", te, [ o("div", se, [ y.module !== "1" ? (r(), 
                p("div", ne, [ s(v, {
                    effect: "dark",
                    content: "剩余时间为0后，将自动关闭环境",
                    placement: "top"
                }, {
                    default: i(() => [ o("div", ce, [ ie, o("span", ue, C(l(N)[0] || "00"), 1), m(" 天 "), o("span", oe, C(l(N)[1] || "00"), 1), m(" 时 "), o("span", re, C(l(N)[2] || "00"), 1), m(" 分 "), o("span", de, C(l(N)[3] || "00"), 1), m(" 秒 ") ]) ]),
                    _: 1
                }) ])) : S("", !0), o("div", ve, [ o("div", me, [ (r(!0), p(K, null, ae(l(q), (t, J) => (r(), 
                p("div", {
                    key: t.name,
                    class: j([ "tab-item", l(G) === J ? "is-active" : "" ]),
                    onClick: $ => ((Da, je) => {
                        var De;
                        G.value !== je && (A.value = ((De = document.getElementById("guacViewBox")) == null ? void 0 : De.clientWidth) || 0, 
                        G.value = je, O.value = 0);
                    })(0, J)
                }, [ m(C(t.name) + " ", 1), s(u, {
                    icon: "svg-icon:env-item",
                    class: "item-icon",
                    size: 20
                }), t.status === 1 && (t.protocols || []).length > 1 ? (r(), B(d, {
                    key: 0,
                    text: "",
                    circle: "",
                    class: "succ-icon item-status",
                    onClick: va(Xe, [ "stop" ])
                }, {
                    default: i(() => [ s(u, {
                        icon: "ep:sort",
                        size: 16
                    }) ]),
                    _: 1
                })) : S("", !0), t.status === 2 ? (r(), B(u, {
                    key: 1,
                    icon: "ep:circle-close-filled",
                    class: "item-status error-icon",
                    size: 16
                })) : S("", !0), t.status === 0 ? (r(), B(u, {
                    key: 2,
                    icon: "ep:loading",
                    class: "item-status is-loading load-icon",
                    size: 16
                })) : S("", !0) ], 10, pe))), 128)) ]), l(c).status !== 1 ? (r(), 
                p("div", ge, [ o("div", fe, [ ye, (r(!0), p(K, null, ae(l(Je), t => (r(), 
                p(K, {
                    key: t.key
                }, [ o("div", {
                    class: j([ "common loading-info", l(c)[t.key] ? "is-success" : "is-loading" ])
                }, [ s(u, {
                    icon: "ep:circle-check-filled",
                    class: "succ-icon icon-box",
                    size: 16
                }), s(u, {
                    icon: "ep:circle-close-filled",
                    class: "error-icon icon-box",
                    size: 16
                }), s(u, {
                    icon: "ep:loading",
                    class: "is-loading load-icon icon-box",
                    size: 16
                }), m(" " + C(l(c)[t.key] ? t.succ : t.load), 1) ], 2), ke ], 64))), 128)), s(d, {
                    class: "reconcat-btn",
                    type: "primary",
                    size: "large",
                    onClick: ia
                }, {
                    default: i(() => [ m("重新加载") ]),
                    _: 1
                }) ]) ])) : (r(), p("div", he, [ [ "ssh", "vnc" ].indexOf(l(z)) < 0 && !l(L) ? (r(), 
                p("div", be, [ o("iframe", {
                    ref: "iframeScreen",
                    src: ea(l(c)),
                    style: {
                        height: "100%",
                        width: "100%",
                        background: "#ffffff",
                        border: "none"
                    }
                }, null, 8, we) ])) : l(L) ? S("", !0) : (r(), B(Va, {
                    key: 1,
                    ref_key: "guacClientRef",
                    ref: Be,
                    id: "guacClientId",
                    resetGuac: l(Ue),
                    onFinishResetGuac: Ye,
                    "guac-id": Ze(),
                    namespace: l(c).namespace,
                    "pod-name": c.value.serviceInstanceName,
                    outHeight: l(qe),
                    outWidth: l(A),
                    webUrl: l(_).guacHost
                }, null, 8, [ "resetGuac", "guac-id", "namespace", "pod-name", "outHeight", "outWidth", "webUrl" ])) ])) ]) ]), o("div", _e, [ (r(!0), 
                p(K, null, ae(l(Ae), t => (r(), p("div", {
                    key: t.key,
                    class: j([ "menu-item" ]),
                    onClick: J => ($ => {
                        switch ($.key) {
                          case "copy":
                            P.value = "", V.value = !0;
                            break;

                          case "cutScreen":
                            He();
                            break;

                          case "concat":
                            sa();
                            break;

                          case "fullScreen":
                            na();
                            break;

                          case "service":
                            H.value = !0;
                            break;

                          case "port":
                            Pe();
                            break;

                          case "clean":
                            ta();
                            break;

                          case "exit":
                            b.value = -1, Q("stopEnv", _.value);
                        }
                    })(t)
                }, [ m(C(t.name) + " ", 1), o("div", Ie, [ s(u, {
                    icon: t.icon,
                    class: "item-icon",
                    size: 24
                }, null, 8, [ "icon" ]) ]) ], 8, xe))), 128)) ]), s(g, {
                    modelValue: l(w),
                    "onUpdate:modelValue": e[0] || (e[0] = t => D(w) ? w.value = t : null),
                    title: "任务截图",
                    scroll: "",
                    width: "600"
                }, {
                    footer: i(() => [ o("div", Ne, [ s(d, {
                        type: "primary",
                        size: "default",
                        loading: l(I),
                        onClick: la
                    }, {
                        default: i(() => [ m("下载本地 ") ]),
                        _: 1
                    }, 8, [ "loading" ]), l(X) === 1 ? (r(), B(d, {
                        key: 0,
                        type: "primary",
                        size: "default",
                        loading: l(I),
                        onClick: aa
                    }, {
                        default: i(() => [ m("保 存") ]),
                        _: 1
                    }, 8, [ "loading" ])) : S("", !0), s(d, {
                        size: "default",
                        onClick: ua,
                        loading: l(I)
                    }, {
                        default: i(() => [ m("取 消") ]),
                        _: 1
                    }, 8, [ "loading" ]) ]) ]),
                    default: i(() => [ ma((r(), p("div", Ce, [ o("img", {
                        src: l(M),
                        alt: "",
                        class: "resultImg"
                    }, null, 8, Se) ])), [ [ oa, l(I) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), s(g, {
                    modelValue: l(V),
                    "onUpdate:modelValue": e[3] || (e[3] = t => D(V) ? V.value = t : null),
                    title: "剪切板",
                    scroll: "",
                    width: "600"
                }, {
                    footer: i(() => [ o("div", ze, [ s(d, {
                        type: "primary",
                        onClick: Qe
                    }, {
                        default: i(() => [ m("写 入") ]),
                        _: 1
                    }), s(d, {
                        onClick: e[2] || (e[2] = t => V.value = !1)
                    }, {
                        default: i(() => [ m("取 消") ]),
                        _: 1
                    }) ]) ]),
                    default: i(() => [ o("div", Ve, [ s(k, {
                        title: `\u8BF4\u660E\uFF1A\u590D\u5236\u5916\u90E8\u5185\u5BB9\u5230\u5B9E\u9A8C\u73AF\u5883\u5185\uFF0C\u7C98\u8D34\u4FE1\u606F\u5230\u5185\u5BB9\u7C98\u8D34\u533A\uFF08\u957F\u5EA6\u9650\u5236\u4E3A0 -\r
        10000\u5B57\u7B26\uFF09\uFF0C\u70B9\u51FB\u3010\u5199\u5165\u3011\uFF0C\u5373\u53EF\u5728\u5B9E\u9A8C\u73AF\u5883\u4E2D\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u81EA\u884C\u7C98\u8D34\u3002`
                    }), Fe, s(h, {
                        modelValue: l(P),
                        "onUpdate:modelValue": e[1] || (e[1] = t => D(P) ? P.value = t : null),
                        maxlength: "10000",
                        type: "textarea",
                        placeholder: "请输入",
                        clearable: "",
                        rows: 5
                    }, null, 8, [ "modelValue" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), s(g, {
                    modelValue: l(F),
                    "onUpdate:modelValue": e[5] || (e[5] = t => D(F) ? F.value = t : null),
                    title: "开放端口",
                    scroll: "",
                    width: "440"
                }, {
                    footer: i(() => [ s(d, {
                        onClick: e[4] || (e[4] = t => F.value = !1)
                    }, {
                        default: i(() => [ m("关 闭") ]),
                        _: 1
                    }) ]),
                    default: i(() => [ s(We, {
                        ref: "serviceTable",
                        class: "mb-4",
                        data: l(Re),
                        stripe: "",
                        "highlight-current-row": ""
                    }, {
                        default: i(() => [ s(T, {
                            prop: "sourcePort",
                            label: "端口"
                        }), s(T, {
                            prop: "externalDomain",
                            label: "链接地址"
                        }), s(T, {
                            label: "操作",
                            fixed: "right",
                            align: "center",
                            width: "120"
                        }, {
                            default: i(t => [ t.row.status ? S("", !0) : (r(), B(d, {
                                key: 0,
                                link: "",
                                type: "primary",
                                onClick: J => (async $ => {
                                    if ($.sourcePort) try {
                                        await f.confirm("请确认是否开放此端口？"), await Fa({
                                            namespace: c.value.namespace,
                                            serviceInstanceName: c.value.serviceInstanceName,
                                            port: $.sourcePort
                                        }), f.success("操作成功"), Pe();
                                    } catch {}
                                })(t.row)
                            }, {
                                default: i(() => [ m("开启") ]),
                                _: 2
                            }, 1032, [ "onClick" ])) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]), s(g, {
                    modelValue: l(H),
                    "onUpdate:modelValue": e[7] || (e[7] = t => D(H) ? H.value = t : null),
                    title: "服务器信息",
                    scroll: "",
                    width: "440"
                }, {
                    footer: i(() => [ s(d, {
                        onClick: e[6] || (e[6] = t => H.value = !1)
                    }, {
                        default: i(() => [ m("关 闭") ]),
                        _: 1
                    }) ]),
                    default: i(() => [ s(We, {
                        ref: "serviceTable",
                        class: "mb-4",
                        data: l(q),
                        stripe: "",
                        "highlight-current-row": ""
                    }, {
                        default: i(() => [ s(T, {
                            prop: "svcName",
                            label: "Service Name"
                        }), s(T, {
                            prop: "podInstanceName",
                            label: "Host Name"
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a2c49645" ] ]);
});

export {
    ja as __tla,
    Ge as default
};