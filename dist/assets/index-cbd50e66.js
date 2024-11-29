import {
    d as K,
    u as Q,
    p as V,
    aa as W,
    r as i,
    U as X,
    e as Z,
    f as $,
    j as tt,
    o as s,
    c as S,
    k as t,
    l,
    t as k,
    a as e,
    A as m,
    C as c,
    v as h,
    F as D,
    y as at,
    _ as et,
    J as rt,
    ad as lt,
    ae as ot,
    a9 as st,
    __tla as _t
} from "./index-6c08ea4c.js";

import {
    _ as it,
    __tla as pt
} from "./ContentPage-f6bcc98e.js";

import {
    _ as ct,
    __tla as nt
} from "./index-c4ca0ced.js";

import {
    _ as mt,
    __tla as ut
} from "./index-8b41572c.js";

import {
    _ as dt,
    __tla as yt
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as ft,
    __tla as ht
} from "./index-1024512a.js";

import {
    b as wt,
    D as b,
    __tla as vt
} from "./dict-c5825220.js";

import {
    d as St,
    __tla as kt
} from "./formatTime-de6f1520.js";

import {
    a as bt,
    d as gt,
    __tla as xt
} from "./index-736610b8.js";

import Ct, {
    __tla as It
} from "./RoleForm-75a2ce66.js";

import {
    _ as Et
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Tt
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as Nt
} from "./DeptTag-1be092ce.js";

import {
    __tla as Mt
} from "./index-ef4d146e.js";

import {
    __tla as Pt
} from "./index-13c88727.js";

import "./constants-528bd83f.js";

import {
    __tla as Rt
} from "./ChooseMenu-9b34958b.js";

import {
    __tla as Yt
} from "./index-70ef8e51.js";

import {
    __tla as Dt
} from "./ChooseDept-d64d0fbd.js";

import {
    __tla as zt
} from "./index-7c75bd27.js";

