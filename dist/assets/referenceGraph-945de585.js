import {
    a0 as U,
    r as _,
    U as V,
    e as f,
    f as L,
    o as T,
    C as j,
    l,
    t as w,
    k as e,
    v as b,
    a as i,
    m as A,
    ad as G,
    ae as I,
    J,
    aU as O,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    _ as q,
    __tla as B
} from "./index-8b41572c.js";

import {
    _ as D
} from "./_plugin-vue_export-helper-1b428a4d.js";

let g, H = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})() ]).then(async () => {
    let d, c;
    d = {
        class: "info-container"
    }, c = {
        class: "dialog-footer"
    }, g = D({
        __name: "referenceGraph",
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
        setup(v, {
            expose: y,
            emit: C
        }) {
            const u = v, k = C, {
                tableList: n
            } = U(u), o = _(!1), t = V({
                pageNo: 1,
                pageSize: 10
            });
            f(() => n.value.length), f(() => {
                const r = (t.pageNo - 1) * t.pageSize, s = r + t.pageSize;
                return n.value.slice(r, s);
            });
            const p = () => {
                o.value = !1, t.pageNum = 1, t.pageSize = 10;
            }, S = () => {
                k("downloadError", {
                    source: u.sourceType.value
                });
            }, h = _([]), z = r => {
                h.value = r;
            };
            return L(() => {}), y({
                handleOpen: () => {
                    o.value = !0;
                },
                handleClose: p
            }), (r, s) => {
                const a = G, x = I, E = q, m = J, F = O;
                return T(), j(F, {
                    modelValue: i(o),
                    "onUpdate:modelValue": s[0] || (s[0] = N => A(o) ? o.value = N : null),
                    "close-on-click-modal": !1,
                    title: "引用知识图谱",
                    width: "1200px",
                    onClose: p
                }, {
                    footer: l(() => [ w("span", c, [ e(m, {
                        onClick: p
                    }, {
                        default: l(() => [ b("取消") ]),
                        _: 1
                    }), e(m, {
                        disabled: i(h).length < 1,
                        type: "primary",
                        onClick: S
                    }, {
                        default: l(() => [ b("确定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]) ]),
                    default: l(() => [ w("div", d, [ e(E, {
                        class: "center-box",
                        "no-pager": !0
                    }, {
                        default: l(() => [ e(x, {
                            ref: "tableError",
                            data: i(n),
                            "highlight-current-row": "",
                            "header-cell-style": {
                                background: "#F7F9FC"
                            },
                            class: "is-selected",
                            "row-key": "id",
                            onSelectionChange: z
                        }, {
                            default: l(() => [ e(a, {
                                type: "selection",
                                width: "55"
                            }), e(a, {
                                prop: "date",
                                label: "知识图谱",
                                "min-width": "80",
                                "show-overflow-tooltip": ""
                            }), e(a, {
                                prop: "name",
                                label: "掌握度要求",
                                "min-width": "80",
                                "show-overflow-tooltip": ""
                            }), e(a, {
                                prop: "name",
                                label: "知识技能点属性",
                                "min-width": "80",
                                "show-overflow-tooltip": ""
                            }), e(a, {
                                prop: "name",
                                label: "难易程度",
                                width: "82",
                                "show-overflow-tooltip": ""
                            }), e(a, {
                                prop: "name",
                                label: "关联前修知识技能点",
                                "show-overflow-tooltip": ""
                            }), e(a, {
                                prop: "name",
                                label: "关联知识技能点数",
                                width: "140"
                            }), e(a, {
                                prop: "name",
                                label: "关联教学目标数",
                                width: "130"
                            }) ]),
                            _: 1
                        }, 8, [ "data" ]) ]),
                        _: 1
                    }) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-6a8b63a1" ] ]);
});

export {
    H as __tla,
    g as default
};