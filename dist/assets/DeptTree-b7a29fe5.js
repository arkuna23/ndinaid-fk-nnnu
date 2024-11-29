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
    F as T,
    _ as U,
    P as j,
    __tla as C
} from "./index-6c08ea4c.js";

import {
    a as F,
    __tla as N
} from "./index-7c75bd27.js";

import {
    d as R,
    h as S
} from "./tree-05ea8e09.js";

let u, Z = Promise.all([ (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    let o, c;
    o = {
        class: "head-container"
    }, c = {
        class: "head-container"
    }, u = v({
        name: "SystemUserDeptTree",
        __name: "DeptTree",
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
                    const e = await F();
                    s.value = [], s.value.push(...S(e));
                })();
            }), (e, l) => {
                const f = U, y = j;
                return V(), b(T, null, [ i("div", o, [ n(y, {
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
                }, 8, [ "modelValue" ]) ]), i("div", c, [ n(t(P), {
                    ref_key: "treeRef",
                    ref: d,
                    data: t(s),
                    "expand-on-click-node": !1,
                    "filter-node-method": p,
                    props: t(R),
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