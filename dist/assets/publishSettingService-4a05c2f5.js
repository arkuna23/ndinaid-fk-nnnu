import {
    r as i,
    a0 as j,
    e as x,
    o as R,
    c as A,
    k as n,
    l as p,
    H as _,
    v as S,
    a,
    m as g,
    n as U,
    J as V,
    aU as q,
    __tla as z
} from "./index-6c08ea4c.js";

import H, {
    __tla as L
} from "./publishSetting-0358033b.js";

import {
    n as B,
    __tla as J
} from "./assignmentAndAssessment-58199f67.js";

import {
    __tla as E
} from "./index-9567cbf6.js";

import "./keyboardDisable-3c8e0d58.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let f, G = Promise.all([ (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})() ]).then(async () => {
    f = {
        __name: "publishSettingService",
        props: {
            controlsType: {
                type: String,
                default: "1"
            },
            selectedPaperIdList: {
                type: Array,
                default: () => []
            },
            sourceType: {
                type: String,
                default: ""
            },
            isStart: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "update:formData", "setPublish", "closePublishService" ],
        setup(T, {
            expose: b,
            emit: C
        }) {
            const s = i(!1), r = i(null), c = i(!1), d = C, l = i({
                releaseStatus: "1",
                resClassCtlResp: {
                    openTimeStr: "",
                    range: "0",
                    closeTimeStr: "",
                    antiCheatingSettings: [],
                    answerPublishType: "1",
                    scorePublishType: "2",
                    multiTryFlag: "0",
                    multiTryTimes: null,
                    scoreCalculateType: "1"
                }
            }), y = T, {
                controlsType: P,
                selectedPaperIdList: m,
                sourceType: D
            } = j(y), I = x(() => y.controlsType === "3" ? "发布" : "发布设置"), u = i(""), h = e => {
                B(e).then(t => {
                    c.value = t, m.value.length > 1 && !u.value && (c.value = !0);
                });
            }, F = e => {
                l.value = {
                    releaseStatus: [ "0", 0, null ].includes(e == null ? void 0 : e.isOpen) ? "0" : [ "0", 0 ].includes(e == null ? void 0 : e.openType) ? "1" : "2",
                    resClassCtlResp: {
                        openTimeStr: (e == null ? void 0 : e.openTimeStr) || "",
                        range: "0",
                        closeTimeStr: (e == null ? void 0 : e.closeTimeStr) || "",
                        antiCheatingSettings: [ ...e.questionDisorder === "1" ? [ "questionDisorder" ] : [], ...e.optionDisorder === "1" ? [ "optionDisorder" ] : [] ],
                        answerPublishType: (e == null ? void 0 : e.answerPublishType) || "",
                        scorePublishType: (e == null ? void 0 : e.scorePublishType) || "",
                        multiTryFlag: (e == null ? void 0 : e.multiTryFlag) || "",
                        multiTryTimes: (e == null ? void 0 : e.multiTryTimes) || null,
                        scoreCalculateType: (e == null ? void 0 : e.scoreCalculateType) || ""
                    }
                };
            }, k = () => {
                r.value && r.value.clearForm(), l.value = {
                    releaseStatus: "1",
                    resClassCtlResp: {
                        openTimeStr: "",
                        range: "0",
                        closeTimeStr: "",
                        antiCheatingSettings: [],
                        answerPublishType: "1",
                        scorePublishType: "2",
                        multiTryFlag: "0",
                        multiTryTimes: null,
                        scoreCalculateType: "1"
                    }
                }, u.value = "", d("closePublishService");
            }, w = () => {
                r.value.validateForm().then(async e => {
                    d("setPublish", {
                        ...l.value,
                        resId: u.value
                    });
                });
            };
            return b({
                handleOpen: e => {
                    e && Object.keys(e).length > 0 ? (u.value = e.outerId, y.controlsType === "2" && F(e), 
                    h([ e.outerId ])) : (m.value.length > 0 && h(m.value), l.value.releaseStatus = "1"), 
                    s.value = !0, U(() => {
                        r.value.getInformationAboutTheClass();
                    });
                },
                handleCancel: () => {
                    s.value = !1;
                }
            }), (e, t) => {
                const v = V, O = q;
                return R(), A("div", null, [ n(O, {
                    modelValue: a(s),
                    "onUpdate:modelValue": t[2] || (t[2] = o => g(s) ? s.value = o : null),
                    "max-height": 650,
                    scroll: !0,
                    truthHeight: 650,
                    width: 950,
                    title: a(I),
                    onClose: k
                }, {
                    footer: p(() => [ n(v, {
                        size: "large",
                        onClick: t[1] || (t[1] = _(o => s.value = !1, [ "stop" ]))
                    }, {
                        default: p(() => [ S("取消") ]),
                        _: 1
                    }), n(v, {
                        size: "large",
                        type: "primary",
                        onClick: _(w, [ "stop" ])
                    }, {
                        default: p(() => [ S("确定") ]),
                        _: 1
                    }) ]),
                    default: p(() => [ n(H, {
                        ref_key: "publishSettingRef",
                        ref: r,
                        resId: a(u),
                        isStart: T.isStart,
                        controlsType: a(P),
                        sourceType: a(D),
                        isPurelyObjective: a(c),
                        formData: a(l),
                        "onUpdate:formData": t[0] || (t[0] = o => g(l) ? l.value = o : null)
                    }, null, 8, [ "resId", "isStart", "controlsType", "sourceType", "isPurelyObjective", "formData" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    };
});

export {
    G as __tla,
    f as default
};