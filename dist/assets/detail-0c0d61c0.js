import {
    dU as F,
    r as Q,
    f as S,
    aT as P,
    o as r,
    c as f,
    t as a,
    k as o,
    l as c,
    v as q,
    B as t,
    D as u,
    aQ as G,
    M as H,
    s as J,
    R as K,
    S as W,
    __tla as X
} from "./index-6c08ea4c.js";

import {
    _ as v,
    __tla as Z
} from "./index-da0e4c45.js";

import {
    _ as aa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let k, sa = Promise.all([ (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})() ]).then(async () => {
    const p = {
        name: "FlowLineDetail",
        components: {
            Back: F,
            YamlEditor: v
        },
        props: {
            taskInfo: {
                type: Object,
                default: () => {}
            }
        },
        emits: [ "close" ],
        setup(n, i) {
            const s = Q("first");
            return S(() => {}), {
                goBack: () => {
                    i.emit("close");
                },
                activeName: s,
                forMatterTime: e => `${e.substr(0, 4)}-${e.substr(5, 2)}-${e.substr(8, 2)} ${e.substr(11, 2)}:${e.substr(14, 2)}:${e.substr(17, 2)}`
            };
        }
    }, l = n => (K("data-v-c5338577"), n = n(), W(), n), _ = {
        class: "detail pa-5"
    }, b = {
        class: "header"
    }, y = {
        class: "title"
    }, I = {
        key: 0,
        class: "info-item"
    }, g = l(() => a("div", {
        class: "info-lable"
    }, "描述：", -1)), h = {
        class: "info-value"
    }, B = {
        class: "info-item"
    }, $ = l(() => a("div", {
        class: "info-lable"
    }, "版本号：", -1)), T = {
        class: "info-value"
    }, M = {
        class: "info-item"
    }, V = l(() => a("div", {
        class: "info-lable"
    }, "类型：", -1)), N = {
        class: "info-value"
    }, x = {
        class: "info-item"
    }, D = l(() => a("div", {
        class: "info-lable"
    }, "同步类型：", -1)), E = {
        class: "info-value"
    }, L = {
        class: "info-item"
    }, O = l(() => a("div", {
        class: "info-lable"
    }, "创建时间：", -1)), R = {
        class: "info-value"
    }, U = {
        key: 1,
        class: "info-item"
    }, Y = l(() => a("div", {
        class: "info-lable"
    }, "命名空间：", -1)), j = {
        class: "info-value"
    };
    k = aa(p, [ [ "render", function(n, i, s, e, ea, ta) {
        const w = P("Back"), z = G, m = H, A = v, C = J;
        return r(), f("div", _, [ a("div", b, [ a("span", {
            style: {
                cursor: "pointer"
            },
            onClick: i[0] || (i[0] = (...d) => e.goBack && e.goBack(...d))
        }, [ o(z, null, {
            default: c(() => [ o(w) ]),
            _: 1
        }), q(" 返回 ") ]), a("span", y, t(s.taskInfo.metadata.name), 1) ]), o(C, {
            modelValue: e.activeName,
            "onUpdate:modelValue": i[1] || (i[1] = d => e.activeName = d),
            class: "demo-tabs",
            lazy: !0
        }, {
            default: c(() => [ o(m, {
                label: "概览",
                name: "first"
            }, {
                default: c(() => [ s.taskInfo.spec.description ? (r(), f("div", I, [ g, a("div", h, t(s.taskInfo.spec.description), 1) ])) : u("", !0), a("div", B, [ $, a("div", T, t(s.taskInfo.metadata.resourceVersion), 1) ]), a("div", M, [ V, a("div", N, t(s.taskInfo.metadata.labels["neuedu.com/type"]), 1) ]), a("div", x, [ D, a("div", E, t(s.taskInfo.metadata.labels["neuedu.com/syncType"]), 1) ]), a("div", L, [ O, a("div", R, t(e.forMatterTime(s.taskInfo.metadata.creationTimestamp)), 1) ]), s.taskInfo.namespace ? (r(), 
                f("div", U, [ Y, a("div", j, t(s.taskInfo.namespace), 1) ])) : u("", !0) ]),
                _: 1
            }), o(m, {
                label: "YAML",
                name: "second"
            }, {
                default: c(() => [ o(A, {
                    ref: "yamlEditorRef",
                    height: "500px",
                    "code-string": s.taskInfo,
                    "read-only": !0
                }, null, 8, [ "code-string" ]) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ]) ]);
    } ], [ "__scopeId", "data-v-c5338577" ] ]);
});

export {
    sa as __tla,
    k as default
};