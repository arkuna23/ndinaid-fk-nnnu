import {
    d as B,
    e5 as G,
    aa as K,
    p as Q,
    r,
    e as V,
    f as W,
    j as X,
    o,
    c as Y,
    k as a,
    l as t,
    t as R,
    a as c,
    A as _,
    C as i,
    v as p,
    D as Z,
    F as $,
    e6 as A,
    _ as aa,
    J as ta,
    ad as ea,
    ae as la,
    a9 as ra,
    __tla as sa
} from "./index-6c08ea4c.js";

import {
    _ as oa,
    __tla as ca
} from "./ContentPage-f6bcc98e.js";

import {
    _ as na,
    __tla as _a
} from "./index-8b41572c.js";

import {
    _ as ia,
    __tla as pa
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as ma,
    __tla as ua
} from "./index-1024512a.js";

import {
    b as da,
    D as M,
    __tla as fa
} from "./dict-c5825220.js";

import {
    h as ya
} from "./tree-05ea8e09.js";

import {
    b as ha,
    d as wa,
    __tla as ba
} from "./index-70ef8e51.js";

import {
    _ as va,
    __tla as ka
} from "./MenuForm.vue_vue_type_script_setup_true_lang-29f36eae.js";

import {
    _ as Ca
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import {
    __tla as xa
} from "./DeptTag-1be092ce.js";

import {
    __tla as Sa
} from "./index-ef4d146e.js";

import {
    __tla as ga
} from "./index-993301ca.js";

import "./constants-528bd83f.js";

let T, Oa = Promise.all([ (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return ua;
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
        return ka;
    } catch {}
})(), (() => {
    try {
        return xa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})() ]).then(async () => {
    let v, k;
    v = {
        class: "top-box"
    }, k = {
        class: "right btns-box header-btns pt-1"
    }, T = Ca(B({
        name: "SystemMenu",
        __name: "index",
        setup(Ra) {
            const {
                wsCache: C
            } = G(), {
                t: E
            } = K(), f = Q(), y = r(!0), x = r([]), S = r({
                name: void 0,
                status: void 0
            });
            r();
            const N = r(!1), U = r(!0), L = V(() => [ {
                label: "状态",
                key: "status",
                type: "list",
                options: da(M.COMMON_STATUS)
            } ]);
            function z(s) {
                S.value = s, I();
            }
            const m = async () => {
                y.value = !0;
                try {
                    const s = await ha(S.value);
                    x.value = ya(s);
                } finally {
                    y.value = !1;
                }
            }, I = () => {
                m();
            }, g = r(), h = (s, u, w) => {
                g.value.open(s, u, w);
            }, P = async () => {
                try {
                    await f.confirm("即将更新缓存刷新浏览器！", "刷新菜单缓存"), C.delete(A.USER), 
                    C.delete(A.ROLE_ROUTERS), location.reload();
                } catch {}
            };
            return W(() => {
                m();
            }), (s, u) => {
                const w = ma, b = aa, n = ta, e = ea, j = ia, D = la, F = na, H = oa, d = X("hasPermi"), J = ra;
                return o(), Y($, null, [ a(H, {
                    class: "cont-box"
                }, {
                    default: t(() => [ R("div", v, [ a(w, {
                        searchList: c(L),
                        onHandleSearch: z,
                        class: "left",
                        keywordsInfo: {
                            key: "name",
                            label: "菜单名称"
                        }
                    }, null, 8, [ "searchList" ]), R("div", k, [ _((o(), i(n, {
                        size: "large",
                        type: "primary",
                        onClick: u[0] || (u[0] = l => h("create"))
                    }, {
                        default: t(() => [ a(b, {
                            class: "mr-4px",
                            icon: "ep:plus"
                        }), p(" 新增 ") ]),
                        _: 1
                    })), [ [ d, [ "system:menu:create" ] ] ]), a(n, {
                        plain: "",
                        onClick: P,
                        size: "large"
                    }, {
                        default: t(() => [ a(b, {
                            class: "mr-4px",
                            icon: "ep:refresh"
                        }), p(" 刷新菜单缓存 ") ]),
                        _: 1
                    }) ]) ]), a(F, {
                        class: "center-box",
                        "no-pager": !0
                    }, {
                        default: t(() => [ c(U) ? _((o(), i(D, {
                            key: 0,
                            data: c(x),
                            "default-expand-all": c(N),
                            "row-key": "id",
                            height: "calc(100% - 0px)"
                        }, {
                            default: t(() => [ a(e, {
                                "show-overflow-tooltip": !0,
                                label: "菜单名称",
                                prop: "name",
                                width: "250"
                            }), a(e, {
                                label: "图标",
                                prop: "icon",
                                width: "100"
                            }, {
                                default: t(l => [ a(b, {
                                    icon: l.row.icon
                                }, null, 8, [ "icon" ]) ]),
                                _: 1
                            }), a(e, {
                                label: "排序",
                                prop: "sort",
                                width: "60"
                            }), a(e, {
                                "show-overflow-tooltip": !0,
                                label: "权限标识",
                                prop: "permission"
                            }), a(e, {
                                "show-overflow-tooltip": !0,
                                label: "组件路径",
                                prop: "component"
                            }), a(e, {
                                "show-overflow-tooltip": !0,
                                label: "组件名称",
                                prop: "componentName"
                            }), a(e, {
                                label: "状态",
                                prop: "status",
                                width: "80"
                            }, {
                                default: t(l => [ a(j, {
                                    type: c(M).COMMON_STATUS,
                                    value: l.row.status
                                }, null, 8, [ "type", "value" ]) ]),
                                _: 1
                            }), a(e, {
                                label: "操作",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: t(l => [ _((o(), i(n, {
                                    link: "",
                                    type: "primary",
                                    onClick: O => h("update", l.row.id)
                                }, {
                                    default: t(() => [ p(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ d, [ "system:menu:update" ] ] ]), _((o(), 
                                i(n, {
                                    link: "",
                                    type: "primary",
                                    onClick: O => h("create", void 0, l.row.id)
                                }, {
                                    default: t(() => [ p(" 新增 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ d, [ "system:menu:create" ] ] ]), _((o(), 
                                i(n, {
                                    link: "",
                                    type: "danger",
                                    onClick: O => (async q => {
                                        try {
                                            await f.delConfirm(), await wa(q), f.success(E("common.delSuccess")), 
                                            await m();
                                        } catch {}
                                    })(l.row.id)
                                }, {
                                    default: t(() => [ p(" 删除 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ d, [ "system:menu:delete" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data", "default-expand-all" ])), [ [ J, c(y) ] ]) : Z("", !0) ]),
                        _: 1
                    }) ]),
                    _: 1
                }), a(va, {
                    ref_key: "formRef",
                    ref: g,
                    onSuccess: m
                }, null, 512) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-86c8563a" ] ]);
});

export {
    Oa as __tla,
    T as default
};