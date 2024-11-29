import {
    r as V,
    a0 as H,
    e as K,
    w as M,
    j as N,
    o as n,
    C as o,
    l as s,
    A as q,
    t as f,
    k as r,
    a as l,
    m as O,
    v as i,
    B as g,
    aI as Q,
    D as p,
    c as T,
    F as W,
    y as X,
    G as Y,
    ai as Z,
    a8 as ee,
    _ as ae,
    J as te,
    R as le,
    S as se,
    __tla as ne
} from "./index-6c08ea4c.js";

import {
    _ as ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

let B, ce = Promise.all([ (() => {
    try {
        return ne;
    } catch {}
})() ]).then(async () => {
    let b, C, x, L, A, j;
    b = {
        class: "selection-button-group"
    }, C = (k => (le("data-v-45d589ff"), k = k(), se(), k))(() => f("div", {
        class: "shadow"
    }, null, -1)), x = {
        class: "selection-container"
    }, L = {
        class: "selection-left"
    }, A = {
        class: "selection-center"
    }, j = {
        class: "selection-bottom"
    }, B = ie({
        __name: "index",
        props: {
            pageList: {
                type: Array,
                required: !0
            },
            selectList: {
                type: Array,
                required: !0
            },
            btnList: {
                type: Array,
                default: () => []
            },
            btnInfoList: {
                type: Array,
                default: () => []
            },
            subject: {
                type: String,
                default: "选项"
            }
        },
        emits: [ "select-all", "read", "delete", "download", "share", "move", "enable", "deactivate", "handleEvent" ],
        setup(k, {
            expose: z,
            emit: D
        }) {
            const w = k, y = V(!1), I = V(!1), h = D, {
                selectList: v,
                subject: F,
                btnList: d,
                btnInfoList: G,
                pageList: J
            } = H(w);
            function P(m = []) {
                let e = m.length;
                for (let _ = 0; _ < e; _++) {
                    const t = m[_];
                    t != null && t.children && Array.isArray(t == null ? void 0 : t.children) && (e += P(t.children));
                }
                return e;
            }
            const S = K(() => P(J.value));
            M(() => w.selectList, () => {
                I.value = v.value.length > 0 && v.value.length < S.value, y.value = v.value.length === S.value;
            }, {
                deep: !0
            });
            const u = m => {
                h(m);
            }, R = () => {
                h("selectAll", y.value);
            }, U = () => {
                h("selectAll", !1);
            };
            return z({
                checkBox: y
            }), (m, e) => {
                const _ = ee, t = ae, c = te, $ = N("hasPermi");
                return n(), o(Z, {
                    name: "el-zoom-in-bottom"
                }, {
                    default: s(() => [ q(f("div", b, [ C, f("div", x, [ f("div", L, [ r(_, {
                        modelValue: l(y),
                        "onUpdate:modelValue": e[0] || (e[0] = a => O(y) ? y.value = a : null),
                        onChange: R,
                        indeterminate: l(I)
                    }, {
                        default: s(() => {
                            var a;
                            return [ i("全选，当前已选中 " + g((a = l(v)) == null ? void 0 : a.length) + " 个" + g(l(F)), 1) ];
                        }),
                        _: 1
                    }, 8, [ "modelValue", "indeterminate" ]) ]), f("div", A, [ Q(m.$slots, "default", {}, void 0, !0), l(d).includes("download") ? (n(), 
                    o(c, {
                        key: 0,
                        type: "primary",
                        onClick: e[1] || (e[1] = a => u("download"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "svg-icon:download",
                            class: "mr-5px"
                        }), i("下载 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("share") ? (n(), o(c, {
                        key: 1,
                        type: "primary",
                        onClick: e[2] || (e[2] = a => u("share"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "svg-icon:share",
                            class: "mr-5px"
                        }), i("公开 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("publish") ? (n(), o(c, {
                        key: 2,
                        type: "primary",
                        onClick: e[3] || (e[3] = a => u("publish"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "svg-icon:project-publish",
                            class: "mr-5px"
                        }), i("发布 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("cancelPublish") ? (n(), o(c, {
                        key: 3,
                        type: "primary",
                        onClick: e[4] || (e[4] = a => u("cancelPublish"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "svg-icon:project-revert",
                            class: "mr-5px"
                        }), i("撤销发布 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("profileSetting") ? (n(), o(c, {
                        key: 4,
                        type: "primary",
                        onClick: e[5] || (e[5] = a => u("profileSetting"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "svg-icon:setting-icon",
                            class: "mr-5px"
                        }), i("资源设置 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("move") ? (n(), o(c, {
                        key: 5,
                        type: "primary",
                        onClick: e[6] || (e[6] = a => u("move"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "svg-icon:move",
                            class: "mr-5px"
                        }), i("移动 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("enable") ? (n(), o(c, {
                        key: 6,
                        type: "primary",
                        onClick: e[7] || (e[7] = a => u("enable"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "ep:video-play",
                            class: "mr-5px"
                        }), i("启用 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("deactivate") ? (n(), o(c, {
                        key: 7,
                        type: "danger",
                        onClick: e[8] || (e[8] = a => u("deactivate"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "ep:video-pause",
                            class: "mr-5px"
                        }), i("停用 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("read") ? (n(), o(c, {
                        key: 8,
                        type: "default",
                        onClick: e[9] || (e[9] = a => u("read"))
                    }, {
                        default: s(() => [ i(" 标记已读 ") ]),
                        _: 1
                    })) : p("", !0), l(d).includes("delete") ? (n(), o(c, {
                        key: 9,
                        type: "danger",
                        onClick: e[10] || (e[10] = a => u("delete"))
                    }, {
                        default: s(() => [ r(t, {
                            icon: "svg-icon:delete",
                            class: "mr-5px"
                        }), i("删除 ") ]),
                        _: 1
                    })) : p("", !0), (n(!0), T(W, null, X(l(G), a => q((n(), o(c, {
                        color: a.color || "",
                        key: a.key,
                        type: a.type,
                        disabled: a.disabled || !1,
                        onClick: oe => {
                            return E = a.key, void h("handleEvent", {
                                key: E
                            });
                            var E;
                        }
                    }, {
                        default: s(() => [ r(t, {
                            icon: a.icon || "svg-icon:" + a.type,
                            class: "mr-5px"
                        }, null, 8, [ "icon" ]), i(g(a.label), 1) ]),
                        _: 2
                    }, 1032, [ "color", "type", "disabled", "onClick" ])), [ [ $, [ a.permi || "" ] ] ])), 128)) ]), f("div", j, [ r(c, {
                        type: "default",
                        onClick: U
                    }, {
                        default: s(() => [ i("取消操作") ]),
                        _: 1
                    }) ]) ]) ], 512), [ [ Y, l(v) && l(v).length > 0 ] ]) ]),
                    _: 3
                });
            };
        }
    }, [ [ "__scopeId", "data-v-45d589ff" ] ]);
});

export {
    B as _,
    ce as __tla
};