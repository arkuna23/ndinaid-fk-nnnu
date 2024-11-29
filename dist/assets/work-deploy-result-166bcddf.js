import {
    a0 as oe,
    r as g,
    f as ne,
    g as ce,
    o as m,
    c as y,
    t as e,
    k as t,
    l as h,
    a,
    dU as ie,
    B as v,
    D as k,
    v as de,
    m as pe,
    bo as b,
    aQ as ue,
    aC as me,
    _ as ye,
    J as ve,
    ad as _e,
    ae as ge,
    P as he,
    R as ke,
    S as be,
    n as fe,
    __tla as we
} from "./index-6c08ea4c.js";

import {
    _ as Ie,
    a as xe
} from "./fail-da771b5c.js";

import {
    f as Ne,
    h as Pe,
    __tla as Te
} from "./deploy-dab1856f.js";

import {
    q as Ue,
    h as Ce,
    __tla as je
} from "./file-e038b35d.js";

import {
    g as He,
    __tla as Re
} from "./log-8da79d7b.js";

import {
    f as Ve,
    __tla as qe
} from "./formatTime-de6f1520.js";

import {
    _ as Se
} from "./_plugin-vue_export-helper-1b428a4d.js";

let W, Be = Promise.all([ (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return je;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    let c, N, P, T, U, C, j, H, R, V, q, S, B, E, M, z, D, J, K, O, Q, A;
    c = i => (ke("data-v-27ecaac6"), i = i(), be(), i), N = {
        class: "work-deploy-result"
    }, P = {
        class: "page-header"
    }, T = c(() => e("span", null, "返回", -1)), U = c(() => e("span", null, "部署任务结果", -1)), 
    C = {
        class: "page-content"
    }, j = {
        class: "content-header"
    }, H = {
        class: "header-left"
    }, R = {
        class: "task-title"
    }, V = {
        class: "title"
    }, q = {
        key: 0,
        class: "error-message"
    }, S = [ "title" ], B = {
        key: 1,
        class: "success-message"
    }, E = [ c(() => e("span", null, "部署成功", -1)) ], M = {
        class: "task-info"
    }, z = {
        class: "header-right"
    }, D = {
        key: 0,
        class: "success-img",
        src: Ie,
        alt: ""
    }, J = {
        key: 1,
        class: "error-img",
        src: xe,
        alt: ""
    }, K = {
        class: "content-container"
    }, O = [ "onClick" ], Q = c(() => e("div", {
        class: "log-tab"
    }, [ e("div", {
        class: "log-tab__item selected"
    }, "日志") ], -1)), A = {
        class: "log-content"
    }, W = Se({
        __name: "work-deploy-result",
        props: {
            deployRow: {
                type: Object,
                required: !0
            }
        },
        emits: [ "goPage" ],
        setup(i, {
            emit: X
        }) {
            const Y = i, {
                deployRow: d
            } = oe(Y), Z = X, F = g([]), $ = () => {
                Z("goPage", "list");
            }, s = g({}), o = g(""), f = g(null), G = () => {
                He({
                    ciName: s.value.ciName,
                    ciNamespace: s.value.ciNameSpace,
                    envId: s.value.envId,
                    ciType: "k8s_deploy"
                }).then(n => {
                    let r = o.value;
                    o.value = n, fe(() => {
                        r != o.value && setTimeout(() => {
                            const l = document.getElementById("logInput");
                            l && (l.scrollTop = l.scrollHeight);
                        }, 50);
                    });
                }).catch(() => {
                    try {
                        window.clearInterval(f.value);
                    } catch {}
                });
            }, L = () => new Promise((n, r) => {
                Pe(d.value.deployId).then(l => {
                    s.value = l;
                    const w = [ {
                        deployPort: l.deployPort,
                        deployHttp: l.deployHttp,
                        deploymentTaskName: l.deploymentTaskName,
                        deployIp: l.deployIp,
                        deployUrl: l.deployUrl
                    } ];
                    F.value = w, n();
                }).catch(() => {
                    r();
                });
            }), ee = () => {
                L().then(() => {
                    G();
                }), f.value = setInterval(() => {
                    L().then(() => {
                        G();
                    });
                }, 3e3);
            };
            return ne(() => {
                ee();
            }), ce(() => {
                try {
                    window.clearInterval(f.value);
                } catch {}
            }), (n, r) => {
                const l = ue, w = me, ae = ye, le = ve, p = _e, te = ge, se = he;
                return m(), y("div", N, [ e("div", P, [ e("div", {
                    class: "back",
                    onClick: $
                }, [ t(l, null, {
                    default: h(() => [ t(a(ie)) ]),
                    _: 1
                }), T ]), t(w, {
                    direction: "vertical"
                }), U ]), e("div", C, [ e("div", j, [ e("div", H, [ e("div", R, [ e("span", V, v(a(d).deploymentTaskName), 1), a(s).status == 3 ? (m(), 
                y("div", q, [ t(ae, {
                    icon: "svg-icon:info2"
                }), e("span", {
                    class: "overSpan",
                    style: {
                        "max-width": "500px"
                    },
                    title: a(d).errorMsg
                }, v(a(d).errorMsg), 9, S) ])) : k("", !0), a(s).status == 1 ? (m(), 
                y("div", B, E)) : k("", !0) ]), e("div", M, [ e("span", null, "代码源：" + v(a(s).gitUrl), 1), e("span", null, "部署时间：" + v(a(Ve)(a(d).executeTime)), 1), e("span", null, "发起人：" + v(a(s).executeUserRealName), 1) ]) ]), e("div", z, [ t(le, {
                    type: "primary",
                    size: "large",
                    style: {
                        "margin-right": "150px",
                        "margin-left": "15px"
                    },
                    onClick: r[0] || (r[0] = _ => {
                        return I = a(s).envId, void Ne({
                            buildEnvId: I,
                            serviceName: "nse-ctp-3"
                        }).then(u => {
                            const x = u;
                            u ? (Ue(x).then(re => {
                                Ce(x, re.objectKey);
                            }), b.success("开始下载安装包")) : b.warning("暂时无法下载安装包");
                        });
                        var I;
                    })
                }, {
                    default: h(() => [ de("下载安装包") ]),
                    _: 1
                }), a(s).status == 1 ? (m(), y("img", D)) : k("", !0), a(s).status == 3 ? (m(), 
                y("img", J)) : k("", !0) ]) ]), e("div", K, [ t(te, {
                    class: "neu-table",
                    data: a(F),
                    style: {
                        width: "100%",
                        "padding-bottom": "0",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        "border-radius": "10px"
                    }
                }, {
                    default: h(() => [ t(p, {
                        prop: "deploymentTaskName",
                        label: "名称"
                    }), t(p, {
                        prop: "deployHttp",
                        label: "域名"
                    }), t(p, {
                        prop: "deployIp",
                        align: "center",
                        label: "IP"
                    }), t(p, {
                        prop: "deployPort",
                        align: "center",
                        label: "端口"
                    }), t(p, {
                        align: "center",
                        label: "访问地址"
                    }, {
                        default: h(_ => [ e("span", {
                            class: "click-btn",
                            onClick: I => (u => {
                                if (u.deployUrl) try {
                                    window.open(u.deployUrl, "_blank");
                                } catch {
                                    b.warning("暂时无法访问");
                                } else b.warning("暂无演示地址");
                            })(_.row)
                        }, " 点击访问 ", 8, O) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]), Q, e("div", A, [ t(se, {
                    id: "logInput",
                    modelValue: a(o),
                    "onUpdate:modelValue": r[1] || (r[1] = _ => pe(o) ? o.value = _ : null),
                    rows: 24,
                    type: "textarea",
                    placeholder: "",
                    style: {
                        height: "100%"
                    },
                    disabled: ""
                }, null, 8, [ "modelValue" ]) ]) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-27ecaac6" ] ]);
});

export {
    Be as __tla,
    W as default
};