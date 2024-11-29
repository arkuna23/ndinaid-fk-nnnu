import {
    e as T,
    r as d,
    U as D,
    f as E,
    o as W,
    c as q,
    A as F,
    G as K,
    a,
    k as e,
    l as r,
    v as p,
    B as f,
    t as M,
    m as Q,
    L as X,
    _ as Y,
    J as Z,
    ad as $,
    ae as aa,
    aU as ea,
    __tla as ta
} from "./index-6c08ea4c.js";

import {
    _ as oa,
    __tla as la
} from "./index-c4ca0ced.js";

import {
    _ as ra,
    __tla as sa
} from "./index-1024512a.js";

import {
    a as ia,
    h as na,
    __tla as da
} from "./codeRepository-027fddde.js";

import {
    _ as pa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ca
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as ua
} from "./DeptTag-1be092ce.js";

import {
    __tla as _a
} from "./index-ef4d146e.js";

let k, ma = Promise.all([ (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})() ]).then(async () => {
    let g, y;
    g = {
        class: "select-code px-10px"
    }, y = {
        class: "dialog-footer align-center"
    }, k = pa({
        __name: "CodeRepository",
        props: {
            modelValue: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "update:modelValue" ],
        setup(z, {
            emit: I
        }) {
            const N = I, S = z, s = T({
                get: () => S.modelValue,
                set: t => {
                    N("update:modelValue", t);
                }
            }), h = d([]), n = d(!1), v = d(0), i = D({
                pageNo: 1,
                pageSize: 10
            }), R = d([]), u = d({});
            function U() {
                n.value = !0, w();
            }
            function w(t) {
                i.pageNo = 1, x(t);
            }
            const x = async (t = {}) => {
                const c = await na({
                    ...i,
                    ...t
                });
                R.value = c.list, v.value = c.total;
            }, P = t => {
                u.value = t;
            }, j = () => {
                s.value = {
                    id: a(s).id,
                    codeRepositoryId: a(u).id,
                    codeRepositoryName: a(u).name
                }, C();
            }, C = () => {
                n.value = !1;
            };
            function A() {
                s.value = {
                    codeRepositoryId: "",
                    codeRepositoryName: ""
                };
            }
            return E(async () => {
                const {
                    languages: t
                } = await ia();
                h.value = t.map(o => ({
                    id: o.id + "",
                    name: o.name
                }));
            }), (t, o) => {
                const c = X, B = Y, _ = Z, G = ra, m = $, H = aa, J = oa, L = ea;
                return W(), q("div", g, [ F(e(c, {
                    round: "",
                    size: "default",
                    closable: "",
                    class: "mr-8px",
                    onClose: A
                }, {
                    default: r(() => {
                        var l;
                        return [ p(f((l = a(s)) == null ? void 0 : l.codeRepositoryName), 1) ];
                    }),
                    _: 1
                }, 512), [ [ K, a(s).codeRepositoryId ] ]), e(_, {
                    onClick: U,
                    size: "small",
                    round: "",
                    class: "!px-8px"
                }, {
                    default: r(() => [ e(B, {
                        icon: "ep:" + (a(s).codeRepositoryId ? "sort" : "plus"),
                        size: 12,
                        class: "mr-3px"
                    }, null, 8, [ "icon" ]), p(" " + f(a(s).codeRepositoryId ? "更换" : "添加"), 1) ]),
                    _: 1
                }), e(L, {
                    modelValue: a(n),
                    "onUpdate:modelValue": o[2] || (o[2] = l => Q(n) ? n.value = l : null),
                    title: "项目代码仓",
                    width: "800px"
                }, {
                    footer: r(() => [ M("div", y, [ e(_, {
                        onClick: C
                    }, {
                        default: r(() => [ p("取 消") ]),
                        _: 1
                    }), e(_, {
                        type: "primary",
                        onClick: j
                    }, {
                        default: r(() => [ p("确 定") ]),
                        _: 1
                    }) ]) ]),
                    default: r(() => [ e(G, {
                        ref: "ComSearchRef",
                        "in-dialog": !0,
                        keywordsInfo: {
                            label: "项目代码仓名称",
                            key: "name"
                        },
                        onHandleSearch: w,
                        class: "left"
                    }, null, 512), e(H, {
                        ref: "selectTable",
                        data: a(R),
                        "highlight-current-row": "",
                        onCurrentChange: P,
                        height: "400px"
                    }, {
                        default: r(() => [ e(m, {
                            prop: "name",
                            label: "名称",
                            width: "150"
                        }), e(m, {
                            prop: "language",
                            label: "语言类型"
                        }, {
                            default: r(l => {
                                var b;
                                return [ p(f((V = l.row, (b = a(h).find(O => O.id + "" == V.language + "")) == null ? void 0 : b.name)), 1) ];
                                var V;
                            }),
                            _: 1
                        }), e(m, {
                            prop: "description",
                            label: "描述",
                            "show-overflow-tooltip": ""
                        }) ]),
                        _: 1
                    }, 8, [ "data" ]), e(J, {
                        total: a(v),
                        page: a(i).pageNo,
                        "onUpdate:page": o[0] || (o[0] = l => a(i).pageNo = l),
                        limit: a(i).pageSize,
                        "onUpdate:limit": o[1] || (o[1] = l => a(i).pageSize = l),
                        onPagination: x
                    }, null, 8, [ "total", "page", "limit" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-2e4af1c4" ] ]);
});

export {
    ma as __tla,
    k as default
};