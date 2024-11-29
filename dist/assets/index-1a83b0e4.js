import {
    p as O,
    aa as q,
    r as n,
    U as B,
    e as G,
    f as K,
    j as Q,
    o as i,
    c as V,
    k as a,
    l as r,
    t as u,
    a as t,
    v as d,
    A as y,
    C as f,
    F as W,
    _ as X,
    J as Z,
    ad as $,
    ae as aa,
    a9 as ta,
    __tla as ea
} from "./index-6c08ea4c.js";

import {
    _ as la,
    __tla as ra
} from "./ContentPage-f6bcc98e.js";

import {
    _ as oa,
    __tla as sa
} from "./index-c4ca0ced.js";

import {
    _ as _a,
    __tla as na
} from "./index-8b41572c.js";

import {
    _ as ca,
    __tla as ia
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as pa,
    __tla as ma
} from "./index-1024512a.js";

import {
    b as ua,
    D as E,
    __tla as da
} from "./dict-c5825220.js";

import {
    d as ya,
    __tla as fa
} from "./formatTime-de6f1520.js";

import {
    a as ha,
    d as ga,
    __tla as ba
} from "./index-7c503ef3.js";

import va, {
    __tla as wa
} from "./TenantInfoForm-7e1963fe.js";

import {
    _ as ka
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Sa
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as xa
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ta
} from "./index-ef4d146e.js";

import "./constants-528bd83f.js";

let Y, Ca = Promise.all([ (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})() ]).then(async () => {
    let h, g, b;
    h = {
        class: "top-box"
    }, g = {
        class: "right btns-box header-btns pt-1"
    }, b = {
        class: "bottom-box"
    }, Y = ka(Object.assign({
        name: "SettingTenant"
    }, {
        __name: "index",
        setup(Na) {
            const v = O(), {
                t: z
            } = q(), p = n(!0), w = n(0), k = n([]), _ = B({
                pageNo: 1,
                pageSize: 20
            });
            n();
            const S = n({
                name: void 0,
                status: void 0
            }), P = G(() => [ {
                label: "租户类型",
                key: "type",
                type: "list",
                options: ua(E.SYSTEM_TENANT_TYPE)
            } ]);
            function U(o) {
                S.value = o, x();
            }
            const c = async () => {
                p.value = !0;
                try {
                    const o = await ha({
                        ..._,
                        ...S.value
                    });
                    k.value = o.list, w.value = o.total;
                } finally {
                    p.value = !1;
                }
            }, x = () => {
                _.pageNo = 1, c();
            }, T = n(), C = (o, l) => {
                T.value.open(o, l);
            };
            return K(() => {
                c();
            }), (o, l) => {
                const A = pa, j = X, m = Z, s = $, I = ca, L = aa, M = _a, R = oa, D = la, N = Q("hasPermi"), F = ta;
                return i(), V(W, null, [ a(D, {
                    class: "cont-box"
                }, {
                    default: r(() => [ u("div", h, [ a(A, {
                        searchList: t(P),
                        onHandleSearch: U,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "租户名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), u("div", g, [ a(m, {
                        type: "primary",
                        size: "large",
                        onClick: l[0] || (l[0] = e => C("create"))
                    }, {
                        default: r(() => [ a(j, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), d(" 新增 ") ]),
                        _: 1
                    }) ]) ]), a(M, {
                        class: "center-box"
                    }, {
                        default: r(() => [ y((i(), f(L, {
                            data: t(k),
                            height: "calc(100%)"
                        }, {
                            default: r(() => [ a(s, {
                                label: "序号",
                                type: "index",
                                width: "60px",
                                align: "center"
                            }), a(s, {
                                label: "租户名称",
                                prop: "name",
                                "show-overflow-tooltip": ""
                            }), a(s, {
                                label: "租户代码",
                                prop: "code",
                                "show-overflow-tooltip": ""
                            }), a(s, {
                                label: "租户类型",
                                prop: "type",
                                width: "100"
                            }, {
                                default: r(e => [ a(I, {
                                    type: t(E).SYSTEM_TENANT_TYPE,
                                    value: e.row.type
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), a(s, {
                                label: "创建人",
                                prop: "creator"
                            }), a(s, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                formatter: t(ya)
                            }, null, 8, [ "formatter" ]), a(s, {
                                label: "操作",
                                width: "120"
                            }, {
                                default: r(e => [ y((i(), f(m, {
                                    link: "",
                                    type: "primary",
                                    onClick: H => C("update", e.row.id)
                                }, {
                                    default: r(() => [ d(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ N, [ "system:tenant-package:update" ] ] ]), y((i(), 
                                f(m, {
                                    link: "",
                                    type: "danger",
                                    onClick: H => (async J => {
                                        try {
                                            await v.delConfirm(), await ga(J), v.success(z("common.delSuccess")), 
                                            await c();
                                        } catch {}
                                    })(e.row.id)
                                }, {
                                    default: r(() => [ d(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ N, [ "system:tenant-package:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ F, t(p) ] ]) ]),
                        _: 1
                    }), u("div", b, [ a(R, {
                        limit: t(_).pageSize,
                        "onUpdate:limit": l[1] || (l[1] = e => t(_).pageSize = e),
                        page: t(_).pageNo,
                        "onUpdate:page": l[2] || (l[2] = e => t(_).pageNo = e),
                        total: t(w),
                        onPagination: c
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), a(va, {
                    ref_key: "formRef",
                    ref: T,
                    onSuccess: x
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-4a4e2806" ] ]);
});

export {
    Ca as __tla,
    Y as default
};