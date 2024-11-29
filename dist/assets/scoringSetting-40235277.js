import {
    e as I,
    r as n,
    w as S,
    o as x,
    C as L,
    l as r,
    k as o,
    v as d,
    t,
    x as h,
    O as T,
    ak as D,
    Q as U,
    J as B,
    aU as j,
    R as N,
    S as O,
    __tla as R
} from "./index-6c08ea4c.js";

import q, {
    __tla as z
} from "./tagSelectAPool-627762c5.js";

import {
    _ as J
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as P
} from "./index-33f7224d.js";

import {
    __tla as Q
} from "./el-infinite-scroll-9cd61b58.js";

import {
    __tla as A
} from "./throttle-1adeb119.js";

import {
    __tla as E
} from "./index-13c88727.js";

import {
    __tla as F
} from "./dict-c5825220.js";

import "./tree-05ea8e09.js";

import {
    __tla as G
} from "./index-7c75bd27.js";

import {
    __tla as H
} from "./index-d1db0401.js";

import {
    __tla as K
} from "./DeptTag-1be092ce.js";

let v, M = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let p;
    p = (e => (N("data-v-1c032602"), e = e(), O(), e))(() => t("div", {
        class: "messageBoxTip"
    }, [ t("span", {
        class: "tipImg"
    }), t("span", {
        class: "flex"
    }, [ d("说明： "), t("div", null, [ t("span", null, [ d("客观题系统自动批阅（客观题包括单选题、多选题、判断题）"), t("br"), d("阅卷设置完成后，请阅卷人员前往阅卷中心进行试卷批阅") ]) ]) ]) ], -1)), 
    v = J({
        __name: "scoringSetting",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            form: {
                type: Object,
                default: () => ({})
            },
            isDisabled: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:modelValue", "submitNow" ],
        setup(e, {
            emit: k
        }) {
            const c = k, _ = e, m = I({
                get: () => _.modelValue,
                set: s => {
                    c("update:modelValue", s);
                }
            }), b = n({
                markType: [ {
                    required: !0,
                    message: "请选择阅卷方式",
                    trigger: [ "blur" ]
                } ]
            }), l = n({
                markType: "1",
                markerList: [],
                hideCandidateInfoSwitch: !1
            }), f = n();
            S(() => m.value, s => {
                s && (l.value = {
                    markType: _.form.markType || "1",
                    markerList: _.form.markerList || [],
                    hideCandidateInfoSwitch: _.form.hideCandidateInfoSwitch || !1
                });
            });
            const V = (s, a) => {
                f.value.validate(u => {
                    u ? c("submitNow", l.value, s, a) : a && a();
                });
            };
            return (s, a) => {
                const u = T, w = D, g = U, y = B, C = j;
                return x(), L(C, {
                    modelValue: m.value,
                    "onUpdate:modelValue": a[3] || (a[3] = i => m.value = i),
                    width: "800px",
                    title: "阅卷设置"
                }, {
                    footer: r(() => [ o(y, {
                        type: "primary",
                        onClick: V
                    }, {
                        default: r(() => [ d(" 确定 ") ]),
                        _: 1
                    }), o(y, {
                        onClick: a[2] || (a[2] = i => m.value = !1)
                    }, {
                        default: r(() => [ d("取消") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ o(g, {
                        model: l.value,
                        ref_key: "formRef",
                        ref: f,
                        size: "default",
                        disabled: e.isDisabled,
                        rules: b.value,
                        "label-width": "160px"
                    }, {
                        default: r(() => [ p, o(u, {
                            label: "阅卷人员",
                            prop: "markerList"
                        }, {
                            default: r(() => [ t("div", {
                                style: h(e.isDisabled ? "cursor: not-allowed;" : "")
                            }, [ t("div", {
                                style: h(e.isDisabled ? "pointer-events: none;opacity: 0.5;" : "")
                            }, [ o(q, {
                                modelValue: l.value.markerList,
                                "onUpdate:modelValue": a[0] || (a[0] = i => l.value.markerList = i),
                                type: "managers",
                                title: "只显示管理者和教学者身份的用户，并自动过滤已添加的用户及账号已停用的用户"
                            }, null, 8, [ "modelValue" ]) ], 4) ], 4) ]),
                            _: 1
                        }), o(u, {
                            label: "阅卷时隐藏考生信息",
                            prop: "hideCandidateInfoSwitch"
                        }, {
                            default: r(() => [ o(w, {
                                modelValue: l.value.hideCandidateInfoSwitch,
                                "onUpdate:modelValue": a[1] || (a[1] = i => l.value.hideCandidateInfoSwitch = i)
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "disabled", "rules" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-1c032602" ] ]);
});

export {
    M as __tla,
    v as default
};