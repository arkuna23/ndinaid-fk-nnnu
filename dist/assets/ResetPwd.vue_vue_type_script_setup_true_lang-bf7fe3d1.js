import {
    d as b,
    r as y,
    U as u,
    o as V,
    C as h,
    l as w,
    k as l,
    a as e,
    aa as v,
    p as R,
    O as k,
    Q as q,
    __tla as U
} from "./index-6c08ea4c.js";

import {
    _ as x,
    __tla as C
} from "./XButton-1a8b40b5.js";

import {
    I as i,
    __tla as M
} from "./InputPassword-6b59edce.js";

import {
    a as E,
    __tla as F
} from "./profile-b10d3835.js";

let p, I = Promise.all([ (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})() ]).then(async () => {
    p = b({
        name: "ResetPwd",
        __name: "ResetPwd",
        setup(O) {
            const {
                t: r
            } = v(), _ = R(), n = y(), s = u({
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            }), f = u({
                oldPassword: [ {
                    required: !0,
                    message: r("profile.password.oldPwdMsg"),
                    trigger: "blur"
                }, {
                    min: 6,
                    max: 20,
                    message: r("profile.password.pwdRules"),
                    trigger: "blur"
                } ],
                newPassword: [ {
                    required: !0,
                    message: r("profile.password.newPwdMsg"),
                    trigger: "blur"
                }, {
                    min: 6,
                    max: 20,
                    message: r("profile.password.pwdRules"),
                    trigger: "blur"
                } ],
                confirmPassword: [ {
                    required: !0,
                    message: r("profile.password.cfPwdMsg"),
                    trigger: "blur"
                }, {
                    required: !0,
                    validator: (P, a, o) => {
                        s.newPassword !== a ? o(new Error(r("profile.password.diffPwd"))) : o();
                    },
                    trigger: "blur"
                } ]
            });
            return (P, a) => {
                const o = k, m = x, c = q;
                return V(), h(c, {
                    ref_key: "formRef",
                    ref: n,
                    model: e(s),
                    rules: e(f),
                    "label-width": 200
                }, {
                    default: w(() => [ l(o, {
                        label: e(r)("profile.password.oldPassword"),
                        prop: "oldPassword"
                    }, {
                        default: w(() => [ l(e(i), {
                            modelValue: e(s).oldPassword,
                            "onUpdate:modelValue": a[0] || (a[0] = d => e(s).oldPassword = d)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "label" ]), l(o, {
                        label: e(r)("profile.password.newPassword"),
                        prop: "newPassword"
                    }, {
                        default: w(() => [ l(e(i), {
                            modelValue: e(s).newPassword,
                            "onUpdate:modelValue": a[1] || (a[1] = d => e(s).newPassword = d),
                            strength: ""
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "label" ]), l(o, {
                        label: e(r)("profile.password.confirmPassword"),
                        prop: "confirmPassword"
                    }, {
                        default: w(() => [ l(e(i), {
                            modelValue: e(s).confirmPassword,
                            "onUpdate:modelValue": a[2] || (a[2] = d => e(s).confirmPassword = d),
                            strength: ""
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "label" ]), l(o, null, {
                        default: w(() => [ l(m, {
                            title: e(r)("common.save"),
                            type: "primary",
                            onClick: a[3] || (a[3] = d => {
                                var t;
                                (t = e(n)) && t.validate(async g => {
                                    g && (await E(s.oldPassword, s.newPassword), 
                                    _.success(r("common.updateSuccess")));
                                });
                            })
                        }, null, 8, [ "title" ]), l(m, {
                            title: e(r)("common.reset"),
                            type: "danger",
                            onClick: a[4] || (a[4] = d => {
                                var t;
                                (t = e(n)) && t.resetFields();
                            })
                        }, null, 8, [ "title" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ]);
            };
        }
    });
});

export {
    p as _,
    I as __tla
};