import {
    d as f,
    aa as y,
    p as h,
    r as s,
    f as b,
    o as _,
    C as o,
    l as n,
    A as g,
    a as e,
    k as t,
    ad as v,
    ae as w,
    a9 as x,
    __tla as C
} from "./index-6c08ea4c.js";

import {
    _ as I,
    __tla as j
} from "./ContentWrap-4c50e4c8.js";

import {
    d as k,
    __tla as A
} from "./formatTime-de6f1520.js";

import {
    a as D,
    __tla as L
} from "./index-846c8218.js";

let p, P = Promise.all([ (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    p = f({
        __name: "Demo03CourseList",
        props: {
            studentId: {}
        },
        setup(c) {
            y(), h();
            const i = c, r = s(!1), l = s([]);
            return b(() => {
                (async () => {
                    r.value = !0;
                    try {
                        l.value = await D(i.studentId);
                    } finally {
                        r.value = !1;
                    }
                })();
            }), (T, q) => {
                const a = v, u = w, m = I, d = x;
                return _(), o(m, null, {
                    default: n(() => [ g((_(), o(u, {
                        data: e(l),
                        stripe: !0,
                        "show-overflow-tooltip": !0
                    }, {
                        default: n(() => [ t(a, {
                            label: "编号",
                            align: "center",
                            prop: "id"
                        }), t(a, {
                            label: "名字",
                            align: "center",
                            prop: "name"
                        }), t(a, {
                            label: "分数",
                            align: "center",
                            prop: "score"
                        }), t(a, {
                            label: "创建时间",
                            align: "center",
                            prop: "createTime",
                            formatter: e(k),
                            width: "180px"
                        }, null, 8, [ "formatter" ]) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ d, e(r) ] ]) ]),
                    _: 1
                });
            };
        }
    });
});

export {
    p as _,
    P as __tla
};