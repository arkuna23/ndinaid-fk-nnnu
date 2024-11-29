import {
    p as R,
    T as j,
    r,
    U as F,
    f as q,
    o as p,
    C as _,
    l as m,
    k as u,
    v as f,
    A as P,
    a,
    m as A,
    a8 as B,
    P as J,
    O as L,
    Q as O,
    J as Q,
    aU as D,
    a9 as E,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    i as H,
    __tla as K
} from "./score-b548b686.js";

import {
    _ as M
} from "./_plugin-vue_export-helper-1b428a4d.js";

let h, N = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    h = M({
        __name: "comment",
        emits: [ "success" ],
        setup(W, {
            expose: v,
            emit: w
        }) {
            R();
            const y = j(), s = r(!1), V = r("评语"), c = r(!1), l = r({
                comment: "",
                isShowTeacher: 0
            }), d = r([]), g = F({
                comment: [ {
                    required: !0,
                    message: "请输入评语",
                    trigger: [ "blur", "change" ]
                } ]
            }), i = r();
            v({
                open: async t => {
                    s.value = !0, d.value = t.map(e => e.groupId || e.userId), k();
                }
            });
            const x = w, b = async () => {
                if (i && await i.value.validate()) {
                    c.value = !0;
                    try {
                        let t = {
                            ...l.value,
                            idList: d.value,
                            projectId: y.params.projectId
                        };
                        await H(t), s.value = !1, x("success");
                    } finally {
                        c.value = !1;
                    }
                }
            }, k = () => {
                var t;
                l.value = {
                    comment: "",
                    isShowTeacher: 0
                }, (t = i.value) == null || t.resetFields();
            };
            return q(() => {}), (t, e) => {
                const I = B, T = J, U = L, S = O, n = Q, z = D, C = E;
                return p(), _(z, {
                    modelValue: a(s),
                    "onUpdate:modelValue": e[3] || (e[3] = o => A(s) ? s.value = o : null),
                    title: a(V),
                    width: "420"
                }, {
                    footer: m(() => [ u(n, {
                        onClick: e[2] || (e[2] = o => s.value = !1)
                    }, {
                        default: m(() => [ f("取 消") ]),
                        _: 1
                    }), u(n, {
                        type: "primary",
                        onClick: b
                    }, {
                        default: m(() => [ f("确 定") ]),
                        _: 1
                    }) ]),
                    default: m(() => [ P((p(), _(S, {
                        ref_key: "formRef",
                        ref: i,
                        model: a(l),
                        rules: a(g),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        class: "dataForm mt-20px"
                    }, {
                        default: m(() => [ u(I, {
                            class: "checkBox_tea algin-right",
                            modelValue: a(l).isShowTeacher,
                            "onUpdate:modelValue": e[0] || (e[0] = o => a(l).isShowTeacher = o),
                            label: "仅教师可见",
                            size: "large",
                            "true-value": 1,
                            "false-label": 0
                        }, null, 8, [ "modelValue" ]), u(U, {
                            label: "评语",
                            prop: "comment",
                            class: "w100"
                        }, {
                            default: m(() => [ u(T, {
                                type: "textarea",
                                modelValue: a(l).comment,
                                "onUpdate:modelValue": e[1] || (e[1] = o => a(l).comment = o),
                                placeholder: "请输入",
                                autosize: {
                                    minRows: 4,
                                    maxRows: 8
                                },
                                maxlength: "500",
                                "show-word-limit": ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ C, a(c) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-efa7bcdf" ] ]);
});

export {
    N as __tla,
    h as default
};