import {
    _ as e,
    __tla as _
} from "./Error.vue_vue_type_script_setup_true_lang-9a61fa9b.js";

import {
    d as n,
    u as o,
    o as l,
    C as u,
    a as c,
    __tla as m
} from "./index-6c08ea4c.js";

let t, p = Promise.all([ (() => {
    try {
        return _;
    } catch {}
})(), (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    t = n({
        name: "Error403",
        __name: "403",
        setup(h) {
            const {
                push: a
            } = o();
            return (i, r) => {
                const s = e;
                return l(), u(s, {
                    type: "403",
                    onErrorClick: r[0] || (r[0] = y => c(a)("/"))
                });
            };
        }
    });
});

export {
    p as __tla,
    t as default
};