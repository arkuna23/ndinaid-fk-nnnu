import {
    r as f,
    T as j,
    a0 as B,
    u as J,
    e as h,
    a,
    o as K,
    C as Q,
    l as e,
    k as t,
    v as R,
    t as i,
    B as p,
    m as T,
    _ as q,
    K as z,
    O as A,
    Q as D,
    J as E,
    aU as F,
    __tla as G
} from "./index-6c08ea4c.js";

import {
    o as H,
    __tla as L
} from "./project-enjineering-046a4b77.js";

import {
    c as u,
    __tla as M
} from "./copy-a238bc51.js";

import {
    __tla as N
} from "./clipboard-0a12866f.js";

let x, W = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    x = {
        __name: "database-info",
        props: {
            projectId: {
                type: String,
                default: ""
            }
        },
        emits: [ "increment" ],
        setup(v, {
            expose: U,
            emit: y
        }) {
            const S = y, d = f(!1), c = f({});
            j();
            const P = v, {
                projectId: g
            } = B(P), C = () => {
                S("increment");
            }, k = J(), _ = h(() => a(k.currentRoute)), m = h(() => a(_).path.indexOf("/neu/") >= 0 || a(_).path.indexOf("/private/") >= 0), O = async () => {
                const b = m != null && m.value ? "1" : "2";
                H(g.value, "6", b).then(l => {
                    c.value = l;
                });
            };
            return U({
                openDialog: () => {
                    O(), d.value = !0;
                }
            }), (b, l) => {
                const n = q, s = z, r = A, V = D, w = E, I = F;
                return K(), Q(I, {
                    title: "数据库信息",
                    modelValue: a(d),
                    "onUpdate:modelValue": l[6] || (l[6] = o => T(d) ? d.value = o : null),
                    width: "700px",
                    onClose: C
                }, {
                    footer: e(() => [ t(w, {
                        type: "default",
                        onClick: l[5] || (l[5] = o => d.value = !1)
                    }, {
                        default: e(() => [ R("关闭") ]),
                        _: 1
                    }) ]),
                    default: e(() => [ t(V, {
                        "label-width": "140px"
                    }, {
                        default: e(() => [ t(r, {
                            label: "数据库地址："
                        }, {
                            default: e(() => [ i("span", null, p(a(c).dbUrl), 1), t(s, {
                                content: "复制",
                                placement: "top"
                            }, {
                                default: e(() => [ t(n, {
                                    icon: "svg-icon:icon-copy",
                                    class: "ml-2",
                                    id: "dbUrl",
                                    "data-clipboard-text": a(c).dbUrl,
                                    onClick: l[0] || (l[0] = o => a(u)({
                                        id: "dbUrl"
                                    }))
                                }, null, 8, [ "data-clipboard-text" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), t(r, {
                            label: "数据库端口："
                        }, {
                            default: e(() => [ i("span", null, p(a(c).dbPort), 1), t(s, {
                                content: "复制",
                                placement: "top"
                            }, {
                                default: e(() => [ t(n, {
                                    icon: "svg-icon:icon-copy",
                                    class: "ml-2",
                                    id: "dbPort",
                                    "data-clipboard-text": a(c).dbPort,
                                    onClick: l[1] || (l[1] = o => a(u)({
                                        id: "dbPort"
                                    }))
                                }, null, 8, [ "data-clipboard-text" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), t(r, {
                            label: "数据库名称："
                        }, {
                            default: e(() => [ i("span", null, p(a(c).dbSchema), 1), t(s, {
                                content: "复制",
                                placement: "top"
                            }, {
                                default: e(() => [ t(n, {
                                    icon: "svg-icon:icon-copy",
                                    class: "ml-2",
                                    id: "dbSchema",
                                    "data-clipboard-text": a(c).dbSchema,
                                    onClick: l[2] || (l[2] = o => a(u)({
                                        id: "dbSchema"
                                    }))
                                }, null, 8, [ "data-clipboard-text" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), t(r, {
                            label: "数据库用户名："
                        }, {
                            default: e(() => [ i("span", null, p(a(c).dbSchemaUser), 1), t(s, {
                                content: "复制",
                                placement: "top"
                            }, {
                                default: e(() => [ t(n, {
                                    icon: "svg-icon:icon-copy",
                                    class: "ml-2",
                                    id: "dbSchemaUser",
                                    "data-clipboard-text": a(c).dbSchemaUser,
                                    onClick: l[3] || (l[3] = o => a(u)({
                                        id: "dbSchemaUser"
                                    }))
                                }, null, 8, [ "data-clipboard-text" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), t(r, {
                            label: "数据库密码："
                        }, {
                            default: e(() => [ i("span", null, p(a(c).dbSchemaUserPd), 1), t(s, {
                                content: "复制",
                                placement: "top"
                            }, {
                                default: e(() => [ t(n, {
                                    icon: "svg-icon:icon-copy",
                                    class: "ml-2",
                                    id: "dbSchemaUserPd",
                                    "data-clipboard-text": a(c).dbSchemaUserPd,
                                    onClick: l[4] || (l[4] = o => a(u)({
                                        id: "dbSchemaUserPd"
                                    }))
                                }, null, 8, [ "data-clipboard-text" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    };
});

export {
    W as __tla,
    x as default
};