import {
    a7 as d,
    d as x,
    p as j,
    r as v,
    T as B,
    f as P,
    w as F,
    o as u,
    C as L,
    l as m,
    k as i,
    t as w,
    B as T,
    c as U,
    F as g,
    v as k,
    a as $,
    ad as z,
    ae as A,
    __tla as D
} from "./index-6c08ea4c.js";

import {
    _ as E,
    __tla as G
} from "./XTextButton.vue_vue_type_style_index_0_scoped_7561ab3f_lang-7f8f6b92.js";

import {
    _ as H
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    S as C
} from "./constants-528bd83f.js";

import {
    g as J,
    __tla as K
} from "./profile-b10d3835.js";

let b, M = Promise.all([ (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let y, _, f;
    y = H(E, [ [ "__scopeId", "data-v-7561ab3f" ] ]), _ = [ "src" ], f = {
        class: "mr-5"
    }, b = x({
        name: "UserSocial",
        __name: "UserSocial",
        props: {
            activeName: {}
        },
        emits: [ "update:activeName" ],
        setup(O, {
            emit: I
        }) {
            const h = j(), c = v([]), r = v(), n = B(), R = I, S = () => {
                const e = (t = "type", new URL(decodeURIComponent(location.href)).searchParams.get(t) ?? "");
                var t;
                const a = n.query.code, s = n.query.state;
                a && ((l, o, p) => d.post({
                    url: "/system/social-user/bind",
                    data: {
                        type: l,
                        code: o,
                        state: p
                    }
                }))(e, a, s).then(() => {
                    h.success("绑定成功"), R("update:activeName", "userSocial");
                });
            }, q = e => {
                const t = location.origin + "/user/profile?" + encodeURIComponent(`type=${e.type}`);
                ((a, s) => d.get({
                    url: "/system/auth/social-auth-redirect?type=" + a + "&redirectUri=" + s
                }))(e.type, encodeURIComponent(t)).then(a => {
                    window.location.href = a;
                });
            }, N = async e => {
                var t, a;
                await (t = e.type, a = e.openid, d.delete({
                    url: "/system/social-user/unbind",
                    data: {
                        type: t,
                        openid: a
                    }
                })) && (e.openid = void 0), h.success("解绑成功");
            };
            return P(async () => {
                await (async () => {
                    var t;
                    c.value = [];
                    const e = await J();
                    r.value = e;
                    for (const a in C) {
                        const s = {
                            ...C[a]
                        };
                        if (c.value.push(s), (t = r.value) == null ? void 0 : t.socialUsers) {
                            for (const l in r.value.socialUsers) if (s.type === r.value.socialUsers[l].type) {
                                s.openid = r.value.socialUsers[l].openid;
                                break;
                            }
                        }
                    }
                })();
            }), F(() => n, () => {
                S();
            }, {
                immediate: !0
            }), (e, t) => {
                const a = z, s = y, l = A;
                return u(), L(l, {
                    data: $(c),
                    "show-header": !1
                }, {
                    default: m(() => [ i(a, {
                        fixed: "left",
                        title: "序号",
                        type: "seq",
                        width: "60"
                    }), i(a, {
                        align: "left",
                        label: "社交平台",
                        width: "120"
                    }, {
                        default: m(({
                            row: o
                        }) => [ w("img", {
                            src: o.img,
                            alt: "",
                            class: "h-5 align-middle"
                        }, null, 8, _), w("p", f, T(o.title), 1) ]),
                        _: 1
                    }), i(a, {
                        align: "center",
                        label: "操作"
                    }, {
                        default: m(({
                            row: o
                        }) => [ o.openid ? (u(), U(g, {
                            key: 0
                        }, [ k(" 已绑定 "), i(s, {
                            class: "mr-5",
                            title: "(解绑)",
                            type: "primary",
                            onClick: p => N(o)
                        }, null, 8, [ "onClick" ]) ], 64)) : (u(), U(g, {
                            key: 1
                        }, [ k(" 未绑定 "), i(s, {
                            class: "mr-5",
                            title: "(绑定)",
                            type: "primary",
                            onClick: p => q(o)
                        }, null, 8, [ "onClick" ]) ], 64)) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "data" ]);
            };
        }
    });
});

export {
    M as __tla,
    b as default
};