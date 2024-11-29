import {
    d as v,
    r,
    w as x,
    f as w,
    o as V,
    c as b,
    t as i,
    k as n,
    l as g,
    a as t,
    m as D,
    Z as P,
    F as S,
    _ as T,
    P as U,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    a as C,
    __tla as F
} from "./index-7c75bd27.js";

import {
    d as N,
    h as R
} from "./tree-05ea8e09.js";

let u, Z = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})() ]).then(async () => {
    let c, o;
    c = {
        class: "head-container"
    }, o = {
        class: "head-container"
    }, u = v({
        name: "SystemUserDeptTree",
        __name: "DeptTreeSelect",
        emits: [ "node-click" ],
        setup(q, {
            emit: m
        }) {
            const a = r(""), s = r([]), d = r(), p = (e, l) => !e || l.name.includes(e), _ = async e => {
                h("node-click", e);
            }, h = m;
            return x(a, e => {
                d.value.filter(e);
            }), w(async () => {
                await (async () => {
                    const e = await C();
                    s.value = [], s.value.push(...R(e));
                })();
            }), (e, l) => {
                const f = T, y = U;
                return V(), b(S, null, [ i("div", c, [ n(y, {
                    modelValue: t(a),
                    "onUpdate:modelValue": l[0] || (l[0] = k => D(a) ? a.value = k : null),
                    class: "mb-20px",
                    clearable: "",
                    placeholder: "请输入部门名称"
                }, {
                    prefix: g(() => [ n(f, {
                        icon: "ep:search"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), i("div", o, [ n(t(P), {
                    ref_key: "treeRef",
                    ref: d,
                    data: t(s),
                    "expand-on-click-node": !1,
                    "filter-node-method": p,
                    props: t(N),
                    "default-expand-all": "",
                    "highlight-current": "",
                    "node-key": "id",
                    onNodeClick: _
                }, null, 8, [ "data", "props" ]) ]) ], 64);
            };
        }
    });
});

export {
    Z as __tla,
    u as default
};