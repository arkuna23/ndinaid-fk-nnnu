import {
    d as A,
    r as p,
    u as B,
    al as D,
    e as K,
    a as l,
    U as X,
    w as Y,
    f as H,
    A as J,
    G as W,
    o as P,
    C as E,
    l as t,
    k as e,
    D as Z,
    I as $,
    v as aa,
    B as ea,
    aa as ta,
    p as la,
    an as ra,
    ar as oa,
    as as na,
    at as sa,
    au as ia,
    ap as pa,
    O as da,
    av as ma,
    P as ua,
    a8 as ca,
    aw as _a,
    Q as ga,
    R as fa,
    S as ha,
    t as f,
    ax as ya,
    ay as wa,
    __tla as xa
} from "./index-6c08ea4c.js";

import {
    _ as Fa,
    __tla as va
} from "./Verify-d8738893.js";

import {
    _ as ba,
    __tla as Va
} from "./XButton-1a8b40b5.js";

import {
    u as Na,
    L as ka,
    _ as La,
    a as Pa,
    __tla as Ea
} from "./LoginFormTitle.vue_vue_type_script_setup_true_lang-157278a6.js";

import {
    u as h,
    __tla as Ma
} from "./useIcon-cdc2b671.js";

import {
    r as y,
    __tla as Sa
} from "./formRules-e114368a.js";

import {
    _ as za
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ua
} from "./index-e75cf668.js";

