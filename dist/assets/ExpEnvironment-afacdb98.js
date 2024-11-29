import {
    e as h,
    r as B,
    f as S,
    o as c,
    c as i,
    t as s,
    F as g,
    y as P,
    z,
    H as D,
    B as C,
    A as y,
    G as E,
    k as G,
    v as H,
    a as b,
    bB as I,
    _ as Y,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    b as w,
    D as F,
    __tla as J
} from "./dict-c5825220.js";

import {
    g as K,
    __tla as M
} from "./index-c31c99eb.js";

import {
    _ as O
} from "./_plugin-vue_export-helper-1b428a4d.js";

let T, W = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    let u, o, n, _, v;
    u = {
        class: "choose-env"
    }, o = {
        class: "select-box"
    }, n = [ "onClick" ], _ = {
        class: "item-title"
    }, v = {
        class: "is-choose-item"
    }, T = O({
        __name: "ExpEnvironment",
        props: {
            modelValue: {
                type: Number,
                default: () => 0
            },
            isCreate: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "update:modelValue" ],
        setup(N, {
            emit: V
        }) {
            const k = V, t = N, d = h({
                get: () => t.modelValue,
                set: e => {
                    k("update:modelValue", e);
                }
            }), x = h(() => w(F.SYSTEM_TENANT_PACKAGE_ENV_TYPE).filter(e => m.value.indexOf(e.value) >= 0)), m = B([]), l = e => e === b(d), A = e => {
                switch (e) {
                  case 0:
                    return "适用于线下类型实验。";

                  case 5:
                    return "代码编辑器环境专为语言类代码编程学习而设计。通过设置的测试脚本，可自动检测和评估代码的正确性。";

                  case 10:
                    return "提供了一个或一组容器环境，内置操作系统和常用应用，让您可以快速启动实验。通过VNC、SSH、WEBIDE、Jupyter多种方式可轻松连接到容器环境内。";

                  case 15:
                    return "适用于覆盖软件项目规划、设计、代码托管、代码检查、编译构建、测试、流水线全流程项目。";

                  case 20:
                    return "CT仿真操作系统可支撑智能医学方向的课程学习。通过模拟真实的CT操作场景和不同的病例，学生可以在仿真环境中进行练习如何根据病例选择合适的CT扫描方案。";

                  default:
                    return "";
                }
            };
            return S(() => {
                K(I()).then(e => {
                    let p = e || [];
                    m.value = [ 0, ...p.map(r => Number(r)) ];
                });
            }), (e, p) => {
                const r = Y;
                return c(), i("div", u, [ s("div", o, [ (c(!0), i(g, null, P(b(x), a => (c(), 
                i("div", {
                    key: a.value,
                    class: z([ "select-item", l(a.value) ? "is-active" : "", "env-bg-" + a.value, t.isCreate ? "is-create" : "is-edit" ]),
                    onClick: D(q => {
                        return f = a.value, void (t.isCreate && (d.value = f));
                        var f;
                    }, [ "stop" ])
                }, [ s("div", _, C(a.label), 1), y(s("div", {
                    class: "item-desc"
                }, C(A(a.value)), 513), [ [ E, l(a.value) ] ]), y(s("div", v, [ G(r, {
                    class: "choose-icon",
                    icon: "ep:circle-check-filled",
                    color: "#fff",
                    size: 14
                }), H(" 已选择 ") ], 512), [ [ E, l(a.value) ] ]) ], 10, n))), 128)) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-730b6ed9" ] ]);
});

export {
    W as __tla,
    T as default
};