import {
    b0 as D,
    a0 as I,
    r as J,
    U as M,
    e as y,
    f as P,
    o as d,
    C as b,
    l as r,
    t as u,
    k as l,
    v as w,
    a as o,
    c as O,
    F as j,
    y as q,
    m as B,
    ad as G,
    ae as H,
    J as K,
    aU as Q,
    __tla as R
} from "./index-6c08ea4c.js";

import {
    _ as W,
    __tla as X
} from "./index-c4ca0ced.js";

import {
    _ as Y,
    __tla as Z
} from "./index-8b41572c.js";

import {
    _ as $
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ee
} from "./index-993301ca.js";

let v, ae = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})() ]).then(async () => {
    let c, _, m;
    c = {
        class: "info-container"
    }, _ = {
        class: "neu-flex-center"
    }, m = {
        class: "dialog-footer"
    }, v = $({
        __name: "ErrorDialog",
        props: {
            tableList: {
                type: Array,
                default: () => []
            },
            sourceType: {
                type: String,
                default: () => ""
            }
        },
        emits: [ "downloadError" ],
        setup(S, {
            expose: z,
            emit: C
        }) {
            const g = S, N = D("tableColumnList"), {
                tableList: f
            } = I(g), s = J(!1), k = C, e = M({
                pageNo: 1,
                pageSize: 10
            }), x = y(() => f.value.length), U = y(() => {
                const i = (e.pageNo - 1) * e.pageSize, a = i + e.pageSize;
                return f.value.slice(i, a);
            }), E = ({
                page: i,
                limit: a
            }) => {
                e.pageNo = i, e.pageSize = a;
            };
            P(() => {});
            const n = () => {
                s.value = !1, e.pageNum = 1, e.pageSize = 10;
            }, F = () => {
                k("downloadError", {
                    source: g.sourceType.value
                });
            };
            return z({
                handleOpen: () => {
                    s.value = !0;
                },
                handleClose: n
            }), (i, a) => {
                const p = G, L = H, V = Y, T = W, h = K, A = Q;
                return d(), b(A, {
                    modelValue: o(s),
                    "onUpdate:modelValue": a[2] || (a[2] = t => B(s) ? s.value = t : null),
                    "close-on-click-modal": !1,
                    title: "错误信息",
                    width: "1200px",
                    onClose: n
                }, {
                    footer: r(() => [ u("span", m, [ l(h, {
                        onClick: n
                    }, {
                        default: r(() => [ w("返回") ]),
                        _: 1
                    }), l(h, {
                        type: "primary",
                        onClick: F
                    }, {
                        default: r(() => [ w("下载") ]),
                        _: 1
                    }) ]) ]),
                    default: r(() => [ u("div", c, [ l(V, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: r(() => [ l(L, {
                            ref: "tableError",
                            data: o(U),
                            "highlight-current-row": "",
                            "header-cell-style": {
                                background: "#F7F9FC"
                            },
                            stripe: "",
                            border: "",
                            class: "is-selected"
                        }, {
                            default: r(() => [ l(p, {
                                type: "index",
                                width: "55",
                                label: "序号"
                            }), l(p, {
                                prop: "row",
                                label: "错误行号",
                                "min-width": "80"
                            }), l(p, {
                                prop: "errorMsg",
                                label: "错误原因",
                                "min-width": "80",
                                "show-overflow-tooltip": ""
                            }), (d(!0), O(j, null, q(o(N), t => (d(), b(p, {
                                key: t.prop,
                                prop: t.prop,
                                label: t.label,
                                "show-overflow-tooltip": "",
                                "min-width": t.width
                            }, null, 8, [ "prop", "label", "min-width" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }), u("div", _, [ l(T, {
                        limit: o(e).pageSize,
                        "onUpdate:limit": a[0] || (a[0] = t => o(e).pageSize = t),
                        page: o(e).pageNo,
                        "onUpdate:page": a[1] || (a[1] = t => o(e).pageNo = t),
                        total: o(x),
                        onPagination: E
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9ef4b16e" ] ]);
});

export {
    ae as __tla,
    v as default
};