import {
    r as _,
    o as d,
    c as x,
    t as a,
    k as l,
    a as r,
    m as b,
    A as i,
    G as p,
    __tla as I
} from "./index-6c08ea4c.js";

import {
    _ as P,
    __tla as S
} from "./index-acea4f4f.js";

import j, {
    __tla as k
} from "./selectProject-be9c1b97.js";

import O, {
    __tla as g
} from "./projectSetting-a875369d.js";

import {
    _ as w
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as A
} from "./index-c4ca0ced.js";

import {
    __tla as C
} from "./index-993301ca.js";

import {
    __tla as G
} from "./index-71666e05.js";

import {
    __tla as N
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as U
} from "./dict-c5825220.js";

import {
    __tla as q
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as z
} from "./DeptTag-1be092ce.js";

import {
    __tla as B
} from "./index-ef4d146e.js";

import {
    __tla as D
} from "./projectList-47ec8076.js";

import {
    __tla as E
} from "./PreviewCover-97c10100.js";

import {
    __tla as F
} from "./el-image-0d184777.js";

import {
    __tla as H
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as J
} from "./throttle-1adeb119.js";

import {
    __tla as K
} from "./file-e038b35d.js";

import {
    __tla as L
} from "./index-9567cbf6.js";

import {
    __tla as M
} from "./pkgManage-4e23f8a8.js";

import {
    __tla as Q
} from "./pkgManage-14933852.js";

import {
    __tla as R
} from "./project-11c04120.js";

import {
    __tla as T
} from "./project-51c056b9.js";

import {
    __tla as V
} from "./resApi-8ab67bac.js";

import {
    __tla as W
} from "./list-724ebf74.js";

let u, X = Promise.all([ (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return S;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return N;
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
        return z;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return L;
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
        return T;
    } catch {}
})(), (() => {
    try {
        return V;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})() ]).then(async () => {
    let o, c, e;
    o = {
        class: "selectProject pb-0"
    }, c = {
        class: "steps-box"
    }, e = {
        class: "info-box"
    }, u = w({
        __name: "index",
        setup(Y) {
            const t = _(0), f = _([ {
                name: "选择项目"
            }, {
                name: "项目设置"
            } ]), s = _({}), h = m => {
                t.value = 1, s.value = m;
            }, y = () => {
                t.value = 0;
            };
            return (m, n) => (d(), x("div", o, [ a("div", c, [ l(P, {
                stepsOptions: r(f),
                activeSteps: r(t),
                "onUpdate:activeSteps": n[0] || (n[0] = v => b(t) ? t.value = v : null),
                allowClick: !1
            }, null, 8, [ "stepsOptions", "activeSteps" ]) ]), a("div", e, [ i(a("div", null, [ l(j, {
                onNext: h
            }) ], 512), [ [ p, r(t) == 0 ] ]), i(a("div", null, [ l(O, {
                selectInfo: r(s),
                onPre: y
            }, null, 8, [ "selectInfo" ]) ], 512), [ [ p, r(t) == 1 ] ]) ]) ]));
        }
    }, [ [ "__scopeId", "data-v-94f471f8" ] ]);
});

export {
    X as __tla,
    u as default
};