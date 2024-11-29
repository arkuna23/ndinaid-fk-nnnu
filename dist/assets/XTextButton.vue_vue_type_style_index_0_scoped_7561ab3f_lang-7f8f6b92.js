import {
    d as f,
    az as n,
    e as u,
    o as l,
    C as a,
    l as m,
    aJ as _,
    a as k,
    bH as y,
    J as I,
    D as r,
    v as b,
    B as g,
    _ as x,
    __tla as C
} from "./index-6c08ea4c.js";

let c, B = Promise.all([ (() => {
    try {
        return C;
    } catch {}
})() ]).then(async () => {
    c = f({
        name: "XTextButton",
        __name: "XTextButton",
        props: {
            modelValue: n.bool.def(!1),
            loading: n.bool.def(!1),
            preIcon: n.string.def(""),
            postIcon: n.string.def(""),
            title: n.string.def(""),
            type: n.oneOf([ "", "primary", "success", "warning", "danger", "info" ]).def("primary"),
            circle: n.bool.def(!1),
            round: n.bool.def(!1),
            plain: n.bool.def(!1),
            onClick: {
                type: Function,
                default: null
            }
        },
        setup(e) {
            const i = e, p = u(() => {
                const s = [ "title", "preIcon", "postIcon", "onClick" ], o = {
                    ...y(),
                    ...i
                };
                for (const t in o) s.indexOf(t) !== -1 && delete o[t];
                return o;
            });
            return (s, o) => {
                const t = x, d = I;
                return l(), a(d, _({
                    link: ""
                }, k(p), {
                    onClick: e.onClick
                }), {
                    default: m(() => [ e.preIcon ? (l(), a(t, {
                        key: 0,
                        icon: e.preIcon,
                        class: "mr-1px"
                    }, null, 8, [ "icon" ])) : r("", !0), b(" " + g(e.title ? e.title : "") + " ", 1), e.postIcon ? (l(), 
                    a(t, {
                        key: 1,
                        icon: e.postIcon,
                        class: "mr-1px"
                    }, null, 8, [ "icon" ])) : r("", !0) ]),
                    _: 1
                }, 16, [ "onClick" ]);
            };
        }
    });
});

export {
    c as _,
    B as __tla
};