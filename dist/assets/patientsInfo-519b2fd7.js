import {
    p as H,
    o as i,
    c as s,
    t as e,
    v as p,
    B as l,
    F as f,
    y as r,
    z as h,
    k as m,
    l as K,
    _ as M,
    J as Q,
    R as U,
    S as W,
    __tla as X
} from "./index-6c08ea4c.js";

import {
    C as b
} from "./patients-6f7adc6a.js";

import {
    _ as Y
} from "./_plugin-vue_export-helper-1b428a4d.js";

let V, Z = Promise.all([ (() => {
    try {
        return X;
    } catch {}
})() ]).then(async () => {
    const d = H(), y = {
        props: {
            patientInfo: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "startExpNow" ],
        data: () => ({
            bodyInfoList: [],
            shapeInfoList: [],
            activeVal: {
                value: ""
            },
            activeTextVal: {
                value: ""
            },
            activeShapeVal: {
                value: ""
            }
        }),
        computed: {
            textList() {
                return (this.bodyInfoList.find(a => a.value === this.activeVal.value) || {
                    children: []
                }).children;
            }
        },
        created() {
            this.bodyInfoList = JSON.parse(JSON.stringify(b.bodyInfoList)), this.shapeInfoList = JSON.parse(JSON.stringify(b.shapeInfoList));
        },
        methods: {
            changeActiveVal(a) {
                this.activeVal = a, this.activeTextVal = a.children[0];
            },
            changeActiveTextVal(a) {
                this.activeTextVal = a;
            },
            changeActiveShapeVal(a) {
                this.activeShapeVal = a;
            },
            startExp() {
                this.activeVal && this.activeVal.value ? this.activeTextVal && this.activeTextVal.value ? this.activeShapeVal && this.activeShapeVal.value ? this.$emit("startExpNow", {
                    body: this.activeVal,
                    bodyType: this.activeTextVal,
                    shape: this.activeShapeVal
                }) : d.warning("请选择扫描体位") : d.warning("请选择扫描部位类型") : d.warning("请选择扫描部位");
            }
        }
    }, c = a => (U("data-v-c0e431e4"), a = a(), W(), a), x = {
        class: "patient-info px-3"
    }, g = {
        class: "top-info px-6 pb-5"
    }, I = c(() => e("div", {
        class: "info-title align-center"
    }, "患者信息", -1)), S = {
        class: "info-cont"
    }, k = {
        class: "info-item left mb-2"
    }, _ = c(() => e("span", null, "患者编号：", -1)), L = {
        class: "info-item right ml-8"
    }, A = {
        class: "info-item right ml-8"
    }, T = {
        class: "info-item right"
    }, C = {
        class: "info-item left full"
    }, N = c(() => e("span", null, "医嘱：", -1)), w = {
        class: "bot-form"
    }, J = c(() => e("div", {
        class: "info-title align-center"
    }, "请选择扫描部位", -1)), O = {
        class: "body-box px-10"
    }, E = {
        class: "body-box-top"
    }, z = [ "onClick" ], j = {
        class: "body-box-bot"
    }, B = [ "onClick" ], D = c(() => e("div", {
        class: "info-title align-center"
    }, "请选择扫描体位", -1)), F = {
        class: "shape-box"
    }, R = [ "onClick" ], $ = {
        class: "shape-item-name"
    }, q = {
        class: "btn-box mt-6"
    };
    V = Y(y, [ [ "render", function(a, ee, n, te, o, v) {
        const G = M, P = Q;
        return i(), s("div", x, [ e("div", g, [ I, e("div", S, [ e("div", k, [ _, p(" " + l(n.patientInfo.ID || "--"), 1) ]), e("div", L, "年龄：" + l(n.patientInfo.Age || "--"), 1), e("div", A, "性别：" + l(n.patientInfo.Sex || "--"), 1), e("div", T, "姓名：" + l(n.patientInfo.Name || "--"), 1), e("div", C, [ N, p(" " + l(n.patientInfo.Info || "--"), 1) ]) ]) ]), e("div", w, [ J, e("div", O, [ e("div", E, [ (i(!0), 
        s(f, null, r(o.bodyInfoList, t => (i(), s("div", {
            key: t.value,
            class: h([ "body-box-top-item", "body-" + t.value, o.activeVal.value === t.value ? "isActive" : "" ]),
            onClick: u => v.changeActiveVal(t)
        }, null, 10, z))), 128)) ]), e("div", j, [ (i(!0), s(f, null, r(v.textList, t => (i(), 
        s("div", {
            key: t.value,
            class: h([ "body-box-bot-item", o.activeTextVal.value === t.value ? "isActive" : "" ]),
            onClick: u => v.changeActiveTextVal(t)
        }, [ p(l(t.name) + " ", 1), m(G, {
            icon: "ep:circle-check-filled",
            class: "active-icon",
            size: 14
        }) ], 10, B))), 128)) ]) ]), D, e("div", F, [ (i(!0), s(f, null, r(o.shapeInfoList, t => (i(), 
        s("div", {
            key: t.value,
            class: h([ "shape-item", o.activeShapeVal.value === t.value ? "isActive" : "" ]),
            onClick: u => v.changeActiveShapeVal(t)
        }, [ e("div", {
            class: h([ "shape-item-img", "shape-item-" + t.value ])
        }, null, 2), e("div", $, l(t.name), 1) ], 10, R))), 128)) ]), e("div", q, [ m(P, {
            type: "primary",
            onClick: v.startExp
        }, {
            default: K(() => [ p("开始实验") ]),
            _: 1
        }, 8, [ "onClick" ]) ]) ]) ]);
    } ], [ "__scopeId", "data-v-c0e431e4" ] ]);
});

export {
    Z as __tla,
    V as default
};