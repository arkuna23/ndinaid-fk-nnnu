import {
    a0 as R,
    e as z,
    U as A,
    o as c,
    c as p,
    F as N,
    y as b,
    z as C,
    t as F,
    B as f,
    D as H,
    H as U,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    _ as J
} from "./_plugin-vue_export-helper-1b428a4d.js";

let I, K = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    let x, _, g, k, S;
    x = {
        class: "large-question-list"
    }, _ = {
        key: 0,
        class: "q-title"
    }, g = {
        class: "show-title"
    }, k = {
        class: "q-num pt-3"
    }, S = [ "onClick" ], I = J({
        __name: "largeQuestionPreview",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            markType: {
                type: String,
                default: ""
            },
            showScore: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "update:form", "update:activeInfo", "update:activeId", "chooseQuestionIdNow" ],
        setup(T, {
            expose: P,
            emit: j
        }) {
            const q = j, O = T, {
                form: w,
                markType: v,
                showScore: m
            } = R(O), h = z({
                get: () => w.value.paperParts || [],
                set: e => {
                    q("update:form", {
                        ...w.value,
                        paperParts: e || [ {
                            partName: "第一大题",
                            partDesc: "",
                            paperQuestionList: [],
                            partScore: 0
                        } ]
                    });
                }
            }), l = A({
                index: {}
            });
            function B(e, i) {
                let t = 0;
                return (e.paperQuestionList || []).forEach(s => {
                    t += Math.round(10 * (s.paperQuestion.questionScore || 0)) / 10;
                }), Math.round(10 * t) / 10;
            }
            A({
                index: {}
            });
            const D = e => (e.id && v.value !== "4" || e.id && !m.value) && l.index[e.id] === !0 ? "haveActive" : "", E = e => e.id && v.value === "4" && m.value && l.index[e.id] === !0 ? Q(e) === "haveCorrectNormal" ? "haveCorrect" : "haveActive" : "", Q = e => {
                var u;
                let i = e.paperQuestion || {}, {
                    candidateScore: t,
                    subQuestions: s
                } = i, a = [ "4" ].includes(v.value) ? "haveCorrectNormal" : "haveRead";
                if (m.value || (a = ""), Object.keys(i).length === 0) return "";
                {
                    let d = r => [ "", null, void 0 ].includes(r.markrResults), o = r => [ "", null, void 0 ].includes(r);
                    return s && s.length > 0 ? s.find(r => {
                        var n;
                        return [ "4" ].includes(r.questionType) ? (n = r.candidateAnswer) == null ? void 0 : n.some(d) : o(r.candidateScore);
                    }) ? "" : a : [ "4" ].includes(i.questionType) ? (u = i.candidateAnswer) != null && u.every(r => !d(r)) ? a : "" : o(t) ? "" : a;
                }
            }, M = e => {
                if ([ "2", "3", "4" ].includes(v.value)) {
                    let i = e.paperQuestion || {}, {
                        questionScore: t,
                        candidateScore: s,
                        subQuestions: a,
                        markFlag: u
                    } = i;
                    if (Object.keys(i).length === 0) return "";
                    {
                        let d = (n, y) => {
                            let L = parseFloat(n == null ? void 0 : n.toFixed(1)) === parseFloat(y == null ? void 0 : y.toFixed(1));
                            return [ "4" ].includes(v.value) && Q(e) !== "haveCorrectNormal" && (L = !0), 
                            L;
                        }, o = () => a && a.length > 0 ? !!a.find(n => !d(n.questionScore, n.candidateScore)) : !d(t, s), r = l.index[e.id] ? "haveErrorActive" : "errorAlert";
                        return o() && m.value ? r : "";
                    }
                }
                return "";
            };
            return P({
                initAction: () => {
                    var i, t, s;
                    let e = (i = h.value[0]) != null && i.paperQuestionList && ((t = h.value[0]) != null && t.paperQuestionList[0]) ? (s = h.value[0]) == null ? void 0 : s.paperQuestionList[0] : {};
                    e.id && (l.index = {}, l.index[e.id] = !0);
                }
            }), (e, i) => (c(), p("div", x, [ (c(!0), p(N, null, b(h.value, (t, s) => (c(), 
            p("div", {
                key: s,
                class: C([ "large-question" ])
            }, [ [ null, void 0, "" ].includes(t.paperQuestionList) ? H("", !0) : (c(), 
            p("div", _, [ F("div", g, f(t.partName) + " （共 " + f((t.paperQuestionList || []).length) + " 题，共 " + f(B(t)) + " 分 ） ", 1) ])), F("div", k, [ (c(!0), 
            p(N, null, b(t.paperQuestionList, (a, u) => (c(), p("div", {
                key: u,
                class: C([ "num-box", M(a), Q(a), D(a), E(a) ]),
                onClick: U(d => function(o, r) {
                    o.id && (l.index = {}, l.index[o.id] = !0, setTimeout(() => {
                        q("chooseQuestionIdNow", o);
                    }, 1));
                }(a), [ "stop" ])
            }, f(u + 1), 11, S))), 128)) ]) ]))), 128)) ]));
        }
    }, [ [ "__scopeId", "data-v-27d4211a" ] ]);
});

export {
    K as __tla,
    I as default
};