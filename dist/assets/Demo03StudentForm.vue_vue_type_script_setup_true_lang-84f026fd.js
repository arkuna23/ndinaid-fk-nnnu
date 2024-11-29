import {
    d as z,
    aa as B,
    p as J,
    r as i,
    U as M,
    o as n,
    C as p,
    l as s,
    k as r,
    v,
    a as e,
    A as N,
    c as O,
    F as Q,
    y as T,
    B as X,
    m as Y,
    P as j,
    O as G,
    bp as H,
    bq as I,
    N as K,
    Q as L,
    J as W,
    aU as Z,
    a9 as $,
    __tla as ee
} from "./index-6c08ea4c.js";

import {
    _ as ae,
    __tla as le
} from "./Editor-ef737d2a.js";

import {
    b as te,
    D as se,
    __tla as re
} from "./dict-c5825220.js";

import {
    g as ue,
    c as de,
    u as oe,
    __tla as ie
} from "./index-decb78d3.js";

let V, me = Promise.all([ (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return re;
    } catch {}
})(), (() => {
    try {
        return ie;
    } catch {}
})() ]).then(async () => {
    V = z({
        __name: "Demo03StudentForm",
        emits: [ "success" ],
        setup(ne, {
            expose: g,
            emit: x
        }) {
            const {
                t: c
            } = B(), b = J(), d = i(!1), f = i(""), o = i(!1), y = i(""), t = i({
                id: void 0,
                name: void 0,
                sex: void 0,
                birthday: void 0,
                description: void 0
            }), U = M({
                name: [ {
                    required: !0,
                    message: "名字不能为空",
                    trigger: "blur"
                } ],
                sex: [ {
                    required: !0,
                    message: "性别不能为空",
                    trigger: "blur"
                } ],
                birthday: [ {
                    required: !0,
                    message: "出生日期不能为空",
                    trigger: "blur"
                } ],
                description: [ {
                    required: !0,
                    message: "简介不能为空",
                    trigger: "blur"
                } ]
            }), _ = i();
            g({
                open: async (u, a) => {
                    if (d.value = !0, f.value = c("action." + u), y.value = u, q(), 
                    a) {
                        o.value = !0;
                        try {
                            t.value = await ue(a);
                        } finally {
                            o.value = !1;
                        }
                    }
                }
            });
            const S = x, k = async () => {
                await _.value.validate(), o.value = !0;
                try {
                    const u = t.value;
                    y.value === "create" ? (await de(u), b.success(c("common.createSuccess"))) : (await oe(u), 
                    b.success(c("common.updateSuccess"))), d.value = !1, S("success");
                } finally {
                    o.value = !1;
                }
            }, q = () => {
                var u;
                t.value = {
                    id: void 0,
                    name: void 0,
                    sex: void 0,
                    birthday: void 0,
                    description: void 0
                }, (u = _.value) == null || u.resetFields();
            };
            return (u, a) => {
                const w = j, m = G, C = H, E = I, F = K, D = ae, A = L, h = W, P = Z, R = $;
                return n(), p(P, {
                    title: e(f),
                    modelValue: e(d),
                    "onUpdate:modelValue": a[5] || (a[5] = l => Y(d) ? d.value = l : null)
                }, {
                    footer: s(() => [ r(h, {
                        onClick: a[4] || (a[4] = l => d.value = !1)
                    }, {
                        default: s(() => [ v("取 消") ]),
                        _: 1
                    }), r(h, {
                        onClick: k,
                        type: "primary",
                        disabled: e(o)
                    }, {
                        default: s(() => [ v("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ N((n(), p(A, {
                        ref_key: "formRef",
                        ref: _,
                        model: e(t),
                        rules: e(U),
                        "label-width": "100px"
                    }, {
                        default: s(() => [ r(m, {
                            label: "名字",
                            prop: "name"
                        }, {
                            default: s(() => [ r(w, {
                                modelValue: e(t).name,
                                "onUpdate:modelValue": a[0] || (a[0] = l => e(t).name = l),
                                placeholder: "请输入名字"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(m, {
                            label: "性别",
                            prop: "sex"
                        }, {
                            default: s(() => [ r(E, {
                                modelValue: e(t).sex,
                                "onUpdate:modelValue": a[1] || (a[1] = l => e(t).sex = l)
                            }, {
                                default: s(() => [ (n(!0), O(Q, null, T(e(te)(e(se).SYSTEM_USER_SEX), l => (n(), 
                                p(C, {
                                    key: l.value,
                                    label: l.value
                                }, {
                                    default: s(() => [ v(X(l.label), 1) ]),
                                    _: 2
                                }, 1032, [ "label" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(m, {
                            label: "出生日期",
                            prop: "birthday"
                        }, {
                            default: s(() => [ r(F, {
                                modelValue: e(t).birthday,
                                "onUpdate:modelValue": a[2] || (a[2] = l => e(t).birthday = l),
                                type: "date",
                                "value-format": "x",
                                placeholder: "选择出生日期"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(m, {
                            label: "简介",
                            prop: "description"
                        }, {
                            default: s(() => [ r(D, {
                                modelValue: e(t).description,
                                "onUpdate:modelValue": a[3] || (a[3] = l => e(t).description = l),
                                height: "150px"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ R, e(o) ] ]) ]),
                    _: 1
                }, 8, [ "title", "modelValue" ]);
            };
        }
    });
});

export {
    V as _,
    me as __tla
};