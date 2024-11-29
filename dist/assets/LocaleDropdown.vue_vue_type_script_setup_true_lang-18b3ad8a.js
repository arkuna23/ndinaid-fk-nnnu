import {
    dL as e,
    dM as D,
    cJ as m,
    dN as O,
    dO as P,
    d as j,
    az as k,
    bt as x,
    e as i,
    o as _,
    C as p,
    l as o,
    z as L,
    a as d,
    aj as M,
    k as f,
    c as v,
    y as A,
    v as I,
    B as N,
    F as R,
    _ as T,
    __tla as V
} from "./index-6c08ea4c.js";

import {
    E as $,
    a as B,
    b as F,
    __tla as J
} from "./index-5adb716b.js";

let h, q = Promise.all([ (() => {
    try {
        return V;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})() ]).then(async () => {
    let u;
    u = () => ({
        changeLocale: async l => {
            const t = e.global, c = await D(Object.assign({
                "../../locales/en.ts": () => m(() => import("./en-e1d5fd08.js"), [], import.meta.url),
                "../../locales/zh-CN.ts": () => m(() => import("./zh-CN-312ecc72.js"), [], import.meta.url)
            }), `../../locales/${l}.ts`);
            t.setLocaleMessage(l, c.default), (a => {
                const r = O();
                e.mode === "legacy" ? e.global.locale = a : e.global.locale.value = a, 
                r.setCurrentLocale({
                    lang: a
                }), P(a);
            })(l);
        }
    }), h = j({
        name: "LocaleDropdown",
        __name: "LocaleDropdown",
        props: {
            color: k.string.def("")
        },
        setup(l) {
            const {
                getPrefixCls: t
            } = M(), c = t("locale-dropdown"), a = x(), r = i(() => a.getLocaleMap), w = i(() => a.getCurrentLocale), y = s => {
                if (s === d(w).lang) return;
                window.location.reload(), a.setCurrentLocale({
                    lang: s
                });
                const {
                    changeLocale: g
                } = u();
                g(s);
            };
            return (s, g) => {
                const C = T, b = B, E = F, z = $;
                return _(), p(z, {
                    class: L(d(c)),
                    trigger: "click",
                    onCommand: y
                }, {
                    dropdown: o(() => [ f(E, null, {
                        default: o(() => [ (_(!0), v(R, null, A(d(r), n => (_(), 
                        p(b, {
                            key: n.lang,
                            command: n.lang
                        }, {
                            default: o(() => [ I(N(n.name), 1) ]),
                            _: 2
                        }, 1032, [ "command" ]))), 128)) ]),
                        _: 1
                    }) ]),
                    default: o(() => [ f(C, {
                        class: L([ s.$attrs.class, "cursor-pointer !p-0" ]),
                        color: l.color,
                        size: 18,
                        icon: "ion:language-sharp"
                    }, null, 8, [ "class", "color" ]) ]),
                    _: 1
                }, 8, [ "class" ]);
            };
        }
    });
});

export {
    h as _,
    q as __tla
};