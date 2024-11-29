import {
    _ as ca,
    __tla as ia
} from "./index-71666e05.js";

import {
    _ as _a,
    __tla as na
} from "./ContentPage-f6bcc98e.js";

import {
    _ as pa,
    __tla as ma
} from "./index-c4ca0ced.js";

import {
    _ as ua,
    __tla as da
} from "./index-8b41572c.js";

import {
    ag as fa,
    h as ya,
    e as k,
    p as ga,
    u as ha,
    a as t,
    r as m,
    U as ka,
    f as va,
    o as s,
    c as x,
    k as l,
    l as o,
    t as r,
    C as u,
    v as i,
    D as y,
    z as P,
    F as xa,
    y as ba,
    B as b,
    _ as Ca,
    J as wa,
    L as za,
    __tla as Pa
} from "./index-6c08ea4c.js";

import {
    _ as Sa,
    __tla as Na
} from "./index-1024512a.js";

import {
    d as Ra,
    __tla as Ba
} from "./formatTime-de6f1520.js";

import Da, {
    __tla as La
} from "./DialogForm-7a9c127e.js";

import {
    d as Ma,
    b as Ua,
    e as ja,
    f as Ea,
    a as Ha,
    __tla as Ia
} from "./codeRepository-027fddde.js";

import Oa, {
    __tla as qa
} from "./PreviewCover-97c10100.js";

import {
    _ as Fa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Ja
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as Ta
} from "./DeptTag-1be092ce.js";

import {
    __tla as Xa
} from "./index-ef4d146e.js";

import {
    __tla as Aa
} from "./dict-c5825220.js";

import {
    __tla as Ga
} from "./UploadCover-f16f2b2c.js";

import {
    __tla as Ka
} from "./el-image-0d184777.js";

import {
    __tla as Qa
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as Va
} from "./throttle-1adeb119.js";

import {
    __tla as Wa
} from "./file-e038b35d.js";

