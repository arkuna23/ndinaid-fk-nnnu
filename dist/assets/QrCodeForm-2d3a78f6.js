import {
    d as h,
    aa as x,
    e as y,
    a as t,
    A as k,
    G as v,
    o as C,
    C as w,
    l as s,
    k as a,
    v as L,
    B as Q,
    t as b,
    av as B,
    aC as F,
    aw as j,
    __tla as E
} from "./index-6c08ea4c.js";

import {
    _ as q,
    __tla as A
} from "./XButton-1a8b40b5.js";

import {
    _ as D,
    __tla as G
} from "./Qrcode.vue_vue_type_style_index_0_scoped_8fc6cf2d_lang-f5505512.js";

import {
    _ as I
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    _ as O
} from "./logo-efdb0947.js";

import {
    u as P,
    L as R,
    _ as S,
    __tla as z
} from "./LoginFormTitle.vue_vue_type_script_setup_true_lang-157278a6.js";

import {
    E as H,
    __tla as J
} from "./index-ee838148.js";

import "./browser-86b6ed1b.js";

let n, K = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})() ]).then(async () => {
    let l, e;
    l = I(D, [ [ "__scopeId", "data-v-8fc6cf2d" ] ]), e = {
        class: "mt-15px w-[100%]"
    }, n = h({
        name: "QrCodeForm",
        __name: "QrCodeForm",
        setup(M) {
            const {
                t: _
            } = x(), {
                handleBackLogin: i,
                getLoginState: d
            } = P(), p = y(() => t(d) === R.QR_CODE);
            return (N, o) => {
                const r = B, c = l, m = H, f = F, g = q, u = j;
                return k((C(), w(u, {
                    style: {
                        "margin-right": "-10px",
                        "margin-left": "-10px"
                    }
                }, {
                    default: s(() => [ a(r, {
                        span: 24,
                        style: {
                            "padding-right": "10px",
                            "padding-left": "10px"
                        }
                    }, {
                        default: s(() => [ a(S, {
                            style: {
                                width: "100%"
                            }
                        }) ]),
                        _: 1
                    }), a(r, {
                        span: 24,
                        style: {
                            "padding-right": "10px",
                            "padding-left": "10px"
                        }
                    }, {
                        default: s(() => [ a(m, {
                            class: "mb-10px text-center",
                            shadow: "hover"
                        }, {
                            default: s(() => [ a(c, {
                                logo: t(O)
                            }, null, 8, [ "logo" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), a(f, {
                        class: "enter-x"
                    }, {
                        default: s(() => [ L(Q(t(_)("login.qrcode")), 1) ]),
                        _: 1
                    }), a(r, {
                        span: 24,
                        style: {
                            "padding-right": "10px",
                            "padding-left": "10px"
                        }
                    }, {
                        default: s(() => [ b("div", e, [ a(g, {
                            title: t(_)("login.backLogin"),
                            class: "w-[100%]",
                            onClick: o[0] || (o[0] = T => t(i)())
                        }, null, 8, [ "title" ]) ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 512)), [ [ v, t(p) ] ]);
            };
        }
    });
});

export {
    K as __tla,
    n as default
};