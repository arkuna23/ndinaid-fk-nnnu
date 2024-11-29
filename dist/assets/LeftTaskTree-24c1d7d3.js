import {
    r,
    e as C,
    o as L,
    C as j,
    l as _,
    t as o,
    k as w,
    B as f,
    a as l,
    m as A,
    z as B,
    Z as E,
    __tla as I
} from "./index-6c08ea4c.js";

import {
    E as N,
    __tla as P
} from "./el-drawer-fca4d971.js";

import {
    _ as R
} from "./_plugin-vue_export-helper-1b428a4d.js";

let m, U = Promise.all([ (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})() ]).then(async () => {
    let d, n, c;
    d = {
        class: "task-left"
    }, n = {
        class: "tree-box"
    }, c = {
        class: B([ "custom-tree-node" ])
    }, m = R({
        __name: "LeftTaskTree",
        props: {
            taskTree: {
                default: () => [],
                type: Array
            }
        },
        emits: [ "changeTask" ],
        setup(k, {
            expose: v,
            emit: y
        }) {
            const h = y, x = k, t = r(!1), T = C(() => x.taskTree || []), i = r({}), b = r({
                children: "children",
                label: "name",
                isLeaf: (a, e) => a.classify === 2,
                class: (a, e) => (a.classify === 2 ? "task-item" : "task-stage") + (a.type === 2 ? " task-result " : "") + (a.id === l(i).id ? " is-active-node" : "") + ` level-${e.level}`
            }), g = (a, e) => {
                a.classify === 2 && (i.value = a, h("changeTask", a), t.value = !1);
            };
            return v({
                open: async a => {
                    t.value = !0;
                }
            }), (a, e) => {
                const V = E, z = N;
                return L(), j(z, {
                    modelValue: l(t),
                    "onUpdate:modelValue": e[0] || (e[0] = s => A(t) ? t.value = s : null),
                    "modal-class": "drawer-task-tree",
                    title: "切换任务",
                    direction: "ltr",
                    size: "330"
                }, {
                    default: _(() => [ o("div", d, [ o("div", n, [ w(V, {
                        data: l(T),
                        props: l(b),
                        onNodeClick: g,
                        ref: "treeRef",
                        class: "task-tree",
                        "default-expand-all": "",
                        "node-key": "id",
                        indent: 12
                    }, {
                        default: _(({
                            node: s,
                            data: u
                        }) => {
                            var p;
                            return [ o("div", c, f(s.level === 2 ? (((p = s.parent.data) == null ? void 0 : p.sort) || "1") + "-" + u.sort || "1" : u.sort || "1") + ".  " + f(s.label), 1) ];
                        }),
                        _: 1
                    }, 8, [ "data", "props" ]) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9e5e8f28" ] ]);
});

export {
    U as __tla,
    m as default
};