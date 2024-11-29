import {
    d as h,
    aa as y,
    p as b,
    r as _,
    f as g,
    o as n,
    C as o,
    l as p,
    A as v,
    a as l,
    k as t,
    ad as w,
    ae as x,
    a9 as I,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    _ as k,
    __tla as A
} from "./ContentWrap-4c50e4c8.js";

import {
    d as C,
    __tla as D
} from "./formatTime-de6f1520.js";

import {
    b as G,
    __tla as L
} from "./index-846c8218.js";

let c, P = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    c = h({
        __name: "Demo03GradeList",
        props: {
            studentId: {}
        },
        setup(i) {
            y(), b();
            const u = i, r = _(!1), s = _([]);
            return g(() => {
                (async () => {
                    r.value = !0;
                    try {
                        const e = await G(u.studentId);
                        if (!e) return;
                        s.value.push(e);
                    } finally {
                        r.value = !1;
                    }
                })();
            }), (e, T) => {
                const a = w, m = x, d = k, f = I;
                return n(), o(d, null, {
                    default: p(() => [ v((n(), o(m, {
                        data: l(s),
                        stripe: !0,
                        "show-overflow-tooltip": !0
                    }, {
                        default: p(() => [ t(a, {
                            label: "编号",
                            align: "center",
                            prop: "id"
                        }), t(a, {
                            label: "名字",
                            align: "center",
                            prop: "name"
                        }), t(a, {
                            label: "班主任",
                            align: "center",
                            prop: "teacher"
                        }), t(a, {
                            label: "创建时间",
                            align: "center",
                            prop: "createTime",
                            formatter: l(C),
                            width: "180px"
                        }, null, 8, [ "formatter" ]) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ f, l(r) ] ]) ]),
                    _: 1
                });
            };
        }
    });
});

export {
    c as _,
    P as __tla
};