import {
    d as h,
    r as o,
    o as L,
    C as g,
    l,
    k as e,
    v as r,
    B as u,
    a,
    m as T,
    aU as S,
    __tla as E
} from "./index-6c08ea4c.js";

import {
    E as D,
    a as I,
    __tla as U
} from "./el-descriptions-item-b3283002.js";

import {
    _ as V,
    __tla as Y
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as c,
    __tla as w
} from "./dict-c5825220.js";

import {
    f as x,
    __tla as G
} from "./formatTime-de6f1520.js";

let f, M = Promise.all([ (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    f = h({
        name: "SystemLoginLogDetail",
        __name: "LoginLogDetail",
        setup(N, {
            expose: p
        }) {
            const s = o(!1), n = o(!1), t = o({});
            return p({
                open: async m => {
                    s.value = !0, n.value = !0;
                    try {
                        t.value = m;
                    } finally {
                        n.value = !1;
                    }
                }
            }), (m, d) => {
                const _ = D, i = V, y = I, v = S;
                return L(), g(v, {
                    modelValue: a(s),
                    "onUpdate:modelValue": d[0] || (d[0] = b => T(s) ? s.value = b : null),
                    title: "详情",
                    width: "800"
                }, {
                    default: l(() => [ e(y, {
                        column: 1,
                        border: ""
                    }, {
                        default: l(() => [ e(_, {
                            label: "日志编号",
                            "min-width": "120"
                        }, {
                            default: l(() => [ r(u(a(t).id), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "操作类型"
                        }, {
                            default: l(() => [ e(i, {
                                type: a(c).SYSTEM_LOGIN_TYPE,
                                value: a(t).logType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), e(_, {
                            label: "用户名称"
                        }, {
                            default: l(() => [ r(u(a(t).username), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "登录地址"
                        }, {
                            default: l(() => [ r(u(a(t).userIp), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "浏览器"
                        }, {
                            default: l(() => [ r(u(a(t).userAgent), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "登陆结果"
                        }, {
                            default: l(() => [ e(i, {
                                type: a(c).SYSTEM_LOGIN_RESULT,
                                value: a(t).result
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), e(_, {
                            label: "登录日期"
                        }, {
                            default: l(() => [ r(u(a(x)(a(t).createTime)), 1) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    f as _,
    M as __tla
};