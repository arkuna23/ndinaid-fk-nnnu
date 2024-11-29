import {
    p as De,
    b8 as Ge,
    e as je,
    r as g,
    f as Ae,
    aT as Qe,
    o as x,
    C as P,
    l as i,
    k as o,
    t as u,
    v as y,
    A as _,
    a,
    G as V,
    c as R,
    F as be,
    y as xe,
    z,
    m as Ce,
    B as Te,
    D as he,
    H as He,
    L as Ye,
    O as Je,
    ab as Ke,
    ac as We,
    J as Xe,
    P as Ze,
    _ as el,
    K as ll,
    bs as al,
    bq as tl,
    Q as sl,
    a9 as ol,
    R as nl,
    S as ul,
    __tla as il
} from "./index-6c08ea4c.js";

import {
    _ as rl,
    __tla as dl
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import ye, {
    __tla as ml
} from "./editEditor-a03e6696.js";

import {
    D as Ve,
    d as cl,
    __tla as vl
} from "./dict-c5825220.js";

import {
    M as we,
    __tla as pl
} from "./myQuestionBank-a9dcc9db.js";

import {
    e as gl,
    __tla as _l
} from "./questionBank-6fe58de9.js";

import {
    _ as fl
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import {
    __tla as bl
} from "./Editor-ef737d2a.js";

import {
    __tla as xl
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Cl
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Tl
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

let Ue, hl = Promise.all([ (() => {
    try {
        return il;
    } catch {}
})(), (() => {
    try {
        return dl;
    } catch {}
})(), (() => {
    try {
        return ml;
    } catch {}
})(), (() => {
    try {
        return vl;
    } catch {}
})(), (() => {
    try {
        return pl;
    } catch {}
})(), (() => {
    try {
        return _l;
    } catch {}
})(), (() => {
    try {
        return bl;
    } catch {}
})(), (() => {
    try {
        return xl;
    } catch {}
})(), (() => {
    try {
        return Cl;
    } catch {}
})(), (() => {
    try {
        return Tl;
    } catch {}
})() ]).then(async () => {
    let q, B, D, G, j, A, Q, H, Y, J, K, W, X, Z, ee, le, ae, te, se, oe, ne, ue, ie, re;
    q = U => (nl("data-v-476bd535"), U = U(), ul(), U), B = {
        class: "info-item"
    }, D = q(() => u("div", {
        class: "label"
    }, "语言类型", -1)), G = {
        class: "value"
    }, j = {
        class: "label-box pr-5"
    }, A = {
        class: "label-box pr-5"
    }, Q = {
        class: "select-box mb-5"
    }, H = {
        class: "left-box info-box"
    }, Y = q(() => u("div", {
        class: "info-header"
    }, [ u("div", {
        class: "title is-active"
    }, "主函数") ], -1)), J = {
        class: "code-box"
    }, K = {
        class: "right-box info-box"
    }, W = q(() => u("div", {
        class: "info-header"
    }, [ u("div", {
        class: "title is-active"
    }, "代码区") ], -1)), X = {
        class: "code-box"
    }, Z = {
        class: "console-box info-box"
    }, ee = {
        class: "info-header"
    }, le = {
        key: 0,
        class: "info-cont"
    }, ae = {
        key: 1,
        class: "info-cont"
    }, te = {
        class: "test-list"
    }, se = q(() => u("div", {
        class: "desc"
    }, "新增用例", -1)), oe = {
        class: "item-title"
    }, ne = {
        class: "info-footer"
    }, ue = {
        class: "label-box pr-5"
    }, ie = {
        class: "code-box"
    }, re = {
        class: "label-box pr-5"
    }, Ue = fl({
        __name: "type20",
        props: {
            form: {
                type: Object,
                default: () => ({})
            },
            isPreview: {
                type: Boolean,
                default: !1
            },
            isEdit: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:form" ],
        setup(U, {
            expose: Fe,
            emit: ke
        }) {
            const E = De(), {
                proxy: N
            } = Ge(), de = ke, M = U, l = je({
                get: () => M.form,
                set: t => {
                    de("update:form", {
                        ...t,
                        solutionContent: b(t.solutionContentText),
                        mainContent: b(t.mainContentText),
                        answer: b(t.answerText)
                    });
                }
            }), Oe = g(), qe = g({
                stem: [ {
                    required: !0,
                    message: "请输入题干",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                analysis: [ {
                    required: !1,
                    message: "请输入解析",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                solutionContentText: [ {
                    required: !0,
                    message: "请输入代码区内容",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                mainContentText: [ {
                    required: !0,
                    message: "请输入主函数内容",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ],
                answerText: [ {
                    required: !0,
                    message: "请输入正确答案",
                    trigger: [ "blur", "change" ]
                }, {
                    min: 1,
                    max: 1e5,
                    message: "长度在 1 到 100000 个字符",
                    trigger: [ "blur", "change" ]
                } ]
            }), c = g("1"), C = g(""), F = g(""), k = g(""), L = g(""), O = g(!1), f = g("输入"), m = g({
                loadingList: [],
                loadingTimes: {}
            }), v = g({}), Le = () => {
                c.value === "2" ? Ie() : N.$refs.questionFormRef.validateField([ "solutionContentText", "mainContentText" ], t => {
                    t ? me(C.value) : E.warning("‘主函数’ 和 ‘代码区’ 不能为空！");
                });
            }, Ie = () => {
                (l.value.testCases || []).forEach((t, e) => {
                    N.$refs.questionFormRef.validateField([ "testCases." + e + ".expectOut", "testCases." + e + ".in" ], r => {
                        r ? setTimeout(() => {
                            me(t.in, e + "");
                        }, 100 * e) : E.warning(`\u2018\u7528\u4F8B${e + 1}\u2019 \u9884\u671F\u7ED3\u679C \u4E0D\u80FD\u4E3A\u7A7A\uFF01`);
                    });
                });
            }, me = (t, e) => {
                e ? m.value.loadingList.indexOf(e) < 0 && m.value.loadingList.push(e) : O.value = !0;
                let r = {
                    mainContent: b(l.value.mainContentText),
                    solutionContent: b(l.value.solutionContentText),
                    singleFilePrograms: !1,
                    languageId: l.value.langId,
                    stdin: b(t)
                };
                L.value = "", we.submissionsCode(r).then(n => {
                    k.value = "", setTimeout(() => {
                        ce(n, e, 1);
                    }, 1e3);
                });
            };
            function ce(t, e, r = 1) {
                m.value.loadingTimes = r, we.getSubmissions(t).then(n => {
                    n.status_id === "1" || n.status_id === "2" ? r === 5 ? (e ? (m.value.loadingList = m.value.loadingList.filter(d => d !== e), 
                    l.value.testCases[Number(e)].out = "服务器繁忙，请稍候重试", l.value.testCases[Number(e)].status = "20") : (L.value = C.value, 
                    k.value = "20", F.value = "服务器繁忙，请稍候重试", f.value = "输出"), O.value = !1) : setTimeout(() => {
                        ce(t, e, r + 1);
                    }, 2e3) : n.status_id === "3" ? (e ? (m.value.loadingList = m.value.loadingList.filter(d => d !== e), 
                    l.value.testCases[Number(e)].out = p(n.stdout), l.value.testCases[Number(e)].status = n.status_id) : (L.value = C.value, 
                    k.value = n.status_id, F.value = p(n.stdout), f.value = "输出"), 
                    O.value = !1) : (e ? (m.value.loadingList = m.value.loadingList.filter(d => d !== e), 
                    l.value.testCases[Number(e)].out = p(n.compile_output || n.stdout), 
                    l.value.testCases[Number(e)].status = n.status_id) : (L.value = C.value, 
                    k.value = n.status_id, F.value = p(n.compile_output || n.stdout), 
                    f.value = "输出"), O.value = !1);
                }).catch(() => {
                    e && (m.value.loadingList = m.value.loadingList.filter(n => n !== e), 
                    l.value.testCases[Number(e)].out = "请求失败，请重试", l.value.testCases[Number(e)].status = "20");
                });
            }
            function ve(t = {}) {
                N.$refs.questionFormRef.resetFields();
                let e = {
                    ...t,
                    answerText: p(t.answer),
                    solutionContentText: p(t.solutionContent),
                    mainContentText: p(t.mainContent),
                    testCases: t.testCases || [],
                    langId: t.langId || "62"
                };
                C.value = "", f.value = "输入", F.value = "", de("update:form", e);
            }
            function b(t) {
                return t && window.btoa(unescape(encodeURIComponent(t))) || "";
            }
            function p(t) {
                return t && decodeURIComponent(escape(window.atob(t))) || "";
            }
            function Re() {
                pe({
                    in: L.value,
                    expectOut: F.value
                }), c.value = "2";
            }
            function pe(t = {}) {
                l.value.testCases.length !== 5 ? l.value.testCases.unshift({
                    in: t.in || "",
                    expectOut: t.expectOut || "",
                    out: t.out || ""
                }) : E.warning("最多只能有 5 个测试用例！");
            }
            function ge() {
                gl(a(l).langId).then(t => {
                    v.value = t || {}, _e();
                });
            }
            function _e() {
                var t, e, r, n;
                v.value.initTmpl && (l.value = {
                    ...l.value,
                    solutionContent: (t = v.value.initTmpl) == null ? void 0 : t.solutionFile,
                    mainContent: (e = v.value.initTmpl) == null ? void 0 : e.mainFile,
                    solutionContentText: p((r = v.value.initTmpl) == null ? void 0 : r.solutionFile),
                    mainContentText: p((n = v.value.initTmpl) == null ? void 0 : n.mainFile)
                });
            }
            function Ne() {
                var t, e, r, n;
                v.value.demoTmpl && (l.value = {
                    ...l.value,
                    solutionContent: (t = v.value.demoTmpl) == null ? void 0 : t.solutionFile,
                    mainContent: (e = v.value.demoTmpl) == null ? void 0 : e.mainFile,
                    solutionContentText: p((r = v.value.demoTmpl) == null ? void 0 : r.solutionFile),
                    mainContentText: p((n = v.value.demoTmpl) == null ? void 0 : n.mainFile)
                });
            }
            return Fe({
                reset: ve,
                validateForm: async () => (c.value = "2", l.value = {
                    ...l.value,
                    solutionContent: b(l.value.solutionContentText),
                    mainContent: b(l.value.mainContentText),
                    answer: b(l.value.answerText)
                }, N.$refs.questionFormRef.validate())
            }), Ae(() => {
                ve(M.form), setTimeout(() => {
                    ge();
                }, 1);
            }), (t, e) => {
                const r = rl, n = Ye, d = Je, Pe = Ke, ze = We, I = Xe, T = Ze, S = Qe("ComCodeMirror"), Ee = el, Me = ll, fe = al, Se = tl, $e = sl, $ = ol;
                return x(), P($e, {
                    model: a(l),
                    ref_key: "questionFormRef",
                    ref: Oe,
                    rules: a(qe),
                    inline: !1,
                    onSubmit: e[11] || (e[11] = He(() => {}, [ "prevent" ]))
                }, {
                    default: i(() => [ o(d, {
                        prop: "stem"
                    }, {
                        label: i(() => [ u("div", j, [ o(n, null, {
                            default: i(() => [ y("题干") ]),
                            _: 1
                        }) ]) ]),
                        default: i(() => [ _(u("div", B, [ D, u("div", G, [ o(r, {
                            type: a(Ve).QUESTION_PROGRAM_TYPE,
                            value: M.form.langId
                        }, null, 8, [ "type", "value" ]) ]) ], 512), [ [ V, U.isPreview ] ]), o(ye, {
                            modelValue: a(l).stem,
                            "onUpdate:modelValue": e[0] || (e[0] = s => a(l).stem = s),
                            text: a(l).stemText,
                            "onUpdate:text": e[1] || (e[1] = s => a(l).stemText = s),
                            placeholder: "请点击此处编辑题干..."
                        }, null, 8, [ "modelValue", "text" ]) ]),
                        _: 1
                    }), o(d, {
                        required: ""
                    }, {
                        label: i(() => [ u("div", A, [ o(n, null, {
                            default: i(() => [ y("程序") ]),
                            _: 1
                        }) ]) ]),
                        default: i(() => [ u("div", Q, [ o(ze, {
                            modelValue: a(l).langId,
                            "onUpdate:modelValue": e[2] || (e[2] = s => a(l).langId = s),
                            placeholder: "请选择",
                            style: {
                                width: "200px"
                            },
                            onChange: ge
                        }, {
                            default: i(() => [ (x(!0), R(be, null, xe(a(cl)(a(Ve).QUESTION_PROGRAM_TYPE), s => (x(), 
                            P(Pe, {
                                key: s.value,
                                label: s.label,
                                value: s.value
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]), o(I, {
                            class: "ml-2",
                            size: "small",
                            onClick: _e
                        }, {
                            default: i(() => [ y("重置") ]),
                            _: 1
                        }), o(I, {
                            type: "primary",
                            class: "ml-2",
                            size: "small",
                            onClick: Ne
                        }, {
                            default: i(() => [ y("示例") ]),
                            _: 1
                        }) ]), o(d, {
                            prop: "mainContentText",
                            class: "code-item mr-5 mb-5"
                        }, {
                            default: i(() => [ u("div", H, [ Y, _(o(T, {
                                "model-value": a(l).mainContentText
                            }, null, 8, [ "model-value" ]), [ [ V, !1 ] ]), u("div", J, [ o(S, {
                                placeholder: "请输入主函数",
                                modelValue: a(l).mainContentText,
                                "onUpdate:modelValue": e[3] || (e[3] = s => a(l).mainContentText = s)
                            }, null, 8, [ "modelValue" ]) ]) ]) ]),
                            _: 1
                        }), o(d, {
                            prop: "solutionContentText",
                            class: "code-item mb-5"
                        }, {
                            default: i(() => [ u("div", K, [ W, _(o(T, {
                                "model-value": a(l).solutionContentText
                            }, null, 8, [ "model-value" ]), [ [ V, !1 ] ]), u("div", X, [ o(S, {
                                placeholder: "请输入代码",
                                modelValue: a(l).solutionContentText,
                                "onUpdate:modelValue": e[4] || (e[4] = s => a(l).solutionContentText = s)
                            }, null, 8, [ "modelValue" ]) ]) ]) ]),
                            _: 1
                        }), u("div", Z, [ u("div", ee, [ u("div", {
                            class: z([ "title pointer", a(c) === "1" ? "is-active" : "" ]),
                            onClick: e[5] || (e[5] = () => c.value = "1")
                        }, "控制台", 2), u("div", {
                            class: z([ "title pointer", a(c) === "2" ? "is-active" : "" ]),
                            onClick: e[6] || (e[6] = () => c.value = "2")
                        }, "测试用例", 2) ]), a(c) === "1" ? _((x(), R("div", le, [ _(o(T, {
                            modelValue: a(C),
                            "onUpdate:modelValue": e[7] || (e[7] = s => Ce(C) ? C.value = s : null),
                            placeholder: "请输入执行语句",
                            type: "textarea",
                            maxlength: "1000",
                            "show-word-limit": "",
                            resize: "none"
                        }, null, 8, [ "modelValue" ]), [ [ V, a(f) === "输入" ] ]), _(u("div", {
                            class: z([ a(k) === "3" ? "sucmsg" : "errmsg", "msgbox" ])
                        }, Te(a(F)), 3), [ [ V, a(f) === "输出" ] ]) ])), [ [ $, a(O) ] ]) : he("", !0), a(c) === "2" ? _((x(), 
                        R("div", ae, [ u("div", te, [ u("div", {
                            class: "test-item add-item pointer",
                            onClick: pe
                        }, [ o(Ee, {
                            icon: "ep:plus",
                            size: 50
                        }), se ]), (x(!0), R(be, null, xe(a(l).testCases, (s, w) => _((x(), 
                        R("div", {
                            key: w,
                            class: z([ "test-item", {
                                "suc-item": s.status === "3" && s.out === s.expectOut,
                                "err-item": s.status && s.status !== "3"
                            } ])
                        }, [ u("div", oe, " 用例" + Te(w + 1) + ": ", 1), o(d, {
                            label: "输入",
                            "label-width": "80px",
                            prop: "testCases." + w + ".in",
                            rules: [ {
                                required: !1,
                                message: "请输入内容",
                                trigger: [ "blur" ]
                            }, {
                                min: 1,
                                max: 1e5,
                                message: "长度在 1 到 100000 个字符",
                                trigger: [ "blur" ]
                            } ],
                            style: {
                                border: "0",
                                "margin-bottom": "20px",
                                padding: "0"
                            }
                        }, {
                            default: i(() => [ o(T, {
                                modelValue: s.in,
                                "onUpdate:modelValue": h => s.in = h
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                            _: 2
                        }, 1032, [ "prop" ]), o(d, {
                            label: "预期结果",
                            "label-width": "80px",
                            prop: "testCases." + w + ".expectOut",
                            rules: [ {
                                required: !0,
                                message: "请输入预期结果",
                                trigger: [ "blur" ]
                            }, {
                                min: 1,
                                max: 1e5,
                                message: "长度在 1 到 100000 个字符",
                                trigger: [ "blur" ]
                            } ],
                            style: {
                                border: "0",
                                "margin-bottom": "20px",
                                padding: "0"
                            }
                        }, {
                            default: i(() => [ o(T, {
                                modelValue: s.expectOut,
                                "onUpdate:modelValue": h => s.expectOut = h
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                            _: 2
                        }, 1032, [ "prop" ]), o(d, {
                            label: "输出",
                            "label-width": "80px",
                            prop: "testCases." + w + ".out",
                            style: {
                                border: "0",
                                "margin-bottom": "20px",
                                padding: "0"
                            }
                        }, {
                            default: i(() => [ s.out ? (x(), P(Me, {
                                key: 0,
                                effect: "dark",
                                content: s.out,
                                placement: "top"
                            }, {
                                default: i(() => [ o(T, {
                                    modelValue: s.out,
                                    "onUpdate:modelValue": h => s.out = h,
                                    readonly: ""
                                }, null, 8, [ "modelValue", "onUpdate:modelValue" ]) ]),
                                _: 2
                            }, 1032, [ "content" ])) : (x(), P(T, {
                                key: 1,
                                modelValue: s.out,
                                "onUpdate:modelValue": h => s.out = h,
                                readonly: ""
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ])) ]),
                            _: 2
                        }, 1032, [ "prop" ]), o(I, {
                            class: "delete-btn",
                            link: "",
                            type: "danger",
                            icon: t.Delete,
                            onClick: h => function(yl, Be) {
                                l.value.testCases.splice(Be, 1);
                            }(0, w)
                        }, null, 8, [ "icon", "onClick" ]) ], 2)), [ [ $, a(m).loadingList.indexOf(w + "") >= 0 ] ])), 128)) ]) ])), [ [ $, a(O) ] ]) : he("", !0), u("div", ne, [ _(o(Se, {
                            modelValue: a(f),
                            "onUpdate:modelValue": e[8] || (e[8] = s => Ce(f) ? f.value = s : null),
                            class: "radio-btn"
                        }, {
                            default: i(() => [ o(fe, {
                                label: "输入",
                                value: "输入"
                            }), o(fe, {
                                label: "输出",
                                value: "输出"
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]), [ [ V, a(c) === "1" ] ]), _(o(I, {
                            type: "primary",
                            disabled: a(k) !== "3",
                            class: "insert-btn",
                            onClick: Re
                        }, {
                            default: i(() => [ y("添加至用例") ]),
                            _: 1
                        }, 8, [ "disabled" ]), [ [ V, a(c) === "1" ] ]), o(I, {
                            type: "primary",
                            disabled: a(m).loadingList.length > 0 || a(c) === "2" && (a(l).testCases || []).length === 0,
                            class: "submit-btn",
                            onClick: Le
                        }, {
                            default: i(() => [ y("提交运行") ]),
                            _: 1
                        }, 8, [ "disabled" ]) ]) ]) ]),
                        _: 1
                    }), o(d, {
                        prop: "answerText"
                    }, {
                        label: i(() => [ u("div", ue, [ o(n, null, {
                            default: i(() => [ y("答案") ]),
                            _: 1
                        }) ]) ]),
                        default: i(() => [ _(o(T, {
                            "model-value": a(l).answerText
                        }, null, 8, [ "model-value" ]), [ [ V, !1 ] ]), u("div", ie, [ o(S, {
                            placeholder: "请输入正确答案",
                            modelValue: a(l).answerText,
                            "onUpdate:modelValue": e[9] || (e[9] = s => a(l).answerText = s),
                            defaultHeight: 300
                        }, null, 8, [ "modelValue" ]) ]) ]),
                        _: 1
                    }), o(d, {
                        prop: "analysis"
                    }, {
                        label: i(() => [ u("div", re, [ o(n, null, {
                            default: i(() => [ y("解析") ]),
                            _: 1
                        }) ]) ]),
                        default: i(() => [ o(ye, {
                            modelValue: a(l).analysis,
                            "onUpdate:modelValue": e[10] || (e[10] = s => a(l).analysis = s)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-476bd535" ] ]);
});

export {
    hl as __tla,
    Ue as default
};