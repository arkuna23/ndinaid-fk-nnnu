import {
    d as G,
    p as H,
    aa as L,
    r as u,
    U as W,
    f as X,
    j as Y,
    o as n,
    c as O,
    k as a,
    l as t,
    a as l,
    I as P,
    F as T,
    y as Z,
    C as i,
    v as _,
    A as m,
    P as $,
    O as aa,
    ab as ea,
    ac as la,
    _ as ta,
    J as ra,
    Q as oa,
    ad as sa,
    ae as na,
    a9 as pa,
    __tla as ca
} from "./index-6c08ea4c.js";

import {
    _ as ua,
    __tla as ia
} from "./index-c4ca0ced.js";

import {
    _ as _a,
    __tla as da
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    _ as ma,
    __tla as fa
} from "./ContentWrap-4c50e4c8.js";

import {
    b as ya,
    D as A,
    __tla as ga
} from "./dict-c5825220.js";

import {
    d as ba,
    __tla as ha
} from "./formatTime-de6f1520.js";

import {
    d as va
} from "./download-20922b56.js";

import {
    _ as ka,
    g as Ca,
    d as wa,
    e as xa,
    __tla as Sa
} from "./PostForm.vue_vue_type_script_setup_true_lang-0bd0b209.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Va
} from "./index-993301ca.js";

import "./color-a8b4eb58.js";

import "./constants-528bd83f.js";

