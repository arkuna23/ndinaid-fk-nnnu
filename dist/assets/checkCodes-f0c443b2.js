import {
    T as A,
    r as x,
    b0 as G,
    U as H,
    f as J,
    o as f,
    c as I,
    k as t,
    l as b,
    F as M,
    y as Q,
    a as m,
    C as K,
    v as V,
    B,
    t as O,
    z as W,
    _ as X,
    ad as Y,
    ae as Z,
    __tla as $
} from "./index-6c08ea4c.js";

import {
    E as aa,
    a as ea,
    __tla as ta
} from "./el-breadcrumb-item-45b75827.js";

import la, {
    __tla as oa
} from "./diff-code-51383ecb.js";

import {
    c as sa,
    __tla as na
} from "./check-a26308bc.js";

import {
    _ as ca
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ra
} from "./dialogProblem-fa4d1fd2.js";

let R, ia = Promise.all([ (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})() ]).then(async () => {
    let j, q, F, N;
    j = {
        class: "check-code"
    }, q = {
        key: 0
    }, F = [ "onClick" ], N = {
        class: "pl-4"
    }, R = ca({
        __name: "checkCodes",
        setup(pa) {
            const T = A(), L = x([]), E = G("checkData"), e = x([]), v = x(!1), n = H({
                component: T.params.projectKey ?? E.projectKey,
                fileName: ""
            }), k = async () => {
                const a = await sa.getFileList({
                    pageSize: 100,
                    component: n.component
                });
                L.value = P(a);
            }, P = a => {
                const {
                    baseComponent: r,
                    components: c
                } = a, {
                    key: w,
                    measures: g,
                    name: l,
                    path: C,
                    qualifier: o
                } = r, p = Object.assign({
                    key: w,
                    name: l,
                    path: C,
                    qualifier: "root",
                    canClick: !1
                }, z(g)), y = [];
                return c == null || c.map(u => {
                    const {
                        key: _,
                        measures: s,
                        name: h,
                        path: i,
                        qualifier: d
                    } = u;
                    y.push(Object.assign({
                        key: _,
                        name: h,
                        path: i,
                        qualifier: d,
                        canClick: !0
                    }, z(s)));
                }), [ p, ...y ];
            }, z = a => {
                const r = {};
                return a == null || a.map(c => {
                    r[c.metric] = c.value;
                }), r;
            }, S = ({
                rowIndex: a
            }) => a === 0 ? "highlight-row1" : "", U = ({
                rowIndex: a,
                columnIndex: r
            }) => a === 0 && r === 0 ? "highlight-row1-cell1" : "";
            return J(() => {
                k(), e.value.push({
                    name: n.component,
                    key: n.component
                });
            }), (a, r) => {
                const c = aa, w = ea, g = X, l = Y, C = Z;
                return f(), I("div", j, [ t(w, {
                    class: "pb-3 neu-breadcrumb",
                    separator: "/"
                }, {
                    default: b(() => [ (f(!0), I(M, null, Q(m(e), (o, p) => (f(), 
                    K(c, {
                        key: o.key,
                        to: {},
                        onClick: y => ((u, _) => {
                            if (_ !== e.value.length - 1) {
                                v.value = !1;
                                const {
                                    key: s
                                } = u;
                                n.component = s;
                                const h = e.value.findIndex(i => i.key === s);
                                e.value = e.value.slice(0, h + 1), k();
                            }
                        })(o, p)
                    }, {
                        default: b(() => [ V(B(o.name), 1) ]),
                        _: 2
                    }, 1032, [ "onClick" ]))), 128)) ]),
                    _: 1
                }), m(v) ? (f(), K(la, {
                    key: 1,
                    breadList: m(e),
                    rowComponent: m(n).component,
                    fileName: m(n).fileName
                }, null, 8, [ "breadList", "rowComponent", "fileName" ])) : (f(), 
                I("div", q, [ t(C, {
                    data: m(L),
                    style: {
                        width: "100%"
                    },
                    "header-cell-style": {
                        background: "#F6F8FD",
                        color: "#333333"
                    },
                    size: "small",
                    "row-class-name": S,
                    "cell-class-name": U,
                    class: "check-code-table"
                }, {
                    default: b(() => [ t(l, {
                        prop: "name",
                        label: "代码文件",
                        "min-width": "600",
                        "show-overflow-tooltip": ""
                    }, {
                        default: b(o => {
                            var p;
                            return [ O("div", {
                                class: W([ "table-row-file", o.row.canClick ? "neu-pointer" : "" ]),
                                onClick: y => (u => {
                                    const {
                                        qualifier: _ = "default",
                                        key: s,
                                        canClick: h,
                                        name: i,
                                        path: d
                                    } = u;
                                    n.component = s;
                                    const D = {
                                        TRK_true: () => {
                                            k().then(() => {
                                                e.value.push({
                                                    name: i,
                                                    key: s,
                                                    path: d
                                                });
                                            });
                                        },
                                        DIR_true: () => {
                                            k().then(() => {
                                                e.value.push({
                                                    name: i,
                                                    key: s,
                                                    path: d
                                                });
                                            });
                                        },
                                        FIL_true: () => {
                                            n.fileName = u.name, v.value = !0, e.value.push({
                                                name: i,
                                                key: s,
                                                path: d
                                            });
                                        },
                                        default: () => {}
                                    };
                                    (D[_ + "_" + h] || D.default)();
                                })(o.row)
                            }, [ t(g, {
                                icon: "svg-icon:icon-check-" + ((p = o.row) == null ? void 0 : p.qualifier),
                                style: {
                                    width: "18px",
                                    height: "18px",
                                    cursor: "default"
                                }
                            }, null, 8, [ "icon" ]), O("span", N, B(o.row.name), 1) ], 10, F) ];
                        }),
                        _: 1
                    }), t(l, {
                        prop: "ncloc",
                        label: "代码行数"
                    }), t(l, {
                        prop: "bugs",
                        label: "Bugs"
                    }), t(l, {
                        prop: "vulnerabilities",
                        label: "漏洞"
                    }), t(l, {
                        prop: "code_smells",
                        label: "异味"
                    }), t(l, {
                        prop: "coverage",
                        label: "覆盖率"
                    }), t(l, {
                        prop: "duplicated_lines_density",
                        label: "重复率"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ])) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-0c94ee5f" ] ]);
});

export {
    ia as __tla,
    R as default
};