import {
    cg as q,
    aT as K,
    o as l,
    c as p,
    t as n,
    B as h,
    z as m,
    k as d,
    D as o,
    A as V,
    G as j,
    C as u,
    v as x,
    F as Q,
    y as W,
    l as N,
    aO as X,
    P as Y,
    J as Z,
    _ as ee,
    __tla as te
} from "./index-6c08ea4c.js";

import {
    M as se,
    __tla as ae
} from "./index-3a269d1c.js";

import {
    _ as ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

let B, ne = Promise.all([ (() => {
    try {
        return te;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})() ]).then(async () => {
    const v = {
        components: {
            MdPreview: se
        },
        props: {
            headersList: {
                type: Array,
                default: () => []
            },
            notMarkDown: {
                type: Boolean,
                default: !1
            },
            accordion: {
                type: Boolean,
                default: !0
            },
            defaultStep: {
                type: Number,
                default: 0
            },
            fontSize: {
                type: String,
                default: "12"
            },
            isDark: {
                type: Boolean,
                default: !1
            },
            isCopyCode: {
                type: Number,
                default: 1
            }
        },
        emits: [ "changeEvent", "stepChange" ],
        data: () => ({
            activeStep: 0,
            textVal: "",
            nextLoading: !1,
            showCheckResult: !1,
            showCheckResultCh: !1,
            checkResult: {},
            checkResultList: [],
            getRandomId: q()
        }),
        computed: {
            fontSizeNumber() {
                return this.fontSize + "px";
            },
            scrollElement: () => document.documentElement,
            activeInfo() {
                var c, k;
                let e = this.showHeadersList[this.activeStep] || {}, t = new RegExp("::: stepCheck:::", "g");
                return {
                    ...e,
                    defaultTexts: e.texts,
                    texts: ((k = (c = e.texts) == null ? void 0 : c.replace(new RegExp("(?<=::: stepCheck)[\\s\\S]*?(?=:::)"), "")) == null ? void 0 : k.replace(t, "")) || "",
                    text: e.text || ""
                };
            },
            activeInfoObj() {
                let e, t = new RegExp("(?<=::: stepCheck)[\\s\\S]*?(?=:::)").exec(this.activeInfo.defaultTexts), c = t && t.length > 0 ? t[0] : "";
                return e = /^[\],:{}\s]*$/.test(c.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) && c ? JSON.parse(c) : {}, 
                {
                    type: (e == null ? void 0 : e.type) || "",
                    name: (e == null ? void 0 : e.name) || "",
                    scripts: (e == null ? void 0 : e.scripts) || ""
                };
            },
            activeInfoType() {
                return this.activeInfoObj.type;
            },
            nextBtnText() {
                return this.activeStep === this.showHeadersList.length - 1 ? "完成实验" : this.activeInfoType === "cutScreen" ? "实验截图" : this.activeInfoType === "textarea" ? "保存记录" : this.activeInfoType === "stepChecker" ? "步骤检查" : "下一步";
            },
            showHeadersList() {
                return [ ...this.headersList, {
                    type: "heading",
                    raw: "完成任务",
                    depth: 2,
                    text: "完成任务",
                    tokens: [ {
                        type: "text",
                        raw: "完成任务",
                        text: "完成任务"
                    } ],
                    detail: [ {
                        type: "paragraph",
                        raw: `\u4F18\u79C0\uFF01\u4F60\u987A\u5229\u5B8C\u6210\u4E86\u8BE5\u5B9E\u9A8C\u4EFB\u52A1\u3002\u8FD9\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u4F60\u6280\u80FD\u7684\u4E00\u6B21\u953B\u70BC\uFF0C\u4E5F\u662F\u5B66\u4E60\u65C5\u7A0B\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u8BF7\u7EE7\u7EED\u6311\u6218\u66F4\u591A\u7684\u5B9E\u9A8C\u4EFB\u52A1\uFF0C\u671F\u5F85\u4F60\u5728\u63A5\u4E0B\u6765\u7684\u5B66\u4E60\u4E2D\u53D6\u5F97\u66F4\u591A\u6210\u5C31\uFF01


              \u6CE8\u610F\uFF1A\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u65E0\u6CD5\u518D\u8FDB\u5165\u8BE5\u4EFB\u52A1\u5B9E\u9A8C\u73AF\u5883\u6216\u66F4\u6539\u4EFB\u4F55\u6210\u679C\u7269\uFF0C\u8BF7\u786E\u8BA4\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5DE5\u4F5C\u3002`,
                        text: `\u4F18\u79C0\uFF01\u4F60\u987A\u5229\u5B8C\u6210\u4E86\u8BE5\u5B9E\u9A8C\u4EFB\u52A1\u3002\u8FD9\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u4F60\u6280\u80FD\u7684\u4E00\u6B21\u953B\u70BC\uFF0C\u4E5F\u662F\u5B66\u4E60\u65C5\u7A0B\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u8BF7\u7EE7\u7EED\u6311\u6218\u66F4\u591A\u7684\u5B9E\u9A8C\u4EFB\u52A1\uFF0C\u671F\u5F85\u4F60\u5728\u63A5\u4E0B\u6765\u7684\u5B66\u4E60\u4E2D\u53D6\u5F97\u66F4\u591A\u6210\u5C31\uFF01


              \u6CE8\u610F\uFF1A\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u65E0\u6CD5\u518D\u8FDB\u5165\u8BE5\u4EFB\u52A1\u5B9E\u9A8C\u73AF\u5883\u6216\u66F4\u6539\u4EFB\u4F55\u6210\u679C\u7269\uFF0C\u8BF7\u786E\u8BA4\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5DE5\u4F5C\u3002`,
                        tokens: [ {
                            type: "text",
                            raw: `\u4F18\u79C0\uFF01\u4F60\u987A\u5229\u5B8C\u6210\u4E86\u8BE5\u5B9E\u9A8C\u4EFB\u52A1\u3002\u8FD9\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u4F60\u6280\u80FD\u7684\u4E00\u6B21\u953B\u70BC\uFF0C\u4E5F\u662F\u5B66\u4E60\u65C5\u7A0B\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u8BF7\u7EE7\u7EED\u6311\u6218\u66F4\u591A\u7684\u5B9E\u9A8C\u4EFB\u52A1\uFF0C\u671F\u5F85\u4F60\u5728\u63A5\u4E0B\u6765\u7684\u5B66\u4E60\u4E2D\u53D6\u5F97\u66F4\u591A\u6210\u5C31\uFF01


              \u6CE8\u610F\uFF1A\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u65E0\u6CD5\u518D\u8FDB\u5165\u8BE5\u4EFB\u52A1\u5B9E\u9A8C\u73AF\u5883\u6216\u66F4\u6539\u4EFB\u4F55\u6210\u679C\u7269\uFF0C\u8BF7\u786E\u8BA4\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5DE5\u4F5C\u3002`,
                            text: `\u4F18\u79C0\uFF01\u4F60\u987A\u5229\u5B8C\u6210\u4E86\u8BE5\u5B9E\u9A8C\u4EFB\u52A1\u3002\u8FD9\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u4F60\u6280\u80FD\u7684\u4E00\u6B21\u953B\u70BC\uFF0C\u4E5F\u662F\u5B66\u4E60\u65C5\u7A0B\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u8BF7\u7EE7\u7EED\u6311\u6218\u66F4\u591A\u7684\u5B9E\u9A8C\u4EFB\u52A1\uFF0C\u671F\u5F85\u4F60\u5728\u63A5\u4E0B\u6765\u7684\u5B66\u4E60\u4E2D\u53D6\u5F97\u66F4\u591A\u6210\u5C31\uFF01


              \u6CE8\u610F\uFF1A\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u65E0\u6CD5\u518D\u8FDB\u5165\u8BE5\u4EFB\u52A1\u5B9E\u9A8C\u73AF\u5883\u6216\u66F4\u6539\u4EFB\u4F55\u6210\u679C\u7269\uFF0C\u8BF7\u786E\u8BA4\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5DE5\u4F5C\u3002`
                        } ]
                    }, {
                        type: "space",
                        raw: `

`
                    } ],
                    htmls: `<p>\u4F18\u79C0\uFF01\u4F60\u987A\u5229\u5B8C\u6210\u4E86\u8BE5\u5B9E\u9A8C\u4EFB\u52A1\u3002\u8FD9\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u4F60\u6280\u80FD\u7684\u4E00\u6B21\u953B\u70BC\uFF0C\u4E5F\u662F\u5B66\u4E60\u65C5\u7A0B\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u8BF7\u7EE7\u7EED\u6311\u6218\u66F4\u591A\u7684\u5B9E\u9A8C\u4EFB\u52A1\uFF0C\u671F\u5F85\u4F60\u5728\u63A5\u4E0B\u6765\u7684\u5B66\u4E60\u4E2D\u53D6\u5F97\u66F4\u591A\u6210\u5C31\uFF01</p>

<p>
              \u6CE8\u610F\uFF1A\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u65E0\u6CD5\u518D\u8FDB\u5165\u8BE5\u4EFB\u52A1\u5B9E\u9A8C\u73AF\u5883\u6216\u66F4\u6539\u4EFB\u4F55\u6210\u679C\u7269\uFF0C\u8BF7\u786E\u8BA4\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5DE5\u4F5C\u3002</p>
`,
                    texts: `\u4F18\u79C0\uFF01\u4F60\u987A\u5229\u5B8C\u6210\u4E86\u8BE5\u5B9E\u9A8C\u4EFB\u52A1\u3002\u8FD9\u4E0D\u4EC5\u4EC5\u662F\u5BF9\u4F60\u6280\u80FD\u7684\u4E00\u6B21\u953B\u70BC\uFF0C\u4E5F\u662F\u5B66\u4E60\u65C5\u7A0B\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u8BF7\u7EE7\u7EED\u6311\u6218\u66F4\u591A\u7684\u5B9E\u9A8C\u4EFB\u52A1\uFF0C\u671F\u5F85\u4F60\u5728\u63A5\u4E0B\u6765\u7684\u5B66\u4E60\u4E2D\u53D6\u5F97\u66F4\u591A\u6210\u5C31\uFF01

\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u65E0\u6CD5\u518D\u8FDB\u5165\u8BE5\u4EFB\u52A1\u5B9E\u9A8C\u73AF\u5883\u6216\u66F4\u6539\u4EFB\u4F55\u6210\u679C\u7269\uFF0C\u8BF7\u786E\u8BA4\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u5FC5\u8981\u7684\u5DE5\u4F5C\u3002

`
                } ];
            }
        },
        watch: {
            headersList: {
                deep: !0,
                immediate: !0,
                handler() {}
            },
            defaultStep: {
                deep: !0,
                immediate: !0,
                handler(e) {
                    this.activeStep = e || 0;
                }
            },
            activeStep(e, t) {
                e !== t && this.$emit("stepChange", e, this.showHeadersList.length);
            },
            showCheckResult(e) {
                e && (this.showCheckResultCh = !1);
            }
        },
        mounted() {
            this.activeStep = this.defaultStep || 0;
        },
        methods: {
            prev() {
                this.showCheckResult = !1, this.showCheckResultCh = !1, this.activeStep = this.activeStep > 0 ? this.activeStep - 1 : this.activeStep;
            },
            next() {
                this.nextLoading = !0, this.showCheckResult = !1, this.nextBtnText === "下一步" ? this.$emit("changeEvent", {
                    type: "next",
                    cb: this.nextNow,
                    testStep: this.activeStep
                }) : this.nextBtnText === "完成实验" ? this.$emit("changeEvent", {
                    type: "over",
                    cb: this.nextNow,
                    testStep: this.activeStep
                }) : this.$emit("changeEvent", {
                    ...this.activeInfoObj,
                    testStep: this.activeStep,
                    textVal: this.textVal,
                    cb: this.nextNow,
                    closeLoading: () => {
                        this.nextLoading = !1;
                    }
                });
            },
            nextNow(e = 1, t) {
                this.nextLoading = !1, this.textVal = "", e === 1 ? this.activeStep = this.activeStep < this.showHeadersList.length - 1 ? this.activeStep + 1 : this.activeStep : e === 2 ? (this.checkResult = {
                    ...t
                }, this.showCheckResult = !0, t.exitCode === 0 && (this.activeStep = this.activeStep < this.showHeadersList.length - 1 ? this.activeStep + 1 : this.activeStep, 
                setTimeout(() => {
                    this.showCheckResult = !1;
                }, 2e3))) : e === 3 && (t.data.length > 0 ? this.checkResultList = [ ...t.data ] : this.checkResultList = [ {
                    name: "挑战脚本检测",
                    error: t.msg || "检测失败！"
                } ], this.showCheckResultCh = !0);
            },
            jumpStep() {
                this.showCheckResult = !1, this.$emit("changeEvent", {
                    ...this.activeInfoObj,
                    testStep: this.activeStep,
                    textVal: this.textVal,
                    jumpFlag: !0,
                    cb: this.nextNow
                });
            }
        }
    }, f = () => {
        X(e => ({
            "0e665ba4": e.fontSizeNumber
        }));
    }, C = v.setup;
    v.setup = C ? (e, t) => (f(), C(e, t)) : f;
    const E = {
        class: "cont-box"
    }, $ = {
        class: m([ "title neu-ellipse px-5" ])
    }, z = {
        key: 0,
        class: "text-input px-5px"
    }, H = {
        class: "step-check-result pa-8px"
    }, O = {
        class: "result-title"
    }, D = {
        key: 0,
        class: "result-btns"
    }, M = {
        class: "step-check-result pa-2"
    }, P = {
        key: 0,
        class: "result-btns"
    }, A = {
        class: "btns-box"
    }, F = {
        class: "step-box"
    };
    B = ie(v, [ [ "render", function(e, t, c, k, a, i) {
        var g, b, y, R, w, L, I, _, T;
        const J = K("MdPreview"), G = Y, r = ee, S = Z;
        return l(), p("div", E, [ n("div", {
            class: m([ "text-box", c.isDark ? "is-dark" : "" ])
        }, [ n("div", $, h((g = i.activeInfo) == null ? void 0 : g.text), 1), n("div", {
            class: m([ "text-content px-10px", c.isCopyCode ? "" : "is-not-copy-code" ])
        }, [ d(J, {
            editorId: a.getRandomId,
            modelValue: (b = i.activeInfo) == null ? void 0 : b.texts,
            class: "!px-0px",
            theme: c.isDark ? "dark" : "light"
        }, null, 8, [ "editorId", "modelValue", "theme" ]) ], 2), i.nextBtnText === "保存记录" ? (l(), 
        p("div", z, [ d(G, {
            type: "textarea",
            modelValue: a.textVal,
            "onUpdate:modelValue": t[0] || (t[0] = s => a.textVal = s),
            placeholder: i.activeInfoObj.name || "请输入实验记录",
            autosize: !1,
            maxlength: 500,
            "show-word-limit": ""
        }, null, 8, [ "modelValue", "placeholder" ]) ])) : o("", !0) ], 2), V(n("div", H, [ n("div", O, [ ((y = a.checkResult) == null ? void 0 : y.exitCode) !== 0 ? (l(), 
        u(r, {
            key: 0,
            icon: "ep:warning-filled",
            class: "neu-color-red"
        })) : o("", !0), ((R = a.checkResult) == null ? void 0 : R.exitCode) === 0 ? (l(), 
        u(r, {
            key: 1,
            icon: "ep:success-filled",
            class: "neu-color-green"
        })) : o("", !0), x(" " + h(((w = a.checkResult) == null ? void 0 : w.exitCode) === 0 ? "检测成功" : `${(L = a.checkResult) == null ? void 0 : L.name}: ${(I = a.checkResult) == null ? void 0 : I.error}`), 1) ]), ((_ = a.checkResult) == null ? void 0 : _.exitCode) !== 0 ? (l(), 
        p("div", D, [ n("div", {
            class: "btn-jump btn",
            onClick: t[1] || (t[1] = (...s) => i.jumpStep && i.jumpStep(...s))
        }, "跳过"), n("div", {
            class: "btn-repeat btn",
            onClick: t[2] || (t[2] = s => i.next())
        }, "重新检测") ])) : o("", !0) ], 512), [ [ j, a.showCheckResult ] ]), V(n("div", M, [ (l(!0), 
        p(Q, null, W(a.checkResultList, (s, U) => (l(), p("div", {
            class: "result-title",
            key: "res" + U
        }, [ (s == null ? void 0 : s.exitCode) !== 0 ? (l(), u(r, {
            key: 0,
            icon: "ep:warning-filled",
            class: "neu-color-red"
        })) : o("", !0), (s == null ? void 0 : s.exitCode) === 0 ? (l(), u(r, {
            key: 1,
            icon: "ep:success-filled",
            class: "neu-color-green"
        })) : o("", !0), x(" " + h(s == null ? void 0 : s.name) + " ： " + h((s == null ? void 0 : s.error) || "检测成功"), 1) ]))), 128)), ((T = a.checkResult) == null ? void 0 : T.exitCode) !== 0 ? (l(), 
        p("div", P, [ n("div", {
            class: "btn-repeat btn",
            onClick: t[3] || (t[3] = s => i.next())
        }, "重新检测") ])) : o("", !0) ], 512), [ [ j, a.showCheckResultCh ] ]), n("div", A, [ d(S, {
            class: "btn",
            type: "primary",
            size: "default",
            onClick: t[4] || (t[4] = s => i.prev()),
            disabled: a.activeStep === 0
        }, {
            default: N(() => [ x("上一步") ]),
            _: 1
        }, 8, [ "disabled" ]), n("div", F, h(a.activeStep + 1) + "/" + h(i.showHeadersList.length), 1), d(S, {
            class: "btn",
            type: "primary",
            size: "default",
            loading: a.nextLoading,
            onClick: t[5] || (t[5] = s => i.next())
        }, {
            default: N(() => [ x(h(i.nextBtnText), 1) ]),
            _: 1
        }, 8, [ "loading" ]) ]) ]);
    } ], [ "__scopeId", "data-v-605e625d" ] ]);
});

export {
    ne as __tla,
    B as default
};