import {
    p as Q,
    u as V,
    aa as G,
    r as s,
    U as K,
    e as W,
    f as X,
    j as Z,
    o as m,
    c as aa,
    k as a,
    l as e,
    t as k,
    a as o,
    A as y,
    C as h,
    v as c,
    B as ta,
    F as ea,
    _ as la,
    J as ra,
    ad as oa,
    ak as sa,
    ae as ia,
    a9 as na,
    __tla as _a
} from "./index-6c08ea4c.js";

import {
    _ as ca,
    __tla as pa
} from "./ContentPage-f6bcc98e.js";

import {
    _ as ua,
    __tla as ma
} from "./index-c4ca0ced.js";

import {
    _ as da,
    __tla as fa
} from "./index-8b41572c.js";

import {
    _ as ya,
    __tla as ha
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as va,
    __tla as wa
} from "./index-1024512a.js";

import {
    c as ba,
    D as g,
    b as ka,
    __tla as ga
} from "./dict-c5825220.js";

import {
    d as Ca,
    __tla as Sa
} from "./formatTime-de6f1520.js";

import {
    d as Ta,
    e as xa,
    f as Na,
    __tla as za
} from "./index-c31c99eb.js";

import {
    e as Aa,
    __tla as Ea
} from "./index-5125d270.js";

import Pa, {
    __tla as Ma
} from "./TenantForm-db2fb6e5.js";

import {
    _ as Ia
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ua
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ya
} from "./DeptTag-1be092ce.js";

import {
    __tla as Oa
} from "./index-ef4d146e.js";

import "./constants-528bd83f.js";

import {
    __tla as $a
} from "./index-7c503ef3.js";

