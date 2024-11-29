import {
    r as u,
    a0 as j,
    o as k,
    c as F,
    k as n,
    l as d,
    t as C,
    v as R,
    a as o,
    m as T,
    C as J,
    aY as O,
    n as W,
    M as Y,
    s as G,
    J as H,
    aU as K,
    dW as X,
    __tla as Z
} from "./index-6c08ea4c.js";

import {
    R as $,
    M as D,
    __tla as ee
} from "./rulemaking-fae7d850.js";

import {
    g as L,
    __tla as ae
} from "./questionBank-6fe58de9.js";

import {
    _ as te
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as oe
} from "./chooseTags-11285796.js";

import {
    __tla as le
} from "./index-5adb716b.js";

import {
    __tla as se
} from "./dict-c5825220.js";

import "./keyboardDisable-3c8e0d58.js";

import {
    __tla as ie
} from "./index-ef4d146e.js";

let b, ne = Promise.all([ (() => {
    try {
        return Z;
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
        return oe;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})() ]).then(async () => {
    let f, h;
    f = {
        class: "form-content"
    }, h = {
        class: "dialog-footer align-center"
    }, b = te({
        __name: "randomService",
        props: {
            randomServiceTitle: {
                type: String,
                default: () => ""
            },
            paperCompositionType: {
                type: String,
                default: "1"
            },
            questionIdList: {
                type: Array,
                default: () => []
            },
            ruleIsEdit: {
                type: Boolean,
                default: !1
            },
            editData: {
                type: Object,
                default: () => {}
            }
        },
        emits: [ "pushExamRule", "insertQuestion", "popUpClose" ],
        setup(M, {
            expose: E,
            emit: w
        }) {
            const V = M, p = w, r = u(null), c = u([]), {
                randomServiceTitle: x,
                paperCompositionType: Q,
                questionIdList: P,
                ruleIsEdit: q,
                editData: g
            } = j(V), U = u(!1), t = u("1"), s = u(!1), I = () => {
                s.value = !1;
            }, A = () => {
                r.value.handleThrowData();
            }, z = m => {
                switch (Q.value) {
                  case "1":
                    return (e => {
                        let a = {
                            questionType: e.questionType,
                            questionScore: e.questionScore,
                            tags: e.tags,
                            release: e.release,
                            parentId: X(e.id),
                            ktPointIdList: e.ktPointIdList
                        }, _ = [ "1" ].includes(t.value), l = e.specialVariable, v = l ? D.getQuestionsFromMyPoolListApi : D.getQuestionsFromMyPoolListNotApi;
                        _ ? (a.questionRandomMap = l ? e.questionRandomMap : void 0, 
                        a.questionRandom = l ? void 0 : e.questionRandom) : (a.bankType = e.bankType, 
                        a.bankId = e.bankId, a.questionRandomMap = l ? e.questionRandomMap : void 0, 
                        a.questionRandom = l ? void 0 : e.questionRandom), v(a).then(i => {
                            let S = i;
                            S.forEach(y => {
                                y.questionScore = e.questionScore, y.paperQuestion && (y.paperQuestion.questionScore = e.questionScore);
                            }), p("insertQuestion", S, t.value), s.value = !1;
                        });
                    })(m);

                  case "2":
                    return (e => {
                        let a = {
                            ...e,
                            folderId: e.id,
                            questionScope: t.value,
                            id: new Date().getTime().toString()
                        };
                        p("pushExamRule", a), s.value = !1;
                    })(m);
                }
            }, B = async () => {
                r.value.clearDataCache(), c.value = await L([ "1" ].includes(t.value) ? "0" : "1");
            }, N = () => {
                t.value = "1", r.value.clearDataCache(), p("popUpClose");
            };
            return E({
                handleOpen: async () => {
                    s.value = !0, c.value = await L([ "1" ].includes(t.value) ? "0" : "1"), 
                    W(() => {
                        q.value && (r.value.copyDataByEdit(), t.value = g.value.questionScope);
                    });
                },
                handleCancel: I
            }), (m, e) => {
                const a = Y, _ = G, l = H, v = K;
                return k(), F("div", null, [ n(v, {
                    modelValue: o(s),
                    "onUpdate:modelValue": e[2] || (e[2] = i => T(s) ? s.value = i : null),
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    title: o(x),
                    class: "neu-footer-right",
                    style: {
                        height: "666px"
                    },
                    width: "785px",
                    onClose: N
                }, {
                    footer: d(() => [ C("div", h, [ n(l, {
                        size: "default",
                        onClick: e[1] || (e[1] = i => I())
                    }, {
                        default: d(() => [ R("取 消 ") ]),
                        _: 1
                    }), n(l, {
                        loading: o(U),
                        size: "default",
                        type: "primary",
                        onClick: A
                    }, {
                        default: d(() => [ R("确 定 ") ]),
                        _: 1
                    }, 8, [ "loading" ]) ]) ]),
                    default: d(() => [ C("div", f, [ n(_, {
                        modelValue: o(t),
                        "onUpdate:modelValue": e[0] || (e[0] = i => T(t) ? t.value = i : null),
                        onTabChange: B
                    }, {
                        default: d(() => [ n(a, {
                            label: "个人试题库",
                            name: "1"
                        }), n(a, {
                            label: "校本试题库",
                            name: "2"
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), (k(), J(O($), {
                        ref_key: "ruleMakingRef",
                        ref: r,
                        treeList: o(c),
                        questionIdList: o(P),
                        editData: o(g),
                        ruleIsEdit: o(q),
                        onThrowData: z,
                        activeName: o(t)
                    }, null, 40, [ "treeList", "questionIdList", "editData", "ruleIsEdit", "activeName" ])) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-afcd5664" ] ]);
});

export {
    ne as __tla,
    b as default
};