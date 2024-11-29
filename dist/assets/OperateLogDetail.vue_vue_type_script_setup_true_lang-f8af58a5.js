import {
    d as C,
    r as f,
    o as d,
    C as _,
    l,
    k as r,
    v as s,
    B as t,
    a as e,
    D as n,
    c as h,
    m as U,
    aU as D,
    __tla as I
} from "./index-6c08ea4c.js";

import {
    E as M,
    a as A,
    __tla as L
} from "./el-descriptions-item-b3283002.js";

import {
    f as V,
    __tla as j
} from "./formatTime-de6f1520.js";

let v, q = Promise.all([ (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})() ]).then(async () => {
    let m, b;
    m = {
        key: 0
    }, b = {
        key: 1
    }, v = C({
        name: "SystemOperateLogDetail",
        __name: "OperateLogDetail",
        setup(w, {
            expose: p
        }) {
            const o = f(!1), i = f(!1), a = f({});
            return p({
                open: async c => {
                    o.value = !0, i.value = !0;
                    try {
                        a.value = c;
                    } finally {
                        i.value = !1;
                    }
                }
            }), (c, y) => {
                const u = M, k = A, g = D;
                return d(), _(g, {
                    modelValue: e(o),
                    "onUpdate:modelValue": y[0] || (y[0] = x => U(o) ? o.value = x : null),
                    "max-height": 500,
                    scroll: !0,
                    title: "详情",
                    width: "800"
                }, {
                    default: l(() => [ r(k, {
                        column: 1,
                        border: ""
                    }, {
                        default: l(() => [ r(u, {
                            label: "日志主键",
                            "min-width": "120"
                        }, {
                            default: l(() => [ s(t(e(a).id), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "链路追踪"
                        }, {
                            default: l(() => [ s(t(e(a).traceId), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作人编号"
                        }, {
                            default: l(() => [ s(t(e(a).userId), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作人名字"
                        }, {
                            default: l(() => [ s(t(e(a).userNickname), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作人 IP"
                        }, {
                            default: l(() => [ s(t(e(a).userIp), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作人 UA"
                        }, {
                            default: l(() => [ s(t(e(a).userAgent), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作模块"
                        }, {
                            default: l(() => [ s(t(e(a).module), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作名"
                        }, {
                            default: l(() => [ s(t(e(a).name), 1) ]),
                            _: 1
                        }), e(a).content ? (d(), _(u, {
                            key: 0,
                            label: "操作内容"
                        }, {
                            default: l(() => [ s(t(e(a).content), 1) ]),
                            _: 1
                        })) : n("", !0), e(a).exts ? (d(), _(u, {
                            key: 1,
                            label: "操作拓展参数"
                        }, {
                            default: l(() => [ s(t(e(a).exts), 1) ]),
                            _: 1
                        })) : n("", !0), r(u, {
                            label: "请求 URL"
                        }, {
                            default: l(() => [ s(t(e(a).requestMethod) + " " + t(e(a).requestUrl), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "Java 方法名"
                        }, {
                            default: l(() => [ s(t(e(a).javaMethod), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "Java 方法参数"
                        }, {
                            default: l(() => [ s(t(e(a).javaMethodArgs), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作时间"
                        }, {
                            default: l(() => [ s(t(e(V)(e(a).startTime)), 1) ]),
                            _: 1
                        }), r(u, {
                            label: "执行时长"
                        }, {
                            default: l(() => [ s(t(e(a).duration) + " ms", 1) ]),
                            _: 1
                        }), r(u, {
                            label: "操作结果"
                        }, {
                            default: l(() => [ e(a).resultCode === 0 ? (d(), h("div", m, "正常")) : (d(), 
                            h("div", b, "失败(" + t(e(a).resultCode) + ")", 1)) ]),
                            _: 1
                        }), e(a).resultCode === 0 ? (d(), _(u, {
                            key: 2,
                            label: "操作结果"
                        }, {
                            default: l(() => [ s(t(e(a).resultData), 1) ]),
                            _: 1
                        })) : n("", !0), e(a).resultCode > 0 ? (d(), _(u, {
                            key: 3,
                            label: "失败提示"
                        }, {
                            default: l(() => [ s(t(e(a).resultMsg), 1) ]),
                            _: 1
                        })) : n("", !0) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    v as _,
    q as __tla
};