let W, Ya = Promise.all([ (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return na;
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
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Na;
    } catch {}
})(), (() => {
    try {
        return Ba;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return qa;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Ta;
    } catch {}
})(), (() => {
    try {
        return Xa;
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
        return Ka;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})() ]).then(async () => {
    let S, N, R, B, D, L, M, U, j, E, H, I, O;
    S = {
        key: 0
    }, N = {
        class: "top-box"
    }, R = {
        class: "right btns-box header-btns"
    }, B = {
        class: "card-box"
    }, D = {
        class: "cover-box"
    }, L = {
        class: "info-box"
    }, M = {
        class: "info-name-value"
    }, U = {
        class: "info-item"
    }, j = {
        class: "info-item"
    }, E = {
        class: "info-btns align-right"
    }, H = {
        class: "left"
    }, I = {
        class: "bottom-box"
    }, O = {
        class: "page-empty w-100%"
    }, W = Fa({
        __name: "index",
        setup(Za) {
            const Y = fa();
            ya();
            const q = k(() => Y.getLayout === "cutMenu"), v = ga(), C = ha(), F = k(() => t(C.currentRoute)), g = k(() => t(F).path.indexOf("/public/") >= 0), Z = k(() => t(F).path.indexOf("/neu/") >= 0), J = m([]), $ = k(() => []), T = m([]);
            m([]), m([]);
            const X = m(0), h = m(0), d = ka({
                pageNo: 1,
                pageSize: 12
            }), A = m(), w = (c, e) => {
                A.value.open(c, e);
            };
            function aa(c) {
                d.pageNo = 1, f(c);
            }
            const f = c => {
                (t(g) ? ja : Ea)({
                    ...d,
                    ...c
                }).then(e => {
                    T.value = e.list, X.value = e.total, h.value = h.value === 0 ? e.total : h.value;
                });
            }, G = () => {
                C.back();
            }, K = () => {
                w("create", "");
            };
            return va(() => {
                (async () => {
                    f();
                    const {
                        languages: c
                    } = await Ha();
                    J.value = c.map(e => ({
                        id: e.id + "",
                        name: e.name
                    }));
                })();
            }), (c, e) => {
                const ta = Sa, Q = Ca, _ = wa, ea = za, ra = ua, sa = pa, V = _a, la = ca;
                return s(), x("div", null, [ t(h) && t(h) > 0 ? (s(), x("div", S, [ l(V, {
                    class: P([ "cont-box", t(q) ? "" : "no-bg-color" ]),
                    title: "代码仓管理",
                    onRouterBack: G
                }, {
                    default: o(() => [ r("div", N, [ l(ta, {
                        ref: "ComSearchRef",
                        searchList: t($),
                        keywordsInfo: {
                            label: "代码仓名称",
                            key: "name"
                        },
                        onHandleSearch: aa,
                        class: "left"
                    }, null, 8, [ "searchList" ]), r("div", R, [ t(g) ? y("", !0) : (s(), 
                    u(_, {
                        key: 0,
                        type: "primary",
                        onClick: K,
                        size: "large"
                    }, {
                        default: o(() => [ l(Q, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), i(" 新建 ") ]),
                        _: 1
                    })) ]) ]), l(ra, {
                        class: P([ "center-box", t(q) ? "mx--10px px-10px" : "no-bg-color mx--30px px-10px" ]),
                        "no-pager": !1,
                        outerHeight: 100
                    }, {
                        default: o(() => [ r("div", B, [ (s(!0), x(xa, null, ba(t(T), a => (s(), 
                        x("div", {
                            class: "card-item",
                            key: a.id
                        }, [ r("div", D, [ l(Oa, {
                            "default-id": a.coverEid || "1"
                        }, null, 8, [ "default-id" ]) ]), r("div", L, [ r("div", {
                            class: P([ "info-name", a.status === 2 ? "" : "is-over" ])
                        }, [ r("div", M, b(a.name), 1), l(ea, {
                            class: "info-name-tag",
                            type: "primary"
                        }, {
                            default: o(() => {
                                var n;
                                return [ i(b((n = t(J).find(p => p.id + "" == a.language + "")) == null ? void 0 : n.name), 1) ];
                            }),
                            _: 2
                        }, 1024) ], 2), r("div", U, " 创建时间：" + b(t(Ra)(a, a, a.createTime)), 1), r("div", j, " 创建人：" + b(a.creator), 1), r("div", E, [ r("div", H, [ l(_, {
                            link: "",
                            type: "primary",
                            onClick: n => ((p, z) => {
                                const oa = t(Z) ? "NeuProjectCodeDocManage" : t(g) ? "PublicProjectCodeDocManage" : "PrivateProjectCodeDocManage";
                                C.push({
                                    name: oa,
                                    params: {
                                        id: p
                                    },
                                    query: {
                                        status: z
                                    }
                                });
                            })(a.id, a.status)
                        }, {
                            default: o(() => [ l(Q, {
                                icon: "ep:folder",
                                class: "mr-5px"
                            }), i(" 文件管理 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ]) ]), a.status !== 2 ? (s(), u(_, {
                            key: 0,
                            link: "",
                            type: "primary",
                            onClick: n => w("preview", a.id)
                        }, {
                            default: o(() => [ i(" 查看 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : y("", !0), a.status === 2 ? (s(), 
                        u(_, {
                            key: 1,
                            link: "",
                            type: "primary",
                            onClick: n => w("update", a.id)
                        }, {
                            default: o(() => [ i(" 编辑 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : y("", !0), a.status === 2 ? (s(), 
                        u(_, {
                            key: 2,
                            link: "",
                            type: "primary",
                            onClick: n => (async (p, z) => {
                                try {
                                    await v.confirm("请确保已经完成代码仓内容建设，完成后代码仓信息不能更改，确定完成么？"), 
                                    await Ua({
                                        id: p,
                                        status: z
                                    }), v.success("操作成功"), f();
                                } catch {}
                            })(a.id, "4")
                        }, {
                            default: o(() => [ i(" 完成 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) : y("", !0), t(g) ? y("", !0) : (s(), 
                        u(_, {
                            key: 3,
                            link: "",
                            type: "danger",
                            onClick: n => (async p => {
                                try {
                                    await v.delConfirm(), await Ma(p), v.success("操作成功"), 
                                    f();
                                } catch {}
                            })(a.id)
                        }, {
                            default: o(() => [ i(" 删除 ") ]),
                            _: 2
                        }, 1032, [ "onClick" ])) ]) ]) ]))), 128)) ]) ]),
                        _: 1
                    }, 8, [ "class" ]), r("div", I, [ l(sa, {
                        total: t(X),
                        page: t(d).pageNo,
                        "onUpdate:page": e[0] || (e[0] = a => t(d).pageNo = a),
                        limit: t(d).pageSize,
                        "onUpdate:limit": e[1] || (e[1] = a => t(d).pageSize = a),
                        "page-sizes": [ 12, 24, 48, 96 ],
                        onPagination: f
                    }, null, 8, [ "total", "page", "limit" ]) ]) ]),
                    _: 1
                }, 8, [ "class" ]) ])) : (s(), u(V, {
                    key: 1,
                    class: "cont-box",
                    title: "代码仓管理",
                    onRouterBack: G
                }, {
                    default: o(() => [ r("div", O, [ l(la, {
                        type: "resource",
                        msg: "暂无资源"
                    }), t(g) ? y("", !0) : (s(), u(_, {
                        key: 0,
                        class: "empty-dropdown !w-140px",
                        type: "primary",
                        size: "large",
                        onClick: K
                    }, {
                        default: o(() => [ i(" 新建 ") ]),
                        _: 1
                    })) ]) ]),
                    _: 1
                })), l(Da, {
                    ref_key: "formRef",
                    ref: A,
                    onSuccess: f
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9398f84e" ] ]);
});

export {
    Ya as __tla,
    W as default
};