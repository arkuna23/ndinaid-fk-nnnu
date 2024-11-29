import {
    a0 as C,
    e as D,
    U as k,
    o as d,
    c as l,
    F as q,
    y as S,
    z as L,
    t as b,
    B as v,
    D as E,
    H as M,
    __tla as z
} from "./index-6c08ea4c.js";

import {
    _ as B
} from "./_plugin-vue_export-helper-1b428a4d.js";

let w, H = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})() ]).then(async () => {
    let f, h, Q, y, x;
    f = {
        class: "large-question-list"
    }, h = {
        key: 0,
        class: "q-title"
    }, Q = {
        class: "show-title"
    }, y = {
        class: "q-num pt-3"
    }, x = [ "onClick" ], w = B({
        __name: "largeQuestionPreview",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            markType: {
                type: String,
                default: ""
            }
        },
        emits: [ "update:form", "update:activeInfo", "update:activeId", "chooseQuestionIdNow" ],
        setup(A, {
            expose: F,
            emit: I
        }) {
            const _ = I, T = A, {
                form: g,
                markType: j
            } = C(T), c = D({
                get: () => g.value.paperParts || [],
                set: e => {
                    _("update:form", {
                        ...g.value,
                        paperParts: e || [ {
                            partName: "第一大题",
                            partDesc: "",
                            paperQuestionList: [],
                            partScore: 0
                        } ]
                    });
                }
            }), u = k({
                index: {}
            });
            function N(e, i) {
                let t = 0;
                return (e.paperQuestionList || []).forEach(s => {
                    t += Math.round(10 * (s.paperQuestion.questionScore || 0)) / 10;
                }), Math.round(10 * t) / 10;
            }
            k({
                index: {}
            });
            const P = e => e.id && u.index[e.id] === !0 ? "haveActive" : "", R = e => {
                var n;
                let i = e.paperQuestion || {}, {
                    candidateScore: t,
                    subQuestions: s
                } = i;
                if (Object.keys(i).length === 0) return "";
                {
                    let o = a => [ "", null, void 0 ].includes(a.markrResults), p = a => [ "", null, void 0 ].includes(a);
                    return s && s.length > 0 ? s.find(a => {
                        var r;
                        return [ "4" ].includes(a.questionType) ? (r = a.candidateAnswer) == null ? void 0 : r.some(o) : p(a.candidateScore);
                    }) ? "" : "haveRead" : [ "4" ].includes(i.questionType) ? (n = i.candidateAnswer) != null && n.every(a => !o(a)) ? "haveRead" : "" : p(t) ? "" : "haveRead";
                }
            }, O = e => {
                if ([ "2", "3" ].includes(j.value)) {
                    let i = e.paperQuestion || {}, {
                        questionScore: t,
                        candidateScore: s,
                        subQuestions: n
                    } = i;
                    if (Object.keys(i).length === 0) return "";
                    {
                        let o = (r, m) => parseFloat(r == null ? void 0 : r.toFixed(1)) === parseFloat(m == null ? void 0 : m.toFixed(1)), p = () => n && n.length > 0 ? !!n.find(r => !o(r.questionScore, r.candidateScore)) : !o(t, s), a = u.index[e.id] ? "haveErrorActive" : "errorAlert";
                        return p() ? a : "";
                    }
                }
                return "";
            };
            return F({
                initAction: () => {
                    var i, t, s;
                    let e = (i = c.value[0]) != null && i.paperQuestionList && ((t = c.value[0]) != null && t.paperQuestionList[0]) ? (s = c.value[0]) == null ? void 0 : s.paperQuestionList[0] : {};
                    e.id && (u.index = {}, u.index[e.id] = !0);
                }
            }), (e, i) => (d(), l("div", f, [ (d(!0), l(q, null, S(c.value, (t, s) => (d(), 
            l("div", {
                key: s,
                class: L([ "large-question" ])
            }, [ [ null, void 0, "" ].includes(t.paperQuestionList) ? E("", !0) : (d(), 
            l("div", h, [ b("div", Q, v(t.partName) + " （共 " + v((t.paperQuestionList || []).length) + " 题，共 " + v(N(t)) + " 分 ） ", 1) ])), b("div", y, [ (d(!0), 
            l(q, null, S(t.paperQuestionList, (n, o) => (d(), l("div", {
                key: o,
                class: L([ "num-box", O(n), R(n), P(n) ]),
                onClick: M(p => function(a, r) {
                    a.id && (u.index = {}, u.index[a.id] = !0, setTimeout(() => {
                        _("chooseQuestionIdNow", a);
                    }, 1));
                }(n), [ "stop" ])
            }, v(o + 1), 11, x))), 128)) ]) ]))), 128)) ]));
        }
    }, [ [ "__scopeId", "data-v-0880f474" ] ]);
});

export {
    H as __tla,
    w as default
};