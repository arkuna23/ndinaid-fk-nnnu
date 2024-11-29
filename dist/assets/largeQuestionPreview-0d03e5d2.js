import {
    b8 as M,
    e as v,
    r as O,
    o as i,
    c as o,
    F as b,
    y as w,
    z as f,
    t as c,
    B as l,
    H as $,
    __tla as z
} from "./index-6c08ea4c.js";

import {
    _ as B
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, E = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})() ]).then(async () => {
    let m, y, _, I, h, g, Q;
    m = {
        class: "large-question-list"
    }, y = [ "onClick" ], _ = {
        class: "q-title"
    }, I = {
        class: "show-title"
    }, h = {
        class: "q-desc"
    }, g = {
        class: "q-num pt-3"
    }, Q = [ "onClick" ], C = B({
        __name: "largeQuestionPreview",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            activeInfo: {
                type: Object,
                default: () => ({
                    index: 0,
                    type: ""
                })
            },
            activeId: {
                type: [ String ],
                default: ""
            }
        },
        emits: [ "update:form", "update:activeInfo", "update:activeId", "chooseQuestionIdNow" ],
        setup(L, {
            emit: N
        }) {
            M();
            const n = N, r = L, P = v({
                get: () => r.form.paperParts || [],
                set: e => {
                    n("update:form", {
                        ...r.form,
                        paperParts: e || [ {
                            partName: "第一大题",
                            partDesc: "",
                            paperQuestionList: [],
                            partScore: 0
                        } ]
                    });
                }
            }), d = v({
                get: () => r.activeId,
                set: e => {
                    n("update:activeId", e);
                }
            }), u = v({
                get: () => r.activeInfo,
                set: e => {
                    n("update:activeInfo", e);
                }
            }), j = O({});
            function x(e, a) {
                d.value || (u.value.index === e ? (u.value = {
                    index: e,
                    type: a
                }, a && j.value[`${a}Ref-${e}`].focus()) : u.value = {
                    index: e,
                    type: ""
                });
            }
            function D(e, a) {
                let t = 0;
                return (e.paperQuestionList || []).forEach(s => {
                    t += Math.round(10 * (s.paperQuestion.questionScore || 0)) / 10;
                }), Math.round(10 * t) / 10;
            }
            return (e, a) => (i(), o("div", m, [ (i(!0), o(b, null, w(P.value, (t, s) => (i(), 
            o("div", {
                key: s,
                class: f([ "large-question", (d.value, "") ]),
                onClick: p => x(s, "")
            }, [ c("div", _, [ c("div", I, l(t.partName) + " （共 " + l((t.paperQuestionList || []).length) + " 题，共 " + l(D(t)) + " 分 ）", 1) ]), c("div", h, [ c("div", {
                class: f([ "show-desc", {
                    "empty-desc": !t.partDesc
                } ])
            }, l(t.partDesc || ""), 3) ]), c("div", g, [ (i(!0), o(b, null, w(t.paperQuestionList, (p, S) => (i(), 
            o("div", {
                key: p.id,
                onClick: $(F => function(k, q) {
                    u.value.index !== q && x(q), k.id && setTimeout(() => {
                        n("chooseQuestionIdNow", k.id);
                    }, 1);
                }(p, s), [ "stop" ]),
                class: f([ "num-box", d.value === p.id ? "is-active" : "" ])
            }, l(S + 1), 11, Q))), 128)) ]) ], 10, y))), 128)) ]));
        }
    }, [ [ "__scopeId", "data-v-6ca79ba0" ] ]);
});

export {
    E as __tla,
    C as default
};