import {
    aa as x,
    p as A,
    T as D,
    r as p,
    o as E,
    C as J,
    l as t,
    k as o,
    v as u,
    t as m,
    a as s,
    m as L,
    a8 as R,
    J as T,
    aU as q,
    R as z,
    S as B,
    __tla as F
} from "./index-6c08ea4c.js";

import {
    E as G,
    b as H,
    __tla as K
} from "./project-51c056b9.js";

import {
    _ as M
} from "./_plugin-vue_export-helper-1b428a4d.js";

let v, N = Promise.all([ (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let d, _, f, V, b, h;
    d = r => (z("data-v-9a01630c"), r = r(), B(), r), _ = d(() => m("span", {
        class: "tips"
    }, "（选中若有实验步骤手册学生可见，否则学生不可查看）", -1)), f = d(() => m("span", {
        class: "tips"
    }, "（选中学生可使用线上环境中剪切板功能，否则学生不可使用）", -1)), V = d(() => m("span", {
        class: "tips"
    }, "（选中学生可使用在线环境中复制代码功能，否则学生不可使用）", -1)), b = d(() => m("span", {
        class: "tips"
    }, "（选中学生可查看项目资源配置的演示环境，否则学生不可查看）", -1)), h = d(() => m("span", {
        class: "tips"
    }, "（选中学生可查看项目资源配置的完整工程代码，否则学生不可查看）", -1)), v = M({
        __name: "setting",
        emits: [ "success" ],
        setup(r, {
            expose: w,
            emit: U
        }) {
            const {
                t: S
            } = x(), g = A(), y = D();
            p("");
            const a = p({}), i = p(!1);
            w({
                open: async (c, e) => {
                    i.value = !0, P();
                }
            });
            const k = U, I = async () => {
                try {
                    await G({
                        id: y.params.projectId,
                        ...a.value
                    }), g.success(S("common.updateSuccess")), i.value = !1, k("success");
                } finally {}
            }, P = async () => {
                const c = await H(y.params.projectId);
                a.value = c ?? {};
            };
            return (c, e) => {
                const n = R, C = T, j = q;
                return E(), J(j, {
                    modelValue: s(i),
                    "onUpdate:modelValue": e[6] || (e[6] = l => L(i) ? i.value = l : null),
                    title: "公开设置",
                    width: "520",
                    height: "500"
                }, {
                    footer: t(() => [ o(C, {
                        disabled: c.formLoading,
                        type: "primary",
                        onClick: I
                    }, {
                        default: t(() => [ u("保存") ]),
                        _: 1
                    }, 8, [ "disabled" ]), o(C, {
                        onClick: e[5] || (e[5] = l => i.value = !1)
                    }, {
                        default: t(() => [ u("取 消") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ m("div", null, [ o(n, {
                        modelValue: s(a).isPublishAnswer,
                        "onUpdate:modelValue": e[0] || (e[0] = l => s(a).isPublishAnswer = l),
                        "true-label": 1,
                        "false-label": 0
                    }, {
                        default: t(() => [ u("公开答案"), _ ]),
                        _: 1
                    }, 8, [ "modelValue" ]), o(n, {
                        modelValue: s(a).isCut,
                        "onUpdate:modelValue": e[1] || (e[1] = l => s(a).isCut = l),
                        "true-label": 1,
                        "false-label": 0
                    }, {
                        default: t(() => [ u("使用剪切板"), f ]),
                        _: 1
                    }, 8, [ "modelValue" ]), o(n, {
                        modelValue: s(a).isCopyCode,
                        "onUpdate:modelValue": e[2] || (e[2] = l => s(a).isCopyCode = l),
                        "true-label": 1,
                        "false-label": 0
                    }, {
                        default: t(() => [ u("复制代码"), V ]),
                        _: 1
                    }, 8, [ "modelValue" ]), o(n, {
                        modelValue: s(a).isShowDemo,
                        "onUpdate:modelValue": e[3] || (e[3] = l => s(a).isShowDemo = l),
                        "true-label": 1,
                        "false-label": 0
                    }, {
                        default: t(() => [ u("查看演示环境"), b ]),
                        _: 1
                    }, 8, [ "modelValue" ]), o(n, {
                        modelValue: s(a).isShowCode,
                        "onUpdate:modelValue": e[4] || (e[4] = l => s(a).isShowCode = l),
                        "true-label": 1,
                        "false-label": 0
                    }, {
                        default: t(() => [ u("查看完整代码"), h ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9a01630c" ] ]);
});

export {
    N as __tla,
    v as default
};