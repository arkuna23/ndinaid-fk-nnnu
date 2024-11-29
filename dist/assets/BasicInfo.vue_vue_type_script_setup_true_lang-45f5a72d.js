import {
    _ as B,
    __tla as C
} from "./XButton-1a8b40b5.js";

import {
    _ as F,
    __tla as N
} from "./Form-c3087fdd.js";

import {
    d as R,
    h as j,
    U as d,
    r as A,
    f as E,
    o as M,
    c as P,
    k as t,
    l as o,
    v as g,
    B as b,
    a,
    t as S,
    F as W,
    aa as $,
    p as z,
    bp as D,
    bq as G,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    u as J,
    g as K,
    __tla as L
} from "./profile-b10d3835.js";

let y, O = Promise.all([ (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    let u;
    u = {
        style: {
            "text-align": "center"
        }
    }, y = R({
        name: "BasicInfo",
        __name: "BasicInfo",
        setup(Q) {
            const {
                t: e
            } = $(), h = z(), k = j(), x = d({
                nickname: [ {
                    required: !0,
                    message: e("profile.rules.nickname"),
                    trigger: "blur"
                } ],
                email: [ {
                    required: !0,
                    message: e("profile.rules.mail"),
                    trigger: "blur"
                }, {
                    type: "email",
                    message: e("profile.rules.truemail"),
                    trigger: [ "blur", "change" ]
                } ],
                mobile: [ {
                    required: !0,
                    message: e("profile.rules.phone"),
                    trigger: "blur"
                }, {
                    pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
                    message: e("profile.rules.truephone"),
                    trigger: "blur"
                } ]
            }), v = d([ {
                field: "nickname",
                label: e("profile.user.nickname"),
                component: "Input"
            }, {
                field: "mobile",
                label: e("profile.user.mobile"),
                component: "Input"
            }, {
                field: "email",
                label: e("profile.user.email"),
                component: "Input"
            }, {
                field: "sex",
                label: e("profile.user.sex"),
                component: "InputNumber",
                value: 0
            } ]), r = A(), i = async () => {
                var l;
                const m = await K();
                return (l = a(r)) == null || l.setValues(m), m;
            };
            return E(async () => {
                await i();
            }), (m, l) => {
                const c = D, I = G, w = F, p = B;
                return M(), P(W, null, [ t(w, {
                    ref_key: "formRef",
                    ref: r,
                    labelWidth: 200,
                    rules: a(x),
                    schema: a(v)
                }, {
                    sex: o(s => [ t(I, {
                        modelValue: s.sex,
                        "onUpdate:modelValue": n => s.sex = n
                    }, {
                        default: o(() => [ t(c, {
                            label: 1
                        }, {
                            default: o(() => [ g(b(a(e)("profile.user.man")), 1) ]),
                            _: 1
                        }), t(c, {
                            label: 2
                        }, {
                            default: o(() => [ g(b(a(e)("profile.user.woman")), 1) ]),
                            _: 1
                        }) ]),
                        _: 2
                    }, 1032, [ "modelValue", "onUpdate:modelValue" ]) ]),
                    _: 1
                }, 8, [ "rules", "schema" ]), S("div", u, [ t(p, {
                    title: a(e)("common.save"),
                    type: "primary",
                    onClick: l[0] || (l[0] = s => (() => {
                        var f;
                        const n = (f = a(r)) == null ? void 0 : f.getElFormRef();
                        n && n.validate(async V => {
                            var _;
                            if (V) {
                                const q = (_ = a(r)) == null ? void 0 : _.formModel;
                                await J(q), h.success(e("common.updateSuccess"));
                                const U = await i();
                                k.setUserNicknameAction(U.nickname);
                            }
                        });
                    })())
                }, null, 8, [ "title" ]), t(p, {
                    title: a(e)("common.reset"),
                    type: "danger",
                    onClick: l[1] || (l[1] = s => i())
                }, null, 8, [ "title" ]) ]) ], 64);
            };
        }
    });
});

export {
    y as _,
    O as __tla
};