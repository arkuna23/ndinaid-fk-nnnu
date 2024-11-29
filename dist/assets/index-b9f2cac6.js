import {
    _ as sa,
    __tla as la
} from "./index-71666e05.js";

import {
    _ as oa,
    __tla as _a
} from "./ContentPage-f6bcc98e.js";

import {
    _ as ca,
    __tla as ia
} from "./index-c4ca0ced.js";

import {
    _ as na,
    __tla as pa
} from "./index-8b41572c.js";

import {
    ag as ma,
    h as ua,
    e as h,
    p as da,
    u as fa,
    a as t,
    r as i,
    U as ya,
    f as ha,
    o as s,
    c as g,
    k as l,
    l as o,
    t as e,
    C as n,
    v as p,
    D as f,
    z as T,
    F as ga,
    y as va,
    B as k,
    A as ka,
    G as xa,
    _ as ba,
    J as Ca,
    q as wa,
    L as za,
    __tla as Sa
} from "./index-6c08ea4c.js";

import {
    _ as Ra,
    __tla as Ha
} from "./index-1024512a.js";

import {
    d as La,
    __tla as Na
} from "./formatTime-de6f1520.js";

import Ba, {
    __tla as Ua
} from "./DialogForm-06b59fa0.js";

import {
    e as Ea,
    f as Fa,
    a as Ia,
    __tla as Pa
} from "./dataset-a3994d32.js";

import qa, {
    __tla as Aa
} from "./PreviewCover-97c10100.js";

import {
    _ as Da
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ga
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ja
} from "./DeptTag-1be092ce.js";

import {
    __tla as Ma
} from "./index-ef4d146e.js";

import "./file_题-23882218.js";

import {
    __tla as Oa
} from "./dict-c5825220.js";

import {
    __tla as Ta
} from "./file-e038b35d.js";

import {
    __tla as Za
} from "./UploadCover-f16f2b2c.js";

import {
    __tla as ja
} from "./el-image-0d184777.js";

import {
    __tla as Ka
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as Qa
} from "./throttle-1adeb119.js";

