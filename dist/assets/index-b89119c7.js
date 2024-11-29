import {
    p as H,
    aa as W,
    r as c,
    U as q,
    e as B,
    f as G,
    j as K,
    o as u,
    c as Q,
    k as a,
    l,
    t as f,
    a as e,
    v as y,
    A as h,
    C as v,
    F as X,
    _ as Z,
    J as aa,
    ad as ta,
    ak as ea,
    ae as la,
    a9 as sa,
    __tla as ra
} from "./index-6c08ea4c.js";

import {
    _ as oa,
    __tla as _a
} from "./ContentPage-f6bcc98e.js";

import {
    _ as ia,
    __tla as ca
} from "./index-c4ca0ced.js";

import {
    _ as na,
    __tla as pa
} from "./index-8b41572c.js";

import {
    _ as ua,
    __tla as ma
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as da,
    __tla as fa
} from "./index-1024512a.js";

import {
    c as ya,
    D as b,
    b as ha,
    __tla as va
} from "./dict-c5825220.js";

import {
    d as ba,
    __tla as wa
} from "./formatTime-de6f1520.js";

import {
    a as ga,
    d as ka,
    b as Sa,
    __tla as xa
} from "./index-d195df69.js";

import Ca, {
    __tla as Ta
} from "./MajorForm-9c12544c.js";

import {
    _ as Ea
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as za
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as Aa
} from "./DeptTag-1be092ce.js";

import {
    __tla as La
} from "./index-ef4d146e.js";

import "./constants-528bd83f.js";

let M, Ma = Promise.all([ (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ca;
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
        return va;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})() ]).then(async () => {
    let w, g, k;
    w = {
        class: "top-box"
    }, g = {
        class: "right btns-box header-btns pt-1"
    }, k = {
        class: "bottom-box"
    }, M = Ea(Object.assign({
        name: "SettingTenant"
    }, {
        __name: "index",
        setup(Ja) {
            const p = H(), {
                t: J
            } = W(), m = c(!0), S = c(0), x = c([]), _ = q({
                pageNo: 1,
                pageSize: 20
            });
            c();
            const C = c({
                name: void 0,
                status: void 0
            }), N = B(() => [ {
                label: "专业层次",
                key: "level",
                type: "list",
                options: ya(b.SYSTEM_MAJOR_LEVEL)
            }, {
                label: "专业状态",
                key: "status",
                type: "list",
                options: ha(b.COMMON_START_STATUS)
            } ]);
            function O(o) {
                C.value = o, T();
            }
            const n = async () => {
                m.value = !0;
                try {
                    const o = await ga({
                        ..._,
                        ...C.value
                    });
                    x.value = o.list, S.value = o.total;
                } finally {
                    m.value = !1;
                }
            }, T = () => {
                _.pageNo = 1, n();
            }, E = c(), z = (o, s) => {
                E.value.open(o, s);
            };
            return G(() => {
                n();
            }), (o, s) => {
                const P = da, R = Z, d = aa, r = ta, U = ua, j = ea, I = la, V = na, Y = ia, $ = oa, A = K("hasPermi"), D = sa;
                return u(), Q(X, null, [ a($, {
                    class: "cont-box"
                }, {
                    default: l(() => [ f("div", w, [ a(P, {
                        searchList: e(N),
                        onHandleSearch: O,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "专业名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), f("div", g, [ a(d, {
                        type: "primary",
                        size: "large",
                        onClick: s[0] || (s[0] = t => z("create"))
                    }, {
                        default: l(() => [ a(R, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), y(" 新增 ") ]),
                        _: 1
                    }) ]) ]), a(V, {
                        class: "center-box"
                    }, {
                        default: l(() => [ h((u(), v(I, {
                            data: e(x),
                            height: "calc(100%)"
                        }, {
                            default: l(() => [ a(r, {
                                label: "序号",
                                type: "index",
                                width: "60px"
                            }), a(r, {
                                label: "专业名称",
                                prop: "name",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "专业代码",
                                prop: "code",
                                "show-overflow-tooltip": ""
                            }), a(r, {
                                label: "专业层次",
                                prop: "level",
                                width: "120"
                            }, {
                                default: l(t => [ a(U, {
                                    type: e(b).SYSTEM_MAJOR_LEVEL,
                                    value: t.row.level
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), a(r, {
                                label: "状态",
                                prop: "status",
                                width: "100"
                            }, {
                                default: l(t => [ a(j, {
                                    size: "small",
                                    "model-value": t.row.status,
                                    "active-value": 0,
                                    "inactive-value": 1,
                                    onClick: L => function(i) {
                                        let F = i.status + "" == "0" ? "停用" : "启用";
                                        p.confirm(`\u786E\u8BA4\u8981${F}\u201C${i.name}\u201D\u5417\uFF1F`).then(() => {
                                            Sa({
                                                id: i.id,
                                                status: i.status + "" == "0" ? 1 : 0
                                            }).then(Na => {
                                                p.success("操作成功"), n();
                                            });
                                        });
                                    }(t.row)
                                }, null, 8, [ "model-value", "onClick" ]) ]),
                                _: 1
                            }), a(r, {
                                label: "创建人",
                                prop: "creator"
                            }), a(r, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                formatter: e(ba)
                            }, null, 8, [ "formatter" ]), a(r, {
                                label: "操作",
                                width: "120"
                            }, {
                                default: l(t => [ h((u(), v(d, {
                                    link: "",
                                    type: "primary",
                                    onClick: L => z("update", t.row.id)
                                }, {
                                    default: l(() => [ y(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ A, [ "system:tenant-package:update" ] ] ]), h((u(), 
                                v(d, {
                                    link: "",
                                    type: "danger",
                                    onClick: L => (async i => {
                                        try {
                                            await p.delConfirm(), await ka(i), p.success(J("common.delSuccess")), 
                                            await n();
                                        } catch {}
                                    })(t.row.id)
                                }, {
                                    default: l(() => [ y(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ A, [ "system:tenant-package:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ D, e(m) ] ]) ]),
                        _: 1
                    }), f("div", k, [ a(Y, {
                        limit: e(_).pageSize,
                        "onUpdate:limit": s[1] || (s[1] = t => e(_).pageSize = t),
                        page: e(_).pageNo,
                        "onUpdate:page": s[2] || (s[2] = t => e(_).pageNo = t),
                        total: e(S),
                        onPagination: n
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), a(Ca, {
                    ref_key: "formRef",
                    ref: E,
                    onSuccess: T
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-c6d8ca8e" ] ]);
});

export {
    Ma as __tla,
    M as default
};