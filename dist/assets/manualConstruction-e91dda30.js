import {
    d as G,
    p as H,
    b8 as W,
    r as u,
    a0 as Y,
    o as n,
    c as y,
    k as i,
    l as c,
    F,
    y as I,
    a as t,
    C as v,
    H as $,
    m as B,
    D as J,
    A as K,
    t as Z,
    G as X,
    dW as tt,
    M as at,
    ab as et,
    ac as lt,
    O as rt,
    Q as st,
    s as ot,
    __tla as ut
} from "./index-6c08ea4c.js";

import {
    Q as _t,
    __tla as it
} from "./questionInfo-7ad6a9af.js";

import {
    d as E,
    D as S,
    __tla as nt
} from "./dict-c5825220.js";

import ct, {
    __tla as mt
} from "./chooseTags-11285796.js";

import {
    M as V,
    __tla as ft
} from "./myQuestionBank-a9dcc9db.js";

import {
    h as dt,
    __tla as pt
} from "./neuResourceQuestion-36ca89a3.js";

import {
    _ as yt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as vt
} from "./type1-81e690fe.js";

import {
    __tla as ht
} from "./editEditor-a03e6696.js";

import {
    __tla as gt
} from "./Editor-ef737d2a.js";

import {
    __tla as qt
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as bt
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as Tt
} from "./file-e038b35d.js";

import "./editEditor.vue_vue_type_style_index_0_scoped_bf777343_lang-f0d79ba2.js";

import {
    __tla as kt
} from "./type2-cee6fed1.js";

import {
    __tla as Ft
} from "./type3-da6f6f46.js";

import {
    __tla as It
} from "./type4-0f2e1cd1.js";

import {
    __tla as Bt
} from "./type5-a6b47fc2.js";

import {
    __tla as Et
} from "./type6-9fcada99.js";

import {
    __tla as St
} from "./type7-f25f20ee.js";

