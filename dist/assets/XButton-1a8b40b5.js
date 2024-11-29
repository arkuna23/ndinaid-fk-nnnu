import {
    d as f,
    az as n,
    e as u,
    o as l,
    C as a,
    l as _,
    aJ as m,
    a as I,
    bH as k,
    J as b,
    D as c,
    v as y,
    B as g,
    _ as C,
    __tla as x
} from "./index-6c08ea4c.js";

import {
    _ as B
} from "./_plugin-vue_export-helper-1b428a4d.js";

let r, h = Promise.all([ (() => {
    try {
        return x;
    } catch {}
})() ]).then(async () => {
    r = B(f({
        name: "XButton",
        __name: "XButton",
        props: {
            modelValue: n.bool.def(!1),
            loading: n.bool.def(!1),
            preIcon: n.string.def(""),
            postIcon: n.string.def(""),
            title: n.string.def(""),
            type: n.oneOf([ "", "primary", "success", "warning", "danger", "info" ]).def(""),
            link: n.bool.def(!1),
            circle: n.bool.def(!1),
            round: n.bool.def(!1),
            plain: n.bool.def(!1),
            onClick: {
                type: Function,
                default: null
            }
        },
        setup(e) {
            const i = e, d = u(() => {
                const s = [ "title", "preIcon", "postIcon", "onClick" ], t = {
                    ...k(),
                    ...i
                };
                for (const o in t) s.indexOf(o) !== -1 && delete t[o];
                return t;
            });
            return (s, t) => {
                const o = C, p = b;
                return l(), a(p, m(I(d), {
                    onClick: e.onClick
                }), {
                    default: _(() => [ e.preIcon ? (l(), a(o, {
                        key: 0,
                        icon: e.preIcon,
                        class: "mr-1px"
                    }, null, 8, [ "icon" ])) : c("", !0), y(" " + g(e.title ? e.title : "") + " ", 1), e.postIcon ? (l(), 
                    a(o, {
                        key: 1,
                        icon: e.postIcon,
                        class: "mr-1px"
                    }, null, 8, [ "icon" ])) : c("", !0) ]),
                    _: 1
                }, 16, [ "onClick" ]);
            };
        }
    }), [ [ "__scopeId", "data-v-9ff26ce2" ] ]);
});

export {
    r as _,
    h as __tla
};