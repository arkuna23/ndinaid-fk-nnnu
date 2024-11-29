import {
    _ as We,
    __tla as Xe
} from "./index-c4ca0ced.js";

import {
    b0 as Ze,
    T as $e,
    r as i,
    e as z,
    U as Pe,
    f as ea,
    o as r,
    c as u,
    t as a,
    z as M,
    a as s,
    k as o,
    D as T,
    l as p,
    bl as aa,
    B as d,
    A as I,
    G as U,
    F as x,
    y as C,
    C as la,
    v as F,
    _ as sa,
    aQ as ta,
    bp as ca,
    bq as na,
    L as oa,
    R as ia,
    S as ra,
    __tla as ua
} from "./index-6c08ea4c.js";

import {
    E as pa,
    a as da,
    __tla as ma
} from "./el-collapse-item-c8b76a0a.js";

import {
    c as G,
    __tla as va
} from "./check-a26308bc.js";

import {
    f as Be,
    a as ga,
    d as ha,
    __tla as ya
} from "./dialogProblem-fa4d1fd2.js";

import {
    _ as fa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ka
} from "./index-993301ca.js";

let Ee, _a = Promise.all([ (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})(), (() => {
    try {
        return ya;
    } catch {}
})(), (() => {
    try {
        return ka;
    } catch {}
})() ]).then(async () => {
    let y, q, J, Q, Y, H, W, X, Z, $, ee, ae, le, se, te, ce, ne, oe, ie, re, ue, pe, de, me, ve, ge, he, ye, fe, ke, _e, xe, Ce, be;
    y = b => (ia("data-v-fed671ce"), b = b(), ra(), b), q = {
        class: "check-problems"
    }, J = {
        class: "check-problems-header"
    }, Q = y(() => a("span", null, "过滤器", -1)), Y = {
        key: 0,
        class: "check-filter-close"
    }, H = {
        class: "check-filter-right"
    }, W = y(() => a("span", null, "问题列表", -1)), X = {
        class: "check-problems-content"
    }, Z = {
        class: "filter-type"
    }, $ = y(() => a("span", null, "类型", -1)), ee = {
        class: "common-row"
    }, ae = {
        class: "common-ellipsis"
    }, le = {
        class: "common-option"
    }, se = {
        class: "filter-seriousless filter-type"
    }, te = y(() => a("span", null, "严重程度", -1)), ce = {
        class: "common-row"
    }, ne = {
        class: "common-ellipsis"
    }, oe = {
        class: "common-option"
    }, ie = {
        class: "filter-type"
    }, re = y(() => a("span", null, "语言", -1)), ue = {
        class: "common-row"
    }, pe = {
        class: "span-ellipsis"
    }, de = {
        class: "common-option"
    }, me = {
        class: "filter-type filter-rules"
    }, ve = y(() => a("span", null, "规则", -1)), ge = {
        class: "common-row"
    }, he = [ "title" ], ye = {
        class: "common-option"
    }, fe = {
        key: 0,
        class: "neu-flex-center"
    }, ke = {
        class: "check-problem-list"
    }, _e = {
        class: "text-ellipsis",
        style: {
            "text-align": "left"
        }
    }, xe = {
        class: "collapse-content"
    }, Ce = [ "onClick" ], be = {
        class: "flex justify-center"
    }, Ee = fa({
        __name: "checkProblems",
        setup(b) {
            const Ne = Ze("checkData"), Oe = $e(), k = i(!0), we = i(null), Me = z(() => k.value ? "check-filter-show" : "check-filter-hide"), Te = z(() => k.value ? "check-filter-expand" : "check-filter-collapse"), Ve = () => {
                k.value = !k.value, P.value = k.value ? "svg-icon:icon-check-expand" : "svg-icon:icon-check-collapse";
            }, Ae = i(""), t = Pe({
                types: "",
                severities: "",
                languages: "",
                standard: "",
                rules: "",
                projectKey: ""
            }), R = i([ {
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
            } ]), L = i([ {
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
            } ]), N = i([]), D = i([]), Fe = z(() => _.value && N.value.length > 15 && D.value.length < N.value.length);
            let Ge = 1;
            const Ke = () => {
                var n;
                D.value = (n = N.value) == null ? void 0 : n.slice(0, 15 * Ge++);
            }, je = i([]), w = i(!0), P = i("svg-icon:icon-check-expand"), V = i(!0), Se = i("svg-icon:icon-check-expand"), B = i(!0), qe = i("svg-icon:icon-check-expand"), A = i(!0), ze = i("svg-icon:icon-check-expand"), _ = i(!0), Ie = i("svg-icon:icon-check-expand"), K = n => {
                const l = {
                    type: () => {
                        w.value = !w.value, P.value = w.value ? "svg-icon:icon-check-expand" : "svg-icon:icon-check-collapse";
                    },
                    serious: () => {
                        V.value = !V.value, Se.value = V.value ? "svg-icon:icon-check-expand" : "svg-icon:icon-check-collapse";
                    },
                    standard: () => {
                        B.value = !B.value, qe.value = B.value ? "svg-icon:icon-check-expand" : "svg-icon:icon-check-collapse";
                    },
                    language: () => {
                        A.value = !A.value, ze.value = A.value ? "svg-icon:icon-check-expand" : "svg-icon:icon-check-collapse";
                    },
                    rule: () => {
                        _.value = !_.value, Ie.value = _.value ? "svg-icon:icon-check-expand" : "svg-icon:icon-check-collapse";
                    },
                    default: () => {}
                };
                (l[n] || l.default)();
            }, Ue = i([]), Je = z(() => {
                const {
                    types: n,
                    severities: l,
                    languages: c,
                    standard: g,
                    rules: m
                } = t;
                return [ n, ...l, c, g, m ].filter(h => h).length > 0;
            }), Qe = () => {
                t.types = "", t.severities = "", t.languages = "", t.radio = "", 
                t.rules = "", f();
            }, v = Pe({
                pageNum: 1,
                pageSize: 10,
                total: 0
            }), f = async () => {
                const n = await G.getProblemsList({
                    projectKey: t.projectKey,
                    pageNum: v.pageNum,
                    pageSize: v.pageSize,
                    languages: t.languages,
                    rules: t.rules,
                    severities: t.severities,
                    types: t.types
                }), {
                    issues: l,
                    total: c
                } = n;
                Ue.value = l, v.total = parseInt(c);
            }, Re = ({
                compareArr: n,
                attrName: l
            }) => {
                const c = {};
                return n.map(g => {
                    c[g.property] = g.values;
                }), c[l];
            }, Le = ({
                rawArr: n = [],
                compareArr: l,
                attrName: c
            }) => {
                const g = {};
                l.map(m => {
                    g[m.property] = m.values;
                }), n.map(m => {
                    var j, S;
                    const h = (S = (j = g[c]) == null ? void 0 : j.filter(O => O.val === m.code)) == null ? void 0 : S.pop(), {
                        count: E
                    } = h;
                    m.count = E;
                });
            };
            return ea(() => {
                const {
                    projectKey: n
                } = Oe.params;
                t.projectKey = n ?? Ne.projectKey, (async () => {
                    const l = await G.getProblems({
                        projectKey: t.projectKey ?? Ne.projectKey,
                        pageSize: 1,
                        facets: "languages,rules"
                    }), {
                        facets: c = "undefined"
                    } = l;
                    je.value = Re({
                        compareArr: c,
                        attrName: "languages"
                    }), N.value = Re({
                        compareArr: c,
                        attrName: "rules"
                    }), Ke();
                })(), (async () => {
                    const l = await G.getProblems({
                        projectKey: t.projectKey,
                        pageNum: v.pageNum,
                        pageSize: v.pageSize,
                        facets: "severities,types"
                    }), {
                        facets: c = "undefined"
                    } = l;
                    Le({
                        rawArr: R.value,
                        compareArr: c,
                        attrName: "types"
                    }), Le({
                        rawArr: L.value,
                        compareArr: c,
                        attrName: "severities"
                    });
                })(), f();
            }), (n, l) => {
                const c = sa, g = ta, m = ca, h = na, E = oa, j = pa, S = da, O = We;
                return r(), u("div", q, [ a("div", J, [ a("div", {
                    class: M([ "check-filter-default", s(Te) ])
                }, [ a("div", {
                    onClick: Ve,
                    class: "neu-pointer"
                }, [ o(c, {
                    icon: "svg-icon:check-problems-filter",
                    style: {
                        width: "20px",
                        height: "18px"
                    }
                }), Q ]), s(k) ? (r(), u("div", Y, [ s(Je) ? (r(), u("span", {
                    key: 0,
                    onClick: Qe
                }, "清空")) : T("", !0), o(g, {
                    size: 18,
                    onClick: Ve,
                    style: {
                        "margin-top": "3px"
                    }
                }, {
                    default: p(() => [ o(s(aa)) ]),
                    _: 1
                }) ])) : T("", !0) ], 2), a("div", H, [ W, a("span", null, "已过滤出" + d(s(v).total) + "个问题", 1) ]) ]), a("div", X, [ a("div", {
                    class: M([ "check-filter", s(Me) ])
                }, [ a("div", Z, [ a("p", null, [ $, o(c, {
                    icon: s(P),
                    style: {
                        width: "24px",
                        height: "24px"
                    },
                    onClick: l[0] || (l[0] = e => K("type"))
                }, null, 8, [ "icon" ]) ]), I(o(h, {
                    modelValue: s(t).types,
                    "onUpdate:modelValue": l[1] || (l[1] = e => s(t).types = e),
                    onChange: f
                }, {
                    default: p(() => [ (r(!0), u(x, null, C(s(R), e => (r(), u("div", {
                        key: e.code,
                        class: "common-select"
                    }, [ o(m, {
                        label: e.code
                    }, {
                        default: p(() => [ a("div", ee, [ a("span", ae, d(e.name), 1), a("span", le, d(e.count), 1) ]) ]),
                        _: 2
                    }, 1032, [ "label" ]) ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), [ [ U, s(w) ] ]) ]), a("div", se, [ a("p", null, [ te, o(c, {
                    icon: s(Se),
                    style: {
                        width: "24px",
                        height: "24px"
                    },
                    onClick: l[2] || (l[2] = e => K("serious"))
                }, null, 8, [ "icon" ]) ]), I(o(h, {
                    modelValue: s(t).severities,
                    "onUpdate:modelValue": l[3] || (l[3] = e => s(t).severities = e),
                    onChange: f
                }, {
                    default: p(() => [ (r(!0), u(x, null, C(s(L), e => (r(), u("div", {
                        key: e.code,
                        class: "common-select"
                    }, [ o(m, {
                        label: e.code
                    }, {
                        default: p(() => [ a("div", ce, [ a("span", ne, d(e.name), 1), a("span", oe, d(e.count), 1) ]) ]),
                        _: 2
                    }, 1032, [ "label" ]) ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), [ [ U, s(V) ] ]) ]), a("div", ie, [ a("p", null, [ re, o(c, {
                    icon: s(ze),
                    style: {
                        width: "24px",
                        height: "24px"
                    },
                    onClick: l[4] || (l[4] = e => K("language"))
                }, null, 8, [ "icon" ]) ]), I(o(h, {
                    modelValue: s(t).languages,
                    "onUpdate:modelValue": l[5] || (l[5] = e => s(t).languages = e),
                    onChange: f
                }, {
                    default: p(() => [ (r(!0), u(x, null, C(s(je), e => (r(), u("div", {
                        key: e.val,
                        class: "common-select"
                    }, [ o(m, {
                        label: e.val
                    }, {
                        default: p(() => [ a("div", ue, [ a("span", pe, d(e.val), 1), a("span", de, d(e.count), 1) ]) ]),
                        _: 2
                    }, 1032, [ "label" ]) ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), [ [ U, s(A) ] ]) ]), a("div", me, [ a("p", null, [ ve, o(c, {
                    icon: s(Ie),
                    style: {
                        width: "24px",
                        height: "24px"
                    },
                    onClick: l[6] || (l[6] = e => K("rule"))
                }, null, 8, [ "icon" ]) ]), I(o(h, {
                    modelValue: s(t).rules,
                    "onUpdate:modelValue": l[7] || (l[7] = e => s(t).rules = e),
                    onChange: f
                }, {
                    default: p(() => [ (r(!0), u(x, null, C(s(D), e => (r(), u("div", {
                        key: e.val,
                        class: "common-select"
                    }, [ o(m, {
                        label: e.val
                    }, {
                        default: p(() => [ a("div", ge, [ a("span", {
                            class: "span-ellipsis",
                            title: e.val
                        }, d(e.val), 9, he), a("span", ye, d(e.count), 1) ]) ]),
                        _: 2
                    }, 1032, [ "label" ]) ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue" ]), [ [ U, s(_) ] ]), s(Fe) ? (r(), u("div", fe, [ a("span", {
                    class: "load-more",
                    onClick: Ke
                }, "查看更多") ])) : T("", !0) ]) ], 2), a("div", ke, [ o(S, {
                    modelValue: n.activeNames,
                    "onUpdate:modelValue": l[9] || (l[9] = e => n.activeNames = e),
                    onChange: n.handleChange
                }, {
                    default: p(() => [ (r(!0), u(x, null, C(s(Ue), e => (r(), la(j, {
                        key: e.key,
                        name: e.key
                    }, {
                        title: p(() => [ o(c, {
                            icon: "svg-icon:check-file",
                            style: {
                                width: "18px",
                                height: "18px"
                            }
                        }), a("div", _e, d(e.component), 1) ]),
                        default: p(() => [ a("div", xe, [ a("p", null, [ a("span", null, [ F(d(s(Be)({
                            list: s(L),
                            attrName: "code",
                            attrValue: e.severity,
                            transferAttr: "name"
                        })) + " ", 1), a("i", {
                            class: M([ "ml-1 icon-severity", "icon-check-" + e.severity ])
                        }, null, 2) ]), o(E, {
                            round: "",
                            type: s(ga)(e.type)
                        }, {
                            default: p(() => [ F(d(s(Be)({
                                list: s(R),
                                attrName: "code",
                                attrValue: e.type,
                                transferAttr: "name"
                            })), 1) ]),
                            _: 2
                        }, 1032, [ "type" ]) ]), a("p", {
                            onClick: l[8] || (l[8] = (...De) => n.toDetails && n.toDetails(...De))
                        }, [ F(d(e.message), 1), a("span", {
                            onClick: De => (Ye => {
                                const {
                                    rule: He
                                } = Ye;
                                Ae.value = He, we.value.openDialog();
                            })(e)
                        }, "为何是问题？", 8, Ce) ]) ]) ]),
                        _: 2
                    }, 1032, [ "name" ]))), 128)) ]),
                    _: 1
                }, 8, [ "modelValue", "onChange" ]), a("div", be, [ o(O, {
                    pagerCount: 5,
                    total: s(v).total,
                    page: s(v).pageNum,
                    "onUpdate:page": l[10] || (l[10] = e => s(v).pageNum = e),
                    limit: s(v).pageSize,
                    "onUpdate:limit": l[11] || (l[11] = e => s(v).pageSize = e),
                    onPagination: l[12] || (l[12] = e => f())
                }, null, 8, [ "total", "page", "limit" ]) ]) ]) ]), o(ha, {
                    ref_key: "problemDetailsRef",
                    ref: we,
                    rowId: s(Ae)
                }, null, 8, [ "rowId" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-fed671ce" ] ]);
});

export {
    _a as __tla,
    Ee as default
};