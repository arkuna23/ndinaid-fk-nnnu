import {
    a7 as I,
    d as M,
    T as N,
    u as Q,
    r as T,
    U,
    e as R,
    a as l,
    w as j,
    A as D,
    G as E,
    o as p,
    c as _,
    k as n,
    l as c,
    t as K,
    v as S,
    F as P,
    y as W,
    C as X,
    B as Y,
    H as C,
    M as Z,
    s as $,
    a8 as ee,
    br as se,
    O as ae,
    J as te,
    Q as oe,
    __tla as re
} from "./index-6c08ea4c.js";

import {
    u as le,
    L as V,
    _ as ne,
    __tla as ce
} from "./LoginFormTitle.vue_vue_type_script_setup_true_lang-157278a6.js";

let z, ie = Promise.all([ (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})() ]).then(async () => {
    let k, O, b;
    k = {
        class: "form-cont"
    }, O = {
        key: 0
    }, b = {
        key: 1
    }, z = M({
        name: "SSOLogin",
        __name: "SSOLogin",
        setup(ue) {
            const i = N(), {
                currentRoute: F
            } = Q(), {
                getLoginState: J,
                setLoginState: A
            } = le(), q = T({
                name: "",
                logo: ""
            }), s = U({
                responseType: "",
                clientId: "",
                redirectUri: "",
                state: "",
                scopes: []
            }), B = R(() => l(J) === V.SSO), u = U({
                scopes: []
            }), d = T(!1), G = async () => {
                if (i.query.client_id === void 0) return;
                if (s.responseType = i.query.response_type, s.clientId = i.query.client_id, 
                s.redirectUri = i.query.redirect_uri, s.state = i.query.state, i.query.scope && (s.scopes = i.query.scope.split(" ")), 
                s.scopes.length > 0) {
                    const e = await x(!0, s.scopes, []);
                    if (e) return void (location.href = e);
                }
                const t = await (a = s.clientId, I.get({
                    url: "/system/oauth2/authorize?clientId=" + a
                }));
                var a;
                let o;
                if (q.value = t.client, s.scopes.length > 0) {
                    o = [];
                    for (const e of t.scopes) s.scopes.indexOf(e.key) >= 0 && o.push(e);
                } else {
                    o = t.scopes;
                    for (const e of o) s.scopes.push(e.key);
                }
                for (const e of o) e.value && u.scopes.push(e.key);
            }, L = async t => {
                let a, o;
                t ? (a = u.scopes, o = s.scopes.filter(e => a.indexOf(e) === -1)) : (a = [], 
                o = s.scopes), d.value = !0;
                try {
                    const e = await x(!1, a, o);
                    if (!e) return;
                    location.href = e;
                } finally {
                    d.value = !1;
                }
            }, x = (t, a, o) => ((e, m, h, f, y, g, r) => {
                const v = {};
                for (const w of g) v[w] = !0;
                for (const w of r) v[w] = !1;
                return I.post({
                    url: "/system/oauth2/authorize",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    },
                    params: {
                        response_type: e,
                        client_id: m,
                        redirect_uri: h,
                        state: f,
                        auto_approve: y,
                        scope: JSON.stringify(v)
                    }
                });
            })(s.responseType, s.clientId, s.redirectUri, s.state, t, a, o), H = t => {
                switch (t) {
                  case "user.read":
                    return "访问你的个人信息";

                  case "user.write":
                    return "修改你的个人信息";

                  default:
                    return t;
                }
            };
            return j(() => F.value, t => {
                t.name === "SSOLogin" && (A(V.SSO), G());
            }, {
                immediate: !0
            }), (t, a) => {
                const o = Z, e = $, m = ee, h = se, f = ae, y = te, g = oe;
                return D((p(), _("div", k, [ n(ne, {
                    style: {
                        width: "100%"
                    }
                }), n(e, {
                    class: "form",
                    style: {
                        float: "none"
                    },
                    value: "uname"
                }, {
                    default: c(() => [ n(o, {
                        label: l(q).name,
                        name: "uname"
                    }, null, 8, [ "label" ]) ]),
                    _: 1
                }), K("div", null, [ n(g, {
                    model: l(u),
                    class: "login-form"
                }, {
                    default: c(() => [ S(" 此第三方应用请求获得以下权限： "), n(f, {
                        prop: "scopes"
                    }, {
                        default: c(() => [ n(h, {
                            modelValue: l(u).scopes,
                            "onUpdate:modelValue": a[0] || (a[0] = r => l(u).scopes = r)
                        }, {
                            default: c(() => [ (p(!0), _(P, null, W(l(s).scopes, r => (p(), 
                            X(m, {
                                key: r,
                                label: r,
                                style: {
                                    display: "block",
                                    "margin-bottom": "-10px"
                                }
                            }, {
                                default: c(() => [ S(Y(H(r)), 1) ]),
                                _: 2
                            }, 1032, [ "label" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), n(f, {
                        class: "w-1/1"
                    }, {
                        default: c(() => [ n(y, {
                            loading: l(d),
                            class: "w-6/10",
                            type: "primary",
                            onClick: a[1] || (a[1] = C(r => L(!0), [ "prevent" ]))
                        }, {
                            default: c(() => [ l(d) ? (p(), _("span", b, "授 权 中...")) : (p(), 
                            _("span", O, "同意授权")) ]),
                            _: 1
                        }, 8, [ "loading" ]), n(y, {
                            class: "w-3/10",
                            onClick: a[2] || (a[2] = C(r => L(!1), [ "prevent" ]))
                        }, {
                            default: c(() => [ S("拒绝") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model" ]) ]) ], 512)), [ [ E, l(B) ] ]);
            };
        }
    });
});

export {
    ie as __tla,
    z as default
};