let I, ja = Promise.all([ (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return fa;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Ea;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return $a;
    } catch {}
})() ]).then(async () => {
    let C, S, T;
    C = {
        class: "top-box"
    }, S = {
        class: "right btns-box header-btns pt-1"
    }, T = {
        class: "bottom-box"
    }, I = Ia(Object.assign({
        name: "SystemTenant"
    }, {
        __name: "index",
        setup(Da) {
            const d = Q(), x = V(), {
                t: U
            } = G(), v = s(!0), N = s(0), z = s([]), _ = K({
                pageNo: 1,
                pageSize: 20
            });
            s(), s(!1);
            const Y = s([]);
            s([]);
            const A = s({
                name: void 0,
                status: void 0,
                type: void 0
            }), O = W(() => [ {
                label: "租户类型",
                key: "type",
                type: "list",
                options: ba(g.SYSTEM_TENANT_TYPE)
            }, {
                label: "租户状态",
                key: "status",
                type: "list",
                options: ka(g.COMMON_START_STATUS)
            } ]);
            function $(n) {
                A.value = n, E();
            }
            const p = async () => {
                v.value = !0;
                try {
                    const n = await Ta({
                        ..._,
                        ...A.value
                    });
                    z.value = n.list, N.value = n.total;
                } finally {
                    v.value = !1;
                }
            }, E = () => {
                _.pageNo = 1, p();
            }, P = s(), M = (n, i) => {
                P.value.open(n, i);
            };
            return X(async () => {
                await p(), Y.value = await Aa();
            }), (n, i) => {
                const j = va, D = la, u = ra, l = oa, F = ya, L = sa, R = ia, q = da, B = ua, H = ca, w = Z("hasPermi"), J = na;
                return m(), aa(ea, null, [ a(H, {
                    class: "cont-box"
                }, {
                    default: e(() => [ k("div", C, [ a(j, {
                        searchList: o(O),
                        onHandleSearch: $,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "租户名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), k("div", S, [ y((m(), h(u, {
                        size: "large",
                        type: "primary",
                        onClick: i[0] || (i[0] = t => M("create"))
                    }, {
                        default: e(() => [ a(D, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), c(" 添加合作租户 ") ]),
                        _: 1
                    })), [ [ w, [ "system:tenant:create" ] ] ]) ]) ]), a(q, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: e(() => [ y((m(), h(R, {
                            data: o(z),
                            height: "calc(100%)"
                        }, {
                            default: e(() => [ a(l, {
                                label: "序号",
                                type: "index",
                                width: "60",
                                fixed: "left"
                            }), a(l, {
                                label: "租户名称",
                                prop: "name",
                                fixed: "left",
                                "show-overflow-tooltip": ""
                            }), a(l, {
                                label: "租户代码",
                                prop: "code",
                                "show-overflow-tooltip": ""
                            }), a(l, {
                                label: "租户类型",
                                prop: "type"
                            }, {
                                default: e(t => [ a(F, {
                                    type: o(g).SYSTEM_TENANT_TYPE,
                                    value: t.row.type
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), a(l, {
                                label: "选购套餐（代码）",
                                prop: "packageCode",
                                "min-width": "160",
                                "show-overflow-tooltip": ""
                            }), a(l, {
                                label: "用户限制",
                                prop: "accountCount"
                            }, {
                                default: e(t => [ c(ta(t.row.accountCount || "不限制"), 1) ]),
                                _: 1
                            }), a(l, {
                                label: "备注",
                                prop: "remark",
                                "min-width": "120",
                                "show-overflow-tooltip": ""
                            }), a(l, {
                                label: "租户状态",
                                prop: "status"
                            }, {
                                default: e(t => [ a(L, {
                                    size: "small",
                                    "model-value": t.row.status,
                                    "active-value": 0,
                                    "inactive-value": 1,
                                    onClick: f => function(r) {
                                        let b = r.status + "" == "0" ? "停用" : "启用";
                                        d.confirm(`\u786E\u8BA4\u8981${b}\u201C${r.name}\u201D\u5417\uFF1F`).then(() => {
                                            Na({
                                                id: r.id,
                                                status: r.status + "" == "0" ? 1 : 0
                                            }).then(Fa => {
                                                d.success("操作成功"), p();
                                            });
                                        });
                                    }(t.row)
                                }, null, 8, [ "model-value", "onClick" ]) ]),
                                _: 1
                            }), a(l, {
                                label: "添加人",
                                prop: "creator",
                                "min-width": "100"
                            }), a(l, {
                                label: "添加时间",
                                prop: "createTime",
                                width: "180",
                                formatter: o(Ca)
                            }, null, 8, [ "formatter" ]), a(l, {
                                label: "操作",
                                "min-width": "240",
                                fixed: "right"
                            }, {
                                default: e(t => [ y((m(), h(u, {
                                    link: "",
                                    type: "primary",
                                    onClick: f => M("update", t.row.id)
                                }, {
                                    default: e(() => [ c(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ w, [ "system:tenant:update" ] ] ]), a(u, {
                                    link: "",
                                    type: "primary",
                                    onClick: f => {
                                        return r = t.row.id, void x.push({
                                            name: "DatabaseConfig",
                                            params: {
                                                id: r
                                            }
                                        });
                                        var r;
                                    }
                                }, {
                                    default: e(() => [ c(" 配置 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), a(u, {
                                    link: "",
                                    type: "primary",
                                    onClick: f => (({
                                        id: r,
                                        code: b
                                    }) => {
                                        x.push({
                                            path: "/tenant/resourceAuthorize",
                                            query: {
                                                id: r,
                                                code: b
                                            }
                                        });
                                    })(t.row)
                                }, {
                                    default: e(() => [ c(" 资源授权 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), y((m(), h(u, {
                                    link: "",
                                    type: "danger",
                                    onClick: f => (async r => {
                                        try {
                                            await d.delConfirm(), await xa(r), d.success(U("common.delSuccess")), 
                                            await p();
                                        } catch {}
                                    })(t.row.id)
                                }, {
                                    default: e(() => [ c(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ w, [ "system:tenant:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ J, o(v) ] ]) ]),
                        _: 1
                    }), k("div", T, [ a(B, {
                        limit: o(_).pageSize,
                        "onUpdate:limit": i[1] || (i[1] = t => o(_).pageSize = t),
                        page: o(_).pageNo,
                        "onUpdate:page": i[2] || (i[2] = t => o(_).pageNo = t),
                        total: o(N),
                        onPagination: p
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), a(Pa, {
                    ref_key: "formRef",
                    ref: P,
                    onSuccess: E
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-0c1d4350" ] ]);
});

export {
    ja as __tla,
    I as default
};