let M, Ia = Promise.all([ (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})() ]).then(async () => {
    let u, w, x, F;
    u = c => (fa("data-v-5ed8ba44"), c = c(), ha(), c), w = u(() => f("div", {
        class: "school-icon"
    }, null, -1)), x = u(() => f("div", {
        class: "user-icon"
    }, null, -1)), F = u(() => f("div", {
        class: "password-icon"
    }, null, -1)), M = za(A({
        name: "LoginForm",
        __name: "LoginForm",
        setup(c) {
            const {
                t: d
            } = ta();
            la(), h({
                icon: "ep:house"
            }), h({
                icon: "ep:avatar"
            }), h({
                icon: "ep:lock"
            });
            const v = p(), {
                validForm: S
            } = Pa(v), {
                setLoginState: Oa,
                getLoginState: z
            } = Na(), {
                currentRoute: U,
                push: I
            } = B(), O = D(), m = p(""), _ = p(!1), b = p(), R = p("blockPuzzle"), C = K(() => l(z) === ka.LOGIN), G = {
                tenantName: [ y ],
                username: [ y ],
                password: [ y ]
            }, a = X({
                isShowPassword: !1,
                captchaEnable: "true",
                tenantEnable: "true",
                loginForm: {
                    tenantName: "",
                    username: "",
                    password: "",
                    captchaVerification: "",
                    rememberMe: !1
                }
            }), V = async () => {
                a.captchaEnable === "false" ? await k({}) : b.value.show();
            }, N = p(), k = async o => {
                var r;
                _.value = !0;
                try {
                    if (await (async () => {
                        if (a.tenantEnable === "true") {
                            const n = await ya(a.loginForm.tenantName);
                            wa(n);
                        }
                    })(), !await S()) return;
                    a.loginForm.captchaVerification = o.captchaVerification;
                    const s = await oa(a.loginForm);
                    if (!s) return;
                    N.value = na.service({
                        lock: !0,
                        text: "正在加载系统中...",
                        background: "rgba(0, 0, 0, 0.7)"
                    }), a.loginForm.rememberMe ? sa(a.loginForm) : ia(), pa(s), 
                    m.value || (m.value = "/"), m.value.indexOf("sso") !== -1 ? window.location.href = window.location.href.replace("/login?redirect=", "") : I({
                        path: m.value || O.addRouters[0].path
                    });
                } finally {
                    _.value = !1, (r = N.value) == null || r.close();
                }
            };
            return Y(() => U.value, o => {
                var r;
                m.value = (r = o == null ? void 0 : o.query) == null ? void 0 : r.redirect;
            }, {
                immediate: !0
            }), H(() => {
                (() => {
                    const o = ra();
                    o && (a.loginForm = {
                        ...a.loginForm,
                        username: o.username ? o.username : a.loginForm.username,
                        password: o.password ? o.password : a.loginForm.password,
                        rememberMe: !!o.rememberMe,
                        tenantName: o.tenantName ? o.tenantName : a.loginForm.tenantName
                    });
                })();
            }), (o, r) => {
                const s = da, n = ma, g = ua, Q = ca, L = _a, T = ba, j = Fa, q = ga;
                return J((P(), E(q, {
                    ref_key: "formLogin",
                    ref: v,
                    model: l(a).loginForm,
                    rules: G,
                    class: "login-form",
                    "label-position": "top",
                    "label-width": "120px",
                    size: "large"
                }, {
                    default: t(() => [ e(L, {
                        style: {
                            "margin-right": "-10px",
                            "margin-left": "-10px"
                        }
                    }, {
                        default: t(() => [ e(n, {
                            span: 24,
                            style: {
                                "padding-right": "10px",
                                "padding-left": "10px"
                            }
                        }, {
                            default: t(() => [ e(s, null, {
                                default: t(() => [ e(La, {
                                    style: {
                                        width: "100%"
                                    }
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(n, {
                            span: 24,
                            style: {
                                "padding-right": "10px",
                                "padding-left": "10px"
                            }
                        }, {
                            default: t(() => [ l(a).tenantEnable === "true" ? (P(), 
                            E(s, {
                                key: 0,
                                prop: "tenantName"
                            }, {
                                default: t(() => [ e(g, {
                                    modelValue: l(a).loginForm.tenantName,
                                    "onUpdate:modelValue": r[0] || (r[0] = i => l(a).loginForm.tenantName = i),
                                    placeholder: l(d)("login.tenantNamePlaceholder"),
                                    link: "",
                                    type: "primary"
                                }, {
                                    prefix: t(() => [ w ]),
                                    _: 1
                                }, 8, [ "modelValue", "placeholder" ]) ]),
                                _: 1
                            })) : Z("", !0) ]),
                            _: 1
                        }), e(n, {
                            span: 24,
                            style: {
                                "padding-right": "10px",
                                "padding-left": "10px"
                            }
                        }, {
                            default: t(() => [ e(s, {
                                prop: "username"
                            }, {
                                default: t(() => [ e(g, {
                                    modelValue: l(a).loginForm.username,
                                    "onUpdate:modelValue": r[1] || (r[1] = i => l(a).loginForm.username = i),
                                    placeholder: l(d)("login.usernamePlaceholder")
                                }, {
                                    prefix: t(() => [ x ]),
                                    _: 1
                                }, 8, [ "modelValue", "placeholder" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(n, {
                            span: 24,
                            style: {
                                "padding-right": "10px",
                                "padding-left": "10px"
                            }
                        }, {
                            default: t(() => [ e(s, {
                                prop: "password"
                            }, {
                                default: t(() => [ e(g, {
                                    modelValue: l(a).loginForm.password,
                                    "onUpdate:modelValue": r[2] || (r[2] = i => l(a).loginForm.password = i),
                                    placeholder: l(d)("login.passwordPlaceholder"),
                                    "show-password": "",
                                    type: "password",
                                    onKeyup: r[3] || (r[3] = $(i => V(), [ "enter" ]))
                                }, {
                                    prefix: t(() => [ F ]),
                                    _: 1
                                }, 8, [ "modelValue", "placeholder" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(n, {
                            span: 24,
                            style: {
                                "padding-right": "10px",
                                "padding-left": "10px",
                                "margin-top": "-20px",
                                "margin-bottom": "-20px"
                            }
                        }, {
                            default: t(() => [ e(s, null, {
                                default: t(() => [ e(L, {
                                    justify: "space-between",
                                    style: {
                                        width: "100%"
                                    }
                                }, {
                                    default: t(() => [ e(n, {
                                        span: 6
                                    }, {
                                        default: t(() => [ e(Q, {
                                            modelValue: l(a).loginForm.rememberMe,
                                            "onUpdate:modelValue": r[4] || (r[4] = i => l(a).loginForm.rememberMe = i)
                                        }, {
                                            default: t(() => [ aa(ea(l(d)("login.remember")), 1) ]),
                                            _: 1
                                        }, 8, [ "modelValue" ]) ]),
                                        _: 1
                                    }), e(n, {
                                        offset: 6,
                                        span: 12
                                    }) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(n, {
                            span: 24,
                            style: {
                                "padding-right": "10px",
                                "padding-left": "10px"
                            }
                        }, {
                            default: t(() => [ e(s, null, {
                                default: t(() => [ e(T, {
                                    loading: l(_),
                                    title: l(d)("login.login"),
                                    class: "w-[100%]",
                                    type: "primary",
                                    onClick: r[5] || (r[5] = i => V())
                                }, null, 8, [ "loading", "title" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), e(j, {
                            ref_key: "verify",
                            ref: b,
                            captchaType: l(R),
                            imgSize: {
                                width: "400px",
                                height: "200px"
                            },
                            mode: "pop",
                            onSuccess: k
                        }, null, 8, [ "captchaType" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model" ])), [ [ W, l(C) ] ]);
            };
        }
    }), [ [ "__scopeId", "data-v-5ed8ba44" ] ]);
});

export {
    Ia as __tla,
    M as default
};