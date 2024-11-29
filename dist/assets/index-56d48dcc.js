import {
    r as n,
    f as W,
    o as u,
    c as D,
    t as a,
    v as s,
    B as t,
    a as e,
    k as i,
    l as c,
    F as X,
    y as Y,
    C as Z,
    J as $,
    av as aa,
    aw as sa,
    __tla as ta
} from "./index-6c08ea4c.js";

import {
    E as ea,
    __tla as ra
} from "./el-avatar-76960a98.js";

import {
    c as la,
    __tla as ia
} from "./group-7c00fc2a.js";

import na, {
    __tla as ua
} from "./UserManage-019582a4.js";

import {
    a as ca,
    __tla as oa
} from "./file-e038b35d.js";

import {
    _ as ma
} from "./_plugin-vue_export-helper-1b428a4d.js";

let G, da = Promise.all([ (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})() ]).then(async () => {
    let o, m, d, _, p, v, f, g, y, h, b, k, N, x, I, L, j, C;
    o = {
        class: "group-cont"
    }, m = {
        class: "group-title"
    }, d = {
        class: "right-number"
    }, _ = {
        class: "num-item"
    }, p = {
        class: "num-value"
    }, v = {
        class: "num-item"
    }, f = {
        class: "num-value"
    }, g = {
        class: "num-item"
    }, y = {
        class: "num-value"
    }, h = {
        class: "group-list pb-8px"
    }, b = {
        class: "group-item"
    }, k = {
        class: "item-title"
    }, N = {
        class: "item-info"
    }, x = {
        class: "info-leader"
    }, I = {
        class: "info-leader-info"
    }, L = {
        class: "info-num"
    }, j = {
        class: "info-num-value"
    }, C = [ "onClick" ], G = ma({
        __name: "index",
        props: {
            projectId: {
                type: String,
                default: ""
            }
        },
        setup(H) {
            const U = H, r = n({}), w = n(!1), P = n(), S = async () => {
                w.value = !0;
                try {
                    const T = await la(U.projectId);
                    r.value = T;
                } finally {
                    w.value = !1;
                }
            };
            return W(() => {
                S();
            }), (T, _a) => {
                var z, A, B, E;
                const K = ea, O = $, Q = aa, V = sa;
                return u(), D("div", o, [ a("div", m, [ s(t(((z = e(r)) == null ? void 0 : z.groupPlanName) || "分组方案") + " ", 1), a("div", d, [ a("div", _, [ s(" 学生总数 "), a("div", p, t((A = e(r)) == null ? void 0 : A.stuTotalNum), 1) ]), a("div", v, [ s(" 待分组人数 "), a("div", f, t((B = e(r)) == null ? void 0 : B.ungroupedNum), 1) ]), a("div", g, [ s(" 小组数 "), a("div", y, t((E = e(r)) == null ? void 0 : E.groupNum), 1) ]) ]) ]), a("div", h, [ i(V, {
                    gutter: 20
                }, {
                    default: c(() => {
                        var F;
                        return [ (u(!0), D(X, null, Y(((F = e(r)) == null ? void 0 : F.groupList) || [], l => (u(), 
                        Z(Q, {
                            span: 6,
                            key: l.id
                        }, {
                            default: c(() => {
                                return [ a("div", b, [ a("div", k, t(l.name), 1), a("div", N, [ a("div", x, [ s(" 组长： "), a("div", I, [ i(K, {
                                    class: "avatar-box",
                                    size: 14,
                                    src: e(ca)(l.avatar)
                                }, null, 8, [ "src" ]), s(" " + t((J = l.groupUserList, 
                                J.find(M => M.isLeader === 1) || {}).userName), 1) ]) ]), a("div", L, [ s(" 成员数： "), a("span", j, t(l.groupUserList.length), 1) ]) ]), a("div", {
                                    class: "item-btn",
                                    onClick: M => function(R) {
                                        var q;
                                        (q = e(P)) == null || q.open(R.id, U.projectId, R.name);
                                    }(l)
                                }, [ i(O, {
                                    link: "",
                                    type: "primary"
                                }, {
                                    default: c(() => [ s("成员管理") ]),
                                    _: 1
                                }) ], 8, C) ]) ];
                                var J;
                            }),
                            _: 2
                        }, 1024))), 128)) ];
                    }),
                    _: 1
                }) ]), i(na, {
                    ref_key: "UserManageRef",
                    ref: P,
                    onSuccess: S
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-bcd0d7a9" ] ]);
});

export {
    da as __tla,
    G as default
};