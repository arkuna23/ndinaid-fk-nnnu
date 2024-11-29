import {
    b8 as oe,
    a0 as ue,
    e as y,
    w as re,
    r as ce,
    o as p,
    c as v,
    v as K,
    t as c,
    B as m,
    a as f,
    D as G,
    F as H,
    y as J,
    z as E,
    k as x,
    dX as de,
    H as r,
    c5 as pe,
    e0 as ve,
    A as _,
    G as M,
    I as X,
    J as me,
    P as fe,
    __tla as he
} from "./index-6c08ea4c.js";

import {
    _ as ye
} from "./_plugin-vue_export-helper-1b428a4d.js";

let W, xe = Promise.all([ (() => {
    try {
        return he;
    } catch {}
})() ]).then(async () => {
    let w, F, S, V, L, N, D, P, $, z, B, U;
    w = {
        class: "large-question-list"
    }, F = {
        key: 0,
        class: "info-desc"
    }, S = {
        class: "neu-color-blue mr-2"
    }, V = {
        class: "pl-2"
    }, L = {
        class: "neu-color-blue"
    }, N = [ "onClick" ], D = {
        class: "q-title"
    }, P = [ "onClick" ], $ = {
        class: "q-desc"
    }, z = [ "onClick" ], B = {
        key: 0,
        class: "q-num pt-3"
    }, U = [ "onClick" ], W = ye({
        __name: "largeQuestion",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isRandom: {
                type: [ Boolean, String ],
                default: !1
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
            paperCompositionType: {
                type: String,
                default: "1"
            },
            examRule: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "update:form", "update:activeInfo", "update:activeId", "chooseQuestionIdNow", "handleMove" ],
        setup(Y, {
            emit: Z
        }) {
            oe();
            const h = Z, d = Y, {
                paperCompositionType: k,
                examRule: C
            } = ue(d), o = y({
                get: () => d.form.paperParts || [],
                set: e => {
                    h("update:form", {
                        ...d.form,
                        paperParts: e || [ {
                            partName: "第一大题",
                            partDesc: "",
                            paperQuestionList: [],
                            partScore: 0
                        } ]
                    });
                }
            }), I = y({
                get: () => d.activeId,
                set: e => {
                    h("update:activeId", e);
                }
            }), s = y({
                get: () => d.activeInfo,
                set: e => {
                    h("update:activeInfo", e);
                }
            });
            re(() => s.value, () => {}, {
                deep: !0,
                immediate: !0
            });
            const R = ce({}), ee = e => {
                var a;
                let t = 0;
                return (a = C.value[e]) == null || a.forEach(n => {
                    t += b(n);
                }), t;
            }, te = e => {
                var a;
                let t = 0;
                return (a = C.value[e]) == null || a.forEach(n => {
                    t += parseFloat((b(n) * n.questionScore).toFixed(1));
                }), parseFloat(t.toFixed(1));
            }, ae = y(() => {
                var t;
                let e = 0;
                return (t = C.value) == null || t.forEach(a => {
                    a == null || a.forEach(n => {
                        e += b(n);
                    });
                }), e;
            }), le = y(() => {
                var t;
                let e = 0;
                return (t = C.value) == null || t.forEach(a => {
                    a == null || a.forEach(n => {
                        e += parseFloat((b(n) * n.questionScore).toFixed(1));
                    });
                }), parseFloat(e.toFixed(1));
            }), b = e => {
                switch (e.specialVariable) {
                  case !0:
                    let t = 0;
                    for (let a in e.questionRandomMap) e.questionRandomMap.hasOwnProperty(a) && (t += e.questionRandomMap[a]);
                    return t;

                  case !1:
                    return e.questionRandom;
                }
            };
            function O(e, t) {
                h("handleMove", e, t);
            }
            function g(e, t) {
                I.value || (s.value.index === e ? (s.value = {
                    index: e,
                    type: t
                }, t && R.value[`${t}Ref-${e}`].focus()) : s.value = {
                    index: e,
                    type: ""
                });
            }
            function se(e, t) {
                let a = 0;
                return (e.paperQuestionList || []).forEach(n => {
                    var u;
                    a += Math.round(10 * (((u = n.paperQuestion) == null ? void 0 : u.questionScore) || n.questionScore || 0)) / 10;
                }), Math.round(10 * a) / 10;
            }
            function ne() {
                let e = 0;
                return o.value.forEach(t => {
                    e += t.paperQuestionList.length;
                }), e;
            }
            function ie() {
                let e = 0;
                return o.value.map(t => {
                    let a = 0;
                    return (t.paperQuestionList || []).forEach(n => {
                        a += Math.round(10 * (n.paperQuestion.questionScore || 0)) / 10 || .1;
                    }), Math.round(10 * a) / 10;
                }).forEach(t => {
                    e += t;
                }), Math.round(10 * e) / 10;
            }
            function q() {
                var e;
                o.value[s.value.index].partName || s.value.type !== "title" || (o.value[s.value.index].partName = `\u7B2C${e = s.value.index, 
                [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一" ][e]}\u5927\u9898`), 
                s.value.type = "";
            }
            const T = (e, t, a) => {
                e && (a === "title" ? R.value[`titleRef-${t}`] = e : a === "desc" && (R.value[`descRef-${t}`] = e));
            };
            return (e, t) => {
                const a = me, n = fe;
                return p(), v("div", w, [ d.isRandom ? G("", !0) : (p(), v("div", F, [ K(" 试题总数："), c("span", S, m([ "1" ].includes(f(k)) ? ne() : ae.value), 1), c("span", V, [ K("试卷满分： "), c("span", L, m([ "1" ].includes(f(k)) ? ie() : le.value), 1) ]) ])), (p(!0), 
                v(H, null, J(o.value, (u, l) => (p(), v("div", {
                    key: l,
                    class: E([ "large-question", I.value ? "" : "pointer", {
                        "is-active": s.value.index === l,
                        hidebtns: !!s.value.type
                    } ]),
                    onClick: i => g(l, "")
                }, [ c("div", {
                    class: "btns-box",
                    onClick: t[0] || (t[0] = r(() => {}, [ "stop" ]))
                }, [ x(a, {
                    icon: f(de),
                    size: "small",
                    disabled: l === 0,
                    circle: "",
                    onClick: r(i => O("prev", l), [ "prevent" ])
                }, null, 8, [ "icon", "disabled", "onClick" ]), x(a, {
                    icon: f(pe),
                    size: "small",
                    disabled: l === o.value.length - 1,
                    circle: "",
                    onClick: r(i => O("next", l), [ "prevent" ])
                }, null, 8, [ "icon", "disabled", "onClick" ]), x(a, {
                    class: "delete-btn",
                    icon: f(ve),
                    size: "small",
                    circle: "",
                    onClick: r(i => function(Q) {
                        h("handleMove", "remove", Q);
                    }(l), [ "prevent" ])
                }, null, 8, [ "icon", "onClick" ]) ]), c("div", D, [ _(c("div", {
                    class: "show-title",
                    onClick: r(i => g(l, "title"), [ "stop" ])
                }, m(u.partName) + " （共 " + m([ "1" ].includes(f(k)) ? (u.paperQuestionList || []).length : ee(l)) + " 题，共 " + m([ "1" ].includes(f(k)) ? se(u) : te(l)) + " 分 ）", 9, P), [ [ M, !(s.value.index === l && s.value.type === "title") ] ]), _(x(n, {
                    class: "input-title",
                    ref_for: !0,
                    ref: i => T(i, l, "title"),
                    modelValue: o.value[l].partName,
                    "onUpdate:modelValue": i => o.value[l].partName = i,
                    modelModifiers: {
                        trim: !0
                    },
                    onClick: t[1] || (t[1] = r(() => {}, [ "stop" ])),
                    placeholder: "请输入大题名称",
                    maxLength: 20,
                    onKeydown: X(q, [ "enter" ]),
                    onBlur: q
                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), [ [ M, s.value.index === l && s.value.type === "title" ] ]) ]), c("div", $, [ _(c("div", {
                    class: E([ "show-desc", {
                        "empty-desc": !u.partDesc
                    } ]),
                    onClick: r(i => g(l, "desc"), [ "stop" ])
                }, m(u.partDesc || "点击输入大题说明..."), 11, z), [ [ M, !(s.value.index === l && s.value.type === "desc") ] ]), _(x(n, {
                    class: "input-desc",
                    ref_for: !0,
                    ref: i => T(i, l, "desc"),
                    modelValue: o.value[l].partDesc,
                    "onUpdate:modelValue": i => o.value[l].partDesc = i,
                    modelModifiers: {
                        trim: !0
                    },
                    placeholder: "请输入大题说明",
                    maxLength: 100,
                    type: "textarea",
                    onClick: t[2] || (t[2] = r(() => {}, [ "stop" ])),
                    onKeydown: X(q, [ "enter" ]),
                    onBlur: q
                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), [ [ M, s.value.index === l && s.value.type === "desc" ] ]) ]), d.isRandom ? G("", !0) : (p(), 
                v("div", B, [ (p(!0), v(H, null, J(u.paperQuestionList, (i, Q) => (p(), 
                v("div", {
                    key: i.id,
                    onClick: r(ke => function(j, A) {
                        s.value.index !== A && g(A), j.id && setTimeout(() => {
                            h("chooseQuestionIdNow", j.id);
                        }, 1);
                    }(i, l), [ "stop" ]),
                    class: E([ "num-box", I.value === i.id ? "is-active" : "" ])
                }, m(Q + 1), 11, U))), 128)) ])) ], 10, N))), 128)) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-efac1542" ] ]);
});

export {
    xe as __tla,
    W as default
};