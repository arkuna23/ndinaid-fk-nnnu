import {
    d as m,
    r as l,
    f as y,
    o as _,
    c as p,
    k as n,
    l as f,
    a as r,
    A as h,
    C as k,
    D as d,
    F as g,
    a9 as v,
    __tla as w
} from "./index-6c08ea4c.js";

import {
    _ as x,
    __tla as b
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as j,
    __tla as A
} from "./IFrame.vue_vue_type_script_setup_true_lang-425a5eb8.js";

import {
    _ as C,
    __tla as D
} from "./index-51b199d8.js";

import {
    b as F,
    __tla as I
} from "./index-eab2ad8c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let e, P = Promise.all([ (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})() ]).then(async () => {
    e = m({
        name: "InfraSkyWalking",
        __name: "index",
        setup(S) {
            const t = l(!0), s = l("http://skywalking.shop.iocoder.cn");
            return y(async () => {
                try {
                    const a = await F("url.skywalking");
                    a && a.length > 0 && (s.value = a);
                } finally {
                    t.value = !1;
                }
            }), (a, W) => {
                const o = C, c = j, i = x, u = v;
                return _(), p(g, null, [ n(o, {
                    title: "服务监控",
                    url: "https://doc.iocoder.cn/server-monitor/"
                }), n(i, null, {
                    default: f(() => [ r(t) ? d("", !0) : h((_(), k(c, {
                        key: 0,
                        src: r(s)
                    }, null, 8, [ "src" ])), [ [ u, r(t) ] ]) ]),
                    _: 1
                }) ], 64);
            };
        }
    });
});

export {
    P as __tla,
    e as default
};