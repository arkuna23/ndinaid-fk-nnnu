import {
    b8 as S,
    U as F,
    e as m,
    r as M,
    o,
    c as p,
    F as _,
    y as q,
    t as d,
    B as u,
    z as I,
    H as O,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    _ as z
} from "./_plugin-vue_export-helper-1b428a4d.js";

let L, B = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})() ]).then(async () => {
    let y, Q, A, x, h, w;
    y = {
        class: "large-question-list"
    }, Q = {
        class: "q-title"
    }, A = {
        class: "show-title"
    }, x = {
        class: "q-desc"
    }, h = {
        class: "q-num pt-3"
    }, w = [ "onClick" ], L = z({
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
        setup(T, {
            expose: k,
            emit: b
        }) {
            S();
            const c = b, l = T, r = F({
                index: {}
            }), f = m({
                get: () => l.form.paperParts || [],
                set: e => {
                    c("update:form", {
                        ...l.form,
                        paperParts: e || [ {
                            partName: "第一大题",
                            partDesc: "",
                            paperQuestionList: [],
                            partScore: 0
                        } ]
                    });
                }
            }), C = m({
                get: () => l.activeId,
                set: e => {
                    c("update:activeId", e);
                }
            }), v = m({
                get: () => l.activeInfo,
                set: e => {
                    c("update:activeInfo", e);
                }
            }), E = M({});
            function N(e, s) {
                r.index = {}, r.index[e.id] = !0, v.value.index !== s && function(t, n) {
                    C.value || (v.value.index === t ? (v.value = {
                        index: t,
                        type: n
                    }, n && E.value[`${n}Ref-${t}`].focus()) : v.value = {
                        index: t,
                        type: ""
                    });
                }(s), e.id && setTimeout(() => {
                    c("chooseQuestionIdNow", e.id);
                }, 1);
            }
            function P(e, s) {
                let t = 0;
                return (e.paperQuestionList || []).forEach(n => {
                    t += Math.round(10 * (n.paperQuestion.questionScore || 0)) / 10;
                }), Math.round(10 * t) / 10;
            }
            const j = e => {
                if (e.id) return r.index[e.id] === !0 ? "haveActive" : "";
            };
            function D(e) {
                var t, n;
                if (e.paperQuestion.questionType === "4") {
                    let a = !1;
                    return e.paperQuestion.candidateAnswer.forEach(i => {
                        a += i.candidateAnswer === "";
                    }), !(a > 0);
                }
                if (e.paperQuestion.questionType === "8" || e.paperQuestion.questionType === "10") {
                    let a = !1;
                    return e.paperQuestion.subQuestions.forEach(i => {
                        i.questionType === "4" ? i.candidateAnswer.forEach(g => {
                            a += g.candidateAnswer === "";
                        }) : a += i.candidateAnswer === null || i.candidateAnswer === void 0 || typeof i.candidateAnswer == "string" && i.candidateAnswer.trim() === "" || Array.isArray(i.candidateAnswer) && i.candidateAnswer.length === 0;
                    }), !(a > 0);
                }
                if (e.paperQuestion.questionType === "20") return ((t = e.paperQuestion) == null ? void 0 : t.solutionContentText) !== ((n = e.paperQuestion) == null ? void 0 : n.initialCodeArea);
                const s = e.paperQuestion.candidateAnswer;
                return !(s == null || typeof s == "string" && s.trim() === "" || Array.isArray(s) && s.length === 0);
            }
            return k({
                initAction: e => {
                    var s, t, n;
                    if (e) r.index = {}, r.index[e] = !0; else {
                        let a = (s = f.value[0]) != null && s.paperQuestionList && ((t = f.value[0]) != null && t.paperQuestionList[0]) ? (n = f.value[0]) == null ? void 0 : n.paperQuestionList[0] : {};
                        a.id && (r.index = {}, r.index[a.id] = !0);
                    }
                }
            }), (e, s) => (o(), p("div", y, [ (o(!0), p(_, null, q(f.value, (t, n) => (o(), 
            p("div", {
                class: "large-question",
                key: n
            }, [ d("div", Q, [ d("div", A, u(t.partName) + " （共 " + u((t.paperQuestionList || []).length) + " 题，共 " + u(P(t)) + " 分 ）", 1) ]), d("div", x, [ d("div", {
                class: I([ "show-desc", {
                    "empty-desc": !t.partDesc
                } ])
            }, u(t.partDesc || ""), 3) ]), d("div", h, [ (o(!0), p(_, null, q(t.paperQuestionList, (a, i) => (o(), 
            p("div", {
                key: i,
                onClick: O(g => N(a, i), [ "stop" ]),
                class: I([ "num-box", "pointer", D(a) ? "is-active" : "", a.paperQuestion.markFlag ? "is-mark" : "", j(a) ])
            }, u(i + 1), 11, w))), 128)) ]) ]))), 128)) ]));
        }
    }, [ [ "__scopeId", "data-v-3c715425" ] ]);
});

export {
    B as __tla,
    L as default
};