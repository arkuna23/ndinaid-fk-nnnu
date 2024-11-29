import {
    d as m,
    r as u,
    o as v,
    c as p,
    k as l,
    l as t,
    t as h,
    v as b,
    a as d,
    m as g,
    J as x,
    aU as y,
    __tla as V
} from "./index-6c08ea4c.js";

import k, {
    __tla as w
} from "./sqlDetail-6033fcff.js";

let _, I = Promise.all([ (() => {
    try {
        return V;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})() ]).then(async () => {
    let s;
    s = {
        class: "dialog-footer align-center"
    }, _ = m({
        __name: "viewDatabase",
        setup(U, {
            expose: i
        }) {
            const a = u(!1), o = u({});
            return i({
                handleOpen: r => {
                    a.value = !0, o.value = r;
                }
            }), (r, e) => {
                const c = x, f = y;
                return v(), p("div", null, [ l(f, {
                    modelValue: d(a),
                    "onUpdate:modelValue": e[1] || (e[1] = n => g(a) ? a.value = n : null),
                    width: "900px",
                    title: "查看数据库信息"
                }, {
                    footer: t(() => [ h("div", s, [ l(c, {
                        size: "default",
                        onClick: e[0] || (e[0] = n => a.value = !1)
                    }, {
                        default: t(() => [ b("关闭 ") ]),
                        _: 1
                    }) ]) ]),
                    default: t(() => [ l(k, {
                        dbInfo: d(o),
                        "no-border": !0,
                        defaultHeight: 500
                    }, null, 8, [ "dbInfo" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    });
});

export {
    _,
    I as __tla
};