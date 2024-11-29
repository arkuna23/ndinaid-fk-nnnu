import {
    e as k,
    o as N,
    c as B,
    k as M,
    l as z,
    t,
    B as i,
    v as o,
    D as P,
    a as u,
    m as R,
    J as U,
    aS as q,
    R as A,
    S as E,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    _ as H
} from "./sub-exam-7ad7df56.js";

import {
    f as C,
    __tla as K
} from "./formatTime-de6f1520.js";

import {
    _ as L
} from "./_plugin-vue_export-helper-1b428a4d.js";

let j, Q = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let l, d, c, p, _, b, v, h, y, g, D, V, x, S, T;
    l = a => (A("data-v-13485304"), a = a(), E(), a), d = {
        class: "submission-detail"
    }, c = l(() => t("img", {
        src: H
    }, null, -1)), p = {
        class: "submission-info"
    }, _ = l(() => t("div", {
        class: "title"
    }, " 交卷成功 ", -1)), b = {
        class: "info-box"
    }, v = {
        key: 0
    }, h = l(() => t("span", {
        class: "info-title"
    }, "我的成绩：", -1)), y = {
        style: {
            "font-size": "54px",
            "line-height": "54px",
            "font-weight": "bold",
            color: "#3D3D3D"
        }
    }, g = l(() => t("span", {
        class: "info-title"
    }, "考生姓名：", -1)), D = l(() => t("span", {
        class: "info-title"
    }, "学号：", -1)), V = l(() => t("span", {
        class: "info-title"
    }, "开始时间：", -1)), x = l(() => t("span", {
        class: "info-title"
    }, "交卷时间：", -1)), S = l(() => t("span", {
        class: "info-title"
    }, "答题用时：", -1)), T = {
        class: "submit-btn"
    }, j = L({
        __name: "submissionDetail",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            form: {
                type: Object,
                default: () => ({})
            },
            isSub: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue" ],
        setup(a, {
            emit: F
        }) {
            const I = F, r = a, J = k(() => {
                if (r.form.startTime && r.form.submitTime) {
                    var s = new Date(r.form.startTime), e = new Date(r.form.submitTime) - s, f = Math.floor(e / 6e4), m = Math.floor(e % 6e4 / 1e3);
                    return f + " 分钟 " + (m === 0 ? "" : m + " 秒");
                }
                return "0分钟";
            }), n = k({
                get: () => r.modelValue,
                set: s => {
                    I("update:modelValue", s);
                }
            });
            function O(s) {
                s = s.trim();
                const e = Number.parseFloat(s);
                return isNaN(e) || e.toString() === s ? s : Math.floor(e).toString();
            }
            return (s, e) => {
                const f = U, m = q;
                return N(), B("div", d, [ M(m, {
                    modelValue: u(n),
                    "onUpdate:modelValue": e[1] || (e[1] = w => R(n) ? n.value = w : null),
                    width: "525px",
                    title: "阅卷设置"
                }, {
                    default: z(() => [ c, t("div", p, [ _, t("div", b, [ a.form.score ? (N(), 
                    B("div", v, [ h, t("span", y, i(O(a.form.score)), 1), o("分 ") ])) : P("", !0), t("div", null, [ g, o(i(a.form.nickName), 1) ]), t("div", null, [ D, o(i(a.form.number), 1) ]), t("div", null, [ V, o(i(u(C)(a.form.startTime)), 1) ]), t("div", null, [ x, o(i(u(C)(a.form.submitTime)), 1) ]), t("div", null, [ S, o(i(u(J)), 1) ]) ]) ]), t("div", T, [ M(f, {
                        style: {
                            width: "80px"
                        },
                        type: "primary",
                        size: "large",
                        onClick: e[0] || (e[0] = w => n.value = !1)
                    }, {
                        default: z(() => [ o(i(a.isSub ? "关闭" : "返回"), 1) ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-13485304" ] ]);
});

export {
    Q as __tla,
    j as default
};