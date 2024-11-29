import {
    u as A,
    e as v,
    a,
    a0 as E,
    T as H,
    r as D,
    o as s,
    C as y,
    l as p,
    v as u,
    D as i,
    t as o,
    c as P,
    k as S,
    m as K,
    _ as L,
    J as M,
    aU as Q,
    R as W,
    S as Y,
    __tla as Z
} from "./index-6c08ea4c.js";

import {
    _ as $,
    a as ee,
    b as ae
} from "./git-init-run-c22497e9.js";

import {
    b as te,
    u as se,
    __tla as oe
} from "./project-enjineering-046a4b77.js";

import {
    _ as re
} from "./_plugin-vue_export-helper-1b428a4d.js";

let V, ie = Promise.all([ (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})() ]).then(async () => {
    let l, f, h, I, b, k, G, j, x, T;
    l = n => (W("data-v-924d144b"), n = n(), Y(), n), f = {
        class: "content"
    }, h = {
        key: 0
    }, I = l(() => o("img", {
        style: {
            transform: "translateX(-20px)"
        },
        src: $
    }, null, -1)), b = {
        class: "icon",
        style: {
            color: "#1ad3ab"
        }
    }, k = {
        key: 1
    }, G = l(() => o("img", {
        style: {
            "margin-bottom": "15px"
        },
        src: ee
    }, null, -1)), j = {
        class: "icon",
        style: {
            color: "red"
        }
    }, x = {
        key: 2
    }, T = [ l(() => o("img", {
        class: "imgBig",
        style: {
            "margin-bottom": "15px"
        },
        src: ae
    }, null, -1)), l(() => o("span", {
        class: "icon",
        style: {
            color: "#1d45b5",
            transform: "translateX(10px)"
        }
    }, " 初始化中...", -1)) ], V = re({
        __name: "gitInitDialog",
        props: {
            projectId: {
                type: String,
                default: ""
            }
        },
        emits: [ "initGit" ],
        setup(n, {
            expose: F,
            emit: O
        }) {
            const R = n, U = A(), C = v(() => a(U.currentRoute)), X = v(() => a(C).path.indexOf("/neu/") >= 0 || a(C).path.indexOf("/private/") >= 0), {
                projectId: N
            } = E(R);
            H();
            const c = D(!1), d = D({}), r = v(() => d.value.status), w = O, z = t => {
                B(t);
            }, B = t => {
                te({
                    projectId: N.value,
                    gitProjectType: t.gitProjectType
                }).then(e => {
                    se({
                        evnGitProTempId: e[0].evnGitProTempId,
                        projectId: N.value,
                        eid: t.eid,
                        sourceClassify: X.value ? "1" : "2",
                        gitGroupId: e[0].gitGroupId,
                        gitProId: e[0].gitProId,
                        gitProName: e[0].gitProName,
                        gitProjectName: e[0].gitProjectName,
                        gitProjectType: e[0].gitProjectType,
                        gitGroupPath: e[0].gitGroupPath,
                        gitGroupFullPath: e[0].gitGroupFullPath
                    }).then(g => {
                        g.code;
                    });
                });
            }, J = () => {};
            return F({
                openDialog: t => {
                    d.value = t, c.value = !0, z(t);
                }
            }), (t, e) => {
                const g = L, _ = M, q = Q;
                return s(), y(q, {
                    title: "仓库初始化",
                    modelValue: a(c),
                    "onUpdate:modelValue": e[3] || (e[3] = m => K(c) ? c.value = m : null),
                    width: "700px",
                    onClose: J
                }, {
                    footer: p(() => [ [ "2", "4" ].includes(a(r)) ? (s(), y(_, {
                        key: 0,
                        class: "search-btn",
                        type: "primary",
                        size: "large",
                        onClick: e[0] || (e[0] = m => (a(d), void w("initGit")))
                    }, {
                        default: p(() => [ u("刷新") ]),
                        _: 1
                    })) : i("", !0), a(r) === "3" ? (s(), y(_, {
                        key: 1,
                        class: "search-btn",
                        size: "large",
                        onClick: e[1] || (e[1] = m => c.value = !1)
                    }, {
                        default: p(() => [ u("关闭") ]),
                        _: 1
                    })) : i("", !0), a(r) === "5" ? (s(), y(_, {
                        key: 2,
                        class: "search-btn",
                        type: "primary",
                        size: "large",
                        onClick: e[2] || (e[2] = m => z(a(d)))
                    }, {
                        default: p(() => [ u("再次初始化") ]),
                        _: 1
                    })) : i("", !0) ]),
                    default: p(() => [ o("div", f, [ a(r) === "3" ? (s(), P("div", h, [ I, o("span", b, [ S(g, {
                        style: {
                            "margin-right": "10px"
                        },
                        icon: "svg-icon:pro-dialog-img-success"
                    }), u("初始化成功") ]) ])) : i("", !0), a(r) === "5" ? (s(), P("div", k, [ G, o("span", j, [ S(g, {
                        icon: "svg-icon:pro-dialog-img-error"
                    }), u(" 初始化失败") ]) ])) : i("", !0), [ "2", "4" ].includes(a(r)) ? (s(), 
                    P("div", x, T)) : i("", !0) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-924d144b" ] ]);
});

export {
    ie as __tla,
    V as default
};