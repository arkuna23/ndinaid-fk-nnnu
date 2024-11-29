import {
    r,
    e as K,
    w as Q,
    aV as X,
    o as j,
    C as Y,
    l as m,
    k as d,
    t as e,
    A as D,
    a as t,
    c as Z,
    B as O,
    G as $,
    x as ee,
    z as ae,
    v as i,
    m as q,
    n as le,
    M as te,
    s as se,
    J as ue,
    a9 as ie,
    R as oe,
    S as ne,
    __tla as re
} from "./index-6c08ea4c.js";

import {
    E as de,
    __tla as ce
} from "./el-drawer-fca4d971.js";

import {
    E as ve,
    __tla as me
} from "./el-link-8197297a.js";

import _e, {
    __tla as pe
} from "./solution-dcea957b.js";

import {
    _ as fe
} from "./_plugin-vue_export-helper-1b428a4d.js";

let F, he = Promise.all([ (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return me;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})() ]).then(async () => {
    let o, g, V, b, k, w, C, E, M, B, x, z;
    o = c => (oe("data-v-ef741a90"), c = c(), ne(), c), g = {
        class: "main-body"
    }, V = o(() => e("div", {
        class: "main-title"
    }, "说明：本次考试已开启登录人脸识别/实时比对监测功能，请确保设备调试正常", -1)), b = {
        class: "main-view"
    }, k = {
        class: "error"
    }, w = {
        class: "message-title"
    }, C = {
        class: "message"
    }, E = o(() => e("div", null, " 说明： ", -1)), M = o(() => e("div", null, " 1、请使用PC客户端登录考试，仅PC客户端支持登录时人脸识别验证、人脸实时对比监测功能，避免因为在网页端考试，增加被判作弊的风险 ", -1)), 
    B = o(() => e("span", {
        style: {
            color: "#FA4B4B"
        }
    }, "无法调用摄像头", -1)), x = o(() => e("div", null, [ i(" 3、当显示"), e("span", {
        style: {
            color: "#FA4B4B"
        }
    }, "未检测到摄像头"), i("时：请检查摄像头硬件设备是否完好 ") ], -1)), z = {
        class: "bot-box"
    }, F = fe({
        __name: "debugEquipment",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue" ],
        setup(c, {
            emit: R
        }) {
            const _ = r(!1), T = R, n = r(1), s = r(1), u = r(null), p = r(""), W = c, v = K({
                get: () => W.modelValue,
                set: a => {
                    T("update:modelValue", a);
                }
            }), h = r(!1);
            function y() {
                h.value = !0, n.value = 1, s.value = 1, navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                    audio: !1,
                    video: {
                        facingMode: "user",
                        resizeMode: "none",
                        width: {
                            ideal: u.value.clientWidth
                        },
                        aspectRatio: u.value.clientWidth / u.value.clientHeight
                    }
                }).then(a => {
                    u.value && (u.value.srcObject = a, a.oninactive = l => {
                        y();
                    }, n.value = 3);
                }).catch(a => {
                    n.value = 2, function(l) {
                        l.name === "NotAllowedError" || l.name, A(1);
                    }(a);
                }) : (n.value = 2, A(2)), setTimeout(() => {
                    s.value = n.value, h.value = !1;
                }, 3e3);
            }
            function A(a) {
                switch (a) {
                  case 1:
                    p.value = "无法调用摄像头";
                    break;

                  case 2:
                    p.value = "未检测到摄像头";
                }
            }
            function P() {
                var a;
                (a = u.value) != null && a.srcObject && (u.value.srcObject.getTracks().forEach(l => {
                    l.stop();
                }), u.value = null);
            }
            function G() {
                p.value = "", P(), n.value = 1, s.value = 1, v.value = !1;
            }
            function H() {
                _.value = !0;
            }
            return Q(() => v.value, a => {
                a && le(() => {
                    y(), u.value.addEventListener("error", function(l) {});
                });
            }), X(() => {
                P();
            }), (a, l) => {
                const I = te, J = se, L = ve, U = ue, N = de, S = ie;
                return j(), Y(N, {
                    modelValue: t(v),
                    "onUpdate:modelValue": l[2] || (l[2] = f => q(v) ? v.value = f : null),
                    size: "100%",
                    title: "",
                    direction: "rtl",
                    "with-header": !0
                }, {
                    default: m(() => [ d(J, {
                        "model-value": "1",
                        class: "demo-tabs"
                    }, {
                        default: m(() => [ d(I, {
                            label: "设备调试",
                            name: "1"
                        }) ]),
                        _: 1
                    }), e("div", g, [ V, D((j(), Z("div", b, [ D(e("div", k, [ e("span", null, O(t(p)), 1) ], 512), [ [ $, t(s) === 2 ] ]), e("video", {
                        class: "video",
                        ref_key: "video",
                        ref: u,
                        style: ee(t(s) === 2 ? "z-index:-1;" : ""),
                        autoplay: ""
                    }, null, 4), e("div", w, [ e("div", {
                        class: ae([ "right", t(s) === 1 ? "orange" : t(s) === 2 ? "red" : t(s) === 3 ? "green" : "" ])
                    }, O(t(s) === 1 ? "检测中" : t(s) === 2 ? "设备异常" : t(s) === 3 ? "设备正常" : ""), 3) ]) ])), [ [ S, t(h) ] ]), e("div", C, [ E, M, e("div", null, [ i(" 2、当显示"), B, i("时：推荐使用PC客户端进行设备调试；浏览器也支持设备调试，但可能会存在安全性原因导致无法调用摄像头，"), d(L, {
                        type: "primary",
                        onClick: H
                    }, {
                        default: m(() => [ i("查看解决方案") ]),
                        _: 1
                    }) ]), x ]) ]), e("div", z, [ d(U, {
                        type: "primary",
                        onClick: l[0] || (l[0] = f => y())
                    }, {
                        default: m(() => [ i("重新调试 ") ]),
                        _: 1
                    }), d(U, {
                        onClick: G
                    }, {
                        default: m(() => [ i("返回") ]),
                        _: 1
                    }) ]), d(_e, {
                        modelValue: t(_),
                        "onUpdate:modelValue": l[1] || (l[1] = f => q(_) ? _.value = f : null)
                    }, null, 8, [ "modelValue" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ef741a90" ] ]);
});

export {
    he as __tla,
    F as default
};