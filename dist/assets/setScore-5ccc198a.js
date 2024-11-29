import {
    r as g,
    e as K,
    w as O,
    j as P,
    o as u,
    C as v,
    l as a,
    k as o,
    v as V,
    a as w,
    c as L,
    F as q,
    y as A,
    A as F,
    t as i,
    B as J,
    K as M,
    cK as R,
    O as z,
    Q as D,
    J as E,
    aU as G,
    __tla as H
} from "./index-6c08ea4c.js";

let N, I = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})() ]).then(async () => {
    let m, d, n, c;
    m = {
        style: {
            width: "100%"
        }
    }, d = {
        class: "neu-ellipsis"
    }, n = i("label", {
        class: "el-form-item__label"
    }, "每题", -1), c = i("label", {
        class: "el-form-item__label ml-3"
    }, "分", -1), N = {
        __name: "setScore",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            paperParts: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "update:modelValue", "setScoreNow" ],
        setup(k, {
            emit: x
        }) {
            const _ = x, f = k, r = g({
                scoreList: []
            }), y = g(), s = K({
                get: () => f.modelValue,
                set: t => {
                    _("update:modelValue", t);
                }
            });
            O(() => s.value, t => {
                t && (r.value.scoreList = f.paperParts.map(e => ({
                    ...e,
                    score: 1
                })));
            });
            const b = (t, e) => {
                y.value.validate(p => {
                    p ? _("setScoreNow", r.value, t, e) : e && e();
                });
            };
            return (t, e) => {
                const p = M, S = R, U = z, Q = D, h = E, C = G, $ = P("show-tip");
                return u(), v(C, {
                    modelValue: s.value,
                    "onUpdate:modelValue": e[2] || (e[2] = l => s.value = l),
                    width: "500px",
                    onSubmitNow: b,
                    title: "批量设置分数"
                }, {
                    footer: a(() => [ o(h, {
                        onClick: e[0] || (e[0] = l => s.value = !1)
                    }, {
                        default: a(() => [ V("取消") ]),
                        _: 1
                    }), o(h, {
                        type: "primary",
                        onClick: e[1] || (e[1] = () => {
                            b(), s.value = !1;
                        })
                    }, {
                        default: a(() => [ V("确定") ]),
                        _: 1
                    }) ]),
                    default: a(() => [ o(Q, {
                        ref_key: "formRef",
                        ref: y,
                        model: w(r),
                        "label-width": "200px",
                        class: "demo-dynamic"
                    }, {
                        default: a(() => [ (u(!0), L(q, null, A(w(r).scoreList, (l, j) => (u(), 
                        v(U, {
                            key: l.key,
                            label: l.partName + `\uFF08\u5171 ${l.paperQuestionList.length} \u9898\uFF09`,
                            prop: "scoreList." + j + ".score",
                            rules: [ {
                                required: !0,
                                message: "请输入分数",
                                trigger: "blur"
                            }, {
                                type: "number",
                                message: "请输入数字",
                                trigger: "blur"
                            } ]
                        }, {
                            label: a(() => [ F((u(), L("div", m, [ o(p, {
                                content: l.partName + `\uFF08\u5171 ${l.paperQuestionList.length} \u9898\uFF09`,
                                placement: "top"
                            }, {
                                default: a(() => [ i("p", d, J(l.partName + `\uFF08\u5171 ${l.paperQuestionList.length} \u9898\uFF09`), 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ])), [ [ $ ] ]) ]),
                            default: a(() => [ n, o(S, {
                                modelValue: l.score,
                                "onUpdate:modelValue": B => l.score = B,
                                modelModifiers: {
                                    number: !0
                                },
                                placeholder: "请输入",
                                style: {
                                    width: "100px"
                                },
                                step: 1,
                                precision: 1,
                                min: .1,
                                max: 999,
                                title: "",
                                "step-strictly": !1,
                                "controls-position": "right"
                            }, null, 8, [ "modelValue", "onUpdate:modelValue" ]), c ]),
                            _: 2
                        }, 1032, [ "label", "prop" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    I as __tla,
    N as default
};