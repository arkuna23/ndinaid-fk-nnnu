import {
    d as J,
    p as W,
    aa as q,
    r as n,
    U as B,
    e as G,
    f as K,
    j as Q,
    o as _,
    c as V,
    k as a,
    l,
    t as b,
    a as o,
    A as m,
    C as u,
    v as h,
    F as X,
    _ as Y,
    J as Z,
    ad as aa,
    ak as ta,
    ae as ea,
    a9 as la,
    __tla as oa
} from "./index-6c08ea4c.js";

import {
    _ as ra,
    __tla as sa
} from "./ContentPage-f6bcc98e.js";

import {
    _ as ca,
    __tla as ia
} from "./index-c4ca0ced.js";

import {
    _ as na,
    __tla as _a
} from "./index-8b41572c.js";

import {
    _ as pa,
    __tla as ma
} from "./index-1024512a.js";

import {
    b as ua,
    D as da,
    __tla as fa
} from "./dict-c5825220.js";

import {
    d as ya,
    __tla as ha
} from "./formatTime-de6f1520.js";

import {
    a as ka,
    d as va,
    b as wa,
    __tla as ba
} from "./index-5125d270.js";

import ga, {
    __tla as Ca
} from "./TenantPackageForm-3e57873a.js";

import {
    _ as xa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Sa
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as za
} from "./DeptTag-1be092ce.js";

import {
    __tla as Na
} from "./index-ef4d146e.js";

import "./constants-528bd83f.js";

import {
    __tla as Ta
} from "./index-70ef8e51.js";

let P, Aa = Promise.all([ (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return _a;
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
        return ba;
    } catch {}
})(), (() => {
    try {
        return Ca;
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
        return Na;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})() ]).then(async () => {
    let g, C, x;
    g = {
        class: "top-box"
    }, C = {
        class: "right btns-box header-btns pt-1"
    }, x = {
        class: "bottom-box"
    }, P = xa(J({
        name: "SystemTenantPackage",
        __name: "index",
        setup(Pa) {
            const d = W(), {
                t: U
            } = q(), k = n(!0), S = n(0), z = n([]), c = B({
                pageNo: 1,
                pageSize: 20
            });
            n();
            const N = n({
                name: void 0,
                status: void 0
            }), M = G(() => [ {
                label: "套餐状态",
                key: "status",
                type: "list",
                options: ua(da.COMMON_START_STATUS)
            } ]);
            function I(s) {
                N.value = s, T();
            }
            const p = async () => {
                k.value = !0;
                try {
                    const s = await ka({
                        ...c,
                        ...N.value
                    });
                    z.value = s.list, S.value = s.total;
                } finally {
                    k.value = !1;
                }
            }, T = () => {
                c.pageNo = 1, p();
            }, A = n(), v = (s, r) => {
                A.value.open(s, r);
            };
            return K(() => {
                p();
            }), (s, r) => {
                const L = pa, O = Y, f = Z, e = aa, R = ta, $ = ea, j = na, D = ca, E = ra, y = Q("hasPermi"), F = la;
                return _(), V(X, null, [ a(E, {
                    class: "cont-box"
                }, {
                    default: l(() => [ b("div", g, [ a(L, {
                        searchList: o(M),
                        onHandleSearch: I,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "套餐名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), b("div", C, [ m((_(), u(f, {
                        type: "primary",
                        size: "large",
                        onClick: r[0] || (r[0] = t => v("create"))
                    }, {
                        default: l(() => [ a(O, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), h(" 新增 ") ]),
                        _: 1
                    })), [ [ y, [ "system:tenant-package:create" ] ] ]) ]) ]), a(j, {
                        class: "center-box"
                    }, {
                        default: l(() => [ m((_(), u($, {
                            data: o(z),
                            height: "calc(100%)"
                        }, {
                            default: l(() => [ a(e, {
                                label: "序号",
                                type: "index",
                                width: "60px"
                            }), a(e, {
                                label: "套餐名称",
                                prop: "name",
                                "show-overflow-tooltip": ""
                            }), a(e, {
                                label: "套餐代码",
                                prop: "code",
                                "show-overflow-tooltip": ""
                            }), a(e, {
                                label: "备注",
                                prop: "remark",
                                "show-overflow-tooltip": ""
                            }), a(e, {
                                label: "授权租户数",
                                prop: "tenantAuthorizeCount",
                                width: "100"
                            }), a(e, {
                                label: "套餐状态",
                                prop: "status",
                                width: "100"
                            }, {
                                default: l(t => [ a(R, {
                                    size: "small",
                                    "model-value": t.row.status,
                                    "active-value": 0,
                                    "inactive-value": 1,
                                    "active-color": "#13ce66",
                                    onClick: w => function(i) {
                                        let H = i.status + "" == "0" ? "停用" : "启用";
                                        d.confirm(`\u786E\u8BA4\u8981${H}\u201C${i.name}\u201D\u5417\uFF1F`).then(() => {
                                            wa({
                                                id: i.id,
                                                status: i.status + "" == "0" ? 1 : 0
                                            }).then(Ua => {
                                                d.success("操作成功"), p();
                                            });
                                        });
                                    }(t.row)
                                }, null, 8, [ "model-value", "onClick" ]) ]),
                                _: 1
                            }), a(e, {
                                label: "创建人",
                                prop: "creator",
                                "show-overflow-tooltip": ""
                            }), a(e, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                formatter: o(ya)
                            }, null, 8, [ "formatter" ]), a(e, {
                                label: "操作",
                                width: "180"
                            }, {
                                default: l(t => [ m((_(), u(f, {
                                    link: "",
                                    type: "primary",
                                    onClick: w => v("update", t.row.id)
                                }, {
                                    default: l(() => [ h(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ y, [ "system:tenant-package:update" ] ] ]), m((_(), 
                                u(f, {
                                    link: "",
                                    type: "primary",
                                    onClick: w => v("copy", t.row.id)
                                }, {
                                    default: l(() => [ h(" 复制 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ y, [ "system:tenant-package:copy" ] ] ]), m((_(), 
                                u(f, {
                                    link: "",
                                    type: "danger",
                                    onClick: w => (async i => {
                                        try {
                                            await d.delConfirm(), await va(i), d.success(U("common.delSuccess")), 
                                            await p();
                                        } catch {}
                                    })(t.row.id)
                                }, {
                                    default: l(() => [ h(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ y, [ "system:tenant-package:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ F, o(k) ] ]) ]),
                        _: 1
                    }), b("div", x, [ a(D, {
                        limit: o(c).pageSize,
                        "onUpdate:limit": r[1] || (r[1] = t => o(c).pageSize = t),
                        page: o(c).pageNo,
                        "onUpdate:page": r[2] || (r[2] = t => o(c).pageNo = t),
                        total: o(S),
                        onPagination: p
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), a(ga, {
                    ref_key: "formRef",
                    ref: A,
                    onSuccess: T
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-a719318a" ] ]);
});

export {
    Aa as __tla,
    P as default
};