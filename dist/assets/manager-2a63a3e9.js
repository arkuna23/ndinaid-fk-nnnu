import {
    p as ua,
    r as n,
    U as da,
    e as F,
    a as l,
    f as ma,
    j as fa,
    o as c,
    c as H,
    k as a,
    l as r,
    t as p,
    m as M,
    F as D,
    y as wa,
    C as h,
    A as k,
    v as i,
    B as x,
    fz as ha,
    ab as ya,
    ac as ba,
    _ as va,
    J as ga,
    ad as ka,
    aQ as xa,
    q as Sa,
    ae as Ca,
    aU as Na,
    a9 as Ua,
    R as Ta,
    S as Va,
    __tla as za
} from "./index-6c08ea4c.js";

import {
    _ as Ia,
    __tla as Ra
} from "./ContentPage-f6bcc98e.js";

import {
    _ as Ea,
    __tla as La
} from "./index-c4ca0ced.js";

import {
    _ as Oa,
    __tla as Pa
} from "./index-8b41572c.js";

import {
    _ as $a,
    __tla as ja
} from "./index-cd582e93.js";

import {
    _ as qa,
    __tla as Aa
} from "./index-1024512a.js";

import {
    b as Ba,
    D as Fa,
    __tla as Ha
} from "./dict-c5825220.js";

import {
    d as Ma,
    __tla as Da
} from "./formatTime-de6f1520.js";

import {
    b as Ja,
    __tla as Qa
} from "./index-c31c99eb.js";

import {
    T as Ya,
    r as Ga,
    u as Ka,
    g as Wa,
    __tla as Xa
} from "./TenantManageForm-a9d8d488.js";

import {
    e as Za,
    __tla as at
} from "./index-5125d270.js";

import {
    _ as tt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as et
} from "./index-993301ca.js";

import "./tree-05ea8e09.js";

import {
    __tla as lt
} from "./DeptTag-1be092ce.js";

import {
    __tla as rt
} from "./index-ef4d146e.js";

import "./validate-b72f006c.js";

