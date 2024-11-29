import f, {
    __tla as y
} from "./work-build-list-3fd5630e.js";

import h, {
    __tla as d
} from "./work-build-result-c29a8ab7.js";

import {
    _ as b
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    r as _,
    o as l,
    c as v,
    a,
    C as i,
    D as n,
    n as j,
    __tla as k
} from "./index-6c08ea4c.js";

import {
    __tla as C
} from "./index-8b41572c.js";

import {
    __tla as P
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as g
} from "./DeptTag-1be092ce.js";

import {
    __tla as x
} from "./index-ef4d146e.js";

import {
    __tla as G
} from "./build-dialog-748e4100.js";

import "./array-bottom-4bf24e22.js";

import {
    __tla as w
} from "./build-0e7c99ca.js";

import {
    __tla as D
} from "./code-a0d24f62.js";

import {
    __tla as I
} from "./chooseFlowline-0cc8e11a.js";

import "./configInfo-14ae9782.js";

import {
    __tla as q
} from "./group-7c00fc2a.js";

import {
    __tla as z
} from "./formatTime-de6f1520.js";

import "./formatter-7ecf379a.js";

import {
    __tla as A
} from "./index-da0e4c45.js";

import {
    __tla as B
} from "./el-collapse-item-c8b76a0a.js";

import {
    __tla as E
} from "./clipboard-0a12866f.js";

import {
    __tla as F
} from "./taskInstance-9258951c.js";

import {
    __tla as H
} from "./file-e038b35d.js";

import "./fail-da771b5c.js";

import "./tenant-9e660cc6.js";

let u, J = Promise.all([ (() => {
    try {
        return y;
    } catch {}
})(), (() => {
    try {
        return d;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return I;
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
        return A;
    } catch {}
})(), (() => {
    try {
        return B;
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
})() ]).then(async () => {
    let o;
    o = {
        class: "work-build"
    }, u = b({
        __name: "index",
        setup(K) {
            const t = _("list"), e = _(null), m = _(), c = (r, s, p) => {
                r == "result" ? (e.value = s, m.value = p, j(() => {
                    t.value = r;
                })) : t.value = r;
            };
            return (r, s) => (l(), v("div", o, [ a(t) == "list" ? (l(), i(f, {
                key: 0,
                onGoPage: c
            })) : n("", !0), a(t) == "result" ? (l(), i(h, {
                key: 1,
                detailContent: a(e),
                "build-object": a(m),
                onGoPage: c
            }, null, 8, [ "detailContent", "build-object" ])) : n("", !0) ]));
        }
    }, [ [ "__scopeId", "data-v-1178b234" ] ]);
});

export {
    J as __tla,
    u as default
};