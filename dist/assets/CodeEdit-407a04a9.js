import {
    a7 as Q,
    b as ce,
    r,
    e as W,
    a as c,
    f as re,
    A as X,
    o as m,
    c as Z,
    t as n,
    k as v,
    B as I,
    l as h,
    F as de,
    y as pe,
    C as N,
    v as O,
    D as ee,
    m as ve,
    x as me,
    p as _e,
    _ as fe,
    P as ye,
    J as ge,
    a9 as he,
    R as xe,
    S as ke,
    __tla as Fe
} from "./index-6c08ea4c.js";

import {
    E as we,
    a as Re,
    __tla as be
} from "./el-collapse-item-c8b76a0a.js";

import {
    _ as Ie,
    __tla as Ne
} from "./index-1344e56b.js";

import {
    s as Oe,
    __tla as Te
} from "./judge-7c842b3d.js";

import {
    u as De,
    __tla as Pe
} from "./file-e038b35d.js";

import {
    _ as ze
} from "./_plugin-vue_export-helper-1b428a4d.js";

let T, te, ae, Ce = Promise.all([ (() => {
    try {
        return Fe;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})() ]).then(async () => {
    let _, D, P, z, C, E, S, j, V, A, B, J, L;
    ae = async d => await Q.get({
        url: `/exp/user-task-evaluation/get-latest?taskId=${d}`
    }), _ = d => (xe("data-v-f70a4014"), d = d(), ke(), d), D = {
        class: "code-page"
    }, P = {
        class: "code-title"
    }, z = {
        class: "folder"
    }, C = {
        class: "editor-box"
    }, E = {
        class: "testing-page"
    }, S = _(() => n("div", {
        class: "code-title"
    }, [ n("div", {
        class: "title-label"
    }, "测试结果") ], -1)), j = {
        class: "testing-list"
    }, V = {
        class: "left-input cont-input"
    }, A = _(() => n("div", {
        class: "input-label"
    }, "—— 预期输出 ——", -1)), B = {
        class: "right-input cont-input"
    }, J = _(() => n("div", {
        class: "input-label"
    }, "—— 实际输出 ——", -1)), L = {
        class: "testing-btns"
    }, T = ze({
        __name: "CodeEdit",
        props: {
            module: {
                type: String,
                default: "1"
            },
            taskId: {
                type: String,
                default: ""
            }
        },
        setup(d, {
            expose: le
        }) {
            const x = _e(), se = ce(), M = d, U = r(), k = r([]), t = r({}), F = r({}), w = r(!1), Y = r(300), R = r(0), $ = W(() => se.getBodyHeight - 222), G = r(90), H = W(() => {
                let e = Y.value + R.value;
                return e = e > c(G) ? e : c(G), e = e < c($) ? e : c($), e;
            }), ue = (e, i) => {
                e.onmousedown = function(u) {
                    u.preventDefault();
                    let s = u.clientY;
                    document.onmousemove = function(o) {
                        o.preventDefault();
                        let p = o.clientY - s;
                        i.value.set(p);
                    }, document.onmouseup = function(o) {
                        o.preventDefault(), document.onmousemove = null, document.onmouseup = null;
                    };
                };
            }, ie = e => {
                R.value = e;
            }, ne = e => {
                Y.value = H.value, R.value = 0;
            }, q = async (e = 0, i) => {
                var o, p, f, y, g;
                if (!t.value.testResults) return void x.warning("没有测评信息！");
                w.value = !0;
                let u = ((o = U.value) == null ? void 0 : o.getValue()) || "", s = new Array((p = t.value.testResults) == null ? void 0 : p.length);
                try {
                    for (let a = 0; a < ((f = t.value.testResults) == null ? void 0 : f.length); a++) {
                        let l = {
                            serviceName: "",
                            envId: "",
                            languageId: F.value.language,
                            stdin: (y = t.value.testResults) == null ? void 0 : y[a].expectInput,
                            judgeGroupId: F.value.id,
                            executiveFilePath: t.value.determineFilePath,
                            executiveFileName: t.value.determineFileName,
                            editFile: [ {
                                code: u,
                                editFilePath: t.value.evaluationFilePath,
                                editFileName: t.value.evaluationFileName
                            } ]
                        };
                        s[a] = await Oe(l);
                    }
                    if (t.value.testResults = t.value.testResults.map((a, l) => ({
                        ...a,
                        actualOutput: K(s[l].stdout),
                        resultType: oe(a, K(s[l].stdout)),
                        time: s[l].time
                    })), M.module !== "1") {
                        let a = {
                            taskId: M.taskId,
                            inputCode: u,
                            testResults: (t.value.testResults || []).map(l => ({
                                taskEvaluationTestId: l.taskEvaluationTestId || l.id,
                                actualOutput: l.actualOutput,
                                resultType: l.resultType
                            }))
                        };
                        await (async l => await Q.post({
                            showLoading: !1,
                            url: "/exp/user-task-evaluation/create",
                            data: l
                        }))(a), e === 0 && x.success("任务评测信息保存成功！");
                    } else e === 0 && x.success("评测完成");
                    if (e === 1) {
                        let a = (t.value.evaluationFileName || "").indexOf(".") > 0 ? t.value.evaluationFileName : t.value.evaluationFileName + ".wz";
                        const l = new File([ u ], a, {
                            type: ""
                        }), b = await De(l);
                        i && i(((g = b == null ? void 0 : b.data) == null ? void 0 : g.data) || {}, u);
                    }
                } catch {} finally {
                    w.value = !1;
                }
            };
            function K(e) {
                return e && decodeURIComponent(escape(window.atob(e))) || "";
            }
            const oe = (e, i) => {
                let u = "", s = "";
                if (t.value.spaceRule == 1 ? (u = e.expectOutput, s = i) : t.value.spaceRule == 2 ? (u = e.expectOutput.trim(), 
                s = i.trim()) : t.value.spaceRule == 3 && (u = e.expectOutput.split(" ").join(""), 
                s = i.split(" ").join("")), e.determineType == 2) {
                    let o = s.split(`
`).length - 2 >= 0 ? s.split(`
`).length - 2 : 0;
                    return s = s.split(`
`)[o], u == s ? 1 : 0;
                }
                return u == s ? 1 : 0;
            };
            return re(() => {}), le({
                initData: (e, i) => {
                    t.value = e, F.value = i;
                },
                testingNow: q
            }), (e, i) => {
                const u = fe, s = Ie, o = ye, p = we, f = Re, y = ge, g = he;
                return X((m(), Z("div", {
                    class: "code-editor-box",
                    style: me(`--editor-now-height: ${c(H)}px;`)
                }, [ n("div", D, [ n("div", P, [ n("div", z, [ v(u, {
                    icon: "fa:code",
                    class: "icon"
                }), n("span", null, I(c(t).evaluationFileName || "代码文件"), 1) ]) ]), n("div", C, [ v(s, {
                    ref_key: "codeEditorRef",
                    ref: U,
                    code: c(t).inputCode
                }, null, 8, [ "code" ]) ]) ]), X(n("div", {
                    class: "change-height-btn",
                    onMousedown: ne
                }, null, 544), [ [ ue, {
                    set: ie
                } ] ]), n("div", E, [ S, n("div", j, [ v(f, {
                    modelValue: c(k),
                    "onUpdate:modelValue": i[0] || (i[0] = a => ve(k) ? k.value = a : null),
                    class: "dark-collapse"
                }, {
                    default: h(() => [ (m(!0), Z(de, null, pe(c(t).testResults || [], (a, l) => (m(), 
                    N(p, {
                        key: "testResults" + l,
                        title: "测试集" + (l + 1),
                        name: l + 1 + ""
                    }, {
                        title: h(() => [ O(I("测试集" + (l + 1)) + " ", 1), a.resultType === 1 ? (m(), 
                        N(u, {
                            key: 0,
                            icon: "ep:circle-check-filled",
                            size: 20,
                            class: "item-status",
                            color: "#63D90A"
                        })) : ee("", !0), a.resultType === 0 ? (m(), N(u, {
                            key: 1,
                            icon: "ep:circle-close-filled",
                            size: 20,
                            class: "item-status",
                            color: "#FF5050"
                        })) : ee("", !0) ]),
                        default: h(() => [ n("div", V, [ A, v(o, {
                            type: "textarea",
                            resize: "none",
                            readonly: "",
                            "model-value": a.expectOutput
                        }, null, 8, [ "model-value" ]) ]), n("div", B, [ J, v(o, {
                            type: "textarea",
                            resize: "none",
                            readonly: "",
                            "model-value": a.actualOutput
                        }, null, 8, [ "model-value" ]) ]) ]),
                        _: 2
                    }, 1032, [ "title", "name" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), n("div", L, [ O(" 本关最大执行时间： " + I(c(t).evaluateDuration || 0) + " 秒 ", 1), v(y, {
                    class: "testing-btn !px-26px",
                    type: "primary",
                    size: "default",
                    onClick: i[1] || (i[1] = a => q(0))
                }, {
                    default: h(() => [ O("评测") ]),
                    _: 1
                }) ]) ]) ], 4)), [ [ g, c(w) ] ]);
            };
        }
    }, [ [ "__scopeId", "data-v-f70a4014" ] ]), te = Object.defineProperty({
        __proto__: null,
        default: T
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    T as C,
    Ce as __tla,
    te as a,
    ae as g
};