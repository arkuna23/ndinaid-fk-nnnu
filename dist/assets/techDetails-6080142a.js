import {
    r as N,
    U as J,
    j as K,
    o as d,
    c as p,
    k as t,
    l as e,
    v as U,
    a as l,
    A as r,
    t as m,
    B as u,
    m as P,
    K as Q,
    O as q,
    Q as z,
    J as E,
    aU as F,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    g as H,
    __tla as L
} from "./techDirectionManage-e96d2dc4.js";

import {
    _ as M
} from "./_plugin-vue_export-helper-1b428a4d.js";

let V, R = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})() ]).then(async () => {
    let h, y, f, b, k, w, v;
    h = {
        class: ""
    }, y = {
        style: {
            display: "inline-block",
            width: "100%"
        }
    }, f = {
        class: "neu-ellipse",
        style: {
            display: "inline-block",
            width: "100%"
        }
    }, b = {
        style: {
            display: "inline-block",
            width: "100%"
        }
    }, k = {
        class: "neu-ellipse",
        style: {
            display: "inline-block",
            width: "100%"
        }
    }, w = {
        style: {
            display: "inline-block",
            width: "100%"
        }
    }, v = {
        class: "neu-ellipse",
        style: {
            display: "inline-block",
            width: "100%"
        }
    }, V = M({
        __name: "techDetails",
        setup(S, {
            expose: g
        }) {
            const j = N("查看技术方向"), n = N(!1), C = () => {
                n.value = !1;
            }, a = J({
                techName: "",
                techCode: "",
                type: "",
                remark: ""
            }), x = async i => {
                const o = await H({
                    techId: i
                });
                if (o) {
                    const c = o;
                    Object.keys(a).map(s => a[s] = c[s]);
                }
            }, A = {
                1: "前端工程",
                2: "后端工程",
                3: "前端工程、后端工程",
                4: "微服务"
            };
            return g({
                openDialog: i => {
                    n.value = !0, x(i);
                }
            }), (i, o) => {
                const c = Q, s = q, D = z, I = E, O = F, _ = K("show-tip");
                return d(), p("div", h, [ t(O, {
                    modelValue: l(n),
                    "onUpdate:modelValue": o[0] || (o[0] = B => P(n) ? n.value = B : null),
                    width: "500",
                    title: l(j),
                    onClose: C
                }, {
                    footer: e(() => [ t(I, {
                        type: "default",
                        onClick: C
                    }, {
                        default: e(() => [ U("关闭") ]),
                        _: 1
                    }) ]),
                    default: e(() => [ t(D, {
                        "label-width": "160",
                        model: l(a)
                    }, {
                        default: e(() => [ t(s, {
                            label: "技术方向名称："
                        }, {
                            default: e(() => [ r((d(), p("span", y, [ t(c, {
                                content: l(a).techName,
                                placement: "top"
                            }, {
                                default: e(() => [ m("span", f, u(l(a).techName), 1) ]),
                                _: 1
                            }, 8, [ "content" ]) ])), [ [ _ ] ]) ]),
                            _: 1
                        }), t(s, {
                            label: "代码："
                        }, {
                            default: e(() => [ r((d(), p("span", b, [ t(c, {
                                content: l(a).techCode,
                                placement: "top"
                            }, {
                                default: e(() => [ m("span", k, u(l(a).techCode), 1) ]),
                                _: 1
                            }, 8, [ "content" ]) ])), [ [ _ ] ]) ]),
                            _: 1
                        }), t(s, {
                            label: "工程类型："
                        }, {
                            default: e(() => [ U(u(A[l(a).type]), 1) ]),
                            _: 1
                        }), t(s, {
                            label: "备注："
                        }, {
                            default: e(() => [ r((d(), p("span", w, [ t(c, {
                                content: l(a).remark,
                                placement: "top"
                            }, {
                                default: e(() => [ m("span", v, u(l(a).remark), 1) ]),
                                _: 1
                            }, 8, [ "content" ]) ])), [ [ _ ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-aa6f8cab" ] ]);
});

export {
    R as __tla,
    V as default
};