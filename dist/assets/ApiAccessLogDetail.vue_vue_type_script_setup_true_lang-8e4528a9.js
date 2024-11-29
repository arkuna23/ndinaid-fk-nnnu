import {
    d as T,
    r as d,
    o,
    C as U,
    l as t,
    k as r,
    v as u,
    B as l,
    a as e,
    c as p,
    D as x,
    m as C,
    aU as I,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    E as k,
    a as q,
    __tla as E
} from "./el-descriptions-item-b3283002.js";

import {
    _ as V,
    __tla as w
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as L,
    __tla as M
} from "./dict-c5825220.js";

import {
    f as y,
    __tla as j
} from "./formatTime-de6f1520.js";

let b, B = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})() ]).then(async () => {
    let n, i;
    n = {
        key: 0
    }, i = {
        key: 1
    }, b = T({
        name: "ApiAccessLogDetail",
        __name: "ApiAccessLogDetail",
        setup(N, {
            expose: h
        }) {
            const _ = d(!1), m = d(!1), a = d({});
            return h({
                open: async c => {
                    _.value = !0, m.value = !0;
                    try {
                        a.value = c;
                    } finally {
                        m.value = !1;
                    }
                }
            }), (c, f) => {
                const s = k, v = V, A = q, g = I;
                return o(), U(g, {
                    modelValue: e(_),
                    "onUpdate:modelValue": f[0] || (f[0] = D => C(_) ? _.value = D : null),
                    "max-height": 500,
                    scroll: !0,
                    title: "详情",
                    width: "800"
                }, {
                    default: t(() => [ r(A, {
                        column: 1,
                        border: ""
                    }, {
                        default: t(() => [ r(s, {
                            label: "日志主键",
                            "min-width": "120"
                        }, {
                            default: t(() => [ u(l(e(a).id), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "链路追踪"
                        }, {
                            default: t(() => [ u(l(e(a).traceId), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "应用名"
                        }, {
                            default: t(() => [ u(l(e(a).applicationName), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "用户信息"
                        }, {
                            default: t(() => [ u(l(e(a).userId) + " ", 1), r(v, {
                                type: e(L).USER_TYPE,
                                value: e(a).userType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), r(s, {
                            label: "用户 IP"
                        }, {
                            default: t(() => [ u(l(e(a).userIp), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "用户 UA"
                        }, {
                            default: t(() => [ u(l(e(a).userAgent), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "请求信息"
                        }, {
                            default: t(() => [ u(l(e(a).requestMethod) + " " + l(e(a).requestUrl), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "请求参数"
                        }, {
                            default: t(() => [ u(l(e(a).requestParams), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "请求时间"
                        }, {
                            default: t(() => [ u(l(e(y)(e(a).beginTime)) + " ~ " + l(e(y)(e(a).endTime)), 1) ]),
                            _: 1
                        }), r(s, {
                            label: "请求耗时"
                        }, {
                            default: t(() => [ u(l(e(a).duration) + " ms", 1) ]),
                            _: 1
                        }), r(s, {
                            label: "操作结果"
                        }, {
                            default: t(() => [ e(a).resultCode === 0 ? (o(), p("div", n, "正常")) : e(a).resultCode > 0 ? (o(), 
                            p("div", i, " 失败 | " + l(e(a).resultCode) + " | " + l(e(a).resultMsg), 1)) : x("", !0) ]),
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
    b as _,
    B as __tla
};