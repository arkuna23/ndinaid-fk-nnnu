import {
    aO as V,
    a,
    h as T,
    a4 as U,
    e as b,
    r as g,
    f as q,
    n as z,
    o as i,
    c as I,
    t as l,
    B as A,
    k as _,
    l as B,
    F as O,
    y as P,
    C as W,
    m as j,
    ab as D,
    ac as E,
    R as F,
    S as H,
    __tla as N
} from "./index-6c08ea4c.js";

import {
    g as G,
    __tla as J
} from "./index-cfc63ccf.js";

import K, {
    __tla as L
} from "./myTeachingCourses-795056ec.js";

import Q, {
    __tla as X
} from "./myProjectList-c5ff907d.js";

import Y, {
    __tla as Z
} from "./myGradingTasks-f1aa7ffe.js";

import {
    __tla as $
} from "./dict-c5825220.js";

import "./index-0d885c8d.js";

import {
    _ as tt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import at, {
    __tla as rt
} from "./resourceManagement-e11f0bfa.js";

import et, {
    __tla as lt
} from "./examinationWork-bf9f763e.js";

import {
    __tla as _t
} from "./index-c834085f.js";

import {
    __tla as st
} from "./el-image-0d184777.js";

import {
    __tla as ot
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as mt
} from "./throttle-1adeb119.js";

import {
    __tla as ct
} from "./file-e038b35d.js";

import "./noData-stu-project-a9c039eb.js";

import {
    __tla as nt
} from "./formatTime-de6f1520.js";

import {
    __tla as ut
} from "./index-47b8bbcb.js";

import "./install-67fb146c.js";

import {
    __tla as it
} from "./managementSideCorrelation-1acb9a2c.js";

let w, pt = Promise.all([ (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return rt;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return st;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return it;
    } catch {}
})() ]).then(async () => {
    let n, p, d, h, f, y, v, x;
    n = o => (F("data-v-feed37fb"), o = o(), H(), o), p = {
        class: "teacher-index"
    }, d = n(() => l("div", {
        class: "bg"
    }, null, -1)), h = {
        class: "top-title"
    }, f = {
        class: "teacher"
    }, y = n(() => l("span", {
        class: "welcome ml-22px"
    }, "欢迎登录东软智慧教育平台", -1)), v = {
        class: "search-box"
    }, x = {
        class: "resourceManagementAndExaminationSituation mt-30px"
    }, w = tt({
        __name: "teacherIndex",
        setup(o) {
            V(t => ({
                "3a171dc8": a(R),
                "2204bd36": a(M)
            }));
            const k = T(), {
                height: S,
                width: C
            } = U(), M = b(() => S.value - 60 - 80 + "px"), R = b(() => C.value - 140 + "px"), m = g([]), r = g("");
            return q(async () => {
                await (async () => {
                    const t = await G();
                    return m.value = t, t;
                })(), (() => {
                    var c;
                    const t = m.value.filter(u => u.isCurrentTerm === 0);
                    let e = {};
                    e = t.length ? t.pop() : (c = m.value) == null ? void 0 : c[0], 
                    r.value = (e == null ? void 0 : e.id) || "";
                })(), z(() => {
                    var t = document.querySelector(".top-menu-box");
                    t && t.parentNode.removeChild(t);
                });
            }), (t, e) => {
                const c = D, u = E;
                return i(), I("div", p, [ d, l("div", h, [ l("span", f, "Hello, " + A(a(k).user.nickname), 1), y ]), l("div", v, [ _(u, {
                    modelValue: a(r),
                    "onUpdate:modelValue": e[0] || (e[0] = s => j(r) ? r.value = s : null),
                    size: "large",
                    style: {
                        width: "280px"
                    }
                }, {
                    default: B(() => [ (i(!0), I(O, null, P(a(m), s => (i(), W(c, {
                        key: s.id,
                        label: s.name,
                        value: s.id
                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), _(K, {
                    termId: a(r)
                }, null, 8, [ "termId" ]), _(Q, {
                    termId: a(r),
                    isTeacher: !0
                }, null, 8, [ "termId" ]), _(Y, {
                    termId: a(r)
                }, null, 8, [ "termId" ]), l("div", x, [ _(at, {
                    ref: "resourceManagementRef"
                }, null, 512), _(et, {
                    ref: "examinationWorkRef"
                }, null, 512) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-feed37fb" ] ]);
});

export {
    pt as __tla,
    w as default
};