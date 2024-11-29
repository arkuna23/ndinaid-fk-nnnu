import {
    aa as K,
    p as M,
    r as u,
    o as r,
    C as g,
    l as h,
    k as n,
    t as e,
    B as i,
    a as t,
    v as k,
    z as o,
    c as D,
    F as Q,
    y as W,
    m as X,
    J as Y,
    _ as Z,
    L as aa,
    aU as sa,
    R as ea,
    S as ta,
    __tla as la
} from "./index-6c08ea4c.js";

import {
    E as ua,
    __tla as ca
} from "./el-avatar-76960a98.js";

import {
    _ as ia,
    __tla as ra
} from "./index-13c88727.js";

import {
    __tla as na
} from "./dict-c5825220.js";

import {
    p as E,
    r as oa,
    g as da,
    __tla as ma
} from "./project-user-445059df.js";

import {
    _ as va
} from "./_plugin-vue_export-helper-1b428a4d.js";

let J, _a = Promise.all([ (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})() ]).then(async () => {
    let I, w, x, z, C, V, F, L;
    I = {
        class: "env-info mt-10px"
    }, w = (d => (ea("data-v-7bbb1e99"), d = d(), ta(), d))(() => e("span", {
        class: "gray-color"
    }, "实验环境创建情况：", -1)), x = {
        class: "base-color"
    }, z = {
        class: "black-color"
    }, C = {
        class: o([ "item-status-icon" ])
    }, V = [ "onClick" ], F = {
        class: "item-name"
    }, L = {
        class: "item-number"
    }, J = va({
        __name: "PreheatDialog",
        emits: [ "success" ],
        setup(d, {
            expose: N,
            emit: pa
        }) {
            K();
            const P = M(), m = u(!1), O = u("实验预热"), U = u(!1), v = u(!1), _ = u(""), l = u([]), $ = u({
                0: {
                    label: "未创建",
                    type: "info"
                },
                1: {
                    label: "创建中",
                    type: "warning"
                },
                2: {
                    label: "创建成功",
                    type: "success"
                },
                3: {
                    label: "创建失败",
                    type: "danger"
                }
            }), c = u(0);
            N({
                open: async (s = "") => {
                    if (_.value = s, m.value = !0, s) {
                        U.value = !0;
                        try {
                            c.value += 1, p(c.value);
                        } finally {
                            U.value = !1;
                        }
                    }
                }
            });
            const R = async () => {
                v.value = !0;
                for (let s = 0; s < l.value.length; s++) if (l.value[s].status === 0) try {
                    await E({
                        module: "2",
                        businessId: _.value,
                        userId: l.value[s].userId
                    });
                } catch {
                    return !1;
                }
                P.success("操作成功"), c.value += 1, p(c.value), v.value = !1;
            }, p = async s => {
                await (async () => {
                    l.value = await da({
                        module: "2",
                        businessId: _.value
                    });
                })(), l.value.filter(y => y.status === 1).length > 0 && s === c.value && setTimeout(() => {
                    p(s);
                }, 1e4);
            };
            return (s, y) => {
                const S = ia, T = Y, j = ua, f = Z, A = aa, G = sa;
                return r(), g(G, {
                    modelValue: t(m),
                    "onUpdate:modelValue": y[0] || (y[0] = a => X(m) ? m.value = a : null),
                    title: t(O),
                    width: "780"
                }, {
                    default: h(() => [ n(S, {
                        title: "为了避免课堂开始时环境启动的延迟，请提前使用“实验预热”功能，为学生批量创建实验环境，可以显著减少课堂上因环境启动延迟所带来的等待时间。"
                    }), e("div", I, [ w, e("span", x, i(t(l).filter(a => a.status === 2).length), 1), e("span", z, "/ " + i(t(l).length), 1), n(T, {
                        class: "create-all !px-10px",
                        size: "large",
                        type: "primary",
                        onClick: R,
                        loading: t(v)
                    }, {
                        default: h(() => [ k("一键创建") ]),
                        _: 1
                    }, 8, [ "loading" ]) ]), e("div", {
                        class: o([ "user-list", t(v) ? "is-loading" : "" ])
                    }, [ (r(!0), D(Q, null, W(t(l), a => {
                        var q;
                        return r(), D("div", {
                            class: "user-item",
                            key: a.userId
                        }, [ e("div", {
                            class: o([ "item-avatar", `status-${a.status}` ])
                        }, [ n(j, {
                            class: "avatar-box",
                            size: 64,
                            src: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                        }), e("div", C, [ n(f, {
                            icon: "ep:loading",
                            class: "is-loading load-icon",
                            size: 12
                        }) ]), e("div", {
                            class: o([ "item-overlay" ]),
                            onClick: b => (async B => {
                                const H = B.status === 0 ? E : oa;
                                try {
                                    await H({
                                        module: "2",
                                        businessId: _.value,
                                        userId: B.userId
                                    }), P.success("操作成功"), c.value += 1, p(c.value);
                                } finally {
                                    formLoading.value = !1;
                                }
                            })(a)
                        }, [ a.status === 0 ? (r(), g(f, {
                            key: 0,
                            icon: "fa:plus-square-o",
                            class: "create-icon",
                            size: 14
                        })) : (r(), g(f, {
                            key: 1,
                            icon: "ep:refresh-left",
                            class: "refresh-icon",
                            size: 18
                        })), k(" " + i(a.status === 0 ? "创建" : "重试"), 1) ], 8, V) ], 2), e("div", F, i(a.nickname || a.nickName), 1), e("div", L, i(a.number), 1), e("div", {
                            class: o([ "item-status", `status-${a.status}` ])
                        }, [ n(A, {
                            type: (q = t($)[a.status + ""]) == null ? void 0 : q.type
                        }, {
                            default: h(() => {
                                var b;
                                return [ k(i((b = t($)[a.status + ""]) == null ? void 0 : b.label), 1) ];
                            }),
                            _: 2
                        }, 1032, [ "type" ]) ], 2) ]);
                    }), 128)) ], 2) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-7bbb1e99" ] ]);
});

export {
    _a as __tla,
    J as default
};