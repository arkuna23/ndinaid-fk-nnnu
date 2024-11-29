import {
    b8 as $,
    j as aa,
    o as e,
    c as l,
    A as d,
    G as R,
    t as a,
    k as u,
    a as X,
    D as o,
    z as sa,
    F as m,
    y as f,
    B as r,
    C as Y,
    l as v,
    K as ea,
    L as la,
    R as ta,
    S as ia,
    __tla as na
} from "./index-6c08ea4c.js";

import {
    _ as ca,
    __tla as oa
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as J,
    __tla as ra
} from "./dict-c5825220.js";

import {
    _ as da
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let W, ua = Promise.all([ (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})() ]).then(async () => {
    let i, y, _, h, b, w, T, g, k, L, B, P, C, D, I, x, H, M, S, V, q, A, E, F, O, U, j, N;
    i = n => (ta("data-v-b9949110"), n = n(), ia(), n), y = {
        class: "qusetion-info"
    }, _ = {
        key: 0,
        class: "info-item"
    }, h = {
        class: "label"
    }, b = {
        class: "value"
    }, w = {
        class: "info-item"
    }, T = {
        class: "label"
    }, g = [ "innerHTML" ], k = {
        class: "info-item"
    }, L = i(() => a("div", {
        class: "label"
    }, "答案", -1)), B = {
        class: "value"
    }, P = {
        class: "choices-item"
    }, C = {
        class: "choices-label"
    }, D = {
        class: "choices-html"
    }, I = {
        class: "neu-thumbnailDisplay tagText"
    }, x = {
        key: 0,
        class: "choices-item"
    }, H = {
        class: "choices-label"
    }, M = {
        class: "choices-html"
    }, S = {
        class: "info-item"
    }, V = i(() => a("div", {
        class: "label"
    }, "解析", -1)), q = [ "innerHTML" ], A = {
        key: 0,
        class: "info-item"
    }, E = i(() => a("div", {
        class: "label"
    }, "难易度", -1)), F = {
        class: "value"
    }, O = {
        key: 1,
        class: "info-item"
    }, U = i(() => a("div", {
        class: "label"
    }, "标签", -1)), j = {
        class: "value"
    }, N = {
        class: "neu-thumbnailDisplay tagText"
    }, W = da({
        __name: "type4",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isChild: {
                type: Boolean,
                default: !1
            },
            showType: {
                type: Boolean,
                default: !1
            },
            inLibrary: {
                type: Boolean,
                default: !1
            },
            inPageView: {
                type: Boolean,
                default: !1
            },
            hideAnswer: {
                type: Boolean,
                default: !1
            }
        },
        setup(n) {
            $();
            const s = n;
            return (va, pa) => {
                const Q = ca, z = ea, G = la, K = aa("show-tip");
                return e(), l("div", y, [ s.showType ? (e(), l("div", _, [ d(a("div", h, "题型", 512), [ [ R, !s.inPageView ] ]), a("div", b, [ u(Q, {
                    type: X(J).QUESTION_TYPE,
                    value: s.form.questionType
                }, null, 8, [ "type", "value" ]) ]) ])) : o("", !0), a("div", w, [ d(a("div", T, "题干", 512), [ [ R, !s.inPageView ] ]), a("div", {
                    class: "value",
                    innerHTML: s.form.stem
                }, null, 8, g) ]), s.hideAnswer ? o("", !0) : (e(), l("div", {
                    key: 1,
                    class: sa(s.inPageView ? "py-2 pr-5 qusetion-bg-gray" : "")
                }, [ a("div", k, [ L, a("div", B, [ (e(!0), l(m, null, f(s.form.answers || [], (t, c) => (e(), 
                l("div", {
                    class: "choices",
                    key: t.answer + c
                }, [ a("div", P, [ a("div", C, " 第" + r(c + 1) + "空： ", 1), a("div", D, [ (e(!0), 
                l(m, null, f((t.answer || "").split("|"), (p, Z) => (e(), Y(G, {
                    key: Z + p,
                    class: "mr-2",
                    "disable-transitions": !1
                }, {
                    default: v(() => [ d((e(), l("span", null, [ u(z, {
                        content: p,
                        placement: "top",
                        "show-after": 300,
                        "raw-content": "",
                        effect: "light"
                    }, {
                        default: v(() => [ a("span", I, r(p), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ K ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ]), s.inLibrary ? (e(), l("div", x, [ a("div", H, " 第" + r(c + 1) + "空分数： ", 1), a("div", M, r(t.blankScore || 0) + " 分 ", 1) ])) : o("", !0) ]))), 128)) ]) ]), a("div", S, [ V, a("div", {
                    class: "value",
                    innerHTML: s.form.analysis
                }, null, 8, q) ]), s.isChild ? o("", !0) : (e(), l("div", A, [ E, a("div", F, [ u(Q, {
                    type: X(J).QUESTION_DIFFICULT,
                    value: s.form.difficult
                }, null, 8, [ "type", "value" ]) ]) ])), s.isChild ? o("", !0) : (e(), 
                l("div", O, [ U, a("div", j, [ (e(!0), l(m, null, f(s.form.tags || [], (t, c) => (e(), 
                Y(G, {
                    key: c + t,
                    style: {
                        "max-width": "80%"
                    },
                    class: "mr-2",
                    round: "",
                    "disable-transitions": !1
                }, {
                    default: v(() => [ d((e(), l("span", null, [ u(z, {
                        content: t,
                        placement: "top",
                        "show-after": 300
                    }, {
                        default: v(() => [ a("span", N, r(t), 1) ]),
                        _: 2
                    }, 1032, [ "content" ]) ])), [ [ K ] ]) ]),
                    _: 2
                }, 1024))), 128)) ]) ])) ], 2)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b9949110" ] ]);
});

export {
    ua as __tla,
    W as default
};