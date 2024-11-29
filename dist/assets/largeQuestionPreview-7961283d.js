import {
    b8 as j,
    e as v,
    r as D,
    U as F,
    o as u,
    c as d,
    F as g,
    y as _,
    t as p,
    B as c,
    z as I,
    H as M,
    __tla as O
} from "./index-6c08ea4c.js";

import {
    _ as $
} from "./_plugin-vue_export-helper-1b428a4d.js";

let S, z = Promise.all([ (() => {
    try {
        return O;
    } catch {}
})() ]).then(async () => {
    let y, m, h, w, Q, q;
    y = {
        class: "large-question-list"
    }, m = {
        class: "q-title"
    }, h = {
        class: "show-title"
    }, w = {
        class: "q-desc"
    }, Q = {
        class: "q-num pt-3"
    }, q = [ "onClick" ], S = $({
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
            },
            questionShowWay: {
                type: String,
                default: "1"
            }
        },
        emits: [ "update:form", "update:activeInfo", "update:activeId", "chooseQuestionIdNow" ],
        setup(A, {
            expose: T,
            emit: k
        }) {
            j();
            const l = k, r = A, b = v({
                get: () => r.form.paperParts || [],
                set: e => {
                    l("update:form", {
                        ...r.form,
                        paperParts: e || [ {
                            partName: "第一大题",
                            partDesc: "",
                            paperQuestionList: [],
                            partScore: 0
                        } ]
                    });
                }
            }), C = v({
                get: () => r.activeId,
                set: e => {
                    l("update:activeId", e);
                }
            }), f = v({
                get: () => r.activeInfo,
                set: e => {
                    l("update:activeInfo", e);
                }
            }), E = D({}), o = F({
                index: {}
            });
            function L(e, s) {
                r.questionShowWay === "0" && (o.index = {}, o.index[e.id] = !0), 
                f.value.index !== s && function(t, i) {
                    C.value || (f.value.index === t ? (f.value = {
                        index: t,
                        type: i
                    }, i && E.value[`${i}Ref-${t}`].focus()) : f.value = {
                        index: t,
                        type: ""
                    });
                }(s), e.id && setTimeout(() => {
                    l("chooseQuestionIdNow", e.id);
                }, 1);
            }
            function N(e, s) {
                let t = 0;
                return (e.paperQuestionList || []).forEach(i => {
                    t += Math.round(10 * (i.paperQuestion.questionScore || 0)) / 10;
                }), Math.round(10 * t) / 10;
            }
            function P(e) {
                if (e.id) return o.index[e.id] === !0 ? "haveActive" : "";
            }
            function W(e) {
                var t, i;
                if (e.paperQuestion.questionType === "4") {
                    let n = !1;
                    return e.paperQuestion.candidateAnswer.forEach(a => {
                        n += a.candidateAnswer === "";
                    }), !(n > 0);
                }
                if (e.paperQuestion.questionType === "8" || e.paperQuestion.questionType === "10") {
                    let n = !1;
                    return e.paperQuestion.subQuestions.forEach(a => {
                        a.questionType === "4" ? a.candidateAnswer.forEach(x => {
                            n += x.candidateAnswer === "";
                        }) : n += a.candidateAnswer === null || a.candidateAnswer === void 0 || typeof a.candidateAnswer == "string" && a.candidateAnswer.trim() === "" || Array.isArray(a.candidateAnswer) && a.candidateAnswer.length === 0;
                    }), !(n > 0);
                }
                if (e.paperQuestion.questionType === "20") return ((t = e.paperQuestion) == null ? void 0 : t.solutionContentText) !== ((i = e.paperQuestion) == null ? void 0 : i.initialCodeArea);
                const s = e.paperQuestion.candidateAnswer;
                return !(s == null || typeof s == "string" && s.trim() === "" || Array.isArray(s) && s.length === 0);
            }
            return T({
                initAction: e => {
                    r.questionShowWay === "0" && e && (o.index = {}, o.index[e] = !0);
                }
            }), (e, s) => (u(), d("div", y, [ (u(!0), d(g, null, _(b.value, (t, i) => (u(), 
            d("div", {
                class: "large-question",
                key: i
            }, [ p("div", m, [ p("div", h, c(t.partName) + " （共 " + c((t.paperQuestionList || []).length) + " 题，共 " + c(N(t)) + " 分 ）", 1) ]), p("div", w, [ p("div", {
                class: I([ "show-desc", {
                    "empty-desc": !t.partDesc
                } ])
            }, c(t.partDesc || ""), 3) ]), p("div", Q, [ (u(!0), d(g, null, _(t.paperQuestionList, (n, a) => (u(), 
            d("div", {
                key: a,
                onClick: M(x => L(n, i), [ "stop" ]),
                class: I([ "q-num-box", "pointer", W(n) ? "is-q-active" : "", n.paperQuestion.markFlag ? "is-mark" : "", P(n), A.questionShowWay === "1" ? "num-hover" : "" ])
            }, c(a + 1), 11, q))), 128)) ]) ]))), 128)) ]));
        }
    }, [ [ "__scopeId", "data-v-09d94197" ] ]);
});

export {
    z as __tla,
    S as default
};