let F, Ua = Promise.all([ (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ia;
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
        return ga;
    } catch {}
})(), (() => {
    try {
        return ha;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})() ]).then(async () => {
    F = G({
        name: "SystemPost",
        __name: "index",
        setup(Na) {
            const h = H(), {
                t: M
            } = L(), v = u(!0), C = u(0), w = u([]), r = W({
                pageNo: 1,
                pageSize: 10,
                code: "",
                name: "",
                status: void 0
            }), x = u(), k = u(!1), d = async () => {
                v.value = !0;
                try {
                    const p = await Ca(r);
                    w.value = p.list, C.value = p.total;
                } finally {
                    v.value = !1;
                }
            }, f = () => {
                r.pageNo = 1, d();
            }, z = () => {
                x.value.resetFields(), f();
            }, S = u(), V = (p, o) => {
                S.value.open(p, o);
            }, K = async () => {
                try {
                    await h.exportConfirm(), k.value = !0;
                    const p = await xa(r);
                    va.excel(p, "岗位列表.xls");
                } catch {} finally {
                    k.value = !1;
                }
            };
            return X(() => {
                d();
            }), (p, o) => {
                const U = $, y = aa, R = ea, j = la, g = ta, c = ra, q = oa, N = ma, s = sa, D = _a, I = na, J = ua, b = Y("hasPermi"), Q = pa;
                return n(), O(T, null, [ a(N, null, {
                    default: t(() => [ a(q, {
                        class: "-mb-15px",
                        model: l(r),
                        ref_key: "queryFormRef",
                        ref: x,
                        inline: !0,
                        "label-width": "68px"
                    }, {
                        default: t(() => [ a(y, {
                            label: "岗位名称",
                            prop: "name"
                        }, {
                            default: t(() => [ a(U, {
                                modelValue: l(r).name,
                                "onUpdate:modelValue": o[0] || (o[0] = e => l(r).name = e),
                                placeholder: "请输入岗位名称",
                                clearable: "",
                                onKeyup: P(f, [ "enter" ])
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(y, {
                            label: "岗位编码",
                            prop: "code"
                        }, {
                            default: t(() => [ a(U, {
                                modelValue: l(r).code,
                                "onUpdate:modelValue": o[1] || (o[1] = e => l(r).code = e),
                                placeholder: "请输入岗位编码",
                                clearable: "",
                                onKeyup: P(f, [ "enter" ])
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(y, {
                            label: "状态",
                            prop: "status"
                        }, {
                            default: t(() => [ a(j, {
                                modelValue: l(r).status,
                                "onUpdate:modelValue": o[2] || (o[2] = e => l(r).status = e),
                                placeholder: "请选择状态",
                                clearable: ""
                            }, {
                                default: t(() => [ (n(!0), O(T, null, Z(l(ya)(l(A).COMMON_STATUS), e => (n(), 
                                i(R, {
                                    key: e.value,
                                    label: e.label,
                                    value: e.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), a(y, null, {
                            default: t(() => [ a(c, {
                                onClick: f
                            }, {
                                default: t(() => [ a(g, {
                                    icon: "ep:search",
                                    class: "mr-5px"
                                }), _(" 搜索") ]),
                                _: 1
                            }), a(c, {
                                onClick: z
                            }, {
                                default: t(() => [ a(g, {
                                    icon: "ep:refresh",
                                    class: "mr-5px"
                                }), _(" 重置") ]),
                                _: 1
                            }), m((n(), i(c, {
                                type: "primary",
                                plain: "",
                                onClick: o[3] || (o[3] = e => V("create"))
                            }, {
                                default: t(() => [ a(g, {
                                    icon: "ep:plus",
                                    class: "mr-5px"
                                }), _(" 新增 ") ]),
                                _: 1
                            })), [ [ b, [ "system:notice:create" ] ] ]), m((n(), 
                            i(c, {
                                type: "success",
                                plain: "",
                                onClick: K,
                                loading: l(k)
                            }, {
                                default: t(() => [ a(g, {
                                    icon: "ep:download",
                                    class: "mr-5px"
                                }), _(" 导出 ") ]),
                                _: 1
                            }, 8, [ "loading" ])), [ [ b, [ "infra:config:export" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }), a(N, null, {
                    default: t(() => [ m((n(), i(I, {
                        data: l(w)
                    }, {
                        default: t(() => [ a(s, {
                            label: "岗位编号",
                            align: "center",
                            prop: "id"
                        }), a(s, {
                            label: "岗位名称",
                            align: "center",
                            prop: "name"
                        }), a(s, {
                            label: "岗位编码",
                            align: "center",
                            prop: "code"
                        }), a(s, {
                            label: "岗位顺序",
                            align: "center",
                            prop: "sort"
                        }), a(s, {
                            label: "岗位备注",
                            align: "center",
                            prop: "remark"
                        }), a(s, {
                            label: "状态",
                            align: "center",
                            prop: "status"
                        }, {
                            default: t(e => [ a(D, {
                                type: l(A).COMMON_STATUS,
                                value: e.row.status
                            }, null, 8, [ "type", "value" ]) ]),
                            _: 1
                        }), a(s, {
                            label: "创建时间",
                            align: "center",
                            prop: "createTime",
                            width: "180",
                            formatter: l(ba)
                        }, null, 8, [ "formatter" ]), a(s, {
                            label: "操作",
                            align: "center"
                        }, {
                            default: t(e => [ m((n(), i(c, {
                                link: "",
                                type: "primary",
                                onClick: B => V("update", e.row.id)
                            }, {
                                default: t(() => [ _(" 编辑 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ b, [ "system:post:update" ] ] ]), m((n(), 
                            i(c, {
                                link: "",
                                type: "danger",
                                onClick: B => (async E => {
                                    try {
                                        await h.delConfirm(), await wa(E), h.success(M("common.delSuccess")), 
                                        await d();
                                    } catch {}
                                })(e.row.id)
                            }, {
                                default: t(() => [ _(" 删除 ") ]),
                                _: 2
                            }, 1032, [ "onClick" ])), [ [ b, [ "system:post:delete" ] ] ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "data" ])), [ [ Q, l(v) ] ]), a(J, {
                        total: l(C),
                        page: l(r).pageNo,
                        "onUpdate:page": o[4] || (o[4] = e => l(r).pageNo = e),
                        limit: l(r).pageSize,
                        "onUpdate:limit": o[5] || (o[5] = e => l(r).pageSize = e),
                        onPagination: d
                    }, null, 8, [ "total", "page", "limit" ]) ]),
                    _: 1
                }), a(ka, {
                    ref_key: "formRef",
                    ref: S,
                    onSuccess: d
                }, null, 512) ], 64);
            };
        }
    });
});

export {
    Ua as __tla,
    F as default
};