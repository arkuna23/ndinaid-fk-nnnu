import {
    a7 as C,
    r as M,
    u as j,
    f as F,
    o as H,
    c as J,
    t as a,
    B,
    a as E,
    v as i,
    k as T,
    l as b,
    J as L,
    R as P,
    S as R,
    __tla as S
} from "./index-6c08ea4c.js";

import {
    _ as q
} from "./_plugin-vue_export-helper-1b428a4d.js";

let y, w = Promise.all([ (() => {
    try {
        return S;
    } catch {}
})() ]).then(async () => {
    let s, l, o, r, c, m, d, v, u, g, x, _;
    s = t => (P("data-v-a50ea178"), t = t(), R(), t), l = {
        class: "examinationWorkContainer"
    }, o = s(() => a("div", {
        class: "titleContainer"
    }, [ a("div", {
        class: "haveHead"
    }, [ a("span", {
        class: "title"
    }, "我的考试工作") ]) ], -1)), r = {
        class: "exhibitionCard"
    }, c = {
        class: "pendingInvigilation"
    }, m = s(() => a("div", {
        class: "infoText"
    }, "待监考的考试", -1)), d = {
        class: "session"
    }, v = {
        class: "num"
    }, u = {
        class: "paperToBeMarked"
    }, g = s(() => a("div", {
        class: "infoText"
    }, "待阅卷的考试", -1)), x = {
        class: "session"
    }, _ = {
        class: "num"
    }, y = q({
        __name: "examinationWork",
        setup(t) {
            const p = M(0), f = M(0);
            j();
            const z = () => {
                C.get({
                    url: "/smartexam/exam-mark/getExamListCountByMarker"
                }).then(e => {
                    p.value = e;
                });
            }, I = () => {
                C.get({
                    url: "/smartexam/invigilation-center/exam-arrangement-count"
                }).then(e => {
                    f.value = e;
                });
            }, k = e => {
                location.href = e === 1 ? location.origin + "/exam/examManagement/invigilator" : location.origin + "/exam/examManagement/markingCenter";
            };
            return F(() => {
                z(), I();
            }), (e, n) => {
                const h = L;
                return H(), J("div", l, [ o, a("div", r, [ a("div", c, [ m, a("div", d, [ a("span", v, B(E(f) || 0), 1), i("场") ]), T(h, {
                    size: "large",
                    color: "#00b2c7",
                    onClick: n[0] || (n[0] = W => k(1))
                }, {
                    default: b(() => [ i("去监考") ]),
                    _: 1
                }) ]), a("div", u, [ g, a("div", x, [ a("span", _, B(E(p) || 0), 1), i("场") ]), T(h, {
                    size: "large",
                    color: "#245FE6",
                    onClick: n[1] || (n[1] = W => k(2))
                }, {
                    default: b(() => [ i("去阅卷") ]),
                    _: 1
                }) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-a50ea178" ] ]);
});

export {
    w as __tla,
    y as default
};