let Z, Va = Promise.all([ (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Ua;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ga;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Ma;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Za;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})() ]).then(async () => {
    let x, b, C, w, z, S, R, H, L, N, B, U, E;
    x = {
        key: 0
    }, b = {
        class: "top-box"
    }, C = {
        class: "right btns-box header-btns"
    }, w = {
        class: "card-box"
    }, z = {
        class: "cover-box"
    }, S = {
        class: "info-box"
    }, R = {
        class: "info-name"
    }, H = {
        class: "info-name-value"
    }, L = {
        class: "info-item"
    }, N = {
        class: "info-item"
    }, B = {
        class: "info-btns align-right"
    }, U = {
        class: "bottom-box"
    }, E = {
        class: "page-empty w-100%"
    }, Z = Da({
        __name: "index",
        setup(Wa) {
            const j = ma();
            ua();
            const F = h(() => j.getLayout === "cutMenu"), I = da(), P = fa(), K = h(() => t(P.currentRoute)), y = h(() => t(K).path.indexOf("/public/") >= 0), Q = h(() => []), q = i([]);
            i([]), i([]);
            const A = i(0), m = i(0), _ = ya({
                pageNo: 1,
                pageSize: 12
            }), D = i(), v = (c, r) => {
                D.value.open(c, r);
            };
            function V(c) {
                _.pageNo = 1, u(c);
            }
            const u = c => {
                (t(y) ? Fa : Ia)({
                    ..._,
                    ...c
                }).then(r => {
                    q.value = r.list, A.value = r.total, m.value = m.value === 0 ? r.total : m.value;
                });
            }, G = () => {
                P.back();
            }, J = () => {
                v("create", "");
            };
            return ha(() => {
                u();
            }), (c, r) => {
                const W = Ra, X = ba, d = Ca, Y = wa, $ = za, aa = na, ta = ca, M = oa, ea = sa;
                return s(), g("div", null, [ t(m) && t(m) > 0 ? (s(), g("div", x, [ l(M, {
                    class: T([ "cont-box", t(F) ? "" : "no-bg-color" ]),
                    title: "数据集管理",
                    onRouterBack: G
                }, {
                    default: o(() => [ e("div", b, [ l(W, {
                        ref: "ComSearchRef",
                        searchList: t(Q),
                        keywordsInfo: {
                            label: "数据集名称",
                            key: "name"
                        },
                        onHandleSearch: V,
                        class: "left"
                    }, null, 8, [ "searchList" ]), e("div", C, [ t(y) ? f("", !0) : (s(), 
                    n(d, {
                        key: 0,
                        type: "primary",
                        onClick: J,
                        size: "large"
                    }, {
                        default: o(() => [ l(X, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), p(" 新建 ") ]),
                        _: 1
                    })) ]) ]), l(aa, {
                        class: T([ "center-box", t(F) ? "mx--10px px-10px" : "no-bg-color mx--30px px-10px" ]),
                        "no-pager": !1,
                        outerHeight: 100
                    }, {
                        default: o(() => [ e("div", w, [ (s(!0), g(ga, null, va(t(q), a => (s(), 
                        g("div", {
                            class: "card-item",
                            key: a.id
                        }, [ e("div", z, [ l(qa, {
                            "default-id": a.coverEid || "1"
                        }, null, 8, [ "default-id" ]) ]), e("div", S, [ e("div", R, [ l(Y, {
                            placement: "top",
                            width: 240,
                            trigger: "hover",
                            effect: "dark",
                            "popper-class": "popper-class",
                            teleported: !1,
                            content: a.name
                        }, {
                            reference: o(() => [ e("div", H, k(a.name), 1) ]),
                            _: 2
                        }, 1032, [ "content" ]), ka(l($, {
                            class: "ml-8px",
                            type: "warning"
                        }, {
                            default: o(() => [ p("未完成") ]),
                            _: 2
                        }, 1536), [ [ xa, a.status === 2 ] ]) ]), e("div", L, " 创建时间：" + k(t(La)(a, a, a.createTime)), 1), e("div", N, " 创建人：" + k(a.creator), 1), e("div", B, [ a.status !== 2 ? (s(), 
                        n(d, {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: O => v("preview", a.id)
                        }, {
                            default: o(() => [ p(" 查看 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : f("", !0), a.status === 2 ? (s(), 
                        n(d, {
                            key: 1,
                            link: "",
                            type: "primary",
                            onClick: O => v("update", a.id)
                        }, {
                            default: o(() => [ p(" 编辑 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : f("", !0), t(y) ? f("", !0) : (s(), 
                        n(d, {
                            key: 2,
                            link: "",
                            type: "danger",
                            onClick: O => (async ra => {
                                try {
                                    await I.delConfirm(), await Ea(ra), I.success("操作成功"), 
                                    u();
                                } catch {}
                            })(a.id)
                        }, {
                            default: o(() => [ p(" 删除 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) ]) ]) ]))), 128)) ]) ]),
                        _: 1
                    }, 8, [ "class" ]), e("div", U, [ l(ta, {
                        total: t(A),
                        page: t(_).pageNo,
                        "onUpdate:page": r[0] || (r[0] = a => t(_).pageNo = a),
                        limit: t(_).pageSize,
                        "onUpdate:limit": r[1] || (r[1] = a => t(_).pageSize = a),
                        "page-sizes": [ 12, 24, 48, 96 ],
                        onPagination: u
                    }, null, 8, [ "total", "page", "limit" ]) ]) ]),
                    _: 1
                }, 8, [ "class" ]) ])) : (s(), n(M, {
                    key: 1,
                    class: "cont-box",
                    title: "数据集管理",
                    onRouterBack: G
                }, {
                    default: o(() => [ e("div", E, [ l(ea, {
                        type: "resource",
                        msg: "暂无资源"
                    }), t(y) ? f("", !0) : (s(), n(d, {
                        key: 0,
                        class: "empty-dropdown !w-140px",
                        type: "primary",
                        size: "large",
                        onClick: J
                    }, {
                        default: o(() => [ p(" 新建 ") ]),
                        _: 1
                    })) ]) ]),
                    _: 1
                })), l(Ba, {
                    ref_key: "formRef",
                    ref: D,
                    onSuccess: u
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-8375ba42" ] ]);
});

export {
    Va as __tla,
    Z as default
};