import {
    h as P,
    T as j,
    a0 as q,
    r as e,
    U as J,
    f as Q,
    o as S,
    C as W,
    l as t,
    t as T,
    B as $,
    k as u,
    v as U,
    H as E,
    bo as G,
    P as K,
    O as X,
    Q as Y,
    J as Z,
    aU as ee,
    __tla as ae
} from "./index-6c08ea4c.js";

import {
    I as A,
    __tla as le
} from "./invigilator-0cbdfb50.js";

import {
    _ as te
} from "./_plugin-vue_export-helper-1b428a4d.js";

let F, se = Promise.all([ (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})() ]).then(async () => {
    let b, g;
    b = {
        class: "el-dialog__title"
    }, g = [ "innerHTML" ], F = te({
        __name: "noticeOrFinish",
        props: {
            candidateDetails: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "refreshList" ],
        setup(O, {
            expose: H,
            emit: N
        }) {
            const R = O, l = P(), k = j();
            q(R);
            const o = e(!1), m = e(""), c = e(""), z = e("135px"), w = e(""), r = J({
                desc: ""
            }), x = N;
            Q(() => {});
            const d = () => {
                o.value = !1, m.value = "", c.value = "", v.value.resetFields(), 
                x("hideDialog", !1);
            }, I = e(null), p = e([]), V = e(""), C = e(""), v = e(null), B = () => {
                v.value.validate(async i => {
                    if (!i) return !1;
                    await I.value(), G.success("操作成功"), x("refreshList"), d();
                });
            }, D = async () => await A.messageRemindApi({
                examId: k.params.id,
                operatorId: l.user.id,
                operatorName: l.user.nickname,
                number: l.user.number,
                operatorAvatar: l.user.avatar,
                remindType: C.value,
                desc: r.desc,
                remindUserIdList: p.value
            }), M = async () => await A.forceFinishApi({
                examId: k.params.id,
                operatorId: l.user.id,
                operatorName: l.user.nickname,
                number: l.user.number,
                operatorAvatar: l.user.avatar,
                desc: r.desc,
                remindUserIdList: p.value
            });
            return H({
                handleOpen: ({
                    title: i,
                    labelWidth: a,
                    labelName: _,
                    itemRule: f,
                    remindTypeValue: h,
                    type: n,
                    checkedValue: y,
                    tipContent: s
                }) => {
                    o.value = !0, m.value = i, c.value = _, w.value = f, C.value = h, 
                    p.value = y, V.value = s;
                    const L = {
                        notice: D,
                        force: M,
                        default: () => {}
                    };
                    I.value = L[n] || L.default;
                },
                handleClose: d
            }), (i, a) => {
                const _ = K, f = X, h = Y, n = Z, y = ee;
                return S(), W(y, {
                    modelValue: o.value,
                    "onUpdate:modelValue": a[3] || (a[3] = s => o.value = s),
                    title: "",
                    width: "700px",
                    "close-on-click-modal": !1,
                    onClose: d,
                    appendToBody: !0
                }, {
                    header: t(() => [ T("span", b, $(m.value), 1) ]),
                    footer: t(() => [ u(n, {
                        size: "large",
                        type: "primary",
                        onClick: B
                    }, {
                        default: t(() => [ U("确 定 ") ]),
                        _: 1
                    }), u(n, {
                        size: "large",
                        onClick: a[2] || (a[2] = s => d())
                    }, {
                        default: t(() => [ U("取 消 ") ]),
                        _: 1
                    }) ]),
                    default: t(() => [ T("p", {
                        innerHTML: V.value,
                        class: "tip-content"
                    }, null, 8, g), u(h, {
                        ref_key: "dialogFormRef",
                        ref: v,
                        model: r,
                        onSubmit: a[1] || (a[1] = E(() => {}, [ "prevent" ])),
                        "label-width": z.value
                    }, {
                        default: t(() => [ u(f, {
                            label: c.value,
                            prop: "desc",
                            rules: [ {
                                required: !0,
                                message: `\u8BF7\u8F93\u5165${w.value}`
                            } ]
                        }, {
                            default: t(() => [ u(_, {
                                type: "textarea",
                                modelValue: r.desc,
                                "onUpdate:modelValue": a[0] || (a[0] = s => r.desc = s),
                                maxlength: "50",
                                "show-word-limit": ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }, 8, [ "label", "rules" ]) ]),
                        _: 1
                    }, 8, [ "model", "label-width" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6ac042f4" ] ]);
});

export {
    se as __tla,
    F as default
};