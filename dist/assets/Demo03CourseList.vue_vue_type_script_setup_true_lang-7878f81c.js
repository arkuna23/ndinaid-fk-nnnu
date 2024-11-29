import {
    d as D,
    aa as F,
    p as J,
    r as _,
    U as L,
    w as R,
    j as q,
    o as i,
    c as B,
    k as a,
    l as n,
    A as c,
    C as d,
    v as h,
    a as e,
    F as E,
    _ as G,
    J as H,
    ad as K,
    ae as M,
    a9 as O,
    __tla as Q
} from "./index-6c08ea4c.js";

import {
    _ as V,
    __tla as W
} from "./ContentWrap-4c50e4c8.js";

import {
    _ as X,
    __tla as Y
} from "./index-c4ca0ced.js";

import {
    d as Z,
    __tla as $
} from "./formatTime-de6f1520.js";

import {
    e as aa,
    f as ta,
    __tla as ea
} from "./index-decb78d3.js";

import {
    _ as ra,
    __tla as la
} from "./Demo03CourseForm.vue_vue_type_script_setup_true_lang-085b7d14.js";

let I, sa = Promise.all([ (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return W;
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
        return ea;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})() ]).then(async () => {
    I = D({
        __name: "Demo03CourseList",
        props: {
            studentId: {}
        },
        setup(b) {
            const {
                t: S
            } = F(), u = J(), m = b, f = _(!1), w = _([]), k = _(0), r = L({
                pageNo: 1,
                pageSize: 10,
                studentId: void 0
            });
            R(() => m.studentId, l => {
                r.studentId = l, x();
            }, {
                immediate: !1
            });
            const p = async () => {
                f.value = !0;
                try {
                    const l = await aa(r);
                    w.value = l.list, k.value = l.total;
                } finally {
                    f.value = !1;
                }
            }, x = () => {
                r.pageNo = 1, p();
            }, v = _(), C = (l, t) => {
                m.studentId ? v.value.open(l, t, m.studentId) : u.error("请选择一个学生");
            };
            return (l, t) => {
                const z = G, y = H, o = K, N = M, P = X, U = V, g = q("hasPermi"), T = O;
                return i(), B(E, null, [ a(U, null, {
                    default: n(() => [ c((i(), d(y, {
                        type: "primary",
                        plain: "",
                        onClick: t[0] || (t[0] = s => C("create"))
                    }, {
                        default: n(() => [ a(z, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), h(" 新增 ") ]),
                        _: 1
                    })), [ [ g, [ "infra:demo03-student:create" ] ] ]), c((i(), 
                    d(N, {
                        data: e(w),
                        stripe: !0,
                        "show-overflow-tooltip": !0
                    }, {
                        default: n(() => [ a(o, {
                            label: "编号",
                            align: "center",
                            prop: "id"
                        }), a(o, {
                            label: "名字",
                            align: "center",
                            prop: "name"
                        }), a(o, {
                            label: "分数",
                            align: "center",
                            prop: "score"
                        }), a(o, {
                            label: "创建时间",
                            align: "center",
                            prop: "createTime",
                            formatter: e(Z),
                            width: "180px"
                        }, null, 8, [ "formatter" ]), a(o, {
                            label: "操作",
                            align: "center"
                        }, {
                            default: n(s => [ c((i(), d(y, {
                                link: "",
                                type: "primary",
                                onClick: j => C("update", s.row.id)
                            }, {
                                default: n(() => [ h(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ g, [ "infra:demo03-student:update" ] ] ]), c((i(), 
                            d(y, {
                                link: "",
                                type: "danger",
                                onClick: j => (async A => {
                                    try {
                                        await u.delConfirm(), await ta(A), u.success(S("common.delSuccess")), 
                                        await p();
                                    } catch {}
                                })(s.row.id)
                            }, {
                                default: n(() => [ h(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ g, [ "infra:demo03-student:delete" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ T, e(f) ] ]), a(P, {
                        total: e(k),
                        page: e(r).pageNo,
                        "onUpdate:page": t[1] || (t[1] = s => e(r).pageNo = s),
                        limit: e(r).pageSize,
                        "onUpdate:limit": t[2] || (t[2] = s => e(r).pageSize = s),
                        onPagination: p
                    }, null, 8, [ "total", "page", "limit" ]) ]),
                    _: 1
                }), a(ra, {
                    ref_key: "formRef",
                    ref: v,
                    onSuccess: p
                }, null, 512) ], 64);
            };
        }
    });
});

export {
    I as _,
    sa as __tla
};