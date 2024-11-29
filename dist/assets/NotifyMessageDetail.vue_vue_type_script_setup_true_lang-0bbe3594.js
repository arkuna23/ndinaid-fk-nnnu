import {
    d as h,
    r as o,
    o as E,
    C as N,
    l,
    k as e,
    v as u,
    B as r,
    a,
    m as S,
    aU as I,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    E as M,
    a as Y,
    __tla as g
} from "./el-descriptions-item-b3283002.js";

import {
    _ as x,
    __tla as A
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as d,
    __tla as C
} from "./dict-c5825220.js";

import {
    f as y,
    __tla as D
} from "./formatTime-de6f1520.js";

let c, O = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return C;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})() ]).then(async () => {
    c = h({
        name: "SystemNotifyMessageDetail",
        __name: "NotifyMessageDetail",
        setup(R, {
            expose: i
        }) {
            const s = o(!1), n = o(!1), t = o({});
            return i({
                open: async p => {
                    s.value = !0, n.value = !0;
                    try {
                        t.value = p;
                    } finally {
                        n.value = !1;
                    }
                }
            }), (p, f) => {
                const _ = M, m = x, b = Y, v = I;
                return E(), N(v, {
                    modelValue: a(s),
                    "onUpdate:modelValue": f[0] || (f[0] = T => S(s) ? s.value = T : null),
                    "max-height": 500,
                    scroll: !0,
                    title: "详情"
                }, {
                    default: l(() => [ e(b, {
                        column: 1,
                        border: ""
                    }, {
                        default: l(() => [ e(_, {
                            label: "编号",
                            "min-width": "120"
                        }, {
                            default: l(() => [ u(r(a(t).id), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "用户类型"
                        }, {
                            default: l(() => [ e(m, {
                                type: a(d).USER_TYPE,
                                value: a(t).userType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), e(_, {
                            label: "用户编号"
                        }, {
                            default: l(() => [ u(r(a(t).userId), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "模版编号"
                        }, {
                            default: l(() => [ u(r(a(t).templateId), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "模板编码"
                        }, {
                            default: l(() => [ u(r(a(t).templateCode), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "发送人名称"
                        }, {
                            default: l(() => [ u(r(a(t).templateNickname), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "模版内容"
                        }, {
                            default: l(() => [ u(r(a(t).templateContent), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "模版参数"
                        }, {
                            default: l(() => [ u(r(a(t).templateParams), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "模版类型"
                        }, {
                            default: l(() => [ e(m, {
                                type: a(d).SYSTEM_NOTIFY_TEMPLATE_TYPE,
                                value: a(t).templateType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), e(_, {
                            label: "是否已读"
                        }, {
                            default: l(() => [ e(m, {
                                type: a(d).INFRA_BOOLEAN_STRING,
                                value: a(t).readStatus
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), e(_, {
                            label: "阅读时间"
                        }, {
                            default: l(() => [ u(r(a(y)(a(t).readTime)), 1) ]),
                            _: 1
                        }), e(_, {
                            label: "创建时间"
                        }, {
                            default: l(() => [ u(r(a(y)(a(t).createTime)), 1) ]),
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
    c as _,
    O as __tla
};