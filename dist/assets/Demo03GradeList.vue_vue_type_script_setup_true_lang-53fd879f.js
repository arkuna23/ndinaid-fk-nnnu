import {
    d as F,
    aa as G,
    p as J,
    r as _,
    U as L,
    w as T,
    j as R,
    o as i,
    c as q,
    k as a,
    l as n,
    A as c,
    C as d,
    v as h,
    a as e,
    F as B,
    _ as E,
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
    k as aa,
    l as ta,
    __tla as ea
} from "./index-decb78d3.js";

import {
    _ as ra,
    __tla as la
} from "./Demo03GradeForm.vue_vue_type_script_setup_true_lang-9f1f8931.js";

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
    I = F({
        __name: "Demo03GradeList",
        props: {
            studentId: {}
        },
        setup(S) {
            const {
                t: b
            } = G(), u = J(), m = S, f = _(!1), k = _([]), w = _(0), r = L({
                pageNo: 1,
                pageSize: 10,
                studentId: void 0
            });
            T(() => m.studentId, l => {
                r.studentId = l, z();
            }, {
                immediate: !1
            });
            const p = async () => {
                f.value = !0;
                try {
                    const l = await aa(r);
                    k.value = l.list, w.value = l.total;
                } finally {
                    f.value = !1;
                }
            }, z = () => {
                r.pageNo = 1, p();
            }, v = _(), C = (l, t) => {
                m.studentId ? v.value.open(l, t, m.studentId) : u.error("请选择一个学生");
            };
            return (l, t) => {
                const N = E, y = H, o = K, P = M, x = X, U = V, g = R("hasPermi"), j = O;
                return i(), q(B, null, [ a(U, null, {
                    default: n(() => [ c((i(), d(y, {
                        type: "primary",
                        plain: "",
                        onClick: t[0] || (t[0] = s => C("create"))
                    }, {
                        default: n(() => [ a(N, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), h(" 新增 ") ]),
                        _: 1
                    })), [ [ g, [ "infra:demo03-student:create" ] ] ]), c((i(), 
                    d(P, {
                        data: e(k),
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
                            label: "班主任",
                            align: "center",
                            prop: "teacher"
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
                                onClick: A => C("update", s.row.id)
                            }, {
                                default: n(() => [ h(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ g, [ "infra:demo03-student:update" ] ] ]), c((i(), 
                            d(y, {
                                link: "",
                                type: "danger",
                                onClick: A => (async D => {
                                    try {
                                        await u.delConfirm(), await ta(D), u.success(b("common.delSuccess")), 
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
                    }, 8, [ "data" ])), [ [ j, e(f) ] ]), a(x, {
                        total: e(w),
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