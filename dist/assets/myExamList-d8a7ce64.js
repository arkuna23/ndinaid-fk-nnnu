import {
    a7 as G,
    r as J,
    f as P,
    j as M,
    o as t,
    c as l,
    t as a,
    v as S,
    k as j,
    a as c,
    F as O,
    y as Q,
    A as X,
    l as Y,
    B as n,
    _ as Z,
    K as $,
    R as aa,
    S as sa,
    __tla as ea
} from "./index-6c08ea4c.js";

import {
    f as A,
    __tla as ta
} from "./formatTime-de6f1520.js";

import {
    _ as la
} from "./_plugin-vue_export-helper-1b428a4d.js";

let B, na = Promise.all([ (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})() ]).then(async () => {
    let m, s, d, p, u, _, v, f, h, x, b, y, C, g, k, L, I, T, w, V, E, N, z, D;
    m = "" + new URL("noExamTablebg-f91ab11b.png", import.meta.url).href, s = r => (aa("data-v-f070e769"), 
    r = r(), sa(), r), d = {
        class: "examinationWorkContainer"
    }, p = {
        class: "titleContainer"
    }, u = {
        class: "haveHead"
    }, _ = s(() => a("span", {
        class: "title"
    }, "我的考试", -1)), v = {
        key: 0,
        class: "exhibitionCard"
    }, f = {
        class: "cardContainerTitle"
    }, h = {
        class: "itemContainer"
    }, x = {
        class: "cardItem"
    }, b = s(() => a("span", {
        class: "cardLabel"
    }, "开始时间：", -1)), y = {
        class: "cardValue"
    }, C = {
        class: "cardItem"
    }, g = s(() => a("span", {
        class: "cardLabel"
    }, "结束时间：", -1)), k = {
        class: "cardValue"
    }, L = {
        class: "itemContainer"
    }, I = {
        class: "cardItem"
    }, T = s(() => a("span", {
        class: "cardLabel"
    }, "考试时长：", -1)), w = {
        class: "cardValue"
    }, V = {
        class: "cardItem"
    }, E = s(() => a("span", {
        class: "cardLabel"
    }, "试卷满分：", -1)), N = {
        class: "cardValue"
    }, z = {
        key: 1,
        class: "noData"
    }, D = [ s(() => a("img", {
        src: m,
        alt: ""
    }, null, -1)) ], B = la({
        __name: "myExamList",
        setup(r) {
            const i = J([]), H = () => {
                var o;
                (o = {
                    pageNum: 0,
                    pageSize: 2,
                    limitTwoDataFlag: !0
                }, G.post({
                    url: "smartexam/my-exam/unfinished/list",
                    data: o
                })).then(R => {
                    i.value = R.content;
                });
            }, F = () => {
                location.href = location.origin + "/exam/myExam";
            };
            return P(() => {
                H();
            }), (o, R) => {
                const K = Z, U = $, W = M("show-tip");
                return t(), l("div", d, [ a("div", p, [ a("div", u, [ _, a("span", {
                    class: "more",
                    onClick: F
                }, [ S("更多 "), j(K, {
                    icon: "ep:arrow-right",
                    size: "12",
                    style: {
                        position: "relative",
                        top: "2px"
                    }
                }) ]) ]) ]), c(i).length > 0 ? (t(), l("div", v, [ (t(!0), l(O, null, Q(c(i), (e, q) => (t(), 
                l("div", {
                    class: "cardContainer",
                    key: q,
                    onClick: F
                }, [ a("div", null, [ X((t(), l("span", f, [ j(U, {
                    content: e.examName
                }, {
                    default: Y(() => [ S(n(e.examName), 1) ]),
                    _: 2
                }, 1032, [ "content" ]) ])), [ [ W ] ]) ]), a("div", h, [ a("span", x, [ b, a("span", y, n(c(A)(e.startTime)), 1) ]), a("span", C, [ g, a("span", k, n(c(A)(e.endTime)), 1) ]) ]), a("div", L, [ a("span", I, [ T, a("span", w, n(e.duration) + "分钟", 1) ]), a("span", V, [ E, a("span", N, n(e.score) + "分", 1) ]) ]) ]))), 128)) ])) : (t(), 
                l("div", z, D)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-f070e769" ] ]);
});

export {
    na as __tla,
    B as default
};