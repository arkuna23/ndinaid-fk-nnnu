import {
    _ as s,
    __tla as u
} from "./ContentPage-f6bcc98e.js";

import {
    r as n,
    o as p,
    C as f,
    l as a,
    k as t,
    a as i,
    m as h,
    M as y,
    s as d,
    __tla as x
} from "./index-6c08ea4c.js";

import V, {
    __tla as b
} from "./course-3980c6a2.js";

import j, {
    __tla as v
} from "./project-131f816e.js";

import {
    _ as k
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as C
} from "./index-71666e05.js";

import {
    __tla as I
} from "./index-c4ca0ced.js";

import {
    __tla as M
} from "./index-993301ca.js";

import {
    __tla as P
} from "./index-8b41572c.js";

import {
    __tla as U
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as g
} from "./DeptTag-1be092ce.js";

import {
    __tla as q
} from "./index-ef4d146e.js";

import {
    __tla as w
} from "./index-4e6d8569.js";

import {
    __tla as z
} from "./techDirectionManage-e96d2dc4.js";

let e, A = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})(), (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return v;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return g;
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
        return z;
    } catch {}
})() ]).then(async () => {
    e = k({
        __name: "index",
        setup(B) {
            const r = n("course");
            return (D, _) => {
                const l = y, o = d, m = s;
                return p(), f(m, null, {
                    default: a(() => [ t(o, {
                        modelValue: i(r),
                        "onUpdate:modelValue": _[0] || (_[0] = c => h(r) ? r.value = c : null)
                    }, {
                        default: a(() => [ t(l, {
                            label: "课程资源",
                            name: "course"
                        }, {
                            default: a(() => [ t(V) ]),
                            _: 1
                        }), t(l, {
                            label: "项目资源",
                            name: "project"
                        }, {
                            default: a(() => [ t(j) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                });
            };
        }
    }, [ [ "__scopeId", "data-v-a3ec5064" ] ]);
});

export {
    A as __tla,
    e as default
};