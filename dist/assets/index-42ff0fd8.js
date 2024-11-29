import {
    u as q,
    T as z,
    e as r,
    ag as j,
    a as e,
    o as m,
    c as u,
    t as a,
    k as p,
    v as l,
    D as C,
    _ as D,
    R as I,
    S as L,
    __tla as M
} from "./index-6c08ea4c.js";

import P, {
    __tla as R
} from "./tagAssembly-36fa6b5e.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as T
} from "./index-c4ca0ced.js";

import {
    __tla as w
} from "./index-993301ca.js";

let d, A = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})() ]).then(async () => {
    let s, n, _, c, o, i;
    s = t => (I("data-v-a96226ed"), t = t(), L(), t), n = {
        class: "question_container"
    }, _ = {
        key: 0,
        class: "container_title"
    }, c = s(() => a("span", {
        class: "ml2"
    }, "返回", -1)), o = s(() => a("span", {
        class: "ml2 mr2"
    }, "|", -1)), i = {
        class: "container_content"
    }, d = S({
        __name: "index",
        setup(t) {
            const y = q(), v = z(), b = r(() => v.params.subassembly), f = j(), h = r(() => f.getLayout), k = r(() => e(h) === "cutMenu"), g = () => {
                y.back();
            };
            return (B, E) => {
                const x = D;
                return m(), u("div", null, [ a("div", n, [ e(k) ? (m(), u("div", _, [ a("span", {
                    class: "router_sign ml20",
                    onClick: g
                }, [ p(x, {
                    size: 15,
                    icon: "svg-icon:back-icon"
                }), l(), c, l(), o ]), l("标签管理 ") ])) : C("", !0), a("div", i, [ p(P, {
                    subassembly: e(b)
                }, null, 8, [ "subassembly" ]) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a96226ed" ] ]);
});

export {
    A as __tla,
    d as default
};