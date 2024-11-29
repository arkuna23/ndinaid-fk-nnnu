import {
    _ as L,
    __tla as x
} from "./index-33f7224d.js";

import {
    b8 as j,
    e as v,
    r as o,
    a0 as w,
    U as F,
    o as u,
    c as f,
    t,
    v as _,
    B as g,
    F as h,
    y as O,
    C as q,
    l as z,
    k as D,
    a as k,
    m as E,
    L as G,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    _ as J
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as K
} from "./el-infinite-scroll-9cd61b58.js";

import {
    __tla as M
} from "./throttle-1adeb119.js";

import {
    __tla as Q
} from "./index-13c88727.js";

import {
    __tla as R
} from "./dict-c5825220.js";

import "./tree-05ea8e09.js";

import {
    __tla as W
} from "./index-7c75bd27.js";

import {
    __tla as X
} from "./index-d1db0401.js";

import {
    __tla as Y
} from "./DeptTag-1be092ce.js";

let P, Z = Promise.all([ (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})() ]).then(async () => {
    let i, c, m, d;
    i = {
        class: "tagSelectAPoolContainer"
    }, c = {
        class: "tagSelectTitle"
    }, m = {
        class: "peopleNum"
    }, d = {
        class: "tagPools"
    }, P = J({
        __name: "tagSelectAPool",
        props: {
            modelValue: {
                type: Array,
                default: () => []
            },
            type: {
                type: String,
                default: () => ""
            },
            title: {
                type: String,
                default: () => ""
            }
        },
        emits: [ "delBatchTag", "delSingleTag", "changeTagList", "update:modelValue" ],
        setup(S, {
            emit: I
        }) {
            j();
            const p = I, V = v(() => a.value.length > 0 ? a.value.map(l => l.userId).join(",") : []), y = S, r = o(!1);
            o([]), o(null);
            const a = v({
                get: () => y.modelValue,
                set: l => {
                    p("update:modelValue", l);
                }
            }), {
                type: $,
                title: C
            } = w(y);
            F({
                classOptions: [],
                showPersonnelList: []
            }), o(""), o("");
            const b = l => {
                a.value = [];
            }, T = async () => {
                r.value = !0;
            }, U = (l, n) => {
                a.value = a.value.concat(n.map(s => ({
                    ...s,
                    userId: s.id,
                    userName: s.nickname,
                    nickName: s.nickname
                }))), r.value = !1;
            };
            return (l, n) => {
                const s = G, N = L;
                return u(), f(h, null, [ t("div", i, [ t("div", c, [ t("div", {
                    class: "operationBtn"
                }, [ t("span", {
                    class: "selectPerson",
                    onClick: T
                }, "选择人员"), t("span", {
                    class: "empty",
                    onClick: b
                }, "清空") ]), t("div", m, [ _(" 已选"), t("span", null, g(a.value.length), 1), _("人 ") ]) ]), t("div", d, [ (u(!0), 
                f(h, null, O(a.value, e => (u(), q(s, {
                    type: "info",
                    key: e.id || e.userId,
                    class: "mx-1",
                    closable: "",
                    onClose: aa => (A => {
                        a.value = a.value.filter(B => B.id !== A.id), p("delSingleTag");
                    })(e),
                    "disable-transitions": !1
                }, {
                    default: z(() => [ _(g(e.userName || e.nickname), 1) ]),
                    _: 2
                }, 1032, [ "onClose" ]))), 128)) ]) ]), D(N, {
                    modelValue: k(r),
                    "onUpdate:modelValue": n[0] || (n[0] = e => E(r) ? r.value = e : null),
                    onSubmitIds: U,
                    defaultUserParams: {
                        identities: "3,4",
                        notInUserIds: V.value
                    },
                    title: k(C)
                }, null, 8, [ "modelValue", "defaultUserParams", "title" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-b3063436" ] ]);
});

export {
    Z as __tla,
    P as default
};