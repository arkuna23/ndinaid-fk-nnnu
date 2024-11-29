import {
    _ as O,
    __tla as Q
} from "./index-71666e05.js";

import {
    d as V,
    T as W,
    a0 as X,
    r as l,
    f as Y,
    j as Z,
    o as a,
    c as o,
    t,
    a as e,
    C as m,
    l as c,
    v as u,
    D as E,
    B as n,
    k as _,
    F as $,
    y as aa,
    A as ta,
    J as sa,
    K as ra,
    av as ea,
    aw as la,
    __tla as oa
} from "./index-6c08ea4c.js";

import {
    E as ca,
    __tla as _a
} from "./el-avatar-76960a98.js";

import {
    a as ia,
    __tla as na
} from "./file-e038b35d.js";

import pa, {
    __tla as ma
} from "./contribution-dialog-71f2e7f6.js";

import {
    s as ua,
    __tla as da
} from "./group-7c00fc2a.js";

import {
    i as fa,
    __tla as ya
} from "./task-be0f4a51.js";

import {
    g as va,
    __tla as ga
} from "./score-b548b686.js";

import {
    _ as ha
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ia
} from "./member-bed692a1.js";

let F, xa = Promise.all([ (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})() ]).then(async () => {
    let d, f, y, v, g, h, I, x, k, b, j, w;
    d = {
        class: "member-index"
    }, f = {
        class: "algin-right"
    }, y = {
        key: 0,
        class: "group-cont"
    }, v = {
        class: "group-title"
    }, g = {
        class: "group-list"
    }, h = {
        class: "group-item mb-20px"
    }, I = {
        class: "item-name flex"
    }, x = {
        class: "name tooltip-content neu-ellipse",
        style: {
            "max-width": "75%"
        }
    }, k = {
        class: "item-info mt-20px flex"
    }, b = {
        class: "info-number"
    }, j = {
        class: "info-class"
    }, w = {
        key: 1,
        class: "data-empty"
    }, F = ha(V({
        __name: "memberIndex",
        props: {
            groupId: {
                type: String,
                default: ""
            }
        },
        setup(H) {
            const p = W(), N = H, {
                groupId: J
            } = X(N), C = l(), i = l({}), D = l(), L = l(!1), K = () => {
                D.value.openDialog({
                    groupId: N.groupId
                });
            }, P = () => {}, z = l(!1);
            return Y(() => {
                (async () => {
                    L.value = !0;
                    try {
                        const s = await ua({
                            projectId: p.params.projectId
                        });
                        i.value = s;
                    } finally {
                        L.value = !1;
                    }
                })(), (async () => {
                    const s = await fa({
                        projectId: p.params.projectId
                    });
                    C.value = s.isLeader, J.value = s.groupId;
                })(), (async () => {
                    const s = await va({
                        projectId: p.params.projectId
                    });
                    z.value = s;
                })();
            }), (s, ka) => {
                var A;
                const R = sa, S = ca, T = ra, U = ea, q = la, G = O, M = Z("show-tip");
                return a(), o("div", d, [ t("div", f, [ e(C) && !e(z) ? (a(), m(R, {
                    key: 0,
                    type: "primary",
                    onClick: K
                }, {
                    default: c(() => [ u("贡献度设置") ]),
                    _: 1
                })) : E("", !0) ]), e(i) ? (a(), o("div", y, [ t("div", v, n((A = e(i)) == null ? void 0 : A.name), 1), t("div", g, [ _(q, {
                    gutter: 20
                }, {
                    default: c(() => {
                        var B;
                        return [ (a(!0), o($, null, aa(((B = e(i)) == null ? void 0 : B.groupUserList) || [], r => (a(), 
                        m(U, {
                            span: 6,
                            key: r.userId
                        }, {
                            default: c(() => [ t("div", h, [ t("div", I, [ _(S, {
                                src: e(ia)(r.avatar),
                                size: 36,
                                class: "mr-10px"
                            }, null, 8, [ "src" ]), ta((a(), o("div", x, [ _(T, {
                                effect: "dark",
                                content: r.userName,
                                placement: "top-start"
                            }, {
                                default: c(() => [ u(n(r.userName), 1) ]),
                                _: 2
                            }, 1032, [ "content" ]) ])), [ [ M ] ]), r.isLeader ? (a(), 
                            m(R, {
                                key: 0,
                                type: "primary",
                                size: "small",
                                class: "ml-10px"
                            }, {
                                default: c(() => [ u("组长") ]),
                                _: 1
                            })) : E("", !0) ]), t("div", k, [ t("div", b, " 学号：" + n(r.number), 1), t("div", j, " 班级：" + n(r.deptName), 1) ]) ]) ]),
                            _: 2
                        }, 1024))), 128)) ];
                    }),
                    _: 1
                }) ]) ])) : (a(), o("div", w, [ _(G, {
                    msg: "暂无成员信息",
                    type: "resource"
                }) ])), _(pa, {
                    ref_key: "ContributionDialogRef",
                    ref: D,
                    onRefresh: P
                }, null, 512) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-3ab86102" ] ]);
});

export {
    xa as __tla,
    F as default
};