let J, ot = Promise.all([ (() => {
    try {
        return za;
    } catch {}
})(), (() => {
    try {
        return Ra;
    } catch {}
})(), (() => {
    try {
        return La;
    } catch {}
})(), (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return ja;
    } catch {}
})(), (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Ha;
    } catch {}
})(), (() => {
    try {
        return Da;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return Xa;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return rt;
    } catch {}
})() ]).then(async () => {
    let z, I, R, E, L, O, P;
    z = {
        class: "top-box"
    }, I = {
        class: "right btns-box header-btns pt-1"
    }, R = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, E = {
        class: "bottom-box"
    }, L = {
        class: "desc-box px-10px pb-20px pt-20px"
    }, O = (y => (Ta("data-v-a8da2c7b"), y = y(), Va(), y))(() => p("br", null, null, -1)), 
    P = {
        class: "password-box"
    }, J = tt(Object.assign({
        name: "SystemTenant"
    }, {
        __name: "manager",
        setup(y) {
            const b = ua(), S = n(!0), $ = n(0), j = n([]), _ = da({
                pageNo: 1,
                pageSize: 10
            }), Q = n([]), d = n(!1), u = n({}), C = n([]), m = n(""), q = n({
                name: void 0,
                status: void 0
            }), Y = F(() => [ {
                label: "账号状态",
                key: "status",
                type: "list",
                options: Ba(Fa.SYSTEM_USER_STATUS)
            } ]);
            function G(o) {
                q.value = o, N();
            }
            const K = async (o, e) => {
                try {
                    const U = e.label;
                    await b.confirm('确认要"' + U + '""' + o.nickname + '"用户吗?'), await Ka({
                        id: o.id,
                        status: e.value
                    }), await f();
                } catch {}
            }, f = async () => {
                S.value = !0;
                try {
                    const o = await Wa({
                        ..._,
                        ...q.value,
                        tenantId: m.value || ""
                    });
                    j.value = o.list, $.value = o.total;
                } finally {
                    S.value = !1;
                }
            }, N = () => {
                _.pageNo = 1, f();
            }, A = n(), B = (o, e) => {
                A.value.open(o, e);
            }, v = n(""), W = o => {
                v.value = o;
            }, X = F(() => v.value ? C.value.filter(o => o.name.indexOf(l(v)) >= 0 || (o.code || "").indexOf(l(v)) >= 0) : C.value);
            return ma(async () => {
                await f(), Q.value = await Za(), C.value = await Ja();
            }), (o, e) => {
                const U = ya, Z = ba, aa = qa, ta = va, w = ga, s = ka, ea = $a, la = xa, ra = Sa, oa = Ca, sa = Oa, na = Ea, ia = Ia, ca = Na, T = fa("hasPermi"), pa = Ua;
                return c(), H(D, null, [ a(ia, {
                    class: "cont-box"
                }, {
                    default: r(() => [ p("div", z, [ a(aa, {
                        searchList: l(Y),
                        onHandleSearch: G,
                        onHandleReset: e[1] || (e[1] = () => {
                            m.value = "";
                        }),
                        class: "left",
                        keywordsInfo: {
                            key: "keywords",
                            label: "工号/姓名"
                        }
                    }, {
                        append: r(() => [ a(Z, {
                            size: "large",
                            modelValue: l(m),
                            "onUpdate:modelValue": e[0] || (e[0] = t => M(m) ? m.value = t : null),
                            filterable: "",
                            "filter-method": W,
                            clearable: "",
                            onChange: N,
                            placeholder: "租户名称/代码",
                            class: "left search-item ml-10px !w-150px"
                        }, {
                            default: r(() => [ (c(!0), H(D, null, wa(l(X), t => (c(), 
                            h(U, {
                                key: t.id,
                                label: `${t.name}\uFF08${t.code || ""}\uFF09`,
                                value: t.id
                            }, null, 8, [ "label", "value" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    }, 8, [ "searchList" ]), p("div", I, [ k((c(), h(w, {
                        type: "primary",
                        size: "large",
                        onClick: e[2] || (e[2] = t => B("create"))
                    }, {
                        default: r(() => [ a(ta, {
                            icon: "ep:plus",
                            class: "mr-4px"
                        }), i(" 新增 ") ]),
                        _: 1
                    })), [ [ T, [ "system:tenant:create" ] ] ]) ]) ]), a(sa, {
                        class: "center-box",
                        "no-pager": !1
                    }, {
                        default: r(() => [ k((c(), h(oa, {
                            data: l(j),
                            height: "calc(100%)"
                        }, {
                            default: r(() => [ a(s, {
                                type: "index",
                                width: "60",
                                label: "序号"
                            }), a(s, {
                                label: "工号",
                                prop: "number"
                            }), a(s, {
                                label: "姓名",
                                prop: "nickname",
                                "show-overflow-tooltip": ""
                            }), a(s, {
                                label: "手机号",
                                prop: "mobile",
                                width: "120"
                            }), a(s, {
                                label: "电子邮箱",
                                prop: "email",
                                width: "120",
                                "show-overflow-tooltip": ""
                            }), a(s, {
                                label: "身份证号",
                                prop: "idCard",
                                width: "120",
                                "show-overflow-tooltip": ""
                            }), a(s, {
                                label: "负责租户",
                                prop: "tenantName",
                                width: "180",
                                "show-overflow-tooltip": ""
                            }, {
                                default: r(t => [ i(x(t.row.tenantName) + "（" + x(t.row.tenantCode) + "） ", 1) ]),
                                _: 1
                            }), a(s, {
                                label: "备注",
                                prop: "remark",
                                width: "100",
                                "show-overflow-tooltip": ""
                            }), a(s, {
                                label: "账号状态",
                                prop: "status",
                                width: "180"
                            }, {
                                default: r(t => [ a(ea, {
                                    row: t.row,
                                    status: t.row.status,
                                    onChangeStatus: K
                                }, null, 8, [ "row", "status" ]) ]),
                                _: 1
                            }), a(s, {
                                label: "创建人",
                                prop: "creator",
                                width: "180",
                                "show-overflow-tooltip": ""
                            }), a(s, {
                                label: "创建时间",
                                prop: "createTime",
                                width: "180",
                                formatter: l(Ma)
                            }, null, 8, [ "formatter" ]), a(s, {
                                label: "操作",
                                "min-width": "150",
                                fixed: "right"
                            }, {
                                header: r(() => [ p("div", R, [ i(" 操作  "), a(ra, {
                                    placement: "top-start",
                                    title: "",
                                    width: 200,
                                    trigger: "hover",
                                    content: "录入/导入账号默认密码“20Neu730@#Edu”"
                                }, {
                                    reference: r(() => [ a(la, null, {
                                        default: r(() => [ a(l(ha)) ]),
                                        _: 1
                                    }) ]),
                                    _: 1
                                }) ]) ]),
                                default: r(t => [ k((c(), h(w, {
                                    link: "",
                                    type: "primary",
                                    onClick: V => B("update", t.row.id)
                                }, {
                                    default: r(() => [ i(" 编辑 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ T, [ "system:tenant:update" ] ] ]), k((c(), 
                                h(w, {
                                    link: "",
                                    type: "primary",
                                    onClick: V => (async g => {
                                        u.value = {
                                            nickname: g.nickname,
                                            number: g.number,
                                            password: ""
                                        };
                                        try {
                                            await b.confirm("确认要重置用户“" + g.nickname + "”的密码吗?");
                                            let _a = await Ga({
                                                id: g.id
                                            });
                                            u.value.password = _a, d.value = !0, 
                                            await f();
                                        } catch {}
                                    })(t.row)
                                }, {
                                    default: r(() => [ i(" 重置密码 ") ]),
                                    _: 2
                                }, 1032, [ "onClick" ])), [ [ T, [ "system:tenant:update" ] ] ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "data" ])), [ [ pa, l(S) ] ]) ]),
                        _: 1
                    }), p("div", E, [ a(na, {
                        limit: l(_).pageSize,
                        "onUpdate:limit": e[3] || (e[3] = t => l(_).pageSize = t),
                        page: l(_).pageNo,
                        "onUpdate:page": e[4] || (e[4] = t => l(_).pageNo = t),
                        total: l($),
                        onPagination: f
                    }, null, 8, [ "limit", "page", "total" ]) ]) ]),
                    _: 1
                }), a(Ya, {
                    ref_key: "formRef",
                    ref: A,
                    onSuccess: N
                }, null, 512), a(ca, {
                    modelValue: l(d),
                    "onUpdate:modelValue": e[7] || (e[7] = t => M(d) ? d.value = t : null),
                    title: "提示",
                    width: "400"
                }, {
                    footer: r(() => [ a(w, {
                        onClick: e[5] || (e[5] = t => d.value = !1)
                    }, {
                        default: r(() => [ i("返回") ]),
                        _: 1
                    }), a(w, {
                        type: "primary",
                        onClick: e[6] || (e[6] = t => async function(V) {
                            try {
                                await navigator.clipboard.writeText(V), b.success("已成功复制到剪切板");
                            } catch {
                                b.warning("无法复制到剪切板，请自行复制");
                            }
                        }(l(u).password))
                    }, {
                        default: r(() => [ i("复制") ]),
                        _: 1
                    }) ]),
                    default: r(() => [ p("div", L, [ i(" 用户“" + x(l(u).nickname + "（" + l(u).number) + "）”，登录密码已重置为：", 1), O, p("div", P, x(l(u).password), 1) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ], 64);
            };
        }
    }), [ [ "__scopeId", "data-v-a8da2c7b" ] ]);
});

export {
    ot as __tla,
    J as default
};