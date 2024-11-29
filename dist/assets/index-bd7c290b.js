import {
    _ as i,
    __tla as m
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as d,
    __tla as y
} from "./IFrame.vue_vue_type_script_setup_true_lang-425a5eb8.js";

import {
    _ as f,
    __tla as p
} from "./index-51b199d8.js";

import {
    b as h,
    __tla as x
} from "./index-eab2ad8c.js";

import {
    d as b,
    r as _,
    f as k,
    o as e,
    c as v,
    k as a,
    l as D,
    a as n,
    C as g,
    D as w,
    F as B,
    __tla as C
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let c, F = Promise.all([ (() => {
    try {
        return m;
    } catch {}
})(), (() => {
    try {
        return y;
    } catch {}
})(), (() => {
    try {
        return p;
    } catch {}
})(), (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})() ]).then(async () => {
    c = b({
        name: "InfraDruid",
        __name: "index",
        setup(I) {
            const r = _(!0), s = _("https://neustudy.neumooc.com/druid/index.html");
            return k(async () => {
                try {
                    const t = await h("url.druid");
                    t && t.length > 0 && (s.value = t);
                } finally {
                    r.value = !1;
                }
            }), (t, M) => {
                const l = f, o = d, u = i;
                return e(), v(B, null, [ a(l, {
                    title: "数据库 MyBatis",
                    url: "https://doc.iocoder.cn/mybatis/"
                }), a(l, {
                    title: "多数据源（读写分离）",
                    url: "https://doc.iocoder.cn/dynamic-datasource/"
                }), a(u, null, {
                    default: D(() => [ n(r) ? w("", !0) : (e(), g(o, {
                        key: 0,
                        src: n(s)
                    }, null, 8, [ "src" ])) ]),
                    _: 1
                }) ], 64);
            };
        }
    });
});

export {
    F as __tla,
    c as default
};