import {
    r as $,
    j as q,
    a as m,
    o as T,
    c as z,
    t as a,
    A as F,
    k as A,
    l as B,
    B as t,
    v as P,
    D as G,
    K as H,
    J as L,
    R as M,
    S as Q,
    __tla as U
} from "./index-6c08ea4c.js";

import {
    _ as V
} from "./sub-exam-7ad7df56.js";

import {
    f as C,
    __tla as W
} from "./formatTime-de6f1520.js";

import {
    _ as X
} from "./_plugin-vue_export-helper-1b428a4d.js";

let E, Y = Promise.all([ (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})() ]).then(async () => {
    let s, c, n, i, o, p, r, x, u, _, d, f, v, g, b, h, y, I, S, D, k;
    s = e => (M("data-v-34e7ad1d"), e = e(), Q(), e), c = {
        key: 0,
        class: "publish-success-dialog"
    }, n = {
        class: "publish-success"
    }, i = {
        class: "publish-success-content"
    }, o = s(() => a("img", {
        src: V,
        class: "content-success"
    }, null, -1)), p = {
        class: "exam-name"
    }, r = {
        class: "neu-ellipsis",
        style: {
            margin: "auto",
            width: "80%"
        }
    }, x = s(() => a("p", {
        class: "exam-success"
    }, "考试安排发布成功", -1)), u = {
        class: "exam-item"
    }, _ = s(() => a("span", {
        class: "exam-item-label"
    }, "开始时间：", -1)), d = {
        class: "exam-item-content"
    }, f = {
        class: "exam-item"
    }, v = s(() => a("span", {
        class: "exam-item-label"
    }, "结束时间：", -1)), g = {
        class: "exam-item-content"
    }, b = {
        class: "exam-item"
    }, h = s(() => a("span", {
        class: "exam-item-label"
    }, "考试时长：", -1)), y = {
        class: "exam-item-content"
    }, I = {
        class: "exam-item"
    }, S = s(() => a("span", {
        class: "exam-item-label"
    }, "试卷满分：", -1)), D = {
        class: "exam-item-content"
    }, k = {
        class: "exam-footer"
    }, E = X({
        __name: "publishSuccessDialog",
        props: {
            examInfo: {
                type: Object,
                default: () => ({})
            }
        },
        setup(e, {
            expose: J
        }) {
            const l = $(!1), j = () => {
                l.value = !1;
            };
            return J({
                openDialog: () => {
                    l.value = !0;
                },
                closeDialog: j
            }), (Z, aa) => {
                var w, N;
                const K = H, O = L, R = q("show-tip");
                return m(l) ? (T(), z("div", c, [ a("div", n, [ a("div", i, [ o, F((T(), 
                z("p", p, [ A(K, {
                    content: e.examInfo.examName,
                    placement: "top"
                }, {
                    default: B(() => [ a("div", r, t(e.examInfo.examName), 1) ]),
                    _: 1
                }, 8, [ "content" ]) ])), [ [ R ] ]), x, a("div", u, [ _, a("span", d, t(m(C)(e.examInfo.examSetting.startTime)), 1) ]), a("div", f, [ v, a("span", g, t(m(C)(e.examInfo.examSetting.endTime)), 1) ]), a("div", b, [ h, a("span", y, t(e.examInfo.examSetting.duration) + "分钟", 1) ]), a("div", I, [ S, a("span", D, t(`${(N = (w = e.examInfo) == null ? void 0 : w.paperSetting) == null ? void 0 : N.paperScore}\u5206`), 1) ]), a("div", k, [ A(O, {
                    type: "primary",
                    size: "large",
                    onClick: j
                }, {
                    default: B(() => [ P("关闭") ]),
                    _: 1
                }) ]) ]) ]) ])) : G("", !0);
            };
        }
    }, [ [ "__scopeId", "data-v-34e7ad1d" ] ]);
});

export {
    Y as __tla,
    E as default
};