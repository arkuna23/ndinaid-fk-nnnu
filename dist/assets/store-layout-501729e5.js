import {
    _ as rt,
    __tla as lt
} from "./index-8b41572c.js";

import {
    u as ot,
    T as st,
    h as ct,
    r as c,
    e as x,
    o as y,
    c as it,
    t,
    B as i,
    k as l,
    l as n,
    v as nt,
    A as J,
    G as W,
    z as f,
    C as b,
    D as I,
    bo as j,
    _ as _t,
    J as ut,
    P as dt,
    q as pt,
    cn as mt,
    R as vt,
    S as yt,
    __tla as ft
} from "./index-6c08ea4c.js";

import {
    E as ht,
    __tla as gt
} from "./el-avatar-76960a98.js";

import {
    C as Z,
    __tla as xt
} from "./clipboard-0a12866f.js";

import bt, {
    __tla as It
} from "./code-file-dd84133e.js";

import jt, {
    __tla as Pt
} from "./store-chart-8770a7e9.js";

import {
    x as kt,
    y as wt,
    z as Ct,
    __tla as St
} from "./code-a0d24f62.js";

import {
    __tla as zt
} from "./workItem-20fa3e3c.js";

import {
    s as Gt,
    __tla as Nt
} from "./file-e038b35d.js";

import Rt, {
    __tla as Tt
} from "./store-member-babf9810.js";

import {
    _ as Bt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Dt
} from "./el-infinite-scroll-9cd61b58.js";

import {
    __tla as Ut
} from "./throttle-1adeb119.js";

import "./base64-a4536364.js";

import {
    __tla as Vt
} from "./diff-code-ff22ee24.js";

import {
    __tla as Mt
} from "./index-234b0463.js";

import {
    __tla as qt
} from "./VuePrimeEditor-41848cbd.js";

import {
    __tla as At
} from "./commit-line-chart-2abfe8ac.js";

import "./index-eb0ca811.js";

import "./install-67fb146c.js";

import "./install-0c30d2d2.js";

import {
    __tla as Et
} from "./team-bar-chart-e65231a9.js";

import {
    __tla as Jt
} from "./code-line-chart-022b0407.js";

import {
    __tla as Wt
} from "./index-71666e05.js";

import "./formatter-7ecf379a.js";

import {
    __tla as Zt
} from "./group-7c00fc2a.js";

