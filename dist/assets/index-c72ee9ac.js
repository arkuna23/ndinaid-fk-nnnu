import {
    d as i,
    r as l,
    f as p,
    o as _,
    c as y,
    k as n,
    l as d,
    a as r,
    A as f,
    C as h,
    D as v,
    F as g,
    a9 as x,
    __tla as b
} from "./index-6c08ea4c.js";

import {
    _ as j,
    __tla as k
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as A,
    __tla as w
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
        return b;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return w;
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
    e = i({
        name: "InfraAdminServer",
        __name: "index",
        setup(S) {
            const t = l(!0), s = l("https://neustudy.neumooc.com/admin/applications");
            return p(async () => {
                try {
                    const a = await F("url.spring-boot-admin");
                    a && a.length > 0 && (s.value = a);
                } finally {
                    t.value = !1;
                }
            }), (a, q) => {
                const o = C, c = A, m = j, u = x;
                return _(), y(g, null, [ n(o, {
                    title: "服务监控",
                    url: "https://doc.iocoder.cn/server-monitor/"
                }), n(m, null, {
                    default: d(() => [ r(t) ? v("", !0) : f((_(), h(c, {
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