import {
    p as ve,
    b8 as me,
    r as o,
    e as ce,
    w as fe,
    f as _e,
    aT as ge,
    o as X,
    c as Y,
    t as s,
    k as i,
    a as n,
    l as w,
    A as y,
    G as V,
    H as pe,
    m as K,
    z as W,
    B as be,
    v as Ce,
    n as he,
    P as xe,
    O as Te,
    Q as we,
    bs as ye,
    bq as Le,
    J as Ne,
    a9 as Ve,
    R as Ae,
    S as Ie,
    __tla as Me
} from "./index-6c08ea4c.js";

import {
    _ as Re,
    __tla as Ue
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    M as Z,
    __tla as Pe
} from "./myQuestionBank-a9dcc9db.js";

import {
    D as ke,
    __tla as qe
} from "./dict-c5825220.js";

import {
    _ as Fe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let $, He = Promise.all([ (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    let _, A, I, M, R, U, P, k, q, F, H, O, S, E, z, G, Q;
    _ = g => (Ae("data-v-c7f5634d"), g = g(), Ie(), g), A = {
        class: "qusetion-info"
    }, I = {
        class: "info-item"
    }, M = _(() => s("div", {
        class: "label"
    }, "语言类型", -1)), R = {
        class: "value"
    }, U = {
        class: "info-item"
    }, P = [ "innerHTML" ], k = {
        class: "info-item mb-2"
    }, q = _(() => s("div", {
        class: "label"
    }, "代码区", -1)), F = {
        class: "value"
    }, H = {
        class: "info-item mb-2"
    }, O = _(() => s("div", {
        class: "label"
    }, "调试", -1)), S = {
        class: "value"
    }, E = {
        class: "console-box info-box"
    }, z = _(() => s("div", {
        class: "info-header"
    }, [ s("div", {
        class: W([ "title pointer is-active" ])
    }, "控制台") ], -1)), G = {
        class: "info-cont"
    }, Q = {
        class: "info-footer"
    }, $ = Fe({
        __name: "type20",
        props: {
            form: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "update:form", "answerChange" ],
        setup(g, {
            emit: ee
        }) {
            const te = ve();
            me();
            const j = ee, f = g, L = o(null), d = o("输入"), r = o(""), h = o(""), p = o(""), x = o(""), b = o(!1), u = o({
                loadingList: [],
                loadingTimes: {}
            }), ae = o({
                solutionContentText: [ {
                    required: !0,
                    message: "请输入代码区内容",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ]
            }), t = ce({
                get: () => f.form,
                set: a => {
                    j("update:form", a);
                }
            }), B = o(!1);
            fe(t.value, a => {
                B.value && (t.value.candidateAnswer = T(t.value.solutionContentText || ""));
            }, {
                deep: !0,
                immediate: !0
            });
            const le = () => {
                L.value.validateField([ "solutionContentText" ], a => {
                    a ? se(r.value) : te.warning("‘代码区’ 不能为空！");
                });
            }, se = (a, e) => {
                b.value = !0;
                let m = {
                    mainContent: T(t.value.mainContentText),
                    solutionContent: T(t.value.solutionContentText),
                    singleFilePrograms: !1,
                    languageId: t.value.languageId,
                    stdin: T(a)
                };
                x.value = "", Z.submissionsCode(m).then(l => {
                    p.value = "", D(l, e, 1);
                });
            };
            function D(a, e, m = 1) {
                u.value.loadingTimes = m, Z.getSubmissions(a).then(l => {
                    l.status_id === "1" || l.status_id === "2" ? m === 15 ? (e ? (u.value.loadingList = u.value.loadingList.filter(c => c !== e), 
                    t.value.testCases[Number(e)].out = "服务器繁忙，请稍候重试", t.value.testCases[Number(e)].status = "20") : (x.value = r.value, 
                    p.value = "20", h.value = "服务器繁忙，请稍候重试", d.value = "输出"), b.value = !1) : setTimeout(() => {
                        D(a, e, m + 1);
                    }, 2e3) : l.status_id === "3" ? (e ? (u.value.loadingList = u.value.loadingList.filter(c => c !== e), 
                    t.value.testCases[Number(e)].out = v(l.stdout), t.value.testCases[Number(e)].status = l.status_id) : (x.value = r.value, 
                    p.value = l.status_id, h.value = v(l.stdout), d.value = "输出"), 
                    b.value = !1) : (e ? (u.value.loadingList = u.value.loadingList.filter(c => c !== e), 
                    t.value.testCases[Number(e)].out = v(l.compile_output), t.value.testCases[Number(e)].status = l.status_id) : (x.value = r.value, 
                    p.value = l.status_id, h.value = v(l.compile_output), d.value = "输出"), 
                    b.value = !1);
                }).catch(() => {
                    e && (u.value.loadingList = u.value.loadingList.filter(l => l !== e), 
                    t.value.testCases[Number(e)].out = "请求失败，请重试", t.value.testCases[Number(e)].status = "20");
                });
            }
            function v(a) {
                return a && decodeURIComponent(escape(window.atob(a))) || "";
            }
            function T(a) {
                return a && window.btoa(unescape(encodeURIComponent(a))) || "";
            }
            let N = "";
            function ne(a, e) {
                a === "blur" && N != f.form.candidateAnswer && (N = f.form.candidateAnswer, 
                j("answerChange", f.form.candidateAnswer));
            }
            return _e(() => {
                (function(a = {}) {
                    L.value.resetFields(), t.value.solutionContentText = v(a.candidateAnswer), 
                    t.value.initialCodeArea = v(a.solutionContent), t.value.mainContentText = v(a.mainContent), 
                    t.value.testCases = a.testCases || [], t.value.languageId = (a.langId || "62") + "", 
                    he(() => {
                        B.value = !0;
                    });
                })(t.value), N = t.value.candidateAnswer;
            }), (a, e) => {
                const m = Re, l = xe, c = ge("ComCodeMirror"), ue = Te, oe = we, J = ye, ie = Le, de = Ne, re = Ve;
                return X(), Y("div", A, [ s("div", I, [ M, s("div", R, [ i(m, {
                    type: n(ke).QUESTION_PROGRAM_TYPE,
                    value: f.form.langId
                }, null, 8, [ "type", "value" ]) ]) ]), s("div", U, [ s("div", {
                    class: "value",
                    innerHTML: f.form.stem
                }, null, 8, P) ]), s("div", k, [ q, i(oe, {
                    model: n(t),
                    ref_key: "questionFormRef",
                    ref: L,
                    rules: n(ae),
                    inline: !1,
                    onSubmit: e[1] || (e[1] = pe(() => {}, [ "prevent" ]))
                }, {
                    default: w(() => [ i(ue, {
                        prop: "solutionContentText"
                    }, {
                        default: w(() => [ y(i(l, {
                            "model-value": n(t).solutionContentText
                        }, null, 8, [ "model-value" ]), [ [ V, !1 ] ]), s("div", F, [ i(c, {
                            placeholder: "",
                            modelValue: n(t).solutionContentText,
                            "onUpdate:modelValue": e[0] || (e[0] = C => n(t).solutionContentText = C),
                            defaultHeight: 200,
                            onCommonEvents: ne
                        }, null, 8, [ "modelValue" ]) ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]) ]), s("div", H, [ O, s("div", S, [ s("div", E, [ z, y((X(), 
                Y("div", G, [ y(i(l, {
                    modelValue: n(r),
                    "onUpdate:modelValue": e[2] || (e[2] = C => K(r) ? r.value = C : null),
                    placeholder: "请输入执行语句",
                    type: "textarea",
                    maxlength: "1000",
                    "show-word-limit": "",
                    resize: "none"
                }, null, 8, [ "modelValue" ]), [ [ V, n(d) === "输入" ] ]), y(s("div", {
                    class: W([ n(p) === "3" ? "sucmsg" : "errmsg", "msgbox" ])
                }, be(n(h)), 3), [ [ V, n(d) === "输出" ] ]) ])), [ [ re, n(b) ] ]), s("div", Q, [ i(ie, {
                    modelValue: n(d),
                    "onUpdate:modelValue": e[3] || (e[3] = C => K(d) ? d.value = C : null),
                    class: "radio-btn"
                }, {
                    default: w(() => [ i(J, {
                        label: "输入"
                    }), i(J, {
                        label: "输出"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), i(de, {
                    type: "primary",
                    disabled: n(u).loadingList.length > 0,
                    class: "submit-btn",
                    onClick: le
                }, {
                    default: w(() => [ Ce("提交运行") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ]) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-c7f5634d" ] ]);
});

export {
    He as __tla,
    $ as default
};