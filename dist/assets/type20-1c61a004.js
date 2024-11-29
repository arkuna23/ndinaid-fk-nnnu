import {
    p as ea,
    r as f,
    a0 as aa,
    aT as la,
    o as d,
    c as n,
    t as a,
    k as u,
    a as l,
    A as h,
    G as M,
    z as O,
    m as Be,
    B as x,
    D as b,
    F as Ie,
    y as Pe,
    l as L,
    C as Re,
    v as R,
    P as ta,
    O as sa,
    K as ia,
    bs as oa,
    bq as ua,
    J as da,
    cK as na,
    a9 as ra,
    R as ma,
    S as va,
    __tla as ca
} from "./index-6c08ea4c.js";

import {
    _ as pa,
    __tla as fa
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    f as qe,
    __tla as ba
} from "./formatTime-de6f1520.js";

import {
    h as ga,
    a as _a,
    b as ya
} from "./keyboardDisable-3c8e0d58.js";

import {
    M as ze,
    __tla as ha
} from "./myQuestionBank-a9dcc9db.js";

import {
    D as ka,
    __tla as Ca
} from "./dict-c5825220.js";

import {
    _ as Va
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

let Ee, wa = Promise.all([ (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})() ]).then(async () => {
    let m, q, z, E, F, Q, K, $, j, D, G, J, Y, W, X, Z, ee, ae, le, te, se, ie, oe, ue, de, ne, re, me, ve, ce, pe, fe, be, ge, _e, ye, he, ke, Ce, Ve, we, xe, Le, Se, Te, Ue, Me;
    m = S => (ma("data-v-85932d38"), S = S(), va(), S), q = {
        class: "qusetion-info"
    }, z = {
        class: "info-item"
    }, E = m(() => a("div", {
        class: "label"
    }, "语言类型", -1)), F = {
        class: "value"
    }, Q = {
        class: "info-item"
    }, K = {
        class: "label"
    }, $ = [ "innerHTML" ], j = {
        class: "info-item mb-2"
    }, D = m(() => a("div", {
        class: "label"
    }, "主函数", -1)), G = {
        class: "value"
    }, J = {
        class: "info-item mb-2"
    }, Y = m(() => a("div", {
        class: "label"
    }, "考生答案", -1)), W = {
        class: "value"
    }, X = {
        class: "info-item mb-2"
    }, Z = m(() => a("div", {
        class: "label"
    }, "参考答案", -1)), ee = {
        class: "value"
    }, ae = {
        key: 0,
        class: "info-item mb-2"
    }, le = m(() => a("div", {
        class: "label"
    }, "辅助验证区", -1)), te = {
        class: "console-box info-box value"
    }, se = {
        class: "info-header"
    }, ie = {
        key: 0,
        class: "info-cont"
    }, oe = {
        key: 1,
        class: "info-cont"
    }, ue = {
        class: "test-list"
    }, de = {
        class: "item-title"
    }, ne = {
        class: "info-footer"
    }, re = {
        key: 1,
        class: "item-result"
    }, me = {
        class: "value"
    }, ve = {
        class: "info-item"
    }, ce = m(() => a("div", {
        class: "label"
    }, "解析", -1)), pe = [ "innerHTML" ], fe = {
        key: 0,
        class: "info-item"
    }, be = m(() => a("div", {
        class: "label"
    }, "试题批语", -1)), ge = {
        class: "value"
    }, _e = {
        key: 1,
        class: "info-item"
    }, ye = m(() => a("div", {
        class: "label"
    }, "批阅人", -1)), he = {
        class: "value"
    }, ke = {
        key: 3,
        class: "py-2 pr-5 mt10 qusetion-bg-pink"
    }, Ce = {
        class: "info-item"
    }, Ve = m(() => a("div", {
        class: "label"
    }, "改阅人", -1)), we = {
        class: "value"
    }, xe = {
        class: "info-item"
    }, Le = m(() => a("div", {
        class: "label"
    }, "改阅原因", -1)), Se = {
        class: "value"
    }, Te = {
        key: 4,
        class: "item-input"
    }, Ue = m(() => a("div", {
        class: "label"
    }, "本题批语", -1)), Me = {
        class: "value"
    }, Ee = Va({
        __name: "type20",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            showType: {
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
            },
            hideQuestionStem: {
                type: Boolean,
                default: !1
            },
            markType: {
                type: String,
                default: ""
            }
        },
        emits: [ "computedScore" ],
        setup(S, {
            emit: Fe
        }) {
            const Oe = ea(), p = f("1"), k = f(""), A = f(""), T = f(""), H = f(""), g = f(!1), _ = f("输入"), r = f({
                loadingList: [],
                loadingTimes: {}
            }), Qe = Fe, c = S, {
                hideQuestionStem: Ke,
                form: s,
                markType: U
            } = aa(c);
            function C(o) {
                return o && decodeURIComponent(escape(window.atob(o))) || "";
            }
            function $e(o) {
                return o && window.btoa(unescape(encodeURIComponent(o))) || "";
            }
            const N = f(0), je = () => {
                let o = s.value.candidateScore;
                o != N.value && Qe("computedScore", {
                    type: 2,
                    newCandidateScore: parseFloat(o),
                    oldCandidateScore: N.value
                });
            }, De = () => {
                N.value = s.value.candidateScore ?? 0;
            }, Ge = () => {
                p.value === "2" ? Je() : s.value.mainContent && s.value.standardAnswer ? Ae(k.value) : Oe.warning("‘主函数’ 和 ‘代码区’ 不能为空！");
            }, Je = () => {
                (s.value.testCases || []).forEach((o, e) => {
                    o.in && o.expectOut ? setTimeout(() => {
                        Ae(o.in, e + "");
                    }, 100 * e) : Oe.warning(`\u2018\u7528\u4F8B${e + 1}\u2019 \u9884\u671F\u7ED3\u679C \u4E0D\u80FD\u4E3A\u7A7A\uFF01`);
                });
            }, Ae = (o, e) => {
                e ? r.value.loadingList.indexOf(e) < 0 && r.value.loadingList.push(e) : g.value = !0;
                let V = {
                    mainContent: s.value.mainContent,
                    solutionContent: s.value.candidateAnswer,
                    singleFilePrograms: !1,
                    languageId: (s.value.langId || "62") + "",
                    stdin: $e(o)
                };
                H.value = "", ze.submissionsCode(V).then(i => {
                    T.value = "", setTimeout(() => {
                        He(i, e, 1);
                    }, 1e3);
                }).catch(() => {
                    g.value = !1;
                });
            };
            function He(o, e, V = 1) {
                r.value.loadingTimes = V, ze.getSubmissions(o).then(i => {
                    i.status_id === "1" || i.status_id === "2" ? V === 15 ? (e ? (r.value.loadingList = r.value.loadingList.filter(v => v !== e), 
                    s.value.testCases[Number(e)].out = "服务器繁忙，请稍候重试", s.value.testCases[Number(e)].status = "20") : (H.value = k.value, 
                    T.value = "20", A.value = "服务器繁忙，请稍候重试", _.value = "输出"), g.value = !1) : setTimeout(() => {
                        He(o, e, V + 1);
                    }, 2e3) : i.status_id === "3" ? (e ? (r.value.loadingList = r.value.loadingList.filter(v => v !== e), 
                    s.value.testCases[Number(e)].out = C(i.stdout), s.value.testCases[Number(e)].status = i.status_id) : (H.value = k.value, 
                    T.value = i.status_id, A.value = C(i.stdout), _.value = "输出"), 
                    g.value = !1) : (e ? (r.value.loadingList = r.value.loadingList.filter(v => v !== e), 
                    s.value.testCases[Number(e)].out = C(i.compile_output || i.stdout), 
                    s.value.testCases[Number(e)].status = i.status_id) : (H.value = k.value, 
                    T.value = i.status_id, A.value = C(i.compile_output || i.stdout), 
                    _.value = "输出"), g.value = !1);
                }).catch(() => {
                    e && (g.value = !1, r.value.loadingList = r.value.loadingList.filter(i => i !== e), 
                    s.value.testCases[Number(e)].out = "请求失败，请重试", s.value.testCases[Number(e)].status = "20");
                });
            }
            return (o, e) => {
                const V = pa, i = la("ComCodeMirror"), v = ta, B = sa, Ye = ia, Ne = oa, We = ua, Xe = da, Ze = na, I = ra;
                return d(), n("div", q, [ a("div", z, [ E, a("div", F, [ u(V, {
                    type: l(ka).QUESTION_PROGRAM_TYPE,
                    value: c.form.langId
                }, null, 8, [ "type", "value" ]) ]) ]), h(a("div", Q, [ h(a("div", K, "题干", 512), [ [ M, !c.inPageView ] ]), a("div", {
                    class: "value",
                    innerHTML: c.form.stem
                }, null, 8, $) ], 512), [ [ M, !l(Ke) ] ]), a("div", j, [ D, a("div", G, [ u(i, {
                    defaultHeight: 200,
                    disabled: !0,
                    "model-value": C(c.form.mainContent),
                    placeholder: ""
                }, null, 8, [ "model-value" ]) ]) ]), a("div", J, [ Y, a("div", W, [ u(i, {
                    defaultHeight: 200,
                    disabled: !0,
                    "model-value": C(c.form.candidateAnswer),
                    placeholder: ""
                }, null, 8, [ "model-value" ]) ]) ]), a("div", X, [ Z, a("div", ee, [ u(i, {
                    defaultHeight: 200,
                    disabled: !0,
                    "model-value": C(c.form.standardAnswer),
                    placeholder: ""
                }, null, 8, [ "model-value" ]) ]) ]), [ "0", "1", "2" ].includes(l(U)) ? (d(), 
                n("div", ae, [ le, a("div", te, [ a("div", se, [ a("div", {
                    class: O([ "title pointer", l(p) === "1" ? "is-active" : "" ]),
                    onClick: e[0] || (e[0] = () => p.value = "1")
                }, "控制台", 2), a("div", {
                    class: O([ "title pointer", l(p) === "2" ? "is-active" : "" ]),
                    onClick: e[1] || (e[1] = () => p.value = "2")
                }, "测试用例", 2) ]), l(p) === "1" ? h((d(), n("div", ie, [ h(u(v, {
                    modelValue: l(k),
                    "onUpdate:modelValue": e[2] || (e[2] = t => Be(k) ? k.value = t : null),
                    resize: "none",
                    maxlength: "1000",
                    placeholder: "请输入执行语句",
                    "show-word-limit": "",
                    type: "textarea"
                }, null, 8, [ "modelValue" ]), [ [ M, l(_) === "输入" ] ]), h(a("div", {
                    class: O([ l(T) === "3" ? "sucmsg" : "errmsg", "msgbox" ])
                }, x(l(A)), 3), [ [ M, l(_) === "输出" ] ]) ])), [ [ I, l(g) ] ]) : b("", !0), l(p) === "2" ? h((d(), 
                n("div", oe, [ a("div", ue, [ (d(!0), n(Ie, null, Pe(l(s).testCases, (t, y) => h((d(), 
                n("div", {
                    key: y,
                    class: O([ "test-item", {
                        "suc-item": t.status === "3" && t.out === t.expectOut,
                        "err-item": t.status && t.status !== "3"
                    } ])
                }, [ a("div", de, " 用例" + x(y + 1) + ": ", 1), u(B, {
                    prop: "testCases." + y + ".in",
                    label: "输入",
                    "label-width": "80px",
                    style: {
                        border: "0",
                        "margin-bottom": "20px",
                        padding: "0"
                    }
                }, {
                    default: L(() => [ u(v, {
                        modelValue: t.in,
                        "onUpdate:modelValue": w => t.in = w,
                        readonly: ""
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                    _: 2
                }, 1032, [ "prop" ]), u(B, {
                    prop: "testCases." + y + ".expectOut",
                    label: "预期结果",
                    "label-width": "80px",
                    style: {
                        border: "0",
                        "margin-bottom": "20px",
                        padding: "0"
                    }
                }, {
                    default: L(() => [ u(v, {
                        modelValue: t.expectOut,
                        "onUpdate:modelValue": w => t.expectOut = w,
                        readonly: ""
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                    _: 2
                }, 1032, [ "prop" ]), u(B, {
                    prop: "testCases." + y + ".out",
                    label: "输出",
                    "label-width": "80px",
                    style: {
                        border: "0",
                        "margin-bottom": "20px",
                        padding: "0"
                    }
                }, {
                    default: L(() => [ t.out ? (d(), Re(Ye, {
                        key: 0,
                        content: t.out,
                        effect: "dark",
                        placement: "top"
                    }, {
                        default: L(() => [ u(v, {
                            modelValue: t.out,
                            "onUpdate:modelValue": w => t.out = w,
                            readonly: ""
                        }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                        _: 2
                    }, 1032, [ "content" ])) : (d(), Re(v, {
                        key: 1,
                        modelValue: t.out,
                        "onUpdate:modelValue": w => t.out = w,
                        readonly: ""
                    }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) ]),
                    _: 2
                }, 1032, [ "prop" ]) ], 2)), [ [ I, l(r).loadingList.indexOf(y + "") >= 0 ] ])), 128)) ]) ])), [ [ I, l(g) ] ]) : b("", !0), a("div", ne, [ h(u(We, {
                    modelValue: l(_),
                    "onUpdate:modelValue": e[3] || (e[3] = t => Be(_) ? _.value = t : null),
                    class: "radio-btn"
                }, {
                    default: L(() => [ u(Ne, {
                        label: "输入",
                        value: "输入"
                    }), u(Ne, {
                        label: "输出",
                        value: "输出"
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]), [ [ M, l(p) === "1" ] ]), u(Xe, {
                    disabled: l(r).loadingList.length > 0 || l(p) === "2" && (l(s).testCases || []).length === 0,
                    class: "submit-btn",
                    type: "primary",
                    onClick: Ge
                }, {
                    default: L(() => [ R("提交运行 ") ]),
                    _: 1
                }, 8, [ "disabled" ]) ]) ]) ])) : b("", !0), [ "0", "1", "2" ].includes(l(U)) ? (d(), 
                n("div", re, [ a("div", me, [ R(" 得分 "), u(Ze, {
                    modelValue: l(s).candidateScore,
                    "onUpdate:modelValue": e[4] || (e[4] = t => l(s).candidateScore = t),
                    modelModifiers: {
                        trim: !0
                    },
                    controls: !1,
                    max: l(s).questionScore,
                    min: 0,
                    precision: 1,
                    class: "markStyle",
                    size: "large",
                    onBlur: je,
                    onCompositionend: e[5] || (e[5] = t => l(ga)(t)),
                    onCompositionstart: e[6] || (e[6] = t => l(_a)(t)),
                    onFocus: De,
                    onKeydown: e[7] || (e[7] = t => l(ya)(t))
                }, null, 8, [ "modelValue", "max" ]), R(" 分 ") ]) ])) : b("", !0), c.hideAnswer ? b("", !0) : (d(), 
                n("div", {
                    key: 2,
                    class: O(c.inPageView ? "py-2 pr-5 mt-2 qusetion-bg-gray" : "")
                }, [ a("div", ve, [ ce, a("div", {
                    class: "value",
                    innerHTML: c.form.analysis ?? "--"
                }, null, 8, pe) ]), [ "2", "3" ].includes(l(U)) ? (d(), n("div", fe, [ be, a("div", ge, x(l(s).remark ?? "--"), 1) ])) : b("", !0), l(s).markerRemarks.length > 0 ? (d(), 
                n("div", _e, [ ye, a("div", he, x((P = l(s).markerRemarks, P.length > 0 ? P.map(t => `${t.marker ?? "--"}\uFF0C\u4E8E${qe(t.markerTime) ?? "--"}\u6279\u9605`).join("；") : "--")), 1) ])) : b("", !0) ], 2)), [ "3", "2" ].includes(l(U)) && l(s).changeMarkers.length > 0 ? (d(), 
                n("div", ke, [ (d(!0), n(Ie, null, Pe(l(s).changeMarkers, (t, y) => (d(), 
                n("div", {
                    key: y
                }, [ a("div", Ce, [ Ve, a("div", we, x(t.changeMarker ?? "--") + "，于" + x(l(qe)(t.changeMarkerTime) ?? "--") + "改阅", 1) ]), a("div", xe, [ Le, a("div", Se, x(t.changeRevision ?? "--"), 1) ]) ]))), 128)) ])) : b("", !0), [ "0", "1" ].includes(l(U)) ? (d(), 
                n("div", Te, [ Ue, a("div", Me, [ u(v, {
                    modelValue: l(s).remark,
                    "onUpdate:modelValue": e[8] || (e[8] = t => l(s).remark = t),
                    maxlength: "200",
                    placeholder: "请输入试题批语（选填）",
                    "show-word-limit": "",
                    size: "large"
                }, null, 8, [ "modelValue" ]) ]) ])) : b("", !0) ]);
                var P;
            };
        }
    }, [ [ "__scopeId", "data-v-85932d38" ] ]);
});

export {
    wa as __tla,
    Ee as default
};