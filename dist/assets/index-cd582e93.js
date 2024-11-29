import {
    o as e,
    C as r,
    l as _,
    c as f,
    F as m,
    y,
    a,
    v as d,
    B as S,
    J as b,
    fy as h,
    __tla as v
} from "./index-6c08ea4c.js";

import {
    b as T,
    D as g,
    __tla as k
} from "./dict-c5825220.js";

import {
    _ as C
} from "./_plugin-vue_export-helper-1b428a4d.js";

let o, w = Promise.all([ (() => {
    try {
        return v;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})() ]).then(async () => {
    o = C({
        __name: "index",
        props: {
            status: {
                type: [ String, Number ],
                default: ""
            },
            row: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "changeStatus" ],
        setup(u, {
            emit: n
        }) {
            const c = n, s = u;
            return (x, E) => {
                const i = b, p = h;
                return e(), r(p, {
                    size: "small"
                }, {
                    default: _(() => [ (e(!0), f(m, null, y(a(T)(a(g).SYSTEM_USER_STATUS), t => (e(), 
                    r(i, {
                        key: t.value,
                        type: s.status + "" == t.value + "" ? t.colorType : "info",
                        onClick: U => function(l) {
                            l.value + "" != a(s.status) + "" && c("changeStatus", a(s.row), l);
                        }(t)
                    }, {
                        default: _(() => [ d(S(t.label), 1) ]),
                        _: 2
                    }, 1032, [ "type", "onClick" ]))), 128)) ]),
                    _: 1
                });
            };
        }
    }, [ [ "__scopeId", "data-v-8bd0759f" ] ]);
});

export {
    o as _,
    w as __tla
};