let z, Lt = Promise.all([ (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return ht;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return kt;
    } catch {}
})(), (() => {
    try {
        return xt;
    } catch {}
})(), (() => {
    try {
        return It;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return Nt;
    } catch {}
})(), (() => {
    try {
        return Mt;
    } catch {}
})(), (() => {
    try {
        return Pt;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})(), (() => {
    try {
        return Yt;
    } catch {}
})(), (() => {
    try {
        return Dt;
    } catch {}
})(), (() => {
    try {
        return zt;
    } catch {}
})() ]).then(async () => {
    let g, x, C, I;
    g = {
        class: "top-box"
    }, x = {
        class: "right btns-box header-btns pt-1"
    }, C = {
        key: 0
    }, I = {
        class: "bottom-box"
    }, z = Et(K({
        name: "SystemRole",
        __name: "index",
        setup(Ot) {
            const L = Q(), E = V(), {
                t: O
            } = W(), w = i(!0), T = i(0), N = i([]), p = X({
                pageNo: 1,
                pageSize: 20
            }), v = i({});
            i(), i(!1);
            const U = Z(() => [ {
                label: "角色身份",
                key: "identities",
                multiple: !0,
                type: "list",
                options: wt(b.SYSTEM_PERMISSION_INDETITY).filter(o => o.value !== 1)
            } ]), u = async () => {
                w.value = !0;
                try {
                    const o = await bt({
                        ...p,
                        keywords: v.value.keywords,
                        identities: (v.value.identities || []).join(",")
                    });
                    N.value = o.list, T.value = o.total;
                } finally {
                    w.value = !1;
                }
            }, A = o => {
                v.value = o, M();
            }, M = () => {
                p.pageNo = 1, u();
            }, P = i(), R = (o, _) => {
                P.value.open(o, _);
            };
            return $(() => {
                u();
            }), (o, _) => {
                const j = ft, B = et, d = rt, r = lt, Y = dt, F = ot, H = mt, J = ct, q = it, y = tt("hasPermi"), G = st;
                return s(), S(D, null, [ t(q, {
                    class: "cont-box"
                }, {
                    default: l(() => [ k("div", g, [ t(j, {
                        searchList: e(U),
                        onHandleSearch: A,
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "角色名称/代码"
                        }
                    }, null, 8, [ "searchList" ]), k("div", x, [ m((s(), c(d, {
                        size: "large",
                        type: "primary",
                        onClick: _[0] || (_[0] = a => R("create"))
                    }, {
                        default: l(() => [ t(B, {
                            class: "mr-4px",
                            icon: "ep:plus"
                        }), h(" 新增 ") ]),
                        _: 1
                    })), [ [ y, [ "system:role:create" ] ] ]) ]) ]), t(H, {
                        class: "center-box"
                    }, {
                        default: l(() => [ m((s(), c(F, {
                            data: e(N),
                            height: "calc(100% )"
                        }, {
                            default: l(() => [ t(r, {
                                label: "角色名称",
                                prop: "name",
                                fixed: "left",
                                "show-overflow-tooltip": "",
                                width: "120"
                            }), t(r, {
                                label: "角色代码",
                                prop: "code",
                                fixed: "left",
                                "show-overflow-tooltip": "",
                                width: "80"
                            }), t(r, {
                                label: "排序",
                                prop: "sort",
                                width: "60"
                            }), t(r, {
                                label: "角色身份",
                                prop: "identityScope"
                            }, {
                                default: l(a => [ (a.row.identityScope || []).length === 0 ? (s(), 
                                S("div", C)) : (s(!0), S(D, {
                                    key: 1
                                }, at(a.row.identityScope || [], n => (s(), c(Y, {
                                    key: n,
                                    type: e(b).SYSTEM_PERMISSION_INDETITY,
                                    value: n
                                }, null, 8, [ "type", "value" ]))), 128)) ]),
                                _: 1
                            }), t(r, {
                                label: "数据权限",
                                prop: "dataScope",
                                width: "165"
                            }, {
                                default: l(a => [ t(Y, {
                                    type: e(b).SYSTEM_ROLE_DATA_SCOPE,
                                    value: a.row.dataScope
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), t(r, {
                                label: "备注",
                                prop: "remark",
                                "show-overflow-tooltip": ""
                            }), t(r, {
                                label: "人员数",
                                prop: "userCount"
                            }), t(r, {
                                label: "创建人",
                                prop: "creator",
                                "show-overflow-tooltip": ""
                            }), t(r, {
                                formatter: e(St),
                                label: "创建时间",
                                prop: "createTime",
                                width: "180"
                            }, null, 8, [ "formatter" ]), t(r, {
                                width: 180,
                                label: "操作",
                                fixed: "right"
                            }, {
                                default: l(a => [ m((s(), c(d, {
                                    link: "",
                                    title: "菜单权限",
                                    type: "primary",
                                    onClick: n => {
                                        return f = a.row, void L.push({
                                            name: "SystemRoleUser",
                                            params: {
                                                id: f.id
                                            }
                                        });
                                        var f;
                                    }
                                }, {
                                    default: l(() => [ h(" 人员管理 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ y, [ "system:role:update" ] ] ]), m((s(), 
                                c(d, {
                                    link: "",
                                    type: "primary",
                                    onClick: n => R("update", a.row.id)
                                }, {
                                    default: l(() => [ h(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ y, [ "system:role:update" ] ] ]), m((s(), 
                                c(d, {
                                    link: "",
                                    type: "danger",
                                    onClick: n => (async f => {
                                        try {
                                            await E.delConfirm(), await gt(f), E.success(O("common.delSuccess")), 
                                            await u();
                                        } catch {}
                                    })(a.row.id)
                                }, {
                                    default: l(() => [ h(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ y, [ "system:role:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ G, e(w) ] ]) ]),
                        _: 1
                    }), k("div", I, [ t(J, {
                        limit: e(p).pageSize,
                        "onUpdate:limit": _[1] || (_[1] = a => e(p).pageSize = a),
                        page: e(p).pageNo,
                        "onUpdate:page": _[2] || (_[2] = a => e(p).pageNo = a),
                        total: e(T),
                        onPagination: u
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), t(Ct, {
                    ref_key: "formRef",
                    ref: P,
                    onSuccess: M
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-424af1c7" ] ]);
});

export {
    Lt as __tla,
    z as default
};