import {
    w as U,
    r as O,
    U as S,
    e as h,
    f as V,
    o as j,
    C as k,
    l as i,
    k as A,
    v as m,
    t as s,
    B as r,
    a as e,
    z as x,
    L as F,
    J as H,
    aU as P,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    c as J,
    __tla as K
} from "./check-a26308bc.js";

import {
    _ as Y
} from "./_plugin-vue_export-helper-1b428a4d.js";

let _, C, g, N, d, R, z = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    R = function(a) {
        const n = {
            0: "info",
            1: "success",
            2: "warning",
            3: "danger",
            default: ""
        }, l = {
            0: "待检查",
            1: "检查成功",
            2: "检查中",
            3: "检查失败",
            default: "--"
        };
        return {
            type: n[a.status] || n.default,
            word: l[a.status] || l.default,
            color: {
                0: "gray",
                1: "green",
                2: "orange",
                3: "red",
                default: "--"
            }[a.status] || l.default
        };
    }, N = function(a) {
        return a == null || a === "";
    }, d = function({
        list: a,
        attrName: n,
        attrValue: l,
        transferAttr: f
    }) {
        var u;
        const c = (u = a.filter(t => t[n] === l)) == null ? void 0 : u.pop();
        return (c == null ? void 0 : c[f]) || "--";
    }, _ = function(a) {
        const n = {
            BUG: "warning",
            VULNERABILITY: "",
            CODE_SMELL: "danger",
            default: ""
        };
        return n[a] || n.default;
    };
    let y, v, b, L, I;
    y = {
        class: "problem-content"
    }, v = {
        class: "content-first"
    }, b = {
        class: "pt-3"
    }, L = {
        class: "content-third pt-3"
    }, I = [ "innerHTML" ], g = Y({
        __name: "dialogProblem",
        props: {
            rowId: {
                type: String,
                default: ""
            }
        },
        setup(a, {
            expose: n
        }) {
            const l = a;
            U(() => l.rowId, o => {
                o && u();
            });
            const f = O([ {
                name: "Bug",
                code: "BUG",
                count: ""
            }, {
                name: "漏洞",
                code: "VULNERABILITY",
                count: ""
            }, {
                name: "异味",
                code: "CODE_SMELL",
                count: ""
            } ]), c = O([ {
                name: "阻断",
                code: "BLOCKER",
                count: ""
            }, {
                name: "严重",
                code: "CRITICAL",
                count: ""
            }, {
                name: "主要",
                code: "MAJOR",
                count: ""
            }, {
                name: "次要",
                code: "MINOR",
                count: ""
            }, {
                name: "提示",
                code: "INFO",
                count: ""
            } ]), u = async () => {
                const o = await J.getDetails({
                    ruleKey: l.rowId
                });
                t.form = Object.assign(t.form, o);
            }, t = S({
                title: "问题说明",
                visible: !1,
                form: {
                    name: "",
                    type: "",
                    severity: "",
                    htmlDesc: "",
                    createdAt: "",
                    debtRemFnOffset: "",
                    repo: "",
                    sysTags: [],
                    langName: ""
                }
            }), T = h(() => t.form.sysTags.join(",")), B = h(() => {
                var o;
                return (o = t.form.createdAt) == null ? void 0 : o.slice(0, 10);
            }), p = () => {
                t.visible = !1;
            };
            return n({
                openDialog: () => {
                    t.visible = !0;
                },
                closeDialog: p
            }), V(() => {}), (o, q) => {
                const D = F, E = H, M = P;
                return j(), k(M, {
                    "model-value": e(t).visible,
                    width: "800px",
                    title: e(t).title,
                    "close-on-click-modal": !1,
                    onClose: p,
                    "show-close": "false",
                    draggable: ""
                }, {
                    footer: i(() => [ A(E, {
                        onClick: p
                    }, {
                        default: i(() => [ m("返回") ]),
                        _: 1
                    }) ]),
                    default: i(() => {
                        var w;
                        return [ s("div", y, [ s("p", v, [ m(r(e(t).form.name) + " ", 1), A(D, {
                            class: "ml-2",
                            round: "",
                            type: e(_)(e(t).form.type)
                        }, {
                            default: i(() => [ m(r(e(d)({
                                list: e(f),
                                attrName: "code",
                                attrValue: e(t).form.type,
                                transferAttr: "name"
                            })), 1) ]),
                            _: 1
                        }, 8, [ "type" ]) ]), s("p", b, [ m(r(e(d)({
                            list: e(c),
                            attrName: "code",
                            attrValue: (w = e(t).form) == null ? void 0 : w.severity,
                            transferAttr: "name"
                        })) + " ", 1), s("i", {
                            class: x([ "ml-1 icon-severity", "icon-check-" + e(t).form.severity ])
                        }, null, 2) ]), s("div", L, [ s("span", null, r(e(T)), 1), s("span", null, "生效时间：" + r(e(B)), 1), s("span", null, r(e(t).form.langName), 1), s("span", null, "常量/任务：" + r(e(t).form.debtRemFnOffset), 1) ]), s("p", {
                            class: "content-details vHtmlClass",
                            innerHTML: e(t).form.htmlDesc
                        }, null, 8, I) ]) ];
                    }),
                    _: 1
                }, 8, [ "model-value", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-b02042ef" ] ]), C = Object.defineProperty({
        __proto__: null,
        default: g
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    z as __tla,
    _ as a,
    C as b,
    g as d,
    N as e,
    d as f,
    R as t
};