import {
    _ as c,
    __tla as u
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as m,
    __tla as i
} from "./IFrame.vue_vue_type_script_setup_true_lang-425a5eb8.js";

import {
    _ as p,
    __tla as d
} from "./index-51b199d8.js";

import {
    b as f,
    __tla as h
} from "./index-eab2ad8c.js";

import {
    d as y,
    r as _,
    f as g,
    o as w,
    c as v,
    k as a,
    l as x,
    a as b,
    F as k,
    __tla as F
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let l, I = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})(), (() => {
    try {
        return i;
    } catch {}
})(), (() => {
    try {
        return d;
    } catch {}
})(), (() => {
    try {
        return h;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})() ]).then(async () => {
    l = y({
        name: "InfraSwagger",
        __name: "index",
        setup(P) {
            const s = _(!0), r = _("https://neustudy.neumooc.com/doc.html");
            return g(async () => {
                try {
                    const t = await f("url.swagger");
                    t && t.length > 0 && (r.value = t);
                } finally {
                    s.value = !1;
                }
            }), (t, S) => {
                const e = p, n = m, o = c;
                return w(), v(k, null, [ a(e, {
                    title: "接口文档",
                    url: "https://doc.iocoder.cn/api-doc/"
                }), a(o, null, {
                    default: x(() => [ a(n, {
                        src: b(r)
                    }, null, 8, [ "src" ]) ]),
                    _: 1
                }) ], 64);
            };
        }
    });
});

export {
    I as __tla,
    l as default
};