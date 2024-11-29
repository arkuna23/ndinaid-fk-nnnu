import {
    p as f,
    h as y,
    u as d,
    T as k,
    r as s,
    o as _,
    c as m,
    a,
    C as v,
    l as D,
    k as C,
    D as n,
    m as b,
    __tla as g
} from "./index-6c08ea4c.js";

import {
    E as V,
    __tla as j
} from "./el-drawer-fca4d971.js";

import {
    C as x,
    __tla as P
} from "./check-result-070ada17.js";

import {
    _ as S
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as z
} from "./checkOverview-9cc05c66.js";

import "./check-C-7cf0dd88.js";

import {
    __tla as E
} from "./check-a26308bc.js";

import {
    __tla as I
} from "./checkProblems-ac1fe994.js";

import {
    __tla as T
} from "./index-c4ca0ced.js";

import {
    __tla as U
} from "./index-993301ca.js";

import {
    __tla as q
} from "./el-collapse-item-c8b76a0a.js";

import {
    __tla as w
} from "./dialogProblem-fa4d1fd2.js";

import {
    __tla as A
} from "./checkCodes-f0c443b2.js";

import {
    __tla as B
} from "./el-breadcrumb-item-45b75827.js";

import {
    __tla as F
} from "./diff-code-51383ecb.js";

import "./html2canvas.esm-ad032b91.js";

import {
    __tla as G
} from "./formatTime-de6f1520.js";

let i, H = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    let e, l;
    e = {
        class: "checkdetail"
    }, l = {
        key: 0
    }, i = S({
        __name: "check-detail-Dialog",
        props: {},
        setup(J, {
            expose: u
        }) {
            f(), y(), d(), k();
            const t = s(!1), o = s({});
            return u({
                open: async r => {
                    t.value = !0, o.value = r;
                }
            }), (r, c) => {
                const p = V;
                return _(), m("div", e, [ a(t) ? (_(), v(p, {
                    key: 0,
                    modelValue: a(t),
                    "onUpdate:modelValue": c[0] || (c[0] = h => b(t) ? t.value = h : null),
                    "modal-class": "resourceSetting",
                    title: "代码检查详情",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    onClose: r.clearData,
                    direction: "btt",
                    size: "90%"
                }, {
                    default: D(() => [ a(t) ? (_(), m("div", l, [ C(x, {
                        from: "teachingProjectScore",
                        checkData: a(o)
                    }, null, 8, [ "checkData" ]) ])) : n("", !0) ]),
                    _: 1
                }, 8, [ "modelValue", "onClose" ])) : n("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b056f6de" ] ]);
});

export {
    H as __tla,
    i as default
};