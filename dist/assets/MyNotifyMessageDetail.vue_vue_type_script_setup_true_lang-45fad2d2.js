import {
    d as E,
    r as o,
    o as p,
    C as d,
    l as t,
    k as l,
    v as s,
    B as u,
    a,
    D,
    m as M,
    aU as S,
    __tla as g
} from "./index-6c08ea4c.js";

import {
    E as k,
    a as x,
    __tla as A
} from "./el-descriptions-item-b3283002.js";

import {
    _ as I,
    __tla as O
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    D as f,
    __tla as P
} from "./dict-c5825220.js";

import {
    f as i,
    __tla as V
} from "./formatTime-de6f1520.js";

let v, Y = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return V;
    } catch {}
})() ]).then(async () => {
    v = E({
        name: "MyNotifyMessageDetailDetail",
        __name: "MyNotifyMessageDetail",
        setup(B, {
            expose: T
        }) {
            const r = o(!1), m = o(!1), e = o({});
            return T({
                open: async n => {
                    r.value = !0, m.value = !0;
                    try {
                        e.value = n;
                    } finally {
                        m.value = !1;
                    }
                }
            }), (n, y) => {
                const _ = k, c = I, b = x, h = S;
                return p(), d(h, {
                    modelValue: a(r),
                    "onUpdate:modelValue": y[0] || (y[0] = N => M(r) ? r.value = N : null),
                    "max-height": 500,
                    scroll: !0,
                    title: "消息详情"
                }, {
                    default: t(() => [ l(b, {
                        column: 1,
                        border: ""
                    }, {
                        default: t(() => [ l(_, {
                            label: "发送人"
                        }, {
                            default: t(() => [ s(u(a(e).templateNickname), 1) ]),
                            _: 1
                        }), l(_, {
                            label: "发送时间"
                        }, {
                            default: t(() => [ s(u(a(i)(a(e).createTime)), 1) ]),
                            _: 1
                        }), l(_, {
                            label: "消息类型"
                        }, {
                            default: t(() => [ l(c, {
                                type: a(f).SYSTEM_NOTIFY_TEMPLATE_TYPE,
                                value: a(e).templateType
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), l(_, {
                            label: "是否已读"
                        }, {
                            default: t(() => [ l(c, {
                                type: a(f).INFRA_BOOLEAN_STRING,
                                value: a(e).readStatus
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(e).readStatus ? (p(), d(_, {
                            key: 0,
                            label: "阅读时间"
                        }, {
                            default: t(() => [ s(u(a(i)(a(e).readTime)), 1) ]),
                            _: 1
                        })) : D("", !0), l(_, {
                            label: "内容"
                        }, {
                            default: t(() => [ s(u(a(e).templateContent), 1) ]),
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
    v as _,
    Y as __tla
};