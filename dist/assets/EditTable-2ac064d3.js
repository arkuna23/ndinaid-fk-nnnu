import {
    d as x,
    u as A,
    T as J,
    af as Q,
    r as _,
    f as S,
    A as U,
    a,
    o as j,
    C as z,
    l,
    k as t,
    m as B,
    v as d,
    aa as F,
    p as G,
    M,
    s as O,
    J as P,
    O as W,
    Q as D,
    a9 as H,
    __tla as K
} from "./index-6c08ea4c.js";

import {
    _ as L,
    __tla as N
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as X,
    __tla as Y
} from "./BasicInfoForm.vue_vue_type_script_setup_true_lang-bc034190.js";

import {
    _ as Z,
    __tla as $
} from "./ColumInfoForm.vue_vue_type_script_setup_true_lang-f85861a3.js";

import {
    _ as aa,
    __tla as ta
} from "./GenerateInfoForm.vue_vue_type_script_setup_true_lang-cafa02dd.js";

import {
    g as la,
    u as ea,
    __tla as ra
} from "./index-7fb09ff8.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as _a
} from "./formRules-e114368a.js";

import {
    __tla as sa
} from "./dict.type-16d98778.js";

import {
    __tla as oa
} from "./dict-c5825220.js";

import "./tree-05ea8e09.js";

import {
    __tla as na
} from "./index-70ef8e51.js";

import {
    __tla as ua
} from "./index-ef4d146e.js";

import {
    __tla as ca
} from "./index-5adb716b.js";

let y, ma = Promise.all([ (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return sa;
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
        return ua;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})() ]).then(async () => {
    y = x({
        name: "InfraCodegenEditTable",
        __name: "EditTable",
        setup(fa) {
            const {
                t: p
            } = F(), h = G(), {
                push: b,
                currentRoute: g
            } = A(), {
                query: v
            } = J(), {
                delView: k
            } = Q(), o = _(!1), n = _("colum"), c = _(), I = _(), m = _(), e = _({
                table: {},
                columns: []
            }), w = async () => {
                var r, s;
                if (a(e)) {
                    await ((r = a(c)) == null ? void 0 : r.validate()), await ((s = a(m)) == null ? void 0 : s.validate());
                    try {
                        await ea(e.value), h.success(p("common.updateSuccess")), 
                        f();
                    } catch {}
                }
            }, f = () => {
                k(a(g)), b("/infra/codegen");
            };
            return S(() => {
                (async () => {
                    const r = v.id;
                    if (r) {
                        o.value = !0;
                        try {
                            e.value = await la(r);
                        } finally {
                            o.value = !1;
                        }
                    }
                })();
            }), (r, s) => {
                const u = M, R = O, i = P, V = W, C = D, T = L, E = H;
                return U((j(), z(T, null, {
                    default: l(() => [ t(R, {
                        modelValue: a(n),
                        "onUpdate:modelValue": s[0] || (s[0] = q => B(n) ? n.value = q : null)
                    }, {
                        default: l(() => [ t(u, {
                            label: "基本信息",
                            name: "basicInfo"
                        }, {
                            default: l(() => [ t(a(X), {
                                ref_key: "basicInfoRef",
                                ref: c,
                                table: a(e).table
                            }, null, 8, [ "table" ]) ]),
                            _: 1
                        }), t(u, {
                            label: "字段信息",
                            name: "colum"
                        }, {
                            default: l(() => [ t(a(Z), {
                                ref_key: "columInfoRef",
                                ref: I,
                                columns: a(e).columns
                            }, null, 8, [ "columns" ]) ]),
                            _: 1
                        }), t(u, {
                            label: "生成信息",
                            name: "generateInfo"
                        }, {
                            default: l(() => [ t(a(aa), {
                                ref_key: "generateInfoRef",
                                ref: m,
                                table: a(e).table,
                                columns: a(e).columns
                            }, null, 8, [ "table", "columns" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]), t(C, null, {
                        default: l(() => [ t(V, {
                            style: {
                                float: "right"
                            }
                        }, {
                            default: l(() => [ t(i, {
                                loading: a(o),
                                type: "primary",
                                onClick: w
                            }, {
                                default: l(() => [ d("保存") ]),
                                _: 1
                            }, 8, [ "loading" ]), t(i, {
                                onClick: f
                            }, {
                                default: l(() => [ d("返回") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                })), [ [ E, a(o) ] ]);
            };
        }
    });
});

export {
    ma as __tla,
    y as default
};