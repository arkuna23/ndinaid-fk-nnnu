import {
    d as I,
    r as p,
    o as d,
    C as c,
    l,
    k as t,
    v as u,
    B as s,
    a as e,
    D as m,
    m as k,
    P as A,
    aU as E,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    E as R,
    a as V,
    __tla as g
} from "./el-descriptions-item-b3283002.js";

import {
    _ as D,
    __tla as q
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as b,
    __tla as w
} from "./dict-c5825220.js";

import {
    f as v,
    __tla as L
} from "./formatTime-de6f1520.js";

let T, N = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return w;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    T = I({
        name: "ApiErrorLogDetail",
        __name: "ApiErrorLogDetail",
        setup(O, {
            expose: h
        }) {
            const _ = p(!1), i = p(!1), a = p({});
            return h({
                open: async f => {
                    _.value = !0, i.value = !0;
                    try {
                        a.value = f;
                    } finally {
                        i.value = !1;
                    }
                }
            }), (f, o) => {
                const r = R, y = D, x = A, S = V, U = E;
                return d(), c(U, {
                    modelValue: e(_),
                    "onUpdate:modelValue": o[1] || (o[1] = n => k(_) ? _.value = n : null),
                    "max-height": 500,
                    scroll: !0,
                    title: "详情",
                    width: "800"
                }, {
                    default: l(() => [ t(S, {
                        column: 1,
                        border: ""
                    }, {
                        default: l(() => [ t(r, {
                            label: "日志主键",
                            "min-width": "120"
                        }, {
                            default: l(() => [ u(s(e(a).id), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "链路追踪"
                        }, {
                            default: l(() => [ u(s(e(a).traceId), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "应用名"
                        }, {
                            default: l(() => [ u(s(e(a).applicationName), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "用户编号"
                        }, {
                            default: l(() => [ u(s(e(a).userId) + " ", 1), t(y, {
                                type: e(b).USER_TYPE,
                                value: e(a).userType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), t(r, {
                            label: "用户 IP"
                        }, {
                            default: l(() => [ u(s(e(a).userIp), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "用户 UA"
                        }, {
                            default: l(() => [ u(s(e(a).userAgent), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "请求信息"
                        }, {
                            default: l(() => [ u(s(e(a).requestMethod) + " " + s(e(a).requestUrl), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "请求参数"
                        }, {
                            default: l(() => [ u(s(e(a).requestParams), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "异常时间"
                        }, {
                            default: l(() => [ u(s(e(v)(e(a).exceptionTime)), 1) ]),
                            _: 1
                        }), t(r, {
                            label: "异常名"
                        }, {
                            default: l(() => [ u(s(e(a).exceptionName), 1) ]),
                            _: 1
                        }), e(a).exceptionStackTrace ? (d(), c(r, {
                            key: 0,
                            label: "异常堆栈"
                        }, {
                            default: l(() => [ t(x, {
                                modelValue: e(a).exceptionStackTrace,
                                "onUpdate:modelValue": o[0] || (o[0] = n => e(a).exceptionStackTrace = n),
                                autosize: {
                                    maxRows: 20
                                },
                                readonly: !0,
                                type: "textarea"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) : m("", !0), t(r, {
                            label: "处理状态"
                        }, {
                            default: l(() => [ t(y, {
                                type: e(b).INFRA_API_ERROR_LOG_PROCESS_STATUS,
                                value: e(a).processStatus
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), e(a).processUserId ? (d(), c(r, {
                            key: 1,
                            label: "处理人"
                        }, {
                            default: l(() => [ u(s(e(a).processUserId), 1) ]),
                            _: 1
                        })) : m("", !0), e(a).processTime ? (d(), c(r, {
                            key: 2,
                            label: "处理时间"
                        }, {
                            default: l(() => [ u(s(e(v)(e(a).processTime)), 1) ]),
                            _: 1
                        })) : m("", !0) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    T as _,
    N as __tla
};