let $, $t = Promise.all([ (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return gt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return St;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return Ut;
    } catch {}
})(), (() => {
    try {
        return Vt;
    } catch {}
})(), (() => {
    try {
        return Mt;
    } catch {}
})(), (() => {
    try {
        return qt;
    } catch {}
})(), (() => {
    try {
        return At;
    } catch {}
})(), (() => {
    try {
        return Et;
    } catch {}
})(), (() => {
    try {
        return Jt;
    } catch {}
})(), (() => {
    try {
        return Wt;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})() ]).then(async () => {
    let _, P, k, w, C, S, z, G, N, R, T, B, D, U, V, M, q;
    _ = u => (vt("data-v-ace5d796"), u = u(), yt(), u), P = {
        class: "store-layout"
    }, k = {
        class: "page-header"
    }, w = {
        class: "left"
    }, C = {
        class: "page-content"
    }, S = {
        class: "store-header"
    }, z = {
        class: "store-header-left"
    }, G = {
        class: "store-header-info"
    }, N = {
        class: "store-header-title"
    }, R = {
        class: "store-header-desc"
    }, T = {
        class: "store-header-right"
    }, B = {
        style: {
            padding: "5px 0"
        }
    }, D = {
        style: {
            display: "flex",
            "justify-content": "space-between",
            "align-items": "center",
            "margin-bottom": "16px"
        }
    }, U = [ "data-clipboard-text" ], V = _(() => t("div", {
        class: "mb-4 warning-desc"
    }, " 为保障数据统计准确性，请使用默认的仓库账户信息（可至成员管理查看）。 ", -1)), M = _(() => t("span", {
        style: {
            color: "#494949"
        }
    }, "下载ZIP", -1)), q = _(() => t("div", {
        style: {
            padding: "0 20px"
        }
    }, [ t("div", {
        style: {
            "border-bottom": "1px solid rgba(61, 61, 61, 0.1)"
        }
    }) ], -1)), $ = Bt({
        __name: "store-layout",
        setup(u) {
            const F = ot(), d = st(), H = ct(), p = c(""), r = c({});
            x(() => H.isStudent);
            const A = c(), K = c(), m = c(!1);
            c([]);
            const s = x(() => d.params.activeMenu), E = x(() => d.params), L = () => {
                let e = new Z("#copyStoreBtn");
                e.on("success", function() {
                    e.destroy(), e = new Z("#copyStoreBtn"), j.success("复制成功");
                }), e.on("error", function() {
                    j.warning("复制失败，请手动复制");
                });
            }, h = e => {
                const a = {
                    evnGitProId: E.value.evnGitProId,
                    projectId: E.value.projectId,
                    activeMenu: e
                };
                F.push({
                    name: "DevopsCodeStore",
                    params: a
                });
            }, v = c({}), O = () => {
                kt({
                    projectId: d.params.gitProId
                }).then(e => {
                    j.success("开始下载"), Gt(e, `${r.value.gitProjectName}.zip`);
                });
            };
            return new Promise(e => {
                Ct({
                    evnGitProId: d.params.evnGitProId
                }).then(a => {
                    r.value = a, e();
                });
            }).then(() => {
                wt(r.value.gitProId).then(e => {
                    v.value = e, p.value = e.httpUrlToRepo;
                });
            }), (e, a) => {
                const Q = ht, g = _t, X = ut, Y = dt, tt = pt, et = mt, at = rt;
                return y(), it("div", P, [ t("div", k, [ t("div", w, [ t("span", null, i(r.value.gitProjectName) + i(r.value.gitProjectType == 1 ? "（前端）" : r.value.gitProjectType == 2 ? "（后端）" : "") + "代码仓库", 1) ]) ]), t("div", C, [ t("div", S, [ t("div", z, [ l(Q, {
                    size: 40
                }, {
                    default: n(() => {
                        var o;
                        return [ t("div", null, [ t("span", null, i((o = v.value.name) == null ? void 0 : o.substring(0, 1)), 1) ]) ];
                    }),
                    _: 1
                }), t("div", G, [ t("span", N, i(v.value.name), 1), t("span", R, "ID：" + i(v.value.id), 1) ]) ]), t("div", T, [ l(X, {
                    ref_key: "buttonRef",
                    ref: A,
                    type: "primary",
                    size: "large",
                    onClick: a[0] || (a[0] = o => m.value = !m.value)
                }, {
                    default: n(() => [ nt(" 克隆/下载 "), J(l(g, {
                        icon: "ep:caret-bottom"
                    }, null, 512), [ [ W, !m.value ] ]), J(l(g, {
                        icon: "ep:caret-top"
                    }, null, 512), [ [ W, m.value ] ]) ]),
                    _: 1
                }, 512), l(tt, {
                    ref_key: "popoverRef",
                    ref: K,
                    "virtual-ref": A.value,
                    trigger: "click",
                    placement: "bottom-start",
                    "virtual-triggering": "",
                    width: "394px"
                }, {
                    default: n(() => [ t("div", B, [ t("div", D, [ l(Y, {
                        modelValue: p.value,
                        "onUpdate:modelValue": a[1] || (a[1] = o => p.value = o),
                        class: "neu",
                        style: {
                            width: "280px"
                        }
                    }, null, 8, [ "modelValue" ]), t("div", {
                        style: {
                            width: "77px",
                            border: "1px solid #1d45b5",
                            height: "32px",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "border-radius": "4px",
                            cursor: "pointer"
                        },
                        id: "copyStoreBtn",
                        "data-clipboard-text": p.value,
                        onClick: L
                    }, " 复制 ", 8, U) ]), V, t("div", {
                        style: {
                            display: "flex",
                            "border-top": "1px solid #d8d8d8",
                            "align-items": "center",
                            "justify-content": "center",
                            height: "52px",
                            "margin-bottom": "-17px",
                            cursor: "pointer"
                        },
                        onClick: O
                    }, [ l(g, {
                        icon: "svg-icon:downloadTenant",
                        class: "mr-2"
                    }), M ]) ]) ]),
                    _: 1
                }, 8, [ "virtual-ref" ]) ]) ]), q, t("div", {
                    class: f([ "store-menu", {
                        radius: [ "3" ].includes(s.value)
                    } ])
                }, [ t("div", {
                    class: f([ "store-menu-item", {
                        selected: s.value == 1
                    } ]),
                    onClick: a[2] || (a[2] = o => h(1))
                }, " 代码文件 ", 2), t("div", {
                    class: f([ "store-menu-item", {
                        selected: s.value == 3
                    } ]),
                    onClick: a[3] || (a[3] = o => h(3))
                }, " 仓库统计 ", 2), t("div", {
                    class: f([ "store-menu-item", {
                        selected: s.value == 4
                    } ]),
                    onClick: a[4] || (a[4] = o => h(4))
                }, " 成员管理 ", 2) ], 2), l(at, {
                    "outer-height": 79,
                    "no-padding": !0,
                    class: "center-box",
                    style: {
                        "background-color": "#f5f7f9"
                    }
                }, {
                    default: n(() => [ s.value == 1 ? (y(), b(bt, {
                        key: 0,
                        projectId: r.value.gitProId
                    }, null, 8, [ "projectId" ])) : I("", !0), s.value == 3 ? (y(), 
                    b(et, {
                        key: 1,
                        height: "100%"
                    }, {
                        default: n(() => [ l(jt, {
                            projectId: r.value.gitProId,
                            projectName: r.value.gitProjectName
                        }, null, 8, [ "projectId", "projectName" ]) ]),
                        _: 1
                    })) : I("", !0), s.value == 4 ? (y(), b(Rt, {
                        key: 2,
                        projectInfo: r.value
                    }, null, 8, [ "projectInfo" ])) : I("", !0) ]),
                    _: 1
                }) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-ace5d796" ] ]);
});

export {
    $t as __tla,
    $ as default
};