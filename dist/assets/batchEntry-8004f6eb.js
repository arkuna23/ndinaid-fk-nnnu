import {
    _ as Ht,
    __tla as Nt
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    b8 as Ft,
    r as x,
    a0 as Kt,
    e as I,
    w as Pt,
    cg as Q,
    f as Qt,
    o as d,
    c as m,
    t as s,
    v as w,
    k as h,
    l as b,
    a as r,
    D as Z,
    C as gt,
    d$ as Zt,
    e0 as Rt,
    b5 as jt,
    b7 as Yt,
    H as R,
    m as Lt,
    z as j,
    F as U,
    y as V,
    B as k,
    A as Ct,
    G as wt,
    _ as Gt,
    K as Jt,
    J as Mt,
    P as Wt,
    R as Xt,
    S as te,
    __tla as ee
} from "./index-6c08ea4c.js";

import {
    Q as ne,
    __tla as ae
} from "./questionPreview-3c0f3206.js";

import le, {
    __tla as se
} from "./intelligentEntry-adfd5635.js";

import {
    d as Y,
    D as z,
    __tla as re
} from "./dict-c5825220.js";

import {
    _ as oe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import {
    __tla as ce
} from "./type1-bb9ab50e.js";

import {
    __tla as ie
} from "./type2-f7593207.js";

import {
    __tla as ue
} from "./type3-f0157d42.js";

import {
    __tla as pe
} from "./type4-e194cfc5.js";

import {
    __tla as de
} from "./type5-5cfc2694.js";

import {
    __tla as fe
} from "./type6-f24b6333.js";

import {
    __tla as me
} from "./type7-6a71ebde.js";

import {
    __tla as he
} from "./video-1d0dc730.js";

import {
    __tla as _e
} from "./file-e038b35d.js";

import {
    __tla as ye
} from "./type20-1bb6de92.js";

import {
    __tla as ve
} from "./type30-1635403c.js";

import {
    __tla as xe
} from "./myQuestionBank-a9dcc9db.js";

let Tt, ge = Promise.all([ (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})(), (() => {
    try {
        return ue;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})() ]).then(async () => {
    let D, L, G, J, M, W, X, tt, et, nt, at, lt, st, rt, ot, ct, it, ut, pt, dt;
    D = O => (Xt("data-v-66f454b4"), O = O(), te(), O), L = {
        class: "batch-box"
    }, G = {
        class: "head-box"
    }, J = {
        key: 0,
        class: "ml10"
    }, M = {
        class: "right pr-3"
    }, W = {
        id: "myTextAreabox",
        class: "cont-box"
    }, X = {
        class: "left-box"
    }, tt = D(() => s("div", {
        class: "title"
    }, "试题类型", -1)), et = [ "onClick" ], nt = {
        class: "right-box"
    }, at = [ "textContent" ], lt = {
        class: "right-box batch-cont"
    }, st = {
        class: "head-box"
    }, rt = {
        class: "right pr-3 right-desc"
    }, ot = {
        class: "neu-color-red",
        style: {
            "font-size": "18px",
            color: "red"
        }
    }, ct = D(() => s("span", {
        class: "neu-color-red ml-1"
    }, "处错误，请参考范例修改", -1)), it = {
        id: "right-scroll",
        class: "cont-box"
    }, ut = [ "id" ], pt = {
        class: "question-index"
    }, dt = {
        class: "px-5",
        style: {
            "padding-top": "6px",
            color: "#aaa"
        }
    }, Tt = oe({
        __name: "batchEntry",
        props: {
            modelValue: {
                type: Object,
                default: () => ({})
            },
            pass: {
                type: Boolean,
                default: !1
            },
            imports: {
                type: String,
                default: ""
            },
            isAiComponent: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue", "update:pass" ],
        setup(O, {
            expose: bt,
            emit: kt
        }) {
            Ft();
            const ft = kt, mt = x(null), A = O, {
                isAiComponent: H
            } = Kt(A), g = I({
                get: () => (A.modelValue.length === 0 && (i.value = ""), A.modelValue),
                set: n => {
                    (function(e) {
                        ft("update:modelValue", e), setTimeout(() => {
                            Ut(), ft("update:pass", S.value === 0);
                        }, 1);
                    })(n);
                }
            }), S = I(() => {
                let n = 0;
                return g.value.forEach(e => n += e.error.length || 0), n;
            }), N = I(() => g.value.map((n, e) => n.error.length > 0 ? e : -1).filter(n => n >= 0)), ht = x(`\u8F93\u5165\u533A\uFF1A\u53C2\u8003\u8F93\u5165\u8303\u4F8B\uFF0C\u76F4\u63A5\u5728\u6B64\u5904\u7F16\u8F91\u8BD5\u9898\uFF0C\u6216\u70B9\u51FB\u6279\u91CF\u5BFC\u5165\u8BD5\u9898
\u8F93\u5165\u89C4\u8303\uFF1A
1. \u5355\u9009\u9898\u3001\u591A\u9009\u9898\u5FC5\u987B\u542B\u6709 \u201C\u9009\u9879\uFF1A\u201D \u5B57\u6BB5\u3002
2. \u6240\u6709\u9898\u578B\u5FC5\u987B\u542B\u6709 \u201C \u7B54\u6848\uFF1A\u201D \u5B57\u6BB5\uFF0C\u4E14\u4E0D\u80FD\u4E3A\u7A7A\u3002
3. \u6240\u6709\u9898\u578B \u201C \u89E3\u6790\uFF1A\u201D \u201C \u6807\u7B7E\uFF1A\u201D \u5B57\u6BB5\u975E\u5FC5\u9700\uFF0C\u6CA1\u6709\u53EF\u4E0D\u586B\u3002
4. \u6240\u6709\u9898\u578B\u5FC5\u987B\u542B\u6709 \u201C \u96BE\u6613\u5EA6\uFF1A\u201D \u5B57\u6BB5\uFF0C\u4E14\u4E0D\u80FD\u4E3A\u7A7A\u3002
5. \u9009\u62E9\u9898\u6700\u5C11\u652F\u63012\u4E2A\u9009\u9879A,B\uFF0C\u6700\u591A\u652F\u630124\u4E2A\u9009\u9879\uFF08A-Z\uFF09\uFF0C\u987A\u5E8F\u4F7F\u7528\u5373\u53EF\u3002
6. \u9009\u62E9\u9898A-Z\u8FD9\u4E9B\u9009\u9879\u53F7\u4E0E\u5185\u5BB9\u4E4B\u95F4\u8981\u7528 \u201C . \u201D \u6216 \u201C \u3001 \u201D \u5206\u5F00\u3002
7. \u9009\u62E9\u9898\u7B54\u6848\u4E2D\u8BF7\u52FF\u52A0\u5206\u9694\u7B26\u6216\u8005\u7A7A\u683C\u3002
8. \u5224\u65AD\u9898\u7B54\u6848\u652F\u6301 \u201C \u9519\u8BEF \u201D\uFF0C\u201C \u6B63\u786E \u201D \u6216\u8005 \u201C \u9519 \u201D\uFF0C\u201C \u5BF9 \u201D\u3002
9. \u586B\u7A7A\u9898 \u201C \u7A7A\u683C \u201D \u8BF7\u7528 \u201C\uFF08\uFF09\u201D \u8868\u793A\uFF1B
10. \u586B\u7A7A\u9898\u76EE\u91CC\u7684\u591A\u4E2A\u586B\u7A7A\u7B54\u6848\u8981\u7528 \u201C && \u201D \u5206\u5272\uFF0C\u5355\u4E2A\u7B54\u6848\u4E0D\u7528\u6DFB\u52A0\u3002
11. \u586B\u7A7A\u9898\u7684\u4E00\u4E2A\u7A7A\u5982\u679C\u6709\u591A\u79CD\u7B54\u6848\uFF0C\u7528 \u201C | \u201D \u9694\u5F00\u3002
12. \u95EE\u7B54\u9898\u53EF\u4EE5\u5305\u542B \u201C \u5173\u952E\u8BCD\uFF1A\u201D\uFF0C\u6CA1\u6709\u53EF\u4E0D\u586B\u3002
13. \u95EE\u7B54\u9898\u591A\u4E2A\u5173\u952E\u8BCD\u7528 \u201C && \u201D \u53BB\u5206\u9694\uFF0C\u5E76\u5217\u5173\u952E\u8BCD\uFF08\u6216\u7684\u5173\u7CFB\uFF09\u7528 \u201C | \u201D \u53BB\u5206\u9694\u3002
14. \u8BD5\u9898\u6807\u7B7E\u652F\u6301\u591A\u4E2A\uFF0C\u7528 \u201C | \u201D\u5206\u5272`), T = x(-1), Ot = I(() => T.value === -1 ? -1 : N.value[T.value]), E = x(!1), i = x(""), q = x(""), F = x(!1), _t = x([ {
                questionType: "1",
                content: `\u9898\u5E72\uFF1A\u9A7E\u9A76\u6C7D\u8F66\u884C\u81F3\u4EBA\u884C\u6A2A\u9053\u65F6\uFF0C\u5E94\u5F53\u5982\u4F55\u6B63\u786E\u884C\u9A76\uFF1F
\u9009\u9879\uFF1A
A.\u52A0\u901F\u901A\u8FC7\uFF0C\u5C3D\u5FEB\u817E\u51FA\u4EBA\u884C\u6A2A\u9053
B.\u7EE7\u7EED\u884C\u9A76\uFF0C\u884C\u4EBA\u5E94\u5F53\u8BA9\u9053
C.\u505C\u8F66\u8BA9\u884C\u4EBA\u5148\u884C
D.\u9E23\u5587\u53ED\u793A\u610F\u884C\u4EBA\u5FEB\u901F\u901A\u8FC7
\u7B54\u6848:C
\u89E3\u6790:\u672C\u9898\u8003\u5BDF\u7684\u662F\u9A7E\u9A76\u5458\u5BF9\u884C\u4EBA\u901A\u884C\u6743\u7684\u5C0A\u91CD
\u96BE\u6613\u5EA6:\u6613
\u6807\u7B7E\uFF1A\u9A7E\u6821\u8003\u8BD5|\u4EA4\u89C4|\u884C\u4EBA\u4F18\u5148`
            }, {
                questionType: "2",
                content: `\u9898\u5E72\uFF1A\u5173\u4E8E\u4F7F\u7528\u706F\u5149\u7684\u8BF4\u6CD5\u6B63\u786E\u7684\u662F\u54EA\u4E00\u9879\uFF1F
\u9009\u9879\uFF1A
A.\u591C\u95F4\u5728\u7167\u660E\u6761\u4EF6\u826F\u597D\u7684\u9053\u8DEF\u4E0A\u884C\u9A76\uFF0C\u5E94\u5F53\u4F7F\u7528\u8FD1\u5149\u706F
B.\u591C\u95F4\u4E0E\u5BF9\u5411\u6765\u8F66\u4F1A\u8F66\u65F6\u5E94\u5F53\u4F7F\u7528\u8FDC\u5149\u706F
C.\u591C\u95F4\u901A\u8FC7\u8DEF\u53E3\u3001\u4EBA\u884C\u6A2A\u9053\u3001\u72ED\u7A84\u6865\u6881\u3001\u5F2F\u9053\u7B49\uFF0C\u5E94\u5F53\u4EA4\u66FF\u4F7F\u7528\u8FDC\u8FD1\u5149\u706F
D.\u96FE\u5929\u884C\u9A76\u65F6\u5E94\u5F53\u5F00\u542F\u96FE\u706F\u548C\u793A\u5ED3\u706F
\u7B54\u6848:ACD
\u89E3\u6790:\u672C\u9898\u8003\u67E5\u7684\u662F\u706F\u5149\u4F7F\u7528\u89C4\u5219
\u96BE\u6613\u5EA6:\u96BE
\u6807\u7B7E\uFF1A\u9A7E\u6821\u8003\u8BD5|\u4EA4\u89C4`
            }, {
                questionType: "3",
                content: `\u9898\u5E72\uFF1A\u9A7E\u9A76\u6C7D\u8F66\u5728\u9AD8\u901F\u516C\u8DEF\u4E0A\u884C\u9A76\uFF0C\u8FDE\u7EED\u9A7E\u9A764\u5C0F\u65F6\u4EE5\u4E0A\u5E94\u5F53\u505C\u8F66\u4F11\u606F\uFF0C\u907F\u514D\u75B2\u52B3\u9A7E\u9A76\u3002
\u7B54\u6848:\u5BF9
\u89E3\u6790:\u672C\u9898\u8003\u5BDF\u7684\u662F\u75B2\u52B3\u9A7E\u9A76\u7684\u9632\u8303
\u96BE\u6613\u5EA6:\u8F83\u96BE
\u6807\u7B7E\uFF1A\u9A7E\u6821\u8003\u8BD5|\u4EA4\u89C4`
            }, {
                questionType: "4",
                content: `\u9898\u5E72\uFF1A\u6211\u56FD\u53E4\u5178\u56DB\u5927\u540D\u8457\u662F\uFF08\uFF09\uFF08\uFF09\uFF08\uFF09\uFF08\uFF09
\u7B54\u6848:\u7EA2\u697C\u68A6&&\u6C34\u6D52\u4F20&&\u4E09\u56FD\u6F14\u4E49&&\u897F\u6E38\u8BB0
\u89E3\u6790:\u65E0
\u96BE\u6613\u5EA6:\u8F83\u6613
\u6807\u7B7E\uFF1A\u8BED\u6587|\u671F\u672B`
            }, {
                questionType: "5",
                content: `\u9898\u5E72\uFF1A\u8BF7\u5206\u6790\u674E\u767D\u7684\u300A\u9759\u591C\u601D\u300B\u8FD9\u9996\u8BD7\u8868\u8FBE\u4E86\u8BD7\u4EBA\u600E\u6837\u7684\u60C5\u611F\uFF1F
\u7B54\u6848:\u8FD9\u9996\u8BD7\u8868\u8FBE\u4E86\u8BD7\u4EBA\u674E\u767D\u5728\u5BC2\u9759\u7684\u591C\u665A\uFF0C\u901A\u8FC7\u660E\u6708\u5F15\u53D1\u5BF9\u8FDC\u65B9\u6545\u4E61\u7684\u6DF1\u5207\u601D\u5FF5\u4E4B\u60C5\u3002
\u89E3\u6790:\u65E0
\u96BE\u6613\u5EA6:\u4E2D
\u5173\u952E\u8BCD\uFF1A\u660E\u6708|\u6545\u4E61&&\u601D\u5FF5
\u6807\u7B7E\uFF1A\u8BED\u6587|\u53E4\u8BD7|\u671F\u672B`
            } ]), At = I(() => q.value ? _t.value.filter(n => n.questionType === q.value) : _t.value);
            Pt(() => i.value, n => {
                i.value = n.replace(/\\n/g, `
`), It(n);
            });
            const Et = n => {
                i.value += `
` + n + `
`;
            };
            function qt() {
                mt.value.handleOpenBatchImport();
            }
            const It = n => {
                if (n.length > 0) {
                    const e = /\n题干:|\n题干：/g, c = i.value.split(e);
                    let u = [];
                    c.forEach((t, y) => {
                        t.trim() && u.push({
                            content: t
                        });
                    });
                    const o = /(?:题干:|题干：)?([\s\S]*?)(?=\n答案(?::|：)|\n选项(?::|：)|\n解析(?::|：)|\n[A-D](、|.)|\n难易度(?::|：)|\n标签(?::|：)|\n关键词(?::|：)|$)/, K = /\n(?:选项:|选项：)(.*?)(?:\n答案(?::|：)|\n解析(?::|：)|\n难易度(?::|：)|\n标签(?::|：)|\n关键词(?::|：)|$)/s, P = /\n(?:答案:|答案：)(.*?)(?:\n解析(?::|：)|\n选项(?::|：)|\n难易度(?::|：)|\n标签(?::|：)|\n关键词(?::|：)|$)/s, l = /\n(?:难易度:|难易度：)(.*?)(?:\n解析(?::|：)|\n选项(?::|：)|\n标签(?::|：)|\n答案(?::|：)|\n关键词(?::|：)|$)/s, f = /\n(?:解析:|解析：)(.*?)(?:\n难易度(?::|：)|\n选项(?::|：)|\n标签(?::|：)|\n答案(?::|：)|\n关键词(?::|：)|$)/s, C = /\n(?:标签:|标签：)(.*?)(?:\n解析(?::|：)|\n选项(?::|：)|\n难易度(?::|：)|\n答案(?::|：)|\n题干(?::|：)|\n关键词(?::|：)|$)/s, _ = /\n(?:关键词:|关键词：)(.*?)(?:\n解析(?::|：)|\n选项(?::|：)|\n难易度(?::|：)|\n答案(?::|：)|\n题干(?::|：)|\n标签(?::|：)|$)/s;
                    u.forEach(t => {
                        const y = t.content.match(o);
                        if (t.stem = (y && y[1] || "").trim(), t.stemText = (y && y[1] || "").trim(), 
                        t.answer = "", t.difficult = "", t.analysis = "", t.tags = [], 
                        t.answerKeywords = [], t.hasChoices = !1, t.error = [], 
                        t.content.indexOf(`
\u7B54\u6848:`) != -1 || t.content.indexOf(`
\u7B54\u6848\uFF1A`) != -1) {
                            let a = P.exec(t.content);
                            a && a[1] ? t.answer = (a[1] || "").trim() : t.answer = "", 
                            t.answerArr = (t.answer || "").split("");
                        } else t.answer = "";
                        if (t.content.indexOf(`
\u96BE\u6613\u5EA6:`) != -1 || t.content.indexOf(`
\u96BE\u6613\u5EA6\uFF1A`) != -1) {
                            let a = l.exec(t.content);
                            a && a[1] ? t.difficult = yt(Y(z.QUESTION_DIFFICULT), (a[1] || "").trim()) || "" : t.difficult = "";
                        } else t.difficult = "";
                        if (t.content.indexOf(`
\u89E3\u6790:`) != -1 || t.content.indexOf(`
\u89E3\u6790\uFF1A`) != -1) {
                            let a = f.exec(t.content);
                            a && a[1] ? t.analysis = (a[1] || "").trim() : t.analysis = "";
                        } else t.analysis = "";
                        if (t.content.indexOf(`
\u6807\u7B7E:`) != -1 || t.content.indexOf(`
\u6807\u7B7E\uFF1A`) != -1) {
                            let a = C.exec(t.content);
                            a && a[1] ? t.tags = (a[1] || "").trim().split("|").filter(p => !!p) : t.tags = [];
                        } else t.tags = [];
                        if (t.content.indexOf(`
\u5173\u952E\u8BCD:`) != -1 || t.content.indexOf(`
\u5173\u952E\u8BCD\uFF1A`) != -1) {
                            let a = _.exec(t.content);
                            if (a && a[1]) {
                                let p = (a[1] || "").trim();
                                t.answerKeywords = p ? p.split("&&").map(B => B.split("|")) : [];
                            } else t.answerKeywords = [];
                        } else t.answerKeywords = [];
                        if (t.content.indexOf(`
\u9009\u9879:`) != -1 || t.content.indexOf(`
\u9009\u9879\uFF1A`) != -1) {
                            let a = K.exec(t.content);
                            a && a[1] ? t.hasChoices = !0 : t.hasChoices = !1;
                        } else t.hasChoices = !1;
                        if (t.hasChoices ? t.answer.length > 1 && St(t.answer) ? t.type = "多选题" : (t.answer.length === 1 && $t(t.answer), 
                        t.type = "单选题") : t.stem.indexOf("（）") != -1 ? t.type = "填空题" : [ "对", "错", "正确", "错误" ].includes(t.answer) ? t.type = "判断题" : t.type = "问答题", 
                        t.questionType = yt(Y(z.QUESTION_TYPE), t.type), t.choices = [], 
                        t.type == "多选题" || t.type == "单选题") {
                            let a = /(?:\n([A-Z]|[a-z])(、|.))([\s\S]*?)(?=\n答案(?::|：)|\n解析(?::|：)|\n标签(?::|：)|\n难易度(?::|：)|$)/g, p = t.content.match(a), B = [];
                            B = p ? p[0].match(/\n(([A-Z]|[a-z])(、|.))([\s\S]*?)(?=\n([A-Z]|[a-z])(、|.)|$)/g) : [], 
                            B.forEach(v => {
                                let Dt = [ ".", "、" ].indexOf(v[2]) >= 0 ? v.slice(3) : v.slice(2);
                                t.choices.push({
                                    key: v.charAt(1).toUpperCase(),
                                    choiceContent: Dt,
                                    choiceId: Q()
                                });
                            });
                            let xt = t.choices.filter(v => t.answer.toUpperCase().indexOf(v.key) >= 0).map(v => v.choiceId);
                            xt.length > 0 ? t.answer = xt.join(",") : t.error.push("答案选项不匹配");
                        }
                        if (t.type == "判断题" && (t.choices = [ {
                            choiceId: Q(),
                            choiceContent: "正确"
                        }, {
                            choiceId: Q(),
                            choiceContent: "错误"
                        } ], t.answer = [ "对", "正确" ].includes(t.answer) ? t.choices[0].choiceId : [ "错", "错误" ].includes(t.answer) ? t.choices[1].choiceId : ""), 
                        t.stem || t.error.push("题干不能为空"), t.analysis, t.answer || t.error.push("答案不能为空"), 
                        t.difficult || t.error.push("难易度不符合规范"), t.difficult.length > 0 && [ "1", "2", "3", "4", "5" ].indexOf(t.difficult) == -1) t.error.push("难易度不符合规范"); else if (t.type == "多选题" || t.type == "单选题") t.choices.length < 2 && t.error.push("至少有两个选项"); else if (t.type == "填空题") {
                            var $ = t.stem.match(/([\(|（]\s*[\)|）])/g), vt = 0;
                            $ && (vt = $.length);
                            let a = t.answer.replace(/\s/g, "").split("&&").filter(function(p) {
                                return p !== "";
                            });
                            var zt = a.length;
                            t.answers = a.map(p => ({
                                answer: p,
                                fullScore: 0,
                                blankScore: 0
                            })), vt != zt && t.error.push("答案和空数量不匹配");
                        }
                    }), g.value = u;
                } else g.value = [];
            }, St = n => {
                for (let e = 0; e < n.length; e++) {
                    let c = n[e].toUpperCase().charCodeAt();
                    if (c > 90 || c < 65) return !1;
                }
                return !0;
            }, $t = n => {
                let e = n.toUpperCase().charCodeAt();
                return e <= 90 && e >= 65;
            };
            function yt(n, e) {
                var c;
                return ((c = n.find(u => u.label === e)) == null ? void 0 : c.value) || "";
            }
            function Bt() {
                N.value.length > 0 ? (T.value < N.value.length - 1 ? T.value += 1 : T.value = 0, 
                document.getElementById(`qusetionRef-${Ot.value}`).scrollIntoView(), 
                F.value = !0, Vt(), setTimeout(() => {
                    F.value = !1;
                }, 10)) : T.value = -1;
            }
            const Ut = () => {
                let n = document.getElementsByName("myTextArea")[0], e = document.querySelector("#right-scroll"), c = n.scrollHeight, u = e.scrollHeight;
                n.addEventListener("scroll", () => {
                    if (F.value) return;
                    let o = n.offsetHeight;
                    u - o != 0 && (e.scrollTop = n.scrollTop / (c - o) * (u - o));
                });
            }, Vt = () => {
                let n = document.getElementsByName("myTextArea")[0], e = document.querySelector("#right-scroll"), c = n.scrollHeight, u = e.scrollHeight, o = e.offsetHeight;
                n.scrollTop = e.scrollTop / (u - o) * (c - o);
            };
            return bt({
                importsFunction: () => {
                    A.imports && (i.value += `
` + A.imports + `
`);
                },
                clearFunction: () => {
                    i.value = "";
                }
            }), Qt(() => {}), (n, e) => {
                const c = Gt, u = Jt, o = Mt, K = Wt, P = Ht;
                return d(), m("div", L, [ s("div", {
                    class: "left-box batch-cont",
                    onClick: e[4] || (e[4] = R(l => E.value = !1, [ "stop" ]))
                }, [ s("div", G, [ w(" 输入区 "), h(u, {
                    content: r(ht),
                    effect: "dark",
                    placement: "top-start"
                }, {
                    default: b(() => [ h(c, {
                        size: 20,
                        icon: "svg-icon:tip"
                    }) ]),
                    _: 1
                }, 8, [ "content" ]), r(H) ? (d(), m("span", J, " 请根据输入范例调整输入区内容 ")) : Z("", !0), s("div", M, [ r(H) ? Z("", !0) : (d(), 
                gt(o, {
                    key: 0,
                    icon: r(Zt),
                    plain: "",
                    type: "primary",
                    onClick: qt
                }, {
                    default: b(() => [ w("批量导入") ]),
                    _: 1
                }, 8, [ "icon" ])), r(H) ? (d(), gt(o, {
                    key: 1,
                    icon: r(Rt),
                    onClick: e[0] || (e[0] = l => i.value = "")
                }, {
                    default: b(() => [ w("清空") ]),
                    _: 1
                }, 8, [ "icon" ])) : Z("", !0), h(o, {
                    icon: r(E) ? r(Yt) : r(jt),
                    text: "",
                    onClick: e[1] || (e[1] = R(l => E.value = !r(E), [ "stop" ]))
                }, {
                    default: b(() => [ w(" 输入范例 ") ]),
                    _: 1
                }, 8, [ "icon" ]) ]) ]), s("div", W, [ h(K, {
                    id: "myTextArea",
                    modelValue: r(i),
                    "onUpdate:modelValue": e[2] || (e[2] = l => Lt(i) ? i.value = l : null),
                    placeholder: r(ht),
                    resize: "none",
                    name: "myTextArea",
                    type: "textarea"
                }, null, 8, [ "modelValue", "placeholder" ]), s("div", {
                    class: j([ "example-box", r(E) ? "show-box" : "pl0" ]),
                    onClick: e[3] || (e[3] = R(() => {}, [ "stop" ]))
                }, [ s("div", X, [ tt, (d(), m(U, null, V(5, (l, f) => {
                    var y;
                    return s("div", {
                        key: f,
                        class: j([ "left-item", r(q) === l + "" ? "is-active" : "" ]),
                        onClick: () => {
                            q.value = r(q) === l + "" ? "" : l + "";
                        }
                    }, k((C = l + "", _ = Y(z.QUESTION_TYPE), t = C, ((y = _.find($ => $.value === t)) == null ? void 0 : y.label) || "")), 11, et);
                    var C, _, t;
                }), 64)) ]), s("div", nt, [ (d(!0), m(U, null, V(At.value, (l, f) => (d(), 
                m("div", {
                    key: f,
                    class: "question-box px-2"
                }, [ h(o, {
                    class: "right mr-1",
                    round: "",
                    size: "small",
                    onClick: C => function(_) {
                        i.value += `
` + _.content + `
`;
                    }(l)
                }, {
                    default: b(() => [ w("一键引用") ]),
                    _: 2
                }, 1032, [ "onClick" ]), h(P, {
                    type: r(z).QUESTION_TYPE,
                    value: l.questionType || 0
                }, null, 8, [ "type", "value" ]), s("div", {
                    class: "exam-ques-cont mt10",
                    textContent: k(l.content)
                }, null, 8, at) ]))), 128)) ]) ], 2) ]) ]), s("div", lt, [ s("div", st, [ w(" 检查区（共" + k(g.value.length) + "题） ", 1), Ct(s("div", rt, [ s("span", ot, k(S.value), 1), ct, h(o, {
                    disabled: S.value === 0,
                    class: "ml-5",
                    onClick: Bt
                }, {
                    default: b(() => [ w("下一题") ]),
                    _: 1
                }, 8, [ "disabled" ]) ], 512), [ [ wt, S.value > 0 ] ]) ]), s("div", it, [ (d(!0), 
                m(U, null, V(g.value, (l, f) => (d(), m("div", {
                    key: f,
                    id: `qusetionRef-${f}`,
                    class: j([ "question-item", l.error.length > 0 ? "error-item" : "" ])
                }, [ s("div", pt, k(f + 1) + ".", 1), h(ne, {
                    form: l || {},
                    showType: !0
                }, null, 8, [ "form" ]), (d(!0), m(U, null, V(l.error, (C, _) => (d(), 
                m("div", {
                    key: _,
                    class: "question-error"
                }, k(C), 1))), 128)) ], 10, ut))), 128)), Ct(s("div", dt, " 检查区： 录题后在此处检测试题格式，如有错误，请在输入区修改 ", 512), [ [ wt, g.value.length === 0 ] ]) ]) ]), h(le, {
                    ref_key: "intelligentEntryRef",
                    ref: mt,
                    onInputData: Et
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-66f454b4" ] ]);
});

export {
    ge as __tla,
    Tt as default
};