import {
    __tla as Vt
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import "./color-a8b4eb58.js";

import {
    __tla as wt
} from "./video-1d0dc730.js";

import {
    __tla as xt
} from "./index-5adb716b.js";

import {
    __tla as Qt
} from "./type30-8bfa018d.js";

import {
    __tla as Ct
} from "./sqlInfo-6616efed.js";

import {
    __tla as Pt
} from "./sqlDetail-6033fcff.js";

import {
    __tla as Ut
} from "./type20-0744bc00.js";

import {
    __tla as Rt
} from "./questionBank-6fe58de9.js";

let w, Nt = Promise.all([ (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return it;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return gt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return bt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return Ft;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return Bt;
    } catch {}
})(), (() => {
    try {
        return Et;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return Vt;
    } catch {}
})(), (() => {
    try {
        return wt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return Qt;
    } catch {}
})(), (() => {
    try {
        return Ct;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})() ]).then(async () => {
    let h, g;
    h = {
        class: "manualConstructionContainer"
    }, g = {
        class: "question-empty"
    }, w = yt(G({
        __name: "manualConstruction",
        props: {
            isEdit: {
                type: Boolean,
                default: !1
            },
            form: {
                type: Object,
                default: () => ({})
            },
            parentId: {
                type: String,
                default: ""
            },
            isNeuRes: {
                type: Boolean,
                default: !1
            }
        },
        emits: [ "callAPIStatus" ],
        setup(x, {
            expose: Q,
            emit: C
        }) {
            const d = H(), {
                proxy: P
            } = W(), q = C, m = u(), f = u("1"), p = u(null), a = u({
                questionType: "1",
                difficult: "",
                tags: []
            }), s = u({}), U = u(!0), o = u(), _ = x, {
                form: R,
                isEdit: b,
                parentId: N,
                isNeuRes: O
            } = Y(_), A = u({
                difficult: [ {
                    required: !0,
                    message: "请选择难易度",
                    trigger: [ "blur", "change" ]
                } ],
                questionType: [ {
                    required: !0,
                    message: "请选择试题类型",
                    trigger: [ "blur", "change" ]
                } ]
            }), D = r => {
                p.value.handleBack(), m.value.resetFields(), s.value = {}, a.value.questionType = r.toString();
            };
            return Q({
                saveExamQuestions: async () => {
                    if (await P.$refs.questionFormRef.validate() && a.value.questionType) {
                        try {
                            if (o.value && await o.value.validateForm(), [ "8", "10" ].indexOf(a.value.questionType) >= 0 && s.value.subQuestions.length === 0) return void d.warning("请至少创建一个子题！");
                            const r = {
                                ...s.value,
                                ...a.value,
                                id: R.value.id || "",
                                questionScore: Number(a.value.questionType) > 5 ? 10 : 2
                            };
                            if (q("callAPIStatus", !0), O.value) {
                                const l = {
                                    id: r.id,
                                    questionForm: r,
                                    ktPointList: r.ktPointList || [],
                                    teachTags: r.teachTags || []
                                };
                                await dt(l);
                            } else await (b.value ? V.updateQuestion : V.createQuestion)(r, tt(N.value), r.questionType);
                            d.success("操作成功"), o.value && o.value.reset({});
                        } catch {
                            d.warning("操作错误");
                        }
                        q("callAPIStatus", !1);
                    }
                },
                initTagModule: (r = !0) => {
                    try {
                        p.value.handleBack(), r ? m.value.resetFields() : (a.value.tags = [], 
                        m.value.resetFields("difficult")), s.value = {}, o.value && o.value.reset({});
                    } catch {}
                },
                copyContentByEdit: () => {
                    a.value = {
                        questionType: _.form.questionBody.questionType,
                        difficult: _.form.questionBody.difficult,
                        tags: _.form.questionBody.tags
                    }, f.value = _.form.questionBody.questionType, s.value = t(_.form.questionBody) || {}, 
                    o.value && o.value.reset(s.value);
                }
            }), (r, l) => {
                const T = at, L = et, M = lt, k = rt, j = st, z = ot;
                return n(), y("div", h, [ i(z, {
                    modelValue: t(f),
                    "onUpdate:modelValue": l[4] || (l[4] = e => B(f) ? f.value = e : null),
                    "tab-position": "left",
                    type: "card",
                    onTabChange: D
                }, {
                    default: c(() => [ i(T, {
                        disabled: !0,
                        label: "试题题型"
                    }), (n(!0), y(F, null, I(t(E)(t(S).QUESTION_TYPE), e => (n(), 
                    v(T, {
                        key: e.value,
                        disabled: t(b),
                        label: e.label,
                        lazy: !0,
                        name: e.value
                    }, null, 8, [ "disabled", "label", "name" ]))), 128)), i(j, {
                        ref_key: "questionFormRef",
                        ref: m,
                        inline: !0,
                        model: t(a),
                        rules: t(A),
                        class: "px-5 pt-5",
                        onSubmit: l[2] || (l[2] = $(() => {}, [ "prevent" ]))
                    }, {
                        default: c(() => [ i(k, {
                            label: "难易度",
                            prop: "difficult",
                            size: "large"
                        }, {
                            default: c(() => [ i(M, {
                                modelValue: t(a).difficult,
                                "onUpdate:modelValue": l[0] || (l[0] = e => t(a).difficult = e),
                                clearable: "",
                                placeholder: "请选择",
                                style: {
                                    width: "200px"
                                }
                            }, {
                                default: c(() => [ (n(!0), y(F, null, I(t(E)(t(S).QUESTION_DIFFICULT), e => (n(), 
                                v(L, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), i(k, {
                            label: "试题标签",
                            prop: "tags",
                            style: {
                                width: "100%",
                                "margin-right": "0"
                            }
                        }, {
                            default: c(() => [ i(ct, {
                                ref_key: "chooseTagsRef",
                                ref: p,
                                modelValue: t(a).tags,
                                "onUpdate:modelValue": l[1] || (l[1] = e => t(a).tags = e)
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ]), t(a).questionType && t(U) ? (n(), 
                    v(_t, {
                        key: 0,
                        ref_key: "questionInfoRef",
                        ref: o,
                        form: t(s),
                        "onUpdate:form": l[3] || (l[3] = e => B(s) ? s.value = e : null),
                        isEdit: _.isEdit,
                        type: t(a).questionType,
                        class: "question-info px-5"
                    }, null, 8, [ "form", "isEdit", "type" ])) : J("", !0), K(Z("div", g, " 请选择试题类型 ", 512), [ [ X, !t(a).questionType ] ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-73a2eebf" ] ]);
});

export {
    Nt as __tla,
    w as default
};